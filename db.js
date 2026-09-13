const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DB_PATH = path.join(__dirname, 'data', 'db.json');

function ensureDb() {
  if (!fs.existsSync(path.dirname(DB_PATH))) {
    fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
  }
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify({ foods: [], feelings: [] }, null, 2));
  }
}

function readDb() {
  ensureDb();
  const raw = fs.readFileSync(DB_PATH, 'utf8');
  try {
    const data = JSON.parse(raw);
    if (!Array.isArray(data.foods)) data.foods = [];
    if (!Array.isArray(data.feelings)) data.feelings = [];
    return data;
  } catch {
    return { foods: [], feelings: [] };
  }
}

function writeDb(data) {
  ensureDb();
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

function newId() {
  return crypto.randomUUID();
}

module.exports = { readDb, writeDb, newId };
