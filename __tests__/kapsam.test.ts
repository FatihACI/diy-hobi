// Kapsam: her projenin adım çizimleri var (sahne sayısı = adım sayısı ayrıca cizim.test.ts'te)
import { expect, test } from "@jest/globals";
import { ADIM_CIZIM } from "../src/cizim/adim";
import { PROJELER } from "../src/data/projeler";

test("her projenin adım çizimi var", () => {
  expect(PROJELER.filter((p) => !ADIM_CIZIM[p.id]).map((p) => p.id)).toEqual([]);
});
