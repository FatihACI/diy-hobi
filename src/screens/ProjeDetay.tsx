import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KAGIT_RENGI, ProjeCizim } from "../cizimler";
import { Ikon, Rozet, tl, ZorlukRozet } from "../components";
import { tarihYaz, useFiyat } from "../fiyat";
import { kategoriBul } from "../data/kategoriler";
import { projeBul } from "../data/projeler";
import { IkonAdi, Malzeme } from "../data/types";
import { RootParams } from "../nav";
import { useStore } from "../store";
import { bosluk, golge, kose, renk, yazi } from "../theme";

type P = NativeStackScreenProps<RootParams, "Proje">;
type Sekme = "Malzemeler" | "Adımlar" | "İpuçları" | "Kod";

export default function ProjeDetay({ route, navigation }: P) {
  const p = projeBul(route.params.id);
  const k = kategoriBul(p.kategoriId);
  const ins = useSafeAreaInsets();
  const st = useStore();
  const [sekme, setSekme] = useState<Sekme>("Malzemeler");
  const sekmeler: Sekme[] = p.kod
    ? ["Malzemeler", "Adımlar", "İpuçları", "Kod"]
    : ["Malzemeler", "Adımlar", "İpuçları"];

  const maliyet = useFiyat().maliyet(p);
  const biten = st.bitenAdimlar[p.id] ?? [];
  const ilerleme = biten.length / p.adimlar.length;
  const fav = st.favoriMi(p.id);
  const hepsiListede = p.malzemeler.every((m) => st.liste[m.id]);

  return (
    <View style={{ flex: 1, backgroundColor: renk.arkaPlan }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Kapak */}
        <View style={[s.kapak, { paddingTop: ins.top + bosluk.s, borderTopColor: k.renkler[0] }]}>
          <View style={s.ustBar}>
            <Pressable
              accessibilityLabel="Geri"
              accessibilityRole="button"
              onPress={navigation.goBack}
              style={s.yuvarlak}
              hitSlop={10}
            >
              <Ikon name="arrow-left" size={22} color={renk.yazi} />
            </Pressable>
            <Pressable
              accessibilityLabel={fav ? "Favorilerden çıkar" : "Favorilere ekle"}
              accessibilityRole="button"
              onPress={() => st.favoriDegistir(p.id)}
              style={s.yuvarlak}
              hitSlop={10}
            >
              <Ikon name={fav ? "heart" : "heart-outline"} size={22} color={fav ? renk.tehlike : renk.yazi} />
            </Pressable>
          </View>
          <View style={{ alignItems: "center", marginTop: -bosluk.l }}>
            <ProjeCizim id={p.id} boyut={210} />
          </View>
        </View>

        {/* Başlık kartı */}
        <View style={s.baslikKart}>
          <Text style={[yazi.kucuk, { color: k.renkler[0], fontWeight: "700" }]}>
            {k.ad.toLocaleUpperCase("tr-TR")}
          </Text>
          <Text style={[yazi.dev, { fontSize: 24 }]}>{p.ad}</Text>
          <Text style={[yazi.govde, { color: renk.yaziIkincil }]}>{p.ozet}</Text>
          <View style={s.bilgiSatir}>
            <Bilgi ikon="signal-cellular-2" etiket="Zorluk">
              <ZorlukRozet z={p.zorluk} />
            </Bilgi>
            <Bilgi ikon="clock-outline" etiket="Süre">
              <Text style={s.bilgiDeger}>{p.sure}</Text>
            </Bilgi>
            <Bilgi ikon="cash" etiket="Maliyet">
              <Text style={s.bilgiDeger}>
                {maliyet.fiyatliSayi ? (maliyet.fiyatliSayi < maliyet.tumu ? "≥ " : "") + tl(maliyet.toplam) : "—"}
              </Text>
            </Bilgi>
          </View>
          {p.yas && <Rozet ikon="account-child" metin={p.yas} fg={renk.ana} bg={renk.anaAcik} />}
        </View>

        {/* Sekmeler */}
        <View style={s.sekmeler}>
          {sekmeler.map((x) => (
            <Pressable key={x} onPress={() => setSekme(x)} style={[s.sekme, sekme === x && s.sekmeAktif]}>
              <Text style={[s.sekmeYazi, sekme === x && { color: renk.yazi }]}>{x}</Text>
            </Pressable>
          ))}
        </View>

        <View style={{ paddingHorizontal: bosluk.l }}>
          {sekme === "Malzemeler" && (
            <>
              <MalzemeGrup baslik="Malzemeler" liste={p.malzemeler.filter((m) => !m.arac)} />
              <MalzemeGrup baslik="Aletler" liste={p.malzemeler.filter((m) => m.arac)} />
              <FiyatNotu />
            </>
          )}

          {sekme === "Adımlar" && (
            <>
              <View style={s.ilerlemeKart}>
                <Text style={yazi.altBaslik}>
                  {biten.length} / {p.adimlar.length} adım tamamlandı
                </Text>
                <View style={s.ilerlemeBar}>
                  <View style={[s.ilerlemeDolu, { width: `${ilerleme * 100}%`, backgroundColor: k.renkler[0] }]} />
                </View>
              </View>
              {p.adimlar.map((a, i) => {
                const ok = biten.includes(i);
                return (
                  <Pressable key={i} onPress={() => st.adimDegistir(p.id, i)} style={[s.adim, ok && { opacity: 0.6 }]}>
                    <View style={[s.adimNo, { backgroundColor: ok ? renk.basari : k.renkler[0] }]}>
                      {ok ? <Ikon name="check" size={16} color="#fff" /> : <Text style={s.adimNoYazi}>{i + 1}</Text>}
                    </View>
                    <View style={{ flex: 1, gap: 4 }}>
                      <Text style={[yazi.altBaslik, ok && { textDecorationLine: "line-through" }]}>{a.baslik}</Text>
                      <Text style={yazi.govde}>{a.aciklama}</Text>
                    </View>
                  </Pressable>
                );
              })}
            </>
          )}

          {sekme === "İpuçları" && (
            <>
              <Kutu
                ikon="shield-alert-outline"
                baslik="Güvenlik"
                fg={renk.tehlike}
                bg={renk.tehlikeAcik}
                satirlar={p.guvenlik}
              />
              <Kutu
                ikon="lightbulb-on-outline"
                baslik="Usta ipuçları"
                fg={renk.uyari}
                bg={renk.uyariAcik}
                satirlar={p.ipuclari}
              />
            </>
          )}

          {sekme === "Kod" && p.kod && (
            <ScrollView horizontal style={s.kod} contentContainerStyle={{ padding: bosluk.l }}>
              <Text style={s.kodYazi} selectable>
                {p.kod}
              </Text>
            </ScrollView>
          )}
        </View>
      </ScrollView>

      {/* Alt aksiyon çubuğu */}
      <View style={[s.altBar, { paddingBottom: ins.bottom + bosluk.m }]}>
        <Pressable
          disabled={hepsiListede}
          onPress={() =>
            st.listeyeEkle(
              p.id,
              p.malzemeler.map((m) => m.id),
            )
          }
          style={({ pressed }) => [
            s.anaBtn,
            { backgroundColor: hepsiListede ? renk.basari : renk.ana, opacity: pressed ? 0.9 : 1 },
          ]}
        >
          <Ikon name={hepsiListede ? "check-circle" : "cart-plus"} size={20} color="#fff" />
          <Text style={s.anaBtnYazi}>{hepsiListede ? "Tüm malzemeler listede" : "Malzemeleri listeye ekle"}</Text>
        </Pressable>
      </View>
    </View>
  );
}

function Bilgi({ ikon, etiket, children }: { ikon: IkonAdi; etiket: string; children: React.ReactNode }) {
  return (
    <View style={s.bilgi}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        <Ikon name={ikon} size={14} color={renk.yaziIkincil} />
        <Text style={yazi.kucuk}>{etiket}</Text>
      </View>
      {children}
    </View>
  );
}

function MalzemeGrup({ baslik, liste }: { baslik: string; liste: Malzeme[] }) {
  const st = useStore();
  const fy = useFiyat();
  const [acik, setAcik] = useState<string | null>(null);
  if (!liste.length) return null;
  return (
    <View style={{ marginBottom: bosluk.l }}>
      <Text style={[yazi.altBaslik, { marginBottom: bosluk.s }]}>
        {baslik} ({liste.length})
      </Text>
      <View style={s.liste}>
        {liste.map((m, i) => {
          const teklifler = [...fy.teklifler(m)].sort((x, y) => x.fiyat - y.fiyat);
          const f = teklifler[0];
          const listede = !!st.liste[m.id];
          const genis = acik === m.id && teklifler.length > 1;
          return (
            <View key={m.id} style={i > 0 && s.ayrac}>
              <Pressable style={s.malzeme} disabled={teklifler.length < 2} onPress={() => setAcik(genis ? null : m.id)}>
                <View style={{ flex: 1 }}>
                  <Text style={[yazi.govde, { fontWeight: "600" }]}>{m.ad}</Text>
                  <Text style={yazi.kucuk}>
                    {m.miktar}
                    {teklifler.length > 1 ? ` · ${teklifler.length} mağaza ${genis ? "▴" : "▾"}` : ""}
                  </Text>
                </View>
                {f ? (
                  <Pressable onPress={() => Linking.openURL(f.url)} style={{ alignItems: "flex-end" }} hitSlop={6}>
                    <Text style={s.fiyat}>{tl(f.fiyat)}</Text>
                    <Text style={s.magaza}>{f.magaza} ›</Text>
                  </Pressable>
                ) : (
                  <Text style={[yazi.kucuk, { fontStyle: "italic" }]}>Fiyat yakında</Text>
                )}
                <Ikon
                  name={listede ? "cart-check" : "cart-outline"}
                  size={20}
                  color={listede ? renk.basari : renk.cizgi}
                />
              </Pressable>
              {genis &&
                teklifler.slice(1).map((t) => (
                  <Pressable key={t.magaza} onPress={() => Linking.openURL(t.url)} style={s.teklif}>
                    <Text style={[yazi.kucuk, { flex: 1 }]}>{t.magaza}</Text>
                    <Text style={{ fontWeight: "700", color: renk.yazi }}>{tl(t.fiyat)}</Text>
                    <Ikon name="open-in-new" size={14} color={renk.yaziIkincil} />
                  </Pressable>
                ))}
            </View>
          );
        })}
      </View>
    </View>
  );
}

function FiyatNotu() {
  const fy = useFiyat();
  let metin =
    "Fiyatlar güvenilir mağazalardan otomatik toplanır; her malzemede en düşük fiyat gösterilir. Toplam, her kalemden bir paket alındığı varsayımıyla hesaplanır.";
  let renkNot: string = renk.yaziIkincil;
  if (fy.durum === "kapali") metin = "Fiyat servisi henüz bağlanmadı. Fiyatlar yakında burada görünecek.";
  else if (fy.durum === "yukleniyor" && !fy.guncelleme) metin = "Fiyatlar yükleniyor…";
  else if (fy.durum === "hata" && !fy.guncelleme) metin = "Fiyatlara ulaşılamadı. İnternet bağlantını kontrol et.";
  else if (fy.guncelleme) {
    metin += `\nSon güncelleme: ${tarihYaz(fy.guncelleme)}.`;
    if (fy.eskiMi) {
      metin += " Fiyatlar bir haftadan eski, mağazada değişmiş olabilir.";
      renkNot = renk.uyari;
    }
  }
  return (
    <View style={s.fiyatNot}>
      <Ikon name="information-outline" size={18} color={renkNot} />
      <Text style={[yazi.kucuk, { flex: 1, color: renkNot }]}>{metin}</Text>
      {fy.durum === "hata" && (
        <Pressable onPress={fy.yenile} hitSlop={8}>
          <Text style={{ color: renk.ana, fontWeight: "700" }}>Tekrar dene</Text>
        </Pressable>
      )}
    </View>
  );
}

function Kutu({
  ikon,
  baslik,
  fg,
  bg,
  satirlar,
}: {
  ikon: IkonAdi;
  baslik: string;
  fg: string;
  bg: string;
  satirlar: string[];
}) {
  return (
    <View style={[s.kutu, { backgroundColor: bg }]}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginBottom: bosluk.s }}>
        <Ikon name={ikon} size={20} color={fg} />
        <Text style={[yazi.altBaslik, { color: fg }]}>{baslik}</Text>
      </View>
      {satirlar.map((t, i) => (
        <View key={i} style={{ flexDirection: "row", gap: 8, marginTop: 6 }}>
          <Text style={{ color: fg, fontWeight: "700" }}>•</Text>
          <Text style={[yazi.govde, { flex: 1 }]}>{t}</Text>
        </View>
      ))}
    </View>
  );
}

const s = StyleSheet.create({
  kapak: { paddingHorizontal: bosluk.l, paddingBottom: 40, backgroundColor: KAGIT_RENGI, borderTopWidth: 4 },
  ustBar: { flexDirection: "row", justifyContent: "space-between" },
  yuvarlak: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#EDE7DA",
    alignItems: "center",
    justifyContent: "center",
  },
  baslikKart: {
    backgroundColor: renk.kart,
    marginHorizontal: bosluk.l,
    marginTop: -32,
    borderRadius: kose.l,
    padding: bosluk.l,
    gap: bosluk.s,
    ...golge,
  },
  bilgiSatir: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: renk.cizgi,
    paddingTop: bosluk.m,
    marginTop: bosluk.xs,
  },
  bilgi: { flex: 1, gap: 6 },
  bilgiDeger: { fontSize: 14, fontWeight: "700", color: renk.yazi },
  sekmeler: { flexDirection: "row", margin: bosluk.l, backgroundColor: "#E9EBEF", borderRadius: kose.m, padding: 4 },
  sekme: { flex: 1, paddingVertical: 10, borderRadius: kose.s, alignItems: "center" },
  sekmeAktif: { backgroundColor: renk.kart, ...golge },
  sekmeYazi: { fontWeight: "600", color: renk.yaziIkincil, fontSize: 13 },
  liste: { backgroundColor: renk.kart, borderRadius: kose.m, ...golge },
  malzeme: { flexDirection: "row", alignItems: "center", gap: bosluk.m, padding: bosluk.m },
  teklif: {
    flexDirection: "row",
    alignItems: "center",
    gap: bosluk.s,
    paddingHorizontal: bosluk.m,
    paddingVertical: 10,
    marginLeft: bosluk.m,
    borderTopWidth: 1,
    borderColor: renk.cizgi,
  },
  ayrac: { borderTopWidth: 1, borderColor: renk.cizgi },
  fiyat: { fontWeight: "800", color: renk.basari, fontSize: 15 },
  magaza: { color: "#2563EB", fontSize: 12 },
  fiyatNot: { flexDirection: "row", gap: 8, alignItems: "flex-start" },
  ilerlemeKart: {
    backgroundColor: renk.kart,
    borderRadius: kose.m,
    padding: bosluk.m,
    gap: bosluk.s,
    marginBottom: bosluk.m,
    ...golge,
  },
  ilerlemeBar: { height: 8, borderRadius: 4, backgroundColor: renk.cizgi, overflow: "hidden" },
  ilerlemeDolu: { height: 8, borderRadius: 4 },
  adim: {
    flexDirection: "row",
    gap: bosluk.m,
    backgroundColor: renk.kart,
    borderRadius: kose.m,
    padding: bosluk.m,
    marginBottom: bosluk.s,
    ...golge,
  },
  adimNo: { width: 30, height: 30, borderRadius: 15, alignItems: "center", justifyContent: "center" },
  adimNoYazi: { color: "#fff", fontWeight: "800" },
  kutu: { borderRadius: kose.m, padding: bosluk.l, marginBottom: bosluk.m },
  kod: { backgroundColor: "#0F172A", borderRadius: kose.m },
  kodYazi: { color: "#E2E8F0", fontFamily: "monospace", fontSize: 12, lineHeight: 18 },
  altBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: renk.kart,
    paddingHorizontal: bosluk.l,
    paddingTop: bosluk.m,
    borderTopWidth: 1,
    borderColor: renk.cizgi,
  },
  anaBtn: {
    height: 52,
    borderRadius: kose.m,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  anaBtnYazi: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
