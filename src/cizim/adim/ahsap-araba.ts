// Ahşap Araba: adım adım karakalem sahneler (viewBox 0 0 240 150)
// Ölçek: 1 cm ≈ 6,5 birim. Blok 18×8 cm → 117×52; gövde 4 cm → 26; kabin arkadan 5 cm içeride, 7 cm uzun.
import { Cizim, daire, kutu, zikzak } from "../arac";

// Yan profil (kesilmiş araba, köşeleri yuvarlatılmış): arka sol, ön sağ
const PROFIL_YUMUSAK =
  "M64 118 Q60 118 60 114 L60 96 Q60 92 64 92 L92 92 L98 69 Q99 66 102 66 L127 66 Q130 66 131 69 L137 92 L173 92 Q177 92 177 96 L177 114 Q177 118 173 118 Z";
const SABLON = "M60 92 L92 92 L98 66 L131 66 L137 92 L177 92";
const ZEMIN = { d: "M8 134 Q120 130 232 135", w: 1 };
const LIF = [
  { d: "M64 74 Q100 71 130 75 T174 73", w: 0.6 },
  { d: "M64 104 Q96 101 124 105 T174 103", w: 0.6 },
];
// Aks noktaları: alttan 1,5 cm, uçlardan 3,5 cm
const AKS: [number, number][] = [
  [83, 108],
  [154, 108],
];
const isaret = (x: number, y: number) => `M${x - 4} ${y - 4} L${x + 4} ${y + 4} M${x + 4} ${y - 4} L${x - 4} ${y + 4}`;

export const AHSAP_ARABA_ADIM: Cizim[] = [
  // 1) Bloğu kontrol et ve şablonu çiz
  {
    taramalar: [{ id: "a1y", sinir: "M177 66 L191 56 L191 108 L177 118 Z", kutu: [177, 56, 14, 62], aralik: 4 }],
    cizgiler: [
      ZEMIN,
      { d: kutu(60, 66, 117, 52), w: 2, dolgu: true },
      { d: "M60 66 L74 56 L191 56 L177 66", w: 1.6 },
      { d: "M177 66 L191 56 L191 108 L177 118", w: 1.6 },
      ...LIF,
      { d: SABLON, w: 1.2, kesik: true },
      // kurşun kalem
      { d: "M150 30 L196 8 L200 15 L154 37 Z", w: 1.4, dolgu: true },
      { d: "M150 30 L140 38 L154 37", w: 1.2 },
      { d: "M190 11 L194 18", w: 1 },
    ],
    noktalar: [[141, 38, 1.2]],
  },

  // 2) Aks yerlerini işaretle
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(60, 66, 117, 52), w: 2, dolgu: true },
      { d: SABLON, w: 1.2, kesik: true },
      ...AKS.map(([x, y]) => ({ d: isaret(x, y), w: 1.8 })),
      // ölçü çizgileri: uçtan 3,5 cm ve alttan 1,5 cm
      { d: "M60 126 L83 126 M60 123 L60 129 M83 123 L83 129", w: 0.9 },
      { d: "M48 118 L48 108 M45 118 L51 118 M45 108 L51 108", w: 0.9 },
      { d: "M48 108 L78 108", w: 0.6, kesik: true },
      // gönye
      { d: "M196 40 L196 126 L226 126 L226 118 L204 118 L204 40 Z", w: 1.6, dolgu: true },
      { d: "M196 52 L200 52 M196 64 L200 64 M196 76 L200 76 M196 88 L200 88 M196 100 L200 100", w: 0.8 },
    ],
  },

  // 3) Kabin dışındaki kısmı kes
  {
    taramalar: [{ id: "a3m", sinir: kutu(46, 118, 145, 12), kutu: [46, 118, 145, 12], aralik: 4 }],
    cizgiler: [
      ZEMIN,
      // mengene
      { d: kutu(46, 118, 145, 12), w: 1.6 },
      { d: kutu(48, 84, 10, 34), w: 1.6, dolgu: true },
      { d: kutu(179, 84, 10, 34), w: 1.6, dolgu: true },
      // blok: arka kısım kesildi, ön kısım kesiliyor
      { d: "M58 118 L58 92 L92 92 L98 66 L131 66 L137 76", w: 2 },
      { d: "M58 118 L179 118", w: 2 },
      { d: "M137 92 L179 92", w: 1.2, kesik: true },
      { d: "M137 66 L137 92", w: 1.2, kesik: true },
      { d: "M131 66 L179 66 L179 92", w: 1.2, kesik: true },
      // testere
      { d: "M112 34 L198 72 L193 82 L107 44 Z", w: 1.6, dolgu: true },
      { d: zikzak(107, 44, 193, 82, 16, 2.5), w: 1 },
      { d: "M198 66 L222 76 L215 96 L191 86 Z", w: 1.8, dolgu: true },
      { d: daire(208, 80, 3), w: 1 },
      // hareket okları
      { d: "M84 26 L112 14 M84 26 L91 27 M84 26 L88 20", w: 1 },
      { d: "M112 14 L105 13 M112 14 L108 20", w: 1 },
    ],
  },

  // 4) Aks deliklerini aç (üstten görünüş)
  {
    taramalar: [{ id: "a4b", sinir: kutu(60, 72, 117, 30), kutu: [60, 72, 117, 30], aralik: 6, ters: true }],
    cizgiler: [
      ZEMIN,
      { d: kutu(60, 72, 117, 30), w: 2 },
      // sol delik: iki yandan yarıya kadar delinip ortada buluştu
      { d: "M80 72 L80 102 M86 72 L86 102", w: 1.1, kesik: true },
      { d: "M72 64 Q66 70 70 78 M70 78 L67 73 M70 78 L74 75", w: 0.9 },
      { d: "M72 110 Q66 104 70 96 M70 96 L67 101 M70 96 L74 99", w: 0.9 },
      // sağ delik: matkap ucu yukarıdan iniyor
      { d: "M151 72 L151 86 M157 72 L157 86", w: 1.1, kesik: true },
      { d: "M151 70 L151 40 M157 70 L157 40 M151 70 L154 74 L157 70", w: 1.4 },
      { d: zikzak(151, 44, 151, 68, 6, 3), w: 0.8 },
      { d: kutu(146, 26, 16, 14), w: 1.6, dolgu: true },
      { d: "M146 30 L162 30 M146 34 L162 34", w: 0.8 },
      { d: "M162 20 L202 20 Q212 20 212 30 L212 34 Q212 42 202 42 L162 42 Z", w: 1.8, dolgu: true },
      { d: "M196 25 L196 37 M201 25 L201 37 M206 25 L206 37", w: 0.7 },
      { d: "M182 42 L176 74 Q176 78 180 78 L192 78 Q196 78 196 74 L198 42", w: 1.8, dolgu: true },
      { d: "M178 48 Q172 52 176 58", w: 1.2 },
      { d: "M154 106 L154 118 M150 114 L154 118 L158 114", w: 1 },
    ],
  },

  // 5) Zımparala
  {
    cizgiler: [
      ZEMIN,
      { d: PROFIL_YUMUSAK, w: 2, dolgu: true },
      LIF[1],
      ...AKS.map(([x, y]) => ({ d: daire(x, y, 3.5), w: 1.2 })),
      // zımpara takozu kabin üstünde
      { d: "M96 58 L136 50 L139 62 L99 70 Z", w: 1.8, dolgu: true },
      { d: "M99 70 L139 62", w: 3 },
      { d: "M104 62 L130 57 M106 66 L132 61", w: 0.6 },
      // ileri-geri ok
      { d: "M90 40 L146 30 M90 40 L96 36 M90 40 L95 44 M146 30 L140 27 M146 30 L142 35", w: 1 },
    ],
    noktalar: [
      [142, 72, 1],
      [146, 78, 0.8],
      [92, 76, 1],
      [88, 82, 0.8],
      [150, 84, 0.7],
      [85, 70, 0.7],
    ],
  },

  // 6) Boya (deliklerde kürdan)
  {
    taramalar: [{ id: "a6b", sinir: "M137 92 L177 92 L177 118 L137 118 Z", kutu: [137, 92, 40, 26], aralik: 3 }],
    cizgiler: [
      ZEMIN,
      { d: PROFIL_YUMUSAK, w: 2, dolgu: true },
      ...AKS.map(([x, y]) => ({ d: `M${x - 6} ${y + 12} L${x + 6} ${y - 12}`, w: 1.6 })),
      ...AKS.map(([x, y]) => ({ d: daire(x, y, 3), w: 1 })),
      // fırça
      { d: "M186 22 L214 4 L218 10 L190 28 Z", w: 1.4, dolgu: true },
      { d: "M180 28 L190 22 L196 31 L186 37 Z", w: 1.4, dolgu: true },
      { d: "M180 28 L166 44 Q170 50 178 48 L186 37", w: 1.4 },
      { d: "M170 46 L172 40 M174 47 L176 41", w: 0.7 },
    ],
  },

  // 7) Aksları kes
  {
    cizgiler: [
      ZEMIN,
      { d: "M24 82 L216 82 Q222 82 222 88 Q222 94 216 94 L24 94 Q18 94 18 88 Q18 82 24 82 Z", w: 1.8, dolgu: true },
      { d: "M30 86 L210 86", w: 0.5 },
      // kesim çizgileri
      { d: "M76 76 L76 100 M136 76 L136 100", w: 1.2, kesik: true },
      // ölçü: gövde eni + 2 tekerlek + 2 mm
      { d: "M18 64 L76 64 M18 60 L18 68 M76 60 L76 68", w: 0.9 },
      { d: "M76 64 L136 64 M136 60 L136 68", w: 0.9 },
      // küçük testere
      { d: "M136 100 L136 128 L148 128 L148 100", w: 1.4 },
      { d: zikzak(136, 100, 136, 128, 7, 2), w: 0.8 },
      { d: "M142 128 L142 140", w: 1.6 },
      // pahlanmış uçlar (büyüteç)
      { d: daire(190, 124, 14), w: 1.2 },
      { d: "M178 124 L196 124 L202 120 M196 124 L202 128", w: 1.4 },
      { d: "M200 136 L208 144", w: 2 },
    ],
  },

  // 8) Tekerlekleri tak (önden görünüş)
  {
    taramalar: [
      { id: "a8g", sinir: kutu(104, 60, 32, 46), kutu: [104, 60, 32, 46], aralik: 5 },
      { id: "a8t", sinir: kutu(78, 78, 12, 48), kutu: [78, 78, 12, 48], aralik: 3, ters: true },
    ],
    cizgiler: [
      ZEMIN,
      // gövde kesiti
      { d: kutu(104, 60, 32, 46), w: 2 },
      // aks
      { d: "M70 99 L186 99 M70 105 L186 105", w: 1.4 },
      // sol tekerlek takılı (arada kartvizit boşluğu)
      { d: kutu(78, 78, 12, 48), w: 1.8 },
      { d: "M95 80 L95 124", w: 1, kesik: true },
      // sağ tekerlek takılıyor
      { d: kutu(166, 78, 12, 48), w: 1.8, dolgu: true },
      { d: "M210 102 L184 102 M184 102 L190 97 M184 102 L190 107", w: 1.2 },
      // tutkal damlası
      { d: "M150 90 Q146 96 150 99 Q154 96 150 90 Z", w: 1.1, dolgu: true },
      { d: "M156 74 L148 86 M152 70 L162 76 L154 88 L144 82 Z", w: 1.2 },
    ],
  },
];
