# 성실호 — Exodus Korean walk-around game

Source lives in `src/` (`shell.html`, `chapters/chN.js`, `engine.js`); `python3 build.py` assembles the single-file `index.html`,
which is published as a claude.ai artifact (republish from the same path). Never edit `index.html` by hand.
Each chapter is a cartridge with its own save key; never change an existing chapter's save key or break its saves (add `migrate`).
`reference/단어 마을.html` is the earlier game this grew from — never edit it.

## Learner
Rusty intermediate (~TOPIK 3), reads Hangul fluently, wants Korean-only dialogue in short sentences; English only behind a tap.
Plays on a phone. Dislikes on-screen instruction text — the game should explain itself.

## Lore workflow (required — accuracy problems came from skipping this)
1. **Canon first.** `notes/canon.md` is the single source of truth (built from full reads of the book, conflicts settled against the text).
   `notes/exodus_brief.md` is an early skim with known errors — never write content from it.
2. **Pin each game chapter to a book chapter range** (recorded in the content script's header comment). Only use facts true at that point
   (ownership, who is where, who knows whom, who is alive, titles).
3. **Audit before every commit/publish.** An agent that has the whole book in context checks every lore claim in the content script
   and returns mismatches with chapter citations. Fix all of them, then publish. Don't patch only the corrections you happen to notice.
4. Tone matches the book (user's choice, 2026-10-01): violence and deaths are shown/described plainly as in the novel, not beyond it;
   sex stays off-screen. canon "Content warnings" lists where these events are.

## Checks before publishing
- `python3 build.py && node tests/validate.mjs` (maps, warps, NPCs, words, questions, glosses, no word taught twice).
- `node tests/play.mjs chN` plays the chapter with real key presses in headless Chrome (400px phone viewport),
  following `tests/walk/chN.js`; saves screenshots + log to `tests/shots/chN/`. Must end with `ERRORS: none`.
- Only one playtest runs at a time (lock in play.mjs); never run more than 2 agents that playtest in parallel —
  6 parallel Chrome runs froze this 7 GB machine (2026-10-01).
- Publish only audited chapters: `python3 build.py --chapters ch1,ch3,…`.
- `node tests/coverage.mjs chN`: every object tile should say something when inspected (zone `things:{char:line}` for a tile kind, `spots` for one tile); keep it at 100%. Inspect lines are lore claims too — they go through the audit.
- `python3 tests/sheet.py chN` → contact sheets; LOOK at every sheet (layout, overlaps, readability, markers, lighting).

The epub and `claude-export/` are gitignored (copyright / personal data).

## Public mirror
After every publish run `tools/sync_public.sh`: it force-pushes this repo to the public twin (see tools/public-remote) with `notes/`
filtered out of all history (book summaries stay private). GitHub Pages serves `index.html` from the public twin.
