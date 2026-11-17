// Serbest metin süreyi ("2–3 saat", "45 dk", "2 saat + 24 saat kuruma") sayıya çevirir.
// Yalnızca AKTİF çalışma süresi sayılır: "+"dan sonrası (kuruma, kür, büyüme) ve parantez içi atılır.
// 1 gün = 8 saatlik çalışma günü kabul edilir.
const BIRIM: Record<string, number> = { dk: 1, dakika: 1, saat: 60, gün: 480, hafta: 7 * 480, ay: 30 * 480 };

export function sureCoz(metin: string): [number, number] {
  const aktif = metin.split("+")[0].replace(/\(.*?\)/g, "");
  const r = /(\d+(?:,\d+)?)\s*(?:[–-]\s*(\d+(?:,\d+)?))?\s*(dk|dakika|saat|gün|hafta|ay)/.exec(aktif);
  if (!r) return [0, 0];
  const sayi = (x: string) => Number(x.replace(",", "."));
  const c = BIRIM[r[3]];
  return [Math.round(sayi(r[1]) * c), Math.round(sayi(r[2] ?? r[1]) * c)];
}

export type SureSinifi = "Tümü" | "≤ 1 saat" | "1–3 saat" | "Yarım gün" | "Birkaç gün";
export const SURE_SINIFLARI: SureSinifi[] = ["Tümü", "≤ 1 saat", "1–3 saat", "Yarım gün", "Birkaç gün"];

// Üst sınıra göre sınıf (en uzun ihtimal; kullanıcı ayıracağı zamanı planlıyor)
export function sureSinifi(metin: string): Exclude<SureSinifi, "Tümü"> {
  const ust = sureCoz(metin)[1];
  if (ust <= 60) return "≤ 1 saat";
  if (ust <= 180) return "1–3 saat";
  if (ust <= 480) return "Yarım gün";
  return "Birkaç gün";
}
