"use client";

import React, { useMemo, useRef, useState } from "react";
import Section from "./calculator/Section";
import Choice from "./calculator/Choice";
import LengthInput from "./calculator/LengthInput";
import Select from "./calculator/Select";
import ResultCard from "./calculator/ResultCard";
import {
  type FormState,
  type EstimateResult,
  getDefaultForm,
  estimatePrice,
  toNumber,
  isAllowedFile,
  type Facade,
  type Countertop,
  type Hardware,
  type Backsplash,
  type Delivery,
  type Term,
} from "@/lib/calculator";


export default function Calculator() {
  const [form, setForm] = useState<FormState>(getDefaultForm());
  const [result, setResult] = useState<EstimateResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const totalLength = useMemo(() => {
    const a = toNumber(form.lenA);
    const b = toNumber(form.lenB);
    const c = toNumber(form.lenC);
    return (a || 0) + (b || 0) + (c || 0);
  }, [form.lenA, form.lenB, form.lenC]);

  const onChange = (patch: Partial<FormState>) => setForm((prev) => ({ ...prev, ...patch }));

  function handleCalcSubmit(e: React.FormEvent) {
    e.preventDefault();
    const est = estimatePrice(form);
    setResult(est);
    // Прокрутка к блоку результата
    const el = document.getElementById("calc-result");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleDraftSubmit() {
    // Псевдо‑отправка эскиза (валидация только типа/размера)
    const file = fileInputRef.current?.files?.[0];
    if (!file) {
      alert("Прикрепите файл (PNG/JPG/PDF до 10 МБ)");
      return;
    }
    if (!isAllowedFile(file)) {
      alert("Допустимы: PNG, JPG, PDF. Размер до 10 МБ.");
      return;
    }
    alert("Эскиз прикреплён. Мы свяжемся с вами для точного расчёта.");
  }

  return (
    <section id="calc" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Быстрый предварительный расчёт</h2>
        <p className="mt-2 text-gray-600">
          Ответим в течение дня и пришлём ориентировочную смету по нескольким вариантам.
        </p>

        <form onSubmit={handleCalcSubmit} className="mt-8 grid gap-8">
          {/* 1) Планировка и размеры */}
          <Section title="1) Планировка и размеры">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Форма</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(["Прямая", "Угловая", "П-образная", "С островом"] as const).map((v) => (
                    <Choice key={v} active={form.shape === v} onClick={() => onChange({ shape: v })}>
                      {v}
                    </Choice>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Высота потолка, см</label>
                <input
                  type="number"
                  inputMode="numeric"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2"
                  placeholder="например, 270"
                  value={form.ceilingHeight}
                  onChange={(e) => onChange({ ceilingHeight: e.target.value })}
                />
                <div className="mt-2 flex items-center gap-2">
                  <input
                    id="toCeiling"
                    type="checkbox"
                    checked={form.toCeiling}
                    onChange={(e) => onChange({ toCeiling: e.target.checked })}
                  />
                  <label htmlFor="toCeiling" className="text-sm">до потолка</label>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Размер(ы), м</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <LengthInput label="Длина A" value={form.lenA} onChange={(v) => onChange({ lenA: v })} />
                  <LengthInput label="Длина B" value={form.lenB} onChange={(v) => onChange({ lenB: v })} />
                  <LengthInput label="Длина C" value={form.lenC} onChange={(v) => onChange({ lenC: v })} />
                </div>
                <p className="mt-2 text-sm text-gray-500">Суммарная длина: <b>{totalLength || 0}</b> м</p>
              </div>
            </div>
          </Section>

          {/* 2) Материалы и фурнитура */}
          <Section title="2) Материалы и фурнитура">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Фасады</label>
                <Select
                  value={form.facade}
                  onChange={(v) => onChange({ facade: v as Facade })}
                  options={["ЛДСП","МДФ плёнка","МДФ эмаль","Акрил","Шпон","Массив"]}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Столешница</label>
                <Select
                  value={form.countertop}
                  onChange={(v) => onChange({ countertop: v as Countertop })}
                  options={["ЛДСП","HPL","Искусственный камень","Кварц"]}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Фурнитура</label>
                <Select
                  value={form.hardware}
                  onChange={(v) => onChange({ hardware: v as Hardware })}
                  options={["Бюджет","Стандарт","Премиум"]}
                />
                <div className="mt-2 flex items-center gap-2">
                  <input
                    id="softClose"
                    type="checkbox"
                    checked={form.softClose}
                    onChange={(e) => onChange({ softClose: e.target.checked })}
                  />
                  <label htmlFor="softClose" className="text-sm">Петли/направляющие с доводчиками</label>
                </div>
              </div>
            </div>
          </Section>

          {/* 3) Комплектация и опции */}
          <Section title="3) Комплектация и опции">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Встраиваемая техника, ед.</label>
                <input
                  type="number"
                  min={0}
                  className="w-full rounded-xl border border-gray-300 px-3 py-2"
                  value={form.appliances}
                  onChange={(e) => onChange({ appliances: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Верхние шкафы</label>
                <div className="grid grid-cols-2 gap-2">
                  <Choice active={form.upperCabinets === true} onClick={() => onChange({ upperCabinets: true })}>есть</Choice>
                  <Choice active={form.upperCabinets === false} onClick={() => onChange({ upperCabinets: false })}>нет</Choice>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <input
                    id="lighting"
                    type="checkbox"
                    checked={form.lighting}
                    onChange={(e) => onChange({ lighting: e.target.checked })}
                  />
                  <label htmlFor="lighting" className="text-sm">Подсветка</label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Фартук</label>
                <Select
                  value={form.backsplash}
                  onChange={(v) => onChange({ backsplash: v as Backsplash })}
                  options={["Нет","Плитка","Стекло","HPL"]}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Установка</label>
                <Select
                  value={form.delivery}
                  onChange={(v) => onChange({ delivery: v as Delivery })}
                  options={["Доставка+монтаж","Только доставка","Самовывоз"]}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Срок</label>
                <Select
                  value={form.term}
                  onChange={(v) => onChange({ term: v as Term })}
                  options={["Обычный (от 3–5 недель)","Ускоренный (+ к бюджету)"]}
                />
              </div>
            </div>
          </Section>

          {/* 4) Контакты и примечания */}
          <Section title="4) Контакты и примечания" id="contacts">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Имя</label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2"
                  value={form.name}
                  onChange={(e) => onChange({ name: e.target.value })}
                  placeholder="Иван"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Телефон/Telegram</label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2"
                  value={form.contact}
                  onChange={(e) => onChange({ contact: e.target.value })}
                  placeholder="+7 … или @username"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Комментарий</label>
                <textarea
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 min-h-24"
                  value={form.comment}
                  onChange={(e) => onChange({ comment: e.target.value })}
                  placeholder="Опишите пожелания, материалы, цвета и т. п."
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Эскиз (PNG/JPG/PDF до 10 МБ)</label>
                <input ref={fileInputRef} type="file" accept="image/png,image/jpeg,application/pdf" className="block w-full text-sm" />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button type="submit" id="calc-submit" className="inline-flex items-center rounded-xl bg-red-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-red-700 transition">
                Рассчитать стоимость
              </button>
              <button type="button" onClick={handleDraftSubmit} className="inline-flex items-center rounded-xl border border-gray-300 px-5 py-3 font-semibold hover:border-red-300 hover:text-red-700 transition">
                Отправить эскиз на расчёт
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Онлайн‑калькулятор даёт ориентировочную цену и <b>не является публичной офертой</b>. Точный расчёт — после бесплатного замера и уточнения материалов/фурнитуры.
            </p>
          </Section>
        </form>

        {/* Результат */}
        <div id="calc-result" className="mt-10">
          {result ? (
            <ResultCard result={result} />
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-300 p-6 text-gray-500">
              Результат появится здесь после отправки формы.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
