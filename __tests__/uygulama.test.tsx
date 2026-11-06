// Duman testi: uygulamayı Android ortamında açar, tüm ana ekranları ve 16 projeyi gezer.
import { expect, jest, test } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react-native";
import App from "../App";
import { PROJELER } from "../src/data/projeler";

jest.mock("react-native-safe-area-context", () => require("react-native-safe-area-context/jest/mock").default);
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

const geri = () => fireEvent.press(screen.getAllByLabelText("Geri").at(-1)!);

test("uygulama açılır ve ekranlar gezilir", async () => {
  await render(<App />);
  expect(await screen.findByText("Evde Hobi")).toBeTruthy();

  await fireEvent.press(screen.getAllByText("Kategoriler").at(-1)!);
  expect(await screen.findByText("Bir alan seç, projeleri keşfet.")).toBeTruthy();

  await fireEvent.press(screen.getByText("Elektronik"));
  await fireEvent.press(await screen.findByText("Arduino Trafik Lambası"));
  await fireEvent.press(await screen.findByText("Kod"));
  await fireEvent.press(screen.getByText("Adımlar"));
  await fireEvent.press(await screen.findByText("Kodu yükle")); // adım işaretle
  expect(await screen.findByText("1 / 5 adım tamamlandı")).toBeTruthy();
  await fireEvent.press(screen.getByText("İpuçları"));
  await fireEvent.press(screen.getByLabelText("Favorilere ekle"));
  await fireEvent.press(screen.getByText("Malzemeleri listeye ekle"));
  expect(await screen.findByText("Tüm malzemeler listede")).toBeTruthy();
  await geri();
  await geri();

  await fireEvent.press(screen.getAllByText("Liste").at(-1)!);
  expect(await screen.findByText("Alışveriş Listesi")).toBeTruthy();
  expect(screen.getByText("Breadboard")).toBeTruthy();
  await fireEvent.press(screen.getAllByText("Favoriler").at(-1)!);
  expect((await screen.findAllByText("Arduino Trafik Lambası")).length).toBeGreaterThan(0);
});

test("tüm projeler hatasız açılır", async () => {
  await render(<App />);
  await screen.findByText("Evde Hobi");
  for (const p of PROJELER) {
    await fireEvent.changeText(screen.getByPlaceholderText("Proje, malzeme veya kategori ara"), p.ad);
    await screen.findByText(/\d+ sonuç/);
    await fireEvent.press(screen.getAllByText(p.ad)[0]);
    expect(await screen.findByText(/Malzemeleri listeye ekle|Tüm malzemeler listede/)).toBeTruthy();
    await fireEvent.press(await screen.findByText("Adımlar"));
    await fireEvent.press(await screen.findByText("İpuçları"));
    await screen.findByText("Güvenlik");
    await geri();
  }
}, 300_000); // her projeyi tek tek açar
