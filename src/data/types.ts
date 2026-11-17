import type { ComponentProps } from "react";
import type { MaterialCommunityIcons } from "@expo/vector-icons";

export type IkonAdi = ComponentProps<typeof MaterialCommunityIcons>["name"];
export type Zorluk = "Kolay" | "Orta" | "Zor";

export type Fiyat = {
  magaza: string; // "Trendyol", "Hepsiburada"...
  fiyat: number; // TL
  url: string;
  guncelleme: string; // ISO tarih
};

export type Malzeme = {
  id: string;
  kid?: string; // katalog kimliği (src/data/katalog.ts); PROJELER dışa aktarılırken doldurulur
  evde?: boolean; // evde bulunur / ücretsiz (fiyat aranmaz); PROJELER dışa aktarılırken doldurulur
  ad: string;
  miktar: string;
  arac?: boolean; // true: alet (bir kez alınır), false: sarf malzeme
};

export type Adim = {
  baslik: string;
  aciklama: string;
  sure?: string; // bu adımın tahmini süresi ("10 dk")
  kontrol?: string; // "doğru oldu mu?" kontrol noktası
};

export type KategoriGrubu = "Çocuk & Oyun" | "Doğa & Hayvan" | "El Sanatları" | "Teknik & Ev";

export type Kategori = {
  id: string;
  grup: KategoriGrubu;
  ad: string;
  aciklama: string;
  ikon: IkonAdi;
  renkler: [string, string]; // gradyan
};

export type Proje = {
  id: string;
  kategoriId: string;
  ad: string;
  ozet: string;
  ikon: IkonAdi;
  zorluk: Zorluk;
  sure: string;
  yas?: string; // örn. "12+ / yetişkin gözetiminde"
  malzemeler: Malzeme[];
  adimlar: Adim[];
  ipuclari: string[];
  guvenlik: string[];
  kod?: string; // elektronik projeleri için Arduino kodu
  altin?: boolean; // Altın 40: derinleştirilmiş, öne çıkan proje
  sikHatalar?: string[]; // sık yapılan hatalar ve çözümleri
};
