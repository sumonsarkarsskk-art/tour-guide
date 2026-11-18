/* TourGuide.com – demo (HTML + CSS + vanilla JS) */
'use strict';

/* ---------- Data ---------- */
const TOURS = [
  {
    id: 1, title: 'Fushimi Inari & Gion Food Walk', place: 'Kyoto',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    colors: ['#d7432f', '#f08a4b'], price: 9800, duration: '5 hours', start: '09:00',
    rating: 4.9, reviews: 312, interests: ['Culture', 'Food'], guide: 'Haruka', max: 8,
    desc: 'Walk through the thousand red torii gates early in the morning, then taste Kyoto classics in the old Gion district with a local who grew up there.',
    course: [['09:00', 'Meet at Inari Station'], ['09:15', 'Fushimi Inari Shrine & torii hike'], ['11:30', 'Tea and wagashi break'], ['12:30', 'Nishiki Market tasting'], ['14:00', 'Gion backstreets & tour ends']],
    includes: ['English-speaking local guide', 'Food tastings (6 stops)', 'Green tea experience', 'Small group (max 8)']
  },
  {
    id: 2, title: 'Tsukiji Market Breakfast & Sushi', place: 'Tokyo',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1200&q=80',
    colors: ['#1f2a44', '#4a6fa5'], price: 8500, duration: '3.5 hours', start: '08:00',
    rating: 4.8, reviews: 254, interests: ['Food'], guide: 'Kenji', max: 6,
    desc: 'Eat your way through the outer market: tamagoyaki, fresh seafood bowls and a hands-on sushi lesson with a retired market chef.',
    course: [['08:00', 'Meet at Tsukiji Station'], ['08:20', 'Outer market street-food tour'], ['10:00', 'Sushi-making lesson'], ['11:15', 'Tea & wrap-up']],
    includes: ['Local guide', 'All tastings', 'Sushi lesson', 'Recipe card']
  },
  {
    id: 3, title: 'Dotonbori Night Street Food', place: 'Osaka',
    image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1200&q=80',
    colors: ['#7a1f5c', '#e0457b'], price: 7200, duration: '3 hours', start: '18:00',
    rating: 4.7, reviews: 421, interests: ['Food'], guide: 'Mika', max: 10,
    desc: 'Takoyaki, okonomiyaki, kushikatsu and more under the neon lights. Your guide knows which stalls the locals actually queue for.',
    course: [['18:00', 'Meet at Ebisu Bridge'], ['18:15', 'Takoyaki & kushikatsu'], ['19:15', 'Okonomiyaki dinner'], ['20:15', 'Dessert & night photos']],
    includes: ['Local guide', '8 food tastings', 'One drink', 'Photo spots']
  },
  {
    id: 4, title: 'Nara Deer Park & Ancient Temples', place: 'Nara',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200&q=80',
    colors: ['#2f8f5b', '#9ad17a'], price: 6500, duration: '4 hours', start: '10:00',
    rating: 4.8, reviews: 198, interests: ['History', 'Nature'], guide: 'Taro', max: 8,
    desc: 'Meet the friendly deer, see the giant Buddha at Todai-ji and stroll through quiet moss gardens off the tourist path.',
    course: [['10:00', 'Meet at Kintetsu Nara Station'], ['10:20', 'Nara Park & deer'], ['11:30', 'Todai-ji Temple'], ['13:00', 'Kasuga Taisha forest path'], ['14:00', 'Local lunch (optional)']],
    includes: ['Local guide', 'Temple entrance info', 'Deer crackers', 'Walking map']
  },
  {
    id: 5, title: 'Hakone Onsen & Mt. Fuji Views', place: 'Hakone',
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1200&q=80',
    colors: ['#3a7bd5', '#8fd3f4'], price: 15800, duration: 'Full day', start: '08:30',
    rating: 4.9, reviews: 143, interests: ['Nature', 'Relax'], guide: 'Sayuri', max: 6,
    desc: 'A relaxed day with lake cruise, ropeway above volcanic valleys and a soak in a traditional hot-spring ryokan, with views of Mt. Fuji on clear days.',
    course: [['08:30', 'Meet at Hakone-Yumoto'], ['09:30', 'Owakudani volcanic valley'], ['11:30', 'Lake Ashi cruise'], ['13:00', 'Kaiseki-style lunch'], ['15:00', 'Day-use onsen'], ['17:00', 'Tour ends']],
    includes: ['Local guide', 'Ropeway & cruise tickets', 'Lunch', 'Onsen entry & towel']
  },
  {
    id: 6, title: 'Kanazawa Gardens & Seafood', place: 'Kanazawa',
    image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1200&q=80',
    colors: ['#c06c84', '#f8b195'], price: 11200, duration: '6 hours', start: '09:30',
    rating: 4.8, reviews: 87, interests: ['Culture', 'Food', 'Relax'], guide: 'Aya', max: 6,
    desc: 'Kenroku-en, one of Japan\'s three great gardens, then geisha district tea houses and the freshest seafood from the Sea of Japan.',
    course: [['09:30', 'Meet at Kanazawa Station'], ['10:00', 'Omicho Market'], ['11:30', 'Kenroku-en Garden'], ['13:00', 'Seafood donburi lunch'], ['14:30', 'Higashi Chaya district'], ['15:30', 'Gold-leaf dessert']],
    includes: ['Local guide', 'Seafood lunch', 'Garden tickets', 'Gold-leaf dessert']
  },
  {
    id: 7, title: 'Miyajima Island & Oyster Feast', place: 'Hiroshima',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&q=80',
    colors: ['#0f766e', '#5eead4'], price: 12400, duration: '7 hours', start: '09:00',
    rating: 4.9, reviews: 176, interests: ['History', 'Food', 'Nature'], guide: 'Daichi', max: 8,
    desc: 'Visit the Peace Memorial in the morning, take the ferry to the floating torii of Itsukushima and finish with grilled oysters on the island.',
    course: [['09:00', 'Meet at Hiroshima Station'], ['09:30', 'Peace Memorial Park'], ['11:30', 'Ferry to Miyajima'], ['12:15', 'Itsukushima Shrine'], ['13:30', 'Grilled oyster lunch'], ['15:00', 'Mt. Misen ropeway (optional)']],
    includes: ['Local guide', 'Ferry tickets', 'Oyster lunch', 'Small group (max 8)']
  },
  {
    id: 8, title: 'Sapporo Ramen & Beer Trail', place: 'Sapporo',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
    colors: ['#334155', '#94a3b8'], price: 5900, duration: '3 hours', start: '17:30',
    rating: 4.6, reviews: 119, interests: ['Food'], guide: 'Ryo', max: 8,
    desc: 'Three ramen styles in three tiny shops, plus a stop at a craft-beer bar. Miso, shio and shoyu — your guide explains it all.',
    course: [['17:30', 'Meet at Susukino Station'], ['17:45', 'Miso ramen alley'], ['18:45', 'Shio ramen shop'], ['19:30', 'Craft beer & shoyu mini bowl']],
    includes: ['Local guide', '3 mini ramen bowls', 'One beer or soft drink']
  },
  {
    id: 9, title: 'Asakusa Temples & Tea Ceremony', place: 'Tokyo',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    colors: ['#b45309', '#fbbf24'], price: 7800, duration: '4 hours', start: '13:00',
    rating: 4.7, reviews: 230, interests: ['Culture', 'History', 'Relax'], guide: 'Emi', max: 6,
    desc: 'Explore Senso-ji and Nakamise, then try a real matcha tea ceremony in a quiet house hidden behind the crowds.',
    course: [['13:00', 'Meet at Kaminarimon Gate'], ['13:20', 'Senso-ji Temple'], ['14:30', 'Nakamise street snacks'], ['15:30', 'Tea ceremony'], ['17:00', 'Tour ends']],
    includes: ['Local guide', 'Tea ceremony', 'Snack tastings']
  }
];

const SPOTS = [
  { place: 'Kyoto', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80', colors: ['#d7432f', '#f08a4b'], note: 'Shrines & old streets' },
  { place: 'Tokyo', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80', colors: ['#1f2a44', '#4a6fa5'], note: 'Food & culture' },
  { place: 'Hakone', image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=900&q=80', colors: ['#3a7bd5', '#8fd3f4'], note: 'Hot springs & Fuji' },
  { place: 'Osaka', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=900&q=80', colors: ['#7a1f5c', '#e0457b'], note: 'Street-food capital' }
];

const INTERESTS = ['Food', 'Culture', 'History', 'Nature', 'Relax'];
const PLACES = [...new Set(TOURS.map(t => t.place))].sort();
const MAX_PRICE = Math.max(...TOURS.map(t => t.price));
const LANGS = ['English', '中文', '한국어', 'Español', 'Français', 'Deutsch'];

/* ---------- Helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const yen = n => '¥' + n.toLocaleString('en-US');
const gradient = c => `background: linear-gradient(135deg, ${c[0]}, ${c[1]})`;
const esc = s => String(s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
const todayStr = () => { const d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); return d.toISOString().slice(0, 10); };
const fmtDate = s => new Date(s + 'T00:00').toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
const findTour = id => TOURS.find(t => t.id === Number(id));

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ---------- Bookings (localStorage) ---------- */
const Store = {
  async load() {
    try {
      const response = await fetch('/api/bookings');
      if (!response.ok) throw new Error('Could not load bookings');
      const list = await response.json();
      this._mem = list;
      return list;
    } catch {
      return this._mem ?? [];
    }
  },
  save(list) { this._mem = list; },
  _mem: null,
  all() { return Array.isArray(this._mem) ? this._mem : []; },
  async add(b) {
    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(b)
    });
    if (!response.ok) throw new Error('Could not create booking');
    const saved = await response.json();
    this.save([...(await this.load()), saved]);
    return saved;
  },
  async remove(id) {
    const response = await fetch(`/api/bookings/${encodeURIComponent(id)}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Could not cancel booking');
    await this.load();
  }
};
async function updateBadge() {
  await Store.load();
  const n = Store.all().length, el = $('#bookingCount');
  el.textContent = n; el.hidden = n === 0;
}

/* ---------- Components ---------- */
function stars(t) { return `${t.rating.toFixed(1)} <span class="muted">(${t.reviews} reviews)</span>`; }

function tourCard(t) {
  return `
  <article class="card">
    <a class="visual" href="#/tour/${t.id}" style="background-image:url('${esc(t.image)}')" aria-label="${esc(t.title)}">
      <span class="place-tag">${esc(t.place)}</span>
    </a>
    <div class="card-body">
      <div class="chips">${t.interests.map(i => `<span class="chip">${i}</span>`).join('')}</div>
      <h3><a href="#/tour/${t.id}">${esc(t.title)}</a></h3>
      <div class="meta"><span>${t.duration}</span><span>${stars(t)}</span></div>
      <div class="card-foot">
        <span class="price">${yen(t.price)} <small>/ person</small></span>
        <a class="btn small" href="#/tour/${t.id}">View details</a>
      </div>
    </div>
  </article>`;
}

/* ---------- Search state ---------- */
const filters = { q: '', place: '', interests: [], maxPrice: MAX_PRICE, sort: 'popular' };

function applyFilters() {
  const q = filters.q.trim().toLowerCase();
  let list = TOURS.filter(t =>
    (!q || (t.title + ' ' + t.place + ' ' + t.desc + ' ' + t.interests.join(' ')).toLowerCase().includes(q)) &&
    (!filters.place || t.place === filters.place) &&
    t.price <= filters.maxPrice &&
    filters.interests.every(i => t.interests.includes(i))
  );
  const sorters = {
    popular: (a, b) => b.reviews - a.reviews,
    rating: (a, b) => b.rating - a.rating,
    low: (a, b) => a.price - b.price,
    high: (a, b) => b.price - a.price
  };
  return list.sort(sorters[filters.sort]);
}

/* ---------- Views ---------- */
function homeView() {
  const featured = [...TOURS].sort((a, b) => b.rating - a.rating || b.reviews - a.reviews).slice(0, 6);
  return `
  <section class="hero">
    <div class="container">
      <h1>Discover Japan with a local guide</h1>
      <p>Beautiful hidden places and delicious food, guided by people who live there. Pick a tour, choose your date, and book in a minute.</p>
      <form class="search-box" id="heroSearch">
        <div class="field"><label for="hPlace">Where</label>
          <select id="hPlace"><option value="">Anywhere in Japan</option>${PLACES.map(p => `<option>${p}</option>`).join('')}</select></div>
        <div class="field"><label for="hInterest">Interest</label>
          <select id="hInterest"><option value="">Any interest</option>${INTERESTS.map(p => `<option>${p}</option>`).join('')}</select></div>
        <div class="field"><label for="hPrice">Budget (per person)</label>
          <select id="hPrice"><option value="${MAX_PRICE}">Any price</option><option value="8000">Up to ¥8,000</option><option value="12000">Up to ¥12,000</option></select></div>
        <button class="btn" type="submit">Search tours</button>
      </form>
    </div>
  </section>

  <div class="container">
    <section class="block">
      <div class="section-head"><h2>Recommended destinations</h2><a class="link" href="#/tours">See all tours →</a></div>
      <div class="spots">
        ${SPOTS.map(s => `
          <a class="spot" href="#/tours" data-place="${s.place}" style="background-image:url('${esc(s.image)}')">
            <h3>${s.place}</h3><small>${s.note} · ${TOURS.filter(t => t.place === s.place).length} tour(s)</small>
          </a>`).join('')}
      </div>
    </section>

    <section class="block">
      <div class="section-head"><h2>Top-rated tours</h2><a class="link" href="#/tours">Browse everything →</a></div>
      <div class="grid">${featured.map(tourCard).join('')}</div>
    </section>

    <section class="block">
      <div class="section-head"><h2>How it works</h2></div>
      <div class="steps">
        <div class="step"><div class="num">1</div><h3>Find your tour</h3><p class="muted">Search by place, price and interest to find tours that match your trip.</p></div>
        <div class="step"><div class="num">2</div><h3>Check the details</h3><p class="muted">See the full course, timing, what's included and the price up front.</p></div>
        <div class="step"><div class="num">3</div><h3>Pick a date & book</h3><p class="muted">Choose your day, enter your details, and your local guide is reserved.</p></div>
      </div>
    </section>
  </div>`;
}

function toursView() {
  return `
  <div class="container">
    <div class="page-title"><h1>Find a tour</h1><p class="muted">Search by place, price and what you love.</p></div>
    <div class="search-layout">
      <aside class="filters" aria-label="Filters">
        <div class="field"><label for="fQ">Keyword</label><input id="fQ" type="search" placeholder="e.g. sushi, temple" value="${esc(filters.q)}"></div>
        <div class="field"><label for="fPlace">Place</label>
          <select id="fPlace"><option value="">All places</option>${PLACES.map(p => `<option ${p === filters.place ? 'selected' : ''}>${p}</option>`).join('')}</select></div>
        <div class="field"><label for="fPrice">Max price: <strong id="fPriceOut">${yen(filters.maxPrice)}</strong></label>
          <input id="fPrice" type="range" min="4000" max="${MAX_PRICE}" step="100" value="${filters.maxPrice}"></div>
        <div class="field"><label>Interests</label>
          <div class="chip-toggle" id="fInterests">${INTERESTS.map(i => `<button type="button" data-i="${i}" class="${filters.interests.includes(i) ? 'on' : ''}" aria-pressed="${filters.interests.includes(i)}">${i}</button>`).join('')}</div></div>
        <button class="btn ghost small block" id="fReset" type="button">Reset filters</button>
      </aside>
      <section aria-live="polite">
        <div class="result-bar">
          <strong id="resCount"></strong>
          <label class="muted" style="margin:0">Sort by
            <select id="fSort" style="margin-left:6px">
              ${[['popular', 'Most popular'], ['rating', 'Top rated'], ['low', 'Price: low to high'], ['high', 'Price: high to low']].map(([v, l]) => `<option value="${v}" ${filters.sort === v ? 'selected' : ''}>${l}</option>`).join('')}
            </select></label>
        </div>
        <div id="results" class="grid"></div>
      </section>
    </div>
  </div>`;
}

function renderResults() {
  const list = applyFilters();
  $('#resCount').textContent = `${list.length} tour${list.length === 1 ? '' : 's'} found`;
  $('#results').innerHTML = list.length
    ? list.map(tourCard).join('')
    : `<div class="empty" style="grid-column:1/-1"><h3>No tours match your search</h3><p class="muted">Try a higher budget or fewer interests.</p></div>`;
}

function bindToursView() {
  renderResults();
  $('#fQ').addEventListener('input', e => { filters.q = e.target.value; renderResults(); });
  $('#fPlace').addEventListener('change', e => { filters.place = e.target.value; renderResults(); });
  $('#fPrice').addEventListener('input', e => { filters.maxPrice = Number(e.target.value); $('#fPriceOut').textContent = yen(filters.maxPrice); renderResults(); });
  $('#fSort').addEventListener('change', e => { filters.sort = e.target.value; renderResults(); });
  $('#fInterests').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    const i = b.dataset.i;
    filters.interests = filters.interests.includes(i) ? filters.interests.filter(x => x !== i) : [...filters.interests, i];
    b.classList.toggle('on'); b.setAttribute('aria-pressed', b.classList.contains('on'));
    renderResults();
  });
  $('#fReset').addEventListener('click', () => {
    Object.assign(filters, { q: '', place: '', interests: [], maxPrice: MAX_PRICE, sort: 'popular' });
    render();
  });
}

function detailView(t) {
  return `
  <div class="container">
    <div class="crumbs"><a href="#/">Home</a> › <a href="#/tours">Tours</a> › ${esc(t.title)}</div>
    <div class="detail-hero" style="background-image:url('${esc(t.image)}')"><span class="rating">${stars(t)}</span></div>
    <div class="detail-layout">
      <div class="detail-main">
        <div class="chips" style="margin-top:6px">${t.interests.map(i => `<span class="chip">${i}</span>`).join('')}</div>
        <h1>${esc(t.title)}</h1>
        <p class="muted">${t.place}, Japan</p>
        <p>${esc(t.desc)}</p>
        <div class="facts">
          <div class="fact"><small>Duration</small><strong>${t.duration}</strong></div>
          <div class="fact"><small>Start time</small><strong>${t.start}</strong></div>
          <div class="fact"><small>Price</small><strong>${yen(t.price)} / person</strong></div>
          <div class="fact"><small>Group size</small><strong>Max ${t.max}</strong></div>
        </div>
        <h2>Tour course</h2>
        <ol class="timeline">${t.course.map(([time, what]) => `<li><time>${time}</time>${esc(what)}</li>`).join('')}</ol>
        <h2>What's included</h2>
        <ul class="includes">${t.includes.map(i => `<li>${esc(i)}</li>`).join('')}</ul>
        <h2>Your guide</h2>
        <div class="guide"><div class="avatar" aria-hidden="true">${esc(t.guide.charAt(0))}</div>
          <div><strong>${t.guide}</strong><br><span class="muted">Local resident of ${t.place} · speaks English & Japanese</span></div></div>
      </div>

      <aside class="booking">
        <h2>Reserve this tour</h2>
        <form id="bookForm" novalidate>
          <div class="field"><label for="bDate">Tour date</label>
            <input id="bDate" type="date" min="${todayStr()}" required><div class="error" data-err="date"></div></div>
          <div class="row2">
            <div class="field"><label for="bGuests">Guests</label>
              <select id="bGuests">${Array.from({ length: t.max }, (_, i) => `<option>${i + 1}</option>`).join('')}</select></div>
            <div class="field"><label for="bLang">Language</label>
              <select id="bLang">${LANGS.map(l => `<option>${l}</option>`).join('')}</select></div>
          </div>
          <div class="field"><label for="bName">Full name</label><input id="bName" autocomplete="name" required><div class="error" data-err="name"></div></div>
          <div class="field"><label for="bEmail">Email</label><input id="bEmail" type="email" autocomplete="email" required><div class="error" data-err="email"></div></div>
          <div class="field"><label for="bNote">Requests (allergies, etc.)</label><textarea id="bNote" rows="2"></textarea></div>
          <div class="total"><span>Total</span><strong id="bTotal">${yen(t.price)}</strong></div>
          <button class="btn block" type="submit">Book now</button>
          <p class="muted" style="font-size:.8rem;text-align:center;margin:10px 0 0">Demo only – no payment is taken.</p>
        </form>
      </aside>
    </div>
  </div>`;
}

function bindDetailView(t) {
  const form = $('#bookForm');
  const total = () => $('#bTotal').textContent = yen(t.price * Number($('#bGuests').value));
  $('#bGuests').addEventListener('change', total);

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const v = { date: $('#bDate').value, name: $('#bName').value.trim(), email: $('#bEmail').value.trim() };
    const errs = {};
    if (!v.date) errs.date = 'Please choose a tour date.';
    else if (v.date < todayStr()) errs.date = 'The date can\'t be in the past.';
    if (!v.name) errs.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) errs.email = 'Please enter a valid email.';
    $$('[data-err]', form).forEach(el => el.textContent = errs[el.dataset.err] || '');
    if (Object.keys(errs).length) { $(`#b${Object.keys(errs)[0][0].toUpperCase() + Object.keys(errs)[0].slice(1)}`).focus(); return; }

    const guests = Number($('#bGuests').value);
    const booking = {
      id: Date.now(), tourId: t.id, date: v.date, guests, name: v.name, email: v.email,
      lang: $('#bLang').value, note: $('#bNote').value.trim(), total: t.price * guests
    };
    try {
      await Store.add(booking);
      await updateBadge();
    } catch {
      toast('Could not save the booking. Please try again.');
      return;
    }
    showConfirm(t, booking);
    form.reset(); total();
  });
}

function showConfirm(t, b) {
  const ov = document.createElement('div');
  ov.className = 'overlay';
  ov.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="mTitle">
      <div class="tick">OK</div>
      <h2 id="mTitle">Booking confirmed!</h2>
      <p class="muted">Thank you, ${esc(b.name)}. A confirmation would be sent to ${esc(b.email)}.</p>
      <dl>
        <dt>Tour</dt><dd>${esc(t.title)}</dd>
        <dt>Date</dt><dd>${fmtDate(b.date)} · ${t.start}</dd>
        <dt>Guests</dt><dd>${b.guests}</dd>
        <dt>Total</dt><dd>${yen(b.total)}</dd>
      </dl>
      <div class="actions"><a class="btn" href="#/bookings">View my bookings</a><button class="btn ghost" data-close>Close</button></div>
    </div>`;
  const close = () => ov.remove();
  ov.addEventListener('click', e => { if (e.target === ov || e.target.closest('[data-close],a')) close(); });
  document.addEventListener('keydown', function esc(e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); } });
  document.body.appendChild(ov);
  $('.btn', ov).focus();
}

function bookingsView() {
  const list = Store.all().slice().sort((a, b) => a.date.localeCompare(b.date));
  return `
  <div class="container">
    <div class="page-title"><h1>My bookings</h1><p class="muted">Saved in this browser (demo).</p></div>
    ${list.length ? `<div class="booking-list">${list.map(b => {
      const t = findTour(b.tourId);
      return `<div class="booking-item">
        <div class="thumb" style="background-image:url('${esc(t.image)}')"></div>
        <div class="info"><h3><a href="#/tour/${t.id}">${esc(t.title)}</a></h3>
          <div class="muted">Date: ${fmtDate(b.date)} · ${t.start} &nbsp; Guests: ${b.guests} &nbsp; Language: ${esc(b.lang)}</div>
          <div class="muted">Booked by ${esc(b.name)}</div></div>
        <div><div class="price">${yen(b.total)}</div><button class="btn ghost small" data-cancel="${b.id}">Cancel</button></div>
      </div>`;
    }).join('')}</div>`
    : `<div class="empty"><h3>No bookings yet</h3><p class="muted">Find a tour you like and reserve your date.</p><a class="btn" href="#/tours">Find a tour</a></div>`}
  </div>`;
}

/* ---------- Router ---------- */
function render() {
  const [, page, arg] = (location.hash.replace(/^#/, '') || '/').split('/');
  const app = $('#app');
  let nav = 'home';

  if (page === 'tours') {
    nav = 'tours'; app.innerHTML = toursView(); bindToursView();
  } else if (page === 'tour' && findTour(arg)) {
    nav = 'tours'; const t = findTour(arg); app.innerHTML = detailView(t); bindDetailView(t);
    document.title = `${t.title} – TourGuide.com`;
  } else if (page === 'bookings') {
    nav = 'bookings'; app.innerHTML = bookingsView();
    $$('[data-cancel]', app).forEach(btn => btn.addEventListener('click', async () => {
      if (confirm('Cancel this booking?')) {
        try {
          await Store.remove(Number(btn.dataset.cancel));
          await updateBadge();
          render();
          toast('Booking cancelled');
        } catch {
          toast('Could not cancel the booking.');
        }
      }
    }));
  } else {
    app.innerHTML = homeView();
    $('#heroSearch').addEventListener('submit', e => {
      e.preventDefault();
      Object.assign(filters, {
        q: '', place: $('#hPlace').value, maxPrice: Number($('#hPrice').value),
        interests: $('#hInterest').value ? [$('#hInterest').value] : [], sort: 'popular'
      });
      location.hash = '#/tours';
    });
    $$('.spot', app).forEach(a => a.addEventListener('click', () => {
      Object.assign(filters, { q: '', place: a.dataset.place, interests: [], maxPrice: MAX_PRICE });
    }));
  }

  if (page !== 'tour') document.title = 'TourGuide.com – Local tours in Japan';
  $$('[data-nav]').forEach(a => a.classList.toggle('active', a.dataset.nav === nav));
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', render);
Store.load().then(() => {
  updateBadge();
  render();
});
