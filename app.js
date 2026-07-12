(function(){
  const KEY='shomrei_hatavlin_state_v2';
  const app=document.getElementById('app');
  const params=new URLSearchParams(location.search);
  const stationParam=params.get('station');
  const langParam=params.get('lang');
const dev = params.get('dev') === '1';
const SECRET_BASE = [77, 28, 42];

const RESULTS_URL =
  'https://script.google.com/macros/s/AKfycbyYBi_9H-lXrX2yrQPy8fpwJ4KoPJmEaYKuI6IGtf1r5rPwZ98kLnLSldw_x3HD21TM/exec';
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
  function imagePath(id,state='full'){
    if(state==='hidden') return C(id).image.replace(/\.png$/,'_hidden.png');
    if(state==='awakening') return C(id).image.replace(/\.png$/,'_awakening.png');
    return C(id).image;
  }
  function img(id,cls='',state='full'){return `<img class="${cls}" src="${imagePath(id,state)}" alt="${ct(id,'name')}" onerror="this.outerHTML='<div style=&quot;font-size:54px&quot;>${C(id).emoji}</div>'">`;}
  function charFigure(id, cls='', label=''){const state=cls.includes('is-shadow')?'hidden':'full';return `<div class="charDisc ${cls}" style="--c:${C(id).color}">${img(id,'',state)}${label}</div>`;}
  function revealFigure(id,level){
    const safe=Math.max(0,Math.min(4,Number(level)||0));
    return `<div class="revealFigure reveal-${safe}" style="--c:${C(id).color};--reveal:${safe/4}">${img(id,'revealBase','hidden')}${img(id,'revealColor','full')}</div>`;
  }
  function hero(){return `<div class="hero">${GAME_DATA.stations.map(id=>charFigure(id,'is-shadow')).join('')}</div>`;}
  function setCSSFor(id){ if(!id) return; document.documentElement.style.setProperty('--accent', C(id).color);}
  function progress(s){return `<div class="progressGrid">${GAME_DATA.stations.map(id=>{const got=s.collected.includes(id);return `<div class="mini ${got?'collected':''}" style="--c:${C(id).color}">${img(id,'',got?'full':'hidden')}<div class="miniName">${got?ct(id,'name'):'???'}</div><small class="miniStatus">${got?ct(id,'role'):(getLang()==='fr'?'à découvrir':'עדיין נסתר')}</small></div>`;}).join('')}</div>`;}
  function nextStation(s){return s.route.find(id=>!s.collected.includes(id));}
  function currentIndex(s){const n=nextStation(s);return n?s.route.indexOf(n)+1:6;}
  function qset(id){return QUESTIONS[getLang()]?.[id] || QUESTIONS.he[id];}
  function currentQ(s,id){return qset(id)[s.currentQuestion||0];}
  function letter(i){
  if(getLang()==='fr'){
    return ['a','b','c','d'][i] || (i+1);
  }

  return ['א','ב','ג','ד'][i] || (i+1);
}

  function renderOpening(){screen(`
    <div class="openingScreen">
      <div class="langrow"><button class="btn secondary" data-lang="he">עברית</button><button class="btn secondary" data-lang="fr">Français</button></div>
      <div class="coverBand"><h1>${t('title')}</h1><div class="subtitle">${t('subtitle')}</div>${hero()}</div>
      <div class="coverFooter"><button class="btn" id="start">${t('start')}</button></div>
    </div>
  `); document.getElementById('start').onclick=()=>renderStory(); document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{createState(b.dataset.lang,''); renderOpening(); history.replaceState(null,'',location.pathname+'?lang='+b.dataset.lang);});}
  function renderStory(){screen(`<h2>${t('storyTitle')}</h2><div class="story">${t('story').map(x=>`<p>${x}</p>`).join('')}</div><button class="btn" id="n">${t('next')}</button>`); document.getElementById('n').onclick=renderRules;}
  function renderRules(){screen(`<h2>${t('rulesTitle')}</h2><ul class="rules">${t('rules').map(x=>`<li>${x}</li>`).join('')}</ul><button class="btn" id="n">${t('next')}</button>`); document.getElementById('n').onclick=renderName;}
  function renderName(){screen(`<h2>${t('nameTitle')}</h2><input class="nameInput" id="name" placeholder="${t('namePlaceholder')}" /><button class="btn" id="go">${t('begin')}</button>`); document.getElementById('go').onclick=()=>{const lang=getLang(); const name=document.getElementById('name').value.trim(); createState(lang,name); 
renderMap();
};
}

  function openSiteMap() {
  const isFrench = getLang() === 'fr';

  const title = isFrench
    ? 'Plan du jardin biblique'
    : 'מפת הגן התנ״כי';

  const closeText = isFrench
    ? 'Fermer'
    : 'סגירה';

  const overlay = document.createElement('div');
  overlay.className = 'mapOverlay';

  overlay.innerHTML = `
    <div
      class="mapDialog"
      role="dialog"
      aria-modal="true"
      aria-label="${title}"
    >
      <div class="mapDialogHeader">
        <h2>${title}</h2>

        <button
          class="mapClose"
          id="mapClose"
          type="button"
          aria-label="${closeText}"
        >
          ✕
        </button>
      </div>

      <div class="siteMapViewport">
        <img
          src="assets/images/yad_hashmona_map.webp"
          alt="${title}"
        >
      </div>

      <button
        class="btn secondary"
        id="mapCloseBottom"
        type="button"
      >
        ${closeText}
      </button>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.classList.add('mapOpen');

  function closeMap() {
    overlay.remove();
    document.body.classList.remove('mapOpen');
  }

  document.getElementById('mapClose').onclick = closeMap;
  document.getElementById('mapCloseBottom').onclick = closeMap;

overlay.onclick = event => {
  if (event.target === overlay) {
    closeMap();
  }
};
}

function renderMap() {const s=state(); if(!s){renderOpening();return;} setCSSFor(nextStation(s)); const n=nextStation(s); if(!n){renderEnd();return;} screen(`${top(t('map'))}<div class="pill">${t('creatures')} ${s.collected.length}/6 · ⭐ ${s.stars}</div>${progress(s)}<div class="card"><h2>${t('nextHideout')}</h2><p class="story" style="font-size:20px">${GAME_DATA.hints[getLang()][n]||GAME_DATA.hints.he[n]}</p><p class="small" style="text-align:center">${t('scanHint')}</p></div><button class="btn ghost" id="siteMapBtn">🗺️ ${getLang()==='fr'?'Ouvrir le plan':'פתחו מפה'}</button><button class="btn secondary" id="scanBtn">${getLang()==='fr'?'Scanner une station':'סרקו תחנה'}</button><div id="scanPanel"></div>${dev?devLinks():''}`); document.getElementById('siteMapBtn').onclick = openSiteMap;document.getElementById('scanBtn').onclick=()=>{const panel=document.getElementById('scanPanel'); if(dev){panel.innerHTML=`<div class="card"><b>קישורי תחנות (מצב פיתוח)</b><div class="stack">${GAME_DATA.stations.map(id=>`<a class="btn ghost" href="?station=${id}&dev=1">${id} - ${ct(id,'name')}</a>`).join('')}</div></div>`;} else {startScanner(panel);}}; if(dev) attachDev();}
  function devLinks(){return `<div class="card"><b>Developer mode</b><div class="stack">${GAME_DATA.stations.map(id=>`<button class="btn ghost devstation" data-id="${id}">${id} - ${ct(id,'name')}</button>`).join('')}</div><button class="btn secondary" id="reset">${t('reset')}</button></div>`;}
  function attachDev(){document.querySelectorAll('.devstation').forEach(b=>b.onclick=()=>renderStation(b.dataset.id)); document.getElementById('reset').onclick=reset;}

  function scanFallback(panel){panel.innerHTML=`<div class="card"><p class="story" style="font-size:18px">${getLang()==='fr'?'Allez à la station et scannez le code <span dir="ltr">QR</span> qui s’y trouve.':'גשו לתחנה וסרקו את קוד ה־<span dir="ltr">QR</span> שמופיע בה.'}</p></div>`;}
  function extractStationId(text) {
  text = (text || '').trim();

  try {
    const u = new URL(text, location.href);
    const s = u.searchParams.get('station');

    if (s) return s;
  } catch (e) {}

  const m = text.match(/(?:^|[?&])station=([^&\s]+)/i);

  return m ? decodeURIComponent(m[1]) : null;
}

function loadQrLib() {
  return new Promise((resolve, reject) => {
    if (window.Html5Qrcode) {
      resolve();
      return;
    }

    let s = document.querySelector('script[data-qr-lib]');

    if (!s) {
      s = document.createElement('script');
      s.src =
        'https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js';
      s.setAttribute('data-qr-lib', '1');
      document.head.appendChild(s);
    }

    s.addEventListener('load', () => resolve());
    s.addEventListener('error', () =>
      reject(new Error('qr-lib-load-failed'))
    );
  });
}

let activeScanner = null;

function stopScanner() {
  const qr = activeScanner;
  activeScanner = null;

  if (qr) {
    try {
      qr
        .stop()
        .then(() => qr.clear())
        .catch(() => {});
    } catch (e) {}
  }
}

function ensureSubmissionId(s) {
  if (!s.submissionId) {
    const hasRandomUUID =
      window.crypto &&
      typeof window.crypto.randomUUID === 'function';

    s.submissionId = hasRandomUUID
      ? window.crypto.randomUUID()
      : `sh-${Date.now()}-${Math.random()
          .toString(36)
          .slice(2, 10)}`;

    save(s);
  }

  return s.submissionId;
}

async function submitResult(s) {
  const elapsedSeconds = Math.floor(
    (now() - s.start) / 1000
  );

  const body = new URLSearchParams({
    journeyName: s.name || '',
    stars: String(s.stars || 0),
    bonuses: String(s.bonuses || 0),
    elapsedSeconds: String(elapsedSeconds),
    language: s.lang || getLang(),
    submissionId: ensureSubmissionId(s)
  });

  await fetch(RESULTS_URL, {
    method: 'POST',
    mode: 'no-cors',
    body
  });

  s.resultSubmitted = true;
  save(s);
}

function startScanner(panel) {
  const busy =
    getLang() === 'fr'
      ? 'Activation de la caméra...'
      : 'מפעיל מצלמה...';

  const cancel =
    getLang() === 'fr'
      ? 'Annuler'
      : 'ביטול';

  panel.innerHTML = `
    <div class="card">
      <div id="qr-reader" style="width:100%"></div>

      <p class="small" style="text-align:center">
        ${busy}
      </p>

      <button class="btn secondary" id="qr-cancel">
        ${cancel}
      </button>
    </div>
  `;

  const reader = document.getElementById('qr-reader');

  function bringScannerIntoView() {
    if (!reader) return;

    requestAnimationFrame(() => {
      reader.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

  bringScannerIntoView();

  document.getElementById('qr-cancel').onclick = () => {
    stopScanner();
    scanFallback(panel);
  };

  const secure =
    location.protocol === 'https:' ||
    location.hostname === 'localhost' ||
    location.hostname === '127.0.0.1';

  if (
    !secure ||
    !navigator.mediaDevices ||
    !navigator.mediaDevices.getUserMedia
  ) {
    scanFallback(panel);
    return;
  }

  loadQrLib()
    .then(() => {
      if (!window.Html5Qrcode) {
        scanFallback(panel);
        return;
      }

      const qr = new Html5Qrcode('qr-reader');
      activeScanner = qr;

      qr.start(
        { facingMode: 'environment' },
        {
          fps: 10,
          qrbox: 220
        },
        decodedText => {
          const id = extractStationId(decodedText);

          stopScanner();

          if (id && GAME_DATA.stations.includes(id)) {
            location.href =
              location.pathname + '?station=' + id;
          } else {
            const msg =
              getLang() === 'fr'
                ? 'Nous n’avons pas reconnu de station dans ce code. Réessayez.'
                : 'לא זיהינו תחנה בקוד שנסרק. נסו שוב.';

            const retry =
              getLang() === 'fr'
                ? 'Réessayer'
                : 'נסו שוב';

            panel.innerHTML = `
              <div class="card">
                <p class="feedback">
                  ${msg}
                </p>
              </div>

              <button class="btn secondary" id="qr-retry">
                ${retry}
              </button>
            `;

            document.getElementById('qr-retry').onclick = () => {
              startScanner(panel);
            };
          }
        },
        () => {}
      )
      .then(() => {
        bringScannerIntoView();
      })
      .catch(() => {
        activeScanner = null;
        scanFallback(panel);
      });
    })
    .catch(() => {
      scanFallback(panel);
    });
}

function handleStation() {
  const s = state();

  if (!s) {
    renderOpening();
    return;
  }

  if (!stationParam) {
    renderMap();
    return;
  }

  if (!GAME_DATA.stations.includes(stationParam)) {
    renderMap();
    return;
  }

  renderStation(stationParam);
}

function renderStation(id) {const s=state(); if(!s){renderOpening();return;} setCSSFor(id); const n=nextStation(s); if(s.collected.includes(id)){screen(`${top(ct(id,'place'))}<div class="creature card">${img(id)}<div class="creatureText"><h2>${ct(id,'name')} ${t('alreadyTitle')}</h2><p>${t('alreadyText')}</p></div></div><button class="btn" id="map">${t('backMap')}</button>`); document.getElementById('map').onclick=renderMap; return;}
    if (id !== n && !dev) {
  screen(`
    ${top(ct(id, 'place'))}

    <div class="creature card">
      ${img(id, '', 'hidden')}

      <div class="creatureText">
        <h2>${t('wrongStationTitle')}</h2>
        <p>${t('wrongStationText')}</p>
      </div>
    </div>

    <button class="btn" id="map">
      ${t('backMap')}
    </button>
  `);

  document.getElementById('map').onclick = renderMap;
  return;
}
    s.currentQuestion=0; s.stationStart=now(); save(s);
    screen(`${top(ct(id,'place'))}<div class="creature card creatureTextOnly"><div class="creatureText"><h2>${t('found')} ${ct(id,'name')}!</h2><p>${t('patient')}</p><p class="small">${ct(id,'role')} · ${ct(id,'contribution')}</p></div></div><div class="stack"><button class="btn" id="quiz">${t('answerQuestions')}</button><button class="btn secondary" id="wait">${t('wait')}</button></div>`);
    document.getElementById('quiz').onclick=()=>renderQuiz(id);
    document.getElementById('wait').onclick=()=>{document.getElementById('wait').outerHTML=`<div class="feedback">...<br>...<br>${t('waitResult')}</div>`;};
  }
  function renderQuiz(id, selectedIndex = null, result = null) {
  const s = state();
  setCSSFor(id);

  const questions = qset(id);
  const qi = s.currentQuestion || 0;
  const q = questions[qi];

  const hasResult = result !== null;
  const reveal = hasResult
    ? Math.min(qi + 1, questions.length)
    : qi;

  const pct = (reveal / questions.length) * 100;

  const answersToShow = hasResult
    ? q.answers
        .map((answerItem, index) => ({ answerItem, index }))
        .filter(item => item.index === selectedIndex)
    : q.answers.map((answerItem, index) => ({ answerItem, index }));

  const answersHTML = answersToShow
    .map(({ answerItem, index }) => {
      const resultClass =
        selectedIndex === index
          ? (answerItem.correct ? 'good' : 'bad')
          : '';

      return `
        <button
          class="answer ${resultClass}"
          data-i="${index}"
          ${hasResult ? 'disabled' : ''}
        >
          ${letter(index)}. ${answerItem.text}
        </button>
      `;
    })
    .join('');

  screen(`
    ${top(ct(id, 'place'))}

    <div class="quizCreatureWrap">
      ${revealFigure(id, reveal)}
      <b>${ct(id, 'name')}</b>
    </div>

    <div class="bar">
      <span style="width:${pct}%"></span>
    </div>

    <div class="question">${q.text}</div>

    <div class="answers">
      ${answersHTML}
    </div>

    <div id="fb">
      ${hasResult ? result : ''}
    </div>
  `);

  if (!hasResult) {
    document.querySelectorAll('.answer').forEach(button => {
      button.onclick = () => answer(id, Number(button.dataset.i));
    });
  }

  if (hasResult) {
    requestAnimationFrame(() => {
      const feedback = document.getElementById('fb');

      if (!feedback) return;

      const rect = feedback.getBoundingClientRect();
      const isOutsideViewport =
        rect.top < 0 || rect.bottom > window.innerHeight;

      if (isOutsideViewport) {
        feedback.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      }
    });
  }
}
  function answer(id,i){const s=state(); const q=currentQ(s,id); const a=q.answers[i]; if(a.correct){s.stars+=1; save(s); const html=`<div class="explain"><b>✅ ${t('correct')}</b><br>${q.explanation||''}</div><button class="btn" id="cont">${t('continue')}</button>`; renderQuiz(id,i,html); document.getElementById('cont').onclick=()=>{s.currentQuestion=(s.currentQuestion||0)+1; save(s); if(s.currentQuestion>=qset(id).length){completeStation(id);} else renderQuiz(id);}; }
    else {
  const notConvinced =
    getLang() === 'fr'
      ? `${ct(id, 'name')} n’est pas encore convaincu.`
      : `${ct(id, 'name')} עוד לא השתכנע.`;

  const html = `
    <div class="feedback">
      <b>${notConvinced}</b>
      <br>
      ${a.feedback}
      <br><br>
      ${getLang() === 'he' ? 'נסו שוב.' : 'Essayez encore.'}
    </div>

    <button class="btn secondary" id="try">
      ${t('tryAgain')}
    </button>
  `;

  renderQuiz(id, i, html);

  document.getElementById('try').onclick = () => renderQuiz(id);
}
}

function maybeBonus(s){const elapsed=Math.floor((now()-s.stationStart)/1000); const target=s.bonusTimes.find(x=>!s.usedBonuses.includes(x)); if(target && elapsed===target){s.usedBonuses.push(target); s.bonuses+=1; s.stars+=1; save(s); return true;} return false;}
  function completeStation(id){const s=state(); if(!s.collected.includes(id)) s.collected.push(id); s.currentQuestion=0; s.stars+=2; const bonus=maybeBonus(s); save(s); setCSSFor(id); screen(`${top(ct(id,'place'))}<div class="creature card">${revealFigure(id,4)}<div class="creatureText"><h2>${ct(id,'name')} ${t('captured')}</h2><p>${ct(id,'role')}</p><p><b>${ct(id,'contribution')}</b></p></div></div>${bonus?`<div class="explain"><b>${t('bonusTitle')}</b><br>${t('bonusText')}</div>`:''}<button class="btn" id="map">${s.collected.length===6?t('continue'):t('backMap')}</button>`); document.getElementById('map').onclick=()=>{ if(s.collected.length===6) renderEnd(); else renderMap();};}
  function renderEnd() {
  const s = state();

  const gathered = GAME_DATA.stations
    .map((id, i) => img(id, `finalChar final-${i}`))
    .join('');

  const isFrench = getLang() === 'fr';

  const sendingText = isFrench
    ? 'Envoi du résultat...'
    : 'שולח את התוצאה...';

  const sentText = isFrench
    ? '✅ Le résultat a été envoyé.'
    : '✅ התוצאה נשלחה.';

  const failedText = isFrench
    ? 'La connexion a échoué. Vous pouvez réessayer.'
    : 'השליחה נכשלה. אפשר לנסות שוב.';

  const retryText = isFrench
    ? 'Réessayer l’envoi'
    : 'נסו לשלוח שוב';

  screen(`
    ${top('🏆')}

    <h2>${t('endTitle')}</h2>

    <div class="finalGather">
      ${gathered}
    </div>

    <div class="stats">
      <div class="stat">
        <span>${t('time')}</span>
        <b>${fmt((now() - s.start) / 1000)}</b>
      </div>

      <div class="stat">
        <span>${t('stars')}</span>
        <b>⭐ ${s.stars}</b>
      </div>

      <div class="stat">
        <span>${t('bonuses')}</span>
        <b>${s.bonuses}</b>
      </div>
    </div>

    <div class="finalLine">
      ${t('endLines').map(x => `<p>${x}</p>`).join('')}
      <p>📸 ${t('screenshot')}</p>
    </div>

    <div
      id="resultSendStatus"
      class="resultSendStatus"
      aria-live="polite"
    >
      ${s.resultSubmitted ? sentText : sendingText}
    </div>

    <button
      class="btn secondary"
      id="retryResult"
      ${s.resultSubmitted ? 'hidden' : ''}
    >
      ${retryText}
    </button>

    <button class="btn secondary" id="reset">
      ${t('reset')}
    </button>

    <div class="footer">
      ${t('thanks')}
    </div>
  `);

  const status = document.getElementById('resultSendStatus');
  const retryButton = document.getElementById('retryResult');

  function sendCurrentResult() {
    status.textContent = sendingText;
    retryButton.hidden = true;

    submitResult(s)
      .then(() => {
        status.textContent = sentText;
        retryButton.hidden = true;
      })
      .catch(() => {
        status.textContent = failedText;
        retryButton.hidden = false;
      });
  }

  retryButton.onclick = sendCurrentResult;
  document.getElementById('reset').onclick = reset;

  if (!s.resultSubmitted) {
    sendCurrentResult();
  }
}
  function tick(){const el=document.querySelector('.timer');const s=state(); if(el&&s) el.textContent=fmt((now()-s.start)/1000);}
  setInterval(tick,1000);
  if(stationParam) handleStation(); else {const s=state(); if(s&&s.name) renderMap(); else renderOpening();}
})();
