CHAPTERS.push({id:'ch7',n:'7장',title:'돌로드',place:'성실호 · 돌로드 · 카포 프로이스',words:16,save:'seongsilho-ch7',color:'#7A4F9A',
 start:{zone:'ship',x:3,y:5,dir:'up'},introWho:'성실호',
 make:()=>{
/* =====================================================================
   7장 · 돌로드 — the finale. Book pin: c031–c035, opened by the end of c022 (the Polkadav docks).
   True at this point: 31 y 8 m have passed on Gondiar since departure; Finn (owner of the Diligent) has aged only months.
   The marchioness, Finn's father and Variaka were killed by the occupation's missile (c029); Gondiar is occupied (c028).
   Aboard: Otylia (early 60s, grey) with Laurella and Dushan; Zelinda (now marchioness) and Haian; Everett and his children;
   Aljan (doctor); ~8,000 Gath crew; Dejean (grey); Ellie; the Daves; Bensath; "Gyvoy".
   Not aboard: Josias (on the Arcadia's Moon), Terence/Jimena/Vanilda/Medusa (on the Aeacus).
   "Gyvoy" is the Celestial agent Dagon (the real Gyvoy was murdered decades ago, c030). His palm edited Finn's anger and
   he nervejammed and memory-wiped Ellie (shown via rekaul, c033). Bensath is a secret uranic traitor and leaves with him.
   Finn himself reprograms the Engine (manipulated) and sends Boksrock at Kelowan; the empress dies from Thyra's kestrel
   sprites, not from Boksrock (c035). The 10,000 g flight is ZPZ + Engine momentum through the anchor ship, not a Gate
   transit; it ends AT the Capo Frois ingress Gate. Dagon carries 3,000 t of degenerate antimatter toward Capo Frois.
   Lore source: notes/canon.md + notes/chapters-outline.md (7장). Interludes (막간) show c031, c033–c034 and c035.
   ===================================================================== */
const WORDS=['진실','잊다','목격자','중력','폭풍','번개','갇히다','탈출하다','믿다','의무','돌아가시다','복수','분노','조종당하다','충돌하다','배신자'];
const DICT={
 '진실':{k:'거짓이 아닌 진짜 이야기.',e:'truth',ex:'엘리가 그날 밤의 진실을 말했어요.',hj:'眞實 · 眞 = 사진(寫眞)의 진 · 實 = 실제(實際)의 실'},
 '잊다':{k:'알던 것이 머리에서 없어져요. "기억하다"의 반대.',e:'to forget',ex:'엘리는 그날 밤 일을 다 잊었어요.',hj:'고유어 · 잊어버리다 = 완전히 잊다'},
 '목격자':{k:'일이 생길 때 그걸 직접 본 사람.',e:'(eye)witness',ex:'파블로가 그날 밤의 목격자예요.',hj:'目擊者 · 目 = 목표(目標)의 목 · 者 = 사람'},
 '중력':{k:'물건을 아래로 당기는 힘. 크면 몸이 무거워요.',e:'gravity',ex:'엔진 기지는 중력이 2.5배예요.',hj:'重力 · 重 = 무겁다 · 力 = 노력(努力)의 력'},
 '폭풍':{k:'아주 센 바람. 비나 번개가 같이 와요.',e:'storm',ex:'돌로드에는 폭풍이 끝없이 불어요.',hj:'暴風 · 暴 = 폭발(爆發)과 소리가 같아요 · 風 = 바람'},
 '번개':{k:'폭풍 때 하늘에서 "번쩍!" 하는 빛.',e:'lightning',ex:'구름 사이로 번개가 쳐요.',hj:'고유어 · 번쩍 · 번개는 빛, 천둥은 소리'},
 '갇히다':{k:'나갈 수 없는 곳에 있게 돼요.',e:'to be trapped, locked in',ex:'우리는 엔진 기지에 갇혔어요.',hj:'고유어 · 가두다(남을 못 나가게 해요) → 갇히다'},
 '탈출하다':{k:'위험한 곳이나 갇힌 곳에서 빠져나가요.',e:'to escape',ex:'앵커선을 타고 탈출했어요.',hj:'脫出 · 出 = 출발(出發)의 출'},
 '믿다':{k:'진짜라고 생각해요. 또는 사람을 의심하지 않아요.',e:'to believe; to trust',ex:'가족은 핀을 믿어요.',hj:'고유어 · 믿음 = 믿는 마음'},
 '의무':{k:'꼭 해야 하는 일. 책임.',e:'duty, obligation',ex:'곤디아를 지키는 게 제 의무예요.',hj:'義務 · 務 = 업무(業務)의 무'},
 '돌아가시다':{k:'"죽다"의 높임말. 부모님이나 어른한테 써요.',e:'to pass away (honorific)',ex:'핀의 부모님이 돌아가셨어요.',hj:'고유어 · 돌아가다(원래 곳으로 가다)와 뜻이 달라요!'},
 '복수':{k:'나한테 나쁜 일을 한 사람한테 똑같이 갚아요.',e:'revenge',ex:'에버렛은 복수를 원해요.',hj:'復讐 · 復 = 회복(回復)의 복'},
 '분노':{k:'아주 크게 화가 난 마음.',e:'rage, fury',ex:'핀의 분노가 점점 커져요.',hj:'憤怒 · 怒 = 화내다'},
 '조종당하다':{k:'다른 사람이 내 마음이나 몸을 마음대로 움직여요.',e:'to be manipulated, controlled',ex:'핀은 기보이한테 조종당했어요.',hj:'操縱 · 조종사(操縱士)의 조종 + 당하다(나쁜 일을 받아요)'},
 '충돌하다':{k:'두 개가 아주 세게 부딪혀요.',e:'to collide, crash into',ex:'복스록이 켈로완에 충돌할 거예요.',hj:'衝突 · 突 = 갑자기, 세게'},
 '배신자':{k:'친구나 내 편을 배신한 사람.',e:'traitor',ex:'벤사스는 배신자였어요.',hj:'背信者 · 배신하다(3장) + 者 = 사람'},
 /* glosses for words that appear in lines but are not badges */
 '레콜':{k:'옛날 기억을 다시 보게 하는 약. 코로 들이마셔요. 위험해요.',e:'rekaul (memory-replay drug)'},
 '너브잼':{k:'신경을 막아서 몸을 못 움직이게 하는 무기.',e:'nervejam'},
 '셀레스철':{k:'인간보다 강한 종족. 은하를 다스려요.',e:'Celestial'},
 '유버스터':{k:'사람의 기억을 아기처럼 다 지우는 기계.',e:'YouBuster (mind-wiper)'},
 '복스록':{k:'켈로완 별에서 제일 가까운 작은 행성. 빨간 들판이 있어요.',e:'Boksrock (a small rust-red world)'},
 '켈로완':{k:'여제가 사는 셀레스철의 왕좌 행성. 8억 명이 살아요.',e:'Kelowan (the throne world)'},
 '앵커선':{k:'엔진 기지에서 나는 세모 날개 배. 길이 120미터.',e:'anchor ship (a tri-delta craft)'},
 '강하선':{k:'큰 배에서 행성으로 내려가는 작은 배.',e:'drop ship'},
 '접속하다':{k:'머리나 기계를 다른 기계에 연결해요.',e:'to connect, link in'},
 '대가를 치르다':{k:'나쁜 일을 한 값을 받아요.',e:'to pay the price'},
 '칭호':{k:'"후작", "여왕" 같은 높은 이름.',e:'title (rank)'},
 '후작':{k:'귀족 이름. 곤디아의 산타 로사를 다스리는 사람.',e:'marquis / marchioness'},
 '새언니':{k:'여자가 오빠의 아내를 부르는 말.',e:'sister-in-law (brother\'s wife)'},
 '성녀':{k:'아주 착하고 거룩한 여자. 개스들이 오틸리아를 이렇게 불러요.',e:'saint (female)'},
 '고스트':{k:'머리가 없는 셀레스철 전투 기계.',e:'Ghost (headless combat machine)'},
 '반물질':{k:'아주 작아도 엄청나게 크게 터지는 물질.',e:'antimatter'},
 '스카이훅':{k:'궤도에서 구름 속까지 내려오는 아주 긴 줄.',e:'skyhook (a tether)'},
 '케스트럴 스프라이트':{k:'하늘에 숨어 떠다니는 아주 작은 파괴 기계.',e:'kestrel sprites (sabotage drones)'},
 '운동량':{k:'움직이는 힘의 크기. 엔진이 이걸 옮겨요.',e:'momentum'},
 '프리깃':{k:'빠르고 작은 군함.',e:'frigate'},
};
/* sounds-alike / looks-alike words, used when a listening question is built */
const CONFUSE={'진실':['진심','지식'],'잊다':['잃다','읽다'],'목격자':['목적지','목걸이'],'중력':['노력','전력'],'폭풍':['폭탄','폭발'],'번개':['번호','베개'],
 '갇히다':['닫히다','같이'],'탈출하다':['출발하다','탈락하다'],'믿다':['밀다','묻다'],'의무':['의미','의견'],'돌아가시다':['돌아가다','돌려주다'],
 '복수':['회복','보수'],'분노':['분위기','불안'],'조종당하다':['조종하다','조심하다'],'충돌하다':['출동하다','충전하다'],'배신자':['배신하다','목격자']};

/* extra review questions (the terminal uses these too, alongside every NPC question) */
const BANK=[
 {w:'진실',ask:'거짓말은 그만해요. 이제 ___을 말해 줘요.',opts:[['진실',1],['진심',0,'진심은 진짜 마음이에요. 진짜 이야기는 "진실".']]},
 {w:'잊다',ask:'열쇠를 어디에 뒀는지 ___.',opts:[['잊어버렸어요',1],['잃어버렸어요',0,'잃어버리다는 물건이 없어지는 거예요. 어디에 뒀는지 기억이 없으면 "잊어버렸어요".']]},
 {w:'목격자',ask:'사고를 직접 본 ___가 경찰한테 말했어요.',opts:[['목격자',1],['관중',0,'관중은 경기를 보는 사람들이에요. 사고를 본 사람은 "목격자".']]},
 {w:'중력',ask:'우주 정거장에는 ___이 없어서 몸이 둥둥 떠요.',opts:[['중력',1],['산소',0,'산소가 없으면 숨을 못 쉬어요. 몸이 뜨는 건 "중력"이 없어서예요.']]},
 {w:'폭풍',ask:'___ 때문에 비행기가 못 떠요.',opts:[['폭풍',1],['폭탄',0,'폭탄은 터지는 무기예요. 센 바람은 "폭풍".']]},
 {w:'번개',ask:'___가 번쩍! 그리고 천둥이 우르릉!',opts:[['번개',1],['베개',0,'베개는 잘 때 머리 밑에 둬요! 번쩍 빛은 "번개".']]},
 {w:'갇히다',ask:'엘리베이터가 멈춰서 한 시간 동안 ___.',opts:[['갇혔어요',1],['가뒀어요',0,'가두다는 내가 남을 못 나가게 하는 거예요. 내가 못 나가면 "갇혔어요".']]},
 {w:'탈출하다',ask:'불이 났어요! 빨리 ___해요!',opts:[['탈출',1],['출근',0,'出은 같아요! 출근은 회사에 가는 거예요. 위험한 곳에서 나가면 "탈출".']]},
 {w:'믿다',ask:'친구 말이 진짜예요. 저는 친구를 ___.',opts:[['믿어요',1],['밀어요',0,'밀다는 손으로 미는 거예요. 진짜라고 생각해요 → "믿어요".']]},
 {w:'의무',ask:'군인은 나라를 지킬 ___가 있어요.',opts:[['의무',1],['의미',0,'소리가 비슷해요! 의미는 뜻이에요. 꼭 해야 하는 일 → "의무".']]},
 {w:'돌아가시다',ask:'할아버지가 작년에 ___.',opts:[['돌아가셨어요',1],['돌아갔어요',0,'돌아가다는 원래 곳으로 가는 거예요. 어른이 죽으면 높임말 "돌아가셨어요".']]},
 {w:'돌아가시다',ask:'핀은 부모님이 살아 계신 ___. 그런데 돌아가셨어요.',opts:[['줄 알았어요',1],['줄 몰랐어요',0,'"줄 몰랐어요"는 "살아 계신 걸 몰랐다"예요. 핀은 살아 계신다고 생각했어요 → "줄 알았어요".']]},
 {w:'복수',ask:'영화에서 주인공이 가족을 위해 ___해요.',opts:[['복수',1],['회복',0,'회복은 다시 건강해지는 거예요. 똑같이 갚아 주는 건 "복수".']]},
 {w:'분노',ask:'뉴스를 보고 사람들이 ___했어요. 아주 크게 화났어요.',opts:[['분노',1],['감사',0,'감사는 고마운 마음이에요. 크게 화났어요 → "분노".']]},
 {w:'조종당하다',ask:'핀은 자기 생각인 줄 알았어요. 사실은 ___.',opts:[['조종당했어요',1],['조종했어요',0,'"조종했어요"는 핀이 남을 움직인 거예요. 남이 핀을 움직였으면 "조종당했어요".']]},
 {w:'충돌하다',ask:'두 차가 길에서 ___했어요. 쾅!',opts:[['충돌',1],['출발',0,'출발은 떠나는 거예요. 쾅! 부딪혔으면 "충돌".']]},
 {w:'배신자',ask:'기보이가 좋은 사람___ 알았어요. 그런데 배신자였어요.',opts:[['인 줄',1],['는 줄',0,'명사 뒤에는 "인 줄 알았어요"예요. → 좋은 사람인 줄 알았어요.']]},
];

const Q={ // NPC questions, kept here so review can reuse them
 otylia:[
  {who:'…',w:'돌아가시다',ask:'핀의 엄마하고 아빠가 ___. (높임말)',done:'핀의 엄마하고 아빠가 돌아가셨어요.',opts:[['돌아가셨어요',1],['죽었어요',0,'뜻은 같아요. 그런데 부모님한테는 높임말 "돌아가셨어요"를 써요.'],['돌아갔어요',0,'돌아가다는 원래 곳으로 가는 거예요. 죽음의 높임말은 "돌아가셨어요".']]},
  {who:'…',w:'믿다',ask:'핀은 그 말을 ___ 수 없었어요.',opts:[['믿을',1],['밀',0,'밀다는 손으로 미는 거예요. 진짜라고 생각해요 → "믿을 수 없었어요".'],['입을',0,'입다는 옷을 입는 거예요. 진짜라고 생각 못 해요 → "믿을 수 없었어요".']]},
 ],
 zelinda:[
  {who:'…',w:'의무',ask:'꼭 해야 하는 일. 그건 ___예요.',opts:[['의무',1],['의견',0,'의견은 내 생각이에요. 꼭 해야 하는 일은 "의무".'],['취미',0,'취미는 좋아서 하는 일이에요. 꼭 해야 하면 "의무".']]},
  {w:'의무',ask:'후작은 칭호가 아니라 ___예요.',opts:[['의무',1],['의미',0,'소리가 비슷해요! 의미는 뜻이에요. 해야 하는 일 → "의무".']]},
 ],
 everett:[
  {who:'…',w:'분노',ask:'아주 크게 화가 난 마음. 그건 ___예요.',opts:[['분노',1],['불안',0,'불안은 걱정되는 마음이에요. 아주 큰 화는 "분노".'],['슬픔',0,'슬픔도 있어요. 그런데 아주 크게 화난 마음은 "분노".']]},
  {who:'…',w:'복수',ask:'나쁜 일을 한 사람한테 똑같이 갚아요. 그건 ___예요.',opts:[['복수',1],['회복',0,'회복은 다시 건강해지는 거예요. 復은 같아요! 갚는 건 "복수".'],['보수',0,'소리가 비슷해요! 보수는 일하고 받는 돈이에요. 갚는 건 "복수".']]},
 ],
 finnLink:[
  {who:'…',w:'복수',ask:'핀은 부모님 때문에 ___하고 싶어요.',opts:[['복수',1],['반납',0,'반납은 빌린 걸 돌려줄 때예요. 똑같이 갚아 주는 건 "복수".']]},
  {who:'…',w:'분노',ask:'핀의 눈이 빨개요. ___가 아주 커요.',opts:[['분노',1],['번개',0,'번개는 하늘의 빛이에요. 아주 큰 화는 "분노".']]},
 ],
 dave1:[
  {who:'…',w:'중력',ask:'물건을 아래로 당기는 힘은 ___이에요.',opts:[['중력',1],['노력',0,'力은 같아요! 노력은 열심히 하는 거예요. 당기는 힘은 "중력".'],['전력',0,'전력은 전기의 힘이에요. 아래로 당기는 힘은 "중력".']]},
  {who:'…',w:'중력',ask:'달은 ___이 약해서 몸이 가벼워요.',opts:[['중력',1],['무게',0,'무게는 물건이 무거운 정도예요. 달이 당기는 힘 → "중력".']]},
 ],
 bensath:[
  {who:'…',w:'폭풍',ask:'아주 센 바람과 비. 그건 ___이에요.',opts:[['폭풍',1],['폭발',0,'폭발은 "쾅" 터지는 거예요. 센 바람은 "폭풍".'],['파도',0,'파도는 바다의 물결이에요. 센 바람은 "폭풍".']]},
  {who:'…',w:'번개',ask:'번쩍! 폭풍 때 하늘에서 치는 빛은 ___예요.',opts:[['번개',1],['천둥',0,'천둥은 "우르릉" 소리예요. 번쩍 빛은 "번개".'],['별',0,'별은 조용히 빛나요. 번쩍 빛은 "번개".']]},
 ],
 dave2:[
  {who:'…',w:'갇히다',ask:'강하선이 없어서 못 나가요. 우리는 ___.',opts:[['갇혔어요',1],['닫혔어요',0,'닫히다는 문이 주어예요. 사람이 못 나가면 "갇혔어요".'],['가졌어요',0,'가지다는 물건이 내 거예요. 못 나가면 "갇혔어요".']]},
  {who:'…',w:'배신자',ask:'친구를 배신한 사람은 ___예요.',opts:[['배신자',1],['목격자',0,'목격자는 일을 직접 본 사람이에요. 배신한 사람은 "배신자".'],['경호원',0,'경호원은 사람을 지켜요. 배신한 사람은 "배신자".']]},
 ],
 finnD:[
  {w:'충돌하다',ask:'복스록이 켈로완에 ___ 거예요.',opts:[['충돌할',1],['출발할',0,'출발은 떠나는 거예요. 아주 세게 부딪히면 "충돌할 거예요".'],['충전할',0,'충전은 배터리에 전기를 넣는 거예요. 부딪히면 "충돌할 거예요".']]},
  {who:'…',w:'탈출하다',ask:'갇힌 곳에서 빠져나가요. 그건 ___이에요.',opts:[['탈출',1],['출발',0,'出은 같아요! 그냥 떠나면 출발. 갇힌 곳에서 나가면 "탈출".'],['탈락',0,'탈락은 시합에서 떨어지는 거예요. 빠져나가면 "탈출".']]},
 ],
 pablo:[
  {w:'목격자',ask:'일이 생길 때 직접 본 사람. 파블로는 ___예요.',opts:[['목격자',1],['범인',0,'범인은 나쁜 일을 한 사람이에요. 직접 본 사람은 "목격자".'],['기자',0,'기자는 뉴스를 쓰는 사람이에요. 직접 본 사람 → "목격자".']]},
  {who:'…',w:'목격자',ask:'경찰이 ___를 찾아요. "누가 봤어요?"',opts:[['목격자',1],['배신자',0,'배신자는 친구를 배신한 사람이에요. 본 사람은 "목격자".']]},
 ],
 ellie:[
  {w:'잊다',ask:'기보이가 제 기억을 지웠어요. 그래서 그날 밤을 다 ___.',opts:[['잊었어요',1],['잃었어요',0,'잃다는 물건이 없어지는 거예요. 기억이 없어지면 "잊었어요".'],['읽었어요',0,'소리가 비슷해요! 읽다는 책을 읽는 거예요. 기억은 "잊었어요".']]},
  {who:'…',w:'진실',ask:'거짓이 아닌 진짜 이야기. 그게 ___이에요.',opts:[['진실',1],['진심',0,'진심은 진짜 마음이에요. 진짜 이야기는 "진실".'],['거짓말',0,'거짓말은 진실의 반대예요!']]},
  {who:'…',w:'조종당하다',ask:'기보이가 핀의 생각을 몰래 바꿨어요. 핀은 ___.',opts:[['조종당했어요',1],['조종했어요',0,'"조종했어요"는 핀이 남을 움직인 거예요. 남이 핀을 마음대로 움직이면 "조종당했어요".'],['조심했어요',0,'조심하다는 주의하는 거예요. 남이 핀을 마음대로 움직이면 "조종당했어요".']]},
 ],
 dejean:[
  {w:'탈출하다',ask:'프리깃이 쫓아와서 ___ 수 없는 줄 알았어요.',opts:[['탈출할',1],['탈출한',0,'"수 없다" 앞에는 "-(으)ㄹ"이 와요. → 탈출할 수 없는 줄 알았어요.'],['탈출하는',0,'"수" 앞에는 "-(으)ㄹ"이 와요. → 탈출할 수 없는 줄 알았어요.']]},
 ],
 zelindaC:[
  {w:'의무',ask:'곤디아 사람들을 지키는 건 내 ___야.',opts:[['의무',1],['복수',0,'복수는 똑같이 갚는 거예요. 지키는 책임은 "의무".']]},
 ],
 old:[ // earlier chapters' words, no badges (the doctor's review)
  {ask:'토셰는 처음부터 우리를 ___. 거짓말만 했어요.',opts:[['배신했어요',1],['배웠어요',0,'배우다는 공부하는 거예요. 친구를 속였어요 → "배신했어요".']]},
  {ask:'엘리가 너브잼을 ___. 몸을 못 움직였어요.',opts:[['맞았어요',1],['받았어요',0,'선물은 받아요. 공격이나 주사는 "맞아요".']]},
  {ask:'산소가 없어서 숨을 못 쉬어요. ___할 것 같아요.',opts:[['질식',1],['진실',0,'진실은 진짜 이야기예요. 숨을 못 쉬면 "질식".']]},
  {ask:'해적들이 숨어서 기다렸어요. ___이었어요!',opts:[['매복',1],['매일',0,'매일은 날마다예요. 숨어서 기다리면 "매복".']]},
  {ask:'사람을 죽인 나쁜 사람을 ___이라고 해요.',opts:[['범인',1],['선수',0,'선수는 경기하는 사람이에요. 나쁜 일을 한 사람은 "범인".']]},
  {ask:'오틸리아는 조사이어스하고 ___. 아이가 둘이에요.',opts:[['결혼했어요',1],['교환했어요',0,'교환은 물건을 바꾸는 거예요. 부부가 됐어요 → "결혼했어요".']]},
  {ask:'비가 오기 ___ 모두 배 안으로 들어갔어요.',opts:[['전에',1],['후에',0,'비가 온 후에는 너무 늦어요! 먼저 들어갔어요 → "오기 전에".']]},
  {ask:'강아지가 멍멍 ___.',opts:[['짖어요',1],['지어요',0,'짓다는 집이나 밥을 만들 때예요. 강아지는 "짖어요".']]},
 ],
};

const ITEMS={'우주복':'드장 선장이 준 우주복. 무거운 중력에도 버텨요.','물병':'데이브가 준 물. 핀이 엔진에서 나오면 줘야 돼요.','레콜 병':'엘리가 그날 밤을 다시 본 약. 진료실 금고에서 꺼냈어요.'};

const f=()=>state.f;
const hasItem=i=>state.items.includes(i);
const got=w=>state.badges.includes(w);
const acc=()=>!!(state&&state.f.woke&&!state.f.jump); // red alert: frigates 5 hours out, until the 10,000 g flight
const vary=(x,y,a)=>a[(x*7+y*13)%a.length]; // things: same position pick as the engine, for lines that depend on flags
const WALL7=(x,y)=>acc()?vary(x,y,['벽의 경보등이 빨갛게 깜빡여요.','빨간 불빛 때문에 벽이 붉어요.']):vary(x,y,['성실호의 벽이에요. 매끈하고 조용해요.','벽 등불이 따뜻하게 비춰요.']);

/* ---------- pixel helpers for this chapter ---------- */
const M=rows=>rows.map(s=>s+[...s].reverse().join('')); // mirror a half sprite into a symmetric one
const OL='#1B1E2B';
function alertTint(X,Y,t){if(ZID==='ship'&&acc()){g.fillStyle=`rgba(210,60,50,${.05+.08*(Math.sin(t/260)+1)/2})`;g.fillRect(X,Y,16,16)}}
function blockOf(x,y){const c=at(x,y);let ox=x,oy=y;while(at(ox-1,y)===c)ox--;while(at(x,oy-1)===c)oy--;let w=1,h=1;while(at(ox+w,oy)===c)w++;while(at(ox,oy+h)===c)h++;return {ox,oy,w,h}}
/* draw a multi-tile object once per frame, from its first visible tile, so it is never cut by the tile grid */
function blockOnce(X,Y,x,y,fn){const b=blockOf(x,y);const fx=Math.max(b.ox,Math.floor(CAM.x/16)),fy=Math.max(b.oy,Math.floor(CAM.y/16));if(x!==fx||y!==fy)return;fn(X-(x-b.ox)*16,Y-(y-b.oy)*16,b.w,b.h,b.ox,b.oy)}
const SPR={};
function spr(k,w,h,draw){if(SPR[k])return SPR[k];const c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d');draw((a,b,ww,hh,col)=>{x.fillStyle=col;x.fillRect(a,b,ww,hh)});return SPR[k]=c}
function tri(d,ax,ay,by,hw,col){for(let y=ay;y<=by;y++){const w=Math.round((y-ay)/(by-ay)*hw);d(ax-w,y,2*w+1,1,col)}}
const dropShip=()=>spr('drop',80,32,d=>{ // the stolen Kajval drop ship, top view, nose right
 const S=[[26,3,22,6,'#33373E'],[30,1,14,2,'#33373E'],[26,23,22,6,'#33373E'],[30,29,14,2,'#33373E'],[8,9,58,14,'#3C4048'],[66,11,6,10,'#3C4048'],[72,13,4,6,'#3C4048'],[2,10,8,5,'#2A2D33'],[2,17,8,5,'#2A2D33']];
 S.forEach(s=>d(s[0]-1,s[1]-1,s[2]+2,s[3]+2,OL));S.forEach(s=>d(...s));
 d(10,10,54,2,'#5A606A');d(10,20,54,2,'#30343B');d(30,9,1,14,'#2E3238');d(48,9,1,14,'#2E3238');d(26,3,22,1,'#4A505A');d(26,23,22,1,'#4A505A');
 d(40,4,6,1,'#E8962A');d(40,27,6,1,'#E8962A');d(62,12,8,4,'#E8B73A');d(63,12,3,1,'#FFE7A0');d(1,11,2,3,'#69CFD8');d(1,18,2,3,'#69CFD8')});
const anchorShip=()=>spr('anchor',64,48,d=>{ // the 120 m tri-delta anchor ship, top view, nose up
 tri(d,13,15,47,12,OL);tri(d,51,15,47,12,OL);tri(d,13,17,46,11,'#9AA3AB');tri(d,51,17,46,11,'#9AA3AB');
 tri(d,32,0,41,19,OL);tri(d,32,2,40,18,'#C3CAD1');
 for(let y=2;y<=40;y++){const w=Math.round((y-2)/38*18);d(33,y,w,1,'#A9B1B9')}
 d(32,8,1,32,'#7E878F');d(23,30,19,1,'#8E979F');d(18,37,29,1,'#8E979F');d(30,11,5,3,'#47D6C2');d(31,11,2,1,'#BFF5EA');
 d(13,17,1,2,'#47D6C2');d(51,17,1,2,'#47D6C2');d(25,41,4,2,'#FFB86A');d(35,41,4,2,'#FFB86A');d(8,46,4,1,'#FFB86A');d(52,46,4,1,'#FFB86A')});
/* Dolod's storm: banded purple-orange layers that drift and braid, with lightning */
const STORM=['#2E2228','#43303A','#5A3A40','#7A4A4E','#9A5E5A','#B87468','#D08A78','#B87468','#9A5E5A','#7A4A4E','#5A3A40'];
function storm(X,Y,x,y,t,x0,y0,w,h){
 for(let i=x0;i<x0+w;i+=2)for(let j=y0;j<y0+h;j+=2){const wx=x*16+i,wy=y*16+j;
  const v=wy*.2+2.4*Math.sin((wx+t*.03)/21)+1.3*Math.sin((wx*.7-t*.05)/9);const n=STORM.length;r(X+i,Y+j,2,2,STORM[((Math.floor(v)%n)+n)%n])}
 const b=bolt(t);if(!b)return;
 g.save();g.beginPath();g.rect(X+x0,Y+y0,w,h);g.clip();
 g.fillStyle='rgba(255,246,230,.28)';g.fillRect(X+x0,Y+y0,w,h);
 let px=b.x-CAM.x,py=-CAM.y;
 for(let i=0;i<17;i++){const nx=px+(hash(b.k,i)%7)-3;r(Math.min(px,nx),py,Math.abs(nx-px)+2,4,'#FFF6D8');
  if(i%5===3){const bx=nx+(hash(b.k+1,i)%2?6:-6);r(Math.min(nx,bx),py+3,Math.abs(bx-nx)+1,1,'#E8D9FF')}px=nx;py+=4}
 g.restore();
}
function bolt(t){const P=2600,k=Math.floor(t/P),ph=t%P;if(hash(k,9)>62)return null;if(!(ph<90||(ph>140&&ph<200)))return null;return {k,x:16+hash(k,4)*(MW*16-32)/100}}
function sfloor(X,Y,x,y,t){ // the station's dull-silver floor with scalloped seams; teal rings ripple out from the contact bulb
 r(X,Y,16,16,'#8E949A');r(X,Y,16,1,'#A3A9AF');r(X+2,Y+11,4,1,'#7C8288');r(X+1,Y+10,1,1,'#7C8288');r(X+6,Y+10,1,1,'#7C8288');r(X+10,Y+11,4,1,'#7C8288');r(X+9,Y+10,1,1,'#7C8288');r(X+14,Y+10,1,1,'#7C8288');
 if(hash(x,y)<14)r(X+5+hash(y,x)%6,Y+4,2,1,'#9AA0A6');
 if(ZID==='dolod'&&x>=8&&x<=19&&y>=10&&y<=15){
  const F=state.f,cx=14*16,cy=12*16,sp=.05,col='rgba(120,255,230,.55)';if(!F.linked||F.woke)return;
  g.fillStyle=col;for(let i=0;i<16;i+=2)for(let j=0;j<16;j+=2){const d=Math.hypot(x*16+i-cx,y*16+j-cy);if(((d-t*sp)%22+22)%22<1.6)g.fillRect(X+i,Y+j,2,2)}}
}
function pad(X,Y,x,y,t){
 r(X,Y,16,16,'#4C525A');r(X,Y,16,1,'#40454C');r(X,Y,1,16,'#40454C');if(hash(x,y)<22)r(X+4,Y+9,3,1,'#5A616A');
 if(ZID==='dolod'&&hash(y,x)<35){r(X+hash(x,y)%13+1,Y+hash(y,x)%13+1,2,1,'#7A4A36');r(X+hash(x+3,y)%13+1,Y+hash(y,x+3)%13+1,1,1,'#8F5640')}
 const up=at(x,y-1);if(up!=='P'&&up!=='X'&&up!=='R'&&up!=='A')for(let i=0;i<16;i+=4)r(X+i,Y,2,2,'#E8B73A');
 if(t!=null)alertTint(X,Y,t);
}
function carpet(X,Y,x,y){r(X,Y,16,16,'#9C6B43');r(X,Y,16,1,'#8A5D39');r(X,Y,1,16,'#8A5D39');if((x+y)%2===0){r(X+7,Y+6,2,1,'#B9844F');r(X+6,Y+7,4,2,'#B9844F');r(X+7,Y+9,2,1,'#B9844F')}}
function floorFor(X,Y,x,y,t){(ZID==='ship'&&y<7&&x<19?carpet:deck)(X,Y,x,y);alertTint(X,Y,t)}
function holoFloor(cx,cy,rr,t,body){ // round projection glow used by the tactical table
 g.fillStyle='rgba(105,207,216,.13)';g.beginPath();g.arc(cx,cy,rr,0,Math.PI*2);g.fill();body()}
function ball(cx,cy,R,cols){for(let dy=-R;dy<=R;dy++){const hw=Math.floor(Math.sqrt(R*R-dy*dy));const i=Math.floor((dy+R)/(2*R+1)*cols.length);r(cx-hw,cy+dy,hw*2+1,1,cols[Math.min(cols.length-1,i)])}}

/* Kelowan sits inside the Poseidon Nebula: views inside the system show nebula glow, hardly any stars (c013, c032, c034); same look as ch1's nebula() */
function nebula(X,Y,x,y,t,depth){r(X,Y,16,16,'#140D20');const ox=CAM.x*depth,oy=CAM.y*depth;
 for(let j=0;j<16;j+=2)for(let i=0;i<16;i+=2){const gx=x*16+i-ox,gy=y*16+j-oy,v=Math.sin(gx/23+gy/31)+.6*Math.sin(gx/11-gy/17)+.3*Math.sin(gy/7+gx/41);
  if(v>1.2)r(X+i,Y+j,2,2,'#8E5C8C');else if(v>.6)r(X+i,Y+j,2,2,'#5E3C72');else if(v>-.1)r(X+i,Y+j,2,2,'#36244C')}
 if((hash(x,y)+Math.floor(t/900))%23===0)r(X+(hash(y,x)%14)+1,Y+(hash(x+1,y)%12)+2,1,1,'#D8C8E8')}
const T7={
 /* ---- 성실호 ---- */
 swall:(X,Y,x,y,t)=>{r(X,Y,16,16,'#7B8079');r(X,Y,16,1,'#959A92');
  if(front(x,y)&&at(x,y+1)){const warm=ZID==='ship'&&y<7&&x<19;r(X,Y+9,16,7,warm?'#8A5A3A':'#A3A89E');r(X,Y+9,16,1,warm?'#B07A4E':'#C0C4BA');if(warm)r(X,Y+13,16,1,'#734A2E');
   if(x%3===1){const c=acc()?(Math.floor(t/250)%2?'#FF5A44':'#7A2A22'):warm?'#F6C77A':'#E8962A';r(X+6,Y+10,4,3,c);if(warm||acc()){g.fillStyle=acc()?'rgba(255,90,68,.2)':'rgba(246,199,122,.2)';g.fillRect(X+3,Y+13,10,3)}}}
  else{r(X+3,Y+4,1,1,'#646A63');r(X+12,Y+4,1,1,'#646A63')}},
 carpet:(X,Y,x,y,t)=>{carpet(X,Y,x,y);alertTint(X,Y,t)},
 sdeck:(X,Y,x,y,t)=>{deck(X,Y,x,y);alertTint(X,Y,t)},
 sgrate:(X,Y,x,y,t)=>{TILES.grate(X,Y,x,y,t);alertTint(X,Y,t)},
 accWin:(X,Y,x,y,t)=>{nebula(X,Y,x,y,t,.35);
  if(acc()){if(hash(x,7)<45){const fx=X+3+hash(x,3)%10,fy=Y+4+hash(3,x)%7,p=(Math.sin(t/400+x)+1)/2;r(fx-2,fy,2,1,'#B85A3A');r(fx,fy,2,1,p>.5?'#FFE7A0':'#FFB86A');r(fx+1,fy,1,1,'#FFFFFF')}}
  else if(ZID==='ship'&&!state.f.jump&&(x===3||x===4)){g.save();g.beginPath();g.rect(X,Y+2,16,12);g.clip();ball(4*16-CAM.x,16+8-CAM.y,6,['#7A4A4E','#E3A08A','#9A5E5A','#F0B8A0','#B87468','#5A3A40']);g.restore()}
  r(X,Y,16,2,'#7B8079');r(X,Y+14,16,2,'#A3A89E');if(x%3===0)r(X,Y,1,16,'#646A63')},
 newsV:(X,Y,x,y,t)=>{r(X,Y,16,16,'#7B8079');r(X+1,Y+2,14,11,OL);r(X+2,Y+3,12,9,'#2A1E24');const k=Math.floor(t/120);
  for(let i=0;i<4;i++)r(X+2+hash(i,k)%11,Y+3+hash(k,i)%8,2,1,'#5A4A54');
  r(X+4,Y+5,2,4,'#C9B8A0');r(X+7,Y+5,2,4,'#C9B8A0');r(X+10,Y+5,2,4,'#C9B8A0');r(X+4,Y+4,2,1,'#3A2A22');r(X+7,Y+4,2,1,'#3A2A22');r(X+10,Y+4,2,1,'#3A2A22');
  r(X+2,Y+10,12,2,Math.floor(t/400)%2?'#D2533F':'#8A2A22');r(X+12,Y+3,1,1,Math.floor(t/300)%2?'#FF5A44':'#2A1E24');r(X,Y+14,16,2,'#A3A89E')},
 sofa:(X,Y,x,y,t)=>{(ZID==='ship'?carpet:deck)(X,Y,x,y);r(X+1,Y+3,14,11,OL);r(X+2,Y+4,12,4,'#8C3E44');r(X+2,Y+4,12,1,'#A85258');r(X+2,Y+8,12,5,'#A04A50');r(X+2,Y+8,12,1,'#BA6168');r(X+1,Y+14,14,1,'#4A1E22');alertTint(X,Y,t)},
 lamp:(X,Y,x,y,t)=>{carpet(X,Y,x,y);g.fillStyle='rgba(246,199,122,.16)';g.beginPath();g.arc(X+8,Y+6,8,0,Math.PI*2);g.fill();
  r(X+7,Y+6,2,9,'#3A2A20');r(X+5,Y+14,6,1,'#3A2A20');r(X+4,Y+1,8,5,OL);r(X+5,Y+2,6,3,'#F6C77A');r(X+5,Y+2,6,1,'#FFE3AE');alertTint(X,Y,t)},
 bigbed:(X,Y,x,y,t)=>{carpet(X,Y,x,y);const ox=x-13,oy=y-2;
  if(oy===0){r(X,Y+1,16,4,'#5A3A26');r(X,Y+1,16,1,'#7A523A');r(X,Y+5,16,11,'#E8E2D6');r(X+(ox?1:3),Y+6,12,4,'#FFFFFF');r(X+(ox?1:3),Y+9,12,1,'#D8D2C6');r(X,Y+11,16,5,'#5E4A8C');r(X,Y+11,16,1,'#7A64A8')}
  else{r(X,Y,16,13,'#5E4A8C');r(X,Y+6,16,1,'#4E3C78');r(X,Y+13,16,2,'#3E2E60')}
  if(ox===0)r(X,Y,1,16,OL);else r(X+15,Y,1,16,OL);alertTint(X,Y,t)},
 filter:(X,Y,x,y,t)=>{deck(X,Y,x,y);r(X+7,Y,2,3,'#6E7570');ball(X+8,Y+9,6,['#C9E4EA','#9FC2CC','#7FA8B4','#7FA8B4','#5E8794']);r(X+5,Y+5,2,2,'#E8FBFF');r(X+2,Y+9,12,1,'#4E7480');
  const b=Math.floor(t/180+x*3)%7;r(X+8,Y+13-b,1,1,'#E8FBFF');alertTint(X,Y,t)},
 alertCon:(X,Y,x,y,t)=>{deck(X,Y,x,y);r(X+1,Y+3,14,11,'#2B3238');r(X+1,Y+3,14,2,'#3C454C');r(X+3,Y+6,10,5,'#0F141A');
  if(acc()){const k=Math.floor(t/200)%7;r(X+4+k,Y+8,2,1,'#D2533F');r(X+4,Y+7,1,1,'#FF5A44');r(X+11,Y+9,1,1,'#FF8A5A');r(X+3,Y+6,10,1,Math.floor(t/300)%2?'#D2533F':'#0F141A')}
  else{r(X+4,Y+7,5,1,'#69CFD8');r(X+4,Y+9,3,1,'#E8962A');r(X+9,Y+9,3,1,'#69CFD8')}r(X+3,Y+12,2,1,'#5F6B72');r(X+10,Y+12,2,1,'#5F6B72');alertTint(X,Y,t)},
 medbed:(X,Y,x,y,t)=>{deck(X,Y,x,y);r(X+1,Y+2,13,13,OL);r(X+2,Y+3,11,11,'#DDE6E8');r(X+3,Y+4,9,3,'#FFFFFF');r(X+2,Y+9,11,5,'#7FB8C0');r(X+2,Y+9,11,1,'#A8D6DC');
  r(X+13,Y+1,3,4,'#2B3238');r(X+14,Y+2,1,1,Math.floor(t/500)%2?'#4BE38A':'#1E5A36');alertTint(X,Y,t)},
 pad:(X,Y,x,y,t)=>pad(X,Y,x,y,t),
 ramp:(X,Y,x,y,t)=>{pad(X,Y,x,y,t);const p=Math.floor(t/300)%3;for(let i=0;i<3;i++){const c=i===p?'#FFD27A':'#B8862A';r(X+4,Y+3+i*4,8,1,c);r(X+3,Y+4+i*4,2,1,c);r(X+11,Y+4+i*4,2,1,c)}},
 craft:(X,Y,x,y,t)=>blockOnce(X,Y,x,y,(oX,oY,w,h,ox,oy)=>{
  for(let i=0;i<w;i++)for(let j=0;j<h;j++)pad(oX+i*16,oY+j*16,ox+i,oy+j,t);
  const F=state.f,kind=ZID==='ship'?(!F.linked&&!F.stranded?'drop':F.woke?'anchor':''):(!F.linked?'drop':'');  // the drop ship waits in the hangar until you board it
  const W=w*16,H=h*16;
  if(kind==='drop'){g.drawImage(dropShip(),oX+(W-80)/2,oY+(H-32)/2);const on=Math.floor(t/500)%2;r(oX+(W-80)/2+1,oY+(H-32)/2+11,2,3,on?'#BFF5EA':'#69CFD8')}
  else if(kind==='anchor')g.drawImage(anchorShip(),oX+(W-64)/2,oY+(H-48)/2);
  else{g.fillStyle='rgba(20,20,24,.35)';g.beginPath();g.ellipse(oX+W/2,oY+H/2,W/2-8,H/2-5,0,0,Math.PI*2);g.fill();r(oX+W/2-10,oY+H/2,20,1,'#E8B73A');r(oX+W/2,oY+H/2-6,1,12,'#E8B73A')}
  for(let i=0;i<w;i++)for(let j=0;j<h;j++)alertTint(oX+i*16,oY+j*16,t)}),
 tactic:(X,Y,x,y,t)=>blockOnce(X,Y,x,y,(oX,oY,w,h,ox,oy)=>{
  for(let i=0;i<w;i++)for(let j=0;j<h;j++)deck(oX+i*16,oY+j*16,ox+i,oy+j);
  r(oX+1,oY+13,46,18,OL);r(oX+2,oY+14,44,16,'#20262E');r(oX+2,oY+14,44,2,'#3A434C');r(oX+3,oY+17,42,1,'#2C5D63');
  const cx=oX+24,cy=oY+12,F=state.f;
  holoFloor(cx,oY+12,15,t,()=>{
   if(F.jump){g.strokeStyle='#69CFD8';g.lineWidth=1;g.beginPath();g.arc(cx,cy,6,0,Math.PI*2);g.stroke();r(cx-1,cy-1,2,2,'#BFE6FF')}
   else if(acc()){r(cx-1,cy,3,2,'#FFFFFF');const k=(t/60)%14;for(let i=0;i<4;i++){const fx=cx+20-k+(i%2)*3,fy=cy-6+i*4;r(fx,fy,2,1,'#FF5A44');r(fx-1,fy+1,4,1,'#D2533F')}
    r(cx-18+k/2,cy-5,2,2,'#FFB86A');r(cx-17+k/2,cy+5,2,2,'#FFB86A');if(Math.floor(t/300)%2){r(oX+2,oY+14,44,1,'#D2533F')}}
   else{ball(cx-4,cy,6,['#7A4A4E','#E3A08A','#9A5E5A','#F0B8A0','#B87468','#5A3A40']);r(cx+10,cy-6,3,3,'#4E9E6E');r(cx+7,cy+5,2,2,'#B5653A')}});
  for(let i=0;i<w;i++)for(let j=0;j<h;j++)alertTint(oX+i*16,oY+j*16,t)}),
 /* ---- 돌로드 엔진 기지 ---- */
 storm:(X,Y,x,y,t)=>storm(X,Y,x,y,t,0,0,16,16),
 stormWin:(X,Y,x,y,t)=>{r(X,Y,16,16,'#BFB39C');storm(X,Y,x,y,t,0,2,16,11);r(X,Y,16,2,'#A89C86');r(X,Y+13,16,3,'#DDD3C0');r(X,Y+13,16,1,'#EDE5D4');if(x%3===0)r(X,Y,1,13,'#8E826E')},
 stormDoor:(X,Y,x,y,t)=>{r(X,Y,16,16,'#5E574C');r(X,Y,16,2,'#7A7266');r(X,Y,1,16,'#3E3A33');r(X+4,Y+4,1,1,'#8A8274');r(X+11,Y+4,1,1,'#8A8274');r(X+4,Y+9,1,1,'#8A8274');r(X+11,Y+9,1,1,'#8A8274');
  for(let i=0;i<16;i+=4){r(X+i,Y+12,2,4,'#E8B73A');r(X+i+2,Y+12,2,4,'#2A2620')}
  if(x===6)r(X+15,Y,1,12,state.f.stranded?(Math.floor(t/400)%2?'#FF5A44':'#5A2A22'):'#47D6C2')},
 fossil:(X,Y,x,y,t)=>{const edge=x===0||x===MW-1||y===MH-1;
  if(edge){r(X,Y,16,16,'#7A4232');for(let i=0;i<7;i++)r(X+hash(x*7+i,y)%15,Y+hash(y*5+i,x)%15,1+i%2,1,i%3?'#9A5A40':'#5E3024');return}
  r(X,Y,16,16,'#BFB39C');r(X,Y,16,1,'#D6CBB6');const glow=`rgba(232,255,246,${.45+.35*Math.sin(t/500+x)})`;
  for(const k of [0,8]){r(X+k,Y+2,1,3,'#A89C86');r(X+k+1,Y+5,1,1,'#A89C86');r(X+k+2,Y+6,4,1,'#A89C86');r(X+k+6,Y+5,1,1,'#A89C86');r(X+k+7,Y+2,1,3,'#A89C86');g.fillStyle=glow;g.fillRect(X+k+2,Y+7,4,1)}
  if(front(x,y)&&at(x,y+1)){r(X,Y+10,16,6,'#DDD3C0');r(X,Y+10,16,1,'#EDE5D4');r(X+2,Y+13,12,1,'#BFF5EA')}},
 sfloor:(X,Y,x,y,t)=>sfloor(X,Y,x,y,t),
 petal:(X,Y,x,y,t)=>{r(X,Y,16,16,'#3A3446');const ws=[1,3,5,7,8,9,10,11,11,12,12,11,10,8,6];
  for(let j=0;j<ws.length;j++){const w=ws[j],sx=8-Math.ceil(w/2);r(X+sx-1,Y+1+j,w+2,1,OL)}
  for(let j=0;j<ws.length;j++){const w=ws[j],sx=8-Math.ceil(w/2),hw=Math.ceil(w/2);r(X+sx,Y+1+j,hw,1,j<5?'#F4EEE0':'#E9E1CF');r(X+8,Y+1+j,w-hw,1,j<12?'#D6CCB8':'#BFB39C')}
  r(X+8,Y+4,1,11,'#47D6C2');r(X+6,Y+9,1,4,'#8FD9CC');r(X+10,Y+9,1,4,'#2FB5A4');
  if(Math.floor(t/700+x*3+y)%6===0)r(X+8,Y+4+Math.floor(t/110)%11,1,2,'#BFF5EA')},
 bulb:(X,Y,x,y,t)=>blockOnce(X,Y,x,y,(oX,oY,w,h,ox,oy)=>{
  for(let i=0;i<w;i++)sfloor(oX+i*16,oY,ox+i,oy,t);
  const F=state.f,cx=oX+16,cy=oY+8,p=(Math.sin(t/420)+1)/2,lit=F.linked&&!F.woke;
  const core=lit?['#E8FFFB','#9FF5E6','#5FE3CF','#2FB5A4']:['#E4EAEC','#C8D2D6','#AEBAC0','#97A4AA'];
  if(lit){g.fillStyle=`rgba(71,214,194,${.15+p*.25})`;g.beginPath();g.arc(cx,cy,11+p*4,0,Math.PI*2);g.fill()}
  ball(cx,cy+1,7,[OL]);ball(cx,cy+1,6,core);r(cx-3,cy-3,2,2,'#FFFFFF')}),
 cone:(X,Y,x,y,t)=>blockOnce(X,Y,x,y,(oX,oY,w,h,ox,oy)=>{
  for(let i=0;i<w;i++)sfloor(oX+i*16,oY,ox+i,oy,t);
  for(let j=0;j<15;j++){const hw=2+Math.round(j*.75);r(oX+16-hw-1,oY+j,hw*2+2,1,OL);r(oX+16-hw,oY+j,hw,1,'#E4DED0');r(oX+16,oY+j,hw,1,'#B9B1A0')}
  r(oX+5,oY+15,22,1,OL);r(oX+15,oY+2,2,10,'#47D6C2')}),
 tri:(X,Y,x,y,t)=>blockOnce(X,Y,x,y,(oX,oY,w,h,ox,oy)=>{
  for(let i=0;i<w;i++)for(let j=0;j<h;j++)pad(oX+i*16,oY+j*16,ox+i,oy+j,t);g.drawImage(anchorShip(),oX+(w*16-64)/2,oY+(h*16-48)/2);
  if(state.f.woke){const on=Math.floor(t/250)%2;r(oX+(w*16-64)/2+25,oY+(h*16-48)/2+41,4,2,on?'#FFE7A0':'#FFB86A');r(oX+(w*16-64)/2+35,oY+(h*16-48)/2+41,4,2,on?'#FFE7A0':'#FFB86A')}}),
 /* ---- 카포 프로이스 ---- */
 gateView:(X,Y,x,y,t)=>{nebula(X,Y,x,y,t,.1);const G=Z.gate;
  g.save();g.beginPath();g.rect(X,Y,16,16);g.clip();
  const cx=G.cx-CAM.x,cy=G.cy-CAM.y,R=G.R;
  g.fillStyle='#161A22';g.beginPath();g.arc(cx,cy,R,0,Math.PI*2);g.fill();
  g.lineWidth=2;[R-1,R-9,R-17,R-25,R-33].forEach((rr,i)=>{g.strokeStyle=i%2?'#232A36':'#2E3644';g.beginPath();g.arc(cx,cy,rr,0,Math.PI*2);g.stroke()});
  g.fillStyle='#0C0F14';g.beginPath();g.arc(cx,cy,7,0,Math.PI*2);g.fill();
  const ph=(t%5200)/5200;if(ph<.06){g.strokeStyle=`rgba(230,244,255,${1-ph/.06*.3})`;g.lineWidth=3;g.beginPath();g.arc(cx,cy,R-1,0,Math.PI*2);g.stroke()}
  else if(ph<.2){const k=(ph-.06)/.14;g.strokeStyle=`rgba(191,230,255,${1-k})`;g.lineWidth=2;g.beginPath();g.arc(cx,cy,Math.max(1,(R-1)*(1-k)),0,Math.PI*2);g.stroke()}
  g.restore();
  if(y===1)r(X,Y,16,2,'#7B8079');if(y===4)r(X,Y+14,16,2,'#A3A89E');if(x%4===0)r(X,Y,1,16,'#5E635C')},
 rail:(X,Y,x,y)=>{deck(X,Y,x,y);g.fillStyle='rgba(159,215,232,.28)';g.fillRect(X,Y,16,9);r(X,Y,16,1,'#BFE6FF');r(X,Y+9,16,2,'#8A929A');r(X,Y+9,16,1,'#C0C6CC');if(x%2===0)r(X+7,Y+11,2,4,'#6E767E')},
};

/* ---------- sprites ---------- */
/* 3 m Gath — same sprite as 3장 (pale-rust skin, heavy jaw, flattened nose, robes) */
function gath(robe,robeS,robeD,hair){ // a 3 m Gath, 16×28: pale-rust skin, heavy jaw, flattened nose, robes
 return {pal:{O:'#1B1E2B',E:'#1B1E2B',S:'#C98A66',s:'#A86B4E',N:'#94573E',M:'#7E4A36',H:hair,h:'#3A2418',R:robe,r:robeS,d:robeD,B:'#6E5A3A',K:'#4A3A2E'},
 down:['.....OOOOOO.....','....OHHHHHHO....','...OHHhHHhHHO...','...OHSSSSSSHO...','...OsESSSSEsO...','...OSSNNNNSSO...','...OSSSSSSSSO...','...OsSMMMMSsO...','....OssssssO....','.....OSSSSO.....',
  '..OORRRRRRRROO..','.ORRRRRRRRRRRRO.','ORRrRRRRRRRRrRRO','ORRrRRRddRRRrRRO','ORrrRRRddRRRrrRO','ORrORRRddRRROrRO','ORrOBBBBBBBBOrRO','ORrORRRddRRROrRO','ORrORRRddRRROrRO','OSsORRRddRRROsSO',
  '.OOORRRddRRROOO.','...ORRRddRRRO...','...ORRrddrRRO...','...ORrrddrrRO...','...ORrrOOrrRO...','...OrrO..OrrO...','...OKKO..OKKO...','...OOOO..OOOO...'],
 up:['.....OOOOOO.....','....OHHHHHHO....','...OHHhHHhHHO...','...OHHHHHHHHO...','...OHHHHHHHHO...','...OHHhhhhHHO...','...OHHHHHHHHO...','...OsHHHHHHsO...','....OssssssO....','.....OSSSSO.....',
  '..OORRRRRRRROO..','.ORRRRRRRRRRRRO.','ORRrRRRRRRRRrRRO','ORRrRRRRRRRRrRRO','ORrrRRRRRRRRrrRO','ORrORRRRRRRROrRO','ORrOBBBBBBBBOrRO','ORrORRRRRRRROrRO','ORrORRRRRRRROrRO','OSsORRRRRRRROsSO',
  '.OOORRRRRRRROOO.','...ORRRRRRRRO...','...ORRrRRrRRO...','...ORrrRRrrRO...','...ORrrOOrrRO...','...OrrO..OrrO...','...OKKO..OKKO...','...OOOO..OOOO...'],
 left:['.....OOOOOO.....','....OHHHHHHO....','...OHHHHHHHHO...','..OSSSHHHHHHO...','..OSESSSSHHHO...','.ONNSSSSSsHHO...','..OSSSSSSsHO....','..OMMSSSSsO.....','...OssssssO.....','.....OSSSO......',
  '....OORRRRRO....','...ORRRRRRRRO...','...ORRRRRRRRO...','...ORRrRRRRRO...','...ORrrrRRRRO...','...ORrrrRRRRO...','...OBrrrBBBBO...','...ORrrrRRRRO...','...ORrrrRRRRO...','...ORSSrRRRRO...',
  '...ORSSRRRRRO...','...ORRRRRRRRO...','...ORRRRRRRrO...','...ORRRRRRrrO...','...ORRrRRRrrO...','....OrrOOrrO....','...OKKKOKKKO....','...OOOOOOOOO....']}}
const DAVE=['......OO','....OOQQ','...OQQQQ','...OQqMM','...OQMEM','...OQMMM','...OQqMm','....OQQm','.....OQQ','..OOOQQQ','.OQQMMQM','.OQMMmQM','OQMOQMMQ','OQMOQMMm','OQMOQmMM','OQGOQMMQ','.OOOQQQQ','...OQMMQ','...OQMmO','...OQMMO','...OQmMO','...OQMQO','...OKKKO','...OOOOO'];
const daveArt=(q,qd,glow)=>({pal:{O:OL,E:OL,Q:q,q:qd,M:'#C9665A',m:'#9A4840',G:glow,K:'#7C8E96'},down:M(DAVE),up:M(DAVE.map(s=>s.replace('E','M')))});
/* the 막간 prism: a projector disc that shows the interlude's main character as a hologram */
const PED=['........','....g..g','...ggggg','..OPPPPP','..OPpppp','...OOOOO'];
const THYRA=['......cc','.....caa','....caaa','....caaa','...cbaya','...cbaaa','...cbbaa','..cb.cba','..cb..ca','..cbcbbb','..cbbaaa','..cb.baa','..cb.bam','...cbbaa','....baaa','....bama','....baaa','...baaaa','...baaaa','..baaaaa','..bbbbbb'];
const TERENCE=['........','.....ccc','....caaa','....caya','....caaa','.....caa','...ccbbb','..cbbbbb','..cbabbb','..cbabbb','..cbbbbb','..cbbbbb','...cbbcb','...cbbcb','...cbbcb','....cc.c'];
const scan=rows=>rows.map((s,i)=>i%3===1?s.replace(/a/g,'l'):s);
const HOLO_TH={pal:{a:'#E3C8FF',b:'#B48BE6',c:'#7650B0',l:'#F4E8FF',y:'#FFE7A0',m:'#FF8FD8',g:'#C9A2FF',O:OL,P:'#5A6170',p:'#3A3F4A'},down:M(scan(THYRA).concat(PED))};
const HOLO_TE={pal:{a:'#BFF5EA',b:'#69CFD8',c:'#2E8F98',l:'#E8FFFB',y:'#1E5A5E',g:'#9FF5E6',O:OL,P:'#5A6170',p:'#3A3F4A'},down:M(scan(TERENCE).concat(PED))};
const FINN={hair:'#E0C070',skin:'#F0C9A4',shirt:'#2F8F8A',pants:'#2E3548'};
const ELLIE={hair:'#2A2220',skin:'#E8B892',shirt:'#E4E1D6',pants:'#3B4650',belt:'#E8962A',style:'bob',lashes:1,lips:'#C8646E'};
const DEJEAN={hair:'#8A8A90',skin:'#C99470',shirt:'#2E3B55',pants:'#2E3B55',cap:'#2E3B55',belt:'#E8962A',arm:'#B87333',lashes:1,lips:'#A8645E'};
const ZELINDA={hair:'#A89070',skin:'#EDC3A0',shirt:'#2E4A6A',pants:'#26303E',style:'bun',coat:1,belt:'#C9A64A',lashes:1,lips:'#B06A70'};
const GYVOY={hair:'#2A1E1A',skin:'#B9825A',shirt:'#6A2E52',pants:'#4B3A2E',coat:1};
const BENSATH={hair:'#3A2A22',skin:'#C48E66',shirt:'#4E5A3A',pants:'#3A4030',belt:'#2B2B30',cap:'#4E5A3A'};
const DAVE1=daveArt('#D8EEF4','#A9CBD6','#F2B98E'),DAVE2=daveArt('#F3DCCB','#D8B4A0','#FFD27A');

const ZONES={
 ship:{name:'성실호 · 1번 구',reg:'ARK DILIGENT · SPHERE ONE',
  legend:{'#':{tile:'swall'},'.':{tile:'carpet',walk:1},',':{tile:'sdeck',walk:1},'=':{tile:'sgrate',walk:1},'W':{tile:'accWin'},'V':{tile:'newsV'},
   's':{tile:'sofa'},'L':{tile:'lamp'},'B':{tile:'bigbed'},'T':{tile:'terminal'},'F':{tile:'filter'},'p':{tile:'pipes'},'c':{tile:'alertCon'},
   'H':{tile:'tactic'},'k':{tile:'medbed'},'P':{tile:'pad',walk:1},'X':{tile:'craft'},'R':{tile:'ramp',walk:1},'O':{tile:'airlock',walk:1}},
  map:[
"############################",
"#WWWWWWWVWWW#WWWWW#pppFpFpp#",
"#L..ss.....L#BB..L#,,,,,,,,#",
"#...........#BB...#F,,,,,,F#",
"#T................#,,,,,,,,#",
"#L..ss.....L#.....#F,,,,,,F#",
"######.##############,,#####",
"#==========================#",
"#####,#######,########,#####",
"#cc,,,,,,cc#,,,,,#PPPPPPPPP#",
"#,,,,,,,,,,#k,,,k#PPXXXXXPP#",
"#,,,HHH,,,,#,,,,,#PPXXXXXPP#",
"#,,,HHH,,,,#k,,,k#PPXXXXXPP#",
"#,,,,,,,,,,#,,,,,#PPPPRPPPP#",
"#cc,,,,,,cc#,,,,,#PPPPPPPPP#",
"#,,,,,,,,,,#######PPPPPPPPP#",
"#####O######################"],
  rooms:[[1,1,11,5,'성실호 · 주인 숙소'],[13,1,17,5,'성실호 · 침실'],[19,1,26,6,'성실호 · 1번 구 현관'],[1,7,26,7,'성실호 · 복도'],[1,9,10,15,'성실호 · 지휘 통제실'],[12,9,16,14,'성실호 · 진료실'],[18,9,26,15,'성실호 · 격납고']],
  warps:{
   '22,13':{to:'dolod',x:5,y:6,dir:'down',lock:()=>!f().launch?'강하선 문이 닫혀 있어요. 아직 출발 준비가 안 됐어요.':f().woke?'앵커선은 쉬고 있어요. 돌로드에는 다시 안 가요.':false},
   '5,16':{to:'capo',x:10,y:9,dir:'up',lock:()=>!f().jump&&'관측 갑판 문이에요. 비상이라서 잠겨 있어요.'}},
  spots:{
   '8,1':['해적 방송이에요. 점령군에게 잡힌 사람들이 나와요.','{유버스터|유버스터}로 기억을 다 지웠어요. 아기처럼 됐어요.','사람들을 차에 싣고 집 앞에 버려요.','보고 있으면 분노가 끓어요.'],
   get '2,1'(){return f().jump?'관문이 아주 가까워요. 아직 켈로완 성계예요.':acc()?'빨간 경보예요. 프리깃들이 점점 가까워져요.':'창밖에 분홍빛 줄무늬 행성. 돌로드예요.'},
   '13,2':'엘리의 침대예요. 베개가 조금 젖어 있어요.',
   '17,2':'따뜻한 등불이에요. 주인 숙소는 늘 이 색이에요.',
   '19,3':'필터 구예요. 공기가 보글보글 지나가요.',
   get '4,11'(){return f().jump?'홀로그램 지도: 카포 프로이스 관문. 건너가면 관문이 다섯 개 더 있어요.':acc()?'홀로그램 지도: 빨간 세모는 프리깃이에요. 점점 가까워져요.':'홀로그램 지도: 돌로드하고 곤디아가 보여요.'},
   '12,10':'진료실 침대예요. 깨끗한 냄새가 나요.',
   get '21,12'(){return !f().linked&&!f().stranded?(f().launch?'강하선이에요. 문이 열려 있어요. 타요!':'강하선이에요. 카이발에서 훔친 배예요.'):f().woke?'앵커선이에요. 세모 날개가 세 개예요.':'빈 자리예요.'}},
  things:{
   '#':WALL7,
   'W':(x,y)=>acc()?'창밖 멀리 밝은 불꽃들이 다가와요.':!f().jump&&(x===3||x===4)?'창밖에 분홍빛 줄무늬 행성이 보여요.':vary(x,y,['창밖에 성운이 가득해요.','창밖이 아주 조용해요.']),
   'X':()=>!f().launch?'강하선이에요. 문이 꼭 닫혀 있어요.':!f().linked&&!f().stranded?'강하선이에요. 문이 열려 있어요.':f().woke?'앵커선이에요. 크고 조용해요.':'빈 자리예요. 바닥에 노란 표시만 있어요.',
   'c':()=>acc()?'콘솔에 빨간 경고가 깜빡여요.':'콘솔 화면에 파란 숫자가 떠 있어요.',
   'p':['관이 벽을 따라 지나가요. 물소리가 나요.','관이 조금 따뜻해요.'],
   'F':'둥근 필터 통이에요. 작은 거품이 올라가요.',
   'H':()=>f().jump?'홀로그램 지도에 관문이 떠 있어요.':acc()?'홀로그램 지도에 빨간 점이 가까워져요.':'홀로그램 지도에 분홍빛 행성이 떠 있어요.',
   'L':'등불 빛이 따뜻해요.',
   's':'빨간 소파예요. 아주 푹신해요.',
   'B':'큰 침대예요. 보라색 이불이 있어요.',
   'k':'진료실 침대예요. 작은 초록 불이 깜빡여요.'},
  npcs:['otylia','gath','laurella','zelinda','everett','finn','ellie','pablo','holo1','aljan','dejean','gyvoy','bensath','daveS']},
 dolod:{name:'돌로드 · 엔진 기지',reg:'DOLOD · ARCHIMEDES ENGINE',slow:1.6,
  legend:{'S':{tile:'storm'},'d':{tile:'stormDoor'},'#':{tile:'fossil'},'w':{tile:'stormWin'},'.':{tile:'sfloor',walk:1},'P':{tile:'pad',walk:1},
   'X':{tile:'craft'},'e':{tile:'petal'},'U':{tile:'bulb'},'C':{tile:'cone'},'A':{tile:'tri'},'R':{tile:'ramp',walk:1}},
  map:[
"SSSSSSSSSSSSSSSSSSSSSSSSSSSS",
"SSSSSSSSSSSSSSSSSSSSSSSSSSSS",
"#dddddddddddd#wwwwwwwwwwwww#",
"#PPPPPPPPPPPP#.............#",
"#PPXXXXXPPPPP#.............#",
"#PPXXXXXPPPPP..............#",
"#PPPPPPPPPPPP#.............#",
"######.#############.#######",
"#..........................#",
"####.########..########.####",
"#......#ee........ee#PPPPPP#",
"#w.....#e....UU....e#PAAAAP#",
"#w.....#e....CC....e#PAAAAP#",
"#w.....#e..........e#PAAAAP#",
"#......#ee........ee#PPRPPP#",
"#......#eee......eee#PPPPPP#",
"############################"],
  rooms:[[1,3,12,6,'엔진 기지 · 격납고'],[14,3,26,6,'엔진 기지 · 폭풍 전망대'],[1,8,26,8,'엔진 기지 · 물결 복도'],[8,10,19,15,'엔진 기지 · 꽃 방'],[21,10,26,15,'엔진 기지 · 앵커선 격납고'],[1,10,6,15,'엔진 기지 · 작은 방']],
  warps:{'23,14':{to:'ship',x:22,y:14,dir:'down',lock:()=>!f().woke&&'앵커선 문이 잠겼어요. 엔진만 열 수 있어요.'}},
  spots:{
   '1,12':'작은 창이에요. 밖은 폭풍 구름뿐이에요.',
   '9,2':'폭풍 문이에요. 아주 두껍고 무거워요.',
   get '17,2'(){return f().woke?'창밖은 아직 어두워요. 곧 엔진이 깨어나요.':'구름이 층층이 흘러요. 바람이 아주 세요.'},
   get '13,11'(){return f().woke?'전구가 조용해요. 핀의 명령이 끝났어요.':f().linked?'전구가 부드러운 청록색으로 빛나요.':'투명한 전구예요. 4미터 원뿔 꼭대기에 있어요.'},
   '8,10':'거대한 꽃잎이에요. 이 방은 꽃 두 송이 같아요.'},
  things:{
   '#':(x,y)=>x===0||x===27||y===16?'두꺼운 바깥 벽이에요. 차갑고 단단해요.':vary(x,y,['크림색 벽이에요. 뼈 같은 무늬가 있어요.','벽 무늬에서 희미한 빛이 나와요.']),
   'S':'두꺼운 구름 띠가 끝없이 돌아요. 번개가 쳐요.',
   'w':(x,y)=>f().woke?'창밖은 아직 어두워요. 곧 엔진이 깨어나요.':vary(x,y,['창밖은 폭풍 구름뿐이에요.','창밖 구름이 아주 빠르게 흘러가요.']),
   'd':(x,y)=>x===6?(f().stranded?'문 옆에 빨간 불이 깜빡여요.':'문 옆에 청록색 불이 켜져 있어요.'):'두꺼운 문이에요. 노란 줄무늬가 있어요.',
   'X':()=>f().linked?'강하선이 없어요. 빈 자리만 남았어요.':'강하선이에요. 여기까지 타고 왔어요.',
   'e':['거대한 꽃잎이에요. 가운데 청록색 줄이 있어요.','꽃잎이 돌처럼 단단해요.'],
   'U':()=>f().woke?'전구가 조용해요. 핀의 명령이 끝났어요.':f().linked?'전구가 부드러운 청록색으로 빛나요.':'투명한 전구예요. 원뿔 꼭대기에 있어요.',
   'C':'하얀 원뿔이에요. 아주 매끈해요.',
   'A':()=>f().woke?'앵커선이에요. 노란 불이 깜빡여요.':'앵커선이에요. 세모 날개가 세 개예요.'},
  npcs:['dave1','dave2','bensathD','finnD','gyvoyD','holo2']},
 capo:{name:'카포 프로이스 관문',reg:'CAPO FROIS INGRESS GATE',gate:{cx:12*16,cy:3*16+20,R:44},
  legend:{'#':{tile:'swall'},'G':{tile:'gateView'},'l':{tile:'rail'},'.':{tile:'sdeck',walk:1},'s':{tile:'sofa'},'c':{tile:'alertCon'},'O':{tile:'airlock',walk:1}},
  map:[
"########################",
"#GGGGGGGGGGGGGGGGGGGGGG#",
"#GGGGGGGGGGGGGGGGGGGGGG#",
"#GGGGGGGGGGGGGGGGGGGGGG#",
"#GGGGGGGGGGGGGGGGGGGGGG#",
"#llllllllllllllllllllll#",
"#......................#",
"#..ss..............ss..#",
"#......................#",
"#cc..................cc#",
"##########O#############"],
  rooms:[[1,5,22,9,'성실호 · 관측 갑판']],
  warps:{'10,10':{to:'ship',x:5,y:15,dir:'up'}},
  spots:{'13,5':'카포 프로이스 관문. 고리 무늬가 있는 검은 돔이에요.','4,5':'관문 너머 카포 프로이스에는 관문이 다섯 개 더 있대요.','20,5':'창밖은 조용해요. 아직은요.'},
  things:{
   'G':['검은 돔이에요. 고리 무늬가 겹겹이 있어요.','관문 뒤로 성운이 빛나요.','가끔 테두리가 번쩍하고 빛이 안으로 밀려가요.'],
   '#':WALL7,
   'l':['유리 난간이에요. 차갑고 깨끗해요.','난간에 손자국이 조금 있어요.'],
   's':'빨간 소파예요. 여기서 관문이 잘 보여요.',
   'c':'콘솔이 조용해요. 파란 숫자만 깜빡여요.'},
  npcs:['zelindaC','finnC','ellieC','dejeanC','holo3']},
};

/* ---------- scenes ---------- */
const LINK=()=>[
 {say:'접속할게요. 엔진이 저한테 말을 걸어요.'},
 {who:'…',say:'핀이 투명한 전구에 손을 대요. 청록색 빛이 켜져요.'},
 {say:'원래 계획은 돌로드를 별에 떨어뜨리는 거였어요.'},
 {who:'기보이',say:'핀 엔진이에요. 핀 마음대로 해요.'},
 {say:'아니… 여제가 곤디아를 점령했어요. 우리 부모님도…'},
 Q.finnLink[1],
 {say:'{복스록|복스록}을 {켈로완|켈로완}으로 보낼 거예요.'},
 {say:'그들에게 {대가를 치르게|대가를 치르다} 할 거예요.'},
 Q.finnLink[0],
 {who:'…',say:'우르릉! 기지가 흔들려요. {앵커선|앵커선}들이 하늘로 날아가요.'},
 {who:'…',say:'핀은 눈을 감고 전구에 손을 대고 있어요. 움직이지 않아요.'},
 {who:'기보이',say:'우리는 밖을 둘러보고 센서 경보를 달고 올게요.',set:()=>{f().linked=1}},
 {who:'…',say:'기보이하고 벤사스가 격납고 쪽으로 걸어가요.'}];
const JUMP=()=>[
 {say:'{프리깃|프리깃}들이 우리를 쫓아와요.'},
 {say:'{반물질|반물질} 배 두 척은 두 시간 뒤, 프리깃은 다섯 시간 뒤에 와요.'},
 {who:'핀',say:'카포 프로이스 관문으로 가요.'},
 {say:'관문까지 4AU라고요?!'},
 {who:'핀',say:'ZPZ를 켜요. 엔진의 {운동량|운동량}이 우리를 밀어 줄 거예요.'},
 Q.dejean[0],
 {say:'좋아요. 모두 꽉 잡아요. ZPZ, 켜요!'},
 {who:'성실호',say:'가속 1만 G. 모든 센서에서 성실호가 사라져요.',set:()=>{f().jump=1}},
 {who:'성실호',say:'…카포 프로이스 관문 도착.'},
 {say:'살았어요. 관측 갑판에 가서 봐요.'}];

const NPC={
 /* ===== 성실호 · act 1 ===== */
 otylia:{name:'오틸리아',zone:'ship',x:3,y:3,dir:'down',look:{hair:'#C8BFA8',skin:'#F0C9A4',shirt:'#5A4A6A',pants:'#3D3550',style:'long',lashes:1,lips:'#B06A70'},badge:['돌아가시다','믿다'],
  after:'엄마는 끝까지 우리를 지키셨어요. 저는 그걸 믿어요.',
  talk:()=>[
   {say:'와 줘서 고마워요. 저는 오틸리아예요. 핀의 쌍둥이예요.'},
   {say:'핀, 넌 아직 젊구나. 나는 이렇게 늙었는데.'},
   {say:'핀… 할 말이 있어. 내 기억을 보여 줄게.'},
   {who:'기억',say:'하프니르. {고스트|고스트}들이 오틸리아를 잡으러 와요.'},
   {who:'기억',say:'누가 고스트들을 쏴요. 그때 하늘에서 미사일이 떨어져요.'},
   {who:'기억',say:'쾅! 엄마, 아빠, 버라이카 {새언니|새언니}가 거기 계셨어요.'},
   {say:'핀, 엄마하고 아빠가…'},
   Q.otylia[0],
   {who:'핀',say:'아니야… 그럴 리가 없어.'},
   Q.otylia[1],
   {who:'핀',say:'다 살아 계신 줄 알았어. 집에 가면 만날 줄 알았어.'},
   {say:'젤린다 언니하고 에버렛 오빠도 여기 있어요. 같이 얘기해요.',award:['돌아가시다','믿다'],set:()=>{f().met=1}}]},
 gath:{name:'레나타',zone:'ship',x:2,y:3,dir:'right',look:{art:gath('#E6E1D4','#C9C2B0','#D2533F','#7A4A32')},
  talk:()=>[{say:'{성녀|성녀} 오틸리아님이 오셨어요!'},{say:'레나타는 간호사예요. 오틸리아님이 너무 마르셨어요.'},{say:'오틸리아님은 곤디아에서 개스를 지켜 주셨어요. 이제 우리가 지켜요.'}]},
 laurella:{name:'로렐라',zone:'ship',x:10,y:2,dir:'down',look:{hair:'#4A3426',skin:'#EBC09C',shirt:'#5A7A9A',pants:'#3A3A48',style:'long',lashes:1,lips:'#C8646E'},
  talk:()=>[{say:'저는 오틸리아 딸 로렐라예요.'},{say:'할머니, 할아버지 장례식도 못 했어요.'},{say:'곤디아는 점령당했어요. 이제 집에 못 가요.'}]},
 zelinda:{name:'젤린다',zone:'ship',x:8,y:3,dir:'down',look:ZELINDA,badge:['의무'],hide:()=>!!f().jump,
  status:()=>!f().met?null:undefined,
  script:()=>!f().met?[{say:'…'},{say:'오틸리아가 먼저 핀한테 말할 거예요.'}]:null,
  after:'후작은 칭호가 아니에요. 의무예요.',
  talk:()=>[
   {say:'저는 젤린다예요. 이제 제가 {후작|후작}이에요.'},
   {who:'에버렛',say:'후작? 그 {칭호|칭호}가 무슨 소용이야!'},
   {say:'이건 칭호가 아니라 의무예요.'},
   Q.zelinda[0],
   {say:'곤디아 사람들을 지키는 게 제 일이에요.'},
   Q.zelinda[1],
   {who:'핀',say:'우리한테는 돌로드를 멈출 방법이 있어요.'},
   {say:'…어떻게요? 에버렛하고도 얘기해 봐요.',award:['의무'],set:()=>{f().zel=1}}]},
 everett:{name:'에버렛',zone:'ship',x:9,y:5,dir:'left',look:{hair:'#6A4A2E',beard:'#5A3E28',skin:'#E3B48C',shirt:'#3A3A44',pants:'#2A2A30'},badge:['복수','분노'],
  status:()=>!f().zel?null:undefined,
  script:()=>!f().zel?[{say:'…'},{say:'지금은 말하고 싶지 않아요.'}]:null,
  after:'저는 복수를 원해요. 그게 틀렸어요?',
  talk:()=>[
   {say:'저는 에버렛이에요. 제 아내 버라이카도 그 미사일에 죽었어요.'},
   {say:'아이들은 엄마를 잃었어요. 저는 화가 나서 잠을 못 자요.'},
   Q.everett[0],
   {say:'그들이 우리 가족을 죽였어요. 똑같이 갚아 줘야 돼요.'},
   Q.everett[1],
   {who:'핀',say:'엔진으로 돌로드를 별에 떨어뜨릴 수 있어요.'},
   {say:'하게 해!'},
   {who:'핀',say:'좋아요. 돌로드로 가요. 격납고에서 출발해요.',award:['복수','분노'],set:()=>{f().plan=1}}]},
 finn:{name:'핀',zone:'ship',x:6,y:4,dir:'down',look:FINN,
  pos:()=>{const F=f();return !F.plan?[6,4]:!F.launch?[25,14]:!F.truth?[16,4]:[8,11]},
  hide:()=>{const F=f();return (F.launch&&!F.woke)||!!F.jump},
  status:()=>{const F=f();return F.plan&&hasItem('우주복')&&!F.launch?'todo':null},
  script:()=>{const F=f();
   if(!F.met)return [{say:'오틸리아… 얼굴이 많이 변했어요.'},{say:'삼십일 년이 지났대요. 저한테는 몇 달인데요.'}];
   if(!F.plan)return [{say:'엄마, 아빠… 아직 믿을 수 없어요.'}];
   if(!F.launch){if(!hasItem('우주복'))return [{say:'선장님한테 우주복을 받아요. 돌로드는 위험해요.'}];
    return [{say:'준비됐어요? 돌로드 엔진 기지로 가요.'},{who:'기보이',say:'아스테리아 여신님, 지켜 주세요!'},{who:'엘리 (통신)',say:'핀, 꼭 돌아와요. 약속해요.'},{say:'강하선에 타요!',set:()=>{f().launch=1}}]}
   if(!F.truth)return [{say:'엘리가 할 말이 있대요. 그런데 얼굴이 하얘요.'}];
   return [{say:'엘리 말이 맞아요. 저는 조종당했어요.'},{say:'그래도 복스록은 제가 보냈어요. 그건 잊지 않을 거예요.'}]},
  talk:()=>[]},
 ellie:{name:'엘리',zone:'ship',x:15,y:3,dir:'down',look:ELLIE,badge:['진실','잊다','조종당하다'],hide:()=>!!f().jump,
  status:()=>{const F=f();return !F.woke?null:!F.witness?'wait':undefined},
  script:()=>{const F=f();
   if(!F.woke)return [{say:'핀이 너무 화가 났어요. 걱정돼요.'},{say:'이 일, 정말 해야 돼요? 저는 잘 모르겠어요.'},{say:'왜 벤사스예요? 왜 제가 아니에요?'},{say:'그리고 기보이 씨… 왠지 무서워요. 이유는 모르겠어요.'}];
   if(!F.witness)return [{say:'돌아왔어요! 정말 다행이에요.'},{say:'잠깐만요. 파블로 얘기를 먼저 들어요. 현관에 있어요.'}];
   return null},
  after:'이제 아무것도 잊지 않을 거예요.',
  talk:()=>[
   {say:'파블로 말을 듣고 {레콜|레콜}을 마셨어요. 그날 밤을 다시 봤어요.'},
   {who:'기억',say:'핀이 손바닥을 위로 내밀고 있어요. 기보이의 손바닥이 그 위에 있어요.'},
   {who:'기억',say:'기보이 손바닥에서 보라색 선이 빛나요.'},
   {who:'기억',say:'제가 소리를 질렀어요. 그리고 {너브잼|너브잼}을 맞았어요.'},
   {who:'기억 속 기보이',say:'핀의 부모님 일로 화를 조금 더 키우는 중이야.'},
   {who:'기억 속 기보이',say:'너희 인간들은 몇십 년이나 원망하지. 참 쓸모 있어.'},
   {who:'기억 속 기보이',say:'(엘리의 머리를 잡고) 나쁜 기억은 아래로. 안녕~'},
   Q.ellie[0],
   {say:'기보이는 {셀레스철|셀레스철}이에요! 진짜 기보이가 아니에요.'},
   Q.ellie[1],
   {who:'핀',say:'그럼 제 분노도… 그 손이 만든 거예요?'},
   {say:'네. 핀은 기보이한테 조종당했어요.'},
   Q.ellie[2],
   {w:'조종당하다',build:['핀은','기보이한테','조종당했어요']},
   {who:'오틸리아 (통신)',say:'핀, 우리는 너를 믿어.'},
   {say:'이 레콜 병은 진료실에 돌려줘야 돼요. 다시는 안 써요.',give:'레콜 병'},
   {say:'이제 진실을 알아요. 선장님한테 가요. 도망쳐야 돼요.',award:['진실','잊다','조종당하다'],set:()=>{f().truth=1}}]},
 pablo:{name:'파블로',zone:'ship',x:23,y:3,dir:'down',look:{art:gath('#CDB894','#B09C74','#8A7A58','#5A3A2A')},badge:['목격자'],
  status:()=>!f().woke?null:undefined,
  script:()=>!f().woke?[{say:'파블로는 필터를 고쳐요. 성 오틸리아님이 오셨어요.'},{say:'파블로는… 할 말이 있어요. 그런데 무서워요. 나중에요.'}]:null,
  after:'파블로는 봤어요. 파블로는 거짓말 안 해요.',
  talk:()=>[
   {say:'무사히 돌아왔어요! 파블로는 출발 전날 밤 여기 있었어요.'},
   {say:'파블로는 필터를 고치고 있었어요.'},
   {say:'핀 씨하고 기보이 씨가 주인 숙소에 들어갔어요.'},
   {say:'그다음에 엘리 씨 비명을 들었어요.'},
   Q.pablo[0],
   {say:'엘리 씨는 아무것도 기억 못 했어요. 그래서 파블로가 말했어요.'},
   Q.pablo[1],
   {say:'엘리 씨가 레콜을 썼어요. 지금 침실에 있어요.',award:['목격자'],set:()=>{f().witness=1}}]},
 holo1:{name:'막간',zone:'ship',x:20,y:4,dir:'down',still:1,look:{art:HOLO_TE},
  status:()=>f().i1?null:'todo',
  script:()=>[
   {who:'막간',say:'같은 시간, 곤디아. 테렌스가 셀레스철 배 아이아쿠스에 타요.'},
   {who:'테렌스',say:'진짜 기보이는 수십 년 전에 죽었어요. 시체를 찾았어요.'},
   {who:'마카이오 (라이더)',say:'그럼 성실호에 있는 기보이는 누구지?'},
   {who:'테렌스',say:'모르겠어요. 하지만 좋은 사람은 아니에요.'},
   {who:'테렌스',say:'이 정보를 올로모하고 사디아한테 보냈어요.'},
   {who:'노이쉬 (통신)',say:'아사히이리나가 당신을 찾았어요. 아이아쿠스를 타고 빨리 떠나요!',set:()=>{f().i1=1}}],
  talk:()=>[]},
 aljan:{name:'알잔 선생님',zone:'ship',x:14,y:11,dir:'down',look:{hair:'#5A3E2A',skin:'#E0AE86',shirt:'#F1F1EC',pants:'#3C4A5C',coat:1},
  script:()=>{const q=Q.old[Math.random()*Q.old.length|0];
   const vial=hasItem('레콜 병')?[{say:'그 레콜 병, 저한테 줘요. 진료실 금고에 다시 넣을게요.',take:['레콜 병']}]:[];
   return [...vial,{say:'저는 의사 알잔이에요. 피곤해 보여요.'},{say:'옛날 일을 기억해요? 머리 운동해요.'},{...q,old:1},{say:'잘했어요. 물 많이 마셔요.'}]},
  talk:()=>[]},
 dejean:{name:'드장 선장',zone:'ship',x:19,y:14,dir:'up',look:DEJEAN,
  pos:()=>f().woke?[5,10]:[19,14],hide:()=>!!f().jump,
  status:()=>{const F=f();if(F.plan&&!hasItem('우주복')&&!F.launch)return 'todo';if(F.truth&&!F.jump)return 'todo';return null},
  script:()=>{const F=f();
   if(!F.woke){
    if(!F.plan)return [{say:'핀 씨 가족이 왔어요. 지금은 가족 옆에 있어 줘요.'}];
    if(!hasItem('우주복'))return [{say:'핀이 돌로드에 간대요. 승무원도 한 명 같이 가요.'},{say:'돌로드는 아주 위험해요. 이 우주복을 꼭 입어요.',give:'우주복'},{say:'핀을 잘 지켜요. 부탁해요.'}];
    return [{say:'핀을 잘 지켜요. 그리고 꼭 돌아와요.'}]}
   if(!F.truth)return [{say:'돌아왔어요! 다행이에요.'},{say:'엘리가 할 말이 있대요. 먼저 들어 봐요.'}];
   return JUMP()},
  talk:()=>[]},
 gyvoy:{name:'기보이',zone:'ship',x:25,y:10,dir:'left',look:GYVOY,hide:()=>!!f().launch,
  talk:()=>[{say:'아스테리아 여신님! 드디어 돌로드예요.'},{say:'핀은 할 수 있어요. 저는 핀을 믿어요.'},{say:'제 손바닥이요? 아무것도 아니에요. 하하.'}]},
 bensath:{name:'벤사스 하사',zone:'ship',x:19,y:10,dir:'right',look:BENSATH,hide:()=>!!f().launch,
  talk:()=>[{say:'벤사스 하사예요. 강하선은 준비 끝났어요.'},{say:'엔진 기지는 아주 오래된 엘로힘 기계예요.'}]},
 daveS:{name:'데이브',zone:'ship',x:26,y:12,dir:'left',look:{art:DAVE1},
  pos:()=>f().woke?[19,12]:[26,12],hide:()=>!!(f().launch&&!f().woke),
  talk:()=>f().woke?[{say:'탈출했음.'},{say:'배고픔.'}]:[{say:'데이브.'},{say:'돌로드. 같이 감.'}]},
 /* ===== 돌로드 엔진 기지 ===== */
 dave1:{name:'데이브',zone:'dolod',x:9,y:4,dir:'down',look:{art:DAVE1},badge:['중력'],
  after:'무거움. 그래도 괜찮음.',
  talk:()=>[
   {say:'데이브.'},
   {say:'여기 중력 2.5배. 몸 무거움.'},
   Q.dave1[0],
   {say:'천천히 걸어. 넘어지면 아픔.'},
   Q.dave1[1],
   {say:'핀은 안쪽. 꽃 방.',award:['중력']}]},
 dave2:{name:'데이브',zone:'dolod',x:11,y:6,dir:'left',look:{art:DAVE2},badge:['갇히다','배신자'],
  status:()=>!f().linked?null:undefined,
  script:()=>!f().linked?[{say:'…'},{say:'기다림. 핀 잘하길.'}]:null,
  after:'배신자는 잊지 않음.',
  talk:()=>[
   {say:'강하선 없음. 기보이 없음. 벤사스 없음.'},
   {who:'…',say:'격납고 문이 열려 있어요. 강하선은 없어요.'},
   {say:'네 시간 기다림. 안 옴. 우리, 갇혔음.'},
   Q.dave2[0],
   {say:'기보이, 벤사스. 배신자.'},
   Q.dave2[1],
   {say:'물. 핀 나오면 줘.',give:'물병',award:['갇히다','배신자'],set:()=>{f().stranded=1}}]},
 bensathD:{name:'벤사스 하사',zone:'dolod',x:18,y:4,dir:'up',look:BENSATH,badge:['폭풍','번개'],hide:()=>!!f().linked,
  after:'폭풍이 점점 세져요.',
  talk:()=>[
   {say:'밖을 봐요. 우리는 지금 돌로드 구름 속에 있어요.'},
   {say:'두꺼운 구름 띠가 층층이 돌아요. 바람이 아주 세요.'},
   Q.bensath[0],
   {who:'…',say:'번쩍! 구름 사이로 하얀 빛이 갈라져요.'},
   Q.bensath[1],
   {say:'기지가 조용해요. 너무 조용해요.'},
   {say:'핀은 꽃 방에 있어요. 기보이 씨도 같이요.',award:['폭풍','번개']}]},
 finnD:{name:'핀',zone:'dolod',x:13,y:13,dir:'up',still:1,badge:['충돌하다','탈출하다'],
  look:FINN,
  status:()=>{const F=f();if(!F.linked)return got('중력')&&got('폭풍')?'todo':'wait';if(!F.stranded)return null;if(!F.woke)return hasItem('물병')?'todo':null},
  script:()=>{const F=f();
   if(!F.linked){if(!got('중력')||!got('폭풍'))return [{say:'잠깐만요. 아직 준비 중이에요.'},{say:'데이브하고 벤사스가 기다려요. 다들 긴장했어요.'}];return LINK()}
   if(!F.stranded)return [{who:'…',say:'핀은 아직 엔진에 접속해 있어요.'},{who:'…',say:'기보이하고 벤사스는 어디 갔어요?'}];
   if(!F.woke&&!hasItem('물병'))return [{who:'…',say:'핀은 아직 엔진에 접속해 있어요. 네 시간째예요.'}];
   return null},
  after:'모두보다 빨리 가야 돼요. 그게 유일한 길이에요.',
  talk:()=>[
   {who:'…',say:'핀이 전구에서 손을 떼요. 물을 마셔요.',take:['물병']},
   {say:'강하선이 없어요? 기보이가… 우리를 두고 갔어요?'},
   {say:'기지 컴퓨터에 다른 사람이 접속했어요. 벤사스도 우라닉이었어요!'},
   {say:'제가 엔진한테 시킨 일… 이제 무서워요.'},
   {say:'복스록이 켈로완으로 날아가요. 8억 명이 사는 곳이에요.'},
   Q.finnD[0],
   {say:'내가 무슨 짓을 한 거지?'},
   {say:'함대가 다 우리를 쫓아올 거예요. 방법은 하나예요. 모두보다 빨리 가야 돼요.'},
   {say:'운동량을 한 번 더 보낼게요. 이번엔 성실호로요. 앵커선으로 가요!'},
   Q.finnD[1],
   {w:'탈출하다',build:['우리는','앵커선으로','탈출해요'],alts:[['앵커선으로','우리는','탈출해요']]},
   {say:'앵커선 격납고로 가요. 데이브들도 같이!',award:['충돌하다','탈출하다'],set:()=>{f().woke=1}}]},
 gyvoyD:{name:'기보이',zone:'dolod',x:15,y:13,dir:'left',look:GYVOY,hide:()=>!!f().linked,
  talk:()=>[{say:'접속은 핀이 해요. 저는 그냥 구경해요.'},{say:'핀, 천천히요. 서두르지 마요.'}]},
 holo2:{name:'막간',zone:'dolod',x:4,y:12,dir:'down',still:1,look:{art:HOLO_TH},
  status:()=>f().linked&&!f().i2?'todo':null,
  script:()=>!f().linked?[{who:'막간',say:'프리즘이 희미하게 빛나요. 아직이에요.'}]:[
   {who:'막간',say:'멀리 와이니드 함대. 거대한 전함 드라카이나이.'},
   {who:'티라',say:'함대는 멈춰요. 우리는 그냥 지켜볼 거예요.'},
   {who:'막간',say:'돌로드 궤도. 긴 줄이 구름 속으로 내려와요. {스카이훅|스카이훅}이에요.'},
   {who:'막간',say:'기보이하고 벤사스가 반물질 통에 묶여서 올라가요.'},
   {who:'토셰',say:'보스, 대단해요. 배짱이 아주 두둑해요.'},
   {who:'티라',say:'(아버지에게) 다곤 삼촌이 핀을 두고 떠났어요. 계획대로예요.',set:()=>{f().i2=1}}],
  talk:()=>[]},
 /* ===== 카포 프로이스 관문 ===== */
 zelindaC:{name:'젤린다',zone:'capo',x:12,y:6,dir:'up',look:ZELINDA,badge:['의무'],
  status:()=>f().done?undefined:f().i4?'todo':null,
  script:()=>{const F=f();
   if(F.done)return null;
   if(!F.i4)return [{say:'저 관문을 지나면 카포 프로이스예요.'},{say:'곤디아가 너무 멀어요.'}];
   return [
    {say:'곤디아에서 아주 멀리 왔어요.'},
    {who:'핀',say:'미안해요, 누나. 다 제 잘못이에요.'},
    {who:'오틸리아 (통신)',say:'언니는 후작이 아니야. 곤디아에 빚진 거 없어.'},
    {say:'아니, 나는 후작이야. 언젠가 돌아가야 돼.'},
    Q.zelindaC[0],
    {who:'핀',say:'아이고, 이제 누나가 둘이네.'},
    {who:'핀',say:'제가 도울게요. 엄마도 그걸 바라셨을 거예요.'},
    {who:'막간',say:'같은 시간, 아르카디아의 달. 배 한 척이 조용히 돌로드를 떠나요.'},
    {who:'조사이어스 (아르카디아의 달)',say:'이제 연설은 안 해요. 그 통 안에 뭐가 있어요?'},
    {who:'기보이 (아르카디아의 달)',say:'폭탄. 아주 많은 폭탄.'},
    {who:'기보이 (아르카디아의 달)',say:'반물질 삼천 톤. 목적지는 카포 프로이스예요.'},
    {who:'조사이어스 (아르카디아의 달)',say:'…삼천 톤?',set:()=>{f().done=1}},
    {who:'…',say:'아르카디아의 달이 어둠 속으로 사라져요.',finale:1}]},
  after:'언젠가 돌아갈 거예요. 그게 제 의무예요.',
  talk:()=>[]},
 finnC:{name:'핀',zone:'capo',x:9,y:6,dir:'up',look:FINN,
  talk:()=>[{say:'카포 프로이스로 가는 관문이에요. 건너가면 관문이 다섯 개 더 있어요.'},{say:'제가 한 일을 잊지 않을 거예요.'}]},
 ellieC:{name:'엘리',zone:'capo',x:15,y:6,dir:'up',look:ELLIE,
  talk:()=>[{say:'앵커선도 같이 왔어요. 이제 우리 거예요.'},{say:'기보이가 어디 있는지 몰라요. 그게 무서워요.'}]},
 dejeanC:{name:'드장 선장',zone:'capo',x:3,y:8,dir:'right',look:DEJEAN,
  talk:()=>[{say:'관문은 저기 있어요. 그런데 다들 우리를 쫓아와요.'},{say:'프리깃, 셀레스철 배들… 우리 인기가 많네요.'}]},
 holo3:{name:'막간',zone:'capo',x:19,y:8,dir:'down',still:1,look:{art:HOLO_TH},
  status:()=>f().i4?null:'todo',
  script:()=>{const F=f();
   if(!F.i3)return [
    {who:'막간',say:'드라카이나이. 티라가 화면을 봐요. 성실호가 사라졌어요.'},
    {who:'티라',say:'1만 G? 인간이 어떻게 그걸 해?'},
    {who:'스테토스티에리',say:'엔진 힘으로 ZPZ를 켰어요. 아주 똑똑해요.'},
    {who:'티라',say:'성실호를 부숴. 포로는 필요 없어.'},
    {who:'막간',say:'올로모와 사디아는 서로 욕을 하다가 손을 잡아요.'},
    {who:'올로모',say:'좋아. 같이 쫓자. 카포 프로이스로!',set:()=>{f().i3=1}}];
   return [
    {who:'막간',say:'켈로완. 복스록이 삼 주 뒤에 이 행성에 충돌해요.'},
    {who:'막간',say:'여제 캐롤리엔아마이아가 탈출선으로 뛰어가요.'},
    {who:'막간',say:'숨어 있던 {케스트럴 스프라이트|케스트럴 스프라이트}들이 탈출선에 붙어요.'},
    {who:'막간',say:'탈출선의 반물질이 터져요. 여제가 죽었어요.'},
    {who:'티라',say:'어머. 하나 끝, 셋 남았어요.'},
    {who:'티라',say:'다음은 케프리 할머니가 돌아오실 차례예요.'},
    {who:'목소리',say:'멍청한 아이.',set:()=>{f().i4=1}}]},
  talk:()=>[]},
};
const FOLLOW=null;

const INTRO=[{who:'오틸리아 (통신)',say:'핀, 도와줘. 제발.'},{who:'성실호',say:'폴카다브 도킹 완료.'},
 {who:'성실호',say:'떠난 지 31년 8개월. 고향은 많이 변했어요.'},{who:'성실호',say:'손님들이 주인 숙소로 와요.'}];
const DONE=['7장 끝! 성실호는 카포 프로이스 관문 앞에 있어요.','기보이는 반물질 폭탄을 싣고 같은 곳으로 와요.',{expand:()=>wrapUp()},'이야기는 계속돼요. 일지에서 단어를 복습해요.'];

function questText(){
 const F=f(),m=c=>c?'✓':'✗';
 if(F.done)return '7장 끝 · 일지에서 복습해요';
 if(!F.met)return '주인 숙소 · 오틸리아를 만나요';
 if(!F.zel)return '주인 숙소 · 젤린다하고 이야기해요';
 if(!F.plan)return '주인 숙소 · 에버렛하고 이야기해요';
 if(!F.launch)return hasItem('우주복')?'격납고 · 핀하고 출발해요':'격납고 · 선장님한테 가요';
 if(!F.linked){if(ZID!=='dolod')return '격납고 · 강하선에 타요';if(!got('중력')||!got('폭풍'))return `엔진 기지 · 데이브 ${m(got('중력'))} · 전망대의 벤사스 ${m(got('폭풍'))}`;return '꽃 방 · 핀이 엔진에 접속해요'}
 if(!F.stranded)return '격납고 · 강하선은 어디 갔어요?';
 if(!F.woke)return '꽃 방 · 핀한테 물을 가져가요';
 if(!F.truth){if(ZID==='dolod')return '앵커선 격납고 · 탈출해요';if(!F.witness)return '1번 구 현관 · 파블로를 만나요';return '침실 · 엘리한테 가요'}
 if(!F.jump)return '지휘 통제실 · 선장님한테 가요';
 if(!F.i4)return ZID==='capo'?(F.i3?'관측 갑판 · 프리즘을 한 번 더 봐요':'관측 갑판 · 막간 프리즘을 봐요'):'지휘 통제실 · 관측 갑판으로 가요';
 return '관측 갑판 · 젤린다한테 가요';
}
return {WORDS,DICT,CONFUSE,BANK,Q,ITEMS,ZONES,NPC,FOLLOW,INTRO,DONE,questText,TILES:T7};
}});
