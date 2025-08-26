// -------------------------
// Модель данных + расчёт
// -------------------------

export type Shape = "Прямая" | "Угловая" | "П-образная" | "С островом";
export type Facade = "ЛДСП" | "МДФ плёнка" | "МДФ эмаль" | "Акрил" | "Шпон" | "Массив";
export type Countertop = "ЛДСП" | "HPL" | "Искусственный камень" | "Кварц";
export type Hardware = "Бюджет" | "Стандарт" | "Премиум";
export type Backsplash = "Нет" | "Плитка" | "Стекло" | "HPL";
export type Delivery = "Доставка+монтаж" | "Только доставка" | "Самовывоз";
export type Term = "Обычный (от 3–5 недель)" | "Ускоренный (+ к бюджету)";

export type FormState = {
  // 1) Планировка
  shape: Shape;
  lenA: string;
  lenB: string;
  lenC: string;
  ceilingHeight: string;
  toCeiling: boolean;
  // 2) Материалы
  facade: Facade;
  countertop: Countertop;
  hardware: Hardware;
  softClose: boolean;
  // 3) Опции
  appliances: string; // count
  upperCabinets: boolean; // есть/нет
  lighting: boolean;
  backsplash: Backsplash;
  delivery: Delivery;
  term: Term;
  // 4) Контакты
  name: string;
  contact: string;
  comment: string;
};

export type EstimateResult = {
  min: number;
  max: number;
  term: string;
  config: string;
  materials: string;
};

export function getDefaultForm(): FormState {
  return {
    shape: "Прямая",
    lenA: "3",
    lenB: "",
    lenC: "",
    ceilingHeight: "270",
    toCeiling: false,
    facade: "МДФ плёнка",
    countertop: "ЛДСП",
    hardware: "Стандарт",
    softClose: true,
    appliances: "3",
    upperCabinets: true,
    lighting: true,
    backsplash: "Плитка",
    delivery: "Доставка+монтаж",
    term: "Обычный (от 3–5 недель)",
    name: "",
    contact: "",
    comment: "",
  };
}

export function toNumber(x: string) {
  const n = parseFloat(x);
  return Number.isFinite(n) ? n : 0;
}

export function isAllowedFile(file: File) {
  const okType = ["image/png", "image/jpeg", "application/pdf"].includes(file.type);
  const okSize = file.size <= 10 * 1024 * 1024; // 10 MB
  return okType && okSize;
}

export function estimatePrice(f: FormState): EstimateResult {
  // Суммарная длина
  const L = Math.max(0, toNumber(f.lenA)) + Math.max(0, toNumber(f.lenB)) + Math.max(0, toNumber(f.lenC));
  const length = Math.max(L, 2.0); // минимальная база, чтобы не было нулей

  // 1) База по фасадам (за пог. метр) — диапазон
  const facadeBase: Record<Facade, [number, number]> = {
    "ЛДСП": [18000, 22000],
    "МДФ плёнка": [22000, 28000],
    "МДФ эмаль": [28000, 36000],
    "Акрил": [34000, 42000],
    "Шпон": [36000, 46000],
    "Массив": [40000, 55000],
  };

  // 2) Столешница (добавка за пог. метр)
  const topAdd: Record<Countertop, [number, number]> = {
    "ЛДСП": [3000, 5000],
    "HPL": [6000, 9000],
    "Искусственный камень": [16000, 22000],
    "Кварц": [22000, 30000],
  };

  // 3) Фурнитура — множитель
  const hardwareK: Record<Hardware, number> = {
    "Бюджет": 1.0,
    "Стандарт": 1.15,
    "Премиум": 1.35,
  };

  // 4) Форма — множитель
  const shapeK: Record<Shape, number> = {
    "Прямая": 1.0,
    "Угловая": 1.05,
    "П-образная": 1.1,
    "С островом": 1.15,
  };

  // 5) Верхние шкафы — доля от базы
  const uppersK = f.upperCabinets ? 1.35 : 1.0; // +35% если верх присутствует

  // 6) До потолка — надбавка
  const toCeilingK = f.toCeiling ? 1.08 : 1.0; // +8%

  // 7) Подсветка — фикс добавка
  const lightingAdd: [number, number] = f.lighting ? [6000, 10000] : [0, 0];

  // 8) Фартук
  const backsplashAdd: Record<Backsplash, [number, number]> = {
    "Нет": [0, 0],
    "Плитка": [8000, 15000],
    "Стекло": [15000, 25000],
    "HPL": [10000, 18000],
  };

  // 9) Срок — множитель
  const termK = f.term.includes("Ускоренный") ? 1.1 : 1.0;

  // 10) Софт‑клоуз (если не премиум, то +5–8%)
  const softK = f.softClose && f.hardware !== "Премиум" ? 1.06 : 1.0;

  // Расчёт за погонный метр + надбавки
  const [fbMin, fbMax] = facadeBase[f.facade];
  const [taMin, taMax] = topAdd[f.countertop];

  let min = (fbMin + taMin) * length;
  let max = (fbMax + taMax) * length;

  const K = hardwareK[f.hardware] * shapeK[f.shape] * uppersK * toCeilingK * termK * softK;
  min *= K;
  max *= K;

  // Добавки за опции
  const [baMin, baMax] = backsplashAdd[f.backsplash];
  min += lightingAdd[0] + baMin;
  max += lightingAdd[1] + baMax;

  // Лёгкая корректировка по числу техники (как сложность, без стоимости самой техники)
  const appl = Math.max(0, Math.floor(toNumber(f.appliances)));
  min += appl * 1500;
  max += appl * 3000;

  // Калибровка нижней границы под «средний» уровень из брифа
  min = Math.max(min, 70000); // «бюджетная» ~70–80k

  // Итоговые строки
  const materials = `${f.facade}, столешница: ${f.countertop}, фурнитура: ${f.hardware}${f.softClose ? ", доводчики" : ""}`;
  const config = `${f.shape.toLowerCase()}, ${length.toFixed(1)} м${f.upperCabinets ? ", верхние шкафы" : ""}${f.toCeiling ? ", до потолка" : ""}${f.lighting ? ", подсветка" : ""}${f.backsplash !== "Нет" ? ", фартук — " + f.backsplash.toLowerCase() : ""}`;
  const term = f.term.includes("Ускоренный") ? "от 1–3 недель (по согласованию)" : "от 3–5 недель";

  return { min: Math.round(min), max: Math.round(max), term, config, materials };
}
