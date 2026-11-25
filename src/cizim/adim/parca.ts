// Adım sahneleri için tekrar kullanılan karakalem parçaları (viewBox 0 0 240 150).
// Her fonksiyon mutlak koordinatlı Cizgi listesi döndürür; döndürme yerine yön parametreleri kullanılır.
import { Cizgi, daire, kutu, yuvarla as r } from "../arac";

export const ZEMIN: Cizgi = { d: "M8 134 Q120 130 232 135", w: 1 };

// Ok: (x1,y1) → (x2,y2), uçta iki kanat
export function ok(x1: number, y1: number, x2: number, y2: number, w = 1.1): Cizgi {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const u = (t: number) => `${r(x2 - 6 * Math.cos(a + t))} ${r(y2 - 6 * Math.sin(a + t))}`;
  return { d: `M${x1} ${y1} L${x2} ${y2} M${x2} ${y2} L${u(0.45)} M${x2} ${y2} L${u(-0.45)}`, w };
}

// Kavisli ok (dönme/ayar): merkez etrafında yay
export function yayOk(cx: number, cy: number, rr: number, bas: number, son: number): Cizgi {
  const nokta = (t: number) => [r(cx + rr * Math.cos(t)), r(cy + rr * Math.sin(t))];
  const [x1, y1] = nokta(bas);
  const [x2, y2] = nokta(son);
  const buyuk = Math.abs(son - bas) > Math.PI ? 1 : 0;
  const yon = son > bas ? 1 : 0;
  const tegetAci = son + (yon ? Math.PI / 2 : -Math.PI / 2);
  const u = (t: number) => `${r(x2 - 6 * Math.cos(tegetAci + t))} ${r(y2 - 6 * Math.sin(tegetAci + t))}`;
  return {
    d: `M${x1} ${y1} A${rr} ${rr} 0 ${buyuk} ${yon} ${x2} ${y2} M${x2} ${y2} L${u(0.5)} M${x2} ${y2} L${u(-0.5)}`,
    w: 1.1,
  };
}

export const onay = (x: number, y: number, s = 1): Cizgi => ({
  d: `M${x} ${y} L${r(x + 5 * s)} ${r(y + 5 * s)} L${r(x + 13 * s)} ${r(y - 7 * s)}`,
  w: 2,
});
export const carpi = (x: number, y: number, s = 5): Cizgi => ({
  d: `M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`,
  w: 1.8,
});

// Maket bıçağı: uç (x,y), sap sağ üste doğru
export const bicak = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x + 10} ${y - 14} L${x + 16} ${y - 10} Z`, w: 1.2, dolgu: true },
  { d: `M${x + 10} ${y - 14} L${x + 44} ${y - 40} L${x + 52} ${y - 30} L${x + 16} ${y - 10} Z`, w: 1.6, dolgu: true },
  { d: `M${x + 22} ${y - 22} L${x + 40} ${y - 36}`, w: 0.7 },
];

// Kurşun kalem: uç (x,y), sap sağ üste doğru
export const kalem = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x + 8} ${y - 12} L${x + 13} ${y - 6} Z`, w: 1.2, dolgu: true },
  { d: `M${x + 8} ${y - 12} L${x + 46} ${y - 42} L${x + 52} ${y - 36} L${x + 13} ${y - 6} Z`, w: 1.4, dolgu: true },
  { d: `M${x + 40} ${y - 37} L${x + 46} ${y - 31}`, w: 1 },
];

// Fırça: kıl ucu (x,y), sap sağ üste doğru
export const firca = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x} ${y} Q${x + 2} ${y - 8} ${x + 8} ${y - 12} L${x + 16} ${y - 4} Q${x + 10} ${y + 2} ${x} ${y} Z`,
    w: 1.3,
    dolgu: true,
  },
  { d: `M${x + 8} ${y - 12} L${x + 14} ${y - 18} L${x + 22} ${y - 10} L${x + 16} ${y - 4} Z`, w: 1.3, dolgu: true },
  { d: `M${x + 18} ${y - 14} L${x + 50} ${y - 38} L${x + 54} ${y - 33} L${x + 22} ${y - 10}`, w: 1.4, dolgu: true },
];

// Cetvel (yatay): sol üst (x,y)
export function cetvel(x: number, y: number, en: number, boy = 12): Cizgi[] {
  let cent = "";
  for (let i = 8; i < en; i += 8) cent += `M${x + i} ${y} L${x + i} ${y + (i % 40 === 0 ? 6 : 3)} `;
  return [
    { d: kutu(x, y, en, boy), w: 1.4, dolgu: true },
    { d: cent.trim(), w: 0.7 },
  ];
}

// Kesme altlığı: ızgaralı plaka
export function altlik(x: number, y: number, en: number, boy: number): Cizgi[] {
  let iz = "";
  for (let i = 12; i < en; i += 12) iz += `M${x + i} ${y} L${x + i} ${y + boy} `;
  for (let j = 10; j < boy; j += 10) iz += `M${x} ${y + j} L${x + en} ${y + j} `;
  return [
    { d: kutu(x, y, en, boy), w: 1.4 },
    { d: iz.trim(), w: 0.4 },
  ];
}

// Silikon tabancası: meme ucu (x,y), gövde sağda
export const silikon = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x + 12} ${y - 6} L${x + 14} ${y - 2} Z`, w: 1.2, dolgu: true },
  {
    d: `M${x + 12} ${y - 14} L${x + 52} ${y - 14} Q${x + 58} ${y - 14} ${x + 58} ${y - 8} L${x + 58} ${y - 2} Q${x + 58} ${y + 4} ${x + 52} ${y + 4} L${x + 12} ${y + 4} Z`,
    w: 1.6,
    dolgu: true,
  },
  { d: `M${x + 36} ${y + 4} L${x + 32} ${y + 30} L${x + 46} ${y + 30} L${x + 50} ${y + 4}`, w: 1.6, dolgu: true },
  { d: `M${x + 30} ${y + 6} Q${x + 26} ${y + 12} ${x + 32} ${y + 14}`, w: 1 },
  { d: kutu(x + 58, y - 11, 22, 8), w: 1.2 },
];

export const damla = (x: number, y: number, s = 1): Cizgi => ({
  d: `M${x} ${y} Q${r(x - 4 * s)} ${r(y + 6 * s)} ${x} ${r(y + 8 * s)} Q${r(x + 4 * s)} ${r(y + 6 * s)} ${x} ${y} Z`,
  w: 1,
  dolgu: true,
});

// Sprey kutusu: taban sol alt (x,y), püskürtme sola
export const sprey = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x} ${y} L${x} ${y - 40} Q${x} ${y - 46} ${x + 9} ${y - 46} Q${x + 18} ${y - 46} ${x + 18} ${y - 40} L${x + 18} ${y} Z`,
    w: 1.6,
    dolgu: true,
  },
  { d: kutu(x + 4, y - 54, 10, 8), w: 1.3, dolgu: true },
  { d: `M${x + 4} ${y - 50} L${x - 2} ${y - 50}`, w: 1.4 },
  { d: `M${x} ${y - 30} L${x + 18} ${y - 30} M${x} ${y - 14} L${x + 18} ${y - 14}`, w: 0.7 },
];

// Sprey bulutu: (x,y)'den sola koni şeklinde kesik çizgiler
export const sis = (x: number, y: number, boy = 50): Cizgi[] => [
  {
    d: `M${x} ${y} L${x - boy} ${y - 14} M${x} ${y} L${x - boy} ${y} M${x} ${y} L${x - boy} ${y + 14}`,
    w: 0.7,
    kesik: true,
  },
];

// Bilye: dolu daire + parıltı
export const bilye = (x: number, y: number, rr = 5): Cizgi[] => [
  { d: daire(x, y, rr), w: 1.4, dolgu: true },
  {
    d: `M${r(x - rr * 0.5)} ${r(y - rr * 0.2)} Q${r(x - rr * 0.4)} ${r(y - rr * 0.6)} ${x} ${r(y - rr * 0.6)}`,
    w: 0.8,
  },
];

// Eğimli kanal (yarım rulo): (x1,y1) → (x2,y2), kalınlık t; iç çizgi açık üstü gösterir
export function kanal(x1: number, y1: number, x2: number, y2: number, t = 8, kesik = false): Cizgi[] {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const nx = r(Math.sin(a) * t),
    ny = r(-Math.cos(a) * t);
  return [
    {
      d: `M${x1} ${y1} L${x2} ${y2} L${r(x2 - nx)} ${r(y2 - ny)} L${r(x1 - nx)} ${r(y1 - ny)} Z`,
      w: 1.5,
      dolgu: !kesik,
      kesik,
    },
    { d: `M${r(x1 - nx * 0.35)} ${r(y1 - ny * 0.35)} L${r(x2 - nx * 0.35)} ${r(y2 - ny * 0.35)}`, w: 0.6, kesik },
  ];
}

// Karton rulo (yatay tüp): sol uç (x, y-ç) … sağ uç; uç elipsi sağda
export function rulo(x: number, y: number, en: number, cap = 10): Cizgi[] {
  return [
    { d: `M${x} ${y - cap} L${x + en} ${y - cap} M${x} ${y + cap} L${x + en} ${y + cap}`, w: 1.6 },
    { d: `M${x} ${y - cap} Q${x - 6} ${y} ${x} ${y + cap}`, w: 1.4 },
    { d: daire(x + en, y, 4, cap), w: 1.4, dolgu: true },
    { d: daire(x + en, y, 2, cap - 3), w: 0.8 },
  ];
}

// Karton pano: dikdörtgen + oluk izleri
export function pano(x: number, y: number, en: number, boy: number): Cizgi[] {
  return [
    { d: kutu(x, y, en, boy), w: 1.8, dolgu: true },
    { d: `M${x + 6} ${y + 6} L${x + 6} ${y + boy - 6} M${x + en - 6} ${y + 6} L${x + en - 6} ${y + boy - 6}`, w: 0.5 },
  ];
}

// Maskeleme bandı parçası (küçük eğik şerit), merkez (x,y)
export const bant = (x: number, y: number): Cizgi => ({
  d: `M${x - 7} ${y - 2} L${x + 5} ${y - 6} L${x + 7} ${y + 2} L${x - 5} ${y + 6} Z`,
  w: 1,
  dolgu: true,
});

// Saksı (yan görünüş): üst kenar ortası (cx,y), üst genişlik en, yükseklik boy
export function saksi(cx: number, y: number, en: number, boy: number, delik = false): Cizgi[] {
  const ust = en / 2,
    alt = en * 0.36;
  const liste: Cizgi[] = [
    {
      d: `M${cx - ust} ${y + 8} L${cx - alt} ${y + boy} L${cx + alt} ${y + boy} L${cx + ust} ${y + 8}`,
      w: 1.8,
      dolgu: true,
    },
    { d: kutu(cx - ust - 3, y, en + 6, 8), w: 1.8, dolgu: true },
  ];
  if (delik)
    liste.push({
      d: `M${cx - 4} ${y + boy} L${cx - 4} ${y + boy + 3} M${cx + 4} ${y + boy} L${cx + 4} ${y + boy + 3}`,
      w: 1,
    });
  return liste;
}

// Sukulent rozeti: taban ortası (x,y), ölçek s
export function sukulent(x: number, y: number, s = 1): Cizgi[] {
  const yaprak = (aci: number, boy: number) => {
    const a = (aci * Math.PI) / 180;
    const ux = r(x + Math.cos(a) * boy * s),
      uy = r(y - Math.sin(a) * boy * s);
    const k1x = r(x + Math.cos(a + 0.4) * boy * 0.6 * s),
      k1y = r(y - Math.sin(a + 0.4) * boy * 0.6 * s);
    const k2x = r(x + Math.cos(a - 0.4) * boy * 0.6 * s),
      k2y = r(y - Math.sin(a - 0.4) * boy * 0.6 * s);
    return `M${x} ${y} Q${k1x} ${k1y} ${ux} ${uy} Q${k2x} ${k2y} ${x} ${y} Z`;
  };
  return [
    { d: [yaprak(160, 12), yaprak(20, 12)].join(" "), w: 1.2, dolgu: true },
    { d: [yaprak(125, 14), yaprak(55, 14)].join(" "), w: 1.2, dolgu: true },
    { d: yaprak(90, 13), w: 1.2, dolgu: true },
  ];
}

// Minyatür ev: taban sol (x,y), genişlik en
export const ev = (x: number, y: number, en = 26): Cizgi[] => [
  { d: kutu(x, y - en * 0.7, en, en * 0.7), w: 1.6, dolgu: true },
  {
    d: `M${r(x - 4)} ${r(y - en * 0.7)} L${r(x + en / 2)} ${r(y - en * 1.25)} L${r(x + en + 4)} ${r(y - en * 0.7)} Z`,
    w: 1.6,
    dolgu: true,
  },
  { d: kutu(r(x + en * 0.38), r(y - en * 0.4), r(en * 0.24), r(en * 0.4)), w: 1.2 },
];

// Telefon: sol üst (x,y)
export const telefon = (x: number, y: number, en = 34, boy = 62): Cizgi[] => [
  {
    d: `M${x + 5} ${y} L${x + en - 5} ${y} Q${x + en} ${y} ${x + en} ${y + 5} L${x + en} ${y + boy - 5} Q${x + en} ${y + boy} ${x + en - 5} ${y + boy} L${x + 5} ${y + boy} Q${x} ${y + boy} ${x} ${y + boy - 5} L${x} ${y + 5} Q${x} ${y} ${x + 5} ${y} Z`,
    w: 1.6,
    dolgu: true,
  },
  { d: kutu(x + 3, y + 7, en - 6, boy - 15), w: 0.8 },
];

// Devre kartı: sol üst (x,y); üst kenarda pin sırası
export function kart(x: number, y: number, en: number, boy: number, pin = 8): Cizgi[] {
  let p = "";
  const ara = (en - 8) / Math.max(pin - 1, 1);
  for (let i = 0; i < pin; i++) p += `M${r(x + 4 + i * ara)} ${y} L${r(x + 4 + i * ara)} ${y - 4} `;
  return [
    { d: kutu(x, y, en, boy), w: 1.6, dolgu: true },
    { d: p.trim(), w: 1.2 },
    { d: daire(x + 4, y + boy - 4, 1.5) + " " + daire(x + en - 4, y + boy - 4, 1.5), w: 0.8 },
  ];
}

// Kitap (yan görünüş): sol alt (x,y)
export const kitap = (x: number, y: number, en = 30, boy = 10): Cizgi[] => [
  { d: kutu(x, y - boy, en, boy), w: 1.4, dolgu: true },
  { d: `M${x + 3} ${y - boy + 3} L${x + en - 3} ${y - boy + 3} M${x + 3} ${y - 3} L${x + en - 3} ${y - 3}`, w: 0.5 },
];

// Üstten uçak silueti: burun (x,y) yukarı bakar, ölçek s
export function ucakUst(x: number, y: number, s = 1): Cizgi[] {
  const p = (dx: number, dy: number) => `${r(x + dx * s)} ${r(y + dy * s)}`;
  return [
    {
      d: `M${p(0, 0)} Q${p(5, 4)} ${p(5, 14)} L${p(5, 30)} L${p(48, 44)} L${p(48, 50)} L${p(5, 44)} L${p(4, 70)} L${p(18, 78)} L${p(18, 82)} L${p(0, 80)} L${p(-18, 82)} L${p(-18, 78)} L${p(-4, 70)} L${p(-5, 44)} L${p(-48, 50)} L${p(-48, 44)} L${p(-5, 30)} L${p(-5, 14)} Q${p(-5, 4)} ${p(0, 0)} Z`,
      w: 1.8,
      dolgu: true,
    },
    { d: `M${p(0, 10)} L${p(0, 22)}`, w: 1 },
  ];
}

// Parmak ucu (yuvarlak uçlu, yukarıdan aşağı bastıran): uç (x,y)
export const parmak = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x - 7} ${y - 34} L${x - 7} ${y - 6} Q${x - 7} ${y} ${x} ${y} Q${x + 7} ${y} ${x + 7} ${y - 6} L${x + 7} ${y - 34}`,
    w: 1.5,
    dolgu: true,
  },
  { d: `M${x - 4} ${y - 10} Q${x} ${y - 13} ${x + 4} ${y - 10}`, w: 0.8 },
];

// Tornavida: uç (x,y), sap sağ üste
export const tornavida = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x + 22} ${y - 16}`, w: 2.2 },
  { d: `M${x + 22} ${y - 16} L${x + 44} ${y - 34} L${x + 50} ${y - 27} L${x + 28} ${y - 9} Z`, w: 1.6, dolgu: true },
];

// Saat simgesi (bekleme)
export const saat = (x: number, y: number, rr = 8): Cizgi[] => [
  { d: daire(x, y, rr), w: 1.3, dolgu: true },
  { d: `M${x} ${y - rr + 3} L${x} ${y} L${x + rr - 3} ${y}`, w: 1.1 },
];

// Kablo (yumuşak kavis)
export const kablo = (x1: number, y1: number, x2: number, y2: number, egri = 12, w = 1.3): Cizgi => ({
  d: `M${x1} ${y1} C${x1} ${y1 + egri} ${x2} ${y2 - egri} ${x2} ${y2}`,
  w,
});

// Direnç (zikzak) yatay: sol uç (x,y)
export const direnc = (x: number, y: number, en = 24): Cizgi => {
  const a = en / 8;
  let d = `M${x} ${y} L${r(x + a)} ${y}`;
  for (let i = 1; i <= 6; i++) d += ` L${r(x + a + i * a)} ${i % 2 ? y - 4 : y + 4}`;
  return { d: d + ` L${x + en} ${y}`, w: 1.2 };
};

// Toprak simgesi
export const toprak = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y} L${x} ${y + 6} M${x - 8} ${y + 6} L${x + 8} ${y + 6} M${x - 5} ${y + 9} L${x + 5} ${y + 9} M${x - 2} ${y + 12} L${x + 2} ${y + 12}`,
  w: 1.2,
});

// ---------- Doğa & hayvan parçaları ----------
// Su yüzeyi (dalgalı): x1 → x2
export function suYuzu(x1: number, x2: number, y: number): Cizgi {
  let d = `M${x1} ${y}`;
  for (let x = x1; x < x2; x += 16) d += ` q4 -3 8 0 q4 3 8 0`;
  return { d, w: 1 };
}

// Şamandıra: dikey, gövde ortası (x,y)
export const samandira = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y - 20} Q${x + 7} ${y - 6} ${x} ${y + 10} Q${x - 7} ${y - 6} ${x} ${y - 20} Z`, w: 1.5, dolgu: true },
  { d: `M${x} ${y - 20} L${x} ${y - 36}`, w: 2 },
  { d: `M${x - 6} ${y - 6} L${x + 6} ${y - 6}`, w: 0.8 },
];

// Saçma kurşun
export const kursun = (x: number, y: number, rr = 3): Cizgi => ({ d: daire(x, y, rr), w: 1.2, dolgu: true });

// Fırdöndü: dikey, orta (x,y)
export const firdondu = (x: number, y: number): Cizgi[] => [
  { d: daire(x, y - 9, 3) + " " + daire(x, y + 9, 3), w: 1.2 },
  {
    d: `M${x - 3} ${y - 5} Q${x - 5} ${y} ${x - 3} ${y + 5} L${x + 3} ${y + 5} Q${x + 5} ${y} ${x + 3} ${y - 5} Z`,
    w: 1.3,
    dolgu: true,
  },
];

// İğne: göz üstte (x,y), kanca sağa kıvrılır
export const igne = (x: number, y: number, s = 1): Cizgi[] => [
  { d: daire(x, y, 2.5 * s), w: 1.1 },
  {
    d: `M${x} ${r(y + 2.5 * s)} L${x} ${r(y + 20 * s)} Q${x} ${r(y + 28 * s)} ${r(x + 7 * s)} ${r(y + 28 * s)} Q${r(x + 13 * s)} ${r(y + 28 * s)} ${r(x + 13 * s)} ${r(y + 20 * s)} L${r(x + 10 * s)} ${r(y + 23 * s)}`,
    w: 1.4,
  },
];

// Akvaryum (önden): sol üst (x,y); su çizgisi üstten 8 aşağıda
export const akvaryum = (x: number, y: number, en: number, boy: number): Cizgi[] => [
  { d: kutu(x, y, en, boy), w: 1.8 },
  { d: `M${x - 3} ${y} L${x + en + 3} ${y} M${x - 3} ${y + boy} L${x + en + 3} ${y + boy}`, w: 2.4 },
  suYuzu(x + 2, x + en - 10, y + 8),
];

// Cımbız: uç (x,y), sap sağ üste uzun
export const cimbiz = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x + 50} ${y - 54} M${x + 4} ${y + 2} L${x + 56} ${y - 50}`, w: 1.6 },
  { d: `M${x + 50} ${y - 54} L${x + 56} ${y - 50}`, w: 1.6 },
];

// Gövdeli bitki (sap + karşılıklı yapraklar): taban (x,y), boy
export function sapBitki(x: number, y: number, boy: number): Cizgi[] {
  let yap = "";
  for (let h = 8; h < boy; h += 8) {
    const yy = y - h;
    yap += `M${x} ${yy} Q${x - 6} ${yy - 4} ${x - 9} ${yy - 1} Q${x - 5} ${yy + 2} ${x} ${yy} M${x} ${yy - 3} Q${x + 6} ${yy - 7} ${x + 9} ${yy - 4} Q${x + 5} ${yy - 1} ${x} ${yy - 3} `;
  }
  return [
    { d: `M${x} ${y} Q${x - 2} ${y - boy / 2} ${x} ${y - boy}`, w: 1.2 },
    { d: yap.trim(), w: 0.9, dolgu: true },
  ];
}

// Kavanoz: alt orta (cx, y), genişlik en, yükseklik boy; kapaklı
export const kavanoz = (cx: number, y: number, en: number, boy: number, kapak = true): Cizgi[] => {
  const l = cx - en / 2,
    rr = cx + en / 2;
  const liste: Cizgi[] = [
    {
      d: `M${l + 8} ${y - boy + 10} Q${l} ${y - boy + 18} ${l} ${y - boy + 30} L${l} ${y - 8} Q${l} ${y} ${l + 8} ${y} L${rr - 8} ${y} Q${rr} ${y} ${rr} ${y - 8} L${rr} ${y - boy + 30} Q${rr} ${y - boy + 18} ${rr - 8} ${y - boy + 10}`,
      w: 1.8,
    },
    { d: `M${l + 10} ${y - boy + 22} Q${l + 6} ${y - boy + 40} ${l + 8} ${y - 20}`, w: 0.6 },
  ];
  if (kapak) liste.push({ d: kutu(l + 6, y - boy, en - 12, 10), w: 1.8, dolgu: true });
  return liste;
};

// Kuş evi (önden): taban orta (cx,y)
export const kusEvi = (cx: number, y: number, en = 40, boy = 56, delik = true): Cizgi[] => {
  const l = cx - en / 2,
    rr = cx + en / 2;
  const liste: Cizgi[] = [
    {
      d: `M${l} ${y} L${l} ${y - boy} L${cx} ${y - boy - en * 0.45} L${rr} ${y - boy} L${rr} ${y} Z`,
      w: 1.8,
      dolgu: true,
    },
    { d: `M${l - 6} ${y - boy + 4} L${cx} ${y - boy - en * 0.55} L${rr + 6} ${y - boy + 4}`, w: 2.4 },
  ];
  if (delik) liste.push({ d: daire(cx, y - boy + 14, en * 0.16), w: 1.4 });
  return liste;
};

// Pet şişe: alt orta (cx,y)
export const sise = (cx: number, y: number, en = 30, boy = 84): Cizgi[] => {
  const l = cx - en / 2,
    rr = cx + en / 2;
  return [
    {
      d: `M${l} ${y} L${l} ${y - boy + 26} Q${l} ${y - boy + 14} ${cx - 5} ${y - boy + 8} L${cx - 5} ${y - boy} L${cx + 5} ${y - boy} L${cx + 5} ${y - boy + 8} Q${rr} ${y - boy + 14} ${rr} ${y - boy + 26} L${rr} ${y} Z`,
      w: 1.7,
      dolgu: true,
    },
    { d: kutu(cx - 6, y - boy - 6, 12, 6), w: 1.5, dolgu: true },
    { d: `M${l + 4} ${y - boy + 30} L${l + 4} ${y - 10}`, w: 0.6 },
  ];
};

// Makas: uç (x,y), saplar sağda
export const makas = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x + 30} ${y - 8} M${x} ${y} L${x + 30} ${y + 8}`, w: 1.6 },
  { d: daire(x + 38, y - 10, 7) + " " + daire(x + 38, y + 10, 7), w: 1.6, dolgu: true },
  { d: daire(x + 24, y, 1.5), w: 1 },
];

// Fide / ot: taban (x,y)
export const fide = (x: number, y: number, s = 1): Cizgi[] => [
  { d: `M${x} ${y} L${x} ${r(y - 14 * s)}`, w: 1.1 },
  {
    d: `M${x} ${r(y - 8 * s)} Q${r(x - 10 * s)} ${r(y - 14 * s)} ${r(x - 12 * s)} ${r(y - 6 * s)} Q${r(x - 5 * s)} ${r(y - 4 * s)} ${x} ${r(y - 8 * s)} M${x} ${r(y - 12 * s)} Q${r(x + 10 * s)} ${r(y - 18 * s)} ${r(x + 12 * s)} ${r(y - 10 * s)} Q${r(x + 5 * s)} ${r(y - 8 * s)} ${x} ${r(y - 12 * s)} M${x} ${r(y - 14 * s)} Q${r(x - 4 * s)} ${r(y - 24 * s)} ${x} ${r(y - 26 * s)} Q${r(x + 4 * s)} ${r(y - 24 * s)} ${x} ${r(y - 14 * s)}`,
    w: 1,
    dolgu: true,
  },
];

// Hava kabarcıkları: (x,y) etrafında yükselen küçük daireler
export const kabarcik = (x: number, y: number): Cizgi => ({
  d: [daire(x, y, 2), daire(x + 3, y - 9, 2.5), daire(x - 2, y - 19, 2), daire(x + 2, y - 28, 3)].join(" "),
  w: 0.9,
});

// ---------- El sanatları parçaları ----------
// Tahta (üstten): sol üst (x,y); lif çizgileri uzun kenar boyunca
export function tahta(x: number, y: number, en: number, boy: number, lif = true): Cizgi[] {
  const liste: Cizgi[] = [{ d: kutu(x, y, en, boy), w: 1.8, dolgu: true }];
  if (lif) {
    let d = "";
    for (let j = 1; j <= 3; j++) {
      const yy = r(y + (boy * j) / 4);
      d += `M${x + 6} ${yy} Q${r(x + en * 0.3)} ${yy - 2} ${r(x + en * 0.55)} ${yy} T${x + en - 6} ${yy} `;
    }
    liste.push({ d: d.trim(), w: 0.5 });
  }
  return liste;
}

// İşkence (C-klemp, yandan): sıkma noktası (x,y) üst çene, kol aşağı
export const iskence = (x: number, y: number, ac = 24): Cizgi[] => [
  {
    d: `M${x - 6} ${y - 6} L${x - 6} ${y - 12} L${x + 26} ${y - 12} L${x + 26} ${y + ac + 12} L${x - 6} ${y + ac + 12} L${x - 6} ${y + ac + 6}`,
    w: 2,
  },
  { d: `M${x} ${y - 6} L${x} ${y - 2} M${x - 6} ${y - 6} L${x + 6} ${y - 6}`, w: 1.6 },
  { d: `M${x} ${y + ac + 6} L${x} ${y + ac} M${x - 6} ${y + ac + 6} L${x + 6} ${y + ac + 6}`, w: 1.6 },
  { d: `M${x} ${y + ac + 12} L${x} ${y + ac + 26} M${x - 7} ${y + ac + 26} L${x + 7} ${y + ac + 26}`, w: 1.8 },
];

// Dekupaj / kıl testere: bıçak üstten (x,y) aşağı boy; C çerçeve sağa, sap altta
export const dekupaj = (x: number, y: number, boy = 34): Cizgi[] => [
  { d: `M${x} ${y} L${x} ${y + boy}`, w: 0.9 },
  { d: `M${x} ${y} C${x + boy * 1.2} ${y - boy * 0.25} ${x + boy * 1.2} ${y + boy * 1.25} ${x} ${y + boy}`, w: 1.8 },
  { d: `M${x} ${y + boy} L${r(x - 6)} ${r(y + boy + 14)}`, w: 3.4 },
];

// El testeresi: diş hattı sol uç (x,y) → sağa en; sap sağda
export function testere(x: number, y: number, en = 80): Cizgi[] {
  let dis = `M${x} ${y}`;
  for (let i = 4; i <= en; i += 4) dis += ` L${x + i - 2} ${y + 3} L${x + i} ${y}`;
  return [
    { d: `M${x} ${y} L${x} ${y - 10} L${x + en} ${y - 16} L${x + en} ${y}`, w: 1.4, dolgu: true },
    { d: dis, w: 0.7 },
    {
      d: `M${x + en} ${y - 18} L${x + en + 20} ${y - 22} Q${x + en + 26} ${y - 8} ${x + en + 20} ${y + 4} L${x + en} ${y + 2} Z`,
      w: 1.6,
      dolgu: true,
    },
  ];
}

// Gönye (L): iç köşe (x,y), kollar sağa ve aşağı
export const gonye = (x: number, y: number, k = 40): Cizgi[] => [
  {
    d: `M${x} ${y} L${x + k} ${y} L${x + k} ${y - 6} L${x - 6} ${y - 6} L${x - 6} ${y + k} L${x} ${y + k} Z`,
    w: 1.5,
    dolgu: true,
  },
];

// Zımpara takozu: sol üst (x,y); alt yüz zımparalı
export const zimpara = (x: number, y: number, en = 36, boy = 14): Cizgi[] => [
  { d: kutu(x, y, en, boy), w: 1.6, dolgu: true },
  { d: zikzakYol(x + 2, y + boy, x + en - 2, y + boy), w: 0.6 },
];
function zikzakYol(x1: number, y1: number, x2: number, y2: number) {
  let d = `M${x1} ${y1 + 1}`;
  for (let x = x1 + 3; x <= x2; x += 3) d += ` L${x} ${y1 + (((x - x1) / 3) % 2 ? 3 : 1)}`;
  return d;
}

// Bez (buruşuk kumaş): merkez (x,y)
export const bez = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x - 18} ${y + 6} Q${x - 22} ${y - 6} ${x - 10} ${y - 10} Q${x} ${y - 16} ${x + 10} ${y - 9} Q${x + 22} ${y - 6} ${x + 18} ${y + 6} Q${x} ${y + 12} ${x - 18} ${y + 6} Z`,
    w: 1.4,
    dolgu: true,
  },
  {
    d: `M${x - 10} ${y - 2} Q${x - 2} ${y - 6} ${x + 6} ${y - 1} M${x - 6} ${y + 4} Q${x + 2} ${y + 1} ${x + 10} ${y + 4}`,
    w: 0.7,
  },
];

// Termometre (çubuk): üst (x,y), boy aşağı, uçta hazne
export const termometre = (x: number, y: number, boy = 50): Cizgi[] => [
  {
    d: `M${x - 2.5} ${y} L${x - 2.5} ${y + boy} M${x + 2.5} ${y} L${x + 2.5} ${y + boy} M${x - 2.5} ${y} Q${x} ${y - 4} ${x + 2.5} ${y}`,
    w: 1.3,
  },
  { d: daire(x, y + boy + 3, 4), w: 1.3, dolgu: true },
  { d: `M${x} ${y + 12} L${x} ${y + boy}`, w: 1.6 },
];

// Tencere (yandan): üst kenar ortası (cx,y)
export const tencere = (cx: number, y: number, en = 80, boy = 34): Cizgi[] => [
  {
    d: `M${cx - en / 2} ${y} L${cx - en / 2 + 4} ${y + boy} L${cx + en / 2 - 4} ${y + boy} L${cx + en / 2} ${y}`,
    w: 1.8,
    dolgu: true,
  },
  {
    d: `M${cx - en / 2 - 12} ${y + 6} L${cx - en / 2} ${y + 6} M${cx + en / 2} ${y + 6} L${cx + en / 2 + 12} ${y + 6}`,
    w: 2.2,
  },
];

// Küçük alev: taban ortası (x,y)
export const alev = (x: number, y: number, s = 1): Cizgi => ({
  d: `M${x} ${y} Q${r(x - 5 * s)} ${r(y - 6 * s)} ${x} ${r(y - 14 * s)} Q${r(x + 5 * s)} ${r(y - 6 * s)} ${x} ${y} Z`,
  w: 1.1,
  dolgu: true,
});

// Silikon kalıp (yandan kesit): sol üst (x,y), n göz
export function kalip(x: number, y: number, n = 3, goz = 30, derin = 16): Cizgi[] {
  const en = n * goz + (n + 1) * 6;
  let ic = "";
  for (let i = 0; i < n; i++) {
    const gx = x + 6 + i * (goz + 6);
    ic += `M${gx} ${y} L${gx + 2} ${y + derin} L${gx + goz - 2} ${y + derin} L${gx + goz} ${y} `;
  }
  return [
    { d: kutu(x, y, en, derin + 6), w: 1.8, dolgu: true },
    { d: ic.trim(), w: 1.2 },
  ];
}

// Damlalıklı şişe: taban ortası (x,y), uç yukarıda
export const damlalik = (x: number, y: number): Cizgi[] => [
  { d: kutu(x - 8, y - 26, 16, 26), w: 1.5, dolgu: true },
  { d: `M${x - 4} ${y - 26} L${x - 3} ${y - 34} L${x + 3} ${y - 34} L${x + 4} ${y - 26}`, w: 1.3, dolgu: true },
  { d: `M${x - 2} ${y - 34} L${x} ${y - 40} L${x + 2} ${y - 34}`, w: 1.1 },
];

// Kase (yandan): üst kenar ortası (cx,y)
export const kase = (cx: number, y: number, en = 50, boy = 24): Cizgi => ({
  d: `M${cx - en / 2} ${y} Q${cx - en / 2} ${y + boy} ${cx} ${y + boy} Q${cx + en / 2} ${y + boy} ${cx + en / 2} ${y}`,
  w: 1.8,
  dolgu: true,
});

// Matkap ucu + gövde: uç (x,y) aşağı bakar
export const matkap = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x} ${y - 18}`, w: 1.6 },
  { d: zikzakDik(x, y - 2, y - 16), w: 0.6 },
  { d: `M${x - 6} ${y - 18} L${x + 6} ${y - 18} L${x + 5} ${y - 26} L${x - 5} ${y - 26} Z`, w: 1.4, dolgu: true },
  { d: `M${x - 10} ${y - 26} L${x + 26} ${y - 26} L${x + 26} ${y - 46} L${x - 10} ${y - 46} Z`, w: 1.6, dolgu: true },
  { d: `M${x + 14} ${y - 26} L${x + 18} ${y - 6} L${x + 28} ${y - 6} L${x + 24} ${y - 26}`, w: 1.6, dolgu: true },
];
function zikzakDik(x: number, y1: number, y2: number) {
  let d = `M${x} ${y1}`;
  for (let y = y1 - 3, i = 0; y >= y2; y -= 3, i++) d += ` L${x + (i % 2 ? -2 : 2)} ${y}`;
  return d;
}

// Vida başı (üstten): merkez (x,y)
export const vida = (x: number, y: number, rr = 3): Cizgi => ({
  d: daire(x, y, rr) + ` M${x - rr + 1} ${y} L${x + rr - 1} ${y}`,
  w: 1,
});

// Şişe (ince boyunlu, yağ/esans): taban ortası (x,y)
export const yagSisesi = (x: number, y: number, en = 18, boy = 40): Cizgi[] => [
  {
    d: `M${x - en / 2} ${y} L${x - en / 2} ${y - boy + 12} Q${x - en / 2} ${y - boy + 6} ${x - 3} ${y - boy + 4} L${x - 3} ${y - boy} L${x + 3} ${y - boy} L${x + 3} ${y - boy + 4} Q${x + en / 2} ${y - boy + 6} ${x + en / 2} ${y - boy + 12} L${x + en / 2} ${y} Z`,
    w: 1.6,
    dolgu: true,
  },
];
