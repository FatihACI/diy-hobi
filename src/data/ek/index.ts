// Kategorileri 20 projeye tamamlayan ek projeler (kategori başına bir dosya; otomatik üretilir)
import { Proje } from "../types";
import { AHSAP_EK } from "./ahsap";
import { AKVARYUM_EK } from "./akvaryum";
import { BAHCE_EK } from "./bahce";
import { BALIKCILIK_EK } from "./balikcilik";
import { BASKI3D_EK } from "./baski3d";
import { BISIKLET_EK } from "./bisiklet";
import { DERI_EK } from "./deri";
import { ELEKTRONIK_EK } from "./elektronik";
import { EPOKSI_EK } from "./epoksi";
import { EV_TAMIR_EK } from "./ev-tamir";
import { KIL_EK } from "./kil";
import { KUS_EVI_EK } from "./kus-evi";
import { MAKET_EK } from "./maket";
import { MAKROME_EK } from "./makrome";
import { MUM_SABUN_EK } from "./mum-sabun";
import { OYUNCAK_EK } from "./oyuncak";
import { PIROGRAFI_EK } from "./pirografi";
import { RC_EK } from "./rc";
import { TAKI_EK } from "./taki";
import { TERRARYUM_EK } from "./terraryum";

export const EK_PROJELER: Proje[] = [
  ...AHSAP_EK,
  ...AKVARYUM_EK,
  ...BAHCE_EK,
  ...BALIKCILIK_EK,
  ...BASKI3D_EK,
  ...BISIKLET_EK,
  ...DERI_EK,
  ...ELEKTRONIK_EK,
  ...EPOKSI_EK,
  ...EV_TAMIR_EK,
  ...KIL_EK,
  ...KUS_EVI_EK,
  ...MAKET_EK,
  ...MAKROME_EK,
  ...MUM_SABUN_EK,
  ...OYUNCAK_EK,
  ...PIROGRAFI_EK,
  ...RC_EK,
  ...TAKI_EK,
  ...TERRARYUM_EK,
];
