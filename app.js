(function () {
  'use strict';
  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));

  // Godziny: dzień tygodnia (0 = niedziela) -> [otwarcie, zamknięcie] w minutach
  const HOURS = { 0: null, 1: [480, 1200], 2: [480, 1200], 3: [480, 1200], 4: [480, 1200], 5: [480, 1200], 6: [540, 840] };
  const DAYS = ['niedzielę', 'poniedziałek', 'wtorek', 'środę', 'czwartek', 'piątek', 'sobotę'];
  const hm = m => `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}`;

  // --- status
  function updateStatus() {
    const now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
    const t = HOURS[d], el = $('#status'), txt = $('#statusText');
    const open = !!t && m >= t[0] && m < t[1];
    el.classList.toggle('is-open', open);
    if (open) txt.textContent = `Dziś otwarte do ${hm(t[1])}`;
    else if (t && m < t[0]) txt.textContent = `Dziś otwieramy o ${hm(t[0])}`;
    else {
      let n = 1; while (!HOURS[(d + n) % 7]) n++;
      const nd = (d + n) % 7;
      txt.textContent = `Otwieramy ${n === 1 ? 'jutro' : 'w ' + DAYS[nd]} o ${hm(HOURS[nd][0])}`;
    }
    const today = d === 0 ? 0 : d === 6 ? 6 : 1;
    $$('#hours li').forEach(li => li.classList.toggle('is-today', Number(li.dataset.d) === today));
  }
  updateStatus();
  setInterval(updateStatus, 60000);

  // --- header
  const header = $('#header');
  const onScroll = () => header.classList.toggle('is-solid', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- nawigacja mobilna
  const burger = $('#burger'), nav = $('#nav');
  function setNav(open) {
    nav.classList.toggle('is-open', open);
    header.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
  }
  burger.addEventListener('click', () => setNav(!nav.classList.contains('is-open')));
  nav.addEventListener('click', e => { if (e.target.closest('a')) setNav(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setNav(false); });
  window.addEventListener('resize', () => { if (window.innerWidth > 1000) setNav(false); });

  // --- zabiegi
  const U = id => `https://images.unsplash.com/${id}?w=1000&q=80`;
  const ZAB = [
    { k: 'licowki', n: 'Licówki porcelanowe', from: 'od 2 400 zł / ząb', img: 'photo-1606811841689-23dfddce3e95',
      d: 'Cienkie płatki porcelany przyklejane do przedniej powierzchni zębów. Zmieniają kolor, kształt i długość zębów, a przy tym wyglądają jak naturalne szkliwo — także w świetle dziennym.',
      time: '3–4 tygodnie', visits: '4 wizyty', price: 'od 2 400 zł za ząb' },
    { k: 'wybielanie', n: 'Wybielanie', from: '1 200 zł', img: 'photo-1607613009820-a29f7bb81c04',
      d: 'Wybielanie gabinetowe z lampą i ochroną dziąseł, uzupełnione nakładkami do domu. Zęby jaśniejsze nawet o kilka odcieni po jednej wizycie.',
      time: '1 dzień + 2 tyg. w domu', visits: '1 wizyta', price: '1 200 zł' },
    { k: 'implanty', n: 'Implanty', from: 'od 5 900 zł', img: 'photo-1588776814546-1ffcf47267a5',
      d: 'Tytanowy implant zastępuje korzeń zęba, a korona z cyrkonu — widoczną część. Planujemy na tomografii 3D, często z tymczasową koroną już w dniu zabiegu.',
      time: '3–4 miesiące', visits: '3–4 wizyty', price: 'od 5 900 zł z koroną' },
    { k: 'nakladki', n: 'Ortodoncja nakładkowa', from: 'od 9 800 zł', img: 'photo-1598256989800-fe5f95da9787',
      d: 'Przezroczyste nakładki zamiast aparatu z zamkami. Wymieniasz je co tydzień, a postęp kontrolujemy co 6–8 tygodni. Plan całego leczenia widzisz w animacji 3D przed startem.',
      time: '6–18 miesięcy', visits: 'kontrola co 6–8 tyg.', price: 'od 9 800 zł' },
    { k: 'bonding', n: 'Bonding', from: 'od 800 zł / ząb', img: 'photo-1629909615184-74f495363b67',
      d: 'Szybka korekta kształtu i drobnych ubytków materiałem kompozytowym, bez szlifowania zębów. Dobre rozwiązanie na ukruszenia i szpary między zębami.',
      time: '1 dzień', visits: '1 wizyta', price: 'od 800 zł za ząb' },
    { k: 'higienizacja', n: 'Higienizacja', from: '380 zł', img: 'photo-1629909613654-28e377c37b09',
      d: 'Skaling, piaskowanie, polerowanie i fluoryzacja. Usuwa kamień i przebarwienia, a przy okazji sprawdzamy stan dziąseł i zębów.',
      time: '60 minut', visits: '1 wizyta', price: '380 zł' },
  ];
  const list = $('#zabList'), img = $('#zabImg');
  list.innerHTML = ZAB.map((z, i) => `<button type="button" role="tab" class="zab__item${i === 0 ? ' is-on' : ''}" aria-selected="${i === 0}" aria-controls="zabPanel" data-i="${i}">${z.n}<small>${z.from}</small></button>`).join('');
  function showZab(i) {
    const z = ZAB[i];
    $$('.zab__item').forEach((b, j) => { b.classList.toggle('is-on', j === i); b.setAttribute('aria-selected', String(j === i)); });
    $('#zabTitle').textContent = z.n;
    $('#zabDesc').textContent = z.d;
    $('#zabTime').textContent = z.time;
    $('#zabVisits').textContent = z.visits;
    $('#zabPrice').textContent = z.price;
    $('#zabBook').dataset.k = z.k;
    const src = U(z.img);
    if (img.getAttribute('src') !== src) {
      img.classList.add('is-fading');
      const pre = new Image();
      pre.onload = pre.onerror = () => { img.src = src; img.alt = z.n; img.classList.remove('is-fading'); };
      pre.src = src;
    }
  }
  list.addEventListener('click', e => { const b = e.target.closest('.zab__item'); if (b) showZab(Number(b.dataset.i)); });
  list.addEventListener('keydown', e => {
    if (!['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'].includes(e.key)) return;
    e.preventDefault();
    const btns = $$('.zab__item'), cur = btns.indexOf(document.activeElement);
    const next = (cur + (e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : -1) + btns.length) % btns.length;
    btns[next].focus(); showZab(next);
  });
  showZab(0);

  // Panel przyjmuje wysokość najdłuższego zabiegu — przełączanie nie przesuwa strony i nic nie jest ucinane
  const panel = $('#zabPanel');
  function sizePanel() {
    const cur = $$('.zab__item').findIndex(b => b.classList.contains('is-on'));
    panel.style.minHeight = '';
    let max = 0;
    ZAB.forEach((z, i) => {
      $('#zabTitle').textContent = z.n; $('#zabDesc').textContent = z.d;
      $('#zabTime').textContent = z.time; $('#zabVisits').textContent = z.visits; $('#zabPrice').textContent = z.price;
      max = Math.max(max, panel.offsetHeight);
    });
    panel.style.minHeight = max + 'px';
    showZab(cur < 0 ? 0 : cur);
  }
  let rT;
  window.addEventListener('resize', () => { clearTimeout(rT); rT = setTimeout(sizePanel, 150); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(sizePanel);
  window.addEventListener('load', sizePanel);
  sizePanel();

  // --- formularz
  const sel = $('#zab');
  sel.innerHTML = ZAB.map(z => `<option value="${z.k}">${z.n}</option>`).join('') + '<option value="inne">Nie wiem jeszcze — chcę porozmawiać</option>';
  $('#zabBook').addEventListener('click', e => { sel.value = e.currentTarget.dataset.k; });

  const form = $('#form');
  function setErr(id, msg) {
    $(`#${id}-err`).textContent = msg;
    const el = document.getElementById(id);
    const f = el.closest('.field');
    if (f) f.classList.toggle('has-err', !!msg);
    if (msg) el.setAttribute('aria-invalid', 'true'); else el.removeAttribute('aria-invalid');
  }
  ['name', 'phone'].forEach(id => document.getElementById(id).addEventListener('input', () => setErr(id, '')));
  $('#consent').addEventListener('change', () => setErr('consent', ''));

  form.addEventListener('submit', e => {
    e.preventDefault();
    const errs = [];
    if (form.name.value.trim().length < 3) errs.push(['name', 'Podaj imię i nazwisko.']);
    if (form.phone.value.replace(/\D/g, '').length < 9) errs.push(['phone', 'Podaj numer telefonu (9 cyfr) — oddzwonimy z terminem.']);
    if (!$('#consent').checked) errs.push(['consent', 'Potrzebujemy zgody na kontakt, żeby zaproponować termin.']);
    ['name', 'phone', 'consent'].forEach(id => setErr(id, ''));
    if (errs.length) {
      errs.forEach(([id, m]) => setErr(id, m));
      const first = document.getElementById(errs[0][0]);
      first.focus({ preventScroll: true });
      first.scrollIntoView({ block: 'center', behavior: 'smooth' });
      return;
    }
    const btn = $('#submit');
    btn.disabled = true; btn.textContent = 'Wysyłam…';
    setTimeout(() => {
      const z = sel.options[sel.selectedIndex].text;
      const pora = form.querySelector('input[name="pora"]:checked').nextElementSibling.firstChild.textContent.trim().toLowerCase();
      $('#doneText').textContent = `Oddzwonimy na numer ${form.phone.value.trim()} w ciągu 2 godzin roboczych i zaproponujemy termin (${pora}). Temat: ${z.toLowerCase()}.`;
      $('#formBody').hidden = true;
      const done = $('#done'); done.hidden = false; done.focus();
      btn.disabled = false; btn.textContent = 'Poproś o termin';
    }, 800);
  });
  $('#again').addEventListener('click', () => {
    form.reset();
    $('#done').hidden = true; $('#formBody').hidden = false;
    sel.focus();
  });

  // --- pływający przycisk
  const fab = $('#fab');
  if ('IntersectionObserver' in window) {
    const seen = { hero: true, form: false };
    const sync = () => fab.classList.toggle('is-hidden', seen.hero || seen.form);
    new IntersectionObserver(([en]) => { seen.hero = en.isIntersecting; sync(); }, { threshold: 0.2 }).observe($('.hero'));
    new IntersectionObserver(([en]) => { seen.form = en.isIntersecting; sync(); }, { threshold: 0 }).observe($('#wizyta'));
    sync();
  }
})();
