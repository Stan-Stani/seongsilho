// 7장 walkthrough: order a player would follow. wrong:true answers one question wrong first.
(()=>{
 // ch6's shotSay hook: capture every cut at its actual line, including the return to the room.
 const captures=[];
 const shots=(step,frames)=>{const c={i:0,frames};captures.push(c);return Object.defineProperty(step,'shotSay',{
  get:()=>frames[c.i],set:()=>{const f=frames[c.i++];if(f.black!==undefined&&(!!dlg.black!==f.black||$('fade').classList.contains('on')!==f.black||Number(getComputedStyle($('fade')).opacity)!==Number(f.black)))throw Error('wrong black screen at '+f.name)}})};
 const ride=(zone,x,y,name)=>[
  {walkTo:[zone,x,y]},
  {check:()=>!!dlg&&dlg.black&&$('fade').classList.contains('on'),msg:name+': flight starts over black'},
  {pause:1600,shot:name+'-cut'},
  {intro:1},
  {check:()=>!dlg&&!$('fade').classList.contains('on'),msg:name+': room returns on arrival'},
  {shot:name+'-arrival'}
 ];
 const ellieLines=()=>C.NPC.ellie.script().map(s=>s.say||'').join(' ');
 return [
 {check:()=>dlg&&dlg.black&&$('fade').classList.contains('on')&&dlg.cur.say.includes('31년'),msg:'31 years pass over black'},
 {pause:1000},
 {check:()=>getComputedStyle($('fade')).opacity==='1',msg:'opening fade is fully black before capture'},
 {intro:1,shot:'01-intro'},
 {check:()=>!$('fade').classList.contains('on'),msg:'opening returns to the owner quarters'},
 {pause:300,shot:'01a-quarters-arrival'},
 {talk:'ellie',shotSay:{text:'먼저 이야기',name:'01b-ellie-before-news'}},
 {check:()=>!ellieLines().includes('벤사스')&&!ellieLines().includes('화가')&&!ellieLines().includes('궤도'),msg:'Ellie has heard neither the deaths nor the mission nor the companion choice'},
 {talk:'gyvoy',shotSay:{text:'가까워지고',name:'01c-gyvoy-before-plan'}},
 {talk:'daveS'},
 {check:()=>!C.NPC.daveS.talk().some(s=>s.say.includes('돌로드')),msg:'Dave does not announce the mission before the plan'},
 {bump:['ship','R']},
 {talk:'finn'},
 {talk:'gath'},
 {talk:'gath',shotSay:{text:'바로 옆에',name:'01d-renata-second-hearing'}},
 {check:()=>C.NPC.gath.talk()[0].say.includes('바로 옆에'),msg:'Renata remembers giving her arrival greeting'},
 shots({talk:'otylia',wrong:true,shotChoice:'02-otylia-question'},[
  {text:'하프니르.',name:'02a-hafnir-memory',black:true},
  {text:'쾅!',name:'02b-hafnir-missile',black:true},
  {text:'핀, 엄마하고',name:'02c-otylia-back-in-room',black:false}
 ]),
 {talk:'ellie',shotSay:{text:'많이 힘들어',name:'02d-ellie-after-news'}},
 {check:()=>!ellieLines().includes('벤사스')&&!ellieLines().includes('궤도'),msg:'Ellie knows the grief but no mission or choice yet'},
 {talk:'laurella'},
 {inspect:['ship',8,1],shot:'03-news'},
 {talk:'zelinda',wrong:true},
 {talk:'everett',shotBefore:'04-quarters'},
 {check:()=>state.f.plan,msg:'plan made'},
 shots({talk:'holo1'},[
  {text:'왔을 무렵',name:'05a-terence-remote-scene',black:true},
  {text:'진짜 기보이',name:'05-interlude-terence',black:true},
  {text:'곤디아를 떠나요',name:'05b-terence-departure',black:true},
  {text:'현관의 프리즘',name:'05c-terence-back-on-ship',black:false}
 ]),
 {talk:'ellie',shotSay:{text:'궤도를 바꾸는',name:'05d-ellie-before-choice'}},
 {check:()=>ellieLines().includes('궤도')&&!ellieLines().includes('벤사스'),msg:'Ellie knows the plan but the companion has not been chosen'},
 {talk:'pablo'},
 {talk:'aljan',wrong:true},
 {talk:'dejean',shotBefore:'06-hangar'},
 {check:()=>state.items.includes('우주복'),msg:'got the suit'},
 {talk:'gyvoy'},
 {talk:'bensath'},
 {talk:'daveS'},
 {talk:'finn',shotSay:{text:'벤사스 하사도',name:'06a-companion-choice'}},
 {check:()=>state.f.launch,msg:'launched'},
 {talk:'ellie',shotSay:{text:'벤사스를 골랐어요',name:'06b-ellie-after-choice'}},
 {check:()=>ellieLines().includes('벤사스')&&C.NPC.gyvoy.hide()&&C.NPC.bensath.hide(),msg:'the companion choice is known; the departing crew leave the ship'},
 ...ride('dolod',5,6,'07-drop-ride'),  // the flight down is told on arrival
 {check:()=>ZID==='dolod'&&!state.f.ride,msg:'the flight down was told'},
 {talk:'finnD'},
 {talk:'dave1',wrong:true},
 {talk:'dave2'},
 {talk:'gyvoyD',shotSay:{text:'드디어 돌로드',name:'07b-gyvoy-at-dolod'}},
 {talk:'bensathD',shotBefore:'08-storm-gallery'},
 shots({talk:'finnD',shotBefore:'09-petal-chamber'},[
  {text:'원래 계획은 돌로드',name:'09a-original-plan',black:false},
  {text:'돌로드 대신',name:'09b-boksrock-plan',black:false}
 ]),
 {check:()=>state.f.linked,msg:'Finn linked to the Engine'},
 shots({talk:'holo2'},[
  {text:'멀리 티라',name:'10a-thyra-remote-scene',black:true},
  {text:'돌로드 궤도',name:'10b-skyhook',black:true},
  {text:'묶여서 올라가요',name:'10c-skyhook-ascent',black:true},
  {text:'다곤',name:'10-interlude-thyra',black:true},
  {text:'작은 방이에요',name:'10d-back-at-base',black:false}
 ]),
 {check:()=>C.NPC.gyvoyD.hide()&&C.NPC.bensathD.hide(),msg:'Gyvoy and Bensas have left the base'},
 {talk:'finnD'},
 {talk:'dave2',wrong:true,shotBefore:'11-stranded'},
 {check:()=>state.items.includes('물병'),msg:'water for Finn'},
 {talk:'finnD',shotBuild:'12-build'},
 {check:()=>state.f.woke&&!state.items.includes('물병'),msg:'Finn awake'},
 {walkTo:['dolod',22,15],then:'13-anchor-hangar'},
 ...ride('ship',22,14,'14-anchor-ride'),  // the flight back is told on arrival
 {check:()=>ZID==='ship'&&state.f.home&&!state.f.ride,msg:'the flight back was told'},
 {talk:'ellie'},
 {talk:'pablo',wrong:true},
 shots({talk:'ellie',wrong:true},[
  {text:'핀이 손바닥',name:'15a-ellie-memory',black:true},
  {text:'보라색 선',name:'15b-induction-memory',black:true},
  {text:'안녕~',name:'15-memory',black:true},
  {text:'인간이 아니라',name:'15c-ellie-back-in-bedroom',black:false}
 ]),
 {check:()=>state.items.includes('레콜 병'),msg:'rekaul vial'},
 {talk:'aljan'},
 {check:()=>!state.items.includes('레콜 병'),msg:'vial handed in'},
 {check:()=>state.badges.length===C.WORDS.length,msg:'all words collected'},
 shots({talk:'dejean',shotBefore:'16-command'},[
  {text:'가속 1만',name:'16a-10000g-flight',black:true},
  {text:'관문 도착',name:'16b-gate-arrival',black:true},
  {text:'지휘 통제실이에요',name:'16c-back-in-command',black:false}
 ]),
 {check:()=>state.f.jump,msg:'10,000 g jump'},
 {walkTo:['capo',11,8],then:'17-capo-gate'},
 {talk:'zelindaC'},
 {talk:'finnC'},
 {talk:'otyliaC'},
 {talk:'ellieC'},
 {talk:'dejeanC'},
 shots({talk:'holo3'},[
  {text:'사라진 직후',name:'17a-remote-pursuit',black:true},
  {text:'갑판의 프리즘',name:'17b-pursuit-back-on-deck',black:false}
 ]),
 shots({talk:'holo3'},[
  {text:'켈로완.',name:'18a-kelowan-remote-scene',black:true},
  {text:'하나 끝',name:'18-empress',black:true},
  {text:'갑판의 프리즘',name:'18b-kelowan-back-on-deck',black:false}
 ]),
 shots({talk:'zelindaC'},[
  {text:'같은 시간, 아르카디아',name:'19a-arcadia-remote-scene',black:true},
  {text:'아주 많은 폭탄',name:'19-finale',black:true},
  {text:'어둠 속으로',name:'19b-cliffhanger',black:true}
 ]),
 {check:()=>state.f.done,msg:'chapter done'},
 {check:()=>C.REVIEW.filter(r=>r.by==='otyliaC'&&r.w==='돌아가시다').every(r=>r.ask.includes('하프니르')&&r.ask.includes('관문')),msg:'Otylia remembers Hafnir while standing at the Gate'},
 {check:()=>C.BANK.filter(q=>q.w==='배신자').every(q=>q.opts.find(o=>o[1])[0]==='배신자'),msg:'the traitor review tests the word itself'},
 {check:()=>C.REVIEW.filter(r=>r.by==='finnC'&&r.w==='진실').every(r=>r.opts.map(o=>o[0]).join('/')==='진실/거짓/지식'),msg:'truth review uses grammatical truth/falsehood/knowledge choices'},
 {check:()=>C.DICT['철비']&&LEX.map['철비'].includes('철비'),msg:'iron rain taps as its own dictionary entry'},
 {clock:26*3600e3},
 {inspect:['ship',1,4],shot:'20-terminal'},
 {talk:'zelindaC'},
 {look:true,shot:'90-look'},
 {panel:1,shot:'21-log'},
 // in-character review: with every word due, earlier chapters too, everyone who has a line asks it in their own voice, and it grades
 {reviewTour:Object.keys(C.ZONES),carry:1},
 // …and with nothing due, people with a line you haven't heard say it as plain talk (the word filled in, ungraded)
 {hearTour:Object.keys(C.ZONES)},
 // Exhaust Renata's eligible review lines, then check ordinary talk twice after the ending.
 {check:()=>{for(const r of C.REVIEW.filter(r=>r.by==='gath')){const k=r.w+'|'+r.ask;if(!state.heard.includes(k))state.heard.push(k)}return true},msg:'Renata has no unheard review lines'},
 {talk:'gath',shotSay:{text:'관문 앞까지',name:'22a-renata-at-gate'}},
 {talk:'gath',shotSay:{text:'돌볼 사람들이',name:'22b-renata-after-ending'}},
 {inspect:['ship',12,3],shotSay:{text:'열려 있어요',name:'23-bedroom-entrance'}},
 {inspect:['ship',15,6],shotSay:{text:'문이 없어요',name:'23a-bedroom-bottom-wall'}},
 {check:()=>captures.every(c=>c.i===c.frames.length),msg:'all dialogue cut screenshots captured'},
 ]
})()
