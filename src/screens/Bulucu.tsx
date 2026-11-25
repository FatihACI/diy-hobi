// Proje Bulucu: 4 kısa soru → sana uygun projeler.
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Bos, Cubuk, Ikon, ProjeKart, UstBaslik } from "../components";
import { Cevaplar, Deneyim, gevset, Kimle, oneriler, Zaman } from "../data/bulucu";
import { GRUPLAR } from "../data/kategoriler";
import type { IkonAdi, KategoriGrubu, Proje } from "../data/types";
import { RootParams, useNav } from "../nav";
import { bosluk, golge, kose, renk, stil, yazi } from "../theme";

type P = NativeStackScreenProps<RootParams, "Bulucu">;
type Secenek<T> = { deger: T; etiket: string; alt?: string; ikon: IkonAdi };

const KIMLE: Secenek<Kimle>[] = [
  { deger: "kendim", etiket: "Kendim için", ikon: "account" },
  { deger: "kucuk", etiket: "Çocuğumla", alt: "3–6 yaş", ikon: "baby-face-outline" },
  { deger: "buyuk", etiket: "Çocuğumla", alt: "7–12 yaş", ikon: "human-child" },
];
const ZAMAN: Secenek<Zaman>[] = [
  { deger: 60, etiket: "En fazla 1 saat", ikon: "timer-sand" },
  { deger: 180, etiket: "En fazla 3 saat", ikon: "clock-outline" },
  { deger: 480, etiket: "Yarım gün", ikon: "weather-sunny" },
  { deger: 0, etiket: "Fark etmez", alt: "Birkaç güne yayılabilir", ikon: "calendar-range" },
];
const DENEYIM: Secenek<Deneyim>[] = [
  { deger: "yeni", etiket: "Yeni başlıyorum", alt: "Kolay projeler", ikon: "sprout" },
  { deger: "biraz", etiket: "Biraz deneyimim var", alt: "Kolay ve orta", ikon: "hand-back-right" },
  { deger: "usta", etiket: "Zorlu bir şey istiyorum", alt: "Orta ve zor", ikon: "arm-flex" },
];
const GRUP_IKON: Record<KategoriGrubu, IkonAdi> = {
  "Çocuk & Oyun": "puzzle-outline",
  "Doğa & Hayvan": "pine-tree",
  "El Sanatları": "palette-swatch-outline",
  "Teknik & Ev": "tools",
};
const SORULAR = ["Kiminle yapacaksın?", "Ne kadar vaktin var?", "Deneyimin nasıl?", "Neyle ilgileniyorsun?"];

export default function Bulucu({ navigation }: P) {
  const ins = useSafeAreaInsets();
  const [adim, setAdim] = useState(0);
  const [c, setC] = useState<Partial<Cevaplar>>({ gruplar: [] });

  const sec = <K extends keyof Cevaplar>(k: K, v: Cevaplar[K]) => {
    setC((x) => ({ ...x, [k]: v }));
    setAdim((a) => a + 1);
  };
  const geri = () => (adim === 0 ? navigation.goBack() : setAdim((a) => a - 1));

  if (adim >= SORULAR.length) return <Sonuc c={c as Cevaplar} bastan={() => setAdim(0)} geri={geri} />;

  const gruplar = c.gruplar ?? [];
  return (
    <ScrollView
      style={{ backgroundColor: renk.arkaPlan }}
      contentContainerStyle={{
        padding: bosluk.l,
        paddingTop: ins.top + bosluk.l,
        paddingBottom: bosluk.xxl + ins.bottom,
      }}
    >
      <UstBaslik baslik="Proje Bulucu" alt={`Soru ${adim + 1} / ${SORULAR.length}`} geri={geri} />
      <Cubuk oran={adim / SORULAR.length} />
      <Text style={[yazi.baslik, { marginTop: bosluk.xl, marginBottom: bosluk.l }]}>{SORULAR[adim]}</Text>

      <View style={{ gap: bosluk.m }}>
        {adim === 0 &&
          KIMLE.map((x) => <Kart key={x.deger} x={x} secili={c.kimle === x.deger} bas={() => sec("kimle", x.deger)} />)}
        {adim === 1 &&
          ZAMAN.map((x) => <Kart key={x.deger} x={x} secili={c.zaman === x.deger} bas={() => sec("zaman", x.deger)} />)}
        {adim === 2 &&
          DENEYIM.map((x) => (
            <Kart key={x.deger} x={x} secili={c.deneyim === x.deger} bas={() => sec("deneyim", x.deger)} />
          ))}
        {adim === 3 && (
          <>
            <Text style={yazi.kucuk}>Birden fazla seçebilirsin. Hiç seçmezsen hepsine bakarız.</Text>
            {GRUPLAR.map((g) => {
              const secili = gruplar.includes(g);
              return (
                <Kart
                  key={g}
                  coklu
                  x={{ deger: g, etiket: g, ikon: GRUP_IKON[g] }}
                  secili={secili}
                  bas={() =>
                    setC((v) => ({ ...v, gruplar: secili ? gruplar.filter((y) => y !== g) : [...gruplar, g] }))
                  }
                />
              );
            })}
            <Pressable accessibilityRole="button" onPress={() => setAdim(SORULAR.length)} style={s.anaBtn}>
              <Ikon name="magnify" size={20} color="#fff" />
              <Text style={s.anaBtnYazi}>{gruplar.length ? "Projeleri göster" : "Hepsine bak"}</Text>
            </Pressable>
          </>
        )}
      </View>
    </ScrollView>
  );
}

function Kart<T>({ x, secili, bas, coklu }: { x: Secenek<T>; secili: boolean; bas: () => void; coklu?: boolean }) {
  return (
    <Pressable
      accessibilityRole={coklu ? "checkbox" : "button"}
      accessibilityState={coklu ? { checked: secili } : { selected: secili }}
      onPress={bas}
      style={({ pressed }) => [s.kart, secili && s.kartSecili, { opacity: pressed ? 0.85 : 1 }]}
    >
      <View style={[s.ikon, secili && { backgroundColor: renk.ana }]}>
        <Ikon name={x.ikon} size={22} color={secili ? "#fff" : renk.ana} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={yazi.altBaslik}>{x.etiket}</Text>
        {x.alt && <Text style={yazi.kucuk}>{x.alt}</Text>}
      </View>
      <Ikon
        name={coklu ? (secili ? "checkbox-marked" : "checkbox-blank-outline") : "chevron-right"}
        size={22}
        color={secili ? renk.ana : renk.yaziIkincil}
      />
    </Pressable>
  );
}

function Sonuc({ c, bastan, geri }: { c: Cevaplar; bastan: () => void; geri: () => void }) {
  const ins = useSafeAreaInsets();
  const nav = useNav();
  // Sonuç yoksa kriterleri sırayla gevşet
  let cevap = c;
  let liste: Proje[] = oneriler(cevap);
  const gevsetilen: string[] = [];
  while (!liste.length) {
    const g = gevset(cevap);
    if (!g) break;
    cevap = g.cevap;
    gevsetilen.push(g.neyi);
    liste = oneriler(cevap);
  }

  return (
    <FlatList
      style={{ backgroundColor: renk.arkaPlan }}
      contentContainerStyle={{
        padding: bosluk.l,
        paddingTop: ins.top + bosluk.l,
        paddingBottom: bosluk.xxl + ins.bottom,
      }}
      data={liste}
      keyExtractor={(p) => p.id}
      initialNumToRender={5}
      ItemSeparatorComponent={() => <View style={{ height: bosluk.m }} />}
      ListHeaderComponent={
        <View style={{ marginBottom: bosluk.l, gap: bosluk.m }}>
          <UstBaslik baslik="Sana önerilenler" alt={`${liste.length} proje`} geri={geri} />
          {gevsetilen.length > 0 && liste.length > 0 && (
            <View style={s.not}>
              <Ikon name="information-outline" size={18} color={renk.uyari} />
              <Text style={[yazi.kucuk, { flex: 1, color: renk.yazi }]}>
                Tüm cevaplarına uyan proje yoktu; {gevsetilen.join(" ve ")} esnetildi.
              </Text>
            </View>
          )}
          <Pressable accessibilityRole="button" onPress={bastan} style={s.bastan}>
            <Ikon name="restart" size={18} color={renk.ana} />
            <Text style={{ color: renk.ana, fontWeight: "700" }}>Baştan başla</Text>
          </Pressable>
        </View>
      }
      renderItem={({ item }) => <ProjeKart p={item} onPress={() => nav.navigate("Proje", { id: item.id })} />}
      ListEmptyComponent={
        <Bos ikon="magnify-close" baslik="Uygun proje bulunamadı" metin="Cevaplarını değiştirip yeniden dene." />
      }
    />
  );
}

const s = stil(() => ({
  kart: {
    flexDirection: "row",
    alignItems: "center",
    gap: bosluk.m,
    backgroundColor: renk.kart,
    borderRadius: kose.l,
    padding: bosluk.l,
    borderWidth: 2,
    borderColor: "transparent",
    ...golge,
  },
  kartSecili: { borderColor: renk.ana },
  ikon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: renk.anaAcik,
    alignItems: "center",
    justifyContent: "center",
  },
  anaBtn: {
    height: 52,
    marginTop: bosluk.m,
    borderRadius: kose.m,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: renk.ana,
  },
  anaBtnYazi: { color: "#fff", fontWeight: "700", fontSize: 16 },
  not: {
    flexDirection: "row",
    gap: bosluk.s,
    alignItems: "flex-start",
    backgroundColor: renk.uyariAcik,
    borderRadius: kose.m,
    padding: bosluk.m,
  },
  bastan: { flexDirection: "row", alignItems: "center", gap: 6, alignSelf: "flex-start" },
}));
