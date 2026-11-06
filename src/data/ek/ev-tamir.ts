import { Proje } from "../types";
import { kategoriProjesi } from "../yardimci";

const p = kategoriProjesi("ev-tamir");
const DELME =
  "Duvarı delmeden önce kablo-boru dedektörüyle tara; prizlerin ve anahtarların dikey-yatay hattında delme.";
const GOZ = "Delme ve kazıma işlerinde koruyucu gözlük ve toz maskesi tak.";
const MERDIVEN = "Sağlam ve kilitli merdiven kullan; en üst basamakta durma.";
const MATKAP = ["Darbeli matkap + matkap uçları", "1 set", true] as [string, string, true];

// Ev Tamiratı: 17 ek proje (toplam 20)
export const EV_TAMIR_EK: Proje[] = [
  p(
    "kapi-gicirtisi",
    "door",
    "Gıcırdayan Kapıyı Susturma",
    "Kolay",
    "15 dk",
    "Menteşe pimlerini çıkarıp yağlayarak gıcırtıyı giderme.",
    [
      ["Silikon sprey veya beyaz lityum gres", "1 adet"],
      ["Çivi ve çekiç", "1 set", true],
      ["Bez", "1 adet"],
    ],
    [
      ["Destek", "Kapıyı kapalı konuma getir veya altına kama koy."],
      ["Pim", "Menteşe pimini alttan çivi ve çekiçle yukarı iterek çıkar (bir seferde bir menteşe)."],
      ["Temizle ve yağla", "Pimi bezle temizleyip gresle, yerine tak."],
      ["Dene", "Kapıyı birkaç kez açıp kapat, taşan yağı sil."],
    ],
    ["Yemek yağı kullanma; toz toplar ve kokar."],
    ["Tüm pimleri aynı anda çıkarma; kapı düşebilir."],
  ),

  p(
    "kapi-ayari",
    "door-closed",
    "Yere Sürten / Kapanmayan Kapı Ayarı",
    "Orta",
    "30 dk",
    "Menteşe vidalarını sıkarak veya ayarlayarak kapıyı hizalama.",
    [
      ["Tornavida seti", "1 set", true],
      ["Daha uzun ahşap vidası (5×60 mm)", "4 adet"],
      ["Tebeşir", "1 adet"],
    ],
    [
      ["Teşhis", "Kapının sürttüğü yeri tebeşirle bul."],
      ["Vidaları sık", "Önce tüm menteşe vidalarını sık; gevşek vida en sık nedendir."],
      ["Uzun vida", "Üst menteşenin kasaya giren vidasını uzun vidayla değiştir; kapı yukarı çekilir."],
      ["Ayarlı menteşe", "Ayarlı (3D) menteşelerde alyanla yükseklik ve yan ayarı yap."],
    ],
    ["Mevsimsel şişmede rendelemeden önce nem düşene kadar bekle."],
    ["Kapıyı menteşeden çıkarman gerekirse iki kişi çalış; ağırdır."],
  ),

  p(
    "lavabo-sifon-temizligi",
    "pipe",
    "Tıkalı Lavabo Sifonu Temizleme",
    "Kolay",
    "30 dk",
    "Kimyasal kullanmadan sifonu söküp temizleme.",
    [
      ["Kova", "1 adet"],
      ["Lastik eldiven", "1 çift", true],
      ["Eski diş fırçası", "1 adet"],
      ["Lavabo pompası", "1 adet", true],
    ],
    [
      ["Pompa", "Önce taşma deliğini ıslak bezle kapatıp pompayla dene."],
      ["Kova", "Sifonun altına kova koy."],
      ["Sök", "Sifon somunlarını elle gevşetip parçaları çıkar."],
      ["Temizle", "Saç ve tortuyu temizle, contaları kontrol et."],
      ["Tak", "Contaları yerine oturtup el sıkılığında tak, suyu açıp sızıntı kontrol et."],
    ],
    ["Plastik somunları penseyle aşırı sıkma; çatlar."],
    [
      "Kimyasal açıcı kullandıysan sifonu sökmeden önce bol suyla durula; sıçrama yakabilir.",
      "Farklı lavabo açıcıları karıştırma; zehirli gaz oluşabilir.",
    ],
  ),

  p(
    "rezervuar-ic-takim",
    "toilet",
    "Sürekli Su Akıtan Rezervuar Tamiri",
    "Orta",
    "1 saat",
    "Rezervuar iç takımında şamandıra ve contayı ayarlama veya değiştirme.",
    [
      ["Rezervuar iç takım seti (doldurma + boşaltma)", "1 set"],
      ["Ayarlı pense", "1 adet", true],
      ["Sünger + kova", "1 set"],
    ],
    [
      [
        "Teşhis",
        "Kazana birkaç damla gıda boyası damlat; 15 dk içinde klozete renk geliyorsa boşaltma contası kaçırıyordur.",
      ],
      ["Şamandıra", "Su taşma borusuna akıyorsa şamandıra seviyesini düşür."],
      ["Vanayı kapat", "Ara musluğu kapatıp sifonu çek, kalan suyu süngerle al."],
      ["Değiştir", "Arızalı doldurma veya boşaltma ünitesini yenisiyle değiştir."],
      ["Test", "Musluğu aç, seviye ve sızıntıyı kontrol et."],
    ],
    ["Sızdıran rezervuar ayda tonlarca su harcayabilir."],
    ["Porselen kazanın vidalarını aşırı sıkma; çatlar."],
  ),

  p(
    "dolap-mentese-ayari",
    "wardrobe-outline",
    "Dolap Kapağı Menteşe Ayarı",
    "Kolay",
    "15 dk",
    "Sarkan veya hizasız mutfak dolabı kapaklarını düzeltme.",
    [
      ["Yıldız tornavida", "1 adet", true],
      ["Yedek dolap menteşesi (aynı tip)", "1 adet"],
      ["El feneri", "1 adet", true],
    ],
    [
      ["Tanı", "Kapaklar arası boşluğu gözle ve hangi yöne kaydığını belirle."],
      ["Yan ayar", "Menteşenin ön vidasıyla kapağı sağa-sola kaydır."],
      ["Derinlik", "Arka vidayla kapağı gövdeye yaklaştır veya uzaklaştır."],
      ["Yükseklik", "Montaj plakası vidalarını gevşetip yukarı-aşağı ayarla."],
    ],
    ["Her vidayı çeyrek tur çevirip sonucu kontrol et."],
    ["Kapak yerinden çıkarsa düşmemesi için altından tut."],
  ),

  p(
    "raf-montaji",
    "bookshelf",
    "Duvara Sağlam Raf Montajı",
    "Orta",
    "1 saat",
    "Duvar tipine göre doğru dübel seçerek raf asma.",
    [
      MATKAP,
      ["Duvar tipine uygun dübel + vida", "1 set"],
      ["Su terazisi", "1 adet", true],
      ["Kablo-boru dedektörü", "1 adet", true],
      ["Raf ve konsol", "1 set"],
    ],
    [
      ["Duvarı tanı", "Beton/tuğla için plastik dübel, alçıpan için kelebek veya metal alçıpan dübeli kullan."],
      ["Tara", "Dedektörle kablo ve boru hattı tara."],
      ["İşaretle", "Terazi ile konsol deliklerini işaretle."],
      ["Del", "Dübel çapında del, tozu al, dübeli çakıp konsolu vidala."],
      ["Test", "Rafa kademeli olarak yük koy."],
    ],
    ["Alçıpanda mümkünse arkadaki metal profile (dikmeye) vidala."],
    [DELME, GOZ],
  ),

  p(
    "duvar-boyama",
    "format-paint",
    "Oda Duvarı Boyama",
    "Orta",
    "1–2 gün",
    "Hazırlıktan son kata kadar düzgün duvar boyama.",
    [
      ["İç cephe boyası", "7,5 L"],
      ["Astar", "2,5 L"],
      ["Rulo + tava + uzatma sapı", "1 set", true],
      ["Kestirme fırçası", "1 adet", true],
      ["Maskeleme bandı + naylon örtü", "1 set"],
    ],
    [
      ["Hazırlık", "Eşyaları ortaya topla, örtüyle kapat, priz kapaklarını sök."],
      ["Tamir", "Çatlak ve delikleri macunla doldurup zımparala."],
      ["Astar", "Tamir yerlerine veya renk değişiminde tüm duvara astar sür."],
      ["Kestirme", "Köşe ve tavan birleşimlerini fırçayla kestir."],
      ["Rulo", "W şeklinde rulo çekip iki kat uygula; katlar arası kuruma süresini bekle."],
    ],
    ["Bandı boya tam kurumadan, açılı şekilde çek; kenar düzgün kalır."],
    ["Priz kapaklarını sökmeden önce sigortayı kapat.", "Ortamı havalandır.", MERDIVEN],
  ),

  p(
    "fayans-derz-yenileme",
    "grid",
    "Banyo Fayans Derzi Yenileme",
    "Orta",
    "1 gün",
    "Kararan veya dökülen derzleri kazıyıp yenileme.",
    [
      ["Derz kazıyıcı", "1 adet", true],
      ["Hazır derz dolgusu", "2 kg"],
      ["Lastik mala", "1 adet", true],
      ["Sünger + kova", "1 set"],
    ],
    [
      ["Kazı", "Eski derzi 2–3 mm derinliğe kadar kazı, tozunu al."],
      ["Karıştır", "Derz dolgusunu talimata göre hazırla."],
      ["Doldur", "Lastik malayla derzlere çapraz bastırarak doldur."],
      ["Sil", "15–20 dk sonra nemli süngerle fazlasını sil."],
      ["Kür", "24 saat ıslatma, sonra derz koruyucu sür."],
    ],
    ["Küçük alanda dene; derz çabuk sertleşir."],
    [GOZ, "Derz dolgusu çimento içerir; eldiven tak."],
  ),

  p(
    "pencere-fitili",
    "window-closed-variant",
    "Pencere ve Kapı Fitili Değişimi",
    "Kolay",
    "1 saat",
    "Hava kaçıran pencereye yeni fitil takarak ısı kaybını azaltma.",
    [
      ["Kendinden yapışkanlı köpük/kauçuk fitil (D veya P profil)", "10 m"],
      ["Makas", "1 adet", true],
      ["İzopropil alkol + bez", "1 set"],
    ],
    [
      ["Kontrol", "Pencereye kağıt sıkıştırıp kapat; kağıt kolayca çıkıyorsa fitil yetersiz."],
      ["Sök", "Eski fitili sök, yüzeyi alkolle temizle."],
      ["Yapıştır", "Fitili gererek değil, sererek yapıştır; köşelerde kes."],
      ["Test", "Pencereyi kapatıp kağıt testini tekrarla."],
    ],
    ["PVC pencerelerde kanal tipi fitil değiştirilebilir; kesitini alıp hırdavatçıda eşleştir."],
    ["Yapıştırıcı +5 °C'nin altında tutmaz; soğuk günde yapma."],
  ),

  p(
    "kapi-kolu-degisimi",
    "door-sliding",
    "Kapı Kolu Değişimi",
    "Kolay",
    "20 dk",
    "Sarkan veya kırılan iç kapı kolunu değiştirme.",
    [
      ["Yeni kapı kolu seti (aynı aks ölçüsü)", "1 set"],
      ["Tornavida + alyan seti", "1 set", true],
      ["Silikon sprey (yay yağlama)", "1 adet"],
    ],
    [
      ["Ölç", "Kilit gövdesinin kare mil ölçüsünü (genelde 8 mm) kontrol et."],
      ["Sök", "Rozet kapağını çıkarıp vidaları sök, kolu çıkar."],
      ["Tak", "Yeni kolun milini geçirip iki tarafı vidala."],
      ["Test", "Kolun kendiliğinden yatay konuma döndüğünü kontrol et."],
    ],
    ["Kol sarkıyorsa sorun genelde rozet içindeki yaydadır."],
    ["Değişim sırasında kapıyı kapatma; içeride kilitli kalabilirsin."],
  ),

  p(
    "laminat-cizik-tamiri",
    "floor-plan",
    "Parke / Laminat Çizik Tamiri",
    "Kolay",
    "30 dk",
    "Renkli dolgu kalemi ve mumla çizikleri gizleme.",
    [
      ["Parke tamir mum ve kalem seti", "1 set"],
      ["Plastik spatula", "1 adet", true],
      ["Yumuşak bez", "1 adet"],
    ],
    [
      ["Renk", "Zemin rengine en yakın tonu seç; gerekirse iki tonu karıştır."],
      ["Doldur", "Mumu ısıtıp çiziğe bastır."],
      ["Düzle", "Spatulayla fazlasını sıyır."],
      ["Damar", "Gerekirse kalemle ahşap damarını çiz, bezle parlat."],
    ],
    ["Mobilya ayaklarına keçe yapıştırarak yeni çizikleri önle."],
    ["Mum ısıtıcısı kullanıyorsan sıcak uca dokunma."],
  ),

  p(
    "dus-basligi-kirec",
    "shower-head",
    "Duş Başlığı Kireç Temizliği",
    "Kolay",
    "1 saat",
    "Sirke ile kireçlenen duş başlığını açma.",
    [
      ["Beyaz sirke", "500 ml"],
      ["Kilitli poşet", "1 adet"],
      ["Lastik bant", "1 adet"],
      ["Eski diş fırçası", "1 adet"],
    ],
    [
      ["Doldur", "Poşete sirke doldur."],
      ["Daldır", "Poşeti başlığa geçirip lastik bantla sabitle."],
      ["Bekle", "1–2 saat beklet."],
      ["Fırçala", "Delikleri fırçayla temizleyip suyu açarak durula."],
    ],
    ["Silikon memeli başlıklarda memeleri parmakla ovarak kireci kır."],
    ["Altın veya pirinç kaplamalı başlıklarda sirke kaplamaya zarar verebilir; kısa süre uygula."],
  ),

  p(
    "tv-duvar-montaji",
    "television",
    "Televizyonu Duvara Asma",
    "Orta",
    "1,5 saat",
    "VESA ölçüsüne uygun askı aparatıyla televizyonu duvara monte etme.",
    [
      ["TV'nin ağırlığına ve VESA ölçüsüne uygun askı aparatı", "1 adet"],
      MATKAP,
      ["Su terazisi", "1 adet", true],
      ["Kablo-boru dedektörü", "1 adet", true],
    ],
    [
      ["Uyum", "TV arkasındaki VESA delik aralığını ve ağırlığını aparat değerleriyle karşılaştır."],
      ["Yükseklik", "Ekran ortası oturma pozisyonunda göz hizasında olmalı."],
      ["Duvar", "Dedektörle tara, aparatı terazide işaretle, uygun dübelle vidala."],
      ["Tak", "Kolları TV'ye vidala, iki kişiyle askıya as, emniyet vidalarını sık."],
    ],
    ["Kabloları kablo kanalı ile duvar boyunca gizle."],
    [DELME, "TV'yi iki kişiyle kaldır.", "Alçıpan duvarlara ağır TV'yi sadece dikmeye veya özel aparatla monte et."],
  ),

  p(
    "kornis-montaji",
    "curtains",
    "Korniş / Perde Rayı Takma",
    "Kolay",
    "45 dk",
    "Pencere üstüne düz ve sağlam korniş montajı.",
    [
      ["Korniş veya perde rayı seti", "1 set"],
      MATKAP,
      ["Su terazisi + metre", "1 set", true],
      ["Dübel + vida", "1 set"],
    ],
    [
      ["Ölç", "Pencere kasasının 10–15 cm üstünden ve her iki yandan 15–20 cm taşacak şekilde işaretle."],
      ["Terazi", "İşaretleri teraziyle hizala."],
      ["Del ve tak", "Tara, del, dübel çak, braketleri vidala."],
      ["Ray", "Korniş çubuğunu veya rayı braketlere oturt."],
    ],
    ["Perdeyi tavana yakın asmak tavanı yüksek gösterir."],
    [DELME, GOZ, MERDIVEN],
  ),

  p(
    "duvar-kagidi",
    "wallpaper",
    "Duvar Kağıdı Uygulama",
    "Orta",
    "1 gün",
    "Desen eşleştirerek duvar kağıdı yapıştırma.",
    [
      ["Duvar kağıdı", "rulo sayısı duvara göre"],
      ["Duvar kağıdı tutkalı", "1 paket"],
      ["Tutkal rulosu + plastik spatula", "1 set", true],
      ["Maket bıçağı (bol yedek uçlu)", "1 adet", true],
      ["Çekül veya lazer terazi", "1 adet", true],
    ],
    [
      ["Hazırla", "Duvarı temizle, gerekirse astarla."],
      ["Dikey çizgi", "Köşeden bir rulo genişliği uzaklıkta çekülle dikey çizgi çiz."],
      ["Tutkal", "Kağıt tipine göre duvara veya kağıda tutkal sür."],
      ["Yapıştır", "İlk şeridi çizgiye hizala, ortadan dışa doğru spatulayla kabarcıkları al."],
      ["Eşleştir", "Sonraki şeritlerde deseni eşleştir, tavan ve süpürgelikte fazlasını kes."],
    ],
    ["Her kesimde yeni bıçak ucu kullan; kör uç ıslak kağıdı yırtar."],
    ["Prizlerin etrafını keserken sigortayı kapat.", MERDIVEN],
  ),

  p(
    "kuf-temizligi",
    "spray-bottle",
    "Banyo ve Duvar Küfü Temizliği",
    "Kolay",
    "1 saat",
    "Yüzey küfünü temizleyip tekrar oluşmasını önleme.",
    [
      ["Küf temizleyici sprey veya seyreltilmiş çamaşır suyu", "1 adet"],
      ["Nitril eldiven + maske + gözlük", "1 set", true],
      ["Fırça + bez", "1 set"],
      ["Küf önleyici boya (isteğe bağlı)", "1 adet"],
    ],
    [
      ["Havalandır", "Pencereyi aç, koruyucuları tak."],
      ["Uygula", "Temizleyiciyi püskürtüp talimattaki süre kadar beklet."],
      ["Fırçala ve durula", "Fırçalayıp nemli bezle sil, kurut."],
      ["Önle", "Nemi azalt: duş sonrası havalandır, aspiratör kullan."],
    ],
    ["Küf sürekli dönüyorsa kaynak genelde yalıtım eksikliği veya sızıntıdır; onu çöz."],
    [
      "Çamaşır suyunu asla amonyak veya asit içeren temizleyicilerle karıştırma; zehirli gaz oluşur.",
      "Büyük alanlı (1 m²'den fazla) küf için profesyonel destek al.",
    ],
  ),

  p(
    "radyator-hava-alma",
    "radiator",
    "Radyatör Hava Alma",
    "Kolay",
    "20 dk",
    "Üstü soğuk kalan radyatörün havasını alarak verimi artırma.",
    [
      ["Radyatör hava alma anahtarı veya düz tornavida", "1 adet", true],
      ["Kova veya kap", "1 adet"],
      ["Bez + küçük kap", "1 set"],
    ],
    [
      ["Kontrol", "Kalorifer çalışırken radyatörün üstü soğuk, altı sıcaksa hava vardır."],
      ["Kapat", "Kombiyi/pompayı kapatıp radyatörün biraz soğumasını bekle."],
      ["Aç", "Hava alma vanasının altına bez tutup çeyrek tur aç; tıslama sesi gelir."],
      ["Kapat", "Su gelmeye başlayınca vanayı kapat."],
      ["Basınç", "Kombi basıncını kontrol et; 1–1,5 bar altındaysa kılavuza göre su takviyesi yap."],
    ],
    ["Evdeki en alt kattaki radyatörden başla, yukarı doğru ilerle."],
    ["Çıkan su sıcak olabilir; bezle tut ve yüzünü yaklaştırma."],
  ),
];
