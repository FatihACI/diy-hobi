// Takı kategorisi (Altın 40 dışı 18 proje): adım sahneleri (viewBox 0 0 240 150).
// Adım sayısı ve sırası src/data/ek/taki.ts içeriğiyle birebir eşleşir.
import { Cizgi, Cizim, daire, kutu, yuvarla as r } from "../arac";
import {
  alev,
  bez,
  cetvel,
  damla,
  firca,
  kalem,
  makas,
  ok,
  onay,
  parmak,
  saat,
  termometre,
  yayOk,
  ZEMIN,
} from "./parca";

// ---------- Ortak parçalar ----------
// Doğal taş (oval): merkez (x,y)
const tas = (x: number, y: number, rx = 18, ry = 26): Cizgi[] => [
  { d: daire(x, y, rx, ry), w: 1.7, dolgu: true },
  { d: `M${x - rx * 0.4} ${y - ry * 0.5} Q${x - rx * 0.2} ${y - ry * 0.7} ${x} ${y - ry * 0.6}`, w: 0.8 },
];
// Kalın tel çerçeve (taş etrafı)
const cerceve = (x: number, y: number, rx = 22, ry = 30): Cizgi => ({
  d: daire(x, y, rx, ry) + " " + daire(x, y, rx + 4, ry + 4),
  w: 1.4,
});
// Sarım: x, y1→y2 sık çizgiler
const sarim = (x: number, y1: number, y2: number, en = 8): Cizgi => ({
  d: Array.from(
    { length: Math.floor((y2 - y1) / 3) },
    (_, i) => `M${x - en / 2} ${y1 + i * 3} L${x + en / 2} ${y1 + i * 3 + 2}`,
  ).join(" "),
  w: 0.9,
});
// Yuvarlak pense: uç (x,y), sap aşağı sağa
const pense = (x: number, y: number): Cizgi[] => [
  { d: `M${x - 3} ${y} L${x - 4} ${y + 20} M${x + 3} ${y} L${x + 4} ${y + 20}`, w: 2.2 },
  { d: daire(x, y + 22, 3), w: 1.2, dolgu: true },
  {
    d: `M${x - 4} ${y + 24} Q${x - 10} ${y + 50} ${x - 20} ${y + 70} M${x + 4} ${y + 24} Q${x + 12} ${y + 50} ${x + 24} ${y + 70}`,
    w: 3.2,
  },
];
// Keski: uç (x,y), sap sağa
const keski = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y - 2} L${x + 14} ${y - 6} L${x + 14} ${y + 6} L${x} ${y + 2} Z`, w: 1.3, dolgu: true },
  {
    d: `M${x + 14} ${y - 6} Q${x + 34} ${y - 10} ${x + 54} ${y - 18} M${x + 14} ${y + 6} Q${x + 34} ${y + 10} ${x + 54} ${y + 18}`,
    w: 3,
  },
];
// Zincir: (x1,y1)→(x2,y2) yukarı kavis
const zincir = (x1: number, y1: number, x2: number, y2: number, sark = 30): Cizgi => ({
  d: `M${x1} ${y1} Q${(x1 + x2) / 2} ${Math.min(y1, y2) - sark} ${x2} ${y2}`,
  w: 1.4,
  kesik: true,
});
// Boncuk: merkez (x,y)
const boncuk = (x: number, y: number, R = 6, harf = false): Cizgi[] =>
  harf
    ? [
        { d: kutu(x - R, y - R, 2 * R, 2 * R), w: 1.4, dolgu: true },
        { d: `M${x - 2} ${y - 3} L${x - 2} ${y + 3} M${x - 2} ${y} L${x + 2} ${y}`, w: 0.9 },
      ]
    : [{ d: daire(x, y, R), w: 1.4, dolgu: true }];
// İp düz: x1→x2
const ip = (x1: number, x2: number, y: number): Cizgi => ({ d: `M${x1} ${y} L${x2} ${y}`, w: 1.1 });
// Kilit (istakoz): (x,y)
const kilit = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y} Q${x + 14} ${y - 10} ${x + 16} ${y + 4} Q${x + 14} ${y + 14} ${x} ${y + 6} M${x + 2} ${y + 2} L${x + 10} ${y + 2}`,
  w: 1.5,
  dolgu: true,
});
// İnci: merkez
const inci = (x: number, y: number): Cizgi[] => [
  { d: daire(x, y, 7), w: 1.4, dolgu: true },
  { d: `M${x - 3} ${y - 3} q2 -2 4 0`, w: 0.7 },
];
const dugum = (x: number, y: number): Cizgi => ({ d: daire(x, y, 2), w: 1.2, dolgu: true });
// Mandrel (konik çubuk): sol (x,y)
const mandrel = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y - 6} L${x + 160} ${y - 14} L${x + 160} ${y + 14} L${x} ${y + 6} Z`, w: 1.6, dolgu: true },
  {
    d: Array.from({ length: 8 }, (_, i) => `M${x + 20 + i * 18} ${y - 7 - i} L${x + 20 + i * 18} ${y - 3 - i}`).join(
      " ",
    ),
    w: 0.8,
  },
];
// Halka küpe: merkez (x,y)
const halka = (x: number, y: number, R = 26, kanca = false): Cizgi[] => [
  { d: `M${x + 4} ${y - R} A${R} ${R} 0 1 1 ${x - 4} ${y - R}`, w: 1.8 },
  ...(kanca ? [{ d: `M${x - 4} ${y - R} q-4 -6 2 -8 M${x + 4} ${y - R} q6 0 4 6`, w: 1.4 }] : []),
];
// Küpe kancası: alt ilmek (x,y)
const kupeKanca = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y} Q${x - 4} ${y - 4} ${x} ${y - 8} Q${x + 18} ${y - 30} ${x + 4} ${y - 44} Q${x - 10} ${y - 50} ${x - 14} ${y - 36} L${x - 14} ${y - 20}`,
  w: 1.5,
});
// İğneli çivi: üst (x,y), boncuk aşağıda
const igneliCivi = (x: number, y: number, ilmek = false): Cizgi[] => [
  {
    d: ilmek
      ? `M${x} ${y + 40} L${x} ${y + 6} Q${x} ${y} ${x - 5} ${y} Q${x - 10} ${y} ${x - 10} ${y - 5} Q${x - 10} ${y - 10} ${x - 5} ${y - 10} Q${x} ${y - 10} ${x} ${y - 4}`
      : `M${x} ${y + 40} L${x} ${y - 14}`,
    w: 1.4,
  },
  { d: kutu(x - 4, y + 40, 8, 3), w: 1.2, dolgu: true },
];
// Chainmaille halka: merkez, yatıklık
const mHalka = (x: number, y: number, acik = false, yatay = false): Cizgi => ({
  d: yatay ? daire(x, y, 9, 5) : acik ? `M${x + 2} ${y - 7} A7 7 0 1 1 ${x - 2} ${y - 7}` : daire(x, y, 7),
  w: 1.5,
});
// Kareli kağıt: sol üst
const kareli = (x: number, y: number, en: number, boy: number, a = 10): Cizgi[] => {
  let d = "";
  for (let i = 0; i <= en; i += a) d += `M${x + i} ${y} L${x + i} ${y + boy} `;
  for (let j = 0; j <= boy; j += a) d += `M${x} ${y + j} L${x + en} ${y + j} `;
  return [
    { d: kutu(x, y, en, boy), w: 1.4, dolgu: true },
    { d: d.trim(), w: 0.5 },
  ];
};
// Kum boncuk ızgarası (peyote): sol üst (x,y), n sütun, m sıra
const peyote = (x: number, y: number, n: number, m: number, dolu: [number, number][] = []): Cizgi[] => {
  const d: string[] = [],
    f: string[] = [];
  for (let j = 0; j < m; j++)
    for (let i = 0; i < n; i++) {
      const cx = x + i * 10,
        cy = y + j * 8 + (i % 2) * 4;
      (dolu.some(([a, b]) => a === i && b === j) ? f : d).push(kutu(cx, cy, 8, 7));
    }
  return [{ d: d.join(" "), w: 1 }, ...(f.length ? [{ d: f.join(" "), w: 1, dolgu: true }] : [])];
};
// Saç tokası (çıtçıt): sol (x,y)
const sacTokasi = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y} L${x + 150} ${y - 6} Q${x + 160} ${y} ${x + 150} ${y + 6} L${x} ${y + 12} Q${x - 10} ${y + 6} ${x} ${y} Z`,
  w: 1.7,
  dolgu: true,
});
// Kabuk: (x,y)
const kabuk = (x: number, y: number): Cizgi => ({
  d: `M${x - 8} ${y + 6} Q${x - 10} ${y - 8} ${x} ${y - 10} Q${x + 10} ${y - 8} ${x + 8} ${y + 6} Z M${x} ${y - 10} L${x - 4} ${y + 6} M${x} ${y - 10} L${x} ${y + 6} M${x} ${y - 10} L${x + 4} ${y + 6}`,
  w: 1.2,
  dolgu: true,
});
// Keçe (yuvarlak broş): merkez
const keceB = (x: number, y: number, R = 34): Cizgi => ({ d: daire(x, y, R), w: 1.6, dolgu: true });
const ciceK = (x: number, y: number): Cizgi => ({
  d:
    Array.from({ length: 6 }, (_, i) => {
      const a = (i * Math.PI) / 3;
      return daire(r(x + 12 * Math.cos(a)), r(y + 12 * Math.sin(a)), 6);
    }).join(" ") +
    " " +
    daire(x, y, 5),
  w: 1.1,
});
// Kase: orta (cx,y) üst
const kase = (cx: number, y: number, en = 120, boy = 50): Cizgi => ({
  d: `M${cx - en / 2} ${y} Q${cx - en / 2} ${y + boy} ${cx} ${y + boy} Q${cx + en / 2} ${y + boy} ${cx + en / 2} ${y}`,
  w: 1.8,
  dolgu: true,
});
const folyoCizgi = (cx: number, y: number, en = 100): Cizgi => ({
  d: `M${cx - en / 2} ${y} l10 -3 l10 3 l10 -3 l10 3 l10 -3 l10 3 l10 -3 l10 3 l10 -3 l10 3`,
  w: 1,
});
// Pano çerçeve
const PANO: Cizgi = { d: kutu(50, 20, 140, 110) + " " + kutu(60, 30, 120, 90), w: 1.8, dolgu: true };
const kafes = (x: number, y: number, en: number, boy: number, a = 10): Cizgi => {
  let d = "";
  for (let i = a; i < en; i += a) d += `M${x + i} ${y} L${x + i} ${y + boy} `;
  for (let j = a; j < boy; j += a) d += `M${x} ${y + j} L${x + en} ${y + j} `;
  return { d: d.trim(), w: 0.6 };
};
const sKanca = (x: number, y: number): Cizgi => ({ d: `M${x} ${y} q6 0 6 6 q0 6 -6 6 q-6 0 -6 6 q0 6 6 6`, w: 1.4 });
// Fırın: sol üst
const firin = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 110, 84), w: 1.8, dolgu: true },
  { d: kutu(x + 10, y + 22, 90, 52), w: 1.3 },
  { d: daire(x + 20, y + 11, 3) + " " + daire(x + 34, y + 11, 3), w: 1 },
];
// Kristal: üst (x,y)
const kristal = (x: number, y: number): Cizgi => ({
  d: `M${x - 8} ${y} L${x + 8} ${y} L${x + 12} ${y + 40} L${x} ${y + 56} L${x - 12} ${y + 40} Z M${x - 8} ${y} L${x} ${y + 56} M${x + 8} ${y} L${x} ${y + 56}`,
  w: 1.4,
  dolgu: true,
});
// Kare düğüm
const kare = (x: number, y: number, en = 14): Cizgi => ({
  d: `M${x - en / 2} ${y - 4} Q${x} ${y + 4} ${x + en / 2} ${y - 4} M${x - en / 2} ${y + 4} Q${x} ${y - 4} ${x + en / 2} ${y + 4}`,
  w: 1.4,
});
// Yapıştırıcı damla tüpü: uç (x,y)
const tutkal = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x + 8} ${y - 3} L${x + 8} ${y + 3} Z`, w: 1.1, dolgu: true },
  { d: `M${x + 8} ${y - 7} L${x + 44} ${y - 9} L${x + 44} ${y + 9} L${x + 8} ${y + 7} Z`, w: 1.5, dolgu: true },
];
// Hayat ağacı dalı: taban (x,y) yukarı
const dal = (x: number, y: number, egim = 0): Cizgi => ({
  d: `M${x} ${y} Q${x + egim / 2} ${y - 20} ${x + egim} ${y - 34}`,
  w: 1.2,
});

// Sabit sahne parçaları
const KOLYE_TAS = [...tas(120, 84), cerceve(120, 84)];
const HAYAT_HALKA: Cizgi = { d: daire(120, 76, 50) + " " + daire(120, 76, 46), w: 1.6 };

// ---------- 1. Tel Sarma Taş Kolye (5) ----------
export const TEL_SARMA_KOLYE_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...KOLYE_TAS, { d: `M120 50 L120 30 M116 50 L110 30 M124 50 L130 30`, w: 1.4 }] },
  { cizgiler: [ZEMIN, ...KOLYE_TAS, sarim(96, 70, 100), sarim(144, 70, 100), { d: `M150 80 Q180 60 200 90`, w: 0.9 }] },
  {
    cizgiler: [
      ZEMIN,
      ...KOLYE_TAS,
      sarim(96, 70, 100),
      sarim(144, 70, 100),
      { d: daire(120, 44, 7), w: 1.6 },
      ...pense(146, 38),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...KOLYE_TAS,
      sarim(96, 70, 100),
      sarim(144, 70, 100),
      { d: daire(120, 44, 7), w: 1.6 },
      ...keski(150, 54),
      ...parmak(96, 52),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...KOLYE_TAS,
      sarim(96, 70, 100),
      sarim(144, 70, 100),
      { d: daire(120, 44, 7), w: 1.6 },
      zincir(120, 37, 30, 10, 20),
      zincir(120, 37, 210, 10, 20),
    ],
  },
];

// ---------- 2. Harf Boncuklu İsim Bilekliği (4) ----------
const ISIM = [100, 112, 124, 136];
export const TAKI_ISIMLI_BILEKLIK_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: daire(120, 76, 40, 24), w: 1.2, kesik: true },
      ...cetvel(40, 120, 160, 8),
      { d: `M80 76 L160 76`, w: 1 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ip(30, 210, 76),
      ...ISIM.flatMap((x) => boncuk(x, 76, 6, true)),
      ...[60, 74, 86, 150, 162, 176].flatMap((x) => boncuk(x, 76, 5)),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(120, 76, 60, 34), w: 1.1 },
      ...ISIM.flatMap((x) => boncuk(x, 42, 6, true)),
      dugum(120, 110),
      ...tutkal(130, 116),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(120, 76, 60, 34), w: 1.1 },
      ...ISIM.flatMap((x) => boncuk(x, 42, 6, true)),
      ...boncuk(120, 110, 6),
      ok(100, 120, 112, 112),
      onay(200, 30, 1.2),
    ],
  },
];

// ---------- 3. Düğümlü İnci Kolye (4) ----------
export const TAKI_INCI_KOLYE_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ip(40, 200, 76), kilit(20, 72), dugum(40, 76)] },
  { cizgiler: [ZEMIN, ip(40, 200, 76), kilit(20, 72), ...inci(60, 76), dugum(70, 76), ok(110, 60, 80, 70)] },
  {
    cizgiler: [
      ZEMIN,
      ip(40, 200, 76),
      kilit(20, 72),
      ...[60, 82, 104, 126].flatMap((x) => [...inci(x, 76), dugum(x + 10, 76)]),
      { d: `M140 76 L180 40`, w: 1.6 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M30 50 Q120 140 210 50`, w: 1 },
      ...[60, 80, 100, 120, 140, 160, 180].flatMap((x) =>
        inci(x, r(50 + 180 * ((x - 30) / 180) * (1 - (x - 30) / 180))),
      ),
      kilit(20, 46),
      kilit(206, 46),
    ],
  },
];

// ---------- 4. Tel Halka Küpe (4) ----------
export const TAKI_KUPE_HALKA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(110, 30, 20, 100), w: 1.6, dolgu: true },
      { d: daire(120, 70, 18, 6) + " " + daire(120, 80, 18, 6), w: 1.4 },
    ],
  },
  { cizgiler: [ZEMIN, ...halka(110, 90), ...keski(116, 64), { d: kutu(160, 100, 40, 8), w: 1.3, dolgu: true }] },
  { cizgiler: [ZEMIN, ...halka(110, 90, 26, true), ...pense(140, 50)] },
  {
    cizgiler: [
      ZEMIN,
      ...halka(90, 90, 26, true),
      ...halka(160, 90, 26, true),
      ...boncuk(90, 116, 5),
      ...boncuk(160, 116, 5),
    ],
  },
];

// ---------- 5. Tel Sarma Taşlı Yüzük (4) ----------
export const TAKI_YUZUK_TEL_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...mandrel(30, 80), { d: daire(110, 80, 4, 14), w: 2 }, ok(110, 40, 110, 60)] },
  {
    cizgiler: [
      ZEMIN,
      ...mandrel(30, 80),
      { d: daire(120, 80, 4, 15) + " " + daire(126, 80, 4, 15) + " " + daire(132, 80, 4, 15), w: 1.6 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(120, 90, 30), w: 2 },
      ...boncuk(120, 56, 10),
      { d: `M110 60 L100 40 M130 60 L140 40`, w: 1.4 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(120, 90, 30), w: 2 },
      ...boncuk(120, 56, 10),
      sarim(106, 60, 72, 6),
      sarim(134, 60, 72, 6),
      ...keski(150, 70),
    ],
  },
];

// ---------- 6. Hayat Ağacı Kolye (5) ----------
export const TAKI_HAYAT_AGACI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: Array.from({ length: 8 }, (_, i) => `M${40 + i * 20} 110 L${40 + i * 20} 50`).join(" "), w: 1.2 },
      ...[40, 60, 80, 100].flatMap((x) => [...boncuk(x, 50, 3), ...boncuk(x + 3, 56, 3), ...boncuk(x - 3, 56, 3)]),
      ...keski(180, 110),
    ],
  },
  {
    cizgiler: [ZEMIN, HAYAT_HALKA, { d: `M80 112 L104 90 M100 120 L112 92 M140 120 L128 92 M160 112 L136 90`, w: 1.2 }],
  },
  {
    cizgiler: [
      ZEMIN,
      HAYAT_HALKA,
      { d: `M80 112 L104 90 M100 120 L112 92 M140 120 L128 92 M160 112 L136 90`, w: 1.2 },
      { d: `M112 92 Q116 76 114 62 M128 92 Q124 76 126 62 M116 92 L120 62 M124 92 L120 62`, w: 1.6 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      HAYAT_HALKA,
      { d: `M112 92 Q116 76 114 62 M128 92 Q124 76 126 62`, w: 1.6 },
      dal(114, 62, -40),
      dal(118, 62, -18),
      dal(122, 62, 18),
      dal(126, 62, 40),
      ...[
        [76, 30],
        [100, 28],
        [140, 28],
        [164, 30],
        [90, 40],
        [150, 40],
      ].flatMap(([x, y]) => boncuk(x, y, 3)),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      HAYAT_HALKA,
      { d: `M114 120 Q116 76 114 62 M126 120 Q124 76 126 62`, w: 1.6 },
      dal(114, 62, -40),
      dal(126, 62, 40),
      zincir(120, 26, 40, 0, 10),
      zincir(120, 26, 200, 0, 10),
    ],
  },
];

// ---------- 7. Doğal Taş Sallantılı Küpe (4) ----------
export const TAKI_DOGAL_TAS_KUPE_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...igneliCivi(120, 50), ...boncuk(120, 80, 9), ok(160, 80, 134, 80)] },
  { cizgiler: [ZEMIN, ...igneliCivi(120, 60, true), ...boncuk(120, 90, 9), ...pense(140, 40)] },
  { cizgiler: [ZEMIN, ...igneliCivi(120, 70, true), ...boncuk(120, 100, 9), kupeKanca(115, 60)] },
  {
    cizgiler: [
      ZEMIN,
      ...igneliCivi(120, 70, true),
      sarim(120, 66, 74, 6),
      ...boncuk(120, 100, 9),
      kupeKanca(115, 60),
      onay(190, 40, 1.2),
    ],
  },
];

// ---------- 8. Chainmaille Bileklik (5) ----------
export const TAKI_ZINCIR_BILEKLIK_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...[50, 70, 90, 110].map((x) => mHalka(x, 60)),
      ...[140, 160, 180, 200].map((x) => mHalka(x, 60, true)),
      ...pense(100, 66),
      ...pense(180, 66),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      mHalka(80, 76, false, true),
      mHalka(80, 80, false, true),
      mHalka(100, 76),
      mHalka(104, 76),
      mHalka(124, 76, false, true),
      mHalka(124, 80, false, true),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      mHalka(80, 76),
      mHalka(84, 76),
      mHalka(104, 70, false, true),
      mHalka(104, 82, false, true),
      mHalka(124, 76),
      mHalka(128, 76),
      yayOk(104, 76, 18, 3.4, 5.6),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...[30, 60, 90, 120, 150, 180].flatMap((x) => [
        mHalka(x, 76),
        mHalka(x + 4, 76),
        mHalka(x + 16, 70, false, true),
        mHalka(x + 16, 82, false, true),
      ]),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...[50, 80, 110, 140].flatMap((x) => [
        mHalka(x, 76),
        mHalka(x + 4, 76),
        mHalka(x + 16, 70, false, true),
        mHalka(x + 16, 82, false, true),
      ]),
      kilit(26, 72),
      { d: daire(180, 76, 6), w: 1.6 },
    ],
  },
];

// ---------- 9. Kafes Tel Taş Kolye (4) ----------
export const TAKI_KOLYE_TAS_SARMA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, { d: `M60 110 L180 50 M60 50 L180 110`, w: 1.6 }, sarim(120, 74, 86, 10)] },
  {
    cizgiler: [
      ZEMIN,
      ...tas(120, 90),
      { d: `M120 120 Q90 100 96 60 M120 120 Q150 100 144 60 M120 120 Q110 90 112 60 M120 120 Q130 90 128 60`, w: 1.4 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tas(120, 90),
      { d: `M120 120 Q90 100 116 56 M120 120 Q150 100 124 56`, w: 1.4 },
      sarim(120, 44, 58, 8),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tas(120, 96),
      { d: `M120 126 Q90 106 116 62 M120 126 Q150 106 124 62`, w: 1.4 },
      sarim(120, 50, 64, 8),
      { d: daire(120, 42, 7), w: 1.6 },
      ...pense(140, 30),
    ],
  },
];

// ---------- 10. Peyote Bileklik (5) ----------
export const TAKI_KUM_BONCUK_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...kareli(40, 30, 120, 90), ...kalem(150, 80)] },
  { cizgiler: [ZEMIN, ...peyote(60, 60, 12, 1), ip(40, 60, 64), { d: `M180 64 L210 50`, w: 1 }] },
  {
    cizgiler: [
      ZEMIN,
      ...peyote(60, 50, 12, 2),
      { d: `M180 60 Q196 50 210 30`, w: 1.4 },
      { d: `M210 30 L216 20`, w: 1.6 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...peyote(40, 40, 16, 6, [
        [3, 1],
        [4, 2],
        [5, 1],
        [10, 3],
        [11, 2],
        [12, 3],
      ]),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...peyote(50, 50, 14, 4, [
        [3, 1],
        [4, 2],
        [9, 1],
      ]),
      kilit(30, 60),
      kilit(194, 60),
    ],
  },
];

// ---------- 11. Boncuklu Saç Tokası (4) ----------
export const TAKI_SAC_TOKASI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, sacTokasi(40, 76), sarim(50, 72, 90, 8), { d: `M54 80 Q90 50 130 40`, w: 1.1 }] },
  {
    cizgiler: [
      ZEMIN,
      sacTokasi(40, 76),
      sarim(50, 72, 90, 8),
      ...[70, 86, 102, 118].flatMap((x) => boncuk(x, 74, 6)),
      { d: `M124 76 Q150 50 170 40`, w: 1.1 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      sacTokasi(40, 76),
      ...[70, 86, 102, 118, 134, 150].flatMap((x) => boncuk(x, 74, 6)),
      sarim(170, 70, 88, 8),
      ...tutkal(180, 50),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      sacTokasi(40, 76),
      ...[70, 86, 102, 118, 134, 150].flatMap((x) => boncuk(x, 74, 6)),
      { d: daire(176, 78, 16), w: 1, kesik: true },
      ...parmak(176, 66),
      onay(210, 40, 1.2),
    ],
  },
];

// ---------- 12. Deniz Kabuklu Halhal (4) ----------
export const TAKI_HALHAL_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ip(20, 220, 76),
      kabuk(70, 80),
      kabuk(120, 80),
      kabuk(170, 80),
      ...[95, 145].flatMap((x) => boncuk(x, 76, 5)),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ip(20, 220, 76),
      kabuk(90, 80),
      kabuk(150, 80),
      dugum(78, 76),
      dugum(102, 76),
      dugum(138, 76),
      dugum(162, 76),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(120, 76, 60, 30), w: 1.1 },
      { d: kutu(108, 98, 24, 12), w: 1.5, dolgu: true },
      kabuk(80, 54),
      kabuk(160, 54),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(120, 76, 60, 30), w: 1.1 },
      { d: kutu(108, 98, 24, 12), w: 1.5, dolgu: true },
      { d: `M108 104 L96 120 M132 104 L144 120`, w: 1 },
      ...boncuk(96, 122, 4),
      ...boncuk(144, 122, 4),
    ],
  },
];

// ---------- 13. Kumaş ve Boncuk Broş (4) ----------
export const TAKI_BROSH_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(50, 30, 140, 100), w: 1.4, dolgu: true },
      { d: ciceK(120, 80).d, w: 1, kesik: true },
      ...kalem(150, 90),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(50, 30, 140, 100), w: 1.4, dolgu: true },
      ciceK(120, 80),
      ...[
        [132, 80],
        [126, 90],
        [114, 90],
      ].flatMap(([x, y]) => boncuk(x, y, 3)),
      { d: `M140 70 L190 30`, w: 1.2 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(50, 30, 140, 100), w: 1.4, dolgu: true },
      keceB(120, 80, 26),
      ciceK(120, 80),
      { d: daire(120, 80, 28), w: 1, kesik: true },
      ...makas(150, 100),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      keceB(110, 80, 28),
      ciceK(110, 80),
      { d: `M150 70 L210 70 M210 66 Q218 70 210 74 M150 70 l-6 -4`, w: 1.6 },
    ],
  },
];

// ---------- 14. Katmanlı Zincir Kolye (4) ----------
export const TAKI_KOLYE_UZUNLUK_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: `M30 50 L170 50 M30 70 L190 70 M30 90 L210 90`, w: 1.4, kesik: true },
      ...cetvel(30, 110, 180, 8),
      ...keski(170, 40),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M30 70 L190 70`, w: 1.4, kesik: true },
      { d: daire(26, 70, 4) + " " + daire(194, 70, 4), w: 1.4 },
      ...pense(194, 60),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(100, 30, 40, 16), w: 1.6, dolgu: true },
      { d: daire(108, 46, 3) + " " + daire(120, 46, 3) + " " + daire(132, 46, 3), w: 1.2 },
      { d: `M108 49 Q60 80 40 130 M120 49 Q80 100 60 134 M132 49 Q110 110 90 134`, w: 1.1, kesik: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      zincir(40, 20, 200, 20, -50),
      zincir(40, 20, 200, 20, -70),
      zincir(40, 20, 200, 20, -90),
      { d: `M120 65 L120 74`, w: 1 },
      ...boncuk(120, 80, 5),
    ],
  },
];

// ---------- 15. Gümüş Takı Temizleme (4) ----------
export const TAKI_TEMIZLEME_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      kase(120, 60),
      folyoCizgi(120, 100, 90),
      { d: kutu(160, 20, 30, 20), w: 1.4, dolgu: true },
      ok(170, 44, 140, 80),
    ],
    noktalar: [
      [110, 96, 1],
      [120, 94, 1],
      [130, 97, 1],
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      kase(120, 60),
      folyoCizgi(120, 100, 90),
      { d: `M66 72 q10 -4 20 0 q10 4 20 0 q10 -4 20 0 q10 4 20 0 q10 -4 20 0`, w: 1 },
      { d: daire(110, 96, 8, 3) + " " + daire(130, 98, 5), w: 1.4 },
      ...termometre(200, 40, 50),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      kase(120, 60),
      folyoCizgi(120, 100, 90),
      { d: daire(110, 96, 8, 3) + " " + daire(130, 98, 5), w: 1.4 },
      ...saat(200, 40, 12),
    ],
    noktalar: [
      [110, 84, 1.5],
      [124, 80, 1.2],
      [132, 86, 1.4],
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...bez(100, 90),
      { d: daire(170, 100, 10, 4) + " " + daire(190, 104, 6), w: 1.4 },
      damla(60, 40),
      onay(210, 40, 1.2),
    ],
  },
];

// ---------- 16. Takı Düzenleyici Pano (4) ----------
export const TAKI_SANDIGI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, PANO, ...firca(170, 120)] },
  {
    cizgiler: [
      ZEMIN,
      PANO,
      kafes(60, 30, 120, 90),
      { d: `M60 30 l4 -4 M180 30 l-4 -4 M60 120 l4 4 M180 120 l-4 4`, w: 1.6 },
    ],
  },
  { cizgiler: [ZEMIN, PANO, kafes(60, 30, 120, 90), ...[80, 110, 140, 170].map((x) => sKanca(x, 36))] },
  {
    cizgiler: [
      ZEMIN,
      PANO,
      kafes(60, 30, 120, 90),
      ...[80, 110, 140].map((x) => sKanca(x, 36)),
      { d: `M80 60 Q90 100 100 60 M110 60 Q124 110 140 60`, w: 1.2, kesik: true },
      ...halka(160, 100, 8),
    ],
  },
];

// ---------- 17. Shrink Plastik Kolye (4) ----------
const BUYUK = `M70 30 L170 30 L170 120 L70 120 Z`;
export const TAKI_DIJITAL_BOYAMA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: BUYUK, w: 1.4, dolgu: true },
      { d: `M100 90 Q120 50 140 90 Q120 110 100 90 Z`, w: 1.6 },
      ...kalem(150, 100),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M100 90 Q120 50 140 90 Q120 110 100 90 Z`, w: 1.8, dolgu: true },
      { d: daire(120, 64, 3), w: 1.2 },
      ...makas(150, 100),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...firin(60, 40),
      { d: `M104 90 Q116 84 128 92`, w: 1.6 },
      ...termometre(200, 40, 50),
      yayOk(116, 88, 10, 3.4, 6),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(60, 90, 120, 30), w: 1.8, dolgu: true },
      ok(120, 40, 120, 80),
      { d: `M110 62 Q120 46 130 62 Q120 70 110 62 Z`, w: 1.6, dolgu: true },
      zincir(120, 50, 200, 20, 6),
    ],
  },
];

// ---------- 18. Kristal Uçlu Makrome Kolye (4) ----------
export const TAKI_KRISTAL_SARMA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, kristal(120, 60), { d: `M120 60 L120 20`, w: 1.2 }, dugum(120, 58)] },
  {
    cizgiler: [
      ZEMIN,
      kristal(120, 60),
      { d: `M106 60 L104 30 M134 60 L136 30`, w: 1.2 },
      kare(120, 70, 30),
      kare(120, 86, 28),
      kare(120, 100, 22),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      kristal(120, 60),
      kare(120, 70, 30),
      kare(120, 86, 28),
      { d: `M106 66 L118 40 M134 66 L122 40`, w: 1.2 },
      { d: daire(120, 34, 7), w: 1.4 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      kristal(120, 60),
      kare(120, 70, 30),
      kare(120, 86, 28),
      { d: daire(120, 50, 7), w: 1.4 },
      alev(150, 130, 1.6),
      ...makas(160, 80),
    ],
  },
];
