// Merkezi malzeme kataloğu.
// Her malzeme satırı, adından türetilen SABİT bir katalog kimliğine (kid) bağlanır:
//   "Ahşap tutkalı (D3)" ve "Ahşap tutkalı (hızlı)" → "ahsap-tutkali"
// Neden: aynı ürün 10 projede geçse de fiyatı BİR kez girilir/eşlenir; alışveriş listesi
// aynı kalemi birleştirebilir; malzeme sırası değişse de fiyat ve liste kaymaz.
//
// Kural: parantez içi açıklama atılır (renk, "taban için", "vb." gibi satın almayı değiştirmeyen notlar).
// Satın almayı DEĞİŞTİREN parantezler AYIRT listesinde tutulur; elle birleştirmeler ESANLAMLI'dadır.
import { slug } from "./metin";

// Parantez içi bilgi ürünü değiştiriyorsa tam ad korunur (tam slug yazılır)
export const AYIRT = new Set([
  "silikon-akvaryum-uyumlu", // akvaryum silikonu küf önleyici içermez; sıradan silikon balığı zehirler
  "silikon-kalip-sizdirmazligi",
  "kupe-kancasi-nikelsiz", // alerji
  "bahce-topragi-gubresiz",
  "tuz-iyotsuz",
  "cam-kavanoz-isiya-dayanikli", // sıcak mum/sabun dökülür
  "kostik-soda-saf-naoh",
  "kostik-soda-sodyum-hidroksit-saf",
]);

// Aynı ürünün farklı yazımları → tek katalog kimliği (sol: kural sonrası anahtar, sağ: hedef)
export const ESANLAMLI: Record<string, string> = {
  // Çocuk oyuncaklarında EN 71-3 şart: ikisi de standartlı ürüne bağlanır
  "su-bazli-oyuncak-boyasi": "su-bazli-oyuncak-boyasi-en-71-3",
  "kostik-soda-saf-naoh": "kostik-soda-sodyum-hidroksit-saf",
  "alyan-allen-anahtar-seti": "alyan-anahtar-seti",
  "maket-bicagi-bol-yedek-uclu": "maket-bicagi",
};

// Her evde bulunan, ücretsiz veya geri dönüşümden gelen kalemler: fiyat aranmaz,
// "Fiyat yakında" yerine "Evde bulunur" gösterilir, maliyet hesabında eksik sayılmaz.
export const EVDE = new Set([
  "dilimleme-yazilimi",
  "bilgisayar",
  "bilgisayar-ucretsiz-tinkercad-hesabi",
  "bilgisayar-yapilandirma-yazilimi",
  "eski-akilli-telefon",
  "su",
  "tuz",
  "firin",
  "makas",
  "kagit-havlu",
  "karton-rulo",
  "karton-kutu",
  "buyuk-karton-kutu",
  "karton-gazete",
  "pet-sise-1-5-l",
  "pet-sise-2-l",
  "dal-parcalari",
  "1-5-l-pet-sise",
  "bos-pet-sise-500-ml",
  "buyuk-seffaf-pet-sise",
  "bos-seffaf-sise",
  "gazli-icecek-sisesi-1-5-2-l",
  "su-haznesi",
  "sise-kapagi",
  "sporcu-suyu-sisesi-kapagi",
  "temiz-kavanoz",
  "cam-kavanoz",
  "kapakli-kavanoz",
  "genis-agizli-kavanoz",
  "kucuk-kapakli-kavanoz",
  "kavanoz-veya-kalip",
  "pet-sise-veya-karton-govde",
  "pet-sise-veya-plastik-kutu",
  "silindir",
  "sicak-su",
  "sac-kurutma-makinesi",
  "eski-dis-fircasi",
  "buyuk-koli-kutusu",
  "kagit-huni",
  "yumusak-bez",
  "tabla-seviyeleme-test-dosyasi",
  "test-modeli",
  "yazdirilmis-yazi-sablonu",
  "yazi-sablonu",
  "desen-sablonu",
  "sablon",
  "kalin-kalem-veya-boru",
  "kurdan-veya-boncuk-ignesi",
  "bicak",
  "bisiklet-standi",
  "kaplar-ve-cubuklar",
]);

export function katalogKimligi(ad: string): string {
  const tam = slug(ad);
  const anahtar = AYIRT.has(tam) ? tam : slug(ad.replace(/\(.*?\)/g, " ")) || tam;
  return ESANLAMLI[anahtar] ?? anahtar;
}
