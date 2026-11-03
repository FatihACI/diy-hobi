import { Adim, Malzeme } from "./types";

// Kısa yazım yardımcıları: m("id", "ad", "miktar", aletMi), a("başlık", "açıklama")
export const m = (id: string, ad: string, miktar: string, arac = false): Malzeme => ({ id, ad, miktar, arac });
export const a = (baslik: string, aciklama: string): Adim => ({ baslik, aciklama });
