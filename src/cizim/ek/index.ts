// Ek projelerin çizimleri (kategori başına bir dosya; otomatik üretilir)
import { Cizim } from "../arac";
import { AKVARYUM_CIZIM } from "./akvaryum";
import { BAHCE_CIZIM } from "./bahce";
import { BALIKCILIK_CIZIM } from "./balikcilik";
import { KUS_EVI_CIZIM } from "./kus-evi";
import { MAKET_CIZIM } from "./maket";
import { OYUNCAK_CIZIM } from "./oyuncak";
import { RC_CIZIM } from "./rc";
import { TERRARYUM_CIZIM } from "./terraryum";

export const EK_CIZIM: Record<string, Cizim> = {
  ...AKVARYUM_CIZIM,
  ...BAHCE_CIZIM,
  ...BALIKCILIK_CIZIM,
  ...KUS_EVI_CIZIM,
  ...MAKET_CIZIM,
  ...OYUNCAK_CIZIM,
  ...RC_CIZIM,
  ...TERRARYUM_CIZIM,
};
