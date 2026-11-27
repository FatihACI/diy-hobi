// Araçlar: hobi hesaplayıcıları listesi ve tek araç ekranı.
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Cipler, Ikon, UstBaslik } from "../components";
import { aracBul, ARACLAR, Degerler, sayiOku, varsayilanlar } from "../data/araclar";
import { kategoriBul } from "../data/kategoriler";
import { RootParams } from "../nav";
import { bosluk, golge, kose, renk, stil, yazi } from "../theme";
import { sayiDil, t } from "../i18n";

export default function Araclar({ navigation }: NativeStackScreenProps<RootParams, "Araclar">) {
  const ins = useSafeAreaInsets();
  return (
    <ScrollView
      style={{ backgroundColor: renk.arkaPlan }}
      contentContainerStyle={{
        padding: bosluk.l,
        paddingTop: ins.top + bosluk.l,
        paddingBottom: bosluk.xxl + ins.bottom,
        gap: bosluk.m,
      }}
    >
      <UstBaslik baslik={t("Araçlar")} alt={t("Hobi hesaplayıcıları")} geri={navigation.goBack} />
      {ARACLAR.map((a) => (
        <Pressable
          key={a.id}
          accessibilityRole="button"
          onPress={() => navigation.navigate("Arac", { id: a.id })}
          style={({ pressed }) => [s.kart, { opacity: pressed ? 0.85 : 1 }]}
        >
          <View style={s.ikon}>
            <Ikon name={a.ikon} size={24} color={renk.ana} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={yazi.altBaslik}>{t(a.ad)}</Text>
            <Text style={yazi.kucuk}>{t(a.ozet)}</Text>
            <Text style={[yazi.kucuk, { fontSize: 11, marginTop: 2 }]}>
              {a.kategoriler.map((k) => kategoriBul(k).ad).join(" · ")}
            </Text>
          </View>
          <Ikon name="chevron-right" size={22} color={renk.yaziIkincil} />
        </Pressable>
      ))}
    </ScrollView>
  );
}

export function AracDetay({ route, navigation }: NativeStackScreenProps<RootParams, "Arac">) {
  const a = aracBul(route.params.id) ?? ARACLAR[0];
  const ins = useSafeAreaInsets();
  // Sayı alanları metin olarak tutulur ("12," yazarken silinmesin)
  const [metin, setMetin] = useState<Record<string, string>>(() =>
    Object.fromEntries(
      a.alanlar.filter((x) => x.tip === "sayi").map((x) => [x.id, sayiDil(x.varsayilan, x.varsayilan % 1 ? 1 : 0)]),
    ),
  );
  const [secim, setSecim] = useState<Degerler>(() => varsayilanlar(a));
  const v: Degerler = { ...secim };
  for (const [k, y] of Object.entries(metin)) v[k] = sayiOku(y);
  const gorunen = a.alanlar.filter((x) => !x.goster || x.goster(v));
  const hesap = a.hesapla(v);

  return (
    <ScrollView
      style={{ backgroundColor: renk.arkaPlan }}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        padding: bosluk.l,
        paddingTop: ins.top + bosluk.l,
        paddingBottom: bosluk.xxl + ins.bottom,
      }}
    >
      <UstBaslik baslik={t(a.ad)} alt={t(a.ozet)} geri={navigation.goBack} />

      <View style={[s.kutu, { gap: bosluk.l }]}>
        {gorunen.map((x) =>
          x.tip === "sayi" ? (
            <View key={x.id} style={s.alan}>
              <Text style={[yazi.govde, { flex: 1 }]}>{t(x.etiket)}</Text>
              <TextInput
                accessibilityLabel={t(x.etiket)}
                value={metin[x.id]}
                onChangeText={(y) => setMetin((m) => ({ ...m, [x.id]: y }))}
                keyboardType="decimal-pad"
                selectTextOnFocus
                style={[s.girdi, isNaN(Number(v[x.id])) && { borderColor: renk.tehlike }]}
              />
              {x.birim && <Text style={s.birim}>{t(x.birim)}</Text>}
            </View>
          ) : (
            <View key={x.id} style={{ marginHorizontal: -bosluk.l }}>
              <Cipler
                etiket={t(x.etiket)}
                secenekler={x.secenekler.map((o) => o.deger)}
                deger={secim[x.id]}
                sec={(d) => setSecim((m) => ({ ...m, [x.id]: d }))}
                yazi={(d) => t(x.secenekler.find((o) => o.deger === d)?.etiket ?? String(d))}
              />
            </View>
          ),
        )}
      </View>

      <Text style={[yazi.baslik, { marginTop: bosluk.xl, marginBottom: bosluk.m }]}>{t("Sonuç")}</Text>
      <View style={s.kutu}>
        {hesap.sonuclar.map((r, i) => (
          <View key={r.etiket} style={[s.sonuc, i > 0 && s.ayrac]}>
            <Text style={[yazi.govde, { flex: 1, color: r.vurgu ? renk.yazi : renk.yaziIkincil }]}>{t(r.etiket)}</Text>
            <Text style={r.vurgu ? s.vurgu : s.deger}>{r.deger}</Text>
          </View>
        ))}
        {hesap.sonuclar.length === 0 && !hesap.uyari && <Text style={yazi.kucuk}>{t("Değerleri gir.")}</Text>}
      </View>
      {hesap.uyari && (
        <View style={[s.not, { backgroundColor: renk.uyariAcik }]}>
          <Ikon name="alert-outline" size={18} color={renk.uyari} />
          <Text style={[yazi.kucuk, { flex: 1, color: renk.yazi }]}>{t(hesap.uyari)}</Text>
        </View>
      )}
      <View style={s.not}>
        <Ikon name="information-outline" size={18} color={renk.yaziIkincil} />
        <Text style={[yazi.kucuk, { flex: 1 }]}>
          {t("Sonuçlar yaklaşıktır.")} {t(a.not)}
        </Text>
      </View>
    </ScrollView>
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
    ...golge,
  },
  ikon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: renk.anaAcik,
    alignItems: "center",
    justifyContent: "center",
  },
  kutu: { backgroundColor: renk.kart, borderRadius: kose.l, padding: bosluk.l, ...golge },
  alan: { flexDirection: "row", alignItems: "center", gap: bosluk.s },
  girdi: {
    width: 90,
    height: 42,
    borderRadius: kose.s,
    borderWidth: 1,
    borderColor: renk.cizgi,
    backgroundColor: renk.arkaPlan,
    color: renk.yazi,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "right",
    paddingHorizontal: bosluk.s,
  },
  birim: { width: 52, color: renk.yaziIkincil, fontSize: 13 },
  sonuc: { flexDirection: "row", alignItems: "center", gap: bosluk.m, paddingVertical: 10 },
  ayrac: { borderTopWidth: 1, borderColor: renk.cizgi },
  vurgu: { fontSize: 20, fontWeight: "800", color: renk.ana },
  deger: { fontSize: 15, fontWeight: "700", color: renk.yazi },
  not: { flexDirection: "row", gap: bosluk.s, alignItems: "flex-start", marginTop: bosluk.m, padding: bosluk.s },
}));
