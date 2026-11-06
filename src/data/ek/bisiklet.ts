import { Proje } from "../types";
import { kategoriProjesi } from "../yardimci";

const p = kategoriProjesi("bisiklet");
const TEST =
  "İşlemden sonra frenleri ve tekerlek bağlantılarını kontrol etmeden sürüşe çıkma; ilk denemeyi trafiksiz alanda yap.";
const TORK = "Karbon parçalarda üreticinin tork değerini aşma; mümkünse tork anahtarı kullan.";
const ALEN = ["Alyan (allen) anahtar seti", "1 set", true] as [string, string, true];

// Bisiklet Bakımı: 17 ek proje (toplam 20)
export const BISIKLET_EK: Proje[] = [
  p(
    "surus-oncesi-kontrol",
    "clipboard-check-outline",
    "Sürüş Öncesi 2 Dakikalık Kontrol",
    "Kolay",
    "5 dk",
    "Hava-Fren-Zincir (HFZ) kontrol listesi.",
    [["Pompa + basınç göstergesi", "1 adet", true], ALEN, ["Zincir yağı", "1 adet"]],
    [
      ["Hava", "Lastik basıncını yanaktaki değere göre kontrol et."],
      ["Fren", "Frenleri sıkıp bisikleti it; kaymamalı, levye gidona değmemeli."],
      ["Zincir", "Zincirin temiz, yağlı ve pas olmadığına bak."],
      ["Bağlantılar", "Hızlı bağlantıların kapalı olduğunu ve gidonun sabit olduğunu kontrol et."],
    ],
    ["Bisikleti 10 cm kaldırıp bırak; tıkırdayan bir şey varsa bağlantıları kontrol et."],
    [TEST],
  ),

  p(
    "lastik-basinci",
    "gauge",
    "Doğru Lastik Basıncı",
    "Kolay",
    "10 dk",
    "Kilo, lastik genişliği ve zemine göre basınç ayarı.",
    [
      ["Göstergeli ayak pompası", "1 adet", true],
      ["Presta/Schrader adaptörü", "1 adet"],
      ["Dijital lastik basınç ölçer", "1 adet", true],
    ],
    [
      ["Sınırlar", "Lastik yanağındaki min-maks basınç değerlerini oku."],
      ["Başlangıç", "Şehir lastiğinde aralığın ortasından başla; arkaya öne göre biraz fazla ver."],
      ["Presta", "Presta sibopta üstteki somunu gevşetip hafif bas, sonra pompayı tak."],
      ["Deneme", "Sürüşe göre 0,2 bar aralıklarla ayarla."],
    ],
    ["Lastikler haftada 0,5–1 bar kaybedebilir; düzenli kontrol et."],
    ["Lastik üzerindeki maksimum basıncı aşma; patlayabilir."],
  ),

  p(
    "vites-ayari",
    "cog-outline",
    "Arka Vites (Aktarıcı) Ayarı",
    "Orta",
    "30 dk",
    "Atlayan veya geç geçen vitesleri ayar vidaları ile düzeltme.",
    [ALEN, ["Yıldız tornavida", "1 adet", true], ["Bisiklet standı (veya ters çevirme)", "1 adet", true]],
    [
      ["Limitler", "En küçük ve en büyük dişlide zincirin dışarı düşmemesi için H ve L vidalarını kontrol et."],
      ["Kablo", "En küçük dişlideyken kablo gerginliğini kontrol et."],
      [
        "İnce ayar",
        "Bir üst vitese geçmiyorsa namlu ayarını saat yönünün tersine çeyrek tur çevir; geç iniyorsa ters yöne.",
      ],
      ["Test", "Tüm vitesleri pedal çevirerek tek tek dene."],
    ],
    ["Namlu ayarı en sık gereken ayardır; limit vidalarına nadiren dokunulur."],
    ["Pedal çevirirken parmaklarını zincir ve dişlilerden uzak tut.", TEST],
  ),

  p(
    "zincir-asinma-degisim",
    "link-variant",
    "Zincir Aşınma Ölçümü ve Değişimi",
    "Orta",
    "45 dk",
    "Uzayan zinciri ölçüp zincir kırıcıyla değiştirme.",
    [
      ["Zincir aşınma ölçer", "1 adet", true],
      ["Zincir kırıcı (zincir cıvatası aleti)", "1 adet", true],
      ["Yeni zincir + bağlantı halkası (quick link)", "1 adet"],
      ["Bağlantı halkası pensesi", "1 adet", true],
    ],
    [
      ["Ölç", "Aşınma ölçeri tak; %0,5 (11 vites ve üstü) veya %0,75 değerinde değiştir."],
      ["Say", "Yeni zinciri eski zincirle aynı bakla sayısına göre kısalt."],
      ["Tak", "Zinciri aktarıcıdan doğru yoldan geçir."],
      ["Birleştir", "Bağlantı halkasını tak, pedala basarak yerine oturt."],
    ],
    ["Zamanında değişen zincir dişli setini de korur; geç kalınca kaset de değişmek zorunda kalır."],
    ["Zincir kırıcıyı düz tut; pimi eğri iterek zinciri zayıflatma.", TEST],
  ),

  p(
    "disk-balata",
    "disc",
    "Disk Fren Balatası Değişimi",
    "Orta",
    "30 dk",
    "Aşınan disk fren balatalarını yenisiyle değiştirme.",
    [
      ["Uyumlu disk fren balatası", "1 çift"],
      ["Balata ayırıcı veya plastik levye", "1 adet", true],
      ALEN,
      ["İzopropil alkol", "1 adet"],
    ],
    [
      ["Kontrol", "Balata kalınlığı 1 mm'nin altındaysa değiştir."],
      ["Sök", "Tekerleği çıkar, emniyet pimini çekip balataları al."],
      ["Pistonları it", "Pistonları plastik levyeyle düz şekilde geri it."],
      ["Tak", "Yeni balataları yayla birlikte tak, pimi geri tak, tekerleği yerleştir."],
      ["Alıştır", "20–30 kez orta hızdan kontrollü frenleme yaparak balataları alıştır."],
    ],
    ["Balatalara ve diske yağlı elle dokunma; frenleme gücü düşer."],
    [
      "Diske ve balataya yağ veya zincir spreyi bulaşmamalı; bulaşırsa alkolle temizle, balatayı değiştir.",
      "Sürüşten hemen sonra disk çok sıcaktır; dokunma.",
      TEST,
    ],
  ),

  p(
    "hidrolik-fren-hava",
    "water-outline",
    "Hidrolik Fren Hava Alma",
    "Zor",
    "1 saat",
    "Süngerleşen hidrolik frenin hava kabarcıklarını boşaltma.",
    [
      ["Üreticiye uygun hava alma kiti", "1 set", true],
      ["Üreticinin belirttiği fren sıvısı (mineral yağ veya DOT)", "1 şişe"],
      ["Nitril eldiven", "1 kutu", true],
      ["Kağıt havlu", "1 rulo"],
    ],
    [
      ["Sıvıyı doğrula", "Frenin mineral yağ mı DOT mu kullandığını kontrol et; asla karıştırma."],
      ["Hazırla", "Balataları çıkar, ara parçayı (bleed block) tak, levyeyi yatay konuma getir."],
      ["Bas", "Alttan şırıngayla sıvıyı yukarı it, üstteki kaba hava kabarcıklarını taşı."],
      ["Kapat", "Kabarcık kalmayınca vidaları kapat, temizle."],
      ["Test", "Levye sert ve tutarlı olmalı; değilse işlemi tekrarla."],
    ],
    ["İlk kez yapıyorsan üreticinin video rehberini adım adım takip et."],
    [
      "DOT sıvısı boyayı ve cildi tahriş eder; eldiven ve gözlük tak.",
      "Emin değilsen bir bisiklet servisine yaptır; fren hayati bir sistemdir.",
      TEST,
    ],
  ),

  p(
    "sele-yukseklik",
    "seat-recline-normal",
    "Sele Yüksekliği ve Konumu",
    "Kolay",
    "15 dk",
    "Diz ağrısını önleyen doğru sele yüksekliğini bulma.",
    [ALEN, ["Mezura", "1 adet", true], ["Bant (işaret için)", "1 adet"]],
    [
      ["Ölç", "Topuk pedaldayken ve pedal en alttayken bacak düz olmalı."],
      ["Ayarla", "Sele borusu kelepçesini gevşet, yüksekliği ayarla."],
      ["Minimum işaret", "Sele borusundaki 'min insert' işaretinin dışarıda kalmadığından emin ol."],
      ["Sık", "Kelepçeyi belirtilen torkla sık, yüksekliği bantla işaretle."],
    ],
    ["Normal sürüşte, parmak ucuyla pedal en alttayken diz hafif bükük kalır."],
    ["Sele borusunu minimum işaretin üstüne çıkarma; kırılabilir.", TORK],
  ),

  p(
    "gidon-bandi",
    "road-variant",
    "Yol Bisikleti Gidon Bandı Sarma",
    "Orta",
    "45 dk",
    "Eskiyen gidon bandını yenisiyle sarma.",
    [
      ["Gidon bandı seti (tıpa ve bitiş bandı dahil)", "1 set"],
      ["Elektrik bandı", "1 rulo"],
      ["Makas", "1 adet", true],
    ],
    [
      ["Sök", "Eski bandı ve tıpaları çıkar, yapışkan kalıntıyı temizle."],
      ["Başla", "Gidon ucundan başla, bandın yarısı taşacak şekilde içten dışa doğru sar."],
      ["Levye", "Fren levyesi gövdesinin etrafını sekiz şeklinde sar."],
      ["Bitir", "Üstte bandı açılı kes, bitiş bandıyla sabitle, tıpaları tak."],
    ],
    ["Sarım yönü ellerinin çekme yönüyle aynı olursa bant gevşemez."],
    ["Gidon tıpasız bırakılmamalı; düşmede açık boru yaralar.", TEST],
  ),

  p(
    "jant-ayari",
    "bike",
    "Tekerlek Eğriliği Düzeltme (Jant Ayarı)",
    "Zor",
    "1 saat",
    "Yalpa yapan jantı jant teli anahtarıyla düzeltme.",
    [
      ["Jant teli anahtarı (uygun ölçü)", "1 adet", true],
      ["Bisiklet standı veya ters çevirme", "1 adet", true],
      ["Kablo bağı (gösterge olarak)", "1 adet"],
    ],
    [
      ["İşaretle", "Kadroya kablo bağı takıp jantın yalpalandığı noktayı bul."],
      ["Ayarla", "Jant sağa kaçıyorsa o noktada sol taraftaki teli çeyrek tur sık, sağdakini çeyrek tur gevşet."],
      ["Tekrarla", "Küçük adımlarla, yalpa 1 mm'nin altına inene kadar devam et."],
      ["Kontrol", "Tellerin gerginliğini sıkarak karşılaştır; çok gevşek tel kalmamalı."],
    ],
    ["Çeyrek turdan büyük ayar yapma; jant ters yöne kaçar."],
    ["Kırık jant veya çok sayıda gevşek tel varsa servise götür.", TEST],
  ),

  p(
    "pedal-degisimi",
    "shoe-print",
    "Pedal Değişimi (Ters Diş Dikkat)",
    "Kolay",
    "15 dk",
    "Pedalları doğru yönde söküp takma.",
    [
      ["Pedal anahtarı 15 mm veya 8 mm alyan", "1 adet", true],
      ["Gres yağı", "1 adet"],
      ["Yeni pedal seti", "1 çift"],
    ],
    [
      ["Yönü öğren", "Sağ pedal normal diş, sol pedal ters diştir."],
      ["Sök", "Her iki pedal da bisikletin arkasına doğru çevrilerek gevşer."],
      ["Gresle", "Yeni pedalların dişlerine gres sür."],
      ["Tak", "L ve R işaretlerine dikkat ederek bisikletin önüne doğru çevirerek sık."],
    ],
    ["Zincir büyük dişlideyken çalışırsan anahtar kayınca elin dişlilere çarpmaz."],
    ["Yanlış pedalı zorlarsan krank dişleri bozulur.", TEST],
  ),

  p(
    "fren-kablosu-degisimi",
    "cable-data",
    "Fren Teli Değişimi (V-Fren)",
    "Orta",
    "30 dk",
    "Paslanmış veya kopmuş fren telini değiştirme.",
    [["Fren teli + kılıf", "1 set"], ["Kablo kesici", "1 adet", true], ALEN, ["Kablo uç kapağı", "2 adet"]],
    [
      ["Sök", "Fren üzerindeki tel sabitleme vidasını gevşetip eski teli levyeden çıkar."],
      ["Kılıf", "Kılıfı eskisiyle aynı boyda kes, uçlarını düzle."],
      ["Tak", "Yeni teli levyeden geçirip frene kadar ilerlet."],
      ["Ger", "Fren pabuçlarını jante bastırarak teli ger, vidayı sık, ucuna kapak tak."],
    ],
    ["Kılıfı kablo kesiciyle kes; pense kılıfın içini ezer."],
    ["Fren pabuçlarının lastiğe değil jante oturduğundan emin ol.", TEST],
  ),

  p(
    "tubeless-donusum",
    "tire",
    "Şamandırasız (Tubeless) Dönüşüm",
    "Zor",
    "1,5 saat",
    "Uyumlu jant ve lastikle iç lastiksiz sisteme geçiş.",
    [
      ["Tubeless jant bandı", "1 rulo"],
      ["Tubeless sibop", "2 adet"],
      ["Sızdırmazlık sıvısı", "1 şişe"],
      ["Kompresör veya şarjlı tubeless pompa", "1 adet", true],
    ],
    [
      ["Uyum", "Jant ve lastiğin 'tubeless ready' olduğunu doğrula."],
      ["Bant", "Jantı temizleyip bandı gergin ve kabarcıksız yapıştır."],
      ["Lastik", "Sibobu tak, lastiğin bir yanını jante geçir, sıvıyı ekle."],
      ["Oturt", "Lastiği hızlı hava vererek jant yuvasına 'pat' sesiyle oturt."],
      ["Dağıt", "Tekerleği döndürerek sıvıyı dağıt, ertesi gün basıncı kontrol et."],
    ],
    ["Sıvıyı 3–6 ayda bir tazele; kurur."],
    ["Lastiğin maksimum basıncını aşarak oturtmaya çalışma.", "Sıvı gözle temas ederse bol suyla yıka.", TEST],
  ),

  p(
    "kaset-temizligi",
    "spray-bottle",
    "Kaset ve Aktarıcı Temizliği",
    "Kolay",
    "30 dk",
    "Yağ ve çamur birikmiş dişli takımını temizleme.",
    [
      ["Bisiklet yağ sökücü (biyobozunur)", "1 şişe"],
      ["Kaset fırçası", "1 adet", true],
      ["Bez", "2 adet"],
      ["Zincir yağı", "1 adet"],
    ],
    [
      ["Sök", "Arka tekerleği çıkar."],
      ["Uygula", "Yağ sökücüyü kasete sık, 5 dk beklet."],
      ["Fırçala", "Dişler arasını fırçayla, aktarıcı makaralarını bezle temizle."],
      ["Durula ve kurut", "Az suyla durulayıp kurut, zinciri yağla."],
    ],
    ["Temiz aktarım sistemi vites geçişlerini belirgin şekilde iyileştirir."],
    ["Yağ sökücüyü diske ve fren balatalarına bulaştırma.", TEST],
  ),

  p(
    "bisiklet-isik-montaji",
    "flashlight",
    "Ön-Arka Işık ve Reflektör Montajı",
    "Kolay",
    "20 dk",
    "Gece sürüşü için ışık ve reflektörleri doğru konumlandırma.",
    [
      ["Şarjlı ön beyaz ışık", "1 adet"],
      ["Şarjlı arka kırmızı ışık", "1 adet"],
      ["Tekerlek ve pedal reflektörü", "1 set"],
    ],
    [
      ["Ön", "Ön ışığı gidona karşıdan gelenleri kör etmeyecek şekilde hafif aşağı bakacak açıyla tak."],
      ["Arka", "Arka ışığı sele borusuna, arkadan görülecek yüksekliğe tak."],
      ["Reflektör", "Tekerlek ve pedal reflektörlerini kontrol et."],
      ["Mod", "Gündüz yanıp sönen, gece sabit mod kullan."],
    ],
    ["Yansıtıcı yelek veya bant görünürlüğü büyük ölçüde artırır."],
    ["Gece ışıksız sürme; ışıkların şarjını her sürüşten önce kontrol et."],
  ),

  p(
    "bisiklet-yikama",
    "water",
    "Bisiklet Yıkama",
    "Kolay",
    "30 dk",
    "Rulmanlara su kaçırmadan bisikleti temizleme.",
    [
      ["Kova + ılık su", "1 adet"],
      ["Bisiklet şampuanı", "1 şişe"],
      ["Yumuşak fırça ve sünger seti", "1 set", true],
      ["Mikrofiber bez", "2 adet"],
    ],
    [
      ["Ön yıkama", "Çamuru alçak basınçlı su veya süngerle yumuşat."],
      ["Şampuan", "Yukarıdan aşağıya doğru şampuanlı süngerle yıka."],
      ["Durula", "Düşük basınçla durula."],
      ["Kurut ve yağla", "Bezle kurut, zinciri yağla."],
    ],
    ["Yıkadıktan sonra frenleri birkaç kez dene; ıslak frenler ilk anda zayıftır."],
    ["Yüksek basınçlı yıkama makinesini rulmanlara ve göbeklere tutma; gresi söker."],
  ),

  p(
    "kis-depolama",
    "snowflake",
    "Kış Depolama ve Bakım",
    "Kolay",
    "1 saat",
    "Uzun süre kullanılmayacak bisikleti hazırlama.",
    [
      ["Bisiklet askısı veya stand", "1 adet"],
      ["Bez + temizleyici", "1 set"],
      ["Zincir yağı", "1 adet"],
      ["Bisiklet örtüsü", "1 adet"],
    ],
    [
      ["Temizle", "Bisikleti temizleyip kurut."],
      ["Yağla", "Zinciri ve hareketli parçaları yağla."],
      ["Lastikler", "Lastikleri normal basıncına şişir veya bisikleti asarak sakla."],
      ["Sakla", "Kuru, rutubetsiz yerde örtüyle sakla; bataryalı ışıkları çıkar."],
    ],
    ["Elektrikli bisiklet bataryasını %50–70 dolulukta, oda sıcaklığında sakla."],
    ["Elektrikli bisiklet bataryasını donmaya bırakma ve gözetimsiz şarj etme."],
  ),

  p(
    "dis-lastik-degisimi",
    "tire",
    "Dış Lastik Değişimi",
    "Orta",
    "30 dk",
    "Aşınmış veya yarılmış dış lastiği değiştirme.",
    [
      ["Yeni dış lastik (jant ölçüsüne uygun)", "1 adet"],
      ["Plastik lastik sökme levyesi", "2 adet", true],
      ["Pompa", "1 adet", true],
    ],
    [
      ["Ölçü", "Eski lastiğin yanındaki ölçüyü (ör. 700×32c veya 29×2,2) oku."],
      ["Sök", "Havasını boşaltıp levyelerle lastiği jantdan çıkar."],
      ["Yön", "Yeni lastiği yanındaki dönüş yönü okuna göre yerleştir."],
      ["Tak", "İç lastiği hafif şişirip yerleştir, lastiği elle jante geçir."],
      ["Şişir", "Lastik yanağındaki çizginin jant boyunca eşit göründüğünü kontrol ederek şişir."],
    ],
    ["İç lastiği hafif şişirmek levye sıkışmasını önler."],
    ["Metal tornavida kullanma; iç lastiği deler.", TEST],
  ),
];
