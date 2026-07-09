(function(){
  const KEY='shomrei_hatavlin_state_v2';
  const app=document.getElementById('app');
  const params=new URLSearchParams(location.search);
  const stationParam=params.get('station');
  const langParam=params.get('lang');
  const dev=params.get('dev')==='1';
  const SECRET_BASE=[77,28,42];

  function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;}
  function now(){return Date.now();}
  function escapeHTML(str){return String(str==null?'':str).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function load(){try{return JSON.parse(localStorage.getItem(KEY))||null}catch(e){return null}}
  function save(s){localStorage.setItem(KEY,JSON.stringify(s));}
  function fmt(sec){sec=Math.max(0,Math.floor(sec));const m=String(Math.floor(sec/60)).padStart(2,'0');const ss=String(sec%60).padStart(2,'0');return `${m}:${ss}`;}
  function getLang(){let s=load(); return langParam || (s&&s.lang) || 'he';}
  function t(k){const lang=getLang();return (GAME_DATA.ui[lang]&&GAME_DATA.ui[lang][k])||GAME_DATA.ui.he[k]||k;}
  function C(id){return GAME_DATA.creatures[id];}
  function ct(id,field){const lang=getLang();return (C(id)[lang]&&C(id)[lang][field])||C(id).he[field];}
  function state(){let s=load(); if(!s) return null; if(langParam && s.lang!==langParam){s.lang=langParam; save(s);} return s;}
  function createState(lang,name){const route=shuffle(GAME_DATA.stations);const s={lang,name:escapeHTML((name||'').toString().trim()),route,collected:[],stars:0,bonuses:0,bonusTimes:shuffle(SECRET_BASE),usedBonuses:[],start:now(),stationStart:now(),currentQuestion:0,mode:'map'};save(s);return s;}
  function reset(){localStorage.removeItem(KEY); location.href=location.pathname+(langParam?`?lang=${langParam}`:'');}
  function applyDir(){const lang=getLang(); document.documentElement.dir = lang==='fr' ? 'ltr' : 'rtl'; document.documentElement.lang = lang;}
  function screen(html){applyDir(); app.innerHTML=`<section class="screen">${html}</section>`;}
  function top(title){const s=state(); const elapsed=s?fmt((now()-s.start)/1000):'00:00'; return `<div class="topbar"><span class="pill timer">${elapsed}</span><span class="pill">${title||''}</span></div>`;}
  function img(id,cls=''){return `<img class="${cls}" src="${C(id).image}" alt="${ct(id,'name')}" onerror="this.outerHTML='<div style=&quot;font-size:54px&quot;>${C(id).emoji}</div>'">`;}
  function hero(){return `<div class="hero">${GAME_DATA.stations.map(id=>img(id)).join('')}</div>`;}
  function setCSSFor(id){ if(!id) return; document.documentElement.style.setProperty('--accent', C(id).color);}
  function progress(s){return `<div class="progressGrid">${GAME_DATA.stations.map(id=>`<div class="mini ${s.collected.includes(id)?'collected':''}">${img(id)}<div>${ct(id,'name')}</div><small>${s.collected.includes(id)?'✓':'○'}</small></div>`).join('')}</div>`;}
  function nextStation(s){return s.route.find(id=>!s.collected.includes(id));}
  function currentIndex(s){const n=nextStation(s);return n?s.route.indexOf(n)+1:6;}
  function qset(id){return QUESTIONS[getLang()]?.[id] || QUESTIONS.he[id];}
  function currentQ(s,id){return qset(id)[s.currentQuestion||0];}
  function letter(i){return ['א','ב','ג','ד'][i] || (i+1);}

  function renderOpening(){screen(`
    <div class="langrow"><button class="btn secondary" data-lang="he">עברית</button><button class="btn secondary" data-lang="fr">Français</button></div>
    <h1>${t('title')}</h1><div class="subtitle">${t('subtitle')}</div>${hero()}
    <button class="btn" id="start">${t('start')}</button>
  `); document.getElementById('start').onclick=()=>renderStory(); document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{createState(b.dataset.lang,''); renderOpening(); history.replaceState(null,'',location.pathname+'?lang='+b.dataset.lang);});}
  function renderStory(){screen(`<h2>${t('storyTitle')}</h2><div class="story">${t('story').map(x=>`<p>${x}</p>`).join('')}</div><button class="btn" id="n">${t('next')}</button>`); document.getElementById('n').onclick=renderRules;}
  function renderRules(){screen(`<h2>${t('rulesTitle')}</h2><ul class="rules">${t('rules').map(x=>`<li>${x}</li>`).join('')}</ul><button class="btn" id="n">${t('next')}</button>`); document.getElementById('n').onclick=renderName;}
  function renderName(){screen(`<h2>${t('nameTitle')}</h2><input class="nameInput" id="name" placeholder="${t('namePlaceholder')}" /><button class="btn" id="go">${t('begin')}</button>`); document.getElementById('go').onclick=()=>{const lang=getLang(); const name=document.getElementById('name').value.trim(); createState(lang,name); renderMap();};}
  function renderMap(){const s=state(); if(!s){renderOpening();return;} setCSSFor(nextStation(s)); const n=nextStation(s); if(!n){renderEnd();return;} screen(`${top(t('map'))}<div class="pill">${t('creatures')} ${s.collected.length}/6 · ⭐ ${s.stars}</div>${progress(s)}<div class="card"><h2>${t('nextHideout')}</h2><p class="story" style="font-size:20px">${GAME_DATA.hints[getLang()][n]||GAME_DATA.hints.he[n]}</p><p class="small" style="text-align:center">${t('scanHint')}</p></div><button class="btn secondary" id="scanBtn">${getLang()==='fr'?'Scanner une station':'סרקו תחנה'}</button><div id="scanPanel"></div>${dev?devLinks():''}`); document.getElementById('scanBtn').onclick=()=>{const panel=document.getElementById('scanPanel'); if(dev){panel.innerHTML=`<div class="card"><b>קישורי תחנות (מצב פיתוח)</b><div class="stack">${GAME_DATA.stations.map(id=>`<a class="btn ghost" href="?station=${id}&dev=1">${id} - ${ct(id,'name')}</a>`).join('')}</div></div>`;} else {panel.innerHTML=`<div class="card"><p class="story" style="font-size:18px">${getLang()==='fr'?'Allez à la station et scannez le code <span dir="ltr">QR</span> qui s’y trouve.':'גשו לתחנה וסרקו את קוד ה־<span dir="ltr">QR</span> שמופיע בה.'}</p></div>`;}}; if(dev) attachDev();}
  function devLinks(){return `<div class="card"><b>Developer mode</b><div class="stack">${GAME_DATA.stations.map(id=>`<button class="btn ghost devstation" data-id="${id}">${id} - ${ct(id,'name')}</button>`).join('')}</div><button class="btn secondary" id="reset">${t('reset')}</button></div>`;}
  function attachDev(){document.querySelectorAll('.devstation').forEach(b=>b.onclick=()=>renderStation(b.dataset.id)); document.getElementById('reset').onclick=reset;}

  function handleStation(){const s=state(); if(!s){renderOpening();return;} if(!stationParam){renderMap();return;} if(!GAME_DATA.stations.includes(stationParam)){renderMap();return;} renderStation(stationParam);}
  function renderStation(id){const s=state(); if(!s){renderOpening();return;} setCSSFor(id); const n=nextStation(s); if(s.collected.includes(id)){screen(`${top(ct(id,'place'))}<div class="creature card">${img(id)}<div class="creatureText"><h2>${ct(id,'name')} ${t('alreadyTitle')}</h2><p>${t('alreadyText')}</p></div></div><button class="btn" id="map">${t('backMap')}</button>`); document.getElementById('map').onclick=renderMap; return;}
    if(id!==n && !dev){screen(`${top(ct(id,'place'))}<div class="creature card">${img(id)}<div class="creatureText"><h2>${t('wrongStationTitle')}</h2><p>${t('wrongStationText')}</p></div></div><button class="btn" id="map">${t('backMap')}</button>`); document.getElementById('map').onclick=renderMap; return;}
    s.currentQuestion=0; s.stationStart=now(); save(s);
    screen(`${top(ct(id,'place'))}<div class="creature card">${img(id)}<div class="creatureText"><h2>${t('found')} ${ct(id,'name')}!</h2><p>${t('patient')}</p><p class="small">${ct(id,'role')} · ${ct(id,'contribution')}</p></div></div><div class="stack"><button class="btn" id="quiz">${t('answerQuestions')}</button><button class="btn secondary" id="wait">${t('wait')}</button></div>`);
    document.getElementById('quiz').onclick=()=>renderQuiz(id);
    document.getElementById('wait').onclick=()=>{document.getElementById('wait').outerHTML=`<div class="feedback">...<br>...<br>${t('waitResult')}</div>`;};
  }
  function renderQuiz(id, selectedIndex=null, result=null){const s=state(); setCSSFor(id); const questions=qset(id); const qi=s.currentQuestion||0; const q=questions[qi]; const pct=(qi/questions.length)*100; const disabled=result?'disabled':'';
    screen(`${top(ct(id,'place'))}<div style="text-align:center">${img(id,'qcreature')}<b>${ct(id,'name')}</b></div><div class="bar"><span style="width:${pct}%"></span></div><div class="question">${q.text}</div><div class="answers">${q.answers.map((a,i)=>`<button class="answer ${selectedIndex===i?(a.correct?'good':'bad'):''}" data-i="${i}" ${disabled}>${letter(i)}. ${a.text}</button>`).join('')}</div><div id="fb">${result?result:''}</div>`);
    document.querySelectorAll('.answer').forEach(b=>b.onclick=()=>answer(id,Number(b.dataset.i)));
  }
  function answer(id,i){const s=state(); const q=currentQ(s,id); const a=q.answers[i]; if(a.correct){s.stars+=1; save(s); const html=`<div class="explain"><b>✅ ${t('correct')}</b><br>${q.explanation||''}</div><button class="btn" id="cont">${t('continue')}</button>`; renderQuiz(id,i,html); document.getElementById('cont').onclick=()=>{s.currentQuestion=(s.currentQuestion||0)+1; save(s); if(s.currentQuestion>=qset(id).length){completeStation(id);} else renderQuiz(id);}; }
    else {const html=`<div class="feedback"><b>${ct(id,'name')} עוד לא השתכנע.</b><br>${a.feedback}<br><br>${getLang()==='he'?'נסו שוב.':'Essayez encore.'}</div><button class="btn secondary" id="try">${t('tryAgain')}</button>`; renderQuiz(id,i,html); document.getElementById('try').onclick=()=>renderQuiz(id);}
  }
  function maybeBonus(s){const elapsed=Math.floor((now()-s.stationStart)/1000); const target=s.bonusTimes.find(x=>!s.usedBonuses.includes(x)); if(target && elapsed===target){s.usedBonuses.push(target); s.bonuses+=1; s.stars+=1; save(s); return true;} return false;}
  function completeStation(id){const s=state(); if(!s.collected.includes(id)) s.collected.push(id); s.currentQuestion=0; s.stars+=2; const bonus=maybeBonus(s); save(s); setCSSFor(id); screen(`${top(ct(id,'place'))}<div class="creature card">${img(id)}<div class="creatureText"><h2>${ct(id,'name')} ${t('captured')}</h2><p>${ct(id,'role')}</p><p><b>${ct(id,'contribution')}</b></p></div></div>${bonus?`<div class="explain"><b>${t('bonusTitle')}</b><br>${t('bonusText')}</div>`:''}<button class="btn" id="map">${s.collected.length===6?t('continue'):t('backMap')}</button>`); document.getElementById('map').onclick=()=>{ if(s.collected.length===6) renderEnd(); else renderMap();};}
  function renderEnd(){const s=state(); screen(`${top('🏆')}<h2>${t('endTitle')}</h2>${progress(s)}<div class="stats"><div class="stat"><span>${t('time')}</span><b>${fmt((now()-s.start)/1000)}</b></div><div class="stat"><span>${t('stars')}</span><b>⭐ ${s.stars}</b></div><div class="stat"><span>${t('bonuses')}</span><b>${s.bonuses}</b></div></div><div class="finalLine">${t('endLines').map(x=>`<p>${x}</p>`).join('')}<p>📸 ${t('screenshot')}</p></div><button class="btn secondary" id="reset">${t('reset')}</button><div class="footer">${t('thanks')}</div>`); document.getElementById('reset').onclick=reset;}
  function tick(){const el=document.querySelector('.timer');const s=state(); if(el&&s) el.textContent=fmt((now()-s.start)/1000);}
  setInterval(tick,1000);
  if(stationParam) handleStation(); else {const s=state(); if(s&&s.name) renderMap(); else renderOpening();}
})();
