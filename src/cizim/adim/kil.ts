// Kil & Seramik kategorisi (Altın 40 dışı 18 proje): adım sahneleri (viewBox 0 0 240 150).
// Adım sayısı ve sırası src/data/ek/kil.ts içeriğiyle birebir eşleşir.
import { Cizgi, Cizim, Tarama, daire, kutu, yuvarla as r } from "../arac";
import {
  bez,
  bicak,
  damla,
  firca,
  kalem,
  ok,
  onay,
  parmak,
  saat,
  sukulent,
  termometre,
  yayOk,
  ZEMIN,
  zimpara,
} from "./parca";

// ---------- Ortak parçalar ----------
const takvim = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 30, 28), w: 1.4, dolgu: true },
  {
    d: `M${x} ${y + 8} L${x + 30} ${y + 8} M${x + 8} ${y - 3} L${x + 8} ${y + 3} M${x + 22} ${y - 3} L${x + 22} ${y + 3}`,
    w: 1.2,
  },
];
// Merdane: merkez (x,y)
const merdane = (x: number, y: number): Cizgi => ({
  d: kutu(x - 40, y - 7, 80, 14) + ` M${x - 40} ${y} L${x - 56} ${y} M${x + 40} ${y} L${x + 56} ${y}`,
  w: 1.6,
  dolgu: true,
});
// Açılmış kil (yassı): sol (x,y), en, kalınlık
const plaka = (x: number, y: number, en = 150, k = 8): Cizgi => ({
  d: `M${x} ${y} Q${x + en / 2} ${y - 3} ${x + en} ${y} L${x + en} ${y + k} L${x} ${y + k} Z`,
  w: 1.6,
  dolgu: true,
});
// Mutfak fırını: sol üst (x,y)
const firin = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 110, 84), w: 1.8, dolgu: true },
  { d: kutu(x + 10, y + 22, 90, 52), w: 1.3 },
  { d: daire(x + 20, y + 11, 3) + " " + daire(x + 34, y + 11, 3), w: 1 },
  { d: `M${x + 14} ${y + 56} L${x + 96} ${y + 56}`, w: 1 },
];
// Kürdan: uç (x,y)
const kurdan = (x: number, y: number): Cizgi => ({ d: `M${x} ${y} L${x + 34} ${y - 44}`, w: 1.4 });
// Kil topu: merkez (x,y)
const top = (x: number, y: number, R = 12): Cizgi => ({ d: daire(x, y, R), w: 1.5, dolgu: true });
// Kil rulo (yatay): sol (x,y), en, kalınlık
const rulo = (x: number, y: number, en = 120, k = 10): Cizgi => ({
  d: `M${x + k / 2} ${y - k / 2} L${x + en - k / 2} ${y - k / 2} A${k / 2} ${k / 2} 0 0 1 ${x + en - k / 2} ${y + k / 2} L${x + k / 2} ${y + k / 2} A${k / 2} ${k / 2} 0 0 1 ${x + k / 2} ${y - k / 2} Z`,
  w: 1.4,
  dolgu: true,
});
// Kruvasan: merkez (x,y)
const kruvasan = (x: number, y: number, s = 1): Cizgi[] => {
  const S = (d: number) => r(d * s);
  return [
    {
      d: `M${x - S(40)} ${y + S(10)} Q${x - S(36)} ${y - S(24)} ${x} ${y - S(26)} Q${x + S(36)} ${y - S(24)} ${x + S(40)} ${y + S(10)} Q${x + S(20)} ${y - S(4)} ${x} ${y - S(6)} Q${x - S(20)} ${y - S(4)} ${x - S(40)} ${y + S(10)} Z`,
      w: 1.6,
      dolgu: true,
    },
    {
      d: `M${x - S(22)} ${y - S(18)} Q${x - S(18)} ${y - S(8)} ${x - S(16)} ${y - S(4)} M${x} ${y - S(26)} L${x} ${y - S(6)} M${x + S(22)} ${y - S(18)} Q${x + S(18)} ${y - S(8)} ${x + S(16)} ${y - S(4)}`,
      w: 0.9,
    },
  ];
};
// Diş fırçası: kıllar (x,y), sap sağa
const disFircasi = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y - 8, 20, 8), w: 1.3, dolgu: true },
  {
    d: `M${x + 2} ${y} l0 6 M${x + 6} ${y} l0 6 M${x + 10} ${y} l0 6 M${x + 14} ${y} l0 6 M${x + 18} ${y} l0 6`,
    w: 0.9,
  },
  { d: `M${x + 20} ${y - 4} L${x + 80} ${y - 10}`, w: 3 },
];
// Mıknatıs: merkez (x,y)
const miknatis = (x: number, y: number): Cizgi => ({ d: daire(x, y, 10) + " " + daire(x, y, 4), w: 1.4, dolgu: true });
// Pinch pot (çanak): orta (cx,y) taban
const canak = (cx: number, y: number, en = 70, boy = 50): Cizgi[] => [
  {
    d: `M${cx - en / 2} ${y - boy} Q${cx - en / 2 - 4} ${y} ${cx} ${y} Q${cx + en / 2 + 4} ${y} ${cx + en / 2} ${y - boy}`,
    w: 1.8,
    dolgu: true,
  },
  { d: daire(cx, y - boy, en / 2, 8), w: 1.5 },
];
// Yüz (saksı): (cx, cy)
const yuz = (cx: number, cy: number): Cizgi[] => [
  { d: daire(cx - 12, cy, 2.4) + " " + daire(cx + 12, cy, 2.4), w: 1, dolgu: true },
  { d: `M${cx - 8} ${cy + 12} Q${cx} ${cy + 18} ${cx + 8} ${cy + 12}`, w: 1.2 },
  { d: daire(cx, cy + 6, 4, 3), w: 1.2, dolgu: true },
];
// Boncuk dizisi
const boncuk = (x: number, y: number, R = 9, desen = true): Cizgi[] => [
  { d: daire(x, y, R), w: 1.5, dolgu: true },
  ...(desen ? [{ d: `M${x - R + 2} ${y - 2} Q${x} ${y + 4} ${x + R - 2} ${y - 2}`, w: 0.8 }] : []),
];
// Fil figürü: taban (x,y)
const fil = (x: number, y: number, s = 1, iskelet = false): Cizgi[] => {
  const S = (d: number) => r(d * s);
  if (iskelet)
    return [
      {
        d: `M${x - S(30)} ${y} L${x - S(30)} ${y - S(26)} L${x + S(20)} ${y - S(26)} L${x + S(20)} ${y} M${x - S(16)} ${y} L${x - S(16)} ${y - S(26)} M${x + S(6)} ${y} L${x + S(6)} ${y - S(26)} M${x + S(20)} ${y - S(26)} L${x + S(34)} ${y - S(40)} L${x + S(40)} ${y - S(20)}`,
        w: 1.4,
      },
    ];
  return [
    {
      d: `M${x - S(36)} ${y} L${x - S(36)} ${y - S(26)} Q${x - S(36)} ${y - S(44)} ${x - S(6)} ${y - S(44)} Q${x + S(20)} ${y - S(44)} ${x + S(26)} ${y - S(34)} Q${x + S(40)} ${y - S(50)} ${x + S(46)} ${y - S(30)} Q${x + S(50)} ${y - S(10)} ${x + S(44)} ${y} L${x + S(40)} ${y} Q${x + S(42)} ${y - S(16)} ${x + S(34)} ${y - S(20)} L${x + S(26)} ${y - S(18)} L${x + S(26)} ${y} L${x + S(12)} ${y} L${x + S(12)} ${y - S(12)} L${x - S(20)} ${y - S(12)} L${x - S(20)} ${y} Z`,
      w: 1.6,
      dolgu: true,
    },
    { d: daire(x + S(26), y - S(34), S(8), S(10)), w: 1.2 },
    { d: daire(x + S(34), y - S(36), S(1.5)), w: 1, dolgu: true },
  ];
};
// Folyo: (x,y) merkez
const folyo = (x: number, y: number, R = 18): Cizgi => ({
  d: `M${x - R} ${y} L${x - R + 6} ${y - R + 4} L${x + 4} ${y - R} L${x + R} ${y - 6} L${x + R - 4} ${y + R - 6} L${x - 6} ${y + R} Z M${x - 8} ${y - 4} L${x + 6} ${y + 2} M${x - 2} ${y - 10} L${x + 4} ${y + 10}`,
  w: 1.2,
  dolgu: true,
});
// Oval isimlik: merkez (x,y)
const oval = (x: number, y: number, rx = 70, ry = 40): Cizgi => ({ d: daire(x, y, rx, ry), w: 1.8, dolgu: true });
const harfler: Cizgi = {
  d: `M84 66 L84 86 M84 66 L94 66 M84 76 L92 76 M104 86 L110 66 L116 86 M106 80 L114 80 M126 66 L126 86 L136 86 M146 66 L146 86 M146 66 Q156 66 156 71 Q156 76 146 76 Q156 76 156 81 Q156 86 146 86`,
  w: 2,
};
// El şekli (yüzük tutucu): taban (cx,y)
const el = (cx: number, y: number, s = 1): Cizgi => {
  const S = (d: number) => r(d * s);
  return {
    d: `M${cx - S(20)} ${y} L${cx - S(20)} ${y - S(40)} L${cx - S(22)} ${y - S(70)} Q${cx - S(18)} ${y - S(76)} ${cx - S(14)} ${y - S(70)} L${cx - S(12)} ${y - S(50)} L${cx - S(10)} ${y - S(84)} Q${cx - S(6)} ${y - S(90)} ${cx - S(2)} ${y - S(84)} L${cx} ${y - S(52)} L${cx + S(2)} ${y - S(86)} Q${cx + S(6)} ${y - S(92)} ${cx + S(10)} ${y - S(86)} L${cx + S(10)} ${y - S(52)} L${cx + S(14)} ${y - S(78)} Q${cx + S(18)} ${y - S(82)} ${cx + S(22)} ${y - S(76)} L${cx + S(20)} ${y - S(40)} L${cx + S(34)} ${y - S(56)} Q${cx + S(40)} ${y - S(54)} ${cx + S(36)} ${y - S(46)} L${cx + S(20)} ${y - S(20)} L${cx + S(20)} ${y} Z`,
    w: 1.6,
    dolgu: true,
  };
};
// Kanyon (desenli silindir, yandan): sol (x,y)
const kanyon = (x: number, y: number, en = 120, R = 22): Cizgi[] => [
  { d: `M${x} ${y - R} L${x + en} ${y - R} M${x} ${y + R} L${x + en} ${y + R}`, w: 1.6 },
  { d: daire(x + en, y, 8, R), w: 1.6, dolgu: true },
  { d: daire(x + en, y, 5, R * 0.75), w: 1 },
  { d: `M${x} ${y - R} Q${x - 8} ${y} ${x} ${y + R}`, w: 1.6 },
];
// Karpuz dilimi: merkez alt (cx,y)
const karpuz = (cx: number, y: number, R = 24, cekirdek = false): Cizgi[] => [
  { d: `M${cx - R} ${y} A${R} ${R} 0 0 0 ${cx + R} ${y} Z`, w: 1.6, dolgu: true },
  { d: `M${cx - R + 4} ${y} A${R - 4} ${R - 4} 0 0 0 ${cx + R - 4} ${y}`, w: 0.9 },
  ...(cekirdek
    ? [
        {
          d: daire(cx - 8, y + 8, 1.5, 2.5) + " " + daire(cx, y + 12, 1.5, 2.5) + " " + daire(cx + 8, y + 8, 1.5, 2.5),
          w: 1,
          dolgu: true,
        },
      ]
    : []),
];
// Kupa: sol alt (x,y)
const kupa = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y - 70} L${x + 4} ${y} L${x + 56} ${y} L${x + 60} ${y - 70}`, w: 1.8, dolgu: true },
  { d: daire(x + 30, y - 70, 30, 6), w: 1.5 },
  {
    d: `M${x + 58} ${y - 56} Q${x + 80} ${y - 52} ${x + 76} ${y - 34} Q${x + 72} ${y - 20} ${x + 56} ${y - 20}`,
    w: 2.4,
  },
];
// Mum (silindir): taban orta (cx,y)
const mum = (cx: number, y: number): Cizgi[] => [
  { d: kutu(cx - 12, y - 40, 24, 40), w: 1.6, dolgu: true },
  { d: `M${cx} ${y - 40} L${cx} ${y - 48}`, w: 1.2 },
];
// Çömlek çarkı
const CARK: Cizgi[] = [
  { d: daire(120, 120, 70, 12), w: 1.8, dolgu: true },
  { d: `M80 132 L80 140 L160 140 L160 132`, w: 1.6 },
];
const kilCark = (en = 30, boy = 30): Cizgi => ({
  d: `M${120 - en} 116 Q${120 - en - 4} ${116 - boy} ${120 - en / 2} ${116 - boy} L${120 + en / 2} ${116 - boy} Q${120 + en + 4} ${116 - boy} ${120 + en} 116 Z`,
  w: 1.6,
  dolgu: true,
});
// Kalıp kesici (harf "A"): merkez (x,y)
const harfKalip = (x: number, y: number): Cizgi => ({
  d: `M${x - 18} ${y + 24} L${x - 4} ${y - 24} L${x + 4} ${y - 24} L${x + 18} ${y + 24} L${x + 10} ${y + 24} L${x + 6} ${y + 12} L${x - 6} ${y + 12} L${x - 10} ${y + 24} Z M${x - 3} ${y + 4} L${x + 3} ${y + 4} L${x} ${y - 8} Z`,
  w: 1.6,
  dolgu: true,
});
// Yaprak: merkez (x,y)
const yaprak = (x: number, y: number, s = 1): Cizgi[] => {
  const S = (d: number) => r(d * s);
  return [
    {
      d: `M${x - S(50)} ${y} Q${x} ${y - S(36)} ${x + S(50)} ${y} Q${x} ${y + S(36)} ${x - S(50)} ${y} Z`,
      w: 1.5,
      dolgu: true,
    },
    {
      d: `M${x - S(50)} ${y} L${x + S(50)} ${y} M${x - S(20)} ${y} l${S(10)} ${-S(14)} M${x} ${y} l${S(10)} ${-S(16)} M${x + S(20)} ${y} l${S(10)} ${-S(12)} M${x - S(20)} ${y} l${S(10)} ${S(14)} M${x} ${y} l${S(10)} ${S(16)} M${x + S(20)} ${y} l${S(10)} ${S(12)}`,
      w: 0.8,
    },
  ];
};
// Pasta katları: alt orta (cx,y)
const pasta = (cx: number, y: number): Cizgi[] => [
  { d: kutu(cx - 50, y - 36, 100, 36) + " " + kutu(cx - 34, y - 64, 68, 28), w: 1.7, dolgu: true },
  { d: daire(cx, y - 64, 34, 5), w: 1.2 },
];
// Damga harfleri
const damgaKutu = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 18, 18), w: 1.5, dolgu: true },
  { d: kutu(x + 3, y + 18, 12, 6), w: 1.2, dolgu: true },
];
// İp: (x1,y1)→(x2,y2) yukarı halka
const ip = (x1: number, y1: number, x2: number, y2: number): Cizgi => ({
  d: `M${x1} ${y1} Q${(x1 + x2) / 2} ${Math.min(y1, y2) - 40} ${x2} ${y2}`,
  w: 1.1,
});
// Dantel doku: sol üst (x,y)
const dantel = (x: number, y: number, en: number, boy: number): Cizgi => {
  let d = "";
  for (let i = 0; i < en; i += 14) for (let j = 0; j < boy; j += 14) d += daire(x + 7 + i, y + 7 + j, 4) + " ";
  return { d: d.trim(), w: 0.7 };
};
const yildiz = (x: number, y: number, R = 18): Cizgi => ({
  d:
    Array.from({ length: 10 }, (_, i) => {
      const a = (i * Math.PI) / 5 - Math.PI / 2;
      const rr = i % 2 ? R * 0.45 : R;
      return `${i ? "L" : "M"}${r(x + rr * Math.cos(a))} ${r(y + rr * Math.sin(a))}`;
    }).join(" ") + " Z",
  w: 1.5,
  dolgu: true,
});
const kalp = (x: number, y: number, R = 16): Cizgi => ({
  d: `M${x} ${y + R} Q${x - R * 1.6} ${y - R * 0.2} ${x - R * 0.6} ${y - R * 0.9} Q${x} ${y - R} ${x} ${y - R * 0.4} Q${x} ${y - R} ${x + R * 0.6} ${y - R * 0.9} Q${x + R * 1.6} ${y - R * 0.2} ${x} ${y + R} Z`,
  w: 1.5,
  dolgu: true,
});
// Tarama yardımcı
const boya = (id: string, sinir: string, k: [number, number, number, number], sonra = 0): Tarama => ({
  id,
  sinir,
  kutu: k,
  aralik: 4,
  sonra,
});

// ---------- 1. Minyatür Yiyecek Magneti (5) ----------
export const KIL_MIKNATIS_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: `M40 100 L120 90 L40 80 Z`, w: 1.5, dolgu: true },
      ok(126, 90, 146, 90),
      ...kruvasan(190, 96, 0.8),
    ],
  },
  {
    cizgiler: [ZEMIN, ...kruvasan(110, 100, 1.4), ...disFircasi(120, 70)],
    noktalar: [
      [90, 84, 0.7],
      [100, 80, 0.7],
      [128, 82, 0.7],
    ],
  },
  {
    cizgiler: [ZEMIN, ...kruvasan(110, 100, 1.4), ...firca(150, 100)],
    taramalar: [boya("k", `M54 114 Q60 80 80 76 L80 110 Z`, [54, 76, 26, 38], 0)],
  },
  { cizgiler: [ZEMIN, ...firin(60, 40), ...kruvasan(115, 98, 0.5), ...termometre(200, 40, 50), ...saat(30, 40, 10)] },
  {
    cizgiler: [
      ZEMIN,
      ...kruvasan(100, 100, 1.2),
      miknatis(180, 90),
      ok(166, 90, 140, 90),
      { d: `M174 100 L186 100`, w: 1 },
    ],
  },
];

// ---------- 2. Kilden Mini Saksı (5) ----------
export const KIL_SAKSI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, top(70, 100, 20), ok(96, 100, 116, 100), ...canak(160, 128, 60, 40), ...parmak(160, 82)] },
  {
    cizgiler: [ZEMIN, ...canak(120, 128, 80, 56), ...yuz(120, 96), { d: `M80 96 q-8 4 0 8 M160 96 q8 4 0 8`, w: 1.4 }],
  },
  {
    cizgiler: [
      ZEMIN,
      ...canak(120, 128, 80, 56),
      ...yuz(120, 96),
      { d: `M70 70 Q120 50 170 70 L170 80 Q120 60 70 80 Z`, w: 1.2, kesik: true },
      ...takvim(190, 30),
    ],
  },
  {
    cizgiler: [ZEMIN, ...canak(110, 128, 80, 56), ...yuz(110, 96), ...firca(150, 100)],
    taramalar: [boya("s", `M70 72 Q66 128 110 128 Q154 128 150 72 Z`, [66, 72, 88, 56], 0)],
  },
  { cizgiler: [ZEMIN, ...canak(120, 128, 80, 56), ...yuz(120, 100), ...sukulent(120, 72, 1.4)] },
];

// ---------- 3. Polimer Kil Boncuk (4) ----------
export const KIL_BONCUK_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      rulo(40, 70, 160, 10),
      rulo(40, 84, 160, 10),
      rulo(40, 98, 160, 10),
      { d: `M50 70 Q60 84 50 98`, w: 0.8 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      rulo(30, 70, 100, 16),
      { d: `M50 62 L50 78 M70 62 L70 78 M90 62 L90 78 M110 62 L110 78`, w: 1, kesik: true },
      ...bicak(120, 60),
      top(160, 110, 9),
      top(186, 110, 9),
      top(212, 110, 9),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...boncuk(80, 100),
      ...boncuk(120, 100),
      ...boncuk(160, 100),
      { d: `M60 100 L180 100`, w: 1.4 },
      kurdan(176, 98),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...firin(60, 40),
      { d: `M80 92 L150 92`, w: 1.2 },
      ...boncuk(96, 92, 6, false),
      ...boncuk(115, 92, 6, false),
      ...boncuk(134, 92, 6, false),
      ...termometre(200, 40, 50),
    ],
  },
];

// ---------- 4. Polimer Kil Hayvan Figürü (5) ----------
export const KIL_HAYVAN_FIGUR_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...fil(110, 130, 1.4, true), folyo(104, 80, 16)] },
  { cizgiler: [ZEMIN, ...fil(110, 130, 1.4), ...parmak(160, 70)] },
  {
    cizgiler: [
      ZEMIN,
      ...fil(110, 130, 1.4),
      { d: `M60 100 l4 -4 M66 104 l4 -4 M72 108 l4 -4 M110 80 l4 -4 M120 84 l4 -4`, w: 0.9 },
      { d: `M58 92 Q46 86 48 100`, w: 1.6 },
      kurdan(160, 90),
    ],
  },
  {
    cizgiler: [ZEMIN, ...fil(110, 130, 1.4), ...firca(160, 76)],
    noktalar: [
      [150, 86, 1],
      [154, 90, 1],
      [148, 92, 1],
    ],
  },
  { cizgiler: [ZEMIN, ...firin(60, 40), ...fil(108, 96, 0.5), ...termometre(200, 40, 50), ...saat(30, 40, 10)] },
];

// ---------- 5. Kil Kapı İsimliği (5) ----------
export const KIL_MEKAN_PLAKASI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, plaka(30, 100, 180, 10), merdane(120, 86), { d: daire(120, 70, 60, 26), w: 1, kesik: true }] },
  { cizgiler: [ZEMIN, oval(120, 76), harfler, ...damgaKutu(190, 40)] },
  {
    cizgiler: [
      ZEMIN,
      oval(120, 76),
      harfler,
      { d: daire(70, 50, 4) + " " + daire(170, 50, 4), w: 1.4 },
      kurdan(170, 50),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      oval(120, 76),
      { d: harfler.d, w: 3 },
      { d: daire(70, 50, 4) + " " + daire(170, 50, 4), w: 1.4 },
      ...firca(170, 100),
      ...takvim(200, 10),
    ],
  },
  {
    cizgiler: [
      { d: `M0 40 L240 40 M0 80 L240 80 M0 120 L240 120 M60 0 L60 40 M180 0 L180 40`, w: 0.4 },
      oval(120, 90, 66, 36),
      { d: harfler.d, w: 2, dolgu: false },
      ip(70, 66, 170, 66),
      { d: daire(120, 20, 3), w: 1.2, dolgu: true },
    ],
  },
];

// ---------- 6. El Şekli Yüzük Tutucu (4) ----------
export const KIL_YUZUK_TABAGI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, folyo(100, 90, 26), { d: `M100 64 L100 30 M90 66 L84 36 M110 66 L118 38`, w: 2.4 }] },
  { cizgiler: [ZEMIN, el(120, 130), ...parmak(170, 70)] },
  { cizgiler: [ZEMIN, { d: daire(120, 124, 56, 12), w: 1.7, dolgu: true }, el(120, 124, 0.9)] },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(120, 124, 56, 12), w: 1.7, dolgu: true },
      el(120, 124, 0.9),
      { d: daire(120, 70, 8, 4), w: 1.6 },
      ...firca(150, 50),
    ],
  },
];

// ---------- 7. Kil Meyve Dilimi Magnetler (4) ----------
export const KIL_MIKNATIS_MEYVE_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...kanyon(40, 80), rulo(40, 120, 120, 8)] },
  { cizgiler: [ZEMIN, ...kanyon(30, 80, 100), ...bicak(140, 60), ...karpuz(180, 100), ...karpuz(210, 116, 16)] },
  { cizgiler: [ZEMIN, ...karpuz(120, 70, 50, true), kurdan(150, 100)] },
  { cizgiler: [ZEMIN, ...karpuz(90, 80, 36, true), miknatis(170, 90), ok(156, 90, 130, 90)] },
];

// ---------- 8. Porselen Kupa Boyama (4) ----------
export const SERAMIK_KUPA_BOYAMA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...kupa(80, 130), ...bez0(170, 70)] },
  {
    cizgiler: [
      ZEMIN,
      ...kupa(80, 130),
      { d: `M92 100 Q100 86 110 100 Q120 114 130 100`, w: 1.4 },
      { d: `M80 72 L140 72`, w: 0.8, kesik: true },
      ...kalem(130, 96),
    ],
  },
  {
    cizgiler: [ZEMIN, ...kupa(80, 130), { d: `M92 100 Q100 86 110 100 Q120 114 130 100`, w: 1.4 }, ...takvim(180, 40)],
  },
  {
    cizgiler: [
      ZEMIN,
      ...firin(60, 40),
      { d: `M102 70 L104 96 L128 96 L130 70 M130 76 Q140 78 138 86 Q136 92 128 92`, w: 1.5, dolgu: true },
      ...termometre(200, 40, 50),
      { d: `M200 110 L220 110`, w: 0.8 },
    ],
  },
];
function bez0(x: number, y: number): Cizgi[] {
  return bez(x, y);
}

// ---------- 9. Kil Mumluk (4) ----------
export const KIL_MUM_TUTUCU_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, plaka(30, 100, 180, 10), { d: daire(120, 90, 40, 10), w: 1.3, kesik: true }, ...bicak(160, 86)] },
  { cizgiler: [ZEMIN, { d: daire(120, 110, 50, 14), w: 1.8, dolgu: true }, ...mum(120, 106), ok(120, 40, 120, 60)] },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(120, 110, 50, 14), w: 1.8, dolgu: true },
      { d: daire(120, 106, 14, 4), w: 1.4 },
      ...zimpara(150, 70, 30, 10),
      ...takvim(30, 30),
    ],
  },
  { cizgiler: [ZEMIN, { d: daire(120, 110, 50, 14), w: 1.8, dolgu: true }, ...mum(120, 106), ...firca(170, 100)] },
];

// ---------- 10. Çömlek Çarkında İlk Kase (5) ----------
export const KIL_KASE_CARKLI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: `M60 110 Q60 80 100 80 Q150 80 160 100 Q150 110 120 112 Z`, w: 1.7, dolgu: true },
      ...parmak(90, 76),
      ...parmak(130, 76),
      yayOk(110, 96, 26, 3.4, 5.8),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...CARK,
      kilCark(26, 30),
      ...parmak(84, 100),
      ...parmak(156, 100),
      yayOk(120, 120, 80, 0.2, 1.2),
      damla(120, 70),
    ],
  },
  { cizgiler: [ZEMIN, ...CARK, kilCark(30, 30), { d: daire(120, 86, 14, 4), w: 1.2 }, ...parmak(120, 84)] },
  {
    cizgiler: [
      ZEMIN,
      ...CARK,
      { d: `M74 116 Q66 84 72 74 L168 74 Q174 84 166 116 Z`, w: 1.7, dolgu: true },
      { d: daire(120, 74, 48, 7), w: 1.4 },
      ...parmak(80, 80),
      ...parmak(162, 80),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...CARK,
      { d: `M74 116 Q66 84 72 74 L168 74 Q174 84 166 116 Z`, w: 1.7, dolgu: true },
      { d: `M40 116 L200 116`, w: 1.1 },
      { d: daire(40, 116, 4) + " " + daire(200, 116, 4), w: 1.2, dolgu: true },
      ...takvim(196, 20),
    ],
  },
];

// ---------- 11. Polimer Kil Sabunluk (4) ----------
const SABUNLUK = `M50 90 Q50 70 120 70 Q190 70 190 90 Q190 110 120 110 Q50 110 50 90 Z`;
export const KIL_SABUNLUK_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      rulo(40, 70, 160, 14),
      rulo(40, 90, 160, 14),
      { d: `M50 70 Q80 90 110 70 Q140 90 170 70`, w: 1 },
      yayOk(120, 80, 30, 0, 5),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: SABUNLUK, w: 1.8, dolgu: true },
      { d: `M50 90 L44 84 M190 90 L196 84`, w: 1.4 },
      ...bicak(170, 76),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: SABUNLUK, w: 1.8, dolgu: true },
      { d: [90, 110, 130, 150, 100, 120, 140].map((x, i) => daire(x, i < 4 ? 84 : 96, 3)).join(" "), w: 1.2 },
      { d: kutu(150, 20, 6, 60), w: 1.2, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...firin(60, 40),
      { d: `M82 90 Q82 82 115 82 Q148 82 148 90 Q148 98 115 98 Q82 98 82 90 Z`, w: 1.5, dolgu: true },
      ...termometre(200, 40, 50),
    ],
  },
];

// ---------- 12. Polimer Kil Harf Kolye (4) ----------
export const KIL_ISIM_KOLYE_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      plaka(40, 100, 160, 6),
      merdane(120, 88),
      { d: `M210 100 L210 106 M206 100 L214 100 M206 106 L214 106`, w: 0.9 },
    ],
  },
  { cizgiler: [ZEMIN, plaka(40, 100, 160, 6), harfKalip(120, 70), ok(120, 30, 120, 44)] },
  { cizgiler: [ZEMIN, harfKalip(120, 80), { d: daire(120, 52, 3), w: 1.2 }, { d: `M120 52 L150 20`, w: 1.4 }] },
  {
    cizgiler: [
      ZEMIN,
      harfKalip(120, 90),
      { d: daire(120, 58, 5), w: 1.4 },
      { d: `M120 53 Q80 30 60 0 M120 53 Q160 30 180 0`, w: 1, kesik: true },
    ],
  },
];

// ---------- 13. Yaprak Baskılı Kil Tabak (5) ----------
export const KIL_TABAK_BASKI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, plaka(30, 100, 180, 10), merdane(120, 86)] },
  { cizgiler: [ZEMIN, { d: kutu(30, 40, 180, 80), w: 1.6, dolgu: true }, ...yaprak(120, 80), merdane(120, 40)] },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 40, 180, 80), w: 1.6, dolgu: true },
      { d: yaprak(120, 80)[0].d, w: 1.3, kesik: true },
      yaprak(120, 80)[1],
      ...bicak(170, 80),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M50 70 Q50 120 120 120 Q190 120 190 70`, w: 1.8, dolgu: true },
      { d: `M70 76 Q120 60 170 76 Q120 92 70 76 Z`, w: 1.5, dolgu: true },
      ...takvim(196, 20),
    ],
  },
  {
    cizgiler: [ZEMIN, ...yaprak(110, 80, 1.3), ...firca(170, 90)],
    taramalar: [boya("y", `M45 80 Q110 33 175 80 Q110 127 45 80 Z`, [45, 33, 130, 94], 0)],
  },
];

// ---------- 14. Minyatür Pasta (4) ----------
export const KIL_MINYATUR_PASTA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...pasta(120, 130), ok(180, 60, 160, 70)] },
  {
    cizgiler: [
      ZEMIN,
      ...pasta(120, 130),
      {
        d: `M70 94 q6 10 12 0 q6 10 12 0 q6 14 12 0 q6 10 12 0 q6 10 12 0 q6 14 12 0 q6 10 12 0 q6 10 12 0 M86 66 q6 8 12 0 q6 8 12 0 q6 10 12 0 q6 8 12 0 q6 8 12 0`,
        w: 1.4,
      },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...pasta(120, 130),
      { d: `M70 94 q6 10 12 0 q6 10 12 0 q6 14 12 0 q6 10 12 0 q6 10 12 0 q6 14 12 0 q6 10 12 0 q6 10 12 0`, w: 1.4 },
      { d: `M100 66 Q104 56 108 66 Z M130 66 Q134 56 138 66 Z`, w: 1.2, dolgu: true },
      { d: kutu(116, 48, 4, 18) + " " + kutu(124, 50, 4, 16), w: 1.2, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...firin(60, 40),
      { d: kutu(100, 70, 30, 26) + " " + kutu(106, 58, 18, 12), w: 1.4, dolgu: true },
      ...termometre(200, 40, 50),
      ...saat(30, 40, 10),
    ],
  },
];

// ---------- 15. Bobin Tekniği Kalemlik (5) ----------
export const KIL_KALEMLIK_ADIM: Cizim[] = [
  {
    cizgiler: [ZEMIN, plaka(30, 110, 180, 10), { d: daire(120, 104, 40, 10), w: 1.3, kesik: true }, ...bicak(160, 100)],
  },
  { cizgiler: [ZEMIN, rulo(30, 60, 180, 10), rulo(30, 80, 180, 10), ...parmak(60, 92), ...parmak(180, 92)] },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(120, 120, 40, 10), w: 1.6, dolgu: true },
      ...[0, 1, 2, 3].map((i) => ({ d: daire(120, 112 - i * 10, 40, 10), w: 1.6 })),
      ...parmak(160, 80),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M80 120 L80 60 M160 120 L160 60`, w: 1.8 },
      { d: daire(120, 60, 40, 10), w: 1.6, dolgu: true },
      { d: `M80 120 Q120 132 160 120`, w: 1.8 },
      ...[0, 1, 2, 3, 4].map((i) => ({ d: `M80 ${110 - i * 10} Q120 ${120 - i * 10} 160 ${110 - i * 10}`, w: 0.7 })),
      ...parmak(120, 60),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M80 120 L80 60 M160 120 L160 60`, w: 1.8 },
      { d: daire(120, 60, 40, 10), w: 1.6, dolgu: true },
      { d: `M80 120 Q120 132 160 120`, w: 1.8 },
      { d: `M100 60 L94 20 M120 60 L122 16 M140 60 L148 22`, w: 2 },
      ...firca(180, 100),
    ],
  },
];

// ---------- 16. Eşarp Halkası (4) ----------
export const KIL_ESARP_HALKASI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, plaka(30, 100, 180, 8), { d: kutu(50, 70, 140, 16), w: 1.3, kesik: true }, ...bicak(180, 70)] },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(100, 40, 40, 90), w: 1.6 },
      { d: daire(120, 76, 30, 10), w: 3 },
      { d: daire(120, 86, 30, 10), w: 3 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M80 70 L80 100 M160 70 L160 100`, w: 1.8 },
      { d: daire(120, 70, 40, 12), w: 1.6, dolgu: true },
      { d: daire(120, 70, 30, 8), w: 1 },
      { d: `M80 100 Q120 116 160 100`, w: 1.8 },
      { d: daire(110, 96, 5) + " " + daire(134, 98, 4), w: 1.2, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...firin(60, 40),
      { d: kutu(108, 64, 14, 30), w: 1.4, dolgu: true },
      { d: daire(115, 80, 16, 6), w: 2 },
      ...termometre(200, 40, 50),
    ],
  },
];

// ---------- 17. Kil Duvar Saati (5) ----------
const KADRAN = { d: daire(120, 76, 56), w: 1.8, dolgu: true };
export const KIL_SAAT_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, plaka(20, 110, 200, 10), { d: daire(120, 80, 70, 20), w: 1.3, kesik: true }, merdane(120, 96)] },
  { cizgiler: [ZEMIN, KADRAN, { d: daire(120, 76, 4), w: 1.4 }, { d: kutu(118, 20, 4, 56), w: 1.2, dolgu: true }] },
  {
    cizgiler: [
      ZEMIN,
      KADRAN,
      {
        d: Array.from({ length: 12 }, (_, i) => {
          const a = (i * Math.PI) / 6;
          return daire(r(120 + 44 * Math.sin(a)), r(76 - 44 * Math.cos(a)), 4);
        }).join(" "),
        w: 1.4,
        dolgu: true,
      },
      ...damgaKutu(196, 40),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(120, 110, 56, 14), w: 1.8, dolgu: true },
      { d: kutu(80, 70, 80, 30), w: 1.6, dolgu: true },
      ok(120, 40, 120, 66),
      ...takvim(190, 30),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      KADRAN,
      {
        d: Array.from({ length: 12 }, (_, i) => {
          const a = (i * Math.PI) / 6;
          return daire(r(120 + 44 * Math.sin(a)), r(76 - 44 * Math.cos(a)), 4);
        }).join(" "),
        w: 1.4,
        dolgu: true,
      },
      { d: `M120 76 L120 40 M120 76 L146 88`, w: 2.4 },
      onay(210, 30, 1.2),
    ],
  },
];

// ---------- 18. Kil Hediye Etiketi (4) ----------
export const KIL_HEDIYE_ETIKETI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      plaka(30, 100, 180, 8),
      { d: kutu(60, 60, 120, 40), w: 1.2 },
      dantel(60, 60, 120, 40),
      merdane(120, 50),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 60, 180, 50), w: 1.6, dolgu: true },
      yildiz(80, 85),
      kalp(140, 86),
      ok(180, 30, 150, 60),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      yildiz(90, 84, 28),
      kalp(160, 86, 24),
      { d: daire(90, 66, 3) + " " + daire(160, 70, 3), w: 1.2 },
      kurdan(160, 70),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      yildiz(90, 90, 28),
      kalp(160, 92, 24),
      { d: `M90 72 Q80 40 90 20 M160 76 Q170 40 160 20`, w: 1 },
      ...takvim(196, 100),
    ],
    noktalar: [
      [86, 90, 0.8],
      [96, 86, 0.8],
      [156, 92, 0.8],
      [166, 96, 0.8],
    ],
  },
];
