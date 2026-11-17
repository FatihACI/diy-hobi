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
