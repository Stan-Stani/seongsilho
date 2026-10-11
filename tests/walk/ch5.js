// 5장 walkthrough: order a player would follow. wrong:true answers one question wrong first.
(()=>{
 // Capture several lines in one conversation using the driver's existing shotSay hook. Check each cut's fade at the screenshot.
 const captures=[];
 const shots=(step,frames)=>{const capture={i:0,frames};captures.push(capture);return Object.defineProperty(step,'shotSay',{
  get:()=>frames[capture.i],set:()=>{const frame=frames[capture.i++];if(frame.black!==undefined&&!!dlg.black!==frame.black)throw Error('wrong black screen at '+frame.name)}})};
 return [
 {intro:1,shot:'01-intro'},
 {talk:'lucia',wrong:true,shotBefore:'02-hq'},
 {check:()=>!!C.NPC.luciaCell.walk,msg:'루치아 walks to the interrogation room'},
 {pause:0,shot:'02a-lucia-walks'},
 {pause:3500},
 {check:()=>!C.NPC.luciaCell.walk,msg:'…and arrives'},
 // behind the one-way mirror: Bopbe is talked to across it (the interrogation room's door stays shut until he's gone)
 {inspect:['hq',18,4],wrong:true,shot:'03-monitor-room',shotSay:{text:'봅베의 몸에서 불이',name:'04-bopbe-fire'}},
 {check:()=>state.f.bopbeDead&&!state.badges.includes('처형'),msg:'Bopbe burned; lab next'},
 {talk:'lucia'},
 shots({talk:'lab',shotChoice:'05-lab-question'},[
  {text:'일주일 뒤',name:'05a-week-cut',black:true},
  {text:'루치아 팀의 정보원이',name:'05b-lab-return',black:false}]),
 {check:()=>state.items.includes('오더바이저 가면'),msg:'othervisor mask'},
 shots({talk:'interlude',shotBefore:'06-interlude'},[
  {text:'먼 와이니드의 티라',name:'06a-interlude-1',black:true},
  {text:'다시 산타 로사 경찰서',name:'06b-hq-return',black:false}]),  // the Wynid 막간 play on the crystal, not the news screen
 {bump:['city','G']},
 {talk:'zikar',wrong:true,shotBefore:'07-street'},
 {talk:'snatch',shotBefore:'08-disguised'},
 {check:()=>state.f.sting&&!state.items.includes('오더바이저 가면'),msg:'sting done, mask used'},
 {talk:'zikar'},
 {check:()=>state.items.includes('표적 드론 설계도'),msg:'drone blueprint clue'},
 shots({talk:'interlude'},[{text:'여덟 달 뒤',name:'08a-interlude-2',black:true}]),
 {talk:'aljan'},
 {talk:'pro2'},
 {talk:'vanilda',shotBuild:'09-sentence-build'},
 {check:()=>!npcAt(13,11)&&!npcAt(14,11),msg:'protest line opens'},
 {talk:'bersche'},  // brought in after the protest
 shots({talk:'interlude'},[{text:'여왕이 된 지 오 년',name:'09a-interlude-3',black:true}]),
 {talk:'feed'},  // the big console at Terence's desk takes you up to Lućia's feed
 {talk:'tose',shotBefore:'10-lucia-feed'},
 {talk:'cleaner'},
 {walkTo:['tower',12,11],then:'11-capsule-window'},
 {talk:'feed',shotSay:{text:'사무실 창문',name:'12-office-blast'}},
 {check:()=>state.f.boom,msg:'capsule bomb'},
 {talk:'maria'},
 shots({talk:'interlude'},[{text:'바사 궤도 링의 코르토나',name:'12a-interlude-4',black:true}]),
 {talk:'jimena',shotBefore:'13-memorial'},
 {check:()=>C.NPC.aljan.again().every(s=>!s.includes('파티')&&!s.includes('공부')),msg:'Aljan has no party/student chatter after the bombing'},
 {check:()=>C.REVIEW.filter(r=>r.by==='vanilda'&&['시위','경호원','정당'].includes(r.w)).every(r=>!r.when()),msg:'Vanilda has no cheerful protest reviews at the memorial'},
 {talk:'aljan',shotSay:{text:'루치아 누나',name:'13a-aljan-memorial'}},
 {talk:'vanilda',shotSay:{text:'너무 슬퍼요',name:'13b-vanilda-memorial'}},
 {talk:'zelinda'},
 {talk:'medusaSt',shotBefore:'14-medusa'},
 {talk:'medusa',wrong:true},
 shots({talk:'lab'},[
  {text:'석 달이 지났어요',name:'14a-three-month-cut',black:true},
  {text:'몇 주 뒤',name:'14b-weeks-cut',black:true},
  {text:'열 달이 더 지났어요',name:'14c-graduation-cut',black:true},
  {text:'카약을 탈 때',name:'14d-kayak',black:true},
  {text:'산타 로사로 돌아와요',name:'14e-return-trip',black:true},
  {text:'총독 저택 앞이에요',name:'14f-mansion-arrival',black:false}]),
 {check:()=>state.f.liliana&&state.items.includes('캡슐 역 영상'),msg:'Liliana identified'},
 {check:()=>C.NPC.aljan.again().join(' ').includes('병원')&&!C.NPC.aljan.again().join(' ').includes('공부'),msg:'Aljan now works at the hospital'},
 {talk:'aljan'},
 shots({talk:'aljan'},[{text:'병원에서 일해요',name:'14g-aljan-doctor'}]),
 {talk:'makaio',shotBefore:'15-balcony',shotSay:{text:'말을 못 해요',name:'16-sniped'}},
 {talk:'barman',wrong:true,shotBefore:'17-bar'},
 shots({talk:'spirit'},[
  {text:'두 달 동안',name:'17a-dream-cut',black:true},
  {text:'농담 하나',name:'17b-dream-bar',black:false},
  {text:'시간이 흘러요',name:'17c-years-montage',black:true},
  {text:'두 해가 지났어요',name:'17d-two-year-cut',black:true},
  {text:'산타 로사 광장이에요',name:'17e-square-arrival',black:false}]),
 {check:()=>state.f.occupied,msg:'two years later: occupation'},
 shots({talk:'interlude'},[{text:'점령군이 오기 조금 전',name:'17f-interlude-5',black:true}]),
 {talk:'general',shotBefore:'18-occupation'},
 {talk:'ghost1'},
 {talk:'lion1'},
 shots({talk:'news'},[
  {text:'그날 밤',name:'18a-night-cut',black:true},
  {text:'불법 방송이에요',name:'18b-night-news',black:false}]),
 {check:()=>state.f.news6&&state.f.news7&&C.questText().includes('글로브캡'),msg:'one news interaction advances to the rescue objective'},
 {check:()=>state.f.missile,msg:'missile news'},
 {talk:'maria'},
 // the globecab: arriving at the villa, the ride is told and Otylia speaks as the zone's greeting (so walkTo the landing tile)
 {walkTo:['villa',8,8]},{intro:1,shot:'19a-hafnir-ride'},
 {check:()=>state.f.rescued,msg:'driven to the villa; Otylia tells it'},
 {talk:'otylia',shotBefore:'19-villa'},
 shots({talk:'otylia'},[{text:'다른 여자와 또',name:'19b-otylia-bridge'}]),
 {inspect:['villa',3,4],shot:'19c-sleepers'},
 {talk:'zelindaS'},
 {talk:'haian'},
 {talk:'aljanS'},
 {check:()=>state.f.club,msg:'club opens'},
 {check:()=>petOn(),msg:'바닐다 comes along from here'},
 {talk:'news'},
 shots({talk:'patch',shotBefore:'20-club'},[
  {text:'세 주 동안',name:'20a-three-week-cut',black:true},
  {text:'맨 아래 지하층',name:'20b-basement-return',black:false}]),
 {check:()=>state.badges.length===C.WORDS.length,msg:'all words collected'},
 shots({talk:'jimenaC'},[
  {text:'몇 분 뒤',name:'21a-dna-wait',black:true},
  {text:'기보이 엔포',name:'21-gyvoy',black:false}]),
 {check:()=>state.f.done,msg:'chapter done'},
 {clock:26*3600e3},
 {inspect:['hq',1,2],shot:'22-terminal'},
 {look:true,shot:'90-look'},
 {panel:1,shot:'23-log'},
 {chapters:1,shot:'24-chapters'},
 // in-character review: with every word due, earlier chapters too, everyone who has a line asks it in their own voice, and it grades
 {reviewTour:Object.keys(C.ZONES),carry:1},
 // …and with nothing due, people with a line you haven't heard say it as plain talk (the word filled in, ungraded)
 {hearTour:Object.keys(C.ZONES)},
 {check:()=>captures.every(c=>c.i===c.frames.length),msg:'all transition screenshots captured'},
]
})()
