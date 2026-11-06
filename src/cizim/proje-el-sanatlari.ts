import { Cizim, daire, kutu, yuvarla } from "./arac";

// Çember üzerinde eşit aralıklı noktalar (boncuk dizisi, mandala halkası)
const halka = (cx: number, cy: number, r: number, adet: number, br: number, ry = r) =>
  Array.from({ length: adet }, (_, i) => {
    const t = (i / adet) * Math.PI * 2;
    return daire(yuvarla(cx + Math.cos(t) * r), yuvarla(cy + Math.sin(t) * ry), br);
  }).join(" ");

// El Sanatları projeleri (viewBox 0 0 160 160)
export const PROJE_EL_SANATLARI: Record<string, Cizim> = {
  // ─── MUM & SABUN ───
  "soya-mum": {
    taramalar: [{ id: "k", sinir: kutu(96, 128, 52, 10), kutu: [96, 128, 52, 10], aralik: 3, sonra: 6 }],
    cizgiler: [
      { d: "M30 70 L90 70 L90 140 Q90 148 82 148 L38 148 Q30 148 30 140 Z", w: 2, dolgu: true },
      { d: daire(60, 70, 30, 6), w: 1.6, dolgu: true },
      { d: "M34 84 L86 84", w: 1 },
      { d: "M60 70 L60 56", w: 1.6 },
      { d: "M60 54 Q48 40 60 18 Q72 40 60 54 Z", w: 1.6, dolgu: true },
      { d: kutu(38, 100, 44, 24), w: 1.1 },
      { d: kutu(96, 128, 52, 10), w: 1.8, dolgu: true },
      { d: "M44 108 L76 108 M48 116 L72 116", w: 0.8 },
      { d: "M60 48 Q56 42 60 34", w: 1 },
      { d: "M106 120 Q112 108 104 96 M120 118 Q128 102 118 88", w: 0.9, kesik: true },
    ],
  },

  "gliserin-sabun": {
    cizgiler: [
      { d: "M22 104 L82 92 L104 106 L44 120 Z", w: 1.8, dolgu: true },
      { d: "M22 104 L22 124 L44 140 L104 126 L104 106 M44 120 L44 140", w: 1.8 },
      { d: "M36 64 L96 52 L118 66 L58 80 Z", w: 1.8, dolgu: true },
      { d: "M36 64 L36 84 L58 100 L118 86 L118 66 M58 80 L58 100", w: 1.8 },
      { d: "M60 64 Q66 58 72 62 M70 60 L74 56 M64 60 L62 56 M56 116 Q62 110 68 114 M66 112 L70 108", w: 1 },
      { d: daire(132, 40, 6) + daire(144, 26, 4) + daire(122, 22, 3) + daire(136, 60, 2.5), w: 1.1 },
      { d: "M70 90 L78 88 M86 118 L94 116", w: 0.8 },
    ],
    noktalar: [
      [66, 59, 1.4],
      [72, 57, 1.2],
      [62, 113, 1.4],
      [68, 111, 1.2],
    ],
  },

  "soguk-sabun": {
    taramalar: [
      { id: "g1", sinir: daire(110, 40, 13), kutu: [97, 27, 26, 26], aralik: 3, sonra: 6 },
      { id: "g2", sinir: daire(140, 40, 13), kutu: [127, 27, 26, 26], aralik: 3, sonra: 6 },
    ],
    cizgiler: [
      { d: "M14 100 L84 86 L120 104 L50 120 Z", w: 1.8, dolgu: true },
      { d: "M14 100 L14 122 L50 142 L120 126 L120 104 M50 120 L50 142", w: 1.8 },
      { d: "M38 95 L74 113 L74 135 M60 90 L96 108 L96 130", w: 1.3 },
      { d: "M100 98 L130 70 L136 74 L108 104", w: 1.6, dolgu: true },
      { d: "M130 70 L146 56 L150 60 L136 74", w: 2 },
      { d: "M24 106 q4 -2 8 0 M88 100 q4 -2 8 0", w: 0.8 },
      // koruyucu gözlük
      { d: daire(110, 40, 13) + daire(140, 40, 13), w: 1.8, dolgu: true },
      { d: "M123 40 Q125 36 127 40 M97 40 L88 36 M153 40 L158 36", w: 1.6 },
    ],
  },

  // ─── EPOKSİ ───
  "epoksi-altlik": {
    cizgiler: [
      { d: daire(56, 62, 38), w: 2, dolgu: true },
      {
        d: "M22 66 q8 -6 16 0 t16 0 t16 0 t16 0 M26 78 q6 -4 12 0 t12 0 t12 0 t12 0 t10 0 M34 50 q6 -4 12 0 t12 0 t12 0",
        w: 1,
      },
      { d: daire(104, 104, 38), w: 2, dolgu: true },
      {
        d: "M70 108 q8 -6 16 0 t16 0 t16 0 t16 0 M74 120 q6 -4 12 0 t12 0 t12 0 t12 0 M80 92 q6 -4 12 0 t12 0 t12 0 t8 0",
        w: 1,
      },
      { d: daire(104, 104, 32), w: 0.8 },
      { d: "M120 82 Q130 92 132 104", w: 0.9 },
    ],
  },

  "nehir-tahta": {
    taramalar: [
      {
        id: "n",
        sinir: "M60 20 Q72 40 64 60 Q56 82 70 104 Q80 124 72 140 L96 140 Q104 120 94 100 Q84 80 92 58 Q100 36 88 20 Z",
        kutu: [56, 20, 48, 120],
        aralik: 3.5,
      },
    ],
    cizgiler: [
      { d: "M24 20 L136 20 L136 140 L24 140 Z", w: 2 },
      { d: "M60 20 Q72 40 64 60 Q56 82 70 104 Q80 124 72 140", w: 1.6 },
      { d: "M88 20 Q100 36 92 58 Q84 80 94 100 Q104 120 96 140", w: 1.6 },
      { d: "M32 30 Q44 60 34 90 Q28 112 40 132 M44 26 Q54 50 48 70", w: 0.7 },
      { d: "M128 30 Q118 60 126 90 Q132 116 118 134 M114 30 Q108 50 112 70", w: 0.7 },
      { d: daire(76, 76, 2.5) + daire(84, 46, 2) + daire(82, 118, 2), w: 0.9 },
    ],
  },

  "epoksi-kolye": {
    cizgiler: [
      { d: "M30 6 Q40 50 80 52 Q120 50 130 6", w: 1.2, kesik: true },
      { d: daire(80, 56, 4), w: 1.5 },
      { d: "M80 62 Q112 96 112 116 Q112 146 80 146 Q48 146 48 116 Q48 96 80 62 Z", w: 2, dolgu: true },
      { d: "M80 128 L80 104", w: 1.2 },
      { d: daire(80, 98, 4), w: 1.2, dolgu: true },
      { d: "M80 98 m-10 0 q4 -8 10 -8 q6 0 10 8 q-4 8 -10 8 q-6 0 -10 -8", w: 1.3 },
      { d: "M80 118 Q70 112 66 116 Q72 122 80 118 Z M80 112 Q90 106 94 110 Q88 116 80 112 Z", w: 1.1, dolgu: true },
      { d: "M98 88 Q104 98 104 110", w: 0.8 },
    ],
  },

  // ─── MAKROME ───
  "makrome-aski": {
    taramalar: [{ id: "s", sinir: "M56 104 L104 104 L98 140 L62 140 Z", kutu: [56, 104, 48, 36], aralik: 4 }],
    cizgiler: [
      { d: daire(80, 12, 6), w: 1.6 },
      { d: kutu(76, 18, 8, 10), w: 1.4, dolgu: true },
      { d: "M78 28 L46 70 M80 28 L66 74 M80 28 L94 74 M82 28 L114 70", w: 1.2 },
      { d: daire(52, 62, 3.5) + daire(68, 64, 3.5) + daire(92, 64, 3.5) + daire(108, 62, 3.5), w: 1.2, dolgu: true },
      { d: "M46 70 L58 100 M66 74 L58 100 M94 74 L102 100 M114 70 L102 100", w: 1.2 },
      { d: daire(58, 100, 3.5) + daire(102, 100, 3.5), w: 1.2, dolgu: true },
      { d: "M56 104 L104 104 L98 140 L62 140 Z", w: 2, dolgu: true },
      { d: "M58 104 Q50 120 62 142 M102 104 Q110 120 98 142", w: 1.1 },
      { d: kutu(76, 142, 8, 8), w: 1.3, dolgu: true },
      { d: "M78 150 L74 158 M80 150 L80 158 M82 150 L86 158", w: 1 },
      { d: "M80 104 Q74 84 62 80 M80 104 Q84 82 96 76 M80 104 Q90 92 104 94", w: 1.3 },
      { d: "M62 80 q4 6 10 4 M96 76 q-2 8 -8 8 M104 94 q-6 4 -10 0", w: 1 },
    ],
  },

  "makrome-duvar": {
    cizgiler: [
      { d: "M20 24 L140 24", w: 4 },
      { d: "M20 24 Q80 4 140 24", w: 1 },
      {
        d: "M34 24 L34 60 M46 24 L46 70 M58 24 L58 80 M70 24 L70 88 M80 24 L80 92 M90 24 L90 88 M102 24 L102 80 M114 24 L114 70 M126 24 L126 60",
        w: 1.2,
      },
      { d: "M32 40 L128 40", w: 2 },
      {
        d:
          daire(52, 54, 4) +
          daire(80, 54, 4) +
          daire(108, 54, 4) +
          daire(66, 68, 4) +
          daire(94, 68, 4) +
          daire(80, 82, 4),
        w: 1.3,
        dolgu: true,
      },
      {
        d: "M34 60 L34 104 M46 70 L46 118 M58 80 L58 130 M70 88 L70 140 M80 92 L80 146 M90 88 L90 140 M102 80 L102 130 M114 70 L114 118 M126 60 L126 104",
        w: 0.8,
      },
      { d: "M34 104 L80 146 L126 104", w: 1, kesik: true },
    ],
  },

  amigurumi: {
    taramalar: [{ id: "b", sinir: daire(66, 112, 30), kutu: [36, 82, 60, 60], aralik: 5 }],
    cizgiler: [
      { d: daire(66, 112, 30), w: 2, dolgu: true },
      { d: daire(48, 34, 9) + daire(84, 34, 9), w: 1.8, dolgu: true },
      { d: daire(66, 58, 28), w: 2, dolgu: true },
      { d: daire(66, 68, 10, 7), w: 1.4, dolgu: true },
      { d: "M62 66 L70 66 L66 70 Z M66 70 L66 73 M62 74 Q66 77 70 74", w: 1.2 },
      { d: daire(42, 136, 9, 7) + daire(90, 136, 9, 7), w: 1.8, dolgu: true },
      { d: "M46 46 L50 42 M54 40 L58 38 M74 38 L78 40 M82 42 L86 46", w: 0.8 },
      // tığ
      { d: "M110 150 L150 60", w: 2.4 },
      { d: "M150 60 Q154 50 148 52", w: 1.6 },
      { d: "M118 138 L126 132 L132 118 L124 122 Z", w: 1.2, dolgu: true },
    ],
    noktalar: [
      [56, 54, 2.4],
      [76, 54, 2.4],
    ],
  },

  // ─── KİL ───
  "kil-kupe": {
    taramalar: [
      { id: "a", sinir: "M24 140 L24 104 Q24 76 50 76 Q76 76 76 104 L76 140 Z", kutu: [24, 76, 52, 64], aralik: 6 },
    ],
    cizgiler: [
      { d: "M50 14 Q38 14 40 28 L50 40", w: 1.4 },
      { d: daire(50, 44, 4) + daire(50, 64, 6), w: 1.4, dolgu: true },
      { d: "M50 48 L50 58", w: 1.2 },
      { d: "M24 140 L24 104 Q24 76 50 76 Q76 76 76 104 L76 140 Z", w: 2, dolgu: true },
      { d: "M30 120 Q44 100 60 116 Q68 124 72 112 M28 96 Q40 92 46 104", w: 1 },
      { d: "M112 14 Q100 14 102 28 L112 40", w: 1.4 },
      { d: daire(112, 44, 4), w: 1.4 },
      { d: daire(112, 76, 26), w: 2, dolgu: true },
      { d: daire(112, 76, 12), w: 1.2 },
      { d: "M112 50 L112 48", w: 1 },
      { d: daire(112, 128, 14), w: 1.8, dolgu: true },
      { d: "M112 102 L112 114", w: 1.2 },
      { d: "M96 70 Q104 64 112 72 Q120 80 128 72", w: 1 },
    ],
  },

  "taki-tabagi": {
    taramalar: [{ id: "t", sinir: "M18 86 Q20 128 80 130 Q140 128 142 86 Z", kutu: [18, 100, 124, 30], aralik: 4 }],
    cizgiler: [
      { d: "M18 86 Q20 128 80 130 Q140 128 142 86", w: 2, dolgu: true },
      { d: daire(80, 86, 62, 16), w: 2, dolgu: true },
      { d: daire(80, 86, 56, 12), w: 1.4 },
      { d: daire(64, 86, 12, 5) + daire(66, 86, 8, 3), w: 1.4 },
      { d: "M86 82 Q100 76 110 84 Q100 92 86 88", w: 1.2 },
      { d: daire(108, 80, 2.5), w: 1.2, dolgu: true },
      { d: "M40 40 Q60 30 70 46 Q60 56 46 52", w: 0.8, kesik: true },
    ],
    noktalar: [
      [88, 92, 1.4],
      [94, 94, 1.4],
      [100, 94, 1.4],
    ],
  },

  "kil-miknatis": {
    taramalar: [{ id: "p", sinir: "M84 40 L146 52 L104 132 Z", kutu: [84, 40, 62, 92], aralik: 4, sonra: 5 }],
    cizgiler: [
      { d: "M10 100 Q18 60 58 60 Q78 62 80 80 Q64 74 52 84 Q44 96 52 112 Q26 118 10 100 Z", w: 1.8, dolgu: true },
      { d: "M26 70 Q34 88 28 108 M42 62 Q48 78 42 96 M58 62 Q60 70 56 78", w: 1.2 },
      { d: "M16 96 L20 94 M34 78 L37 76", w: 0.9 },
      { d: "M80 34 L150 48 Q154 40 148 36 Q118 26 84 26 Q76 28 80 34 Z", w: 1.8, dolgu: true },
      { d: "M84 40 L146 52 L104 132 Z", w: 1.8, dolgu: true },
      { d: daire(110, 64, 7) + daire(122, 84, 6) + daire(106, 96, 5), w: 1.4, dolgu: true },
      { d: "M124 60 L128 62 M98 76 L102 80 M114 108 L118 106", w: 1.2 },
    ],
  },

  // ─── DERİ ───
  "deri-kartlik": {
    taramalar: [{ id: "c", sinir: "M30 76 L130 76 L130 130 L30 130 Z", kutu: [30, 76, 100, 54], aralik: 4, sonra: 2 }],
    cizgiler: [
      { d: "M30 50 L130 50 L130 130 L30 130 Z", w: 2, dolgu: true },
      { d: kutu(40, 26, 80, 48), w: 1.6, dolgu: true },
      { d: "M30 76 L130 76 L130 130 L30 130 Z", w: 1.8, dolgu: true },
      { d: "M48 34 L80 34 M48 42 L70 42", w: 1 },
      { d: daire(104, 42, 6), w: 1 },
      { d: "M36 56 L36 124 L124 124 L124 56", w: 1, kesik: true },
      { d: "M36 82 L124 82", w: 1, kesik: true },
      { d: "M60 96 Q80 104 100 96", w: 0.9 },
    ],
  },

  "deri-anahtarlik": {
    taramalar: [
      { id: "d", sinir: "M60 20 L84 20 L84 100 Q84 112 72 112 Q60 112 60 100 Z", kutu: [60, 20, 24, 92], aralik: 4 },
    ],
    cizgiler: [
      { d: "M60 20 L84 20 L84 100 Q84 112 72 112 Q60 112 60 100 Z", w: 2, dolgu: true },
      { d: daire(72, 30, 5), w: 1.6, dolgu: true },
      { d: "M68 62 L72 50 L76 62 M69 58 L75 58", w: 1.2 },
      { d: daire(72, 128, 16), w: 2 },
      { d: daire(72, 128, 12), w: 0.8 },
      { d: "M86 136 L130 150", w: 2 },
      { d: daire(132, 148, 10, 8), w: 1.8, dolgu: true },
      { d: "M100 140 L102 146 M108 143 L110 149 M116 146 L118 152", w: 1.2 },
      { d: daire(134, 148, 3), w: 1 },
    ],
  },

  "deri-kemer": {
    taramalar: [
      {
        id: "b",
        sinir:
          "M20 90 Q20 40 80 40 Q140 40 140 90 Q140 140 80 140 Q20 140 20 90 Z M44 90 Q44 64 80 64 Q116 64 116 90 Q116 116 80 116 Q44 116 44 90 Z",
        kutu: [20, 40, 120, 100],
        aralik: 5,
      },
    ],
    cizgiler: [
      { d: "M20 90 Q20 40 80 40 Q140 40 140 90 Q140 140 80 140 Q20 140 20 90", w: 2 },
      { d: "M44 90 Q44 64 80 64 Q116 64 116 90 Q116 116 80 116 Q50 116 46 100", w: 2, dolgu: true },
      { d: "M26 90 Q26 48 80 46 Q134 48 134 90 Q134 134 80 134 Q26 134 26 92", w: 0.8, kesik: true },
      { d: kutu(118, 76, 28, 28), w: 2.2 },
      { d: "M118 90 L144 90", w: 1.8 },
      { d: daire(52, 80, 2) + daire(56, 72, 2) + daire(62, 66, 2), w: 1 },
    ],
  },

  // ─── TAKI ───
  "dogal-tas-bileklik": {
    cizgiler: [
      { d: daire(80, 80, 48), w: 0.8 },
      { d: halka(80, 80, 48, 20, 7.5), w: 1.6, dolgu: true },
      { d: daire(80, 32, 4) + daire(80, 128, 4), w: 1.2, dolgu: true },
      { d: halka(78, 78, 48, 20, 3), w: 0.6 },
    ],
  },

  "tel-sarma-kolye": {
    taramalar: [
      { id: "k", sinir: "M64 64 L80 52 L96 64 L92 132 L80 146 L68 132 Z", kutu: [64, 52, 32, 94], aralik: 4, sonra: 2 },
    ],
    cizgiler: [
      { d: "M40 4 Q50 30 76 34 M120 4 Q110 30 84 34", w: 1.2, kesik: true },
      { d: daire(80, 40, 6), w: 1.8 },
      { d: "M64 64 L80 52 L96 64 L92 132 L80 146 L68 132 Z", w: 2, dolgu: true },
      { d: "M80 52 L80 146 M64 64 L68 132 M96 64 L92 132", w: 0.8 },
      { d: "M80 46 Q60 70 70 90 Q88 108 70 122 M80 46 Q100 70 90 90 Q72 108 90 122", w: 1.6 },
      { d: "M66 92 q4 -4 8 0 q4 4 8 0 q4 -4 8 0 M70 116 q4 -4 8 0 q4 4 8 0", w: 1.1 },
    ],
  },

  "boncuk-kupe": {
    taramalar: [
      {
        id: "a",
        sinir: "M50 86 Q68 110 68 124 Q68 144 50 144 Q32 144 32 124 Q32 110 50 86 Z",
        kutu: [32, 86, 36, 58],
        aralik: 3,
        sonra: 3,
      },
    ],
    cizgiler: [
      { d: "M50 14 Q36 14 38 30 L50 42", w: 1.4 },
      { d: daire(50, 46, 4), w: 1.4 },
      { d: daire(50, 58, 5) + daire(50, 74, 5), w: 1.4, dolgu: true },
      { d: "M50 86 Q68 110 68 124 Q68 144 50 144 Q32 144 32 124 Q32 110 50 86 Z", w: 2, dolgu: true },
      { d: "M110 14 Q96 14 98 30 L110 42", w: 1.4 },
      { d: daire(110, 46, 4), w: 1.4 },
      { d: daire(110, 58, 5) + daire(110, 74, 5), w: 1.4, dolgu: true },
      { d: "M110 86 Q128 110 128 124 Q128 144 110 144 Q92 144 92 124 Q92 110 110 86 Z", w: 2, dolgu: true },
      { d: "M120 106 Q126 116 124 128", w: 0.9 },
    ],
  },

  // ─── PİROGRAFİ & RESİM ───
  "pirografi-pano": {
    taramalar: [
      { id: "y", sinir: "M70 60 Q96 64 100 96 Q76 100 70 60 Z", kutu: [70, 60, 30, 40], aralik: 2.2, sonra: 3 },
    ],
    cizgiler: [
      { d: daire(72, 84, 60, 56), w: 2.2, dolgu: true },
      { d: daire(72, 84, 54, 50), w: 1 },
      { d: daire(72, 84, 40, 36) + daire(72, 84, 22, 20), w: 0.5, kesik: true },
      { d: "M70 60 Q96 64 100 96 Q76 100 70 60 Z M44 64 Q40 92 66 104 Q70 80 44 64 Z", w: 1.6 },
      { d: "M70 60 L96 94 M44 64 L64 102 M64 104 Q70 120 68 132", w: 1 },
      // yakma kalemi
      { d: "M118 150 L150 104", w: 4 },
      { d: "M150 104 L156 96", w: 1.6 },
      { d: "M116 152 L108 160", w: 1.4 },
    ],
  },

  "tas-boyama": {
    taramalar: [{ id: "t", sinir: daire(70, 84, 52, 42), kutu: [18, 42, 104, 84], aralik: 6 }],
    cizgiler: [
      { d: daire(70, 84, 52, 42), w: 2.2, dolgu: true },
      { d: daire(70, 84, 8), w: 1.4, dolgu: true },
      {
        d: halka(70, 84, 16, 10, 3) + halka(70, 84, 26, 16, 3.5) + halka(70, 84, 36, 20, 2.5, 30),
        w: 1.2,
        dolgu: true,
      },
      { d: daire(128, 128, 24, 18), w: 2, dolgu: true },
      { d: halka(128, 128, 10, 8, 2.4) + daire(128, 128, 4), w: 1.1, dolgu: true },
      { d: "M120 20 L150 50", w: 2.4 },
      { d: daire(118, 18, 3), w: 1.4, dolgu: true },
    ],
  },

  "akiskan-resim": {
    cizgiler: [
      { d: kutu(24, 40, 100, 80), w: 2, dolgu: true },
      {
        d: "M24 70 Q50 50 70 74 Q90 98 124 76 M24 96 Q46 84 62 100 Q80 116 106 104 Q116 100 124 108 M50 40 Q60 58 84 52 Q104 46 112 40",
        w: 1.4,
      },
      {
        d:
          daire(46, 78, 5) +
          daire(58, 86, 3) +
          daire(88, 82, 6) +
          daire(100, 90, 3.5) +
          daire(78, 58, 4) +
          daire(40, 104, 3.5),
        w: 1,
      },
      { d: "M30 120 L34 136 L46 136 L50 120 M98 120 L102 136 L114 136 L118 120", w: 1.4 },
      { d: "M120 20 L150 12 L156 40 L130 46 Z", w: 1.8, dolgu: true },
      { d: "M128 44 Q124 56 116 62", w: 1.6 },
      { d: "M130 22 Q140 28 148 22", w: 0.9 },
    ],
  },
};
