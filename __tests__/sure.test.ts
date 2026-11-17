import { describe, expect, test } from "@jest/globals";
import { PROJELER } from "../src/data/projeler";
import { sureCoz, sureSinifi } from "../src/data/sure";

describe("süre çözümleme", () => {
  test.each([
    ["45 dk", [45, 45]],
    ["2–3 saat", [120, 180]],
    ["1,5 saat", [90, 90]],
    ["30–45 dk", [30, 45]],
    ["2 saat + 4–6 hafta kür", [120, 120]],
    ["3–4 saat (baskı dahil)", [180, 240]],
    ["1 gün", [480, 480]],
    ["3–4 gün", [1440, 1920]],
  ])("%s", (m, beklenen) => expect(sureCoz(m)).toEqual(beklenen));

  test("sınıflar", () => {
    expect(sureSinifi("45 dk")).toBe("≤ 1 saat");
    expect(sureSinifi("2–3 saat")).toBe("1–3 saat");
    expect(sureSinifi("4–6 saat")).toBe("Yarım gün");
    expect(sureSinifi("2 gün")).toBe("Birkaç gün");
  });

  test("tüm projelerin süresi çözülebiliyor", () => {
    const cozulemeyen = PROJELER.filter((p) => sureCoz(p.sure)[1] === 0).map((p) => `${p.id}: ${p.sure}`);
    expect(cozulemeyen).toEqual([]);
  });
});
