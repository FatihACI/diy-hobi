import { Proje } from "./types";
import { a, m } from "./yardimci";

// 3D Baskı, Bisiklet Bakımı, Ev Tamiratı
export const TEKNIK_EV: Proje[] = [
  // ───────────────────────── 3D BASKI ─────────────────────────
  {
    id: "ilk-baski", kategoriId: "baski3d", ikon: "printer-3d-nozzle",
    ad: "Tabla Seviyeleme ve İlk Baskı", zorluk: "Kolay", sure: "1,5 saat",
    ozet: "Yeni bir FDM yazıcıyı ayarlayıp 20 mm kalibrasyon küpü basma.",
    malzemeler: [
      m("kb1", "FDM 3D yazıcı", "1 adet", true),
      m("kb2", "PLA filament 1,75 mm", "1 kg"),
      m("kb3", "A4 kağıt (seviyeleme için)", "1 yaprak"),
      m("kb4", "İzopropil alkol + mikrofiber bez", "1 set"),
      m("kb5", "Dijital kumpas", "1 adet", true),
      m("kb6", "Spatula", "1 adet", true),
    ],
    adimlar: [
      a("Kur ve kontrol et", "Yazıcıyı talimatına göre kur; kayışların gergin, vidaların sıkı olduğundan emin ol."),
      a("Filamenti yükle", "Nozülü PLA için 200–210 °C'ye ısıt, filamenti ucu düz kesilmiş olarak ekstrüdere it, nozülden akana kadar besle."),
      a("Tablayı temizle", "Tablayı izopropil alkolle sil; parmak yağı yapışmayı bozar."),
      a("Seviyele", "Nozülü her köşeye götür, altına kağıt koy; kağıt hafif sürtünmeyle kayacak şekilde tabla vidalarını ayarla. 2 tur tekrarla."),
      a("Dilimle", "Ücretsiz bir dilimleyicide (Cura, PrusaSlicer, OrcaSlicer) kendi yazıcı profilini seç, '20mm kalibrasyon küpü' modelini 0,2 mm katmanla dilimle."),
      a("Bas ve ölç", "İlk katmanı izle: çizgiler hafif ezilmiş ve birbirine yapışık olmalı. Bitince küpü kumpasla ölç; 19,9–20,1 mm iyi sonuçtur."),
    ],
    ipuclari: [
      "İlk katman yapışmıyorsa tabla sıcaklığını (PLA için 60 °C) ve seviyelemeyi kontrol et.",
      "İlk katman çizgileri arasında boşluk varsa nozül çok yüksek, şeffaf ve dalgalıysa çok alçaktır.",
    ],
    guvenlik: [
      "Nozül 200 °C'nin üzerindedir; çalışırken dokunma.",
      "Yazıcıyı uzun süre gözetimsiz çalıştırma ve yanıcı malzemelerden uzak tut.",
      "Havalandırılan bir odada kullan.",
    ],
  },
  {
    id: "telefon-standi", kategoriId: "baski3d", ikon: "cellphone-cog",
    ad: "Telefon Standı Basma", zorluk: "Kolay", sure: "3–4 saat (baskı dahil)",
    ozet: "Hazır bir modeli indirip doğru ayarlarla basma.",
    malzemeler: [
      m("tf1", "FDM 3D yazıcı (kalibre)", "1 adet", true),
      m("tf2", "PLA veya PETG filament", "50 g"),
      m("tf3", "Kaymaz keçe ayak", "4 adet"),
      m("tf4", "Zımpara 220", "1 adet"),
    ],
    adimlar: [
      a("Model bul", "Printables veya Thingiverse'te 'phone stand' ara; lisansın kişisel kullanıma izin verdiğini kontrol et."),
      a("Dilimle", "0,2 mm katman, %15 doluluk, 3 duvar ayarı kullan; desteğe gerek yoksa kapat."),
      a("Yerleştir", "Modeli en geniş yüzü tablaya gelecek şekilde döndür; destek ihtiyacı azalır."),
      a("Bas", "İlk katmanı izle, sonra bitmesini bekle."),
      a("Bitir", "Tabla soğuyunca çıkar, çapakları zımparala, altına keçe ayak yapıştır."),
    ],
    ipuclari: ["Tabla soğuyunca PLA parçalar genelde kendiliğinden ayrılır; zorlarsan tabla yüzeyi zarar görebilir."],
    guvenlik: ["Spatulayı her zaman kendinden uzağa doğru it."],
  },
  {
    id: "tinkercad-kutu", kategoriId: "baski3d", ikon: "cube-outline",
    ad: "Kendi Ölçünde Kapaklı Kutu Tasarlama", zorluk: "Orta", sure: "2 saat + baskı",
    ozet: "Ücretsiz Tinkercad ile ölçülü, kapağı oturan saklama kutusu.",
    malzemeler: [
      m("tc1", "Bilgisayar + ücretsiz Tinkercad hesabı", "—", true),
      m("tc2", "FDM 3D yazıcı", "1 adet", true),
      m("tc3", "PLA filament", "80 g"),
      m("tc4", "Dijital kumpas", "1 adet", true),
    ],
    adimlar: [
      a("Ölç", "Kutuya koyacağın eşyayı kumpasla ölç; her yöne 2 mm boşluk ekle."),
      a("Dış kutu", "Tinkercad'de bir kutu ekle, ölçülerini gir; içine 2 mm duvar kalacak şekilde 'delik' kutu ekle ve gruplayarak oy."),
      a("Kapak", "Dış ölçüde 2 mm kalın bir plaka yap; altına iç ölçüden 0,3 mm küçük bir dudak ekle."),
      a("Dışa aktar", "Kutu ve kapağı ayrı ayrı STL olarak dışa aktar."),
      a("Bas ve dene", "Önce küçük bir köşe parçası basıp toleransı test et, sonra tamamını bas."),
    ],
    ipuclari: ["Geçme parçalarda 0,2–0,3 mm tolerans çoğu yazıcıda iyi oturur; sıkıysa artır."],
    guvenlik: ["Baskı sırasında yazıcının hareketli parçalarına elini sokma."],
  },

  // ───────────────────────── BİSİKLET ─────────────────────────
  {
    id: "ic-lastik", kategoriId: "bisiklet", ikon: "tire",
    ad: "Patlak İç Lastik Tamiri ve Değişimi", zorluk: "Kolay", sure: "30–45 dk",
    ozet: "Lastiği söküp deliği bulma, yamalama veya yenisini takma.",
    malzemeler: [
      m("il1", "Lastik sökme levyesi", "2–3 adet", true),
      m("il2", "Yama seti (yapıştırıcı + yama + zımpara)", "1 set"),
      m("il3", "Yedek iç lastik (lastik ölçüsüne uygun)", "1 adet"),
      m("il4", "Pompa (manometreli)", "1 adet", true),
      m("il5", "Su dolu kap", "1 adet"),
    ],
    adimlar: [
      a("Tekerleği sök", "Freni gevşet (V-frende kabloyu çıkar), çabuk sökme veya somunları açıp tekerleği çıkar."),
      a("Lastiği çıkar", "Havayı tamamen indir, levyeyi lastik ile jant arasına sokup bir tarafı jant dışına çıkar, iç lastiği çek."),
      a("Deliği bul", "İç lastiği biraz şişirip suya batır; kabarcık çıkan yer deliktir. İşaretle."),
      a("Dış lastiği kontrol et", "Lastiğin içini parmağınla dikkatlice yoklayarak çivi, cam gibi batan şeyi bul ve çıkar."),
      a("Yamala", "Deliğin çevresini zımparala, yapıştırıcı sür, 3–5 dk beklet, yamayı sıkıca bastır."),
      a("Tak ve şişir", "İç lastiği hafif şişirip lastiğin içine yerleştir, lastiği elle jante geçir; lastik yanındaki basınçta şişir."),
    ],
    ipuclari: [
      "Lastiği takarken levye kullanmamaya çalış; iç lastiği sıkıştırıp yeniden patlatabilir.",
      "Doğru basınç lastiğin yanağında yazar (bar veya PSI).",
    ],
    guvenlik: [
      "Lastik yanağında yazan maksimum basıncı aşma.",
      "Tekerleği taktıktan sonra frenlerin çalıştığını mutlaka kontrol et.",
    ],
  },
  {
    id: "zincir-bakim", kategoriId: "bisiklet", ikon: "link-variant",
    ad: "Zincir Temizleme ve Yağlama", zorluk: "Kolay", sure: "30 dk",
    ozet: "Sessiz ve uzun ömürlü vites için zincir bakımı.",
    malzemeler: [
      m("zb1", "Zincir temizleyici (degreaser)", "1 adet"),
      m("zb2", "Zincir temizleme fırçası", "1 adet", true),
      m("zb3", "Bisiklet zincir yağı (kuru veya ıslak tip)", "1 adet"),
      m("zb4", "Temiz bez", "2 adet"),
      m("zb5", "Zincir aşınma ölçer", "1 adet", true),
    ],
    adimlar: [
      a("Aşınmayı ölç", "Ölçeri zincire takarak uzamayı kontrol et; %0,5–0,75'i geçtiyse zinciri değiştir."),
      a("Temizle", "Pedalı geri çevirirken zincire temizleyici sık, fırçayla bakla aralarını ov."),
      a("Durula ve kurula", "Suyla durulayıp bezle iyice kurula."),
      a("Yağla", "Her baklanın üstüne bir damla yağ damlat, pedalı birkaç tur çevir."),
      a("Fazlasını sil", "5 dakika sonra zincirin dışını bezle sil; yağ içeride kalmalı, dışta toz toplar."),
    ],
    ipuclari: ["Kuru havada kuru tip, yağmurlu havada ıslak tip yağ kullan."],
    guvenlik: ["Yağın jant ve fren disklerine bulaşmamasına dikkat et; frenleme gücünü düşürür."],
  },
  {
    id: "fren-ayari", kategoriId: "bisiklet", ikon: "car-brake-hold",
    ad: "V-Fren Balata Değişimi ve Ayarı", zorluk: "Orta", sure: "45 dk",
    ozet: "Aşınan balataları yenileyip freni doğru açıyla ayarlama.",
    malzemeler: [
      m("fa1", "V-fren balatası (çift)", "2 çift"),
      m("fa2", "Alyan anahtar seti", "1 set", true),
      m("fa3", "Kablo kesici", "1 adet", true),
      m("fa4", "İzopropil alkol + bez", "1 set"),
    ],
    adimlar: [
      a("Aşınmayı kontrol et", "Balatadaki oluklar kaybolmuşsa değiştir."),
      a("Eskisini sök", "Fren kolunu sıkıp kablo yuvasını çıkar, balata somununu alyanla gevşetip balatayı çıkar."),
      a("Yenisini tak", "Yeni balatayı jant yüzeyine tam oturacak, lastiğe değmeyecek yükseklikte konumlandır."),
      a("Açı ver", "Balatanın ön ucu jantla temas ederken arka uçta 1 mm boşluk kalsın (toe-in); ötmeyi önler."),
      a("Kablo gerginliği", "Balatalar jante 1–2 mm mesafede olacak şekilde kablo ayar vidasını çevir."),
      a("Test et", "Fren kolunu sık; kol gidona değmeden fren tam tutmalı. Önce düşük hızda dene."),
    ],
    ipuclari: ["Jant yüzeyini alkolle temizlemek frenleme gücünü belirgin artırır."],
    guvenlik: [
      "Fren ayarından sonra trafiğe çıkmadan önce boş ve güvenli bir alanda test et.",
      "Emin değilsen bir bisiklet servisine kontrol ettir; fren hayati bir parçadır.",
    ],
  },

  // ───────────────────────── EV TAMİRATI ─────────────────────────
  {
    id: "musluk-conta", kategoriId: "ev-tamir", ikon: "faucet",
    ad: "Damlayan Musluğun Contasını Değiştirme", zorluk: "Kolay", sure: "30 dk",
    ozet: "Klasik vidalı (iki kollu) musluklarda damlamayı conta ile bitirme.",
    malzemeler: [
      m("mc1", "Musluk contası seti", "1 set"),
      m("mc2", "İngiliz anahtarı (ayarlı)", "1 adet", true),
      m("mc3", "Düz ve yıldız tornavida", "1 set", true),
      m("mc4", "Teflon bant", "1 adet"),
      m("mc5", "Bez (çizilmeyi önlemek için)", "1 adet"),
    ],
    adimlar: [
      a("Suyu kapat", "Lavabo altındaki ara vanayı veya evin ana vanasını kapat, musluğu açıp kalan suyu boşalt."),
      a("Kolu sök", "Kolun üstündeki renkli kapağı tornavidayla çıkar, altındaki vidayı sök ve kolu çek."),
      a("Mekanizmayı çıkar", "Somunu bezle sarıp İngiliz anahtarıyla saat yönünün tersine çevirerek iç mekanizmayı (vidalı başlık) çıkar."),
      a("Contayı değiştir", "Mekanizmanın ucundaki eski lastik contayı çıkar, aynı ölçüdeki yenisini tak."),
      a("Geri tak", "Mekanizmayı elle oturtup anahtarla aşırı zorlamadan sık, kolu tak."),
      a("Test", "Vanayı yavaşça aç, damlama ve sızıntı olup olmadığını kontrol et."),
    ],
    ipuclari: [
      "Söktüğün contayı hırdavatçıya götürürsen birebir aynısını bulmak kolaylaşır.",
      "Tek kollu (bataryalı) musluklarda conta yerine seramik kartuş değişir; kartuş modelini musluk markasına göre al.",
    ],
    guvenlik: [
      "Suyu kapatmadan mekanizmayı sökme.",
      "Sıcak su tarafında çalışıyorsan suyun soğumasını bekle.",
    ],
  },
  {
    id: "duvar-tamir", kategoriId: "ev-tamir", ikon: "wall",
    ad: "Duvardaki Delik ve Çatlak Tamiri", zorluk: "Kolay", sure: "1 saat + kuruma",
    ozet: "Dübel delikleri ve küçük kırıkları macunla görünmez yapma.",
    malzemeler: [
      m("al1", "Hazır dolgu macunu / saten alçı", "1 kg"),
      m("al2", "Spatula seti (5 ve 10 cm)", "1 set", true),
      m("al3", "Zımpara 120–180 + takoz", "1 set"),
      m("al4", "Fileli tamir bandı (büyük delikler için)", "1 rulo"),
      m("al5", "Astar ve duvar boyası (mevcut renk)", "1 set"),
    ],
    adimlar: [
      a("Temizle", "Deliğin çevresindeki gevşek sıvayı ve tozu temizle; dübel varsa çıkar."),
      a("Doldur", "Macunu spatulayla deliğe bastırarak doldur, yüzeyle aynı hizada sıyır."),
      a("Büyük delik", "3 cm'den büyük deliklerde önce fileli bandı yapıştır, macunu onun üstüne ince katlar halinde sür."),
      a("Kurut ve zımparala", "Kuruyunca (genelde 2–4 saat) zımparala; gerekirse ikinci kat at."),
      a("Boya", "Astar sürüp üzerine mevcut duvar rengini boya."),
    ],
    ipuclari: ["Tek kalın kat yerine iki ince kat çökmeyi ve çatlamayı önler."],
    guvenlik: [
      "Zımparalarken toz maskesi tak.",
      "Prizlere ve elektrik hatlarına yakın deliklerde çalışırken sigortayı kapat.",
    ],
  },
  {
    id: "silikon-yenileme", kategoriId: "ev-tamir", ikon: "shower-head",
    ad: "Küvet ve Tezgâh Silikonunu Yenileme", zorluk: "Orta", sure: "2 saat + 24 saat kuruma",
    ozet: "Kararmış silikonu söküp temiz ve düzgün yeni bir hat çekme.",
    malzemeler: [
      m("sl1", "Küf önleyicili sıhhi tesisat silikonu (beyaz)", "1 tüp"),
      m("sl2", "Silikon tabancası", "1 adet", true),
      m("sl3", "Silikon sökücü / maket bıçağı", "1 adet", true),
      m("sl4", "Kağıt maskeleme bandı", "1 rulo"),
      m("sl5", "İzopropil alkol + bez", "1 set"),
      m("sl6", "Silikon düzeltme spatulası", "1 adet", true),
    ],
    adimlar: [
      a("Eskisini sök", "Eski silikonu bıçakla iki kenarından kesip şerit halinde çek; kalıntıları sökücüyle temizle."),
      a("Temizle ve kurut", "Yüzeyi alkolle sil, tamamen kurumasını bekle; nemli yüzeye silikon tutmaz."),
      a("Bantla", "Derzin iki yanına, aralarında 6–8 mm kalacak şekilde maskeleme bandı yapıştır."),
      a("Silikon çek", "Tüp ucunu 45° kesip sabit hızla tek seferde silikon çek."),
      a("Düzelt", "Sabunlu suya batırılmış spatula veya parmakla tek hamlede düzelt."),
      a("Bandı çek", "Silikon kurumadan bantları dışa doğru çek; 24 saat suyla temas ettirme."),
    ],
    ipuclari: ["Küveti silikon çekmeden önce suyla doldurursan, küvet çöktüğü konumda kalır ve silikon sonradan yırtılmaz."],
    guvenlik: [
      "Ortamı havalandır; silikon kururken asidik buhar çıkarabilir.",
      "Maket bıçağıyla seramiği çizmemek için bıçağı yatık tut.",
    ],
  },
];
