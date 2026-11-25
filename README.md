# Protyp

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

> ⚠️ `app.json` içindeki `android.package` (`com.protyp.app`) Play Store'a ilk yüklemeden sonra **değiştirilemez**.

## Çökme raporlama (Sentry)

Yayın sürümünde (APK/AAB) beklenmeyen hatalar ve çökmeler Sentry'ye raporlanır. Geliştirmede ve Expo Go'da **kapalıdır**.
Kişisel veri gönderilmez (ayrıntı: `src/sentry.ts`, `docs/gizlilik.html`).

Bir kez yapılacaklar:

1. https://sentry.io → ücretsiz hesap → **Create Project** → platform: **React Native** → ad: `diy-hobi`.
2. **Settings → Projects → diy-hobi → Client Keys (DSN)**: DSN'i kopyala.
3. **Settings → Projects → diy-hobi → Security & Privacy**: "Prevent Storing of IP Addresses" aç; "Data Scrubber" açık kalsın.
4. **Settings → Developer Settings → Organization Tokens → Create** (kaynak haritası yükleme için).
5. EAS ortam değişkenleri (Expo hesabında, proje bağlıyken):

   ```
   eas env:create --name EXPO_PUBLIC_SENTRY_DSN --value "<DSN>" --visibility plaintext --environment production --environment preview
   eas env:create --name SENTRY_ORG --value "<org-slug>" --visibility plaintext --environment production --environment preview
   eas env:create --name SENTRY_PROJECT --value "diy-hobi" --visibility plaintext --environment production --environment preview
   eas env:create --name SENTRY_AUTH_TOKEN --value "<token>" --visibility secret --environment production --environment preview
   eas env:create --name EXPO_PUBLIC_FIYAT_URL --value "https://raw.githubusercontent.com/FatihACI/diy-hobi/main/fiyat-toplayici/cikti/fiyatlar.json" --visibility plaintext --environment production --environment preview
   ```

   > `.env` dosyası EAS derlemesine **gitmez** (`.gitignore`). Fiyat adresi de bu yüzden EAS'a ayrıca girilmeli.

6. `eas.json` içindeki `SENTRY_DISABLE_AUTO_UPLOAD` satırlarını sil (token girilene kadar derleme kırılmasın diye açık).
7. Deneme: önizleme APK'sı kur, hata ekranını tetikle (ör. geçici bir test butonu) → Sentry → Issues'da görünmeli.

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
