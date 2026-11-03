import { Kategori, KategoriGrubu } from "./types";

export const GRUPLAR: KategoriGrubu[] = ["Çocuk & Oyun", "Doğa & Hayvan", "El Sanatları", "Teknik & Ev"];

export const KATEGORILER: Kategori[] = [
  // Çocuk & Oyun
  { id: "oyuncak", grup: "Çocuk & Oyun", ad: "Oyuncak", aciklama: "Çocuklar için ahşap, keçe ve karton oyuncaklar", ikon: "teddy-bear", renkler: ["#F97316", "#FB923C"] },
  { id: "maket", grup: "Çocuk & Oyun", ad: "Maket & Diorama", aciklama: "Plastik maket, diorama zemini ve minyatür oda", ikon: "airplane", renkler: ["#64748B", "#94A3B8"] },
  { id: "rc", grup: "Çocuk & Oyun", ad: "RC & Drone", aciklama: "Uzaktan kumandalı araç, planör ve mini drone", ikon: "quadcopter", renkler: ["#DC2626", "#F87171"] },
  // Doğa & Hayvan
  { id: "balikcilik", grup: "Doğa & Hayvan", ad: "Balıkçılık", aciklama: "Olta takımı, sahte yem ve ekipman", ikon: "fish", renkler: ["#0EA5E9", "#38BDF8"] },
  { id: "akvaryum", grup: "Doğa & Hayvan", ad: "Akvaryum", aciklama: "Kurulum, filtre ve bitkili akvaryum", ikon: "fishbowl-outline", renkler: ["#14B8A6", "#2DD4BF"] },
  { id: "terraryum", grup: "Doğa & Hayvan", ad: "Terraryum", aciklama: "Cam içinde minyatür bahçeler", ikon: "leaf", renkler: ["#15803D", "#4ADE80"] },
  { id: "kus-evi", grup: "Doğa & Hayvan", ad: "Kuş Evi & Evcil Hayvan", aciklama: "Kuş yuvası, yemlik ve kedi aksesuarları", ikon: "bird", renkler: ["#B45309", "#F59E0B"] },
  { id: "bahce", grup: "Doğa & Hayvan", ad: "Bahçe & Saksı", aciklama: "Topraksız tarım, sulama ve kompost", ikon: "shovel", renkler: ["#65A30D", "#A3E635"] },
  // El Sanatları
  { id: "ahsap", grup: "El Sanatları", ad: "Ahşap İşleri", aciklama: "Raf, kutu, kesme tahtası ve daha fazlası", ikon: "hand-saw", renkler: ["#A16207", "#CA8A04"] },
  { id: "mum-sabun", grup: "El Sanatları", ad: "Mum & Sabun", aciklama: "Kokulu mum ve el yapımı sabun", ikon: "candle", renkler: ["#DB2777", "#F472B6"] },
  { id: "epoksi", grup: "El Sanatları", ad: "Epoksi Reçine", aciklama: "Altlık, nehir masa ve reçine takı", ikon: "beaker-outline", renkler: ["#0891B2", "#22D3EE"] },
  { id: "makrome", grup: "El Sanatları", ad: "Makrome & Örgü", aciklama: "Düğümle askı, duvar süsü ve amigurumi", ikon: "needle", renkler: ["#9333EA", "#C084FC"] },
  { id: "kil", grup: "El Sanatları", ad: "Polimer Kil & Seramik", aciklama: "Küpe, takı tabağı ve minyatürler", ikon: "pot-outline", renkler: ["#C2410C", "#FB923C"] },
  { id: "deri", grup: "El Sanatları", ad: "Deri İşçiliği", aciklama: "Kartlık, anahtarlık ve kemer", ikon: "wallet-outline", renkler: ["#78350F", "#A16207"] },
  { id: "taki", grup: "El Sanatları", ad: "Takı Tasarımı", aciklama: "Bileklik, tel sarma kolye ve küpe", ikon: "diamond-stone", renkler: ["#BE185D", "#EC4899"] },
  { id: "pirografi", grup: "El Sanatları", ad: "Pirografi & Resim", aciklama: "Ahşap yakma, taş boyama ve akışkan resim", ikon: "palette-outline", renkler: ["#7C2D12", "#EA580C"] },
  // Teknik & Ev
  { id: "elektronik", grup: "Teknik & Ev", ad: "Elektronik", aciklama: "Arduino ile sensörlü projeler", ikon: "chip", renkler: ["#6366F1", "#818CF8"] },
  { id: "baski3d", grup: "Teknik & Ev", ad: "3D Baskı", aciklama: "Kalibrasyon, ilk baskılar ve kendi tasarımın", ikon: "printer-3d", renkler: ["#0F766E", "#14B8A6"] },
  { id: "bisiklet", grup: "Teknik & Ev", ad: "Bisiklet Bakımı", aciklama: "Lastik, zincir ve fren bakımı", ikon: "bicycle", renkler: ["#1D4ED8", "#60A5FA"] },
  { id: "ev-tamir", grup: "Teknik & Ev", ad: "Ev Tamiratı", aciklama: "Musluk, duvar ve silikon tamiri", ikon: "hammer-wrench", renkler: ["#4B5563", "#9CA3AF"] },
];

export const kategoriBul = (id: string) => KATEGORILER.find((k) => k.id === id)!;
