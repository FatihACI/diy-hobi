import { Alert, Pressable, ScrollView, Share, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Bos, Ikon, tl } from "../components";
import { useFiyat } from "../fiyat";
import { kategoriBul } from "../data/kategoriler";
import { PROJELER } from "../data/projeler";
import { useNav } from "../nav";
import { useStore } from "../store";
import { bosluk, golge, kose, renk, yazi } from "../theme";

export default function Liste() {
  const st = useStore();
  const { enUcuz } = useFiyat();
  const nav = useNav();
  const ust = useSafeAreaInsets().top;

  // Listedeki malzemeleri projeye göre grupla
  const gruplar = PROJELER
    .map((p) => ({ p, kalemler: p.malzemeler.filter((m) => st.liste[m.id]) }))
    .filter((g) => g.kalemler.length);

  const tumKalemler = gruplar.flatMap((g) => g.kalemler);
  const alinan = tumKalemler.filter((m) => st.liste[m.id].alindi).length;
  const toplam = tumKalemler.reduce((t, m) => t + (enUcuz(m)?.fiyat ?? 0), 0);

  // Listeyi düz metne çevirip telefonun paylaşım menüsünü aç (WhatsApp, SMS, not...)
  const paylas = () => {
    const satirlar = ["🛒 Evde Hobi – Alışveriş Listesi", ""];
    for (const { p, kalemler } of gruplar) {
      satirlar.push(`▸ ${p.ad}`);
      for (const m of kalemler) {
        const f = enUcuz(m);
        const isaret = st.liste[m.id].alindi ? "✅" : "⬜";
        satirlar.push(`${isaret} ${m.ad} (${m.miktar})${f ? ` – ${tl(f.fiyat)}, ${f.magaza}` : ""}`);
        if (f && !st.liste[m.id].alindi) satirlar.push(`   ${f.url}`);
      }
      satirlar.push("");
    }
    if (toplam > 0) satirlar.push(`Tahmini toplam: ${tl(toplam)}`);
    Share.share({ message: satirlar.join("\n") }).catch(() => {});
  };

  return (
    <ScrollView style={{ backgroundColor: renk.arkaPlan }}
      contentContainerStyle={{ padding: bosluk.l, paddingTop: ust + bosluk.l, paddingBottom: bosluk.xxl }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={yazi.dev}>Alışveriş Listesi</Text>
        {tumKalemler.length > 0 && (
          <View style={{ flexDirection: "row", gap: bosluk.m }}>
            <Pressable accessibilityLabel="Listeyi paylaş" onPress={paylas} hitSlop={10} style={s.ustBtn}>
              <Ikon name="share-variant" size={20} color={renk.ana} />
            </Pressable>
            <Pressable accessibilityLabel="Listeyi temizle" hitSlop={10} style={s.ustBtn} onPress={() =>
              Alert.alert("Listeyi temizle", "Tüm malzemeler listeden silinsin mi?", [
                { text: "Vazgeç", style: "cancel" },
                { text: "Temizle", style: "destructive", onPress: st.listeyiTemizle },
              ])}>
              <Ikon name="trash-can-outline" size={20} color={renk.tehlike} />
            </Pressable>
          </View>
        )}
      </View>

      {tumKalemler.length === 0 ? (
        <Bos ikon="cart-outline" baslik="Listen boş" metin="Bir projeyi açıp 'Malzemeleri listeye ekle'ye dokun." />
      ) : (
        <>
          <View style={s.ozet}>
            <View>
              <Text style={yazi.kucuk}>Alınan</Text>
              <Text style={s.ozetDeger}>{alinan} / {tumKalemler.length}</Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={yazi.kucuk}>Tahmini toplam</Text>
              <Text style={s.ozetDeger}>{toplam > 0 ? tl(toplam) : "—"}</Text>
            </View>
          </View>

          {gruplar.map(({ p, kalemler }) => {
            const k = kategoriBul(p.kategoriId);
            return (
              <View key={p.id} style={{ marginTop: bosluk.l }}>
                <Pressable onPress={() => nav.navigate("Proje", { id: p.id })} style={s.grupBaslik}>
                  <View style={[s.grupIkon, { backgroundColor: k.renkler[0] }]}>
                    <Ikon name={p.ikon} size={16} color="#fff" />
                  </View>
                  <Text style={[yazi.altBaslik, { flex: 1 }]}>{p.ad}</Text>
                  <Ikon name="chevron-right" size={20} color={renk.yaziIkincil} />
                </Pressable>
                <View style={s.kart}>
                  {kalemler.map((m, i) => {
                    const ok = st.liste[m.id].alindi;
                    const f = enUcuz(m);
                    return (
                      <View key={m.id} style={[s.satir, i > 0 && s.ayrac]}>
                        <Pressable onPress={() => st.alindiDegistir(m.id)} hitSlop={8}>
                          <Ikon name={ok ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"} size={24}
                            color={ok ? renk.basari : renk.yaziIkincil} />
                        </Pressable>
                        <View style={{ flex: 1 }}>
                          <Text style={[yazi.govde, ok && s.ustuCizili]}>{m.ad}</Text>
                          <Text style={yazi.kucuk}>{m.miktar}{f ? ` · ${f.magaza}` : ""}</Text>
                        </View>
                        <Text style={{ fontWeight: "700", color: renk.yazi }}>{f ? tl(f.fiyat) : ""}</Text>
                        <Pressable onPress={() => st.listedenCikar(m.id)} hitSlop={8}>
                          <Ikon name="close" size={18} color={renk.yaziIkincil} />
                        </Pressable>
                      </View>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  ustBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: renk.kart, borderWidth: 1, borderColor: renk.cizgi, alignItems: "center", justifyContent: "center" },
  ozet: { flexDirection: "row", justifyContent: "space-between", backgroundColor: renk.kart, borderRadius: kose.l, padding: bosluk.l, marginTop: bosluk.l, ...golge },
  ozetDeger: { fontSize: 22, fontWeight: "800", color: renk.yazi, marginTop: 2 },
  grupBaslik: { flexDirection: "row", alignItems: "center", gap: bosluk.s, marginBottom: bosluk.s },
  grupIkon: { width: 28, height: 28, borderRadius: 8, alignItems: "center", justifyContent: "center" },
  kart: { backgroundColor: renk.kart, borderRadius: kose.m, ...golge },
  satir: { flexDirection: "row", alignItems: "center", gap: bosluk.m, padding: bosluk.m },
  ayrac: { borderTopWidth: 1, borderColor: renk.cizgi },
  ustuCizili: { textDecorationLine: "line-through", color: renk.yaziIkincil },
});
