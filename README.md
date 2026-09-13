# Food & Symptom Tracker

A small self-hosted app for logging what your mother eats and how she's
feeling, so you can spot patterns between certain foods and feeling unwell.

## What it does

- **Log**: quickly add a food entry (what + when) or a feeling entry
  (good / off / ill, severity, symptoms, when).
- **This Week**: a day-by-day timeline of everything logged in the last
  7 days.
- **Patterns**: for each food eaten more than once, shows how often it was
  followed within a chosen time window (default 8 hours) by feeling off or
  ill. Foods with a high "followed by illness" rate are worth watching —
  this is a simple heuristic, not a medical diagnosis.

Data is stored locally in `data/db.json` — nothing is sent anywhere else.

## Running it

```bash
npm install
npm start
```

Then open http://localhost:3000 in a browser (works fine on a phone on the
same network too, using the machine's local IP instead of localhost).

For development with auto-restart on file changes:

```bash
npm run dev
```

## Notes / limitations

- Single shared list — there's no login, so it's meant for one person (or a
  household) to use, not a public multi-user service.
- The "pattern" detection is a straightforward heuristic: it counts how
  often an illness event happened within N hours after eating a given food,
  out of all the times that food was eaten. It doesn't do any real
  statistical significance testing, so treat results eaten only 2-3 times
  with a grain of salt — the more it's logged, the more meaningful the rate
  becomes.
- Times are stored as entered in the browser; if you log entries from
  different timezones the comparisons could be off.
