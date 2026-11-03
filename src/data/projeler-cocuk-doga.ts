import { Proje } from "./types";
import { a, m } from "./yardimci";

// Maket & Diorama, RC & Drone, Terraryum, Kuş Evi & Evcil Hayvan, Bahçe & Saksı
export const COCUK_DOGA: Proje[] = [
  // ───────────────────────── MAKET & DİORAMA ─────────────────────────
  {
    id: "plastik-maket", kategoriId: "maket", ikon: "airplane",
    ad: "Plastik Uçak Maketi Montajı ve Boyama", zorluk: "Orta", sure: "2–3 gün (kuruma dahil)", yas: "12+ yaş",
    ozet: "1/72 ölçekli bir uçak maketini temiz birleştirme, boyama ve çıkartma uygulama.",
    malzemeler: [
      m("pm1", "1/72 ölçek plastik uçak maketi", "1 kutu"),
      m("pm2", "Maket yapıştırıcısı (ince uçlu)", "1 adet"),
      m("pm3", "Akrilik maket boyası seti", "1 set"),
      m("pm4", "Maket astarı (sprey)", "1 adet"),
      m("pm5", "İnce fırça seti (000–2 numara)", "1 set"),
      m("pm6", "Yan keski (maket pensesi)", "1 adet", true),
      m("pm7", "Maket bıçağı", "1 adet", true),
      m("pm8", "Zımpara çubuğu (400–1000 kum)", "2 adet"),
    ],
    adimlar: [
      a("Talimatı incele", "Kutudaki şemayı baştan sona oku; parçaların hangi adımda takılacağını ve renk kodlarını işaretle."),
      a("Parçaları kes", "Parçaları yan keskiyle dallarından kes; kalan çapakları maket bıçağı ve zımpara çubuğuyla düzelt."),
      a("Kokpiti boya ve birleştir", "İç parçalar sonradan boyanamaz; önce kokpiti boya, kuruyunca gövde yarılarını yapıştır."),
      a("Ek yerlerini düzelt", "Kuruyan ek yerlerini 400 sonra 1000 kumla zımparala."),
      a("Astarla", "İnce kat sprey astar at; boyanın tutunmasını ve kusurları görmeyi sağlar."),
      a("Boya", "Açık renklerden koyuya doğru, ince ve birkaç kat halinde boya."),
      a("Çıkartmaları uygula", "Su kaydırmalı çıkartmayı ılık suda 20 saniye beklet, yerine kaydır, peçeteyle suyunu al."),
    ],
    ipuclari: [
      "Boyayı biraz suyla incelterek iki ince kat sürmek, tek kalın kattan çok daha düzgün sonuç verir.",
      "Küçük parçaları kürdana geçici olarak takarak boyamak elle tutmaktan kolaydır.",
    ],
    guvenlik: [
      "Yapıştırıcı ve sprey astarı havalandırılan ortamda kullan.",
      "Maket bıçağıyla her zaman vücudundan uzağa doğru kes.",
    ],
  },
  {
    id: "diorama-zemin", kategoriId: "maket", ikon: "image-filter-hdr",
    ad: "Diorama Zemini: Çim, Toprak ve Kaya", zorluk: "Kolay", sure: "3 saat + 1 gün kuruma",
    ozet: "Maketlerin altına koymak için gerçekçi doğa zemini.",
    malzemeler: [
      m("dz1", "MDF taban 20×30 cm", "1 adet"),
      m("dz2", "Strafor (köpük) levha 2 cm", "1 adet"),
      m("dz3", "Hazır alçı veya duvar macunu", "500 g"),
      m("dz4", "Maket çim tozu (statik çim)", "1 paket"),
      m("dz5", "Maket çakıl / kum", "1 paket"),
      m("dz6", "Beyaz tutkal (PVA)", "1 adet"),
      m("dz7", "Akrilik boya (kahverengi, gri, siyah)", "3 adet"),
    ],
    adimlar: [
      a("Araziyi şekillendir", "Straforu parçalar halinde keserek tepe ve yükseltiler oluştur, tabana tutkalla yapıştır."),
      a("Yüzeyi kapla", "Strafor ve tabanın üstüne ince kat alçı sür; kaya kısımlarını buruşuk folyo bastırarak dokulandır."),
      a("Boya", "Kuruyunca toprağı kahverengi, kayaları gri boya; kayalara kuru fırçayla açık gri vurarak hacim ver."),
      a("Çakıl ekle", "Patika ve dere yatağına tutkal sür, üstüne kum ve çakıl serp."),
      a("Çimlendir", "Çim alanlarına sulandırılmış tutkal sür, çim tozunu serp; fazlasını ters çevirip silkele."),
    ],
    ipuclari: [
      "Çim tozunu serpip üstüne hafifçe üflersen lifler dikleşir ve daha gerçekçi görünür.",
      "Gerçek doğa fotoğraflarına bakarak renk seçmek sonucu çok iyileştirir.",
    ],
    guvenlik: [
      "Straforu kızgın telle keseceksen ortamı mutlaka havalandır; çıkan duman zararlıdır.",
    ],
  },
  {
    id: "mini-oda", kategoriId: "maket", ikon: "sofa-outline",
    ad: "Kutu İçinde Minyatür Oda (Roombox)", zorluk: "Orta", sure: "1–2 gün",
    ozet: "Ayakkabı kutusu boyutunda, ışıklı minyatür bir oda.",
    malzemeler: [
      m("mo1", "Kontrplak veya kalın mukavva 3 mm", "1 levha"),
      m("mo2", "Balsa çıta seti", "1 paket"),
      m("mo3", "Mini LED (pilli, sıcak beyaz)", "1 adet"),
      m("mo4", "Maket duvar kağıdı / desenli kağıt", "2 yaprak"),
      m("mo5", "Sıcak silikon tabancası + çubuk", "1 set", true),
      m("mo6", "Akrilik boya seti", "1 set"),
      m("mo7", "Maket bıçağı + cetvel", "1 set", true),
    ],
    adimlar: [
      a("Kutuyu kur", "Taban 25×18 cm, arka ve iki yan duvar 18 cm yüksekliğinde kes; ön tarafı açık kalacak şekilde birleştir."),
      a("Zemin ve duvarlar", "Zemine balsa çıtalarla parke döşe, duvarlara desenli kağıt yapıştır."),
      a("Pencere aç", "Yan duvara pencere kesip arkasına asetat (şeffaf plastik) yapıştır."),
      a("Mobilyaları yap", "Balsa ve mukavvadan masa, raf ve yatak gibi parçaları 1/12 ölçekte (1 cm = 12 cm) yap ve boya."),
      a("Işıklandır", "LED'i tavana sabitle, pil yuvasını kutunun arkasına gizle."),
    ],
    ipuclari: [
      "Gerçek bir 75 cm masa 1/12 ölçekte 6,25 cm olur; ölçekte tutarlı kalmak gerçekçiliği artırır.",
      "Kitap, saksı gibi küçük detaylar odayı canlandırır.",
    ],
    guvenlik: [
      "Sıcak silikon ciddi yanık yapabilir; çocuklar yetişkin gözetiminde kullanmalı.",
      "Kesimlerde cetveli sıkı tut, bıçağı kendine doğru çekme.",
    ],
  },

  // ───────────────────────── RC & DRONE ─────────────────────────
  {
    id: "bluetooth-araba", kategoriId: "rc", ikon: "car-connected",
    ad: "Telefonla Kumandalı Arduino Araba", zorluk: "Orta", sure: "3–4 saat", yas: "12+ yaş (gözetimle)",
    ozet: "Bluetooth modülüyle telefondan yönetilen iki motorlu araba.",
    malzemeler: [
      m("ba1", "2WD akıllı araba şasi kiti (motorlu)", "1 kit"),
      m("ba2", "Arduino Uno (uyumlu)", "1 adet", true),
      m("ba3", "L298N motor sürücü kartı", "1 adet"),
      m("ba4", "HC-05 Bluetooth modülü", "1 adet"),
      m("ba5", "Direnç 1 kΩ ve 2 kΩ", "1'er adet"),
      m("ba6", "AA pil yuvası (4'lü) + pil", "1 set"),
      m("ba7", "Jumper kablo seti", "1 paket"),
    ],
    adimlar: [
      a("Şasiyi kur", "Kitteki motorları, tekerlekleri ve sarhoş tekerleği şasiye vidala."),
      a("Motor sürücüsünü bağla", "Motorları L298N'nin OUT1-2 ve OUT3-4 uçlarına bağla. IN1–IN4 pinlerini Arduino 5, 6, 9, 10'a bağla."),
      a("Bluetooth'u bağla", "HC-05: VCC→5V, GND→GND, TX→Arduino pin 2. Arduino pin 3 → 1 kΩ → HC-05 RX, RX ile GND arasına 2 kΩ (gerilim bölücü)."),
      a("Gücü bağla", "Pil yuvasını L298N'nin 12V girişine, L298N GND'sini Arduino GND'sine bağla."),
      a("Kodu yükle", "Kodu yüklerken Bluetooth bağlıysa sorun olmaz; çünkü yazılımsal seri port (pin 2–3) kullanıyoruz."),
      a("Telefona bağlan", "Play Store'dan bir 'Bluetooth RC Controller' uygulaması kur, HC-05 ile eşleştir (şifre genelde 1234)."),
    ],
    ipuclari: [
      "Araba ters gidiyorsa o motorun iki kablosunu yer değiştir.",
      "Uygulamalar genelde F/B/L/R/S harfleri gönderir; kod bunlara göre yazıldı.",
    ],
    guvenlik: [
      "Pilleri ters takma; kısa devre ısınmaya yol açar.",
      "Lehim yapacaksan havalandırma ve lehim standı kullan.",
    ],
    kod: `#include <SoftwareSerial.h>
SoftwareSerial bt(2, 3); // RX, TX

const int IN1 = 5, IN2 = 6, IN3 = 9, IN4 = 10;

void motor(int a, int b, int c, int d) {
  digitalWrite(IN1, a); digitalWrite(IN2, b);
  digitalWrite(IN3, c); digitalWrite(IN4, d);
}

void setup() {
  pinMode(IN1, OUTPUT); pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT); pinMode(IN4, OUTPUT);
  bt.begin(9600);
}

void loop() {
  if (!bt.available()) return;
  char k = bt.read();
  if (k == 'F') motor(1, 0, 1, 0);       // ileri
  else if (k == 'B') motor(0, 1, 0, 1);  // geri
  else if (k == 'L') motor(0, 1, 1, 0);  // sola dön
  else if (k == 'R') motor(1, 0, 0, 1);  // sağa dön
  else if (k == 'S') motor(0, 0, 0, 0);  // dur
}`,
  },
  {
    id: "depron-planor", kategoriId: "rc", ikon: "airplane-takeoff",
    ad: "Elle Atılan Depron Planör", zorluk: "Kolay", sure: "2 saat", yas: "8+ yaş (gözetimle)",
    ozet: "Motorsuz, hafif köpük levhadan uzun süzülen planör.",
    malzemeler: [
      m("dp1", "Depron / XPS köpük levha 3–6 mm", "1 levha"),
      m("dp2", "Karbon veya ahşap çubuk 4 mm (gövde)", "50 cm"),
      m("dp3", "Köpük uyumlu yapıştırıcı (UHU Por vb.)", "1 adet"),
      m("dp4", "Oyun hamuru veya kurşun macun (ağırlık)", "20 g"),
      m("dp5", "Maket bıçağı + cetvel", "1 set", true),
      m("dp6", "Zımpara kağıdı 240", "1 adet"),
    ],
    adimlar: [
      a("Parçaları kes", "Kanat 60×10 cm, yatay kuyruk 20×6 cm, dikey kuyruk 8×7 cm kes."),
      a("Kanada profil ver", "Kanadın ön kenarını zımparayla yuvarlat, arka kenarı incelt."),
      a("Dihedral ver", "Kanadı ortadan hafifçe kesip uçlar 4–5 cm yukarıda kalacak şekilde açıyla yapıştır; dengeyi artırır."),
      a("Birleştir", "Kanadı çubuğun önden 1/3'üne, kuyrukları arka uca yapıştır."),
      a("Ağırlık merkezini ayarla", "Burna ağırlık ekleyerek uçağı kanat genişliğinin önden %30'u noktasından parmakla tuttuğunda dengede kalacak hale getir."),
      a("Deneme uçuşu", "Çimenlik alanda burnu hafif aşağıda, düz ve yumuşak at; dalıyorsa ağırlığı azalt, havalanıp düşüyorsa artır."),
    ],
    ipuclari: [
      "Rüzgarsız bir akşamüstü en iyi deneme zamanıdır.",
      "Kuyruğun arka kenarını hafifçe yukarı bükmek burun kalkışını düzeltir.",
    ],
    guvenlik: [
      "İnsanlara, hayvanlara ve araçlara doğru atma.",
      "Kesimi yetişkin yapmalı.",
    ],
  },
  {
    id: "mini-drone", kategoriId: "rc", ikon: "quadcopter",
    ad: "Mini FPV Drone (Tiny Whoop) Montajı", zorluk: "Zor", sure: "1 gün",
    ozet: "Pervane korumalı, evde uçabilen küçük drone'u parça parça birleştirme.",
    malzemeler: [
      m("md1", "65–75 mm whoop gövdesi (pervane korumalı)", "1 adet"),
      m("md2", "1S uçuş kontrol kartı (AIO, alıcılı)", "1 adet"),
      m("md3", "0702/0802 fırçasız motor", "4 adet"),
      m("md4", "31–40 mm pervane seti", "1 set"),
      m("md5", "1S LiPo pil 300–450 mAh", "2 adet"),
      m("md6", "1S LiPo şarj cihazı (dengeli)", "1 adet", true),
      m("md7", "Uyumlu kumanda (radyo)", "1 adet", true),
      m("md8", "Havya + lehim teli", "1 set", true),
    ],
    adimlar: [
      a("Motorları tak", "Motorları gövdeye vidala; dönüş yönlerine dikkat et (çaprazlar aynı yönde)."),
      a("Kartı yerleştir", "Uçuş kartını titreşim lastikleriyle gövdenin ortasına, ok işareti öne bakacak şekilde oturt."),
      a("Motor kablolarını lehimle", "Motor kablolarını kısaltıp karttaki pedlere lehimle; lehimler parlak ve temiz olmalı."),
      a("Yazılımı ayarla", "Kartı bilgisayara bağla, Betaflight Configurator ile motor yönlerini ve kumanda eşleşmesini ayarla."),
      a("Pervaneleri tak", "Pervaneleri EN SON tak; yönlerini motorların dönüşüne göre kontrol et."),
      a("İlk uçuş", "Geniş, boş bir odada, düşük gazla ve 'angle' (dengeli) modda dene."),
    ],
    ipuclari: [
      "Test ve ayar sırasında pervaneleri takma; masada kaza en sık bu aşamada olur.",
      "Simülatörde birkaç saat pratik yapmak ilk uçuşta çok işe yarar.",
    ],
    guvenlik: [
      "LiPo pilleri gözetimsiz şarj etme, yanmaz bir şarj çantası kullan; şişmiş pili kullanma.",
      "Ayar yaparken pervaneleri mutlaka sök.",
      "Dış mekânda uçuracaksan bölgedeki drone kurallarını kontrol et; insanların üzerinden uçurma.",
    ],
  },

  // ───────────────────────── TERRARYUM ─────────────────────────
  {
    id: "kapali-terraryum", kategoriId: "terraryum", ikon: "bottle-tonic-outline",
    ad: "Kapalı Yosun Terraryumu", zorluk: "Kolay", sure: "1,5 saat",
    ozet: "Kendi suyunu döndüren, ayda bir bakım isteyen kapaklı cam bahçe.",
    malzemeler: [
      m("kt-a", "Kapaklı cam kavanoz (3–5 L)", "1 adet"),
      m("kt-b", "Drenaj taşı / ponza (lav taşı)", "500 g"),
      m("kt-c", "Aktif karbon (akvaryum)", "100 g"),
      m("kt-d", "Terraryum toprağı / torf karışımı", "2 L"),
      m("kt-e", "Canlı yosun", "1 paket"),
      m("kt-f", "Nem seven küçük bitki (fittonya, eğrelti)", "2–3 adet"),
      m("kt-g", "Uzun cımbız ve kaşık", "1 set", true),
    ],
    adimlar: [
      a("Drenaj katmanı", "Kavanozun dibine 2–3 cm drenaj taşı koy; fazla su burada toplanır."),
      a("Karbon", "Üstüne ince bir kat aktif karbon serp; koku ve küflenmeyi azaltır."),
      a("Toprak", "4–6 cm toprak koy, arkada yüksek önde alçak bir eğim ver."),
      a("Bitkileri dik", "Cımbızla bitkileri yerleştir, köklerini toprakla örtüp bastır."),
      a("Yosunu ser", "Yosunu boş alanlara parçalar halinde bastır."),
      a("Sula ve kapat", "Spreyle 10–15 kez püskürt, kapağı kapat. Aydınlık ama doğrudan güneş almayan bir yere koy."),
    ],
    ipuclari: [
      "Camda sürekli yoğun buhar varsa kapağı birkaç saat aç; hiç buhar yoksa biraz su püskürt.",
      "Sukulent ve kaktüsler kapalı terraryumda çürür; nem seven bitkiler seç.",
    ],
    guvenlik: ["Toprakla çalışırken eldiven kullan, sonra elini yıka."],
  },
  {
    id: "sukulent-terraryum", kategoriId: "terraryum", ikon: "cactus",
    ad: "Açık Sukulent Terraryumu", zorluk: "Kolay", sure: "1 saat",
    ozet: "Az sulama isteyen kaktüs ve sukulentlerle açık cam kase.",
    malzemeler: [
      m("st-a", "Geniş ağızlı cam kase", "1 adet"),
      m("st-b", "Kaktüs toprağı", "2 L"),
      m("st-c", "Dekoratif kum / ince çakıl", "500 g"),
      m("st-d", "Mini sukulent ve kaktüs", "3–5 adet"),
      m("st-e", "Dekor taşları", "1 avuç"),
      m("st-f", "Kalın eldiven", "1 çift", true),
    ],
    adimlar: [
      a("Çakıl katmanı", "Kasenin dibine 2 cm çakıl koy."),
      a("Toprak", "Üstüne 5 cm kaktüs toprağı koy."),
      a("Yerleşim", "Bitkileri saksılarından çıkar, kök toprağını hafifçe silkele ve yerleştir."),
      a("Üst kaplama", "Toprağın üstünü renkli kum veya ince çakılla kapla, taşlarla süsle."),
      a("İlk sulama", "Bir hafta bekle, sonra dibe ulaşacak kadar az sula; 2–3 haftada bir tekrarla."),
    ],
    ipuclari: [
      "Açık kaplarda drenaj deliği olmadığı için az sulamak en önemli kuraldır.",
      "Günde birkaç saat güneş alan pencere önü idealdir.",
    ],
    guvenlik: ["Kaktüsleri kalın eldivenle veya katlanmış kağıtla tut."],
  },
  {
    id: "asili-terraryum", kategoriId: "terraryum", ikon: "lightbulb-outline",
    ad: "Asılı Hava Bitkisi Terraryumu", zorluk: "Kolay", sure: "45 dk",
    ozet: "Topraksız yaşayan Tillandsia ile asılabilen küre terraryum.",
    malzemeler: [
      m("at-a", "Asılı cam küre (açık ağızlı)", "1 adet"),
      m("at-b", "Tillandsia (hava bitkisi)", "1–2 adet"),
      m("at-c", "Dekoratif kum veya yosun", "1 avuç"),
      m("at-d", "Jüt ip veya ince zincir", "1 m"),
      m("at-e", "Tavan kancası", "1 adet"),
    ],
    adimlar: [
      a("Tabanı hazırla", "Kürenin dibine ince bir kat kum veya kuru yosun koy."),
      a("Bitkiyi yerleştir", "Hava bitkisini toprağa gömmeden üstüne oturt."),
      a("Asma", "İpi küredeki halkadan geçir, aydınlık bir köşeye as."),
      a("Bakım", "Haftada bir bitkiyi çıkarıp 20 dakika suya batır, iyice silkeleyip kurutarak geri koy."),
    ],
    ipuclari: ["Bitkiyi ıslakken geri koyma; yaprak diplerinde kalan su çürütür."],
    guvenlik: ["Kancayı taşıyıcı bir yüzeye ve sağlam dübelle tak."],
  },

  // ───────────────────────── KUŞ EVİ & EVCİL HAYVAN ─────────────────────────
  {
    id: "kus-yuvasi", kategoriId: "kus-evi", ikon: "home-variant-outline",
    ad: "Ahşap Kuş Yuvası", zorluk: "Orta", sure: "3 saat",
    ozet: "Serçe ve baştankara gibi küçük kuşlar için yuva kutusu.",
    malzemeler: [
      m("ky1", "İşlenmemiş çam tahta 15 mm", "1,5 m"),
      m("ky2", "Paslanmaz ahşap vidası 3,5×35", "20 adet"),
      m("ky3", "Menteşe (küçük)", "1 adet"),
      m("ky4", "Panç / delik testere Ø32 mm", "1 adet", true),
      m("ky5", "Matkap", "1 adet", true),
      m("ky6", "Testere", "1 adet", true),
    ],
    adimlar: [
      a("Parçaları kes", "Ön/arka 12×25 cm, yanlar 12×20 cm, taban 12×12 cm, çatı 18×18 cm."),
      a("Giriş deliğini aç", "Ön parçaya üstten 6 cm aşağıda Ø32 mm delik aç; daha büyük delik saldırgan kuşları davet eder."),
      a("Havalandırma ve drenaj", "Yanların üst kısmına 2–3 küçük havalandırma, tabana 4 adet Ø6 mm drenaj deliği aç."),
      a("Birleştir", "Yanları, önü ve arkayı tabana vidala; içi boyamadan ham bırak."),
      a("Çatıyı tak", "Çatıyı menteşeyle tak ki sonbaharda yuvayı temizlemek için açılabilsin."),
      a("As", "Ağaca veya duvara 2–4 m yükseğe, giriş deliği hakim rüzgâra ve öğle güneşine bakmayacak şekilde as."),
    ],
    ipuclari: [
      "Giriş deliğinin altına tünek koyma; yırtıcıların yuvaya ulaşmasını kolaylaştırır.",
      "Yuvayı kuşlar terk ettikten sonra sonbaharda temizle.",
    ],
    guvenlik: [
      "Yuvanın içini boyama ve verniklemeyin; kuşlara zararlı olabilir.",
      "Yüksekte asarken sağlam bir merdiven kullan ve yanında biri olsun.",
    ],
  },
  {
    id: "kus-yemligi", kategoriId: "kus-evi", ikon: "seed-outline",
    ad: "Pet Şişeden Kuş Yemliği", zorluk: "Kolay", sure: "30 dk", yas: "6+ yaş (gözetimle)",
    ozet: "Atık şişe ve tahta kaşıklarla kışın kuşları besleyen yemlik.",
    malzemeler: [
      m("yk1", "1,5 L pet şişe (temiz, kuru)", "1 adet"),
      m("yk2", "Tahta kaşık", "2 adet"),
      m("yk3", "Kuş yemi karışımı", "500 g"),
      m("yk4", "Kalın ip veya tel", "1 m"),
      m("yk5", "Maket bıçağı", "1 adet", true),
    ],
    adimlar: [
      a("Kaşık deliklerini aç", "Şişenin alt kısmında karşılıklı iki delik aç; biri diğerinden 2 cm aşağıda olsun. Kaşığı içeriden dışarı geçir."),
      a("Yem deliğini büyüt", "Kaşık hazne tarafında, kaşığın üstüne gelen deliği yemin akacağı kadar (yaklaşık 8 mm) büyüt."),
      a("İkinci kaşık", "90° döndürüp birkaç cm yukarıda aynı işlemi tekrarla."),
      a("Doldur ve as", "Şişeyi yemle doldur, kapağına ip bağla ve kedilerin ulaşamayacağı bir dala as."),
    ],
    ipuclari: [
      "Ekmek verme; kuşlar için besleyici değildir.",
      "Yemliği bir kez başlattıysan kış boyunca düzenli doldurmaya çalış.",
    ],
    guvenlik: ["Kesimi yetişkin yapmalı.", "Yemliği ayda bir sabunlu suyla yıka; hastalık yayılmasını önler."],
  },
  {
    id: "kedi-tirmalama", kategoriId: "kus-evi", ikon: "cat",
    ad: "Sisal İpli Kedi Tırmalama Direği", zorluk: "Kolay", sure: "2 saat",
    ozet: "Mobilyaları korumak için sağlam tabanlı tırmalama direği.",
    malzemeler: [
      m("kd1", "Kontrplak taban 40×40 cm, 18 mm", "1 adet"),
      m("kd2", "Ahşap direk 7×7×60 cm veya PVC boru", "1 adet"),
      m("kd3", "Sisal ip 8 mm", "30 m"),
      m("kd4", "Ahşap vidası 5×70", "2 adet"),
      m("kd5", "Halı parçası (taban kaplama)", "40×40 cm"),
      m("kd6", "Zımba tabancası", "1 adet", true),
    ],
    adimlar: [
      a("Direği tabana sabitle", "Tabanın ortasından alttan iki uzun vidayla direği tuttur; sallanmamalı."),
      a("Tabanı kapla", "Halıyı tabana yapıştır veya zımbala."),
      a("İpi başlat", "İpin ucunu direğin altına zımbayla sabitle."),
      a("Sar", "İpi sıkı ve aralıksız sararak yukarı çık; her 10 sırada bir zımbala."),
      a("Bitir", "Üst uçta ipi zımbalayıp ucunu içeri gizle."),
    ],
    ipuclari: [
      "Direği kedinin en çok tırmaladığı mobilyanın yanına koy.",
      "Üstüne biraz kedi otu sürmek ilgiyi artırır.",
    ],
    guvenlik: [
      "Kedi devirmesin diye taban geniş ve ağır olmalı.",
      "Zımba uçları dışarıda kalmamalı; kedinin pençesini yaralayabilir.",
    ],
  },

  // ───────────────────────── BAHÇE & SAKSI ─────────────────────────
  {
    id: "kratky-marul", kategoriId: "bahce", ikon: "sprout",
    ad: "Topraksız Marul (Kratky Hidroponik)", zorluk: "Kolay", sure: "1 saat + 5 hafta büyüme",
    ozet: "Pompasız, elektriksiz su kültürüyle mutfakta marul yetiştirme.",
    malzemeler: [
      m("hk1", "Opak plastik kutu, kapaklı (10–15 L)", "1 adet"),
      m("hk2", "Net saksı Ø5 cm", "4 adet"),
      m("hk3", "Hidroponik besin solüsyonu (A+B)", "1 set"),
      m("hk4", "Taş yünü küp veya hindistan cevizi lifi", "4 adet"),
      m("hk5", "Marul tohumu", "1 paket"),
      m("hk6", "pH ölçüm kiti", "1 adet"),
      m("hk7", "Panç / delik testere Ø5 cm", "1 adet", true),
    ],
    adimlar: [
      a("Tohumları çimlendir", "Tohumları ıslak taş yünü küplerine ek, 7–10 gün nemli tut."),
      a("Kapağı del", "Kutu kapağına net saksıların oturacağı 4 delik aç."),
      a("Besin solüsyonu", "Kutuyu suyla doldur, besini paketteki oranda ekle; pH'ı 5,5–6,5 arasına getir."),
      a("Fideleri yerleştir", "Kökleri görünen fideleri net saksılara koy; saksının alt ucu suya değmeli."),
      a("Bekle", "Su seviyesi düştükçe kökler hava boşluğuna uzar; su ekleme, bitki kendi tüketir."),
      a("Hasat", "4–5 hafta sonra dış yapraklardan başlayarak hasat et."),
    ],
    ipuclari: [
      "Kutu ışık geçirmemeli; yoksa suda yosun büyür.",
      "Pencere önü veya basit bir bitki LED'i yeterlidir.",
    ],
    guvenlik: ["Besin solüsyonunu çocukların ve hayvanların ulaşamayacağı yerde sakla."],
  },
  {
    id: "damla-sulama", kategoriId: "bahce", ikon: "water-pump",
    ad: "Balkon Damla Sulama Sistemi", zorluk: "Orta", sure: "2 saat",
    ozet: "Musluğa veya bidona bağlanan, saksıları tek tek sulayan sistem.",
    malzemeler: [
      m("ds1", "Damla sulama başlangıç seti (16 mm)", "1 set"),
      m("ds2", "Ayarlı damlatıcı", "10 adet"),
      m("ds3", "4 mm mikro hortum", "10 m"),
      m("ds4", "Musluk adaptörü", "1 adet"),
      m("ds5", "Pilli sulama zamanlayıcısı", "1 adet"),
      m("ds6", "Delme zımbası (damla sulama)", "1 adet", true),
    ],
    adimlar: [
      a("Hattı planla", "Ana hortumu saksıların önünden geçecek şekilde ser, ucunu kör tapayla kapat."),
      a("Zamanlayıcıyı tak", "Musluk → zamanlayıcı → ana hortum sırasıyla bağla."),
      a("Delikleri aç", "Her saksının hizasında ana hortumu zımbayla del, mikro hortum bağlantısını tak."),
      a("Damlatıcıları yerleştir", "Mikro hortumun ucuna damlatıcıyı takıp çubuğuyla saksı toprağına sabitle."),
      a("Test ve ayar", "Suyu aç; büyük saksılarda damlatıcıyı açık, küçüklerde kısık ayarla. Zamanlayıcıyı sabah erken saate kur."),
    ],
    ipuclari: [
      "Yazın sabah 5–10 dakikalık bir sulama çoğu balkon bitkisi için yeterlidir.",
      "Musluk basıncı yüksekse araya basınç düşürücü tak.",
    ],
    guvenlik: ["Hortumları yürüme yolundan geçirme; takılıp düşme riski oluşur."],
  },
  {
    id: "solucan-kompost", kategoriId: "bahce", ikon: "recycle",
    ad: "Solucan Gübresi Kutusu (Vermikompost)", zorluk: "Kolay", sure: "1 saat + 2–3 ay",
    ozet: "Mutfak atıklarını kırmızı solucanlarla değerli gübreye çevirme.",
    malzemeler: [
      m("sk-a", "Kapaklı plastik kutu (40–60 L)", "2 adet"),
      m("sk-b", "Kırmızı kaliforniya solucanı", "500 g"),
      m("sk-c", "Karton / gazete (yatak malzemesi)", "1 deste"),
      m("sk-d", "Hindistan cevizi lifi bloğu", "1 adet"),
      m("sk-e", "Matkap + Ø6 mm uç", "1 adet", true),
    ],
    adimlar: [
      a("Kutuyu del", "Bir kutunun tabanına sıvı akması için 15–20 delik, yan üst kısımlarına havalandırma delikleri aç. Delikli kutuyu deliksiz olanın içine oturt; alttaki sızıntı suyunu toplar."),
      a("Yatağı hazırla", "Gazeteyi şeritler halinde yırt, hindistan cevizi lifiyle karıştır, sünger kıvamında nemlendir."),
      a("Solucanları ekle", "Solucanları yatağın üstüne bırak; kendileri içeri girer."),
      a("Besle", "Haftada 1–2 kez sebze-meyve kabukları, çay posası ve yumurta kabuğunu küçük parçalar halinde göm."),
      a("Hasat", "2–3 ay sonra koyu, toprak kokulu gübreyi bir kenara toplayıp karşı tarafa taze yem koy; solucanlar oraya geçer."),
    ],
    ipuclari: [
      "Et, süt ürünü, yağ, narenciye ve soğan ekleme; koku ve sorun yapar.",
      "Alttaki sızıntı suyunu 1/10 suyla seyreltip bitkilere verebilirsin.",
    ],
    guvenlik: ["Gübreyle çalıştıktan sonra ellerini yıka.", "Kutuyu doğrudan güneşte ve donda bırakma; solucanlar ölür."],
  },
];
