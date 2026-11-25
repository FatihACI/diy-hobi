// Adım çizimleri: proje kimliği → adım sırasına göre karakalem sahneler (viewBox 0 0 240 150).
// Bir projenin dizisi adım sayısından kısa olabilir; çizimi olmayan adım yalnızca metinle gösterilir.
import { Cizim } from "../arac";
import { AHSAP_ARABA_ADIM } from "./ahsap-araba";
import {
  BILYE_PARKURU_ADIM,
  BLUETOOTH_ARABA_ADIM,
  DEPRON_PLANOR_ADIM,
  PERI_BAHCESI_ADIM,
  PLASTIK_MAKET_ADIM,
} from "./cocuk-oyun";
import {
  BALKON_OTLARI_ADIM,
  KAPALI_TERRARYUM_ADIM,
  KUS_YEMLIGI_ADIM,
  KUS_YUVASI_ADIM,
  MIKRO_YESILLIK_ADIM,
  NANO_BITKILI_ADIM,
  OLTA_DUGUMLERI_ADIM,
  SAMANDIRALI_TAKIM_ADIM,
  SUKULENT_TERRARYUM_ADIM,
  SUNGER_FILTRE_ADIM,
} from "./doga-hayvan";

export const ADIM_VIEWBOX = { en: 240, boy: 150 };

export const ADIM_CIZIM: Record<string, Cizim[]> = {
  "ahsap-araba": AHSAP_ARABA_ADIM,
  "bilye-parkuru": BILYE_PARKURU_ADIM,
  "peri-bahcesi": PERI_BAHCESI_ADIM,
  "plastik-maket": PLASTIK_MAKET_ADIM,
  "bluetooth-araba": BLUETOOTH_ARABA_ADIM,
  "depron-planor": DEPRON_PLANOR_ADIM,
  "samandirali-takim": SAMANDIRALI_TAKIM_ADIM,
  "olta-dugumleri": OLTA_DUGUMLERI_ADIM,
  "nano-bitkili": NANO_BITKILI_ADIM,
  "sunger-filtre": SUNGER_FILTRE_ADIM,
  "kapali-terraryum": KAPALI_TERRARYUM_ADIM,
  "sukulent-terraryum": SUKULENT_TERRARYUM_ADIM,
  "kus-yuvasi": KUS_YUVASI_ADIM,
  "kus-yemligi": KUS_YEMLIGI_ADIM,
  "balkon-otlari": BALKON_OTLARI_ADIM,
  "mikro-yesillik": MIKRO_YESILLIK_ADIM,
};
