// Hata sınırı: bir ekranda beklenmeyen hata olursa uygulama beyaz ekranda donmasın;
// kullanıcıya anlaşılır bir mesaj ve "Tekrar dene" gösterilir.
import { Component, ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { bosluk, kose, renk, yazi } from "./theme";

type Durum = { hata: Error | null };

export class HataSiniri extends Component<{ children: ReactNode }, Durum> {
  state: Durum = { hata: null };

  static getDerivedStateFromError(hata: Error): Durum {
    return { hata };
  }

  componentDidCatch(hata: Error, bilgi: { componentStack?: string | null }) {
    // İleride çökme raporlama (ör. Sentry) buraya bağlanır
    console.error("Uygulama hatası:", hata, bilgi.componentStack);
  }

  render() {
    if (!this.state.hata) return this.props.children;
    return (
      <View style={s.kap}>
        <Text style={s.emoji}>🛠️</Text>
        <Text style={yazi.baslik}>Bir şeyler ters gitti</Text>
        <Text style={[yazi.govde, s.metin]}>
          Bu ekran açılırken beklenmeyen bir hata oldu. Favorilerin ve listen kayıtlı; tekrar deneyebilirsin.
        </Text>
        <Pressable accessibilityRole="button" onPress={() => this.setState({ hata: null })} style={s.btn}>
          <Text style={s.btnYazi}>Tekrar dene</Text>
        </Pressable>
        {__DEV__ && <Text style={s.detay}>{String(this.state.hata.message)}</Text>}
      </View>
    );
  }
}

const s = StyleSheet.create({
  kap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: bosluk.xl,
    backgroundColor: renk.arkaPlan,
    gap: bosluk.m,
  },
  emoji: { fontSize: 48 },
  metin: { textAlign: "center", color: renk.yaziIkincil },
  btn: { backgroundColor: renk.ana, paddingHorizontal: bosluk.xl, paddingVertical: bosluk.m, borderRadius: kose.m },
  btnYazi: { color: "#fff", fontWeight: "700", fontSize: 16 },
  detay: { fontSize: 11, color: renk.yaziIkincil, textAlign: "center" },
});
