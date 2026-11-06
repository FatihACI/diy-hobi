import { Cizim, daire, kutu } from "../arac";

// Tuğla deseni (taş duvar dokusu)
const tugla = (x: number, y: number, w: number, h: number, bw = 14, bh = 8) => {
  let d = "";
  for (let r = 0; r * bh < h; r++) {
    const yy = y + r * bh;
    d += `M${x} ${yy} L${x + w} ${yy} `;
    for (let c = (r % 2) * (bw / 2); c < w; c += bw) d += `M${x + c} ${yy} L${x + c} ${Math.min(yy + bh, y + h)} `;
  }
  return d.trim();
};

// Maket & Diorama ek projelerinin çizimleri (viewBox 0 0 160 160)
export const MAKET_CIZIM: Record<string, Cizim> = {
  // Tank (yandan)
  "tank-maketi": {
    taramalar: [
      {
        id: "p",
        sinir: "M18 100 L142 100 Q154 112 142 126 L18 126 Q6 112 18 100 Z",
        kutu: [6, 100, 148, 26],
        aralik: 3,
        sonra: 0,
      },
    ],
    cizgiler: [
      { d: "M18 100 L142 100 Q154 112 142 126 L18 126 Q6 112 18 100 Z", w: 2.2, dolgu: true },
      {
        d:
          daire(30, 113, 8) +
          daire(52, 113, 8) +
          daire(74, 113, 8) +
          daire(96, 113, 8) +
          daire(118, 113, 8) +
          daire(138, 112, 5),
        w: 1.4,
        dolgu: true,
      },
      { d: "M14 100 L28 80 L132 80 L148 100 Z", w: 2, dolgu: true },
      { d: "M50 80 L58 62 L104 62 L112 80", w: 2, dolgu: true },
      { d: "M104 68 L154 64 L154 70 L106 74", w: 1.8, dolgu: true },
      { d: daire(78, 58, 5, 3), w: 1.4, dolgu: true },
      { d: "M36 90 L44 90 M120 90 L128 90", w: 1 },
    ],
    noktalar: [
      [24, 128, 1.2],
      [40, 130, 1],
      [92, 130, 1.2],
      [110, 129, 1],
    ],
  },

  // Yatay şişe içinde gemi
  "sisede-gemi": {
    taramalar: [
      {
        id: "d",
        sinir: "M22 116 L118 116 Q130 116 130 104 L130 120 Q130 132 118 132 L22 132 Q12 132 12 122 Z",
        kutu: [12, 104, 120, 30],
        aralik: 3.5,
      },
    ],
    cizgiler: [
      {
        d: "M22 48 L118 48 Q130 48 132 62 L138 74 L148 74 L148 106 L138 106 L132 118 Q130 132 118 132 L22 132 Q10 132 10 120 L10 60 Q10 48 22 48 Z",
        w: 2,
      },
      { d: kutu(148, 78, 8, 24), w: 1.6, dolgu: true },
      { d: "M14 116 Q40 110 70 116 T128 114", w: 1.1 },
      { d: "M38 110 L102 110 L94 120 L46 120 Z", w: 1.6, dolgu: true },
      { d: "M56 110 L56 58 M80 110 L80 54", w: 1.4 },
      { d: "M58 62 Q72 74 58 102 Z M82 58 Q100 74 82 104 Z", w: 1.4, dolgu: true },
      { d: "M80 54 L104 108 M56 58 L38 108", w: 0.7 },
      { d: "M24 62 L24 80", w: 0.8 },
    ],
  },

  // Kibrit çöpünden kütük ev
  "kibrit-ev": {
    taramalar: [{ id: "c", sinir: "M20 76 L80 30 L140 76 Z", kutu: [20, 30, 120, 46], aralik: 4, sonra: 0 }],
    cizgiler: [
      { d: "M20 76 L80 30 L140 76 Z", w: 2, dolgu: true },
      { d: "M30 76 L30 140 L130 140 L130 76", w: 2, dolgu: true },
      { d: "M24 86 L136 86 M24 96 L136 96 M24 106 L136 106 M24 116 L136 116 M24 126 L136 126 M24 136 L136 136", w: 1 },
      {
        d: "M24 84 L24 88 M136 84 L136 88 M24 104 L24 108 M136 104 L136 108 M24 124 L24 128 M136 124 L136 128",
        w: 2.4,
      },
      { d: kutu(68, 102, 22, 38), w: 1.8, dolgu: true },
      { d: kutu(40, 92, 18, 16) + kutu(102, 92, 18, 16), w: 1.6, dolgu: true },
      { d: "M49 92 L49 108 M40 100 L58 100 M111 92 L111 108 M102 100 L120 100", w: 0.9 },
      { d: "M100 50 L100 30 L112 30 L112 58", w: 1.6, dolgu: true },
    ],
    noktalar: [[85, 122, 1.4]],
  },

  // Açılım (küp ağı) ve katlanmış bina
  papercraft: {
    taramalar: [{ id: "y", sinir: "M118 74 L140 62 L140 120 L118 132 Z", kutu: [118, 62, 22, 70], aralik: 3.5 }],
    cizgiler: [
      {
        d:
          kutu(30, 20, 26, 26) +
          kutu(4, 46, 26, 26) +
          kutu(30, 46, 26, 26) +
          kutu(56, 46, 26, 26) +
          kutu(30, 72, 26, 26) +
          kutu(30, 98, 26, 26),
        w: 1.4,
      },
      { d: "M30 20 L34 14 L52 14 L56 20 M4 46 L0 50 M82 46 L86 50 L86 68 L82 72", w: 0.9, kesik: true },
      { d: "M86 74 L118 74 L118 132 L86 132 Z", w: 2, dolgu: true },
      { d: "M86 74 L108 62 L140 62 L118 74 Z", w: 2, dolgu: true },
      { d: "M118 74 L140 62 L140 120 L118 132 Z", w: 2, dolgu: true },
      { d: kutu(92, 82, 8, 10) + kutu(104, 82, 8, 10) + kutu(92, 100, 8, 10) + kutu(104, 100, 8, 10), w: 1 },
      { d: kutu(96, 116, 12, 16), w: 1.2 },
    ],
  },

  // Oval ray hattı ve tren
  "n-tren": {
    cizgiler: [
      { d: daire(80, 92, 66, 40) + daire(80, 92, 56, 31), w: 1.6 },
      { d: daire(80, 92, 61, 35.5), w: 4, kesik: true },
      { d: "M30 54 L66 46 L70 60 L34 68 Z", w: 1.8, dolgu: true },
      { d: "M66 46 L94 42 L96 54 L70 60", w: 1.8, dolgu: true },
      { d: kutu(36, 48, 8, 6), w: 0.9 },
      { d: "M40 40 L40 48 M38 38 L42 38", w: 1.4 },
      { d: kutu(62, 84, 36, 22), w: 1.8, dolgu: true },
      { d: "M58 84 L80 72 L102 84 Z", w: 1.6, dolgu: true },
      { d: kutu(74, 94, 12, 12), w: 1.2 },
      {
        d: "M40 112 L40 100 M34 104 L40 92 L46 104 Z M120 112 L120 102 M115 106 L120 94 L125 106 Z",
        w: 1.2,
        dolgu: true,
      },
    ],
  },

  // Beyaz mimari ev maketi
  "mimari-maket": {
    taramalar: [{ id: "s", sinir: "M110 64 L136 52 L136 116 L110 128 Z", kutu: [110, 52, 26, 76], aralik: 4 }],
    cizgiler: [
      { d: "M10 128 L110 148 L150 128 L50 108 Z", w: 1.4 },
      { d: "M30 64 L110 64 L110 128 L30 128 Z", w: 2, dolgu: true },
      { d: "M30 64 L56 52 L136 52 L110 64 Z", w: 2, dolgu: true },
      { d: "M110 64 L136 52 L136 116 L110 128 Z", w: 2, dolgu: true },
      { d: kutu(40, 74, 30, 22) + kutu(78, 74, 22, 22), w: 1.3 },
      { d: kutu(46, 104, 14, 24) + kutu(76, 104, 26, 14), w: 1.3 },
      { d: "M30 64 L30 58 L110 58 L110 64", w: 1 },
      { d: daire(20, 112, 8) + "M20 120 L20 128", w: 1.2, dolgu: true },
    ],
  },

  // Klasik otomobil
  "araba-maketi": {
    taramalar: [{ id: "c", sinir: "M52 66 L66 50 L104 50 L118 66 Z", kutu: [52, 50, 66, 16], aralik: 3, sonra: 1 }],
    cizgiler: [
      {
        d: "M10 100 L10 84 Q12 70 40 66 L52 66 L66 48 Q70 44 78 44 L104 44 Q110 44 114 48 L124 66 Q150 68 152 84 L152 100 Z",
        w: 2.2,
        dolgu: true,
      },
      { d: "M56 66 L68 52 L86 52 L86 66 Z M90 52 L106 52 L114 66 L90 66 Z", w: 1.4, dolgu: true },
      { d: daire(42, 102, 15) + daire(122, 102, 15), w: 2.2, dolgu: true },
      { d: daire(42, 102, 7) + daire(122, 102, 7), w: 1.2 },
      { d: "M20 80 Q80 74 144 80", w: 0.9 },
      { d: "M144 84 L152 84 M10 86 L18 86", w: 2 },
      { d: "M30 74 Q40 70 50 72 M100 72 Q110 70 120 72", w: 0.8, kesik: true },
    ],
  },

  // Şövalye figürü ve fırça
  "figur-boyama": {
    taramalar: [{ id: "k", sinir: "M56 62 L88 62 L92 118 L52 118 Z", kutu: [52, 62, 40, 56], aralik: 3, sonra: 2 }],
    cizgiler: [
      { d: daire(72, 130, 30, 7), w: 2, dolgu: true },
      { d: "M42 130 L42 136 Q72 146 102 136 L102 130", w: 2 },
      { d: "M56 62 L88 62 L92 118 L52 118 Z", w: 1.8, dolgu: true },
      { d: daire(72, 46, 14), w: 1.8, dolgu: true },
      { d: "M62 44 L82 44", w: 2 },
      { d: "M72 32 Q76 20 86 18", w: 1.4 },
      { d: "M92 70 L100 40 L104 42 L96 72", w: 1.6, dolgu: true },
      { d: "M48 72 Q32 86 40 104 Q52 98 56 80", w: 1.6, dolgu: true },
      { d: "M120 140 L150 70", w: 3 },
      { d: "M148 74 L154 62 Q158 56 156 66 L152 76 Z", w: 1.3, dolgu: true },
    ],
  },

  // Telden ağaç
  "tel-agac": {
    taramalar: [{ id: "t", sinir: "M70 140 L72 96 L88 96 L90 140 Z", kutu: [70, 96, 20, 44], aralik: 2.5, sonra: 0 }],
    cizgiler: [
      { d: "M70 140 Q74 118 72 96 L88 96 Q86 118 90 140 Z", w: 1.8, dolgu: true },
      { d: "M72 96 Q60 78 40 70 M76 96 Q72 70 60 50 M84 96 Q90 70 104 54 M88 96 Q104 84 124 78", w: 1.6 },
      {
        d: "M40 70 L28 62 M40 70 L34 56 M60 50 L54 36 M60 50 L68 36 M104 54 L100 40 M104 54 L116 44 M124 78 L136 70 M124 78 L136 84",
        w: 1,
      },
      {
        d: daire(30, 56, 12) + daire(58, 36, 14) + daire(104, 40, 14) + daire(134, 74, 12) + daire(80, 30, 12),
        w: 1.3,
        kesik: true,
      },
      { d: "M70 140 L54 148 M74 140 L66 150 M86 140 L96 150 M90 140 L108 146", w: 1.2 },
      { d: daire(80, 148, 50, 6), w: 1.4 },
    ],
  },

  // Diorama deresi
  "diorama-su": {
    taramalar: [
      { id: "y1", sinir: "M10 104 L10 116 L80 140 L80 128 Z", kutu: [10, 104, 70, 36], aralik: 3.5 },
      { id: "y2", sinir: "M80 128 L80 140 L150 112 L150 100 Z", kutu: [80, 100, 70, 40], aralik: 3.5, ters: true },
    ],
    cizgiler: [
      { d: "M10 104 L80 80 L150 100 L80 128 Z", w: 2, dolgu: true },
      { d: "M10 104 L10 116 L80 140 L80 128 M80 140 L150 112 L150 100", w: 2 },
      { d: "M40 94 Q70 100 80 108 Q92 118 120 112 M48 90 Q76 96 88 104 Q100 112 128 106", w: 1.4 },
      { d: "M56 96 q4 -2 8 0 M78 104 q4 -2 8 0 M100 110 q4 -2 8 0", w: 0.9 },
      { d: "M36 98 L44 92 L50 96 L46 102 Z M118 102 L126 96 L132 100 L128 106 Z", w: 1.3, dolgu: true },
      { d: "M30 92 L30 76 M34 92 L36 78 M26 92 L24 80 M136 102 L136 86 M140 102 L142 88", w: 1 },
      { d: "M60 80 L60 60 M52 66 L60 44 L68 66 Z", w: 1.4, dolgu: true },
    ],
  },

  // Işıklı kış köyü
  "isikli-diorama": {
    taramalar: [
      { id: "a", sinir: "M20 110 L20 76 L46 58 L72 76 L72 110 Z", kutu: [20, 58, 52, 52], aralik: 5, sonra: 0 },
    ],
    cizgiler: [
      { d: "M20 110 L20 76 L46 58 L72 76 L72 110 Z", w: 2, dolgu: true },
      { d: "M80 110 L80 86 L104 70 L128 86 L128 110 Z", w: 2, dolgu: true },
      { d: kutu(30, 84, 12, 12) + kutu(90, 92, 12, 10) + kutu(108, 92, 12, 10), w: 1.6, dolgu: true },
      { d: "M28 80 L22 74 M44 80 L50 74 M88 88 L82 82 M124 88 L130 82", w: 1 },
      { d: "M14 110 L146 110 L146 124 L14 124 Z", w: 1.6 },
      { d: "M140 110 L140 60 M134 60 L146 60 L142 52 L138 52 Z", w: 1.6, dolgu: true },
      { d: "M132 66 L126 72 M148 66 L154 72", w: 1 },
      { d: "M14 76 Q46 50 80 80", w: 0.6, kesik: true },
    ],
    noktalar: [
      [22, 30, 1.4],
      [54, 22, 1.2],
      [96, 34, 1.4],
      [124, 18, 1.2],
      [76, 50, 1],
      [38, 44, 1],
      [150, 36, 1.2],
      [110, 52, 1],
    ],
  },

  // Asılı güneş sistemi
  "gunes-sistemi": {
    taramalar: [{ id: "g", sinir: daire(80, 92, 18), kutu: [62, 74, 36, 36], aralik: 3, sonra: 3 }],
    cizgiler: [
      { d: "M80 4 L80 20", w: 1.2 },
      { d: daire(80, 24, 66, 8), w: 2 },
      {
        d: "M80 24 L80 74 M20 28 L20 70 M42 32 L42 104 M118 32 L118 110 M140 28 L140 84 M100 31 L100 62 M58 31 L58 56",
        w: 0.7,
      },
      { d: daire(80, 92, 18), w: 2, dolgu: true },
      {
        d: daire(20, 74, 4) + daire(58, 60, 5) + daire(100, 66, 6) + daire(42, 112, 8) + daire(140, 92, 7),
        w: 1.5,
        dolgu: true,
      },
      { d: daire(118, 124, 9), w: 1.5, dolgu: true },
      { d: daire(118, 124, 16, 4), w: 1.3 },
      { d: "M60 92 L52 92 M100 92 L108 92 M80 72 L80 68 M66 78 L62 74 M94 78 L98 74", w: 1 },
    ],
  },

  // Deniz feneri
  "deniz-feneri": {
    taramalar: [
      {
        id: "s",
        sinir: "M66 84 L94 84 L96 100 L64 100 Z M62 116 L98 116 L100 132 L60 132 Z",
        kutu: [60, 84, 40, 48],
        aralik: 3,
        sonra: 1,
      },
    ],
    cizgiler: [
      { d: "M24 150 Q40 130 60 132 L100 132 Q124 128 140 150 Z", w: 1.8, dolgu: true },
      { d: "M60 132 L68 60 L92 60 L100 132 Z", w: 2, dolgu: true },
      { d: kutu(66, 44, 28, 16), w: 1.8, dolgu: true },
      { d: "M62 44 L80 28 L98 44 Z", w: 1.8, dolgu: true },
      { d: "M62 60 L98 60", w: 2.2 },
      { d: "M94 48 L150 32 M94 56 L150 66 M66 48 L10 32 M66 56 L10 66", w: 0.9, kesik: true },
      { d: kutu(76, 104, 8, 10), w: 1.1 },
      { d: "M10 140 q6 -3 12 0 M130 142 q6 -3 12 0", w: 1 },
    ],
  },

  // Katmanlı topografik harita
  "topografik-harita": {
    taramalar: [
      {
        id: "t",
        sinir: "M70 62 Q80 48 94 56 Q102 68 90 76 Q76 80 70 62 Z",
        kutu: [68, 48, 36, 32],
        aralik: 2.5,
        sonra: 4,
      },
    ],
    cizgiler: [
      {
        d: "M10 120 Q14 76 50 70 Q72 44 110 52 Q150 60 150 100 Q148 132 104 136 Q60 142 30 136 Q10 132 10 120 Z",
        w: 2,
        dolgu: true,
      },
      {
        d: "M24 116 Q28 84 56 80 Q74 58 106 64 Q138 72 136 100 Q132 124 100 126 Q64 130 38 124 Q24 122 24 116 Z",
        w: 1.8,
        dolgu: true,
      },
      {
        d: "M40 110 Q44 90 64 88 Q78 70 100 76 Q122 82 120 100 Q116 116 96 116 Q70 118 52 114 Q40 114 40 110 Z",
        w: 1.6,
        dolgu: true,
      },
      { d: "M56 102 Q60 86 76 84 Q90 70 104 82 Q110 96 96 104 Q78 108 62 106 Q56 106 56 102 Z", w: 1.5, dolgu: true },
      { d: "M70 62 Q80 48 94 56 Q102 68 90 76 Q76 80 70 62 Z", w: 1.4, dolgu: true },
      { d: "M10 120 L10 128 M150 100 L150 108", w: 1.4 },
    ],
  },

  // Ahşap yelkenli kalyon
  "ahsap-gemi": {
    taramalar: [{ id: "g", sinir: "M14 100 L146 100 L132 132 L32 132 Z", kutu: [14, 100, 132, 32], aralik: 3 }],
    cizgiler: [
      { d: "M14 100 L146 100 L132 132 L32 132 Z", w: 2.2, dolgu: true },
      { d: "M14 100 L10 88 L30 92 M146 100 L152 84 L130 92", w: 1.6 },
      { d: "M18 110 L142 110 M22 120 L138 120", w: 0.8 },
      { d: "M50 100 L50 20 M90 100 L90 12 M124 100 L124 36", w: 1.8 },
      { d: "M34 34 Q50 46 66 34 L64 56 Q50 64 36 56 Z M36 62 Q50 72 64 62 L62 86 Q50 92 38 86 Z", w: 1.4, dolgu: true },
      {
        d: "M72 26 Q90 38 108 26 L106 50 Q90 58 74 50 Z M74 56 Q90 66 106 56 L104 84 Q90 90 76 84 Z",
        w: 1.4,
        dolgu: true,
      },
      { d: "M112 44 Q124 52 136 44 L134 70 Q124 76 114 70 Z", w: 1.4, dolgu: true },
      { d: "M90 12 L150 84 M50 20 L10 88", w: 0.6 },
      { d: "M90 12 L98 16 L90 20", w: 1.2 },
    ],
  },

  // Saksıda peri bahçesi
  "peri-bahcesi": {
    taramalar: [{ id: "s", sinir: "M14 100 Q16 150 80 150 Q144 150 146 100 Z", kutu: [14, 116, 132, 34], aralik: 4 }],
    cizgiler: [
      { d: "M14 100 Q16 150 80 150 Q144 150 146 100 Z", w: 2, dolgu: true },
      { d: daire(80, 100, 66, 10), w: 1.6, dolgu: true },
      { d: "M60 98 L60 66 Q60 54 74 54 Q88 54 88 66 L88 98", w: 1.8, dolgu: true },
      { d: "M56 62 Q74 34 92 62 Z", w: 1.6, dolgu: true },
      { d: "M68 98 L68 80 Q74 74 80 80 L80 98", w: 1.3 },
      { d: daire(76, 90, 1.2), w: 1 },
      { d: daire(84, 106, 5, 2) + daire(96, 104, 4, 1.8) + daire(108, 102, 4, 1.6) + daire(120, 100, 3, 1.4), w: 1 },
      { d: "M118 98 L118 84 M108 86 Q118 72 128 86 Z", w: 1.4, dolgu: true },
      { d: "M24 98 L24 84 M30 98 L30 84 M36 98 L36 84 M22 88 L38 88", w: 1.2 },
      { d: "M44 96 q4 -10 8 0 q4 -8 6 2", w: 1 },
    ],
    noktalar: [
      [112, 82, 1.2],
      [122, 80, 1],
    ],
  },

  // Taş dokulu strafor kale duvarı
  "strafor-kale": {
    taramalar: [
      { id: "k", sinir: "M70 140 L70 112 Q80 102 90 112 L90 140 Z", kutu: [70, 102, 20, 38], aralik: 2.5, sonra: 3 },
    ],
    cizgiler: [
      { d: "M20 140 L20 40 L28 40 L28 32 L36 32 L36 40 L44 40 L44 32 L52 32 L52 40 L52 140", w: 2, dolgu: true },
      {
        d: "M52 140 L52 70 L60 70 L60 62 L68 62 L68 70 L76 70 L76 62 L84 62 L84 70 L92 70 L92 62 L100 62 L100 70 L108 70 L108 62 L116 62 L116 70 L140 70 L140 140",
        w: 2,
        dolgu: true,
      },
      { d: tugla(20, 44, 32, 96) + " " + tugla(52, 74, 88, 66), w: 0.7 },
      { d: "M70 140 L70 112 Q80 102 90 112 L90 140 Z", w: 1.8, dolgu: true },
      { d: kutu(32, 60, 8, 14), w: 1.4, dolgu: true },
      { d: "M10 140 L150 140", w: 2 },
    ],
  },
};
