import { Cizim, daire, kutu } from "./arac";

// 15 yeni kategori çizimi (viewBox 0 0 160 160)
export const KATEGORI_EK: Record<string, Cizim> = {
  // Standında uçak maketi
  maket: {
    taramalar: [{ id: "w", sinir: "M70 74 L104 74 L92 112 L78 112 Z", kutu: [70, 74, 34, 38], aralik: 3, sonra: 1 }],
    cizgiler: [
      { d: "M24 72 Q30 62 60 62 L128 63 Q146 65 148 71 Q146 78 128 79 L60 80 Q30 81 24 72 Z", w: 2, dolgu: true },
      { d: "M70 74 L104 74 L92 112 L78 112 Z", w: 1.8, dolgu: true },
      { d: "M30 68 L22 42 L36 44 L48 64", w: 1.8, dolgu: true },
      { d: "M30 76 L16 88 L32 88 L44 78", w: 1.6, dolgu: true },
      { d: "M114 63 Q124 50 138 64", w: 1.5, dolgu: true },
      { d: "M150 54 L150 88", w: 2 },
      { d: daire(149, 71, 3), w: 1.3, dolgu: true },
      { d: "M60 70 L120 70 M66 76 L96 76", w: 0.8 },
      { d: "M84 112 L84 132", w: 1.8 },
      { d: daire(84, 136, 28, 5), w: 1.6, dolgu: true },
    ],
  },

  // Dört pervaneli drone (üstten)
  rc: {
    taramalar: [
      {
        id: "g",
        sinir: "M68 64 L92 64 Q96 64 96 68 L96 92 Q96 96 92 96 L68 96 Q64 96 64 92 L64 68 Q64 64 68 64 Z",
        kutu: [64, 64, 32, 32],
        aralik: 3,
        sonra: 5,
      },
    ],
    cizgiler: [
      { d: daire(40, 40, 22) + daire(120, 40, 22) + daire(40, 120, 22) + daire(120, 120, 22), w: 1, kesik: true },
      { d: "M80 80 L40 40 M80 80 L120 40 M80 80 L40 120 M80 80 L120 120", w: 4 },
      { d: "M80 80 L40 40 M80 80 L120 40 M80 80 L40 120 M80 80 L120 120", w: 1.2 },
      { d: daire(40, 40, 7) + daire(120, 40, 7) + daire(40, 120, 7) + daire(120, 120, 7), w: 1.8, dolgu: true },
      { d: "M24 34 L56 46 M104 46 L136 34 M24 126 L56 114 M104 114 L136 126", w: 1.6 },
      {
        d: "M68 64 L92 64 Q96 64 96 68 L96 92 Q96 96 92 96 L68 96 Q64 96 64 92 L64 68 Q64 64 68 64 Z",
        w: 2,
        dolgu: true,
      },
      { d: daire(80, 60, 4), w: 1.4, dolgu: true },
    ],
  },

  // Kapaklı kavanozda terraryum
  terraryum: {
    taramalar: [
      { id: "l", sinir: kutu(48, 30, 64, 10), kutu: [48, 30, 64, 10], aralik: 3, sonra: 1 },
      {
        id: "d",
        sinir: "M38 132 L122 132 L122 138 Q122 146 114 146 L46 146 Q38 146 38 138 Z",
        kutu: [38, 132, 84, 14],
        aralik: 3,
      },
    ],
    cizgiler: [
      {
        d: "M50 40 L110 40 L110 48 Q124 56 124 72 L124 136 Q124 146 114 146 L46 146 Q36 146 36 136 L36 72 Q36 56 50 48 Z",
        w: 2,
        dolgu: true,
      },
      { d: kutu(48, 30, 64, 10), w: 1.8, dolgu: true },
      { d: "M37 122 Q60 116 80 120 T123 118", w: 1.3 },
      { d: "M37 132 L123 132", w: 1 },
      { d: "M58 120 Q50 96 60 76 M60 76 q-8 4 -8 12 M56 92 q-8 0 -10 -6 M57 104 q8 -2 10 -10", w: 1.3 },
      { d: "M96 120 Q100 92 112 80 M104 96 q8 -6 10 -2 M100 108 q-8 -4 -10 -12", w: 1.3 },
      { d: "M70 120 q4 -8 10 -6 q6 -4 10 2 q6 0 6 4", w: 1.2, dolgu: true },
      { d: "M84 112 L84 104 M78 104 Q84 96 90 104 Z", w: 1.2, dolgu: true },
      { d: "M116 60 L116 100", w: 0.8 },
    ],
    noktalar: [
      [50, 126, 1.2],
      [66, 127, 1],
      [96, 126, 1.2],
      [108, 127, 1],
    ],
  },

  // Kuş evi ve tepesinde kuş
  "kus-evi": {
    taramalar: [{ id: "h", sinir: daire(80, 88, 9), kutu: [71, 79, 18, 18], aralik: 2.2, sonra: 2 }],
    cizgiler: [
      { d: "M52 68 L80 46 L108 68 L108 130 L52 130 Z", w: 2, dolgu: true },
      { d: "M42 74 L80 40 L118 74", w: 3 },
      { d: daire(80, 88, 9), w: 1.8, dolgu: true },
      { d: "M52 100 L108 100 M52 115 L108 115", w: 0.8 },
      { d: "M76 130 L76 156 M84 130 L84 156", w: 1.8 },
      // kuş
      { d: "M106 46 Q112 34 126 36 Q138 40 136 50 Q128 58 114 56 Z", w: 1.8, dolgu: true },
      { d: "M136 44 L146 46 L136 48", w: 1.4 },
      { d: "M110 50 L96 56 L104 46", w: 1.4, dolgu: true },
      { d: "M116 44 Q122 50 130 46", w: 1 },
      { d: "M118 56 L116 62 M126 56 L126 62", w: 1.2 },
    ],
    noktalar: [[130, 42, 1.6]],
  },

  // Fideli saksı ve bahçe küreği
  bahce: {
    taramalar: [
      { id: "s", sinir: "M48 98 L56 146 L104 146 L112 98 Z", kutu: [48, 124, 64, 22], aralik: 4 },
      {
        id: "k",
        sinir: "M126 102 Q140 98 146 112 Q146 128 132 136 Q122 124 126 102 Z",
        kutu: [122, 98, 26, 40],
        aralik: 3,
        sonra: 8,
      },
    ],
    cizgiler: [
      { d: "M48 98 L56 146 L104 146 L112 98 Z", w: 2, dolgu: true },
      { d: kutu(44, 88, 72, 10), w: 1.8, dolgu: true },
      { d: "M52 100 q7 -3 14 0 t14 0 t14 0 t14 0", w: 0.9 },
      { d: "M80 98 Q78 70 82 46", w: 1.8 },
      { d: "M82 60 Q62 48 54 58 Q64 72 82 60 Z", w: 1.6, dolgu: true },
      { d: "M81 50 Q100 30 112 40 Q104 58 81 50 Z", w: 1.6, dolgu: true },
      { d: "M64 58 L80 60 M86 48 L104 42", w: 0.8 },
      { d: "M130 106 L116 66", w: 3 },
      { d: "M126 102 Q140 98 146 112 Q146 128 132 136 Q122 124 126 102 Z", w: 1.8, dolgu: true },
      { d: "M24 70 L24 78 M30 62 L30 70 M18 60 L18 66", w: 1.2 },
    ],
  },

  // Kavanoz mum ve sabun
  "mum-sabun": {
    taramalar: [
      {
        id: "m",
        sinir: "M34 90 L82 90 L82 140 Q82 146 76 146 L40 146 Q34 146 34 140 Z",
        kutu: [34, 112, 48, 34],
        aralik: 3.5,
      },
      {
        id: "s",
        sinir: "M92 120 L138 112 L146 124 L100 132 Z",
        kutu: [92, 112, 54, 20],
        aralik: 3,
        ters: true,
        sonra: 6,
      },
    ],
    cizgiler: [
      { d: "M34 82 L82 82 L82 140 Q82 146 76 146 L40 146 Q34 146 34 140 Z", w: 2, dolgu: true },
      { d: daire(58, 82, 24, 5), w: 1.6, dolgu: true },
      { d: "M58 82 L58 70", w: 1.6 },
      { d: "M58 68 Q48 56 58 38 Q68 56 58 68 Z", w: 1.6, dolgu: true },
      { d: "M58 64 Q54 58 58 50 Q62 58 58 64", w: 1 },
      { d: kutu(42, 100, 32, 14), w: 1 },
      { d: "M92 120 L138 112 L146 124 L100 132 Z", w: 1.8, dolgu: true },
      { d: "M92 120 L92 134 L100 146 L146 138 L146 124 M100 132 L100 146", w: 1.8 },
      { d: daire(118, 96, 4) + daire(130, 86, 3) + daire(112, 82, 2.5), w: 1 },
      { d: "M44 32 L40 24 M72 32 L76 24 M58 26 L58 18", w: 1.2 },
    ],
  },

  // Bardaktan kalıba reçine dökümü
  epoksi: {
    taramalar: [{ id: "b", sinir: "M70 28 L112 20 L118 54 L82 64 Z", kutu: [70, 20, 48, 44], aralik: 3, sonra: 0 }],
    cizgiler: [
      { d: "M70 28 L112 20 L118 54 L82 64 Z", w: 2, dolgu: true },
      { d: "M72 34 Q66 40 70 46", w: 1.4 },
      { d: "M70 46 Q66 70 70 100", w: 2 },
      { d: daire(76, 116, 56, 16), w: 2, dolgu: true },
      { d: daire(76, 116, 46, 12), w: 1 },
      { d: "M36 116 q8 -6 16 0 t16 0 t16 0 t16 0 M44 124 q6 -4 12 0 t12 0 t12 0 t12 0", w: 1 },
      { d: daire(70, 104, 6, 2), w: 1.2 },
    ],
  },

  // Çubukta makrome duvar süsü
  makrome: {
    cizgiler: [
      { d: "M14 30 L146 30", w: 4 },
      { d: daire(14, 30, 4) + daire(146, 30, 4), w: 1.4, dolgu: true },
      {
        d: "M30 30 L30 70 M42 30 L42 80 M54 30 L54 90 M66 30 L66 100 M78 30 L78 104 M90 30 L90 100 M102 30 L102 90 M114 30 L114 80 M126 30 L126 70",
        w: 1.3,
      },
      {
        d: daire(36, 46, 5) + daire(60, 46, 5) + daire(84, 46, 5) + daire(108, 46, 5) + daire(120, 46, 5),
        w: 1.4,
        dolgu: true,
      },
      { d: daire(48, 66, 5) + daire(72, 66, 5) + daire(96, 66, 5) + daire(112, 64, 4), w: 1.4, dolgu: true },
      { d: daire(60, 86, 5) + daire(84, 86, 5), w: 1.4, dolgu: true },
      { d: daire(72, 104, 5), w: 1.4, dolgu: true },
      {
        d: "M30 70 L30 108 M42 80 L42 120 M54 90 L54 132 M66 100 L66 144 M78 104 L78 150 M90 100 L90 144 M102 90 L102 132 M114 80 L114 120 M126 70 L126 108",
        w: 0.8,
      },
      { d: "M30 14 L80 4 L130 14", w: 1 },
    ],
  },

  // Desenli vazo ve merdane
  kil: {
    taramalar: [
      {
        id: "v",
        sinir: "M60 30 L100 30 L96 44 Q126 64 120 104 Q114 140 80 144 Q46 140 40 104 Q34 64 64 44 Z",
        kutu: [34, 108, 92, 36],
        aralik: 3.5,
      },
    ],
    cizgiler: [
      { d: "M60 30 L100 30 L96 44 Q126 64 120 104 Q114 140 80 144 Q46 140 40 104 Q34 64 64 44 Z", w: 2, dolgu: true },
      { d: daire(80, 30, 20, 4), w: 1.4 },
      { d: "M44 80 Q80 90 116 80 M40 104 Q80 114 120 104", w: 1.2 },
      { d: "M56 92 L62 86 L68 92 L74 86 L80 92 L86 86 L92 92 L98 86 L104 92", w: 1 },
      { d: "M100 52 Q108 64 110 76", w: 0.8 },
      { d: "M8 150 L60 136", w: 1.6 },
      { d: "M14 146 L56 134 L58 142 L16 154 Z", w: 1.6, dolgu: true },
    ],
  },

  // Dikişli deri cüzdan ve iğne
  deri: {
    taramalar: [
      {
        id: "c",
        sinir: "M30 50 L130 50 Q138 50 138 58 L138 74 L30 74 Z",
        kutu: [30, 50, 108, 24],
        aralik: 3.5,
        sonra: 1,
      },
    ],
    cizgiler: [
      {
        d: "M30 50 L130 50 Q138 50 138 58 L138 122 Q138 130 130 130 L30 130 Q22 130 22 122 L22 58 Q22 50 30 50 Z",
        w: 2,
        dolgu: true,
      },
      { d: "M30 50 L130 50 Q138 50 138 58 L138 74 L30 74 Z", w: 1.6, dolgu: true },
      { d: "M28 56 L28 124 L132 124 L132 56", w: 1, kesik: true },
      { d: "M80 80 L80 120", w: 0.8, kesik: true },
      { d: "M100 74 Q106 86 100 92 L112 92", w: 1.2 },
      { d: "M110 14 L150 40", w: 1.6 },
      { d: daire(147, 38, 1.5), w: 0.8 },
      { d: "M148 39 Q156 60 140 66 Q126 70 132 54", w: 1 },
    ],
  },

  // Kolye ve yüzük
  taki: {
    taramalar: [
      { id: "t", sinir: "M80 100 L94 116 L80 140 L66 116 Z", kutu: [64, 100, 32, 40], aralik: 2.5, sonra: 2 },
    ],
    cizgiler: [
      { d: "M24 20 Q30 90 80 96 Q130 90 136 20", w: 1.4, kesik: true },
      { d: daire(80, 98, 3), w: 1.4 },
      { d: "M80 100 L94 116 L80 140 L66 116 Z", w: 1.8, dolgu: true },
      { d: "M66 116 L94 116 M80 100 L74 116 L80 140 L86 116 Z", w: 1 },
      { d: daire(124, 128, 16, 7), w: 2 },
      { d: daire(124, 128, 12, 5), w: 1 },
      { d: "M118 122 L124 110 L130 122 Z", w: 1.6, dolgu: true },
      { d: "M124 104 L124 98 M112 110 L108 106 M136 110 L140 106", w: 1 },
    ],
  },

  // Palet ve fırça
  pirografi: {
    cizgiler: [
      {
        d: "M30 60 Q40 26 86 26 Q136 28 138 70 Q140 100 112 104 Q96 104 98 118 Q100 136 76 136 Q30 134 24 100 Q22 80 30 60 Z",
        w: 2,
        dolgu: true,
      },
      { d: daire(56, 112, 9), w: 1.6 },
      {
        d: daire(56, 56, 8) + daire(84, 46, 8) + daire(112, 56, 8) + daire(118, 82, 7) + daire(44, 84, 8),
        w: 1.4,
        dolgu: true,
      },
      { d: "M100 150 L148 92", w: 3 },
      { d: "M144 96 L152 86 Q158 80 154 92 L148 100 Z", w: 1.4, dolgu: true },
      { d: "M108 140 L116 132", w: 1 },
    ],
    noktalar: [
      [56, 56, 2],
      [112, 56, 2],
      [118, 82, 2],
      [84, 46, 2],
      [44, 84, 2],
    ],
  },

  // 3D yazıcı: çerçeve, tabla, baskı, makara
  baski3d: {
    taramalar: [
      { id: "v", sinir: "M70 116 L90 116 L94 92 Q80 86 66 92 Z", kutu: [64, 86, 32, 30], aralik: 2.5, sonra: 5 },
      { id: "t", sinir: kutu(30, 116, 100, 8), kutu: [30, 116, 100, 8], aralik: 3, sonra: 3 },
    ],
    cizgiler: [
      { d: "M24 140 L24 30 L136 30 L136 140 M16 140 L144 140", w: 2.2 },
      { d: "M24 62 L136 62", w: 2 },
      { d: "M70 54 L90 54 L90 74 L84 74 L80 82 L76 74 L70 74 Z", w: 1.8, dolgu: true },
      { d: kutu(30, 116, 100, 8), w: 1.8, dolgu: true },
      { d: "M40 124 L40 140 M120 124 L120 140", w: 1.6 },
      { d: "M70 116 L90 116 L94 92 Q80 86 66 92 Z", w: 1.6, dolgu: true },
      { d: daire(80, 16, 12, 6), w: 1.6, dolgu: true },
      { d: daire(80, 16, 4, 2), w: 1 },
      { d: "M92 18 Q110 30 84 54", w: 1, kesik: true },
    ],
  },

  // Bisiklet (yandan)
  bisiklet: {
    cizgiler: [
      { d: daire(38, 108, 28) + daire(122, 108, 28), w: 2.2 },
      { d: daire(38, 108, 22) + daire(122, 108, 22), w: 0.8 },
      { d: daire(38, 108, 3) + daire(122, 108, 3), w: 1.4, dolgu: true },
      { d: "M38 108 L64 66 L110 66 L80 108 Z M80 108 L64 66 M110 66 L122 108", w: 2 },
      { d: "M64 66 L60 54 M50 52 L72 52", w: 2.2 },
      { d: "M110 66 L108 50 L120 46 Q128 46 126 54", w: 2 },
      { d: daire(80, 108, 9), w: 1.6, dolgu: true },
      { d: "M80 108 L88 120 L94 120 M80 108 L72 96 L66 96", w: 1.4 },
      { d: "M80 117 L38 112 M80 99 L38 104", w: 0.8, kesik: true },
    ],
  },

  // Alet çantası, çekiç ve anahtar
  "ev-tamir": {
    taramalar: [{ id: "c", sinir: kutu(20, 86, 120, 54), kutu: [20, 86, 120, 54], aralik: 5, sonra: 4 }],
    cizgiler: [
      { d: "M50 30 L58 30 L58 92 L50 92 Z", w: 1.8, dolgu: true },
      { d: "M34 20 L74 20 L74 32 L34 32 Z M74 22 L84 18 M74 30 L84 34", w: 1.8, dolgu: true },
      { d: "M98 92 L108 40", w: 3.4 },
      { d: "M100 44 Q96 28 104 22 L106 30 L114 32 L116 24 Q124 32 114 44 Z", w: 1.8, dolgu: true },
      { d: kutu(20, 86, 120, 54), w: 2.2, dolgu: true },
      { d: "M20 100 L140 100", w: 1.6 },
      { d: "M60 86 L60 76 Q60 70 66 70 L94 70 Q100 70 100 76 L100 86", w: 2 },
      { d: kutu(72, 96, 16, 8), w: 1.4, dolgu: true },
    ],
  },
};
