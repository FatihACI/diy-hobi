// Bir adımın metnine bakarak hangi piktogramın gösterileceğini seçer.
// Önce adım başlığına, bulunamazsa açıklamasına bakılır. Hiçbiri uymazsa null döner
// (ekranda projenin kendi çizimi gösterilir).
import type { Proje } from "../../data/types";
import type { PiktogramAdi } from "./piktogram";

type Kural = { ad: PiktogramAdi | "kes"; re: RegExp; kategoriler?: string[]; haric?: string[] };
// JavaScript'te \b yalnızca İngilizce harfleri tanır ("reflektör" içinde "ör" kelime sanılır).
// Bu yüzden \b'yi Türkçe harfleri de kapsayan harf sınırına çeviriyoruz.
// Bu yüzden \\b'yi Türkçe harfleri de kapsayan harf sınırına çeviriyoruz.
const r = (re: RegExp) =>
  new RegExp(re.source.replace(/\\b(?=[\p{L}(])/gu, "(?<!\\p{L})").replace(/(?<=[\p{L})])\\b/gu, "(?!\\p{L})"), "u");

// Sıra önemlidir: özel olan genelden önce gelir.
const HAM: Kural[] = [
  { ad: "lehim", re: /lehim(?!siz)|havya/ },
  { ad: "yakma", re: /pirografi|yakarak|\byak\b|yakma|dağla|gölgelendir/, kategoriler: ["pirografi", "deri"] },
  {
    ad: "yazici3d",
    re: /baskı|\bbas\b|yazıcı|filament|nozul|tabla|dilimle|slicer|kalibr|katman yüksek/,
    kategoriler: ["baski3d"],
  },
  {
    ad: "bilgisayar",
    re: /\bkod|yükle|\bide\b|tinkercad|modelle|uygulama|bluetooth|seri monitör|program|stl|indir|\bmodel/,
  },
  { ad: "pil", re: /\bpil\b|piller|şarj|lipo|batarya/ },
  { ad: "kumanda", re: /uçur|kumanda|\bsür\b|sürüş|uçuş|trim|yüzdür/ },
  {
    ad: "devre",
    re: /breadboard|\bled|direnç|sensör|buzzer|devre|kablo|motor|servo|röle|jumper|arduino|buton|ekran|lcd|esc\b|alıcı/,
  },
  {
    ad: "akvaryum",
    re: /akvaryum|su değiş|şartlandır|sifon|döngü|balıkları|karides|ısıtıcı|filtre/,
    kategoriler: ["akvaryum"],
  },
  {
    ad: "olta",
    re: /olta|misina|yem|\bat\b|atış|kamış|makara|şamandıra|kurşun|iğne|balık|düğüm|fırdöndü/,
    kategoriler: ["balikcilik"],
  },
  { ad: "dok", re: /\bdök|döküm|kalıba|kalıp|doldur|akıt/ },
  { ad: "karistir", re: /karıştır|harmanla|çırp|hazırla.*karışım/ },
  { ad: "erit", re: /erit|benmari|ısıt|kaynat|ocak/ },
  { ad: "firin", re: /fırın|pişir/ },
  { ad: "tart", re: /\btart|terazi(?!si)/ },
  { ad: "damla", re: /esans|damla|\bkoku|pigment|renklendir/ },
  { ad: "vernik", re: /vernik|cila|yağ sür|ahşap yağı|\bkapla|sprey|mühürle|astar/ },
  { ad: "firca", re: /\bboya|fırça|\brenk/ },
  { ad: "zimpara", re: /zımpara|törpü|pürüzsüz|düzle|parlat|incelt|kazı/ },
  { ad: "matkap", re: /\bdel|delik|matkap|pilot/ },
  { ad: "budama", re: /budama|\bbuda|dalları/, kategoriler: ["bahce"] },
  { ad: "kes", re: /\bkes|kesim|kesip|kırp|\boy\b|oyarak/ },
  { ad: "olcu", re: /ölç|işaretle|metre|cetvel|hizala|su terazi|merkez/ },
  { ad: "sablon", re: /şablon|aktar|desen|deseni/ },
  { ad: "kalem", re: /\bçiz|eskiz|planla|tasarla|tasarım/ },
  { ad: "anahtar", re: /somun|cıvata|anahtar|alyan|tork|gevşet/ },
  { ad: "tornavida", re: /vidala|\bvida|tornavida|menteşe/ },
  { ad: "sikistir", re: /işkence|mengene|sıkıştır|bastır|presle|sabitle|ağırlık koy/ },
  { ad: "tutkal", re: /yapıştır|tutkal|silikon|bantla|zamk/ },
  { ad: "yag", re: /yağla|gres|zincir/, kategoriler: ["bisiklet", "ev-tamir", "rc"] },
  { ad: "pompa", re: /şişir|pompa|basınç|lastik/ },
  { ad: "sok", re: /\bsök|çıkar|eskisini|boşalt/ },
  {
    ad: "saksi",
    haric: ["makrome", "taki", "deri", "mum-sabun"],
    re: /toprak|saksı|fide|tohum|\bek\b|dikim|köklen|çelik|soğan|drenaj|kompost|yosun|bitki|\bdik\b/,
  },
  { ad: "orgu", re: /\bör\b|örgü|örerek|tığ|ilmek|\bşiş\b/ },
  { ad: "igne", re: /dikiş|\bdik\b|iğne|iplik|teyel/ },
  { ad: "dugum", re: /düğüm|\bbağla|makrome|\bip\b|ipleri|ipi|halat/ },
  { ad: "pense", re: /boncuk|\btel\b|teli|halka|pense|kolye|küpe|zincir/ },
  { ad: "sar", re: /\bsar\b|sarıl|sarma|sararak|\bdola/ },
  { ad: "sula", re: /\bsula|su ver|nemlendir|püskürt|ıslat/ },
  { ad: "hasat", re: /hasat|\btopla|kopar/ },
  { ad: "temizle", re: /temizle|yıka|\bsil\b|durula|fırçala/ },
  { ad: "yogur", re: /yoğur|merdane|hamur|\bkil|şekil ver|şekillendir/ },
  { ad: "katla", re: /katla|kıvır|origami/ },
  { ad: "as", re: /\bas\b|asma|duvara|kanca|monte|\braf/ },
  {
    ad: "vida_tak",
    re: /\btak\b|tak\.|yerleştir|geçir|\bekle\b|birleştir|montaj|kapat|kapağı|\bkoy|\bser\b|katman|çak/,
  },
  { ad: "kontrol", re: /test|kontrol|dene|ayarla|kalibre|gözlemle|ayar|\boku\b|teşhis|doğrula|izle|tanı/ },
  { ad: "saat", re: /kurut|bekle|\bkür|dinlendir|\bgün\b|saat|sertleş|olgunlaş|beklet/ },
  { ad: "hazirla", re: /hazırla|planla|\bseç|düzenle|\bayır|bitir|kur\b|kurulum/ },
];
const KURALLAR: Kural[] = HAM.map((k) => ({ ...k, re: r(k.re) }));

const kucuk = (s: string) => s.toLocaleLowerCase("tr");

function kesTuru(p: Proje, metin: string): PiktogramAdi {
  if (p.kategoriId === "bahce" && /dal|filiz|sap|gövde|budama/.test(metin)) return "budama";
  if (/maket bıçağı|karton|köpük|depron|xps|kretuar|bıçak/.test(metin)) return "bicak";
  if (/testere|kontrplak|ahşap|tahta|çıta|kereste|dekupaj|boru|pvc|mdf/.test(metin)) return "testere";
  return "makas";
}

function eslestir(p: Proje, metin: string, tumMetin: string): PiktogramAdi | null {
  for (const k of KURALLAR) {
    if (k.kategoriler && !k.kategoriler.includes(p.kategoriId)) continue;
    if (k.haric?.includes(p.kategoriId)) continue;
    if (k.re.test(metin)) return k.ad === "kes" ? kesTuru(p, tumMetin) : k.ad;
  }
  return null;
}

export function adimPiktogrami(p: Proje, i: number): PiktogramAdi | null {
  const a = p.adimlar[i];
  if (!a) return null;
  const baslik = kucuk(a.baslik);
  const aciklama = kucuk(a.aciklama);
  const tum = `${baslik} ${aciklama} ${kucuk(p.malzemeler.map((m) => m.ad).join(" "))}`;
  return eslestir(p, baslik, tum) ?? eslestir(p, aciklama, tum);
}
