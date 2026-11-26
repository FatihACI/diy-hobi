// Epoksi kategorisi (Altın 40 dışı 18 proje): adım sahneleri (viewBox 0 0 240 150).
// Adım sayısı ve sırası src/data/ek/epoksi.ts içeriğiyle birebir eşleşir.
import { Cizgi, Cizim, Tarama, daire, kutu, yuvarla as r } from "../arac";
import {
  bant,
  bez,
  damla,
  firca,
  kablo,
  matkap,
  ok,
  onay,
  parmak,
  saat,
  tahta,
  telefon,
  termometre,
  yagSisesi,
  yayOk,
  ZEMIN,
  zimpara,
} from "./parca";

type Nokta = [number, number, number];

// ---------- Ortak parçalar ----------
const takvim = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 30, 28), w: 1.4, dolgu: true },
  {
    d: `M${x} ${y + 8} L${x + 30} ${y + 8} M${x + 8} ${y - 3} L${x + 8} ${y + 3} M${x + 22} ${y - 3} L${x + 22} ${y + 3}`,
    w: 1.2,
  },
];
// Karıştırma bardağı + çubuk: taban orta (cx,y)
const karistir = (cx: number, y: number, cubuk = true): Cizgi[] => [
  { d: `M${cx - 22} ${y - 50} L${cx - 18} ${y} L${cx + 18} ${y} L${cx + 22} ${y - 50}`, w: 1.7, dolgu: true },
  {
    d: `M${cx - 20} ${y - 34} L${cx + 20} ${y - 34} M${cx - 21} ${y - 42} L${cx - 14} ${y - 42} M${cx - 21} ${y - 26} L${cx - 14} ${y - 26}`,
    w: 0.8,
  },
  ...(cubuk ? [{ d: `M${cx + 4} ${y - 6} L${cx + 26} ${y - 70}`, w: 2.4 }] : []),
];
// İki şişe (A/B): sol taban (x,y)
const ab = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y - 50, 26, 50) + " " + kutu(x + 34, y - 40, 26, 40), w: 1.6, dolgu: true },
  { d: kutu(x + 7, y - 58, 12, 8) + " " + kutu(x + 41, y - 48, 12, 8), w: 1.4, dolgu: true },
  {
    d: `M${x + 8} ${y - 30} L${x + 13} ${y - 40} L${x + 18} ${y - 30} M${x + 10} ${y - 34} L${x + 16} ${y - 34} M${x + 42} ${y - 28} L${x + 42} ${y - 16} Q${x + 52} ${y - 16} ${x + 52} ${y - 22} Q${x + 52} ${y - 28} ${x + 42} ${y - 28}`,
    w: 1,
  },
];
// Dökme: bardak ağzı (x,y) eğik, akış aşağı
const dok = (x: number, y: number, boy = 26): Cizgi[] => [
  {
    d: `M${x} ${y} L${x + 10} ${y - 14} L${x + 44} ${y - 34} L${x + 54} ${y - 16} L${x + 20} ${y + 4} Z`,
    w: 1.6,
    dolgu: true,
  },
  { d: `M${x} ${y} Q${x - 2} ${y + boy / 2} ${x} ${y + boy}`, w: 1.4 },
];
// Isı tabancası: ağız (x,y), gövde sağa
const isiTabanca = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x} ${y - 6} L${x + 20} ${y - 8} L${x + 20} ${y - 14} L${x + 52} ${y - 14} L${x + 52} ${y + 10} L${x + 20} ${y + 10} L${x + 20} ${y + 6} L${x} ${y + 6} Z`,
    w: 1.6,
    dolgu: true,
  },
  { d: `M${x + 34} ${y + 10} L${x + 36} ${y + 36} L${x + 46} ${y + 36} L${x + 48} ${y + 10}`, w: 1.5, dolgu: true },
  {
    d: `M${x - 4} ${y - 4} L${x - 18} ${y - 10} M${x - 4} ${y} L${x - 20} ${y} M${x - 4} ${y + 4} L${x - 18} ${y + 10}`,
    w: 0.8,
    kesik: true,
  },
];
// Mutfak terazisi: sol üst (x,y)
const terazi = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y + 6, 60, 24), w: 1.7, dolgu: true },
  { d: kutu(x - 4, y, 68, 6), w: 1.5, dolgu: true },
  { d: kutu(x + 16, y + 12, 28, 10), w: 1 },
];
// Eldiven: bilek (x,y)
const eldiven = (x: number, y: number): Cizgi => ({
  d: `M${x - 14} ${y} L${x - 14} ${y - 26} L${x - 20} ${y - 36} L${x - 16} ${y - 38} L${x - 10} ${y - 30} L${x - 10} ${y - 50} L${x - 5} ${y - 50} L${x - 4} ${y - 34} L${x - 2} ${y - 54} L${x + 3} ${y - 54} L${x + 4} ${y - 34} L${x + 6} ${y - 50} L${x + 11} ${y - 50} L${x + 10} ${y - 32} L${x + 14} ${y - 44} L${x + 18} ${y - 42} L${x + 14} ${y - 22} L${x + 14} ${y} Z`,
  w: 1.4,
  dolgu: true,
});
// Reçine taraması
const recine = (id: string, sinir: string, k: [number, number, number, number], sonra = 0, aralik = 4): Tarama => ({
  id,
  sinir,
  kutu: k,
  aralik,
  sonra,
});
const kabarcik = (x: number, y: number): Nokta[] => [
  [x, y, 2],
  [x + 10, y + 4, 1.4],
  [x - 8, y + 6, 1.6],
  [x + 4, y + 10, 1.2],
];
const simler = (x: number, y: number): Nokta[] => [
  [x, y, 0.8],
  [x + 6, y + 3, 0.8],
  [x - 5, y + 5, 0.8],
  [x + 2, y + 8, 0.8],
  [x + 9, y - 2, 0.8],
];
// Kürdan: uç (x,y)
const kurdan = (x: number, y: number): Cizgi => ({ d: `M${x} ${y} L${x + 30} ${y - 40}`, w: 1.4 });
// Silikon kalıp (yuvalı, yandan): sol üst (x,y)
const kalipK = (x: number, y: number, en = 140, boy = 30, yuvalar = 3): Cizgi[] => [
  { d: kutu(x, y, en, boy), w: 1.8, dolgu: true },
  {
    d: Array.from({ length: yuvalar }, (_, i) =>
      kutu(x + 10 + i * ((en - 20) / yuvalar), y + 4, (en - 20) / yuvalar - 8, boy - 10),
    ).join(" "),
    w: 1.1,
  },
];
// Nehir tahtası (üstten): iki ahşap + nehir
const NEHIR = `M110 30 Q120 60 104 90 Q96 110 112 130 L140 130 Q124 110 132 90 Q146 60 134 30 Z`;
const AHSAP_SOL = `M40 30 L110 30 Q120 60 104 90 Q96 110 112 130 L40 130 Z`;
const AHSAP_SAG = `M134 30 L200 30 L200 130 L140 130 Q124 110 132 90 Q146 60 134 30 Z`;
const ahsaplar: Cizgi[] = [
  { d: AHSAP_SOL, w: 1.7, dolgu: true },
  { d: AHSAP_SAG, w: 1.7, dolgu: true },
  { d: `M50 50 Q70 60 96 50 M50 80 Q70 90 96 84 M150 60 Q170 50 190 60 M150 100 Q170 110 190 100`, w: 0.6 },
];
const KALIP_KUTU: Cizgi = { d: kutu(30, 22, 180, 116), w: 2 };
// Kase kalıbı (yarım küre yandan): orta (cx,y) üst kenar
const kaseKalip = (cx: number, y: number, R = 50): Cizgi => ({
  d: `M${cx - R} ${y} A${R} ${R * 0.8} 0 0 0 ${cx + R} ${y}`,
  w: 1.8,
  dolgu: true,
});
// Kristal: (x,y) taban
const kristal = (x: number, y: number, s = 1): Cizgi => ({
  d: `M${r(x - 6 * s)} ${y} L${r(x - 4 * s)} ${r(y - 12 * s)} L${x} ${r(y - 18 * s)} L${r(x + 4 * s)} ${r(y - 12 * s)} L${r(x + 6 * s)} ${y} Z`,
  w: 1.2,
  dolgu: true,
});
// Tepsi (üstten oval)
const TEPSI: Cizgi = { d: daire(120, 76, 90, 54), w: 2, dolgu: true };
// Saat yüzü (daire)
const YUZ: Cizgi = { d: daire(120, 76, 56), w: 2, dolgu: true };
// Kütük dilimi: merkez (x,y)
const dilim = (x: number, y: number, R = 26): Cizgi[] => [
  { d: daire(x, y, R), w: 1.7, dolgu: true },
  { d: daire(x, y, R * 0.66) + " " + daire(x, y, R * 0.33), w: 0.6 },
];
// LED taban: orta (cx,y)
const ledTaban = (cx: number, y: number): Cizgi[] => [
  { d: kutu(cx - 40, y - 12, 80, 12), w: 1.7, dolgu: true },
  { d: daire(cx - 20, y - 6, 1.6) + " " + daire(cx, y - 6, 1.6) + " " + daire(cx + 20, y - 6, 1.6), w: 1, dolgu: true },
  kablo(cx + 40, y - 6, cx + 80, y, 6),
];
// Harf "A": taban (cx,y)
const harfA = (cx: number, y: number, boy = 80): Cizgi => ({
  d: `M${cx - 34} ${y} L${cx - 8} ${y - boy} L${cx + 8} ${y - boy} L${cx + 34} ${y} L${cx + 18} ${y} L${cx + 12} ${y - 20} L${cx - 12} ${y - 20} L${cx - 18} ${y} Z M${cx - 6} ${y - 34} L${cx + 6} ${y - 34} L${cx} ${y - 56} Z`,
  w: 1.7,
  dolgu: true,
});
// UV lamba: sol üst (x,y)
const uvLamba = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x} ${y + 40} L${x} ${y + 10} Q${x} ${y} ${x + 10} ${y} L${x + 80} ${y} Q${x + 90} ${y} ${x + 90} ${y + 10} L${x + 90} ${y + 40}`,
    w: 1.8,
    dolgu: true,
  },
  {
    d: `M${x + 20} ${y + 12} L${x + 16} ${y + 30} M${x + 45} ${y + 12} L${x + 45} ${y + 30} M${x + 70} ${y + 12} L${x + 74} ${y + 30}`,
    w: 0.8,
    kesik: true,
  },
];
// Kuru çiçek: (x,y)
const cicek = (x: number, y: number): Cizgi => ({
  d: daire(x, y, 3) + ` M${x - 6} ${y} a3 3 0 0 1 3 -5 M${x + 6} ${y} a3 3 0 0 0 -3 -5 M${x} ${y + 3} l0 10`,
  w: 1,
});
// Peynir tahtası (saplı): sap sağda
const PEYNIR = `M30 50 L150 50 Q160 50 160 60 L160 66 L220 66 L220 90 L160 90 L160 96 Q160 106 150 106 L30 106 Z`;
const SAP = kutu(160, 66, 60, 24);
// Ayraç: sol üst (x,y)
const ayrac = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x} ${y + 6} Q${x} ${y} ${x + 6} ${y} L${x + 34} ${y} Q${x + 40} ${y} ${x + 40} ${y + 6} L${x + 40} ${y + 110} L${x} ${y + 110} Z`,
    w: 1.7,
    dolgu: true,
  },
  { d: daire(x + 20, y + 12, 4), w: 1.2 },
];
const yaprak = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y} Q${x - 14} ${y - 30} ${x} ${y - 60} Q${x + 14} ${y - 30} ${x} ${y} Z M${x} ${y} L${x} ${y - 60}`,
  w: 1.2,
  dolgu: true,
});
// Kolye kalıbı (damla): orta (cx,y) üst
const kolyeKalip = `M120 30 Q160 70 150 100 Q140 126 120 126 Q100 126 90 100 Q80 70 120 30 Z`;
// Masa (perspektif)
const MASA: Cizgi[] = [
  { d: `M30 70 L170 70 L210 46 L70 46 Z`, w: 1.8, dolgu: true },
  { d: `M30 70 L30 130 M170 70 L170 130 M210 46 L210 106 M70 46 L70 60`, w: 2.4 },
  { d: kutu(30, 70, 140, 8), w: 1.4, dolgu: true },
];
const MASA_YUZ = `M30 70 L170 70 L210 46 L70 46 Z`;
// Pano (kare): sol üst (x,y)
const PANO: Cizgi = { d: kutu(50, 20, 140, 110), w: 2, dolgu: true };
// Düğme: merkez (x,y)
const dugme = (x: number, y: number, R = 16, delik = 0): Cizgi[] => [
  { d: daire(x, y, R), w: 1.7, dolgu: true },
  ...(delik
    ? [
        {
          d: (delik === 2
            ? [
                [-4, 0],
                [4, 0],
              ]
            : [
                [-4, -4],
                [4, -4],
                [-4, 4],
                [4, 4],
              ]
          )
            .map(([a, b]) => daire(x + a, y + b, 1.8))
            .join(" "),
          w: 1,
        },
      ]
    : []),
];
// Çatlaklı tahta
const CATLAK = `M40 76 L80 72 L110 80 L150 74 L200 78 L150 80 L110 84 L80 78 Z`;
// Tealight tutucu (silindir yandan): orta (cx,y) taban
const tutucu = (cx: number, y: number): Cizgi[] => [
  { d: `M${cx - 30} ${y} L${cx - 30} ${y - 40} M${cx + 30} ${y} L${cx + 30} ${y - 40}`, w: 1.8 },
  { d: daire(cx, y - 40, 30, 8), w: 1.6, dolgu: true },
  { d: daire(cx, y - 40, 14, 4), w: 1.2 },
  { d: `M${cx - 30} ${y} Q${cx} ${y + 10} ${cx + 30} ${y}`, w: 1.8 },
];
// Kalem blok + boru
const BLOK_K: Cizgi = { d: kutu(30, 66, 180, 24), w: 1.8, dolgu: true };
const BORU: Cizgi = { d: kutu(30, 74, 180, 8), w: 1.2 };
const KALEM_G = (x = 40): Cizgi => ({
  d: `M${x} 78 L${x + 10} 72 L${x + 150} 72 L${x + 150} 84 L${x + 10} 84 Z`,
  w: 1.7,
  dolgu: true,
});

// ---------- 1. Nehir Desenli Servis Tahtası (7) ----------
export const NEHIR_TAHTA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...ahsaplar, ...firca(160, 120), damla(30, 30), { d: `M24 22 L36 34`, w: 1.4 }] },
  {
    cizgiler: [
      ZEMIN,
      KALIP_KUTU,
      bant(40, 22),
      bant(200, 22),
      bant(120, 138),
      { d: `M30 22 l8 0 l0 8 M210 22 l-8 0 l0 8`, w: 1.4 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      KALIP_KUTU,
      ...ahsaplar,
      { d: `M60 60 L60 40 M180 60 L180 40`, w: 2 },
      { d: kutu(52, 34, 16, 8) + " " + kutu(172, 34, 16, 8), w: 1.4, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      KALIP_KUTU,
      ...ahsaplar,
      ...firca(110, 70),
      { d: `M110 30 Q120 60 104 90 Q96 110 112 130`, w: 2.4 },
    ],
  },
  {
    cizgiler: [ZEMIN, KALIP_KUTU, ...ahsaplar, { d: NEHIR, w: 1.3 }, ...dok(122, 30)],
    taramalar: [recine("n", NEHIR, [96, 30, 50, 100], 4)],
  },
  {
    cizgiler: [ZEMIN, ...ahsaplar, { d: NEHIR, w: 1.3 }, ...zimpara(150, 60, 40, 12), ...takvim(204, 6)],
    taramalar: [recine("n", NEHIR, [96, 30, 50, 100], 3)],
  },
  {
    cizgiler: [ZEMIN, ...ahsaplar, { d: NEHIR, w: 1.3 }, ...bez(170, 60), ...yagSisesi(220, 130)],
    taramalar: [recine("n", NEHIR, [96, 30, 50, 100], 3)],
  },
];

// ---------- 2. Harfli Epoksi Anahtarlık (4) ----------
export const EPOKSI_ANAHTARLIK_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...ab(30, 130), ...karistir(140, 130), ...saat(200, 40, 12), eldiven(210, 134)] },
  {
    cizgiler: [ZEMIN, ...kalipK(30, 100, 180, 30), ...dok(76, 60)],
    noktalar: [...simler(140, 110), ...simler(184, 112)],
  },
  { cizgiler: [ZEMIN, ...kalipK(30, 100, 180, 30), kurdan(110, 108)], noktalar: kabarcik(90, 108) },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(80, 70, 40, 50), w: 1.8, dolgu: true },
      { d: daire(100, 62, 6) + " " + daire(100, 50, 10), w: 1.4 },
      { d: `M100 50 L100 30`, w: 1.4 },
      ...takvim(170, 40),
    ],
  },
];

// ---------- 3. Epoksi Takı Kasesi (5) ----------
export const EPOKSI_KASE_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...karistir(70, 130), ...karistir(170, 130, false), ok(100, 90, 140, 90)] },
  {
    cizgiler: [ZEMIN, kaseKalip(120, 70), ...dok(130, 30)],
    taramalar: [recine("a", `M70 70 A50 40 0 0 0 120 110 L120 70 Z`, [70, 70, 50, 40], 0, 3)],
  },
  {
    cizgiler: [
      ZEMIN,
      kaseKalip(120, 70),
      { d: `M80 76 l6 -4 l4 6 Z M150 80 l6 -2 l2 6 Z`, w: 1.1, dolgu: true },
      ...parmak(156, 74),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      kaseKalip(120, 80),
      { d: `M90 80 A30 24 0 0 0 150 80`, w: 1.6, dolgu: true },
      { d: kutu(108, 50, 24, 24), w: 1.5, dolgu: true },
      ok(120, 30, 120, 48),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M60 90 A60 40 0 0 0 180 90 Z`, w: 1.8, dolgu: true },
      { d: `M80 90 A40 26 0 0 0 160 90`, w: 1.2 },
      ...zimpara(170, 60, 30, 10),
      ...takvim(30, 30),
    ],
  },
];

// ---------- 4. Geode Desenli Tepsi (5) ----------
export const EPOKSI_TEPSI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, TEPSI, ...firca(160, 76), bant(30, 76), bant(210, 76)] },
  { cizgiler: [ZEMIN, TEPSI, kristal(110, 84), kristal(120, 80, 1.2), kristal(132, 86), kristal(124, 92, 0.8)] },
  {
    cizgiler: [
      ZEMIN,
      TEPSI,
      kristal(120, 80, 1.2),
      { d: daire(120, 76, 26, 16) + " " + daire(120, 76, 42, 26) + " " + daire(120, 76, 60, 36), w: 1.2 },
      ...dok(180, 30),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      TEPSI,
      kristal(120, 80, 1.2),
      { d: daire(120, 76, 26, 16) + " " + daire(120, 76, 60, 36), w: 1.2 },
      { d: daire(120, 76, 42, 26), w: 2.6 },
      ...firca(170, 70),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      TEPSI,
      kristal(120, 80, 1.2),
      { d: daire(120, 76, 26, 16) + " " + daire(120, 76, 42, 26) + " " + daire(120, 76, 60, 36), w: 1.2 },
      ...dok(176, 34),
      onay(30, 30, 1.2),
    ],
  },
];

// ---------- 5. Epoksi Duvar Saati (5) ----------
const DALGA: Cizgi = {
  d: `M70 60 Q90 50 110 64 Q130 78 150 62 Q166 52 176 60 M66 86 Q90 76 112 92 Q134 106 174 88`,
  w: 1.4,
};
export const EPOKSI_SAAT_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, YUZ, ...dok(150, 30)], taramalar: [recine("y", daire(120, 76, 56), [64, 20, 112, 112], 0, 5)] },
  { cizgiler: [ZEMIN, YUZ, DALGA, ...isiTabanca(180, 66)] },
  { cizgiler: [ZEMIN, YUZ, DALGA, ...takvim(196, 20)] },
  { cizgiler: [ZEMIN, YUZ, DALGA, { d: daire(120, 76, 4), w: 1.3 }, ...matkap(120, 72)] },
  {
    cizgiler: [
      ZEMIN,
      YUZ,
      DALGA,
      { d: `M120 76 L120 36 M120 76 L148 88`, w: 2.4 },
      { d: daire(120, 76, 3), w: 1.2, dolgu: true },
      onay(210, 30, 1.2),
    ],
  },
];

// ---------- 6. Ahşap Dilimli Altlık (4) ----------
export const EPOKSI_BARDAK_ALTI_AGAC_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...dilim(80, 80, 34), { d: `M80 40 L80 120`, w: 1, kesik: true }, ...testereK(130, 80)] },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(120, 80, 50), w: 2 },
      { d: `M90 40 A50 50 0 0 0 90 120 Z M150 40 A50 50 0 0 1 150 120 Z`, w: 1.6, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(120, 80, 50), w: 2, dolgu: true },
      { d: `M90 40 A50 50 0 0 0 90 120 Z M150 40 A50 50 0 0 1 150 120 Z`, w: 1.6, dolgu: true },
      ...dok(120, 30),
    ],
    taramalar: [recine("o", kutu(92, 40, 56, 80), [92, 40, 56, 80], 1)],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(120, 80, 50), w: 2, dolgu: true },
      { d: `M90 40 A50 50 0 0 0 90 120 Z M150 40 A50 50 0 0 1 150 120 Z`, w: 1.6 },
      ...zimpara(150, 30, 40, 12),
      onay(210, 110, 1.2),
    ],
  },
];
function testereK(x: number, y: number): Cizgi[] {
  return [
    { d: `M${x} ${y} L${x + 70} ${y - 20} L${x + 70} ${y - 8} L${x} ${y + 12} Z`, w: 1.5, dolgu: true },
    { d: `M${x} ${y + 12} l4 3 l4 -3 l4 3 l4 -3 l4 3 l4 -3 l4 3 l4 -3`, w: 0.8 },
  ];
}

// ---------- 7. Işıklı Harf Lamba (4) ----------
export const EPOKSI_HARF_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, { d: kutu(60, 40, 120, 90), w: 1.8, dolgu: true }, harfA(120, 124), ...dok(170, 30)] },
  { cizgiler: [ZEMIN, harfA(110, 130), ...takvim(180, 40)] },
  { cizgiler: [ZEMIN, harfA(110, 130), ...zimpara(70, 116, 80, 12)] },
  {
    cizgiler: [
      ZEMIN,
      ...ledTaban(110, 134),
      harfA(110, 122),
      { d: `M100 40 L94 26 M120 40 L120 24 M140 40 L146 26`, w: 1 },
    ],
  },
];

// ---------- 8. Çiçekli Telefon Kılıfı (4) ----------
export const TELEFON_KILIFI_RECINE_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...telefon(90, 20, 64, 112),
      cicek(110, 70),
      cicek(130, 96),
      cicek(116, 112),
      { d: kutu(96, 26, 18, 18), w: 1.2 },
    ],
  },
  { cizgiler: [ZEMIN, ...telefon(30, 30, 56, 100), ...uvLamba(120, 70), ...firca(80, 70)] },
  {
    cizgiler: [ZEMIN, ...telefon(90, 20, 64, 112), cicek(110, 70), cicek(130, 96), ...firca(150, 120)],
    taramalar: [recine("k", kutu(94, 50, 56, 78), [94, 50, 56, 78], 0, 5)],
  },
  {
    cizgiler: [
      ZEMIN,
      ...telefon(90, 20, 64, 112),
      { d: kutu(96, 26, 18, 18), w: 1.4 },
      { d: daire(105, 35, 12), w: 1, kesik: true },
      onay(180, 40, 1.2),
    ],
  },
];

// ---------- 9. Epoksi Saplı Peynir Tahtası (4) ----------
export const EPOKSI_KESME_TAHTASI_SAP_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: PEYNIR, w: 1.8, dolgu: true },
      { d: kutu(156, 62, 68, 32), w: 1.2, kesik: true },
      bant(190, 62),
    ],
  },
  {
    cizgiler: [ZEMIN, { d: PEYNIR, w: 1.8, dolgu: true }, { d: SAP, w: 1.3 }, ...dok(176, 40)],
    taramalar: [recine("s", SAP, [160, 66, 60, 24], 1)],
  },
  {
    cizgiler: [ZEMIN, { d: PEYNIR, w: 1.8, dolgu: true }, { d: SAP, w: 1.3 }, ...takvim(100, 14)],
    taramalar: [recine("s", SAP, [160, 66, 60, 24], 1)],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: PEYNIR, w: 1.8, dolgu: true },
      { d: SAP, w: 1.3 },
      ...bez(90, 70),
      ...zimpara(170, 30, 30, 10),
    ],
    taramalar: [recine("s", SAP, [160, 66, 60, 24], 1)],
  },
];

// ---------- 10. Epoksi Kitap Ayracı (4) ----------
export const EPOKSI_KITAP_AYRACI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...ayrac(100, 20), yaprak(120, 110), ...parmak(140, 100)] },
  {
    cizgiler: [ZEMIN, ...ayrac(100, 20), yaprak(120, 110), ...dok(150, 30)],
    taramalar: [recine("a", kutu(102, 26, 36, 102), [102, 26, 36, 102], 1, 5)],
  },
  { cizgiler: [ZEMIN, ...ayrac(100, 20), yaprak(120, 110), ...takvim(170, 40)] },
  {
    cizgiler: [
      ZEMIN,
      ...ayrac(100, 20),
      yaprak(120, 110),
      { d: `M120 32 Q150 20 160 50 M160 50 L150 90 M160 50 L160 92 M160 50 L170 90`, w: 1.2 },
    ],
  },
];

// ---------- 11. Mini Manzaralı Kolye (4) ----------
export const EPOKSI_KOLYE_SISE_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kolyeKalip, w: 1.8, dolgu: true },
      { d: `M92 110 Q120 100 148 110`, w: 1 },
      { d: `M110 116 q4 -6 8 0 Z`, w: 1, dolgu: true },
    ],
    noktalar: [
      [100, 116, 0.8],
      [130, 118, 0.8],
      [140, 114, 0.8],
      [116, 120, 0.8],
    ],
  },
  {
    cizgiler: [ZEMIN, { d: kolyeKalip, w: 1.8, dolgu: true }, { d: `M92 110 Q120 100 148 110`, w: 1 }, ...dok(140, 30)],
    taramalar: [recine("d", `M86 80 L154 80 L148 108 L92 108 Z`, [86, 80, 68, 28], 2)],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kolyeKalip, w: 1.8, dolgu: true },
      { d: `M92 110 Q120 100 148 110`, w: 1 },
      { d: `M88 82 q8 -6 16 0 q8 6 16 0 q8 -6 16 0 q8 6 16 0`, w: 1.6 },
      ...firca(150, 80),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kolyeKalip, w: 1.8, dolgu: true },
      { d: `M92 110 Q120 100 148 110 M88 82 q8 -6 16 0 q8 6 16 0 q8 -6 16 0 q8 6 16 0`, w: 1 },
      { d: daire(120, 24, 6), w: 1.4 },
      { d: `M120 18 Q90 4 60 10 M120 18 Q150 4 180 10`, w: 1 },
    ],
  },
];

// ---------- 12. Masaya Epoksi Kaplama (5) ----------
export const EPOKSI_MASA_KAPLAMA_ADIM: Cizim[] = [
  {
    cizgiler: [ZEMIN, ...MASA, ...zimpara(100, 40, 50, 12)],
    noktalar: [
      [150, 50, 1],
      [160, 54, 1],
      [140, 56, 1],
    ],
  },
  { cizgiler: [ZEMIN, ...MASA, ...firca(130, 50)], taramalar: [recine("m", MASA_YUZ, [30, 46, 180, 24], 0, 6)] },
  { cizgiler: [ZEMIN, ...MASA, { d: `M30 78 L170 78`, w: 2.4 }, bant(60, 78), bant(140, 78)] },
  {
    cizgiler: [
      ZEMIN,
      ...MASA,
      ...dok(120, 30, 40),
      { d: `M60 70 Q60 80 62 90 M150 70 Q150 82 148 92`, w: 1.2 },
      ok(90, 58, 60, 60),
      ok(150, 58, 180, 54),
    ],
    taramalar: [recine("m", MASA_YUZ, [30, 46, 180, 24], 0, 4)],
  },
  { cizgiler: [ZEMIN, ...MASA, ...isiTabanca(150, 26)], noktalar: kabarcik(100, 56) },
];

// ---------- 13. Duvar Panosu (Resin Art) (4) ----------
export const EPOKSI_TABAK_DUVAR_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, PANO, ...firca(140, 80), bant(50, 50), bant(190, 50)] },
  { cizgiler: [ZEMIN, ...karistir(50, 130, false), ...karistir(110, 130, false), ...karistir(170, 130, false)] },
  {
    cizgiler: [
      ZEMIN,
      PANO,
      { d: `M60 30 Q80 60 70 120 M100 26 Q120 70 110 126 M140 26 Q160 70 150 126`, w: 1.4 },
      yayOk(120, 76, 60, 0.4, 1.0),
      ...dok(170, 30),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      PANO,
      { d: `M60 30 Q80 60 70 120 M100 26 Q120 70 110 126 M140 26 Q160 70 150 126`, w: 1.4 },
      { d: daire(90, 60, 6) + " " + daire(124, 90, 8) + " " + daire(150, 60, 5) + " " + daire(84, 100, 4), w: 1 },
      ...isiTabanca(180, 50),
    ],
  },
];

// ---------- 14. Epoksi Düğme (4) ----------
export const EPOKSI_DUGME_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...kalipK(30, 100, 180, 30, 4), ...dok(70, 60)] },
  { cizgiler: [ZEMIN, ...kalipK(40, 110, 160, 24, 4), ...uvLamba(74, 60)] },
  {
    cizgiler: [
      ZEMIN,
      ...dugme(100, 100, 30, 0),
      { d: daire(92, 100, 2) + " " + daire(108, 100, 2), w: 1, kesik: true },
      ...matkap(108, 96),
    ],
  },
  { cizgiler: [ZEMIN, ...dugme(80, 100, 20, 4), ...dugme(140, 100, 20, 2), ...zimpara(170, 40, 40, 12)] },
];

// ---------- 15. Ahşap Çatlağını Doldurma (4) ----------
export const EPOKSI_TAMIR_ADIM: Cizim[] = [
  {
    cizgiler: [ZEMIN, ...tahta(30, 50, 180, 60), { d: CATLAK, w: 1.5, dolgu: true }, ...firca(150, 60)],
    noktalar: [
      [60, 74, 1],
      [100, 80, 1],
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tahta(30, 50, 180, 60),
      { d: CATLAK, w: 1.5, dolgu: true },
      { d: kutu(30, 110, 180, 6), w: 1.3, dolgu: true },
      ok(120, 136, 120, 118),
    ],
  },
  {
    cizgiler: [ZEMIN, ...tahta(30, 50, 180, 60), { d: CATLAK, w: 1.5, dolgu: true }, ...dok(120, 30, 40)],
    taramalar: [recine("c", CATLAK, [40, 72, 160, 12], 1, 2.5)],
  },
  {
    cizgiler: [ZEMIN, ...tahta(30, 50, 180, 60), { d: CATLAK, w: 1 }, ...zimpara(90, 36, 50, 12), onay(210, 30, 1.2)],
    taramalar: [recine("c", CATLAK, [40, 72, 160, 12], 1, 2.5)],
  },
];

// ---------- 16. Epoksi Tealight Tutucu (4) ----------
export const EPOKSI_MUM_TUTUCU_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...tutucu(110, 120), ...dok(150, 40), { d: `M90 100 l6 -4 l4 6 Z`, w: 1, dolgu: true }] },
  { cizgiler: [ZEMIN, ...tutucu(110, 120), ...takvim(180, 40)] },
  { cizgiler: [ZEMIN, ...tutucu(110, 120), ...zimpara(150, 70, 30, 10), ok(40, 80, 70, 80)] },
  {
    cizgiler: [
      ZEMIN,
      ...tutucu(110, 120),
      { d: daire(110, 80, 12, 3), w: 1.4, dolgu: true },
      { d: `M110 78 Q106 70 110 62 Q114 70 110 78 Z`, w: 1.1, dolgu: true },
    ],
  },
];

// ---------- 17. Epoksi Gövdeli Kalem (5) ----------
export const EPOKSI_KALEM_ADIM: Cizim[] = [
  {
    cizgiler: [ZEMIN, { d: kutu(24, 60, 192, 36), w: 1.8 }, BORU, ...dok(130, 30)],
    taramalar: [recine("b", kutu(26, 62, 188, 32), [26, 62, 188, 32], 1, 5)],
  },
  { cizgiler: [ZEMIN, BLOK_K, BORU, ...takvim(100, 20)] },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(10, 60, 20, 36) + " " + kutu(210, 60, 20, 36), w: 1.6, dolgu: true },
      { d: `M30 70 L210 70 L210 86 L30 86 Z`, w: 1.7, dolgu: true },
      BORU,
      yayOk(120, 78, 16, 3.6, 5.8),
      { d: `M120 110 L130 90 L140 90 L130 110 Z`, w: 1.4, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M30 70 L210 70 L210 86 L30 86 Z`, w: 1.7, dolgu: true },
      ...zimpara(100, 54, 40, 12),
      damla(80, 50),
      damla(170, 52, 0.8),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      KALEM_G(40),
      { d: `M30 78 L40 76 L40 80 Z`, w: 1.2, dolgu: true },
      { d: kutu(190, 74, 14, 8), w: 1.3, dolgu: true },
      ok(200, 110, 200, 86),
    ],
  },
];

// ---------- 18. Kabarcık ve Hata Giderme (5) ----------
export const EPOKSI_KABARCIK_ONLEME_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...terazi(80, 100), ...karistir(110, 98, false), ...ab(170, 130)] },
  {
    cizgiler: [
      ZEMIN,
      { d: `M60 70 L60 130 L150 130 L150 70`, w: 1.8 },
      { d: `M62 84 q10 -3 20 0 q10 3 20 0 q10 -3 20 0 q10 3 24 0`, w: 1 },
      { d: kutu(86, 60, 24, 60), w: 1.6, dolgu: true },
      ...termometre(180, 40, 60),
    ],
  },
  { cizgiler: [ZEMIN, ...karistir(120, 130), yayOk(120, 104, 14, 0, 5), ...saat(190, 40, 12)] },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 100, 140, 20), w: 1.8, dolgu: true },
      ...isiTabanca(110, 70),
      { d: `M100 80 L100 100 M96 80 L104 80 M96 100 L104 100`, w: 0.9 },
    ],
    noktalar: kabarcik(60, 106),
  },
  {
    cizgiler: [
      ZEMIN,
      ...termometre(80, 40, 70),
      { d: kutu(130, 40, 70, 60), w: 1.6 },
      { d: `M140 70 Q150 60 160 70 Q170 80 180 70 Q186 64 192 70`, w: 1 },
      onay(200, 20, 1.2),
    ],
  },
];
