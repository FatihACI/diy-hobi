// Balıkçılık kategorisi (Altın 40 dışı 18 proje): adım sahneleri (viewBox 0 0 240 150).
// Adım sayısı ve sırası src/data/ek/balikcilik.ts içeriğiyle birebir eşleşir.
import { Cizgi, Cizim, daire, kutu, yuvarla as r } from "../arac";
import {
  alev,
  bant,
  bez,
  bicak,
  carpi,
  cimbiz,
  damla,
  damlalik,
  firca,
  firdondu,
  igne,
  kalem,
  kase,
  kursun,
  makas,
  matkap,
  ok,
  onay,
  parmak,
  saat,
  samandira,
  testere,
  yayOk,
  ZEMIN,
  zimpara,
} from "./parca";

// ---------- Ortak parçalar ----------
const SU = (y = 60): Cizgi => ({ d: `M0 ${y} Q30 ${y - 4} 60 ${y} T120 ${y} T180 ${y} T240 ${y}`, w: 1.2 });
// Kamış (yatay): kabza sol (x1) → uç sağ (x2), y
const kamis = (x1: number, x2: number, y: number, halka = true): Cizgi[] => {
  const h: string[] = [];
  if (halka)
    for (let i = 0; i < 4; i++) {
      const hx = x1 + 70 + i * ((x2 - x1 - 80) / 4);
      h.push(daire(r(hx), y + 6, 3 - i * 0.4));
    }
  return [
    {
      d: `M${x1} ${y - 4} L${x1 + 50} ${y - 3} L${x2} ${y - 0.6} L${x2} ${y + 0.6} L${x1 + 50} ${y + 3} L${x1} ${y + 4} Z`,
      w: 1.4,
      dolgu: true,
    },
    { d: kutu(x1, y - 5, 30, 10), w: 1.5, dolgu: true },
    ...(halka ? [{ d: h.join(" "), w: 1 }] : []),
  ];
};
// Spin makara (yandan): ayak üstü (x,y) kamışa bağlanır, gövde aşağıda
const makara = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x} ${y + 12}`, w: 2.4 },
  { d: daire(x, y + 26, 14), w: 1.8, dolgu: true },
  { d: kutu(x + 12, y + 18, 18, 16), w: 1.6, dolgu: true },
  { d: `M${x + 30} ${y + 22} L${x + 34} ${y + 22} L${x + 34} ${y + 30} L${x + 30} ${y + 30}`, w: 1.4 },
  { d: `M${x - 14} ${y + 26} L${x - 26} ${y + 26} L${x - 26} ${y + 36}`, w: 1.8 },
  { d: daire(x - 26, y + 39, 3), w: 1.2, dolgu: true },
];
// Balık silüeti: burun sol (x), orta y, boy
const balik = (x: number, y: number, boy = 90, yon = 1): string => {
  const b = boy,
    h = boy * 0.32;
  const X = (d: number) => r(x + yon * d);
  return `M${X(0)} ${y} Q${X(b * 0.3)} ${r(y - h)} ${X(b * 0.72)} ${r(y - h * 0.3)} L${X(b)} ${r(y - h * 0.6)} L${X(b * 0.94)} ${y} L${X(b)} ${r(y + h * 0.6)} L${X(b * 0.72)} ${r(y + h * 0.3)} Q${X(b * 0.3)} ${r(y + h)} ${X(0)} ${y} Z`;
};
const balikGoz = (x: number, y: number, boy = 90, yon = 1): Cizgi => ({
  d: daire(r(x + yon * boy * 0.14), r(y - boy * 0.05), 2.4),
  w: 1.1,
  dolgu: true,
});
// Pense: çene ucu (x,y), saplar sağa
const pense = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x + 18} ${y - 4} L${x + 18} ${y + 4} Z`, w: 1.4, dolgu: true },
  {
    d: `M${x + 18} ${y - 4} Q${x + 36} ${y - 8} ${x + 54} ${y - 16} M${x + 18} ${y + 4} Q${x + 36} ${y + 8} ${x + 54} ${y + 16}`,
    w: 3,
  },
  { d: daire(x + 20, y, 2.4), w: 1.1, dolgu: true },
];
// Armut kurşun: üst (x,y)
const armutKursun = (x: number, y: number, s = 1): Cizgi => ({
  d: `M${x} ${y} Q${r(x + 8 * s)} ${r(y + 12 * s)} ${r(x + 6 * s)} ${r(y + 18 * s)} Q${x} ${r(y + 22 * s)} ${r(x - 6 * s)} ${r(y + 18 * s)} Q${r(x - 8 * s)} ${r(y + 12 * s)} ${x} ${y} Z`,
  w: 1.4,
  dolgu: true,
});
// Üçlü iğne: göz üst (x,y)
const ucluIgne = (x: number, y: number, s = 1): Cizgi => ({
  d: `M${x} ${y} L${x} ${r(y + 12 * s)} M${x} ${r(y + 12 * s)} Q${r(x - 8 * s)} ${r(y + 14 * s)} ${r(x - 8 * s)} ${r(y + 6 * s)} M${x} ${r(y + 12 * s)} Q${r(x + 8 * s)} ${r(y + 14 * s)} ${r(x + 8 * s)} ${r(y + 6 * s)} M${x} ${r(y + 12 * s)} L${x} ${r(y + 18 * s)} ${daire(x, r(y - 2 * s), 2 * s)}`,
  w: 1.1,
});
// Kepçe: halka merkezi (cx,cy), sap sağ üste
const kepce = (cx: number, cy: number): Cizgi[] => [
  { d: daire(cx, cy, 30, 10), w: 1.8 },
  { d: `M${cx - 30} ${cy} Q${cx - 18} ${cy + 40} ${cx} ${cy + 44} Q${cx + 18} ${cy + 40} ${cx + 30} ${cy}`, w: 1 },
  {
    d: `M${cx - 16} ${cy + 8} L${cx - 10} ${cy + 36} M${cx} ${cy + 10} L${cx} ${cy + 42} M${cx + 16} ${cy + 8} L${cx + 10} ${cy + 36} M${cx - 26} ${cy + 18} L${cx + 26} ${cy + 18} M${cx - 18} ${cy + 30} L${cx + 18} ${cy + 30}`,
    w: 0.5,
  },
  { d: `M${cx + 28} ${cy - 4} L${cx + 80} ${cy - 40}`, w: 3 },
];
// Mengene (sinek bağlama): çene ucu (x,y)
const mengene = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x + 30} ${y + 18} L${x + 26} ${y + 24} L${x - 4} ${y + 6} Z`, w: 1.5, dolgu: true },
  { d: `M${x + 30} ${y + 22} L${x + 30} ${y + 76} M${x + 14} ${y + 76} L${x + 46} ${y + 76}`, w: 2.6 },
];
// Kova (yandan): ağız orta (cx,y)
const kova = (cx: number, y: number, en = 70, boy = 70): Cizgi[] => [
  {
    d: `M${cx - en / 2} ${y} L${cx + en / 2} ${y} L${cx + en * 0.4} ${y + boy} L${cx - en * 0.4} ${y + boy} Z`,
    w: 1.8,
    dolgu: true,
  },
  { d: `M${cx - en / 2} ${y + 4} Q${cx} ${y - 34} ${cx + en / 2} ${y + 4}`, w: 1 },
];
// Kaşık: hazne merkezi (cx,cy), sap sağa
const kasik = (cx: number, cy: number, sap = true): Cizgi[] => [
  { d: daire(cx, cy, 30, 16), w: 1.8, dolgu: true },
  ...(sap
    ? [
        {
          d: `M${cx + 30} ${cy - 2} L${cx + 100} ${cy - 4} L${cx + 100} ${cy + 4} L${cx + 30} ${cy + 2}`,
          w: 1.5,
          dolgu: true,
        },
      ]
    : []),
];
// Silikon yem (kurt): baş (x,y), sağa
const silikon = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y - 6} Q${x + 40} ${y - 8} ${x + 70} ${y - 4} Q${x + 84} ${y - 14} ${x + 92} ${y - 2} Q${x + 84} ${y + 10} ${x + 70} ${y + 4} Q${x + 40} ${y + 8} ${x} ${y + 6} Q${x - 6} ${y} ${x} ${y - 6} Z`,
  w: 1.6,
  dolgu: true,
});
// Jig başlıklı iğne: kurşun baş merkezi (x,y), şaft sağa
const jig = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x + 60} ${y} Q${x + 74} ${y} ${x + 74} ${y - 12} L${x + 70} ${y - 8}`, w: 1.5 },
  { d: daire(x, y, 7), w: 1.5, dolgu: true },
  { d: daire(x, y - 9, 2), w: 1 },
];
// Bölmeli kutu (üstten): sol üst (x,y)
const takimKutusu = (x: number, y: number, en = 150, boy = 80): Cizgi[] => [
  { d: kutu(x, y, en, boy), w: 1.8, dolgu: true },
  {
    d: `M${x + en / 3} ${y} L${x + en / 3} ${y + boy} M${x + (2 * en) / 3} ${y} L${x + (2 * en) / 3} ${y + boy} M${x} ${y + boy / 2} L${x + en} ${y + boy / 2}`,
    w: 1,
  },
];
// Misina iki bağlantı düğümü: orta (x,y)
const dugum = (x: number, y: number): Cizgi[] => [
  { d: `M20 ${y} L${x - 10} ${y}`, w: 2.4 },
  { d: `M${x + 10} ${y} L220 ${y}`, w: 1 },
  {
    d: `M${x - 10} ${y - 5} L${x - 6} ${y + 5} M${x - 6} ${y - 5} L${x - 2} ${y + 5} M${x - 2} ${y - 5} L${x + 2} ${y + 5} M${x + 2} ${y - 5} L${x + 6} ${y + 5} M${x + 6} ${y - 5} L${x + 10} ${y + 5}`,
    w: 1.1,
  },
];
// Tüy: sap ucu (x,y), yukarı doğru boy
const tuy = (x: number, y: number, boy = 100): Cizgi[] => [
  { d: `M${x} ${y} L${x} ${y - boy}`, w: 1.6 },
  {
    d: `M${x} ${y - boy * 0.3} Q${x - 22} ${y - boy * 0.6} ${x} ${y - boy} Q${x + 18} ${y - boy * 0.6} ${x} ${y - boy * 0.3}`,
    w: 1,
    dolgu: true,
  },
];
// Güneş: merkez (x,y)
const gunes = (x: number, y: number): Cizgi[] => [
  { d: daire(x, y, 7), w: 1.3 },
  {
    d: [0, 45, 90, 135, 180, 225, 270, 315]
      .map((a) => {
        const t = (a * Math.PI) / 180;
        return `M${r(x + Math.cos(t) * 10)} ${r(y + Math.sin(t) * 10)} L${r(x + Math.cos(t) * 14)} ${r(y + Math.sin(t) * 14)}`;
      })
      .join(" "),
    w: 1,
  },
];
const kabarcik = (x: number, y: number, n = 4): [number, number, number][] =>
  Array.from(
    { length: n },
    (_, i) => [x + (i % 2 ? 4 : -3), y - i * 9, 1.8 + (i % 2) * 0.6] as [number, number, number],
  );

// ---------- Spin takımı kurulumu ----------
export const SPIN_KURULUM_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...kamis(10, 230, 60), ...makara(60, 64), ok(60, 126, 60, 108)] },
  {
    cizgiler: [
      ZEMIN,
      ...kamis(10, 230, 50),
      ...makara(60, 54),
      { d: "M60 80 L80 56 L120 56 L160 56 L196 56 L230 52", w: 0.8, kesik: true },
      { d: "M40 90 Q40 70 60 66", w: 1.2 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(110, 80, 40, 24), w: 1.8, dolgu: true },
      { d: "M76 70 Q110 60 144 70 M74 80 Q110 70 146 80", w: 0.9 },
      { d: daire(150, 64, 7), w: 1.2 },
      { d: "M146 70 L200 40", w: 0.9 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...makara(70, 20),
      { d: daire(190, 110, 14, 18), w: 1.6, dolgu: true },
      { d: "M150 120 L230 100", w: 2 },
      { d: "M190 96 Q140 60 82 40", w: 0.9 },
      ...parmak(130, 66),
      yayOk(70, 46, 22, 0.4, 2.8),
    ],
  },
  { cizgiler: [ZEMIN, ...dugum(120, 76), { d: daire(60, 110, 20, 10), w: 1.6, dolgu: true }] },
  {
    cizgiler: [
      ZEMIN,
      { d: "M20 76 L120 76", w: 1 },
      ...firdondu(132, 76),
      { d: "M140 76 L150 76 Q158 76 158 84 L156 90", w: 1.2 },
      { d: balik(160, 92, 50), w: 1.6, dolgu: true },
      ucluIgne(190, 100, 0.8),
    ],
  },
];

// ---------- Ahşap sahte yem ----------
export const AHSAP_SAHTE_YEM_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 30, 120, 90), w: 1.2, dolgu: true },
      { d: balik(50, 76, 84), w: 1.3, kesik: true },
      ...kalem(150, 70),
      { d: kutu(170, 100, 50, 20), w: 1.6, dolgu: true },
    ],
  },
  {
    cizgiler: [ZEMIN, { d: balik(40, 80, 110), w: 1.8, dolgu: true }, ...bicak(150, 60), ...zimpara(160, 100, 40, 14)],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M30 74 Q63 46 110 66 L140 60 L134 74 Z", w: 1.8, dolgu: true },
      { d: "M30 92 Q63 120 110 100 L140 106 L134 92 Z", w: 1.8, dolgu: true },
      { d: "M40 82 L136 82", w: 0.8, kesik: true },
      ...testere(150, 82, 70),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M40 80 L170 80", w: 1.6 },
      { d: daire(36, 80, 5) + " " + daire(100, 88, 5) + " " + daire(174, 80, 5), w: 1.4 },
      ...pense(190, 50),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M30 80 Q63 108 110 88 L140 94 L134 80 Z", w: 1.8, dolgu: true },
      { d: "M36 82 L132 82", w: 1.4 },
      { d: daire(84, 90, 6), w: 1.3, dolgu: true },
      damla(180, 60, 1),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: balik(60, 80, 110), w: 1.8, dolgu: true },
      { d: "M62 86 L34 106 L44 112 L66 90 Z", w: 1.3, dolgu: true },
      damla(40, 60, 0.9),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: balik(40, 80, 120), w: 1.8, dolgu: true },
      balikGoz(40, 80, 120),
      { d: "M80 64 L80 96 M100 62 L100 98 M120 64 L120 96", w: 1.4 },
      ...firca(176, 60),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: balik(40, 80, 120), w: 1.8, dolgu: true },
      { d: "M60 70 Q90 62 120 70", w: 0.8 },
      yayOk(100, 80, 46, 3.6, 5.8),
      ...saat(200, 40, 12),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      kase(120, 70, 200, 60),
      SU(80),
      { d: balik(70, 78, 100), w: 1.8, dolgu: true },
      ucluIgne(100, 92),
      ucluIgne(160, 84),
    ],
  },
];

// ---------- Çapari takımı ----------
const capari = (x: number, y1: number, y2: number): Cizgi[] => {
  const k: string[] = [];
  for (let y = y1 + 14; y < y2 - 6; y += 16)
    k.push(`M${x} ${y} L${x + 14} ${y + 4} M${x + 14} ${y + 4} Q${x + 20} ${y + 10} ${x + 14} ${y + 12}`);
  return [
    { d: `M${x} ${y1} L${x} ${y2}`, w: 0.9 },
    { d: k.join(" "), w: 1 },
  ];
};
export const CAPARI_TAKIMI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, { d: "M110 0 L110 22", w: 0.9 }, ...firdondu(110, 32), ...capari(110, 42, 130)] },
  { cizgiler: [ZEMIN, ...capari(110, 0, 100), armutKursun(110, 104), ok(150, 120, 126, 116)] },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(40, 50, 60, 70), w: 1.6, dolgu: true },
      { d: "M50 60 L90 60 M50 74 L90 74 M50 88 L90 88 M50 102 L90 102", w: 0.9 },
      { d: "M100 74 Q140 70 180 90", w: 0.9 },
      ok(130, 50, 170, 60),
    ],
  },
  {
    cizgiler: [
      SU(30),
      ...capari(110, 0, 120),
      armutKursun(110, 118, 0.8),
      { d: balik(150, 80, 40, -1), w: 1.4, dolgu: true },
      ok(80, 40, 80, 20),
      ok(80, 60, 80, 80),
    ],
  },
];

// ---------- Metal kaşık sahte yem ----------
export const KASIK_YEM_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...kasik(80, 80), { d: "M112 64 L112 96", w: 1, kesik: true }, ...testere(100, 60, 60)] },
  {
    cizgiler: [
      ZEMIN,
      ...kasik(110, 90, false),
      { d: daire(84, 90, 2.4) + " " + daire(136, 90, 2.4), w: 1.2 },
      ...matkap(84, 70),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...kasik(100, 90, false),
      ...zimpara(120, 60, 40, 14),
      { d: "M88 86 L96 82 M100 92 L108 88", w: 0.8 },
    ],
  },
  {
    cizgiler: [ZEMIN, ...kasik(110, 80, false), ucluIgne(150, 80), ...firdondu(66, 80), { d: "M66 70 L30 60", w: 0.9 }],
  },
  {
    cizgiler: [
      SU(30),
      { d: "M0 90 L80 90", w: 0.9 },
      ...kasik(110, 90, false),
      { d: "M150 76 Q160 90 150 104 M162 80 Q170 90 162 100", w: 0.9 },
      ok(60, 120, 20, 120),
    ],
  },
];

// ---------- Jig başlığına silikon yem ----------
export const SILIKON_YEM_MONTAJ_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...jig(50, 60),
      silikon(44, 100),
      { d: "M120 90 L120 112", w: 1, kesik: true },
      ...kalem(150, 100),
    ],
  },
  { cizgiler: [ZEMIN, silikon(60, 90), ...jig(40, 90), ok(150, 60, 120, 80)] },
  {
    cizgiler: [
      ZEMIN,
      silikon(40, 50),
      ...jig(30, 50),
      onay(170, 40, 1),
      { d: "M40 110 Q80 96 110 112 Q140 128 160 108", w: 6 },
      carpi(190, 110, 8),
    ],
  },
  { cizgiler: [ZEMIN, silikon(60, 80), ...jig(40, 80), damla(40, 50, 1), onay(190, 50, 1)] },
];

// ---------- Suni sinek ----------
const sinekIgne = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y} L${x + 70} ${y} Q${x + 84} ${y} ${x + 84} ${y + 14} Q${x + 84} ${y + 26} ${x + 70} ${y + 24} ${daire(x - 4, y, 4)}`,
  w: 1.5,
});
export const SUNI_SINEK_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...mengene(60, 50), sinekIgne(20, 50)] },
  {
    cizgiler: [
      ZEMIN,
      ...mengene(60, 50),
      sinekIgne(20, 50),
      { d: "M30 46 L32 54 M36 46 L38 54 M42 46 L44 54 M48 46 L50 54 M54 46 L56 54", w: 1 },
      { d: "M44 54 L44 100", w: 0.7 },
      { d: kutu(38, 100, 12, 18), w: 1.4, dolgu: true },
    ],
  },
  {
    cizgiler: [ZEMIN, ...mengene(90, 50), sinekIgne(50, 50), { d: "M50 50 L10 40 M50 50 L8 48 M50 50 L12 56", w: 0.8 }],
  },
  {
    cizgiler: [
      ZEMIN,
      ...mengene(90, 50),
      sinekIgne(50, 50),
      { d: "M50 50 L10 40 M50 50 L8 48 M50 50 L12 56", w: 0.8 },
      { d: daire(80, 50, 30, 8), w: 1.6, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...mengene(90, 50),
      sinekIgne(50, 50),
      { d: daire(76, 50, 26, 8), w: 1.6, dolgu: true },
      { d: "M108 50 L110 30 M108 50 L118 34 M108 50 L100 32 M108 50 L110 70 M108 50 L118 66", w: 0.8 },
      damla(150, 40, 0.8),
    ],
  },
];

// ---------- Kamış halka değiştirme ----------
const kamisParca = (y = 80): Cizgi => ({
  d: `M10 ${y - 5} L230 ${y - 3} L230 ${y + 3} L10 ${y + 5} Z`,
  w: 1.5,
  dolgu: true,
});
const halka = (x: number, y = 80): Cizgi[] => [
  { d: `M${x - 20} ${y + 5} L${x + 20} ${y + 5} M${x - 8} ${y + 5} L${x} ${y + 22} L${x + 8} ${y + 5}`, w: 1.5 },
  { d: daire(x, y + 28, 7), w: 1.6 },
];
export const KAMIS_HALKA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      kamisParca(),
      ...halka(120),
      { d: "M100 74 L100 86 M106 74 L106 86 M134 74 L134 86 M140 74 L140 86", w: 1.4 },
      ...bicak(150, 70),
      alev(80, 128, 1.4),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      kamisParca(),
      ...halka(120),
      bant(100, 82),
      bant(140, 82),
      { d: "M40 120 L200 120", w: 0.8, kesik: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      kamisParca(),
      ...halka(120),
      {
        d: "M96 74 L96 86 M99 74 L99 86 M102 74 L102 86 M105 74 L105 86 M108 74 L108 86 M132 74 L132 86 M135 74 L135 86 M138 74 L138 86 M141 74 L141 86 M144 74 L144 86",
        w: 1,
      },
      { d: "M144 86 L170 120", w: 0.7 },
      { d: kutu(164, 120, 14, 12), w: 1.4, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      kamisParca(),
      ...halka(120),
      { d: "M96 74 L108 74 L108 86 L96 86 Z M132 74 L144 74 L144 86 L132 86 Z", w: 1.2, dolgu: true },
      ...firca(150, 66),
      yayOk(30, 80, 14, -1.4, 1.6),
    ],
  },
];

// ---------- Makara bakımı ----------
export const MAKARA_BAKIMI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...makara(110, 50),
      damla(96, 30, 0.8),
      damla(112, 22, 0.8),
      damla(128, 30, 0.8),
      carpi(190, 110, 9),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...makara(70, 50),
      { d: kutu(140, 66, 30, 22), w: 1.6, dolgu: true },
      ok(110, 76, 136, 76),
      ...firca(176, 110),
    ],
  },
  { cizgiler: [ZEMIN, ...makara(110, 60), ...damlalik(170, 60), damla(160, 76, 0.7), damla(150, 88, 0.6)] },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(90, 80, 26) + " " + daire(136, 80, 18), w: 1.6, dolgu: true },
      { d: daire(90, 80, 6) + " " + daire(136, 80, 5), w: 1 },
      ...firca(170, 60),
    ],
  },
  { cizgiler: [ZEMIN, { d: "M30 96 L190 96", w: 2.6 }, ...makara(90, 26), ...gunes(200, 30), carpi(200, 30, 14)] },
];

// ---------- Kurşunlu dip takımı ----------
export const DIP_TAKIMI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, { d: "M110 0 L110 100", w: 0.9 }, armutKursun(110, 100)] },
  {
    cizgiler: [
      ZEMIN,
      { d: "M110 0 L110 110", w: 0.9 },
      armutKursun(110, 110),
      ...firdondu(110, 80),
      ...firdondu(110, 40),
      { d: "M113 80 L150 84 M113 40 L150 44", w: 0.8 },
      ...igne(150, 76, 0.7),
      ...igne(150, 36, 0.7),
    ],
  },
  { cizgiler: [ZEMIN, { d: "M110 0 L110 30 M110 50 L110 120", w: 0.9 }, ...firdondu(110, 40), ok(150, 40, 122, 40)] },
  {
    cizgiler: [
      SU(30),
      ZEMIN,
      ...kamis(0, 90, 20, false),
      { d: "M90 20 L200 128", w: 0.9 },
      armutKursun(200, 126, 0.7),
      ok(80, 6, 92, 14),
    ],
  },
];

// ---------- Takım kutusu düzenleme ----------
export const TAKIM_KUTUSU_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...igne(50, 70),
      ...igne(70, 76),
      carpi(64, 110, 10),
      ...igne(150, 70),
      ...igne(170, 74),
      onay(164, 116, 1),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...igne(40, 40, 0.6),
      ...igne(60, 40, 0.8),
      ...igne(84, 40, 1),
      kursun(150, 50, 3),
      kursun(170, 50, 4),
      kursun(194, 50, 5),
      { d: balik(60, 110, 40), w: 1.4, dolgu: true },
      { d: balik(140, 110, 50), w: 1.4, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...takimKutusu(40, 40),
      { d: kutu(52, 46, 24, 8) + " " + kutu(102, 46, 24, 8), w: 1, dolgu: true },
      ...igne(60, 58, 0.5),
      kursun(116, 66, 4),
      kursun(126, 66, 4),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...takimKutusu(30, 40),
      { d: kutu(140, 90, 28, 20), w: 1.4, dolgu: true },
      damla(200, 60, 1),
      carpi(200, 84, 8),
    ],
  },
];

// ---------- Balık temizleme ve fileto ----------
const pulAyiklayici = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y - 6, 26, 12), w: 1.5, dolgu: true },
  {
    d: `M${x} ${y + 6} L${x + 3} ${y + 10} L${x + 6} ${y + 6} L${x + 9} ${y + 10} L${x + 12} ${y + 6} L${x + 15} ${y + 10} L${x + 18} ${y + 6} L${x + 21} ${y + 10} L${x + 24} ${y + 6}`,
    w: 1,
  },
  { d: `M${x + 26} ${y} L${x + 70} ${y - 8}`, w: 3 },
];
export const BALIK_FILETO_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 80, 180, 50), w: 1.8 },
      { d: balik(50, 80, 140), w: 1.8, dolgu: true },
      balikGoz(50, 80, 140),
    ],
    noktalar: [
      [60, 112, 3],
      [90, 116, 3],
      [130, 112, 3],
      [170, 118, 3],
      [190, 110, 3],
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: balik(30, 90, 150), w: 1.8, dolgu: true },
      balikGoz(30, 90, 150),
      ...pulAyiklayici(120, 60),
      ok(190, 40, 130, 40),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: balik(30, 90, 150), w: 1.8, dolgu: true },
      { d: "M56 104 L120 104", w: 1, kesik: true },
      ...bicak(124, 104),
      damla(60, 50, 0.8),
      damla(80, 40, 0.8),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: balik(30, 90, 150), w: 1.8, dolgu: true },
      { d: "M70 70 L70 110 M70 90 L170 90", w: 1 },
      ...bicak(170, 90),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M40 80 Q100 60 180 76 L180 100 Q100 116 40 100 Z", w: 1.8, dolgu: true },
      { d: "M70 86 L70 94 M90 84 L90 92 M110 84 L110 92", w: 0.8 },
      ...cimbiz(150, 70),
    ],
  },
];

// ---------- Ekmek ve mısır hamur yemi ----------
export const HAMUR_YEMI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      kase(100, 80, 110, 40),
      { d: "M170 70 Q170 50 190 50 Q210 50 210 70 L210 110 L170 110 Z", w: 1.6, dolgu: true },
    ],
    noktalar: [
      [80, 76, 2],
      [96, 72, 2.4],
      [112, 76, 2],
      [124, 72, 1.8],
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      kase(90, 90, 110, 40),
      { d: kutu(150, 40, 30, 70), w: 1.6, dolgu: true },
      { d: "M156 50 L174 50 M156 62 L174 62 M156 74 L174 74 M156 86 L174 86", w: 0.6 },
      { d: "M196 100 Q190 84 200 76 Q210 84 204 100 Z", w: 1.3, dolgu: true },
    ],
    noktalar: [
      [100, 80, 2],
      [110, 84, 2],
    ],
  },
  { cizgiler: [ZEMIN, { d: daire(100, 106, 30, 22), w: 1.8, dolgu: true }, ...parmak(110, 84), damla(170, 60, 1)] },
  { cizgiler: [ZEMIN, ...bez(80, 100), ...igne(160, 50), { d: daire(167, 82, 7), w: 1.4, dolgu: true }] },
];

// ---------- Surf casting ----------
export const SURF_CASTING_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...dugum(120, 76),
      { d: daire(60, 110, 20, 10), w: 1.6, dolgu: true },
      yayOk(60, 110, 26, 3.4, 6),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M110 0 L110 100", w: 2 },
      ...firdondu(110, 50),
      { d: "M113 50 L150 54", w: 0.8 },
      ...igne(150, 46, 0.7),
      { d: "M110 100 L98 124 L122 124 Z", w: 1.6, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M40 120 L130 30", w: 3 },
      { d: "M130 30 Q180 10 220 40", w: 0.9 },
      yayOk(80, 90, 60, 3.6, 5.2),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      SU(90),
      { d: "M40 134 L70 40 M60 134 L74 40 M80 134 L74 40", w: 1.4 },
      { d: "M70 40 L76 20", w: 2.4 },
      { d: "M76 20 Q140 40 230 92", w: 0.9 },
    ],
  },
];

// ---------- Olta iğnesi bileme ----------
const bilemeTasi = (x: number, y: number): Cizgi => ({ d: kutu(x, y, 60, 14), w: 1.6, dolgu: true });
export const IGNE_BILEME_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...parmak(110, 90), ...igne(80, 60, 1.6)] },
  { cizgiler: [ZEMIN, ...pense(90, 80), ...igne(70, 60, 1.4)] },
  { cizgiler: [ZEMIN, ...igne(80, 40, 2), bilemeTasi(110, 90), ok(170, 84, 120, 84)] },
  { cizgiler: [ZEMIN, ...parmak(110, 90), ...igne(80, 60, 1.6), onay(180, 40, 1)] },
];

// ---------- Kaz tüyünden şamandıra ----------
export const TUY_SAMANDIRA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...tuy(100, 134, 120), { d: "M88 60 L112 60", w: 1, kesik: true }, ...makas(120, 60)] },
  {
    cizgiler: [
      ZEMIN,
      { d: "M110 20 L110 130", w: 1.6 },
      { d: "M110 60 Q124 80 110 104 Q96 80 110 60 Z", w: 1.6, dolgu: true },
      damla(150, 70, 0.9),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M110 20 L110 130", w: 1.6 },
      { d: "M110 60 Q124 80 110 104 Q96 80 110 60 Z", w: 1.6, dolgu: true },
      { d: "M110 20 L110 40", w: 4 },
      ...firca(150, 40),
    ],
  },
  {
    cizgiler: [
      SU(60),
      { d: "M110 0 L110 140", w: 0.8 },
      ...samandira(110, 70),
      { d: kutu(106, 32, 8, 4) + " " + kutu(106, 84, 8, 4), w: 1.2, dolgu: true },
      kursun(110, 110, 3),
      kursun(110, 120, 3),
    ],
  },
];

// ---------- LRF hafif takım ----------
export const LRF_TAKIM_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...dugum(120, 60), { d: daire(60, 106, 20, 10), w: 1.6, dolgu: true }] },
  { cizgiler: [ZEMIN, { d: "M20 70 L60 70", w: 0.9 }, silikon(76, 70), ...jig(66, 70)] },
  {
    cizgiler: [ZEMIN, ...makara(110, 30), { d: daire(110, 50, 6), w: 1.4, dolgu: true }, yayOk(110, 50, 14, 3.6, 5.6)],
  },
  {
    cizgiler: [
      SU(24),
      ZEMIN,
      { d: "M20 30 L60 120 L80 100 L100 124 L120 104 L140 126", w: 0.8, kesik: true },
      silikon(140, 122),
    ],
  },
];

// ---------- Canlı yem kovası ----------
export const CANLI_YEM_KOVASI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: daire(110, 90, 70, 26), w: 1.8, dolgu: true },
      { d: daire(90, 86, 3) + " " + daire(120, 94, 3) + " " + daire(140, 82, 3), w: 1.2 },
      ...matkap(120, 70),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...kova(110, 60),
      { d: kutu(130, 40, 30, 18), w: 1.6, dolgu: true },
      { d: "M136 58 Q120 80 110 120", w: 1.2 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...kova(110, 50, 80, 80),
      { d: "M76 66 L144 66", w: 1 },
      { d: "M110 30 L110 120", w: 1.2 },
      { d: kutu(102, 120, 16, 8), w: 1.4, dolgu: true },
    ],
    noktalar: kabarcik(110, 112, 6),
  },
  {
    cizgiler: [
      ZEMIN,
      ...kova(110, 60),
      { d: "M80 74 L140 74", w: 1 },
      { d: balik(90, 100, 26), w: 1.2, dolgu: true },
      { d: "M40 40 Q110 0 180 40 Z M110 20 L110 134", w: 1.4 },
    ],
  },
];

// ---------- Bırak-yakala seti ----------
export const BIRAK_YAKALA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...igne(80, 50, 1.8), ...pense(98, 98)] },
  { cizgiler: [ZEMIN, ...kepce(90, 70), { d: balik(64, 96, 50), w: 1.4, dolgu: true }] },
  {
    cizgiler: [
      ZEMIN,
      { d: balik(40, 90, 150), w: 1.8, dolgu: true },
      balikGoz(40, 90, 150),
      ...parmak(120, 70),
      damla(150, 40, 0.9),
      damla(170, 50, 0.7),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: balik(60, 90, 140), w: 1.8, dolgu: true },
      ...igne(54, 76, 0.8),
      ...pense(66, 60),
      yayOk(60, 90, 24, 3.4, 5.4),
    ],
  },
  {
    cizgiler: [
      SU(30),
      { d: balik(80, 90, 100), w: 1.8, dolgu: true },
      balikGoz(80, 90, 100),
      ok(40, 60, 70, 60),
      ok(40, 110, 70, 110),
    ],
  },
];
