// Pirografi & Boyama kategorisi (Altın 40 dışı 18 proje): adım sahneleri (viewBox 0 0 240 150).
// Adım sayısı ve sırası src/data/ek/pirografi.ts içeriğiyle birebir eşleşir.
import { Cizgi, Cizim, Tarama, daire, kutu, yuvarla as r } from "../arac";
import {
  bant,
  bez,
  damla,
  firca,
  kablo,
  kalem,
  kavanoz,
  matkap,
  ok,
  onay,
  parmak,
  saat,
  sprey,
  sis,
  tahta,
  yagSisesi,
  yayOk,
  ZEMIN,
  zimpara,
} from "./parca";

type Nokta = [number, number, number];

// ---------- Ortak parçalar ----------
// Pirografi kalemi: uç (x,y), gövde sağ üste; kablolu
const piro = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x + 10} ${y - 8}`, w: 1.6 },
  { d: `M${x + 8} ${y - 10} L${x + 18} ${y - 18} L${x + 22} ${y - 14} L${x + 12} ${y - 6} Z`, w: 1.3, dolgu: true },
  { d: `M${x + 18} ${y - 18} L${x + 48} ${y - 42} L${x + 54} ${y - 36} L${x + 22} ${y - 14}`, w: 1.6, dolgu: true },
  kablo(x + 52, y - 40, x + 80, y - 20, 10),
];
const duman = (x: number, y: number): Cizgi => ({ d: `M${x} ${y} q-4 -6 0 -12 q4 -6 0 -12`, w: 0.8 });
// Ahşap kaşık (yatay): kepçe solda
const KASIK = `M30 76 Q30 62 54 62 Q74 62 84 70 L200 72 Q210 74 208 78 Q204 82 196 80 L84 82 Q74 90 54 90 Q30 90 30 76 Z`;
// Tuval (bardaklar üstünde): sol üst (x,y)
const tuval = (x: number, y: number, en = 140, boy = 70): Cizgi => ({ d: kutu(x, y, en, boy), w: 1.8, dolgu: true });
const BARDAKLAR: Cizgi = { d: kutu(56, 110, 14, 20) + " " + kutu(170, 110, 14, 20), w: 1.3, dolgu: true };
// Boya bardağı: taban orta (cx,y)
const bardak = (cx: number, y: number, boy = 40): Cizgi => ({
  d: `M${cx - 14} ${y - boy} L${cx - 11} ${y} L${cx + 11} ${y} L${cx + 14} ${y - boy}`,
  w: 1.6,
  dolgu: true,
});
// Akışkan desen (hücreli)
const akis = (x: number, y: number, en: number, boy: number): Cizgi[] => [
  {
    d: `M${x + 10} ${y + boy / 2} Q${x + en * 0.3} ${y + 10} ${x + en / 2} ${y + boy / 2} Q${x + en * 0.7} ${y + boy - 10} ${x + en - 10} ${y + boy / 2} M${x + 20} ${y + boy * 0.75} Q${x + en / 2} ${y + boy * 0.5} ${x + en - 20} ${y + boy * 0.25}`,
    w: 1.3,
  },
  {
    d:
      daire(x + en * 0.4, y + boy * 0.4, 4) +
      " " +
      daire(x + en * 0.6, y + boy * 0.6, 3) +
      " " +
      daire(x + en * 0.3, y + boy * 0.65, 2.5),
    w: 1,
  },
];
// Karbon kağıdı: sol üst
const karbon = (x: number, y: number, en: number, boy: number): Cizgi => ({
  d: kutu(x, y, en, boy),
  w: 1.1,
  kesik: true,
});
// Kütük dilimi: merkez
const kutuk = (x: number, y: number, R = 52): Cizgi[] => [
  { d: daire(x, y, R), w: 2, dolgu: true },
  { d: daire(x, y, R - 6), w: 0.7 },
  { d: daire(x, y, R * 0.4) + " " + daire(x, y, R * 0.2), w: 0.5 },
];
// Saat rakam işaretleri
const rakam = (x: number, y: number, R: number, uzun = false): Cizgi => ({
  d: Array.from({ length: 12 }, (_, i) => {
    const a = (i * Math.PI) / 6;
    const L = uzun || i % 3 === 0 ? 8 : 4;
    return `M${r(x + R * Math.sin(a))} ${r(y - R * Math.cos(a))} L${r(x + (R - L) * Math.sin(a))} ${r(y - (R - L) * Math.cos(a))}`;
  }).join(" "),
  w: 2,
});
// Mandala halkaları + dilimler
const halkalar = (x: number, y: number, n = 4, R0 = 12, dR = 12): Cizgi => ({
  d: Array.from({ length: n }, (_, i) => daire(x, y, R0 + i * dR)).join(" "),
  w: 1,
});
const dilimler = (x: number, y: number, R1: number, R2: number, n = 12): Cizgi => ({
  d: Array.from({ length: n }, (_, i) => {
    const a = (i * 2 * Math.PI) / n;
    return `M${r(x + R1 * Math.cos(a))} ${r(y + R1 * Math.sin(a))} L${r(x + R2 * Math.cos(a))} ${r(y + R2 * Math.sin(a))}`;
  }).join(" "),
  w: 0.7,
  kesik: true,
});
const yapraklar = (x: number, y: number, R: number, n = 12): Cizgi => ({
  d: Array.from({ length: n }, (_, i) => {
    const a = (i * 2 * Math.PI) / n;
    const px = x + R * Math.cos(a),
      py = y + R * Math.sin(a);
    return daire(r(px), r(py), 4);
  }).join(" "),
  w: 1.2,
});
// Kutu (kapaklı, perspektif)
const KUTU: Cizgi[] = [
  { d: `M50 80 L170 80 L200 60 L80 60 Z`, w: 1.8, dolgu: true },
  { d: kutu(50, 80, 120, 50), w: 1.8, dolgu: true },
  { d: `M170 80 L200 60 L200 110 L170 130`, w: 1.6 },
];
const KAPAK = `M50 80 L170 80 L200 60 L80 60 Z`;
// Deri parça
const deri = (x: number, y: number, en: number, boy: number): Cizgi => ({
  d: `M${x + 6} ${y} L${x + en - 6} ${y} Q${x + en} ${y} ${x + en} ${y + 6} L${x + en} ${y + boy - 6} Q${x + en} ${y + boy} ${x + en - 6} ${y + boy} L${x + 6} ${y + boy} Q${x} ${y + boy} ${x} ${y + boy - 6} L${x} ${y + 6} Q${x} ${y} ${x + 6} ${y} Z`,
  w: 1.8,
  dolgu: true,
});
// Kalemlik silindir: orta (cx,y) taban
const kalemlik = (cx: number, y: number): Cizgi[] => [
  { d: `M${cx - 30} ${y} L${cx - 30} ${y - 70} M${cx + 30} ${y} L${cx + 30} ${y - 70}`, w: 1.8 },
  { d: daire(cx, y - 70, 30, 8), w: 1.6, dolgu: true },
  { d: `M${cx - 30} ${y} Q${cx} ${y + 10} ${cx + 30} ${y}`, w: 1.8 },
];
// Manzara katmanları
const GOK = kutu(40, 20, 160, 110);
const DAG_UZAK = `M40 90 L80 60 L110 80 L140 50 L170 76 L200 66 L200 130 L40 130 Z`;
const DAG_YAKIN = `M40 110 L70 90 L100 104 L130 84 L170 106 L200 96 L200 130 L40 130 Z`;
const agacSil = (x: number, y: number, s = 1): Cizgi => ({
  d: `M${x} ${y} L${x} ${r(y - 8 * s)} M${r(x - 8 * s)} ${r(y - 8 * s)} L${x} ${r(y - 30 * s)} L${r(x + 8 * s)} ${r(y - 8 * s)} Z`,
  w: 1.3,
  dolgu: true,
});
// Taş (oval, nokta mandala)
const TAS = (x: number, y: number): Cizgi => ({ d: daire(x, y, 56, 40), w: 2, dolgu: true });
const noktaHalka = (x: number, y: number, R: number, n: number, rr: number): Nokta[] =>
  Array.from({ length: n }, (_, i) => {
    const a = (i * 2 * Math.PI) / n;
    return [r(x + R * Math.cos(a)), r(y + R * Math.sin(a) * 0.72), rr] as Nokta;
  });
// Kartpostal
const KART = kutu(50, 30, 140, 90);
// Tişört
const TISORT = `M80 20 Q120 34 160 20 L200 36 L186 64 L170 56 L170 130 L70 130 L70 56 L54 64 L40 36 Z`;
const yildizSablon = (x: number, y: number, R = 22): string =>
  Array.from({ length: 10 }, (_, i) => {
    const a = (i * Math.PI) / 5 - Math.PI / 2;
    const rr = i % 2 ? R * 0.45 : R;
    return `${i ? "L" : "M"}${r(x + rr * Math.cos(a))} ${r(y + rr * Math.sin(a))}`;
  }).join(" ") + " Z";
// Cam desen
const camDesen: Cizgi = {
  d: `M90 80 Q100 60 120 70 Q140 60 150 80 Q140 100 120 96 Q100 104 90 80 Z M120 70 L120 96`,
  w: 1.8,
};
// String art kalp çivileri
const KALP_NOKTA: [number, number][] = Array.from({ length: 24 }, (_, i) => {
  const t = (i / 24) * 2 * Math.PI;
  return [
    r(120 + 50 * Math.pow(Math.sin(t), 3)),
    r(70 - (40 * Math.cos(t) - 15 * Math.cos(2 * t) - 6 * Math.cos(3 * t) - 2 * Math.cos(4 * t)) * 1.1),
  ];
});
const PANO_S: Cizgi = { d: kutu(30, 10, 180, 124), w: 1.8, dolgu: true };
// Fayans (kare altlık)
const FAYANS = kutu(70, 50, 100, 70);
// İsimlik (üçgen prizma)
const ISIMLIK: Cizgi[] = [
  { d: `M30 120 L170 120 L200 100 L60 100 Z`, w: 1.4 },
  { d: `M30 120 L60 70 L200 70 L170 120 M60 70 L60 100`, w: 1.8, dolgu: true },
  { d: `M30 120 L60 70 L200 70 L170 120 Z`, w: 1.8, dolgu: true },
];
const YAZI: Cizgi = {
  d: `M70 106 L76 86 L82 106 M72 98 L80 98 M92 86 L92 106 L102 106 M110 86 L110 106 M110 86 Q120 86 120 92 Q120 98 110 98 L120 106 M130 86 L130 106 M130 86 L140 106 L140 86`,
  w: 2,
};
// Tarama
const ton = (id: string, sinir: string, k: [number, number, number, number], sonra = 0, aralik = 4): Tarama => ({
  id,
  sinir,
  kutu: k,
  aralik,
  sonra,
});

// ---------- 1. Akışkan Akrilik Resim (6) ----------
export const AKISKAN_RESIM_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: `M20 130 L220 130 L200 120 L40 120 Z`, w: 1.2, kesik: true },
      BARDAKLAR,
      tuval(50, 40, 140, 70),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      bardak(60, 120),
      bardak(100, 120),
      bardak(140, 120),
      { d: `M180 80 L210 80 L206 120 L184 120 Z`, w: 1.4, dolgu: true },
      yayOk(100, 96, 8, 0, 5),
      { d: `M100 72 L108 40`, w: 2 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      bardak(130, 130, 60),
      { d: `M118 120 L142 120 M118 108 L142 108 M117 96 L143 96 M116 84 L144 84`, w: 1 },
      { d: `M70 50 L90 60 L96 70`, w: 1.4 },
      bardak(60, 60, 30),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      BARDAKLAR,
      tuval(50, 40, 140, 70),
      { d: `M106 40 L106 20 L134 20 L134 40`, w: 1.6 },
      yayOk(120, 30, 20, 3.6, 5.8),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      BARDAKLAR,
      tuval(50, 40, 140, 70),
      ...akis(50, 40, 140, 70),
      yayOk(120, 76, 80, 0.3, 0.9),
      ...parmak(196, 70),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      BARDAKLAR,
      tuval(50, 40, 140, 70),
      ...akis(50, 40, 140, 70),
      ...saat(206, 30, 12),
      { d: `M40 30 L200 30`, w: 0.6, kesik: true },
    ],
  },
];

// ---------- 2. Pirografi Kaşık (4) ----------
export const PIROGRAFI_KASIK_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: KASIK, w: 1.8, dolgu: true },
      { d: `M110 76 q6 -6 12 0 q6 6 12 0 q6 -6 12 0 q6 6 12 0`, w: 0.8, kesik: true },
      ...kalem(160, 76),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: KASIK, w: 1.8, dolgu: true },
      { d: `M110 76 q6 -6 12 0 q6 6 12 0`, w: 1.8 },
      { d: `M134 76 q6 -6 12 0 q6 6 12 0`, w: 0.8, kesik: true },
      ...piro(134, 76),
      duman(132, 70),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: KASIK, w: 1.8, dolgu: true },
      { d: `M110 76 q6 -6 12 0 q6 6 12 0 q6 -6 12 0 q6 6 12 0`, w: 1.8 },
      ...zimpara(150, 56, 30, 10),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: KASIK, w: 1.8, dolgu: true },
      { d: `M110 76 q6 -6 12 0 q6 6 12 0 q6 -6 12 0 q6 6 12 0`, w: 1.8 },
      ...bez(70, 50),
      ...yagSisesi(214, 130),
    ],
  },
];

// ---------- 3. Kesme Tahtasına İsim (4) ----------
const TAHTA_K = `M40 40 L180 40 Q190 40 190 50 L190 60 L220 60 L220 90 L190 90 L190 120 Q190 130 180 130 L40 130 Q30 130 30 120 L30 50 Q30 40 40 40 Z`;
const ISIM_K = `M66 100 L76 70 L86 100 M70 90 L82 90 M98 70 L98 100 L114 100 M126 70 L126 100`;
export const PIROGRAFI_KESME_TAHTASI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: TAHTA_K, w: 1.8, dolgu: true },
      karbon(50, 60, 110, 50),
      { d: ISIM_K, w: 0.8, kesik: true },
      ...kalem(150, 90),
    ],
  },
  { cizgiler: [ZEMIN, { d: TAHTA_K, w: 1.8, dolgu: true }, { d: ISIM_K, w: 1.2 }, ...piro(140, 100), duman(138, 94)] },
  { cizgiler: [ZEMIN, { d: TAHTA_K, w: 1.8, dolgu: true }, { d: ISIM_K, w: 4 }, ...piro(140, 100)] },
  {
    cizgiler: [
      ZEMIN,
      { d: TAHTA_K, w: 1.8, dolgu: true },
      { d: ISIM_K, w: 4 },
      { d: kutu(150, 108, 24, 12), w: 1.3, dolgu: true },
      ...yagSisesi(214, 54),
    ],
  },
];

// ---------- 4. Hayvan Portresi (5) ----------
const KEDI_H = `M80 120 Q70 70 90 50 L84 24 L104 40 Q120 34 136 40 L156 24 L150 50 Q170 70 160 120 Z`;
export const PIROGRAFI_PORTRE_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...tahta(40, 14, 160, 120), { d: KEDI_H, w: 1, kesik: true }, ...kalem(160, 110)] },
  {
    cizgiler: [
      ZEMIN,
      ...tahta(40, 14, 160, 120),
      { d: KEDI_H, w: 1.2 },
      { d: `M96 60 l-6 4 M100 70 l-8 4 M144 60 l6 4 M140 70 l8 4 M110 100 l-4 6 M130 100 l4 6`, w: 0.6 },
      ...piro(150, 90),
    ],
  },
  {
    cizgiler: [ZEMIN, ...tahta(40, 14, 160, 120), { d: KEDI_H, w: 1.2 }, ...piro(150, 90)],
    taramalar: [ton("o", KEDI_H, [70, 24, 100, 96], 1, 5)],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tahta(40, 14, 160, 120),
      { d: KEDI_H, w: 1.4 },
      { d: daire(106, 70, 5) + " " + daire(134, 70, 5), w: 1.4, dolgu: true },
      { d: `M114 86 L126 86 L120 94 Z`, w: 1.6, dolgu: true },
    ],
    taramalar: [ton("o", KEDI_H, [70, 24, 100, 96], 1, 3)],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tahta(40, 14, 160, 120),
      { d: KEDI_H, w: 1.4 },
      { d: daire(106, 70, 5) + " " + daire(134, 70, 5), w: 1.4, dolgu: true },
      ...sprey(214, 130),
      ...sis(212, 82, 20),
    ],
    taramalar: [ton("o", KEDI_H, [70, 24, 100, 96], 1, 3)],
  },
];

// ---------- 5. Kütük Saat (4) ----------
export const PIROGRAFI_SAAT_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...kutuk(120, 76), { d: daire(120, 76, 4), w: 1.4 }, ...matkap(120, 72)] },
  { cizgiler: [ZEMIN, ...kutuk(120, 76), rakam(120, 76, 40), ...piro(156, 46)] },
  { cizgiler: [ZEMIN, ...kutuk(120, 76), rakam(120, 76, 36), yapraklar(120, 76, 44, 18), ...piro(162, 102)] },
  {
    cizgiler: [
      ZEMIN,
      ...kutuk(120, 76),
      rakam(120, 76, 36),
      yapraklar(120, 76, 44, 18),
      { d: `M120 76 L120 50 M120 76 L138 86`, w: 2.4 },
      ...firca(170, 120),
    ],
  },
];

// ---------- 6. Mandala Pano (4) ----------
export const PIROGRAFI_MANDALA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...tahta(50, 14, 140, 120), halkalar(120, 74, 4, 12, 12), { d: `M120 74 L180 74`, w: 0.8 }] },
  {
    cizgiler: [
      ZEMIN,
      ...tahta(50, 14, 140, 120),
      halkalar(120, 74, 4, 12, 12),
      dilimler(120, 74, 12, 48),
      { d: `M90 120 A30 30 0 0 1 150 120 Z`, w: 1.3 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tahta(50, 14, 140, 120),
      halkalar(120, 74, 4, 12, 12),
      yapraklar(120, 74, 18, 8),
      yapraklar(120, 74, 42, 16),
      ...kalem(170, 120),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tahta(50, 14, 140, 120),
      { d: halkalar(120, 74, 4, 12, 12).d, w: 1.8 },
      yapraklar(120, 74, 18, 8),
      yapraklar(120, 74, 42, 16),
      ...piro(168, 74),
    ],
    noktalar: noktaHalka(120, 74, 30, 16, 1.2),
  },
];

// ---------- 7. Hatıra Kutusu (4) ----------
export const PIROGRAFI_KUTU_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...KUTU, ...zimpara(100, 40, 40, 12)] },
  {
    cizgiler: [
      ZEMIN,
      ...KUTU,
      { d: `M100 72 Q110 62 120 72 Q130 62 140 72 Q130 78 120 76 Q110 78 100 72 Z`, w: 0.9, kesik: true },
      ...kalem(150, 72),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...KUTU,
      { d: `M100 72 Q110 62 120 72 Q130 62 140 72 Q130 78 120 76 Q110 78 100 72 Z`, w: 1.8 },
      ...piro(150, 70),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...KUTU,
      { d: `M100 72 Q110 62 120 72 Q130 62 140 72 Q130 78 120 76 Q110 78 100 72 Z`, w: 1.8 },
      ...firca(150, 66),
    ],
    taramalar: [ton("k", KAPAK, [50, 60, 150, 20], 0, 6)],
  },
];

// ---------- 8. Deriye Pirografi (4) ----------
export const PIROGRAFI_DERI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      deri(60, 60, 80, 50),
      { d: `M70 80 L100 80 M70 90 L110 90`, w: 1.4 },
      ...piro(110, 90),
      { d: kutu(170, 60, 40, 30), w: 1.5, dolgu: true },
      { d: daire(190, 75, 8), w: 1.2 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      deri(30, 50, 180, 70),
      { d: `M70 90 Q100 60 130 90 Q160 120 180 90`, w: 0.9, kesik: true },
      ...kalem(180, 90),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      deri(30, 50, 180, 70),
      { d: `M70 90 Q100 60 130 90`, w: 1.8 },
      { d: `M130 90 Q160 120 180 90`, w: 0.9, kesik: true },
      ...piro(130, 90),
      ok(150, 120, 180, 120),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      deri(30, 50, 180, 70),
      { d: `M70 90 Q100 60 130 90 Q160 120 180 90`, w: 1.8 },
      ...bez(120, 40),
      onay(210, 30, 1.2),
    ],
  },
];

// ---------- 9. Pirografi Kalemlik (4) ----------
export const PIROGRAFI_KALEMLIK_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...kalemlik(120, 130),
      { d: `M96 90 Q120 70 144 90 Q120 110 96 90 Z`, w: 0.9, kesik: true },
      ...kalem(150, 100),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...kalemlik(120, 130),
      { d: `M96 90 Q120 70 144 90`, w: 1.8 },
      ...piro(144, 90),
      yayOk(120, 60, 34, 0.3, 2.8),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...kalemlik(120, 130),
      { d: `M96 90 Q120 70 144 90 Q120 110 96 90 Z`, w: 1.8 },
      { d: kutu(160, 80, 24, 12), w: 1.3, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...kalemlik(120, 130),
      { d: `M96 90 Q120 70 144 90 Q120 110 96 90 Z`, w: 1.8 },
      ...bez(180, 70),
      ...yagSisesi(40, 130),
    ],
  },
];

// ---------- 10. Akrilik Tuval Manzarası (4) ----------
export const AKRILIK_TUVAL_MANZARA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: GOK, w: 1.8, dolgu: true },
      { d: `M44 40 L196 40 M44 56 L196 56 M44 72 L196 72`, w: 0.8 },
      ...firca(170, 60),
    ],
    taramalar: [ton("g", kutu(40, 20, 160, 30), [40, 20, 160, 30], 0, 6)],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: GOK, w: 1.8, dolgu: true },
      { d: DAG_UZAK, w: 1.3 },
      { d: DAG_YAKIN, w: 1.6, dolgu: true },
      ...firca(170, 96),
    ],
    taramalar: [ton("y", DAG_YAKIN, [40, 84, 160, 46], 2, 3)],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: GOK, w: 1.8, dolgu: true },
      { d: DAG_UZAK, w: 1.3 },
      { d: DAG_YAKIN, w: 1.6, dolgu: true },
      agacSil(60, 126, 1.2),
      agacSil(76, 126),
      agacSil(180, 126, 1.3),
    ],
    taramalar: [ton("y", DAG_YAKIN, [40, 84, 160, 46], 2, 3)],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: GOK, w: 1.8, dolgu: true },
      { d: daire(150, 58, 10), w: 1.4 },
      { d: DAG_UZAK, w: 1.3 },
      { d: DAG_YAKIN, w: 1.6, dolgu: true },
      agacSil(60, 126, 1.2),
      agacSil(180, 126, 1.3),
      ...firca(170, 40),
    ],
  },
];

// ---------- 11. Taşa Nokta Mandala (4) ----------
export const TAS_BOYAMA_MANDALA_ADIM: Cizim[] = [
  {
    cizgiler: [ZEMIN, TAS(120, 84), ...firca(170, 70)],
    taramalar: [ton("t", daire(120, 84, 56, 40), [64, 44, 112, 80], 0, 3)],
  },
  { cizgiler: [ZEMIN, TAS(120, 84), { d: kutu(118, 10, 4, 50), w: 1.3, dolgu: true }], noktalar: [[120, 84, 7]] },
  {
    cizgiler: [ZEMIN, TAS(120, 84), { d: kutu(160, 10, 4, 50), w: 1.3, dolgu: true }],
    noktalar: [
      [120, 84, 7],
      ...noktaHalka(120, 84, 16, 10, 3),
      ...noktaHalka(120, 84, 28, 16, 2.4),
      ...noktaHalka(120, 84, 40, 22, 1.6),
    ],
  },
  {
    cizgiler: [ZEMIN, TAS(120, 84), ...firca(176, 66), onay(210, 30, 1.2)],
    noktalar: [
      [120, 84, 7],
      ...noktaHalka(120, 84, 16, 10, 3),
      ...noktaHalka(120, 84, 28, 16, 2.4),
      ...noktaHalka(120, 84, 40, 22, 1.6),
    ],
  },
];

// ---------- 12. Suluboya Kartpostal (4) ----------
export const SULUBOYA_KARTPOSTAL_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, { d: KART, w: 1.6, dolgu: true }, bant(56, 30), bant(184, 30), bant(56, 120), bant(184, 120)] },
  {
    cizgiler: [
      ZEMIN,
      { d: KART, w: 1.6, dolgu: true },
      { d: daire(110, 66, 22, 16), w: 1, kesik: true },
      ...firca(140, 70),
      damla(110, 60, 0.6),
    ],
  },
  {
    cizgiler: [ZEMIN, { d: KART, w: 1.6, dolgu: true }, { d: daire(110, 66, 22, 16), w: 1 }, ...firca(140, 60)],
    taramalar: [ton("c", daire(110, 66, 22, 16), [88, 50, 44, 32], 1, 3)],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: KART, w: 1.6, dolgu: true },
      { d: daire(110, 66, 22, 16), w: 1 },
      { d: `M110 82 L110 110 M110 96 Q96 90 92 100 M110 100 Q124 94 128 104`, w: 1.4 },
      { d: `M184 120 L210 134`, w: 1.4 },
      bant(212, 134),
    ],
    taramalar: [ton("c", daire(110, 66, 22, 16), [88, 50, 44, 32], 1, 3)],
  },
];

// ---------- 13. Tişört Boyama (4) ----------
export const TISORT_BOYAMA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: TISORT, w: 1.8, dolgu: true },
      { d: kutu(84, 60, 72, 64), w: 1.2, kesik: true },
      ok(200, 100, 160, 100),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: TISORT, w: 1.8, dolgu: true },
      { d: kutu(90, 66, 60, 50), w: 1.3 },
      { d: yildizSablon(120, 90), w: 1.3 },
      bant(90, 66),
      bant(150, 116),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: TISORT, w: 1.8, dolgu: true },
      { d: kutu(90, 66, 60, 50), w: 1.3 },
      { d: yildizSablon(120, 90), w: 1.3 },
      { d: kutu(130, 40, 24, 18), w: 1.4, dolgu: true },
      { d: `M142 58 L130 80`, w: 0.8, kesik: true },
    ],
    taramalar: [ton("y", yildizSablon(120, 90), [98, 68, 44, 42], 2, 3)],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: TISORT, w: 1.8, dolgu: true },
      { d: yildizSablon(120, 90), w: 1.6, dolgu: true },
      { d: `M140 110 L200 110 L210 126 L150 126 Z`, w: 1.6, dolgu: true },
      { d: `M150 110 L144 104`, w: 2 },
    ],
  },
];

// ---------- 14. Cam Kavanoz Boyama (4) ----------
export const CAM_BOYAMA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...kavanoz(120, 134, 80, 100, false), ...bez(180, 70)] },
  {
    cizgiler: [
      ZEMIN,
      ...kavanoz(120, 134, 80, 100, false),
      camDesen,
      { d: `M150 96 L180 70 L186 76 L156 102 Z`, w: 1.3, dolgu: true },
    ],
  },
  {
    cizgiler: [ZEMIN, ...kavanoz(120, 134, 80, 100, false), camDesen, ...firca(150, 90)],
    taramalar: [ton("c", `M90 80 Q100 60 120 70 L120 96 Q100 104 90 80 Z`, [90, 60, 30, 44], 1, 3)],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(60, 40, 120, 90), w: 1.8, dolgu: true },
      { d: kutu(70, 60, 100, 56), w: 1.2 },
      { d: kutu(108, 74, 24, 36), w: 1.4, dolgu: true },
      ...saat(200, 40, 10),
    ],
  },
];

// ---------- 15. String Art (4) ----------
export const STRING_ART_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      PANO_S,
      { d: kutu(60, 20, 120, 104), w: 1.2 },
      { d: KALP_NOKTA.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join(" ") + " Z", w: 1, kesik: true },
      bant(60, 20),
      bant(180, 20),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      PANO_S,
      { d: kutu(60, 20, 120, 104), w: 1.2 },
      {
        d: KALP_NOKTA.slice(0, 14)
          .map(([x, y]) => daire(x, y, 2))
          .join(" "),
        w: 1.4,
        dolgu: true,
      },
      ...cekic(190, 40),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      PANO_S,
      { d: KALP_NOKTA.map(([x, y]) => daire(x, y, 2)).join(" "), w: 1.4, dolgu: true },
      { d: `M60 20 L100 70 L60 124`, w: 1, kesik: true },
      ok(80, 140, 40, 140),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      PANO_S,
      { d: KALP_NOKTA.map(([x, y]) => daire(x, y, 2)).join(" "), w: 1.4, dolgu: true },
      {
        d: KALP_NOKTA.map(([x, y], i) => {
          const [x2, y2] = KALP_NOKTA[(i + 9) % 24];
          return `M${x} ${y} L${x2} ${y2}`;
        }).join(" "),
        w: 0.6,
      },
    ],
  },
];
function cekic(x: number, y: number): Cizgi[] {
  return [
    { d: kutu(x - 12, y - 5, 24, 10), w: 1.5, dolgu: true },
    { d: `M${x + 4} ${y + 5} L${x + 30} ${y + 34} L${x + 35} ${y + 30} L${x + 9} ${y + 1}`, w: 1.4, dolgu: true },
  ];
}

// ---------- 16. Uç ve Teknik Alıştırması (4) ----------
export const PIROGRAFI_BASLANGIC_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...tahta(30, 20, 180, 110),
      { d: `M50 40 L150 40`, w: 0.8 },
      { d: `M50 56 L150 56`, w: 1.6 },
      { d: `M50 72 L150 72`, w: 3 },
      ...piro(150, 72),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tahta(30, 20, 180, 110),
      { d: [0, 1, 2, 3, 4].map((i) => kutu(50 + i * 26, 50, 22, 22)).join(" "), w: 1 },
      ...piro(170, 62),
    ],
    taramalar: [
      ton("a", kutu(76, 50, 22, 22), [76, 50, 22, 22], 1, 6),
      ton("b", kutu(102, 50, 22, 22), [102, 50, 22, 22], 1, 4),
      ton("c", kutu(128, 50, 22, 22), [128, 50, 22, 22], 1, 2.5),
      ton("d", kutu(154, 50, 22, 22), [154, 50, 22, 22], 1, 1.6),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tahta(30, 20, 180, 110),
      { d: kutu(50, 50, 30, 30) + " " + kutu(100, 50, 30, 30) + " " + kutu(150, 50, 30, 30), w: 1 },
      { d: daire(165, 65, 8) + " " + daire(165, 65, 4), w: 0.8 },
    ],
    taramalar: [
      ton("x", kutu(100, 50, 30, 30), [100, 50, 30, 30], 1, 4),
      { ...ton("y", kutu(100, 50, 30, 30), [100, 50, 30, 30], 1, 4), ters: true },
    ],
    noktalar: [
      [56, 56, 1.2],
      [64, 60, 1.2],
      [72, 56, 1.2],
      [58, 68, 1.2],
      [68, 72, 1.2],
      [76, 66, 1.2],
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tahta(30, 20, 180, 110),
      { d: `M50 40 L110 40 M50 60 L110 60 M50 80 L110 80`, w: 2 },
      { d: `M130 40 L170 40 M130 60 L160 60 M130 80 L176 80`, w: 0.8 },
      ...kalem(180, 100),
    ],
  },
];

// ---------- 17. Akışkan Bardak Altlıkları (5) ----------
export const AKISKAN_RESIM_BARDAK_ALTI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      bardak(70, 120),
      bardak(110, 120),
      bardak(150, 120),
      { d: `M150 90 L158 60`, w: 2 },
      yayOk(150, 100, 8, 0, 5),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      bardak(120, 130, 60),
      { d: `M108 120 L132 120 M108 108 L132 108 M107 96 L133 96`, w: 1 },
      bardak(70, 60, 30),
      { d: `M80 40 L100 60`, w: 1.4 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: FAYANS, w: 1.8, dolgu: true },
      { d: `M106 50 L106 30 L134 30 L134 50`, w: 1.6 },
      yayOk(120, 40, 20, 3.6, 5.8),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: FAYANS, w: 1.8, dolgu: true },
      ...akis(70, 50, 100, 70),
      yayOk(120, 86, 60, 0.3, 1),
      { d: `M70 120 Q72 128 70 134 M170 120 Q168 128 170 134`, w: 1 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: FAYANS, w: 1.8, dolgu: true },
      ...akis(70, 50, 100, 70),
      ...saat(206, 30, 12),
      { d: kutu(70, 120, 100, 4), w: 1.2, dolgu: true },
    ],
  },
];

// ---------- 18. Masa İsimliği (4) ----------
export const PIROGRAFI_ISIMLIK_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...ISIMLIK, ...zimpara(110, 52, 40, 12)] },
  {
    cizgiler: [
      ZEMIN,
      ...ISIMLIK,
      { d: YAZI.d, w: 0.8, kesik: true },
      { d: `M115 74 L115 116`, w: 0.6, kesik: true },
      ...kalem(150, 100),
    ],
  },
  { cizgiler: [ZEMIN, ...ISIMLIK, YAZI, ...piro(140, 100), duman(138, 94)] },
  { cizgiler: [ZEMIN, ...ISIMLIK, YAZI, ...bez(196, 40), ...yagSisesi(30, 60), onay(210, 110, 1.2)] },
];
