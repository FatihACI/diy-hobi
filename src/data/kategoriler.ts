import { Kategori } from "./types";

export const KATEGORILER: Kategori[] = [
  { id: "oyuncak", ad: "Oyuncak", aciklama: "Çocuklar için ahşap, keçe ve karton oyuncaklar", ikon: "teddy-bear", renkler: ["#F97316", "#FB923C"] },
  { id: "balikcilik", ad: "Balıkçılık", aciklama: "Olta takımı, sahte yem ve ekipman", ikon: "fish", renkler: ["#0EA5E9", "#38BDF8"] },
  { id: "akvaryum", ad: "Akvaryum", aciklama: "Kurulum, filtre ve bitkili akvaryum", ikon: "fishbowl-outline", renkler: ["#14B8A6", "#2DD4BF"] },
  { id: "ahsap", ad: "Ahşap İşleri", aciklama: "Raf, kutu, kesme tahtası ve daha fazlası", ikon: "hand-saw", renkler: ["#A16207", "#CA8A04"] },
  { id: "elektronik", ad: "Elektronik", aciklama: "Arduino ile sensörlü projeler", ikon: "chip", renkler: ["#6366F1", "#818CF8"] },
];

export const kategoriBul = (id: string) => KATEGORILER.find((k) => k.id === id)!;
