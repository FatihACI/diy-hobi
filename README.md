# Evde Hobi (geçici ad)

Evde yapılabilecek hobi projelerini adım adım anlatan, malzeme listesini (BOM) ve güvenilir mağazalardaki en düşük fiyatı gösteren Android uygulaması. Expo / React Native ile yazıldı.

## Çizimleri kontrol etme

```
npx --prefix fiyat-toplayici tsx araclar/cizim-onizle.ts > cizimler.html
```

Oluşan `cizimler.html` dosyasını tarayıcıda açınca tüm karakalem çizimler ızgara halinde görünür.

## Klasör yapısı

```
App.tsx                 Navigasyon (alt sekmeler + ekran yığını)
src/
  theme.ts              Renkler, boşluklar, yazı stilleri
  data/                 Kategoriler (20, 4 grup) ve projeler (grup başına ayrı dosya)
  cizim/                Karakalem çizim verileri (kategori + proje)
  cizimler.tsx          Çizimleri ekrana basan bileşen
  fiyat.tsx             Fiyatları internetten okur, önbelleğe alır
  store.tsx             Favoriler, alışveriş listesi, biten adımlar (telefonda kalıcı)
  screens/              Ekranlar
fiyat-toplayici/        Fiyatları toplayan ayrı Node.js programı (sunucuda/GitHub'da çalışır)
.github/workflows/      Fiyatları her gün otomatik güncelleyen görev
```

## Telefonda çalıştırma (geliştirme)

```
npm install
npx expo start
```

Expo Go ile QR kodu tara. Bilgisayarda tarayıcı önizlemesi için terminalde `w` tuşuna bas.

## Yeni proje ekleme

1. `src/data/projeler.ts` içinde bir projeyi kopyala, `id`'yi benzersiz yap.
2. Malzeme id'leri tüm uygulamada benzersiz olmalı (fiyatlar bu id ile eşleşir).
3. İstersen `src/cizim/proje.ts` içine aynı `id` ile çizim ekle (yoksa kart boş kalır).
4. `cd fiyat-toplayici && npm run aktar` ile malzeme listesini toplayıcıya aktar.

## Fiyat sistemi

Uygulama fiyatları kendisi toplamaz; `fiyat-toplayici` her gün çalışır ve `cikti/fiyatlar.json` üretir, uygulama bu dosyayı okur.

**Kaynaklar** (kazıma/scraping yapılmaz; sadece izinli yollar):

| Kaynak                                      | Dosya               | Durum                                       |
| ------------------------------------------- | ------------------- | ------------------------------------------- |
| Elle giriş                                  | `veri/manuel.csv`   | Hazır, hemen kullanılabilir                 |
| Mağaza XML feed'i (Google Alışveriş biçimi) | `veri/feedler.json` | Hazır; mağazadan feed linki izinle alınmalı |
| Amazon.com.tr (Creators API)                | ortam değişkenleri  | Kod hazır, **gerçek hesapla test edilmedi** |

**Eşleştirme**: Yanlış ürün "en ucuz" görünmesin diye katıdır. Gerekirse `veri/eslesme.json` içinde malzeme bazında `arama`, `zorunlu`, `haric`, `min`, `max` ayarla.

```
cd fiyat-toplayici
npm install
npm test          # 6 otomatik test
npm run hepsi     # aktar + topla
```

**Otomatik güncelleme (GitHub Actions)**:

1. Projeyi GitHub'a yükle (fiyat dosyasının okunabilmesi için repo herkese açık olmalı, ya da GitHub Pages kullanılmalı).
2. Amazon kullanılacaksa: GitHub → Settings → Secrets → `AMAZON_CLIENT_ID`, `AMAZON_CLIENT_SECRET`, `AMAZON_PARTNER_TAG`.
3. `.env.example` dosyasını `.env` olarak kopyala, adresteki kullanıcı adını düzelt.
4. Görev her gün 06:17'de (TSİ) çalışır; Actions sekmesinden elle de başlatılabilir.

## APK üretme (Expo Go olmadan telefona kurulum)

```
npm install -g eas-cli
eas login                      # ücretsiz Expo hesabı
eas build -p android --profile onizleme
```

Bitince verilen linkten APK'yı telefona indirip kur. Play Store için `--profile yayin` (AAB) kullanılır.

> ⚠️ `app.json` içindeki `android.package` (şu an geçici: `com.evdehobi.app`) Play Store'a ilk yüklemeden sonra **değiştirilemez**. Uygulama adı kesinleşince güncelle.

## VS Code

Projeyi VS Code'da açınca önerilen eklentiler (ESLint, Prettier, React Native Tools) için kurulum bildirimi çıkar. Kayıtta otomatik biçimlendirme ve ESLint düzeltmeleri `.vscode/settings.json` ile açıktır.

```
npm run lint      # kod kurallarını kontrol et
npm run format    # tüm kodu Prettier ile biçimlendir
```

## Testler

```
npm test                        # uygulama: içerik bütünlüğü + Android ortamında tüm ekranlar ve 61 proje
cd fiyat-toplayici && npm test  # fiyat toplayıcı
```

## Sorun giderme

Expo Go açılmıyor / "Unable to resolve module" hatası: `node_modules` klasörünü silip `npm install`, sonra `npx expo start -c` (önbelleği temizler).
