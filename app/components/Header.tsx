import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-red-600" />
          <span className="font-semibold tracking-wide">Ле‑манш</span>
        </a>
        <nav className="hidden sm:flex items-center gap-4">
          <a href="#hero" className="hover:text-red-600">Главная</a>
          <a href="#calc" className="hover:text-red-600">Калькулятор</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#calc" className="inline-flex items-center rounded-xl bg-red-600 px-4 py-2 text-white font-medium hover:bg-red-700 transition">Рассчитать</a>
        </div>
      </div>
    </header>
  );
}
