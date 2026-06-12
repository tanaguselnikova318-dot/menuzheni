const START_DATE = '2026-06-12';

const MENU = [
  {
    name: 'Куриные котлеты с гречкой', time: '40 мин',
    ingredients: ['куриный фарш 500г','лук 1 шт','яйцо 1 шт','гречка 300г','масло растительное'],
    steps: [
      'Лук натереть или мелко нарезать, смешать с фаршем и яйцом, посолить. Слепить котлеты.',
      'Обжарить на масле по 5–6 мин с каждой стороны до румяной корочки.',
      'Отварить гречку 20 мин в подсолённой воде. Подать с котлетами.'
    ],
    salad: { name: 'Салат из огурцов и помидоров', ingredients: ['огурцы 2 шт','помидоры 2 шт','масло растительное','соль'] }
  },
  {
    name: 'Плов с курицей', time: '1 час',
    ingredients: ['куриное филе 500г','рис 300г','морковь 2 шт','лук 2 шт','чеснок 1 головка','масло растительное','куркума, зира'],
    steps: [
      'Лук нарезать кольцами, морковь — соломкой. Обжарить на масле 10 мин.',
      'Добавить нарезанную курицу, жарить 10 мин, посолить, добавить специи.',
      'Выложить промытый рис, воткнуть головку чеснока, залить 600 мл воды. Тушить под крышкой на слабом огне 25 мин.'
    ],
    salad: { name: 'Салат из свежей капусты', ingredients: ['капуста 300г','морковь 1 шт','масло растительное','уксус 1 ст.л.','соль, сахар'] }
  },
  {
    name: 'Куриные бёдра с картошкой в духовке', time: '1 час',
    ingredients: ['куриные бёдра 1 кг','картошка 700г','чеснок 3 зуб.','паприка, орегано','масло растительное'],
    steps: [
      'Картошку нарезать дольками, выложить на противень. Полить маслом, посолить.',
      'Бёдра натереть чесноком со специями, выложить поверх картошки.',
      'Запекать при 200°C 50 мин.'
    ],
    salad: { name: 'Салат из помидоров с луком', ingredients: ['помидоры 3 шт','лук репчатый 0,5 шт','масло растительное','соль'] }
  },
  {
    name: 'Жареная рыба с овощами', time: '35 мин',
    ingredients: ['рыба (минтай или хек) 700г','кабачок 1 шт','морковь 1 шт','лук 1 шт','мука для панировки','масло растительное'],
    steps: [
      'Рыбу нарезать на куски, обвалять в муке с солью.',
      'Обжарить на масле по 3–4 мин с каждой стороны.',
      'Лук и морковь обжарить 5 мин, добавить кабачок, тушить 10 мин. Подать вместе с рыбой.'
    ],
    salad: { name: 'Салат из огурцов со сметаной', ingredients: ['огурцы 3 шт','сметана 2 ст.л.','укроп','соль'] }
  },
  {
    name: 'Гречка с тушёной курицей', time: '40 мин',
    ingredients: ['куриное филе 500г','гречка 300г','лук 1 шт','морковь 1 шт','масло растительное'],
    steps: [
      'Лук и морковь нарезать, обжарить на масле 5 мин.',
      'Добавить нарезанное филе, жарить 5 мин. Налить 100 мл воды, тушить под крышкой 20 мин.',
      'Параллельно отварить гречку. Подать вместе.'
    ],
    salad: { name: 'Салат из редиса и огурцов', ingredients: ['редис 1 пучок','огурцы 2 шт','зелёный лук','сметана или масло','соль'] }
  },
  {
    name: 'Фаршированные перцы', time: '1 час',
    ingredients: ['болгарский перец 6 шт','фарш 400г','рис 150г','лук 1 шт','томатная паста 2 ст.л.','сметана 3 ст.л.'],
    steps: [
      'Рис отварить 10 мин (до полуготовности). Смешать с фаршем и луком, посолить.',
      'Перцы очистить от семян, нафаршировать начинкой, выложить в глубокую кастрюлю.',
      'Залить смесью: томатная паста + сметана + 400 мл воды. Тушить на среднем огне 40 мин.'
    ],
    salad: { name: 'Салат из свежих огурцов', ingredients: ['огурцы 3 шт','зелёный лук','укроп','масло растительное','соль'] }
  },
  {
    name: 'Макароны по-флотски', time: '30 мин',
    ingredients: ['макароны 400г','фарш 400г','лук 1 шт','масло растительное'],
    steps: [
      'Лук нарезать, обжарить на масле 5 мин.',
      'Добавить фарш, жарить 10–12 мин, разбивая комки. Посолить.',
      'Отварить макароны, слить воду. Смешать с фаршем и подать горячими.'
    ],
    salad: { name: 'Салат из капусты с морковью', ingredients: ['капуста 300г','морковь 1 шт','уксус 1 ст.л.','масло растительное','соль, сахар'] }
  },
  {
    name: 'Куриные крылышки с рисом', time: '50 мин',
    ingredients: ['куриные крылышки 1 кг','рис 300г','чеснок 3 зуб.','соевый соус 3 ст.л.','паприка, перец'],
    steps: [
      'Крылышки смешать с соевым соусом, чесноком и паприкой. Оставить мариноваться 20 мин.',
      'Выложить на противень, запекать при 200°C 35 мин.',
      'Отварить рис. Подать вместе с крылышками.'
    ],
    salad: { name: 'Салат из помидоров и огурцов', ingredients: ['помидоры 2 шт','огурцы 2 шт','зелёный лук','масло растительное','соль'] }
  },
  {
    name: 'Свинина с овощами в духовке', time: '1 час',
    ingredients: ['свинина 600г','картошка 500г','лук 2 шт','болгарский перец 2 шт','масло растительное','специи'],
    steps: [
      'Свинину нарезать кусками, натереть специями и солью.',
      'Овощи нарезать крупно, выложить в форму для запекания. Сверху — мясо.',
      'Полить маслом, запекать при 190°C 50 мин.'
    ],
    salad: { name: 'Салат из капусты с яблоком', ingredients: ['капуста 300г','яблоко 1 шт','морковь 1 шт','масло растительное','соль, сахар'] }
  },
  {
    name: 'Сырники со сметаной', time: '25 мин',
    ingredients: ['творог 500г','яйца 2 шт','мука 5 ст.л.','сахар 2 ст.л.','сметана для подачи','масло растительное'],
    steps: [
      'Смешать творог, яйца, сахар, щепотку соли и 4 ст.л. муки до однородности.',
      'Слепить сырники, обвалять в оставшейся муке.',
      'Жарить на масле по 3–4 мин с каждой стороны. Подать со сметаной.'
    ],
    salad: { name: 'Нарезка из свежих овощей', ingredients: ['огурцы 2 шт','помидоры 2 шт','болгарский перец 1 шт','соль'] }
  },
  {
    name: 'Яичница с колбасой и помидорами', time: '15 мин',
    ingredients: ['яйца 4 шт','варёная колбаса 200г','помидоры 2 шт','масло растительное'],
    steps: [
      'Колбасу нарезать кубиками, обжарить на масле 3 мин.',
      'Добавить помидоры, нарезанные кусочками, жарить ещё 2 мин.',
      'Вбить яйца, посолить, накрыть крышкой и жарить 3–4 мин до готовности.'
    ],
    salad: { name: 'Салат из огурцов с укропом', ingredients: ['огурцы 3 шт','укроп','сметана или масло','соль'] }
  },
  {
    name: 'Тефтели в томатном соусе с рисом', time: '50 мин',
    ingredients: ['фарш 500г','рис 100г','лук 1 шт','томатная паста 3 ст.л.','сметана 3 ст.л.','масло растительное'],
    steps: [
      'Рис отварить 10 мин (до полуготовности). Смешать с фаршем и луком. Слепить тефтели.',
      'Обжарить тефтели на масле по 3 мин с каждой стороны.',
      'Залить смесью: томатная паста + сметана + 250 мл воды. Тушить под крышкой 25 мин.'
    ],
    salad: { name: 'Салат из огурцов и помидоров', ingredients: ['огурцы 2 шт','помидоры 2 шт','лук репчатый 0,5 шт','масло растительное','соль'] }
  },
  {
    name: 'Лосось с картофельным пюре', time: '35 мин',
    ingredients: ['лосось или форель 600г','картошка 700г','масло сливочное 50г','молоко 100 мл','лимон 0,5 шт','соль'],
    steps: [
      'Картошку отварить до мягкости, размять с маслом и молоком.',
      'Рыбу посолить, сбрызнуть лимоном.',
      'Жарить на масле по 4–5 мин с каждой стороны. Подать с пюре.'
    ],
    salad: { name: 'Салат из помидоров с зеленью', ingredients: ['помидоры 3 шт','укроп или петрушка','масло растительное','соль'] }
  },
  {
    name: 'Говядина тушёная с картошкой', time: '1,5 часа',
    ingredients: ['говядина 600г','картошка 700г','лук 2 шт','морковь 1 шт','томатная паста 2 ст.л.','масло растительное'],
    steps: [
      'Говядину нарезать, обжарить с луком и морковью на масле 10 мин.',
      'Добавить томатную пасту и 300 мл воды, тушить под крышкой 40 мин.',
      'Добавить картошку крупными кусками, тушить ещё 25 мин до мягкости.'
    ],
    salad: { name: 'Салат из квашеной капусты', ingredients: ['квашеная капуста 300г','лук репчатый 1 шт','масло растительное','сахар'] }
  }
];

const DAYS_RU = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];
const MONTHS_RU = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
const WEEKDAYS_FULL = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];

/* ── Storage ── */
function loadMenuOverrides() {
  try { return JSON.parse(localStorage.getItem('menuOverrides') || '{}'); } catch { return {}; }
}
function saveMenuOverrides(obj) { localStorage.setItem('menuOverrides', JSON.stringify(obj)); }
function loadCustomRecipes() {
  try { return JSON.parse(localStorage.getItem('customRecipes') || '[]'); } catch { return []; }
}
function saveCustomRecipes(arr) { localStorage.setItem('customRecipes', JSON.stringify(arr)); }

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
function chipList(items, cls = '') {
  return items.map(i => `<li${cls ? ` class="${cls}"` : ''}>${i}</li>`).join('');
}

function saladBlock(salad) {
  if (!salad) return '';
  return `
    <div class="salad-block">
      <div class="salad-block-title">&#129789; ${salad.name}</div>
      <ul class="ingredients-list">${chipList(salad.ingredients, 'salad-chip')}</ul>
    </div>`;
}

function stepsList(steps) {
  return `<ol class="steps-list">${steps.map(s => `<li>${s}</li>`).join('')}</ol>`;
}

/* ── Today card ── */
function renderRecipeCard(recipe) {
  return `
    <div class="dish-hero">
      <div class="dish-name">${recipe.name}</div>
      <div class="time-badge">&#9201; ${recipe.time}</div>
    </div>
    <div class="card-body">
      <div class="card-subtitle">Нужно</div>
      <ul class="ingredients-list">${chipList(recipe.ingredients)}</ul>
      <hr class="card-divider">
      <div class="card-subtitle">Как готовить</div>
      ${stepsList(recipe.steps)}
      ${saladBlock(recipe.salad)}
    </div>`;
}

/* ── Tomorrow shopping card ── */
function renderShoppingCard(recipe) {
  const sal = recipe.salad ? `
    <div class="shop-group">
      <div class="shop-group-title">&#129789; ${recipe.salad.name}</div>
      <ul class="shop-list">${recipe.salad.ingredients.map(i=>`<li>${i}</li>`).join('')}</ul>
    </div>` : '';
  return `
    <div class="tomorrow-hero">
      <div class="dish-name-small">&#128722; ${recipe.name}</div>
    </div>
    <div class="tomorrow-body">
      <div class="shop-group">
        <div class="shop-group-title">Основные продукты</div>
        <ul class="shop-list">${recipe.ingredients.map(i=>`<li>${i}</li>`).join('')}</ul>
      </div>
      ${sal}
    </div>`;
}

/* ── Mini recipe for schedule expand ── */
function renderMiniRecipe(recipe, recipeIdx) {
  return `
    <div class="mini-recipe">
      <div class="mini-time">&#9201; ${recipe.time}</div>
      <div class="mini-section">
        <div class="mini-label">Нужно</div>
        <ul class="ingredients-list">${chipList(recipe.ingredients)}</ul>
      </div>
      <div class="mini-section">
        <div class="mini-label">Как готовить</div>
        ${stepsList(recipe.steps)}
      </div>
      ${saladBlock(recipe.salad)}
      <button class="btn-edit-recipe" data-idx="${recipeIdx}">&#9998; Редактировать рецепт</button>
    </div>`;
}

/* ── Main render ── */
function render() {
  const all = getAllRecipes();
  const customs = loadCustomRecipes();
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const todayIdx    = getDayIndex(today);
  const tomorrowIdx = getDayIndex(tomorrow);

  const dn = WEEKDAYS_FULL[today.getDay()];
  document.getElementById('today-date').textContent =
    `${dn.charAt(0).toUpperCase()+dn.slice(1)}, ${today.getDate()} ${MONTHS_RU[today.getMonth()]} ${today.getFullYear()}`;

  document.getElementById('today-card').innerHTML    = renderRecipeCard(all[todayIdx]);
  document.getElementById('tomorrow-card').innerHTML = renderShoppingCard(all[tomorrowIdx]);

  /* Schedule */
  let html = '';
  for (let i = 0; i < 14; i++) {
    const d = new Date(today); d.setDate(today.getDate() + i);
    const idx = getDayIndex(d);
    const isToday = i === 0;
    html += `
      <div class="schedule-item">
        <div class="schedule-row${isToday ? ' is-today' : ''}" data-item="${i}">
          <span class="schedule-dow">${DAYS_RU[d.getDay()]}</span>
          <span class="schedule-date">${formatDate(d)}</span>
          <span class="schedule-name">${all[idx].name}</span>
          ${isToday ? '<span class="today-dot"></span>' : ''}
          <span class="schedule-toggle">&#8964;</span>
        </div>
        <div class="schedule-expanded" id="exp-${i}">
          ${renderMiniRecipe(all[idx], idx)}
        </div>
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
  const cards = customs.map((r, i) => `
    <div class="custom-card">
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
     <button id="btn-add" class="btn-add">&#43; Добавить рецепт</button>`;

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
  document.getElementById('modal-title').textContent = 'Новый рецепт';
  document.getElementById('recipe-form').reset();
  document.getElementById('modal-overlay').classList.remove('hidden');
  document.getElementById('f-name').focus();
}

function openEditModal(idx) {
  const r = getAllRecipes()[idx];
  document.getElementById('f-edit-idx').value       = idx;
  document.getElementById('modal-title').textContent = 'Редактировать рецепт';
  document.getElementById('f-name').value            = r.name;
  document.getElementById('f-time').value            = r.time;
  document.getElementById('f-ingredients').value     = r.ingredients.join('\n');
  document.getElementById('f-steps').value           = r.steps.join('\n');
  document.getElementById('f-salad-name').value      = r.salad?.name || '';
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
  const editIdx   = +document.getElementById('f-edit-idx').value;
  const saladName = document.getElementById('f-salad-name').value.trim();
  const saladIngr = document.getElementById('f-salad-ingredients').value.split('\n').map(s=>s.trim()).filter(Boolean);
  const recipe = {
    name:        document.getElementById('f-name').value.trim(),
    time:        document.getElementById('f-time').value.trim() || '—',
    ingredients: document.getElementById('f-ingredients').value.split('\n').map(s=>s.trim()).filter(Boolean),
    steps:       document.getElementById('f-steps').value.split('\n').map(s=>s.trim()).filter(Boolean),
    salad: (saladName || saladIngr.length) ? { name: saladName || 'Салат', ingredients: saladIngr } : null
  };

  if (editIdx >= 0) {
    if (editIdx < MENU.length) {
      const ov = loadMenuOverrides(); ov[editIdx] = recipe; saveMenuOverrides(ov);
    } else {
      const arr = loadCustomRecipes(); arr[editIdx - MENU.length] = recipe; saveCustomRecipes(arr);
    }
  } else {
    const arr = loadCustomRecipes(); arr.push(recipe); saveCustomRecipes(arr);
  }
  closeModal();
  render();
});

render();
