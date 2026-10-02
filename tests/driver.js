/* In-page playtest driver. Plays a chapter using ONLY keyboard input (arrows, Z/space, Enter, X), the same
   path a player's key presses take. Reads the screen state to decide what to press, never calls game logic.
   Steps come from tests/walk/<chapter>.js. Screenshots: logs "SHOT:<name>" and waits for the runner. */
window.__play=async function(steps){
 const LOG=[],ERR=[];window.__log=LOG;window.__err=ERR;
 const log=m=>LOG.push(m),check=(c,m)=>{if(!c){ERR.push('ASSERT: '+m);log('!! '+m)}};
 addEventListener('error',e=>ERR.push('onerror: '+e.message+' @'+e.lineno));
 const realNow=Date.now;let skew=0;Date.now=()=>realNow()+skew;
 const wait=ms=>new Promise(r=>setTimeout(r,ms));
 const until=async(fn,ms=1500)=>{const t=performance.now();while(!fn()){if(performance.now()-t>ms)return false;await wait(15)}return true};
 const key=async(k,hold=40)=>{dispatchEvent(new KeyboardEvent('keydown',{key:k,bubbles:true}));await wait(hold);dispatchEvent(new KeyboardEvent('keyup',{key:k,bubbles:true}));await wait(25)};
 const ARROW={up:'ArrowUp',down:'ArrowDown',left:'ArrowLeft',right:'ArrowRight'};
 const shot=async name=>{window.__shotDone=false;console.log('SHOT:'+name);await until(()=>window.__shotDone,8000)};
 let shotN=0;

 async function step(d){ // one tile, by key press
  const x=player.x,y=player.y,z=ZID;
  dispatchEvent(new KeyboardEvent('keydown',{key:ARROW[d],bubbles:true}));
  const moved=await until(()=>player.moving||warping||player.x!==x||player.y!==y,400);
  dispatchEvent(new KeyboardEvent('keyup',{key:ARROW[d],bubbles:true}));
  await until(()=>!player.moving&&!warping,1500);await wait(30);
  return moved&&(player.x!==x||player.y!==y||ZID!==z);
 }
 async function face(d){await key(ARROW[d],60);check(player.dir===d,'could not face '+d)}
 function bfs(goal){
  const k=(x,y)=>x+','+y,seen=new Set([k(player.x,player.y)]),q=[[player.x,player.y,[]]];
  while(q.length){const [x,y,p]=q.shift();if(goal(x,y))return p;
   for(const [d,[dx,dy]] of Object.entries(D)){const nx=x+dx,ny=y+dy,kk=k(nx,ny);if(seen.has(kk))continue;seen.add(kk);
    const w=warpAt(nx,ny);if(w&&w.lock&&w.lock())continue;if(blocked(nx,ny))continue;if(w&&!goal(nx,ny))continue;q.push([nx,ny,[...p,d]])}}
  return null;
 }
 async function walk(path){for(const d of path){const z=ZID;const ok=await step(d);check(ok,`step ${d} failed at ${player.x},${player.y} in ${z}`);if(!ok)return;if(ZID!==z){await wait(250);return}}}
 function zoneRoute(target){ // BFS over the zone graph using warps
  const prev={[ZID]:null},q=[ZID];
  while(q.length){const z=q.shift();if(z===target)break;for(const w of Object.values(C.ZONES[z].warps||{}))if(!(w.to in prev)){prev[w.to]=z;q.push(w.to)}}
  if(!(target in prev))return null;const r=[];for(let z=target;z!==ZID;z=prev[z])r.unshift(z);return r;
 }
 async function goZone(target){
  const route=zoneRoute(target);check(!!route,`no route ${ZID}→${target}`);if(!route)return;
  for(const next of route){
   const p=bfs((x,y)=>{const w=warpAt(x,y);return !!w&&w.to===next});
   check(!!p,`no path ${ZID}→${next}`);if(!p)return;log(`-- walk ${ZID} → ${next} (${p.length} steps)`);await walk(p);
  }
 }
 async function finishDialog(opts={}){
  const wrongDone=new Set();let guard=0;
  while(dlg&&guard++<300){
   if(typing&&!typing.finished){await key('z');continue}
   const who=$('who').textContent,txt=$('txt').textContent;if(LOG[LOG.length-1]!==`  ${who}: ${txt}`)log(`  ${who}: ${txt}`);
   if(choosing()){
    const s=dlg.cur,btns=choiceBtns();const want=i=>btns.findIndex(b=>+b.dataset.i===i);
    const ci=s.opts.findIndex(o=>o[1]),wi=s.opts.findIndex(o=>!o[1]);
    let target=want(ci),label='> '+s.opts[ci][0];
    if(opts.wrong&&wi>=0&&!wrongDone.has(s.ask)){wrongDone.add(s.ask);target=want(wi);label='> (wrong) '+s.opts[wi][0]}
    if(opts.shotChoice&&!shotN++){await shot(opts.shotChoice)}
    for(let n=0;sel!==target&&n<6;n++)await key('ArrowDown');
    log('  '+label);await key('Enter');await wait(40);continue;
   }
   if(building()){
    const s=dlg.cur;
    if(opts.shotBuild){await shot(opts.shotBuild);opts.shotBuild=null}
    const tiles=()=>tileBtns(),idxOf=i=>tiles().findIndex(b=>+b.dataset.i===i);
    while(building()&&s.got<s.build.length){const t=idxOf(s.got);for(let n=0;sel!==t&&n<8;n++)await key('ArrowRight');await key('z');await wait(20)}
    log('  > built: '+s.build.join(' '));continue;
   }
   if(opts.shotSay&&txt.includes(opts.shotSay.text)){await shot(opts.shotSay.name);opts.shotSay=null}
   if(opts.shotTap&&$('txt').querySelector('.w')){ // tap a word → Korean definition, then ? → English
    const w=[...$('txt').querySelectorAll('.w')].sort((a,b)=>b.textContent.length-a.textContent.length)[0];w.click();await wait(150);
    check(!$('gloss').hidden,'tapping a word should open the dictionary');log('  tap '+w.textContent+' → '+$('gloss').textContent.slice(0,60));
    await shot(opts.shotTap+'-ko');$('gloss').querySelector('.q')?.click();await wait(100);await shot(opts.shotTap+'-en');$('gloss').click();opts.shotTap=null;continue}
   await key('z');
  }
  check(guard<300,'dialog did not end');
  await wait(1000);if(dlg)await finishDialog(opts);
 }
 async function reach(goal,label){const p=bfs(goal);check(!!p,'cannot reach '+label);if(!p)return false;await walk(p);return true}
 const dirTo=(x,y)=>x>player.x?'right':x<player.x?'left':y>player.y?'down':'up';
 async function talk(k,opts={}){
  const n=C.NPC[k];check(!!n,'no npc '+k);await goZone(n.zone);
  const [nx,ny]=npcPos(n);
  if(!await reach((x,y)=>Math.abs(x-nx)+Math.abs(y-ny)===1&&!warpAt(x,y),k))return;
  await face(dirTo(nx,ny));
  log(`== ${n.name} [${C.questText()}]`);
  check($('btnA').classList.contains('ready'),'A button should glow facing '+k);
  if(opts.shotBefore)await shot(opts.shotBefore);
  await key(' ');await until(()=>!!dlg,800);check(!!dlg,'no dialog from '+k);
  await finishDialog(opts);
 }
 async function inspect(zone,x,y,opts={}){
  await goZone(zone);if(!await reach((a,b)=>Math.abs(a-x)+Math.abs(b-y)===1&&!warpAt(a,b),`${x},${y}`))return;
  await face(dirTo(x,y));log(`== inspect ${zone} ${x},${y}`);await key(' ');await until(()=>!!dlg,800);
  if(opts.shot)await shot(opts.shot);await finishDialog(opts);
 }
 async function bump(zone,ch){ // walk up to a locked door and push against it
  await goZone(zone);const save={};
  for(const [k,w] of Object.entries(Z.warps||{}))if(w.lock){save[k]=w.lock;w.lock=null}
  const p=bfs((x,y)=>at(x,y)===ch);for(const [k,l] of Object.entries(save))Z.warps[k].lock=l;
  check(!!p,'no path to door '+ch);if(!p)return;await walk(p.slice(0,-1));
  await key(ARROW[p[p.length-1]],80);await wait(60);
  check(!$('toast').hidden,'locked door should say why');log('door says: '+$('toast').textContent);
 }

 /* fresh run of this chapter */
 if(dlg){await key('z');}
 await wait(400);
 for(const s of steps){
  try{
   if(s.intro){log('== intro');await until(()=>!!dlg,1500);if(s.shot)await shot(s.shot);await finishDialog()}
   else if(s.talk)await talk(s.talk,s);
   else if(s.inspect)await inspect(...s.inspect,s);
   else if(s.bump)await bump(...s.bump);
   else if(s.walkTo){await goZone(s.walkTo[0]);await reach((x,y)=>x===s.walkTo[1]&&y===s.walkTo[2],'walkTo');if(s.then)await shot(s.then)}
   else if(s.clock){skew+=s.clock;log(`clock +${s.clock/3600e3}h · due ${dueWords().length}`)}
   else if(s.check){check(s.check(),s.msg)}
   else if(s.log){log(s.log())}
   else if(s.panel){$('logBtn').click();await wait(200);if(s.shot)await shot(s.shot);check(!$('panel').hidden,'log panel opens');await key('x')}
   else if(s.chapters){$('chBtn').click();await wait(200);if(s.shot)await shot(s.shot);await key('x')}
   else if(s.shot)await shot(s.shot);
  }catch(e){ERR.push('driver: '+e.message)}
 }
 log('END quest: '+C.questText());
 window.__done=true;console.log('DONE');
};
