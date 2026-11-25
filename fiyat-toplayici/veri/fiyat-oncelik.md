# Fiyat girme öncelik listesi

Otomatik üretildi: `npm run oncelik` · 2026-11-25

- Katalog kalemi: **1427** · fiyatlı: **197**
- Malzeme satırı kapsamı: **411 / 1819** (%22.6)
- Tüm malzemelerinin fiyatı bilinen proje: **25 / 400**

Nasıl girilir: `veri/manuel.csv` → `katalogId;mağaza;fiyat;ürün-linki;tarih`. Link **ürün sayfası** olmalı (kategori/arama sayfası değil).
Alet olan kalemlerde (⚒) en uygun fiyatlı güvenilir ürünü seç; sarf malzemede en küçük uygun paketi seç.

## 1) Altın 40 için eksik fiyatlar (36 kalem · tam fiyatlı: 25/40)

Hedef: seçkin projelerin tamamında fiyat. Önce bunları gir.

| katalogId | Ad | Tür |
|---|---|---|
| `ahsap-kutuk-dilimi` | Ahşap kütük dilimi (ıhlamur/kayın) | sarf |
| `ahsap-tekerlek-40-mm` | Ahşap tekerlek Ø40 mm | sarf |
| `akrilik-maket-boyasi-seti` | Akrilik maket boyası seti | sarf |
| `bitkisel-tabaklanmis-deri-1-2-1-5-mm` | Bitkisel tabaklanmış deri 1,2–1,5 mm | sarf |
| `cam-blok-4-8-18-cm` | Çam blok 4×8×18 cm | sarf |
| `cam-damla-boncuk` | Cam damla boncuk | sarf |
| `cam-tahta-1-8-12-cm` | Çam tahta 1,8×12 cm | sarf |
| `cift-basli-percin-cakma-aparati` | Çift başlı perçin + çakma aparatı | sarf |
| `dal-parcalari` | Dal parçaları (çit için) | sarf |
| `dekor-tasi-kok` | Dekor taşı / kök | sarf |
| `deri-serit-2-5-20-cm` | Deri şerit 2,5×20 cm | sarf |
| `el-testeresi` | El testeresi | ⚒ alet |
| `genis-alcak-saksi` | Geniş, alçak saksı | sarf |
| `igne-civi-5-cm` | İğne çivi (headpin) 5 cm | sarf |
| `ince-firca-seti` | İnce fırça seti (000–2 numara) | sarf |
| `islenmemis-cam-tahta-15-mm` | İşlenmemiş çam tahta 15 mm | sarf |
| `kaydirmali-samandira-3-5-g` | Kaydırmalı şamandıra 3–5 g | sarf |
| `kenar-yuvarlatici-kenar-cilasi` | Kenar yuvarlatıcı + kenar cilası | sarf |
| `kolye-halkasi-zincir` | Kolye halkası + zincir | sarf |
| `kozmetik-uyumlu-esans` | Kozmetik uyumlu esans | sarf |
| `masif-sert-agac-35-22-2-cm` | Masif sert ağaç (kayın/meşe/ceviz) 35×22×2 cm | sarf |
| `mentese` | Menteşe (küçük) | sarf |
| `mini-isi-tabancasi-kurdan` | Mini ısı tabancası / kürdan | ⚒ alet |
| `minyatur-ev-kapi` | Minyatür ev / kapı (kil veya hazır) | sarf |
| `olcu-kabi-ve-karistirma-cubugu` | Ölçü kabı ve karıştırma çubuğu | sarf |
| `olta-ignesi-no-8-10` | Olta iğnesi no. 8–10 | sarf |
| `pamuk-makrome-ipi-4-mm` | Pamuk makrome ipi 4 mm | sarf |
| `pvc-boru-20-mm` | PVC boru Ø20 mm | sarf |
| `pvc-kapak-20-mm` | PVC kapak Ø20 mm | sarf |
| `sacma-kursun-seti` | Saçma kurşun seti | sarf |
| `sig-tepsi` | Sığ tepsi (delikli + deliksiz) | sarf |
| `su-test-kiti` | Su test kiti (NH3/NO2/NO3/pH) | sarf |
| `testere` | Testere | ⚒ alet |
| `uzun-balkon-saksisi-60-cm` | Uzun balkon saksısı 60 cm | sarf |
| `zimba-4-mm` | Zımba (pricking iron) 4 mm | ⚒ alet |
| `zincir-asinma-olcer` | Zincir aşınma ölçer | ⚒ alet |

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
| 12 | `kolye-halkasi-zincir` | Kolye halkası + zincir | 3 | sarf |
| 13 | `kova` | Kova (sadece akvaryum için) | 3 | ⚒ alet |
| 14 | `pamuk-fitil` | Pamuk fitil | 3 | sarf |
| 15 | `pipet` | Pipet (delik açmak için) | 3 | sarf |
| 16 | `su-test-kiti` | Su test kiti (NH3/NO2/NO3/pH) | 3 | sarf |
| 17 | `zincir-yagi` | Zincir yağı | 3 | sarf |
| 18 | `boncuk` | Boncuk (isteğe bağlı) | 3 | sarf |
| 19 | `cakmak` | Çakmak (uçları eritmek için) | 3 | ⚒ alet |
| 20 | `darbeli-matkap-matkap-uclari` | Darbeli matkap + matkap uçları | 3 | ⚒ alet |
| 21 | `elyaf-dolgu` | Elyaf dolgu | 3 | sarf |
| 22 | `gidaya-uygun-yag` | Gıdaya uygun yağ | 3 | sarf |
| 23 | `halka-belirleyici` | Halka belirleyici | 3 | sarf |
| 24 | `isi-tabancasi` | Isı tabancası | 3 | ⚒ alet |
| 25 | `kalin-bitkisel-deri-3-mm` | Kalın bitkisel deri 3 mm | 3 | sarf |
| 26 | `kostik-soda-sodyum-hidroksit-saf` | Kostik soda (sodyum hidroksit, saf) | 3 | sarf |
| 27 | `kursun-kalem` | Kurşun kalem | 3 | sarf |
| 28 | `l298n-motor-surucu` | L298N motor sürücü | 3 | sarf |
| 29 | `mentese` | Menteşe (küçük) | 3 | sarf |
| 30 | `mikrofiber-bez` | Mikrofiber bez | 3 | sarf |
| 31 | `nitril-eldiven` | Nitril eldiven | 3 | ⚒ alet |
| 32 | `pense-seti` | Pense seti | 3 | ⚒ alet |
| 33 | `petg-filament` | PETG filament | 2 | sarf |
| 34 | `pla-filament` | PLA filament | 2 | sarf |
| 35 | `sig-tepsi` | Sığ tepsi (delikli + deliksiz) | 2 | sarf |
| 36 | `terraryum-topragi` | Terraryum toprağı | 3 | sarf |
| 37 | `testere-matkap` | Testere + matkap | 3 | ⚒ alet |
| 38 | `toz-pastel` | Toz pastel (yanak) | 2 | sarf |
| 39 | `uv-recine` | UV reçine | 3 | sarf |
| 40 | `uzun-cimbiz` | Uzun cımbız | 3 | ⚒ alet |
| 41 | `zimba-seti` | Zımba seti (4 mm, 4 dişli) | 3 | ⚒ alet |
| 42 | `zimpara-120-240` | Zımpara 120/240 | 3 | sarf |
| 43 | `16-2-lcd-i2c-modulu` | 16×2 LCD + I2C modülü | 2 | sarf |
| 44 | `akrilik-boya-vernik` | Akrilik boya + vernik | 2 | sarf |
| 45 | `aluminyum-folyo` | Alüminyum folyo | 2 | sarf |
| 46 | `kablo-kesici` | Kablo kesici | 2 | ⚒ alet |
| 47 | `kumpas` | Kumpas (masa kalınlığı) | 2 | ⚒ alet |
| 48 | `makrome-ipi-3-mm` | Makrome ipi 3 mm | 2 | sarf |
| 49 | `sablon` | Şablon | 2 | sarf |
| 50 | `vernik` | Vernik | 2 | sarf |
| 51 | `yildiz-tornavida` | Yıldız tornavida | 2 | ⚒ alet |
| 52 | `zincir-asinma-olcer` | Zincir aşınma ölçer | 2 | ⚒ alet |
| 53 | `2-kanalli-kumanda-alici` | 2 kanallı kumanda + alıcı | 2 | ⚒ alet |
| 54 | `2wd-robot-sasi-kiti` | 2WD robot şasi kiti | 2 | sarf |
| 55 | `4-aa-pil-yuvasi` | 4×AA pil yuvası | 2 | sarf |
| 56 | `5-v-usb-adaptor` | 5 V USB adaptör | 2 | ⚒ alet |
| 57 | `ahsap-halka` | Ahşap halka | 2 | sarf |
| 58 | `ahsap-kutu` | Ahşap kutu (çatılı) | 2 | sarf |
| 59 | `ahsap-pano-30-30-cm` | Ahşap pano 30×30 cm | 2 | sarf |
| 60 | `ahsap-tekerlek-40-mm` | Ahşap tekerlek Ø40 mm | 2 | sarf |
| 61 | `ahsap-vernik-veya-yag` | Ahşap vernik veya yağ | 2 | sarf |
| 62 | `ahsap-yagi` | Ahşap yağı | 2 | sarf |
| 63 | `akvaryum-silikonu` | Akvaryum silikonu | 2 | sarf |
| 64 | `arduino-nano` | Arduino Nano | 2 | ⚒ alet |
| 65 | `balon` | Balon | 2 | sarf |
| 66 | `beyaz-tutkal` | Beyaz tutkal (PVA) | 2 | sarf |
| 67 | `bitkisel-tabakli-deri` | Bitkisel tabaklı deri (krom değil) | 2 | sarf |
| 68 | `buyuk-koli-kutusu` | Büyük koli kutusu | 2 | sarf |
| 69 | `cift-basli-percin` | Çift başlı perçin | 2 | sarf |
| 70 | `citcit-seti` | Çıtçıt seti | 2 | sarf |
| 71 | `dal-parcalari` | Dal parçaları (çit için) | 2 | sarf |
| 72 | `delik-testere-dekupaj` | Delik testere / dekupaj | 2 | ⚒ alet |
| 73 | `deri-cilasi` | Deri cilası (resolene benzeri) | 2 | sarf |
| 74 | `deri-yapistiricisi` | Deri yapıştırıcısı | 2 | sarf |
| 75 | `desen-sablonu` | Desen şablonu | 2 | sarf |
| 76 | `dubel-ve-vida` | Dübel ve vida (duvara uygun) | 2 | sarf |
| 77 | `duvar-tipine-uygun-dubel-vida` | Duvar tipine uygun dübel + vida | 2 | sarf |
| 78 | `duz-taslar` | Düz taşlar | 2 | sarf |
| 79 | `el-blenderi` | El blenderı (sadece sabun için) | 2 | ⚒ alet |
| 80 | `eski-dis-fircasi` | Eski diş fırçası | 2 | sarf |
| 81 | `gonye-testere` | Gönye testere | 2 | ⚒ alet |
| 82 | `guclu-yapistirici` | Güçlü yapıştırıcı (E6000 vb.) | 2 | sarf |
| 83 | `halka` | Halka (split ring) | 2 | sarf |
| 84 | `harf-silikon-kalibi` | Harf silikon kalıbı | 2 | sarf |
| 85 | `havya-lehim` | Havya + lehim (isteğe bağlı) | 2 | ⚒ alet |
| 86 | `hindistan-cevizi-yagi` | Hindistan cevizi yağı | 2 | sarf |
| 87 | `kablo-boru-dedektoru` | Kablo-boru dedektörü | 2 | ⚒ alet |
| 88 | `kagit-huni` | Kağıt huni | 2 | sarf |
| 89 | `kalin-ip` | Kalın ip | 2 | sarf |
| 90 | `kalin-mukavva` | Kalın mukavva (taban ve şablon) | 2 | sarf |
| 91 | `kece` | Keçe (kırmızı, beyaz, siyah) | 2 | sarf |
| 92 | `kesilmeye-dayanikli-eldiven` | Kesilmeye dayanıklı eldiven | 2 | ⚒ alet |
| 93 | `kilit` | Kilit | 2 | sarf |
| 94 | `kirmizi-led-220-direnc` | Kırmızı LED + 220 Ω direnç | 2 | sarf |
| 95 | `kontrplak-9-mm` | Kontrplak 9 mm (kavak veya huş) | 2 | sarf |
| 96 | `led-ampul` | LED ampul (düşük ısı) | 2 | sarf |
| 97 | `makas-mezura` | Makas + mezura | 2 | ⚒ alet |
| 98 | `mikro-servo` | Mikro servo (dümen) | 2 | sarf |
| 99 | `nakis-ipi` | Nakış ipi (göz) | 2 | sarf |
| 100 | `nakis-ipligi` | Nakış ipliği | 2 | sarf |
