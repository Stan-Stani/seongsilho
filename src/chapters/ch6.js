CHAPTERS.push({id:'ch6',n:'6장',title:'킹스네스트',place:'마이탈포트 · 나소 · 실버 클라우드스피어 · 공장',words:16,save:'seongsilho-ch6',color:'#3FA58C',
 start:{zone:'ship',x:9,y:8,dir:'up'},introWho:'성실호',
 make:()=>{
/* =====================================================================
   6장 · 킹스네스트 — content. The engine draws, moves and runs dialogue.
   Book pin: c022 only. The Diligent waits 20 km off Kingsnest (4 months' grace). Away team: Finn, Ellie, Gyvoy, the Daves,
   Elsbeth, Bensath, Iarik, Uemi-Jubalee (stays on the airboat). Ellie is still sore about being left behind in Hell Welcomes
   at Kajval. Gyvoy keeps the goal secret from the airboat crew. Koa (female Ovar, pilot Dylan) and Kaizen are killed by
   Grozlamia-riding Icarian pirates; Finn turns a nightweid swarm on the three pirate airboats (Elsbeth: a massacre).
   Return through the Oxanotol Gate: 31 years 8 months later, Dolod 18 weeks out, Otylia hails from the Polkadav.
   Nobody aboard knows anything about Gyvoy yet, or about the occupation of Gondiar.
   Lore source: notes/canon.md + notes/chapters-outline.md (6장). Audit against the full book before publishing.
   ===================================================================== */
const WORDS=['구름','층','어지럽다','돛','밧줄','흥정하다','빛나다','공장','명령하다','복종하다','해적','매복','거미','찔리다','기절하다','슬퍼하다'];
const DICT={
 '구름':{k:'하늘에 떠 있는 하얀 것. 비가 될 수 있어요.',e:'cloud',ex:'킹스네스트 안은 구름으로 가득해요.',hj:'순우리말 · 구름 ↔ 그림, 구멍과 헷갈리지 마세요'},
 '층':{k:'위아래로 쌓인 한 겹. 건물의 높이도 층.',e:'layer; floor (of a building)',ex:'구름이 층층이 쌓여 있어요.',hj:'層 · 2층, 3층의 층 · 층층이 = 겹겹이'},
 '어지럽다':{k:'머리가 빙글빙글 돌아요.',e:'to be dizzy',ex:'아래를 보면 어지러워요.',hj:'순우리말 · 어지러워요 / 어지러워서'},
 '돛':{k:'바람을 받아서 배를 움직이는 큰 천.',e:'sail',ex:'까만 돛이 바람을 받아요.',hj:'순우리말 · 받침 ㅊ! 독(毒)과 달라요'},
 '밧줄':{k:'배를 묶을 때 쓰는 아주 굵은 줄.',e:'rope',ex:'밧줄을 꽉 당겨요.',hj:'순우리말 · 바 + 줄 · 줄넘기의 줄'},
 '흥정하다':{k:'물건 값을 서로 이야기해서 정해요.',e:'to haggle, bargain',ex:'시장에서 값을 흥정했어요.',hj:'순우리말 · 흥분(興奮)하고 달라요'},
 '빛나다':{k:'빛이 나요. 반짝반짝해요.',e:'to shine, glow',ex:'보라색 칼이 빛나요.',hj:'순우리말 · 빛 + 나다 · 빚(돈)과 달라요'},
 '공장':{k:'기계로 물건을 많이 만드는 곳.',e:'factory',ex:'이 공장은 엔진을 만들어요.',hj:'工場 · 場 = 경기장의 장 · 공항(空港)과 달라요'},
 '명령하다':{k:'윗사람이 아랫사람한테 "해!" 하고 시켜요.',e:'to order, command',ex:'선장이 출발하라고 명령했어요.',hj:'命令 · 命 = 생명의 명'},
 '복종하다':{k:'명령을 그대로 따라요.',e:'to obey',ex:'군인은 명령에 복종해요.',hj:'服從 · 從 = 따르다 · 복잡(複雜)과 달라요'},
 '해적':{k:'배를 공격해서 물건을 빼앗는 사람.',e:'pirate',ex:'해적 배가 따라와요.',hj:'海賊 · 海 = 바다, 해산물의 해 · 賊 = 도둑'},
 '매복':{k:'숨어서 기다리다가 갑자기 공격하는 것.',e:'ambush',ex:'해적들이 터널에서 매복했어요.',hj:'埋伏 · 伏 = 엎드리다'},
 '거미':{k:'다리가 여덟 개. 줄을 만들어서 벌레를 잡아요.',e:'spider',ex:'거미가 거미줄을 쳤어요.',hj:'순우리말 · 거미줄 · 개미(다리 여섯)와 달라요'},
 '찔리다':{k:'날카로운 것이 몸에 들어와요. "찌르다"의 피동.',e:'to be stabbed, pierced',ex:'장미 가시에 손가락을 찔렸어요.',hj:'순우리말 · 찌르다 → 찔리다 (물다 → 물리다처럼)'},
 '기절하다':{k:'갑자기 정신을 잃고 쓰러져요.',e:'to faint, pass out',ex:'너무 놀라서 기절했어요.',hj:'氣絶 · 氣 = 기운, 공기의 기'},
 '슬퍼하다':{k:'다른 사람이 슬픈 마음을 보여요.',e:'to grieve, be sad (about)',ex:'딜런이 코아 때문에 슬퍼해요.',hj:'순우리말 · 슬프다 + -어하다 (남의 마음)'},
 /* glosses for words that appear in lines but are not badges */
 '해왕성':{k:'태양계의 여덟 번째 행성. 아주 커요.',e:'Neptune'},
 '오바르':{k:'버스만큼 큰 딱정벌레 체인즐링. 말도 해요. 사람을 태우고 날아요.',e:'Ovar (beetle Changeling)'},
 '이카리안':{k:'팔다리에 날개 같은 피부가 있는 사람들. 무중력에서 살아요.',e:'Icarians'},
 '킹스네스트 멀미':{k:'끝없는 구름을 보고 머리가 어지러운 병.',e:'gulf sickness'},
 '토하다':{k:'먹은 것이 입으로 다시 나와요.',e:'to vomit'},
 '나이트위드':{k:'날개와 송곳니가 있는 회색 생물. 깊은 곳에 살아요.',e:'nightweid'},
 '미신':{k:'과학이 아닌, 운이나 귀신을 믿는 것.',e:'superstition'},
 '케스카':{k:'앵무새 색깔, 칠면조 크기의 새. 먹을 수 있어요.',e:'kescaw (bird)'},
 '그물':{k:'실이나 줄로 만든 망. 물고기나 새를 잡아요.',e:'net'},
 '에어콤부':{k:'공기 속에서 자라는 다시마 같은 식물.',e:'airkombu (air kelp)'},
 '아르키메데스 엔진':{k:'행성을 움직이는 아주 오래된 엘로힘 기계.',e:'Archimedes Engine'},
 '운영 체제':{k:'기계가 어떻게 일하는지 정하는 프로그램.',e:'operating system'},
 '접촉 장치':{k:'손을 대면 머리가 기계하고 연결되는 장치.',e:'contact bulb (neural interface)'},
 '고스트':{k:'셀레스철이 만든 전투 로봇. 종류가 아주 많아요.',e:'Ghost (combat machine)'},
 '슬로봄':{k:'트래블러만 가진 옛날 폭탄. 물건을 원자까지 부숴요.',e:'slowbomb'},
 '독니':{k:'독이 나오는 이빨.',e:'venom fang'},
 '너브잼':{k:'사람을 잠깐 기절하게 하는 무기.',e:'nervejam (stun weapon)'},
 '학살':{k:'사람을 아주 많이 죽이는 것.',e:'massacre'},
 '로렌츠 시계':{k:'밖에서 시간이 얼마나 지났는지 보여 주는 시계.',e:'Lorentz watch'},
 '폴카다브':{k:'하이 로사에 등록된 배 이름.',e:'the Polkadav (ship)'},
 '그로즐라미아':{k:'갑옷을 입은 코끼리만 한 거미. 해적들이 타요.',e:'Grozlamia (spider mount)'},
 '관문':{k:'하늘의 관문. 별과 별 사이를 건너는 엘로힘의 문.',e:'Gate of Heaven'},
 '헤즈업':{k:'엔포 가문의 강하선. 성실호 격납고에 실려 있어요.',e:'Heads Up (drop ship)'},
};
const CONFUSE={'구름':['그림','구멍'],'층':['총','칭찬'],'어지럽다':['어렵다','더럽다'],'돛':['독','돈'],'밧줄':['바지','밥줄'],'흥정하다':['흥분하다','결정하다'],
 '빛나다':['빚','빠르다'],'공장':['공항','공원'],'명령하다':['명랑하다','설명하다'],'복종하다':['복잡하다','복습하다'],'해적':['해외','해산물'],'매복':['행복','매번'],
 '거미':['개미','거울'],'찔리다':['찌르다','쩔쩔매다'],'기절하다':['기억하다','기대하다'],'슬퍼하다':['슬프다','기뻐하다']};

/* extra review questions (the terminal uses these too, alongside every NPC question) */
const BANK=[
 {w:'구름',ask:'비가 오기 전에 하늘에 까만 ___이 많아요.',opts:[['구름',1],['그림',0,'그림은 그리는 거예요. 하늘의 하얀 것, 까만 것은 "구름".']]},
 {w:'층',ask:'우리 집은 아파트 5___이에요.',opts:[['층',1],['총',0,'총은 쏘는 무기예요! 건물의 높이는 "층".']]},
 {w:'어지럽다',ask:'배를 오래 타서 머리가 ___ 토할 것 같아요.',opts:[['어지러워서',1],['어려워서',0,'어렵다는 문제가 힘들 때예요. 머리가 빙글빙글 → "어지러워서".']]},
 {w:'돛',ask:'바람이 없으면 ___이 있어도 배가 안 가요.',opts:[['돛',1],['독',0,'독은 몸에 나쁜 거예요! 바람을 받는 천은 받침 ㅊ, "돛".']]},
 {w:'밧줄',ask:'___로 배를 나무에 꽉 묶었어요.',opts:[['밧줄',1],['바지',0,'바지는 입는 옷이에요! 배를 묶는 굵은 줄은 "밧줄".']]},
 {w:'흥정하다',ask:'시장에서 할머니하고 사과 값을 ___했어요.',opts:[['흥정',1],['흥분',0,'흥분은 마음이 너무 뜨거워지는 거예요. 값 이야기는 "흥정".']]},
 {w:'빛나다',ask:'밤하늘에 별이 반짝반짝 ___.',opts:[['빛나요',1],['빚나요',0,'"빚"은 갚아야 하는 돈이에요. 빛이 나면 "빛나요".']]},
 {w:'공장',ask:'이 자동차는 울산 자동차 ___에서 만들었어요.',opts:[['공장',1],['공항',0,'공항은 비행기 타는 곳이에요. 만드는 곳은 "공장".']]},
 {w:'명령하다',ask:'장군이 군인들한테 문을 열라고 ___했어요.',opts:[['명령',1],['명랑',0,'명랑하다는 밝은 성격이에요. "열어!" 하고 시키면 "명령".']]},
 {w:'복종하다',ask:'군인은 장군의 명령에 ___해야 돼요.',opts:[['복종',1],['복잡',0,'복잡하다는 어려운 거예요. 명령을 따르면 "복종".']]},
 {w:'해적',ask:'___ 배에는 까만 깃발이 있어요.',opts:[['해적',1],['해외',0,'해외는 다른 나라예요. 배를 공격하는 도둑은 "해적".']]},
 {w:'매복',ask:'군인들이 숲에 숨어서 밤새 ___했어요.',opts:[['매복',1],['매번',0,'매번은 "할 때마다"예요. 숨어서 기다리는 건 "매복".']]},
 {w:'거미',ask:'방 구석에 ___가 줄을 쳤어요.',opts:[['거미',1],['개미',0,'개미는 줄을 안 만들어요. 줄을 치는 건 "거미".']]},
 {w:'찔리다',ask:'장미 가시에 손가락을 ___. 아파요!',opts:[['찔렸어요',1],['찔렀어요',0,'"찔렀어요"는 내가 한 거예요. 가시가 나한테 → "찔렸어요".']]},
 {w:'기절하다',ask:'너무 놀라서 ___ 뻔했어요.',opts:[['기절할',1],['기억할',0,'기억하다는 잊지 않는 거예요. 정신을 잃으면 "기절할 뻔했어요".']]},
 {w:'슬퍼하다',ask:'강아지가 죽어서 동생이 많이 ___.',opts:[['슬퍼해요',1],['슬퍼요',0,'"슬퍼요"는 내 마음이에요. 동생 마음은 "-어하다": "슬퍼해요".']]},
];

const Q={ // NPC questions, kept here so review can reuse them
 uemi:[
  {w:'구름',ask:'하늘에 떠 있는 하얀 것은 ___이에요.',opts:[['구름',1],['그림',0,'그림은 그리는 거예요. 하늘에 떠 있는 건 "구름".'],['구멍',0,'구멍은 뚫린 곳이에요. 하늘에 떠 있는 건 "구름".']]},
  {w:'층',ask:'케이크처럼 쌓인 한 겹, 한 겹. 그걸 ___이라고 해요.',opts:[['층',1],['총',0,'총은 쏘는 무기예요. 쌓인 한 겹은 "층".'],['줄',0,'줄은 옆으로 길어요. 위아래로 쌓인 한 겹은 "층".']]},
 ],
 finn:[
  {w:'어지럽다',ask:'머리가 빙글빙글 돌아요. 너무 ___.',opts:[['어지러워요',1],['어려워요',0,'어렵다는 문제가 힘들 때예요. 머리가 돌면 "어지러워요".'],['더러워요',0,'더럽다는 깨끗하지 않은 거예요. 머리가 돌면 "어지러워요".']]},
  {w:'어지럽다',ask:'핀은 끝없는 구름을 ___ 토했어요.',opts:[['보면서',1],['보려고',0,'"보려고"는 목적이에요. 토하려고 본 게 아니에요. 보고 있는 동안 → "보면서".'],['보러',0,'"보러"는 목적이에요. 보고 있는 동안 → "보면서".']]},
 ],
 ettan:[
  {w:'해적',ask:'배를 공격해서 물건을 빼앗는 나쁜 사람들은 ___이에요.',opts:[['해적',1],['해산물',0,'해산물은 바다 음식이에요! 海는 같아요. 배를 공격하는 사람은 "해적".'],['선장',0,'선장은 배에서 제일 높은 사람이에요. 도둑은 "해적".']]},
  {w:'매복',ask:'숨어서 기다리다가 갑자기 공격해요. 그걸 ___이라고 해요.',opts:[['매복',1],['행복',0,'행복은 기쁜 마음이에요. 숨어서 공격하는 건 "매복".'],['매번',0,'매번은 "할 때마다"예요. 숨어서 기다리는 건 "매복".']]},
 ],
 jazon:[
  {w:'흥정하다',ask:'값을 깎으려고 서로 이야기해요. 그걸 ___해요.',opts:[['흥정',1],['흥분',0,'흥분은 마음이 너무 뜨거워지는 거예요. 값 이야기는 "흥정".'],['결정',0,'결정은 마지막에 고르는 거예요. 값을 두고 말하는 건 "흥정".']]},
 ],
 ayden:[
  {w:'돛',ask:'바람을 받아서 배를 움직이는 큰 천은 ___이에요.',opts:[['돛',1],['독',0,'독은 몸에 나쁜 거예요! 받침 ㅊ, "돛".'],['문',0,'문은 열고 닫아요. 바람을 받는 천은 "돛".']]},
  {w:'밧줄',ask:'배를 묶을 때 쓰는 아주 굵은 줄은 ___이에요.',opts:[['밧줄',1],['바지',0,'바지는 입는 옷이에요! 굵은 줄은 "밧줄".'],['줄넘기',0,'줄넘기는 놀이예요. 배를 묶는 굵은 줄은 "밧줄".']]},
 ],
 rylee:[
  {w:'밧줄',ask:'그물을 배로 가져오려면 ___을 당겨야 돼요.',opts:[['밧줄',1],['돛',0,'돛은 바람을 받는 천이에요. 당기는 건 "밧줄".']]},
 ],
 elsbeth:[
  {w:'공장',ask:'기계로 물건을 많이 만드는 큰 건물은 ___이에요.',opts:[['공장',1],['공항',0,'공항은 비행기 타는 곳이에요. 만드는 곳은 "공장".'],['공원',0,'공원은 산책하는 곳이에요. 만드는 곳은 "공장".']]},
  {w:'공장',ask:'이 공장은 엔진한테 일하는 법을 가르쳐요. 공장이 엔진을 ___ 해요.',opts:[['움직이게',1],['움직여서',0,'"-아/어서"는 이유예요. 시키거나 만들어 주는 건 "-게 하다": 움직이게 해요.']]},
 ],
 gyvoy:[
  {w:'명령하다',ask:'"지금 가요!" 하고 시켜요. 기보이가 ___.',opts:[['명령해요',1],['명랑해요',0,'명랑하다는 밝은 성격이에요. 시키는 건 "명령해요".'],['설명해요',0,'설명은 알기 쉽게 말해 주는 거예요. 시키는 건 "명령해요".']]},
  {w:'명령하다',ask:'기보이가 핀을 안쪽 방에 ___ 했어요.',opts:[['가게',1],['가서',0,'"가서"는 순서예요. 다른 사람을 시키면 "-게 하다": 가게 했어요.'],['갈 수',0,'"갈 수 했어요"는 없어요. "가게 했어요".']]},
 ],
 dave:[
  {w:'빛나다',ask:'어둠 속에서 칼이 보라색으로 ___.',opts:[['빛나요',1],['빚나요',0,'빚은 갚아야 하는 돈이에요! 빛이 나면 "빛나요".'],['빨라요',0,'빠르다는 속도예요. 빛이 나면 "빛나요".']]},
  {w:'거미',ask:'다리가 여덟 개예요. 줄을 만들어요. ___예요.',opts:[['거미',1],['개미',0,'개미는 다리가 여섯 개예요. 줄을 만드는 건 "거미".'],['거울',0,'거울은 얼굴을 보는 거예요. 다리 여덟 개는 "거미".']]},
 ],
 koa:[
  {w:'매복',ask:'해적들이 거미줄 옆에 숨어서 기다렸어요. ___이었어요!',opts:[['매복',1],['행복',0,'행복하지 않아요! 숨어서 기다린 공격 → "매복".']]},
 ],
 ellie:[
  {w:'찔리다',ask:'코아는 거미의 독니에 ___.',opts:[['찔렸어요',1],['찔렀어요',0,'"찔렀어요"면 코아가 찌른 거예요. 코아는 당했어요 → "찔렸어요".'],['찍었어요',0,'찍다는 사진을 찍을 때예요. 날카로운 것이 들어오면 "찔렸어요".']]},
  {w:'기절하다',ask:'딜런이 갑자기 정신을 잃고 쓰러졌어요. 딜런이 ___.',opts:[['기절했어요',1],['기억했어요',0,'기억하다는 잊지 않는 거예요. 정신을 잃으면 "기절했어요".'],['기대했어요',0,'기대하다는 좋은 일을 기다리는 거예요. 정신을 잃으면 "기절했어요".']]},
  {w:'기절하다',ask:'엘리가 너브잼으로 딜런을 ___ 했어요.',opts:[['기절하게',1],['기절해서',0,'"기절해서"는 이유예요. 엘리가 그렇게 만들었어요 → "기절하게 했어요".']]},
 ],
 nweid:[
  {w:'복종하다',ask:'나이트위드가 핀의 명령을 그대로 따라요. 핀한테 ___.',opts:[['복종해요',1],['복잡해요',0,'복잡하다는 어려운 거예요. 명령을 따르면 "복종해요".'],['복습해요',0,'복습은 공부를 다시 하는 거예요. 명령을 따르면 "복종해요".']]},
 ],
 jazon2:[
  {w:'슬퍼하다',ask:'친구가 죽었어요. 딜런이 많이 ___.',opts:[['슬퍼해요',1],['슬퍼요',0,'"슬퍼요"는 내 마음이에요. 다른 사람 마음은 "-어하다": 딜런이 "슬퍼해요".'],['기뻐해요',0,'기뻐하다는 좋을 때예요. 친구가 죽었어요 → "슬퍼해요".']]},
  {w:'슬퍼하다',ask:'장례식에서 사람들이 울면서 ___.',opts:[['슬퍼해요',1],['즐거워해요',0,'즐거워하다는 재미있을 때예요. 장례식에서는 "슬퍼해요".']]},
 ],
 cafe:[ // earlier chapters' words, no badges
  {ask:'배가 곤디아에 ___. 이제 내려요.',opts:[['도착했어요',1],['출발했어요',0,'출발은 떠나는 거예요. 여기 왔어요 → "도착했어요".']]},
  {ask:'엔진이 먹는 밥은 ___예요.',opts:[['연료',1],['연체료',0,'연체료는 책을 늦게 반납하면 내는 돈이에요! 엔진은 "연료".']]},
  {ask:'부서진 우주선 조각들을 ___라고 해요.',opts:[['잔해',1],['잔디',0,'잔디는 짧은 풀이에요. 부서진 조각은 "잔해".']]},
  {ask:'저는 작년에 ___. 남편이 있어요.',opts:[['결혼했어요',1],['결정했어요',0,'결정은 고르는 거예요. 남편이 생겼어요 → "결혼했어요".']]},
  {ask:'화산에서 뜨거운 ___이 흘러요.',opts:[['용암',1],['용기',0,'용기는 무서워도 하는 마음이에요. 화산에서 흐르는 건 "용암".']]},
  {ask:'경찰이 범인을 ___했어요.',opts:[['체포',1],['체험',0,'체험은 해 보는 거예요. 경찰이 범인을 잡으면 "체포".']]},
  {ask:'포켓몬이 아파요. 포켓몬 ___가 안 좋아요.',opts:[['상태',1],['상대',0,'상대는 같이 싸우는 사람이에요. 건강은 "상태".']]},
 ],
};

const ITEMS={'거래 물건 상자':'기보이가 준 상자. 트래블러 물건이 가득해요.','케스카 구이':'라일리가 구운 새고기. 냄새가 아주 좋아요.'};

const f=()=>state.f;
const hasItem=i=>state.items.includes(i);
const has6=w=>state.badges.includes(w);
const vary=(x,y,a)=>a[(x*7+y*13)%a.length]; // things: same position pick as the engine, for lines that depend on flags
const SAIL=(x,y)=>vary(x,y,has6('돛')?['까만 돛이 바람을 받아요.','까만 돛이 천천히 흔들려요.']:['까만 천이 바람을 받아요.','까만 천이 천천히 흔들려요.']);
const RIG=['굵은 줄이 이리저리 묶여 있어요.','줄이 바람에 팽팽해요.'];
const AIRP='작은 풀이 공기 속에 둥둥 떠 있어요.';

/* ---------- pixel helpers (engine globals r, g, at, hash, CAM, Z, ZID, MH, walkable, front are used at draw time) ---------- */
const O='#1B1E2B';
const sh=(hex,k)=>{const n=parseInt(hex.slice(1),16);const c=v=>Math.max(0,Math.min(255,Math.round(v*k))).toString(16).padStart(2,'0');return '#'+c((n>>16)&255)+c((n>>8)&255)+c(n&255)};
const SH={};const shc=(c,k)=>SH[c+k]||(SH[c+k]=sh(c,k));
const org=(x,y)=>{const c=at(x,y);let a=x,b=y;while(at(a-1,y)===c)a--;while(at(x,b-1)===c)b--;return [a,b]};
const CVS={};
function cvs(key,w,h,draw){let c=CVS[key];if(!c){c=document.createElement('canvas');c.width=w;c.height=h;const q=c.getContext('2d');
 const R=(x,y,ww,hh,col)=>{q.fillStyle=col;q.fillRect(x,y,ww,hh)};
 const L=(x0,y0,x1,y1,w2,col)=>{const n=Math.max(Math.abs(x1-x0),Math.abs(y1-y0))|0;for(let i=0;i<=n;i++){const u=n?i/n:0;R(Math.round(x0+(x1-x0)*u),Math.round(y0+(y1-y0)*u),w2,w2,col)}};
 draw(R,L);CVS[key]=c}return c}
function blit(c,X,Y,x,y){const [ox,oy]=org(x,y);g.drawImage(c,(x-ox)*16,(y-oy)*16,16,16,X,Y,16,16)}
const line=(x0,y0,x1,y1,w2,col)=>{const n=Math.max(Math.abs(x1-x0),Math.abs(y1-y0))|0;for(let i=0;i<=n;i++){const u=n?i/n:0;r(Math.round(x0+(x1-x0)*u),Math.round(y0+(y1-y0)*u),w2,w2,col)}};

/* layered clouds: each zone lists its colors from the top of the map to the bottom (white → green → jade → black) */
function sky(X,Y,x,y,t){
 const S=Z.sky,n=S.length,k=Math.min(n-1,Math.floor(y*n/MH));
 r(X,Y,16,16,S[k]);
 const lite=shc(S[k],1.09),hi=shc(S[k],1.18),sp=(y%2?1:-1)*t/140-CAM.x*.22;
 for(let j=0;j<8;j++){const wx=x*16+j*2+sp;const hg=Math.round(6+3*Math.sin(wx/9+y*1.7)+2*Math.sin(wx/23+y*.6));r(X+j*2,Y+16-hg,2,hg,lite);r(X+j*2,Y+16-hg,2,1,hi)}
 if(hash(x,y)%13===0){const d=Math.floor(t/500+hash(y,x))%14;r(X+(hash(y,x)%12)+2,Y+1+d,1,1,shc(S[k],.62))}
}
/* Ovar body: a bus-sized Atlas beetle shell seen from above, head toward the bottom (the head is the NPC sprite) */
const OV={koa:{b:'#17151D',m:'#33303E',p:'#110F16',s:['#6A4FA0','#3F76B0','#3F9C8A']},kech:{b:'#15181C',m:'#30343C',p:'#0F1216',s:['#3F8C7C','#9A5A8A','#A89A4A']},
 kaizen:{b:'#2A2818',m:'#4A4630',p:'#201E14',s:['#9CA83E','#D0A23E','#D0683E']},gen:{b:'#22223A',m:'#3A3A5A',p:'#1A1A2A',s:['#4F6ED0','#8A4FC0','#D04F9C']}};
function ovarCanvas(nm,dead,fr){return cvs(`ov-${nm}-${dead?1:0}-${fr}`,48,32,(R,L)=>{const P=OV[nm];
 const ell=(cy,rx,ry,v)=>{const e=(v-cy)/ry;return Math.abs(e)<=1?Math.floor(rx*Math.sqrt(1-e*e)):0};
 const E=[],Pn=[];for(let v=0;v<32;v++){E[v]=ell(13,22,13.6,v);Pn[v]=ell(25.6,15,6.2,v)}
 const W=v=>v<0||v>31?0:Math.max(E[v],Pn[v]);
 for(let v=0;v<32;v++){const w=Math.max(W(v),W(v-1),W(v+1));if(w)R(24-w-1,v,2*w+2,1,O)}
 for(let v=0;v<32;v++){const w=E[v];if(!w)continue;R(24-w,v,2*w,1,dead?'#3A3640':P.b);
  if(v>1&&v<12){R(24-w+2,v,Math.max(1,Math.floor(w/3)),1,dead?'#34313A':P.m);R(26,v,Math.max(1,Math.floor(w/3)),1,dead?'#34313A':P.m)}
  if(!dead)for(let u=24-w;u<24+w;u++){const s=((u+v*1.3+fr*3)%15+15)%15;if(s<3)R(u,v,1,1,P.s[s|0]);else if(s<4&&v<9)R(u,v,1,1,P.m)}
  if(v<22)R(24,v,1,1,'#08070B');if(v>0&&!E[v-1])R(24-w+1,v,2*w-2,1,dead?'#4A4652':sh(P.m,1.4))}
 for(let v=0;v<32;v++){const w=Pn[v];if(!w)continue;R(24-w-1,v,2*w+2,1,O)}
 for(let v=0;v<32;v++){const w=Pn[v];if(!w)continue;R(24-w,v,2*w,1,dead?'#24222A':P.p);if(v<22)R(24-w+3,v,2*w-6,1,dead?'#2E2B33':P.m)}
 L(12,27,7,31,2,O);L(36,27,41,31,2,O);L(12,27,8,30,1,dead?'#3A3640':P.m);L(36,27,40,30,1,dead?'#3A3640':P.m);
 if(dead){L(4,4,44,20,1,'#CFC2E6');L(8,22,40,2,1,'#CFC2E6');L(20,0,30,30,1,'#B9A8D8');R(20,21,3,3,'#3A1C24');R(27,23,3,3,'#3A1C24');R(14,9,6,1,'#08070B');R(30,15,7,1,'#08070B')}
})}
function ovarTile(X,Y,x,y,t,nm,mode){
 if(ZID==='factory')webBase(X,Y,x,y,t);else sky(X,Y,x,y,t);
 if(!mode)return;
 blit(ovarCanvas(nm,mode==='d',mode==='d'?0:Math.floor(t/140)%7),X,Y,x,y);
 if(ZID==='factory')webThreads(X,Y,x,y,t);
}
/* Grozlamia: elephant-sized armored spider; a pirate Icarian rides behind the helmet; four emerald fangs */
function grozCanvas(dead,fr){return cvs(`gz-${dead?1:0}-${fr}`,32,32,(R,L)=>{
 const leg=(ax,ay,kx,ky,fx,fy)=>{L(ax,ay,kx,ky,3,O);L(kx,ky,fx,fy,3,O);L(ax+1,ay,kx+1,ky,2,'#3E434D');L(kx+1,ky,fx+1,fy,2,'#3E434D');R(kx+1,ky,2,1,'#6B7280')};
 if(dead){for(let v=0;v<9;v++){const w=Math.floor(13*Math.sqrt(1-((v-4)/4.5)**2));R(16-w,18+v,2*w,1,v===0||v===8?'#B59A22':'#D9C23A')}R(9,22,3,1,'#F2E27A')}
 const wig=dead?0:(fr%2?1:-1);
 const legs=dead?[[13,12,9,9,11,6],[12,15,7,14,9,17],[12,18,7,20,10,22],[13,21,9,25,12,24]]:[[13,12,5,6+wig,7,1],[12,15,3,12-wig,0,9],[12,18,3,21+wig,0,25],[13,21,6,26-wig,5,31]];
 legs.forEach(([a,b,c,d,e,h])=>{leg(a,b,c,d,e,h);leg(31-a-1,b,31-c-1,d,31-e-1,h)});
 const ell=(cx,cy,rx,ry,col,ol)=>{for(let v=-ry-1;v<=ry+1;v++){const q=1-(v/(ry+(ol?1:0)))**2;if(q<0)continue;const w=Math.floor((rx+(ol?1:0))*Math.sqrt(q));R(cx-w,cy+v,2*w,1,col)}};
 ell(16,9,8,8,O,1);ell(16,9,8,8,'#2B2E36');for(const v of [3,7,11])R(10,v,12,1,'#4A505C');R(15,2,2,13,'#5E6573');
 ell(16,19,6,4,O,1);ell(16,19,6,4,'#33373F');
 [4,6,7,7,6,5,3].forEach((w,i)=>{R(16-w-1,21+i,2*w+2,1,O)});[3,5,6,6,5,4,2].forEach((w,i)=>{R(16-w,21+i,2*w,1,i<2?'#6B7280':'#4A505C')});
 R(12,23,2,1,dead?'#2E6B44':'#3BE37A');R(18,23,2,1,dead?'#2E6B44':'#3BE37A');
 [12,14,17,19].forEach((x,i)=>{const c=dead?'#2E6B44':'#3BE37A';const dx=i<2?-1:1;R(x,27,1,2,c);R(x+(i%3===0?dx:0),29,1,2,c);if(!dead&&(fr+i)%3===0)R(x+(i%3===0?dx:0),31,1,1,'#B8FFCF')});
 if(dead){R(13,6,6,2,'#D9C23A');R(14,8,4,1,'#B59A22')}
 else{R(13,15,6,4,O);R(14,16,4,2,'#4A4E58');R(14,13,4,3,O);R(15,13,2,2,'#6B6F78');R(15,14,2,1,'#C23A3A')}
})}

/* ---------- custom sprites ---------- */
const ICAR_D=['......OOOO......','.....OHHHHO.....','....OHHhhHHO....','....OHSSSSHO....','....OSESSESO....','.....OSssSO.....',
 '...OOOOSSOOOO...','..OSSOSSSSOSSO..','.OSFOOSSSSOOFSO.','.OSFFOSssSOFFSO.','OSFfFFOSSOFFfFSO','OSFfFFOSSOFFfFSO','OSOFfFOLLOFfFOSO',
 'OSOOFFOLlOFFOOSO','.OO.OOSFFSOO.OO.','.....OSfFSO.....','.....OSFfSO.....','.....OSfFSO.....','....OSSOOSSO....','....OOO..OOO....'];
const ICAR_L=['......OOOO......','.....OHHHHO.....','....OHHHhHHO....','....OSSHHHHO....','...OSESSHhHO....','....OsSSSO......',
 '.....OSSSSO.....','....OSSSSSSO....','....OSOSSSFO....','...OSOOSSFFFO...','...OSO.OSFfFFO..','...OSO.OLLFfFFO.','...OSO.OLlOFfFO.',
 '...OOO.OLlOOFFO.','.......OSFSO.OO.','.......OSfSO....','......OSFfSO....','......OSfFFSO...','.....OSSOOSSO...','.....OOO..OOO...'];
const ICAR_DL=ICAR_D.map((rw,i)=>i===3?'...OHHSSSSHHO...':i===4?'...OHSESSESHO...':i===5?'...OHOSssSOHO...':i===6?'...OHOOSSOOHO...':rw);
const ICAR_LL=ICAR_L.map((rw,i)=>i===4?'...OSESSHhHHO...':i===5?'....OsSSSOHHO...':i===6?'.....OSSSSOHO...':rw);
const icar=(skin,hair,cloth,long)=>({art:{pal:{O,E:O,H:hair,h:sh(hair,.75),S:skin,s:sh(skin,.84),F:sh(skin,1.13),f:sh(skin,.9),L:cloth,l:sh(cloth,.75)},
 down:long?ICAR_DL:ICAR_D,left:long?ICAR_LL:ICAR_L}});
const OVAR_HEAD=['...OOOOOOOOOO...','..OBBBBBBBBBBO..','.OBbFFFFFFFFbBO.','.OBFfFFFFFFfFBO.','.OBFEeFFFFEeFBO.','.OBFFFFFFFFFFBO.',
 'OmOBFfFFFFfFBOmO','OmmOBFLLLLFBOmmO','.OmmOBFllFBOmmO.','..OmmOBHHBOmmO..','...OmMOHHOMmO...','....OMOHHOMO....','.....O.OHO.O....',
 '.......OHO......','........O.......','................'];
const OVAR_DEAD=['................','................','................','................','...OOOOOOOOOO...','..OBBBBBBBBBBO..',
 '.OBFFFFFFFFFFBO.','.OBFxFFFFFFxFBO.','OmOBFFFFFFFFBOmO','OmmOBFLLLLFBOmmO','.OmmOBFFFFBOmmO.','..OOOOBHHBOOOO..','......OHHO......',
 '......OHHO......','.......OO.......','................'];
const ovarHead=nm=>{const P=OV[nm];return {art:{pal:{O,B:P.b,b:P.s[0],F:sh(P.m,.95),f:P.s[1],E:'#E8D46A',e:'#FFF6B0',L:sh(P.m,1.5),l:'#120E18',m:P.p,M:P.m,H:sh(P.m,1.3)},down:OVAR_HEAD}}};
const HEAD={koa:null,kaizen:null,kech:null};
const DEAD_HEAD={art:{pal:{O,B:'#3A3640',F:'#55505E',x:'#1B1E2B',L:'#6E5E70',m:'#45404E',H:'#5E5868'},down:OVAR_DEAD}};
const NWEID={art:{pal:{O,G:'#8A8F96',g:'#6E737A',W:'#4A4550',w:'#2E2A33',E:'#7A1E2A',e:'#E0505A',a:'#F2EDE0',P:'#C06BFF'},down:[
 '.......OO.......','.WO..OOGGOO..OW.','.WWOOGGGGGGOOWW.','OWwWOEEGGEEOWwWO','OWwWOEeGGeEOWwWO','OWwWWOGOOGOWWwWO','OWwwWOGOaOGOWwWO',
 'OWwWWOGOOGOWWwWO','.OwWOGGGGGGOWwO.','.OWOGGgGGgGGOWO.','..OOGOGGGGOGOO..','...OGOGggGOGO...','..OPOOGGGGOOGO..','.OPPO.OGOGO.OO..',
 'OPPO..OGOGO.....','OPO..OGGOGGO....']}};
const DAVE=(m)=>({art:{pal:{O,Q:'#F1E4EC',q:'#D8C6D8',R:m,r:sh(m,.85),E:O,M:sh(m,.72)},down:[
 '................','.....OOOOOO.....','....OQQqqQQO....','...OQRRRRRRqO...','...OQREQQERQO...','...OQRRRRRRQO...','...OqRRMMRRqO...',
 '....OQRRRRQO....','...OOQQRRQQOO...','..OQRRQRRQRRQO..','..OQRrRRRRrRQO..','..OQOQRrrRQOQO..','...OQRRQQRRQO...','...OQRROORRQO...',
 '...OQRO..ORQO...','...OQQO..OQQO...'],left:[
 '................','.....OOOOOO.....','....OQQQqqQO....','...OQRRRRRRQO...','..OQERRRRQRQO...','...OQRRRRRRQO...','...OMRRRRRqO....',
 '....OQRRRRQO....','....OQQRRQQO....','....OQRRRRQO....','....OQRrRRQO....','....OQRRrRQO....','....OQRRRRQO....','....OQRROQRO....',
 '...OQRO.OQRO....','...OQQO.OQQO....']}});

const FINN={hair:'#E0C070',skin:'#F0C9A4',shirt:'#2F8F8A',pants:'#2E3548'};
const ELLIE={hair:'#2A2220',skin:'#E8B892',shirt:'#E4E1D6',pants:'#3B4650',belt:'#E8962A',style:'short'};
const GYVOY={hair:'#2A1E1A',skin:'#B9825A',shirt:'#6A2E52',pants:'#4B3A2E',coat:1};
const UEMI={hair:'#3B2A4A',skin:'#C89B7B',shirt:'#3E5C8A',pants:'#2E3548',style:'bun'};
const DYLAN=icar('#C9A27E','#3A2A20','#7A4A2A');

/* ---------- tiles ---------- */
const TILES={
 sky6:(X,Y,x,y,t)=>sky(X,Y,x,y,t),
 /* 성실호 owner's-quarters screen (rows 1–2): Kingsnest on approach, the Kelowan system on return */
 screen6:(X,Y,x,y,t)=>{const home=!!f().argue,fr=Math.floor(t/300)%6;
  const c=cvs(`scr-${home?1:0}-${fr}`,288,32,(R)=>{R(0,0,288,32,'#05080D');
   for(let i=0;i<60;i++){const sx=(i*53+fr*(i%3===0?1:0))%288,sy=(i*29)%32;R(sx,sy,1,1,i%7===fr?'#FFFFFF':i%2?'#8FA3B8':'#C8D3DE')}
   if(!home){[[66,16],[222,16]].forEach(([cx,cy],k)=>{for(let a=0;a<40;a++){const an=a/40*Math.PI*2+fr*.05*(k?1:-1);R(Math.round(cx+Math.cos(an)*9),Math.round(cy+Math.sin(an)*3),1,1,a%3?'#6F8296':'#BFD0E0')}R(cx-1,cy-1,3,3,'#FFFFFF');R(cx-2,cy,5,1,'#DFF2FF');R(cx,cy-2,1,5,'#DFF2FF')});
    const L=['#050A09','#123A33','#2F6E5C','#5FAE8C','#9ED6B6','#CFEBDD','#E8F4F0'];
    for(let dy=-14;dy<=14;dy++)for(let dx=-14;dx<=14;dx++){const d=Math.hypot(dx,dy)/14.5;if(d>1)continue;const an=Math.atan2(dy,dx);
     let col;if(d>.9)col=(dx<0&&dy<0)?'#E6FFFC':'#9FE6DE';else{const k=Math.max(0,Math.min(6,Math.floor(d*7+.45*Math.sin(an*5+fr))));col=L[k]}R(144+dx,16+dy,1,1,col)}}
   else{[[80,12,30,'#3A2A5A'],[130,18,40,'#2A3A6A'],[190,10,34,'#4A2A5A'],[240,20,26,'#2A4A6A']].forEach(([cx,cy,rr,col])=>{for(let dy=-8;dy<=8;dy++){const w=Math.floor(rr*Math.sqrt(1-(dy/9)**2));R(cx-w,cy+dy,2*w,1,col)}});
    [[40,8,'#E8C27A'],[110,22,'#9FD7E8'],[170,6,'#E89A7A'],[205,24,'#C8E89A'],[260,9,'#FFFFFF']].forEach(([px,py,col])=>{R(px-1,py,3,1,col);R(px,py-1,1,3,col)});
    if(fr%2)R(150,15,2,2,'#FF6B6B')}});
  blit(c,X,Y,x,y);if(y===1)r(X,Y,16,1,'#3A4046');if(y===2)r(X,Y+14,16,2,'#ABB0A6')},
 /* 마이탈포트 */
 port:(X,Y,x,y,t)=>{r(X,Y,16,16,'#585D66');r(X,Y,16,1,'#666C76');if(x%3===0)r(X,Y,1,16,'#4A4F57');r(X+4+(x%2)*6,Y+5,2,2,'#4A4F57');
  if(front(x,y)){r(X,Y+10,16,6,'#6E747E');r(X,Y+10,16,1,'#8B929C');r(X,Y+15,16,1,'#4A4F57');if(x%4===2)r(X+6,Y+12,4,2,(Math.floor(t/600)+x)%3?'#B08CFF':'#4A3A70')}},
 girder:(X,Y,x,y,t)=>{sky(X,Y,x,y,t);const L=walkable(x-1,y),R=walkable(x+1,y),U=walkable(x,y-1),D=walkable(x,y+1);
  if(U||D||!(L||R)){const y0=U?0:3,y1=D?16:13;r(X+4,Y+y0,8,y1-y0,'#5D6570');r(X+4,Y+y0,2,y1-y0,'#87919C');r(X+10,Y+y0,2,y1-y0,'#454B54');for(let v=y0+2;v<y1-1;v+=5)r(X+7,Y+v,2,2,'#3A4048')}
  if(L||R){const x0=L?0:3,x1=R?16:13;r(X+x0,Y+4,x1-x0,8,'#6B7480');r(X+x0,Y+4,x1-x0,2,'#909AA6');r(X+x0,Y+10,x1-x0,2,'#4F565F');for(let u=x0+2;u<x1-1;u+=5)r(X+u,Y+7,2,2,'#3E444C')}
  r(X+5,Y+5,1,1,'#B9C1C9');if(hash(x,y)%3===0){const mx=hash(y,x)%8+3;r(X+mx,Y+11,3,2,'#6E9A52');r(X+mx+1,Y+10,1,1,'#A8C878');r(X+mx-1,Y+12,1,2,'#5A8040')}},
 gplate:(X,Y,x,y,t)=>{sky(X,Y,x,y,t);for(let i=0;i<4;i++){r(X+i*4,Y,2,16,'#5E6670');r(X,Y+i*4,16,2,'#5E6670')}r(X,Y,16,1,'#7D8793');
  if(!walkable(x,y-1))r(X,Y,16,2,'#909AA6');if(!walkable(x,y+1)){r(X,Y+13,16,3,'#3E444C');r(X,Y+13,16,1,'#6B7480')}if(!walkable(x-1,y))r(X,Y,2,16,'#87919C');if(!walkable(x+1,y))r(X+14,Y,2,16,'#454B54')},
 truss:(X,Y,x,y,t)=>{sky(X,Y,x,y,t);r(X+1,Y,3,16,'#5D6570');r(X+12,Y,3,16,'#5D6570');r(X+1,Y,1,16,'#87919C');line(X+3,Y+1,X+12,Y+13,2,'#6B7480');line(X+12,Y+1,X+3,Y+13,2,'#4F565F')},
 airplant:(X,Y,x,y,t)=>{sky(X,Y,x,y,t);const b=Math.round(Math.sin(t/700+x*2)*1.5);const cx=X+8,cy=Y+9+b;
  [[-5,-3],[-3,-5],[0,-6],[3,-5],[5,-3],[-6,0],[6,0],[-4,2],[4,2]].forEach(([dx,dy],i)=>line(cx,cy,cx+dx,cy+dy,1,i%2?'#A9C9A2':'#7FA878'));r(cx-1,cy-1,3,3,'#5E8C5A');r(cx,cy+2,1,4,'#B9C9B0')},
 ovarKoa:(X,Y,x,y,t)=>ovarTile(X,Y,x,y,t,'koa',ZID==='mytal'?(f().ride?null:'a'):ZID==='boat'?(f().massacre?null:'a'):(f().ambush?'d':'a')),
 ovarKaizen:(X,Y,x,y,t)=>ovarTile(X,Y,x,y,t,'kaizen',ZID==='boat'?(f().massacre?null:'a'):(f().ambush?'d':'a')),
 ovarKech:(X,Y,x,y,t)=>ovarTile(X,Y,x,y,t,'kech','a'),
 ovarGen:(X,Y,x,y,t)=>ovarTile(X,Y,x,y,t,'gen','a'),
 boarding:(X,Y,x,y,t)=>{if(ZID==='boat')TILES.plank(X,Y,x,y,t);else TILES.gplate(X,Y,x,y,t);r(X+3,Y,2,16,'#C9B27A');r(X+11,Y,2,16,'#C9B27A');for(let v=2;v<16;v+=4)r(X+3,Y+v,10,2,'#8A6A3A');r(X+3,Y,10,1,'#E8D9A8')},
 /* 나소 오크리프 */
 bark:(X,Y,x,y,t)=>{r(X,Y,16,16,'#6B4A2E');const h=hash(x,y);for(let i=0;i<3;i++){const gy=(h+i*5)%14+1;r(X+(h*i)%6,Y+gy,6+(i*3),1,'#5A3E26')}r(X+(h%11)+2,Y+(h%5)+2,2,1,'#82603F');
  const ed=(a,b)=>!walkable(a,b)&&at(a,b)!=='t';if(ed(x,y-1)){r(X,Y,16,2,'#86643F');if(h%3===0)r(X+h%10+2,Y,4,2,'#5FA04A')}if(ed(x,y+1)){r(X,Y+13,16,3,'#4A3220');r(X,Y+13,16,1,'#5A3E26')}if(ed(x-1,y))r(X,Y,2,16,'#5A3E26');if(ed(x+1,y))r(X+14,Y,2,16,'#4A3220')},
 spoke:(X,Y,x,y,t)=>{sky(X,Y,x,y,t);const run=(dx,dy)=>{let n=0;for(let k=1;k<6;k++){if(at(x+dx*k,y+dy*k)!=='s')break;n++}return n};const v=run(0,-1)+run(0,1)>run(-1,0)+run(1,0);const h=hash(x,y);
  if(v){const a=at(x-1,y)!=='s',b=at(x+1,y)!=='s';r(X+(a?1:0),Y,16-(a?1:0)-(b?1:0),16,'#7A5636');if(a)r(X+1,Y,2,16,'#93704A');if(b)r(X+13,Y,2,16,'#4A3220');for(let i=0;i<3;i++)r(X+4+i*3,Y+(h+i*4)%10,1,6,'#634528')}
  else{const a=at(x,y-1)!=='s',b=at(x,y+1)!=='s';r(X,Y+(a?1:0),16,16-(a?1:0)-(b?1:0),'#7A5636');if(a)r(X,Y+1,16,2,'#93704A');if(b)r(X,Y+13,16,2,'#4A3220');for(let i=0;i<3;i++)r(X+(h+i*5)%10,Y+4+i*3,6,1,'#634528')}},
 honey:(X,Y,x,y,t)=>{r(X,Y,16,16,'#3E5A24');const h=hash(x,y);
  for(let i=0;i<3;i++){const lx=X+(h*(i+1))%10,ly=Y+(h*(i+3))%9;r(lx,ly,7,5,'#6E8A34');r(lx+1,ly,5,1,'#8FA04A');r(lx,ly+4,7,1,'#4A6A2A');[[0,0],[6,0],[0,4],[6,4],[3,5]].forEach(([a,b],j)=>{const gl=(Math.floor(t/350)+i+j+h)%9===0;r(lx+a,ly+b,1,1,gl?'#FFF0B0':'#E8B64A')})}
  line(X+1,Y+h%14,X+14,Y+(h*3)%14,1,'#5A3E26');if(h%4===0){r(X+9,Y+9,4,3,'#8A7A6A');r(X+12,Y+9,2,1,'#C23A3A');r(X+8,Y+11,2,1,'#5A4A3A')}if(h%5===1)r(X+3,Y+11,3,3,'#8A8A8A')},
 hut:(X,Y,x,y,t)=>{const [ox,oy]=org(x,y);let ex=ox;while(at(ex+1,oy)===at(x,y))ex++;const top=y===oy,bot=at(x,y+1)!==at(x,y),mid=Math.floor((ox+ex)/2);
  r(X,Y,16,16,'#CBB27A');for(let i=1;i<16;i+=3)r(X+i,Y,1,16,'#B39A62');
  if(top){r(X,Y,16,7,'#A88E52');for(let i=0;i<16;i+=2)r(X+i,Y+(i%4?1:2),1,5,'#8E7642');r(X,Y+6,16,1,'#6E5A32');if(x===ox)r(X,Y,1,7,'#6E5A32');if(x===ex)r(X+15,Y,1,7,'#6E5A32')}
  if(bot){r(X,Y+15,16,1,'#8E7642');if(x===mid){r(X+4,Y+5,8,11,'#4A3A22');r(X+4,Y+5,8,1,'#2E2414')}else{r(X+4,Y+7,7,5,'#6E5A32');r(X+5,Y+8,5,3,(Math.floor(t/900)+x)%4?'#F7D98C':'#D9B86A')}}},
 mat:(X,Y,x,y)=>{r(X,Y,16,16,'#D9C48E');for(let i=0;i<4;i++)for(let j=0;j<4;j++)if((i+j)%2)r(X+i*4,Y+j*4,4,4,'#C9B27A');r(X,Y,16,1,'#B39A62')},
 jtable:(X,Y,x,y)=>{TILES.mat(X,Y,x,y);r(X,Y+3,16,10,O);r(X,Y+4,16,8,'#8A5A34');r(X,Y+4,16,2,'#A87A4A');const h=hash(x,y);[[2,'#E86D8A'],[9,'#F7D154']].forEach(([a,c])=>{r(X+a,Y+5,3,4,'#E8EEF0');r(X+a,Y+6,3,2,c)});if(h%2)r(X+6,Y+8,3,3,'#E8962A')},
 fanleaf:(X,Y,x,y,t)=>{sky(X,Y,x,y,t);const sw=Math.round(Math.sin(t/900+x)*1);for(let v=0;v<13;v++){const w=Math.floor(7*Math.sqrt(Math.max(0,1-((v-6)/7)**2)));r(X+8-w+sw,Y+1+v,2*w,1,v<3?'#8CC86A':'#5FA04A')}
  for(let k=-2;k<=2;k++)line(X+8+sw,Y+14,X+8+sw+k*3,Y+3+Math.abs(k),1,'#4A8A3A');r(X+7+sw,Y+13,2,3,'#6B4A2E')},
 perch:(X,Y,x,y,t)=>{TILES.bark(X,Y,x,y,t);r(X+5,Y+3,6,10,O);r(X+6,Y+4,4,8,'#8A6A4A');r(X+6,Y+4,4,2,'#B08A5A');r(X+4,Y+8,8,2,'#C9B27A')},
 gangplank:(X,Y,x,y)=>{r(X,Y,16,16,'#A87A4A');for(let v=0;v<16;v+=4){r(X,Y+v,16,1,'#7A5230');r(X+2,Y+v+2,2,1,'#C99A64')}r(X,Y,2,16,'#C9B27A');r(X+14,Y,2,16,'#C9B27A')},
 /* 실버 클라우드스피어 */
 plank:(X,Y,x,y)=>{r(X,Y,16,16,'#8A5A34');for(let v=0;v<16;v+=4){r(X,Y+v,16,1,'#6E4628');r(X,Y+v+1,16,1,'#9C6A3E')}const j=(hash(x,y)%3)*5+2;r(X+j,Y,1,4,'#6E4628');r(X+(j+7)%16,Y+8,1,4,'#6E4628');r(X+j+2,Y+2,1,1,'#4A3020')},
 rail:(X,Y,x,y,t)=>{sky(X,Y,x,y,t);const D=walkable(x,y+1),U=walkable(x,y-1),L=walkable(x-1,y),R=walkable(x+1,y);const wd='#A06C40',dk='#6E4628';
  if(D||(!U&&!L&&!R&&y<8)){r(X,Y+9,16,3,wd);r(X,Y+9,16,1,'#C9935A');r(X+2,Y+12,2,4,dk);r(X+12,Y+12,2,4,dk);r(X,Y+14,16,2,'#7A5230')}
  if(U||(!D&&!L&&!R&&y>=8)){r(X,Y,16,4,'#7A5230');r(X,Y+4,16,3,wd);r(X,Y+4,16,1,'#C9935A');r(X+2,Y+7,2,3,dk);r(X+12,Y+7,2,3,dk)}
  if(R){r(X+11,Y,3,16,wd);r(X+11,Y,1,16,'#C9935A');r(X+14,Y,2,16,'#7A5230')}if(L){r(X+2,Y,3,16,wd);r(X+2,Y,1,16,'#C9935A');r(X,Y,2,16,'#7A5230')}},
 sail:(X,Y,x,y,t)=>{if(ZID==='nassau')sky(X,Y,x,y,t);const S=at(x,y);const b=Math.round(Math.sin(t/900+y*.8)*1);
  r(X,Y,16,16,'#1E1E22');for(let i=0;i<16;i+=4){r(X+i+b,Y,1,16,'#2E2E36');r(X,Y+i,16,1,'#2E2E36')}
  const s=((x*16+y*16-Math.floor(t/40))%96+96)%96;if(s<16)r(X+s,Y,2,16,'#3E3E52');
  if(at(x,y-1)!==S){r(X,Y,16,3,'#6E4628');r(X,Y,16,1,'#9C6A3E')}if(at(x,y+1)!==S)r(X,Y+14,16,2,'#55555E');if(at(x-1,y)!==S)r(X,Y,1,16,'#55555E');if(at(x+1,y)!==S)r(X+15,Y,1,16,'#55555E')},
 rigging:(X,Y,x,y,t)=>{sky(X,Y,x,y,t);line(X,Y+2,X+15,Y+13,1,'#C9B27A');line(X,Y+12,X+15,Y+4,1,'#8A7A4E');r(X,Y+7,16,1,'#B39A62')},
 netcaster:(X,Y,x,y,t)=>{TILES.plank(X,Y,x,y);r(X+2,Y+4,12,10,O);r(X+3,Y+5,10,8,'#B08A3A');r(X+3,Y+5,10,2,'#E0B84A');r(X+5,Y+7,6,5,'#4A4A52');
  const out=x<10?-1:1;for(let i=0;i<4;i++)r(out<0?X:X+12,Y+5+i*2,4,1,'#C9C9D1');const gl=Math.floor(t/250)%4;r(X+6+(gl%2)*3,Y+8+(gl>>1)*2,2,2,'#E0B84A')},
 hammock:(X,Y,x,y)=>{TILES.plank(X,Y,x,y);const [ox,oy]=org(x,y),lx=x-ox,ly=y-oy;const cx=lx?0:3,cy=ly?0:3,w=13,h=13;
  r(X+cx,Y+cy,lx?w:16-cx,ly?h:16-cy,'#CDBD8E');for(let i=(lx?0:3);i<(lx?13:16);i+=3)r(X+i,Y+cy,1,ly?h:16-cy,'#A8975F');
  if(!lx&&!ly)r(X+1,Y+1,3,3,'#6E4628');if(lx&&!ly)r(X+12,Y+1,3,3,'#6E4628');if(!lx&&ly)r(X+1,Y+12,3,3,'#6E4628');if(lx&&ly)r(X+12,Y+12,3,3,'#6E4628')},
 mast:(X,Y,x,y)=>{TILES.plank(X,Y,x,y);blit(cvs('mast',32,32,R=>{R(10,24,18,6,'rgba(0,0,0,.25)');for(let v=-12;v<=12;v++){const w=Math.floor(12*Math.sqrt(1-(v/12.5)**2));R(16-w,16+v,2*w,1,O)}
  for(let v=-11;v<=11;v++){const w=Math.floor(11*Math.sqrt(1-(v/11.5)**2));R(16-w,16+v,2*w,1,'#7A4E2C')}for(const rr of [8,5,2]){for(let a=0;a<48;a++){const an=a/48*Math.PI*2;R(Math.round(16+Math.cos(an)*rr),Math.round(16+Math.sin(an)*rr),1,1,'#5E3A20')}}
  R(9,8,4,2,'#9C6A3E');R(8,10,2,3,'#9C6A3E');R(4,15,24,2,'#4A4A52');R(15,4,2,24,'#4A4A52');R(4,15,24,1,'#6E6E78')}),X,Y,x,y)},
 coil:(X,Y,x,y)=>{TILES.plank(X,Y,x,y);for(const [rr,c] of [[6,'#C9B27A'],[4,'#8A7A4E'],[2,'#C9B27A']])for(let a=0;a<36;a++){const an=a/36*Math.PI*2;r(Math.round(X+8+Math.cos(an)*rr),Math.round(Y+8+Math.sin(an)*rr),2,2,c)}},
 gear:(X,Y,x,y,t)=>{TILES.plank(X,Y,x,y);r(X+1,Y+1,14,14,O);r(X+2,Y+2,12,12,'#3E4048');r(X+2,Y+2,12,2,'#5A5C66');r(X+4,Y+6,8,1,'#B08A3A');r(X+4,Y+10,8,1,'#B08A3A');
  r(X+(x%2?3:9),Y+4,4,4,'#E0D9C8');r(X+(x%2?4:10),Y+5,1+(Math.floor(t/400)%3),1,'#C23A3A');if(x%2)r(X+11,Y+11,2,2,Math.floor(t/500)%2?'#69CFD8':'#2C5D63')},
 barrel:(X,Y,x,y)=>{TILES.plank(X,Y,x,y);for(let v=-6;v<=6;v++){const w=Math.floor(6*Math.sqrt(1-(v/6.5)**2));r(X+8-w-1,Y+8+v,2*w+2,1,O);r(X+8-w,Y+8+v,2*w,1,'#8A5A34')}r(X+3,Y+8,10,1,'#4A4A52');r(X+8,Y+3,1,10,'#4A4A52');r(X+5,Y+4,3,1,'#B08A5A')},
 nacelle:(X,Y,x,y,t)=>{sky(X,Y,x,y,t);r(X+2,Y,12,12,O);r(X+3,Y,10,11,'#4A4A52');r(X+3,Y,10,2,'#6E6E78');const sp=Math.floor(t/90)%2;
  if(sp){r(X+4,Y+5,8,2,'#B9C1C9')}else{r(X+7,Y+2,2,8,'#B9C1C9')}r(X+7,Y+5,2,2,'#2B2B30')},
 /* 공장 (Archimedes Engine factory) */
 kelp:(X,Y,x,y,t)=>{r(X,Y,16,16,'#3A4638');for(let i=0;i<4;i++){const sw=Math.round(Math.sin(t/700+x*1.3+i+y)*1.5);const cx=X+1+i*4+sw;r(cx,Y,2,16,i%2?'#566652':'#6E7F6A');r(cx,Y+((hash(x,y)+i*5)%12),2,2,'#8A9A82')}
  if(front(x,y)&&at(x,y+1)&&walkable(x,y+1)){r(X,Y+11,16,5,'#2C352B');for(let i=0;i<4;i++){const sw=Math.round(Math.sin(t/650+x+i)*1.5);r(X+2+i*4+sw,Y+11,2,4+(i%2),'#6E7F6A')}}},
 tfloor:(X,Y,x,y,t)=>{r(X,Y,16,16,'#232823');const h=hash(x,y);r(X+h%13,Y+(h*3)%13,3,2,'#2C332B');r(X+(h*7)%14,Y+(h*5)%14,2,1,'#2C332B');if(h%9===0){const on=(Math.floor(t/700)+h)%3;r(X+(h%10)+3,Y+(h%8)+4,1,1,on?'#3E8B5A':'#2A4A34')}},
 mouth:(X,Y,x,y,t)=>{sky(X,Y,x,y,t);r(X,Y,16,2,'#2C352B');r(X,Y+14,16,2,'#2C352B');for(let i=0;i<16;i+=3)r(X+i,Y+2,2,2+(i%2),'#566652')},
 crystal:(X,Y,x,y,t)=>{r(X,Y,16,16,'#4A3380');const h=hash(x,y);for(let i=0;i<3;i++){const cx=X+1+i*5,hh=8+((h+i*3)%6);r(cx,Y+16-hh,4,hh,'#8C6BD1');r(cx+1,Y+16-hh-1,2,1,'#B79CF0');r(cx,Y+16-hh,1,hh,'#B79CF0');r(cx+3,Y+16-hh,1,hh,'#5A3F96')}
  const k=hash(y,x),ox=3+k%8,oy=5+k%6;r(X+ox,Y+oy,3,3,'#3A2870');r(X+ox,Y+oy,3,1,'#5A44A0');if((Math.floor(t/600)+k)%6===0)r(X+ox+1,Y+oy,1,1,'#F4EEFF')},
 cfloor:(X,Y,x,y,t)=>{r(X,Y,16,16,'#2C2443');r(X,Y,16,1,'#241D38');const h=hash(x,y);if(h%3===0){const on=(Math.floor(t/500)+h)%4===0;r(X+h%13+1,Y+(h*7)%13+1,1,1,on?'#E6DBFF':'#6B52A8')}},
 wwall:(X,Y,x,y)=>{r(X,Y,16,16,'#E3E9EB');r(X,Y,16,2,'#F4F8F9');r(X,Y+12,16,4,'#CDD6D9');if(front(x,y)&&walkable(x,y+1)){r(X,Y+12,16,4,'#F7FAFB');r(X,Y+15,16,1,'#B9C4C8')}},
 speck:(X,Y,x,y,t)=>{r(X,Y,16,16,'#D6E1DF');r(X,Y,16,1,'#C9D5D3');for(let i=0;i<3;i++){const h=hash(x+i*7,y);const px=(h+Math.floor(t/90)+i*5)%16,py=(h*3-Math.floor(t/140)+i*40)%16;r(X+((px%16)+16)%16,Y+((py%16)+16)%16,2,2,i?'#4BE38A':'#B8F5CF')}},
 dent:(X,Y,x,y,t)=>{TILES.wwall(X,Y,x,y);const lit=f().indent;for(let v=-4;v<=4;v++){const w=Math.floor(5*Math.sqrt(1-(v/4.6)**2));r(X+8-w,Y+8+v,2*w,1,v<0?'#BCC8CC':'#D3DCDF')}
  r(X+6,Y+7,4,3,lit?'#5FA8FF':'#AEBBBE');for(let i=0;i<3;i++){const an=t/600+i*2.1;r(Math.round(X+8+Math.cos(an)*6),Math.round(Y+8+Math.sin(an)*5),1,1,lit?'#9FD0FF':'#4BE38A')}},
 hall:(X,Y,x,y,t)=>{r(X,Y,16,16,'#191C23');r(X,Y,16,1,'#22262F');r(X,Y,1,16,'#22262F');r(X+8,Y,1,16,'#1E2129');if(hash(x,y)%11===0)r(X+4,Y+10,2,1,(Math.floor(t/800)+x)%3?'#2E4B55':'#4F8A99')},
 gantry:(X,Y,x,y)=>{TILES.hall(X,Y,x,y,0);r(X+3,Y,10,16,'#0B0D10');r(X+3,Y,2,16,'#2C313B');r(X+11,Y,2,16,'#06070A');for(let v=2;v<16;v+=6)line(X+5,Y+v,X+10,Y+v+4,1,'#1E2129')},
 engineX:(X,Y,x,y,t)=>{TILES.hall(X,Y,x,y,t);const bl=Math.floor(t/500)%4;blit(cvs('eng-'+bl,48,32,(R,L)=>{
  const cx=24,cy=16;for(let v=-15;v<=15;v++){const w=Math.floor(23*Math.sqrt(1-(v/15.5)**2));R(cx-w-1,cy+v,2*w+2,1,'rgba(0,0,0,.35)')}
  for(let v=-14;v<=14;v++){const w=Math.floor(22*Math.sqrt(1-(v/14.6)**2));R(cx-w,cy+v,w,1,v<-8?'#6E7480':'#4E5560');if(v%4===0)R(cx-w,cy+v,w,1,'#3A4048')}
  for(let a=0;a<12;a++){const an=a/12*Math.PI*2;L(cx,cy,Math.round(cx+Math.cos(an)*21),Math.round(cy+Math.sin(an)*13.5),1,a<6&&a>0?'#8A7E66':'#2C313B')}
  for(let a=0;a<64;a++){const an=a/64*Math.PI*2;R(Math.round(cx+Math.cos(an)*22),Math.round(cy+Math.sin(an)*14),1,1,an>Math.PI*.5&&an<Math.PI*1.5?'#8A939E':'#5E6670')}
  for(let a=0;a<32;a++){const an=a/32*Math.PI*2;R(Math.round(cx+Math.cos(an)*7),Math.round(cy+Math.sin(an)*4.5),2,1,a%4?'#3A4048':'#5E6670')}
  R(cx-2,cy-1,4,2,'#0B0D10');[[8,12],[14,22],[11,6]].forEach(([a,b])=>R(a,b,2,1,'#2C313B'));
  R(30,3,1,26,'#2A2F38');R(38,6,1,20,'#2A2F38');R(29,3,10,1,'#2A2F38');R(29,28,10,1,'#2A2F38');R(41,9,3,2,'#E8962A')}),X,Y,x,y)},
 ghost:(X,Y,x,y,t)=>{TILES.hall(X,Y,x,y,t);r(X+3,Y+6,10,7,O);r(X+4,Y+7,8,5,'#7A808A');r(X+4,Y+7,8,1,'#A0A6B0');r(X+1,Y+10,4,3,'#9A6A3A');r(X+11,Y+4,3,6,'#5A6070');r(X+6,Y+13,2,3,'#5A6070');r(X+10,Y+13,3,2,'#9A6A3A');if(Math.floor(t/130+x)%9===0)r(X+7,Y+5,2,2,'#FFD27A')},
 smoke:(X,Y,x,y,t)=>{r(X,Y,16,16,'#060709');if(!f().os)return;for(let i=0;i<4;i++){const ph=t/900+i*1.7+y*.6;const cx=X+8+Math.round(Math.sin(ph)*5),cy=Y+((i*4+Math.floor(t/120))%16);r(cx-3,cy,6,2,i%2?'#24232A':'#1A191F');r(cx-1,cy+2,3,1,'#2E2D35')}if((Math.floor(t/90)+hash(x,y))%23===0)r(X+hash(x,y)%14+1,Y+hash(y,x)%14+1,1,1,'#C06BFF')},
 bulb:(X,Y,x,y,t)=>{TILES.hall(X,Y,x,y,t);r(X,Y,16,4,'#0B0D10');const on=f().cmd&&!f().os;const p=(Math.sin(t/(on?160:500))+1)/2;
  for(let v=-6;v<=5;v++){const w=Math.floor(7*Math.sqrt(1-(v/6.6)**2));r(X+8-w,Y+10+v,2*w,1,v<-2?'#F2E6C8':v<3?'#E2D4B0':'#C9B994')}r(X+8,Y+6,4,1,'#FFF6E0');
  const a=f().os?.35:.55+p*.45;r(X+7,Y+3,2,3,'#D8CBA8');r(X+4,Y+1,8,2,`rgba(255,236,190,${a})`);r(X+5,Y,6,1,`rgba(255,236,190,${a})`);r(X+4,Y+3,8,1,'#B8A884');r(X+6,Y+1,2,1,'#FFFFFF')},
 web:(X,Y,x,y,t)=>{if(!f().web){TILES.kelp(X,Y,x,y,t);return}webBase(X,Y,x,y,t);webThreads(X,Y,x,y,t)},
 groz:(X,Y,x,y,t)=>{webBase(X,Y,x,y,t);webThreads(X,Y,x,y,t);if(!f().web)return;blit(grozCanvas(!!f().ambush,f().ambush?0:Math.floor(t/260)%4),X,Y,x,y)},
};
function webBase(X,Y,x,y,t){TILES.tfloor(X,Y,x,y,t)}
function webThreads(X,Y,x,y,t){if(!f().web)return;const p=(Math.sin(t/700+x)+1)/2,c=p>.5?'#E4ECF8':'#B4C2DA';
 const ey=(a,b)=>hash(a,b)%12+2,ex=(a,b)=>hash(b+31,a)%12+2;
 line(X,Y+ey(x,y),X+15,Y+ey(x+1,y),1,c);line(X+ex(x,y),Y,X+ex(x,y+1),Y+15,1,c);if(hash(x,y)%2)line(X,Y,X+15,Y+15,1,'#8A9AB8');else line(X+15,Y,X,Y+15,1,'#8A9AB8');
 r(X+ex(x,y)-1,Y+ey(x,y)-1,2,2,'#F2A93A');r(X+4+hash(y,x)%8,Y+4+hash(x+5,y)%8,1,1,'#F2A93A')}

/* ---------- zones ---------- */
const ZONES={
 ship:{name:'성실호 · 지휘 통제실',reg:'ARK DILIGENT',
  legend:{'#':{tile:'hull'},'S':{tile:'screen6'},'c':{tile:'console'},'.':{tile:'deck',walk:1},'D':{tile:'airlock',walk:1}},
  map:[
"####################",
"#SSSSSSSSSSSSSSSSSS#",
"#SSSSSSSSSSSSSSSSSS#",
"#cc..............cc#",
"#..................#",
"#...cc.......cc....#",
"#..................#",
"#..................#",
"#...cc.......cc....#",
"#..................#",
"########DD##########"],
  warps:{'8,10':{to:'mytal',x:10,y:2,dir:'down',lock:()=>!f().briefed&&'강하선 헤즈업은 아직 준비 중이에요.'},'9,10':{to:'mytal',x:10,y:2,dir:'down',lock:()=>!f().briefed&&'강하선 헤즈업은 아직 준비 중이에요.'}},
  spots:{get '6,2'(){return f().argue?'켈로완 행성들이 반짝여요. 포세이돈 성운이 보라색으로 빛나요.':'흰 별 두 개 사이에 투명한 공. 킹스네스트예요.'},
   get '13,2'(){return f().argue?'작은 빨간 점이 깜빡여요. 우리 배 근처에 다른 배가 있어요.':'공 안에 구름이 층층이 쌓여 있어요. 가운데는 까매요.'},
   '1,3':'항해 화면: "키유세로 쌍성 · 거리 20킬로미터"','18,3':'화면: "성실호 · 기다리는 시간 넉 달"'},
  things:{
   '#':['성실호의 벽이에요. 여기저기 고친 자국이 있어요.','벽 안에서 낮게 웅웅 소리가 나요.'],
   'S':(x,y)=>vary(x,y,f().argue?['켈로완의 행성들이 작은 점처럼 반짝여요.','보라색 성운이 화면에 퍼져 있어요.']:['화면에 하얀 별 두 개가 아주 밝아요.','화면 가운데에 투명한 공이 떠 있어요.']),
   'c':['콘솔이에요. 작은 불빛이 깜빡여요.','콘솔 화면의 숫자가 천천히 바뀌어요.']},
  npcs:['dejean','uemi','ellieS','gyShip','otylia']},
 mytal:{name:'마이탈포트 · 철골 기둥',reg:'MYTALPORT · KINGSNEST',sky:['#F1F7F5','#E4F2EC','#D2EADF','#BFE2D0','#A9D8C1','#93CDB2','#7DC0A3','#68B294'],
  legend:{'P':{tile:'port'},'H':{tile:'airlock',walk:1},'~':{tile:'sky6'},'X':{tile:'truss'},'=':{tile:'girder',walk:1},'p':{tile:'gplate',walk:1},
   'a':{tile:'airplant'},'K':{tile:'ovarKoa'},'J':{tile:'ovarKech'},'r':{tile:'boarding',walk:1}},
  map:[
"PPPPPPPPPPPPPPPPPPPPPPPP",
"PPPPPPPPPPHHPPPPPPPPPPPP",
"~~~X~~~~~pppp~~~~~X~~~~~",
"~~~=======pp=======~~~~~",
"~~~=~~~~~~==~~~~~~=~~~~~",
"~a~=~~X~~~==~~~X~~=~~a~~",
"~~~=~~~~~~==~~~~~~=~~~~~",
"~pppp=====pppp=====pppp~",
"~pppp~~~~~~=~~~~~~~pppp~",
"~~=~~~~~~~~=~~~~~~~~~=~~",
"~~=~~KKK~~~=~~~JJJ~~~=~~",
"~~=~~KKK~~~=~~~JJJ~~~=~~",
"~~=pprpppp=pp=ppppppp=~~",
"~~=pppppppppppppppppp=~~",
"~~~~~~~~~a~~~~~~~a~~~~~~",
"~~~~~~~~~~~~~~~~~~~~~~~~"],
  rooms:[[0,0,23,3,'마이탈포트 · 껍질 아래'],[0,9,23,15,'마이탈포트 · 오바르 정류장']],
  warps:{'10,1':{to:'ship',x:8,y:9,dir:'up',lock:()=>!f().argue&&'아직 할 일이 있어요. 성실호는 넉 달 기다려요.'},'11,1':{to:'ship',x:8,y:9,dir:'up',lock:()=>!f().argue&&'아직 할 일이 있어요. 성실호는 넉 달 기다려요.'},
   '5,12':{to:'nassau',x:6,y:11,dir:'right',lock:()=>!f().ride&&'코아가 아직 출발 준비를 안 했어요.'}},
  spots:{'8,2':'철골이 이백오십 미터 아래로 내려가요. 그 아래는 끝없는 구름.','4,4':'아래를 봐요… 흰 구름, 초록 구름, 더 아래는 안 보여요.',
   get '7,11'(){return f().ride?'코아는 나소로 떠났어요.':'코아의 까만 등에 무지갯빛이 돌아요. 버스만큼 커요.'},'15,11':'니에바스의 오바르, 케크. 까만 등이 반짝여요.'},
  things:{
   '~':['아래로 끝없는 구름. 바닥이 안 보여요.','구름이 천천히 흘러가요.','바람이 아래에서 올라와요.'],
   'P':['마이탈포트의 금속 껍질이에요.','껍질에 보라색 불빛이 깜빡여요.'],
   'X':'철골이 아래로 길게 내려가요.',
   'a':AIRP,
   'K':()=>f().ride?'빈 자리예요. 코아는 나소로 떠났어요.':'코아의 큰 몸이에요. 까만 등에 무지갯빛이 돌아요.',
   'J':'케크의 큰 몸이에요. 까만 등이 반짝여요.'},
  npcs:['gyM','finnSick','dylan','koaM','kech','nievas']},
 nassau:{name:'나소 · 오크리프',reg:'NASSAU OAKREEF',sky:['#EDF6F1','#DCEFE5','#C6E5D5','#AFDAC4','#98CEB2','#82C1A0','#6DB28F','#5AA27F'],
  legend:{'~':{tile:'sky6'},'b':{tile:'bark',walk:1},'s':{tile:'spoke',walk:1},'Y':{tile:'honey'},'H':{tile:'hut'},'h':{tile:'hut'},'m':{tile:'mat',walk:1},
   't':{tile:'jtable',over:1},'f':{tile:'fanleaf'},'a':{tile:'airplant'},'J':{tile:'ovarGen'},'r':{tile:'perch',walk:1},'D':{tile:'gangplank',walk:1},'g':{tile:'rigging'},'S':{tile:'sail'}},
  map:[
"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
"~~~~~~~~~~~~f~bb~~~~~a~~~~~~~~",
"~a~~~~~~~~~bbbbbbbb~~~~~~~~~~~",
"~~~~~~~~~bbbbbbbbbbbb~~~~~~f~~",
"~~~~~~~~bbbb~~ss~~bbbb~~~f~~~~",
"~~~f~~~bbbHHHHss~HHHbbb~~~~~~~",
"~~~~f~~bb~HHHHss~HHH~bb~~~~~~~",
"~~~~~~bbbmmmmmssmmmm~bbb~~~SSS",
"~~~~~~bbmmtttmssmmmm~~bb~~gSSS",
"~~~~~~bbmmmmmYYYY~~~~~bb~~gSSS",
"~JJJ~bbbsssssYYYYsssssbbbDgSSS",
"~JJJrbbbsssssYYYYsssssbbbDgSSS",
"~~~~~~bb~~~~~YYYY~~~~~bb~~gSSS",
"~~~~~~bb~~~~~~ss~~~~~~bb~~gSSS",
"~~f~~~bbbhhh~~ss~~hhhbbb~~~SSS",
"~~~~~~~bbhhh~~ss~~hhhbb~~~~~~~",
"~~~~~~~bbb~~~~ss~~~~bbb~f~~~~~",
"~~~~~f~~bbbb~~ss~~bbbb~~~~~~~~",
"~~~~~~~~~bbbbbbbbbbbb~~~~~~a~~",
"~~~~~~~~a~~bbbbbbbb~~~~~~~~~~~",
"~~~~~~~~~~f~~~bb~~f~~~~~~~~~~~",
"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"],
  rooms:[[8,5,13,9,'나소 · 흥정하는 집'],[16,5,19,8,'나소 · 주스 가게'],[13,9,16,12,'나소 · 꿀잎']],
  warps:{'4,11':{to:'mytal',x:8,y:13,dir:'up'},'25,10':{to:'boat',x:10,y:12,dir:'up',lock:()=>!f().hired&&'아직 배를 못 빌렸어요. 흥정이 먼저예요.'},
   '25,11':{to:'boat',x:10,y:12,dir:'up',lock:()=>!f().hired&&'아직 배를 못 빌렸어요. 흥정이 먼저예요.'}},
  spots:{'13,10':'가운데 잎에 꿀 같은 방울이 가득해요. 죽은 새하고 돌이 붙어 있어요.','16,10':'끈적끈적해요! 만지면 손이 안 떨어져요.',
   '10,6':'나소에서 제일 큰 갈대 집. 손님은 여기서 흥정해요.','9,14':'작은 갈대 집. 안에서 아이들 웃음소리가 들려요.','17,6':'주스 가게. 과일 냄새가 나요.'},
  things:{
   '~':['초록빛 구름이 끝없이 펼쳐져 있어요.','바람이 따뜻해요.','멀리 하얀 별빛이 구름을 비춰요.'],
   'S':SAIL,'g':RIG,'a':AIRP,
   'Y':['끈적한 잎에 노란 방울이 반짝여요.','작은 벌레가 잎에 붙어서 못 움직여요.'],
   'H':['갈대로 만든 집이에요.','창문에 노란 불이 켜져 있어요.','갈대 벽 사이로 바람이 들어가요.'],
   'h':['작은 갈대 집이에요.','창문에 노란 불이 켜져 있어요.'],
   'f':'부채처럼 큰 잎이 바람에 흔들려요.',
   'J':'다른 오바르가 쉬고 있어요. 등이 반짝반짝해요.',
   't':'탁자 위에 과일 주스 잔이 있어요.'},
  npcs:['ettan','jazon','cafe']},
 boat:{name:'실버 클라우드스피어 · 갑판',reg:'SILVER CLOUDSPEAR',sky:['#5E9C88','#4E8A78','#3F7868','#326658','#26544A','#1C433C','#13332F','#0C2422'],
  legend:{'~':{tile:'sky6'},'K':{tile:'ovarKoa'},'L':{tile:'ovarKaizen'},'R':{tile:'rail'},'r':{tile:'boarding',walk:1},'.':{tile:'plank',walk:1},'S':{tile:'sail'},
   's':{tile:'rigging'},'N':{tile:'netcaster'},'h':{tile:'hammock'},'M':{tile:'mast'},'c':{tile:'coil'},'g':{tile:'gear'},'T':{tile:'terminal'},'b':{tile:'barrel'},
   'D':{tile:'gangplank',walk:1},'F':{tile:'nacelle'}},
  map:[
"~~~~~~~~~~~~~~~~~~~~~~",
"~~~~~~KKK~~~LLL~~~~~~~",
"~~~~~~KKK~~~LLL~~~~~~~",
"~~~~RRr.RRRRR.RRRR~~~~",
"SSSsRN..........NRsSSS",
"SSSsR............RsSSS",
"SSSsR.hh.........RsSSS",
"SSSsR.hh..MM.....RsSSS",
"SSSsR.....MM.....RsSSS",
"~~~~R............R~~~~",
"~~~~R.c..........R~~~~",
"~~~~R.ggT....bb..R~~~~",
"~~~~RN..........NR~~~~",
"~~~~RRRRRRDDRRRRRR~~~~",
"~~~~~~~FF~~~~FF~~~~~~~",
"~~~~~~~~~~~~~~~~~~~~~~"],
  rooms:[[5,4,16,8,'실버 클라우드스피어 · 윗갑판'],[5,9,16,12,'실버 클라우드스피어 · 기관실 옆']],
  warps:{'6,3':{to:'factory',x:2,y:8,dir:'right',lock:()=>!f().found?'공장이 어디 있는지 아직 몰라요.':f().massacre?'코아도 카이젠도 이제 없어요.':false},
   '10,13':{to:'nassau',x:24,y:10,dir:'left'},'11,13':{to:'nassau',x:24,y:10,dir:'left'}},
  spots:{'6,10':'굵은 밧줄이 둥글게 감겨 있어요.','10,7':'돛대예요. 까만 돛은 바람도 받고 빛도 받아요.','5,12':'그물 대포. 막대 네 개가 튀어나와 있어요.',
   '13,11':'과일 와인 통이에요. "와인은 하늘에서 못 잡아요." 제이즌 말이에요.','6,11':'에이든의 엔진. 바람이 없을 때 팬을 돌려요.','6,7':'해먹. 블라인드를 닫으면 밤처럼 어두워요.'},
  things:{
   '~':['구름이 점점 어두워져요.','아래는 깊고 어두워요.'],
   'R':['나무 난간이에요. 반질반질해요.','난간 너머로 구름이 흘러가요.'],
   'S':SAIL,'s':RIG,
   'K':()=>f().massacre?'빈 자리예요. 여기에 코아가 매달려 있었어요.':'배 옆에 코아가 매달려 있어요.',
   'L':()=>f().massacre?'빈 자리예요. 이제 바람만 불어요.':'배 옆에 카이젠이 매달려 있어요.',
   'N':'그물 대포. 막대 끝이 반짝여요.',
   'h':'해먹이에요. 흔들흔들해요.',
   'M':'돛대예요. 아주 굵은 나무예요.',
   'g':'엔진 계기판이에요. 빨간 바늘이 움직여요.',
   'b':'나무 통이에요. 달콤한 냄새가 나요.',
   'F':'배 아래 팬이 빙글빙글 돌아요.'},
  npcs:['ayden','rylee','uemiB','jazonB','ellieB','dylanB','koaB','kaizenB']},
 factory:{name:'공장 · 에어콤부 터널',reg:'ENGINE FACTORY · DEEP',sky:['#0F2420','#0B1A18','#081311','#060D0C'],
  legend:{'~':{tile:'sky6'},'O':{tile:'mouth',walk:1},'k':{tile:'kelp'},',':{tile:'tfloor',walk:1},'V':{tile:'crystal'},'c':{tile:'cfloor',walk:1},'u':{tile:'wwall'},
   'e':{tile:'speck',walk:1},'i':{tile:'dent'},'G':{tile:'gantry'},'h':{tile:'hall',walk:1},'b':{tile:'bulb'},'E':{tile:'engineX'},'x':{tile:'ghost'},'v':{tile:'smoke'},
   'n':{tile:'web'},'K':{tile:'ovarKoa'},'L':{tile:'ovarKaizen'},'Z':{tile:'groz'}},
  map:[
"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
"kVVVVVVVuuuuiiuuuukGhhhhhGbbbk",
"kVcccccVueeeeeeeeukhhhhhhhhhhk",
"kVcccccceeeeeeeeeukhEEEhhEEEhk",
"kVcccccVueeeeeeeeukhEEEhhEEEhk",
"kVVcVVVVuuuuuuuuuukhhhhhhhhhhk",
"kkkckkkkkkkkkkkkkkkhGhhxhhGvvk",
"~~,,,,,,,,,,,,,,,,,hhhhhhhhvvk",
"~O,,,,,,,,,,,,,,,,,hhxhhhhhvvk",
"~~,,,,,,,,,,,,,,,,,hhhhhhhhvvk",
"kkk,kkkkkkkkkkkkkkkhEEEhEEEvvk",
"kkk,kkkkkkkkkkkkkkkhEEEhEEEvvk",
"kkk,kkkkkkkkkkkkkkkhhhhhhhhvvk",
"kkk,kkkkkkkkkkkkkkkkkkk,,kkkkk",
"kkk,nnnnnKKKnZZnnLLLnZZ,,kkkkk",
"kkk,nnnnnKKKnZZnnLLLnZZ,,kkkkk",
"kkk,,,,,,,,,,,,,,,,,,,,,,kkkkk",
"kkkk,,,,,,,,,,,,,,,,,,,,kkkkkk",
"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"],
  rooms:[[1,1,7,5,'공장 · 수정 방'],[8,1,17,5,'공장 · 초록 불빛 방'],[19,1,28,12,'공장 · 조립 홀'],[3,13,24,17,'공장 · 아래 터널']],
  warps:{'1,8':{to:'boat',x:10,y:5,dir:'down',lock:()=>!f().massacre&&'아직 못 돌아가요. 동료들이 안에 있어요.'}},
  spots:{get '12,1'(){return f().indent?'움푹한 곳이 파랗게 빛나요. 핀의 손바닥 자국이에요.':'벽에 움푹한 곳이 많아요. 초록 불빛이 천천히 돌아요.'},
   '1,3':'보라색 수정 벽. 안에 주먹만 한 것들이 반짝여요.','21,4':'반쯤 만든 아르키메데스 엔진. 다 만들면 이십오 킬로미터예요.',get '23,6'(){return f().os?'고스트 잔해. 머리하고 몸이 안 맞아요. 여러 고물을 붙여서 만들었어요.':'고스트 부품 더미예요. 머리하고 몸이 다 달라요.'},
   get '27,7'(){return f().os?'까만 연기 같은 게 움직여요… 아니, 수천 마리 나이트위드예요.':'어둠 속에서 이상한 울음소리가 들려요.'},get '7,15'(){return f().web?'빛나는 거미줄에 노란 방울이 맺혀 있어요.':'터널 벽에 에어콤부가 흔들려요.'},
   get '13,15'(){return f().ambush?'죽은 그로즐라미아. 노란 피가 거미줄 위에 굳었어요.':f().web?'코끼리만 한 거미가 갑옷을 입었어요. 독니가 초록색으로 빛나요.':'터널 안쪽이 너무 어두워요.'}},
  things:{
   'k':['다시마 같은 풀이 빽빽해요. 천천히 흔들려요.','풀 사이가 축축하고 어두워요.'],
   '~':'터널 밖은 깊은 어둠이에요.',
   'u':['하얀 벽이에요. 이음새가 하나도 없어요.','벽이 아주 매끈해요.'],
   'V':['보라색 수정이에요. 차갑고 매끈해요.','수정 벽 안에 주먹만 한 것들이 반짝여요.'],
   'E':['반쯤 만든 엔진이에요. 큰 뼈대만 보여요.','엔진이 너무 커서 끝이 안 보여요.'],
   'G':'까만 기둥이에요. 위가 안 보여요.',
   'b':()=>f().os?'버섯 모양 전구예요. 지금은 조용해요.':f().cmd?'버섯 모양 전구가 빠르게 깜빡여요.':'크림색 혹 위에 버섯 모양 전구가 있어요.',
   'i':()=>f().indent?'움푹한 곳이 파랗게 반짝여요.':'벽에 움푹한 곳이 있어요. 초록 불빛이 돌아요.',
   'x':()=>f().os?'부서진 고스트예요. 움직이지 않아요.':'고스트 부품 더미예요. 팔다리가 다 달라요.',
   'v':(x,y)=>f().os?vary(x,y,['까만 연기가 꿈틀거려요.','어둠 속에서 날개 소리가 들려요.']):'어둠 속에서 이상한 울음소리가 들려요.',
   'n':(x,y)=>!f().web?'터널 벽에 에어콤부만 흔들려요.':vary(x,y,has6('거미')?['거미줄에 노란 방울이 맺혀 있어요. 끈적끈적해요.','거미줄이 천천히 흔들려요.']:['실에 노란 방울이 맺혀 있어요. 끈적끈적해요.','실이 천천히 흔들려요.']),
   'Z':()=>f().ambush?'죽은 그로즐라미아. 다리가 다 꺾였어요.':f().web?'갑옷을 입은 큰 거미가 기다려요.':'어둠 속에 뭔가 있어요.',
   'K':()=>f().ambush?'코아의 큰 몸이 움직이지 않아요.':f().web?'코아의 몸에 끈적한 실이 감겼어요.':'코아가 쉬고 있어요. 등이 반짝여요.',
   'L':()=>f().ambush?'카이젠의 몸이 움직이지 않아요.':f().web?'카이젠의 몸에 끈적한 실이 감겼어요.':'카이젠이 쉬고 있어요. 조금 떨려요.'},
  npcs:['bensath','elsbeth','gyF','finnBulb','dave1','dave2','koaF','kaizenF','dylanF','ellieF','nweid']},
};

/* ---------- people and creatures ---------- */
const NPC={
 /* 성실호 */
 dejean:{name:'드장 선장',zone:'ship',x:9,y:4,dir:'down',look:{hair:'#8A8A90',skin:'#C99470',shirt:'#2E3B55',pants:'#2E3B55',cap:'#2E3B55',belt:'#E8962A',arm:'#B87333'},
  talk:()=>f().argue?says6(['{관문|관문}을 세 번 지났어요. 다들 살아서 와서 다행이에요.','그런데 바깥 시간은… 너무 많이 지났어요.']):
   says6(['내 눈으로 이걸 보다니. 오래 살길 잘했어요.','우리는 이십 킬로미터 밖에서 기다릴게요.','넉 달이에요. 넉 달 안에 꼭 돌아와요.'])},
 uemi:{name:'우에미주발리',zone:'ship',x:4,y:6,dir:'up',look:UEMI,badge:['구름','층'],hide:()=>f().briefed&&!f().argue,
  after:'구름이 층마다 색이 달라요. 정말 예뻐요.',
  talk:()=>[
   {say:'저는 항해사 우에미주발리예요. 화면 봐요!'},
   {say:'저게 킹스네스트예요. {해왕성|해왕성}만큼 큰 투명한 공이에요.'},
   {say:'겉은 수정이에요. 안에는 하얀 게 가득해요.'},
   Q.uemi[0],
   {say:'위에는 흰 구름, 그 아래는 초록 구름. 맨 아래는 까만 구름이에요.'},
   Q.uemi[1],
   {w:'층',build:['구름이','층층이','쌓여','있어요']},
   {say:'공장은 오천 킬로미터 아래, 까만 층에 있대요.'},
   {say:'강하선 {헤즈업|헤즈업}이 준비됐어요. 아홉 명이 가요!',award:['구름','층'],set:()=>{f().briefed=1}}]},
 ellieS:{name:'엘리',zone:'ship',x:15,y:7,dir:'left',look:ELLIE,hide:()=>f().briefed&&!f().argue,
  status:()=>f().argue&&!f().makeup?'todo':null,
  script:()=>{
   if(f().makeup)return says6(['오틸리아한테 무슨 일이 있었을까요?']);
   if(f().argue)return [
    {say:'…안녕.'},{who:'핀',say:'안녕.'},
    {say:'미안해요. 그때 너무 심하게 말했어요.'},
    {who:'핀',say:'아니에요. 제가 바보였어요. 엘리 말이 맞아요.'},
    {say:'핀 마음 이야기, 저는 듣고 싶어요. 정말이에요.'},
    {who:'핀',say:'고마워요. 그런 사람은 엘리가 처음이에요.',set:()=>{f().makeup=1}},
    {say:'…어? 우에미주발리가 우리를 불러요. 신호가 왔대요.'}];
   return null},
  talk:()=>says6(['카이발에서 저는 탱크 안에 남았어요. 정말 창피했어요.','이번에는 저도 같이 가요. 아무도 못 막아요.'])},
 gyShip:{name:'기보이',zone:'ship',x:12,y:6,dir:'down',look:GYVOY,hide:()=>!f().argue,
  talk:()=>says6(['{로렌츠 시계|로렌츠 시계}를 봐요. 곤디아에서는 31년 8개월이 지났어요.','나쁘지 않아요! 돌로드는 아직 18주 남았어요.','이 배는 우주에서 최고예요. 정말이에요.'])},
 otylia:{name:'오틸리아 (화면)',zone:'ship',x:10,y:3,dir:'down',look:{hair:'#C9DDE2',skin:'#CFE6EE',shirt:'#7FB0C8',pants:'#5E8AA8',style:'long'},hide:()=>!f().makeup,
  status:()=>'todo',
  talk:()=>[
   {who:'우에미주발리',say:'선장님, 관문 옆에 배가 한 척 있어요.'},
   {who:'우에미주발리',say:'{폴카다브|폴카다브}예요. 하이 로사 배예요. 신호를 보내요.'},
   {who:'드장 선장',say:'연결해요.'},
   {who:'…',say:'화면에 아주 지친 중년 여자 얼굴이 나와요.'},
   {say:'여기는 폴카다브예요. 성실호, 핀 잘고리토부 있어요?'},
   {say:'핀, 도와줘. 제발.'},
   {say:'다 엉망이 됐어.'},
   {who:'핀',say:'…오틸리아? 여기서 뭐 해?',finale:1,set:()=>{f().done=1}}]},
 /* 마이탈포트 */
 gyM:{name:'기보이',zone:'mytal',x:4,y:8,dir:'right',look:GYVOY,hide:()=>!!f().ride,
  status:()=>!f().gotBox?'todo':null,
  script:()=>f().gotBox?says6(['먼저 온 조종사, 딜런이에요. 저 오바르를 타요.','목표는 비밀이에요. 배 사람들한테도요.']):null,
  talk:()=>[
   {say:'아스테리아 여신님! 저 조종사들 봐요.'},
   {say:'{이카리안|이카리안}들이에요. 다 우리를 태우고 싶어 해요.'},
   {say:'우리 목표요? 그건 아직 비밀이에요. 배 사람들한테도 말하지 마요.'},
   {say:'이 상자 들어요. 나소에서 배를 빌릴 때 필요해요.',give:'거래 물건 상자',set:()=>{f().gotBox=1}},
   {say:'핀은요? 저쪽에서 얼굴이 하얘요. 하하.'}]},
 finnSick:{name:'핀',zone:'mytal',x:19,y:8,dir:'left',look:FINN,badge:['어지럽다'],hide:()=>!!f().finnOk,
  after:'아래는 보지 마요. 저는 위만 봐요.',
  talk:()=>[
   {say:'괜찮아요… 아니, 안 괜찮아요.'},
   {say:'아래를 봐요. 끝이 없어요. 구름, 구름, 또 구름.'},
   Q.finn[0],
   {say:'괜찮아요. 같이 가요. 아래는 안 볼 거예요.',award:['어지럽다'],set:()=>{f().finnOk=1}}]},
 dylan:{name:'딜런',zone:'mytal',x:7,y:13,dir:'up',look:DYLAN,hide:()=>!!f().ride,
  status:()=>f().finnOk&&f().gotBox?'todo':'wait',
  script:()=>{
   if(!f().gotBox)return says6(['저요! 제가 제일 먼저 왔어요! 손님, 대장이 누구예요?']);
   if(!f().finnOk)return says6(['저 친구, 얼굴이 하얘요. 괜찮아요?','같이 가는 사람 다 모이면 출발해요!']);
   return null},
  talk:()=>[
   {say:'저는 딜런, 조종사예요. 이 {오바르|오바르}는 코아예요.'},
   {say:'저는 코아 안에 머리를 넣고 날아요. 코아가 제 팔다리를 느껴요.'},
   {who:'기보이',say:'깊이 내려갈 배가 필요해요. 알아요?'},
   {say:'많아요! 나소에 있어요. 오십 킬로미터 위요.'},
   {say:'코아하고 제가 바로 데려다줄게요. 타요!'},
   {who:'…',say:'모두 코아 안에 탔어요. 코아가 구름 속으로 날아요.'},
   {who:'코아',say:'사람 다섯 명 중 한 명은 여기서 {킹스네스트 멀미|킹스네스트 멀미}를 해요.'},
   {who:'코아',say:'끝없는 하늘을 뇌가 못 견뎌서 그래요!'},
   {who:'데이브',say:'토하겠다.'},
   {who:'핀',say:'{우웩|토하다}…'},
   {...Q.finn[1],who:'…'},
   {who:'핀',say:'…너무 창피해요.',set:()=>{f().ride=1}}]},
 koaM:{name:'코아',zone:'mytal',x:6,y:12,dir:'down',still:1,look:ovarHead('koa'),hide:()=>!!f().ride,
  talk:()=>says6(['안녕, 친구! 저를 골라 줘서 고마워요.','제 입술이 말보다 조금 늦게 움직여요. 하하.','아무리 깊어도, 아무리 두꺼운 구름도 괜찮아요!'])},
 kech:{name:'케크',zone:'mytal',x:16,y:12,dir:'down',still:1,look:ovarHead('kech'),
  talk:()=>says6(['부우웅… 저도 태워 주고 싶었는데요.','다음에는 저를 골라요, 친구!'])},
 nievas:{name:'니에바스',zone:'mytal',x:18,y:13,dir:'left',look:icar('#B88A62','#C9A24A','#3E6E8A'),
  talk:()=>says6(['니에바스예요! 킹스네스트에서 제 케크가 제일 빨라요!','딜런이 먼저 왔어요? 다음엔 제가 이겨요.'])},
 /* 나소 */
 ettan:{name:'에탄 선장',zone:'nassau',x:13,y:7,dir:'down',look:icar('#A87A56','#8A8A8A','#5A2E4A'),badge:['해적','매복'],
  pos:()=>f().ettanOut?[19,3]:[13,7],
  after:'저는 깊은 곳에 안 가요. 조심해요. 해적이 매복해요.',
  talk:()=>[
   {say:'나소에 온 걸 환영해요. 주스 마셔요.'},
   {who:'기보이',say:'공장까지 내려갈 배가 필요해요.'},
   {say:'공장이요? 오천 킬로미터 아래, 깊은 어둠 속이에요.'},
   {say:'거기에는 무서운 것이 많아요. 해적 배도 있어요.'},
   Q.ettan[0],
   {say:'해적들은 구름 뒤에 숨어서 기다려요. 그리고 갑자기 공격해요.'},
   Q.ettan[1],
   {say:'깊은 곳에는 아스테리아 여신님이 주무신대요.'},
   {say:'{나이트위드|나이트위드} 군대가 여신님을 지켜요.'},
   {who:'핀',say:'운이 좋으면 괜찮을 거예요.'},
   {say:'깊은 곳에는 운이 없어요. 우리 가족들이 기다려요.'},
   {say:'미안하지만, 제 배에는 안 태워요.',award:['해적','매복'],set:()=>{f().ettanOut=1}},
   {who:'…',say:'에탄이 인사하고 나갔어요. 이카리안 몇 명도 따라 나갔어요.'}]},
 jazon:{name:'제이즌 선장',zone:'nassau',x:11,y:7,dir:'down',look:icar('#8C5E3E','#1E1E24','#2E5E9A'),badge:['흥정하다'],
  status:()=>{if(!has6('흥정하다'))return f().ettanOut?'todo':'wait'},
  after:'흥정은 즐거워요. 그렇죠? 하하.',
  script:()=>!f().ettanOut?says6(['에탄 선장이 먼저 말하고 싶어 해요. 들어 봐요.']):null,
  talk:()=>[
   {say:'하하, 에탄은 {미신|미신}을 믿어요. 저는 경험을 믿어요.'},
   {say:'좋아요. 제 배, 실버 클라우드스피어로 데려다줄게요.'},
   {say:'그런데 싸지 않아요. 뭘 가져왔어요?'},
   {say:'흠… 트래블러 물건이네요. 좋아요.',take:['거래 물건 상자']},
   {say:'그래도 부족해요! 우리 아이들이 굶어요!'},
   {who:'기보이',say:'아이고, 우리도 망해요! 이 정도면 충분해요!'},
   Q.jazon[0],
   {w:'흥정하다',build:['우리는','웃으면서','흥정해요']},
   {say:'두 시간 흥정, 끝! 아홉 시간 후에 출발해요.'},
   {say:'오바르 둘도 같이 가요. 코아하고 카이젠.',award:['흥정하다'],set:()=>{f().hired=1}}]},
 cafe:{name:'주스 가게 이카리안',zone:'nassau',x:18,y:7,dir:'down',look:icar('#D2A882','#6B3A2A','#C25B7A',1),
  script:()=>{const q=Q.cafe[Math.random()*Q.cafe.length|0];return [{say:'어서 와요! 과일 주스 한 잔 해요. 조금 세요!'},{...q,old:1},{say:'또 와요. 주스 마시면서 옛날 단어 공부해요.'}]},
  talk:()=>[]},
 /* 실버 클라우드스피어 */
 ayden:{name:'에이든',zone:'boat',x:7,y:10,dir:'down',look:{hair:'#6B4A2A',skin:'#D9A57E',shirt:'#8A6A3A',pants:'#3E3A30',cap:'#5A4A30'},badge:['돛','밧줄'],
  after:'라일리 보여요? 하늘에서 춤추는 것 같아요.',
  talk:()=>[
   {say:'안녕하세요. 저는 에이든, 이 배 기술자예요.'},
   {say:'저도 원래 트래블러 배에서 왔어요. 그런데 여기 남았어요. 라일리 때문에요.'},
   {say:'저 까만 천 보여요? 바람도 받고, 빛도 받아서 전기를 만들어요.'},
   Q.ayden[0],
   {w:'돛',build:['돛이','배를','움직이게','해요']},
   {say:'돛은 밧줄로 묶어요. 밧줄이 끊어지면 큰일 나요.'},
   Q.ayden[1],
   {say:'곧 라일리가 새를 잡을 거예요. 밧줄 당기는 걸 도와줘요!',award:['돛','밧줄'],set:()=>{f().ayden=1}}]},
 rylee:{name:'라일리',zone:'boat',x:15,y:4,dir:'right',look:icar('#E0B48C','#B5652F','#2F8F8A',1),
  status:()=>f().ayden&&!f().lunchGot?'todo':null,
  script:()=>{
   if(!f().ayden)return says6(['쉿… 지금 새를 기다려요.']);
   if(f().lunchGot)return says6(['에이든이요? 저를 위해서 배를 떠났어요. 저도 그 사람을 사랑해요.']);
   return null},
  talk:()=>[
   {say:'{케스카|케스카} 떼가 와요! 앵무새 색깔, 칠면조 크기예요.'},
   {say:'넷, 셋, 둘… 발사!'},
   {who:'…',say:'막대 네 개가 날아가서 {그물|그물}을 펼쳤어요.'},
   {say:'우리 그물에 열두 마리가 넘게 잡혔어요! 끌어와요.'},
   Q.rylee[0],
   {say:'새들이 소리 지르고 부리로 물어요. 장갑을 껴요.'},
   {who:'…',say:'라일리가 새를 하나씩 꺼내서 목을 비틀었어요.'},
   {say:'불쌍하죠? 그래도 오늘 점심이에요.'},
   {say:'다 구웠어요! 이거 우에미주발리한테 갖다줘요.',give:'케스카 구이',set:()=>{f().lunchGot=1}}]},
 uemiB:{name:'우에미주발리',zone:'boat',x:11,y:10,dir:'down',look:UEMI,hide:()=>!!f().argue,
  status:()=>hasItem('케스카 구이')?'todo':null,
  script:()=>{
   if(f().massacre)return says6(['해적 배 세 척의 신호가… 다 사라졌어요.']);
   if(f().found)return says6(['해적 배 하나가 계속 따라와요. 조심해요.']);
   if(!hasItem('케스카 구이'))return says6(['센서를 보고 있어요. 아직 아무것도 없어요.','배고파요…']);
   return [
    {say:'와, 케스카 구이! 고마워요.',take:['케스카 구이']},
    {say:'벌써 열흘째 내려왔어요. 오천 킬로미터 아래예요.'},
    {say:'춥고 어두워요. 여기서는 밤이 계속돼요.'},
    {say:'잠깐… 센서에 뭐가 있어요. 아주 커요.'},
    {say:'천이백 킬로미터 밖에 아주 큰 게 있어요. 공장이에요!'},
    {say:'그런데 해적 배 하나가 계속 따라와요. 백칠십 킬로미터 뒤에요.'},
    {who:'제이즌 선장',say:'배는 십오 킬로미터 밖에 세울게요. 오바르를 타고 가요.',set:()=>{f().found=1}}]},
  talk:()=>[]},
 jazonB:{name:'제이즌 선장',zone:'boat',x:12,y:5,dir:'down',look:icar('#8C5E3E','#1E1E24','#2E5E9A'),badge:['슬퍼하다'],
  status:()=>{if(!f().massacre)return null},
  after:'딜런은 아직 슬퍼해요. 시간이 필요해요.',
  script:()=>!f().massacre?says6(['여기 위에는 밤이 없어요.','그런데 저 아래는… 어둠이 우리를 불러요.']):null,
  talk:()=>[
   {say:'코아하고 카이젠… 둘 다 죽었어요?'},
   {say:'딜런은 아무 말도 안 해요. 계속 코아만 생각해요.'},
   Q.jazon2[0],
   {say:'오바르는 우리 가족이에요. 나소 사람들도 울 거예요.'},
   Q.jazon2[1],
   {say:'딜런 옆에 있어 줘요. 말은 안 해도 돼요.',award:['슬퍼하다']}]},
 ellieB:{name:'엘리',zone:'boat',x:14,y:9,dir:'left',look:ELLIE,hide:()=>f().found&&!f().massacre,
  status:()=>f().massacre&&has6('슬퍼하다')&&!f().argue?'todo':null,
  script:()=>{
   if(f().argue)return says6(['…좀 혼자 있고 싶어요.']);
   if(f().massacre){
    if(!has6('슬퍼하다'))return says6(['배가 아파요. 약이 잘 안 들어요.','딜런은… 제이즌 선장이 보고 있어요.']);
    return [
     {who:'핀',say:'오틸리아는 어떻게 변했을까요? 조카들도 많겠죠?'},
     {who:'핀',say:'이제 셀레스철한테 한 방 먹일 거예요. 우리는 자유예요!'},
     {who:'핀',say:'잘고리토부로 사는 건 정말 힘들어요. 다들 알 거예요.'},
     {say:'핀, 제발 그만 좀 불평해요!'},
     {say:'핀은 곤디아에서 제일 좋은 삶을 살았어요. 그건 특권이에요.'},
     {say:'일 년에 한 번 종이에 사인하고, 그게 일이었어요?'},
     {who:'핀',say:'…실망시켜서 미안해요.'},
     {who:'…',say:'핀이 돌아서서 나갔어요.',set:()=>{f().argue=1}},
     {say:'아… 내가 또 왜 그랬지.'}]}
   if(!f().ayden)return says6(['흥정은 연극이었대요. 에탄이 나간 것도요.','핀도 "연극이었어요" 해요. 정말일까요?']);
   return says6(['구름 색이 점점 까매져요.','핀은 이제 안 어지러워 보여요. 다행이에요.'])},
  talk:()=>[]},
 dylanB:{name:'딜런',zone:'boat',x:8,y:7,dir:'left',look:DYLAN,hide:()=>!f().massacre,
  talk:()=>says6(['……','코아… 내 예쁜 코아…'])},
 koaB:{name:'코아',zone:'boat',x:7,y:3,dir:'down',still:1,look:ovarHead('koa'),hide:()=>!!f().massacre,
  talk:()=>f().found?says6(['공장까지 금방이에요! 꽉 잡아요, 친구들!']):says6(['배 옆에 매달려서 가는 것도 재미있어요!','딜런은 지금 해먹에서 자요.'])},
 kaizenB:{name:'카이젠',zone:'boat',x:13,y:3,dir:'down',still:1,look:ovarHead('kaizen'),hide:()=>!!f().massacre,
  talk:()=>says6(['저는 카이젠이에요. 코아보다 조금 조용해요.','깊은 곳은 처음이에요. 조금 무서워요.'])},
 /* 공장 */
 bensath:{name:'벤사스',zone:'factory',x:4,y:8,dir:'right',look:{hair:'#3A3A3A',skin:'#A8785A',shirt:'#4A5560',pants:'#2E3540',cap:'#4A5560'},
  talk:()=>says6(['벤사스예요. 터널 입구는 제가 지켜요.','삼 킬로미터짜리 구멍이에요. 이런 건 처음 봐요.'])},
 elsbeth:{name:'엘스베스',zone:'factory',x:14,y:3,dir:'left',look:{hair:'#B5652F',skin:'#E8B892',shirt:'#2E3B5A',pants:'#263049',style:'bun',belt:'#C9A64A'},badge:['공장'],
  after:'기보이가 저한테 탱크 하나 빚졌어요. 그래서 왔어요.',
  talk:()=>[
   {say:'세상에. 이게 다 하나의 건물이에요? 삼백 킬로미터요?'},
   {say:'벽에 다시마 같은 게 가득해요. {에어콤부|에어콤부}래요.'},
   Q.elsbeth[0],
   {say:'여기는 {아르키메데스 엔진|아르키메데스 엔진}을 만드는 공장이에요.'},
   {who:'핀',say:'벽에 움푹한 곳이 있어요. 손바닥을 대 볼게요.'},
   {who:'핀',say:'코끼리 떼 한가운데 있는 것 같아요… 아주 큰 생각들이에요.'},
   {who:'핀',say:'…알았어요! {운영 체제|운영 체제}가 어디 있는지 알아요!'},
   {say:'운영 체제요? 그걸 가지러 왔어요? 몰랐어요.'},
   Q.elsbeth[1],
   {say:'큰 홀로 가요. 기보이가 기다려요.',award:['공장'],set:()=>{f().indent=1}}]},
 gyF:{name:'기보이',zone:'factory',x:22,y:9,dir:'left',look:GYVOY,badge:['명령하다'],
  status:()=>{if(!has6('명령하다'))return f().indent?'todo':'wait'},
  after:'명령은 제가 해요. 그게 제 일이에요.',
  script:()=>!f().indent?says6(['핀은 어디 있어요? 시간이 없어요.']):null,
  talk:()=>[
   {say:'핀! 운영 체제가 어디 있어요?'},
   {who:'핀',say:'저 안쪽 방에 {접촉 장치|접촉 장치}가 있어요. 그런데 {고스트|고스트}들이…'},
   {say:'고스트는 우리가 막아요. 당신 일은 운영 체제예요.'},
   {say:'가요! 이건 명령이에요!'},
   Q.gyvoy[0],
   Q.gyvoy[1],
   {who:'엘리',say:'가요, 핀. 우리가 막을게요.',award:['명령하다'],set:()=>{f().cmd=1}}]},
 finnBulb:{name:'핀',zone:'factory',x:27,y:2,dir:'up',look:FINN,hide:()=>!(f().cmd&&!f().os),
  status:()=>'todo',
  talk:()=>[
   {say:'크림색 혹 위의 버섯 모양 전구예요. 손을 댈게요.'},
   {say:'…생각의 바다에 떠 있는 것 같아요. 금색 실이 보여요.'},
   {who:'엘리',say:'고스트가 또 와요! 고물로 만든 고스트들이에요!'},
   {who:'기보이',say:'계속 쏴요! 핀은 건드리지 마요!'},
   {who:'엘리',say:'아… 배를 맞았어요. 피가 나요. 그래도 싸울 수 있어요.'},
   {who:'…',say:'두 시간 반이 지났어요. 고스트 잔해가 쌓였어요.'},
   {say:'다 알았어요! 엔진이 어떻게 일하는지, 다 머릿속에 있어요.'},
   {who:'기보이',say:'좋아요! 코아한테 타요! 빨리!'},
   {who:'…',say:'코아가 조립 홀을 따라 날아요. 철골이 우리를 가둬요.'},
   {who:'기보이',say:'{슬로봄|슬로봄} 쏴요!'},
   {who:'…',say:'쾅— 철골 사이에 큰 구멍이 뚫렸어요.',set:()=>{f().os=1}},
   {who:'엘리',say:'코아가 우리를 아래 터널에 내려 줬어요. 데이브가 뭘 봤대요.'}]},
 dave1:{name:'데이브',zone:'factory',x:6,y:16,dir:'right',still:1,look:DAVE('#C77A86'),badge:['빛나다','거미'],
  status:()=>{if(!has6('빛나다'))return f().os?'todo':'wait'},
  after:'…거미. 싫어요.',
  script:()=>!f().os?says6(['우리가 지켜요.']):null,
  talk:()=>[
   {say:'문제.'},
   {say:'고스트 아니에요. 저기. 까만 연기처럼 움직여요.'},
   {say:'{나이트위드|나이트위드}예요. 수천 마리.'},
   {say:'손에 칼. 보라색.'},
   Q.dave[0],
   {say:'우리 피부도 빛나요. 총알을 맞으면요.'},
   {say:'그리고 저기. 거미줄. {그로즐라미아|그로즐라미아}. 큰 거미.'},
   Q.dave[1],
   {say:'코아하고 카이젠이 걸렸어요.',award:['빛나다','거미'],set:()=>{f().web=1}}]},
 dave2:{name:'데이브',zone:'factory',x:4,y:17,dir:'right',still:1,look:DAVE('#B86A7A'),
  talk:()=>says6(f().ambush?['머리. 뜯었어요.','…끝.']:['저도 데이브예요.','…네.'])},
 koaF:{name:'코아',zone:'factory',x:10,y:16,dir:'down',still:1,get look(){return f().ambush?DEAD_HEAD:(HEAD.koa||(HEAD.koa=ovarHead('koa')))},
  status:()=>f().web&&!f().ambush?'todo':null,
  script:()=>{
   if(f().ambush)return [{who:'…',say:'코아는 움직이지 않아요. 독니 자국이 깊어요.'}];
   if(!f().web)return says6(['잠깐 쉬어요, 친구들. 출구까지 금방이에요!']);
   return [
    {say:'친구들! 도와줘요! 몸이 안 움직여요!'},
    {say:'거미줄이 끈적끈적해요. 카이젠도 걸렸어요!'},
    {who:'데이브',say:'그로즐라미아. 일곱 마리.'},
    {who:'핀',say:'등에 사람이 타고 있어요! 머리 뒤를 쏴요!'},
    {who:'…',say:'갑옷 입은 이카리안 해적들이 숨어서 기다리고 있었어요.'},
    {...Q.koa[0],who:'…'},
    {who:'…',say:'핀이 거미 등에 내려서 칼로 갑옷을 잘랐어요.'},
    {who:'…',say:'노란 피가 분수처럼 솟았어요. 그래도 거미는 코아한테 갔어요.'},
    {who:'…',say:'{독니|독니} 네 개가 코아 몸에 깊이 들어갔어요. 코아가 죽었어요.'},
    {who:'…',say:'다른 거미가 카이젠도 죽였어요.'},
    {who:'핀',say:'안 돼!!'},
    {who:'…',say:'데이브들이 거미 하나의 머리를 뜯어냈어요.'},
    {who:'…',say:'마지막 거미는 기보이가 긴 칼로 찔렀어요. 해적들도 다 죽었어요.',set:()=>{f().ambush=1}}]},
  talk:()=>[]},
 kaizenF:{name:'카이젠',zone:'factory',x:18,y:16,dir:'down',still:1,get look(){return f().ambush?DEAD_HEAD:(HEAD.kaizen||(HEAD.kaizen=ovarHead('kaizen')))},
  talk:()=>f().ambush?[{who:'…',say:'카이젠은 움직이지 않아요.'}]:says6(['무서워요… 저 어둠 속에 뭐가 있어요.'])},
 dylanF:{name:'딜런',zone:'factory',x:12,y:17,dir:'left',look:DYLAN,hide:()=>!!f().dylanOut,
  talk:()=>f().ambush?says6(['……코아……']):says6(['코아가 무서워해요. 빨리 가요.'])},
 ellieF:{name:'엘리',zone:'factory',x:14,y:17,dir:'left',look:ELLIE,badge:['찔리다','기절하다'],
  status:()=>{if(!has6('찔리다'))return f().ambush?'todo':null},
  after:'…저도 그렇게 하고 싶지 않았어요.',
  script:()=>{if(f().ambush)return null;return says6(f().os?['배가 아파요. 그래도 괜찮아요. 붕대를 감았어요.']:['우리가 고스트를 막을게요. 핀은 일해요.'])},
  talk:()=>[
   {who:'딜런',say:'코아가 죽었어요… 내 예쁜 코아가…'},
   {say:'딜런, 가야 돼요. 여기 있으면 위험해요.'},
   Q.ellie[0],
   {who:'딜런',say:'싫어요! 저는 코아 옆에 있을 거예요!'},
   {who:'…',say:'엘리가 딜런한테 {너브잼|너브잼}을 쐈어요. 딜런이 쓰러졌어요.'},
   Q.ellie[1],
   Q.ellie[2],
   {say:'데려가요. 배까지 끌고 갈 수 있어요.',award:['찔리다','기절하다'],set:()=>{f().dylanOut=1}}]},
 nweid:{name:'나이트위드',zone:'factory',x:21,y:16,dir:'left',still:1,look:NWEID,badge:['복종하다'],hide:()=>!f().dylanOut,
  after:'나이트위드가 조용히 떠 있어요. 이제 아무 명령도 없어요.',
  talk:()=>[
   {who:'…',say:'까만 연기가 몰려와요. 나이트위드 떼예요.'},
   {who:'…',say:'회색 피부, 가죽 날개, 둥근 입에 송곳니.'},
   {who:'핀',say:'손바닥에 패드가 있어요. 저건… 연결할 수 있어요.'},
   {who:'핀',say:'손바닥을 잡았어요. 명령을 넣어요.'},
   {who:'핀',say:'"저 해적 배가 목표야. 우리는 건드리지 마."'},
   {who:'핀',say:'"다른 나이트위드한테 알려. 복종해."'},
   {who:'…',say:'명령이 다른 나이트위드한테 퍼져요. 병처럼요.'},
   {...Q.nweid[0],who:'…'},
   {who:'핀',w:'복종하다',build:['핀이','나이트위드를','복종하게','했어요']},
   {who:'…',say:'수천 마리가 해적 배 세 척을 쫓아가요.'},
   {who:'엘스베스',say:'이건 {학살|학살}이에요.'},
   {who:'핀',say:'네. 그렇게 될 거예요.'},
   {who:'…',say:'해적 배에서 불빛이 터졌어요. 나이트위드는 멈추지 않아요.'},
   {who:'…',say:'해적 배 세 척이 다 부서졌어요. 남은 건 나무 조각뿐이에요.',award:['복종하다'],set:()=>{f().massacre=1}},
   {who:'엘스베스',say:'…돌아가요. 실버 클라우드스피어로.'}]},
};
function says6(a){return a.map(t=>({say:t}))}

const FOLLOW={name:'핀',look:FINN,when:()=>!!f().finnOk&&!(f().cmd&&!f().os),talk:()=>[{say:
 f().argue?(ZID==='ship'?'엘리하고 이야기해야 돼요. 제가 바보였어요.':'……괜찮아요. 제가 잘못했어요.'):
 f().massacre?'…제가 그렇게 하게 했어요. 알아요.':
 f().os?'머릿속에 엔진이 가득해요. 이상한 느낌이에요.':
 ZID==='factory'?'여기 어딘가에 운영 체제가 있어요.':
 ZID==='boat'?'바람이 좋아요. 이제 좀 덜 어지러워요.':
 ZID==='nassau'?'오크리프는 커다란 반지 같아요. 나무가 천천히 돌아요.':
 '아래는 안 볼 거예요. 절대로.'}]};

const INTRO=[{who:'성실호',say:'삐— 킹스네스트 도착. 거리 이십 킬로미터.'},{who:'성실호',say:'흰 별 두 개 사이에 투명한 공이 떠 있어요.'},{who:'성실호',say:'원정대는 지휘 통제실로 모이세요.'}];
const DONE=['6장 끝! 핀의 머릿속에 엔진 운영 체제가 있어요.','그런데 곤디아에서는 31년 8개월이 지났어요.','다음 장, 돌로드. 오틸리아는 왜 관문 옆에 있을까요?','일지에서 단어를 다시 볼 수 있어요.'];

function questText(){
 const F=f(),b=has6;
 if(F.done)return '6장 끝 · 일지에서 복습해요';
 if(!F.briefed)return '성실호 · 우에미주발리하고 이야기해요';
 if(!F.gotBox)return '마이탈포트 · 기보이를 찾아요';
 if(!F.finnOk)return '마이탈포트 · 얼굴이 하얀 핀';
 if(!F.ride)return '마이탈포트 · 조종사 딜런한테 가요';
 if(!F.ettanOut)return '나소 · 에탄 선장 이야기를 들어요';
 if(!F.hired)return '나소 · 제이즌 선장하고 흥정해요';
 if(!F.ayden)return '실버 클라우드스피어 · 기술자를 만나요';
 if(!F.found)return hasItem('케스카 구이')?'실버 클라우드스피어 · 구이 → 우에미주발리':'실버 클라우드스피어 · 라일리를 도와요';
 if(!F.indent)return '공장 · 초록 불빛 방의 엘스베스';
 if(!F.cmd)return '공장 · 조립 홀의 기보이';
 if(!F.os)return '공장 · 접촉 장치 앞의 핀';
 if(!F.web)return '공장 · 아래 터널의 데이브';
 if(!F.ambush)return '공장 아래 터널 · 코아를 도와요';
 if(!F.dylanOut)return '공장 아래 터널 · 엘리하고 딜런';
 if(!F.massacre)return '공장 아래 터널 · 나이트위드 떼';
 if(!b('슬퍼하다'))return '실버 클라우드스피어 · 제이즌 선장';
 if(!F.argue)return '실버 클라우드스피어 · 엘리하고 핀';
 if(!F.makeup)return '성실호 · 엘리한테 가요';
 return '성실호 · 화면 속 사람';
}
return {WORDS,DICT,CONFUSE,BANK,Q,ITEMS,ZONES,NPC,FOLLOW,INTRO,DONE,questText,TILES};
}});
