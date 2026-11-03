import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { KAGIT_RENGI, ProjeCizim } from "./cizimler";
import { kategoriBul } from "./data/kategoriler";
import { IkonAdi, Kategori, Proje, Zorluk } from "./data/types";
import { useFiyat } from "./fiyat";
import { useStore } from "./store";
import { bosluk, golge, kose, renk, tl, yazi, zorlukRenk } from "./theme";

export const Ikon = MaterialCommunityIcons;

// ── Rozet ──
export function Rozet({ ikon, metin, fg = renk.yaziIkincil, bg = "#F3F4F6" }:
  { ikon?: IkonAdi; metin: string; fg?: string; bg?: string }) {
  return (
    <View style={[st.rozet, { backgroundColor: bg }]}>
      {ikon && <Ikon name={ikon} size={13} color={fg} />}
      <Text style={[st.rozetYazi, { color: fg }]}>{metin}</Text>
    </View>
  );
}

export const ZorlukRozet = ({ z }: { z: Zorluk }) => (
  <Rozet ikon="signal-cellular-2" metin={z} fg={zorlukRenk[z].fg} bg={zorlukRenk[z].bg} />
);

// ── Arama kutusu ──
export function Arama({ deger, degis }: { deger: string; degis: (s: string) => void }) {
  return (
    <View style={st.arama}>
      <Ikon name="magnify" size={20} color={renk.yaziIkincil} />
      <TextInput
        value={deger}
        onChangeText={degis}
        placeholder="Proje, malzeme veya kategori ara"
        placeholderTextColor={renk.yaziIkincil}
        style={{ flex: 1, fontSize: 15, color: renk.yazi }}
      />
      {deger.length > 0 && (
        <Pressable onPress={() => degis("")} hitSlop={10}>
          <Ikon name="close-circle" size={18} color={renk.yaziIkincil} />
        </Pressable>
      )}
    </View>
  );
}

// ── Kategori kartı (yatay kaydırma için) ──
export function KategoriKart({ k, sayi, onPress, genis }:
  { k: Kategori; sayi: number; onPress: () => void; genis?: boolean }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.85 : 1 }, genis ? { flex: 1 } : null]}>
      <LinearGradient colors={k.renkler} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
        style={[st.kategori, genis && st.kategoriGenis]}>
        <View style={st.kategoriIkon}><Ikon name={k.ikon} size={26} color="#fff" /></View>
        <View style={genis ? { flex: 1 } : undefined}>
          <Text style={st.kategoriAd}>{k.ad}</Text>
          <Text style={st.kategoriSayi}>{genis ? k.aciklama : `${sayi} proje`}</Text>
        </View>
        {genis && <Text style={st.kategoriSayiGenis}>{sayi}</Text>}
      </LinearGradient>
    </Pressable>
  );
}

// ── Proje kartı ──
export function ProjeKart({ p, onPress, yatay }: { p: Proje; onPress: () => void; yatay?: boolean }) {
  const k = kategoriBul(p.kategoriId);
  const { favoriMi, favoriDegistir } = useStore();
  const fav = favoriMi(p.id);
  const mal = useFiyat().maliyet(p);
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [st.proje, yatay && { width: 240 }, { opacity: pressed ? 0.9 : 1 }]}>
      <View style={[st.projeKapak, { borderTopColor: k.renkler[0] }]}>
        <ProjeCizim id={p.id} boyut={124} />
        <Pressable onPress={() => favoriDegistir(p.id)} hitSlop={10} style={st.favBtn}>
          <Ikon name={fav ? "heart" : "heart-outline"} size={20} color={fav ? renk.tehlike : renk.yazi} />
        </Pressable>
        <View style={[st.kategoriEtiket, { backgroundColor: k.renkler[0] }]}>
          <Ikon name={k.ikon} size={11} color="#fff" />
          <Text style={st.kategoriEtiketYazi}>{k.ad}</Text>
        </View>
      </View>
      <View style={{ padding: bosluk.m, gap: 6 }}>
        <Text style={yazi.altBaslik} numberOfLines={1}>{p.ad}</Text>
        <Text style={yazi.kucuk} numberOfLines={2}>{p.ozet}</Text>
        <View style={{ flexDirection: "row", gap: 6, flexWrap: "wrap" }}>
          <ZorlukRozet z={p.zorluk} />
          <Rozet ikon="clock-outline" metin={p.sure} />
          {mal.fiyatliSayi > 0 && (
            <Rozet ikon="cash" metin={(mal.fiyatliSayi < mal.tumu ? "≥ " : "") + tl(mal.toplam)} fg={renk.basari} bg={renk.basariAcik} />
          )}
        </View>
      </View>
    </Pressable>
  );
}

// ── Bölüm başlığı ──
export const Bolum = ({ baslik, sag }: { baslik: string; sag?: React.ReactNode }) => (
  <View style={st.bolum}>
    <Text style={yazi.baslik}>{baslik}</Text>
    {sag}
  </View>
);

// ── Boş durum ──
export const Bos = ({ ikon, baslik, metin }: { ikon: IkonAdi; baslik: string; metin: string }) => (
  <View style={st.bos}>
    <View style={st.bosIkon}><Ikon name={ikon} size={40} color={renk.ana} /></View>
    <Text style={[yazi.baslik, { textAlign: "center" }]}>{baslik}</Text>
    <Text style={[yazi.kucuk, { textAlign: "center", fontSize: 15 }]}>{metin}</Text>
  </View>
);

export { tl };

const st = StyleSheet.create({
  rozet: { alignSelf: "flex-start", flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 999 },
  rozetYazi: { fontSize: 12, fontWeight: "600" },
  arama: { flexDirection: "row", alignItems: "center", gap: 8, backgroundColor: renk.kart, borderRadius: kose.m, paddingHorizontal: bosluk.m, height: 48, borderWidth: 1, borderColor: renk.cizgi },
  kategori: { width: 130, height: 130, borderRadius: kose.l, padding: bosluk.m, justifyContent: "space-between" },
  kategoriGenis: { width: "auto", height: 92, flexDirection: "row", alignItems: "center", gap: bosluk.m },
  kategoriIkon: { width: 44, height: 44, borderRadius: 12, backgroundColor: "rgba(255,255,255,0.22)", alignItems: "center", justifyContent: "center" },
  kategoriAd: { color: "#fff", fontSize: 16, fontWeight: "700" },
  kategoriSayi: { color: "rgba(255,255,255,0.9)", fontSize: 12, marginTop: 2 },
  kategoriSayiGenis: { color: "#fff", fontSize: 22, fontWeight: "800" },
  proje: { backgroundColor: renk.kart, borderRadius: kose.l, overflow: "hidden", ...golge },
  projeKapak: { height: 136, alignItems: "center", justifyContent: "center", backgroundColor: KAGIT_RENGI, borderTopWidth: 4, borderBottomWidth: 1, borderBottomColor: "#EDE7DA" },
  favBtn: { position: "absolute", top: 10, right: 10, width: 34, height: 34, borderRadius: 17, backgroundColor: "#fff", borderWidth: 1, borderColor: "#EDE7DA", alignItems: "center", justifyContent: "center" },
  kategoriEtiket: { position: "absolute", left: 10, top: 10, flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 999 },
  kategoriEtiketYazi: { color: "#fff", fontSize: 11, fontWeight: "700" },
  bolum: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: bosluk.xl, marginBottom: bosluk.m },
  bos: { alignItems: "center", padding: bosluk.xxl, gap: bosluk.s, marginTop: 60 },
  bosIkon: { width: 80, height: 80, borderRadius: 40, backgroundColor: renk.anaAcik, alignItems: "center", justifyContent: "center", marginBottom: bosluk.s },
});
