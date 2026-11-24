// Altın 40 / Çocuk & Oyun: adım sahneleri (viewBox 0 0 240 150)
import { Cizim, daire, kutu } from "../arac";
import {
  altlik,
  bant,
  bicak,
  bilye,
  carpi,
  cetvel,
  damla,
  ev,
  firca,
  kablo,
  kalem,
  kanal,
  kart,
  kitap,
  ok,
  onay,
  pano,
  parmak,
  rulo,
  saat,
  saksi,
  silikon,
  sis,
  sprey,
  sukulent,
  telefon,
  toprak,
  tornavida,
  ucakUst,
  yayOk,
  direnc,
  ZEMIN,
} from "./parca";

// ---------- Bilye parkuru ----------
// Pano x 50..190, y 12..130 ; kanallar zikzak iner
const PANO = pano(50, 12, 140, 118);
const ROTA: [number, number, number, number][] = [
  [62, 30, 150, 44],
  [178, 58, 90, 72],
  [62, 86, 150, 100],
  [178, 112, 100, 124],
];

export const BILYE_PARKURU_ADIM: Cizim[] = [
  // 1) Panoyu hazırla
  {
    cizgiler: [
      { d: "M30 4 L30 134", w: 1 },
      { d: "M24 4 L24 134", w: 0.5 },
      ZEMIN,
      ...PANO,
      bant(52, 16),
      bant(188, 16),
      bant(52, 126),
      bant(188, 126),
      ok(214, 60, 194, 60),
      ok(214, 90, 194, 90),
    ],
  },
  // 2) Kanalları kes (yetişkin)
  {
    cizgiler: [
      ZEMIN,
      ...altlik(20, 88, 200, 44),
      ...rulo(36, 102, 120, 11),
      { d: "M36 102 L156 102", w: 1.2, kesik: true },
      ...bicak(156, 102),
      ok(146, 52, 196, 22),
      ...rulo(40, 124, 90, 6),
    ],
  },
  // 3) Rotayı çiz (≈10° eğim, uçlar alttakinin üstüne taşar)
  {
    cizgiler: [
      ZEMIN,
      ...PANO,
      ...ROTA.flatMap(([a, b, c, d]) => kanal(a, b, c, d, 7, true)),
      { d: "M62 30 L104 30", w: 0.7 },
      { d: "M92 30 A30 30 0 0 1 91 35", w: 0.9 },
      ...kalem(100, 124),
      { d: "M178 52 L178 66", w: 0.7, kesik: true },
    ],
  },
  // 4) Önce bantla, test et
  {
    cizgiler: [
      ZEMIN,
      ...PANO,
      ...ROTA.slice(0, 3).flatMap(([a, b, c, d]) => kanal(a, b, c, d, 7)),
      bant(106, 34),
      bant(134, 62),
      bant(106, 90),
      ...bilye(80, 28, 4),
      { d: "M86 32 L120 38", w: 0.6, kesik: true },
      ...bilye(204, 46, 4),
      { d: "M176 54 Q194 38 200 44", w: 0.7, kesik: true },
      { d: "M210 36 L216 30 M212 46 L220 46 M210 56 L216 62", w: 1 },
    ],
  },
  // 5) Eğimi ve geçişleri düzelt
  {
    cizgiler: [
      ZEMIN,
      ...PANO,
      ...kanal(62, 30, 150, 50, 7),
      yayOk(150, 30, 16, 0.2, 1.3),
      ...kanal(178, 66, 90, 80, 7),
      { d: "M146 56 Q148 70 160 70 Q172 70 174 56", w: 1.5, dolgu: true },
      { d: kutu(180, 52, 4, 24), w: 1.4, dolgu: true },
      ...kanal(62, 96, 150, 110, 7),
    ],
  },
  // 6) Kalıcı olarak yapıştır (yetişkin)
  {
    cizgiler: [
      ZEMIN,
      ...PANO,
      ...kanal(62, 50, 150, 64, 8),
      ...silikon(118, 72),
      damla(112, 74),
      ...parmak(84, 44),
      ...saat(206, 26),
    ],
  },
  // 7) Başlangıç ve bitiş ekle
  {
    cizgiler: [
      ZEMIN,
      ...PANO,
      ...ROTA.slice(0, 3).flatMap(([a, b, c, d]) => kanal(a, b, c, d, 7)),
      { d: "M58 2 L58 24 M72 2 L72 24", w: 1.4 },
      ...bilye(65, 6, 4),
      ...bilye(65, 15, 4),
      { d: "M162 108 L166 134 L190 134 L194 108 Z", w: 1.6, dolgu: true },
      { d: "M160 108 L196 108", w: 2 },
      ...bilye(172, 104, 4),
      ...bilye(182, 104, 4),
    ],
  },
];

// ---------- Peri bahçesi ----------
const TOPRAK_TEPE = "M70 92 Q90 70 112 76 Q130 82 140 92";
export const PERI_BAHCESI_ADIM: Cizim[] = [
  // 1) Saksı ve yeri seç (aydınlık ama doğrudan güneşsiz pencere önü)
  {
    cizgiler: [
      { d: kutu(60, 10, 120, 92), w: 1.6 },
      { d: "M120 10 L120 102 M60 56 L180 56", w: 1.2 },
      { d: kutu(52, 102, 136, 8), w: 1.6, dolgu: true },
      { d: daire(206, 26, 10), w: 1.4 },
      { d: "M194 34 L182 42 M200 40 L194 52", w: 0.9, kesik: true },
      ...saksi(120, 72, 56, 30, true),
      ZEMIN,
    ],
  },
  // 2) Drenaj ve toprak
  {
    taramalar: [
      { id: "pt", sinir: "M60 92 Q90 64 116 72 Q138 80 180 82 L172 116 L68 116 Z", kutu: [56, 60, 128, 58], aralik: 4 },
    ],
    cizgiler: [
      ZEMIN,
      ...saksi(120, 70, 128, 62, true),
      { d: "M60 92 Q90 64 116 72 Q138 80 180 82", w: 1.3 },
      {
        d:
          daire(84, 124, 4) +
          " " +
          daire(98, 126, 3.5) +
          " " +
          daire(112, 124, 4) +
          " " +
          daire(126, 126, 3.5) +
          " " +
          daire(140, 124, 4) +
          " " +
          daire(154, 126, 3),
        w: 1,
      },
      { d: "M200 116 L200 130 M196 116 L204 116 M196 130 L204 130", w: 0.9 },
    ],
  },
  // 3) Yerleşim planı (saksılı bitkilerle deneme)
  {
    cizgiler: [
      ZEMIN,
      ...saksi(120, 80, 140, 52),
      { d: TOPRAK_TEPE, w: 1.2 },
      { d: kutu(64, 62, 16, 18), w: 1.1, kesik: true },
      ...sukulent(72, 62, 0.9),
      { d: kutu(150, 66, 16, 14), w: 1.1, kesik: true },
      ...sukulent(158, 66, 0.8),
      ...ev(98, 78, 22),
      ok(186, 40, 166, 58),
      ok(40, 40, 62, 56),
    ],
  },
  // 4) Bitkileri dik
  {
    taramalar: [{ id: "p4", sinir: kutu(56, 92, 128, 30), kutu: [56, 92, 128, 30], aralik: 5 }],
    cizgiler: [
      ZEMIN,
      { d: "M50 92 L80 92 Q86 110 100 110 Q114 110 120 92 L190 92", w: 1.6 },
      ...sukulent(100, 72, 1.2),
      { d: "M92 72 Q90 84 96 90 Q104 92 108 86 Q112 78 108 72", w: 1.2, dolgu: true },
      ok(100, 40, 100, 54),
      ...sukulent(150, 92, 1),
      ...sukulent(176, 92, 1),
      { d: "M150 100 L176 100 M150 97 L150 103 M176 97 L176 103", w: 0.8 },
    ],
  },
  // 5) Evi ve yolu yerleştir (üstten görünüş)
  {
    taramalar: [{ id: "p5c", sinir: daire(120, 74, 58), kutu: [62, 16, 116, 116], aralik: 7, sonra: 2 }],
    cizgiler: [
      ZEMIN,
      { d: daire(120, 74, 64), w: 1.8, dolgu: true },
      { d: daire(120, 74, 58), w: 1.2, dolgu: true },
      // ev (üstten: çatı sırtı)
      { d: kutu(96, 40, 30, 22), w: 1.6, dolgu: true },
      { d: "M96 40 L111 51 L126 40 M96 62 L111 51 L126 62", w: 1 },
      { d: "M106 62 L116 62", w: 2.4 },
      // kıvrımlı yol: kapıdan saksı kenarına
      { d: "M111 64 Q100 80 116 90 Q132 100 128 130", w: 0.8, kesik: true },
      // sukulentler (üstten)
      { d: daire(80, 76, 8) + " " + daire(80, 76, 3), w: 1.2, dolgu: true },
      { d: daire(152, 60, 9) + " " + daire(152, 60, 3.5), w: 1.2, dolgu: true },
      { d: daire(150, 96, 7) + " " + daire(150, 96, 2.5), w: 1.2, dolgu: true },
    ],
    noktalar: [
      [109, 70, 1.5],
      [106, 78, 1.4],
      [112, 86, 1.5],
      [121, 92, 1.4],
      [128, 100, 1.5],
      [130, 110, 1.4],
      [129, 120, 1.5],
    ],
  },
  // 6) Çit ve detaylar
  {
    cizgiler: [
      ZEMIN,
      { d: "M56 104 L56 70 M74 104 L74 68 M92 104 L92 70 M110 104 L110 69 M128 104 L128 70", w: 2 },
      { d: "M48 80 L136 78 M48 94 L136 92", w: 2 },
      ...silikon(140, 76),
      damla(136, 80),
      { d: "M40 104 L200 104", w: 1.2 },
      { d: "M150 104 Q156 96 162 104 Q168 94 176 104 Q182 98 188 104", w: 1.2, dolgu: true },
    ],
  },
  // 7) İlk sulama ve bakım
  {
    cizgiler: [
      ZEMIN,
      ...saksi(90, 74, 90, 46, true),
      ...sukulent(80, 74, 1),
      ...sukulent(104, 74, 0.9),
      { d: "M48 124 L132 124 L126 132 L54 132 Z", w: 1.4, dolgu: true },
      damla(90, 122, 0.6),
      // sulama kabı
      { d: "M120 30 L170 30 L166 62 L124 62 Z", w: 1.6, dolgu: true },
      { d: "M124 40 L96 22 L92 26 L122 48", w: 1.4 },
      { d: "M170 36 Q186 40 172 56", w: 1.4 },
      damla(90, 34, 0.7),
      damla(84, 46, 0.7),
      // sprey şişe
      { d: kutu(188, 70, 18, 40), w: 1.5, dolgu: true },
      { d: "M192 70 L192 60 L206 60 L206 66 L188 66", w: 1.3 },
      ...sis(188, 62, 24),
      { d: "M206 74 L212 82", w: 1.4 },
    ],
  },
];

// ---------- Plastik maket ----------
// Yandan uçak gövdesi: burun solda
const GOVDE_YAN =
  "M40 80 Q44 68 64 66 L170 64 L196 44 L206 44 L198 66 Q206 70 206 76 Q204 84 194 84 L64 86 Q44 86 40 80 Z";
const DAL = (x: number, y: number) => [
  { d: kutu(x, y, 96, 70), w: 1.6 },
  { d: `M${x} ${y + 35} L${x + 96} ${y + 35} M${x + 48} ${y} L${x + 48} ${y + 70}`, w: 1.2 },
];
export const PLASTIK_MAKET_ADIM: Cizim[] = [
  // 1) Talimatı ve parçaları incele
  {
    cizgiler: [
      ZEMIN,
      { d: "M20 128 L28 30 L116 24 L112 124 Z", w: 1.6, dolgu: true },
      ...ucakUst(70, 36, 0.5),
      { d: kutu(36, 90, 12, 10) + " " + kutu(56, 90, 12, 10) + " " + kutu(76, 90, 12, 10), w: 1 },
      { d: daire(62, 95, 11), w: 1.2 },
      { d: "M38 110 L100 108 M38 116 L90 115", w: 0.6 },
      ...DAL(132, 50),
      {
        d: "M142 60 L170 60 L170 76 L142 76 Z M190 62 Q204 60 214 70 L190 74 Z M150 94 L176 94 L170 112 L156 112 Z",
        w: 1.2,
        dolgu: true,
      },
      ...kalem(100, 104),
    ],
  },
  // 2) Parçaları kes ve temizle (yan keski)
  {
    cizgiler: [
      ZEMIN,
      ...DAL(20, 40),
      { d: "M30 50 L58 50 L58 66 L30 66 Z", w: 1.2, dolgu: true },
      { d: "M116 75 L150 75", w: 1.6 },
      { d: "M150 64 Q186 62 200 76 Q186 90 150 86 Z", w: 1.6, dolgu: true },
      { d: "M144 70 L144 80", w: 1.2, kesik: true },
      // yan keski
      { d: "M138 74 L134 62 L140 60 L146 72 M146 78 L140 90 L134 88 L138 76", w: 1.6, dolgu: true },
      { d: "M134 62 L120 22 L130 18 L140 60 M134 88 L116 126 L126 130 L140 90", w: 1.6, dolgu: true },
    ],
  },
  // 3) Kuru prova
  {
    cizgiler: [
      ZEMIN,
      { d: "M40 70 Q44 58 64 56 L170 54 L196 34 L206 34 L198 56 Q206 60 206 66 L64 66 Z", w: 1.6, dolgu: true },
      { d: "M40 96 L206 96 Q206 102 194 104 L64 106 Q44 106 40 100 Z", w: 1.6, dolgu: true },
      ok(120, 28, 120, 48),
      ok(120, 124, 120, 110),
      { d: daire(196, 120, 14), w: 1.2 },
      { d: "M186 118 L206 118 M186 124 L206 122", w: 1.4 },
      { d: "M206 132 L214 140", w: 2 },
    ],
  },
  // 4) Kokpiti boya ve gövdeyi kapat
  {
    cizgiler: [
      ZEMIN,
      { d: GOVDE_YAN, w: 1.8, dolgu: true },
      { d: "M64 76 L194 75", w: 0.8, kesik: true },
      { d: "M60 66 Q72 52 92 56 L96 66", w: 1.3, dolgu: true },
      // ince uçlu yapıştırıcı
      { d: "M120 76 L150 30", w: 1 },
      { d: "M148 34 L160 14 L170 20 L156 40 Z", w: 1.5, dolgu: true },
      damla(120, 70, 0.6),
      ...saat(206, 116),
    ],
  },
  // 5) Kanatları ve kuyruğu tak (önden bakış, eşit açı)
  {
    cizgiler: [
      ZEMIN,
      { d: daire(120, 74, 14), w: 1.8, dolgu: true },
      { d: "M106 78 L36 66 L36 72 L106 84 M134 78 L204 66 L204 72 L134 84", w: 1.8, dolgu: true },
      { d: "M120 60 L120 36 L126 36 L126 60", w: 1.4, dolgu: true },
      { d: "M106 80 L40 80 M134 80 L200 80", w: 0.6, kesik: true },
      { d: "M70 80 A30 30 0 0 0 70 74 M170 80 A30 30 0 0 1 170 74", w: 0.9 },
      ...kitap(24, 134, 30, 12),
      ...kitap(24, 122, 30, 12),
      ...kitap(186, 134, 30, 12),
      ...kitap(186, 122, 30, 12),
    ],
  },
  // 6) Ek yerlerini düzelt
  {
    cizgiler: [
      ZEMIN,
      { d: GOVDE_YAN, w: 1.8, dolgu: true },
      { d: "M64 76 L194 75", w: 1.1 },
      { d: "M100 70 L150 69 L150 62 L100 63 Z", w: 1.5, dolgu: true },
      ok(96, 50, 156, 49),
      ok(156, 49, 96, 50),
      // macun tüpü
      { d: "M40 124 L96 116 L98 124 L42 132 Z", w: 1.4, dolgu: true },
      { d: "M96 116 L106 116 L106 124 L98 124", w: 1.2 },
    ],
  },
  // 7) Astarla (25–30 cm uzaktan, ince katlar)
  {
    cizgiler: [
      ZEMIN,
      ...ucakUst(70, 34, 0.9),
      { d: "M66 112 L66 134 M74 112 L74 134 M56 134 L84 134", w: 1.4 },
      ...sprey(184, 120),
      ...sis(182, 70, 60),
      { d: "M120 26 L182 26 M120 22 L120 30 M182 22 L182 30", w: 0.9 },
    ],
  },
  // 8) Ana renkleri boya (inceltilmiş akrilik)
  {
    taramalar: [{ id: "m8", sinir: "M120 70 L190 56 L190 62 L122 80 Z", kutu: [120, 56, 70, 24], aralik: 3 }],
    cizgiler: [
      ZEMIN,
      { d: "M40 80 L120 70 L190 56 L190 62 L122 80 L44 88 Z", w: 1.6, dolgu: true },
      ...firca(150, 66),
      { d: "M30 108 L30 132 Q30 134 34 134 L56 134 Q60 134 60 132 L60 108", w: 1.6, dolgu: true },
      { d: "M30 116 L60 116", w: 0.8 },
      damla(44, 92, 0.8),
      { d: "M44 72 L44 86", w: 1.2 },
    ],
  },
  // 9) Detay ve çıkartmalar (ılık su, kaydır)
  {
    cizgiler: [
      ZEMIN,
      { d: "M24 104 Q24 128 60 128 Q96 128 96 104 Z", w: 1.6, dolgu: true },
      { d: "M30 110 Q60 106 90 110", w: 0.8 },
      { d: kutu(46, 100, 22, 8), w: 1.1 },
      { d: "M110 96 L200 84 L204 92 L114 104 Z", w: 1.6, dolgu: true },
      { d: daire(160, 92, 6), w: 1.2 },
      // cımbız
      { d: "M162 88 L196 30 M168 90 L202 34", w: 1.6 },
      { d: "M196 30 L202 34", w: 1.6 },
    ],
  },
];

// ---------- Bluetooth araba (üstten görünüş) ----------
const SASI = "M60 40 L180 40 Q192 40 192 52 L192 108 Q192 120 180 120 L60 120 Q48 120 48 108 L48 52 Q48 40 60 40 Z";
const TEKER = [kutu(36, 88, 10, 28), kutu(194, 88, 10, 28)].join(" ");
const L298 = (x: number, y: number) => [
  ...kart(x, y, 40, 34, 6),
  { d: kutu(x + 12, y + 6, 16, 14), w: 1.2 },
  {
    d: `M${x + 15} ${y + 6} L${x + 15} ${y + 20} M${x + 20} ${y + 6} L${x + 20} ${y + 20} M${x + 25} ${y + 6} L${x + 25} ${y + 20}`,
    w: 0.6,
  },
];
const UNO = (x: number, y: number) => [...kart(x, y, 54, 38, 10), { d: kutu(x - 4, y + 6, 8, 10), w: 1.2 }];
export const BLUETOOTH_ARABA_ADIM: Cizim[] = [
  // 1) Şasiyi kur
  {
    cizgiler: [
      ZEMIN,
      { d: SASI, w: 1.8, dolgu: true },
      { d: kutu(52, 92, 26, 20) + " " + kutu(162, 92, 26, 20), w: 1.4, dolgu: true },
      { d: TEKER, w: 1.8, dolgu: true },
      { d: daire(120, 52, 6), w: 1.4 },
      ...tornavida(150, 70),
    ],
  },
  // 2) Kartları yerleştir
  {
    cizgiler: [
      ZEMIN,
      { d: SASI, w: 1.8, dolgu: true },
      { d: TEKER, w: 1.8, dolgu: true },
      ...UNO(60, 52),
      ...L298(132, 54),
      { d: kutu(96, 96, 48, 18), w: 1.5, dolgu: true },
      { d: "M108 96 L108 114 M120 96 L120 114 M132 96 L132 114", w: 0.7 },
    ],
  },
  // 3) Motorları sürücüye bağla
  {
    cizgiler: [
      ZEMIN,
      ...L298(96, 50),
      { d: kutu(90, 62, 6, 12) + " " + kutu(136, 62, 6, 12), w: 1.3, dolgu: true },
      { d: kutu(24, 90, 30, 22) + " " + kutu(186, 90, 30, 22), w: 1.5, dolgu: true },
      kablo(90, 66, 50, 92, 14),
      kablo(90, 70, 42, 92, 18),
      kablo(142, 66, 190, 92, 14),
      kablo(142, 70, 198, 92, 18),
      ...tornavida(140, 64),
    ],
  },
  // 4) Kontrol pinlerini bağla (pil takılı değil)
  {
    cizgiler: [
      ZEMIN,
      ...L298(24, 60),
      ...UNO(150, 60),
      kablo(40, 60, 160, 60, -30),
      kablo(46, 60, 168, 60, -36),
      kablo(52, 60, 176, 60, -42),
      kablo(58, 60, 184, 60, -48),
      { d: kutu(100, 104, 40, 18), w: 1.4, dolgu: true },
      carpi(120, 113, 12),
    ],
  },
  // 5) Bluetooth modülünü bağla (gerilim bölücü)
  {
    cizgiler: [
      ZEMIN,
      ...kart(24, 50, 34, 22, 6),
      ...UNO(162, 46),
      kablo(30, 50, 168, 46, -24),
      kablo(36, 50, 176, 46, -30),
      kablo(42, 50, 184, 46, -36),
      { d: "M48 50 L48 100 L80 100", w: 1.2 },
      direnc(80, 100, 26),
      { d: "M106 100 L192 100 L192 46", w: 1.2 },
      { d: "M64 100 L64 112", w: 1.2 },
      { d: "M64 112 L64 112", w: 1.2 },
      { d: "M58 112 L70 112 L70 126", w: 1.2 },
      toprak(70, 122),
      { d: "M86 88 L98 88", w: 0.6 },
    ],
  },
  // 6) Gücü bağla (ortak toprak)
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(20, 92, 48, 26), w: 1.5, dolgu: true },
      { d: "M32 92 L32 118 M44 92 L44 118 M56 92 L56 118", w: 0.7 },
      ...L298(96, 52),
      ...UNO(168, 52),
      kablo(30, 92, 100, 86, -20, 1.6),
      kablo(58, 92, 110, 86, -14, 1.6),
      { d: "M118 86 L118 120 L196 120 L196 90", w: 1.6 },
      toprak(156, 120),
    ],
  },
  // 7) Kodu yükle (USB)
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(20, 30, 96, 62), w: 1.8, dolgu: true },
      { d: "M10 92 L126 92 L132 104 L4 104 Z", w: 1.6, dolgu: true },
      { d: "M30 42 L74 42 M36 50 L96 50 M36 58 L84 58 M30 66 L70 66 M36 74 L90 74", w: 0.9 },
      ...UNO(160, 70),
      kablo(126, 98, 156, 80, 20, 1.6),
      onay(28, 82, 0.6),
    ],
  },
  // 8) Telefonu eşleştir ve test et (tekerlekler havada)
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(24, 96, 70, 38), w: 1.6, dolgu: true },
      { d: kutu(20, 72, 78, 20), w: 1.8, dolgu: true },
      { d: daire(32, 96, 9) + " " + daire(86, 96, 9), w: 1.6, dolgu: true },
      yayOk(32, 96, 14, 3.6, 5.2),
      ...telefon(170, 46),
      { d: "M187 66 L180 76 L194 76 Z M187 104 L180 94 L194 94 Z", w: 1.2 },
      { d: "M118 66 Q126 58 134 66 M112 60 Q126 46 140 60 M106 54 Q126 34 146 54", w: 1.1 },
    ],
  },
  // 9) Yönleri düzelt ve yere indir
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(24, 96, 78, 20), w: 1.8, dolgu: true },
      { d: daire(38, 120, 10) + " " + daire(88, 120, 10), w: 1.6, dolgu: true },
      ok(110, 106, 150, 106, 1.4),
      { d: kutu(160, 30, 54, 40), w: 1.4, dolgu: true },
      { d: kutu(168, 40, 10, 10) + " " + kutu(196, 40, 10, 10), w: 1.2 },
      { d: "M173 50 L201 66 M201 50 L173 66", w: 1.4 },
      yayOk(187, 82, 10, 3.6, 5.6),
    ],
  },
];

// ---------- Depron planör ----------
const KANAT_UST = "M30 70 Q30 60 40 60 L200 60 Q210 60 210 70 L210 80 L30 80 Z";
export const DEPRON_PLANOR_ADIM: Cizim[] = [
  // 1) Parçaları çiz
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(14, 20, 212, 108), w: 1.6, dolgu: true },
      { d: "M26 40 Q26 32 34 32 L176 32 Q184 32 184 40 L184 50 L26 50 Z", w: 1.2, kesik: true },
      { d: kutu(26, 66, 66, 22), w: 1.2, kesik: true },
      { d: "M112 92 L136 92 L136 66 L120 66 Z", w: 1.2, kesik: true },
      ...cetvel(140, 104, 80, 12),
      ...kalem(150, 72),
    ],
  },
  // 2) Kes (2–3 hafif geçiş)
  {
    cizgiler: [
      ZEMIN,
      ...altlik(14, 70, 212, 60),
      { d: kutu(28, 80, 184, 40), w: 1.4, dolgu: true },
      ...cetvel(28, 96, 184, 10),
      { d: "M40 96 L170 96", w: 1, kesik: true },
      ...bicak(170, 96),
      { d: "M60 88 L140 88 M70 84 L130 84 M80 80 L120 80", w: 0.8 },
      ok(120, 76, 150, 76),
    ],
  },
  // 3) Kanada profil ver (kesit: damla)
  {
    taramalar: [
      {
        id: "d3",
        sinir: "M40 80 Q40 60 80 58 Q150 58 210 82 Q150 88 80 90 Q40 92 40 80 Z",
        kutu: [40, 58, 170, 34],
        aralik: 5,
      },
    ],
    cizgiler: [
      ZEMIN,
      { d: "M40 80 Q40 60 80 58 Q150 58 210 82 Q150 88 80 90 Q40 92 40 80 Z", w: 1.8 },
      { d: "M18 40 L44 52 L38 64 L12 52 Z", w: 1.5, dolgu: true },
      yayOk(40, 76, 22, 2.4, 3.8),
      ok(214, 100, 196, 88),
    ],
  },
  // 4) Dihedral ver (uçlar 4–5 cm yukarıda)
  {
    cizgiler: [
      ZEMIN,
      { d: "M120 96 L28 74 L28 80 L120 102 L212 80 L212 74 Z", w: 1.8, dolgu: true },
      { d: "M120 96 L120 102", w: 1.4 },
      { d: "M28 96 L212 96", w: 0.6, kesik: true },
      { d: "M20 80 L20 96 M16 80 L24 80 M16 96 L24 96 M220 80 L220 96 M216 80 L224 80 M216 96 L224 96", w: 0.9 },
      ...kitap(22, 134, 30, 12),
      ...kitap(22, 122, 30, 12),
      { d: "M38 110 L38 82", w: 0.8, kesik: true },
      ...kitap(188, 134, 30, 12),
      ...kitap(188, 122, 30, 12),
      { d: "M202 110 L202 82", w: 0.8, kesik: true },
    ],
  },
  // 5) Gövdeye birleştir (kanat önden 1/3'te)
  {
    cizgiler: [
      ZEMIN,
      { d: "M20 84 L216 80 L216 84 L20 88 Z", w: 1.6, dolgu: true },
      { d: "M70 82 L104 74 L112 74 L80 82", w: 1.6, dolgu: true },
      { d: "M196 80 L214 80", w: 2 },
      { d: "M200 80 L210 56 L216 56 L216 80", w: 1.6, dolgu: true },
      { d: "M20 100 L216 100 M20 96 L20 104 M85 96 L85 104", w: 0.8 },
      damla(90, 66, 0.7),
      damla(206, 46, 0.7),
    ],
  },
  // 6) Ağırlık merkezini ayarla (kanadın önden %30'u)
  {
    cizgiler: [
      ZEMIN,
      { d: KANAT_UST, w: 1.8, dolgu: true },
      { d: "M30 66 L210 66", w: 0.8, kesik: true },
      { d: "M53 124 L53 92 Q60 82 67 92 L67 124", w: 1.5, dolgu: true },
      { d: "M173 124 L173 92 Q180 82 187 92 L187 124", w: 1.5, dolgu: true },
      { d: "M60 80 L60 70 M180 80 L180 70", w: 0.8, kesik: true },
      { d: daire(120, 40, 9), w: 1.5, dolgu: true },
      ok(120, 22, 120, 30),
      { d: "M18 60 L18 66 M14 60 L22 60 M14 66 L22 66", w: 0.8 },
    ],
  },
  // 7) Kayma testi (göz hizasından yumuşak it)
  {
    cizgiler: [
      ZEMIN,
      { d: "M30 50 L52 48 L52 52 L30 54 Z M38 49 L44 40 L46 40 L44 51", w: 1.4, dolgu: true },
      { d: "M20 70 Q26 58 34 58 L40 54", w: 1.6 },
      { d: "M54 52 Q120 60 200 112", w: 0.9, kesik: true },
      { d: "M196 104 L204 116 L190 112", w: 1 },
      {
        d: "M20 134 L24 126 M40 134 L42 128 M90 134 L93 126 M140 134 L142 127 M190 134 L193 126 M220 134 L222 128",
        w: 0.8,
      },
    ],
  },
  // 8) Trim ayarı (dalış / dalgalanma / dönme)
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(10, 20, 68, 100) + " " + kutu(86, 20, 68, 100) + " " + kutu(162, 20, 68, 100), w: 1 },
      { d: "M18 40 Q50 46 66 104", w: 1, kesik: true },
      { d: daire(44, 88, 6), w: 1.3 },
      carpi(44, 88, 9),
      { d: "M94 60 Q106 36 118 60 Q130 84 146 60", w: 1, kesik: true },
      { d: "M110 100 L140 100 L146 108", w: 1.4 },
      yayOk(146, 100, 8, 4.7, 6.0),
      { d: "M196 106 Q176 80 196 52 Q214 34 222 60", w: 1, kesik: true },
      { d: "M188 108 L204 108 L210 102", w: 1.4 },
    ],
  },
];
