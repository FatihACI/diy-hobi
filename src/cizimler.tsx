// Karakalem tarzı çizimleri ekrana basan bileşen.
// Her çizgi iki kez çizilir: koyu ana çizgi + hafif kaymış silik çizgi → kurşun kalem hissi.
// Gölgeler ClipPath içinde çapraz tarama ile yapılır.
import { useId } from "react";
import Svg, { Circle, ClipPath, Defs, G, Path } from "react-native-svg";
import { Cizim as CizimVeri, taramaYollari } from "./cizim/arac";
import { KATEGORI_CIZIM } from "./cizim/kategori";
import { KATEGORI_EK } from "./cizim/kategori-ek";
import { PROJE_CIZIM } from "./cizim/proje";
import { PROJE_COCUK_DOGA } from "./cizim/proje-cocuk-doga";
import { PROJE_EL_SANATLARI } from "./cizim/proje-el-sanatlari";
import { PROJE_TEKNIK_EV } from "./cizim/proje-teknik-ev";

export const TUM_KATEGORI_CIZIM = { ...KATEGORI_CIZIM, ...KATEGORI_EK };
export const TUM_PROJE_CIZIM = { ...PROJE_CIZIM, ...PROJE_COCUK_DOGA, ...PROJE_EL_SANATLARI, ...PROJE_TEKNIK_EV };

const KALEM = "#2B2B2B";
export const KAGIT_RENGI = "#FBF8F1";

function CizimSvg({ veri, anahtar: ad, boyut }: { veri: CizimVeri; anahtar: string; boyut: number }) {
  // Her çizim örneğine benzersiz kimlik: aynı çizim iki ekranda aynı anda olsa da kırpma karışmasın
  const anahtar = ad + "-" + useId().replace(/[^a-zA-Z0-9]/g, "");
  const tara = (sira: number) =>
    veri.taramalar?.filter((t) => (t.sonra ?? -1) === sira).map((t) => (
      <G key={t.id} clipPath={`url(#${anahtar}-${t.id})`}>
        <Path d={taramaYollari(t.kutu, t.aralik ?? 4, t.ters)} stroke={KALEM} strokeWidth={0.7} opacity={0.45} />
      </G>
    ));

  return (
    <Svg width={boyut} height={boyut} viewBox="0 0 160 160">
      <Defs>
        {veri.taramalar?.map((t) => (
          <ClipPath key={t.id} id={`${anahtar}-${t.id}`}><Path d={t.sinir} /></ClipPath>
        ))}
      </Defs>

      {/* silik ikinci çizgi (kalem titremesi) */}
      <G transform="translate(0.9 0.7)" opacity={0.3}>
        {veri.cizgiler.map((s, i) => (
          <Path key={i} d={s.d} stroke={KALEM} strokeWidth={(s.w ?? 1.4) * 0.7} fill="none"
            strokeLinecap="round" strokeLinejoin="round" strokeDasharray={s.kesik ? "3 3" : undefined} />
        ))}
      </G>

      {tara(-1)}
      {veri.cizgiler.map((s, i) => (
        <G key={i}>
          <Path d={s.d} stroke={KALEM} strokeWidth={s.w ?? 1.4} opacity={0.88}
            fill={s.dolgu ? KAGIT_RENGI : "none"} strokeLinecap="round" strokeLinejoin="round"
            strokeDasharray={s.kesik ? "3 3" : undefined} />
          {tara(i)}
        </G>
      ))}

      {veri.noktalar?.map(([x, y, r], i) => <Circle key={i} cx={x} cy={y} r={r} fill={KALEM} opacity={0.8} />)}
    </Svg>
  );
}

export function KategoriCizim({ id, boyut = 140 }: { id: string; boyut?: number }) {
  const v = TUM_KATEGORI_CIZIM[id];
  return v ? <CizimSvg veri={v} anahtar={`k-${id}`} boyut={boyut} /> : null;
}

export function ProjeCizim({ id, boyut = 120 }: { id: string; boyut?: number }) {
  const v = TUM_PROJE_CIZIM[id];
  return v ? <CizimSvg veri={v} anahtar={`p-${id}`} boyut={boyut} /> : null;
}
