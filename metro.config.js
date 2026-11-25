// Metro'nun fiyat-toplayici klasörünü (ayrı bir Node projesi) uygulamaya karıştırmaması için
// Sentry sürümü: yayın derlemesinde hata yığınlarını kaynak koda eşleyen kimlikleri ekler
const { getSentryExpoConfig } = require("@sentry/react-native/metro");

const config = getSentryExpoConfig(__dirname);
const onceki = config.resolver.blockList;
config.resolver.blockList = [...(Array.isArray(onceki) ? onceki : onceki ? [onceki] : []), /fiyat-toplayici[\/\\].*/];

module.exports = config;
