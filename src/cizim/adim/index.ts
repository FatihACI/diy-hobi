// Adım çizimleri: proje kimliği → adım sırasına göre karakalem sahneler (viewBox 0 0 240 150).
// Bir projenin dizisi adım sayısından kısa olabilir; çizimi olmayan adım yalnızca metinle gösterilir.
import { Cizim } from "../arac";
import { AHSAP_ARABA_ADIM } from "./ahsap-araba";

export const ADIM_VIEWBOX = { en: 240, boy: 150 };

export const ADIM_CIZIM: Record<string, Cizim[]> = {
  "ahsap-araba": AHSAP_ARABA_ADIM,
};
