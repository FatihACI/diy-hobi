// Kategorileri 20 projeye tamamlayan ek projeler (kategori başına bir dosya; otomatik üretilir)
import { Proje } from "../types";
import { AKVARYUM_EK } from "./akvaryum";
import { BAHCE_EK } from "./bahce";
import { BALIKCILIK_EK } from "./balikcilik";
import { KUS_EVI_EK } from "./kus-evi";
import { MAKET_EK } from "./maket";
import { OYUNCAK_EK } from "./oyuncak";
import { RC_EK } from "./rc";
import { TERRARYUM_EK } from "./terraryum";

export const EK_PROJELER: Proje[] = [
  ...AKVARYUM_EK,
  ...BAHCE_EK,
  ...BALIKCILIK_EK,
  ...KUS_EVI_EK,
  ...MAKET_EK,
  ...OYUNCAK_EK,
  ...RC_EK,
  ...TERRARYUM_EK,
];
