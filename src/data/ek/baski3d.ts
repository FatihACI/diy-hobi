import { Proje } from "../types";
import { kategoriProjesi } from "../yardimci";

const p = kategoriProjesi("baski3d");
const YAZICI =
  "Nozul 200 °C'nin, tabla 60 °C'nin üzerine çıkar; çalışırken dokunma ve yazıcıyı uzun süre gözetimsiz bırakma.";
const HAVA = "Baskı sırasında oda havalandırılmalı; ABS/ASA gibi filamentler belirgin buhar çıkarır.";
const PLA = ["PLA filament 1,75 mm", "1 makara"] as [string, string];
const YAZ = ["FDM 3D yazıcı", "1 adet", true] as [string, string, true];
const DILIM = ["Dilimleme yazılımı (Cura / PrusaSlicer, ücretsiz)", "—"] as [string, string];

// 3D Baskı: 17 ek proje (toplam 20)
export const BASKI3D_EK: Proje[] = [
  p(
    "kalibrasyon-kupu",
    "cube-outline",
    "Kalibrasyon Küpü ve Ölçü Kontrolü",
    "Kolay",
    "1 saat",
    "20 mm test küpüyle yazıcının ölçü doğruluğunu kontrol etme.",
    [YAZ, PLA, DILIM, ["Dijital kumpas", "1 adet", true]],
    [
      ["İndir", "Printables veya Thingiverse'ten 20 mm XYZ kalibrasyon küpünü indir."],
      ["Bas", "Varsayılan ayarlarla bas."],
      ["Ölç", "X, Y ve Z kenarlarını kumpasla ölç."],
      [
        "Düzelt",
        "0,3 mm'den büyük sapma varsa adım/mm (e-steps) veya ekstrüzyon çarpanını üretici kılavuzuna göre ayarla.",
      ],
    ],
    ["Tek boyutta sapma varsa kayış gerginliğini kontrol et."],
    [YAZICI],
  ),

  p(
    "tabla-seviyeleme",
    "ruler-square",
    "Tabla Seviyeleme (Kağıt Yöntemi)",
    "Kolay",
    "30 dk",
    "İlk katmanın düzgün yapışması için tablayı nozula göre ayarlama.",
    [YAZ, ["A4 kağıt", "1 adet"], ["Tabla seviyeleme test dosyası", "—"]],
    [
      ["Isıt", "Tablayı ve nozulu baskı sıcaklığına ısıt; metal genleştiği için soğuk ayar tutmaz."],
      ["Ana konum", "Yazıcıyı ana konuma getir, motorları serbest bırak."],
      ["Köşeler", "Nozulu her köşeye götür, kağıt hafif sürtünerek geçene kadar tabla vidasını çevir."],
      ["Test", "Tek katmanlı test baskısı yap; çizgiler hafif ezik ve birbirine değiyor olmalı."],
    ],
    ["Köşeleri iki tur dolaş; birini ayarlamak diğerini etkiler."],
    [YAZICI, "Nozul sıcakken kağıdı tutan parmaklarını uca yaklaştırma."],
  ),

  p(
    "kablo-klipsi",
    "cable-data",
    "Masa Kenarı Kablo Klipsi",
    "Kolay",
    "30 dk",
    "Masa kenarına geçen, kabloları tutan klips.",
    [YAZ, PLA, DILIM, ["Kumpas (masa kalınlığı)", "1 adet", true]],
    [
      ["Ölç", "Masa kalınlığını ölç."],
      ["Model", "Tinkercad'de masa kalınlığından 0,5 mm dar U parça ve üstüne kablo yuvaları çiz."],
      ["Bas", "%20 dolgu, 3 duvarla bas."],
      ["Tak", "Klipsi masaya geçirip kabloları yuvalara oturt."],
    ],
    ["Esneme gerekecek parçalarda PETG daha az kırılır."],
    [YAZICI],
  ),

  p(
    "duvar-anahtar-askisi",
    "key-variant",
    "Duvar Anahtar Askısı",
    "Kolay",
    "2 saat",
    "Ev şekilli, kancalı duvar anahtar askısı.",
    [YAZ, PLA, DILIM, ["Vida + dübel", "2 adet"]],
    [
      ["Model", "Ev silüeti, altına 4 kanca ve iki vida deliği tasarla (veya hazır model indir)."],
      ["Yönlendir", "Kancalar katmanlara dik değil, paralel gelecek şekilde yatay bas."],
      ["Bas", "%30 dolgu ile bas."],
      ["As", "Dübel ve vidayla duvara monte et."],
    ],
    ["Kancanın katman yönü dayanıklılığı belirler; yük katman çizgilerini ayırmamalı."],
    [YAZICI, "Duvarı delerken elektrik ve su tesisatı hattından uzak dur."],
  ),

  p(
    "kendi-sulayan-saksi",
    "sprout",
    "Kendi Kendini Sulayan Saksı",
    "Orta",
    "6 saat",
    "Alt haznesinden fitille su çeken iki parçalı saksı.",
    [YAZ, ["PETG filament", "1 makara"], DILIM, ["Pamuk fitil", "20 cm"]],
    [
      ["İndir", "Hazır kendi kendini sulayan saksı modelini indir."],
      ["Su geçirmezlik", "Hazne için 4 duvar ve %100 alt-üst katman kullan."],
      ["Bas", "İki parçayı ayrı bas."],
      ["Fitil", "Fitili iç saksının deliğinden geçirip haznede suya değecek şekilde yerleştir."],
    ],
    ["PETG su ve UV'ye PLA'dan daha dayanıklıdır."],
    [YAZICI],
  ),

  p(
    "filament-kurutma",
    "water-off-outline",
    "Nemli Filamenti Kurutma",
    "Kolay",
    "4–6 saat",
    "Çıtırdayan ve iplik yapan nemli filamenti kurutup saklama.",
    [
      ["Filament kurutma kutusu veya ayarlı gıda kurutucu", "1 adet", true],
      ["Silika jel", "1 paket"],
      ["Kilitli saklama kutusu", "1 adet"],
      ["Higrometre", "1 adet"],
    ],
    [
      ["Belirti", "Baskıda çıtırtı, kabarcık ve aşırı iplik varsa filament nemlidir."],
      ["Kurut", "PLA'yı 45 °C, PETG'yi 65 °C'de 4–6 saat kurut."],
      ["Sakla", "Silika jelli kilitli kutuda sakla."],
      ["İzle", "Kutudaki nemi %20'nin altında tut."],
    ],
    ["Ev fırınında kurutma: termostat hassas değilse PLA yumuşayıp makaraya yapışabilir; önerilmez."],
    ["Kurutucuyu yanıcı eşyalardan uzak yerleştir."],
  ),

  p(
    "dis-macunu-sikacagi",
    "tooth-outline",
    "Diş Macunu Sıkacağı",
    "Kolay",
    "30 dk",
    "Tüpü sonuna kadar kullanmayı sağlayan yarıklı sıkacak.",
    [YAZ, PLA, DILIM],
    [
      ["İndir", "Hazır modeli indir veya 6 cm × 2 cm bloğa 2 mm genişlikte yarık çiz."],
      ["Bas", "Yarık tabla üzerinde dikey kalacak şekilde bas."],
      ["Temizle", "Yarıktaki ince iplikleri kes."],
      ["Kullan", "Tüpün ucunu yarığa geçirip yukarı kaydır."],
    ],
    ["Yarığı 0,2 mm daha geniş tasarlarsan tüp kolay kayar."],
    [YAZICI],
  ),

  p(
    "kurabiye-kalibi-3d",
    "cookie-outline",
    "Özel Kurabiye Kalıbı",
    "Orta",
    "1 saat",
    "Kendi çizdiğin şekilden kurabiye kesme kalıbı.",
    [YAZ, ["Gıdaya uygun PLA veya PETG", "1 makara"], DILIM, ["Streç film", "1 rulo"]],
    [
      ["Şekil", "Şeklini SVG olarak çiz veya hazır kalıp oluşturucu sitesine yükle."],
      ["Model", "Duvarı 1,2 mm, keskin kenarı 0,4 mm olacak şekilde oluştur."],
      ["Bas", "Keskin kenar yukarıda kalacak şekilde bas."],
      ["Kullan", "Hamuru streç filmle örtüp kalıbı filmin üstünden bastır."],
    ],
    ["Streç film hem gıda temasını azaltır hem de hamurun yapışmasını önler."],
    [
      "3D baskı katman aralıklarında bakteri birikebilir; kalıbı uzun süreli temas için değil, kısa kesim için kullan ve bulaşık makinesine koyma.",
      YAZICI,
    ],
  ),

  p(
    "cekmece-bolme",
    "view-grid-outline",
    "Çekmece Düzenleyici Bölmeler",
    "Kolay",
    "3–5 saat",
    "Çekmece ölçüsüne göre birbirine kilitlenen modüler kutular (Gridfinity).",
    [YAZ, PLA, DILIM, ["Mezura", "1 adet", true]],
    [
      ["Ölç", "Çekmecenin iç ölçülerini al."],
      ["Planla", "42 mm ızgara sistemine göre kaç modül sığacağını hesapla."],
      ["Bas", "Taban plakası ve ihtiyacına göre kutuları bas."],
      ["Yerleştir", "Kutuları tabana oturt, gerektikçe yer değiştir."],
    ],
    ["Gridfinity açık kaynaklı bir sistemdir; binlerce hazır modül bulunur."],
    [YAZICI],
  ),

  p(
    "renkli-anahtarlik-3d",
    "palette-swatch-outline",
    "Çift Renkli İsim Anahtarlığı",
    "Orta",
    "1 saat",
    "Belirli katmanda filament değiştirerek iki renkli baskı.",
    [YAZ, ["PLA filament (2 renk)", "2 makara"], DILIM],
    [
      ["Model", "Tinkercad'de 3 mm taban ve üstüne 1,5 mm yükseltilmiş isim yaz."],
      ["Duraklat", "Dilimleyicide yazının başladığı katmana 'filament değişimi' (M600) veya duraklatma ekle."],
      ["Değiştir", "Yazıcı durunca filamenti çıkar, yeni rengi tak ve rengi temizlenene kadar akıt."],
      ["Devam", "Baskıyı devam ettir."],
    ],
    ["Yazıcın M600 desteklemiyorsa 'pause' komutu kullan."],
    [YAZICI],
  ),

  p(
    "vidali-kapakli-kutu",
    "package-variant",
    "Vidalı Kapaklı Küçük Kutu",
    "Orta",
    "3 saat",
    "Dişli kapakla kapanan yuvarlak saklama kutusu.",
    [YAZ, PLA, DILIM],
    [
      ["Model", "Fusion 360 'Thread' aracıyla veya hazır dişli kutu modeliyle başla."],
      ["Tolerans", "Dişler arasında 0,3–0,4 mm boşluk bırak."],
      ["Bas", "Gövdeyi ve kapağı 0,16 mm katmanla bas."],
      ["Dene", "Sıkıyorsa kapağın dişlerine ince zımpara uygula."],
    ],
    ["İnce katman yüksekliği dişleri daha düzgün yapar."],
    [YAZICI],
  ),

  p(
    "tpu-telefon-kilifi",
    "cellphone",
    "Esnek TPU Telefon Kılıfı",
    "Zor",
    "3 saat",
    "Esnek filamentle telefon modeline özel kılıf basma.",
    [YAZ, ["TPU 95A filament", "1 makara"], DILIM],
    [
      ["Model", "Telefon modeline özel kılıf modelini indir."],
      ["Hız", "Baskı hızını 20–25 mm/s'ye düşür, geri çekmeyi (retraction) azalt veya kapat."],
      ["Bas", "Kılıfı ekranı yukarı bakacak şekilde bas."],
      ["Dene", "Telefonu yerleştirip tuş boşluklarını kontrol et."],
    ],
    ["Direkt ekstrüderli yazıcılar TPU'yu çok daha kolay basar."],
    [YAZICI],
  ),

  p(
    "nozul-degisimi",
    "wrench-outline",
    "Nozul Değiştirme ve Tıkanıklık Açma",
    "Orta",
    "30 dk",
    "Tıkanan nozulu sıcak değişimle güvenli şekilde değiştirme.",
    [
      ["Yedek nozul (0,4 mm)", "1 adet"],
      ["Nozul anahtarı / 7 mm lokma", "1 adet", true],
      ["Penseli ısıya dayanıklı eldiven", "1 adet", true],
      ["Akupunktur iğnesi (temizleme)", "1 adet", true],
    ],
    [
      ["Isıt", "Nozulu 230 °C'ye ısıt, filamenti çıkar."],
      ["Sabitle", "Isıtma bloğunu penseyle tut ki tel kopmasın."],
      ["Sök", "Sıcakken nozulu sök, yenisini elle tak ve sıcakken çeyrek tur sık."],
      ["Test", "Filament takıp ekstrüzyon testi yap."],
    ],
    ["Nozulu asla soğukken sökme; boğaz borusu kırılabilir veya sızıntı olur."],
    ["Isıtma bloğu ve nozul çok sıcaktır; ısıya dayanıklı eldiven kullan.", "İşlemi yazıcının kılavuzuna göre yap."],
  ),

  p(
    "litofan-lamba",
    "lamp",
    "Fotoğraflı Litofan Lamba",
    "Orta",
    "8 saat",
    "Arkadan ışık gelince fotoğraf görünen ince panel lamba.",
    [YAZ, ["Beyaz PLA", "1 makara"], DILIM, ["Pilli LED çay mumu veya LED şerit", "1 adet"]],
    [
      ["Dönüştür", "Fotoğrafını ücretsiz bir litofan oluşturucuya yükleyip STL al."],
      ["Ayar", "Dolguyu %100 yap, katman yüksekliğini 0,12 mm seç."],
      ["Bas", "Paneli dik olarak bas."],
      ["Işık", "Arkasına LED yerleştir."],
    ],
    ["Yüksek kontrastlı, yakın çekim portreler en iyi sonucu verir."],
    [YAZICI, "Isınan akkor ampul kullanma; sadece LED kullan."],
  ),

  p(
    "eklemli-ejderha",
    "google-downasaur",
    "Eklemli Esnek Ejderha (Yerinde Baskı)",
    "Kolay",
    "4 saat",
    "Destek gerektirmeden tek parça basılan oynar eklemli oyuncak.",
    [YAZ, ["İpek (silk) PLA", "1 makara"], DILIM],
    [
      ["İndir", "'Print-in-place' eklemli ejderha modelini indir."],
      ["İlk katman", "Tablayı iyice seviyele; eklemler ilk katmanda birbirine yapışmamalı."],
      ["Bas", "Destek kullanmadan bas."],
      ["Çöz", "Baskı bitince eklemleri nazikçe bükerek serbest bırak."],
    ],
    ["Fil ayağı (ilk katman taşması) eklemleri kilitler; ilk katman genişliğini azalt."],
    ["Küçük parçalı oyuncakları 3 yaş altı çocuklara verme.", YAZICI],
  ),

  p(
    "kulaklik-askisi",
    "headphones",
    "Masa Altı Kulaklık Askısı",
    "Kolay",
    "2 saat",
    "Masa altına vidalanan veya yapıştırılan kulaklık kancası.",
    [YAZ, ["PETG filament", "1 makara"], DILIM, ["Ahşap vidası veya güçlü çift taraflı bant", "2 adet"]],
    [
      ["Model", "Kanca ve montaj plakası olan askıyı indir."],
      ["Yönlendir", "Kancayı katman çizgileri yükü taşıyacak şekilde yan yatırarak bas."],
      ["Bas", "%40 dolgu, 4 duvarla bas."],
      ["Monte et", "Masa altına vidala."],
    ],
    ["Duvar sayısı dolgudan daha fazla dayanım katar."],
    [YAZICI],
  ),

  p(
    "baski-hata-cozumu",
    "alert-circle-outline",
    "3D Baskı Hata Rehberi",
    "Kolay",
    "1 saat",
    "İplik yapma, köşe kalkması ve katman kaymasının çözümleri.",
    [
      YAZ,
      ["Tabla yapıştırıcısı (glue stick)", "1 adet"],
      ["İzopropil alkol + bez", "1 set"],
      ["Test modeli (stringing test)", "—"],
    ],
    [
      ["İplik (stringing)", "Sıcaklığı 5 °C düşür, geri çekme mesafesini 0,5 mm artırarak test et."],
      ["Köşe kalkması (warping)", "Tablayı alkolle temizle, kenar (brim) ekle, ortam cereyanını kes."],
      ["Katman kayması", "Kayış gerginliğini ve kasnak vidalarını kontrol et, hızı düşür."],
      ["Eksik ekstrüzyon", "Filamenti kurut, nozul tıkanıklığını kontrol et."],
    ],
    ["Her seferinde tek ayarı değiştir; neyin işe yaradığını görürsün."],
    [YAZICI, HAVA],
  ),
];
