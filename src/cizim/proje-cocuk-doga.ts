import { Cizim, daire, dalga, kutu, zikzak } from "./arac";

// Maket, RC, Terraryum, Kuş Evi, Bahçe projeleri (viewBox 0 0 160 160)
export const PROJE_COCUK_DOGA: Record<string, Cizim> = {
  // Maket parça çerçevesi + yan keski
  "plastik-maket": {
    taramalar: [
      { id: "a", sinir: "M40 44 L80 44 L74 60 L46 60 Z", kutu: [40, 44, 40, 16], aralik: 3, sonra: 2 },
      { id: "b", sinir: "M100 116 L112 104 L118 110 L106 122 Z", kutu: [98, 102, 22, 22], aralik: 2.5 },
    ],
    cizgiler: [
      { d: kutu(18, 30, 112, 86), w: 2 },
      { d: "M18 70 L130 70 M74 30 L74 116", w: 1.4 },
      { d: "M40 44 L80 44 L74 60 L46 60 Z", w: 1.6, dolgu: true },
      { d: "M30 44 L40 50 M80 50 L74 44", w: 1 },
      { d: daire(96, 48, 8) + daire(116, 48, 8), w: 1.6, dolgu: true },
      { d: daire(96, 48, 3) + daire(116, 48, 3), w: 0.9 },
      { d: "M88 48 L84 48 M124 48 L130 48 M96 40 L96 30", w: 1 },
      { d: "M30 84 Q50 78 66 86 L62 100 Q46 94 32 100 Z", w: 1.5, dolgu: true },
      { d: "M18 92 L30 92 M66 92 L74 92", w: 1 },
      { d: "M86 82 L96 82 L96 104 L86 104 Z M104 84 L114 84 L110 100 L106 100 Z", w: 1.4, dolgu: true },
      // yan keski
      { d: "M100 116 L112 104 L118 110 L106 122 Z", w: 1.6, dolgu: true },
      { d: "M112 104 L140 132 Q146 140 138 142 L118 122 M118 110 L146 128 Q154 134 148 140", w: 2 },
    ],
  },

  // Diorama tabanı: tepe, kaya, ağaç
  "diorama-zemin": {
    taramalar: [
      { id: "y1", sinir: "M14 104 L14 116 L80 140 L80 128 Z", kutu: [14, 104, 66, 36], aralik: 3.5 },
      { id: "y2", sinir: "M80 128 L80 140 L146 112 L146 100 Z", kutu: [80, 100, 66, 40], aralik: 3.5, ters: true },
      { id: "k", sinir: "M96 98 L104 82 L118 80 L126 94 L118 104 Z", kutu: [96, 80, 30, 24], aralik: 2.5, sonra: 3 },
    ],
    cizgiler: [
      { d: "M14 104 L80 84 L146 100 L80 128 Z", w: 2, dolgu: true },
      { d: "M14 104 L14 116 L80 140 L80 128 M80 140 L146 112 L146 100", w: 2 },
      { d: "M30 104 Q50 80 70 98 Q78 104 86 108", w: 1.4 },
      { d: "M96 98 L104 82 L118 80 L126 94 L118 104 Z", w: 1.6, dolgu: true },
      { d: "M44 110 Q60 116 76 112 Q92 108 110 114", w: 1, kesik: true },
      // ağaçlar
      { d: "M50 92 L50 72 M42 76 L50 52 L58 76 Z M44 66 L50 46 L56 66", w: 1.5, dolgu: true },
      { d: "M130 96 L130 80 M124 84 L130 64 L136 84 Z", w: 1.4, dolgu: true },
      { d: "M24 110 q4 -4 8 0 M64 118 q4 -4 8 0 M100 116 q4 -4 8 0", w: 0.9 },
    ],
  },

  // Minyatür oda köşesi
  "mini-oda": {
    taramalar: [
      { id: "s", sinir: "M18 46 L50 28 L50 104 L18 124 Z", kutu: [18, 28, 32, 96], aralik: 4 },
      { id: "p", sinir: kutu(96, 40, 30, 26), kutu: [96, 40, 30, 26], aralik: 5, ters: true, sonra: 2 },
    ],
    cizgiler: [
      { d: "M18 46 L50 28 L144 28 L144 104 L50 104 L18 124 Z", w: 2 },
      { d: "M50 28 L50 104 M18 124 L112 124 L144 104", w: 2 },
      { d: kutu(96, 40, 30, 26), w: 1.5, dolgu: true },
      { d: "M111 40 L111 66 M96 53 L126 53", w: 1 },
      { d: "M34 114 L128 114 M26 119 L120 119 M44 109 L136 109", w: 0.7 },
      // masa ve lamba
      { d: "M62 84 L104 84 L96 92 L54 92 Z", w: 1.5, dolgu: true },
      { d: "M56 92 L56 112 M94 92 L94 110 M100 86 L100 102", w: 1.4 },
      { d: "M76 84 L76 70 M70 70 L82 70 L79 62 L73 62 Z", w: 1.3, dolgu: true },
      // raf ve kitap
      { d: "M60 48 L88 48", w: 1.6 },
      { d: kutu(62, 38, 4, 10) + kutu(67, 36, 4, 12) + "M74 48 L78 38 L81 39 L77 48", w: 1, dolgu: true },
    ],
  },

  // Üstten araba + telefon
  "bluetooth-araba": {
    taramalar: [
      { id: "t1", sinir: kutu(20, 46, 12, 26), kutu: [20, 46, 12, 26], aralik: 2.5, sonra: 1 },
      { id: "t2", sinir: kutu(20, 98, 12, 26), kutu: [20, 98, 12, 26], aralik: 2.5, sonra: 2 },
    ],
    cizgiler: [
      { d: "M38 40 L86 40 Q96 40 96 50 L96 120 Q96 130 86 130 L38 130 Q32 130 32 124 L32 46 Q32 40 38 40 Z", w: 2, dolgu: true },
      { d: kutu(20, 46, 12, 26), w: 1.6, dolgu: true },
      { d: kutu(20, 98, 12, 26), w: 1.6, dolgu: true },
      { d: "M96 46 L108 46 L108 70 L96 70 M96 100 L108 100 L108 124 L96 124", w: 1.6 },
      { d: daire(64, 136, 5), w: 1.4, dolgu: true },
      { d: kutu(44, 56, 40, 30), w: 1.4, dolgu: true },
      { d: kutu(56, 66, 14, 10), w: 1, dolgu: true },
      { d: kutu(48, 98, 18, 10), w: 1.2, dolgu: true },
      { d: "M56 98 L56 86 M70 98 L72 86", w: 0.8 },
      { d: "M58 30 Q64 24 70 30 M54 24 Q64 14 74 24", w: 1.1 },
      // telefon
      { d: "M118 60 L144 60 Q148 60 148 64 L148 112 Q148 116 144 116 L118 116 Q114 116 114 112 L114 64 Q114 60 118 60 Z", w: 1.8, dolgu: true },
      { d: kutu(118, 66, 26, 40), w: 1 },
      { d: "M131 72 L131 80 M127 76 L131 72 L135 76 M131 100 L131 92 M127 96 L131 100 L135 96", w: 1.1 },
    ],
  },

  // Süzülen planör (üstten) + uçuş yolu
  "depron-planor": {
    taramalar: [
      { id: "k", sinir: "M18 72 L142 72 L136 84 L24 84 Z", kutu: [18, 72, 124, 12], aralik: 4, sonra: 1 },
    ],
    cizgiler: [
      { d: "M80 34 Q84 38 84 50 L82 136 L78 136 L76 50 Q76 38 80 34 Z", w: 1.8, dolgu: true },
      { d: "M18 72 L142 72 L136 84 L24 84 Z", w: 2, dolgu: true },
      { d: "M56 126 L104 126 L100 134 L60 134 Z", w: 1.6, dolgu: true },
      { d: "M80 40 L80 34", w: 1.2 },
      { d: "M30 78 L130 78", w: 0.6, kesik: true },
      { d: "M10 150 Q40 120 60 140 Q76 152 92 146", w: 0.9, kesik: true },
      { d: "M146 40 L156 36 M144 52 L156 50 M14 46 L4 42", w: 1 },
    ],
    noktalar: [[80, 54, 2]],
  },

  // Tiny whoop: 4 kanal + kart + pil
  "mini-drone": {
    taramalar: [
      { id: "p", sinir: kutu(68, 70, 24, 22), kutu: [68, 70, 24, 22], aralik: 2.5, sonra: 6 },
    ],
    cizgiler: [
      { d: daire(44, 44, 26) + daire(116, 44, 26) + daire(44, 116, 26) + daire(116, 116, 26), w: 2.2, dolgu: true },
      { d: daire(44, 44, 21) + daire(116, 44, 21) + daire(44, 116, 21) + daire(116, 116, 21), w: 0.8 },
      { d: daire(44, 44, 5) + daire(116, 44, 5) + daire(44, 116, 5) + daire(116, 116, 5), w: 1.6, dolgu: true },
      { d: "M28 34 L60 54 M100 54 L132 34 M28 126 L60 106 M100 106 L132 126", w: 1.6 },
      { d: "M62 62 L98 62 L98 98 L62 98 Z", w: 2, dolgu: true },
      { d: "M62 62 L66 66 M98 62 L94 66 M62 98 L66 94 M98 98 L94 94", w: 1 },
      { d: kutu(68, 70, 24, 22), w: 1.4, dolgu: true },
      { d: "M72 56 L88 56 L86 48 L74 48 Z", w: 1.4, dolgu: true },
      { d: "M80 98 L80 108 L74 116", w: 1.1 },
    ],
    noktalar: [[80, 52, 1.6]],
  },

  // Mantarlı şişede kapalı terraryum
  "kapali-terraryum": {
    taramalar: [
      { id: "m", sinir: kutu(64, 10, 32, 16), kutu: [64, 10, 32, 16], aralik: 2.5, sonra: 1 },
      { id: "c", sinir: "M34 120 L126 120 Q122 140 80 146 Q38 140 34 120 Z", kutu: [30, 120, 100, 28], aralik: 3.5 },
    ],
    cizgiler: [
      { d: "M66 26 L94 26 L94 46 Q130 60 130 100 Q130 140 80 146 Q30 140 30 100 Q30 60 66 46 Z", w: 2, dolgu: true },
      { d: kutu(64, 10, 32, 16), w: 1.8, dolgu: true },
      { d: "M32 110 Q56 104 80 110 T128 108", w: 1.3 },
      { d: "M34 120 L126 120", w: 1 },
      { d: "M64 108 Q56 84 68 64 M68 64 q-10 2 -10 10 M62 82 q-10 0 -12 -6 M62 96 q8 -2 10 -10", w: 1.3 },
      { d: "M92 108 Q96 88 106 78 M100 92 q8 -4 10 0 M96 100 q-8 -2 -10 -10", w: 1.3 },
      { d: "M44 108 q4 -8 10 -6 q4 -4 8 2 M106 108 q4 -6 10 -4 q4 -2 6 4", w: 1.2, dolgu: true },
      { d: "M112 64 L114 92", w: 0.8 },
    ],
    noktalar: [[50, 70, 1], [116, 76, 1.2], [56, 58, 0.9], [104, 60, 1], [84, 62, 0.8]],
  },

  // Kasede sukulent ve kaktüs
  "sukulent-terraryum": {
    taramalar: [
      { id: "k", sinir: "M14 92 Q14 146 80 146 Q146 146 146 92 Z", kutu: [14, 112, 132, 34], aralik: 3.5 },
      { id: "c", sinir: "M98 90 L98 52 Q104 42 110 52 L110 90 Z", kutu: [98, 42, 12, 48], aralik: 3, sonra: 3 },
    ],
    cizgiler: [
      { d: "M14 92 Q14 146 80 146 Q146 146 146 92 Z", w: 2, dolgu: true },
      { d: daire(80, 92, 66, 9), w: 1.6 },
      { d: "M22 104 Q80 114 138 104", w: 1 },
      { d: "M98 90 L98 52 Q104 42 110 52 L110 90 Z", w: 1.8, dolgu: true },
      { d: "M110 70 L118 70 L118 58 Q122 52 126 58 L126 76 L110 78", w: 1.6, dolgu: true },
      { d: "M96 60 L92 58 M112 62 L114 60 M96 76 L92 76 M124 64 L128 62", w: 0.9 },
      // ekeverya rozeti
      { d: "M56 96 Q44 88 40 78 Q52 80 58 90 Q56 74 64 66 Q70 78 66 92 Q76 80 88 80 Q84 92 70 98 Z", w: 1.6, dolgu: true },
      { d: "M60 92 L58 82 M66 92 L72 84", w: 0.8 },
      { d: daire(34, 98, 5, 3) + daire(126, 98, 6, 3), w: 1.2, dolgu: true },
    ],
  },

  // Asılı cam küre ve hava bitkisi
  "asili-terraryum": {
    taramalar: [
      { id: "k", sinir: daire(80, 92, 52), kutu: [28, 124, 104, 22], aralik: 3.5 },
    ],
    cizgiler: [
      { d: "M80 4 L80 34", w: 1.2 },
      { d: daire(80, 37, 4), w: 1.4 },
      { d: daire(80, 92, 52), w: 2, dolgu: true },
      { d: "M42 72 Q80 98 118 72 Q80 54 42 72 Z", w: 1.4 },
      { d: "M34 124 Q80 132 126 124", w: 1.1 },
      { d: "M80 122 Q60 110 50 92 M80 122 Q70 100 72 84 M80 122 Q86 100 98 88 M80 122 Q100 112 112 98 M80 122 Q62 118 54 110 M80 122 Q96 120 106 112", w: 1.4 },
      { d: "M110 60 Q118 70 118 82", w: 0.8 },
    ],
  },

  // Ağaca asılı kuş yuvası (3B)
  "kus-yuvasi": {
    taramalar: [
      { id: "y", sinir: "M96 66 L118 54 L118 122 L96 134 Z", kutu: [96, 54, 22, 80], aralik: 3.5 },
      { id: "d", sinir: daire(70, 88, 9), kutu: [61, 79, 18, 18], aralik: 2.2, sonra: 3 },
    ],
    cizgiler: [
      { d: "M44 66 L96 66 L96 134 L44 134 Z", w: 2, dolgu: true },
      { d: "M96 66 L118 54 L118 122 L96 134", w: 2 },
      { d: "M36 70 L70 40 L104 70 Z M70 40 L94 28 L126 56 L104 70", w: 1.8, dolgu: true },
      { d: daire(70, 88, 9), w: 1.8, dolgu: true },
      { d: daire(52, 74, 1.5) + daire(88, 74, 1.5), w: 0.9 },
      { d: "M44 104 L96 104 M44 120 L96 120", w: 0.7 },
      { d: "M134 10 L134 156 M152 10 L152 156", w: 1.4 },
      { d: "M138 30 Q140 40 138 50 M146 70 Q148 82 146 94 M140 110 Q142 122 140 134", w: 0.8 },
      { d: "M118 90 L134 90", w: 1.6 },
    ],
  },

  // Kaşıklı pet şişe yemlik ve kuş
  "kus-yemligi": {
    taramalar: [
      { id: "y", sinir: "M58 40 L102 40 L102 140 Q102 146 96 146 L64 146 Q58 146 58 140 Z", kutu: [58, 96, 44, 50], aralik: 3 },
    ],
    cizgiler: [
      { d: "M80 4 L80 18", w: 1.2 },
      { d: kutu(72, 18, 16, 8), w: 1.6, dolgu: true },
      { d: "M72 26 Q60 32 58 40 L58 140 Q58 146 64 146 L96 146 Q102 146 102 140 L102 40 Q100 32 88 26", w: 2 },
      { d: "M58 96 L102 96", w: 1 },
      { d: "M30 122 L130 104", w: 2 },
      { d: daire(132, 103, 7, 4), w: 1.6, dolgu: true },
      { d: "M40 70 L120 84", w: 2 },
      { d: daire(36, 69, 7, 4), w: 1.6, dolgu: true },
      // kuş kaşık ucunda
      { d: "M124 90 Q126 78 138 78 Q150 80 148 90 Q140 98 128 96 Z", w: 1.7, dolgu: true },
      { d: "M148 84 L156 86 L148 88", w: 1.2 },
      { d: "M126 92 L116 96 L122 88", w: 1.2, dolgu: true },
      { d: "M134 96 L132 102 M140 96 L140 102", w: 1 },
    ],
    noktalar: [[142, 84, 1.4], [130, 106, 1], [134, 104, 1]],
  },

  // Sisal ipli tırmalama direği
  "kedi-tirmalama": {
    taramalar: [
      { id: "t", sinir: "M20 128 L20 136 L80 152 L80 144 Z M80 144 L80 152 L140 136 L140 128 Z", kutu: [20, 128, 120, 24], aralik: 3 },
    ],
    cizgiler: [
      { d: "M20 128 L80 112 L140 128 L80 144 Z", w: 2, dolgu: true },
      { d: "M20 128 L20 136 L80 152 L140 136 L140 128 M80 144 L80 152", w: 2 },
      { d: "M66 128 L66 28 Q80 22 94 28 L94 128 Q80 134 66 128 Z", w: 2, dolgu: true },
      { d: "M66 36 Q80 40 94 36 M66 46 Q80 50 94 46 M66 56 Q80 60 94 56 M66 66 Q80 70 94 66 M66 76 Q80 80 94 76 M66 86 Q80 90 94 86 M66 96 Q80 100 94 96 M66 106 Q80 110 94 106 M66 116 Q80 120 94 116", w: 0.9 },
      { d: "M94 34 Q118 40 118 70", w: 1 },
      { d: daire(118, 76, 6), w: 1.5, dolgu: true },
      { d: daire(32, 104, 3) + daire(26, 98, 1.6) + daire(31, 95, 1.6) + daire(37, 97, 1.6), w: 1 },
      { d: daire(124, 112, 3) + daire(118, 106, 1.6) + daire(123, 103, 1.6) + daire(129, 105, 1.6), w: 1 },
    ],
  },

  // Kratky kutusu: marul, kökler, su
  "kratky-marul": {
    taramalar: [
      { id: "s", sinir: "M24 100 L136 100 L130 146 L30 146 Z", kutu: [24, 100, 112, 46], aralik: 4 },
    ],
    cizgiler: [
      { d: "M20 70 L140 70 L130 146 L30 146 Z", w: 2, dolgu: true },
      { d: kutu(16, 62, 128, 8), w: 1.8, dolgu: true },
      { d: "M24 100 q7 -3 14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0", w: 1 },
      { d: "M44 70 L48 84 L60 84 L64 70 M96 70 L100 84 L112 84 L116 70", w: 1.4 },
      { d: "M52 84 Q50 100 46 116 M56 84 Q58 104 54 124 M104 84 Q102 100 100 118 M108 84 Q112 104 110 122", w: 0.9 },
      { d: "M54 62 Q36 56 34 40 Q46 40 52 50 Q46 30 56 22 Q64 32 60 50 Q68 34 80 36 Q76 54 54 62 Z", w: 1.5, dolgu: true },
      { d: "M106 62 Q88 56 86 40 Q98 40 104 50 Q98 30 108 22 Q116 32 112 50 Q120 34 132 36 Q128 54 106 62 Z", w: 1.5, dolgu: true },
      { d: "M54 60 L50 44 M58 58 L64 44 M106 60 L102 44 M110 58 L116 44", w: 0.8 },
    ],
  },

  // Musluk, zamanlayıcı, hat ve damlayan saksılar
  "damla-sulama": {
    taramalar: [
      { id: "z", sinir: kutu(10, 60, 18, 22), kutu: [10, 60, 18, 22], aralik: 2.5, sonra: 1 },
    ],
    cizgiler: [
      { d: "M6 40 L26 40 L26 48 L16 48 L16 60", w: 2 },
      { d: kutu(10, 60, 18, 22), w: 1.6, dolgu: true },
      { d: "M19 82 L19 140 L154 140", w: 2.4 },
      { d: "M30 140 L30 62 Q30 56 38 58 L46 64 M78 140 L78 62 Q78 56 86 58 L94 64 M123 140 L123 66 Q123 60 130 62 L138 68", w: 1 },
      { d: "M36 68 L40 98 L68 98 L72 68 Z M84 68 L88 98 L116 98 L120 68 Z M128 72 L131 98 L153 98 L156 72 Z", w: 1.7, dolgu: true },
      { d: "M54 68 Q50 50 58 38 M58 50 q-8 -4 -10 -12 M102 68 Q104 46 112 36 M106 52 q8 -4 10 -10 M142 72 Q140 58 146 48", w: 1.3 },
      { d: "M47 66 Q44 72 47 74 Q50 72 47 66 Z M95 66 Q92 72 95 74 Q98 72 95 66 Z M139 70 Q136 76 139 78 Q142 76 139 70 Z", w: 1 },
    ],
    noktalar: [[19, 70, 1.6]],
  },

  // Kesitli solucan kompost kutusu
  "solucan-kompost": {
    taramalar: [
      { id: "t", sinir: kutu(26, 60, 108, 56), kutu: [26, 60, 108, 56], aralik: 6 },
      { id: "s", sinir: kutu(22, 124, 116, 22), kutu: [22, 124, 116, 22], aralik: 3, ters: true },
    ],
    cizgiler: [
      { d: kutu(22, 52, 116, 68), w: 2 },
      { d: kutu(18, 44, 124, 8), w: 1.8, dolgu: true },
      { d: kutu(22, 120, 116, 28), w: 2 },
      { d: "M26 60 Q50 54 80 60 T134 58", w: 1.2 },
      { d: "M40 80 q6 -6 12 0 t12 0 M84 96 q6 -6 12 0 t10 2 M100 72 q6 4 12 -2 M44 104 q4 6 12 2", w: 1.6 },
      { d: daire(34, 120, 1.5) + daire(54, 120, 1.5) + daire(74, 120, 1.5) + daire(94, 120, 1.5) + daire(114, 120, 1.5), w: 0.9 },
      // elma koçanı ve muz kabuğu
      { d: "M56 40 Q50 30 56 22 Q62 26 62 22 Q70 30 64 40 Q60 44 56 40 Z M60 22 L60 16", w: 1.4, dolgu: true },
      { d: "M86 42 Q96 22 112 26 Q102 30 98 42 M98 42 Q106 36 118 40", w: 1.4 },
    ],
  },
};
