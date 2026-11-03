// Metro'nun fiyat-toplayici klasörünü (ayrı bir Node projesi) uygulamaya karıştırmaması için
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);
const onceki = config.resolver.blockList;
config.resolver.blockList = [
  ...(Array.isArray(onceki) ? onceki : onceki ? [onceki] : []),
  /fiyat-toplayici[\/\\].*/,
];

module.exports = config;
