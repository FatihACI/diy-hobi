// Çökme raporlama: geliştirmede kapalı, yayında gizlilik ayarlarıyla açık
import { afterEach, describe, expect, jest, test } from "@jest/globals";

const mockInit = jest.fn();
const mockCapture = jest.fn();
jest.mock("@sentry/react-native", () => ({
  init: (o: unknown) => mockInit(o),
  captureException: (...a: unknown[]) => mockCapture(...a),
  wrap: (c: unknown) => c,
}));

const g = globalThis as unknown as { __DEV__: boolean };
const yukle = () => {
  let m: typeof import("../src/sentry") | undefined;
  jest.isolateModules(() => {
    m = require("../src/sentry");
  });
  return m!;
};

afterEach(() => {
  mockInit.mockClear();
  mockCapture.mockClear();
  delete process.env.EXPO_PUBLIC_SENTRY_DSN;
  g.__DEV__ = true;
});

describe("sentry", () => {
  test("geliştirmede (DSN olsa da) kapalı, hata bildirmez", () => {
    process.env.EXPO_PUBLIC_SENTRY_DSN = "https://k@o1.ingest.sentry.io/1";
    g.__DEV__ = true;
    const s = yukle();
    expect(s.sentryAcik).toBe(false);
    s.hataBildir(new Error("x"));
    expect(mockInit).not.toHaveBeenCalled();
    expect(mockCapture).not.toHaveBeenCalled();
  });

  test("DSN yoksa yayında da kapalı", () => {
    g.__DEV__ = false;
    expect(yukle().sentryAcik).toBe(false);
    expect(mockInit).not.toHaveBeenCalled();
  });

  test("yayında açık; kişisel veri ve kullanıcı/IP gönderilmez", () => {
    process.env.EXPO_PUBLIC_SENTRY_DSN = "https://k@o1.ingest.sentry.io/1";
    g.__DEV__ = false;
    const s = yukle();
    expect(s.sentryAcik).toBe(true);
    const ayar = mockInit.mock.calls[0][0] as {
      sendDefaultPii: boolean;
      tracesSampleRate: number;
      attachScreenshot: boolean;
      beforeSend: (o: Record<string, unknown>) => Record<string, unknown>;
    };
    expect(ayar.sendDefaultPii).toBe(false);
    expect(ayar.tracesSampleRate).toBe(0);
    expect(ayar.attachScreenshot).toBe(false);
    expect(ayar.beforeSend({ message: "m", user: { ip_address: "1.2.3.4" } })).toEqual({ message: "m" });

    s.hataBildir(new Error("çöktü"), "in Ekran");
    expect(mockCapture).toHaveBeenCalledTimes(1);
  });
});
