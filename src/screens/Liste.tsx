import { Alert, Pressable, ScrollView, Share, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Bos, Ikon, tl } from "../components";
import { useFiyat } from "../fiyat";
import { kategoriBul } from "../data/kategoriler";
import { KALEMLER } from "../data/katalog-dizin";
import { PROJELER } from "../data/projeler";
import { useNav } from "../nav";
import { useStore } from "../store";
import { bosluk, golge, kose, renk, yazi } from "../theme";

export default function Liste() {
  const st = useStore();
  const { enUcuz } = useFiyat();
  const nav = useNav();
  const ust = useSafeAreaInsets().top;

  // Listedeki kalemler: katalog kimliğiyle tek satır (aynı malzeme 3 projede olsa da bir kez)
  const kalemler = Object.entries(st.liste)
    .map(([kid, v]) => ({ kalem: KALEMLER.get(kid)!, ...v }))
    .filter((x) => x.kalem)
    .sort((a, b) => Number(a.alindi) - Number(b.alindi) || a.kalem.ad.localeCompare(b.kalem.ad, "tr"));
  const bolumler = [
    { baslik: "Malzemeler", liste: kalemler.filter((x) => !x.kalem.arac) },
    { baslik: "Aletler", liste: kalemler.filter((x) => x.kalem.arac) },
  ].filter((b) => b.liste.length);
  const projeIdler = [...new Set(kalemler.flatMap((x) => x.projeler))];
  const alinan = kalemler.filter((x) => x.alindi).length;
  const kalan = kalemler.filter((x) => !x.alindi).reduce((t, x) => t + (enUcuz(x.kalem.ornek)?.fiyat ?? 0), 0);
  const fiyatsiz = kalemler.filter((x) => !x.alindi && !x.kalem.ornek.evde && !enUcuz(x.kalem.ornek)).length;
  const projeAd = (id: string) => PROJELER.find((p) => p.id === id)?.ad ?? id;
  const miktar = (x: (typeof kalemler)[number]) =>
    x.projeler.length > 1
      ? `${x.projeler.length} projede`
      : (x.kalem.projeler.find((p) => p.projeId === x.projeler[0])?.miktar ?? "");

  // Listeyi düz metne çevirip telefonun paylaşım menüsünü aç (WhatsApp, SMS, not...)
  const paylas = () => {
    const satirlar = ["🛒 Evde Hobi – Alışveriş Listesi", `Projeler: ${projeIdler.map(projeAd).join(", ")}`, ""];
    for (const b of bolumler) {
      satirlar.push(`▸ ${b.baslik}`);
      for (const x of b.liste) {
        const f = enUcuz(x.kalem.ornek);
        satirlar.push(
          `${x.alindi ? "✅" : "⬜"} ${x.kalem.ad} (${miktar(x)})${f ? ` – ${tl(f.fiyat)}, ${f.magaza}` : ""}`,
        );
        if (f && !x.alindi) satirlar.push(`   ${f.url}`);
      }
      satirlar.push("");
    }
    if (kalan > 0) satirlar.push(`Kalan tahmini tutar: ${tl(kalan)}`);
    Share.share({ message: satirlar.join("\n") }).catch(() => {});
  };

  return (
    <ScrollView
      style={{ backgroundColor: renk.arkaPlan }}
      contentContainerStyle={{ padding: bosluk.l, paddingTop: ust + bosluk.l, paddingBottom: bosluk.xxl }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={yazi.dev}>Alışveriş Listesi</Text>
        {kalemler.length > 0 && (
          <View style={{ flexDirection: "row", gap: bosluk.m }}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Listeyi paylaş"
              onPress={paylas}
              hitSlop={10}
              style={s.ustBtn}
            >
              <Ikon name="share-variant" size={20} color={renk.ana} />
            </Pressable>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Listeyi temizle"
              hitSlop={10}
              style={s.ustBtn}
              onPress={() =>
                Alert.alert("Listeyi temizle", "Tüm malzemeler listeden silinsin mi?", [
                  { text: "Vazgeç", style: "cancel" },
                  { text: "Temizle", style: "destructive", onPress: st.listeyiTemizle },
                ])
              }
            >
              <Ikon name="trash-can-outline" size={20} color={renk.tehlike} />
            </Pressable>
          </View>
        )}
      </View>

      {kalemler.length === 0 ? (
        <Bos ikon="cart-outline" baslik="Listen boş" metin="Bir projeyi açıp 'Malzemeleri listeye ekle'ye dokun." />
      ) : (
        <>
          <View style={s.ozet}>
            <View>
              <Text style={yazi.kucuk}>Alınan</Text>
              <Text style={s.ozetDeger}>
                {alinan} / {kalemler.length}
              </Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={yazi.kucuk}>Kalan tahmini tutar</Text>
              <Text style={s.ozetDeger}>{kalan > 0 ? (fiyatsiz ? "≥ " : "") + tl(kalan) : "—"}</Text>
            </View>
          </View>

          {/* Listedeki projeler: dokununca projeye git */}
          <View style={s.cipler}>
            {projeIdler.map((pid) => {
              const p = PROJELER.find((x) => x.id === pid);
              if (!p) return null;
              return (
                <Pressable
                  key={pid}
                  accessibilityRole="button"
                  onPress={() => nav.navigate("Proje", { id: pid })}
                  style={[s.cip, { borderColor: kategoriBul(p.kategoriId).renkler[0] }]}
                >
                  <Ikon name={p.ikon} size={14} color={kategoriBul(p.kategoriId).renkler[0]} />
                  <Text style={s.cipYazi}>{p.ad}</Text>
                </Pressable>
              );
            })}
          </View>

          {bolumler.map((b) => (
            <View key={b.baslik} style={{ marginTop: bosluk.l }}>
              <Text style={[yazi.altBaslik, { marginBottom: bosluk.s }]}>
                {b.baslik} ({b.liste.length})
              </Text>
              <View style={s.kart}>
                {b.liste.map((x, i) => {
                  const f = enUcuz(x.kalem.ornek);
                  return (
                    <View key={x.kalem.kid} style={[s.satir, i > 0 && s.ayrac]}>
                      <Pressable
                        accessibilityRole="checkbox"
                        accessibilityState={{ checked: x.alindi }}
                        accessibilityLabel={`${x.kalem.ad} alındı`}
                        onPress={() => st.alindiDegistir(x.kalem.kid)}
                        hitSlop={8}
                      >
                        <Ikon
                          name={x.alindi ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"}
                          size={24}
                          color={x.alindi ? renk.basari : renk.yaziIkincil}
                        />
                      </Pressable>
                      <View style={{ flex: 1 }}>
                        <Text style={[yazi.govde, x.alindi && s.ustuCizili]}>{x.kalem.ad}</Text>
                        <Text style={yazi.kucuk}>
                          {miktar(x)}
                          {f ? ` · ${f.magaza}` : ""}
                        </Text>
                      </View>
                      <Text style={{ fontWeight: "700", color: renk.yazi }}>{f ? tl(f.fiyat) : ""}</Text>
                      <Pressable
                        accessibilityRole="button"
                        accessibilityLabel={`${x.kalem.ad}: bende var, listeden çıkar`}
                        onPress={() => st.bendeDegistir(x.kalem.kid)}
                        hitSlop={8}
                      >
                        <Ikon name="home-plus-outline" size={20} color={renk.yaziIkincil} />
                      </Pressable>
                      <Pressable
                        accessibilityRole="button"
                        accessibilityLabel={`${x.kalem.ad}: listeden çıkar`}
                        onPress={() => st.listedenCikar(x.kalem.kid)}
                        hitSlop={8}
                      >
                        <Ikon name="close" size={18} color={renk.yaziIkincil} />
                      </Pressable>
                    </View>
                  );
                })}
              </View>
            </View>
          ))}
          <Text style={[yazi.kucuk, { marginTop: bosluk.l }]}>
            Evde olan bir şeyi ⌂ ile işaretle: listeden düşer ve sonraki projelerde de listeye eklenmez.
          </Text>
        </>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  ustBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: renk.kart,
    borderWidth: 1,
    borderColor: renk.cizgi,
    alignItems: "center",
    justifyContent: "center",
  },
  ozet: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: renk.kart,
    borderRadius: kose.l,
    padding: bosluk.l,
    marginTop: bosluk.l,
    ...golge,
  },
  ozetDeger: { fontSize: 22, fontWeight: "800", color: renk.yazi, marginTop: 2 },
  grupBaslik: { flexDirection: "row", alignItems: "center", gap: bosluk.s, marginBottom: bosluk.s },
  grupIkon: { width: 28, height: 28, borderRadius: 8, alignItems: "center", justifyContent: "center" },
  kart: { backgroundColor: renk.kart, borderRadius: kose.m, ...golge },
  satir: { flexDirection: "row", alignItems: "center", gap: bosluk.m, padding: bosluk.m },
  ayrac: { borderTopWidth: 1, borderColor: renk.cizgi },
  cipler: { flexDirection: "row", flexWrap: "wrap", gap: bosluk.s, marginTop: bosluk.l },
  cip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: renk.kart,
  },
  cipYazi: { fontSize: 12, fontWeight: "600", color: renk.yazi },
  ustuCizili: { textDecorationLine: "line-through", color: renk.yaziIkincil },
});
