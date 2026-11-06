import { Proje } from "../types";
import { a, m } from "../yardimci";

// RC & Drone kategorisi: 17 ek proje (toplam 20)
export const RC_EK: Proje[] = [
  {
    id: "rc-tekne",
    kategoriId: "rc",
    ikon: "ferry",
    ad: "Köpük Gövdeli RC Tekne",
    zorluk: "Zor",
    sure: "2 gün",
    yas: "12+ yaş (gözetimle)",
    ozet: "XPS köpükten, fırçalı motorlu ve dümenli uzaktan kumandalı tekne.",
    malzemeler: [
      m("rc-tk1", "XPS köpük levha 3 cm", "1 levha"),
      m("rc-tk2", "Fırçalı DC motor + su geçirmez ESC", "1 set"),
      m("rc-tk3", "Pervane şaftı ve pervane (tekne tipi)", "1 set"),
      m("rc-tk4", "Mikro servo (dümen)", "1 adet"),
      m("rc-tk5", "2 kanallı kumanda + alıcı", "1 set", true),
      m("rc-tk6", "2S LiPo veya NiMH pil", "1 adet"),
      m("rc-tk7", "Epoksi + ince fiber kumaş (su yalıtımı)", "1 set"),
    ],
    adimlar: [
      a("Gövde", "Köpüğü 40 cm boyunda tekne formuna kes, iç kısmı ekipman için oy."),
      a("Su yalıtımı", "Dışını ince fiber kumaş ve epoksiyle kapla; köpük su emmesin."),
      a("Şaft ve motor", "Şaft borusunu kıçtan eğimli yerleştir, sızdırmaz şekilde epoksiyle sabitle, motora bağla."),
      a("Dümen", "Dümen palasını servoya itme çubuğuyla bağla."),
      a("Elektronik", "ESC, alıcı ve pili su almayacak yükseklikte, kapaklı bölmeye yerleştir."),
      a("Deneme", "Önce leğende sızıntı testi, sonra sakin ve sığ suda deneme yap."),
    ],
    ipuclari: ["Şaft borusuna su geçirmez gres doldurmak sızıntıyı önler."],
    guvenlik: [
      "Yüzücülerin, kuşların ve teknelerin olduğu yerde kullanma.",
      "Pil ıslanırsa hemen sök ve kullanma; ıslak LiPo tehlikelidir.",
      "Tekne açığa kaçarsa peşinden suya girme.",
    ],
  },
  {
    id: "rc-araba-ayar",
    kategoriId: "rc",
    ikon: "car-cog",
    ad: "RC Araba Süspansiyon ve Lastik Bakımı",
    zorluk: "Orta",
    sure: "2 saat",
    ozet: "Amortisör yağı yenileme, lastik yapıştırma ve yol ayarı.",
    malzemeler: [
      m("rc-ra1", "Silikon amortisör yağı (ör. 35 wt)", "1 şişe"),
      m("rc-ra2", "Lastik yapıştırıcısı (CA, ince)", "1 adet"),
      m("rc-ra3", "Altıgen tornavida seti (1,5–2,5 mm)", "1 set", true),
      m("rc-ra4", "Kumpas", "1 adet", true),
      m("rc-ra5", "Temizlik bezi + izopropil alkol", "1 set"),
    ],
    adimlar: [
      a("Amortisörleri sök", "Amortisörleri araçtan çıkar, alt kapağını aç, eski yağı boşalt."),
      a("Yeni yağ", "Pistonu en alta indirip yağı doldur, pistonu yavaşça oynatarak hava kabarcıklarını çıkar, kapat."),
      a("Lastik kontrolü", "Jantından ayrılan lastik kenarlarını alkolle temizleyip ince CA yapıştırıcıyla yapıştır."),
      a("Yerden yükseklik", "Amortisör yay ayar halkalarıyla iki taraf eşit olacak şekilde yüksekliği ayarla."),
      a("Toe ayarı", "Ön tekerleklerin hafif içe bakacak şekilde (1–2°) rot ayarını yap; düz gidişi artırır."),
    ],
    ipuclari: ["Kalın yağ yavaş, ince yağ hızlı yaylanma verir; pist zeminine göre seç."],
    guvenlik: ["CA yapıştırıcı cildi saniyeler içinde yapıştırır; eldiven ve gözlük kullan."],
  },
  {
    id: "lipo-sarj",
    kategoriId: "rc",
    ikon: "battery-charging-high",
    ad: "LiPo Pil Güvenli Şarj ve Saklama",
    zorluk: "Kolay",
    sure: "1 saat",
    ozet: "RC ve drone pilleri için güvenli şarj istasyonu ve saklama düzeni.",
    malzemeler: [
      m("rc-lp1", "Dengeli (balance) LiPo şarj cihazı", "1 adet", true),
      m("rc-lp2", "Yanmaz LiPo şarj çantası", "1 adet"),
      m("rc-lp3", "Pil voltaj kontrol cihazı (checker)", "1 adet", true),
      m("rc-lp4", "Seramik karo veya metal tepsi (zemin)", "1 adet"),
      m("rc-lp5", "Duman dedektörü", "1 adet"),
    ],
    adimlar: [
      a("Yer seç", "Yanıcı eşyalardan uzak, seramik/metal zeminli bir köşe hazırla; yakına duman dedektörü tak."),
      a("Pili kontrol et", "Şişme, ezilme veya delik varsa pili şarj etme. Hücre voltajlarını checker ile ölç."),
      a("Doğru ayar", "Şarj cihazında LiPo modunu, hücre sayısını ve 1C akımı seç (ör. 1000 mAh için 1,0 A)."),
      a("Dengeli şarj", "Pili hem ana hem denge (balance) kablosundan bağlayıp çantanın içinde şarj et."),
      a("Saklama", "Birkaç gün kullanmayacaksan cihazın 'storage' moduyla hücre başına ~3,8 V'ta sakla."),
    ],
    ipuclari: ["Uçuştan hemen sonra sıcak pili şarj etme; oda sıcaklığına inmesini bekle."],
    guvenlik: [
      "LiPo pili ASLA gözetimsiz şarj etme.",
      "Şişmiş, darbe almış veya ısınan pili kullanma; tuzlu suda deşarj edip geri dönüşüme ver.",
      "Pil yanarsa suyla söndürmeye çalışma; ortamdan uzaklaş, kum ile örtmeye çalış ve gerekirse 112'yi ara.",
      "Hücre başına 4,2 V'un üzerinde şarj etme, 3,0 V'un altına deşarj etme.",
    ],
  },
  {
    id: "motorlu-depron",
    kategoriId: "rc",
    ikon: "airplane",
    ad: "Motorlu Depron RC Uçak",
    zorluk: "Zor",
    sure: "3 gün",
    yas: "14+ yaş (gözetimle)",
    ozet: "Düz köpük levhadan, fırçasız motorlu yavaş eğitim uçağı.",
    malzemeler: [
      m("rc-md1", "Depron / XPS köpük 6 mm", "2 levha"),
      m("rc-md2", "Fırçasız motor 2204–2208 + ESC 20 A", "1 set"),
      m("rc-md3", "Pervane 8×4", "2 adet"),
      m("rc-md4", "9 g mikro servo", "3 adet"),
      m("rc-md5", "4+ kanallı kumanda ve alıcı", "1 set", true),
      m("rc-md6", "3S LiPo 1000–1300 mAh", "1 adet"),
      m("rc-md7", "Karbon çubuk (kanat kirişi) 5 mm", "1 m"),
    ],
    adimlar: [
      a("Planı yazdır", "Ücretsiz bir 'flat foamie trainer' planı seç ve gerçek boyutta yazdır."),
      a("Kes ve birleştir", "Kanat, gövde, kuyrukları kes; kanada karbon kiriş göm."),
      a("Kontrol yüzeyleri", "Kanatçık, irtifa ve istikamet dümenlerini menteşeleyip servolara bağla."),
      a("Motor", "Motoru burna yatağıyla sabitle, ESC ve alıcıyı bağla."),
      a("Ağırlık merkezi", "Plandaki noktadan parmakla tutup dengeyi pil konumunu kaydırarak ayarla."),
      a(
        "Kontroller",
        "Kumandada tüm yüzeylerin doğru yöne hareket ettiğini kontrol et; ilk uçuşu deneyimli biriyle yap.",
      ),
    ],
    ipuclari: ["Önce simülatörde uçmayı öğrenmek ilk uçağın kırılmasını büyük ölçüde önler."],
    guvenlik: [
      "Motor çalışırken pervanenin önünde ve yanında durma; pil takılıyken elleri pervaneden uzak tut.",
      "Ayarları pervane takılı değilken yap.",
      "Sadece açık, insansız alanlarda ve bölgendeki model uçak kurallarına uygun uçur.",
    ],
  },
  {
    id: "drone-simulator",
    kategoriId: "rc",
    ikon: "monitor-dashboard",
    ad: "Simülatörde Drone Uçuşu Öğrenme",
    zorluk: "Kolay",
    sure: "1 saat kurulum + pratik",
    ozet: "Gerçek kumandayı bilgisayara bağlayıp kaza riski olmadan pratik yapma.",
    malzemeler: [
      m("rc-ds1", "USB destekli kumanda (EdgeTX/OpenTX vb.)", "1 adet", true),
      m("rc-ds2", "Bilgisayar", "1 adet", true),
      m("rc-ds3", "Drone simülatörü (ücretsiz veya ücretli)", "1 adet"),
    ],
    adimlar: [
      a("Bağla", "Kumandayı USB ile bilgisayara bağla, 'Joystick (HID)' modunu seç."),
      a("Kalibre et", "Simülatörde çubukları uç noktalarına götürerek kalibrasyon yap."),
      a("Açı modu", "İlk derslerde 'angle' (otomatik dengeleme) modunda havada sabit durmayı öğren."),
      a("Hedefler", "Kare çizme, sekiz çizme, alçak geçiş gibi görevleri sırayla çalış."),
      a("Acro mod", "Rahatladıktan sonra 'acro' moduna geç."),
    ],
    ipuclari: ["Günde 15–20 dakikalık düzenli pratik, haftada bir uzun seanstan daha etkilidir."],
    guvenlik: ["Uzun ekran başı seanslarda mola ver."],
  },
  {
    id: "fpv-gozluk",
    kategoriId: "rc",
    ikon: "virtual-reality",
    ad: "FPV Kamera ve Gözlük Kanal Ayarı",
    zorluk: "Orta",
    sure: "1 saat",
    ozet: "Analog FPV sistemde verici, anten ve gözlük kanalını eşleştirme.",
    malzemeler: [
      m("rc-fp1", "FPV gözlük (5,8 GHz)", "1 adet", true),
      m("rc-fp2", "FPV kamera + video verici (VTX)", "1 set"),
      m("rc-fp3", "Uygun polarizasyonlu anten (RHCP/LHCP)", "2 adet"),
      m("rc-fp4", "Bilgisayar + yapılandırma yazılımı", "1 adet", true),
    ],
    adimlar: [
      a("Anteni tak", "Verici ANTENSİZ asla çalıştırılmamalı; önce anteni tak."),
      a("Kanal seç", "VTX'te bir bant ve kanal seç (ör. Raceband R1)."),
      a("Gücü ayarla", "Verici gücünü yasal sınıra ayarla (pek çok ülkede 25 mW)."),
      a("Gözlüğü eşleştir", "Gözlükte aynı bant/kanalı seç veya otomatik tarama yap."),
      a("Test", "Görüntüyü farklı mesafelerde kontrol et; karlanma varsa antenleri kontrol et."),
    ],
    ipuclari: ["Verici ve gözlükte aynı polarizasyonlu anten kullanmak görüntü kalitesini artırır."],
    guvenlik: [
      "Ülkendeki frekans ve verici gücü kurallarını kontrol et; FPV uçuşlarında bir gözcü bulundur.",
      "Antensiz çalıştırılan verici bozulabilir.",
    ],
  },
  {
    id: "pervane-dengeleme",
    kategoriId: "rc",
    ikon: "fan",
    ad: "Pervane Dengeleme",
    zorluk: "Kolay",
    sure: "30 dk",
    ozet: "Titreşimi azaltmak için pervaneyi manyetik dengeleyiciyle dengeleme.",
    malzemeler: [
      m("rc-pd1", "Manyetik pervane dengeleyici", "1 adet", true),
      m("rc-pd2", "Zımpara 400", "1 adet"),
      m("rc-pd3", "Şeffaf bant veya oje", "1 adet"),
    ],
    adimlar: [
      a("Yerleştir", "Pervaneyi dengeleyicinin miline tak."),
      a("Ağır kanadı bul", "Pervaneyi yatay bırak; aşağı inen kanat ağırdır."),
      a(
        "Hafiflet veya ağırlaştır",
        "Ağır kanadın ucunu düz yüzeyinden hafifçe zımparala veya hafif kanada ince bant yapıştır.",
      ),
      a("Tekrar et", "Pervane her konumda sabit kalana kadar tekrarla."),
    ],
    ipuclari: ["Göbek (hub) dengesini de kontrol et: pervaneyi dikey tutup aynı testi yap."],
    guvenlik: ["Çatlak veya çentikli pervaneyi dengeleme; yenisiyle değiştir."],
  },
  {
    id: "paletli-robot",
    kategoriId: "rc",
    ikon: "robot-industrial",
    ad: "Paletli Keşif Robotu",
    zorluk: "Orta",
    sure: "4 saat",
    yas: "12+ yaş (gözetimle)",
    ozet: "Paletli şasi, telefonla kumanda ve üstünde kamera tutucu.",
    malzemeler: [
      m("rc-pr1", "Paletli robot şasi kiti (2 motorlu)", "1 kit"),
      m("rc-pr2", "Arduino Uno", "1 adet", true),
      m("rc-pr3", "L298N motor sürücü", "1 adet"),
      m("rc-pr4", "HC-05 Bluetooth modülü", "1 adet"),
      m("rc-pr5", "2S LiPo veya 6×AA pil yuvası", "1 adet"),
      m("rc-pr6", "Telefon/kamera tutucu (küçük)", "1 adet"),
    ],
    adimlar: [
      a("Şasiyi kur", "Motorları, tekerlekleri ve paletleri kitteki sırayla tak; palet gerginliğini ayarla."),
      a("Elektronik", "Bağlantıları 'Telefonla Kumandalı Arduino Araba' projesindeki gibi yap (L298N + HC-05)."),
      a("Kod", "Aynı Bluetooth kodu paletli robotta da çalışır; dönüşler yerinde olur."),
      a("Kamera", "Üst plakaya tutucuyu vidala, eski bir telefonu görüntülü aramayla kamera olarak kullan."),
    ],
    ipuclari: ["Paletler halı ve çimde tekerlekten iyi tutunur ama daha çok akım çeker; pil kapasitesini yüksek tut."],
    guvenlik: ["Motor sürücü ısınabilir; soğutucusuna dokunma."],
  },
  {
    id: "cizgi-izleyen",
    kategoriId: "rc",
    ikon: "vector-polyline",
    ad: "Çizgi İzleyen Robot",
    zorluk: "Orta",
    sure: "3 saat",
    yas: "10+ yaş (gözetimle)",
    ozet: "Yerdeki siyah bandı iki kızılötesi sensörle takip eden robot.",
    malzemeler: [
      m("rc-ci1", "2WD robot şasi kiti", "1 kit"),
      m("rc-ci2", "Arduino Uno", "1 adet", true),
      m("rc-ci3", "L298N motor sürücü", "1 adet"),
      m("rc-ci4", "TCRT5000 kızılötesi çizgi sensörü modülü", "2 adet"),
      m("rc-ci5", "Siyah elektrik bandı", "1 rulo"),
      m("rc-ci6", "4×AA pil yuvası", "1 adet"),
    ],
    adimlar: [
      a(
        "Sensörleri tak",
        "İki sensörü şasinin önüne, yere 5–10 mm yükseklikte ve aralarında bant genişliği kadar boşluk bırakarak yerleştir.",
      ),
      a("Bağla", "Sol sensör OUT → pin 2, sağ sensör OUT → pin 3. Motorlar L298N üzerinden pin 5, 6, 9, 10."),
      a(
        "Sensörü ayarla",
        "Modüldeki potansiyometreyi, beyaz zeminde ve siyah bantta LED'in farklı yanacağı şekilde çevir.",
      ),
      a("Pist", "Açık renkli zemine siyah bantla kapalı bir pist yap."),
      a("Kodu yükle ve dene", "Robot çizgiden çıkıyorsa sensör mantığını ters çevir (kodda SIYAH değerini değiştir)."),
    ],
    ipuclari: ["Keskin virajlarda zorlanıyorsa motor hızını düşür (ENA/ENB pinlerine PWM uygula)."],
    guvenlik: ["Pilleri ters takma; devreyi kurarken pil yuvasını çıkar."],
    kod: `const int SOL = 2, SAG = 3;
const int IN1 = 5, IN2 = 6, IN3 = 9, IN4 = 10;
const int SIYAH = HIGH; // sensörün siyahta verdiği değer (ters ise LOW yap)

void motor(int a, int b, int c, int d) {
  digitalWrite(IN1, a); digitalWrite(IN2, b);
  digitalWrite(IN3, c); digitalWrite(IN4, d);
}

void setup() {
  pinMode(SOL, INPUT); pinMode(SAG, INPUT);
  pinMode(IN1, OUTPUT); pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT); pinMode(IN4, OUTPUT);
}

void loop() {
  bool sol = digitalRead(SOL) == SIYAH;
  bool sag = digitalRead(SAG) == SIYAH;

  if (!sol && !sag) motor(1, 0, 1, 0);      // çizgi ortada: ileri
  else if (sol && !sag) motor(0, 0, 1, 0);  // çizgi solda: sola dön
  else if (!sol && sag) motor(1, 0, 0, 0);  // çizgi sağda: sağa dön
  else motor(0, 0, 0, 0);                   // ikisi de siyah: dur
}`,
  },
  {
    id: "engel-robot",
    kategoriId: "rc",
    ikon: "robot-outline",
    ad: "Engelden Kaçan Robot",
    zorluk: "Orta",
    sure: "3 saat",
    yas: "10+ yaş (gözetimle)",
    ozet: "Ultrasonik sensörle önündeki engeli görüp yön değiştiren robot.",
    malzemeler: [
      m("rc-er1", "2WD robot şasi kiti", "1 kit"),
      m("rc-er2", "Arduino Uno", "1 adet", true),
      m("rc-er3", "L298N motor sürücü", "1 adet"),
      m("rc-er4", "HC-SR04 ultrasonik sensör", "1 adet"),
      m("rc-er5", "4×AA pil yuvası", "1 adet"),
      m("rc-er6", "Jumper kablo seti", "1 paket"),
    ],
    adimlar: [
      a("Şasi", "Robot şasisini kur, sensörü öne düz bakacak şekilde sabitle."),
      a("Sensör", "HC-SR04: VCC→5V, GND→GND, Trig→pin 12, Echo→pin 11."),
      a("Motorlar", "L298N IN1–IN4 → pin 5, 6, 9, 10; pil → L298N 12V girişi, GND'ler ortak."),
      a("Kodu yükle", "Robot 20 cm'den yakın engel görünce geri gider ve döner."),
      a("Ayarla", "Mesafe eşiğini ve dönüş süresini odana göre değiştir."),
    ],
    ipuclari: ["Sensörü bir servo üzerine koyup sağa-sola baktırmak, daha akıllı yön seçimi sağlar."],
    guvenlik: ["Robotu merdiven kenarlarından uzak tut; ultrasonik sensör boşluğu göremez."],
    kod: `const int TRIG = 12, ECHO = 11;
const int IN1 = 5, IN2 = 6, IN3 = 9, IN4 = 10;
const int ESIK_CM = 20;

void motor(int a, int b, int c, int d) {
  digitalWrite(IN1, a); digitalWrite(IN2, b);
  digitalWrite(IN3, c); digitalWrite(IN4, d);
}

long mesafe() {
  digitalWrite(TRIG, LOW);  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH); delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  long sure = pulseIn(ECHO, HIGH, 30000);
  return sure == 0 ? 400 : sure * 0.034 / 2; // yankı yoksa "uzak" say
}

void setup() {
  pinMode(TRIG, OUTPUT); pinMode(ECHO, INPUT);
  pinMode(IN1, OUTPUT); pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT); pinMode(IN4, OUTPUT);
}

void loop() {
  if (mesafe() < ESIK_CM) {
    motor(0, 1, 0, 1); delay(300);  // geri
    motor(1, 0, 0, 1); delay(400);  // sağa dön
  } else {
    motor(1, 0, 1, 0);              // ileri
  }
  delay(50);
}`,
  },
  {
    id: "balon-hovercraft",
    kategoriId: "rc",
    ikon: "disc",
    ad: "CD ve Balonla Mini Hovercraft",
    zorluk: "Kolay",
    sure: "20 dk",
    yas: "5+ yaş (gözetimle)",
    ozet: "Hava yastığı üzerinde masada kayan basit hovercraft.",
    malzemeler: [
      m("rc-bh1", "Eski CD/DVD", "1 adet"),
      m("rc-bh2", "Sporcu suyu şişesi kapağı (açılır-kapanır)", "1 adet"),
      m("rc-bh3", "Balon", "2 adet"),
      m("rc-bh4", "Sıcak silikon veya güçlü bant", "1 adet"),
    ],
    adimlar: [
      a("Kapağı yapıştır", "Kapağı CD'nin ortasındaki deliğin üstüne, hava kaçırmayacak şekilde yapıştır."),
      a("Balonu şişir", "Kapak kapalıyken balonu şişirip ağzını kapağa geçir."),
      a("Bırak", "CD'yi düz bir masaya koy ve kapağı aç; hava CD'nin altından kaçarken sürtünme azalır."),
      a("Dene", "Hafifçe it; uzun süre kaydığını gör."),
    ],
    ipuclari: ["Pürüzsüz yüzeyde (cam masa) en iyi sonucu verir."],
    guvenlik: ["8 yaş altı çocuklar balonu gözetim altında şişirmeli.", "Sıcak silikonu yetişkin kullanmalı."],
  },
  {
    id: "su-roketi",
    kategoriId: "rc",
    ikon: "rocket-launch-outline",
    ad: "Pet Şişe Su Roketi",
    zorluk: "Orta",
    sure: "3 saat",
    yas: "10+ yaş (yetişkinle)",
    ozet: "Basınçlı hava ve suyla onlarca metre yükselen roket.",
    malzemeler: [
      m("rc-sr1", "Gazlı içecek şişesi 1,5–2 L (basınca dayanıklı)", "2 adet"),
      m("rc-sr2", "Mukavva veya plastik levha (kanatçık)", "1 adet"),
      m("rc-sr3", "Manometreli bisiklet pompası", "1 adet", true),
      m("rc-sr4", "Hazır su roketi rampası / fırlatıcı başlığı", "1 adet"),
      m("rc-sr5", "Oyun hamuru (burun ağırlığı)", "50 g"),
    ],
    adimlar: [
      a("Gövde", "Şişeyi ters çevir; ağzı aşağıda kalacak. Üste ikinci şişenin üst kısmından burun konisi yap."),
      a("Kanatçıklar", "Alt tarafa 3–4 kanatçığı eşit aralıklarla yapıştır."),
      a("Denge", "Burun konisinin içine oyun hamuru koyarak ağırlık merkezini öne al; düz uçar."),
      a("Doldur", "Şişeyi 1/3 oranında suyla doldur ve rampaya tak."),
      a("Fırlat", "Herkes en az 10 m uzaklaştıktan sonra pompayla basınçlandır ve tetikle."),
    ],
    ipuclari: ["En iyi yükseklik genelde 1/3 su oranıyla elde edilir; farklı oranları deneyerek ölç."],
    guvenlik: [
      "Sadece gazlı içecek şişesi kullan ve basıncı 4 bar'ı (60 psi) geçirme; şişe patlayabilir.",
      "Basınçlıyken roketin üzerine eğilme ve kimseyi önünde bulundurma.",
      "Açık, geniş alanda; ağaçlardan, binalardan ve elektrik hatlarından uzakta fırlat.",
      "Çizilmiş, ezilmiş veya güneşte kalmış şişeyi tekrar kullanma.",
    ],
  },
  {
    id: "nrf-kumanda",
    kategoriId: "rc",
    ikon: "remote",
    ad: "İki Arduino ile Kablosuz Kumanda",
    zorluk: "Zor",
    sure: "4 saat",
    ozet: "nRF24L01 modülleriyle joystick'ten servoya kablosuz kontrol.",
    malzemeler: [
      m("rc-nk1", "Arduino Nano", "2 adet", true),
      m("rc-nk2", "nRF24L01 modülü", "2 adet"),
      m("rc-nk3", "10 µF kondansatör", "2 adet"),
      m("rc-nk4", "Analog joystick modülü", "1 adet"),
      m("rc-nk5", "SG90 servo", "2 adet"),
      m("rc-nk6", "Jumper kablo + breadboard", "1 set"),
    ],
    adimlar: [
      a("Kütüphane", "Arduino IDE'de 'RF24' kütüphanesini (TMRh20) kur."),
      a(
        "nRF24 bağlantısı",
        "Her iki tarafta: VCC→3,3V (5V DEĞİL), GND→GND, CE→7, CSN→8, SCK→13, MOSI→11, MISO→12. VCC-GND arasına 10 µF kondansatör tak.",
      ),
      a("Verici", "Joystick X→A0, Y→A1. Kodun başındaki VERICI satırını açık bırakıp yükle."),
      a("Alıcı", "Servolar pin 3 ve 5'e. 'define VERICI' satırını silip ikinci Arduino'ya yükle."),
      a("Test", "Joystick'i oynattığında servolar takip etmeli."),
    ],
    ipuclari: ["Bağlantı kopuyorsa çoğunlukla güç yetersizdir; kondansatör ve kısa kablolar sorunu çözer."],
    guvenlik: ["nRF24 modülü 5V ile beslenirse bozulur; mutlaka 3,3V kullan."],
    kod: `#include <SPI.h>
#include <RF24.h>
#include <Servo.h>

#define VERICI  // alıcı Arduino'ya yüklerken bu satırı sil

RF24 radyo(7, 8);           // CE, CSN
const byte ADRES[6] = "00001";
int veri[2];

#ifdef VERICI
void setup() {
  radyo.begin();
  radyo.openWritingPipe(ADRES);
  radyo.setPALevel(RF24_PA_LOW);
  radyo.stopListening();
}
void loop() {
  veri[0] = analogRead(A0);
  veri[1] = analogRead(A1);
  radyo.write(&veri, sizeof(veri));
  delay(20);
}
#else
Servo s1, s2;
void setup() {
  s1.attach(3); s2.attach(5);
  radyo.begin();
  radyo.openReadingPipe(0, ADRES);
  radyo.setPALevel(RF24_PA_LOW);
  radyo.startListening();
}
void loop() {
  if (radyo.available()) {
    radyo.read(&veri, sizeof(veri));
    s1.write(map(veri[0], 0, 1023, 0, 180));
    s2.write(map(veri[1], 0, 1023, 0, 180));
  }
}
#endif`,
  },
  {
    id: "rc-yelkenli",
    kategoriId: "rc",
    ikon: "sail-boat",
    ad: "Mini RC Yelkenli",
    zorluk: "Zor",
    sure: "3 gün",
    ozet: "Yelken servosu ve dümenle rüzgârla giden 50 cm'lik yelkenli.",
    malzemeler: [
      m("rc-yl1", "Köpük veya balsa gövde malzemesi", "1 set"),
      m("rc-yl2", "Karbon çubuk (direk ve bumba)", "1 m"),
      m("rc-yl3", "Ripstop naylon veya mylar (yelken)", "50×50 cm"),
      m("rc-yl4", "Yelken kumanda servosu (güçlü)", "1 adet"),
      m("rc-yl5", "Mikro servo (dümen)", "1 adet"),
      m("rc-yl6", "2 kanallı kumanda + alıcı", "1 set", true),
      m("rc-yl7", "Kurşun salma ağırlığı", "200 g"),
    ],
    adimlar: [
      a("Gövde ve salma", "Gövdeyi yap, altına derin bir salma ve ucuna kurşun ağırlık tak; tekneyi dik tutan budur."),
      a("Su yalıtımı", "Gövdeyi epoksi veya su geçirmez boyayla kapla."),
      a("Direk ve yelken", "Direği güverteye sabitle, yelkeni direğe ve bumbaya tak."),
      a("Servolar", "Yelken servosunu bumbaya iple, dümen servosunu dümene bağla."),
      a("Deneme", "Hafif rüzgârda, kıyıya yakın dene."),
    ],
    ipuclari: [
      "Salma ağırlığı ve direk yüksekliği dengesi tekneyi devrilmekten korur; önce leğende yatırma testi yap.",
    ],
    guvenlik: ["Elektroniği su almayacak kapaklı bölmede tut.", "Tekne açılırsa peşinden suya girme."],
  },
  {
    id: "rc-led-far",
    kategoriId: "rc",
    ikon: "car-light-high",
    ad: "RC Arabaya LED Far ve Stop Lambası",
    zorluk: "Kolay",
    sure: "1 saat",
    ozet: "Alıcının boş kanalından beslenen ön far ve arka stop LED'leri.",
    malzemeler: [
      m("rc-lf1", "5 mm beyaz LED", "2 adet"),
      m("rc-lf2", "5 mm kırmızı LED", "2 adet"),
      m("rc-lf3", "Direnç 150 Ω", "4 adet"),
      m("rc-lf4", "Servo uzatma kablosu (alıcıya takmak için)", "1 adet"),
      m("rc-lf5", "Daralan makaron", "1 paket"),
      m("rc-lf6", "Havya + lehim", "1 set", true),
    ],
    adimlar: [
      a("Delikleri aç", "Gövdenin far ve stop yerlerine 5 mm delik aç."),
      a("LED + direnç", "Her LED'in uzun bacağına bir 150 Ω direnç lehimle."),
      a("Paralel bağla", "Tüm LED kollarını paralel bağla: dirençli uçlar + kabloya, kısa bacaklar – kabloya."),
      a("Yalıt", "Tüm lehim noktalarını makaronla kapla."),
      a("Bağla", "Servo uzatma kablosunun + (kırmızı) ve – (siyah/kahve) uçlarını kullan, alıcının boş kanalına tak."),
    ],
    ipuclari: ["Farlar alıcı açıkken hep yanar; aracı karanlıkta bulmayı da kolaylaştırır."],
    guvenlik: ["Havya ucu çok sıcaktır; standında tut ve havalandırılmış ortamda lehimle."],
  },
  {
    id: "rc-rampa",
    kategoriId: "rc",
    ikon: "slope-uphill",
    ad: "RC Araba Atlama Rampası",
    zorluk: "Kolay",
    sure: "2 saat",
    ozet: "Kontrplaktan katlanabilir, açısı ayarlanabilir atlama rampası.",
    malzemeler: [
      m("rc-rp1", "Kontrplak 9 mm", "60×40 cm"),
      m("rc-rp2", "Menteşe", "2 adet"),
      m("rc-rp3", "Ahşap çıta 2×4 cm", "1 m"),
      m("rc-rp4", "Kaydırmaz zemin bandı", "1 m"),
      m("rc-rp5", "Vida + matkap", "1 set", true),
    ],
    adimlar: [
      a("Rampa yüzeyi", "Kontrplağı 60×40 cm kes, ön kenarını incelterek pahla."),
      a("Ayak", "Çıtadan iki kademeli destek ayağı kes; farklı yükseklikler için çentik aç."),
      a("Menteşe", "Ayağı rampanın altına menteşeyle bağla."),
      a("Yüzey", "Rampanın üstüne kaydırmaz bant yapıştır."),
    ],
    ipuclari: ["Düşük açıyla başla; arabanın nasıl iniş yaptığını görünce artır."],
    guvenlik: ["İnsanlara ve hayvanlara doğru atlatma; iniş alanı boş olmalı."],
  },
  {
    id: "servo-test",
    kategoriId: "rc",
    ikon: "knob",
    ad: "Potansiyometreli Servo Test Cihazı",
    zorluk: "Kolay",
    sure: "45 dk",
    ozet: "Servoları kumandasız test etmek ve orta noktayı bulmak için cihaz.",
    malzemeler: [
      m("rc-st1", "Arduino Nano", "1 adet", true),
      m("rc-st2", "10 kΩ potansiyometre", "1 adet"),
      m("rc-st3", "Buton", "1 adet"),
      m("rc-st4", "Servo (test edilecek)", "1 adet"),
      m("rc-st5", "Harici 5 V kaynak (büyük servolar için)", "1 adet"),
    ],
    adimlar: [
      a("Potansiyometre", "Uçlarını 5V ve GND'ye, orta bacağını A0'a bağla."),
      a("Buton", "Butonu pin 2 ile GND arasına bağla (iç pull-up kullanılıyor)."),
      a("Servo", "Sinyal → pin 9. Küçük servo Arduino 5V'tan, büyük servo harici 5V'tan beslenmeli; GND'ler ortak."),
      a("Kod", "Potansiyometre servoyu döndürür; butona basılıyken servo tam ortaya (90°) gider."),
    ],
    ipuclari: ["Yeni servoları uçağa takmadan önce ortaya alıp kolunu öyle takmak, ayarı çok kolaylaştırır."],
    guvenlik: ["Büyük servoları Arduino'nun 5V çıkışından besleme; kart zarar görebilir."],
    kod: `#include <Servo.h>

Servo servo;
const int POT = A0, BUTON = 2;

void setup() {
  servo.attach(9);
  pinMode(BUTON, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(BUTON) == LOW) {
    servo.write(90);                         // orta nokta
  } else {
    int deger = analogRead(POT);
    servo.write(map(deger, 0, 1023, 0, 180));
  }
  delay(15);
}`,
  },
];
