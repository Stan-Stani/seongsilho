# Writing a chapter of 성실호

Read first: `CLAUDE.md`, `notes/canon.md`, your chapter's section of `notes/chapters-outline.md`, and `src/chapters/ch1.js` (the reference chapter — copy its shape).
You write exactly two files: `src/chapters/chN.js` and `tests/walk/chN.js`. Never edit `engine.js`, `shell.html`, other chapters, or `index.html`.
If you need an engine feature, stop and report it instead.

## The learner (design for this person)
- Rusty intermediate Korean (~TOPIK 3). Reads Hangul fluently. Comprehension > production.
- **Korean only** in dialogue, in short simple sentences (해요체). English appears only in `DICT[...].e` (shown behind a tap).
- Plays on a phone. **No instruction text** ("press A", "go here") — the world explains itself: locked doors say why, NPCs point the way,
  the 목표 line (questText) names the place + task in a few Korean words.
- Known words/grammar: see `notes/` learner profile summary below. Use known words freely around the new ones.
- Their real mistakes make the best wrong options: 상대/상태, 짓다/짖다/지다 (지을↔질), 돌려주다/돌아가다, 받다/맞다, 고치해야, 견디다/참다.
- Sino-Korean links to known words delight them (`hj` field): e.g. 연료 ↔ 연체료, 관측 ↔ 관중.
- Every wrong option needs a gentle 1–2 sentence Korean explanation that shows the right form.

Known words (selection): 집 학교 도서관 경기장 도장 연구소 카페 사람 선생님 박사 친구 상대 심판 관중 선수 강아지 고양이 배지 기술 공격 방어 상태 회복
시합 경기 규칙 연습 공부 단어 문장 사전 질문 연구 책 핸드폰 의자 탁자 침대 문 주머니 병 열쇠 가방 나무 연못 음식 과일 밥 커피 간식 빨래 반납 연체료
조합 구현 세계 이야기 건강 경고 의견 시간 주말 내일 오늘 처음 마지막 눕다 자다 떨어지다 떨어뜨리다 놓다 넣다 두다 들다 물다 따르다 지키다 빌리다 돌려주다
돌아가다 참다 견디다 개선하다 고치다 어울리다 짓다 짖다 이기다 지다 싸우다 가르치다 배우다 만들다 먹다 낫다 만지다 받다 이해하다 설명하다 저장하다 기억하다
추천하다 결정하다 구경하다 모으다 읽다 피곤하다 강하다 작다 크다 복잡하다 다양하다 자연스럽다 헷갈리다 아프다 무겁다 춥다 맛있다 중립적 어리다 늙다.
Plus every word taught in earlier chapters (they may appear in dialogue and as distractors, never re-taught as badges).
Grammar they use: 해요체, particles, -(으)ㄹ 거예요, -(으)ㄹ 것 같다, -아/어야 돼요, -(으)ㄹ 수 있다, -고 싶다, -(으)ㄴ 적 있다, -(으)면, -지만, -는데, -아/어서, -(으)ㄹ 때, -아/어 주세요.

## Lore rules
- Only facts true at your chapter's book pin (header comment). Source: `notes/canon.md` + outline. Never `notes/exodus_brief.md`.
- Tone: **match the book.** Murders, executions, bombings, deaths and betrayals happen on screen and are described plainly, as the novel does
  (a sprite falls, blood, characters say what happened and react). Don't exceed the book or linger on gore. Sex stays off-screen (a mention is fine).
  Dark events are also vocabulary: 죽다/죽이다, 총을 쏘다, 피, 시체, 폭탄, 배신하다, 범인, 증거, 장례식, 슬프다.
- Korean names use the English pronunciation (조사이어스, 드장, 옥테인, 엘리, 핀, 오틸리아, 테렌스, 기보이). Ship = 성실호.
- Every invented NPC must not contradict the book.

## Shape of a chapter file
```js
CHAPTERS.push({id:'ch2',n:'2장',title:'잔해',place:'레스타리 · 버블타운 · …',words:15,save:'seongsilho-ch2',color:'#5A8FB0',
 start:{zone:'…',x:…,y:…,dir:'down'},introWho:'레스타리',
 make:()=>{
  /* 2장 · 잔해 — Book pin: c013–c014 (…what is true now…). Lore source: notes/canon.md. */
  const WORDS=[…15–16 words…];
  const DICT={ word:{k:'Korean definition',e:'English',ex:'예문',hj:'漢字 · link to a known word'}, gloss:{k,e} … };
  const CONFUSE={word:['sound-alike','sound-alike']};   // used by listening questions
  const BANK=[ {w,ask,opts}… ];                          // ≥1 extra review question per word
  const Q={ npcKey:[ {w,ask:'… ___ …',opts:[['right',1],['wrong',0,'why, in Korean']]} … ] };
  const ITEMS={'item name':'description'};
  const f=()=>state.f; const hasItem=i=>state.items.includes(i);
  const TILES={ myTile:(X,Y,x,y,t)=>{…} };               // new tile drawings for this chapter
  const ZONES={ zoneId:{name,reg,legend,map,rooms,warps,spots,npcs,dark?,outdoor?,base?,planet?} };
  const NPC={ key:{name,zone,x,y,dir,look,badge,after,talk:()=>[…],script?,status?,pos?,hide?,pool?} };
  const FOLLOW=null | {name,look,when:()=>bool,talk:()=>[…]};
  const INTRO=[{who,say}…]; const DONE=['…','…'];
  function questText(){ … return 'place · task'; }
  const PLAYER=undefined; // optional look for the player sprite (default: a Diligent crew member)
  return {WORDS,DICT,CONFUSE,BANK,Q,ITEMS,ZONES,NPC,FOLLOW,INTRO,DONE,questText,TILES,PLAYER};
 }});
```

### Dialogue steps
`{say}` · `{ask:'… ___ …',opts:[[text,1],[text,0,'why']],w}` · `{build:['어절','어절',…],w}` (tap words in order; 3–5 pieces) ·
`{listen:w}` (only in review; engine builds it). Add to any step: `award:[words]` (adds to the log — put it on the LAST step of a talk),
`give:'item'`, `take:['item']`, `set:()=>{f().flag=1}`, `who:'speaker'`, `when:()=>bool` (skip if false), `finale:1` (on the very last line of the chapter).
Gloss markup inside text: `{shown text|DICT key}` — use for non-badge words a learner may not know.
Every `ask` and `build` needs `w` (the word it practises). Review reuses all `Q` and `BANK` questions.

### NPCs and sprites
People use the humanoid generator: `look:{hair,skin,shirt,pants,belt?,shoes?,style?,cap?,coat?,beard?,arm?}` (hex colors except flags).
`style`: 'short' | 'long' | 'bald' (grey/colored sides = hair) | 'bun' | 'spiky'. `coat:1` = long coat over the legs. `cap:color`. `beard:color`.
`arm:color` = mechanical left arm. Follow the book's physical descriptions (outline section C).
Anything that is not a regular human (Gath 3 m tall, the Daves' glowing quartz skin, Knights, Celestials, Ovar beetles, Icarians, saberstones,
drones…) gets a custom pixel-art sprite: `look:{art:{pal:{key:'#hex',…}, down:[rows], up:[rows], left:[rows], walk?:{down:[[rows],[rows]],left:[…]}}}`.
Rows are equal-length strings (≤16 wide, up to 32 tall); '.' is transparent; right = mirrored left. Sprites stand on the tile's bottom edge, so
a 16×32 sprite towers over its neighbours. Outline with '#1B1E2B', light from the top, 2–3 shades per material. `drawArt(rows,pal,X,Y,flip)`
is also available inside TILES for detailed tiles. `kind:'andy'` + `look:{body,visor}` still draws the simple robot.
`badge:[words]` = words this NPC teaches; `talk()` = first conversation; `after` = line before a review question once taught.
`script()` returns steps to override talk (state-dependent scenes) or `null` to fall back. `status()` returns 'todo'|'wait'|null|undefined (marker override).
`pos()` → [x,y] for an NPC that moves after a flag. `hide()` → true removes them (e.g. they became the follower). `pool()` → review questions.

### Zones and maps
Maps are arrays of equal-length strings, at least 11×10 (the view), typically 22–28 wide × 14–18 high. Every char must be in `legend`
(`{tile:'name',walk:1?,over:1?}`; `over` lets you talk across a counter). Built-in tiles you can reuse: hull deck grate window console hydro bunk
terminal pipes engine airlock ring plate planetWin crate stall lift tree lawn stone dome cable police cafe flowers pond bench.
Put one `terminal` (spaced-review console) in the chapter's hub zone. `rooms:[[x0,y0,x1,y1,'label']]` names areas in the corner tag.
`warps:{'x,y':{to,x,y,dir,lock?:()=>false|'Korean reason'}}` — land on a walkable non-warp tile. `spots:{'x,y':'text'}` — inspectable NON-walkable
tiles, reachable from a walkable neighbour that no NPC stands on. `dark:()=>[x0,y0,x1,y1]|null` = lights-out room with a torch circle.

### Tile drawing
`(X,Y,x,y,t)` → draw a 16×16 tile at screen X,Y for map cell x,y at time t (ms). Helpers: `r(x,y,w,h,color)`, `hash(x,y)` (0–99 stable noise),
`at(x,y)` (map char), `front(x,y)` (bottom edge of a wall run), `stars(X,Y,x,y,t,depth)`, `deck/plate/lawn(X,Y,x,y)`, `g` (canvas 2D context),
`CAM` (camera px), `state` (save). Pixel-art rules: flat colors, 1px detail, light from the top, walls show a lighter "front" face on their
bottom row, gentle animation only (blink, shimmer, drift) via `t`. Match the palette mood from the outline. Keep each tile function short.

## Word lists (fixed — use exactly these 16, spelled as given; dictionary form)
- 2장 잔해: 잔해 인양하다 위성 얼음 소금 파다 굴 계약 경호원 가속 추격하다 공격하다 죽이다 시체 범인 거짓말하다 — grammar: -아/어야 돼요, -(으)ㄹ 수 있다
- 3장 팔 년 후: 세월 변하다 결혼하다 조카 기차역 파도 교환하다 약속하다 축복 정당 선거 설치하다 약물 중독 배신하다 암살자 — grammar: -(으)ㄴ 지 N 됐다, -았/었을 때
- 4장 카이발: 화산 용암 진공 우주복 담 침입하다 발자국 구르다 무너지다 계단 먼지 질식하다 전멸 물리다 희생 멸망하다 — grammar: -지 마세요, -기 전에/-(으)ㄴ 후에, passive 물리다
- 5장 산타 로사: 수사 정보원 감시하다 증거 단서 변장하다 체포하다 시위 폭탄 폭발 테러 저격 암살 점령하다 장례식 처형 — grammar: -는 것 같다, -았/었던
- 6장 킹스네스트: 구름 층 어지럽다 돛 밧줄 흥정하다 빛나다 공장 명령하다 복종하다 해적 매복 거미 찔리다 기절하다 슬퍼하다 — grammar: -(으)면서, -게 하다
- 7장 돌로드: 진실 잊다 목격자 중력 폭풍 번개 갇히다 탈출하다 믿다 의무 돌아가시다 복수 분노 조종당하다 충돌하다 배신자 — grammar: -(으)ㄴ 줄 알았다
Weave the chapter's grammar focus into questions (choose the right ending) — not only vocabulary.

## Interludes (막간)
The outline lists Thyra/Wynid interludes. Present them in-world: a news screen, a recorded message, a dream, or an inspectable object that
opens a short scene (several `say` steps with `who:` speakers). Keep each to ≤ 8 lines. They can teach chapter words too.

## Quest + content checklist
- 15–16 words, none taught in earlier chapters (validator enforces), each with: a DICT entry (k, e, ex, hj where Sino-Korean),
  ≥2 questions total across Q+BANK, at least one teaching NPC, sound-alikes in CONFUSE.
- 6–8 quest steps with items/flags; `questText()` covers every state; a finale on the last NPC line (`finale:1`) + `DONE` lines.
- One or two `build` sentence questions; one NPC who reviews earlier chapters' words (no badge, like ch1's café).
- A follower is welcome if the story supports one.
- Lines short: ≤ ~40 Korean characters per `say`.

## Test (all must pass; LOOK at the screenshots)
```
python3 build.py && node tests/validate.mjs
node tests/play.mjs chN            # plays tests/walk/chN.js with real key presses at phone size
python3 tests/sheet.py chN         # contact sheets in tests/shots/chN/ — Read every sheet image and fix what looks wrong
```
`tests/walk/chN.js` is a JS array of steps in player order (see `tests/walk/ch1.js`): `{intro:1,shot}`, `{talk:'npcKey',wrong?,shotBefore?,shotChoice?,shotBuild?}`,
`{inspect:[zone,x,y],shot?}`, `{bump:[zone,'doorChar']}`, `{walkTo:[zone,x,y],then:'shotName'}`, `{check:()=>bool,msg}`, `{clock:ms}`, `{panel:1,shot}`.
Cover every NPC, every item/flag, the finale, a review at the terminal after `{clock:26*3600e3}`, and ~10 named screenshots of distinct places/moments.
