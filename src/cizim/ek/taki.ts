import { Cizim, daire, kutu } from "../arac";

const y2 = (x: number) => Math.round(x * 100) / 100;
// Bir yay boyunca boncuklar
const yayBoncuk = (cx: number, cy: number, rx: number, ry: number, a1: number, a2: number, adet: number, r: number) =>
  Array.from({ length: adet }, (_, i) => {
    const a = a1 + ((a2 - a1) * i) / (adet - 1);
    return daire(y2(cx + Math.cos(a) * rx), y2(cy + Math.sin(a) * ry), r);
  }).join(" ");
const kanca = (x: number, y: number) =>
  `M${x} ${y} L${x} ${y - 8} Q${x} ${y - 20} ${x + 8} ${y - 20} Q${x + 14} ${y - 18} ${x + 12} ${y - 10}`;

// Takı Tasarımı ek projelerinin çizimleri (viewBox 0 0 160 160)
export const TAKI_CIZIM: Record<string, Cizim> = {
  "taki-isimli-bileklik": {
    cizgiler: [
      { d: daire(80, 80, 60, 36), w: 1 },
      { d: [44, 62, 80, 98, 116].map((x) => kutu(x - 8, 108, 16, 16)).join(" "), w: 2, dolgu: true },
      {
        d: "M40 112 L44 120 L48 112 M58 112 L58 120 L66 120 M78 112 L78 120 M76 112 L80 112 M94 112 L94 120 L102 116 L94 112 M112 120 L116 112 L120 120",
        w: 1.4,
      },
      { d: yayBoncuk(80, 80, 60, 36, 3.6, 5.8, 9, 5), w: 1.6, dolgu: true },
    ],
  },
  "taki-inci-kolye": {
    cizgiler: [
      { d: yayBoncuk(80, 40, 56, 90, 0.35, 2.8, 13, 7), w: 1.8, dolgu: true },
      { d: "M24 14 Q30 60 32 68 M136 14 Q130 60 128 68", w: 1, kesik: true },
    ],
    noktalar: [
      [104, 116, 1.2],
      [56, 116, 1.2],
    ],
  },
  "taki-kupe-halka": {
    cizgiler: [
      { d: daire(52, 90, 30), w: 2.4 },
      { d: daire(112, 90, 30), w: 2.4 },
      { d: "M52 60 L52 40 M112 60 L112 40", w: 1.6 },
      {
        d: yayBoncuk(52, 90, 30, 30, 0.6, 2.5, 5, 4) + " " + yayBoncuk(112, 90, 30, 30, 0.6, 2.5, 5, 4),
        w: 1.6,
        dolgu: true,
      },
    ],
  },
  "taki-yuzuk-tel": {
    taramalar: [{ id: "t", sinir: daire(80, 52, 16), kutu: [64, 36, 32, 32], aralik: 3 }],
    cizgiler: [
      { d: daire(80, 96, 42, 30), w: 2.4 },
      { d: daire(80, 96, 38, 27), w: 1.2 },
      { d: daire(80, 96, 34, 24), w: 1 },
      { d: daire(80, 52, 16), w: 2, dolgu: true },
      { d: "M62 64 Q70 58 66 50 Q60 46 64 40 M98 64 Q90 58 94 50 Q100 46 96 40", w: 1.4 },
    ],
  },
  "taki-hayat-agaci": {
    cizgiler: [
      { d: daire(80, 84, 56), w: 2.6 },
      { d: "M76 138 Q74 110 78 96 M84 138 Q86 110 82 96 M70 138 L76 128 M90 138 L84 128", w: 1.8 },
      { d: "M80 96 Q60 80 44 66 M80 96 Q100 80 116 66 M80 96 L80 50 M80 80 Q66 64 62 46 M80 80 Q94 64 98 46", w: 1.4 },
      { d: yayBoncuk(80, 70, 36, 36, 3.4, 6.0, 12, 4), w: 1.4, dolgu: true },
      { d: daire(80, 20, 5), w: 1.6 },
    ],
  },
  "taki-dogal-tas-kupe": {
    taramalar: [
      { id: "a", sinir: "M52 76 L42 110 L52 140 L62 110 Z", kutu: [42, 76, 20, 64], aralik: 3 },
      { id: "b", sinir: "M108 76 L98 110 L108 140 L118 110 Z", kutu: [98, 76, 20, 64], aralik: 3, ters: true },
    ],
    cizgiler: [
      { d: kanca(52, 50) + " " + kanca(108, 50), w: 1.6 },
      { d: "M52 50 L52 62 M108 50 L108 62", w: 1.4 },
      { d: daire(52, 68, 6) + " " + daire(108, 68, 6), w: 1.6 },
      { d: "M52 76 L42 110 L52 140 L62 110 Z M108 76 L98 110 L108 140 L118 110 Z", w: 2, dolgu: true },
    ],
  },
  "taki-zincir-bileklik": {
    cizgiler: [
      {
        d: Array.from(
          { length: 8 },
          (_, i) => daire(20 + i * 17, 70, 10, 8) + " " + daire(20 + i * 17, 90, 10, 8),
        ).join(" "),
        w: 1.8,
      },
      { d: Array.from({ length: 7 }, (_, i) => daire(28 + i * 17, 80, 6, 12)).join(" "), w: 1.4 },
      { d: "M138 80 L150 80", w: 1.6 },
    ],
  },
  "taki-kolye-tas-sarma": {
    taramalar: [
      { id: "t", sinir: "M80 56 Q110 80 100 120 Q80 140 60 120 Q50 80 80 56 Z", kutu: [50, 56, 60, 84], aralik: 4 },
    ],
    cizgiler: [
      { d: "M20 10 Q80 70 140 10", w: 1.2 },
      { d: daire(80, 44, 6), w: 1.8 },
      { d: "M80 56 Q110 80 100 120 Q80 140 60 120 Q50 80 80 56 Z", w: 2.2, dolgu: true },
      { d: "M80 50 Q100 90 70 130 M80 50 Q60 90 92 132 M58 96 Q80 104 104 92", w: 1.6 },
    ],
  },
  "taki-kum-boncuk": {
    cizgiler: [
      {
        d: Array.from({ length: 6 }, (_, r) =>
          Array.from({ length: 10 }, (_, c) => kutu(20 + c * 12, 46 + r * 11 + (c % 2) * 5.5, 11, 10)).join(" "),
        ).join(" "),
        w: 1,
      },
      { d: kutu(140, 66, 12, 30), w: 1.8, dolgu: true },
    ],
    taramalar: [{ id: "d", sinir: "M56 46 L92 46 L92 112 L56 112 Z", kutu: [56, 46, 36, 66], aralik: 3 }],
  },
  "taki-sac-tokasi": {
    cizgiler: [
      { d: "M20 80 Q80 60 140 80 Q80 76 20 80 Z", w: 2, dolgu: true },
      { d: yayBoncuk(80, 160, 62, 92, 4.22, 5.2, 9, 5), w: 1.6, dolgu: true },
      { d: "M20 100 Q80 86 140 100 M22 108 Q80 96 138 108", w: 1.4 },
    ],
  },
  "taki-halhal": {
    cizgiler: [
      { d: "M14 60 Q80 120 146 60", w: 1.4 },
      { d: "M60 88 L52 108 L68 108 Z M100 88 L92 108 L108 108 Z", w: 1.8, dolgu: true },
      { d: "M80 96 Q70 100 72 116 Q80 126 88 116 Q90 100 80 96 Z", w: 2, dolgu: true },
      { d: "M76 102 L76 118 M80 100 L80 122 M84 102 L84 118", w: 0.8 },
      { d: yayBoncuk(80, 40, 66, 50, 0.6, 2.55, 8, 3), w: 1.2, dolgu: true },
    ],
  },
  "taki-brosh": {
    cizgiler: [
      {
        d: Array.from({ length: 6 }, (_, i) => {
          const a = (i / 6) * Math.PI * 2;
          return daire(y2(80 + Math.cos(a) * 26), y2(80 + Math.sin(a) * 26), 16);
        }).join(" "),
        w: 2,
        dolgu: true,
      },
      { d: daire(80, 80, 14), w: 2, dolgu: true },
    ],
    noktalar: [
      [80, 80, 3],
      [74, 74, 1.5],
      [86, 74, 1.5],
      [74, 86, 1.5],
      [86, 86, 1.5],
    ],
  },
  "taki-kolye-uzunluk": {
    cizgiler: [
      { d: "M30 14 Q80 70 130 14", w: 1.2 },
      { d: "M24 14 Q80 100 136 14", w: 1.2 },
      { d: "M18 14 Q80 130 142 14", w: 1.2 },
      { d: daire(80, 58, 3) + " " + daire(80, 82, 5), w: 1.4, dolgu: true },
      { d: "M80 101 L72 116 L80 132 L88 116 Z", w: 1.8, dolgu: true },
    ],
  },
  "taki-temizleme": {
    taramalar: [{ id: "f", sinir: "M30 110 L130 110 L120 140 L40 140 Z", kutu: [30, 110, 100, 30], aralik: 3 }],
    cizgiler: [
      { d: daire(80, 80, 56, 12), w: 2 },
      { d: "M24 80 Q30 140 80 144 Q130 140 136 80", w: 2.2, dolgu: true },
      { d: "M40 100 Q60 90 80 104 Q100 118 120 100", w: 1.4 },
      { d: daire(70, 100, 8) + " " + daire(96, 104, 6), w: 1.6 },
      { d: "M60 56 Q56 46 62 36 M80 54 Q76 42 82 30 M100 56 Q96 46 102 36", w: 1.2, kesik: true },
    ],
  },
  "taki-sandigi": {
    cizgiler: [
      { d: kutu(20, 20, 120, 120), w: 3, dolgu: true },
      { d: kutu(30, 30, 100, 100), w: 1.4 },
      {
        d: Array.from(
          { length: 9 },
          (_, i) => `M${30 + i * 12.5} 30 L${30 + i * 12.5} 130 M30 ${30 + i * 12.5} L130 ${30 + i * 12.5}`,
        ).join(" "),
        w: 0.5,
      },
      { d: "M50 42 L50 52 M54 42 L54 52 M100 42 Q90 80 100 96 Q110 80 100 42", w: 1.4 },
      { d: daire(50, 56, 4) + " " + daire(54, 56, 4) + " " + daire(100, 100, 5), w: 1.6, dolgu: true },
    ],
  },
  "taki-dijital-boyama": {
    taramalar: [{ id: "s", sinir: daire(112, 100, 18), kutu: [94, 82, 36, 36], aralik: 3 }],
    cizgiler: [
      { d: kutu(14, 40, 64, 80), w: 1.8, dolgu: true },
      { d: daire(46, 76, 22) + " " + daire(40, 70, 3) + " " + daire(52, 70, 3), w: 1.4 },
      { d: "M38 84 Q46 92 54 84", w: 1.2 },
      { d: "M84 80 L94 80 M88 74 L94 80 L88 86", w: 1.6 },
      { d: daire(112, 100, 18), w: 2.2, dolgu: true },
      { d: daire(112, 76, 3) + " M112 50 L112 73", w: 1.2 },
    ],
  },
  "taki-kristal-sarma": {
    taramalar: [{ id: "k", sinir: "M70 60 L90 60 L96 120 L80 146 L64 120 Z", kutu: [64, 60, 32, 86], aralik: 4 }],
    cizgiler: [
      { d: "M24 10 Q80 60 136 10", w: 1.2 },
      { d: "M70 60 L90 60 L96 120 L80 146 L64 120 Z", w: 2.2, dolgu: true },
      { d: "M80 60 L80 146 M64 120 L96 120", w: 0.8 },
      { d: "M70 70 L90 82 M90 70 L70 82 M66 96 L94 108 M94 96 L66 108", w: 1.4 },
      { d: daire(80, 52, 6), w: 1.6 },
    ],
  },
};
