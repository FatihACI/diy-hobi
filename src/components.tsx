import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { KAGIT_RENGI, KAGIT_YAZI, ProjeCizim } from "./cizimler";
import { kategoriBul } from "./data/kategoriler";
import { IkonAdi, Kategori, Proje, Zorluk } from "./data/types";
import { useFiyat } from "./fiyat";
import { useStore } from "./store";
import { bosluk, golge, kose, renk, tl, yazi, zorlukRenk, stil } from "./theme";

export const Ikon = MaterialCommunityIcons;

// ── Rozet ──
export function Rozet({
  ikon,
  metin,
  fg = renk.yaziIkincil,
  bg = renk.yuzey2,
}: {
  ikon?: IkonAdi;
  metin: string;
  fg?: string;
  bg?: string;
}) {
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
export function Arama({
  deger,
  degis,
  ipucu = "Proje, malzeme veya kategori ara",
}: {
  deger: string;
  degis: (s: string) => void;
  ipucu?: string;
}) {
  return (
    <View style={st.arama}>
      <Ikon name="magnify" size={20} color={renk.yaziIkincil} />
      <TextInput
        value={deger}
        onChangeText={degis}
        placeholder={ipucu}
        placeholderTextColor={renk.yaziIkincil}
        style={{ flex: 1, fontSize: 15, color: renk.yazi }}
        accessibilityLabel="Ara"
        returnKeyType="search"
        autoCorrect={false}
      />
      {deger.length > 0 && (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Aramayı temizle"
          onPress={() => degis("")}
          hitSlop={10}
        >
          <Ikon name="close-circle" size={18} color={renk.yaziIkincil} />
        </Pressable>
      )}
    </View>
  );
}

// ── Kategori kartı (yatay kaydırma için) ──
export function KategoriKart({
  k,
  sayi,
  onPress,
  genis,
}: {
  k: Kategori;
  sayi: number;
  onPress: () => void;
  genis?: boolean;
}) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.85 : 1 }, genis ? { flex: 1 } : null]}>
      <LinearGradient
        colors={k.renkler}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[st.kategori, genis && st.kategoriGenis]}
      >
        <View style={st.kategoriIkon}>
          <Ikon name={k.ikon} size={26} color="#fff" />
        </View>
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
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [st.proje, yatay && { width: 240 }, { opacity: pressed ? 0.9 : 1 }]}
    >
      <View style={[st.projeKapak, { borderTopColor: k.renkler[0] }]}>
        <ProjeCizim id={p.id} boyut={124} />
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={fav ? `${p.ad}: favorilerden çıkar` : `${p.ad}: favorilere ekle`}
          onPress={() => favoriDegistir(p.id)}
          hitSlop={10}
          style={st.favBtn}
        >
          <Ikon name={fav ? "heart" : "heart-outline"} size={20} color={fav ? "#DC2626" : KAGIT_YAZI} />
        </Pressable>
        <View style={[st.kategoriEtiket, { backgroundColor: k.renkler[0] }]}>
          <Ikon name={k.ikon} size={11} color="#fff" />
          <Text style={st.kategoriEtiketYazi}>{k.ad}</Text>
        </View>
      </View>
      <View style={{ padding: bosluk.m, gap: 6 }}>
        <Text style={yazi.altBaslik} numberOfLines={1}>
          {p.ad}
        </Text>
        <Text style={yazi.kucuk} numberOfLines={2}>
          {p.ozet}
        </Text>
        <View style={{ flexDirection: "row", gap: 6, flexWrap: "wrap" }}>
          {p.altin && <Rozet ikon="star" metin="Seçkin" fg={renk.vurgu} bg={renk.vurguAcik} />}
          <ZorlukRozet z={p.zorluk} />
          <Rozet ikon="clock-outline" metin={p.sure} />
          {mal.fiyatliSayi > 0 && (
            <Rozet ikon="cash" metin={(mal.fiyatliSayi < mal.tumu ? "≥ " : "") + tl(mal.toplam)} />
          )}
        </View>
      </View>
    </Pressable>
  );
}

// ── Seçim çipleri (filtre, soru cevapları) ──
export function Cipler<T extends string | number>({
  secenekler,
  deger,
  sec,
  etiket,
  yazi: yaz = String,
}: {
  secenekler: readonly T[];
  deger: T;
  sec: (x: T) => void;
  etiket: string;
  yazi?: (x: T) => string;
}) {
  return (
    <View>
      <Text style={st.cipEtiket}>{etiket}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={st.ciplerSatir}>
        {secenekler.map((x) => (
          <Pressable
            key={String(x)}
            accessibilityRole="button"
            accessibilityState={{ selected: deger === x }}
            onPress={() => sec(x)}
            style={[st.cip, deger === x && st.cipAktif]}
          >
            <Text style={[st.cipYazi, deger === x && { color: renk.arkaPlan }]}>{yaz(x)}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

// ── Alt ekran başlığı (geri düğmeli) ──
export function UstBaslik({ baslik, alt, geri }: { baslik: string; alt?: string; geri: () => void }) {
  return (
    <View style={st.ustBaslik}>
      <Pressable accessibilityLabel="Geri" accessibilityRole="button" onPress={geri} style={st.geriBtn} hitSlop={10}>
        <Ikon name="arrow-left" size={22} color={renk.yazi} />
      </Pressable>
      <View style={{ flex: 1 }}>
        <Text style={[yazi.dev, { fontSize: 24 }]}>{baslik}</Text>
        {alt ? <Text style={yazi.kucuk}>{alt}</Text> : null}
      </View>
    </View>
  );
}

// ── İlerleme çubuğu ──
export const Cubuk = ({ oran, renkDolu = renk.ana }: { oran: number; renkDolu?: string }) => (
  <View style={st.cubuk}>
    <View style={[st.cubukDolu, { width: `${Math.max(0, Math.min(1, oran)) * 100}%`, backgroundColor: renkDolu }]} />
  </View>
);

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
    <View style={st.bosIkon}>
      <Ikon name={ikon} size={40} color={renk.ana} />
    </View>
    <Text style={[yazi.baslik, { textAlign: "center" }]}>{baslik}</Text>
    <Text style={[yazi.kucuk, { textAlign: "center", fontSize: 15 }]}>{metin}</Text>
  </View>
);

export { tl };

const st = stil(() => ({
  ustBaslik: { flexDirection: "row", alignItems: "center", gap: bosluk.m, marginBottom: bosluk.l },
  geriBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: renk.kart,
    borderWidth: 1,
    borderColor: renk.cizgi,
    alignItems: "center",
    justifyContent: "center",
  },
  cubuk: { height: 8, borderRadius: 4, backgroundColor: renk.cizgi, overflow: "hidden" },
  cubukDolu: { height: 8, borderRadius: 4 },
  cip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: renk.kart,
    borderWidth: 1,
    borderColor: renk.cizgi,
  },
  cipAktif: { backgroundColor: renk.yazi, borderColor: renk.yazi },
  cipYazi: { fontWeight: "600", color: renk.yazi },
  ciplerSatir: { paddingHorizontal: bosluk.l, gap: bosluk.s },
  cipEtiket: { paddingHorizontal: bosluk.l, fontSize: 12, fontWeight: "700", color: renk.yaziIkincil, marginBottom: 4 },
  rozet: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
  },
  rozetYazi: { fontSize: 12, fontWeight: "600" },
  arama: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: renk.kart,
    borderRadius: kose.m,
    paddingHorizontal: bosluk.m,
    height: 48,
    borderWidth: 1,
    borderColor: renk.cizgi,
  },
  kategori: { width: 130, height: 130, borderRadius: kose.l, padding: bosluk.m, justifyContent: "space-between" },
  kategoriGenis: { width: "auto", height: 92, flexDirection: "row", alignItems: "center", gap: bosluk.m },
  kategoriIkon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.22)",
    alignItems: "center",
    justifyContent: "center",
  },
  kategoriAd: { color: "#fff", fontSize: 16, fontWeight: "700" },
  kategoriSayi: { color: "rgba(255,255,255,0.9)", fontSize: 12, marginTop: 2 },
  kategoriSayiGenis: { color: "#fff", fontSize: 22, fontWeight: "800" },
  proje: { backgroundColor: renk.kart, borderRadius: kose.l, overflow: "hidden", ...golge },
  projeKapak: {
    height: 136,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: KAGIT_RENGI,
    borderTopWidth: 4,
    borderBottomWidth: 1,
    borderBottomColor: renk.kagitCizgi,
  },
  favBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: renk.kagitCizgi,
    alignItems: "center",
    justifyContent: "center",
  },
  kategoriEtiket: {
    position: "absolute",
    left: 10,
    top: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 999,
  },
  kategoriEtiketYazi: { color: "#fff", fontSize: 11, fontWeight: "700" },
  bolum: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: bosluk.xl,
    marginBottom: bosluk.m,
  },
  bos: { alignItems: "center", padding: bosluk.xxl, gap: bosluk.s, marginTop: 60 },
  bosIkon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: renk.anaAcik,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: bosluk.s,
  },
}));
