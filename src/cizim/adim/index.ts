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
import {
  AHSAP_KUTU_ADIM,
  BONCUK_KUPE_ADIM,
  DERI_ANAHTARLIK_ADIM,
  DERI_KARTLIK_ADIM,
  DOGAL_TAS_BILEKLIK_ADIM,
  EPOKSI_ALTLIK_ADIM,
  EPOKSI_KOLYE_ADIM,
  GLISERIN_SABUN_ADIM,
  KESME_TAHTASI_ADIM,
  KIL_KUPE_ADIM,
  MAKROME_ASKI_ADIM,
  MAKROME_DUVAR_ADIM,
  PIROGRAFI_PANO_ADIM,
  SOYA_MUM_ADIM,
  TAKI_TABAGI_ADIM,
  TAS_BOYAMA_ADIM,
} from "./el-sanatlari";

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
  "kesme-tahtasi": KESME_TAHTASI_ADIM,
  "ahsap-kutu": AHSAP_KUTU_ADIM,
  "soya-mum": SOYA_MUM_ADIM,
  "gliserin-sabun": GLISERIN_SABUN_ADIM,
  "epoksi-kolye": EPOKSI_KOLYE_ADIM,
  "epoksi-altlik": EPOKSI_ALTLIK_ADIM,
  "makrome-aski": MAKROME_ASKI_ADIM,
  "makrome-duvar": MAKROME_DUVAR_ADIM,
  "kil-kupe": KIL_KUPE_ADIM,
  "taki-tabagi": TAKI_TABAGI_ADIM,
  "deri-anahtarlik": DERI_ANAHTARLIK_ADIM,
  "deri-kartlik": DERI_KARTLIK_ADIM,
  "dogal-tas-bileklik": DOGAL_TAS_BILEKLIK_ADIM,
  "boncuk-kupe": BONCUK_KUPE_ADIM,
  "tas-boyama": TAS_BOYAMA_ADIM,
  "pirografi-pano": PIROGRAFI_PANO_ADIM,
};
