const START_DATE = '2026-06-12';
const STORAGE_PREFIX = 'bf_';

const MENU = [
  {
    name: 'Каша овсяная с мёдом',
    time: '15 мин',
    ingredients: ['овсяные хлопья 150г', 'молоко 300 мл', 'мёд 1 ст.л.', 'банан 1 шт или ягоды'],
    steps: [
      'Молоко довести до кипения, всыпать хлопья.',
      'Варить 5 мин на среднем огне, помешивая.',
      'Добавить мёд, нарезанный банан или ягоды. Подать горячей.'
    ]
  },
  {
    name: 'Омлет с сыром',
    time: '10 мин',
    ingredients: ['яйца 3 шт', 'молоко 3 ст.л.', 'сыр твёрдый 50г', 'масло сливочное', 'соль'],
    steps: [
      'Взбить яйца с молоком и солью.',
      'Растопить масло на сковороде, вылить яичную смесь.',
      'Жарить под крышкой 3–4 мин. Посыпать тёртым сыром, сложить пополам.'
    ]
  },
  {
    name: 'Блинчики со сметаной',
    time: '30 мин',
    ingredients: ['мука 200г', 'молоко 400 мл', 'яйца 2 шт', 'сахар 2 ст.л.', 'масло растительное', 'сметана для подачи'],
    steps: [
      'Взбить яйца с молоком и сахаром. Всыпать муку, перемешать до однородности.',
      'Жарить тонкие блинчики на смазанной сковороде по 1–2 мин с каждой стороны.',
      'Подать со сметаной или вареньем.'
    ]
  },
  {
    name: 'Гречневая каша с молоком',
    time: '25 мин',
    ingredients: ['гречка 150г', 'вода 300 мл', 'молоко 200 мл', 'масло сливочное 20г', 'соль, сахар по вкусу'],
    steps: [
      'Гречку промыть, залить водой, посолить. Варить 20 мин до готовности.',
      'Добавить масло, перемешать.',
      'Подать с тёплым молоком.'
    ]
  },
  {
    name: 'Тосты с яйцом и сыром',
    time: '10 мин',
    ingredients: ['хлеб для тостов 4 ломтика', 'яйца 2 шт', 'сыр твёрдый 60г', 'масло сливочное', 'соль'],
    steps: [
      'Подрумянить хлеб в тостере или на сухой сковороде.',
      'Поджарить яйца на масле.',
      'Выложить яйца на тосты, посыпать тёртым сыром.'
    ]
  },
  {
    name: 'Сырники со сметаной',
    time: '25 мин',
    ingredients: ['творог 400г', 'яйцо 1 шт', 'мука 4 ст.л.', 'сахар 2 ст.л.', 'сметана для подачи', 'масло растительное'],
    steps: [
      'Смешать творог, яйцо, сахар и 3 ст.л. муки до однородности.',
      'Слепить сырники, обвалять в оставшейся муке.',
      'Жарить на масле по 3–4 мин с каждой стороны. Подать со сметаной.'
    ]
  },
  {
    name: 'Яичница с овощами',
    time: '10 мин',
    ingredients: ['яйца 3 шт', 'помидор 1 шт', 'болгарский перец 0,5 шт', 'масло растительное', 'соль, зелень'],
    steps: [
      'Нарезать помидор и перец, обжарить 2 мин.',
      'Вбить яйца, посолить, накрыть крышкой.',
      'Жарить 3 мин. Посыпать зеленью и подать.'
    ]
  }
];

const DAYS_RU = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];
const MONTHS_RU = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
const WEEKDAYS_FULL = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];

/* ── Storage ── */
function loadMenuOverrides() {
  try { return JSON.parse(localStorage.getItem(STORAGE_PREFIX+'menuOverrides') || '{}'); } catch { return {}; }
}
function saveMenuOverrides(obj) { localStorage.setItem(STORAGE_PREFIX+'menuOverrides', JSON.stringify(obj)); }
function loadCustomRecipes() {
  try { return JSON.parse(localStorage.getItem(STORAGE_PREFIX+'customRecipes') || '[]'); } catch { return []; }
}
function saveCustomRecipes(arr) { localStorage.setItem(STORAGE_PREFIX+'customRecipes', JSON.stringify(arr)); }

function getAllRecipes() {
  const ov = loadMenuOverrides();
  const base = MENU.map((r, i) => ov[i] ? { ...r, ...ov[i] } : r);
  return [...base, ...loadCustomRecipes()];
}

function getDayIndex(date) {
  const all = getAllRecipes();
  const start = new Date(START_DATE); start.setHours(0,0,0,0);
  const d = new Date(date); d.setHours(0,0,0,0);
  const diff = Math.floor((d - start) / 86400000);
  return ((diff % all.length) + all.length) % all.length;
}

function formatDate(date) {
  return `${date.getDate()}.${String(date.getMonth()+1).padStart(2,'0')}`;
}

/* ── Render helpers ── */
function saladBlock(salad) {
  if (!salad) return '';
  return `<div class="salad-block">
    <div class="salad-block-title">&#129789; ${salad.name}</div>
    <ul class="ingredients-list">${salad.ingredients.map(i=>`<li class="salad-chip">${i}</li>`).join('')}</ul>
  </div>`;
}

function renderRecipeCard(recipe) {
  return `
    <div class="dish-hero">
      <div class="dish-name">${recipe.name}</div>
      <div class="time-badge">&#9201; ${recipe.time}</div>
    </div>
    <div class="card-body">
      <div class="card-subtitle">Нужно</div>
      <ul class="ingredients-list">${recipe.ingredients.map(i=>`<li>${i}</li>`).join('')}</ul>
      <hr class="card-divider">
      <div class="card-subtitle">Как готовить</div>
      <ol class="steps-list">${recipe.steps.map(s=>`<li>${s}</li>`).join('')}</ol>
      ${saladBlock(recipe.salad)}
    </div>`;
}

function renderShoppingCard(recipe) {
  const sal = recipe.salad ? `<div class="shop-group">
    <div class="shop-group-title">&#129789; ${recipe.salad.name}</div>
    <ul class="shop-list">${recipe.salad.ingredients.map(i=>`<li>${i}</li>`).join('')}</ul>
  </div>` : '';
  return `
    <div class="tomorrow-hero">
      <div class="dish-name-small">&#128722; ${recipe.name}</div>
    </div>
    <div class="tomorrow-body">
      <div class="shop-group">
        <div class="shop-group-title">Продукты</div>
        <ul class="shop-list">${recipe.ingredients.map(i=>`<li>${i}</li>`).join('')}</ul>
      </div>${sal}
    </div>`;
}

function renderMiniRecipe(recipe, recipeIdx) {
  return `<div class="mini-recipe">
    <div class="mini-time">&#9201; ${recipe.time}</div>
    <div class="mini-section">
      <div class="mini-label">Нужно</div>
      <ul class="ingredients-list">${recipe.ingredients.map(i=>`<li>${i}</li>`).join('')}</ul>
    </div>
    <div class="mini-section">
      <div class="mini-label">Как готовить</div>
      <ol class="steps-list">${recipe.steps.map(s=>`<li>${s}</li>`).join('')}</ol>
    </div>
    ${saladBlock(recipe.salad)}
    <button class="btn-edit-recipe" data-idx="${recipeIdx}">&#9998; Редактировать</button>
  </div>`;
}

/* ── Main render ── */
function render() {
  const all = getAllRecipes();
  const customs = loadCustomRecipes();
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const dn = WEEKDAYS_FULL[today.getDay()];
  document.getElementById('today-date').textContent =
    `${dn.charAt(0).toUpperCase()+dn.slice(1)}, ${today.getDate()} ${MONTHS_RU[today.getMonth()]} ${today.getFullYear()}`;

  document.getElementById('today-card').innerHTML    = renderRecipeCard(all[getDayIndex(today)]);
  document.getElementById('tomorrow-card').innerHTML = renderShoppingCard(all[getDayIndex(tomorrow)]);

  /* Schedule — 7 days for breakfast */
  let html = '';
  const days = all.length <= 7 ? 7 : 14;
  for (let i = 0; i < days; i++) {
    const d = new Date(today); d.setDate(today.getDate() + i);
    const idx = getDayIndex(d);
    const isToday = i === 0;
    html += `<div class="schedule-item">
      <div class="schedule-row${isToday ? ' is-today' : ''}" data-item="${i}">
        <span class="schedule-dow">${DAYS_RU[d.getDay()]}</span>
        <span class="schedule-date">${formatDate(d)}</span>
        <span class="schedule-name">${all[idx].name}</span>
        ${isToday ? '<span class="today-dot"></span>' : ''}
        <span class="schedule-toggle">&#8964;</span>
      </div>
      <div class="schedule-expanded" id="exp-${i}">${renderMiniRecipe(all[idx], idx)}</div>
    </div>`;
  }
  document.getElementById('schedule-list').innerHTML = html;

  document.querySelectorAll('.schedule-row').forEach(row => {
    row.addEventListener('click', () => {
      const i = row.dataset.item;
      const panel = document.getElementById(`exp-${i}`);
      const wasOpen = row.classList.contains('open');
      document.querySelectorAll('.schedule-row.open').forEach(r => r.classList.remove('open'));
      document.querySelectorAll('.schedule-expanded.open').forEach(e => e.classList.remove('open'));
      if (!wasOpen) { row.classList.add('open'); panel.classList.add('open'); }
    });
  });

  document.querySelectorAll('.btn-edit-recipe').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); openEditModal(+btn.dataset.idx); });
  });

  /* Custom recipes section */
  const cards = customs.map((r, i) => `<div class="custom-card">
    <div class="custom-card-header">
      <span class="custom-card-name">${r.name}</span>
      <div class="custom-card-actions">
        <button class="btn-edit-custom" data-idx="${i}" title="Редактировать">&#9998;</button>
        <button class="btn-delete" data-idx="${i}" title="Удалить">&#10005;</button>
      </div>
    </div>
    <div class="custom-card-meta">&#9201; ${r.time}</div>
  </div>`).join('');

  document.getElementById('custom-section-content').innerHTML =
    `${cards ? `<div class="custom-list">${cards}</div>` : ''}
     <button id="btn-add" class="btn-add">&#43; Добавить завтрак</button>`;

  document.getElementById('btn-add').addEventListener('click', openAddModal);
  document.querySelectorAll('.btn-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      const arr = loadCustomRecipes(); arr.splice(+btn.dataset.idx, 1);
      saveCustomRecipes(arr); render();
    });
  });
  document.querySelectorAll('.btn-edit-custom').forEach(btn => {
    btn.addEventListener('click', () => openEditModal(MENU.length + +btn.dataset.idx));
  });
}

/* ── Modal ── */
function openAddModal() {
  document.getElementById('f-edit-idx').value = '-1';
  document.getElementById('modal-title').textContent = 'Новый завтрак';
  document.getElementById('recipe-form').reset();
  document.getElementById('modal-overlay').classList.remove('hidden');
  document.getElementById('f-name').focus();
}

function openEditModal(idx) {
  const r = getAllRecipes()[idx];
  document.getElementById('f-edit-idx').value = idx;
  document.getElementById('modal-title').textContent = 'Редактировать';
  document.getElementById('f-name').value = r.name;
  document.getElementById('f-time').value = r.time;
  document.getElementById('f-ingredients').value = r.ingredients.join('\n');
  document.getElementById('f-steps').value = r.steps.join('\n');
  document.getElementById('f-salad-name').value = r.salad?.name || '';
  document.getElementById('f-salad-ingredients').value = r.salad?.ingredients.join('\n') || '';
  document.getElementById('modal-overlay').classList.remove('hidden');
  document.getElementById('f-name').focus();
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
  document.getElementById('recipe-form').reset();
  document.getElementById('f-edit-idx').value = '-1';
}

document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});
document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-cancel').addEventListener('click', closeModal);

document.getElementById('recipe-form').addEventListener('submit', e => {
  e.preventDefault();
  const editIdx = +document.getElementById('f-edit-idx').value;
  const saladName = document.getElementById('f-salad-name').value.trim();
  const saladIngr = document.getElementById('f-salad-ingredients').value.split('\n').map(s=>s.trim()).filter(Boolean);
  const recipe = {
    name:        document.getElementById('f-name').value.trim(),
    time:        document.getElementById('f-time').value.trim() || '—',
    ingredients: document.getElementById('f-ingredients').value.split('\n').map(s=>s.trim()).filter(Boolean),
    steps:       document.getElementById('f-steps').value.split('\n').map(s=>s.trim()).filter(Boolean),
    salad: (saladName || saladIngr.length) ? { name: saladName || 'Доп. блюдо', ingredients: saladIngr } : null
  };
  if (editIdx >= 0) {
    if (editIdx < MENU.length) { const ov = loadMenuOverrides(); ov[editIdx] = recipe; saveMenuOverrides(ov); }
    else { const arr = loadCustomRecipes(); arr[editIdx - MENU.length] = recipe; saveCustomRecipes(arr); }
  } else {
    const arr = loadCustomRecipes(); arr.push(recipe); saveCustomRecipes(arr);
  }
  closeModal(); render();
});

render();
