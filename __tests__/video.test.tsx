// Video verisi ve adımların altındaki video kartı
import { describe, expect, jest, test } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react-native";
import { Linking } from "react-native";
import VIDEOLAR from "../src/data/videolar.json";
import { PROJELER } from "../src/data/projeler";
import { aramaAdresi, izleAdresi, ProjeVideo, YOUTUBE_ID } from "../src/video";

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

describe("videolar.json", () => {
  test("her kayıt var olan bir projeye ait ve geçerli YouTube kimliği taşıyor", () => {
    const idler = new Set(PROJELER.map((p) => p.id));
    for (const [projeId, v] of Object.entries(
      VIDEOLAR as Record<string, { id: string; baslik: string; kanal: string }>,
    )) {
      expect([projeId, idler.has(projeId)]).toEqual([projeId, true]);
      expect([projeId, YOUTUBE_ID.test(v.id)]).toEqual([projeId, true]);
      expect(v.baslik.length).toBeGreaterThan(0);
      expect(v.kanal.length).toBeGreaterThan(0);
    }
  });
});

describe("video kartı", () => {
  const proje = PROJELER[0];

  test("video yoksa YouTube aramasını açar", async () => {
    const ac = jest.spyOn(Linking, "openURL").mockResolvedValue(undefined);
    await render(<ProjeVideo proje={{ ...proje, id: "olmayan-proje" }} />);
    await fireEvent.press(screen.getByText("Uygulama videosu"));
    expect(ac).toHaveBeenCalledWith(aramaAdresi(proje));
    expect(aramaAdresi(proje)).toContain(encodeURIComponent(proje.ad));
  });

  test("izleme adresi doğru", () => {
    expect(izleAdresi("dQw4w9WgXcQ")).toBe("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  });
});
