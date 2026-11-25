// Altın 40 / Doğa & Hayvan: adım sahneleri (viewBox 0 0 240 150)
import { Cizim, daire, kutu, zikzak } from "../arac";
import {
  akvaryum,
  bicak,
  carpi,
  cimbiz,
  damla,
  fide,
  firdondu,
  igne,
  kabarcik,
  kavanoz,
  kursun,
  kusEvi,
  makas,
  ok,
  onay,
  parmak,
  saat,
  saksi,
  samandira,
  sapBitki,
  sis,
  sise,
  sukulent,
  suYuzu,
  tornavida,
  yayOk,
  ZEMIN,
} from "./parca";

const MISINA = (y1: number, y2: number, x = 120) => ({ d: `M${x} ${y1} L${x} ${y2}`, w: 0.9 });
const STOPER = (x: number, y: number) => ({ d: kutu(x - 4, y - 3, 8, 6), w: 1.3, dolgu: true });
const GUNES_YOK = (x: number, y: number) => [{ d: daire(x, y, 9), w: 1.3 }, carpi(x, y, 13)];

// ---------- Şamandıralı olta takımı ----------
export const SAMANDIRALI_TAKIM_ADIM: Cizim[] = [
  // 1) Stoper tak (derinliği belirler)
  {
    cizgiler: [
      { d: "M10 10 L118 6", w: 2.2 },
      MISINA(6, 140),
      STOPER(120, 44),
      ok(132, 70, 132, 50),
      ok(132, 50, 132, 70),
      { d: "M150 44 L150 120 M146 44 L154 44 M146 120 L154 120", w: 0.9 },
      suYuzu(140, 230, 120),
    ],
  },
  // 2) Şamandırayı geçir
  {
    cizgiler: [MISINA(6, 140), STOPER(120, 30), ...samandira(120, 96), ok(140, 110, 140, 70)],
  },
  // 3) Kurşunları kademeli sık
  {
    cizgiler: [
      MISINA(6, 140),
      STOPER(120, 18),
      ...samandira(120, 62),
      kursun(120, 92, 4),
      kursun(120, 104, 3),
      kursun(120, 114, 2.4),
      kursun(120, 122, 2),
      { d: "M150 92 Q160 106 150 122", w: 0.8 },
    ],
  },
  // 4) Fırdöndüyü klinç düğümüyle bağla
  {
    cizgiler: [
      MISINA(6, 96),
      { d: zikzak(120, 72, 120, 92, 6, 3), w: 1 },
      ...firdondu(120, 106),
      { d: daire(160, 104, 22), w: 1 },
      { d: "M160 84 L160 96 " + zikzak(160, 92, 160, 104, 4, 3), w: 1 },
      { d: "M138 106 L128 106", w: 0.8, kesik: true },
    ],
  },
  // 5) Köstek hazırla (50–80 cm, ucunda iğne)
  {
    cizgiler: [
      MISINA(6, 40),
      ...firdondu(120, 50),
      MISINA(59, 110),
      ...igne(120, 110, 1),
      { d: "M150 59 L150 112 M146 59 L154 59 M146 112 L154 112", w: 0.9 },
    ],
  },
  // 6) Ayarla: sadece anten dışarıda
  {
    taramalar: [{ id: "s6", sinir: kutu(10, 72, 220, 70), kutu: [10, 72, 220, 70], aralik: 9 }],
    cizgiler: [
      suYuzu(10, 230, 72),
      { d: "M120 40 L120 58", w: 2 },
      { d: "M120 58 Q127 72 120 88 Q113 72 120 58 Z", w: 1.5, dolgu: true },
      MISINA(88, 136),
      kursun(120, 106, 3.5),
      kursun(120, 116, 2.5),
      onay(140, 50),
    ],
  },
];

// ---------- Balıkçı düğümleri ----------
export const OLTA_DUGUMLERI_ADIM: Cizim[] = [
  // 1) Geliştirilmiş klinç (5–7 tur)
  {
    cizgiler: [
      ...igne(40, 50, 2.6),
      { d: "M40 50 L60 50", w: 1 },
      { d: zikzak(60, 50, 140, 50, 7, 5), w: 1.2 },
      { d: "M140 50 L220 50", w: 1 },
      { d: "M60 50 Q56 32 70 30 Q84 30 80 46", w: 1 },
      ok(110, 30, 76, 34),
    ],
  },
  // 2) Palomar (katlanmış halka, iğne halkadan geçer)
  {
    cizgiler: [
      ...igne(110, 30, 2.4),
      { d: "M110 30 Q90 60 100 96 Q118 116 136 96 Q146 60 110 30", w: 1.1 },
      { d: "M100 96 L60 128 M136 96 L180 128", w: 1 },
      ok(150, 40, 128, 84),
    ],
  },
  // 3) Çift uni (iki uç birbirine kaydırılır)
  {
    cizgiler: [
      { d: "M10 70 L230 70 M10 80 L230 80", w: 1 },
      { d: zikzak(80, 75, 110, 75, 5, 6), w: 1.2 },
      { d: zikzak(130, 75, 160, 75, 5, 6), w: 1.2 },
      ok(60, 104, 100, 104),
      ok(180, 104, 140, 104),
    ],
  },
  // 4) Islat ve yavaşça sık
  {
    cizgiler: [
      { d: "M20 80 L100 80 M140 80 L220 80", w: 1 },
      { d: zikzak(100, 80, 140, 80, 6, 5), w: 1.4 },
      damla(112, 52, 0.9),
      damla(126, 44, 0.8),
      ok(60, 104, 30, 104),
      ok(180, 104, 210, 104),
    ],
  },
  // 5) Sertçe çekerek test et
  {
    cizgiler: [
      ...igne(30, 50, 2.6),
      { d: "M30 50 L70 50", w: 1 },
      { d: zikzak(70, 50, 100, 50, 5, 4), w: 1.4 },
      { d: "M100 50 L200 50", w: 1 },
      ok(170, 76, 220, 76, 1.8),
      onay(130, 100),
    ],
  },
];

// ---------- Bitkili nano akvaryum ----------
const TANK = (x = 60, y = 30, en = 120, boy = 80) => akvaryum(x, y, en, boy);
const DOLAP = [
  { d: kutu(50, 110, 140, 24), w: 1.8, dolgu: true },
  { d: "M120 110 L120 134", w: 1 },
];
export const NANO_BITKILI_ADIM: Cizim[] = [
  // 1) Yeri seç (güneşsiz, sağlam zemin)
  {
    cizgiler: [
      ZEMIN,
      ...DOLAP,
      { d: kutu(60, 34, 120, 76), w: 1.8 },
      ...GUNES_YOK(212, 26),
      { d: "M130 118 L150 118 M140 114 L140 122", w: 0.8 },
    ],
  },
  // 2) Zemini eğimli ser (arka 6 cm, ön 3 cm) — yandan kesit
  {
    taramalar: [{ id: "n2", sinir: "M60 96 L180 84 L180 110 L60 110 Z", kutu: [60, 84, 120, 26], aralik: 4 }],
    cizgiler: [
      ZEMIN,
      ...DOLAP,
      { d: kutu(60, 30, 120, 80), w: 1.8 },
      { d: "M60 96 L180 84", w: 1.4 },
      { d: "M190 84 L190 110 M186 84 L194 84 M50 96 L50 110 M46 96 L54 96", w: 0.9 },
      { d: "M196 70 L206 70", w: 0.6 },
    ],
  },
  // 3) Hardscape (üçte bir kuralı)
  {
    cizgiler: [
      ZEMIN,
      ...DOLAP,
      ...TANK(),
      { d: "M60 98 Q120 92 180 96", w: 1.2 },
      { d: "M100 30 L100 110 M140 30 L140 110", w: 0.6, kesik: true },
      { d: "M86 96 L92 76 L106 70 L114 82 L112 96 Z", w: 1.6, dolgu: true },
      { d: "M118 96 L124 86 L134 90 L132 97 Z", w: 1.4, dolgu: true },
      { d: "M100 96 Q96 70 80 56 M98 80 Q108 64 120 60", w: 1.6 },
    ],
  },
  // 4) Bitkileri cımbızla dik (arkaya uzun, öne kısa)
  {
    cizgiler: [
      ZEMIN,
      ...DOLAP,
      ...TANK(),
      { d: "M60 98 Q120 92 180 96", w: 1.2 },
      ...sapBitki(76, 96, 50),
      ...sapBitki(164, 96, 46),
      ...sapBitki(96, 96, 22),
      ...sapBitki(140, 96, 20),
      ...cimbiz(120, 94),
    ],
  },
  // 5) Suyu tabağın üstüne yavaşça dök
  {
    cizgiler: [
      ZEMIN,
      ...DOLAP,
      { d: kutu(60, 30, 120, 80), w: 1.8 },
      { d: "M60 98 Q120 92 180 96", w: 1.2 },
      { d: "M100 90 Q120 96 140 90", w: 1.6 },
      { d: "M130 14 L170 14 L166 40 L134 40 Z", w: 1.6, dolgu: true },
      { d: "M134 18 L116 10", w: 1.4 },
      { d: "M116 12 Q114 50 120 88", w: 0.8, kesik: true },
    ],
  },
  // 6) Ekipmanı çalıştır (filtre, ısıtıcı, ışık)
  {
    cizgiler: [
      ZEMIN,
      ...DOLAP,
      ...TANK(),
      { d: kutu(54, 20, 132, 8), w: 1.6, dolgu: true },
      { d: "M80 30 L74 60 M120 30 L120 62 M160 30 L166 60", w: 0.6, kesik: true },
      { d: kutu(160, 44, 14, 40), w: 1.4, dolgu: true },
      { d: "M158 48 L150 48", w: 1.4 },
      { d: kutu(68, 40, 6, 50), w: 1.4, dolgu: true },
      { d: daire(71, 80, 3), w: 1 },
      ...saat(212, 40),
    ],
  },
  // 7) Azot döngüsünü bekle (4–6 hafta, test 0)
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(20, 30, 90, 70), w: 1.6, dolgu: true },
      {
        d: "M20 44 L110 44 M38 44 L38 100 M56 44 L56 100 M74 44 L74 100 M92 44 L92 100 M20 62 L110 62 M20 80 L110 80",
        w: 0.6,
      },
      carpi(29, 53, 4),
      carpi(47, 53, 4),
      carpi(65, 53, 4),
      carpi(83, 53, 4),
      carpi(101, 53, 4),
      { d: kutu(140, 40, 12, 50) + " " + kutu(160, 40, 12, 50), w: 1.4, dolgu: true },
      { d: "M140 74 L152 74 M160 74 L172 74", w: 0.8 },
      onay(184, 66),
      { d: "M150 120 Q164 108 180 116 L190 108 L188 124 L180 116 Q164 128 150 120 Z", w: 1.3, dolgu: true },
      ok(124, 118, 144, 118),
    ],
  },
];

// ---------- Sünger filtre ----------
const BORU = (x: number, y: number, boy: number) => ({ d: kutu(x, y, 16, boy), w: 1.6, dolgu: true });
const DELIKLER = (x: number, y1: number, y2: number) => {
  const d: string[] = [];
  for (let y = y1; y <= y2; y += 8) d.push(daire(x + 8, y, 1.6));
  return { d: d.join(" "), w: 0.9 };
};
const SUNGER = (x: number, y: number) => ({ d: kutu(x, y, 56, 62), w: 1.6, dolgu: true });
export const SUNGER_FILTRE_ADIM: Cizim[] = [
  // 1) Borunun alt 12 cm'sini delikle
  {
    cizgiler: [
      ZEMIN,
      BORU(100, 20, 110),
      DELIKLER(100, 82, 124),
      { d: "M86 78 L86 128 M82 78 L90 78 M82 128 L90 128", w: 0.9 },
      { d: "M118 100 L150 100", w: 1.6 },
      { d: zikzak(122, 100, 146, 100, 6, 2.5), w: 0.8 },
      { d: kutu(150, 92, 16, 16) + " " + kutu(166, 88, 50, 24), w: 1.6, dolgu: true },
    ],
  },
  // 2) Alt ucu kapakla kapat
  {
    cizgiler: [
      ZEMIN,
      BORU(112, 20, 92),
      DELIKLER(112, 80, 108),
      { d: kutu(108, 120, 24, 10), w: 1.6, dolgu: true },
      ok(150, 134, 150, 116),
    ],
  },
  // 3) Süngeri del ve boruyu geçir
  {
    cizgiler: [
      ZEMIN,
      SUNGER(92, 70),
      { d: "M112 70 L112 132 M128 70 L128 132", w: 1, kesik: true },
      BORU(112, 6, 56),
      ok(150, 30, 150, 60),
    ],
    noktalar: [
      [100, 80, 0.8],
      [140, 90, 0.8],
      [104, 110, 0.8],
      [138, 122, 0.8],
      [100, 96, 0.8],
      [142, 106, 0.8],
    ],
  },
  // 4) Hava taşını borunun içine indir
  {
    cizgiler: [
      ZEMIN,
      SUNGER(92, 70),
      { d: kutu(112, 20, 16, 112), w: 1.4, kesik: true },
      { d: "M120 4 L120 76", w: 1.2 },
      { d: kutu(116, 76, 8, 12), w: 1.4, dolgu: true },
      ok(146, 40, 146, 70),
    ],
  },
  // 5) Çek valfi hortuma tak, pompaya bağla
  {
    cizgiler: [
      ZEMIN,
      BORU(40, 50, 80),
      { d: "M48 50 Q48 20 90 20 L110 20", w: 1.4 },
      { d: kutu(110, 14, 26, 12), w: 1.5, dolgu: true },
      ok(114, 20, 132, 20),
      { d: "M136 20 L170 20 Q190 20 190 50 L190 90", w: 1.4 },
      { d: kutu(166, 90, 50, 34), w: 1.8, dolgu: true },
      { d: "M174 104 L208 104 M174 112 L208 112", w: 0.7 },
    ],
  },
  // 6) Akvaryumda çalıştır
  {
    cizgiler: [
      ZEMIN,
      ...akvaryum(40, 20, 160, 110),
      { d: kutu(140, 76, 40, 52), w: 1.5, dolgu: true },
      { d: kutu(154, 30, 12, 46), w: 1.4, dolgu: true },
      kabarcik(160, 26),
      ok(110, 104, 136, 104),
      ok(110, 120, 136, 118),
    ],
  },
];

// ---------- Kapalı yosun terraryumu (kavanoz kesiti) ----------
const KAV = kavanoz(120, 132, 110, 120, false);
const CAKIL = (y: number) => ({
  d: [74, 86, 98, 110, 122, 134, 146, 158].map((x, i) => daire(x, y - (i % 2 ? 4 : 5), i % 2 ? 4 : 5)).join(" "),
  w: 1,
});
const KARBON: [number, number, number][] = [70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170].map((x, i) => [
  x,
  120 - (i % 2),
  1.2,
]);
export const KAPALI_TERRARYUM_ADIM: Cizim[] = [
  // 1) Drenaj taşı (2–3 cm)
  { cizgiler: [ZEMIN, ...KAV, CAKIL(132), { d: "M184 118 L184 132 M180 118 L188 118 M180 132 L188 132", w: 0.9 }] },
  // 2) İnce aktif karbon
  {
    cizgiler: [
      ZEMIN,
      ...KAV,
      CAKIL(132),
      { d: "M140 70 L170 50 L182 62 L152 80 Z", w: 1.4, dolgu: true },
      { d: "M146 82 Q140 98 138 112", w: 0.7, kesik: true },
    ],
    noktalar: KARBON,
  },
  // 3) Toprak: arkada yüksek önde alçak
  {
    taramalar: [{ id: "k3", sinir: "M66 116 L66 92 Q120 82 174 76 L174 116 Z", kutu: [66, 76, 108, 40], aralik: 4 }],
    cizgiler: [ZEMIN, ...KAV, CAKIL(132), { d: "M66 92 Q120 82 174 76", w: 1.3 }],
    noktalar: KARBON,
  },
  // 4) Bitkileri cımbızla dik
  {
    cizgiler: [
      ZEMIN,
      ...KAV,
      CAKIL(132),
      { d: "M66 92 Q120 82 174 76", w: 1.3 },
      ...sapBitki(150, 79, 34),
      ...sapBitki(96, 88, 22),
      ...cimbiz(118, 84),
    ],
    noktalar: KARBON,
  },
  // 5) Yosunu boş alanlara bastır
  {
    cizgiler: [
      ZEMIN,
      ...KAV,
      CAKIL(132),
      { d: "M66 92 Q120 82 174 76", w: 1.3 },
      ...sapBitki(150, 79, 34),
      ...sapBitki(96, 88, 22),
      { d: "M70 92 Q76 84 82 91 Q88 82 96 89 M104 87 Q110 80 118 86 Q124 78 132 84 Q138 78 144 82", w: 1.2 },
      ...parmak(124, 76),
    ],
    noktalar: KARBON,
  },
  // 6) Sula (10–15 püskürtme) ve kapat
  {
    cizgiler: [
      ZEMIN,
      ...kavanoz(120, 132, 110, 120, true),
      CAKIL(132),
      { d: "M66 92 Q120 82 174 76", w: 1.3 },
      ...sapBitki(150, 79, 34),
      ...sapBitki(96, 88, 22),
      { d: kutu(198, 54, 16, 36), w: 1.4, dolgu: true },
      { d: "M202 54 L202 46 L214 46", w: 1.3 },
      ...sis(198, 48, 20),
    ],
    noktalar: KARBON,
  },
];

// ---------- Açık sukulent terraryumu (kase) ----------
const KASE = { d: "M40 70 Q40 132 120 132 Q200 132 200 70 Z", w: 1.8, dolgu: true };
const KASE_CAKIL = {
  d: [70, 84, 98, 112, 126, 140, 154, 168].map((x, i) => daire(x, 124 - (i % 2) * 2, 4)).join(" "),
  w: 1,
};
export const SUKULENT_TERRARYUM_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, KASE, KASE_CAKIL, { d: "M214 116 L214 130 M210 116 L218 116 M210 130 L218 130", w: 0.9 }] },
  {
    taramalar: [
      { id: "u2", sinir: "M44 86 Q120 96 196 86 L190 112 Q120 124 50 112 Z", kutu: [44, 84, 152, 40], aralik: 4 },
    ],
    cizgiler: [
      ZEMIN,
      KASE,
      KASE_CAKIL,
      { d: "M44 86 Q120 96 196 86", w: 1.2 },
      { d: "M214 86 L214 114 M210 86 L218 86 M210 114 L218 114", w: 0.9 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      KASE,
      { d: "M44 86 Q120 96 196 86", w: 1.2 },
      ...sukulent(90, 88, 1.1),
      ...sukulent(150, 50, 1.1),
      { d: "M142 50 Q140 60 148 64 Q156 62 158 52", w: 1.1, dolgu: true },
      { d: "M136 66 L132 72 M150 68 L150 76 M164 66 L168 72", w: 0.8 },
      ok(150, 80, 150, 90),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      KASE,
      { d: "M44 86 Q120 96 196 86", w: 1.2 },
      ...sukulent(90, 88, 1.1),
      ...sukulent(150, 88, 1.1),
      { d: "M110 88 L116 82 L126 84 L128 90 Z M168 86 L174 80 L182 84 L180 90 Z", w: 1.3, dolgu: true },
    ],
    noktalar: [60, 70, 104, 120, 130, 136, 172, 186].map((x, i) => [x, 86 + (i % 3), 0.9]),
  },
  {
    cizgiler: [
      ZEMIN,
      KASE,
      { d: "M44 86 Q120 96 196 86", w: 1.2 },
      ...sukulent(90, 88, 1.1),
      ...sukulent(150, 88, 1.1),
      ...saat(200, 30),
      damla(120, 72, 0.6),
      { d: "M100 36 L140 36 L136 60 L104 60 Z M104 40 L86 30", w: 1.4, dolgu: true },
    ],
  },
];

// ---------- Ahşap kuş yuvası ----------
export const KUS_YUVASI_ADIM: Cizim[] = [
  // 1) Parçaları kes
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(14, 70, 212, 34), w: 1.8, dolgu: true },
      {
        d: "M44 70 L44 104 M74 70 L74 104 M100 70 L100 104 M126 70 L126 104 M146 70 L146 104 M184 70 L184 104",
        w: 1,
        kesik: true,
      },
      { d: "M150 46 L230 18 L234 28 L154 56 Z", w: 1.5, dolgu: true },
      { d: zikzak(154, 56, 234, 28, 12, 2.5), w: 0.8 },
    ],
  },
  // 2) Giriş deliği (üstten 6 cm, Ø32 mm)
  {
    cizgiler: [
      ZEMIN,
      { d: "M80 132 L80 34 L120 14 L160 34 L160 132 Z", w: 1.8, dolgu: true },
      { d: daire(120, 60, 9), w: 1.6 },
      { d: "M172 34 L172 60 M168 34 L176 34 M168 60 L176 60", w: 0.9 },
      { d: "M120 30 L120 40", w: 1.6 },
      { d: kutu(112, 4, 16, 10), w: 1.4, dolgu: true },
    ],
  },
  // 3) Havalandırma ve drenaj delikleri
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 30, 60, 96), w: 1.8, dolgu: true },
      { d: daire(46, 40, 2.5) + " " + daire(60, 40, 2.5) + " " + daire(74, 40, 2.5), w: 1.1 },
      { d: kutu(130, 70, 60, 56), w: 1.8, dolgu: true },
      {
        d: daire(142, 82, 2.5) + " " + daire(178, 82, 2.5) + " " + daire(142, 114, 2.5) + " " + daire(178, 114, 2.5),
        w: 1.1,
      },
    ],
  },
  // 4) Birleştir (vidala, içi ham)
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(80, 110, 80, 14), w: 1.6, dolgu: true },
      { d: kutu(60, 46, 14, 64), w: 1.6, dolgu: true },
      { d: kutu(166, 46, 14, 64), w: 1.6, dolgu: true },
      ok(50, 80, 70, 80),
      ok(190, 80, 172, 80),
      ...tornavida(170, 116),
      { d: "M92 117 L98 117 M142 117 L148 117", w: 1.6 },
    ],
  },
  // 5) Çatıyı menteşeyle tak (temizlik için açılır)
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(84, 54, 72, 78), w: 1.8, dolgu: true },
      { d: daire(120, 76, 8), w: 1.4 },
      { d: "M156 50 L74 20 L72 28 L154 58 Z", w: 1.8, dolgu: true },
      { d: daire(156, 54, 3), w: 1.4 },
      yayOk(156, 54, 34, 3.6, 4.4),
    ],
  },
  // 6) 2–4 m yükseğe as
  {
    cizgiler: [
      ZEMIN,
      { d: "M70 134 L76 4 M96 134 L92 4", w: 1.8 },
      { d: "M76 60 Q80 70 76 80 M88 30 Q84 40 90 50", w: 0.6 },
      ...kusEvi(124, 66, 28, 36),
      { d: "M108 50 L96 50", w: 1.6 },
      { d: "M160 30 L160 134 M156 30 L164 30 M156 134 L164 134", w: 0.9 },
      ...GUNES_YOK(212, 24),
    ],
  },
];

// ---------- Pet şişe kuş yemliği ----------
export const KUS_YEMLIGI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...sise(120, 132, 40, 110),
      { d: "M84 96 L156 108", w: 2.6 },
      { d: "M150 106 Q166 106 170 112 Q164 118 150 110", w: 1.4, dolgu: true },
      { d: daire(100, 98.6, 2.5) + " " + daire(140, 105.3, 2.5), w: 1 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(120, 76, 50), w: 1.2 },
      { d: "M80 96 L170 100", w: 3 },
      { d: daire(124, 84, 8), w: 1.6 },
      ...bicak(130, 80),
    ],
    noktalar: [
      [118, 82, 1.2],
      [124, 86, 1.2],
      [128, 90, 1.2],
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...sise(120, 132, 40, 110),
      { d: "M84 110 L156 120", w: 2.4 },
      { d: daire(120, 76, 5), w: 2.4 },
      { d: "M120 76 L120 64", w: 2.4 },
      yayOk(120, 30, 20, 0.3, 2.6),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M20 18 Q120 8 230 20", w: 2.4 },
      { d: "M120 13 L120 30", w: 0.9 },
      ...sise(120, 132, 40, 96),
      { d: "M84 110 L156 120", w: 2.2 },
    ],
    noktalar: [100, 108, 116, 124, 132, 140, 104, 112, 120, 128, 136].map((x, i) => [x, i < 6 ? 124 : 116, 1.2]),
  },
];

// ---------- Balkon otları ----------
const ZARDINYER = { d: "M30 80 L210 80 L200 130 L40 130 Z", w: 1.8, dolgu: true };
export const BALKON_OTLARI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ZARDINYER,
      {
        d: [56, 70, 84, 98, 112, 126, 140, 154, 168, 182].map((x, i) => daire(x, 124 - (i % 2) * 2, 4)).join(" "),
        w: 1,
      },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ZARDINYER,
      { d: "M34 92 L206 92", w: 1 },
      ...fide(70, 92, 1.4),
      ...fide(120, 92, 1.4),
      ...fide(170, 92, 1.4),
      { d: "M70 104 L120 104 M70 100 L70 108 M120 100 L120 108", w: 0.8 },
      { d: daire(222, 30, 9), w: 1.3 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...saksi(70, 70, 70, 60),
      ...fide(70, 82, 1.6),
      { d: "M48 120 Q36 126 30 120 M92 120 Q104 126 110 120", w: 0.8, kesik: true },
      ok(118, 100, 146, 100),
      ...saksi(186, 70, 70, 60),
      ...fide(186, 82, 1.6),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ZARDINYER,
      { d: "M34 92 L206 92", w: 1 },
      ...parmak(80, 100),
      ...fide(140, 92, 1.4),
      { d: "M150 30 L190 30 L186 56 L154 56 Z M154 34 L130 22", w: 1.4, dolgu: true },
      damla(130, 40, 0.6),
      damla(134, 56, 0.6),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...fide(120, 132, 3.4),
      { d: daire(120, 44, 5) + " " + daire(112, 48, 4) + " " + daire(128, 48, 4), w: 1.2 },
      ...makas(140, 52),
    ],
  },
];

// ---------- Mikro yeşillik ----------
const TEPSI = [
  { d: "M40 104 L200 104 L194 124 L46 124 Z", w: 1.8, dolgu: true },
  { d: "M36 92 L204 92 L198 108 L42 108 Z", w: 1.6, dolgu: true },
  { d: "M60 104 L60 108 M90 104 L90 108 M120 104 L120 108 M150 104 L150 108 M180 104 L180 108", w: 0.8 },
];
export const MIKRO_YESILLIK_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...TEPSI,
      { d: "M44 92 Q60 86 76 92 T108 92 T140 92 T172 92 T200 92", w: 1 },
      { d: "M212 84 L212 92 M208 84 L216 84", w: 0.8 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...TEPSI,
      { d: "M44 92 Q60 86 76 92 T108 92 T140 92 T172 92 T200 92", w: 1 },
      { d: "M120 30 L160 20 L166 44 L126 54 Z", w: 1.4, dolgu: true },
      { d: "M126 54 L116 80", w: 0.7, kesik: true },
    ],
    noktalar: [60, 72, 84, 96, 108, 120, 132, 144, 156, 168, 180].map((x, i) => [x, 88 - (i % 2) * 2, 1.1]),
  },
  {
    cizgiler: [
      ZEMIN,
      ...TEPSI,
      { d: "M34 78 L206 78 L204 92 L36 92 Z", w: 1.6, dolgu: true },
      { d: "M196 30 Q184 40 196 52 Q178 50 178 40 Q178 28 196 30 Z", w: 1.3, dolgu: true },
      ...saat(40, 40),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...TEPSI,
      ...[60, 80, 100, 120, 140, 160, 180].flatMap((x) => fide(x, 92, 0.8)),
      { d: "M210 10 L170 50 M220 30 L190 60", w: 0.7, kesik: true },
      { d: "M12 96 L30 96 L28 104", w: 1.3 },
      ok(14, 110, 40, 116),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...TEPSI,
      ...[60, 80, 100, 120, 140, 160, 180].flatMap((x) => fide(x, 92, 1.4)),
      { d: "M40 86 L200 86", w: 0.8, kesik: true },
      ...makas(200, 86),
    ],
  },
];
