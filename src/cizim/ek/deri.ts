import { Cizim, daire, kutu } from "../arac";

// Kenardan içeri dikiş çizgisi (kesik çizilir)
const dikis = (x: number, y: number, w: number, h: number, ic = 4) => kutu(x + ic, y + ic, w - 2 * ic, h - 2 * ic);
const yuvarlakKose = (x: number, y: number, w: number, h: number, r: number) =>
  `M${x + r} ${y} L${x + w - r} ${y} Q${x + w} ${y} ${x + w} ${y + r} L${x + w} ${y + h - r} Q${x + w} ${y + h} ${x + w - r} ${y + h} L${x + r} ${y + h} Q${x} ${y + h} ${x} ${y + h - r} L${x} ${y + r} Q${x} ${y} ${x + r} ${y} Z`;

// Deri İşçiliği ek projelerinin çizimleri (viewBox 0 0 160 160)
export const DERI_CIZIM: Record<string, Cizim> = {
  "deri-cuzdan": {
    taramalar: [{ id: "c", sinir: kutu(86, 46, 50, 30), kutu: [86, 46, 50, 30], aralik: 3 }],
    cizgiler: [
      { d: kutu(20, 40, 120, 80), w: 2.2, dolgu: true },
      { d: "M80 40 L80 120", w: 1.4 },
      { d: dikis(20, 40, 120, 80), w: 1, kesik: true },
      { d: kutu(86, 46, 50, 30) + " " + kutu(86, 60, 50, 30), w: 1.6, dolgu: true },
      { d: kutu(24, 52, 50, 22), w: 1.2 },
    ],
  },
  "deri-saat-kayisi": {
    cizgiler: [
      { d: yuvarlakKose(66, 10, 28, 52, 12) + " " + yuvarlakKose(66, 98, 28, 54, 12), w: 2, dolgu: true },
      { d: dikis(66, 10, 28, 52, 4) + " " + dikis(66, 98, 28, 54, 4), w: 0.9, kesik: true },
      { d: daire(80, 80, 26), w: 2.4, dolgu: true },
      { d: daire(80, 80, 20), w: 1 },
      { d: "M80 80 L80 66 M80 80 L90 86", w: 1.8 },
      { d: daire(80, 112, 2) + " " + daire(80, 124, 2) + " " + daire(80, 136, 2), w: 1.2 },
    ],
  },
  "deri-kalemlik": {
    taramalar: [{ id: "k", sinir: kutu(20, 90, 120, 34), kutu: [20, 90, 120, 34], aralik: 4 }],
    cizgiler: [
      { d: kutu(20, 50, 120, 74), w: 2.2, dolgu: true },
      { d: kutu(20, 90, 120, 34), w: 1.6 },
      { d: [44, 68, 92, 116].map((x) => `M${x} 90 L${x} 124`).join(" "), w: 1, kesik: true },
      {
        d: "M30 92 L30 30 L36 22 L42 30 L42 92 M54 92 L54 40 L62 34 L66 40 L66 92 M80 92 L80 26 L86 18 L92 26 L92 92",
        w: 1.6,
        dolgu: true,
      },
      { d: "M140 86 Q150 90 154 100", w: 1.4 },
    ],
  },
  "deri-bileklik": {
    taramalar: [{ id: "b", sinir: "M20 66 L140 66 L140 94 L20 94 Z", kutu: [20, 66, 120, 28], aralik: 5 }],
    cizgiler: [
      { d: yuvarlakKose(10, 66, 140, 28, 14), w: 2.2, dolgu: true },
      { d: "M34 70 Q50 90 66 70 Q82 90 98 70 Q114 90 126 72 M34 90 Q50 70 66 90 Q82 70 98 90 Q114 70 126 88", w: 1.6 },
      { d: daire(22, 80, 5) + " " + daire(138, 80, 5), w: 1.6, dolgu: true },
    ],
  },
  "deri-tasma": {
    cizgiler: [
      { d: daire(80, 80, 56, 44), w: 2.4 },
      { d: daire(80, 80, 44, 33), w: 1.8 },
      { d: daire(80, 80, 50, 38.5), w: 0.8, kesik: true },
      { d: kutu(30, 66, 14, 26), w: 2, dolgu: true },
      { d: "M80 120 Q70 136 80 148 Q90 136 80 120 Z", w: 1.8, dolgu: true },
      { d: daire(118, 70, 2) + " " + daire(124, 82, 2) + " " + daire(126, 94, 2), w: 1.2 },
    ],
  },
  "deri-pasaport-kilifi": {
    taramalar: [{ id: "p", sinir: kutu(40, 20, 80, 120), kutu: [40, 20, 80, 120], aralik: 6 }],
    cizgiler: [
      { d: kutu(40, 20, 80, 120), w: 2.2, dolgu: true },
      { d: dikis(40, 20, 80, 120, 5), w: 1, kesik: true },
      { d: daire(80, 70, 18), w: 1.6 },
      { d: "M62 70 L98 70 M80 52 Q70 70 80 88 Q90 70 80 52", w: 1 },
      { d: "M60 108 L100 108 M66 118 L94 118", w: 1.4 },
    ],
  },
  "deri-kulaklik-tutucu": {
    cizgiler: [
      { d: "M30 70 Q30 30 80 30 Q130 30 130 70", w: 2.4 },
      { d: yuvarlakKose(20, 66, 22, 34, 8) + " " + yuvarlakKose(118, 66, 22, 34, 8), w: 2, dolgu: true },
      { d: "M80 30 Q80 100 70 120 Q60 140 76 150", w: 1.4 },
      { d: yuvarlakKose(52, 104, 56, 18, 9), w: 2.2, dolgu: true },
      { d: daire(62, 113, 3) + " " + daire(98, 113, 3), w: 1.4 },
    ],
  },
  "deri-makas-kilifi": {
    taramalar: [{ id: "k", sinir: "M50 70 L110 70 L94 146 L66 146 Z", kutu: [50, 70, 60, 76], aralik: 4 }],
    cizgiler: [
      { d: "M50 70 L110 70 L94 146 L66 146 Z", w: 2.2, dolgu: true },
      { d: "M56 76 L104 76 L90 140 L70 140 Z", w: 1, kesik: true },
      { d: daire(66, 40, 14) + " " + daire(94, 40, 14), w: 2 },
      { d: "M72 52 L78 70 M88 52 L82 70", w: 2 },
      { d: kutu(68, 84, 24, 10), w: 1.4 },
    ],
  },
  "deri-anahtar-cebi": {
    cizgiler: [
      { d: yuvarlakKose(44, 50, 72, 90, 10), w: 2.2, dolgu: true },
      { d: "M44 70 Q80 44 116 70 L116 60 Q80 30 44 60 Z", w: 2, dolgu: true },
      { d: daire(80, 66, 5), w: 1.6, dolgu: true },
      { d: dikis(44, 50, 72, 90, 5), w: 0.9, kesik: true },
      { d: daire(80, 24, 10), w: 1.6 },
    ],
  },
  "deri-tabak-tepsi": {
    taramalar: [{ id: "t", sinir: "M40 70 L120 70 L110 120 L50 120 Z", kutu: [40, 70, 80, 50], aralik: 5 }],
    cizgiler: [
      { d: "M40 70 L120 70 L110 120 L50 120 Z", w: 2, dolgu: true },
      {
        d: "M24 56 L40 70 L50 120 L34 108 Z M136 56 L120 70 L110 120 L126 108 Z M24 56 L136 56 L120 70 L40 70 Z",
        w: 2.2,
        dolgu: true,
      },
      {
        d: daire(32, 62, 3) + " " + daire(128, 62, 3) + " " + daire(42, 112, 3) + " " + daire(118, 112, 3),
        w: 1.4,
        dolgu: true,
      },
    ],
  },
  "deri-damgalama": {
    cizgiler: [
      { d: kutu(14, 100, 132, 40), w: 2.2, dolgu: true },
      { d: kutu(66, 40, 12, 56), w: 2, dolgu: true },
      { d: "M62 96 L82 96 L80 100 L64 100 Z", w: 1.6 },
      { d: yuvarlakKose(86, 14, 50, 22, 8), w: 2, dolgu: true },
      { d: "M110 36 L104 70", w: 2.2 },
      {
        d: Array.from(
          { length: 5 },
          (_, i) => daire(28 + i * 16, 120, 5) + " " + `M${23 + i * 16} 120 L${33 + i * 16} 120`,
        ).join(" "),
        w: 1,
      },
    ],
  },
  "deri-boyama": {
    taramalar: [{ id: "b", sinir: yuvarlakKose(20, 70, 90, 60, 10), kutu: [20, 70, 90, 60], aralik: 3 }],
    cizgiler: [
      { d: yuvarlakKose(20, 70, 90, 60, 10), w: 2.2, dolgu: true },
      { d: kutu(110, 30, 30, 50), w: 2, dolgu: true },
      { d: kutu(116, 20, 18, 10), w: 1.6, dolgu: true },
      { d: "M60 40 Q50 30 64 24 Q80 22 80 40 Q76 56 60 50 Z", w: 1.6, dolgu: true },
      { d: "M62 52 Q70 70 76 80", w: 1, kesik: true },
    ],
  },
  "deri-kitap-kapagi": {
    cizgiler: [
      { d: yuvarlakKose(36, 20, 88, 120, 8), w: 2.2, dolgu: true },
      { d: "M44 26 L44 134", w: 1.2 },
      { d: "M38 50 L122 50 M38 110 L122 110", w: 1.6 },
      { d: "M124 80 L140 80", w: 1.6 },
      { d: daire(142, 80, 3), w: 1.4, dolgu: true },
      { d: "M60 70 L104 70 M60 80 L96 80 M60 90 L100 90", w: 0.8 },
    ],
  },
  "deri-kemer-canta": {
    taramalar: [{ id: "c", sinir: yuvarlakKose(40, 50, 80, 60, 20), kutu: [40, 50, 80, 60], aralik: 5 }],
    cizgiler: [
      { d: "M4 70 Q80 90 156 70 M4 84 Q80 104 156 84", w: 1.6 },
      { d: yuvarlakKose(40, 50, 80, 60, 20), w: 2.4, dolgu: true },
      { d: "M52 62 L108 62", w: 2 },
      { d: kutu(104, 58, 6, 12), w: 1.4, dolgu: true },
      { d: dikis(40, 50, 80, 60, 5), w: 0.8, kesik: true },
    ],
  },
  "deri-sehpa-altlik": {
    cizgiler: [
      { d: daire(60, 96, 40, 18), w: 2.2, dolgu: true },
      { d: daire(60, 96, 33, 14.5), w: 0.9, kesik: true },
      { d: daire(96, 76, 40, 18), w: 2.2, dolgu: true },
      { d: daire(96, 76, 33, 14.5), w: 0.9, kesik: true },
      { d: "M80 76 L96 68 L112 76 L96 84 Z", w: 1.2 },
      { d: daire(100, 40, 16, 6), w: 1.6 },
      { d: "M84 40 L88 70 M116 40 L112 70", w: 1.6 },
    ],
  },
  "deri-tamir-bakim": {
    cizgiler: [
      { d: "M20 120 Q20 100 40 96 L80 90 Q100 70 110 72 Q130 74 132 100 L134 124 L20 124 Z", w: 2.2, dolgu: true },
      { d: "M20 124 L134 124 L134 134 L20 134 Z", w: 1.8, dolgu: true },
      { d: "M80 90 L90 104 M90 84 L100 98", w: 1 },
      { d: kutu(118, 20, 22, 40), w: 2, dolgu: true },
      { d: "M122 20 L122 12 L136 12 L136 20 M136 14 L146 10", w: 1.4 },
      { d: "M108 44 L96 48 M108 54 L98 62 M108 34 L98 32", w: 1, kesik: true },
    ],
  },
  "deri-canta-sapi": {
    taramalar: [{ id: "c", sinir: "M24 80 L136 80 L128 144 L32 144 Z", kutu: [24, 80, 112, 64], aralik: 6 }],
    cizgiler: [
      { d: "M24 80 L136 80 L128 144 L32 144 Z", w: 2.2, dolgu: true },
      { d: "M48 80 Q48 20 80 20 Q112 20 112 80", w: 3 },
      { d: "M56 80 Q56 30 80 30 Q104 30 104 80", w: 1.2 },
      { d: daire(52, 88, 3) + " " + daire(108, 88, 3), w: 1.4, dolgu: true },
      { d: "M40 100 L120 100", w: 1, kesik: true },
    ],
  },
};
