import { Proje } from "./types";
import { a, m } from "./yardimci";
import { COCUK_DOGA } from "./projeler-cocuk-doga";
import { EL_SANATLARI } from "./projeler-el-sanatlari";
import { TEKNIK_EV } from "./projeler-teknik-ev";

// İlk 5 kategori (oyuncak, balıkçılık, akvaryum, ahşap, elektronik)
const ILK_PROJELER: Proje[] = [
  // ───────────────────────── OYUNCAK ─────────────────────────
  {
    id: "ahsap-araba", kategoriId: "oyuncak", ikon: "car-side",
    ad: "Ahşap Oyuncak Araba", zorluk: "Kolay", sure: "3 saat", yas: "3+ yaş",
    ozet: "Tek parça ahşap bloktan, dönen tekerlekli klasik oyuncak araba.",
    malzemeler: [
      m("aa1", "Çam blok 4×8×18 cm", "1 adet"),
      m("aa2", "Ahşap tekerlek Ø40 mm", "4 adet"),
      m("aa3", "Ahşap dübel çubuk Ø6 mm", "30 cm"),
      m("aa4", "Su bazlı oyuncak boyası (EN 71-3)", "1 set"),
      m("aa5", "Ahşap tutkalı", "1 adet"),
      m("aa6", "Zımpara kağıdı 120/240", "2 adet"),
      m("aa7", "Matkap + Ø7 mm ahşap ucu", "1 adet", true),
      m("aa8", "El testeresi", "1 adet", true),
    ],
    adimlar: [
      a("Şablonu çiz", "Bloğun yan yüzüne araba profilini (kabin + kaput) kurşun kalemle çiz."),
      a("Kes", "Bloğu mengeneye sabitle, kabin çıkıntısını el testeresiyle kes."),
      a("Aks deliklerini aç", "Alt kenardan 1,5 cm yukarıda, ön ve arkada Ø7 mm delikleri bir yandan diğerine düz del. Delik dübelden geniş olmalı ki aks dönsün."),
      a("Zımparala", "Önce 120, sonra 240 kum ile tüm köşeleri yuvarlat. Kıymık kalmamalı."),
      a("Boya", "Oyuncak standardına uygun su bazlı boya ile boya, 24 saat kurut."),
      a("Tekerlekleri tak", "Dübeli kes (gövde eni + 2 cm), deliğe geçir, iki uca tekerlekleri tutkalla sabitle. Tekerlek gövdeye sürtmemeli."),
    ],
    ipuclari: [
      "Aks deliği dübelden 1 mm geniş olursa araba çok rahat yuvarlanır.",
      "Kurşun kalem izlerini boyamadan önce zımpara ile sil.",
    ],
    guvenlik: [
      "3 yaş altı için tekerlekler mutlaka sağlam tutkallanmalı; küçük parçalar boğulma riski taşır.",
      "Yalnızca oyuncak için uygun (EN 71-3) boyalar kullan.",
      "Kesim sırasında parçayı mengeneyle sabitle, elle tutma.",
    ],
  },
  {
    id: "kece-kukla", kategoriId: "oyuncak", ikon: "hand-wave",
    ad: "Keçe Parmak Kuklası Seti", zorluk: "Kolay", sure: "2 saat", yas: "6+ yaş (gözetimle)",
    ozet: "Hayvan figürlü 5 parmak kuklası; hikâye anlatmak için ideal.",
    malzemeler: [
      m("kk1", "Renkli keçe (20×30 cm)", "6 renk"),
      m("kk2", "Nakış ipliği", "4 renk"),
      m("kk3", "Kör uçlu nakış iğnesi", "2 adet"),
      m("kk4", "Kumaş tutkalı", "1 adet"),
      m("kk5", "Kumaş makası", "1 adet", true),
      m("kk6", "Terzi tebeşiri", "1 adet"),
    ],
    adimlar: [
      a("Kalıp hazırla", "Kağıda 4×7 cm, üstü yuvarlak bir parmak kalıbı çiz ve kes."),
      a("Keçeyi kes", "Her kukla için kalıptan aynı renkte 2 parça kes."),
      a("Yüz detaylarını yap", "Göz, kulak, burun gibi küçük parçaları farklı renklerden kes, ön parçaya yapıştır veya dik."),
      a("Dik", "İki parçayı üst üste koy, alt kısım açık kalacak şekilde kenarlardan battaniye dikişiyle dik."),
      a("Bitir", "İplik uçlarını içeriden düğümle, fazlalıkları kes."),
    ],
    ipuclari: [
      "Battaniye dikişi hem dekoratif hem dayanıklıdır; çocuklar için ideal.",
      "Küçük parçalar için tutkal yerine dikiş daha kalıcıdır.",
    ],
    guvenlik: [
      "İğne kullanımı yetişkin gözetiminde olmalı.",
      "Düğme veya oynar göz kullanma; 3 yaş altı için boğulma riski.",
    ],
  },
  {
    id: "bilye-parkuru", kategoriId: "oyuncak", ikon: "chart-timeline-variant",
    ad: "Karton Bilye Parkuru", zorluk: "Kolay", sure: "2–3 saat", yas: "5+ yaş (gözetimle)",
    ozet: "Atık karton rulolarla duvara/kutuya kurulan bilye yolu.",
    malzemeler: [
      m("bp1", "Karton rulo (havlu/tuvalet kağıdı)", "10–15 adet"),
      m("bp2", "Büyük karton kutu", "1 adet"),
      m("bp3", "Kağıt maskeleme bandı", "1 rulo"),
      m("bp4", "Sıcak silikon tabancası + çubuk", "1 set", true),
      m("bp5", "Maket bıçağı", "1 adet", true),
      m("bp6", "Cam bilye", "10 adet"),
    ],
    adimlar: [
      a("Zemini hazırla", "Kutuyu açarak dik bir pano yap ya da duvara bant ile karton yapıştır."),
      a("Rulo kanalları kes", "Ruloların bir kısmını boyuna ikiye kesip yarım kanal yap."),
      a("Rotayı planla", "Kanalları zikzak şeklinde, her biri hafif eğimli olacak şekilde kalemle işaretle."),
      a("Yapıştır", "Kanalları yukarıdan aşağıya silikon veya bantla sabitle; her kanalın ucu bir alttakine düşmeli."),
      a("Test et", "Bilyeyi bırak, takıldığı yerde eğimi artır."),
    ],
    ipuclari: [
      "Tam rulolar tünel, kesik rulolar açık kanal olur; karıştırmak eğlenceli bir parkur yapar.",
      "Sonuna kağıt bardak koyarak 'hedef' ekle.",
    ],
    guvenlik: [
      "Maket bıçağı ve sıcak silikon yalnızca yetişkin tarafından kullanılmalı.",
      "Bilyeler 3 yaş altı çocuklar için boğulma riski taşır.",
    ],
  },

  // ───────────────────────── BALIKÇILIK ─────────────────────────
  {
    id: "samandirali-takim", kategoriId: "balikcilik", ikon: "hook",
    ad: "Şamandıralı Olta Takımı Kurma", zorluk: "Kolay", sure: "30 dk",
    ozet: "Kıyıdan ve iskeleden balık için en temel şamandıralı takım.",
    malzemeler: [
      m("st1", "Misina 0,25 mm (ana beden)", "100 m"),
      m("st2", "Köstek misinası 0,20 mm", "50 m"),
      m("st3", "Kaydırmalı şamandıra 3–5 g", "2 adet"),
      m("st4", "Fırdöndü (no. 10)", "5 adet"),
      m("st5", "Olta iğnesi no. 8–10", "1 paket"),
      m("st6", "Saçma kurşun seti", "1 kutu"),
      m("st7", "Şamandıra stoperi", "1 paket"),
      m("st8", "Misina makası / tırnak makası", "1 adet", true),
    ],
    adimlar: [
      a("Stoper tak", "Ana misinaya derinlik stoperini geçir; derinliği stoperin yeri belirler."),
      a("Şamandırayı geçir", "Kaydırmalı şamandırayı misinaya geçir."),
      a("Kurşunları sık", "Şamandıranın taşıma gramajına göre saçma kurşunları misinaya kademeli olarak sık."),
      a("Fırdöndüyü bağla", "Ana misinanın ucuna fırdöndüyü klinç düğümüyle bağla."),
      a("Köstek hazırla", "50–80 cm köstek misinasına iğneyi bağla, diğer ucunu fırdöndüye bağla."),
      a("Ayarla", "Suya at, şamandıranın sadece anteni dışarıda kalacak şekilde kurşun ekle/çıkar."),
    ],
    ipuclari: [
      "Köstek ana misinadan ince olursa, takılmada sadece iğne kopar, şamandıra kurtulur.",
      "Düğümü sıkmadan önce misinayı tükürükle ıslat; ısınıp zayıflamaz.",
    ],
    guvenlik: [
      "Avlanmadan önce bölgedeki av yasaklarını, asgari boy ölçülerini ve gerekli belgeleri kontrol et.",
      "Atış yaparken arkanda kimse olmadığından emin ol.",
      "Kopan misinayı doğaya bırakma; kuşlara ve canlılara dolanır.",
    ],
  },
  {
    id: "spin-kurulum", kategoriId: "balikcilik", ikon: "rotate-right",
    ad: "Spin Takımı Kurulumu ve Misina Sarma", zorluk: "Kolay", sure: "45 dk",
    ozet: "Makaraya misinayı doğru sarma ve sahte yem için bağlantı.",
    malzemeler: [
      m("sk1", "Spin kamış 2,10–2,40 m (5–25 g)", "1 adet", true),
      m("sk2", "Spin makara 2500–3000 boy", "1 adet", true),
      m("sk3", "Örgü (PE) misina 0,10–0,14 mm", "150 m"),
      m("sk4", "Florokarbon lider 0,25–0,30 mm", "50 m"),
      m("sk5", "Klipsli fırdöndü", "10 adet"),
    ],
    adimlar: [
      a("Makarayı tak", "Makarayı kamışın makara yuvasına oturt, somunu sık."),
      a("Misinayı halkalardan geçir", "Kepçeyi aç, misinayı en alttaki halkadan başlayarak geçir."),
      a("Bobine bağla", "Misinayı bobine iki tur sarıp makara düğümüyle bağla, kepçeyi kapat."),
      a("Gergin sar", "Misina makarasını bir kalem üzerinden döndürerek, misinayı parmaklarınla hafif gergin tutarak sar. Bobinin ağzına 2 mm kalana kadar doldur."),
      a("Lider ekle", "Örgü misinanın ucuna 1–1,5 m florokarbon lideri FG veya çift uni düğümüyle bağla."),
      a("Klipsi bağla", "Liderin ucuna klipsli fırdöndüyü bağla; sahte yemi buraya takarsın."),
    ],
    ipuclari: [
      "Örgü misinanın altına 10–20 tur monofilament sarmak bobinde kaymayı önler.",
      "Fren ayarını misina kopma direncinin yaklaşık üçte birine getir.",
    ],
    guvenlik: [
      "Elektrik hatlarının yakınında atış yapma; özellikle karbon kamış elektriği iletir.",
      "Örgü misina eli kesebilir; sert çekişte eldiven kullan.",
    ],
  },
  {
    id: "ahsap-sahte-yem", kategoriId: "balikcilik", ikon: "fish",
    ad: "Ahşap Sahte Yem (Crankbait) Yapımı", zorluk: "Zor", sure: "2 gün (kuruma dahil)",
    ozet: "Dilli, yüzen ahşap sahte yemi baştan sona kendin yap.",
    malzemeler: [
      m("sy1", "Balsa veya ıhlamur ahşap çıta 2×2 cm", "30 cm"),
      m("sy2", "Polikarbonat levha 1 mm (dil için)", "10×10 cm"),
      m("sy3", "Paslanmaz çelik tel 0,8 mm", "1 m"),
      m("sy4", "Üçlü iğne no. 6", "2 adet"),
      m("sy5", "Halka (split ring) no. 3", "5 adet"),
      m("sy6", "Akrilik boya + astar", "1 set"),
      m("sy7", "İki bileşenli epoksi (5 dk)", "1 set"),
      m("sy8", "Kurşun ağırlık (yapışkan)", "1 paket"),
      m("sy9", "Maket bıçağı + zımpara seti", "1 set", true),
      m("sy10", "Kargaburun pense", "1 adet", true),
    ],
    adimlar: [
      a("Şablon çiz", "Kağıda 7 cm boyunda balık profili çiz, ahşaba aktar."),
      a("Gövdeyi şekillendir", "Maket bıçağı ve zımpara ile yandan ve üstten simetrik bir balık formu ver."),
      a("Ortadan ikiye kes", "Gövdeyi boyuna ikiye ayır; içine tel kanalı açacaksın."),
      a("Tel iskeleti yap", "Teli bük: ön uçta bağlantı halkası, karında ve kuyrukta iğne halkaları olsun."),
      a("Ağırlık ve teli yerleştir", "Teli ve karın altına kurşunu kanala yerleştir, iki yarıyı epoksi ile birleştir."),
      a("Dil yuvası aç", "Ağız altına 30–45° açıyla kesik aç, polikarbonat dili epoksi ile sabitle."),
      a("Astarla ve boya", "Astar sonra akrilik boya; göz ve desenleri ekle."),
      a("Epoksi kapla", "İnce kat epoksi sür, döndürerek kurut. 24 saat beklet, ikinci kat at."),
      a("İğneleri tak", "Halkalarla üçlü iğneleri tak; leğende yüzdürerek dengeyi test et."),
    ],
    ipuclari: [
      "Dil açısı derinliği belirler: dik dil sığ, yatık dil derin dalar.",
      "Suda yan yatıyorsa karına küçük kurşun ekle.",
    ],
    guvenlik: [
      "Epoksiyi havalandırılan alanda, eldivenle kullan.",
      "Üçlü iğneler çok keskin; takarken pense kullan.",
      "Maket bıçağıyla her zaman vücudundan uzağa doğru kes.",
    ],
  },

  // ───────────────────────── AKVARYUM ─────────────────────────
  {
    id: "nano-bitkili", kategoriId: "akvaryum", ikon: "sprout",
    ad: "Bitkili Nano Akvaryum Kurulumu", zorluk: "Orta", sure: "1 gün + 4–6 hafta döngü",
    ozet: "20–30 litrelik, canlı bitkili, düşük bakımlı nano akvaryum.",
    malzemeler: [
      m("na1", "Akvaryum 30 L", "1 adet", true),
      m("na2", "Askı veya iç filtre (30 L uyumlu)", "1 adet", true),
      m("na3", "Akvaryum ısıtıcı 50 W (termostatlı)", "1 adet", true),
      m("na4", "Bitki LED aydınlatma", "1 adet", true),
      m("na5", "Aquasoil (bitki toprağı)", "5 L"),
      m("na6", "Dekor taşı / kök", "1 set"),
      m("na7", "Canlı bitki seti (kolay türler)", "1 set"),
      m("na8", "Su düzenleyici (klor giderici)", "1 adet"),
      m("na9", "Su test kiti (NH3/NO2/NO3/pH)", "1 set"),
      m("na10", "Termometre", "1 adet"),
    ],
    adimlar: [
      a("Yeri seç", "Doğrudan güneş almayan, düz ve sağlam bir zemin seç. Dolu akvaryum ~40 kg olur."),
      a("Zemini ser", "Aquasoil'i arkada 6 cm, önde 3 cm olacak şekilde eğimli ser."),
      a("Hardscape kur", "Taş ve kökleri yerleştir; 'üçte bir' kuralıyla odak noktası oluştur."),
      a("Bitkileri dik", "Toprağı spreyle nemlendir, cımbızla bitkileri dik: arkaya uzun, öne kısa türler."),
      a("Suyu yavaşça doldur", "Toprak kalkmasın diye suyu tabak veya poşet üzerine dök; su düzenleyici ekle."),
      a("Ekipmanı çalıştır", "Filtre, ısıtıcı (24–26 °C) ve ışığı (günde 6–8 saat) çalıştır."),
      a("Azot döngüsünü bekle", "4–6 hafta balıksız çalıştır. Test kitinde amonyak ve nitrit 0 olunca ilk canlıları ekle."),
    ],
    ipuclari: [
      "İlk haftalarda ışığı 6 saatte tut; yosun patlamasını azaltır.",
      "Haftada bir %25 su değişimi uzun vadede en etkili bakımdır.",
      "Başlangıç için Anubias, Java Fern, Cryptocoryne gibi kolay bitkiler seç.",
    ],
    guvenlik: [
      "Suya el sokmadan önce ısıtıcı ve filtrenin fişini çek.",
      "Kablolarda 'damlama halkası' bırak: kablo prizden aşağıda bir döngü yapsın ki su prize akmasın.",
      "Kaçak akım rölesi olan bir prize bağla.",
    ],
  },
  {
    id: "sunger-filtre", kategoriId: "akvaryum", ikon: "air-filter",
    ad: "Sünger Filtre Yapımı", zorluk: "Kolay", sure: "1 saat",
    ozet: "Hava pompasıyla çalışan, yavru ve karides tankları için ideal ucuz filtre.",
    malzemeler: [
      m("sf1", "Filtre süngeri (orta gözenek) 10×10×15 cm", "1 adet"),
      m("sf2", "PVC boru Ø20 mm", "25 cm"),
      m("sf3", "PVC kapak Ø20 mm", "1 adet"),
      m("sf4", "Hava pompası (akvaryum)", "1 adet", true),
      m("sf5", "Hava hortumu", "2 m"),
      m("sf6", "Çek valf (geri tepme önleyici)", "1 adet"),
      m("sf7", "Hava taşı (küçük)", "1 adet"),
      m("sf8", "Matkap + Ø4 mm uç", "1 adet", true),
    ],
    adimlar: [
      a("Boruyu delikle", "Borunun alt 12 cm'lik kısmına 1 cm arayla Ø4 mm delikler aç."),
      a("Alt ucu kapat", "Kapağı borunun delikli ucuna tak."),
      a("Süngeri del", "Süngerin ortasına boru çapında bir kanal aç ve boruyu içine geçir."),
      a("Hava hattını kur", "Hava taşını borunun içine, delikli kısmın üstüne gelecek şekilde indir."),
      a("Çek valfi tak", "Hortuma çek valfi takarak pompaya bağla."),
      a("Çalıştır", "Akvaryuma yerleştir; hava kabarcıkları borudan yükselirken süngerden su çeker."),
    ],
    ipuclari: [
      "Süngeri musluk suyuyla değil, akvaryumdan aldığın suyla çalkala; faydalı bakteriler ölmesin.",
      "Eski filtreden biraz sünger koymak yeni filtrede döngüyü hızlandırır.",
    ],
    guvenlik: [
      "Pompayı akvaryum su seviyesinin üstüne koy ya da mutlaka çek valf kullan; elektrik kesildiğinde su pompaya geri akabilir.",
      "Delerken PVC'yi sabitle; talaşları akvaryuma koymadan önce yıka.",
    ],
  },
  {
    id: "diy-co2", kategoriId: "akvaryum", ikon: "molecule-co2",
    ad: "Mayalı DIY CO₂ Sistemi", zorluk: "Orta", sure: "1 saat",
    ozet: "Şeker ve maya ile bitkili akvaryuma ucuz CO₂ desteği.",
    malzemeler: [
      m("co1", "PET şişe 2 L", "1 adet"),
      m("co2", "Toz şeker", "2 su bardağı"),
      m("co3", "Kuru maya", "½ çay kaşığı"),
      m("co4", "Karbonat", "½ çay kaşığı"),
      m("co5", "Hava hortumu", "2 m"),
      m("co6", "Çek valf", "1 adet"),
      m("co7", "Kabarcık sayacı", "1 adet"),
      m("co8", "CO₂ difüzörü (seramik)", "1 adet"),
      m("co9", "Silikon (akvaryum uyumlu)", "1 adet"),
    ],
    adimlar: [
      a("Kapağı hazırla", "Şişe kapağını hortum çapında del, hortumu geçir ve iki yandan silikonla sızdırmaz yap. 24 saat kurut."),
      a("Karışımı yap", "Şekeri 1,5 L ılık suda erit, karbonat ekle. Ilık suda aktifleştirdiğin mayayı ekle."),
      a("Hattı kur", "Şişe → kabarcık sayacı → çek valf → difüzör sırasıyla bağla."),
      a("Yerleştir", "Difüzörü filtre çıkışının yakınına, akvaryumun altına koy."),
      a("Gözlemle", "Birkaç saat içinde kabarcık başlar. Karışım 2–3 haftada bir yenilenir."),
    ],
    ipuclari: [
      "Karbonat CO₂ üretimini dengeler, ilk günlerdeki aşırı patlamayı azaltır.",
      "Gece CO₂ birikmesin diye geceleri bir hava taşı çalıştır.",
    ],
    guvenlik: [
      "Balıklar yüzeyde hava yutuyorsa CO₂ fazladır: hemen hava taşını aç, şişeyi ayır.",
      "Hortumu bükme veya tıkama; şişede basınç birikir.",
      "Çek valf olmadan kurma; şişeye akvaryum suyu geri kaçar.",
    ],
  },

  // ───────────────────────── AHŞAP ─────────────────────────
  {
    id: "kesme-tahtasi", kategoriId: "ahsap", ikon: "knife",
    ad: "Masif Kesme Tahtası", zorluk: "Kolay", sure: "3 saat + 1 gün yağ",
    ozet: "Sert ağaçtan, gıdaya uygun yağ ile bitirilmiş mutfak tahtası.",
    malzemeler: [
      m("kt1", "Masif sert ağaç (kayın/meşe/ceviz) 35×22×2 cm", "1 adet"),
      m("kt2", "Zımpara 80/120/180/240", "1 set"),
      m("kt3", "Gıdaya uygun mineral yağ", "250 ml"),
      m("kt4", "Pamuklu bez", "2 adet"),
      m("kt5", "Dekupaj testere", "1 adet", true),
      m("kt6", "Eksantrik zımpara makinesi", "1 adet", true),
    ],
    adimlar: [
      a("Formu çiz", "Köşeleri yuvarlatmak için bardak kullanarak çiz; istersen sap ekle."),
      a("Kes", "Dekupaj testereyle çizgiyi taşıyarak kes, sonra zımparayla çizgiye in."),
      a("Kademeli zımparala", "80 → 120 → 180 → 240 kum sırasıyla zımparala; her kumda önceki çizikler kaybolmalı."),
      a("Lifleri kaldır", "Yüzeyi nemli bezle sil, kuruyunca kalkan lifleri 240 ile hafifçe al."),
      a("Yağla", "Bol mineral yağ sür, 20 dk beklet, fazlasını sil. 3–4 kat tekrarla."),
    ],
    ipuclari: [
      "Çam gibi yumuşak ağaçlar bıçak izi tutar; sert ağaç tercih et.",
      "Ayda bir yağlarsan tahta çatlamaz.",
    ],
    guvenlik: [
      "Vernik veya cila kullanma; sadece gıdaya uygun yağ.",
      "Zımparada toz maskesi, kesimde koruyucu gözlük kullan.",
      "Yağlı bezleri açık havada sererek kurut; buruşuk bırakılan yağlı bez kendiliğinden tutuşabilir.",
    ],
  },
  {
    id: "yuzer-raf", kategoriId: "ahsap", ikon: "bookshelf",
    ad: "Gizli Bağlantılı Yüzer Duvar Rafı", zorluk: "Orta", sure: "4 saat",
    ozet: "Görünür konsolu olmayan, modern duvar rafı.",
    malzemeler: [
      m("yr1", "Masif çam tahta 60×20×4 cm", "1 adet"),
      m("yr2", "Gizli raf konsolu (60 cm)", "1 adet"),
      m("yr3", "Duvar tipine uygun dübel + vida", "1 set"),
      m("yr4", "Ahşap vernik veya yağ", "250 ml"),
      m("yr5", "Matkap + ahşap uç seti", "1 adet", true),
      m("yr6", "Su terazisi", "1 adet", true),
      m("yr7", "Kablo/metal dedektörü", "1 adet", true),
    ],
    adimlar: [
      a("Duvarı tara", "Dedektörle elektrik kablosu ve su borusu olmadığından emin ol."),
      a("Konsol yerini işaretle", "Su terazisiyle yatay çizgi çiz, konsol deliklerini işaretle."),
      a("Konsolu tak", "Dübelleri çak, konsolu vidala; tekrar terazi kontrolü yap."),
      a("Rafı del", "Rafın arka kenarına, konsol çubuklarının konumuna ve çapına uygun delikleri tam dik aç."),
      a("Bitir", "Zımparala, vernikle ve kurut."),
      a("Tak", "Rafı konsol çubuklarına geçir."),
    ],
    ipuclari: [
      "Raf deliklerini matkap sehpası veya delme kılavuzuyla açarsan raf düz durur.",
      "Alçıpan duvarda mutlaka alçıpan dübeli kullan.",
    ],
    guvenlik: [
      "Delmeden önce mutlaka kablo dedektörü kullan.",
      "Konsolun taşıma kapasitesini aşma; ağır yükler için çelik dübel kullan.",
      "Delerken koruyucu gözlük tak.",
    ],
  },
  {
    id: "ahsap-kutu", kategoriId: "ahsap", ikon: "package-variant-closed",
    ad: "Ahşap Saklama Kutusu", zorluk: "Kolay", sure: "3 saat",
    ozet: "Tutkal ve vidayla birleştirilen çok amaçlı saklama kutusu.",
    malzemeler: [
      m("ak1", "Çam tahta 1,8×12 cm", "2 m"),
      m("ak2", "Kontrplak 6 mm (taban)", "30×20 cm"),
      m("ak3", "Ahşap tutkalı (D3)", "1 adet"),
      m("ak4", "Ahşap vidası 3,5×30 mm", "16 adet"),
      m("ak5", "Gönye", "1 adet", true),
      m("ak6", "Gönye testere veya el testeresi", "1 adet", true),
      m("ak7", "İşkence", "2 adet", true),
    ],
    adimlar: [
      a("Ölç ve kes", "Uzun kenarlar için 2 × 30 cm, kısa kenarlar için 2 × 16,4 cm kes."),
      a("Ön delik aç", "Uzun kenarların uçlarına vidalar için ön delik aç; ahşap çatlamaz."),
      a("Tutkalla ve vidala", "Kenarlara tutkal sür, işkenceyle sıkıp gönye kontrolüyle vidala."),
      a("Tabanı tak", "Kontrplak tabanı tutkal ve küçük çivi ile alta sabitle."),
      a("Zımparala ve bitir", "Köşeleri yuvarlat, yağ veya vernik sür."),
    ],
    ipuclari: [
      "Taşan tutkalı hemen nemli bezle sil; kuruyunca boya tutmaz.",
      "Köşegenleri ölç: eşitse kutu tam gönyededir.",
    ],
    guvenlik: [
      "Kesim sırasında parçayı işkenceyle sabitle.",
      "Koruyucu gözlük ve toz maskesi kullan.",
    ],
  },

  // ───────────────────────── ELEKTRONİK ─────────────────────────
  {
    id: "trafik-lambasi", kategoriId: "elektronik", ikon: "traffic-light",
    ad: "Arduino Trafik Lambası", zorluk: "Kolay", sure: "1 saat",
    ozet: "Arduino'ya başlangıç: 3 LED ile çalışan trafik lambası.",
    malzemeler: [
      m("tl1", "Arduino Uno (uyumlu)", "1 adet", true),
      m("tl2", "Breadboard", "1 adet", true),
      m("tl3", "LED kırmızı/sarı/yeşil 5 mm", "3 adet"),
      m("tl4", "Direnç 220 Ω", "3 adet"),
      m("tl5", "Jumper kablo (erkek-erkek)", "10 adet"),
      m("tl6", "USB kablo", "1 adet", true),
    ],
    adimlar: [
      a("Arduino IDE kur", "arduino.cc adresinden Arduino IDE'yi indir ve kur."),
      a("LED'leri yerleştir", "LED'leri breadboard'a tak; uzun bacak (+) dirence gidecek."),
      a("Bağla", "Kırmızı → pin 8, Sarı → pin 9, Yeşil → pin 10; her LED'in önüne 220 Ω direnç. Kısa bacakları GND'ye bağla."),
      a("Kodu yükle", "Aşağıdaki kodu IDE'ye yapıştır, Araçlar'dan kart ve portu seç, 'Yükle'ye bas."),
      a("Geliştir", "Süreleri değiştir veya bir buton ekleyerek yaya geçidi yap."),
    ],
    ipuclari: ["LED yanmıyorsa ters takılmıştır; çevir."],
    guvenlik: [
      "Direnç kullanmadan LED bağlama; LED ve pin zarar görür.",
      "Devreyi kurarken USB kablosunu çıkar.",
    ],
    kod: `const int KIRMIZI = 8, SARI = 9, YESIL = 10;

void setup() {
  pinMode(KIRMIZI, OUTPUT);
  pinMode(SARI, OUTPUT);
  pinMode(YESIL, OUTPUT);
}

void yak(int pin, int ms) {
  digitalWrite(pin, HIGH);
  delay(ms);
  digitalWrite(pin, LOW);
}

void loop() {
  yak(KIRMIZI, 4000);
  yak(SARI, 1000);
  yak(YESIL, 4000);
  yak(SARI, 1000);
}`,
  },
  {
    id: "nem-sensoru", kategoriId: "elektronik", ikon: "water-percent",
    ad: "Saksı Toprak Nem Uyarıcısı", zorluk: "Kolay", sure: "1,5 saat",
    ozet: "Toprak kuruyunca LED yakan ve bip sesi veren sulama hatırlatıcı.",
    malzemeler: [
      m("ns1", "Arduino Uno / Nano", "1 adet", true),
      m("ns2", "Kapasitif toprak nem sensörü v1.2", "1 adet"),
      m("ns3", "Aktif buzzer 5 V", "1 adet"),
      m("ns4", "Kırmızı LED + 220 Ω direnç", "1 set"),
      m("ns5", "Jumper kablo", "10 adet"),
      m("ns6", "5 V USB adaptör", "1 adet", true),
    ],
    adimlar: [
      a("Sensörü bağla", "Sensör VCC → 5V, GND → GND, AOUT → A0."),
      a("Uyarıcıları bağla", "Buzzer (+) → pin 8, LED (direnç üzerinden) → pin 13."),
      a("Kalibre et", "Kodu yükle, Seri Monitör'ü aç. Sensör havadayken ve ıslak topraktayken değerleri not et."),
      a("Eşiği ayarla", "KURU_ESIK değerini iki ölçümün ortasına ayarla ve tekrar yükle."),
      a("Yerleştir", "Sensörü çizgisine kadar toprağa göm; elektronik kısmını ıslatma."),
    ],
    ipuclari: [
      "Kapasitif sensör paslanmaz; ucuz rezistif sensörler birkaç haftada çürür.",
      "Kapasitif sensörde değer büyüdükçe toprak kurudur.",
    ],
    guvenlik: ["Sensörün üst elektronik kısmını sudan koru."],
    kod: `const int SENSOR = A0, BUZZER = 8, LED = 13;
const int KURU_ESIK = 450; // kalibrasyonla değiştir

void setup() {
  Serial.begin(9600);
  pinMode(BUZZER, OUTPUT);
  pinMode(LED, OUTPUT);
}

void loop() {
  int deger = analogRead(SENSOR);
  Serial.println(deger);

  if (deger > KURU_ESIK) {        // toprak kuru
    digitalWrite(LED, HIGH);
    digitalWrite(BUZZER, HIGH);
    delay(200);
    digitalWrite(BUZZER, LOW);
  } else {
    digitalWrite(LED, LOW);
  }
  delay(2000);
}`,
  },
  {
    id: "akvaryum-termometre", kategoriId: "elektronik", ikon: "thermometer-water",
    ad: "Akvaryum Dijital Termometre", zorluk: "Orta", sure: "2 saat",
    ozet: "Su geçirmez sensör ve LCD ekranla akvaryum sıcaklık göstergesi.",
    malzemeler: [
      m("at1", "Arduino Uno / Nano", "1 adet", true),
      m("at2", "DS18B20 su geçirmez sıcaklık sensörü", "1 adet"),
      m("at3", "16×2 LCD + I2C modülü", "1 adet"),
      m("at4", "Direnç 4,7 kΩ", "1 adet"),
      m("at5", "Jumper kablo", "10 adet"),
      m("at6", "5 V USB adaptör", "1 adet", true),
    ],
    adimlar: [
      a("Kütüphaneleri kur", "Arduino IDE → Kütüphane Yöneticisi: OneWire, DallasTemperature, LiquidCrystal I2C."),
      a("Sensörü bağla", "Kırmızı → 5V, Siyah → GND, Sarı (data) → pin 2. Data ile 5V arasına 4,7 kΩ direnç tak."),
      a("LCD'yi bağla", "LCD I2C: VCC → 5V, GND → GND, SDA → A4, SCL → A5 (Uno)."),
      a("Kodu yükle", "Ekranda bir şey görünmezse LCD adresini 0x3F olarak dene ve I2C modülündeki kontrast vidasını çevir."),
      a("Yerleştir", "Sadece prob ucunu suya daldır; Arduino ve ekranı akvaryumdan uzakta, kuru yerde tut."),
    ],
    ipuclari: ["Tropikal balıklar için ideal aralık genelde 24–28 °C."],
    guvenlik: [
      "Arduino'yu ve kabloları sudan uzak tut; sadece su geçirmez prob suya girer.",
      "Sadece düşük voltajlı 5 V USB adaptör kullan.",
    ],
    kod: `#include <OneWire.h>
#include <DallasTemperature.h>
#include <LiquidCrystal_I2C.h>

OneWire hat(2);
DallasTemperature sensor(&hat);
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  sensor.begin();
  lcd.init();
  lcd.backlight();
}

void loop() {
  sensor.requestTemperatures();
  float c = sensor.getTempCByIndex(0);

  lcd.setCursor(0, 0);
  lcd.print("Su: ");
  lcd.print(c, 1);
  lcd.print((char)223);
  lcd.print("C    ");

  lcd.setCursor(0, 1);
  if (c < 24)      lcd.print("Soguk!          ");
  else if (c > 28) lcd.print("Sicak!          ");
  else             lcd.print("Ideal           ");

  delay(1000);
}`,
  },
  {
    id: "park-sensoru", kategoriId: "elektronik", ikon: "car-brake-alert",
    ad: "Ultrasonik Park Sensörü", zorluk: "Orta", sure: "1,5 saat",
    ozet: "Engel yaklaştıkça hızlanan bip sesiyle mesafe uyarıcı.",
    malzemeler: [
      m("ps1", "Arduino Uno / Nano", "1 adet", true),
      m("ps2", "HC-SR04 ultrasonik sensör", "1 adet"),
      m("ps3", "Pasif buzzer", "1 adet"),
      m("ps4", "Breadboard", "1 adet", true),
      m("ps5", "Jumper kablo", "10 adet"),
    ],
    adimlar: [
      a("Sensörü bağla", "HC-SR04: VCC → 5V, GND → GND, Trig → pin 9, Echo → pin 10."),
      a("Buzzer'ı bağla", "Buzzer (+) → pin 8, (−) → GND."),
      a("Kodu yükle", "Kodu yükle; elini sensöre yaklaştırınca bip hızlanmalı."),
      a("Kutula", "İstersen garaj duvarına montaj için küçük bir kutuya yerleştir."),
    ],
    ipuclari: ["Sensör 2 cm – 4 m arası ölçer; yumuşak yüzeyler (kumaş) sesi emer."],
    guvenlik: ["Bu bir hobi projesidir; araçta güvenlik ekipmanı yerine kullanma."],
    kod: `const int TRIG = 9, ECHO = 10, BUZZER = 8;

void setup() {
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(BUZZER, OUTPUT);
}

void loop() {
  digitalWrite(TRIG, LOW);  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH); delayMicroseconds(10);
  digitalWrite(TRIG, LOW);

  long sure = pulseIn(ECHO, HIGH, 30000);
  int cm = sure * 0.034 / 2;

  if (cm > 0 && cm < 100) {
    tone(BUZZER, 1500, 50);
    delay(map(cm, 0, 100, 60, 600)); // yakınsa hızlı bip
  } else {
    delay(200);
  }
}`,
  },
];

export const PROJELER: Proje[] = [...ILK_PROJELER, ...COCUK_DOGA, ...EL_SANATLARI, ...TEKNIK_EV];

export const projeBul = (id: string) => PROJELER.find((p) => p.id === id)!;
export const kategoriProjeleri = (kid: string) => PROJELER.filter((p) => p.kategoriId === kid);
