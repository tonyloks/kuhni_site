import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500 flex flex-wrap items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} «Ле‑манш». Кухни и корпусная мебель на заказ.</div>
        <a href="#calc" className="text-red-700 hover:underline">Рассчитать стоимость</a>
      </div>
    </footer>
  );
}
