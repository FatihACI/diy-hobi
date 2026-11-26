// Deri kategorisi (Altın 40 dışı 18 proje): adım sahneleri (viewBox 0 0 240 150).
// Adım sayısı ve sırası src/data/ek/deri.ts içeriğiyle birebir eşleşir.
import { Cizgi, Cizim, Tarama, daire, kutu } from "../arac";
import {
  bez,
  bicak,
  cetvel,
  damla,
  firca,
  kablo,
  kalem,
  makas,
  ok,
  onay,
  parmak,
  saat,
  yayOk,
  ZEMIN,
  zimpara,
} from "./parca";

// ---------- Ortak parçalar ----------
// Deri parça (köşeleri yuvarlak dikdörtgen): sol üst (x,y)
const deri = (x: number, y: number, en: number, boy: number, rr = 6): Cizgi => ({
  d: `M${x + rr} ${y} L${x + en - rr} ${y} Q${x + en} ${y} ${x + en} ${y + rr} L${x + en} ${y + boy - rr} Q${x + en} ${y + boy} ${x + en - rr} ${y + boy} L${x + rr} ${y + boy} Q${x} ${y + boy} ${x} ${y + boy - rr} L${x} ${y + rr} Q${x} ${y} ${x + rr} ${y} Z`,
  w: 1.8,
  dolgu: true,
});
// Dikiş çizgisi (kesik): dikdörtgen içeriden
const dikis = (x: number, y: number, en: number, boy: number, p = 5, kenar: "hepsi" | "uc" = "hepsi"): Cizgi => ({
  d:
    kenar === "hepsi"
      ? kutu(x + p, y + p, en - 2 * p, boy - 2 * p)
      : `M${x + p} ${y + p} L${x + p} ${y + boy - p} L${x + en - p} ${y + boy - p} L${x + en - p} ${y + p}`,
  w: 1,
  kesik: true,
});
// Kemer şeridi: sol (x,y), en, uç tipi
const kemer = (x: number, y: number, en = 190, k = 16, uc = true): Cizgi => ({
  d: uc
    ? `M${x} ${y} L${x + en - 12} ${y} Q${x + en} ${y + k / 2} ${x + en - 12} ${y + k} L${x} ${y + k} Z`
    : kutu(x, y, en, k),
  w: 1.8,
  dolgu: true,
});
// Delik sırası: x başlangıç, y, adet, aralık
const delikler = (x: number, y: number, n: number, a: number, R = 2): Cizgi => ({
  d: Array.from({ length: n }, (_, i) => daire(x + i * a, y, R)).join(" "),
  w: 1.2,
});
// Zımba (tek delik): uç (x,y)
const zimbaT = (x: number, y: number): Cizgi[] => [
  { d: kutu(x - 3, y - 12, 6, 12), w: 1.4, dolgu: true },
  { d: kutu(x - 7, y - 50, 14, 38), w: 1.6, dolgu: true },
];
// Dişli zımba (pricking iron): uç (x,y)
const disliZimba = (x: number, y: number): Cizgi[] => [
  { d: `M${x - 20} ${y} l2 -8 l3 8 l3 -8 l3 8 l3 -8 l3 8 l3 -8 l3 8 l3 -8 l3 8 l3 -8 l3 8`, w: 1 },
  { d: kutu(x - 20, y - 20, 40, 12), w: 1.6, dolgu: true },
  { d: kutu(x - 6, y - 56, 12, 36), w: 1.6, dolgu: true },
];
// Tokmak: baş merkez (x,y), sap sağ alta
const tokmak = (x: number, y: number): Cizgi[] => [
  { d: kutu(x - 12, y - 16, 24, 32), w: 1.6, dolgu: true },
  { d: `M${x + 10} ${y + 4} L${x + 44} ${y + 30} L${x + 40} ${y + 36} L${x + 6} ${y + 10}`, w: 1.4, dolgu: true },
];
// İki iğne (saraç dikişi): dikiş noktası (x,y)
const saracIgne = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x - 40} ${y - 36} M${x} ${y} L${x + 40} ${y - 36}`, w: 1.3 },
  {
    d: `M${x - 40} ${y - 36} Q${x - 70} ${y - 50} ${x - 80} ${y - 20} M${x + 40} ${y - 36} Q${x + 70} ${y - 50} ${x + 80} ${y - 20}`,
    w: 0.9,
  },
];
// Perçin: (x,y)
const percin = (x: number, y: number): Cizgi => ({ d: daire(x, y, 5) + " " + daire(x, y, 2), w: 1.4, dolgu: true });
// Çıtçıt: (x,y)
const citcit = (x: number, y: number): Cizgi => ({ d: daire(x, y, 6) + " " + daire(x, y, 2.5), w: 1.4, dolgu: true });
// Toka: sol (x,y), yükseklik
const toka = (x: number, y: number, boy = 26): Cizgi[] => [
  {
    d: `M${x} ${y} L${x + 16} ${y} Q${x + 24} ${y} ${x + 24} ${y + 8} L${x + 24} ${y + boy - 8} Q${x + 24} ${y + boy} ${x + 16} ${y + boy} L${x} ${y + boy} Z`,
    w: 2.4,
  },
  { d: `M${x} ${y + boy / 2} L${x + 30} ${y + boy / 2}`, w: 2 },
];
// D halka: (x,y) merkez sol
const dHalka = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y - 10} L${x} ${y + 10} Q${x + 14} ${y + 10} ${x + 14} ${y} Q${x + 14} ${y - 10} ${x} ${y - 10}`,
  w: 2,
});
// Kenar kırıcı: uç (x,y)
const kenarKirici = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x + 10} ${y - 8}`, w: 1.6 },
  {
    d:
      kutu(x + 10, y - 18, 12, 0) +
      ` M${x + 10} ${y - 8} L${x + 40} ${y - 34} L${x + 46} ${y - 28} L${x + 16} ${y - 2}`,
    w: 1.4,
    dolgu: true,
  },
];
// Sünger: (x,y) merkez
const sunger = (x: number, y: number): Cizgi => ({ d: kutu(x - 16, y - 10, 32, 20), w: 1.4, dolgu: true });
// Damga: uç (x,y)
const damga = (x: number, y: number): Cizgi[] => [
  { d: kutu(x - 6, y - 50, 12, 50), w: 1.6, dolgu: true },
  { d: `M${x - 6} ${y} L${x + 6} ${y}`, w: 2.4 },
];
// Saat gövdesi: merkez (x,y)
const saatG = (x: number, y: number): Cizgi[] => [
  { d: daire(x, y, 22), w: 2, dolgu: true },
  { d: daire(x, y, 17), w: 1 },
  { d: `M${x} ${y} L${x} ${y - 12} M${x} ${y} L${x + 8} ${y + 4}`, w: 1.4 },
  { d: kutu(x - 12, y - 28, 24, 6) + " " + kutu(x - 12, y + 22, 24, 6), w: 1.3, dolgu: true },
];
// Boyama tarama
const boya = (id: string, sinir: string, k: [number, number, number, number], sonra = 0, aralik = 4): Tarama => ({
  id,
  sinir,
  kutu: k,
  aralik,
  sonra,
});
// Karton kalıp: sol üst
const karton = (x: number, y: number, en: number, boy: number): Cizgi => ({
  d: kutu(x, y, en, boy),
  w: 1.2,
  kesik: true,
});
// Örgü (deri bileklik): x1→x2
const orgu = (x1: number, x2: number, y: number): Cizgi => {
  let d = "";
  for (let x = x1; x < x2; x += 14)
    d += `M${x} ${y - 8} Q${x + 7} ${y} ${x + 14} ${y + 8} M${x} ${y + 8} Q${x + 7} ${y} ${x + 14} ${y - 8} `;
  return { d: d.trim(), w: 3 };
};
// Bel çantası: orta (cx,y) alt
const BEL: Cizgi = { d: `M50 110 Q50 50 120 50 Q190 50 190 110 Z`, w: 1.8, dolgu: true };
const FERMUAR: Cizgi = { d: `M60 70 Q120 40 180 70`, w: 1.4 };
const fermuarDis: Cizgi = {
  d: `M64 66 l2 4 M76 60 l2 4 M88 56 l2 4 M100 53 l2 4 M112 52 l2 4 M124 52 l2 4 M136 53 l2 4 M148 56 l2 4 M160 60 l2 4 M172 66 l2 4`,
  w: 0.8,
};
// Çanta (önden): sol üst (x,y)
const canta = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y} L${x + 140} ${y} L${x + 150} ${y + 70} L${x - 10} ${y + 70} Z`,
  w: 1.8,
  dolgu: true,
});
// Kablo sarılı: merkez (x,y)
const kabloSarim = (x: number, y: number): Cizgi => ({
  d: daire(x, y, 22, 14) + " " + daire(x, y, 18, 10) + " " + daire(x, y, 14, 7),
  w: 1,
});
// Ayakkabı: sol alt (x,y)
const ayakkabi = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x} ${y} L${x} ${y - 30} Q${x} ${y - 46} ${x + 20} ${y - 46} L${x + 50} ${y - 40} Q${x + 70} ${y - 22} ${x + 120} ${y - 18} Q${x + 140} ${y - 14} ${x + 140} ${y} Z`,
    w: 1.8,
    dolgu: true,
  },
  { d: `M${x} ${y - 6} L${x + 140} ${y - 6}`, w: 1.2 },
];

// ---------- 1. Deri Kemer (5) ----------
export const DERI_KEMER_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      kemer(20, 70, 200, 16, false),
      ...cetvel(20, 96, 200, 8),
      { d: `M180 64 L180 92`, w: 1, kesik: true },
      ...bicak(180, 64),
    ],
  },
  { cizgiler: [ZEMIN, kemer(20, 70, 200), { d: `M208 70 L220 78 L208 86`, w: 1, kesik: true }, ...bicak(178, 62)] },
  {
    cizgiler: [ZEMIN, kemer(20, 70, 200), ...kenarKirici(100, 70), ...firca(160, 96)],
    taramalar: [boya("k", kutu(20, 70, 188, 16), [20, 70, 188, 16], 0, 6)],
  },
  { cizgiler: [ZEMIN, kemer(60, 70, 160), ...toka(30, 65), { d: daire(70, 78, 4, 2), w: 1.2 }, percin(84, 78)] },
  { cizgiler: [ZEMIN, kemer(30, 70, 190), delikler(140, 78, 5, 14, 2.4), ...zimbaT(196, 78)] },
];

// ---------- 2. El Dikimi Deri Cüzdan (6) ----------
export const DERI_CUZDAN_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, karton(30, 40, 110, 80), karton(150, 50, 70, 40), karton(150, 96, 70, 30), ...makas(130, 120)] },
  {
    cizgiler: [ZEMIN, deri(30, 40, 160, 80, 4), karton(40, 50, 110, 60), ...cetvel(40, 46, 120, 6), ...bicak(150, 46)],
  },
  {
    cizgiler: [
      ZEMIN,
      deri(30, 40, 160, 80, 4),
      deri(40, 70, 60, 40, 2),
      deri(120, 70, 60, 40, 2),
      damla(44, 74, 0.5),
      damla(176, 74, 0.5),
    ],
  },
  { cizgiler: [ZEMIN, deri(30, 40, 160, 80, 4), dikis(30, 40, 160, 80), ...disliZimba(100, 46)] },
  { cizgiler: [ZEMIN, deri(30, 40, 160, 80, 4), dikis(30, 40, 160, 80), ...saracIgne(120, 115)] },
  {
    cizgiler: [
      ZEMIN,
      deri(30, 40, 160, 80, 4),
      dikis(30, 40, 160, 80),
      ...kenarKirici(190, 70),
      ...zimpara(90, 22, 40, 12),
      onay(220, 30, 1),
    ],
  },
];

// ---------- 3. Deri Saat Kayışı (5) ----------
export const DERI_SAAT_KAYISI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...saatG(120, 76),
      { d: `M108 40 L132 40 M108 36 L108 44 M132 36 L132 44`, w: 1 },
      ...cetvel(60, 120, 120, 8),
    ],
  },
  { cizgiler: [ZEMIN, kemer(30, 50, 120, 20), kemer(30, 90, 80, 20), ...bicak(160, 56)] },
  {
    cizgiler: [
      ZEMIN,
      kemer(60, 70, 140, 20),
      { d: `M60 70 Q40 80 60 90`, w: 1.8 },
      { d: `M70 74 L70 86`, w: 1, kesik: true },
      ...saracIgne(70, 80).slice(0, 1),
    ],
  },
  { cizgiler: [ZEMIN, kemer(30, 70, 180, 20), delikler(130, 80, 5, 12, 2), ...zimbaT(178, 80)] },
  {
    cizgiler: [
      ZEMIN,
      ...saatG(120, 76),
      kemer(30, 66, 66, 20, false),
      kemer(144, 66, 70, 20),
      { d: `M96 66 L96 86 M144 66 L144 86`, w: 2.4 },
    ],
  },
];

// ---------- 4. Rulo Deri Kalem Kılıfı (4) ----------
export const DERI_KALEMLIK_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, deri(30, 30, 180, 70, 4), deri(30, 104, 180, 26, 3), ...bicak(176, 100)] },
  {
    cizgiler: [
      ZEMIN,
      deri(30, 40, 180, 80, 4),
      deri(30, 80, 180, 40, 2),
      { d: [50, 70, 90, 110, 130, 150, 170, 190].map((x) => `M${x} 80 L${x} 120`).join(" "), w: 1, kesik: true },
      { d: `M60 80 L58 30 M100 80 L102 34`, w: 3 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      deri(30, 40, 180, 80, 4),
      { d: `M210 80 Q230 80 236 100 M210 84 Q226 86 232 110`, w: 1.6 },
      percin(206, 82),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(100, 90, 40, 34), w: 2, dolgu: true },
      { d: daire(100, 90, 30, 24), w: 1, kesik: true },
      { d: `M140 90 Q180 80 200 100 Q190 110 170 100`, w: 1.6 },
    ],
  },
];

// ---------- 5. Örgü Deri Bileklik (4) ----------
export const DERI_BILEKLIK_ADIM: Cizim[] = [
  {
    cizgiler: [ZEMIN, kemer(30, 64, 180, 24, false), { d: `M50 72 L190 72 M50 80 L190 80`, w: 1.2 }, ...bicak(168, 72)],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 64, 20, 24) + " " + kutu(190, 64, 20, 24), w: 1.6, dolgu: true },
      orgu(50, 190, 76),
      yayOk(120, 76, 20, 3.6, 5.6),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 64, 20, 24) + " " + kutu(190, 64, 20, 24), w: 1.6, dolgu: true },
      orgu(50, 190, 76),
      ...parmak(120, 70),
      ok(80, 100, 60, 100),
      ok(160, 100, 180, 100),
    ],
  },
  { cizgiler: [ZEMIN, { d: daire(120, 80, 60, 36), w: 4 }, citcit(66, 70), citcit(66, 90), ...tokmak(40, 40)] },
];

// ---------- 6. Köpek Deri Tasma (5) ----------
export const DERI_TASMA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: daire(120, 76, 50, 30), w: 1.4, kesik: true },
      { d: `M60 120 L180 120 M60 116 L60 124 M180 116 L180 124`, w: 1 },
      ok(120, 30, 120, 44),
    ],
  },
  { cizgiler: [ZEMIN, kemer(20, 70, 200), ...bicak(178, 62)] },
  { cizgiler: [ZEMIN, kemer(70, 70, 150), ...toka(40, 65), dHalka(84, 78), percin(100, 78)] },
  { cizgiler: [ZEMIN, kemer(30, 70, 190), delikler(130, 78, 5, 16, 2.4), ...zimbaT(194, 78)] },
  { cizgiler: [ZEMIN, kemer(30, 70, 190), ...kenarKirici(100, 70), ...bez(170, 60)] },
];

// ---------- 7. Deri Pasaport Kılıfı (4) ----------
export const DERI_PASAPORT_KILIFI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      deri(30, 30, 180, 90, 4),
      { d: `M120 30 L120 120`, w: 0.8, kesik: true },
      deri(40, 124, 60, 12, 2),
      deri(140, 124, 60, 12, 2),
    ],
  },
  {
    cizgiler: [ZEMIN, deri(30, 30, 180, 90, 4), deri(30, 30, 50, 90, 2), deri(160, 30, 50, 90, 2), damla(34, 34, 0.5)],
  },
  { cizgiler: [ZEMIN, deri(30, 30, 180, 90, 4), dikis(30, 30, 180, 90), ...saracIgne(120, 115)] },
  { cizgiler: [ZEMIN, deri(60, 30, 100, 90, 4), dikis(60, 30, 100, 90), ...kenarKirici(160, 70), onay(200, 30, 1.2)] },
];

// ---------- 8. Kablo Toplayıcı (4) ----------
const SERIT = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y} L${x + 70} ${y} Q${x + 80} ${y} ${x + 80} ${y + 8} Q${x + 80} ${y + 16} ${x + 70} ${y + 16} L${x} ${y + 16} Z`,
  w: 1.7,
  dolgu: true,
});
export const DERI_KULAKLIK_TUTUCU_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      deri(30, 40, 180, 80, 4),
      { d: `M50 60 L120 60 Q130 60 130 68 Q130 76 120 76 L50 76 Z`, w: 1, kesik: true },
      { d: daire(58, 68, 3), w: 1, kesik: true },
      ...kalem(130, 70),
    ],
  },
  { cizgiler: [ZEMIN, SERIT(40, 50), SERIT(40, 80), SERIT(40, 110), ...makas(150, 90)] },
  { cizgiler: [ZEMIN, SERIT(60, 70), citcit(70, 78), citcit(130, 78), ...tokmak(160, 50)] },
  {
    cizgiler: [
      ZEMIN,
      kabloSarim(110, 80),
      { d: `M100 62 L100 98 L120 98 L120 62 Z`, w: 1.7, dolgu: true },
      citcit(110, 70),
      kablo(132, 80, 200, 120, 10),
    ],
  },
];

// ---------- 9. Bıçak / Makas Kını (5) ----------
const KIN = `M80 30 L140 30 L150 120 L120 140 L90 120 Z`;
export const DERI_MAKAS_KILIFI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(40, 20, 160, 110), w: 1.2, dolgu: true },
      ...makas(90, 80),
      { d: `M70 50 L150 50 L160 110 L80 110 Z`, w: 1, kesik: true },
      ...kalem(160, 110),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      deri(40, 30, 160, 90, 4),
      { d: `M120 30 L120 120`, w: 1, kesik: true },
      { d: KIN, w: 1.2, kesik: true },
      ...bicak(150, 120),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: KIN, w: 1.8, dolgu: true },
      { d: `M140 30 L150 120 L144 124 L134 34 Z`, w: 1.3, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: KIN, w: 1.8, dolgu: true },
      { d: `M134 36 L142 118`, w: 1, kesik: true },
      ...saracIgne(140, 80),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: KIN, w: 1.8, dolgu: true },
      sunger(190, 60),
      damla(190, 80, 0.7),
      ...parmak(116, 70),
      ...saat(40, 40, 10),
    ],
  },
];

// ---------- 10. Kapaklı Anahtar Kılıfı (4) ----------
const ZARF = `M70 40 L170 40 L170 110 L70 110 Z M70 40 L120 74 L170 40`;
export const DERI_ANAHTAR_CEBI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: `M70 30 L170 30 L170 120 L70 120 Z M70 30 L120 10 L170 30`, w: 1.6, dolgu: true },
      ...bicak(170, 120),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: ZARF, w: 1.8, dolgu: true },
      { d: daire(120, 90, 4), w: 1.4, dolgu: true },
      { d: `M120 94 L120 104 M116 104 L124 104`, w: 1.6 },
      { d: daire(120, 112, 8), w: 1.4 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: ZARF, w: 1.8, dolgu: true },
      { d: `M76 46 L76 104 M164 46 L164 104`, w: 1, kesik: true },
      ...saracIgne(150, 104),
    ],
  },
  { cizgiler: [ZEMIN, { d: ZARF, w: 1.8, dolgu: true }, citcit(120, 64), ...tokmak(160, 30)] },
];

// ---------- 11. Katlanır Deri Tepsi (4) ----------
const KARE = kutu(50, 20, 140, 110);
export const DERI_TABAK_TEPSI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, { d: KARE, w: 1.8, dolgu: true }, ...cetvel(50, 134, 140, 6), ...bicak(176, 128)] },
  {
    cizgiler: [
      ZEMIN,
      { d: KARE, w: 1.8, dolgu: true },
      {
        d:
          kutu(50, 20, 26, 26) +
          " " +
          kutu(164, 20, 26, 26) +
          " " +
          kutu(50, 104, 26, 26) +
          " " +
          kutu(164, 104, 26, 26),
        w: 1,
        kesik: true,
      },
      ...kalem(76, 46),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: KARE, w: 1.8, dolgu: true },
      { d: `M50 20 L76 46 M190 20 L164 46 M50 130 L76 104 M190 130 L164 104`, w: 1, kesik: true },
      { d: daire(64, 32, 2) + " " + daire(176, 32, 2) + " " + daire(64, 118, 2) + " " + daire(176, 118, 2), w: 1.2 },
      ...zimbaT(176, 32),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M50 120 L190 120 L176 80 L64 80 Z`, w: 1.8, dolgu: true },
      { d: `M50 120 L40 96 L64 80 M190 120 L200 96 L176 80`, w: 1.6 },
      citcit(46, 100),
      citcit(194, 100),
    ],
  },
];

// ---------- 12. Deriye Damga (4) ----------
export const DERI_DAMGALAMA_ADIM: Cizim[] = [
  {
    cizgiler: [ZEMIN, deri(30, 60, 180, 60, 4), sunger(120, 50), damla(120, 66, 0.6)],
    taramalar: [boya("n", kutu(30, 60, 180, 60), [30, 60, 180, 60], 0, 8)],
  },
  {
    cizgiler: [
      ZEMIN,
      deri(30, 60, 180, 60, 4),
      { d: `M80 90 Q100 70 120 90 Q140 110 160 90`, w: 1, kesik: true },
      ...kalem(160, 90),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      deri(30, 60, 180, 60, 4),
      { d: `M80 90 Q100 70 120 90`, w: 2 },
      ...damga(130, 88),
      ...tokmak(130, 26),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      deri(30, 60, 180, 60, 4),
      { d: `M80 90 Q100 70 120 90 Q140 110 160 90`, w: 2 },
      ...firca(170, 100),
      ...saat(40, 30, 10),
    ],
  },
];

// ---------- 13. Deri Boyama ve Patina (4) ----------
export const DERI_BOYAMA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, deri(30, 60, 180, 60, 4), ...bez(130, 50)] },
  {
    cizgiler: [
      ZEMIN,
      deri(30, 60, 180, 60, 4),
      { d: daire(110, 90, 14) + " " + daire(110, 90, 26, 18), w: 1, kesik: true },
      sunger(110, 90),
    ],
    taramalar: [boya("b", kutu(30, 60, 180, 60), [30, 60, 180, 60], 0, 6)],
  },
  {
    cizgiler: [ZEMIN, deri(30, 60, 180, 60, 4), { d: kutu(36, 66, 168, 48), w: 3 }, ...firca(180, 100)],
    taramalar: [boya("b", kutu(30, 60, 180, 60), [30, 60, 180, 60], 0, 3)],
  },
  {
    cizgiler: [
      ZEMIN,
      deri(30, 60, 180, 60, 4),
      ...bez(120, 50),
      { d: `M60 70 l10 -10 M180 70 l10 -10`, w: 1 },
      onay(210, 30, 1.2),
    ],
    taramalar: [boya("b", kutu(30, 60, 180, 60), [30, 60, 180, 60], 0, 6)],
  },
];

// ---------- 14. Deri Defter Kılıfı (4) ----------
export const DERI_KITAP_KAPAGI_ADIM: Cizim[] = [
  {
    cizgiler: [ZEMIN, deri(30, 30, 180, 100, 4), { d: kutu(60, 40, 60, 80), w: 1.2, kesik: true }, ...bicak(176, 128)],
  },
  {
    cizgiler: [
      ZEMIN,
      deri(30, 30, 180, 100, 4),
      { d: `M120 30 L120 130`, w: 0.8, kesik: true },
      { d: [46, 63, 80, 97, 114].map((y) => daire(120, y, 2)).join(" "), w: 1.2 },
      { d: daire(206, 80, 2), w: 1.2 },
      ...zimbaT(206, 80),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      deri(30, 30, 180, 100, 4),
      { d: kutu(126, 40, 74, 80), w: 1.4, dolgu: true },
      { d: `M120 46 L120 114`, w: 1.6 },
      { d: `M118 46 Q160 40 160 50 M118 114 Q160 120 160 110`, w: 1.2 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      deri(70, 30, 100, 100, 4),
      { d: `M170 80 L60 80`, w: 2 },
      { d: daire(170, 80, 2), w: 1.2 },
      onay(200, 30, 1.2),
    ],
  },
];

// ---------- 15. Deri Bel Çantası (5) ----------
export const DERI_KEMER_CANTA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      karton(30, 30, 80, 60),
      karton(120, 30, 80, 60),
      karton(30, 100, 170, 20),
      karton(210, 40, 20, 50),
      ...makas(120, 130),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      BEL,
      FERMUAR,
      fermuarDis,
      { d: kutu(176, 64, 8, 12), w: 1.3, dolgu: true },
      ...saracIgne(120, 52).slice(0, 1),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      BEL,
      FERMUAR,
      fermuarDis,
      { d: `M54 104 Q54 56 120 56 Q186 56 186 104`, w: 1, kesik: true },
      ...saracIgne(150, 104),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M50 110 Q50 50 120 50 Q190 50 190 110 Z`, w: 1.8, dolgu: true },
      { d: kutu(70, 70, 24, 40) + " " + kutu(146, 70, 24, 40), w: 1.6, dolgu: true },
      { d: `M74 74 L74 106 M90 74 L90 106 M150 74 L150 106 M166 74 L166 106`, w: 1, kesik: true },
    ],
  },
  { cizgiler: [ZEMIN, BEL, FERMUAR, fermuarDis, ...kenarKirici(190, 110), ...bez(60, 40), onay(210, 30, 1.2)] },
];

// ---------- 16. Deri Bardak Altlığı Seti (4) ----------
export const DERI_SEHPA_ALTLIK_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      deri(20, 40, 200, 90, 4),
      { d: daire(70, 85, 36) + " " + daire(160, 85, 36), w: 1.2, kesik: true },
      ...bicak(196, 85),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(90, 85, 40), w: 1.8, dolgu: true },
      { d: daire(90, 85, 26), w: 1.4 },
      ...damga(160, 90),
      ...tokmak(160, 30),
      sunger(40, 30),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(110, 85, 40), w: 1.8, dolgu: true },
      { d: daire(110, 85, 26), w: 1.4 },
      ...kenarKirici(150, 85),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(110, 85, 40), w: 1.8, dolgu: true },
      { d: daire(110, 85, 26), w: 1.4 },
      ...firca(150, 70),
      damla(200, 40),
    ],
  },
];

// ---------- 17. Deri Ceket / Ayakkabı Bakımı (4) ----------
export const DERI_TAMIR_BAKIM_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...ayakkabi(50, 130), ...firca(150, 90)] },
  { cizgiler: [ZEMIN, ...ayakkabi(50, 130), ...bez(140, 90), yayOk(150, 100, 16, 0, 5)] },
  {
    cizgiler: [
      ZEMIN,
      ...ayakkabi(50, 130),
      { d: daire(200, 50, 16, 8), w: 1.6, dolgu: true },
      ...saat(40, 40, 10),
      ...parmak(120, 100),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...ayakkabi(50, 130),
      { d: `M110 104 L130 96`, w: 1.4 },
      ...parmak(120, 96),
      { d: kutu(180, 40, 20, 40), w: 1.4, dolgu: true },
    ],
  },
];

// ---------- 18. Çantaya Deri Sap (4) ----------
export const DERI_CANTA_SAPI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, canta(50, 60), { d: `M80 60 Q120 0 160 60`, w: 1.6, kesik: true }, ...makas(150, 50)] },
  {
    cizgiler: [
      ZEMIN,
      kemer(30, 50, 180, 14),
      kemer(30, 80, 180, 14),
      ...cetvel(30, 110, 180, 8),
      ...kenarKirici(210, 60),
    ],
  },
  {
    cizgiler: [ZEMIN, canta(50, 60), { d: daire(80, 70, 2.4) + " " + daire(160, 70, 2.4), w: 1.2 }, ...zimbaT(160, 70)],
  },
  {
    cizgiler: [
      ZEMIN,
      canta(50, 60),
      { d: `M80 70 Q80 10 120 10 Q160 10 160 70`, w: 6 },
      { d: `M80 70 Q80 10 120 10 Q160 10 160 70`, w: 3.6 },
      percin(80, 70),
      percin(160, 70),
    ],
  },
];
