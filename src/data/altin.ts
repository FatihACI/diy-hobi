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
