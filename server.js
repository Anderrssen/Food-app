const express = require('express');
const path = require('path');
const { readDb, writeDb, newId } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const ILLNESS_STATUSES = new Set(['meh', 'bad']);
const MS_PER_HOUR = 1000 * 60 * 60;

function isIllnessEvent(feeling) {
  return feeling.status === 'bad' || (feeling.status === 'meh' && feeling.severity >= 3);
}

function daysAgoCutoff(days) {
  return Date.now() - days * 24 * MS_PER_HOUR;
}

// ---- Foods ----

app.get('/api/foods', (req, res) => {
  const days = Number(req.query.days) || 7;
  const cutoff = daysAgoCutoff(days);
  const db = readDb();
  const foods = db.foods
    .filter((f) => new Date(f.time).getTime() >= cutoff)
    .sort((a, b) => new Date(b.time) - new Date(a.time));
  res.json(foods);
});

app.post('/api/foods', (req, res) => {
  const { name, time, notes } = req.body || {};
  if (!name || !String(name).trim()) {
    return res.status(400).json({ error: 'Food name is required.' });
  }
  if (!time || isNaN(new Date(time).getTime())) {
    return res.status(400).json({ error: 'A valid time is required.' });
  }
  const db = readDb();
  const entry = {
    id: newId(),
    name: String(name).trim(),
    time: new Date(time).toISOString(),
    notes: notes ? String(notes).trim() : '',
    createdAt: new Date().toISOString(),
  };
  db.foods.push(entry);
  writeDb(db);
  res.status(201).json(entry);
});

app.delete('/api/foods/:id', (req, res) => {
  const db = readDb();
  const before = db.foods.length;
  db.foods = db.foods.filter((f) => f.id !== req.params.id);
  if (db.foods.length === before) return res.status(404).json({ error: 'Not found.' });
  writeDb(db);
  res.status(204).end();
});

// ---- Feelings ----

app.get('/api/feelings', (req, res) => {
  const days = Number(req.query.days) || 7;
  const cutoff = daysAgoCutoff(days);
  const db = readDb();
  const feelings = db.feelings
    .filter((f) => new Date(f.time).getTime() >= cutoff)
    .sort((a, b) => new Date(b.time) - new Date(a.time));
  res.json(feelings);
});

app.post('/api/feelings', (req, res) => {
  const { status, severity, symptoms, time, notes } = req.body || {};
  if (!['good', 'meh', 'bad'].includes(status)) {
    return res.status(400).json({ error: 'Status must be good, meh, or bad.' });
  }
  if (!time || isNaN(new Date(time).getTime())) {
    return res.status(400).json({ error: 'A valid time is required.' });
  }
  const sev = Number(severity) || (status === 'good' ? 0 : status === 'bad' ? 4 : 2);
  const db = readDb();
  const entry = {
    id: newId(),
    status,
    severity: Math.min(5, Math.max(0, sev)),
    symptoms: symptoms ? String(symptoms).trim() : '',
    time: new Date(time).toISOString(),
    notes: notes ? String(notes).trim() : '',
    createdAt: new Date().toISOString(),
  };
  db.feelings.push(entry);
  writeDb(db);
  res.status(201).json(entry);
});

app.delete('/api/feelings/:id', (req, res) => {
  const db = readDb();
  const before = db.feelings.length;
  db.feelings = db.feelings.filter((f) => f.id !== req.params.id);
  if (db.feelings.length === before) return res.status(404).json({ error: 'Not found.' });
  writeDb(db);
  res.status(204).end();
});

// ---- Combined timeline ----

app.get('/api/entries', (req, res) => {
  const days = Number(req.query.days) || 7;
  const cutoff = daysAgoCutoff(days);
  const db = readDb();
  const foods = db.foods
    .filter((f) => new Date(f.time).getTime() >= cutoff)
    .map((f) => ({ ...f, kind: 'food' }));
  const feelings = db.feelings
    .filter((f) => new Date(f.time).getTime() >= cutoff)
    .map((f) => ({ ...f, kind: 'feeling' }));
  const entries = [...foods, ...feelings].sort((a, b) => new Date(a.time) - new Date(b.time));
  res.json(entries);
});

// ---- Pattern analysis ----
// Heuristic only: for each food, what fraction of the times it was eaten was
// followed within `windowHours` by an illness event (a "meh" with notable
// severity, or a "bad"). Foods eaten fewer than `minOccurrences` times are
// excluded since there's not enough signal to say anything useful.

app.get('/api/patterns', (req, res) => {
  const days = Number(req.query.days) || 30;
  const windowHours = Number(req.query.windowHours) || 8;
  const minOccurrences = Number(req.query.minOccurrences) || 2;

  const cutoff = daysAgoCutoff(days);
  const db = readDb();
  const foods = db.foods.filter((f) => new Date(f.time).getTime() >= cutoff);
  const feelings = db.feelings.filter((f) => new Date(f.time).getTime() >= cutoff);
  const illnessEvents = feelings.filter(isIllnessEvent);

  const byName = new Map();
  for (const food of foods) {
    const key = food.name.trim().toLowerCase();
    if (!byName.has(key)) {
      byName.set(key, { name: food.name.trim(), occurrences: 0, illnessFollowed: 0, times: [] });
    }
    const bucket = byName.get(key);
    bucket.occurrences += 1;

    const eatenAt = new Date(food.time).getTime();
    const followedByIllness = illnessEvents.some((ev) => {
      const delta = new Date(ev.time).getTime() - eatenAt;
      return delta >= 0 && delta <= windowHours * MS_PER_HOUR;
    });
    if (followedByIllness) {
      bucket.illnessFollowed += 1;
      bucket.times.push(food.time);
    }
  }

  const overallIllnessRate = foods.length
    ? [...byName.values()].reduce((sum, b) => sum + b.illnessFollowed, 0) / foods.length
    : 0;

  const results = [...byName.values()]
    .filter((b) => b.occurrences >= minOccurrences)
    .map((b) => ({
      name: b.name,
      occurrences: b.occurrences,
      illnessFollowed: b.illnessFollowed,
      rate: b.occurrences ? b.illnessFollowed / b.occurrences : 0,
    }))
    .sort((a, b) => b.rate - a.rate || b.occurrences - a.occurrences);

  res.json({
    windowHours,
    days,
    minOccurrences,
    totalFoodEntries: foods.length,
    totalIllnessEvents: illnessEvents.length,
    overallIllnessRate,
    foods: results,
  });
});

app.listen(PORT, () => {
  console.log(`Food & symptom tracker running at http://localhost:${PORT}`);
});
