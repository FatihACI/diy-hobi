# Protyp — Claude için çalışma kuralları

## 1. Aynı anda tek oturum: ŞU AN DEVRE DIŞI

> **25 Kasım 2026: Kullanıcının kararıyla kilit geçici olarak kapalı.** `oturum.ps1` ile kilit alma/kontrol etme zorunluluğu yok ve kilit dosyası görürsen işini engellemez. Yine de başlamadan `git status` bak; senin yapmadığın commit edilmemiş değişikliklere dokunma. Kullanıcı kilidi yeniden açınca bu not kaldırılır ve aşağıdaki akış geçerli olur. Hook'la zorunlu kılan yarım çalışma `oturum-kilidi-hook` dalında.

Bu klasörde aynı anda yalnızca bir Claude / yapay zekâ oturumu çalışır. 24 Kasım 2026'da iki oturum aynı dosyaları düzenleyip çakıştı.

**Başlarken, hiçbir dosyaya dokunmadan önce:**
1. `powershell -File araclar\oturum.ps1 durum`
   - `BOS` → kilidi al: `powershell -File araclar\oturum.ps1 al -Ad "<oturumun adı/bağlantısı>" -Is "<yapacağın iş>"`
   - `KILITLI` ve kilit senin değil → **dur**. Dosya düzenleme, dal değiştirme, commit, `npm install` yapma. Kullanıcıya kilidin kimde olduğunu söyle ve ne yapacağını sor.
   - 3 saatten eski kilit → sahibi kapanmış olabilir; yine de kullanıcı onay vermeden `birak -Zorla` kullanma.
2. `git status` → senin yapmadığın commit edilmemiş değişiklik varsa dokunma, kullanıcıya sor.

**Çalışırken:** Uzun işlerde ara ara `oturum.ps1 yenile -Ad "..."`.

**Bitirirken:** İşini commit et (ya da kullanıcıya bırakacağın durumu söyle), sonra `oturum.ps1 birak -Ad "..."`.

`.oturum-kilidi` git'e eklenmez (`.gitignore`).

## 2. Proje durumu

Nerede kalındığı ve sıradaki işler claude.ai'deki "Android DIY uygulaması" projesinin `yapilacaklar.md` dokümanında tutulur. Büyük bir iş bitince orayı güncelle.

## 3. Teknik kurallar

@AGENTS.md
