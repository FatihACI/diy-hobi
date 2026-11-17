// Hata sınırı ve ilk açılış uyarısı
import { describe, expect, jest, test } from "@jest/globals";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fireEvent, render, screen } from "@testing-library/react-native";
import { Text } from "react-native";
import { HataSiniri } from "../src/hata";
import { IlkAcilisUyarisi } from "../src/uyari";

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

function Patlayan({ patla }: { patla: boolean }): React.ReactElement {
  if (patla) throw new Error("test hatası");
  return <Text>Sağlam ekran</Text>;
}

describe("hata sınırı", () => {
  test("hatayı yakalar, mesaj ve 'Tekrar dene' gösterir", async () => {
    const sessiz = jest.spyOn(console, "error").mockImplementation(() => {});
    await render(
      <HataSiniri>
        <Patlayan patla />
      </HataSiniri>,
    );
    expect(await screen.findByText("Bir şeyler ters gitti")).toBeTruthy();
    expect(screen.getByText("Tekrar dene")).toBeTruthy();
    sessiz.mockRestore();
  });
});

describe("ilk açılış uyarısı", () => {
  test("ilk açılışta görünür, onaylanınca kaydedilir ve bir daha görünmez", async () => {
    await AsyncStorage.clear();
    const ilk = await render(<IlkAcilisUyarisi />);
    await fireEvent.press(await screen.findByText("Okudum, anladım"));
    expect(screen.queryByText("Okudum, anladım")).toBeNull();
    expect(await AsyncStorage.getItem("evde-hobi-uyari-v1")).toBeTruthy();
    await ilk.unmount();

    await render(<IlkAcilisUyarisi />);
    await new Promise((r) => setTimeout(r, 0));
    expect(screen.queryByText("Okudum, anladım")).toBeNull();
  });
});
