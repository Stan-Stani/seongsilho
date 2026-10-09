/* Settings for the shared engine (walk-engine): this game's names, storage prefix and default player. */
var GAME={prefix:'seongsilho',title:'성실호',log:'항해 일지',
 term:{allWords:n=>[`단어 ${n}개를 다 모았어요!`,'복습할수록 ★가 늘어나요. 사람들도, 신호 단말기도 물어봐요.'],carry:'지난 항해에서 배운 말도 다시 나와요.',wrap:'이번 장에서 배운 말, 한 번 더 떠올려요.',name:'신호 단말기',empty:'신호 없음. 아직 일지가 비어 있어요.',idle:'새 신호가 없어요.',next:'다음 신호',due:(n,k)=>`신호가 왔어요. 단어 ${n}개가 기다려요.`+(k<n?` 이번에는 ${k}개만 해요.`:''),end:'신호 끝. 다음에 또 와요.'},

 /* spaced review: due again after 2 story beats or 5 minutes, then 5 beats or 20 minutes; later levels are hours and days, and one
    shared record lets later chapters bring earlier words back (people's lines, the 신호 단말기 and the last round of each chapter) */
 srs:{gap:[0,5*60e3,20*60e3,4*3600e3,24*3600e3,3*24*3600e3],beats:[0,2,5],shared:1},
 player:{hair:'#2A2F4A',skin:'#F1C9A5',shirt:'#E4E1D6',pants:'#3B4650',belt:'#E8962A'}};
