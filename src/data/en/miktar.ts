// Malzeme miktarlarının İngilizcesi: "2 su bardağı" → "2 cups", "1,5 m" → "1.5 m".
// Birimler kelime kelime çevrilir; tam eşleşen özel ifadeler önce. Test: her miktar Türkçe harf/kelime bırakmaz.
const OZEL: Record<string, string> = {
  "1'er adet": "1 of each",
  "1 paket her biri": "1 pack of each",
  "akvaryum boyu": "aquarium length",
  "rulo sayısı duvara göre": "rolls as needed for the wall",
  "birkaç adet": "a few",
  "birkaç damla": "a few drops",
  az: "a little",
  küçük: "small",
};

// [Türkçe birim, İngilizce tekil, İngilizce çoğul]
const BIRIM: [string, string, string][] = [
  ["su bardağı", "cup", "cups"],
  ["çay kaşığı", "tsp", "tsp"],
  ["yemek kaşığı", "tbsp", "tbsp"],
  ["adet", "pc", "pcs"],
  ["renk", "color", "colors"],
  ["rulo", "roll", "rolls"],
  ["paket", "pack", "packs"],
  ["kutu", "box", "boxes"],
  ["levha", "sheet", "sheets"],
  ["yaprak", "sheet", "sheets"],
  ["avuç", "handful", "handfuls"],
  ["çift", "pair", "pairs"],
  ["deste", "bundle", "bundles"],
  ["yumak", "ball", "balls"],
  ["tüp", "tube", "tubes"],
  ["demet", "bunch", "bunches"],
  ["kap", "container", "containers"],
  ["blok", "block", "blocks"],
  ["torba", "bag", "bags"],
  ["kova", "bucket", "buckets"],
  ["şişe", "bottle", "bottles"],
  ["makara", "spool", "spools"],
  ["dilim", "slice", "slices"],
  ["parça", "piece", "pieces"],
  ["tutam", "pinch", "pinches"],
  ["damla", "drop", "drops"],
  ["çile", "skein", "skeins"],
  ["dizi", "strand", "strands"],
  ["kase", "bowl", "bowls"],
  ["kit", "kit", "kits"],
  ["set", "set", "sets"],
];

export function miktarEn(tr: string): string {
  if (OZEL[tr]) return OZEL[tr];
  let s = tr.replace(/(\d),(\d)/g, "$1.$2");
  for (const [b, tek, cok] of BIRIM) {
    s = s.replace(
      new RegExp(`([\\d½/.–-]+)\\s*${b}(?![a-zçğıöşü])`, "g"),
      (_, n: string) => `${n} ${n === "1" ? tek : cok}`,
    );
  }
  return s;
}
