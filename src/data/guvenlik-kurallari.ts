import { Proje } from "./types";

// Güvenlik notu tamamlayıcı.
// Projede riskli bir malzeme/işlem varsa ve projenin kendi güvenlik notlarında
// bu konu hiç geçmiyorsa, standart bir uyarı eklenir. Böylece yeni eklenen
// projeler de otomatik olarak temel uyarıları alır.
//
// tetik: malzeme adları + adım metinleri + proje adında aranır
// var:   projenin mevcut güvenlik notlarında bu ifade geçiyorsa not eklenmez

export type GuvenlikKurali = {
  ad: string;
  tetik: RegExp;
  var: RegExp;
  not: string;
  sadeceCocuk?: boolean; // yalnızca yaş bilgisi olan (çocuklara yönelik) projelerde
  kategoriler?: string[]; // yalnızca bu kategorilerde uygula
};

export const GUVENLIK_KURALLARI: GuvenlikKurali[] = [
  {
    ad: "kostik-sira",
    tetik: /kostik|sodyum hidroksit/,
    var: /suya ekle|suyu asla/,
    not: "Kostiği daima suya ekle, suyu asla kostiğe dökme. Karışım hızla ısınır ve yakıcı buhar çıkarır; açık pencere önünde çalış ve buharı soluma.",
  },
  {
    ad: "lipo",
    tetik: /lipo\b|lipo pil|li-po/,
    var: /gözetimsiz/,
    not: "LiPo pili dengeli (balance) şarj cihazıyla, yanmaz şarj çantasında ve asla gözetimsiz şarj etme. Şişmiş veya darbe almış pili kullanma.",
  },
  {
    ad: "dugme-pil",
    tetik: /düğme pil|cr2032|cr2025|lr44/,
    var: /yut/,
    not: "Düğme piller yutulursa birkaç saat içinde ciddi iç yanık yapar; çocuklardan uzak tut, yutulursa hemen acile git.",
  },
  {
    ad: "miknatis",
    tetik: /neodyum|güçlü mıknatıs/,
    var: /yut/,
    not: "Küçük güçlü mıknatıslar yutulursa bağırsakta birbirini çekerek hayati tehlike yaratır; küçük çocuklardan uzak tut.",
  },
  {
    ad: "recine-eldiven",
    tetik: /epoksi|uv reçine|döküm reçine|reçine seti/,
    var: /eldiven/,
    not: "Reçine ve sertleştiriciye çıplak elle dokunma; nitril eldiven kullan. Tekrarlanan temas kalıcı alerji yapabilir.",
  },
  {
    ad: "recine-hava",
    tetik: /epoksi|uv reçine|döküm reçine|reçine seti/,
    var: /havaland/,
    not: "Reçineyle havalandırılmış ortamda çalış; kürlenen reçinenin yakınında uyuma ve yemek yeme.",
  },
  {
    ad: "havya",
    tetik: /havya|lehim(?!siz)/,
    var: /havya|lehim/,
    not: "Havya ucu 300 °C'nin üzerindedir; kullanmadığında standında bırak. Lehim dumanını soluma, ortamı havalandır ve işten sonra ellerini yıka.",
  },
  {
    ad: "sicak-silikon",
    tetik: /sıcak silikon|silikon tabancası|mum silikon/,
    var: /silikon|yan[ıa]/,
    not: "Sıcak silikon ve tabanca ucu cildi yakar; tabancayı ayağı üzerinde bırak, çocuklar yetişkin gözetiminde kullanmalı.",
  },
  {
    ad: "3d-yazici",
    tetik: /3d yazıcı|fdm/,
    var: /nozul|gözetimsiz|sıcak/,
    not: "Nozul ve tabla çok sıcaktır; baskı sırasında dokunma ve yazıcıyı uzun süre gözetimsiz çalıştırma.",
  },
  {
    ad: "polimer-kil",
    tetik: /polimer kil|fimo/,
    var: /havaland|yiyecek|gıda/,
    not: "Polimer kili üreticinin önerdiği sıcaklıkta pişir; aşırı ısınırsa zararlı duman çıkar. Ortamı havalandır ve kil için kullandığın kapları yiyecek için kullanma.",
  },
  {
    ad: "mum-eritme",
    tetik: /parafin|soya mumu|bal mumu|balmumu|mum pastil|mum granül|jel mum/,
    var: /benmari|doğrudan ateş|su dökme/,
    not: "Mumu benmari usulü erit, doğrudan ateşte ısıtma. Mum tutuşursa üzerine su dökme; kabın kapağını kapatıp ocağı kapat.",
  },
  {
    ad: "yanan-mum",
    tetik: /fitil/,
    kategoriler: ["mum-sabun"],
    var: /gözetimsiz/,
    not: "Yanan mumu gözetimsiz bırakma; perde, kağıt gibi yanıcı eşyalardan, çocuklardan ve evcil hayvanlardan uzak tut.",
  },
  {
    ad: "kesici-alet",
    tetik: /dekupaj|daire testere|taşlama|dremel|gravür|freze|matkap/,
    var: /gözlük/,
    not: "Kesme, delme ve taşlama sırasında koruyucu gözlük tak; parçayı elle değil mengene veya işkenceyle sabitle.",
  },
  {
    ad: "maket-bicagi-cocuk",
    tetik: /maket bıçağı|kretuar/,
    var: /yetişkin/,
    not: "Maket bıçağıyla kesimi yetişkin yapmalı; bıçağı her zaman kendinden uzağa doğru çek.",
    sadeceCocuk: true,
  },
  {
    ad: "kursun",
    tetik: /kurşun(?!suz| ?kalem| iz)/,
    var: /kurşun/,
    not: "Kurşun ağırlıklarla çalıştıktan sonra ellerini yıka; kurşunu küçük çocuklardan uzak tut ve ağza alma.",
  },
  {
    ad: "solvent",
    tetik: /izopropil|aseton|tiner|alkol sprey|\bipa\b/,
    var: /yanıcı|ateş|alev/,
    not: "Alkol ve solventler kolay tutuşur; ateşten uzak, havalandırılmış ortamda kullan.",
  },
  {
    ad: "japon-yapistirici",
    tetik: /japon yapıştırıcı|siyanoakrilat|\(ca\)|ca yapıştırıcı|süper yapıştırıcı/,
    var: /cil|göz/,
    not: "Japon (CA) yapıştırıcı cildi ve gözü saniyeler içinde yapıştırır; gözlük tak, cildine yapışırsa çekme, ılık sabunlu suda beklet.",
  },
  {
    ad: "kontak",
    tetik: /kontak yapıştırıcı|kontak yapıştır/,
    var: /havaland/,
    not: "Kontak yapıştırıcının buharı yanıcı ve zararlıdır; havalandırılmış ortamda, ateşten uzakta kullan.",
  },
  {
    ad: "camasir-suyu",
    tetik: /çamaşır suyu|hipoklorit/,
    var: /karıştır/,
    not: "Çamaşır suyunu asla amonyak veya asit içeren (sirke, kireç sökücü) ürünlerle karıştırma; zehirli gaz oluşur.",
  },
  {
    ad: "pervane",
    tetik: /pervane/,
    var: /pervane/,
    not: "Pil takılıyken pervane her an dönebilir; ayar ve bakım yaparken önce pili çıkar, ellerini pervaneden uzak tut.",
  },
  {
    ad: "akvaryum-elektrik",
    tetik: /ısıtıcı|pompa|filtre/,
    kategoriler: ["akvaryum", "terraryum"],
    var: /fiş/,
    not: 'Suya el sokmadan önce ısıtıcı, filtre ve ışığın fişini çek; kabloya prizden önce aşağı sarkan bir "damla halkası" bırak.',
  },
  {
    ad: "cimento",
    tetik: /çimento|harç|ince beton|derz dolgu/,
    var: /eldiven/,
    not: "Çimento içeren harçlar cildi yakar; eldiven tak, göze kaçarsa bol suyla yıka.",
  },
];

// Kurallar dışında, tek tek incelenip eklenen notlar (proje id → ek notlar)
export const EK_GUVENLIK_NOTLARI: Record<string, string[]> = {
  "kuf-temizligi": ["Ortamı iyi havalandır; temizlik sırasında kapıyı ve pencereyi açık tut."],
  "epoksi-kase": ["Bu kase takı ve süs içindir; yiyecek koymak için kullanma."],
  "dudak-balsami": ["Sıcak yağ ve mum ciddi yanık yapar; tencere sapını ocağın dışına taşırma, çocukları uzak tut."],
  "oda-kokusu": ["Esans ve baz yağlar yanıcıdır; şişeyi mum, soba ve ocaktan uzak tut."],
  "rc-yelkenli": ["Salmadaki kurşunu boyayarak veya kaplayarak kapat; kurşuna dokunduktan sonra ellerini yıka."],
  "gliserin-sabun": ["Sabun bazını mikrodalgada kısa aralıklarla (20–30 sn) karıştırarak erit; kaynatma."],
  "kalipli-sabun-hediye": ["Sabun bazını mikrodalgada kısa aralıklarla (20–30 sn) karıştırarak erit; kaynatma."],
};

const kucuk = (s: string) => s.toLocaleLowerCase("tr");

export function guvenlikTamamla(p: Proje): Proje {
  const metin = kucuk(
    [p.ad, ...p.malzemeler.map((m) => m.ad), ...p.adimlar.map((a) => `${a.baslik} ${a.aciklama}`)].join(" \n "),
  );
  const notlar = [...p.guvenlik];
  const mevcut = () => kucuk(notlar.join(" "));
  for (const k of GUVENLIK_KURALLARI) {
    if (k.sadeceCocuk && !p.yas) continue;
    if (k.kategoriler && !k.kategoriler.includes(p.kategoriId)) continue;
    if (k.tetik.test(metin) && !k.var.test(mevcut())) notlar.push(k.not);
  }
  for (const n of EK_GUVENLIK_NOTLARI[p.id] ?? []) if (!notlar.includes(n)) notlar.push(n);
  return notlar.length === p.guvenlik.length ? p : { ...p, guvenlik: notlar };
}
