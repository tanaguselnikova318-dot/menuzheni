const START_DATE = '2026-06-12';
const STORAGE_PREFIX = 'lnch_';

const MENU = [
  {
    name: 'Борщ классический',
    time: '1.5 часа',
    ingredients: ['говядина 400г', 'свёкла 2 шт', 'капуста белокочанная 300г', 'картошка 3 шт', 'морковь 1 шт', 'лук 1 шт', 'томатная паста 2 ст.л.', 'масло растительное', 'соль, лавровый лист', 'сметана для подачи'],
    steps: [
      'Сварить говяжий бульон: мясо залить водой, варить 1 час, снимая пену.',
      'Свёклу натереть, потушить с томатной пастой и каплей уксуса 10 мин.',
      'В бульон добавить картошку. Через 10 мин — обжаренные лук и морковь, нашинкованную капусту.',
      'Добавить свёклу, посолить, варить ещё 10 мин. Настоять под крышкой 15 мин. Подать со сметаной.'
    ]
  },
  {
    name: 'Щи из свежей капусты',
    time: '1 час',
    ingredients: ['куриные бёдра 500г', 'капуста 400г', 'картошка 3 шт', 'морковь 1 шт', 'лук 1 шт', 'томатная паста 1 ст.л.', 'масло растительное', 'соль, перец, зелень'],
    steps: [
      'Сварить куриный бульон: бёдра залить водой, варить 30 мин.',
      'Обжарить лук и морковь, добавить томатную пасту.',
      'В бульон добавить нарезанную картошку, через 8 мин — капусту и зажарку.',
      'Варить 15 мин, посолить, поперчить. Подать с зеленью и сметаной.'
    ]
  },
  {
    name: 'Куриный суп с лапшой',
    time: '50 мин',
    ingredients: ['куриная грудка 400г', 'лапша яичная 100г', 'морковь 1 шт', 'лук 1 шт', 'картошка 2 шт', 'соль, перец', 'зелень', 'лавровый лист'],
    steps: [
      'Куриную грудку залить водой, варить 25 мин. Вынуть, нарезать.',
      'В бульон добавить нарезанную картошку и морковь, варить 10 мин.',
      'Добавить лапшу, курицу, посолить. Варить 5 мин.',
      'Снять с огня, добавить зелень. Дать настояться 5 мин.'
    ]
  },
  {
    name: 'Гороховый суп',
    time: '1.5 часа',
    ingredients: ['горох сухой 250г', 'свиные рёбра 400г', 'картошка 3 шт', 'морковь 1 шт', 'лук 1 шт', 'копчёная колбаса 100г', 'масло растительное', 'соль, перец, зелень'],
    steps: [
      'Горох замочить на ночь. Рёбра залить водой, варить 40 мин.',
      'Добавить горох, варить ещё 30 мин до мягкости.',
      'Добавить картошку и обжаренные лук с морковью, колбасу.',
      'Варить 15 мин, посолить. Подать с зеленью и сухариками.'
    ]
  },
  {
    name: 'Рассольник',
    time: '1 час',
    ingredients: ['говядина 300г', 'перловая крупа 4 ст.л.', 'солёные огурцы 3 шт', 'картошка 3 шт', 'морковь 1 шт', 'лук 1 шт', 'томатная паста 1 ст.л.', 'огуречный рассол 100 мл', 'соль, перец, лавровый лист'],
    steps: [
      'Перловку промыть, залить кипятком на 20 мин. Сварить говяжий бульон 40 мин.',
      'Добавить перловку и картошку, варить 15 мин.',
      'Добавить обжаренные лук, морковь и натёртые огурцы с томатной пастой.',
      'Влить рассол, посолить по вкусу, варить 10 мин. Подать со сметаной.'
    ]
  },
  {
    name: 'Суп с фрикадельками',
    time: '45 мин',
    ingredients: ['фарш свиной/говяжий 400г', 'яйцо 1 шт', 'лук 2 шт', 'морковь 1 шт', 'картошка 3 шт', 'вермишель 50г', 'соль, перец, зелень'],
    steps: [
      'Фарш смешать с яйцом, мелко нарезанным луком, солью и перцем. Слепить маленькие фрикадельки.',
      'Вскипятить воду, добавить нарезанную картошку и морковь.',
      'Через 10 мин добавить фрикадельки, варить 10 мин.',
      'Добавить вермишель, варить 5 мин. Посолить, посыпать зеленью.'
    ]
  },
  {
    name: 'Картофельный суп',
    time: '40 мин',
    ingredients: ['картошка 5 шт', 'морковь 1 шт', 'лук 1 шт', 'масло сливочное 30г', 'молоко 100 мл', 'зелень', 'соль, перец', 'сухарики для подачи'],
    steps: [
      'Картошку и морковь нарезать, залить водой, варить 20 мин.',
      'Лук обжарить на сливочном масле до золотистости.',
      'Добавить зажарку в суп, влить молоко, посолить.',
      'Варить ещё 5 мин. Подать с зеленью и сухариками.'
    ]
  },
  {
    name: 'Суп щавелевый',
    time: '45 мин',
    ingredients: ['щавель 200г', 'куриный бульон 1.5 л', 'картошка 3 шт', 'яйца 3 шт (варёные)', 'морковь 1 шт', 'лук 1 шт', 'масло растительное', 'соль, сметана для подачи'],
    steps: [
      'В кипящий куриный бульон добавить нарезанную картошку и морковь, варить 15 мин.',
      'Лук обжарить, добавить в суп.',
      'Щавель нарезать, добавить в суп, варить 5 мин.',
      'Подать с половинками варёных яиц и сметаной.'
    ]
  },
  {
    name: 'Солянка мясная',
    time: '1.5 часа',
    ingredients: ['говядина 300г', 'копчёные колбаски 150г', 'ветчина 100г', 'солёные огурцы 3 шт', 'лук 2 шт', 'томатная паста 2 ст.л.', 'маслины 50г', 'каперсы 2 ст.л.', 'лимон 0.5 шт', 'сметана для подачи'],
    steps: [
      'Сварить говяжий бульон 1 час. Говядину вынуть, нарезать.',
      'Лук обжарить, добавить томатную пасту и нарезанные огурцы, тушить 5 мин.',
      'Добавить все мясные продукты, зажарку и маслины в бульон.',
      'Варить 15 мин. Подать с ломтиком лимона и сметаной.'
    ]
  },
  {
    name: 'Суп грибной с картошкой',
    time: '50 мин',
    ingredients: ['грибы шампиньоны 400г', 'картошка 4 шт', 'морковь 1 шт', 'лук 1 шт', 'сливки 100 мл', 'масло сливочное 30г', 'соль, перец, зелень', 'лавровый лист'],
    steps: [
      'Грибы нарезать ломтиками, обжарить на сливочном масле 5 мин.',
      'Лук и морковь обжарить отдельно.',
      'В кипящую воду добавить картошку, через 10 мин — грибы, зажарку.',
      'Влить сливки, посолить, варить 5 мин. Подать с зеленью.'
    ]
  },
  {
    name: 'Суп харчо',
    time: '1 час',
    ingredients: ['говядина 400г', 'рис 4 ст.л.', 'томаты 3 шт', 'лук 2 шт', 'чеснок 4 зубчика', 'грецкие орехи 50г', 'томатная паста 1 ст.л.', 'хмели-сунели 1 ч.л.', 'кинза, соль, острый перец'],
    steps: [
      'Говядину нарезать, залить водой, варить 40 мин.',
      'Лук обжарить, добавить томаты, томатную пасту и специи. Тушить 5 мин.',
      'Добавить рис и зажарку в бульон, варить 15 мин.',
      'Добавить чеснок, измельчённые орехи, кинзу. Варить ещё 5 мин.'
    ]
  },
  {
    name: 'Суп с клёцками',
    time: '40 мин',
    ingredients: ['куриная грудка 300г', 'морковь 1 шт', 'лук 1 шт', 'картошка 2 шт', 'яйцо 1 шт (для клёцек)', 'мука 5 ст.л. (для клёцек)', 'соль, зелень'],
    steps: [
      'Сварить куриный бульон 25 мин. Добавить картошку и морковь.',
      'Приготовить клёцки: смешать яйцо, муку, щепотку соли — должно получиться густое тесто.',
      'Чайной ложкой опускать клёцки в кипящий суп, варить 5 мин.',
      'Посолить, посыпать зеленью. Подать горячим.'
    ]
  },
  {
    name: 'Уха',
    time: '40 мин',
    ingredients: ['рыба (судак или минтай) 500г', 'картошка 3 шт', 'морковь 1 шт', 'лук 1 шт', 'лавровый лист 2 шт', 'перец горошком', 'зелень', 'соль'],
    steps: [
      'Рыбу нарезать крупными кусками, залить холодной водой.',
      'Добавить целую луковицу, лавровый лист, перец. Варить 20 мин на слабом огне.',
      'Вынуть лук. Добавить нарезанную картошку и морковь, варить 15 мин.',
      'Посолить, добавить зелень. Подать горячей с хлебом.'
    ]
  },
  {
    name: 'Суп томатный с рисом',
    time: '40 мин',
    ingredients: ['томаты 4 шт (или 400г консервированных)', 'рис 4 ст.л.', 'морковь 1 шт', 'лук 1 шт', 'чеснок 2 зубчика', 'томатная паста 1 ст.л.', 'масло растительное', 'сахар 0.5 ч.л.', 'базилик, соль, перец'],
    steps: [
      'Лук, морковь и чеснок обжарить 5 мин. Добавить томаты и томатную пасту, тушить 8 мин.',
      'Влить 1.5 л горячей воды, добавить сахар, соль, перец.',
      'Добавить промытый рис, варить 15 мин.',
      'Посыпать базиликом. Подать со сметаной или тёртым сыром.'
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

  /* Schedule — 14 days for lunch */
  let html = '';
  for (let i = 0; i < 14; i++) {
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
     <button id="btn-add" class="btn-add">&#43; Добавить суп</button>`;

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
  document.getElementById('modal-title').textContent = 'Новый суп';
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
