# Fiyat girme öncelik listesi

Otomatik üretildi: `npm run oncelik` · 2026-11-27

- Katalog kalemi: **1426** · fiyatlı: **265**
- Malzeme satırı kapsamı: **562 / 1817** (%30.9)
- Tüm malzemelerinin fiyatı bilinen proje: **49 / 400**

Nasıl girilir: `veri/manuel.csv` → `katalogId;mağaza;fiyat;ürün-linki;tarih`. Link **ürün sayfası** olmalı (kategori/arama sayfası değil).
Alet olan kalemlerde (⚒) en uygun fiyatlı güvenilir ürünü seç; sarf malzemede en küçük uygun paketi seç.

## 1) Altın 40 için eksik fiyatlar (1 kalem · tam fiyatlı: 39/40)

Hedef: seçkin projelerin tamamında fiyat. Önce bunları gir.

| katalogId | Ad | Tür |
|---|---|---|
| `ahsap-tekerlek-40-mm` | Ahşap tekerlek Ø40 mm | sarf |

## 2) Genel öncelik (en çok projeyi etkileyen ilk 100)

| # | katalogId | Ad | Proje | Tür |
|---|---|---|---|---|
| 1 | `led-220-direnc` | LED + 220 Ω direnç | 3 | sarf |
| 2 | `boya-vernik` | Boya + vernik | 3 | sarf |
| 3 | `matkap-8-mm-uc` | Matkap + Ø8 mm uç | 4 | ⚒ alet |
| 4 | `boncuk` | Boncuk (isteğe bağlı) | 3 | sarf |
| 5 | `darbeli-matkap-matkap-uclari` | Darbeli matkap + matkap uçları | 3 | ⚒ alet |
| 6 | `kalin-bitkisel-deri-3-mm` | Kalın bitkisel deri 3 mm | 3 | sarf |
| 7 | `testere-matkap` | Testere + matkap | 3 | ⚒ alet |
| 8 | `zimpara-120-240` | Zımpara 120/240 | 3 | sarf |
| 9 | `2wd-robot-sasi-kiti` | 2WD robot şasi kiti | 2 | sarf |
| 10 | `4-aa-pil-yuvasi` | 4×AA pil yuvası | 2 | sarf |
| 11 | `ahsap-pano-30-30-cm` | Ahşap pano 30×30 cm | 2 | sarf |
| 12 | `ahsap-tekerlek-40-mm` | Ahşap tekerlek Ø40 mm | 2 | sarf |
| 13 | `akrilik-boya-vernik` | Akrilik boya + vernik | 2 | sarf |
| 14 | `balon` | Balon | 2 | sarf |
| 15 | `buyuk-koli-kutusu` | Büyük koli kutusu | 2 | sarf |
| 16 | `kalin-ip` | Kalın ip | 2 | sarf |
| 17 | `kirmizi-led-220-direnc` | Kırmızı LED + 220 Ω direnç | 2 | sarf |
| 18 | `makrome-ipi-3-mm` | Makrome ipi 3 mm | 2 | sarf |
| 19 | `saat-mekanizmasi-ibreler` | Saat mekanizması + ibreler | 2 | sarf |
| 20 | `sablon` | Şablon | 2 | sarf |
| 21 | `sac-kurutma-makinesi` | Saç kurutma makinesi | 2 | ⚒ alet |
| 22 | `sicak-su` | Sıcak su | 2 | sarf |
| 23 | `vernik` | Vernik | 2 | sarf |
| 24 | `yildiz-tornavida` | Yıldız tornavida | 2 | ⚒ alet |
| 25 | `yumusak-bez` | Yumuşak bez | 2 | sarf |
| 26 | `2-kanalli-kumanda-alici` | 2 kanallı kumanda + alıcı | 2 | ⚒ alet |
| 27 | `5-v-usb-adaptor` | 5 V USB adaptör | 2 | ⚒ alet |
| 28 | `ahsap-halka` | Ahşap halka | 2 | sarf |
| 29 | `ahsap-kutu` | Ahşap kutu (çatılı) | 2 | sarf |
| 30 | `ahsap-vernik-veya-yag` | Ahşap vernik veya yağ | 2 | sarf |
| 31 | `ahsap-yagi` | Ahşap yağı | 2 | sarf |
| 32 | `akvaryum-silikonu` | Akvaryum silikonu | 2 | sarf |
| 33 | `arduino-nano` | Arduino Nano | 2 | ⚒ alet |
| 34 | `beyaz-tutkal` | Beyaz tutkal (PVA) | 2 | sarf |
| 35 | `bitkisel-tabakli-deri` | Bitkisel tabaklı deri (krom değil) | 2 | sarf |
| 36 | `cift-basli-percin` | Çift başlı perçin | 2 | sarf |
| 37 | `citcit-seti` | Çıtçıt seti | 2 | sarf |
| 38 | `delik-testere-dekupaj` | Delik testere / dekupaj | 2 | ⚒ alet |
| 39 | `deri-cilasi` | Deri cilası (resolene benzeri) | 2 | sarf |
| 40 | `deri-yapistiricisi` | Deri yapıştırıcısı | 2 | sarf |
| 41 | `desen-sablonu` | Desen şablonu | 2 | sarf |
| 42 | `dubel-ve-vida` | Dübel ve vida (duvara uygun) | 2 | sarf |
| 43 | `duvar-tipine-uygun-dubel-vida` | Duvar tipine uygun dübel + vida | 2 | sarf |
| 44 | `duz-taslar` | Düz taşlar | 2 | sarf |
| 45 | `el-blenderi` | El blenderı (sadece sabun için) | 2 | ⚒ alet |
| 46 | `eski-dis-fircasi` | Eski diş fırçası | 2 | sarf |
| 47 | `gonye-testere` | Gönye testere | 2 | ⚒ alet |
| 48 | `guclu-yapistirici` | Güçlü yapıştırıcı (E6000 vb.) | 2 | sarf |
| 49 | `halka` | Halka (split ring) | 2 | sarf |
| 50 | `harf-silikon-kalibi` | Harf silikon kalıbı | 2 | sarf |
| 51 | `havya-lehim` | Havya + lehim (isteğe bağlı) | 2 | ⚒ alet |
| 52 | `hindistan-cevizi-yagi` | Hindistan cevizi yağı | 2 | sarf |
| 53 | `kablo-boru-dedektoru` | Kablo-boru dedektörü | 2 | ⚒ alet |
| 54 | `kagit-huni` | Kağıt huni | 2 | sarf |
| 55 | `kalin-mukavva` | Kalın mukavva (taban ve şablon) | 2 | sarf |
| 56 | `kece` | Keçe (kırmızı, beyaz, siyah) | 2 | sarf |
| 57 | `kesilmeye-dayanikli-eldiven` | Kesilmeye dayanıklı eldiven | 2 | ⚒ alet |
| 58 | `kilit` | Kilit | 2 | sarf |
| 59 | `kontrplak-9-mm` | Kontrplak 9 mm (kavak veya huş) | 2 | sarf |
| 60 | `led-ampul` | LED ampul (düşük ısı) | 2 | sarf |
| 61 | `makas-mezura` | Makas + mezura | 2 | ⚒ alet |
| 62 | `mikro-servo` | Mikro servo (dümen) | 2 | sarf |
| 63 | `nakis-ipi` | Nakış ipi (göz) | 2 | sarf |
| 64 | `nakis-ipligi` | Nakış ipliği | 2 | sarf |
| 65 | `pamuklu-ip` | Pamuklu ip (4 kalınlık) | 2 | sarf |
| 66 | `paslanmaz-vida` | Paslanmaz vida | 2 | sarf |
| 67 | `pense` | Pense | 2 | ⚒ alet |
| 68 | `percin-cakma-seti` | Perçin çakma seti | 2 | ⚒ alet |
| 69 | `ponpon-yapici` | Ponpon yapıcı | 2 | ⚒ alet |
| 70 | `saglam-ip` | Sağlam ip | 2 | sarf |
| 71 | `shea-yagi` | Shea yağı | 2 | sarf |
| 72 | `silikon-yagi` | Silikon yağı (hücre için, isteğe bağlı) | 2 | sarf |
| 73 | `sivi-yag` | Sıvı yağ (kalıp ayırıcı) | 2 | sarf |
| 74 | `su-gecirmez-vernik` | Su geçirmez vernik | 2 | sarf |
| 75 | `sunger-kova` | Sünger + kova | 2 | sarf |
| 76 | `taki-yapistiricisi` | Takı yapıştırıcısı | 2 | sarf |
| 77 | `tealight-mum` | Tealight mum (metal kaplı) | 2 | sarf |
| 78 | `tillandsia` | Tillandsia (hava bitkisi) | 2 | sarf |
| 79 | `uclu-igne-no-6` | Üçlü iğne no. 6 | 2 | sarf |
| 80 | `vantuz` | Vantuz | 2 | sarf |
| 81 | `yagli-kagit` | Yağlı kağıt | 2 | sarf |
| 82 | `yun-ip` | Yün ip (saç için) | 2 | sarf |
| 83 | `zeytinyagi` | Zeytinyağı | 2 | sarf |
| 84 | `zimba` | Zımba | 2 | ⚒ alet |
| 85 | `5-mm-led` | 5 mm LED | 1 | sarf |
| 86 | `9-v-pil-klipsli-jak` | 9 V pil + klipsli jak | 1 | sarf |
| 87 | `ahsap-fitil-metal-tutucu` | Ahşap fitil + metal tutucu | 1 | sarf |
| 88 | `ahsap-kalemlik` | Ahşap kalemlik | 1 | sarf |
| 89 | `ahsap-kasik` | Ahşap kaşık (işlenmemiş) | 1 | sarf |
| 90 | `ahsap-kesme-tahtasi` | Ahşap kesme tahtası | 1 | sarf |
| 91 | `ahsap-vidasi-veya-guclu-cift-tarafli-bant` | Ahşap vidası veya güçlü çift taraflı bant | 1 | sarf |
| 92 | `akrilik-veya-pamuk-ip` | Akrilik veya pamuk ip (çeşitli renk) | 1 | sarf |
| 93 | `akvaryum-makasi` | Akvaryum makası | 1 | ⚒ alet |
| 94 | `akvaryum-sifonu` | Akvaryum sifonu (çan uçlu) | 1 | ⚒ alet |
| 95 | `altin-varak` | Altın varak | 1 | sarf |
| 96 | `altin-yaldiz-boya` | Altın yaldız boya | 1 | sarf |
| 97 | `aluminyum-tel` | Alüminyum tel (iskelet) | 1 | sarf |
| 98 | `ayni-tur-tas` | Aynı tür taş (seiryu, ejder taşı) | 1 | sarf |
| 99 | `az-viskoziteli-epoksi` | Az viskoziteli epoksi | 1 | sarf |
| 100 | `bakir-veya-gumus-kaplama-tel-0-8-mm` | Bakır veya gümüş kaplama tel 0,8 mm | 1 | sarf |
