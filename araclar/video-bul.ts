/*
 * Projeler için uygun Türkçe YouTube uygulama videosu bulur.
 *
 *   npm run video:bul               → videosu olmayan projeler için öneri toplar (günde ~95 proje)
 *   npm run video:bul -- --adet 20  → en fazla 20 proje
 *   npm run video:sec -- <projeId> <n>  → o projede n. alternatifi seç (1 = ilk öneri)
 *   npm run video:sec -- <projeId> 0    → o projeyi reddet (video eklenmez)
 *   npm run video:yaz               → onaylanan önerileri src/data/videolar.json'a yazar
 *
 * Anahtar: proje klasöründeki .env dosyasında YOUTUBE_API_KEY=... (GitHub'a gitmez).
 * Kota: YouTube arama isteği günde ~100 ile sınırlı; dolunca araç durur, ertesi gün kaldığı yerden devam eder.
 * Öneriler araclar/video-oneriler.md dosyasında okunabilir.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { KATEGORILER } from "../src/data/kategoriler";
import { PROJELER } from "../src/data/projeler";
import type { Proje } from "../src/data/types";

type Video = { id: string; baslik: string; kanal: string; sure?: string; kendi?: boolean };
type Aday = Video & { saniye: number; izlenme: number; puan: number };
type Oneri = { tarih: string; sorgu: string; secim: number; adaylar: Aday[]; ilgisiz?: boolean }; // secim: 1..n, 0 = red

const KOK = join(__dirname, "..");
const VIDEOLAR = join(KOK, "src/data/videolar.json");
const ONERI_JSON = join(KOK, "araclar/video-oneriler.json");
const ONERI_MD = join(KOK, "araclar/video-oneriler.md");

const oku = <T>(yol: string, bos: T): T => (existsSync(yol) ? (JSON.parse(readFileSync(yol, "utf8")) as T) : bos);
const yaz = (yol: string, veri: unknown) => writeFileSync(yol, JSON.stringify(veri, null, 2) + "\n", "utf8");

function anahtar(): string {
  const env = join(KOK, ".env");
  const satir = existsSync(env)
    ? readFileSync(env, "utf8")
        .split(/\r?\n/)
        .find((s) => s.trim().startsWith("YOUTUBE_API_KEY="))
    : undefined;
  const k = (process.env.YOUTUBE_API_KEY ?? satir?.split("=").slice(1).join("=") ?? "")
    .trim()
    .replace(/^["']|["']$/g, "");
  if (!k) {
    console.error("YOUTUBE_API_KEY bulunamadı. .env dosyasına YOUTUBE_API_KEY=... satırını ekle.");
    process.exit(1);
  }
  return k;
}

class KotaDoldu extends Error {}

async function api(yol: string, p: Record<string, string>, key: string) {
  const url = `https://www.googleapis.com/youtube/v3/${yol}?${new URLSearchParams({ ...p, key })}`;
  const r = await fetch(url);
  const j = (await r.json()) as any;
  if (!r.ok) {
    const neden = j?.error?.errors?.[0]?.reason ?? "";
    if (r.status === 429 || (r.status === 403 && /quota|rateLimit/i.test(neden))) throw new KotaDoldu(neden || "429");
    throw new Error(`YouTube API hatası ${r.status}: ${j?.error?.message ?? r.statusText}`);
  }
  return j;
}

const cozumle = (s: string) =>
  s
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

// ISO 8601 süre (PT1H2M3S) → saniye
function saniye(iso: string): number {
  const m = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/.exec(iso);
  return m ? +(m[1] ?? 0) * 3600 + +(m[2] ?? 0) * 60 + +(m[3] ?? 0) : 0;
}
const sureYaz = (sn: number) => {
  const h = Math.floor(sn / 3600),
    d = Math.floor((sn % 3600) / 60),
    s = String(sn % 60).padStart(2, "0");
  return h ? `${h}:${String(d).padStart(2, "0")}:${s}` : `${d}:${s}`;
};

const kucuk = (s: string) => s.toLocaleLowerCase("tr-TR");
const ONEMSIZ = new Set(["ile", "ve", "için", "ilk", "bir", "basit", "mini", "küçük", "ev", "evde", "yapımı"]);
const kelimeler = (s: string) =>
  kucuk(s)
    .replace(/[^a-zçğıöşü0-9 ]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !ONEMSIZ.has(w));
const TURKCE = /[çğıöşüÇĞİÖŞÜ]|\b(nasıl|yapımı|yapılır|yapma|evde|kolay)\b/i;

// Başlıkta proje adından kaç anlamlı kelime geçiyor (Türkçe ekler için kök karşılaştırması)
const ortakKelime = (p: Proje, baslik: string) =>
  kelimeler(p.ad).filter((w) => kucuk(baslik).includes(w.slice(0, Math.max(4, w.length - 2)))).length;

function puanla(p: Proje, v: { baslik: string; saniye: number; izlenme: number; sira: number }): number {
  if (v.saniye < 90 || v.saniye > 60 * 60) return -1; // Shorts ve çok uzun videolar elenir
  const ortak = ortakKelime(p, v.baslik);
  let puan = ortak * 3 + Math.log10(v.izlenme + 1) * 1.5 - v.sira * 0.5;
  if (TURKCE.test(v.baslik)) puan += 3;
  if (v.saniye >= 180 && v.saniye <= 25 * 60) puan += 2;
  return Math.round(puan * 10) / 10;
}

async function bul(p: Proje, key: string): Promise<Oneri> {
  const sorgu = `${p.ad} nasıl yapılır`;
  const ara = await api(
    "search",
    {
      part: "snippet",
      q: sorgu,
      type: "video",
      maxResults: "10",
      relevanceLanguage: "tr",
      regionCode: "TR",
      safeSearch: "strict",
      videoEmbeddable: "true",
    },
    key,
  );
  const idler: string[] = (ara.items ?? []).map((i: any) => i.id?.videoId).filter(Boolean);
  if (!idler.length) return { tarih: new Date().toISOString(), sorgu, secim: 0, adaylar: [] };
  const det = await api("videos", { part: "snippet,contentDetails,statistics,status", id: idler.join(",") }, key);
  const adaylar: Aday[] = (det.items ?? [])
    .filter((v: any) => v.status?.embeddable !== false && v.status?.privacyStatus === "public")
    .map((v: any) => {
      const sn = saniye(v.contentDetails?.duration ?? "");
      const izlenme = +(v.statistics?.viewCount ?? 0);
      const baslik = cozumle(v.snippet?.title ?? "");
      return {
        id: v.id,
        baslik,
        kanal: cozumle(v.snippet?.channelTitle ?? ""),
        sure: sureYaz(sn),
        saniye: sn,
        izlenme,
        puan: puanla(p, { baslik, saniye: sn, izlenme, sira: idler.indexOf(v.id) }),
      };
    })
    .filter((a: Aday) => a.puan >= 0)
    .sort((a: Aday, b: Aday) => b.puan - a.puan)
    .slice(0, 3);
  // En iyi adayın başlığında proje adından hiçbir kelime yoksa otomatik seçme; elle kontrol edilsin
  const ilgisiz = adaylar.length > 0 && ortakKelime(p, adaylar[0].baslik) === 0;
  return { tarih: new Date().toISOString(), sorgu, secim: adaylar.length && !ilgisiz ? 1 : 0, adaylar, ilgisiz };
}

function mdYaz(oneriler: Record<string, Oneri>) {
  const satirlar = [
    "# Video önerileri",
    "",
    "Her proje için 1. aday seçili gelir. Değiştirmek için: `npm run video:sec -- <projeId> <n>` (0 = reddet).",
    "Onaylayınca: `npm run video:yaz`.",
    "",
  ];
  let toplam = 0;
  for (const k of KATEGORILER) {
    const ps = PROJELER.filter((p) => p.kategoriId === k.id && oneriler[p.id]);
    if (!ps.length) continue;
    satirlar.push(`## ${k.ad}`, "", "| Proje | Seçili video | Alternatifler |", "|---|---|---|");
    for (const p of ps) {
      const o = oneriler[p.id];
      toplam++;
      const link = (a: Aday, n: number) =>
        `${n}. [${a.baslik.replace(/[|[\]]/g, " ")}](https://youtu.be/${a.id}) — ${a.kanal}, ${a.sure}, ${a.izlenme.toLocaleString("tr-TR")} izlenme`;
      const sec = o.secim
        ? link(o.adaylar[o.secim - 1], o.secim)
        : !o.adaylar.length
          ? "uygun video yok"
          : o.ilgisiz
            ? "**kontrol et:** başlıklar projeyle eşleşmedi, alternatiflerden birini seç"
            : "**reddedildi**";
      const alt = o.adaylar
        .map((a, i) => (i + 1 === o.secim ? null : link(a, i + 1)))
        .filter(Boolean)
        .join("<br>");
      satirlar.push(`| ${p.ad} \`${p.id}\` | ${sec} | ${alt} |`);
    }
    satirlar.push("");
  }
  satirlar.splice(1, 0, "", `${toplam} / ${PROJELER.length} proje için arama yapıldı.`);
  writeFileSync(ONERI_MD, satirlar.join("\n") + "\n", "utf8");
}

async function main() {
  const arg = process.argv.slice(2);
  const videolar = oku<Record<string, Video>>(VIDEOLAR, {});
  const oneriler = oku<Record<string, Oneri>>(ONERI_JSON, {});

  if (arg[0] === "--sec") {
    const [, id, n] = arg;
    const o = oneriler[id];
    const sira = Number(n);
    if (!o || !Number.isInteger(sira) || sira < 0 || sira > o.adaylar.length) {
      console.error(`Kullanım: npm run video:sec -- <projeId> <0..${o?.adaylar.length ?? 3}>`);
      process.exit(1);
    }
    o.secim = sira;
    o.ilgisiz = false;
    yaz(ONERI_JSON, oneriler);
    mdYaz(oneriler);
    console.log(sira ? `${id}: ${sira}. aday seçildi → ${o.adaylar[sira - 1].baslik}` : `${id}: reddedildi`);
    return;
  }

  if (arg[0] === "--yaz") {
    let eklenen = 0;
    for (const [id, o] of Object.entries(oneriler)) {
      if (!o.secim || videolar[id]?.kendi) continue; // kendi videomuz varsa dokunma
      const { id: vid, baslik, kanal, sure } = o.adaylar[o.secim - 1];
      videolar[id] = { id: vid, baslik, kanal, sure };
      eklenen++;
    }
    const sirali = Object.fromEntries(Object.entries(videolar).sort(([a], [b]) => a.localeCompare(b)));
    yaz(VIDEOLAR, sirali);
    console.log(`${eklenen} video yazıldı. Toplam videolu proje: ${Object.keys(sirali).length} / ${PROJELER.length}`);
    return;
  }

  const ai = arg.indexOf("--adet");
  const adet = ai >= 0 ? Number(arg[ai + 1]) : 95;
  const key = anahtar();
  const bekleyen = PROJELER.filter((p) => !videolar[p.id] && !oneriler[p.id]);
  console.log(`Videosu olmayan ve henüz aranmamış proje: ${bekleyen.length}. Bu çalıştırmada en fazla ${adet}.`);

  let yapilan = 0;
  for (const p of bekleyen.slice(0, adet)) {
    try {
      oneriler[p.id] = await bul(p, key);
      yapilan++;
      const o = oneriler[p.id];
      console.log(
        `✓ ${p.id}: ${o.secim ? o.adaylar[0].baslik : o.ilgisiz ? "kontrol et (eşleşme zayıf)" : "uygun video yok"}`,
      );
      yaz(ONERI_JSON, oneriler); // her projeden sonra kaydet: yarıda kalırsa kaybolmaz
    } catch (e) {
      if (e instanceof KotaDoldu) {
        console.log("\nGünlük YouTube arama kotası doldu. Yarın aynı komutla kaldığın yerden devam et.");
        break;
      }
      throw e;
    }
  }
  mdYaz(oneriler);
  const kalan = PROJELER.filter((p) => !videolar[p.id] && !oneriler[p.id]).length;
  console.log(`\n${yapilan} proje arandı. Kalan: ${kalan}. Öneriler: araclar/video-oneriler.md`);
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
