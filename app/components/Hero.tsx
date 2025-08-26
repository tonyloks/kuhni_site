import React from "react";

function Bullet() {
  return (
    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-600 inline-block" />
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-gray-200 p-3">
      <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-white to-red-50">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Левая колонка — текст */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Кухни на заказ со скидкой до <span className="text-red-600">−40%</span>
          </h1>
          <p className="mt-3 text-lg text-gray-700">
            Напрямую от производителя в Ростове‑на‑Дону
          </p>

          <ul className="mt-6 space-y-2 text-gray-800">
            <li className="flex items-start gap-3">
              <Bullet />
              <span>Гарантия на фурнитуру и дефекты</span>
            </li>
            <li className="flex items-start gap-3">
              <Bullet />
              <span>Срок изготовления от 3‑х недель</span>
            </li>
            <li className="flex items-start gap-3">
              <Bullet />
              <span>Бесплатный замер</span>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#calc" className="inline-flex items-center rounded-xl bg-red-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-red-700 transition">
              Получить расчёт
            </a>
            <a href="#contacts" className="inline-flex items-center rounded-xl border border-gray-300 px-5 py-3 font-semibold hover:border-red-300 hover:text-red-700 transition">
              Записаться на замер
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-500">Работаем по Ростову и области</p>
        </div>

        {/* Правая колонка — декоративная карточка */}
        <div className="relative">
          <div className="absolute -inset-8 -z-10 bg-red-100/50 blur-2xl rounded-full" />
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-red-100 via-white to-red-50" />
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <Stat label="Нестандарт" value="любой" />
              <Stat label="Срок" value="от 3–5 нед." />
              <Stat label="Гарантия" value="1 год" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
