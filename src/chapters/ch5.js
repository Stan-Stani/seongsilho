CHAPTERS.push({id:'ch5',n:'5장',title:'산타 로사',place:'경찰서 · 하이 로사 · 산타 로사',words:16,save:'seongsilho-ch5',color:'#7A4FA0',
 start:{zone:'hq',x:3,y:3,dir:'down'},introWho:'테렌스',
 make:()=>{
/* =====================================================================
   5장 · 산타 로사 — Terence's chapter, the Diligent's 31-year absence.
   Book pin: c019 (Bopbe, three networks), c024 (Zikar sting, Dawnkey protest, Hafnir party), c026 (Bersche, Toše at High Rosa,
   capsule bomb: 237 dead incl. Lućia; crackdown; Medusa captured + truth helmet), c027 (Antoinette-2burg = Liliana; Makaio-Faraji
   sniped on the Roundhouse balcony → rider "Makaio-Spirit"), c028 (two years later: Avone-Valerio occupies Gondiar), c029 (Medusa hidden
   in the Penacova hospice; Josias's "Go for the Seven"; Léonie killed; missile kills the marchioness, her husband and Variaka),
   c030 (Jalgori-Tobus + Aljan leave on the Polkadav; the real Gyvoy's stabbed corpse under the Dark Paradise club).
   Wynid interludes on the news screen: c019/c020, c021, c023, c025, c028.
   True now: Finn & the Diligent are away (Kingsnest); Gyvoy left with them 12 years before the start; Terence (Director of Special
   Operations) works secretly for Makaio-Faraji; c019 Lućia questions Bopbe while Terence watches from the monitor room; c026 Terence
   follows Lućia at High Rosa through her feed from his Santa Rosa office (the player sees through her sensors); c029 the survivors go
   to Terence's Hafnir villa; Stanvar8 = the gang, the Dark Paradise = its club (members all arrested); Jimena his wife, Aljan (medic) and Vanilda (Dawnkey) his children.
   Networks as Terence numbers them: One = Makaio's, Two = unknown (Liliana/Toše), Three = Sahdiah's (Medusa).
   Lore source: notes/canon.md. Audit against the full book before publishing (see CLAUDE.md).
   ===================================================================== */
const WORDS=['수사','정보원','체포하다','처형','증거','변장하다','단서','시위','감시하다','폭발','장례식','테러','폭탄','암살','저격','점령하다'];
const DICT={
 '수사':{k:'경찰이 사건과 범인을 자세히 알아봐요.',e:'(criminal) investigation',ex:'경찰이 캡슐 폭발 사건을 수사해요.',hj:'搜査 · 査 = 조사(調査)의 사'},
 '정보원':{k:'몰래 비밀을 모아서 다른 사람한테 주는 사람.',e:'informant; (spy) agent',ex:'봅베는 다른 조직의 정보원이었어요.',hj:'情報員 · 員 = 회원(會員)의 원'},
 '체포하다':{k:'경찰이 범인을 잡아서 데려가요.',e:'to arrest',ex:'경찰이 메두사를 체포했어요.',hj:'逮捕'},
 '처형':{k:'나라나 조직이 사람을 벌로 죽이는 것.',e:'execution',ex:'봅베의 죽음은 처형이었어요.',hj:'處刑 · 刑 = 형사(刑事)의 형'},
 '증거':{k:'누가 범인인지 보여 주는 것.',e:'evidence, proof',ex:'이 영상이 증거예요.',hj:'證據'},
 '변장하다':{k:'다른 사람처럼 보이게 얼굴이나 옷을 바꿔요.',e:'to disguise oneself',ex:'테렌스가 지카르로 변장했어요.',hj:'變裝 · 變 = 변하다의 변'},
 '단서':{k:'문제를 푸는 작은 힌트.',e:'clue, lead',ex:'드론 설계도가 첫 단서예요.',hj:'端緖'},
 '시위':{k:'많은 사람이 거리에 모여서 반대 목소리를 내요.',e:'protest, demonstration',ex:'오늘 광장에서 시위가 있어요.',hj:'示威'},
 '감시하다':{k:'누가 뭘 하는지 몰래 계속 봐요.',e:'to watch, keep under surveillance',ex:'루치아가 토셰를 감시해요.',hj:'監視 · 視 = 시력(視力)의 시'},
 '폭발':{k:'큰 소리와 불이 나면서 갑자기 터지는 것.',e:'explosion',ex:'캡슐 폭발로 많은 사람이 죽었어요.',hj:'爆發 · 發 = 출발·발견의 발'},
 '장례식':{k:'죽은 사람에게 마지막 인사를 하는 행사.',e:'funeral',ex:'루치아의 장례식에 많은 사람이 왔어요.',hj:'葬禮式 · 式 = 결혼식의 식'},
 '테러':{k:'사람들을 무섭게 하려고 일부러 하는 공격.',e:'terror attack, terrorism',ex:'이건 사고가 아니라 테러예요.',hj:'영어 terror에서 왔어요'},
 '폭탄':{k:'터지는 무기.',e:'bomb',ex:'캡슐 안에 폭탄이 있었어요.',hj:'爆彈 · 爆 = 폭발의 폭'},
 '암살':{k:'중요한 사람을 몰래 죽이는 것.',e:'assassination',ex:'아콘이 암살당했어요.',hj:'暗殺 · 暗 = 어둡다'},
 '저격':{k:'멀리 숨어서 총으로 한 사람을 쏘는 것.',e:'sniping, sniper shot',ex:'토셰가 마카이오를 저격했어요.',hj:'狙擊 · 擊 = 공격(攻擊)의 격'},
 '점령하다':{k:'군대가 다른 사람의 땅을 차지해요.',e:'to occupy (militarily)',ex:'제국군이 곤디아를 점령했어요.',hj:'占領 · 領 = 대통령(大統領)의 령'},
 /* glosses for words that appear in lines but are not badges */
 '취조실':{k:'경찰이 범인한테 질문하는 방.',e:'interrogation room'},
 '감식실':{k:'증거를 과학으로 조사하는 방.',e:'forensics lab'},
 '심문하다':{k:'범인한테 어려운 질문을 해서 진실을 알아내요.',e:'to interrogate'},
 '나노 기계':{k:'눈에 안 보일 만큼 아주 작은 기계.',e:'nanomachine'},
 '오더바이저':{k:'다른 사람 얼굴이 되는 가면.',e:'othervisor (disguise mask)'},
 '일레븐 톡식스':{k:'산타 로사의 무서운 갱 이름.',e:'Eleven Toxix (a gang)'},
 '표적 드론':{k:'총이 멀리 있는 목표를 맞히게 도와주는 작은 드론.',e:'targeting drone'},
 '안디':{k:'일하는 로봇.',e:'andy (robot)'},
 '돈키':{k:'사람들의 권리를 위한 시위 운동.',e:'Dawnkey (protest movement)'},
 '에어릴':{k:'3cm쯤 되는 아주 작은 감시 드론. 실처럼 생겼어요.',e:'aireel (tiny surveillance thread)'},
 '라이더':{k:'다른 사람 머릿속에 사는 기억과 성격의 복사본.',e:'rider (stored personality)'},
 '관리관':{k:'점령한 땅을 다스리는 사람.',e:'Custodian'},
 '고스트':{k:'셀레스철이 만든 전투 기계. 이번 고스트는 머리가 없어요.',e:'Ghost (Celestial combat machine)'},
 '체렌코프 칼':{k:'푸르게 빛나는 아주 드문 에너지 칼.',e:'Cherenkov blade'},
 '아콘':{k:'셀레스철 여왕을 위해 일하는 귀족. 대사이자 스파이 대장.',e:'archon'},
 '슬로볼':{k:'배를 먹어 버리는 나노 기계 구름.',e:'slowball (nanotech swarm)'},
 '유버스터':{k:'사람의 기억을 다 지우는 기계.',e:'YouBuster (mind-wiper)'},
 '총파업':{k:'모든 사람이 같이 일을 멈추는 것.',e:'general strike'},
 '리브스톤':{k:'살아 있는 돌. 우라닉이 마음으로 모양을 바꿔요.',e:'livestone'},
 '미사일':{k:'멀리 날아가서 터지는 큰 폭탄.',e:'missile'},
};
/* sounds-alike / looks-alike words, used when a listening question is built */
const CONFUSE={'수사':['수술','수업'],'정보원':['정원','공원'],'체포하다':['체육','포기하다'],'처형':['처음','형사'],'증거':['증상','거리'],'변장하다':['변하다','화장하다'],
 '단서':['단어','순서'],'시위':['시외','시합'],'감시하다':['감사하다','감기'],'폭발':['폭탄','출발'],'장례식':['결혼식','장래'],'테러':['테니스','텔레비전'],
 '폭탄':['폭발','폭포'],'암살':['암산','안심'],'저격':['저녁','자격'],'점령하다':['점심','정리하다']};

/* extra review questions (the terminal uses these too, alongside every NPC question) */
const BANK=[
 {w:'수사',ask:'형사들이 그 사건을 ___하고 있어요.',opts:[['수사',1],['수술',0,'수술은 병원에서 의사가 해요. 형사는 "수사".']]},
 {w:'정보원',ask:'그 남자는 경찰 ___이었어요. 갱의 비밀을 알려 줬어요.',opts:[['정보원',1],['정원',0,'정원은 꽃과 나무가 있는 곳이에요. 비밀을 주는 사람은 "정보원".']]},
 {w:'체포하다',ask:'경찰이 도둑을 ___.',opts:[['체포했어요',1],['체육했어요',0,'체육은 학교 운동 수업이에요. 범인을 잡으면 "체포했어요".']]},
 {w:'처형',ask:'옛날에는 왕이 반역자를 ___했어요.',opts:[['처형',1],['처음',0,'처음은 first예요. 벌로 죽이는 건 "처형".']]},
 {w:'증거',ask:'___가 없으면 범인을 체포할 수 없어요.',opts:[['증거',1],['증상',0,'증상은 아플 때 몸에 나타나는 거예요. 범인을 보여 주는 건 "증거".']]},
 {w:'변장하다',ask:'배우가 할머니로 ___. 아무도 몰랐어요.',opts:[['변장했어요',1],['변했어요',0,'변하다는 저절로 달라지는 거예요. 일부러 다른 사람처럼 보이면 "변장했어요".']]},
 {w:'단서',ask:'바닥의 발자국이 중요한 ___예요.',opts:[['단서',1],['단어',0,'단어는 사전에 있어요. 범인을 찾는 힌트는 "단서".']]},
 {w:'시위',ask:'학생들이 광장에서 ___를 했어요.',opts:[['시위',1],['시외',0,'시외는 도시 밖이에요. 거리에서 반대 목소리를 내는 건 "시위".']]},
 {w:'감시하다',ask:'카메라가 은행 문을 24시간 ___.',opts:[['감시해요',1],['감사해요',0,'감사하다는 고마워하는 거예요! 계속 지켜보는 건 "감시해요".']]},
 {w:'폭발',ask:'가스 ___ 때문에 건물이 무너졌어요.',opts:[['폭발',1],['출발',0,'출발은 떠나는 거예요. 發은 같아요! 터지는 건 "폭발".']]},
 {w:'장례식',ask:'할아버지가 돌아가셔서 ___에 갔어요.',opts:[['장례식',1],['결혼식',0,'결혼식은 기쁜 날이에요. 돌아가신 분과 인사하는 건 "장례식".']]},
 {w:'테러',ask:'공항에서 ___ 경고가 나왔어요. 모두 밖으로 나가요!',opts:[['테러',1],['텔레비전',0,'텔레비전은 보는 기계예요. 위험한 공격은 "테러".']]},
 {w:'폭탄',ask:'군인이 ___을 아주 조심해서 옮겨요.',opts:[['폭탄',1],['폭포',0,'폭포는 물이 떨어지는 곳이에요. 터지는 무기는 "폭탄".']]},
 {w:'암살',ask:'옛날 왕이 밤에 ___당했어요.',opts:[['암살',1],['암산',0,'암산은 머리로 하는 계산이에요! 몰래 죽이는 건 "암살".']]},
 {w:'저격',ask:'___수는 아주 멀리서 총을 쏴요.',opts:[['저격',1],['저녁',0,'저녁은 밤 전이에요! 멀리서 쏘는 건 "저격".']]},
 {w:'점령하다',ask:'적군이 그 성을 ___.',opts:[['점령했어요',1],['점심했어요',0,'점심은 낮에 먹는 밥이에요! 군대가 땅을 차지하면 "점령했어요".']]},
];

const Q={ // NPC questions, kept here so review can reuse them
 lucia:[
  {who:'…',w:'수사',ask:'경찰이 사건을 자세히 알아봐요. 그걸 ___라고 해요.',opts:[['수사',1],['수술',0,'수술은 병원에서 의사가 해요. 경찰은 "수사".'],['수업',0,'수업은 학교에서 들어요. 경찰이 사건을 알아보는 건 "수사".']]},
  {who:'…',w:'정보원',ask:'몰래 비밀을 모아서 아콘한테 주는 사람. ___이에요.',opts:[['정보원',1],['공원',0,'공원은 산책하는 곳이에요! 비밀을 모으는 사람은 "정보원".'],['선생님',0,'선생님은 가르쳐요. 몰래 비밀을 모으는 사람은 "정보원".']]},
 ],
 bopbe:[
  {w:'체포하다',ask:'경찰이 저를 왜 ___? 저는 아무것도 안 했어요.',opts:[['체포했어요',1],['포기했어요',0,'포기는 그만두는 거예요. 경찰이 잡아 가는 건 "체포했어요".'],['초대했어요',0,'초대는 파티에 부르는 거예요. 경찰이 잡는 건 "체포".']]},
  {who:'루치아',w:'체포하다',gram:1,ask:'어젯밤 총을 ___ 사람들도 곧 다 체포할 거예요.',opts:[['쐈던',1],['쏠',0,'어젯밤 일이에요. "쏠"은 앞으로의 일이에요. 지난 일은 "-았/었던" → "쐈던".']]},
 ],
 lab:[
  {w:'증거',ask:'이 나노 기계가 바로 ___예요. 누군가 봅베를 죽였어요.',opts:[['증거',1],['증상',0,'증상은 아플 때 몸에 나타나는 거예요. 범인을 보여 주는 건 "증거".'],['거리',0,'거리는 길이에요. 범인을 보여 주는 건 "증거".']]},
  {w:'처형',ask:'조직이 자기 사람을 벌로 죽였어요. 이건 ___이에요.',opts:[['처형',1],['처음',0,'처음은 first예요. 벌로 죽이는 건 "처형".'],['형사',0,'형사는 테렌스 같은 경찰이에요. 刑이 같아요! 벌로 죽이는 건 "처형".']]},
 ],
 zikar:[
  {w:'변장하다',ask:'형사님이 제 얼굴 가면을 쓰고 ___? 와, 진짜 저 같아요!',opts:[['변장했어요',1],['변했어요',0,'변하다는 저절로 달라지는 거예요. 일부러 다른 사람처럼 보이면 "변장했어요".'],['화장했어요',0,'화장은 얼굴을 예쁘게 하는 거예요. 다른 사람이 되면 "변장".']]},
  {who:'…',w:'변장하다',ask:'지금 지카르로 ___ 사람은 사실 테렌스예요.',opts:[['변장한',1],['변장할',0,'벌써 가면을 썼어요. "변장할"은 앞으로의 일이에요. → "변장한".']]},
 ],
 zikar2:[
  {who:'테렌스',w:'단서',ask:'토셰라는 이름이 첫 ___예요.',opts:[['단서',1],['단어',0,'단어는 사전에 있어요. 범인을 찾는 힌트는 "단서".'],['순서',0,'순서는 1, 2, 3이에요. 범인을 찾는 힌트는 "단서".']]},
  {who:'…',w:'단서',ask:'형사는 작은 ___를 모아서 범인을 찾아요.',opts:[['단서',1],['간식',0,'간식은 먹는 거예요! 범인을 찾는 힌트는 "단서".']]},
 ],
 vanilda:[
  {w:'시위',ask:'오늘 우리는 길에서 ___를 해요. 차가 못 지나가요.',opts:[['시위',1],['시외',0,'시외는 도시 밖이에요. 길에서 목소리를 내는 건 "시위".'],['시합',0,'시합은 경기예요. 반대 목소리를 내는 건 "시위".']]},
  {w:'시위',build:['시위가','곧','끝날','것 같아요'],alts:[['곧','시위가','끝날','것 같아요']]},
 ],
 bersche:[
  {w:'감시하다',ask:'저는 몇 주 동안 지카르를 몰래 ___.',opts:[['감시했어요',1],['감사했어요',0,'감사하다는 고마워하는 거예요! 몰래 지켜보는 건 "감시했어요".'],['구경했어요',0,'구경은 재미로 봐요. 몰래 계속 보는 건 "감시".']]},
  {who:'테렌스',w:'감시하다',ask:'메두사도 토셰를 ___ 것 같아요.',opts:[['감시하는',1],['감시한다',0,'"것 같아요" 앞에는 "-는"을 써요 → "감시하는 것 같아요".']]},
 ],
 maria:[
  {w:'폭발',ask:'캡슐에서 큰 ___이 있었어요. 빛이 번쩍했어요.',opts:[['폭발',1],['폭포',0,'폭포는 물이 떨어지는 곳이에요. 터지는 건 "폭발".'],['출발',0,'출발은 떠나는 거예요. 發은 같아요! 터지는 건 "폭발".']]},
  {who:'…',w:'폭발',ask:'___한 캡슐에 탔던 사람은 아무도 살지 못했어요.',opts:[['폭발',1],['폭탄',0,'폭탄은 물건이에요. "폭탄한"은 없어요. 터진 캡슐 → "폭발한".']]},
 ],
 jimena:[
  {who:'…',w:'장례식',ask:'죽은 사람에게 마지막 인사를 하는 날. ___이에요.',opts:[['장례식',1],['결혼식',0,'결혼식은 기쁜 날이에요. 式은 같지만 마지막 인사는 "장례식".'],['장래',0,'장래는 미래예요. 마지막 인사는 "장례식".']]},
  {who:'…',w:'장례식',gram:1,ask:'테렌스는 루치아와 같이 ___ 날들을 생각해요.',opts:[['일했던',1],['일하러',0,'"-러"는 목적이에요. "날들" 앞에는 꾸미는 말 → 지난 일은 "일했던".']]},
 ],
 zelinda:[
  {who:'…',w:'테러',ask:'사람들을 무섭게 하려고 일부러 공격해요. 그건 ___예요.',opts:[['테러',1],['테니스',0,'테니스는 운동이에요! 일부러 하는 공격은 "테러".'],['사고',0,'사고는 일부러 하지 않아요. 일부러 하면 "테러".']]},
  {who:'테렌스',gram:1,w:'테러',ask:'이 테러 뒤에 큰 조직이 ___.',opts:[['있는 것 같아요',1],['있는 것 같다요',0,'"같다요"는 없어요. "있는 것 같아요".']]},
 ],
 medusa:[
  {w:'폭탄',ask:'캡슐 안에 ___이 있었어요. 우리는 안 놨어요.',opts:[['폭탄',1],['폭발',0,'폭발은 터지는 일이에요. 터지는 물건은 "폭탄".'],['폭포',0,'폭포는 물이에요! 터지는 물건은 "폭탄".']]},
  {who:'테렌스 (생각)',gram:1,w:'폭탄',ask:'그날 그 여자가 토셰한테 폭탄을 ___ 것 같아요.',opts:[['준',1],['주다',0,'"주다 것 같아요"는 없어요. 지난 일 추측은 "-(으)ㄴ 것 같아요" → "준 것 같아요".']]},
 ],
 makaio:[
  {who:'…',w:'암살',ask:'중요한 사람을 몰래 죽이는 것. ___이에요.',opts:[['암살',1],['암산',0,'암산은 머리로 하는 계산이에요! 몰래 죽이는 건 "암살".'],['안심',0,'안심은 걱정이 없는 거예요. 몰래 죽이는 건 "암살".']]},
  {w:'암살',ask:'저를 ___하려는 사람이 있는 것 같아요.',opts:[['암살',1],['체육',0,'체육은 운동 수업이에요. 몰래 죽이려는 건 "암살".']]},
 ],
 spirit:[
  {who:'…',w:'저격',ask:'멀리 숨어서 총으로 한 사람을 쏴요. 그건 ___이에요.',opts:[['저격',1],['저녁',0,'저녁은 밤 전이에요! 멀리서 쏘는 건 "저격".'],['자격',0,'자격은 할 수 있는 권리예요. 멀리서 쏘는 건 "저격". 擊은 공격의 격!']]},
  {w:'저격',ask:'저를 ___ 사람은 토셰예요.',opts:[['저격했던',1],['저격하러',0,'"-러"는 목적이에요. "사람" 앞에는 꾸미는 말 → 지난 일은 "저격했던".']]},
 ],
 general:[
  {w:'점령하다',ask:'제국 군대가 곤디아를 ___. 이제 이 행성은 제 거예요.',opts:[['점령했어요',1],['정리했어요',0,'정리는 방을 깨끗하게 하는 거예요. 군대가 땅을 차지하면 "점령".'],['점심했어요',0,'점심은 낮에 먹는 밥이에요! 군대는 "점령했어요".']]},
  {who:'테렌스',w:'점령하다',ask:'저 군대는 도시를 오래 ___ 것 같아요.',opts:[['점령할',1],['점령하는다',0,'"-는다"는 "것 같아요" 앞에 안 와요. 앞으로의 추측은 "점령할 것 같아요".']]},
 ],
 cafe:[ // earlier chapters' words, no badges
  {ask:'어제 공원에서 작은 고양이를 ___.',opts:[['발견했어요',1],['발표했어요',0,'발표는 사람들 앞에서 말하는 거예요. 처음 찾았으면 "발견했어요".']]},
  {ask:'우주선에 ___가 없으면 출발할 수 없어요.',opts:[['연료',1],['연체료',0,'연체료는 책을 늦게 반납하면 내요! 엔진은 "연료".']]},
  {ask:'그 남자는 경찰한테 ___. 진실이 아니었어요.',opts:[['거짓말했어요',1],['거짓말됐어요',0,'"거짓말되다"는 없어요. "거짓말했어요".']]},
  {ask:'친구가 제 비밀을 다른 사람한테 말했어요. 저를 ___.',opts:[['배신했어요',1],['배웠어요',0,'배우다는 공부하는 거예요. 믿음을 깨면 "배신했어요".']]},
  {ask:'지진 때문에 오래된 건물이 ___.',opts:[['무너졌어요',1],['무거웠어요',0,'무겁다는 무게 이야기예요. 건물이 쓰러지면 "무너졌어요".']]},
  {ask:'연기가 너무 많아요. 이러다가 ___할 것 같아요.',opts:[['질식',1],['질문',0,'질문은 묻는 거예요. 숨을 못 쉬면 "질식".']]},
  {ask:'강아지가 밤새 멍멍 ___.',opts:[['짖었어요',1],['지었어요',0,'짓다는 집이나 밥을 만들 때예요. 강아지는 "짖었어요".']]},
  {ask:'시합에서 제 ___는 아주 강했어요.',opts:[['상대',1],['상태',0,'상태는 건강이나 기분이에요. 같이 싸우는 사람은 "상대".']]},
 ],
};

/* Invented details in REVIEW / CLASS (small, harmless, not in the book): the lab tech watches Dolod through a telescope, re-checks
   the drone blueprint, keeps the lab dust-free, works late after the bombing; Zikar fixed a High Rosa worker's spacesuit, has an andy
   to finish today; Bersche got only half his pay from Medusa; Vanilda went to Lućia's funeral and cried, her next protest will be
   bigger (only until the Liliana find); Aljan's med school has many stairs, a broken-down train made him late, he means to marry
   Laurella some day, Terence smiles less since the funeral; Maria José put new cameras in the interrogation room, has bomb checks at
   the tower capsules; it rained on the funeral day; the governor's office lights stay on at night; Medusa finds the helmet too tight;
   the dream bar's glasses don't break; the sea breeze smells of salt and the children have just fallen asleep; Haian packs the food.
   Everything else is canon or the chapter's own story: Lućia's team has an informant inside Eleven Toxix (c024); Zikar hid while
   Terence wore his face (c024: he left with the ATD squad); Maria José turns down Terence's help and wants his intel shared with the
   force (c026); the blast threw the capsule wreckage out into space, kilometres below High Rosa, seen on a georing feed, not from the
   ground (c026); Zelinda had Terence hand over his gang files (c026; the police use them, c027); the face match on the old footage
   (c027); after the crackdown Vanilda is arrested once, freed by Terence, and protests dwindle (c027); Medusa trades information to
   stay in the system (c027); Makaio had never been on Gondiar and found it pleasant (c027); the park's 10 m wall, Makaio shot on the
   balcony (c027; where Toše fired from is never said); the empress (not Wynid) sent the general because the archon was killed (c028);
   the general: the archon's murder has "only one punishment: death" (c028; no executions are shown, YouBusters are for the overflow
   of petty criminals, c032); the Jalgori-Tobus are thrown out of the Zetian Palace the morning the general arrives (c028); the
   marchioness and her husband were on the back terrace when the missile hit (c029); the marchioness blessed Finn on leaving (c016);
   Finn explored the Fridale islands with Otylia as a youth (c006); Otylia: "He'll be back soon. He will!" (c029; waiting at the Gate
   is decided only aboard the Polkadav, c030); Everett raged, Aljan sedated him (c030); Hafnir's station, then the train to Santa Rosa
   (c030; the maglev, c029; "the new arrow train", c016, 3장's 화살 열차); Toše planted the capsule bomb (c026, c027); the police seal
   on the club (c030); Stanvar8 all arrested (c029, c030). */
const REVIEW=[ // in-character review: people use a learned word again, in their own voice and moment (engine: linesFor/reviewPick)
 /* 루치아 (after Bopbe, until she goes up to High Rosa). Her script (reminders) always plays first while she's here, so these are
    never asked in the current flow; kept as the teacher's own lines */
 {w:'수사',by:'lucia',ask:'제 손은 괜찮아요. 봅베 사건 ___는 계속할 수 있어요.',opts:[['수사',1],['수술',0,'수술요? 하하, 그 정도는 아니에요. 사건을 알아보는 건 "수사".'],['수업',0,'수업은 학교에서 들어요. 경찰이 사건을 알아보는 건 "수사".']]},
 {w:'정보원',by:'lucia',ask:'일레븐 톡식스 안에도 우리 ___이 있어요.',opts:[['정보원',1],['정원',0,'정원은 꽃이 있는 곳이에요. 몰래 비밀을 알려 주는 사람은 "정보원".'],['공원',0,'공원은 산책하는 곳이에요! 몰래 비밀을 알려 주는 사람은 "정보원".']]},
 /* the lab tech (from the othervisor mask to the end; the Liliana footage plays first while it's due) */
 {w:'수사',by:'lab',ask:'감식은 ___의 시작이에요. 작은 것부터 봐요.',opts:[['수사',1],['수술',0,'수술은 병원에서 의사가 해요. 경찰이 사건을 알아보는 건 "수사".'],['수리',0,'수리는 기계를 고치는 거예요. 사건을 알아보는 건 "수사".']]},
 {w:'처형',by:'lab',ask:'나노 기계로 ___이라니. 그 조직은 정말 무서워요.',opts:[['처형',1],['처음',0,'처음은 first예요. 조직이 벌로 죽였으면 "처형".'],['치료',0,'치료는 아픈 사람을 낫게 하는 거예요. 벌로 죽이면 "처형".']]},
 {w:'증거',by:'lab',ask:'작은 ___ 하나가 사건을 바꿔요. 장갑 끼세요.',opts:[['증거',1],['증상',0,'증상은 아플 때 몸에 나타나는 거예요. 범인을 보여 주는 건 "증거".'],['거리',0,'거리는 길이에요. 범인을 보여 주는 건 "증거".']]},
 {w:'용암',by:'lab',ask:'봅베 몸 안은 ___처럼 뜨거웠을 거예요.',opts:[['용암',1],['얼음',0,'얼음은 차가워요! 화산에서 나오는 뜨거운 돌은 "용암".'],['용기',0,'용기는 무서워도 하는 마음이에요. 아주 뜨거운 건 "용암".']]},
 {w:'먼지',by:'lab',ask:'감식실에는 ___ 하나 없어야 돼요. 매일 닦아요.',opts:[['먼지',1],['먼저',0,'먼저는 순서예요. 아주 작고 가벼운 가루는 "먼지".']]},
 {w:'변장하다',by:'lab',when:()=>!!f().sting,ask:'그 가면 어땠어요? 지카르로 완벽하게 ___?',opts:[['변장했어요',1],['변했어요',0,'변하다는 저절로 달라지는 거예요. 일부러 남의 얼굴이 되면 "변장했어요".'],['화장했어요',0,'화장은 얼굴을 예쁘게 하는 거예요. 남의 얼굴이 되면 "변장했어요".']]},
 {w:'단서',by:'lab',when:()=>!f().helmet,ask:'드론 설계도에서 ___를 더 찾고 있어요.',opts:[['단서',1],['단어',0,'단어는 사전에 있어요. 범인을 찾는 힌트는 "단서".'],['순서',0,'순서는 1, 2, 3이에요. 범인을 찾는 힌트는 "단서".']]},
 {w:'폭발',by:'lab',when:()=>!f().liliana,ask:'캡슐 ___ 뒤로 우리 팀은 집에 못 가요.',opts:[['폭발',1],['출발',0,'출발은 떠나는 거예요. 터지는 건 "폭발".'],['폭포',0,'폭포는 물이 떨어지는 곳이에요. 터지는 건 "폭발".']]},
 {w:'발견하다',by:'lab',when:()=>!!f().liliana,ask:'얼굴 검색으로 옛날 영상에서 그 여자를 ___.',opts:[['발견했어요',1],['발표했어요',0,'발표는 사람들 앞에서 말하는 거예요. 처음 찾았으면 "발견했어요".']]},
 {w:'관측하다',by:'lab',when:()=>!!f().occupied,ask:'저는 밤마다 망원경으로 돌로드를 ___.',opts:[['관측해요',1],['정리해요',0,'정리는 방을 치우는 거예요. 망원경으로 별을 자세히 보면 "관측해요".']]},
 /* 지카르 (after the sting, until the occupation) */
 {w:'변장하다',by:'zikar',ask:'형사님이 저로 ___ 날, 저는 숨어 있었어요.',opts:[['변장한',1],['변한',0,'변하다는 저절로 달라지는 거예요. 일부러 제 얼굴을 쓰면 "변장한".'],['화장한',0,'화장은 얼굴을 예쁘게 하는 거예요. 제 얼굴이 되면 "변장한".']]},
 {w:'단서',by:'zikar',ask:'형사님, 저 말고 다른 ___를 찾아요. 제발요.',opts:[['단서',1],['단어',0,'단어는 사전에 있어요! 범인을 찾는 힌트는 "단서".'],['간식',0,'간식은 먹는 거예요! 범인을 찾는 힌트는 "단서".']]},
 {w:'우주복',by:'zikar',ask:'어제는 하이 로사 작업자 ___을 고쳤어요.',opts:[['우주복',1],['우주선',0,'우주선은 타는 거예요. 제가 고친 건 입는 거, "우주복".'],['우체국',0,'우체국은 편지를 보내는 곳이에요. 입는 건 "우주복".']]},
 {w:'수리하다',by:'zikar',ask:'이 안디는 오늘 안에 ___ 돼요. 바빠요.',opts:[['수리해야',1],['수업해야',0,'수업은 학교 이야기예요. 기계를 고치면 "수리해야".']]},
 /* 베르셰 in the interrogation room (after he talks, until Medusa is brought in) */
 {w:'감시하다',by:'bersche',ask:'이제는 경찰이 저를 ___. 웃기죠?',opts:[['감시해요',1],['감사해요',0,'감사는 고마운 거예요! 저를 계속 지켜보면 "감시해요".'],['구경해요',0,'구경은 재미로 보는 거예요. 계속 지켜보면 "감시해요".']]},
 {w:'계약',by:'bersche',ask:'메두사하고 ___한 돈, 아직 절반만 받았어요.',opts:[['계약',1],['계단',0,'계단은 걸어서 올라가는 거예요. 일하고 돈을 정한 약속은 "계약".'],['계절',0,'계절은 봄, 여름이에요. 일하고 돈을 정한 약속은 "계약".']]},
 {w:'공격하다',by:'bersche',ask:'지카르를 ___ 않았어요. 데려오라고만 했어요.',opts:[['공격하지',1],['공부하지',0,'공부는 학교에서 해요. 싸움을 걸고 때리면 "공격하지".']]},
 {w:'배신하다',by:'bersche',ask:'제 부하들이 저를 ___? 진짜 다 말했어요?',opts:[['배신했어요',1],['배달했어요',0,'배달은 음식을 가져다주는 거예요. 믿음을 깨면 "배신했어요".']]},
 /* the protesters (all three, until the road opens) */
 {w:'체포하다',by:'시위대',ask:'아저씨, 경찰이에요? 우리를 ___ 거예요?',opts:[['체포할',1],['초대할',0,'초대는 파티에 부르는 거예요. 경찰이 잡아 가면 "체포할".']]},
 {w:'위험',by:'시위대',ask:'걱정 마요. 앉아서 하는 시위는 ___하지 않아요.',opts:[['위험',1],['위성',0,'위성은 행성 주위를 도는 달이에요! 다칠 수 있으면 "위험".'],['위치',0,'위치는 있는 곳이에요. 다칠 수 있으면 "위험".']]},
 /* 바닐다 (after the protest, until the occupation) */
 {w:'시위',by:'vanilda',when:()=>!f().liliana,ask:'다음 ___에는 친구들이 더 많이 와요!',opts:[['시위',1],['시외',0,'시외는 도시 밖이에요. 거리에서 목소리를 내는 건 "시위".'],['시합',0,'시합은 경기예요. 우리가 하는 건 "시위".']]},
 {w:'경호원',by:'vanilda',pre:['아빠, 또 저 따라왔어요?'],ask:'아빠는 경찰이지 제 ___이 아니에요!',opts:[['경호원',1],['정보원',0,'정보원은 비밀을 모으는 사람이에요. 저를 옆에서 지키는 사람은 "경호원".'],['회원',0,'회원은 모임에 든 사람이에요. 저를 옆에서 지키는 사람은 "경호원".']]},
 {w:'정당',by:'vanilda',ask:'돈키는 ___이 아니에요. 사람들의 운동이에요.',opts:[['정당',1],['정원',0,'정원은 꽃밭이에요! 정치를 하는 모임은 "정당".'],['식당',0,'식당은 밥 먹는 곳이에요! 정치를 하는 모임은 "정당".']]},
 {w:'장례식',by:'vanilda',when:()=>!!f().liliana,ask:'루치아 언니 ___에 저도 갔어요. 많이 울었어요.',opts:[['장례식',1],['결혼식',0,'결혼식은 기쁜 날이에요. 마지막 인사를 하는 날은 "장례식".']]},
 /* 알잔 in the street (his own invitation first; until the occupation) */
 {w:'계단',by:'aljan',when:()=>!!f().protest&&!f().boom,ask:'의대 건물은 ___이 너무 많아요. 매일 운동해요!',opts:[['계단',1],['계산',0,'계산은 숫자 문제예요. 걸어서 올라가는 건 "계단".'],['계란',0,'계란은 먹는 거예요! 걸어서 올라가는 건 "계단".']]},
 {w:'고장 나다',by:'aljan',when:()=>!!f().protest&&!f().boom,ask:'아침에 기차가 ___ 수업에 늦었어요.',opts:[['고장 나서',1],['고생해서',0,'고생은 힘든 일을 겪는 거예요. 기계가 망가지면 "고장 나서".']]},
 {w:'결혼하다',by:'aljan',when:()=>!!f().protest&&!f().boom,ask:'저는 나중에 로렐라하고 ___ 거예요!',opts:[['결혼할',1],['결석할',0,'결석은 학교에 안 가는 거예요! 부부가 되면 "결혼할".']]},
 {w:'시위',by:'aljan',when:()=>!f().liliana,ask:'바닐다가 또 ___ 맨 앞에 섰어요. 엄마가 걱정해요.',opts:[['시위',1],['시외',0,'시외는 도시 밖이에요. 바닐다가 맨 앞에 서는 건 "시위".'],['시합',0,'시합은 경기예요. 거리에서 목소리를 내는 건 "시위".']]},
 {w:'장례식',by:'aljan',when:()=>!!f().liliana,ask:'루치아 누나 ___ 뒤로 아빠가 잘 안 웃어요.',opts:[['장례식',1],['결혼식',0,'결혼식 뒤에는 다 웃어요. 마지막 인사를 하는 날은 "장례식".'],['장래',0,'장래는 미래예요. 마지막 인사를 하는 날은 "장례식".']]},
 {w:'변하다',by:'aljan',when:()=>!!f().rider,ask:'아빠, 요즘 많이 ___. 가끔 혼자 말해요.',opts:[['변했어요',1],['편했어요',0,'편하다는 쉽고 좋은 거예요. 전하고 달라지면 "변했어요".'],['변장했어요',0,'변장은 일부러 다른 사람처럼 보이는 거예요. 저절로 달라지면 "변했어요".']]},
 /* 마리아 호세 서장 (after the bombing; her occupation script plays first after that) */
 {w:'폭발',by:'maria',ask:'___ 사건 서류가 많아요. 그래도 국장님 도움은 필요 없어요.',opts:[['폭발',1],['출발',0,'출발은 떠나는 거예요. 캡슐이 터진 건 "폭발".'],['폭포',0,'폭포는 물이 떨어지는 곳이에요. 터진 건 "폭발".']]},
 {w:'수사',by:'maria',ask:'이 테러 ___는 이제 제가 맡아요. 보고는 매일 해요.',opts:[['수사',1],['수술',0,'수술은 병원 일이에요. 경찰이 사건을 알아보는 건 "수사".'],['수리',0,'수리는 기계를 고치는 거예요. 사건을 알아보는 건 "수사".']]},
 {w:'증거',by:'maria',ask:'___ 없이는 아무도 못 잡아요. 그게 법이에요.',opts:[['증거',1],['증상',0,'증상은 병원에서 말하는 거예요. 범인을 보여 주는 건 "증거".']]},
 {w:'진공',by:'maria',ask:'캡슐 조각은 ___ 속으로 흩어졌어요. 찾기 어려워요.',opts:[['진공',1],['공기',0,'공기가 있으면 숨을 쉬죠. 공기가 하나도 없는 곳은 "진공".'],['진짜',0,'진짜는 real이에요. 공기가 없는 우주는 "진공".']]},
 {w:'추격하다',by:'maria',ask:'범인을 ___ 건 경찰 일이에요. 아콘 일이 아니에요.',opts:[['추격하는',1],['출근하는',0,'출근은 일하러 가는 거예요. 범인을 쫓아가면 "추격하는".']]},
 {w:'설치하다',by:'maria',ask:'취조실에 새 카메라를 ___. 이제 다 녹화가 돼요.',opts:[['설치했어요',1],['설명했어요',0,'설명은 말로 알려 주는 거예요. 기계를 달면 "설치했어요".'],['설거지했어요',0,'설거지는 그릇을 씻는 거예요! 기계를 달면 "설치했어요".']]},
 {w:'멸망하다',by:'maria',ask:'아콘들 게임이 계속되면 이 도시가 ___ 몰라요.',opts:[['멸망할지도',1],['말할지도',0,'말하다는 이야기하는 거예요. 도시가 완전히 없어지면 "멸망할지도".']]},
 {w:'체포하다',by:'maria',when:()=>!!f().medusa,ask:'메두사를 ___ 건 잘했어요. 다음엔 혼자 가지 마요.',opts:[['체포한',1],['초대한',0,'초대는 파티에 부르는 거예요. 수갑을 채웠으면 "체포한".'],['포기한',0,'포기는 그만두는 거예요. 경찰이 잡아 가면 "체포한".']]},
 {w:'폭탄',by:'maria',ask:'이제 탑 캡슐마다 ___ 검사를 해요.',opts:[['폭탄',1],['폭발',0,'폭발은 터지는 일이에요. 찾아야 하는 물건은 "폭탄".'],['폭포',0,'폭포는 물이에요! 터지는 물건은 "폭탄".']]},
 /* 히메나 in the square (after the memorial, until the occupation) */
 {w:'폭발',by:'jimena',ask:'그날 탑 위의 ___, 뉴스에서 봤어요. 하얀 구름이었어요.',opts:[['폭발',1],['폭포',0,'폭포는 물이 떨어지는 곳이에요. 하늘에서 터진 건 "폭발".'],['출발',0,'출발은 떠나는 거예요. 터진 건 "폭발".']]},
 {w:'희생',by:'jimena',ask:'루치아하고 아이들 스무 명도 ___됐어요.',opts:[['희생',1],['휴식',0,'휴식은 쉬는 거예요. 목숨을 잃었으면 "희생".'],['회의',0,'회의는 모여서 이야기하는 거예요. 목숨을 잃었으면 "희생".']]},
 {w:'장례식',by:'jimena',when:()=>!!f().liliana,ask:'루치아 ___ 날, 비가 많이 왔어요. 기억나요?',opts:[['장례식',1],['결혼식',0,'결혼식은 기쁜 날이에요. 마지막 인사를 하는 날은 "장례식".'],['장래',0,'장래는 미래예요. 마지막 인사를 하는 날은 "장례식".']]},
 /* 젤린다 in the square (after the crackdown, until the occupation) */
 {w:'테러',by:'zelinda',ask:'___ 뒤로 총독 사무실은 밤에도 불이 켜져 있어요.',opts:[['테러',1],['테니스',0,'테니스는 운동이에요! 사람들을 겁주는 공격은 "테러".'],['텔레비전',0,'텔레비전은 보는 기계예요. 일부러 한 공격은 "테러".']]},
 {w:'정보원',by:'zelinda',pre:['쉿, 작게 말해요.'],ask:'국장님 ___들이 모은 갱 파일, 잘 받았어요.',opts:[['정보원',1],['정원',0,'정원은 꽃밭이에요. 몰래 비밀을 모으는 사람은 "정보원".'],['공원',0,'공원은 산책하는 곳이에요. 몰래 비밀을 모으는 사람은 "정보원".']]},
 {w:'범인',by:'zelinda',ask:'총독님은 ___을 빨리 잡고 싶어 해요.',opts:[['범인',1],['범죄',0,'범죄는 나쁜 일이에요. 나쁜 일을 한 사람은 "범인".']]},
 /* 메두사 in the interrogation room (after the helmet, until the occupation) */
 {w:'체포하다',by:'medusa',ask:'형사님이 직접 저를 ___. 그날 정말 용감했어요.',opts:[['체포했어요',1],['초대했어요',0,'초대요? 하하, 파티는 아니었어요. 수갑을 채웠으면 "체포했어요".'],['포기했어요',0,'포기는 그만두는 거예요. 저를 잡아 왔으면 "체포했어요".']]},
 {w:'테러',by:'medusa',ask:'제가 ___를 했으면 벌써 곤디아를 떠났을 거예요.',opts:[['테러',1],['테니스',0,'테니스요? 하하. 사람들을 겁주는 공격은 "테러".'],['텔레비전',0,'텔레비전은 보는 거예요. 일부러 한 공격은 "테러".']]},
 {w:'폭탄',by:'medusa',ask:'제 머리카락이 무기였어요. ___은 필요 없었어요.',opts:[['폭탄',1],['폭발',0,'폭발은 터지는 일이에요. 터지는 물건은 "폭탄".'],['폭포',0,'폭포는 물이에요! 터지는 물건은 "폭탄".']]},
 {w:'질식하다',by:'medusa',ask:'이 헬멧 너무 꽉 껴요. ___ 것 같아요.',opts:[['질식할',1],['질문할',0,'질문은 묻는 거예요. 숨을 못 쉬면 "질식할".'],['실망할',0,'실망은 마음이 아픈 거예요. 숨을 못 쉬면 "질식할".']]},
 {w:'거짓말하다',by:'medusa',ask:'이 헬멧 앞에서는 ___ 수 없어요. 알잖아요.',opts:[['거짓말할',1],['걱정할',0,'걱정은 마음이 불안한 거예요. 사실이 아닌 말을 하면 "거짓말할".']]},
 {w:'교환하다',by:'medusa',ask:'제 정보하고 형사님 도움을 ___. 어때요?',opts:[['교환해요',1],['환영해요',0,'환영은 반갑게 맞는 거예요. 서로 주고받으면 "교환해요".']]},
 /* 마카이오 (라이더) in the dream bar (after 저격, to the end) */
 {w:'저격',by:'spirit',ask:'발코니에서는 ___ 조심해요. 저처럼 되지 말고요.',opts:[['저격',1],['저녁',0,'저녁은 밤 전이에요! 멀리 숨어서 쏘는 건 "저격".'],['자격',0,'자격은 할 수 있는 권리예요. 멀리 숨어서 쏘는 건 "저격".']]},
 {w:'암살',by:'spirit',ask:'저는 ___당했어요. 그래도 이야기는 계속해요.',opts:[['암살',1],['암산',0,'암산은 머리로 하는 계산이에요! 몰래 죽이는 건 "암살".'],['안심',0,'안심은 걱정이 없는 거예요. 몰래 죽이는 건 "암살".']]},
 {w:'정보원',by:'spirit',ask:'테렌스, 당신은 제 제일 좋은 ___이었어요.',opts:[['정보원',1],['정원',0,'정원은 꽃밭이에요. 비밀을 모아 준 사람은 "정보원".'],['경호원',0,'경호원은 가까이에서 지키는 사람이에요. 비밀을 모아 준 사람은 "정보원".']]},
 {w:'단서',by:'spirit',ask:'제 기억 속에도 ___가 있을 거예요. 같이 찾아요.',opts:[['단서',1],['단어',0,'단어는 사전에 있어요. 범인을 찾는 작은 힌트는 "단서".'],['순서',0,'순서는 1, 2, 3이에요. 범인을 찾는 작은 힌트는 "단서".']]},
 {w:'폭탄',by:'spirit',ask:'캡슐에 ___을 놓은 사람도 토셰일 거예요.',opts:[['폭탄',1],['폭발',0,'폭발은 터지는 일이에요. 놓을 수 있는 물건은 "폭탄".'],['폭포',0,'폭포는 물이 떨어지는 곳이에요. 터지는 물건은 "폭탄".']]},
 {w:'점령하다',by:'spirit',ask:'와이니드가 아니라 여제가 곤디아를 ___.',opts:[['점령했어요',1],['정리했어요',0,'정리는 방을 치우는 거예요. 군대로 땅을 차지하면 "점령했어요".'],['점심했어요',0,'점심은 낮에 먹는 밥이에요! 군대로 차지하면 "점령했어요".']]},
 {w:'담',by:'spirit',ask:'저택의 ___은 십 미터나 돼요. 그래도 저는 발코니에서 죽었어요.',opts:[['담',1],['땀',0,'땀은 더울 때 나요. 저택을 둘러싼 벽은 "담".'],['담요',0,'담요는 덮는 거예요. 저택을 둘러싼 벽은 "담".']]},
 {w:'죽이다',by:'spirit',ask:'토셰가 저를 ___. 그래도 저는 아직 여기 있어요.',opts:[['죽였어요',1],['죽었어요',0,'"죽다"는 제가 한 거예요. 토셰가 한 일은 "죽였어요".'],['주웠어요',0,'줍다는 바닥의 물건을 드는 거예요. 토셰가 한 일은 "죽였어요".']]},
 {w:'위험',by:'spirit',ask:'토셰는 아주 ___한 사람이에요. 혼자 쫓지 마요.',opts:[['위험',1],['위생',0,'위생은 깨끗하게 하는 거예요. 다칠 수 있으면 "위험".'],['유명',0,'유명하다는 모두 아는 거예요. 다칠 수 있으면 "위험".']]},
 {w:'행성',by:'spirit',ask:'곤디아는 생각보다 아름다운 ___이었어요.',opts:[['행성',1],['행사',0,'행사는 축제나 파티예요. 별 주위를 도는 큰 공은 "행성".'],['행복',0,'행복은 기쁜 마음이에요. 별 주위를 도는 큰 공은 "행성".']]},
 {w:'구르다',by:'spirit',ask:'꿈에서는 잔이 바닥에 ___ 안 깨져요. 재밌죠?',opts:[['굴러도',1],['그려도',0,'그리다는 그림이에요. 잔이 빙글빙글 바닥을 가면 "굴러도".'],['구워도',0,'굽다는 고기를 익히는 거예요. 잔이 빙글빙글 가면 "굴러도".']]},
 {w:'시체',by:'spirit',when:()=>!!f().done,ask:'그 ___는 수십 년 동안 바닥 밑에 있었어요.',opts:[['시체',1],['시청',0,'시청은 시장님이 일하는 곳이에요. 죽은 사람의 몸은 "시체".'],['시합',0,'시합은 경기예요. 죽은 사람의 몸은 "시체".']]},
 /* 아보네발레리오 장군 in the square (after 점령하다, to the end) */
 {w:'점령하다',by:'general',ask:'이 행성을 ___ 건 쉬웠어요. 인간은 약해요.',opts:[['점령한',1],['정리한',0,'정리는 방을 치우는 거예요. 군대로 땅을 차지하면 "점령한".']]},
 {w:'체포하다',by:'general',ask:'반란자들을 벌써 많이 ___. 다음은 누구일까요?',opts:[['체포했어요',1],['초대했어요',0,'초대? 하하. 저는 손님을 안 불러요. 잡아 가면 "체포했어요".']]},
 {w:'감시하다',by:'general',ask:'제 고스트들이 모든 거리를 ___. 숨을 곳은 없어요.',opts:[['감시해요',1],['감사해요',0,'감사? 저는 고마운 게 없어요. 계속 지켜보면 "감시해요".'],['구경해요',0,'구경은 재미로 보는 거예요. 제 고스트들은 일해요. 계속 지켜보면 "감시해요".']]},
 {w:'시위',by:'general',ask:'이 도시에 ___는 이제 없어요. 다 끝났어요.',opts:[['시위',1],['시외',0,'시외는 도시 밖이에요. 거리에 모여 떠드는 건 "시위".'],['시계',0,'시계는 시간을 보는 거예요. 거리에 모여 떠드는 건 "시위".']]},
 {w:'암살',by:'general',ask:'와이니드 아콘이 여기서 ___당했어요. 그래서 제가 왔어요.',opts:[['암살',1],['암산',0,'암산은 머리로 하는 계산이에요. 몰래 죽이면 "암살".'],['안심',0,'안심? 여기서는 아무도 안심 못 해요. 몰래 죽이면 "암살".']]},
 {w:'물리다',by:'general',ask:'제 사자한테 ___ 싫으면 저리 가요.',opts:[['물리기',1],['물기',0,'"물다"는 사자가 하는 거예요. 당신은 "물리기".']]},
 {w:'도착하다',by:'general',ask:'제 항모가 하이 로사에 ___ 날, 다 끝났어요.',opts:[['도착한',1],['출발한',0,'출발은 떠나는 거예요. 와서 닿으면 "도착한".'],['도전한',0,'도전은 어려운 일을 해 보는 거예요. 와서 닿으면 "도착한".']]},
 {w:'처형',by:'general',ask:'아콘을 죽이면 벌은 하나뿐이에요. ___이에요.',opts:[['처형',1],['체포',0,'체포는 매일 해요. 벌로 죽이는 건 "처형".'],['처음',0,'처음은 first예요. 작은 경찰, 공부 좀 해요. 벌로 죽이는 건 "처형".']]},
 /* the villa at Hafnir after the missile: 오틸리아 (after she tells it), 젤린다, 하이안, 알잔 */
 {w:'저격',by:'otylia',ask:'그 ___ 때문에 미사일이 왔어요.',opts:[['저격',1],['저녁',0,'저녁은 밥 먹는 때예요. 멀리서 숨어 쏜 총은 "저격".'],['자격',0,'자격은 할 수 있는 권리예요. 멀리서 숨어 쏜 총은 "저격".']]},
 {w:'잔해',by:'otylia',ask:'우리 집은 이제 ___만 남았어요.',opts:[['잔해',1],['잔치',0,'잔치는 즐거운 파티예요. 부서지고 남은 조각은 "잔해".']]},
 {w:'세월',by:'otylia',ask:'___이 많이 흘렀어요. 핀은 아직 젊을 거예요.',opts:[['세월',1],['세상',0,'세상은 world예요. 흘러간 긴 시간은 "세월".'],['세탁',0,'세탁은 빨래예요. 흘러간 긴 시간은 "세월".']]},
 {w:'선장',by:'otylia',ask:'성실호에는 드장 ___님이 있어요. 핀은 괜찮을 거예요.',opts:[['선장',1],['사장',0,'사장님은 회사에 있어요. 배에서 제일 높은 사람은 "선장".'],['시장',0,'시장님은 도시를 맡아요. 배에서 제일 높은 사람은 "선장".']]},
 {w:'탐험',by:'otylia',ask:'핀은 어릴 때부터 ___을 좋아했어요. 여기저기 다 가 봤어요.',opts:[['탐험',1],['시험',0,'시험은 학교에서 봐요. 모르는 곳에 가 보는 건 "탐험".']]},
 {w:'출발하다',by:'otylia',ask:'폴카다브호는 곧 하이 로사에서 ___. 핀은 곧 돌아올 거예요. 꼭이요!',opts:[['출발해요',1],['도착해요',0,'도착은 와서 닿는 거예요. 하이 로사를 떠나면 "출발해요".']]},
 {w:'무너지다',by:'zelindaS',ask:'오틸리아 집이 다 ___. 엄마 아빠는 집 뒤쪽에 있었어요.',opts:[['무너졌어요',1],['무서웠어요',0,'무섭다는 겁이 나는 거예요. 집이 쓰러져 부서지면 "무너졌어요".'],['무거웠어요',0,'무겁다는 무게 이야기예요. 집이 쓰러져 부서지면 "무너졌어요".']]},
 {w:'조카',by:'zelindaS',ask:'로렐라하고 두샨은 제 ___예요. 제가 지켜야 돼요.',opts:[['조카',1],['삼촌',0,'삼촌은 아빠의 남자 형제예요. 동생의 아이는 "조카".'],['조수',0,'조수는 일을 돕는 사람이에요. 동생의 아이는 "조카".']]},
 {w:'축복',by:'zelindaS',ask:'엄마는 떠나는 핀을 ___해 줬어요. 사랑한다고요.',opts:[['축복',1],['축구',0,'축구는 공 차는 운동이에요. 좋은 일을 비는 마음은 "축복".'],['축제',0,'축제는 큰 잔치예요. 좋은 일을 비는 마음은 "축복".']]},
 {w:'암살',by:'zelindaS',ask:'아콘 ___ 뒤로 모든 게 나빠졌어요.',opts:[['암살',1],['암산',0,'암산은 머리로 하는 계산이에요. 몰래 죽이면 "암살".'],['안심',0,'안심은 걱정이 없는 거예요. 지금은 아니에요. 몰래 죽이면 "암살".']]},
 {w:'점령하다',by:'zelindaS',ask:'군대가 도시를 ___ 날, 우리는 궁전에서 쫓겨났어요.',opts:[['점령한',1],['정리한',0,'정리는 방을 치우는 거예요. 군대가 땅을 차지하면 "점령한".']]},
 {w:'화산',by:'haian',ask:'처남이 ___처럼 화를 냈어요. 그래서 알잔이 약을 줬어요.',opts:[['화산',1],['화분',0,'화분은 꽃을 심는 거예요. 불이 터지는 산은 "화산".'],['화살',0,'화살은 활로 쏘는 거예요. 불이 터지는 산은 "화산".']]},
 {w:'파도',by:'haian',ask:'오늘 밤은 ___도 조용해요. 아이들이 이제 잠들었어요.',opts:[['파도',1],['포도',0,'포도는 과일이에요. 바다에서 밀려오는 물결은 "파도".'],['파티',0,'파티는 즐거운 모임이에요. 바다의 물결은 "파도".']]},
 {w:'소금',by:'haian',ask:'바닷바람에서 짠 ___ 냄새가 나요.',opts:[['소금',1],['소리',0,'소리는 귀로 듣는 거예요. 짠 바다 냄새는 "소금".'],['소문',0,'소문은 사람들이 하는 말이에요. 짠 건 "소금".']]},
 {w:'식량',by:'haian',when:()=>!!f().rescued,ask:'폴카다브호에 실을 ___은 제가 가져갈게요.',opts:[['식량',1],['식당',0,'식당은 밥 먹는 곳이에요. 오래 먹을 음식은 "식량".']]},
 {w:'기차역',by:'haian',when:()=>!!f().rescued,ask:'하프니르 ___에서 화살 열차를 타요.',opts:[['기차역',1],['공항',0,'공항은 비행기를 타는 곳이에요. 열차를 타는 곳은 "기차역".']]},
 {w:'산소',by:'aljanS',ask:'연기를 많이 마신 사람은 ___가 필요해요.',opts:[['산소',1],['상자',0,'상자는 물건을 넣는 거예요. 숨 쉴 때 필요한 건 "산소".']]},
 {w:'얼음',by:'aljanS',ask:'화상에는 ___ 말고 시원한 물을 써요.',opts:[['얼음',1],['얼굴',0,'얼굴은 눈, 코, 입이 있는 곳이에요. 차갑고 딱딱한 물은 "얼음".'],['어른',0,'어른은 다 큰 사람이에요. 차갑고 딱딱한 물은 "얼음".']]},
 {w:'약물',by:'aljanS',ask:'에버렛 아저씨한테 제가 ___을 줬어요. 이제 좀 조용해요.',opts:[['약물',1],['약국',0,'약국은 약을 사는 곳이에요. 제가 준 건 "약물".'],['약속',0,'약속은 꼭 하겠다는 말이에요. 제가 준 건 "약물".']]},
 {w:'우주선',by:'aljanS',when:()=>!!f().club,ask:'폴카다브호는 작은 ___이에요. 그래도 다 탈 수 있어요.',opts:[['우주선',1],['우주복',0,'우주복은 입는 옷이에요. 타는 건 "우주선".'],['우체국',0,'우체국은 편지를 보내는 곳이에요. 우주를 나는 배는 "우주선".']]},
 {w:'약속하다',by:'aljanS',when:()=>!!f().club,ask:'아빠, ___. 꼭 다시 만나요.',opts:[['약속해요',1],['약혼해요',0,'약혼하다는 결혼하기로 약속하는 거예요! 아빠하고는 그냥 "약속해요".'],['예약해요',0,'예약은 자리를 미리 잡는 거예요. 꼭 하겠다고 말하면 "약속해요".']]},
 /* 히메나 in the club basement (after the DNA result) */
 {w:'증거',by:'jimenaC',when:()=>!!f().done,ask:'이 뼈가 ___예요. 잘 숨겨야 돼요.',opts:[['증거',1],['증상',0,'증상은 아플 때 몸에 나타나는 거예요. 사실을 보여 주는 건 "증거".'],['거리',0,'거리는 길이에요. 사실을 보여 주는 건 "증거".']]},
 {w:'발견하다',by:'jimenaC',when:()=>!!f().done,ask:'기보이의 뼈를 ___ 사람은 우리뿐이에요. 조심해요.',opts:[['발견한',1],['발표한',0,'발표는 사람들 앞에서 말하는 거예요. 처음 찾았으면 "발견한".']]},
 {w:'파다',by:'jimenaC',when:()=>!!f().done,ask:'우리 셋이 손으로 돌을 ___. 손이 다 아파요.',opts:[['팠어요',1],['팔았어요',0,'팔다는 돈을 받고 주는 거예요. 구멍을 만들면 "팠어요".']]},
 {w:'침입하다',by:'jimenaC',when:()=>!!f().done,ask:'경찰 봉인이 그대로였어요. 아무도 ___ 않았어요.',opts:[['침입하지',1],['입학하지',0,'입학은 학교에 들어가는 거예요. 몰래 들어오면 "침입하지".']]},
 {w:'발자국',by:'jimenaC',when:()=>!!f().done,ask:'먼지 위에 ___ 남기지 마요. 다 증거예요.',opts:[['발자국',1],['발가락',0,'발가락은 발끝에 있어요. 걸은 뒤 남는 건 "발자국".'],['발표',0,'발표는 사람들 앞에서 말하는 거예요. 걸은 뒤 남는 건 "발자국".']]},
 {w:'전멸',by:'jimenaC',when:()=>!!f().done,ask:'스탄바8 갱은 ___했어요. 한 명도 안 남고 잡혀갔어요.',opts:[['전멸',1],['전화',0,'전화는 거는 거예요. 한 명도 안 남으면 "전멸".']]},
];
/* class time: the two years between Makaio's death and the occupation (the rider's talk, just before "그리고 2년이 지났어요") */
const CLASS={
 '경찰서':{say:'그 뒤로, 낮에는 경찰서. 마리아 호세 서장은 아콘 이야기를 싫어해요.',lines:[
  {w:'감시하다',who:'마리아 호세 서장',ask:'이제 우리 경찰이 갱들을 직접 ___ 있어요. 아콘은 필요 없어요.',opts:[['감시하고',1],['감사하고',0,'감사요? 아니에요. 계속 지켜보면 "감시하고".'],['구경하고',0,'구경은 재미로 보는 거예요. 계속 지켜보면 "감시하고".']]},
  {w:'테러',who:'마리아 호세 서장',ask:'캡슐 ___ 수사는 아직 안 끝났어요.',opts:[['테러',1],['테니스',0,'테니스는 운동이에요! 사람들을 겁주는 공격은 "테러".'],['텔레비전',0,'텔레비전은 보는 기계예요. 일부러 한 공격은 "테러".']]},
  {w:'증거',who:'마리아 호세 서장',ask:'국장님이 가진 ___, 이제 우리 경찰하고 나눠요.',opts:[['증거',1],['증상',0,'증상은 아플 때 나타나는 거예요. 사실을 보여 주는 건 "증거".']]},
  {w:'수사',who:'감식 요원',ask:'국장님, 오늘도 ___ 서류가 책상에 가득해요.',opts:[['수사',1],['수술',0,'수술은 병원 일이에요. 경찰이 사건을 알아보는 건 "수사".'],['수리',0,'수리는 기계를 고치는 거예요. 사건을 알아보는 건 "수사".']]}]},
 '집':{say:'저녁에는 집. 알잔은 의사가 되고, 바닐다는 이제 시위에 잘 안 가요.',lines:[
  {w:'시위',who:'바닐다',ask:'요즘은 ___가 거의 없어요. 친구들이 많이 잡혀갔어요.',opts:[['시위',1],['시외',0,'시외는 도시 밖이에요. 우리가 거리에서 하는 건 "시위".'],['시합',0,'시합은 경기예요. 우리가 거리에서 하는 건 "시위".']]},
  {w:'체포하다',who:'바닐다',ask:'그때 경찰이 저를 ___. 아빠가 경찰서에서 데리고 나왔죠.',opts:[['체포했어요',1],['초대했어요',0,'초대는 파티에 부르는 거예요. 경찰이 잡아 가면 "체포했어요".']]},
  {w:'장례식',who:'히메나',ask:'루치아 ___ 뒤로 벌써 일 년이 넘었어요.',opts:[['장례식',1],['결혼식',0,'결혼식은 기쁜 날이에요. 마지막 인사를 한 날은 "장례식".'],['장래',0,'장래는 미래예요. 마지막 인사를 한 날은 "장례식".']]}]},
};

const ITEMS={'오더바이저 가면':'쓰면 지카르 타소트의 얼굴이 돼요.','표적 드론 설계도':'지카르가 토셰를 위해 만든 드론. 첫 단서.',
 '캡슐 역 영상':'"앙투아네트-2버그"가 찍힌 영상. 진짜 이름은 릴리아나.','뼈 샘플':'다크 파라다이스 지하에서 찾은 뼈. DNA: 기보이 엔포.'};

const f=()=>state.f;
const hasItem=i=>state.items.includes(i);
const b=w=>state.badges.includes(w);
const vary=(x,y,a)=>a[(x*7+y*13)%a.length]; // things: same position pick as the engine, for lines that depend on flags

/* ---------- pixel-art sprites (rows: '.' = clear; outline O) ---------- */
const OL='#1B1E2B';
const MAK_PAL={O:OL,r:'#8E2430',R:'#B8404A',d:'#5E1520',S:'#D9B38A',s:'#B98F68',E:'#F2C230',e:'#FFF1A0',M:'#8A5A40',
 B:'#2E6E9E',b:'#1F4F75',L:'#4C93C4',W:'#F1E2B0',w:'#D4B860'};
const MAK_DOWN=[
 '..r..........r..',
 '..rr.r....r.rr..',
 '...rrr....rrr...',
 '....rOOOOOOr....',
 '...OOSSSSSSOO...',
 '..rOSSSSSSSSOr..',
 '.rRrSEeSSEeSrRr.',
 '.rdrSEESSEESrdr.',
 '..rOSSSSSSSSOr..',
 '...OSSsMMsSSO...',
 '....OSSSSSSO....',
 '...OWBBBBBBWO...',
 '..OBWBBBBBBWBO..',
 '.OBBWBLBBLBWBBO.',
 '.OBBWBBBBBBWBBO.',
 '.OSBWBBBBBBWBSO.',
 '.OOBWBBBBBBWBOO.',
 '..OBWBBBBBBWBO..',
 '..OBWwBBBBwWBO..',
 '..OBBWBBBBWBBO..',
 '..OBBBWBBWBBBO..',
 '..OBLBBWWBBLBO..',
 '..OBBBBBBBBBBO..',
 '..ObbbbbbbbbbO..',
 '..OOOOOOOOOOOO..'];
const MAK_UP=MAK_DOWN.map((row,i)=>i>=4&&i<=10?row.replace(/[EeMs]/g,'S'):row);
const MAK_LEFT=[
 '...........r.r..',
 '..........rr.r..',
 '.......OOOrrr...',
 '......OSSSSOr...',
 '.....OSSSSSSO...',
 '....OSSSSSSSSO..',
 '....OEeSSSrRrO..',
 '....OEESSSrdrO..',
 '....OSSSSSSrO...',
 '....OMSSSSSSO...',
 '.....OSSSSSO....',
 '.....OBWBBBBO...',
 '....OBBWBBBBBO..',
 '....OBBWBBLBBO..',
 '....OSBWBBBBBO..',
 '....OOBWBBBBBO..',
 '....OBBWBBBBBO..',
 '....OBBWBBBBBO..',
 '....OBBwBBBBBO..',
 '....OBBBBBBBBO..',
 '....OBBBBBBBBO..',
 '...OBLBBBBBBLO..',
 '...OBBBBBBBBBBO.',
 '...ObbbbbbbbbbO.',
 '...OOOOOOOOOOOO.'];
const MAKAIO={art:{pal:MAK_PAL,down:MAK_DOWN,up:MAK_UP,left:MAK_LEFT}};
const MAKAIO_DEAD={art:{pal:{...MAK_PAL,g:'#9A9AA6',k:'#3A3036',p:'#7A1A22'},down:[
 '.g..g...........',
 'g.gg.g..........',
 '.ggkg...........',
 '..kkk.r.........',
 'OkkkkOOOOOOOOOO.',
 'OkkWBBBBBLBBBBBO',
 'OkkWBBLBBBBBBbbO',
 'pOOWBBBBBBBBBbbO',
 'ppOOOOOOOOOOOOO.',
 '.ppp............']}};
const SPIRIT={art:{pal:{...MAK_PAL,B:'#5A6AB8',b:'#454F8E',L:'#8E9CE0',S:'#C9C4E0',s:'#A8A2C8',W:'#E8E4F8',w:'#B8B0E0',r:'#7A5A9A',R:'#9E7CC0',d:'#5A4078'},down:MAK_DOWN,up:MAK_UP,left:MAK_LEFT}};

const GHOST={art:{pal:{O:OL,a:'#8C93A6',b:'#5D6478',c:'#B8C0D2',g:'#5FD0FF',G:'#BFF1FF'},down:[
 '....OOOOOOOO....',
 '...OccggggccO...',
 '..OOaaaaaaaaOO..',
 '.OGOaaccccaaOGO.',
 '.OGOabbbbbbaOGO.',
 'OGGOaaaaaaaaOGGO',
 'OGOaOaabbaaOaOGO',
 '.O.aOaaaaaaOa.O.',
 '..OaOabbbbaOaO..',
 '..OcO.OaaO.OcO..',
 '..OcO.OaaO.OcO..',
 '.OcO..OaaO..OcO.',
 '.OO...ObbO...OO.',
 '......OaaO......',
 '.....OaOOaO.....',
 '.....OaO.OaO....',
 '....OaO...OaO...',
 '....OaO...OaO...',
 '....ObO...ObO...',
 '...OaO.....OaO..',
 '...OaO.....OaO..',
 '...ObO.....ObO..',
 '...OaO.....OaO..',
 '...OaO.....OaO..',
 '..OcaO.....OacO.',
 '..OaaO.....OaaO.',
 '.OaOaO....OaOaO.',
 '.OOOOO....OOOOO.']}};

/* armour of tiny silver spheres: '*' becomes a dotted pattern */
const dots=rows=>rows.map((row,y)=>row.replace(/\*/g,(m,x)=>'abc'[(x+2*y)%3]));
const GEN_DOWN=dots([
 '......OOOO......',
 '.....OSSSSO.....',
 '.....OwSSwO.....',
 '.....OESSEO.....',
 '.....OSwwSO.....',
 '.....OSSSSO.....',
 '......OSSO......',
 '...OOO****OOO...',
 '..O**********O..',
 '.O************O.',
 '.O************O.',
 '.O**O******O**O.',
 '.O**O******O**O.',
 '.O**O******O**O.',
 '.O**O******O**O.',
 '.O**O******O**O.',
 '.OSSO******OSSO.',
 '..OO.O****O.OO..',
 '....O******O....',
 '....O**OO**O....',
 '....O**OO**O....',
 '....O**OO**O....',
 '....O**OO**O....',
 '....O**OO**O....',
 '....O**OO**O....',
 '....O**OO**O....',
 '....O**OO**O....',
 '...O***OO***O...',
 '...O***OO***O...',
 '...OOOOOOOOOO...']);
const GENERAL={art:{pal:{O:OL,S:'#E8DCD0',w:'#5A4A6A',E:'#2A2A38',a:'#9AA2B2',b:'#646C7E',c:'#D2D8E2'},down:GEN_DOWN,up:GEN_DOWN.map((r,i)=>i>=1&&i<=5?r.replace(/[wE]/g,'S'):r)}};

const LION={art:{pal:{O:OL,m:'#8A4A1E',M:'#B8682A',f:'#E8B860',F:'#D09A40',E:'#2A1E14',N:'#5A3A2A'},down:[
 '...OOOOOOOOOO...',
 '..OmMmMmMmMmMO..',
 '.OMmMOOOOOOmMmO.',
 '.OmMOffffffOMmO.',
 'OMmOfEffffEfOmMO',
 'OmMOffffffffOMmO',
 'OMmOfffNNfffOmMO',
 '.OmMOffNNffOMmO.',
 '.OMmOOffffOOmMO.',
 '..OmMmOOOOmMmO..',
 '..OFFOmMmMOFFO..',
 '.OFFFFOOOOFFFFO.',
 '.OFFFFFFFFFFFFO.',
 '.OFfFFFFFFFFfFO.',
 '.OFfOFFOOFFOfFO.',
 '.OOOOOOOOOOOOOO.']}};

const TOSE={art:{pal:{O:OL,H:'#2A2420',h:'#1E1A18',S:'#C8A080',M:'#9A7258',Y:'#C8E04A',K:'#2A2A33',p:'#1B1E2B',C:'#3A3A40',c:'#2E2E34',R:'#8A6A5A',r:'#6E5244',b:'#55555E',P:'#2E2E36'},down:[
 '................',
 '.....OOOOOO.....',
 '....OHHHHHHO....',
 '...OHHhHHhHHO...',
 '...OHSSSSSOOO...',
 '...OSSEOOYYYO...',
 '...OSSSOYYpYYO..',
 '....OSSMOYYYO...',
 '...OOCCCCOOOO...',
 '..ORCCCCCCCCRO..',
 '..OrCcCCCCcCrO..',
 '..OROObbbbOORO..',
 '...OPPPPPPPPO...',
 '...OPPPOOPPPO...',
 '...OPPO..OPPO...',
 '...OKKO..OKKO...'].map(r=>r.replace('E','O'))}};

const MONITOR={art:{pal:{O:OL,c:'#3E4658',B:'#1E3A52',g:'#69CFD8',r:'#E0404A',k:'#2B3238'},down:[
 '................','................','..OOOOOOOOOOOO..','..OccccccccccO..','..OcBBBBBBBBcO..','..OcBggBBBBBcO..','..OcBBBgggBBcO..','..OcBBBBBBrBcO..','..OccccccccccO..','..OOOOOOOOOOOO..','.......OO.......','......OkkO......','....OOOOOOOO....','....OkkkkkkO....','....OOOOOOOO....','................']}};
const NEWS={art:{pal:{O:OL,c:'#5D667A',B:'#2A6AA8',w:'#DCEBFA',r:'#E0404A',p:'#6E7680',P:'#8A93A0'},down:[
 '..OOOOOOOOOOOO..',
 '.OccccccccccccO.',
 '.OcBBBBBBBBBBcO.',
 '.OcBwwwwBBBrBcO.',
 '.OcBBBBBBBBBBcO.',
 '.OcBwwwwwwwBBcO.',
 '.OcBBBBBBBBBBcO.',
 '.OcBwwwBBwwwBcO.',
 '.OcBBBBBBBBBBcO.',
 '.OccccccccccccO.',
 '..OOOOOOOOOOOO..',
 '.......OO.......',
 '......OPpO......',
 '......OPpO......',
 '......OPpO......',
 '......OPpO......',
 '......OPpO......',
 '.....OPPppO.....',
 '....OPPPpppO....',
 '....OOOOOOOO....']}};

const PATCH={art:{pal:{O:'#3A3442',P:'#5E5868',p:'#4E4858',q:'#6E6878'},down:[
 '................',
 '................',
 '................',
 '....pppppppp....',
 '..ppPPPPPPPPpp..',
 '.pPPPqPPPPPPPPp.',
 '.pPPPPPPPqPPPPp.',
 'pPPqPPPPPPPPPPPp',
 'pPPPPPPPPPPqPPPp',
 'pPPPPPqPPPPPPPPp',
 '.pPPPPPPPPPPqPp.',
 '.pPPqPPPPPPPPPp.',
 '..ppPPPPPPqPpp..',
 '...pppPPPPppp...',
 '.....pppppp.....',
 '................']}};
const BONES={art:{pal:{h:'#16121A',H:'#2A2430',w:'#E8E0C8',W:'#B8AE96',v:'#6A3A8A',g:'#E8C860',k:'#8A2A2A'},down:[
 '................',
 '................',
 '................',
 '....HHHHHHHH....',
 '..HHhhhhhhhhHH..',
 '.HhhhwwhhhhhhhH.',
 '.HhhwWWwhhhhhhH.',
 'HhhhwwwhhhhvvhhH',
 'HhhhhwwwwwwvvwhH',
 'HhhhhwWkWwWwwhhH',
 '.HhhhwwwwwwhhwgH',
 '.HhhhhhwhwhhhhH.',
 '..HHhhwhhhwhhH..',
 '...HHHhhhhHHH...',
 '.....HHHHHH.....',
 '................']}};

const FIRE=[[
 '.......y........',
 '......yo...y....',
 '..y...or..yo....',
 '..oy.yoro.or..y.',
 '.yor.orrooro.yo.',
 '.orroorkkroroor.',
 '.oryorkkkkroyro.',
 'yoryrkkkkkkryroy',
 'oryyrkkkkkkryyro',
 'oryyokkkkkkoyyro',
 '.oryokkkkkkoyro.',
 '.oryykkkkkkyyro.',
 '..oryykkkkyyro..',
 '..orryykkyyrro..',
 '...orrkk.kkro...',
 '...oryk...kyo...',
 '..oryyk...kyyo..',
 '..orrrr...rrro..',
 '...oooo...ooo...',
 '................'],[
 '........y.......',
 '....y...oy......',
 '....oy..ro...y..',
 '.y..ro.yoroy.o..',
 '.oy.roorrooroy..',
 '.oryorkkkkroroy.',
 'yorroykkkkyorro.',
 'oryyrkkkkkkryyoy',
 'oryyokkkkkkoyyro',
 '.oryrkkkkkkryyro',
 '.oryokkkkkkoyro.',
 '..oryykkkkkkyro.',
 '..oryykkkkkyyro.',
 '...orrykkyyrro..',
 '...orrkk.kkro...',
 '..oryyk...kyo...',
 '..oryyk...kyyo..',
 '...orrr...rrro..',
 '...ooo....oooo..',
 '................']].map(rows=>({art:{pal:{y:'#FFE27A',o:'#F29A3A',r:'#D2533F',k:'#2A1A14'},down:rows}}));

/* a Dawnkey protester holding a sign (sun over a line) */
const HUM=['................','.....OOOOOO.....','....OHHHHHHO....','...OHHhHHhHHO...','...OHSSSSSSHO...','...OSSESSESSO...','...OSSSSSSSSO...','....OSSMMSSO....',
 '...OOCCCCCCOO...','..OCCCCCCCCCCO..','..OCcCCCCCCcCO..','..OSOBBBBBBOSO..','...OPPPPPPPPO...','...OPPPOOPPPO...','...OPPO..OPPO...','...OKKO..OKKO...'];
const SIGN=['.......OOOOOOOO.','.......OwwwwwwO.','.......OwwyywwO.','.......OwyyyywO.','.......OooooooO.','.......OOOOOOOO.','.............O..','.............O..'];
const protester=(hair,skin,shirt,pants)=>({art:{pal:{O:OL,E:OL,H:hair,h:hair,S:skin,M:'#9A6A50',C:shirt,c:shirt,B:shirt,P:pants,K:'#2A2A33',w:'#F4F1E8',y:'#F2C230',o:'#E8962A',p:'#8A6A4A'},
 down:SIGN.concat(HUM.map((r,i)=>i<11&&r[13]==='.'?r.slice(0,13)+'p'+r.slice(14):r))}});

/* humanoid looks */
const TERENCE={hair:'#7A6450',skin:'#E0AE86',shirt:'#5C3B28',pants:'#2E2E36',belt:'#3A2618',shoes:'#2A1E18',style:'bald',coat:1};
const L_LUCIA={hair:'#1E1A22',skin:'#D9A882',shirt:'#2F3E5C',pants:'#22283A',belt:'#C9A64A',style:'bob',lashes:1,lips:'#B5525A'};
const L_BOPBE={hair:'#D8D2C8',skin:'#E9C7A6',shirt:'#8A3FA0',pants:'#2A2A33',belt:'#E8C860',style:'spiky'};
const L_JIMENA={hair:'#2A1E1A',skin:'#C99470',shirt:'#6E8A6A',pants:'#3D3550',style:'bun',lashes:1,lips:'#A0484E'};
const L_VANILDA={hair:'#6A4630',skin:'#E0AE86',shirt:'#E8962A',pants:'#3B4650',style:'long',lashes:1,lips:'#C46A6A'};
const L_ZIKAR={hair:'#1A1A1A',skin:'#D2A27C',shirt:'#C9A23A',pants:'#3A2A4A',style:'short',beard:'#1A1A1A'};
const L_ALJAN={hair:'#4A3426',skin:'#E0AE86',shirt:'#F1F1EC',pants:'#3A5A7A',style:'short'};
const L_ZELINDA={hair:'#D8B868',skin:'#F0C9A4',shirt:'#3A4A7A',pants:'#2A2A3A',belt:'#E8C860',style:'bun',lashes:1,lips:'#B5525A'};
const L_MEDUSA_ST={art:{pal:{O:OL,E:OL,'1':'#E8505B','2':'#F29A3A','3':'#F2D54A','4':'#5CC46A','5':'#4A8EE0','6':'#9A5CD6',S:'#5A3A2A',M:'#3E261A',
  C:'#2E2A44',c:'#6A5AA0',P:'#26232B',K:'#1A181E'},down:[
 '..3..........4..',
 '...2.OOOOOO.5...',
 '....O123456O....',
 '...O61234561O...',
 '..O12SSSSSS23O..',
 '..O6SSESSESS4O..',
 '.O15SSSSSSSS35O.',
 '.O24OSSMMSSO42O.',
 '.O3OOCCCCCCOO1O.',
 '.O4OCCcCCcCCO6O.',
 '.O5OCCCCCCCCO5O.',
 '..O6SOCcCCcOS4O.',
 '...OOPPPPPPOO...',
 '...OPPPOOPPPO...',
 '...OPPO..OPPO...',
 '...OKKO..OKKO...']}};

/* ---------- tiles ---------- */
const WALLC={hq:'#wBk',man:'ca',bar:'#hw',club:'#RWv'};
const isWall=(set,c)=>c!=null&&set.includes(c);
function face(set,x,y){return !isWall(set,at(x,y+1))&&at(x,y+1)!=null}
function hqFloor(X,Y,x,y){r(X,Y,16,16,'#B7BDC8');r(X,Y,16,1,'#AAB0BC');r(X,Y,1,16,'#AAB0BC');if(hash(x,y)<10)r(X+5,Y+9,2,1,'#C6CBD4')}
function coral(X,Y,x,y){r(X,Y,16,16,'#F5DCD3');r(X,Y,16,1,'#EDCFC4');r(X,Y,1,16,'#EDCFC4');const h=hash(x,y);r(X+(h%12)+2,Y+(h%9)+3,1,1,'#E8C860');if(h<40)r(X+((h*3)%12)+2,Y+((h*7)%10)+3,1,1,'#E4E8F0')}
function vfloor(X,Y,x,y){r(X,Y,16,16,'#EFE6D2');r(X,Y,16,1,'#E2D6BC');r(X,Y,1,16,'#E2D6BC');if(hash(x,y)<15)r(X+6,Y+9,3,1,'#E6DAC2')}
function wood(X,Y,x,y){r(X,Y,16,16,'#7A5236');for(let i=3;i<16;i+=4)r(X,Y+i,16,1,'#6A4630');const h=hash(x,y);r(X+(h%10)+2,Y+(h%3)*4+1,3,1,'#8A6040');r(X+((x+y)%2?4:11),Y+((x+y)%2?4:8),1,4,'#6A4630')}
function cfloor(X,Y,x,y){r(X,Y,16,16,'#4A4452');const h=hash(x,y);r(X+(h%11)+2,Y+(h%7)+3,3,2,'#423C4A');if(h<30)r(X+((h*7)%12)+2,Y+((h*3)%12)+2,1,1,'#5A5462');if(h%9===0)r(X+3,Y+11,6,1,'#3E3846')}
function asphalt(X,Y,x,y){r(X,Y,16,16,'#5B5F69');const h=hash(x,y);r(X+(h%13)+1,Y+(h%11)+2,1,1,'#686C76');r(X+((h*5)%13)+1,Y+((h*3)%13)+1,1,1,'#50545E')}
function ground(X,Y,x,y){const n=[at(x-1,y),at(x+1,y),at(x,y-1),at(x,y+1)];if(n.includes(','))TILES.stone(X,Y,x,y);else lawn(X,Y,x,y)}
const isB=c=>c!=null&&'LHZFKD'.includes(c);
function skyway(X,Y,x,t){ // a cable car gliding over the rooftops
 r(X,Y+3,16,1,'#5D646D');const span=MW*16+48,gx=(t*0.025)%span-24,lx=gx-x*16;
 if(lx>-14&&lx<16){g.save();g.beginPath();g.rect(X,Y,16,16);g.clip();r(X+lx+5,Y+3,1,3,'#3E4550');r(X+lx,Y+6,12,7,OL);r(X+lx+1,Y+7,10,5,'#E8962A');r(X+lx+2,Y+8,3,2,'#CFE3F5');r(X+lx+7,Y+8,3,2,'#CFE3F5');g.restore()}
}
function roof(X,Y,x,y,t,base,edge){r(X,Y,16,16,base);if(!isB(at(x,y-1)))r(X,Y,16,2,edge);if(!isB(at(x-1,y)))r(X,Y,1,16,edge);if(!isB(at(x+1,y)))r(X+15,Y,1,16,edge);
 const h=hash(x,y);if(h<25)r(X+3+h%8,Y+6,4,3,edge);if(h>80){r(X+9,Y+9,3,3,'#8A93A0');r(X+9,Y+9,3,1,'#B9C1C9')}if(y===0)skyway(X,Y,x,t)}
function facadeBase(X,Y,col,dark){r(X,Y,16,16,col);r(X,Y,16,1,dark);r(X,Y+14,16,2,dark)}
function win(X,Y,a,b,w,h,lit,t,seed){r(X+a-1,Y+b-1,w+2,h+2,OL);r(X+a,Y+b,w,h,lit?'#FFC46B':'#4F6B80');r(X+a,Y+b,w,1,lit?'#FFE2A8':'#7F9BB0');if(!lit&&((Math.floor(t/2500)+seed)%7===0))r(X+a+1,Y+b+1,1,h-2,'#CFE3F5')}
const BUILD={
 L:{roof:['#E2D6BC','#CDBF9E'],face:(X,Y,x,y,t)=>{facadeBase(X,Y,'#EDE3CC','#D9CDB2');r(X,Y+7,16,1,'#DCCFB2');win(X,Y,5,3,6,8,hash(x,y)<30,t,x)}},
 H:{roof:['#C9CED6','#9AA3B0'],face:(X,Y,x,y,t)=>{facadeBase(X,Y,'#EDE3CC','#D9CDB2');r(X,Y+1,16,3,'#2F5DA8');r(X,Y+1,16,1,'#5A86CC');
  if(x===3){r(X+3,Y+5,10,9,OL);r(X+4,Y+6,8,7,'#2F5DA8');r(X+7,Y+7,2,5,'#F2C230');r(X+5,Y+9,6,1,'#F2C230')}else win(X,Y,4,6,8,6,false,t,x)}},
 Z:{roof:['#7FA39F','#5E807C'],face:(X,Y,x,y,t)=>{facadeBase(X,Y,'#2E5C5A','#1E3E3C');r(X,Y+1,16,3,'#E8962A');if(x===13){r(X+6,Y+1,4,3,OL);r(X+7,Y+2,2,1,'#F2C230')}
  r(X+1,Y+5,14,8,OL);r(X+2,Y+6,12,6,'#8FC7C2');const k=(x*7)%5;r(X+3+k,Y+8,5,4,'#C9CDD4');r(X+4+k,Y+9,3,1,(Math.floor(t/600)+x)%2?'#E8962A':'#69CFD8');r(X+2,Y+6,12,1,'#B9E3DE')}},
 F:{roof:['#9A6A4A','#7A5236'],face:(X,Y,x,y,t)=>{facadeBase(X,Y,'#6B3E26','#4A2A18');
  if(x===19){const on=Math.floor(t/700)%4!==0;const c=on?'#7FE8F0':'#3A6A70';r(X+7,Y+1,2,1,c);r(X+6,Y+2,4,1,c);r(X+5,Y+3,6,1,c);r(X+6,Y+4,4,1,c);r(X+7,Y+5,2,1,c)}
  win(X,Y,3,7,10,6,true,t,x);r(X+5,Y+10,2,3,'#6A3A26');r(X+9,Y+9,2,4,'#6A3A26')}},
 K:{roof:['#3A3040','#2A2230'],face:(X,Y,x,y,t)=>{facadeBase(X,Y,'#1E1824','#120E16');const fl=(Math.floor(t/90)+x*3)%23===0;r(X,Y+2,16,2,fl?'#5A1A40':'#E040A0');r(X,Y+4,16,1,'#8A2A6A');
  if(x===28){r(X+5,Y+6,6,6,OL);r(X+6,Y+7,4,4,'#3A1A3A');r(X+7,Y+8,2,2,'#E040A0')}}},
};
/* Kelowan sits inside the Poseidon Nebula: views inside the system show nebula glow, hardly any stars (c013, c032, c034); same look as ch1's nebula() */
function nebula(X,Y,x,y,t,depth){r(X,Y,16,16,'#140D20');const ox=CAM.x*depth,oy=CAM.y*depth;
 for(let j=0;j<16;j+=2)for(let i=0;i<16;i+=2){const gx=x*16+i-ox,gy=y*16+j-oy,v=Math.sin(gx/23+gy/31)+.6*Math.sin(gx/11-gy/17)+.3*Math.sin(gy/7+gx/41);
  if(v>1.2)r(X+i,Y+j,2,2,'#8E5C8C');else if(v>.6)r(X+i,Y+j,2,2,'#5E3C72');else if(v>-.1)r(X+i,Y+j,2,2,'#36244C')}
 if((hash(x,y)+Math.floor(t/900))%23===0)r(X+(hash(y,x)%14)+1,Y+(hash(x+1,y)%12)+2,1,1,'#D8C8E8')}
const TT={
 /* --- police HQ --- */
 hqFloor:(X,Y,x,y)=>hqFloor(X,Y,x,y),
 cellFloor:(X,Y,x,y)=>{r(X,Y,16,16,'#8C909C');r(X,Y,16,1,'#80848F');if((x+y)%2)r(X+7,Y+7,2,2,'#858996')},
 hqWall:(X,Y,x,y)=>{r(X,Y,16,16,'#3E4658');r(X,Y,16,1,'#4E5870');if(face(WALLC.hq,x,y)){r(X,Y+6,16,10,'#8792A8');r(X,Y+6,16,1,'#A3AEC2');r(X,Y+10,16,1,'#2F5DA8');r(X,Y+14,16,2,'#6D778C')}},
 hqWin:(X,Y,x,y,t)=>{r(X,Y,16,16,'#3E4658');r(X,Y+3,16,11,'#5D667A');r(X+1,Y+4,14,9,'#9CC7E8');r(X+1,Y+4,14,2,'#C9E2F2');
  const h=hash(x,1);r(X+1,Y+9,5,4,'#EDE3CC');r(X+8,Y+8,7,5,'#E2D6BC');r(X+2+h%3,Y+10,1,1,'#4F6B80');r(X+10,Y+9,1,1,'#4F6B80');r(X+6,Y+10,3,3,'#8E6CC8');r(X+7,Y+9,1,1,'#B596E6');
  const cx=(t*0.02+x*16)%64;if(cx<16)r(X+cx,Y+6,2,1,'#5D646D');
  if(state.f.boom&&!state.f.occupied&&x===3){r(X+4,Y+4,1,5,'#9AA3AD');g.fillStyle='rgba(235,230,225,.9)';[[4,6,3],[7,5,2],[2,7,2]].forEach(([a,c,rr])=>{g.beginPath();g.arc(X+a+Math.sin(t/1200+a)*.6,Y+c,rr,0,7);g.fill()})}
  r(X+7,Y+4,1,9,'#5D667A');r(X,Y+13,16,3,'#8792A8')},
 board:(X,Y,x,y)=>{r(X,Y,16,16,'#3E4658');r(X,Y+2,16,12,'#8792A8');r(X+1,Y+3,14,10,'#B58A55');r(X+1,Y+3,14,1,'#C9A06A');
  const h=hash(x,y);[[2,4],[9,6]].forEach(([a,c],i)=>{const px=X+a+(h+i)%3,py=Y+c+(i?0:(h%2));r(px,py,4,5,'#F1EEE6');r(px+1,py+1,2,2,i?'#5A3E2A':'#2A2220');r(px+1,py+3,2,1,'#7A8090')});
  r(X+5,Y+8,6,1,'#C0392B');r(X+4,Y+7,1,1,'#C0392B');r(X+11,Y+9,3,1,'#C0392B');
  if(x===9&&state.f.boom){r(X+3,Y+4,5,6,'#F1EEE6');r(X+4,Y+5,3,2,'#1E1A22');r(X+4,Y+7,3,2,'#D9A882');r(X+3,Y+4,2,1,OL);r(X+3,Y+4,1,2,OL)}
  if(x===13&&state.f.liliana){r(X+3,Y+4,6,7,'#F1EEE6');r(X+4,Y+5,4,3,'#E8E8E8');r(X+4,Y+8,4,2,'#C9B8A0');r(X+2,Y+3,8,1,'#D2533F')}
  r(X,Y+13,16,3,'#6D778C')},
 cellWall:(X,Y,x,y)=>{r(X,Y,16,16,'#4F5466');r(X,Y+3,16,11,'#6A7084');for(let i=2;i<16;i+=4)for(let j=5;j<14;j+=4)r(X+i,Y+j,1,1,'#565C6E');r(X,Y+14,16,2,'#4A4F60')},
 desk:(X,Y,x,y,t)=>{hqFloor(X,Y,x,y);r(X+1,Y+3,14,10,'#6B5B4B');r(X+1,Y+3,14,2,'#87745F');r(X+1,Y+12,14,2,'#4A3E32');
  if(hash(x,y)%2){r(X+4,Y+1,8,6,OL);r(X+5,Y+2,6,4,(Math.floor(t/900)+x)%3?'#69CFD8':'#3C6E6E')}else{r(X+3,Y+6,5,4,'#F1EEE6');r(X+9,Y+7,3,3,'#E8962A')}},
 glass:(X,Y,x,y,t)=>{TT.cellFloor(X,Y,x,y);r(X,Y+1,16,2,'#5D667A');g.fillStyle='rgba(168,212,230,.55)';g.fillRect(X,Y+3,16,11);r(X,Y+14,16,2,'#5D667A');r(X+3+((x*5)%6),Y+5,1,6,'#E4F4FA');r(X+4+((x*5)%6),Y+4,1,3,'#E4F4FA')},
 exo:(X,Y,x,y,t)=>{TT.cellFloor(X,Y,x,y);const s=state.f;if(s.bopbeDead){r(X+1,Y+6,14,9,'#3A302C');r(X+3,Y+8,10,5,'#2A2422');r(X+5,Y+9,2,1,'#7A706A');r(X+9,Y+11,3,1,'#7A706A')}
  r(X+2,Y+1,2,14,'#5E6470');r(X+12,Y+1,2,14,'#5E6470');r(X+2,Y+1,12,2,'#5E6470');r(X+2,Y+1,12,1,'#8A93A0');r(X+5,Y+6,6,5,'#2E3440');r(X+5,Y+6,6,1,'#4A5260');
  const on=Math.floor(t/500)%2;r(X+3,Y+5,1,2,on?'#69CFD8':'#2C5D63');r(X+12,Y+5,1,2,on?'#2C5D63':'#69CFD8')},
 lab:(X,Y,x,y,t)=>{hqFloor(X,Y,x,y);r(X+1,Y+3,14,11,'#E8ECEF');r(X+1,Y+3,14,2,'#FFFFFF');r(X+1,Y+12,14,2,'#B8C0C8');const h=hash(x,y)%3;
  if(h===0){r(X+4,Y+1,3,8,'#3C4450');r(X+3,Y+8,6,2,'#3C4450');r(X+9,Y+6,2,4,'#69CFD8');r(X+12,Y+6,2,4,'#E86D8A')}else if(h===1){r(X+3,Y+5,10,5,'#2B3238');r(X+4,Y+6,8,3,(Math.floor(t/300)+x)%4?'#5DD07A':'#2E6E3E')}else{[3,6,9,12].forEach((a,i)=>{r(X+a,Y+5,2,5,'#CFE3E8');r(X+a,Y+7,2,3,['#E86D8A','#69CFD8','#F2D154','#5DD07A'][i])})}},
 plant:(X,Y,x,y)=>{hqFloor(X,Y,x,y);r(X+5,Y+10,6,5,'#9A6A3C');r(X+5,Y+10,6,1,'#B8844A');r(X+3,Y+3,10,7,'#3F8F4A');r(X+5,Y+1,6,4,'#5DB866');r(X+2,Y+6,3,2,'#5DB866');r(X+11,Y+5,3,2,'#5DB866')},
 mirror:(X,Y,x,y,t)=>{TT.cellFloor(X,Y,x,y);r(X,Y+1,16,2,'#5D667A');g.fillStyle='rgba(120,150,170,.45)';g.fillRect(X,Y+3,16,11);r(X,Y+14,16,2,'#5D667A');r(X+3,Y+5,1,6,'#E4F4FA');r(X+11,Y+4,1,3,'#E4F4FA')},
 console2:(X,Y,x,y,t)=>{hqFloor(X,Y,x,y);r(X+1,Y+2,14,12,'#2B3238');r(X+2,Y+3,12,6,'#1E3A52');const on=state.f.tail&&!state.f.capsule;r(X+3,Y+4,10,4,on?((Math.floor(t/300)%2)?'#69CFD8':'#3C8E96'):'#24303A');r(X+4,Y+11,8,2,'#5F6B72')},
 hqDoor:(X,Y,x,y)=>{hqFloor(X,Y,x,y);r(X,Y,16,16,'#5D667A');r(X+1,Y+1,14,15,'#A8D4E6');r(X+(x%2?0:15),Y,1,16,'#3E4658');r(X+3,Y+3,1,8,'#E4F4FA');r(X+(x%2?1:13),Y+8,2,2,'#3E4658')},
 /* --- Santa Rosa streets --- */
 bld:(X,Y,x,y,t)=>{const c=at(x,y),B=BUILD[c];if(!isB(at(x,y+1)))B.face(X,Y,x,y,t);else roof(X,Y,x,y,t,B.roof[0],B.roof[1])},
 cityDoor:(X,Y,x,y,t)=>{const c=at(x-1,y);BUILD[c].face(X,Y,x,y,t);
  if(c==='H'){r(X+3,Y+4,10,12,OL);r(X+4,Y+5,8,11,'#A8D4E6');r(X+8,Y+5,1,11,'#5D667A');r(X+5,Y+6,1,5,'#E4F4FA')}
  else if(c==='F'){r(X+3,Y+5,10,11,OL);r(X+4,Y+6,8,10,'#8A5030');r(X+6,Y+8,4,3,'#FFC46B');r(X+10,Y+11,1,2,'#F2C230')}
  else{const lock=!state.f.club;r(X+3,Y+5,10,11,'#E040A0');r(X+4,Y+6,8,10,'#120E16');r(X+7,Y+10,2,2,lock?'#D2533F':'#5DD07A')}},
 road:(X,Y,x,y)=>{asphalt(X,Y,x,y);if(at(x,y+1)==='r'&&x%2===0&&!(x>=13&&x<=16))r(X+3,Y+15,10,1,'#E8E2C8');if(at(x,y-1)==='r'&&x%2===0&&!(x>=13&&x<=16))r(X+3,Y,10,1,'#E8E2C8')},
 vroad:(X,Y,x,y)=>{asphalt(X,Y,x,y);if(y%2===0){if(x===14)r(X+15,Y+3,1,9,'#E8E2C8');if(x===15)r(X,Y+3,1,9,'#E8E2C8')}if(at(x,y-1)===','||at(x,y-1)==='r'){for(let i=1;i<16;i+=4)r(X+i,Y+1,2,4,'#E8E2C8')}},
 jaca:(X,Y,x,y,t)=>{ground(X,Y,x,y);r(X+6,Y+10,4,6,'#5A3E2E');r(X+7,Y+10,1,6,'#6E4E3A');r(X+2,Y+1,12,10,'#8E6CC8');r(X+1,Y+3,14,6,'#8E6CC8');r(X+3,Y+9,10,2,'#6C4FA0');
  const h=hash(x,y);r(X+4,Y+2,4,3,'#B596E6');r(X+3+h%6,Y+5,2,2,'#B596E6');r(X+9,Y+3,2,1,'#D8C4F4');r(X+5+h%4,Y+7,1,1,'#D8C4F4');
  if(h%7===0&&!state.f.occupied){const on=(Math.floor(t/350)+h)%6;if(on){r(X+9,Y+4,5,4,'#2A6AA8');r(X+10,Y+5,3,1,'#9FE8F0');r(X+10,Y+6,2,1,'#E8962A')}}},
 holo:(X,Y,x,y,t)=>{ground(X,Y,x,y);r(X+7,Y+8,2,8,'#6E7680');r(X+5,Y+14,6,2,'#4A5260');const p=Math.sin(t/300)*.5+.5;
  if(state.f.occupied){r(X+1,Y+0,14,9,'#5A1020');r(X+2,Y+1,12,7,'#8A1A2A');r(X+6,Y+2,4,5,'#F2C230');r(X+5,Y+3,6,3,'#F2C230');r(X+7,Y+3,2,3,'#8A1A2A')}
  else{g.fillStyle=`rgba(80,200,240,${.45+p*.4})`;g.fillRect(X+1,Y+0,14,9);const k=Math.floor(t/1400)%3;r(X+3,Y+2,10,1,'#FFFFFF');r(X+3,Y+4,[6,9,4][k],1,'#FFE2A8');r(X+3,Y+6,[8,5,10][k],1,'#E8962A')}},
 qix:(X,Y,x,y,t)=>{ground(X,Y,x,y);r(X,Y+3,16,11,'#E2D6BC');r(X,Y+3,16,1,'#F2EAD8');r(X,Y+13,16,1,'#C9BC9C');const paint='#D83AA0',n=Math.floor(t/700)%6;
  const P=(a,rows)=>rows.forEach((row,j)=>[...row].forEach((ch,i)=>{if(ch==='#')r(X+a+i,Y+5+j,1,1,paint)}));
  if(x===10){P(2,['.##.','#..#','#..#','#.##','.###']);P(8,['.','#']);if(n>0)P(8,['#','#','#','#','#']);r(X+13,Y+7,2,1,paint)}
  else{if(n>1)P(1,['#...#','.#.#.','..#..','.#.#.']);if(n>2)P(1,['#...#','.#.#.','..#..','.#.#.','#...#']);if(n>3)r(X+5,Y+10,1,3,paint);if(n>1&&n<5){r(X+8,Y+4,3,2,'#8A93A0');r(X+9,Y+3,1,1,'#E8962A')}}},
 memo:(X,Y,x,y,t)=>{TILES.stone(X,Y,x,y);r(X,Y+2,16,13,'#C9BC9C');r(X,Y+2,16,1,'#E2D6BC');const top=at(x,y-1)!=='m';
  if(!state.f.boom){r(X+1,Y+4,14,10,'#6E5A44');r(X+2,Y+5,12,8,'#4F8A4A');[[3,6,'#E86D8A'],[9,7,'#F7D154'],[6,10,'#FFFFFF'],[12,10,'#B596E6']].forEach(([a,c,col])=>r(X+a,Y+c,2,2,col))}
  else{r(X+1,Y+4,14,10,'#4A4048');[[2,9,'#FFFFFF'],[7,11,'#E86D8A'],[11,8,'#F7D154'],[4,12,'#B596E6'],[13,12,'#FFFFFF']].forEach(([a,c,col])=>{r(X+a,Y+c,3,2,col);r(X+a+1,Y+c+2,1,1,'#3E8E3A')});
   if(top){r(X+4,Y+3,6,7,'#F1EEE6');r(X+5,Y+4,4,3,x===5?'#1E1A22':'#5A3E2A');r(X+5,Y+7,4,2,x===5?'#D9A882':'#C99470');r(X+4,Y+3,2,1,OL);r(X+4,Y+3,1,2,OL)}
   [3,8,12].forEach((a,i)=>{r(X+a,Y+13,2,3,'#F1EEE6');const fl=(Math.floor(t/120)+i+x)%3;r(X+a,Y+11-(fl===0?1:0),2,2,fl?'#FFC46B':'#FFE27A')})}},
 manWall:(X,Y,x,y,t)=>{const isM=c=>c==='M'||c==='G';
  if(!isM(at(x,y+1))){r(X,Y,16,16,'#E2D6BC');r(X,Y,16,1,'#F2EAD8');for(let i=1;i<16;i+=5){r(X+i,Y+1,3,2,'#3A404C');r(X+i+1,Y+1,1,1,'#D2533F')}r(X,Y+13,16,3,'#C9BC9C');for(let i=2;i<16;i+=5)r(X+i,Y+4,1,8,'#D2C4A6');return}
  r(X,Y,16,16,'#3F7A4A');const h=hash(x,y);r(X+1,Y+2,9,8,'#2F6A3E');r(X+2,Y+3,5,3,'#4E9A5A');r(X+7,Y+7,8,8,'#2F6A3E');r(X+8,Y+8,4,3,'#4E9A5A');if(h<50)r(X+h%10+2,Y+11,2,2,'#5DB866');
  const e='#D2C4A6',l='#F2EAD8';if(!isM(at(x,y-1))){r(X,Y,16,4,e);r(X,Y,16,1,l);r(X+3,Y+1,2,2,'#3A404C');r(X+11,Y+1,2,2,'#3A404C');r(X,Y+4,16,1,'#2A4A30')}if(!isM(at(x-1,y))){r(X,Y,4,16,e);r(X,Y,1,16,l)}if(!isM(at(x+1,y))){r(X+12,Y,4,16,e);r(X+15,Y,1,16,'#B8AA8C')}},
 manGate:(X,Y,x,y)=>{TILES.stone(X,Y,x,y);r(X,Y,16,3,'#E8C860');r(X,Y+1,16,1,'#F7E08A');for(let i=1;i<16;i+=3)r(X+i,Y+3,1,13,'#C9A23A');r(X,Y+8,16,1,'#C9A23A');r(X+7,Y+6,2,4,'#F7E08A')},
 tower:(X,Y,x,y,t)=>{r(X,Y,16,16,'#3A404C');r(X,Y,16,1,'#4E5666');if(at(x,y-1)!=='A'){r(X,Y,16,4,'#5A6274');r(X,Y,16,1,'#7A8494')}r(X+(x%2?14:1),Y+5,1,10,'#2E343E');
  if(x===14||x===15){r(X+(x===14?13:0),Y,3,16,'#1A1E26');r(X+(x===14?13:2),Y,1,16,'#2E343E')}
  if((x+y)%4===0)r(X+7,Y+8,2,2,Math.floor(t/500+x)%3?'#D2533F':'#5A1A1A');if(y===17)r(X,Y+12,16,4,'#2A2F38')},
 /* --- High Rosa dock level three --- */
 girder:(X,Y,x,y,t)=>{r(X,Y,16,16,'#1E232D');g.strokeStyle='#3A4352';g.lineWidth=1;g.beginPath();g.moveTo(X,Y+0.5);g.lineTo(X+16,Y+0.5);g.moveTo(X+0.5,Y);g.lineTo(X+16,Y+16);g.moveTo(X+16,Y);g.lineTo(X,Y+16);g.stroke();
  r(X+1,Y+1,1,1,'#5A6474');r(X+14,Y+14,1,1,'#5A6474');if(hash(x,y)<6)r(X+7,Y+7,2,2,(Math.floor(t/800)+x)%2?'#FFD08A':'#7A5420');
  const below=at(x,y+1);if(below&&below!=='G'&&below!=='B'&&below!=='W'){r(X,Y+11,16,5,'#4A5466');r(X,Y+11,16,1,'#6B7790');for(let i=0;i<16;i+=4)r(X+i,Y+14,2,2,'#E8B73A')}},
 bay:(X,Y,x,y,t)=>{nebula(X,Y,x,y,t,.3);const i=x-1;g.save();g.beginPath();g.rect(X,Y,16,16);g.clip();
  const top=i===0?7:i%2?5:6,bot=i===0?11:i%2?13:12,hc=['#B8BEC6','#A8916A','#8A939E','#C9B89A','#7E9278','#B08A72','#9AA3AD','#8E8A9E'][i]||'#9AA3AD';
  r(X+(i===0?6:0),Y+top,16,bot-top,hc);r(X+(i===0?6:0),Y+top,16,1,'rgba(255,255,255,.35)');r(X+(i===0?6:0),Y+bot-2,16,2,'rgba(0,0,0,.22)');if(i>0)r(X,Y+top,1,bot-top,'#4A5466');
  if(i===0){r(X+3,Y+8,3,2,hc);r(X+2,Y+9,1,1,'#7A8494')}
  if(i>0&&i<7){r(X+3,Y+8,2,2,(i+Math.floor(t/1300))%3?'#FFE3A0':'#4A6A8A');r(X+10,Y+8,2,2,'#4A6A8A')}
  if(i===7){r(X+8,Y+6,8,8,'#3A404C');r(X+12,Y+7,4,6,(Math.floor(t/150))%2?'#7FD3FF':'#BFF1FF')}
  if(i===2||i===5){r(X+7,Y,2,5,'#6E7680');r(X+6,Y+4,4,1,'#8A93A0')}g.restore();
  r(X,Y,16,2,'#2A2F3A');r(X,Y+14,16,2,'#4A5466');r(X,Y+14,16,1,'#6B7790');if(x%2===0)r(X,Y,1,16,'#2A2F3A')},
 track:(X,Y,x,y,t)=>{plate(X,Y,x,y);r(X,Y+4,16,2,'#8A93A0');r(X,Y+10,16,2,'#8A93A0');r(X,Y+6,16,1,'#4A5260');r(X,Y+12,16,1,'#4A5260');
  const p=((t*0.06)+x*16)%64;if(p<16){r(X+p,Y+3,2,10,'#69CFD8');r(X+p,Y+3,2,1,'#BFF1FF')}},
 seat:(X,Y,x,y)=>{plate(X,Y,x,y);r(X+2,Y+2,12,12,OL);r(X+3,Y+3,10,6,'#8E3A44');r(X+3,Y+3,10,1,'#B04A56');r(X+3,Y+9,10,4,'#B04A56');r(X+2,Y+8,2,6,'#3A3036');r(X+12,Y+8,2,6,'#3A3036')},
 capWin:(X,Y,x,y,t)=>{nebula(X,Y,x,y,t,.15);g.save();g.beginPath();g.rect(X,Y,16,16);g.clip();
  const cx=12*16+8-CAM.x,top=12*16-CAM.y;
  g.fillStyle='#2E7A68';g.beginPath();g.arc(cx,top+20+300,300,0,Math.PI*2);g.fill();
  g.fillStyle='#4E9E6E';g.beginPath();g.arc(cx-70,top+20+60,50,0,Math.PI*2);g.fill();
  g.fillStyle='#C9A64A';g.beginPath();g.arc(cx+90,top+20+50,46,0,Math.PI*2);g.fill();
  g.strokeStyle='rgba(159,215,232,.75)';g.lineWidth=2;g.beginPath();g.arc(cx,top+20+300,300,Math.PI*1.2,Math.PI*1.8);g.stroke();
  r(cx,top,1,22,'#9FD7E8');
  const s=state.f;if(s.capsule&&!s.boom){const cy=top+2;r(cx-2,cy,5,3,OL);r(cx-1,cy+1,3,1,'#FFE3A0')}
  if(s.boom){const age=Date.now()-(s.boomAt||0),ey=top+9;
   if(age<4500){const k=age/4500,rad=3+k*10;g.fillStyle=`rgba(255,240,200,${1-k})`;g.beginPath();g.arc(cx,ey,rad,0,7);g.fill();g.fillStyle=`rgba(242,154,58,${.9-k*.6})`;g.beginPath();g.arc(cx,ey,rad*.6,0,7);g.fill()}
      for(let i=0;i<7;i++){const d=((t/60)+i*13)%28;r(cx+Math.round(Math.sin(i*2.3)*(3+d*.4)),ey+Math.round(d*.5),1,1,i%2?'#F29A3A':'#D8D2C8')}
   r(cx,ey+6,1,16,'#3A4A55')}
  g.restore();if(y===12){r(X,Y,16,2,'#4A5466');r(X,Y,16,1,'#6B7790')}if(x%4===0)r(X,Y,1,16,'#2A2F3A')},
 hatch:(X,Y,x,y,t)=>{TT.girder(X,Y,x,y,t);r(X+2,Y+1,12,14,'#4A5466');r(X+3,Y+2,10,12,'#6E7680');r(X+4,Y+3,8,10,'#9AA3AD');r(X+6,Y+5,4,4,'#3A4A55');r(X+7,Y+6,2,2,'#9FD7E8');
  const s=state.f;r(X+7,Y+11,2,2,s.capsule?(Math.floor(t/300)%2?'#D2533F':'#5A1A1A'):'#5DD07A')},
 /* --- the Governor's Roundhouse Mansion --- */
 garden:(X,Y,x,y,t)=>{r(X,Y,16,16,'#5E9E5A');const h=hash(x,y);if(h<45)r(X,Y+((h%3)+1)*4,16,2,'#E8D8C0');r(X+(h%10)+2,Y+(h%7)+5,3,2,'#4A8A4A');
  if(h%3===0){const px=X+4+h%7;r(px,Y+6,1,10,'#8A6A4A');const sw=Math.round(Math.sin(t/900+x)*1);r(px-3+sw,Y+5,7,1,'#3F8F4A');r(px-2+sw,Y+4,5,1,'#5DB866');r(px-4+sw,Y+6,2,1,'#3F8F4A');r(px+3+sw,Y+6,2,1,'#3F8F4A')}},
 rail:(X,Y,x,y,t)=>{TT.garden(X,Y,x,y,t);r(X,Y+9,16,7,'#F2CFC4');r(X,Y+6,16,3,'#F6E3DC');r(X,Y+6,16,1,'#FFFFFF');for(let i=1;i<16;i+=4)r(X+i,Y+9,2,6,'#E9C9BE');r(X,Y+15,16,1,'#D99C90')},
 coralWall:(X,Y,x,y)=>{r(X,Y,16,16,'#D99C90');r(X,Y,16,1,'#E9B7AA');const h=hash(x,y);r(X+h%14+1,Y+(h%5)+2,1,1,'#E8C860');r(X+(h*3)%14+1,Y+(h%7)+5,1,1,'#E4E8F0');
  if(face(WALLC.man,x,y)){r(X,Y+5,16,11,'#F2C8BC');r(X,Y+5,16,1,'#E8C860');r(X,Y+14,16,2,'#D99C90');r(X+(h*5)%14+1,Y+9,1,1,'#E8C860')}},
 arch:(X,Y,x,y,t)=>{TT.coralWall(X,Y,x,y);r(X+3,Y+5,10,9,'#E8C860');r(X+4,Y+3,8,2,'#E8C860');r(X+4,Y+5,8,9,'#BFE3E8');r(X+5,Y+4,6,1,'#BFE3E8');r(X+4,Y+10,8,4,'#5E9E5A');r(X+6,Y+8,1,6,'#8A6A4A');r(X+4,Y+7,5,1,'#3F8F4A');r(X+10,Y+6,1,3,'#FFFFFF')},
 balc:(X,Y,x,y)=>{r(X,Y,16,16,'#F2CFC4');r(X,Y,16,1,'#E9B7AA');r(X+7,Y,1,16,'#EBC4B8');const h=hash(x,y);r(X+h%12+2,Y+h%10+3,1,1,'#E8C860')},
 manFloor:(X,Y,x,y)=>coral(X,Y,x,y),
 cushion:(X,Y,x,y,t)=>{(ZID==='villa'?vfloor:coral)(X,Y,x,y);if(ZID!=='villa'){r(X+1,Y+3,14,10,'#B85A5A');r(X+2,Y+4,12,8,'#C86A6A');r(X+1,Y+3,14,1,'#E8C860');r(X+1,Y+12,14,1,'#E8C860');return}
  const cs=['#C25B7A','#5A8FB0','#E8C860','#7A9A5A'];r(X+1,Y+5,14,10,cs[(x+y)%4]);r(X+2,Y+3,7,6,cs[(x+y+1)%4]);r(X+8,Y+6,7,6,cs[(x+y+2)%4]);
  r(X+3,Y+7,4,4,x%2?'#F0C9A4':'#8A5A3A');r(X+3,Y+7,4,1,'#3A2A22');r(X+6,Y+10,8,4,'#E8E4D8');const z=Math.floor(t/700)%3;if(x%2===0)r(X+10+z,Y+3-z,2,1,'#FFFFFF')},
 palm:(X,Y,x,y,t)=>{(ZID==='villa'?vfloor:coral)(X,Y,x,y);r(X+5,Y+11,6,5,'#C9A23A');r(X+5,Y+11,6,1,'#F7E08A');r(X+7,Y+5,2,6,'#8A6A4A');const sw=Math.round(Math.sin(t/1100+x));r(X+2+sw,Y+3,12,2,'#3F8F4A');r(X+4+sw,Y+1,8,2,'#5DB866');r(X+1+sw,Y+5,3,2,'#3F8F4A');r(X+12+sw,Y+5,3,2,'#3F8F4A')},
 manDoor:(X,Y,x,y)=>{coral(X,Y,x,y);r(X,Y,16,16,'#C9A23A');r(X+1,Y+1,14,15,'#8A3A2A');r(X+(x%2?0:15),Y,1,16,'#C9A23A');r(X+(x%2?2:12),Y+8,2,2,'#F7E08A');r(X+3,Y+3,10,1,'#A04E3A')},
 /* --- Terence's villa in Hafnir --- */
 sea:(X,Y,x,y,t)=>{r(X,Y,16,16,'#0E1A2E');const o=Math.floor(t/500+x)%4;r(X+o*3,Y+5,6,1,'#2E4A6A');r(X+((o+2)%4)*3,Y+11,5,1,'#2E4A6A');if(hash(x,y)<20)r(X+9,Y+2,2,1,'#5A7498')},
 sand:(X,Y,x,y,t)=>{r(X,Y,16,16,'#8A8270');const f2=(Math.floor(t/700)+x)%5;r(X,Y,16,2+(f2===0?1:0),'#B8B4A8');const h=hash(x,y);r(X+h%13+1,Y+8,1,1,'#6E6858');r(X+(h*3)%13+1,Y+12,1,1,'#6E6858')},
 vWall:(X,Y,x,y)=>{r(X,Y,16,16,'#D9CDB2');r(X,Y,16,1,'#EDE3CC');if(at(x,y+1)!=null&&at(x,y+1)!=='V'&&at(x,y+1)!=='w'){r(X,Y+5,16,11,'#EDE3CC');r(X,Y+5,16,1,'#FFF6E4');r(X,Y+14,16,2,'#CDBF9E')}},
 vWin:(X,Y,x,y,t)=>{r(X,Y,16,16,'#D9CDB2');r(X,Y+2,16,12,'#EDE3CC');r(X+1,Y+3,14,10,'#141C34');if(hash(x,y)<40)r(X+2+hash(x,y)%11,Y+5,1,1,'#C9D2E8');r(X+1,Y+8,14,5,'#0E1A2E');const o=Math.floor(t/600+x)%3;r(X+2+o*4,Y+10,4,1,'#2E4A6A');r(X+1,Y+3,14,1,'#1E2844');r(X+7,Y+3,1,10,'#D9CDB2');r(X,Y+14,16,2,'#CDBF9E')},
 vFloor:(X,Y,x,y)=>vfloor(X,Y,x,y),
 vDoor:(X,Y,x,y)=>{vfloor(X,Y,x,y);r(X,Y,16,16,'#CDBF9E');r(X+1,Y+1,14,15,'#8A6A4A');r(X+3,Y+3,10,4,'#141C34');r(X+(x%2?1:13),Y+9,2,2,'#E8C860')},
 car:(X,Y,x,y)=>{TILES.stone(X,Y,x,y);r(X+1,Y+3,14,11,OL);r(X+2,Y+4,12,9,'#3A5A7A');r(X+3,Y+5,10,3,'#9FD4EC');r(X+2,Y+12,3,2,'#1A1A1A');r(X+11,Y+12,3,2,'#1A1A1A');r(X+2,Y+9,2,1,'#F2D54A');r(X+12,Y+9,2,1,'#F2D54A')},
 /* --- Fleesh Diamond bar --- */
 barWall:(X,Y,x,y,t)=>{r(X,Y,16,16,'#3E2A20');r(X,Y,16,1,'#4E3428');if(face(WALLC.bar,x,y)){r(X,Y+4,16,12,'#5A3A28');r(X,Y+10,16,6,'#6E4A32');r(X,Y+10,16,1,'#8A6040');if(x%4===2){const f=(Math.floor(t/1700)+x)%9===0;r(X+6,Y+5,4,3,f?'#C98A2A':'#FFC46B');r(X+5,Y+4,6,1,'#FFE2A8')}}},
 shelf:(X,Y,x,y,t)=>{r(X,Y,16,16,'#3E2A20');r(X,Y+2,16,14,'#5A3A28');[4,9].forEach((sy,j)=>{r(X,Y+sy+4,16,1,'#8A6040');for(let i=0;i<4;i++){const c=['#3F8F4A','#C98A2A','#9A2A2A','#CFE3E8'][(i+x+j)%4];r(X+1+i*4,Y+sy,2,4,c);r(X+1+i*4,Y+sy-1,1,1,c)}});
  const gl=(Math.floor(t/400)+x*3)%11;if(gl<4)r(X+1+gl*4,Y+5,1,1,'#FFFFFF');r(X,Y+14,16,2,'#4A2E22')},
 barWin:(X,Y,x,y,t)=>{r(X,Y,16,16,'#3E2A20');r(X+1,Y+3,14,11,'#1E2A44');r(X+1,Y+11,14,3,'#2E3A54');r(X+1,Y+11,14,1,'#5A6A8A');
  const p=((t*0.03)+x*16)%96;if(p<16){r(X+p,Y+10,4,2,'#F2D54A');r(X+p+1,Y+9,2,1,'#F2D54A')}r(X+3+(x%3),Y+5,1,5,'#E040A0');r(X+10,Y+4,2,1,'#7FE8F0');r(X+1,Y+3,14,1,'#2A3858');r(X+8,Y+3,1,11,'#5A3A28');r(X,Y+14,16,2,'#6E4A32')},
 barFloor:(X,Y,x,y)=>wood(X,Y,x,y),
 counter:(X,Y,x,y,t)=>{wood(X,Y,x,y);r(X,Y+2,16,13,'#6A4228');r(X,Y+2,16,4,'#A0683E');r(X,Y+2,16,1,'#C08050');r(X,Y+14,16,2,'#4A2E1A');if(at(x+1,y)!=='b')r(X+14,Y+2,2,13,'#4A2E1A');
  const h=hash(x,y);if(h<40){r(X+3+h%7,Y,3,4,'#CFE3E8');r(X+3+h%7,Y+2,3,2,'#C98A2A')}},
 table:(X,Y,x,y,t)=>{wood(X,Y,x,y);r(X+2,Y+4,12,9,OL);r(X+3,Y+5,10,7,'#8A5A36');r(X+3,Y+5,10,1,'#A06A40');r(X+7,Y+12,2,3,'#4A2E1A');const fl=Math.floor(t/150)%3;r(X+7,Y+4-(fl?1:0),2,2,fl?'#FFC46B':'#FFE27A');r(X+4,Y+6,2,3,'#CFE3E8');r(X+10,Y+7,2,3,'#C98A2A')},
 booth:(X,Y,x,y)=>{wood(X,Y,x,y);r(X+1,Y+2,14,12,'#5A2A24');r(X+2,Y+3,12,6,'#8E3A3A');r(X+2,Y+9,12,4,'#A04848');[4,8,12].forEach(a=>r(X+a,Y+5,1,1,'#5A2A24'));r(X+1,Y+13,14,2,'#3E2A20')},
 barDoor:(X,Y,x,y)=>{wood(X,Y,x,y);r(X,Y,16,16,'#3E2A20');r(X+1,Y,14,16,'#6A4228');r(X+3,Y+3,10,5,'#FFC46B');r(X+(x%2?1:13),Y+9,2,2,'#C9A23A')},
 /* --- Dark Paradise club basement --- */
 clubWall:(X,Y,x,y,t)=>{r(X,Y,16,16,'#231C2B');r(X,Y,16,1,'#2E2638');if(face(WALLC.club,x,y)){r(X,Y+5,16,11,'#3A3046');r(X,Y+5,16,1,'#4E4260');const h=hash(x,y);r(X+h%12+1,Y+8,3,2,'#342A40');r(X+(h*3)%12+1,Y+12,2,1,'#463A54');r(X,Y+14,16,2,'#2A2232')}},
 clubFloor:(X,Y,x,y)=>cfloor(X,Y,x,y),
 rack:(X,Y,x,y)=>{r(X,Y,16,16,'#231C2B');const h=hash(x,y);r(X+1,Y+3,14,12,'#4A4450');r(X+1,Y+3,14,1,'#5E5866');r(X+2,Y+5,7,7,'#2A2630');r(X+3,Y+6,5,5,'#4E5A64');r(X+4,Y+7,2,2,'#7A8A94');
  r(X+10,Y+5,4,3,['#7A4A32','#4E6A4E','#6A4A6A'][h%3]);r(X+10,Y+9,4,1,'#6E6878');r(X+10,Y+11,3,1,'#6E6878');r(X+1,Y+13,14,2,'#3A3440');r(X+2+h%10,Y+3,3,1,'#7A7480')},
 wine:(X,Y,x,y)=>{r(X,Y,16,16,'#231C2B');r(X+1,Y+2,14,13,'#3E2A20');g.strokeStyle='#5A3E2A';g.lineWidth=1;g.beginPath();for(let i=-16;i<16;i+=6){g.moveTo(X+1+i,Y+2);g.lineTo(X+15+i,Y+15);g.moveTo(X+15-i,Y+2);g.lineTo(X+1-i,Y+15)}g.stroke();
  for(let i=0;i<3;i++)for(let j=0;j<2;j++)r(X+3+i*4+(j?2:0),Y+5+j*5,2,2,(i+j+x)%3?'#2E5A3A':'#6A1A2A');r(X,Y+14,16,2,'#2A2232')},
 vip:(X,Y,x,y)=>{r(X,Y,16,16,'#231C2B');r(X+1,Y+3,14,12,'#4A3A30');r(X+2,Y+4,12,6,'#5E4A3C');r(X+1,Y+3,14,1,'#6E5A4A');[4,8,12].forEach(a=>r(X+a,Y+6,1,1,'#3A2C24'));r(X+1,Y+13,14,2,'#2E241E');const h=hash(x,y);r(X+2+h%10,Y+5,2,1,'#8A8078');r(X+3+(h*3)%9,Y+11,1,1,'#8A8078')},
 junk:(X,Y,x,y)=>{cfloor(X,Y,x,y);const h=hash(x,y)%3;if(h===0){r(X+1,Y+4,14,11,'#6A4E34');r(X+1,Y+4,14,2,'#86643E');r(X+7,Y+4,2,11,'#4A3422')}
  else if(h===1){r(X+2,Y+6,8,9,'#5A5462');r(X+2,Y+6,8,1,'#6E6878');r(X+8,Y+2,7,8,'#6A4E34');r(X+8,Y+2,7,1,'#86643E')}else{r(X+3,Y+3,10,2,'#8A93A0');r(X+3,Y+5,2,10,'#6E7680');r(X+11,Y+5,2,10,'#6E7680');r(X+3,Y+9,10,1,'#8A93A0');r(X+1,Y+12,6,3,'#3A3046')}},
 stairs:(X,Y,x,y)=>{for(let i=0;i<4;i++){r(X,Y+i*4,16,4,i%2?'#6A6272':'#827A8C');r(X,Y+i*4,16,1,'#9A92A4')}r(X,Y,1,16,'#231C2B');r(X+15,Y,1,16,'#231C2B')},
};

/* ---------- zones ---------- */
const ZONES={
 hq:{name:'산타 로사 경찰서',reg:'SANTA ROSA POLICE HQ',
  legend:{'#':{tile:'hqWall'},'w':{tile:'hqWin'},'B':{tile:'board'},'k':{tile:'cellWall'},'.':{tile:'hqFloor',walk:1},'c':{tile:'cellFloor',walk:1},'d':{tile:'desk'},
   'g':{tile:'glass'},'X':{tile:'exo'},'m':{tile:'mirror',walk:1},'V':{tile:'console2',walk:1},'L':{tile:'lab'},'p':{tile:'plant'},'T':{tile:'terminal'},'D':{tile:'hqDoor',walk:1}},
  map:[
"######################",
"#wwww#BBBBBBBBB#kkkkk#",
"#T...#.........#ccXcc#",
"#d...#..dd.dd..#ccccc#",
"#d.............#ggmgg#",
"#V...#.........#.....#",
"###.##..dd.dd........#",
"#LLL.#...............#",
"#....#.......p..######",
"#.L..#...............#",
"#....................#",
"#..L.#..p.........p..#",
"##########DD##########"],
  rooms:[[1,1,4,5,'경찰서 · 국장실'],[6,1,14,11,'경찰서 · 수사과'],[16,1,20,4,'경찰서 · 취조실'],[15,4,20,7,'경찰서 · 모니터실'],[1,7,4,11,'경찰서 · 감식실']],
  warps:{'10,12':{to:'city',x:5,y:3,dir:'down'},'11,12':{to:'city',x:5,y:3,dir:'down'},
   '1,5':{to:'tower',x:3,y:3,dir:'right',lock:()=>!f().tail?'루치아의 영상 콘솔. 지금은 신호가 없어요.':f().capsule?'영상이 끊겼어요. 신호 없음.':false}},
  spots:{
   '1,1':'창밖에 보라색 자카란다 나무가 보여요.','3,1':'창밖으로 케이블카가 지나가요.',
   get '7,1'(){return f().liliana?'수사 보드. 세 조직: 하나는 우리. 둘은 릴리아나와 토셰. 셋은 메두사와 사디아.':f().sting?'수사 보드. 세 조직. 둘: 토셰? 셋: 사디아 — 메두사?':'수사 보드. 곤디아에 정보원 조직이 적어도 세 개.'},
   get '9,1'(){return f().boom?'루치아의 사진. 검은 리본이 있어요.':'수사 보드. 디어랙 거리 총격전 사진. 다섯 명이 죽었어요.'},
   '11,1':'수사 보드. 빨간 실이 사진과 사진을 이어요.',
   get '13,1'(){return f().liliana?'"앙투아네트-2버그" 사진 위에 빨간 글씨: 릴리아나.':'수사 보드. 아직 빈 자리가 있어요.'},
   '1,3':'테렌스의 책상. 가족사진이 있어요. 히메나, 알잔, 바닐다.','1,4':'책상 위에 서류가 많아요. 다 "기밀"이에요.',
   '8,3':'경찰 화면: "디어랙 거리 · 사망 5명"','12,3':'누가 커피를 두고 갔어요. 아직 따뜻해요.',
   '2,7':'현미경이에요.','3,7':'감식 화면: 초록 불빛이 깜빡여요.','13,8':'화분이에요. 잎이 반짝반짝해요.',
   get '18,2'(){return f().bopbeDead?'구속 의자. 바닥에 검게 탄 자국이 있어요.':'구속 의자예요. 금속 틀이 사람 몸을 잡아요.'}},
  things:{
   '#':['경찰서 벽이에요. 파란 줄이 그어져 있어요.','벽에 오래된 공지 자국이 남아 있어요.','차가운 벽이에요. 어디선가 전화가 울려요.'],
   'w':(x,y)=>f().occupied?'창밖 거리가 텅 비었어요. 지금은 통금이에요.':vary(x,y,['창밖에 크림색 건물들이 보여요.','창밖 자카란다 나무에 보라색 꽃이 가득해요.']),
   'B':['수사 보드. 사진이 빼곡해요.','빨간 실이 이리저리 이어져 있어요.','메모마다 물음표가 많아요.'],
   'k':['취조실 벽이에요. 소리가 밖으로 안 새요.','두꺼운 벽이에요. 작은 구멍이 줄지어 있어요.'],
   'd':['형사의 책상이에요. 일이 많아 보여요.','책상 위에 서류가 쌓여 있어요. 커피는 식었어요.'],
   'g':['두꺼운 유리벽. 취조실 안이 다 보여요.','유리에 손자국이 조금 있어요.'],
   'L':['감식 장비예요. 함부로 만지면 안 돼요.','하얀 책상이 아주 깨끗해요. 약 냄새가 나요.'],
   'p':'화분이에요. 누가 매일 물을 줘요.'},
  npcs:['lucia','luciaCell','bopbe','bersche','medusa','lab','news','maria','feed']},
 city:{name:'산타 로사',reg:'SANTA ROSA · GONDIAR',outdoor:1,
  legend:{'L':{tile:'bld'},'H':{tile:'bld'},'Z':{tile:'bld'},'F':{tile:'bld'},'K':{tile:'bld'},'D':{tile:'cityDoor',walk:1},',':{tile:'stone',walk:1},'.':{tile:'lawn',walk:1},
   'r':{tile:'road',walk:1},'v':{tile:'vroad',walk:1},'j':{tile:'jaca'},'h':{tile:'holo'},'q':{tile:'qix'},'m':{tile:'memo'},'n':{tile:'bench'},'M':{tile:'manWall'},'G':{tile:'manGate',walk:1},
   'A':{tile:'tower'},'E':{tile:'lift'},'C':{tile:'car',walk:1}},
  map:[
"LLHHHHHHHLLZZZZZLLFFFFFLLKKKKL",
"LLHHHHHHHLLZZZZZLLFFFFFLLKKKKL",
"LLHHHDHHHLLZZZZZLLFFDFFLLKDKKL",
",j,,,,,,,j,,,,,,,j,,,,C,j,,,,,",
"rrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
"rrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
",,,,,,,,,,,,,vvvv,,,,,,,,,,,,,",
"j..h......qq.vvvv..j....MMMMMj",
"j...mmmm.....vvvv.......MMMMMj",
"j.n.mmmm..n..vvvv..n....MMMMMj",
"j.........j..vvvv...j...MMGMMj",
"j............vvvv,,,,,,,,,,,,j",
"jjjjjjjjjjjjjvvvvjjjjjjjjjjjjj",
"j..........,,,,,,,,..........j",
"j...j......,,,EE,,,......j...j",
"j.........AAAAAAAAAA.........j",
"j...j.....AAAAAAAAAA.....j...j",
"jjjjjjjjjjAAAAAAAAAAjjjjjjjjjj"],
  rooms:[[0,0,29,6,'산타 로사 · 디어랙 거리'],[24,5,29,6,'산타 로사 · 소노마 거리'],[0,7,23,11,'산타 로사 · 광장'],[24,7,29,11,'산타 로사 · 총독 저택 앞'],[0,12,29,17,'산타 로사 · 탑 언덕']],
  warps:{
   '5,2':{to:'hq',x:10,y:11,dir:'up'},
   '20,2':{to:'bar',x:7,y:8,dir:'up'},
   '26,2':{to:'club',x:16,y:2,dir:'down',lock:()=>!f().club&&'다크 파라다이스 클럽. 갱들의 클럽이에요. 지금은 들어갈 이유가 없어요.'},
   '26,10':{to:'mansion',x:9,y:10,dir:'up',lock:()=>!f().liliana&&'총독 원형 저택이에요. 경비가 막아요. "오늘은 손님이 없어요."'},
   '22,3':{to:'villa',x:8,y:8,dir:'up',lock:()=>!f().missile&&'테렌스의 차예요. 하프니르의 집까지 구백 킬로미터예요.'}},
  spots:{
   '3,2':'산타 로사 경찰서. 파란 간판에 금색 별이 있어요.','13,2':'"지카르의 안디 수리". 창문에 로봇 머리가 가득해요.',
   '19,2':'"플리시 다이아몬드". 다이아몬드 모양 간판이 깜빡여요.','28,2':'다크 파라다이스 클럽. 분홍색 불빛이 지지직거려요.',
   get '3,7'(){return f().occupied?'홀로그램: 제국 깃발. "질서와 평화."':'홀로그램 광고: "하프니르 새 빌라, 바다가 보여요!"'},
   '10,7':'벽에 "Q-I-X". 망명한 여왕을 믿는 사람들의 표시예요. 누가 지금도 그리고 있어요.','11,7':'벽에 "Q-I-X". 페인트가 아직 안 말랐어요.',
   get '5,8'(){return f().occupied?'꽃밭이에요. 나무에 검은 리본이 아직 남아 있어요.':f().boom?'꽃과 촛불. 캡슐 테러로 죽은 이백삼십칠 명의 사진이 있어요. 루치아도 있어요.':'꽃밭이에요. 자카란다 꽃잎이 떨어져요.'},
   get '6,9'(){return f().occupied?'꽃밭이에요. 벌이 날아다녀요.':f().boom?'작은 신발이 있어요. 아이들도 스무 명 죽었어요.':'꽃밭이에요. 벌이 날아다녀요.'},
   '24,9':'총독 원형 저택의 담. 십 미터 높이의 리브스톤이에요.',
   get '12,15'(){return f().occupied?'산타 로사 탑. 탑 꼭대기, 하이 로사에 제국 항모가 붙었어요. 밤에는 분홍색 점, 돌로드가 떠요.':'산타 로사 탑. 줄이 하늘 끝, 하이 로사까지 올라가요.'},
   '17,15':'탑 아래쪽. 빨간 불이 깜빡여요.','14,14':'탑 캡슐 역. 하이 로사까지 올라가요.','15,14':'탑 캡슐 역. 사람들이 줄을 서 있어요.'},
  things:{
   'j':(x,y)=>vary(x,y,f().occupied?['자카란다 나무. 보라색 꽃이 가득해요.','나무 속 광고가 다 꺼졌어요.']:['자카란다 나무. 보라색 꽃이 가득해요.','보라색 꽃잎이 바람에 떨어져요.','나무 사이에 작은 홀로그램 광고가 있어요.']),
   'A':(x,y)=>x===14||x===15?'검은 탑이 하늘 끝까지 곧게 올라가요.':vary(x,y,['산타 로사 탑의 아래쪽. 아주 큰 금속 벽이에요.','탑에서 낮게 웅웅 소리가 나요.']),
   'L':['크림색 리브스톤 건물이에요.','창문 안에서 누가 커튼을 쳐요.','건물 위로 케이블카 줄이 지나가요.'],
   'H':['산타 로사 경찰서 건물. 파란 띠가 둘러 있어요.','경찰서 창문. 안에서 형사들이 바빠요.'],
   'Z':['진열창 안에 안디 머리들이 줄지어 있어요.','"지카르의 안디 수리" 가게예요. 기름 냄새가 나요.'],
   'F':['플리시 다이아몬드 바. 창문 불빛이 따뜻해요.','바 안에서 잔 부딪치는 소리가 들려요.'],
   'K':(x,y)=>f().club?'클럽이 비어 있어요. 네온만 혼자 깜빡여요.':f().occupied?'다크 파라다이스 클럽. 문이 굳게 잠겨 있어요.':vary(x,y,['다크 파라다이스 클럽. 분홍 네온이 지지직거려요.','클럽 안에서 음악이 쿵쿵 울려요.']),
   'M':['높은 리브스톤 담이에요. 위에 센서가 줄지어 있어요.','담 너머로 정원의 나무가 보여요.'],
   'n':['벤치예요. 빵 부스러기가 조금 있어요.','벤치에 앉으면 광장이 다 보여요.'],
   'm':(x,y)=>f().occupied?'꽃밭이에요. 나무에 검은 리본이 아직 남아 있어요.':vary(x,y,f().boom?['꽃과 촛불이 가득해요. 사람들이 조용히 울어요.','촛불 옆에 손으로 쓴 편지가 있어요.']:['꽃밭이에요. 노란 꽃, 분홍 꽃, 하얀 꽃.','꽃밭 위로 나비가 날아요.'])},
  npcs:['zikar','snatch','aljan','vanilda','pro1','pro2','pro3','jimena','zelinda','medusaSt','general','lion1','lion2','ghost1','ghost2','ghost3']},
 tower:{name:'하이 로사 · 루치아의 영상',reg:"HIGH ROSA · LUĆIA'S FEED",base:'plate',
  legend:{'G':{tile:'girder'},'B':{tile:'bay'},'.':{tile:'plate',walk:1},'t':{tile:'track',walk:1},'E':{tile:'lift'},'s':{tile:'seat'},'W':{tile:'capWin'},'C':{tile:'hatch',walk:1}},
  map:[
"GGGGGGGGGGGGGGGGGGGGGGGG",
"GBBBBBBBBGGGGGGGGGGGGGGG",
"G.........GG...........G",
"G.E.......GG...........G",
"Gttttttttttttttttttttt.G",
"G......................G",
"GGGGGGGGGG....GGGGGGGGGG",
"G.....................CG",
"G.ss.ss.ss.ss.ss.ss...CG",
"G......................G",
"G.ss.ss.ss.ss.ss.ss....G",
"G......................G",
"WWWWWWWWWWWWWWWWWWWWWWWW",
"WWWWWWWWWWWWWWWWWWWWWWWW"],
  rooms:[[1,2,9,5,'하이 로사 · 3F 정박장'],[12,2,22,5,'하이 로사 · 3층 독'],[1,7,22,11,'하이 로사 · 캡슐 역 라운지']],
  warps:{'22,7':{to:'hq',x:2,y:4,dir:'up',lock:()=>!f().capsule&&'캡슐 승강장. 토셰는 어디 있어요?'},'22,8':{to:'hq',x:2,y:4,dir:'up',lock:()=>!f().capsule&&'캡슐 승강장. 토셰는 어디 있어요?'}},
  spots:{'3,1':'시벨레스 이글호. 3F 정박장에 붙어 있어요.','5,1':'통마다 색과 재료가 달라요. 여러 곳에서 만들었어요.','8,1':'배 엔진이 파랗게 빛나요.',
   '10,2':'철골 사이로 무중력 작업자들이 날아다녀요.',
   '2,3':'엘리베이터. 아래 층 정박장으로 가요.',
   get '12,12'(){return f().boom?'창밖 아래, 빛나는 조각들이 우주로 흩어져요.':'창밖 아래에 곤디아가 있어요. 탑의 줄이 땅까지 내려가요.'}},
  things:{
   'G':['철골 사이로 성운 빛이 보여요.','차가운 철골이에요. 작은 불빛이 깜빡여요.','노란 줄무늬 경고 표시가 있어요.'],
   'W':(x,y)=>f().boom?vary(x,y,['창밖 아래, 탑 옆에서 빛나는 조각들이 흩어져요.','창밖에 곤디아가 보여요. 아무도 말이 없어요.']):f().capsule?'캡슐 문이 곧 닫혀요. 서둘러야 돼요.':vary(x,y,['창밖 아래에 초록 곤디아가 아주 커요.','유리창 너머로 성운이 가득해요.']),
   's':['빨간 의자예요. 몸을 묶는 끈이 달려 있어요.','빈 컵 하나가 의자 위에 둥둥 떠 있어요.'],
   'B':['여러 모양의 통을 이어 붙인 배예요.','배와 독 사이에 두꺼운 관이 이어져 있어요.']},
  npcs:['tose','cleaner']},
 mansion:{name:'총독 원형 저택',reg:'ROUNDHOUSE · SANTA ROSA',
  legend:{'p':{tile:'garden'},'R':{tile:'rail'},'c':{tile:'coralWall'},'a':{tile:'arch'},',':{tile:'balc',walk:1},'.':{tile:'manFloor',walk:1},'u':{tile:'cushion'},'o':{tile:'palm'},'D':{tile:'manDoor',walk:1}},
  map:[
"pppppppppppppppppppp",
"pppppppppppppppppppp",
"ccccRRRRRRRRRRRRcccc",
"cccc,,,,,,,,,,,,cccc",
"caaccaacc,,ccaaccaac",
"c..................c",
"c..uu..........uu..c",
"c..................c",
"c.o..............o.c",
"c..................c",
"c..................c",
"cccccccccDDccccccccc"],
  rooms:[[4,3,15,3,'총독 저택 · 발코니']],
  warps:{'9,11':{to:'city',x:26,y:11,dir:'down'},'10,11':{to:'city',x:26,y:11,dir:'down'}},
  spots:{'6,2':'난간 아래에 정원이 있어요. 가는 야자나무들이 흔들려요.','12,2':'멀리 공원 너머에 높은 건물들이 보여요. 저 어딘가에…',
   '2,4':'높은 아치 창문. 금색 틀이에요.','14,4':'아치 창문 밖으로 발코니와 정원이 보여요.',
   '3,6':'작은 빨간 카펫이에요. 금색 테두리.','16,6':'작은 빨간 카펫이에요.'},
  things:{
   'c':['분홍색 산호 리브스톤 벽이에요.','벽에 작은 금색, 은색 점이 박혀 있어요.'],
   'p':['아래 정원에 하얀 길이 나 있어요.','정원의 나무들이 바람에 흔들려요.'],
   'R':(x,y)=>f().shot&&!f().occupied?'난간에 피가 튀어 있어요. 빨리 나가야 돼요.':vary(x,y,['분홍색 난간이에요. 아주 매끈해요.','난간 아래로 정원이 내려다보여요.']),
   'a':['높은 아치 창문이에요. 밖에 넓은 발코니가 있어요.','금색 틀이 반짝반짝해요.'],
   'u':'빨간 카펫이에요. 아주 부드러워요.',
   'o':'금색 화분에 야자나무가 있어요.'},
  npcs:['makaio']},
 villa:{name:'하프니르 · 테렌스의 빌라',reg:'HAFNIR · RYDEMOUTH',
  legend:{'~':{tile:'sea'},'s':{tile:'sand'},'V':{tile:'vWall'},'w':{tile:'vWin'},'.':{tile:'vFloor',walk:1},'u':{tile:'cushion'},'o':{tile:'palm'},'D':{tile:'vDoor',walk:1}},
  map:[
"~~~~~~~~~~~~~~~~~~",
"ssssssssssssssssss",
"VwwwwwwVVwwwwwwwwV",
"V................V",
"V..uu.......uu...V",
"V................V",
"V.o............o.V",
"V................V",
"V................V",
"VVVVVVVVDDVVVVVVVV"],
  warps:{'8,9':{to:'city',x:21,y:3,dir:'down'},'9,9':{to:'city',x:21,y:3,dir:'down'}},
  spots:{'3,1':'하얀 모래 해변. 파도 소리가 들려요.','4,2':'창밖에 바다. 오늘은 바다도 조용해요.','12,2':'창밖에 바다. 멀리 배가 하나 지나가요.',
   '3,4':'쿠션 위에서 젊은 손님들이 자요. 로렐라, 두샨, 에버렛의 아이들.','13,4':'담요 아래에서 누가 잠꼬대를 해요.','2,6':'화분이에요. 야자나무 잎이 바람에 흔들려요.'},
  things:{
   'V':['하얀 벽이에요. 아주 매끈해요.','벽 옆에 손님들 가방이 쌓여 있어요.'],
   '~':['까만 바다. 파도가 천천히 와요.','밤바다가 까매요. 파도 소리만 들려요.'],
   's':['하얀 모래. 작은 조개껍데기가 있어요.','모래 위에 발자국이 많아요.'],
   'w':['창밖에 바다와 하얀 모래가 보여요.','창문이 조금 열려 있어요. 바다 냄새가 나요.'],
   'u':'담요 아래 누가 자요. 울다가 잠들었어요.',
   'o':'야자나무 화분이에요. 잎 끝이 조금 말랐어요.'},
  npcs:['otylia','zelindaS','aljanS','haian']},
 bar:{name:'플리시 다이아몬드',reg:'FLEESH DIAMOND · BAUME AVE',
  legend:{'#':{tile:'barWall'},'h':{tile:'shelf'},'w':{tile:'barWin'},'.':{tile:'barFloor',walk:1},'b':{tile:'counter',over:1},'t':{tile:'table'},'k':{tile:'booth'},'D':{tile:'barDoor',walk:1}},
  map:[
"################",
"#hhhhhhh##wwwww#",
"#.......##.t.t.#",
"#bbbbbb........#",
"#..............#",
"#..............#",
"#.kk......kk...#",
"#..............#",
"#..............#",
"#######DD#######"],
  warps:{'7,9':{to:'city',x:20,y:3,dir:'down'},'8,9':{to:'city',x:20,y:3,dir:'down'}},
  spots:{'3,1':'술병이 가득해요. 초록, 노랑, 빨강.','11,1':'창밖은 바우메 거리. 비가 와요.','13,1':'창밖으로 노란 글로브캡이 지나가요.',
   '2,6':'가죽 소파. 오래돼서 반짝반짝해요.','10,6':'가죽 소파. 누가 신문을 두고 갔어요.'},
  things:{
   '#':['나무 벽이에요. 따뜻한 램프가 걸려 있어요.','오래된 나무 냄새가 나요.'],
   'h':['술병이 줄지어 있어요.','병 하나가 램프 불빛에 반짝여요.'],
   'b':['바 카운터. 반질반질한 나무예요.','카운터 위에 빈 잔이 있어요.'],
   'w':'창밖 거리에 분홍 네온 불빛이 비쳐요.',
   't':'작은 탁자 위에 촛불이 흔들려요.',
   'k':'빨간 가죽 자리예요. 푹신해요.'},
  npcs:['barman','spirit']},
 club:{name:'다크 파라다이스 · 지하',reg:'DARK PARADISE CLUB · BASEMENT',
  legend:{'#':{tile:'clubWall'},'R':{tile:'rack'},'W':{tile:'wine'},'v':{tile:'vip'},'.':{tile:'clubFloor',walk:1},'x':{tile:'junk'},'S':{tile:'stairs',walk:1}},
  map:[
"##################",
"#RRR#WWWWWW#vvv.S#",
"#...#......#.....#",
"#................#",
"#.xx..........xx.#",
"#.xx.............#",
"#................#",
"#................#",
"#.........x......#",
"#..xx............#",
"#................#",
"##################"],
  warps:{'16,1':{to:'city',x:26,y:3,dir:'down'}},
  spots:{'2,1':'낡은 무대 장비와 광고 기계예요. 먼지투성이예요.','6,1':'와인 선반… 가짜예요! 뒤에 총이 숨어 있어요.','8,1':'와인 병이 다 비어 있어요. 뒤에 무기 상자가 있어요.',
   '13,1':'아주 낡은 가구들이에요. 소파에 먼지가 쌓였어요.','2,4':'상자만 남았어요. 스탄바8 갱은 다 잡혀갔어요.','10,8':'부서진 의자들이 쌓여 있어요.'},
  things:{
   '#':['어두운 지하 벽이에요. 공기가 아주 말라 있어요.','벽에 금이 가 있어요.'],
   'x':['상자와 부서진 물건이 쌓여 있어요.','먼지투성이예요. 안은 비어 있어요.'],
   'W':'와인 선반이에요. 이것도 뒤에 뭐가 있을까요?',
   'R':'낡은 음료 광고 기계예요. 지금은 없는 상표예요.',
   'v':'오래된 소파예요. 먼지가 가득 쌓였어요.'},
  npcs:['patch','jimenaC']},
};

/* ---------- people ---------- */
const NPC={
 lucia:{name:'루치아',zone:'hq',x:10,y:4,dir:'left',look:L_LUCIA,badge:['수사','정보원'],
  hide:()=>!!f().tail||(b('정보원')&&!f().bopbeDead),
  after:'수사는 천천히, 정확하게. 국장님이 가르쳐 줬어요.',
  script:()=>{
   if(!b('정보원'))return null;
   if(!b('처형'))return [{say:'봅베가… 불에 탔어요. 제 손도 조금 데었어요.'},{say:'괜찮아요. 일주일만 쉬면 돼요. {감식실|감식실}에 가 봐요.'}];
   if(!f().sting)return [{say:'지카르 가게는 경찰서 앞 거리에 있어요.'},{say:'가면 쓰는 거 잊지 마세요. 국장님이 지카르예요!'}];
   if(!b('감시하다'))return [{say:'베르셰가 취조실에 있어요. 지카르를 납치하려고 했던 사람이에요.'}];
   return null},
  talk:()=>[
   {say:'국장님, 왔어요? 봅베가 {취조실|취조실}에서 기다려요.'},
   {say:'어젯밤 디어랙 거리 총격전, 아직 모르는 게 많아요.'},
   Q.lucia[0],
   {say:'봅베는 그냥 범인이 아니에요. 다른 {아콘|아콘}을 위해서 일해요.'},
   Q.lucia[1],
   {say:'곤디아에 정보원 조직이 적어도 세 개 있는 것 같아요.'},
   {who:'테렌스',say:'하나는 우리 조직이고요. 나머지 두 개를 찾아요.'},
   {say:'제가 취조실에 들어갈게요. 국장님은 모니터실에서 보세요. 봅베가 국장님 얼굴을 보면 안 돼요.',award:['수사','정보원'],walk:{npc:'luciaCell',from:[10,4]}}]},
 luciaCell:{name:'루치아',zone:'hq',x:17,y:3,dir:'right',look:L_LUCIA,still:1,hide:()=>!b('정보원')||!!f().bopbeDead,talk:()=>[{say:'…'}]},
 bopbe:{name:'봅베',zone:'hq',x:18,y:3,dir:'down',badge:['체포하다'],
  get look(){return f().burn&&!f().bopbeDead?FIRE[Math.floor(performance.now()/140)%2]:L_BOPBE},
  hide:()=>!!f().bopbeDead,
  status:()=>b('수사')?'todo':null,
  script:()=>!b('수사')?[{say:'…형사님은 누구예요? 저는 높은 사람하고만 말해요.'}]:null,
  talk:()=>[
   {who:'…',say:'테렌스는 모니터실, 거울 뒤에 있어요. 취조실에는 루치아가 들어가요.'},
   {say:'오, 형사님. 제 새 얼굴 어때요? 멋있죠?'},
   {who:'루치아',say:'봅베 씨, 당신은 이제 산타 로사 경찰서에 있어요.'},
   Q.bopbe[0],
   {say:'디어랙 거리요? 거기 있던 사람들이 저를 잡으려고 했어요. 저는 피해자예요.'},
   Q.bopbe[1],
   {who:'루치아',say:'누구를 위해서 일해요? 말하면 도와줄 수 있어요.'},
   {say:'…테렌스 씨는 어디 있어요? 거울 뒤에 있죠? 이리 들어와요. 어른끼리 이야기해요.'},
   {say:'아, 뜨거워요! 몸 안이… 뜨거워요!',set:()=>{f().burn=1}},
   {who:'…',say:'봅베의 몸에서 불이 나요! 아무도 막을 수 없어요.'},
   {who:'테렌스 (마이크)',say:'루치아, 나와요! 지금!'},
   {who:'…',say:'루치아가 뛰어나와요. 손을 조금 데었어요. 의자에는 검은 재만 남았어요.',award:['체포하다'],set:()=>{f().bopbeDead=1}}]},
 lab:{name:'감식 요원',zone:'hq',x:2,y:8,dir:'up',look:{hair:'#3A2A22',skin:'#C99470',shirt:'#F1F1EC',pants:'#3C4A5C',style:'short',coat:1},badge:['처형','증거'],
  status:()=>{if(!f().bopbeDead)return null;if(b('처형')&&f().helmet&&!f().liliana)return 'todo'},
  after:'증거는 거짓말을 안 해요. 사람은 해요.',
  script:()=>{
   if(!f().bopbeDead)return [{say:'요즘은 조용해요. 감식할 게 없어요.'}];
   if(b('처형')&&f().helmet&&!f().liliana)return [
    {who:'…',say:'석 달 후. 테렌스는 3F 독 영상을 백 번째로 다시 봐요.'},
    {who:'테렌스',say:'이 여자 보세요. "앙투아네트-2버그". 시벨레스 이글호에 들어갔어요. 그런데 다시 안 나왔어요.'},
    {say:'얼굴 검색 결과가 나왔어요. 옛날 영상에도 있어요. 경제 심포지엄에서 기보이 엔포하고 이야기해요.'},
    {who:'테렌스',say:'메두사가 말한 그 여자… {체렌코프 칼|체렌코프 칼}을 가진 여자. 릴리아나예요.'},
    {w:'증거',build:['이 영상이','중요한','증거예요']},
    {who:'메두사 (통신)',say:'사진 봤어요. 그 여자예요? 그리고 토셰는 아르카디아의 달하고 간스부트호를 빌리려고 했어요.'},
    {who:'메두사 (통신)',say:'이 정보, 몇 점이에요? 저는 이 별에 남고 싶어요.',give:'캡슐 역 영상'},
    {who:'…',say:'열 달 후, 비밀 통신이 와요.'},
    {who:'테렌스 (비밀 통신)',say:'…마카이오 님? 곤디아에 오셨어요? 총독 저택이요?',set:()=>{f().liliana=1}}];
   return null},
  talk:()=>[
   {say:'국장님, 봅베의 재를 봤어요.'},
   {say:'재 안에 아주 작은 {나노 기계|나노 기계}가 있었어요. 처음부터 몸 안에 있었어요.'},
   Q.lab[0],
   {say:'봅베가 잡히면 나노 기계가 몸을 태워요. 조직이 그렇게 만들었어요.'},
   Q.lab[1],
   {say:'그리고 루치아 팀의 정보원이 연락했어요. 일레븐 톡식스 안에 있는 사람이에요.'},
   {say:'부두목 베르셰가 부하 셋을 보내요. 지카르 타소트를 잡아서 질문하려고요. 봅베 일하고 비슷해요.'},
   {who:'테렌스',say:'그럼 제가 지카르가 될게요.'},
   {say:'이건 {오더바이저|오더바이저} 가면이에요. 쓰면 지카르 얼굴이 돼요.',give:'오더바이저 가면',award:['처형','증거'],set:()=>{f().lead=1}}]},
 news:{name:'뉴스 화면',zone:'hq',x:10,y:8,dir:'down',look:NEWS,still:1,
  status:()=>nextNews()?'todo':null,
  script:()=>{const e=nextNews();if(e)return e.steps.concat([{who:'뉴스 화면',say:'— 방송 끝 —',set:()=>{f()['news'+e.id]=1}}]);
   const F=f();return [{who:'뉴스 화면',say:F.occupied?'관리관 명령: 모두 지금 집으로 돌아가세요.':F.boom?'캡슐 테러 희생자 이백삼십칠 명. 범인은 아직 몰라요.':'오늘 산타 로사 날씨는 맑아요. 자카란다 꽃이 피었어요.'}]},
  talk:()=>[]},
 maria:{name:'마리아 호세 서장',zone:'hq',x:14,y:3,dir:'left',look:{hair:'#2A1E1A',skin:'#C48E66',shirt:'#2F3E5C',pants:'#22283A',belt:'#C9A64A',style:'bun',cap:'#2F3E5C',lashes:1,lips:'#9A4A4A'},badge:['폭발'],
  hide:()=>!f().boom,
  after:'여기는 경찰서예요. 아콘의 놀이터가 아니에요.',
  script:()=>f().occupied?[
   {say:'국장님, 메두사 어디 있어요? 국장님이 데려갔죠?'},
   {who:'테렌스',say:'모르겠어요.'},
   {who:'…',say:'메두사는 페나코바 호스피스에 있어요. 다른 이름으로, 깊이 잠들어서.'},
   {who:'…',say:'잡히면 죽여 달라고 했어요. 테렌스는 그 약속을 기억해요.'}]:null,
  talk:()=>[
   {say:'테렌스 국장님. 저는 새 서장, 마리아 호세예요.'},
   {say:'캡슐이 산타 로사로 내려가다가 터졌어요.'},
   Q.maria[0],
   {say:'이백삼십칠 명이 타고 있었어요. 그중 스무 명은 아이들이었어요.'},
   Q.maria[1],
   {say:'그리고 하나 더. 아콘 놀이는 이제 끝이에요, 국장님.',award:['폭발']}]},
 feed:{name:'루치아의 영상',zone:'hq',x:4,y:2,dir:'down',look:MONITOR,still:1,
  status:()=>f().capsule&&!f().boom?'todo':null,
  script:()=>{const F=f();
   if(F.capsule&&!F.boom)return [
    {who:'루치아 (통신)',say:'국장님… 토셰가 안 보여요. 캡슐에서 내린 것 같아요.'},
    {who:'루치아 (통신)',say:'캡슐이 출발했어요. 사람이 많아요. 아이들도…'},
    {who:'…',say:'화면이 하얘져요. 그리고 신호가 끊겨요.',set:()=>{f().boom=1;f().boomAt=Date.now()}},
    {who:'…',say:'테렌스가 사무실 창문에 손을 대요. 탑 위에 하얀 구름이 퍼져요.'},
    {who:'테렌스',say:'루치아… 루치아!'}];
   if(F.boom)return [{who:'…',say:'화면에는 "신호 없음"만 있어요.'}];
   if(F.tail)return [{who:'루치아 (통신)',say:'국장님, 저 하이 로사 3층 독이에요. 벽의 큰 콘솔에서 제 영상을 보세요.'}];
   return [{who:'…',say:'루치아의 영상 화면이에요. 지금은 꺼져 있어요.'}]},
  talk:()=>[]},
 bersche:{name:'베르셰',zone:'hq',x:18,y:3,dir:'down',look:{hair:'#8A2A2A',skin:'#C48E66',shirt:'#2A2A2A',pants:'#3A3A40',belt:'#B8B8C0',style:'spiky'},badge:['감시하다'],
  hide:()=>!f().sting||!!f().medusa,
  after:'메두사는 무서운 여자예요. 저는 이제 끝났어요.',
  talk:()=>[
   {say:'변호사 불러요. 저는 아무 말도 안 해요.'},
   {who:'테렌스',say:'일레븐 톡식스가 다 말했어요. 당신이 그 사람들 부두목이죠?'},
   {say:'…좋아요. 저는 몇 주 동안 지카르 가게를 지켜봤어요.'},
   Q.bersche[0],
   {who:'테렌스',say:'누가 시켰어요?'},
   {say:'메두사요. 머리가 무지개색인 여자요.'},
   {who:'테렌스',say:'메두사… 세 번째 조직, 사디아의 사람이에요.'},
   Q.bersche[1],
   {who:'루치아',say:'국장님! 토셰가 시벨레스 이글호를 타고 와요. 하이 로사 3층 독이에요.'},
   {who:'루치아',say:'제가 올라가서 감시할게요. 국장님은 사무실에서 제 영상을 보세요!',award:['감시하다'],set:()=>{f().tail=1}}]},
 medusa:{name:'메두사',zone:'hq',x:18,y:3,dir:'down',look:{hair:'#2A1E18',skin:'#5A3A2A',shirt:'#26232B',pants:'#26232B',style:'bald',cap:'#E6DCC2',lashes:1,lips:'#6A2E2A'},badge:['폭탄'],
  hide:()=>!f().medusa||!!f().occupied,
  after:'저를 와이니드로 보내지 마세요. 부탁이에요.',
  talk:()=>[
   {say:'이 뼈 헬멧, 기분 나빠요. 거짓말하면 다 보이죠?'},
   {who:'테렌스',say:'캡슐을 터뜨린 사람은 누구예요?'},
   {say:'저 아니에요. 사디아 님도 아니에요.'},
   Q.medusa[0],
   {say:'두 번째 조직이에요. 대장은 여자예요.'},
   {say:'그 여자는 {체렌코프 칼|체렌코프 칼}을 써요. 마르첼루를 잘 알았어요.'},
   Q.medusa[1],
   {who:'…',say:'헬멧의 불이 초록색이에요. 메두사는 진실을 말했어요.',award:['폭탄'],set:()=>{f().helmet=1}}]},
 /* city */
 zikar:{name:'지카르 타소트',zone:'city',x:13,y:3,dir:'down',look:L_ZIKAR,badge:['변장하다','단서'],
  hide:()=>!!f().occupied||(!!f().disguised&&!f().sting),  // inside his shop while you wear his face
  status:()=>{if(!f().lead)return null;if(!b('변장하다'))return 'todo';if(!f().sting)return 'wait';if(!b('단서'))return 'todo'},
  pool:()=>[...Q.zikar,...Q.zikar2],
  script:()=>{
   if(!f().lead)return [{say:'뭐예요? 손님 아니면 가요. 바빠요.'}];
   if(!b('변장하다'))return null;
   if(!f().sting)return [{say:'저는 안에 숨어 있을게요. 빨리 끝내 주세요!'}];
   if(b('단서'))return null;
   return [
    {say:'잡았어요? 그 사람들, {일레븐 톡식스|일레븐 톡식스}예요. 무서운 갱이에요.'},
    {who:'테렌스',say:'지카르 씨, 이제 말해요. 최근에 뭘 만들었어요?'},
    {say:'…드론이요. 작은 {표적 드론|표적 드론}. 토셰라는 남자가 주문했어요.'},
    {say:'토셰는 아주 오래된 총을 써요. 아주 멀리서 쏘는 총이요.'},
    Q.zikar2[0],
    Q.zikar2[1],
    {say:'이게 드론 설계도예요. 가져가요. 저는 아무것도 몰라요!',give:'표적 드론 설계도',award:['단서']}]},
  after:'저는 그냥 수리공이에요. 정말이에요.',
  talk:()=>[
   {say:'어서 와요, 지카르의 {안디|안디} 수리 가게예요. 아, 경찰이네요.'},
   {who:'테렌스',say:'누군가 당신을 납치하려고 해요. 오늘 밤이요.'},
   {say:'네? 저를요? 왜요?'},
   {who:'테렌스',say:'그래서 제가 지카르 씨가 될 거예요. 이 가면으로요.'},
   Q.zikar[0],
   Q.zikar[1],
   {say:'저는 안에 숨을게요. 조심하세요!',award:['변장하다'],set:()=>{f().disguised=1}}]},
 snatch:{name:'납치범',zone:'city',x:10,y:3,dir:'right',look:{hair:'#2A2A2A',skin:'#B9825A',shirt:'#3A3A3A',pants:'#2A2A2A',cap:'#7A1E2A'},
  hide:()=>!f().disguised||!!f().sting,
  status:()=>'todo',
  talk:()=>[
   {say:'지카르 타소트? 우리랑 같이 가요. 조용히.'},
   {who:'테렌스',say:'좋아요. 그런데 저는 지카르가 아니에요.'},
   {who:'…',say:'테렌스가 가면을 벗어요.',take:['오더바이저 가면']},
   {who:'테렌스',say:'산타 로사 경찰이에요! 손 들어요!'},
   {who:'…',say:'경찰들이 사방에서 나와요. 납치범들은 도망갈 수 없어요.'},
   {say:'…일레븐 톡식스는 아무 말도 안 해요.',set:()=>{f().sting=1}}]},
 aljan:{name:'알잔',zone:'city',x:2,y:8,dir:'right',look:L_ALJAN,
  hide:()=>!!f().occupied,
  talk:()=>[
   {say:'아빠! 오늘 하프니르 해변 파티에 같이 가요. 엄마도 와요.'},
   {say:'로렐라도 와요. 오틸리아 아줌마 딸이요. 저… 로렐라랑 사귀어요.'},
   {say:'저는 의대 공부 때문에 바빠요. 그래도 파티는 가야죠!'}]},
 vanilda:{name:'바닐다',zone:'city',x:14,y:11,dir:'up',look:L_VANILDA,badge:['시위'],
  hide:()=>!!f().occupied,
  pos:()=>b('시위')?[12,10]:[14,11],
  status:()=>!f().sting?null:undefined,
  after:'{돈키|돈키}는 멈추지 않아요!',
  talk:()=>[
   {say:'아빠! 여기서 뭐 해요? 일하는 중이에요?'},
   {say:'우리는 {돈키|돈키}예요. 사람이 우리 미래를 결정해야 돼요!'},
   Q.vanilda[0],
   {who:'테렌스',say:'바닐다, 위험해. 곧 경찰이 많이 올 거야.'},
   {say:'아빠도 경찰이잖아요. 걱정하지 마세요.'},
   Q.vanilda[1],
   {say:'알았어요, 길을 열게요. 그래도 아빠, 우리 말이 맞아요!',award:['시위'],set:()=>{f().protest=1}}]},
 pro1:{name:'시위대',zone:'city',x:13,y:11,dir:'up',look:protester('#3A2A22','#C99470','#E8962A','#3A4A5A'),still:1,hide:()=>b('시위'),talk:()=>[{say:'사람이 먼저예요! 사람이 먼저예요!'}]},
 pro2:{name:'시위대',zone:'city',x:15,y:11,dir:'up',look:protester('#C9A64A','#F0C9A4','#F2D54A','#2E3548'),still:1,hide:()=>b('시위'),talk:()=>[{say:'오늘 이 길은 못 지나가요. 미안해요!'}]},
 pro3:{name:'시위대',zone:'city',x:16,y:11,dir:'up',look:protester('#1E1A22','#8A5A3A','#E86D3A','#3B4650'),still:1,hide:()=>b('시위'),talk:()=>[{say:'돈키! 돈키! 해가 뜨는 날까지!'}]},
 jimena:{name:'히메나',zone:'city',x:5,y:10,dir:'up',look:L_JIMENA,badge:['장례식'],
  hide:()=>!f().boom||!!f().occupied,
  after:'루치아 사진 앞에 꽃이 매일 새로 와요.',
  talk:()=>[
   {say:'여보… 루치아 일, 너무 슬퍼요.'},
   {say:'오늘 광장에서 추모식이 있어요. 내일은 장례식이에요.'},
   Q.jimena[0],
   {who:'테렌스',say:'루치아는 제가 보냈어요. 제 잘못이에요.'},
   {say:'아니에요. 캡슐을 터뜨린 사람 잘못이에요.'},
   Q.jimena[1],
   {say:'꼭 범인을 찾아요. 루치아를 위해서요.',award:['장례식']}]},
 zelinda:{name:'젤린다',zone:'city',x:9,y:8,dir:'left',look:L_ZELINDA,badge:['테러'],
  hide:()=>!f().boom||!!f().occupied,
  status:()=>!b('장례식')?null:undefined,
  after:'총독님은 겁을 먹었어요. 그래서 더 강하게 나가요.',
  talk:()=>[
   {say:'테렌스 국장님. 총독 사무실의 젤린다예요.'},
   {say:'이건 사고가 아니에요. 사람들을 겁주려는 공격이에요.'},
   Q.zelinda[0],
   {say:'총독님 명령이에요. 오늘부터 돈키 시위와 갱들을 다 단속해요.'},
   Q.zelinda[1],
   {say:'조사이어스 정당도 조사해요. 저희 동생 남편인데도요.'},
   {who:'테렌스',say:'메두사는 소노마 거리에 있어요. 우리 팀이 계속 보고 있었어요.',award:['테러'],set:()=>{f().crackdown=1}}]},
 medusaSt:{name:'메두사',zone:'city',x:27,y:6,dir:'left',look:L_MEDUSA_ST,still:1,
  hide:()=>!f().crackdown||!!f().medusa,
  status:()=>'todo',
  talk:()=>[
   {say:'형사님, 혼자 왔어요? 용감하네요.'},
   {who:'…',say:'메두사의 무지개색 머리카락이 뱀처럼 움직여요.'},
   {who:'…',say:'테렌스는 경찰 옷 아래에 마카이오가 준 셀레스철 갑옷을 입었어요.'},
   {who:'테렌스',say:'메두사, 당신을 체포해요. 그 머리, 무기죠? 끄고, 숨긴 것도 다 버려요.'},
   {say:'…알았어요. 그런데 캡슐 폭탄, 우리가 한 게 아니에요.'},
   {who:'…',say:'메두사가 무지개 머리를 다 밀었어요. 경찰이 수갑을 채워요.',set:()=>{f().medusa=1}}]},
 general:{name:'아보네발레리오 장군',zone:'city',x:21,y:8,dir:'down',look:GENERAL,still:1,badge:['점령하다'],
  hide:()=>!f().occupied,
  after:'아직도 여기 있어요? 작은 경찰은 바쁘지 않아요?',
  talk:()=>[
   {who:'…',say:'아주 큰 사람이 서 있어요. 작은 은색 구슬 갑옷이 물처럼 움직여요.'},
   {who:'…',say:'하얀 얼굴에 철사 같은 문신. 아무 표정이 없어요.'},
   {say:'당신이 경찰이에요? 작네요.'},
   {say:'저는 아보네발레리오. 여제님이 보낸 {관리관|관리관}이에요.'},
   Q.general[0],
   {say:'아콘의 네트워크는 끝났어요. 반대하는 사람은 다 체포할 거예요.'},
   Q.general[1],
   {say:'제 사자들 보이죠? 칠 톤이에요. 조심해서 다녀요.',award:['점령하다'],set:()=>{f().general=1}}]},
 lion1:{name:'각성 사자',zone:'city',x:20,y:8,dir:'down',look:LION,still:1,hide:()=>!f().occupied,talk:()=>[{who:'…',say:'칠 톤짜리 사자예요. 눈이 아주 똑똑해 보여요.'},{say:'크르르릉…'}]},
 lion2:{name:'각성 사자',zone:'city',x:22,y:8,dir:'down',look:LION,still:1,hide:()=>!f().occupied,talk:()=>[{who:'…',say:'사자가 테렌스의 냄새를 맡아요. 이빨이 손가락만 해요.'}]},
 ghost1:{name:'고스트',zone:'city',x:3,y:6,dir:'down',look:GHOST,still:1,hide:()=>!f().occupied,
  talk:()=>[{who:'…',say:'{고스트|고스트}이에요. 키가 3미터. 머리가 없어요.'},{who:'…',say:'굽이 세 개인 긴 다리. 뒤쪽 팔 끝의 칼이 파랗게 빛나요.'},{who:'…',say:'고스트가 파란 빛으로 테렌스를 훑어봐요. 그리고 지나가요.'}]},
 ghost2:{name:'고스트',zone:'city',x:24,y:6,dir:'down',look:GHOST,still:1,hide:()=>!f().occupied,talk:()=>[{who:'…',say:'고스트가 거리를 지켜요. 지금은 통금이에요.'}]},
 ghost3:{name:'고스트',zone:'city',x:17,y:10,dir:'down',look:GHOST,still:1,hide:()=>!f().occupied,talk:()=>[{who:'…',say:'고스트가 광장을 지켜요. 사람들은 고개를 숙이고 지나가요.'}]},
 /* High Rosa */
 tose:{name:'토셰',zone:'tower',x:6,y:2,dir:'up',look:TOSE,still:1,
  hide:()=>!!f().capsule,
  pos:()=>f().aireel?[20,9]:[6,2],
  status:()=>!f().aireel?'todo':null,
  talk:()=>!f().aireel?[
   {who:'…',say:'루치아의 눈으로 봐요. 시벨레스 이글호에서 남자가 내려요. 토셰예요.'},
   {who:'…',say:'눈 하나가 크게 튀어나왔어요. 그 눈은 날아다니는 작은 드론이에요.'},
   {who:'테렌스 (통신)',say:'루치아, 가까이 가지 마요. 에어릴을 보내요.'},
   {who:'루치아',say:'{에어릴|에어릴}을 보냈어요. 토셰 뒤를 따라가요.',set:()=>{f().aireel=1}}]:[
   {who:'…',say:'토셰가 캡슐 역 라운지에 앉아 있어요. 팔에 뱀 같은 근육이 붙어 있어요.'}]},
 cleaner:{name:'청소 로봇',zone:'tower',x:17,y:9,dir:'left',kind:'andy',look:{body:'#D8DCE0',visor:'#E8962A'},
  status:()=>f().aireel&&!f().capsule?'todo':null,
  talk:()=>f().aireel&&!f().capsule?[
   {who:'…',say:'청소 로봇이 바닥에서 뭔가를 먹었어요. 작은 실 같은 거예요.'},
   {who:'테렌스 (통신)',say:'에어릴! 청소 로봇이 에어릴을 먹었어요! 누군가 조종해요!'},
   {who:'루치아',say:'토셰가 캡슐로 가요. 저도 탈게요.'},
   {who:'테렌스 (통신)',say:'조심해요, 루치아. 혼자 하지 마세요.'},
   {who:'루치아',say:'걱정 마세요. 아래에서 만나요, 국장님.',set:()=>{f().capsule=1}}]:[{say:'삐빅. 청소 중이에요. 발을 들어 주세요.'}]},
 /* the Governor's mansion */
 makaio:{name:'마카이오파라지',zone:'mansion',x:7,y:3,dir:'up',badge:['암살'],
  get look(){return f().shot?MAKAIO_DEAD:MAKAIO},
  hide:()=>!f().liliana||!!f().occupied,
  get still(){return !!f().shot},
  after:'테렌스, 조심해요.',
  script:()=>f().rider?[{who:'…',say:'마카이오파라지의 몸은 아직 차가운 돌처럼 누워 있어요.'},{who:'…',say:'테렌스는 여기 있으면 안 돼요. 아무도 그가 여기 왔던 걸 몰라요.'}]:null,
  talk:()=>[
   {say:'테렌스, 왔어요? 곤디아는 처음이에요. 생각보다 아름다워요.'},
   {say:'저는 이제 아콘이 아니에요. 새 수석 아콘, 우알라나쇼이구가 저를 쫓아냈어요.'},
   {who:'테렌스',say:'캡슐 폭탄은 두 번째 조직이에요. 대장은 릴리아나예요.'},
   {say:'이건 큰 게임이에요. 누군가 와이니드 안에서 움직이고 있어요.'},
   Q.makaio[0],
   {say:'저도 조심해야 돼요.'},
   Q.makaio[1],
   {who:'…',say:'탕! 아주 먼 곳에서 소리가 났어요.',set:()=>{f().shot=1}},
   {who:'…',say:'마카이오파라지가 쓰러져요. 피가 많이 나요.'},
   {who:'…',say:'마카이오의 입에서 피가 나요. 말을 못 해요. 옷이 보라색으로 번쩍여요.'},
   {who:'…',say:'큰 손이 테렌스의 머리를 잡아요. 차가운 무언가가 머릿속에 들어와요.'},
   {who:'…',say:'테렌스가 물러나자 마카이오의 머리가 스스로 타 버려요. 아무 비밀도 남지 않게요.'},
   {who:'테렌스',say:'노이쉬 님… 아버님이… 뉴 피닉스 프로토콜이에요.'},
   {who:'…',say:'마카이오파라지가, 곤디아에서, 암살당했어요. 테렌스는 아무도 모르게 빠져나가요.',award:['암살'],set:()=>{f().rider=1}}]},
 otylia:{name:'오틸리아',zone:'villa',x:5,y:5,dir:'down',look:{hair:'#C8BFA8',skin:'#F0C9A4',shirt:'#5A4A6A',pants:'#3D3550',style:'long',lashes:1,lips:'#B06A70'},
  hide:()=>!f().missile,
  status:()=>!f().rescued?'todo':undefined,  // undefined, not null: afterwards the engine shows the review mark when a line is due
  talk:()=>!f().rescued?[
   {say:'테렌스… 와 줘서 고마워요.'},
   {say:'{고스트|고스트}들이 저를 체포하러 왔어요. 그런데 누군가 고스트들을 쐈어요.'},
   {say:'그리고 하늘에서 {미사일|미사일}이… 집이 다 무너졌어요.'},
   {say:'엄마, 아빠, 버라이카 새언니… 다 죽었어요.'},
   {say:'에버렛 오빠는 너무 화가 나서 약을 먹고 자요.'},
   {who:'테렌스',say:'고스트를 쏜 사람은 아마 토셰예요. 일부러 미사일이 오게 한 것 같아요.'},
   {say:'핀이 돌아오면… 뭐라고 말해요?'},
   {say:'우리는 하이 로사에서 폴카다브호를 타고 아누샤로 가요.',set:()=>{f().rescued=1}}]:[
   {say:'조사이어스는 어디 있는지 몰라요. 이제 저하고 상관없어요.'},
   {say:'아니, 저는 핀을 기다릴 거예요. 성실호는 옥사노톨 관문으로 와요. 핀은 킹스네스트에 갔으니까요.'}]},
 zelindaS:{name:'젤린다',zone:'villa',x:12,y:5,dir:'left',look:L_ZELINDA,hide:()=>!f().missile,
  talk:()=>[{say:'엄마가 없어요… 이제 제가 가족을 지켜야 돼요.'},{say:'폴카다브호는 작아요. 그래도 다 같이 가야 돼요.'}]},
 haian:{name:'하이안',zone:'villa',x:13,y:7,dir:'up',look:{hair:'#6A5A4A',skin:'#E3B48C',shirt:'#4A6A5A',pants:'#2E2A28'},hide:()=>!f().missile,
  talk:()=>[{say:'저는 젤린다 옆에 있을게요. 어디든지요.'}]},
 aljanS:{name:'알잔',zone:'villa',x:8,y:6,dir:'up',look:L_ALJAN,hide:()=>!f().missile,
  status:()=>f().rescued&&!f().club?'todo':undefined,
  talk:()=>!f().rescued?[{say:'아빠, 다친 사람이 많아요. 저는 지금 바빠요.'}]:!f().club?[
   {say:'아빠, 저도 폴카다브호를 타요. 다친 사람이 많아요. 저는 의사예요.'},
   {say:'로렐라도 같이 가요.'},
   {who:'테렌스',say:'알잔… 몸 조심해. 엄마한테 자주 연락해.'},
   {say:'아빠도요. 바닐다랑 엄마 잘 지켜 주세요.'},
   {who:'테렌스',say:'아빠는 할 일이 있어. 다크 파라다이스 클럽이 지금 비어 있어.'},
   {who:'테렌스',say:'스탄바8 갱은 다 잡혀갔어. 그 지하에 뭐가 있는 것 같아.',set:()=>{f().club=1}}]:[{say:'아빠, 사랑해요. 꼭 다시 만나요.'}]},
 /* Fleesh Diamond */
 barman:{name:'바텐더',zone:'bar',x:4,y:2,dir:'down',look:{hair:'#9A9AA0',skin:'#D7A77E',shirt:'#F1EEE6',pants:'#2A2A30',belt:'#2A2A30',beard:'#9A9AA0'},
  script:()=>{const q=Q.cafe[Math.random()*Q.cafe.length|0];
   return [{say:f().rider?'형사님, 요즘 혼자 말을 많이 하는 것 같아요. 괜찮아요?':'어서 와요, 형사님. 늘 마시던 걸로요? 옛날 단어 퀴즈도 하나!'},{...q},{say:'오늘은 제가 살게요.'}]},
  talk:()=>[]},
 spirit:{name:'마카이오 (라이더)',zone:'bar',x:12,y:2,dir:'down',look:SPIRIT,still:1,badge:['저격'],
  hide:()=>!f().rider,
  after:'두 남자가 바에 들어가요. 하하, 이 농담은 끝이 없어요.',
  talk:()=>[
   {who:'…',say:'두 달 동안 같은 꿈을 꿨어요. 이 바, 플리시 다이아몬드.'},
   {say:'두 남자가 바에 들어가요.'},
   {who:'테렌스',say:'…마카이오 님? 죽었잖아요.'},
   {say:'네, 저는 죽었어요. 저는 마카이오의 복사본, "{라이더|라이더}"예요.'},
   {say:'걱정 마요. 당신 머리를 가져가지 않아요. 당신은 계속 당신이에요.'},
   Q.spirit[0],
   {say:'토셰가 아주 먼 곳에서 저를 저격했어요.'},
   Q.spirit[1],
   {say:'이제 우리 둘이 같이 수사해요. 큰 게임은 아직 안 끝났어요.'},
   {expand:()=>classTime(CLASS,['경찰서','집'])},
   {who:'…',say:'그리고 2년이 지났어요. 어느 날, 탑 꼭대기 하이 로사에 제국 항모가 붙었어요.',award:['저격'],set:()=>{f().occupied=1}}]},
 /* Dark Paradise basement */
 patch:{name:'리브스톤 바닥',zone:'club',x:9,y:6,dir:'down',still:1,
  get look(){return f().bones?BONES:PATCH},
  status:()=>!f().bones?'todo':null,
  talk:()=>!f().bones?[
   {who:'…',say:'바닥 한 곳의 색이 조금 달라요. {리브스톤|리브스톤}이 새로 자란 것 같아요.'},
   {who:'테렌스',say:'바닐다, 뒤로 가.'},
   {who:'…',say:'테렌스가 손바닥을 벽의 작은 혹에 대요. 손바닥의 보라색 선이 빛나요.'},
   {who:'…',say:'바닥 돌이 부서져요. 세 사람이 손으로 돌을 파내요.',set:()=>{f().bones=1}},
   {who:'…',say:'그 안에… 사람의 뼈가 있어요. 가슴뼈에 칼자국이 있어요.'},
   {who:'바닐다',say:'아빠… 시체예요?'},
   {who:'테렌스',say:'아주 오래된 시체야. 엄마가 자세히 조사할 거야.'}]:[
   {who:'…',say:'오래된 뼈. 썩은 가죽 재킷 조각이 남아 있어요.'}]},
 jimenaC:{name:'히메나',zone:'club',x:6,y:7,dir:'right',look:L_JIMENA,
  status:()=>f().bones&&!f().done?'todo':undefined,
  talk:()=>!f().bones?[{say:'먼지가 많아요. 바닥을 잘 봐요. 갱들은 뭔가를 숨겼어요.'}]:f().done?[{say:'이 증거, 누구한테 보낼 거예요? 조심해요, 여보.'}]:[
   {say:'이 사람, 수십 년 전에 죽었어요. 칼에 가슴을 찔렸어요.'},
   {say:'뼈를 조금 가져갈게요. DNA 검사를 해요.',give:'뼈 샘플'},
   {w:'수사',build:['수사는','아직','끝나지','않았어요'],alts:[['아직','수사는','끝나지','않았어요']]},
   {say:'DNA 검사가 끝났어요. 이 사람은… 기보이 엔포예요.'},
   {who:'테렌스',say:'기보이? 진짜 기보이가 여기에서 죽었어요?'},
   {who:'바닐다',say:'그럼 성실호에 탄 기보이는… 누구예요?'},
   {who:'테렌스',say:'모르겠어. 하지만 꼭 찾을 거야.',set:()=>{f().done=1},finale:1}]},
};

/* news screen: Wynid interludes (막간) and occupation news, in story order */
const NEWS_ITEMS=[
 {id:1,when:()=>f().bopbeDead,steps:[
  {who:'뉴스 화면',say:'와이니드 소식이에요. 티라가 왕실 공주가 됐어요.'},
  {who:'막간',say:'막간 · 유익식. 마르고 뜨거운 사막 행성.'},
  {who:'막간',say:'우알라나라이언 경이 아들들과 몰래 왔어요. 베켓의 과거를 수사해요.'},
  {who:'막간',say:'궤도의 배에 작은 나노 기계 구름이 와요. "{슬로볼|슬로볼}"이에요.'},
  {who:'막간',say:'배에 남은 두 아들, 루치오와 파벨이 먹혔어요.'},
  {who:'우알라나라이언',say:'이 공작 조각… 그리고 이 모래… 땅 밑에 뭔가 있어요!'},
  {who:'막간',say:'번쩍. 우알라나라이언은 사라졌어요. 아들 쇼이구의 몸은 누군가 가져갔어요.'}]},
 {id:2,when:()=>f().sting,steps:[
  {who:'막간',say:'막간 · 와이니드, 가말둠 궁전. 여덟 달 후.'},
  {who:'막간',say:'헬레나키오네 여왕이 증기실에 혼자 있어요.'},
  {who:'티라',say:'어머니, 이제 제 차례예요.'},
  {who:'막간',say:'티라가 여왕의 손에 손을 올려요. 여왕의 기억을 억지로 다 가져가요.'},
  {who:'헬레나키오네',say:'이건 계승이 아니야! 너는 여왕이 될 수 없어!'},
  {who:'막간',say:'여왕은 죽었어요. 티라는 여왕의 기억으로 모든 시험을 통과했어요.'},
  {who:'막간',say:'이제 티라는 "헬레나티라" 여왕이에요. 아버지 베켓은 궁정 장관이 됐어요.'}]},
 {id:3,when:()=>f().tail,steps:[
  {who:'막간',say:'막간 · 와이니드. 티라가 여왕이 된 지 오 년.'},
  {who:'막간',say:'티라가 수석 아콘 가히지칼더를 쫓아냈어요.'},
  {who:'막간',say:'새 수석 아콘은 "우알라나쇼이구" 경. 사실은 이운틴데틀레프예요.'},
  {who:'막간',say:'그 몸은 쇼이구의 몸이에요. 쇼이구의 기억은 지워졌어요.'},
  {who:'막간',say:'회의가 끝나고, 작은 방. 티라가 우자냐 공주의 머리에 들어가요. 억지로 생각을 바꿔요.'},
  {who:'우자냐',say:'…네, 여왕님. 여왕님 말이 다 맞아요.'}]},
 {id:4,when:()=>f().boom,steps:[
  {who:'막간',say:'막간 · 바사 궤도 링의 코르토나.'},
  {who:'우알라나쇼이구',say:'마카이오파라지, 당신은 이제 아콘이 아니에요. 곤디아만 십 년 더 맡아요.'},
  {who:'마카이오파라지',say:'삼백 년 넘게 일했어요. 그런데 이렇게 끝나요?'},
  {who:'막간',say:'다섯 여왕의 회의. 헬레나티라가 말해요.'},
  {who:'헬레나티라',say:'카포 프로이스를 차지해요. 그리고 십 년 안에 모든 왕실 함대를 켈로완에 모아요.'},
  {who:'막간',say:'아무도 몰라요. 이게 누구의 게임인지.'}]},
 {id:5,when:()=>f().occupied,steps:[
  {who:'막간',say:'막간 · 켈로완 황궁. 캐롤리엔아마이아 여제.'},
  {who:'우알라나쇼이구',say:'여제님, 와이니드의 아콘이 곤디아에서 암살당했어요.'},
  {who:'캐롤리엔아마이아',say:'와이니드는 자기 아콘도 못 지켜요? 그럼 제가 직접 할게요.'},
  {who:'막간',say:'여제가 아보네발레리오 장군을 보내요. 돌격 항모 일곱 척, 제국 기사, 고스트 오십만.'},
  {who:'막간',say:'사람들은 장군을 "초토화"라고 불러요.'},
  {who:'뉴스 화면',say:'곤디아 소식. 잘고리토부 가족이 제티안 궁전에서 쫓겨났어요.'}]},
 {id:6,when:()=>f().general,steps:[
  {who:'뉴스 화면',say:'{관리관|관리관} 사무실 발표: 반란자 수천 명을 체포했어요.'},
  {who:'…',say:'사람들이 역 근처 창고에 갇혀 있어요. 소처럼요.'},
  {who:'테렌스',say:'저기서 형무 농장으로 가요. 다시는 못 돌아와요…'}]},
 {id:7,when:()=>f().news6,steps:[
  {who:'뉴스 화면',say:'불법 방송이에요. 밤하늘에 분홍색 점이 떠요. 돌로드예요.'},
  {who:'조사이어스',say:'곤디아 사람들! 제7조를 위해 모두 멈춰요! {총파업|총파업}이에요!'},
  {who:'뉴스 화면',say:'조사이어스와 같이 있던 여자, 레오니가 총에 맞아 죽었어요.'},
  {who:'뉴스 화면',say:'하프니르 속보. 고스트들이 오틸리아를 체포하러 갔어요.'},
  {who:'뉴스 화면',say:'누군가 고스트들을 저격했어요. 그리고 하늘에서 {미사일|미사일}이 떨어졌어요.'},
  {who:'뉴스 화면',say:'후작부인과 남편, 며느리 버라이카가 죽었어요.'},
  {who:'테렌스',say:'또 토셰예요. 살아남은 사람들을 우리 집에 숨겨야 돼요!',set:()=>{f().missile=1}}]},
 {id:8,when:()=>f().club,steps:[
  {who:'뉴스 화면',say:'형무 농장이 꽉 찼어요. 관리관이 옛날 무기를 써요.'},
  {who:'뉴스 화면',say:'체포된 사람들의 기억을 {유버스터|유버스터}로 지웠어요. 그리고 가족한테 돌려보내요.'},
  {who:'…',say:'화면 속 사람들이 아기처럼 웃어요. 자기 이름도 몰라요.'},
  {who:'테렌스',say:'처형보다 나빠요…'}]},
];
function nextNews(){return NEWS_ITEMS.find(e=>e.when()&&!f()['news'+e.id])}

const FOLLOW={name:'바닐다',look:L_VANILDA,when:()=>!!f().occupied&&!f().done,
 talk:()=>[{say:ZID==='club'?'아빠, 여기 냄새가 이상해요. 바닥이 좀 달라 보여요.':f().rescued?'알잔 오빠가 떠나요… 저는 아빠랑 엄마랑 남을 거예요.':'점령군이 시위를 다 막았어요. 이제 저는 아빠를 도울 거예요.'}]};

const INTRO=[
 {who:'테렌스',say:'산타 로사, 곤디아. 성실호가 떠난 지 십이 년이 됐어요.'},
 {who:'테렌스',say:'저는 테렌스. 산타 로사 경찰 특수 작전 국장이에요.'},
 {who:'테렌스',say:'그리고 몰래 와이니드의 아콘, 마카이오파라지 님을 위해 일해요.'},
 {who:'테렌스',say:'어젯밤 디어랙 거리에서 총격전이 있었어요. 다섯 명이 죽었어요.'},
 {who:'테렌스',say:'우리는 봅베라는 남자를 잡았어요. 새 얼굴로 곤디아를 떠나려고 했어요.'}];
const DONE=['5장 끝! 진짜 기보이는 수십 년 전에 죽었어요.','그럼 성실호에 탄 "기보이"는 누구일까요?','테렌스는 이 증거를 들고 곧 곤디아를 떠나요.',{expand:()=>wrapUp()},'일지에서 단어를 다시 볼 수 있어요.'];

function questText(){
 const F=f();
 if(F.done)return '5장 끝 · 일지에서 복습해요';
 if(!b('수사'))return '경찰서 · 루치아하고 이야기해요';
 if(!F.bopbeDead)return '모니터실 · 봅베 심문을 봐요';
 if(!b('처형'))return '감식실 · 봅베의 재를 조사해요';
 if(!b('변장하다'))return '거리 · 지카르의 가게에 가요';
 if(!F.sting)return '거리 · 지카르로 변장하고 기다려요';
 if(!b('단서'))return '거리 · 지카르한테 다시 물어봐요';
 if(!b('감시하다'))return '취조실 · 베르셰를 심문해요';
 if(!b('시위'))return '광장 · 시위대를 지나가요';
  if(!F.aireel)return ZID==='tower'?'루치아의 영상 · 토셰를 찾아요':'국장실 · 루치아의 영상 콘솔';
 if(!F.capsule)return '루치아의 영상 · 토셰 쪽으로 가요';
 if(!F.boom)return ZID==='tower'?'루치아의 영상 · 캡슐 승강장':'국장실 · 루치아의 통신을 들어요';
 if(!b('폭발'))return '경찰서 · 새 서장을 만나요';
 if(!b('장례식'))return '광장 · 추모식에 가요';
 if(!b('테러'))return '광장 · 젤린다를 만나요';
 if(!F.medusa)return '소노마 거리 · 메두사를 체포해요';
 if(!b('폭탄'))return '취조실 · 메두사를 심문해요';
 if(!F.liliana)return '감식실 · 캡슐 역 영상을 봐요';
 if(!F.rider)return '총독 저택 · 마카이오를 만나요';
 if(!b('저격'))return '플리시 다이아몬드 · 꿈속의 바';
 if(!b('점령하다'))return '광장 · 점령군 장군을 만나요';
 if(!F.missile)return '경찰서 · 뉴스 화면을 봐요';
 if(!F.rescued)return '하프니르 · 테렌스의 빌라';
 if(!F.club)return '하프니르 · 알잔하고 작별해요';
 if(!F.bones)return '다크 파라다이스 · 지하실을 조사해요';
 return '다크 파라다이스 · 히메나한테 가요';
}
const PLAYER=()=>ZID==='tower'?L_LUCIA:(f().disguised&&!f().sting?L_ZIKAR:TERENCE); // Lućia's feed at High Rosa; Zikar's face during the sting
return {WORDS,DICT,CONFUSE,BANK,Q,REVIEW,CLASS,ITEMS,ZONES,NPC,FOLLOW,INTRO,DONE,questText,TILES:TT,PLAYER};
}});
