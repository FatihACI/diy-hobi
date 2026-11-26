// Makrome & Örgü kategorisi (Altın 40 dışı 18 proje): adım sahneleri (viewBox 0 0 240 150).
// Adım sayısı ve sırası src/data/ek/makrome.ts içeriğiyle birebir eşleşir.
import { Cizgi, Cizim, daire, kutu, yuvarla as r } from "../arac";
import { alev, bant, cetvel, makas, matkap, ok, onay, parmak, saksi, sprey, sis, yayOk, ZEMIN } from "./parca";

// ---------- Ortak parçalar ----------
// Dikey ipler: x listesi, y1→y2
const ipler = (xs: number[], y1: number, y2: number, w = 1.2): Cizgi => ({
  d: xs.map((x) => `M${x} ${y1} L${x} ${y2}`).join(" "),
  w,
});
const aralik = (x1: number, x2: number, n: number) =>
  Array.from({ length: n }, (_, i) => r(x1 + ((x2 - x1) * i) / (n - 1)));
// Kare düğüm (merkez x,y; genişlik en)
const kare = (x: number, y: number, en = 16): Cizgi => ({
  d: `M${x - en / 2} ${y - 4} Q${x} ${y + 4} ${x + en / 2} ${y - 4} M${x - en / 2} ${y + 4} Q${x} ${y - 4} ${x + en / 2} ${y + 4} M${x - en / 2} ${y - 4} L${x - en / 2} ${y + 4} M${x + en / 2} ${y - 4} L${x + en / 2} ${y + 4}`,
  w: 1.5,
});
const kareSutun = (x: number, y1: number, n: number, en = 16, a = 12): Cizgi[] =>
  Array.from({ length: n }, (_, i) => kare(x, y1 + i * a, en));
// Ters baş düğümü (çubukta): x, y
const tersBas = (x: number, y: number): Cizgi => ({
  d: `M${x - 5} ${y + 10} L${x - 5} ${y - 4} Q${x} ${y - 10} ${x + 5} ${y - 4} L${x + 5} ${y + 10} M${x - 6} ${y + 4} L${x + 6} ${y + 4}`,
  w: 1.5,
});
// Çubuk (dal): y
const cubuk = (x1: number, x2: number, y: number): Cizgi => ({ d: kutu(x1, y - 4, x2 - x1, 8), w: 1.6, dolgu: true });
// Halka: merkez (x,y), R
const halka = (x: number, y: number, R = 10): Cizgi => ({ d: daire(x, y, R) + " " + daire(x, y, R - 3), w: 1.4 });
// Tığ: uç (x,y), sap sağ üste
const tig = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} q-3 -2 -1 -5 M${x} ${y} L${x + 50} ${y - 40}`, w: 1.8 },
  { d: `M${x + 24} ${y - 19} L${x + 30} ${y - 24}`, w: 3.4 },
];
// İki şiş: kesişen
const sisler = (x: number, y: number): Cizgi[] => [
  { d: `M${x - 50} ${y + 20} L${x + 50} ${y - 20} M${x - 50} ${y - 20} L${x + 50} ${y + 20}`, w: 2 },
  { d: daire(x + 52, y - 21, 3) + " " + daire(x + 52, y + 21, 3), w: 1.2, dolgu: true },
];
// Yumak: merkez (x,y)
const yumak = (x: number, y: number, R = 18): Cizgi[] => [
  { d: daire(x, y, R), w: 1.6, dolgu: true },
  {
    d: `M${x - R + 4} ${y - 6} Q${x} ${y - R} ${x + R - 2} ${y + 2} M${x - R + 2} ${y + 4} Q${x} ${y - 8} ${x + R - 4} ${y + 10} M${x - 8} ${y + R - 2} Q${x + 4} ${y} ${x + 12} ${y - R + 4}`,
    w: 0.8,
  },
];
// Örgü ilmek sırası (V'ler): sol (x,y), n sütun, m sıra
const ilmekler = (x: number, y: number, n: number, m: number, a = 8): Cizgi => {
  let d = "";
  for (let j = 0; j < m; j++)
    for (let i = 0; i < n; i++) d += `M${x + i * a} ${y + j * a} l${a / 2} ${a} l${a / 2} ${-a} `;
  return { d: d.trim(), w: 0.9 };
};
// Sihirli halka + sık iğneler: merkez (x,y), tur sayısı
const spiral = (x: number, y: number, tur = 1, R0 = 6, dR = 7): Cizgi => ({
  d: Array.from({ length: tur }, (_, i) => daire(x, y, R0 + i * dR)).join(" "),
  w: 1.1,
});
const isinlar = (x: number, y: number, R1: number, R2: number, n = 12): Cizgi => ({
  d: Array.from({ length: n }, (_, i) => {
    const a = (i * 2 * Math.PI) / n;
    return `M${r(x + R1 * Math.cos(a))} ${r(y + R1 * Math.sin(a))} L${r(x + R2 * Math.cos(a))} ${r(y + R2 * Math.sin(a))}`;
  }).join(" "),
  w: 0.8,
});
// Ayıcık (amigurumi)
const ayicik = (x: number, y: number, s = 1, tam = true): Cizgi[] => {
  const S = (d: number) => r(d * s);
  return [
    { d: daire(x, y - S(70), S(26)), w: 1.6, dolgu: true },
    { d: daire(x - S(20), y - S(92), S(9)) + " " + daire(x + S(20), y - S(92), S(9)), w: 1.5, dolgu: true },
    { d: daire(x - S(9), y - S(74), S(2.5)) + " " + daire(x + S(9), y - S(74), S(2.5)), w: 1, dolgu: true },
    { d: daire(x, y - S(64), S(6), S(4)), w: 1.1 },
    ...(tam
      ? [
          { d: daire(x, y - S(24), S(22), S(26)), w: 1.6, dolgu: true },
          {
            d:
              daire(x - S(26), y - S(34), S(8), S(12)) +
              " " +
              daire(x + S(26), y - S(34), S(8), S(12)) +
              " " +
              daire(x - S(12), y - S(4), S(10), S(8)) +
              " " +
              daire(x + S(12), y - S(4), S(10), S(8)),
            w: 1.4,
            dolgu: true,
          },
        ]
      : []),
  ];
};
// Yün iğnesi: uç (x,y)
const yunIgne = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y} L${x + 40} ${y - 30} M${x + 36} ${y - 30} a3 2 -35 1 0 6 -4`,
  w: 1.4,
});
// Ahtapot
const ahtapot = (x: number, y: number, kollar = true): Cizgi[] => [
  {
    d: `M${x - 30} ${y} Q${x - 34} ${y - 50} ${x} ${y - 52} Q${x + 34} ${y - 50} ${x + 30} ${y} Z`,
    w: 1.6,
    dolgu: true,
  },
  { d: daire(x - 10, y - 26, 3) + " " + daire(x + 10, y - 26, 3), w: 1, dolgu: true },
  ...(kollar
    ? [
        {
          d: [-28, -20, -12, -4, 4, 12, 20, 28]
            .map((d, i) => `M${x + d} ${y} q${i % 2 ? 6 : -6} 12 0 20 q${i % 2 ? -8 : 8} 8 ${i % 2 ? 4 : -4} 14`)
            .join(" "),
          w: 2.2,
        },
      ]
    : []),
];
// Granny kare: merkez (x,y), boyut
const granny = (x: number, y: number, s = 30, tur = 3): Cizgi[] => [
  {
    d: Array.from({ length: tur }, (_, i) =>
      kutu(x - (s * (i + 1)) / tur, y - (s * (i + 1)) / tur, (2 * s * (i + 1)) / tur, (2 * s * (i + 1)) / tur),
    ).join(" "),
    w: 1.2,
  },
  { d: daire(x, y, 3), w: 1 },
];
// Bere: alt orta (x,y)
const bere = (x: number, y: number, ponpon = false, lastik = true): Cizgi[] => [
  {
    d: `M${x - 44} ${y} L${x - 44} ${y - 30} Q${x - 44} ${y - 70} ${x} ${y - 72} Q${x + 44} ${y - 70} ${x + 44} ${y - 30} L${x + 44} ${y} Z`,
    w: 1.7,
    dolgu: true,
  },
  ...(lastik
    ? [
        {
          d:
            Array.from({ length: 11 }, (_, i) => `M${x - 40 + i * 8} ${y} L${x - 40 + i * 8} ${y - 16}`).join(" ") +
            ` M${x - 44} ${y - 18} L${x + 44} ${y - 18}`,
          w: 0.8,
        },
      ]
    : []),
  ...(ponpon ? [{ d: daire(x, y - 80, 12), w: 1.4, dolgu: true }, isinlar(x, y - 80, 6, 12, 10)] : []),
];
// Sepet (örgü): alt orta (x,y)
const sepetO = (x: number, y: number, boy = 50, kulp = false): Cizgi[] => [
  { d: `M${x - 50} ${y - boy} L${x - 46} ${y} L${x + 46} ${y} L${x + 50} ${y - boy}`, w: 1.7, dolgu: true },
  { d: daire(x, y - boy, 50, 8), w: 1.5 },
  {
    d: Array.from(
      { length: Math.floor(boy / 8) },
      (_, j) => `M${x - 48} ${y - j * 8 - 4} L${x + 48} ${y - j * 8 - 4}`,
    ).join(" "),
    w: 0.6,
  },
  ...(kulp ? [{ d: kutu(x - 40, y - boy + 6, 16, 6) + " " + kutu(x + 24, y - boy + 6, 16, 6), w: 1.3 }] : []),
];
// Çorap: konç üst (x,y)
const corap = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x - 18} ${y} L${x - 18} ${y + 60} Q${x - 18} ${y + 80} ${x} ${y + 82} L${x + 60} ${y + 82} Q${x + 72} ${y + 82} ${x + 72} ${y + 70} Q${x + 72} ${y + 58} ${x + 60} ${y + 58} L${x + 18} ${y + 58} L${x + 18} ${y} Z`,
    w: 1.7,
    dolgu: true,
  },
  { d: Array.from({ length: 5 }, (_, i) => `M${x - 14 + i * 7} ${y} L${x - 14 + i * 7} ${y + 24}`).join(" "), w: 0.8 },
];
// Ponpon: merkez (x,y)
const ponpon = (x: number, y: number, R = 10): Cizgi[] => [
  { d: daire(x, y, R), w: 1.3, dolgu: true },
  isinlar(x, y, R * 0.4, R, 8),
];
// File (ağ): sol üst (x,y)
const file = (x: number, y: number, en: number, boy: number, a = 14): Cizgi => {
  let d = "";
  for (let i = 0; i <= en; i += a) d += `M${x + i} ${y} L${x + i} ${y + boy} `;
  for (let j = 0; j <= boy; j += a) d += `M${x} ${y + j} L${x + en} ${y + j} `;
  return { d: d.trim(), w: 0.7 };
};
// Elmas ağ (makrome file): sol üst
const elmasAg = (x: number, y: number, en: number, boy: number, a = 20): Cizgi => {
  let d = "";
  for (let c = -boy + a / 2; c < en; c += a) {
    const x1 = Math.max(c, 0),
      x2 = Math.min(en, boy + c);
    d += `M${r(x + x1)} ${r(y + x1 - c)} L${r(x + x2)} ${r(y + x2 - c)} `;
  }
  for (let c = a / 2; c < en + boy; c += a) {
    const x1 = Math.max(0, c - boy),
      x2 = Math.min(c, en);
    d += `M${r(x + x1)} ${r(y + c - x1)} L${r(x + x2)} ${r(y + c - x2)} `;
  }
  return { d: d.trim(), w: 1 };
};
// Raf tahtası (perspektif): orta (cx,y)
const raf = (cx: number, y: number): Cizgi[] => [
  { d: `M${cx - 60} ${y} L${cx + 40} ${y} L${cx + 60} ${y - 14} L${cx - 40} ${y - 14} Z`, w: 1.6, dolgu: true },
  { d: kutu(cx - 60, y, 100, 6), w: 1.4, dolgu: true },
];
// Tarak: dişler aşağı, sol (x,y)
const tarak = (x: number, y: number): Cizgi => ({
  d:
    kutu(x, y, 50, 8) +
    " " +
    Array.from({ length: 10 }, (_, i) => `M${x + 3 + i * 5} ${y + 8} L${x + 3 + i * 5} ${y + 20}`).join(" "),
  w: 1.2,
  dolgu: true,
});
const boncuk = (x: number, y: number): Cizgi => ({ d: daire(x, y, 5), w: 1.4, dolgu: true });
// Püskül: üst (x,y)
const puskul = (x: number, y: number, boy = 30): Cizgi[] => [
  { d: kutu(x - 6, y, 12, 6), w: 1.3, dolgu: true },
  {
    d: Array.from({ length: 7 }, (_, i) => `M${x - 6 + i * 2} ${y + 6} L${x - 9 + i * 3} ${y + boy}`).join(" "),
    w: 0.9,
  },
];
// Tüy şekli
const TUY = `M120 20 Q160 60 150 110 Q140 130 120 134 Q100 130 90 110 Q80 60 120 20 Z`;
// Abajur gövdesi
const abajur = (cx: number, y: number): Cizgi => ({
  d: `M${cx - 16} ${y} L${cx + 16} ${y} L${cx + 50} ${y + 80} L${cx - 50} ${y + 80} Z`,
  w: 1.4,
});

// ---------- 1. Amigurumi Ayıcık (5) ----------
export const AMIGURUMI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, spiral(100, 76, 1, 8), isinlar(100, 76, 8, 16, 6), ...tig(110, 70), ...yumak(190, 110)] },
  { cizgiler: [ZEMIN, spiral(100, 76, 5, 6, 8), isinlar(100, 76, 6, 38, 18), yayOk(100, 76, 46, 0.2, 1.4)] },
  {
    cizgiler: [ZEMIN, ...ayicik(110, 134, 1, false), { d: `M150 50 L180 40`, w: 1 }, ok(150, 60, 124, 60)],
    noktalar: [
      [170, 90, 2],
      [180, 96, 2],
      [176, 104, 2],
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(80, 90, 22, 26), w: 1.6, dolgu: true },
      {
        d:
          daire(140, 80, 8, 12) +
          " " +
          daire(164, 80, 8, 12) +
          " " +
          daire(140, 116, 10, 8) +
          " " +
          daire(164, 116, 10, 8) +
          " " +
          daire(200, 60, 9) +
          " " +
          daire(220, 60, 9),
        w: 1.4,
        dolgu: true,
      },
    ],
  },
  { cizgiler: [ZEMIN, ...ayicik(110, 134), yunIgne(140, 80), onay(200, 30, 1.2)] },
];

// ---------- 2. Makrome Anahtarlık (4) ----------
const H_X = 120;
export const MAKROME_ANAHTARLIK_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, halka(H_X, 24, 12), tersBas(110, 38), tersBas(130, 38), ipler([105, 115, 125, 135], 48, 120)] },
  {
    cizgiler: [
      ZEMIN,
      halka(H_X, 24, 12),
      tersBas(110, 38),
      tersBas(130, 38),
      ...kareSutun(120, 56, 5, 26),
      ipler([105, 135], 112, 130),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      halka(H_X, 24, 12),
      ...kareSutun(120, 46, 5, 26),
      { d: kutu(110, 108, 20, 10), w: 1.6, dolgu: true },
      { d: `M110 112 L130 112 M110 116 L130 116`, w: 0.7 },
      ipler([112, 118, 122, 128], 118, 136),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      halka(H_X, 24, 12),
      ...kareSutun(120, 46, 5, 26),
      { d: kutu(110, 100, 20, 10), w: 1.6, dolgu: true },
      ...puskul(120, 110, 26),
      tarak(150, 100),
      ...makas(170, 130),
    ],
  },
];

// ---------- 3. Makrome Bileklik (4) ----------
export const MAKROME_BILEKLIK_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, { d: `M30 70 L210 70 M30 78 L210 78`, w: 1.4 }, bant(36, 74), bant(204, 74)] },
  {
    cizgiler: [
      ZEMIN,
      { d: `M30 70 L210 70 M30 78 L210 78`, w: 1.4 },
      ...Array.from({ length: 6 }, (_, i) => kare(56 + i * 14, 74, 12).d).map((d) => ({ d, w: 1.5 })),
      boncuk(146, 74),
      ...Array.from({ length: 3 }, (_, i) => ({ d: kare(162 + i * 14, 74, 12).d, w: 1.5 })),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(120, 76, 50, 34), w: 3 },
      { d: kutu(96, 104, 48, 12), w: 1.6, dolgu: true },
      { d: `M100 110 L140 110`, w: 0.7 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(120, 76, 50, 34), w: 3 },
      { d: kutu(96, 104, 48, 12), w: 1.6, dolgu: true },
      { d: `M96 110 L80 116 M144 110 L160 116`, w: 1.2 },
      ...makas(176, 124),
      alev(80, 132, 1.2),
    ],
  },
];

// ---------- 4. Makrome Çerçeveli Ayna (4) ----------
const AYNA_H = { d: daire(120, 70, 46) + " " + daire(120, 70, 40), w: 1.6 };
const aynaIpler = (boy = 30): Cizgi => ({
  d: Array.from({ length: 20 }, (_, i) => {
    const a = (i * 2 * Math.PI) / 20;
    return `M${r(120 + 46 * Math.cos(a))} ${r(70 + 46 * Math.sin(a))} L${r(120 + (46 + boy) * Math.cos(a))} ${r(70 + (46 + boy) * Math.sin(a))}`;
  }).join(" "),
  w: 1,
});
export const MAKROME_AYNA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, AYNA_H, aynaIpler(24)] },
  { cizgiler: [ZEMIN, AYNA_H, aynaIpler(24), { d: daire(120, 70, 52), w: 3 }, yayOk(120, 70, 60, 5.6, 6.2)] },
  {
    cizgiler: [
      ZEMIN,
      AYNA_H,
      aynaIpler(24),
      { d: daire(120, 70, 52), w: 3 },
      { d: daire(120, 70, 38), w: 1.3, dolgu: true },
      { d: `M104 54 L112 46 M110 62 L122 50`, w: 0.9 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      AYNA_H,
      { d: daire(120, 70, 52), w: 3 },
      { d: daire(120, 70, 38), w: 1.3, dolgu: true },
      {
        d: `M90 116 L90 140 M100 118 L102 136 M110 120 L112 132 M120 120 L120 130 M130 120 L128 132 M140 118 L138 136 M150 116 L150 140`,
        w: 1,
      },
      ...makas(176, 130),
    ],
  },
];

// ---------- 5. Makrome Perde (4) ----------
const PIPLER = aralik(40, 200, 11);
export const MAKROME_PERDE_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: `M30 60 L210 60 M30 70 L210 70 M30 80 L210 80`, w: 1.2 },
      ...cetvel(30, 100, 180, 10),
      ...makas(172, 74),
    ],
  },
  { cizgiler: [ZEMIN, cubuk(24, 216, 20), ...PIPLER.map((x) => tersBas(x, 30)), ipler(PIPLER, 40, 134)] },
  {
    cizgiler: [
      ZEMIN,
      cubuk(24, 216, 20),
      ...PIPLER.map((x) => tersBas(x, 30)),
      ...[0, 1, 2, 3, 4].map((i) => kare(56 + i * 32, 54, 20)),
      ...[0, 1, 2, 3].map((i) => kare(72 + i * 32, 70, 20)),
      ...[1, 2].map((i) => kare(56 + i * 32 + 16, 86, 20)),
      ipler(PIPLER, 96, 134),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      cubuk(24, 216, 20),
      ...[0, 1, 2, 3, 4].map((i) => kare(56 + i * 32, 54, 20)),
      ipler(PIPLER, 64, 130),
      { d: `M30 130 L210 130`, w: 0.8, kesik: true },
      ...makas(180, 128),
    ],
  },
];

// ---------- 6. Makrome Tüy (4) ----------
const OMURGA: Cizgi = { d: `M120 10 L120 140`, w: 3 };
const lifler = (taranmis = false): Cizgi => ({
  d: Array.from(
    { length: 14 },
    (_, i) => `M${taranmis ? 86 : 96} ${30 + i * 7} L${taranmis ? 154 : 144} ${30 + i * 7}`,
  ).join(" "),
  w: taranmis ? 0.6 : 1.4,
});
export const MAKROME_TUY_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, { d: `M120 10 L120 140 M126 10 L126 140`, w: 2.4 }, { d: `M118 10 Q123 2 128 10`, w: 2.4 }] },
  { cizgiler: [ZEMIN, OMURGA, lifler(), ...[0, 1, 2, 3].map((i) => kare(120, 40 + i * 14, 10))] },
  { cizgiler: [ZEMIN, OMURGA, lifler(true), tarak(160, 60)] },
  {
    cizgiler: [
      ZEMIN,
      OMURGA,
      { d: TUY, w: 1.3, kesik: true },
      lifler(true),
      ...makas(160, 120),
      ...sprey(210, 130),
      ...sis(208, 82, 20),
    ],
  },
];

// ---------- 7. Granny Square Battaniye (5) ----------
export const CILGIN_YORGAN_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: [0, 1, 2, 3].map((i) => daire(96 + i * 10, 76, 5, 3)).join(" "), w: 1.2 },
      { d: daire(120, 76, 10), w: 1.2 },
      ...tig(130, 70),
    ],
  },
  { cizgiler: [ZEMIN, ...granny(120, 76, 20, 1), isinlar(120, 76, 4, 18, 12)] },
  { cizgiler: [ZEMIN, ...granny(120, 76, 42, 3), isinlar(120, 76, 30, 42, 24)] },
  { cizgiler: [ZEMIN, ...[0, 1, 2].flatMap((i) => [0, 1].flatMap((j) => granny(60 + i * 60, 46 + j * 60, 24, 2)))] },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(40, 20, 160, 110), w: 2 },
      { d: `M80 20 L80 130 M120 20 L120 130 M160 20 L160 130 M40 56 L200 56 M40 94 L200 94`, w: 1.2 },
      yunIgne(150, 70),
    ],
  },
];

// ---------- 8. İki Şişle İlk Atkı (4) ----------
export const ORGU_ATKI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: `M30 60 L210 60`, w: 2.2 },
      { d: Array.from({ length: 18 }, (_, i) => `M${40 + i * 9} 60 q4 8 0 12`).join(" "), w: 1 },
      ...yumak(200, 110),
    ],
  },
  { cizgiler: [ZEMIN, ...sisler(120, 40), ilmekler(60, 70, 15, 6)] },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 60, 180, 36), w: 1.6, dolgu: true },
      ilmekler(32, 62, 22, 4),
      ...cetvel(30, 110, 180, 10),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 60, 180, 36), w: 1.6, dolgu: true },
      ilmekler(32, 62, 22, 4),
      yunIgne(190, 60),
      { d: `M30 60 L20 54 M30 96 L22 102 M210 60 L220 54 M210 96 L218 102`, w: 1.4 },
    ],
  },
];

// ---------- 9. Yuvarlak Şişle Bere (5) ----------
export const ORGU_BERE_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: daire(120, 76, 60, 30), w: 2.2 },
      {
        d: Array.from({ length: 24 }, (_, i) => {
          const a = (i * Math.PI) / 12;
          return `M${r(120 + 60 * Math.cos(a))} ${r(76 + 30 * Math.sin(a))} l0 6`;
        }).join(" "),
        w: 1,
      },
      ...yumak(210, 120),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(60, 90, 120, 30), w: 1.6, dolgu: true },
      { d: Array.from({ length: 15 }, (_, i) => `M${64 + i * 8} 90 L${64 + i * 8} 120`).join(" "), w: 1 },
      { d: `M190 90 L190 120 M186 90 L194 90 M186 120 L194 120`, w: 0.9 },
    ],
  },
  { cizgiler: [ZEMIN, ...bere(120, 130, false), { d: `M60 70 L180 70`, w: 0.8, kesik: true }] },
  {
    cizgiler: [
      ZEMIN,
      ...bere(120, 130, false),
      { d: `M90 76 L120 58 L150 76 M100 90 L120 70 L140 90`, w: 1 },
      ...sisler(168, 44),
    ],
  },
  { cizgiler: [ZEMIN, ...bere(120, 134, true), onay(200, 40, 1.2)] },
];

// ---------- 10. Amigurumi Ahtapot (4) ----------
export const AMIGURUMI_AHTAPOT_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, spiral(110, 76, 4, 6, 8), isinlar(110, 76, 6, 30, 18), ...tig(140, 70)] },
  {
    cizgiler: [ZEMIN, ...ahtapot(110, 110, false), { d: `M80 110 Q110 100 140 110`, w: 1 }, ok(170, 70, 138, 84)],
    noktalar: [
      [176, 60, 2],
      [186, 66, 2],
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M30 70 L150 70`, w: 1.4 },
      { d: `M30 80 q10 10 20 0 q10 -10 20 0 q10 10 20 0 q10 -10 20 0 q10 10 20 0 q10 -10 20 0`, w: 2.4 },
      ...tig(150, 74),
    ],
  },
  { cizgiler: [ZEMIN, ...ahtapot(120, 100), yunIgne(150, 90)] },
];

// ---------- 11. Penye İpten Sepet (4) ----------
export const ORGU_SEPET_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      spiral(110, 76, 5, 6, 9),
      ...tig(150, 70),
      { d: daire(200, 110, 22) + " " + daire(200, 110, 10), w: 1.6 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(120, 110, 70, 16), w: 1.7, dolgu: true },
      { d: `M50 110 L54 94 L186 94 L190 110`, w: 1.4 },
      ok(120, 60, 120, 88),
    ],
  },
  { cizgiler: [ZEMIN, ...sepetO(120, 130, 60)] },
  { cizgiler: [ZEMIN, ...sepetO(120, 130, 60, true), ...tig(170, 76)] },
];

// ---------- 12. Bardak Altlığı (4) ----------
export const ORGU_BARDAK_ALTI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, { d: daire(120, 76, 6), w: 1.2 }, isinlar(120, 76, 6, 18, 12), ...tig(140, 70)] },
  { cizgiler: [ZEMIN, spiral(120, 76, 4, 10, 10), isinlar(120, 76, 10, 40, 24)] },
  {
    cizgiler: [
      ZEMIN,
      spiral(120, 76, 4, 10, 10),
      {
        d: Array.from({ length: 12 }, (_, i) => {
          const a = (i * Math.PI) / 6;
          return `M${r(120 + 40 * Math.cos(a - 0.2))} ${r(76 + 40 * Math.sin(a - 0.2))} Q${r(120 + 54 * Math.cos(a))} ${r(76 + 54 * Math.sin(a))} ${r(120 + 40 * Math.cos(a + 0.2))} ${r(76 + 40 * Math.sin(a + 0.2))}`;
        }).join(" "),
        w: 1.4,
      },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(100, 90, 50, 14), w: 1.6, dolgu: true },
      { d: `M150 60 L210 60 L200 80 L150 80 Z`, w: 1.6, dolgu: true },
      { d: `M150 80 L144 86`, w: 2 },
      yunIgne(40, 60),
    ],
  },
];

// ---------- 13. Makrome File Çanta (4) ----------
export const MAKROME_CANTA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      halka(80, 30, 16),
      halka(160, 30, 16),
      ipler(aralik(66, 94, 6), 46, 120),
      ipler(aralik(146, 174, 6), 46, 120),
    ],
  },
  { cizgiler: [ZEMIN, cubuk(60, 180, 26), elmasAg(60, 40, 120, 80, 20)] },
  {
    cizgiler: [
      ZEMIN,
      { d: `M60 30 L60 120 L180 120 L180 30`, w: 1.4 },
      elmasAg(60, 40, 120, 80, 20),
      { d: `M56 60 l8 0 M56 90 l8 0 M176 60 l8 0 M176 90 l8 0`, w: 2.4 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M80 30 Q60 30 60 60 L66 124 L174 124 L180 60 Q180 30 160 30`, w: 1.6 },
      halka(80, 24, 12),
      halka(160, 24, 12),
      elmasAg(64, 50, 112, 70, 20),
      { d: `M70 124 l6 6 M90 124 l6 6 M110 124 l6 6 M130 124 l6 6 M150 124 l6 6`, w: 1.4 },
    ],
  },
];

// ---------- 14. Makrome Avize Kılıfı (4) ----------
const AB_IP = aralik(108, 132, 6);
export const MAKROME_TAVUK_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, halka(120, 20, 10), ipler(AB_IP, 30, 120)] },
  {
    cizgiler: [
      ZEMIN,
      halka(120, 20, 10),
      abajur(120, 30),
      ...[0, 1].map((i) => kare(110 + i * 20, 50, 14)),
      ...[0, 1, 2].map((i) => kare(100 + i * 20, 72, 14)),
      ...[0, 1, 2, 3].map((i) => kare(90 + i * 20, 94, 14)),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      halka(120, 20, 10),
      abajur(120, 30),
      ...[0, 1, 2].map((i) => kare(100 + i * 20, 72, 14)),
      { d: daire(120, 110, 50, 8), w: 3 },
      yayOk(120, 110, 60, 0.2, 1),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M120 0 L120 30`, w: 1.4 },
      abajur(120, 30),
      { d: daire(120, 110, 50, 8), w: 3 },
      { d: `M114 110 L114 120 L126 120 L126 110 Z`, w: 1.3, dolgu: true },
      { d: `M120 126 Q112 134 120 140 Q128 134 120 126 Z`, w: 1.1 },
    ],
  },
];

// ---------- 15. Ponpon Halı (4) ----------
export const PONPON_HALI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...ponpon(60, 90, 16),
      ...ponpon(100, 96, 14),
      { d: `M40 40 L40 70 M50 40 L50 70`, w: 1 },
      ...yumak(180, 100),
      ...makas(150, 60),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      file(40, 30, 160, 100),
      ...ponpon(68, 58, 12),
      ...ponpon(96, 58, 12),
      { d: `M110 58 L124 58`, w: 1.4 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      file(40, 30, 160, 100),
      ...[0, 1, 2, 3, 4, 5].flatMap((i) => [0, 1, 2, 3].flatMap((j) => ponpon(54 + i * 26, 44 + j * 26, 12))),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...[0, 1, 2, 3, 4, 5].flatMap((i) => [0, 1, 2, 3].flatMap((j) => ponpon(54 + i * 26, 44 + j * 26, 12))),
      ...makas(186, 126),
    ],
  },
];

// ---------- 16. Kalın Ev Çorabı (4) ----------
export const ORGU_CORAP_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(90, 30, 40, 50), w: 1.6, dolgu: true },
      { d: Array.from({ length: 5 }, (_, i) => `M${94 + i * 8} 30 L${94 + i * 8} 80`).join(" "), w: 1 },
      ...yumak(180, 110),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M90 30 L90 80 Q90 104 112 104 L130 104 L130 30`, w: 1.6, dolgu: true },
      { d: `M96 84 Q104 98 120 96`, w: 1 },
      yayOk(110, 92, 16, 0.8, 2.6),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M80 30 L80 84 Q80 104 100 104 L180 104 L180 84 L120 84 L120 30 Z`, w: 1.6, dolgu: true },
      ilmekler(124, 88, 7, 1, 8),
    ],
  },
  { cizgiler: [ZEMIN, ...corap(100, 30), { d: `M160 88 L170 94 M160 108 L170 102`, w: 1 }, yunIgne(180, 120)] },
];

// ---------- 17. Bitki Askısı (Saksı Kılıfı) (4) ----------
export const TEL_TAVA_ORGU_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, spiral(120, 100, 4, 6, 8), isinlar(120, 100, 6, 30, 18), ...tig(150, 96)] },
  { cizgiler: [ZEMIN, ...sepetO(120, 130, 40)] },
  {
    cizgiler: [
      ZEMIN,
      halka(120, 14, 8),
      { d: `M80 90 L118 22 M100 90 L119 22 M140 90 L121 22 M160 90 L122 22`, w: 1.2 },
      ...sepetO(120, 130, 40),
    ],
  },
  {
    cizgiler: [
      halka(120, 10, 8),
      { d: `M76 80 L118 18 M96 80 L119 18 M144 80 L121 18 M164 80 L122 18`, w: 1.2 },
      ...saksi(120, 84, 74, 46),
      ...sepetO(120, 130, 30),
    ],
  },
];

// ---------- 18. Makrome Asma Raf (4) ----------
export const MAKROME_DUVAR_RAFI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...raf(120, 100),
      { d: daire(66, 94, 3) + " " + daire(166, 94, 3) + " " + daire(84, 88, 3) + " " + daire(176, 88, 3), w: 1.2 },
      ...matkap(166, 90),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      halka(120, 14, 10),
      { d: `M112 24 L112 40 M116 24 L116 40 M124 24 L124 40 M128 24 L128 40`, w: 1.2 },
      ...kareSutun(120, 46, 5, 20, 12),
      ipler([110, 130], 104, 130),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      halka(120, 14, 10),
      { d: `M118 24 L66 96 M119 24 L84 90 M121 24 L166 96 M122 24 L176 90`, w: 1.2 },
      ...raf(120, 100),
      { d: daire(66, 110, 4) + " " + daire(166, 110, 4), w: 1.4, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      halka(120, 14, 10),
      { d: `M118 24 L66 96 M119 24 L84 90 M121 24 L166 96 M122 24 L176 90`, w: 1.2 },
      ...raf(120, 100),
      ...teraziK(90, 70),
      ...parmak(70, 92),
    ],
  },
];
function teraziK(x: number, y: number): Cizgi[] {
  return [
    { d: kutu(x, y, 60, 8), w: 1.4, dolgu: true },
    { d: daire(x + 30, y + 4, 2), w: 0.8, dolgu: true },
  ];
}
