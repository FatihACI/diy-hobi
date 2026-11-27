// Dil seçimi: Atölyem'den İngilizceye geçilir, ekranlar ve proje içeriği İngilizce görünür, Türkçeye dönülür
import { afterAll, expect, jest, test } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react-native";
import App from "../App";
import { icerikDiliUygula } from "../src/data/ceviri";
import { EN_KATEGORI } from "../src/data/en/kategoriler";
import { dilAyarla } from "../src/i18n";

jest.mock("react-native-safe-area-context", () => require("react-native-safe-area-context/jest/mock").default);
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

afterAll(() => {
  dilAyarla("tr");
  icerikDiliUygula("tr");
});

test("Atölyem'den dil değiştirilir", async () => {
  await render(<App />);
  expect(await screen.findByText("Bugün ne yapıyoruz?")).toBeTruthy();
  await fireEvent.press(screen.getAllByText("Atölyem").at(-1)!);
  await fireEvent.press(await screen.findByText("English"));
  expect((await screen.findAllByText("My Workshop")).length).toBeGreaterThan(0);
  await fireEvent.press(screen.getAllByText("Categories").at(-1)!);
  expect(await screen.findByText(EN_KATEGORI.elektronik.ad)).toBeTruthy();
  await fireEvent.press(screen.getAllByText("My Workshop").at(-1)!);
  await fireEvent.press(await screen.findByText("Türkçe"));
  expect((await screen.findAllByText("Atölyem")).length).toBeGreaterThan(0);
});
