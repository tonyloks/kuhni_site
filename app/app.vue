<script setup>
import { ref, computed } from 'vue'

// --- Калькулятор (прототип) ---
const length = ref("3"); // метры (preset)
const material = ref("ЛДСП");
const hardware = ref("Boyard");
const worktop = ref("Пластик");
const rush = ref(false);

const estimate = computed(() => {
  // База по длине (грубая оценка по рынку и ориентирам из брифа)
  const baseByLen = { "3": 80000, "4": 110000, "5": 140000 };
  let price = baseByLen[length.value] ?? 110000;

  const matMul = { ЛДСП: 1.0, МДФ: 1.15, Акрил: 1.35, Шпон: 1.25, Массив: 1.6 };
  const hwMul = { Boyard: 1.0, Hettich: 1.1, Blum: 1.2 };
  const topAdd = { Пластик: 10000, Камень: 25000 };

  price = price * (matMul[material.value] ?? 1) * (hwMul[hardware.value] ?? 1) + (topAdd[worktop.value] ?? 0);
  if (rush.value) price *= 1.2; // ускорение

  // Диапазон ±15% c дисклеймером
  const low = price * 0.85;
  const high = price * 1.15;
  return { low, mid: price, high };
});

const currency = (n) => new Intl.NumberFormat("ru-RU").format(Math.round(n));

const faqItems = [
  {
    q: "Делаете нестандартные размеры, цвета и наполнение?",
    a: "Да, делаем практически любые размеры/цвета/наполнение. Для точной цены нужны хотя бы примерные размеры.",
  },
  {
    q: "Замер бесплатный?",
    a: "Замер — платная услуга, но его стоимость вычитается при оформлении заказа.",
  },
  {
    q: "Какие сроки изготовления?",
    a: "Стандартно около 4 недель. Ускорение обсуждается индивидуально (вплоть до ~1 недели — зависит от материалов/нагрузки).",
  },
  {
    q: "Есть рассрочка?",
    a: "Да, через банк. Подробности уточним при заключении договора.",
  },
  {
    q: "Кто делает монтаж?",
    a: "Сейчас монтаж включён в стоимость. В перспективе возможен партнёрский монтаж на отдельных условиях.",
  },
  {
    q: "Как устроена гарантия?",
    a: "Гарантия 1 год на фурнитуру/механизмы при корректной эксплуатации. Постгарантийный ремонт возможен платно.",
  },
];

const materialsAndHardwareItems = {
    facades: [
        "ЛДСП и пластик",
        "МДФ",
        "Акрил",
        "Шпонированные панели",
        "Массив",
    ],
    hardware: ["Hettich", "Boyard", "Blum (по желанию)"]
}
</script>

<template>
  <div class="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-50">
    <!-- Header -->
    <header class="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/90 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#top" class="flex items-center gap-3">
          <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-red-600 text-white font-black">L</div>
          <div>
            <div class="text-lg font-bold leading-none">Лиманж</div>
            <div class="text-[10px] leading-none text-neutral-500">кухни и корпусная мебель</div>
          </div>
        </a>
        <nav class="hidden gap-6 text-sm sm:flex">
          <a class="hover:text-red-600" href="#calc">Калькулятор</a>
          <a class="hover:text-red-600" href="#portfolio">Портфолио</a>
          <a class="hover:text-red-600" href="#process">Процесс</a>
          <a class="hover:text-red-600" href="#faq">FAQ</a>
          <a class="hover:text-red-600" href="#contacts">Контакты</a>
        </nav>
        <a href="#contacts" class="inline-flex items-center rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700">
          Рассчитать проект
        </a>
      </div>
    </header>

    <!-- Hero -->
    <section id="top" class="relative overflow-hidden bg-neutral-50 py-16 sm:py-24 dark:bg-neutral-900/40">
      <div class="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:grid-cols-2">
        <div>
          <span class="inline-flex items-center rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-600">
            Ростов-на-Дону и область
          </span>
          <h1 class="mt-4 text-3xl font-black leading-tight sm:text-5xl">
            Кухни и корпусная мебель <span class="text-red-600">любой нестандарт</span>
          </h1>
          <p class="mt-4 text-base text-neutral-700 dark:text-neutral-300">
            Собственное производство, широкий выбор материалов и фурнитуры. Рассчитаем стоимость по вашим размерам и подберём альтернативы под бюджет и сроки.
          </p>
          <ul class="mt-6 grid gap-2 text-sm text-neutral-700 dark:text-neutral-300 sm:grid-cols-2">
            <li class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-red-600"/>26 лет на рынке</li>
            <li class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-red-600"/>Собственное производство &gt; 20 лет</li>
            <li class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-red-600"/>Срок изготовления обычно 3–4 недели</li>
            <li class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-red-600"/>Нестандартные размеры и решения</li>
          </ul>
          <div class="mt-8 flex gap-3">
            <a href="#calc" class="inline-flex items-center rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-red-700">Быстрый расчёт</a>
            <a href="#portfolio" class="inline-flex items-center rounded-xl border border-neutral-300 px-5 py-3 text-sm font-semibold hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-600">Посмотреть работы</a>
          </div>
          <p class="mt-3 text-xs text-neutral-500">Есть модульные решения — как правило дешевле на ~30%.</p>
        </div>
        <div class="relative">
          <div class="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-neutral-100 to-white shadow-sm dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-950">
            <!-- Заглушка под слайдер/фото проектов -->
            <div class="flex h-full w-full items-center justify-center">
              <div class="text-center">
                <div class="text-sm text-neutral-500">Здесь будет слайдер портфолио</div>
                <div class="mt-1 text-xs text-neutral-400">(фото из Telegram / 2ГИС / кейсы)</div>
              </div>
            </div>
          </div>
          <div class="pointer-events-none absolute inset-0 -z-10 opacity-30 blur-3xl" aria-hidden>
            <div class="h-full w-full bg-[radial-gradient(600px_200px_at_80%_20%,#ef4444,transparent_60%)]"/>
          </div>
        </div>
      </div>
    </section>

    <!-- Калькулятор -->
    <section id="calc" class="scroll-mt-24 py-16 sm:py-20">
      <div class="mx-auto max-w-7xl px-4">
        <div class="mb-3 text-xs uppercase tracking-widest text-red-600">Ориентировочный расчёт</div>
        <h2 class="text-2xl font-bold sm:text-3xl">Онлайн‑калькулятор</h2>
        <div class="mt-6 text-neutral-700 dark:text-neutral-300">
          <div class="grid gap-8 sm:grid-cols-2">
            <div class="space-y-4">
              <div>
                <label class="text-sm font-medium">Длина кухни (погонные метры, грубо)</label>
                <div class="mt-2 grid grid-cols-3 gap-2">
                  <button
                    v-for="m in ['3', '4', '5']"
                    :key="m"
                    @click="length = m"
                    :class="[
                      'rounded-xl border px-4 py-3 text-sm font-semibold',
                      length === m
                        ? 'border-red-600 bg-red-50 text-red-700 dark:bg-red-600/20 dark:text-red-200'
                        : 'border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-600'
                    ]"
                  >
                    {{ m }} м
                  </button>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="text-sm font-medium">Материал фасадов</label>
                  <select v-model="material" class="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900">
                    <option v-for="v in ['ЛДСП', 'МДФ', 'Акрил', 'Шпон', 'Массив']" :key="v">{{ v }}</option>
                  </select>
                </div>
                <div>
                  <label class="text-sm font-medium">Фурнитура</label>
                  <select v-model="hardware" class="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900">
                    <option v-for="v in ['Boyard', 'Hettich', 'Blum']" :key="v">{{ v }}</option>
                  </select>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="text-sm font-medium">Столешница</label>
                  <select v-model="worktop" class="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900">
                    <option v-for="v in ['Пластик', 'Камень']" :key="v">{{ v }}</option>
                  </select>
                </div>
                <label class="mt-7 inline-flex items-center gap-2 text-sm">
                  <input type="checkbox" v-model="rush" class="h-4 w-4 rounded border-neutral-300 text-red-600 focus:ring-red-600" />
                  Срочное изготовление
                </label>
              </div>

              <p class="text-xs text-neutral-500">
                * Расчёт ориентировочный и не является публичной офертой. Точная смета делается только после замера и согласования материалов/конструктива.
              </p>
            </div>

            <div class="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              <div class="text-sm text-neutral-500">Ваш ориентировочный бюджет</div>
              <div class="mt-4 text-3xl font-black tracking-tight">
                {{ currency(estimate.low) }} — {{ currency(estimate.high) }} ₽
              </div>
              <div class="mt-2 text-xs text-neutral-500">Средняя оценка: {{ currency(estimate.mid) }} ₽</div>
              <hr class="my-6 border-neutral-200 dark:border-neutral-800"/>
              <ul class="space-y-2 text-sm">
                <li class="flex items-center justify-between"><span>Длина</span><span class="font-semibold">{{ length }} м</span></li>
                <li class="flex items-center justify-between"><span>Материал</span><span class="font-semibold">{{ material }}</span></li>
                <li class="flex items-center justify-between"><span>Фурнитура</span><span class="font-semibold">{{ hardware }}</span></li>
                <li class="flex items-center justify-between"><span>Столешница</span><span class="font-semibold">{{ worktop }}</span></li>
                <li v-if="rush" class="flex items-center justify-between"><span>Срок</span><span class="font-semibold">ускоренное изготовление</span></li>
              </ul>
              <a href="#contacts" class="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:bg-red-700">Оставить заявку на точный расчёт</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Портфолио -->
    <section id="portfolio" class="scroll-mt-24 py-16 sm:py-20">
        <div class="mx-auto max-w-7xl px-4">
            <div class="mb-3 text-xs uppercase tracking-widest text-red-600">Фото реальных проектов</div>
            <h2 class="text-2xl font-bold sm:text-3xl">Портфолио</h2>
            <div class="mt-6 text-neutral-700 dark:text-neutral-300">
                <div class="grid gap-4 sm:grid-cols-3">
                    <div v-for="i in 6" :key="i" class="aspect-square overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
                        <div class="flex h-full items-center justify-center text-sm text-neutral-500">Фото проекта {{ i }}</div>
                    </div>
                </div>
                <p class="mt-4 text-xs text-neutral-500">Подтянем фото из Telegram/2ГИС и оформим кейсы «до/после».</p>
            </div>
        </div>
    </section>

    <!-- Материалы и фурнитура -->
    <section id="materials" class="scroll-mt-24 py-16 sm:py-20">
        <div class="mx-auto max-w-7xl px-4">
            <div class="mb-3 text-xs uppercase tracking-widest text-red-600">Выбор под задачи и бюджет</div>
            <h2 class="text-2xl font-bold sm:text-3xl">Материалы и фурнитура</h2>
            <div class="mt-6 text-neutral-700 dark:text-neutral-300">
                <div class="grid gap-6 sm:grid-cols-2">
                <div class="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
                    <h3 class="text-lg font-semibold">Фасады и корпуса</h3>
                    <ul class="mt-3 grid gap-2 text-sm text-neutral-700 dark:text-neutral-300 sm:grid-cols-2">
                        <li v-for="t in materialsAndHardwareItems.facades" :key="t" class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-red-600"/>{{t}}</li>
                    </ul>
                </div>
                <div class="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
                    <h3 class="text-lg font-semibold">Фурнитура</h3>
                    <ul class="mt-3 grid gap-2 text-sm text-neutral-700 dark:text-neutral-300 sm:grid-cols-2">
                        <li v-for="t in materialsAndHardwareItems.hardware" :key="t" class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-red-600"/>{{t}}</li>
                    </ul>
                    <p class="mt-3 text-xs text-neutral-500">Столешницы закупаем у партнёров: пластик, камень.</p>
                </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Процесс -->
    <section id="process" class="scroll-mt-24 py-16 sm:py-20">
        <div class="mx-auto max-w-7xl px-4">
            <div class="mb-3 text-xs uppercase tracking-widest text-red-600">Прозрачно и по шагам</div>
            <h2 class="text-2xl font-bold sm:text-3xl">Как мы работаем</h2>
            <div class="mt-6 text-neutral-700 dark:text-neutral-300">
                <ol class="grid list-decimal gap-4 pl-5 text-sm sm:grid-cols-2">
                <li>Первичный контакт и ориентировочный расчёт по вашим размерам.</li>
                <li>Если есть чужой проект — посчитаем в разных материалах и подберём альтернативы.</li>
                <li>Встреча в салоне или вызов замерщика <em>(платно, но зачтётся в заказ)</em>.</li>
                <li>После замера: эскизы/чертежи, согласование материалов и фурнитуры, финальная смета.</li>
                <li>Договор и предоплата 60–70%.</li>
                <li>Производство ~1 месяц (обычно 3–4 недели).</li>
                <li>Созвон о готовности, доставка/монтаж. Остаток 30–40% до привоза/монтажа.</li>
                <li>Монтаж/сборка.</li>
                <li>Приёмка и акт. Быстрая довозка/устранение недочётов при необходимости.</li>
                </ol>
                <div class="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-xs text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900/40 dark:text-neutral-300">
                Гарантия 1 год на фурнитуру/механизмы (если поломка не из‑за неправильной эксплуатации). Постгарантийный ремонт возможен на платной основе.
                </div>
            </div>
        </div>
    </section>

    <!-- Сравнение позиционирования -->
    <section id="why" class="scroll-mt-24 py-16 sm:py-20">
        <div class="mx-auto max-w-7xl px-4">
            <div class="mb-3 text-xs uppercase tracking-widest text-red-600">Позиционирование</div>
            <h2 class="text-2xl font-bold sm:text-3xl">Почему нас выбирают</h2>
            <div class="mt-6 text-neutral-700 dark:text-neutral-300">
                <div class="grid gap-6 sm:grid-cols-3">
                <div class="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
                    <h3 class="font-semibold">Индивидуально</h3>
                    <p class="mt-2 text-sm">Нестандартные размеры и конструкции, под особенности помещения. Согласуем быстро, предложим варианты «эксклюзив/дешевле/быстрее».</p>
                </div>
                <div class="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
                    <h3 class="font-semibold">Контроль качества</h3>
                    <p class="mt-2 text-sm">Собственное производство: фрезеровка, распил, кромкование. Готовы оперативно дорабатывать.</p>
                </div>
                <div class="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
                    <h3 class="font-semibold">Цена и сроки</h3>
                    <p class="mt-2 text-sm">Часто дешевле сетевых фабрик при сопоставимом качестве. Сроки обычно 3–4 недели, возможна ускоренная сборка.</p>
                </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="scroll-mt-24 py-16 sm:py-20">
        <div class="mx-auto max-w-7xl px-4">
            <div class="mb-3 text-xs uppercase tracking-widest text-red-600">FAQ</div>
            <h2 class="text-2xl font-bold sm:text-3xl">Вопросы и ответы</h2>
            <div class="mt-6 text-neutral-700 dark:text-neutral-300">
                <div class="grid gap-4 sm:grid-cols-2">
                    <details v-for="(item, i) in faqItems" :key="i" class="group rounded-2xl border border-neutral-200 p-4 open:bg-neutral-50 dark:border-neutral-800 dark:open:bg-neutral-900/40">
                        <summary class="cursor-pointer list-none text-sm font-semibold">
                            <span class="mr-2 inline-block rounded-md bg-red-600/10 px-2 py-0.5 text-xs font-medium text-red-700">{{ String(i + 1).padStart(2, "0") }}</span>
                            {{ item.q }}
                        </summary>
                        <p class="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{{ item.a }}</p>
                    </details>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA + Контакты -->
    <section id="contacts" class="scroll-mt-24 py-16 sm:py-20">
        <div class="mx-auto max-w-7xl px-4">
            <div class="mb-3 text-xs uppercase tracking-widest text-red-600">Заявка на расчёт</div>
            <h2 class="text-2xl font-bold sm:text-3xl">Связаться с нами</h2>
            <div class="mt-6 text-neutral-700 dark:text-neutral-300">
                <div class="grid gap-8 sm:grid-cols-2">
                <form class="space-y-4 rounded-2xl border border-neutral-200 p-6 shadow-sm dark:border-neutral-800">
                    <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="text-sm font-medium">Имя</label>
                        <input required class="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-600/30 dark:border-neutral-700 dark:bg-neutral-900" placeholder="Как к вам обращаться"/>
                    </div>
                    <div>
                        <label class="text-sm font-medium">Телефон</label>
                        <input required class="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-600/30 dark:border-neutral-700 dark:bg-neutral-900" placeholder="+7 (___) ___‑__‑__"/>
                    </div>
                    </div>
                    <div>
                    <label class="text-sm font-medium">Комментарий</label>
                    <textarea class="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-600/30 dark:border-neutral-700 dark:bg-neutral-900" rows="4" placeholder="Кратко опишите задачу и размеры (если есть)"></textarea>
                    </div>
                    <label class="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                    <input type="checkbox" class="mt-0.5 h-4 w-4 rounded border-neutral-300 text-red-600 focus:ring-red-600"/>
                    Согласен(на) на обработку персональных данных и публикацию фото после монтажа (по доп. согласованию)
                    </label>
                    <button type="button" class="inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:bg-red-700">Отправить заявку</button>
                    <p class="text-xs text-neutral-500">Нажимая кнопку, вы даёте согласие на обработку персональных данных. Это не публичная оферта.</p>
                </form>

                <div class="space-y-4">
                    <div class="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
                    <h3 class="font-semibold">Салон</h3>
                    <p class="mt-2 text-sm text-neutral-700 dark:text-neutral-300">Ростов‑на‑Дону, адрес уточняется</p>
                    <p class="text-sm text-neutral-700 dark:text-neutral-300">График: ориентировочно 10:00–19:00, возможны индивидуальные договорённости</p>
                    </div>
                    <div class="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
                    <h3 class="font-semibold">Телеграм и отзывы</h3>
                    <p class="mt-2 text-sm text-neutral-700 dark:text-neutral-300">Пришлите ссылку на Telegram‑группу — подключим слайдер и кейсы «до/после». Отзывы соберём на сайте и в Avito.</p>
                    </div>
                    <div class="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
                    <h3 class="font-semibold">Карта</h3>
                    <div class="mt-2 aspect-[4/3] w-full rounded-xl bg-neutral-100 dark:bg-neutral-900"/>
                    <p class="mt-2 text-xs text-neutral-500">Подключим виджет Яндекс.Карт для лучшей локальной видимости.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-neutral-200 py-10 text-sm dark:border-neutral-800">
      <div class="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center">
        <div>
          <div class="font-semibold">© {{ new Date().getFullYear() }} «Лиманж»</div>
          <div class="text-xs text-neutral-500">Кухни и корпусная мебель на заказ • Ростов‑на‑Дону</div>
        </div>
        <div class="text-xs text-neutral-500">
          Цвета бренда: красный / чёрный / белый • Избегаем синего и зелёного
        </div>
      </div>
    </footer>
  </div>
</template>
