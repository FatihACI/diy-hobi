// Altın 40: her kategoriden 2 seçkin proje.
// Bu projeler derinleştirilir: adım başına süre ve "doğru oldu mu?" kontrolü, sık yapılan hatalar.
// Derin içerik gruplar halinde eklenir (kullanıcı her grubu inceler). İçeriği olmayan Altın projeler
// yine rozetle öne çıkar; içerik eklendikçe adımları otomatik değişir.
import type { Adim, Malzeme, Proje } from "./types";

export const ALTIN_40: string[] = [
  // Çocuk & Oyun
  "ahsap-araba",
  "bilye-parkuru",
  "plastik-maket",
  "peri-bahcesi",
  "bluetooth-araba",
  "depron-planor",
  // Doğa & Hayvan
  "samandirali-takim",
  "olta-dugumleri",
  "nano-bitkili",
  "sunger-filtre",
  "kapali-terraryum",
  "sukulent-terraryum",
  "kus-yuvasi",
  "kus-yemligi",
  "balkon-otlari",
  "mikro-yesillik",
  // El Sanatları
  "kesme-tahtasi",
  "ahsap-kutu",
  "soya-mum",
  "gliserin-sabun",
  "epoksi-kolye",
  "epoksi-altlik",
  "makrome-aski",
  "makrome-duvar",
  "kil-kupe",
  "taki-tabagi",
  "deri-anahtarlik",
  "deri-kartlik",
  "dogal-tas-bileklik",
  "boncuk-kupe",
  "tas-boyama",
  "pirografi-pano",
  // Teknik & Ev
  "trafik-lambasi",
  "park-sensoru",
  "ilk-baski",
  "telefon-standi",
  "ic-lastik",
  "zincir-bakim",
  "musluk-conta",
  "duvar-tamir",
];

type Icerik = {
  adimlar: Adim[];
  sikHatalar: string[];
  ipuclari?: string[]; // verilirse eskisinin yerine geçer
  guvenlikEk?: string[]; // mevcut güvenlik notlarına eklenir
  malzemeDegistir?: Record<string, Partial<Malzeme>>; // malzeme id → değişen alanlar
  sure?: string;
};

const a = (baslik: string, aciklama: string, sure?: string, kontrol?: string): Adim => ({
  baslik,
  aciklama,
  sure,
  kontrol,
});

// ───────────── Grup 1: Çocuk & Oyun ─────────────
export const ALTIN_ICERIK: Record<string, Icerik> = {
  "ahsap-araba": {
    adimlar: [
      a(
        "Bloğu kontrol et ve şablonu çiz",
        "Budaksız, çatlaksız bir çam blok seç. 18 cm'lik yan yüzde alttan 4 cm yüksekliğe bir çizgi çek (gövde). Arka uçtan 5 cm içeri, 7 cm uzunluğunda bir kabin çiz; kabinin önünü ve arkasını hafif eğimli yap. Kaput tarafı gövde yüksekliğinde kalacak.",
        "10 dk",
        "Çizim simetrik ve kalem çizgisi net; kabin yüksekliği blok yüksekliğini (8 cm) geçmiyor.",
      ),
      a(
        "Aks yerlerini işaretle",
        "Yan yüzde alt kenardan 1,5 cm yukarıda, ön ve arka uçtan 3,5 cm içeride iki nokta işaretle. Aynı noktaları gönye ile diğer yan yüze de aktar; delikler karşılıklı olmalı.",
        "5 dk",
        "Dört nokta da alt kenara aynı mesafede; iki yandaki noktalar birbirinin tam karşısında.",
      ),
      a(
        "Kabin dışındaki kısmı kes",
        "Bloğu mengeneye sıkıca bağla. Önce dikey kesimleri (kabinin ön ve arka hattı) çizginin dış tarafından, sonra yatay kesimi yap. Testereyi zorlamadan, uzun ve düz hareketlerle çek; çizgiye 1 mm pay bırak, kalanı zımparayla alırsın.",
        "20 dk",
        "Kesik yüzler düz, kabin dik duruyor; çizgiyi geçmedin.",
      ),
      a(
        "Aks deliklerini aç",
        "Matkaba Ø7 mm ahşap ucu tak, bloğu mengenede yan yatır. Ucu işarete dik tut ve yarıya kadar del; bloğu çevir, diğer yandaki işaretten delerek ortada buluştur. Böylece delik eğri çıkmaz ve çıkış ağzı patlamaz.",
        "15 dk",
        "Ø6 mm dübel deliğin içinde serbestçe dönüyor ve iki ucu da aynı yükseklikten çıkıyor.",
      ),
      a(
        "Zımparala",
        "Önce 120 kumla kesim izlerini ve keskin köşeleri yuvarlat (köşeler parmağı kesmeyecek kadar oval olmalı). Sonra 240 kumla tüm yüzeyi lif yönünde pürüzsüzleştir. Tozu nemli bezle al.",
        "30 dk",
        "Elini tüm yüzeylerde gezdirdiğinde takılan kıymık veya keskin kenar yok.",
      ),
      a(
        "Boya",
        "Aks deliklerine birer kürdan sok (boya kaçıp deliği daraltmasın). EN 71-3 etiketli su bazlı boyayı ince katlar halinde sür; ilk kat 2 saat kurusun, gerekirse ikinci katı at. Son kattan sonra 24 saat beklet.",
        "30 dk + 24 saat",
        "Boya akıntısız, tırnakla bastırınca iz kalmıyor; deliklerin içi boyasız.",
      ),
      a(
        "Aksları kes",
        "Dübel çubuktan iki parça kes: uzunluk = gövde eni (4 cm) + 2 tekerlek kalınlığı + 2 mm boşluk. Uçları zımparayla hafif pahla ki tekerleğe kolay girsin.",
        "10 dk",
        "Aks gövdeye takılıyken her iki yandan tekerlek kalınlığı kadar dışarı taşıyor.",
      ),
      a(
        "Tekerlekleri tak",
        "Aksı deliğe geçir. Bir tekerleğin deliğine az tutkal sür, aksın ucuna çak. Gövdeyle tekerlek arasına bir kartvizit kalınlığında boşluk bırak, diğer tekerleği aynı şekilde tak. Tutkal 24 saat kurusun.",
        "15 dk + 24 saat",
        "Araba düz zeminde itince düz gidiyor, tekerlekler gövdeye sürtmüyor ve elle çekince çıkmıyor.",
      ),
    ],
    sikHatalar: [
      "Aks deliği eğri: Tek seferde baştan sona delmek ucu kaydırır. Her iki yandan yarıya kadar del.",
      "Araba yuvarlanmıyor: Delik dübelle aynı çapta ya da boya deliği daraltmış. Deliği Ø7 mm uçla tekrar geç.",
      "Tekerlek gövdeye sürtüyor: Takarken araya kartvizit koyup boşluk bırakmayı unutma.",
      "Boya yapışkan kaldı: Kat çok kalın. İnce katlar sür, katlar arasında tam kuruma bekle.",
    ],
    guvenlikEk: [
      "3 yaş altı çocuklara verilecekse tekerlekleri çekme testi yap: sert bir çekişte çıkmamalı. Tutkal tam kurumadan oyuncağı verme.",
    ],
  },

  "bilye-parkuru": {
    adimlar: [
      a(
        "Panoyu hazırla",
        "Büyük kutuyu açıp düz bir karton pano elde et (en az 50×70 cm). Panoyu duvara maskeleme bandıyla ya da bir dolabın yan yüzüne dik olarak sabitle. Alt kenarın yere değmesi dengeyi artırır.",
        "10 dk",
        "Pano elle bastırınca sallanmıyor ve dik duruyor.",
      ),
      a(
        "Kanalları kes (yetişkin)",
        "Ruloların yarısını boyuna ikiye kesip açık kanal yap; diğerlerini tünel olarak tam bırak. Maket bıçağını kesme altlığı üzerinde, kendinden uzağa doğru çek. Uzun parkur için iki ruloyu uç uca bantla birleştir.",
        "15 dk",
        "Kanal kenarları düzgün; bilye kanalın içinde yuvarlanırken dışarı fırlamıyor.",
      ),
      a(
        "Rotayı çiz",
        "Panonun üst köşesinden başlayıp zikzak şeklinde aşağı inen bir rota çiz. Her kanal yaklaşık 10° eğimli olsun (30 cm'lik kanalda bir uç diğerinden ~5 cm aşağıda). Kanal uçları alttaki kanalın üzerine 3–4 cm taşmalı.",
        "10 dk",
        "Her kanalın düşen ucu bir sonraki kanalın içine denk geliyor.",
      ),
      a(
        "Önce bantla, test et",
        "Kanalları önce sadece maskeleme bandıyla geçici olarak tuttur. Bilyeyi en üstten bırak ve takıldığı, hızlanıp dışarı fırladığı yerleri not et.",
        "15 dk",
        "Bilye en üstten en alta durmadan iniyor.",
      ),
      a(
        "Eğimi ve geçişleri düzelt",
        "Bilye duruyorsa o kanalın eğimini artır. Fırlıyorsa eğimi azalt ya da düşüş noktasına yarım rulo 'kova' ekle. Dönüşlerde dış kenara kartondan küçük bir duvar yapıştır.",
        "15 dk",
        "Üç denemenin üçünde de bilye sona ulaşıyor.",
      ),
      a(
        "Kalıcı olarak yapıştır (yetişkin)",
        "Geçici bantlı haliyle çalışan parkuru, kanalları teker teker sökmeden sıcak silikonla sabitle. Silikonu kanalın arkasına sür ki bilyenin yolunu kapatmasın; 1 dakika bastırarak tut.",
        "20 dk",
        "Kanallar elle hafifçe itince yerinden oynamıyor.",
      ),
      a(
        "Başlangıç ve bitiş ekle",
        "En üste bilyeleri bekletecek bir rulo 'depo', en alta da bilyeleri toplayacak bir karton kutu veya kağıt bardak koy. İstersen kanalları boyayıp numaralandır.",
        "15 dk",
        "Bilyeler sonda dağılmadan toplanıyor.",
      ),
    ],
    sikHatalar: [
      "Bilye yarı yolda duruyor: Eğim çok az. Kanalın alt ucunu 1–2 cm daha aşağı al.",
      "Bilye dışarı uçuyor: Eğim çok fazla ya da kanal uçları üst üste binmiyor. Düşüş noktasına yarım rulo ekle.",
      "Silikonla yapıştırdıktan sonra çalışmadı: Önce bantla test et; silikon en son adım.",
    ],
    guvenlikEk: [
      "Sıcak silikonun ucu ve damlası ciltte yanık yapar; çocuk tabancaya dokunmamalı, tabancayı standında beklet.",
    ],
  },

  "plastik-maket": {
    adimlar: [
      a(
        "Talimatı ve parçaları incele",
        "Kutudaki şemayı baştan sona oku. Her adımda geçen parça numaralarını ve renk kodlarını kalemle işaretle; içeride kalacak (sonradan boyanamayacak) parçaları yıldızla.",
        "20 dk",
        "Hangi parçaların montajdan önce boyanacağını biliyorsun.",
      ),
      a(
        "Parçaları kes ve temizle",
        "Parçayı yan keskiyle daldan 1–2 mm uzaktan kes, sonra kalan çıkıntıyı keskinin düz yüzü parçaya bakacak şekilde sıfırla. Kalan izi maket bıçağıyla tıraşla, 400 kum zımpara çubuğuyla düzelt.",
        "Adım başına 10 dk",
        "Parçanın kenarında çıkıntı (çapak) yok; birleşecek yüzeyler düz.",
      ),
      a(
        "Kuru prova yap",
        "Yapıştırmadan önce parçaları birbirine oturt. Boşluk ya da basamak varsa yapıştırmadan önce zımparala.",
        "10 dk",
        "Gövde yarıları yapıştırıcısız da aralıksız kapanıyor.",
      ),
      a(
        "Kokpiti boya ve gövdeyi kapat",
        "Kokpit, koltuk ve pilot gibi iç parçaları şimdi boya. Kuruyunca gövde yarılarını birleştir; ince uçlu yapıştırıcıyı ek yerine dışarıdan değdir, kılcallıkla içeri çeker. Ek yerini 30 saniye bastırarak tut.",
        "40 dk + 2 saat",
        "Ek yerinden çok az erimiş plastik taşmış (bu normal, zımparalanacak); gövde düz ve bükülmemiş.",
      ),
      a(
        "Kanatları ve kuyruğu tak",
        "Kanatları yapıştır ve uçaksı önden bakarak iki kanadın da aynı açıda olduğunu kontrol et. Kuruyana kadar gerekirse kitapların arasına koyarak destekle.",
        "30 dk + 4 saat",
        "Önden bakınca kanatlar simetrik, kuyruk dik.",
      ),
      a(
        "Ek yerlerini düzelt",
        "Yapıştırıcı tam kuruyunca (en az 4 saat) ek yerlerini önce 400, sonra 1000 kumla zımparala. Derin boşluk varsa maket macunuyla doldurup kuruyunca zımparala.",
        "30 dk",
        "Parmağını ek yerinin üstünde gezdirince basamak hissetmiyorsun.",
      ),
      a(
        "Astarla",
        "Havalandırılan bir yerde, spreyi 25–30 cm uzaktan, sürekli hareket ettirerek ince ince sık. Tek kalın kat yerine 2 ince kat at; katlar arasında 15 dk bekle. 2 saat kurusun.",
        "20 dk + 2 saat",
        "Astar akmamış; altta kalan çizik ve boşluklar artık görünüyor (görünüyorsa zımparala, tekrar astarla).",
      ),
      a(
        "Ana renkleri boya",
        "Önce açık renkler, sonra koyular. Akrilik boyayı birkaç damla suyla süt kıvamına incelt, 2–3 ince kat sür. Her kat 30 dk kurusun.",
        "2 saat",
        "Fırça izi yok, renk tek düze; kenarlarda birikme yok.",
      ),
      a(
        "Detay ve çıkartmalar",
        "Kokpit çerçevesi, lastikler gibi detayları ince fırçayla boya. Çıkartmayı keserek ılık suda 20 sn beklet, yerine kaydır, peçeteyle suyunu bastırarak al. Gerekirse üzerine ince kat vernik at.",
        "1 saat",
        "Çıkartma altında hava kabarcığı yok; kenarları kalkmıyor.",
      ),
    ],
    sikHatalar: [
      "Gövde ekinde boşluk: Kuru prova yapmadan yapıştırmak. Önce oturt, sonra zımparala.",
      "Yapıştırıcı parmak izi bıraktı: Fazla yapıştırıcı plastiği eritir. Az kullan, kılcal uçla ek yerine değdir.",
      "Boya pütürlü: Boya incelmemiş ya da kat kurumadan ikinci kat atılmış.",
      "Çıkartma gümüşlendi (altında hava): Çıkartmayı parlak yüzeye uygula; mat boyada önce vernik at.",
    ],
  },

  "peri-bahcesi": {
    adimlar: [
      a(
        "Saksı ve yeri seç",
        "Dibinde su deliği olan, en az 30 cm çapında, alçak bir saksı seç. Peri bahçesini doğrudan güneş almayan ama aydınlık bir pencere önüne koymayı planla.",
        "5 dk",
        "Saksının dibinde delik var.",
      ),
      a(
        "Drenaj ve toprak",
        "Dibe 2 cm çakıl ya da kırık saksı parçası koy (su birikip kökleri çürütmesin). Üzerine bitkiye uygun toprağı doldur: sukulent kullanacaksan kaktüs toprağı. Bir tarafı tepe gibi yükselt, ortada düz bir alan bırak.",
        "10 dk",
        "Toprak kenardan 2 cm aşağıda; tepe ve düzlük net ayrılıyor.",
      ),
      a(
        "Yerleşim planı",
        "Bitkileri saksılarından çıkarmadan toprağın üstüne koyup yerleşimi dene. Uzun bitkiler arkaya, ev tepenin yamacına, düz alan önde 'bahçe' olarak kalsın.",
        "10 dk",
        "Önden bakınca her şey görünüyor; uzun bitki evi kapatmıyor.",
      ),
      a(
        "Bitkileri dik",
        "Her bitki için kökü kadar çukur aç, kök topunu hafifçe gevşet, dik ve etrafını parmaklarınla bastır. Sukulentleri birbirine 3–4 cm aralıkla dik; büyüyecekler.",
        "15 dk",
        "Bitkiler hafifçe çekince sallanmıyor.",
      ),
      a(
        "Evi ve yolu yerleştir",
        "Minyatür evi tepenin yamacına 1 cm gömerek oturt. Evin kapısından saksının kenarına kıvrımlı bir yol çiz ve çakıllarla doldur.",
        "15 dk",
        "Ev eğilmeden duruyor; yol kesintisiz.",
      ),
      a(
        "Çit ve detaylar",
        "Kuru dal parçalarını 4–5 cm boyunda kes, sıcak silikon veya ahşap tutkalıyla iki yatay çubuğa yapıştırarak çit yap; kuruyunca toprağa sapla. Boş yerlere yosun koy.",
        "20 dk",
        "Çit kendi başına dik duruyor.",
      ),
      a(
        "İlk sulama ve bakım",
        "Sukulentlerde dikimden 2–3 gün sonra ilk sulamayı yap (kökler yerleşsin); toprak tamamen kurudukça, yaklaşık haftada bir, dipten su çıkana kadar sula. Yosunlu kısmı sprey şişeyle nemlendir.",
        "5 dk",
        "Saksının altından fazla su akıyor ve tabakta su bekletilmiyor.",
      ),
    ],
    sikHatalar: [
      "Bitkiler çürüdü: Delisiz saksı ya da çok sık sulama. Toprak tamamen kurumadan sulama.",
      "Sukulentler uzayıp soldu: Işık az. Daha aydınlık bir pencereye al.",
      "Yosun ve sukulent bir arada sorun çıkardı: Yosun nem, sukulent kuruluk ister; yosunu sadece ayrı bir köşede kullan ve ayrı nemlendir.",
    ],
    guvenlikEk: ["Bazı süs bitkileri yutulursa zararlıdır; küçük çocuk ve evcil hayvanların ulaşamayacağı yere koy."],
  },

  "bluetooth-araba": {
    malzemeDegistir: {
      // 4×AA (6 V) L298N'de ~2 V kaybeder; motorlar zayıf kalır ve Arduino'yu besleyemez
      ba6: { ad: "6'lı AA pil yuvası + 6 pil (anahtarlı)", miktar: "1 set" },
    },
    adimlar: [
      a(
        "Şasiyi kur",
        "Motorları şasiye vidala, motor kablolarının lehimli olduğunu kontrol et (lehimsizse yetişkin lehimlemeli). Tekerlekleri motor millerine bastırarak tak, sarhoş tekerleği ön/arka uca vidala.",
        "30 dk",
        "Tekerlekler elle çevrilince sürtmeden dönüyor; şasi düz zeminde dört noktadan basıyor.",
      ),
      a(
        "Kartları yerleştir",
        "Arduino'yu ve L298N'yi şasiye mesafe vidası veya çift taraflı bantla sabitle. Pil yuvasını ağırlık ortada olacak şekilde yerleştir. Kartların altı metal şasiye değmemeli.",
        "15 dk",
        "Kartlar sallanmıyor ve alttan hiçbir lehim noktası metale değmiyor.",
      ),
      a(
        "Motorları sürücüye bağla",
        "Sol motoru L298N OUT1–OUT2, sağ motoru OUT3–OUT4 vidalı uçlarına bağla. ENA ve ENB üzerindeki atlama kablolarını (jumper) çıkarma; motorlar tam hızda çalışır.",
        "10 dk",
        "Vidalı uçlar sıkı; kablo çekince çıkmıyor.",
      ),
      a(
        "Kontrol pinlerini bağla",
        "L298N IN1→Arduino 5, IN2→6, IN3→9, IN4→10. Pil yokken yap; tüm bağlantıları bir kez daha say.",
        "10 dk",
        "Dört kablo da doğru pinde (kodla aynı: 5, 6, 9, 10).",
      ),
      a(
        "Bluetooth modülünü bağla",
        "HC-05: VCC→5V, GND→GND, TXD→Arduino pin 2. Arduino pin 3'ten 1 kΩ direnç ile HC-05 RXD'ye git; RXD ile GND arasına 2 kΩ direnç koy. Bu gerilim bölücü, modülün 3,3 V'luk girişini korur.",
        "15 dk",
        "Dirençlerin yeri doğru: 1 kΩ pin 3 tarafında, 2 kΩ RXD ile GND arasında.",
      ),
      a(
        "Gücü bağla",
        "Pil yuvasının + kablosunu L298N'nin 12V girişine, – kablosunu GND'sine bağla. L298N'nin GND'sini Arduino GND'sine de bağla (ortak toprak şart). Arduino'yu besleme: L298N'nin 5V çıkışı → Arduino 5V pini (L298N üzerindeki 5V jumper takılı olmalı). Pil gerilimi en az 7 V olmalı: 6×AA (9 V) ya da 2×18650 (7,4 V) kullan.",
        "10 dk",
        "Pil takınca hem L298N'nin hem Arduino'nun güç ışığı yanıyor.",
      ),
      a(
        "Kodu yükle",
        "Pil anahtarını kapat, Arduino'yu USB ile bilgisayara bağla, Kod sekmesindeki kodu Arduino IDE'de 'Arduino Uno' kartı seçerek yükle. Bluetooth modülü pin 2–3'ü kullandığı için yükleme sırasında sökmen gerekmez.",
        "10 dk",
        "IDE'de 'Yükleme tamamlandı' yazıyor.",
      ),
      a(
        "Telefonu eşleştir ve test et",
        "Arabayı tekerlekleri havada kalacak şekilde bir kutunun üstüne koy, pili aç. Telefonda Bluetooth ayarlarından HC-05'i bul, şifre 1234 (olmazsa 0000). Bir 'Bluetooth RC Controller' uygulamasıyla bağlan ve ileri, geri, sağ, sol, dur tuşlarını dene.",
        "15 dk",
        "HC-05'in ışığı hızlı yanıp sönmeden yavaş çift yanıp sönmeye geçti (bağlandı); tekerlekler tuşlara doğru tepki veriyor.",
      ),
      a(
        "Yönleri düzelt ve yere indir",
        "İleri tuşunda bir tekerlek geri dönüyorsa o motorun iki kablosunu OUT ucunda yer değiştir. Sağ-sol ters ise iki motorun kablolarını takas et. Sonra arabayı düz zemine indir.",
        "10 dk",
        "Araba ileri tuşunda düz ileri gidiyor, dur tuşunda duruyor.",
      ),
    ],
    sikHatalar: [
      "Motorlar çok zayıf ya da Arduino yeniden başlıyor: Pil gerilimi düşük. 4×AA yetmez; 6×AA veya 2×18650 kullan.",
      "Telefon bağlanıyor ama araba tepki vermiyor: Ortak GND yok ya da TX/RX ters. HC-05 TXD → pin 2 olmalı.",
      "Bir tekerlek ters dönüyor: Motor kablolarını o OUT ucunda yer değiştir.",
      "HC-05 listede görünmüyor: Modülün ışığı hiç yanmıyorsa VCC/GND bağlantısını kontrol et.",
    ],
    guvenlikEk: [
      "18650 lityum pil kullanacaksan korumalı pil ve uygun şarj cihazı kullan; ezilmiş, şişmiş pili kullanma.",
    ],
  },

  "depron-planor": {
    adimlar: [
      a(
        "Parçaları çiz",
        "Depronun üzerine cetvelle çiz: kanat 60×10 cm, yatay kuyruk 20×6 cm, dikey kuyruk 8×7 cm (bir kenarı eğimli yamuk). Kanat uçlarını yuvarlatabilirsin.",
        "10 dk",
        "Ölçüler doğru, köşeler gönyede.",
      ),
      a(
        "Kes (yetişkin)",
        "Altına kesme altlığı koy, metal cetveli çizgiye bastır ve maket bıçağını 2–3 hafif geçişle çek; tek seferde bastırmak köpüğü yırtar. Bıçak ucu körelirse kır.",
        "15 dk",
        "Kenarlar yırtık değil, düz.",
      ),
      a(
        "Kanada profil ver",
        "Kanadın ön kenarını zımparayla yuvarlat, arka kenarı alttan inceltip sivrilt (kanat kesiti damla gibi olsun). Üst yüzeyi hafifçe kavisli, alt yüzeyi düz kalabilir.",
        "15 dk",
        "Yandan bakınca ön kenar yuvarlak, arka kenar ince.",
      ),
      a(
        "Dihedral ver",
        "Kanadı tam ortadan, üst yüzeyden ¾ derinliğe kadar kes (alt yüzey menteşe gibi kalsın). İki ucu her biri 4–5 cm yükselecek şekilde kaldır, kesiğe yapıştırıcı sür ve kuruyana kadar uçların altına kitap koyarak destekle.",
        "10 dk + 30 dk",
        "Önden bakınca kanat sığ bir 'V' şeklinde ve iki uç aynı yükseklikte.",
      ),
      a(
        "Gövdeye birleştir",
        "Kanadı çubuğun önden yaklaşık 1/3'üne, yatay kuyruğu arka uca, dikey kuyruğu yatay kuyruğun üstüne tam ortaya yapıştır. Kuyruklar kanatla paralel ve dik olmalı.",
        "15 dk + 1 saat",
        "Arkadan bakınca kanat ve yatay kuyruk paralel, dikey kuyruk tam dik.",
      ),
      a(
        "Ağırlık merkezini ayarla",
        "Kanadın önden %30'u noktasını (10 cm'lik kanatta ön kenardan 3 cm) iki yandan işaretle. Uçağı bu noktalardan parmak uçlarınla tut; burnu hafif aşağı bakana kadar buruna oyun hamuru ekle.",
        "10 dk",
        "Parmak üstünde dengede ya da burnu çok hafif aşağıda.",
      ),
      a(
        "Kayma testi",
        "Rüzgarsız bir günde, çimenlikte, uçağı göz hizasında burnu hafif aşağı tutarak yürür gibi düz ve yumuşak it (fırlatma). Uçuşu izle.",
        "15 dk",
        "Uçak düz bir çizgide, yavaşça alçalarak 5–10 m süzülüyor.",
      ),
      a(
        "Trim ayarı",
        "Burun aşağı dalıyorsa ağırlığın bir kısmını al. Yükselip düşüyorsa (dalgalanıyor) ağırlık ekle ya da yatay kuyruğun arka kenarını hafifçe aşağı bük. Hep bir yana dönüyorsa dikey kuyruğun arka kenarını ters yöne hafifçe bük.",
        "15 dk",
        "Üst üste üç atışta düz ve uzun süzülüyor.",
      ),
    ],
    sikHatalar: [
      "Hemen burun üstü dalıyor: Burun çok ağır. Ağırlığı azalt.",
      "Havalanıp duruyor ve düşüyor (stall): Kuyruk ağır. Buruna ağırlık ekle.",
      "Hep aynı yöne dönüyor: Kanatlar simetrik değil ya da dikey kuyruk eğik. Önden ve arkadan bakarak düzelt.",
      "Sert fırlatınca takla atıyor: Planör fırlatılmaz, yumuşakça itilir.",
    ],
  },

  // ───────────── Grup 2: Doğa & Hayvan ─────────────
  // Adım sayısı ve sırası src/cizim/adim/doga-hayvan.ts sahneleriyle birebir eşleşir; değiştirme.
  "samandirali-takim": {
    adimlar: [
      a(
        "Stoperi tak",
        "Makaradaki ana misinanın ucunu stoper tüpünden geçir, stoperi misinaya kaydır ve tüpü çıkar. Stoperin şamandıraya uzaklığı, yemin su içindeki derinliğidir. İlk deneme için tuttuğun yerin tahmini derinliğinden 20–30 cm kısa başla; balığa ve yere göre sonra kaydırırsın.",
        "5 dk",
        "Stoper misina üzerinde parmakla zorlanınca kayıyor ama kendi kendine yer değiştirmiyor.",
      ),
      a(
        "Şamandırayı geçir",
        "Kaydırmalı şamandırayı alttaki halkasından (ya da gövdesindeki kanaldan) misinaya geçir. Anten yukarı, gövde aşağı bakacak. Şamandıranın üstünde yazan taşıma gramajını not et (ör. 3 g); kurşunları buna göre seçeceksin.",
        "2 dk",
        "Şamandıra misina üzerinde serbestçe kayıyor ve stopere gelince duruyor.",
      ),
      a(
        "Kurşunları kademeli sık",
        "Toplam ağırlık şamandıranın taşıma gramajına eşit olacak şekilde saçma kurşunları seç. Büyükleri üstte, şamandıradan 30–40 cm aşağıda toplu sık; küçükleri aşağıya doğru aralıklı diz. Kurşunları dişle değil, düz pense ya da tırnakla hafifçe sık; misinayı ezersen oradan kopar.",
        "10 dk",
        "Kurşunlar yukarıdan aşağıya küçülerek diziliyor, parmakla itince kaymıyor ve misinada ezik yok.",
      ),
      a(
        "Fırdöndüyü klinç düğümüyle bağla",
        "Ana misinanın ucunu fırdöndünün halkasından geçir, misina etrafında 5–7 tur sar. Ucu önce halkanın hemen yanındaki küçük boşluktan, sonra oluşan büyük halkadan geçir. Islat ve yavaşça sık, fazlasını 2–3 mm bırakarak kes.",
        "5 dk",
        "Düğüm toparlak ve sıkı; sertçe çekince kaymıyor. Fırdöndü kurşunların aşağı kaymasını engelliyor.",
      ),
      a(
        "Köstek hazırla",
        "Ana misinadan ince (0,20 mm) köstek misinasından 50–80 cm kes. Bir ucuna iğneyi klinç düğümüyle bağla, diğer ucunu fırdöndünün boş halkasına bağla. Köstek ince olduğu için takılmada sadece iğne kopar, takımın geri kalanı kurtulur.",
        "10 dk",
        "Köstek boyu 50–80 cm, iki düğüm de çekme testini geçiyor ve iğne ucu körelmemiş.",
      ),
      a(
        "Suda ayarla",
        "Takımı kıyıya yakın sakin suya at. Şamandıra yatık kalıyorsa ağırlık az, tamamen batıyorsa fazladır: en küçük kurşunu ekleyerek ya da çıkararak ayarla. Doğru ayarda yalnızca antenin 1–2 cm'si su üstünde kalır; en ufak vuruşu bile böyle görürsün.",
        "10 dk",
        "Şamandıra dik duruyor, sadece antenin ucu su üstünde ve dalgada batıp çıkmıyor.",
      ),
    ],
    sikHatalar: [
      "Şamandıra yan yatıyor: Kurşun az. Taşıma gramajı kadar kurşun ekle.",
      "Vuruşu göremiyorsun: Şamandıranın çok büyük kısmı dışarıda. Antende 1–2 cm kalana kadar ağırlaştır.",
      "Misina kurşunun olduğu yerden kopuyor: Kurşunu çok sert sıkıp misinayı ezdin. Hafifçe sık, ezilen kısmı kesip yeniden bağla.",
      "Atışta takım dolanıyor: Kurşunlar tek noktada ve iğneye çok yakın. Ana ağırlığı yukarıya topla, küçükleri aşağıya dağıt.",
    ],
  },

  "olta-dugumleri": {
    adimlar: [
      a(
        "Geliştirilmiş klinç",
        "Misinanın ucunu iğne gözünden 15 cm kadar geçir. Ucu ana misina etrafında 5–7 tur sar (kalın misinada 5, ince misinada 7). Ucu önce gözün hemen yanındaki küçük halkadan, sonra sarımların üstünde oluşan büyük halkadan geçir.",
        "10 dk",
        "Sarımlar üst üste binmeden yan yana duruyor ve uç iki halkadan da geçmiş.",
      ),
      a(
        "Palomar",
        "Misinayı 15 cm ikiye katla, katlı ucu iğne gözünden geçir. Katlı misinayla gevşek bir basit düğüm at; iğne alttan sarksın. İğneyi katlı ucun oluşturduğu halkanın içinden geçir, düğümü göze doğru kaydırarak sık.",
        "10 dk",
        "Düğüm gözün hemen üstünde, iki misina kolu da eşit gerilmiş ve halka iğnenin üstünde düzgün kapanmış.",
      ),
      a(
        "Çift uni (misina ekleme)",
        "İki misinanın uçlarını 15–20 cm üst üste koy. Bir uçla diğer misinanın etrafında halka yap ve halkanın içinden 5–6 tur sararak uni düğümü at; aynısını diğer uçla ters yönde yap. İki düğümü önce ayrı ayrı sık, sonra ana misinalardan çekerek birbirine kaydır.",
        "15 dk",
        "İki düğüm birbirine değene kadar kaymış, arada boşluk yok ve sarımlar düzgün.",
      ),
      a(
        "Islat ve yavaşça sık",
        "Her düğümü sıkmadan önce tükürük ya da suyla ıslat. Sert bir çekişle değil, yavaş ve kararlı bir çekişle sık. Kuru sıkılan misina sürtünmeyle ısınır, sertleşir ve gücünün bir kısmını kaybeder.",
        "5 dk",
        "Sıkılmış düğümde kıvrılmış, beyazlamış ya da kıvırcıklaşmış misina yok.",
      ),
      a(
        "Test et ve uçları kes",
        "İğneyi pense ile tut, ana misinayı eline birkaç tur sarıp sertçe çek. Düğüm kayıyor ya da misina düğümden kopuyorsa kes ve yeniden at. Geçen düğümün fazla ucunu 2–3 mm bırakarak kes.",
        "5 dk",
        "Üç düğüm de sert çekişte kaymıyor; uçlar 2–3 mm bırakılarak kesilmiş.",
      ),
    ],
    sikHatalar: [
      "Düğüm sıkınca kayıp açılıyor: Tur sayısı az. İnce misinada 7 tura çık.",
      "Misina düğümün hemen üstünden kopuyor: Kuru sıktın ve misina ısındı. Islatıp yavaşça sık.",
      "Palomar'da iğne halkaya girmiyor: Katladığın kısım kısa. 15 cm katla.",
      "Çift uni'de düğümler birbirine yaklaşmıyor: Tek tek sıkmadan kaydırmaya çalıştın. Önce her birini sık, sonra kaydır.",
    ],
  },

  "nano-bitkili": {
    adimlar: [
      a(
        "Yeri seç",
        "Doğrudan güneş almayan (yosun patlatır), ısıtıcı ve klimanın hemen yanında olmayan, yakında priz bulunan bir yer seç. Dolu 30 L akvaryum taş ve toprakla yaklaşık 40 kg olur; dolabın düz ve sağlam olduğunu su terazisiyle kontrol et.",
        "15 dk",
        "Zemin dengede (su terazisi ortada), yer pencere güneşi almıyor ve priz 1–2 m içinde.",
      ),
      a(
        "Zemini eğimli ser",
        "Akvaryumu yıkama (deterjan kullanma, sadece suyla sil). Aquasoil'i yıkamadan dök: arkada 6 cm, önde 3 cm olacak şekilde eğim ver. Eğim, hem derinlik hissi verir hem de arkadaki uzun bitkilerin köklerine yer açar.",
        "15 dk",
        "Yandan bakınca toprak arkadan öne doğru düzgünce alçalıyor.",
      ),
      a(
        "Hardscape kur",
        "Taşları ve kökü fırçayla yıka. Kökü önceden birkaç gün suda beklet; yoksa yüzer ve suyu çay rengine boyar. Ana taşı tam ortaya değil, camı dikey olarak üçe böldüğünde soldaki ya da sağdaki çizgiye yakın koy; küçük taşları ona doğru yönlendir.",
        "30 dk",
        "Odak noktası ortada değil, üçte bir çizgisine yakın; taşlar sallanmıyor.",
      ),
      a(
        "Bitkileri cımbızla dik",
        "Toprağı spreyle nemlendir. Bitkileri saksı ve yününden temizle. Cımbızla kökün dibinden tutup 2–3 cm derine dik: uzun türler arkaya, kısa türler öne. Anubias ve Java Fern'i toprağa gömme; taşa veya köke iple ya da jel yapıştırıcıyla bağla, gömülürse gövdeleri çürür.",
        "45 dk",
        "Bitkiler yukarı doğru hafifçe çekince yerinden çıkmıyor; Anubias ve Java Fern gövdesi açıkta.",
      ),
      a(
        "Suyu yavaşça doldur",
        "Toprağın üstüne bir tabak ya da temiz poşet koy, suyu bunun üstüne çok yavaş dök; toprak kalkmasın. Musluk suyunu kullanacaksan dökmeden önce su düzenleyiciyi etiketteki dozda ekle. Su tamamen dolunca tabağı al.",
        "20 dk",
        "Su biraz bulanık olabilir ama toprak eğimi bozulmamış, bitkiler yerinden kalkmamış.",
      ),
      a(
        "Ekipmanı çalıştır",
        "Filtreyi ve ısıtıcıyı suya yerleştir. Cam ısıtıcıyı fişe takmadan önce 15–30 dakika suda beklet ki ısı farkından çatlamasın. Isıtıcıyı 24–26 °C'ye ayarla, ışığı zamanlayıcıyla günde 6 saate kur. Kablolarda damlama halkası bırak, sonra fişleri tak.",
        "20 dk",
        "Filtre suyu döndürüyor, ertesi gün termometre 24–26 °C gösteriyor ve tüm kablolar prizden önce aşağı sarkıyor.",
      ),
      a(
        "Azot döngüsünü bekle",
        "Döngünün başlaması için suda bir amonyak kaynağı gerekir: 2–3 günde bir bir tutam balık yemi at ya da hazır bakteri kültürünü etiketine göre ekle. Haftada iki kez test et. Amonyak önce yükselir, sonra nitrit yükselir, ikisi de 0'a inip nitrat görülünce döngü bitmiştir (4–6 hafta). İlk canlıları az sayıda ekle (birkaç karides ya da 3–4 küçük balık).",
        "4–6 hafta",
        "Üst üste iki testte amonyak 0 ve nitrit 0; nitrat ölçülebiliyor.",
      ),
    ],
    sikHatalar: [
      "Su sürekli bulanık: Toprak doldururken kalktı ya da kök yıkanmadı. Filtre birkaç günde temizler; bekle, filtreyi kapatma.",
      "İlk haftalarda yosun patladı: Işık çok uzun yanıyor ya da güneş alıyor. Işığı 6 saatte tut, güneşten uzaklaştır.",
      "Döngü hiç ilerlemiyor (amonyak hep 0): Suda amonyak kaynağı yok. Bir tutam yem ya da bakteri kültürü ekle.",
      "Balıklar ilk haftada öldü: Döngü bitmeden canlı eklendi. Testte amonyak ve nitrit 0 olmadan canlı koyma.",
    ],
    guvenlikEk: [
      "Cam ısıtıcıyı sudan çıkarmadan önce fişini çek ve 15 dakika soğumasını bekle; sıcakken havaya çıkarılan ısıtıcı çatlayabilir.",
    ],
  },

  "sunger-filtre": {
    adimlar: [
      a(
        "Borunun alt kısmını delikle",
        "PVC boruyu mengeneye ya da işkenceyle sabitle. Alt uçtan başlayarak 12 cm'lik kısma kalemle 1 cm arayla noktalar işaretle; borunun iki karşı yüzüne de. Ø4 mm uçla delikleri aç, sonra delik ağızlarındaki çapakları maket bıçağı ya da zımparayla temizle.",
        "20 dk",
        "Delikler borunun alt 12 cm'sinde düzenli sıralı ve iç yüzde çapak kalmamış.",
      ),
      a(
        "Alt ucu kapakla kapat",
        "PVC kapağı delikli uca sıkıca geçir. Yapıştırıcı gerekmez; gevşekse bir tur teflon bant sar. Yapıştırıcı kullanırsan en az 24 saat kurumasını bekle ve iyice durula.",
        "5 dk",
        "Kapak elle çekince çıkmıyor; boruyu suya daldırınca kapaktan değil deliklerden su giriyor.",
      ),
      a(
        "Süngeri del ve boruyu geçir",
        "Süngerin ortasına, üstten başlayıp alta 2 cm kalana kadar boru çapından biraz dar bir kanal aç (makas ya da maket bıçağıyla). Boruyu döndürerek kanala it; delikli kısım tamamen süngerin içinde kalmalı.",
        "15 dk",
        "Boru süngerde dik ve sıkı duruyor, hiçbir delik süngerin dışında kalmamış.",
      ),
      a(
        "Hava taşını borunun içine indir",
        "Hava hortumunun ucuna hava taşını tak. Taşı borunun üst ağzından içeri, delikli kısmın hemen üstüne gelecek şekilde sarkıt. Hortumun fazla kısmını boru ağzından dışarı çıkar.",
        "5 dk",
        "Hava taşı borunun içinde, delikli bölümün hemen üstünde duruyor.",
      ),
      a(
        "Çek valfi tak, pompaya bağla",
        "Hortumu pompaya yakın bir yerden kes ve araya çek valfi tak. Valfin üstündeki ok akvaryuma doğru bakmalı. Pompayı mümkünse su seviyesinin üstüne koy.",
        "10 dk",
        "Okun yönü akvaryuma doğru; pompa kapalıyken hortumdan pompaya su geri gelmiyor.",
      ),
      a(
        "Akvaryumda çalıştır",
        "Süngeri önce akvaryumdan aldığın suyun içinde birkaç kez sıkıp havasını çıkar. Filtreyi akvaryumun bir köşesine, dibe yerleştir ve pompayı çalıştır. Hava kabarcıkları borudan yükselirken suyu süngerden çeker.",
        "10 dk",
        "Borudan sürekli kabarcık yükseliyor ve sünger yüzeyine yüzen küçük parçacıklar emiliyor.",
      ),
    ],
    sikHatalar: [
      "Kabarcık çok zayıf: Hortum uzun ya da hava taşı tıkalı. Hortumu kısalt, taşı değiştir.",
      "Filtre suda yüzüyor: Süngerin havası alınmadı. Su içinde birkaç kez sık; gerekirse tabana küçük bir taş bağla.",
      "Elektrik kesilince su pompaya aktı: Çek valf ters takılmış ya da hiç yok. Valfin oku akvaryuma bakmalı.",
      "Sünger kirlenince musluk suyunda yıkandı: Faydalı bakteriler öldü. Akvaryumdan alınan suda hafifçe çalkala.",
    ],
  },

  "kapali-terraryum": {
    adimlar: [
      a(
        "Drenaj katmanını koy",
        "Kavanozu sıcak suyla iyice yıka ve kurula. Drenaj taşını süzgeçte durula, tozunu al. Kavanozun dibine 2–3 cm kalınlıkta düzgün bir kat halinde koy. Fazla su burada toplanır, kökler suda kalmaz.",
        "10 dk",
        "Taş katmanı her yerde yaklaşık aynı kalınlıkta ve camda toz izi yok.",
      ),
      a(
        "İnce aktif karbon serp",
        "Drenaj taşının üstüne bir avuç aktif karbon serp. Taşların tamamını örtmesi gerekmez; ince bir kat yeterli. Karbon kapalı ortamda koku ve küf oluşumunu azaltır.",
        "5 dk",
        "Taşların üstünde ince ve eşit bir karbon katmanı var.",
      ),
      a(
        "Toprağı eğimli ser",
        "Toprağı hafifçe nemlendir (avucunda sıkınca su damlamamalı). Kaşıkla 4–6 cm koy: arkada yüksek, önde alçak bir eğim ver. Toprağı bastırma, sadece düzle; köklerin nefes alması gerekir.",
        "10 dk",
        "Camdan bakınca toprak arkadan öne doğru alçalıyor; toprak avuçta sıkınca su damlatmayacak nemde.",
      ),
      a(
        "Bitkileri cımbızla dik",
        "Bitkiyi saksıdan çıkar, kök topunu hafifçe gevşet. Kaşıkla toprakta bir çukur aç, bitkiyi cımbızla tutarak yerleştir, kökleri toprakla örtüp kaşığın sırtıyla bastır. Uzun bitkiyi arkaya, küçükleri öne koy; yapraklar cama değmesin.",
        "20 dk",
        "Bitkiler dik duruyor, kökleri açıkta değil ve yapraklar cama yaslanmıyor.",
      ),
      a(
        "Yosunu boş alanlara bastır",
        "Yosunu elle küçük parçalara ayır. Toprağın boş kalan yerlerine parçaları yerleştirip parmakla ya da kaşığın sırtıyla hafifçe bastır; yosunun toprağa tam temas etmesi tutunmasını sağlar. Doğadan toplayacaksan az al ve koruma alanlarından toplama.",
        "15 dk",
        "Yosun parçaları toprağa yapışık, kenarları havada değil.",
      ),
      a(
        "Sula ve kapat",
        "Spreyle bitkilerin ve yosunun üstüne 10–15 kez püskürt; camdaki toprağı da spreyle temizle. Kapağı kapat. Aydınlık ama doğrudan güneş almayan bir yere koy; güneş kavanozu fırına çevirir. İlk hafta her gün bak.",
        "10 dk + 1 hafta takip",
        "Sabahları camda hafif buğu oluşuyor, gün içinde kısmen açılıyor; dipte su birikmiyor.",
      ),
    ],
    sikHatalar: [
      "Cam sürekli buğulu ve damlalı: Su fazla. Kapağı birkaç saat aç, fazla nemi dışarı ver.",
      "Camda hiç buğu yok: Su az. 3–4 kez püskürt ve kapat.",
      "Beyaz küf çıktı: Ölü yaprak ya da fazla nem var. Küflü kısmı cımbızla al, kapağı bir gün açık bırak.",
      "Yosun sarardı: Güneş alıyor ya da çok karanlıkta. Aydınlık ama gölge bir yere taşı.",
    ],
  },

  "sukulent-terraryum": {
    adimlar: [
      a(
        "Çakıl katmanını koy",
        "Kaseyi yıka ve kurula. Dibine 2 cm çakıl koy. Kasede drenaj deliği olmadığı için bu katman fazla suyun köklerden uzakta toplanacağı tek yerdir.",
        "10 dk",
        "Çakıl kasenin tabanını tamamen ve düzgünce örtüyor.",
      ),
      a(
        "Kaktüs toprağını ser",
        "Çakılın üstüne 5 cm kaktüs toprağı koy. Toprak kuru ya da çok az nemli olmalı. Elinde varsa toprağa bir avuç perlit veya ponza karıştır; su daha hızlı süzülür.",
        "10 dk",
        "Toprak gevşek ve kuru; avuçta sıkınca topak olmuyor.",
      ),
      a(
        "Bitkileri yerleştir",
        "Kalın eldiven giy. Bitkiyi saksısından ters çevirip çıkar, kök toprağını hafifçe silkele; çürümüş (kahverengi, yumuşak) kökleri kopar. Kaşıkla çukur aç, bitkiyi yerleştir ve etrafına toprak doldurup hafifçe bastır. Büyük bitkileri arkaya ya da ortaya, küçükleri kenarlara koy; aralarında biraz boşluk bırak.",
        "20 dk",
        "Bitkiler dik ve sallanmıyor, birbirine değmiyor ve gövdeleri toprağa gömülmemiş.",
      ),
      a(
        "Üst kaplamayı yap",
        "Kaşık ya da kağıttan yaptığın huniyle bitkilerin arasına renkli kum veya ince çakıl dök. Yaprakların üstüne gelen kumu fırça ya da üflemeyle temizle. Dekor taşlarını yerleştir.",
        "15 dk",
        "Toprak tamamen örtülü, yaprakların üstünde kum kalmamış.",
      ),
      a(
        "İlk sulamayı bekleterek yap",
        "Dikimden sonra bir hafta hiç sulama; silkelerken zarar gören köklerin kapanması gerekir. Sonra toprağa, yapraklara değdirmeden, dibe ulaşacak kadar az su ver (küçük kasede yarım çay bardağı kadar). Bundan sonra toprak tamamen kuruyunca, genelde 2–3 haftada bir sula.",
        "1 hafta + 5 dk",
        "İlk sulamadan bir gün sonra çakıl katmanında su birikintisi görünmüyor.",
      ),
    ],
    sikHatalar: [
      "Bitkinin dibi yumuşadı ve karardı: Fazla sulama. Çürüyen bitkiyi çıkar, sulamayı seyrelt.",
      "Bitki uzayıp soldu (ışığa doğru eğildi): Işık az. Günde birkaç saat güneş alan pencere önüne taşı.",
      "Kaktüs dikeni ele battı: Eldivensiz tutuldu. Kalın eldiven ya da katlanmış kağıt kullan.",
      "Kapalı kavanoza sukulent dikildi: Nem çürütür. Sukulent için ağzı açık kase kullan.",
    ],
  },

  "kus-yuvasi": {
    adimlar: [
      a(
        "Parçaları ölçüp kes",
        "İşlenmemiş tahtaya ölçüleri işaretle: ön ve arka 12×25 cm, yanlar 12×20 cm, taban 12×12 cm, çatı 18×18 cm. Tahtayı işkenceyle masaya sabitle ve çizginin dış tarafından kes. Birleştirmeden önce parçaları kuru dene; tahta kalınlığından dolayı tabanın oturmadığı yeri yerinde ölçerek kısalt.",
        "45 dk",
        "Parçalar kuru dizildiğinde aralarında 1–2 mm'den büyük boşluk kalmıyor.",
      ),
      a(
        "Giriş deliğini aç",
        "Ön parçada üst kenardan 6 cm aşağıya, ortaya bir işaret koy. Parçayı altına bir hurda tahta koyarak sabitle, Ø32 mm panç ile del; panç arkaya çıkmak üzereyken çevirip diğer yüzden bitir, böylece kenar patlamaz. Ø32 mm büyük baştankara ve serçe içindir; daha büyük delik saldırgan kuşları davet eder.",
        "15 dk",
        "Delik Ø32 mm, üstten 6 cm aşağıda ve kenarlarında kıymık yok.",
      ),
      a(
        "Havalandırma ve drenaj deliklerini aç",
        "Her iki yan parçanın üst kısmına, kenardan 2 cm aşağıya 2–3 küçük (Ø6–8 mm) havalandırma deliği aç. Tabanın köşelerine yakın 4 adet Ø6 mm drenaj deliği del; yuvaya giren yağmur suyu buradan çıkar.",
        "15 dk",
        "Yanlarda üstte hava delikleri, tabanda 4 drenaj deliği var.",
      ),
      a(
        "Kutuyu birleştir",
        "Tabanı yanların arasına oturt, önü ve arkayı da ekleyip paslanmaz vidalarla bağla. Tahta çatlamasın diye vida yerlerine önce Ø2,5 mm uçla kılavuz delik aç. İç yüzeyleri boyama, vernikleme ve zımparalama: yavrular pürüzlü iç yüzeye tutunarak delikten çıkar.",
        "45 dk",
        "Kutu sallanmıyor, köşelerde ışık sızan boşluk yok ve iç yüzey ham.",
      ),
      a(
        "Çatıyı menteşeyle tak",
        "Çatıyı önden 3–4 cm taşacak şekilde yerleştir; bu saçak yağmuru giriş deliğinden uzak tutar. Arka kenara küçük menteşeyi vidala, öne bir kanca ya da vida takıp çatıyı kapalı tut. Böylece sonbaharda yuvayı açıp temizleyebilirsin.",
        "20 dk",
        "Çatı açılıp kapanıyor, kapalıyken rüzgârla kalkmıyor ve önden taşıyor.",
      ),
      a(
        "2–4 m yükseğe as",
        "Yuvayı kuşların yuva aradığı kış sonundan (Şubat) önce as. Ağaca ya da duvara 2–4 m yükseğe, giriş deliği hâkim rüzgâra ve öğle güneşine bakmayacak şekilde, kedilerin tırmanamayacağı bir yere yerleştir. Ağaca çivi çakma; geniş bir kayış veya plastik kaplı telle, gövdeyi sıkmadan bağla.",
        "30 dk",
        "Yuva sallanmıyor, hafif öne eğik (yağmur içeri akmaz) ve yakında kedinin atlayabileceği dal yok.",
      ),
    ],
    sikHatalar: [
      "Kuşlar yuvaya yerleşmiyor: Geç asıldı ya da delik güneşe bakıyor. Kış sonundan önce as, deliği doğu ya da güneydoğuya çevir.",
      "İçi boyandı veya verniklendi: Kuşlar için zararlı. İçi her zaman ham kalmalı.",
      "Giriş deliğinin altına tünek takıldı: Yırtıcı kuşlar ve kedilerin işini kolaylaştırır. Tünek koyma.",
      "Yuva yağmur sonrası ıslak kalıyor: Drenaj deliği yok ya da çatı saçağı kısa. Tabana delik aç, çatıyı önden taşır.",
    ],
  },

  "kus-yemligi": {
    adimlar: [
      a(
        "Kaşık deliklerini aç",
        "Şişeyi yıka ve tamamen kurut; nem yemi küflendirir. Şişenin alt kısmında, dipten 6–8 cm yukarıda karşılıklı iki işaret koy; biri diğerinden 2 cm aşağıda olsun. Delikleri yetişkin, maket bıçağıyla kaşığın sapı sıkıca geçecek kadar açsın. Kaşığı içeriden dışarı geçir: hazne kısmı alçak taraftaki delikten dışarıda kalsın.",
        "10 dk",
        "Kaşık eğik duruyor, delikte sıkı ve sallanmıyor.",
      ),
      a(
        "Yem deliğini büyüt",
        "Kaşığın hazne tarafındaki deliği, yemin kaşığın üstüne akacağı kadar (yaklaşık 8 mm) büyüt. Fazla büyütme; yem boşalıp yere dökülür. Kenarları keskin kalmasın diye bıçakla düzelt.",
        "5 dk",
        "Şişeyi biraz yemle sallayınca yem kaşığın haznesine yavaşça akıyor ama dışarı taşmıyor.",
      ),
      a(
        "İkinci kaşığı tak",
        "Şişeyi 90° döndür ve ilk kaşığın 8–10 cm yukarısında aynı işlemi tekrarla. Böylece aynı anda birkaç kuş farklı yönlerden beslenebilir. Şişenin dibine yağmur suyu birikmesin diye tabana 2–3 küçük (2–3 mm) delik aç.",
        "10 dk",
        "İki kaşık birbirine dik, ikisinde de yem akıyor ve şişenin dibinde küçük süzme delikleri var.",
      ),
      a(
        "Doldur ve as",
        "Şişeyi huniyle kuş yemi karışımıyla doldur, kapağını kapat. Kapağın boynuna ipi ya da teli sıkıca bağla. Yemliği kedilerin atlayamayacağı, 1,5–2 m yüksekliğinde bir dala as; camlardan uzak olsun ki kuşlar cama çarpmasın.",
        "10 dk",
        "Yemlik düz asılı, rüzgârda dönse de düşmüyor ve yere 1,5 m'den yüksek.",
      ),
    ],
    sikHatalar: [
      "Yem hızla yere dökülüyor: Yem deliği çok büyük. Yeni bir şişede daha küçük delik aç.",
      "Yem küflendi: Şişe tam kurumadan dolduruldu ya da dipte su birikiyor. Kurut ve dibe süzme deliği aç.",
      "Hiç kuş gelmiyor: Yeni yemlik birkaç gün sonra fark edilir. Sabırlı ol, yeri sık değiştirme.",
      "Kaşık deliğinden kayıp düşüyor: Delik geniş. Delik kaşık sapından biraz dar olmalı.",
    ],
    guvenlikEk: ["Maket bıçağıyla kesimi yetişkin yapmalı; çocuk yalnızca yem doldurma ve asma aşamasına katılsın."],
  },

  "balkon-otlari": {
    adimlar: [
      a(
        "Drenaj katmanını koy",
        "Saksının dibinde su çıkış delikleri olduğundan emin ol; yoksa bir yetişkin delsin. Deliksiz saksıda çakıl tek başına yetmez, kökler çürür. Dibe 2–3 cm drenaj çakılı koy, üstüne saksı toprağını kenara 2 cm kalana kadar doldur.",
        "15 dk",
        "Saksının dibinde delikler var; toprak kenardan 2 cm aşağıda ve hafifçe sıkıştırılmış.",
      ),
      a(
        "Fideleri dik",
        "Fideleri dikimden önce sula. Toprakta fide kök topu büyüklüğünde çukurlar aç, aralarında 15 cm bırak. Kekiği saksının en güneşli ucuna, maydanozu daha gölge uca koy; fesleğen ortada kalsın. Fideyi saksıdakiyle aynı derinliğe dik, etrafını bastır.",
        "20 dk",
        "Fideler 15 cm arayla dik duruyor ve gövdeleri saksıdaki seviyeden derine gömülmemiş.",
      ),
      a(
        "Naneyi ayrı saksıya dik",
        "Naneyi küçük saksıya tek başına dik. Nanenin kökleri toprak altında yayılır ve kısa sürede tüm saksıyı kaplayıp diğer otları boğar. İki saksıyı yan yana koyabilirsin; toprakları ayrı olduğu sürece sorun yok.",
        "10 dk",
        "Nane ayrı saksıda; uzun saksıda nane yok.",
      ),
      a(
        "Parmak testiyle sula",
        "İşaret parmağını toprağa 2 cm sok: kuruysa sula, nemliyse bekle. Suyu yapraklara değil toprağa, saksının dibinden su gelene kadar yavaşça ver. Yazın her gün, serin havalarda 2–3 günde bir bakman gerekebilir. Kekik kuruya dayanıklıdır, en az onu sula.",
        "5 dk",
        "Sulamadan sonra saksının dibinden biraz su çıkıyor; toprak çamurlaşmıyor.",
      ),
      a(
        "Uç al ve hasat et",
        "Fesleğenin tepesinde çiçek tomurcuğu görünce tomurcuğu altındaki ilk yaprak çiftinin hemen üstünden makasla kes; bitki dallanıp daha gür olur. Hasatta her seferinde bitkinin en fazla üçte birini al, alttaki yaprakları bırak.",
        "5 dk",
        "Kesilen yerin altındaki yaprak koltuklarından birkaç gün içinde yeni sürgünler çıkıyor.",
      ),
    ],
    sikHatalar: [
      "Yapraklar sarardı ve dipler çürüdü: Fazla su ya da deliksiz saksı. Parmak testi yapmadan sulama.",
      "Fesleğen çiçeklendi, yapraklar küçüldü: Tomurcuklar alınmadı. Çiçeklenmeden önce uçlarını kes.",
      "Nane tüm saksıyı kapladı: Aynı saksıya dikildi. Naneyi her zaman ayrı saksıya koy.",
      "Otlar uzayıp cılızlaştı: Günde 4–6 saatten az güneş alıyor. Daha güneşli bir köşeye taşı.",
    ],
  },

  "mikro-yesillik": {
    adimlar: [
      a(
        "Ekim yatağını hazırla",
        "Hindistan cevizi lifini (ya da torfu) suyla nemlendir; avucunda sıkınca birkaç damla su çıkmalı. Delikli tepsiye 2 cm kalınlıkta düz bir kat ser, deliksiz tepsiyi altına koy. Ayçiçeği gibi iri tohumları ekimden önce 8–12 saat suda beklet; turp ve roka beklemeden ekilir.",
        "10 dk",
        "Yatak her yerde 2 cm, yüzeyi düz ve nemli ama altta su birikmiyor.",
      ),
      a(
        "Tohumları sık ek",
        "Tohumları yatağın üstüne sık ve eşit serp; tohumlar birbirine yakın ama üst üste olmasın. Elinle ya da düz bir kapakla hafifçe bastır, toprak örtme. Üstüne spreyle bol püskürt.",
        "5 dk",
        "Yüzeyde boş alan kalmamış, tohumlar yığın yapmamış ve hepsi nemli.",
      ),
      a(
        "İlk 3 gün karanlıkta tut",
        "Tepsinin üstünü ters çevrilmiş başka bir tepsiyle ya da karton kutuyla kapat; hafif bir ağırlık koymak köklerin toprağa tutunmasını sağlar. Günde bir kez kapağı açıp spreyle nemlendir. Filizler yaklaşık 3 günde kapağı itecek boya gelir.",
        "3 gün",
        "Filizler 2–4 cm boyunda, soluk sarı renkte ve kökleri toprağa tutunmuş.",
      ),
      a(
        "Işığa al, alttan sula",
        "Kapağı kaldır, tepsiyi aydınlık bir pencere önüne koy. Bundan sonra üstten değil, alttaki deliksiz tepsiye su koyarak sula; lif suyu alttan çeker ve yapraklar kuru kalır. Fazla suyu 15 dakika sonra dök. Filizler 1–2 günde yeşerir.",
        "4–7 gün",
        "Yapraklar yeşillenmiş, filizler dik duruyor ve tepside kötü koku yok.",
      ),
      a(
        "Dipten kesip hasat et",
        "İlk gerçek yaprak çifti (tohum yapraklarından sonraki) görünmeye başlayınca, genelde 7–12. günde, temiz bir makasla toprağın 1 cm üstünden kes. Tüketmeden önce soğuk suda yıka. Kesilen filizler yeniden büyümez; yeni tepsi ekmek gerekir.",
        "10 dk",
        "Kesilen yeşillikte toprak ve tohum kabuğu yok, filizler gevrek ve taze kokuyor.",
      ),
    ],
    sikHatalar: [
      "Köklerde beyaz tüyler var: Bu genelde kök tüyüdür, küf değil; spreyle ıslatınca kaybolur. Gri, yapışkan ve kötü kokuluysa küftür, o tepsiyi tüketme.",
      "Tohumlar tepsinin bir kısmında çimlenmedi: Yatak eşit nemlenmedi. Lifi ekimden önce tamamen ıslat.",
      "Filizler uzun, ince ve devriliyor: Işığa geç alındı ya da ışık az. Kapağı 3. günde kaldır, pencereye yakın koy.",
      "Küf çıktı: Üstten fazla sulandı veya hava almadı. Alttan sula, tepsiyi havalandırılmış yerde tut.",
    ],
  },

  // ───────────── Grup 3: El Sanatları (1/2) ─────────────
  "kesme-tahtasi": {
    adimlar: [
      a(
        "Tahtayı seç ve formu çiz",
        "Budaksız, çatlaksız ve düz bir tahta seç; lifler uzun kenar boyunca gitsin. Köşeleri yuvarlatmak için bir bardağı köşeye dayayıp çevresinden çiz. Sap istersen bir kısa kenarda 8–10 cm'lik bir çıkıntı bırak; asmak için ucuna Ø20 mm delik işaretle.",
        "15 dk",
        "Çizim simetrik, dört köşe aynı bardakla çizilmiş ve tahtada çatlak ya da gevşek budak yok.",
      ),
      a(
        "Kes",
        "Tahtayı işkenceyle masaya sabitle; kesilecek kısım masanın dışında kalsın. Dekupaj testereyle çizginin 1–2 mm dışından kes, testereyi zorlamadan kendi hızında ilerlet. Sap deliği varsa matkapla aç; alt tarafa hurda tahta koy ki çıkış ağzı patlamasın.",
        "30 dk",
        "Kesim çizgiyi hiçbir yerde geçmemiş, kenarlarda kopma ya da derin yanık izi yok.",
      ),
      a(
        "Kenarları yuvarlat",
        "80 kum zımparayla kesim payını çizgiye kadar al. Üst ve alt kenarları zımparayı 45° tutarak hafifçe pahla ya da yuvarlat; keskin kenar hem eli keser hem de kolay ezilir.",
        "20 dk",
        "Kenar çizgisi düzgün, eli kenarda gezdirince keskin köşe hissedilmiyor.",
      ),
      a(
        "Kademeli zımparala",
        "Tüm yüzeyleri sırasıyla 80 → 120 → 180 → 240 kumla, lif yönünde zımparala. Bir sonraki kuma geçmeden önce önceki kumun çizikleri tamamen kaybolmalı. Toz maskesi tak; her kumdan sonra tozu fırça ya da kuru bezle al.",
        "60 dk",
        "Yüzeyi yandan ışığa tutunca enine çizik görünmüyor.",
      ),
      a(
        "Lifleri kaldır",
        "Yüzeyi nemli bezle sil ve tamamen kurumasını bekle (yaklaşık 30 dk). Su, ezilmiş lifleri kaldırır; yüzey hafifçe pürüzlenir. 240 kumla tek bir hafif geçişle bu lifleri al. Böylece tahta ilk yıkamada tüylenmez.",
        "40 dk",
        "Kuruduktan sonra eli gezdirince yüzey yine pürüzsüz, kadife gibi.",
      ),
      a(
        "Gıdaya uygun yağla yağla",
        "Mineral yağı bolca dök, bezle tüm yüzeylere ve kenarlara yay; ağaç yağı içer. 20 dakika beklet, emilmeyen fazlayı kuru bezle sil. 3–4 kat tekrarla, son kattan sonra 24 saat kurusun. Yağlı bezleri açık havada sererek kurut, buruşturup çöpe atma.",
        "1 saat + 24 saat",
        "Yüzeye su damlatınca boncuk gibi duruyor, emilmiyor; tahta elde yağlı bırakmıyor.",
      ),
    ],
    sikHatalar: [
      "Yağdan sonra yüzey tüylendi: Lif kaldırma adımı atlandı. Nemli bez + 240 kum adımını yap, yeniden yağla.",
      "Zımpara çizikleri yağlayınca ortaya çıktı: Kum atlandı (ör. 80'den 240'a geçildi). Sırayla zımparala.",
      "Tahta yıkamadan sonra çatladı: Bulaşık makinesine girdi ya da suda bekletildi. Elde yıka, hemen kurula, ayda bir yağla.",
      "Zeytinyağı kullanıldı ve koku yaptı: Mutfak yağları ağaçta acır. Sadece gıdaya uygun mineral yağ kullan.",
    ],
  },

  "ahsap-kutu": {
    adimlar: [
      a(
        "Ölç ve kes",
        "Tahtaya 2 × 30 cm (uzun kenar) ve 2 × 16,4 cm (kısa kenar) işaretle; kısa kenarlar uzunların arasına girer, 1,8 cm kalınlıkla dış ölçü 30 × 20 cm olur. Çizgileri gönyeyle çek. Tahtayı işkenceyle sabitle, testere ağzını çizginin dış tarafına koyarak kes.",
        "40 dk",
        "Eş parçalar üst üste konunca boyları aynı ve uçlar gönyeyle bakınca tam dik.",
      ),
      a(
        "Kuru dene ve işaretle",
        "Parçaları tutkalsız olarak kutu şeklinde diz. Dış ölçünün 30 × 20 cm olduğunu kontrol et. Her köşeye eşleşen bir harf yaz (A-A, B-B); birleştirirken parçalar karışmasın.",
        "10 dk",
        "Kuru dizilmiş kutunun köşelerinde aralık yok, dış ölçü 30 × 20 cm.",
      ),
      a(
        "Vida yerlerine ön delik aç",
        "Uzun kenarların her iki ucunda, uçtan 9 mm içeriye (tahta kalınlığının ortasına), alttan ve üstten 3 cm'ye birer işaret koy. Ø2,5 mm uçla del, sonra havşa ucuyla vida başı gömülecek kadar genişlet. Ön delik vidanın ahşabı yarmasını önler.",
        "20 dk",
        "Her köşede iki delik var, delikler tahtanın ortasından ve havşalar vida başını alacak derinlikte.",
      ),
      a(
        "Tutkalla, sık ve vidala",
        "Kısa kenarların uçlarına ince bir tutkal şeridi sür. Parçaları işaretlere göre birleştir, işkenceyle hafifçe sık. Köşegenleri ölç: iki köşegen eşitse kutu tam gönyededir; değilse uzun köşegen yönünde hafifçe bastır. Sonra vidaları tak; taşan tutkalı hemen nemli bezle sil.",
        "30 dk",
        "İki köşegen arasındaki fark 1 mm'den az ve köşelerde tutkal izi kalmamış.",
      ),
      a(
        "Tabanı tak",
        "Kutuyu ters çevir, alt kenarlara tutkal sür. Kontrplak tabanı kenarlarla aynı hizaya getirip yerleştir. Her kenara 10–12 cm arayla 20 mm çivi çak. Taban kenardan taşıyorsa tutkal kuruduktan sonra zımparayla hizala. Tutkal 1 saat sıkılı kalsın.",
        "20 dk + 1 saat",
        "Taban kenarlarla aynı hizada, kutuyu kaldırınca taban esnemiyor ve köşelerde aralık yok.",
      ),
      a(
        "Zımparala ve bitir",
        "Köşeleri ve üst kenarları 120 kumla yuvarlat, sonra tüm yüzeyi 180 kumla geç. Tozu al. Yağ ya da su bazlı vernik sür, ambalajdaki süre kadar kurut; ikinci kattan önce 240 kumla hafifçe geç. Kutuda yiyecek saklayacaksan içini vernikleme, gıdaya uygun yağ kullan.",
        "40 dk + kuruma",
        "Yüzey pürüzsüz, vernik akıntısız ve elle dokununca yapışmıyor.",
      ),
    ],
    sikHatalar: [
      "Vida takarken tahta yarıldı: Ön delik açılmadı ya da uca çok yakın açıldı. Uçtan 9 mm içeriden, Ø2,5 mm uçla del.",
      "Kutu yamuk çıktı: Köşegenler ölçülmeden vidalandı. Tutkal kurumadan köşegen kontrolü yap.",
      "Vernik köşelerde tutmadı: Taşan tutkal silinmemiş. Tutkalı ıslakken nemli bezle al.",
      "Taban sallanıyor: Kenarlar aynı boyda kesilmemiş. Kesimden sonra eş parçaları üst üste koyup kontrol et.",
    ],
  },

  "soya-mum": {
    adimlar: [
      a(
        "Kavanozu hazırla",
        "Kavanozu sıcak suyla yıka ve tamamen kurula; içerideki nem ya da toz mumun cama yapışmasını bozar. Isıya dayanıklı, kalın tabanlı kavanoz kullan; ince camlar yanarken çatlayabilir. Mumu tartmak için kavanozu suyla doldurup ağırlığına bak; mum suyun yaklaşık %90'ı kadar gelir.",
        "10 dk",
        "Kavanoz kuru ve temiz; ne kadar mum eriteceğini biliyorsun.",
      ),
      a(
        "Fitili sabitle",
        "Fitilin metal tabanına yapıştırıcı ya da çift taraflı bant koy, kavanozun dibinin tam ortasına bastır. Üstte iki çubuk ya da mandal arasına sıkıştırarak fitili dik tut.",
        "5 dk",
        "Fitil tam ortada ve dik; kavanozu hafifçe sallayınca yerinden kaymıyor.",
      ),
      a(
        "Benmari ile erit",
        "Tencereye birkaç parmak su koy, ısıt; eritme potunu suyun içine oturt. Soya pullarını pota koy, kısık-orta ateşte karıştırarak erit. Termometreyle ölç; 85 °C'yi geçme. Mumu asla doğrudan ateşe koyma ve ocağın başından ayrılma.",
        "20 dk",
        "Mum tamamen şeffaf, içinde katı pul kalmamış ve termometre 85 °C'nin altında.",
      ),
      a(
        "Kokuyu ekle",
        "Ocağı kapat. Mum yaklaşık 80 °C'deyken esansı ekle: mum ağırlığının %6–8'i kadar (500 g muma 30–40 g). Esansın ambalajında daha düşük bir üst sınır yazıyorsa ona uy. 2 dakika yavaşça ama sürekli karıştır; koku mumla ancak böyle bağlanır.",
        "5 dk",
        "Karıştırma 2 dakika sürdü ve mumun yüzeyinde ayrışmış yağ damlası yok.",
      ),
      a(
        "55–60 °C'de dök",
        "Mumun 55–60 °C'ye düşmesini termometreyle bekle. Kavanoza yavaşça, kenardan akıtarak dök; üstte 1–1,5 cm boşluk bırak. Potta biraz mum ayır; yüzeyde çukur oluşursa doldurmak için.",
        "10 dk",
        "Dökerken kabarcık oluşmadı, mum seviyesi düz ve fitil hâlâ ortada.",
      ),
      a(
        "24 saat soğut",
        "Kavanozu cereyansız, oda sıcaklığında (20–24 °C) bir yerde 24 saat hiç kıpırdatmadan beklet. Buzdolabına koyma; hızlı soğuma çatlak ve camdan ayrılma yapar. Yüzeyde çukur oluşursa ayırdığın mumu ısıtıp ince bir kat dök.",
        "24 saat",
        "Yüzey düz ve mat; camla mum arasında belirgin boşluk yok.",
      ),
      a(
        "Fitili kes ve dinlendir",
        "Fitili mum yüzeyinden 5 mm kalacak şekilde kes. Kokunun mumla tam oturması için mumu en az 2 gün, mümkünse 1 hafta kapalı ve serin bir yerde beklet; bu sürede koku belirgin şekilde güçlenir.",
        "5 dk + 2–7 gün",
        "Fitil 5 mm; mumun kokusu soğukken bile hissediliyor.",
      ),
      a(
        "İlk yakış",
        "İlk yakışta mumu, yüzeyin tamamı kenarlara kadar eriyene kadar söndürme; bu genelde 2–3 saat sürer. Böylece mum her yakışta tünel yapmadan erir. Tek seferde 4 saatten fazla yakma, her yakıştan önce fitili 5 mm'ye kes.",
        "2–3 saat",
        "Erimiş havuz kavanozun kenarına ulaşmış, alev sakin ve dumansız.",
      ),
    ],
    sikHatalar: [
      "Mum ortadan tünel açarak yanıyor: İlk yakışta erken söndürüldü. Bir sonraki yakışta yüzey tamamen eriyene kadar yak.",
      "Koku zayıf: Esans çok sıcakta eklendi ya da dinlendirme atlandı. 80 °C'de ekle, en az 2 gün beklet.",
      "Alev çok büyük ve isliyor: Fitil uzun ya da kavanoza göre kalın. Fitili 5 mm'ye kes; sürerse bir ince fitil kullan.",
      "Yüzey pürüzlü ve çatlak: Çok sıcakken döküldü ya da hızlı soğudu. 55–60 °C'de dök, cereyansız yerde soğut.",
    ],
    guvenlikEk: [
      "Evde kedi veya köpek varsa esans seçerken dikkat et; çay ağacı, okaliptüs ve nane gibi bazı uçucu yağlar hayvanlar için zararlıdır. Mumu hayvanın uzanamayacağı yerde yak.",
    ],
  },

  "gliserin-sabun": {
    adimlar: [
      a(
        "Kalıbı hazırla",
        "Silikon kalıbı yıka ve tamamen kurula. Düz bir tepsiye koy; sabun döküldükten sonra kalıbı taşıman gerekirse tepsiyle taşırsın. Alkol spreyini, boyayı ve esansı hazır et; baz çabuk donar.",
        "5 dk",
        "Kalıp kuru ve düz duruyor, tüm malzemeler elinin altında.",
      ),
      a(
        "Kes ve erit",
        "Bazı yetişkin 2 cm'lik küplere kessin. Küpleri mikrodalgaya uygun bir kaba koy, 20–30 saniyelik aralıklarla ısıtıp her seferinde karıştır. Birkaç küçük parça kalınca ısıtmayı bırak, karıştırarak erit. Baz kaynarsa köpürür ve sabun lastik gibi olur.",
        "10 dk",
        "Baz tamamen sıvı ve şeffaf, köpük yok; kabın kenarı elle tutulamayacak kadar sıcak değil.",
      ),
      a(
        "Renk ve koku ekle",
        "Önce boyadan 1–2 damla ekle, karıştır, rengi gör; koyulaştırmak için damla damla ekle. Sonra bazın ağırlığının %1–2'si kadar esans ekle (500 g baza 5–10 g). Köpük oluşturmamak için çırpmadan, yavaşça karıştır.",
        "5 dk",
        "Renk eşit dağılmış, yüzeyde köpük ya da yağ damlası yok.",
      ),
      a(
        "Kalıba dök",
        "Bazı kalıba yavaşça, kalıbın kenarından akıtarak dök. Hemen yüzeye alkol sprey sık; kabarcıklar patlar. Alkolü ateşten ve ocaktan uzakta kullan.",
        "5 dk",
        "Yüzey düz ve kabarcıksız.",
      ),
      a(
        "Süsle ya da katman ekle",
        "Lavanta ya da kuru çiçek kullanacaksan, yüzey hafifçe kabuk bağlayınca (5–10 dk) üstüne serp ve alkol sık. Yeni bir kat dökeceksen önce yüzeye alkol sık, ikinci katı yaklaşık 50 °C'ye soğumuş bazla dök; çok sıcak dökersen alt kat erir ve renkler karışır.",
        "10 dk",
        "Süslemeler yüzeyde duruyor; katmanlar arasında net bir çizgi var ve ayrılmıyor.",
      ),
      a(
        "Donmasını bekle",
        "Kalıbı oda sıcaklığında 1–2 saat kıpırdatmadan beklet. Acelen varsa son 30 dakikayı buzdolabında geçirebilir; dondurucuya koyma, çatlar ve terler.",
        "1–2 saat",
        "Sabun tamamen sertleşmiş; parmakla bastırınca iz kalmıyor.",
      ),
      a(
        "Kalıptan çıkar ve sar",
        "Kalıbın kenarlarını sabundan ayır, alttan iterek çıkar. Gliserin havadaki nemi çeker ve sabunun yüzeyinde damlacıklar oluşur (terleme). Bunu önlemek için her sabunu hemen streç filmle sıkıca sar.",
        "10 dk",
        "Sabun kırılmadan çıktı, köşeleri net ve streç filmle hava almayacak şekilde sarılı.",
      ),
    ],
    sikHatalar: [
      "Sabun kauçuk gibi ve bulanık: Baz kaynatıldı. Kısa aralıklarla ısıt, birkaç parça kalınca dur.",
      "Yüzeyde damlacıklar oluştu: Gliserin nem çekti. Sabunu çıkarır çıkarmaz streç filmle sar.",
      "Katmanlar birbirinden ayrıldı: Araya alkol sıkılmadı ya da alt kat çok soğudu. Her kattan önce alkol sık, alt kat tamamen soğumadan dök.",
      "Lavanta kahverengiye döndü: Kuru bitkiler şeffaf bazda zamanla kararır. Yalnızca yüzeyde süs olarak kullan.",
    ],
  },

  "epoksi-kolye": {
    adimlar: [
      a(
        "Hazırlan",
        "Masaya naylon ser, nitril eldiven giy, pencereyi aç. Çiçeklerin tamamen kuru olduğunu kontrol et; preslenmiş ve kâğıt gibi kuru olmalı. UV reçine kullanacaksan lambayı, epoksi kullanacaksan iki bileşeni ve ölçü kabını hazırla.",
        "10 dk",
        "Eldiven takılı, ortam havalanıyor ve çiçekler parmakta kıtır kıtır kırılacak kadar kuru.",
      ),
      a(
        "İnce ilk katı dök ve kürle",
        "Kalıbın tabanına 1–2 mm reçine dök. UV reçineyi lambanın altında 2 dakika kürle. Epoksi kullanıyorsan iki bileşeni ambalajdaki oranda karıştırıp dök, jel kıvamına gelmesini bekle (genelde 1–2 saat). Bu kat çiçeğin ön yüzünü korur.",
        "5 dk (UV) / 1–2 saat (epoksi)",
        "İlk kat parmakla dokununca akmıyor (UV'de tamamen sert, epokside jel).",
      ),
      a(
        "Çiçeği yerleştir",
        "Çiçeği cımbızla, görünmesini istediğin yüzü aşağı bakacak şekilde ilk katın üstüne koy; kalıbın tabanı kolyenin ön yüzü olur. Üstüne bir damla reçine damlat, cımbızla hafifçe bastırarak altında hava kalmamasını sağla.",
        "5 dk",
        "Kalıbı ters çevirip alttan bakınca çiçek düzgün yerleşmiş ve altında hava kabarcığı yok.",
      ),
      a(
        "Kalıbı doldur, kabarcıkları al",
        "Kalıbı reçineyle doldur. UV reçinede tek seferde en fazla 3 mm dök ve her katı ayrı kürle; kalın dökülen UV reçinenin içi kürlenmez. Yüzeye çıkan kabarcıkları kürdanla patlat ya da dışarı çek.",
        "10 dk",
        "Reçine kalıbın ağzıyla aynı seviyede, yüzeyde kabarcık yok.",
      ),
      a(
        "Kürle ve kalıptan çıkar",
        "UV reçineyi her yönden toplam 3–5 dakika kürle; çıkardıktan sonra arka yüzü de 1–2 dakika lambaya tut. Epoksiyi tozdan korunmuş halde 24 saat beklet. Kalıbı esneterek parçayı çıkar.",
        "5 dk (UV) / 24 saat (epoksi)",
        "Parça her yüzünde sert, tırnakla bastırınca iz kalmıyor ve yapışkanlık yok.",
      ),
      a(
        "Kenarları düzelt",
        "Kenardaki çapakları ince zımparayla (400 kum, ıslak) al. Zımparalanan yer matlaşırsa üstüne çok ince bir kat reçine sürüp tekrar kürle; parlaklık geri gelir.",
        "15 dk",
        "Kenarda keskin çapak yok, yüzey her yerde parlak.",
      ),
      a(
        "Delik aç ve halkayı tak",
        "Parçayı bir tahtanın üstünde mandal ya da küçük işkenceyle tut, koruyucu gözlük tak. Üst kenara, kenardan 2 mm içeride, 1–1,5 mm uçla yavaşça delik aç. Halkayı pense ile yanlara doğru açıp delikten geçir, kapat ve zinciri tak.",
        "10 dk",
        "Delik kırılma yapmadan açılmış; halka kapalı ve zincir çekilince çıkmıyor.",
      ),
    ],
    sikHatalar: [
      "Reçinenin içi yapış yapış kaldı: UV reçine tek seferde kalın döküldü. 3 mm'den kalın katları ayrı ayrı kürle.",
      "Çiçek kararıp kahverengileşti: Çiçek nemliydi. Haftalarca preslenmiş, tamamen kuru çiçek kullan.",
      "Çiçeğin altında hava kabarcığı var: İlk kat atlandı ya da çiçek bastırılmadı. Önce ince kat dök, çiçeği damla reçineyle bastır.",
      "Delik açarken parça çatladı: Kenara çok yakın ya da hızlı delindi. Kenardan 2 mm içeride, yavaş del.",
    ],
  },

  "epoksi-altlik": {
    adimlar: [
      a(
        "Ortamı hazırla",
        "Odayı 20–25 °C'ye getir; soğukta reçine bulanıklaşır ve geç kurur. Düz bir masaya naylon ser, kalıbı su terazisiyle kontrol et. Nitril eldiven ve maske tak, pencereyi aç. Kalıbın içindeki tozu bantla al.",
        "15 dk",
        "Kalıp tam düz, oda 20 °C'nin üstünde ve havalandırma açık.",
      ),
      a(
        "Ölç ve karıştır",
        "Reçine ve sertleştiriciyi ambalajda yazan oranda (çoğu sette hacimce 1:1) ayrı ölçü kaplarında ölç, sonra tek kapta birleştir. 3 dakika boyunca yavaşça karıştır; kabın kenarlarını ve dibini çubukla sıyır. Hızlı çırparsan kabarcık dolar, karıştırılmayan kenar ise hiç kurumaz.",
        "5 dk",
        "Karışım tamamen berrak; içinde dalgalı çizgiler ya da bulanık bölge kalmamış.",
      ),
      a(
        "Renklere ayır",
        "Karışımı üç kaba böl: en çoğu koyu mavi, ortası turkuaz, en azı beyaz olsun (yaklaşık 3:2:1). Pigmenti çubuğun ucuyla az az ekle; çok pigment reçinenin kurumasını bozar. Beyazı yoğun yap ki dalga görünsün.",
        "5 dk",
        "Üç renk de homojen; beyaz örtücü, mavi tonlar yarı saydam.",
      ),
      a(
        "Katmanlarla dök",
        "Kalıbın bir yarısına koyu maviyi dök, yanına turkuazı dök; iki renk ortada hafifçe birbirine karışsın. Beyazı turkuazın dış kenarına, kumsal çizgisi gibi ince bir şerit halinde dök. Kalıbı fazla doldurma; kenardan 1–2 mm aşağıda kal.",
        "10 dk",
        "Renkler yan yana ve kalıp taşmamış; beyaz ince bir şerit halinde duruyor.",
      ),
      a(
        "Dalgayı oluştur",
        "Isı tabancasını en düşük ayarda, yüzeyden 15–20 cm uzakta tutarak beyazı turkuazın üstüne doğru üfle. Beyaz incelip dantel gibi hücreler oluşturur. Tabancayı tek noktada tutma; kalıp ve reçine aşırı ısınır. Alevli şalümo kullanma.",
        "10 dk",
        "Beyazın içinde dantel gibi hücreler oluşmuş ve yüzeyde kabarcık yok.",
      ),
      a(
        "Kurut ve kalıptan çıkar",
        "Kalıbın üstünü ters çevrilmiş bir kutuyla tozdan koru. 24–48 saat düz zeminde, dokunmadan beklet. Tamamen sertleşince kalıbı esneterek altlıkları çıkar.",
        "48 saat",
        "Altlık her yerde sert, tırnakla bastırınca iz kalmıyor ve yapışkanlık yok.",
      ),
      a(
        "Kenarı düzelt ve tam kürü bekle",
        "Kenar çapaklarını ıslak 400 kum zımparayla al. Altına keçe ped yapıştır. Epoksi tam dayanımına yaklaşık 7 günde ulaşır; bu süreden önce sıcak bardak koyma. Kürlenmiş epoksi de çok sıcak demlikte iz alabilir, demlik altlığı olarak kullanma.",
        "15 dk + 7 gün",
        "Kenar pürüzsüz, altta keçe var; altlık masa üstünde sallanmıyor.",
      ),
    ],
    sikHatalar: [
      "Bir köşesi hiç kurumadı: Kabın kenarı sıyırılmadan karıştırıldı. Kenarları ve dibi sıyırarak 3 dakika karıştır.",
      "Yüzey kabarcık dolu: Hızlı çırpıldı ya da oda soğuktu. Yavaş karıştır, ortamı 20–25 °C'ye getir.",
      "Dalga oluşmadı, beyaz yayıldı: Beyaz çok sulu ya da tabanca çok yakın. Beyazı yoğun yap, tabancayı uzaktan tut.",
      "Sıcak bardak iz bıraktı: Tam kür beklenmedi ya da kap çok sıcaktı. 7 gün bekle, demlik için kullanma.",
    ],
  },

  "makrome-aski": {
    adimlar: [
      a(
        "İpleri kes",
        "Mezurayla 2,5 m ölç ve 8 parça kes. Ölçüyü bir kez kesip diğerlerini bu ipe göre kesersen hepsi eşit olur. İp uçlarına bant sararsan çalışırken açılmaz.",
        "10 dk",
        "8 ipin hepsi aynı boyda; uçlar açılmıyor.",
      ),
      a(
        "Halkaya tak ve topla",
        "8 ipi halkadan geçir ve ortadan katla; 16 uç aşağı sarksın. Ayrı bir 1 m ip parçasıyla halkanın hemen altına sarma düğüm at: ipin bir ucunu aşağı doğru katla, uzun ucu demetin etrafına sıkıca 8–10 tur sar, ucu alttaki halkadan geçir ve üst ucu çekerek halkayı sarımın içine gizle.",
        "15 dk",
        "Sarma düğüm sıkı ve düzgün; halkayı tutup sallayınca ipler kaymıyor.",
      ),
      a(
        "Gruplara ayır, kare düğüm at",
        "16 ucu 4'lü 4 gruba ayır. Her grupta ortadaki iki ip kılavuz kalır, dıştaki iki iple kare düğüm atılır: sol ipi kılavuzların üstünden geçir, sağ ipi onun üstünden ve kılavuzların altından sol halkaya geçir, sık; sonra aynısını ters yönden yap. Her gruba 5 kare düğüm at.",
        "25 dk",
        "Dört grupta da 5'er düzgün kare düğüm var ve düğüm zincirleri aynı uzunlukta.",
      ),
      a(
        "Çapraz bağla",
        "Son düğümden 10 cm aşağıda, yan yana duran iki grubun komşu ikişer ipini al ve tek bir kare düğüm at. Bunu dört grup arasında çepeçevre yap; son düğüm ilk ve dördüncü grubu birleştirir.",
        "15 dk",
        "Dört çapraz düğüm aynı yükseklikte ve ipler bir kafes oluşturuyor.",
      ),
      a(
        "Sepeti kapat",
        "Çapraz düğümlerden 8 cm aşağıda, yine komşu ipleri birleştirerek bir sıra daha kare düğüm at. Bu iki sıra saksının oturacağı sepeti oluşturur. Saksıyı içine koyup dene; dar ya da bol gelirse düğüm aralıklarını ayarla.",
        "15 dk",
        "Saksı sepete oturduğunda düğümler saksının yan yüzünü sarıyor, saksı kaymıyor.",
      ),
      a(
        "Altta topla",
        "İkinci sıradan 5–6 cm aşağıda tüm ipleri bir araya getir ve 2. adımdaki gibi sarma düğüm at. Saksıyı içine koy ve askıyı halkadan kaldırarak dengeyi kontrol et.",
        "10 dk",
        "Saksı dik duruyor, askı bir yana yatmıyor.",
      ),
      a(
        "Uçları eşitle ve as",
        "Sarma düğümün altındaki uçları eşit boyda kes, istersen tarakla açarak püskül yap. Tavana saksı ve suyun ağırlığını taşıyacak dübel ve kanca tak; askıyı kancaya as.",
        "15 dk",
        "Püskül uçları eşit; dolu saksı asılıyken kanca oynamıyor.",
      ),
    ],
    sikHatalar: [
      "Kare düğümler spiral gibi dönüyor: Hep aynı taraftan başlandı. Her düğümde sol ve sağ başlangıcı sırayla değiştir.",
      "Saksı yana yatıyor: Gruplar farklı uzunlukta. Düğümleri saymadan değil, mezurayla aralık ölçerek at.",
      "Saksı sepetten kayıp düşüyor: Çapraz sıralar arası çok açık. Aralığı saksıya göre daralt.",
      "Kanca tavandan çıktı: Dübel kullanılmadı. Saksı + su ağırlığına uygun dübel tak.",
    ],
  },

  "makrome-duvar": {
    adimlar: [
      a(
        "Çubuğu as ve ipleri kes",
        "Ahşap çubuğu iki ucundan bir iple bağlayıp kapı koluna ya da askılığa as; göz hizasında çalışmak işi kolaylaştırır. 16 parça 2,5 m ip kes.",
        "15 dk",
        "Çubuk yere paralel asılı ve 16 ip aynı boyda.",
      ),
      a(
        "İpleri ters baş düğümüyle tak",
        "Her ipi ortadan katla, katlı kısmı çubuğun önünden arkasına geçir ve iki ucu katlı kısmın oluşturduğu halkanın içinden çekerek sık. 16 ipi eşit aralıkla diz; 32 uç sarkar.",
        "15 dk",
        "16 düğüm çubukta eşit aralıklı ve hepsi aynı yöne bakıyor.",
      ),
      a(
        "İlk kare düğüm sırası",
        "32 ucu 4'lü 8 gruba ayır. Her gruba çubuktan 3 cm aşağıda bir kare düğüm at. Düğümleri aynı yükseklikte tutmak için çubuğa paralel bir cetvel ya da ip gerebilirsin.",
        "20 dk",
        "8 düğüm aynı hizada, aralarında eşit boşluk var.",
      ),
      a(
        "Kaydırmalı ikinci sıra",
        "İlk ve son ikişer ipi bırak. Kalanları yeniden 4'lü gruplara ayır: her grup, üstteki iki komşu düğümün yarısından ikişer ip alır. 2 cm aşağıda bu gruplara kare düğüm at. Bu kaydırma ağ desenini oluşturur.",
        "20 dk",
        "İkinci sıradaki düğümler, birinci sıradaki düğümlerin tam arasına denk geliyor.",
      ),
      a(
        "Ters üçgen deseni",
        "Kaydırmalı sıraları sürdür ama her yeni sırada iki kenardan birer grup eksilt. Sıralar daraldıkça ortada tek bir düğüme inen bir ters üçgen oluşur.",
        "40 dk",
        "Üçgenin iki kenarı simetrik ve en altta tek bir düğüm var.",
      ),
      a(
        "Çapraz şerit (çift yarım düğüm)",
        "Üçgenin altında en soldaki ipi kılavuz olarak al ve sağa doğru aşağı eğimli tut. Yanındaki her ipi kılavuzun etrafına iki kez sararak (çift yarım düğüm) sık. Sonra sağdan sola aynısını yaparak ortada buluşan bir V çizgisi oluştur.",
        "40 dk",
        "Şerit düz bir çizgi halinde, düğümler sıkı ve kılavuz ip görünmüyor.",
      ),
      a(
        "Saçağı kes ve tara",
        "Çalışmayı düz bir zemine yatır. Uçları ortası en uzun olacak şekilde V biçiminde kes. Her ipin ucunu açıp tarakla, iplikler ayrılana kadar tara. Kabaran saçağı makasla son kez düzelt.",
        "25 dk",
        "Saçak simetrik V şeklinde ve uçlar yumuşak püskül gibi açılmış.",
      ),
    ],
    sikHatalar: [
      "Desen bir yana kayıyor: Düğümler farklı sıkılıkta. Her düğümü aynı kuvvetle sık.",
      "Üçgen asimetrik: Sıralarda yalnızca bir kenardan eksiltildi. Her sırada iki kenardan birer grup bırak.",
      "Çapraz şerit dalgalı: Kılavuz ip gergin tutulmadı. Kılavuzu tek elle eğimli ve gergin tut.",
      "İp yetmedi: Başta kısa kesildi. Kısa kesmektense uzun kes; fazlası saçak olur.",
    ],
  },

  // ───────────── Grup 3: El Sanatları (2/2) ─────────────
  "kil-kupe": {
    adimlar: [
      a(
        "Masayı hazırla ve kili yoğur",
        "Polimer kil toz ve tüyü hemen tutar: masayı ve ellerini yıka, fırın kağıdı ser. Kili küçük parçalar halinde avucunda ısınana ve kolayca bükülene kadar yoğur. Açık renkle başla; koyu renkten sonra ellerini ıslak mendille sil.",
        "10 dk",
        "Kil ince rulo yapılıp katlanınca çatlamıyor; üstünde tüy ya da toz yok.",
      ),
      a(
        "Mermer deseni yap",
        "Seçtiğin 2–3 rengi kalem kalınlığında rulolar haline getir. Ruloları yan yana koyup birlikte bük, ikiye katla ve tekrar bük. 3–4 tekrar sonra durdur; fazla yoğurursan renkler karışıp tek renk olur.",
        "10 dk",
        "Renkler belirgin damarlar halinde, birbirine karışıp çamurlaşmamış.",
      ),
      a(
        "3 mm aç ve kes",
        "Kilin iki yanına 3 mm kalınlığında iki çubuk (ör. üst üste konmuş dondurma çubukları) koy, merdaneyi çubukların üstünde gezdirerek aç; kalınlık her yerde eşit olur. Kalıbı bastırıp düz kaldır, şekilleri fırın kağıdının üstünde bırak.",
        "15 dk",
        "Parçalar aynı kalınlıkta ve kenarları net; çifti birbirinin aynısı.",
      ),
      a(
        "Kenarları ve yüzeyi düzelt",
        "Kesim kenarlarındaki çapakları parmağınla yumuşakça yuvarlat. Parmak izlerini alkole batırılmış pamukla hafifçe sil.",
        "10 dk",
        "Yüzeyde parmak izi yok, kenarlarda keskin çapak kalmamış.",
      ),
      a(
        "Halka deliğini aç",
        "Kalın bir iğne ya da kürdanla kenardan 3 mm içeride delik aç; çok kenara açarsan pişince kırılır. Deliği iki yönden açarsan kenarı kabarmaz.",
        "5 dk",
        "Delik kenardan 3 mm içeride, iki yüzde de düzgün ve halka rahatça geçecek genişlikte.",
      ),
      a(
        "Fırında pişir",
        "Fırını ambalajdaki sıcaklığa önceden ısıt (genelde 110–130 °C); ev fırınları sapabildiği için mümkünse fırın termometresiyle kontrol et. Parçaları fırın kağıdında, seramik karo ya da tepsi üstünde ambalajdaki süre kadar (genelde 15–30 dk) pişir. Ortamı havalandır; kil yanarsa hemen fırını kapat ve pencereyi aç.",
        "30 dk",
        "Parçalar renk değiştirmemiş ya da kararmamış; soğuduktan sonra hafifçe bükülüyor ama kırılmıyor.",
      ),
      a(
        "Soğut ve monte et",
        "Parçaları fırın kağıdında tamamen soğut. Halkayı penseyle yana doğru aç (dışa açarsan şekli bozulur), küpe deliğinden ve kancanın alt halkasından geçir, aynı şekilde kapat.",
        "15 dk",
        "Halkalar kapalı ve aralıksız; küpeler kancadan sallandığında düz duruyor.",
      ),
    ],
    sikHatalar: [
      "Pişen küpe kırılıyor: Az pişti ya da fırın düşük ısıtıyor. Ambalaj süresine uy, fırın termometresiyle kontrol et.",
      "Kil kararıp yandı: Fırın ambalajdaki sıcaklığı aştı. Ev fırınları sapar; termometre kullan.",
      "Renkler çamur gibi karıştı: Mermer deseni fazla yoğruldu. 3–4 bükme yeterli.",
      "Yüzey toz ve tüy dolu: Masa ve eller temiz değildi. Fırın kağıdı üstünde, temiz ellerle çalış.",
    ],
  },

  "taki-tabagi": {
    adimlar: [
      a(
        "Kili 5 mm aç",
        "Masaya fırın kağıdı ya da streç film ser. Kili avucunda biraz yoğur, iki yanına 5 mm kalınlığında çubuk koyarak merdane ya da şişeyle yuvarlak aç. Açtığın kili kase çapından 2–3 cm büyük bir daire olarak kes.",
        "10 dk",
        "Kil her yerde 5 mm, yüzeyinde çatlak yok.",
      ),
      a(
        "Şekil ver",
        "Kaseyi streç filmle sar; kil yapışmasın. Kili kasenin içine bastırarak ya da ters çevrilmiş kasenin üstüne yerleştirerek çanak şekli ver. Kenarları ıslak parmakla düzelt, fazla kili kes.",
        "15 dk",
        "Tabak kaseye eşit oturmuş, kenar kalınlığı her yerde aynı.",
      ),
      a(
        "Kurumaya bırak",
        "Tabağı kasenin üstünde, güneş ve kalorifer olmayan bir yerde kurut. 12 saat sonra kaseden ayır, ters çevir ki alt yüz de kurusun; toplam 24–48 saat bekle. Çatlak oluşursa biraz kili suyla macun kıvamına getirip doldur.",
        "24–48 saat",
        "Tabak her yerde açık renkli ve sert; dokununca serin gelmiyor (serinse içi hâlâ nemli).",
      ),
      a(
        "Zımparala",
        "Kenarları ve pürüzlü yerleri 240 kum zımparayla hafifçe düzelt. Tozu kuru bir fırçayla al; ıslak bezle silme, kil yumuşar.",
        "10 dk",
        "Kenarlar pürüzsüz, yüzeyde toz kalmamış.",
      ),
      a(
        "Boya ve yaldız sür",
        "Akrilik boyayla zemini ince 2 kat boya, katlar arasında 30 dakika beklet. Desenini çiz, en son kenarı yaldız boyayla boya. Her renk tamamen kuruduktan sonra diğerine geç.",
        "30 dk + kuruma",
        "Boya eşit, fırça izi az ve renkler birbirine akmamış.",
      ),
      a(
        "Vernikle",
        "Boya tamamen kuruyunca su bazlı verniği ince bir kat sür, 2 saat kurut, ikinci katı at. Vernik tabağı nem ve kire karşı korur ama suya dayanıklı yapmaz.",
        "15 dk + 4 saat",
        "Yüzey eşit parlak ve elle dokununca yapışmıyor.",
      ),
    ],
    sikHatalar: [
      "Kururken çatladı: Çok hızlı kurudu (güneş, kalorifer) ya da kalınlık eşit değil. Serin yerde, eşit kalınlıkta kurut.",
      "Kaseden çıkmıyor: Kase streç filmle sarılmadı. Önce kaseyi sar.",
      "Tabak yumuşadı: Islak bezle silindi ya da su değdi. Hava ile kuruyan kil suya dayanıksızdır; içine su koyma.",
      "Boya kabarcık yaptı: Kil tam kurumadan boyandı. En az 24 saat bekle.",
    ],
  },

  "deri-anahtarlik": {
    adimlar: [
      a(
        "Uçları yuvarlat",
        "Deri şeridi kesim altlığına koy. Bir bozuk parayı şeridin ucuna dayayıp kenarından kalemle çiz. Maket bıçağını çizgi boyunca kısa ve dikkatli hareketlerle sürerek iki ucu da yuvarlat.",
        "10 dk",
        "İki uç aynı yuvarlaklıkta, kesik kenarda tırtık yok.",
      ),
      a(
        "Harflerin yerini işaretle",
        "Damgalayacağın yazıyı şeridin hangi yüzüne ve nereye basacağına karar ver: katlanınca öne gelen yarıya. Harflerin ortasını kurşun kalemle çok hafif işaretle; aralıkları önceden görürsün.",
        "5 dk",
        "Yazı katlanınca görünecek tarafta ve ortalanmış.",
      ),
      a(
        "Nemlendir ve damgala",
        "Deriyi nemli süngerle sil; renk koyulaşıp yeniden açılmaya başlayınca damgalamaya hazırdır. Deriyi sert bir zemine (mermer, tezgâh) koy. Damgayı dik tut, tokmakla tek ve kararlı bir vuruş yap; ikinci vuruş gölge yapar.",
        "15 dk",
        "Harfler net ve eşit derinlikte; çift iz ya da kayma yok.",
      ),
      a(
        "Kurumasını bekle",
        "Deriyi 30 dakika oda sıcaklığında kurut. Saç kurutma makinesi ya da güneş kullanma; deri sertleşir ve çatlar.",
        "30 dk",
        "Deri eski rengine dönmüş ve dokununca nemli değil.",
      ),
      a(
        "Delik aç",
        "Şeridi anahtarlık halkasından geçir ve uçları üst üste gelecek şekilde katla. İki katı birlikte mandalla tut, kesim altlığı üstünde delik zımbasıyla, uçtan 1 cm içeride del.",
        "5 dk",
        "İki kattaki delikler tam üst üste.",
      ),
      a(
        "Perçinle",
        "Perçinin uzun (erkek) parçasını alttan, şapka (dişi) parçasını üstten deliğe yerleştir. Çakma aparatını şapkanın üstüne koy, sert zeminde tokmakla 2–3 kez vur.",
        "5 dk",
        "Perçin sıkı, döndürünce oynamıyor ve şapka yamulmamış.",
      ),
    ],
    sikHatalar: [
      "Harfler silik çıktı: Deri kuru ya da zemin yumuşaktı. Nemlendir ve mermer gibi sert zeminde vur.",
      "Harfler çift görünüyor: İki kez vuruldu ve damga kaydı. Tek, kararlı vuruş yap.",
      "Perçin dönüyor: Perçin boyu deriye göre uzun. İki kat deri kalınlığına uygun perçin seç.",
      "Damga tutmadı: Krom tabaklanmış deri kullanıldı. Bitkisel tabaklanmış deri kullan.",
    ],
  },

  "deri-kartlik": {
    adimlar: [
      a(
        "Kalıbı kes",
        "Önce kartondan şablon hazırla: gövde 10 × 7 cm, cepler 10 × 5,5 cm. Şablonu deriye koyup kalemle çiz. Çelik cetveli parmaklarının önünde tutarak keskin bıçakla, bastırmadan 2–3 hafif geçişte kes.",
        "30 dk",
        "Kenarlar düz ve dik, köşeler 90°; parçalar şablonla birebir aynı.",
      ),
      a(
        "Parçaları hizala",
        "Cepleri gövdenin üstüne alt kenarlar ve yanlar tam üst üste gelecek şekilde koy. Mandal ya da kıskaçla tut; dikiş boyunca kaymamalılar.",
        "10 dk",
        "Kenarlar tam üst üste, parmakla dokununca basamak hissedilmiyor.",
      ),
      a(
        "Dikiş çizgisini çiz",
        "Kenardan 3 mm içeride, yanlar ve alt boyunca bir çizgi çiz (pergel ya da cetvel ile). Üst kenar açık kalacak; kartlar oradan girer.",
        "10 dk",
        "Çizgi her yerde kenardan 3 mm içeride ve üst kenar boş.",
      ),
      a(
        "Dikiş deliklerini aç",
        "Parçaları üst üste tutarak kesim altlığına koy. Zımbanın dişlerini çizgiye oturt, tokmakla dik vur. Bir sonraki vuruşta zımbanın ilk dişini son açılan deliğe koy; aralıklar böylece eşit kalır. Köşede zımbayı köşegene göre çevir.",
        "30 dk",
        "Delikler eşit aralıklı, çizginin üstünde ve tüm katlardan geçmiş.",
      ),
      a(
        "Saraç dikişiyle dik",
        "İpi dikiş boyunun 4 katı uzunlukta kes, iki ucuna birer iğne tak. İlk delikten geçirip iki ucu eşitle. Her delikte önce bir iğneyi, sonra diğerini aynı delikten karşı yönden geçir ve ikisini eşit kuvvetle çek. İki iğnenin geçiş sırasını hiç değiştirme.",
        "60 dk",
        "Dikişler iki yüzde de eşit eğimli ve aynı gerginlikte.",
      ),
      a(
        "Dikişi bitir",
        "Son delikten sonra 2 delik geri dikerek ipi kilitle. İpi deriye yakın kes; açılmasın diye ucuna bir damla yapıştırıcı sür. Dikişleri tokmağın düz yüzüyle hafifçe dövmek onları deriye oturtur.",
        "10 dk",
        "Uçlar görünmüyor ve çekince dikiş sökülmüyor.",
      ),
      a(
        "Kenarları bitir",
        "Kenarları zımparayla hizala, kenar yuvarlatıcıyla köşeleri al. Kenar cilasını ince sür, kuruyunca kanvas bezle hızlıca ovarak parlat; ısınan cila kenarı mühürler.",
        "30 dk",
        "Katlar kenarda tek parça gibi görünüyor, kenar parlak ve tüylenmiyor.",
      ),
    ],
    sikHatalar: [
      "Dikişler eğri ve düzensiz: İğne sırası arada değişti. Her delikte aynı iğneyle başla.",
      "Delikler kaydı: Parçalar sabitlenmeden delindi. Mandalla tut, tüm katları birlikte del.",
      "Kartlar sığmıyor: Dikiş çok içeriden geçti. Dikiş çizgisini kenardan 3 mm'de tut.",
      "Bıçak kaydı ve deri yırtıldı: Tek seferde bastırılarak kesildi. Hafif ve birkaç geçişle kes.",
    ],
  },

  "dogal-tas-bileklik": {
    adimlar: [
      a(
        "Bileğini ölç",
        "Mezurayı bileğin kemiğinin hemen üstünden, sıkmadan sar. Ölçüye 1–1,5 cm ekle; bu bilekliğin rahat oturacağı uzunluktur (çoğu yetişkin için 17–18 cm). Mezura yoksa bir ip sarıp cetvelle ölç.",
        "5 dk",
        "Ölçü not edildi ve 1–1,5 cm pay eklendi.",
      ),
      a(
        "İpi gerdir",
        "Elastik ipten bilek ölçüsü + 15 cm kes. İpi iki elinle birkaç kez uzunlamasına gerdir; ilk gerilmeyi şimdi yaparsan bileklik takıldıktan sonra gevşemez.",
        "2 dk",
        "Bıraktığında ip eski boyuna dönüyor ve gerdirirken kopmadı.",
      ),
      a(
        "Deseni masada dene",
        "Boncukları bir havlu üstünde ya da bir oluğa (ör. katlanmış kâğıt) düz dizip deseni gör. Toplam uzunluğun bilek ölçüsüne eşit olduğunu cetvelle kontrol et; gerekiyorsa boncuk ekle ya da çıkar.",
        "10 dk",
        "Dizilen boncukların uzunluğu ölçüye eşit ve desen beğendiğin gibi.",
      ),
      a(
        "Boncukları diz",
        "İpin bir ucunu mandalla tut ki boncuklar kaçmasın. Boncukları masadaki sırayla ipe geçir.",
        "10 dk",
        "Tüm boncuklar ipte, desen sırası bozulmamış.",
      ),
      a(
        "Cerrah düğümüyle bağla",
        "İki ucu çaprazla ve bir kez değil iki kez birbirinin içinden geçirerek düğüm at; boncuklar arasında boşluk kalmayacak kadar gerdir ve sık. Üstüne bir düğüm daha at. Düğüme sadece bir damla jel yapıştırıcı sür; fazlası ipi sertleştirip kırar.",
        "5 dk",
        "Düğüm sıkı, boncuklar arasında ip görünmüyor ve yapıştırıcı sadece düğümde.",
      ),
      a(
        "Uçları kes ve düğümü gizle",
        "Yapıştırıcı kuruyunca (ambalajdaki süre, genelde 10–15 dk) uçları düğümden 2–3 mm bırakarak kes. Düğümü, deliği biraz geniş bir boncuğun ya da ara boncuğun içine kaydır.",
        "15 dk",
        "Düğüm görünmüyor ve bileklik takılıp çıkarılınca açılmıyor.",
      ),
    ],
    sikHatalar: [
      "Bileklik birkaç günde gevşedi: İp önceden gerdirilmedi. Dizmeden önce gerdir.",
      "Düğüm açıldı: Tek düğüm atıldı ya da yapıştırıcı kullanılmadı. Cerrah düğümü + bir damla yapıştırıcı.",
      "İp düğümden koptu: Fazla yapıştırıcı ipi sertleştirdi. Sadece bir damla sür.",
      "Bileklik dar geldi: Ölçüye pay eklenmedi. 1–1,5 cm ekle.",
    ],
  },

  "boncuk-kupe": {
    adimlar: [
      a(
        "Boncukları diz",
        "İğne çiviye sırasıyla bir ara boncuk, damla boncuk ve iki ara boncuk geçir. Çivinin başı en alttaki boncuğu tutar; boncuk çivi başından kayıp çıkıyorsa en alta bir küçük ara boncuk daha koy.",
        "5 dk",
        "Boncuklar çivinin başına oturmuş ve aşağıdan kayıp çıkmıyor.",
      ),
      a(
        "Fazla teli kes",
        "En üstteki boncuğun üstünde 1 cm tel bırak, gerisini keskiyle kes. Keserken telin uçan ucunu parmağınla tut ve yüzünü uzak tut; küçük tel parçası göze sıçrayabilir.",
        "2 dk",
        "Boncukların üstünde tam 1 cm tel kalmış.",
      ),
      a(
        "Teli 90° bük",
        "Teli en üstteki boncuğun hemen üstünden parmağınla ya da düz penseyle yana doğru 90° bük.",
        "2 dk",
        "Bükülen tel, boncuk sırasına dik ve büküm boncuğun tam üstünde.",
      ),
      a(
        "Halka yap",
        "Yuvarlak penseyle telin ucunu tut, bileğini çevirerek teli pensenin ağzı etrafına sar ve bükümün olduğu yere kadar kapat. Halka ortalanmış ve kapalı olmalı.",
        "5 dk",
        "Halka tam yuvarlak, kapalı ve boncuk sırasının tam üstünde ortalanmış.",
      ),
      a(
        "Kancaya tak",
        "Halkayı penseyle yana doğru biraz aç (dışa doğru açarsan yuvarlaklığı bozulur), kancanın alt halkasına geçir ve aynı şekilde kapat.",
        "3 dk",
        "Halka aralıksız kapanmış ve küpe kancadan düz sarkıyor.",
      ),
      a(
        "Eşini yap ve karşılaştır",
        "İkinci küpeyi aynı sırayla yap. İkisini yan yana tutup boylarını karşılaştır; farklıysa halkayı açıp teli düzelt.",
        "10 dk",
        "İki küpe aynı boyda ve aynı açıyla sallanıyor.",
      ),
    ],
    sikHatalar: [
      "Halka açılıp boncuk düştü: Halka tam kapatılmadı. Bükümün olduğu yere kadar sar.",
      "Halka yamuk ve oval: Dışa doğru açıldı. Halkaları her zaman yana doğru aç-kapat.",
      "Küpeler farklı boyda: Tel farklı uzunlukta kesildi. Her ikisinde de 1 cm bırak.",
      "Kulakta kızarıklık yaptı: Kanca nikelli. Nikelsiz ya da cerrahi çelik kanca kullan.",
    ],
  },

  "tas-boyama": {
    adimlar: [
      a(
        "Taşı temizle",
        "Taşları ılık sabunlu suyla fırçalayarak yıka, tamamen kurut (en az 1 saat ya da bir gece). Nemli taşa boya tutmaz ve sonradan kabarır.",
        "10 dk + kuruma",
        "Taş kuru, üstünde toz ve kum yok.",
      ),
      a(
        "Zemin rengini sür",
        "Taşın üst yüzünü koyu bir renkle (lacivert, siyah) fırçayla boya. 30 dakika kurut, ikinci katı at; koyu zemin noktaların parlak görünmesini sağlar.",
        "15 dk + 1 saat",
        "Zemin örtücü, alttan taşın rengi görünmüyor ve boya yapışkan değil.",
      ),
      a(
        "Merkezi belirle ve büyük noktayı koy",
        "Taşın ortasını gözle ya da kurşun kalemle hafifçe işaretle. En büyük noktalama ucunu boyaya batırıp merkeze dik olarak bastır ve kaldır.",
        "5 dk",
        "Merkez noktası yuvarlak ve taşın ortasında.",
      ),
      a(
        "Halkaları diz",
        "Merkezin etrafına bir halka halinde eşit aralıklı noktalar koy. Her noktadan önce ucu boyaya yeniden batır; böylece noktalar eşit büyüklükte olur. Dışa doğru her halkada bir boy küçük ya da büyük uç kullanarak 4–6 halka yap.",
        "40 dk",
        "Her halkadaki noktalar aynı boyda ve merkezden eşit uzaklıkta.",
      ),
      a(
        "Noktaların üstüne detay ekle",
        "Büyük noktalar kuruyunca (15–20 dk) üstlerine farklı renkte daha küçük noktalar koy. Islakken üst üste koyarsan renkler karışır.",
        "20 dk",
        "Üstteki noktalar alttakilerin ortasında ve renkler karışmamış.",
      ),
      a(
        "Kurut ve vernikle",
        "Taşı 24 saat kurut; kalın noktaların içi geç kurur. Su bazlı verniği yumuşak fırçayla, noktaları ezmemek için tek yönde ve ince sür.",
        "24 saat + 15 dk",
        "Vernik eşit parlak, noktalar dağılmamış ve yüzey yapışmıyor.",
      ),
    ],
    sikHatalar: [
      "Noktalar giderek küçüldü: Her noktadan önce boyaya batırılmadı. Her noktada yeniden batır.",
      "Vernik noktaları dağıttı: Boya tam kurumadan verniklendi. 24 saat bekle.",
      "Halkalar yamuk: Merkez belirlenmeden başlandı. Önce merkezi işaretle, halkaları ona göre diz.",
      "Boya kabardı: Taş nemliydi. Taşı tamamen kurut.",
    ],
  },

  "pirografi-pano": {
    adimlar: [
      a(
        "Yüzeyi hazırla",
        "Kütük dilimini 180, sonra 240 kumla lif yönünde zımparala; pürüzsüz yüzeyde kalem takılmadan kayar. Tozu kuru fırçayla al. Yüzeyde vernik, boya ya da cila olmadığından emin ol.",
        "20 dk",
        "Yüzey pürüzsüz ve çıplak ahşap; eli gezdirince takılma yok.",
      ),
      a(
        "Deseni aktar",
        "Karbon kağıdını boya yüzü ahşaba gelecek şekilde koy, deseni üstüne yerleştir ve bantla sabitle. Desenin hatlarını kurşun kalemle hafif bastırarak çiz. Köşeyi kaldırıp aktarılıp aktarılmadığını kontrol et.",
        "20 dk",
        "Desenin tüm hatları ahşapta ince ve net görünüyor.",
      ),
      a(
        "Hurda ahşapta dene",
        "Kalemi standına koyup fişe tak, orta ısıya ayarla ve 2 dakika ısınmasını bekle. Aynı ağaçtan bir hurda parçada çizgi çek: ısıyı ve hızı, çizgi kahverengi olup yanık siyah halka bırakmayacak şekilde ayarla.",
        "10 dk",
        "Deneme çizgisi eşit renkli; başında ve sonunda yanık leke yok.",
      ),
      a(
        "Ana hatları yak",
        "Kalemi kurşun kalem gibi tut, bileğini masaya daya. Ucu ahşaba bastırmadan değdir ve sabit hızda çek; yavaşlarsan koyulaşır, durursan yanık nokta kalır. Uzun çizgilere hareket ederken başla, hareket ederken bitir.",
        "60 dk",
        "Hatlar sürekli ve eşit kalınlıkta; çizgi başlarında siyah nokta yok.",
      ),
      a(
        "Gölgelendir",
        "Düz (kürek) uca geç ve ısıyı düşür. Uç değiştirmeden önce kalemi kapat ve ucun soğumasını bekle, penseyle değiştir. Gölge alanlarında küçük dairesel hareketlerle açıktan koyuya doğru katman katman çalış; bir anda koyulaştırmaya çalışma.",
        "60 dk",
        "Gölgeler açıktan koyuya yumuşak geçiyor, belirgin leke yok.",
      ),
      a(
        "Temizle ve vernikle",
        "Kalemi kapatıp standında soğumaya bırak. Görünen karbon izlerini yumuşak silgiyle sil, tozu fırçayla al. Mat verniği ince bir kat sür, kuruyunca ikinci kat at.",
        "15 dk + kuruma",
        "Karbon izi kalmamış, vernik eşit ve parlama yapmıyor.",
      ),
    ],
    sikHatalar: [
      "Çizgi başlarında siyah noktalar var: Kalem ahşapta bekletildi. Ucu hareket halindeyken değdir ve kaldır.",
      "Çizgi kalınlığı değişiyor: Hız sabit değil. Bileğini masaya dayayıp eşit hızda çek.",
      "Gölge lekeli: Isı çok yüksek. Isıyı düşür, katman katman koyulaştır.",
      "Kalem takılıyor: Yüzey yeterince zımparalanmadı. 240 kumla pürüzsüzleştir.",
    ],
    guvenlikEk: [
      "Kalemi kullanmadığın her an standına koy; sıcak ucu masaya bırakma ve fişten çekmeden yanından ayrılma.",
    ],
  },
};

// Proje verisine Altın işaretini ve (varsa) derin içeriği uygular
export function altinUygula(p: Proje): Proje {
  if (!ALTIN_40.includes(p.id)) return p;
  const ic = ALTIN_ICERIK[p.id];
  if (!ic) return { ...p, altin: true };
  return {
    ...p,
    altin: true,
    sure: ic.sure ?? p.sure,
    adimlar: ic.adimlar,
    sikHatalar: ic.sikHatalar,
    ipuclari: ic.ipuclari ?? p.ipuclari,
    guvenlik: [...p.guvenlik, ...(ic.guvenlikEk ?? []).filter((g) => !p.guvenlik.includes(g))],
    malzemeler: p.malzemeler.map((m) => ({ ...m, ...(ic.malzemeDegistir?.[m.id] ?? {}) })),
  };
}
