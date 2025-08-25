import React from "react";
import type { EstimateResult } from "@/lib/calculator";

function Line({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="text-gray-500">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}

export default function ResultCard({ result }: { result: EstimateResult }) {
  const fmt = (n: number) => new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 }).format(n);
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="text-sm text-gray-500">Ориентировочная стоимость</div>
          <div className="text-2xl font-bold mt-1">{fmt(result.min)} — {fmt(result.max)}</div>
          <div className="mt-3 text-sm text-gray-600">
            Включено: каркасы, фасады, столешница, базовая фурнитура.
          </div>
          <div className="text-sm text-gray-600">
            Отдельно: техника, сантехника, фартук (если выбран), нестандартные элементы.
          </div>
        </div>
        <div className="grid gap-2 text-sm">
          <Line label="Срок изготовления" value={result.term} />
          <Line label="Конфигурация" value={result.config} />
          <Line label="Материалы" value={result.materials} />
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        * Точный расчёт после бесплатного замера и уточнения материалов.
      </div>
    </div>
  );
}
