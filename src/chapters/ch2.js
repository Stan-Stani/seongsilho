CHAPTERS.push({id:'ch2',n:'2장',title:'잔해',place:'레스타리 · 버블타운 · 브레이커빌',words:16,save:'seongsilho-ch2',color:'#5A8FB0',start:{zone:'lestari',x:3,y:5,dir:'up'},introWho:'레스타리',
 make:()=>{
/* =====================================================================
   2장 · 잔해 — content.
   Book pin: c013–c014 (interlude c011 as a frame dream).
   True now: Finn owns the Diligent, which stays docked at High Rosa. Finn and Ellie (lovers) fly on the Enfoe ship Lestari
   (captain Uzoma) to the Aktoru wreck at Terrik Papuan for its ZPZ generator; Gyvoy arranged the deal and stayed on Gondiar.
   Toše was hired by Gyvoy and secretly works for a "boss". Marcellu (for Sahdiah) attacks on the Arcadia's Moon (captain Andino)
   and later sends 18 Ghosts. Ichika and a Flexal guard die in the attack; Toše murders Tabia and blames a grenade —
   only Toše and the reader know. The Daves join as guards. ~3 months ship time = ~8 years on Gondiar.
   Lore source: notes/canon.md. Audit against the full book before publishing (see CLAUDE.md).
   ===================================================================== */
const WORDS=['잔해','인양하다','위성','얼음','소금','파다','굴','계약','경호원','가속','추격하다','공격하다','죽이다','시체','범인','거짓말하다'];
const DICT={
 '잔해':{k:'부서지고 남은 조각들. 큰 사고 뒤에 남아요.',e:'wreck, wreckage',ex:'바다에서 우주선 잔해를 찾았어요.',hj:'殘骸 · 殘 = 남다 · 잔돈의 잔'},
 '인양하다':{k:'물속이나 우주에서 큰 것을 끌어 올려요.',e:'to salvage, to raise (a wreck)',ex:'잔해를 바다에서 인양했어요.',hj:'引揚 · 引 = 끌다 · 揚 = 올리다'},
 '위성':{k:'행성 주위를 도는 작은 별. 달처럼요.',e:'moon, satellite',ex:'파이브는 테릭 파푸안의 위성이에요.',hj:'衛星 · 星 = 행성의 성'},
 '얼음':{k:'물이 아주 차가워져서 딱딱해진 것.',e:'ice',ex:'그 행성은 땅이 거의 다 얼음이에요.',hj:'고유어 · 얼다 → 얼음'},
 '소금':{k:'바닷물 안에 있는 하얗고 짠 것.',e:'salt',ex:'기계에 소금이 하얗게 붙었어요.',hj:'고유어 · 짜다 ↔ 싱겁다'},
 '파다':{k:'땅이나 돌에 구멍을 만들어요. 파요 · 파서 · 팔 수 있어요.',e:'to dig',ex:'플렉살이 돌을 파요.',hj:'고유어 · 파다 ≠ 팔다 (팔아요)'},
 '굴':{k:'땅속이나 벽 속의 길고 좁은 구멍 길. (먹는 굴은 바다 조개예요.)',e:'tunnel, burrow (also: oyster)',ex:'잔해 안에 굴이 아주 많아요.',hj:'고유어 · 굴을 파다'},
 '계약':{k:'일, 돈, 날짜를 정하고 사인하는 약속.',e:'contract',ex:'타비아가 플렉살 팀하고 계약했어요.',hj:'契約 · 約 = 약속의 약'},
 '경호원':{k:'돈을 받고 사람이나 물건을 가까이에서 지키는 사람.',e:'bodyguard, guard',ex:'데이브들은 잔해의 경호원이에요.',hj:'警護員 · 護 = 지키다 · 員 = 회원의 원'},
 '가속':{k:'속도가 점점 더 빨라지는 것. 가속하다.',e:'acceleration',ex:'엔진을 더 가속해야 돼요.',hj:'加速 · 加 = 더하다 · 速 = 빠르다'},
 '추격하다':{k:'뒤에서 계속 쫓아가요.',e:'to chase, to pursue',ex:'적의 배가 레스타리를 추격해요.',hj:'追擊 · 擊 = 공격의 격'},
 '공격하다':{k:'먼저 싸움을 걸고 쏘거나 때려요. 반대는 방어.',e:'to attack',ex:'고스트들이 부두를 공격했어요.',hj:'攻擊 · 擊 = 추격의 격'},
 '죽이다':{k:'다른 사람이나 동물을 죽게 해요. 죽다 ≠ 죽이다.',e:'to kill',ex:'고스트가 이치카를 죽였어요.',hj:'고유어 · 죽다 + -이- = 죽게 하다'},
 '시체':{k:'죽은 사람이나 동물의 몸.',e:'corpse, dead body',ex:'경찰이 강에서 시체를 발견했어요.',hj:'屍體 · 體 = 몸 · 체육의 체'},
 '범인':{k:'나쁜 일, 범죄를 한 사람.',e:'culprit, criminal',ex:'그르시아는 범인을 찾고 싶어요.',hj:'犯人 · 人 = 사람 · 외국인의 인'},
 '거짓말하다':{k:'사실이 아닌 말을 해요.',e:'to lie',ex:'아이가 엄마한테 거짓말했어요.',hj:'고유어 · 거짓 + 말 · 반대: 참말'},
 /* glosses for words that appear in lines but are not badges */
 '관문':{k:'하늘의 관문. 엘로힘이 만든 아주 큰 문. 배가 빛처럼 빠르게 지나가요.',e:'Gate (of Heaven)'},
 '통행의 선물':{k:'관문 앞에서 모두 피 한 방울을 병에 넣어 관문에 보내는 의식.',e:'Gift of Passage'},
 '프레임':{k:'관문을 지날 때 배가 멈춘 시간 속에 들어가는 것.',e:'being "framed" (stasis during a Gate jump)'},
 '프레임 꿈':{k:'프레임 안에서 가끔 꾸는 이상한 꿈.',e:'frame dream'},
 '우라닉':{k:'생각으로 리브스톤을 만들고 셀레스철 기계하고 이야기하는 사람.',e:'uranic'},
 '감정사':{k:'옛날 물건을 보고 얼마인지 알려 주는 사람.',e:'appraiser'},
 '부선장':{k:'선장 다음으로 높은 사람.',e:'first officer'},
 '경비':{k:'건물이나 장소를 지키는 일, 또는 그 사람.',e:'security (guard)'},
 '조류':{k:'물에서 사는 아주 작은 초록 식물. 여기서는 바다를 덮었어요.',e:'algae'},
 '진눈깨비':{k:'비하고 눈이 같이 오는 것.',e:'sleet'},
 '대기권':{k:'행성을 덮은 공기층.',e:'atmosphere'},
 '플렉살':{k:'몸이 고무처럼 늘어나는 인간 종족. 광부로 만들어졌어요.',e:'Flexal (Changeling miners)'},
 '실리케이트':{k:'수정 같은 피부를 입은 인간. 충격을 먹고 빛나요.',e:'Silicate'},
 '고스트':{k:'머리가 없는 셀레스철 전투 기계.',e:'Ghost (Celestial combat machine)'},
 '수류탄':{k:'던지면 터지는 작은 폭탄.',e:'grenade'},
 '네트워크 노드':{k:'잔해 안의 옛날 기계 두뇌. 여기서 다른 기계를 움직일 수 있어요.',e:'network node'},
 '전자빔 절단기':{k:'크레인 레일에 달린, 금속을 자르는 강한 빛 기계.',e:'electron-beam cutter'},
 '컨클루더':{k:'렘넌트 시대의 아주 강한 저격총.',e:'concluder (Remnant sniper rifle)'},
 '렘넌트':{k:'아주 옛날, 큰 전쟁이 계속되던 시대.',e:'Remnant (era)'},
 'ZPZ 발생기':{k:'관문을 지나게 해 주는 아주 귀한 엘로힘 기계.',e:'ZPZ generator'},
 '피투성이':{k:'몸이 피로 가득해요.',e:'covered in blood'},
 '복수하다':{k:'나한테 나쁜 일을 한 사람한테 똑같이 갚아요.',e:'to take revenge'},
 '장부':{k:'돈과 일을 적어 둔 책.',e:'ledger'},
 '싱겁다':{k:'음식에 소금이 적어서 맛이 약해요.',e:'bland (not salty enough)'},
 '도시락':{k:'상자에 넣어서 가지고 다니는 밥.',e:'packed lunch'},
};
/* sounds-alike / looks-alike words, used when a listening question is built */
const CONFUSE={'잔해':['잔치','장애'],'인양하다':['인사하다','이용하다'],'위성':['위험','위생'],'얼음':['얼굴','어른'],'소금':['소문','조금'],'파다':['팔다','타다'],'굴':['귤','공'],'계약':['계획','경기'],'경호원':['경찰관','공원'],'가속':['가족','감속'],'추격하다':['추천하다','출발하다'],'공격하다':['공부하다','방어하다'],'죽이다':['줄이다','주다'],'시체':['시계','신체'],'범인':['번호','버스'],'거짓말하다':['거절하다','기억하다']};

/* extra review questions (the terminal uses these too, alongside every NPC question) */
const BANK=[
 {w:'잔해',ask:'비행기 사고 뒤에 바다에서 ___를 찾았어요.',opts:[['잔해',1],['잔치',0,'잔치는 파티예요! 부서지고 남은 조각은 "잔해".']]},
 {w:'인양하다',ask:'바다 밑에 있던 배를 위로 ___했어요.',opts:[['인양',1],['인사',0,'인사는 "안녕하세요"예요. 끌어 올리는 건 "인양".']]},
 {w:'인양하다',ask:'내일까지 잔해를 꼭 ___ 돼요.',opts:[['인양해야',1],['인양할 수',0,'"돼요" 앞에는 "-아/어야"가 와요 → "인양해야 돼요".']]},
 {w:'위성',ask:'달은 지구의 ___이에요.',opts:[['위성',1],['행성',0,'지구가 행성이에요. 지구를 도는 달은 "위성".']]},
 {w:'얼음',ask:'물이 아주 차가워지면 ___이 돼요.',opts:[['얼음',1],['소금',0,'소금은 바닷물에서 와요. 언 물은 "얼음".']]},
 {w:'소금',ask:'수프가 {싱거워요|싱겁다}. ___을 조금 넣어요.',opts:[['소금',1],['얼음',0,'얼음은 수프를 차갑게 해요. 짠맛은 "소금".']]},
 {w:'파다',ask:'발생기를 꺼내려면 돌을 더 ___ 돼요.',opts:[['파야',1],['파서',0,'"돼요" 앞에는 "-아야"가 와요 → "파야 돼요".']]},
 {w:'굴',ask:'토끼가 땅속에 ___을 팠어요.',opts:[['굴',1],['귤',0,'귤은 먹는 과일이에요! 땅속 길은 "굴".']]},
 {w:'계약',ask:'이 ___은 1년이에요. 그 다음에 다시 사인해요.',opts:[['계약',1],['경기',0,'경기는 시합이에요. 사인하는 약속은 "계약".']]},
 {w:'경호원',ask:'대통령 옆에는 늘 ___이 있어요.',opts:[['경호원',1],['관중',0,'관중은 경기를 보는 사람이에요. 가까이에서 지키는 사람은 "경호원".']]},
 {w:'가속',ask:'로켓이 ___해서 아주 빨라졌어요.',opts:[['가속',1],['가족',0,'가족은 엄마, 아빠, 동생이에요! 빨라지는 건 "가속".']]},
 {w:'추격하다',ask:'경찰차가 도둑의 차를 ___해요.',opts:[['추격',1],['출발',0,'출발은 떠나는 거예요. 뒤에서 계속 쫓아가면 "추격".']]},
 {w:'공격하다',ask:'고스트가 부두를 ___할 수 있어요. 조심해요.',opts:[['공격',1],['방어',0,'방어는 막는 거예요. 먼저 쏘는 건 "공격".']]},
 {w:'죽이다',ask:'이 독은 사람을 ___ 수 있어요.',opts:[['죽일',1],['죽을',0,'"죽을 수 있어요"는 내가 죽는 거예요. 다른 사람을 → "죽일 수 있어요".']]},
 {w:'시체',ask:'경찰이 강에서 ___를 발견했어요.',opts:[['시체',1],['시계',0,'시계는 시간을 봐요. 죽은 사람의 몸은 "시체".']]},
 {w:'범인',ask:'형사가 드디어 ___을 잡았어요.',opts:[['범인',1],['선수',0,'선수는 경기하는 사람이에요. 나쁜 일을 한 사람은 "범인".']]},
 {w:'거짓말하다',ask:'피노키오는 ___하면 코가 길어져요.',opts:[['거짓말',1],['기도',0,'기도는 신한테 하는 말이에요. 코가 길어지는 건 "거짓말".']]},
];

const Q={ // NPC questions, kept here so review can reuse them
 basyl:[
  {w:'거짓말하다',ask:'사람은 가끔 ___. 그런데 피는 안 해요.',opts:[['거짓말해요',1],['기도해요',0,'기도는 신한테 하는 말이에요. 사실이 아닌 말 → "거짓말해요".'],['설명해요',0,'설명은 잘 알려 주는 거예요. 사실이 아닌 말 → "거짓말해요".']]},
  {w:'거짓말하다',ask:'"이건 물이에요." 술 냄새가 나요. 목사님이 ___ 있어요.',opts:[['거짓말하고',1],['기억하고',0,'기억은 머리에 남기는 거예요. 물이 아닌데 물이라고 해요 → "거짓말하고 있어요".']]},
 ],
 ellie:[
  {w:'추격하다',ask:'저 배가 계속 우리 뒤에 와요. 우리를 ___ 있어요.',opts:[['추격하고',1],['출발하고',0,'출발은 떠나는 거예요. 계속 뒤에서 쫓아와요 → "추격하고 있어요".'],['도착하고',0,'도착은 오는 거예요. 계속 쫓아와요 → "추격하고 있어요".']]},
  {w:'공격하다',ask:'미사일 아홉 개! 저 배가 우리를 ___!',opts:[['공격해요',1],['방어해요',0,'방어는 막는 거예요. 미사일을 쏘는 건 "공격해요".'],['구경해요',0,'구경은 그냥 보는 거예요! 미사일을 쏘면 "공격해요".']]},
 ],
 finn:[
  {w:'가속',ask:'엔진을 세게 해서 더 빨라져요. 그걸 ___이라고 해요.',opts:[['가속',1],['가족',0,'소리가 비슷해요! 가족은 엄마, 아빠예요. 빨라지는 건 "가속".'],['감속',0,'감속은 느려지는 거예요. 빨라지면 "가속".']]},
  {w:'공격하다',ask:'이 빛으로 미사일을 ___ 수 있어요!',opts:[['공격할',1],['공격해',0,'"수 있어요" 앞에는 "-ㄹ"이 와요 → "공격할 수 있어요".']]},
 ],
 yoru:[
  {w:'잔해',ask:'부서진 배의 남은 조각들. 그걸 ___라고 해요.',opts:[['잔해',1],['잔치',0,'잔치는 파티예요! 부서진 배는 "잔해".'],['부품',0,'부품은 기계에 넣는 작은 조각이에요. 부서지고 남은 큰 것 → "잔해".']]},
  {w:'인양하다',ask:'버블이 있어야 잔해를 ___ 수 있어요.',opts:[['인양할',1],['인양해',0,'"수 있어요" 앞에는 "-ㄹ"이 와요 → "인양할 수 있어요".']]},
  {w:'인양하다',ask:'바다나 우주에서 큰 잔해를 끌어 올려요. 그걸 ___해요.',opts:[['인양',1],['인사',0,'인사는 "안녕하세요"예요. 끌어 올리는 건 "인양".'],['반납',0,'반납은 빌린 걸 돌려줄 때예요. 끌어 올리는 건 "인양".']]},
 ],
 miteris:[
  {w:'위성',ask:'파이브는 행성 주위를 도는 작은 달이에요. ___이에요.',opts:[['위성',1],['행성',0,'행성은 별 주위를 돌아요. 행성 주위를 도는 달은 "위성".'],['위험',0,'소리가 조금 비슷해요! 위험은 다칠 수 있는 거예요. 달은 "위성".']]},
  {w:'얼음',ask:'저 행성은 아주 추워요. 행성의 3분의 2가 ___이에요.',opts:[['얼음',1],['얼굴',0,'얼굴은 눈, 코, 입이 있는 곳이에요! 언 물은 "얼음".'],['소금',0,'소금도 하얗지만 짜요. 추워서 언 물은 "얼음".']]},
 ],
 tabia:[
  {w:'계약',ask:'돈, 일, 날짜를 정하고 둘이 사인해요. 그게 ___이에요.',opts:[['계약',1],['경기',0,'경기는 시합이에요. 사인하는 약속은 "계약".'],['규칙',0,'규칙은 모두 지키는 법이에요. 둘이 사인하는 약속은 "계약".']]},
  {w:'계약',ask:'일을 시작하기 전에 꼭 계약서에 사인___.',opts:[['해야 돼요',1],['해서 돼요',0,'"돼요" 앞에는 "-아/어야"가 와요 → "해야 돼요".']]},
 ],
 davrux:[
  {w:'파다',ask:'삽으로 땅을 ___.',opts:[['파요',1],['팔아요',0,'팔다는 돈을 받고 주는 거예요! 땅에 구멍을 만들면 "파요".'],['타요',0,'타다는 차나 배에 올라가는 거예요. 구멍을 만들면 "파요".']]},
  {w:'굴',ask:'벽 속에 길고 좁은 구멍 길이 있어요. 그게 ___이에요.',opts:[['굴',1],['굴뚝',0,'굴뚝은 연기가 나가는 곳이에요. 구멍 길은 "굴".'],['귤',0,'귤은 먹는 과일이에요! 구멍 길은 "굴".']]},
 ],
 guard:[
  {w:'소금',ask:'바닷물은 짜요. 물 안에 ___이 많아요.',opts:[['소금',1],['설탕',0,'설탕은 달아요. 짠 건 "소금".'],['얼음',0,'얼음은 차가워요. 짠 건 "소금".']]},
  {w:'소금',ask:'기계에 하얀 ___이 붙었어요. 바닷바람 때문이에요.',opts:[['소금',1],['소문',0,'소문은 사람들이 하는 이야기예요. 하얗고 짠 것은 "소금".']]},
 ],
 dave:[
  {w:'경호원',ask:'중요한 사람이나 물건을 가까이에서 지켜요. ___.',opts:[['경호원',1],['관중',0,'관중은 경기를 보는 사람이에요. 지키는 사람은 "경호원".'],['심판',0,'심판은 시합에서 결정하는 사람이에요. 지키는 사람은 "경호원".']]},
  {w:'경호원',ask:'우리는 고스트하고 싸울 수 있어요. 우리를 ___으로 써요.',opts:[['경호원',1],['범인',0,'범인은 나쁜 일을 한 사람이에요! 지키는 사람은 "경호원".']]},
 ],
 tose:[
  {w:'거짓말하다',ask:'타비아는 수류탄 때문에 죽지 않았어요. 토셰는 지금 ___ 있어요.',opts:[['거짓말하고',1],['설명하고',0,'설명처럼 들려요. 그런데 사실이 아니에요 → "거짓말하고 있어요".'],['기억하고',0,'토셰는 다 기억해요. 사실이 아닌 말은 "거짓말하고 있어요".']]},
 ],
 grssia:[
  {w:'죽이다',ask:'고스트가 이치카를 ___.',opts:[['죽였어요',1],['죽었어요',0,'죽다는 자기가 죽는 거예요. 고스트가 한 일 → "죽였어요".'],['지켰어요',0,'지켰으면 이치카가 살았어요… 고스트가 이치카를 "죽였어요".']]},
  {w:'범인',ask:'나쁜 일을 한 사람. 그 사람을 ___이라고 해요.',opts:[['범인',1],['선수',0,'선수는 경기하는 사람이에요. 나쁜 일을 한 사람은 "범인".'],['상대',0,'상대는 시합에서 같이 싸우는 사람이에요. 나쁜 일을 한 사람은 "범인".']]},
 ],
 basylB:[
  {w:'시체',ask:'죽은 사람의 몸을 ___라고 해요.',opts:[['시체',1],['시계',0,'시계는 시간을 봐요. 죽은 사람의 몸은 "시체".'],['상태',0,'상태는 건강이나 기분이에요. 죽은 몸은 "시체".']]},
  {w:'시체',ask:'타비아의 헬멧을 여기 두면 안 돼요. 레스타리로 ___ 돼요.',opts:[['보내야',1],['보내서',0,'"돼요" 앞에는 "-아/어야"가 와요 → "보내야 돼요".']]},
 ],
 cafe:[ // 1장 words, no badges
  {ask:'우주비행기가 브레이커빌에 ___. 방금 왔어요.',opts:[['도착했어요',1],['출발했어요',0,'출발은 떠나는 거예요. 방금 왔어요 → "도착했어요".']]},
  {ask:'파이브는 테릭 파푸안 주위의 ___를 돌아요.',opts:[['궤도',1],['기도',0,'기도는 신한테 하는 말이에요. 도는 길은 "궤도".']]},
  {ask:'크레인이 ___ 났어요. 안 움직여요.',opts:[['고장',1],['고생',0,'고생은 힘든 일을 겪는 거예요. 기계가 안 움직여요 → "고장 났어요".']]},
  {ask:'헬멧 안에 ___가 30분 남았어요. 숨 쉬는 공기요.',opts:[['산소',1],['연료',0,'연료는 엔진이 먹어요. 사람이 숨 쉬는 건 "산소".']]},
  {ask:'조류 바다에 들어가면 ___해요!',opts:[['위험',1],['탐험',0,'탐험은 새로운 곳에 가 보는 거예요. 빠지면 죽어요 → "위험해요".']]},
  {ask:'이 크레인은 내일까지 ___해야 돼요.',opts:[['수리',1],['회복',0,'회복은 사람이 다시 건강해지는 거예요. 기계는 "수리".']]},
  {ask:'겨울 전에 ___을 많이 모아야 돼요. 여기는 음식이 비싸요.',opts:[['식량',1],['연체료',0,'연체료는 책을 늦게 반납할 때 내는 돈이에요! 오래 먹을 음식은 "식량".']]},
  {ask:'플렉살이 잔해 안에서 새 방을 ___했어요.',opts:[['발견',1],['출발',0,'출발은 떠나는 거예요. 처음 찾았어요 → "발견했어요".']]},
  {ask:'우주비행기 ___님이 날씨를 봐요.',opts:[['조종사',1],['선생',0,'선생님은 학교에 있어요. 비행기를 모는 사람은 "조종사".']]},
 ],
};

const ITEMS={'피의 병':'모두의 피 한 방울을 가루로 만들어 넣은 작은 유리병.','도시락':'오키미살이 만든 도시락. 아직 따뜻해요.','계약서':'플렉살 팀 인양 계약서. 숫자를 보니 좀 비싸요.','은행 기록':'곤잘레스 은행 장부의 한 쪽. 데이브와 데이브의 일 기록.','잔해 지도':'플렉살 팀이 만든 잔해 안 굴 지도.'};

const f=()=>state.f;
const hasItem=i=>state.items.includes(i);
const b=w=>state.badges.includes(w);

/* ---------- drawing helpers for this chapter's tiles ---------- */
const OL='#1B1E2B';
const org=(x,y)=>{const c=at(x,y);let ox=x,oy=y;while(at(ox-1,y)===c)ox--;while(at(x,oy-1)===c)oy--;return [ox,oy]};
const clip=(X,Y,fn)=>{g.save();g.beginPath();g.rect(X,Y,16,16);g.clip();fn();g.restore()};
const big=(X,Y,x,y,ox,oy,fn)=>clip(X,Y,()=>fn(X-(x-ox)*16,Y-(y-oy)*16,X,Y));
/* pixel disc (crisp edges); only rows inside [y0,y1] are drawn */
const disc=(cx,cy,rd,c,y0,y1)=>{for(let dy=-rd;dy<=rd;dy++){const yy=cy+dy;if(y0!=null&&(yy<y0||yy>y1))continue;const w=Math.floor(Math.sqrt(rd*rd-dy*dy)+.35);r(cx-w,yy,2*w+1,1,c)}};
const night=()=>ZID==='breakerville'&&!!f().mapped&&f().attack!==2;
/* zone lighting: red alarm on the Lestari, night + sleet + plasma at Breakerville, flashes in the wreck */
function fx(X,Y,x,y,t,lit){
 const F=f();
 if(ZID==='lestari'){if(F.ambush&&!F.beam)r(X,Y,16,16,`rgba(205,30,40,${(.17+.1*Math.sin(t/220)).toFixed(3)})`);return}
 if(ZID==='breakerville'){
  if(night()){const L=lightNear(x,y);if(L){const cx=X+(L[0]-x)*16+8,cy=Y+(L[1]-y)*16+4,gr=g.createRadialGradient(cx,cy,3,cx,cy,46);gr.addColorStop(0,'rgba(60,50,30,.02)');gr.addColorStop(.55,'rgba(20,24,40,.3)');gr.addColorStop(1,'rgba(8,14,40,.5)');g.fillStyle=gr;g.fillRect(X,Y,16,16)}else r(X,Y,16,16,'rgba(8,14,40,.5)')}
  if(F.attack===1&&Math.floor(t/90)%19===0)r(X,Y,16,16,'rgba(180,140,255,.35)');
  const k=hash(x,y),s=Math.floor(t/45+k)%40;if(s<16)r(X+((k*3+s)%16),Y+s,1,2,'rgba(226,236,244,.7)');
  if(k%3===0){const s2=Math.floor(t/37+k*2)%44;if(s2<16)r(X+((k*7+s2)%16),Y+s2,1,1,'rgba(240,246,250,.8)')}
  return}
 if(ZID==='wreck'&&F.attack===1&&Math.floor(t/120)%23===0)r(X,Y,16,16,'rgba(180,140,255,.24)');
}

/* Lestari: beige padded tank walls, red cables, pearl lounge */
const wallL=c=>c==='#'||c==='r'||c==='w';
function padTop(X,Y,x,y){r(X,Y,16,16,'#8C836C');r(X,Y,16,1,'#A1987F');r(X+(x%2?2:10),Y,1,16,'#80786A');r(X+(x%2?3:11),Y,1,16,'#98907A');const h=hash(x,y);if(h<40)r(X+4+h%5,Y+3+(h>>2)%9,3,2,'#857C67')}
function padFace(X,Y,x,y){
 r(X,Y+5,16,11,'#BFB59A');r(X,Y+5,16,1,'#D8D0B8');
 r(X,Y+10,16,1,'#A89E83');r(X+(x%2?3:11),Y+6,1,4,'#A89E83');r(X+(x%2?11:3),Y+11,1,4,'#A89E83');
 r(X+1,Y+6,14,1,'#CEC6AD');r(X+1,Y+11,14,1,'#CEC6AD');
 const h=hash(x,y);if(h<35){r(X+3+h%7,Y+12,4,2,'#A69B7C');r(X+4+h%7,Y+14,2,1,'#A69B7C')}
 r(X,Y+15,16,1,'#7A725E');
}
function pearl(X,Y,x,y,t){r(X,Y,16,16,'#D3DEE1');r(X,Y,16,7,'#DAE4E6');r(X,Y,16,1,'#BAC6CA');r(X,Y,1,16,'#BAC6CA');r(X+1,Y+1,14,1,'#E8EFF0');const p=(Math.sin(t/1300+x*.9+y*.5)+1)/2;r(X+1,Y+15,15,1,`rgba(170,215,230,${(.25+.5*p).toFixed(2)})`);if(hash(x,y)<20)r(X+5,Y+9,5,1,'#C9D4D7')}
function mesh(X,Y,x,y){r(X,Y,16,16,'#7F7A6C');for(let i=0;i<16;i+=4){r(X+i,Y,1,16,'#726E61');r(X,Y+i,16,1,'#726E61')}r(X,Y,16,1,'#928D7E');if(hash(x,y)<14)r(X+9,Y+9,2,2,'#5E5A50')}
/* Bubbletown */
function rego(X,Y,x,y){r(X,Y,16,16,'#6E655A');const h=hash(x,y);r(X+(h%12)+1,Y+(h%9)+3,2,1,'#5E564C');r(X+((h*3)%13),Y+((h*7)%12)+1,1,1,'#857B6E');if(h%3===0)r(X+((h*5)%11)+2,Y+((h*11)%10)+4,3,2,'#625A4F');if(h%4===1)r(X+((h*7)%12)+2,Y+((h*3)%12)+2,1,1,'#958A7C')}
function disk(X,Y,x,y){r(X,Y,16,16,'#5E646C');r(X,Y,16,1,'#6E747C');r(X,Y,1,16,'#6E747C');r(X+8,Y,1,16,'#535960');r(X,Y+8,16,1,'#535960');r(X+2,Y+2,1,1,'#868D96');r(X+13,Y+13,1,1,'#868D96');
 if(at(x,y+1)==='%'){r(X,Y+11,16,5,'#3A3F46');r(X,Y+11,16,1,'#E8B73A');for(let i=0;i<16;i+=4){r(X+i,Y+12,1,4,'#5A6068');r(X+i+1,Y+13,2,1,'#5A6068')}}
 if(at(x,y-1)==='%')for(let i=0;i<16;i+=4)r(X+i,Y,2,1,'#E8B73A')}
/* Terrik Papuan in the sky (map px → screen px) */
function terrik(X,Y,x,y,cx,cy,rd){const sx=X-x*16+cx,sy=Y-y*16+cy;clip(X,Y,()=>{
 for(let dy=-rd;dy<=rd;dy++){const yy=sy+dy;if(yy<Y||yy>Y+15)continue;const w=Math.floor(Math.sqrt(rd*rd-dy*dy)+.35);const band=dy>-rd*.35&&dy<rd*.25;
  r(sx-w,yy,2*w+1,1,band?'#5E9A86':'#DDE7EC');if(band&&((dy+rd)%5===0))r(sx-w+((dy*7)&15),yy,10,1,'#CFE0E2');r(sx+w-Math.ceil(w*.3),yy,Math.ceil(w*.3)+1,1,band?'#3F6E62':'#A9BAC3')}})}
/* Breakerville */
const LIGHTS=[[11,8],[17,8],[4,13]];const lightNear=(x,y)=>LIGHTS.find(([a,c])=>Math.abs(a-x)<=3&&Math.abs(c-y)<=3);
function basalt(X,Y,x,y){r(X,Y,16,16,'#4B4E52');const h=hash(x,y),h2=hash(y+7,x+3);r(X+(h%11),Y+(h%7)+2,4,1,'#3F4246');r(X+((h*3)%12),Y+((h*5)%11)+3,2,1,'#5A5E63');
 r(X+(h2%12)+1,Y+(h2%10)+4,3,2,'#424549');r(X+(h2%12)+1,Y+(h2%10)+4,2,1,'#5C6065');if(h2%3===0){r(X+((h2*5)%11)+2,Y+((h2*3)%9)+2,2,2,'#3A3D41');r(X+((h2*5)%11)+2,Y+((h2*3)%9)+2,1,1,'#62666B')}
 if(h%4===0)r(X+((h*7)%13),Y+((h*11)%13),1,1,'#C8C6BC');if(h%5===1)r(X+2,Y+11,5,1,'#55595E');
 if(at(x,y-1)==='~'){r(X,Y,16,2,'#33363A');for(let i=0;i<16;i+=3)r(X+i+(y%2),Y+2,2,1,'#D9D6CA')}
 if(at(x,y+1)==='~'){r(X,Y+14,16,2,'#3A3D41');for(let i=1;i<16;i+=4)r(X+i,Y+13,2,1,'#D9D6CA')}
 if(at(x-1,y)==='~')r(X,Y,2,16,'#3A3D41');if(at(x+1,y)==='~')r(X+14,Y,2,16,'#3A3D41')}
function algae(X,Y,x,y,t){r(X,Y,16,16,'#3E7A5E');const h=hash(x,y),h2=hash(x+11,y+5);
 const blob=(a,c,w,col)=>{r(X+a+1,Y+c,w-2,1,col);r(X+a,Y+c+1,w,w-2,col);r(X+a+1,Y+c+w-1,w-2,1,col)};
 blob(h%11,(h>>2)%10,5,'#367055');blob((h2%10)+2,(h2>>3)%9+3,4,'#4A8766');blob((h*7)%12,(h*3)%12,3,'#4A8766');r(X+(h2%13),Y+((h*5)%14),2,1,'#5E9C78');
 r(X+((h2*3)%13)+1,Y+((h2*7)%13)+1,1,1,'#2E5E46');if(h<10){r(X+5,Y+9,4,2,'#1F3A40');r(X+6,Y+9,2,1,'#3F6A6A')}
 if(Math.floor(t/700+h)%6===0)r(X+(h%12)+2,Y+(h%10)+3,2,1,'#7DBB94')}
function tunnel(X,Y,x,y){r(X,Y,16,16,'#4C5848');const o=(x+y)%2?3:10;r(X,Y+o,16,1,'#43503F');r(X,Y+o+1,16,1,'#5A6756');r(X,Y+(o+7)%16,16,1,'#475443');const h=hash(x,y);
 if(h<9){r(X+3,Y+7,7,2,'#2C3A42');r(X+4,Y+7,2,1,'#5A7A88')}else if(h<17){r(X+9,Y+4,2,3,'#5A4A9A');r(X+10,Y+3,1,1,'#9A8AE0')}else if(h<23){r(X+2,Y+12,6,1,'#9A5A2E');r(X+5,Y+13,5,1,'#B8703A')}}

function wallTop(X,Y,x,y){r(X,Y,16,16,'#283029');const h=hash(x,y);r(X+(h%12),Y+(h%9)+2,3,1,'#323B33');r(X+((h*3)%13),Y+((h*7)%12)+1,1,1,'#3E4A3A');r(X+((h*5)%11)+3,Y+((h*11)%10)+3,2,2,'#1E2420');
 if(at(x,y-1)&&at(x,y-1)!=='#'&&at(x,y-1)!=='K')r(X,Y,16,2,'#3E4A3A');if(at(x-1,y)&&at(x-1,y)!=='#')r(X,Y,1,16,'#36412F');if(at(x+1,y)&&at(x+1,y)!=='#')r(X+15,Y,1,16,'#36412F')}
function wallFace(X,Y,x,y){const h=hash(x,y);r(X,Y+5,16,11,'#6F7F6A');r(X,Y+5,16,1,'#8A9A84');r(X,Y+15,16,1,'#46523F');r(X+(h%13),Y+8+(h%5),2,1,'#62725D');
 const k=h%4;if(k===0){disc(X+8,Y+11,3,'#56634F');disc(X+8,Y+11,2,'#141917');r(X+7,Y+13,3,1,'#4E5A4A')}
 else if(k===1){r(X+2,Y+8,9,1,'#C0703A');r(X+5,Y+10,9,1,'#D08A4A');r(X+3,Y+12,6,1,'#C0703A');r(X+9,Y+13,4,1,'#9A5A2E')}
 else if(k===2){r(X+4,Y+9,2,5,'#5A4A9A');r(X+6,Y+7,2,7,'#7A6AC8');r(X+8,Y+10,2,4,'#5A4A9A');r(X+6,Y+7,1,2,'#C8BCF4');r(X+11,Y+11,2,3,'#7A6AC8')}
 else{[[3,4],[8,6],[12,3]].forEach(([a,l])=>{r(X+a,Y+6,3,1,'#85957F');r(X+a+1,Y+7,1,l,'#85957F');r(X+a+1,Y+6+l,1,1,'#9AAA93')})}}
function wreckHull(X,Y,x,y){big(X,Y,x,y,6,2,(BX,BY)=>{r(BX,BY,192,48,'#6F7F6A');r(BX,BY,192,3,'#7E8E78');r(BX,BY+44,192,4,'#58664F');
  [7,17,29,39].forEach((k,n)=>{for(let i=0;i<192;i+=2){const yy=BY+k+Math.round(2.2*Math.sin(i/31+n));r(BX+i,yy,2,1,'#5A6956');r(BX+i,yy+1,2,1,'#8A9A84')}});
  for(let i=0;i<90;i++){const a=hash(i,7)*1.92|0,c=hash(7,i)*.47|0;r(BX+a,BY+c,1,1,i%3?'#62725D':'#86967F')}
  [[12,11,4],[40,33,3],[61,13,5],[95,35,3],[118,10,4],[149,31,5],[177,13,4],[28,22,2],[134,41,2],[82,24,3],[167,40,2],[106,21,2]].forEach(([a,c,d])=>{
   disc(BX+a,BY+c-1,d+1,'#56634F');disc(BX+a,BY+c,d,'#141917');r(BX+a-d+1,BY+c+d-1,2*d-1,1,'#4E5A4A');r(BX+a-d+2,BY+c+d,2*d-3,1,'#9AAA93')})})}

const TILES={
 /* ---- Lestari ---- */
 lpad:(X,Y,x,y,t)=>{padTop(X,Y,x,y);const bl=at(x,y+1);if(bl&&!wallL(bl))padFace(X,Y,x,y);fx(X,Y,x,y,t)},
 lcab:(X,Y,x,y,t)=>{padTop(X,Y,x,y);const bl=at(x,y+1),face=bl&&!wallL(bl);if(face)padFace(X,Y,x,y);
  if(face){[[6,4,'#A3473A','#C8604F'],[8,6,'#7A2F28','#94403A'],[9,3,'#2A2622','#4A443E'],[7,7,'#B85A3A','#D47A55']].forEach(([y0,sag,c,hl],k)=>{for(let i=0;i<16;i++){const u=((x*16+i+k*5)%24)/24,yy=Y+y0+Math.round(sag*4*u*(1-u));r(X+i,yy,1,2,c);r(X+i,yy,1,1,hl)}})}
  else{r(X,Y+5,16,6,'#5A2420');r(X,Y+5,16,2,'#A3473A');r(X,Y+6,16,1,'#C8604F');r(X,Y+8,16,1,'#7A2F28');r(X,Y+9,16,1,'#2A2622');r(X+5,Y+4,3,8,'#6A6455');r(X+5,Y+4,3,1,'#8A8475')}fx(X,Y,x,y,t)},
 pearl:(X,Y,x,y,t)=>{pearl(X,Y,x,y,t);fx(X,Y,x,y,t)},
 mesh:(X,Y,x,y,t)=>{mesh(X,Y,x,y);if(y===7&&x%3===0){const on=(Math.floor(t/200)-x)%8===0;r(X+7,Y+7,2,2,on?'#E8962A':'#6E5A3A')}fx(X,Y,x,y,t)},
 cupola:(X,Y,x,y,t)=>{stars(X,Y,x,y,t,.2);const F=f(),PX=X-(x-1)*16,PY=Y-(y-1)*16;
  clip(X,Y,()=>{
   if(!F.gift){const cx=PX+80,cy=PY+76;[[62,'#26304A'],[54,'#1C2336'],[46,'#26304A'],[38,'#1C2336'],[30,'#222B40']].forEach(([d,c])=>disc(cx,cy,d,c,Y,Y+15));
    for(let a=-2.75;a<-.35;a+=.22)for(let d=24;d<62;d+=2){const px=Math.round(cx+Math.cos(a)*d),py=Math.round(cy+Math.sin(a)*d);if(py>=Y&&py<Y+16)r(px,py,1,1,'#3A4766')}
    disc(cx,cy,24,'#080B12',Y,Y+15);const p=(Math.sin(t/450)+1)/2;for(let a=-3.1;a<0;a+=.16){const py=Math.round(cy+Math.sin(a)*25);if(py>=Y&&py<Y+16)r(Math.round(cx+Math.cos(a)*25),py,1,1,`rgba(191,230,255,${(.35+.65*p).toFixed(2)})`)}}
   else if(!F.beam){disc(PX+134,PY+19,8,'#DDE7EC',Y,Y+15);r(PX+127,PY+19,15,3,'#5E9A86');r(PX+138,PY+13,4,12,'rgba(60,80,100,.35)');
    if(F.ambush)for(let i=0;i<9;i++){const ph=((t/2400)+i*.083)%1,mx=Math.round(PX+4+ph*120),my=PY+4+(i*7)%24;r(mx-8,my,8,1,'rgba(255,150,90,.45)');r(mx,my,2,1,'#FF5A4A')}}
   else{terrik(X,Y,x,y,16+120,16+52,34);if(Math.floor(t/160)%3)r(PX+28,PY+10,2,1,'#FFB060')}
  });
  r(X,Y,16,16,'rgba(150,200,220,.07)');if(y===1)r(X,Y,16,2,'#6A6455');if(y===2)r(X,Y+13,16,3,'#A1987F');if(x%2)r(X,Y,1,16,'#5E594C');r(X+6,Y+1,1,12,'rgba(255,255,255,.08)');fx(X,Y,x,y,t)},
 shrine:(X,Y,x,y,t)=>{pearl(X,Y,x,y,t);r(X+1,Y+7,14,8,'#6B4A2B');r(X+1,Y+7,14,2,'#94704C');r(X+2,Y+15,2,1,'#4A3320');r(X+12,Y+15,2,1,'#4A3320');
  r(X+6,Y+1,4,4,'#E8C46A');r(X+7,Y,2,6,'#E8C46A');r(X+5,Y+2,6,2,'#E8C46A');r(X+7,Y+2,2,2,'#FFF3C4');
  [3,11].forEach((cx,i)=>{r(X+cx,Y+4,2,3,'#EDE6D6');const fl=(Math.floor(t/140)+i)%3;r(X+cx,Y+2+(fl===1?0:1),2,2-(fl===1?0:1),'#FFB347')});
  r(X+5,Y+8,2,3,'#BFE6FF');r(X+9,Y+8,2,3,'#BFE6FF');r(X+5,Y+8,2,1,'#FFFFFF');fx(X,Y,x,y,t)},
 pod:(X,Y,x,y,t)=>{(x>13?mesh:pearl)(X,Y,x,y,t);r(X+1,Y+1,14,14,OL);r(X+2,Y+2,12,12,'#5F6E7A');r(X+3,Y+3,10,10,'#D9D2BE');r(X+3,Y+3,10,2,'#ECE6D4');r(X+3,Y+8,10,1,'#B9B19B');r(X+2,Y+13,12,1,'#46525C');
  r(X+6,Y+1,4,1,(Math.floor(t/600)+x)%2?'#69CFD8':'#2C5D63');fx(X,Y,x,y,t)},
 ltable:(X,Y,x,y,t)=>{pearl(X,Y,x,y,t);const [ox,oy]=org(x,y);big(X,Y,x,y,ox,oy,(BX,BY)=>{r(BX+3,BY+28,26,2,'rgba(0,0,0,.18)');r(BX+4,BY+5,24,21,OL);r(BX+3,BY+7,26,17,OL);r(BX+5,BY+6,22,19,'#B8C5C9');r(BX+4,BY+8,24,15,'#B8C5C9');r(BX+5,BY+6,22,3,'#EEF4F5');r(BX+5,BY+23,22,2,'#94A2A7');
  r(BX+8,BY+10,4,4,'#E4E1D6');r(BX+9,BY+11,2,2,'#7A5A3C');r(BX+19,BY+14,6,4,'#E8962A');r(BX+20,BY+15,4,2,'#F7D98C');r(BX+14,BY+18,3,3,'#E4E1D6')});fx(X,Y,x,y,t)},
 fusion:(X,Y,x,y,t)=>{mesh(X,Y,x,y);const [ox,oy]=org(x,y);const F=f();big(X,Y,x,y,ox,oy,(BX,BY)=>{
  r(BX,BY,64,32,'#2E2B27');r(BX,BY,64,2,'#4A453E');r(BX,BY+30,64,2,'#1E1C19');for(let i=4;i<64;i+=10)r(BX+i,BY+3,2,26,'#3A3631');
  const beam=F.beam,p=(Math.sin(t/(beam?120:400))+1)/2;r(BX+8,BY+9,48,14,OL);
  r(BX+9,BY+10,46,12,beam?'#7A5ACF':'#A3471F');r(BX+9,BY+13,46,6,beam?`rgba(230,218,255,${(.6+.4*p).toFixed(2)})`:`rgba(255,170,80,${(.45+.4*p).toFixed(2)})`);r(BX+9,BY+15,46,2,beam?'#FFFFFF':'#FFE0A0');
  for(let i=0;i<5;i++)r(BX+14+i*9,BY+10,1,12,'rgba(0,0,0,.35)');r(BX+2,BY+4,4,4,(Math.floor(t/500)%2)?'#69CFD8':'#2C5D63');r(BX+58,BY+24,3,3,'#E8962A')});fx(X,Y,x,y,t)},
 /* ---- Bubbletown on Five ---- */
 void:(X,Y,x,y,t)=>{stars(X,Y,x,y,t,.15);terrik(X,Y,x,y,20*16,-26,46)},
 disk:(X,Y,x,y)=>disk(X,Y,x,y),
 gantry:(X,Y,x,y,t)=>{disk(X,Y,x,y);r(X+3,Y+14,10,2,'rgba(0,0,0,.25)');r(X+3,Y,2,15,'#C9A23A');r(X+11,Y,2,15,'#C9A23A');r(X+3,Y,1,15,'#E8C45A');for(let i=0;i<15;i+=5){r(X+5,Y+i+1,6,1,'#A88630');r(X+5+((i/5)%2?4:0),Y+i+2,2,3,'#A88630')}
  r(X+1,Y,14,2,'#E8B73A');r(X+7,Y+2,1,4+Math.round(2*Math.sin(t/700+x)),'#2A2E33');r(X+6,Y+6+Math.round(2*Math.sin(t/700+x)),3,2,'#5A6068')},
 bubbleW:(X,Y,x,y,t)=>{disk(X,Y,x,y);big(X,Y,x,y,11,2,(BX,BY)=>{
  r(BX+2,BY+3,92,2,'#C9A23A');r(BX+2,BY+43,92,2,'#C9A23A');for(let i=0;i<6;i++)r(BX+2+i*18,BY+3,2,42,'#A88630');
  r(BX+7,BY+9,82,30,OL);r(BX+5,BY+13,86,22,OL);r(BX+8,BY+10,80,28,'#6F7F6A');r(BX+6,BY+14,84,20,'#6F7F6A');r(BX+8,BY+10,80,2,'#85957F');r(BX+8,BY+36,80,2,'#56634F');
  [16,25,32].forEach((k,n)=>{for(let i=8;i<88;i+=2){const yy=BY+k+Math.round(1.5*Math.sin(i/14+n));r(BX+i,yy,2,1,'#5A6956');r(BX+i,yy+1,2,1,'#8A9A84')}});for(let i=0;i<40;i++)r(BX+8+hash(i,3)*.8|0,BY+11+(hash(3,i)*.26|0),1,1,i%2?'#62725D':'#86967F');
  [[14,18,3],[26,29,2],[35,16,2],[19,31,2],[41,25,3]].forEach(([a,c,d])=>{disc(BX+a,BY+c,d,'#2E3530');r(BX+a-1,BY+c-d,2,1,'#93A38C')});
  const F0=f().bubble?6:48;r(BX+F0,BY+7,90-F0,34,'#C9CED3');for(let i=F0+3;i<88;i+=7){r(BX+i,BY+7,1,34,'#E9ECEF');r(BX+i+2,BY+7,1,34,'#A9B0B6')}
  r(BX+F0,BY+7,90-F0,1,'#F4F6F8');r(BX+F0,BY+40,90-F0,1,'#8E959C');
  if(!f().bubble){for(let k=0;k<34;k+=2)r(BX+F0-((k*7)%4),BY+7+k,(k*7)%4,2,'#C9CED3');
   for(let i=0;i<4;i++){const ph=Math.floor(t/70)+i*13;if(ph%5<3){const sx=BX+F0-3+(hash(ph,i)%5),sy=BY+12+((i*9+ph)%24);r(sx,sy,1,1,'#FFF3C4');r(sx+(ph%3)-1,sy-1,1,1,'#FFD27A');r(sx-(ph%2),sy+2,1,1,'#FFD27A');r(sx+2,sy+1,1,1,'#FFB347')}}}
  else{const p=Math.floor(t/90)%60;r(BX+F0+p,BY+9,2,30,'rgba(255,255,255,.35)')}});},
 plane:(X,Y,x,y,t)=>{(ZID==='bubbletown'?disk:basalt)(X,Y,x,y);const [ox,oy]=org(x,y);big(X,Y,x,y,ox,oy,(BX,BY)=>{const cx=BX+24;
  r(BX+5,BY+27,38,4,'rgba(0,0,0,.25)');for(let i=0;i<21;i++){const w=Math.floor(i*1.05);r(cx-w-3,BY+7+i,2*w+6,1,OL)}
  for(let i=1;i<20;i++){const w=Math.floor(i*1.05);r(cx-w-2,BY+7+i,2*w+4,1,i<18?'#C9CED3':'#8E959C');r(cx-w-2,BY+7+i,1,1,'#E9ECEF')}
  r(cx-5,BY,10,30,OL);r(cx-4,BY+1,8,28,'#E6E8EA');r(cx-4,BY+1,1,28,'#FFFFFF');r(cx+3,BY+1,1,28,'#AEB5BB');r(cx-3,BY+3,6,5,'#2E4A6A');r(cx-2,BY+3,2,2,'#9FD7E8');
  r(cx-1,BY+12,2,15,'#E8962A');r(cx-8,BY+26,5,4,'#5A6068');r(cx+3,BY+26,5,4,'#5A6068');r(cx-14,BY+20,3,1,'#D2533F');r(cx+11,BY+20,3,1,'#69CFD8')});fx(X,Y,x,y,t)},
 pdoor:(X,Y,x,y,t)=>{(ZID==='bubbletown'?disk:basalt)(X,Y,x,y);r(X+3,Y,10,15,OL);r(X+4,Y,8,14,'#8A9099');for(let i=1;i<14;i+=3)r(X+4,Y+i,8,1,'#E8B73A');r(X+4,Y,8,1,'#C9CED3');fx(X,Y,x,y,t)},
 spire:(X,Y,x,y,t)=>{(at(x,y-1)==='%'||y<=7?stars(X,Y,x,y,t,.15):rego(X,Y,x,y));const L=at(x+1,y)==='L';r(X+(L?9:2),Y,5,16,OL);r(X+(L?10:3),Y,3,16,'#8A9099');r(X+(L?10:3),Y,1,16,'#B9C1C9');
  for(let i=0;i<16;i+=4)r(X+(L?3:7),Y+i,6,1,'#6A7079');r(X+(L?4:8),Y+1,1,2,'#6A7079');if((Math.floor(t/400)+y)%4===0)r(X+(L?11:4),Y+7,1,2,'#D2533F')},
 shaft:(X,Y,x,y,t)=>{r(X,Y,16,16,'#3E444C');r(X,Y,16,1,'#4E555E');r(X+(at(x-1,y)==='L'?15:0),Y,1,16,'#2A2E33');const o=(Math.floor(t/90)+y*5)%16;r(X+6,Y+o,4,3,'#69CFD8');r(X+7,Y,2,16,'rgba(105,207,216,.18)')},
 rego:(X,Y,x,y)=>rego(X,Y,x,y),
 sphere:(X,Y,x,y)=>{rego(X,Y,x,y);const [ox,oy]=org(x,y);big(X,Y,x,y,ox,oy,(BX,BY)=>{const cx=BX+16,cy=BY+17;
  r(BX,BY+27,32,3,'rgba(0,0,0,.28)');
  for(let dy=-14;dy<=11;dy++){const w=Math.floor(Math.sqrt(196-dy*dy)+.35),yy=cy+dy;r(cx-w-1,yy,2*w+3,1,'#4A4F55');r(cx-w,yy,2*w+1,1,'#C3C9CF');r(cx+w-Math.ceil(w*.35),yy,Math.ceil(w*.35)+1,1,'#9AA1A8')}
  for(let dy=-11;dy<=-3;dy++){const w=Math.floor(Math.sqrt(20-(dy+7)*(dy+7))+.5);if(w>0)r(cx-6-w,cy+dy,2*w,1,'#E4E8EC')}r(cx-8,cy-10,2,2,'#FFFFFF');
  r(cx-14,cy+1,29,1,'#AEB5BB');r(BX+1,BY+27,30,2,'#7A7064');r(BX+3,BY+26,26,1,'#857B6E');
  if(hash(ox,oy)%3===0){r(cx+2,cy-9,7,5,'#23262B');r(cx+3,cy-10,3,1,'#23262B');r(cx+1,cy-7,1,3,'#23262B');r(cx+8,cy-6,2,2,'#23262B');r(cx+4,cy-4,3,1,'#23262B');r(cx+3,cy-8,2,1,'#3A3F46')}
  else{r(cx-3,cy+3,6,7,'#3A3F46');r(cx-3,cy+3,6,1,'#5A6067');r(cx+1,cy+6,1,1,'#69CFD8')}})},
 tube:(X,Y,x,y)=>{rego(X,Y,x,y);r(X,Y+12,16,2,'rgba(0,0,0,.22)');r(X,Y+5,16,8,'#4A4F55');r(X,Y+6,16,6,'#B9BFC5');r(X,Y+6,16,2,'#E2E6EA');r(X,Y+11,16,1,'#80868D');r(X+7,Y+5,2,8,'#8E959C')},
 crater:(X,Y,x,y)=>{rego(X,Y,x,y);const [ox,oy]=org(x,y);big(X,Y,x,y,ox,oy,(BX,BY)=>{const cx=BX+24,cy=BY+16;
  for(let dy=-13;dy<=13;dy++){const w=Math.round(22*Math.sqrt(1-(dy/13.5)**2));r(cx-w,cy+dy,2*w,1,'#857B6E')}
  for(let dy=-11;dy<=11;dy++){const w=Math.round(19*Math.sqrt(1-(dy/11.5)**2));r(cx-w,cy+dy,2*w,1,'#4F483F')}
  for(let dy=-7;dy<=9;dy++){const w=Math.round(13*Math.sqrt(1-(dy/9.5)**2));r(cx-w+2,cy+dy+1,2*w,1,'#3A342D')}
  r(cx-6,cy+2,3,2,'#B5653A');r(cx+5,cy-2,2,6,'#6A7079')})},
 rcrate:(X,Y,x,y)=>{rego(X,Y,x,y);r(X+1,Y+3,14,12,OL);r(X+2,Y+4,12,10,'#B5653A');r(X+2,Y+4,12,2,'#D07E4E');for(let i=4;i<14;i+=3)r(X+i,Y+6,1,8,'#8E4E2C');r(X+2,Y+14,12,1,'rgba(0,0,0,.3)')},
 /* ---- Breakerville, Portishead inlet ---- */
 algae:(X,Y,x,y,t)=>{algae(X,Y,x,y,t);if(at(x,y+1)&&at(x,y+1)!=='~'&&at(x,y+1)!=='n'){const o=Math.floor(t/350+x*3)%16;r(X,Y+15,16,1,'#6FAF8A');r(X+o,Y+14,4,1,'#9FD0B0')}fx(X,Y,x,y,t)},
 rail:(X,Y,x,y,t)=>{algae(X,Y,x,y,t);r(X+3,Y,10,16,OL);r(X+4,Y,8,16,'#5A6068');r(X+4,Y,2,16,'#7A818A');r(X+10,Y,2,16,'#454A50');r(X+7,Y+(hash(x,y)%9)+1,1,5,'#8A5A3A');r(X+5,Y+4,1,1,'#9AA0AA');r(X+5,Y+11,1,1,'#9AA0AA');
  if(at(x,y+1)==='~'||at(x,y+1)===','){r(X+2,Y+14,12,2,'#2F6249');r(X+3,Y+15,10,1,'#6FAF8A')}fx(X,Y,x,y,t)},
 beam:(X,Y,x,y,t)=>{algae(X,Y,x,y,t);const F=f(),broken=F.attack===2&&x>=8&&x<=10;
  if(broken){if(x===8){r(X,Y+3,7,7,'#5A6068');r(X+6,Y+8,3,8,'#454A50')}if(x===10){r(X+9,Y+3,7,7,'#5A6068');r(X+8,Y+9,3,7,'#454A50')}r(X+2,Y+12,12,3,'#3A3F46');r(X+3,Y+14,10,1,'#6FAF8A')}
  else{r(X,Y+2,16,9,OL);r(X,Y+3,16,7,'#5A6068');r(X,Y+3,16,1,'#7A818A');for(let i=0;i<16;i+=4){r(X+i,Y+4,1,5,'#454A50');r(X+i+1,Y+6,2,1,'#454A50')}
   if(x%5===0){r(X+4,Y+9,8,5,OL);r(X+5,Y+9,6,4,'#E8B73A');r(X+7,Y+13,2,2,F.attack===1&&Math.floor(t/120)%3===0?'#FFFFFF':'#69CFD8')}}
  fx(X,Y,x,y,t)},
 rim:(X,Y,x,y,t)=>{algae(X,Y,x,y,t);const h=hash(x,y);r(X,Y+1,16,14,'#BCC2C8');r(X,Y+1,16,1,'#E9ECEF');r(X+(h%7)+2,Y+3,1,10,'#E9ECEF');r(X+(h%5)+8,Y+4,1,9,'#8E959C');r(X,Y+14,16,1,'#8E959C');
  for(let i=0;i<16;i+=3){if(at(x,y-1)==='~')r(X+i,Y,2,1+(i+h)%3,'#3E7A5E');if(at(x,y+1)==='~')r(X+i,Y+15-((i+h)%3),2,1+(i+h)%3,'#3E7A5E')}fx(X,Y,x,y,t)},
 wreckHull:(X,Y,x,y,t)=>{wreckHull(X,Y,x,y);fx(X,Y,x,y,t)},
 hole:(X,Y,x,y,t)=>{wreckHull(X,Y,x,y);r(X+2,Y+3,12,13,'#93A38C');r(X+2,Y+4,12,12,'#14181A');r(X+4,Y+5,8,11,'#1E2420');for(let i=6;i<16;i+=3)r(X+5,Y+i,6,1,'#5A6068');r(X+4,Y+5,1,11,'#5A6068');r(X+11,Y+5,1,11,'#5A6068');if(Math.floor(t/500)%2)r(X+7,Y+1,2,2,'#E8B73A');fx(X,Y,x,y,t)},
 bridge:(X,Y,x,y,t)=>{algae(X,Y,x,y,t);r(X+2,Y,12,16,OL);r(X+3,Y,10,16,'#8A9099');for(let i=1;i<16;i+=3)r(X+3,Y+i,10,1,'#6A7079');r(X+2,Y,1,16,'#454A50');r(X+13,Y,1,16,'#454A50');r(X+1,Y+2,2,3,'#454A50');r(X+13,Y+10,2,3,'#454A50');fx(X,Y,x,y,t)},
 basalt:(X,Y,x,y,t)=>{basalt(X,Y,x,y);fx(X,Y,x,y,t)},
 salt:(X,Y,x,y,t)=>{basalt(X,Y,x,y);const h=hash(x,y),S=(a,c)=>at(a,c)===':';r(X,Y,16,16,'#C4C1B3');
  for(let i=0;i<16;i+=2){const d=1+((h+i*7)%3);if(!S(x,y-1))r(X+i,Y,2,d,'#4B4E52');if(!S(x,y+1))r(X+i,Y+16-d,2,d,'#4B4E52');if(!S(x-1,y))r(X,Y+i,d,2,'#4B4E52');if(!S(x+1,y))r(X+16-d,Y+i,d,2,'#4B4E52')}
  r(X+4,Y+4,5,1,'#DAD7CB');r(X+9,Y+10,4,1,'#DAD7CB');r(X+2+(h%6),Y+7+(h%3),1,1,'#A9A699');r(X+3+(h%6),Y+8+(h%3),1,1,'#A9A699');r(X+10,Y+3+(h%4),1,1,'#A9A699');r(X+11,Y+4+(h%4),1,1,'#A9A699');r(X+6,Y+12,1,1,'#A9A699');
  if((Math.floor(t/500)+h)%7===0)r(X+(h%10)+3,Y+(h%9)+3,1,1,'#FFFFFF');fx(X,Y,x,y,t)},
 shed:(X,Y,x,y,t)=>{basalt(X,Y,x,y);const [ox,oy]=org(x,y);big(X,Y,x,y,ox,oy,(BX,BY)=>{
  r(BX+1,BY+2,46,29,OL);r(BX+2,BY+3,44,11,'#D3D8DC');r(BX+4,BY+3,40,2,'#EEF1F3');r(BX+2,BY+12,44,2,'#9AA1A8');
  r(BX+2,BY+14,44,16,'#B9BFC5');for(let i=4;i<46;i+=3)r(BX+i,BY+14,1,16,'#A3AAB1');r(BX+7,BY+14,1,9,'#8A5A3A');r(BX+33,BY+14,1,12,'#8A5A3A');r(BX+40,BY+3,1,7,'#B07A5A');
  r(BX+20,BY+19,8,12,OL);r(BX+21,BY+20,6,11,'#3A3F46');const win=night()?'#F7D98C':'#5A6A78';r(BX+6,BY+18,9,6,OL);r(BX+7,BY+19,7,4,win);r(BX+33,BY+18,9,6,OL);r(BX+34,BY+19,7,4,win)});
  fx(X,Y,x,y,t)},
 lodge:(X,Y,x,y,t)=>{basalt(X,Y,x,y);const [ox,oy]=org(x,y);big(X,Y,x,y,ox,oy,(BX,BY)=>{
  r(BX+1,BY+1,94,31,OL);r(BX+2,BY+2,92,12,'#D3D8DC');r(BX+4,BY+2,88,2,'#EEF1F3');r(BX+2,BY+12,92,2,'#9AA1A8');r(BX+2,BY+14,92,18,'#B9BFC5');for(let i=4;i<94;i+=3)r(BX+i,BY+14,1,18,'#A3AAB1');
  r(BX+30,BY+4,36,8,'#6B4A2B');r(BX+31,BY+5,34,6,'#8A6440');[35,41,47,53,59].forEach((a,i)=>r(BX+a,BY+7,i%2?3:4,2,'#F1E6D0'));
  r(BX+78,BY-1,6,6,'#5A6068');const s=Math.floor(t/300)%4;r(BX+79+(s%2),BY-3-s,3,2,'rgba(230,236,240,.6)');
  const win=night()?'#F7D98C':'#E8D49A';[8,24,62,78].forEach(a=>{r(BX+a,BY+17,11,8,OL);r(BX+a+1,BY+18,9,6,win);r(BX+a+5,BY+18,1,6,OL)});r(BX+42,BY+16,12,16,OL);r(BX+43,BY+17,10,15,'#6B4A2B');r(BX+51,BY+24,1,2,'#E8C46A')});
  fx(X,Y,x,y,t)},
 porch:(X,Y,x,y,t)=>{r(X,Y,16,16,'#7A5A3C');for(let i=3;i<16;i+=4)r(X,Y+i,16,1,'#5E4530');r(X,Y,16,1,'#94704C');r(X,Y,16,4,'rgba(0,0,0,.25)');r(X+(hash(x,y)%12)+2,Y+8,2,1,'#5E4530');fx(X,Y,x,y,t)},
 counter:(X,Y,x,y,t)=>{basalt(X,Y,x,y);r(X,Y+2,16,13,OL);r(X,Y+3,16,11,'#6B4A2B');r(X,Y+3,16,3,'#94704C');r(X,Y+13,16,1,'#4A3320');
  if(x%2===0){r(X+5,Y,4,4,'#E4E1D6');r(X+6,Y+1,2,2,'#B5653A');if(Math.floor(t/400)%2)r(X+7,Y-2,1,2,'rgba(240,240,240,.7)')}else{r(X+4,Y+1,8,3,'#3A3F46');r(X+5,Y+1,6,1,'#9AA0AA')}fx(X,Y,x,y,t)},
 hut:(X,Y,x,y,t)=>{basalt(X,Y,x,y);const [ox,oy]=org(x,y);big(X,Y,x,y,ox,oy,(BX,BY)=>{
  r(BX+1,BY+2,46,29,OL);r(BX+2,BY+3,44,11,'#5E6B4A');r(BX+2,BY+3,44,2,'#7A8A60');for(let i=6;i<46;i+=8)r(BX+i,BY+5,1,9,'#4A5638');
  r(BX+2,BY+14,44,16,'#B9BFC5');for(let i=4;i<46;i+=3)r(BX+i,BY+14,1,16,'#A3AAB1');r(BX+4,BY+19,40,8,OL);r(BX+5,BY+20,38,6,'#6B4A2B');r(BX+5,BY+20,38,1,'#94704C');
  r(BX+8,BY+18,4,3,'#C9A64A');r(BX+15,BY+17,3,4,'#6F7F6A');r(BX+21,BY+18,5,3,'#9FD7E8');r(BX+29,BY+16,3,5,'#5A4A9A');r(BX+35,BY+18,4,3,'#B8703A');
  r(BX+38,BY+6,6,6,OL);r(BX+39,BY+7,4,4,'#E3E1D6');r(BX+43,BY+11,2,2,OL)});fx(X,Y,x,y,t)},
 scrap:(X,Y,x,y,t)=>{basalt(X,Y,x,y);r(X+1,Y+8,14,7,OL);r(X+2,Y+9,6,5,'#8A5A3A');r(X+7,Y+6,7,8,'#6A4A30');r(X+7,Y+6,7,1,'#9A6A44');r(X+3,Y+5,5,5,OL);r(X+4,Y+6,3,3,'#7A818A');r(X+10,Y+9,3,2,'#E3E1D6');r(X+2,Y+13,5,1,'#E3E1D6');fx(X,Y,x,y,t)},
 pole:(X,Y,x,y,t)=>{basalt(X,Y,x,y);r(X+6,Y+2,4,14,OL);r(X+7,Y+3,2,13,'#5A6068');r(X+4,Y+14,8,2,'#454A50');r(X+3,Y,10,4,OL);r(X+4,Y+1,8,2,'#2A2E33');r(X+5,Y+3,6,1,'#FFF6D8');fx(X,Y,x,y,t);
  if(night()){r(X+5,Y+3,6,1,'#FFF6D8');r(X+4,Y+4,8,1,'rgba(255,240,200,.35)')}},
 /* ---- inside the wreck ---- */
 whull:(X,Y,x,y,t)=>{wallTop(X,Y,x,y);const bl=at(x,y+1);if(bl&&bl!=='#'&&bl!=='K')wallFace(X,Y,x,y);fx(X,Y,x,y,t)},
 tunnel:(X,Y,x,y,t)=>{tunnel(X,Y,x,y);fx(X,Y,x,y,t)},
 node:(X,Y,x,y,t)=>{tunnel(X,Y,x,y);const top=at(x,y-1)!=='N',hot=f().attack===1,p=(Math.sin(t/(hot?90:500))+1)/2;
  r(X+1,Y,14,16,OL);r(X+2,Y+(top?1:0),12,top?15:16,'rgba(190,220,210,.25)');r(X+3,Y+(top?2:0),10,top?14:16,'#1E2A26');
  const gold='#E8C46A',plat='#D6DEE6';r(X+7,Y+(top?3:0),2,top?13:16,top?gold:plat);for(let i=(top?4:1);i<16;i+=3){r(X+4,Y+i,3,1,i%2?gold:plat);r(X+9,Y+i+1,3,1,i%2?plat:gold)}
  r(X+5,Y+(top?6:8),6,1,`rgba(105,207,216,${(.3+.7*p).toFixed(2)})`);if(hot&&Math.floor(t/80)%3===0)r(X+2+hash(Math.floor(t/80),y)%11,Y+hash(y,Math.floor(t/80))%14,2,2,'#B48CFF');fx(X,Y,x,y,t)},
 zpz:(X,Y,x,y,t)=>{tunnel(X,Y,x,y);const dug=f().dug;big(X,Y,x,y,9,1,(BX,BY)=>{
  const S=[[16,15,13],[47,14,13],[19,36,11],[45,36,11]];
  const inside=(px,py)=>S.some(([a,c,d])=>(px-a)**2+(py-c)**2<(d-1)**2);
  const spike=(ax,ay,bx,by,ext)=>{const n=Math.max(Math.abs(bx-ax),Math.abs(by-ay));for(let i=-ext;i<=n+ext;i++){const px=Math.round(ax+(bx-ax)*i/n),py=Math.round(ay+(by-ay)*i/n);if(inside(px,py))continue;const tip=i<-ext+4||i>n+ext-4,w=tip?1:3;r(BX+px-1,BY+py-1,w+1,w+1,OL);r(BX+px,BY+py,w,w,'#C0392B');r(BX+px,BY+py,w>1?2:1,1,'#E25B4B')}};
  S.forEach(([a,c,d])=>{disc(BX+a,BY+c,d+1,OL);disc(BX+a,BY+c,d,'#2E2A3E');disc(BX+a-2,BY+c-2,d-3,'#4A4466');disc(BX+a-4,BY+c-4,Math.max(2,d-8),'#8C84B8');r(BX+a-5,BY+c-6,2,2,'#E6E0FF')});
  spike(16,15,45,36,9);spike(47,14,19,36,9);spike(16,15,47,14,8);spike(19,36,45,36,6);
  for(let i=0;i<5;i++){const k=Math.floor(t/90)+i*31;if(k%4<2){const px=BX+4+hash(k,i)%56,py=BY+2+hash(i,k)%42;r(px,py,1,1,'#E6D6FF');r(px+1,py,1,1,'#B48CFF');r(px,py+1,1,1,'#B48CFF')}}
  if(!dug){for(let i=0;i<64;i+=5){const hh=8+hash(i,3)%10;r(BX+i,BY+48-hh,6,hh,'#4E5A4A');r(BX+i+1,BY+48-hh,4,1,'#6F7F6A')}}});fx(X,Y,x,y,t)},
 rubble:(X,Y,x,y,t)=>{tunnel(X,Y,x,y);if(f().dug){r(X+2,Y+11,4,3,'#4E5A4A');for(let i=0;i<16;i+=4)r(X+i,Y+13,2,1,i%8?OL:'#E8B73A')}
  else{const h=hash(x,y);[[0,7,8,8],[6,4,9,11],[3,10,10,6],[10,9,6,7]].forEach(([a,c,w,hh],i)=>{const sh=(h+i)%3;r(X+a+1,Y+c,w-2,hh,OL);r(X+a,Y+c+1,w,hh-2,OL);r(X+a+1,Y+c+1,w-2,hh-2,['#5F6E5B','#56634F','#6A7A64'][sh]);r(X+a+1,Y+c+1,w-2,1,'#8A9A84');r(X+a+1,Y+c+hh-2,w-2,1,'#46523F')});r(X+5+h%5,Y+8,2,1,'#7A6AC8')}fx(X,Y,x,y,t)},
 cache:(X,Y,x,y,t)=>{wallTop(X,Y,x,y);r(X,Y+5,16,11,'#6F7F6A');r(X,Y+5,16,1,'#8A9A84');if(f().mapped){r(X+3,Y+7,10,9,OL);r(X+4,Y+8,8,8,'#14181A');r(X+12,Y+7,3,9,'#5F6E5B');r(X+5,Y+14,6,1,'#C9A23A')}else{r(X+3,Y+7,10,9,'#687862');r(X+3,Y+7,10,1,'#7C8C76')}fx(X,Y,x,y,t)},
 exitHole:(X,Y,x,y,t)=>{tunnel(X,Y,x,y);const sky=night()||f().mapped&&f().attack!==2?'#1E2A44':'#9FB0B8';r(X+1,Y+2,14,14,'#2E3530');r(X+2,Y+3,12,13,sky);r(X+2,Y+3,12,2,'rgba(255,255,255,.15)');
  const s=Math.floor(t/60)%13;r(X+3+s,Y+4+s%9,1,2,'#E2ECF4');for(let i=4;i<16;i+=3)r(X+4,Y+i,8,1,'#5A6068')},
 alamp:(X,Y,x,y,t)=>{tunnel(X,Y,x,y);r(X+4,Y+8,2,8,'#454A50');r(X+10,Y+8,2,8,'#454A50');r(X+7,Y+5,2,9,'#5A6068');r(X+3,Y+1,10,6,OL);r(X+4,Y+2,8,4,'#E8E8E0');r(X+5,Y+3,6,2,'#FFFFFF');r(X+1,Y,14,9,'rgba(255,250,230,.12)');fx(X,Y,x,y,t)},
};

/* ---------- custom sprites ---------- */
const TOSE={pal:{O:OL,E:OL,H:'#3A3532',S:'#D2B8A4',G:'#7D8C66',Y:'#EDE3B0',R:'#B8322A',M:'#8A5E54',C:'#3B4149',c:'#2A2F36',P:'#262A30',K:'#121418',B:'#6B5A3A'},
 down:["................",".....OOOOOO.....","....OHHHHHHO....","...OHHHHHHHHO...","...OSSSSSSSSO...","...OSESSSOYYO...","...OSSSSOYRYYO..","...OSGSSSOYYO...","....OSSMMSGO....",".....OGSSGO.....","...OOCCCCCCOO...","..OGCCCCCCCCGO..","..OSCcCCCCcCSO..","..OGOBBBBBBOGO..","...OPPPPPPPPO...","...OPPPOOPPPO...","...OPPO..OPPO...","...OKKO..OKKO..."],
 up:["................",".....OOOOOO.....","....OHHHHHHO....","...OHHHHHHHHO...","...OHHHHHHHHO...","...OHHHHHHHHO...","...OHHHHHHHHO...","...OGHHHHHHGO...","....OSGSSGSO....",".....OGSSGO.....","...OOCCCCCCOO...","..OGCCCCCCCCGO..","..OGCcCCCCcCGO..","..OSOccccccOSO..","...OPPPPPPPPO...","...OPPPOOPPPO...","...OPPO..OPPO...","...OKKO..OKKO..."],
 left:["................",".....OOOOOO.....","....OHHHHHHO....","...OHHHHHHHHO...","...OSSHHHHHHO...","..OYYSSSHHHHO...",".OYRYSSSSHHHO...","..OYYSSGSHHHO...","...OMSSSSGSO....",".....OGSSGO.....",".....OCCCCO.....","....OCCCCCCO....","....OCGCSCCO....","....OCBBGBCO....","....OPPPPPPO....","....OPPOOPPO....","....OPPOOPPO....","....OKKOOKKO...."]};
const davDown=["......OOOO......",".....OWWSSO.....","....OWSSSSSO....","....OSSSSSSO....","...OSESSSSESO...","...OSSSSSSSsO...","...OSSSMMSSsO...","..OSSSSSSSSSsO..","..OSCSSSSSSCsO..",".OSSCSSSSSSCSsO.",".OSCCCCCCCCCCsO.",".OSCCCdCCCCCCsO.",".OSCCCCCCCCdCsO.",".OsCCCCCCCCCCsO.",".OsCCCCCCCCCCsO.","..OCCCcCCCCCCO..","..OCCCCCCdCCCO..","...OCCCCCCCcO...","....OCCO.OCCO...","....OKKO.OKKO..."];
const davLeft=davDown.map((row,i)=>i===4?"...OESSSSSSSO...":i===6?"...OMMSSSSSsO...":row);
const flexal=(C,c,d,S,s,W)=>({pal:{O:OL,E:OL,S,s,W,M:'#8A5E44',C,c,d,K:'#2A2A33'},down:davDown,up:davDown.map(row=>row.replace(/[EM]/g,'S')),left:davLeft});
const DAVRUX=flexal('#3E5C8A','#2E4568','#5E6A6A','#C7A27C','#A8845F','#E0C29E');
const FLEXGUARD=flexal('#6A6A4A','#4E4E36','#8A6A3A','#B99A84','#967A66','#D6BCA6');
const daveBase={Q:'#D6EEF3',q:'#9CC9D6',W:'#FFFFFF',M:'#D99A9A',m:'#B07080',E:'#2A3A48'},daveGlow={Q:'#FFE2CC',q:'#F2A27E',W:'#FFF6EE',M:'#FF7F5A',m:'#C2503A',E:'#5A2A1A'};
const davePal={O:OL};['Q','q','W','M','m','E'].forEach(k=>Object.defineProperty(davePal,k,{get:()=>((f().attack&&!f().dug)?daveGlow:daveBase)[k]}));
const daveDown=["................",".....OOOOOO.....","....OQQWQQQO....","...OQWQQQQqQO...","...OQmQQQQmqO...","...OQEQQQQEqO...","...OQQQmmQQqO...","....OQQQQQqO....","...OOQMMMMqOO...","..OQQMMQQMMqqO..","..OQMMmQQmMMqO..","..OQMMMMMMMMqO..","..OQOQMmmMqOqO..","...OOQMMMMqOO...","...OQMMOOMMqO...","...OQMO..OMqO...","...OQQO..OQqO...","...OOOO..OOOO..."];
const DAVE={pal:davePal,down:daveDown,up:daveDown.map((row,i)=>i>=3&&i<=6?"...OQQqQQQQqO...":row),
 left:["................",".....OOOOOO.....","....OQQWQQQO....","...OQWQQQQqQO...","..OQQmQQQQqqO...","..OEQQQQQQqqO...","...OQQQmQQqqO...","....OQQQQQqO....",".....OQMMqO.....","....OQMMQMqO....","....OQMmMMqO....","....OQMMMMqO....","....OQQMmMqO....","....OOQMMqOO....","....OQMMOMMO....","....OQMOOMqO....","....OQQOOQqO....","....OOOOOOOO...."]};
const ghostDown=["................","....OOOOOOOO....","...OLLLLLLLLO...","...OVVVVVVVVO...","OOOOLDDDDDDLOOOO","OWWWODDDDDDOWWWO","OOOOODDLLDDOOOOO","..OWODDDDDDOWO..","..OOODDVVDDOOO..","....ODDDDDDO....","....OddddddO....","..OOOOOOOOOOOO..",".OLO.OLO.OLO.OLO","OLO..OLO.OLO..OL","OO...OO...OO...O","................"];
const GHOST={pal:{O:OL,L:'#6E7480',D:'#3E434D',d:'#2A2E36',V:'#B48CFF',W:'#9AA0AA'},down:ghostDown,up:ghostDown,left:ghostDown};
const GHOSTWRECK={pal:{O:OL,L:'#6E7480',D:'#3E434D',V:'#5A4A7A',W:'#9AA0AA'},down:["................","..OOO.....OOO...",".OLDDO...ODDLO..",".ODVDO.OOODVO...","..OOO.OWWO.OOO..","....OOODDOO.OLO.","...OLDDDDDLO.OO.","....OOOOOOO....."]};
const ghostLook={get art(){return f().attack===1?GHOST:GHOSTWRECK}};
const SCORCH={pal:{O:'#1E1E22',D:'#2E2C2A',d:'#3E3A36',E:'#B8703A',G:'#5A4A7A'},down:["................","................","....dddd.dd.....","..ddDDDDddDDd...",".dDDOOODDDOODd..","..dDDOOOOODDdd..","...ddDDEDDdd.G..","....d.dddd......"]};
const HELMET={pal:{O:OL,H:'#E9ECEF',W:'#C9CED3',w:'#9AA1A8'},down:["................","................","......OOOO......","....OOHHHHOO....","...OHHWWWWWWO...","..OWWWWWWWWWWO..","..OwWWWwWWWWwO..","..OwwwwwwwwwwO..","...OOOOOOOOOO..."]};
const POD={pal:{O:OL,F:'#5F6E7A',f:'#46525C',C:'#D9D2BE',c:'#B9B19B',get G(){return Math.floor(performance.now()/500)%2?'#9FD7E8':'#5FA7C0'}},
 down:["................","................","..OOOOOOOOOOOO..",".OFFFFFFFFFFFFO.",".OFGGGGGGGGGGFO.",".OFCCCCCCCCCCFO.",".OFCcCCCCCCcCFO.",".OFCCCCCCCCCCFO.",".OFCCCCCCCCCCFO.",".OFCcCCCCCCcCFO.",".OFCCCCCCCCCCFO.",".OFCCCCCCCCCCFO.",".OFFFFFFFFFFFFO.",".OffffffffffffO.","..OOOOOOOOOOOO..","................"]};

/* ---------- people (book descriptions where the book gives them; otherwise designer's choice) ---------- */
const ELLIE={hair:'#2A2220',skin:'#E8B892',shirt:'#E4E1D6',pants:'#3B4650',belt:'#E8962A',style:'bob',lashes:1,lips:'#C8646E'};
const FINN={hair:'#E0C070',skin:'#F0C9A4',shirt:'#2F8F8A',pants:'#2E3548'};

const ZONES={
 lestari:{name:'레스타리 · 생활 모듈',reg:'LESTARI · ENFOE',
  legend:{'#':{tile:'lpad'},'r':{tile:'lcab'},'.':{tile:'pearl',walk:1},',':{tile:'mesh',walk:1},'w':{tile:'cupola'},'c':{tile:'console'},'h':{tile:'pod'},
   's':{tile:'shrine'},'t':{tile:'ltable'},'F':{tile:'fusion'},'A':{tile:'airlock',walk:1}},
  map:[
"############rrr####rr###",
"#wwwwwwwwww#.....s....h#",
"#wwwwwwwwww#..........h#",
"#.cc.cc.cc.#...tt.....h#",
"#..............tt......#",
"#..........#...........#",
"#####.######...........#",
"#,,,,,,,,,,,,,,,,,,,,,,#",
"#####,#########,########",
"#FFFF,,,,,,###,,,,,,,hh#",
"#FFFF,,,,,,#r#,,,,,,,,,#",
"#,,,,,,,,,,###,,,hh,,,,#",
"#FFFF,,,,,,###,,,,,,,,,#",
"#FFFF,,,,,,###,,,,,,,,,#",
"#,,,,,,,,,,###,,,,,,,,,#",
"####################AA##"],
  rooms:[[1,1,10,5,'레스타리 · 큐폴라'],[12,1,22,6,'레스타리 · 라운지'],[1,7,22,7,'레스타리 · 복도'],[1,9,10,14,'레스타리 · 엔진실'],[14,9,22,14,'레스타리 · 구명 침대 칸']],
  warps:{'20,15':{to:'bubbletown',x:2,y:2,dir:'right',lock:()=>!f().beam&&'에어록이 잠겼어요. 밖은 깊은 우주예요.'},'21,15':{to:'bubbletown',x:2,y:2,dir:'right',lock:()=>!f().beam&&'에어록이 잠겼어요. 밖은 깊은 우주예요.'}},
  spots:{get '4,2'(){const F=f();return !F.gift?'창밖에 하늘의 관문이 있어요. 아주 큰 검은 돔이에요.':!F.beam?(F.ambush?'빨간 점 아홉 개가 다가와요. 미사일이에요!':'관문을 지났어요. 멀리 하얀 행성이 보여요.'):'하얀 행성 테릭 파푸안. 땅이 거의 다 얼음이에요.'},
   '17,1':'작은 제단이에요. 아스테리아 여신의 별이 있어요.',get '2,10'(){return f().beam?'핵융합 엔진이 보라색으로 빛나요. 사실은 무기예요.':'셀레스철 핵융합 엔진. 따뜻하고 조용해요.'},
   '22,2':'구명 침대예요. 관문을 지날 때 여기 누워요.','15,3':'라운지 탁자. 차가운 차하고 카드가 있어요.','8,3':'레이더 화면. 초록 점이 하나 있어요. 우리 배예요.'},
  npcs:['uzoma','ellie','basyl','tose1','grssia1','ichika1','finn','dream']},
 bubbletown:{name:'파이브 · 버블타운',reg:'FIVE · BUBBLETOWN',
  legend:{'%':{tile:'void'},'=':{tile:'disk',walk:1},'g':{tile:'gantry'},'B':{tile:'bubbleW'},'P':{tile:'plane'},'p':{tile:'pdoor',walk:1},'A':{tile:'airlock',walk:1},
   '|':{tile:'spire'},'L':{tile:'shaft',walk:1},'.':{tile:'rego',walk:1},'o':{tile:'sphere'},'-':{tile:'tube'},'O':{tile:'crater'},'k':{tile:'rcrate'}},
  map:[
"%%%%%%%%%%%%%%%%%%%%%%%%%%",
"%%%%%%%%%%%%%%%%%%%%%%%%%%",
"%A=====g===BBBBBB=====PPP%",
"%======g===BBBBBB=====PPP%",
"%==========BBBBBB======p=%",
"%=g======================%",
"%========================%",
"%%%%%%%%%%%|LL|%%%%%%%%%%%",
"...........|LL|...........",
".oo...oo...|LL|..oo...oo..",
".oo---oo....LL...oo---oo..",
"..........................",
"..OOO........kk.....oo....",
"..OOO..............-oo....",
"..........................",
"....oo..........oo........",
"....oo..........oo........",
".........................."],
  rooms:[[1,2,24,6,'파이브 · 부두 원반'],[0,8,25,17,'파이브 · 버블타운'],[11,7,14,10,'파이브 · 50km 탑']],
  warps:{'1,2':{to:'lestari',x:20,y:14,dir:'up'},
   '23,4':{to:'breakerville',x:23,y:16,dir:'down',lock:()=>!b('위성')?'조종석이 비었어요. 조종사 미테리스를 찾아요.':!f().bubble&&'미테리스: "버블이 끝나야 출발할 수 있어요."'}},
  spots:{'7,3':'부두 크레인이에요. 잔해 조각을 들어요.',get '11,4'(){return f().bubble?'버블이 다 감겼어요. 은색으로 반짝반짝해요.':'잔해를 은색 버블로 감싸고 있어요. 불꽃이 튀어요.'},
   '22,3':'삼각형 날개 우주비행기. 대기권도 날 수 있어요.','11,8':'50킬로미터 탑이에요. 꼭대기에 부두 원반이 있어요.','1,9':'반쯤 묻힌 은색 공. 사람들이 안에서 살아요.',
   '3,12':'광산 구덩이예요. 아주 깊어요.','13,12':'"레스타리 · 엔포 가문" 상자.','5,1':'하늘에 테릭 파푸안이 떠 있어요. 하얗고 커요.','20,1':'하늘에 테릭 파푸안이 떠 있어요. 초록 띠는 바다예요.'},
  npcs:['yoru','miteris','okimi','resident']},
 breakerville:{name:'테릭 파푸안 · 브레이커빌',reg:'TERRIK PAPUAN · BREAKERVILLE',base:'plate',
  legend:{'~':{tile:'algae'},'n':{tile:'rail'},'m':{tile:'beam'},'b':{tile:'rim'},'W':{tile:'wreckHull'},'H':{tile:'hole',walk:1},'=':{tile:'bridge',walk:1},
   ',':{tile:'basalt',walk:1},':':{tile:'salt',walk:1},'S':{tile:'shed'},'L':{tile:'lodge'},'_':{tile:'porch',walk:1},'C':{tile:'counter',over:1},'T':{tile:'terminal'},
   'R':{tile:'hut'},'P':{tile:'plane'},'p':{tile:'pdoor',walk:1},'x':{tile:'scrap'},'i':{tile:'pole'}},
  map:[
"~~nmmmmmmmmmmmmmmmmmmn~~~~~~",
"~~n~~bbbbbbbbbbbbbb~~n~~~~~~",
"~~n~~bWWWWWWWWWWWWb~~n~~~~~~",
"~~n~~bWWWWWWWWWWWWb~~n~~~~~~",
"~~n~~bWWWWWWWHWWWWb~~n~~~~~~",
"~~n~~bbbbbbbb=bbbbb~~n~~~~~~",
"~~n~~~~~~~~~~=~~~~~~~n~~~~~~",
"~,,,,,,,,,,,,,,,,,,,,,,,,,~~",
"~,,:::,,,,,i,,,,,i,,,,,,,,~~",
"~,SSS,,,,,:::,,,,,,,RRR,,,~~",
"~,SSS,,,,,,:,,,,,,,,RRR,,,~~",
"~,LLLLLL,,,,,,,,,,,,,,,,,,~~",
"~,LLLLLL,,,,,,xx,,,,,,,,,,~~",
"~,______T,,,,,,,,,,,,,PPP,~~",
"~,,CCCC,,,::,,,,,,,,,,PPP,~~",
"~,,,,,,,,,:::,,,SSS,,,,p,,~~",
"~,,,,,,,,,,,,,,,SSS,,,,,,,~~",
"~~~~~~~~~~~~~~~~~~~~~~~~~~~~"],
  rooms:[[1,7,25,8,'포츠헤드 · 부두'],[13,5,13,6,'포츠헤드 · 다리'],[1,11,9,15,'브레이커빌 · 로지'],[18,9,25,11,'브레이커빌 · 감정사 오두막'],[20,12,25,16,'브레이커빌 · 비행장']],
  warps:{'13,4':{to:'wreck',x:11,y:13,dir:'up',lock:()=>!f().daves?'플렉살 팀만 들어가요. 계약이 먼저예요.':(f().mapped&&!f().attack)&&'밤이에요. 잔해 문이 닫혔어요.'},
   '23,15':{to:'bubbletown',x:23,y:5,dir:'down',lock:()=>f().attack===1&&'지금은 못 떠나요! 공격 중이에요!'}},
  spots:{'1,6':'초록색 조류가 바다를 덮었어요. 2미터 두께. 빠지면 못 나와요.','2,6':'크레인 레일 기둥. 녹이 많이 슬었어요.','12,5':'열린 버블. 잘라 낸 은색 조각들이 바다 위에 떠 있어요.',
   '4,9':'은색 버블 조각으로 만든 집이에요.','7,11':'로지예요. 안에서 수프 냄새가 나요.','20,10':'감정사의 오두막. 옛날 물건이 가득해요.','11,8':'아크 등이에요. 밤에도 부두가 밝아요.',
   '14,12':'녹슨 기계 조각. 소금이 하얗게 붙었어요.','22,14':'미테리스의 우주비행기예요.',get '14,5'(){return f().attack===2?'크레인 레일이 무너져서 바다에 빠졌어요.':'잔해 옆 다리예요. 아래는 조류 바다예요.'}},
  npcs:['tabia','davrux','guard','dave','dave2','grssia','ichika','ichikaBody','tabiaBody','tose','basylB','keeper','finnB','miterisB','ghost1','ghost2','ghost3']},
 wreck:{name:'잔해 · 내부',reg:'AKTORU WRECK · PORTISHEAD',
  legend:{'#':{tile:'whull'},'.':{tile:'tunnel',walk:1},'N':{tile:'node'},'G':{tile:'zpz'},'r':{tile:'rubble'},'K':{tile:'cache'},'E':{tile:'exitHole',walk:1},'l':{tile:'alamp'}},
  map:[
"########################",
"########rGGGGr##########",
"#N...###rGGGGr###.....K#",
"#N...###rGGGGr###......#",
"#....##..rrrr..##......#",
"##.###..........##.#####",
"##.####.######.###.#####",
"##....#.######.....#####",
"#####.#.##########.#####",
"#####...########...#####",
"#######.########.#######",
"####...............#####",
"####l.............l#####",
"####...............#####",
"###########E############"],
  rooms:[[1,2,4,4,'잔해 · 네트워크 노드'],[6,1,15,5,'잔해 · 발생기 방'],[17,2,22,4,'잔해 · 작은 방'],[4,11,18,13,'잔해 · 입구 홀'],[1,5,22,10,'잔해 · 굴']],
  dark:()=>!f().mapped?[1,1,22,10]:null,
  warps:{'11,14':{to:'breakerville',x:13,y:6,dir:'down'}},
  spots:{'1,2':'네트워크 노드. 벽 속에 금색, 은색 고사리 같은 선이 있어요.',get '8,3'(){return f().dug?'공 네 개가 빨간 가시에 꿰여 있어요. ZPZ 발생기!':'돌 아래에서 보라색 불꽃이 튀어요.'},
   get '22,2'(){return f().mapped?'벽에 작은 문이 열려 있어요. 안은 비었어요.':'벽이 조금 이상해요. 문 모양이에요.'},'4,12':'아크 등이 윙윙 소리를 내요.','6,14':'벽에 동그란 구멍이 많아요. 아주 오래된 배예요.'},
  npcs:['davrux2','finnW']},
};

const NPC={
 /* ---------------- Lestari ---------------- */
 uzoma:{name:'우조마 선장',zone:'lestari',x:5,y:4,dir:'down',look:{hair:'#3A3436',skin:'#8A5A3C',shirt:'#1E1E22',pants:'#3A3A44',belt:'#6B5A3A',style:'bun',lashes:1,lips:'#9A5A5A'},
  status:()=>{const F=f();if(!F.captain)return 'todo';if(!F.gift)return hasItem('피의 병')?'todo':'wait';return null},
  script:()=>{const F=f();
   if(!F.captain)return null;
   if(!F.gift){if(!hasItem('피의 병'))return [{say:'베이질 목사님은 라운지에 있어요. 피 한 방울, 잊지 마요.'}];
    return [
     {say:'병을 가져왔어요? 좋아요. 이제 모두의 피가 있어요.',take:['피의 병']},
     {say:'아스테리아 여신님, 우리 길을 지켜 주세요.'},
     {who:'…',say:'퓨웅! 작은 유리병이 관문 안으로 날아가요.'},
     {who:'레스타리',say:'관문 진입. 프레임 시작.'},
     {who:'핀',say:'(통신) 프레임 안에서는 시간이 멈춰요.'},
     {who:'핀',say:'(통신) 그런데 가끔 꿈을 꿔요. {프레임 꿈|프레임 꿈}이에요.'},
     {say:'모두 구명 침대에 누워요. 엘리, 끝나면 센서를 봐요.',set:()=>{f().gift=1}}]}
   if(!F.ambush)return [{say:'{프레임|프레임}이 끝나면 엘리가 센서를 볼 거예요.'}];
   if(!F.beam)return [{say:'미사일이에요! 우리 방어 포드로는 부족해요!'},{say:'핀 씨는 엔진실에 있어요. 빨리!'}];
   return [{say:'이 배를 오래 탔는데… 엔진이 무기였어요? 처음 알았어요.'},{say:'잘 다녀와요. 엔포 가문은 계약을 꼭 지켜요.'}]},
  talk:()=>[
   {say:'왔어요? 저는 우조마, 레스타리의 선장이에요.'},
   {say:'이 배는 엔포 가문 배예요. 제 배에서는 제 말이 법이에요.'},
   {say:'곧 하늘의 {관문|관문}을 지나요. 그 전에 모두 피를 한 방울 줘야 돼요.'},
   {say:'{통행의 선물|통행의 선물}이에요. 피를 안 주면? 에어록 밖으로 나가요.'},
   {who:'엘리',say:'하하… 농담이죠?'},
   {say:'농담 아니에요.'},
   {say:'라운지에 베이질 목사님이 있어요. 피를 주고 병을 받아 와요.',set:()=>{f().captain=1}}]},
 ellie:{name:'엘리',zone:'lestari',x:9,y:4,dir:'up',look:ELLIE,badge:['추격하다','공격하다'],
  hide:()=>!!f().ambush,
  status:()=>f().gift?undefined:null,
  script:()=>f().gift?null:[{say:'피 한 방울에 에어록? 트래블러들은 정말 재밌어요.'},{say:'관문은 처음이에요. 두근두근해요!'}],
  after:'우리를 쫓아오는 배가 있었어요. 아직 소름이 돋아요.',
  talk:()=>[
   {say:'와… 프레임 끝! 우리 관문을 지났어요!'},
   {say:'여기는 테릭 파푸안이에요. 그런데… 잠깐만요.'},
   {say:'센서에 배가 한 척 있어요. 관문부터 계속 따라와요.'},
   Q.ellie[0],
   {who:'레스타리',say:'경고! 미사일 아홉 개 접근!'},
   Q.ellie[1],
   {say:'우리 무기로는 못 막아요! 핀은 엔진실에 있어요. 가요!',award:['추격하다','공격하다'],set:()=>{f().ambush=1}}]},
 basyl:{name:'베이질 목사',zone:'lestari',x:17,y:2,dir:'down',look:{hair:'#ECECEC',skin:'#D9A88A',shirt:'#5A3A5E',pants:'#3A2E3A',style:'bald',coat:1},badge:['거짓말하다'],
  status:()=>f().captain?undefined:null,
  script:()=>f().captain?null:[{say:'(꿀꺽) 오, 새 얼굴. 선장님 먼저 만나요. 큐폴라에 있어요.'}],
  after:'관문 앞에서는 기도도 많이, 술도 조금. 하하.',
  talk:()=>[
   {say:'오, 새 얼굴. 저는 베이질. 목사이고, 옛날 물건 {감정사|감정사}예요.'},
   {say:'타비아 부선장님이 벌써 손가락을 찔렀죠? 그 피 한 방울.'},
   {say:'피를 뜨겁게 해서 가루로 만들어요. 그리고 이 유리병에 넣어요.'},
   {say:'관문은 정직한 피만 받아요. 피는 거짓말 안 해요.'},
   Q.basyl[0],
   {say:'(꿀꺽) 아, 이거요? 이건 물이에요. 진짜예요.'},
   Q.basyl[1],
   {say:'하하! 병 가져가요. 선장님한테 드려요.',give:'피의 병',award:['거짓말하다']}]},
 tose1:{name:'토셰',zone:'lestari',x:21,y:5,dir:'left',look:{art:TOSE},
  script:()=>f().ambush&&!f().beam?[{say:'내 뒤에 있어요.'}]:null,
  talk:()=>[{say:'…토셰. 경비예요.'},{say:'기보이 씨가 저를 보냈어요. 핀 씨를 지키라고요.'},{say:'제 눈이요? 이 눈은 날 수 있어요. 드론이에요.'},{who:'…',say:'토셰의 툭 튀어나온 눈이 빠져서 윙— 날아가요.'}]},
 grssia1:{name:'그르시아',zone:'lestari',x:13,y:2,dir:'down',look:{hair:'#5A4A3A',skin:'#C99470',shirt:'#2E3B48',pants:'#2E3B48',belt:'#8A8F99',cap:'#3E4C5E',lashes:1,lips:'#B8606A'},
  talk:()=>[{say:'저는 그르시아. 엔포 가문 {경비|경비}예요.'},{say:'이치카하고 저는 오래 같이 일했어요. 토셰는 새 사람이에요.'}]},
 ichika1:{name:'이치카',zone:'lestari',x:13,y:4,dir:'right',look:{hair:'#1E1E24',skin:'#EAC4A0',shirt:'#2E3B48',pants:'#2E3B48',belt:'#8A8F99',style:'long',lashes:1,lips:'#C8646E'},
  talk:()=>[{say:'이치카예요. 관문을 지날 때는 꼭 누워요.'},{say:'처음에는 머리가 빙글빙글해요. 하하.'}]},
 finn:{name:'핀',zone:'lestari',x:5,y:10,dir:'left',look:FINN,badge:['가속'],
  hide:()=>!!f().bubble,
  status:()=>f().ambush?undefined:null,
  script:()=>f().ambush?null:[{say:'이 엔진 소리 들려요? 셀레스철 엔진이에요.'},{say:'이상해요. 힘을 아주 조금만 써요. 왜일까요?'}],
  after:'엔진하고 이야기했어요. 엔진이 기뻐하는 것 같았어요.',
  talk:()=>[
   {say:'미사일? 우리 방어 포드로는 부족해요. 그런데…'},
   {say:'이 엔진은 셀레스철 엔진이에요. 힘을 아주 조금만 쓰고 있어요.'},
   {say:'저는 {우라닉|우라닉}이라서 셀레스철 기계하고 이야기할 수 있어요.'},
   Q.finn[0],
   {w:'가속',build:['엔진을','더','가속해야','돼요']},
   {say:'불꽃을 한 줄로 모아요. 빛처럼 빠르게!'},
   Q.finn[1],
   {who:'레스타리',say:'미사일 아홉 개… 전부 사라졌어요.'},
   {who:'레스타리',say:'적의 배가 불타요. 신호가 꺼졌어요.'},
   {who:'엘리',say:'핀! 방금 뭐 한 거예요?'},
   {say:'레스타리 엔진은 사실 무기예요. 저도 몰랐어요.'},
   {who:'…',say:'모두 적의 배가 부서졌다고 생각해요.'},
   {who:'…',say:'레스타리는 오래된 아크토루 전함의 잔해에 붙어요. 육만 톤이에요.'},
   {who:'…',say:'0.2g로 18일 동안 끌고 가요. 위성 파이브까지.',award:['가속'],set:()=>{f().beam=1}}]},
 dream:{name:'구명 침대',zone:'lestari',x:18,y:12,dir:'down',still:1,look:{art:POD},
  status:()=>f().gift&&!f().dream&&!f().beam?'wait':null,
  talk:()=>{const F=f();
   if(!F.gift)return [{who:'…',say:'구명 침대예요. 관문을 지날 때 여기 누워요.'}];
   if(F.dream||F.beam)return [{who:'…',say:'누워 봐요. 이번에는 꿈이 안 와요.'}];
   return [
    {who:'막간',say:'(프레임 꿈) 하얀 별, 빛나는 구름. 다른 사람의 기억이에요.'},
    {who:'막간',say:'초록 곰팡이로 덮인 소행성. 배 한 척이 들어가요.'},
    {who:'안디노 선장',say:'다 왔어요. 돈은 약속대로 줘요.'},
    {who:'마르첼루',say:'여기가… 사디아 님의 배예요?'},
    {who:'사디아',say:'(목소리만) 방주 한 척이 켈로완에 왔어요.'},
    {who:'사디아',say:'그 배가 {ZPZ 발생기|ZPZ 발생기}를 가지면 안 돼요. 막아요.'},
    {who:'마르첼루',say:'알겠어요. 어디든지 추격할 거예요.'},
    {who:'막간',say:'꿈이 끝나요. 몸이 차가워요.',set:()=>{f().dream=1}}]}},
 /* ---------------- Five · Bubbletown ---------------- */
 yoru:{name:'요루',zone:'bubbletown',x:10,y:3,dir:'right',look:{hair:'#3A2A5A',skin:'#E6C2A0',shirt:'#E8E4D8',pants:'#C9C4B6',belt:'#E8962A',style:'spiky'},badge:['잔해','인양하다'],
  status:()=>{if(!b('잔해'))return undefined;if(!f().bubble)return hasItem('도시락')?'todo':'wait'},
  script:()=>{const F=f();if(!b('잔해'))return null;
   if(F.bubble)return null;
   if(!hasItem('도시락'))return [{say:'배고파요… 일이 안 돼요.'},{say:'오키미살은 버블타운에 있어요. 저는 말 안 할 거예요. 흥.'}];
   return [
    {say:'이거… 오키미살이 만들었어요? 흥. …고마워요.',take:['도시락']},
    {say:'좋아요, 힘이 나요! 마지막 용접 확인!'},
    {who:'…',say:'용접기 다섯 대가 멈춰요. …좋아요. 버블이 다 감겼어요.'},
    {say:'버블 완성! 이제 잔해가 {대기권|대기권}으로 내려갈 수 있어요.',set:()=>{f().bubble=1}},
    {say:'미테리스한테 가요. 우주비행기로 먼저 내려가요.'}]},
  after:'오키미살한테 말해요. 도시락 맛있었다고. …아니, 말하지 마요.',
  talk:()=>[
   {say:'안녕! 저는 요루. 우주 밖에서 일하는 기술자예요.'},
   {say:'저 큰 거 보여요? 우리가 끌고 온 배의 잔해예요. 육만 톤!'},
   Q.yoru[0],
   {say:'지금 은색 버블로 잔해를 감싸요. 그러면 바다까지 내려갈 수 있어요.'},
   Q.yoru[1],
   {say:'아래 행성에서 잔해를 열고 안의 기계를 꺼내요.'},
   Q.yoru[2],
   {say:'근데… 배고파요. 남편하고 싸워서 도시락이 없어요.'},
   {say:'오키미살은 버블타운에 있어요. 저는 말 안 할 거예요. 흥.',award:['잔해','인양하다']}]},
 miteris:{name:'미테리스',zone:'bubbletown',x:21,y:4,dir:'left',look:{hair:'#6A3A22',skin:'#E0AE86',shirt:'#4A5A3A',pants:'#3A3A30',belt:'#C9A23A',style:'short',coat:1},badge:['위성','얼음'],
  get after(){return f().bubble?'꽉 잡아요. 대기권은 좀 흔들려요.':'버블이 끝나면 내려가요. 요루가 힘내야 돼요.'},
  talk:()=>[
   {say:'저는 미테리스. 우주비행기 조종사예요.'},
   {say:'여기는 파이브. 테릭 파푸안 옆의 작은 달이에요.'},
   Q.miteris[0],
   {say:'아래 행성 보여요? 하얗죠? 땅이 거의 다 얼음이에요.'},
   Q.miteris[1],
   {say:'버블이 끝나면 브레이커빌로 내려가요. 비행기 문은 열어 둘게요.',award:['위성','얼음']}]},
 okimi:{name:'오키미살',zone:'bubbletown',x:7,y:11,dir:'down',look:{hair:'#2A2020',skin:'#8A5A3C',shirt:'#B7652F',pants:'#3A3530',belt:'#2B2B30',style:'short'},
  status:()=>b('잔해')&&!f().bubble&&!hasItem('도시락')?'todo':null,
  script:()=>{const F=f(),s=[{say:'저는 오키미살. 레스타리 핵융합 기술자예요.'},{say:'우조마 선장님이 우리 엄마예요. 그래서 일이 두 배예요. 하하.'},{say:'핀 씨가 제 엔진으로 무기를 만들었어요! 아직도 놀라워요.'}];
   if(b('잔해')&&!F.bubble&&!hasItem('도시락'))return [...s,{say:'요루가 배고프대요? …우리 아침에 싸웠어요.'},{say:'그래도 이거 갖다줘요. 제가 만들었다고 말하지 마요!',give:'도시락'}];
   if(!b('잔해'))return [...s,{say:'요루는 부두 원반에서 일해요. 우리 남편이에요.'}];
   return [{say:F.bubble?'요루가 도시락 먹었어요? …다행이에요.':'빨리 갖다줘요. 식으면 맛없어요.'}]},
  talk:()=>[]},
 resident:{name:'버블타운 주민',zone:'bubbletown',x:20,y:14,dir:'left',look:{hair:'#7A6A5A',skin:'#D7A77E',shirt:'#6A7079',pants:'#3A3A40',cap:'#B5653A'},
  talk:()=>[{say:'저 탑 보여요? 50킬로미터예요. 꼭대기에 부두 원반이 있어요.'},{say:'밖은 공기가 없어요. 우리는 은색 공 안에서 살아요.'},{say:'아래 행성이요? 추워요. 저는 여기가 좋아요.'}]},
 /* ---------------- Breakerville ---------------- */
 tabia:{name:'타비아',zone:'breakerville',x:17,y:11,dir:'down',look:{hair:'#1E1A1A',skin:'#B57A55',shirt:'#3E6B8A',pants:'#2A3340',belt:'#C9A64A',style:'bun',lashes:1,lips:'#B8606A'},badge:['계약'],
  hide:()=>!!f().attack,
  status:()=>{const F=f();if(!b('계약'))return undefined;if(!F.contract)return hasItem('계약서')?'todo':'wait';if(!F.daves)return hasItem('은행 기록')?'todo':'wait';return null},
  script:()=>{const F=f();if(!b('계약'))return null;
   if(!F.contract){if(!hasItem('계약서'))return [{say:'다브룩스는 다리 앞에 있어요. 계약서를 받아 와요.'}];
    return [{say:'계약서… 어디 봐요. 뭐라고요? 30%?',take:['계약서']},{say:'30%? 흥, 우리를 망하게 하려고요?'},
     {say:'…좋아요, 30%. 선장님이 벌써 동의했어요. 사인!',set:()=>{f().contract=1}},{say:'이제 경비가 더 필요해요. 그르시아, 이치카, 토셰로는 부족해요.'},{say:'저기 이상한 두 사람이 일을 찾아요. 데이브와 데이브예요.'}]}
   if(!F.daves){if(!hasItem('은행 기록'))return [{say:'데이브와 데이브요? 오른쪽 끝에 있어요. 말은 적어요.'}];
    return [{say:'곤잘레스 은행 {장부|장부}요? 볼게요.',take:['은행 기록']},{say:'음… 진짜예요. 두 사람 이야기가 다 맞아요.'},
     {say:'좋아요. 데이브와 데이브를 고용해요. 잔해 주변을 지켜요.',set:()=>{f().daves=1}},{say:'다브룩스 팀은 벌써 잔해 안에 있어요. 다리를 건너가 봐요.'}]}
   return null},
  after:'좋은 계약은 모두를 웃게 해요.',
  talk:()=>[
   {say:'안녕하세요. 저는 타비아, 레스타리 {부선장|부선장}이에요.'},
   {say:'땅에서는 제가 엔포 가문 대표예요. 오늘은 값을 정하는 날!'},
   {say:'{플렉살|플렉살} 팀이 잔해 안을 파요. 그 전에 계약을 해야 돼요.'},
   Q.tabia[0],
   Q.tabia[1],
   {say:'팀장은 다브룩스예요. 다리 앞에 있어요. 계약서를 받아 와요.',award:['계약']}]},
 davrux:{name:'다브룩스',zone:'breakerville',x:12,y:7,dir:'down',look:{art:DAVRUX},badge:['파다','굴'],
  hide:()=>!!f().daves,
  status:()=>b('계약')?undefined:null,
  script:()=>b('계약')?null:[{say:'(몸이 쭉 늘어나요) 손님? 계약 얘기는 타비아 부선장하고 먼저 해요.'}],
  after:'우리 팀은 벌써 잔해 안에 있어요.',
  talk:()=>[
   {say:'(몸이 쭉 늘어나요) 아, 손님. 저는 다브룩스. 플렉살 팀장이에요.'},
   {say:'플렉살은 몸이 고무 같아요. 작은 구멍에도 들어가요.'},
   Q.davrux[0],
   {say:'잔해 안에는 아주 오래된 굴이 많아요. 우리가 지도를 만들어요.'},
   Q.davrux[1],
   {w:'파다',build:['플렉살은','좁은 굴을','팔 수','있어요']},
   {say:'계약서 여기 있어요. 30%. 싸죠? 하하.',give:'계약서',award:['파다','굴']}]},
 guard:{name:'플렉살 경비',zone:'breakerville',x:5,y:7,dir:'up',look:{art:FLEXGUARD},badge:['소금'],
  hide:()=>!!f().attack,
  after:'바다는 조용해요. 너무 조용해요.',
  talk:()=>[
   {say:'(목 없는 몸이 휙 돌아요) 조심해요! 바다에 가까이 가지 마요.'},
   {say:'저 초록색은 {조류|조류}예요. 2미터 두께예요. 그 아래는 짠 물이에요.'},
   Q.guard[0],
   {say:'여기는 바람에도 소금이 있어요. 기계가 다 녹슬어요.'},
   Q.guard[1],
   {say:'빠지면 못 나와요. 저는 밤마다 여기서 지켜요.',award:['소금']}]},
 dave:{name:'데이브',zone:'breakerville',x:24,y:9,dir:'down',look:{art:DAVE},badge:['경호원'],
  pos:()=>f().attack===2?[24,7]:[24,9],
  status:()=>f().contract?undefined:null,
  script:()=>f().contract?null:[{say:'…'},{say:'일. 계약하는 사람, 어디?'}],
  get after(){const F=f();return F.attack===2&&!F.dug?'뜨거워요. 바다에 들어가요. 치이익.':F.attack?'고스트는 쉬워요.':'데이브. 지켜요.'},
  talk:()=>[
   {say:'데이브.'},
   {say:'일 찾아요. 우리는 {실리케이트|실리케이트}. 피부가 수정이에요.'},
   {say:'총알, 충격… 다 먹어요. 그러면 몸이 빛나요.'},
   Q.dave[0],
   Q.dave[1],
   {say:'못 믿어요? 곤잘레스 은행 {장부|장부}를 봐요. 우리 이야기가 다 있어요.',give:'은행 기록',award:['경호원']}]},
 dave2:{name:'데이브',zone:'breakerville',x:25,y:9,dir:'left',look:{art:DAVE},
  pos:()=>f().attack===2?[25,7]:[25,9],
  talk:()=>{const F=f();return F.attack===2&&!F.dug?[{say:'(풍덩! 바다에 뛰어들어요. 김이 확 올라와요.)'},{say:'…시원해요.'}]:F.dug?[{say:'데이브는 말이 많아요.'}]:[{say:'…나도 데이브.'},{say:'데이브는 말이 많아요.'}]}},
 grssia:{name:'그르시아',zone:'breakerville',x:9,y:10,dir:'down',look:{hair:'#5A4A3A',skin:'#C99470',shirt:'#2E3B48',pants:'#2E3B48',belt:'#8A8F99',cap:'#3E4C5E',lashes:1,lips:'#B8606A'},badge:['죽이다','범인'],
  pos:()=>f().attack?[14,9]:[9,10],
  status:()=>f().lie?undefined:null,
  script:()=>{const F=f();
   if(!F.attack)return [{say:'오늘 밤은 제가 경비예요. 이치카하고 같이요.'},{say:'여기 바다는 너무 조용해요. 싫어요.'}];
   if(F.attack===1)return [{say:'이치카! 이치카!'},{say:'고스트가 이치카의 팔을 쐈어요. 그리고 플라스마 {수류탄|수류탄}이…'},{say:'핀 씨는 잔해 안 네트워크 노드로 갔어요! 가요!'}];
   if(!F.lie)return [{say:'싸움이 끝났어요. 그런데 타비아 부선장님이 안 보여요.'},{say:'저기… 토셰가 잔해에서 나와요. 혼자예요.'}];
   return null},
  after:'범인을 찾을 거예요. 엔포 가문의 이름으로요.',
  talk:()=>[
   {say:'이치카는 제 친구였어요. 같이 오래 일했어요.'},
   Q.grssia[0],
   {say:'타비아 부선장님도 죽었어요. 토셰는 수류탄이었대요.'},
   {say:'고스트를 누가 보냈어요? 그 사람이 진짜 범인이에요.'},
   Q.grssia[1],
   {say:'엔포 가문은 잊지 않아요. 범인한테 꼭 {복수할|복수하다} 거예요.',award:['죽이다','범인']}]},
 ichika:{name:'이치카',zone:'breakerville',x:16,y:7,dir:'up',look:{hair:'#1E1E24',skin:'#EAC4A0',shirt:'#2E3B48',pants:'#2E3B48',belt:'#8A8F99',style:'long',lashes:1,lips:'#C8646E'},
  hide:()=>!!f().attack,
  talk:()=>[{say:'추워요. 여기 {진눈깨비|진눈깨비}는 옆으로 와요.'},{say:'그르시아하고 저는 밤에 부두를 돌아요.'}]},
 ichikaBody:{name:'…',zone:'breakerville',x:15,y:9,dir:'down',still:1,
  look:{art:SCORCH},
  hide:()=>!f().attack,
  talk:()=>[{say:'이치카가 서 있던 자리예요. 아무것도 안 남았어요. 탄 자국만 있어요.'}]},
 tabiaBody:{name:'…',zone:'breakerville',x:16,y:9,dir:'down',still:1,look:{art:HELMET},
  hide:()=>!f().lie,
  talk:()=>[{say:'타비아의 헬멧이에요. 은색 천으로 덮여 있어요.'}]},
 tose:{name:'토셰',zone:'breakerville',x:14,y:7,dir:'down',look:{art:TOSE},
  hide:()=>f().attack===1,
  status:()=>f().attack===2&&!f().lie?'todo':null,
  script:()=>{const F=f();
   if(F.attack===2&&!F.lie)return [
    {who:'…',say:'조금 전. 잔해 안 어두운 방.'},
    {who:'타비아',say:'토셰? 그 총… {컨클루더|컨클루더}예요? 그게 왜 여기 있어요?'},
    {who:'토셰',say:'보면 안 되는 걸 봤어요.'},
    {who:'…',say:'탕! 아주 가까이에서 쐈어요. 타비아는 바로 죽었어요.'},
    {who:'…',say:'지금. 토셰가 잔해에서 나와요. 온몸이 {피투성이|피투성이}예요.'},
    {who:'…',say:'손에 헬멧이 있어요. 타비아의 헬멧이에요.'},
    {say:'고스트 수류탄이 타비아 씨를 잡았어요.'},
    {say:'제가 갔을 때는 벌써 늦었어요.'},
    {...Q.tose[0],who:'…'},
    {who:'…',say:'하지만 아무도 못 봤어요. 아무도 몰라요.',set:()=>{f().lie=1}}];
   if(F.lie)return [{say:'…내 뒤에 있어요. 위험하니까요.'}];
   return [{say:'여기는 제가 지켜요.'},{say:'잔해 안이 궁금해요? 저는 별로요.'}]},
  talk:()=>[]},
 basylB:{name:'베이질 목사',zone:'breakerville',x:21,y:11,dir:'down',look:{hair:'#ECECEC',skin:'#D9A88A',shirt:'#5A3A5E',pants:'#3A2E3A',style:'bald',coat:1},badge:['시체'],
  pos:()=>f().lie?[17,9]:[21,11],
  status:()=>f().lie?undefined:null,
  script:()=>{const F=f();
   if(F.attack===1)return [{say:'아스테리아 여신님! 숨어요, 숨어!'}];
   if(!F.lie)return [{say:'(꿀꺽) 이 조각 봐요! {렘넌트|렘넌트} 시대 거예요!'},{say:'비싸요, 비싸! 엔포 가문이 부자가 될 거예요.'}];
   return null},
  after:'아스테리아 여신님, 두 사람을 기억해 주세요.',
  talk:()=>[
   {say:'이치카는 아무것도 안 남았어요. 타비아는… 헬멧 하나뿐이에요.'},
   {say:'헬멧을 은색 천으로 덮었어요. 바람이 차요.'},
   Q.basylB[0],
   {say:'오늘은 술도 안 마셔요. 정말이에요.'},
   Q.basylB[1],
   {say:'아스테리아 여신님, 이 두 사람을 받아 주세요.',award:['시체']}]},
 keeper:{name:'로지 주인',zone:'breakerville',x:4,y:13,dir:'down',look:{hair:'#6A5A4A',skin:'#D7A77E',shirt:'#7A4A3A',pants:'#3A3530',style:'bald',beard:'#6A5A4A'},
  script:()=>{if(f().attack===1)return [{say:'빨리 안으로! 문 잠가요!'}];const q=Q.cafe[Math.random()*Q.cafe.length|0];return [{say:'어서 와요. 따뜻한 수프 있어요. 옛날 단어 연습해요.'},{...q,old:1},{say:'또 와요. 수프는 공짜예요.'}]},
  talk:()=>[]},
 finnB:{name:'핀',zone:'breakerville',x:11,y:11,dir:'down',look:FINN,
  hide:()=>!!f().attack,
  status:()=>f().mapped&&!f().attack?'todo':null,
  script:()=>{const F=f();
   if(!F.mapped)return [{say:'플렉살은 정말 신기해요. 몸이 고무 같아요.'},{say:'발생기만 찾으면 성실호가 관문을 지날 수 있어요.'}];
   return [
    {say:'밤이에요. 오늘 하루 길었어요.'},
    {who:'엘리',say:'오늘은 프레임 꿈 말고 좋은 꿈 꿔요.'},
    {who:'…',say:'그때, 바다가 움직여요. 조류가 깨져요.'},
    {who:'이치카',say:'(통신) 바다에서 뭐가 나와요! {고스트|고스트}예요! 많아요!'},
    {who:'…',say:'머리 없는 기계들. 다리 넷, 팔 넷. 게처럼 걸어요.'},
    {who:'…',say:'펑! 보라색 플라스마가 날아와요.'},
    {say:'잔해 안 {네트워크 노드|네트워크 노드}로 가야 돼요! 거기서 기계를 움직일 수 있어요!',set:()=>{f().attack=1}}]},
  talk:()=>[]},
 miterisB:{name:'미테리스',zone:'breakerville',x:21,y:15,dir:'left',hide:()=>!f().dug,look:{hair:'#6A3A22',skin:'#E0AE86',shirt:'#4A5A3A',pants:'#3A3A30',belt:'#C9A23A',style:'short',coat:1},
  script:()=>[{say:'궤도에서 다시 내려왔어요. 끝나면 같이 올라가요.'},{say:'파이브로 돌아가고 싶으면 비행기에 타요.'}],
  talk:()=>[]},
 ghost1:{name:'고스트',zone:'breakerville',x:6,y:7,dir:'down',look:ghostLook,hide:()=>!f().attack,
  talk:()=>f().attack===1?[{who:'…',say:'머리 없는 기계예요. 팔 넷, 다리 넷. 플라스마를 쏴요!'}]:[{who:'…',say:'데이브들이 찢은 고스트예요. 이제 안 움직여요.'}]},
 ghost2:{name:'고스트',zone:'breakerville',x:19,y:7,dir:'left',look:ghostLook,hide:()=>!f().attack,
  talk:()=>f().attack===1?[{who:'…',say:'고스트가 바다에서 올라왔어요. 열여덟 개래요!'}]:[{who:'…',say:'찢어진 고스트. 원래 머리가 없어요.'}]},
 ghost3:{name:'고스트',zone:'breakerville',x:9,y:8,dir:'right',look:ghostLook,hide:()=>!f().attack,
  talk:()=>f().attack===1?[{who:'…',say:'고스트가 버블에 구멍을 내요. 잔해에 물이 들어가요!'}]:[{who:'…',say:'고스트 조각. 아직 따뜻해요.'}]},
 /* ---------------- inside the wreck ---------------- */
 davrux2:{name:'다브룩스',zone:'wreck',x:10,y:12,dir:'down',look:{art:DAVRUX},
  status:()=>{const F=f();if(!F.mapped)return 'todo';if(F.attack===2&&!F.dug&&b('범인')&&b('시체'))return 'todo';return null},
  script:()=>{const F=f();
   if(!F.mapped)return [
    {say:'왔어요? 우리 팀이 밤새 굴을 다 돌았어요.'},
    {say:'여기 지도예요. 발생기는 맨 위 방에 있어요. 돌에 묻혀 있어요.',give:'잔해 지도'},
    {say:'(멀리서 베이질 목사님이 소리쳐요) "렘넌트 시대 물건! 비싸요!"'},
    {who:'…',say:'그 시간, 잔해 깊은 곳.'},
    {who:'토셰',say:'(작은 지도를 보면서) 보스 말이 맞아요. 여기예요.'},
    {who:'…',say:'토셰가 벽의 숨은 문을 열어요. 안에 아주 긴 총이 있어요.'},
    {who:'…',say:'컨클루더 저격총이에요. 토셰가 총을 몰래 가져가요.'},
    {who:'토셰',say:'아무도 몰라야 돼요.'},
    {who:'…',say:'그리고 밤이 와요.',set:()=>{f().mapped=1}}];
   if(!F.attack)return [{say:'밤에는 일 안 해요. 로지에 가서 쉬어요.'}];
   if(F.attack===1)return [{say:'고스트가 버블에 구멍을 내요! 물이 들어와요!'},{say:'우리 경비가 폭발에 바다로 날아갔어요… 못 나와요.'},{say:'핀 씨는 왼쪽 굴 끝, 네트워크 노드에 있어요!'}];
   if(!(b('범인')&&b('시체')))return [{say:'오늘은 일 안 해요. 죽은 사람들이 먼저예요.'},{say:'그르시아하고 베이질 목사님이 밖에 있어요.'}];
   if(!F.dug)return [
    {say:'자, 발생기를 파요! 모두 힘내요!'},
    {who:'…',say:'플렉살들이 돌 사이로 쭉쭉 늘어나요.'},
    BANK[6],
    {who:'…',say:'쿵! 돌이 떨어지고 빨간 가시가 보여요.'},
    {say:'다 팠어요. 핀 씨한테 가요. 발생기 방에 있어요.',set:()=>{f().dug=1}}];
   return [{say:'플렉살 팀 최고죠? 30%… 아니, 계약대로요. 하하.'}]},
  talk:()=>[]},
 finnW:{name:'핀',zone:'wreck',x:2,y:3,dir:'left',look:FINN,
  hide:()=>!f().attack,
  pos:()=>f().attack===1?[2,3]:[14,4],
  status:()=>{const F=f();return F.attack===1||(F.dug&&!F.done)?'todo':null},
  script:()=>{const F=f();
   if(F.attack===1)return [
    {say:'왔어요? 여기 노드에서 부두 기계가 다 보여요.'},
    {say:'크레인 레일 위에 {전자빔 절단기|전자빔 절단기}가 있어요. 그걸 쓸 수 있어요!'},
    {w:'공격하다',build:['절단기로','고스트를','공격해요']},
    {who:'…',say:'번쩍! 번개 같은 빛이 고스트를 때려요. 크레인 레일이 무너져요.'},
    {who:'…',say:'그때 데이브와 데이브가 100미터 위에서 뛰어내려요.'},
    {who:'…',say:'쿵! 두 사람이 장미색으로 빛나면서 일어나요.'},
    {who:'데이브',say:'고스트는 쉬워요.'},
    {who:'…',say:'데이브들이 고스트를 하나씩 찢어요. 그리고… 조용해져요.',set:()=>{f().attack=2}}];
   if(!F.dug)return [{say:'발생기는 저 돌 아래에 있어요.'},{say:'다브룩스 팀이 파야 돼요. 입구 홀에 있어요.'}];
   if(!F.done)return [
    {say:'이게 {ZPZ 발생기|ZPZ 발생기}예요. 공 네 개, 빨간 가시.'},
    {who:'…',say:'10미터짜리 공 네 개. 보라색 불꽃이 탁탁 튀어요.'},
    {who:'미테리스',say:'(통신) 화물기가 준비됐대요. 크레인으로 올려요!'},
    {who:'…',say:'발생기가 천천히 올라가서 화물기에 실려요.'},
    {who:'데이브',say:'우리도 데려가요.'},
    {who:'데이브',say:'경호원. 계속.'},
    {say:'좋아요, 같이 가요. 성실호에는 경호원이 필요해요.',set:()=>{f().done=1}},
    {who:'엘리',say:'이제 집에 가요. 곤디아에 도착하면 8년이 지났을 거예요.',finale:1}];
   return [{say:'성실호가 기다려요. 이제 관문을 지날 수 있어요.'}]},
  talk:()=>[]},
};
const FOLLOW={name:'엘리',look:ELLIE,when:()=>!!f().ambush,talk:()=>{const F=f();let s;
 if(ZID==='lestari')s=F.beam?'우리를 쫓아오던 배… 정말 끝났을까요?':'핀은 할 수 있어요. 믿어요!';
 else if(ZID==='bubbletown')s='여기는 중력이 아주 약해요. 점프! 하하.';
 else if(ZID==='wreck')s=F.attack===1?'핀! 핀은 괜찮아요?':'굴이 너무 좁아요. 플렉살은 어떻게 다녀요?';
 else s=F.attack===1?'핀이 노드에 있어요! 빨리 가요!':F.attack===2&&!F.done?'타비아… 이치카… 믿을 수 없어요.':F.done?'집에 가요. 8년 뒤의 곤디아로.':'바다 냄새… 짠 냄새예요. 소금 냄새!';
 return [{say:s}]}};

const INTRO=[{who:'레스타리',say:'하늘의 관문까지 한 시간.'},{who:'레스타리',say:'모든 승객은 큐폴라로 오세요.'}];
const DONE=['2장 끝! ZPZ 발생기가 화물기에 실렸어요.','데이브와 데이브가 성실호의 경호원이 돼요.','멀리 어딘가에서, 기계 몸이 된 마르첼루가 맹세해요.','"끝까지 추격할 거예요."','토셰의 비밀은 아직 아무도 몰라요.','일지에서 단어를 다시 볼 수 있어요.'];

function questText(){
 const F=f();
 if(F.done)return '2장 끝 · 일지에서 복습해요';
 if(!F.captain)return '큐폴라 · 우조마 선장님을 만나요';
 if(!F.gift)return hasItem('피의 병')?'큐폴라 · 선장님한테 병을 드려요':'라운지 · 베이질 목사님을 찾아요';
 if(!F.ambush)return '큐폴라 · 프레임 끝 · 엘리한테 가요';
 if(!F.beam)return '엔진실 · 핀한테 가요!';
 if(!b('잔해'))return '파이브 · 부두 원반에서 요루를 만나요';
 if(!F.bubble)return hasItem('도시락')?'부두 원반 · 요루한테 도시락을 줘요':'버블타운 · 오키미살을 찾아요';
 if(!b('위성'))return '부두 원반 · 조종사 미테리스를 만나요';
 if(!b('계약'))return '브레이커빌 · 타비아를 만나요';
 if(!F.contract)return hasItem('계약서')?'브레이커빌 · 타비아한테 계약서를 줘요':'포츠헤드 · 다브룩스를 만나요';
 if(!F.daves)return hasItem('은행 기록')?'브레이커빌 · 타비아한테 기록을 보여 줘요':'부두 끝 · 데이브와 데이브를 만나요';
 if(!F.mapped)return '잔해 안 · 다브룩스 팀을 만나요';
 if(!F.attack)return '브레이커빌 · 밤 · 핀을 찾아요';
 if(F.attack===1)return '잔해 안 · 네트워크 노드로! 핀을 도와요';
 if(!F.lie)return '포츠헤드 · 토셰가 나와요';
 if(!b('범인'))return '포츠헤드 · 그르시아한테 가요';
 if(!b('시체'))return '포츠헤드 · 베이질 목사님한테 가요';
 if(!F.dug)return '잔해 안 · 다브룩스하고 발생기를 파요';
 return '잔해 · 발생기 방 · 핀한테 가요';
}
return {WORDS,DICT,CONFUSE,BANK,Q,ITEMS,ZONES,NPC,FOLLOW,INTRO,DONE,questText,TILES};
}});
