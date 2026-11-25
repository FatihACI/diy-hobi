// Altın 40 / El Sanatları: adım sahneleri (viewBox 0 0 240 150).
// Adım sayısı ve sırası src/data/altin.ts içeriğiyle birebir eşleşir.
import { Cizgi, Cizim, daire, kutu, yuvarla as r } from "../arac";
import {
  alev,
  altlik,
  bez,
  bicak,
  cimbiz,
  carpi,
  cetvel,
  damla,
  damlalik,
  dekupaj,
  firca,
  gonye,
  kalem,
  kalip,
  kase,
  kavanoz,
  makas,
  matkap,
  ok,
  onay,
  parmak,
  saat,
  sis,
  sprey,
  suYuzu,
  tahta,
  tencere,
  termometre,
  testere,
  vida,
  yagSisesi,
  yayOk,
  ZEMIN,
  zimpara,
} from "./parca";

// ---------- Masif kesme tahtası ----------
const TAHTA_FORM =
  "M62 40 L178 40 Q190 40 190 52 L190 108 Q190 120 178 120 L62 120 Q50 120 50 108 L50 52 Q50 40 62 40 Z";
export const KESME_TAHTASI_ADIM: Cizim[] = [
  // 1) Tahtayı seç ve formu çiz
  {
    cizgiler: [
      ...tahta(44, 34, 152, 92),
      { d: TAHTA_FORM, w: 1.2, kesik: true },
      { d: daire(62, 52, 12) + " " + daire(62, 52, 9), w: 1.2 },
      ...kalem(178, 120),
    ],
  },
  // 2) Kes (işkenceyle sabitle, dekupajla dıştan kes)
  {
    cizgiler: [
      ...tahta(44, 34, 152, 92),
      { d: TAHTA_FORM, w: 1.2, kesik: true },
      { d: kutu(30, 56, 26, 48), w: 1.8, dolgu: true },
      { d: "M43 56 L43 44 M36 44 L50 44", w: 1.8 },
      ...dekupaj(190, 84, 36),
      { d: "M178 120 Q190 120 190 108", w: 2 },
    ],
  },
  // 3) Kenarları yuvarlat (kesit)
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(20, 106, 200, 8), w: 1.4, dolgu: true },
      { d: "M40 86 L162 86 Q172 86 172 96 Q172 106 162 106 L40 106 Z", w: 2, dolgu: true },
      { d: "M162 86 L172 86 L172 106", w: 0.8, kesik: true },
      { d: "M170 64 L194 88 L186 96 L162 72 Z", w: 1.6, dolgu: true },
      yayOk(166, 96, 22, -1.9, -0.5),
    ],
  },
  // 4) Kademeli zımparala (80 → 240)
  {
    cizgiler: [
      ...tahta(24, 64, 140, 56),
      ...zimpara(74, 78),
      ok(64, 128, 150, 128),
      ok(150, 128, 64, 128),
      {
        d:
          kutu(184, 14, 32, 20) +
          " " +
          kutu(184, 44, 32, 20) +
          " " +
          kutu(184, 74, 32, 20) +
          " " +
          kutu(184, 104, 32, 20),
        w: 1.3,
        dolgu: true,
      },
      ok(200, 35, 200, 43, 0.9),
      ok(200, 65, 200, 73, 0.9),
      ok(200, 95, 200, 103, 0.9),
    ],
    noktalar: [
      [192, 21, 1.6],
      [204, 27, 1.6],
      [208, 19, 1.6],
      [190, 50, 1.1],
      [198, 56, 1.1],
      [206, 50, 1.1],
      [210, 58, 1.1],
      [190, 80, 0.8],
      [196, 86, 0.8],
      [202, 79, 0.8],
      [208, 87, 0.8],
      [212, 81, 0.8],
      [189, 110, 0.5],
      [194, 116, 0.5],
      [199, 109, 0.5],
      [204, 117, 0.5],
      [209, 110, 0.5],
      [213, 116, 0.5],
    ],
  },
  // 5) Lifleri kaldır (nemli bez → kuru → hafif zımpara)
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(24, 100, 192, 18), w: 1.8, dolgu: true },
      { d: "M60 100 L58 94 M72 100 L74 95 M88 100 L86 94 M104 100 L106 95 M120 100 L118 94 M136 100 L138 95", w: 0.8 },
      ...bez(92, 78),
      damla(84, 52, 0.8),
      damla(100, 46, 0.8),
      ...saat(176, 50, 11),
      ok(150, 80, 196, 96, 0.9),
    ],
  },
  // 6) Gıdaya uygun yağla
  {
    cizgiler: [
      ...tahta(24, 80, 160, 46),
      ...yagSisesi(210, 74),
      { d: "M206 36 Q190 40 180 70", w: 0.9, kesik: true },
      ...bez(70, 70),
      ok(40, 56, 104, 56),
      { d: daire(132, 100, 4) + " " + daire(146, 108, 3.4) + " " + daire(124, 112, 3), w: 1.1 },
      onay(150, 54, 1.1),
    ],
  },
];

// ---------- Ahşap saklama kutusu ----------
// Üstten çerçeve: dış 120×80 (1 cm ≈ 4 birim), kalınlık 7
const UZUN = kutu(60, 30, 120, 7) + " " + kutu(60, 103, 120, 7);
const KISA = kutu(60, 37, 7, 66) + " " + kutu(173, 37, 7, 66);
export const AHSAP_KUTU_ADIM: Cizim[] = [
  // 1) Ölç ve kes
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(14, 96, 212, 16), w: 1.8, dolgu: true },
      { d: "M24 104 Q80 101 130 104 T216 103", w: 0.5 },
      { d: "M120 90 L120 118", w: 1.1, kesik: true },
      ...gonye(121, 96, 30),
      ...testere(20, 60, 70),
      ok(56, 66, 100, 90),
    ],
  },
  // 2) Kuru dene ve işaretle
  {
    cizgiler: [
      { d: UZUN, w: 1.8, dolgu: true },
      { d: KISA, w: 1.8, dolgu: true },
      { d: "M60 20 L180 20 M60 16 L60 24 M180 16 L180 24", w: 0.9 },
      { d: "M192 30 L192 110 M188 30 L196 30 M188 110 L196 110", w: 0.9 },
      { d: "M70 44 L74 40 M166 44 L170 40 M166 48 L170 44", w: 1.2 },
      { d: "M70 96 L74 92 M70 100 L74 96 M166 96 L170 92 M166 100 L170 96 M166 92 L170 88", w: 1.2 },
    ],
  },
  // 3) Vida yerlerine ön delik aç
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 84, 170, 36), w: 1.8, dolgu: true },
      { d: "M40 96 Q100 93 150 96 T194 95", w: 0.5 },
      { d: daire(190, 94, 2.2) + " " + daire(190, 110, 2.2), w: 1.2 },
      { d: "M186 110 L190 114 L194 110", w: 0.9 },
      ...matkap(190, 80),
      { d: "M190 126 L200 126 M190 123 L190 129 M200 123 L200 129", w: 0.8 },
    ],
  },
  // 4) Tutkalla, sık ve vidala (köşegen kontrolü)
  {
    cizgiler: [
      { d: UZUN, w: 1.8, dolgu: true },
      { d: KISA, w: 1.8, dolgu: true },
      { d: "M67 37 L173 103 M173 37 L67 103", w: 0.8, kesik: true },
      { d: "M112 64 L116 67 M114 62 L118 65 M124 62 L128 65 M126 60 L130 63", w: 0.9 },
      { d: "M48 124 L192 124", w: 2.4 },
      { d: kutu(44, 104, 8, 24) + " " + kutu(188, 104, 8, 24), w: 1.6, dolgu: true },
      vida(63, 33, 2),
      vida(176, 33, 2),
      vida(63, 107, 2),
      vida(176, 107, 2),
    ],
  },
  // 5) Tabanı tak (ters çevrilmiş kutu, çivi + tutkal)
  {
    cizgiler: [
      { d: kutu(54, 34, 132, 86), w: 2, dolgu: true },
      { d: kutu(60, 40, 120, 74), w: 0.7, kesik: true },
      { d: "M180 44 L216 92", w: 3.2 },
      { d: "M168 36 L188 24 L196 38 L176 50 Z", w: 1.6, dolgu: true },
    ],
    noktalar: [
      [66, 46, 1.4],
      [90, 46, 1.4],
      [114, 46, 1.4],
      [138, 46, 1.4],
      [162, 46, 1.4],
      [66, 108, 1.4],
      [90, 108, 1.4],
      [114, 108, 1.4],
      [138, 108, 1.4],
      [174, 108, 1.4],
      [66, 77, 1.4],
      [174, 77, 1.4],
    ],
  },
  // 6) Zımparala ve bitir
  {
    cizgiler: [
      ZEMIN,
      { d: "M50 70 Q50 66 54 66 L166 66 Q170 66 170 70 L170 124 L50 124 Z", w: 2, dolgu: true },
      { d: "M50 70 L72 50 L192 50 L170 70", w: 1.6 },
      { d: "M170 70 L192 50 L192 104 L170 124", w: 1.6 },
      { d: "M60 64 L78 54 L184 54", w: 0.8 },
      ...firca(120, 96),
      { d: "M70 90 Q90 86 110 92", w: 0.9, kesik: true },
    ],
  },
];

// ---------- Kavanozda soya mumu ----------
const FITIL = (x: number, y1: number, y2: number) => [
  { d: `M${x} ${y1} L${x} ${y2}`, w: 1.1 },
  { d: kutu(x - 5, y2 - 2, 10, 4), w: 1.1, dolgu: true },
];
export const SOYA_MUM_ADIM: Cizim[] = [
  // 1) Kavanozu hazırla (yıka, kurula)
  {
    cizgiler: [
      ZEMIN,
      ...kavanoz(96, 132, 72, 88, false),
      ...bez(180, 108),
      ok(160, 92, 134, 92),
      damla(70, 32, 0.8),
      damla(118, 26, 0.8),
    ],
  },
  // 2) Fitili sabitle (ortada, iki çubukla dik)
  {
    cizgiler: [
      ZEMIN,
      ...kavanoz(120, 132, 76, 88, false),
      ...FITIL(120, 40, 130),
      { d: "M62 46 L178 46 M62 52 L178 52", w: 2 },
      ok(150, 96, 126, 126, 0.9),
    ],
  },
  // 3) Benmari ile erit (≤85 °C)
  {
    cizgiler: [
      { d: "M40 132 L180 132", w: 2.2 },
      ...tencere(110, 78, 112, 46),
      suYuzu(58, 160, 94),
      ...tencere(110, 60, 62, 52),
      { d: "M84 92 Q110 88 136 92", w: 1 },
      ...termometre(124, 30, 52),
      alev(82, 132, 0.6),
      alev(110, 132, 0.6),
      alev(138, 132, 0.6),
    ],
  },
  // 4) Kokuyu ekle (80 °C, 2 dk karıştır)
  {
    cizgiler: [
      ZEMIN,
      ...tencere(100, 70, 86, 56),
      { d: "M62 84 Q100 80 138 84", w: 1 },
      ...yagSisesi(176, 66, 18, 40),
      damla(146, 46, 0.8),
      damla(138, 60, 0.8),
      yayOk(100, 104, 14, 0.4, 2.8),
      ...saat(210, 34, 10),
    ],
  },
  // 5) 55–60 °C'de dök
  {
    cizgiler: [
      ZEMIN,
      { d: "M56 30 L118 50 L108 82 L46 62 Z", w: 1.8, dolgu: true },
      { d: "M50 46 L30 40", w: 2.2 },
      { d: "M118 52 Q134 54 140 78", w: 1.2 },
      ...kavanoz(148, 132, 66, 74, false),
      { d: "M120 110 Q148 106 176 110", w: 1 },
      ...termometre(206, 40, 52),
    ],
  },
  // 6) 24 saat soğut (cereyansız, buzdolabı yok)
  {
    cizgiler: [
      ZEMIN,
      ...kavanoz(110, 132, 76, 88, false),
      { d: "M74 72 Q110 70 146 72", w: 1.2 },
      ...FITIL(110, 58, 130),
      ...saat(40, 54, 13),
      { d: kutu(186, 46, 34, 60), w: 1.6, dolgu: true },
      { d: "M186 70 L220 70 M214 54 L214 64", w: 1 },
      carpi(203, 76, 22),
    ],
  },
  // 7) Fitili 5 mm'ye kes ve dinlendir
  {
    cizgiler: [
      { d: "M60 40 L60 134 M180 40 L180 134", w: 1.8 },
      { d: "M60 92 Q120 89 180 92", w: 1.3 },
      { d: "M120 91 L120 48", w: 1.1 },
      ...makas(121, 84),
      { d: "M104 84 L104 91 M100 84 L108 84 M100 91 L108 91", w: 0.8 },
      ...saat(30, 40, 10),
    ],
  },
  // 8) İlk yakış: yüzey kenara kadar erisin
  {
    taramalar: [
      { id: "m8", sinir: "M82 70 Q120 74 158 70 L158 80 Q120 84 82 80 Z", kutu: [82, 68, 76, 16], aralik: 3 },
    ],
    cizgiler: [
      ZEMIN,
      ...kavanoz(120, 132, 80, 88, false),
      { d: "M82 70 Q120 74 158 70", w: 1.2 },
      { d: "M120 70 L120 58", w: 1.1 },
      alev(120, 58, 1.2),
      ok(108, 92, 84, 92),
      ok(132, 92, 156, 92),
      ...saat(206, 34, 10),
    ],
  },
];

// ---------- Eritip dökme gliserin sabun ----------
const TEPSI = { d: "M26 108 L214 108 L208 116 L32 116 Z", w: 1.6, dolgu: true };
export const GLISERIN_SABUN_ADIM: Cizim[] = [
  // 1) Kalıbı hazırla
  {
    cizgiler: [ZEMIN, TEPSI, ...kalip(36, 86, 3, 32, 16), ...sprey(170, 108), ...damlalik(204, 108)],
  },
  // 2) Kes ve kısa aralıklarla erit
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(14, 112, 92, 10), w: 1.6, dolgu: true },
      { d: kutu(24, 98, 14, 14) + " " + kutu(42, 98, 14, 14) + " " + kutu(33, 84, 14, 14), w: 1.4, dolgu: true },
      ...bicak(64, 110),
      { d: kutu(122, 54, 98, 66), w: 1.8, dolgu: true },
      { d: kutu(130, 62, 62, 50), w: 1.2 },
      { d: daire(206, 74, 3.5) + " " + daire(206, 92, 3.5), w: 1.1 },
      kase(161, 92, 38, 16),
      ...saat(172, 32, 10),
    ],
  },
  // 3) Renk ve koku ekle
  {
    cizgiler: [
      ZEMIN,
      kase(110, 76, 104, 52),
      { d: "M64 88 Q110 84 156 88", w: 1 },
      { d: kutu(106, 14, 14, 22), w: 1.4, dolgu: true },
      { d: "M108 36 L113 46 L118 36", w: 1.2, dolgu: true },
      damla(113, 52, 0.8),
      yayOk(110, 104, 14, 0.4, 2.8),
      ...damlalik(196, 120),
    ],
  },
  // 4) Kalıba dök, alkol sık
  {
    cizgiler: [
      ZEMIN,
      ...kalip(56, 104, 3, 30, 14),
      { d: "M20 46 Q20 70 44 72 Q66 70 72 56 Z", w: 1.8, dolgu: true },
      { d: "M72 58 Q78 64 76 102", w: 1.2 },
      ...sprey(198, 104),
      ...sis(196, 54, 46),
    ],
  },
  // 5) Süsle ya da ikinci katı ~50 °C'de dök
  {
    taramalar: [{ id: "g5", sinir: "M78 94 L79 112 L173 112 L174 94 Z", kutu: [76, 92, 100, 22], aralik: 4 }],
    cizgiler: [
      ZEMIN,
      ...kalip(70, 72, 1, 104, 40),
      { d: "M78 94 L174 94", w: 1.2 },
      { d: "M77 82 L175 82", w: 1 },
      { d: "M100 82 L96 70 M124 82 L126 70 M148 82 L144 70", w: 0.9 },
      ok(126, 26, 126, 60),
      ...termometre(206, 40, 52),
    ],
    noktalar: [
      [97, 73, 1.4],
      [98, 77, 1.4],
      [125, 72, 1.4],
      [126, 76, 1.4],
      [145, 73, 1.4],
      [146, 77, 1.4],
    ],
  },
  // 6) Donmasını bekle (1–2 saat)
  {
    cizgiler: [ZEMIN, ...kalip(40, 104, 3, 34, 16), ...parmak(63, 104), ...saat(150, 50, 15), onay(190, 52, 1.2)],
  },
  // 7) Kalıptan çıkar ve streç filmle sar
  {
    cizgiler: [
      ZEMIN,
      ...kalip(20, 104, 1, 64, 20),
      { d: kutu(30, 66, 60, 26), w: 1.8, dolgu: true },
      ok(60, 100, 60, 96),
      ok(104, 100, 132, 100),
      { d: kutu(146, 84, 64, 34), w: 1.8, dolgu: true },
      { d: "M140 78 L216 78 L216 124 L140 124 Z M140 78 L156 92 M216 78 L200 92", w: 0.9, kesik: true },
    ],
  },
];

// ---------- Ortak küçük parçalar (reçine, makrome) ----------
// Damla kolye ucu (üstten): merkez (cx,cy), yarıçap R
const damlaUc = (cx: number, cy: number, R: number): Cizgi => ({
  d: `M${cx} ${r(cy - R * 1.5)} Q${r(cx + R * 1.1)} ${r(cy - R * 0.4)} ${cx + R} ${r(cy + R * 0.2)} A${R} ${R} 0 0 1 ${cx - R} ${r(cy + R * 0.2)} Q${r(cx - R * 1.1)} ${r(cy - R * 0.4)} ${cx} ${r(cy - R * 1.5)} Z`,
  w: 1.8,
  dolgu: true,
});
// Preslenmiş çiçek (üstten): merkez (x,y)
const cicek = (x: number, y: number, s = 1): Cizgi[] => [
  {
    d: [0, 72, 144, 216, 288]
      .map((a) => {
        const t = (a * Math.PI) / 180;
        return daire(r(x + Math.cos(t) * 6 * s), r(y + Math.sin(t) * 6 * s), r(4.5 * s));
      })
      .join(" "),
    w: 1,
    dolgu: true,
  },
  { d: daire(x, y, r(2.6 * s)), w: 1.1, dolgu: true },
];
// UV lamba (kubbe) + aşağı ışınlar: alt orta (cx,y)
const uvLamba = (cx: number, y: number): Cizgi[] => [
  { d: `M${cx - 40} ${y} Q${cx} ${y - 44} ${cx + 40} ${y} Z`, w: 1.8, dolgu: true },
  {
    d: `M${cx - 24} ${y + 4} L${cx - 30} ${y + 24} M${cx} ${y + 4} L${cx} ${y + 26} M${cx + 24} ${y + 4} L${cx + 30} ${y + 24}`,
    w: 0.9,
    kesik: true,
  },
];
// Eldiven: bilek alt orta (x,y)
const eldiven = (x: number, y: number): Cizgi => ({
  d: `M${x - 12} ${y} L${x - 14} ${y - 22} L${x - 20} ${y - 34} L${x - 15} ${y - 37} L${x - 9} ${y - 28} L${x - 9} ${y - 50} L${x - 4} ${y - 50} L${x - 3} ${y - 32} L${x - 2} ${y - 54} L${x + 3} ${y - 54} L${x + 4} ${y - 32} L${x + 6} ${y - 51} L${x + 11} ${y - 50} L${x + 10} ${y - 30} L${x + 14} ${y - 44} L${x + 18} ${y - 42} L${x + 14} ${y - 20} L${x + 12} ${y} Z`,
  w: 1.4,
  dolgu: true,
});
// Ölçü kabı: alt orta (cx,y)
const olcuKabi = (cx: number, y: number, en = 28, boy = 36, dolu = 0.6): Cizgi[] => [
  {
    d: `M${cx - en / 2} ${y - boy} L${cx - en / 2 + 3} ${y} L${cx + en / 2 - 3} ${y} L${cx + en / 2} ${y - boy}`,
    w: 1.6,
    dolgu: true,
  },
  { d: `M${cx - en / 2 + 2} ${r(y - boy * dolu)} L${cx + en / 2 - 2} ${r(y - boy * dolu)}`, w: 1 },
  {
    d: `M${cx + en / 2 - 8} ${y - boy * 0.25} L${cx + en / 2 - 2} ${y - boy * 0.25} M${cx + en / 2 - 8} ${y - boy * 0.5} L${cx + en / 2 - 2} ${y - boy * 0.5} M${cx + en / 2 - 8} ${y - boy * 0.75} L${cx + en / 2 - 2} ${y - boy * 0.75}`,
    w: 0.6,
  },
];
// Isı tabancası: ağız (x,y), gövde sağa
const isiTabancasi = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y - 6, 18, 12), w: 1.5, dolgu: true },
  { d: `M${x + 18} ${y - 10} L${x + 54} ${y - 10} L${x + 54} ${y + 10} L${x + 18} ${y + 10} Z`, w: 1.7, dolgu: true },
  { d: `M${x + 38} ${y + 10} L${x + 34} ${y + 34} L${x + 46} ${y + 34} L${x + 50} ${y + 10}`, w: 1.6, dolgu: true },
];
// Kare düğüm zinciri (dikey): üst orta (x,y), n düğüm
const dugumZinciri = (x: number, y: number, n: number, ara = 9): Cizgi => {
  let d = "";
  for (let i = 0; i < n; i++) {
    const yy = y + i * ara;
    d += `M${x - 5} ${yy + 4} Q${x} ${yy - 1} ${x + 5} ${yy + 4} Q${x} ${yy + 9} ${x - 5} ${yy + 4} Z `;
  }
  return { d: d.trim(), w: 1.2, dolgu: true };
};
// Dikey ip demeti: x listesi, y1 → y2
const ipler = (xs: number[], y1: number, y2: number, w = 0.9): Cizgi => ({
  d: xs.map((x) => `M${x} ${y1} L${x} ${y2}`).join(" "),
  w,
});
// Sarma düğüm (ipleri toplayan sargı): orta (x,y)
const sarma = (x: number, y: number, en = 14, boy = 14): Cizgi[] => [
  { d: kutu(x - en / 2, y - boy / 2, en, boy), w: 1.6, dolgu: true },
  {
    d: `M${x - en / 2} ${y - 3} L${x + en / 2} ${y - 3} M${x - en / 2} ${y + 1} L${x + en / 2} ${y + 1} M${x - en / 2} ${y + 5} L${x + en / 2} ${y + 5}`,
    w: 0.6,
  },
];

// ---------- Kuru çiçekli reçine kolye ucu ----------
const KOLYE_KALIP = "M70 96 L70 120 L170 120 L170 96 L156 96 Q154 116 120 116 Q86 116 84 96 Z";
const KOLYE_IC = "M84 96 Q86 116 120 116 Q154 116 156 96";
export const EPOKSI_KOLYE_ADIM: Cizim[] = [
  // 1) Hazırlan (naylon, eldiven, havalandırma, kuru çiçek)
  {
    cizgiler: [
      { d: "M14 118 L226 118 L220 128 L20 128 Z", w: 1.2, kesik: true },
      eldiven(50, 116),
      ...cicek(120, 96, 1.4),
      { d: kutu(170, 22, 46, 40), w: 1.6, dolgu: true },
      { d: "M193 22 L193 62 M170 42 L216 42", w: 1 },
      ok(150, 50, 168, 44),
    ],
  },
  // 2) İnce ilk katı dök ve kürle
  {
    taramalar: [{ id: "k2", sinir: "M90 108 Q100 116 120 116 Q140 116 150 108 Z", kutu: [88, 106, 64, 12], aralik: 3 }],
    cizgiler: [
      ZEMIN,
      { d: KOLYE_KALIP, w: 1.8, dolgu: true },
      { d: "M90 108 L150 108", w: 1 },
      ...uvLamba(120, 62),
      ...saat(204, 34, 10),
    ],
  },
  // 3) Çiçeği yüzü aşağı yerleştir
  {
    taramalar: [{ id: "k3", sinir: "M90 108 Q100 116 120 116 Q140 116 150 108 Z", kutu: [88, 106, 64, 12], aralik: 3 }],
    cizgiler: [
      ZEMIN,
      { d: KOLYE_KALIP, w: 1.8, dolgu: true },
      { d: "M90 108 L150 108", w: 1 },
      { d: "M100 106 Q120 101 140 106 Q120 109 100 106 Z", w: 1.2, dolgu: true },
      ...cimbiz(122, 102),
      damla(110, 84, 0.8),
    ],
  },
  // 4) Kalıbı doldur, kabarcıkları al
  {
    taramalar: [{ id: "k4", sinir: "M84 96 Q86 116 120 116 Q154 116 156 96 Z", kutu: [84, 94, 72, 24], aralik: 5 }],
    cizgiler: [
      ZEMIN,
      { d: KOLYE_KALIP, w: 1.8, dolgu: true },
      { d: "M84 96 L156 96", w: 1.1 },
      { d: "M100 106 Q120 101 140 106 Q120 109 100 106 Z", w: 1.2, dolgu: true },
      { d: "M138 94 L176 40", w: 1.6 },
      { d: daire(112, 92, 1.8) + " " + daire(126, 91, 1.4) + " " + daire(134, 93, 1.2), w: 0.9 },
    ],
  },
  // 5) Kürle ve kalıptan çıkar
  {
    cizgiler: [
      ZEMIN,
      { d: KOLYE_KALIP, w: 1.8, dolgu: true },
      { d: KOLYE_IC, w: 1.1 },
      ...uvLamba(120, 70),
      ok(170, 104, 192, 104),
      damlaUc(208, 98, 13),
      ...cicek(208, 100, 0.8),
    ],
  },
  // 6) Kenarları ıslak zımparayla düzelt
  {
    cizgiler: [
      ZEMIN,
      damlaUc(100, 82, 26),
      ...cicek(100, 86, 1.5),
      { d: kutu(150, 92, 66, 30), w: 1.5, dolgu: true },
      { d: "M156 98 L210 98 M156 106 L210 106 M156 114 L210 114", w: 0.4, kesik: true },
      damla(170, 70, 0.9),
      damla(190, 62, 0.9),
      yayOk(100, 86, 40, 3.6, 4.6),
    ],
  },
  // 7) Delik aç, halkayı ve zinciri tak
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 114, 150, 10), w: 1.4, dolgu: true },
      damlaUc(90, 88, 20),
      ...cicek(90, 92, 1.1),
      { d: "M60 100 L74 92 L76 100 L62 108 Z", w: 1.3, dolgu: true },
      ...matkap(90, 60),
      { d: daire(176, 72, 7), w: 1.6 },
      { d: daire(176, 56, 3) + " " + daire(176, 46, 3) + " " + daire(178, 36, 3) + " " + daire(182, 26, 3), w: 1.1 },
      onay(194, 92, 1),
    ],
  },
];

// ---------- Okyanus desenli epoksi bardak altlığı ----------
const ALTLIK_SINIR = daire(120, 74, 48);
export const EPOKSI_ALTLIK_ADIM: Cizim[] = [
  // 1) Ortamı hazırla (20–25 °C, düz zemin, eldiven ve maske, havalandırma)
  {
    cizgiler: [
      { d: "M14 120 L226 120 L220 128 L20 128 Z", w: 1.2, kesik: true },
      { d: daire(96, 100, 26, 10), w: 1.8, dolgu: true },
      { d: kutu(140, 104, 50, 12), w: 1.5, dolgu: true },
      { d: daire(165, 110, 3), w: 1 },
      ...termometre(30, 30, 64),
      eldiven(212, 98),
    ],
  },
  // 2) Ölç ve 3 dk kenarları sıyırarak karıştır
  {
    cizgiler: [
      ZEMIN,
      ...olcuKabi(44, 112, 26, 34, 0.6),
      ...olcuKabi(84, 112, 26, 34, 0.6),
      ok(102, 96, 128, 96),
      ...olcuKabi(170, 124, 50, 56, 0.55),
      { d: "M150 120 L190 52", w: 1.8 },
      yayOk(170, 100, 16, 0.4, 2.8),
      ...saat(214, 32, 10),
    ],
  },
  // 3) Üç renge ayır (3:2:1)
  {
    taramalar: [
      { id: "e3a", sinir: kutu(42, 82, 36, 30), kutu: [42, 82, 36, 30], aralik: 2.5, sonra: 1 },
      { id: "e3b", sinir: kutu(104, 90, 32, 22), kutu: [104, 90, 32, 22], aralik: 5, sonra: 4 },
    ],
    cizgiler: [
      ZEMIN,
      ...olcuKabi(60, 114, 40, 46, 0.68),
      ...olcuKabi(120, 114, 36, 40, 0.55),
      ...olcuKabi(178, 114, 32, 34, 0.4),
      ...damlalik(214, 120),
    ],
  },
  // 4) Katmanlarla dök (koyu mavi, turkuaz, ince beyaz şerit)
  {
    taramalar: [
      {
        id: "e4a",
        sinir: "M72 74 A48 48 0 0 1 120 26 L112 74 L120 122 A48 48 0 0 1 72 74 Z",
        kutu: [70, 24, 52, 100],
        aralik: 2.5,
        sonra: 0,
      },
      {
        id: "e4b",
        sinir: "M120 26 L112 74 L120 122 Q150 110 150 74 Q150 40 120 26 Z",
        kutu: [110, 24, 42, 100],
        aralik: 6,
        sonra: 0,
      },
    ],
    cizgiler: [
      { d: ALTLIK_SINIR, w: 2, dolgu: true },
      { d: "M152 32 Q146 74 156 116", w: 3 },
      { d: daire(120, 74, 52), w: 1 },
    ],
  },
  // 5) Isı tabancasıyla dalga (dantel hücreler)
  {
    taramalar: [
      {
        id: "e5a",
        sinir: "M44 74 A40 40 0 0 1 84 34 L78 74 L84 114 A40 40 0 0 1 44 74 Z",
        kutu: [42, 32, 44, 84],
        aralik: 2.5,
        sonra: 0,
      },
      {
        id: "e5b",
        sinir: "M84 34 L78 74 L84 114 Q110 104 110 74 Q110 44 84 34 Z",
        kutu: [76, 32, 36, 84],
        aralik: 6,
        sonra: 0,
      },
    ],
    cizgiler: [
      { d: daire(84, 74, 40), w: 2, dolgu: true },
      {
        d:
          daire(112, 50, 3) +
          " " +
          daire(114, 62, 2.4) +
          " " +
          daire(110, 74, 3.2) +
          " " +
          daire(114, 86, 2.4) +
          " " +
          daire(110, 98, 3),
        w: 0.9,
      },
      ...isiTabancasi(150, 70),
      { d: "M146 64 L128 58 M146 70 L126 70 M146 76 L128 82", w: 0.8, kesik: true },
    ],
  },
  // 6) 48 saat tozdan koru, sonra kalıptan çıkar
  {
    cizgiler: [
      ZEMIN,
      { d: daire(90, 120, 40, 8), w: 1.8, dolgu: true },
      { d: "M44 120 L44 60 L136 60 L136 120", w: 1.4, kesik: true },
      ...saat(90, 40, 14),
      ok(150, 110, 176, 110),
      { d: daire(200, 112, 22, 6), w: 1.8, dolgu: true },
    ],
  },
  // 7) Kenarı düzelt, keçe yapıştır, 7 gün tam kür
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(40, 96, 110, 12), w: 1.8, dolgu: true },
      { d: kutu(52, 108, 14, 4) + " " + kutu(124, 108, 14, 4), w: 1.2, dolgu: true },
      ...zimpara(150, 76, 30, 12),
      damla(176, 60, 0.8),
      { d: kutu(178, 22, 46, 40), w: 1.5, dolgu: true },
      { d: "M178 32 L224 32 M190 22 L190 18 M212 22 L212 18", w: 1 },
      onay(192, 46, 1),
    ],
  },
];

// ---------- Makrome saksı askısı ----------
export const MAKROME_ASKI_ADIM: Cizim[] = [
  // 1) 8 ipi eşit boyda kes
  {
    cizgiler: [
      {
        d: "M20 30 L220 30 M20 40 L220 40 M20 50 L220 50 M20 60 L220 60 M20 70 L220 70 M20 80 L220 80 M20 90 L220 90 M20 100 L220 100",
        w: 1,
      },
      { d: kutu(14, 112, 44, 22), w: 1.6, dolgu: true },
      { d: "M58 122 L200 122", w: 1, kesik: true },
      ...makas(200, 64),
    ],
  },
  // 2) Halkaya tak, sarma düğümle topla
  {
    cizgiler: [
      { d: daire(120, 22, 10), w: 1.8 },
      { d: "M112 28 L104 48 M116 31 L112 48 M124 31 L128 48 M128 28 L136 48", w: 1 },
      ...sarma(120, 54, 36, 14),
      ipler([104, 109, 114, 118, 122, 126, 131, 136], 61, 132),
    ],
  },
  // 3) 4 gruba ayır, her gruba 5 kare düğüm
  {
    cizgiler: [
      ...sarma(120, 18, 30, 12),
      { d: "M108 24 L60 50 M114 24 L100 50 M126 24 L140 50 M132 24 L180 50", w: 1 },
      dugumZinciri(60, 52, 5),
      dugumZinciri(100, 52, 5),
      dugumZinciri(140, 52, 5),
      dugumZinciri(180, 52, 5),
      ipler([57, 63, 97, 103, 137, 143, 177, 183], 98, 132),
    ],
  },
  // 4) 10 cm aşağıda komşu grupları çapraz bağla
  {
    cizgiler: [
      dugumZinciri(50, 14, 3),
      dugumZinciri(100, 14, 3),
      dugumZinciri(150, 14, 3),
      dugumZinciri(200, 14, 3),
      { d: "M53 40 L72 76 M97 40 L78 76 M103 40 L122 76 M147 40 L128 76 M153 40 L172 76 M197 40 L178 76", w: 0.9 },
      dugumZinciri(75, 78, 1),
      dugumZinciri(125, 78, 1),
      dugumZinciri(175, 78, 1),
      {
        d: "M72 86 L64 132 M78 86 L86 132 M122 86 L114 132 M128 86 L136 132 M172 86 L164 132 M178 86 L186 132",
        w: 0.9,
      },
    ],
  },
  // 5) İkinci sıra ile sepeti kapat, saksıyı dene
  {
    cizgiler: [
      { d: "M60 20 L76 48 M180 20 L164 48 M100 20 L76 48 M140 20 L164 48 M100 20 L120 48 M140 20 L120 48", w: 0.9 },
      dugumZinciri(76, 50, 1),
      dugumZinciri(120, 50, 1),
      dugumZinciri(164, 50, 1),
      ...[
        { d: "M84 74 L156 74 L148 118 L92 118 Z", w: 1.8, dolgu: true },
        { d: kutu(80, 66, 80, 8), w: 1.8, dolgu: true },
      ],
      { d: "M74 58 L86 92 M78 58 L100 92 M120 58 L100 92 M120 58 L140 92 M162 58 L140 92 M166 58 L154 92", w: 0.9 },
      dugumZinciri(100, 92, 1),
      dugumZinciri(140, 92, 1),
    ],
  },
  // 6) Altta tüm ipleri topla
  {
    cizgiler: [
      { d: "M84 30 L156 30 L148 74 L92 74 Z", w: 1.8, dolgu: true },
      { d: kutu(80, 22, 80, 8), w: 1.8, dolgu: true },
      { d: "M76 20 L92 76 M164 20 L148 76 M100 44 L114 96 M140 44 L126 96 M92 76 L114 96 M148 76 L126 96", w: 0.9 },
      ...sarma(120, 102, 22, 14),
      ipler([112, 116, 120, 124, 128], 109, 140),
    ],
  },
  // 7) Uçları eşitle, dübelli kancaya as
  {
    cizgiler: [
      { d: "M20 12 L220 12", w: 2.2 },
      { d: "M120 12 L120 22 Q120 30 114 30 Q108 30 108 24", w: 1.8 },
      { d: daire(120, 34, 5), w: 1.4 },
      { d: "M116 38 L92 74 M124 38 L148 74", w: 0.9 },
      { d: "M98 74 L142 74 L136 104 L104 104 Z", w: 1.8, dolgu: true },
      ...sukulentKucuk(120, 74),
      ...sarma(120, 112, 18, 12),
      ipler([112, 116, 120, 124, 128], 118, 136),
      { d: "M108 136 L132 136", w: 1, kesik: true },
    ],
  },
];
function sukulentKucuk(x: number, y: number): Cizgi[] {
  return [
    {
      d: `M${x} ${y} Q${x - 10} ${y - 6} ${x - 12} ${y - 16} Q${x - 2} ${y - 12} ${x} ${y} Q${x + 2} ${y - 18} ${x} ${y - 24} Q${x + 6} ${y - 14} ${x} ${y} Q${x + 10} ${y - 12} ${x + 12} ${y - 16} Q${x + 10} ${y - 6} ${x} ${y} Z`,
      w: 1.2,
      dolgu: true,
    },
  ];
}

// ---------- Makrome duvar süsü ----------
const CUBUK = { d: "M30 30 L210 30", w: 3.4 };
const DUVAR_X = [42, 64, 86, 108, 132, 154, 176, 198];
const basDugum = (x: number): Cizgi => ({
  d: `M${x - 4} ${32} Q${x - 4} 24 ${x} 24 Q${x + 4} 24 ${x + 4} 32 M${x - 4} 34 L${x - 4} 40 M${x + 4} 34 L${x + 4} 40`,
  w: 1.1,
});
export const MAKROME_DUVAR_ADIM: Cizim[] = [
  // 1) Çubuğu as, 16 ipi kes
  {
    cizgiler: [
      { d: "M120 6 L120 10", w: 1.6 },
      { d: "M30 30 L120 10 L210 30", w: 0.9 },
      CUBUK,
      { d: "M30 70 L200 70 M30 80 L200 80 M30 90 L200 90 M30 100 L200 100 M30 110 L200 110", w: 1 },
      ...makas(200, 92),
    ],
  },
  // 2) Ters baş düğümüyle tak
  {
    cizgiler: [
      CUBUK,
      ...DUVAR_X.map(basDugum),
      ipler(
        DUVAR_X.flatMap((x) => [x - 4, x + 4]),
        40,
        132,
      ),
    ],
  },
  // 3) İlk kare düğüm sırası
  {
    cizgiler: [
      CUBUK,
      ...DUVAR_X.map(basDugum),
      ipler(
        DUVAR_X.flatMap((x) => [x - 4, x + 4]),
        40,
        50,
      ),
      ...[53, 97, 143, 187].map((x) => dugumZinciri(x, 52, 1)),
      ipler([45, 49, 57, 61, 89, 93, 101, 105, 135, 139, 147, 151, 179, 183, 191, 195], 62, 132),
    ],
  },
  // 4) Kaydırmalı ikinci sıra
  {
    cizgiler: [
      CUBUK,
      ...[53, 97, 143, 187].map((x) => dugumZinciri(x, 40, 1)),
      {
        d: "M57 50 L71 66 M61 50 L73 66 M89 50 L77 66 M93 50 L81 66 M101 50 L117 66 M105 50 L119 66 M135 50 L123 66 M139 50 L127 66 M147 50 L163 66 M151 50 L165 66 M179 50 L167 66 M183 50 L171 66",
        w: 0.9,
      },
      ...[75, 121, 167].map((x) => dugumZinciri(x, 68, 1)),
      ipler([70, 74, 78, 82, 116, 120, 124, 128, 162, 166, 170, 174], 78, 132),
    ],
  },
  // 5) Ters üçgen deseni
  {
    cizgiler: [
      CUBUK,
      ...[40, 72, 104, 136, 168, 200].map((x) => dugumZinciri(x, 36, 1)),
      ...[56, 88, 120, 152, 184].map((x) => dugumZinciri(x, 52, 1)),
      ...[72, 104, 136, 168].map((x) => dugumZinciri(x, 68, 1)),
      ...[88, 120, 152].map((x) => dugumZinciri(x, 84, 1)),
      ...[104, 136].map((x) => dugumZinciri(x, 100, 1)),
      dugumZinciri(120, 116, 1),
      { d: "M34 46 L34 132 M206 46 L206 132", w: 0.9 },
    ],
  },
  // 6) Çapraz şerit (çift yarım düğüm, V)
  {
    cizgiler: [
      CUBUK,
      ipler([40, 52, 64, 76, 88, 100, 112, 128, 140, 152, 164, 176, 188, 200], 32, 132, 0.8),
      { d: "M34 50 L118 100 M206 50 L122 100", w: 2 },
      {
        d: "M46 57 L50 54 M58 64 L62 61 M70 71 L74 68 M82 78 L86 75 M94 85 L98 82 M106 92 L110 89 M194 57 L190 54 M182 64 L178 61 M170 71 L166 68 M158 78 L154 75 M146 85 L142 82 M134 92 L130 89",
        w: 1.4,
      },
    ],
  },
  // 7) Saçağı V biçiminde kes ve tara
  {
    cizgiler: [
      CUBUK,
      ipler([40, 52, 64, 76, 88, 100, 112, 128, 140, 152, 164, 176, 188, 200], 32, 60, 0.8),
      {
        d: "M40 60 L40 80 M52 60 L52 88 M64 60 L64 96 M76 60 L76 104 M88 60 L88 112 M100 60 L100 120 M112 60 L112 126 M128 60 L128 126 M140 60 L140 120 M152 60 L152 112 M164 60 L164 104 M176 60 L176 96 M188 60 L188 88 M200 60 L200 80",
        w: 0.7,
      },
      { d: "M40 80 L120 128 L200 80", w: 0.9, kesik: true },
      { d: kutu(196, 110, 34, 8), w: 1.4, dolgu: true },
      { d: "M200 118 L200 124 M206 118 L206 124 M212 118 L212 124 M218 118 L218 124 M224 118 L224 124", w: 1 },
    ],
  },
];

// ---------- Ortak küçük parçalar (kil, deri) ----------
// Kalınlık çubukları + açılmış levha (yandan): sol (x,y=zemin), en
const cubukluLevha = (x: number, y: number, en: number, kal = 5): Cizgi[] => [
  { d: kutu(x, y - kal - 1, 10, kal + 1) + " " + kutu(x + en - 10, y - kal - 1, 10, kal + 1), w: 1.4, dolgu: true },
  {
    d: `M${x + 12} ${y} L${x + 12} ${y - kal + 1} Q${x + en / 2} ${y - kal - 1} ${x + en - 12} ${y - kal + 1} L${x + en - 12} ${y} Z`,
    w: 1.5,
    dolgu: true,
  },
];
// Merdane: orta (cx,cy), boy
const merdane = (cx: number, cy: number, boy = 96): Cizgi[] => [
  {
    d: `M${cx - boy / 2} ${cy - 7} L${cx + boy / 2} ${cy - 7} L${cx + boy / 2} ${cy + 7} L${cx - boy / 2} ${cy + 7} Z`,
    w: 1.7,
    dolgu: true,
  },
  { d: `M${cx - boy / 2} ${cy} L${cx - boy / 2 - 16} ${cy} M${cx + boy / 2} ${cy} L${cx + boy / 2 + 16} ${cy}`, w: 3 },
];
// Fırın (önden): sol üst (x,y)
const firin = (x: number, y: number, en = 96, boy = 70): Cizgi[] => [
  { d: kutu(x, y, en, boy), w: 1.9, dolgu: true },
  { d: kutu(x + 8, y + 18, en - 16, boy - 26), w: 1.3 },
  { d: daire(x + 16, y + 9, 3.5) + " " + daire(x + 30, y + 9, 3.5), w: 1.1 },
  { d: `M${x + en - 34} ${y + 9} L${x + en - 10} ${y + 9}`, w: 2 },
];
// Pense: çene ucu (x,y), saplar sağa
const pense = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x + 18} ${y - 4} L${x + 18} ${y + 4} Z`, w: 1.4, dolgu: true },
  {
    d: `M${x + 18} ${y - 4} Q${x + 36} ${y - 8} ${x + 54} ${y - 16} M${x + 18} ${y + 4} Q${x + 36} ${y + 8} ${x + 54} ${y + 16}`,
    w: 3,
  },
  { d: daire(x + 20, y, 2.4), w: 1.1, dolgu: true },
];
// Küpe kancası: alt halka (x,y)
const kanca = (x: number, y: number): Cizgi[] => [
  { d: daire(x, y, 2.6), w: 1.2 },
  {
    d: `M${x} ${y - 3} L${x} ${y - 18} Q${x} ${y - 28} ${x + 8} ${y - 28} Q${x + 16} ${y - 28} ${x + 16} ${y - 18} L${x + 16} ${y - 8}`,
    w: 1.3,
  },
];
// Tokmak: vuran yüz alt orta (x,y), sap sağa
const tokmak = (x: number, y: number): Cizgi[] => [
  { d: kutu(x - 8, y - 22, 16, 22), w: 1.8, dolgu: true },
  { d: `M${x + 8} ${y - 13} L${x + 52} ${y - 13} L${x + 52} ${y - 8} L${x + 8} ${y - 8}`, w: 1.5, dolgu: true },
];
// Mandal: üst orta (x,y)
const mandal = (x: number, y: number): Cizgi[] => [
  { d: kutu(x - 6, y, 5, 20) + " " + kutu(x + 1, y, 5, 20), w: 1.3, dolgu: true },
  { d: daire(x, y + 8, 2.4), w: 1 },
];
// Güneş (karşı işaretle kullanılır): merkez (x,y)
const gunes = (x: number, y: number): Cizgi[] => [
  { d: daire(x, y, 7), w: 1.3 },
  {
    d: [0, 45, 90, 135, 180, 225, 270, 315]
      .map((a) => {
        const t = (a * Math.PI) / 180;
        return `M${r(x + Math.cos(t) * 10)} ${r(y + Math.sin(t) * 10)} L${r(x + Math.cos(t) * 14)} ${r(y + Math.sin(t) * 14)}`;
      })
      .join(" "),
    w: 1,
  },
];
// Deri şerit (üstten): sol üst (x,y)
const serit = (x: number, y: number, en: number, boy = 16): Cizgi => ({
  d: `M${x + boy / 2} ${y} L${x + en - boy / 2} ${y} A${boy / 2} ${boy / 2} 0 0 1 ${x + en - boy / 2} ${y + boy} L${x + boy / 2} ${y + boy} A${boy / 2} ${boy / 2} 0 0 1 ${x + boy / 2} ${y} Z`,
  w: 1.7,
  dolgu: true,
});
// Tabak (yandan): üst kenar ortası (cx,y)
const tabak = (cx: number, y: number, en = 90, boy = 18): Cizgi[] => [
  {
    d: `M${cx - en / 2} ${y} Q${cx - en / 2 + 10} ${y + boy} ${cx} ${y + boy} Q${cx + en / 2 - 10} ${y + boy} ${cx + en / 2} ${y} Z`,
    w: 1.8,
    dolgu: true,
  },
  { d: daire(cx, y, en / 2, 5), w: 1.3 },
];

// ---------- Polimer kil küpe ----------
export const KIL_KUPE_ADIM: Cizim[] = [
  // 1) Masayı hazırla ve kili yoğur
  {
    cizgiler: [
      ZEMIN,
      { d: "M20 126 L120 126 L132 110 L32 110 Z", w: 1, kesik: true },
      { d: "M56 116 Q50 96 72 92 Q96 90 98 106 Q96 120 76 120 Q60 120 56 116 Z", w: 1.8, dolgu: true },
      yayOk(77, 106, 34, 0.3, 2.6),
      { d: kutu(154, 108, 18, 18) + " " + kutu(176, 108, 18, 18) + " " + kutu(198, 108, 18, 18), w: 1.4, dolgu: true },
      ...bez(186, 70),
    ],
  },
  // 2) Mermer deseni yap
  {
    taramalar: [{ id: "k2", sinir: kutu(20, 66, 70, 10), kutu: [20, 66, 70, 10], aralik: 3, sonra: 1 }],
    cizgiler: [
      ZEMIN,
      { d: kutu(20, 54, 70, 10), w: 1.5, dolgu: true },
      { d: kutu(20, 66, 70, 10), w: 1.5, dolgu: true },
      ok(100, 66, 128, 66),
      { d: "M140 60 Q150 52 160 60 T180 60 T200 60 T220 60 M140 72 Q150 80 160 72 T180 72 T200 72 T220 72", w: 1.6 },
      { d: "M140 60 L140 72 M220 60 L220 72 M150 56 L160 76 M170 56 L180 76 M190 56 L200 76 M210 56 L218 70", w: 1 },
      yayOk(180, 100, 14, 0.2, 2.9),
    ],
  },
  // 3) 3 mm aç ve kes
  {
    cizgiler: [
      ZEMIN,
      ...cubukluLevha(14, 134, 120, 4),
      ...merdane(74, 116, 100),
      { d: daire(176, 108, 18), w: 1.6, kesik: true },
      { d: daire(176, 108, 12), w: 1.6, dolgu: true },
      { d: "M176 60 L176 86 M168 60 L184 60 L184 86 L168 86 Z", w: 1.4 },
      ok(176, 40, 176, 56),
    ],
  },
  // 4) Kenarları ve yüzeyi düzelt
  {
    cizgiler: [
      ZEMIN,
      damlaUc(90, 96, 24),
      ...parmak(116, 96),
      { d: "M168 48 L196 84", w: 1.6 },
      { d: daire(166, 46, 5) + " " + daire(198, 86, 5), w: 1.3, dolgu: true },
    ],
  },
  // 5) Halka deliğini aç
  {
    cizgiler: [
      ZEMIN,
      damlaUc(110, 100, 24),
      { d: daire(110, 70, 2.4), w: 1.3 },
      { d: "M110 72 L110 26", w: 1.6 },
      { d: "M106 26 L114 26 L112 18 L108 18 Z", w: 1.2, dolgu: true },
      { d: "M118 64 L126 64 M128 58 L132 54", w: 0.8 },
      { d: daire(110, 70, 8), w: 0.8, kesik: true },
    ],
  },
  // 6) Fırında pişir
  {
    cizgiler: [
      ZEMIN,
      ...firin(28, 52, 116, 80),
      { d: "M42 116 L130 116", w: 1.4 },
      { d: daire(62, 108, 7) + " " + daire(86, 108, 7) + " " + daire(110, 108, 7), w: 1.3, dolgu: true },
      ...termometre(170, 50, 50),
      ...saat(206, 64, 13),
    ],
  },
  // 7) Soğut ve monte et
  {
    cizgiler: [
      ZEMIN,
      damlaUc(56, 102, 20),
      { d: daire(56, 74, 6), w: 1.4 },
      ...kanca(56, 64),
      ...pense(80, 74),
      damlaUc(186, 104, 18),
      { d: daire(186, 79, 5), w: 1.3 },
      ...kanca(186, 70),
      onay(212, 46, 1),
    ],
  },
];

// ---------- Hava ile kuruyan kil takı tabağı ----------
export const TAKI_TABAGI_ADIM: Cizim[] = [
  // 1) Kili 5 mm aç
  {
    cizgiler: [
      ZEMIN,
      ...cubukluLevha(14, 134, 130, 6),
      ...merdane(79, 114, 106),
      kase(196, 108, 56, 26),
      ok(166, 86, 150, 104),
    ],
  },
  // 2) Şekil ver
  {
    taramalar: [
      {
        id: "t2",
        sinir: "M74 72 Q80 112 120 112 Q160 112 166 72 L158 72 Q154 104 120 104 Q86 104 82 72 Z",
        kutu: [72, 70, 96, 44],
        aralik: 3,
        sonra: 1,
      },
    ],
    cizgiler: [
      ZEMIN,
      { d: "M64 70 Q70 124 120 124 Q170 124 176 70 Z", w: 1.8, dolgu: true },
      { d: "M74 72 Q80 112 120 112 Q160 112 166 72", w: 1.4 },
      { d: "M58 66 Q120 60 182 66", w: 0.9, kesik: true },
      ...parmak(140, 98),
    ],
  },
  // 3) Kurumaya bırak
  {
    cizgiler: [
      ZEMIN,
      { d: "M34 132 Q36 96 76 96 Q116 96 118 132", w: 1.7, dolgu: true },
      { d: "M30 98 Q34 86 76 86 Q118 86 122 98 Q76 92 30 98 Z", w: 1.5, dolgu: true },
      yayOk(76, 64, 16, 0.6, 2.6),
      ...saat(160, 52, 14),
      ...gunes(206, 100),
      carpi(206, 100, 10),
    ],
  },
  // 4) Zımparala
  {
    cizgiler: [
      ZEMIN,
      ...tabak(90, 104, 110, 22),
      ...zimpara(118, 82, 40, 14),
      ok(130, 74, 160, 74),
      ...firca(182, 116),
    ],
    noktalar: [
      [44, 128, 1],
      [50, 130, 1.2],
      [140, 128, 1],
      [146, 131, 1.2],
    ],
  },
  // 5) Boya ve yaldız sür
  {
    cizgiler: [
      ZEMIN,
      { d: daire(96, 92, 62, 30), w: 1.8, dolgu: true },
      { d: daire(96, 92, 52, 23), w: 1.1 },
      { d: daire(96, 92, 62, 30), w: 3.2 },
      ...cicek(80, 90, 1),
      ...cicek(110, 96, 0.8),
      ...firca(160, 66),
      { d: kutu(192, 106, 30, 22), w: 1.7, dolgu: true },
      { d: daire(207, 106, 15, 3), w: 1.2 },
    ],
  },
  // 6) Vernikle
  {
    cizgiler: [
      ZEMIN,
      ...tabak(80, 96, 110, 24),
      { d: "M50 98 Q60 94 70 96 M88 95 Q98 93 106 95", w: 0.8 },
      ...firca(122, 92),
      ...kavanoz(176, 124, 32, 36),
      damla(216, 62, 1.1),
      carpi(216, 84, 6),
    ],
  },
];

// ---------- Damgalı deri anahtarlık ----------
export const DERI_ANAHTARLIK_ADIM: Cizim[] = [
  // 1) Uçları yuvarlat
  {
    cizgiler: [
      ZEMIN,
      ...altlik(12, 92, 216, 34),
      serit(30, 100, 150, 18),
      { d: daire(171, 109, 9), w: 1.3, kesik: true },
      { d: daire(204, 70, 10), w: 1.4, dolgu: true },
      ...bicak(176, 104),
    ],
  },
  // 2) Harflerin yerini işaretle
  {
    cizgiler: [
      ZEMIN,
      serit(24, 92, 192, 20),
      { d: "M120 86 L120 118", w: 1, kesik: true },
      { d: "M144 102 L146 102 M160 102 L162 102 M176 102 L178 102", w: 1.6 },
      ...kalem(178, 98),
    ],
  },
  // 3) Nemlendir ve damgala
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(12, 126, 216, 8), w: 1.4, dolgu: true },
      serit(24, 112, 150, 14),
      { d: kutu(110, 76, 10, 34), w: 1.5, dolgu: true },
      { d: kutu(108, 108, 14, 4), w: 1.2, dolgu: true },
      ...tokmak(115, 70),
      { d: "M98 52 L104 58 M132 52 L126 58", w: 1 },
      { d: kutu(188, 90, 34, 18), w: 1.5, dolgu: true },
    ],
    noktalar: [
      [196, 96, 1],
      [206, 100, 1],
      [214, 95, 1],
      [200, 103, 1],
    ],
  },
  // 4) Kurumasını bekle
  {
    cizgiler: [
      ZEMIN,
      serit(20, 108, 120, 16),
      ...saat(80, 64, 15),
      ...isiTabancasi(156, 60),
      carpi(184, 96, 9),
      ...gunes(206, 30),
      carpi(206, 30, 9),
    ],
  },
  // 5) Delik aç
  {
    cizgiler: [
      ZEMIN,
      { d: daire(40, 104, 14), w: 2 },
      { d: "M48 94 L140 94 L140 116 L48 116 Q38 105 48 94 Z", w: 1.7, dolgu: true },
      { d: "M56 100 L134 100", w: 0.8 },
      ...mandal(96, 82),
      { d: kutu(118, 40, 12, 46), w: 1.6, dolgu: true },
      { d: "M120 86 L120 92 M128 86 L128 92", w: 1.2 },
      ...tokmak(124, 34),
    ],
  },
  // 6) Perçinle
  {
    cizgiler: [
      ZEMIN,
      { d: "M30 112 Q40 106 50 112 L50 116 L30 116 Z", w: 1.4, dolgu: true },
      { d: "M38 110 L38 92 M42 110 L42 92", w: 1.3 },
      { d: "M28 72 Q40 62 52 72 L52 78 L28 78 Z", w: 1.4, dolgu: true },
      ok(40, 60, 40, 66),
      { d: daire(100, 106, 14), w: 2 },
      { d: "M108 96 L196 96 L196 118 L108 118 Q98 107 108 96 Z", w: 1.7, dolgu: true },
      { d: "M172 96 Q180 90 188 96 Z", w: 1.3, dolgu: true },
      { d: kutu(175, 58, 10, 32), w: 1.5, dolgu: true },
      ...tokmak(180, 52),
      onay(110, 50, 1),
    ],
  },
];

// ---------- Saraç dikişli deri kartlık ----------
const GOVDE = kutu(60, 34, 120, 84);
const CEP = kutu(60, 66, 120, 52);
export const DERI_KARTLIK_ADIM: Cizim[] = [
  // 1) Kalıbı kes
  {
    cizgiler: [
      ZEMIN,
      ...altlik(12, 30, 216, 98),
      { d: kutu(36, 44, 120, 74), w: 1.7, dolgu: true },
      { d: kutu(40, 48, 112, 66), w: 0.9, kesik: true },
      ...cetvel(26, 116, 140, 10),
      ...bicak(156, 114),
    ],
  },
  // 2) Parçaları hizala
  {
    cizgiler: [
      ZEMIN,
      { d: GOVDE, w: 1.8, dolgu: true },
      { d: CEP, w: 1.8, dolgu: true },
      ...mandal(60, 86),
      ...mandal(180, 86),
      ...mandal(120, 108),
    ],
  },
  // 3) Dikiş çizgisini çiz
  {
    cizgiler: [
      ZEMIN,
      { d: GOVDE, w: 1.8, dolgu: true },
      { d: CEP, w: 1.8, dolgu: true },
      { d: "M64 38 L64 114 L176 114 L176 38", w: 1, kesik: true },
      ...kalem(176, 76),
    ],
  },
  // 4) Dikiş deliklerini aç
  {
    cizgiler: [
      ZEMIN,
      { d: GOVDE, w: 1.8, dolgu: true },
      { d: CEP, w: 1.8, dolgu: true },
      { d: "M64 38 L64 114 L120 114", w: 1, kesik: true },
      { d: kutu(150, 70, 14, 30), w: 1.5, dolgu: true },
      { d: "M151 100 L151 106 M155 100 L155 106 M159 100 L159 106 M163 100 L163 106", w: 1 },
      ...tokmak(157, 64),
    ],
    noktalar: [
      [124, 114, 1.2],
      [130, 114, 1.2],
      [136, 114, 1.2],
      [142, 114, 1.2],
    ],
  },
  // 5) Saraç dikişiyle dik
  {
    cizgiler: [
      ZEMIN,
      { d: GOVDE, w: 1.8, dolgu: true },
      { d: CEP, w: 1.8, dolgu: true },
      { d: "M64 40 L64 112 L176 112 L176 40", w: 1.4, kesik: true },
      { d: "M176 54 Q196 44 206 24 M176 54 Q200 64 218 56", w: 0.9 },
      { d: "M204 28 L210 18 M216 58 L226 54", w: 1.6 },
    ],
  },
  // 6) Dikişi bitir
  {
    cizgiler: [
      ZEMIN,
      { d: GOVDE, w: 1.8, dolgu: true },
      { d: CEP, w: 1.8, dolgu: true },
      { d: "M64 40 L64 112 L176 112 L176 40", w: 1.4, kesik: true },
      yayOk(176, 56, 12, 1.2, 4.6),
      ...makas(188, 30),
      damla(196, 94, 0.8),
    ],
  },
  // 7) Kenarları bitir
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(40, 40, 110, 80), w: 1.8, dolgu: true },
      { d: kutu(40, 70, 110, 50), w: 1.8, dolgu: true },
      { d: "M44 44 L44 116 L146 116 L146 44", w: 1.2, kesik: true },
      { d: "M150 40 L150 120", w: 3 },
      ...bez(186, 90),
      yayOk(186, 90, 26, 3.6, 5.6),
      onay(206, 40, 1),
    ],
  },
];

// ---------- Ortak küçük parçalar (boncuk, taş, pirografi) ----------
// Boncuk halkası: merkez (cx,cy), yarıçap R, n boncuk, boncuk yarıçapı br
const boncukHalka = (cx: number, cy: number, R: number, n: number, br: number, ry = R): Cizgi => ({
  d: Array.from({ length: n }, (_, i) => {
    const t = (i / n) * Math.PI * 2 + Math.PI / n - Math.PI / 2;
    return daire(r(cx + Math.cos(t) * R), r(cy + Math.sin(t) * ry), br);
  }).join(" "),
  w: 1.3,
  dolgu: true,
});
// İğne çivi + boncuk dizisi: çivi başı (x,y), tel üst ucu yTel
const boncukDizi = (x: number, y: number, yTel: number): Cizgi[] => [
  { d: `M${x} ${y} L${x} ${yTel}`, w: 1.1 },
  { d: kutu(x - 3, y, 6, 2), w: 1.2, dolgu: true },
  { d: daire(x, y - 4, 3), w: 1.2, dolgu: true },
  damlaUc(x, y - 16, 6),
  { d: daire(x, y - 28, 3) + " " + daire(x, y - 34, 3), w: 1.2, dolgu: true },
];
// Düz taş (üstten): merkez (cx,cy)
const tas = (cx: number, cy: number, s = 1): string =>
  `M${r(cx - 46 * s)} ${cy} Q${r(cx - 44 * s)} ${r(cy - 30 * s)} ${cx} ${r(cy - 32 * s)} Q${r(cx + 48 * s)} ${r(cy - 30 * s)} ${r(cx + 50 * s)} ${r(cy + 2 * s)} Q${r(cx + 44 * s)} ${r(cy + 26 * s)} ${cx} ${r(cy + 26 * s)} Q${r(cx - 46 * s)} ${r(cy + 24 * s)} ${r(cx - 46 * s)} ${cy} Z`;
// Noktalama çubuğu: bilyeli uç (x,y), sap yukarı
const noktalayici = (x: number, y: number): Cizgi[] => [
  { d: daire(x, y - 3, 3), w: 1.2, dolgu: true },
  { d: kutu(x - 2.5, y - 46, 5, 40), w: 1.4, dolgu: true },
];
// Halka şeklinde noktalar: merkez, yarıçap, adet, nokta yarıçapı
const noktaHalka = (cx: number, cy: number, R: number, n: number, nr: number, ry = R): [number, number, number][] =>
  Array.from({ length: n }, (_, i) => {
    const t = (i / n) * Math.PI * 2;
    return [r(cx + Math.cos(t) * R), r(cy + Math.sin(t) * ry), nr] as [number, number, number];
  });
// Kütük dilimi (üstten): merkez (cx,cy), yarıçap R
const kutuk = (cx: number, cy: number, R: number): Cizgi[] => [
  { d: daire(cx, cy, R, R * 0.8), w: 2.2, dolgu: true },
  { d: daire(cx, cy, R - 5, R * 0.8 - 5), w: 1 },
  { d: daire(cx + 4, cy + 2, R * 0.25, R * 0.2), w: 0.5 },
];
// Pirografi kalemi: sıcak uç (x,y), gövde sağ üste, kablo
const piroKalem = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x + 10} ${y - 8} L${x + 14} ${y - 4} Z`, w: 1.2, dolgu: true },
  { d: `M${x + 10} ${y - 8} L${x + 40} ${y - 32} L${x + 46} ${y - 26} L${x + 14} ${y - 4} Z`, w: 1.5, dolgu: true },
  { d: `M${x + 20} ${y - 16} L${x + 26} ${y - 10} M${x + 24} ${y - 19} L${x + 30} ${y - 13}`, w: 0.8 },
  { d: `M${x + 43} ${y - 29} Q${x + 60} ${y - 40} ${x + 62} ${y - 20} Q${x + 64} ${y} ${x + 80} ${y + 4}`, w: 1 },
];
// Yaprak motifi (pirografi deseni)
const YAPRAK = "M70 108 Q78 70 118 58 Q150 52 162 60 Q150 96 112 104 Q90 108 70 108 Z";
const YAPRAK_DAMAR =
  "M74 104 Q112 86 158 62 M100 94 L102 80 M120 84 L126 70 M138 74 L146 64 M96 96 L110 100 M116 86 L132 92";

// ---------- Doğal taş bileklik ----------
export const DOGAL_TAS_BILEKLIK_ADIM: Cizim[] = [
  // 1) Bileğini ölç
  {
    cizgiler: [
      ZEMIN,
      { d: "M30 70 L104 76 M30 112 L104 106", w: 1.6 },
      { d: daire(110, 91, 12, 17), w: 1.6, dolgu: true },
      { d: "M98 74 Q86 91 98 108", w: 1.2, kesik: true },
      { d: daire(176, 98, 18), w: 1.8, dolgu: true },
      { d: daire(176, 98, 6), w: 1.1 },
      { d: "M158 98 Q120 112 108 108", w: 1.4 },
    ],
  },
  // 2) İpi gerdir
  {
    cizgiler: [
      ZEMIN,
      { d: "M44 90 L196 90", w: 1.3 },
      ok(80, 72, 40, 72),
      ok(160, 72, 200, 72),
      { d: "M38 84 L44 90 L38 96 M202 84 L196 90 L202 96", w: 1.4 },
      ...makas(176, 114),
    ],
  },
  // 3) Deseni masada dene
  {
    cizgiler: [
      ZEMIN,
      { d: "M18 82 L120 96 L222 82 M18 104 L120 96 L222 104", w: 1 },
      {
        d: [28, 42, 56, 70, 84, 98, 112, 126, 140, 154, 168, 182, 196, 210].map((x) => daire(x, 93, 6)).join(" "),
        w: 1.3,
        dolgu: true,
      },
      ...cetvel(22, 118, 196, 10),
    ],
  },
  // 4) Boncukları diz
  {
    cizgiler: [
      ZEMIN,
      { d: "M30 96 L200 96", w: 1.1 },
      ...mandal(30, 86),
      { d: [58, 72, 86, 100, 114].map((x) => daire(x, 96, 6)).join(" "), w: 1.3, dolgu: true },
      { d: daire(176, 70, 6), w: 1.3, dolgu: true },
      ok(176, 80, 158, 94),
    ],
  },
  // 5) Cerrah düğümüyle bağla
  {
    cizgiler: [
      ZEMIN,
      boncukHalka(100, 82, 38, 16, 6.5),
      { d: "M92 42 Q100 32 108 42 Q100 50 92 42 Z M94 44 Q100 36 106 44", w: 1.3 },
      { d: "M92 42 L80 22 M108 42 L120 22", w: 1.2 },
      ok(70, 30, 62, 18),
      ok(130, 30, 138, 18),
      damla(150, 46, 0.9),
      ...damlalik(170, 70),
    ],
  },
  // 6) Uçları kes ve düğümü gizle
  {
    cizgiler: [
      ZEMIN,
      boncukHalka(100, 86, 38, 16, 6.5),
      { d: "M96 46 L92 38 M104 46 L108 38", w: 1.2 },
      ...makas(112, 34),
      onay(190, 96, 1.2),
    ],
  },
];

// ---------- Boncuk küpe ----------
export const BONCUK_KUPE_ADIM: Cizim[] = [
  // 1) Boncukları diz
  {
    cizgiler: [ZEMIN, ...boncukDizi(100, 116, 30), { d: daire(160, 60, 3), w: 1.2, dolgu: true }, ok(152, 60, 110, 40)],
  },
  // 2) Fazla teli kes
  {
    cizgiler: [
      ZEMIN,
      ...boncukDizi(90, 120, 30),
      { d: "M82 72 L98 72", w: 0.8, kesik: true },
      ...pense(92, 64),
      { d: "M92 52 L96 42", w: 0.9 },
    ],
  },
  // 3) Teli 90° bük
  {
    cizgiler: [ZEMIN, ...boncukDizi(110, 120, 82), { d: "M110 82 L134 82", w: 1.1 }, yayOk(110, 82, 18, -1.6, -0.2)],
  },
  // 4) Halka yap
  {
    cizgiler: [
      ZEMIN,
      ...boncukDizi(100, 120, 82),
      { d: daire(100, 75, 7), w: 1.2 },
      ...pense(108, 72),
      yayOk(100, 75, 16, 3.4, 5.6),
    ],
  },
  // 5) Kancaya tak
  {
    cizgiler: [ZEMIN, ...boncukDizi(110, 124, 86), { d: daire(110, 80, 6), w: 1.2 }, ...kanca(110, 70)],
  },
  // 6) Eşini yap ve karşılaştır
  {
    cizgiler: [
      ZEMIN,
      ...boncukDizi(80, 124, 86),
      { d: daire(80, 80, 6), w: 1.2 },
      ...kanca(80, 70),
      ...boncukDizi(150, 124, 86),
      { d: daire(150, 80, 6), w: 1.2 },
      ...kanca(150, 70),
      { d: "M62 126 L170 126 M62 42 L170 42", w: 0.8, kesik: true },
      onay(196, 70, 1),
    ],
  },
];

// ---------- Nokta boyama taş ----------
const TAS = tas(100, 92);
export const TAS_BOYAMA_ADIM: Cizim[] = [
  // 1) Taşı temizle
  {
    cizgiler: [
      ZEMIN,
      kase(84, 88, 120, 40),
      { d: "M30 96 Q84 92 138 96", w: 0.9 },
      { d: tas(84, 112, 0.5), w: 1.6, dolgu: true },
      ...firca(118, 92),
      ...saat(196, 58, 14),
    ],
    noktalar: [
      [60, 84, 2],
      [70, 78, 1.5],
      [104, 80, 2],
    ],
  },
  // 2) Zemin rengini sür
  {
    taramalar: [{ id: "tb2", sinir: TAS, kutu: [52, 58, 102, 62], aralik: 2.5, sonra: 1 }],
    cizgiler: [ZEMIN, { d: TAS, w: 1.9, dolgu: true }, ...firca(150, 66)],
  },
  // 3) Merkezi belirle ve büyük noktayı koy
  {
    taramalar: [{ id: "tb3", sinir: TAS, kutu: [52, 58, 102, 62], aralik: 2.5, sonra: 1 }],
    cizgiler: [ZEMIN, { d: TAS, w: 1.9, dolgu: true }, ...noktalayici(100, 78), ok(124, 30, 112, 50)],
    noktalar: [[100, 90, 7]],
  },
  // 4) Halkaları diz
  {
    taramalar: [{ id: "tb4", sinir: TAS, kutu: [52, 58, 102, 62], aralik: 2.5, sonra: 1 }],
    cizgiler: [ZEMIN, { d: TAS, w: 1.9, dolgu: true }, ...noktalayici(172, 120)],
    noktalar: [[100, 90, 7], ...noktaHalka(100, 90, 15, 10, 3), ...noktaHalka(100, 90, 25, 14, 3, 20)],
  },
  // 5) Noktaların üstüne detay ekle
  {
    taramalar: [{ id: "tb5", sinir: TAS, kutu: [52, 58, 102, 62], aralik: 2.5, sonra: 1 }],
    cizgiler: [ZEMIN, { d: TAS, w: 1.9, dolgu: true }, ...noktalayici(186, 104), ...saat(200, 36, 11)],
    noktalar: [
      [100, 90, 7],
      ...noktaHalka(100, 90, 15, 10, 3),
      ...noktaHalka(100, 90, 25, 14, 3, 20),
      ...noktaHalka(100, 90, 34, 18, 1.5, 26),
    ],
  },
  // 6) Kurut ve vernikle
  {
    taramalar: [{ id: "tb6", sinir: TAS, kutu: [52, 58, 102, 62], aralik: 2.5, sonra: 1 }],
    cizgiler: [ZEMIN, { d: TAS, w: 1.9, dolgu: true }, ...firca(146, 70), ok(60, 50, 140, 50), ...saat(200, 100, 14)],
    noktalar: [[100, 90, 7], ...noktaHalka(100, 90, 15, 10, 3), ...noktaHalka(100, 90, 25, 14, 3, 20)],
  },
];

// ---------- Pirografi kütük pano ----------
export const PIROGRAFI_PANO_ADIM: Cizim[] = [
  // 1) Yüzeyi hazırla
  {
    cizgiler: [ZEMIN, ...kutuk(96, 84, 60), ...zimpara(108, 68, 40, 14), ok(100, 104, 150, 104), ...firca(180, 120)],
  },
  // 2) Deseni aktar
  {
    cizgiler: [
      ZEMIN,
      ...kutuk(116, 84, 66),
      { d: kutu(70, 52, 92, 64), w: 1.4, dolgu: true },
      { d: YAPRAK, w: 0.9, kesik: true },
      { d: "M64 48 L80 56 M168 48 L152 56", w: 3 },
      ...kalem(118, 82),
    ],
  },
  // 3) Hurda ahşapta dene
  {
    cizgiler: [
      ZEMIN,
      ...tahta(20, 82, 110, 40, false),
      { d: "M34 92 L116 92", w: 0.6 },
      { d: "M34 102 L116 102", w: 1.4 },
      { d: "M34 112 L116 112", w: 2.6 },
      { d: "M160 126 L176 96 L192 126", w: 1.6 },
      ...piroKalem(150, 70),
      ...saat(40, 40, 12),
    ],
  },
  // 4) Ana hatları yak
  {
    cizgiler: [
      ZEMIN,
      ...kutuk(116, 84, 66),
      { d: YAPRAK, w: 1.6, dolgu: true },
      { d: "M74 104 Q112 86 158 62", w: 1.2 },
      ...piroKalem(162, 60),
      { d: "M164 52 Q160 44 166 38 Q172 32 168 24", w: 0.8 },
    ],
  },
  // 5) Gölgelendir
  {
    taramalar: [
      {
        id: "p5",
        sinir: "M70 108 Q78 70 118 58 L112 104 Q90 108 70 108 Z",
        kutu: [68, 56, 52, 54],
        aralik: 3,
        sonra: 4,
      },
    ],
    cizgiler: [
      ZEMIN,
      ...kutuk(116, 84, 66),
      { d: YAPRAK, w: 1.6, dolgu: true },
      { d: YAPRAK_DAMAR, w: 1 },
      ...piroKalem(104, 92),
    ],
  },
  // 6) Temizle ve vernikle
  {
    taramalar: [
      {
        id: "p6",
        sinir: "M70 108 Q78 70 118 58 L112 104 Q90 108 70 108 Z",
        kutu: [68, 56, 52, 54],
        aralik: 3,
        sonra: 4,
      },
    ],
    cizgiler: [
      ZEMIN,
      ...kutuk(116, 84, 66),
      { d: YAPRAK, w: 1.6, dolgu: true },
      { d: YAPRAK_DAMAR, w: 1 },
      { d: kutu(194, 104, 26, 14), w: 1.5, dolgu: true },
      ...firca(186, 72),
      onay(42, 40, 1),
    ],
  },
];
