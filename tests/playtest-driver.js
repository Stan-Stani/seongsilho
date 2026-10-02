/* Playtest driver: appended after the game's scripts. Plays chapter 1 through the engine's own functions. */
(async()=>{
const LOG=[],ERR=[];
const log=m=>LOG.push(m);
addEventListener('error',e=>ERR.push('onerror: '+e.message+' @'+e.lineno));
const realNow=Date.now;let skew=0;Date.now=()=>realNow()+skew;
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const check=(c,m)=>{if(!c)ERR.push('ASSERT: '+m)};
try{localStorage.clear()}catch(e){}
await wait(600);
if(dlg)closeDialog();await wait(50);loadState();state=fresh();state.seenIntro=true;save();loadZone('ship',2,3,'down');

async function finish(opts={}){
 let guard=0,wrongDone=new Set();
 while(dlg&&guard++<200){
  if(typing&&!typing.finished)typing.fin();
  await wait(5);
  const who=$('who').textContent,txt=$('txt').textContent;
  if(LOG[LOG.length-1]!==`  ${who}: ${txt}`)log(`  ${who}: ${txt}`);
  if(choosing()){
   const s=dlg.cur;const ci=s.opts.findIndex(o=>o[1]);
   const wi=s.opts.findIndex(o=>!o[1]);
   const key=s.ask;
   if(opts.wrong&&wi>=0&&!wrongDone.has(key)){wrongDone.add(key);log('  > (wrong) '+s.opts[wi][0]);document.querySelector(`#choices .choice[data-i="${wi}"]`).click()}
   else{log('  > '+s.opts[ci][0]);document.querySelector(`#choices .choice[data-i="${ci}"]`).click()}
   continue;
  }
  if(building()){
   const s=dlg.cur;
   if(opts.wrong&&!wrongDone.has('b'+s.build.join())){wrongDone.add('b'+s.build.join());const bad=[...document.querySelectorAll('#tiles .tile')].find(b=>+b.dataset.i!==0);bad&&bad.click();log('  > (wrong tile)')}
   for(let i=0;i<s.build.length;i++){document.querySelector(`#tiles .tile[data-i="${i}"]`).click();await wait(2)}
   log('  > built: '+s.build.join(' '));continue;
  }
  advance();
 }
 check(guard<200,'dialog did not end');
 await wait(950); // pending/finale dialogs
 if(dlg)await finish(opts);
}
function bfs(goalFn){
 const key=(x,y)=>x+','+y;const seen=new Set([key(player.x,player.y)]);const q=[[player.x,player.y,[]]];
 while(q.length){const [x,y,p]=q.shift();if(goalFn(x,y))return p;
  for(const [d,[dx,dy]] of Object.entries(D)){const nx=x+dx,ny=y+dy,k=key(nx,ny);if(seen.has(k))continue;seen.add(k);
   const w=warpAt(nx,ny);if(w&&w.lock&&w.lock())continue;
   if(blocked(nx,ny))continue;
   if(w&&!goalFn(nx,ny))continue; // don't path through doors unless they are the goal
   q.push([nx,ny,[...p,d]])}}
 return null;
}
async function walk(path){
 for(const d of path){
  const [dx,dy]=D[d];player.dir=d;const nx=player.x+dx,ny=player.y+dy;
  check(!blocked(nx,ny),`walk into blocked ${nx},${ny} in ${ZID}`);
  player.fx=player.x;player.fy=player.y;player.x=nx;player.y=ny;
  if(petOn()){pet.x=player.fx;pet.y=player.fy}
  if(arrive()){await wait(500);return 'warped'}
 }
}
const ROUTE={ship:{dock:'D'},dock:{ship:'A',city:'E'},city:{dock:'E'}};
async function goZone(target){
 let hops=0;
 while(ZID!==target&&hops++<4){
  const next=ZID==='city'?'dock':ZID==='ship'?'dock':target==='ship'?'ship':'city';
  const ch=ROUTE[ZID][next];
  const p=bfs((x,y)=>at(x,y)===ch);
  check(!!p,`no path from ${ZID} to ${next}`);if(!p)return;
  log(`-- walk ${ZID} → ${next} (${p.length} steps)`);
  await walk(p);
 }
}
async function talk(k,opts){
 const n=NPC[k];await goZone(n.zone);
 const [nx,ny]=npcPos(n);
 const p=bfs((x,y)=>Math.abs(x-nx)+Math.abs(y-ny)===1&&!warpAt(x,y));
 check(!!p,'cannot reach '+k);if(!p)return;
 await walk(p);
 player.dir=nx>player.x?'right':nx<player.x?'left':ny>player.y?'down':'up';
 log(`== ${n.name} [${questText()}]`);
 check(!!facing()?.n,'not facing '+k);
 interact();await finish(opts);
}
async function inspect(zone,x,y){
 await goZone(zone);
 const p=bfs((a,b)=>Math.abs(a-x)+Math.abs(b-y)===1);check(!!p,'cannot reach spot '+x+','+y);if(!p)return;
 await walk(p);player.dir=x>player.x?'right':x<player.x?'left':y>player.y?'down':'up';
 interact();await finish();
}

/* ---- playthrough ---- */
log('START quest: '+questText());
// the airlock should be locked at the start
{const p=bfs((x,y)=>at(x,y)===null);const doorPath=(()=>{const save=Z.warps['18,15'].lock;Z.warps['18,15'].lock=null;Z.warps['19,15'].lock=null;const r=bfs((x,y)=>at(x,y)==='D');Z.warps['18,15'].lock=save;Z.warps['19,15'].lock=save;return r})();
 await walk(doorPath.slice(0,-1));const [dx,dy]=D[doorPath[doorPath.length-1]];check(!!warpAt(player.x+dx,player.y+dy).lock(),'airlock should be locked');log('airlock locked at start: ok');}
await talk('andy');      // before meeting the owner: should refuse politely
check(!state.badges.includes('수리하다'),'Octain must not teach before Finn');
await talk('ellie',{wrong:true});
await talk('dejean');
await talk('finn',{wrong:true});
check(f().finn&&petOn(),'Finn should follow');
check(!npcAt(14,4),'Finn sprite should leave the bridge');
await talk('or');
await talk('andy');
check(f().needParts,'needParts set');
await inspect('ship',1,4); // terminal
await talk('customs');
check(f().customs,'customs cleared');
await talk('gyvoy');
await talk('lina',{wrong:true});
await talk('trader');
await talk('gyvoy');
check(hasItem('연료통')&&!hasItem('지구 씨앗 상자'),'fuel received for seeds');
await talk('terence');
await talk('josias',{wrong:true});
await talk('otylia');
await talk('cafe',{wrong:true});
log('badges '+state.badges.length+'/16, items: '+state.items.join(', '));
check(state.badges.length===16,'all 16 words');
await talk('andy');
check(f().fixed,'engine fixed');
await talk('dejean');
check(f().done,'chapter done');
log('END quest: '+questText());
// review: move the clock a day ahead, use the terminal
skew=26*3600e3;
log('due after 1 day: '+dueWords().length);
await inspect('ship',1,4);
await talk('ellie');
log('levels: '+WORDS.map(w=>w+':'+lv(w).b).join(' '));
// the log panel opens and renders
openPanel();check(!$('panel').hidden&&$('wlist').children.length===16,'log panel');
const pre=document.createElement('pre');pre.id='testlog';pre.textContent='ERRORS:\n'+(ERR.join('\n')||'none')+'\n\nLOG:\n'+LOG.join('\n');
document.body.appendChild(pre);
})();
