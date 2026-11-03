import type { ComponentProps } from "react";
import type { MaterialCommunityIcons } from "@expo/vector-icons";

export type IkonAdi = ComponentProps<typeof MaterialCommunityIcons>["name"];
export type Zorluk = "Kolay" | "Orta" | "Zor";

export type Fiyat = {
  magaza: string;      // "Trendyol", "Hepsiburada"...
  fiyat: number;       // TL
  url: string;
  guncelleme: string;  // ISO tarih
};

export type Malzeme = {
  id: string;
  ad: string;
  miktar: string;
  arac?: boolean;      // true: alet (bir kez alınır), false: sarf malzeme
};

export type Adim = { baslik: string; aciklama: string };

export type Kategori = {
  id: string;
  ad: string;
  aciklama: string;
  ikon: IkonAdi;
  renkler: [string, string];  // gradyan
};

export type Proje = {
  id: string;
  kategoriId: string;
  ad: string;
  ozet: string;
  ikon: IkonAdi;
  zorluk: Zorluk;
  sure: string;
  yas?: string;           // örn. "12+ / yetişkin gözetiminde"
  malzemeler: Malzeme[];
  adimlar: Adim[];
  ipuclari: string[];
  guvenlik: string[];
  kod?: string;           // elektronik projeleri için Arduino kodu
};
