// Ek projelerin çizimleri (kategori başına bir dosya)
import { Cizim } from "../arac";
import { MAKET_CIZIM } from "./maket";
import { OYUNCAK_CIZIM } from "./oyuncak";
import { RC_CIZIM } from "./rc";

export const EK_CIZIM: Record<string, Cizim> = { ...OYUNCAK_CIZIM, ...MAKET_CIZIM, ...RC_CIZIM };
