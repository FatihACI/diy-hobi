import { Cizim, daire, kutu } from "../arac";

// Ahşap damarı çizgileri (dikdörtgen içinde)
const damar = (x: number, y: number, w: number, h: number, n = 3) =>
  Array.from({ length: n }, (_, i) => {
    const yy = y + ((i + 1) * h) / (n + 1);
    return `M${x + 4} ${yy} Q${x + w / 3} ${yy - 3} ${x + w / 2} ${yy} T${x + w - 4} ${yy}`;
  }).join(" ");

// Ahşap İşleri ek projelerinin çizimleri (viewBox 0 0 160 160)
export const AHSAP_CIZIM: Record<string, Cizim> = {
  "ahsap-kasik": {
    taramalar: [{ id: "h", sinir: daire(46, 60, 22, 30), kutu: [24, 30, 44, 60], aralik: 3, sonra: 1 }],
    cizgiler: [
      { d: "M46 30 Q70 30 68 64 Q66 90 50 96 L110 150 L102 156 L42 98 Q22 90 24 62 Q24 30 46 30 Z", w: 2, dolgu: true },
      { d: daire(46, 62, 14, 22), w: 1.4, dolgu: true },
      { d: "M120 20 L150 50 L144 56 L114 26 Z M114 26 L104 18", w: 1.6, dolgu: true },
      { d: "M84 30 q6 -6 12 -2 M88 40 q8 -4 12 2", w: 1, kesik: true },
    ],
  },
  "cicek-kutusu": {
    taramalar: [{ id: "k", sinir: "M14 90 L146 90 L140 130 L20 130 Z", kutu: [14, 90, 132, 40], aralik: 4 }],
    cizgiler: [
      { d: "M14 90 L146 90 L140 130 L20 130 Z", w: 2.2, dolgu: true },
      { d: "M14 104 L146 104 M14 118 L146 118", w: 0.8 },
      ...[34, 66, 98, 128].map((x) => ({
        d: `M${x} 90 L${x} 66 ${"M"}${x} 74 q-8 -6 -6 -14 q6 2 6 10 M${x} 70 q8 -6 6 -14 q-6 2 -6 10`,
        w: 1.3,
      })),
      { d: daire(34, 58, 6) + daire(66, 60, 6) + daire(98, 58, 6) + daire(128, 60, 6), w: 1.3, dolgu: true },
      { d: "M4 76 L4 150 M156 76 L156 150 M4 140 L156 140", w: 1, kesik: true },
    ],
  },
  "servis-tepsisi": {
    taramalar: [{ id: "y", sinir: "M20 80 L140 80 L150 110 L10 110 Z", kutu: [10, 80, 140, 30], aralik: 5, sonra: 0 }],
    cizgiler: [
      { d: "M20 80 L140 80 L150 110 L10 110 Z", w: 2, dolgu: true },
      { d: "M10 110 L10 122 L150 122 L150 110", w: 2 },
      { d: "M20 80 L16 64 L32 64 L28 80 M140 80 L144 64 L128 64 L132 80", w: 1.8 },
      { d: daire(24, 70, 3, 2) + daire(136, 70, 3, 2), w: 1.2 },
      { d: "M60 96 L60 80 Q60 72 68 72 L80 72 Q88 72 88 80 L88 96 Z", w: 1.6, dolgu: true },
      { d: "M88 78 Q98 80 94 90 L88 90", w: 1.4 },
      { d: daire(116, 94, 10, 4), w: 1.4, dolgu: true },
    ],
  },
  "kitap-standi": {
    taramalar: [{ id: "k", sinir: "M40 30 L110 30 L96 120 L26 120 Z", kutu: [26, 30, 84, 90], aralik: 5, sonra: 0 }],
    cizgiler: [
      { d: "M40 30 L110 30 L96 120 L26 120 Z", w: 2, dolgu: true },
      { d: "M26 120 L96 120 L96 128 L26 128 Z", w: 1.6, dolgu: true },
      { d: "M66 60 L68 110 M48 40 L90 40 M44 50 L88 50", w: 0.9 },
      { d: "M100 70 L140 140 M20 140 L150 140", w: 2 },
      { d: "M110 140 L112 134 L118 140 M124 140 L126 134 L132 140", w: 1.2 },
    ],
  },
  ayakkabilik: {
    cizgiler: [
      { d: "M24 20 L24 146 M136 20 L136 146", w: 2.4 },
      { d: "M24 50 L136 40 M24 90 L136 80 M24 130 L136 120", w: 2.4 },
      { d: "M30 46 Q40 30 56 34 L66 44 L30 47 Z M80 40 Q90 26 104 30 L114 39 L80 42 Z", w: 1.4, dolgu: true },
      { d: "M30 86 Q38 72 54 76 L64 84 L30 87 Z M86 80 Q96 68 110 72 L120 78 L86 82 Z", w: 1.4, dolgu: true },
      { d: "M40 126 Q48 112 66 116 L76 124 L40 127 Z", w: 1.4, dolgu: true },
      { d: "M10 146 L150 146", w: 1.4 },
    ],
  },
  "duvar-askilik": {
    taramalar: [{ id: "a", sinir: kutu(14, 50, 132, 24), kutu: [14, 50, 132, 24], aralik: 5, sonra: 0 }],
    cizgiler: [
      { d: kutu(14, 50, 132, 24), w: 2.2, dolgu: true },
      ...[34, 58, 82, 106, 130].map((x) => ({
        d: `M${x} 66 L${x + 4} 90 ${daire(x + 4, 94, 4)}`,
        w: 1.8,
        dolgu: true,
      })),
      { d: "M34 98 Q20 110 26 140 L54 140 Q60 112 40 98 M58 98 L66 120 L54 124", w: 1.4 },
      { d: "M106 98 Q100 110 112 116 Q124 110 114 98", w: 1.4 },
    ],
  },
  "ahsap-saat": {
    taramalar: [{ id: "k", sinir: daire(80, 80, 62) + " " + daire(80, 80, 54), kutu: [18, 18, 124, 124], aralik: 4 }],
    cizgiler: [
      { d: daire(80, 80, 62), w: 2.4, dolgu: true },
      { d: daire(80, 80, 54), w: 1.2 },
      { d: daire(80, 80, 36) + daire(80, 80, 18), w: 0.5, kesik: true },
      {
        d: Array.from({ length: 12 }, (_, i) => {
          const t = (i / 12) * Math.PI * 2;
          const r1 = i % 3 ? 46 : 42;
          return `M${(80 + Math.cos(t) * r1).toFixed(1)} ${(80 + Math.sin(t) * r1).toFixed(1)} L${(80 + Math.cos(t) * 50).toFixed(1)} ${(80 + Math.sin(t) * 50).toFixed(1)}`;
        }).join(" "),
        w: 1.6,
      },
      { d: "M80 80 L80 46 M80 80 L104 92", w: 2.4 },
      { d: daire(80, 80, 3), w: 1.4, dolgu: true },
    ],
  },
  "palet-sehpa": {
    taramalar: [{ id: "u", sinir: "M10 80 L70 60 L150 76 L90 98 Z", kutu: [10, 60, 140, 38], aralik: 6 }],
    cizgiler: [
      { d: "M10 80 L70 60 L150 76 L90 98 Z", w: 2, dolgu: true },
      { d: "M10 80 L10 104 L90 122 L150 100 L150 76 M90 98 L90 122", w: 2 },
      { d: "M24 76 L104 94 M38 71 L118 89 M52 66 L132 84", w: 0.9 },
      { d: "M10 92 L90 110 L150 88", w: 1.2 },
      { d: daire(18, 112, 6) + daire(84, 128, 6) + daire(144, 108, 6), w: 1.6, dolgu: true },
    ],
  },
  tabure: {
    taramalar: [{ id: "o", sinir: daire(80, 44, 50, 14), kutu: [30, 30, 100, 28], aralik: 4, sonra: 0 }],
    cizgiler: [
      { d: daire(80, 44, 50, 14), w: 2.2, dolgu: true },
      { d: "M38 52 L30 146 M122 52 L130 146 M60 56 L58 140 M100 56 L102 140", w: 2.4 },
      { d: "M34 100 L126 100 M59 110 L101 110", w: 1.6 },
      { d: "M30 50 L30 58 Q80 72 130 58 L130 50", w: 1.6 },
    ],
  },
  "tablet-standi": {
    taramalar: [{ id: "b", sinir: "M20 110 L120 110 L140 96 L40 96 Z", kutu: [20, 96, 120, 14], aralik: 3 }],
    cizgiler: [
      { d: "M20 110 L120 110 L140 96 L40 96 Z", w: 2, dolgu: true },
      { d: "M20 110 L20 126 L120 126 L140 112 L140 96 M120 110 L120 126", w: 2 },
      { d: damar(20, 110, 100, 16, 2), w: 0.7 },
      { d: "M62 104 L84 30 Q86 24 92 26 L124 36 Q130 38 128 44 L106 112", w: 2, dolgu: true },
      { d: "M70 100 L90 34 L118 42 L100 106", w: 1 },
    ],
  },
  "baharat-rafi": {
    cizgiler: [
      { d: "M20 20 L20 146 M140 20 L140 146", w: 2.2 },
      { d: "M20 60 L140 60 M20 100 L140 100 M20 140 L140 140", w: 2.4 },
      { d: "M20 52 L140 52 M20 92 L140 92 M20 132 L140 132", w: 1, kesik: true },
      ...[
        [36, 60],
        [64, 60],
        [92, 60],
        [120, 60],
        [44, 100],
        [76, 100],
        [108, 100],
        [52, 140],
        [92, 140],
      ].map(([x, y]) => ({
        d: `M${x - 9} ${y} L${x - 9} ${y - 20} L${x + 9} ${y - 20} L${x + 9} ${y} Z M${x - 10} ${y - 26} L${x + 10} ${y - 26} L${x + 10} ${y - 20} L${x - 10} ${y - 20} Z`,
        w: 1.2,
        dolgu: true,
      })),
    ],
  },
  "anahtar-panosu": {
    taramalar: [{ id: "p", sinir: kutu(20, 40, 120, 60), kutu: [20, 40, 120, 60], aralik: 5, sonra: 0 }],
    cizgiler: [
      { d: kutu(20, 40, 120, 60), w: 2.2, dolgu: true },
      { d: "M14 40 L146 40 L146 32 L14 32 Z", w: 1.8, dolgu: true },
      { d: "M30 32 L30 14 L60 14 L60 32", w: 1.4 },
      ...[40, 64, 88, 112].map((x) => ({ d: `M${x} 84 L${x} 96 Q${x} 100 ${x + 4} 100`, w: 1.8 })),
      { d: daire(44, 112, 5) + "M44 117 L44 140 M44 130 L50 130 M44 136 L48 136", w: 1.4 },
      { d: daire(92, 112, 5) + "M92 117 L92 136 M92 128 L98 128", w: 1.4 },
    ],
  },
  "resim-cercevesi": {
    taramalar: [
      {
        id: "c",
        sinir: "M20 20 L140 20 L124 36 L36 36 Z M20 140 L140 140 L124 124 L36 124 Z",
        kutu: [20, 20, 120, 120],
        aralik: 4,
      },
    ],
    cizgiler: [
      { d: kutu(20, 20, 120, 120), w: 2.4 },
      { d: kutu(36, 36, 88, 88), w: 2 },
      { d: "M20 20 L36 36 M140 20 L124 36 M20 140 L36 124 M140 140 L124 124", w: 1.4 },
      { d: "M44 112 L68 80 L84 98 L96 84 L116 112 Z", w: 1.4 },
      { d: daire(100, 56, 8), w: 1.2 },
      { d: "M40 40 L56 56", w: 0.8 },
    ],
  },
  "bitki-merdiveni": {
    cizgiler: [
      { d: "M50 14 L20 150 M58 14 L100 150 M50 14 L58 14", w: 2.2 },
      { d: "M42 50 L80 50 M34 86 L90 86 M26 122 L100 122", w: 2.4 },
      ...[
        [62, 50],
        [62, 86],
        [52, 122],
        [82, 122],
      ].map(([x, y]) => ({
        d: `M${x - 9} ${y} L${x - 7} ${y - 14} L${x + 7} ${y - 14} L${x + 9} ${y} Z M${x} ${y - 14} q-6 -10 -2 -16 M${x} ${y - 14} q6 -10 2 -16`,
        w: 1.3,
        dolgu: true,
      })),
      { d: "M32 100 L86 100", w: 1, kesik: true },
      { d: "M110 150 L150 150", w: 1.4 },
    ],
  },
  "kutuk-kalemlik": {
    taramalar: [
      { id: "k", sinir: "M40 50 L120 50 L120 140 Q80 150 40 140 Z", kutu: [40, 50, 80, 100], aralik: 6, sonra: 0 },
    ],
    cizgiler: [
      { d: "M40 50 L40 140 Q80 150 120 140 L120 50", w: 2.2, dolgu: true },
      { d: daire(80, 50, 40, 10), w: 2, dolgu: true },
      { d: daire(80, 50, 30, 7) + daire(80, 50, 18, 4), w: 0.6, kesik: true },
      {
        d: daire(64, 48, 4, 2) + daire(80, 46, 4, 2) + daire(96, 48, 4, 2) + daire(72, 54, 4, 2) + daire(90, 54, 4, 2),
        w: 1.2,
      },
      { d: "M64 48 L54 10 M80 46 L84 6 M96 48 L112 14", w: 2 },
      { d: "M54 10 L52 4 M112 14 L114 8", w: 1.2 },
    ],
  },
  "ahsap-lamba": {
    taramalar: [{ id: "g", sinir: kutu(64, 70, 32, 70), kutu: [64, 70, 32, 70], aralik: 5, sonra: 0 }],
    cizgiler: [
      { d: kutu(64, 70, 32, 70), w: 2, dolgu: true },
      { d: "M44 14 L116 14 L132 62 L28 62 Z", w: 2, dolgu: true },
      { d: "M80 62 L80 70", w: 1.6 },
      { d: daire(80, 52, 8), w: 1.2 },
      { d: "M96 130 Q130 140 150 120", w: 1.2 },
      { d: "M50 146 L110 146", w: 1.4 },
      { d: "M20 70 L10 80 M140 70 L150 80 M30 84 L22 94 M130 84 L138 94", w: 1, kesik: true },
    ],
  },
  "havlu-askisi": {
    taramalar: [{ id: "r", sinir: "M56 40 L104 40 L104 130 L56 130 Z", kutu: [56, 40, 48, 90], aralik: 6, sonra: 1 }],
    cizgiler: [
      { d: daire(80, 138, 40, 10), w: 2, dolgu: true },
      { d: "M56 40 L56 130 Q80 140 104 130 L104 40", w: 2, dolgu: true },
      { d: daire(80, 40, 24, 6), w: 1.6, dolgu: true },
      { d: daire(80, 40, 6, 2), w: 1.2 },
      { d: "M80 40 L80 20", w: 2.4 },
      { d: "M104 70 Q120 74 126 90 L114 92", w: 1.4 },
    ],
  },
};
