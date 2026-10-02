# 성실호 — Exodus Korean walk-around game

Single-file game: `index.html` (first `<script>` = chapter content, second = engine). Published as a claude.ai artifact; republish from the same file path.
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
4. Keep it all-ages: the book has graphic violence (see canon "Content warnings").

## Checks before publishing
- `node --check` both scripts; validate maps (row widths, legend chars), NPC/warp positions walkable, every word has questions + DICT entry.
- `tests/playtest.sh` must pass (plays the whole chapter; update the driver when content changes).
- One headless Chrome screenshot (flatpak `com.google.Chrome --headless=new --screenshot`) and console log check.

The epub and `claude-export/` are gitignored (copyright / personal data).
