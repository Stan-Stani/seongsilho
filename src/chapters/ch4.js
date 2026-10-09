CHAPTERS.push({id:'ch4',n:'4장',title:'카이발',place:'성실호 · 나트 · 후두 정원 · BK37',words:16,save:'seongsilho-ch4',color:'#C2482A',
 start:{zone:'ship',x:3,y:8,dir:'up'},introWho:'성실호',
 make:()=>{
/* =====================================================================
   4장 · 카이발 — content.
   Book pin: c018 only. The Diligent (owner Finn, captain Dejean — grey-haired now) has just made its first Gate jump into
   Hoa Quinzu. Aboard: Finn, Ellie, "Gyvoy" (mission leader; nobody suspects him), Dejean, astrogator Uemi-Jubalee, Pablo,
   the Daves, the merc squads (Sgt Bensath — secretly Gyvoy's, nobody knows; Fomki's and Pandiana's teams; Edusal), ~9,000 Gath.
   The Ratarajan ship Woiykan warns of a Mara Yama fleet refuelling at de Verya (only mentioned). Dejean sets a 5-week limit.
   Kajval: a billion Celestials killed by the Crystal Gun 6,000 years ago; the air was turned into crystal powder that fills the old ocean
   basins; vacuum; lava rivers; dead herds and birds. The Natt is a human crawling town. Elsbeth McQuillan "just takes you there".
   Raid on compound BK37: saberstone moat — Edusal and all of Fomki's team die, locksmith Mique Odox is shot through the helmet,
   Bensath's men are hit; Ellie (ordered by Gyvoy to stay in the tank) plans it, Elsbeth fires missiles at two hoodoos → causeway; Elsbeth's
   tank is lost; Finn, Elsbeth and Ellie are bitten (suits seal). Spiral stair, Ghosts, mines; mummified Kajval family; Finn wakes a
   fluted-cone drop ship; it burns through the floor and slides out through an archway. Elsbeth joins ("you owe me a tank"; after docking in c022). Bensath survives.
   BK37 order (audit): wall → moat directly inside → trap field → hoodoo tower. Gyvoy leads the raid; Mique is shot by a Ghost; Finn drops the stair mines.
   Lore source: notes/canon.md + notes/chapters-outline.md (4장). Audit against the full book before publishing (see CLAUDE.md).
   ===================================================================== */
const WORDS=['화산','용암','진공','우주복','담','침입하다','발자국','구르다','무너지다','계단','먼지','질식하다','전멸','물리다','희생','멸망하다'];
const DICT={
 '화산':{k:'땅속의 불이 밖으로 나오는 산.',e:'volcano',ex:'카이발에는 화산이 아주 많아요.',hj:'火山 · 火 = 화요일의 화 · 山 = 산'},
 '용암':{k:'화산에서 나오는 뜨거운 액체 돌.',e:'lava',ex:'용암이 강처럼 흘러요.',hj:'熔岩 · 岩 = 바위'},
 '진공':{k:'공기가 하나도 없는 곳.',e:'vacuum',ex:'진공에서는 소리가 안 들려요.',hj:'眞空 · 空 = 비다 · 공항(空港)의 공'},
 '우주복':{k:'우주나 진공에서 입는 옷. 안에 공기가 있어요.',e:'spacesuit',ex:'밖에 나가기 전에 우주복을 입어요.',hj:'宇宙服 · 服 = 옷 · 우주선의 우주'},
 '담':{k:'집이나 땅 주위를 막는 벽.',e:'(compound) wall',ex:'담이 너무 높아서 안이 안 보여요.'},
 '침입하다':{k:'허락 없이 남의 곳에 들어가요.',e:'to break in, to intrude',ex:'도둑이 밤에 집에 침입했어요.',hj:'侵入 · 入 = 들어가다 · 입구(入口)의 입'},
 '발자국':{k:'걸어간 뒤에 땅에 남은 발 모양.',e:'footprint',ex:'눈 위에 고양이 발자국이 있어요.'},
 '구르다':{k:'공처럼 빙글빙글 돌면서 가요. (굴러요, 굴렀어요)',e:'to roll',ex:'공이 계단 아래로 굴러가요.'},
 '무너지다':{k:'높은 것이 아래로 쓰러져서 부서져요.',e:'to collapse',ex:'오래된 다리가 무너졌어요.'},
 '계단':{k:'걸어서 위아래로 다니는 층층이 길.',e:'stairs',ex:'엘리베이터가 없어서 계단으로 가요.',hj:'階段 · 段 = 단계(段階)의 단'},
 '먼지':{k:'아주 작고 가벼운 가루.',e:'dust',ex:'오래된 책 위에 먼지가 많아요.'},
 '질식하다':{k:'숨을 못 쉬어서 아주 위험해요.',e:'to suffocate',ex:'산소가 없으면 질식해요.',hj:'窒息 · 息 = 숨 · 휴식(休息)의 식'},
 '전멸':{k:'한 명도 안 남고 모두 죽거나 없어져요.',e:'annihilation; wiped out',ex:'그 팀은 전멸했어요.',hj:'全滅 · 全 = 모두 · 안전의 전 · 滅 = 멸망의 멸'},
 '물리다':{k:'"물다"의 피동. 동물이나 무엇이 나를 물어요.',e:'to be bitten',ex:'강아지한테 손을 물렸어요.'},
 '희생':{k:'다른 사람이나 일 때문에 목숨이나 소중한 것을 잃어요.',e:'sacrifice; (people) lost',ex:'많은 사람이 희생됐어요.',hj:'犧牲'},
 '멸망하다':{k:'나라나 세계가 완전히 없어져요.',e:'to perish (a nation, a world)',ex:'옛날 왕국이 멸망했어요.',hj:'滅亡 · 滅 = 전멸의 멸'},
 /* glosses for words that appear in lines but are not badges */
 '관문':{k:'하늘의 관문. 엘로힘이 만든 아주 큰 문. 배가 빛처럼 빨리 가요.',e:'Gate (of Heaven)'},
 '충격':{k:'갑자기 크게 놀라서 몸이나 마음이 아파요.',e:'shock'},
 '의무실':{k:'배 안의 작은 병원.',e:'clinic, sick bay'},
 '홀로그램':{k:'빛으로 만든 그림. 공중에 떠 있어요.',e:'hologram'},
 '마라 야마':{k:'사람을 잡아가서 기억을 읽는 무서운 우주 종족.',e:'the Mara Yama'},
 '방주':{k:'사람들을 싣고 아주 오래 나는 큰 배. 성실호도 방주예요.',e:'arkship'},
 '수정총':{k:'카이발의 세계를 죽인 무기. 공기를 작은 수정 가루로 바꿨어요.',e:'the Crystal Gun'},
 '가루':{k:'아주 작게 부서진 것. 밀가루처럼요.',e:'powder'},
 '드롭십':{k:'행성으로 내려갔다가 다시 올라가는 작은 배.',e:'drop ship'},
 '격납고':{k:'작은 배를 넣어 두는 큰 방.',e:'hangar'},
 '항법사':{k:'배가 갈 길을 계산하는 사람.',e:'astrogator'},
 '나트':{k:'탱크처럼 아주 큰 바퀴 띠로 천천히 기어가는 마을. 카이발에 있어요.',e:'the Natt (Noveck Active Travel Town)'},
 '방패':{k:'날아오는 것을 막는 판.',e:'shield'},
 '자물쇠 전문가':{k:'잠긴 문을 여는 일을 하는 사람.',e:'locksmith'},
 '함정':{k:'숨겨 놓은 위험한 장치.',e:'trap'},
 '핵 폭약':{k:'아주 강한 폭탄. 방사능은 없어요. 벽을 부술 때 써요.',e:'nuclear charge'},
 '세이버스톤':{k:'달걀 같은 연한 회색 돌 기계. 별 모양 입으로 물어요.',e:'saberstones'},
 '무전':{k:'멀리 있는 사람하고 하는 전화 같은 것.',e:'radio'},
 '후두':{k:'아주 높은 돌기둥. 카이발에는 1킬로미터짜리도 있어요.',e:'hoodoo (rock pillar)'},
 '고스트':{k:'셀레스철이 만든 전투 로봇. 종류가 아주 많아요.',e:'Ghost (combat machine)'},
 '지뢰':{k:'땅에 숨겨 놓고, 밟으면 터지는 폭탄.',e:'mine'},
 '미라':{k:'아주 오래돼서 마른 시체.',e:'mummy'},
 '빚':{k:'갚아야 하는 돈이나 물건.',e:'debt'},
 '해자':{k:'성이나 담 주위를 둘러싼 도랑.',e:'moat'},
};
const CONFUSE={'화산':['화장','하산'],'용암':['용감','요금'],'진공':['진짜','공항'],'우주복':['우주선','운동복'],'담':['답','땀'],'침입하다':['입학하다','침대'],
 '발자국':['발가락','자꾸'],'구르다':['고르다','그리다'],'무너지다':['넘어지다','무섭다'],'계단':['계란','계산'],'먼지':['먼저','편지'],'질식하다':['질문하다','식사하다'],
 '전멸':['전부','절반'],'물리다':['물다','멀리'],'희생':['학생','회색'],'멸망하다':['명령하다','실망하다']};

/* extra review questions (the terminal uses these too, alongside every NPC question) */
const BANK=[
 {w:'화산',ask:'한라산은 옛날에 불이 나온 ___이에요.',opts:[['화산',1],['화장',0,'화장은 얼굴에 하는 거예요. 불이 나온 산은 "화산".']]},
 {w:'용암',ask:'화산에서 빨갛고 뜨거운 ___이 흘러요.',opts:[['용암',1],['용감',0,'용감은 무섭지 않은 마음이에요. 뜨거운 돌은 "용암".']]},
 {w:'진공',ask:'우주는 ___이라서 소리가 안 들려요.',opts:[['진공',1],['공기',0,'공기가 있으면 소리가 들려요. 공기가 없는 곳 → "진공".']]},
 {w:'우주복',ask:'우주인이 밖에 나가기 전에 ___을 입어요.',opts:[['우주복',1],['우주선',0,'우주선은 타는 거예요. 입는 옷은 "우주복". 服 = 옷!']]},
 {w:'우주복',ask:'밖에 나가기 ___ 우주복을 입어요.',opts:[['전에',1],['후에',0,'나간 후에 입으면 늦어요! 먼저 입어요 → "나가기 전에".']]},
 {w:'담',ask:'고양이가 높은 ___ 위에서 자요.',opts:[['담',1],['땀',0,'땀은 더울 때 몸에서 나는 물이에요. 막는 벽은 "담".']]},
 {w:'침입하다',ask:'누가 회사 컴퓨터에 ___했어요. 해커예요!',opts:[['침입',1],['입학',0,'입학은 학교에 들어가는 거예요. 몰래 들어가요 → "침입".']]},
 {w:'발자국',ask:'눈 위에 강아지 ___이 있어요.',opts:[['발자국',1],['발가락',0,'발가락은 발 끝의 다섯 개예요. 땅에 남은 모양은 "발자국".']]},
 {w:'구르다',ask:'공이 언덕 아래로 데굴데굴 ___.',opts:[['굴러가요',1],['구러가요',0,'"구르다"는 르 불규칙이에요. 구르 + 어 → "굴러". 그래서 "굴러가요".'],['골라가요',0,'고르다는 선택하는 거예요. 데굴데굴 → "굴러가요".']]},
 {w:'무너지다',ask:'지진 때문에 오래된 건물이 ___.',opts:[['무너졌어요',1],['무너뜨렸어요',0,'무너뜨리다는 누가 부수는 거예요. 건물이 스스로 → "무너졌어요".']]},
 {w:'계단',ask:'엘리베이터가 고장 나서 ___으로 올라갔어요.',opts:[['계단',1],['계산',0,'계산은 숫자나 돈이에요. 올라가는 길은 "계단".']]},
 {w:'먼지',ask:'오래 청소를 안 해서 ___가 많아요.',opts:[['먼지',1],['먼저',0,'먼저는 "제일 처음에"예요. 작은 가루는 "먼지".']]},
 {w:'질식하다',ask:'연기가 많으면 ___할 수 있어요. 빨리 나가요!',opts:[['질식',1],['질문',0,'질문은 물어보는 거예요. 숨을 못 쉬어요 → "질식".']]},
 {w:'전멸',ask:'그 팀은 한 명도 안 남았어요. ___했어요.',opts:[['전멸',1],['전부',0,'전부는 "모두"라는 뜻이에요. 모두 죽었어요 → "전멸했어요".']]},
 {w:'물리다',ask:'강아지가 손을 물었어요. 저는 손을 ___.',opts:[['물렸어요',1],['물었어요',0,'물었어요는 강아지가 한 거예요. 나는 당했어요 → "물렸어요".']]},
 {w:'희생',ask:'소방관의 ___으로 아이들이 살았어요.',opts:[['희생',1],['회색',0,'회색은 색깔이에요. 목숨을 바친 거 → "희생".']]},
 {w:'멸망하다',ask:'옛날 로마 제국은 결국 ___.',opts:[['멸망했어요',1],['명령했어요',0,'명령은 시키는 거예요. 나라가 없어졌어요 → "멸망했어요".']]},
];

const Q={ // NPC questions, kept here so review can reuse them
 finn:[
  {w:'멸망하다',ask:'카이발의 셀레스철은 거의 다 죽었어요. 그 세계는 ___.',opts:[['멸망했어요',1],['결정했어요',0,'결정은 고르는 거예요. 세계가 완전히 없어졌어요 → "멸망했어요".'],['실망했어요',0,'실망은 기분이 나쁜 거예요. 세계가 없어졌어요 → "멸망했어요".']]},
  {w:'진공',ask:'공기가 하나도 없는 곳은 ___이에요.',opts:[['진공',1],['진동',0,'진동은 흔들리는 거예요. 공기가 없는 곳은 "진공".'],['공항',0,'공항에는 공기가 많아요! 空은 같아요. 공기가 없는 곳은 "진공".']]},
 ],
 binopal:[
  {w:'화산',ask:'땅속의 불이 밖으로 나오는 산은 ___이에요.',opts:[['화산',1],['화장',0,'화장은 얼굴에 하는 거예요. 불이 나오는 산은 "화산".'],['등산',0,'등산은 산에 올라가는 거예요. 불이 나오는 산은 "화산".']]},
  {w:'용암',ask:'화산에서 나오는 뜨거운 액체 돌은 ___이에요.',opts:[['용암',1],['용감',0,'용감은 무섭지 않은 마음이에요. 뜨거운 돌은 "용암".'],['얼음',0,'얼음은 차가워요! 뜨거운 돌은 "용암".']]},
 ],
 els:[
  {w:'우주복',ask:'밖은 진공이에요. 그래서 ___을 꼭 입어야 돼요.',opts:[['우주복',1],['우주선',0,'우주선은 타는 거예요. 입는 옷은 "우주복". 服 = 옷!'],['운동복',0,'운동복으로는 숨을 못 쉬어요! 진공에서는 "우주복".']]},
  {w:'질식하다',ask:'산소가 없으면 숨을 못 쉬어요. 사람이 ___.',opts:[['질식해요',1],['질문해요',0,'질문은 물어보는 거예요. 숨을 못 쉬어요 → "질식해요".'],['식사해요',0,'식사는 밥 먹는 거예요. 숨을 못 쉬어요 → "질식해요".']]},
  {w:'질식하다',ask:'밖에서 헬멧을 절대 ___. 질식해요.',opts:[['벗지 마세요',1],['벗으세요',0,'벗으면 질식해요! 하지 말라고 할 때는 "-지 마세요" → "벗지 마세요".'],['벗고 마세요',0,'"-고 마세요"는 없어요. 하지 말라고 할 때는 "-지 마세요" → "벗지 마세요".']]},
 ],
 mique:[
  {w:'담',ask:'집이나 땅 주위를 막는 벽은 ___이에요.',opts:[['담',1],['답',0,'답은 질문에 하는 말이에요. 막는 벽은 "담".'],['땀',0,'땀은 더울 때 몸에서 나는 물이에요. 벽은 "담".']]},
  {w:'침입하다',ask:'도둑이 밤에 남의 집에 ___.',opts:[['침입했어요',1],['입학했어요',0,'입학은 학교에 들어가는 거예요. 몰래 들어가요 → "침입했어요".'],['초대했어요',0,'초대는 오라고 부르는 거예요. 허락 없이 들어가요 → "침입했어요".']]},
 ],
 pandiana:[
  {w:'먼지',ask:'옛날 공기가 반짝이는 ___가 됐어요.',opts:[['먼지',1],['먼저',0,'먼저는 "제일 처음에"예요. 작은 가루는 "먼지".'],['편지',0,'편지는 쓰는 거예요. 작은 가루는 "먼지".']]},
  {w:'침입하다',ask:'___ 담 안으로 침입해요.',opts:[['폭약이 터진 후에',1],['폭약이 터지기 전에',0,'터지기 전에 들어가면 아주 위험해요! 터지고 나서 → "터진 후에".']]},
 ],
 miqueB:[
  {w:'발자국',ask:'제 ___만 밟고 따라와요.',opts:[['발자국',1],['발가락',0,'발가락은 발 끝의 다섯 개예요. 땅에 남은 발 모양은 "발자국".']]},
  {w:'발자국',ask:'초록 그물은 절대 ___.',opts:[['밟지 마세요',1],['밟으세요',0,'밟으면 함정이 터져요! 하지 말라고 할 때 → "밟지 마세요".']]},
 ],
 bensath:[
  {w:'구르다',ask:'회색 돌들이 공처럼 빙글빙글 ___!',opts:[['굴러와요',1],['골라와요',0,'고르다는 선택하는 거예요. 빙글빙글 → 구르다 → "굴러와요".'],['그려와요',0,'그리다는 그림이에요. 빙글빙글 → "굴러와요".']]},
  {w:'전멸',ask:'폼키 팀은 한 명도 안 남았어요. 팀이 ___했어요.',opts:[['전멸',1],['전부',0,'전부는 "모두"라는 뜻이에요. 모두 죽었어요 → "전멸".'],['절반',0,'절반은 반이에요. "절반했어요"는 없어요. 한 명도 안 남았어요 → "전멸".']]},
 ],
 ellie:[
  {w:'무너지다',ask:'미사일로 밑을 쏘면 후두가 ___.',opts:[['무너져요',1],['무너뜨려요',0,'무너뜨리다는 누가 무엇을 부수는 거예요. 후두가 스스로 → "무너져요".'],['무서워요',0,'무서운 건 우리예요! 돌기둥은 "무너져요".']]},
  {w:'무너지다',ask:'세이버스톤이 더 오기 ___ 빨리 해요!',opts:[['전에',1],['후에',0,'더 온 후에는 늦어요! 오기 전 → "오기 전에".']]},
 ],
 elsB:[
  {w:'물리다',ask:'세이버스톤이 제 다리를 물었어요. 저는 다리를 ___.',opts:[['물렸어요',1],['물었어요',0,'물었어요는 세이버스톤이 한 거예요. 나는 당했어요 → "물렸어요".'],['멀었어요',0,'멀다는 거리가 먼 거예요. 이빨에 → "물렸어요".']]},
  {w:'물리다',ask:'여름 밤에 모기한테 팔을 ___.',opts:[['물렸어요',1],['물어요',0,'모기가 물어요. 나는 → "물렸어요".']]},
 ],
 dave:[
  {w:'계단',ask:'엘리베이터가 없어요. ___으로 올라가요.',opts:[['계단',1],['계란',0,'계란은 닭이 낳아요! 올라가는 길은 "계단".'],['계산',0,'계산은 숫자예요. 올라가는 길은 "계단".']]},
  {w:'계단',ask:'고스트가 오기 ___ 계단을 올라가요.',opts:[['전에',1],['후에',0,'고스트가 온 후에는 늦어요! → "오기 전에".']]},
 ],
 finnB:[
  {w:'희생',ask:'오늘 많은 사람이 ___됐어요.',opts:[['희생',1],['학생',0,'학생은 공부하는 사람이에요. 목숨을 잃었어요 → "희생".'],['회색',0,'회색은 색깔이에요. 목숨을 잃었어요 → "희생".']]},
 ],
 cafe:[ // old words from earlier chapters, no badges
  {ask:'성실호가 하이 로사에 ___.',opts:[['도착했어요',1],['출발했어요',0,'출발은 떠나는 거예요. 왔어요 → "도착했어요".']]},
  {ask:'엔진이 ___ 배가 못 가요.',opts:[['고장 나서',1],['고쳐서',0,'고치면 다시 가요. 못 가요 → "고장 나서".']]},
  {ask:'바다에서 부서진 배의 ___를 건졌어요.',opts:[['잔해',1],['잔디',0,'잔디는 풀이에요. 부서진 배 조각 → "잔해".']]},
  {ask:'팔 년의 ___이 흘렀어요.',opts:[['세월',1],['세계',0,'세계는 온 세상이에요. 흘러간 시간 → "세월".']]},
  {ask:'시합에서 제 ___는 아주 강해요.',opts:[['상대',1],['상태',0,'상태는 건강이나 기분이에요. 같이 싸우는 사람은 "상대".']]},
  {ask:'친구가 비밀을 다 말했어요. 저를 ___.',opts:[['배신했어요',1],['배웠어요',0,'배우다는 공부예요. 믿었는데 등을 돌렸어요 → "배신했어요".']]},
  {ask:'도서관에 책을 늦게 반납했어요. ___를 내요.',opts:[['연체료',1],['연료',0,'연료는 엔진이 먹어요! 늦게 반납하면 "연체료".']]},
 ],
};

/* Invented details in the review lines below (small and harmless; everything else is the header's c018 facts or this chapter's own lines):
   Uemi keeps watching de Verya. Binopal: the Natt keeps away from volcanoes, the lava rivers light up the night, Natt people are
   football-mad (the canteen's match is c018), the food comes in bags (this chapter's food bags) and tastes so-so, the Natt has no
   station because the whole town moves. Mique finds his way without a map. Elsbeth: no drink or drugs in her tank, the Hell Welcomes
   has never broken down, her contract has no fighting in it, check the helmet twice. Fomki: his team never betrays whoever pays.
   Ellie: the suit feels warm at first; the Heads Up accelerates well. Edusal: an itchy nose in the helmet, checking her oxygen three
   times. Pandiana: white dust all over her suit. Dave likes the carvings on the stairwell walls (the carvings are c018).
   Finn's nieces and nephew may be older than him next time: a guess from the time dilation, said as one. */
/* in-character review: people use a learned word again in their own voice, at the times they're around (engine: linesFor) */
const REVIEW=[
 /* ---- the command deck, the whole chapter (the ship stays in orbit; lines about the warning or the orbit wait for them) ---- */
 {w:'화산',by:'uemi',ask:'화면으로 보면 카이발에는 ___이 아주 많아요.',opts:[['화산',1],['화장',0,'화장은 얼굴에 하는 거예요. 불이 나오는 산은 "화산".'],['등산',0,'등산은 산에 올라가는 거예요. 불이 나오는 산은 "화산".']]},
 {w:'용암',by:'uemi',ask:'화면의 주황색 줄은 다 ___ 강이에요.',opts:[['용암',1],['용감',0,'용감은 무섭지 않은 마음이에요. 흐르는 뜨거운 돌은 "용암".'],['요금',0,'요금은 내는 돈이에요. 흐르는 뜨거운 돌은 "용암".']]},
 {w:'도착하다',by:'uemi',when:()=>!!f().orbit,ask:'카이발 궤도에 무사히 ___.',opts:[['도착했어요',1],['출발했어요',0,'출발은 떠나는 거예요. 여기 왔어요 → "도착했어요".'],['도전했어요',0,'도전은 어려운 일을 해 보는 거예요. 여기 왔어요 → "도착했어요".']]},
 {w:'연료',by:'uemi',when:()=>!!f().warned,ask:'마라 야마는 데 베리아에서 ___를 넣는대요.',opts:[['연료',1],['연체료',0,'연체료는 늦게 내는 돈이에요. 배에 넣는 건 "연료".'],['우유',0,'하하, 우유는 사람이 마셔요. 배에 넣는 건 "연료".']]},
 {w:'관측하다',by:'uemi',when:()=>!!f().warned,ask:'데 베리아 쪽은 제가 계속 ___하고 있어요.',opts:[['관측',1],['관중',0,'관중은 경기를 보는 사람이에요. 자세히 보고 재는 건 "관측".'],['관심',0,'관심은 마음이 가는 거예요. 자세히 보고 재는 건 "관측".']]},
 {w:'약속하다',by:'uemi',when:()=>!!f().warned&&!f().done,ask:'5일 안에 꼭 돌아온다고 ___해요.',opts:[['약속',1],['예약',0,'예약은 식당이나 방 자리를 잡는 거예요. 꼭 하겠다고 말하면 "약속".'],['축하',0,'축하는 좋은 일에 하는 말이에요. 꼭 하겠다고 말하면 "약속".']]},
 {w:'설치하다',by:'uemi',ask:'새 발생기를 ___한 덕분에 관문을 지났어요.',opts:[['설치',1],['설거지',0,'설거지는 그릇을 씻는 거예요! 기계를 달았어요 → "설치".'],['설명',0,'설명은 말로 알려 주는 거예요. 기계를 달았어요 → "설치".']]},
 {w:'선장',by:'pablo',when:()=>!!f().warned&&!f().done,ask:'___님이 땅에서는 5일이래요. 파블로가 기다려요.',opts:[['선장',1],['선생',0,'선생님은 학교에 있어요. 배에서 제일 높은 사람은 "선장님".'],['사장',0,'사장님은 회사에 있어요. 배에서 제일 높은 사람은 "선장님".']]},
 {w:'인양하다',by:'pablo',ask:'이번 일은 ___ 일이래요. 파블로는 배를 지켜요.',opts:[['인양',1],['인사',0,'인사는 "안녕하세요"예요. 큰 것을 끌어 올리는 일은 "인양".'],['이용',0,'이용은 무엇을 쓰는 거예요. 큰 것을 끌어 올리는 일은 "인양".']]},  // the crew's cover story (3장)
 {w:'세월',by:'pablo',ask:'성 오틸리아님 다시 볼 때는 ___이 많이 흘렀겠죠.',opts:[['세월',1],['세상',0,'세상은 사람들이 사는 곳 전부예요. 흘러간 긴 시간은 "세월".'],['새벽',0,'새벽은 아침 아주 일찍이에요. 흘러간 긴 시간은 "세월".']]},
 {w:'교환하다',by:'gyvoy',ask:'드라이브 두 개하고 ___한 발생기, 잘 돌아가죠?',opts:[['교환',1],['환영',0,'환영은 반갑게 맞는 거예요. 서로 주고받았어요 → "교환".'],['반납',0,'반납은 빌린 걸 돌려주는 거예요. 서로 바꿨어요 → "교환".']]},
 {w:'축복',by:'gyvoy',ask:'첫 점프 성공! 아스테리아 여신님의 ___이에요.',opts:[['축복',1],['축구',0,'축구는 공으로 하는 운동이에요! 여신님이 주는 좋은 일은 "축복".'],['경고',0,'경고는 위험하다고 알려 주는 거예요. 여신님이 주는 좋은 일은 "축복".']]},
 /* Finn on the deck, after he has told the Kajval story */
 {w:'멸망하다',by:'finn',ask:'셀레스철 세계도 ___ 수 있어요. 무서운 일이에요.',opts:[['멸망할',1],['명령할',0,'명령은 시키는 거예요. 세계가 완전히 없어지면 "멸망할".'],['실망할',0,'실망은 기분이 나쁜 거예요. 세계가 완전히 없어지면 "멸망할".']]},
 {w:'진공',by:'finn',ask:'헬멧 꼭 잠가요. 카이발은 밖이 다 ___이에요.',opts:[['진공',1],['진동',0,'진동은 흔들리는 거예요. 공기가 없는 곳은 "진공".'],['공항',0,'공항에는 공기가 많아요! 공기가 없는 곳은 "진공".']]},
 {w:'먼지',by:'finn',ask:'카이발 바다는 물이 아니에요. 하얀 ___예요.',opts:[['먼지',1],['먼저',0,'먼저는 "제일 처음에"예요. 아주 작은 가루는 "먼지".'],['편지',0,'편지는 쓰는 거예요. 아주 작은 가루는 "먼지".']]},
 {w:'탐험',by:'finn',ask:'저는 ___을 좋아해요. 그래도 카이발은 좀 무서워요.',opts:[['탐험',1],['시험',0,'시험은 학교에서 봐요! 모르는 곳에 가 보는 건 "탐험".'],['시합',0,'시합은 이기고 지는 경기예요. 모르는 곳에 가 보는 건 "탐험".']]},
 {w:'조카',by:'finn',ask:'다음에 만나면 ___들이 저보다 나이가 많을지도 몰라요.',opts:[['조카',1],['조각',0,'조각은 작은 부분이에요. 오틸리아의 아이들은 제 "조카".'],['손자',0,'손자는 내 아이의 아이예요. 형제의 아이는 "조카".']]},
 {w:'정당',by:'finn',ask:'조사이어스가 ___을 만들었어요. 선거에서도 이겼어요.',opts:[['정당',1],['정답',0,'정답은 맞는 답이에요. 정치 모임은 "정당".'],['정원',0,'정원은 꽃과 나무가 있는 곳이에요. 정치 모임은 "정당".']]},
 /* ---- the Natt: Binopal (after his lesson, the whole chapter); Mique, Elsbeth and Fomki until the wall; Ellie until Gyvoy's order ---- */
 {w:'화산',by:'binopal',ask:'나트는 ___ 가까이는 안 가요. 위험해요.',opts:[['화산',1],['화장',0,'화장은 얼굴에 하는 거예요. 불이 나오는 산은 "화산".'],['하산',0,'하산은 산에서 내려오는 거예요. 불이 나오는 산은 "화산".']]},
 {w:'용암',by:'binopal',ask:'___ 강 옆은 밤에도 밝아요. 예쁘죠?',opts:[['용암',1],['용감',0,'용감은 무섭지 않은 마음이에요. 빛나는 뜨거운 돌은 "용암".'],['요금',0,'요금은 내는 돈이에요. 빛나는 뜨거운 돌은 "용암".']]},
 {w:'멸망하다',by:'binopal',ask:'카이발은 ___ 세계예요. 그래도 우리는 여기 살아요.',opts:[['멸망한',1],['명령한',0,'명령은 시키는 거예요. 완전히 없어진 세계 → "멸망한".'],['실망한',0,'실망은 기분이 나쁜 거예요. 완전히 없어진 세계 → "멸망한".']]},
 {w:'변하다',by:'binopal',ask:'육천 년 전에 이 세계 공기가 전부 가루로 ___.',opts:[['변했어요',1],['편했어요',0,'편하다는 몸이나 마음이 좋은 거예요. 달라졌어요 → "변했어요".'],['결정했어요',0,'공기는 결정을 안 해요! 달라졌어요 → "변했어요".']]},
 {w:'기차역',by:'binopal',ask:'나트는 마을 전체가 가요. 그래서 ___은 없어요.',opts:[['기차역',1],['기억',0,'기억은 머리에 남은 거예요. 기차를 타는 곳은 "기차역".'],['기분',0,'기분은 마음이에요. 기차를 타는 곳은 "기차역".']]},
 {w:'중독',by:'binopal',ask:'나트 사람들은 다 축구 ___이에요. 하하.',opts:[['중독',1],['중국',0,'중국은 나라예요! 그만둘 수 없는 건 "중독".'],['회복',0,'회복은 다시 건강해지는 거예요. 그만둘 수 없는 건 "중독".']]},
 {w:'식량',by:'binopal',ask:'나트 ___은 다 봉지에 들어 있어요. 맛은… 하하.',opts:[['식량',1],['시력',0,'시력은 눈으로 보는 힘이에요. 오래 먹을 음식은 "식량".'],['심장',0,'심장은 가슴에서 뛰어요! 오래 먹을 음식은 "식량".']]},
 {w:'담',by:'mique',ask:'___만 넘으면 그다음은 제 일이에요.',opts:[['담',1],['답',0,'답은 질문에 하는 말이에요. 막는 벽은 "담".'],['땀',0,'땀은 더울 때 몸에서 나는 물이에요. 막는 벽은 "담".']]},
 {w:'침입하다',by:'mique',ask:'그 기지에 ___ 때 저는 맨 앞에서 가요.',opts:[['침입할',1],['입학할',0,'입학은 학교에 들어가는 거예요. 허락 없이 들어가요 → "침입할".'],['초대할',0,'초대는 오라고 부르는 거예요. 허락 없이 들어가요 → "침입할".']]},
 {w:'지도',by:'mique',ask:'저는 ___ 없이도 길을 찾아요. 그게 제 일이에요.',opts:[['지도',1],['지구',0,'지구는 우리 행성이에요. 길을 그린 그림은 "지도".'],['사전',0,'사전은 단어를 찾아요. 길을 그린 그림은 "지도".']]},
 {w:'우주복',by:'els',ask:'___ 없이는 나트 밖으로 한 걸음도 못 나가요.',opts:[['우주복',1],['우주선',0,'우주선은 타는 거예요. 걸어 나갈 때 입는 옷은 "우주복".'],['운동복',0,'운동복으로는 숨을 못 쉬어요! 진공에서는 "우주복".']]},
 {w:'질식하다',by:'els',ask:'헬멧은 두 번 확인해요. ___ 싫으면요.',opts:[['질식하기',1],['질문하기',0,'질문은 물어보는 거예요. 숨을 못 쉬는 건 "질식하기".'],['식사하기',0,'식사는 밥 먹는 거예요. 숨을 못 쉬는 건 "질식하기".']]},
 {w:'진공',by:'els',ask:'밖은 ___이라서 탱크 소리도 안 들려요. 뒤를 봐요.',opts:[['진공',1],['진동',0,'진동은 흔들리는 거예요. 공기가 없는 곳은 "진공".'],['공원',0,'공원에서는 소리가 잘 들려요. 공기가 없는 곳은 "진공".']]},
 {w:'고장 나다',by:'els',ask:'헬 웰컴스는 한 번도 ___ 적이 없어요.',opts:[['고장 난',1],['고친',0,'고치다는 수리하는 거예요. 망가진 적이 없어요 → "고장 난".'],['도착한',0,'저는 늘 데려다줘요! 망가진 적이 없어요 → "고장 난".']]},
 {w:'계약',by:'els',ask:'우리 ___에 싸움은 없어요. 사인한 거 다시 봐요.',opts:[['계약',1],['계획',0,'계획은 앞으로 할 일을 정하는 거예요. 사인한 약속은 "계약".'],['경기',0,'경기는 시합이에요. 사인한 약속은 "계약".']]},
 {w:'약물',by:'els',ask:'제 탱크에서는 술도 ___도 안 돼요.',opts:[['약물',1],['양말',0,'양말은 발에 신어요! 몸에 넣는 위험한 약은 "약물".'],['약속',0,'약속은 꼭 하겠다고 말하는 거예요. 몸에 넣는 위험한 약은 "약물".']]},
 {w:'출발하다',by:'fomki',ask:'우리 팀은 맨 마지막에 ___해요.',opts:[['출발',1],['출근',0,'출근은 회사에 일하러 가는 거예요. 떠나서 가기 시작해요 → "출발".'],['발견',0,'발견은 처음으로 찾는 거예요. 떠나서 가기 시작해요 → "출발".']]},
 {w:'배신하다',by:'fomki',ask:'우리 팀은 돈을 준 사람을 ___ 않아요.',opts:[['배신하지',1],['배우지',0,'배우다는 공부하는 거예요. 믿는 사람을 속이는 건 "배신하지".'],['배달하지',0,'배달은 물건을 가져다주는 거예요. 믿는 사람을 속이는 건 "배신하지".']]},
 {w:'우주복',by:'ellieN',ask:'___ 입으니까 좀 덥죠? 금방 괜찮아져요.',opts:[['우주복',1],['우주선',0,'우주선은 타는 거예요! 입는 건 "우주복".'],['우주인',0,'우주인은 사람이에요. 입는 옷은 "우주복".']]},
 {w:'우주선',by:'ellieN',ask:'헤즈업은 작아도 좋은 ___이에요.',opts:[['우주선',1],['우체국',0,'우체국은 편지를 보내는 곳이에요! 나는 배는 "우주선".'],['우주인',0,'우주인은 우주에 가는 사람이에요. 나는 배는 "우주선".']]},
 {w:'가속',by:'ellieN',ask:'헤즈업은 ___이 정말 좋아요. 조종사는 알아요.',opts:[['가속',1],['가족',0,'가족은 엄마, 아빠, 동생이에요! 점점 빨라지는 건 "가속".'],['가방',0,'하하, 가방은 들고 다니는 거예요. 점점 빨라지는 건 "가속".']]},
 {w:'결혼하다',by:'ellieN',ask:'할아버지가 오틸리아하고 ___ 거, 아직도 이상해요.',opts:[['결혼한',1],['결석한',0,'결석은 학교에 안 가는 거예요. 부부가 됐어요 → "결혼한".']]},
 {w:'선거',by:'ellieN',ask:'할아버지 정당이 하프니르 ___에서 이겼어요.',opts:[['선거',1],['선수',0,'선수는 경기하는 사람이에요. 투표로 뽑는 건 "선거".'],['선물',0,'선물은 주는 물건이에요. 투표로 뽑는 건 "선거".']]},
 /* ---- the hoodoo garden: Pandiana at the wall after the breach (the whole chapter); Edusal before it ---- */
 {w:'먼지',by:'pandiana',ask:'우주복에 하얀 ___가 잔뜩 묻었어요.',opts:[['먼지',1],['먼저',0,'먼저는 "제일 처음에"예요. 아주 작은 가루는 "먼지".'],['편지',0,'편지는 쓰는 거예요. 아주 작은 가루는 "먼지".']]},
 {w:'진공',by:'pandiana',ask:'___에서 헬멧이 깨지면 끝이에요.',opts:[['진공',1],['진동',0,'진동은 흔들리는 거예요. 공기가 없는 곳은 "진공".'],['진짜',0,'"진짜"는 정말이라는 뜻이에요. 공기가 없는 곳은 "진공".']]},
 {w:'화산',by:'pandiana',ask:'여기 회색 돌들은 다 ___에서 날아왔어요.',opts:[['화산',1],['화장',0,'화장은 얼굴에 하는 거예요. 불이 나오는 산은 "화산".'],['하산',0,'하산은 산에서 내려오는 거예요. 불이 나오는 산은 "화산".']]},
 {w:'질식하다',by:'pandiana',ask:'산소 숫자가 0이 되면 ___.',opts:[['질식해요',1],['질문해요',0,'질문은 물어보는 거예요. 숨을 못 쉬어요 → "질식해요".'],['식사해요',0,'식사는 밥 먹는 거예요. 숨을 못 쉬어요 → "질식해요".']]},
 {w:'위험',by:'pandiana',ask:'폭약은 ___ 로봇이 가져다 놓았어요.',opts:[['위험해서',1],['피곤해서',0,'폭약은 안 피곤해요! 다칠 수 있어요 → "위험해서".'],['안전해서',0,'안전하면 사람이 놓아도 돼요. 다칠 수 있어요 → "위험해서".']]},
 {w:'화산',by:'edusal',ask:'저 멀리 주황색 산, ___이에요? 예뻐요.',opts:[['화산',1],['화장',0,'화장은 얼굴에 하는 거예요. 불이 나오는 산은 "화산".'],['하산',0,'하산은 산에서 내려오는 거예요. 불이 나오는 산은 "화산".']]},
 {w:'우주복',by:'edusal',ask:'___을 입어서 코를 못 긁어요. 어떡해요?',opts:[['우주복',1],['우주선',0,'우주선은 타는 거예요. 입는 옷은 "우주복".'],['운동복',0,'운동복은 코를 긁을 수 있어요! 헬멧이 있는 옷은 "우주복".']]},
 {w:'담',by:'edusal',ask:'___이 너무 높아요. 꼭대기가 안 보여요.',opts:[['담',1],['답',0,'답은 질문에 하는 말이에요. 막는 벽은 "담".'],['땀',0,'땀은 더울 때 나는 물이에요. 막는 벽은 "담".']]},
 {w:'산소',by:'edusal',ask:'헬멧 안 ___ 숫자, 벌써 세 번 봤어요.',opts:[['산소',1],['산수',0,'산수는 숫자 공부예요. 숨 쉬는 공기는 "산소".'],['연료',0,'연료는 엔진이 먹어요. 사람은 "산소"로 숨 쉬어요.']]},
 {w:'얼음',by:'edusal',ask:'들소 털에 붙은 가루, 꼭 ___ 같았어요.',opts:[['얼음',1],['얼굴',0,'얼굴은 눈, 코, 입이 있는 곳이에요. 차갑게 반짝이는 건 "얼음".'],['어른',0,'어른은 다 큰 사람이에요. 차갑게 반짝이는 건 "얼음".']]},
 {w:'시체',by:'edusal',ask:'오는 길에 들소 ___가 끝도 없었어요.',opts:[['시체',1],['시계',0,'시계는 시간을 봐요. 죽은 동물의 몸은 "시체".'],['신체',0,'신체는 사람의 몸이에요. 죽은 동물의 몸은 "시체".']]},
 /* ---- BK37: Fomki and Edusal in the moat (breach → the attack) ---- */
 {w:'먼지',by:'fomkiB',ask:'이 반짝이는 ___, 옛날에는 공기였대요.',opts:[['먼지',1],['먼저',0,'먼저는 "제일 처음에"예요. 아주 작은 가루는 "먼지".'],['편지',0,'편지는 쓰는 거예요. 아주 작은 가루는 "먼지".']]},
 {w:'담',by:'fomkiB',ask:'___ 안이 이렇게 넓을 줄 몰랐어요.',opts:[['담',1],['답',0,'답은 질문에 하는 말이에요. 막는 벽은 "담".'],['땀',0,'땀은 더울 때 나는 물이에요. 막는 벽은 "담".']]},
 {w:'위험',by:'fomkiB',ask:'가루가 깊어서 ___해요. 천천히 와요.',opts:[['위험',1],['위협',0,'위협은 누가 겁을 주는 거예요. 빠질 수 있으면 "위험".'],['시험',0,'시험은 학교에서 봐요! 빠질 수 있으면 "위험".']]},
 {w:'침입하다',by:'edusalB',ask:'우리가 진짜 ___했어요! 드롭십은 어디 있어요?',opts:[['침입',1],['입학',0,'입학은 학교에 들어가는 거예요. 몰래 들어왔어요 → "침입".'],['침대',0,'하하, 침대는 자는 곳이에요. 몰래 들어왔어요 → "침입".']]},
 /* Mique, the teacher of 발자국: never asked (his script speaks every time after his lesson), kept as his own line */
 {w:'발자국',by:'miqueB',ask:'___ 밖은 다 함정이에요. 한 줄로요.',opts:[['발자국',1],['발가락',0,'발가락은 발 끝의 다섯 개예요. 땅에 남은 발 모양은 "발자국".'],['발표',0,'발표는 사람들 앞에서 말하는 거예요. 땅에 남은 발 모양은 "발자국".']]},
 /* Bensath, after the causeway until the tower */
 {w:'구르다',by:'bensathB',ask:'회색 공들이 아직도 해자에서 ___ 있어요.',opts:[['구르고',1],['고르고',0,'고르다는 선택하는 거예요. 공처럼 돌면서 가면 "구르고".'],['오르고',0,'오르다는 위로 올라가는 거예요. 공처럼 돌면서 가면 "구르고".']]},
 {w:'전멸',by:'bensathB',ask:'우리 팀도 ___할 뻔했어요.',opts:[['전멸',1],['전부',0,'전부는 "모두"라는 뜻이에요. 한 명도 안 남는 건 "전멸".'],['절반',0,'절반은 반이에요. 한 명도 안 남는 건 "전멸".']]},
 {w:'발자국',by:'bensathB',ask:'함정 밭에서는 미크의 ___만 밟았어요.',opts:[['발자국',1],['발가락',0,'발가락을 밟으면 미크가 아파요! 땅에 남은 발 모양은 "발자국".'],['발표',0,'발표는 사람들 앞에서 말하는 거예요. 땅에 남은 발 모양은 "발자국".']]},
 {w:'암살자',by:'bensathB',ask:'언덕 위 고스트, 꼭 ___ 같았어요. 미크를 한 발에…',opts:[['암살자',1],['심판',0,'심판은 시합에서 결정하는 사람이에요. 몰래 죽이는 건 "암살자".'],['관중',0,'관중은 경기를 보는 사람이에요. 몰래 죽이는 건 "암살자".']]},
 /* Gyvoy in front of the tower, from the causeway on; the moat's saberstones stir until the drop ship leaves */
 {w:'무너지다',by:'gyvoyB',ask:'후두가 ___ 때 소리가 하나도 없었어요.',opts:[['무너질',1],['무너뜨릴',0,'무너뜨리다는 누가 부수는 거예요. 후두가 스스로 쓰러지면 → "무너질".'],['무서울',0,'무서운 건 사람 마음이에요. 돌기둥이 쓰러지면 → "무너질".']]},
 {w:'먼지',by:'gyvoyB',when:()=>!f().done,ask:'뒤의 ___ 속에 세이버스톤이 있어요! 가요!',opts:[['먼지',1],['먼저',0,'먼저는 "제일 처음에"예요. 해자의 가루는 "먼지".'],['편지',0,'편지는 쓰는 거예요. 해자의 가루는 "먼지".']]},
 {w:'구르다',by:'gyvoyB',when:()=>!f().done,ask:'세이버스톤이 ___ 와요! 탑으로!',opts:[['굴러',1],['구러',0,'"구르다"는 르 불규칙이에요. 구르 + 어 → "굴러".'],['골라',0,'고르다는 선택하는 거예요. 빙글빙글 오면 → "굴러".']]},
 {w:'침입하다',by:'gyvoyB',when:()=>!f().done,ask:'벌써 ___했어요. 이제 앞으로만 가요.',opts:[['침입',1],['입학',0,'입학은 학교에 들어가는 거예요. 허락 없이 들어왔어요 → "침입".'],['초대',0,'초대는 오라고 부르는 거예요. 허락 없이 들어왔어요 → "침입".']]},
 {w:'죽이다',by:'gyvoyB',when:()=>!f().done,ask:'고스트가 미크를 ___. 다음은 우리예요.',opts:[['죽였어요',1],['죽었어요',0,'죽다는 스스로 죽는 거예요. 고스트가 미크를 → "죽였어요".'],['줄였어요',0,'줄이다는 작게 하는 거예요. 고스트가 미크를 → "죽였어요".']]},
 /* Ellie, out of the tank, until Elsbeth's leg */
 {w:'무너지다',by:'ellieB',ask:'제 생각 맞았죠? 후두가 해자 위로 ___!',opts:[['무너졌어요',1],['무너뜨렸어요',0,'무너뜨리다는 누가 무엇을 부수는 거예요. 후두가 스스로 → "무너졌어요".'],['무서웠어요',0,'무서운 건 우리였어요! 돌기둥은 "무너졌어요".']]},
 {w:'전멸',by:'ellieB',ask:'무전으로 다 들었어요. 폼키 팀이 ___했어요.',opts:[['전멸',1],['전부',0,'전부는 "모두"라는 뜻이에요. 한 명도 안 남았어요 → "전멸".'],['절반',0,'절반은 반이에요. 한 명도 안 남았어요 → "전멸".']]},
 {w:'발자국',by:'ellieB',ask:'카메라로 봤어요. 다들 미크 ___만 따라갔죠.',opts:[['발자국',1],['발가락',0,'발가락은 발 끝의 다섯 개예요. 땅에 남은 발 모양은 "발자국".'],['발표',0,'발표는 사람들 앞에서 말하는 거예요. 땅에 남은 발 모양은 "발자국".']]},
 {w:'공격하다',by:'ellieB',ask:'고스트가 ___할 때 저는 탱크 안에만 있었어요.',opts:[['공격',1],['공부',0,'하하, 고스트는 공부 안 해요. 먼저 쏘는 건 "공격".'],['공사',0,'공사는 건물을 짓는 일이에요. 먼저 쏘는 건 "공격".']]},
 /* Elsbeth at the tower door, from her lesson until the stairs */
 {w:'물리다',by:'elsB',ask:'세이버스톤한테 ___ 건 처음이에요. 다시는 싫어요.',opts:[['물린',1],['문',0,'"문 건"은 내가 문 거예요! 이빨에 당했어요 → "물린".'],['먼',0,'멀다는 거리가 먼 거예요. 이빨에 당했어요 → "물린".']]},
 {w:'질식하다',by:'elsB',ask:'우주복이 구멍을 안 막았으면 ___ 거예요.',opts:[['질식했을',1],['질문했을',0,'질문은 물어보는 거예요. 숨을 못 쉬었을 거예요 → "질식했을".'],['식사했을',0,'식사는 밥 먹는 거예요. 숨을 못 쉬었을 거예요 → "질식했을".']]},
 {w:'구르다',by:'elsB',ask:'세이버스톤이 탱크 위로 ___ 올라왔어요.',opts:[['굴러',1],['골라',0,'고르다는 선택하는 거예요. 공처럼 돌면서 → "굴러".'],['그려',0,'그리다는 그림이에요. 공처럼 돌면서 → "굴러".']]},
 {w:'파다',by:'elsB',ask:'탱크가 묻혔어요. ___ 꺼낼 시간도 없어요.',opts:[['파서',1],['팔아서',0,'팔다는 돈을 받고 주는 거예요. 땅에서 꺼내려면 → "파서".'],['타서',0,'타다는 차를 탈 때예요. 땅에서 꺼내려면 → "파서".']]},
 /* ---- the stairwell: the Daves (from the stairs on) ---- */
 {w:'계단',by:'dave1',ask:'___ 벽. 조각. 많아요. 예뻐요.',opts:[['계단',1],['계란',0,'계란은 닭이 낳아요! 올라가는 길은 "계단".'],['계산',0,'계산은 숫자예요. 올라가는 길은 "계단".']]},
 {w:'물리다',by:'dave1',ask:'세 사람. ___. 그래도 걸어요. 좋아요.',opts:[['물렸어요',1],['물었어요',0,'물었어요는 세이버스톤이 한 거예요. 세 사람은 → "물렸어요".'],['멀었어요',0,'멀다는 거리예요. 이빨에 → "물렸어요".']]},
 {w:'희생',by:'dave1',ask:'미크. 에두살. 폼키 팀. ___. 슬퍼요.',opts:[['희생',1],['학생',0,'학생은 공부하는 사람이에요. 목숨을 잃은 건 "희생".'],['회색',0,'회색은 색깔이에요. 목숨을 잃은 건 "희생".']]},
 {w:'잔해',by:'dave1',ask:'브레이커빌 ___. 고스트. 여기도 고스트.',opts:[['잔해',1],['잔치',0,'잔치는 파티예요! 부서진 배는 "잔해".'],['잔디',0,'잔디는 풀이에요. 부서진 배는 "잔해".']]},
 {w:'경호원',by:'dave1',ask:'우리. 핀 ___. 계속.',opts:[['경호원',1],['경찰관',0,'경찰관은 도시를 지켜요. 돈을 받고 사람을 지키면 "경호원".'],['공원',0,'공원은 산책하는 곳이에요. 사람을 지키는 사람은 "경호원".']]},
 {w:'계단',by:'dave2',when:()=>!f().done,ask:'___ 위에 격납고. 핀 거기 있어요.',opts:[['계단',1],['계란',0,'계란은 닭이 낳아요! 올라가는 길은 "계단".'],['계산',0,'계산은 숫자예요. 올라가는 길은 "계단".']]},
 {w:'무너지다',by:'dave2',ask:'저기 계단. ___. 돌아가요.',opts:[['무너졌어요',1],['무너뜨렸어요',0,'무너뜨리다는 누가 부수는 거예요. 계단이 스스로 → "무너졌어요".'],['넘어졌어요',0,'넘어지다는 사람이 쓰러지는 거예요. 계단이 부서졌어요 → "무너졌어요".']]},
 {w:'전멸',by:'dave2',ask:'폼키 팀. ___했어요. 안됐어요.',opts:[['전멸',1],['전부',0,'전부는 "모두"라는 뜻이에요. 한 명도 안 남았어요 → "전멸".'],['절반',0,'절반은 반이에요. 한 명도 안 남았어요 → "전멸".']]},
 {w:'파도',by:'dave2',ask:'여기 바다. 먼지. ___가 안 쳐요. 아쉬워요.',opts:[['파도',1],['포도',0,'포도는 과일이에요! 바다의 큰 물결은 "파도".'],['파티',0,'파티는 즐거운 모임이에요. 바다의 큰 물결은 "파도".']]},
 {w:'굴',by:'dave2',ask:'탑 안. 어두워요. ___ 같아요.',opts:[['굴',1],['귤',0,'귤은 먹는 과일이에요! 땅속 길은 "굴".'],['공',0,'공은 둥글어요. 어둡고 긴 길은 "굴".']]},
 {w:'추격하다',by:'dave2',when:()=>!!f().chase&&!f().mined,ask:'고스트. 계속 ___해 와요. 뛰어요.',opts:[['추격',1],['축하',0,'축하는 좋은 일에 하는 말이에요. 뒤에서 쫓아오면 "추격".'],['출발',0,'출발은 떠나는 거예요. 뒤에서 쫓아오면 "추격".']]},
 /* ---- the hangar (Gyvoy blocks the way up until the mines): Elsbeth; Finn ---- */
 {w:'희생',by:'elsT',ask:'미크, 에두살, 폼키 팀… ___이 너무 커요.',opts:[['희생',1],['학생',0,'학생은 공부하는 사람이에요. 목숨을 잃은 건 "희생".'],['회색',0,'회색은 색깔이에요. 목숨을 잃은 건 "희생".']]},
 {w:'물리다',by:'elsT',ask:'___ 다리가 아직 아파요. 그래도 걸어요.',opts:[['물린',1],['문',0,'"문 다리"는 무는 다리예요! 이빨에 당한 다리 → "물린".'],['먼',0,'멀다는 거리가 먼 거예요. 이빨에 당한 다리 → "물린".']]},
 {w:'계단',by:'elsT',ask:'물린 다리로 그 긴 ___을 다 올라왔어요.',opts:[['계단',1],['계란',0,'계란은 닭이 낳아요! 올라가는 길은 "계단".'],['계산',0,'계산은 숫자예요. 올라가는 길은 "계단".']]},
 {w:'전멸',by:'elsT',ask:'폼키 팀이 ___했대요. 무전으로 들었어요.',opts:[['전멸',1],['전부',0,'전부는 "모두"라는 뜻이에요. 한 명도 안 남았어요 → "전멸".'],['절반',0,'절반은 반이에요. 한 명도 안 남았어요 → "전멸".']]},
 {w:'멸망하다',by:'elsT',ask:'이 미라들, 세계가 ___ 날부터 여기 있었어요.',opts:[['멸망한',1],['명령한',0,'명령은 시키는 거예요. 세계가 완전히 없어진 날 → "멸망한".'],['실망한',0,'실망은 기분이 나쁜 거예요. 세계가 완전히 없어진 날 → "멸망한".']]},
 {w:'발견하다',by:'elsT',ask:'여기서 미라를 ___. 아이도 있어요.',opts:[['발견했어요',1],['발표했어요',0,'발표는 사람들 앞에서 말하는 거예요. 처음 찾았어요 → "발견했어요".'],['출발했어요',0,'출발은 떠나는 거예요. 처음 찾았어요 → "발견했어요".']]},
 /* Finn, the teacher of 희생: never asked (after his lesson his script runs the departure), kept as his own line */
 {w:'희생',by:'finnB',ask:'오늘 ___된 사람들, 다 이 배 때문이에요.',opts:[['희생',1],['학생',0,'학생은 공부하는 사람이에요. 목숨을 잃은 건 "희생".'],['회색',0,'회색은 색깔이에요. 목숨을 잃은 건 "희생".']]},
];

const ITEMS={'우주복':'성실호 준비실에서 받은 우주복. 헬멧을 벗으면 안 돼요.','핵 폭약':'벤사스 하사가 준 폭약. 담을 부술 때 써요.'};

const f=()=>state.f;
const hasItem=i=>state.items.includes(i);
const since=k=>Date.now()-(f()[k]||0);

/* ---------------- sprites ---------------- */
const OL='#1B1E2B';
/* humanoid generator + small edits, built lazily (the engine's generator exists only at draw time) */
const tuned=(L,fn,extra)=>{let A=null;const o={...L};Object.defineProperty(o,'art',{get(){if(!A){const pal=Object.assign(humanPal(L),extra||{});
 const mk=(d,s)=>fn(humanArt(L,d,s).slice(),d,pal);A={pal,down:mk('down',0),up:mk('up',0),left:mk('left',0),walk:{down:[mk('down',1),mk('down',2)],up:[mk('up',1),mk('up',2)],left:[mk('left',1),mk('left',2)]}}}return A}});return o};
const same=r=>r;
/* helmet: hair → shell, face → visor (Kajval has no air) */
const helmRows=(rows,view)=>rows.map((row,i)=>{if(i>7)return row.replace(/H/g,'C');if(i===0)return row;
 let s=row.replace(/[Hh]/g,'Y');s=view==='up'?s.replace(/[SsWMEDL]/g,'Y'):s.replace(/[SsWMEDL]/g,'V');
 if(i===4&&view!=='up')s=s.slice(0,view==='left'?4:5)+'G'+s.slice(view==='left'?5:6);return s});
const helm=(L,shell)=>{let A=null;const o={...L};Object.defineProperty(o,'art',{get(){if(!A){const pal=Object.assign(humanPal(L),{Y:shell,y:shade(shell,.8),V:'#26384A',G:'#BFE6FF'});
 const mk=(d,s)=>helmRows(humanArt(L,d,s).slice(),d);A={pal,down:mk('down',0),up:mk('up',0),left:mk('left',0),walk:{down:[mk('down',1),mk('down',2)],up:[mk('up',1),mk('up',2)],left:[mk('left',1),mk('left',2)]}}}return A}});return o};

const FINN={hair:'#E0C070',skin:'#F0C9A4',shirt:'#2F8F8A',pants:'#2E3548'};
const ELLIE={hair:'#2A2220',skin:'#E8B892',shirt:'#E4E1D6',pants:'#3B4650',belt:'#E8962A',style:'bob',lashes:1,lips:'#C8646E'};
const GYVOY={hair:'#2A1E1A',skin:'#B9825A',shirt:'#6A2E52',pants:'#4B3A2E',coat:1};
const ELS={hair:'#B88A5A',skin:'#E3B48C',shirt:'#2A3A66',pants:'#2A3A66',belt:'#5A6A96',style:'bun',lashes:1,lips:'#B8606A'};
const MIQ={hair:'#3A2A22',skin:'#A87454',shirt:'#5A5A62',pants:'#3A3A40',belt:'#C9A23A'};
const BEN={hair:'#2A2420',skin:'#8E5E40',shirt:'#4A5A3A',pants:'#3A4430',belt:'#2A2A30',style:'bald'};
const FOM={hair:'#6A3A2A',skin:'#E0AE86',shirt:'#5E4A36',pants:'#3A3430',belt:'#2A2A30',style:'spiky'};
const EDU={hair:'#1E1A1A',skin:'#D7A77E',shirt:'#5E4A36',pants:'#3A3430',belt:'#2A2A30',style:'long',lashes:1,lips:'#B8606A'};
const PAN={hair:'#4A2A1A',skin:'#B07850',shirt:'#5A3A3A',pants:'#3A3030',belt:'#2A2A30',style:'bun'};
const CREW={hair:'#2A2F4A',skin:'#F1C9A5',shirt:'#E4E1D6',pants:'#3B4650',belt:'#E8962A'};
const ELS_N=tuned(ELS,same,{E:'#AEB9C4'}); // grey mechanical eyes
const ELS_H=helm(ELS,'#5A6A96');
const ELLIE_H=helm(ELLIE,'#E4E1D6'),FINN_H=helm(FINN,'#BFE3DF');
const MIQ_N=MIQ,MIQ_H=helm(MIQ,'#C9CDD2');
const BEN_H=helm(BEN,'#7A8A5E'),FOM_H=helm(FOM,'#8E7A5E'),EDU_H=helm(EDU,'#8E7A5E'),PAN_H=helm(PAN,'#8A5E5E');
/* Binopal: tall, metal muscle bands on bare arms */
const BINO=tuned({hair:'#6B5A48',skin:'#C48E66',shirt:'#7A5A3A',pants:'#4A4038',beard:'#6B5A48',belt:'#3A3028'},(rows,view)=>{
 const set=(y,x,c)=>{rows[y]=rows[y].slice(0,x)+c+rows[y].slice(x+1)};
 if(view!=='left'){for(const y of [9,10]){set(y,3,'S');set(y,12,'S')}set(10,3,'A');set(10,12,'A');set(9,3,'A');set(9,12,'A')}
 rows.splice(10,0,rows[10]);rows.splice(13,0,rows[13]);return rows},{A:'#C9D1D9'});
/* the player: a Diligent crew member; a helmet on the airless world */
const PL_N=tuned(CREW,same),PL_H=helm(CREW,'#E4E1D6');
const KAJ=new Set(['plain','bk37','tower']);
const PLAYER={get art(){return (KAJ.has(ZID)?PL_H:PL_N).art}};

/* Pablo, a Gath: 3 m, pale-rust skin, round nose, tied toga */
const GATH_PAL={O:OL,E:OL,H:'#4A2A1E',h:'#38201A',S:'#D49A7A',s:'#B47C60',W:'#E8B898',N:'#C48468',M:'#8E5444',T:'#E6DCC2',t:'#C4B898',R:'#8A6A42',K:'#8A5A40'};
const GATH_BODY=["OSSWTTTTSSSSWSSO","OSSOTTTTTSSSOSSO","OSSOtTTTTTSSOSSO","OSSOtTTTTTTSOSSO","OSSORRRRRRRROSSO","OWSOTTTTtTTTOSWO","OSSOTTTTtTTTOSSO",
 ".OOOTTTTtTTTOOO.","...OTTTTtTTTO...","...OTTTOOTTTO...","...OSSSOOSSSO...","...OSSSOOSSSO...","...OsSSOOsSSO...","..OKKKKOOKKKKO..","..OOOOOOOOOOOO.."];
const PABLO={art:{pal:GATH_PAL,
 down:["....OOOOOOOO....","...OHHHHHHHHO...","..OHHhHHHHhHHO..","..OWSSSSSSSSWO..","..OSSEESSEESSO..","..OSSSSNNSSSSO..","..OsSSNNNNSSsO..","...OSSSMMSSSO...","....OsSSSSsO....",".OOOSSSSSSSSOOO.",...GATH_BODY],
 up:["....OOOOOOOO....","...OHHHHHHHHO...","..OHHhHHHHhHHO..","..OHHHHHHHHHHO..","..OHHhHHHHhHHO..","..OHHHHHHHHHHO..","..OsHHHHHHHHsO..","...OSSSSSSSSO...","....OsSSSSsO....",".OOOSSSSSSSSOOO.",
  "OSSWSSSSTTTTWSSO",...GATH_BODY.slice(1)],
 left:["....OOOOOOO.....","...OHHHHHHHO....","..OHHHHHHhHHO...","..OSSSSHHHHHO...",".OSSESSSHHhHO...","ONNSSSSSSHHHO...",".OOSSSSSSSHHO...","..OMSSSSSSSO....","...OsSSSSSO.....","...OOSSSSSOO....",
  "..OSSTTTTTSSO...","..OSTTTTTTTSO...","..OWSTTTTTTTO...","..OSStTTTTTTO...","..OSRRRRRRRRO...","..OWSTTTTtTTO...","..OSSTTTTtTTO...","...OOTTTTtTTO...","....OTTTTtTO....","....OTTTOTTO....",
  "....OSSSOSSO....","....OSSSOSSO....","....OsSSOsSO....","...OKKKKOKKKO...","...OOOOOOOOOO..."]}};

/* the Daves: Silicates — clear quartz exoskin over visible muscle */
const DAVE={art:{pal:{O:OL,E:OL,Q:'#EBDDE0',q:'#C9B3B9',M:'#C0505E',m:'#8E3346',G:'#FFFFFF'},
 down:[".....OOOOOO.....","....OQGQQQQO....","...OQQQQQQqqO...","...OQEQQQEQqO...","...OQMQQQMQqO...","....OQQmmQqO....",".....OQQQqO.....","..OOOQMMMMqOOO..",".OQQMMMQQMMMqqO.",
  "OQQMMQGMMQMMMqqO","OQOMMMMQQMMMMOqO","OQOQMQMMQMQMQOqO","OMOQMQMMQMQMQOmO","OOOqQQQQQQQqqOOO","...OQMMOOMMqO...","...OQMMOOMMqO...","...OQMqOOMMqO...","...OOOOOOOOOO..."],
 up:[".....OOOOOO.....","....OQGQQQQO....","...OQQQQQQqqO...","...OQQQQQQQqO...","...OQQQQQQQqO...","....OQQQQQqO....",".....OQQQqO.....","..OOOQMMMMqOOO..",".OQQMMMQQMMMqqO.",
  "OQQMMMMMMMMMMqqO","OQOMMMMQQMMMMOqO","OQOQMMMQQMMMQOqO","OMOQMMMQQMMMQOmO","OOOqQQQQQQQqqOOO","...OQMMOOMMqO...","...OQMMOOMMqO...","...OQMqOOMMqO...","...OOOOOOOOOO..."],
 left:["....OOOOOO......","...OQGQQQQO.....","..OQQQQQQqqO....","..OEQQQQQqqO....",".OQQMQQQQQqO....","..OQmmQQQqO.....","...OOQQQqO......","...OQMMMMqO.....","..OQMMMQMMqO....",
  "..OQMGMMMMqO....","..OQMMOMMMqO....","..OQMQOQMMqO....","..OMMQOMQMqO....","..OOQQQQQqOO....","...OQMMOMMO.....","...OQMMOMMO.....","...OQMqOMqO.....","...OOOOOOOO....."]}};

/* small pixel grid helpers for generated sprites */
const grid=(w,h)=>Array.from({length:h},()=>Array(w).fill('.'));
const rowsOf=G=>G.map(r=>r.join(''));
const put=(G,x,y,c)=>{if(G[y]&&x>=0&&x<G[0].length)G[y][x]=c};
const stamp=(G,x,y,img)=>img.forEach((s,j)=>[...s].forEach((c,i)=>{if(c!=='.')put(G,x+i,y+j,c)}));
/* the Woiykan: a Ratarajan sphere-cluster ship, as a hologram */
const holo=fr=>{const G=grid(16,20);
 [[8,9,3],[3,6,2],[13,6,2],[4,13,2],[12,13,2],[8,3,1],[8,15,1]].forEach(([cx,cy,rd])=>{
  for(let y=-rd;y<=rd;y++)for(let x=-rd;x<=rd;x++){const d=x*x+y*y;if(d<=rd*rd+rd*.6)put(G,cx+x,cy+y,d>=(rd-.5)*(rd-.5)?'a':x+y>0?'d':'b')}
  put(G,cx-(rd>1?1:0),cy-(rd>1?1:0),'w')});
 for(let y=17;y<20;y++)for(let x=5;x<11;x++)if((x+y)%2===0)put(G,x,y,'d');
 if(fr)G.forEach((row,y)=>{if(y%3===fr-1)row.forEach((c,x)=>{if(c!=='.')row[x]='d'})});
 return rowsOf(G)};
const HOLO_PAL={a:'#BFF6FA',b:'#5CCAD8',w:'#FFFFFF',d:'#2A8C9C'};
const HOLO=[0,1,2].map(fr=>{const r=holo(fr);return {pal:HOLO_PAL,down:r,up:r,left:r}});
const WOIY={get art(){const k=Math.floor(Date.now()/150)%8;return HOLO[k<5?0:k-4>2?0:k-4]}};
/* saberstones: 10 cm eggshell spheres with a star-shaped mouth */
const EGG=['.OOO.','OWWLO','OLLLO','OLLSO','.OOO.'];
const swarm=fr=>{const G=grid(16,11);[[0,1,0],[5,0,1],[11,1,2],[2,6,1],[7,5,2],[11,6,0]].forEach(([x,y,m])=>{stamp(G,x,y,EGG);const k=(m+fr)%4;
 put(G,x+[1,2,3,2][k],y+[2,1,2,3][k],'X');put(G,x+2,y+2,'X')});return rowsOf(G)};
const SWARM_PAL={O:OL,W:'#FFFFFF',L:'#DCDCD5',S:'#A9A9A2',X:'#1B1E2B'};
const SW=[0,1,2,3].map(fr=>{const r=swarm(fr);return {pal:SWARM_PAL,down:r,up:r,left:r}});
const SWARM={get art(){return SW[Math.floor(Date.now()/220)%4]}};
/* Kajval Ghosts: headless, chimp-like, two tails */
const GHOST_PAL={O:OL,L:'#5E6574',M:'#40464F',D:'#2A2E36',G:'#D9B8FF',g:'#9A7ACC',T:'#4A505C'};
const GHOST={art:{pal:GHOST_PAL,
 down:[".OO..........OO.","OTTO........OTTO","OTO..........OTO",".OTO........OTO.","..OTOOOOOOOOTO..","..OLLLLLLLLLLO..",".OLLMMMGGMMMLLO.",".OLMMMMggMMMMLO.",
  "OLLOMMMMMMMMOLLO","OLO.OMMMMMMO.OLO","OLO.ODDDDDDO.OLO","OLO.OMMOOMMO.OLO","OMO.OLMOOMLO.OMO","ODO.OLMOOMLO.ODO","OOO.OMMOOMMO.OOO","...OMMO..OMMO...","...ODDO..ODDO...","...OOOO..OOOO..."],
 up:[".OO..........OO.","OTTO........OTTO","OTO..........OTO",".OTO........OTO.","..OTOOOOOOOOTO..","..OLLLLLLLLLLO..",".OLLMMMMMMMMLLO.",".OLMMMMMMMMMMLO.",
  "OLLOMMMMMMMMOLLO","OLO.OMMMMMMO.OLO","OLO.ODDDDDDO.OLO","OLO.OMMOOMMO.OLO","OMO.OLMOOMLO.OMO","ODO.OLMOOMLO.ODO","OOO.OMMOOMMO.OOO","...OMMO..OMMO...","...ODDO..ODDO...","...OOOO..OOOO..."],
 left:["..........OO....",".........OTTO...","..........OTO...",".........OTO....","....OOOOOOTO....","...OLLLLLLLO....","..OGLLMMMMMO....","..OgLMMMMMMO....",
  ".OLLOMMMMMMO....","OLLO.OMMMMDO....","OLO..ODDDDDO....","OLO..OMMOMMO....","OLO..OLMOLMO....","ODO.OLMO.OLMO...","OOO.OMMO.OMMO...","....OMMO..OMMO..","....ODDO..ODDO..","....OOOO..OOOO.."]}};
const GHOST_DEAD={art:{pal:GHOST_PAL,down:["................","..OO......OOO...",".OLMO..OO.OMMO..","OLMMDOOLLOODMO..","OMDDOgOMMOOO.OO.","ODOOOOODDOO.OLMO",".OO..OOOOO..ODDO","..............OO"]}};
GHOST_DEAD.art.up=GHOST_DEAD.art.left=GHOST_DEAD.art.down;
/* Mique, after the shot */
const CORPSE={art:{pal:{O:OL,Y:'#C9CDD2',V:'#26384A',X:'#07070A',C:'#5A5A62',c:'#46464C',T:'#C9A23A',K:'#2A2A33',B:'#7A1E1E',b:'#4E1212'},
 down:["................","................",".OOOO...........","OYYYYO.OOOOOOOO.","OVXVYOOCCCTCCCKO","OVVVYOCCCCTCCcKO",".OOOOOOccCTcccOO","bBBb.OOOOOOOOO.."]}};
CORPSE.art.up=CORPSE.art.left=CORPSE.art.down;
/* the mummified Kajval family: an adult reaching out, holding a child; prehensile furred tails */
const MUMMY={art:{pal:{O:OL,B:'#7A6650',b:'#5A4A3A',L:'#9A8468',F:'#C2B08E',E:'#2A2018'},
 down:["................",".OO.OOO.........","OLBOOLLBOOOOOOO.",".OBBBEBBBbBbBBBO","..OOOBBbBbBBBOFO",".....OOOOOOOO.FO","..............FO","...OO.OOO.......",
  "..OLBOOLBOOOOO..","...OBBEBBBbBBOF.","....OOOOOOOOO.FO","..............OO"]}};
MUMMY.art.up=MUMMY.art.left=MUMMY.art.down;

/* ---------------- tiles ---------------- */
const BISON=["................","...OOOO.........","..OLLLLOOOO.....",".OLLBBBBLLLOOO..","OHLBBBBBBBBBLLO.","ObBBCBBBBBBBBBBO","ObbBBBBBBBBCBBBO",".ObbBBBBBBBBBBO.","..OObBBbbbbBBO..","...ObO.ObO.ObO..","...ObO.ObO.ObO..","...OOO.OOO.OOO.."];
const BISON_PAL={O:OL,B:'#5E4E42',b:'#463A30',L:'#7A6858',H:'#C9C2B5',C:'#BFDCE8'};
const blk=(x,y)=>{const c=at(x,y);let a=x,b=y;while(at(a-1,y)===c)a--;while(at(x,b-1)===c)b--;return [a,b]};
let CY=-1e9; // top of the tile being drawn by clipT: multi-tile shapes skip rows outside it
const clipT=(X,Y,fn)=>{g.save();g.beginPath();g.rect(X,Y,16,16);g.clip();CY=Y;fn();CY=-1e9;g.restore()};
const rowIn=py=>CY<-1e8||(py>=CY&&py<CY+16);
const oval=(cx,cy,rx,ry,c)=>{for(let dy=-ry;dy<=ry;dy++){if(!rowIn(cy+dy))continue;const w=Math.round(rx*Math.sqrt(Math.max(0,1-(dy/ry)**2)));r(cx-w,cy+dy,w*2,1,typeof c==='function'?c(dy):c)}};
const ash=(X,Y,x,y,t)=>{r(X,Y,16,16,'#2E2724');const h=hash(x,y);
 r(X+(h%13),Y+(h*7%13),2,1,'#3A312C');r(X+(h*3%14),Y+(h*11%14),1,1,'#3B322D');r(X+(h*5%13)+1,Y+(h%11)+2,1,1,'#221C1A');r(X+(h*9%12)+2,Y+(h*3%9)+5,2,1,'#282220');
 if(h%4===0){const gx=X+(h%9)+3,gy=Y+(h%5)+8;r(gx,gy,1,2,'#1A1614');r(gx+1,gy-1,1,3,'#1A1614');r(gx+2,gy+1,1,1,'#1A1614')}
 if(h<9){r(X+4,Y+7,8,4,'#221C1A');r(X+5,Y+6,6,1,'#3E3530');r(X+6,Y+7,4,3,'#7E746C');r(X+6,Y+7,3,1,'#A39A90');r(X+9,Y+9,1,1,'#5E564F')}
 if(h%17===3&&(Math.floor((t||0)/500)+h)%6===0)r(X+(h%12)+2,Y+(h%10)+3,1,1,'#CFE8F2')};
const dustBase=(X,Y,x,y,t,c)=>{r(X,Y,16,16,'#B5D2E1');const h=hash(x,y);
 r(X+(h%8),Y+3,6,1,'#CFE8F2');r(X+(h%5)+6,Y+9,7,1,'#CFE8F2');r(X+(h%7)+1,Y+13,5,1,'#9EBFD1');r(X+(h%9)+3,Y+6,3,1,'#A3C4D5');
 for(let i=0;i<4;i++){const k=(h*(i+3)+i*41)%100;const ph=(Math.floor(t/240)+k)%9;if(ph<2)r(X+(k%15),Y+((k*7)%15),1,1,ph?'#FFFFFF':'#EAF8FF')}
 if(at(x,y-1)!==c&&!(c==='~'&&at(x,y-1)==='c'))r(X,Y,16,2,'#E6F4FA')};
const saber=(X,Y,x,y,t)=>{const h=hash(x,y),wave=((y*16-Math.floor(t/28))%96+96)%96<28,n=wave?2:(h%3===0?1:0);
 if(wave)r(X,Y+((Math.floor(t/28))%16),16,2,'#9EBFD1');
 for(let i=0;i<n;i++){const k=(h*(i+2)+i*37)%100,px=X+((k+Math.floor(t/60)*(i?1:-1))%12+12)%12,py=Y+1+i*7+(k%3),m=(Math.floor(t/150)+i+h)%4;
  r(px,py+1,5,4,'#7E7E78');r(px+1,py,3,1,'#7E7E78');r(px+1,py+1,3,3,'#E8E8E2');r(px+1,py+1,2,1,'#FFFFFF');r(px+1,py+3,3,1,'#BDBDB5');r(px+[1,2,3,2][m],py+2,1,1,'#26262A');r(px+2,py+[1,2,2,3][m],1,1,'#26262A')}};
const rubble=(X,Y,x,y)=>{r(X,Y,16,16,'#3E3936');const h=hash(x,y);
 [[1,1,6,5],[8,0,7,6],[0,7,7,6],[7,7,9,5],[3,12,6,4],[10,12,5,4]].forEach(([a,b,w,hh],i)=>{const c=(h+i)%3;r(X+a,Y+b,w,hh,OL);r(X+a,Y+b,w-1,hh-1,c?'#6E6660':'#7C746D');r(X+a,Y+b,w-1,1,'#958C84')})};
const tank=(X0,Y0)=>{ // 48×32 side view: tracks, hull, missile pod
 r(X0+2,Y0+30,44,2,'rgba(0,0,0,.35)');
 r(X0+1,Y0+19,46,12,OL);r(X0+2,Y0+20,44,10,'#2C2C30');r(X0+2,Y0+20,44,1,'#45454C');
 for(let i=0;i<5;i++){const wx=X0+5+i*9;r(wx,Y0+22,6,6,'#4A4A52');r(wx+1,Y0+23,4,4,'#6A6A72');r(wx+2,Y0+24,2,2,'#2C2C30')}
 for(let i=0;i<22;i++)r(X0+3+i*2,Y0+29,1,1,'#1A1A1E');
 r(X0+3,Y0+9,42,12,OL);r(X0+4,Y0+10,40,10,'#5A5E46');r(X0+4,Y0+10,40,2,'#737858');r(X0+4,Y0+18,40,2,'#474A37');
 r(X0+41,Y0+11,3,7,'#4A4E3A');r(X0+42,Y0+13,2,3,'#FFE9A0');r(X0+44,Y0+13,1,3,'#FFF6D0');
 r(X0+8,Y0+14,10,2,'#E8962A');r(X0+8,Y0+14,2,2,'#2C2C30');r(X0+12,Y0+14,2,2,'#2C2C30');r(X0+16,Y0+14,2,2,'#2C2C30');
 r(X0+24,Y0+13,1,5,'#474A37');r(X0+32,Y0+13,1,5,'#474A37');
 r(X0+13,Y0+2,24,9,OL);r(X0+14,Y0+3,22,7,'#4E523C');r(X0+14,Y0+3,22,1,'#676C50');
 for(let i=0;i<3;i++){r(X0+29+i*2,Y0+4,2,5,'#26262A');r(X0+29+i*2,Y0+4,2,1,'#D2533F')}
 r(X0+16,Y0+5,8,3,'#26262A');r(X0+17,Y0+6,2,1,'#69CFD8')};
const tankTile=base=>(X,Y,x,y,t)=>{base(X,Y,x,y,t);const [a,b]=blk(x,y);clipT(X,Y,()=>tank(X-(x-a)*16,Y-(y-b)*16))};
const nFloor=(X,Y,x,y,t)=>{const o=Math.round(Math.sin(t/1300+x*.15))*1;r(X,Y,16,16,'#565C63');r(X,Y,16,1,'#454B51');r(X,Y,1,16,'#454B51');
 for(let i=0;i<4;i++){const px=X+2+((i*4+o+16)%14),py=Y+3+i*3;r(px,py,2,1,'#5E656C')}
 if(hash(x,y)<10)r(X+5,Y+9,3,1,'#454B51')};
const wallStone=(X,Y,x,y,front)=>{ // BK37's 50 m livestone ring wall
 if(!front){r(X,Y,16,16,'#A8A398');r(X,Y,16,1,'#BDB8AD');r(X,Y+8,16,1,'#958F85');r(X+((y%2)?5:12),Y,1,8,'#958F85');r(X+((y%2)?11:3),Y+8,1,8,'#958F85');
  if(hash(x,y)<20)r(X+3,Y+4,4,1,'#B6CBB0')}
 else{r(X,Y,16,16,'#7E796F');r(X,Y,16,2,'#C2BDB2');r(X,Y+2,16,1,'#5E5A53');r(X+((x%3)*5)+2,Y+4,1,10,'#6E6A62');r(X,Y+14,16,2,'#57534C');
  if(hash(x,y)<25)r(X+(hash(y,x)%10)+2,Y+6,3,4,'#6E6A62')}};
const HOO=['#A39788','#8C8174','#776D62','#615850','#4A433E'],HOOD=HOO.map(c=>shadeLazy(c));
function shadeLazy(c){let s=null;return ()=>s||(s=shade(c,.82))}
const under=(X,Y,x,y,t)=>{if(y<=0)sky(X,Y,x,y,t);else if(y===1)horizon(X,Y,x,y,t);else if(y<=3)wallStone(X,Y,x,y,y===3);else ash(X,Y,x,y,t)};
const hoodoo=(X,Y,x,y,t,ch)=>{const L=at(x-1,y)!==ch,base=at(x,y+1)!==ch,X0=L?X:X-16;under(X,Y,x,y,t);
 for(let j=0;j<16;j++){const gy=y*16+j,li=Math.round(1.6+1.4*Math.sin(gy/11+x)+.8*Math.sin(gy/3.3)),ri=Math.round(1.6+1.4*Math.sin(gy/13+2)+.8*Math.cos(gy/4.1));
  const b=(base&&j>11)?-(j-11):0,a=Math.max(0,li+b),e=32-Math.max(0,ri+b),k=gy%15,dark=k<2,lite=k===2;
  r(X0+a-1,Y+j,e-a+2,1,OL);[[0,6],[6,12],[12,19],[19,25],[25,32]].forEach(([u,v],i)=>{const s=Math.max(u,a),w=Math.min(v,e)-s;if(w>0)r(X0+s,Y+j,w,1,dark?HOOD[i]():lite&&i<3?'#B3A898':HOO[i])})}
 const h=hash(x,y);if(h<30){const cx=X0+(L?7:18)+(h%6),cy=Y+3+(h%8);r(cx,cy,4,3,'#2A2522');r(cx+1,cy-1,2,1,'#2A2522');r(cx,cy+3,4,1,'#8C8174')}
 if(h%7===3)r(X0+(L?10:22),Y+(h%9)+2,1,6,'#4A433E');
 if(base){r(X0-2,Y+14,36,2,'#3E3936');r(X0+(L?1:20),Y+13,4,3,'#615850');r(X0+(L?1:20),Y+13,4,1,'#8C8174');r(X0+(L?9:28),Y+14,3,2,'#776D62')}};
const sky=(X,Y,x,y,t)=>{stars(X,Y,x,y,t,.08);if(x===16&&y===0){r(X+6,Y+5,4,4,'#FFF6D8');r(X+7,Y+4,2,6,'#FFF6D8');r(X+5,Y+6,6,2,'#FFF6D8');r(X+7,Y+6,2,2,'#FFFFFF')}};
const horizon=(X,Y,x,y,t)=>{stars(X,Y,x,y,t,.08);
 for(let i=0;i<16;i++){const gx=x*16+i;let h=4+Math.round(4*Math.abs(Math.sin(gx/23))+2*Math.abs(Math.sin(gx/9.7)));
  const d=Math.abs(gx-152);if(d<44)h=Math.max(h,16-Math.floor(d/4));r(X+i,Y+16-h,1,h,'#1A1517');
  if(d<44&&d>3&&(gx+Math.floor(t/300))%11===0)r(X+i,Y+16-h+1,1,Math.min(h-1,3+(d%4)),'#C2400E');}
 if(Math.abs(x*16+8-152)<10){const p=Math.floor(t/200);r(X+(152-x*16)-2,Y+1,4,1,'#FF8A2A');for(let k=0;k<4;k++){const py=Y-((p+k*4)%14)+1;if(py>=Y-6)r(X+(152-x*16)-1+(k%2),py,1,1,k%2?'#7A2410':'#C2400E')}}
 r(X,Y+15,16,1,'#3A1A10')};
const TILES={
 /* ship: windowless command deck + hangar 3 */
 desk:(X,Y,x,y,t)=>{deck(X,Y,x,y);r(X,Y+5,16,9,OL);r(X+1,Y+6,14,7,'#CFC6B0');r(X+1,Y+6,14,1,'#E4DCCB');r(X+1,Y+11,14,2,'#A99F88');
  r(X+3,Y,10,7,OL);r(X+4,Y+1,8,5,'#1A2A30');const k=(Math.floor(t/500)+x*3+y)%7;r(X+5,Y+2,6,1,k<3?'#69CFD8':'#2C5D63');r(X+5,Y+4,4,1,k===4?'#E8962A':'#3C6E6E');
  r(X+5,Y+8,6,2,'#8E8672');r(X+2,Y+13,2,3,'#6E685A');r(X+12,Y+13,2,3,'#6E685A')},
 bigscreen:(X,Y,x,y,t)=>{const [a,b]=blk(x,y);const X0=X-(x-a)*16,Y0=Y-(y-b)*16;
  r(X,Y,16,16,'#2B3238');clipT(X,Y,()=>{r(X0+2,Y0+3,188,27,'#04060A');
   for(let i=0;i<30;i++){const sx=(i*53)%186,sy=(i*29)%26;r(X0+3+sx,Y0+3+sy,1,1,(Math.floor(t/700)+i)%7?'#5A6A7A':'#FFFFFF')}
   if(!f().warned){const dr=Math.sin(t/1800)*2;
    [[96,16,6],[86,12,4],[106,12,4],[90,22,4],[103,22,4],[78,17,3],[114,17,3],[96,7,3],[96,26,2],[70,11,2],[122,11,2],[72,23,2],[120,23,2],[84,4,2],[108,4,2]].forEach(([cx,cy,rd],i)=>{
     const px=X0+cx+Math.round(dr*(i%3-1)),py=Y0+cy;oval(px,py,rd+1,rd+1,OL);oval(px,py,rd,rd,dy=>dy<-rd/3?'#FFF2C8':dy<rd/3?'#E2CF96':'#A8956A');if(i%4===0)r(px-1,py-1,1,1,'#FFFFFF')});
    r(X0+8,Y0+5,22,2,'#69CFD8');r(X0+8,Y0+9,14,1,'#3C6E6E');r(X0+8,Y0+12,18,1,'#3C6E6E');}
   else{const cx=X0+96,cy=Y0+58;oval(cx,cy,49,49,OL);oval(cx,cy,48,48,dy=>dy<-40?'#3A3436':'#2A2628');
    [[-30,-40,10],[-6,-46,14],[20,-42,9],[34,-30,6]].forEach(([dx,dy,w])=>{r(cx+dx,cy+dy,w,2,'#CFE8F2');r(cx+dx+2,cy+dy+2,w-4,1,'#9EBFD1')});
    const p=(Math.sin(t/400)+1)/2;[[-40,-28],[-20,-36],[4,-38],[26,-33],[-12,-28],[14,-26]].forEach(([dx,dy],i)=>{r(cx+dx,cy+dy,6,1,i%2?'#FF6A1A':`rgba(255,${120+p*80|0},40,1)`);r(cx+dx+5,cy+dy+1,4,1,'#C2310E')});
    r(X0+8,Y0+5,30,2,'#E8962A');r(X0+8,Y0+9,20,1,'#7A5420');r(X0+150,Y0+5,30,2,'#E8962A');}
   for(let j=0;j<32;j+=2)if(rowIn(Y0+j))r(X0,Y0+j,192,1,'rgba(255,255,255,.035)')});
  if(y===b+1)r(X,Y+14,16,2,'#3C454C')},
 holo:(X,Y,x,y,t)=>{deck(X,Y,x,y);const p=(Math.sin(t/300)+1)/2;r(X+2,Y+9,12,6,OL);r(X+3,Y+10,10,4,'#2B3238');r(X+4,Y+11,8,2,`rgba(105,207,216,${.5+p*.5})`);r(X+6,Y+10,4,1,'#BFEFF5')},
 door:(X,Y,x,y)=>{deck(X,Y,x,y);r(X,Y,3,16,'#868C84');r(X+13,Y,3,16,'#868C84');r(X+3,Y,1,16,'#5D6360');r(X+12,Y,1,16,'#5D6360');for(let i=0;i<16;i+=4)r(X+4,Y+i,8,2,'#E8B73A')},
 hfl:(X,Y,x,y)=>{plate(X,Y,x,y);if((x===15||x===21)&&y>=2&&y<=5)r(X+7,Y,2,16,'#C9A23A');if(y===5&&x>=15&&x<=21)r(X,Y+14,16,2,'#C9A23A')},
 headsup:(X,Y,x,y,t)=>{TILES.hfl(X,Y,x,y);const [a,b]=blk(x,y);const cx=X-(x-a)*16+40,cy=Y-(y-b)*16+16;
  clipT(X,Y,()=>{oval(cx,cy+12,34,3,'rgba(0,0,0,.28)');r(cx-22,cy+9,2,5,OL);r(cx+20,cy+9,2,5,OL);oval(cx,cy,38,13,OL);
   oval(cx,cy,37,12,dy=>dy<=-9?'#F4F2F8':dy<=-4?'#E4E0EC':dy<=4?'#D4CFDF':dy<=8?'#BEB7CB':'#A39BB2');
   for(let i=0;i<5;i++){r(cx-31+i*5,cy-4,3,2,'#2B3550');r(cx-31+i*5,cy-4,1,1,'#BFE6FF')}
   const s=Math.floor(t/400)%6;r(cx+8+s*3,cy-8,2,1,'#F7D8E8');r(cx-10+s,cy-6,1,1,'#D8F0F7');r(cx+28,cy-2,1,1,(Math.floor(t/600)%2)?'#69CFD8':'#2C5D63')})},
 ramp:(X,Y,x,y,t)=>{TILES.hfl(X,Y,x,y);r(X+2,Y,12,16,'#8E96A0');r(X+2,Y,12,1,'#B9C1C9');for(let i=2;i<16;i+=4){r(X+5,Y+i,6,1,'#6E7680');r(X+7,Y+i-1,2,1,'#6E7680')}
  const p=(Math.sin(t/300)+1)/2;r(X+2,Y,12,2,`rgba(105,207,216,${.3+p*.5})`)},
 /* the Natt: bare metal, wheel-locked hatches, green or UV light, swaying floor */
 nWall:(X,Y,x,y,t)=>{r(X,Y,16,16,'#2A2E34');r(X,Y,16,1,'#343940');r(X,Y,1,16,'#30353B');for(const [a,b] of [[2,2],[13,2],[2,13],[13,13]])r(X+a,Y+b,1,1,'#3E444B');
  if((x*7+y*3)%5===0){r(X,Y+6,16,3,'#3A3F45');r(X,Y+6,16,1,'#4E555D')}
  if(front(x,y)&&at(x,y+1)){const uv=x>15;r(X,Y+7,16,9,'#6A7179');r(X,Y+7,16,1,'#8E969E');r(X+(x%2?3:11),Y+8,1,1,'#9AA2AA');const fl=(hash(x,y)+Math.floor(t/90))%53===0;
   r(X+1,Y+10,14,2,fl?'#2A2F35':uv?'#9A8CFF':'#8FE39A');r(X+1,Y+12,14,1,uv?'#5A4FB0':'#4E9A5A');r(X,Y+14,16,2,'#454B52')}},
 nFloor,
 hatch:(X,Y,x,y,t)=>{nFloor(X,Y,x,y,t);r(X,Y,2,16,'#2A2E34');r(X+14,Y,2,16,'#2A2E34');r(X+2,Y,12,2,'#3A3F45');r(X+2,Y,1,16,OL);r(X+13,Y,1,16,OL);
  r(X+3,Y+1,10,1,'#6A7179');if(y===1){for(let k=0;k<4;k++)r(X+5,Y+4+k*3,6,1,'#9AA2AA');r(X+5,Y+3,1,13,'#7A828A');r(X+10,Y+3,1,13,'#7A828A')}
  else{r(X,Y+3,3,10,'#6A7179');r(X,Y+6,2,4,'#C9A23A');r(X+1,Y+5,1,6,'#C9A23A')}},
 nWin:(X,Y,x,y,t)=>{r(X,Y,16,16,'#2A2E34');r(X+1,Y+3,14,10,'#04060A');const o=Math.floor(t/380);
  for(let i=0;i<3;i++){const k=hash(x*3+i,y);r(X+2+(k%12),Y+4+(k%5),1,1,(k+Math.floor(t/800))%5?'#8FA3B8':'#FFFFFF')}
  for(let i=0;i<14;i++){const gx=x*16+i+o;let h=2+Math.round(1.5*Math.sin(gx/7)+Math.sin(gx/3.1));if(gx%90<14)h+=Math.max(0,4-Math.abs(gx%90-7));
   r(X+1+i,Y+13-h,1,h,'#1E1A1A');if(gx%90===7)r(X+1+i,Y+13-h-1,1,1,'#FF6A1A');if(gx%37<3)r(X+1+i,Y+12,1,1,'#FF6A1A');if(gx%23===5)r(X+1+i,Y+12,1,1,'#CFE8F2')}
  r(X,Y,16,3,'#2A2E34');r(X,Y+13,16,3,'#6A7179');r(X,Y+13,16,1,'#8E969E');r(X,Y+3,1,10,'#454B52');if(x%2)r(X+15,Y+3,1,10,'#454B52')},
 table:(X,Y,x,y,t)=>{nFloor(X,Y,x,y,t);r(X+1,Y+4,14,9,OL);r(X+2,Y+5,12,7,'#7A828A');r(X+2,Y+5,12,1,'#9FE8B0');r(X+2,Y+11,12,1,'#5E646B');
  r(X+3,Y+12,1,3,OL);r(X+12,Y+12,1,3,OL);if(x%3)r(X+4,Y+6,5,3,'#C9A23A');else r(X+4,Y+6,5,3,'#8E5A3A');r(X+5,Y+7,3,1,'#E8D9A8');r(X+10,Y+6,2,3,'#E8E1D0')},
 counter:(X,Y,x,y,t)=>{nFloor(X,Y,x,y,t);r(X,Y+3,16,12,OL);r(X,Y+4,16,3,'#9AA2AA');r(X,Y+4,16,1,'#C2C9D0');r(X,Y+7,16,7,'#5E646B');r(X+(x%2?3:9),Y+9,4,3,'#4C5258');
  if(x===2){r(X+4,Y,7,5,OL);r(X+5,Y+1,5,3,'#3A3F45');const s=Math.floor(t/300)%4;r(X+6+(s%2),Y-1-s,1,1,'rgba(230,240,240,.7)')}
  if(x===4){r(X+5,Y+1,4,3,'#E8E1D0');r(X+6,Y+2,2,1,'#8E5A3A')}},
 footy:(X,Y,x,y,t)=>{r(X,Y,16,16,'#2A2E34');const [a]=blk(x,y);const X0=X-(x-a)*16;clipT(X,Y,()=>{ // canteen screen: a match on a circular pitch of blue grass (c018)
   r(X0+1,Y+1,30,12,OL);r(X0+2,Y+2,28,10,'#0C1018');oval(X0+16,Y+7,13,5,'#3A3F48');oval(X0+16,Y+7,11,4,dy=>dy<0?'#3F6FD6':'#355FC0');
   r(X0+16,Y+3,1,8,'#BFD8F5');r(X0+15,Y+6,3,2,'#BFD8F5');r(X0+16,Y+6,1,2,'#355FC0');r(X0+6,Y+6,1,3,'#BFD8F5');r(X0+26,Y+6,1,3,'#BFD8F5');const p=t/45;
   const bx=X0+9+Math.round((Math.sin(p/9)+1)*6),by=Y+6+Math.round(Math.sin(p/5));r(bx,by,2,1,'#E8D6A8');r(bx+2,by,1,1,'#8E7A5A');r(bx+3,by,2,1,'#E8D6A8'); // one ball: two rugby balls stuck together
   r(X0+8+Math.round((Math.sin(p/11)+1)*5),Y+5,1,2,'#D2533F');r(X0+12+Math.round((Math.cos(p/13)+1)*5),Y+8,1,2,'#F2D24A');r(X0+16+Math.round((Math.sin(p/7)+1)*3),Y+6,1,2,'#D2533F')});
  r(X,Y+13,16,3,'#6A7179');r(X,Y+13,16,1,'#8E969E')},
 locker:(X,Y,x,y,t)=>{nFloor(X,Y,x,y,t);r(X+1,Y,14,16,OL);r(X+2,Y+1,12,14,'#6A7179');r(X+2,Y+1,12,1,'#8A929A');r(X+4,Y+3,8,7,'#2B3238');
  r(X+5,Y+4,6,5,'#D8DCE0');r(X+6,Y+6,4,2,'#3A6E8A');r(X+6,Y+6,1,1,'#BFE6FF');r(X+2,Y+11,12,1,'#E8962A');r(X+11,Y+12,2,2,'#2B3238')},
 mach:(X,Y,x,y,t)=>{nFloor(X,Y,x,y,t);r(X+1,Y+1,14,14,OL);r(X+2,Y+2,12,12,'#5E646B');r(X+2,Y+2,12,1,'#79818A');r(X+4,Y+5,8,5,'#3A3F45');
  const k=Math.floor(t/250+x+y);r(X+5,Y+6,2,1,k%3?'#7FD38A':'#2A4A30');r(X+8,Y+6,2,1,k%4?'#8A7BFF':'#2E2850');r(X+5,Y+8,6,1,'#2A2F35');r(X+3,Y+12,10,1,'#4C5258')},
 tankN:tankTile(nFloor),
 /* Kajval surface: frozen-air dust oceans, lava, black rock, kilometre-tall hoodoos, dead herds */
 sky,horizon,
 ash,
 track:(X,Y,x,y,t)=>{ash(X,Y,x,y,t);for(const tx of [2,10]){r(X+tx,Y,4,16,'#231D1B');for(let i=0;i<16;i+=3)r(X+tx,Y+i,4,1,'#1A1513')}},
 rock:(X,Y,x,y,t)=>{ash(X,Y,x,y,t);r(X+1,Y+5,14,10,OL);r(X+2,Y+4,11,2,OL);r(X+2,Y+6,12,8,'#6E6C6A');r(X+3,Y+5,9,2,'#86837F');r(X+4,Y+4,6,1,'#9A9692');r(X+3,Y+12,11,2,'#545250'); // gray pocked pumice (c018)
  [[4,8],[7,10],[10,7],[11,11],[5,12],[8,6]].forEach(([a,b])=>r(X+a,Y+b,1,1,'#3E3C3A'));r(X+9,Y+9,2,1,'#3E3C3A')},
 lava:(X,Y,x,y,t)=>{const o=Math.floor(t/160),h=hash(x,y);r(X,Y,16,16,'#C9360E');
  for(let j=0;j<16;j++){const s=((j*3-o+x*16+y*5)%24+24)%24;r(X+(s%16),Y+j,4,1,'#FF8A2A');r(X+((s+9)%16),Y+j,2,1,'#FFD27A');if((j+o)%5===0)r(X+((s+5)%16),Y+j,3,1,'#A82A0A')}
  const c=((o>>2)+h)%14;r(X+c,Y+3+(h%6),5,3,'#4A1608');r(X+c+1,Y+3+(h%6),3,1,'#6A2410');
  const L=k=>k!=='L';if(L(at(x-1,y))){r(X,Y,2,16,'#1E1210');r(X+2,Y,1,16,'#7A2410')}if(L(at(x+1,y))){r(X+14,Y,2,16,'#1E1210');r(X+13,Y,1,16,'#7A2410')}
  if(L(at(x,y-1))){r(X,Y,16,2,'#1E1210');r(X,Y+2,16,1,'#7A2410')}if(L(at(x,y+1))){r(X,Y+14,16,2,'#1E1210')}},
 dust:(X,Y,x,y,t)=>dustBase(X,Y,x,y,t,'~'),
 hoodoo:(X,Y,x,y,t)=>clipT(X,Y,()=>hoodoo(X,Y,x,y,t,'H')),
 topple:(X,Y,x,y,t)=>{if(!f().causeway)return clipT(X,Y,()=>hoodoo(X,Y,x,y,t,'Q'));
  under(X,Y,x,y,t);
  if(at(x,y+1)!=='Q')[[1,10,5,4],[6,12,6,4],[11,9,5,5],[3,7,3,3],[9,5,3,3]].forEach(([a,b,w,hh],i)=>{r(X+a,Y+b,w,hh,OL);r(X+a,Y+b,w-1,hh-1,i%2?'#6E6660':'#7C746D');r(X+a,Y+b,w-1,1,'#958C84')}); // base burst apart: rubble, no stump (c018)
  const a=since('causeAt');if(a<5000){g.fillStyle=`rgba(200,195,190,${.5*(1-a/5000)})`;g.fillRect(X,Y,16,16)}},
 dtree:(X,Y,x,y,t)=>{ash(X,Y,x,y,t);const c='#141110';r(X+7,Y+4,2,12,c);r(X+6,Y+14,4,2,c);r(X+4,Y+6,3,1,c);r(X+3,Y+3,1,4,c);r(X+9,Y+8,3,1,c);r(X+12,Y+5,1,4,c);r(X+8,Y+1,1,3,c);r(X+5,Y+2,1,2,c);r(X+10,Y+3,1,2,c);
  r(X+7,Y+5,1,9,'#3A332F');r(X+3,Y+3,1,1,'#3A332F');r(X+4,Y+15,1,1,'#3A332F');r(X+11,Y+14,2,1,'#3A332F');
  [[1,1,4,3],[7,0,4,2],[10,2,4,3],[2,5,3,2],[11,7,3,2]].forEach(([a,b,w,hh],i)=>{r(X+a,Y+b,w,hh,'#2E2018');r(X+a+1,Y+b,w-2,1,i%2?'#4A3424':'#3E2C1E')})}, // leaves kept, darkened to umber (c018)
 bison:(X,Y,x,y,t)=>{ash(X,Y,x,y,t);const fl=hash(x,y)%2;drawArt(BISON,BISON_PAL,X,Y,!!fl);
  const k=(Math.floor(t/350)+hash(x,y))%6;r(X+(fl?15-(4+k*2):4+k*2),Y+9,1,1,'#E8F8FF');r(X+(fl?15-(10-k):10-k),Y+12,1,1,'#CFE8F2')},
 bird:(X,Y,x,y,t)=>{ash(X,Y,x,y,t);r(X+5,Y+8,8,5,OL);r(X+6,Y+9,5,3,'#6E6A66');r(X+3,Y+8,4,2,OL);r(X+4,Y+8,3,1,'#8A8580');r(X+11,Y+9,2,2,'#7A7672');r(X+13,Y+10,1,1,'#C9A23A');r(X+7,Y+12,1,2,'#C9A23A');
  if((Math.floor(t/400)+x)%4===0)r(X+8,Y+9,1,1,'#DDF2FA')},
 rwall:(X,Y,x,y)=>wallStone(X,Y,x,y,at(x,y+1)!=='W'&&at(x,y+1)!=='B'),
 breach:(X,Y,x,y,t)=>{if(!f().breach)return wallStone(X,Y,x,y,true);ash(X,Y,x,y,t);const L=at(x-1,y)!=='B';
  r(X+(L?0:10),Y,6,16,'#7E796F');r(X+(L?0:10),Y,6,2,'#C2BDB2');r(X+(L?5:10),Y+3,1,13,'#5E5A53');r(X+(L?6:7),Y+11,4,4,'#6E6A62');r(X+(L?8:4),Y+13,3,2,'#57534C');r(X+(L?7:6),Y+5,3,3,'#1A1514');
  const a=since('breachAt');if(a<2500){g.fillStyle=`rgba(255,240,210,${.85*(1-a/2500)})`;g.fillRect(X,Y,16,16)}},
 tankP:tankTile(ash),
 tankE:(X,Y,x,y,t)=>{if(!f().causeway)return tankTile(ash)(X,Y,x,y,t);TILES.track(X,Y,x,y,t);const [a,b]=blk(x,y);
  if(y===b){r(X+3,Y+6,10,8,OL);r(X+4,Y+7,8,6,'#3E3A36');for(let i=0;i<3;i++)r(X+5+i*2,Y+8,1,4,'#1A1514')}else{r(X+2,Y+2,12,6,'#1A1514');r(X+4,Y+3,8,3,'#26201E')}},
 hatchT:(X,Y,x,y,t)=>{ash(X,Y,x,y,t);r(X+2,Y,12,10,OL);r(X+3,Y,10,9,'#5A5E46');r(X+3,Y,10,1,'#737858');for(let i=2;i<9;i+=3)r(X+4,Y+i,8,1,'#474A37');r(X+6,Y+9,4,1,'#FFE9A0')},
 /* compound BK37 */
 prints:(X,Y,x,y,t)=>{r(X,Y,16,16,'#3E3530');const h=hash(x,y);r(X+(h%12)+2,Y+(h%9)+3,2,1,'#4A403A');r(X+(h*3%11)+2,Y+(h*7%11)+2,1,1,'#2E2724');
  [[4,1],[9,5],[4,9],[9,13]].forEach(([a,b])=>{r(X+a,Y+b,3,2,'#1E1714');r(X+a,Y+b+3,3,1,'#1E1714');r(X+a,Y+b-1,3,1,'#56493F')})},
 trap:(X,Y,x,y,t)=>{ash(X,Y,x,y,t);const c='#17573A';r(X,Y+7,16,1,c);r(X+7,Y,1,16,c);for(let i=0;i<16;i+=4){r(X+i,Y+7,1,1,'#1F7A50');r(X+7,Y+i,1,1,'#1F7A50')}
  r(X+7,Y+7,1,1,'#3AF09A');const p=(Math.floor(t/45)+x*5+y*11)%48;if(p<16){r(X+p,Y+7,2,1,'#5CFFB0');r(X+p,Y+6,1,3,'rgba(92,255,176,.35)')}else if(p<32){r(X+7,Y+p-16,1,2,'#5CFFB0')}
  if(hash(x,y)<10){r(X+2,Y+10,4,4,'#3A3F45');r(X+3,Y+11,2,2,(Math.floor(t/90)%2)?'#8A8F96':'#5A5F66')}},
 moat:(X,Y,x,y,t)=>{dustBase(X,Y,x,y,t,'~');if(f().attack&&!f().done)saber(X,Y,x,y,t);else{const h=hash(x,y);if((Math.floor(t/700)+h)%29===0)r(X+h%13,Y+h%11,2,1,'#ECECE6')}},
 cause:(X,Y,x,y,t)=>{if(!f().causeway)return TILES.moat(X,Y,x,y,t);rubble(X,Y,x,y);r(X,Y,2,16,'#B5D2E1');r(X+14,Y,2,16,'#B5D2E1');r(X+3,Y+6,10,3,'#857C74');
  const a=since('causeAt');if(a<5000){g.fillStyle=`rgba(200,195,190,${.6*(1-a/5000)})`;g.fillRect(X,Y,16,16)}},
 wreck:(X,Y,x,y,t)=>{if(!f().causeway)return ash(X,Y,x,y,t);ash(X,Y,x,y,t);r(X+1,Y+5,14,8,OL);r(X+2,Y+6,12,6,'#5A5E46');r(X+2,Y+6,12,1,'#737858');r(X+4,Y+2,8,5,OL);r(X+5,Y+3,6,3,'#4E523C');r(X+9,Y+3,2,2,'#D2533F');
  r(X,Y+10,16,6,'#CFE8F2');r(X+2,Y+10,4,1,'#E6F4FA');r(X+10,Y+1,5,4,'#CFE8F2');saber(X,Y,x,y,t)},
 tower:(X,Y,x,y,t)=>{const L=at(x-1,y)!=='T',R=at(x+1,y)!=='T';r(X,Y,16,16,'#6E6660');
  for(let j=0;j<16;j++){if((y*16+j)%13===0)r(X,Y+j,16,1,'#5E5752')}
  if(L){r(X,Y,1,16,OL);r(X+1,Y,4,16,'#8A817A')}if(R){r(X+15,Y,1,16,OL);r(X+11,Y,4,16,'#4E4844')}
  if(y%2===0){r(X,Y+11,16,2,'#958C84');r(X,Y+13,16,1,'#3E3936');if(!L&&!R&&x%2){r(X+3,Y+6,1,5,'#A39A90');r(X+12,Y+6,1,5,'#A39A90');r(X+2,Y+5,12,1,'#A39A90')}}
  else if(!L&&!R){r(X+5,Y+3,6,9,'#1C1A1C');r(X+6,Y+2,4,1,'#1C1A1C');r(X+5,Y+3,1,1,'#5E5752');r(X+10,Y+3,1,1,'#5E5752');if((x+y)%3===0)r(X+7,Y+8,2,1,'#4A6E8A')}
  if(at(x,y+1)!=='T'&&at(x,y+1)!=='A'){r(X,Y+13,16,3,'#5A534E');r(X,Y+13,16,1,'#857C74')}},
 arch:(X,Y,x,y,t)=>{const L=at(x-1,y)!=='A';r(X,Y,16,16,'#6E6660');r(X+(L?3:0),Y+3,13,13,'#141214');r(X+(L?6:0),Y+1,L?10:10,2,'#141214');
  r(X+(L?2:0),Y+2,1,14,'#958C84');r(X+(L?3:0),Y+2,L?3:0,1,'#958C84');if(!L){r(X+13,Y+3,1,13,'#958C84');r(X+10,Y+2,3,1,'#958C84')}r(X,Y,16,1,'#857C74')},
 iwall:(X,Y,x,y)=>wallStone(X,Y,x,y,front(x,y)&&at(x,y+1)!==null),
 /* the tower: spiral stair round a dark shaft, and the hangar at the top */
 twall:(X,Y,x,y,t)=>{r(X,Y,16,16,'#2E2926');for(const [o,b] of [[0,0],[8,8]]){r(X,Y+b,16,1,'#3A3431');r(X,Y+b+7,16,1,'#221E1C');r(X+((x*16+o+4)%16),Y+b,1,8,'#221E1C')}
  if(hash(x,y)<18)r(X+(hash(y,x)%10)+2,Y+3,3,2,'#26211F');
  if(front(x,y)&&at(x,y+1)){r(X,Y+8,16,8,'#4A423D');r(X,Y+8,16,1,'#6A605A');for(let k=0;k<4;k++)r(X+1+k*4,Y+10,2,5,'#5E5550');if(x%4===1)r(X+6,Y+9,4,1,'#4A6E8A')}},
 stair:(X,Y,x,y,t)=>{r(X,Y,16,16,'#4A433E');for(let k=0;k<3;k++){r(X,Y+k*5+1,16,4,'#6E655E');r(X,Y+k*5+1,16,1,'#8A8078');r(X,Y+k*5+4,16,1,'#463F3A')}
  if(at(x+1,y)==='O'){r(X+13,Y,3,16,'#8A8078');r(X+14,Y,1,16,'#5E5550');for(let i=1;i<16;i+=5)r(X+13,Y+i,3,1,'#A39A90')}
  if(at(x-1,y)==='O'){r(X,Y,3,16,'#8A8078');r(X+1,Y,1,16,'#5E5550');for(let i=1;i<16;i+=5)r(X,Y+i,3,1,'#A39A90')}
  if(at(x,y+1)==='O'){r(X,Y+13,16,3,'#8A8078');r(X,Y+14,16,1,'#5E5550')}
  if(at(x,y-1)==='O'){r(X,Y,16,3,'#8A8078');r(X,Y+1,16,1,'#5E5550')}
  const a=since('boomAt');if(a<1800&&y>=10){g.fillStyle=`rgba(170,110,255,${.7*(1-a/1800)})`;g.fillRect(X,Y,16,16)}},
 shaft:(X,Y,x,y,t)=>{r(X,Y,16,16,'#07070A');const h=hash(x,y);r(X+(h%11),Y+(h*7%13),4,1,'#1A1716');r(X+((h*3)%12),Y+((h*5)%13),3,1,'#121010');
  if(at(x-1,y)!=='O')r(X,Y,2,16,'#1A1716');if(at(x+1,y)!=='O')r(X+14,Y,2,16,'#121010');if(at(x,y-1)!=='O')r(X,Y,16,2,'#1E1A18')},
 landing:(X,Y,x,y)=>{r(X,Y,16,16,'#5A524C');r(X,Y,16,1,'#4E4741');r(X,Y,1,16,'#4E4741');if((x+y)%2)r(X+6,Y+6,4,4,'#625A53')},
 broken:(X,Y,x,y,t)=>{TILES.stair(X,Y,x,y,t);r(X,Y+4,16,9,'#07070A');r(X+1,Y+2,6,4,'#6E655E');r(X+9,Y+11,6,4,'#6E655E');r(X+3,Y+7,3,2,'#4A433E');r(X+11,Y+5,2,2,'#4A433E')},
 hwall:(X,Y,x,y)=>{r(X,Y,16,16,'#34343C');r(X+7,Y,2,16,'#40404A');r(X,Y+10,16,6,'#46464F');r(X,Y+10,16,1,'#5E5E6A');r(X+3,Y+12,10,1,'#3A3A44')},
 harch:(X,Y,x,y,t)=>{TILES.hwall(X,Y,x,y);r(X+2,Y+3,12,13,OL);r(X+3,Y+4,10,12,'#FFF0C8');r(X+4,Y+3,8,1,'#FFF0C8');r(X+3,Y+4,10,5,'#1A1A24');r(X+4,Y+5,1,1,'#FFFFFF');r(X+9,Y+6,1,1,'#C8D3DE');r(X+3,Y+12,10,4,'#4A403A');r(X+3,Y+12,10,1,'#8A7A66')},
 hfloor:(X,Y,x,y)=>{r(X,Y,16,16,'#2C2E34');r(X,Y,16,1,'#34373E');r(X,Y,1,16,'#34373E');if((x+y)%2)r(X+5,Y+5,6,6,'#30333A');
  if(at(x,1)==='a'||at(x,y-1)==='a'){g.fillStyle='rgba(255,230,170,.22)';g.fillRect(X+2,Y,12,16)}},
 dship:(X,Y,x,y,t)=>{TILES.hfloor(X,Y,x,y);const [a,b]=blk(x,y);const X0=X-(x-a)*16,Y0=Y-(y-b)*16,cx=X0+24,live=f().woke&&a===6;
  clipT(X,Y,()=>{oval(cx,Y0+44,20,3,'rgba(0,0,0,.35)');
   for(let yy=0;yy<41;yy++){if(!rowIn(Y0+2+yy))continue;const hw=Math.round(1+yy*19/40);r(cx-hw-1,Y0+2+yy,hw*2+3,1,OL);
    const third=Math.max(1,Math.round(hw*2/3));r(cx-hw,Y0+2+yy,third,1,'#B3AEC4');r(cx-hw+third,Y0+2+yy,hw*2+1-2*third,1,'#8E89A2');r(cx+hw+1-third,Y0+2+yy,third,1,'#5E5A72');
    for(const fx of [-.5,0,.5])r(cx+Math.round(fx*hw),Y0+2+yy,1,1,live&&(yy+Math.floor(t/60))%12<3?'#BFF3FF':'#4A4660')}
   for(let yy=30;yy<46;yy++){if(!rowIn(Y0+yy))continue;const w=Math.round((yy-30)/2.2);r(cx-21-w,Y0+yy,w+3,1,OL);r(cx-20-w,Y0+yy,w+1,1,'#6E6A84');r(cx+19,Y0+yy,w+3,1,OL);r(cx+19,Y0+yy,w+1,1,'#4E4A62')}
   r(cx-12,Y0+43,24,2,OL);r(cx-10,Y0+43,20,1,live?'#9FE8FF':'#3A3648');if(live){const p=(Math.sin(t/200)+1)/2;r(cx-1,Y0+1,3,3,`rgba(191,243,255,${.5+p*.5})`)}})},
 mummy:(X,Y,x,y)=>{TILES.hfloor(X,Y,x,y);r(X+2,Y+7,11,5,OL);r(X+3,Y+8,9,3,'#6E5A46');r(X+3,Y+8,9,1,'#8E7A62');r(X+11,Y+6,4,4,OL);r(X+12,Y+7,2,2,'#7E6A54');r(X+12,Y+7,1,1,'#2A2018');
  r(X+13,Y+5,2,1,'#6E5A46');r(X+1,Y+10,2,1,'#B3A184');r(X,Y+8,1,3,'#B3A184');r(X+1,Y+7,1,1,'#B3A184');r(X+5,Y+11,1,2,'#4E3E30');r(X+9,Y+11,1,2,'#4E3E30')},
};

const ZONES={
 ship:{name:'성실호 · 지휘 통제실',reg:'ARK DILIGENT',
  legend:{'#':{tile:'hull'},'.':{tile:'deck',walk:1},'S':{tile:'bigscreen'},'d':{tile:'desk'},'o':{tile:'holo',walk:1},':':{tile:'door',walk:1},
   ',':{tile:'hfl',walk:1},'U':{tile:'headsup'},'r':{tile:'ramp',walk:1},'k':{tile:'crate'}},
  map:[
"#SSSSSSSSSSSS###########",
"#SSSSSSSSSSSS#,,UUUUU,,#",
"#............#,,UUUUU,,#",
"#.dddd..dddd.#,,,,r,,,,#",
"#............#,,,,,,,,,#",
"#.dddd..dddd.:,,,,,,,,,#",
"#............#,,,,,,,,,#",
"#.dddd.o.....#,,k,,,k,,#",
"#............#,,k,,,k,,#",
"########################"],
  rooms:[[1,2,12,8,'성실호 · 지휘 통제실'],[14,1,22,8,'성실호 · 3번 격납고']],
  warps:{'18,3':{to:'natt',x:11,y:2,dir:'down',lock:()=>(!f().orbit||!f().boarded)&&'헤즈업 문이 닫혀 있어요. 엘리가 열어 줘요.'}},
  spots:{get '4,1'(){return f().warned?'큰 화면에 카이발이 보여요. 검은 땅, 하얀 먼지 바다, 주황색 용암 줄.':'큰 화면에 라타라잔 배가 보여요. 작은 공이 아주 많이 붙어 있어요.'},
   '2,3':'책상 화면에 숫자가 가득해요. 관문 점프 기록이에요.','10,5':'누구의 책상이에요. 커피 컵이 반쯤 남았어요.','20,2':'헤즈업. 진주색 타원형 드롭십이에요.','16,7':'상자에 "나트 선물: 커피"라고 써 있어요.'},
  things:{'#':['오래된 선체 벽이에요. 고친 자국이 많아요.','벽이 조금 떨려요. 엔진 소리 같아요.'],
   'S':()=>f().warned?['화면에 카이발이 가득해요. 땅이 까매요.','화면에 주황색 줄이 반짝여요.']:'화면에 작은 공이 잔뜩 붙은 배가 있어요.',
   'd':['책상 화면에 숫자가 가득해요.','책상 위가 깨끗해요. 서류가 없어요.'],
   'U':'진주색 드롭십이에요. 매끈하고 반짝여요.','k':'상자가 끈으로 단단히 묶여 있어요.'},
  npcs:['dejean','uemi','pablo','woiykan','gyvoy','finn','ellieS']},
 natt:{name:'나트 · 움직이는 마을',reg:'NOVECK ACTIVE TRAVEL TOWN',base:'plate',
  legend:{'#':{tile:'nWall'},'.':{tile:'nFloor',walk:1},'h':{tile:'hatch',walk:1},'w':{tile:'nWin'},'F':{tile:'footy'},'t':{tile:'table'},'c':{tile:'counter',over:1},
   'T':{tile:'terminal'},'L':{tile:'locker'},'m':{tile:'mach'},'K':{tile:'tankN'},'G':{tile:'airlock',walk:1}},
  map:[
"##########################",
"#FFwwww####h####wwwwwwwww#",
"#......#.......#.........#",
"#.tt.tt#.......#.LL.LL.LL#",
"#......h.......h.........#",
"#......#.T.....#.........#",
"#cccc..#.......######.####",
"#......#.......#.........#",
"########.......#.........#",
"########m.....m#.KKK.KKK.#",
"########m.....m#.KKK.KKK.#",
"########.......h.........#",
"########m.....m#.KKK.....#",
"########m.....m#.KKK.....#",
"########.......#.........#",
"####################GG####"],
  rooms:[[1,2,6,7,'나트 · 식당'],[8,2,14,14,'나트 · 중앙 홀'],[16,2,24,5,'나트 · 장비실'],[16,7,24,14,'나트 · 차고']],
  warps:{'11,1':{to:'ship',x:18,y:4,dir:'down'},
   '20,15':{to:'plain',x:10,y:16,dir:'up',lock:()=>gateLock()},'21,15':{to:'plain',x:10,y:16,dir:'up',lock:()=>gateLock()}},
  spots:{'1,1':'화면 속 축구예요. 공이 럭비공 두 개를 붙인 모양이에요.','4,1':'창밖으로 검은 땅이 천천히 지나가요. 나트가 움직이고 있어요.','20,1':'멀리 화산이 보여요. 꼭대기가 주황색이에요.',
   '18,3':'우주복 사물함. 헬멧이 줄지어 있어요.','8,9':'기계가 웅웅거려요. 바닥이 조금 흔들려요.','17,10':'엘스베스의 탱크. 아주 크고 무거워요.','22,10':'두 번째 탱크. 옆에 "미사일"이라고 써 있어요.'},
  things:{'#':x=>x>15?['쇠벽에 보라색 불빛이 켜져 있어요.','쇠벽이 조금 흔들려요. 나트가 움직여요.']:['쇠벽에 초록 불빛이 켜져 있어요.','차가운 쇠벽이에요. 조금 흔들려요.'],
   'K':['큰 탱크예요. 캐터필러가 아주 넓어요.','탱크 캐터필러에 검은 가루가 묻었어요.'],
   'w':['창밖은 까만 하늘이에요. 별이 많아요.','멀리 주황색 불빛이 반짝여요.'],
   'm':'기계 불빛이 깜빡깜빡해요.','L':'사물함이에요. 안에 헬멧이 있어요.','t':'식탁 위에 음식 봉지가 있어요.',
   'c':x=>x===2?'냄비에서 김이 나요.':'쇠 카운터예요. 반짝반짝하게 닦여 있어요.',
   'F':['작은 선수들이 공을 쫓아 뛰어요.','둥근 경기장이에요. 잔디가 파래요.']},
  npcs:['binopal','mique','cook','els','fomki','bensathN','gyvoyN','ellieN']},
 plain:{name:'카이발 · 후두 정원',reg:'KAJVAL · HOA QUINZU',outdoor:1,
  legend:{'v':{tile:'sky'},'V':{tile:'horizon'},'W':{tile:'rwall'},'B':{tile:'breach',walk:1},'H':{tile:'hoodoo'},'Q':{tile:'topple'},'.':{tile:'ash',walk:1},'t':{tile:'track',walk:1},
   '~':{tile:'dtree'},'R':{tile:'rock'},'L':{tile:'dtree'},'T':{tile:'dtree'},'b':{tile:'bison'},'f':{tile:'bird'},'E':{tile:'tankE'},'K':{tile:'tankP'},'e':{tile:'hatchT',walk:1}},
  map:[
"vvvvvvQQvvvvvvvvvvvvQQvvvvHH",
"VVVVVVQQVVVVVVVVVVVVQQVVVVHH",
"WWWWWWQQWWWWWWWWWWWWQQWWWWHH",
"WWWWWWQQWWWWWBBWWWWWQQWWWWHH",
"~~~~..QQ.....tt.....QQ..R.HH",
"~~~~~.......f.t.........LLHH",
"~~~~~~..R.....t........LL.HH",
"~~~~~.........t..b.b..LL....",
"~~~~....R.....t.b.b.b.LL...R",
"~~~...........t..b.b.LL.....",
"~~..T.T.......tt....LL...f..",
"~..TT.T...EEE.t.....LL......",
"..T.TT....EEE.t....LL...R...",
".T.T.T........t....LL.......",
"..T.T...KKK...t...LL...f....",
".f......KKK..tt...LL........",
".........e...t...LL....R....",
"RRRRRRRRRRRRRRRRRRRRRRRRRRRR"],
  rooms:[[0,4,27,16,'카이발 · 후두 정원']],
  warps:{'9,16':{to:'natt',x:20,y:14,dir:'up'},
   '13,3':{to:'bk37',x:11,y:20,dir:'up',lock:()=>!f().breach&&'높은 담이에요. 폭약 없이는 못 들어가요.'},'14,3':{to:'bk37',x:12,y:20,dir:'up',lock:()=>!f().breach&&'높은 담이에요. 폭약 없이는 못 들어가요.'}},
  spots:{get '10,11'(){return tankSpot()},get '11,11'(){return tankSpot()},get '12,11'(){return tankSpot()},get '10,12'(){return tankSpot()},get '11,12'(){return tankSpot()},get '12,12'(){return tankSpot()},  // Ellie is inside Elsbeth's tank: facing it, you hear her on the radio
   '12,5':'새가 하늘에서 떨어진 그대로 있어요. 깃털에 수정이 된 공기가 반짝여요.','1,15':'작은 새. 육천 년 동안 여기 누워 있었어요.',
   '17,7':'들소예요. 쓰러진 그대로 죽었어요. 털에 하얀 수정이 반짝여요.','16,8':'들소 떼예요. 모두 같은 쪽을 보고 있어요.','17,9':'들소예요. 만지면 가루가 떨어져요.',
   '4,5':'죽은 숲이 끝없이 이어져요. 후두 정원은 80킬로미터예요.','4,11':'검은 나무. 손을 대면 부서져서 조각이 돼요.','5,12':'죽은 숲이에요. 잎이 짙은 갈색으로 변했어요.',
   get '7,4'(){return f().causeway?'엘리의 작전으로 쓰러진 후두. 돌무더기 길이 됐어요.':'후두. 1킬로미터 높이의 돌기둥이에요. 꼭대기가 안 보여요.'},
   get '20,4'(){return f().causeway?'무너진 후두. 돌 조각이 담 너머까지 날아갔어요.':'후두. 아주 높아요. 밑이 조금 부서져 있어요.'},
   '20,10':'죽은 나무들이에요. 여기는 용암이 없어요. 화산은 멀리 있어요.','8,6':'회색 돌이에요. 화산에서 날아온 돌이에요.',
   '9,14':'다른 탱크예요. 뒷문으로 나트에 돌아갈 수 있어요.'},
  things:{'v':['까만 하늘이에요. 별이 많아요.','공기가 없어서 별이 아주 또렷해요.'],
   'V':x=>Math.abs(x-9)<=2?'멀리 산꼭대기가 주황색으로 빛나요.':'멀리 검은 산이 길게 이어져요.',
   'W':['아주 높은 돌벽이에요. 위가 까마득해요.','돌벽이 길게 이어져요. 끝이 안 보여요.'],
   'H':['아주 높은 돌기둥이에요. 꼭대기가 안 보여요.','울퉁불퉁한 돌기둥에 검은 구멍이 있어요.'],
   'Q':()=>f().causeway?'쓰러진 돌기둥이 돌무더기 길이 됐어요.':'아주 높은 돌기둥이에요. 꼭대기가 안 보여요.',
   '~':['검은 나무예요. 잎까지 그대로 굳었어요.','나뭇가지에 하얀 가루가 붙어 있어요.','검은 나무가 돌처럼 굳었어요.'],
   'L':['검은 나무예요. 잎까지 그대로 굳었어요.','나뭇가지에 하얀 가루가 붙어 있어요.','검은 나무가 돌처럼 굳었어요.'],
   'T':['검은 나무예요. 잎까지 그대로 굳었어요.','나뭇가지에 하얀 가루가 붙어 있어요.','검은 나무가 돌처럼 굳었어요.'],
   'R':['회색 돌이에요. 구멍이 숭숭 나 있어요.','돌 위에 하얀 가루가 쌓였어요.'],
   'b':['들소 한 마리. 돌처럼 굳었어요.','들소 털에 하얀 가루가 반짝여요.'],
   'f':'작은 새가 땅에 누워 있어요. 움직이지 않아요.',
   'E':()=>f().causeway?'탱크가 떠난 자리예요. 캐터필러 자국만 있어요.':'엘스베스의 탱크예요. 아주 커요.',
   'K':'탱크 캐터필러에 검은 가루가 묻었어요.'},
  npcs:['pandiana','edusal']},
 bk37:{name:'BK37 · 담 안',reg:'COMPOUND BK37 · KAJVAL',outdoor:1,
  legend:{'#':{tile:'iwall'},'T':{tile:'tower'},'A':{tile:'arch',walk:1},'.':{tile:'ash',walk:1},'R':{tile:'rock'},'~':{tile:'moat'},'c':{tile:'cause',walk:1},'X':{tile:'wreck'},
   'g':{tile:'trap'},'p':{tile:'prints',walk:1},'B':{tile:'breach',walk:1}},
  map:[
"#######TTTTTTTTTT#######",
"#......TTTTTTTTTT......#",
"#......TTTTTTTTTT......#",
"#.R....TTTTTTTTTT....R.#",
"#......TTTTAATTTT......#",
"#..............X.......#",
"#......................#",
"#ggggggggggpggggggggggg#",
"#ggggggggggpppggggggggg#",
"#ggggggggggggpggggggggg#",
"#ggggggggpppppggggggggg#",
"#ggggggggpggggggggggggg#",
"#ggggggggpppggggggggggg#",
"#......................#",
"#~~~~~~~~~~cc~~~~~~~~~~#",
"#~~~~~~~~~~cc~~~~~~~~~~#",
"#~~~~~~~~~~cc~~~~~~~~~~#",
"#~~~~~~~~~~cc~~~~~~~~~~#",
"#~~~~~~~~~~cc~~~~~~~~~~#",
"#~~~~~~~~~~cc~~~~~~~~~~#",
"#~~~~~~~~~~cc~~~~~~~~~~#",
"###########BB###########"],
  rooms:[[1,14,22,20,'BK37 · 해자'],[1,7,22,13,'BK37 · 함정 밭'],[1,1,22,6,'BK37 · 탑 앞']],
  warps:{'11,21':{to:'plain',x:13,y:4,dir:'down'},'12,21':{to:'plain',x:14,y:4,dir:'down'},
   '11,4':{to:'tower',x:9,y:21,dir:'up',lock:()=>!f().bitten&&'엘스베스가 다쳤어요. 먼저 가 봐요.'},'12,4':{to:'tower',x:10,y:21,dir:'up',lock:()=>!f().bitten&&'엘스베스가 다쳤어요. 먼저 가 봐요.'}},
  spots:{'10,11':'초록색으로 빛나는 그물이에요. 밟으면 끝이에요.','12,9':'땅속에서 무엇이 빙글빙글 돌아요. 칼 같아요.',
   get '5,14'(){return f().attack?'먼지 속에서 연한 회색 공들이 굴러다녀요. 수백만 개예요.':'반짝이는 수정 가루 해자. 무릎까지 빠져요.'},
   get '15,5'(){return f().causeway?'엘스베스의 탱크가 탑 앞에서 세이버스톤에 묻혔어요.':'탑 앞의 빈 땅이에요.'},
   '8,4':'BK37 탑. 돌기둥을 깎아서 만들었어요. 발코니가 층층이 있어요.','2,3':'회색 돌이에요. 화산에서 날아왔어요.'},
  things:{'#':['높은 돌벽이에요. 끝이 안 보여요.','돌벽에 하얀 가루가 붙어 있어요.'],
   'T':['돌기둥을 깎아서 만든 탑이에요.','탑에 조각된 발코니가 층층이 있어요.'],
   '~':()=>f().attack&&!f().done?'회색 공들이 우글우글해요! 가까이 가면 안 돼요!':'반짝이는 가루 해자예요. 아주 조용해요.',
   'g':['초록 그물이 빛나요. 밟으면 안 돼요.','초록 불빛이 줄을 따라 달려요.'],
   'R':'회색 돌이에요. 구멍이 숭숭 나 있어요.'},
  npcs:['miqueB','gyvoyB','bensathB','fomkiB','edusalB','swarm','swarm2','elsB','ellieB']},
 tower:{name:'BK37 · 나선 계단',reg:'COMPOUND BK37 · STAIRWELL',
  legend:{'#':{tile:'twall'},'s':{tile:'stair',walk:1},'O':{tile:'shaft'},'l':{tile:'landing',walk:1},'x':{tile:'broken'},'A':{tile:'arch',walk:1},
   'H':{tile:'hwall'},'a':{tile:'harch'},'.':{tile:'hfloor',walk:1},'D':{tile:'dship'},'m':{tile:'mummy'}},
  map:[
"####################",
"#HaHHHaHHHaHHHaHHHa#",
"#.DDD.DDD..DDD.DDD.#",
"#.DDD.DDD..DDD.DDD.#",
"#.DDD.DDD..DDD.DDD.#",
"#.............m....#",
"#..m.m...........m.#",
"#########.##########",
"######ssssssss######",
"######ssssssss######",
"######ssOOOOss######",
"######ssOOOOss######",
"######ssOOOOss######",
"######xxOOOOss######",
"######ssOOOOss######",
"######ssOOOOss######",
"######ssOOOOss######",
"######ssOOOOss######",
"######ssssssss######",
"######ssssssss######",
"####llllllllllll####",
"####llllllllllll####",
"#########AA#########"],
  rooms:[[1,2,18,6,'BK37 · 격납고'],[4,8,15,21,'BK37 · 나선 계단']],
  warps:{'9,22':{to:'bk37',x:11,y:5,dir:'down'},'10,22':{to:'bk37',x:12,y:5,dir:'down'}},
  spots:{'3,4':'카이발 드롭십. 홈이 세 개 있는 원뿔이에요.','16,4':'드롭십이 네 대 있어요. 모두 원뿔 모양이에요.','12,4':'이 드롭십은 육천 년 동안 기다렸어요.',
   '14,5':'카이발 셀레스철 미라. 꼬리를 몸에 감고 있어요.','3,6':'미라예요. 손이 드롭십 쪽을 향해 있어요.','17,6':'미라예요. 털이 조금 남아 있어요.',
   '8,12':'아래가 안 보여요. 아주 깊어요.','6,13':'무너진 계단이에요. 건널 수 없어요.','7,13':'계단이 부서져서 구멍이 났어요. 반대쪽으로 돌아서 올라가요.'},
  things:{'#':['어두운 돌벽이에요. 조각이 가득해요.','벽을 두드려도 소리가 안 나요.'],
   'D':x=>f().woke&&x>=6&&x<=8?'드롭십에 불이 켜졌어요. 살아 있어요!':['원뿔 모양 드롭십. 홈이 세 개 있어요.','드롭십 표면이 차갑고 매끈해요.'],
   'O':'아래가 깜깜해요. 바닥이 안 보여요.','H':'격납고 벽이에요. 매끈하고 차가워요.',
   'a':'아치 밖에 까만 하늘과 밝은 땅이 보여요.','m':'작은 미라예요. 아이 같아요.'},
  npcs:['dave1','dave2','ghost1','ghost2','gyvoyT','mummyA','finnB','elsT']},
};
function gateLock(){
 if(!hasItem('우주복'))return '헬멧을 쓰고 나가요.';
 if(!f().charges)return '아직 폭약이 없어요. 벤사스 하사를 만나요.';
 if(!f().ellieTank)return '기보이 씨가 출발 전에 할 말이 있대요.';
 return false;
}

/* the Ghost chase on the stairs: each Ghost walks the player's own trail, a few steps behind */
const trail=[];
function track(){
 if(ZID!=='tower'||!f().chase||f().mined){trail.length=0;return}
 const l=trail[trail.length-1];if(!l||l[0]!==player.x||l[1]!==player.y)trail.push([player.x,player.y]);if(trail.length>16)trail.shift();
}
const ghostPos=(delay,home,wreck)=>()=>{if(f().mined)return wreck;track();const k=trail.length-1-delay;return k>=0?trail[k]:home};

const NPC={
 /* ---- ship ---- */
 dejean:{name:'드장 선장',zone:'ship',x:6,y:2,dir:'down',look:{hair:'#A8A8AE',skin:'#C99470',shirt:'#3B3F8A',pants:'#4A3A7A',belt:'#5BE08A',arm:'#B87333',style:'bob',lashes:1,lips:'#A85A5A'},
  status:()=>f().metDejean?null:'todo',
  script:()=>{
   if(!f().metDejean)return [
    {say:'첫 {관문|관문} 점프, 다들 괜찮아요?'},
    {say:'옛날 승무원 몇 명은 {충격|충격}을 받아서 {의무실|의무실}에 갔어요.'},
    {say:'우리 배가 관문을 지난 건 처음이에요. 놀랄 만해요.'},
    {say:'그런데 이상한 배가 우리를 불러요. 저 {홀로그램|홀로그램} 앞으로 가 봐요.',set:()=>{f().metDejean=1}}];
   if(!f().warned)return [{say:'홀로그램 앞으로 가요. 누가 우리한테 할 말이 있어요.'}];
   if(!f().orbit)return [{say:'성계에서 5주, 땅에서 5일이에요. 핀 씨가 카이발 이야기를 할 거예요.'}];
   return [{say:'격납고는 저 문 너머예요. 5일 안에 꼭 돌아와요.'}]}},
 uemi:{name:'우에미주발리',zone:'ship',x:3,y:4,dir:'up',look:{hair:'#1E1E24',skin:'#C68E64',shirt:'#3E6E8E',pants:'#2E3B55',style:'bun',lashes:1,lips:'#B0605E'},
  talk:()=>[{say:'저는 {항법사|항법사} 우에미주발리예요.'},{say:'관문을 나오니까 호아 퀸주 성계예요. 카이발은 바로 저 앞이에요.'},{say:'점프할 때 시간이 멈춘 것 같았어요. 정말 이상해요.'}]},
 pablo:{name:'파블로',zone:'ship',x:13,y:5,dir:'left',look:PABLO,
  pos:()=>f().orbit?[12,7]:[13,5],
  talk:()=>f().orbit?[{say:'파블로가 문 열었어요. 조심히 다녀와요.'},{say:'개스 형제들이 배를 잘 지켜요.'}]
   :[{say:'파블로예요. 개스 형제들 다 괜찮아요.'},{say:'관문 지날 때 파블로는 하나도 안 무서웠어요.'},{say:'여기는 {격납고|격납고} 문이에요. 핀 씨가 말하면 열어요.'}]},
 woiykan:{name:'보이크안',zone:'ship',x:7,y:7,dir:'down',look:WOIY,
  status:()=>f().metDejean&&!f().warned?'todo':null,
  script:()=>{
   if(!f().metDejean)return [{say:'…지지직…'},{who:'…',say:'홀로그램이 깜빡거려요. 선장님한테 먼저 가 봐요.'}];
   if(f().warned)return [{say:'…조심해요, 인간의 배…'},{who:'…',say:'홀로그램이 꺼졌어요.'}];
   return [
    {say:'인간의 배. 저는 라타라잔의 배, 보이크안이에요. 왜 왔어요?'},
    {say:'옛날 지구의 {방주|방주}? 그건 위험해요.'},
    {say:'3년 전에 {마라 야마|마라 야마} 함대가 왔어요. 지금 데 베리아 궤도에 있어요.'},
    {say:'조심해서 가요. 책임은 당신들한테 있어요.'},
    {who:'기보이',say:'거기서 연료를 넣고 있을 거예요.'},
    {who:'핀',say:'마라 야마는 방주를 노려요. 사람을 잡아가요.'},
    {who:'핀',say:'몇십 년 동안 살려 두고, 그 사람의 기억을 봐요.'},
    {who:'드장 선장',say:'…좋아요. 이 성계에서는 5주만 있어요.'},
    {who:'드장 선장',say:'카이발 땅에서는 5일이에요. 5일이 지나면 무조건 떠나요.',set:()=>{f().warned=1}}]}},
 gyvoy:{name:'기보이',zone:'ship',x:9,y:7,dir:'left',look:GYVOY,
  talk:()=>f().warned?[{say:'마라 야마가 오기 전에 끝내야 돼요.'},{say:'이번 일의 대장은 저예요. 걱정 마세요.'}]
   :[{say:'아스테리아 여신님, 감사합니다! 첫 점프 성공!'},{say:'이번 일은 제가 대장이에요. 잘 부탁해요.'}]},
 finn:{name:'핀',zone:'ship',x:10,y:2,dir:'down',look:FINN,badge:['멸망하다','진공'],
  status:()=>{if(!state.badges.includes('진공'))return f().warned?'todo':null},
  script:()=>!f().warned?[{say:'선장님 이야기 먼저 들어요. 홀로그램이 우리를 불러요.'}]:null,
  after:'카이발은 죽은 세계예요. 그래도 배는 남아 있어요.',
  talk:()=>[
   {say:'화면 봐요. 저기가 카이발이에요.'},
   {say:'육천 년 전에 {수정총|수정총}이 이 세계를 죽였어요.'},
   {say:'그때 카이발에는 셀레스철이 십억 명쯤 살았어요. 거의 다 한꺼번에 죽었어요.'},
   Q.finn[0],
   {say:'그때 공기가 작은 수정 {가루|가루}로 변했어요. 바다가 그 가루로 가득해요.'},
   {say:'그래서 지금 카이발에는 공기가 없어요.'},
   Q.finn[1],
   {say:'우리는 거기서 셀레스철 {드롭십|드롭십}을 가져와야 돼요. 어디에 있는지는 {나트|나트}에서 물어볼 거예요.'},
   {say:'{격납고|격납고}로 가요. 파블로한테 문을 열라고 했어요.',award:['멸망하다','진공'],set:()=>{f().orbit=1}}]},
 ellieS:{name:'엘리',zone:'ship',x:20,y:3,dir:'left',look:ELLIE,
  hide:()=>!!f().boarded&&ZID!=='ship',
  talk:()=>[{say:'헤즈업 준비 끝! 엔포 가문의 드롭십이에요. 진주 같죠?'},{say:'우주복 입었어요? 헤즈업에서 {나트|나트}까지 걸어가요. 탱크처럼 기어가는 마을이에요.',give:'우주복'},{say:'이번 일은 기보이 씨가 대장이래요. 흠.',set:()=>{f().boarded=1}}]},
 /* ---- the Natt ---- */
 binopal:{name:'비노팔',zone:'natt',x:12,y:4,dir:'down',look:BINO,badge:['화산','용암'],
  after:'나트는 느려요. 그래도 용암보다는 빨라요. 하하.',
  talk:()=>[
   {say:'어서 와요, 어서 와! 나트에 온 걸 환영해요.'},
   {say:'나트는 움직이는 마을이에요. 한 시간에 3킬로미터씩 가요.'},
   {say:'나트 지붕 위에는 검은 {방패|방패}가 있어요. 하늘에서 뜨거운 돌이 떨어지거든요.'},
   Q.binopal[0],
   {say:'화산이 터지면 녹은 돌이 강처럼 흘러요.'},
   Q.binopal[1],
   {say:'여기서 남서쪽으로 700킬로미터 가면 BK37이라는 기지가 있어요. 거기 드롭십이 있을 거예요.'},
   {say:'거기까지는 탱크로 가요. 안에 들어가려면 자물쇠 전문가가 필요해요.'},
   {say:'탱크는 차고에 있는 엘스베스한테, 자물쇠는 식당에 있는 미크한테 물어봐요.',award:['화산','용암'],set:()=>{f().binopal=1}}]},
 mique:{name:'미크 오독스',zone:'natt',x:5,y:5,dir:'left',look:MIQ_N,badge:['담','침입하다'],hide:()=>!!f().breach,
  status:()=>{if(!state.badges.includes('담'))return f().binopal?'todo':null},
  script:()=>!f().binopal?[{say:'누구세요? 비노팔 씨를 먼저 만나요.'}]:null,
  after:'잠긴 문은 다 열 수 있어요. 아마도요.',
  talk:()=>[
   {say:'미크 오독스예요. 저는 {자물쇠 전문가|자물쇠 전문가}예요.'},
   {say:'BK37 주위에 아주 높은 벽이 있어요. 3킬로미터짜리 원이에요.'},
   Q.mique[0],
   {say:'우리는 허락 없이 그 안에 들어가요. 도둑처럼요.'},
   Q.mique[1],
   {say:'담 안에는 {함정|함정}이 많아요. 그래서 제가 같이 가요.',award:['담','침입하다'],set:()=>{f().mique=1}}]},
 cook:{name:'나트 식당 아저씨',zone:'natt',x:2,y:7,dir:'up',look:{hair:'#8A8A8A',skin:'#E0B08A',shirt:'#D8D8D0',pants:'#4A4A50',cap:'#E8E8E0'},
  script:()=>{const q=Q.cafe[Math.random()*Q.cafe.length|0];return [{say:'어서 와요! 음식 봉지 하나 먹으면서 옛날 단어 연습해요.'},{...q,old:1},{say:'공 두 개 축구, 재미있죠? 또 와요.'}]},
  talk:()=>[]},
 els:{name:'엘스베스',zone:'natt',x:20,y:12,dir:'left',look:ELS_N,badge:['우주복','질식하다'],hide:()=>!!f().breach,
  status:()=>{if(!state.badges.includes('우주복'))return f().binopal?'todo':null},
  script:()=>!f().binopal?[{say:'탱크요? 비노팔 씨를 통해서 와요.'}]:null,
  after:'저는 데려다주기만 해요. 기억해요.',
  talk:()=>[
   {say:'엘스베스예요. 제 탱크는 \'헬 웰컴스\'예요. 탱크 두 대가 더 같이 가요.'},
   {say:'제 규칙은 하나예요. 저는 데려다주기만 해요. 싸움은 당신들 일이에요.'},
   Q.els[0],
   {say:'헬멧에 구멍이 나면 숨을 못 쉬어요.'},
   Q.els[1],
   Q.els[2],
   {say:'우주복 잘 입었네요. 헬멧은 꼭 잠가요.',award:['우주복','질식하다'],set:()=>{f().els=1}}]},
 fomki:{name:'폼키',zone:'natt',x:18,y:11,dir:'down',look:FOM,hide:()=>!!f().breach,
  talk:()=>[{say:'폼키예요. 우리 팀은 맨 뒤에서 따라가요.'},{say:'에두살은 벌써 밖에 나갔어요. 성격이 급해요.'}]},
 bensathN:{name:'벤사스 하사',zone:'natt',x:21,y:8,dir:'down',look:BEN,hide:()=>!!f().breach,
  status:()=>f().els&&f().mique&&!f().charges?'todo':null,
  script:()=>{
   if(!(f().els&&f().mique))return [{say:'벤사스 하사예요. 우리 팀이 같이 가요.'},{say:'탱크하고 자물쇠 전문가가 먼저예요.'}];
   if(f().charges)return [{say:'판디아나가 담 앞에서 기다려요.'}];
   return [{say:'좋아요. 탱크도, 자물쇠 전문가도 준비됐어요.'},{say:'담은 {핵 폭약|핵 폭약}으로 열어요.'},{say:'이거 판디아나한테 가져가요. 벌써 밖에 있어요.',give:'핵 폭약',set:()=>{f().charges=1}}]},
  talk:()=>[]},
 gyvoyN:{name:'기보이',zone:'natt',x:23,y:13,dir:'left',look:GYVOY,hide:()=>!!f().breach,
  status:()=>f().charges&&!f().ellieTank?'todo':null,
  script:()=>{
   if(!f().charges)return [{say:'준비되면 출발해요. 5주예요, 5주!'}];
   if(f().ellieTank)return [{say:'엘리 씨는 탱크에서 기다려요. 그게 제일 안전해요.'}];
   return [
    {say:'자, 출발하기 전에 하나만요.'},
    {say:'엘리 씨는 탱크에 남아요.'},
    {who:'엘리',say:'네? 저도 같이 가요!'},
    {say:'이건 명령이에요. 이번 일의 대장은 저예요.'},
    {who:'엘리',say:'…모두 앞에서 꼭 이렇게 말해야 돼요?'},
    {who:'엘리',say:'알겠어요. 탱크에 있을게요.',set:()=>{f().ellieTank=1}}]},
  talk:()=>[]},
 ellieN:{name:'엘리',zone:'natt',x:22,y:14,dir:'up',look:ELLIE,
  hide:()=>!f().boarded||!!f().ellieTank,
  talk:()=>[{say:'나트 안은 좀 흔들려요. 바닥 느껴져요?'},{say:'기보이 씨가 출발 전에 할 말이 있대요.'}]},
 /* ---- Kajval surface ---- */
 pandiana:{name:'판디아나',zone:'plain',x:12,y:4,dir:'down',look:PAN_H,badge:['먼지'],
  status:()=>{if(!state.badges.includes('먼지'))return hasItem('핵 폭약')?'todo':null},
  script:()=>!hasItem('핵 폭약')&&!f().breach?[{say:'판디아나예요. 폭약은 어디 있어요?'}]:null,
  after:'해자에 오래 서 있지 마세요. 가라앉아요.',
  talk:()=>[
   {say:'판디아나예요. 탱크 안에서 17시간 앉아 있었어요. 다리가 아파요.'},
   {say:'담 안에 반짝이는 해자가 있대요. 물이 아니에요.'},
   Q.pandiana[0],
   {say:'폭약 줘요. 로봇이 담 밑에 가져다 놓을 거예요.',take:['핵 폭약']},
   Q.pandiana[1],
   {say:'다들 엎드려요! 삼, 이, 일…',set:()=>{f().breach=1;f().breachAt=Date.now()}},
   {say:'번쩍! …그런데 아무 소리도 안 들려요. 진공이라서요.'},
   {say:'담에 구멍이 세 개 났어요. 고스트는 구멍으로 가요.'},
   {say:'우리는 담을 타고 넘어가요. 미크가 앞에서 가요.',award:['먼지']}]},
 edusal:{name:'에두살',zone:'plain',x:16,y:5,dir:'left',look:EDU_H,
  hide:()=>!!f().breach,
  talk:()=>[{say:'에두살이에요. 폼키 팀이에요.'},{say:'오는 길에 쓰러진 들소들을 봤어요. 조금 무서워요.'},{say:'그래도 이번 일은 돈을 많이 줘요.'}]},
 /* ---- BK37: wall, moat, trap field, tower ---- */
 miqueB:{name:'미크 오독스',zone:'bk37',x:11,y:13,dir:'down',get look(){return f().attack?CORPSE:MIQ_H},badge:['발자국'],
  pos:()=>f().prints?[9,5]:[11,13],
  status:()=>f().attack?null:undefined,
  script:()=>f().attack?[{who:'…',say:'미크 씨가 쓰러져 있어요. 헬멧에 총알 구멍이 났어요.'},{who:'…',say:'피가 진공 속에서 끓어서 하얀 김이 돼요.'},{who:'…',say:'미크 씨는 죽었어요.'}]
   :f().prints?[{say:'빨리 와요. 벤사스 하사가 기다려요.'}]:null,
  after:'제 발자국만 밟아요. 한 줄로요.',
  talk:()=>[
   {say:'해자를 건넜어요. 여기부터 {함정|함정} 밭이에요. 초록 그물 보여요?'},
   {say:'제가 앞에서 걸을게요. 땅에 제 발 모양이 남아요.'},
   Q.miqueB[0],
   Q.miqueB[1],
   {say:'한 줄로 따라와요. 천천히.',award:['발자국'],set:()=>{f().prints=1}}]},
 gyvoyB:{name:'기보이',zone:'bk37',x:12,y:13,dir:'up',look:helm(GYVOY,'#8A5A7A'),badge:['무너지다'],
  pos:()=>f().causeway?[10,6]:f().prints?[12,6]:[12,13],
  status:()=>{if(!state.badges.includes('무너지다'))return f().attack?'todo':null},
  script:()=>!f().attack?[{say:'제가 미크 바로 뒤에서 가요. 대장이니까요.'}]:null,
  after:'계속 가요! 멈추면 죽어요!',
  talk:()=>[
   {say:'계속 가요! 멈추면 죽어요!'},
   {say:'{무전|무전}! 탱크의 엘리 씨를 불러요.'},
   {who:'엘리',say:'다 들었어요. 생각이 있어요!'},
   {who:'엘리',say:'담 밖에 큰 {후두|후두} 두 개 있죠? 그 밑을 미사일로 쏴요.'},
   Q.ellie[0],
   {who:'엘리',say:'후두가 해자 위로 무너지면 돌 길이 생겨요.'},
   Q.ellie[1],
   {who:'엘스베스',say:'좋은 생각이에요. 미사일 발사!',set:()=>{f().causeway=1;f().causeAt=Date.now()}},
   {who:'…',say:'후두 두 개가 천천히 무너져요. 소리는 하나도 없어요.'},
   {who:'…',w:'무너지다',build:['후두가','무너져서','길이','생겼어요']},
   {who:'…',say:'탱크가 돌 길로 해자를 건너요. 탑 앞까지 달려요.'},
   {who:'…',say:'탑 5미터 앞에서 세이버스톤 파도가 탱크를 덮쳐요!'},
   {say:'탑 앞으로! 두 사람을 도와요!',award:['무너지다']}]},
 bensathB:{name:'벤사스 하사',zone:'bk37',x:11,y:6,dir:'down',look:BEN_H,badge:['구르다','전멸'],
  pos:()=>f().attack?[7,6]:[11,6],
  hide:()=>!!f().bitten,
  status:()=>{if(!state.badges.includes('전멸'))return f().prints?'todo':null},
  script:()=>{if(!f().prints)return [{say:'미크 뒤로 한 줄로 와요. 발자국 밖은 위험해요.'}];
   if(f().attack&&!f().causeway)return [{say:'기보이 씨한테 가요! 무전으로 탱크를 불러요.'}];return null},
  after:'남은 사람은 열두 명이에요. 버텨요.',
  talk:()=>[
   {say:'잘 왔어요. 우리는 먼저 건넜어요. 폼키 팀이 아직 해자에 있어요.'},
   {who:'에두살',say:'하사님, 먼지가… 움직여요?'},
   {who:'…',say:'반짝이는 먼지 밑에서 연한 회색 공이 수백만 개 나와요.'},
   {say:'{세이버스톤|세이버스톤}! 파도처럼 와요!'},
   Q.bensath[0],
   {who:'에두살',say:'으악! 발이…!'},
   {who:'…',say:'에두살이 쓰러져요. 발이 없어요. 먼지 속으로 가라앉아요.'},
   {who:'…',say:'폼키 팀이 한 명씩 사라져요. 모두요.',set:()=>{f().attack=1}},
   {who:'미크 오독스',say:'앞으로! 빨리 가요!'},
   {who:'…',say:'탕! 언덕 위의 고스트가 쐈어요. 총알이 미크 씨 헬멧을 뚫었어요.'},
   {who:'…',say:'기보이하고 핀이 고스트를 쏴요. 고스트가 쓰러져요.'},
   {say:'제 사람들도 맞았어요!'},
   Q.bensath[1],
   {say:'뒤는 세이버스톤, 앞은 고스트. 기보이 씨한테 가요.',award:['구르다','전멸']}]},
 fomkiB:{name:'폼키',zone:'bk37',x:12,y:18,dir:'up',look:FOM_H,hide:()=>!!f().attack,talk:()=>[{say:'우리 팀이 마지막이에요. 먼저 가요!'}]},
 edusalB:{name:'에두살',zone:'bk37',x:12,y:16,dir:'up',look:EDU_H,hide:()=>!!f().attack,talk:()=>[{say:'먼지가 무릎까지 와요. 반짝반짝 예뻐요.'}]},
 swarm:{name:'세이버스톤',zone:'bk37',x:11,y:14,dir:'down',look:SWARM,
  hide:()=>!f().attack||!!f().causeway,
  talk:()=>[{who:'…',say:'연한 회색 공들이 굴러다녀요. 별 모양 입이 열렸다 닫혀요.'},{who:'…',say:'해자로 돌아갈 수 없어요.'}]},
 swarm2:{name:'세이버스톤',zone:'bk37',x:12,y:14,dir:'down',look:SWARM,
  hide:()=>!f().attack||!!f().causeway,
  talk:()=>[{who:'…',say:'세이버스톤이 해자 가장자리에 가득해요.'}]},
 elsB:{name:'엘스베스',zone:'bk37',x:14,y:5,dir:'down',look:ELS_H,badge:['물리다'],
  hide:()=>!f().causeway||!!f().chase,
  status:()=>{if(!state.badges.includes('물리다'))return 'todo'},
  after:'다리는 괜찮아요. 탱크가 안 괜찮아요.',
  talk:()=>[
   {say:'아야… 엘스베스예요. 살아 있어요.'},
   {say:'제 탱크는 탑 앞에서 세이버스톤에 묻혔어요. 마지막 5미터는 뛰었어요.'},
   {say:'그때 세이버스톤이 제 다리를 물었어요.'},
   Q.elsB[0],
   {say:'괜찮아요. 우주복이 구멍을 바로 막았어요.'},
   {who:'엘리',say:'저도 다리를 물렸어요. 핀 씨도요.'},
   Q.elsB[1],
   {who:'…',say:'이제 엘리도 우리하고 같이 가요.'},
   {say:'탑으로 가요. 위에 격납고가 있대요.',award:['물리다'],set:()=>{f().bitten=1}}]},
 ellieB:{name:'엘리',zone:'bk37',x:16,y:6,dir:'left',look:ELLIE_H,
  hide:()=>!f().causeway||!!f().bitten,
  talk:()=>[{say:'탱크 앞문으로 뛰어나왔어요. 엘스베스 씨가 다쳤어요!'}]},
 /* ---- the stairwell and hangar ---- */
 dave1:{name:'데이브',zone:'tower',x:7,y:20,dir:'right',look:DAVE,badge:['계단'],
  status:()=>{if(!state.badges.includes('계단'))return 'todo'},
  after:'계단. 많아요. 괜찮아요.',
  talk:()=>[
   {say:'데이브.'},
   {who:'데이브 (2)',say:'데이브.'},
   {say:'격납고. 위에. 천 미터.'},
   Q.dave[0],
   {who:'…',say:'발밑이 흔들려요. 아래에서 뭔가 올라와요. 원숭이 같은 {고스트|고스트}예요!'},
   Q.dave[1],
   {say:'고스트. 쉬워요. 그래도 뛰어요.',award:['계단'],set:()=>{f().chase=1}}]},
 dave2:{name:'데이브 (2)',zone:'tower',x:12,y:20,dir:'left',look:DAVE,
  talk:()=>f().mined?[{say:'봤죠? 쉬워요.'}]:[{say:'데이브.'},{say:'고스트. 쉬워요.'}]},
 ghost1:{name:'고스트',zone:'tower',x:5,y:21,dir:'up',look:{get art(){return (f().mined?GHOST_DEAD:GHOST).art}},
  pos:ghostPos(2,[5,21],[13,12]),hide:()=>!f().chase,
  talk:()=>f().mined?[{who:'…',say:'부서진 고스트예요. 지뢰가 다리를 날려 버렸어요.'}]
   :[{who:'…',say:'원숭이처럼 빠른 고스트! 꼬리 두 개가 흔들려요.'},{who:'데이브',say:'뛰어요!'},{who:'…',say:'데이브가 고스트를 밀어내요. 빨리 올라가요!'}]},
 ghost2:{name:'고스트',zone:'tower',x:14,y:21,dir:'up',look:{get art(){return (f().mined?GHOST_DEAD:GHOST).art}},
  pos:ghostPos(4,[14,21],[12,15]),hide:()=>!f().chase,
  talk:()=>f().mined?[{who:'…',say:'고스트 조각이에요. 아직 조금 뜨거워요.'}]:[{who:'…',say:'고스트가 팔을 휘둘러요! 위로, 위로!'}]},
 gyvoyT:{name:'기보이',zone:'tower',x:9,y:7,dir:'down',look:helm(GYVOY,'#8A5A7A'),
  pos:()=>f().mined?[15,6]:[9,7],
  status:()=>f().chase&&!f().mined?'todo':null,
  script:()=>{
   if(!f().chase)return [{say:'데이브들은요? 아래에 있어요. 같이 와요.'}];
   if(f().mined)return [{say:'핀, 이제 당신 차례예요.'}];
   return [
    {say:'빨리! 위로 올라와요!'},
    {say:'계단에 {지뢰|지뢰}를 깔아요!'},
    {who:'핀',say:'지뢰 떨어뜨렸어요! 30초 후에 켜져요!'},
    {who:'…',say:'번쩍! 계단 아래가 보라색으로 빛나요.',set:()=>{f().mined=1;f().boomAt=Date.now()}},
    {who:'…',say:'고스트 열두 대가 쓰러져요. 미사일이 계단 하나를 부숴요.'},
    {who:'…',say:'틈을 뛰어넘던 대원 한 명이 총에 맞았어요.'},
    {say:'격납고에 햇빛이 들어와요. 핀, 이제 당신 차례예요.'}]},
  talk:()=>[]},
 mummyA:{name:'카이발 미라',zone:'tower',x:10,y:5,dir:'down',look:MUMMY,
  talk:()=>[{who:'…',say:'카이발 셀레스철 {미라|미라}예요. 꼬리에 고양이 같은 털이 있어요.'},{who:'…',say:'두 명이 드롭십 쪽으로 기어가서 손을 뻗고 있어요.'},{who:'…',say:'한 명은 작아요. 부모와 아이일까요?'},{who:'…',say:'드롭십까지 몇 걸음. 육천 년 전에 여기서 멈췄어요.'}]},
 finnB:{name:'핀',zone:'tower',x:7,y:5,dir:'down',look:FINN_H,badge:['희생'],
  status:()=>{if(!state.badges.includes('희생'))return 'todo';if(!f().done)return 'todo'},
  script:()=>{
   if(!state.badges.includes('희생'))return null;
   if(f().done)return [{say:'카이발… 다시는 오고 싶지 않아요.'}];
   return [
    {say:'다 탔어요? 아치로 나가요!'},
    {w:'멸망하다',build:['멸망한','세계를','떠나요']},
    {who:'엘스베스',say:'잠깐. 제 탱크는 없어졌어요. 당신들은 저한테 탱크 한 대를 {빚|빚}졌어요.'},
    {who:'엘스베스',say:'그러니까 저도 성실호에 타요. 보물은 똑같이 나눠요.'},
    {who:'기보이',say:'좋아요. 거래예요.',set:()=>{f().done=1}},
    {say:'출발해요!'},
    {who:'…',say:'드롭십이 불을 뿜어요. 바닥이 녹아요. 천장을 긁으면서 아치 밖으로 날아가요.'},
    {who:'기보이',say:'핀, 이제 최대 출력!',finale:1}]},
  after:'그 사람들의 희생을 기억해요.',
  talk:()=>[
   {say:'왔어요? 여기 봐요. 모두 다섯 명이에요.'},
   {say:'드롭십까지 오다가 멈췄어요. 그때 세계가 멸망했어요.'},
   {say:'오늘 우리도 많이 잃었어요. 미크, 에두살, 폼키 팀…'},
   Q.finnB[0],
   {say:'이제 이 배를 깨울게요. 셀레스철 기계는 제 말을 들어요.'},
   {who:'…',say:'핀이 손을 대요. 드롭십이 대답해요. 불이 켜져요!',set:()=>{f().woke=1}},
   {say:'다들 모이면 말해요. 바로 출발해요.',award:['희생']}]},
 elsT:{name:'엘스베스',zone:'tower',x:12,y:6,dir:'left',look:ELS_H,
  talk:()=>[{say:'다리가 아직 아파요.'},{say:'탱크 없는 탱크 운전사… 웃기죠.'}]},
};
function tankSpot(){const F=f();if(F.causeway)return '탱크가 떠난 자리예요. 캐터필러 자국만 있어요.';
 return {steps:F.attack?[{who:'엘리 (무전)',say:'{무전|무전} 다 들었어요! 기보이 씨한테 말해요. 생각이 있어요!'}]
  :[{who:'…',say:'엘스베스의 탱크예요. 아주 커요.'},{who:'엘리 (무전)',say:'저는 탱크 안에 있어요. 카메라로 다 봐요.'},{who:'엘리 (무전)',say:'조종사인데… 기다리기만 해요.'}]}}
const FOLLOW={name:'엘리',look:ELLIE_H,when:()=>!!f().bitten&&!f().done,
 talk:()=>[{say:ZID==='tower'?(f().chase&&!f().mined?'뛰어요! 뒤에 고스트가 있어요!':'위에 격납고가 있어요. 핀 씨가 기다려요.')
  :ZID==='bk37'?'물린 다리가 좀 아파요. 그래도 괜찮아요.':'탱크가 없으니까 이상해요.'}]};

const INTRO=[{who:'성실호',say:'프레임 해제. 관문 통과 완료.'},{who:'성실호',say:'성실호의 첫 번째 관문 점프예요.'},{who:'성실호',say:'현재 위치: 호아 퀸주 성계.'}];
const DONE=['4장 끝! 드롭십이 카이발을 떠나요.','미크, 에두살, 폼키 팀, 벤사스 팀 몇 명이 돌아오지 못했어요.','핀, 엘리, 기보이, 데이브 두 명, 벤사스 하사는 살아서 돌아왔어요.','엘스베스도 같이 와서 성실호 승무원이 됐어요.',{expand:()=>wrapUp()},'일지에서 단어를 다시 볼 수 있어요.'];

function questText(){
 const F=f(),b=w=>state.badges.includes(w);
 if(F.done)return '4장 끝 · 일지에서 복습해요';
 if(!F.metDejean)return '지휘 통제실 · 드장 선장님한테 가요';
 if(!F.warned)return '지휘 통제실 · 홀로그램 앞으로 가요';
 if(!F.orbit)return '지휘 통제실 · 핀하고 이야기해요';
 if(!F.boarded)return '3번 격납고 · 엘리하고 헤즈업을 타요';
 if(!F.binopal)return ZID==='ship'?'3번 격납고 · 헤즈업에 타요':'나트 · 비노팔을 만나요';
 if(!F.els||!F.mique)return `나트 · 탱크 ${F.els?'✓':'✗'} · 자물쇠 전문가 ${F.mique?'✓':'✗'}`;
 if(!F.charges)return '나트 차고 · 벤사스 하사를 만나요';
 if(!F.ellieTank)return '나트 차고 · 기보이를 만나요';
 if(!F.breach)return '후두 정원 · 담 앞의 판디아나한테 폭약을 줘요';
 if(!F.prints)return 'BK37 · 미크를 따라가요';
 if(!F.attack)return 'BK37 · 함정 밭 끝의 벤사스 하사한테 가요';
 if(!F.causeway)return 'BK37 · 기보이한테 가요. 무전!';
 if(!F.bitten)return 'BK37 · 탑 앞의 엘스베스를 도와요';
 if(!F.chase)return '탑 · 데이브들을 만나요';
 if(!F.mined)return '탑 · 계단을 올라가요!';
 if(!b('희생'))return '격납고 · 핀을 찾아요';
 return '격납고 · 핀하고 출발해요';
}
return {WORDS,DICT,CONFUSE,BANK,Q,REVIEW,ITEMS,ZONES,NPC,FOLLOW,INTRO,DONE,questText,TILES,PLAYER};
}});
