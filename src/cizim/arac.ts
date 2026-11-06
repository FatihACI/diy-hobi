// Çizim veri tipleri ve yardımcı fonksiyonlar (viewBox 0 0 160 160)

export type Cizgi = { d: string; w?: number; dolgu?: boolean; kesik?: boolean };
export type Tarama = {
  id: string;
  sinir: string; // tarama bu şeklin içine kırpılır
  kutu: [number, number, number, number]; // taranacak alan (x, y, en, boy)
  aralik?: number;
  ters?: boolean;
  sonra?: number; // hangi çizgiden sonra çizilsin (varsayılan: en başta)
};
export type Cizim = { cizgiler: Cizgi[]; taramalar?: Tarama[]; noktalar?: [number, number, number][] };

// Kutuyu çapraz çizgilerle doldur
export function taramaYollari([x, y, w, h]: Tarama["kutu"], aralik: number, ters?: boolean) {
  const d: string[] = [];
  for (let t = -h; t < w; t += aralik) {
    d.push(ters ? `M${x + t} ${y} L${x + t + h} ${y + h}` : `M${x + t} ${y + h} L${x + t + h} ${y}`);
  }
  return d.join(" ");
}

// Koordinatları 2 ondalığa yuvarla (Android SVG ayrıştırıcısı katıdır)
export const yuvarla = (x: number) => Math.round(x * 100) / 100;

// Testere dişi gibi zikzak
export function zikzak(x1: number, y1: number, x2: number, y2: number, n: number, boy: number) {
  const dx = (x2 - x1) / n,
    dy = (y2 - y1) / n;
  const len = Math.hypot(dx, dy);
  if (!len || n < 1) return `M${x1} ${y1} L${x2} ${y2}`; // sıfır uzunluk: NaN üretme
  const nx = (-dy / len) * boy,
    ny = (dx / len) * boy;
  let d = `M${x1} ${y1}`;
  for (let i = 0; i < n; i++) {
    d += ` L${yuvarla(x1 + dx * (i + 0.5) + nx)} ${yuvarla(y1 + dy * (i + 0.5) + ny)} L${yuvarla(x1 + dx * (i + 1))} ${yuvarla(y1 + dy * (i + 1))}`;
  }
  return d;
}

// Daire / elips yolu
export const daire = (x: number, y: number, r: number, ry = r) =>
  `M${x - r} ${y} a${r} ${ry} 0 1 0 ${2 * r} 0 a${r} ${ry} 0 1 0 ${-2 * r} 0`;

// Dikdörtgen yolu
export const kutu = (x: number, y: number, w: number, h: number) =>
  `M${x} ${y} L${x + w} ${y} L${x + w} ${y + h} L${x} ${y + h} Z`;

// Dalgalı su çizgisi
export const dalga = (x: number, y: number, adet: number, en = 12, boy = 3) =>
  `M${x} ${y}` + ` q${en / 2} ${-boy} ${en} 0`.repeat(1) + ` t${en} 0`.repeat(adet - 1);
