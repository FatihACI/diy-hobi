// Çökme raporlama (Sentry).
// - Yalnızca yayın sürümünde ve EXPO_PUBLIC_SENTRY_DSN tanımlıysa çalışır; geliştirmede ve testte kapalıdır.
// - Gizlilik: kişisel veri gönderilmez (sendDefaultPii: false), kullanıcı/IP bilgisi olaydan silinir,
//   ekran görüntüsü / oturum kaydı / performans izleme YOK. Sadece hata mesajı, yığın izi, cihaz modeli ve
//   Android sürümü gider. Gizlilik politikası (docs/gizlilik.html) bununla uyumlu tutulmalı.
import * as Sentry from "@sentry/react-native";
import type { ComponentType } from "react";

const DSN = process.env.EXPO_PUBLIC_SENTRY_DSN;
export const sentryAcik = !!DSN && !__DEV__;

if (sentryAcik) {
  Sentry.init({
    dsn: DSN,
    sendDefaultPii: false,
    tracesSampleRate: 0, // performans izleme kapalı
    attachScreenshot: false,
    attachViewHierarchy: false,
    enableAutoSessionTracking: true, // çökmesiz oturum oranı (kişisel veri içermez)
    beforeSend(olay) {
      delete olay.user; // IP dahil kullanıcı bilgisi gönderilmez
      return olay;
    },
  });
}

// Hata sınırının yakaladığı hataları bildir (Sentry kapalıysa hiçbir şey yapmaz)
export function hataBildir(hata: unknown, bilesenYigini?: string | null) {
  if (!sentryAcik) return;
  Sentry.captureException(hata, bilesenYigini ? { contexts: { react: { componentStack: bilesenYigini } } } : undefined);
}

// Kök bileşeni sar: yakalanmamış hatalar ve uygulama çökmeleri raporlanır
export function sentrySar(Bilesen: ComponentType): ComponentType {
  return sentryAcik ? Sentry.wrap(Bilesen as ComponentType<Record<string, unknown>>) : Bilesen;
}
