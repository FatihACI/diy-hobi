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
  expect(await screen.findByText("Protyp")).toBeTruthy();

  await fireEvent.press(screen.getAllByText("Kategoriler").at(-1)!);
  expect(await screen.findByText("Bir alan seç, projeleri keşfet.")).toBeTruthy();

  await fireEvent.press(screen.getByText("Elektronik"));
  await fireEvent.press(await screen.findByText("Arduino Trafik Lambası"));
  await fireEvent.press(await screen.findByText("Kod"));
  await fireEvent.press(screen.getByText("Adımlar"));
  await fireEvent.press(await screen.findByText("Kodu yükle")); // adım işaretle
  expect(await screen.findByText("1 / 7 adım tamamlandı")).toBeTruthy();
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
  await screen.findByText("Protyp");
  for (const p of PROJELER) {
    await fireEvent.changeText(screen.getByPlaceholderText("Proje, malzeme veya kategori ara"), p.ad);
    await screen.findByText(/\d+ sonuç/);
    await fireEvent.press(screen.getAllByText(p.ad)[0]);
    expect(await screen.findByText(/Malzemeleri listeye ekle|Tüm malzemeler listede/)).toBeTruthy();
    await fireEvent.press(await screen.findByText("Adımlar"));
    await screen.findByText("Başlamadan önce: güvenlik"); // güvenlik notları adımlardan önce
    await fireEvent.press(await screen.findByText("İpuçları"));
    await screen.findByText("Usta ipuçları");
    await geri();
  }
}, 300_000); // her projeyi tek tek açar

test("alışveriş listesi aynı malzemeyi birleştirir; 'bende var' listeden düşürür", async () => {
  // Aynı katalog kalemini (ör. Arduino Uno) içeren iki proje
  const ortak = PROJELER.flatMap((p) => p.malzemeler.map((m) => ({ p, m })));
  const a = ortak.find((x) => x.m.arac && ortak.filter((y) => y.m.kid === x.m.kid).length >= 2)!;
  const b = ortak.find((y) => y.m.kid === a.m.kid && y.p.id !== a.p.id)!;

  await render(<App />);
  await screen.findByText("Protyp");
  for (const p of [a.p, b.p]) {
    await fireEvent.changeText(screen.getByPlaceholderText("Proje, malzeme veya kategori ara"), p.ad);
    await fireEvent.press((await screen.findAllByText(p.ad))[0]);
    await fireEvent.press(await screen.findByText("Malzemeleri listeye ekle"));
    await geri();
  }
  await fireEvent.press(screen.getAllByText("Liste").at(-1)!);
  await screen.findByText("Alışveriş Listesi");
  expect(screen.getAllByText(a.m.ad).length).toBe(1); // tek satır
  expect(screen.getAllByText(/2 projede/).length).toBeGreaterThan(0);

  await fireEvent.press(screen.getByLabelText(`${a.m.ad}: bende var, listeden çıkar`));
  expect(screen.queryByText(a.m.ad)).toBeNull();
});
