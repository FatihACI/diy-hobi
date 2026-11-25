# Oturum kilidi: aynı klasörde aynı anda tek Claude/yapay zekâ oturumu çalışsın.
# Kullanım (proje klasöründe):
#   powershell -File araclar\oturum.ps1 durum
#   powershell -File araclar\oturum.ps1 al -Ad "Claude (claude.ai: Protyp sohbeti)" -Is "Altın 40 içerik"
#   powershell -File araclar\oturum.ps1 yenile -Ad "..."      # uzun işlerde saati günceller
#   powershell -File araclar\oturum.ps1 birak -Ad "..."
#   powershell -File araclar\oturum.ps1 birak -Zorla           # sahibi kapanmış eski kilidi kaldırır (kullanıcı onayıyla)
param(
  [Parameter(Position = 0)][ValidateSet("durum", "al", "yenile", "birak")][string]$Islem = "durum",
  [string]$Ad = "",
  [string]$Is = "",
  [switch]$Zorla
)
$ErrorActionPreference = "Stop"
$kok = Split-Path -Parent $PSScriptRoot
$dosya = Join-Path $kok ".oturum-kilidi"
$utf8 = New-Object System.Text.UTF8Encoding $false
$eskiSaat = 3

function Oku {
  if (-not (Test-Path $dosya)) { return $null }
  $k = @{}
  foreach ($satir in [IO.File]::ReadAllLines($dosya, $utf8)) {
    $i = $satir.IndexOf(":")
    if ($i -gt 0) { $k[$satir.Substring(0, $i).Trim()] = $satir.Substring($i + 1).Trim() }
  }
  $k["yas"] = [math]::Round(((Get-Date) - (Get-Item $dosya).LastWriteTime).TotalMinutes)
  return $k
}

function Yaz([string]$baslangic) {
  $metin = @(
    "oturum: $Ad",
    "is: $Is",
    "baslangic: $baslangic",
    "son: $(Get-Date -Format 'yyyy-MM-dd HH:mm')",
    "",
    "Bu dosya varken bu klasörde başka bir oturum çalışıyor demektir.",
    "Başka bir oturumsan hiçbir dosyaya dokunma; kullanıcıya sor. Kurallar: CLAUDE.md / AGENTS.md"
  ) -join "`n"
  [IO.File]::WriteAllText($dosya, $metin + "`n", $utf8)
}

$k = Oku
switch ($Islem) {
  "durum" {
    if (-not $k) { "BOS: Klasörde çalışan oturum yok."; exit 0 }
    "KILITLI: $($k['oturum'])"
    "  iş: $($k['is'])"
    "  başlangıç: $($k['baslangic'])  son güncelleme: $($k['yas']) dk önce"
    if ($k["yas"] -ge $eskiSaat * 60) { "  UYARI: $eskiSaat saatten eski. Sahibi kapanmış olabilir; kullanıcıya sorup 'birak -Zorla' ile kaldır." }
    exit 1
  }
  "al" {
    if (-not $Ad) { throw "-Ad gerekli (hangi oturum olduğunu yaz)." }
    if ($k -and $k["oturum"] -ne $Ad) { "REDDEDILDI: Klasör '$($k['oturum'])' tarafından kullanılıyor ($($k['yas']) dk önce güncellendi). Kullanıcıya sor."; exit 1 }
    $bas = if ($k) { $k["baslangic"] } else { Get-Date -Format "yyyy-MM-dd HH:mm" }
    Yaz $bas
    "ALINDI: $Ad"
  }
  "yenile" {
    if (-not $k -or $k["oturum"] -ne $Ad) { "REDDEDILDI: Kilit bu oturumda değil."; exit 1 }
    if (-not $Is) { $Is = $k["is"] }
    Yaz $k["baslangic"]
    "YENILENDI"
  }
  "birak" {
    if (-not $k) { "Zaten boş."; exit 0 }
    if (-not $Zorla -and $k["oturum"] -ne $Ad) { "REDDEDILDI: Kilit '$($k['oturum'])' oturumunda. Sahibi kapandıysa kullanıcı onayıyla -Zorla kullan."; exit 1 }
    Remove-Item $dosya
    "BIRAKILDI"
  }
}
