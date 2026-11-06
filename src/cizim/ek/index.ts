// Ek projelerin çizimleri (kategori başına bir dosya; otomatik üretilir)
import { Cizim } from "../arac";
import { AHSAP_CIZIM } from "./ahsap";
import { AKVARYUM_CIZIM } from "./akvaryum";
import { BAHCE_CIZIM } from "./bahce";
import { BALIKCILIK_CIZIM } from "./balikcilik";
import { BASKI3D_CIZIM } from "./baski3d";
import { BISIKLET_CIZIM } from "./bisiklet";
import { DERI_CIZIM } from "./deri";
import { ELEKTRONIK_CIZIM } from "./elektronik";
import { EPOKSI_CIZIM } from "./epoksi";
import { EV_TAMIR_CIZIM } from "./ev-tamir";
import { KIL_CIZIM } from "./kil";
import { KUS_EVI_CIZIM } from "./kus-evi";
import { MAKET_CIZIM } from "./maket";
import { MAKROME_CIZIM } from "./makrome";
import { MUM_SABUN_CIZIM } from "./mum-sabun";
import { OYUNCAK_CIZIM } from "./oyuncak";
import { PIROGRAFI_CIZIM } from "./pirografi";
import { RC_CIZIM } from "./rc";
import { TAKI_CIZIM } from "./taki";
import { TERRARYUM_CIZIM } from "./terraryum";

export const EK_CIZIM: Record<string, Cizim> = {
  ...AHSAP_CIZIM,
  ...AKVARYUM_CIZIM,
  ...BAHCE_CIZIM,
  ...BALIKCILIK_CIZIM,
  ...BASKI3D_CIZIM,
  ...BISIKLET_CIZIM,
  ...DERI_CIZIM,
  ...ELEKTRONIK_CIZIM,
  ...EPOKSI_CIZIM,
  ...EV_TAMIR_CIZIM,
  ...KIL_CIZIM,
  ...KUS_EVI_CIZIM,
  ...MAKET_CIZIM,
  ...MAKROME_CIZIM,
  ...MUM_SABUN_CIZIM,
  ...OYUNCAK_CIZIM,
  ...PIROGRAFI_CIZIM,
  ...RC_CIZIM,
  ...TAKI_CIZIM,
  ...TERRARYUM_CIZIM,
};
