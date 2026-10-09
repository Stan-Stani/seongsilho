CHAPTERS.push({id:'ch3',n:'3장',title:'팔 년 후',place:'성실호 · 총독 저택 · 하프니르',words:16,save:'seongsilho-ch3',color:'#C25B7A',
 start:{zone:'ship',x:22,y:5,dir:'up'},introWho:'하이 로사',
 make:()=>{
/* =====================================================================
   3장 · 팔 년 후 — content.
   Book pin: c016 (background c015, epilogue c017). Finn, Ellie and the crew are back from Terrik Papuan on the Lestari:
   ~3 months ship time = ~8 years on Gondiar. Dejean is grey; Malvin is engineering chief (Octain's department mostly moved
   to Hafnir; he got the two entropy drives working, now crated); Nglon runs the farming; ~9,000 Gath crew (Otylia's idea,
   they call her "Saint Otylia"). Josias ("ex-owner") married Otylia (children Laurella, Dushan), joins the Human Affairs
   Advisory Council, founded the Regal Democrats (23 of 25 Hafnir seats), has a bioware palm pad. The marchioness is alive
   and kind; Zelinda is pregnant again (husband Haian, daughter Augusta); Everett is engaged to Variaka (Finn's teen love),
   who refuses Finn's offer. "Gyvoy" is already the impostor — shown neutrally. The ZPZ generator is swapped for the two
   entropy drives and fitted; Gyvoy explains Dolod / Kingsnest (crew told "salvage"); first stop Kajval via the Hoa Quinzu
   Gate. Finn relapses on rekaul (teen memory of Variaka, off-screen), Ellie catches him, "someone in my head".
   Interludes: c015 Second Trial (Thyra, bloodlien, Malquilvo-Beaumont executed with Cbola); c017 Liliana beheads Marcellu
   (finale epilogue). Terence (c015) is middle-aged, married to Jimena, son Aljan, has seen "Gyvoy" with a woman.
   Lore source: notes/canon.md + notes/chapters-outline.md (3장). Audit against the full book before publishing.
   ===================================================================== */
const WORDS=['세월','변하다','결혼하다','조카','기차역','파도','교환하다','약속하다','축복','정당','선거','설치하다','약물','중독','배신하다','암살자'];
const DICT={
 '세월':{k:'흘러간 긴 시간.',e:'time; the years (passing)',ex:'세월이 참 빨라요.',hj:'歲月 · 月 = 월요일의 월'},
 '변하다':{k:'전과 달라져요.',e:'to change',ex:'하프니르가 많이 변했어요.',hj:'變 · 변화(變化)의 변'},
 '결혼하다':{k:'두 사람이 부부가 돼요.',e:'to marry',ex:'오틸리아가 조사이어스하고 결혼했어요.',hj:'結婚 · 結 = 맺다'},
 '조카':{k:'형제나 자매의 아이.',e:'nephew / niece',ex:'로렐라는 핀의 조카예요.',hj:'族下(족하)에서 온 말 · 삼촌 ↔ 조카'},
 '기차역':{k:'기차를 타고 내리는 곳.',e:'train station',ex:'기차역에서 만나요.',hj:'汽車驛 · 車 = 자동차의 차'},
 '파도':{k:'바다에서 밀려오는 큰 물결.',e:'wave (sea)',ex:'오늘은 파도가 높아요.',hj:'波濤 · 波 = 물결'},
 '교환하다':{k:'서로 주고받아요. 바꿔요.',e:'to exchange, trade',ex:'드라이브를 발생기하고 교환했어요.',hj:'交換 · 換 = 환전(換錢)의 환'},
 '약속하다':{k:'앞으로 꼭 하겠다고 말해요.',e:'to promise',ex:'꼭 돌아온다고 약속했어요.',hj:'約束 · 約 = 예약(豫約)의 약'},
 '축복':{k:'좋은 일이 있기를 비는 마음.',e:'blessing',ex:'어머니가 핀을 축복했어요.',hj:'祝福 · 祝 = 축하(祝賀)의 축'},
 '정당':{k:'생각이 같은 사람들이 모여서 정치를 하는 모임.',e:'political party',ex:'조사이어스가 정당을 만들었어요.',hj:'政黨 · 政 = 정치(政治)의 정'},
 '선거':{k:'투표로 대표를 뽑는 일.',e:'election',ex:'다음 달에 선거가 있어요.',hj:'選擧 · 選 = 선수(選手)의 선!'},
 '설치하다':{k:'기계를 제자리에 달아서 쓸 수 있게 해요.',e:'to install',ex:'새 필터를 설치했어요.',hj:'設置 · 置 = 위치(位置)의 치'},
 '약물':{k:'몸이나 마음을 바꾸는 약. 위험할 수 있어요.',e:'drug(s)',ex:'약물은 조심해야 돼요.',hj:'藥物 · 藥 = 약국(藥局)의 약'},
 '중독':{k:'그만두고 싶어도 그만둘 수 없는 상태.',e:'addiction',ex:'핀은 옛날에 약물 중독이었어요.',hj:'中毒 · 毒 = 독'},
 '배신하다':{k:'믿는 사람을 속이고 등을 돌려요.',e:'to betray',ex:'친구가 저를 배신했어요.',hj:'背信 · 信 = 신호(信號)의 신'},
 '암살자':{k:'몰래 사람을 죽이는 사람.',e:'assassin',ex:'암살자가 칼을 들었어요.',hj:'暗殺者 · 者 = 학자(學者)의 자'},
 /* glosses for words that appear in lines but are not badges */
 '리걸 민주당':{k:"'왕가처럼 당당한' 민주당. 조사이어스의 정당이에요.",e:'Regal Democrats'},
 '시간 지연':{k:'아주 빨리 날면 배 안의 시간이 천천히 가요.',e:'time dilation'},
 '개스':{k:'키가 3미터인 체인즐링 사람들. 힘이 아주 세요.',e:'Gath (3 m Changelings)'},
 '주인 방':{k:'배 주인이 쓰는 방.',e:"owner's quarters"},
 '삼촌':{k:'아빠나 엄마의 남자 형제.',e:'uncle'},
 '필터':{k:'물이나 공기를 깨끗하게 하는 부품.',e:'filter'},
 '위원회':{k:'어떤 일을 의논하고 정하는 사람들의 모임.',e:'council, committee'},
 '처남':{k:'아내의 남자 형제.',e:"brother-in-law (wife's brother)"},
 '기금 모금':{k:'좋은 일에 쓸 돈을 모으는 것.',e:'fundraising'},
 '화살 열차':{k:'하프니르와 산타 로사를 잇는 아주 빠른 자기부상 열차.',e:'arrow train (maglev)'},
 '임신':{k:'배 속에 아기가 있어요.',e:'pregnancy'},
 '약혼하다':{k:'결혼하기로 약속해요.',e:'to get engaged'},
 'ZPZ 발생기':{k:'하늘의 관문을 지나게 해 주는 엘로힘 기계.',e:'ZPZ generator'},
 '엔트로피 드라이브':{k:'방주의 옛날 엔진. 시공간을 망가뜨려서 엘로힘이 금지했어요.',e:'entropy drive (banned)'},
 '돌로드':{k:'철이 아주 많은 이상한 가스 행성. 엔진이 붙어 있어요.',e:'Dolod (iron exotic gas giant)'},
 '아르키메데스 엔진':{k:'행성을 움직이는 엘로힘의 아주 큰 기계.',e:'Archimedes Engine'},
 '킹스네스트':{k:'아르키메데스 엔진 공장이 들어 있는 거대한 공.',e:'Kingsnest (Engine factory)'},
 '레콜':{k:'옛날 기억을 다시 살게 하는 약.',e:'rekaul (memory-replay drug)'},
 '블러드리언':{k:'비늘 얼굴에 채찍 같은 꼬리가 있는 큰 고양이 맹수.',e:'bloodlien (beast)'},
 '시볼라':{k:'몸을 곰팡이로 바꾸는 나노 처형.',e:'Cbola (nanotech execution)'},
 '체렌코프 칼':{k:'푸른빛이 나는 아주 귀한 에너지 칼.',e:'Cherenkov blade'},
 '너브잼':{k:'신경을 막아서 사람을 쓰러뜨리는 무기.',e:'nervejam (stun weapon)'},
};
const CONFUSE={'세월':['세상','새벽'],'변하다':['편하다','변호사'],'결혼하다':['결정하다','결석하다'],'조카':['조각','조금'],'기차역':['기차표','기억'],
 '파도':['포도','파티'],'교환하다':['환영하다','교회'],'약속하다':['약하다','예약하다'],'축복':['축구','축하'],'정당':['정답','정원'],'선거':['선수','선물'],
 '설치하다':['설명하다','설거지하다'],'약물':['약속','양말'],'중독':['중국','중학교'],'배신하다':['배우다','배달하다'],'암살자':['암호','감사']};

const BANK=[
 {w:'세월',ask:'___이 흘러서 아이들이 다 컸어요.',opts:[['세월',1],['새벽',0,'새벽은 아침 일찍이에요. 긴 시간이 흘렀어요 → "세월".']]},
 {w:'변하다',ask:'하프니르가 정말 많이 ___. 빈 땅이 도시가 됐어요.',opts:[['변했어요',1],['편했어요',0,'편하다는 몸이나 마음이 좋은 거예요. 달라졌어요 → "변했어요".']]},
 {w:'결혼하다',ask:'두 사람은 내년 봄에 ___ 거예요.',opts:[['결혼할',1],['결혼했을',0,'"내년"은 앞으로의 일이에요 → "결혼할 거예요".']]},
 {w:'조카',ask:'누나의 딸은 제 ___예요.',opts:[['조카',1],['조각',0,'조각은 작은 부분이에요. 누나의 딸은 "조카".']]},
 {w:'기차역',ask:'산타 로사 ___까지 얼마나 걸려요?',opts:[['기차역',1],['기억',0,'기억은 머리에 남은 거예요. 기차 타는 곳 → "기차역".']]},
 {w:'파도',ask:'___가 높아서 오늘은 수영하지 마세요.',opts:[['파도',1],['파티',0,'파티는 즐거운 모임이에요. 높은 바닷물 → "파도".']]},
 {w:'교환하다',ask:'이 셔츠가 작아요. 큰 걸로 ___ 주세요.',opts:[['교환해',1],['환영해',0,'환영은 반갑게 맞는 거예요. 물건을 바꿔요 → "교환해 주세요".']]},
 {w:'약속하다',ask:'내일 세 시에 만나기로 ___.',opts:[['약속했어요',1],['약했어요',0,'약하다는 힘이 없는 거예요. "만나기로 약속했어요".']]},
 {w:'축복',ask:'결혼식에서 모두 두 사람을 ___해요.',opts:[['축복',1],['배신',0,'배신은 나쁜 일이에요! 좋은 일을 빌어요 → "축복".']]},
 {w:'정당',ask:'우리 ___이 선거에서 이겼어요!',opts:[['정당',1],['정답',0,'정답은 맞는 답이에요. 정치 모임은 "정당".']]},
 {w:'선거',ask:'시장 ___는 사 년마다 있어요.',opts:[['선거',1],['선물',0,'선물은 주는 물건이에요. 대표를 뽑는 날은 "선거".']]},
 {w:'설치하다',ask:'방에 에어컨을 ___. 이제 시원해요.',opts:[['설치했어요',1],['설거지했어요',0,'설거지는 그릇을 씻는 거예요! 기계를 달았어요 → "설치했어요".']]},
 {w:'약물',ask:'선수가 몰래 ___을 써서 메달을 잃었어요.',opts:[['약물',1],['양말',0,'양말은 발에 신어요! 몰래 쓴 약은 "약물".']]},
 {w:'중독',ask:'핸드폰 ___이에요. 하루 종일 봐요.',opts:[['중독',1],['중학교',0,'중학교는 학교예요. 그만둘 수 없어요 → "중독".']]},
 {w:'배신하다',ask:'옛날에 릴리아나가 핀의 팀을 ___.',opts:[['배신했어요',1],['배웠어요',0,'배우다는 공부하는 거예요. 속이고 등을 돌렸어요 → "배신했어요".']]},
 {w:'암살자',ask:'여왕을 노리는 ___가 궁전에 숨어 있어요.',opts:[['암살자',1],['관중',0,'관중은 경기를 보는 사람이에요. 몰래 죽이는 사람은 "암살자".']]},
];

const Q={
 dejean:[
  {w:'세월',ask:'팔 년이 지났어요. ___이 참 빨라요.',opts:[['세월',1],['세상',0,'세상은 사람들이 사는 곳 전부예요. 지나간 긴 시간은 "세월".'],['요일',0,'요일은 월요일, 화요일… 이에요. 긴 시간은 "세월".']]},
  {w:'변하다',ask:'제 머리가 하얗게 ___.',opts:[['변했어요',1],['편했어요',0,'편하다는 몸이나 마음이 좋은 거예요. 색이 달라졌어요 → "변했어요".'],['결정했어요',0,'머리는 결정을 안 해요! 달라졌어요 → "변했어요".']]},
  {w:'세월',gram:1,ask:'당신들이 떠난 ___ 팔 년 됐어요.',opts:[['지',1],['동안',0,'"떠난 동안"은 안 써요. 지금까지 지난 시간 → "떠난 지 팔 년 됐어요".'],['때',0,'"떠났을 때"는 그 순간이에요. 지금까지 지난 시간 → "떠난 지".']]},
 ],
 ellie:[
  {w:'결혼하다',ask:'제 친구들이 다 ___. 아이도 있어요!',opts:[['결혼했어요',1],['결정했어요',0,'결정은 고르는 거예요. 부부가 됐어요 → "결혼했어요".'],['결석했어요',0,'결석은 학교에 안 가는 거예요. 부부가 됐어요 → "결혼했어요".']]},
  {w:'결혼하다',ask:'두 사람이 ___ 때 우리는 우주에 있었어요.',opts:[['결혼했을',1],['결혼하러',0,'"-러"는 목적이에요. 그 일이 있었던 시간 → "결혼했을 때".'],['결혼하는',0,'지난 일에는 "-았/었을 때"를 써요 → "결혼했을 때".']]},
 ],
 finn:[
  {w:'조카',ask:'제 쌍둥이 오틸리아의 아이들. 저한테는 ___예요.',opts:[['조카',1],['손자',0,'손자는 내 아이의 아이예요. 형제의 아이는 "조카".'],['친구',0,'친구는 아니에요! 형제의 아이는 "조카".']]},
 ],
 zelinda:[
  {w:'조카',ask:'제 딸 오거스타는 핀의 ___예요.',opts:[['조카',1],['누나',0,'누나는 저예요! 핀의 누나의 딸 → "조카".']]},
 ],
 pablo:[
  {w:'설치하다',ask:'새 필터를 탱크에 ___.',opts:[['설치해요',1],['설명해요',0,'설명은 말로 알려 주는 거예요. 기계를 달아요 → "설치해요".'],['수리해요',0,'수리는 고장 난 걸 고치는 거예요. 새 걸 달아요 → "설치해요".']]},
 ],
 malvin:[
  {w:'설치하다',ask:'발생기를 다 ___ 출발할 수 있어요.',opts:[['설치해야',1],['설치하지만',0,'"-지만"은 반대 이야기예요. 꼭 필요한 일 → "설치해야".'],['설치하면서',0,'"-(으)면서"는 두 일을 같이 할 때예요. 먼저 필요한 일 → "설치해야".']]},
 ],
 gyvoy:[
  {w:'교환하다',ask:'드라이브 두 개하고 발생기 하나를 ___.',opts:[['교환해요',1],['환영해요',0,'환영은 반갑게 맞는 거예요. 서로 주고받아요 → "교환해요".'],['반납해요',0,'반납은 빌린 걸 돌려주는 거예요. 서로 바꿔요 → "교환해요".']]},
  {w:'교환하다',ask:'처음 만났을 때 우리는 연료하고 씨앗을 ___.',opts:[['교환했어요',1],['교환할 거예요',0,'"처음 만났을 때"는 지난 일이에요 → "교환했어요".']]},
 ],
 josias:[
  {w:'정당',ask:'생각이 같은 사람들의 정치 모임. ___이에요.',opts:[['정당',1],['정답',0,'정답은 맞는 답이에요. 정치 모임은 "정당".'],['정원',0,'정원은 꽃과 나무가 있는 곳이에요. 정치 모임은 "정당".']]},
  {w:'선거',ask:'하프니르 사람들이 ___에서 우리를 뽑았어요.',opts:[['선거',1],['선수',0,'選이 같아요! 선수는 경기하는 사람. 투표로 뽑는 건 "선거".'],['시합',0,'시합은 이기고 지는 경기예요. 투표는 "선거".']]},
 ],
 mother:[
  {w:'축복',ask:'어머니가 떠나는 아들한테 좋은 일만 있기를 빌어요. 그게 ___이에요.',opts:[['축복',1],['축구',0,'축구는 공으로 하는 운동이에요! 좋은 마음을 주는 건 "축복".'],['경고',0,'경고는 위험하다고 알려 주는 거예요. 좋은 마음은 "축복".']]},
 ],
 station:[
  {w:'기차역',ask:'화살 열차는 ___에서 타요.',opts:[['기차역',1],['기차표',0,'기차표는 종이예요. 기차를 타는 곳은 "기차역".'],['경기장',0,'경기장은 시합하는 곳이에요. 기차를 타는 곳은 "기차역".']]},
 ],
 kid:[
  {w:'파도',ask:'바다에서 철썩철썩! 큰 ___가 와요!',opts:[['파도',1],['포도',0,'포도는 과일이에요! 바다의 큰 물결은 "파도".'],['연못',0,'연못은 작고 조용해요. 바다의 큰 물결은 "파도".']]},
 ],
 otylia:[
  {w:'약속하다',ask:'핀, 이번에는 빨리 돌아온다고 ___.',opts:[['약속해',1],['약해',0,'약하다는 힘이 없는 거예요. 꼭 하겠다고 말해요 → "약속해".'],['예약해',0,'예약은 식당이나 호텔 자리를 잡는 거예요. 사람한테 말하는 건 "약속해".']]},
 ],
 vari:[
  {w:'배신하다',ask:'에버렛은 저를 믿어요. 저는 그 사람을 ___ 수 없어요.',opts:[['배신할',1],['배울',0,'배우다는 공부하는 거예요. 믿는 사람을 속여요 → "배신할".'],['배달할',0,'배달은 물건을 가져다주는 거예요! "배신할 수 없어요".']]},
 ],
 night:[
  {w:'약물',ask:'레콜은 기억을 다시 보는 ___이에요.',opts:[['약물',1],['약속',0,'약속은 꼭 하겠다고 말하는 거예요. 몸에 넣는 약 → "약물".'],['음식',0,'레콜은 음식이 아니에요. 위험한 약 → "약물".']]},
  {w:'중독',ask:'그만두고 싶어도 못 그만둬요. 그게 ___이에요.',opts:[['중독',1],['중국',0,'중국은 나라예요! 그만둘 수 없는 상태는 "중독".'],['회복',0,'회복은 다시 건강해지는 거예요. 그만둘 수 없는 건 "중독".']]},
 ],
 epi:[
  {w:'암살자',ask:'몰래 사람을 죽이는 사람. 릴리아나는 ___예요.',opts:[['암살자',1],['경호원',0,'경호원은 사람을 지켜요. 몰래 죽이는 사람은 "암살자".'],['심판',0,'심판은 시합에서 결정하는 사람이에요. 몰래 죽이는 사람은 "암살자".']]},
 ],
 terence:[
  {w:'세월',gram:1,ask:'우리가 처음 만난 ___ 벌써 팔 년이에요.',opts:[['지',1],['때',0,'"만났을 때"는 그 순간이에요. 지금까지 지난 시간 → "만난 지".']]},
 ],
 cafe:[ // 1장 · 2장 words, no badges
  {ask:'엔진이 고장 났어요. 기관장님이 ___ 거예요.',opts:[['수리할',1],['수리될',0,'기관장님이 직접 해요 → "수리할 거예요".']]},
  {ask:'우주선이 곤디아 주위의 ___를 돌아요.',opts:[['궤도',1],['기도',0,'기도는 신한테 말하는 거예요. 도는 길 → "궤도".']]},
  {ask:'연료가 없으면 ___할 수 없어요.',opts:[['출발',1],['도착',0,'연료가 없으면 떠날 수 없어요 → "출발".']]},
  {ask:'우주에는 ___가 없어요. 헬멧을 꼭 써요.',opts:[['산소',1],['연료',0,'연료는 엔진이 먹어요. 사람은 "산소"로 숨 쉬어요.']]},
  {ask:'바다 밑에서 옛날 배의 ___를 찾았어요.',opts:[['잔해',1],['간식',0,'간식은 먹는 거예요! 부서진 배의 남은 것 → "잔해".']]},
  {ask:'달처럼 행성 주위를 도는 것은 ___예요.',opts:[['위성',1],['위험',0,'위험은 다칠 수 있는 거예요. 행성 주위를 도는 것 → "위성".']]},
  {ask:'강아지가 땅을 ___ 뼈를 숨겼어요.',opts:[['파서',1],['타서',0,'타다는 차나 배를 탈 때예요. 땅에 구멍을 내요 → "파서".']]},
  {ask:'경찰이 드디어 ___을 잡았어요.',opts:[['범인',1],['선수',0,'선수는 경기하는 사람이에요. 나쁜 일을 한 사람 → "범인".']]},
  {ask:'시합에서 제 ___는 아주 강해요.',opts:[['상대',1],['상태',0,'상태는 건강이나 기분이에요. 같이 싸우는 사람은 "상대".']]},
 ],
};

/* In-character review lines. Invented small details (not in the book; audit them with the rest):
   the jacaranda by Hafnir station is in bloom; a hot day and iced juice at the beach café; a train from Santa Rosa is due soon;
   the Regal Democrat poster is purple (the poster tile); Pablo will fit the next filter too; Renata offers a blessing and warns
   about unknown drugs; the marchioness "only nags" Zelinda; Finn talked of exploring since childhood (as Otylia says in 1장);
   Dushan digs a sandcastle with a tunnel, Laurella hears the waves at night and wants a pinky promise; the Daves "can't quit"
   the sea and miss its salt; Josias wants all 25 seats next time and jokes he never lies; Otylia teases Finn about marrying
   Ellie and asks if he promised to write; Terence says police suspect everyone; Gyvoy says Travelers keep contracts (his
   cover); Pablo would never betray Saint Otylia and is scared of talk of assassins (he hates fighting, c012). Class time:
   Gath carry cargo in the days before departure, the crew send messages to Gondiar on the last night, Finn leaves video
   letters for his nieces and nephew, Renata thinks Finn looks tired. */
const REVIEW=[ // people reuse learned words (this chapter's and 1장/2장's) in their own voice, by speaker in story order
 // 드장: from her greeting to the end (her departure talk comes first while it's due)
 {w:'세월',by:'dejean',ask:'이 기계 팔은 ___이 흘러도 안 늙어요.',opts:[['세월',1],['세상',0,'세상은 사람들이 사는 곳 전부예요. 흐르는 건 "세월".'],['새벽',0,'새벽은 아침 일찍이에요. 흘러간 긴 시간은 "세월".']]},
 {w:'변하다',by:'dejean',ask:'1번 구 봤어요? 팔 년 동안 완전히 ___.',opts:[['변했어요',1],['편했어요',0,'편하다는 몸이나 마음이 좋은 거예요. 달라졌어요 → "변했어요".'],['변명했어요',0,'1번 구는 변명 안 해요. 달라졌어요 → "변했어요".']]},
 {w:'교환하다',by:'dejean',when:()=>!!f().swap,ask:'드라이브는 가고 발생기가 왔어요. 잘 ___.',opts:[['교환했어요',1],['환영했어요',0,'발생기는 환영했죠. 그런데 서로 주고받은 건 "교환했어요".'],['반납했어요',0,'반납은 빌린 걸 돌려줄 때예요. 서로 바꿨어요 → "교환했어요".']]},
 {w:'설치하다',by:'dejean',when:()=>!!f().zpz,ask:'발생기까지 ___. 이 낡은 배가 관문을 지나요.',opts:[['설치했어요',1],['설명했어요',0,'설명만으로는 관문을 못 지나요. 기계를 달았어요 → "설치했어요".'],['설거지했어요',0,'발생기는 그릇이 아니에요. 기계를 달았어요 → "설치했어요".']]},
 {w:'잔해',by:'dejean',ask:'그 발생기가 그렇게 오래된 ___에서 나왔어요?',opts:[['잔해',1],['잔치',0,'잔치는 파티예요. 부서진 배에서 나왔으면 "잔해".'],['잔디',0,'잔디는 마당의 풀이에요. 부서진 배는 "잔해".']]},
 {w:'수리하다',by:'dejean',ask:'옥테인이 그 드라이브 두 개를 다 ___.',opts:[['수리했어요',1],['수리됐어요',0,'옥테인이 직접 했어요 → "수리했어요". 드라이브가 주어면 "수리됐어요".'],['회복했어요',0,'회복은 사람이 다시 건강해지는 거예요. 기계는 "수리했어요".']]},
 {w:'출발하다',by:'dejean',when:()=>!!f().zpz&&!f().done,ask:'며칠 뒤에 관문으로 ___해요. 그때까지 잘 쉬어요.',opts:[['출발',1],['도착',0,'도착은 오는 거예요. 우리는 떠나요 → "출발".'],['연습',0,'연습은 없어요. 진짜로 떠나요 → "출발".']]},
 // 엘리: on the bridge by day, in the owner's quarters after Finn's confession, at the helm after departure (done)
 {w:'결혼하다',by:'ellie',ask:'할아버지가 ___ 오틸리아가 제 할머니예요!',opts:[['결혼해서',1],['결정해서',0,'결정은 고르는 거예요. 부부가 됐어요 → "결혼해서".'],['결석해서',0,'결석은 학교에 안 가는 거예요! 부부가 됐어요 → "결혼해서".']]},
 {w:'인양하다',by:'ellie',ask:'우리가 잔해에서 발생기를 ___. 진짜 힘들었어요.',opts:[['인양했어요',1],['인사했어요',0,'인사는 "안녕하세요"예요. 끌어 올렸어요 → "인양했어요".'],['이사했어요',0,'이사는 집을 옮기는 거예요! 끌어 올렸어요 → "인양했어요".']]},
 {w:'위성',by:'ellie',ask:'파이브는 작은 ___이에요. 다들 은색 공 안에 살아요.',opts:[['위성',1],['행성',0,'행성은 별 주위를 돌아요. 파이브는 행성을 도는 달 → "위성".'],['위생',0,'위생은 깨끗하게 하는 거예요. 달은 "위성".']]},
 {w:'추격하다',by:'ellie',ask:'관문부터 우리를 ___ 배, 기억나요? 핀이 미사일을 다 부쉈어요.',opts:[['추격한',1],['출발한',0,'출발은 떠나는 거예요. 뒤에서 쫓아온 배 → "추격한".'],['추천한',0,'추천하다는 좋다고 알려 주는 거예요. 쫓아온 배 → "추격한".']]},
 {w:'약물',by:'ellie',ask:'레콜 같은 ___은 이제 안 돼요. 핀도 알아요.',opts:[['약물',1],['약속',0,'약속은 지키는 거예요. 레콜 같은 위험한 약은 "약물".'],['음료',0,'음료는 주스 같은 거예요. 레콜은 "약물".']]},
 {w:'중독',by:'ellie',ask:'___은 혼자 못 이겨요. 그래서 제가 옆에 있어요.',opts:[['중독',1],['중학교',0,'중학교는 학교예요! 그만둘 수 없는 건 "중독".'],['감독',0,'감독은 팀을 이끄는 사람이에요. 그만둘 수 없는 건 "중독".']]},
 {w:'가속',by:'ellie',when:()=>!!f().done,ask:'하이 로사를 떠났어요. 이제 ___해요!',opts:[['가속',1],['가족',0,'가족은 엄마, 아빠예요! 빨라지는 건 "가속".'],['간식',0,'간식은 나중에 먹어요. 빨라지는 건 "가속".']]},
 {w:'암살자',by:'ellie',ask:'데이브들이 있으면 ___도 안 무서워요.',opts:[['암살자',1],['손님',0,'손님은 원래 안 무서워요! 몰래 죽이는 사람이 "암살자".'],['경호원',0,'경호원은 지키는 사람이에요. 데이브들처럼요. 몰래 죽이는 사람은 "암살자".']]},
 // 파블로: in Sphere One once the filter is in
 {w:'설치하다',by:'pablo',ask:'다음 필터도 파블로가 ___. 팔이 길어요.',opts:[['설치할게요',1],['설명할게요',0,'설명은 말로 하는 거예요. 필터를 다는 건 "설치할게요".'],['설거지할게요',0,'설거지는 그릇 씻기예요! 필터를 다는 건 "설치할게요".']]},
 {w:'조카',by:'pablo',ask:'성 오틸리아님 아이들은 핀 씨 ___예요.',opts:[['조카',1],['조각',0,'조각은 작은 부분이에요. 형제의 아이는 "조카".'],['손님',0,'손님은 집에 오는 사람이에요. 쌍둥이의 아이는 "조카".']]},
 {w:'선장',by:'pablo',ask:'드장 ___님 머리가 하얘졌어요. 그래도 멋있어요.',opts:[['선장',1],['선생',0,'선생님은 학교에 있어요. 배에서 제일 높은 분은 "선장"님.'],['사장',0,'사장님은 회사에 있어요. 배에서 제일 높은 분은 "선장"님.']]},
 {w:'식량',by:'pablo',ask:'1번 구 과일은 우리 ___이에요. 매일 먹어요.',opts:[['식량',1],['산소',0,'산소는 숨 쉴 때 필요해요. 매일 먹는 건 "식량".'],['시력',0,'시력은 눈이 보는 힘이에요. 먹는 건 "식량".']]},
 {w:'배신하다',by:'pablo',ask:'파블로는 성 오틸리아님을 절대 ___ 않아요.',opts:[['배신하지',1],['배달하지',0,'배달은 물건을 가져다주는 거예요. 믿는 분한테 등을 돌리는 건 "배신하지".'],['배우지',0,'배우다는 공부하는 거예요. 믿는 분한테 등을 돌리는 건 "배신하지".']]},
 {w:'암살자',by:'pablo',ask:'___ 이야기는 무서워요. 파블로는 싸움이 싫어요.',opts:[['암살자',1],['손님',0,'손님은 안 무서워요! 몰래 죽이는 사람은 "암살자".'],['관중',0,'관중은 경기를 보는 사람이에요. 몰래 죽이는 사람은 "암살자".']]},
 // 레나타: in Sphere One, always
 {w:'공격하다',by:'renata',ask:'고스트가 ___했다고요? 다친 데 없어요?',opts:[['공격',1],['공부',0,'공부는 책으로 해요! 쏘고 때리는 건 "공격".'],['방어',0,'방어는 막는 거예요. 고스트가 먼저 쐈어요 → "공격".']]},
 {w:'산소',by:'renata',ask:'원통 나무들이 ___를 만들어요. 숨 쉬기 좋죠?',opts:[['산소',1],['산수',0,'산수는 숫자 공부예요! 숨 쉬는 공기는 "산소".'],['연료',0,'연료는 엔진이 먹어요. 사람이 숨 쉬는 건 "산소".']]},
 {w:'약물',by:'renata',ask:'모르는 ___은 먹지 마요. 레나타한테 먼저 물어봐요.',opts:[['약물',1],['양말',0,'양말은 발에 신어요! 몸에 넣는 위험한 약은 "약물".'],['약속',0,'약속은 지키는 거예요. 몸에 넣는 약은 "약물".']]},
 {w:'축복',by:'renata',when:()=>!!f().zpz,ask:'긴 여행이에요. 레나타가 ___해 줄게요.',opts:[['축복',1],['축구',0,'축구는 운동이에요! 좋은 일을 비는 건 "축복".'],['배신',0,'배신은 나쁜 거예요! 좋은 일을 비는 건 "축복".']]},
 // 데이브와 데이브 (both): hangar 3, always — terse
 {w:'소금',by:'데이브',ask:'바다. ___ 맛. 그리워요.',opts:[['소금',1],['설탕',0,'설탕 아님. 바다는 짜요. "소금".'],['소문',0,'소문 아님. 짠 것. "소금".']]},
 {w:'경호원',by:'데이브',ask:'우리 일. 성실호 ___.',opts:[['경호원',1],['손님',0,'손님 아님. 지키는 사람. "경호원".'],['요리사',0,'요리사 아님. 지키는 사람. "경호원".']]},
 {w:'죽이다',by:'데이브',ask:'고스트가 이치카를 ___. 나쁜 기계.',opts:[['죽였어요',1],['죽었어요',0,'죽다는 자기가 죽는 거. 고스트가 함. "죽였어요".'],['줄였어요',0,'줄이다는 작게 하는 거. 고스트가 한 일. "죽였어요".']]},
 {w:'설치하다',by:'데이브',when:()=>!!f().zpz,ask:'발생기 ___ 끝. 이제 지켜요.',opts:[['설치',1],['설명',0,'설명 아님. 기계 달기. "설치".'],['설거지',0,'설거지 아님. 그릇 아님. "설치".']]},
 {w:'중독',by:'데이브',ask:'바다, 못 끊어요. 바다 ___.',opts:[['중독',1],['중국',0,'중국 아님. 나라. 못 끊음. "중독".'],['감독',0,'감독 아님. 못 끊음. "중독".']]},
 {w:'암살자',by:'데이브',ask:'___ 와도 괜찮아요. 우리가 막아요.',opts:[['암살자',1],['손님',0,'손님 안 막아요. 몰래 죽이는 사람. "암살자".'],['선장',0,'선장님 안 막아요. 몰래 죽이는 사람. "암살자".']]},
 // 조사이어스: on the dais after the ceremony
 {w:'변하다',by:'josias',ask:'처남이 준 빈 땅이 도시로 ___. 대단하죠?',opts:[['변했어요',1],['편했어요',0,'땅이 편했어요? 하하. 달라졌어요 → "변했어요".'],['변명했어요',0,'땅은 변명 안 해요. 하하. 달라졌어요 → "변했어요".']]},
 {w:'정당',by:'josias',ask:'우리 ___ 포스터 봤어요? 리걸 민주당! 보라색이에요.',opts:[['정당',1],['정답',0,'정답은 시험의 맞는 답이에요. 정치 모임은 "정당".'],['정원',0,'정원 포스터요? 하하. 정치 모임은 "정당".']]},
 {w:'선거',by:'josias',ask:'다음 ___에서는 스물다섯 석 다 가질 거예요!',opts:[['선거',1],['선수',0,'선수는 경기하는 사람이에요. 의원을 뽑는 건 "선거".'],['선물',0,'의석은 선물로 안 줘요. 하하. 투표는 "선거".']]},
 {w:'지도',by:'josias',ask:'제 항해 ___, 처남이 아직 가지고 있어요?',opts:[['지도',1],['사전',0,'사전은 단어를 찾을 때 봐요. 길이 그려진 건 "지도".'],['기도',0,'기도는 여신님한테 하는 말이에요. 길 그림은 "지도".']]},
 {w:'거짓말하다',by:'josias',ask:'저는 ___ 안 해요. 정직한 정치인이에요. 하하.',opts:[['거짓말',1],['거절',0,'거절은 "싫어요" 하는 거예요. 정직하면 안 하는 건 "거짓말".'],['기도',0,'기도는 여신님한테 해요. 정직하면 안 하는 건 "거짓말".']]},
 // 후작부인: after her blessing, to Finn while he's with you (not at night)
 {w:'세월',by:'mother',when:()=>!f().night,ask:'___이 빠르구나. 나는 할머니가 됐는데 너는 그대로야.',opts:[['세월',1],['세상',0,'세상은 사람들이 사는 곳 전부란다. 빨리 가는 건 "세월"이야.'],['요일',0,'요일은 월요일, 화요일이지. 긴 시간은 "세월"이란다.']]},
 {w:'조카',by:'mother',when:()=>!f().night,ask:'너한테 ___가 벌써 셋이구나. 좋은 삼촌이 되거라.',opts:[['조카',1],['손자',0,'손자는 내 손주들이란다. 네 형제의 아이들은 "조카"야.'],['조각',0,'조각이라니. 형제의 아이들은 "조카"란다.']]},
 {w:'축복',by:'mother',when:()=>!f().night,ask:'내 ___을 받았으니 걱정하지 말거라.',opts:[['축복',1],['축구',0,'축구는 운동이란다. 엄마의 좋은 마음은 "축복"이야.'],['경고',0,'경고는 위험을 알리는 거란다. 좋은 마음은 "축복"이야.']]},
 {w:'탐험',by:'mother',when:()=>!f().night,ask:'또 ___을 떠나는구나. 어릴 때부터 그랬지.',opts:[['탐험',1],['시험',0,'시험은 학교에서 보는 거란다. 떠나는 건 "탐험"이야.'],['시합',0,'시합은 이기고 지는 경기란다. 모르는 곳으로 떠나는 건 "탐험"이야.']]},
 // 젤린다: on the dais, any time you're at the Roundhouse
 {w:'결혼하다',by:'zelinda',ask:'버라이카가 {약혼했어요|약혼하다}. 에버렛하고 ___ 거예요.',opts:[['결혼할',1],['싸울',0,'싸우다니요! 약혼했으니까 "결혼할" 거예요.'],['결석할',0,'결석은 학교에 안 가는 거예요. 약혼했으니까 "결혼할" 거예요.']]},
 {w:'우주선',by:'zelinda',ask:'그 낡은 ___이 정말 관문을 지나요? 하하.',opts:[['우주선',1],['우체국',0,'우체국은 편지 보내는 곳이에요! 우주를 나는 배는 "우주선".'],['우유',0,'우유는 마시는 거예요! 낡은 배는 "우주선".']]},
 {w:'축복',by:'zelinda',ask:'어머니가 핀을 ___해 주셨어요? 저한테는 잔소리만 하세요.',opts:[['축복',1],['축구',0,'하하, 축구요? 좋은 일을 비는 마음은 "축복".'],['축제',0,'축제는 큰 잔치예요. 어머니의 좋은 마음은 "축복".']]},
 // 역무원: Hafnir station, once he has your ticket
 {w:'세월',by:'station',ask:'___이 흘러서 빈 바닷가가 도시가 됐어요.',opts:[['세월',1],['세상',0,'세상은 사람들이 사는 곳 전부예요. 흐르는 시간은 "세월".'],['새벽',0,'새벽은 아침 일찍이에요. 흐르는 긴 시간은 "세월".']]},
 {w:'기차역',by:'station',ask:'___ 앞 자카란다가 요즘 제일 예뻐요.',opts:[['기차역',1],['기차표',0,'기차표는 종이예요. 꽃나무는 "기차역" 앞에 있어요.'],['기억',0,'기억은 머리에 남은 거예요. 기차 타는 곳은 "기차역".']]},
 {w:'정당',by:'station',ask:'저 포스터요? 리걸 민주당, 조사이어스 씨 ___이에요.',opts:[['정당',1],['정답',0,'정답은 맞는 답이에요. 정치 모임은 "정당".'],['식당',0,'식당 포스터 아니에요. 정치 모임은 "정당".']]},
 {w:'얼음',by:'station',ask:'오늘 덥죠? 바닷가 카페에 ___ 넣은 주스 있어요.',opts:[['얼음',1],['얼굴',0,'얼굴 넣은 주스는 없어요! 차가운 건 "얼음".'],['소금',0,'소금 넣은 주스는 짜요! 차가운 건 "얼음".']]},
 {w:'도착하다',by:'station',ask:'산타 로사에서 오는 열차가 곧 여기 ___.',opts:[['도착해요',1],['출발해요',0,'출발은 떠나는 거예요. 오는 열차는 "도착해요".'],['돌아가요',0,'돌아가다는 원래 곳으로 가는 거예요. 여기로 오는 열차는 "도착해요".']]},
 // 오틸리아: by the mushroom house after you promise (to Finn: only while he's with you)
 {w:'변하다',by:'otylia',when:()=>!f().night,ask:'넌 하나도 안 ___. 나만 늙었어.',opts:[['변했어',1],['편했어',0,'편했어? 아니, 얼굴 말이야. 달라졌어 → "변했어".'],['변명했어',0,'변명은 잘못을 숨기는 말이야. 얼굴이 달라졌어 → "변했어".']]},
 {w:'결혼하다',by:'otylia',when:()=>!f().night,ask:'너도 엘리하고 ___ 거지? 빨리 해!',opts:[['결혼할',1],['싸울',0,'싸우라고? 아니지! 같이 사는 거, "결혼할".'],['결석할',0,'결석은 학교 얘기야! 부부가 되는 건 "결혼할".']]},
 {w:'약속하다',by:'otylia',when:()=>!f().night,ask:'엄마한테 편지한다고 ___? 꼭 해.',opts:[['약속했어',1],['예약했어',0,'예약은 식당 자리 잡는 거야. 꼭 한다고 말하는 건 "약속했어".'],['약했어',0,'약했어? 힘 얘기 아니야. "약속했어".']]},
 {w:'선거',by:'otylia',ask:'지난 ___에서 리걸 민주당이 거의 다 이겼어요.',opts:[['선거',1],['선수',0,'선수는 운동하는 사람이에요. 투표로 뽑는 건 "선거".'],['시합',0,'시합은 운동 경기예요. 투표는 "선거".']]},
 {w:'탐험',by:'otylia',when:()=>!f().night,ask:'또 ___을 떠나? 정말 너답다.',opts:[['탐험',1],['시험',0,'시험은 학교에서 보는 거야. 우주로 떠나는 건 "탐험".'],['시합',0,'시합을 떠나? 하하. 아무도 안 간 곳에 가는 건 "탐험".']]},
 // 로렐라: on the beach after the waves (to 삼촌: only while Finn is with you)
 {w:'조카',by:'laurella',when:()=>!f().night,ask:'삼촌은 엄마 쌍둥이죠? 그럼 저는 ___예요!',opts:[['조카',1],['동생',0,'저는 삼촌 동생 아니에요! 엄마 쌍둥이의 딸은 "조카".'],['조금',0,'조금? 히히, 아니에요. 엄마 쌍둥이의 딸은 "조카"!']]},
 {w:'파도',by:'laurella',ask:'밤에도 ___ 소리가 들려요. 철썩철썩!',opts:[['파도',1],['포도',0,'포도는 먹는 거예요! 철썩철썩 소리는 "파도".'],['파티',0,'파티 소리 아니에요. 바다 소리는 "파도"!']]},
 {w:'약속하다',by:'laurella',when:()=>!f().night,ask:'삼촌, 또 오기로 ___. 손가락 걸어요!',opts:[['약속해요',1],['예약해요',0,'예약은 식당에서 해요! 손가락 거는 건 "약속해요".'],['약해요',0,'삼촌은 안 약해요! 손가락 거는 건 "약속해요".']]},
 {w:'우주선',by:'laurella',when:()=>!f().night,ask:'하늘에 있는 삼촌 ___, 엄청 크죠?',opts:[['우주선',1],['우체국',0,'우체국은 편지 보내는 곳이에요! 하늘에 있는 배는 "우주선".'],['우주인',0,'우주인은 사람이에요! 하늘에 있는 큰 배는 "우주선".']]},
 {w:'행성',by:'laurella',ask:'곤디아는 엄청 큰 ___이래요. 끝이 없대요.',opts:[['행성',1],['학생',0,'학생은 학교 다니는 사람이에요! 곤디아는 "행성".'],['항상',0,'항상은 "늘"이에요. 곤디아는 "행성".']]},
 // 두샨: on the beach, always
 {w:'기차역',by:'dushan',ask:'___에서 하얀 열차 봤어요? 엄청 빨라요!',opts:[['기차역',1],['기차표',0,'기차표는 종이예요. 열차가 서는 곳은 "기차역".'],['경기장',0,'경기장은 축구하는 곳이에요. 열차는 "기차역".']]},
 {w:'파도',by:'dushan',ask:'큰 ___가 오면 무서워요. 그래서 모래성 해요.',opts:[['파도',1],['포도',0,'포도는 안 무서워요. 맛있어요! 바다 물결은 "파도".'],['파티',0,'파티는 재밌어요. 무서운 바다 물결은 "파도".']]},
 {w:'정당',by:'dushan',ask:'아빠는 ___ 일 때문에 맨날 연설해요.',opts:[['정당',1],['정답',0,'정답은 시험에 있어요. 아빠 정치 모임은 "정당".'],['식당',0,'아빠는 식당에서 연설 안 해요! 정치 모임은 "정당".']]},
 {w:'파다',by:'dushan',ask:'모래를 ___ 모래성을 만들어요.',opts:[['파서',1],['팔아서',0,'모래는 안 팔아요! 구멍을 내요 → "파서".'],['타서',0,'타다는 차를 탈 때예요. 구멍을 내요 → "파서".']]},
 {w:'굴',by:'dushan',ask:'모래성 밑에 ___도 있어요! 손이 들어가요.',opts:[['굴',1],['귤',0,'귤은 먹는 거예요! 모래 속 길은 "굴".'],['공',0,'공은 굴러가요. 모래 속 구멍 길은 "굴".']]},
 // 테렌스: on the beach, always
 {w:'발견하다',by:'terence',ask:'그때 성실호 부품을 제가 ___ 거, 기억나요?',opts:[['발견한',1],['잃어버린',0,'도둑이 훔쳐 갔죠. 저는 찾았어요 → "발견한".'],['반납한',0,'반납은 빌린 걸 돌려줄 때예요. 처음 찾았어요 → "발견한".']]},
 {w:'범인',by:'terence',ask:'저는 아직 경찰이에요. ___ 잡는 일이요.',opts:[['범인',1],['손님',0,'손님 잡는 건 가게 일이죠. 경찰은 "범인".'],['번호',0,'번호는 숫자예요. 나쁜 일을 한 사람은 "범인".']]},
 {w:'배신하다',by:'terence',ask:'경찰은 다 의심해요. 친구도 ___ 수 있으니까요.',opts:[['배신할',1],['배달할',0,'배달은 물건을 가져다주는 거예요. 등을 돌리는 건 "배신할".'],['배울',0,'배우는 건 좋은 거예요. 의심할 일은 "배신할".']]},
 // 기보이: hangar 3, after the trade
 {w:'교환하다',by:'gyvoy',ask:'씨앗이든 기계든 뭐든지 ___. 트래블러니까요!',opts:[['교환해요',1],['이사해요',0,'이사는 집을 옮기는 거예요. 하하. 서로 주고받는 건 "교환해요".'],['반납해요',0,'반납은 빌린 걸 돌려줄 때예요. 서로 주고받는 건 "교환해요".']]},
 {w:'계약',by:'gyvoy',ask:'트래블러는 ___을 꼭 지켜요. 이번에도 지켰죠?',opts:[['계약',1],['계단',0,'계단은 오르는 거예요. 사인한 약속은 "계약".'],['경기',0,'경기는 운동이에요! 사인한 약속은 "계약".']]},
 {w:'위험',by:'gyvoy',ask:'관문 너머는 ___해요. 그래서 돈이 돼요. 하하.',opts:[['위험',1],['안전',0,'안전하면 돈이 안 돼요. 하하. 다칠 수 있는 곳은 "위험".'],['위생',0,'위생은 깨끗한 거예요. 다칠 수 있으면 "위험".']]},
 // 핀: in the owner's quarters after his confession
 {w:'조카',by:'finn',ask:'로렐라하고 두샨… 제 ___들이 저를 기억할까요?',opts:[['조카',1],['손자',0,'손자는 제 아이의 아이예요. 쌍둥이의 아이는 "조카".'],['조각',0,'조각은 작은 부분이에요. 쌍둥이의 아이는 "조카".']]},
 {w:'약물',by:'finn',ask:'엘리 말이 맞아요. ___은 이제 안 할 거예요.',opts:[['약물',1],['양말',0,'양말은 발에 신어요. 위험한 약은 "약물".'],['약국',0,'약국은 약을 사는 곳이에요. 몸에 넣는 위험한 약은 "약물".']]},
 {w:'중독',by:'finn',ask:'___은 끝났다고 생각했어요. 아니었어요.',opts:[['중독',1],['중국',0,'중국은 나라예요. 그만두지 못하는 건 "중독".'],['감독',0,'감독은 팀을 이끄는 사람이에요. 그만두지 못하는 건 "중독".']]},
 {w:'배신하다',by:'finn',ask:'버라이카가 저를 ___ 게 아니에요. 우리는 처음부터 달랐어요.',opts:[['배신한',1],['배달한',0,'배달은 물건을 가져다주는 거예요. 등을 돌리는 건 "배신한".'],['배운',0,'배우다는 공부하는 거예요. 등을 돌리는 건 "배신한".']]},
 {w:'시체',by:'finn',ask:'타비아는 ___도 없었어요. 헬멧 하나만요.',opts:[['시체',1],['시계',0,'시계는 시간을 봐요. 죽은 사람의 몸은 "시체".'],['신체',0,'신체는 살아 있는 몸도 말해요. 죽은 사람의 몸은 "시체".']]},
];
/* class time: the days between Malvin's "출발은 며칠 뒤예요" and the departure (드장's last talk) */
const CLASS={
 '준비':{say:'며칠 동안 출발 준비를 해요. 개스들이 짐을 날라요.',lines:[
  {w:'설치하다',who:'맬빈 기관장',ask:'새 통신기도 ___. 이제 다 됐어요.',opts:[['설치했어요',1],['설명했어요',0,'설명은 말로 하는 거예요. 기계를 달았어요 → "설치했어요".'],['설거지했어요',0,'설거지는 그릇 씻기예요! 기계를 달았어요 → "설치했어요".']]},
  {w:'세월',who:'드장 선장',ask:'돌아오면 곤디아는 또 긴 ___이 지났겠죠.',opts:[['세월',1],['세상',0,'세상은 사람들이 사는 곳 전부예요. 지나가는 건 "세월".'],['새벽',0,'새벽은 아침 일찍이에요. 긴 시간은 "세월".']]},
  {w:'축복',who:'파블로',ask:'성 오틸리아님의 ___이 이 배에 있어요.',opts:[['축복',1],['축구',0,'축구는 운동이에요! 좋은 마음은 "축복".'],['배신',0,'배신은 나쁜 거예요. 좋은 마음은 "축복".']]},
  {w:'변하다',who:'레나타',ask:'핀 씨 얼굴이 좀 ___. 잠은 잘 자요?',opts:[['변했어요',1],['편했어요',0,'편하면 좋겠는데… 얼굴이 달라졌어요 → "변했어요".'],['변명했어요',0,'얼굴은 변명 안 해요. 달라졌어요 → "변했어요".']]},
  {w:'약속하다',who:'엘리',ask:'핀하고 같이 가기로 ___. 후회 안 해요.',opts:[['약속했어요',1],['예약했어요',0,'예약은 자리를 잡는 거예요. 같이 간다고 말했어요 → "약속했어요".'],['약했어요',0,'저 안 약해요! 같이 간다고 말했어요 → "약속했어요".']]}]},
 '전날':{say:'떠나기 전날 밤. 다들 곤디아에 메시지를 보내요.',lines:[
  {w:'결혼하다',who:'엘리',ask:'돌아오면 친구 아이들도 다 ___ 거예요.',opts:[['결혼했을',1],['결정했을',0,'결정은 고르는 거예요. 부부가 된 거 → "결혼했을".'],['결석했을',0,'결석은 학교에 안 가는 거예요. 부부가 된 거 → "결혼했을".']]},
  {w:'조카',who:'핀',ask:'___들한테 영상 편지를 남겼어요. 커서 보라고요.',opts:[['조카',1],['조각',0,'조각은 작은 부분이에요. 형제의 아이는 "조카".'],['손자',0,'손자는 아이의 아이예요. 쌍둥이의 아이는 "조카".']]},
  {w:'파도',who:'핀',ask:'눈을 감으면 하프니르 ___ 소리가 들려요. 철썩철썩.',opts:[['파도',1],['포도',0,'포도는 소리가 안 나요! 바다 물결은 "파도".'],['파티',0,'파티 소리 말고요. 바다 소리는 "파도".']]},
  {w:'약물',who:'엘리',ask:'오늘 밤은 레콜 같은 ___ 없이 잘 자요, 핀.',opts:[['약물',1],['약속',0,'약속 말고요. 레콜 같은 건 "약물".'],['양말',0,'양말 말고요. 하하. 레콜 같은 건 "약물".']]}]},
};

const ITEMS={'초대장':'총독 저택 의식 초대장. 금색 글씨예요.','물 필터':'1번 구 물 탱크에 넣는 새 필터.','화살 열차표':'산타 로사 ↔ 하프니르 화살 열차표.','하프니르 주민 증명서':'오틸리아가 준 증명서. 핀과 엘리는 이제 하프니르 주민이에요.','가족 사진':'오틸리아, 조사이어스, 로렐라, 두샨. 모두 웃고 있어요.'};

const f=()=>state.f;
const hasItem=i=>state.items.includes(i);
const b=w=>state.badges.includes(w);

/* ---------- tiles (drawn at render time; engine helpers r, g, hash, at, front, stars, lawn, plate, deck are globals) ---------- */
const blk=(x,y,w,h,set)=>{const c=at(x,y),s=set||c;let a=0,d=0;while(s.includes(at(x-a-1,y)))a++;while(s.includes(at(x,y-d-1)))d++;return [a%w,d%h]};
const clip=(X,Y,fn)=>{g.save();g.beginPath();g.rect(X,Y,16,16);g.clip();fn();g.restore()};
const disc=(cx,cy,rad,c)=>{g.fillStyle=c;g.beginPath();g.arc(cx,cy,rad,0,Math.PI*2);g.fill()};
const moss=(X,Y,x,y)=>{r(X,Y,16,16,'#7A8A6C');r(X,Y,16,1,'#6E7D61');r(X,Y,1,16,'#6E7D61');const h=hash(x,y);if(h<35)r(X+(h%11)+2,Y+(h%9)+4,2,1,'#8C9C7C');if(h%7===0)r(X+(h*3%11)+3,Y+(h*5%10)+3,1,1,'#A9C28F')};
const night=(X,Y)=>{if(state&&state.f.night&&!state.f.confessed){g.fillStyle='rgba(12,16,44,.5)';g.fillRect(X,Y,16,16)}};
const wood=(X,Y,x,y)=>{r(X,Y,16,16,'#B08456');for(let i=0;i<16;i+=4){r(X,Y+i,16,1,'#9A7148');r(X+((x*5+i*3+y*7)%13)+1,Y+i+1,1,3,'#9A7148')}};
const sand=(X,Y,x,y)=>{r(X,Y,16,16,'#F1E4C3');const h=hash(x,y);r(X+(h%13)+1,Y+(h%11)+2,1,1,'#DCCB9F');r(X+((h*7)%13)+1,Y+((h*3)%13)+1,1,1,'#E2D3AC');r(X+((h*5)%12)+2,Y+((h*9)%12)+2,2,1,'#E8DAB6');if(h<5){r(X+5,Y+9,3,2,'#F2B8A6');r(X+6,Y+8,1,1,'#F2B8A6')}};
const street=(X,Y,x,y)=>{r(X,Y,16,16,'#EDE3CC');const h=hash(x,y);r(X+(h%8)+2,Y+4,5,1,'#DED1B4');r(X+((h*3)%8)+3,Y+11,6,1,'#DED1B4');r(X+((h*7)%10)+3,Y+8,1,1,'#F7F0E0');
 const L=at(x-1,y),R=at(x+1,y),U=at(x,y-1),D=at(x,y+1),ok=c=>c==='S'||c==='P';if(!ok(U))r(X,Y,16,1,'#D6C8A8');if(!ok(D))r(X,Y+15,16,1,'#D6C8A8');if(!ok(L))r(X,Y,1,16,'#D6C8A8');if(!ok(R))r(X+15,Y,1,16,'#D6C8A8')};
const glassLawn=(X,Y,x,y,t)=>{lawn(X,Y,x,y);if(((x-y)%6+6)%6===0){g.fillStyle='rgba(255,255,236,.13)';g.fillRect(X,Y,16,16)}const k=(x*7+y*13+Math.floor(t/700))%37;if(k===0){r(X+6,Y+4,1,3,'#FFFFFF');r(X+5,Y+5,3,1,'#FFFFFF')}};
function cylArt(bx,by,t,seed,up){ // a vine-covered "tropical tower block": round tower, curved balcony rings, roof garden rising `up` px
 const top=by-up,shadeCol=[ '#A9A190','#C4BCA8','#DDD6C6','#ECE7DA','#F4F0E6','#ECE7DA','#DDD6C6','#D3CBB9','#C4BCA8','#B3AB98','#A39B88'],cw=[2,3,3,3,3,3,3,3,3,2,2];
 r(bx+1,by+29,30,3,'rgba(0,0,0,.28)');
 let cx=bx+1;cw.forEach((w,i)=>{r(cx,top+4,w,by+29-top-4,shadeCol[i]);cx+=w});
 r(bx+1,top+4,1,by+25-top,'#8C8472');r(bx+30,top+4,1,by+25-top,'#8C8472');
 r(bx+4,top,24,1,'#4E8F4A');r(bx+2,top+1,28,4,'#4E8F4A');r(bx+5,top+1,8,1,'#79B866');r(bx+16,top+2,6,1,'#79B866');r(bx+2,top+5,28,1,'#8C8472');
 [[6,0],[20,1],[12,2]].forEach(([x,y])=>{r(bx+x,top+y-2,3,3,'#3B7238');r(bx+x+1,top+y-3,1,1,'#E8962A')});
 const curve=i=>Math.round(2*(1-Math.pow((i-14)/14,2)));
 for(let row=0;row<3;row++){const bb=top+10+row*Math.floor((by+26-top-10)/3);
  for(let i=0;i<28;i++){const yy=bb+curve(i);r(bx+2+i,yy-6,1,2,((Math.floor(t/1900)+i+row*5+seed)%9)&&i%5>0&&i%5<3?'#FFE2A8':shadeCol[Math.min(10,Math.floor(i/2.6))]);
   r(bx+2+i,yy,1,2,i<4||i>23?'#7C7464':'#9C9482');r(bx+2+i,yy-1,1,1,'#79B866');
   const L=hash(seed+i,row*7)%5;if(i%2===0)r(bx+2+i,yy+2,2,L,(i%4)?'#4E8F4A':'#356B35');
   if(L>2&&hash(i,seed+row)%4===0)r(bx+2+i,yy+2+L,2,2,hash(i,row)%2?'#E8962A':'#D9544B')}}
 r(bx+2,by+28,28,1,'#F2A1C2');r(bx+4,by+29,24,1,'rgba(242,161,194,.5)');
}
function zpzArt(bx,by,t){ // hangar 3: entropy-drive crates until the swap, then the ZPZ generator (four glossy spheres on scarlet spikes)
 const F=state?state.f:{};
 if(!F.swap){
  for(const cx of [1,25]){r(bx+cx+1,by+29,21,3,'rgba(0,0,0,.25)');r(bx+cx,by+5,21,25,'#2E3440');r(bx+cx+1,by+6,19,23,'#4A5566');r(bx+cx+1,by+6,19,4,'#64728A');
   for(let i=0;i<19;i+=4)r(bx+cx+1+i,by+21,2,3,'#E8B73A');r(bx+cx+1,by+21,19,1,'#2E3440');r(bx+cx+1,by+24,19,1,'#2E3440');
   r(bx+cx+4,by+13,8,4,'#DCE6E8');r(bx+cx+5,by+14,6,1,'#5F6B72');r(bx+cx+5,by+16,4,1,'#5F6B72');r(bx+cx+15,by+13,2,2,(Math.floor(t/600)+cx)%2?'#E8962A':'#7A5420')}
  return}
 g.fillStyle='rgba(0,0,0,.28)';g.beginPath();g.ellipse(bx+24,by+29,22,3,0,0,Math.PI*2);g.fill();
 const S=[[12,12,9],[34,10,9],[23,21,8],[40,23,6]];
 const spike=(x1,y1,x2,y2)=>{const a=Math.atan2(y2-y1,x2-x1),nx=-Math.sin(a)*2,ny=Math.cos(a)*2;g.fillStyle='#C21F38';g.beginPath();g.moveTo(bx+x1+nx,by+y1+ny);g.lineTo(bx+x1-nx,by+y1-ny);g.lineTo(bx+x2,by+y2);g.fill()};
 S.forEach(([x,y,rr])=>{disc(bx+x,by+y,rr+1,'#05060A');disc(bx+x,by+y,rr,'#171A22');disc(bx+x-2,by+y-2,rr-3,'#232836');disc(bx+x-3,by+y-4,2,'#8A93A6');r(bx+x-4,by+y-5,1,1,'#E6ECF4')});
 spike(12,12,27,17);spike(34,10,25,19);spike(23,21,38,21);spike(40,23,33,14);spike(12,12,20,24);
 if(F.zpz){const k=Math.floor(t/120);[[26,17],[30,15],[36,20],[18,20]].forEach(([x,y],i)=>{if((k+i*3)%5<2){r(bx+x,by+y,1,1,'#E6D8FF');r(bx+x-1,by+y,3,1,'rgba(180,140,255,.8)');r(bx+x,by+y-1,1,3,'rgba(180,140,255,.8)')}})}
}
function seqArt(bx,by,big,up){ // giant sequoia, 32 wide; the crown rises `up` px above its 2×2 block
 const top=by-up;
 r(bx+5,by+29,22,3,'rgba(0,0,0,.25)');
 r(bx+9,top,14,2,'#2E5A3A');r(bx+5,top+2,22,4,'#2E5A3A');r(bx+2,top+6,28,by+15-top-6,'#2E5A3A');r(bx+4,by+13,24,3,'#24472D');
 for(let i=0;i<7;i++){const x=3+(i*9)%22,y=top+3+((i*11)%(by+8-top)),w=4+(i%3);r(bx+x,y,w,3,'#3F7A4C');r(bx+x+1,y,w-2,1,'#5A9A62')}
 r(bx+10,by+16,12,14,'#8A4B2C');r(bx+11,by+16,2,14,'#A8613C');[14,17,20].forEach(i=>r(bx+i,by+17,1,12,'#6E3A22'));
 r(bx+7,by+27,18,3,'#7A4228');r(bx+7,by+27,18,1,'#94552F');
 if(big){r(bx+10,by+22,12,1,'#E8C25A');r(bx+14,by+19,4,3,'#E8C25A');r(bx+15,by+20,2,1,'#8A6A2A')}
}
function villaArt(bx,by,seed,t,fall){ // organic livestone villa, 32×32 (fall = waterfall-roof villa)
 const roofs=[['#7FB3A8','#5E9488','#A3D0C6'],['#D9A27A','#B9805A','#EBC19F'],['#A9B8D9','#8696BC','#CAD5EE']],R=roofs[seed%3];
 r(bx+2,by+29,28,3,'rgba(0,0,0,.2)');
 r(bx+3,by+12,26,18,'#EDE3CC');r(bx+24,by+12,5,18,'#D9CDB0');r(bx+3,by+29,26,1,'#CFC2A3');
 if(fall){r(bx+2,by+8,28,5,'#CFC4AA');r(bx+2,by+8,28,1,'#E3DAC4');}
 else{r(bx+8,by+2,16,2,R[0]);r(bx+4,by+4,24,4,R[0]);r(bx+2,by+8,28,5,R[0]);r(bx+2,by+12,28,1,R[1]);r(bx+9,by+3,6,1,R[2]);r(bx+5,by+5,6,2,R[2])}
 [[7,16],[21,16]].forEach(([x,y])=>{r(bx+x,by+y,4,4,'#3A6E8A');r(bx+x,by+y,4,1,'#2A5068');r(bx+x+1,by+y+1,1,1,'#BFE6FF')});
 r(bx+14,by+20,5,10,'#8A5A3A');r(bx+15,by+19,3,1,'#8A5A3A');r(bx+17,by+25,1,1,'#E8C25A');
 if(fall){g.fillStyle='rgba(95,179,214,.85)';g.fillRect(bx+6,by+12,20,17);for(let i=0;i<7;i++){const yy=Math.floor(t/70+i*5)%16;r(bx+7+i*3,by+12+yy,1,3,'#E6F6FF')}r(bx+3,by+28,26,4,'#2E8FB8');r(bx+3,by+28,26,1,'#9FD7E8')}
}
function mushArt(bx,by,t){ // Otylia's mushroom-cluster house, 48×48
 r(bx+4,by+44,40,4,'rgba(0,0,0,.22)');
 r(bx+10,by+22,28,23,'#EDE3CC');r(bx+32,by+22,6,23,'#D9CDB0');r(bx+4,by+30,12,15,'#EDE3CC');r(bx+33,by+28,11,17,'#E3D8BE');
 const cap=(x,y,w,h)=>{r(bx+x+3,by+y,w-6,2,'#E9B09A');r(bx+x+1,by+y+2,w-2,2,'#D98E6E');r(bx+x,by+y+4,w,h-4,'#D98E6E');r(bx+x,by+y+h-1,w,1,'#B86E50');r(bx+x+3,by+y+1,w/3|0,1,'#F4CDBC')};
 cap(1,19,18,11);cap(30,15,18,13);cap(6,1,36,22);
 [[12,6,3],[24,4,2],[31,10,3],[17,14,2],[6,23,2],[38,19,2]].forEach(([x,y,s])=>r(bx+x,by+y,s,s,'#F7EEDC'));
 [[14,27],[29,27],[7,34],[37,32]].forEach(([x,y],i)=>{r(bx+x,by+y,4,4,(Math.floor(t/2000)+i)%5?'#FFE2A8':'#E8C27A');r(bx+x,by+y,4,1,'#C9A86A')});
 r(bx+20,by+35,8,11,'#7A4A2A');r(bx+21,by+34,6,1,'#7A4A2A');r(bx+21,by+36,6,9,'#8A5A3A');r(bx+26,by+40,1,1,'#E8C25A');
}
function trainArt(bx,Y,t){ // white arrow train on the guideway, 96 px long
 const bodyY=Y+2;
 for(let i=0;i<12;i++)r(bx+1+i,bodyY+7-(i*7/12|0),1,4+(i*14/12|0),'#F4F6F8');
 r(bx+12,bodyY,82,11,'#F4F6F8');r(bx+12,bodyY,82,1,'#FFFFFF');r(bx+6,bodyY+10,88,1,'#C9CED3');
 r(bx+16,bodyY+2,74,3,'#2E5A78');for(let i=20;i<90;i+=10)r(bx+i,bodyY+2,1,3,'#9FD7E8');
 r(bx+6,bodyY+8,88,1,'#D2533F');r(bx+92,bodyY+1,3,9,'#DDE2E7');
 r(bx+34,bodyY+1,9,10,'#C9D1D8');r(bx+35,bodyY+2,7,8,'#E6ECF0');r(bx+38,bodyY+2,1,8,'#9AA3AD');
 r(bx+37,bodyY-1,3,1,(Math.floor(t/500)%2)?'#69D88A':'#2E6E4A');
}
function guide(X,Y,t){r(X,Y,16,16,'#AEB4BA');r(X,Y,16,2,'#C9CED3');r(X,Y+13,16,3,'#8E959C');const p=(Math.sin(t/300)+1)/2;r(X,Y+12,16,1,`rgba(105,207,216,${.4+p*.5})`)}
function crystal(c1,c2,c3,c4){ // floating interlude crystal, 16×16
 return {pal:{O:'#1B1E2B',W:c1,V:c2,v:c3,d:c4},down:[
 '.......OO.......','......OWVO......','.....OWVVvO.....','....OWVVVvvO....','...OWWVVVvvdO...','...OWVVVVvvdO...','...OVVVVvvvdO...','....OVVvvvdO....',
 '.....OVvvdO.....','......OvdO......','.......OO.......','................','................','....OddddddO....','...OdVVVVVVdO...','...OddddddddO...']}}
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
function kid(hair,shirt,pants,girl){ // a small child, 12×12
 const P=girl?'S':'P';
 return {pal:{O:'#1B1E2B',E:'#1B1E2B',H:hair,h:'#00000033',S:'#F2CBA8',M:'#D59A86',C:shirt,c:'#00000022',P:pants,K:'#3A3540',R:'#E86D8A'},
 down:['...OOOOOO...',girl?'..OHHHHHHRO.':'..OHHHHHHO..','.OHHHHHHHHO.','.OHSSSSSSHO.','.OSSESSESSO.','.OSSSMMSSSO.','..OSSSSSSO..','..OCCCCCCO..','.OSCCCCCCSO.',girl?'.OCCCCCCCCO.':'..OCCCCCCO..',`..O${P}${P}OO${P}${P}O..`,'..OKKOOKKO..'],
 up:['...OOOOOO...',girl?'..OHHHHHHRO.':'..OHHHHHHO..','.OHHHHHHHHO.','.OHHHHHHHHO.','.OHHHHHHHHO.','.OHHHHHHHHO.','..OSSSSSSO..','..OCCCCCCO..','.OSCCCCCCSO.',girl?'.OCCCCCCCCO.':'..OCCCCCCO..',`..O${P}${P}OO${P}${P}O..`,'..OKKOOKKO..'],
 left:['...OOOOO....',girl?'..OHHHHHRO..':'..OHHHHHO...','.OHHHHHHHO..','.OSSHHHHHO..','OSESSSHHHO..','.OMSSSSHO...','..OSSSSO....','..OCCCCO....','..OCSCCO....',girl?'.OCCCCCCO...':'..OCCCCO....',`..O${P}${P}${P}${P}O....`,'..OKKOKKO...']}}

/* Kelowan sits inside the Poseidon Nebula: views inside the system show nebula glow, hardly any stars (c013, c032, c034); same look as ch1's nebula() */
function nebula(X,Y,x,y,t,depth){r(X,Y,16,16,'#140D20');const ox=CAM.x*depth,oy=CAM.y*depth;
 for(let j=0;j<16;j+=2)for(let i=0;i<16;i+=2){const gx=x*16+i-ox,gy=y*16+j-oy,v=Math.sin(gx/23+gy/31)+.6*Math.sin(gx/11-gy/17)+.3*Math.sin(gy/7+gx/41);
  if(v>1.2)r(X+i,Y+j,2,2,'#8E5C8C');else if(v>.6)r(X+i,Y+j,2,2,'#5E3C72');else if(v>-.1)r(X+i,Y+j,2,2,'#36244C')}
 if((hash(x,y)+Math.floor(t/900))%23===0)r(X+(hash(y,x)%14)+1,Y+(hash(x+1,y)%12)+2,1,1,'#D8C8E8')}
const TL={
 /* ship · Sphere One, owner's quarters, command deck, High Rosa hangar 3 */
 moss:(X,Y,x,y)=>moss(X,Y,x,y),
 lane:(X,Y,x,y,t)=>{moss(X,Y,x,y);const p=(Math.sin(t/500+y*.7)+1)/2;const L=at(x-1,y)!==':';r(X+(L?11:3),Y,2,16,'#F2A1C2');r(X+(L?10:2),Y,1,16,`rgba(242,161,194,${.25+p*.35})`);r(X+(L?13:5),Y,1,16,`rgba(242,161,194,${.25+p*.35})`)},
 cyl:(X,Y,x,y,t)=>{moss(X,Y,x,y);const [a,d]=blk(x,y,2,2),up=10;g.save();g.beginPath();g.rect(X,d?Y:Y-up,16,d?16:16+up);g.clip();cylArt(X-a*16,Y-d*16,t,(x-a)*7+(y-d)*3,up);g.restore()},
 planter:(X,Y,x,y)=>{moss(X,Y,x,y);const h=hash(x,y);r(X+1,Y+8,14,7,'#6B4A2E');r(X+1,Y+8,14,2,'#8A6040');r(X+1,Y+14,14,1,'#4E3420');
  r(X+2,Y+1,12,8,'#4E8F4A');r(X+1,Y+3,14,5,'#4E8F4A');r(X+3,Y+2,4,2,'#79B866');r(X+9,Y+4,3,2,'#79B866');r(X+2,Y+7,12,1,'#356B35');
  if(h%3!==1){r(X+4,Y+5,2,2,'#E8962A');r(X+10,Y+2,2,2,'#D9544B')}if(h%4===0)r(X+7,Y+6,2,2,'#F7D154')},
 tank:(X,Y,x,y,t)=>{moss(X,Y,x,y);const top=at(x,y+1)==='t',ok=state&&state.f.filter,water=ok?'#5FB3D6':'#8A7A4A';
  if(top){r(X+3,Y+3,10,13,'#B8D8E0');r(X+4,Y+5,8,11,water);r(X+2,Y+1,12,3,'#5F6B72');r(X+2,Y+1,12,1,'#88909A');r(X+7,Y,2,1,'#5F6B72');r(X+4,Y+5,1,11,'#DCEFF4')}
  else{r(X+3,Y,10,12,'#B8D8E0');r(X+4,Y,8,11,water);r(X+4,Y,1,11,'#DCEFF4');r(X+2,Y+11,12,5,'#5F6B72');r(X+2,Y+11,12,1,'#88909A');r(X+6,Y+13,4,1,ok?'#69D88A':(Math.floor(t/400)%2?'#D2533F':'#5A2420'))}
  if(ok){const k=Math.floor(t/90);for(let i=0;i<3;i++){const yy=15-((k+i*6)%16);r(X+5+i*3,Y+yy,1,1,'#E6F6FF')}}else if(hash(x,y)%2)r(X+6,Y+(top?9:4),3,2,'#6A5A30')},
 shrine:(X,Y,x,y,t)=>{moss(X,Y,x,y);r(X+2,Y+9,12,6,'#7A5A3A');r(X+2,Y+9,12,1,'#9A7A52');r(X+5,Y+1,6,8,'#E8C25A');r(X+6,Y+2,4,6,'#F7EEDC');r(X+6,Y+2,4,2,'#E8CC7A');r(X+7,Y+4,2,2,'#F0C9A4');r(X+6,Y+6,4,2,'#C25B7A');
  [3,12].forEach((cx,i)=>{r(X+cx,Y+6,1,3,'#F4F6F8');r(X+cx,Y+5,1,1,(Math.floor(t/150)+i)%3?'#FFD27A':'#E8962A')});r(X+4,Y+10,2,2,'#E86D8A');r(X+10,Y+10,2,2,'#F7D154')},
 wood:(X,Y,x,y)=>{wood(X,Y,x,y);night(X,Y)},
 bamboo:(X,Y,x,y)=>{wood(X,Y,x,y);for(let i=0;i<16;i+=3){r(X+i,Y,2,15,'#C8C27A');r(X+i+2,Y,1,15,'#8E8848');r(X+i,Y+4,2,1,'#9C9656');r(X+i,Y+10,2,1,'#9C9656');r(X+i,Y,1,15,'#DAD594')}r(X,Y+13,16,3,'#7A5A3A');r(X,Y+13,16,1,'#9A7A52');night(X,Y)},
 couch:(X,Y,x,y)=>{wood(X,Y,x,y);const L=at(x-1,y)!=='u',R=at(x+1,y)!=='u';r(X+(L?2:0),Y+3,16-(L?2:0)-(R?2:0),11,'#24504E');r(X+(L?3:0),Y+4,16-(L?3:0)-(R?3:0),4,'#2F6462');r(X+(L?3:0),Y+8,16-(L?3:0)-(R?3:0),5,'#3E7A78');r(X+(L?3:0),Y+8,16-(L?3:0)-(R?3:0),1,'#5A9896');
  if(L){r(X+1,Y+5,3,9,'#24504E');r(X+1,Y+5,3,1,'#3E7A78');r(X+5,Y+5,4,3,'#E8962A')}if(R){r(X+12,Y+5,3,9,'#24504E');r(X+12,Y+5,3,1,'#3E7A78')}r(X+1,Y+14,14,1,'rgba(0,0,0,.2)');night(X,Y)},
 teaTable:(X,Y,x,y)=>{wood(X,Y,x,y);r(X+2,Y+13,12,2,'rgba(0,0,0,.2)');r(X+2,Y+6,12,7,'#5E3E26');r(X+2,Y+6,12,2,'#7A5434');r(X+5,Y+3,4,4,'#DCE6E8');r(X+5,Y+3,4,1,'#FFFFFF');r(X+9,Y+4,1,1,'#DCE6E8');r(X+11,Y+5,2,2,'#DCE6E8');night(X,Y)},
 cmdWall:(X,Y,x,y,t)=>{r(X,Y,16,16,'#2A3038');r(X,Y,16,1,'#3A424C');r(X,Y+15,16,1,'#1E2228');
  r(X+2,Y+4,12,8,'#0F1A22');r(X+2,Y+4,12,1,'#3A424C');const s=x*3;for(let i=0;i<10;i++){const v=(Math.floor(t/220)+i+s)%7;r(X+3+i,Y+10-(v%5),1,1,x%2?'#69CFD8':'#E8962A')}r(X+3,Y+6,4,1,'#2C5D63')},
 holo:(X,Y,x,y,t)=>{deck(X,Y,x,y);const [a]=blk(x,y,3,1);r(X,Y+6,16,9,'#2B3238');r(X,Y+6,16,2,'#3C454C');if(a===0)r(X,Y+6,2,9,'#454C52');if(a===2)r(X+14,Y+6,2,9,'#22272C');
  if(a===1){const fl=Math.floor(t/90)%17===0;g.globalAlpha=fl?.35:.8;disc(X+8,Y+3,4,'#2E7A68');disc(X+7,Y+2,2,'#4E9E6E');g.globalAlpha=1;r(X+3,Y+7,10,1,'#69CFD8');r(X+13,Y+1,1,1,(Math.floor(t/400)%2)?'#FFFFFF':'#69CFD8')}},
 gantry:(X,Y,x,y,t)=>{r(X,Y,16,16,'#30363E');for(let i=0;i<16;i++){r(X+i,Y+i,1,1,'#B08A2E');r(X+15-i,Y+i,1,1,'#B08A2E')}r(X,Y,2,16,'#4A525C');r(X+14,Y,2,16,'#4A525C');
  if(front(x,y)&&at(x,y+1)){r(X,Y+9,16,7,'#555D68');r(X,Y+9,16,1,'#6B7480');for(let i=0;i<16;i+=4)r(X+i,Y+13,2,3,'#E8B73A')}},
 lestari:(X,Y,x,y,t)=>{nebula(X,Y,x,y,t,.2);let a=0;while(at(x-a-1,y)==='L')a++;const bx=X-a*16;
  clip(X,Y,()=>{const y0=Y+5;r(bx+10,y0,92,7,'#BFB59A');r(bx+10,y0,92,2,'#D8D0B8');r(bx+10,y0+5,92,2,'#9C937A');r(bx+6,y0+1,4,5,'#BFB59A');r(bx+4,y0+2,2,3,'#9C937A');r(bx+102,y0+1,4,5,'#9C937A');
   for(let i=18;i<100;i+=13)r(bx+i,y0,1,7,'#A3473A');r(bx+60,y0-2,8,2,'#DCE6E8');r(bx+30,y0+3,40,1,'#A3473A');r(bx+105,y0+2,2,2,(Math.floor(t/500)%2)?'#BFE6FF':'#3A4650')});
  r(X,Y,16,3,'#3F4650');r(X,Y+13,16,3,'#555D68');r(X,Y+13,16,1,'#6B7480');if(x%3===0)r(X,Y,1,16,'#2E343C')},
 zpz:(X,Y,x,y,t)=>{plate(X,Y,x,y);const [a,d]=blk(x,y,3,2);clip(X,Y,()=>zpzArt(X-a*16,Y-d*16,t))},
 /* Roundhouse arboretum */
 coral:(X,Y,x,y,t)=>{const h=hash(x,y);r(X,Y,16,16,'#F0C4BB');r(X,Y,16,1,'#F7D8D0');r(X+(h%14)+1,Y+(h%11)+2,1,1,'#E8C25A');r(X+((h*7)%14)+1,Y+((h*3)%13)+1,1,1,'#F4F7F9');
  if(front(x,y)&&at(x,y+1)&&at(x,y+1)!=='U'){r(X,Y+3,16,13,'#E3AFA5');r(X,Y+3,16,1,'#F2C9C0');r(X,Y+15,16,1,'#C98F86');
   if(x%2===0){r(X+4,Y+7,8,8,'#A9D8E6');r(X+5,Y+6,6,1,'#A9D8E6');r(X+6,Y+5,4,1,'#A9D8E6');r(X+4,Y+7,1,8,'#C98F86');r(X+11,Y+7,1,8,'#C98F86');r(X+7,Y+6,1,9,'#C98F86');r(X+5,Y+8,1,2,'#E6F6FF')}}},
 banner:(X,Y,x,y,t)=>{TL.coral(X,Y,x,y-1,t);r(X,Y+3,16,13,'#E3AFA5');r(X,Y+15,16,1,'#C98F86');r(X+3,Y+1,10,14,'#6B3FA0');r(X+3,Y+1,10,1,'#E8C25A');r(X+3,Y+1,1,14,'#4F2D7A');r(X+12,Y+1,1,14,'#4F2D7A');
  r(X+7,Y+5,2,5,'#E8C25A');r(X+5,Y+7,6,1,'#E8C25A');r(X+6,Y+11,4,1,'#E8C25A');r(X+3,Y+14,2,2,'#6B3FA0');r(X+11,Y+14,2,2,'#6B3FA0');r(X+7,Y+15,2,1,'#6B3FA0')},
 glassLawn:(X,Y,x,y,t)=>glassLawn(X,Y,x,y,t),
 dais:(X,Y,x,y)=>{r(X,Y,16,16,'#EBDFCF');r(X+((x*5)%12)+2,Y+5,3,1,'#E0D2BE');if(at(x,y-1)!=='d')r(X,Y,16,2,'#E8C25A');
  if(x===13||x===14){r(X,Y,16,16,'#6B3FA0');r(X,Y+((y*5)%14),16,1,'#5E3690');r(x===13?X:X+15,Y,1,16,'#E8C25A')}
  if(at(x,y+1)!=='d'){r(X,Y+12,16,4,'#CDB9A0');r(X,Y+12,16,1,'#E8C25A');r(X,Y+15,16,1,'#B59E84')}},
 sequoia:(X,Y,x,y,t)=>{glassLawn(X,Y,x,y,t);const [a,d]=blk(x,y,2,2),big=x-a===13&&y-d===8,up=big?16:11;
  g.save();g.beginPath();g.rect(X,d?Y:Y-up,16,d?16:16+up);g.clip();seqArt(X-a*16,Y-d*16,big,up);g.restore()},
 maple:(X,Y,x,y)=>{lawn(X,Y,x,y);r(X+6,Y+11,4,5,'#6E4A2A');r(X+2,Y+1,12,11,'#C2502E');r(X+1,Y+3,14,7,'#C2502E');r(X+4,Y+2,5,3,'#E07A3E');r(X+9,Y+6,3,2,'#E8A04A');r(X+2,Y+10,12,1,'#943A22');r(X+3,Y+14,1,1,'#E07A3E');r(X+12,Y+13,1,1,'#C2502E')},
 birch:(X,Y,x,y)=>{lawn(X,Y,x,y);r(X+7,Y+9,3,7,'#F1EFE8');r(X+7,Y+11,2,1,'#3A3530');r(X+8,Y+14,2,1,'#3A3530');r(X+3,Y+1,10,9,'#9CC96A');r(X+2,Y+3,12,5,'#9CC96A');r(X+4,Y+2,4,2,'#C2E28E');r(X+3,Y+8,10,1,'#7AA84E')},
 gate:(X,Y,x,y,t)=>{TILES.stone(X,Y,x,y);r(X,Y,3,16,'#E3AFA5');r(X+13,Y,3,16,'#E3AFA5');r(X,Y,16,3,'#E3AFA5');r(X,Y,16,1,'#F2C9C0');r(X+3,Y+3,10,1,'#C98F86');r(X+5,Y+4,6,4,'#2F6E8A');r(X+6,Y+5,4,2,'#F4F6F8');r(X+6,Y+6,1,1,'#2F6E8A')},
 /* Hafnir */
 jaca:(X,Y,x,y)=>{lawn(X,Y,x,y);const h=hash(x,y);r(X+(h%12)+2,Y+14,1,1,'#A98BDF');r(X+((h*3)%12)+1,Y+12,1,1,'#8E6CC9');r(X+6,Y+10,4,6,'#6E4A2E');r(X+7,Y+10,1,6,'#8A6040');
  r(X+2,Y+1,12,10,'#8E6CC9');r(X+1,Y+3,14,6,'#8E6CC9');r(X+3,Y+2,5,3,'#B49AE6');r(X+9,Y+5,3,2,'#B49AE6');r(X+2,Y+9,12,2,'#6E4FA8')},
 guide:(X,Y,x,y,t)=>guide(X,Y,t),
 train:(X,Y,x,y,t)=>{guide(X,Y,t);const [a]=blk(x,y,6,1,'Xx');clip(X,Y,()=>trainArt(X-a*16,Y,t))},
 platform:(X,Y,x,y)=>{r(X,Y,16,16,'#E3E0D8');r(X,Y+15,16,1,'#D2CEC4');r(X+15,Y,1,16,'#D2CEC4');if('rXx'.includes(at(x,y-1))){r(X,Y,16,3,'#E8C25A');for(let i=1;i<16;i+=3)r(X+i,Y+1,1,1,'#C9A23A')}},
 pillar:(X,Y,x,y,t)=>{TL.platform(X,Y,x,y);r(X+5,Y+14,6,2,'rgba(0,0,0,.18)');r(X+6,Y+3,4,12,'#F4F6F8');r(X+9,Y+3,1,12,'#C9CED3');r(X+1,Y,14,6,'#2F6E8A');r(X+1,Y,14,1,'#4A8AA8');r(X+3,Y+2,3,2,'#F4F6F8');r(X+7,Y+2,6,1,'#F4F6F8');r(X+7,Y+4,4,1,'#9FD7E8')},
 street:(X,Y,x,y)=>street(X,Y,x,y),
 villa:(X,Y,x,y,t)=>{lawn(X,Y,x,y);const [a,d]=blk(x,y,2,2);clip(X,Y,()=>villaArt(X-a*16,Y-d*16,hash(x-a,y-d),t,0))},
 fall:(X,Y,x,y,t)=>{lawn(X,Y,x,y);const [a,d]=blk(x,y,2,2);clip(X,Y,()=>villaArt(X-a*16,Y-d*16,0,t,1))},
 mush:(X,Y,x,y,t)=>{lawn(X,Y,x,y);const [a,d]=blk(x,y,3,3);clip(X,Y,()=>mushArt(X-a*16,Y-d*16,t))},
 poster:(X,Y,x,y,t)=>{lawn(X,Y,x,y);r(X+7,Y+11,2,5,'#5F6B72');r(X+1,Y+1,14,11,'#4F2D7A');r(X+2,Y+2,12,9,'#6B3FA0');r(X+5,Y+3,6,3,'#E8C25A');r(X+5,Y+2,1,1,'#E8C25A');r(X+8,Y+2,1,1,'#E8C25A');r(X+10,Y+2,1,1,'#E8C25A');r(X+4,Y+7,8,1,'#F4F6F8');r(X+5,Y+9,6,1,'#CAB8EE');
  if(Math.floor(t/600)%2)r(X+1,Y+1,14,1,'#B48CFF')},
 sand:(X,Y,x,y)=>sand(X,Y,x,y),
 surf:(X,Y,x,y,t)=>{r(X,Y,16,16,'#2E8FB8');const k=Math.sin(t/700+x*.6);const e=5+Math.round(k*2);r(X,Y,16,e,'#E9DBB4');r(X,Y+e,16,2,'#F7FBFF');r(X+((x*5+Math.floor(t/300))%12),Y+e+3,4,1,'#9FD7E8');r(X,Y+e+2,16,1,'#5FB3D6')},
 sea:(X,Y,x,y,t)=>{r(X,Y,16,16,y%2?'#2779A0':'#2E8FB8');const o=Math.floor(t/500+x+y)%4;r(X+o*3,Y+5,5,1,'#5FB3D6');r(X+((o+2)%4)*3+1,Y+11,4,1,'#5FB3D6');if(hash(x,y)%9===0&&Math.floor(t/300)%5===0)r(X+7,Y+8,2,1,'#E6F6FF')},
 parasol:(X,Y,x,y)=>{sand(X,Y,x,y);r(X+3,Y+12,10,2,'rgba(0,0,0,.15)');r(X+7,Y+5,2,10,'#8A6A4A');r(X+2,Y+2,12,4,'#2F8F8A');r(X+1,Y+4,14,2,'#2F8F8A');for(let i=0;i<14;i+=4)r(X+1+i,Y+2,2,4,'#F7F1E6');r(X+6,Y+1,4,1,'#2F8F8A');r(X+1,Y+5,14,1,'#226A66')},
 bar:(X,Y,x,y)=>{sand(X,Y,x,y);r(X,Y+5,16,11,'#9A6A3C');r(X,Y+5,16,3,'#C08B55');r(X,Y+5,16,1,'#D9A46C');r(X,Y+15,16,1,'#6E4A28');if(x%2){r(X+3,Y+2,3,3,'#F4F6F8');r(X+4,Y+3,1,1,'#6B4A2B')}else{r(X+9,Y+1,3,4,'#E8962A');r(X+9,Y+1,3,1,'#F7D98C')}},
};

const ZONES={
 ship:{name:'성실호',reg:'ARK DILIGENT · HIGH ROSA',
  legend:{'#':{tile:'hull'},'b':{tile:'bamboo'},'u':{tile:'couch'},'w':{tile:'wood',walk:1},'o':{tile:'teaTable'},'S':{tile:'cmdWall'},'c':{tile:'console'},'.':{tile:'deck',walk:1},
   'H':{tile:'holo'},'g':{tile:'gantry'},'L':{tile:'lestari'},'p':{tile:'plate',walk:1},'Z':{tile:'zpz'},'k':{tile:'crate'},'E':{tile:'lift',walk:1},'D':{tile:'airlock',walk:1},
   '=':{tile:'grate',walk:1},',':{tile:'moss',walk:1},':':{tile:'lane',walk:1},'C':{tile:'cyl'},'v':{tile:'planter'},'t':{tile:'tank'},'A':{tile:'shrine'},'T':{tile:'terminal'}},
  map:[
"##############################",
"#bbbbbbbb#SSSSSSSSS#gLLLLLLLg#",
"#uuwwwoww#cc.....cc#gpppppppg#",
"#wwwwwwww#c.......c#gpZZZpppg#",
"#bwwwwwwb#...HHH...#gpZZZppkg#",
"#wwwwwwww#.........#gppppppEg#",
"####w#########.#####gggDDgggg#",
"#============================#",
"###,##########,##########,####",
"#,,,,::,,::,,,,,,,,,,,,,,,,,,#",
"#,,CC::CC::CC,,,vvvv,,tt,,,T,#",
"#,,CC::CC::CC,,,vvvv,,tt,,,,,#",
"#,,,,::,,::,,,,,,,,,,,,,,,,,,#",
"#,,CC::CC::CC,,,vvvv,,,,,,A,,#",
"#,,CC::CC::CC,,,vvvv,,,,,,,,,#",
"#,,,,::,,::,,,,,,,,,,,,,,,,,,#",
"#,,CC::CC::CC,,,vvvv,,,,vvvv,#",
"#,,CC::CC::CC,,,vvvv,,,,vvvv,#",
"#,,,,::,,::,,,,,,,,,,,,,,,,,,#",
"##############################"],
  rooms:[[1,1,8,5,'성실호 · 주인 방'],[10,1,18,5,'성실호 · 함교'],[20,1,28,6,'성실호 · 3번 격납고'],[1,7,28,8,'성실호 · 복도'],[1,9,28,18,'성실호 · 1번 구']],
  warps:{'27,5':{to:'round',x:3,y:15,dir:'up',lock:()=>!f().finn?'핀 씨하고 같이 가야 돼요.':!f().filter?'캡슐은 오후에 출발해요. 먼저 1번 구를 도와줘요.':false}},
  spots:{'3,10':'열대 타워 원통이에요. 발코니마다 과일이 자라요.','26,13':'개스들이 만든 작은 제단. "성 오틸리아"라고 써 있어요.','6,2':'탁자 위에 차가 식었어요.',
   '3,1':'대나무 칸막이. 조용한 방이에요.','1,2':'핀의 소파. 아주 푹신해요.','14,4':'홀로그램 지도. 곤디아 위에 하이 로사가 반짝여요.','12,1':'함교에는 창문이 없어요. 화면이 창문이에요.',
   '23,1':'창밖에 레스타리가 있어요. 석 달 동안 우리 집이었어요.','16,10':'과일 나무 화분. 개스들이 매일 물을 줘요.',
   get '23,4'(){return f().zpz?'ZPZ 발생기. 공 네 개가 빨간 가시에 꽂혀 있어요. 보라색 불꽃이 튀어요.':f().swap?'ZPZ 발생기가 들어왔어요. 아직 설치 전이에요.':'상자 두 개. 안에 엔트로피 드라이브가 있어요.'},
   get '22,10'(){return f().filter?'물이 맑아요. 새 필터가 잘 돌아가요.':'물이 갈색이에요. 필터가 막혔어요.'}},
  things:{'#':['오래된 선체 벽이에요. 고친 자국이 많아요.','벽이 조금 따뜻해요. 웅웅 소리가 나요.'],
   'C':['원통 발코니에 덩굴이 늘어져 있어요.','발코니마다 주황색 과일이 달렸어요.'],
   'v':['화분에 주황색 과일이 달렸어요.','흙 냄새가 좋아요. 잎이 반짝반짝해요.'],
   'g':'격납고 벽이에요. 노란 줄무늬가 있어요.','b':'대나무 칸막이예요. 마른 풀 냄새가 나요.',
   'S':['벽 화면에 그래프가 움직여요.','벽 화면에 숫자가 반짝여요.'],
   'L':'창밖에 레스타리가 떠 있어요. 큰 엔진 두 개가 보여요.','c':'화면에 메시지가 가득해요. 다 못 읽겠어요.',
   'Z':()=>f().swap?'공 네 개가 빨간 가시에 꽂혀 있어요.':'큰 상자예요. 노란 줄이 그어져 있어요.',
   't':()=>f().filter?'탱크 물이 맑아요. 거품이 올라가요.':'탱크 물이 갈색이에요. 빨간 불이 깜빡여요.',
   'H':'홀로그램 지도가 천천히 돌아요.','u':'푹신한 소파예요. 쿠션이 하나 있어요.','k':'격납고 상자예요. 단단히 묶여 있어요.'},
  npcs:['dejean','ellie','finn','epi','gyvoy','malvin','dave1','dave2','nglon','pablo','renata']},
 round:{name:'총독 원형 저택',reg:'ROUNDHOUSE · SANTA ROSA',outdoor:1,
  legend:{'R':{tile:'coral'},'U':{tile:'banner'},'G':{tile:'glassLawn',walk:1},'O':{tile:'tree'},'m':{tile:'maple'},'b':{tile:'birch'},'*':{tile:'flowers',walk:1},'P':{tile:'stone',walk:1},
   'd':{tile:'dais',walk:1},'Q':{tile:'sequoia'},'~':{tile:'pond'},'n':{tile:'bench'},'E':{tile:'lift',walk:1},'A':{tile:'gate',walk:1}},
  map:[
"RRRRRRRRRRRRRRRRRRRRRRRRRRRR",
"RRRRRRRRRURRRRRRRRURRRRRRRRR",
"RGGO*GGPddddddddddddPG*GOGGR",
"RGGGGGGPddddddddddddPGGGGGGR",
"RGmGGGGPPPPPPPPPPPPPPGGGGbGR",
"RGGGGGGPGGGGGGGGGGGGPGGGGGGR",
"RGOGGGGPGGGQQGGQQGGGPGGOGGGR",
"RGGGGGGPGGGQQGGQQGGGPGGGGGGR",
"RG*GGGGPGQQGGQQGGQQGPGGGGmGR",
"RGGGGGGPGQQGGQQGGQQGPGGGGGGR",
"RGbGGGGPGGGQQGGQQGGGPGGGGGGR",
"RGGGGGGPGGGQQGGQQGGGPGGOGGGR",
"RGGPPPPPPPPPPPPPPPPPPPPPPGGR",
"RGGPGG~~~~GGGGGGG*n*GGGGPGGR",
"RGGPGG~~~~GGOGGGGGGGGGGGPGGR",
"RGGPGGGGGGGmGGGGGGbGGGGGPGGR",
"RGGEGGGGGGGGGGGGGGGGGGGGAGGR",
"RRRRRRRRRRRRRRRRRRRRRRRRRRRR"],
  rooms:[[8,2,19,3,'총독 저택 · 임명의 단'],[1,4,26,11,'총독 저택 · 수목원'],[1,12,26,16,'총독 저택 · 정원']],
  warps:{'3,16':{to:'ship',x:24,y:5,dir:'up'},
   '24,16':{to:'hafnir',x:8,y:2,dir:'down',lock:()=>f().rode?false:!hasItem('화살 열차표')?'화살 열차표가 없어요.':!f().blessing?'어머니가 핀을 찾아요. 인사하고 가요.':false}},
  spots:{'13,8':'제일 큰 세쿼이아. 황후의 나무예요. 금빛 띠가 있어요.','9,8':'거대한 세쿼이아. 일곱 그루가 일곱 별을 뜻해요.','9,1':'총독의 깃발이에요.','1,1':'분홍 산호 리브스톤 벽. 금빛, 은빛 점이 반짝여요.','7,13':'연못에 하늘의 수정 돔이 비쳐요.'},
  things:{'R':['분홍 산호 같은 벽이에요. 금빛 점이 반짝여요.','벽이 매끈해요. 돌이 살아 있는 것 같아요.'],
   'Q':['거대한 세쿼이아예요. 고개를 들어도 끝이 안 보여요.','나무껍질이 빨갛고 부드러워요.'],
   'O':'초록 잎이 무성한 나무예요.','m':'단풍나무예요. 잎이 빨개요.','b':'자작나무예요. 껍질이 하얘요.',
   '~':['연못에 작은 물고기가 있어요.','연못 물이 아주 맑아요.'],'n':'나무 벤치예요. 조금 쉬어도 돼요.',
   'U':'총독의 깃발. 금색 무늬가 있어요.'},
  npcs:['guard','josias','mother','zelinda','wynid']},
 hafnir:{name:'하프니르',reg:'HAFNIR · GONDIAR',outdoor:1,
  legend:{'J':{tile:'jaca'},'r':{tile:'guide'},'X':{tile:'train',walk:1},'x':{tile:'train',walk:1},'P':{tile:'platform',walk:1},'Y':{tile:'pillar'},'.':{tile:'lawn',walk:1},'S':{tile:'street',walk:1},
   'V':{tile:'villa'},'W':{tile:'fall'},'n':{tile:'bench'},'M':{tile:'mush'},'B':{tile:'poster'},'*':{tile:'flowers',walk:1},'s':{tile:'sand',walk:1},'q':{tile:'parasol'},'K':{tile:'bar',over:1},'f':{tile:'surf'},'w':{tile:'sea'}},
  map:[
"JJJJJJJJJJJJJJJJJJJJJJJJJJJJ",
"rrrrrrXXxXXXrrrrrrrrrrrrrrrr",
"PPPPPPPPPPPPPPPPPPPPPPPPPPPP",
"PPYPPPPPPPPPPYPPPPPPPPPPYPPP",
".J.VV.SS..VV...J....MMM..J..",
"...VV.SS..VV..B.**..MMM..*..",
".J....SS..n..*.....JMMM.*...",
"..n...SS............SSS.....",
".SSSSSSSSSSSSSSSSSSSSSSSSSS.",
"...VV..*..WW...n...SS....J..",
".J.VV.....WW..*....SS...J...",
"...J.....**........SS.......",
"ssssssssssssssssssssssssssss",
"sssqKKKqssssssssssssssssssss",
"ssssssssssssssssssssssssssss",
"ffffffffffffffffffffffffffff",
"wwwwwwwwwwwwwwwwwwwwwwwwwwww",
"wwwwwwwwwwwwwwwwwwwwwwwwwwww"],
  rooms:[[0,0,27,3,'하프니르 · 기차역'],[0,4,27,11,'하프니르 · 마을'],[0,12,27,17,'하프니르 · 바닷가']],
  warps:Object.fromEntries([6,7,8,9,10,11].map(x=>[x+',1',{to:'round',x:24,y:15,dir:'up'}])),  // any car of the train takes you back
  spots:{'13,3':'"하프니르역 · 산타 로사행 화살 열차"','14,5':'포스터: "{리걸 민주당|리걸 민주당} · 하프니르를 위해!"','10,9':'지붕에서 폭포가 떨어지는 집. 누가 이렇게 지었을까요?',
   '20,6':'오틸리아가 디자인한 집. 버섯이 모여 있는 것 같아요.','10,15':'파도가 하얗게 부서져요.','3,4':'리브스톤 집. 집마다 모양이 달라요.'},
  things:{'w':['바다가 파랗게 반짝여요.','멀리 바다 끝이 하늘하고 만나요.'],
   'J':['보라색 꽃나무예요. 자카란다예요.','보라색 꽃잎이 바닥에 떨어졌어요.'],
   'f':['하얀 거품이 모래 위로 밀려와요.','발이 젖을 것 같아요. 물이 차가워요.'],
   'r':'화살 열차 선로예요. 하얀 열차를 타면 산타 로사로 돌아가요.',
   'V':['리브스톤 집이에요. 지붕이 둥글어요.','창문이 두 개 있는 크림색 집이에요.'],
   'M':'버섯 집 창문에 노란 불이 켜져 있어요.','W':'지붕에서 물이 떨어져요. 시원한 소리가 나요.',
   'n':'바닷가 벤치. 모래가 조금 있어요.','K':'바닷가 카페 카운터. 주스 냄새가 나요.',
   'Y':'역 표지판이에요. 하얗고 깨끗해요.','q':'파라솔 아래는 시원해요.'},
  npcs:['station','otylia','vari','laurella','dushan','terence','cafe']},
};

const LOOK={
 finn:{hair:'#E0C070',skin:'#F0C9A4',shirt:'#2F8F8A',pants:'#2E3548'},
 ellie:{hair:'#2A2220',skin:'#E8B892',shirt:'#E4E1D6',pants:'#3B4650',belt:'#E8962A',style:'short'},
};
const EPI=[
 {who:'막간',say:'며칠 뒤. 아누샤, 파나석 탑 도시.'},
 {who:'메두사',say:'성실호가 떠났어요. 호아 퀸주 쪽이에요.'},
 {who:'마르첼루',say:'그럼 쫓아가야 돼요. 릴리아나, 팀을 맡아 줘요.'},
 {who:'릴리아나',say:'좋아요. 그런데 당신은 잘못된 사람들을 위해 일해요.'},
 {who:'막간',say:'{너브잼|너브잼}! 마르첼루가 쓰러졌어요.'},
 {who:'막간',say:'{체렌코프 칼|체렌코프 칼}이 푸르게 빛나요. 칼이 한 번 지나갔어요.'},
 {who:'막간',say:'마르첼루의 목이 바닥에 떨어졌어요. 피가 번졌어요.'},
];

const NPC={
 /* ---------- ship ---------- */
 dejean:{name:'드장 선장',zone:'ship',x:14,y:3,dir:'down',look:{hair:'#B9B9BE',skin:'#C99470',shirt:'#2E3B55',pants:'#2E3B55',cap:'#2E3B55',belt:'#E8962A',arm:'#B87333'},badge:['세월','변하다'],
  status:()=>{if(!b('세월'))return 'todo';if(f().confessed&&!f().done)return 'todo'},
  after:'세월이 빨라요. 그래도 성실호는 아직 튼튼해요.',
  script:()=>{
   if(!f().confessed||f().done)return null;
   return [
    {expand:()=>classTime(CLASS,['준비','전날'])},
    {say:'모두 준비됐어요? 하이 로사, 도킹 해제.'},
    {who:'엘리',say:'(통신) 핀은 괜찮아요. 제가 옆에 있을게요.'},
    {who:'핀',say:'(통신) 호아 퀸주 관문으로 가요. 첫 번째는 카이발이에요.'},
    {say:'성실호, 출발!'},
    ...EPI,
    {...Q.epi[0],who:'막간'},
    {who:'막간',say:'릴리아나는 암살자예요. 그런데 누구를 위해 일할까요?',award:['암살자'],set:()=>{f().done=1}},
    {who:'막간',say:'성실호는 아무것도 모르고 관문으로 날아가요.',finale:1}];
  },
  talk:()=>[
   {say:'왔어요? 오랜만이에요. 아니, 당신들한테는 석 달이죠?'},
   {say:'저한테는 팔 년이었어요. 제 머리 좀 봐요.'},
   Q.dejean[0],
   {say:'그동안 성실호도 많이 바뀌었어요.'},
   Q.dejean[1],
   {say:'이제 맬빈이 기관장이에요. 옥테인 팀은 거의 하프니르로 갔어요.'},
   {say:'그리고 {개스|개스} 구천 명이 우리 승무원이 됐어요.'},
   Q.dejean[2],
   {say:'오늘 오후에 총독 저택에서 의식이 있어요. 초대장 받아요.',give:'초대장'},
   {say:'엘리는 저기 콘솔에서 메시지를 읽고 있어요.',award:['세월','변하다'],set:()=>{f().dejean=1}}]},
 ellie:{name:'엘리',zone:'ship',x:11,y:3,dir:'down',look:LOOK.ellie,badge:['결혼하다'],
  pos:()=>f().night&&!f().done?[6,3]:[11,3],
  after:'팔 년… 아직도 믿을 수 없어요.',
  script:()=>f().night&&!f().confessed?[{say:'핀이 이상해요. 같이 이야기해 봐요.'}]:!f().dejean?[{say:'메시지가 너무 많아요… 선장님한테 먼저 인사해요.'}]:null,
  talk:()=>[
   {say:'와… 메시지가 팔 년 치예요.'},
   {say:'우리는 석 달 날았는데 여기는 팔 년이 지났어요. {시간 지연|시간 지연}이에요.'},
   {say:'친구들이 다 부모가 됐어요. 제 옛날 남자 친구 세 명도 아빠가 됐어요!'},
   Q.ellie[0],
   {say:'그리고 이거 봐요! 할아버지가… 오틸리아하고 결혼했어요!'},
   Q.ellie[1],
   {say:'핀은 아직 몰라요. {주인 방|주인 방}에 있어요. 가 봐요.',award:['결혼하다'],set:()=>{f().msgs=1}}]},
 finn:{name:'핀',zone:'ship',x:4,y:3,dir:'down',look:LOOK.finn,badge:['조카','약물','중독'],
  hide:()=>!!f().finn&&!f().night,
  status:()=>{if(!b('조카'))return f().msgs?'todo':null;if(!b('약물'))return f().night?'todo':null},
  after:'곧 출발이에요. 오늘은 그냥 자고 싶어요.',
  script:()=>{
   if(!b('조카')&&!f().msgs)return [{say:'메시지를 읽고 있어요. 엘리가 함교에서 불러요. 먼저 가 봐요.'}];
   if(f().night&&!b('약물'))return [
    {say:'…'},
    {who:'엘리',say:'핀! 이게 뭐예요? 이 작은 병.'},
    {say:'{레콜|레콜}이에요. 옛날 기억을 다시 보는 약이에요.'},
    Q.night[0],
    {who:'엘리',say:'레콜이요? 아누샤 그 성에서 몰래 가져왔어요?'},
    {say:'버라이카 꿈을 꿨어요. 열여섯 살 때 기억이요.'},
    {who:'엘리',say:'핀, 그건 중독이에요.'},
    {...Q.night[1],who:'…'},
    {say:'알아요. 그런데… 가끔 제 머릿속에 누가 있는 것 같아요.'},
    {who:'엘리',say:'…무슨 말이에요?'},
    {say:'모르겠어요. 미안해요, 엘리.',award:['약물','중독'],set:()=>{f().confessed=1}}];
   return null},
  talk:()=>[
   {say:'봤어요? 오틸리아가 조사이어스하고 결혼했어요!'},
   {say:'아이도 둘이에요. 로렐라하고 두샨.'},
   Q.finn[0],
   {say:'제가 {삼촌|삼촌}이에요! 그리고 조사이어스는 이제 제 가족이에요. 이상해요.'},
   {say:'오늘 오후에 조사이어스의 의식이 있어요.'},
   {say:f().filter?'1번 구 필터를 벌써 바꿨어요? 고마워요! 그럼 저택에 가요.':'그 전에 1번 구를 보고 싶어요. 같이 가요!',award:['조카'],set:()=>{f().finn=1}}]},
 epi:{name:'막간 · 파나석',zone:'ship',x:17,y:4,dir:'down',look:{art:crystal('#E6F6FF','#7FD3F0','#3E8EC0','#24507A')},badge:['암살자'],
  hide:()=>!f().done,pos:()=>[17,4],status:()=>null,
  script:()=>[...EPI,Q.epi[0]],talk:()=>[]},
 gyvoy:{name:'기보이',zone:'ship',x:21,y:2,dir:'down',look:{hair:'#2A1E1A',skin:'#B9825A',shirt:'#6A2E52',pants:'#4B3A2E',coat:1},badge:['교환하다'],
  status:()=>{if(!b('교환하다'))return f().variaka?'todo':'wait'},
  after:'아스테리아 여신님 감사합니다! 제 손바닥은 보지 마세요. 하하.',
  script:()=>!b('교환하다')&&!f().variaka?[{say:'아스테리아 여신님 감사합니다! 돌아왔네요!'},{say:'거래는 나중에 해요. 먼저 가족을 만나고 와요.'}]:null,
  talk:()=>[
   {say:'아스테리아 여신님 감사합니다! 이제 거래를 끝내요.'},
   Q.gyvoy[0],
   {say:'엔트로피 드라이브는 레스타리로. ZPZ 발생기는 이 격납고로.',set:()=>{f().swap=1}},
   Q.gyvoy[1],
   {say:'그리고… 진짜 일 이야기를 해요. 조용히요.'},
   {say:'{돌로드|돌로드}라는 행성이 우리 쪽으로 오고 있어요. 철이 아주 많은 가스 행성이에요.'},
   {say:'돌로드에서는 철 비가 내려요. 셀레스철이 그 철을 모으면 아누샤 광산은 끝나요.'},
   {say:'돌로드에는 {아르키메데스 엔진|아르키메데스 엔진}이 있어요.'},
   {say:'{킹스네스트|킹스네스트}에서 엔진 쓰는 법을 배워서 그걸 꺼야 돼요.'},
   {who:'핀',say:'그래서 관문을 지나는 배가 필요하군요.'},
   {say:'다른 승무원한테는 "인양 일"이라고 해요. 비밀이에요.'},
   {say:'첫 번째는 카이발이에요. 거기서 셀레스철 배를 구해요.'},
   {who:'핀',say:'오틸리아한테 빨리 온다고 했는데… 여기선 삼십 년이 지나겠죠.'},
   {say:'인간의 희망을 지키는 일이에요. 맬빈 씨한테 가요.',award:['교환하다']}]},
 malvin:{name:'맬빈 기관장',zone:'ship',x:26,y:4,dir:'left',look:{hair:'#3A2A20',skin:'#C99470',shirt:'#B7652F',pants:'#4A3A2E',belt:'#2B2B30',style:'spiky'},
  status:()=>f().swap&&!f().zpz?'todo':null,
  script:()=>{
   if(!f().swap)return [
    {say:'저는 맬빈이에요. 이제 제가 기관장이에요.'},
    {say:'저 상자 두 개 안에 {엔트로피 드라이브|엔트로피 드라이브}가 있어요. 옥테인 기관장님이 고쳤어요.'},
    {say:'기보이 씨가 나중에 발생기하고 교환해요.'}];
   if(!f().zpz)return [
    {say:'{ZPZ 발생기|ZPZ 발생기}가 들어왔어요! 정말 커요.'},
    {say:'반짝이는 공 네 개가 빨간 가시로 서로 꽂혀 있어요.'},
    Q.malvin[0],
    {who:'…',w:'설치하다',build:['맬빈이','발생기를','배에','설치했어요'],alts:[['맬빈이','배에','발생기를','설치했어요'],['발생기를','맬빈이','배에','설치했어요'],['발생기를','배에','맬빈이','설치했어요'],['배에','맬빈이','발생기를','설치했어요'],['배에','발생기를','맬빈이','설치했어요']]},
    {say:'됐어요! 이제 성실호도 관문을 지날 수 있어요.',set:()=>{f().zpz=1}},
    {say:'출발은 며칠 뒤예요. 오늘 밤은 다들 쉬어요.',set:()=>{f().night=1}}];
   return [{say:'발생기 상태 아주 좋아요. 보라색 불꽃, 예쁘죠?'}]},
  talk:()=>[]},
 dave1:{name:'데이브',zone:'ship',x:26,y:2,dir:'down',look:{art:null},pos:()=>[26,2],status:()=>null,
  talk:()=>[{say:'데이브.'},{say:'저쪽도 데이브.'},{say:'보안. 우리 일.'}]},
 dave2:{name:'데이브',zone:'ship',x:27,y:2,dir:'down',look:{art:null},pos:()=>[27,2],status:()=>null,
  talk:()=>[{say:'…'},{say:'여기는 바다가 없어요. 아쉬워요.'}]},
 nglon:{name:'응글론',zone:'ship',x:20,y:13,dir:'left',look:{hair:'#1E1E24',skin:'#8A5A3A',shirt:'#5E8C4A',pants:'#3E4A33',cap:'#7AA65A'},
  status:()=>!f().nglon&&f().finn?'todo':null,
  script:()=>f().filter?[{say:'물이 다시 맑아요! 고마워요.'},{say:'원통 아홉 개에 과일이 아주 많아요. 다 개스들 덕분이에요.'}]
   :f().nglon?[{say:'파블로는 물탱크 옆에 있어요.'}]:null,
  talk:()=>[
   {say:'어서 와요! 1번 구예요. 원통이 아홉 개 있어요.'},
   {say:'원통마다 과일 나무가 있어요. 개스들이 같이 키워요.'},
   {who:'핀',say:'팔 년 전에는 이렇게 초록색이 아니었어요!',when:()=>!!f().finn},
   {say:'그런데 물 {필터|필터}가 막혀서 물이 더러워요.'},
   {say:'새 필터는 있어요. 그런데 탱크가 너무 높아요.'},
   {say:'파블로한테 부탁해요. 개스는 키가 3미터예요!',give:'물 필터',set:()=>{f().nglon=1}}]},
 pablo:{name:'파블로',zone:'ship',x:22,y:12,dir:'up',look:{art:gath('#CDB894','#B09C74','#8A7A58','#5A3A2A')},badge:['설치하다'],
  after:'파블로는 이 배를 지켜요. 성 오틸리아님하고 약속했어요.',
  script:()=>!b('설치하다')&&!hasItem('물 필터')?[{say:'다들 돌아왔어요! 반가워요. 파블로 기억해요?'},{say:'물이 더러워요. 응글론 씨가 필터를 찾아요.'}]:null,
  talk:()=>[
   {say:'다들 돌아왔어요! 반가워요. 파블로 기억해요?'},
   {say:'이 코요? 옛날에 사람들이 싸우라고 파블로를 때렸어요.'},
   {say:'그래도 파블로는 안 싸웠어요.'},
   {say:'개스는 모두 성 오틸리아님을 사랑해요. 개스가 이 배에 탄 것도 오틸리아님 생각이었어요.'},
   {say:'필터? 파블로가 해요. 팔이 길어요.',take:['물 필터']},
   Q.pablo[0],
   {say:'끝! 물이 다시 깨끗해요.',set:()=>{f().filter=1}},
   {say:'오후에 캡슐이 내려가요. 격납고에서 타요.',award:['설치하다']}]},
 renata:{name:'레나타',zone:'ship',x:17,y:15,dir:'down',look:{art:gath('#E6E1D4','#C9C2B0','#D2533F','#7A4A32')},
  talk:()=>[{say:'레나타는 간호사예요. 아프면 레나타한테 와요.'},{say:'우주에서 석 달? 몸 괜찮아요? 물 많이 마셔요.'}]},
 /* ---------- Roundhouse ---------- */
 guard:{name:'경비원',zone:'round',x:4,y:15,dir:'left',look:{hair:'#5A4636',skin:'#D7A77E',shirt:'#C9D3DC',pants:'#9AA6B2',cap:'#E6ECF0',belt:'#E8C25A'},
  status:()=>hasItem('초대장')?'todo':null,
  script:()=>f().invited?[{say:'의식은 수목원 위쪽 단에서 해요.'}]:null,
  talk:()=>[
   {say:'총독 저택이에요. 초대장 있어요?'},
   {say:'네, 확인했어요. 들어가세요.',take:['초대장'],set:()=>{f().invited=1}},
   {say:'수정 돔 아래 나무가 팔천 종류예요. 길을 잃지 마세요.'}]},
 josias:{name:'조사이어스',zone:'round',x:13,y:2,dir:'down',look:{beard:'#3E2A1E',hair:'#4A3426',skin:'#E3B48C',shirt:'#6E4A8A',pants:'#2A2433',coat:1},badge:['정당','선거'],
  status:()=>{if(!b('정당'))return f().invited?'todo':'wait'},
  after:'선거는 끝이 없어요. 그래도 하프니르를 위해서예요.',
  script:()=>!f().invited&&!b('정당')?[{say:'아, 왔군요! 입구 경비원한테 초대장을 보여 줘요.'}]:null,
  talk:()=>[
   {say:'{처남|처남}! 그리고 성실호 친구! 돌아왔군요.'},
   {say:'오늘 저는 인간 문제 {위원회|위원회}에 들어가요.'},
   {say:'이 손바닥 보여요? 새 바이오웨어 패드예요. 곤디아 네트워크에 연결할 때 써요.'},
   {say:'그런데 계속 간지러워요. 하하.'},
   {say:'그리고 저는 정당을 만들었어요. {리걸 민주당|리걸 민주당}이에요.'},
   Q.josias[0],
   {say:'하프니르 의석 스물다섯 개 중에 스물세 석을 차지했어요!'},
   Q.josias[1],
   {who:'…',say:'잠시 뒤, 의식이 시작돼요. 조사이어스가 위원회에 들어가요. 모두 박수를 쳐요.'},
   {say:'오늘 밤에는 하프니르에서 {기금 모금|기금 모금} 행사가 있어요.'},
   {say:'오틸리아가 집에서 기다려요. {화살 열차|화살 열차}표 가져가요.',give:'화살 열차표',award:['정당','선거'],set:()=>{f().council=1}}]},
 mother:{name:'후작부인',zone:'round',x:10,y:3,dir:'down',badge:['축복'],
  look:{art:{pal:{O:'#1B1E2B',E:'#1B1E2B',H:'#7A6458',h:'#5E4A40',S:'#EBC4A0',M:'#C9907A',T:'#E58AD6',G:'#E8C25A',V:'#3E8E5A',v:'#2E6E44',D:'#6B3FA0',d:'#4F2D7A'},
   down:['.....OTGGTO.....','....OHHHHHHO....','...OHHhHHhHHO...','...OHSSSSSSHO...','...OSSESSESSO...','....OSSMMSSO....','...OOVvGGvVOO...','..OSVvVGGVvVSO..',
    '..OSVvVGGVvVSO..','...ODDDDDDDDO...','..ODDDdDDdDDDO..','..ODDdDDDDdDDO..','.ODDDdDDDDdDDDO.','.ODDdDDDDDDdDDO.','.OddddddddddddO.','..OOOOOOOOOOOO..'],
   up:['.....OTGGTO.....','....OHHHHHHO....','...OHHhHHhHHO...','...OHHHHHHHHO...','...OHHHHHHHHO...','....OHHHHHHO....','...OOVvVVvVOO...','..OSVvVVVVvVSO..',
    '..OSVvVVVVvVSO..','...ODDDDDDDDO...','..ODDDdDDdDDDO..','..ODDdDDDDdDDO..','.ODDDdDDDDdDDDO.','.ODDdDDDDDDdDDO.','.OddddddddddddO.','..OOOOOOOOOOOO..'],
   left:['......OTGTO.....','.....OHHHHHO....','....OHHHHhHHO...','....OSSHHHHHO...','...OSESSSHHHO...','....OMSSSSHO....','.....OVvGVO.....','....OVSvGVVO....',
    '....OVSvGVVO....','....ODDDDDDO....','...ODDdDDDDDO...','...ODDdDDDDDO...','..ODDDdDDDDDDO..','..ODDdDDDDDdDO..','..OdddddddddddO.','...OOOOOOOOOOO..']}},
  status:()=>{if(!b('축복'))return f().council?'todo':'wait'},
  after:'핀바, 이번에는 꼭 편지하거라.',
  script:()=>!f().council&&!b('축복')?[{say:'쉿, 의식이 곧 시작해요. 조사이어스 씨한테 먼저 가 봐요.'}]:null,
  talk:()=>[
   {say:'왔구나, 핀바. 여행은 성공적이었니?'},
   {who:'핀',say:'네, 어머니. ZPZ 발생기를 가져왔어요.'},
   {say:'그건 잘했구나. 성실호가 나는 걸 보고 싶구나. 그런데 오틸리아는 개스한테 돈을 너무 많이 썼어.'},
   {who:'핀',say:'또 그 얘기예요? 팔 년 만인데…'},
   {say:'…얼굴이 하나도 안 변했구나. 나는 손주가 벌써 셋이야.'},
   {say:'또 떠난다고 들었어. 이번에는 얼마나 걸리니?'},
   {who:'핀',say:'몰라요. 아주 오래 걸릴 거예요.'},
   {...Q.mother[0],who:'…'},
   {say:'가는 게 맞는 것 같구나. 핀바, 사랑한다. 내 축복을 가지고 가거라.',award:['축복'],set:()=>{f().blessing=1}}]},
 zelinda:{name:'젤린다',zone:'round',x:17,y:3,dir:'down',look:{hair:'#D9B860',skin:'#F0C9A4',shirt:'#3E6E8A',pants:'#3E6E8A',style:'bun',coat:1},
  talk:()=>[
   {say:'핀! 아, 성실호 승무원이에요? 저는 젤린다, 핀의 누나예요.'},
   {say:'저 지금 둘째를 {임신|임신}했어요. 첫째 오거스타는 집에 있어요.'},
   Q.zelinda[0],
   {say:'아, 핀. 버라이카 기억나?'},
   {who:'핀',say:'…당연히 기억하지.'},
   {say:'버라이카가 에버렛하고 {약혼했어|약혼하다}. 하하, 얼굴 좀 봐!'},
   {who:'핀',say:'형이… 정말?'}]},
 wynid:{name:'막간 · 와이니드',zone:'round',x:22,y:14,dir:'down',look:{art:crystal('#EBDDFF','#B48CFF','#7E5CC9','#4E3488')},pos:()=>[22,14],
  status:()=>f().wynid?null:'todo',
  talk:()=>[
   {who:'막간',say:'멀리 와이니드 궁전. 두 번째 시험이 끝났어요.'},
   {who:'막간',say:'여왕의 어린 딸 발레리와 델피나가 죽었어요. {블러드리언|블러드리언}이 물었어요.'},
   {who:'말퀼보 보몽 경',say:'티라가 했어요! 티라가 두 아이를 죽였어요!'},
   {who:'헬레나키오네 여왕',say:'티라의 기억을 다 읽었다. 티라는 아무것도 안 했어.'},
   {who:'헬레나키오네 여왕',say:'성급하게 고발했군. 그런 약함은 내 핏줄에 들어오면 안 돼.'},
   {who:'헬레나키오네 여왕',say:'{시볼라|시볼라}.'},
   {who:'막간',say:'말퀼보 보몽 경의 몸이 갈색 곰팡이로 변했어요.'},
   {who:'티라',say:'(아무도 몰라요. 기억은 숨겼어요. 그 고양이는 내 말을 들었어요.)'},
   {who:'막간',say:'진짜 범인은 열 살 티라였어요.',set:()=>{f().wynid=1}}]},
 /* ---------- Hafnir ---------- */
 station:{name:'역무원',zone:'hafnir',x:12,y:2,dir:'down',look:{hair:'#2A2220',skin:'#D7A77E',shirt:'#2F6E8A',pants:'#2A3440',cap:'#2F6E8A',belt:'#E8C25A'},badge:['기차역'],
  after:'화살 열차는 오늘도 정시예요!',
  talk:()=>[
   {say:'하프니르 기차역에 오신 걸 환영해요!'},
   {say:'표 좀 볼게요. 네, 고마워요.',take:['화살 열차표'],set:()=>{f().rode=1}},
   {say:'팔 년 전에는 여기 아무것도 없었어요. 빈 바닷가였어요.'},
   Q.station[0],
   {who:'핀',say:'제가 준 빈 땅이… 도시가 됐어요!'},
   {say:'오틸리아 님 집은 버섯 모양이에요. 금방 찾을 거예요.',award:['기차역']}]},
 otylia:{name:'오틸리아',zone:'hafnir',x:21,y:7,dir:'down',look:{hair:'#E8CC7A',skin:'#F0C9A4',shirt:'#C25B7A',pants:'#3D3550',long:1},badge:['약속하다'],
  after:'아이들이 바닷가에 있어요. 삼촌을 기다려요.',
  talk:()=>[
   {say:'핀! 드디어 왔네! 팔 년이야, 팔 년!'},
   {who:'핀',say:'나한테는 석 달이었어. 미안해.'},
   {say:'나 결혼했어. 조사이어스하고. 알지?'},
   {say:'이 집은 내가 디자인했어. 버섯 같지? 아이들이 좋아해.'},
   {say:'개스들은 잘 지내? 배를 그 사람들한테 맡기자고 한 게 나야.'},
   Q.otylia[0],
   {w:'약속하다',who:'핀',build:['꼭','돌아온다고','약속할게'],alts:[['돌아온다고','꼭','약속할게']]},
   {say:'좋아. 이 가족 사진 가져가. 우리를 잊지 마.',give:'가족 사진'},
   {say:'그리고 이거. 하프니르 주민 증명서야. 엘리 것도 있어.',give:'하프니르 주민 증명서'},
   {who:'핀',say:'고마워. …잠깐 테라스에서 전화 한 통 할게.',award:['약속하다'],set:()=>{f().otylia=1}}]},
 vari:{name:'버라이카 (통화)',zone:'hafnir',x:23,y:7,dir:'down',pos:()=>[23,7],badge:['배신하다'],
  look:{art:{pal:{O:'rgba(31,110,126,.9)',A:'rgba(143,234,245,.8)',a:'rgba(79,195,211,.75)',W:'#E6FDFF',G:'#69CFD8',P:'#3A4650',p:'#5F6B72'},down:[
   '.....OOOOOO.....','....OAAAAAAO....','...OAWAAAAAAO...','...OaaaaaaaaO...','...OAAOAAOAAO...','...OaaaaaaaaO...','..OAAOAAAAOAAO..','..OaaaaaaaaaaO..',
   '..OAAAAAAAAAAO..','...OaaaaaaaaO...','...OAAAAAAAAO...','...OaaaaaaaaO...','....OAAOOAAO....','................','..GpPPPPPPPPpG..','...OppppppppO...']}},
  hide:()=>!f().otylia,
  after:'(통화가 끝났어요.)',
  talk:()=>[
   {say:'핀? 정말 핀이에요? 하나도 안 늙었네요.'},
   {who:'핀',say:'버라이카, 우리하고 같이 가요. 성실호로 탐험을 떠나요.'},
   {say:'핀, 저는 이제 여기서 살아요. 에버렛하고 결혼할 거예요.'},
   Q.vari[0],
   {say:'옛날 핀은 늘 떠났어요. 이번에도 그렇죠.'},
   {say:'잘 가요, 핀. 진심이에요.',award:['배신하다'],set:()=>{f().variaka=1}},
   {who:'핀',say:'…그래요. 잘 지내요.'}]},
 laurella:{name:'로렐라',zone:'hafnir',x:14,y:14,dir:'down',look:{art:kid('#C9A458','#F7D154','#3D3550',1)},badge:['파도'],
  after:'삼촌, 또 파도 보러 와요!',
  talk:()=>[
   {say:'삼촌이에요? 엄마가 삼촌 얘기 많이 했어요!'},
   {say:'우리는 매일 바다에서 놀아요.'},
   Q.kid[0],
   {say:'두샨은 파도가 무서워서 울어요. 히히.'},
   {who:'핀',say:'제 조카들이에요. 정말 귀엽죠?'},
   {say:'삼촌, 큰 파도 오면 같이 뛰어요!',award:['파도']}]},
 dushan:{name:'두샨',zone:'hafnir',x:16,y:14,dir:'left',look:{art:kid('#4A3426','#69CFD8','#2E3548',0)},
  talk:()=>[{say:'파도 무서워요… 그래도 모래성은 좋아요.'},{say:'우리 아빠는 맨날 연설해요.'}]},
 terence:{name:'테렌스',zone:'hafnir',x:24,y:13,dir:'left',look:{hair:'#6A5444',beard:'#6A5444',skin:'#E0AE86',shirt:'#9C8358',pants:'#3A3A40',coat:1},
  talk:()=>[
   {say:'어? 핀바 씨! 기억나요? 그때 경찰 호위를 맡은 테렌스예요.'},
   {say:'우리가 처음 만난 지 팔 년 됐어요. 저는 이제 아저씨예요.'},
   Q.terence[0],
   {say:'그동안 결혼했어요. 아내 히메나, 아들 알잔이에요.'},
   {say:'그런데… 요즘 기보이 씨가 누구를 만나는지 알아요?'},
   {say:'아, 그냥 궁금해서요. 좋은 여행 해요.'},
   {who:'테렌스 (생각)',say:'(그 여자, 릴리아나… 이상해.)'}]},
 cafe:{name:'해변 카페 사장님',zone:'hafnir',x:5,y:12,dir:'down',look:{hair:'#3A2A22',skin:'#C48E66',shirt:'#E8962A',pants:'#5A4A3A',style:'bun'},
  script:()=>{const q=Q.cafe[Math.random()*Q.cafe.length|0];return [{say:'어서 오세요! 바닷가 카페예요. 옛날 단어 연습해요.'},{...q,old:1},{say:'또 오세요. 파도 소리는 공짜예요.'}]},
  talk:()=>[]},
};
/* the Daves: Silicates, see-through quartz skin over visible muscle */
const DAVE={pal:{O:'#1B1E2B',E:'#3A2E3A',Q:'rgba(230,240,244,.92)',q:'rgba(184,204,214,.9)',m:'#C77B86',n:'#9E5866'},down:[
 '.....OOOOOO.....','....OQQQQqQO....','...OQQmmmmQqO...','...OQmEmmEmQO...','...OQmmmmmmQO...','....OQmnnmQO....','..OOQQQmmQQQOO..','.OQQmmmQQmmmQQO.',
 '.OQmmnmQQmnmmQO.','.OqQmmmqqmmmQqO.','.OmOQmmmmmmQOmO.','.OQOQmmnnmmQOQO.','..O.OQmmmmQO.O..','....OQmOOmQO....','....OQmOOmQO....','....OQQOOQQO....','....OOOOOOOO....']};
NPC.dave1.look={art:DAVE};NPC.dave2.look={art:DAVE};

const FOLLOW={name:'핀',look:LOOK.finn,when:()=>!!f().finn&&!f().night,talk:()=>[{say:
 ZID==='round'?'세쿼이아 보여요? 일곱 그루, 일곱 별이에요.':
 ZID==='hafnir'?(f().otylia?'버섯 집… 정말 오틸리아다워요.':'하프니르… 제가 준 빈 땅이 도시가 됐어요!'):
 f().swap?'저 발생기만 있으면 관문을 지날 수 있어요.':!f().filter?'1번 구가 이렇게 초록색이었어요?':'팔 년… 다들 너무 많이 변했어요.'}]};

const INTRO=[{who:'하이 로사',say:'하이 로사 도킹 완료. 레스타리, 환영해요.'},{who:'엘리',say:'(통신) 석 달 만에 돌아왔어요. 그런데 여기는… 팔 년이 지났대요.'}];
const DONE=['3장 끝! 성실호가 호아 퀸주 관문으로 떠나요.','곤디아에서는 또 긴 세월이 흐를 거예요.',{expand:()=>wrapUp()},'일지에서 단어를 다시 볼 수 있어요.'];

function questText(){
 const F=f();
 if(F.done)return '3장 끝 · 일지에서 복습해요';
 if(!F.dejean)return '함교 · 드장 선장님한테 가요';
 if(!F.msgs)return '함교 · 엘리가 메시지를 읽어요';
 if(!F.finn)return '주인 방 · 핀을 만나요';
 if(!F.filter)return hasItem('물 필터')?'1번 구 · 파블로한테 필터를 줘요':'1번 구 · 응글론을 도와요';
 if(!F.invited)return '총독 저택 · 경비원한테 초대장';
 if(!F.council)return '총독 저택 · 조사이어스의 의식';
 if(!F.blessing)return '총독 저택 · 후작부인한테 인사해요';
 if(!F.rode)return ZID==='hafnir'?'하프니르 · 역무원한테 표를 보여 줘요':'총독 저택 · 화살 열차를 타요';
 if(!F.otylia)return '하프니르 · 오틸리아의 버섯 집';
 if(!F.variaka)return '하프니르 · 버라이카한테 전화해요';
 if(!F.swap)return '3번 격납고 · 기보이하고 교환해요';
 if(!F.zpz)return '3번 격납고 · 맬빈하고 설치해요';
 if(!F.confessed)return '주인 방 · 핀이 이상해요';
 return '함교 · 출발해요';
}
return {WORDS,DICT,CONFUSE,BANK,Q,REVIEW,CLASS,ITEMS,ZONES,NPC,FOLLOW,INTRO,DONE,questText,TILES:TL};
}});
