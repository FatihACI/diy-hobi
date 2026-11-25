# Fiyat girme öncelik listesi

Otomatik üretildi: `npm run oncelik` · 2026-11-25

- Katalog kalemi: **1427** · fiyatlı: **221**
- Malzeme satırı kapsamı: **441 / 1819** (%24.2)
- Tüm malzemelerinin fiyatı bilinen proje: **34 / 400**

Nasıl girilir: `veri/manuel.csv` → `katalogId;mağaza;fiyat;ürün-linki;tarih`. Link **ürün sayfası** olmalı (kategori/arama sayfası değil).
Alet olan kalemlerde (⚒) en uygun fiyatlı güvenilir ürünü seç; sarf malzemede en küçük uygun paketi seç.

## 1) Altın 40 için eksik fiyatlar (12 kalem · tam fiyatlı: 34/40)

Hedef: seçkin projelerin tamamında fiyat. Önce bunları gir.

| katalogId | Ad | Tür |
|---|---|---|
| `ahsap-tekerlek-40-mm` | Ahşap tekerlek Ø40 mm | sarf |
| `cam-tahta-1-8-12-cm` | Çam tahta 1,8×12 cm | sarf |
| `dal-parcalari` | Dal parçaları (çit için) | sarf |
| `dekor-tasi-kok` | Dekor taşı / kök | sarf |
| `deri-serit-2-5-20-cm` | Deri şerit 2,5×20 cm | sarf |
| `igne-civi-5-cm` | İğne çivi (headpin) 5 cm | sarf |
| `islenmemis-cam-tahta-15-mm` | İşlenmemiş çam tahta 15 mm | sarf |
| `masif-sert-agac-35-22-2-cm` | Masif sert ağaç (kayın/meşe/ceviz) 35×22×2 cm | sarf |
| `mini-isi-tabancasi-kurdan` | Mini ısı tabancası / kürdan | ⚒ alet |
| `sacma-kursun-seti` | Saçma kurşun seti | sarf |
| `sig-tepsi` | Sığ tepsi (delikli + deliksiz) | sarf |
| `su-test-kiti` | Su test kiti (NH3/NO2/NO3/pH) | sarf |

## 2) Genel öncelik (en çok projeyi etkileyen ilk 100)

| # | katalogId | Ad | Proje | Tür |
|---|---|---|---|---|
| 1 | `akrilik-boya` | Akrilik boya (kahverengi, gri, siyah) | 10 | sarf |
| 2 | `pigment` | Pigment (beyaz, mavi) | 7 | sarf |
| 3 | `220-direnc` | 220 Ω direnç | 3 | sarf |
| 4 | `led-220-direnc` | LED + 220 Ω direnç | 3 | sarf |
| 5 | `10-k-potansiyometre` | 10 kΩ potansiyometre | 3 | sarf |
| 6 | `dikis-ipi-igne` | Dikiş ipi + iğne | 4 | sarf |
| 7 | `matkap-8-mm-uc` | Matkap + Ø8 mm uç | 4 | ⚒ alet |
| 8 | `saf-su` | Saf su (damıtık) | 4 | sarf |
| 9 | `aktif-buzzer` | Aktif buzzer | 3 | sarf |
| 10 | `bant` | Bant (işaret için) | 3 | sarf |
| 11 | `boya-vernik` | Boya + vernik | 3 | sarf |
| 12 | `kova` | Kova (sadece akvaryum için) | 3 | ⚒ alet |
| 13 | `pamuk-fitil` | Pamuk fitil | 3 | sarf |
| 14 | `pipet` | Pipet (delik açmak için) | 3 | sarf |
| 15 | `su-test-kiti` | Su test kiti (NH3/NO2/NO3/pH) | 3 | sarf |
| 16 | `zincir-yagi` | Zincir yağı | 3 | sarf |
| 17 | `boncuk` | Boncuk (isteğe bağlı) | 3 | sarf |
| 18 | `cakmak` | Çakmak (uçları eritmek için) | 3 | ⚒ alet |
| 19 | `darbeli-matkap-matkap-uclari` | Darbeli matkap + matkap uçları | 3 | ⚒ alet |
| 20 | `elyaf-dolgu` | Elyaf dolgu | 3 | sarf |
| 21 | `gidaya-uygun-yag` | Gıdaya uygun yağ | 3 | sarf |
| 22 | `halka-belirleyici` | Halka belirleyici | 3 | sarf |
| 23 | `isi-tabancasi` | Isı tabancası | 3 | ⚒ alet |
| 24 | `kalin-bitkisel-deri-3-mm` | Kalın bitkisel deri 3 mm | 3 | sarf |
| 25 | `kostik-soda-sodyum-hidroksit-saf` | Kostik soda (sodyum hidroksit, saf) | 3 | sarf |
| 26 | `kursun-kalem` | Kurşun kalem | 3 | sarf |
| 27 | `l298n-motor-surucu` | L298N motor sürücü | 3 | sarf |
| 28 | `mikrofiber-bez` | Mikrofiber bez | 3 | sarf |
| 29 | `nitril-eldiven` | Nitril eldiven | 3 | ⚒ alet |
| 30 | `pense-seti` | Pense seti | 3 | ⚒ alet |
| 31 | `petg-filament` | PETG filament | 2 | sarf |
| 32 | `pla-filament` | PLA filament | 2 | sarf |
| 33 | `sig-tepsi` | Sığ tepsi (delikli + deliksiz) | 2 | sarf |
| 34 | `terraryum-topragi` | Terraryum toprağı | 3 | sarf |
| 35 | `testere-matkap` | Testere + matkap | 3 | ⚒ alet |
| 36 | `toz-pastel` | Toz pastel (yanak) | 2 | sarf |
| 37 | `uv-recine` | UV reçine | 3 | sarf |
| 38 | `uzun-cimbiz` | Uzun cımbız | 3 | ⚒ alet |
| 39 | `zimba-seti` | Zımba seti (4 mm, 4 dişli) | 3 | ⚒ alet |
| 40 | `zimpara-120-240` | Zımpara 120/240 | 3 | sarf |
| 41 | `16-2-lcd-i2c-modulu` | 16×2 LCD + I2C modülü | 2 | sarf |
| 42 | `ahsap-tekerlek-40-mm` | Ahşap tekerlek Ø40 mm | 2 | sarf |
| 43 | `akrilik-boya-vernik` | Akrilik boya + vernik | 2 | sarf |
| 44 | `aluminyum-folyo` | Alüminyum folyo | 2 | sarf |
| 45 | `dal-parcalari` | Dal parçaları (çit için) | 2 | sarf |
| 46 | `kablo-kesici` | Kablo kesici | 2 | ⚒ alet |
| 47 | `kumpas` | Kumpas (masa kalınlığı) | 2 | ⚒ alet |
| 48 | `makrome-ipi-3-mm` | Makrome ipi 3 mm | 2 | sarf |
| 49 | `sablon` | Şablon | 2 | sarf |
| 50 | `vernik` | Vernik | 2 | sarf |
| 51 | `yildiz-tornavida` | Yıldız tornavida | 2 | ⚒ alet |
| 52 | `2-kanalli-kumanda-alici` | 2 kanallı kumanda + alıcı | 2 | ⚒ alet |
| 53 | `2wd-robot-sasi-kiti` | 2WD robot şasi kiti | 2 | sarf |
| 54 | `4-aa-pil-yuvasi` | 4×AA pil yuvası | 2 | sarf |
| 55 | `5-v-usb-adaptor` | 5 V USB adaptör | 2 | ⚒ alet |
| 56 | `ahsap-halka` | Ahşap halka | 2 | sarf |
| 57 | `ahsap-kutu` | Ahşap kutu (çatılı) | 2 | sarf |
| 58 | `ahsap-pano-30-30-cm` | Ahşap pano 30×30 cm | 2 | sarf |
| 59 | `ahsap-vernik-veya-yag` | Ahşap vernik veya yağ | 2 | sarf |
| 60 | `ahsap-yagi` | Ahşap yağı | 2 | sarf |
| 61 | `akvaryum-silikonu` | Akvaryum silikonu | 2 | sarf |
| 62 | `arduino-nano` | Arduino Nano | 2 | ⚒ alet |
| 63 | `balon` | Balon | 2 | sarf |
| 64 | `beyaz-tutkal` | Beyaz tutkal (PVA) | 2 | sarf |
| 65 | `bitkisel-tabakli-deri` | Bitkisel tabaklı deri (krom değil) | 2 | sarf |
| 66 | `buyuk-koli-kutusu` | Büyük koli kutusu | 2 | sarf |
| 67 | `cift-basli-percin` | Çift başlı perçin | 2 | sarf |
| 68 | `citcit-seti` | Çıtçıt seti | 2 | sarf |
| 69 | `delik-testere-dekupaj` | Delik testere / dekupaj | 2 | ⚒ alet |
| 70 | `deri-cilasi` | Deri cilası (resolene benzeri) | 2 | sarf |
| 71 | `deri-yapistiricisi` | Deri yapıştırıcısı | 2 | sarf |
| 72 | `desen-sablonu` | Desen şablonu | 2 | sarf |
| 73 | `dubel-ve-vida` | Dübel ve vida (duvara uygun) | 2 | sarf |
| 74 | `duvar-tipine-uygun-dubel-vida` | Duvar tipine uygun dübel + vida | 2 | sarf |
| 75 | `duz-taslar` | Düz taşlar | 2 | sarf |
| 76 | `el-blenderi` | El blenderı (sadece sabun için) | 2 | ⚒ alet |
| 77 | `eski-dis-fircasi` | Eski diş fırçası | 2 | sarf |
| 78 | `gonye-testere` | Gönye testere | 2 | ⚒ alet |
| 79 | `guclu-yapistirici` | Güçlü yapıştırıcı (E6000 vb.) | 2 | sarf |
| 80 | `halka` | Halka (split ring) | 2 | sarf |
| 81 | `harf-silikon-kalibi` | Harf silikon kalıbı | 2 | sarf |
| 82 | `havya-lehim` | Havya + lehim (isteğe bağlı) | 2 | ⚒ alet |
| 83 | `hindistan-cevizi-yagi` | Hindistan cevizi yağı | 2 | sarf |
| 84 | `kablo-boru-dedektoru` | Kablo-boru dedektörü | 2 | ⚒ alet |
| 85 | `kagit-huni` | Kağıt huni | 2 | sarf |
| 86 | `kalin-ip` | Kalın ip | 2 | sarf |
| 87 | `kalin-mukavva` | Kalın mukavva (taban ve şablon) | 2 | sarf |
| 88 | `kece` | Keçe (kırmızı, beyaz, siyah) | 2 | sarf |
| 89 | `kesilmeye-dayanikli-eldiven` | Kesilmeye dayanıklı eldiven | 2 | ⚒ alet |
| 90 | `kilit` | Kilit | 2 | sarf |
| 91 | `kirmizi-led-220-direnc` | Kırmızı LED + 220 Ω direnç | 2 | sarf |
| 92 | `kontrplak-9-mm` | Kontrplak 9 mm (kavak veya huş) | 2 | sarf |
| 93 | `led-ampul` | LED ampul (düşük ısı) | 2 | sarf |
| 94 | `makas-mezura` | Makas + mezura | 2 | ⚒ alet |
| 95 | `mikro-servo` | Mikro servo (dümen) | 2 | sarf |
| 96 | `nakis-ipi` | Nakış ipi (göz) | 2 | sarf |
| 97 | `nakis-ipligi` | Nakış ipliği | 2 | sarf |
| 98 | `pamuklu-ip` | Pamuklu ip (4 kalınlık) | 2 | sarf |
| 99 | `paslanmaz-vida` | Paslanmaz vida | 2 | sarf |
| 100 | `pense` | Pense | 2 | ⚒ alet |
