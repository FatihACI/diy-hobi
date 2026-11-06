import { Cizim, daire, kutu } from "../arac";

const tornavida = (x: number, y: number) =>
  `M${x} ${y} L${x + 30} ${y - 30} M${x + 30} ${y - 30} L${x + 34} ${y - 38} L${x + 54} ${y - 58} L${x + 62} ${y - 50} L${x + 42} ${y - 30} Z`;
const terazi = (x: number, y: number, w: number) => kutu(x, y, w, 12) + " " + kutu(x + w / 2 - 10, y + 3, 20, 6);
const fircaRulo = (x: number, y: number) =>
  kutu(x, y, 50, 18) +
  ` M${x + 50} ${y + 9} L${x + 60} ${y + 9} L${x + 60} ${y + 30} L${x + 30} ${y + 30} L${x + 30} ${y + 70}`;

// Ev Tamiratı ek projelerinin çizimleri (viewBox 0 0 160 160)
export const EV_TAMIR_CIZIM: Record<string, Cizim> = {
  "kapi-gicirtisi": {
    taramalar: [{ id: "k", sinir: kutu(40, 14, 70, 140), kutu: [40, 14, 70, 140], aralik: 8 }],
    cizgiler: [
      { d: kutu(40, 14, 70, 140), w: 2.2, dolgu: true },
      { d: kutu(34, 34, 10, 26) + " " + kutu(34, 110, 10, 26), w: 1.8, dolgu: true },
      { d: "M39 26 L39 70", w: 1.4 },
      { d: daire(96, 84, 5), w: 1.6 },
      { d: "M128 30 L144 20 L148 26 L132 36 Z M128 30 L120 36 L118 44 L124 42 L132 36", w: 1.8, dolgu: true },
      { d: "M116 46 L110 56 M112 50 L104 58", w: 1, kesik: true },
    ],
  },
  "kapi-ayari": {
    taramalar: [{ id: "k", sinir: "M40 14 L110 14 L112 144 L42 146 Z", kutu: [40, 14, 72, 132], aralik: 8 }],
    cizgiler: [
      { d: "M40 14 L110 14 L112 144 L42 146 Z", w: 2.2, dolgu: true },
      { d: "M30 150 L130 150", w: 2 },
      { d: kutu(34, 30, 10, 22), w: 1.6, dolgu: true },
      { d: "M44 146 L60 150", w: 1.6 },
      { d: "M120 40 L120 20 M114 26 L120 18 L126 26", w: 1.6 },
      { d: tornavida(70, 80), w: 1.8, dolgu: true },
    ],
  },
  "lavabo-sifon-temizligi": {
    cizgiler: [
      { d: "M20 30 L140 30 L130 50 L30 50 Z", w: 2.2, dolgu: true },
      { d: "M70 50 L70 90 Q70 110 90 110 Q110 110 110 90 L110 80 L146 80", w: 6 },
      { d: kutu(62, 60, 16, 8) + " " + kutu(102, 72, 16, 8), w: 1.6, dolgu: true },
      { d: "M50 120 L130 120 L124 150 L56 150 Z", w: 2, dolgu: true },
      { d: "M80 126 Q86 132 92 126", w: 1 },
    ],
  },
  "rezervuar-ic-takim": {
    taramalar: [{ id: "s", sinir: "M30 70 L130 70 L130 140 L30 140 Z", kutu: [30, 70, 100, 70], aralik: 5 }],
    cizgiler: [
      { d: kutu(24, 30, 112, 116), w: 2.4, dolgu: true },
      { d: "M30 70 Q55 64 80 70 Q105 76 130 70", w: 1.2 },
      { d: kutu(44, 50, 10, 90), w: 1.8 },
      { d: daire(49, 60, 9, 6), w: 1.6, dolgu: true },
      { d: kutu(96, 40, 14, 100), w: 1.8 },
      { d: daire(103, 140, 12, 4), w: 1.6 },
      { d: kutu(24, 22, 112, 8), w: 1.8, dolgu: true },
    ],
  },
  "dolap-mentese-ayari": {
    cizgiler: [
      { d: kutu(14, 30, 60, 110) + " " + kutu(80, 30, 60, 110), w: 2.2, dolgu: true },
      { d: kutu(84, 44, 16, 20), w: 1.6 },
      { d: daire(92, 50, 3) + " " + daire(92, 58, 3), w: 1.2 },
      { d: daire(64, 84, 3) + " " + daire(90, 84, 3), w: 1.4, dolgu: true },
      { d: "M110 20 L130 20 M126 16 L130 20 L126 24 M116 16 L112 20 L116 24", w: 1.4 },
      { d: tornavida(94, 120), w: 1.6, dolgu: true },
    ],
  },
  "raf-montaji": {
    taramalar: [{ id: "r", sinir: kutu(20, 70, 120, 12), kutu: [20, 70, 120, 12], aralik: 3 }],
    cizgiler: [
      { d: kutu(20, 70, 120, 12), w: 2.2, dolgu: true },
      { d: "M36 82 L36 112 L60 82 M124 82 L124 112 L100 82", w: 2 },
      { d: daire(36, 96, 2) + " " + daire(124, 96, 2), w: 1.2, dolgu: true },
      { d: terazi(50, 54, 60), w: 1.6 },
      { d: "M40 70 L40 40 L56 40 L56 70 M64 70 L64 46 L78 46 L78 70", w: 1.6, dolgu: true },
      { d: "M110 130 L150 130 L150 140 L110 140 Z M96 135 L110 135", w: 1.8, dolgu: true },
    ],
  },
  "duvar-boyama": {
    taramalar: [{ id: "b", sinir: "M10 10 L80 10 L80 150 L10 150 Z", kutu: [10, 10, 70, 140], aralik: 5 }],
    cizgiler: [
      { d: "M10 10 L80 10 Q86 30 78 50 Q86 70 80 90 Q86 110 78 130 Q84 140 80 150 L10 150", w: 1.6 },
      { d: fircaRulo(70, 40), w: 2, dolgu: true },
      { d: "M90 140 L150 140 L144 116 L96 116 Z", w: 2, dolgu: true },
      { d: "M96 124 L144 124", w: 1 },
    ],
  },
  "fayans-derz-yenileme": {
    cizgiler: [
      { d: kutu(14, 14, 132, 132), w: 2.2 },
      { d: [47, 80, 113].map((v) => `M${v} 14 L${v} 146 M14 ${v} L146 ${v}`).join(" "), w: 2.4 },
      { d: [47, 80, 113].map((v) => `M${v - 1.5} 14 L${v - 1.5} 146`).join(" "), w: 0.6 },
      { d: "M100 120 L140 100 L146 108 L106 128 Z", w: 2, dolgu: true },
      { d: "M100 120 L90 134", w: 2 },
    ],
  },
  "pencere-fitili": {
    taramalar: [{ id: "c", sinir: kutu(36, 30, 88, 100), kutu: [36, 30, 88, 100], aralik: 10, ters: true }],
    cizgiler: [
      { d: kutu(24, 18, 112, 124), w: 2.6, dolgu: true },
      { d: kutu(36, 30, 88, 100), w: 1.6 },
      { d: kutu(30, 24, 100, 112), w: 1, kesik: true },
      { d: "M80 30 L80 130", w: 1.6 },
      { d: "M140 60 Q150 70 146 84 M146 50 Q156 66 152 90", w: 1, kesik: true },
    ],
  },
  "kapi-kolu-degisimi": {
    taramalar: [{ id: "k", sinir: kutu(14, 10, 70, 140), kutu: [14, 10, 70, 140], aralik: 8 }],
    cizgiler: [
      { d: kutu(14, 10, 70, 140), w: 2.2, dolgu: true },
      { d: kutu(56, 60, 18, 60), w: 1.8, dolgu: true },
      { d: daire(65, 74, 7), w: 1.6, dolgu: true },
      { d: "M65 74 L120 74 Q130 74 130 82 L128 84 L66 82", w: 2.4, dolgu: true },
      { d: daire(65, 104, 4), w: 1.4 },
      { d: kutu(96, 110, 6, 30), w: 1.4 },
    ],
  },
  "laminat-cizik-tamiri": {
    cizgiler: [
      { d: "M10 60 L150 60 L150 150 L10 150 Z", w: 2 },
      { d: "M10 90 L150 90 M10 120 L150 120 M60 60 L60 90 M110 90 L110 120 M40 120 L40 150 M130 60 L130 90", w: 1.2 },
      { d: "M20 72 Q40 70 52 74 M70 100 Q90 98 100 104 M60 132 Q80 128 110 134", w: 0.6 },
      { d: "M70 76 L100 82", w: 1.6, kesik: true },
      { d: "M104 40 L136 14 L142 20 L110 46 Z M104 40 L98 50 L110 46", w: 1.8, dolgu: true },
    ],
  },
  "dus-basligi-kirec": {
    cizgiler: [
      { d: "M20 20 L60 20 L60 40", w: 3 },
      { d: daire(80, 60, 36, 14), w: 2.2, dolgu: true },
      { d: "M60 40 L70 48", w: 2.4 },
      { d: [-20, -10, 0, 10, 20].map((dx) => daire(80 + dx, 62, 2)).join(" "), w: 1.2, dolgu: true },
      { d: "M44 64 Q40 100 60 120 L100 120 Q120 100 116 64", w: 1.6 },
      { d: "M44 96 Q80 104 116 96", w: 1, kesik: true },
      { d: "M60 120 L80 136 L100 120", w: 1.4 },
    ],
  },
  "tv-duvar-montaji": {
    taramalar: [{ id: "e", sinir: kutu(30, 30, 100, 64), kutu: [30, 30, 100, 64], aralik: 7 }],
    cizgiler: [
      { d: kutu(24, 24, 112, 76), w: 2.6, dolgu: true },
      { d: kutu(30, 30, 100, 64), w: 1 },
      { d: kutu(64, 104, 32, 18) + " M70 100 L70 104 M90 100 L90 104", w: 1.6 },
      { d: terazi(50, 134, 60), w: 1.6 },
      { d: "M18 24 L18 100 M14 24 L22 24 M14 100 L22 100", w: 1, kesik: true },
    ],
  },
  "kornis-montaji": {
    cizgiler: [
      { d: "M10 24 L150 24", w: 3 },
      { d: daire(10, 24, 5) + " " + daire(150, 24, 5), w: 1.8, dolgu: true },
      { d: kutu(30, 14, 8, 16) + " " + kutu(122, 14, 8, 16), w: 1.6, dolgu: true },
      { d: kutu(36, 50, 88, 96), w: 2, dolgu: true },
      { d: "M80 50 L80 146 M36 98 L124 98", w: 1.4 },
      { d: "M18 24 Q14 90 22 150 M30 24 Q34 90 26 150 M142 24 Q146 90 138 150 M130 24 Q126 90 134 150", w: 1.4 },
    ],
  },
  "duvar-kagidi": {
    taramalar: [{ id: "d", sinir: kutu(14, 14, 60, 136), kutu: [14, 14, 60, 136], aralik: 9 }],
    cizgiler: [
      { d: kutu(14, 14, 60, 136), w: 2, dolgu: true },
      { d: "M74 14 L120 14 L120 120 Q110 130 120 150 L74 150", w: 2, dolgu: true },
      {
        d: "M84 30 Q92 24 100 30 Q92 36 84 30 Z M84 70 Q92 64 100 70 Q92 76 84 70 Z M84 110 Q92 104 100 110 Q92 116 84 110 Z",
        w: 1.2,
      },
      {
        d: "M30 30 Q38 24 46 30 Q38 36 30 30 Z M30 70 Q38 64 46 70 Q38 76 30 70 Z M30 110 Q38 104 46 110 Q38 116 30 110 Z",
        w: 1.2,
      },
      { d: "M130 40 L150 40 L150 70 L130 70 Z M136 70 L136 100", w: 1.8, dolgu: true },
    ],
  },
  "kuf-temizligi": {
    cizgiler: [
      { d: kutu(10, 20, 90, 130), w: 2 },
      { d: "M10 52 L100 52 M10 85 L100 85 M10 118 L100 118 M55 20 L55 150", w: 1 },
      { d: kutu(110, 60, 30, 70), w: 2.2, dolgu: true },
      { d: "M114 60 L114 46 L132 46 L132 60 M132 50 L146 46", w: 1.6 },
      { d: "M104 50 L88 44 M104 56 L86 58 M104 44 L92 32", w: 1, kesik: true },
    ],
    noktalar: [
      [24, 34, 3],
      [30, 40, 2],
      [20, 44, 2],
      [70, 100, 3],
      [76, 108, 2],
      [64, 106, 1.6],
      [40, 130, 2.4],
    ],
  },
  "radyator-hava-alma": {
    cizgiler: [
      { d: kutu(14, 40, 120, 90), w: 2.2, dolgu: true },
      { d: Array.from({ length: 8 }, (_, i) => kutu(20 + i * 14, 46, 10, 78)).join(" "), w: 1.2 },
      { d: kutu(134, 46, 10, 10), w: 1.8, dolgu: true },
      { d: "M144 51 L152 51", w: 2 },
      { d: "M140 60 Q142 70 138 76", w: 1.2, kesik: true },
      { d: "M14 136 L134 136 M30 130 L30 150 M118 130 L118 150", w: 1.8 },
      { d: "M30 30 Q34 20 28 12 M60 30 Q64 20 58 12", w: 1, kesik: true },
    ],
  },
};
