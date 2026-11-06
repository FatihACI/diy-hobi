import { Proje } from "../types";
import { kategoriProjesi } from "../yardimci";

const p = kategoriProjesi("elektronik");
const DUSUK = "Devreyi sadece USB veya pil (5–9 V) ile besle; şebeke (220 V) gerilimine bağlanan hiçbir şey yapma.";
const KISA = "Bağlantıları değiştirmeden önce USB kablosunu çıkar; kısa devre kartı bozabilir.";
const LEHIM =
  "Havya ucu 350 °C'dir; stand üzerinde bırak, lehim dumanını solumamak için havalandır ve sonrasında ellerini yıka.";
const UNO = ["Arduino Uno + USB kablosu", "1 adet"] as [string, string];
const BB = ["Breadboard + jumper kablo seti", "1 set"] as [string, string];

// Elektronik: 16 ek proje (toplam 20)
export const ELEKTRONIK_EK: Proje[] = [
  p(
    "led-yanip-sonme",
    "led-on",
    "İlk Devre: Yanıp Sönen LED",
    "Kolay",
    "30 dk",
    "Arduino'ya ilk programı yükleyip LED yakıp söndürme.",
    [UNO, BB, ["5 mm LED", "1 adet"], ["220 Ω direnç", "1 adet"]],
    [
      ["Arduino IDE", "Bilgisayara Arduino IDE kur, kartı USB ile bağla, Araçlar menüsünden kartı ve portu seç."],
      ["Devre", "LED'in uzun bacağını (+) direnç üzerinden pin 9'a, kısa bacağını GND'ye bağla."],
      ["Yükle", "Kodu yapıştırıp Yükle düğmesine bas."],
      ["Değiştir", "delay değerlerini değiştirerek hızı ayarla."],
    ],
    ["LED ters takılırsa yanmaz ama bozulmaz; çevirip tekrar dene."],
    [DUSUK],
    {
      kod: `const int LED = 9;

void setup() {
  pinMode(LED, OUTPUT);
}

void loop() {
  digitalWrite(LED, HIGH);
  delay(500);
  digitalWrite(LED, LOW);
  delay(500);
}`,
    },
  ),

  p(
    "butonlu-led",
    "gesture-tap-button",
    "Butonla LED Açıp Kapama",
    "Kolay",
    "30 dk",
    "Her basışta LED'in durumunu değiştiren buton devresi.",
    [UNO, BB, ["Push buton", "1 adet"], ["LED + 220 Ω direnç", "1 set"]],
    [
      ["Buton", "Butonun bir ucunu pin 2'ye, diğer ucunu GND'ye bağla (dahili pull-up kullanılacak)."],
      ["LED", "LED'i direnç üzerinden pin 9'a bağla."],
      ["Yükle", "Kodu yükle."],
      ["Dene", "Her basışta LED yanar veya söner."],
    ],
    ["Koddaki kısa bekleme butonun 'zıplamasını' (ark) engeller."],
    [DUSUK],
    {
      kod: `const int BUTON = 2, LED = 9;
bool durum = false;
bool onceki = HIGH;

void setup() {
  pinMode(BUTON, INPUT_PULLUP);
  pinMode(LED, OUTPUT);
}

void loop() {
  bool simdi = digitalRead(BUTON);
  if (onceki == HIGH && simdi == LOW) {
    durum = !durum;
    digitalWrite(LED, durum);
    delay(50);
  }
  onceki = simdi;
}`,
    },
  ),

  p(
    "pot-led-parlaklik",
    "brightness-6",
    "Potansiyometreyle LED Parlaklığı",
    "Kolay",
    "30 dk",
    "Döner potansiyometreyle LED parlaklığını PWM ile ayarlama.",
    [UNO, BB, ["10 kΩ potansiyometre", "1 adet"], ["LED + 220 Ω direnç", "1 set"]],
    [
      ["Pot", "Potun kenar bacaklarını 5V ve GND'ye, orta bacağını A0'a bağla."],
      ["LED", "LED'i direnç üzerinden PWM pini 9'a bağla."],
      ["Yükle", "Kodu yükle."],
      ["İzle", "Seri Monitörü açıp okunan değeri gör."],
    ],
    ["analogRead 0–1023, analogWrite 0–255 arası çalışır; map() ile dönüştürülür."],
    [DUSUK],
    {
      kod: `const int POT = A0, LED = 9;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int deger = analogRead(POT);
  analogWrite(LED, map(deger, 0, 1023, 0, 255));
  Serial.println(deger);
  delay(20);
}`,
    },
  ),

  p(
    "ldr-gece-lambasi",
    "weather-night",
    "Işık Sensörlü Gece Lambası",
    "Kolay",
    "45 dk",
    "Ortam karardığında kendiliğinden yanan LED.",
    [UNO, BB, ["LDR (foto direnç)", "1 adet"], ["10 kΩ direnç", "1 adet"], ["Beyaz LED + 220 Ω direnç", "2 set"]],
    [
      ["Gerilim bölücü", "LDR'nin bir ucunu 5V'a, diğer ucunu A0'a; A0'ı da 10 kΩ üzerinden GND'ye bağla."],
      ["LED'ler", "LED'leri pin 9'a bağla."],
      ["Eşik", "Seri Monitörden aydınlık ve karanlık değerleri oku, ESIK değerini ikisinin arasına ayarla."],
      ["Kutula", "Devreyi bir kavanoz veya kutuya yerleştir."],
    ],
    ["LDR'yi LED'in ışığını görmeyecek şekilde yerleştir; yoksa lamba yanıp söner."],
    [DUSUK],
    {
      kod: `const int LDR = A0, LED = 9;
const int ESIK = 400;

void setup() {
  pinMode(LED, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int isik = analogRead(LDR);
  Serial.println(isik);
  digitalWrite(LED, isik < ESIK ? HIGH : LOW);
  delay(200);
}`,
    },
  ),

  p(
    "servo-kontrol",
    "rotate-right",
    "Potansiyometreyle Servo Motor",
    "Kolay",
    "45 dk",
    "Pot çevrildikçe aynı açıya dönen servo motor.",
    [UNO, BB, ["SG90 mikro servo", "1 adet"], ["10 kΩ potansiyometre", "1 adet"]],
    [
      ["Servo", "Kahverengi kabloyu GND'ye, kırmızıyı 5V'a, turuncuyu pin 9'a bağla."],
      ["Pot", "Potun orta bacağını A0'a, kenarlarını 5V ve GND'ye bağla."],
      ["Yükle", "Kodu yükle."],
      ["Dene", "Potu çevirerek servoyu 0–180° arasında döndür."],
    ],
    ["Büyük servolar için ayrı 5 V güç kaynağı kullan; GND'leri birleştir."],
    [DUSUK, KISA],
    {
      kod: `#include <Servo.h>

Servo servo;
const int POT = A0;

void setup() {
  servo.attach(9);
}

void loop() {
  int aci = map(analogRead(POT), 0, 1023, 0, 180);
  servo.write(aci);
  delay(15);
}`,
    },
  ),

  p(
    "rgb-led-renk",
    "palette",
    "RGB LED Renk Geçişi",
    "Kolay",
    "30 dk",
    "Ortak katotlu RGB LED ile yumuşak renk geçişleri.",
    [UNO, BB, ["RGB LED (ortak katot)", "1 adet"], ["220 Ω direnç", "3 adet"]],
    [
      ["Bağla", "En uzun bacağı GND'ye, diğer üç bacağı dirençler üzerinden 9, 10, 11 pinlerine bağla."],
      ["Yükle", "Kodu yükle."],
      ["Renk", "Kırmızı, yeşil, mavi arasında yumuşak geçişleri izle."],
      ["Difüzör", "LED'i pinpon topu veya buzlu kağıtla kapla."],
    ],
    ["Ortak anotlu LED kullanıyorsan uzun bacağı 5V'a bağla ve değerleri 255'ten çıkar."],
    [DUSUK],
    {
      kod: `const int R = 9, G = 10, B = 11;

void renk(int r, int g, int b) {
  analogWrite(R, r);
  analogWrite(G, g);
  analogWrite(B, b);
}

void loop() {
  for (int i = 0; i < 256; i++) { renk(255 - i, i, 0); delay(8); }
  for (int i = 0; i < 256; i++) { renk(0, 255 - i, i); delay(8); }
  for (int i = 0; i < 256; i++) { renk(i, 0, 255 - i); delay(8); }
}

void setup() {}`,
    },
  ),

  p(
    "buzzer-melodi",
    "music-note",
    "Buzzer ile Melodi Çalma",
    "Kolay",
    "30 dk",
    "Pasif buzzer'la nota dizisi çalan basit müzik kutusu.",
    [UNO, BB, ["Pasif buzzer", "1 adet"], ["Push buton", "1 adet"]],
    [
      ["Buzzer", "Buzzer'ın + ucunu pin 8'e, - ucunu GND'ye bağla."],
      ["Buton", "Butonu pin 2 ve GND arasına bağla."],
      ["Yükle", "Kodu yükle; butona basınca melodi çalar."],
      ["Beste", "NOTALAR dizisini değiştirerek kendi melodini yaz."],
    ],
    ["Aktif buzzer tek ton çıkarır; melodi için pasif buzzer gerekir."],
    [DUSUK],
    {
      kod: `const int BUZZER = 8, BUTON = 2;
// Do Re Mi Fa Sol La Si Do
int NOTALAR[] = {262, 294, 330, 349, 392, 440, 494, 523};

void setup() {
  pinMode(BUTON, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(BUTON) == LOW) {
    for (int i = 0; i < 8; i++) {
      tone(BUZZER, NOTALAR[i], 250);
      delay(300);
    }
    noTone(BUZZER);
  }
}`,
    },
  ),

  p(
    "reaksiyon-oyunu",
    "timer-outline",
    "Refleks Ölçme Oyunu",
    "Orta",
    "1 saat",
    "LED yanınca butona basma süreni milisaniye olarak ölçen oyun.",
    [UNO, BB, ["LED + 220 Ω direnç", "1 set"], ["Push buton", "1 adet"], ["Buzzer (isteğe bağlı)", "1 adet"]],
    [
      ["Bağla", "LED'i pin 9'a, butonu pin 2 ile GND arasına bağla."],
      ["Yükle", "Kodu yükleyip Seri Monitörü 9600 baud'da aç."],
      ["Oyna", "LED rastgele bir anda yanar; olabildiğince hızlı butona bas."],
      ["Hile kontrolü", "LED yanmadan basarsan 'Erken bastın!' uyarısı gelir."],
    ],
    ["Ortalama insan refleksi 200–300 ms civarıdır."],
    [DUSUK],
    {
      kod: `const int LED = 9, BUTON = 2;

void setup() {
  pinMode(LED, OUTPUT);
  pinMode(BUTON, INPUT_PULLUP);
  Serial.begin(9600);
  randomSeed(analogRead(A5));
}

void loop() {
  Serial.println("Hazir...");
  unsigned long bekle = millis() + random(2000, 6000);
  while (millis() < bekle) {
    if (digitalRead(BUTON) == LOW) {
      Serial.println("Erken bastin!");
      delay(1000);
      return;
    }
  }
  digitalWrite(LED, HIGH);
  unsigned long basla = millis();
  while (digitalRead(BUTON) == HIGH) {}
  digitalWrite(LED, LOW);
  Serial.print("Sure: ");
  Serial.print(millis() - basla);
  Serial.println(" ms");
  delay(2000);
}`,
    },
  ),

  p(
    "hareket-alarmi",
    "motion-sensor",
    "PIR Hareket Alarmı",
    "Kolay",
    "45 dk",
    "Odaya biri girince öten ve LED yakan alarm.",
    [UNO, BB, ["HC-SR501 PIR sensör", "1 adet"], ["Aktif buzzer", "1 adet"], ["Kırmızı LED + 220 Ω direnç", "1 set"]],
    [
      ["PIR", "VCC'yi 5V'a, GND'yi GND'ye, OUT'u pin 2'ye bağla."],
      ["Uyarı", "Buzzer'ı pin 8'e, LED'i pin 9'a bağla."],
      ["Isınma", "Sensörün ilk 30–60 saniye ortamı öğrenmesini bekle."],
      ["Ayar", "Sensör üzerindeki vidalarla hassasiyet ve süreyi ayarla."],
    ],
    ["PIR camların arkasını ve ısı kaynaklarını yanlış algılayabilir; konumu buna göre seç."],
    [DUSUK],
    {
      kod: `const int PIR = 2, BUZZER = 8, LED = 9;

void setup() {
  pinMode(PIR, INPUT);
  pinMode(BUZZER, OUTPUT);
  pinMode(LED, OUTPUT);
}

void loop() {
  bool hareket = digitalRead(PIR);
  digitalWrite(LED, hareket);
  digitalWrite(BUZZER, hareket);
  delay(100);
}`,
    },
  ),

  p(
    "lcd-sicaklik",
    "thermometer",
    "LCD Ekranlı Sıcaklık-Nem Göstergesi",
    "Orta",
    "1 saat",
    "DHT11 sensörüyle ölçülen değerleri 16×2 LCD'de gösterme.",
    [UNO, BB, ["DHT11 sensör modülü", "1 adet"], ["16×2 LCD + I2C modülü", "1 adet"]],
    [
      ["Kütüphane", "Arduino IDE'den 'DHT sensor library' ve 'LiquidCrystal I2C' kütüphanelerini kur."],
      ["LCD", "I2C modülünün SDA'sını A4'e, SCL'sini A5'e, VCC ve GND'yi bağla."],
      ["Sensör", "DHT11'in DATA ucunu pin 2'ye bağla."],
      ["Adres", "Ekranda yazı çıkmazsa koddaki 0x27 adresini 0x3F yap ve kontrast vidasını çevir."],
    ],
    ["DHT11 2 saniyede bir okunmalıdır; daha sık okumak hatalı değer verir."],
    [DUSUK],
    {
      kod: `#include <DHT.h>
#include <LiquidCrystal_I2C.h>

DHT dht(2, DHT11);
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  dht.begin();
  lcd.init();
  lcd.backlight();
}

void loop() {
  float sicaklik = dht.readTemperature();
  float nem = dht.readHumidity();
  lcd.clear();
  if (isnan(sicaklik) || isnan(nem)) {
    lcd.print("Sensor hatasi");
  } else {
    lcd.print("Sicaklik: ");
    lcd.print(sicaklik, 1);
    lcd.print("C");
    lcd.setCursor(0, 1);
    lcd.print("Nem: %");
    lcd.print(nem, 0);
  }
  delay(2000);
}`,
    },
  ),

  p(
    "su-seviye-alarmi",
    "water-alert-outline",
    "Su Taşma Alarmı",
    "Kolay",
    "45 dk",
    "Çamaşır makinesi veya lavabo altında su algılayınca öten alarm.",
    [UNO, ["Su seviye sensörü modülü", "1 adet"], ["Aktif buzzer", "1 adet"], ["9 V pil + klipsli jak", "1 set"]],
    [
      ["Sensör", "Sensörün + ucunu pin 7'ye (sadece ölçerken beslenecek), - ucunu GND'ye, S ucunu A0'a bağla."],
      ["Buzzer", "Buzzer'ı pin 8'e bağla."],
      ["Eşik", "Kuru ve ıslak değerleri Seri Monitörden okuyup ESIK değerini ayarla."],
      ["Yerleştir", "Sensörü zemine yakın, devreyi yükseğe ve kuru bir yere yerleştir."],
    ],
    ["Sensörü sadece ölçüm anında beslemek paslanmasını yavaşlatır."],
    [DUSUK, "Elektrik prizlerine yakın su varsa önce sigortayı kapat; devreye değil, suya öncelik ver."],
    {
      kod: `const int GUC = 7, SENSOR = A0, BUZZER = 8;
const int ESIK = 300;

void setup() {
  pinMode(GUC, OUTPUT);
  pinMode(BUZZER, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  digitalWrite(GUC, HIGH);
  delay(10);
  int deger = analogRead(SENSOR);
  digitalWrite(GUC, LOW);
  Serial.println(deger);
  digitalWrite(BUZZER, deger > ESIK ? HIGH : LOW);
  delay(1000);
}`,
    },
  ),

  p(
    "akilli-saksi-pompa",
    "sprout-outline",
    "Otomatik Bitki Sulama",
    "Orta",
    "2 saat",
    "Toprak kuruyunca mini pompayla kendiliğinden sulayan sistem.",
    [
      UNO,
      ["Kapasitif toprak nem sensörü", "1 adet"],
      ["5 V mini dalgıç pompa + hortum", "1 set"],
      ["5 V röle modülü veya MOSFET modülü", "1 adet"],
      ["Su haznesi (pet şişe)", "1 adet"],
    ],
    [
      ["Sensör", "Nem sensörünü A0'a bağla, toprağa göm."],
      ["Pompa", "Pompayı röle/MOSFET modülü üzerinden 5V'a bağla; modülün kontrol ucunu pin 7'ye bağla."],
      ["Kalibre et", "Kuru toprak ve ıslak toprak değerlerini okuyup KURU eşiğini belirle."],
      ["Test", "Pompanın kısa süre (2 sn) çalıştığını, ardından beklediğini doğrula."],
    ],
    ["Kapasitif sensör paslanmaz; ucuz rezistif sensörler birkaç haftada bozulur."],
    [DUSUK, "Elektronik kısmı su haznesinin üstüne değil, yanına ve su sıçramayacak yere koy."],
    {
      kod: `const int SENSOR = A0, POMPA = 7;
const int KURU = 600; // kapasitif sensörde değer kuruyunca artar

void setup() {
  pinMode(POMPA, OUTPUT);
  digitalWrite(POMPA, LOW);
  Serial.begin(9600);
}

void loop() {
  int nem = analogRead(SENSOR);
  Serial.println(nem);
  if (nem > KURU) {
    digitalWrite(POMPA, HIGH);
    delay(2000);
    digitalWrite(POMPA, LOW);
    delay(30000); // su toprağa yayılsın
  }
  delay(5000);
}`,
    },
  ),

  p(
    "elektronik-zar",
    "dice-5-outline",
    "Elektronik Zar",
    "Orta",
    "1,5 saat",
    "Butona basınca 1–6 arası rastgele sayıyı LED'lerle gösteren zar.",
    [UNO, BB, ["LED", "6 adet"], ["220 Ω direnç", "6 adet"], ["Push buton", "1 adet"]],
    [
      ["LED'ler", "6 LED'i dirençlerle pin 3–8'e bağla."],
      ["Buton", "Butonu pin 2 ve GND arasına bağla."],
      ["Yükle", "Kodu yükle."],
      ["At", "Butona basınca LED'ler kısa süre döner, ardından sonucu gösterir."],
    ],
    ["randomSeed için boş bir analog pin okumak her açılışta farklı sonuç sağlar."],
    [DUSUK],
    {
      kod: `const int BUTON = 2;

void goster(int n) {
  for (int i = 0; i < 6; i++) digitalWrite(3 + i, i < n ? HIGH : LOW);
}

void setup() {
  for (int i = 3; i <= 8; i++) pinMode(i, OUTPUT);
  pinMode(BUTON, INPUT_PULLUP);
  randomSeed(analogRead(A5));
}

void loop() {
  if (digitalRead(BUTON) == LOW) {
    for (int i = 0; i < 12; i++) {
      goster(random(1, 7));
      delay(60 + i * 10);
    }
    goster(random(1, 7));
    delay(500);
  }
}`,
    },
  ),

  p(
    "sicaklik-fan",
    "fan",
    "Sıcaklığa Göre Çalışan Fan",
    "Orta",
    "1,5 saat",
    "Ortam ısınınca hızlanan 5 V fan kontrolü.",
    [
      UNO,
      BB,
      ["TMP36 sıcaklık sensörü", "1 adet"],
      ["5 V DC fan", "1 adet"],
      ["Lojik seviye MOSFET modülü", "1 adet"],
      ["1N4007 diyot", "1 adet"],
    ],
    [
      ["Sensör", "TMP36'nın sol bacağını 5V'a, orta bacağını A0'a, sağ bacağını GND'ye bağla."],
      ["Fan", "Fanı MOSFET modülü üzerinden sür; modülün sinyal ucunu pin 3'e bağla."],
      ["Diyot", "Fanın uçlarına ters yönde diyot bağla; motor geri gerilimini söndürür."],
      ["Ayarla", "Koddaki BASLA ve TAM sıcaklıklarını ihtiyacına göre değiştir."],
    ],
    ["Fanı doğrudan Arduino pinine bağlama; pin en fazla 20 mA verir."],
    [DUSUK, KISA, "Fan pervanesine parmak sokma."],
    {
      kod: `const int SENSOR = A0, FAN = 3;
const float BASLA = 26.0, TAM = 32.0;

void setup() {
  pinMode(FAN, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  float volt = analogRead(SENSOR) * 5.0 / 1023.0;
  float sicaklik = (volt - 0.5) * 100.0;
  int hiz = 0;
  if (sicaklik >= TAM) hiz = 255;
  else if (sicaklik > BASLA) hiz = map((int)(sicaklik * 10), (int)(BASLA * 10), (int)(TAM * 10), 80, 255);
  analogWrite(FAN, hiz);
  Serial.println(sicaklik);
  delay(1000);
}`,
    },
  ),

  p(
    "kapi-alarmi",
    "door-open",
    "Manyetik Kapı / Dolap Alarmı",
    "Kolay",
    "45 dk",
    "Kapı açılınca uyaran reed (manyetik) anahtarlı alarm.",
    [UNO, ["Manyetik kapı sensörü (reed + mıknatıs)", "1 set"], ["Aktif buzzer", "1 adet"], ["Jumper kablo", "1 set"]],
    [
      ["Sensör", "Reed anahtarın uçlarını pin 2 ve GND'ye bağla."],
      ["Buzzer", "Buzzer'ı pin 8'e bağla."],
      ["Montaj", "Sensörü kasaya, mıknatısı kapıya karşılıklı ve 1 cm'den yakın yapıştır."],
      ["Test", "Kapıyı açınca buzzer öter."],
    ],
    ["Mıknatıs sensöre 1–2 cm'den uzak kalırsa sürekli açık algılar."],
    [DUSUK],
    {
      kod: `const int REED = 2, BUZZER = 8;

void setup() {
  pinMode(REED, INPUT_PULLUP);
  pinMode(BUZZER, OUTPUT);
}

void loop() {
  bool acik = digitalRead(REED) == HIGH;
  digitalWrite(BUZZER, acik ? HIGH : LOW);
  delay(100);
}`,
    },
  ),

  p(
    "lehim-baslangic",
    "soldering-iron",
    "İlk Lehim: LED Kit Montajı",
    "Orta",
    "2 saat",
    "Delikli karta lehimleyerek yanıp sönen LED kiti yapma.",
    [
      ["Yanıp sönen LED lehim kiti (555 tabanlı)", "1 adet"],
      ["Ayarlı havya + stand", "1 set", true],
      ["Lehim teli (kurşunsuz, reçine özlü)", "1 makara"],
      ["Yan keski", "1 adet", true],
      ["Nemli sünger veya pirinç temizleyici", "1 adet", true],
      ["Koruyucu gözlük", "1 adet", true],
    ],
    [
      ["Hazırlık", "Havyayı 330–350 °C'ye ayarla, ucunu kalaylanmış ve temiz tut."],
      [
        "Yerleştir",
        "En alçak parçadan (dirençler) başlayarak parçaları karta yerleştir, bacaklarını hafif büküp sabitle.",
      ],
      [
        "Lehimle",
        "Havyayla ped ve bacağı aynı anda 2 saniye ısıt, teli birleşim noktasına değdir; parlak koni oluşunca çek.",
      ],
      ["Kes", "Fazla bacakları keskiyle kes."],
      ["Kontrol", "Kutupluluğu (LED, elektrolitik kondansatör, entegre) kontrol edip pili tak."],
    ],
    ["İyi lehim parlak ve volkan şeklindedir; top gibi duruyorsa ped yeterince ısınmamıştır."],
    [LEHIM, "Bacakları keserken parçaları gözünden uzağa doğru tut; gözlük tak."],
  ),
];
