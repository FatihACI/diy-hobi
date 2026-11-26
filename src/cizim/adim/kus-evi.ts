// Kuş Evi & Evcil kategorisi (Altın 40 dışı 18 proje): adım sahneleri (viewBox 0 0 240 150).
// Adım sayısı ve sırası src/data/ek/kus-evi.ts içeriğiyle birebir eşleşir.
import { Cizgi, Cizim, daire, kutu, yuvarla as r } from "../arac";
import {
  alev,
  bicak,
  carpi,
  cetvel,
  damla,
  firca,
  kablo,
  kalem,
  kase,
  makas,
  matkap,
  ok,
  onay,
  parmak,
  saat,
  saksi,
  tahta,
  telefon,
  tencere,
  termometre,
  vida,
  yayOk,
  ZEMIN,
  zimpara,
} from "./parca";

type Nokta = [number, number, number];

// ---------- Ortak parçalar ----------
// Kedi (oturan, yandan): taban orta (x,y), s ölçek
const kedi = (x: number, y: number, s = 1): Cizgi[] => {
  const X = (d: number) => r(x + d * s),
    Y = (d: number) => r(y + d * s);
  return [
    {
      d: `M${X(-16)} ${y} Q${X(-20)} ${Y(-26)} ${X(-6)} ${Y(-34)} L${X(-8)} ${Y(-44)} L${X(-2)} ${Y(-38)} L${X(6)} ${Y(-38)} L${X(10)} ${Y(-44)} L${X(10)} ${Y(-32)} Q${X(18)} ${Y(-20)} ${X(14)} ${y} Z`,
      w: 1.5,
      dolgu: true,
    },
    { d: `M${X(14)} ${Y(-2)} Q${X(30)} ${Y(-4)} ${X(28)} ${Y(-18)}`, w: 1.6 },
    { d: daire(X(-1), Y(-32), 1) + " " + daire(X(6), Y(-32), 1), w: 1, dolgu: true },
  ];
};
// Köpek (oturan): taban orta (x,y)
const kopek = (x: number, y: number, s = 1): Cizgi[] => {
  const X = (d: number) => r(x + d * s),
    Y = (d: number) => r(y + d * s);
  return [
    {
      d: `M${X(-20)} ${y} Q${X(-24)} ${Y(-30)} ${X(-6)} ${Y(-40)} L${X(-4)} ${Y(-56)} Q${X(10)} ${Y(-62)} ${X(18)} ${Y(-52)} L${X(28)} ${Y(-48)} L${X(26)} ${Y(-42)} L${X(12)} ${Y(-40)} Q${X(14)} ${Y(-20)} ${X(16)} ${y} Z`,
      w: 1.5,
      dolgu: true,
    },
    { d: `M${X(-4)} ${Y(-54)} Q${X(-10)} ${Y(-46)} ${X(-4)} ${Y(-40)}`, w: 1.3 },
    { d: daire(X(10), Y(-50), 1.2), w: 1, dolgu: true },
  ];
};
// Kuş (küçük): (x,y), yön sağa
const kus = (x: number, y: number, s = 1): Cizgi[] => [
  {
    d: `M${x} ${y} Q${r(x + 10 * s)} ${r(y - 10 * s)} ${r(x + 22 * s)} ${r(y - 4 * s)} L${r(x + 28 * s)} ${r(y - 6 * s)} L${r(x + 24 * s)} ${y} Q${r(x + 14 * s)} ${r(y + 8 * s)} ${x} ${y} Z`,
    w: 1.3,
    dolgu: true,
  },
  { d: `M${r(x + 4 * s)} ${r(y + 2 * s)} L${r(x - 6 * s)} ${r(y + 6 * s)}`, w: 1.3 },
  { d: daire(r(x + 20 * s), r(y - 5 * s), 0.9), w: 0.9, dolgu: true },
];
// Hamster: (x,y) taban orta
const hamster = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x - 16} ${y} Q${x - 18} ${y - 16} ${x - 2} ${y - 18} Q${x + 14} ${y - 18} ${x + 16} ${y - 6} L${x + 12} ${y} Z`,
    w: 1.4,
    dolgu: true,
  },
  { d: daire(x + 8, y - 12, 1) + " " + daire(x - 4, y - 18, 3), w: 1 },
];
// Dal: x1→x2, y civarı
const dal = (x1: number, x2: number, y: number): Cizgi => ({
  d: `M${x1} ${y} Q${(x1 + x2) / 2} ${y - 6} ${x2} ${y + 2} M${r(x1 + (x2 - x1) * 0.6)} ${y - 3} l12 -10`,
  w: 2.4,
});
// Sisal direk: taban (x,y), sarılı kısım
const direk = (x: number, y: number, boy = 90, sarili = 0): Cizgi[] => {
  let d = "";
  for (let i = 0; i < sarili; i += 4) d += `M${x - 9} ${y - 10 - i} L${x + 9} ${y - 12 - i} `;
  return [{ d: kutu(x - 9, y - boy, 18, boy), w: 1.6, dolgu: true }, ...(d ? [{ d: d.trim(), w: 0.8 }] : [])];
};
const TABAN_K: Cizgi = { d: `M50 130 L190 130 L176 116 L64 116 Z`, w: 1.6, dolgu: true };
// Zımba: ağız (x,y)
const zimba = (x: number, y: number): Cizgi[] => [
  { d: `M${x - 4} ${y} L${x + 40} ${y} L${x + 40} ${y - 10} L${x} ${y - 10} Z`, w: 1.5, dolgu: true },
  { d: `M${x} ${y - 10} L${x + 44} ${y - 20} L${x + 46} ${y - 14} L${x + 40} ${y - 10}`, w: 1.4, dolgu: true },
];
// Saksı yığını (ters)
const ters = (cx: number, y: number, en: number, boy: number): Cizgi => ({
  d: `M${cx - en / 2 + 6} ${y - boy} L${cx + en / 2 - 6} ${y - boy} L${cx + en / 2} ${y} L${cx - en / 2} ${y} Z`,
  w: 1.6,
  dolgu: true,
});
const BANYO: Cizgi[] = [ters(120, 134, 60, 30), ters(120, 104, 44, 24), ters(120, 80, 32, 18)];
const CANAK: Cizgi = { d: `M70 54 L170 54 L160 62 L80 62 Z`, w: 1.7, dolgu: true };
// Kazak gövdesi (önden): (cx,y) yaka üstte
const KAZAK: Cizgi = {
  d: `M90 30 Q120 40 150 30 L180 40 L210 90 L190 100 L170 70 L170 130 L70 130 L70 70 L50 100 L30 90 L60 40 Z`,
  w: 1.7,
  dolgu: true,
};
// Kedi yatağı (yuvarlak): merkez (x,y)
const YATAK: Cizgi[] = [
  { d: daire(120, 96, 80, 30), w: 2, dolgu: true },
  { d: daire(120, 92, 52, 16), w: 1.4, dolgu: true },
];
// Olta çubuğu + ip
const OLTA = (x2 = 170, y2 = 110): Cizgi[] => [
  { d: `M30 120 L120 30`, w: 2.4 },
  { d: `M120 30 Q${x2} 40 ${x2} ${y2}`, w: 0.9 },
];
// Tüy demeti: üst (x,y)
const tuy = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y} Q${x - 10} ${y + 10} ${x - 6} ${y + 24} M${x} ${y} Q${x} ${y + 14} ${x + 2} ${y + 26} M${x} ${y} Q${x + 10} ${y + 10} ${x + 8} ${y + 22}`,
  w: 1.4,
});
const zil = (x: number, y: number): Cizgi => ({
  d: daire(x, y, 4) + ` M${x - 2} ${y + 1} L${x + 2} ${y + 1}`,
  w: 1.2,
  dolgu: true,
});
// Kulübe (önden-yandan): sol alt (x,y)
const kulube = (x: number, y: number, cati = true, kapi = true): Cizgi[] => [
  { d: kutu(x, y - 70, 120, 70), w: 1.8, dolgu: true },
  ...(kapi
    ? [
        {
          d: `M${x + 14} ${y} L${x + 14} ${y - 36} Q${x + 30} ${y - 52} ${x + 46} ${y - 36} L${x + 46} ${y}`,
          w: 1.6,
          dolgu: true,
        },
      ]
    : []),
  ...(cati ? [{ d: `M${x - 10} ${y - 66} L${x + 60} ${y - 106} L${x + 130} ${y - 66} Z`, w: 1.8, dolgu: true }] : []),
];
// Örgü (üçlü): x1→x2 y orta
const orgu = (x1: number, x2: number, y: number): Cizgi => {
  let d = "";
  for (let x = x1; x < x2; x += 12)
    d += `M${x} ${y - 6} Q${x + 6} ${y} ${x + 12} ${y + 6} M${x} ${y + 6} Q${x + 6} ${y} ${x + 12} ${y - 6} `;
  return { d: d.trim(), w: 3 };
};
const dugum = (x: number, y: number): Cizgi => ({ d: daire(x, y, 8), w: 1.8, dolgu: true });
// Kemik kurabiye: merkez (x,y)
const kemik = (x: number, y: number, s = 1): Cizgi => ({
  d: `M${r(x - 14 * s)} ${r(y - 4 * s)} L${r(x + 14 * s)} ${r(y - 4 * s)} A${r(5 * s)} ${r(5 * s)} 0 1 1 ${r(x + 14 * s)} ${r(y + 4 * s)} L${r(x - 14 * s)} ${r(y + 4 * s)} A${r(5 * s)} ${r(5 * s)} 0 1 1 ${r(x - 14 * s)} ${r(y - 4 * s)} Z`,
  w: 1.4,
  dolgu: true,
});
// Fırın: sol üst (x,y)
const firin = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 100, 80), w: 1.8, dolgu: true },
  { d: kutu(x + 10, y + 20, 80, 50), w: 1.3 },
  { d: daire(x + 20, y + 10, 3) + " " + daire(x + 34, y + 10, 3), w: 1 },
];
// Oklava: (x,y) merkez
const oklava = (x: number, y: number): Cizgi => ({
  d: kutu(x - 40, y - 6, 80, 12) + ` M${x - 40} ${y} L${x - 54} ${y} M${x + 40} ${y} L${x + 54} ${y}`,
  w: 1.6,
  dolgu: true,
});
// Labirent kutusu (üstten)
const LAB: Cizgi = { d: kutu(30, 20, 180, 110), w: 1.8, dolgu: true };
const DUVARLAR: Cizgi = { d: `M70 20 L70 90 M110 60 L110 130 M150 20 L150 90 M70 90 L110 90 M150 60 L190 60`, w: 2.2 };
// Rulo (tünel): merkez (x,y), yatay
const rulo = (x: number, y: number): Cizgi[] => [
  { d: kutu(x - 18, y - 7, 36, 14), w: 1.4, dolgu: true },
  { d: daire(x + 18, y, 3, 7), w: 1.2 },
];
// Mama standı
const STAND: Cizgi[] = [
  { d: `M40 70 L200 70 L200 80 L40 80 Z`, w: 1.7, dolgu: true },
  { d: kutu(46, 80, 10, 50) + " " + kutu(184, 80, 10, 50), w: 1.6, dolgu: true },
];
const mamaKabi = (x: number): Cizgi => ({
  d: `M${x - 22} ${66} L${x + 22} ${66} L${x + 16} ${80} L${x - 16} ${80} Z`,
  w: 1.5,
  dolgu: true,
});
// Duvar
const DUVAR: Cizgi = {
  d: `M0 40 L240 40 M0 80 L240 80 M0 120 L240 120 M60 0 L60 40 M180 0 L180 40 M120 40 L120 80 M30 80 L30 120 M210 80 L210 120`,
  w: 0.4,
};
const raf = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 50, 8), w: 1.6, dolgu: true },
  {
    d: `M${x + 8} ${y + 8} L${x + 8} ${y + 22} L${x + 22} ${y + 8} M${x + 42} ${y + 8} L${x + 42} ${y + 22} L${x + 28} ${y + 8}`,
    w: 1.3,
  },
];
// Kafes: sol üst (x,y)
const kafes = (x: number, y: number, en = 140, boy = 100): Cizgi[] => [
  {
    d: `M${x} ${y + boy} L${x} ${y + 20} Q${x + en / 2} ${y - 20} ${x + en} ${y + 20} L${x + en} ${y + boy} Z`,
    w: 1.7,
  },
  {
    d: Array.from(
      { length: Math.floor(en / 14) - 1 },
      (_, i) => `M${x + 14 + i * 14} ${y + boy} L${x + 14 + i * 14} ${y + 10}`,
    ).join(" "),
    w: 0.6,
  },
];
// Paracord çekirdek + tokalar
const toka = (x: number, y: number): Cizgi => ({ d: kutu(x, y - 8, 16, 16), w: 1.6, dolgu: true });
const kobra = (x1: number, x2: number, y: number): Cizgi => {
  let d = "";
  for (let x = x1; x < x2; x += 8)
    d += `M${x} ${y - 6} Q${x + 4} ${y + 2} ${x + 8} ${y - 6} M${x} ${y + 6} Q${x + 4} ${y - 2} ${x + 8} ${y + 6} `;
  return { d: d.trim(), w: 1.6 };
};
const dHalka = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y - 10} L${x} ${y + 10} Q${x + 14} ${y + 10} ${x + 14} ${y} Q${x + 14} ${y - 10} ${x} ${y - 10}`,
  w: 1.6,
});
// Dolap (kum kabı)
const DOLAP: Cizgi[] = [{ d: kutu(40, 40, 160, 90), w: 1.8, dolgu: true }];
// Böcek oteli: çerçeve + bölmeler
const OTEL: Cizgi[] = [
  { d: `M60 130 L60 40 L120 14 L180 40 L180 130 Z`, w: 1.8, dolgu: true },
  { d: `M60 70 L180 70 M60 100 L180 100 M120 40 L120 130`, w: 1.6 },
];
// Kirpi
const kirpi = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x - 24} ${y} Q${x - 24} ${y - 24} ${x} ${y - 24} Q${x + 18} ${y - 24} ${x + 26} ${y - 6} L${x + 32} ${y - 2} L${x + 24} ${y} Z`,
    w: 1.5,
    dolgu: true,
  },
  { d: Array.from({ length: 7 }, (_, i) => `M${x - 20 + i * 6} ${y - 18 + Math.abs(3 - i)} l-3 -8`).join(" "), w: 1 },
];
const yemlik = (x: number, y: number): Cizgi[] => [
  { d: `M${x - 26} ${y - 30} L${x} ${y - 46} L${x + 26} ${y - 30} Z`, w: 1.6, dolgu: true },
  { d: kutu(x - 18, y - 30, 36, 30), w: 1.5 },
  { d: kutu(x - 24, y, 48, 6), w: 1.5, dolgu: true },
];
const tohum = (x: number, y: number): Nokta[] => [
  [x, y, 1.3],
  [x + 6, y + 3, 1.2],
  [x - 5, y + 5, 1.2],
  [x + 2, y + 8, 1.3],
];

// ---------- 1. Kedi Tırmalama Direği (5) ----------
export const KEDI_TIRMALAMA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, TABAN_K, ...direk(120, 120), vida(110, 126), vida(130, 126), ...matkap(170, 120)] },
  {
    cizgiler: [ZEMIN, TABAN_K, ...direk(120, 120), { d: `M64 116 L176 116`, w: 2.2 }, ...zimba(150, 126)],
    taramalar: [{ id: "h", sinir: TABAN_K.d, kutu: [50, 116, 140, 14], aralik: 3, sonra: 0 }],
  },
  { cizgiler: [ZEMIN, TABAN_K, ...direk(120, 116, 90, 4), ...zimba(130, 108), kablo(110, 106, 70, 40, -20)] },
  { cizgiler: [ZEMIN, TABAN_K, ...direk(120, 116, 90, 50), kablo(110, 56, 70, 30, -20), yayOk(120, 80, 20, 0.2, 2.8)] },
  { cizgiler: [ZEMIN, TABAN_K, ...direk(120, 116, 90, 84), ...kedi(176, 116, 1.2), onay(50, 40, 1.2)] },
];

// ---------- 2. Kuş Banyosu (5) ----------
export const KUS_BANYOSU_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...BANYO, damla(140, 100, 0.6), damla(136, 76, 0.6)] },
  { cizgiler: [ZEMIN, ...BANYO, CANAK, ok(120, 30, 120, 50)] },
  {
    cizgiler: [
      ZEMIN,
      ...BANYO,
      CANAK,
      { d: `M100 54 Q106 46 114 54 Z M130 54 Q136 48 142 54 Z`, w: 1.3, dolgu: true },
      ...kus(140, 40, 0.8),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...BANYO,
      CANAK,
      { d: `M200 134 Q190 100 210 90 Q236 94 232 134 Z`, w: 1.4, dolgu: true },
      ok(170, 110, 190, 110),
      ...kedi(30, 134, 0.8),
      carpi(30, 90, 8),
    ],
  },
  { cizgiler: [ZEMIN, ...BANYO, CANAK, ...firca(110, 50), damla(150, 40), ...saat(200, 30, 10)] },
];

// ---------- 3. Kuş Yağlı Yem Keki (5) ----------
export const KUS_KEKI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...tencere(120, 82, 70, 30),
      alev(110, 134, 1),
      alev(130, 134, 1),
      { d: kutu(105, 86, 30, 12), w: 1.3, dolgu: true },
      ...termometre(190, 50, 50),
    ],
  },
  {
    cizgiler: [ZEMIN, kase(120, 80, 100, 44), yayOk(120, 92, 18, 0, 5), ok(180, 40, 150, 70)],
    noktalar: [...tohum(100, 96), ...tohum(136, 92)],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M60 90 L70 130 L100 130 L110 90 Z M130 90 L140 130 L170 130 L180 90 Z`, w: 1.6, dolgu: true },
      { d: `M85 120 L85 70 M155 120 L155 70`, w: 1 },
      ok(120, 50, 100, 80),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(60, 20, 120, 110), w: 1.8 },
      { d: `M60 60 L180 60 M60 96 L180 96`, w: 1.2 },
      { d: kutu(80, 70, 24, 26) + " " + kutu(120, 70, 24, 26), w: 1.4, dolgu: true },
      ...saat(206, 40, 12),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      dal(20, 200, 30),
      { d: `M110 28 L110 70`, w: 1 },
      { d: kutu(98, 70, 24, 30), w: 1.5, dolgu: true },
      ...kus(140, 84, 0.9),
    ],
    noktalar: tohum(106, 80),
  },
];

// ---------- 4. Eski Kazaktan Kedi Yatağı (4) ----------
export const KEDI_YATAGI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      KAZAK,
      { d: `M92 36 Q120 50 148 36`, w: 1, kesik: true },
      { d: `M100 40 l4 4 M112 44 l4 4 M126 44 l4 4 M138 40 l4 4`, w: 1 },
    ],
  },
  { cizgiler: [ZEMIN, KAZAK, { d: kutu(84, 74, 72, 50), w: 1.4, dolgu: true }, ok(200, 110, 160, 100)] },
  { cizgiler: [ZEMIN, ...YATAK, ok(40, 70, 50, 90), ok(200, 70, 190, 90)] },
  { cizgiler: [ZEMIN, ...YATAK, { d: `M44 96 l4 -4 M48 104 l4 -4`, w: 1 }, ...kedi(120, 96, 1)] },
];

// ---------- 5. Kedi Oltası (4) ----------
export const KEDI_OLTASI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...OLTA(150, 90), { d: daire(120, 30, 4), w: 1.4 }] },
  { cizgiler: [ZEMIN, ...OLTA(150, 90), tuy(150, 90), zil(150, 88)] },
  {
    cizgiler: [
      ZEMIN,
      ...OLTA(190, 116),
      { d: `M190 116 l-10 8 M190 116 l2 12 M190 116 l10 8`, w: 1.4 },
      ...kedi(150, 134, 0.9),
      ok(196, 130, 226, 130),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(140, 20, 80, 50), w: 1.6 },
      { d: `M150 30 L210 60`, w: 2 },
      ...kedi(70, 134, 0.9),
      carpi(110, 60, 8),
    ],
  },
];

// ---------- 6. Köpek Kulübesi (5) ----------
export const KOPEK_KULUBESI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...kopek(80, 130, 1.2),
      { d: `M40 136 L140 136 M40 132 L40 140 M140 132 L140 140`, w: 1 },
      { d: `M160 60 L160 130 M156 60 L164 60 M156 130 L164 130`, w: 1 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(50, 110, 140, 10), w: 1.6, dolgu: true },
      { d: kutu(56, 120, 12, 14) + " " + kutu(172, 120, 12, 14), w: 1.4, dolgu: true },
      { d: `M200 110 L200 134 M196 110 L204 110 M196 134 L204 134`, w: 1 },
    ],
  },
  { cizgiler: [ZEMIN, ...kulube(60, 120, false), vida(66, 60), vida(174, 60), ...matkap(200, 100)] },
  { cizgiler: [ZEMIN, ...kulube(60, 120), { d: daire(120, 14, 3), w: 1.2 }, yayOk(120, 60, 50, 4.2, 4.8)] },
  {
    cizgiler: [ZEMIN, ...kulube(60, 120), ...firca(200, 80)],
    taramalar: [{ id: "b", sinir: kutu(60, 50, 120, 70), kutu: [60, 50, 120, 70], aralik: 6, sonra: 0 }],
  },
];

// ---------- 7. Tişört Halat Oyuncak (4) ----------
export const KOPEK_HALAT_OYUNCAK_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: `M60 30 L180 30 L190 60 L170 66 L170 120 L70 120 L70 66 L50 60 Z`, w: 1.6, dolgu: true },
      { d: `M70 80 L170 80 M70 96 L170 96`, w: 1, kesik: true },
      ...makas(170, 80),
    ],
  },
  { cizgiler: [ZEMIN, dugum(40, 76), ...[0, 1, 2, 3, 4, 5].map((i) => ({ d: `M48 76 L210 ${46 + i * 12}`, w: 2.4 }))] },
  {
    cizgiler: [ZEMIN, dugum(40, 76), orgu(48, 160, 76), { d: `M160 70 L210 56 M160 76 L210 76 M160 82 L210 96`, w: 3 }],
  },
  { cizgiler: [ZEMIN, dugum(40, 76), orgu(48, 192, 76), dugum(200, 76)] },
];

// ---------- 8. Köpek Ödül Kurabiyesi (4) ----------
export const KOPEK_ODULU_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      kase(120, 70, 110, 50),
      { d: `M90 90 Q120 74 150 90 Q140 110 120 108 Q100 110 90 90 Z`, w: 1.4, dolgu: true },
      ...parmak(120, 82),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 100, 180, 10), w: 1.5, dolgu: true },
      oklava(100, 86),
      kemik(170, 104),
      { d: `M60 106 L60 114 M56 110 L64 110`, w: 0.8 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...firin(70, 40),
      kemik(100, 84, 0.8),
      kemik(140, 84, 0.8),
      ...termometre(200, 40, 50),
      ...saat(30, 40, 10),
    ],
  },
  { cizgiler: [ZEMIN, ...firin(70, 40), kemik(100, 84, 0.8), kemik(140, 84, 0.8), ...kopek(206, 134, 0.7)] },
];

// ---------- 9. Hamster Labirenti (4) ----------
export const HAMSTER_LABIRENT_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, LAB, { d: `M30 20 L10 4 M210 20 L230 4`, w: 1.4 }, ...bicak(176, 70)] },
  { cizgiler: [ZEMIN, LAB, DUVARLAR, ok(200, 120, 190, 100)] },
  { cizgiler: [ZEMIN, LAB, DUVARLAR, ...rulo(90, 110), ...rulo(170, 40)] },
  {
    cizgiler: [ZEMIN, LAB, DUVARLAR, ...rulo(90, 110), ...hamster(60, 60), onay(200, 110, 1)],
    noktalar: tohum(190, 100),
  },
];

// ---------- 10. Kedi Çimi (4) ----------
const cimler = (x1: number, x2: number, y: number, boy: number): Cizgi => {
  let d = "";
  for (let x = x1; x < x2; x += 4) d += `M${x} ${y} Q${x - 2} ${y - boy / 2} ${x + 2} ${y - boy} `;
  return { d: d.trim(), w: 0.8 };
};
export const KEDI_CIMI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      kase(120, 80, 100, 44),
      { d: `M76 92 q10 -4 20 0 q10 4 20 0 q10 -4 20 0 q10 4 20 0`, w: 1 },
      ...saat(200, 40, 12),
    ],
    noktalar: tohum(116, 98),
  },
  {
    cizgiler: [ZEMIN, ...saksi(120, 80, 120, 50), ok(120, 40, 120, 70)],
    noktalar: [...tohum(90, 80), ...tohum(130, 80)],
  },
  {
    cizgiler: [
      ZEMIN,
      ...saksi(120, 80, 120, 50),
      cimler(70, 170, 80, 10),
      damla(80, 60),
      { d: daire(200, 30, 9), w: 1.3, dolgu: true },
    ],
  },
  { cizgiler: [ZEMIN, ...saksi(100, 90, 100, 44), cimler(60, 140, 90, 34), ...kedi(190, 134, 1)] },
];

// ---------- 11. Yükseltilmiş Mama Standı (4) ----------
export const MAMA_STANDI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...kopek(80, 134, 1.3),
      { d: `M140 76 L140 134 M136 76 L144 76 M136 134 L144 134`, w: 1 },
      { d: `M104 76 L150 76`, w: 0.8, kesik: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tahta(30, 60, 180, 40),
      { d: daire(80, 80, 16) + " " + daire(160, 80, 16), w: 1.4, kesik: true },
      ...dekupajK(160, 70),
    ],
  },
  { cizgiler: [ZEMIN, ...STAND, vida(51, 76), vida(189, 76)] },
  { cizgiler: [ZEMIN, ...STAND, mamaKabi(90), mamaKabi(150), ...zimpara(170, 30, 30, 10)] },
];
function dekupajK(x: number, y: number): Cizgi[] {
  return [
    { d: kutu(x - 14, y - 40, 28, 22), w: 1.5, dolgu: true },
    { d: `M${x} ${y - 18} L${x} ${y + 6}`, w: 1.4 },
  ];
}

// ---------- 12. Duvara Kedi Rafları (4) ----------
export const KEDI_RAFLARI_ADIM: Cizim[] = [
  {
    cizgiler: [
      DUVAR,
      { d: kutu(30, 106, 50, 6) + " " + kutu(100, 76, 50, 6) + " " + kutu(170, 46, 50, 6), w: 1, kesik: true },
      ...kalem(150, 80),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(40, 80, 160, 12), w: 1.6, dolgu: true },
      { d: kutu(40, 74, 160, 6), w: 1.2, dolgu: true },
      ok(120, 50, 120, 72),
    ],
    taramalar: [{ id: "h", sinir: kutu(40, 74, 160, 6), kutu: [40, 74, 160, 6], aralik: 2, sonra: 2 }],
  },
  { cizgiler: [DUVAR, ...raf(30, 106), ...raf(100, 76), ...raf(170, 46), vida(38, 118, 2), vida(108, 88, 2)] },
  {
    cizgiler: [
      DUVAR,
      ...raf(30, 106),
      ...raf(100, 76),
      ...raf(170, 46),
      ...parmak(124, 70),
      ...kedi(195, 46, 0.8),
      onay(40, 30, 1.2),
    ],
  },
];

// ---------- 13. Daldan Kafes Tüneği (4) ----------
export const KUS_TUNEGI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...tencere(120, 80, 90, 34),
      alev(110, 134, 1),
      alev(130, 134, 1),
      dal(80, 160, 70),
      ...saat(200, 40, 10),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      dal(30, 210, 80),
      { d: `M60 70 L60 92 M180 70 L180 92`, w: 0.9, kesik: true },
      ...cetvel(60, 110, 120, 8),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M50 80 L190 80`, w: 5 },
      vida(46, 80, 3),
      vida(194, 80, 3),
      { d: `M30 80 L42 80 M198 80 L210 80`, w: 1.4 },
      { d: `M24 72 L24 88 M216 72 L216 88`, w: 1 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...kafes(50, 20),
      { d: `M60 70 L180 70 M70 100 L130 100`, w: 3 },
      ...kus(100, 66, 0.8),
      { d: kutu(150, 108, 24, 12), w: 1.3, dolgu: true },
    ],
  },
];

// ---------- 14. Paracord Tasma (4) ----------
export const PARACORD_TASMA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...kopek(120, 134, 1.3),
      { d: `M104 84 Q118 92 132 84`, w: 1, kesik: true },
      { d: `M150 70 L190 70`, w: 1 },
    ],
  },
  { cizgiler: [ZEMIN, toka(30, 76), toka(194, 76), { d: `M46 72 L194 72 M46 80 L194 80`, w: 1.4 }] },
  {
    cizgiler: [
      ZEMIN,
      toka(30, 76),
      toka(194, 76),
      { d: `M46 72 L194 72 M46 80 L194 80`, w: 1.4 },
      kobra(46, 130, 76),
      dHalka(120, 96),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      toka(30, 76),
      toka(194, 76),
      kobra(46, 194, 76),
      { d: kutu(140, 100, 14, 20), w: 1.4, dolgu: true },
      alev(147, 98, 0.8),
    ],
  },
];

// ---------- 15. Kedi Kum Kabı Dolabı (4) ----------
export const KEDI_TUVALET_DOLABI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...DOLAP, { d: daire(80, 92, 22), w: 1.6 }, ...zimpara(110, 60, 30, 10)] },
  {
    cizgiler: [ZEMIN, ...DOLAP, { d: daire(80, 92, 22), w: 1.6 }, ...firca(150, 90)],
    taramalar: [{ id: "i", sinir: kutu(46, 46, 148, 78), kutu: [46, 46, 148, 78], aralik: 6, sonra: 0 }],
  },
  {
    cizgiler: [
      ZEMIN,
      ...DOLAP,
      { d: daire(80, 92, 22), w: 1.6 },
      { d: `M120 44 L120 126 L200 136 L200 34 Z`, w: 1.4, kesik: true },
      { d: kutu(116, 60, 6, 12) + " " + kutu(116, 100, 6, 12), w: 1.2, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...DOLAP,
      { d: [60, 80, 100, 120, 140].map((x) => daire(x + 20, 56, 3)).join(" "), w: 1.2 },
      ...matkap(190, 60),
      ok(120, 30, 120, 10),
    ],
  },
];

// ---------- 16. Böcek Oteli (4) ----------
export const BOCEK_OTELI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...OTEL, vida(64, 70), vida(176, 70)] },
  {
    cizgiler: [
      ZEMIN,
      ...OTEL,
      { d: [70, 82, 94, 106].map((x) => daire(x, 85, 5)).join(" "), w: 1.1 },
      { d: `M130 120 Q140 104 150 120 Q160 104 170 120`, w: 1.3 },
      { d: `M70 46 L110 46 M70 54 L110 54 M70 62 L110 62`, w: 1 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tahta(60, 70, 120, 50),
      { d: [80, 100, 120, 140, 160].map((x) => daire(x, 95, 3)).join(" "), w: 1.3, dolgu: true },
      ...matkap(160, 90),
    ],
  },
  {
    cizgiler: [
      DUVAR,
      ...OTEL,
      { d: `M180 130 L180 134 M60 130 L60 134`, w: 1 },
      { d: daire(214, 26, 10), w: 1.3, dolgu: true },
      { d: `M24 100 L24 134 M20 100 L28 100`, w: 0.9 },
    ],
  },
];

// ---------- 17. Kirpi Kış Yuvası (4) ----------
export const KIRPI_EVI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, { d: kutu(60, 60, 120, 70), w: 1.8, dolgu: true }, { d: kutu(70, 96, 30, 34), w: 1.5 }] },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(90, 60, 120, 70), w: 1.8, dolgu: true },
      { d: kutu(20, 96, 76, 34), w: 1.6, dolgu: true },
      ...kirpi(50, 128),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(60, 60, 120, 70), w: 1.8, dolgu: true },
      { d: `M50 64 L190 46 L190 54 L50 72 Z`, w: 1.6, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(60, 60, 120, 70), w: 1.8, dolgu: true },
      { d: `M50 64 L190 46 L190 54 L50 72 Z`, w: 1.6, dolgu: true },
      { d: `M190 134 Q200 100 220 96 Q236 110 236 134 Z`, w: 1.4, dolgu: true },
      ...kirpi(30, 134),
    ],
  },
];

// ---------- 18. Telefonla Yemlik Kamerası (4) ----------
export const YEMLIK_KAMERASI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...telefon(110, 30, 50, 90),
      { d: daire(135, 70, 12), w: 1.3 },
      { d: daire(135, 70, 4), w: 1, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...yemlik(60, 90),
      { d: `M60 96 L60 134`, w: 2 },
      ...telefon(170, 50, 30, 54),
      { d: `M80 70 L168 76`, w: 0.8, kesik: true },
      { d: `M80 140 L168 140 M80 136 L80 144 M168 136 L168 144`, w: 0.8 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(150, 40, 60, 80), w: 1.6 },
      ...telefon(165, 50, 30, 54),
      damla(140, 30),
      damla(220, 34, 0.8),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...telefon(80, 20, 80, 110),
      ...kus(100, 70, 1.2),
      { d: kutu(92, 100, 56, 20), w: 1 },
      { d: `M98 106 L130 106 M98 112 L120 112`, w: 0.8 },
    ],
  },
];
