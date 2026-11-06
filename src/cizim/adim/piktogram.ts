// Adım çizimleri için karakalem piktogramlar (viewBox 0 0 160 160).
// Her piktogram bir işlemi anlatır: kesmek, delmek, boyamak, dökmek...
// Adımın metnine göre hangisinin gösterileceğini ./secici.ts seçer.
import { Cizim, daire, dalga, kutu, zikzak } from "../arac";

const zemin = { d: "M8 142 Q80 137 152 142", w: 1.1 };
// Tahta parça (yan görünüş, üstten hafif perspektif)
const tahta = (x: number, y: number, w: number, h: number) => [
  { d: kutu(x, y, w, h), w: 1.8, dolgu: true },
  {
    d: `M${x} ${y} L${x + 8} ${y - 6} L${x + w + 8} ${y - 6} L${x + w} ${y} M${x + w + 8} ${y - 6} L${x + w + 8} ${y + h - 6} L${x + w} ${y + h}`,
    w: 1.4,
  },
  {
    d: `M${x + 6} ${y + h / 2} Q${x + w / 3} ${y + h / 2 - 3} ${x + w / 2} ${y + h / 2} T${x + w - 6} ${y + h / 2 + 1}`,
    w: 0.7,
  },
];
// Düz kağıt/kumaş levha (perspektif)
const levha = (x: number, y: number, w: number) => ({
  d: `M${x} ${y + 30} L${x + 22} ${y} L${x + w + 22} ${y} L${x + w} ${y + 30} Z`,
  w: 1.6,
  dolgu: true,
});
const hareket = (x: number, y: number) => ({
  d: `M${x} ${y} L${x + 10} ${y} M${x + 2} ${y + 6} L${x + 12} ${y + 6}`,
  w: 1,
});
const ok = (x1: number, y1: number, x2: number, y2: number) => {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const u = (t: number) => `${Math.round(x2 - 7 * Math.cos(a + t))} ${Math.round(y2 - 7 * Math.sin(a + t))}`;
  return { d: `M${x1} ${y1} L${x2} ${y2} M${u(0.5)} L${x2} ${y2} L${u(-0.5)}`, w: 1.3 };
};
const donus = (x: number, y: number, r: number) => ({
  d: `M${x - r} ${y} A${r} ${r} 0 1 1 ${x} ${y + r} M${x + 5} ${y + r - 4} L${x} ${y + r} L${x + 5} ${y + r + 4}`,
  w: 1.2,
});

export const PIKTOGRAM: Record<string, Cizim> = {
  // ─── kesme ───
  testere: {
    taramalar: [{ id: "t1", sinir: kutu(20, 96, 120, 24), kutu: [20, 96, 120, 24], aralik: 5 }],
    cizgiler: [
      zemin,
      ...tahta(20, 96, 120, 24),
      { d: "M84 96 L84 120", w: 1, kesik: true },
      { d: "M40 34 L118 92 L126 82 L52 26 Z", w: 1.6, dolgu: true },
      { d: zikzak(52, 34, 116, 86, 14, 2.5), w: 1 },
      { d: "M40 34 Q26 22 34 12 L52 26 Q48 40 40 34 Z", w: 1.8, dolgu: true },
      { d: "M38 22 L44 28", w: 1.2 },
      hareket(130, 60),
    ],
    noktalar: [
      [92, 126, 1.2],
      [96, 130, 1],
      [100, 127, 1.1],
      [88, 131, 0.9],
    ],
  },
  makas: {
    cizgiler: [
      zemin,
      levha(16, 98, 104),
      { d: "M30 124 L70 108 L118 106", w: 1.1, kesik: true },
      { d: "M70 108 L122 52", w: 2 },
      { d: "M70 108 L128 74", w: 2 },
      { d: daire(132, 44, 9), w: 1.8, dolgu: true },
      { d: daire(140, 76, 9), w: 1.8, dolgu: true },
      { d: daire(104, 82, 2), w: 1.2 },
    ],
  },
  bicak: {
    taramalar: [{ id: "b1", sinir: kutu(30, 88, 104, 8), kutu: [30, 88, 104, 8], aralik: 3 }],
    cizgiler: [
      zemin,
      levha(12, 100, 112),
      { d: kutu(30, 88, 104, 8), w: 1.4, dolgu: true },
      {
        d: "M40 88 L40 92 M50 88 L50 94 M60 88 L60 92 M70 88 L70 94 M80 88 L80 92 M90 88 L90 94 M100 88 L100 92 M110 88 L110 94 M120 88 L120 92",
        w: 0.8,
      },
      { d: "M62 100 L68 86 L110 34 L118 40 L76 92 Z", w: 1.8, dolgu: true },
      { d: "M62 100 L66 92 L72 94 Z", w: 1.2 },
      { d: "M84 74 L92 80", w: 1 },
      { d: "M30 112 L62 104", w: 1.1, kesik: true },
    ],
  },
  budama: {
    cizgiler: [
      zemin,
      { d: "M40 142 Q44 100 36 60 Q34 40 44 22", w: 2.2 },
      { d: "M38 82 Q60 76 70 60", w: 1.6 },
      { d: "M70 60 Q74 52 82 50 Q78 60 70 60 Z M44 22 Q50 14 58 14 Q52 24 44 22 Z", w: 1.2, dolgu: true },
      { d: "M62 66 L118 112", w: 2.2 },
      { d: "M62 66 L112 124", w: 2.2 },
      { d: "M118 112 Q136 120 144 136 M112 124 Q118 140 132 146", w: 2 },
      { d: daire(78, 82, 2.5), w: 1.2 },
      { d: "M56 58 L60 54 M52 70 L48 74", w: 1 },
    ],
  },

  // ─── delme, zımpara, ölçme, çizme ───
  matkap: {
    taramalar: [{ id: "m1", sinir: kutu(20, 108, 110, 20), kutu: [20, 108, 110, 20], aralik: 5 }],
    cizgiler: [
      zemin,
      ...tahta(20, 108, 110, 20),
      { d: "M60 20 L112 20 Q120 20 120 28 L120 44 Q120 52 112 52 L60 52 Z", w: 1.8, dolgu: true },
      { d: "M96 52 L100 84 L86 84 L82 52", w: 1.8, dolgu: true },
      { d: "M60 26 L48 26 L48 46 L60 46", w: 1.6, dolgu: true },
      { d: "M48 32 L36 34 L36 40 L48 42", w: 1.4 },
      { d: "M36 37 L28 37 L28 108", w: 1.4 },
      { d: "M26 92 L30 90 M26 98 L30 96 M26 104 L30 102", w: 0.9 },
      { d: "M120 30 L130 30 M120 40 L130 40", w: 1 },
    ],
    noktalar: [
      [22, 106, 1.2],
      [36, 105, 1],
      [18, 102, 0.9],
    ],
  },
  zimpara: {
    taramalar: [{ id: "z1", sinir: kutu(52, 70, 56, 16), kutu: [52, 70, 56, 16], aralik: 2.5 }],
    cizgiler: [
      zemin,
      ...tahta(18, 104, 124, 22),
      { d: "M48 70 Q48 50 80 48 Q112 50 112 70 Z", w: 1.8, dolgu: true },
      { d: kutu(52, 70, 56, 16), w: 1.6, dolgu: true },
      ok(28, 94, 54, 94),
      ok(132, 94, 106, 94),
      { d: "M58 56 Q80 52 102 56", w: 0.8 },
    ],
    noktalar: [
      [60, 100, 0.9],
      [70, 98, 0.8],
      [96, 99, 0.9],
      [104, 100, 0.8],
    ],
  },
  olcu: {
    cizgiler: [
      zemin,
      ...tahta(14, 104, 130, 22),
      { d: kutu(18, 80, 120, 14), w: 1.6, dolgu: true },
      {
        d: "M28 80 L28 88 M38 80 L38 85 M48 80 L48 88 M58 80 L58 85 M68 80 L68 88 M78 80 L78 85 M88 80 L88 88 M98 80 L98 85 M108 80 L108 88 M118 80 L118 85 M128 80 L128 88",
        w: 0.9,
      },
      { d: "M88 98 L88 112", w: 1.6 },
      { d: "M92 30 L116 76 L110 80 L86 34 Z", w: 1.6, dolgu: true },
      { d: "M110 80 L116 88 L116 76", w: 1.2 },
      { d: "M86 34 L92 30 L88 26 Z", w: 1.2 },
    ],
  },
  kalem: {
    cizgiler: [
      zemin,
      levha(10, 98, 116),
      { d: "M40 120 Q50 104 66 110 Q80 116 92 104", w: 1.6 },
      { d: "M92 104 L132 40 L142 46 L102 110 Z", w: 1.6, dolgu: true },
      { d: "M92 104 L94 116 L102 110", w: 1.4 },
      { d: "M132 40 L136 34 L146 40 L142 46", w: 1.4 },
      { d: "M120 58 L126 62", w: 0.9 },
    ],
  },
  sablon: {
    cizgiler: [
      zemin,
      levha(10, 100, 116),
      { d: "M40 30 L120 30 L120 92 L40 92 Z", w: 1.4, dolgu: true, kesik: true },
      { d: "M60 76 Q58 48 80 46 Q102 48 100 76 Q80 86 60 76 Z", w: 1.6 },
      ok(140, 60, 124, 60),
      { d: "M60 112 Q80 118 100 112", w: 1.1, kesik: true },
    ],
  },

  // ─── birleştirme ───
  tornavida: {
    cizgiler: [
      zemin,
      { d: kutu(20, 108, 120, 20), w: 1.8, dolgu: true },
      { d: daire(80, 108, 7, 3), w: 1.4, dolgu: true },
      { d: "M75 108 L85 108", w: 1.2 },
      { d: "M80 104 L80 64", w: 2 },
      { d: "M72 64 L72 26 Q72 18 80 18 Q88 18 88 26 L88 64 Z", w: 1.8, dolgu: true },
      { d: "M76 30 L76 56 M80 28 L80 58 M84 30 L84 56", w: 0.8 },
      donus(80, 40, 22),
    ],
  },
  anahtar: {
    cizgiler: [
      zemin,
      { d: kutu(30, 114, 100, 16), w: 1.6, dolgu: true },
      { d: "M74 114 L74 100 L86 100 L86 114", w: 1.6, dolgu: true },
      { d: "M70 92 L74 84 L86 84 L90 92 L86 100 L74 100 Z", w: 1.8, dolgu: true },
      { d: daire(80, 92, 15), w: 2 },
      { d: "M92 83 L138 50 Q146 44 150 52 Q150 58 144 62 L98 96", w: 1.8, dolgu: true },
      donus(116, 30, 14),
    ],
  },
  tutkal: {
    cizgiler: [
      zemin,
      { d: kutu(14, 114, 62, 18), w: 1.6, dolgu: true },
      { d: kutu(84, 104, 62, 18), w: 1.6, dolgu: true },
      ok(92, 92, 76, 108),
      { d: "M30 114 Q40 110 50 114 Q60 118 66 114", w: 1.2 },
      { d: "M78 34 L106 34 L102 84 L82 84 Z", w: 1.8, dolgu: true },
      { d: "M84 84 L88 96 L96 96 L100 84", w: 1.6 },
      { d: "M84 22 L100 22 L106 34 L78 34 Z", w: 1.4, dolgu: true },
      { d: "M84 50 L100 50 L100 66 L84 66 Z", w: 1 },
      { d: "M92 100 Q90 106 92 108 Q94 106 92 100 Z", w: 1.2 },
    ],
  },
  sikistir: {
    taramalar: [{ id: "s1", sinir: kutu(26, 82, 108, 12), kutu: [26, 82, 108, 12], aralik: 4 }],
    cizgiler: [
      zemin,
      { d: kutu(26, 82, 108, 12), w: 1.6, dolgu: true },
      { d: kutu(26, 94, 108, 12), w: 1.6, dolgu: true },
      { d: "M40 40 L40 128 L52 128 L52 52 L118 52 L118 40 Z", w: 1.8, dolgu: true },
      { d: "M100 52 L100 74", w: 2 },
      { d: kutu(92, 74, 16, 8), w: 1.6, dolgu: true },
      { d: kutu(36, 106, 20, 8), w: 1.6, dolgu: true },
      { d: "M90 30 L110 30 M100 30 L100 52", w: 1.8 },
      ok(126, 64, 126, 78),
    ],
  },
  vida_tak: {
    cizgiler: [
      zemin,
      { d: kutu(24, 100, 112, 34), w: 1.8, dolgu: true },
      { d: kutu(60, 100, 40, 10), w: 1.4, kesik: true },
      { d: kutu(58, 46, 44, 24), w: 1.8, dolgu: true },
      ok(80, 74, 80, 96),
      { d: "M66 52 L94 52 M66 58 L94 58 M66 64 L94 64", w: 0.8 },
    ],
  },
  sok: {
    cizgiler: [
      zemin,
      { d: kutu(24, 96, 112, 38), w: 1.8, dolgu: true },
      { d: kutu(62, 96, 36, 12), w: 1.4, kesik: true },
      { d: "M60 56 L100 56 L100 74 L60 74 Z", w: 1.8, dolgu: true },
      ok(80, 92, 80, 36),
      { d: "M48 66 L36 58 M112 66 L124 58", w: 1 },
    ],
  },
  sar: {
    cizgiler: [
      zemin,
      { d: "M40 70 L40 120 M120 70 L120 120", w: 1.6 },
      { d: daire(40, 95, 8, 25), w: 1.6, dolgu: true },
      { d: daire(120, 95, 8, 25), w: 1.4 },
      { d: "M40 70 L120 70 M40 120 L120 120", w: 1.6 },
      { d: "M52 72 L60 118 M64 72 L72 118 M76 72 L84 118 M88 72 L96 118 M100 72 L108 118", w: 1.1 },
      { d: "M120 95 Q140 92 148 70", w: 1.2 },
      donus(80, 40, 14),
    ],
  },
  dugum: {
    cizgiler: [
      zemin,
      { d: "M50 10 Q56 40 70 60 M110 10 Q104 40 90 60", w: 2 },
      { d: "M70 60 Q80 76 90 60 Q96 48 80 50 Q62 52 70 74 Q76 88 80 96", w: 2.2 },
      { d: "M90 60 Q88 80 80 96", w: 2.2 },
      { d: "M80 96 Q72 120 60 140 M80 96 Q90 120 100 140", w: 2 },
      { d: "M72 64 L78 62 M84 70 L88 66", w: 1 },
    ],
  },
  igne: {
    cizgiler: [
      zemin,
      levha(12, 100, 112),
      { d: "M30 120 L42 116 M50 113 L62 109 M70 106 L82 102", w: 1.3 },
      { d: "M82 102 Q100 90 106 70", w: 1, kesik: true },
      { d: "M106 70 L140 20", w: 1.8 },
      { d: daire(137, 25, 1.6, 3), w: 0.9 },
      { d: "M137 22 Q152 30 146 48 Q138 62 120 56", w: 1 },
    ],
  },
  orgu: {
    cizgiler: [
      zemin,
      { d: daire(118, 118, 20), w: 1.8, dolgu: true },
      { d: "M100 108 Q118 100 136 112 M100 122 Q118 112 138 126 M106 134 Q120 126 134 136", w: 1 },
      { d: "M98 116 Q70 112 62 88", w: 1.2 },
      { d: "M30 30 L80 100 M130 30 L80 100", w: 1.8 },
      { d: "M56 78 Q66 72 74 80 Q66 88 56 82 M62 88 Q72 82 80 90 Q72 98 62 92", w: 1.2 },
      { d: daire(30, 30, 3) + " " + daire(130, 30, 3), w: 1.4 },
    ],
  },
  pense: {
    cizgiler: [
      zemin,
      { d: "M20 70 Q60 60 92 72 Q120 82 140 70", w: 1.4 },
      { d: daire(40, 66, 5) + " " + daire(56, 64, 5) + " " + daire(72, 66, 5), w: 1.4, dolgu: true },
      { d: "M92 72 L104 96 L98 100 L88 76 Z M100 72 L120 90 L116 96 L94 78 Z", w: 1.6, dolgu: true },
      { d: "M104 96 Q100 120 96 140 M116 96 Q128 116 136 136", w: 2 },
      { d: daire(108, 94, 2), w: 1 },
    ],
  },

  // ─── boya, kaplama, dökme ───
  firca: {
    taramalar: [{ id: "f1", sinir: kutu(18, 108, 70, 20), kutu: [18, 108, 70, 20], aralik: 3 }],
    cizgiler: [
      zemin,
      ...tahta(18, 108, 124, 20),
      { d: "M88 106 Q100 100 112 46 L124 48 Q110 104 96 112 Z", w: 1.6, dolgu: true },
      { d: "M112 46 L120 14 L132 16 L124 48", w: 1.6, dolgu: true },
      { d: "M100 96 L108 98", w: 1 },
      { d: kutu(24, 72, 30, 30), w: 1.6, dolgu: true },
      { d: "M24 72 Q39 66 54 72 M28 78 Q30 86 28 92", w: 1.2 },
    ],
  },
  damla: {
    cizgiler: [
      zemin,
      { d: "M50 110 L110 110 L104 140 L56 140 Z", w: 1.8, dolgu: true },
      { d: "M54 120 Q80 114 106 120", w: 1 },
      { d: "M74 20 L86 20 L86 64 L82 72 L78 72 L74 64 Z", w: 1.6, dolgu: true },
      { d: "M70 14 Q80 0 90 14 L86 20 L74 20 Z", w: 1.6, dolgu: true },
      { d: "M80 80 Q76 88 80 90 Q84 88 80 80 Z M80 96 Q77 102 80 104 Q83 102 80 96 Z", w: 1.2 },
    ],
  },
  karistir: {
    taramalar: [{ id: "k1", sinir: "M40 70 L120 70 L112 136 L48 136 Z", kutu: [40, 96, 80, 40], aralik: 4 }],
    cizgiler: [
      zemin,
      { d: "M40 70 L120 70 L112 136 L48 136 Z", w: 1.8, dolgu: true },
      { d: "M48 96 Q80 88 114 96", w: 1.2 },
      { d: "M90 110 L118 20 L126 22 L98 112", w: 1.6, dolgu: true },
      { d: "M58 104 Q70 96 84 104 Q72 112 62 106", w: 1 },
      { d: "M44 82 L56 82 M44 90 L52 90", w: 0.8 },
    ],
  },
  dok: {
    taramalar: [{ id: "d1", sinir: kutu(30, 112, 100, 22), kutu: [30, 120, 100, 14], aralik: 3 }],
    cizgiler: [
      zemin,
      { d: kutu(30, 112, 100, 22), w: 1.8, dolgu: true },
      {
        d: "M38 112 L38 128 L64 128 L64 112 M72 112 L72 128 L98 128 L98 112 M106 112 L106 128 L122 128 L122 112",
        w: 1.1,
      },
      { d: "M60 20 L110 30 L104 70 L54 60 Z", w: 1.8, dolgu: true },
      { d: "M54 60 L46 66 L58 64", w: 1.4 },
      { d: "M110 40 Q126 44 120 60", w: 1.6 },
      { d: "M48 66 Q50 90 52 112", w: 1.4 },
    ],
  },
  erit: {
    cizgiler: [
      zemin,
      { d: "M30 98 L130 98 L124 132 L36 132 Z", w: 1.8, dolgu: true },
      { d: "M48 70 L112 70 L108 104 L52 104 Z", w: 1.8, dolgu: true },
      { d: "M44 70 L116 70", w: 2 },
      { d: dalga(40, 112, 6, 14, 3), w: 1 },
      {
        d: "M60 140 Q56 134 60 128 Q64 134 60 140 Z M80 142 Q75 134 80 126 Q85 134 80 142 Z M100 140 Q96 134 100 128 Q104 134 100 140 Z",
        w: 1.2,
      },
      { d: "M66 60 Q62 50 68 42 M82 60 Q78 48 84 38 M98 60 Q94 50 100 42", w: 1 },
    ],
  },
  firin: {
    taramalar: [{ id: "fr1", sinir: kutu(36, 54, 88, 52), kutu: [36, 54, 88, 52], aralik: 5 }],
    cizgiler: [
      zemin,
      { d: kutu(24, 40, 112, 92), w: 2, dolgu: true },
      { d: kutu(36, 54, 88, 52), w: 1.6 },
      { d: "M44 92 L116 92", w: 1.4 },
      { d: daire(56, 86, 6, 4) + " " + daire(80, 86, 6, 4) + " " + daire(104, 86, 6, 4), w: 1.2, dolgu: true },
      { d: "M40 118 L120 118", w: 1.6 },
      { d: daire(44, 124, 3) + " " + daire(116, 124, 3), w: 1 },
      { d: "M60 30 Q56 22 62 14 M80 30 Q76 20 82 12 M100 30 Q96 22 102 14", w: 1 },
    ],
  },
  saat: {
    cizgiler: [
      zemin,
      { d: daire(70, 76, 40), w: 2, dolgu: true },
      { d: "M70 42 L70 46 M70 106 L70 110 M36 76 L40 76 M100 76 L104 76", w: 1.4 },
      { d: "M70 76 L70 54 M70 76 L86 86", w: 1.8 },
      { d: "M118 98 L146 98 L134 118 L146 138 L118 138 L130 118 Z", w: 1.6, dolgu: true },
      { d: "M126 106 L138 106 L132 114 Z M124 136 L132 126 L140 136", w: 1 },
    ],
  },
  vernik: {
    cizgiler: [
      zemin,
      ...tahta(22, 112, 116, 18),
      { d: "M56 30 L80 30 L80 40 L56 40 Z", w: 1.4, dolgu: true },
      { d: "M50 40 L86 40 L86 96 L50 96 Z", w: 1.8, dolgu: true },
      { d: "M56 56 L80 56 L80 80 L56 80 Z", w: 1 },
      { d: "M86 52 L104 58 L100 64 L86 60", w: 1.4 },
      { d: "M108 64 L116 72 M112 58 L124 62 M106 70 L110 82", w: 1 },
      { d: "M30 106 L40 102 M108 104 L120 100", w: 0.8 },
    ],
  },

  // ─── ısı, elektronik, kod ───
  lehim: {
    cizgiler: [
      zemin,
      { d: kutu(16, 104, 128, 26), w: 1.8, dolgu: true },
      { d: daire(40, 117, 3) + " " + daire(60, 117, 3) + " " + daire(80, 117, 3) + " " + daire(100, 117, 3), w: 1.2 },
      { d: "M40 117 L60 117 M80 117 Q90 108 100 117", w: 1 },
      { d: "M80 112 L104 72 L112 76 L86 114 Z", w: 1.4, dolgu: true },
      { d: "M104 72 L132 24 Q138 16 144 22 Q146 28 140 34 L112 76", w: 1.8, dolgu: true },
      { d: "M70 100 Q66 90 72 82 Q78 74 72 66", w: 0.9 },
      { d: "M50 94 Q60 104 74 108", w: 1.2 },
    ],
  },
  bilgisayar: {
    cizgiler: [
      zemin,
      { d: kutu(20, 30, 90, 62), w: 1.8, dolgu: true },
      { d: kutu(26, 36, 78, 50), w: 1.2 },
      { d: "M10 92 L120 92 L128 104 L2 104 Z", w: 1.8, dolgu: true },
      { d: "M32 46 L48 46 M38 54 L70 54 M38 62 L62 62 M32 70 L52 70 M38 78 L80 78", w: 1.2 },
      { d: "M120 98 Q134 100 134 114", w: 1.4 },
      { d: kutu(112, 114, 40, 26), w: 1.8, dolgu: true },
      { d: kutu(118, 120, 10, 8) + " M134 120 L146 120 M134 126 L146 126 M134 132 L146 132", w: 1 },
    ],
  },
  devre: {
    cizgiler: [
      zemin,
      { d: kutu(14, 96, 132, 40), w: 1.8, dolgu: true },
      { d: "M14 104 L146 104 M14 128 L146 128", w: 0.8 },
      { d: "M24 112 L136 112 M24 120 L136 120", w: 0.6, kesik: true },
      { d: "M44 80 Q40 60 52 56 Q64 60 60 80 Z", w: 1.6, dolgu: true },
      { d: "M48 80 L48 112 M56 80 L56 112", w: 1.2 },
      { d: "M90 108 L90 88 L112 88 L112 108", w: 1.4 },
      { d: zikzak(92, 88, 110, 88, 5, 3), w: 1.1 },
      { d: "M120 116 Q130 70 150 70", w: 1.4 },
      { d: "M44 50 L38 42 M52 46 L52 36 M60 50 L66 42", w: 1 },
    ],
  },
  pil: {
    cizgiler: [
      zemin,
      { d: kutu(24, 70, 70, 54), w: 1.8, dolgu: true },
      { d: kutu(36, 60, 12, 10) + " " + kutu(70, 60, 12, 10), w: 1.4, dolgu: true },
      { d: "M42 92 L42 104 M36 98 L48 98 M70 98 L82 98", w: 1.4 },
      { d: "M94 98 Q112 98 116 80 L116 50", w: 1.4 },
      { d: kutu(108, 30, 30, 22), w: 1.8, dolgu: true },
      { d: "M126 34 L118 42 L126 42 L118 50", w: 1.4 },
    ],
  },
  yazici3d: {
    cizgiler: [
      zemin,
      { d: "M24 140 L24 20 L136 20 L136 140", w: 2 },
      { d: "M24 40 L136 40", w: 1.6 },
      { d: kutu(68, 40, 24, 22), w: 1.8, dolgu: true },
      { d: "M76 62 L80 72 L84 62", w: 1.4 },
      { d: kutu(36, 120, 88, 8), w: 1.8, dolgu: true },
      { d: "M62 120 L66 84 L94 84 L98 120 Z", w: 1.6, dolgu: true },
      { d: "M64 96 L96 96 M63 106 L97 106 M62 114 L98 114", w: 0.8 },
      { d: "M136 30 Q152 34 150 60", w: 1.2 },
    ],
  },
  kumanda: {
    cizgiler: [
      zemin,
      {
        d: "M30 70 L110 70 Q120 70 120 80 L120 124 Q120 134 110 134 L30 134 Q20 134 20 124 L20 80 Q20 70 30 70 Z",
        w: 1.8,
        dolgu: true,
      },
      { d: daire(46, 102, 12) + " " + daire(94, 102, 12), w: 1.4 },
      { d: "M46 102 L52 94 M94 102 L88 96", w: 1.4 },
      { d: "M100 70 L120 20", w: 1.6 },
      { d: "M128 22 Q136 30 130 40 M136 14 Q150 30 138 48", w: 1.2 },
    ],
  },
  yakma: {
    taramalar: [{ id: "y1", sinir: kutu(20, 110, 120, 22), kutu: [20, 110, 120, 22], aralik: 5 }],
    cizgiler: [
      zemin,
      ...tahta(20, 110, 120, 22),
      { d: "M40 118 Q60 108 80 116", w: 2.2 },
      { d: "M80 108 L88 92 L96 96 L86 110 Z", w: 1.4, dolgu: true },
      { d: "M88 92 L120 32 Q126 24 132 30 L96 96", w: 1.8, dolgu: true },
      { d: "M128 34 Q140 40 150 60", w: 1.2 },
      { d: "M70 100 Q66 90 72 82 Q78 74 72 66 M60 104 Q56 96 60 90", w: 0.9 },
    ],
  },

  // ─── doğa, bahçe, balık ───
  saksi: {
    taramalar: [{ id: "sk1", sinir: "M40 92 L120 92 L110 140 L50 140 Z", kutu: [40, 100, 80, 40], aralik: 5 }],
    cizgiler: [
      zemin,
      { d: "M40 92 L120 92 L110 140 L50 140 Z", w: 1.8, dolgu: true },
      { d: kutu(36, 84, 88, 8), w: 1.6, dolgu: true },
      { d: "M80 84 L80 50", w: 1.6 },
      { d: "M80 64 Q60 60 56 44 Q72 44 80 60 M80 56 Q98 50 104 34 Q86 34 80 52", w: 1.4, dolgu: true },
      { d: "M126 40 L140 76 M130 72 L150 64 L144 82 L126 90 Z", w: 1.6, dolgu: true },
    ],
  },
  sula: {
    cizgiler: [
      zemin,
      { d: "M64 72 L112 72 L106 120 L70 120 Z", w: 1.8, dolgu: true },
      { d: "M112 80 Q132 84 128 104 L110 110", w: 1.6 },
      { d: "M64 92 L28 60 L22 66 L60 98", w: 1.6, dolgu: true },
      { d: "M16 66 L26 56 L32 62 L22 72 Z", w: 1.4, dolgu: true },
      { d: "M20 78 L18 86 M28 80 L26 90 M14 88 L12 96 M24 96 L22 104", w: 1.2 },
      { d: "M10 136 Q30 116 40 136", w: 1.4 },
      { d: "M25 128 L25 112 Q16 104 20 96 M25 116 Q34 108 32 100", w: 1.2 },
    ],
  },
  akvaryum: {
    taramalar: [{ id: "a1", sinir: kutu(20, 56, 120, 70), kutu: [20, 108, 120, 18], aralik: 4 }],
    cizgiler: [
      zemin,
      { d: kutu(20, 40, 120, 86), w: 2, dolgu: true },
      { d: dalga(20, 56, 10, 12, 2.5), w: 1.2 },
      { d: kutu(14, 126, 132, 10), w: 1.6, dolgu: true },
      { d: "M60 84 Q72 72 86 84 Q72 96 60 84 Z M86 84 L94 78 L94 90 Z", w: 1.4, dolgu: true },
      { d: "M110 126 Q104 106 112 92 M120 126 Q122 104 116 88", w: 1.2 },
      { d: daire(100, 70, 2) + " " + daire(104, 62, 1.5), w: 0.9 },
    ],
    noktalar: [[66, 83, 1.2]],
  },
  olta: {
    cizgiler: [
      { d: dalga(8, 120, 12, 12, 3), w: 1.2 },
      { d: "M12 140 L120 20", w: 2 },
      { d: daire(40, 110, 6), w: 1.4, dolgu: true },
      { d: "M120 20 Q132 60 112 104 L112 128", w: 0.9 },
      { d: daire(112, 104, 4, 6), w: 1.4, dolgu: true },
      { d: "M112 128 L112 140 Q112 148 104 146 Q100 142 104 138", w: 1.4 },
      { d: "M60 140 Q72 130 84 140 Q72 150 60 140 Z", w: 1.2 },
    ],
  },
  temizle: {
    cizgiler: [
      zemin,
      { d: "M16 120 L144 120", w: 1.6 },
      { d: "M40 80 Q38 64 56 62 L100 62 Q118 64 116 80 L116 104 L40 104 Z", w: 1.8, dolgu: true },
      { d: "M40 92 L116 92", w: 1.2 },
      ok(24, 112, 50, 112),
      ok(136, 112, 110, 112),
      { d: daire(128, 50, 5) + " " + daire(140, 64, 3.5) + " " + daire(30, 54, 4), w: 1 },
      { d: "M132 26 L132 40 M125 33 L139 33", w: 1.2 },
    ],
  },
  yogur: {
    taramalar: [
      { id: "yg1", sinir: "M30 120 Q80 108 130 120 L130 132 L30 132 Z", kutu: [30, 110, 100, 22], aralik: 5 },
    ],
    cizgiler: [
      zemin,
      { d: "M30 120 Q80 108 130 120 L130 132 L30 132 Z", w: 1.8, dolgu: true },
      { d: kutu(36, 84, 88, 20), w: 1.8, dolgu: true },
      { d: "M36 94 L14 94 M124 94 L146 94", w: 3 },
      ok(60, 70, 100, 70),
    ],
  },
  hasat: {
    cizgiler: [
      zemin,
      { d: "M28 96 L132 96 L120 138 L40 138 Z", w: 1.8, dolgu: true },
      { d: "M30 96 Q80 30 130 96", w: 1.6 },
      { d: "M34 108 L126 108 M38 120 L122 120", w: 0.8 },
      { d: daire(64, 88, 10) + " " + daire(86, 84, 11) + " " + daire(106, 90, 9), w: 1.6, dolgu: true },
      { d: "M86 73 Q90 66 96 66", w: 1.2 },
    ],
  },

  // ─── kontrol, montaj, diğer ───
  kontrol: {
    cizgiler: [
      zemin,
      { d: kutu(30, 24, 76, 110), w: 1.8, dolgu: true },
      { d: kutu(54, 18, 28, 12), w: 1.4, dolgu: true },
      { d: "M40 52 L46 58 L56 46 M40 78 L46 84 L56 72 M40 104 L46 110 L56 98", w: 1.6 },
      { d: "M64 54 L96 54 M64 80 L92 80 M64 106 L90 106", w: 1.1 },
      { d: daire(118, 96, 16), w: 1.8, dolgu: true },
      { d: "M130 108 L146 126", w: 2.4 },
    ],
  },
  as: {
    cizgiler: [
      { d: "M10 20 L150 20 M10 20 L10 150", w: 1 },
      { d: "M80 34 L80 44 M76 40 L84 40", w: 1.6 },
      { d: "M80 40 L50 74 M80 40 L110 74", w: 1.2 },
      { d: kutu(40, 74, 80, 60), w: 1.8, dolgu: true },
      { d: kutu(50, 84, 60, 40), w: 1.2 },
      { d: "M56 116 Q70 96 84 108 Q96 96 104 112", w: 1.1 },
      { d: "M130 80 L130 128 M126 84 L134 84 M126 124 L134 124", w: 1, kesik: true },
    ],
  },
  pompa: {
    cizgiler: [
      zemin,
      { d: daire(110, 96, 38), w: 2.2 },
      { d: daire(110, 96, 30), w: 1.2 },
      { d: daire(110, 96, 6), w: 1.4 },
      { d: kutu(22, 52, 18, 84), w: 1.8, dolgu: true },
      { d: "M31 52 L31 30 M20 30 L42 30", w: 2 },
      { d: kutu(14, 132, 34, 8), w: 1.6, dolgu: true },
      { d: "M40 120 Q60 130 78 112 L84 116", w: 1.4 },
    ],
  },
  yag: {
    cizgiler: [
      zemin,
      { d: daire(50, 110, 22) + " " + daire(124, 116, 14), w: 1.8 },
      { d: "M50 88 L124 102 M50 132 L124 130", w: 1.1, kesik: true },
      { d: "M84 30 L116 30 L116 62 L84 62 Z", w: 1.8, dolgu: true },
      { d: "M84 46 L58 70 L62 74 L84 54", w: 1.6, dolgu: true },
      { d: "M98 30 L98 22 M92 22 L104 22", w: 1.4 },
      { d: "M58 78 Q55 84 58 86 Q61 84 58 78 Z", w: 1.2 },
    ],
  },
  tart: {
    cizgiler: [
      zemin,
      { d: kutu(28, 108, 104, 26), w: 1.8, dolgu: true },
      { d: kutu(58, 116, 44, 12), w: 1.2 },
      { d: "M64 124 L64 120 L68 120 L68 124 M74 120 L74 124 M80 120 L84 120 L84 124 L80 124", w: 1 },
      { d: "M36 108 L124 108", w: 2 },
      { d: "M44 96 Q80 116 116 96 Z", w: 1.8, dolgu: true },
      { d: "M56 96 Q66 80 80 86 Q94 78 104 96", w: 1.2 },
    ],
  },
  katla: {
    cizgiler: [
      zemin,
      { d: "M20 120 L80 100 L140 120 L80 140 Z", w: 1.6, dolgu: true },
      { d: "M80 100 L80 140", w: 1, kesik: true },
      { d: "M80 100 L110 40 L140 120", w: 1.6, dolgu: true },
      { d: "M118 64 Q140 70 136 92", w: 1.2 },
      { d: "M130 86 L136 92 L140 84", w: 1.2 },
    ],
  },
  hazirla: {
    cizgiler: [
      zemin,
      { d: "M8 110 L152 110 M20 110 L20 140 M140 110 L140 140", w: 1.8 },
      { d: kutu(24, 88, 34, 22), w: 1.6, dolgu: true },
      { d: "M66 108 L110 82 L114 88 L70 112", w: 1.4, dolgu: true },
      { d: "M118 108 L118 80 L134 80 L134 108 Z", w: 1.6, dolgu: true },
      { d: "M30 98 L52 98", w: 1 },
      { d: kutu(30, 30, 100, 40), w: 1.4, dolgu: true },
      { d: "M40 44 L46 50 L54 40 M62 46 L118 46 M40 58 L46 64 L54 54 M62 60 L104 60", w: 1.1 },
    ],
  },
};

export type PiktogramAdi = keyof typeof PIKTOGRAM;
