// Adımların altındaki uygulama videosu.
// Video varsa kapak resmi + "YouTube'da izle"; yoksa YouTube aramasını açan buton.
// Oynatma YouTube uygulamasında yapılır: Expo Go'da ek paket gerektirmez ve
// gömülü oynatıcıların Android'deki "video oynatılamıyor" sorunlarından etkilenmez.
import { Image, Pressable, Text, View } from "react-native";
import { Ikon } from "./components";
import { linkAc } from "./fiyat";
import type { Proje } from "./data/types";
import VIDEOLAR from "./data/videolar.json";
import { bosluk, golge, kose, renk, yazi, stil } from "./theme";

export type Video = {
  id: string; // YouTube video kimliği (11 karakter)
  baslik: string;
  kanal: string;
  sure?: string; // "12:34"
  kendi?: boolean; // kendi kanalımızın videosu
};

const LISTE = VIDEOLAR as Record<string, Video>;
export const YOUTUBE_ID = /^[A-Za-z0-9_-]{11}$/;

export function projeVideosu(projeId: string): Video | undefined {
  const v = LISTE[projeId];
  return v && YOUTUBE_ID.test(v.id) ? v : undefined;
}

export const izleAdresi = (id: string) => `https://www.youtube.com/watch?v=${id}`;
export const aramaAdresi = (proje: Proje) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(`${proje.ad} nasıl yapılır`)}`;

export function ProjeVideo({ proje }: { proje: Proje }) {
  const v = projeVideosu(proje.id);

  if (!v) {
    return (
      <Pressable accessibilityRole="button" onPress={() => linkAc(aramaAdresi(proje))} style={[s.kart, s.satir]}>
        <Ikon name="youtube" size={28} color="#FF0000" />
        <View style={{ flex: 1 }}>
          <Text style={yazi.altBaslik}>Uygulama videosu</Text>
          <Text style={yazi.kucuk}>Bu proje için video hazırlanıyor. {"Şimdilik YouTube'da arayabilirsin."}</Text>
        </View>
        <Ikon name="open-in-new" size={18} color={renk.yaziIkincil} />
      </Pressable>
    );
  }

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Videoyu YouTube'da izle: ${v.baslik}`}
      onPress={() => linkAc(izleAdresi(v.id))}
      style={s.kart}
    >
      <Text style={[yazi.altBaslik, { marginBottom: bosluk.s }]}>Uygulama videosu</Text>
      <View style={s.kapak}>
        <Image source={{ uri: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg` }} style={s.resim} resizeMode="cover" />
        <View style={s.oynat}>
          <Ikon name="play" size={34} color="#fff" />
        </View>
        {v.sure ? <Text style={s.sure}>{v.sure}</Text> : null}
      </View>
      <Text style={[yazi.govde, { fontWeight: "600", marginTop: bosluk.s }]} numberOfLines={2}>
        {v.baslik}
      </Text>
      <View style={[s.satir, { marginTop: 2 }]}>
        <Text style={[yazi.kucuk, { flex: 1 }]} numberOfLines={1}>
          {v.kendi ? "Protyp kanalı" : v.kanal}
        </Text>
        <Text style={[yazi.kucuk, { color: "#FF0000", fontWeight: "700" }]}>{"YouTube'da izle"}</Text>
      </View>
    </Pressable>
  );
}

const s = stil(() => ({
  kart: {
    backgroundColor: renk.kart,
    borderRadius: kose.l,
    padding: bosluk.m,
    marginTop: bosluk.m,
    ...golge,
  },
  satir: { flexDirection: "row", alignItems: "center", gap: bosluk.m },
  kapak: { borderRadius: kose.m, overflow: "hidden", aspectRatio: 16 / 9, backgroundColor: "#000" },
  resim: { width: "100%", height: "100%" },
  oynat: {
    position: "absolute",
    alignSelf: "center",
    top: "50%",
    marginTop: -30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(255,0,0,0.9)",
    alignItems: "center",
    justifyContent: "center",
  },
  sure: {
    position: "absolute",
    right: 8,
    bottom: 8,
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0.75)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontSize: 12,
    fontWeight: "700",
  },
}));
