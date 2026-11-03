// ESLint: Expo'nun önerdiği kurallar + Prettier ile çakışan biçim kurallarını kapat
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const prettier = require("eslint-config-prettier");

module.exports = defineConfig([
  expoConfig,
  prettier,
  { files: ["__tests__/**"], rules: { "@typescript-eslint/no-require-imports": "off" } }, // jest.mock kalıbı
  { ignores: ["dist/*", "fiyat-toplayici/*", "araclar/*", ".expo/*"] },
]);
