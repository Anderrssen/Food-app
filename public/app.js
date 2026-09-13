const STATUS_EMOJI = { good: '🙂', meh: '😐', bad: '🤢' };

function toDatetimeLocalValue(date) {
  const pad = (n) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function fmtTime(iso) {
  const d = new Date(iso);
  return d.toLocaleString(undefined, {
    weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit',
  });
}

function fmtDay(date) {
  return date.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' });
}

// ---- Tabs ----

document.querySelectorAll('.tab-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach((p) => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
    if (btn.dataset.tab === 'week') loadWeek();
    if (btn.dataset.tab === 'patterns') loadPatterns();
  });
});

// ---- Defaults ----

document.getElementById('food-time').value = toDatetimeLocalValue(new Date());
document.getElementById('feeling-time').value = toDatetimeLocalValue(new Date());

const severityInput = document.getElementById('feeling-severity');
const severityValue = document.getElementById('severity-value');
severityInput.addEventListener('input', () => { severityValue.textContent = severityInput.value; });

// ---- Food form ----

document.getElementById('food-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('food-name').value.trim();
  const time = document.getElementById('food-time').value;
  const notes = document.getElementById('food-notes').value.trim();
  if (!name || !time) return;

  const res = await fetch('/api/foods', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, time, notes }),
  });
  if (res.ok) {
    document.getElementById('food-form').reset();
    document.getElementById('food-time').value = toDatetimeLocalValue(new Date());
    loadRecent();
  } else {
    const err = await res.json().catch(() => ({}));
    alert(err.error || 'Could not save food entry.');
  }
});

// ---- Feeling form ----

document.getElementById('feeling-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const status = document.querySelector('input[name="status"]:checked').value;
  const severity = Number(severityInput.value);
  const symptoms = document.getElementById('feeling-symptoms').value.trim();
  const time = document.getElementById('feeling-time').value;
  const notes = document.getElementById('feeling-notes').value.trim();
  if (!time) return;

  const res = await fetch('/api/feelings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status, severity, symptoms, time, notes }),
  });
  if (res.ok) {
    document.getElementById('feeling-form').reset();
    severityInput.value = 0;
    severityValue.textContent = '0';
    document.getElementById('feeling-time').value = toDatetimeLocalValue(new Date());
    loadRecent();
  } else {
    const err = await res.json().catch(() => ({}));
    alert(err.error || 'Could not save feeling entry.');
  }
});

// ---- Recent entries ----

async function loadRecent() {
  const res = await fetch('/api/entries?days=3');
  const entries = await res.json();
  entries.sort((a, b) => new Date(b.time) - new Date(a.time));
  const list = document.getElementById('recent-list');
  list.innerHTML = '';

  if (!entries.length) {
    list.innerHTML = '<li class="empty-state">No entries yet.</li>';
    return;
  }

  for (const entry of entries.slice(0, 15)) {
    const li = document.createElement('li');
    li.className = 'entry-item';

    const main = document.createElement('div');
    main.className = 'entry-main';

    if (entry.kind === 'food') {
      main.innerHTML = `<span class="badge food">food</span>${escapeHtml(entry.name)}` +
        (entry.notes ? ` <span class="hint">(${escapeHtml(entry.notes)})</span>` : '');
    } else {
      main.innerHTML = `<span class="badge ${entry.status}">${STATUS_EMOJI[entry.status]} ${entry.status}</span>` +
        (entry.symptoms ? escapeHtml(entry.symptoms) : '') +
        (entry.notes ? ` <span class="hint">(${escapeHtml(entry.notes)})</span>` : '');
    }
    const time = document.createElement('div');
    time.className = 'entry-time';
    time.textContent = fmtTime(entry.time);
    main.appendChild(document.createElement('br'));
    main.appendChild(time);

    const del = document.createElement('button');
    del.className = 'delete-btn';
    del.textContent = '✕';
    del.title = 'Delete';
    del.addEventListener('click', async () => {
      const endpoint = entry.kind === 'food' ? 'foods' : 'feelings';
      await fetch(`/api/${endpoint}/${entry.id}`, { method: 'DELETE' });
      loadRecent();
    });

    li.appendChild(main);
    li.appendChild(del);
    list.appendChild(li);
  }
}

// ---- Week view ----

async function loadWeek() {
  const res = await fetch('/api/entries?days=7');
  const entries = await res.json();
  const container = document.getElementById('week-view');
  container.innerHTML = '';

  if (!entries.length) {
    container.innerHTML = '<p class="empty-state">No entries in the last 7 days yet.</p>';
    return;
  }

  const byDay = new Map();
  for (const entry of entries) {
    const d = new Date(entry.time);
    const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    if (!byDay.has(key)) byDay.set(key, { date: d, items: [] });
    byDay.get(key).items.push(entry);
  }

  const days = [...byDay.values()].sort((a, b) => b.date - a.date);

  for (const day of days) {
    const group = document.createElement('div');
    group.className = 'day-group';
    const h3 = document.createElement('h3');
    h3.textContent = fmtDay(day.date);
    group.appendChild(h3);

    const ul = document.createElement('ul');
    ul.className = 'entry-list';
    day.items.sort((a, b) => new Date(a.time) - new Date(b.time));
    for (const entry of day.items) {
      const li = document.createElement('li');
      li.className = 'entry-item';
      const time = new Date(entry.time).toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
      if (entry.kind === 'food') {
        li.innerHTML = `<div class="entry-main"><span class="badge food">food</span>${escapeHtml(entry.name)}</div><div class="entry-time">${time}</div>`;
      } else {
        li.innerHTML = `<div class="entry-main"><span class="badge ${entry.status}">${STATUS_EMOJI[entry.status]} ${entry.status}</span>${escapeHtml(entry.symptoms || '')}</div><div class="entry-time">${time}</div>`;
      }
      ul.appendChild(li);
    }
    group.appendChild(ul);
    container.appendChild(group);
  }
}

// ---- Patterns ----

async function loadPatterns() {
  const days = document.getElementById('pattern-days').value;
  const windowHours = document.getElementById('pattern-window').value;
  const res = await fetch(`/api/patterns?days=${days}&windowHours=${windowHours}`);
  const data = await res.json();

  const summary = document.getElementById('pattern-summary');
  summary.textContent = `${data.totalFoodEntries} food entries and ${data.totalIllnessEvents} illness events in the last ${data.days} days.`;

  const tbody = document.querySelector('#pattern-table tbody');
  tbody.innerHTML = '';

  if (!data.foods.length) {
    tbody.innerHTML = '<tr><td colspan="4" class="empty-state">Not enough repeated foods logged yet to spot a pattern. Keep logging!</td></tr>';
    return;
  }

  for (const food of data.foods) {
    const tr = document.createElement('tr');
    const pct = Math.round(food.rate * 100);
    const rateClass = pct >= 60 ? 'rate-high' : pct >= 30 ? 'rate-mid' : 'rate-low';
    tr.innerHTML = `
      <td>${escapeHtml(food.name)}</td>
      <td>${food.occurrences}</td>
      <td>${food.illnessFollowed}</td>
      <td class="rate-cell ${rateClass}">${pct}%</td>
    `;
    tbody.appendChild(tr);
  }
}

document.getElementById('pattern-days').addEventListener('change', loadPatterns);
document.getElementById('pattern-window').addEventListener('change', loadPatterns);

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

loadRecent();
