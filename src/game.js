/* Settings for the shared engine (walk-engine): this game's names, storage prefix and default player. */
var GAME={prefix:'seongsilho',title:'성실호',log:'항해 일지',
 term:{allWords:n=>[`단어 ${n}개를 다 모았어요!`,'복습할수록 ★가 늘어나요. 사람들도, 신호 단말기도 물어봐요.'],carry:'지난 항해에서 배운 말도 다시 나와요.',wrap:'이번 장에서 배운 말, 한 번 더 떠올려요.',name:'신호 단말기',empty:'신호 없음. 아직 일지가 비어 있어요.',idle:'새 신호가 없어요.',next:'다음 신호',due:(n,k)=>`신호가 왔어요. 단어 ${n}개가 기다려요.`+(k<n?` 이번에는 ${k}개만 해요.`:''),end:'신호 끝. 다음에 또 와요.'},

 /* spaced review: due again after 2 story beats or 5 minutes, then 5 beats or 20 minutes; later levels are hours and days, and one
    shared record lets later chapters bring earlier words back (people's lines, the 신호 단말기 and the last round of each chapter) */
 srs:{start:1,gap:[0,5*60e3,20*60e3,4*3600e3,24*3600e3,3*24*3600e3],beats:[0,2,5],shared:1},
 /* the crew look (walk-engine crew style): 성실호's people in everyday kit instead of 방과 후's school uniforms; per character from a
    book audit (2026-10-09: clothes, jaw, eye colour where the book gives one, 조사이어스's beard, 그르시아's visor, a few colour fixes) */
 lookStyle:'crew',
 looks:{'엘리':{"kit":{"vest":"#8A6A4A","pouches":"#6E7B5A"},"jaw":"pointed"},
 '드장 선장':{"uniform":1,"onePiece":1,"shirt":"#3B3F8A","pants":"#4A3A7A","cap":null},
 '핀':{"kit":{"sweater":"#B59A62","coat":"#5E4A6E"}},
 '오르':{"kit":{"vest":"#8A6A4A","pouches":"#6E7B5A"}},
 '옥테인 기관장':{"kit":{"pouches":"#9A4A3A","vest":"#4A5A6E"}},
 '기보이':{"kit":{"coat":"#B59A62","vest":"#5E4A6E"}},
 '천문학자 리나':{"kit":{"coat":"#8A6A4A","pouches":"#6E7B5A"}},
 '광부':{"kit":{"pouches":"#9A4A3A","strap":"#4A5A6E"}},
 '테렌스 형사':{"kit":{"coat":"#B59A62","pouches":"#5E4A6E"}},
 '조사이어스':{"kit":{"coat":"#8A6A4A","vest":"#6E7B5A"},"eye":"#7F95A8","fullBeard":1},
 '오틸리아':{"kit":{"sweater":"#9A4A3A","strap":"#4A5A6E"}},
 '카페 사장님':{"kit":{"sweater":"#B59A62","vest":"#5E4A6E"}},
 '우조마 선장':{"kit":{"pouches":"#8A6A4A","strap":"#6E7B5A"},"jaw":"round"},
 '베이질 목사':{"kit":{"coat":"#9A4A3A","pouches":"#4A5A6E"},"jaw":"round"},
 '그르시아':{"kit":{"pouches":"#B59A62","strap":"#5E4A6E"},"visor":1},
 '이치카':{"kit":{"pouches":"#8A6A4A","strap":"#6E7B5A"}},
 '요루':{"kit":{"pouches":"#9A4A3A","strap":"#4A5A6E"}},
 '미테리스':{"kit":{"vest":"#B59A62","strap":"#5E4A6E"}},
 '오키미살':{"kit":{"pouches":"#8A6A4A","vest":"#6E7B5A"}},
 '버블타운 주민':{"kit":{"sweater":"#9A4A3A","vest":"#4A5A6E"}},
 '타비아':{"kit":{"pouches":"#B59A62","strap":"#5E4A6E"}},
 '로지 주인':{"kit":{"sweater":"#8A6A4A","vest":"#6E7B5A"}},
 '맬빈 기관장':{"kit":{"pouches":"#9A4A3A","strap":"#4A5A6E"}},
 '응글론':{"kit":{"vest":"#B59A62","pouches":"#5E4A6E"}},
 '경비원':{"uniform":1,"onePiece":1},
 '젤린다':{"kit":{"coat":"#9A4A3A","vest":"#4A5A6E"},"jaw":"pointed"},
 '역무원':{"uniform":1,"onePiece":1},
 '테렌스':{"kit":{"coat":"#8A6A4A","pouches":"#6E7B5A"}},
 '해변 카페 사장님':{"kit":{"sweater":"#9A4A3A","pouches":"#4A5A6E"}},
 '우에미주발리':{"kit":{"vest":"#B59A62","strap":"#5E4A6E"}},
 '비노팔':{"kit":{"vest":"#8A6A4A","pouches":"#6E7B5A"}},
 '미크 오독스':{"kit":{"pouches":"#9A4A3A","strap":"#4A5A6E"}},
 '나트 식당 아저씨':{"kit":{"sweater":"#B59A62","vest":"#5E4A6E"}},
 '엘스베스':{"kit":{"pouches":"#8A6A4A","vest":"#6E7B5A"},"eye":"#BFC5CA"},
 '폼키':{"uniform":1,"onePiece":1},
 '벤사스 하사':{"uniform":1,"onePiece":1},
 '판디아나':{"uniform":1,"onePiece":1},
 '에두살':{"uniform":1,"onePiece":1},
 '루치아':{"kit":{"vest":"#B59A62","pouches":"#5E4A6E"}},
 '봅베':{"kit":{"sweater":"#8A6A4A","strap":"#6E7B5A"},"jaw":"round"},
 '감식 요원':{"kit":{"coat":"#9A4A3A","pouches":"#4A5A6E"}},
 '마리아 호세 서장':{"uniform":1,"shirt":"#2F6B4A","pants":"#E4E2D8","cap":"#9A5A9A"},
 '베르셰':{"kit":{"vest":"#8A6A4A","strap":"#6E7B5A"}},
 '메두사':{"kit":{"vest":"#9A4A3A","strap":"#4A5A6E"}},
 '지카르 타소트':{"kit":{"sweater":"#B59A62","pouches":"#5E4A6E"}},
 '납치범':{"kit":{"coat":"#8A6A4A","strap":"#6E7B5A"},"jaw":"round"},
 '알잔':{"kit":{"sweater":"#9A4A3A","strap":"#4A5A6E"}},
 '바닐다':{"kit":{"vest":"#B59A62","strap":"#5E4A6E"}},
 '히메나':{"kit":{"sweater":"#8A6A4A","strap":"#6E7B5A"}},
 '하이안':{"kit":{"sweater":"#9A4A3A","vest":"#4A5A6E"},"hair":"#9A9A9A","hairHi":"#BDBDBD"},
 '바텐더':{"kit":{"vest":"#B59A62","sweater":"#5E4A6E"}},
 '오틸리아 (화면)':{"kit":{"sweater":"#8A6A4A","strap":"#6E7B5A"}},
 '에이든':{"kit":{"pouches":"#9A4A3A","strap":"#4A5A6E"}},
 '로렐라':{"kit":{"sweater":"#B59A62","strap":"#5E4A6E"}},
 '에버렛':{"kit":{"coat":"#8A6A4A","vest":"#6E7B5A"}},
 '알잔 선생님':{"kit":{"coat":"#9A4A3A","pouches":"#4A5A6E"}}},
 player:{hair:'#2A2F4A',skin:'#F1C9A5',shirt:'#E4E1D6',pants:'#3B4650',belt:'#E8962A'}};

/* scenes the engine can play on a black line (step scene:'liftDown'): the orbital tower lift (1장, 3장) as the capsule's big window
   sees it, in 1장's tile colours: stars and Gondiar's curve, then blue sky and white cloud rising
   past, then the station hill and rail yards of Santa Rosa (c006: the lounge's clear wall, vast continents and white cloud below).
   h is the height: 1 at High Rosa, 0 at the foot of the tower. */
function liftView(G,h,t,[b0,b1]){
 const W=176,H=160,cl=v=>Math.max(0,Math.min(1,v)),R=(x,y,w,hh,c)=>{G.fillStyle=c;G.fillRect(Math.round(x),Math.round(y),w,hh)},
  hex=c=>[16,8,0].map(k=>(parseInt(c.slice(1),16)>>k)&255),lerp=(A,B,q)=>A.map((v,j)=>v+(B[j]-v)*q);
 const cy=Math.round((b0+b1)/2)-7;  // the capsule, in the middle of what the box leaves free
 const SKY=[[1,'#04060C','#10284A'],[.55,'#0F2A55','#3F7FC0'],[.25,'#3D7CC4','#8EC6EE'],[0,'#5C9BDB','#A9D8F2']];
 let i=0;while(i<SKY.length-2&&h<SKY[i+1][0])i++;const [h0,t0,u0]=SKY[i],[h1,t1,u1]=SKY[i+1],k=cl((h0-h)/(h0-h1)),top=lerp(hex(t0),hex(t1),k),bot=lerp(hex(u0),hex(u1),k);
 G.save();for(let y=0;y<H;y+=4)R(0,y,W,4,`rgb(${lerp(top,bot,y/H).map(Math.round).join(',')})`);  // the sky, banded
 G.globalAlpha=cl((h-.5)/.25);for(let n=0;n<46;n++){const x=(n*73+11)%W,y=(n*41+n*n*7)%H;if((n+(t/400|0))%9)R(x,y,1,1,n%5?'#C9D3E0':'#F2D24A')}
 const pa=cl((h-.42)/.13);if(pa>0){G.globalAlpha=pa;const yl=b1+10-cl((1-h)/.45)*(b1-b0+30);  // the planet's curve rising as you come down
  const arc=(x,y,r,c)=>{G.fillStyle=c;G.beginPath();G.arc(x,y,r,0,Math.PI*2);G.fill()};
  G.save();G.beginPath();G.arc(88,yl+420,420,0,Math.PI*2);G.clip();arc(88,yl+420,420,'#2E7A68');arc(36,yl+70,60,'#4E9E6E');arc(140,yl+95,48,'#C9A64A');arc(110,yl+40,26,'#4E9E6E');
  R(20,yl+18,34,3,'#E8F0F2');R(30,yl+15,18,3,'#E8F0F2');R(96,yl+30,40,3,'#E8F0F2');R(108,yl+27,20,3,'#E8F0F2');R(50,yl+48,30,3,'#E8F0F2');G.restore();
  G.strokeStyle='rgba(159,215,232,.8)';G.lineWidth=2;G.beginPath();G.arc(88,yl+420,420,Math.PI*1.2,Math.PI*1.8);G.stroke()}
 G.globalAlpha=1;
 const CLOUD=[[.5,8,34],[.46,118,40],[.42,60,26],[.37,2,30],[.34,130,34],[.3,40,38],[.27,104,28],[.23,12,36],[.2,128,30]];
 for(const [a,x,w] of CLOUD){const y=cy+(h-a)*700;if(y<-12||y>H+6)continue;R(x,y,w,4,'#F4F8FA');R(x+3,y-3,w-8,3,'#F4F8FA');R(x+7,y-5,w-15,2,'#F4F8FA');R(x+1,y+4,w-2,2,'#D6E2EA')}
 const yg=cy+14+h*600,ye=Math.min(H,yg);  // the ground; the tower stands on it
 R(85,0,6,ye,'#9AA3AD');R(85,0,1,ye,'#C4CBD2');R(90,0,1,ye,'#6E7680');R(87,0,2,ye,'rgba(159,215,232,.85)');
 for(let y=(cy+h*900)%12;y<ye;y+=12)R(85,y,6,1,'#6E7680');  // the tower's joints slide by: that's the speed
 if(yg<H){R(0,yg-2,W,H-yg+2,'#7FB45E');for(let x=0;x<W;x+=16)if(x<52||x>116){R(x+3,yg-8,10,7,'#3E8E6A');R(x+5,yg-10,6,2,'#4E9E6E');R(x+7,yg-1,2,2,'#6E5A44')}
  for(const x0 of [0,116]){R(x0,yg+6,60,12,'#A99F90');for(let x=x0+1;x<x0+60;x+=4)R(x,yg+8,2,8,'#6E5A44');R(x0,yg+10,60,1,'#5A6068');R(x0,yg+9,60,1,'#B9C1C9');R(x0,yg+15,60,1,'#5A6068');R(x0,yg+14,60,1,'#B9C1C9')}
  for(let r=0;r<12;r++){const w=40+r*3;R(88-w/2,yg-10+r,w,1,r?'#A3957E':'#C4B69C')}
  for(const x of [70,80,98,108])R(x,yg-4,3,3,'#231E1A'),R(x,yg-1,3,1,'#E8C46A')}
 R(76,cy,24,14,'#E8ECF0');R(74,cy+2,28,10,'#E8ECF0');R(76,cy,24,1,'#C4CBD2');R(76,cy+13,24,1,'#6E7680');R(74,cy+11,28,1,'#9AA3AD');  // the capsule
 R(76,cy+4,24,5,'#2D4458');R(78,cy+5,3,1,'#9FD7E8');R(83,cy+6,2,3,'#0F1820');R(92,cy+5,2,4,'#0F1820');R(76,cy+10,24,1,'#E8952E');
 if((t/500|0)%2)R(87,cy-1,2,1,'#F2D24A');
 G.restore();
}
GAME.scenes={liftDown:{ms:9000,draw:(G,p,t,b)=>liftView(G,(1+Math.cos(Math.PI*p))/2,t,b)},liftUp:{ms:7000,draw:(G,p,t,b)=>liftView(G,(1-Math.cos(Math.PI*p))/2,t,b)},
 liftDownQuick:{ms:5000,draw:(G,p,t,b)=>liftView(G,(1+Math.cos(Math.PI*p))/2,t,b)},liftUpQuick:{ms:5000,draw:(G,p,t,b)=>liftView(G,(1-Math.cos(Math.PI*p))/2,t,b)}};  // Quick: a ride told in one line
