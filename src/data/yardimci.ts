import { Adim, IkonAdi, Malzeme, Proje, Zorluk } from "./types";

// Kısa yazım yardımcıları: m("id", "ad", "miktar", aletMi), a("başlık", "açıklama")
export const m = (id: string, ad: string, miktar: string, arac = false): Malzeme => ({ id, ad, miktar, arac });
export const a = (baslik: string, aciklama: string): Adim => ({ baslik, aciklama });

// Kısa proje tanımı: malzeme id'leri proje id'sinden otomatik üretilir (çakışma olmaz)
type MalzemeSatiri = [ad: string, miktar: string] | [ad: string, miktar: string, arac: true];
type AdimSatiri = [baslik: string, aciklama: string];

export function kategoriProjesi(kategoriId: string) {
  return (
    id: string,
    ikon: IkonAdi,
    ad: string,
    zorluk: Zorluk,
    sure: string,
    ozet: string,
    malzemeler: MalzemeSatiri[],
    adimlar: AdimSatiri[],
    ipuclari: string[],
    guvenlik: string[],
    ek: Partial<Proje> = {},
  ): Proje => ({
    id,
    kategoriId,
    ikon,
    ad,
    zorluk,
    sure,
    ozet,
    malzemeler: malzemeler.map(([mad, miktar, arac], i) => ({ id: `${id}-${i + 1}`, ad: mad, miktar, arac: !!arac })),
    adimlar: adimlar.map(([baslik, aciklama]) => ({ baslik, aciklama })),
    ipuclari,
    guvenlik,
    ...ek,
  });
}
