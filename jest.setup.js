// Testler varsayılan olarak Türkçe telefonda çalışır (dil "Sistem" seçiliyken Türkçe açılır)
/* global jest */
jest.mock("expo-localization", () => ({
  getLocales: () => [{ languageCode: "tr", languageTag: "tr-TR" }],
}));
