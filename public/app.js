const app = document.querySelector("#app");

const statusMeta = {
  new: { label: "Yayında", className: "new" },
  review: { label: "Yönetici İncelemesinde", className: "review" },
  pilot: { label: "Pilot Seçildi", className: "pilot" },
  done: { label: "Uygulandı", className: "done" },
  rejected: { label: "Reddedildi", className: "rejected" },
  draft: { label: "Taslak", className: "" }
};

const demoAccessKey = "NIE-DEMO-2026";

const remoteImages = {
  onboarding: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=82",
  landingPanel: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=82",
  ideaVisuals: [
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=82",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=82",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=82",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=82",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=82",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=82",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=82",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=82"
  ],
  challengeVisuals: [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=82",
    "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=900&q=82",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=82"
  ],
  storyVisuals: [
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=82",
    "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=900&q=82",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=82"
  ]
};

const brandLogoSrc = "/assets/is_new_logo.png";

const profilePhotos = {
  u1: "https://randomuser.me/api/portraits/women/44.jpg",
  u2: "https://randomuser.me/api/portraits/men/32.jpg",
  u3: "https://randomuser.me/api/portraits/men/75.jpg",
  u4: "https://randomuser.me/api/portraits/men/65.jpg",
  u5: "https://randomuser.me/api/portraits/women/68.jpg"
};

const namedAvatarPhotos = {
  "Elif Şahin": "https://randomuser.me/api/portraits/women/22.jpg",
  "Zeynep Kaya": "https://randomuser.me/api/portraits/women/51.jpg",
  "Emir Arslan": "https://randomuser.me/api/portraits/men/41.jpg",
  "Duru Aksoy": "https://randomuser.me/api/portraits/women/36.jpg",
  "Ali Çelik": "https://randomuser.me/api/portraits/men/52.jpg"
};

const affiliationCompanies = [
  {
    id: "tibas-holding",
    name: "TİBAŞ Holding",
    shortName: "TİBAŞ",
    logo: "/assets/company-logos/tibas-holding.png",
    domain: "isbank.com.tr",
    type: "Holding",
    countries: ["Türkiye"],
    cities: ["İstanbul", "Ankara", "İzmir"],
    campuses: ["Levent Genel Müdürlük", "Tuzla Operasyon Merkezi", "Ankara Bölge Ofisi"],
    departments: ["Strateji", "İnovasyon", "Finans", "İnsan Kaynakları"]
  },
  {
    id: "is-new",
    name: "İş New",
    shortName: "İş New",
    logo: "/assets/is_new_logo.png",
    domain: "isbank.com.tr",
    type: "İnovasyon",
    countries: ["Türkiye"],
    cities: ["İstanbul", "Ankara", "İzmir"],
    campuses: ["Dijital İnovasyon Alanı", "Levent Veri&Bilgi Ofisi", "Ankara Deneyim Noktası"],
    departments: ["Borsa", "Veri&Bilgi", "Ürün", "Araştırma"]
  },
  {
    id: "sisecam",
    name: "Türkiye Şişe ve Cam Fabrikaları",
    shortName: "Şişecam",
    logo: "/assets/company-logos/sisecam.png",
    domain: "sisecam.com.tr",
    type: "Sanayi",
    countries: ["Türkiye", "Almanya", "İtalya"],
    cities: ["İstanbul", "Kırklareli", "Mersin"],
    campuses: ["Tuzla Ar-Ge", "Trakya Fabrika", "Mersin Soda Tesisi"],
    departments: ["Üretim", "Ar-Ge", "Tedarik", "Sürdürülebilirlik"]
  },
  {
    id: "tskb",
    name: "Türkiye Sınai Kalkınma Bankası (TSKB)",
    shortName: "TSKB",
    logo: "/assets/company-logos/tskb.svg",
    domain: "tskb.com.tr",
    type: "Banka",
    countries: ["Türkiye"],
    cities: ["İstanbul", "Ankara", "İzmir"],
    campuses: ["Fındıklı Genel Müdürlük", "Ankara Temsilcilik", "İzmir Temsilcilik"],
    departments: ["Kurumsal Bankacılık", "Sürdürülebilir Finans", "Risk", "Araştırma"]
  },
  {
    id: "is-yatirim",
    name: "İş Yatırım Menkul Değerler",
    shortName: "İş Yatırım",
    logo: "/assets/company-logos/is-yatirim.svg",
    domain: "isyatirim.com.tr",
    type: "Yatırım",
    countries: ["Türkiye"],
    cities: ["İstanbul", "Ankara", "İzmir"],
    campuses: ["Levent Genel Müdürlük", "Etiler Şube", "Ankara Şube"],
    departments: ["Araştırma", "Kurumsal Finansman", "Dijital Kanallar", "Operasyon"]
  },
  {
    id: "is-leasing",
    name: "İş Finansal Kiralama",
    shortName: "İş Leasing",
    logo: "/assets/company-logos/is-leasing.png",
    domain: "isleasing.com.tr",
    type: "Finans",
    countries: ["Türkiye"],
    cities: ["İstanbul", "Ankara", "Bursa"],
    campuses: ["Genel Müdürlük", "Kurumsal Operasyon", "Bursa Bölge"],
    departments: ["Satış", "Kredi", "Operasyon", "Tahsis"]
  },
  {
    id: "milli-reasurans",
    name: "Milli Reasürans",
    shortName: "Milli Re",
    logo: "/assets/company-logos/milli-reasurans-official.png",
    domain: "millire.com",
    type: "Sigorta",
    countries: ["Türkiye"],
    cities: ["İstanbul"],
    campuses: ["Teşvikiye Genel Müdürlük", "Nişantaşı Konferans Alanı"],
    departments: ["Reasürans", "Aktüerya", "Hasar", "Risk"]
  },
  {
    id: "anadolu-hayat",
    name: "Anadolu Hayat Emeklilik",
    shortName: "Anadolu Hayat",
    logo: "/assets/company-logos/anadolu-hayat.png",
    domain: "anadoluhayat.com.tr",
    type: "Emeklilik",
    countries: ["Türkiye"],
    cities: ["İstanbul", "Ankara", "İzmir", "Antalya"],
    campuses: ["Genel Müdürlük", "Ankara Bölge", "İzmir Bölge"],
    departments: ["Müşteri Deneyimi", "Satış", "Operasyon", "Dijital Ürün"]
  },
  {
    id: "is-gyo",
    name: "İş Gayrimenkul Yatırım Ortaklığı",
    shortName: "İş GYO",
    logo: "/assets/company-logos/is-gyo.png",
    domain: "isgyo.com.tr",
    type: "Gayrimenkul",
    countries: ["Türkiye"],
    cities: ["İstanbul", "İzmir"],
    campuses: ["Kuleler Portföy Ofisi", "Proje Yönetim Ofisi", "İzmir Karma Proje"],
    departments: ["Portföy", "Proje", "Finans", "Satış"]
  },
  {
    id: "isbank-ag",
    name: "İşbank AG",
    shortName: "İşbank AG",
    logo: "/assets/company-logos/isbank-ag.svg",
    domain: "isbank.de",
    type: "Banka",
    countries: ["Almanya"],
    cities: ["Frankfurt", "Berlin", "Münih"],
    campuses: ["Frankfurt HQ", "Berlin Branch", "München Branch"],
    departments: ["Retail Banking", "Corporate Banking", "Operations", "Compliance"]
  },
  {
    id: "jsc-isbank",
    name: "JSC İşbank",
    shortName: "JSC İşbank",
    logo: "/assets/company-logos/jsc-isbank.png",
    domain: "isbank.ru",
    type: "Banka",
    countries: ["Rusya"],
    cities: ["Moskova"],
    campuses: ["Moskova Ofis", "Operasyon Birimi"],
    departments: ["Corporate", "Treasury", "Operations", "Risk"]
  },
  {
    id: "isbank-georgia",
    name: "JSC Isbank Georgia",
    shortName: "Isbank Georgia",
    logo: "/assets/company-logos/isbank-georgia.png",
    domain: "isbank.ge",
    type: "Banka",
    countries: ["Gürcistan"],
    cities: ["Tiflis", "Batum"],
    campuses: ["Tiflis HQ", "Batum Branch"],
    departments: ["Branch Banking", "Operations", "Risk", "Digital"]
  },
  {
    id: "arap-turk-bankasi",
    name: "Arap Türk Bankası",
    shortName: "A&T Bank",
    logo: "/assets/company-logos/arap-turk-bankasi.svg",
    domain: "atbank.com.tr",
    type: "Banka",
    countries: ["Türkiye"],
    cities: ["İstanbul", "Ankara"],
    campuses: ["Genel Müdürlük", "Ankara Şube"],
    departments: ["Kurumsal Bankacılık", "Dış Ticaret", "Operasyon", "Risk"]
  },
  {
    id: "moka",
    name: "Moka Ödeme ve Elektronik Para Kuruluşu",
    shortName: "Moka",
    logo: "/assets/company-logos/moka.png",
    domain: "moka.com",
    type: "Fintech",
    countries: ["Türkiye"],
    cities: ["İstanbul"],
    campuses: ["Fintech Ofis", "Operasyon Alanı"],
    departments: ["Ürün", "Teknoloji", "Risk", "Müşteri Başarısı"]
  },
  {
    id: "is-net",
    name: "İş Net Elektronik Bilgi Üretim Dağıtım Ticaret ve İletişim Hizmetleri",
    shortName: "İşNet",
    logo: "/assets/company-logos/is-net.png",
    domain: "isnet.net.tr",
    type: "Teknoloji",
    countries: ["Türkiye"],
    cities: ["İstanbul", "Ankara"],
    campuses: ["Veri Merkezi", "Network Operasyon", "Ankara Operasyon"],
    departments: ["Altyapı", "Siber Güvenlik", "Servis Yönetimi", "NOC"]
  },
  {
    id: "is-merkezleri",
    name: "İş Merkezleri Yönetim ve İşletim",
    shortName: "İş Merkezleri",
    logo: "/assets/company-logos/is-merkezleri.png",
    domain: "ismer.com.tr",
    type: "Tesis Yönetimi",
    countries: ["Türkiye"],
    cities: ["İstanbul"],
    campuses: ["Kule 3 Yönetim", "Levent Kampüs", "Tesis Operasyon"],
    departments: ["Tesis", "Güvenlik", "Bakım", "Misafir Deneyimi"]
  },
  {
    id: "is-kultur",
    name: "Kültür Yayınları İş Türk",
    shortName: "İş Kültür",
    logo: "/assets/company-logos/is-kultur.png",
    domain: "iskultur.com.tr",
    type: "Yayıncılık",
    countries: ["Türkiye"],
    cities: ["İstanbul"],
    campuses: ["Yayın Ofisi", "Dağıtım Deposu", "Etkinlik Alanı"],
    departments: ["Editöryal", "Tasarım", "Dağıtım", "Pazarlama"]
  },
  {
    id: "trakya-yatirim",
    name: "Trakya Yatırım Holding",
    shortName: "Trakya Yatırım",
    logo: "/assets/company-logos/trakya-yatirim.png",
    domain: "isbank.com.tr",
    type: "Holding",
    countries: ["Türkiye"],
    cities: ["İstanbul", "Kırklareli"],
    campuses: ["Yönetim Ofisi", "Trakya Koordinasyon"],
    departments: ["Yatırım", "Finans", "Portföy", "Raporlama"]
  },
  {
    id: "genel-energy",
    name: "Genel Energy Plc.",
    shortName: "Genel Energy",
    logo: "/assets/company-logos/genel-energy.png",
    domain: "genelenergy.com",
    type: "Enerji",
    countries: ["Birleşik Krallık", "Irak"],
    cities: ["Londra", "Erbil"],
    campuses: ["London Office", "Erbil Operations", "Field Coordination"],
    departments: ["Operations", "HSE", "Finance", "Exploration"]
  }
];

const scopeLevels = ["Holding geneli", "İştirak", "Ülke", "Şehir", "Yerleşke / Bina", "Departman"];

const marketCategories = ["Proje", "Fikir", "Araştırma"];
const borsaAreas = ["FinTech & Dijital Bankacılık", "Sürdürülebilirlik & Yeşil Enerji", "Yapay Zekâ & Derin Teknoloji", "PropTech & Akıllı Şehirler", "Akıllı Lojistik & Dağıtım", "Operasyon", "Borsa", "Diğer"];

const marketRewardByCategory = {
  Proje: 850,
  Fikir: 650,
  "Araştırma": 700,
  "Şikayet": 550
};

const levelWallets = [
  { id: "holding", label: "Holding", balance: 42000, delta: 4.8, scope: "Tüm iştirakler" },
  { id: "company", label: "İştirak", balance: 18600, delta: 2.1, scope: "Seçili şirket" },
  { id: "country", label: "Ülke", balance: 12200, delta: 1.4, scope: "Türkiye" },
  { id: "city", label: "Şehir", balance: 7600, delta: -0.6, scope: "İstanbul" },
  { id: "campus", label: "Bina", balance: 4100, delta: 3.2, scope: "Yerleşke" }
];

function defaultBundleFiles(ticker = "NIE", category = "Fikir") {
  const slug = String(ticker).toLowerCase();
  const base = category === "Şikayet" ? "sinyal" : category === "Araştırma" ? "arastirma" : category === "Proje" ? "proje" : "fikir";
  return [`${slug}-${base}.pdf`, `${slug}-veri.xlsx`, `${slug}-sunum.pptx`, `${slug}-ham-veri.csv`];
}

const peopleDirectory = [
  { id: "p01", name: "Defne Arman", companyId: "tibas-holding", role: "Strateji Direktörü", team: "Holding Strateji", city: "İstanbul", campus: "Levent Genel Müdürlük", photo: "https://randomuser.me/api/portraits/women/12.jpg", status: "Aktif" },
  { id: "p02", name: "Mert Alkan", companyId: "tibas-holding", role: "İnovasyon Yöneticisi", team: "İnovasyon Ofisi", city: "İstanbul", campus: "Levent Genel Müdürlük", photo: "https://randomuser.me/api/portraits/men/12.jpg", status: "Toplantıda" },
  { id: "p03", name: "Selin Eryılmaz", companyId: "sisecam", role: "Ar-Ge Lideri", team: "Tuzla Ar-Ge", city: "İstanbul", campus: "Tuzla Ar-Ge", photo: "https://randomuser.me/api/portraits/women/32.jpg", status: "Aktif" },
  { id: "p04", name: "Baran İleri", companyId: "sisecam", role: "Üretim Müdürü", team: "Trakya Fabrika", city: "Kırklareli", campus: "Trakya Fabrika", photo: "https://randomuser.me/api/portraits/men/27.jpg", status: "Sahada" },
  { id: "p05", name: "Ece Uslu", companyId: "tskb", role: "Sürdürülebilir Finans", team: "Kurumsal Bankacılık", city: "İstanbul", campus: "Fındıklı Genel Müdürlük", photo: "https://randomuser.me/api/portraits/women/45.jpg", status: "Aktif" },
  { id: "p06", name: "Kaan Öztürk", companyId: "is-yatirim", role: "Araştırma Müdürü", team: "Araştırma", city: "İstanbul", campus: "Levent Genel Müdürlük", photo: "https://randomuser.me/api/portraits/men/44.jpg", status: "Aktif" },
  { id: "p07", name: "Nazlı Durukan", companyId: "is-leasing", role: "Operasyon Lideri", team: "Kurumsal Operasyon", city: "İstanbul", campus: "Kurumsal Operasyon", photo: "https://randomuser.me/api/portraits/women/64.jpg", status: "Aktif" },
  { id: "p08", name: "Ata Güner", companyId: "milli-reasurans", role: "Risk Analisti", team: "Aktüerya", city: "İstanbul", campus: "Teşvikiye Genel Müdürlük", photo: "https://randomuser.me/api/portraits/men/53.jpg", status: "Aktif" },
  { id: "p09", name: "İpek Candan", companyId: "anadolu-hayat", role: "Müşteri Deneyimi", team: "Dijital Ürün", city: "İstanbul", campus: "Genel Müdürlük", photo: "https://randomuser.me/api/portraits/women/58.jpg", status: "Aktif" },
  { id: "p10", name: "Ozan Gürel", companyId: "is-gyo", role: "Proje Yöneticisi", team: "Portföy", city: "İstanbul", campus: "Kuleler Portföy Ofisi", photo: "https://randomuser.me/api/portraits/men/61.jpg", status: "Sahada" },
  { id: "p11", name: "Lena Becker", companyId: "isbank-ag", role: "Compliance Lead", team: "Compliance", city: "Frankfurt", campus: "Frankfurt HQ", photo: "https://randomuser.me/api/portraits/women/76.jpg", status: "Aktif" },
  { id: "p12", name: "Emirhan Sönmez", companyId: "jsc-isbank", role: "Treasury Manager", team: "Treasury", city: "Moskova", campus: "Moskova Ofis", photo: "https://randomuser.me/api/portraits/men/72.jpg", status: "Aktif" },
  { id: "p13", name: "Nino Kaladze", companyId: "isbank-georgia", role: "Branch Lead", team: "Branch Banking", city: "Tiflis", campus: "Tiflis HQ", photo: "https://randomuser.me/api/portraits/women/79.jpg", status: "Aktif" },
  { id: "p14", name: "Deniz Okan", companyId: "arap-turk-bankasi", role: "Dış Ticaret Müdürü", team: "Kurumsal Bankacılık", city: "İstanbul", campus: "Genel Müdürlük", photo: "https://randomuser.me/api/portraits/men/19.jpg", status: "Aktif" },
  { id: "p15", name: "Aslı Ergin", companyId: "moka", role: "Ürün Sahibi", team: "Ödeme Deneyimi", city: "İstanbul", campus: "Fintech Ofis", photo: "https://randomuser.me/api/portraits/women/88.jpg", status: "Aktif" },
  { id: "p16", name: "Yiğit Bora", companyId: "is-net", role: "NOC Lideri", team: "Network Operasyon", city: "İstanbul", campus: "Veri Merkezi", photo: "https://randomuser.me/api/portraits/men/83.jpg", status: "Nöbette" },
  { id: "p17", name: "Seda Moran", companyId: "is-merkezleri", role: "Tesis Deneyimi", team: "Tesis Operasyon", city: "İstanbul", campus: "Kule 3 Yönetim", photo: "https://randomuser.me/api/portraits/women/91.jpg", status: "Aktif" },
  { id: "p18", name: "Arda Pekin", companyId: "is-kultur", role: "Editör", team: "Editöryal", city: "İstanbul", campus: "Yayın Ofisi", photo: "https://randomuser.me/api/portraits/men/38.jpg", status: "Aktif" },
  { id: "p19", name: "Pelin Sezer", companyId: "trakya-yatirim", role: "Portföy Raporlama", team: "Yatırım", city: "İstanbul", campus: "Yönetim Ofisi", photo: "https://randomuser.me/api/portraits/women/40.jpg", status: "Aktif" },
  { id: "p20", name: "James Carter", companyId: "genel-energy", role: "Operations Lead", team: "Operations", city: "Londra", campus: "London Office", photo: "https://randomuser.me/api/portraits/men/86.jpg", status: "Aktif" },
  { id: "p21", name: "Derya Akman", companyId: "tibas-holding", role: "İK İş Ortağı", team: "İnsan Kaynakları", city: "Ankara", campus: "Ankara Bölge Ofisi", photo: "https://randomuser.me/api/portraits/women/14.jpg", status: "Aktif" },
  { id: "p22", name: "Cem Yalın", companyId: "moka", role: "Risk Operasyon", team: "Risk", city: "İstanbul", campus: "Operasyon Alanı", photo: "https://randomuser.me/api/portraits/men/24.jpg", status: "Aktif" },
  { id: "p23", name: "Gizem Sarı", companyId: "anadolu-hayat", role: "Bölge Koordinatörü", team: "Satış", city: "İzmir", campus: "İzmir Bölge", photo: "https://randomuser.me/api/portraits/women/17.jpg", status: "Sahada" },
  { id: "p24", name: "Volkan Er", companyId: "isbank-ag", role: "Operations Manager", team: "Operations", city: "Berlin", campus: "Berlin Branch", photo: "https://randomuser.me/api/portraits/men/95.jpg", status: "Aktif" },
  { id: "p25", name: "Aras Kılınç", companyId: "is-leasing", role: "Leasing Tahsis Müdürü", team: "Tahsis", city: "İstanbul", campus: "Genel Müdürlük", photo: "https://randomuser.me/api/portraits/men/45.jpg", status: "Aktif" }
];

const initialAnnouncements = [
  {
    id: "ann-1",
    title: "Haziran fikir döngüsü holding genelinde açıldı",
    body: "Öneri, şikayet ve verimlilik kayıtları bu ay aynı karar akışında toplanacak. Her iştirak kendi yerleşke çıktısını ayrıca görebilecek.",
    scope: "Holding geneli",
    companyId: "tibas-holding",
    country: "Türkiye",
    city: "İstanbul",
    campus: "Levent Genel Müdürlük",
    department: "Tüm ekipler",
    authorId: "p01",
    time: "Bugün 09:10",
    priority: "Yönetici duyurusu"
  },
  {
    id: "ann-2",
    title: "Tuzla Ar-Ge ve Trakya Fabrika için saha geri bildirimi",
    body: "Şişecam ekipleri üretim hattı bekleme süreleri ve bakım planı önerilerini bu hafta yerleşke ölçeğinde toplayacak.",
    scope: "Yerleşke / Bina",
    companyId: "sisecam",
    country: "Türkiye",
    city: "Kırklareli",
    campus: "Trakya Fabrika",
    department: "Üretim",
    authorId: "p04",
    time: "Bugün 10:35",
    priority: "Yerleşke"
  },
  {
    id: "ann-3",
    title: "TSKB sürdürülebilir finans fikir sprinti",
    body: "Kurumsal bankacılık ve araştırma ekipleri yeşil finans raporlama akışını sadeleştirecek önerileri bekliyor.",
    scope: "İştirak",
    companyId: "tskb",
    country: "Türkiye",
    city: "İstanbul",
    campus: "Fındıklı Genel Müdürlük",
    department: "Sürdürülebilir Finans",
    authorId: "p05",
    time: "Dün 16:20",
    priority: "İştirak"
  },
  {
    id: "ann-4",
    title: "Frankfurt operasyon geçiş planı",
    body: "İşbank AG operasyon ve uyum ekipleri yeni kontrol listesini Berlin ve Frankfurt ofislerinde paralel deneyecek.",
    scope: "Ülke",
    companyId: "isbank-ag",
    country: "Almanya",
    city: "Frankfurt",
    campus: "Frankfurt HQ",
    department: "Operations",
    authorId: "p11",
    time: "Dün 11:45",
    priority: "Ülke"
  },
  {
    id: "ann-5",
    title: "Levent kampüs misafir deneyimi güncellemesi",
    body: "İş Merkezleri ekibi güvenlik, yönlendirme ve toplantı alanı geri bildirimlerini bina bazında açtı.",
    scope: "Şehir",
    companyId: "is-merkezleri",
    country: "Türkiye",
    city: "İstanbul",
    campus: "Kule 3 Yönetim",
    department: "Tesis",
    authorId: "p17",
    time: "2 gün önce",
    priority: "Operasyon"
  },
  {
    id: "ann-leasing-1",
    title: "İş Leasing verimlilik ve dijitalleşme fikir maratonu",
    body: "Tüm İş Finansal Kiralama ekiplerinin katılımıyla operasyon süreçlerinin hızlandırılması ve müşteri portalı entegrasyonu odaklı fikir alımları başladı.",
    scope: "İştirak",
    companyId: "is-leasing",
    country: "Türkiye",
    city: "İstanbul",
    campus: "Genel Müdürlük",
    department: "Tüm Ekipler",
    authorId: "p07",
    time: "Bugün 08:30",
    priority: "İştirak"
  }
];

const initialMessageSpaces = [
  {
    id: "msg-holding",
    name: "Holding Genel Akış",
    description: "Tüm iştiraklerden yöneticiler ve inovasyon temsilcileri.",
    companyId: "tibas-holding",
    scope: "Holding geneli",
    members: ["p01", "p02", "p05", "p09", "p15", "p17"],
    messages: [
      { userId: "p02", body: "Bu hafta tüm iştiraklerden en güçlü 3 öneriyi tek portföy görünümünde toplayalım.", time: "09:22" },
      { userId: "p01", body: "Holding geneli duyuru yayınlandı. Şehir ve yerleşke kırılımını ayrıca kontrol edeceğim.", time: "09:27" },
      { userId: "p05", body: "TSKB olarak yeşil finans raporlama başlığını borsa listelemesine soktuk. Talebi oradan izleyebilirsiniz.", time: "10:14" },
      { userId: "p09", body: "Anadolu Hayat tarafındaki yeni onboarding rehberi pilotta çok iyi gidiyor, AI skoru 93/100 çıkmıştı zaten.", time: "11:35" },
      { userId: "p02", body: "Harika! Şişecam lojistik planlama yapay zeka asistanı fikrini bu hafta kurul gündemine ekliyoruz.", time: "14:15" },
      { userId: "p15", body: "Tuzla veri merkezi PUE izleme projesi için de sensör montaj planlaması tamamlandı, kuruluma başladık.", time: "15:20" },
      { userId: "p17", body: "Holding genelinde su tasarrufu vanaları montajı bitti, faturalardaki düşüşü takip etmeye başladık.", time: "16:05" }
    ]
  },
  {
    id: "msg-istanbul-campus",
    name: "İstanbul Yerleşkeleri",
    description: "Levent, Tuzla, Fındıklı ve veri merkezi ekipleri.",
    companyId: "tibas-holding",
    scope: "Şehir",
    members: ["p02", "p03", "p05", "p10", "p16", "p17"],
    messages: [
      { userId: "p16", body: "Veri merkezi tarafında vardiya teslim formunu öneri olarak açtım.", time: "10:04" },
      { userId: "p17", body: "Kule 3 yönlendirme geri bildirimlerini duyuruya bağladım.", time: "10:11" },
      { userId: "p03", body: "Tuzla Ar-Ge'den gelen hammadde takip otomasyonu fikri için test ortamı hazırlıyoruz.", time: "11:45" },
      { userId: "p10", body: "Kuleler portföy ofisi olarak gişe yönlendirme ekranlarındaki sadeleşmeyi tüm binada test edeceğiz.", time: "13:20" },
      { userId: "p16", body: "Beşiktaş şubesinde kağıtsız şube projesi pilotu başladı, gişe fişlerini artık tabletten imzalıyoruz.", time: "15:30" },
      { userId: "p03", body: "Tuzla kampüsündeki ortak çalışma alanları için akıllı dolap kurulumu haftaya başlıyor, kilitler geldi.", time: "16:12" },
      { userId: "p05", body: "Müşteri çağrı ses kayıtlarının AI ile analiz edilmesi fikrinin veri setini hazırlıyoruz.", time: "17:05" }
    ]
  },
  {
    id: "msg-finance",
    name: "Finans ve Yatırım Masası",
    description: "TSKB, İş Yatırım, Leasing ve GYO odaklı karar hazırlığı.",
    companyId: "tskb",
    scope: "İştirak",
    members: ["p05", "p06", "p07", "p10", "p19", "p25"],
    messages: [
      { userId: "p06", body: "Araştırma rapor şablonunu sadeleştirme fikrini hızlı akışa aldım.", time: "11:18" },
      { userId: "p07", body: "Leasing operasyonundan iki şikayet aynı kök nedene bağlanıyor.", time: "11:26" },
      { userId: "p19", body: "Trakya Yatırım bütçe verimlilik analizini sisteme dosya bundle'ı olarak yükledim, borsa fiyatı artacaktır.", time: "12:05" },
      { userId: "p25", body: "İş Leasing tarafında geliştirdiğimiz Kullandıkça Öde (Pay-as-you-use) borsa projesi için IoT entegrasyonu tamamlanmak üzere.", time: "12:30" },
      { userId: "p07", body: "Bu model, özellikle KOBİ'lerin finansman yükünü hafifletecektir. Hacim beklentimiz oldukça yüksek.", time: "12:45" },
      { userId: "p05", body: "TSKB sürdürülebilir fon dağıtım algoritması önerimiz hakkında yönetim kurulu sunumu onaylandı.", time: "14:12" },
      { userId: "p10", body: "Yeşil finansman projeleri raporlama portalı prototipi üzerinde çalışmalara başladık.", time: "16:22" },
      { userId: "p19", body: "Algoritmanın geriye dönük test (backtest) verilerini yarın hazine ekibiyle gözden geçireceğiz.", time: "17:10" }
    ]
  },
  {
    id: "msg-global",
    name: "Yurt Dışı Ofisler",
    description: "Almanya, Rusya, Gürcistan ve Londra ofislerinden sinyaller.",
    companyId: "isbank-ag",
    scope: "Ülke",
    members: ["p11", "p12", "p13", "p20", "p24"],
    messages: [
      { userId: "p13", body: "Tiflis şube onboarding dökümanlarını İngilizce/Türkçe tek akışa çekmek istiyor.", time: "12:02" },
      { userId: "p20", body: "Energy tarafında HSE bildirimlerini anonim şikayet gibi açmak faydalı olur.", time: "12:09" },
      { userId: "p24", body: "Berlin şubesi yeni operasyon kontrol listesini Frankfurt ile eş zamanlı test etmeye hazır.", time: "13:40" },
      { userId: "p11", body: "Uyum süreçleri için hazırladığımız AI destekli asistan fikrini Frankfurt HQ onayına sunduk.", time: "15:02" },
      { userId: "p24", body: "Şubeler arası barkodlu evrak lojistiği takibi uygulaması test kullanıcısı tanımları tamamlandı.", time: "16:45" },
      { userId: "p13", body: "Londra şubesinden de benzer bir entegrasyon talebi geldi, kapsama dahil edebiliriz.", time: "17:22" }
    ]
  },
  {
    id: "msg-digital",
    name: "Dijital Ürün ve Ödeme",
    description: "Moka, Anadolu Hayat ve İşNet ürün/operasyon ekipleri.",
    companyId: "moka",
    scope: "Departman",
    members: ["p09", "p15", "p16", "p22", "p23"],
    messages: [
      { userId: "p15", body: "Ödeme akışı hata bildirimlerini şikayet bölümüyle eşleştiriyorum.", time: "13:14" },
      { userId: "p09", body: "Müşteri deneyimi ölçümlerini duyuru panosunda şehir bazlı görmek iyi oldu.", time: "13:21" },
      { userId: "p16", body: "İşNet üzerinden Moka API entegrasyonu için performans iyileştirme önerisini ideas sayfasına girdim.", time: "14:55" },
      { userId: "p22", body: "Hata bildirim otomasyonu için hazırladığımız pilot şema onaylandı, entegrasyonu başlatabiliriz.", time: "16:10" },
      { userId: "p23", body: "Moka üye işyeri onboarding evrak kontrol otomasyonu (OCR) ilk testleri başarıyla bitirdik.", time: "16:48" },
      { userId: "p09", body: "Onay sürelerinin 2 saate inmesi müşteri kazanım hızımızı 3 kat artıracaktır.", time: "17:15" },
      { userId: "p16", body: "Ağ geçidi optimizasyonu ve QoS tanımları bu gece yarısı İşNet tarafında yayına alınıyor.", time: "17:40" }
    ]
  }
];

const ideaTypes = [
  "Yeni ürün / hizmet",
  "Operasyonel iyileştirme",
  "Maliyet azaltma",
  "Müşteri deneyimi",
  "Çalışan deneyimi",
  "Teknik geliştirme",
  "Süreç otomasyonu",
  "Şikayet / risk bildirimi",
  "Mağaza / şube önerisi",
  "Eğitim / onboarding önerisi",
  "Sürdürülebilirlik",
  "Diğer"
];

const demoUsers = [
  {
    id: "u1",
    name: "Ayşe Yılmaz",
    email: "ayse.yilmaz@isbank.example",
    employeeId: "P-10452",
    company: "İşBank Teknoloji",
    department: "Operasyon",
    location: "İstanbul Genel Müdürlük",
    city: "İstanbul",
    region: "Marmara",
    role: "Operasyon Uzmanı",
    roleKey: "employee",
    seniority: "Uzman",
    isManager: false,
    isAdmin: false,
    voteCreditBalance: 17,
    monthlyVoteCredit: 30,
    badges: ["İlk Fikir", "Aktif Katılımcı", "AI ile Güçlendirilmiş Fikir"]
  },
  {
    id: "u2",
    name: "Mehmet Demir",
    email: "mehmet.demir@isbank.example",
    employeeId: "S-88312",
    company: "İşBank Perakende Operasyonları",
    department: "Mağaza Operasyonları",
    location: "Bursa Mağaza",
    city: "Bursa",
    region: "Marmara",
    role: "Mağaza Çalışanı",
    roleKey: "field",
    seniority: "Saha çalışanı",
    isManager: false,
    isAdmin: false,
    voteCreditBalance: 21,
    monthlyVoteCredit: 30,
    badges: ["İlk Fikir", "Müşteri Deneyimi Katkısı"]
  },
  {
    id: "u3",
    name: "Can Koç",
    email: "can.koc@isbank.example",
    employeeId: "M-22018",
    company: "İşBank Teknoloji",
    department: "Operasyon",
    location: "İstanbul Genel Müdürlük",
    city: "İstanbul",
    region: "Marmara",
    role: "Departman Yöneticisi",
    roleKey: "manager",
    seniority: "Yönetici",
    isManager: true,
    isAdmin: false,
    voteCreditBalance: 24,
    monthlyVoteCredit: 40,
    badges: ["Departmanlar Arası Köprü", "Pilot Proje Katılımcısı"]
  },
  {
    id: "u4",
    name: "Kerem Yıldız",
    email: "kerem.yildiz@isbank.example",
    employeeId: "H-01004",
    company: "İşBank Holding",
    department: "Strateji ve İnovasyon",
    location: "İstanbul Genel Müdürlük",
    city: "İstanbul",
    region: "Marmara",
    role: "Holding Yöneticisi",
    roleKey: "executive",
    seniority: "C-level",
    isManager: true,
    isAdmin: true,
    voteCreditBalance: 38,
    monthlyVoteCredit: 50,
    badges: ["İnovasyon Sprinti Kazananı", "Maliyet Azaltma Katkısı", "En Faydalı Yorumcu"]
  },
  {
    id: "u5",
    name: "Merve Aydın",
    email: "merve.aydin@isbank.example",
    employeeId: "HR-55102",
    company: "İşBank Sigorta",
    department: "İnsan Kaynakları",
    location: "Ankara Bölge",
    city: "Ankara",
    region: "İç Anadolu",
    role: "İK Yetkilisi",
    roleKey: "hr",
    seniority: "Kıdemli uzman",
    isManager: true,
    isAdmin: false,
    voteCreditBalance: 29,
    monthlyVoteCredit: 35,
    badges: ["Çalışan Deneyimi Katkısı", "Aktif Katılımcı"]
  }
];

demoUsers.forEach(user => {
  user.avatarUrl = profilePhotos[user.id];
});

const initialIdeas = [
  {
    id: "idea-1",
    title: "Yoğun saatlerde kasa bekleme süresini azaltacak dinamik vardiya sistemi",
    summary: "Geçmiş işlem yoğunluğu verilerine göre mağaza vardiyalarının daha doğru planlanmasını öneriyorum.",
    problem: "Mağazalarda yoğun saatlerde kasa bekleme süresi artıyor ve müşteri memnuniyeti düşüyor.",
    solution: "İşlem hacmi, saatlik yoğunluk ve personel uygunluk verileriyle öneri üreten küçük bir planlama paneli kurulabilir.",
    type: "Operasyonel iyileştirme",
    company: "İşBank Perakende Operasyonları",
    department: "Mağaza Operasyonları",
    location: "Bursa Mağaza",
    city: "Bursa",
    authorId: "u2",
    authorLabel: "Anonim Mağaza Çalışanı",
    anonymity: "İsim gizli, rol görünür",
    visibility: "Şirket içi",
    status: "review",
    estimatedImpact: "Yüksek",
    estimatedCost: "Düşük",
    implementationTime: "1 ay",
    successMetric: "Ortalama bekleme süresi ve müşteri şikayeti",
    riskNotes: "Vardiya kuralları ve çalışan uygunluğu kontrol edilmeli.",
    communityScore: 86,
    strategicScore: 78,
    aiScore: 91,
    credits: 142,
    supporters: 38,
    comments: [
      { user: "Elif Şahin", body: "Pilot için müşteri memnuniyeti anketini de ölçüme ekleyebiliriz.", manager: false },
      { user: "Can Koç", body: "Operasyon verisiyle birlikte değerlendirmeye alındı.", manager: true },
      { user: "Ahmet Yılmaz", body: "Kesinlikle çok faydalı olacaktır, İzmir şubesinde de test edelim.", manager: false }
    ],
    tags: ["Operasyon", "Mağaza", "Müşteri Deneyimi", "Düşük Maliyet", "Yüksek Etki"],
    createdAt: "2026-05-29"
  },
  {
    id: "idea-2",
    title: "Yeni başlayan çalışanlar için AI destekli kurum içi rehber",
    summary: "Onboarding sorularını kurum dokümanlarından yanıtlayan kontrollü bir rehber asistan.",
    problem: "Yeni çalışanlar bilgiye ulaşmak için farklı ekipleri tekrar tekrar meşgul ediyor.",
    solution: "İK ve bilgi yönetimi onaylı dokümanlardan yanıt veren, kaynak gösteren bir kurum içi rehber oluşturulabilir.",
    type: "Eğitim / onboarding önerisi",
    company: "İşBank Teknoloji",
    department: "İnsan Kaynakları",
    location: "İstanbul Genel Müdürlük",
    city: "İstanbul",
    authorId: "u5",
    authorLabel: "Merve Aydın",
    anonymity: "İsmimle paylaş",
    visibility: "Holding geneli",
    status: "pilot",
    estimatedImpact: "Yüksek",
    estimatedCost: "Orta",
    implementationTime: "3 ay",
    successMetric: "İlk 30 gün soru çözüm süresi",
    riskNotes: "Kaynak güncelliği ve yetki sınırları belirlenmeli.",
    communityScore: 79,
    strategicScore: 88,
    aiScore: 93,
    credits: 118,
    supporters: 31,
    comments: [
      { user: "Zeynep Kaya", body: "Kaynak gösterme zorunlu olursa güven artar.", manager: false },
      { user: "Can Koç", body: "İK bütçesiyle pilot hazırlığına başladık.", manager: true },
      { user: "Mert Yılmaz", body: "Uyum ekiplerinin de onay vermesi gerekiyor.", manager: false }
    ],
    tags: ["AI", "İK", "Onboarding", "Çalışan Deneyimi"],
    createdAt: "2026-05-23"
  },
  {
    id: "idea-3",
    title: "Müşteri şikayetlerinin departmanlara otomatik sınıflandırılması",
    summary: "Şikayet metinlerini konu, risk ve ilgili departmana göre önceliklendiren iş akışı.",
    problem: "Müşteri şikayetleri farklı kanallardan geliyor ve doğru ekibe yönlenmesi gecikebiliyor.",
    solution: "NLP tabanlı sınıflandırma, güven skoruyla birlikte çağrı merkezi ve operasyon ekiplerine öneri sunabilir.",
    type: "Süreç otomasyonu",
    company: "İşBank Sigorta",
    department: "Müşteri Deneyimi",
    location: "Antalya Operasyon Merkezi",
    city: "Antalya",
    authorId: "u1",
    authorLabel: "Ayşe Yılmaz",
    anonymity: "İsmimle paylaş",
    visibility: "İlgili departmanlar",
    status: "new",
    estimatedImpact: "Çok yüksek",
    estimatedCost: "Orta",
    implementationTime: "3 ay",
    successMetric: "İlk yanıt süresi ve doğru departmana yönlenme oranı",
    riskNotes: "Hatalı sınıflandırma için insan onayı korunmalı.",
    communityScore: 72,
    strategicScore: 83,
    aiScore: 89,
    credits: 96,
    supporters: 24,
    comments: [
      { user: "Mehmet Demir", body: "Veri etiketleme süreci için dış destek alabiliriz.", manager: false },
      { user: "Ayşe Yılmaz", body: "Antalya ekibi olarak veri setini hazırlamaya hazırız.", manager: false },
      { user: "Elif Şahin", body: "Mevcut CRM entegrasyonu incelenmeli.", manager: false }
    ],
    tags: ["Müşteri Deneyimi", "Otomasyon", "Risk", "AI"],
    createdAt: "2026-05-31"
  },
  {
    id: "idea-4",
    title: "Backend ekibinden gelen frontend performans iyileştirme önerisi",
    summary: "Kritik ekranlarda yüklenme süresini azaltmak için paket bölme ve cache stratejisi.",
    problem: "Operasyon panelleri özellikle bölge yoğunluğunda geç yükleniyor.",
    solution: "Rota bazlı kod bölme, önbellek politikaları ve tablo sanallaştırma ile deneyim iyileştirilebilir.",
    type: "Teknik geliştirme",
    company: "İşBank Teknoloji",
    department: "Yazılım Geliştirme",
    location: "İstanbul Genel Müdürlük",
    city: "İstanbul",
    authorId: "u3",
    authorLabel: "Anonim Yazılım Ekibi Üyesi",
    anonymity: "Tam anonim",
    visibility: "Şirket içi",
    status: "review",
    estimatedImpact: "Orta",
    estimatedCost: "Düşük",
    implementationTime: "1 ay",
    successMetric: "Core Web Vitals ve ekran açılış süresi",
    riskNotes: "Regresyon testi planlanmalı.",
    communityScore: 64,
    strategicScore: 71,
    aiScore: 82,
    credits: 74,
    supporters: 19,
    comments: [
      { user: "Emir Arslan", body: "API response cache için de küçük bir ek paket açabiliriz.", manager: false },
      { user: "Mustafa Kaya", body: "Süreç planlama ekibiyle paylaşıldı.", manager: true }
    ],
    tags: ["Teknoloji", "Performans", "Düşük Maliyet"],
    createdAt: "2026-05-20"
  },
  {
    id: "idea-5",
    title: "Şube içi müşteri yönlendirme ekranlarının sadeleştirilmesi",
    summary: "Sıra ve işlem yönlendirme ekranlarında daha anlaşılır görsel hiyerarşi kullanılmalı.",
    problem: "Müşteriler hangi gişeye gideceğini anlamakta zorlanıyor, çalışanlara tekrar soru geliyor.",
    solution: "Renk, ikon ve işlem adı sadeleştirilerek tüm şubelerde standart bir ekran şablonu kullanılabilir.",
    type: "Müşteri deneyimi",
    company: "İşBank Sigorta",
    department: "Müşteri Deneyimi",
    location: "İzmir Şube",
    city: "İzmir",
    authorId: "u1",
    authorLabel: "Anonim İstanbul Lokasyonu",
    anonymity: "İsim gizli, departman görünür",
    visibility: "Şirket içi",
    status: "done",
    estimatedImpact: "Orta",
    estimatedCost: "Düşük",
    implementationTime: "1 ay",
    successMetric: "Danışma masası yönlendirme soruları",
    riskNotes: "Erişilebilirlik kontrastı korunmalı.",
    communityScore: 91,
    strategicScore: 73,
    aiScore: 87,
    credits: 166,
    supporters: 44,
    comments: [
      { user: "Burak Kaya", body: "İzmir pilotu son derece başarılı geçti, tüm şubelere yaygınlaştırıyoruz.", manager: true },
      { user: "Deniz Çetin", body: "Uygulaması çok kolay ama etkisi yüksek bir çalışma oldu.", manager: false }
    ],
    tags: ["Şube", "Müşteri Deneyimi", "Uygulandı"],
    createdAt: "2026-05-10"
  },
  {
    id: "idea-6",
    title: "Evrak onay süreçlerini kısaltacak dijital akış önerisi",
    summary: "Manuel imza bekleyen operasyon adımları için kontrollü dijital onay süreci.",
    problem: "Kağıt evrak onayları bölge ve şube arasında gecikmeye neden oluyor.",
    solution: "Yetki matrisiyle uyumlu dijital onay akışı ve audit log ile işlem süresi azaltılabilir.",
    type: "Süreç otomasyonu",
    company: "İşBank Holding",
    department: "Operasyon",
    location: "Ankara Bölge",
    city: "Ankara",
    authorId: "u4",
    authorLabel: "Kerem Yıldız",
    anonymity: "İsmimle paylaş",
    visibility: "Holding geneli",
    status: "pilot",
    estimatedImpact: "Çok yüksek",
    estimatedCost: "Yüksek",
    implementationTime: "6 ay",
    successMetric: "Onay çevrim süresi",
    riskNotes: "Uyum ve elektronik imza gereklilikleri kontrol edilmeli.",
    communityScore: 83,
    strategicScore: 92,
    aiScore: 88,
    credits: 131,
    supporters: 35,
    comments: [
      { user: "Mustafa Kaya", body: "Pilot süreci için Ankara Bölge seçildi.", manager: true },
      { user: "Ebru Aksoy", body: "Elektronik imza uyumluluğu kontrol edildi, onaylandı.", manager: false }
    ],
    tags: ["Operasyon", "Uyum", "Dijital Akış"],
    createdAt: "2026-05-16"
  },
  {
    id: "idea-7",
    title: "Çağrı merkezi yoğunluk tahmini paneli",
    summary: "Gün içi yoğunluğu tahmin ederek ekip liderlerine vardiya ve mola önerisi sunan panel.",
    problem: "Beklenmeyen yoğunluklarda yanıt süresi yükseliyor.",
    solution: "Geçmiş çağrı hacmi, kampanya takvimi ve hava durumu gibi sinyallerle kısa vadeli tahmin yapılabilir.",
    type: "Operasyonel iyileştirme",
    company: "İşBank Sigorta",
    department: "Veri Analitiği",
    location: "Antalya Operasyon Merkezi",
    city: "Antalya",
    authorId: "u1",
    authorLabel: "Duru Aksoy",
    anonymity: "İsmimle paylaş",
    visibility: "Şirket içi",
    status: "new",
    estimatedImpact: "Yüksek",
    estimatedCost: "Orta",
    implementationTime: "3 ay",
    successMetric: "Ortalama yanıt süresi",
    riskNotes: "Tahmin doğruluğu düşük günlerde manuel plan korunmalı.",
    communityScore: 75,
    strategicScore: 81,
    aiScore: 86,
    credits: 84,
    supporters: 21,
    comments: [
      { user: "Hüseyin Çelik", body: "Veri seti için son 3 yılın çağrı kayıtları yüklendi.", manager: false },
      { user: "Ayşe Öztürk", body: "Kampanya verilerini İletişim departmanından çekebiliriz.", manager: false }
    ],
    tags: ["Veri Analitiği", "Çağrı Merkezi", "Planlama"],
    createdAt: "2026-05-27"
  },
  {
    id: "idea-8",
    title: "Düşük maliyetli enerji tasarrufu önerileri",
    summary: "Şube ve mağaza lokasyonlarında tüketim eşiklerine göre uygulanacak hızlı kazanımlar.",
    problem: "Enerji tüketimi lokasyonlar arasında farklılaşıyor ve küçük önlemler merkezi görünmüyor.",
    solution: "Aydınlatma saatleri, iklimlendirme eşikleri ve kapanış kontrol listesi tek takip ekranında toplanabilir.",
    type: "Sürdürülebilirlik",
    company: "İşBank Holding",
    department: "Destek Hizmetleri",
    location: "İstanbul Genel Müdürlük",
    city: "İstanbul",
    authorId: "u2",
    authorLabel: "Anonim Çalışan",
    anonymity: "Tam anonim",
    visibility: "Holding geneli",
    status: "new",
    estimatedImpact: "Orta",
    estimatedCost: "Düşük",
    implementationTime: "Hemen denenebilir",
    successMetric: "Lokasyon başına aylık enerji tüketimi",
    riskNotes: "Müşteri konforu ve operasyon saatleri etkilenmemeli.",
    communityScore: 69,
    strategicScore: 76,
    aiScore: 84,
    credits: 62,
    supporters: 17,
    comments: [
      { user: "Can Koç", body: "Saha ekiplerine duyuru olarak yayınlayalım.", manager: true },
      { user: "Zeynep Demir", body: "Kapanış kontrol listesini mobil uygulamaya entegre edelim.", manager: false }
    ],
    tags: ["Sürdürülebilirlik", "Maliyet Azaltma", "Hızlı Kazanım"],
    createdAt: "2026-06-01"
  },
  {
    id: "idea-9",
    title: "Moka ödeme geçidi entegrasyonu hata bildirim otomasyonu",
    summary: "Ödeme süreçlerinde yaşanan kesintileri anında tespit eden Slack ve e-posta entegrasyonu.",
    problem: "Ödeme geçidindeki anlık hatalar geç fark ediliyor, ciro kaybı oluşuyor.",
    solution: "Hata oranları belirlenen eşiği aştığında nöbetçi mühendise otomatik çağrı atanabilir.",
    type: "Süreç otomasyonu",
    company: "Moka Ödeme Kuruluşu",
    department: "Teknik Operasyon",
    location: "İstanbul Ofis",
    city: "İstanbul",
    authorId: "u3",
    authorLabel: "Mustafa Kaya",
    anonymity: "İsmimle paylaş",
    visibility: "Şirket içi",
    status: "review",
    estimatedImpact: "Yüksek",
    estimatedCost: "Düşük",
    implementationTime: "2 hafta",
    successMetric: "Hata fark etme süresinin 15 dakikadan 1 dakikaya inmesi",
    riskNotes: "Gereksiz bildirimlerin önüne geçmek için alarm eşikleri hassas ayarlanmalı.",
    communityScore: 88,
    strategicScore: 85,
    aiScore: 92,
    credits: 145,
    supporters: 32,
    comments: [
      { user: "Zeynep Demir", body: "Sistem ekibiyle entegrasyonu konuştuk, altyapı hazır.", manager: false },
      { user: "Mustafa Kaya", body: "İlk aşamada yalnızca kritik API kodlarını izleyeceğiz.", manager: false }
    ],
    tags: ["Moka", "Otomasyon", "API", "Hata İzleme"],
    createdAt: "2026-06-02"
  },
  {
    id: "idea-10",
    title: "Şişecam üretim hatlarında IoT tabanlı ısı takibi",
    summary: "Cam eritme fırınlarında sıcaklık dalgalanmalarını anlık takip ederek fire oranını düşüren sistem.",
    problem: "Sıcaklık değişimlerinin geç fark edilmesi nedeniyle cam kalitesinde bozulmalar yaşanıyor.",
    solution: "Fırın çıkışlarına yerleştirilecek termal sensörler ile merkezi bir izleme ekranı tasarlanabilir.",
    type: "Teknik geliştirme",
    company: "Şişecam Kimyasallar",
    department: "Üretim ve Ar-Ge",
    location: "Mersin Fabrikası",
    city: "Mersin",
    authorId: "u4",
    authorLabel: "Anonim Üretim Mühendisi",
    anonymity: "İsim gizli, rol görünür",
    visibility: "Holding geneli",
    status: "pilot",
    estimatedImpact: "Çok yüksek",
    estimatedCost: "Yüksek",
    implementationTime: "4 ay",
    successMetric: "Üretim fire oranında %15 azalma",
    riskNotes: "Yüksek ısıya dayanıklı sensörlerin temin süreci takip edilmeli.",
    communityScore: 82,
    strategicScore: 90,
    aiScore: 86,
    credits: 158,
    supporters: 36,
    comments: [
      { user: "Hüseyin Çelik", body: "Mersin fabrikasında 3. fırını pilot için ayırabiliriz.", manager: true },
      { user: "Ahmet Yılmaz", body: "Sensör tedariği için satın alma süreci başlatıldı.", manager: false }
    ],
    tags: ["Şişecam", "IoT", "Verimlilik", "Üretim"],
    createdAt: "2026-06-03"
  },
  {
    id: "idea-11",
    title: "TSKB yeşil finansman projeleri raporlama portalı",
    summary: "Karbon emisyonu azaltımı hedefleyen projelerin sürdürülebilirlik metriklerini izleyen portal.",
    problem: "Müşterilerin yeşil kredi raporlarını manuel hazırlaması zaman alıyor.",
    solution: "Enerji ve atık verilerini API üzerinden sisteme yükleyip otomatik grafik üreten portal kurulabilir.",
    type: "Sürdürülebilirlik",
    company: "TSKB",
    department: "Yeşil Bankacılık",
    location: "İstanbul Genel Müdürlük",
    city: "İstanbul",
    authorId: "u5",
    authorLabel: "Deniz Çetin",
    anonymity: "İsmimle paylaş",
    visibility: "Şirket içi",
    status: "new",
    estimatedImpact: "Yüksek",
    estimatedCost: "Orta",
    implementationTime: "3 ay",
    successMetric: "Müşteri raporlama süresinin %50 kısalması",
    riskNotes: "Verilerin doğruluğunu teyit edecek onay mekanizması eklenmeli.",
    communityScore: 78,
    strategicScore: 88,
    aiScore: 85,
    credits: 110,
    supporters: 26,
    comments: [
      { user: "Ebru Aksoy", body: "Sürdürülebilirlik hedeflerimiz için harika bir kazanım.", manager: false },
      { user: "Can Koç", body: "Geliştirici ekiple analiz toplantısını planlıyorum.", manager: true }
    ],
    tags: ["TSKB", "Sürdürülebilirlik", "Yeşil Finans", "Portal"],
    createdAt: "2026-06-04"
  },
  {
    id: "idea-12",
    title: "Anadolu Hayat emeklilik planı başvuru süreci optimizasyonu",
    summary: "BES başvuru ekranlarındaki adımların azaltılarak dijital satış dönüşüm oranının artırılması.",
    problem: "Çok fazla form alanı olması sebebiyle kullanıcılar başvuru sürecini yarıda bırakıyor.",
    solution: "E-devlet entegrasyonu ile kimlik ve adres bilgilerinin otomatik çekilmesi sağlanabilir.",
    type: "Müşteri deneyimi",
    company: "Anadolu Hayat Emeklilik",
    department: "Dijital Satış Kanalları",
    location: "İstanbul Ofis",
    city: "İstanbul",
    authorId: "u1",
    authorLabel: "Anonim Ürün Yöneticisi",
    anonymity: "İsim gizli, departman görünür",
    visibility: "Şirket içi",
    status: "review",
    estimatedImpact: "Yüksek",
    estimatedCost: "Orta",
    implementationTime: "2 ay",
    successMetric: "Satış hunisi dönüşüm oranında %8 artış",
    riskNotes: "KVKK izin süreçleri ve e-devlet entegrasyon API limitleri incelenmeli.",
    communityScore: 84,
    strategicScore: 81,
    aiScore: 89,
    credits: 125,
    supporters: 29,
    comments: [
      { user: "Elif Şahin", body: "Kullanıcı deneyimi test ekibi analize başladı.", manager: false },
      { user: "Mustafa Kaya", body: "Özellikle mobil web sitesinde adımları 3'e indirmeliyiz.", manager: true }
    ],
    tags: ["Anadolu Hayat", "UX", "Dönüşüm", "BES"],
    createdAt: "2026-06-05"
  },
  {
    id: "idea-13",
    title: "İşNet üzerinden Moka API entegrasyonu performans iyileştirmesi",
    summary: "İşNet altyapısındaki ödeme sorgu gecikmelerini düşürmek için ağ geçidi optimizasyonu.",
    problem: "Ödeme onay süreleri İşNet ağ geçidi trafiği yoğun olduğunda 3 saniyenin üzerine çıkıyor.",
    solution: "Moka API istekleri için öncelikli kuyruk (QoS) ve dinamik yönlendirme tanımlanabilir.",
    type: "Teknik geliştirme",
    company: "İşNet",
    department: "Altyapı ve Ağ Yönetimi",
    location: "Ankara Veri Merkezi",
    city: "Ankara",
    authorId: "u2",
    authorLabel: "Ebru Aksoy",
    anonymity: "İsmimle paylaş",
    visibility: "Şirket içi",
    status: "pilot",
    estimatedImpact: "Orta",
    estimatedCost: "Düşük",
    implementationTime: "1 ay",
    successMetric: "Ortalama ağ gecikmesinde %40 düşüş",
    riskNotes: "Ağ kuralları güncellenirken diğer servislerin etkilenmemesi gerekir.",
    communityScore: 71,
    strategicScore: 79,
    aiScore: 83,
    credits: 90,
    supporters: 18,
    comments: [
      { user: "Deniz Çetin", body: "Ankara ekibi test ortamında kural değişikliklerini başlattı.", manager: false },
      { user: "Burak Kaya", body: "Müşteriler için anında fark edilecek bir performans artışı olacaktır.", manager: true }
    ],
    tags: ["İşNet", "Moka", "Altyapı", "Performans"],
    createdAt: "2026-06-06"
  },
  {
    id: "idea-14",
    title: "Yoğun şubelerde evrak tarama işlemlerinin akıllandırılması",
    summary: "OCR ve AI ile taranan evrakların içeriğine göre otomatik isimlendirilip arşive gönderilmesi.",
    problem: "Şube çalışanları evrakları manuel sınıflandırıp isimlendirirken zaman kaybediyor.",
    solution: "Tarayıcı yazılımına eklenecek bir yapay zeka modülü evrak türünü tanıyabilir.",
    type: "Süreç otomasyonu",
    company: "İşBank Perakende Operasyonları",
    department: "Şube Operasyonları",
    location: "İstanbul Kadıköy Şubesi",
    city: "İstanbul",
    authorId: "u3",
    authorLabel: "Anonim Şube Yetkilisi",
    anonymity: "İsim gizli, rol görünür",
    visibility: "Holding geneli",
    status: "new",
    estimatedImpact: "Yüksek",
    estimatedCost: "Orta",
    implementationTime: "3 ay",
    successMetric: "Şube başına günlük evrak işleme süresinde 40 dakika tasarruf",
    riskNotes: "Tarama kalitesinin düşük olduğu evraklar için manuel onay ekranı korunmalı.",
    communityScore: 89,
    strategicScore: 82,
    aiScore: 90,
    credits: 162,
    supporters: 41,
    comments: [
      { user: "Hüseyin Çelik", body: "Şube çalışanlarımızın iş yükünü azaltacak harika bir fikir.", manager: true },
      { user: "Ahmet Yılmaz", body: "Yapay zeka modellerinin Türkçe metin performansı test ediliyor.", manager: false }
    ],
    tags: ["Operasyon", "Şube", "OCR", "Yapay Zeka"],
    createdAt: "2026-06-07"
  },
  {
    id: "idea-15",
    title: "Müşteri çağrı ses kayıtlarının AI ile duygu analizi",
    summary: "Çağrı sonlarında müşterinin ses tonundan memnuniyetsizlik düzeyini tahmin eden yazılım.",
    problem: "Kalite değerlendirme ekipleri günde sadece sınırlı sayıda çağrıyı dinleyebiliyor.",
    solution: "Tüm çağrılar arka planda ses analiz modelinden geçirilerek riskli olanlar ekibe iletilebilir.",
    type: "Müşteri deneyimi",
    company: "Anadolu Hayat Emeklilik",
    department: "Müşteri Hizmetleri",
    location: "İstanbul Ofis",
    city: "İstanbul",
    authorId: "u4",
    authorLabel: "Anonim Müşteri Temsilcisi",
    anonymity: "İsim gizli, rol görünür",
    visibility: "Şirket içi",
    status: "new",
    estimatedImpact: "Orta",
    estimatedCost: "Orta",
    implementationTime: "3 ay",
    successMetric: "Müşteri geri dönüş hızında %25 artış",
    riskNotes: "Müşteri ses verisi analizi için yasal onaylar alınmalı.",
    communityScore: 74,
    strategicScore: 78,
    aiScore: 85,
    credits: 104,
    supporters: 22,
    comments: [
      { user: "Elif Şahin", body: "Köpük durumdaki şikayetleri erken tespit etmek için çok değerli.", manager: false },
      { user: "Can Koç", body: "Çağrı merkezi sistem sağlayıcısı ile entegrasyonu görüşeceğiz.", manager: true }
    ],
    tags: ["Anadolu Hayat", "Çağrı Merkezi", "Yapay Zeka", "Müşteri"],
    createdAt: "2026-06-07"
  },
  {
    id: "idea-16",
    title: "Tuzla veri merkezi enerji tüketimi izleme gösterge paneli",
    summary: "Veri merkezindeki sunucu kabinlerinin anlık güç tüketimi ve PUE değerlerini gösteren panel.",
    problem: "Hangi kabinlerin aşırı enerji harcadığı veya verimsiz soğutulduğu merkezi olarak izlenemiyor.",
    solution: "Akıllı PDU sensör verileri Grafana üzerinde haritalandırılarak optimizasyon yapılabilir.",
    type: "Sürdürülebilirlik",
    company: "İşNet",
    department: "Veri Merkezi Operasyonları",
    location: "Tuzla Veri Merkezi",
    city: "İstanbul",
    authorId: "u5",
    authorLabel: "Zeynep Demir",
    anonymity: "İsmimle paylaş",
    visibility: "Şirket içi",
    status: "pilot",
    estimatedImpact: "Yüksek",
    estimatedCost: "Orta",
    implementationTime: "2 ay",
    successMetric: "Veri merkezi PUE oranının 1.45'ten 1.35'e düşürülmesi",
    riskNotes: "Sensör montajları sırasında kabin elektrik hatlarında kesinti olmamasına dikkat edilmeli.",
    communityScore: 81,
    strategicScore: 86,
    aiScore: 88,
    credits: 138,
    supporters: 30,
    comments: [
      { user: "Mustafa Kaya", body: "PUE hedeflerimize ulaşmak için çok kritik bir izleme projesi.", manager: true },
      { user: "Ebru Aksoy", body: "İlk aşamada sadece A blok kabinlerini izlemeye alıyoruz.", manager: false }
    ],
    tags: ["İşNet", "Veri Merkezi", "Enerji", "Grafana"],
    createdAt: "2026-06-07"
  },
  {
    id: "idea-17",
    title: "İşBank AG şubeleri arası evrak lojistiği takibi",
    summary: "Almanya içindeki şubeler arası fiziki evrak gönderimlerini dijital barkodla izleyen sistem.",
    problem: "Şubeler arası gönderilen fiziki dosyaların kargo durumları merkezi olarak takip edilemiyor.",
    solution: "Kurum içi portalda basit bir barkod okuyucu ve teslimat loglama modülü geliştirilebilir.",
    type: "Operasyonel iyileştirme",
    company: "İşBank AG",
    department: "Şube Dışı Operasyon",
    location: "Frankfurt Merkez",
    city: "Frankfurt",
    authorId: "u1",
    authorLabel: "Ahmet Yılmaz",
    anonymity: "İsmimle paylaş",
    visibility: "Şirket içi",
    status: "new",
    estimatedImpact: "Orta",
    estimatedCost: "Düşük",
    implementationTime: "1 ay",
    successMetric: "Kayıp evrak oranının sıfıra indirilmesi",
    riskNotes: "Barkod okuyucuların el terminalleriyle entegrasyonu test edilmeli.",
    communityScore: 68,
    strategicScore: 73,
    aiScore: 80,
    credits: 72,
    supporters: 15,
    comments: [
      { user: "Burak Kaya", body: "Frankfurt ve Berlin şubeleri arasında hızlıca test edebiliriz.", manager: true },
      { user: "Ahmet Yılmaz", body: "Altyapı gereksinimi minimum düzeyde, hemen başlayabiliriz.", manager: false }
    ],
    tags: ["İşBank AG", "Operasyon", "Lojistik", "Barkod"],
    createdAt: "2026-06-07"
  },
  {
    id: "idea-18",
    title: "Çalışan yan hakları seçim portalı mobil uygulaması",
    summary: "Çalışanların yan hak paketlerini mobil telefonlarından esnetip seçebileceği uygulama.",
    problem: "Yan hak seçimleri yılda bir kez web portalından yapılıyor ve mobil erişim bulunmuyor.",
    solution: "İK portalındaki mevcut yan haklar modülünü responsive mobil görünüme kavuşturabiliriz.",
    type: "Çalışan deneyimi",
    company: "İşBank Holding",
    department: "İnsan Kaynakları",
    location: "İstanbul Genel Müdürlük",
    city: "İstanbul",
    authorId: "u2",
    authorLabel: "Anonim İK Uzmanı",
    anonymity: "İsim gizli, rol görünür",
    visibility: "Holding geneli",
    status: "review",
    estimatedImpact: "Yüksek",
    estimatedCost: "Orta",
    implementationTime: "2 ay",
    successMetric: "Çalışan memnuniyet anketinde yan haklar skoru artışı",
    riskNotes: "Sigorta şirketleri API entegrasyon terminlerinin mobile uyumlu hale getirilmesi.",
    communityScore: 85,
    strategicScore: 80,
    aiScore: 87,
    credits: 130,
    supporters: 33,
    comments: [
      { user: "Zeynep Demir", body: "İK olarak çalışanlarımızdan bu yönde çok talep alıyorduk.", manager: false },
      { user: "Mustafa Kaya", body: "Geliştirme takvimine alındı.", manager: true }
    ],
    tags: ["İK", "Çalışan Deneyimi", "Mobil", "Portal"],
    createdAt: "2026-06-07"
  },
  {
    id: "idea-19",
    title: "Saha ekipleri için mobil cihaz envanteri yönetim sistemi",
    summary: "Satış ve teknik saha ekiplerinin tablet/telefon envanterini QR kodla takip eden sistem.",
    problem: "Cihaz devir teslimleri manuel kağıt formlarla yapılıyor, zimmet takibi zorlaşıyor.",
    solution: "Saha yöneticilerinin kullanabileceği, QR kod okuyuculu basit bir mobil zimmet ekranı.",
    type: "Maliyet azaltma",
    company: "İşNet",
    department: "Saha Operasyon Destek",
    location: "İzmir Bölge",
    city: "İzmir",
    authorId: "u3",
    authorLabel: "Deniz Çetin",
    anonymity: "İsmimle paylaş",
    visibility: "Şirket içi",
    status: "new",
    estimatedImpact: "Orta",
    estimatedCost: "Düşük",
    implementationTime: "3 hafta",
    successMetric: "Kayıp/çalıntı cihaz oranında %90 azalma",
    riskNotes: "Zimmet loglarının veritabanında güvenli şekilde saklanması gerekmektedir.",
    communityScore: 72,
    strategicScore: 75,
    aiScore: 81,
    credits: 78,
    supporters: 19,
    comments: [
      { user: "Ebru Aksoy", body: "İzmir ekibi olarak bu sistemin eksikliğini çok hissediyorduk.", manager: false },
      { user: "Hüseyin Çelik", body: "Uygulaması çok pratik, destekliyorum.", manager: true }
    ],
    tags: ["İşNet", "Envanter", "QR Kod", "Maliyet"],
    createdAt: "2026-06-07"
  },
  {
    id: "idea-20",
    title: "Kurum içi API dokümantasyon portalı (Swagger entegrasyonlu)",
    summary: "Holding iştirakleri arasındaki yazılım entegrasyonlarını hızlandıracak ortak API kataloğu.",
    problem: "Farklı şirketlerin yazılım ekipleri birbirlerinin servislerini ve parametrelerini tanımıyor.",
    solution: "Tüm iştiraklerin API Swagger çıktılarını tek bir güvenli portalda birleştirebiliriz.",
    type: "Teknik geliştirme",
    company: "İşBank Teknoloji",
    department: "Yazılım Mimarisi",
    location: "İstanbul Tuzla Kampüsü",
    city: "İstanbul",
    authorId: "u4",
    authorLabel: "Anonim Yazılım Mimarı",
    anonymity: "İsim gizli, rol görünür",
    visibility: "Holding geneli",
    status: "pilot",
    estimatedImpact: "Yüksek",
    estimatedCost: "Orta",
    implementationTime: "3 ay",
    successMetric: "İştirakler arası entegrasyon sürelerinde %30 kısalma",
    riskNotes: "Yetkilendirme mekanizması çok hassas kurulmalı, API detayları sızmamalı.",
    communityScore: 80,
    strategicScore: 87,
    aiScore: 91,
    credits: 148,
    supporters: 35,
    comments: [
      { user: "Can Koç", body: "Güvenlik standartlarını belirlemek için BT Güvenlik ile görüşelim.", manager: true },
      { user: "Zeynep Demir", body: "Moka API'lerini bu kataloğa yüklemeye hazırız.", manager: false }
    ],
    tags: ["Teknoloji", "API", "Swagger", "Entegrasyon"],
    createdAt: "2026-06-07"
  },
  {
    id: "idea-21",
    title: "Moka üye işyeri onboarding sürecinin kısaltılması",
    summary: "Üye işyerlerinin başvuru belgelerini yapay zeka ile kontrol edip onay süresini kısaltan akış.",
    problem: "Evrak kontrolleri manuel yapıldığı için üye işyeri aktivasyonları 2-3 gün sürüyor.",
    solution: "Vergi levhası ve imza sirkülerini otomatik kontrol eden OCR doğrulama servisi.",
    type: "Müşteri deneyimi",
    company: "Moka Ödeme Kuruluşu",
    department: "Risk ve Uyum",
    location: "İstanbul Ofis",
    city: "İstanbul",
    authorId: "u5",
    authorLabel: "Anonim Risk Analisti",
    anonymity: "İsim gizli, departman görünür",
    visibility: "Şirket içi",
    status: "new",
    estimatedImpact: "Çok yüksek",
    estimatedCost: "Orta",
    implementationTime: "2 ay",
    successMetric: "Onboarding süresinin 48 saatten 2 saate indirilmesi",
    riskNotes: "Mevzuat gereği son kararın yine bir uyum uzmanı tarafından verilmesi gerekir.",
    communityScore: 87,
    strategicScore: 89,
    aiScore: 93,
    credits: 168,
    supporters: 42,
    comments: [
      { user: "Mustafa Kaya", body: "Moka için operasyonel mükemmellik sağlayacak bir proje.", manager: true },
      { user: "Ahmet Yılmaz", body: "OCR doğruluk oranlarını test etmeye başladık.", manager: false }
    ],
    tags: ["Moka", "Müşteri Deneyimi", "Uyum", "OCR"],
    createdAt: "2026-06-07"
  },
  {
    id: "idea-22",
    title: "TSKB sürdürülebilir fon dağıtım algoritması",
    summary: "Sürdürülebilirlik skoru yüksek şirketlere öncelik veren otomatik portföy optimizasyonu.",
    problem: "Fon dağıtımları yapılırken ESG kriterleri manuel hesaplanıyor ve hata payı yüksek.",
    solution: "Şirketlerin karbon salınımı, cinsiyet eşitliği gibi verilerini analiz eden puanlama modeli.",
    type: "Operasyonel iyileştirme",
    company: "TSKB",
    department: "Hazine ve Yatırım",
    location: "İstanbul Genel Müdürlük",
    city: "İstanbul",
    authorId: "u1",
    authorLabel: "Anonim Yatırım Analisti",
    anonymity: "İsim gizli, rol görünür",
    visibility: "Şirket içi",
    status: "new",
    estimatedImpact: "Yüksek",
    estimatedCost: "Düşük",
    implementationTime: "1 ay",
    successMetric: "ESG uyumlu portföy oranının %20 artması",
    riskNotes: "Algoritmanın finansal getiri üzerindeki etkisi simüle edilmeli.",
    communityScore: 76,
    strategicScore: 84,
    aiScore: 88,
    credits: 98,
    supporters: 23,
    comments: [
      { user: "Deniz Çetin", body: "Sürdürülebilir kalkınma hedeflerimizle son derece uyumlu.", manager: false },
      { user: "Burak Kaya", body: "Finansal getiriden ödün vermeyecek şekilde kısıtlar eklenmeli.", manager: true }
    ],
    tags: ["TSKB", "Yatırım", "ESG", "Algoritma"],
    createdAt: "2026-06-07"
  },
  {
    id: "idea-23",
    title: "Şişecam lojistik planlama yapay zeka asistanı",
    summary: "Fabrikalardan limanlara konteyner sevkiyat rotalarını optimize eden yapay zeka.",
    problem: "Konteyner rezervasyonları ve tır rotaları dinamik değişiyor, gecikme maliyeti artıyor.",
    solution: "Liman doluluk oranları ve hava durumunu takip eden akıllı rota planlayıcı asistan.",
    type: "Operasyonel iyileştirme",
    company: "Şişecam Dış Ticaret",
    department: "Lojistik Planlama",
    location: "Tuzla Ofis",
    city: "İstanbul",
    authorId: "u2",
    authorLabel: "Hüseyin Çelik",
    anonymity: "İsmimle paylaş",
    visibility: "Holding geneli",
    status: "review",
    estimatedImpact: "Çok yüksek",
    estimatedCost: "Yüksek",
    implementationTime: "4 ay",
    successMetric: "Aylık lojistik gecikme cezalarında %18 tasarruf",
    riskNotes: "Liman API'lerinin veri aktarım sıklığı doğrulanmalı.",
    communityScore: 83,
    strategicScore: 88,
    aiScore: 89,
    credits: 140,
    supporters: 31,
    comments: [
      { user: "Mustafa Kaya", body: "Şişecam'ın küresel sevkiyat hacmi düşünüldüğünde devasa bir tasarruf potansiyeli var.", manager: true },
      { user: "Ebru Aksoy", body: "İlk aşamada Ambarlı limanı sevkiyatlarını test edeceğiz.", manager: false }
    ],
    tags: ["Şişecam", "Lojistik", "AI", "Optimizasyon"],
    createdAt: "2026-06-07"
  },
  {
    id: "idea-24",
    title: "Ortak çalışma alanlarında akıllı dolap sistemi",
    summary: "Mobil uygulama üzerinden boş dolapların rezerve edilmesini sağlayan QR kodlu dolap sistemi.",
    problem: "Kampüs içi ortak alanlarda çalışanlar eşyalarını bırakacak boş dolap bulamıyor.",
    solution: "Mevcut dolap kilitlerine takılacak akıllı Bluetooth aparatlar ve basit bir rezervasyon paneli.",
    type: "Çalışan deneyimi",
    company: "İşBank Holding",
    department: "Destek Hizmetleri",
    location: "İstanbul Tuzla Kampüsü",
    city: "İstanbul",
    authorId: "u3",
    authorLabel: "Zeynep Demir",
    anonymity: "İsmimle paylaş",
    visibility: "Holding geneli",
    status: "new",
    estimatedImpact: "Orta",
    estimatedCost: "Düşük",
    implementationTime: "1 ay",
    successMetric: "Çalışan memnuniyet anketinde kampüs içi imkanlar skoru",
    riskNotes: "Dolapların uzun süre rezerve edilip kullanılmamasını önleyecek otomatik iptal süresi konmalı.",
    communityScore: 79,
    strategicScore: 72,
    aiScore: 84,
    credits: 82,
    supporters: 20,
    comments: [
      { user: "Ahmet Yılmaz", body: "Tuzla kampüsünde hemen denemeye başlayabiliriz.", manager: false },
      { user: "Can Koç", body: "Destek Hizmetleri ekibi bütçe onayını verdi.", manager: true }
    ],
    tags: ["Çalışan Deneyimi", "Kampüs", "IoT", "Dolap"],
    createdAt: "2026-06-07"
  },
  {
    id: "idea-25",
    title: "İşNet ağ geçidi siber güvenlik ihlal uyarı sistemi",
    summary: "Ağ trafiğindeki şüpheli veri çıkışlarını makine öğrenmesi ile anında tespit eden sistem.",
    problem: "Geleneksel kurallı güvenlik sistemleri yeni nesil siber saldırıları tespit etmekte gecikiyor.",
    solution: "Ağ anomalilerini gerçek zamanlı öğrenen ve alarm üreten hafif bir model entegre edilebilir.",
    type: "Teknik geliştirme",
    company: "İşNet",
    department: "Siber Güvenlik Operasyon",
    location: "Ankara Veri Merkezi",
    city: "Ankara",
    authorId: "u4",
    authorLabel: "Anonim Güvenlik Analisti",
    anonymity: "İsim gizli, rol görünür",
    visibility: "Şirket içi",
    status: "pilot",
    estimatedImpact: "Çok yüksek",
    estimatedCost: "Yüksek",
    implementationTime: "5 ay",
    successMetric: "Kritik ihlal alarm sürelerinin 2 saatten 5 saniyeye düşmesi",
    riskNotes: "Yanlış alarmların (false positive) engellenmesi için model ilk 3 ay pasif izlemede kalmalı.",
    communityScore: 78,
    strategicScore: 91,
    aiScore: 92,
    credits: 135,
    supporters: 28,
    comments: [
      { user: "Ebru Aksoy", body: "Güvenlik altyapımız için çok önemli bir adım.", manager: false },
      { user: "Burak Kaya", body: "BT Altyapı ekibiyle koordineli ilerliyoruz.", manager: true }
    ],
    tags: ["İşNet", "Siber Güvenlik", "Yapay Zeka", "Altyapı"],
    createdAt: "2026-06-07"
  },
  {
    id: "idea-26",
    title: "Yapay zeka ile sözleşme risk analizi modülü",
    summary: "Hukuk departmanına gelen sözleşme taslaklarını tarayarak riskli maddeleri işaretleyen AI.",
    problem: "Sözleşme inceleme süreçleri uzun sürüyor, satın alma ve operasyon süreçleri tıkanıyor.",
    solution: "Geçmiş davalar ve kurum politikalarına göre sözleşmedeki cezai şart ve gizlilik maddelerini inceleyen model.",
    type: "Süreç otomasyonu",
    company: "İşBank Holding",
    department: "Hukuk Müşavirliği",
    location: "İstanbul Genel Müdürlük",
    city: "İstanbul",
    authorId: "u5",
    authorLabel: "Anonim Hukuk Müşaviri",
    anonymity: "İsim gizli, departman görünür",
    visibility: "İlgili departmanlar",
    status: "new",
    estimatedImpact: "Yüksek",
    estimatedCost: "Orta",
    implementationTime: "3 ay",
    successMetric: "Sözleşme inceleme sürelerinde %45 kısalma",
    riskNotes: "Yapay zeka önerilerinin tamamen tavsiye niteliğinde kalması, nihai onayın avukatta olması şarttır.",
    communityScore: 85,
    strategicScore: 86,
    aiScore: 89,
    credits: 120,
    supporters: 27,
    comments: [
      { user: "Zeynep Demir", body: "Satın alma birimi olarak bu projeyi sabırsızlıkla bekliyoruz.", manager: false },
      { user: "Mustafa Kaya", body: "Hukuk ekibinin iş yükünü ciddi oranda hafifletecektir.", manager: true }
    ],
    tags: ["Hukuk", "Yapay Zeka", "Otomasyon", "Sözleşme"],
    createdAt: "2026-06-07"
  },
  {
    id: "idea-27",
    title: "Müşteri memnuniyet anketleri otomatik özetleme",
    summary: "Her ay gelen binlerce serbest metin anket cevabını ana temalara göre özetleyen AI motoru.",
    problem: "Müşterilerin anketlerde yazdığı uzun yorumlar manuel okunup raporlanıyor, gecikmeler yaşanıyor.",
    solution: "LLM altyapısı kullanarak duygu yönelimleri ve şikayet odaklarını haftalık raporlayan servis.",
    type: "Müşteri deneyimi",
    company: "Anadolu Hayat Emeklilik",
    department: "Müşteri Deneyimi",
    location: "İstanbul Ofis",
    city: "İstanbul",
    authorId: "u1",
    authorLabel: "Deniz Çetin",
    anonymity: "İsmimle paylaş",
    visibility: "Şirket içi",
    status: "new",
    estimatedImpact: "Orta",
    estimatedCost: "Düşük",
    implementationTime: "1 ay",
    successMetric: "Müşteri geri bildirim analiz raporu hazırlama süresinde %90 kısalma",
    riskNotes: "Yorumlardaki özel kişisel verilerin (ad, telefon vb.) LLM modeline gitmeden önce maskelenmesi.",
    communityScore: 83,
    strategicScore: 80,
    aiScore: 86,
    credits: 92,
    supporters: 21,
    comments: [
      { user: "Elif Şahin", body: "Anadolu Hayat müşteri ilişkileri birimi projeye sponsor oldu.", manager: false },
      { user: "Can Koç", body: "KVKK maskeleme kütüphanelerini öncelikle entegre edelim.", manager: true }
    ],
    tags: ["Anadolu Hayat", "Müşteri Deneyimi", "Yapay Zeka", "Anket"],
    createdAt: "2026-06-07"
  },
  {
    id: "idea-28",
    title: "Şube ve bölge ofisleri su tasarruf vanaları montajı",
    summary: "Tüm fiziki lokasyonlardaki musluklara akıllı tasarruf vanaları yerleştirilmesi.",
    problem: "Musluklardaki su debisi yüksek olduğu için gereksiz tüketim oluşuyor, fatura maliyeti yüksek.",
    solution: "Su akışını hava ile karıştırarak debiyi düşüren perlatörlerin tüm musluklara takılması.",
    type: "Sürdürülebilirlik",
    company: "İşBank Holding",
    department: "Destek Hizmetleri",
    location: "Ankara Bölge",
    city: "Ankara",
    authorId: "u2",
    authorLabel: "Anonim Bölge Sorumlusu",
    anonymity: "İsim gizli, rol görünür",
    visibility: "Holding geneli",
    status: "done",
    estimatedImpact: "Orta",
    estimatedCost: "Düşük",
    implementationTime: "3 hafta",
    successMetric: "Aylık su tüketim faturalarında %35 azalma",
    riskNotes: "Montaj işlemlerinin şube çalışma saatleri dışında yapılması planlanmalı.",
    communityScore: 88,
    strategicScore: 74,
    aiScore: 83,
    credits: 140,
    supporters: 39,
    comments: [
      { user: "Burak Kaya", body: "Ankara genelinde montajlar tamamlandı, faturalardaki düşüşü gözlemliyoruz.", manager: true },
      { user: "Ahmet Yılmaz", body: "Çok basit ama yeşil hedeflerimize katkısı net bir proje.", manager: false }
    ],
    tags: ["Sürdürülebilirlik", "Su Tasarrufu", "Maliyet", "Uygulandı"],
    createdAt: "2026-06-07"
  },
  {
    id: "idea-29",
    title: "Kağıtsız şube projesi kapsamında dijital formlar",
    summary: "Şube gişelerindeki para yatırma/çekme fişlerinin tabletten dijital imzayla onaylanması.",
    problem: "Her gişe işleminde basılan kağıt fişler hem tonlarca kağıt israfına hem de arşivleme yüküne sebep oluyor.",
    solution: "Müşterinin önündeki imza tableti üzerinden formun onaylanıp müşteriye SMS/E-posta ile gönderilmesi.",
    type: "Maliyet azaltma",
    company: "İşBank Perakende Operasyonları",
    department: "Şube Operasyonları",
    location: "İstanbul Beşiktaş Şubesi",
    city: "İstanbul",
    authorId: "u3",
    authorLabel: "Anonim Gişe Görevlisi",
    anonymity: "İsim gizli, rol görünür",
    visibility: "Holding geneli",
    status: "pilot",
    estimatedImpact: "Çok yüksek",
    estimatedCost: "Yüksek",
    implementationTime: "6 ay",
    successMetric: "Şube kağıt ve arşivleme maliyetlerinde %70 düşüş",
    riskNotes: "Müşteri yaş gruplarına göre dijital tablet kullanım zorluğu ve alternatif akışlar korunmalı.",
    communityScore: 92,
    strategicScore: 90,
    aiScore: 91,
    credits: 180,
    supporters: 51,
    comments: [
      { user: "Hüseyin Çelik", body: "Gişe işlemlerini çok hızlandıracak stratejik bir dönüşüm adımı.", manager: true },
      { user: "Ahmet Yılmaz", body: "Beşiktaş şubesinde pilot başladı, müşteriler çok memnun.", manager: false }
    ],
    tags: ["Operasyon", "Şube", "Kağıtsız", "Dijital İmza"],
    createdAt: "2026-06-07"
  },
  {
    id: "idea-30",
    title: "İK eğitim öneri motoru ve kişiselleştirilmiş rota",
    summary: "Çalışanın rolüne ve eksik yetkinliklerine göre en uygun eğitimleri öneren AI platformu.",
    problem: "Çalışanlar binlerce eğitimlik katalog içinde kendilerine en faydalı eğitimleri bulmakta zorlanıyor.",
    solution: "Rol, mevcut beceriler ve kariyer hedeflerini değerlendirip haftalık eğitim öneren motor.",
    type: "Eğitim / onboarding önerisi",
    company: "İşBank Holding",
    department: "İnsan Kaynakları",
    location: "İstanbul Genel Müdürlük",
    city: "İstanbul",
    authorId: "u5",
    authorLabel: "Anonim İK Uzmanı",
    anonymity: "İsim gizli, departman görünür",
    visibility: "Holding geneli",
    status: "new",
    estimatedImpact: "Yüksek",
    estimatedCost: "Orta",
    implementationTime: "3 ay",
    successMetric: "Eğitim tamamlama oranlarında %40 artış",
    riskNotes: "Önerilerin kalitesinin artması için başlangıçta çalışan ilgi anketleri düzenlenmeli.",
    communityScore: 81,
    strategicScore: 85,
    aiScore: 88,
    credits: 115,
    supporters: 28,
    comments: [
      { user: "Zeynep Demir", body: "Kendi gelişim rotamızı tasarlamak motivasyonu artıracaktır.", manager: false },
      { user: "Mustafa Kaya", body: "İK eğitim platformu entegrasyonu için teknik analiz başladı.", manager: true }
    ],
    tags: ["İK", "Eğitim", "Öneri", "Kariyer"],
    createdAt: "2026-06-07"
  },
  {
    id: "idea-31",
    title: "Leasing Süreçleri İçin Mobil İmza ve Evrak Doğrulama Modülü",
    summary: "Müşterilerin leasing sözleşmelerini ve ek teminat evraklarını mobil ortamda güvenli e-imza / mobil imza ile onaylamasını sağlayan entegrasyon.",
    problem: "Fiziki ıslak imza süreçleri ve kurye gönderimleri sözleşme tamamlama süresini ortalama 5 iş günü uzatıyor ve operasyonel maliyet oluşturuyor.",
    solution: "E-imza sağlayıcıları ve E-Devlet kapısı ile doğrudan entegrasyon kurularak sözleşme onaylama adımının 10 dakikada mobil cihazdan tamamlanması sağlanacaktır.",
    type: "Operasyonel iyileştirme",
    company: "İş Finansal Kiralama",
    companyId: "is-leasing",
    department: "Operasyon",
    location: "Kurumsal Operasyon",
    city: "İstanbul",
    authorId: "p07",
    authorLabel: "Nazlı Durukan",
    anonymity: "Açık profil",
    visibility: "Holding geneli",
    status: "review",
    estimatedImpact: "Yüksek",
    estimatedCost: "Düşük",
    implementationTime: "2 ay",
    successMetric: "Ortalama sözleşme tamamlama süresinin 5 günden 2 saate düşürülmesi",
    riskNotes: "Mobil imza sağlayıcı API kesintileri için yedekli altyapı tasarlanmalı.",
    communityScore: 89,
    strategicScore: 94,
    aiScore: 92,
    credits: 160,
    supporters: 45,
    comments: [
      { user: "Cem Yalın", body: "Operasyonel iş yükünü inanılmaz derecede azaltacak bir proje, Moka ödeme entegrasyonuyla da birleştirilebilir.", manager: false },
      { user: "Defne Arman", body: "Holding genelinde yaygınlaştırılabilecek çok iyi bir çalışma.", manager: true }
    ],
    tags: ["Leasing", "Dijital İmza", "Operasyon", "Hız", "Verimlilik"],
    createdAt: "2026-06-08"
  },
  {
    id: "idea-32",
    title: "İkinci El İş Makinesi Değerleme ve Ekspertiz AI Modeli",
    summary: "İş makinesi leasing taleplerinde, makinenin çalışma saati, model yılı, marka ve hasar geçmişi verilerini işleyerek otomatik piyasa değeri tahmini yapan yapay zeka.",
    problem: "İkinci el iş makinelerinin ekspertiz ve değerleme süreçleri manuel yapılıyor ve kredi onay süresini 3-4 gün geciktiriyor.",
    solution: "Geliştirilecek regresyon modeliyle benzer ilanlar ve geçmiş ekspertiz raporları taranarak, makinenin adil piyasa değeri saniyeler içinde hesaplanacak ve tahsis ekiplerine sunulacak.",
    type: "Yapay zeka / Otomasyon",
    company: "İş Finansal Kiralama",
    companyId: "is-leasing",
    department: "Tahsis",
    location: "Genel Müdürlük",
    city: "İstanbul",
    authorId: "p25",
    authorLabel: "Aras Kılınç",
    anonymity: "Açık profil",
    visibility: "Holding geneli",
    status: "approved",
    estimatedImpact: "Yüksek",
    estimatedCost: "Orta",
    implementationTime: "3 ay",
    successMetric: "Değerleme doğruluğu ve ekspertiz süreç süresinde %70 iyileşme",
    riskNotes: "Uç fiyatlardaki veya nadir iş makinelerindeki veri eksikliği için manuel onay akışı devam etmeli.",
    communityScore: 95,
    strategicScore: 91,
    aiScore: 96,
    credits: 210,
    supporters: 68,
    comments: [
      { user: "Kaan Öztürk", body: "Araştırma ve makine öğrenimi modellerimizi bu projeye destek için paylaşabiliriz. Çok mantıklı bir kullanım.", manager: true },
      { user: "Nazlı Durukan", body: "Bursa bölgesindeki tekstil ve sanayi makineleri için de genişletilebilir.", manager: false }
    ],
    tags: ["Leasing", "Yapay Zeka", "Değerleme", "Ekspertiz", "Tahsis"],
    createdAt: "2026-06-09"
  },
  {
    id: "idea-33",
    title: "Sürdürülebilir Enerji ve GES Yatırımları İçin Dijital Yeşil Leasing",
    summary: "KOBİ'lerin çatı tipi Güneş Enerjisi Santrali (GES) ve rüzgar enerjisi leasing başvurularında, enerji üretim fizibilite raporuna göre otomatik kredi limiti tanımlayan yeşil portal.",
    problem: "Yeşil enerji yatırımlarının teknik değerlendirmesi uzun sürüyor, standart leasing süreçleri bu yatırımların doğasına uymuyor.",
    solution: "Teknik fizibilite verilerini API'ler üzerinden okuyan ve yatırımın geri dönüş süresine göre nakit akışını modelledikten sonra esnek ödeme planı çıkaran bir portal tasarımı.",
    type: "Yeşil Finans / Sürdürülebilirlik",
    company: "İş Finansal Kiralama",
    companyId: "is-leasing",
    department: "Satış",
    location: "Bursa Bölge",
    city: "Bursa",
    authorId: "p07",
    authorLabel: "Nazlı Durukan",
    anonymity: "İsim gizli, rol görünür",
    visibility: "Holding geneli",
    status: "active",
    estimatedImpact: "Yüksek",
    estimatedCost: "Orta",
    implementationTime: "4 ay",
    successMetric: "Yeşil leasing işlem hacminde ilk yıl %25 artış",
    riskNotes: "Yatırım teşvik belgesi süreçleri ve yasal mevzuatlar portala entegre edilmeli.",
    communityScore: 97,
    strategicScore: 96,
    aiScore: 94,
    credits: 280,
    supporters: 95,
    comments: [
      { user: "Ece Uslu", body: "TSKB olarak sürdürülebilir finansman metodolojimizi buraya aktarabiliriz, ortak çalışma grubu kuralım.", manager: true },
      { user: "Aras Kılınç", body: "Sanayi bölgelerinde bu araca çok büyük bir talep var, özellikle ihracatçı KOBİ'ler için karbon vergisi öncesi can suyu olur.", manager: false }
    ],
    tags: ["Leasing", "Yeşil Finans", "GES", "Sürdürülebilirlik", "KOBİ"],
    createdAt: "2026-06-05"
  },
  {
    id: "idea-34",
    title: "Tarım ve Tarım Makineleri Leasingi İçin Esnek Hasat Ödeme Sihirbazı",
    summary: "Çiftçilerin ve tarımsal işletmelerin traktör, hasat makinesi vb. leasing ödemelerini, yetiştirdikleri ürünlerin hasat dönemine ve bölgedeki kuraklık/verim endeksine göre esnek yapılandıran sihirbaz.",
    problem: "Tarım sektöründeki gelirlerin dönemsel olması nedeniyle standart aylık leasing ödemeleri çiftçiyi zorluyor ve gecikme oranlarını artırıyor.",
    solution: "Coğrafi bilgi sistemleri (CBS) ve tarımsal rekolte tahmin verilerini kullanarak, hasat dönemi nakit girişlerine tam uyumlu ve olağanüstü durumlarda ertelemeli ödeme planı hazırlayan müşteri arayüzü.",
    type: "Müşteri Deneyimi",
    company: "İş Finansal Kiralama",
    companyId: "is-leasing",
    department: "Satış",
    location: "Bursa Bölge",
    city: "Bursa",
    authorId: "p25",
    authorLabel: "Aras Kılınç",
    anonymity: "Açık profil",
    visibility: "Holding geneli",
    status: "review",
    estimatedImpact: "Yüksek",
    estimatedCost: "Düşük",
    implementationTime: "2 ay",
    successMetric: "Tarım leasingi portföy kalitesinde %15 artış ve müşteri memnuniyeti yükselişi",
    riskNotes: "İklim risklerinin finansal etkilerini modellemek için Tarım Sigortaları (TARSİM) verileriyle entegrasyon yapılmalı.",
    communityScore: 91,
    strategicScore: 88,
    aiScore: 89,
    credits: 135,
    supporters: 37,
    comments: [
      { user: "Nazlı Durukan", body: "Bursa ve Ege bölgesindeki zeytin/domates hasat dönemleriyle uyumlu şablonlar ekleyebiliriz.", manager: false },
      { user: "Mustafa Kaya", body: "Finansal risk modelleri için hazine ekibinden de onay almamız gerekecek ama fikir harika.", manager: true }
    ],
    tags: ["Leasing", "Tarım", "Esnek Ödeme", "Müşteri Deneyimi", "TARSİM"],
    createdAt: "2026-06-06"
  },
  {
    id: "idea-35",
    title: "Sat-Geri-Kirala (Sale and Leaseback) Süreçlerinde Otomatik Tapu ve Gayrimenkul Entegrasyonu",
    summary: "Sale and Leaseback işlemlerinde tapu sorgulama, harç hesaplama ve ipotek işlemlerini Tapu ve Kadastro Genel Müdürlüğü (TKGM) API'leri ile dijitalleştiren altyapı önerisi.",
    problem: "Gayrimenkul temelli leasing işlemlerinde tapu müdürlükleriyle yapılan yazışmalar ve fiziki takip süreçleri haftalar sürüyor.",
    solution: "TKGM Web-Tapu entegrasyonu ile doğrudan sistem üzerinden yetkilendirme yapılarak tapu kayıtlarının sorgulanması ve ipotek tescillerinin online yapılması.",
    type: "Teknolojik Altyapı",
    company: "İş Finansal Kiralama",
    companyId: "is-leasing",
    department: "Kredi",
    location: "Genel Müdürlük",
    city: "İstanbul",
    authorId: "p07",
    authorLabel: "Nazlı Durukan",
    anonymity: "Açık profil",
    visibility: "Holding geneli",
    status: "review",
    estimatedImpact: "Yüksek",
    estimatedCost: "Orta",
    implementationTime: "3 ay",
    successMetric: "Tapu tescil ve işlem kapatma süresinde %80 zaman tasarrufu",
    riskNotes: "Yasal düzenlemeler ve noter onay gereksinimleri iyi analiz edilmeli.",
    communityScore: 87,
    strategicScore: 93,
    aiScore: 90,
    credits: 195,
    supporters: 53,
    comments: [
      { user: "Ozan Gürel", body: "İş GYO olarak benzer bir tapu entegrasyonunu biz de araştırıyorduk, ortak bir altyapı kurmak maliyetleri çok düşürebilir.", manager: true },
      { user: "Aras Kılınç", body: "Kesinlikle! İş GYO ile yapılacak ortak çalışma projenin hızını katlar.", manager: false }
    ],
    tags: ["Leasing", "Sat-Geri-Kirala", "Tapu Entegrasyonu", "Hukuk", "Hız"],
    createdAt: "2026-06-08"
  },
  {
    id: "idea-36",
    title: "KOBİ'ler İçin 'Pay-As-You-Use' (Kullandıkça Öde) Leasing Modeli",
    summary: "IoT cihazları ile entegre edilen üretim makinelerinin aylık leasing ödemelerini, makinenin fiili çalışma saatine veya ürettiği parça sayısına göre dinamik belirleyen yeni nesil kiralama modeli.",
    problem: "KOBİ'ler sipariş alamadıkları veya üretimin durduğu aylarda dahi sabit leasing taksitlerini ödemekte zorlanıyor ve finansal sıkıntıya düşüyor.",
    solution: "Üretim makinelerine takılacak IoT sensörleri ile makinenin kullanım verileri anlık olarak İş Leasing bulut sistemine aktarılacak ve o ayki fatura fiili kullanıma göre kesilecek.",
    type: "İnovatif Finansman",
    company: "İş Finansal Kiralama",
    companyId: "is-leasing",
    department: "Kredi",
    location: "Genel Müdürlük",
    city: "İstanbul",
    authorId: "p07",
    authorLabel: "Nazlı Durukan",
    anonymity: "Açık profil",
    visibility: "Holding geneli",
    status: "approved",
    estimatedImpact: "Çok Yüksek",
    estimatedCost: "Yüksek",
    implementationTime: "6 ay",
    successMetric: "Yeni müşteri kazanımında %35 artış ve KOBİ müşteri sadakatinde rekor yükseliş",
    riskNotes: "IoT verilerinin güvenliği ve manipülasyon riskine karşı blokzincir tabanlı kayıt sistemi kurulmalı.",
    communityScore: 98,
    strategicScore: 95,
    aiScore: 97,
    credits: 340,
    supporters: 112,
    comments: [
      { user: "Yiğit Bora", body: "İşNet olarak IoT sensör altyapısını ve veri iletim güvenliğini üstlenebiliriz. Çok heyecan verici bir fikir!", manager: true },
      { user: "Selin Eryılmaz", body: "Şişecam'ın yeni tedarikçi fabrikalarında bu modeli hemen test edebiliriz, bize de büyük esneklik sağlar.", manager: false }
    ],
    tags: ["Leasing", "IoT", "Kullandıkça Öde", "KOBİ", "İnovasyon"],
    createdAt: "2026-06-09"
  },
  {
    id: "idea-rejected-demo",
    title: "Yasa Dışı Veri Depolama ve Hızlı Kredi Puanlama Algoritması",
    summary: "Müşterilerin izni olmadan sosyal medya profillerini ve kişisel mesajlarını tarayıp kredi skoru belirleyen sistem.",
    problem: "Kredi başvurularında veri toplamanın yasal sınırları nedeniyle onay süreçlerinin yavaş kalması.",
    solution: "Kullanıcı rızası aranmaksızın arka planda çalışan ve veri sızdıran bir mobil SDK entegrasyonu.",
    type: "İnovatif Finansman",
    company: "İş Finansal Kiralama",
    companyId: "is-leasing",
    department: "Kredi",
    location: "Genel Müdürlük",
    city: "İstanbul",
    authorId: "p25",
    authorLabel: "Aras Kılınç",
    anonymity: "Açık profil",
    visibility: "Holding geneli",
    status: "rejected",
    estimatedImpact: "Düşük",
    estimatedCost: "Yüksek",
    implementationTime: "6 ay",
    successMetric: "KVKK ihlali ve yasal davalar",
    riskNotes: "Yüksek derecede KVKK ihlali ve hapis cezası riski barındırır.",
    communityScore: 12,
    strategicScore: 18,
    aiScore: 45,
    credits: 0,
    supporters: 0,
    comments: [
      { user: "Yapay Zeka Denetçisi", body: "DİKKAT: Bu proje otomatik olarak REDDEDİLMİŞTİR. Neden: Proje içeriği kurum tüzüğüne veya yasal mevzuata (KVKK) aykırı bulunmuş ve AI skoru (45) baraj altı kalmıştır.", manager: true }
    ],
    tags: ["Leasing", "Kredi", "Risk", "KVKK İhlali"],
    createdAt: "2026-06-12"
  }
];

initialIdeas.forEach((idea, index) => {
  const companyCycle = ["is-new", "tibas-holding", "sisecam", "tskb", "moka", "is-net", "anadolu-hayat", "isbank-ag"];
  idea.visualUrl = idea.visualUrl || remoteImages.ideaVisuals[index % remoteImages.ideaVisuals.length];
  idea.companyId = idea.companyId || ((index % 5 === 0) ? "independent" : companyCycle[index % companyCycle.length]);
  idea.marketCategory = idea.marketCategory || marketCategories[index % marketCategories.length];
  idea.area = idea.area || borsaAreas[index % borsaAreas.length];
  idea.marketTicker = idea.marketTicker || `NIE-${String(index + 1).padStart(2, "0")}`;
  idea.marketPrice = idea.marketPrice || Math.max(48, Math.round((idea.aiScore * 1.8) + (idea.communityScore * 0.9) + (idea.supporters * 1.6)));
  idea.marketChange = idea.marketChange !== undefined ? idea.marketChange : [12.4, -3.8, 7.1, 2.6, 18.9, -1.4, 9.6, 4.2][index % 8];
  idea.marketVolume = idea.marketVolume || 820 + idea.credits * 7 + idea.supporters * 31;
  idea.marketShares = idea.marketShares || 1200 + idea.supporters * 42;
  idea.marketSpark = idea.marketSpark || [48, 62, 58, 76, 70, 86, 81, 92].map((point, sparkIndex) => Math.max(18, Math.min(96, point + ((index % 3) - 1) * sparkIndex * 2)));
  idea.files = idea.files?.length ? idea.files : defaultBundleFiles(idea.marketTicker, idea.marketCategory);

  // Initialize contributors (yapanlar)
  const author = personById(idea.authorId) || { name: idea.authorLabel || "Fikir Sahibi", role: "Proje Sahibi", photo: "" };
  idea.contributors = [{
    userId: idea.authorId,
    name: author.name,
    role: author.role || "Proje Lideri",
    photo: author.photo || ""
  }];

  // Add multiple makers to some ideas for demonstration
  if (idea.id === "idea-1") {
    const cKoc = personById("u3");
    if (cKoc) idea.contributors.push({ userId: cKoc.id, name: cKoc.name, role: "Süreç Yöneticisi", photo: cKoc.photo });
  } else if (idea.id === "idea-2") {
    const dArman = personById("p01");
    if (dArman) idea.contributors.push({ userId: dArman.id, name: dArman.name, role: "UI/UX Tasarımcısı", photo: dArman.photo });
  } else if (idea.id === "idea-3") {
    const mAydin = personById("u5");
    if (mAydin) idea.contributors.push({ userId: mAydin.id, name: mAydin.name, role: "İK Danışmanı", photo: mAydin.photo });
  }
});

const challenges = [
  {
    id: "challenge-ops-wait",
    title: "Şube Bekleme Süresi Çözüm Yarışması",
    theme: "Müşteri deneyimi",
    sector: "Operasyon",
    brief: "Yoğun saatlerde sıra ve gişe bekleme süresini azaltacak uygulanabilir çözümler aranıyor.",
    date: "1 Haz - 30 Haz",
    deadline: "19 gün kaldı",
    reward: "₺75.000 proje bütçesi + hızlı terfi kurul görüşmesi",
    rewardType: "Terfi + Para",
    sponsor: "İş New Operasyon Ofisi",
    status: "Aktif",
    ideas: 42,
    participants: 186,
    prizeIcon: "badge-dollar-sign",
    accent: "blue",
    shortlist: ["Pilot bütçesi", "Yönetim sunumu", "Terfi mülakatı"]
  },
  {
    id: "challenge-ai-docs",
    title: "AI ile Evrak Onayını Kısalt",
    theme: "Yapay zekâ",
    sector: "Yapay Zekâ",
    brief: "Evrak, sözleşme ve onay süreçlerinde manuel kontrol yükünü azaltacak AI destekli akışlar.",
    date: "5 Haz - 5 Tem",
    deadline: "24 gün kaldı",
    reward: "iPad Pro + mentorluk + canlı pilot hakkı",
    rewardType: "Teknoloji Hediye",
    sponsor: "TİBAŞ Holding Dijital Dönüşüm",
    status: "Aktif",
    ideas: 58,
    participants: 214,
    prizeIcon: "tablet",
    accent: "green",
    shortlist: ["iPad Pro", "AI mentorluğu", "Pilot hakkı"]
  },
  {
    id: "challenge-green-finance",
    title: "Yeşil Finans Ürün Fikri Kupası",
    theme: "Sürdürülebilirlik",
    sector: "Finans",
    brief: "KOBİ ve bireysel müşteriler için ölçülebilir çevresel etki yaratan finans ürünleri.",
    date: "12 Haz - 18 Tem",
    deadline: "Başlamak üzere",
    reward: "₺100.000 pilot fonu + yatırım komitesi sunumu",
    rewardType: "Para",
    sponsor: "TSKB & İş Yatırım",
    status: "Yakında",
    ideas: 24,
    participants: 93,
    prizeIcon: "leaf",
    accent: "emerald",
    shortlist: ["Pilot fonu", "Komite sunumu", "ESG rozeti"]
  },
  {
    id: "challenge-digital-product",
    title: "Moka Üye İşyeri Akışını Sadeleştir",
    theme: "Dijital ürün",
    sector: "FinTech",
    brief: "Üye işyeri başvuru, evrak kontrolü ve aktivasyon sürecini daha hızlı hale getiren fikirler.",
    date: "20 May - 20 Haz",
    deadline: "Final değerlendirme",
    reward: "MacBook Air + ürün ekibiyle 6 haftalık sprint",
    rewardType: "Teknoloji Hediye",
    sponsor: "Moka Ürün Ekibi",
    status: "Final",
    ideas: 67,
    participants: 242,
    prizeIcon: "laptop",
    accent: "purple",
    shortlist: ["MacBook Air", "Ürün sprinti", "Demo günü"]
  },
  {
    id: "challenge-employee",
    title: "Çalışan Deneyimi Laboratuvarı",
    theme: "Çalışan deneyimi",
    sector: "İK",
    brief: "Oryantasyon, iç iletişim ve ekipler arası görünürlük için küçük ama etkili çözümler.",
    date: "10 Haz - 10 Tem",
    deadline: "29 gün kaldı",
    reward: "Terfi puanı + İK pilot desteği + hediye seti",
    rewardType: "Terfi + Hediye",
    sponsor: "İK Deneyim Ofisi",
    status: "Aktif",
    ideas: 31,
    participants: 128,
    prizeIcon: "sparkles",
    accent: "amber",
    shortlist: ["Terfi puanı", "Pilot desteği", "Hediye seti"]
  },
  {
    id: "challenge-security",
    title: "Güvenli Veri Paylaşımı Hack Sprint",
    theme: "Risk ve uyum",
    sector: "Siber Güvenlik",
    brief: "Dosya, veri seti ve proje bundle paylaşımında güvenliği artıracak pratik çözümler.",
    date: "1 Tem - 31 Tem",
    deadline: "Yakında",
    reward: "₺50.000 ödül + güvenlik sertifika desteği",
    rewardType: "Para + Sertifika",
    sponsor: "Bilgi Güvenliği",
    status: "Yakında",
    ideas: 12,
    participants: 76,
    prizeIcon: "shield-check",
    accent: "slate",
    shortlist: ["Nakit ödül", "Sertifika", "Kurul sunumu"]
  }
];

const channels = [
  {
    id: "ch-ops",
    name: "Operasyon Sinyalleri",
    description: "Şube, mağaza ve çağrı merkezi iyileştirmeleri",
    messages: [
      { user: "Ayşe Yılmaz", body: "İstanbul lokasyonlarında sabah yoğunluğu için 3 fikir daha eklendi.", own: false, time: "09:24" },
      { user: "Can Koç", body: "Bugün hızlı kazanım adaylarını yöneticiler panelinde işaretliyorum.", own: true, time: "09:32" },
      { user: "Ayşe Yılmaz", body: "Kadıköy şubesindeki akıllı OCR tarama projesinden geri dönüş aldık, doğruluk oranı %94.", own: false, time: "11:05" },
      { user: "Mustafa Kaya", body: "Moka üye işyeri onay sürecinin kısaltılması fikri için uyum onayı geldi.", own: false, time: "12:15" },
      { user: "Hüseyin Çelik", body: "İzmir şube su vanası tasarruf montajları bitti, su tüketimi %35 azaldı.", own: false, time: "14:40" }
    ]
  },
  {
    id: "ch-ai",
    name: "AI ile Güçlendir",
    description: "Fikirleri analiz ve pilot önerisiyle geliştirme",
    messages: [
      { user: "Zeynep Kaya", body: "Benzer fikir önerileri için kategori seçimini zorunlu yapalım mı?", own: false, time: "10:05" },
      { user: "Anonim Çalışan", body: "AI özetinin yöneticiler için 5 madde olması çok işe yarıyor.", own: false, time: "10:14" },
      { user: "Zeynep Kaya", body: "Müşteri çağrılarının duygu analizi yapılması projesinde LLM modellerinin testlerini başlattık.", own: false, time: "13:20" },
      { user: "Can Koç", body: "Sözleşme risk analizi için eğitilen modelin ilk testi çok başarılı geçti, avukat ekibi çok memnun.", own: true, time: "15:10" },
      { user: "Deniz Çetin", body: "Anket özetleme AI modülü de KVKK maskelemesini tamamladı, kuruluma hazır.", own: false, time: "16:05" }
    ]
  },
  {
    id: "ch-istanbul",
    name: "İstanbul Lokasyonları",
    description: "Şehir bazlı öneriler ve saha gözlemleri",
    messages: [
      { user: "Elif Şahin", body: "Sıra yönlendirme ekranları pilot sonrası daha az soru aldı.", own: false, time: "11:42" },
      { user: "Elif Şahin", body: "Tuzla kampüsü ortak çalışma alanı akıllı dolap sistemi için dolaplar yerleştirildi.", own: false, time: "13:15" },
      { user: "Zeynep Demir", body: "QR kod rezervasyon sistemi mobil portalda aktif edildi.", own: false, time: "14:30" },
      { user: "Burak Kaya", body: "Tuzla veri merkezi PUE izleme Grafana ekranı canlıya alındı, verileri izleyebiliyoruz.", own: false, time: "15:40" },
      { user: "Merve Aydın", body: "Yeni onboarding asistan rehberi pilotta 50 yeni çalışan tarafından test ediliyor.", own: false, time: "16:22" }
    ]
  }
];

const initialNotificationsList = [
  { id: "n1", type: "Fikir", title: "Fikrine 5 yeni destek kredisi geldi", body: "Müşteri şikayetleri sınıflandırma fikri yükseliyor.", unread: true },
  { id: "n2", type: "Yönetici", title: "Bir fikir yönetici incelemesine alındı", body: "Dinamik vardiya sistemi operasyon kuyruğuna taşındı.", unread: true },
  { id: "n3", type: "AI", title: "AI analizi tamamlandı", body: "Onboarding rehberi için pilot önerisi oluşturuldu.", unread: false },
  { id: "n4", type: "Chat", title: "Operasyon kanalında mention aldın", body: "Can Koç hızlı kazanım adaylarını sordu.", unread: false },
  { id: "n5", type: "Yarışma", title: "Yeni sprint başlıyor", body: "Çalışan Deneyimi Laboratuvarı 10 Haziran'da açılıyor.", unread: false }
];

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: "layout-dashboard" },
  { id: "quickFlow", label: "Borsa", icon: "chart-candlestick" },
  { id: "data", label: "Veri&Bilgi", icon: "database" },
  { id: "agenda", label: "Gündem", icon: "newspaper" },
  { id: "announcements", label: "Duyurular", icon: "megaphone" },
  { id: "social", label: "Sosyal", icon: "globe" },
  { id: "challenges", label: "Yarışmalar", icon: "trophy" },
  { id: "studio", label: "Stüdyo", icon: "layers" },
  { id: "teams", label: "Ekipler", icon: "users-round" },
  { id: "products", label: "Geliştirilmiş Ürünler", icon: "package-check" },
  { id: "profile", label: "Profil", icon: "user-round" },
  { id: "messages", label: "Mesajlar", icon: "message-square-text" },
  { id: "managerDashboard", label: "Yönetici Dashboardu", icon: "chart-no-axes-combined", managerOnly: true },
  { id: "adminStorage", label: "Yönetici Depolama", icon: "folder-kanban", managerOnly: true },
  { id: "manager", label: "Karar Kurulu", icon: "clipboard-check", managerOnly: true },
  { id: "analytics", label: "Karar Analitiği", icon: "chart-no-axes-combined" },
  { id: "quickEval", label: "Hızlı Değerlendir", icon: "flame" },
  { id: "rules", label: "Kurallar", icon: "scroll" },
  { id: "complaintBox", label: "Şikayet Kutusu", icon: "shield-alert" },
  { id: "aiAssistantMenu", label: "AI Asistan", icon: "bot" },
  { id: "systemDetails", label: "Sistem Detayları", icon: "info" },
  { id: "settings", label: "Ayarlar", icon: "settings" }
];

const cleanNavIds = ["dashboard", "quickFlow", "data", "agenda", "announcements", "social", "challenges", "studio", "teams", "products", "profile", "messages", "managerDashboard", "adminStorage", "manager", "analytics", "quickEval", "rules", "complaintBox", "aiAssistantMenu", "systemDetails", "settings"];

const wizardSteps = [
  "Temel Bilgi",
  "Kapsam",
  "Problem",
  "Çözüm",
  "Etki & Maliyet",
  "AI Analizi",
  "Önizleme"
];

const initialWizard = {
  title: "Yoğun saatlerde kasa bekleme süresini azaltacak dinamik vardiya sistemi",
  oneSentence: "Geçmiş işlem verilerine göre yoğun saatlerde kasa personeli planlamasını daha doğru yapan öneri sistemi.",
  ideaType: "Operasyonel iyileştirme",
  visibility: "Şirket içi",
  anonymity: "İsim gizli, rol görünür",
  company: "İşBank Perakende Operasyonları",
  department: "Mağaza Operasyonları",
  subDepartment: "Kasa Operasyonları",
  location: "Bursa Mağaza",
  cityRegion: "Bursa / Marmara",
  userGroup: "Mağaza çalışanları ve müşteriler",
  otherDepartments: "Müşteri Deneyimi, Veri Analitiği",
  contributionTeams: "Operasyon planlama, mağaza yönetimi, veri analitiği",
  problem: "Yoğun saatlerde kasa bekleme süresi artıyor. Çalışanlar manuel gözleme göre vardiya değiştirmeye çalışıyor, ancak yoğunluk önceden görünmediği için müşteri memnuniyeti düşüyor.",
  currentExperience: "Hafta sonu ve kampanya günlerinde kasa kuyruğu uzuyor, mağaza içi yönlendirme zorlaşıyor.",
  frequency: "Haftada birkaç kez",
  affected: "Müşteriler, kasa çalışanları, mağaza yöneticileri",
  customerImpact: "Bekleme süresi ve şikayet sayısı artıyor.",
  employeeImpact: "Kasa çalışanlarının yoğunluk stresi yükseliyor.",
  operationalImpact: "Mola ve vardiya planı sık sık bozuluyor.",
  financialImpact: "Yoğunluk anında satış kaybı ve memnuniyetsizlik riski oluşuyor.",
  ifNotSolved: "Kampanya dönemlerinde aynı yoğunluk tekrar eder ve çalışan deneyimi olumsuz etkilenir.",
  solution: "Geçmiş işlem hacmi, kampanya takvimi ve saatlik satış yoğunluğu verilerini kullanarak mağaza yöneticisine vardiya önerisi sunan basit bir panel geliştirilebilir.",
  howItWorks: "Panel yoğunluk tahmini üretir, gerekli kasa sayısını önerir ve pilot mağazalarda vardiya planıyla karşılaştırılır.",
  resources: "Geçmiş işlem verisi, vardiya planı, mağaza yöneticisi geri bildirimi",
  technicalNeed: "Evet, küçük bir veri paneli gerekiyor",
  educationNeed: "Kısa yönetici eğitimi yeterli",
  processNeed: "Vardiya planlama sürecinde küçük güncelleme",
  teams: "Veri analitiği, mağaza operasyonları, IT",
  pilot: "İlk pilot işlem hacmi yüksek 3 mağazada 4 hafta denenebilir.",
  impact: "Yüksek",
  cost: "Düşük",
  implementationTime: "1 ay",
  successMetric: "Ortalama kasa bekleme süresi, müşteri şikayet sayısı, yoğunluk anı çalışan memnuniyeti",
  kpi: "Müşteri bekleme süresi",
  risks: "Yanlış veriyle planlama yapılması, mağaza yöneticilerinin yeni akışa adapte olamaması",
  strategicGoal: "Müşteri deneyimini iyileştirmek ve operasyon verimliliğini artırmak",
  files: ["pilot-plan.pdf", "kpi-notlari.xlsx"]
};

const initialComplaint = {
  title: "Verimsiz onay adımları yüzünden işin gereksiz uzaması",
  category: "Süreç verimsizliği",
  body: "Bazı onay adımları aynı bilgiyi tekrar istiyor. Bu yüzden basit işler bile birkaç farklı kişiden dönüş bekliyor ve süreç yavaşlıyor.",
  department: "Operasyon",
  location: "İstanbul Genel Müdürlük",
  frequency: "Haftada birkaç kez",
  impact: "Orta",
  anonymity: "İsim gizli, departman görünür",
  expectation: "Tekrarlanan onay noktaları sadeleştirilsin ve hangi adımın neden gerekli olduğu görünür olsun.",
  files: []
};

const initialTeams = [
  {
    id: "team-001",
    name: "PropTech Hızlanma",
    description: "Akıllı bina yönetimi ve IoT tabanlı enerji optimizasyonu üretecek cross-functional ekip. 3 ayda MVP hedefleniyor.",
    area: "PropTech & Akıllı Şehirler",
    ideaId: "idea-3",
    createdBy: "p01",
    status: "active",
    createdAt: "2026-05-15",
    roles: [
      { id: "tr-1", title: "Ürün Yöneticisi", icon: "briefcase", filled: true, userId: "p01", skills: ["Roadmap", "OKR", "Stakeholder"] },
      { id: "tr-2", title: "Frontend Mühendisi", icon: "code-2", filled: true, userId: "p03", skills: ["React", "TypeScript"] },
      { id: "tr-3", title: "UX Designer", icon: "pen-tool", filled: false, userId: null, skills: ["Figma", "User Research"] },
      { id: "tr-4", title: "Veri Analisti", icon: "bar-chart-2", filled: true, userId: "p07", skills: ["Python", "SQL", "Tableau"] }
    ],
    messages: [
      { userId: "p01", body: "PropTech ekibimiz kuruldu! Sprint planlamasına geçiyoruz.", time: "2026-05-15 10:00" },
      { userId: "p03", body: "Frontend prototype hazır, inceleyebilirsiniz.", time: "2026-05-20 09:30" },
      { userId: "p07", body: "Bina sensör verisini modellemeye başladım, akıllı enerji tablosu çıktı.", time: "2026-05-25 14:20" },
      { userId: "p01", body: "UX Designer pozisyonu hâlâ açık. Bilen önersin!", time: "2026-06-01 11:00" }
    ],
    tags: ["PropTech", "IoT", "MVP"]
  },
  {
    id: "team-002",
    name: "Yeşil Finans Sprint",
    description: "ESG raporlama, sürdürülebilirlik finansmanı ve karbon takip araçları geliştiren fintech odaklı ekip.",
    area: "Sürdürülebilirlik & Yeşil Enerji",
    ideaId: "idea-1",
    createdBy: "p05",
    status: "forming",
    createdAt: "2026-06-02",
    roles: [
      { id: "tr-5", title: "Ürün Yöneticisi", icon: "briefcase", filled: true, userId: "p05", skills: ["ESG", "Fintech", "Roadmap"] },
      { id: "tr-6", title: "Backend Mühendisi", icon: "server", filled: false, userId: null, skills: ["Node.js", "API", "Security"] },
      { id: "tr-7", title: "Compliance Uzmanı", icon: "shield-check", filled: true, userId: "p11", skills: ["BRSA", "Uyum", "Regülasyon"] },
      { id: "tr-8", title: "UX Araştırmacısı", icon: "users", filled: false, userId: null, skills: ["User Research", "Interview"] }
    ],
    messages: [
      { userId: "p05", body: "Yeşil finans ekibini kuruyoruz! Backend ve UX pozisyonları açık.", time: "2026-06-02 10:15" },
      { userId: "p11", body: "Compliance tarafını üstleniyorum. BRSA raporlama standartlarını çıkarıyorum.", time: "2026-06-03 09:00" }
    ],
    tags: ["ESG", "Yeşil Finans", "Sürdürülebilirlik"]
  },
  {
    id: "team-003",
    name: "AI Kredi Skoru Ar-Ge",
    description: "Yapay zeka tabanlı alternatif kredi skorlama modeli geliştiren araştırma ekibi. Geleneksel skoru %30 daha isabetli yapıyoruz.",
    area: "Yapay Zekâ & Derin Teknoloji",
    ideaId: "idea-5",
    createdBy: "p02",
    status: "active",
    createdAt: "2026-04-20",
    roles: [
      { id: "tr-9", title: "Veri Bilimcisi (Lead)", icon: "brain", filled: true, userId: "p02", skills: ["ML", "Python", "XGBoost"] },
      { id: "tr-10", title: "MLOps Mühendisi", icon: "git-branch", filled: true, userId: "p08", skills: ["Docker", "Kubernetes"] },
      { id: "tr-11", title: "Veri Mühendisi", icon: "database", filled: true, userId: "p17", skills: ["Spark", "Kafka"] },
      { id: "tr-12", title: "Etik AI Danışmanı", icon: "scale", filled: false, userId: null, skills: ["AI Ethics", "Bias Testing"] }
    ],
    messages: [
      { userId: "p02", body: "İlk model iterasyonu tamam. AUC 0.87'ye ulaştık!", time: "2026-05-10 16:00" },
      { userId: "p08", body: "MLflow tracking kuruldu, tüm experimentlar loglanıyor.", time: "2026-05-12 10:30" },
      { userId: "p17", body: "Kafka pipeline real-time scoring için hazır.", time: "2026-05-20 14:00" },
      { userId: "p02", body: "Etik AI danışmanı arıyoruz, öneriniz var mı?", time: "2026-06-05 09:00" }
    ],
    tags: ["AI", "ML", "Kredi", "FinTech"]
  }
];

const state = {
  loggedIn: false,
  onboardingStep: 1,
  accessKeyInput: "",
  accessKeyAccepted: false,
  loginError: "",
  currentUserId: "u3",
  selectedLoginUserId: "u3",
  investmentLedger: [
    { id: "tx-1", user: "Nazlı Durukan", project: "Yoğun saatlerde kasa bekleme süresini azaltacak dinamik vardiya sistemi", amount: 1200, date: "2026-06-10" },
    { id: "tx-2", user: "Aras Kılınç", project: "Yoğun saatlerde kasa bekleme süresini azaltacak dinamik vardiya sistemi", amount: 800, date: "2026-06-11" },
    { id: "tx-3", user: "Nazlı Durukan", project: "Yeni başlayan çalışanlar için AI destekli kurum içi rehber", amount: 450, date: "2026-06-12" },
    { id: "tx-4", user: "Mert Alkan", project: "Akıllı Harcama ve Karbon Nötrleme Kart Entegrasyonu", amount: 1500, date: "2026-06-14" }
  ],
  ledgerUserFilter: "Tümü",
  ledgerProjectFilter: "Tümü",
  page: "quickFlow",
  previousPage: "quickFlow",
  selectedIdeaId: "idea-1",
  ideas: structuredClone(initialIdeas),
  ideaView: "cards",
  marketBudget: 10000,
  marketHoldings: {
    "idea-1": 8,
    "idea-2": 5
  },
  marketCategoryFilter: "Tümü",
  marketSort: "Revaç",
  marketPanel: "home",
  marketSearch: "",
  marketSelectedId: "idea-1",
  marketRange: "1D",
  marketIndicator: "MACD",
  marketOrderSize: 1,
  marketComposerContext: "",
  marketDraft: {
    title: "",
    summary: "",
    category: "Proje",
    companyId: "is-new",
    scope: "Holding geneli",
    files: []
  },
  fileInspector: null,
  quickFlowIndex: 0,
  quickFlowFeedback: "",
  fastCommentDraft: "",
  quickEvalLikes: {},
  quickEvalCommentDraft: "",
  notifications: structuredClone(initialNotificationsList),
  filters: {
    search: "",
    company: "Tümü",
    department: "Tümü",
    status: "Tümü",
    type: "Tümü",
    scope: "Tümü",
    sort: "En yeni",
    
    // New structural filters
    league: "Tümü",
    area: "Tümü",
    dataTab: "Tümü",
    dataCompany: "Tümü",
    dataArea: "Tümü",
    dataSearch: "",
    dataSort: "En yeni",
    announcementTab: "Tümü",
    announcementSearch: "",
    announcementCompany: "Tümü",
    announcementArea: "Tümü",
    announcementSort: "En yeni",
    socialSearch: "",
    challengeSearch: "",
    challengeSector: "Tümü",
    challengeStatus: "Tümü",
    challengeReward: "Tümü",
    agendaSearch: "",
    agendaCategory: "Tümü",
    agendaTag: "Tümü",
    studioSearch: "",
    studioCategory: "Tümü",
    studioStatus: "Tümü",
    studioSort: "Popülerlik",
    teamSearch: "",
    teamArea: "Tümü",
    teamStatus: "Tümü",
    productSearch: "",
    productStage: "Tümü",
    productCategory: "Tümü"
  },
  wizardStep: 0,
  wizard: structuredClone(initialWizard),
  entryMode: "idea",
  complaint: structuredClone(initialComplaint),
  aiAnalysis: null,
  aiLoading: false,
  mobileOpen: false,
  theme: "dark",
  brandName: "NEW IDEA EXCHANGE",
  notificationTab: "Tümü",
  adminTab: "Kullanıcılar",
  systemDetailsTab: "Sistem Nasıl Çalışır?",
  ledgerUserFilter: "Tümü",
  ledgerProjectFilter: "Tümü",
  investmentLedger: [
    { userId: "u1", userName: "Ayşe Yılmaz", ideaId: "idea-1", ideaTitle: "Yoğun saatlerde kasa bekleme süresini azaltacak dinamik vardiya sistemi", amount: 1200, quantity: 10, date: "10.06.2026" },
    { userId: "u2", userName: "Mehmet Demir", ideaId: "idea-2", ideaTitle: "Yeni başlayan çalışanlar için AI destekli kurum içi rehber", amount: 800, quantity: 8, date: "11.06.2026" },
    { userId: "u5", userName: "Merve Aydın", ideaId: "idea-1", ideaTitle: "Yoğun saatlerde kasa bekleme süresini azaltacak dinamik vardiya sistemi", amount: 1440, quantity: 12, date: "12.06.2026" }
  ],
  marketInvestedAmount: {
    "idea-1": 960,
    "idea-2": 450
  },
  selectedChannelId: "ch-ops",
  chatDraft: "",
  affiliationFilter: "all",
  announcementScopeFilter: "Tümü",
  announcementDraft: {
    title: "",
    body: "",
    scope: "Holding geneli",
    companyId: "tibas-holding",
    country: "Türkiye",
    city: "İstanbul",
    campus: "Levent Genel Müdürlük",
    department: "Tüm ekipler"
  },
  selectedMessageSpaceId: "msg-holding",
  selectedDirectPersonId: "",
  messageSpaces: structuredClone(initialMessageSpaces),
  directThreads: {
    "p02": [
      { userId: "p02", body: "Merhaba Can Bey, borsa sistemindeki yeni veri analitiği fikrimiz hakkında kurulda görüşebilir miyiz?", time: "Dün 14:15" },
      { own: true, body: "Tabii Mert, verimlilik raporlarını inceledim. Yarın saat 10:00'da kısa bir toplantı yapalım.", time: "Dün 14:32" },
      { userId: "p02", body: "Harika olur Can Bey, dosyaları ve AI asistan raporunu hazırlayıp sunuma getireceğim.", time: "Bugün 09:20" }
    ],
    "p03": [
      { userId: "p03", body: "Can Bey, Şişecam Tuzla Ar-Ge tesisindeki sensör verisi paylaşımını tamamladık. Onayınızı bekliyor.", time: "Dün 16:02" },
      { own: true, body: "Eline sağlık Selin, verileri inceledim. Oldukça temiz görünüyor. Hemen onay verdim.", time: "Dün 16:45" },
      { userId: "p03", body: "Çok teşekkürler! Bu veriyle yeni bir hammadde optimizasyon projesi geliştirmeye başlayacağız.", time: "Dün 16:50" }
    ],
    "p05": [
      { userId: "p05", body: "Sürdürülebilir finans sprinti için borsa bütçesini kullanabilir miyiz? Sponsor arıyoruz.", time: "Bugün 10:12" },
      { own: true, body: "Evet Ece, bütçe limitleri dahilinde sponsorluğu onaylayabilirim. Detaylı talebi gönderir misin?", time: "Bugün 10:45" }
    ],
    "p09": [
      { userId: "p09", body: "BES başvuru ekranları optimizasyonu pilot aşamasında %30 oranında dönüşüm artışı sağladı.", time: "2 gün önce" },
      { own: true, body: "Muhteşem bir sonuç İpek! Bu başarıyı holding genel kurulunda sunmamız gerekiyor.", time: "2 gün önce" },
      { userId: "p09", body: "Çok iyi olur, sunum slaytlarını hazırlayıp sizinle paylaşacağım.", time: "Dün 11:15" }
    ]
  },
  messageDraft: "",
  commentDraft: "",
  teams: structuredClone(initialTeams),
  teamsView: "list",
  teamsTab: "teams",
  selectedTeamId: "team-001",
  teamChatDraft: "",
  teamCreateStep: 0,
  teamFillRoleId: null,
  teamDraft: {
    name: "",
    description: "",
    area: "FinTech & Dijital Bankacılık",
    ideaId: "",
    roles: [
      { id: "new-r1", title: "Ürün Yöneticisi", icon: "briefcase", filled: false, userId: null, skills: [] },
      { id: "new-r2", title: "Mühendis", icon: "code-2", filled: false, userId: null, skills: [] }
    ]
  },
  brandDraft: "NEW IDEA EXCHANGE",
  primaryColor: "#155EEF",
  
  // New platform states
  profileUserId: null,
  selectedIdeaReportId: null,
  reportType: "ai",
  connectedUserIds: ["p01", "p02", "p05", "p09"],
  followedChallenges: ["challenge-ops-wait"],
  socialActiveTab: "all",
  socialLeaderboardMode: "total",
  socialPhotoDraft: null,
  agendaEditId: null,
  agendaDraft: {
    title: "",
    body: "",
    category: "Strateji",
    tags: "pilot, operasyon",
    date: "2026-06-15"
  },
  agendaItems: [
    {
      id: "ag-1",
      title: "Şube operasyonlarında bekleme süresi sprinti başlıyor",
      body: "Operasyon ekipleri, müşteri bekleme süresini azaltan fikirleri bu hafta içinde Gündem üzerinden takip edecek.",
      category: "Operasyon",
      date: "2026-06-15",
      tags: ["şube", "müşteri deneyimi", "pilot"],
      author: "Can Koç"
    },
    {
      id: "ag-2",
      title: "AI analizleri sadece platform içi veriyle özetlenecek",
      body: "Demo kapsamındaki AI Host; fikirler, duyurular, ürünler, gündem ve admin notlarını kullanarak özet üretir. İnternetten haber çekmez.",
      category: "AI Host",
      date: "2026-06-14",
      tags: ["ai", "demo kapsamı", "veri güvenliği"],
      author: "İş NEW"
    },
    {
      id: "ag-3",
      title: "Geliştirilmiş ürünler için ekip ihtiyacı görünürlüğe açıldı",
      body: "Ürün aşamasına geçen fikirlerde açık roller ve geliştirme seviyesi artık ayrı ürün panosundan izlenebilecek.",
      category: "Ürün",
      date: "2026-06-13",
      tags: ["ürün", "ekip", "stüdyo"],
      author: "İnovasyon Ofisi"
    }
  ],
  adminStorageDraft: {
    title: "",
    description: "",
    category: "Yönetim notu",
    source: "",
    files: []
  },
  adminStorageItems: [
    {
      id: "store-1",
      title: "Haziran karar kurulu notları",
      description: "Yönetici değerlendirmesi bekleyen fikirler, risk notları ve pilot önerileri.",
      category: "Yönetim notu",
      date: "2026-06-15",
      source: "Kurul hazırlığı",
      files: ["karar-kurulu-haziran.pdf"]
    },
    {
      id: "store-2",
      title: "AI Host demo kapsamı",
      description: "Asistanın internet araması yapmadan platform içi veriyle cevap üretmesi için kısa kapsam notu.",
      category: "AI kaynak",
      date: "2026-06-14",
      source: "Demo dokümanı",
      files: ["ai-host-kapsam.md"]
    }
  ],
  studios: [
    { id: "studio-ops", name: "Operasyon Çözüm Stüdyosu", category: "Operasyon", status: "Aktif", popularity: 94, createdAt: "2026-06-01", description: "Şube, onay ve çağrı merkezi problemlerini hızlı pilotlara çeviren çalışma alanı.", linkedTeams: ["team-001"], linkedIdeas: ["idea-1", "idea-3"] },
    { id: "studio-ai", name: "AI Deney Laboratuvarı", category: "Yapay Zekâ", status: "Aktif", popularity: 88, createdAt: "2026-05-18", description: "Platform içi veriyle analiz, özetleme ve karar destek prototipleri geliştiren stüdyo.", linkedTeams: ["team-003"], linkedIdeas: ["idea-2", "idea-5"] },
    { id: "studio-green", name: "Yeşil Finans Stüdyosu", category: "Sürdürülebilirlik", status: "Kuruluyor", popularity: 76, createdAt: "2026-06-05", description: "ESG, karbon takip ve yeşil finans ürünlerini iş birliğiyle olgunlaştırır.", linkedTeams: ["team-002"], linkedIdeas: ["idea-1"] },
    { id: "studio-digital", name: "Dijital Ürün Stüdyosu", category: "FinTech", status: "Aktif", popularity: 81, createdAt: "2026-05-28", description: "Moka, ödeme ve dijital onboarding akışlarını ürünleştiren ekip alanı.", linkedTeams: [], linkedIdeas: ["idea-2", "idea-4"] }
  ],
  
  // Initial Datasets (Veriler)
  dataSets: [
    {
      id: "ds-1",
      title: "2026 Bulut Bilişim ve SaaS Sektör Raporu",
      summary: "İş-Net tarafından derlenmiş genel bulut verileri, sektörel büyüme oranları ve güvenlik sertifikasyon gereksinimleri.",
      sharedBy: "Defne Arman",
      companyId: "is-net",
      type: "Kurumsal",
      area: "Yapay Zekâ & Derin Teknoloji",
      importanceScore: 5,
      date: "2026-06-05",
      comments: [
        { user: "Mert Alkan", body: "SaaS entegrasyonu projemiz için harika bir hammadde kaynağı.", manager: false }
      ],
      likes: 18,
      downloads: 42
    },
    {
      id: "ds-2",
      title: "Yeni Nesil Ödeme Çözümleri Veri Seti",
      summary: "QR ve biyometrik ödeme entegrasyonları için pazar payı, işlem hızları ve müşteri kullanım oranları.",
      sharedBy: "Aslı Ergin",
      companyId: "moka",
      type: "Kurumsal",
      area: "FinTech & Dijital Bankacılık",
      importanceScore: 4,
      date: "2026-06-03",
      comments: [],
      likes: 12,
      downloads: 29
    },
    {
      id: "ds-3",
      title: "Akıllı Binalar Isı Kaybı Enerji Verisi",
      summary: "Levent Kuleler yerleşkesinde sensörlerden toplanan saatlik sıcaklık, nem ve enerji harcama kayıtları.",
      sharedBy: "Ozan Gürel",
      companyId: "is-gyo",
      type: "Kurumsal",
      area: "Sürdürülebilirlik & Yeşil Enerji",
      importanceScore: 5,
      date: "2026-05-28",
      comments: [
        { user: "Selin Eryılmaz", body: "Tuzla Ar-Ge ekibi olarak bu verileri kullanarak optimize edilmiş bir HVAC modeli geliştirebiliriz.", manager: false }
      ],
      likes: 24,
      downloads: 58
    },
    {
      id: "ds-4",
      title: "Depo Sevkiyat Bekleme Süreleri (Q1)",
      summary: "Trakya yerleşkesi lojistik bekleme ve devir süreleri. Rota optimizasyon çalışması için açık veri seti.",
      sharedBy: "Baran İleri",
      companyId: "sisecam",
      type: "Topluluk",
      area: "Akıllı Lojistik & Dağıtım",
      importanceScore: 3,
      date: "2026-06-02",
      comments: [],
      likes: 9,
      downloads: 14
    },
    {
      id: "ds-5",
      title: "Şube Onay Devir Kayıpları Çalışan Anketi",
      summary: "30 şubede 400 operasyon personeliyle yapılan anket sonuçları. Zaman kayıpları ve verimsiz iş adımları.",
      sharedBy: "Nazlı Durukan",
      companyId: "is-leasing",
      type: "Topluluk",
      area: "Operasyon",
      importanceScore: 4,
      date: "2026-05-30",
      comments: [
        { user: "Yiğit Bora", body: "Operasyon sekmesinde listelenen vardiya projesine girdi sağlayan harika bir anket.", manager: false }
      ],
      likes: 15,
      downloads: 21
    }
  ],
  
  // Initial Announcements (Duyurular)
  announcements: [
    {
      id: "ann-rec-1",
      title: "🚀 AI Destekli Rehber (NIE-02) Projemize Yazılımcı / Geliştirici Arıyoruz!",
      author: "Defne Arman",
      authorId: "p01",
      companyId: "tibas-holding",
      type: "Topluluk",
      area: "Takım Arkadaşı Aranıyor",
      importanceScore: 5,
      body: "Merhabalar! Ben Tasarım ekibinden Defne Arman. 'AI Destekli Onboarding Rehberi' (NIE-02) projesinde UI/UX Tasarımcısı olarak yer alıyorum. Fikrimizin prototipini tamamladık ve pilot öncesi ekranlarımızı tasarladık. Ancak şu an takımımızda Frontend Geliştirici rolü eksik! HTML/JS ve CSS bilgisi olan, bizimle birlikte bu ürünü hayata geçirecek ve ortak bütçeden pay alacak bir takım arkadaşı arıyoruz. Katılmak için aşağıdaki 'Başvur / Submission Gönder' butonunu kullanarak başvurunuzu iletebilirsiniz!",
      date: "2026-06-08",
      comments: [],
      likes: 42,
      ideaId: "idea-2",
      missingRoles: ["Yazılımcı / Geliştirici"],
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ann-rec-2",
      title: "🔥 Dinamik Vardiya Sistemi (NIE-01) Projesine Analist/Ürün Yöneticisi Aranıyor!",
      author: "Mehmet Demir",
      authorId: "u2",
      companyId: "sisecam",
      type: "Topluluk",
      area: "Takım Arkadaşı Aranıyor",
      importanceScore: 5,
      body: "Selamlar! Ben Bursa Mağazadan Mağaza Çalışanı Mehmet Demir. 'Dinamik Vardiya Sistemi' (NIE-01) projesinin fikir sahibiyim. Şu an şubelerdeki bekleme sürelerini analiz edip veri modellerini kuracak ve projenin ürün yönetimini üstlenecek bir Ürün Yöneticisi / Analist takım arkadaşı arıyoruz. Perakende tecrübesine ve iş analiz yeteneğine güvenen arkadaşlarımızın katılımını bekliyoruz!",
      date: "2026-06-08",
      comments: [],
      likes: 29,
      ideaId: "idea-1",
      missingRoles: ["Ürün Yöneticisi / Analist"],
      imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ann-1",
      title: "İnovasyon Kampüsü 2026 Eğitim Takvimi Açıklandı",
      body: "Holding genelinde açık fikir maratonu ve AI asistan tasarımı eğitimlerimiz haftaya başlıyor. Katılım sertifikalıdır.",
      author: "Mert Alkan",
      authorId: "p02",
      companyId: "tibas-holding",
      type: "Kurumsal",
      area: "Eğitimler",
      importanceScore: 5,
      date: "2026-06-08",
      comments: [],
      likes: 31
    },
    {
      id: "ann-2",
      title: "TSKB Sürdürülebilirlik Hackathonu Dereceleri Belli Oldu",
      body: "Yeşil finans ve karbon ayak izi azaltım fikirleriyle ilk 3'e giren ekiplerimiz pilot bütçelerini alarak çalışmalara başladı.",
      author: "Ece Uslu",
      authorId: "p05",
      companyId: "tskb",
      type: "Kurumsal",
      area: "Dereceler",
      importanceScore: 5,
      date: "2026-06-05",
      comments: [],
      likes: 27
    },
    {
      id: "ann-3",
      title: "Yeni FinTech API Altyapısı Yayında",
      author: "Aslı Ergin",
      authorId: "p15",
      companyId: "moka",
      type: "Kurumsal",
      area: "Şirket Haberleri",
      importanceScore: 4,
      body: "Moka API entegrasyonuyla QR kodlu ödeme ve lot transfer altyapısı tüm test ortamlarında geliştiricilerin kullanımına açıldı.",
      date: "2026-06-06",
      comments: [
        { user: "Kaan Öztürk", body: "Harika! Araştırma ekibi olarak yeni bültene ekliyoruz.", manager: false }
      ],
      likes: 19
    },
    {
      id: "ann-4",
      title: "Topluluk Buluşması: AI ile Fikir Geliştirme Seansı",
      body: "Bu Cuma Levent Ofisinde gerçekleştireceğimiz beyin fırtınası seansında AI asistanlarını test edeceğiz.",
      author: "Defne Arman",
      authorId: "p01",
      companyId: "independent",
      type: "Topluluk",
      area: "Etkinlikler",
      importanceScore: 4,
      date: "2026-06-07",
      comments: [],
      likes: 22
    }
  ],
  
  // Initial Social Feed Posts (Sosyal)
  socialPosts: [
    {
      id: "sp-1",
      userId: "p02",
      userName: "Mert Alkan",
      userAvatar: "https://randomuser.me/api/portraits/men/12.jpg",
      userBio: "İnovasyon Yöneticisi · İş NEW",
      body: "Yeni başlayan arkadaşlarımız için hazırladığımız AI destekli Onboarding Asistanı projemiz Fikir Borsasında listelendi! Desteklerinizi ve geri bildirimlerinizi bekliyoruz.",
      date: "2 saat önce",
      likes: 12,
      likedByMe: false,
      comments: [
        { id: "sc-1", userName: "Ece Uslu", userAvatar: "https://randomuser.me/api/portraits/women/45.jpg", body: "Harika bir proje olmuş, onboarding süremizi çok kısaltır!", date: "1 saat önce" }
      ]
    },
    {
      id: "sp-2",
      userId: "p05",
      userName: "Ece Uslu",
      userAvatar: "https://randomuser.me/api/portraits/women/45.jpg",
      userBio: "Sürdürülebilir Finans Lideri · TSKB",
      body: "Sürdürülebilirlik verilerimizi bugün 'Veri&Bilgi' sekmesinde paylaştık. Yeşil enerji projeleri geliştirmek isteyen tüm ekipler ham veri olarak kullanabilir.",
      date: "5 saat önce",
      likes: 9,
      likedByMe: false,
      comments: []
    },
    {
      id: "sp-3",
      userId: "p15",
      userName: "Aslı Ergin",
      userAvatar: "https://randomuser.me/api/portraits/women/88.jpg",
      userBio: "Ürün Sahibi · Moka",
      body: "Fintech ödeme API altyapımızla ilgili en son duyuruyu Duyurular sekmesinde paylaştık. Detaylı bilgi almak isteyen ekipler doğrudan chat üzerinden bana ulaşabilir.",
      date: "Dün",
      likes: 15,
      likedByMe: true,
      comments: []
    },
    {
      id: "sp-4",
      userId: "p03",
      userName: "Selin Eryılmaz",
      userAvatar: "https://randomuser.me/api/portraits/women/32.jpg",
      userBio: "Ar-Ge Lideri · Şişecam",
      body: "Tuzla tesisimizde devreye aldığımız akıllı sensor veri setlerini yayınladık. Enerji verimliliği odaklı yeni projeler tasarlamak için bu verileri serbestçe indirebilirsiniz. Soru ve katkılarınızı yorumlarda bekliyorum!",
      date: "Dün",
      likes: 24,
      likedByMe: false,
      comments: [
        { id: "sc-2", userName: "Mert Alkan", userAvatar: "https://randomuser.me/api/portraits/men/12.jpg", body: "Bu veri setiyle tahminleme modellerini eğitmeye başladık bile, teşekkürler Selin!", date: "Dün" }
      ]
    },
    {
      id: "sp-5",
      userId: "u3",
      userName: "Can Koç",
      userAvatar: "https://randomuser.me/api/portraits/men/75.jpg",
      userBio: "Departman Yöneticisi · İşBank Teknoloji",
      body: "Haziran dönemi fikir borsa hacmi şimdiden rekor seviyeye ulaştı. Operasyonel verimliliği artıracak tüm projelere katılım başvurusu yapmaktan çekinmeyin. Takım kurmak ve başvuru atmak artık tek tıkla çok daha kolay!",
      date: "2 gün önce",
      likes: 35,
      likedByMe: false,
      comments: []
    }
  ]
};

function currentUser() {
  return demoUsers.find(user => user.id === state.currentUserId) || demoUsers[0];
}

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function icon(name) {
  return `<i data-lucide="${name}" aria-hidden="true"></i>`;
}

function initials(name) {
  return name
    .split(" ")
    .map(part => part[0])
    .join("")
    .slice(0, 2)
    .toLocaleUpperCase("tr-TR");
}

function optionList(values, selected) {
  return values.map(value => `<option value="${esc(value)}" ${value === selected ? "selected" : ""}>${esc(value)}</option>`).join("");
}

function uniqueFromIdeas(key) {
  return ["Tümü", ...Array.from(new Set(state.ideas.map(idea => idea[key]).filter(Boolean)))];
}

function companyById(id) {
  return affiliationCompanies.find(company => company.id === id) || affiliationCompanies[0];
}

function personById(id) {
  if (!id) return null;
  if (id.startsWith("u")) {
    const du = demoUsers.find(user => user.id === id);
    if (du) {
      return {
        id: du.id,
        name: du.name,
        companyId: du.company === "İşBank Teknoloji" ? "tibas-holding" : (du.company === "İşBank Perakende Operasyonları" ? "sisecam" : "tibas-holding"),
        role: du.role,
        team: du.department,
        city: du.city || "İstanbul",
        campus: du.location || "Levent Genel Müdürlük",
        photo: du.photo || profilePhotos[du.id] || "https://randomuser.me/api/portraits/men/75.jpg",
        status: "Aktif",
        bio: du.bio || "İnovasyon ve verimlilik odaklı çalışıyorum.",
        cv: du.cv || "Eğitim: Boğaziçi Üniversitesi. Deneyim: 8 yıl Operasyon ve Süreç İyileştirme.",
        email: du.email,
        badges: du.badges || []
      };
    }
  }
  return peopleDirectory.find(person => person.id === id);
}

function companyFilterOptions(selected) {
  return [
    `<option value="all" ${selected === "all" ? "selected" : ""}>Tümü</option>`,
    ...affiliationCompanies.map(company => `<option value="${esc(company.id)}" ${company.id === selected ? "selected" : ""}>${esc(company.name)}</option>`)
  ].join("");
}

function companyLogo(company, size = "") {
  return `
    <span class="company-logo ${size}" aria-hidden="true">
      <img src="${esc(company.logo)}" alt="" loading="lazy" referrerpolicy="no-referrer" />
    </span>
  `;
}

function companyIdsInScope() {
  if (state.affiliationFilter === "all") return affiliationCompanies.map(company => company.id);
  return [state.affiliationFilter];
}

function peopleInScope(limit = Infinity) {
  const ids = companyIdsInScope();
  return peopleDirectory.filter(person => ids.includes(person.companyId)).slice(0, limit);
}

function announcementsInScope() {
  const ids = companyIdsInScope();
  return state.announcements.filter(item => {
    const companyMatch = ids.includes(item.companyId);
    const scopeMatch = state.announcementScopeFilter === "Tümü" || item.scope === state.announcementScopeFilter;
    return companyMatch && scopeMatch;
  });
}

function spacesInScope() {
  const ids = companyIdsInScope();
  return state.messageSpaces.filter(space => state.affiliationFilter === "all" || ids.includes(space.companyId) || space.companyId === "tibas-holding");
}

function syncAnnouncementDraftCompany(companyId) {
  const company = companyById(companyId);
  state.announcementDraft.companyId = company.id;
  state.announcementDraft.country = company.countries[0] || "";
  state.announcementDraft.city = company.cities[0] || "";
  state.announcementDraft.campus = company.campuses[0] || "";
  state.announcementDraft.department = company.departments[0] || "Tüm ekipler";
}

function renderAvatarStack(ids, max = 4) {
  const members = ids.map(personById).filter(Boolean);
  const shown = members.slice(0, max);
  const rest = Math.max(0, members.length - shown.length);
  return `
    <span class="avatar-stack" aria-label="${members.length} kişi">
      ${shown.map(person => avatar(person.name, "tiny", person.photo)).join("")}
      ${rest ? `<span class="avatar tiny avatar-count">+${rest}</span>` : ""}
    </span>
  `;
}

function marketCompanyForIdea(idea) {
  return companyById(idea.companyId || "is-new");
}

function marketPrice(idea) {
  return Math.max(20, Math.round(Number(idea.marketPrice || 100)));
}

function marketTrendScore(idea) {
  return Math.round((idea.aiScore || 70) * 0.42 + (idea.communityScore || 60) * 0.34 + (idea.supporters || 0) * 1.4 + Math.max(0, Number(idea.marketChange || 0)) * 2);
}

function marketVisibleIdeas() {
  const companyIds = companyIdsInScope();
  let ideas = state.ideas.filter(idea => state.affiliationFilter === "all" || companyIds.includes(idea.companyId || "is-new"));
  if (state.marketCategoryFilter !== "Tümü") ideas = ideas.filter(idea => (idea.marketCategory || "Fikir") === state.marketCategoryFilter);
  const marketSearch = state.marketSearch.trim().toLocaleLowerCase("tr-TR");
  if (marketSearch) {
    ideas = ideas.filter(idea => [
      idea.title,
      idea.summary,
      idea.marketTicker,
      idea.marketCategory,
      marketCompanyForIdea(idea).shortName,
      marketCompanyForIdea(idea).name,
      ...(idea.files || [])
    ].join(" ").toLocaleLowerCase("tr-TR").includes(marketSearch));
  }

  const sorters = {
    "Revaç": (a, b) => marketTrendScore(b) - marketTrendScore(a),
    "En çok yükselen": (a, b) => Number(b.marketChange || 0) - Number(a.marketChange || 0),
    "En çok düşen": (a, b) => Number(a.marketChange || 0) - Number(b.marketChange || 0),
    "Hacim": (a, b) => Number(b.marketVolume || 0) - Number(a.marketVolume || 0),
    "Fiyat": (a, b) => marketPrice(b) - marketPrice(a)
  };

  return ideas.sort(sorters[state.marketSort] || sorters["Revaç"]);
}

function marketPortfolioValue() {
  return Object.entries(state.marketHoldings).reduce((sum, [id, quantity]) => {
    const idea = state.ideas.find(item => item.id === id);
    return sum + (idea ? marketPrice(idea) * quantity : 0);
  }, 0);
}

function marketDeltaClass(value) {
  return Number(value) >= 0 ? "positive" : "negative";
}

function formatCurrency(value) {
  return `₺${Math.round(value).toLocaleString("tr-TR")}`;
}

function marketSparkline(points = [], change = 0) {
  const up = change >= 0;
  return `
    <span class="market-trend-arrow ${up ? "up" : "down"}" aria-hidden="true">
      ${up ? `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      ` : `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="7" y1="7" x2="17" y2="17"></line>
          <polyline points="17 7 17 17 7 17"></polyline>
        </svg>
      `}
    </span>
  `;
}

function resetMarketDraft(context = state.marketComposerContext || "quickFlow") {
  state.marketDraft = {
    title: "",
    summary: "",
    category: context === "announcements" ? "Araştırma" : "Proje",
    companyId: state.affiliationFilter === "all" ? "is-new" : state.affiliationFilter,
    scope: "Holding geneli",
    files: []
  };
}

function rewardMarketBudget(amount, label) {
  state.marketBudget += amount;
  state.quickFlowFeedback = `${label}: ${formatCurrency(amount)} demo bütçe eklendi.`;
}

function statusBadge(status) {
  const meta = statusMeta[status] || statusMeta.new;
  return `<span class="status-badge ${meta.className}">${esc(meta.label)}</span>`;
}

function photoForName(name) {
  if (String(name).toLocaleLowerCase("tr-TR").startsWith("anonim")) return "";
  if (namedAvatarPhotos[name]) return namedAvatarPhotos[name];
  const user = demoUsers.find(item => item.name === name);
  return user?.avatarUrl || "";
}

function avatar(name, size = "", imageUrl = "") {
  const resolvedUrl = imageUrl || photoForName(name);
  if (resolvedUrl) {
    return `<span class="avatar ${size}" aria-hidden="true"><img src="${esc(resolvedUrl)}" alt="" loading="eager" referrerpolicy="no-referrer" /></span>`;
  }

  return `<span class="avatar ${size}" aria-hidden="true">${esc(initials(name))}</span>`;
}

function brandLockup(compact = false) {
  return `
    <span class="isbank-lockup ${compact ? "compact" : ""}" aria-label="Türkiye İş Bankası - NEW IDEA EXCHANGE">
      <img class="isbank-logo-image" src="${esc(brandLogoSrc)}" alt="Türkiye İş Bankası" />
      <small>${esc(state.brandName)}</small>
    </span>
  `;
}

function canAccess(item, user = currentUser()) {
  if (item.adminOnly && !user.isAdmin) return false;
  if (item.managerOnly && !user.isManager && !user.isAdmin) return false;
  return true;
}

function allowedNav() {
  return cleanNavIds.map(id => navItems.find(item => item.id === id)).filter(item => item && canAccess(item));
}

function pageLabel() {
  if (state.page === "detail") return "Fikir Detayı";
  return navItems.find(item => item.id === state.page)?.label || "Ana Sayfa";
}

function pageSubtitle() {
  const subtitles = {
    announcements: "Holding, iştirak, ülke, şehir ve bina ölçeğinde duyurular",
    messages: "Gruplar, direkt mesajlar ve kurum profilleri",
    dashboard: "İnovasyon portföyü ve aksiyon özeti",
    managerDashboard: "Oy, yatırım ve ürün performansı yönetici analitiği",
    agenda: "Adminlerin manuel eklediği kurumsal gündem akışı",
    ideas: "Öneri, şikayet ve iyileştirme kayıtları",
    quickFlow: "Proje, fikir, araştırma ve şikayet piyasası",
    newIdea: "Öneri veya süreç bildirimi",
    chat: "Departman ve lokasyon kanalları",
    challenges: "Aktif inovasyon yarışmaları",
    implemented: "Uygulanan fikirlerin etkisi",
    analytics: "Sinyal, trend ve önceliklendirme",
    notifications: "Fikir, chat ve yönetici bildirimleri",
    profile: "Katkıların ve rozetlerin",
    manager: "Değerlendirme ve karar kuyruğu",
    admin: "Yetki ve sistem yönetimi",
    adminStorage: "Yönetici notları, dosyaları ve kaynak arşivi",
    studio: "Kategori bazlı çalışma alanları ve ürünleşme stüdyoları",
    products: "Geliştirilmiş fikirler ve ürünleşme seviyesi",
    systemDetails: "İş NEW platformunun çalışma prensipleri, teknik altyapısı ve kullanım kılavuzu",
    settings: "Marka, görünüm ve bildirim tercihleri",
    detail: "Problem, çözüm, skorlar ve yorumlar",
    rules: "İş NEW platformunun kullanım ve topluluk kuralları",
    complaintBox: "Uygulama, teknik sorun veya kullanıcılar hakkında geri bildirim/şikayet",
    teams: "Ekip listesi, üyeler ve proje bağlantıları"
  };
  return subtitles[state.page] || "";
}

function render() {
  document.body.dataset.theme = state.theme;
  app.innerHTML = state.loggedIn ? renderShell() : renderLogin();
  if (window.lucide) window.lucide.createIcons();

  // Auto-scroll AI Assistant chat
  const messagesBox = document.querySelector(".ai-messages-box");
  if (messagesBox) {
    messagesBox.scrollTop = messagesBox.scrollHeight;
  }

  // Make AI Assistant bubble draggable
  initAIBubbleDraggability();
}

function resetScroll() {
  const jump = () => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };
  jump();
  requestAnimationFrame(jump);
  setTimeout(jump, 80);
}

function renderLogin() {
  const selected = demoUsers.find(user => user.id === state.selectedLoginUserId) || demoUsers[0];
  const ready = state.accessKeyAccepted || state.onboardingStep === 2;
  return `
    <main class="login-page apple-login">
      <section class="apple-access-card">
        <div class="apple-access-brand">
          ${brandLockup()}
        </div>

        ${ready ? `
          <div class="apple-found-user">
            ${avatar(selected.name, "large", selected.avatarUrl)}
            <span>
              <small>Kurumsal profil doğrulandı</small>
              <strong>Hoş geldin, ${esc(selected.name.split(" ")[0])}.</strong>
              <em>${esc(selected.department)} · ${esc(selected.role)}</em>
            </span>
          </div>
          <div class="apple-login-copy">
            <h1>Çalışma alanın hazır.</h1>
            <p>Fikir havuzu, hızlı değerlendirme ve karar panelleri rolüne göre açıldı.</p>
          </div>
          <button class="btn primary block" data-action="login">${icon("arrow-right")} Devam et</button>
        ` : `
          <div class="apple-login-copy">
            <h1>Kurumsal erişim</h1>
            <p>Türkiye İş Bankası iç inovasyon alanına giriş için exchange key'ini gir.</p>
          </div>
          <label class="field apple-key-field">
            <span>Exchange key</span>
            <input class="input" data-access-key value="${esc(state.accessKeyInput)}" placeholder="NIE-..." autocomplete="off" />
            ${state.loginError ? `<small class="form-error">${esc(state.loginError)}</small>` : ""}
          </label>
          <div class="demo-key-row">
            <span>Demo key <code>${esc(demoAccessKey)}</code></span>
            <button class="btn ghost" data-action="copy-demo-key">${icon("copy")} Doldur</button>
          </div>
          <button class="btn primary block" data-action="validate-key">${icon("unlock-keyhole")} Girişe devam et</button>
        `}

        <p class="security-note">Demo key altta görünür. Gerçek ortamda erişim şirket içi kimlikle doğrulanır.</p>
      </section>
    </main>
  `;
}

function renderShell() {
  const user = currentUser();
  const nav = allowedNav();
  return `
    <div class="app-shell apple-shell">
      ${state.mobileOpen ? `<button class="mobile-backdrop" data-action="close-menu" aria-label="Menüyü kapat"></button>` : ""}
      <aside class="sidebar ${state.mobileOpen ? "open" : "closed"}">
        <div class="brand">
          ${brandLockup(true)}
        </div>
        <nav class="nav-list" aria-label="Ana navigasyon">
          ${nav.map(item => `
            <button class="nav-item ${state.page === item.id ? "active" : ""}" data-page="${esc(item.id)}">
              ${icon(item.icon)}
              <span>${esc(item.label)}</span>
            </button>
          `).join("")}
        </nav>
        <div class="sidebar-footer">
          <div class="theme-switch">
            <span>Tema</span>
            <button class="switch" data-action="toggle-theme" aria-label="Tema değiştir"><span></span></button>
          </div>
          <div class="mini-profile">
            ${avatar(user.name, "", user.avatarUrl)}
            <span>
              <strong>${esc(user.name)}</strong>
              <span>${esc(user.department)}</span>
            </span>
          </div>
        </div>
      </aside>

      <div class="main-shell">
        <header class="topbar">
          <button class="icon-button menu-button" data-action="toggle-menu" aria-label="Menüyü aç">${icon("menu")}</button>
          <div class="page-title">
            <h1>${esc(pageLabel())}</h1>
            <span>${esc(pageSubtitle())}</span>
          </div>
          <label class="search-box">
            ${icon("search")}
            <span class="sr-only">Global arama</span>
            <input class="input" data-global-search placeholder="Ara" />
          </label>
          <div class="top-actions">
            <span class="credit-pill">${icon("coins")} ${user.voteCreditBalance}</span>
            <button class="icon-button" data-action="toggle-theme" aria-label="Tema değiştir">${icon(state.theme === "dark" ? "sun" : "moon")}</button>
            <button class="icon-button position-relative" data-page="notifications" aria-label="Bildirimler">
              ${icon("bell")}
              ${state.notifications.filter(n => n.unread).length ? `<span class="bell-badge">${state.notifications.filter(n => n.unread).length}</span>` : ""}
            </button>
            <button class="btn primary" data-page="newIdea">${icon("plus")} Başvuru</button>
          </div>
        </header>
        <main class="page-content">
          ${renderPage()}
        </main>
        ${renderMobileNav(nav)}
      </div>
      ${state.fileInspector ? renderFileInspector() : ""}
      ${renderAIAssistantWidget()}
      ${renderReportModal()}
    </div>
  `;
}

function renderMobileNav(nav) {
  const ids = ["dashboard", "quickFlow", "agenda", "studio", "teams", "profile"];
  const mobileLabels = {
    dashboard: "Panel",
    announcements: "Duyuru",
    challenges: "Yarışma",
    messages: "Mesaj",
    data: "Veri&Bilgi",
    agenda: "Gündem",
    studio: "Stüdyo",
    teams: "Ekip",
    social: "Sosyal",
    quickFlow: "Borsa",
    profile: "Profil"
  };
  return `
    <nav class="mobile-nav" aria-label="Mobil navigasyon">
      ${ids.map(id => {
        const item = nav.find(entry => entry.id === id);
        if (!item) return "";
        return `<button class="mobile-tab ${state.page === id ? "active" : ""}" data-page="${esc(id)}">${icon(item.icon)}<span>${esc(mobileLabels[id] || item.label)}</span></button>`;
      }).join("")}
    </nav>
  `;
}

function renderPage() {
  const pageItem = navItems.find(item => item.id === state.page) || { id: state.page, managerOnly: state.page === "manager", adminOnly: state.page === "admin" };
  if (!canAccess(pageItem)) {
    state.page = "quickFlow";
  }

  switch (state.page) {
    case "dashboard":
      return renderDashboard();
    case "managerDashboard":
      return renderManagerDashboard();
    case "data":
      return renderDataPage();
    case "agenda":
      return renderAgendaPage();
    case "social":
      return renderSocial();
    case "announcements":
      return renderAnnouncements();
    case "messages":
      return renderMessages();
    case "studio":
      return renderStudioPage();
    case "teams":
      return renderTeamsDirectory();
    case "products":
      return renderAdvancedProductsPage();
    case "ideas":
      return renderIdeas();
    case "quickFlow":
      return renderQuickFlow();
    case "quickEval":
      return renderQuickEval();
    case "newIdea":
      return renderNewIdea();
    case "detail":
      return renderIdeaDetail();
    case "applyPage":
      return renderApplicationPage();
    case "chat":
      return renderChat();
    case "challenges":
      return renderChallenges();
    case "implemented":
      return renderImplemented();
    case "analytics":
      return renderAnalyticsV2();
    case "notifications":
      return renderNotifications();
    case "profile":
      return renderProfileV2();
    case "manager":
      return renderManagerV2();
    case "admin":
      return renderAdmin();
    case "adminStorage":
      return renderAdminStorage();
    case "systemDetails":
      return renderSystemDetails();
    case "settings":
      return renderSettings();
    case "rules":
      return renderRulesPage();
    case "complaintBox":
      return renderComplaintBoxPage();
    default:
      return renderQuickFlow();
  }
}

function renderDashboard() {
  const user = currentUser();
  const departmentIdeas = state.ideas.filter(idea => idea.department === user.department || idea.company === user.company);
  const implemented = state.ideas.filter(idea => idea.status === "done");
  const highAi = state.ideas.filter(idea => idea.aiScore >= 88);
  const highlights = [...state.ideas].sort((a, b) => b.aiScore + b.communityScore - (a.aiScore + a.communityScore)).slice(0, 3);
  const focusIdea = highlights[0] || state.ideas[0];
  const queueCount = state.ideas.filter(idea => ["new", "review", "pilot"].includes(idea.status)).length;
  const reviewCount = state.ideas.filter(idea => idea.status === "review").length + 24;
  const pilotCount = state.ideas.filter(idea => idea.status === "pilot").length + 8;
  const totalPortfolio = state.ideas.length + 146;

  return `
    <div class="view-stack apple-page">
      <section class="apple-hero">
        <div class="apple-hero-copy">
          <span class="panel-kicker">Veri&Bilgi Alanı</span>
          <h2>Kurum içi veri, duyuru ve piyasa sinyali.</h2>
          <p>Öneri, araştırma, proje ve duyuruları tek bilgi katmanında izle; revaçta olan başlıkları Borsa hareketiyle gör.</p>
        </div>
        <div class="apple-hero-actions">
          <button class="btn ghost" data-page="quickFlow">${icon("chart-candlestick")} Borsayı aç</button>
          <button class="btn ghost" data-action="open-market-composer" data-context="dashboard">${icon("file-plus-2")} Veri ekle</button>
          <button class="btn primary" data-page="newIdea">${icon("plus")} Yeni başvuru</button>
        </div>
      </section>

      ${state.marketComposerContext === "dashboard" ? renderMarketComposer("dashboard") : ""}

      <section class="apple-bento-grid" aria-label="Veri ve bilgi özeti">
        <article class="apple-bento-card apple-bento-card-large">
          <span class="panel-kicker">Borsa odağı</span>
          <h3>${esc(focusIdea.title)}</h3>
          <p>${esc(focusIdea.summary)}</p>
          <div class="apple-chip-row">
            <span>${esc(focusIdea.department)}</span>
            <span>AI ${focusIdea.aiScore}</span>
            <span>${focusIdea.supporters} destek</span>
          </div>
          <div class="field-row">
            <button class="btn primary" data-page="quickFlow">${icon("arrow-up-right")} İşlem yap</button>
            <button class="btn ghost" data-action="open-idea" data-id="${esc(focusIdea.id)}">${icon("eye")} Detay</button>
          </div>
        </article>

        ${appleStatCard("folder-kanban", "Portföy", `${totalPortfolio}`, "aktif kayıt")}
        ${appleStatCard("clipboard-check", "İnceleme", `${reviewCount}`, "karar bekliyor")}
        ${appleStatCard("rocket", "Pilot", `${pilotCount}`, "deneme")}
        ${appleStatCard("check-circle-2", "Uygulandı", `${implemented.length + 7}`, "tamamlandı")}
      </section>

      <section class="corporate-flow-panel" aria-label="Kurumsal değerlendirme akışı">
        ${workflowStep("01", "Toplama", `${totalPortfolio} kayıt`, "Fikir, öneri ve şikayetler tek havuzda toplanır.")}
        ${workflowStep("02", "Ön inceleme", `${reviewCount} başlık`, "AI sinyali ve topluluk desteğiyle önceliklenir.")}
        ${workflowStep("03", "Pilot", `${pilotCount} aday`, "Düşük riskli alanlarda kısa pilot önerisi çıkarılır.")}
        ${workflowStep("04", "Uygulama", `${implemented.length + 7} tamam`, "Etki ölçümüyle portföye geri bildirim döner.")}
      </section>

      <section class="apple-content-grid">
        <article class="content-panel apple-panel">
          <div class="section-title">
            <div>
              <h2>Karara yakın başlıklar</h2>
              <p>Etki, destek ve uygulanabilirlik sinyali yüksek kayıtlar.</p>
            </div>
            <button class="btn ghost" data-page="ideas">${icon("arrow-right")} Havuzu aç</button>
          </div>
          <div class="apple-idea-list">
            ${highlights.map(idea => simpleIdeaRow(idea)).join("")}
          </div>
        </article>

        <aside class="content-panel apple-panel">
          <div class="section-title">
            <div>
              <h2>Operasyon sinyalleri</h2>
              <p>Bugünkü portföy hareketi.</p>
            </div>
          </div>
          <div class="signal-list">
            ${[
              ["trending-up", "Müşteri bekleme süresi yükseldi", "%18 artış"],
              ["zap", "Hızlı kazanım adayı", `${queueCount} açık başlık`],
              ["shield-check", "Anonim bildirimler", "Departman bazında kümelendi"]
            ].map(signal => signalItem(signal[0], signal[1], signal[2])).join("")}
          </div>
        </aside>
      </section>
    </div>
  `;
}

function workflowStep(number, title, value, body) {
  return `
    <article class="workflow-step">
      <span>${esc(number)}</span>
      <strong>${esc(title)}</strong>
      <em>${esc(value)}</em>
      <p>${esc(body)}</p>
    </article>
  `;
}

function appleStatCard(iconName, label, value, note) {
  return `
    <article class="apple-bento-card apple-stat-card">
      <span class="apple-stat-icon">${icon(iconName)}</span>
      <strong>${esc(value)}</strong>
      <span>${esc(label)}</span>
      <small>${esc(note)}</small>
    </article>
  `;
}

function simpleIdeaRow(idea) {
  const authorUser = demoUsers.find(user => user.id === idea.authorId);
  const isAnonymous = String(idea.authorLabel || "").toLocaleLowerCase("tr-TR").startsWith("anonim");
  const authorName = isAnonymous ? "Anonim" : (idea.authorLabel || authorUser?.name || "Çalışan");
  return `
    <button class="apple-idea-row" data-action="open-idea" data-id="${esc(idea.id)}">
      ${avatar(authorName, "small", isAnonymous ? "" : authorUser?.avatarUrl)}
      <span>
        <strong>${esc(idea.title)}</strong>
        <small>${esc(idea.department)} · AI ${idea.aiScore}</small>
      </span>
      ${statusBadge(idea.status)}
    </button>
  `;
}

function metricCard(iconName, label, value, note, trend, color = "") {
  return `
    <article class="metric-card">
      <div class="metric-top">
        <span class="metric-icon ${color}">${icon(iconName)}</span>
        <span class="trend">${icon("arrow-up-right")} ${esc(trend)}</span>
      </div>
      <div>
        <div class="metric-value">${esc(value)}</div>
        <div class="metric-label">${esc(label)}</div>
        <div class="metric-note">${esc(note)}</div>
      </div>
    </article>
  `;
}

function signalItem(iconName, title, body) {
  return `
    <div class="signal-item">
      <span class="signal-dot">${icon(iconName)}</span>
      <span>
        <strong>${esc(title)}</strong>
        <span>${esc(body)}</span>
      </span>
    </div>
  `;
}

function miniPanel(title, iconName, items) {
  return `
    <article class="content-panel">
      <div class="section-title">
        <div class="title-left">
          <span class="title-icon">${icon(iconName)}</span>
          <div><h2>${esc(title)}</h2></div>
        </div>
      </div>
      <div class="mini-list">
        ${items.map(item => `
          <div class="mini-item">
            <span>
              <strong>${esc(item[0])}</strong>
              <span>${esc(item[1])}</span>
            </span>
            ${icon("chevron-right")}
          </div>
        `).join("")}
      </div>
    </article>
  `;
}

function renderIdeas() {
  const ideas = filteredIdeas();
  return `
    <div class="view-stack apple-page">
      <section class="apple-page-head">
        <div>
          <h2>Fikir Havuzu</h2>
          <p>Kurum içi tüm inovasyon, öneri ve süreç iyileştirme başvuruları.</p>
        </div>
        <button class="btn primary" data-page="newIdea">${icon("plus")} Yeni başvuru</button>
      </section>

      <section class="content-panel apple-toolbar-panel">
        <div class="toolbar">
          <label class="search-box">
            ${icon("search")}
            <span class="sr-only">Fikir ara</span>
            <input class="input" data-idea-filter="search" value="${esc(state.filters.search)}" placeholder="Fikir ara" />
          </label>
          <select class="select" data-idea-filter="sort" aria-label="Sıralama">
            ${optionList(["En yeni", "En çok desteklenen", "AI tarafından önerilen", "Yüksek etki / düşük maliyet", "Yönetici incelemesinde"], state.filters.sort)}
          </select>
          <div class="segmented" aria-label="Görünüm">
            <button data-action="set-view" data-view="cards" class="${state.ideaView === "cards" ? "active" : ""}" title="Kart görünümü">${icon("layout-grid")}</button>
            <button data-action="set-view" data-view="table" class="${state.ideaView === "table" ? "active" : ""}" title="Tablo görünümü">${icon("table-2")}</button>
          </div>
        </div>
        <div class="filter-row">
          ${filterSelect("department", uniqueFromIdeas("department"))}
          ${filterSelect("status", ["Tümü", ...Object.values(statusMeta).map(meta => meta.label)])}
          ${filterSelect("type", ["Tümü", ...ideaTypes])}
          <button class="btn ghost" data-action="reset-filters">${icon("rotate-ccw")} Temizle</button>
        </div>
      </section>

      ${ideas.length ? (state.ideaView === "cards" ? `
        <section class="idea-list grid">
          ${ideas.map(idea => renderIdeaCard(idea)).join("")}
        </section>
      ` : renderIdeaTable(ideas)) : renderEmpty("search-x", "Bu filtrelere uygun fikir bulunamadı.", "Aramayı genişlet veya farklı bir departman seç.")}
    </div>
  `;
}

function quickFlowIdeas() {
  return [...state.ideas].sort((a, b) => {
    const bScore = b.aiScore + b.communityScore + b.strategicScore + b.supporters;
    const aScore = a.aiScore + a.communityScore + a.strategicScore + a.supporters;
    return bScore - aScore;
  });
}

function renderQuickFlow() {
  if (state.ideaView === "table") {
    return renderTradingExchange();
  }

  const ideas = filteredBorsaIdeas();
  const portfolioValue = marketPortfolioValue();

  return `
    <div class="view-stack borsa-page">
      <section class="apple-hero" style="padding: 24px; border-radius: 20px; background: var(--surface); border: 1px solid var(--line-soft); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
        <div>
          <span class="panel-kicker">NEW IDEA EXCHANGE</span>
          <h2>Fikir Borsası</h2>
          <p>Proje, fikir ve araştırmalar burada listelenir. Al, sat ve raporları incele.</p>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <div class="market-wallet" style="text-align: right;">
            <span>Bütçe</span>
            <strong style="display: block; font-size: 22px; color: var(--ink);">${formatCurrency(state.marketBudget)}</strong>
            <small style="color: var(--muted);">Portföy ${formatCurrency(portfolioValue)}</small>
          </div>
          <button class="btn primary" data-action="open-market-composer" data-context="quickFlow">${icon("plus")} Proje Ekle</button>
        </div>
      </section>

      <!-- AI & Yatırım Politikası Bilgi Bandı -->
      <section class="info-banner" style="background: rgba(59, 130, 246, 0.08); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 16px; padding: 16px; margin: 16px 0 8px 0; display: flex; flex-direction: column; gap: 8px; font-size: 13.5px; line-height: 1.5;">
        <div style="display: flex; align-items: center; gap: 8px; font-weight: 600; color: var(--primary);">
          ${icon("info")} Önemli Değerlendirme & Hayata Geçirilme Kuralları
        </div>
        <ul style="margin: 0; padding-left: 20px; color: var(--ink-soft); display: flex; flex-direction: column; gap: 4px;">
          <li><strong>Yapay Zeka Barajı:</strong> AI değerlendirme skoru <strong>70'in altında</strong> kalan projeler doğrudan reddedilir.</li>
          <li><strong>Tüzük Uyumluluğu:</strong> Yapay zeka analizi sonucunda tüzüğe veya kurum politikalarına aykırı bulunan fikirler sistem tarafından otomatik olarak elenir.</li>
          <li><strong>Hayata Geçirilme Ödülü (41 Kat Kredi):</strong> Desteklediğiniz proje başarıyla hayata geçirildiğinde (Done / pivotlaşma sonrası destek), projeye yaptığınız yatırım miktarının <strong>41 katı</strong> kadar kredi hesabınıza ödül olarak anında tanımlanır.</li>
        </ul>
      </section>

      ${state.marketComposerContext === "quickFlow" ? renderMarketComposer("quickFlow") : ""}

      <!-- Filters & Search Toolbar -->
      <section class="content-panel apple-toolbar-panel" style="padding: 16px; border-radius: 16px; margin-top: 10px;">
        <div class="toolbar" style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
          <label class="search-box" style="flex: 1; min-width: 200px;">
            ${icon("search")}
            <input class="input" placeholder="Borsada proje, kişi, alan veya etiket ara..." data-market-filter="search" value="${esc(state.marketSearch || '')}" />
          </label>
          
          <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
            <select class="select" data-market-filter="company" aria-label="Şirket Filtresi">
              <option value="Tümü" ${state.filters.company === 'Tümü' ? 'selected' : ''}>Şirket: Tümü</option>
              <option value="Şirketler" ${state.filters.company === 'Şirketler' ? 'selected' : ''}>Şirketler</option>
              <option value="Bağımsız" ${state.filters.company === 'Bağımsız' ? 'selected' : ''}>Bağımsız / Topluluk</option>
              ${affiliationCompanies.map(c => `
                <option value="${c.id}" ${state.filters.company === c.id ? 'selected' : ''}>${esc(c.shortName)}</option>
              `).join("")}
            </select>
            
            <select class="select" data-market-filter="league" aria-label="Lig Filtresi">
              <option value="Tümü" ${state.filters.league === 'Tümü' ? 'selected' : ''}>Lig: Tümü</option>
              <option value="Proje" ${state.filters.league === 'Proje' ? 'selected' : ''}>Proje</option>
              <option value="Fikir" ${state.filters.league === 'Fikir' ? 'selected' : ''}>Fikir</option>
              <option value="Araştırma" ${state.filters.league === 'Araştırma' ? 'selected' : ''}>Araştırma</option>
            </select>

            <select class="select" data-market-filter="area" aria-label="Alan Filtresi">
              <option value="Tümü" ${state.filters.area === 'Tümü' ? 'selected' : ''}>Alan: Tümü</option>
              ${borsaAreas.map(area => `
                <option value="${esc(area)}" ${state.filters.area === area ? 'selected' : ''}>${esc(area)}</option>
              `).join("")}
            </select>

            <select class="select" data-market-filter="sort" aria-label="Sıralama">
              ${optionList(["En yeni", "En önemli", "En çok etkileşim alan", "En çok yorumlanan", "Fiyat"], state.marketSort)}
            </select>

            <button class="btn ghost slim-btn" data-action="clear-borsa-filters" style="padding: 6px 12px; font-size: 13px;">
              ${icon("rotate-ccw")} Temizle
            </button>
            
            <div class="segmented" style="width: auto;">
              <button class="${state.ideaView === 'cards' ? 'active' : ''}" data-action="set-borsa-layout" data-layout="cards" title="Kart Görünümü">${icon("layout-grid")}</button>
              <button class="${state.ideaView === 'table' ? 'active' : ''}" data-action="set-borsa-layout" data-layout="table" title="Tahta Görünümü (Terminal)">${icon("table-2")}</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Borsa Card Grid -->
      <section class="borsa-card-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 20px; margin-top: 10px;">
        ${ideas.map(idea => renderBorsaCard(idea)).join("") || `<div class="trading-empty">Bu filtrelere uygun proje bulunamadı.</div>`}
      </section>
      
      ${state.quickFlowFeedback ? `<div class="quick-feedback market-feedback stock-feedback">${esc(state.quickFlowFeedback)}</div>` : ""}
    </div>
  `;
}

function renderMarketLeader(idea, index) {
  const company = marketCompanyForIdea(idea);
  const change = Number(idea.marketChange || 0);
  return `
    <article class="market-leader-card rank-${index + 1}">
      <div class="market-leader-top">
        <span class="market-rank">#${index + 1}</span>
        ${companyLogo(company, "mini")}
      </div>
      <strong>${esc(idea.marketTicker)}</strong>
      <h3>${esc(idea.title)}</h3>
      <div class="market-line">
        ${marketSparkline(idea.marketSpark, change)}
        <span class="market-price">${formatCurrency(marketPrice(idea))}</span>
      </div>
      <footer>
        <span>${esc(idea.marketCategory || "Fikir")}</span>
        <em class="${marketDeltaClass(change)}">${change >= 0 ? "+" : ""}${change.toFixed(1)}%</em>
      </footer>
    </article>
  `;
}

function renderMarketRow(idea, index) {
  const company = marketCompanyForIdea(idea);
  const change = Number(idea.marketChange || 0);
  const owned = state.marketHoldings[idea.id] || 0;
  return `
    <article class="market-row">
      <span class="market-rank muted">#${index + 1}</span>
      <div class="market-asset">
        ${companyLogo(company, "mini")}
        <span>
          <strong>${esc(idea.title)}</strong>
          <small>${esc(idea.marketTicker)} · ${esc(company.shortName)} · ${esc(idea.marketCategory || "Fikir")}</small>
        </span>
      </div>
      ${marketSparkline(idea.marketSpark, change)}
      <span class="market-price">${formatCurrency(marketPrice(idea))}</span>
      <span class="market-change ${marketDeltaClass(change)}">${change >= 0 ? "+" : ""}${change.toFixed(1)}%</span>
      <span class="market-volume">${Number(idea.marketVolume || 0).toLocaleString("tr-TR")} hacim</span>
      <span class="market-owned">${owned} lot</span>
      <span class="market-actions">
        <button class="btn ghost" data-action="sell-market" data-id="${esc(idea.id)}" ${owned <= 0 ? "disabled" : ""}>Sat</button>
        <button class="btn primary" data-action="buy-market" data-id="${esc(idea.id)}">Al</button>
      </span>
    </article>
  `;
}

function tradingRows() {
  return marketVisibleIdeas().slice(0, 9);
}

function tradingMarketStats(rows) {
  const safeRows = rows.length ? rows : state.ideas.slice(0, 1);
  const movers = safeRows.filter(item => Number(item.marketChange || 0) >= 0).length;
  const volume = safeRows.reduce((sum, item) => sum + Number(item.marketVolume || 0), 0);
  const averageChange = safeRows.reduce((sum, item) => sum + Number(item.marketChange || 0), 0) / Math.max(1, safeRows.length);
  return { movers, volume, averageChange };
}

function tradingCashDelta(rows) {
  const portfolio = marketPortfolioValue();
  const weightedChange = rows.reduce((sum, item) => {
    const quantity = state.marketHoldings[item.id] || 0;
    return sum + quantity * marketPrice(item) * (Number(item.marketChange || 0) / 100);
  }, 0);
  return { portfolio, total: state.marketBudget + portfolio, weightedChange };
}

function tradingSparkPath(points = []) {
  const safe = points.length ? points : [46, 48, 45, 55, 58, 61, 59, 68];
  const width = 420;
  const height = 156;
  const min = Math.min(...safe);
  const max = Math.max(...safe);
  const range = Math.max(1, max - min);
  const coords = safe.map((point, index) => {
    const x = safe.length === 1 ? 0 : (index / (safe.length - 1)) * width;
    const y = height - ((point - min) / range) * (height - 30) - 15;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const area = `0,${height} ${coords.join(" ")} ${width},${height}`;
  return { line: coords.join(" "), area, width, height };
}

function renderTradingChart(rows) {
  const focus = rows[0] || state.ideas[0];
  const candles = marketCandles(focus, 24);
  const values = candles.flatMap(candle => [candle.high, candle.low]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(1, max - min);
  const width = 420;
  const height = 168;
  const scaleY = value => height - 14 - ((value - min) / range) * (height - 28);
  const candleGap = width / Math.max(1, candles.length - 1);
  const bodyWidth = Math.max(5, Math.min(10, candleGap * 0.45));

  return `
    <div class="trading-chart-card candle" aria-label="Portföy grafiği">
      <svg class="trading-chart trading-candle-chart" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
        <line class="trading-chart-grid" x1="0" y1="${height * 0.72}" x2="${width}" y2="${height * 0.72}" />
        <line class="trading-chart-grid soft" x1="0" y1="${height * 0.38}" x2="${width}" y2="${height * 0.38}" />
        ${candles.map((candle, index) => {
          const x = index * candleGap;
          const open = scaleY(candle.open);
          const close = scaleY(candle.close);
          const high = scaleY(candle.high);
          const low = scaleY(candle.low);
          const up = candle.close >= candle.open;
          const bodyY = Math.min(open, close);
          const bodyHeight = Math.max(2, Math.abs(close - open));
          return `
            <g class="chart-candle ${up ? "up" : "down"}">
              <line x1="${x.toFixed(1)}" y1="${high.toFixed(1)}" x2="${x.toFixed(1)}" y2="${low.toFixed(1)}"></line>
              <rect x="${(x - bodyWidth / 2).toFixed(1)}" y="${bodyY.toFixed(1)}" width="${bodyWidth.toFixed(1)}" height="${bodyHeight.toFixed(1)}" rx="1.5"></rect>
            </g>
          `;
        }).join("")}
      </svg>
      <div class="trading-chart-axis">
        <span>09:30</span>
        <span>12:00</span>
        <span>15:30</span>
        <span>17:45</span>
      </div>
    </div>
  `;
}

function tradingPricePill(idea, mode) {
  const base = marketPrice(idea);
  const spread = Math.max(1, Math.round(base * 0.012));
  const price = mode === "buy" ? base + spread : Math.max(1, base - spread);
  return formatCurrency(price);
}

function bundleFileName(file = "") {
  return typeof file === "string" ? file : file?.name || "dosya";
}

function bundleFileSize(file = "") {
  const size = typeof file === "string" ? 0 : Number(file?.size || 0);
  if (!size) return "";
  if (size >= 1024 * 1024) return `${(size / (1024 * 1024)).toLocaleString("tr-TR", { maximumFractionDigits: 1 })} MB`;
  if (size >= 1024) return `${Math.round(size / 1024).toLocaleString("tr-TR")} KB`;
  return `${size} B`;
}

function bundleFileExtension(file = "") {
  const name = bundleFileName(file).toLocaleLowerCase("tr-TR");
  return name.includes(".") ? name.split(".").pop() : "";
}

function bundleMeta(file = "") {
  const ext = bundleFileExtension(file);
  if (["xlsx", "xls", "xlsm", "xlsb", "ods"].includes(ext)) return { label: ext.toUpperCase(), family: "sheet", icon: "table-2" };
  if (ext === "csv") return { label: "CSV", family: "csv", icon: "table" };
  if (["ppt", "pptx", "pptm", "key", "odp"].includes(ext)) return { label: ext.toUpperCase(), family: "deck", icon: "presentation" };
  if (ext === "pdf") return { label: "PDF", family: "pdf", icon: "file-text" };
  if (["doc", "docx", "docm", "rtf"].includes(ext)) return { label: ext.toUpperCase(), family: "doc", icon: "file-type" };
  if (["png", "jpg", "jpeg", "webp", "gif"].includes(ext)) return { label: ext.toUpperCase(), family: "image", icon: "image" };
  if (["txt", "md", "json"].includes(ext)) return { label: ext.toUpperCase(), family: "text", icon: "file-code-2" };
  if (["zip", "rar", "7z"].includes(ext)) return { label: ext.toUpperCase(), family: "archive", icon: "package" };
  return { label: ext ? ext.toUpperCase() : "EK", family: "generic", icon: "paperclip" };
}

function uploadAcceptList() {
  return ".pdf,.xlsx,.xls,.xlsm,.xlsb,.ods,.csv,.ppt,.pptx,.pptm,.key,.odp,.doc,.docx,.docm,.rtf,.txt,.md,.json,.zip,.png,.jpg,.jpeg,.webp";
}

function renderUploadSummary(files, emptyText) {
  const list = files || [];
  if (!list.length) return esc(emptyText);
  return `
    <span class="upload-file-pills">
      ${list.map(file => {
        const meta = bundleMeta(file);
        return `<span>${icon(meta.icon)} ${esc(bundleFileName(file))}</span>`;
      }).join("")}
    </span>
  `;
}

async function selectedFileRecords(input, limit = 8) {
  const files = Array.from(input.files || []).slice(0, limit);
  return Promise.all(files.map(async file => {
    const meta = bundleMeta(file.name);
    const record = {
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
      objectUrl: URL.createObjectURL(file)
    };
    if (["csv", "text"].includes(meta.family) || ["txt", "md", "json"].includes(bundleFileExtension(file.name))) {
      try {
        record.textPreview = (await file.text()).slice(0, 8000);
      } catch (error) {
        record.textPreview = "";
      }
    }
    return record;
  }));
}

function marketBundleFiles(idea) {
  return idea.files?.length ? idea.files : defaultBundleFiles(idea.marketTicker, idea.marketCategory || "Fikir");
}

function marketBundleValue(idea) {
  const typeBonus = { Proje: 120, Fikir: 80, "Araştırma": 95, "Şikayet": 70 }[idea.marketCategory || "Fikir"] || 70;
  return typeBonus + marketBundleFiles(idea).length * 35 + Math.round(Number(idea.aiScore || 70) * 0.8);
}

function renderBundleChips(idea, compact = false) {
  return `
    <span class="asset-bundle-chips ${compact ? "compact" : ""}">
      ${marketBundleFiles(idea).slice(0, compact ? 2 : 4).map(file => {
        const meta = bundleMeta(file);
        const name = bundleFileName(file);
        return `<button type="button" title="${esc(name)}" data-action="open-bundle-file" data-id="${esc(idea.id)}" data-file="${esc(name)}">${icon(meta.icon)} ${esc(meta.label)}</button>`;
      }).join("")}
      <em>${formatCurrency(marketBundleValue(idea))}</em>
    </span>
  `;
}

function renderBundleLibrary(idea, compact = false) {
  const files = marketBundleFiles(idea);
  return `
    <section class="file-bundle-module ${compact ? "compact" : ""}">
      <div class="file-bundle-head">
        <span>
          <small>Bundle</small>
          <strong>Ek dosyalar</strong>
        </span>
        <em>${files.length} dosya · ${formatCurrency(marketBundleValue(idea))}</em>
      </div>
      <div class="file-bundle-grid">
        ${files.map(file => {
          const meta = bundleMeta(file);
          const name = bundleFileName(file);
          const size = bundleFileSize(file);
          return `
            <button type="button" class="file-bundle-tile ${esc(meta.family)}" data-action="open-bundle-file" data-id="${esc(idea.id)}" data-file="${esc(name)}">
              <span>${icon(meta.icon)}</span>
              <strong>${esc(name)}</strong>
              <small>${esc(meta.label)}${size ? ` · ${esc(size)}` : ""}</small>
            </button>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function fileForInspector(idea, fileName) {
  return marketBundleFiles(idea).find(file => bundleFileName(file) === fileName) || fileName;
}

function renderFileInspector() {
  const active = state.fileInspector || {};
  const idea = state.ideas.find(item => item.id === active.ideaId) || state.ideas[0];
  const file = fileForInspector(idea, active.fileName);
  const meta = bundleMeta(file);
  const name = bundleFileName(file);
  const size = bundleFileSize(file);
  return `
    <div class="file-inspector-backdrop" role="dialog" aria-modal="true" aria-label="${esc(name)}">
      <button class="file-inspector-scrim" data-action="close-file-inspector" aria-label="Dosya inceleyiciyi kapat"></button>
      <section class="file-inspector-panel">
        <header class="file-inspector-head">
          <span class="file-inspector-icon ${esc(meta.family)}">${icon(meta.icon)}</span>
          <div>
            <small>${esc(meta.label)}${size ? ` · ${esc(size)}` : ""}</small>
            <h3>${esc(name)}</h3>
            <p>${esc(idea.marketTicker || "NIE")} · ${esc(idea.title)}</p>
          </div>
          <button class="icon-button" data-action="close-file-inspector" aria-label="Kapat">${icon("x")}</button>
        </header>
        <div class="file-inspector-body">
          ${renderFilePreview(file, idea, meta)}
        </div>
      </section>
    </div>
  `;
}

function renderFilePreview(file, idea, meta = bundleMeta(file)) {
  if (meta.family === "pdf") return renderPdfPreview(file, idea);
  if (meta.family === "csv") return renderCsvPreview(file, idea);
  if (meta.family === "sheet") return renderSheetPreview(file, idea);
  if (meta.family === "deck") return renderDeckPreview(file, idea);
  if (meta.family === "doc") return renderDocPreview(file, idea);
  if (meta.family === "image") return renderImagePreview(file, idea);
  if (meta.family === "text") return renderTextPreview(file, idea);
  return renderGenericFilePreview(file, idea);
}

function renderPdfPreview(file, idea) {
  const url = typeof file === "string" ? "" : file.objectUrl;
  return `
    <div class="pdf-preview">
      ${url ? `<object data="${esc(url)}" type="application/pdf"><p>PDF yerel görüntüleyicide açılamadı.</p></object>` : `
        <article class="pdf-page-preview">
          <span>${esc(idea.marketTicker || "NIE")}</span>
          <h4>${esc(idea.title)}</h4>
          <p>${esc(idea.summary || idea.problem || "")}</p>
          <div class="pdf-lines">
            <i></i><i></i><i></i><i></i><i></i><i></i>
          </div>
        </article>
        <article class="pdf-side-notes">
          <strong>Doküman özeti</strong>
          <span>Problem tanımı</span>
          <span>Çözüm hipotezi</span>
          <span>Pilot kapsamı</span>
          <span>KPI ve risk notları</span>
        </article>
      `}
    </div>
  `;
}

function renderCsvPreview(file, idea) {
  const raw = typeof file === "string" ? "" : file.textPreview || "";
  const rows = raw
    ? raw.split(/\r?\n/).filter(Boolean).slice(0, 8).map(line => line.split(/[;,]/).slice(0, 5))
    : [
      ["metric", "baseline", "target", "owner", "period"],
      ["wait_time", "14 dk", "9 dk", idea.department, "4 hafta"],
      ["complaints", "128", "92", "CX", "aylık"],
      ["volume", String(idea.marketVolume || 820), String((idea.marketVolume || 820) + 240), "Borsa", "günlük"]
    ];
  return renderPreviewTable(rows, "CSV veri önizlemesi");
}

function renderSheetPreview(file, idea) {
  const rows = [
    ["Sayfa", "Alan", "Mevcut", "Hedef", "Durum"],
    ["KPI", idea.successMetric || "Ana metrik", "Baz alınacak", "İyileşme", "Takip"],
    ["Bütçe", "Tahmini maliyet", idea.estimatedCost || "Orta", "Onay", "Açık"],
    ["Etki", "Öncelik", idea.estimatedImpact || "Yüksek", `AI ${idea.aiScore || 80}`, "Aktif"],
    ["Hacim", "Piyasa ilgisi", formatMarketVolume(idea.marketVolume || 0), `${idea.supporters || 0} destek`, "Canlı"]
  ];
  return renderPreviewTable(rows, "Excel çalışma kitabı");
}

function renderPreviewTable(rows, title) {
  const [head, ...body] = rows;
  return `
    <div class="sheet-preview">
      <div class="sheet-toolbar">
        <strong>${esc(title)}</strong>
        <span>A1:${String.fromCharCode(64 + Math.max(...rows.map(row => row.length)))}${rows.length}</span>
      </div>
      <table>
        <thead><tr>${head.map(cell => `<th>${esc(cell)}</th>`).join("")}</tr></thead>
        <tbody>
          ${body.map(row => `<tr>${head.map((_, index) => `<td>${esc(row[index] || "")}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderDeckPreview(file, idea) {
  const slides = [
    ["Problem", idea.problem || idea.summary],
    ["Çözüm", idea.solution || "Pilot önerisi ve uygulama akışı"],
    ["Etki", `${idea.estimatedImpact || "Yüksek"} etki · AI ${idea.aiScore || 80}`]
  ];
  return `
    <div class="deck-preview">
      ${slides.map((slide, index) => `
        <article>
          <small>${index + 1}/3</small>
          <h4>${esc(slide[0])}</h4>
          <p>${esc(slide[1] || "")}</p>
          <span></span>
        </article>
      `).join("")}
    </div>
  `;
}

function renderDocPreview(file, idea) {
  return `
    <div class="doc-preview">
      <aside>
        <strong>İçindekiler</strong>
        <span>1. Özet</span>
        <span>2. Kapsam</span>
        <span>3. Riskler</span>
        <span>4. Sonraki adım</span>
      </aside>
      <article>
        <h4>${esc(idea.title)}</h4>
        <p>${esc(idea.summary || idea.problem || "")}</p>
        <p>${esc(idea.riskNotes || "Riskler ve uygulama notları yönetici incelemesinde netleştirilecek.")}</p>
      </article>
    </div>
  `;
}

function renderImagePreview(file, idea) {
  const url = typeof file === "string" ? "" : file.objectUrl;
  return `
    <div class="image-preview">
      ${url ? `<img src="${esc(url)}" alt="${esc(bundleFileName(file))}" />` : `
        <div class="image-placeholder">
          ${icon("image")}
          <strong>${esc(idea.marketTicker || "NIE")}</strong>
          <span>Görsel önizleme</span>
        </div>
      `}
    </div>
  `;
}

function renderTextPreview(file, idea) {
  const text = typeof file === "string" ? `${idea.title}\n\n${idea.summary || idea.problem || ""}` : file.textPreview || "";
  return `<pre class="text-preview">${esc(text || "Metin önizlemesi oluşturulamadı.")}</pre>`;
}

function renderGenericFilePreview(file, idea) {
  return `
    <div class="generic-file-preview">
      ${icon("paperclip")}
      <h4>${esc(bundleFileName(file))}</h4>
      <p>${esc(idea.summary || idea.problem || "Bu dosya bundle içinde saklanıyor ve yetkili ekipler tarafından incelenebilir.")}</p>
    </div>
  `;
}

function renderAssetMiniChart(idea) {
  const change = Number(idea.marketChange || 0);
  const up = change >= 0;
  return `
    <span class="asset-trend-badge ${up ? "up" : "down"}" aria-label="${esc(idea.marketTicker)} trendi">
      <span class="trend-badge-icon">
        ${up ? `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        ` : `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        `}
      </span>
      <span class="trend-badge-text">${up ? "Yukarı" : "Aşağı"}</span>
    </span>
  `;
}

function marketQuote(idea) {
  const last = marketPrice(idea);
  const spread = Math.max(1, Math.round(last * 0.006));
  return {
    last,
    bid: Math.max(1, last - spread),
    ask: last + spread,
    volume: Number(idea.marketVolume || 0)
  };
}

function formatMarketVolume(value) {
  const volume = Number(value || 0);
  if (volume >= 1000000) return `${(volume / 1000000).toLocaleString("tr-TR", { maximumFractionDigits: 1 })}M`;
  if (volume >= 1000) return `${Math.round(volume / 1000).toLocaleString("tr-TR")}K`;
  return volume.toLocaleString("tr-TR");
}

function renderMarketTickerTape(rows, wallet, stats) {
  const gainers = rows.filter(item => Number(item.marketChange || 0) >= 0).length;
  const decliners = Math.max(0, rows.length - gainers);
  const top = rows[0] || state.ideas[0];
  const topChange = Number(top?.marketChange || 0);
  const items = [
    ["NIE100", Math.round(wallet.total / 10).toLocaleString("tr-TR"), stats.averageChange],
    ["İŞNEW", `${gainers}/${Math.max(1, rows.length)}`, gainers >= decliners ? 1.2 : -0.8],
    ["ADV/DEC", `${gainers}/${decliners}`, gainers - decliners],
    ["VOL", `${Math.round(stats.volume / 1000).toLocaleString("tr-TR")}K`, stats.volume > 0 ? 0.7 : 0],
    [top?.marketTicker || "NIE", formatCurrency(marketPrice(top || state.ideas[0])), topChange]
  ];

  return `
    <section class="market-ticker-tape" aria-label="Canlı piyasa bandı">
      ${items.map(([label, value, delta]) => `
        <article>
          <span>${esc(label)}</span>
          <strong>${esc(value)}</strong>
          <em class="${marketDeltaClass(delta)}">${Number(delta) >= 0 ? "+" : ""}${Number(delta).toFixed(Math.abs(Number(delta)) >= 10 ? 1 : 2)}</em>
        </article>
      `).join("")}
      <button type="button" data-action="set-market-panel" data-panel="watchlist">${icon("activity")} Tahtayı aç</button>
    </section>
  `;
}

function renderMarketDesk(rows, wallet, stats) {
  const selected = marketSelectedIdea(rows);
  const company = marketCompanyForIdea(selected);
  const change = Number(selected.marketChange || 0);
  const owned = state.marketHoldings[selected.id] || 0;
  const quote = marketQuote(selected);
  return `
    <section class="market-desk">
      <article class="market-desk-lead">
        <div class="market-desk-symbol">
          ${companyLogo(company, "large")}
          <span>
            <small>${esc(company.shortName)} · ${esc(selected.marketCategory || "Fikir")}</small>
            <strong>${esc(selected.marketTicker)}</strong>
            <em class="${marketDeltaClass(change)}">${change >= 0 ? "+" : ""}${change.toFixed(2)}%</em>
          </span>
        </div>
        <h3>${esc(selected.title)}</h3>
        ${selected.status === "rejected" ? `
          <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: 8px; padding: 8px 12px; display: flex; align-items: center; gap: 8px; font-size: 12.5px; color: var(--negative); font-weight: 600; margin-bottom: 8px;">
            ${icon("alert-triangle")} BU PROJE ELENDİ / REDDEDİLDİ (Yapay Zeka)
          </div>
        ` : ""}
        <p>${esc(selected.summary || selected.problem || "")}</p>
        <div class="market-desk-metrics">
          <span><small>Son</small><strong>${formatCurrency(quote.last)}</strong></span>
          <span><small>Hacim</small><strong>${formatMarketVolume(quote.volume)}</strong></span>
          <span><small>Portföy</small><strong>${owned} lot</strong></span>
        </div>
        <div class="market-desk-actions">
          <button type="button" data-action="sell-market" data-id="${esc(selected.id)}" ${owned <= 0 || selected.status === "rejected" ? "disabled" : ""}>Sat</button>
          <button type="button" data-action="buy-market" data-id="${esc(selected.id)}" ${selected.status === "rejected" ? "disabled" : ""}>Al</button>
          <button type="button" data-action="open-idea" data-id="${esc(selected.id)}">${icon("folder-open")} Dosya</button>
        </div>
      </article>

      <article class="market-desk-chart">
        <div class="market-chart-head">
          <span>Fikir Borsası · 1D</span>
          <strong>${formatCurrency(wallet.total)}</strong>
          <em class="${marketDeltaClass(stats.averageChange)}">${stats.averageChange >= 0 ? "+" : ""}${stats.averageChange.toFixed(2)}%</em>
        </div>
        ${renderTradingChart([selected])}
      </article>

      <article class="market-depth-panel">
        <div class="market-depth-head">
          <span>Derinlik</span>
          <strong>Alış / Satış</strong>
        </div>
        ${renderMarketDepth(selected)}
      </article>
    </section>
  `;
}

function renderMarketDepth(idea) {
  const quote = marketQuote(idea);
  const baseVolume = Math.max(180, Number(idea.marketVolume || 900) / 12);
  const rows = Array.from({ length: 5 }, (_, index) => {
    const bid = quote.bid - index * 3;
    const ask = quote.ask + index * 3;
    const bidVol = Math.round(baseVolume * (1 - index * 0.11));
    const askVol = Math.round(baseVolume * (0.82 - index * 0.08));
    return { bid, ask, bidVol, askVol };
  });
  return `
    <div class="market-depth-book">
      ${rows.map(row => `
        <div>
          <span class="bid" style="--w:${Math.min(100, row.bidVol / baseVolume * 100)}%">${formatCurrency(row.bid)}</span>
          <small>${row.bidVol.toLocaleString("tr-TR")}</small>
          <small>${row.askVol.toLocaleString("tr-TR")}</small>
          <span class="ask" style="--w:${Math.min(100, row.askVol / baseVolume * 100)}%">${formatCurrency(row.ask)}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function marketSelectedIdea(rows = marketVisibleIdeas()) {
  return rows.find(idea => idea.id === state.marketSelectedId) || rows[0] || state.ideas[0];
}

function marketRangeFactor() {
  return { "1D": 1, "1W": 1.18, "1M": 1.35, "3M": 1.62, YTD: 1.88, "1Y": 2.15 }[state.marketRange] || 1;
}

function marketCandles(idea, count = 28) {
  const spark = idea.marketSpark?.length ? idea.marketSpark : [44, 48, 43, 54, 59, 63, 61, 71];
  const base = marketPrice(idea);
  const factor = marketRangeFactor();
  const change = Number(idea.marketChange || 0) / 100;
  const candles = [];
  let previous = base * (1 - change * 0.55);
  for (let index = 0; index < count; index += 1) {
    const sparkIndex = (index / Math.max(1, count - 1)) * (spark.length - 1);
    const left = spark[Math.floor(sparkIndex)] || spark[0];
    const right = spark[Math.ceil(sparkIndex)] || left;
    const interpolated = left + (right - left) * (sparkIndex % 1);
    const wave = Math.sin(index * 1.17 + base / 37) * 0.012 * factor;
    const drift = ((interpolated - 55) / 100) * 0.06 * factor + change * (index / Math.max(1, count - 1));
    const close = Math.max(8, base * (1 + drift + wave));
    const open = index === 0 ? previous : previous;
    const spread = Math.max(1.2, Math.abs(close - open) * 0.65 + base * 0.006 * factor);
    const high = Math.max(open, close) + spread * (0.55 + (index % 3) * 0.16);
    const low = Math.max(1, Math.min(open, close) - spread * (0.48 + (index % 4) * 0.12));
    const volume = Math.max(18, Math.round((Number(idea.marketVolume || 900) / 120) * (0.65 + (index % 5) * 0.12)));
    candles.push({ open, close, high, low, volume });
    previous = close;
  }
  return candles;
}

function renderProfessionalMarketChart(idea) {
  const candles = marketCandles(idea, 34);
  const values = candles.flatMap(candle => [candle.high, candle.low]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(1, max - min);
  const chart = { x: 42, y: 34, w: 670, h: 312 };
  const rsi = { x: 42, y: 374, w: 670, h: 86 };
  const macd = { x: 42, y: 490, w: 670, h: 92 };
  const scaleY = value => chart.y + chart.h - ((value - min) / range) * chart.h;
  const scaleX = index => chart.x + index * (chart.w / Math.max(1, candles.length - 1));
  const volumeMax = Math.max(...candles.map(candle => candle.volume));
  const priceLabels = [max, min + range * 0.75, min + range * 0.5, min + range * 0.25, min];
  const last = candles[candles.length - 1];
  const lastY = scaleY(last.close);
  const rsiPoints = candles.map((candle, index) => {
    const strength = 42 + ((candle.close - candle.open) / Math.max(1, range)) * 120 + (index % 7) * 2.2;
    const x = rsi.x + index * (rsi.w / Math.max(1, candles.length - 1));
    const y = rsi.y + rsi.h - (Math.max(22, Math.min(78, strength)) / 100) * rsi.h;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  const macdLine = candles.map((candle, index) => {
    const x = macd.x + index * (macd.w / Math.max(1, candles.length - 1));
    const y = macd.y + macd.h * 0.54 - Math.sin(index * 0.38 + marketPrice(idea) / 70) * 26 - (candle.close - candle.open) * 0.16;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  const signalLine = candles.map((candle, index) => {
    const x = macd.x + index * (macd.w / Math.max(1, candles.length - 1));
    const y = macd.y + macd.h * 0.56 - Math.cos(index * 0.32 + marketPrice(idea) / 80) * 19 - (candle.close - candle.open) * 0.1;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");

  return `
    <figure class="pro-chart-frame" aria-label="${esc(idea.marketTicker)} profesyonel grafik">
      <svg class="pro-candle-chart" viewBox="0 0 760 620" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="chartDepth-${esc(idea.id)}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#19e568" stop-opacity="0.16" />
            <stop offset="100%" stop-color="#19e568" stop-opacity="0" />
          </linearGradient>
        </defs>
        <rect x="${chart.x}" y="${chart.y}" width="${chart.w}" height="${chart.h}" class="chart-depth"></rect>
        ${[0, 0.25, 0.5, 0.75, 1].map(tick => {
          const y = chart.y + chart.h * tick;
          return `<line class="chart-grid" x1="${chart.x}" y1="${y.toFixed(1)}" x2="${chart.x + chart.w}" y2="${y.toFixed(1)}"></line>`;
        }).join("")}
        ${priceLabels.map((price, index) => {
          const y = chart.y + chart.h * (index / 4);
          return `<text class="price-label" x="${chart.x + chart.w + 12}" y="${(y + 4).toFixed(1)}">${Math.round(price)}</text>`;
        }).join("")}
        <line class="last-price-line" x1="${chart.x}" y1="${lastY.toFixed(1)}" x2="${chart.x + chart.w}" y2="${lastY.toFixed(1)}"></line>
        <text class="last-price-tag" x="${chart.x + chart.w - 4}" y="${(lastY - 8).toFixed(1)}">${marketPrice(idea)}</text>
        ${candles.map((candle, index) => {
          const x = scaleX(index);
          const open = scaleY(candle.open);
          const close = scaleY(candle.close);
          const high = scaleY(candle.high);
          const low = scaleY(candle.low);
          const up = candle.close >= candle.open;
          const bodyY = Math.min(open, close);
          const bodyH = Math.max(3, Math.abs(close - open));
          const bodyW = Math.max(5, Math.min(13, chart.w / candles.length * 0.54));
          const volH = Math.max(8, (candle.volume / volumeMax) * 52);
          const volY = chart.y + chart.h - volH;
          return `
            <g class="candle ${up ? "up" : "down"}">
              <line x1="${x.toFixed(1)}" y1="${high.toFixed(1)}" x2="${x.toFixed(1)}" y2="${low.toFixed(1)}"></line>
              <rect x="${(x - bodyW / 2).toFixed(1)}" y="${bodyY.toFixed(1)}" width="${bodyW.toFixed(1)}" height="${bodyH.toFixed(1)}" rx="2"></rect>
              <rect class="volume-bar" x="${(x - bodyW / 2).toFixed(1)}" y="${volY.toFixed(1)}" width="${bodyW.toFixed(1)}" height="${volH.toFixed(1)}" rx="1"></rect>
            </g>
          `;
        }).join("")}
        <line class="indicator-separator" x1="${rsi.x}" y1="${rsi.y}" x2="${rsi.x + rsi.w}" y2="${rsi.y}"></line>
        <text class="indicator-label" x="${rsi.x}" y="${rsi.y - 10}">RSI 57.04</text>
        <polyline class="rsi-band-top" points="${rsi.x},${rsi.y + rsi.h * 0.26} ${rsi.x + rsi.w},${rsi.y + rsi.h * 0.26}"></polyline>
        <polyline class="rsi-band-bottom" points="${rsi.x},${rsi.y + rsi.h * 0.72} ${rsi.x + rsi.w},${rsi.y + rsi.h * 0.72}"></polyline>
        <polyline class="rsi-line" points="${rsiPoints}"></polyline>
        <line class="indicator-separator" x1="${macd.x}" y1="${macd.y}" x2="${macd.x + macd.w}" y2="${macd.y}"></line>
        <text class="indicator-label" x="${macd.x}" y="${macd.y - 10}">MACD 0.03 0.02 0.01</text>
        ${candles.map((candle, index) => {
          const x = macd.x + index * (macd.w / Math.max(1, candles.length - 1));
          const up = candle.close >= candle.open;
          const h = Math.max(4, Math.abs(candle.close - candle.open) * 0.35 + (index % 6) * 2);
          const y = macd.y + macd.h * 0.64 - (up ? h : 0);
          return `<rect class="macd-bar ${up ? "up" : "down"}" x="${(x - 4).toFixed(1)}" y="${y.toFixed(1)}" width="8" height="${h.toFixed(1)}" rx="1"></rect>`;
        }).join("")}
        <polyline class="macd-line" points="${macdLine}"></polyline>
        <polyline class="signal-line" points="${signalLine}"></polyline>
      </svg>
    </figure>
  `;
}

function marketNewsForRows(rows) {
  const safeRows = rows.length ? rows : state.ideas.slice(0, 4);
  return safeRows.slice(0, 4).map((idea, index) => {
    const company = marketCompanyForIdea(idea);
    const change = Number(idea.marketChange || 0);
    const newsTypes = ["AI sentiment", "Hacim alarmı", "Yönetici ilgisi", "Bundle skoru"];
    const signal = change >= 8 ? "güçlü alım ilgisi" : change < 0 ? "düşüş sonrası takip" : "kademeli toparlanma";
    return {
      id: `${idea.id}-news`,
      type: newsTypes[index % newsTypes.length],
      title: `${idea.marketTicker} için ${signal}`,
      body: `${company.shortName} tarafında ${idea.marketCategory || "Fikir"} varlığı ${marketBundleFiles(idea).length} dosyalı bundle ile izleniyor.`,
      change
    };
  });
}

function renderAINewsFeed(rows) {
  return `
    <section class="ai-news-card">
      <div class="stock-card-head">
        <span>
          <small>AI News</small>
          <strong>Revaçta haberler</strong>
        </span>
        <em>${icon("sparkles")} canlı</em>
      </div>
      <div class="ai-news-list">
        ${marketNewsForRows(rows).map(item => `
          <article>
            <span>${esc(item.type)}</span>
            <strong>${esc(item.title)}</strong>
            <p>${esc(item.body)}</p>
            <em class="${marketDeltaClass(item.change)}">${item.change >= 0 ? "+" : ""}${item.change.toFixed(2)}%</em>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderLevelWallets(wallet) {
  return `
    <section class="level-wallet-card">
      <div class="stock-card-head">
        <span>
          <small>Wallet</small>
          <strong>Seviye paraları</strong>
        </span>
        <em>${formatCurrency(wallet.total)}</em>
      </div>
      <div class="level-wallet-grid">
        ${levelWallets.map(level => `
          <article>
            <small>${esc(level.scope)}</small>
            <strong>${esc(level.label)}</strong>
            <span>${formatCurrency(level.balance)}</span>
            <em class="${marketDeltaClass(level.delta)}">${level.delta >= 0 ? "+" : ""}${level.delta.toFixed(1)}%</em>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderAssetChartBoard(rows) {
  const topRows = rows.slice(0, 5);
  return `
    <section class="asset-chart-board">
      <div class="stock-card-head">
        <span>
          <small>Chart board</small>
          <strong>Varlık bazlı grafikler</strong>
        </span>
        <em>${topRows.length} tablo</em>
      </div>
      <div class="asset-chart-table">
        ${topRows.map(idea => `
          <article>
            <span>
              <strong>${esc(idea.marketTicker)}</strong>
              <small>${esc(idea.title)}</small>
            </span>
            ${renderAssetMiniChart(idea)}
            <em class="${marketDeltaClass(idea.marketChange)}">${Number(idea.marketChange || 0) >= 0 ? "+" : ""}${Number(idea.marketChange || 0).toFixed(2)}%</em>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderAssetTradingBoard(rows) {
  const topRows = rows.slice(0, 6);
  return `
    <section class="asset-chart-board market-board-terminal" aria-label="Canlı varlık tahtası">
      <div class="market-board-head">
        <span>
          <small>Market tape</small>
          <strong>Canlı varlık tahtası</strong>
        </span>
        <em>${topRows.length} en aktif varlık</em>
      </div>
      <div class="market-board-grid">
        <div class="market-board-labels" aria-hidden="true">
          <span>Sembol</span>
          <span>Başlık</span>
          <span>Son</span>
          <span>Alış / Satış</span>
          <span>Hacim</span>
          <span>Grafik</span>
          <span>%</span>
          <span>İşlem</span>
        </div>
        ${topRows.map(idea => {
          const company = marketCompanyForIdea(idea);
          const quote = marketQuote(idea);
          const change = Number(idea.marketChange || 0);
          const owned = state.marketHoldings[idea.id] || 0;
          return `
            <article class="market-board-row ${change >= 0 ? "up" : "down"}">
              <button class="market-board-symbol" type="button" data-action="open-idea" data-id="${esc(idea.id)}">
                ${companyLogo(company, "tiny")}
                <span>
                  <strong>${esc(idea.marketTicker)}</strong>
                  <small>${esc(company.shortName)} · ${esc(idea.marketCategory || "Fikir")}</small>
                </span>
              </button>
              <span class="market-board-title">${esc(idea.title)}</span>
              <strong class="market-board-last">${formatCurrency(quote.last)}</strong>
              <span class="market-board-spread">
                <em>${formatCurrency(quote.bid)}</em>
                <em>${formatCurrency(quote.ask)}</em>
              </span>
              <span class="market-board-volume">${formatMarketVolume(quote.volume)}</span>
              ${renderAssetMiniChart(idea)}
              <em class="market-board-change ${marketDeltaClass(change)}">${change >= 0 ? "+" : ""}${change.toFixed(2)}%</em>
              <span class="market-board-actions">
                <button type="button" data-action="sell-market" data-id="${esc(idea.id)}" ${owned <= 0 ? "disabled" : ""}>Sat</button>
                <button type="button" data-action="buy-market" data-id="${esc(idea.id)}">Al</button>
              </span>
            </article>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderTradingTabPanel(rows, wallet, stats, holdings) {
  const active = state.marketPanel || "home";
  const panelTitles = {
    home: ["Ana Sayfa", "Piyasa özeti ve AI haberleri"],
    watchlist: ["Takip Listesi", "Filtrelenen varlıklar ve paket tabloları"],
    portfolio: ["Yatırımlarım", "Desteklenen projeler ve performans"],
    discover: ["Keşfet", "AI Haberleri, revaçtaki olaylar ve fırsatlar"],
    wallet: ["Cüzdan", "Seviye paraları ve katkı ödülleri"]
  };
  const [title, subtitle] = panelTitles[active] || panelTitles.home;
  return `
    <section class="trading-functional-panel" data-market-panel="${esc(active)}">
      <div class="stock-card-head">
        <span>
          <small>Fikir Borsası</small>
          <strong>${esc(title)}</strong>
        </span>
        <em>${esc(subtitle)}</em>
      </div>
      ${active === "portfolio" ? `
        <div class="portfolio-detail-grid">
          <article><small>Yatırımlarım</small><strong>${formatCurrency(wallet.portfolio)}</strong><span>${holdings.length || 0} aktif destek</span></article>
          <article><small>Günlük P/L</small><strong class="${marketDeltaClass(wallet.weightedChange)}">${wallet.weightedChange >= 0 ? "+" : ""}${formatCurrency(Math.abs(wallet.weightedChange))}</strong><span>Fiyat değişimi anlık</span></article>
          <article><small>Hacim</small><strong>${Math.round(stats.volume / 1000)}K</strong><span>bugünkü işlem</span></article>
        </div>
      ` : ""}
      ${active === "wallet" ? `
        ${renderLevelWallets(wallet)}
        <div class="reward-strip">
          ${marketCategories.map(category => `<span><strong>${esc(category)}</strong>${formatCurrency(marketRewardByCategory[category] || 500)} katkı değeri</span>`).join("")}
        </div>
      ` : ""}
      ${active === "discover" || active === "home" ? renderAINewsFeed(rows) : ""}
      ${active === "watchlist" || active === "home" || active === "discover" ? renderAssetTradingBoard(rows) : ""}
      ${active === "portfolio" ? `
        <div class="trading-holdings expanded">
          ${holdings.join("") || `<div class="trading-empty">Henüz pozisyon yok. Watchlist üzerinden alım yap.</div>`}
        </div>
      ` : ""}
    </section>
  `;
}

function renderTradingMover(idea, index) {
  const change = Number(idea.marketChange || 0);
  const height = Math.max(34, Math.min(112, 48 + Math.abs(change) * 14 + index * 4));
  const company = marketCompanyForIdea(idea);
  return `
    <article class="trading-mover ${change >= 0 ? "up" : "down"}">
      <strong>${change >= 0 ? "+" : ""}${change.toFixed(2)}%</strong>
      <span class="trading-mover-bar" style="height:${height}px"></span>
      ${companyLogo(company, "mini")}
      <small>${esc(idea.marketTicker)}</small>
    </article>
  `;
}

function renderTradingWatchRow(idea, index) {
  const company = marketCompanyForIdea(idea);
  const change = Number(idea.marketChange || 0);
  const owned = state.marketHoldings[idea.id] || 0;
  return `
    <article class="stock-watch-row">
      <button class="stock-symbol-cell" data-action="open-idea" data-id="${esc(idea.id)}">
        ${companyLogo(company, "mini")}
        <span>
          <strong>${esc(idea.marketTicker)} ${idea.status === "rejected" ? '<span style="font-size: 8px; background: var(--negative); color: #fff; padding: 1px 4px; border-radius: 4px; margin-left: 4px;">RED</span>' : ''}</strong>
          <small>${esc(company.shortName)} · ${esc(idea.marketCategory || "Fikir")}</small>
        </span>
      </button>
      <span class="stock-title-cell">
        <strong>${esc(idea.title)}</strong>
        <small>${owned} birim · ${Number(idea.marketVolume || 0).toLocaleString("tr-TR")} hacim</small>
        ${renderBundleChips(idea, true)}
      </span>
      ${renderAssetMiniChart(idea)}
      <span class="stock-change-cell ${marketDeltaClass(change)}">${change >= 0 ? "+" : ""}${change.toFixed(2)}%</span>
      <button class="stock-price-pill short" data-action="sell-market" data-id="${esc(idea.id)}" ${owned <= 0 || idea.status === "rejected" ? "disabled" : ""}>
        ${idea.status === "rejected" ? '<span style="font-size: 10px; color: var(--muted);">Red</span>' : tradingPricePill(idea, "short")}
      </button>
      <button class="stock-price-pill buy" data-action="buy-market" data-id="${esc(idea.id)}" ${idea.status === "rejected" ? "disabled" : ""}>
        ${idea.status === "rejected" ? '<span style="font-size: 10px; color: var(--muted);">Red</span>' : tradingPricePill(idea, "buy")}
      </button>
    </article>
  `;
}

function renderTradingHolding(idea) {
  const quantity = state.marketHoldings[idea.id] || 0;
  if (!quantity) return "";
  const change = Number(idea.marketChange || 0);
  return `
    <article class="trading-holding-row">
      <span>
        <strong>${esc(idea.marketTicker)}</strong>
        <small>${quantity} lot · maliyet ${formatCurrency(quantity * marketPrice(idea))}</small>
      </span>
      <em class="${marketDeltaClass(change)}">${change >= 0 ? "+" : ""}${change.toFixed(2)}%</em>
    </article>
  `;
}

function renderTradingBottomTabs(active = "home") {
  const tabs = [
    ["home", "Ana Sayfa", "house"],
    ["watchlist", "Takip Listesi", "list-filter"],
    ["portfolio", "Portföyüm", "pie-chart"],
    ["discover", "Keşfet", "search"],
    ["wallet", "Cüzdan", "wallet"]
  ];
  return `
    <nav class="trading-bottom-tabs" aria-label="Borsa alt menü">
      ${tabs.map(([id, label, iconName]) => `
        <button class="${active === id ? "active" : ""}" type="button" data-action="set-market-panel" data-panel="${esc(id)}">
          ${icon(iconName)}
          <span>${label}</span>
        </button>
      `).join("")}
    </nav>
  `;
}

function renderTradingExchange() {
  const rows = tradingRows();
  const leaders = rows.slice(0, 5);
  const holdings = state.ideas.map(renderTradingHolding).filter(Boolean);
  const stats = tradingMarketStats(rows);
  const wallet = tradingCashDelta(rows);
  const selectedCompany = state.affiliationFilter === "all" ? null : companyById(state.affiliationFilter);

  return `
    <div class="view-stack market-page stock-terminal-page">
      <section class="stock-exchange-head" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
        <div>
          <span class="panel-kicker">NEW IDEA EXCHANGE</span>
          <h2>Fikir Borsası</h2>
          <p>Kurum içi piyasa açık. Hacim, destek, dosya bundle'ı ve AI sinyali fiyatı hareket ettiriyor.</p>
        </div>
        <div style="display: flex; gap: 12px; align-items: center;">
          <div class="segmented" style="width: auto; margin-right: 8px;">
            <button class="${state.ideaView === 'cards' ? 'active' : ''}" data-action="set-borsa-layout" data-layout="cards" title="Kart Görünümü">${icon("layout-grid")}</button>
            <button class="${state.ideaView === 'table' ? 'active' : ''}" data-action="set-borsa-layout" data-layout="table" title="Tahta Görünümü (Terminal)">${icon("table-2")}</button>
          </div>
          <button class="btn primary stock-add-button" data-action="open-market-composer" data-context="quickFlow">${icon("plus")} Varlık ekle</button>
        </div>
      </section>

      ${renderMarketTickerTape(rows, wallet, stats)}

      <!-- AI & Yatırım Politikası Bilgi Bandı -->
      <section class="info-banner" style="background: rgba(59, 130, 246, 0.06); border: 1px solid var(--line-soft); border-radius: 12px; padding: 12px 16px; margin: 10px 0; display: flex; flex-direction: column; gap: 6px; font-size: 12px; line-height: 1.4;">
        <div style="display: flex; align-items: center; gap: 6px; font-weight: 600; color: var(--primary);">
          ${icon("info")} Değerlendirme & Hayata Geçirilme Kuralları:
        </div>
        <div style="color: var(--ink-soft); display: flex; flex-direction: column; gap: 2px; padding-left: 4px;">
          <span>• AI Değerlendirme skoru <strong>70'in altında</strong> olan veya tüzüğe aykırı görülen projeler doğrudan REDDEDİLİR.</span>
          <span>• Proje hayata geçirildiğinde (pivotlaştığında), yatırım sahiplerine yaptıkları yatırımın 41 katı oylama kredisi (ödül) aktarılır.</span>
        </div>
      </section>

      ${renderMarketDesk(rows, wallet, stats)}

      <section class="trading-phone-grid">
        <article class="stock-phone-panel stock-home-panel">
          <header class="stock-topbar" style="display: flex; justify-content: center; align-items: center;">
            <button class="stock-cash-bonus" data-action="open-market-composer" data-context="quickFlow">+${marketRewardByCategory.Proje} kayıt ödülü</button>
          </header>

          <section class="stock-balance-card">
            <span>Bakiye ve Varlıklar</span>
            <strong>${formatCurrency(wallet.total)}</strong>
            <small class="${marketDeltaClass(wallet.weightedChange)}">${wallet.weightedChange >= 0 ? "+" : ""}${formatCurrency(Math.abs(wallet.weightedChange))} bugün · Nakit ${formatCurrency(state.marketBudget)}</small>
          </section>

          ${renderTradingChart(rows)}

          <section class="stock-mover-card">
            <div class="stock-card-head">
              <span>
                <small>Big Movers</small>
                <strong>Revaçta olanlar</strong>
              </span>
              <span class="stock-mini-actions">${icon("arrow-up-down")} ${icon("more-vertical")}</span>
            </div>
            <div class="trading-movers">
              ${leaders.map((idea, index) => renderTradingMover(idea, index)).join("")}
            </div>
          </section>

          <section class="stock-index-strip">
            <article><small>NIE100</small><strong>${Math.round(wallet.total / 10)}</strong><em class="${marketDeltaClass(stats.averageChange)}">${stats.averageChange >= 0 ? "+" : ""}${stats.averageChange.toFixed(2)}%</em></article>
            <article><small>İŞNEW</small><strong>${stats.movers}/${Math.max(1, rows.length)}</strong><em class="positive">open</em></article>
            <article><small>Volume</small><strong>${Math.round(stats.volume / 1000)}K</strong><em class="positive">aktif</em></article>
          </section>

          ${renderLevelWallets(wallet)}

          <section class="stock-holdings-card">
            <div class="stock-card-head">
              <span>
                <small>Portfolio</small>
                <strong>Elindeki varlıklar</strong>
              </span>
              <em>${formatCurrency(wallet.portfolio)}</em>
            </div>
            <div class="trading-holdings">
              ${holdings.join("") || `<div class="trading-empty">Henüz varlık yok. Watchlist üzerinden alım yap.</div>`}
            </div>
          </section>

          ${renderTradingBottomTabs(state.marketPanel)}
        </article>

        <article class="stock-phone-panel stock-watchlist-panel">
          <header class="stock-searchbar" style="display: flex; gap: 10px; align-items: center; padding: 0 16px;">
            <label style="flex: 1;">
              ${icon("search")}
              <input type="search" value="${esc(state.marketSearch)}" placeholder="Ara..." aria-label="Borsa arama" data-market-search />
            </label>
          </header>

          <section class="stock-watchlist-head">
            <div>
              <span class="panel-kicker">Piyasa Açık</span>
              <h3>Takip Listem</h3>
              <p>${selectedCompany ? esc(selectedCompany.name) : "Tüm iştirakler"} · ${rows.length} varlık</p>
            </div>
            <span class="stock-watch-actions">${icon("sliders-horizontal")} ${icon("more-vertical")}</span>
          </section>

          <section class="stock-market-controls">
            <div class="stock-segments">
              ${["Tümü", ...marketCategories].map(category => `
                <button data-action="set-market-category" data-category="${esc(category)}" class="${state.marketCategoryFilter === category ? "active" : ""}">
                  ${esc(category === "Tümü" ? "Market" : category)}
                </button>
              `).join("")}
            </div>
            <label class="stock-sort-select">
              <span>Sırala</span>
              <select data-market-sort>
                ${optionList(["Revaç", "En çok yükselen", "En çok düşen", "Hacim", "Fiyat"], state.marketSort)}
              </select>
            </label>
          </section>

          <section class="stock-affiliate-dock">
            <div class="stock-affiliate-head">
              <span>İştirak filtresi</span>
              <select data-affiliation-filter>
                ${companyFilterOptions(state.affiliationFilter)}
              </select>
            </div>
            <div class="stock-affiliate-rail">
              <button class="${state.affiliationFilter === "all" ? "active" : ""}" data-action="set-affiliation" data-id="all">Tümü</button>
              ${affiliationCompanies.slice(0, 8).map(company => `
                <button class="${state.affiliationFilter === company.id ? "active" : ""}" data-action="set-affiliation" data-id="${esc(company.id)}">
                  ${companyLogo(company, "tiny")}
                  <span>${esc(company.shortName)}</span>
                </button>
              `).join("")}
            </div>
          </section>

          <section class="stock-watch-table">
            <div class="stock-watch-header">
              <span>Varlıklar</span>
              <span>Paket</span>
              <span>Grafik</span>
              <span>Değişim</span>
              <span>Açığa Sat</span>
              <span>Satın Al</span>
            </div>
            <div class="stock-watch-list">
              ${rows.map((idea, index) => renderTradingWatchRow(idea, index)).join("") || `<div class="trading-empty">Bu filtrede varlık yok.</div>`}
            </div>
          </section>

          <button class="stock-fab" data-action="open-market-composer" data-context="quickFlow" aria-label="Varlık ekle">${icon("plus")}</button>
        </article>
      </section>

      ${renderTradingTabPanel(rows, wallet, stats, holdings)}

      ${state.marketComposerContext === "quickFlow" ? renderMarketComposer("quickFlow") : ""}
      ${state.quickFlowFeedback ? `<div class="quick-feedback market-feedback stock-feedback">${esc(state.quickFlowFeedback)}</div>` : ""}
    </div>
  `;
}

function renderProIdeaExchange() {
  const rows = tradingRows();
  const selected = marketSelectedIdea(rows);
  const company = marketCompanyForIdea(selected);
  const change = Number(selected.marketChange || 0);
  const wallet = tradingCashDelta(rows);
  const holdings = state.ideas.map(renderTradingHolding).filter(Boolean);
  const selectedOwned = state.marketHoldings[selected.id] || 0;
  const selectedCompany = state.affiliationFilter === "all" ? null : companyById(state.affiliationFilter);

  return `
    <div class="view-stack market-page stock-terminal-page pro-terminal-page">
      <section class="terminal-header">
        <div class="terminal-title-block">
          <span>NEW IDEA EXCHANGE</span>
          <h2>Fikir Borsası</h2>
          <p>Proje, fikir, araştırma ve şikayetler işlem gören kurum içi varlıklara dönüşür.</p>
        </div>
        <div class="terminal-actions">
          <label class="terminal-search">
            ${icon("search")}
            <input type="search" value="${esc(state.marketSearch)}" placeholder="Ticker, iştirak, dosya ara" data-market-search />
          </label>
          <button class="terminal-icon-btn" data-action="set-market-panel" data-panel="discover" title="AI News">${icon("bell")}</button>
          <button class="terminal-primary-btn" data-action="open-market-composer" data-context="quickFlow">${icon("plus")} Varlık ekle</button>
        </div>
      </section>

      <section class="terminal-market-layout">
        <aside class="terminal-left-rail">
          <div class="terminal-segment-line">
            ${["Tümü", ...marketCategories].map(category => `
              <button data-action="set-market-category" data-category="${esc(category)}" class="${state.marketCategoryFilter === category ? "active" : ""}">
                ${esc(category === "Tümü" ? "Market" : category)}
              </button>
            `).join("")}
          </div>
          <div class="terminal-affiliate-line">
            <button class="${state.affiliationFilter === "all" ? "active" : ""}" data-action="set-affiliation" data-id="all">Tümü</button>
            ${affiliationCompanies.slice(0, 7).map(item => `
              <button class="${state.affiliationFilter === item.id ? "active" : ""}" data-action="set-affiliation" data-id="${esc(item.id)}">
                ${companyLogo(item, "tiny")}
                <span>${esc(item.shortName)}</span>
              </button>
            `).join("")}
          </div>
          <label class="terminal-sort-line">
            <span>${selectedCompany ? esc(selectedCompany.shortName) : "Tüm iştirakler"}</span>
            <select data-market-sort>
              ${optionList(["Revaç", "En çok yükselen", "En çok düşen", "Hacim", "Fiyat"], state.marketSort)}
            </select>
          </label>
          <div class="terminal-asset-list">
            ${rows.map((idea, index) => renderProAssetRow(idea, index)).join("") || `<div class="terminal-empty-line">Bu filtrede varlık yok.</div>`}
          </div>
        </aside>

        <main class="terminal-chart-stage">
          <header class="terminal-chart-head">
            <button class="terminal-back-btn" data-page="dashboard" title="Geri">${icon("chevron-left")}</button>
            <div class="terminal-selected-logo">
              ${companyLogo(company, "large")}
            </div>
            <div class="terminal-selected-copy">
              <span>${esc(company.shortName)} · ${esc(selected.marketCategory || "Fikir")}</span>
              <h3>${esc(selected.marketTicker)}</h3>
              <strong>${formatCurrency(marketPrice(selected))}</strong>
              <em class="${marketDeltaClass(change)}">${change >= 0 ? "▲" : "▼"} ${Math.abs(change).toFixed(2)}% bugün</em>
            </div>
            <div class="terminal-head-tools">
              <button data-action="set-market-panel" data-panel="watchlist" title="Watchlist">${icon("copy")}</button>
              <button data-action="set-market-panel" data-panel="wallet" title="Wallet">${icon("wallet")}</button>
              <button data-action="open-idea" data-id="${esc(selected.id)}" title="Detay">${icon("external-link")}</button>
            </div>
          </header>

          <div class="indicator-switch">
            ${["VP", "IC", "MACD"].map(indicator => `
              <button class="${state.marketIndicator === indicator ? "active" : ""}" data-action="set-market-indicator" data-indicator="${esc(indicator)}">
                <i></i>${esc(indicator === "VP" ? "VP (Auto)" : indicator === "IC" ? "IC (9,26)" : "MACD (12,26,9)")}
              </button>
            `).join("")}
          </div>

          ${renderProfessionalMarketChart(selected)}

          <footer class="terminal-chart-footer">
            <div class="range-switch">
              ${["1D", "1W", "1M", "3M", "YTD", "1Y"].map(range => `
                <button class="${state.marketRange === range ? "active" : ""}" data-action="set-market-range" data-range="${esc(range)}">${esc(range)}</button>
              `).join("")}
            </div>
            <div class="order-strip">
              <button class="order-btn buy" data-action="buy-market" data-id="${esc(selected.id)}" data-quantity="${state.marketOrderSize}" ${selected.status === "rejected" ? "disabled" : ""}>Buy MKT</button>
              <div class="share-stepper">
                <button data-action="adjust-order-size" data-delta="-1" ${selected.status === "rejected" ? "disabled" : ""}>${icon("minus")}</button>
                <strong>${state.marketOrderSize} share</strong>
                <button data-action="adjust-order-size" data-delta="1" ${selected.status === "rejected" ? "disabled" : ""}>${icon("plus")}</button>
              </div>
              <button class="order-btn sell" data-action="sell-market" data-id="${esc(selected.id)}" data-quantity="${state.marketOrderSize}" ${selectedOwned <= 0 || selected.status === "rejected" ? "disabled" : ""}>Sell MKT</button>
            </div>
          </footer>
        </main>

        <aside class="terminal-right-rail">
          <section class="terminal-side-module compact">
            <span>Portfolio</span>
            <strong>${formatCurrency(wallet.total)}</strong>
            <small>${selectedOwned} ${esc(selected.marketTicker)} lot · Nakit ${formatCurrency(state.marketBudget)}</small>
          </section>
          <section class="terminal-side-module">
            <div class="terminal-module-head">
              <span>AI News</span>
              <button data-action="set-market-panel" data-panel="discover">${icon("sparkles")}</button>
            </div>
            <div class="terminal-news-flow">
              ${marketNewsForRows(rows).map(item => `
                <button data-action="set-market-panel" data-panel="discover">
                  <em class="${marketDeltaClass(item.change)}">${item.change >= 0 ? "+" : ""}${item.change.toFixed(2)}%</em>
                  <strong>${esc(item.title)}</strong>
                  <small>${esc(item.type)}</small>
                </button>
              `).join("")}
            </div>
          </section>
          <section class="terminal-side-module">
            <div class="terminal-module-head">
              <span>Bundle</span>
              <button data-action="open-idea" data-id="${esc(selected.id)}">${icon("folder-open")}</button>
            </div>
            ${renderBundleChips(selected)}
          </section>
          <section class="terminal-side-module level-flow">
            <div class="terminal-module-head">
              <span>Seviye Paraları</span>
              <button data-action="set-market-panel" data-panel="wallet">${icon("wallet")}</button>
            </div>
            ${levelWallets.slice(0, 4).map(level => `
              <button data-action="set-market-panel" data-panel="wallet">
                <span>${esc(level.label)}</span>
                <strong>${formatCurrency(level.balance)}</strong>
                <em class="${marketDeltaClass(level.delta)}">${level.delta >= 0 ? "+" : ""}${level.delta.toFixed(1)}%</em>
              </button>
            `).join("")}
          </section>
        </aside>
      </section>

      ${renderTerminalPanel(rows, wallet, holdings)}
      ${state.marketComposerContext === "quickFlow" ? renderMarketComposer("quickFlow") : ""}
      ${state.quickFlowFeedback ? `<div class="quick-feedback market-feedback stock-feedback">${esc(state.quickFlowFeedback)}</div>` : ""}
    </div>
  `;
}

function renderProAssetRow(idea, index) {
  const company = marketCompanyForIdea(idea);
  const change = Number(idea.marketChange || 0);
  const owned = state.marketHoldings[idea.id] || 0;
  const active = marketSelectedIdea([idea])?.id === state.marketSelectedId;
  return `
    <article class="terminal-asset-row ${active ? "active" : ""}">
      <button class="terminal-asset-select" data-action="select-market-asset" data-id="${esc(idea.id)}">
        ${companyLogo(company, "mini")}
        <span>
          <strong>${esc(idea.marketTicker)}</strong>
          <small>${esc(company.shortName)} · ${owned} lot</small>
        </span>
      </button>
      ${renderAssetMiniChart(idea)}
      <span class="terminal-price-cell">
        <strong>${formatCurrency(marketPrice(idea))}</strong>
        <em class="${marketDeltaClass(change)}">${change >= 0 ? "+" : ""}${change.toFixed(2)}%</em>
      </span>
    </article>
  `;
}

function renderTerminalPanel(rows, wallet, holdings) {
  const active = state.marketPanel || "home";
  if (active === "home") return "";
  const selected = marketSelectedIdea(rows);
  return `
    <section class="terminal-bottom-drawer" data-market-panel="${esc(active)}">
      <div class="terminal-drawer-head">
        <strong>${esc(active === "watchlist" ? "Watchlist" : active === "portfolio" ? "Portfolio" : active === "discover" ? "AI News" : "Wallet")}</strong>
        <button data-action="set-market-panel" data-panel="home">${icon("x")}</button>
      </div>
      ${active === "watchlist" ? `
        <div class="drawer-chart-grid">
          ${rows.slice(0, 6).map(idea => `
            <button data-action="select-market-asset" data-id="${esc(idea.id)}">
              <span>${esc(idea.marketTicker)}</span>
              ${renderAssetMiniChart(idea)}
              <em class="${marketDeltaClass(idea.marketChange)}">${Number(idea.marketChange || 0) >= 0 ? "+" : ""}${Number(idea.marketChange || 0).toFixed(2)}%</em>
            </button>
          `).join("")}
        </div>
      ` : ""}
      ${active === "portfolio" ? `
        <div class="drawer-metric-grid">
          <article><span>Toplam</span><strong>${formatCurrency(wallet.total)}</strong></article>
          <article><span>Portföy</span><strong>${formatCurrency(wallet.portfolio)}</strong></article>
          <article><span>P/L</span><strong class="${marketDeltaClass(wallet.weightedChange)}">${wallet.weightedChange >= 0 ? "+" : ""}${formatCurrency(Math.abs(wallet.weightedChange))}</strong></article>
        </div>
        <div class="trading-holdings expanded">${holdings.join("") || `<div class="trading-empty">Henüz pozisyon yok.</div>`}</div>
      ` : ""}
      ${active === "discover" ? `
        <div class="drawer-news-grid">
          ${marketNewsForRows(rows).map(item => `
            <article>
              <span>${esc(item.type)}</span>
              <strong>${esc(item.title)}</strong>
              <p>${esc(item.body)}</p>
            </article>
          `).join("")}
        </div>
      ` : ""}
      ${active === "wallet" ? `
        <div class="drawer-metric-grid">
          ${levelWallets.map(level => `<article><span>${esc(level.scope)}</span><strong>${formatCurrency(level.balance)}</strong><em>${esc(level.label)}</em></article>`).join("")}
        </div>
        <div class="reward-strip">
          ${marketCategories.map(category => `<span><strong>${esc(category)}</strong>${formatCurrency(marketRewardByCategory[category] || 500)} katkı değeri</span>`).join("")}
        </div>
      ` : ""}
      ${active !== "home" ? `<p class="drawer-note">${esc(selected.marketTicker)} seçili. İşlem emirleri ana grafikteki Buy/Sell barından verilir.</p>` : ""}
    </section>
  `;
}

function renderMarketComposer(context) {
  const draft = state.marketDraft;
  const title = context === "dashboard" ? "Veri&Bilgi kaydı ekle" : context === "announcements" ? "Duyuruya bağlı proje ekle" : "Borsaya proje ekle";
  return `
    <section class="market-composer-panel">
      <div class="section-title-row">
        <div>
          <span class="panel-kicker">Yeni varlık</span>
          <h3>${esc(context === "profile" ? "Profilinden ürün bundle'ı ekle" : title)}</h3>
        </div>
        <button class="icon-button" data-action="close-market-composer" aria-label="Kapat">${icon("x")}</button>
      </div>
      <div class="composer-grid">
        <label class="field">
          <span>Başlık</span>
          <input class="input" data-market-draft="title" value="${esc(draft.title)}" placeholder="Proje, fikir veya araştırma adı" />
        </label>
        <label class="field">
          <span>Kategori</span>
          <select class="select" data-market-draft="category">
            ${optionList(marketCategories, draft.category)}
          </select>
        </label>
        <label class="field">
          <span>İştirak</span>
          <select class="select" data-market-draft="companyId">
            ${affiliationCompanies.map(company => `<option value="${esc(company.id)}" ${draft.companyId === company.id ? "selected" : ""}>${esc(company.name)}</option>`).join("")}
          </select>
        </label>
        <label class="field">
          <span>Ölçek</span>
          <select class="select" data-market-draft="scope">
            ${optionList(scopeLevels, draft.scope)}
          </select>
        </label>
        <label class="field full">
          <span>Kısa açıklama</span>
          <textarea class="textarea" rows="3" data-market-draft="summary" placeholder="Neden önemli, hangi veri veya proje sinyali var?">${esc(draft.summary)}</textarea>
        </label>
        <label class="field full file-drop">
          <span>Dosyalar</span>
          <input type="file" multiple data-market-files accept="${uploadAcceptList()}" />
          <small>${renderUploadSummary(draft.files, "PDF, Excel, CSV, sunum, Word, ZIP veya görsel seçebilirsin.")}</small>
        </label>
      </div>
      <div class="field-row">
        <button class="btn primary" data-action="submit-market-listing" data-context="${esc(context)}">${icon("send")} Yayınla ve borsaya aç</button>
        <button class="btn ghost" data-action="close-market-composer">${icon("x")} Vazgeç</button>
      </div>
    </section>
  `;
}

function moveQuickFlow(delta, feedback = "") {
  const ideas = quickFlowIdeas();
  if (!ideas.length) return;
  state.quickFlowIndex = ((state.quickFlowIndex + delta) % ideas.length + ideas.length) % ideas.length;
  state.quickFlowFeedback = feedback;
  state.fastCommentDraft = "";
}

function filterSelect(key, values) {
  return `
    <select class="select" data-idea-filter="${esc(key)}" aria-label="${esc(key)}" style="width: auto; min-width: 160px;">
      ${optionList(values, state.filters[key])}
    </select>
  `;
}

function filteredIdeas() {
  let ideas = [...state.ideas];
  const search = state.filters.search.trim().toLocaleLowerCase("tr-TR");
  if (search) {
    ideas = ideas.filter(idea => [
      idea.title,
      idea.summary,
      idea.department,
      idea.location,
      idea.company,
      idea.type,
      idea.tags.join(" ")
    ].join(" ").toLocaleLowerCase("tr-TR").includes(search));
  }
  if (state.filters.company !== "Tümü") ideas = ideas.filter(idea => idea.company === state.filters.company);
  if (state.filters.department !== "Tümü") ideas = ideas.filter(idea => idea.department === state.filters.department);
  if (state.filters.type !== "Tümü") ideas = ideas.filter(idea => idea.type === state.filters.type);
  if (state.filters.status !== "Tümü") ideas = ideas.filter(idea => statusMeta[idea.status].label === state.filters.status);
  if (state.filters.scope === "Benim fikirlerim") ideas = ideas.filter(idea => idea.authorId === currentUser().id);
  if (state.filters.scope === "Yorum yaptıklarım") ideas = ideas.filter(idea => idea.comments.some(comment => comment.user === currentUser().name));

  const sorters = {
    "En yeni": (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    "En çok desteklenen": (a, b) => b.credits - a.credits,
    "En çok yorum alan": (a, b) => b.comments.length - a.comments.length,
    "En hızlı yükselen": (a, b) => b.communityScore - a.communityScore,
    "AI tarafından önerilen": (a, b) => b.aiScore - a.aiScore,
    "Yüksek etki / düşük maliyet": (a, b) => impactValue(b) - impactValue(a),
    "Yönetici incelemesinde": (a, b) => Number(b.status === "review") - Number(a.status === "review"),
    "Pilot seçilenler": (a, b) => Number(b.status === "pilot") - Number(a.status === "pilot")
  };

  return ideas.sort(sorters[state.filters.sort] || sorters["En yeni"]);
}

function impactValue(idea) {
  const impact = idea.estimatedImpact.includes("Çok") ? 4 : idea.estimatedImpact.includes("Yüksek") ? 3 : idea.estimatedImpact.includes("Orta") ? 2 : 1;
  const cost = idea.estimatedCost.includes("Düşük") ? 3 : idea.estimatedCost.includes("Orta") ? 2 : 1;
  return impact * 10 + cost;
}

function renderIdeaCard(idea, compact = false) {
  const authorUser = demoUsers.find(user => user.id === idea.authorId);
  const isAnonymous = String(idea.authorLabel || "").toLocaleLowerCase("tr-TR").startsWith("anonim");
  const authorName = isAnonymous ? "Anonim" : (idea.authorLabel || authorUser?.name || "Çalışan");
  const authorPhoto = isAnonymous ? "" : (authorUser?.avatarUrl || photoForName(authorName));
  return `
    <article class="idea-card apple-idea-card ${compact ? "compact" : ""}">
      ${idea.visualUrl ? `<img class="idea-media" src="${esc(idea.visualUrl)}" alt="" loading="eager" referrerpolicy="no-referrer" />` : ""}
      <div class="idea-card-main">
        <div class="idea-author">
          ${avatar(authorName, "small", authorPhoto)}
          <span>
            <strong>${esc(authorName)}</strong>
            <span>${esc(isAnonymous ? idea.anonymity : idea.department)}</span>
          </span>
          ${statusBadge(idea.status)}
        </div>
        <div class="idea-card-header">
          <h3>${esc(idea.title)}</h3>
          <p>${esc(idea.summary)}</p>
        </div>
        <div class="apple-chip-row">
          <span>${esc(idea.type)}</span>
          <span>${idea.supporters} destek</span>
          <span>AI ${idea.aiScore}</span>
        </div>
        <div class="idea-footer">
          <button class="btn ghost" data-action="open-idea" data-id="${esc(idea.id)}">${icon("arrow-up-right")} Aç</button>
          <button class="btn primary" data-action="support-idea" data-id="${esc(idea.id)}">${icon("heart")} Destekle</button>
        </div>
      </div>
    </article>
  `;
}

function scorePill(label, value) {
  return `
    <div class="score-pill">
      <span>${esc(label)}</span>
      <strong>${esc(value)}</strong>
    </div>
  `;
}

function renderIdeaTable(ideas) {
  return `
    <section class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>Fikir adı</th>
            <th>Tür</th>
            <th>Departman</th>
            <th>Lokasyon</th>
            <th>Durum</th>
            <th>Topluluk</th>
            <th>Stratejik</th>
            <th>AI</th>
            <th>Etki</th>
            <th>Maliyet</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${ideas.map(idea => `
            <tr>
              <td><strong>${esc(idea.title)}</strong></td>
              <td>${esc(idea.type)}</td>
              <td>${esc(idea.department)}</td>
              <td>${esc(idea.location)}</td>
              <td>${statusBadge(idea.status)}</td>
              <td>${idea.communityScore}</td>
              <td>${idea.strategicScore}</td>
              <td>${idea.aiScore}</td>
              <td>${esc(idea.estimatedImpact)}</td>
              <td>${esc(idea.estimatedCost)}</td>
              <td><button class="table-action" data-action="open-idea" data-id="${esc(idea.id)}" aria-label="Detay">${icon("external-link")}</button></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
}

function renderNewIdea() {
  const w = state.wizard;
  return `
    <div class="view-stack apple-page">
      <section class="apple-page-head" style="margin-bottom: 24px;">
        <div>
          <span class="panel-kicker">İş NEW</span>
          <h2>Yeni Başvuru / Proje Girişi</h2>
          <p>Fikir borsasında listelenecek projenizi, fikrinizi veya araştırmanızı detaylandırarak yayınlayın.</p>
        </div>
        <div class="entry-mode-switch" aria-label="Kayıt tipi" style="display: flex; gap: 8px;">
          <button class="btn ${state.entryMode === "idea" ? "primary" : "ghost"}" data-action="set-entry-mode" data-mode="idea">${icon("lightbulb")} Proje/Fikir Başvurusu</button>
          <button class="btn ${state.entryMode === "complaint" ? "primary" : "ghost"}" data-action="set-entry-mode" data-mode="complaint">${icon("message-square-warning")} Şikayet / Verimsizlik</button>
        </div>
      </section>

      ${state.entryMode === "complaint" ? renderComplaintEntry() : `
        <div class="new-idea-form-layout" style="display: grid; grid-template-columns: 1fr; gap: 24px; max-width: 800px; margin: 0 auto;">
          
          <!-- Section 1 -->
          <section class="content-panel" style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 20px;">
            <h3 style="font-size: 16px; font-weight: 600; color: var(--ink); border-bottom: 1px solid var(--line-soft); padding-bottom: 12px; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
              ${icon("file-text")} 1. Temel Proje Tanımı
            </h3>

            <div class="form-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
              <label class="field full" style="grid-column: 1 / -1; display: flex; flex-direction: column; gap: 6px;">
                <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Proje Başlığı</span>
                <input class="input" id="wizard-title" value="${esc(w.title || '')}" placeholder="Projeyi özetleyen kısa ve net bir başlık" style="padding: 10px; font-size: 14px;" />
              </label>

              <label class="field full" style="grid-column: 1 / -1; display: flex; flex-direction: column; gap: 6px;">
                <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Kısa Açıklama (Özet)</span>
                <textarea class="textarea" id="wizard-oneSentence" rows="2" placeholder="Fikri tek cümleyle açıklayın..." style="padding: 10px; font-size: 14px;">${esc(w.oneSentence || '')}</textarea>
              </label>

              <label class="field" style="display: flex; flex-direction: column; gap: 6px;">
                <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Borsa Ligi</span>
                <select class="select" id="wizard-marketCategory" style="padding: 10px; font-size: 14px;">
                  <option value="Proje" ${w.marketCategory === 'Proje' ? 'selected' : ''}>Proje Ligi</option>
                  <option value="Fikir" ${w.marketCategory === 'Fikir' ? 'selected' : ''}>Fikir Ligi</option>
                  <option value="Araştırma" ${w.marketCategory === 'Araştırma' ? 'selected' : ''}>Araştırma Ligi</option>
                </select>
              </label>

              <label class="field" style="display: flex; flex-direction: column; gap: 6px;">
                <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Alan Kategorisi</span>
                <select class="select" id="wizard-area" style="padding: 10px; font-size: 14px;">
                  ${borsaAreas.map(area => `<option value="${esc(area)}" ${w.area === area ? 'selected' : ''}>${esc(area)}</option>`).join("")}
                </select>
              </label>
            </div>
          </section>

          <!-- Section 2 -->
          <section class="content-panel" style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 20px;">
            <h3 style="font-size: 16px; font-weight: 600; color: var(--ink); border-bottom: 1px solid var(--line-soft); padding-bottom: 12px; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
              ${icon("lightbulb")} 2. Problem ve Çözüm Teklifi
            </h3>

            <div class="form-grid" style="display: grid; grid-template-columns: 1fr; gap: 16px;">
              <label class="field full" style="display: flex; flex-direction: column; gap: 6px;">
                <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Tespit Edilen Problem</span>
                <textarea class="textarea" id="wizard-problem" rows="3" placeholder="Hangi aksaklığı veya problemi fark ettiniz?" style="padding: 10px; font-size: 14px;">${esc(w.problem || '')}</textarea>
              </label>

              <label class="field full" style="display: flex; flex-direction: column; gap: 6px;">
                <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Çözüm Öneriniz (Nasıl Çalışır?)</span>
                <textarea class="textarea" id="wizard-solution" rows="3" placeholder="Önerdiğiniz çözüm veya süreç iyileştirmesi nedir?" style="padding: 10px; font-size: 14px;">${esc(w.solution || '')}</textarea>
              </label>
            </div>
          </section>

          <!-- Section 3 -->
          <section class="content-panel" style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 20px;">
            <h3 style="font-size: 16px; font-weight: 600; color: var(--ink); border-bottom: 1px solid var(--line-soft); padding-bottom: 12px; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
              ${icon("bar-chart-2")} 3. Kapsam, Etki ve Maliyet
            </h3>

            <div class="form-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
              <label class="field" style="display: flex; flex-direction: column; gap: 6px;">
                <span style="font-size: 13px; font-weight: 500; color: var(--ink);">İlgili Şirket</span>
                <select class="select" id="wizard-company" style="padding: 10px; font-size: 14px;">
                  <option value="Bağımsız">Bağımsız / Tüm Şirketler</option>
                  ${affiliationCompanies.map(c => `<option value="${esc(c.name)}" ${w.company === c.name ? 'selected' : ''}>${esc(c.name)}</option>`).join("")}
                </select>
              </label>

              <label class="field" style="display: flex; flex-direction: column; gap: 6px;">
                <span style="font-size: 13px; font-weight: 500; color: var(--ink);">İlgili Departman</span>
                <input class="input" id="wizard-department" value="${esc(w.department || '')}" placeholder="Örn: Operasyon, BT, İK" style="padding: 10px; font-size: 14px;" />
              </label>

              <label class="field" style="display: flex; flex-direction: column; gap: 6px;">
                <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Tahmini Etki</span>
                <select class="select" id="wizard-impact" style="padding: 10px; font-size: 14px;">
                  <option value="Yüksek" ${w.impact === 'Yüksek' ? 'selected' : ''}>Yüksek Etki</option>
                  <option value="Orta" ${w.impact === 'Orta' ? 'selected' : ''}>Orta Etki</option>
                  <option value="Düşük" ${w.impact === 'Düşük' ? 'selected' : ''}>Düşük Etki</option>
                </select>
              </label>

              <label class="field" style="display: flex; flex-direction: column; gap: 6px;">
                <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Tahmini Geliştirme Maliyeti</span>
                <select class="select" id="wizard-cost" style="padding: 10px; font-size: 14px;">
                  <option value="Düşük" ${w.cost === 'Düşük' ? 'selected' : ''}>Düşük Bütçeli</option>
                  <option value="Orta" ${w.cost === 'Orta' ? 'selected' : ''}>Orta Bütçeli</option>
                  <option value="Yüksek" ${w.cost === 'Yüksek' ? 'selected' : ''}>Yüksek Bütçeli</option>
                </select>
              </label>

              <label class="field" style="display: flex; flex-direction: column; gap: 6px;">
                <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Geliştirme / Uygulama Süresi</span>
                <select class="select" id="wizard-implementationTime" style="padding: 10px; font-size: 14px;">
                  <option value="Hemen denenebilir" ${w.implementationTime === 'Hemen denenebilir' ? 'selected' : ''}>Hemen Denenebilir (Hızlı Kazanım)</option>
                  <option value="1 ay" ${w.implementationTime === '1 ay' ? 'selected' : ''}>1 Ay</option>
                  <option value="3 ay" ${w.implementationTime === '3 ay' ? 'selected' : ''}>3 Ay</option>
                  <option value="6 ay" ${w.implementationTime === '6 ay' ? 'selected' : ''}>6 Ay</option>
                </select>
              </label>

              <label class="field" style="display: flex; flex-direction: column; gap: 6px;">
                <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Başarı Ölçüm Metriği</span>
                <input class="input" id="wizard-successMetric" value="${esc(w.successMetric || '')}" placeholder="Başarı nasıl ölçülecek?" style="padding: 10px; font-size: 14px;" />
              </label>
            </div>
          </section>

          <!-- Section 4 -->
          <section class="content-panel" style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 20px;">
            <h3 style="font-size: 16px; font-weight: 600; color: var(--ink); border-bottom: 1px solid var(--line-soft); padding-bottom: 12px; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
              ${icon("shield")} 4. Paylaşım Seçenekleri
            </h3>

            <div class="form-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
              <label class="field" style="display: flex; flex-direction: column; gap: 6px;">
                <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Görünürlük Seviyesi</span>
                <select class="select" id="wizard-visibility" style="padding: 10px; font-size: 14px;">
                  <option value="Şirket içi" ${w.visibility === 'Şirket içi' ? 'selected' : ''}>Tüm Şirket İçi</option>
                  <option value="Holding geneli" ${w.visibility === 'Holding geneli' ? 'selected' : ''}>Tüm Holding Geneli</option>
                  <option value="Sadece yöneticiler" ${w.visibility === 'Sadece yöneticiler' ? 'selected' : ''}>Sadece Yöneticiler</option>
                </select>
              </label>

              <label class="field" style="display: flex; flex-direction: column; gap: 6px;">
                <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Anonimlik Seviyesi</span>
                <select class="select" id="wizard-anonymity" style="padding: 10px; font-size: 14px;">
                  <option value="İsmimle paylaş" ${w.anonymity === 'İsmimle paylaş' ? 'selected' : ''}>İsmimle Paylaş (Adım ve profilim görünür)</option>
                  <option value="İsim gizli, departman görünür" ${w.anonymity === 'İsim gizli, departman görünür' ? 'selected' : ''}>İsim Gizli, Departman Görünür</option>
                  <option value="Tam anonim" ${w.anonymity === 'Tam anonim' ? 'selected' : ''}>Tam Anonim</option>
                </select>
              </label>

              <label class="field full file-upload-field" style="grid-column: 1 / -1; display: flex; flex-direction: column; gap: 8px;">
                <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Dosya ekleri</span>
                <input class="input" type="file" multiple data-wizard-files accept="${uploadAcceptList()}" />
                <small style="font-size: 12px; color: var(--muted);">PDF, PowerPoint, Excel, CSV, Word, görsel ve arşiv dosyaları eklenebilir.</small>
                <div class="upload-summary">${renderUploadSummary(w.files, "Henüz dosya eklenmedi.")}</div>
              </label>
            </div>
          </section>

          <!-- Publish Actions -->
          <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 8px; margin-bottom: 40px;">
            <button class="btn ghost" data-page="quickFlow">Vazgeç</button>
            <button class="btn success" data-action="submit-new-idea-form" style="padding: 12px 24px; font-size: 14px; font-weight: 600;">
              ${icon("send")} Başvuruyu Gönder ve Yayınla
            </button>
          </div>
        </div>
      `}
    </div>
  `;
}

function renderComplaintEntry() {
  const c = state.complaint;
  return `
    <section class="complaint-entry-grid" style="display: grid; grid-template-columns: 1fr 280px; gap: 24px; max-width: 900px; margin: 0 auto;">
      <article class="complaint-form-panel" style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 20px;">
        <div class="section-title">
          <div>
            <h2>Şikayet / verimsizlik bildirimi</h2>
            <p>Aksayan süreci bildirin ve iyileştirme sinyali oluşturun.</p>
          </div>
        </div>
        <div class="form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          ${complaintField("Kısa başlık", "title", c.title)}
          ${complaintSelect("Kategori", "category", ["Süreç verimsizliği", "Tekrarlı iş", "Bekleme / onay gecikmesi", "Müşteri deneyimi", "Teknik sorun", "Risk / uyum", "Diğer"], c.category)}
          ${complaintField("Neyi verimsiz veya problemli buluyorsun?", "body", c.body, "textarea")}
          ${complaintSelect("İlgili departman", "department", ["Operasyon", "Müşteri Deneyimi", "Bilgi Teknolojileri", "İnsan Kaynakları", "Mağaza Operasyonları"], c.department)}
          ${complaintSelect("Etkisi", "impact", ["Düşük", "Orta", "Yüksek", "Çok yüksek"], c.impact)}
          ${complaintSelect("Anonimlik", "anonymity", ["İsmimle paylaş", "İsim gizli, departman görünür", "Tam anonim"], c.anonymity)}
          ${complaintField("Nasıl iyileşmesini beklersin?", "expectation", c.expectation, "textarea")}
        </div>
        <div class="field-row" style="margin-top: 16px; display: flex; gap: 8px;">
          <button class="btn primary" data-action="publish-complaint">${icon("send")} Şikayeti gönder</button>
          <button class="btn ghost" data-action="set-entry-mode" data-mode="idea">${icon("lightbulb")} Öneri yaz</button>
        </div>
      </article>

      <aside class="complaint-ai-panel" style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 20px; text-align: center;">
        <div class="panel-head">
          <span class="panel-kicker">AI ön analiz</span>
          <h3>Sinyal sınıflandırması</h3>
        </div>
        <div class="complaint-ai-score" style="font-size: 32px; font-weight: 700; color: var(--primary); margin: 20px 0;">
          ${c.impact === "Çok yüksek" ? "91" : c.impact === "Yüksek" ? "84" : c.impact === "Orta" ? "72" : "58"}
        </div>
        <div class="quick-rhythm-list" style="text-align: left; font-size: 13px; display: flex; flex-direction: column; gap: 8px;">
          <span><strong>Kategori:</strong> ${esc(c.category)}</span>
          <span><strong>AI notu:</strong> Benzer verimsizlik sinyalleriyle otomatik eşleştirilip kurul raporuna eklenecektir.</span>
        </div>
      </aside>
    </section>
  `;
}

function complaintField(label, key, value, type = "input") {
  const full = type === "textarea" ? "grid-column: 1 / -1;" : "";
  return `
    <label class="field" style="${full} display: flex; flex-direction: column; gap: 6px;">
      <span style="font-size: 13px; font-weight: 500; color: var(--ink);">${esc(label)}</span>
      ${type === "textarea"
        ? `<textarea class="textarea" data-complaint-field="${esc(key)}" style="padding: 10px; font-size: 14px;">${esc(value)}</textarea>`
        : `<input class="input" data-complaint-field="${esc(key)}" value="${esc(value)}" style="padding: 10px; font-size: 14px;" />`}
    </label>
  `;
}

function complaintSelect(label, key, values, value) {
  return `
    <label class="field" style="display: flex; flex-direction: column; gap: 6px;">
      <span style="font-size: 13px; font-weight: 500; color: var(--ink);">${esc(label)}</span>
      <select class="select" data-complaint-field="${esc(key)}" style="padding: 10px; font-size: 14px;">
        ${optionList(values, value)}
      </select>
    </label>
  `;
}

function renderApplicationPage() {
  const ideaId = state.selectedIdeaApplicationId;
  const idea = state.ideas.find(i => i.id === ideaId) || state.ideas[0];
  const user = currentUser();
  const applicant = personById(user.id) || user;

  return `
    <div class="view-stack apply-page" style="max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 24px; padding: 24px;">
      
      <!-- Head Section -->
      <section class="apple-page-head" style="margin-bottom: 8px;">
        <div>
          <span class="panel-kicker">Proje Katılım Başvurusu</span>
          <h2>'${esc(idea.title)}' Projesine Başvur</h2>
          <p>Takım arkadaşı olarak projeye katılın, katma değer sağlayın ve ortak bütçeden pay kazanın.</p>
        </div>
      </section>

      <!-- Idea Context Panel -->
      <article class="content-panel" style="background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.04), rgba(var(--primary-rgb), 0.01)); border: 1px solid var(--line-soft); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span class="borsa-league-badge" style="font-size: 11px; font-weight: 600; text-transform: uppercase; background: var(--primary-light); color: var(--primary); padding: 4px 8px; border-radius: 20px;">
            ${esc(idea.marketCategory || "Fikir")}
          </span>
          <span style="font-size: 12.5px; color: var(--muted);">${esc(idea.createdAt)}</span>
        </div>
        <h3 style="font-size: 17px; font-weight: 600; color: var(--ink); margin: 0;">${esc(idea.title)}</h3>
        <p style="font-size: 13.5px; color: var(--ink-soft); line-height: 1.5; margin: 0;">${esc(idea.summary)}</p>
        
        <div style="display: flex; gap: 12px; margin-top: 4px; font-size: 12.5px; color: var(--muted); border-top: 1px dashed var(--line-soft); padding-top: 10px;">
          <span><strong>Fikir Sahibi:</strong> ${esc(idea.authorLabel)}</span>
          <span>·</span>
          <span><strong>Alan:</strong> ${esc(idea.area)}</span>
        </div>
      </article>

      <!-- Application Form -->
      <section class="content-panel" style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 20px; box-shadow: var(--shadow-soft);">
        <h3 style="font-size: 16px; font-weight: 600; color: var(--ink); border-bottom: 1px solid var(--line-soft); padding-bottom: 12px; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
          ${icon("briefcase")} Başvuru Bilgileri
        </h3>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px;">
          <label class="field" style="display: flex; flex-direction: column; gap: 6px;">
            <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Başvuru Sahibi</span>
            <input class="input" value="${esc(applicant.name)}" readonly style="padding: 10px; font-size: 14px; background: var(--bg); color: var(--muted); cursor: not-allowed;" />
          </label>

          <label class="field" style="display: flex; flex-direction: column; gap: 6px;">
            <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Rol Tercihiniz</span>
            <select class="select" id="app-role" style="padding: 10px; font-size: 14px;">
              <option value="Yazılımcı / Geliştirici">Yazılımcı / Geliştirici</option>
              <option value="Tasarımcı (UI/UX)">Tasarımcı (UI/UX)</option>
              <option value="Ürün Yöneticisi / Analist">Ürün Yöneticisi / Analist</option>
              <option value="Pazarlama / Büyüme Uzmanı">Pazarlama / Büyüme Uzmanı</option>
              <option value="Mali Analist / Sponsor">Mali Analist / Sponsor</option>
              <option value="Genel Katkı Sağlayıcı">Genel Katkı Sağlayıcı</option>
            </select>
          </label>

          <label class="field" style="display: flex; flex-direction: column; gap: 6px;">
            <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Haftalık Katkı Süresi</span>
            <select class="select" id="app-time" style="padding: 10px; font-size: 14px;">
              <option value="2-4 Saat">2-4 Saat (Hafif Katkı)</option>
              <option value="4-8 Saat">4-8 Saat (Orta Katkı)</option>
              <option value="8-16 Saat">8-16 Saat (Yoğun Katkı)</option>
              <option value="16+ Saat">16+ Saat (Tam Zamanlıya Yakın)</option>
            </select>
          </label>

          <label class="field" style="display: flex; flex-direction: column; gap: 6px;">
            <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Kaynak / Bütçe Talebi</span>
            <select class="select" id="app-budget" style="padding: 10px; font-size: 14px;">
              <option value="Bütçe talebim yok (Gönüllü)">Bütçe talebim yok (Gönüllü Katılım)</option>
              <option value="Sunucu / API Altyapı Desteği">Sunucu / API Altyapı Desteği</option>
              <option value="500 Kredi Sponsorluk">500 Kredi Sponsorluk Talebi</option>
              <option value="1500 Kredi Sponsorluk">1500 Kredi Sponsorluk Talebi</option>
            </select>
          </label>

          <label class="field full" style="grid-column: 1 / -1; display: flex; flex-direction: column; gap: 6px;">
            <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Neden Katılmak İstiyorsunuz?</span>
            <textarea class="textarea" id="app-motivation" rows="3" placeholder="Bu projeye duyduğunuz ilgiyi ve hedeflerinizi açıklayın..." style="padding: 10px; font-size: 14px;"></textarea>
          </label>

          <label class="field full" style="grid-column: 1 / -1; display: flex; flex-direction: column; gap: 6px;">
            <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Projeye Nasıl Katkı Sağlayacaksınız? (Yetenek ve Tecrübeleriniz)</span>
            <textarea class="textarea" id="app-contribution" rows="3" placeholder="Hangi teknik yetkinlikler veya iş deneyimiyle projeyi ileri taşıyacaksınız?" style="padding: 10px; font-size: 14px;"></textarea>
          </label>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 10px; border-top: 1px solid var(--line-soft); padding-top: 16px;">
          <button class="btn ghost" data-action="cancel-application">Vazgeç</button>
          <button class="btn success" data-action="submit-application-form" style="padding: 12px 24px; font-size: 14px; font-weight: 600;">
            ${icon("send")} Başvuruyu İlet
          </button>
        </div>
      </section>
    </div>
  `;
}

function renderIdeaDetail() {
  const idea = state.ideas.find(item => item.id === state.selectedIdeaId) || state.ideas[0];
  const analysis = buildStaticAnalysis(idea);
  return `
    <div class="view-stack">
      <section class="hero-band">
        <div>
          <h2>${esc(idea.title)}</h2>
          <p>${esc(idea.summary)}</p>
        </div>
        <div class="field-row" style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="btn ghost" data-page="ideas">${icon("arrow-left")} Fikirlere dön</button>
          <button class="btn soft" data-action="support-idea" data-id="${esc(idea.id)}">${icon("thumbs-up")} Bu fikri destekle</button>
          <button class="btn primary" data-action="apply-to-idea" data-id="${esc(idea.id)}" style="background: linear-gradient(135deg, var(--primary), var(--indigo)); border: none; color: #fff; font-weight: 600;">
            ${icon("briefcase")} Fikre Başvuru At
          </button>
        </div>
      </section>

      <section class="detail-layout">
        <div class="detail-main">
          <article class="content-panel">
            <div class="tag-row">
              ${statusBadge(idea.status)}
              <span class="tag">${esc(idea.type)}</span>
              <span class="tag">${esc(idea.company)}</span>
              <span class="tag">${esc(idea.location)}</span>
              <span class="visibility-badge">${icon("eye-off")} ${esc(idea.authorLabel)}</span>
            </div>
            <div class="form-grid one" style="margin-top: 16px;">
              <div><h3>Problem</h3><p class="muted">${esc(idea.problem)}</p></div>
              <div><h3>Çözüm</h3><p class="muted">${esc(idea.solution)}</p></div>
              <div><h3>Etki, maliyet ve başarı metriği</h3><p class="muted">${esc(idea.estimatedImpact)} etki · ${esc(idea.estimatedCost)} maliyet · ${esc(idea.successMetric)}</p></div>
            </div>
          </article>

          <article class="content-panel">
            <div class="section-title"><div><h2>AI Analizi</h2><p>Yönetici karar desteği için oluşturuldu.</p></div><div class="score-ring" style="--score: ${idea.aiScore}%">${idea.aiScore}</div></div>
            <div class="ai-analysis-grid">
              ${analysisCard("Kısa yorum", analysis.summary)}
              ${analysisCard("Güçlü yönler", analysis.strengths)}
              ${analysisCard("Geliştirme önerileri", analysis.improvements)}
              ${analysisCard("Pilot önerisi", analysis.pilot)}
            </div>
          </article>

          <article class="content-panel">
            <div class="section-title"><div><h2>Yorumlar</h2><p>${idea.comments.length} yorum · isimli ve anonim katkılar desteklenir.</p></div></div>
            ${idea.comments.length ? `<div class="comment-list">${idea.comments.map(comment => renderComment(comment)).join("")}</div>` : renderEmpty("message-circle", "Henüz yorum yok.", "İlk katkıyı sen ekleyebilirsin.")}
            <div class="chat-composer" style="padding-left: 0; padding-right: 0; border-top: 0; margin-top: 12px;">
              <input class="input" data-comment-draft placeholder="Yorum ekle..." value="${esc(state.commentDraft)}" />
              <button class="btn primary" data-action="add-comment" data-id="${esc(idea.id)}">${icon("send")} Gönder</button>
            </div>
          </article>

          <!-- Gelen Başvurular Bölümü -->
          <article class="content-panel" style="margin-top: 20px;">
            <div class="section-title">
              <div>
                <h2>Katılım Başvuruları</h2>
                <p>Projeye dahil olmak ve katkı sağlamak isteyen takım arkadaşları.</p>
              </div>
            </div>
            ${(idea.applications && idea.applications.length > 0) ? `
              <div class="applications-list" style="display: flex; flex-direction: column; gap: 12px; margin-top: 12px;">
                ${idea.applications.map(app => {
                  const applicant = personById(app.userId) || { name: app.userName, role: app.userRole, photo: app.userPhoto };
                  const isOwner = idea.authorId === state.currentUserId;
                  return `
                    <div class="application-item" style="background: var(--bg); border: 1px solid var(--line-soft); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 10px;">
                      <div style="display: flex; justify-content: space-between; align-items: start; gap: 10px; flex-wrap: wrap;">
                        <div style="display: flex; gap: 10px; align-items: center; cursor: pointer;" data-action="view-profile" data-user-id="${app.userId}">
                          ${avatar(app.userName, "medium", applicant.photo || app.userPhoto)}
                          <div>
                            <strong style="font-size: 14px; color: var(--ink);">${esc(app.userName)}</strong>
                            <small style="font-size: 11px; color: var(--muted); display: block;">${esc(app.userRole)} · Rol Tercihi: <strong style="color: var(--primary);">${esc(app.role)}</strong></small>
                          </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                          <span style="font-size: 11px; font-weight: 600; padding: 4px 8px; border-radius: 4px; 
                                       background: ${app.status === 'accepted' ? 'rgba(40, 167, 69, 0.1)' : app.status === 'rejected' ? 'rgba(220, 53, 69, 0.1)' : 'var(--line-soft)'};
                                       color: ${app.status === 'accepted' ? 'var(--positive)' : app.status === 'rejected' ? 'var(--negative)' : 'var(--ink-soft)'};">
                            ${app.status === 'accepted' ? 'Kabul Edildi' : app.status === 'rejected' ? 'Reddedildi' : 'Beklemede'}
                          </span>
                          ${(isOwner && app.status === 'pending') ? `
                            <button class="btn btn-sm success" data-action="accept-app" data-idea-id="${idea.id}" data-app-id="${app.id}" style="padding: 4px 8px; font-size: 11px;">Kabul Et</button>
                            <button class="btn btn-sm danger" data-action="reject-app" data-idea-id="${idea.id}" data-app-id="${app.id}" style="padding: 4px 8px; font-size: 11px;">Reddet</button>
                          ` : ""}
                        </div>
                      </div>
                      
                      <div style="font-size: 13px; color: var(--ink-soft); line-height: 1.4; background: var(--surface); padding: 10px 12px; border-radius: 8px; border: 1px solid var(--line-soft);">
                        <div><strong>Katılım Motivasyonu:</strong> ${esc(app.motivation)}</div>
                        <div style="margin-top: 6px;"><strong>Katkı Sunabileceği Alanlar:</strong> ${esc(app.contribution)}</div>
                        <div style="margin-top: 6px; display: flex; gap: 16px; font-size: 11.5px; color: var(--muted); flex-wrap: wrap;">
                          <span>${icon("clock", "12")} ${esc(app.timeCommitment)} / Hafta</span>
                          <span>${icon("wallet", "12")} ${esc(app.budgetRequest)}</span>
                          <span>Tarih: ${esc(app.date)}</span>
                        </div>
                      </div>
                    </div>
                  `;
                }).join("")}
              </div>
            ` : `
              <div style="background: var(--bg); border: 1px solid var(--line-soft); border-radius: 12px; padding: 20px; text-align: center; color: var(--muted); font-size: 13px;">
                ${icon("briefcase", "24")}
                <p style="margin-top: 6px;">Henüz bu projeye katılım başvurusu yapılmamış.</p>
              </div>
            `}
          </article>
        </div>

        <aside class="detail-side">
          ${renderBundleLibrary(idea, true)}

          <article class="content-panel">
            <h3>Skorlar</h3>
            <div class="score-grid" style="margin-top: 12px;">
              ${scorePill("Topluluk", idea.communityScore)}
              ${scorePill("Stratejik", idea.strategicScore)}
              ${scorePill("AI", idea.aiScore)}
            </div>
            <div class="mini-list" style="margin-top: 12px;">
              <div class="mini-item"><strong>Destek</strong><span>${idea.credits} kredi</span></div>
              <div class="mini-item"><strong>Destekçi</strong><span>${idea.supporters} kişi</span></div>
              <div class="mini-item"><strong>Uygulama süresi</strong><span>${esc(idea.implementationTime)}</span></div>
            </div>
          </article>
          <article class="content-panel">
            <h3>Süreç</h3>
            <div class="timeline" style="margin-top: 14px;">
              ${timelineItem("check", "Fikir yayınlandı", idea.createdAt)}
              ${timelineItem("sparkles", "AI analizi tamamlandı", "Aynı gün")}
              ${timelineItem("clipboard-check", statusMeta[idea.status].label, idea.status === "new" ? "Bekliyor" : "Tamamlandı")}
              ${timelineItem("rocket", "Pilot / uygulama kararı", idea.status === "done" ? "Tamamlandı" : "Sırada")}
            </div>
          </article>
        </aside>
      </section>
    </div>
  `;
}

function buildStaticAnalysis(idea) {
  return {
    summary: `${idea.title} düşük/orta karmaşıklıkta pilotlanabilir ve ${idea.successMetric.toLocaleLowerCase("tr-TR")} metriğine doğrudan bağlanabilir.`,
    strengths: ["Problem net", "Ölçülebilir", "Pilot yapısı kurulabilir", "Çapraz ekip katkısına uygun"],
    improvements: ["Başlangıç verisi eklenmeli", "Süreç sahibi netleşmeli", "Pilot lokasyon ve karar eşiği belirlenmeli"],
    pilot: `${idea.location} veya benzer 2 lokasyonda 4 haftalık pilot önerilir. Öncesi/sonrası KPI karşılaştırmasıyla karar verilebilir.`
  };
}

function renderComment(comment) {
  return `
    <div class="comment">
      ${avatar(comment.user, "small")}
      <div>
        <strong>${esc(comment.user)} ${comment.manager ? `<span class="status-badge review">Yönetici</span>` : ""}</strong>
        <p>${esc(comment.body)}</p>
      </div>
    </div>
  `;
}

function timelineItem(iconName, title, meta) {
  return `
    <div class="timeline-item">
      <span class="timeline-dot">${icon(iconName)}</span>
      <span><strong>${esc(title)}</strong><br /><span class="muted">${esc(meta)}</span></span>
    </div>
  `;
}

function renderAffiliationFilter() {
  return `
    <section class="corp-filter-panel">
      <div class="corp-filter-head">
        <div>
          <span class="panel-kicker">TİBAŞ HOLDİNG VE İŞTİRAK FİLTRESİ</span>
          <h3>Kurumsal kapsam</h3>
        </div>
        <label class="field compact-field">
          <span>Şirket</span>
          <select class="select" data-affiliation-filter>
            ${companyFilterOptions(state.affiliationFilter)}
          </select>
        </label>
      </div>
      <div class="affiliate-strip" aria-label="İştirakler">
        <button class="affiliate-chip ${state.affiliationFilter === "all" ? "active" : ""}" data-action="set-affiliation" data-id="all">
          ${companyLogo(companyById("tibas-holding"), "mini")}
          <span>Tümü</span>
        </button>
        ${affiliationCompanies.map(company => `
          <button class="affiliate-chip ${state.affiliationFilter === company.id ? "active" : ""}" data-action="set-affiliation" data-id="${esc(company.id)}">
            ${companyLogo(company, "mini")}
            <span>${esc(company.shortName)}</span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderAnnouncements() {
  const visible = filteredAnnouncements();
  
  return `
    <div class="view-stack announcements-page">
      <section class="apple-hero" style="padding: 24px; border-radius: 20px; background: var(--surface); border: 1px solid var(--line-soft); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
        <div>
          <span class="panel-kicker">NEW IDEA EXCHANGE</span>
          <h2>Duyurular</h2>
          <p>Kurumsal ve Topluluk duyurularını takip edin, bilgi edinin.</p>
        </div>
        <button class="btn primary" data-action="toggle-announcement-composer">${icon("megaphone")} Duyuru Yayınla</button>
      </section>

      ${state.showAnnouncementComposer ? renderAnnComposer() : ""}

      <!-- Filters & Search Toolbar -->
      <section class="content-panel apple-toolbar-panel" style="padding: 16px; border-radius: 16px; margin-top: 10px;">
        <div class="toolbar" style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
          <label class="search-box" style="flex: 1; min-width: 200px;">
            ${icon("search")}
            <input class="input" placeholder="Duyurularda ara..." data-announcement-filter="search" value="${esc(state.filters.announcementSearch || '')}" />
          </label>
          
          <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
            <select class="select" data-announcement-filter="tab" aria-label="Kaynak Filtresi">
              <option value="Tümü" ${state.filters.announcementTab === 'Tümü' ? 'selected' : ''}>Kaynak: Tümü</option>
              <option value="Kurumsal" ${state.filters.announcementTab === 'Kurumsal' ? 'selected' : ''}>Kurumsal</option>
              <option value="Topluluk" ${state.filters.announcementTab === 'Topluluk' ? 'selected' : ''}>Topluluk</option>
            </select>
            
            <select class="select" data-announcement-filter="company" aria-label="Şirket Filtresi">
              <option value="Tümü" ${state.filters.announcementCompany === 'Tümü' ? 'selected' : ''}>Şirket: Tümü</option>
              <option value="Şirketler" ${state.filters.announcementCompany === 'Şirketler' ? 'selected' : ''}>Şirketler</option>
              <option value="Bağımsız / Topluluk" ${state.filters.announcementCompany === 'Bağımsız / Topluluk' ? 'selected' : ''}>Bağımsız / Topluluk</option>
              ${affiliationCompanies.map(c => `
                <option value="${c.id}" ${state.filters.announcementCompany === c.id ? 'selected' : ''}>${esc(c.shortName)}</option>
              `).join("")}
            </select>

            <select class="select" data-announcement-filter="area" aria-label="Alan Filtresi">
              <option value="Tümü" ${state.filters.announcementArea === 'Tümü' ? 'selected' : ''}>Alan: Tümü</option>
              <option value="Etkinlikler" ${state.filters.announcementArea === 'Etkinlikler' ? 'selected' : ''}>Etkinlikler</option>
              <option value="Eğitimler" ${state.filters.announcementArea === 'Eğitimler' ? 'selected' : ''}>Eğitimler</option>
              <option value="Dereceler" ${state.filters.announcementArea === 'Dereceler' ? 'selected' : ''}>Dereceler</option>
              <option value="Şirket Haberleri" ${state.filters.announcementArea === 'Şirket Haberleri' ? 'selected' : ''}>Şirket Haberleri</option>
              <option value="Diğer" ${state.filters.announcementArea === 'Diğer' ? 'selected' : ''}>Diğer</option>
            </select>

            <select class="select" data-announcement-filter="sort" aria-label="Sıralama">
              <option value="En yeni" ${state.filters.announcementSort === 'En yeni' ? 'selected' : ''}>En yeni</option>
              <option value="En önemli" ${state.filters.announcementSort === 'En önemli' ? 'selected' : ''}>En önemli</option>
              <option value="En çok etkileşim alan" ${state.filters.announcementSort === 'En çok etkileşim alan' ? 'selected' : ''}>En çok etkileşim alan</option>
              <option value="En çok yorumlanan" ${state.filters.announcementSort === 'En çok yorumlanan' ? 'selected' : ''}>En çok yorumlanan</option>
            </select>

            <button class="btn ghost slim-btn" data-action="clear-announcement-filters" style="padding: 6px 12px; font-size: 13px;">
              ${icon("rotate-ccw")} Temizle
            </button>
          </div>
        </div>
      </section>

      <!-- Announcement Card Grid -->
      <section class="announcement-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 20px; margin-top: 10px;">
        ${visible.map(item => renderAnnouncementCard(item)).join("") || `<div class="trading-empty">Bu filtrelere uygun duyuru bulunamadı.</div>`}
      </section>
    </div>
  `;
}

function renderAnnouncementCard(item) {
  const company = companyById(item.companyId);
  const author = personById(item.authorId) || peopleDirectory[0];
  const comments = item.comments || [];
  const stars = renderStars(item.importanceScore);
  const isExpanded = state.expandedComments && state.expandedComments[item.id];
  
  return `
    <article class="announcement-card" style="border-left: 4px solid ${item.type === 'Kurumsal' ? 'var(--primary)' : 'var(--muted)'};">
      <div class="announcement-card-head" style="display: flex; justify-content: space-between; align-items: start;">
        <div class="announcement-brand">
          ${company ? companyLogo(company, "mini") : `<span class="independent-badge">Bağımsız / Topluluk</span>`}
          <span>
            <strong>${company ? esc(company.shortName) : "Bağımsız / Topluluk"}</strong>
            <small>${esc(item.type)} · ${esc(item.area)}</small>
          </span>
        </div>
        <div class="importance-badge" title="Önem Derecesi: ${item.importanceScore}/5">
          ${stars}
        </div>
      </div>
      
      <h3 style="margin: 12px 0 6px 0; font-size: 18px; font-weight: 600;">${esc(item.title)}</h3>
      <p style="font-size: 14px; color: var(--ink-soft); line-height: 1.5; margin-bottom: 12px;">${esc(item.body)}</p>
      
      <footer style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--line-soft); padding-top: 10px; font-size: 12px; color: var(--muted);">
        <span class="author-line" style="display: flex; align-items: center; gap: 6px; cursor: pointer;" data-action="view-profile" data-user-id="${author.id}">
          ${avatar(author.name, "tiny", author.photo)} 
          <strong>${esc(author.name)}</strong>
        </span>
        <span>${esc(item.date)}</span>
      </footer>

      <!-- Interaction Bar -->
      <div class="card-interaction-bar" style="display: flex; gap: 16px; margin-top: 12px; padding-top: 8px; border-top: 1px dashed var(--line-soft); font-size: 13px;">
        <button class="btn-like-interaction" data-action="like-announcement" data-id="${item.id}" style="background: none; border: none; color: var(--ink-soft); display: flex; align-items: center; gap: 4px; cursor: pointer;">
          ${icon("thumbs-up")} <span>${item.likes || 0}</span>
        </button>
        <button class="btn-comment-interaction" data-action="toggle-card-comments" data-id="${item.id}" style="background: none; border: none; color: var(--ink-soft); display: flex; align-items: center; gap: 4px; cursor: pointer;">
          ${icon("message-square")} <span>${comments.length} Yorum</span>
        </button>
      </div>

      <!-- Comments Area -->
      ${isExpanded ? `
        <div class="card-comments-section" style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--line-soft);">
          <div class="comments-list" style="max-height: 180px; overflow-y: auto; margin-bottom: 10px;">
            ${comments.length === 0 ? `
              <p style="font-size: 12px; color: var(--muted); text-align: center;">Henüz yorum yapılmamış. İlk yorumu sen yap!</p>
            ` : comments.map(c => `
              <div class="comment-item" style="margin-bottom: 8px; font-size: 13px; line-height: 1.4;">
                <div style="display: flex; align-items: center; gap: 6px; font-weight: 600; margin-bottom: 2px;">
                  <strong>${esc(c.user)}</strong>
                  ${c.manager ? `<span class="manager-pill" style="font-size: 10px; background: var(--primary-light); color: var(--primary); padding: 1px 4px; border-radius: 4px;">Yönetici</span>` : ""}
                </div>
                <div style="color: var(--ink-soft); padding-left: 2px;">${esc(c.body)}</div>
              </div>
            `).join("")}
          </div>
          <div class="comment-composer" style="display: flex; gap: 6px;">
            <input class="input slim-input" placeholder="Bir şeyler yaz..." data-comment-input="${item.id}" style="flex: 1; font-size: 13px; padding: 6px 10px;" />
            <button class="btn primary slim-btn" data-action="submit-card-comment" data-type="announcement" data-id="${item.id}" style="padding: 6px 12px; font-size: 13px;">Gönder</button>
          </div>
        </div>
      ` : ""}
    </article>
  `;
}

function renderMessages() {
  const spaces = spacesInScope();
  const selectedSpace = state.selectedDirectPersonId ? null : spaces.find(space => space.id === state.selectedMessageSpaceId) || spaces[0] || state.messageSpaces[0];
  const selectedPerson = state.selectedDirectPersonId ? personById(state.selectedDirectPersonId) : null;
  const scopedPeople = peopleInScope(14);
  const messages = selectedPerson
    ? (state.directThreads[selectedPerson.id] || [])
    : (selectedSpace?.messages || []);
  const headerCompany = selectedPerson ? companyById(selectedPerson.companyId) : companyById(selectedSpace?.companyId || "tibas-holding");

  return `
    <div class="view-stack corp-page">
      <section class="apple-page-head corp-brief-head">
        <div>
          <span class="panel-kicker">Mesajlar</span>
          <h2>Gruplar ve direkt konuşmalar.</h2>
          <p>İştirak, şehir ve yerleşke bağlamına göre ekipleri gör; kişilere doğrudan mesaj at.</p>
        </div>
        <button class="btn ghost" data-page="announcements">${icon("megaphone")} Duyurular</button>
      </section>

      ${renderAffiliationFilter()}

      <section class="message-hub">
        <aside class="message-sidebar">
          <div class="message-sidebar-head">
            <span class="panel-kicker">Gruplar</span>
            <strong>${spaces.length} kanal</strong>
          </div>
          ${spaces.map(space => {
            const company = companyById(space.companyId);
            return `
              <button class="message-space-button ${!selectedPerson && selectedSpace?.id === space.id ? "active" : ""}" data-action="select-message-space" data-id="${esc(space.id)}">
                ${companyLogo(company, "mini")}
                <span>
                  <strong>${esc(space.name)}</strong>
                  <small>${esc(space.scope)} · ${esc(company.shortName)}</small>
                </span>
                ${renderAvatarStack(space.members, 3)}
              </button>
            `;
          }).join("")}
        </aside>

        <main class="message-main-panel">
          <header class="message-thread-head">
            <div>
              <span class="panel-kicker">${selectedPerson ? "Direkt mesaj" : esc(selectedSpace?.scope || "Grup")}</span>
              <h3>${selectedPerson ? esc(selectedPerson.name) : esc(selectedSpace?.name || "Mesajlar")}</h3>
              <p>${selectedPerson ? `${esc(selectedPerson.role)} · ${esc(selectedPerson.campus)}` : esc(selectedSpace?.description || "")}</p>
            </div>
            ${companyLogo(headerCompany)}
          </header>
          <div class="message-thread">
            ${messages.length ? messages.map(renderHubMessage).join("") : `
              <article class="message-empty">
                ${avatar(selectedPerson?.name || "NIE", "", selectedPerson?.photo || "")}
                <strong>${selectedPerson ? `${esc(selectedPerson.name)} ile konuşma hazır.` : "Bu kanalda henüz mesaj yok."}</strong>
                <span>İlk mesajı alttan gönderebilirsin.</span>
              </article>
            `}
          </div>
          <div class="message-composer rich-message-composer">
            <div class="message-composer-tools">
              <button class="btn ghost" data-action="send-rich-message" data-kind="poll">${icon("list-checks")} Anket</button>
              <button class="btn ghost" data-action="send-rich-message" data-kind="image">${icon("image")} Görsel</button>
              <button class="btn ghost" data-action="send-rich-message" data-kind="link">${icon("link")} Link</button>
              <button class="btn ghost" data-action="send-rich-message" data-kind="file">${icon("paperclip")} Dosya</button>
            </div>
            <input class="input" data-message-draft value="${esc(state.messageDraft)}" placeholder="${selectedPerson ? "Direkt mesaj yaz" : "Gruba mesaj yaz"}" />
            <button class="btn primary" data-action="send-message">${icon("send")} Gönder</button>
          </div>
        </main>

        <aside class="people-panel">
          <div class="message-sidebar-head">
            <span class="panel-kicker">Profiller</span>
            <strong>${scopedPeople.length} kişi</strong>
          </div>
          ${scopedPeople.map(person => {
            const company = companyById(person.companyId);
            return `
              <button class="person-card ${selectedPerson?.id === person.id ? "active" : ""}" data-action="start-direct-message" data-id="${esc(person.id)}">
                ${avatar(person.name, "", person.photo)}
                <span>
                  <strong>${esc(person.name)}</strong>
                  <small>${esc(person.role)} · ${esc(company.shortName)}</small>
                </span>
                <em>${esc(person.status)}</em>
              </button>
            `;
          }).join("")}
        </aside>
      </section>
    </div>
  `;
}

// ─── TEAMS ────────────────────────────────────────────────────────────────────

function teamSynergyScore(team) {
  const roles = team.roles || [];
  const total = roles.length || 1;
  const filled = roles.filter(r => r.filled).length;
  const fillRate = filled / total;
  const roleTypes = new Set(roles.filter(r => r.filled).map(r => r.title));
  const diversityScore = Math.min(roleTypes.size / 4, 1);
  return Math.round(fillRate * 62 + diversityScore * 38);
}

function isMyTeam(team) {
  const user = currentUser();
  return team.createdBy === user.id || (team.roles || []).some(r => r.userId === user.id);
}

function teamStatusLabel(status) {
  return { active: "Aktif", forming: "Kuruluyor", disbanded: "Dağıldı" }[status] || status;
}

function teamStatusClass(status) {
  return { active: "team-status-active", forming: "team-status-forming", disbanded: "team-status-disbanded" }[status] || "";
}

function renderSynergyRing(score) {
  const r = 26;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;
  const color = score >= 75 ? "#22c55e" : score >= 50 ? "#f59e0b" : "#ef4444";
  return `
    <div class="synergy-ring-wrap" title="Sinerji Skoru: ${score}/100">
      <svg width="68" height="68" viewBox="0 0 68 68">
        <circle cx="34" cy="34" r="${r}" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="5"/>
        <circle cx="34" cy="34" r="${r}" fill="none" stroke="${color}" stroke-width="5"
          stroke-dasharray="${dash.toFixed(1)} ${circ.toFixed(1)}"
          stroke-linecap="round"
          transform="rotate(-90 34 34)"/>
        <text x="34" y="38" text-anchor="middle" font-size="13" font-weight="700" fill="${color}">${score}</text>
      </svg>
      <span>Sinerji</span>
    </div>
  `;
}

function renderRecruitmentListings() {
  const listings = (state.announcements || []).filter(a => a.missingRoles && a.missingRoles.length > 0);
  if (!listings.length) return "";

  return `
    <section class="recruitment-listings-section">
      <div class="teams-section-head">
        <span class="panel-kicker" style="display:inline-flex;align-items:center;gap:5px;">
          ${icon("megaphone")} Takım Arkadaşı İlanları
        </span>
        <strong>${listings.length} aktif ilan</strong>
      </div>
      <div class="recruitment-cards-grid">
        ${listings.map(ann => renderRecruitmentCard(ann)).join("")}
      </div>
    </section>
  `;
}

function renderRecruitmentCard(ann) {
  const comp = companyById(ann.companyId);
  const author = personById(ann.authorId);
  const linkedIdea = ann.ideaId ? state.ideas.find(i => i.id === ann.ideaId) : null;
  const cleanTitle = ann.title.replace(/🚀\s?|🔥\s?/g, "");
  const linkedTeam = linkedIdea ? productLinkedTeam(linkedIdea.id) : null;

  return `
    <article class="recruitment-card">
      ${ann.imageUrl ? `
        <div class="recruitment-card-image">
          <img src="${esc(ann.imageUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer" />
          <div class="recruitment-card-image-overlay"></div>
          <span class="recruitment-badge">${icon("user-plus")} Takım Arkadaşı Aranıyor</span>
        </div>
      ` : `
        <div class="recruitment-card-image no-img">
          <span class="recruitment-badge">${icon("user-plus")} Takım Arkadaşı Aranıyor</span>
          ${companyLogo(comp, "large")}
        </div>
      `}

      <div class="recruitment-card-body">
        <div class="recruitment-card-meta">
          ${companyLogo(comp, "mini")}
          <span>${esc(comp.shortName)}</span>
          <span class="recruitment-date">${esc(ann.date)}</span>
        </div>

        <h3 class="recruitment-card-title">${esc(cleanTitle)}</h3>
        <p class="recruitment-card-desc">${esc(ann.body)}</p>

        <div class="recruitment-missing-roles">
          <span class="recruitment-roles-label">${icon("search")} Aranan Pozisyonlar</span>
          <div class="recruitment-roles-list">
            ${(ann.missingRoles || []).map(role => `
              <span class="recruitment-role-chip">
                ${icon("user-plus")} ${esc(role)}
              </span>
            `).join("")}
          </div>
        </div>

        ${linkedIdea ? `
          <div class="recruitment-linked-idea">
            ${icon("link-2")}
            <span>Proje:</span>
            <strong>${esc(linkedIdea.marketTicker)}</strong>
            <span class="recruitment-idea-title">${esc(linkedIdea.title.slice(0, 48))}${linkedIdea.title.length > 48 ? "…" : ""}</span>
          </div>
        ` : ""}

        <div class="recruitment-card-footer">
          <div class="recruitment-author">
            ${author ? `${avatar(author.name, "tiny", author.photo)}<span>${esc(author.name)}</span>` : `<span style="color:var(--muted);">${esc(ann.author)}</span>`}
            <span class="recruitment-likes">${icon("heart")} ${ann.likes || 0}</span>
          </div>
          <div class="recruitment-actions">
            ${linkedIdea ? `
              <button class="btn ghost slim-btn" data-action="open-idea" data-id="${esc(linkedIdea.id)}" style="font-size:12px;">
                ${icon("external-link")} Fikri İncele
              </button>
            ` : ""}
            ${linkedTeam ? `
              <button class="btn ghost slim-btn" data-action="open-team" data-id="${esc(linkedTeam.id)}" style="font-size:12px;">
                ${icon("users-round")} Ekibi Gör
              </button>
            ` : ""}
            <button class="btn primary" data-action="apply-to-idea" data-id="${esc(ann.ideaId || '')}" style="font-size:12.5px;padding:7px 14px;font-weight:700;">
              ${icon("send")} Başvur
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderOpenPositionsBanner() {
  const openTeams = state.teams.filter(t => (t.roles || []).some(r => !r.filled));
  if (!openTeams.length) return "";
  const openSlots = openTeams.flatMap(t =>
    (t.roles || []).filter(r => !r.filled).map(r => ({ team: t, role: r }))
  ).slice(0, 5);
  return `
    <section class="open-positions-banner">
      <div class="opb-head">
        <span class="panel-kicker">Açık Pozisyonlar</span>
        <strong>${openSlots.length} ekip seni bekliyor</strong>
      </div>
      <div class="opb-slots">
        ${openSlots.map(({ team, role }) => `
          <button class="opb-slot" data-action="open-team" data-id="${esc(team.id)}">
            ${icon(role.icon || "user-plus")}
            <span>
              <strong>${esc(role.title)}</strong>
              <small>${esc(team.name)}</small>
            </span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

const teamRoleTemplates = [
  {
    id: "mvp",
    label: "MVP Ekibi",
    desc: "Hızlı ürün çıkarmak için ideal 4 kişilik çekirdek ekip",
    icon: "rocket",
    roles: [
      { title: "Ürün Yöneticisi", icon: "briefcase", skills: ["Roadmap", "OKR"] },
      { title: "Frontend Mühendisi", icon: "code-2", skills: ["React", "TypeScript"] },
      { title: "Backend Mühendisi", icon: "server", skills: ["Node.js", "API"] },
      { title: "UX Designer", icon: "pen-tool", skills: ["Figma", "Prototyping"] }
    ]
  },
  {
    id: "research",
    label: "Araştırma Ekibi",
    desc: "Derin analiz ve içgörü üretecek araştırma odaklı ekip",
    icon: "flask-conical",
    roles: [
      { title: "Araştırma Lideri", icon: "star", skills: ["Research Design", "Analysis"] },
      { title: "Veri Analisti", icon: "bar-chart-2", skills: ["SQL", "Python"] },
      { title: "UX Araştırmacısı", icon: "users", skills: ["User Research", "Interview"] },
      { title: "İçgörü Yazarı", icon: "file-text", skills: ["Writing", "Synthesis"] }
    ]
  },
  {
    id: "fintech",
    label: "FinTech Sprint",
    desc: "Finansal ürün ve regülasyon odaklı 5 kişilik ekip",
    icon: "landmark",
    roles: [
      { title: "Ürün Yöneticisi", icon: "briefcase", skills: ["Roadmap", "Fintech"] },
      { title: "Backend Mühendisi", icon: "server", skills: ["Security", "API"] },
      { title: "Compliance Uzmanı", icon: "shield-check", skills: ["BRSA", "Uyum"] },
      { title: "UX Designer", icon: "pen-tool", skills: ["Figma", "Accessibility"] },
      { title: "Veri Bilimcisi", icon: "brain", skills: ["ML", "Python"] }
    ]
  },
  {
    id: "custom",
    label: "Özel Ekip",
    desc: "Rolleri kendin belirle, dilediğin yapıyı kur",
    icon: "settings-2",
    roles: []
  }
];

function managerVoteEvents() {
  const base = state.investmentLedger || [];
  const seeded = [
    { userId: "p02", userName: "Mert Alkan", ideaId: "idea-5", ideaTitle: state.ideas.find(i => i.id === "idea-5")?.title || "AI kredi skoru", amount: 1840, quantity: 14, date: "13.06.2026" },
    { userId: "p05", userName: "Ece Uslu", ideaId: "idea-1", ideaTitle: state.ideas.find(i => i.id === "idea-1")?.title || "Yeşil finans", amount: 1620, quantity: 12, date: "14.06.2026" },
    { userId: "p15", userName: "Aslı Ergin", ideaId: "idea-2", ideaTitle: state.ideas.find(i => i.id === "idea-2")?.title || "Onboarding", amount: 1380, quantity: 9, date: "14.06.2026" },
    { userId: "p03", userName: "Selin Eryılmaz", ideaId: "idea-3", ideaTitle: state.ideas.find(i => i.id === "idea-3")?.title || "Akıllı bina", amount: 980, quantity: 7, date: "15.06.2026" },
    { userId: "u3", userName: "Can Koç", ideaId: "idea-1", ideaTitle: state.ideas.find(i => i.id === "idea-1")?.title || "Operasyon", amount: 2200, quantity: 16, date: "15.06.2026" }
  ];
  return [...base, ...seeded];
}

function renderManagerDashboard() {
  if (!currentUser().isManager && !currentUser().isAdmin) return renderNoAccess();
  const votes = managerVoteEvents();
  const totalVotes = votes.reduce((sum, row) => sum + Number(row.quantity || 0), 0);
  const totalAmount = votes.reduce((sum, row) => sum + Number(row.amount || 0), 0);
  const byIdea = votes.reduce((acc, row) => {
    acc[row.ideaId] = acc[row.ideaId] || { ideaId: row.ideaId, title: row.ideaTitle, votes: 0, amount: 0, users: new Set() };
    acc[row.ideaId].votes += Number(row.quantity || 0);
    acc[row.ideaId].amount += Number(row.amount || 0);
    acc[row.ideaId].users.add(row.userName);
    return acc;
  }, {});
  const topIdeas = Object.values(byIdea).sort((a, b) => b.votes - a.votes).slice(0, 5);
  const byUser = votes.reduce((acc, row) => {
    acc[row.userName] = acc[row.userName] || { userName: row.userName, votes: 0, amount: 0, count: 0 };
    acc[row.userName].votes += Number(row.quantity || 0);
    acc[row.userName].amount += Number(row.amount || 0);
    acc[row.userName].count += 1;
    return acc;
  }, {});
  const userRows = Object.values(byUser).sort((a, b) => b.amount - a.amount);
  const performance = managerCategoryPerformance(votes);
  const maxPerf = Math.max(1, ...performance.map(row => row.score));

  return `
    <div class="view-stack manager-dashboard-page">
      <section class="apple-page-head manager-dashboard-hero">
        <div>
          <span class="panel-kicker">Yönetici Dashboardu</span>
          <h2>Oy, ürün ve stüdyo performansı.</h2>
          <p>Kimin hangi fikre oy verdiğini, toplam etkiyi ve kategori/stüdyo performansını demo verilerle izleyin.</p>
        </div>
        <button class="btn ghost" data-page="adminStorage">${icon("folder-kanban")} Yönetici Depolama</button>
      </section>

      <section class="manager-metric-grid">
        ${managerMetricCard("coins", "Toplam oy/lot", totalVotes.toLocaleString("tr-TR"), "Kullanıcıların fikir borsasındaki toplam oy hareketi.")}
        ${managerMetricCard("badge-dollar-sign", "Toplam değer", formatCurrency(totalAmount), "Oyların demo parasal karşılığı.")}
        ${managerMetricCard("trophy", "En güçlü fikir", topIdeas[0]?.title?.slice(0, 34) || "-", `${topIdeas[0]?.votes || 0} oy ile lider.`)}
        ${managerMetricCard("users-round", "Aktif kullanıcı", userRows.length, "Oy geçmişinde görünen benzersiz kullanıcı.")}
      </section>

      <section class="manager-dashboard-grid">
        <article class="manager-panel">
          <div class="manager-panel-head"><span class="panel-kicker">Fikir/Ürün Bazlı</span><strong>En çok oy alanlar</strong></div>
          <div class="manager-ranked-list">
            ${topIdeas.map((row, index) => `
              <button class="manager-rank-row" data-action="open-idea" data-id="${esc(row.ideaId)}">
                <em>${index + 1}</em>
                <span><strong>${esc(row.title)}</strong><small>${row.users.size} kullanıcı · ${formatCurrency(row.amount)}</small></span>
                <b>${row.votes}</b>
              </button>
            `).join("")}
          </div>
        </article>

        <article class="manager-panel">
          <div class="manager-panel-head"><span class="panel-kicker">Kategori / Stüdyo</span><strong>Performans özeti</strong></div>
          <div class="manager-bars">
            ${performance.map(row => `
              <div class="manager-bar-row">
                <span>${esc(row.label)}</span>
                <i><b style="width:${Math.max(8, Math.round(row.score / maxPerf * 100))}%"></b></i>
                <strong>${row.score}</strong>
              </div>
            `).join("")}
          </div>
        </article>
      </section>

      <section class="manager-panel" style="margin-top: 24px;">
        <div class="manager-panel-head" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; border-bottom: 1px solid var(--line-soft); padding-bottom: 12px; margin-bottom: 16px;">
          <div>
            <span class="panel-kicker">Karar Analitiği</span>
            <strong>Detaylı Yatırım Defteri</strong>
          </div>
          <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
            <label style="font-size: 12.5px; display: flex; align-items: center; gap: 6px;">
              <span style="color: var(--ink-soft); font-weight: 500;">Kullanıcı:</span>
              <select class="select" data-action="filter-ledger-user" style="font-size: 12px; padding: 4px 8px; height: 32px; border-radius: 8px;">
                ${["Tümü", ...Array.from(new Set(votes.map(v => v.userName)))].map(u => `<option value="${esc(u)}" ${state.ledgerUserFilter === u ? "selected" : ""}>${esc(u)}</option>`).join("")}
              </select>
            </label>
            <label style="font-size: 12.5px; display: flex; align-items: center; gap: 6px;">
              <span style="color: var(--ink-soft); font-weight: 500;">Proje:</span>
              <select class="select" data-action="filter-ledger-project" style="font-size: 12px; padding: 4px 8px; height: 32px; border-radius: 8px;">
                ${["Tümü", ...Array.from(new Set(votes.map(v => v.ideaTitle)))].map(p => `<option value="${esc(p)}" ${state.ledgerProjectFilter === p ? "selected" : ""}>${esc(p)}</option>`).join("")}
              </select>
            </label>
            <button class="btn ghost slim-btn" data-action="reset-ledger-filters" style="font-size: 12px; padding: 6px 12px; height: 32px; display: flex; align-items: center; gap: 4px;">
              ${icon("refresh-cw")} Sıfırla
            </button>
          </div>
        </div>

        <div class="manager-history-table" style="display: grid; grid-template-columns: 1.5fr 3fr 1fr 1.5fr 1.5fr; gap: 8px; background: var(--surface); border-radius: 12px; overflow: hidden;">
          <div class="head" style="font-weight: 700; color: var(--ink); background: var(--bg-soft); padding: 10px 12px;">Kullanıcı</div>
          <div class="head" style="font-weight: 700; color: var(--ink); background: var(--bg-soft); padding: 10px 12px;">Proje Yatırımı</div>
          <div class="head" style="font-weight: 700; color: var(--ink); background: var(--bg-soft); padding: 10px 12px; text-align: right;">Birim</div>
          <div class="head" style="font-weight: 700; color: var(--ink); background: var(--bg-soft); padding: 10px 12px; text-align: right;">Yatırım Tutarı</div>
          <div class="head" style="font-weight: 700; color: var(--ink); background: var(--bg-soft); padding: 10px 12px; text-align: right;">İşlem Tarihi</div>
          
          ${(function() {
            let filteredVotes = [...votes];
            if (state.ledgerUserFilter && state.ledgerUserFilter !== "Tümü") {
              filteredVotes = filteredVotes.filter(v => v.userName === state.ledgerUserFilter);
            }
            if (state.ledgerProjectFilter && state.ledgerProjectFilter !== "Tümü") {
              filteredVotes = filteredVotes.filter(v => v.ideaTitle === state.ledgerProjectFilter);
            }
            return filteredVotes.length > 0 ? filteredVotes.map(row => `
              <div style="padding: 10px 12px; border-bottom: 1px solid var(--line-soft);">${esc(row.userName)}</div>
              <div style="padding: 10px 12px; border-bottom: 1px solid var(--line-soft); font-weight: 500; color: var(--ink);">${esc(row.ideaTitle)}</div>
              <div style="padding: 10px 12px; border-bottom: 1px solid var(--line-soft); text-align: right;">${Number(row.quantity || 0)}</div>
              <div style="padding: 10px 12px; border-bottom: 1px solid var(--line-soft); text-align: right; color: var(--primary); font-weight: 600;">${formatCurrency(row.amount || 0)}</div>
              <div style="padding: 10px 12px; border-bottom: 1px solid var(--line-soft); text-align: right; color: var(--muted);">${esc(row.date)}</div>
            `).join("") : `
              <div style="grid-column: span 5; text-align: center; padding: 30px; color: var(--muted); font-size: 13.5px;">
                ${icon("alert-circle", "style='display:block; margin: 0 auto 8px; opacity:0.5;'")} Filtrelere uygun yatırım kaydı bulunamadı.
              </div>
            `;
          })()}
        </div>
      </section>
    </div>
  `;
}

function managerMetricCard(iconName, label, value, note) {
  return `
    <article class="manager-metric-card">
      <span>${icon(iconName)}</span>
      <small>${esc(label)}</small>
      <strong>${esc(value)}</strong>
      <em>${esc(note)}</em>
    </article>
  `;
}

function managerCategoryPerformance(votes) {
  const grouped = {};
  votes.forEach(row => {
    const idea = state.ideas.find(item => item.id === row.ideaId);
    const label = idea?.area || idea?.marketCategory || "Diğer";
    grouped[label] = (grouped[label] || 0) + Number(row.quantity || 0);
  });
  state.studios.forEach(studio => {
    grouped[studio.category] = (grouped[studio.category] || 0) + Math.round(studio.popularity / 12);
  });
  return Object.entries(grouped).map(([label, score]) => ({ label, score })).sort((a, b) => b.score - a.score).slice(0, 6);
}

function renderAdminStorage() {
  if (!currentUser().isManager && !currentUser().isAdmin) return renderNoAccess();
  const categories = ["Tümü", ...Array.from(new Set(state.adminStorageItems.map(item => item.category)))];
  return `
    <div class="view-stack admin-storage-page">
      <section class="apple-page-head">
        <div>
          <span class="panel-kicker">Yönetici Depolama</span>
          <h2>Dosya, not ve kaynak arşivi.</h2>
          <p>Backend olmadan local demo state ile çalışan yönetici kaynak alanı.</p>
        </div>
      </section>
      <section class="admin-storage-layout">
        <article class="manager-panel admin-storage-form">
          <div class="manager-panel-head"><span class="panel-kicker">Yeni kayıt</span><strong>Kaynak ekle</strong></div>
          <label class="field"><span>Başlık</span><input class="input" data-admin-storage-draft="title" value="${esc(state.adminStorageDraft.title)}" placeholder="Kaynak başlığı" /></label>
          <label class="field"><span>Açıklama</span><textarea class="textarea" data-admin-storage-draft="description" rows="3" placeholder="Kısa açıklama">${esc(state.adminStorageDraft.description)}</textarea></label>
          <label class="field"><span>Kategori</span><select class="select" data-admin-storage-draft="category">${optionList(["Yönetim notu", "AI kaynak", "Finans", "Risk", "Toplantı", "Dosya"], state.adminStorageDraft.category)}</select></label>
          <label class="field"><span>Kaynak / Link / Not</span><input class="input" data-admin-storage-draft="source" value="${esc(state.adminStorageDraft.source)}" placeholder="URL, not veya kaynak adı" /></label>
          <label class="field file-upload-field"><span>Dosya</span><input class="input" type="file" multiple data-admin-storage-files accept="${uploadAcceptList()}" /><small>${renderUploadSummary(state.adminStorageDraft.files, "Dosya seçilmedi.")}</small></label>
          <button class="btn primary" data-action="add-admin-storage-item">${icon("plus")} Kaydet</button>
        </article>
        <section class="admin-storage-list">
          ${state.adminStorageItems.map(item => `
            <article class="storage-card">
              <div><span class="panel-kicker">${esc(item.category)}</span><h3>${esc(item.title)}</h3><p>${esc(item.description)}</p></div>
              <div class="storage-card-meta"><span>${icon("calendar")} ${esc(item.date)}</span><span>${icon("link")} ${esc(item.source || "Kaynak yok")}</span></div>
              <div class="challenge-chip-row">${(item.files || []).map(file => `<span>${icon(bundleMeta(file).icon)} ${esc(bundleFileName(file))}</span>`).join("")}</div>
            </article>
          `).join("")}
        </section>
      </section>
    </div>
  `;
}

function renderAgendaPage() {
  const userCanEdit = currentUser().isManager || currentUser().isAdmin;
  const list = filteredAgendaItems();
  const categories = ["Tümü", ...Array.from(new Set(state.agendaItems.map(item => item.category)))];
  const tags = ["Tümü", ...Array.from(new Set(state.agendaItems.flatMap(item => item.tags || [])))];
  return `
    <div class="view-stack agenda-page">
      <section class="apple-page-head">
        <div>
          <span class="panel-kicker">Gündem</span>
          <h2>Manuel kurumsal gündem akışı.</h2>
          <p>AI internete çıkmaz; gündem içerikleri yöneticiler tarafından manuel eklenir.</p>
        </div>
      </section>
      <section class="challenge-filterbar">
        <label class="search-box">${icon("search")}<input class="input" data-agenda-filter="search" value="${esc(state.filters.agendaSearch || "")}" placeholder="Gündemde ara..." /></label>
        <select class="select" data-agenda-filter="category">${categories.map(item => `<option value="${esc(item)}" ${state.filters.agendaCategory === item ? "selected" : ""}>Kategori: ${esc(item)}</option>`).join("")}</select>
        <select class="select" data-agenda-filter="tag">${tags.map(item => `<option value="${esc(item)}" ${state.filters.agendaTag === item ? "selected" : ""}>Etiket: ${esc(item)}</option>`).join("")}</select>
        <button class="btn ghost slim-btn" data-action="clear-agenda-filters">${icon("rotate-ccw")} Temizle</button>
      </section>
      ${userCanEdit ? renderAgendaComposer() : ""}
      <section class="agenda-list">
        ${list.map(item => `
          <article class="agenda-card">
            <div class="agenda-card-date"><strong>${esc(item.date.slice(8, 10) || item.date)}</strong><span>${esc(item.date.slice(5, 7) || "")}</span></div>
            <div>
              <span class="panel-kicker">${esc(item.category)} · ${esc(item.author)}</span>
              <h3>${esc(item.title)}</h3>
              <p>${esc(item.body)}</p>
              <div class="challenge-chip-row">${(item.tags || []).map(tag => `<span>#${esc(tag)}</span>`).join("")}</div>
            </div>
            ${userCanEdit ? `<button class="btn ghost slim-btn" data-action="edit-agenda-item" data-id="${esc(item.id)}">${icon("pencil")} Düzenle</button>` : ""}
          </article>
        `).join("") || `<article class="empty-state">${icon("newspaper")} <strong>Gündem bulunamadı.</strong><span>Filtreleri temizleyip tekrar dene.</span></article>`}
      </section>
    </div>
  `;
}

function renderAgendaComposer() {
  const d = state.agendaDraft;
  return `
    <article class="manager-panel agenda-composer">
      <div class="manager-panel-head"><span class="panel-kicker">${state.agendaEditId ? "Düzenleme" : "Admin ekleme"}</span><strong>${state.agendaEditId ? "Gündemi güncelle" : "Yeni gündem ekle"}</strong></div>
      <div class="agenda-composer-grid">
        <label class="field"><span>Başlık</span><input class="input" data-agenda-draft="title" value="${esc(d.title)}" placeholder="Gündem başlığı" /></label>
        <label class="field"><span>Kategori</span><select class="select" data-agenda-draft="category">${optionList(["Strateji", "Operasyon", "AI Host", "Ürün", "Etkinlik", "Risk"], d.category)}</select></label>
        <label class="field"><span>Tarih</span><input class="input" type="date" data-agenda-draft="date" value="${esc(d.date)}" /></label>
        <label class="field"><span>Etiketler</span><input class="input" data-agenda-draft="tags" value="${esc(d.tags)}" placeholder="virgülle ayır" /></label>
        <label class="field full"><span>Açıklama</span><textarea class="textarea" rows="3" data-agenda-draft="body">${esc(d.body)}</textarea></label>
      </div>
      <div class="field-row">
        <button class="btn primary" data-action="submit-agenda-item">${icon("send")} ${state.agendaEditId ? "Güncelle" : "Yayınla"}</button>
        ${state.agendaEditId ? `<button class="btn ghost" data-action="cancel-agenda-edit">${icon("x")} Vazgeç</button>` : ""}
      </div>
    </article>
  `;
}

function filteredAgendaItems() {
  const q = (state.filters.agendaSearch || "").trim().toLocaleLowerCase("tr-TR");
  return [...state.agendaItems].filter(item => {
    const text = [item.title, item.body, item.category, ...(item.tags || [])].join(" ").toLocaleLowerCase("tr-TR");
    const searchMatch = !q || text.includes(q);
    const categoryMatch = state.filters.agendaCategory === "Tümü" || item.category === state.filters.agendaCategory;
    const tagMatch = state.filters.agendaTag === "Tümü" || (item.tags || []).includes(state.filters.agendaTag);
    return searchMatch && categoryMatch && tagMatch;
  }).sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

function renderStudioPage() {
  const studios = filteredStudios();
  return `
    <div class="view-stack studio-page-v2">
      <section class="studio-hero">
        <div class="studio-hero-left"><span class="panel-kicker">Stüdyo</span><h2>Çalışma alanları ayrı, ekipler ayrı.</h2><p>Stüdyolar kategori bazlı ürünleşme alanlarıdır; ekipler ayrı bölümden yönetilir.</p></div>
        <div class="studio-hero-right">
          <div class="studio-stat"><strong>${state.studios.length}</strong><span>Stüdyo</span></div>
          <div class="studio-stat accent"><strong>${Math.round(state.studios.reduce((s, x) => s + x.popularity, 0) / state.studios.length)}</strong><span>Ortalama popülerlik</span></div>
          <button class="btn primary studio-cta" data-page="teams">${icon("users-round")} Ekipleri Gör</button>
        </div>
      </section>
      <section class="challenge-filterbar">
        <label class="search-box">${icon("search")}<input class="input" data-studio-filter="search" value="${esc(state.filters.studioSearch || "")}" placeholder="Stüdyo ara..." /></label>
        <select class="select" data-studio-filter="category">${["Tümü", ...Array.from(new Set(state.studios.map(s => s.category)))].map(v => `<option value="${esc(v)}" ${state.filters.studioCategory === v ? "selected" : ""}>Kategori: ${esc(v)}</option>`).join("")}</select>
        <select class="select" data-studio-filter="status">${["Tümü", "Aktif", "Kuruluyor"].map(v => `<option value="${esc(v)}" ${state.filters.studioStatus === v ? "selected" : ""}>Durum: ${esc(v)}</option>`).join("")}</select>
        <select class="select" data-studio-filter="sort">${["Popülerlik", "Tarih", "Ad"].map(v => `<option value="${esc(v)}" ${state.filters.studioSort === v ? "selected" : ""}>Sırala: ${esc(v)}</option>`).join("")}</select>
      </section>
      <section class="studio-card-grid">${studios.map(renderStudioCard).join("")}</section>
    </div>
  `;
}

function filteredStudios() {
  const q = (state.filters.studioSearch || "").trim().toLocaleLowerCase("tr-TR");
  let list = state.studios.filter(studio => {
    const text = [studio.name, studio.description, studio.category, studio.status].join(" ").toLocaleLowerCase("tr-TR");
    return (!q || text.includes(q))
      && (state.filters.studioCategory === "Tümü" || studio.category === state.filters.studioCategory)
      && (state.filters.studioStatus === "Tümü" || studio.status === state.filters.studioStatus);
  });
  const sorters = {
    "Popülerlik": (a, b) => b.popularity - a.popularity,
    "Tarih": (a, b) => String(b.createdAt).localeCompare(String(a.createdAt)),
    "Ad": (a, b) => a.name.localeCompare(b.name, "tr")
  };
  return list.sort(sorters[state.filters.studioSort] || sorters.Popülerlik);
}

function renderStudioCard(studio) {
  return `
    <article class="studio-card-v2">
      <div class="studio-card-top"><span class="challenge-prize-icon">${icon("layers")}</span><span class="status-badge ${studio.status === "Aktif" ? "new" : "review"}">${esc(studio.status)}</span></div>
      <h3>${esc(studio.name)}</h3>
      <p>${esc(studio.description)}</p>
      <div class="challenge-chip-row"><span>${esc(studio.category)}</span><span>${studio.linkedIdeas.length} fikir</span><span>${studio.linkedTeams.length} ekip</span></div>
      <div class="product-progress-track"><div class="product-progress-fill" style="width:${studio.popularity}%;"></div></div>
      <div class="challenge-footer"><small>${esc(studio.createdAt)}</small><button class="btn ghost slim-btn" data-page="teams">${icon("arrow-right")} Ekipler</button></div>
    </article>
  `;
}

function renderTeamsDirectory() {
  if (state.teamsView === "detail") return renderTeamDetail();
  if (state.teamsView === "create") return renderCreateTeam();
  const list = filteredTeams();
  return `
    <div class="view-stack teams-page">
      <section class="apple-page-head">
        <div><span class="panel-kicker">Ekipler</span><h2>Ekipler ayrı bir bölüm.</h2><p>Ekip listesi, üyeler, açık roller ve bağlı proje/stüdyo bilgisi.</p></div>
        <button class="btn primary" data-action="start-create-team">${icon("plus")} Yeni Ekip Kur</button>
      </section>
      <section class="challenge-filterbar">
        <label class="search-box">${icon("search")}<input class="input" data-team-filter="search" value="${esc(state.filters.teamSearch || "")}" placeholder="Ekip ara..." /></label>
        <select class="select" data-team-filter="area">${["Tümü", ...Array.from(new Set(state.teams.map(t => t.area)))].map(v => `<option value="${esc(v)}" ${state.filters.teamArea === v ? "selected" : ""}>Alan: ${esc(v)}</option>`).join("")}</select>
        <select class="select" data-team-filter="status">${["Tümü", "active", "forming", "disbanded"].map(v => `<option value="${esc(v)}" ${state.filters.teamStatus === v ? "selected" : ""}>Durum: ${esc(teamStatusLabel(v))}</option>`).join("")}</select>
      </section>
      <section><div class="teams-section-head"><span class="panel-kicker">Liste</span><strong>${list.length} ekip</strong></div><div class="teams-grid">${list.map(team => renderTeamCard(team, isMyTeam(team))).join("")}</div></section>
    </div>
  `;
}

function filteredTeams() {
  const q = (state.filters.teamSearch || "").trim().toLocaleLowerCase("tr-TR");
  return state.teams.filter(team => {
    const text = [team.name, team.description, team.area, ...(team.tags || [])].join(" ").toLocaleLowerCase("tr-TR");
    return (!q || text.includes(q))
      && (state.filters.teamArea === "Tümü" || team.area === state.filters.teamArea)
      && (state.filters.teamStatus === "Tümü" || team.status === state.filters.teamStatus);
  });
}

function renderAdvancedProductsPage() {
  const ideas = filteredAdvancedProducts();
  const userCanManage = currentUser().isManager || currentUser().isAdmin;
  return `
    <div class="view-stack products-page">
      <section class="products-hero">
        <div class="products-hero-text"><span class="panel-kicker">Geliştirilmiş Ürünler</span><h2>Ürünleşen fikirler.</h2><p>Durum, oy sayısı, kategori ve geliştirme seviyesi ayrı listelenir.</p></div>
        <div class="products-hero-stats"><div class="product-stat-pill"><strong>${ideas.length}</strong><span>ürün</span></div><div class="product-stat-pill green"><strong>${ideas.filter(i => productStage(i) === "Geliştiriliyor").length}</strong><span>geliştiriliyor</span></div></div>
      </section>
      <section class="challenge-filterbar">
        <label class="search-box">${icon("search")}<input class="input" data-product-filter="search" value="${esc(state.filters.productSearch || "")}" placeholder="Ürün ara..." /></label>
        <select class="select" data-product-filter="stage">${["Tümü", "Geliştiriliyor", "Kuruluyor", "Fikir Aşaması"].map(v => `<option value="${esc(v)}" ${state.filters.productStage === v ? "selected" : ""}>Seviye: ${esc(v)}</option>`).join("")}</select>
        <select class="select" data-product-filter="category">${["Tümü", ...Array.from(new Set(state.ideas.map(i => i.marketCategory || "Fikir")))].map(v => `<option value="${esc(v)}" ${state.filters.productCategory === v ? "selected" : ""}>Kategori: ${esc(v)}</option>`).join("")}</select>
      </section>
      <section class="enhanced-product-list">
        ${ideas.map(idea => renderEnhancedProductRow(idea, userCanManage)).join("")}
      </section>
    </div>
  `;
}

function filteredAdvancedProducts() {
  const q = (state.filters.productSearch || "").trim().toLocaleLowerCase("tr-TR");
  return state.ideas.filter(idea => {
    const stage = productStage(idea);
    const text = [idea.title, idea.summary, idea.marketCategory, idea.area, stage].join(" ").toLocaleLowerCase("tr-TR");
    return (!q || text.includes(q))
      && (state.filters.productStage === "Tümü" || stage === state.filters.productStage)
      && (state.filters.productCategory === "Tümü" || (idea.marketCategory || "Fikir") === state.filters.productCategory);
  }).slice(0, 18);
}

function renderEnhancedProductRow(idea, userCanManage) {
  const stage = productStage(idea);
  const progress = productProgress(idea);
  return `
    <article class="enhanced-product-row">
      <div><span class="product-stage-badge" style="--stage-color:${productStageColor(stage)};">${esc(stage)}</span><h3>${esc(idea.title)}</h3><p>${esc(idea.summary)}</p></div>
      <div class="enhanced-product-meta"><span><strong>${idea.supporters || idea.credits || 0}</strong><small>oy</small></span><span><strong>${esc(idea.marketCategory || "Fikir")}</strong><small>kategori</small></span><span><strong>${progress}%</strong><small>seviye</small></span></div>
      <div class="product-progress-track"><div class="product-progress-fill" style="width:${progress}%;background:${productStageColor(stage)};"></div></div>
      <div class="field-row">${userCanManage ? `<button class="btn ghost slim-btn" data-action="manager-status" data-id="${esc(idea.id)}" data-status="pilot">${icon("settings")} Yönet</button>` : ""}<button class="btn primary slim-btn" data-action="open-idea" data-id="${esc(idea.id)}">${icon("external-link")} Detay</button></div>
    </article>
  `;
}

function renderTeams() {
  if (state.teamsView === "detail") return renderTeamDetail();
  if (state.teamsView === "create") return renderCreateTeam();
  return renderTeamsList();
}

function renderTeamsList() {
  const myTeams = state.teams.filter(isMyTeam);
  const allTeams = state.teams;

  const tab = state.teamsTab || "teams";
  const listings = (state.announcements || []).filter(a => a.missingRoles && a.missingRoles.length > 0);
  const openCount = state.teams.flatMap(t => t.roles.filter(r => !r.filled)).length;
  const productCount = state.ideas.filter(i => productLinkedTeam(i.id)).length;

  return `
    <div class="view-stack teams-page">

      <!-- Studio Hero -->
      <section class="studio-hero">
        <div class="studio-hero-left">
          <span class="panel-kicker">EKİP & ÜRÜN STÜDYOSU</span>
          <h2>Fikirden Ürüne,<br>Yalnız Değil.</h2>
          <p>Ekip kur, rol doldur, ürün geliştir — tüm iş akışı tek yerde.</p>
        </div>
        <div class="studio-hero-right">
          <div class="studio-stat"><strong>${state.teams.length}</strong><span>Aktif Ekip</span></div>
          <div class="studio-stat accent"><strong>${openCount}</strong><span>Açık Pozisyon</span></div>
          <div class="studio-stat green"><strong>${productCount}</strong><span>Geliştirilen Ürün</span></div>
          <div class="studio-stat amber"><strong>${listings.length}</strong><span>Takım İlanı</span></div>
          <button class="btn primary studio-cta" data-action="start-create-team">
            ${icon("plus")} Yeni Ekip Kur
          </button>
        </div>
      </section>

      <!-- Tab Bar -->
      <nav class="studio-tabs">
        <button class="studio-tab ${tab === "teams" ? "active" : ""}" data-action="set-teams-tab" data-tab="teams">
          ${icon("users-round")} Ekipler
          <span class="studio-tab-count">${state.teams.length}</span>
        </button>
        <button class="studio-tab ${tab === "products" ? "active" : ""}" data-action="set-teams-tab" data-tab="products">
          ${icon("package")} Ürünler
          <span class="studio-tab-count">${state.ideas.length}</span>
        </button>
        <button class="studio-tab ${tab === "listings" ? "active" : ""}" data-action="set-teams-tab" data-tab="listings">
          ${icon("megaphone")} Takım İlanları
          ${listings.length ? `<span class="studio-tab-count accent">${listings.length}</span>` : ""}
        </button>
      </nav>

      <!-- TAB: Ekipler -->
      ${tab === "teams" ? `
        ${renderOpenPositionsBanner()}
        ${myTeams.length ? `
          <section>
            <div class="teams-section-head"><span class="panel-kicker">Ekiplerim</span><strong>${myTeams.length} ekip</strong></div>
            <div class="teams-grid">${myTeams.map(t => renderTeamCard(t, true)).join("")}</div>
          </section>
        ` : ""}
        <section>
          <div class="teams-section-head"><span class="panel-kicker">Tüm Ekipler</span><strong>${allTeams.length} ekip</strong></div>
          <div class="teams-grid">${allTeams.map(t => renderTeamCard(t, false)).join("")}</div>
        </section>
      ` : ""}

      <!-- TAB: Ürünler -->
      ${tab === "products" ? renderProductsTabContent() : ""}

      <!-- TAB: Takım İlanları -->
      ${tab === "listings" ? `
        ${listings.length ? `
          <div class="recruitment-cards-grid">
            ${listings.map(ann => renderRecruitmentCard(ann)).join("")}
          </div>
        ` : `
          <div style="text-align:center;padding:60px 20px;color:var(--muted);">
            ${icon("megaphone")} <p style="margin-top:12px;">Henüz aktif takım ilanı yok.</p>
          </div>
        `}
      ` : ""}

    </div>
  `;
}

function renderProductsTabContent() {
  const ideas = state.ideas.slice(0, 18);
  const inDev = ideas.filter(i => productStage(i) === "Geliştiriliyor");
  const forming = ideas.filter(i => productStage(i) === "Kuruluyor");
  const conceptual = ideas.filter(i => productStage(i) === "Fikir Aşaması");
  const hiringIdeas = ideas.filter(i => productOpenRoles(i).length > 0);

  return `
    <!-- Hiring Banner -->
    ${hiringIdeas.length ? `
      <section class="products-hiring-banner">
        <div class="phb-head">
          <span class="phb-badge">${icon("zap")} Aktif İlanlar</span>
          <strong>${hiringIdeas.reduce((s,i)=>s+productOpenRoles(i).length,0)} açık pozisyon, ${hiringIdeas.length} üründe</strong>
        </div>
        <div class="phb-strip">
          ${hiringIdeas.flatMap(idea => productOpenRoles(idea).map(role => `
            <button class="phb-chip" data-action="open-idea" data-id="${esc(idea.id)}">
              ${icon(role.icon || "user-plus")}
              <span><strong>${esc(role.title)}</strong><small>${esc(idea.marketTicker)}</small></span>
              <em>Başvur</em>
            </button>
          `)).join("")}
        </div>
      </section>
    ` : ""}

    ${inDev.length ? `
      <section>
        <div class="products-section-head">
          <div class="products-stage-dot" style="background:#2997ff;"></div>
          <strong>Geliştiriliyor</strong><span>${inDev.length} ürün</span>
        </div>
        <div class="products-grid">${inDev.map(i => renderProductCard(i)).join("")}</div>
      </section>
    ` : ""}
    ${forming.length ? `
      <section>
        <div class="products-section-head">
          <div class="products-stage-dot" style="background:#f59e0b;"></div>
          <strong>Ekip Kuruluyor</strong><span>${forming.length} ürün</span>
        </div>
        <div class="products-grid">${forming.map(i => renderProductCard(i)).join("")}</div>
      </section>
    ` : ""}
    ${conceptual.slice(0,6).length ? `
      <section>
        <div class="products-section-head">
          <div class="products-stage-dot" style="background:#6e6e73;"></div>
          <strong>Fikir Aşaması</strong><span>${conceptual.length} fikir</span>
        </div>
        <div class="products-grid">${conceptual.slice(0,6).map(i => renderProductCard(i)).join("")}</div>
      </section>
    ` : ""}
  `;
}

function renderTeamCard(team, isMine) {
  const score = teamSynergyScore(team);
  const filled = team.roles.filter(r => r.filled);
  const open = team.roles.filter(r => !r.filled);
  const linkedIdea = state.ideas.find(i => i.id === team.ideaId);
  const members = filled.map(r => personById(r.userId)).filter(Boolean);

  return `
    <article class="team-card" data-action="open-team" data-id="${esc(team.id)}" style="cursor:pointer;">
      <div class="team-card-top">
        <div style="flex:1;min-width:0;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
            <span class="team-status-badge ${teamStatusClass(team.status)}">${teamStatusLabel(team.status)}</span>
            ${isMine ? `<span class="team-mine-badge">${icon("user-check")} Ekibim</span>` : ""}
          </div>
          <h3 class="team-card-name">${esc(team.name)}</h3>
          <p class="team-card-desc">${esc(team.description)}</p>
        </div>
        ${renderSynergyRing(score)}
      </div>

      <div class="team-role-slots">
        ${team.roles.map(role => `
          <span class="role-slot-pill ${role.filled ? "filled" : "open"}">
            ${icon(role.icon || "user")}
            <span>${esc(role.title)}</span>
            ${role.filled ? `${icon("check")}` : `<span class="open-label">Açık</span>`}
          </span>
        `).join("")}
      </div>

      <div class="team-card-footer">
        <div style="display:flex;align-items:center;gap:10px;">
          ${renderAvatarStack(filled.map(r => r.userId).filter(Boolean), 4)}
          <span style="font-size:12px;color:var(--muted);">${filled.length}/${team.roles.length} dolu</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          ${open.length ? `<span class="team-open-count">${icon("user-plus")} ${open.length} açık</span>` : ""}
          <span class="team-area-tag">${esc(team.area.split(" ")[0])}</span>
        </div>
      </div>

      ${linkedIdea ? `
        <div class="team-linked-idea">
          ${icon("link-2")} <span>Borsada: <strong>${esc(linkedIdea.marketTicker || linkedIdea.title.slice(0,30))}</strong></span>
        </div>
      ` : ""}
    </article>
  `;
}

function renderTeamDetail() {
  const team = state.teams.find(t => t.id === state.selectedTeamId);
  if (!team) return renderTeamsList();
  const score = teamSynergyScore(team);
  const linkedIdea = state.ideas.find(i => i.id === team.ideaId);
  const creator = personById(team.createdBy);
  const mine = isMyTeam(team);

  return `
    <div class="view-stack team-detail-page">
      <div class="team-detail-back">
        <button class="btn ghost" data-action="back-to-teams" style="display:flex;align-items:center;gap:6px;">
          ${icon("arrow-left")} Ekiplere Dön
        </button>
        <span class="team-status-badge ${teamStatusClass(team.status)}" style="margin-left:12px;">${teamStatusLabel(team.status)}</span>
        ${mine ? `<span class="team-mine-badge" style="margin-left:6px;">${icon("user-check")} Ekibim</span>` : ""}
      </div>

      <section class="team-detail-header">
        <div class="team-detail-title">
          <h2>${esc(team.name)}</h2>
          <p>${esc(team.description)}</p>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;">
            ${(team.tags || []).map(tag => `<span class="tag-pill">#${esc(tag)}</span>`).join("")}
          </div>
        </div>
        <div style="display:flex;gap:16px;align-items:start;">
          ${renderSynergyRing(score)}
          ${!mine ? `
            <button class="btn primary" data-action="join-team-request" data-id="${esc(team.id)}">
              ${icon("user-plus")} Katılım İste
            </button>
          ` : ""}
        </div>
      </section>

      <div class="team-detail-layout">
        <aside class="team-roster-panel">
          <div class="team-panel-head">
            ${icon("users-round")} <strong>Ekip Kadrosu</strong>
            <span style="margin-left:auto;font-size:12px;color:var(--muted);">${team.roles.filter(r=>r.filled).length}/${team.roles.length}</span>
          </div>
          <div class="team-roles-list">
            ${team.roles.map(role => renderRoleRow(team, role)).join("")}
          </div>
          ${mine ? `
            <button class="btn ghost" data-action="add-quick-role" data-team-id="${esc(team.id)}" style="width:100%;margin-top:10px;font-size:13px;">
              ${icon("plus")} Rol Ekle
            </button>
          ` : ""}

          ${linkedIdea ? `
            <div class="team-linked-idea-card">
              <div class="team-panel-head" style="margin-bottom:8px;">
                ${icon("trending-up")} <strong>Borsa Bağlantısı</strong>
              </div>
              <button class="btn ghost" data-action="open-idea" data-id="${esc(linkedIdea.id)}" style="width:100%;text-align:left;padding:10px;border-radius:10px;">
                <strong style="font-size:13px;display:block;">${esc(linkedIdea.marketTicker)}</strong>
                <span style="font-size:12px;color:var(--muted);">${esc(linkedIdea.title.slice(0,60))}...</span>
              </button>
            </div>
          ` : ""}

          <div class="team-meta-card">
            <div class="team-panel-head" style="margin-bottom:8px;">${icon("info")} <strong>Ekip Bilgisi</strong></div>
            <div style="font-size:12.5px;color:var(--ink-soft);display:flex;flex-direction:column;gap:6px;">
              <span>${icon("map-pin")} ${esc(team.area)}</span>
              <span>${icon("calendar")} Kuruldu: ${esc(team.createdAt)}</span>
              ${creator ? `<span>${icon("crown")} Kurucu: <strong>${esc(creator.name)}</strong></span>` : ""}
            </div>
          </div>
        </aside>

        <main class="team-chat-main">
          <div class="team-panel-head">
            ${icon("message-circle")} <strong>Ekip Sohbeti</strong>
            <span style="margin-left:auto;font-size:12px;color:var(--muted);">${(team.messages||[]).length} mesaj</span>
          </div>
          <div class="team-chat-thread" id="team-chat-thread">
            ${(team.messages || []).length ? team.messages.map(m => renderTeamMessage(m)).join("") : `
              <div class="team-chat-empty">
                ${icon("message-circle")}
                <strong>Henüz sohbet yok.</strong>
                <span>İlk mesajı sen at, ekibini harekete geçir!</span>
              </div>
            `}
          </div>
          <div class="team-chat-composer">
            <input class="input" placeholder="Ekibe mesaj yaz..." data-team-chat-draft value="${esc(state.teamChatDraft)}" />
            <button class="btn primary" data-action="send-team-message" data-id="${esc(team.id)}">
              ${icon("send")} Gönder
            </button>
          </div>
        </main>

        <aside class="team-stats-panel">
          <div class="team-synergy-card">
            <div class="team-panel-head" style="margin-bottom:12px;">${icon("zap")} <strong>Sinerji Analizi</strong></div>
            ${renderSynergyRadar(team)}
            <div class="synergy-breakdown">
              <span class="${score >= 75 ? "positive" : score >= 50 ? "warn" : "negative"}">
                ${score >= 75 ? "Güçlü sinerji" : score >= 50 ? "Gelişiyor" : "Roller eksik"}
              </span>
              <small>${team.roles.filter(r=>!r.filled).length > 0 ? `${team.roles.filter(r=>!r.filled).length} açık pozisyon var` : "Tüm roller dolu!"}</small>
            </div>
          </div>

          <div class="team-open-slots-card">
            <div class="team-panel-head" style="margin-bottom:10px;">${icon("user-plus")} <strong>Açık Pozisyonlar</strong></div>
            ${team.roles.filter(r => !r.filled).length ? team.roles.filter(r => !r.filled).map(role => `
              <div class="open-slot-item">
                ${icon(role.icon || "user")}
                <span>
                  <strong>${esc(role.title)}</strong>
                  <small>${(role.skills || []).join(", ") || "—"}</small>
                </span>
                ${mine ? `
                  <button class="btn ghost slim-btn" data-action="fill-team-role" data-team-id="${esc(team.id)}" data-role-id="${esc(role.id)}" style="font-size:12px;padding:4px 8px;">
                    ${icon("user-plus")} Ata
                  </button>
                ` : `
                  <button class="btn primary slim-btn" data-action="join-team-request" data-id="${esc(team.id)}" data-role-id="${esc(role.id)}" style="font-size:12px;padding:4px 8px;">
                    Başvur
                  </button>
                `}
              </div>
            `).join("") : `<p style="font-size:12px;color:var(--muted);text-align:center;">Tüm roller dolu! Ekip hazır.</p>`}
          </div>

          ${state.teamFillRoleId ? renderPersonPicker(team) : ""}
        </aside>
      </div>
    </div>
  `;
}

function renderRoleRow(team, role) {
  const person = role.filled ? personById(role.userId) : null;
  const mine = isMyTeam(team);
  return `
    <div class="team-role-row ${role.filled ? "filled" : "empty"}">
      <div class="role-row-icon">
        ${icon(role.icon || "user")}
      </div>
      <div class="role-row-body">
        <strong>${esc(role.title)}</strong>
        ${role.filled && person ? `
          <span class="role-member-line">
            ${avatar(person.name, "tiny", person.photo)}
            <span>${esc(person.name)}</span>
            <small style="color:var(--muted);">· ${esc(person.role)}</small>
          </span>
        ` : `
          <span style="font-size:11px;color:var(--muted);">${(role.skills||[]).join(" · ") || "Açık Pozisyon"}</span>
        `}
      </div>
      ${mine ? `
        <div class="role-row-actions">
          ${role.filled ? `
            <button class="btn ghost slim-btn" data-action="remove-role-member" data-team-id="${esc(team.id)}" data-role-id="${esc(role.id)}" style="font-size:11px;padding:3px 6px;color:var(--negative);">
              ${icon("x")}
            </button>
          ` : `
            <button class="btn primary slim-btn" data-action="fill-team-role" data-team-id="${esc(team.id)}" data-role-id="${esc(role.id)}" style="font-size:11px;padding:3px 8px;">
              ${icon("plus")} Ata
            </button>
          `}
        </div>
      ` : ""}
    </div>
  `;
}

function renderPersonPicker(team) {
  const role = team.roles.find(r => r.id === state.teamFillRoleId);
  if (!role) return "";
  const usedIds = team.roles.filter(r => r.filled && r.id !== role.id).map(r => r.userId);
  const candidates = peopleDirectory.filter(p => !usedIds.includes(p.id)).slice(0, 12);
  return `
    <div class="person-picker-overlay">
      <div class="person-picker-head">
        <strong>${esc(role.title)} için kişi seç</strong>
        <button data-action="close-person-picker" style="background:none;border:none;cursor:pointer;color:var(--muted);">${icon("x")}</button>
      </div>
      <div class="person-picker-grid">
        ${candidates.map(person => {
          const company = companyById(person.companyId);
          return `
            <button class="person-picker-item" data-action="assign-person-to-role" data-team-id="${esc(team.id)}" data-role-id="${esc(role.id)}" data-user-id="${esc(person.id)}">
              ${avatar(person.name, "small", person.photo)}
              <span>
                <strong>${esc(person.name)}</strong>
                <small>${esc(person.role)} · ${esc(company.shortName)}</small>
              </span>
            </button>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function renderSynergyRadar(team) {
  const roles = team.roles || [];
  const hasPM    = roles.some(r => r.filled && /yönetici|pm|sahibi|lider|lead/i.test(r.title));
  const hasEng   = roles.some(r => r.filled && /mühendis|geliştirici|backend|frontend|mlops|yazılım/i.test(r.title));
  const hasDesign= roles.some(r => r.filled && /designer|ux|ui|tasarım/i.test(r.title));
  const hasData  = roles.some(r => r.filled && /veri|data|analisti|bilimci/i.test(r.title));
  const hasLegal = roles.some(r => r.filled && /compliance|hukuk|etik|risk/i.test(r.title));
  const vals = [hasPM, hasEng, hasDesign, hasData, hasLegal].map(v => v ? 1 : 0.2);
  const labels = ["Strateji", "Teknik", "Tasarım", "Veri", "Uyum"];
  const cx = 70, cy = 70, r = 48;
  const n = 5;
  const pts = vals.map((v, i) => {
    const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
    return { x: cx + v * r * Math.cos(angle), y: cy + v * r * Math.sin(angle) };
  });
  const gridPts = Array.from({length: n}, (_, i) => {
    const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(" ");
  const polyPts = pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const labelPts = Array.from({length: n}, (_, i) => {
    const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
    return { x: cx + (r+14) * Math.cos(angle), y: cy + (r+14) * Math.sin(angle), label: labels[i] };
  });
  return `
    <div class="synergy-radar-wrap">
      <svg width="140" height="140" viewBox="0 0 140 140">
        <polygon points="${gridPts}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
        <polygon points="${pts.map(p=>`${(cx+(p.x-cx)*0.5).toFixed(1)},${(cy+(p.y-cy)*0.5).toFixed(1)}`).join(" ")}" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
        ${Array.from({length:n},(_,i)=>`<line x1="${cx}" y1="${cy}" x2="${cx + r * Math.cos((i/n)*2*Math.PI - Math.PI/2)}" y2="${cy + r * Math.sin((i/n)*2*Math.PI - Math.PI/2)}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>`).join("")}
        <polygon points="${polyPts}" fill="rgba(var(--primary-rgb),0.25)" stroke="var(--primary)" stroke-width="1.5"/>
        ${labelPts.map(l => `<text x="${l.x.toFixed(1)}" y="${l.y.toFixed(1)}" text-anchor="middle" dominant-baseline="middle" font-size="9" fill="var(--muted)">${esc(l.label)}</text>`).join("")}
      </svg>
    </div>
  `;
}

function renderTeamMessage(msg) {
  const user = currentUser();
  const isOwn = msg.own || msg.userId === user.id;
  const sender = isOwn ? user : personById(msg.userId);
  const name = sender?.name || "Ekip Üyesi";
  const photo = sender?.photo || sender?.avatarUrl || "";
  return `
    <div class="hub-message ${isOwn ? "own" : ""}">
      ${isOwn ? "" : avatar(name, "small", photo)}
      <div class="hub-message-bubble">
        <span><strong>${esc(name)}</strong><small>${esc(msg.time)}</small></span>
        <p>${esc(msg.body)}</p>
      </div>
      ${isOwn ? avatar(name, "small", photo) : ""}
    </div>
  `;
}

function renderCreateTeam() {
  const step = state.teamCreateStep;
  const draft = state.teamDraft;
  return `
    <div class="view-stack create-team-page">
      <button class="btn ghost" data-action="back-to-teams" style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
        ${icon("arrow-left")} Ekiplere Dön
      </button>

      <section class="create-team-card">
        <div class="create-team-header">
          <span class="panel-kicker">YENİ EKİP</span>
          <h2>Ekibini Kur</h2>
          <p>Sadece 3 adımda ekibini oluştur, rolleri belirle, üyeleri ata.</p>
        </div>

        <div class="wizard-step-bar">
          ${["Temel Bilgi", "Roller", "Üyeler"].map((label, i) => `
            <div class="wizard-step ${i === step ? "active" : i < step ? "done" : ""}">
              <div class="wizard-step-dot">${i < step ? icon("check") : `<span>${i+1}</span>`}</div>
              <span>${label}</span>
            </div>
            ${i < 2 ? `<div class="wizard-step-line ${i < step ? "done" : ""}"></div>` : ""}
          `).join("")}
        </div>

        ${step === 0 ? `
          <div class="create-step-body">
            <label class="field">
              <span>Ekip Adı *</span>
              <input class="input" placeholder="Örn: FinTech Hızlanma Ekibi" data-team-draft-name value="${esc(draft.name)}" />
            </label>
            <label class="field">
              <span>Ekip Amacı / Açıklama *</span>
              <textarea class="input" rows="3" placeholder="Ekibinizin hedefi, odak alanı ve çözeceği problem..." data-team-draft-desc>${esc(draft.description)}</textarea>
            </label>
            <label class="field">
              <span>Alan</span>
              <select class="select" data-team-draft-area>
                ${borsaAreas.map(a => `<option value="${esc(a)}" ${draft.area === a ? "selected" : ""}>${esc(a)}</option>`).join("")}
              </select>
            </label>
            <label class="field">
              <span>Borsa Fikrine Bağla (isteğe bağlı)</span>
              <select class="select" data-team-draft-idea>
                <option value="">— Seçme —</option>
                ${state.ideas.slice(0, 20).map(idea => `<option value="${esc(idea.id)}" ${draft.ideaId === idea.id ? "selected" : ""}>${esc(idea.marketTicker)} · ${esc(idea.title.slice(0,40))}</option>`).join("")}
              </select>
            </label>
          </div>
          <div class="wizard-nav">
            <span></span>
            <button class="btn primary" data-action="team-create-next" ${!draft.name.trim() || !draft.description.trim() ? "disabled" : ""}>
              İleri: Roller ${icon("arrow-right")}
            </button>
          </div>
        ` : ""}

        ${step === 1 ? `
          <div class="create-step-body">
            <div class="teams-section-head" style="margin-bottom:14px;">
              <span class="panel-kicker">Şablon Seç</span>
              <small style="color:var(--muted);">veya rolleri aşağıdan özelleştir</small>
            </div>
            <div class="template-grid">
              ${teamRoleTemplates.map(tmpl => `
                <button class="template-card" data-action="use-team-template" data-template="${esc(tmpl.id)}">
                  ${icon(tmpl.icon)}
                  <strong>${esc(tmpl.label)}</strong>
                  <small>${esc(tmpl.desc)}</small>
                  <span>${tmpl.roles.length || "?"} Rol</span>
                </button>
              `).join("")}
            </div>
            <div class="create-roles-list">
              <div class="teams-section-head" style="margin:14px 0 10px;">
                <strong>Roller</strong>
                <button class="btn ghost slim-btn" data-action="add-draft-role" style="font-size:12px;">${icon("plus")} Rol Ekle</button>
              </div>
              ${(draft.roles || []).map((role, idx) => `
                <div class="draft-role-row">
                  <span class="role-row-icon">${icon(role.icon || "user")}</span>
                  <input class="input" value="${esc(role.title)}" data-draft-role-title="${idx}" placeholder="Rol adı" style="flex:1;" />
                  <button data-action="remove-draft-role" data-idx="${idx}" style="background:none;border:none;color:var(--muted);cursor:pointer;padding:4px;">${icon("trash-2")}</button>
                </div>
              `).join("")}
            </div>
          </div>
          <div class="wizard-nav">
            <button class="btn ghost" data-action="team-create-back">${icon("arrow-left")} Geri</button>
            <button class="btn primary" data-action="team-create-next" ${draft.roles.length === 0 ? "disabled" : ""}>
              İleri: Üyeler ${icon("arrow-right")}
            </button>
          </div>
        ` : ""}

        ${step === 2 ? `
          <div class="create-step-body">
            <p style="font-size:13px;color:var(--muted);margin-bottom:16px;">Her role bir üye atayabilirsin. İstersen şimdi boş bırakıp sonra doldurabilirsin.</p>
            <div class="create-roles-assign-list">
              ${(draft.roles || []).map((role, idx) => {
                const person = role.userId ? personById(role.userId) : null;
                return `
                  <div class="draft-assign-row">
                    <div class="role-row-icon">${icon(role.icon || "user")}</div>
                    <div style="flex:1;min-width:0;">
                      <strong style="font-size:13px;">${esc(role.title)}</strong>
                      ${person ? `
                        <div style="display:flex;align-items:center;gap:6px;margin-top:4px;">
                          ${avatar(person.name, "tiny", person.photo)}
                          <span style="font-size:12px;">${esc(person.name)}</span>
                          <button data-action="unassign-draft-role" data-idx="${idx}" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:11px;">${icon("x")}</button>
                        </div>
                      ` : `<span style="font-size:11px;color:var(--muted);">Atanmadı</span>`}
                    </div>
                    <select class="select" data-assign-role="${idx}" style="font-size:12px;width:160px;">
                      <option value="">Kişi seç...</option>
                      ${peopleDirectory.slice(0, 20).map(p => `<option value="${esc(p.id)}" ${role.userId === p.id ? "selected" : ""}>${esc(p.name)} · ${esc(p.role.slice(0,20))}</option>`).join("")}
                    </select>
                  </div>
                `;
              }).join("")}
            </div>
          </div>
          <div class="wizard-nav">
            <button class="btn ghost" data-action="team-create-back">${icon("arrow-left")} Geri</button>
            <button class="btn primary" data-action="team-create-submit">
              ${icon("check")} Ekibi Kur
            </button>
          </div>
        ` : ""}
      </section>
    </div>
  `;
}

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────

function productLinkedTeam(ideaId) {
  return state.teams.find(t => t.ideaId === ideaId) || null;
}

function productStage(idea) {
  const team = productLinkedTeam(idea.id);
  if (!team) return "Fikir Aşaması";
  if (team.status === "active") return "Geliştiriliyor";
  return "Kuruluyor";
}

function productStageColor(stage) {
  return {
    "Geliştiriliyor": "#2997ff",
    "Kuruluyor": "#f59e0b",
    "Pilot": "#a855f7",
    "Fikir Aşaması": "#6e6e73"
  }[stage] || "#6e6e73";
}

function productProgress(idea) {
  const stage = productStage(idea);
  if (stage === "Geliştiriliyor") return Math.min(25 + (idea.supporters || 0) * 3, 88);
  if (stage === "Kuruluyor") return 12;
  return 5;
}

function productOpenRoles(idea) {
  const team = productLinkedTeam(idea.id);
  if (!team) return [];
  return team.roles.filter(r => !r.filled);
}

function renderProductProgressBar(pct, color) {
  return `
    <div class="product-progress-track">
      <div class="product-progress-fill" style="width:${pct}%;background:${color};"></div>
    </div>
  `;
}

function renderProducts() {
  const ideas = state.ideas.slice(0, 18);
  const withTeam = ideas.filter(i => productLinkedTeam(i.id));
  const hiring = ideas.filter(i => productOpenRoles(i).length > 0);
  const inDev = ideas.filter(i => productStage(i) === "Geliştiriliyor");
  const forming = ideas.filter(i => productStage(i) === "Kuruluyor");
  const conceptual = ideas.filter(i => productStage(i) === "Fikir Aşaması");

  return `
    <div class="view-stack products-page">

      <!-- Hero -->
      <section class="products-hero">
        <div class="products-hero-text">
          <span class="panel-kicker">ÜRÜN STÜDYOSU</span>
          <h2>Geliştirilen Ürünler</h2>
          <p>Fikirden ürüne giden yolculuk. Ekip ihtiyaçlarını gör, açık pozisyonlara başvur.</p>
        </div>
        <div class="products-hero-stats">
          <div class="product-stat-pill">
            <strong>${inDev.length}</strong>
            <span>Geliştiriliyor</span>
          </div>
          <div class="product-stat-pill amber">
            <strong>${forming.length}</strong>
            <span>Kuruluyor</span>
          </div>
          <div class="product-stat-pill green">
            <strong>${hiring.length}</strong>
            <span>Eleman Aranıyor</span>
          </div>
          <div class="product-stat-pill muted">
            <strong>${conceptual.length}</strong>
            <span>Fikir Aşaması</span>
          </div>
        </div>
      </section>

      <!-- Hiring Banner -->
      ${hiring.length ? `
        <section class="products-hiring-banner">
          <div class="phb-head">
            <span class="phb-badge">${icon("zap")} Aktif İlanlar</span>
            <strong>${hiring.reduce((s,i)=>s+productOpenRoles(i).length,0)} açık pozisyon, ${hiring.length} üründe</strong>
          </div>
          <div class="phb-strip">
            ${hiring.flatMap(idea => productOpenRoles(idea).map(role => `
              <button class="phb-chip" data-action="open-idea" data-id="${esc(idea.id)}">
                ${icon(role.icon || "user-plus")}
                <span>
                  <strong>${esc(role.title)}</strong>
                  <small>${esc(idea.marketTicker)}</small>
                </span>
                <em>Başvur</em>
              </button>
            `)).join("")}
          </div>
        </section>
      ` : ""}

      <!-- In Development -->
      ${inDev.length ? `
        <section>
          <div class="products-section-head">
            <div class="products-stage-dot" style="background:#2997ff;"></div>
            <strong>Geliştiriliyor</strong>
            <span>${inDev.length} ürün</span>
          </div>
          <div class="products-grid">
            ${inDev.map(idea => renderProductCard(idea)).join("")}
          </div>
        </section>
      ` : ""}

      <!-- Forming -->
      ${forming.length ? `
        <section>
          <div class="products-section-head">
            <div class="products-stage-dot" style="background:#f59e0b;"></div>
            <strong>Ekip Kuruluyor</strong>
            <span>${forming.length} ürün</span>
          </div>
          <div class="products-grid">
            ${forming.map(idea => renderProductCard(idea)).join("")}
          </div>
        </section>
      ` : ""}

      <!-- Conceptual -->
      ${conceptual.slice(0,6).length ? `
        <section>
          <div class="products-section-head">
            <div class="products-stage-dot" style="background:#6e6e73;"></div>
            <strong>Fikir Aşaması</strong>
            <span>${conceptual.length} fikir</span>
          </div>
          <div class="products-grid">
            ${conceptual.slice(0,6).map(idea => renderProductCard(idea)).join("")}
          </div>
        </section>
      ` : ""}

    </div>
  `;
}

function renderProductCard(idea) {
  const stage = productStage(idea);
  const color = productStageColor(stage);
  const progress = productProgress(idea);
  const team = productLinkedTeam(idea.id);
  const openRoles = productOpenRoles(idea);
  const company = companyById(idea.companyId);
  const author = personById(idea.authorId) || peopleDirectory[0];
  const filledMembers = team ? team.roles.filter(r => r.filled).map(r => r.userId).filter(Boolean) : [];
  const change = Number(idea.marketChange || 0);

  return `
    <article class="product-card">
      <div class="product-card-top">
        <div class="product-card-company">
          ${companyLogo(company, "mini")}
          <span class="product-stage-badge" style="--stage-color:${color};">${esc(stage)}</span>
        </div>
        <div class="product-card-ticker">
          <strong>${esc(idea.marketTicker)}</strong>
          <span class="${change >= 0 ? "positive" : "negative"}">${change >= 0 ? "+" : ""}${change.toFixed(1)}%</span>
        </div>
      </div>

      <h3 class="product-card-title">${esc(idea.title)}</h3>
      <p class="product-card-summary">${esc(idea.summary)}</p>

      <div class="product-card-progress">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span style="font-size:11.5px;color:var(--muted);font-weight:500;">İlerleme</span>
          <span style="font-size:11.5px;color:${color};font-weight:700;">${progress}%</span>
        </div>
        ${renderProductProgressBar(progress, color)}
      </div>

      ${openRoles.length > 0 ? `
        <div class="product-hiring-section">
          <div class="product-hiring-head">
            ${icon("user-plus")} <strong>Ekip Arıyor</strong>
            <span>${openRoles.length} pozisyon</span>
          </div>
          <div class="product-open-roles">
            ${openRoles.map(role => `
              <span class="product-role-chip">
                ${icon(role.icon || "user")} ${esc(role.title)}
              </span>
            `).join("")}
          </div>
          ${team ? `
            <button class="product-apply-btn" data-action="open-team" data-id="${esc(team.id)}">
              ${icon("arrow-right")} Ekibe Katıl
            </button>
          ` : ""}
        </div>
      ` : team ? `
        <div class="product-team-full">
          ${icon("check-circle-2")} <span>Ekip tamamlandı</span>
          ${renderAvatarStack(filledMembers, 4)}
        </div>
      ` : `
        <button class="product-start-team-btn" data-action="start-create-team">
          ${icon("users-round")} Bu fikir için ekip kur
        </button>
      `}

      <div class="product-card-footer">
        <button class="product-card-author" data-action="view-profile" data-user-id="${esc(author.id)}">
          ${avatar(author.name, "tiny", author.photo)}
          <span>${esc(author.name)}</span>
        </button>
        <div style="display:flex;gap:8px;align-items:center;">
          <span class="product-area-chip">${esc((idea.area || "Diğer").split(" ")[0])}</span>
          <button class="btn ghost slim-btn" data-action="open-idea" data-id="${esc(idea.id)}" style="font-size:12px;padding:4px 10px;">
            ${icon("external-link")} Detay
          </button>
        </div>
      </div>
    </article>
  `;
}

// ─── END PRODUCTS ──────────────────────────────────────────────────────────────

// ─── END TEAMS ────────────────────────────────────────────────────────────────

function renderHubMessage(message) {
  const user = message.own ? currentUser() : personById(message.userId);
  const name = message.own ? currentUser().name : (user?.name || message.user || "NEW IDEA EXCHANGE");
  const image = message.own ? currentUser().avatarUrl : user?.photo;
  return `
    <div class="hub-message ${message.own ? "own" : ""}">
      ${message.own ? "" : avatar(name, "small", image)}
      <div class="hub-message-bubble">
        <span><strong>${esc(name)}</strong><small>${esc(message.time)}</small></span>
        <p>${esc(message.body)}</p>
        ${renderHubMessageRichContent(message)}
      </div>
      ${message.own ? avatar(name, "small", image) : ""}
    </div>
  `;
}

function renderHubMessageRichContent(message) {
  if (message.poll) {
    return renderPollOptions(message.poll, "message", message.id || message.time || message.body);
  }
  if (message.imageUrl) {
    return `
      <figure class="hub-message-media">
        <img src="${esc(message.imageUrl)}" alt="${esc(message.imageAlt || "Paylaşılan görsel")}" loading="lazy" />
        ${message.imageCaption ? `<figcaption>${esc(message.imageCaption)}</figcaption>` : ""}
      </figure>
    `;
  }
  if (message.link) {
    return `
      <a class="rich-link-preview" href="${esc(message.link.url)}" target="_blank" rel="noreferrer">
        <strong>${esc(message.link.title)}</strong>
        <span>${esc(message.link.description || message.link.url)}</span>
      </a>
    `;
  }
  if (message.file) {
    const meta = bundleMeta(message.file.name);
    return `
      <button class="rich-file-preview" data-action="open-file-inspector" data-file-name="${esc(message.file.name)}">
        ${icon(meta.icon)}
        <span>
          <strong>${esc(message.file.name)}</strong>
          <small>${esc(message.file.size || meta.label)}</small>
        </span>
      </button>
    `;
  }
  return "";
}

function renderChat() {
  const selected = channels.find(channel => channel.id === state.selectedChannelId) || channels[0];
  return `
    <div class="view-stack">
      <section class="chat-shell">
        <aside class="channel-list">
          ${channels.map(channel => `
            <button class="channel-button ${channel.id === selected.id ? "active" : ""}" data-action="select-channel" data-id="${esc(channel.id)}">
              <strong># ${esc(channel.name)}</strong>
              <span>${esc(channel.description)}</span>
            </button>
          `).join("")}
        </aside>
        <div class="chat-main">
          <header class="chat-header">
            <h2 style="margin: 0; color: var(--ink);"># ${esc(selected.name)}</h2>
            <p class="muted" style="margin: 4px 0 0;">${esc(selected.description)}</p>
          </header>
          <div class="chat-messages">
            ${selected.messages.map(message => `
              <div class="message ${message.own ? "own" : ""}">
                ${message.own ? "" : avatar(message.user, "small")}
                <div class="message-bubble">
                  <strong>${esc(message.user)}</strong>
                  <span>${esc(message.time)}</span>
                  <p>${esc(message.body)}</p>
                </div>
                ${message.own ? avatar(currentUser().name, "small") : ""}
              </div>
            `).join("")}
          </div>
          <div class="chat-composer">
            <input class="input" data-chat-draft value="${esc(state.chatDraft)}" placeholder="Mesaj yaz..." />
            <button class="btn primary" data-action="send-chat">${icon("send")} Gönder</button>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderChallenges() {
  const visible = filteredChallenges();
  const activeCount = challenges.filter(item => item.status === "Aktif").length;
  const totalReward = challenges.reduce((sum, item) => sum + (item.reward.includes("100.000") ? 100000 : item.reward.includes("75.000") ? 75000 : item.reward.includes("50.000") ? 50000 : 25000), 0);
  const sectors = ["Tümü", ...Array.from(new Set(challenges.map(item => item.sector)))];
  const rewardTypes = ["Tümü", ...Array.from(new Set(challenges.map(item => item.rewardType)))];
  return `
    <div class="view-stack challenge-page">
      <section class="challenge-hero">
        <div>
          <span class="panel-kicker">Yarışmalar</span>
          <h2>Çözüm bul, ödül kazan, görünür ol.</h2>
          <p>Sektör bazlı çözüm yarışmaları; terfi görüşmesi, nakit ödül, tablet/laptop hediyeleri ve pilot bütçeleriyle desteklenir.</p>
        </div>
        <div class="challenge-hero-metrics">
          <span><strong>${activeCount}</strong> aktif yarışma</span>
          <span><strong>${formatCurrency(totalReward)}</strong> ödül havuzu</span>
          <span><strong>${challenges.reduce((sum, item) => sum + item.participants, 0)}</strong> katılımcı</span>
        </div>
        <button class="btn primary" data-action="create-challenge">${icon("plus")} Yarışma aç</button>
      </section>

      <section class="challenge-filterbar">
        <label class="search-box">
          ${icon("search")}
          <input class="input" placeholder="Yarışma, sektör veya ödül ara..." data-challenge-filter="search" value="${esc(state.filters.challengeSearch || "")}" />
        </label>
        <select class="select" data-challenge-filter="sector" aria-label="Sektör filtresi">
          ${sectors.map(value => `<option value="${esc(value)}" ${state.filters.challengeSector === value ? "selected" : ""}>Sektör: ${esc(value)}</option>`).join("")}
        </select>
        <select class="select" data-challenge-filter="status" aria-label="Durum filtresi">
          ${["Tümü", "Aktif", "Yakında", "Final"].map(value => `<option value="${esc(value)}" ${state.filters.challengeStatus === value ? "selected" : ""}>Durum: ${esc(value)}</option>`).join("")}
        </select>
        <select class="select" data-challenge-filter="reward" aria-label="Ödül filtresi">
          ${rewardTypes.map(value => `<option value="${esc(value)}" ${state.filters.challengeReward === value ? "selected" : ""}>Ödül: ${esc(value)}</option>`).join("")}
        </select>
        <button class="btn ghost slim-btn" data-action="clear-challenge-filters">${icon("rotate-ccw")} Temizle</button>
      </section>

      <section class="challenge-grid">
        ${visible.map((challenge, index) => renderChallengeCard(challenge, index)).join("") || `
          <article class="empty-state">
            ${icon("trophy")}
            <strong>Uygun yarışma bulunamadı.</strong>
            <span>Filtreleri temizleyip tekrar deneyebilirsin.</span>
          </article>
        `}
      </section>
    </div>
  `;
}

function filteredChallenges() {
  const q = (state.filters.challengeSearch || "").trim().toLocaleLowerCase("tr-TR");
  return challenges.filter(item => {
    const text = [item.title, item.theme, item.sector, item.reward, item.sponsor, item.brief].join(" ").toLocaleLowerCase("tr-TR");
    const searchMatch = !q || text.includes(q);
    const sectorMatch = !state.filters.challengeSector || state.filters.challengeSector === "Tümü" || item.sector === state.filters.challengeSector;
    const statusMatch = !state.filters.challengeStatus || state.filters.challengeStatus === "Tümü" || item.status === state.filters.challengeStatus;
    const rewardMatch = !state.filters.challengeReward || state.filters.challengeReward === "Tümü" || item.rewardType === state.filters.challengeReward;
    return searchMatch && sectorMatch && statusMatch && rewardMatch;
  });
}

function renderChallengeCard(challenge, index) {
  const followed = (state.followedChallenges || []).includes(challenge.id);
  const image = remoteImages.challengeVisuals[index % remoteImages.challengeVisuals.length];
  const statusClass = challenge.status === "Aktif" ? "new" : challenge.status === "Final" ? "pilot" : "";
  return `
    <article class="challenge-card refined-challenge ${esc(challenge.accent || "blue")}">
      <div class="challenge-cover">
        <img src="${esc(image)}" alt="" loading="lazy" referrerpolicy="no-referrer" />
        <span class="status-badge ${statusClass}">${esc(challenge.status)}</span>
      </div>
      <div class="challenge-card-body">
        <div class="challenge-title-row">
          <span class="challenge-prize-icon">${icon(challenge.prizeIcon || "gift")}</span>
          <div>
            <small>${esc(challenge.sector)} · ${esc(challenge.theme)}</small>
            <h3>${esc(challenge.title)}</h3>
          </div>
        </div>
        <p>${esc(challenge.brief)}</p>
        <div class="challenge-reward">
          <span>${icon("gift")}</span>
          <strong>${esc(challenge.reward)}</strong>
        </div>
        <div class="challenge-chip-row">
          ${(challenge.shortlist || []).map(item => `<span>${esc(item)}</span>`).join("")}
        </div>
        <div class="challenge-meta-grid">
          <span><strong>${esc(challenge.deadline)}</strong><small>${esc(challenge.date)}</small></span>
          <span><strong>${challenge.ideas}</strong><small>fikir</small></span>
          <span><strong>${challenge.participants}</strong><small>katılımcı</small></span>
        </div>
        <div class="challenge-footer">
          <small>${esc(challenge.sponsor)}</small>
          <div>
            <button class="btn ghost slim-btn" data-action="follow-challenge" data-id="${esc(challenge.id)}">${icon(followed ? "check" : "bookmark")} ${followed ? "Takipte" : "Takip et"}</button>
            <button class="btn primary slim-btn" data-action="join-challenge" data-id="${esc(challenge.id)}">${icon("send")} Katıl</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderImplemented() {
  const done = state.ideas.filter(idea => idea.status === "done");
  const stories = [
    ...done,
    {
      title: "Mağaza yöneticileri için günlük operasyon kontrol listesi",
      summary: "Kapanış, stok ve müşteri deneyimi kontrolleri tek ekranda toplandı.",
      department: "Mağaza Operasyonları",
      aiScore: 84
    },
    {
      title: "Şehir bazlı çalışan deneyimi geri bildirim kanalı",
      summary: "Lokasyon özelinde anonim geri bildirimler İK aksiyon planına bağlandı.",
      department: "İnsan Kaynakları",
      aiScore: 81
    }
  ];

  return `
    <div class="view-stack">
      <section class="hero-band">
        <div>
          <h2>Hayata Geçenler</h2>
          <p>Uygulanan fikirlerin kısa hikayeleri ve ölçülebilir sonuçları.</p>
        </div>
        <span class="status-badge done">${icon("badge-check")} ${stories.length} başarı hikayesi</span>
      </section>
      <section class="card-grid">
        ${stories.map((story, index) => `
          <article class="story-card">
            <img class="story-media" src="${esc(story.visualUrl || remoteImages.storyVisuals[index % remoteImages.storyVisuals.length])}" alt="" loading="lazy" referrerpolicy="no-referrer" />
            <div class="tag-row">
              <span class="status-badge done">Uygulandı</span>
              <span class="tag">${esc(story.department)}</span>
            </div>
            <h3>${esc(story.title)}</h3>
            <p>${esc(story.summary)}</p>
            <div class="story-metrics">
              <span><strong>${index === 0 ? "%18" : "%12"}</strong> Süre kazanımı</span>
              <span><strong>${index === 0 ? "4.6" : "4.3"}</strong> Memnuniyet</span>
              <span><strong>${story.aiScore}</strong> AI skor</span>
            </div>
          </article>
        `).join("")}
      </section>
    </div>
  `;
}

function renderAnalytics() {
  const departmentCounts = ["Operasyon", "Müşteri Deneyimi", "Yazılım Geliştirme", "İnsan Kaynakları", "Veri Analitiği"].map(dept => ({
    label: dept,
    value: state.ideas.filter(idea => idea.department === dept).length * 18 + 22
  }));
  return `
    <div class="view-stack">
      <section class="profile-bundle-actions">
        <button type="button" class="btn primary" data-action="open-market-composer" data-context="profile">${icon("file-plus-2")} Bundle ekle</button>
        <button type="button" class="btn ghost" data-page="newIdea">${icon("lightbulb")} Fikir / şikayet ekle</button>
      </section>

      ${state.marketComposerContext === "profile" ? renderMarketComposer("profile") : ""}
      ${renderProfileBundleShelf(myIdeas)}

      <section class="metrics-grid">
        ${metricCard("lightbulb", "Toplam fikir", "428", "Kurum genelindeki aktif fikir havuzu.", "+16%", "navy")}
        ${metricCard("thumbs-up", "Destek kredisi", "7.240", "Bu ay kullanılan oy kredisi.", "+22%", "green")}
        ${metricCard("clipboard-check", "İncelemede", "54", "Yönetici aksiyon kuyruğu.", "+8", "amber")}
        ${metricCard("rocket", "Pilot", "19", "Pilot uygulama adayı.", "+5", "purple")}
        ${metricCard("badge-check", "Uygulandı", "31", "Hayata geçen fikir.", "+3", "green")}
      </section>
      <section class="analytics-grid">
        <article class="analytics-card">
          <h3>Departmana Göre Fikirler</h3>
          <div class="bar-list" style="margin-top: 16px;">
            ${departmentCounts.map(row => `
              <div class="bar-row">
                <span>${esc(row.label)}</span>
                <span class="bar-track"><span class="bar-fill" style="width: ${Math.min(row.value, 100)}%"></span></span>
                <strong>${row.value}</strong>
              </div>
            `).join("")}
          </div>
        </article>
        <article class="analytics-card">
          <h3>Etki / Maliyet Matrisi</h3>
          <div class="matrix" style="margin-top: 16px;">
            <span class="matrix-label top">Yüksek etki / düşük maliyet</span>
            <span class="matrix-label bottom">Düşük etki / yüksek maliyet</span>
            ${state.ideas.slice(0, 7).map((idea, index) => {
              const x = idea.estimatedCost.includes("Düşük") ? 28 : idea.estimatedCost.includes("Orta") ? 55 : 78;
              const y = idea.estimatedImpact.includes("Çok") ? 82 : idea.estimatedImpact.includes("Yüksek") ? 70 : 48;
              const colors = ["#155eef", "#12805c", "#c87913", "#7b4ce4", "#0b1f3a"];
              return `<button class="matrix-point" title="${esc(idea.title)}" data-action="open-idea" data-id="${esc(idea.id)}" style="left: ${x + index % 2 * 4}%; bottom: ${y - index % 3 * 5}%; background: ${colors[index % colors.length]}">${index + 1}</button>`;
            }).join("")}
          </div>
        </article>
      </section>
    </div>
  `;
}

function renderNotifications() {
  const tabs = ["Tümü", "Okunmamışlar", "Fikir", "Chat", "Yarışma", "Yönetici"];
  const visible = state.notifications.filter(item => state.notificationTab === "Tümü" || (state.notificationTab === "Okunmamışlar" ? item.unread : item.type === state.notificationTab));
  const hasUnread = state.notifications.some(n => n.unread);
  return `
    <div class="view-stack notifications-view-stack">
      <section class="content-panel notifications-toolbar-panel">
        <div class="filter-row notifications-toolbar-row">
          <div class="notification-tabs-segmented">
            ${tabs.map(tab => `<button class="btn ${state.notificationTab === tab ? "primary" : "ghost"}" data-action="notification-tab" data-tab="${esc(tab)}">${esc(tab)}</button>`).join("")}
          </div>
          ${hasUnread ? `
            <button class="btn ghost btn-mark-all" data-action="mark-all-read">
              ${icon("check-check")} Tümünü Okundu İşaretle
            </button>
          ` : ""}
        </div>
      </section>
      <section class="notification-list">
        ${visible.length === 0 ? `
          <div class="no-notifications-placeholder">
            ${icon("bell-off")}
            <p>Seçilen filtrede bildirim bulunamadı.</p>
          </div>
        ` : visible.map(item => `
          <article class="notification-row ${item.unread ? "unread" : ""}" data-action="read-notification" data-id="${esc(item.id)}">
            <span class="notification-icon">${icon(item.type === "AI" ? "sparkles" : item.type === "Chat" ? "message-circle" : item.type === "Yarışma" ? "trophy" : "bell")}</span>
            <div class="notification-text">
              <strong>${esc(item.title)}</strong>
              <p class="muted">${esc(item.body)}</p>
            </div>
            <span class="status-badge ${item.unread ? "new" : ""}">${esc(item.unread ? "Okunmamış" : item.type)}</span>
          </article>
        `).join("")}
      </section>
    </div>
  `;
}

function renderProfile() {
  const user = currentUser();
  const myIdeas = state.ideas.filter(idea => idea.authorId === user.id);
  return `
    <div class="view-stack">
      <section class="profile-head">
        ${avatar(user.name, "large")}
        <div>
          <h2>${esc(user.name)}</h2>
          <p class="muted">${esc(user.role)} · ${esc(user.department)} · ${esc(user.location)}</p>
          <div class="badge-row" style="margin-top: 10px;">
            ${user.badges.map(badge => `<span class="badge">${icon("award")} ${esc(badge)}</span>`).join("")}
          </div>
        </div>
        <button class="btn ghost">${icon("settings")} Tercihler</button>
      </section>
      <section class="metrics-grid">
        ${metricCard("lightbulb", "Toplam fikir", `${Math.max(myIdeas.length, 3)}`, "Anonim fikirler sadece sana özel görünür.", "+1", "navy")}
        ${metricCard("badge-check", "Uygulamaya alınan", `${myIdeas.filter(idea => idea.status === "done").length + 1}`, "Katkının somut etkisi.", "+1", "green")}
        ${metricCard("thumbs-up", "Desteklediğin", "42", "Oy kredisiyle katkı verdiğin fikirler.", "+6", "purple")}
        ${metricCard("message-circle", "Yorum", "28", "Tartışmalara yaptığın katkılar.", "+4", "amber")}
        ${metricCard("coins", "Kalan kredi", `${user.voteCreditBalance}`, "Aylık kredi bakiyen.", "+0", "green")}
      </section>
      <section class="analytics-grid">
        <article class="analytics-card">
          <h3>Aylık Aktivite</h3>
          <div class="bar-list" style="margin-top: 16px;">
            ${["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran"].map((month, index) => `
              <div class="bar-row">
                <span>${month}</span>
                <span class="bar-track"><span class="bar-fill" style="width: ${35 + index * 10}%"></span></span>
                <strong>${7 + index * 3}</strong>
              </div>
            `).join("")}
          </div>
        </article>
        <article class="analytics-card">
          <h3>Katıldığın Yarışmalar</h3>
          <div class="mini-list" style="margin-top: 12px;">
            ${challenges.map(challenge => `<div class="mini-item"><strong>${esc(challenge.title)}</strong><span>${esc(challenge.status)}</span></div>`).join("")}
          </div>
        </article>
      </section>
    </div>
  `;
}

function renderManager() {
  if (!currentUser().isManager && !currentUser().isAdmin) return renderNoAccess();
  const queue = state.ideas.filter(idea => ["review", "new", "pilot"].includes(idea.status));
  return `
    <div class="view-stack">
      <section class="hero-band">
        <div>
          <h2>Yönetici Paneli</h2>
          <p>Fikirleri incelemeye al, pilot seç, ek bilgi iste veya sonuçlarını paylaş.</p>
        </div>
        <span class="status-badge review">${queue.length} fikir karar kuyruğunda</span>
      </section>
      <section class="analytics-grid">
        <article class="analytics-card">
          <h3>Karar Kuyruğu</h3>
          <div class="table-wrap" style="margin-top: 14px;">
            <table class="data-table">
              <thead><tr><th>Fikir</th><th>Skor</th><th>Durum</th><th>Aksiyon</th></tr></thead>
              <tbody>
                ${queue.map(idea => `
                  <tr>
                    <td><strong>${esc(idea.title)}</strong><br /><span class="muted">${esc(idea.department)} · ${esc(idea.location)}</span></td>
                    <td>${idea.aiScore}</td>
                    <td>${statusBadge(idea.status)}</td>
                    <td>
                      <div class="field-row">
                        <button class="table-action" data-action="manager-status" data-id="${esc(idea.id)}" data-status="review" title="İncelemeye al">${icon("clipboard-check")}</button>
                        <button class="table-action" data-action="manager-status" data-id="${esc(idea.id)}" data-status="pilot" title="Pilot seç">${icon("rocket")}</button>
                        <button class="table-action" data-action="manager-status" data-id="${esc(idea.id)}" data-status="done" title="Uygulandı">${icon("badge-check")}</button>
                        <button class="table-action" data-action="open-idea" data-id="${esc(idea.id)}" title="Detay">${icon("external-link")}</button>
                      </div>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </article>
        <article class="analytics-card">
          <h3>Hızlı Kazanım Adayları</h3>
          <div class="mini-list" style="margin-top: 14px;">
            ${state.ideas.filter(idea => idea.estimatedCost === "Düşük").slice(0, 5).map(idea => `
              <div class="mini-item">
                <span><strong>${esc(idea.title)}</strong><span>AI ${idea.aiScore} · ${esc(idea.estimatedImpact)} etki</span></span>
                ${statusBadge(idea.status)}
              </div>
            `).join("")}
          </div>
        </article>
      </section>
      <section class="content-panel">
        <div class="section-title"><div><h2>Benzer Sinyal Kümeleri</h2><p>AI, aynı temaya düşen fikirleri yöneticiler için birleştirir.</p></div></div>
        <div class="tag-row">
          <span class="ai-badge">${icon("sparkles")} Kasa bekleme süresi · 6 fikir</span>
          <span class="ai-badge">${icon("sparkles")} Onboarding bilgi erişimi · 4 fikir</span>
          <span class="ai-badge">${icon("sparkles")} Dijital onay akışları · 8 fikir</span>
          <span class="ai-badge">${icon("sparkles")} Enerji tasarrufu · 5 fikir</span>
        </div>
      </section>
    </div>
  `;
}

function renderProfileBundleShelf(myIdeas = []) {
  const source = myIdeas.length ? myIdeas : state.ideas.slice(0, 3);
  return `
    <section class="profile-bundle-shelf">
      <div class="file-bundle-head">
        <span>
          <small>Profil dosyaları</small>
          <strong>Ürün ve fikir bundle'ları</strong>
        </span>
        <em>${source.reduce((sum, idea) => sum + marketBundleFiles(idea).length, 0)} ek</em>
      </div>
      <div class="profile-bundle-list">
        ${source.slice(0, 4).map(idea => `
          <article>
            <span>
              <strong>${esc(idea.marketTicker || "NIE")} · ${esc(idea.title)}</strong>
              <small>${esc(idea.marketCategory || idea.type)} · ${esc(idea.department)}</small>
            </span>
            ${renderBundleChips(idea)}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderProfileV2() {
  const user = currentUser();
  const myIdeas = state.ideas.filter(idea => idea.authorId === user.id);
  const portfolioValue = marketPortfolioValue();
  const holdings = Object.entries(state.marketHoldings)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => ({ idea: state.ideas.find(item => item.id === id), qty }))
    .filter(item => item.idea);
  const directoryMatch = peopleDirectory.find(person => person.name.split(" ")[0] === user.name.split(" ")[0]) || peopleDirectory[0];
  const company = companyById(directoryMatch.companyId || "is-new");

  return `
    <div class="view-stack profile-detail-page">
      <section class="profile-head profile-hero-card">
        ${avatar(user.name, "large", user.avatarUrl)}
        <div class="profile-main-copy">
          <span class="panel-kicker">${esc(company.shortName)} · ${esc(directoryMatch.campus || user.location)}</span>
          <h2>${esc(user.name)}</h2>
          <p class="muted">${esc(user.role)} · ${esc(user.department)} · ${esc(user.location)}</p>
          <div class="badge-row">
            ${user.badges.map(badge => `<span class="badge">${icon("award")} ${esc(badge)}</span>`).join("")}
          </div>
        </div>
        <div class="profile-wallet">
          <span>Borsa bütçesi</span>
          <strong>${formatCurrency(state.marketBudget)}</strong>
          <small>Portföy ${formatCurrency(portfolioValue)}</small>
        </div>
      </section>

      <section class="profile-bundle-actions">
        <button type="button" class="btn primary" data-action="open-market-composer" data-context="profile">${icon("file-plus-2")} Bundle ekle</button>
        <button type="button" class="btn ghost" data-page="newIdea">${icon("lightbulb")} Fikir / şikayet ekle</button>
      </section>

      ${state.marketComposerContext === "profile" ? renderMarketComposer("profile") : ""}
      ${renderProfileBundleShelf(myIdeas)}

      <section class="metrics-grid">
        ${metricCard("briefcase-business", "Kayıt", `${Math.max(myIdeas.length, 3)}`, "Yayınladığın fikir/proje/araştırma.", "+1", "navy")}
        ${metricCard("chart-candlestick", "Portföy", `${holdings.length}`, "Elindeki borsa varlığı.", "+2", "green")}
        ${metricCard("coins", "Bütçe", `${Math.round(state.marketBudget / 1000)}K`, "Al/sat için kalan demo para.", "+850", "purple")}
        ${metricCard("message-circle", "Yorum", "28", "Tartışmalara yaptığın katkılar.", "+4", "amber")}
        ${metricCard("badge-check", "Uygulama", `${myIdeas.filter(idea => idea.status === "done").length + 1}`, "Somut etki.", "+1", "green")}
      </section>

      <section class="profile-detail-grid">
        <article class="analytics-card">
          <div class="section-title"><div><h3>Aylık aktivite</h3><p>Katkı, alım ve yorum yoğunluğu.</p></div></div>
          <div class="bar-list">
            ${["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran"].map((month, index) => `
              <div class="bar-row">
                <span>${month}</span>
                <span class="bar-track"><span class="bar-fill" style="width: ${35 + index * 10}%"></span></span>
                <strong>${7 + index * 3}</strong>
              </div>
            `).join("")}
          </div>
        </article>
        <article class="analytics-card">
          <div class="section-title"><div><h3>Portföy detayları</h3><p>Elindeki fikir hisseleri.</p></div></div>
          <div class="portfolio-list">
            ${holdings.map(({ idea, qty }) => `
              <div class="portfolio-row">
                <span><strong>${esc(idea.marketTicker)}</strong><small>${esc(idea.title)}</small></span>
                <em>${qty} lot · ${formatCurrency(qty * marketPrice(idea))}</em>
              </div>
            `).join("") || `<div class="portfolio-row empty">Henüz varlık yok.</div>`}
          </div>
        </article>
        <article class="analytics-card">
          <div class="section-title"><div><h3>Kurumsal profil</h3><p>Rol ve kapsam bilgisi.</p></div></div>
          <div class="profile-fact-grid">
            <span><strong>İştirak</strong>${esc(company.name)}</span>
            <span><strong>Yerleşke</strong>${esc(directoryMatch.campus || user.location)}</span>
            <span><strong>Şehir</strong>${esc(directoryMatch.city || user.city)}</span>
            <span><strong>Rol seviyesi</strong>${esc(user.seniority)}</span>
            <span><strong>Şirket Kıdemi</strong>5 Yıl, 3 Ay</span>
            <span><strong>Sunulan Toplam Fikir</strong>${Math.max(myIdeas.length, 3)}</span>
          </div>
        </article>
        <article class="analytics-card">
          <div class="section-title"><div><h3>Yetkinlikler</h3><p>Demo profil sinyalleri.</p></div></div>
          <div class="skill-chip-grid">
            ${["Piyasa okuryazarlığı", "Operasyon bilgisi", "AI analiz", "Proje keşfi", "Kurumsal iletişim", "Veri yorumlama"].map(skill => `<span>${esc(skill)}</span>`).join("")}
          </div>
        </article>
      </section>
    </div>
  `;
}

function renderAnalyticsV2() {
  const reviewCount = state.ideas.filter(idea => idea.status === "review").length + 51;
  const pilotCount = state.ideas.filter(idea => idea.status === "pilot").length + 18;
  const doneCount = state.ideas.filter(idea => idea.status === "done").length + 30;
  const enterpriseTotal = state.ideas.length + 423;
  const totalCredits = state.ideas.reduce((sum, idea) => sum + idea.credits, 6820);
  const avgDecisionScore = Math.round(state.ideas.reduce((sum, idea) => sum + ((idea.aiScore + idea.strategicScore + idea.communityScore) / 3), 0) / state.ideas.length);
  const quickWinCount = state.ideas.filter(idea => idea.estimatedCost === "Düşük" && idea.estimatedImpact.includes("Yüksek")).length + 7;
  const decisionNotes = [
    ["Kasa bekleme süresi", "Aynı problem farklı lokasyonlarda tekrar ediyor.", "Birleştir"],
    ["Onboarding bilgi erişimi", "Yüksek etki, orta maliyet bandında.", "Pilota hazır"],
    ["Teknik performans", "Kısa sprint ile kapanabilecek işler var.", "Hızlandır"]
  ];
  const complaintSignals = state.ideas.filter(idea => idea.type.includes("Şikayet") || idea.tags?.includes("Şikayet"));
  const aiSignalRows = [
    ["Verimsiz onay adımları", 86, "Süreç verimsizliği", "+18%"],
    ["Tekrarlı veri girişi", 74, "Tekrarlı iş", "+11%"],
    ["Bekleyen müşteri geri dönüşleri", 69, "Müşteri deneyimi", "+8%"],
    ["Departmanlar arası devir kaybı", 63, "İletişim kopukluğu", "+6%"]
  ];
  const aiChartPoints = [42, 58, 52, 67, 74, 81, 76, 88];

  const svgWidth = 500;
  const svgHeight = 180;
  const xStep = svgWidth / (aiChartPoints.length - 1);
  const coords = aiChartPoints.map((val, idx) => ({
    x: idx * xStep,
    y: svgHeight - 20 - (val / 100) * (svgHeight - 40)
  }));
  let linePath = `M ${coords[0].x} ${coords[0].y}`;
  for (let i = 1; i < coords.length; i++) {
    const prev = coords[i - 1];
    const curr = coords[i];
    const cpX1 = prev.x + xStep / 2;
    const cpY1 = prev.y;
    const cpX2 = curr.x - xStep / 2;
    const cpY2 = curr.y;
    linePath += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${curr.x} ${curr.y}`;
  }
  const areaPath = `${linePath} L ${coords[coords.length - 1].x} ${svgHeight} L ${coords[0].x} ${svgHeight} Z`;

  return `
    <div class="view-stack apple-page analytics-view">
      <section class="apple-page-head">
        <div>
          <h2>Karar Analitiği</h2>
          <p>AI tarafından çıkarılan sinyaller ve karar özeti.</p>
        </div>
        <button class="btn ghost">${icon("download")} Dışa aktar</button>
      </section>

      <section class="apple-bento-grid analytics-bento">
        ${appleStatCard("lightbulb", "Aktif fikir", `${enterpriseTotal}`, "havuz")}
        ${appleStatCard("thumbs-up", "Kredi", `${totalCredits.toLocaleString("tr-TR")}`, "kullanım")}
        ${appleStatCard("clipboard-check", "Kuyruk", `${reviewCount}`, "karar")}
        ${appleStatCard("rocket", "Pilot", `${pilotCount}`, "aday")}
      </section>

      <section class="ai-signal-lab">
        <article class="ai-lab-main">
          <div class="panel-head">
            <div>
              <span class="panel-kicker">AI tarafından çıkarıldı</span>
              <h3>Şikayet ve öneri sinyal grafiği</h3>
            </div>
            <span class="delta-pill positive">${icon("sparkles")} ${complaintSignals.length + 12} şikayet sinyali</span>
          </div>
          <div class="ai-generated-chart svg-chart-container" aria-label="AI sinyal yoğunluğu grafiği">
            <svg viewBox="0 0 ${svgWidth} ${svgHeight}" class="analytics-svg-chart" preserveAspectRatio="none" style="width: 100%; height: 168px; display: block;">
              <line class="chart-grid-line" x1="0" y1="${svgHeight * 0.25}" x2="${svgWidth}" y2="${svgHeight * 0.25}" style="stroke: rgba(255, 255, 255, 0.08); stroke-dasharray: 4 4;" />
              <line class="chart-grid-line" x1="0" y1="${svgHeight * 0.5}" x2="${svgWidth}" y2="${svgHeight * 0.5}" style="stroke: rgba(255, 255, 255, 0.08); stroke-dasharray: 4 4;" />
              <line class="chart-grid-line" x1="0" y1="${svgHeight * 0.75}" x2="${svgWidth}" y2="${svgHeight * 0.75}" style="stroke: rgba(255, 255, 255, 0.08); stroke-dasharray: 4 4;" />
              <path d="${areaPath}" fill="rgba(59, 130, 246, 0.04)" />
              <path d="${linePath}" fill="none" stroke="#3b82f6" stroke-width="3.5" stroke-linecap="round" />
              ${coords.map((c, i) => `
                <circle cx="${c.x}" cy="${c.y}" r="4.5" fill="#ffffff" stroke="#3b82f6" stroke-width="2.5" />
              `).join("")}
            </svg>
          </div>
          <div class="ai-chart-caption">
            <span>Öneri yoğunluğu</span>
            <span>Şikayet / verimsizlik sinyali</span>
            <span>AI öncelik skoru</span>
          </div>
        </article>

        <article class="ai-lab-side">
          <div class="panel-head">
            <div>
              <span class="panel-kicker">AI analiz notları</span>
              <h3>Otomatik kümeler</h3>
            </div>
          </div>
          <div class="ai-signal-list">
            ${aiSignalRows.map(row => `
              <div class="ai-signal-row">
                <span>
                  <strong>${esc(row[0])}</strong>
                  <small>${esc(row[2])}</small>
                </span>
                <em>${row[1]}</em>
                <b>${esc(row[3])}</b>
              </div>
            `).join("")}
          </div>
        </article>
      </section>

      <section class="analytics-charts-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 20px; margin-top: 20px;">
        <article class="analytics-card">
          <div class="panel-head">
            <div>
              <span class="panel-kicker">Süreç Durumları</span>
              <h3>Karar ve pilot dağılımı</h3>
            </div>
          </div>
          <div class="svg-chart-container" style="padding: 16px 0;">
            <svg viewBox="0 0 400 200" style="width: 100%; height: 160px; display: block;">
              <line x1="40" y1="30" x2="360" y2="30" class="chart-grid-line" style="stroke: rgba(255, 255, 255, 0.08); stroke-width: 1; stroke-dasharray: 2 2;" />
              <line x1="40" y1="85" x2="360" y2="85" class="chart-grid-line" style="stroke: rgba(255, 255, 255, 0.08); stroke-width: 1; stroke-dasharray: 2 2;" />
              <line x1="40" y1="140" x2="360" y2="140" class="chart-grid-line" style="stroke: rgba(255, 255, 255, 0.08); stroke-width: 1; stroke-dasharray: 2 2;" />
              <line x1="40" y1="150" x2="360" y2="150" class="chart-grid-line" style="stroke: rgba(255, 255, 255, 0.16); stroke-width: 1.5;" />
              
              <rect x="75" y="${150 - Math.min(120, (reviewCount / 100) * 120)}" width="46" height="${Math.min(120, (reviewCount / 100) * 120)}" rx="4" fill="#64748b" />
              <text x="98" y="${142 - Math.min(120, (reviewCount / 100) * 120)}" fill="#94a3b8" font-size="11" font-weight="700" text-anchor="middle">${reviewCount}</text>
              <text x="98" y="172" class="chart-text" fill="#94a3b8" font-size="11" font-weight="600" text-anchor="middle">İnceleme</text>
              
              <rect x="177" y="${150 - Math.min(120, (pilotCount / 100) * 120)}" width="46" height="${Math.min(120, (pilotCount / 100) * 120)}" rx="4" fill="#3b82f6" />
              <text x="200" y="${142 - Math.min(120, (pilotCount / 100) * 120)}" fill="#3b82f6" font-size="11" font-weight="700" text-anchor="middle">${pilotCount}</text>
              <text x="200" y="172" class="chart-text" fill="#94a3b8" font-size="11" font-weight="600" text-anchor="middle">Pilot</text>
              
              <rect x="279" y="${150 - Math.min(120, (doneCount / 100) * 120)}" width="46" height="${Math.min(120, (doneCount / 100) * 120)}" rx="4" fill="#0f172a" />
              <text x="302" y="${142 - Math.min(120, (doneCount / 100) * 120)}" fill="#cbd5e1" font-size="11" font-weight="700" text-anchor="middle">${doneCount}</text>
              <text x="302" y="172" class="chart-text" fill="#94a3b8" font-size="11" font-weight="600" text-anchor="middle">Uygulandı</text>
            </svg>
          </div>
        </article>

        <article class="analytics-card">
          <div class="panel-head">
            <div>
              <span class="panel-kicker">Kategori Destekleri</span>
              <h3>Toplam oy kredi dağılımı</h3>
            </div>
          </div>
          <div class="svg-chart-container" style="padding: 16px 0;">
            <svg viewBox="0 0 400 200" style="width: 100%; height: 160px; display: block;">
              ${(() => {
                const cats = ["Proje", "Fikir", "Araştırma", "Şikayet"];
                const creditsMap = { "Proje": 3240, "Fikir": 2180, "Araştırma": 1420, "Şikayet": 980 };
                const maxVal = 3500;
                return cats.map((cat, index) => {
                  const val = creditsMap[cat] || 1000;
                  const barWidth = Math.max(10, Math.min(240, (val / maxVal) * 240));
                  const y = 24 + index * 42;
                  const barColor = cat === "Proje" ? "#3b82f6" : cat === "Fikir" ? "#64748b" : cat === "Araştırma" ? "#475569" : "#334155";
                  return `
                    <text x="24" y="${y + 14}" class="chart-text" fill="#94a3b8" font-size="11" font-weight="600" text-anchor="start">${cat}</text>
                    <rect x="100" y="${y}" width="${barWidth}" height="18" rx="3" fill="${barColor}" />
                    <text x="${100 + barWidth + 10}" y="${y + 14}" fill="#94a3b8" font-size="11" font-weight="700">${val.toLocaleString("tr-TR")}</text>
                  `;
                }).join("");
              })()}
            </svg>
          </div>
        </article>
      </section>

      <section class="apple-content-grid">
        <article class="insight-card">
          <div class="panel-head">
            <div>
              <span class="panel-kicker">Karar notları</span>
              <h3>Bu hafta</h3>
            </div>
          </div>
          <div class="decision-note-list">
            ${decisionNotes.map(note => `
              <div class="decision-note">
                <span>${icon("sparkles")}</span>
                <div>
                  <strong>${esc(note[0])}</strong>
                  <p>${esc(note[1])}</p>
                </div>
                <em>${esc(note[2])}</em>
              </div>
            `).join("")}
          </div>
        </article>

        <article class="insight-card">
          <div class="panel-head">
            <div>
              <span class="panel-kicker">Öncelik</span>
              <h3>Etki / maliyet</h3>
            </div>
          </div>
          <div class="matrix refined-matrix apple-matrix">
            <span class="matrix-label top">Yüksek etki</span>
            <span class="matrix-label bottom">Daha fazla doğrulama</span>
            ${state.ideas.slice(0, 7).map((idea, index) => {
              const x = idea.estimatedCost.includes("Düşük") ? 24 : idea.estimatedCost.includes("Orta") ? 53 : 78;
              const y = idea.estimatedImpact.includes("Çok") ? 82 : idea.estimatedImpact.includes("Yüksek") ? 68 : 46;
              return `<button class="matrix-point refined" title="${esc(idea.title)}" data-action="open-idea" data-id="${esc(idea.id)}" style="left: ${x + index % 2 * 5}%; bottom: ${y - index % 3 * 4}%;">${index + 1}</button>`;
            }).join("")}
          </div>
        </article>
      </section>
    </div>
  `;
}

function renderManagerV2() {
  if (!currentUser().isManager && !currentUser().isAdmin) return renderNoAccess();
  const queue = state.ideas
    .filter(idea => ["review", "new", "pilot"].includes(idea.status))
    .sort((a, b) => ((b.aiScore + b.strategicScore + b.communityScore) - (a.aiScore + a.strategicScore + a.communityScore)));
  const focusIdea = queue[0] || state.ideas[0];
  const quickWins = state.ideas
    .filter(idea => idea.estimatedCost === "Düşük" || idea.implementationTime.includes("1 ay"))
    .slice(0, 4);
  const lanes = [
    { title: "Yeni sinyal", status: "new", icon: "sparkles" },
    { title: "İnceleme", status: "review", icon: "clipboard-check" },
    { title: "Pilot", status: "pilot", icon: "rocket" }
  ];

  return `
    <div class="view-stack apple-page manager-view">
      <section class="apple-page-head">
        <div>
          <h2>Karar Kurulu</h2>
          <p>Karar bekleyen fikirleri kısa ve net gör.</p>
        </div>
        <span class="status-badge review">${queue.length} açık karar</span>
      </section>

      <section class="manager-focus-grid">
        <article class="focus-decision-card">
          <div class="panel-head">
            <div>
              <span class="panel-kicker">Öncelikli dosya</span>
              <h3>${esc(focusIdea.title)}</h3>
            </div>
            ${statusBadge(focusIdea.status)}
          </div>
          <p>${esc(focusIdea.summary)}</p>
          <div class="decision-score-row">
            ${decisionScoreV2("Topluluk", focusIdea.communityScore)}
            ${decisionScoreV2("Strateji", focusIdea.strategicScore)}
            ${decisionScoreV2("Analiz", focusIdea.aiScore)}
          </div>
          <div class="focus-meta-grid">
            <span><strong>${esc(focusIdea.department)}</strong> departman</span>
            <span><strong>${esc(focusIdea.estimatedImpact)}</strong> etki</span>
            <span><strong>${esc(focusIdea.estimatedCost)}</strong> maliyet</span>
            <span><strong>${esc(focusIdea.implementationTime)}</strong> süre</span>
            <span><strong>${formatCurrency(marketPrice(focusIdea))}</strong> hisse fiyatı</span>
            <span><strong>${Math.round((focusIdea.credits || 100) / 10)}</strong> destekçi</span>
          </div>
          <div class="manager-actions">
            <button class="btn ghost" data-action="manager-status" data-id="${esc(focusIdea.id)}" data-status="review">${icon("clipboard-check")} İncele</button>
            <button class="btn primary" data-action="manager-status" data-id="${esc(focusIdea.id)}" data-status="pilot">${icon("rocket")} Pilota al</button>
            <button class="btn ghost" data-action="open-idea" data-id="${esc(focusIdea.id)}">${icon("external-link")} Detay</button>
          </div>
        </article>

        <aside class="content-panel manager-side-stack">
          <article class="insight-card">
            <div class="panel-head">
              <div>
                <span class="panel-kicker">Hızlı kazanım</span>
                <h3>Kısa sprint</h3>
              </div>
            </div>
            <div class="quick-win-list">
              ${quickWins.map(idea => `
                <button class="quick-win-row" data-action="open-idea" data-id="${esc(idea.id)}">
                  <span>
                    <strong>${esc(idea.title)}</strong>
                    <small>${esc(idea.implementationTime)} · ${esc(idea.estimatedCost)} maliyet</small>
                  </span>
                  <em>${idea.aiScore}</em>
                </button>
              `).join("")}
            </div>
          </article>
        </aside>
      </section>

      <section class="decision-board" aria-label="Karar akışı">
        ${lanes.map(lane => {
          const ideas = queue.filter(idea => idea.status === lane.status);
          return `
            <article class="decision-lane">
              <div class="lane-head">
                <span>${icon(lane.icon)}</span>
                <strong>${esc(lane.title)}</strong>
                <em>${ideas.length}</em>
              </div>
              <div class="lane-stack">
                ${ideas.length ? ideas.map(idea => managerDecisionCardV2(idea)).join("") : `<div class="lane-empty">Bu aşamada bekleyen fikir yok.</div>`}
              </div>
            </article>
          `;
        }).join("")}
      </section>

      <section class="manager-signal-panel">
        <div class="panel-head">
          <div>
            <span class="panel-kicker">Benzer sinyaller</span>
            <h3>Aynı probleme düşen fikir kümeleri</h3>
          </div>
        </div>
        <div class="cluster-grid">
          ${[
            ["Kasa bekleme süresi", "6 fikir", "Operasyon"],
            ["Onboarding bilgi erişimi", "4 fikir", "İK"],
            ["Dijital onay akışları", "8 fikir", "Teknoloji"],
            ["Enerji tasarrufu", "5 fikir", "Şube"]
          ].map(cluster => `
            <button class="cluster-card" data-action="search-cluster" data-query="${esc(cluster[0])}">
              <strong>${esc(cluster[0])}</strong>
              <span>${esc(cluster[1])} · ${esc(cluster[2])}</span>
            </button>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function decisionScoreV2(label, value) {
  return `
    <span class="decision-score">
      <strong>${esc(value)}</strong>
      <small>${esc(label)}</small>
    </span>
  `;
}

function managerDecisionCardV2(idea) {
  const owner = demoUsers.find(user => user.id === idea.authorId);
  const isAnonymous = String(idea.authorLabel || "").toLocaleLowerCase("tr-TR").startsWith("anonim");
  const ownerName = isAnonymous ? "Anonim katkı" : (idea.authorLabel || owner?.name || "Çalışan");
  const compositeScore = Math.round((idea.aiScore + idea.strategicScore + idea.communityScore) / 3);
  return `
    <article class="decision-card">
      <div class="decision-card-top">
        ${avatar(ownerName, "small")}
        <span>
          <strong>${esc(ownerName)}</strong>
          <small>${esc(idea.department)}</small>
        </span>
        <em>${compositeScore}</em>
      </div>
      <h4>${esc(idea.title)}</h4>
      <p>${esc(idea.summary)}</p>
      <div class="decision-card-meta" style="flex-wrap: wrap; gap: 4px;">
        <span>${esc(idea.estimatedImpact)}</span>
        <span>${esc(idea.implementationTime)}</span>
        <span>Fiyat: ${formatCurrency(marketPrice(idea))}</span>
        <span>Destek: ${Math.round((idea.credits || 100) / 10)} Oy</span>
      </div>
      <div class="decision-card-meta" style="margin-top: 4px; font-size: 11px; color: #8b94a7;">
        <span>AI: ${idea.aiScore}/100</span>
        <span>Strateji: ${idea.strategicScore}/100</span>
      </div>
      <div class="decision-card-actions">
        <button class="table-action" data-action="manager-status" data-id="${esc(idea.id)}" data-status="review" title="İncelemeye al">${icon("clipboard-check")}</button>
        <button class="table-action" data-action="manager-status" data-id="${esc(idea.id)}" data-status="pilot" title="Pilot seç">${icon("rocket")}</button>
        <button class="table-action" data-action="manager-status" data-id="${esc(idea.id)}" data-status="done" title="Uygulandı">${icon("badge-check")}</button>
        <button class="table-action" data-action="open-idea" data-id="${esc(idea.id)}" title="Detay">${icon("external-link")}</button>
      </div>
    </article>
  `;
}

function renderAdmin() {
  if (!currentUser().isAdmin) return renderNoAccess();
  const tabs = ["Kullanıcılar", "Roller", "Organizasyon", "Oylama", "Rozetler", "Moderasyon", "AI Ayarları", "Güvenlik", "Denetim"];
  return `
    <div class="admin-layout">
      <aside class="admin-tabs">
        ${tabs.map(tab => `<button class="admin-tab ${state.adminTab === tab ? "active" : ""}" data-action="admin-tab" data-tab="${esc(tab)}">${esc(tab)}</button>`).join("")}
      </aside>
      <section class="admin-panel">
        ${renderAdminContent()}
      </section>
    </div>
  `;
}

function renderAdminContent() {
  if (state.adminTab === "Kullanıcılar") {
    return `
      <div class="section-title"><div><h2>Kullanıcı Yönetimi</h2><p>Rol, departman, lokasyon ve kredi yönetimi.</p></div><button class="btn primary" data-action="admin-add-user">${icon("user-plus")} Kullanıcı ekle</button></div>
      <div class="table-wrap">
        <table class="data-table">
          <thead><tr><th>Kullanıcı</th><th>Rol</th><th>Departman</th><th>Lokasyon</th><th>Kredi</th><th>Durum</th></tr></thead>
          <tbody>
            ${demoUsers.map(user => `
              <tr>
                <td><strong>${esc(user.name)}</strong><br /><span class="muted">${esc(user.email)}</span></td>
                <td>${esc(user.role)}</td>
                <td>${esc(user.department)}</td>
                <td>${esc(user.location)}</td>
                <td>${user.voteCreditBalance} / ${user.monthlyVoteCredit}</td>
                <td><span class="status-badge done">Aktif</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  if (state.adminTab === "Roller") {
    const rows = [
      ["Fikir oluşturabilir", true, true, true, true],
      ["Fikir durumunu değiştirebilir", false, true, true, true],
      ["Anonim denetim kaydını görebilir", false, false, true, true],
      ["Yarışma açabilir", false, true, true, true],
      ["Chat kanalı oluşturabilir", false, true, true, true],
      ["Organizasyon yapısını yönetebilir", false, false, false, true]
    ];
    return `
      <div class="section-title"><div><h2>Roller ve Yetkiler</h2><p>Rol bazlı erişim kontrolü.</p></div></div>
      <div class="permission-grid">
        <div class="head">Yetki</div><div class="head">Çalışan</div><div class="head">Yönetici</div><div class="head">Uyum</div><div class="head">Admin</div>
        ${rows.map(row => row.map((cell, index) => `<div>${index === 0 ? esc(cell) : cell ? `<span class="check-mark">${icon("check")}</span>` : `<span class="muted">-</span>`}</div>`).join("")).join("")}
      </div>
    `;
  }

  if (state.adminTab === "AI Ayarları") {
    return `
      <div class="section-title"><div><h2>AI Ayarları</h2><p>Model, analiz dili, moderasyon eşiği ve skor ağırlıkları.</p></div><span class="ai-badge">${icon("key-round")} GROQ_API_KEY backend env</span></div>
      <div class="form-grid">
        ${selectFieldStatic("AI analiz", ["Açık", "Kapalı"], "Açık")}
        ${selectFieldStatic("Kullanılacak model", ["grok-enterprise", "grok-fast", "kurum içi model"], "grok-enterprise")}
        ${selectFieldStatic("Analiz dili", ["Türkçe", "İngilizce", "Kullanıcı dili"], "Türkçe")}
        ${selectFieldStatic("Benzer fikir arama", ["Açık", "Kapalı"], "Açık")}
        ${fieldStatic("Maksimum token limiti", "4000")}
        ${fieldStatic("Moderasyon eşiği", "0.72")}
      </div>
      <p class="settings-note">API anahtarı frontend kodunda tutulmaz. Sunucu tarafı ortam değişkeni üzerinden okunur.</p>
    `;
  }

  if (state.adminTab === "Moderasyon") {
    return `
      <div class="section-title"><div><h2>Moderasyon</h2><p>Raporlanan fikir, yorum, chat mesajı ve ek dosyalar.</p></div></div>
      <div class="table-wrap">
        <table class="data-table">
          <thead><tr><th>İçerik</th><th>Neden</th><th>Risk</th><th>Aksiyon</th></tr></thead>
          <tbody>
            ${[
              ["Chat mesajı", "Kişisel veri", "Yüksek"],
              ["Fikir", "Kurumsal gizli bilgi", "Orta"],
              ["Yorum", "Alakasız içerik", "Düşük"]
            ].map(row => `
              <tr>
                <td>${esc(row[0])}</td>
                <td>${esc(row[1])}</td>
                <td><span class="status-badge ${row[2] === "Yüksek" ? "rejected" : row[2] === "Orta" ? "pilot" : "new"}">${esc(row[2])}</span></td>
                <td><button class="btn ghost" data-action="admin-inspect-moderation">${icon("shield-alert")} İncele</button></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      <p class="settings-note">Normal yöneticiler anonim kullanıcının kimliğini göremez. Ağır ihlal durumunda yalnızca yetkili uyum ekipleri denetim kaydını inceleyebilir.</p>
    `;
  }

  if (state.adminTab === "Denetim") {
    return `
      <div class="section-title"><div><h2>Denetim Kayıtları</h2><p>Admin işlemleri ve kritik güvenlik olayları.</p></div></div>
      <div class="mini-list">
        ${[
          ["Kerem Yıldız", "AI moderasyon eşiğini güncelledi", "Bugün 10:18"],
          ["Sistem", "Anonim fikir denetim kaydı oluşturdu", "Dün 17:42"],
          ["Can Koç", "Fikri pilot seçti", "Dün 15:11"],
          ["Merve Aydın", "Yarışma duyurusu yayınladı", "31 Mayıs"]
        ].map(item => `<div class="mini-item"><span><strong>${esc(item[0])}</strong><span>${esc(item[1])}</span></span><span>${esc(item[2])}</span></div>`).join("")}
      </div>
    `;
  }

  return `
    <div class="section-title"><div><h2>${esc(state.adminTab)}</h2><p>Şirketler, departmanlar, lokasyonlar, oylama kredileri, rozetler ve güvenlik ayarları.</p></div></div>
    <div class="form-grid">
      ${fieldStatic("Marka adı", state.brandName)}
      ${fieldStatic("Varsayılan aylık oy kredisi", "30")}
      ${selectFieldStatic("Kurumsal e-posta doğrulama", ["Açık", "Kapalı"], "Açık")}
      ${selectFieldStatic("SSO hazırlığı", ["Azure AD", "LDAP", "Google Workspace", "Özel IdP"], "Azure AD")}
      ${fieldStatic("KVKK bilgilendirme sürümü", "v1.2")}
      ${selectFieldStatic("Rate limiting", ["Standart", "Sıkı", "Özel"], "Standart")}
    </div>
  `;
}

function fieldStatic(label, value) {
  return `<label class="field"><span>${esc(label)}</span><input class="input" value="${esc(value)}" /></label>`;
}

function selectFieldStatic(label, values, selected) {
  return `<label class="field"><span>${esc(label)}</span><select class="select">${optionList(values, selected)}</select></label>`;
}

function renderSettings() {
  return `
    <div class="view-stack">
      <section class="content-panel">
        <div class="section-title"><div><h2>Ayarlar</h2><p>Uygulama adı, tema ve bildirim tercihleri.</p></div></div>
        <div class="form-grid">
          <label class="field">
            <span>Ürün adı</span>
            <input class="input" data-brand-input value="${esc(state.brandDraft)}" />
          </label>
          <label class="field">
            <span>Alternatif isimler</span>
            <select class="select" data-brand-preset>
              ${optionList(["NEW IDEA EXCHANGE", "Idea Exchange", "Signal Exchange", "Innovation Exchange", "Inside Exchange", "Common Mind"], state.brandName)}
            </select>
          </label>
          <label class="field">
            <span>Ana renk</span>
            <input class="input" type="color" data-primary-color value="${esc(state.primaryColor)}" />
          </label>
          ${selectFieldStatic("Bildirim yoğunluğu", ["Standart", "Sadece önemli", "Sessiz"], "Standart")}
          ${selectFieldStatic("Anonimlik varsayılanı", ["İsmimle paylaş", "İsim gizli, departman görünür", "Tam anonim"], "İsim gizli, departman görünür")}
          ${selectFieldStatic("Dil", ["Türkçe", "English"], "Türkçe")}
        </div>
        <div class="field-row" style="margin-top: 16px;">
          <button class="btn primary" data-action="save-brand">${icon("save")} Kaydet</button>
          <button class="btn ghost" data-action="toggle-theme">${icon("moon")} Tema değiştir</button>
        </div>
      </section>
      <section class="content-panel">
        <h3>Anonimlik ve güven</h3>
        <p class="muted">Anonim paylaşımlarda kimliğiniz diğer çalışanlar ve yöneticiler tarafından görüntülenmez. Platform kurallarının ağır ihlali, hukuki zorunluluk veya güvenlik riski durumlarında yetkili uyum ekipleri denetim kayıtlarını inceleyebilir.</p>
      </section>
    </div>
  `;
}

function renderNoAccess() {
  return renderEmpty("lock", "Bu işlem için yetkin bulunmuyor.", "Rolünü değiştirerek yönetici veya admin demo görünümünü açabilirsin.");
}

function renderEmpty(iconName, title, body) {
  return `
    <div class="empty-state">
      ${icon(iconName)}
      <h3>${esc(title)}</h3>
      <p class="muted">${esc(body)}</p>
    </div>
  `;
}

function createIdeaFromWizard() {
  const w = state.wizard;
  const user = currentUser();
  const id = `idea-${Date.now()}`;
  
  const aiScore = state.aiAnalysis?.score || 84;
  let status = "new";
  
  // Tüzüğe aykırılık kontrolü
  const queryText = (w.title + " " + w.problem + " " + w.solution).toLowerCase();
  const isViolatingCharter = queryText.includes("tüzüğe aykırı") || 
                             queryText.includes("yasa dışı") || 
                             queryText.includes("mevzuata aykırı") || 
                             queryText.includes("illegal") ||
                             (state.aiAnalysis?.summary && state.aiAnalysis.summary.toLowerCase().includes("tüzüğe aykırı")) ||
                             (state.aiAnalysis?.executiveSummary && state.aiAnalysis.executiveSummary.some(s => s.toLowerCase().includes("tüzüğe aykırı")));
                             
  if (aiScore < 70 || isViolatingCharter) {
    status = "rejected";
  }

  const comments = [];
  if (status === "rejected") {
    let reason = "Yapay Zeka Değerlendirmesi 70 barajının altında kalmıştır.";
    if (isViolatingCharter) {
      reason = "Proje içeriği kurum tüzüğüne veya yasal mevzuata aykırı bulunmuştur.";
    }
    comments.push({
      user: "Yapay Zeka Denetçisi",
      body: `DİKKAT: Bu proje otomatik olarak REDDEDİLMİŞTİR. Neden: ${reason}`,
      manager: true
    });
  } else {
    comments.push({
      user: "Borsa Bot",
      body: `${w.ideaType} kategorisinde piyasaya açıldı.`,
      manager: true
    });
  }

  return {
    id,
    title: state.aiAnalysis?.suggestedTitle || w.title,
    summary: w.oneSentence,
    problem: w.problem,
    solution: w.solution,
    type: w.ideaType,
    company: w.company,
    department: w.department,
    location: w.location,
    city: w.cityRegion.split("/")[0].trim(),
    authorId: user.id,
    authorLabel: w.anonymity === "İsmimle paylaş" ? user.name : w.anonymity === "Tam anonim" ? "Anonim Çalışan" : `Anonim ${user.role}`,
    anonymity: w.anonymity,
    visibility: w.visibility,
    status,
    estimatedImpact: w.impact,
    estimatedCost: w.cost,
    implementationTime: w.implementationTime,
    successMetric: w.successMetric,
    riskNotes: w.risks,
    communityScore: 42,
    strategicScore: 58,
    aiScore,
    credits: 0,
    supporters: 0,
    comments,
    tags: [w.department, w.ideaType, w.impact, w.cost],
    createdAt: new Date().toISOString().slice(0, 10),
    companyId: state.marketDraft.companyId || "is-new",
    marketCategory: "Fikir",
    marketTicker: `NIE-${String(state.ideas.length + 1).padStart(2, "0")}`,
    marketPrice: aiScore ? Math.round(aiScore * 2.2) : 180,
    marketChange: status === "rejected" ? 0 : 6.4,
    marketVolume: status === "rejected" ? 0 : 980,
    marketShares: 1400,
    marketSpark: status === "rejected" ? [34, 34, 34, 34, 34, 34, 34, 34] : [34, 42, 48, 56, 62, 68, 74, 82],
    files: w.files?.length ? w.files : defaultBundleFiles(`NIE-${String(state.ideas.length + 1).padStart(2, "0")}`, "Fikir")
  };
}

function createComplaintFromEntry() {
  const c = state.complaint;
  const user = currentUser();
  const id = `complaint-${Date.now()}`;
  const impactScore = c.impact === "Çok yüksek" ? 88 : c.impact === "Yüksek" ? 78 : c.impact === "Orta" ? 64 : 48;
  return {
    id,
    title: c.title,
    summary: c.body,
    problem: c.body,
    solution: c.expectation,
    type: "Şikayet / verimsizlik bildirimi",
    company: user.company,
    department: c.department,
    location: c.location,
    city: c.location.split(" ")[0],
    authorId: user.id,
    authorLabel: c.anonymity === "İsmimle paylaş" ? user.name : c.anonymity === "Tam anonim" ? "Anonim Çalışan" : `Anonim ${user.role}`,
    anonymity: c.anonymity,
    visibility: "İlgili departmanlar",
    status: "review",
    estimatedImpact: c.impact,
    estimatedCost: "Bilinmiyor",
    implementationTime: c.frequency === "Her gün" ? "Hemen denenebilir" : "1 ay",
    successMetric: "Verimsizlik bildiriminin tekrar sayısı ve çözüm süresi",
    riskNotes: "Şikayet kişiye değil sürece bağlanmalı; gerekirse moderasyon incelemesi yapılmalı.",
    communityScore: Math.max(38, impactScore - 18),
    strategicScore: impactScore,
    aiScore: Math.min(94, impactScore + 8),
    credits: 0,
    supporters: 0,
    comments: [
      { user: "AI Analiz", body: `${c.category} kategorisinde sınıflandırıldı. Benzer sinyallerle eşleştirilebilir.`, manager: true }
    ],
    tags: [c.category, c.department, c.impact, "Şikayet", "Verimsizlik"],
    createdAt: new Date().toISOString().slice(0, 10),
    companyId: "is-new",
    marketCategory: "Şikayet",
    marketTicker: `NIE-${String(state.ideas.length + 1).padStart(2, "0")}`,
    marketPrice: Math.round(impactScore * 2.1),
    marketChange: 3.8,
    marketVolume: 740,
    marketShares: 1100,
    marketSpark: [28, 34, 42, 46, 58, 61, 66, 72],
    files: c.files?.length ? c.files : defaultBundleFiles(`NIE-${String(state.ideas.length + 1).padStart(2, "0")}`, "Şikayet")
  };
}

function createMarketListing(context) {
  const draft = state.marketDraft;
  const company = companyById(draft.companyId || "is-new");
  const id = `market-${Date.now()}`;
  const baseScore = draft.category === "Proje" ? 86 : draft.category === "Araştırma" ? 79 : draft.category === "Şikayet" ? 76 : 74;
  return {
    id,
    title: draft.title.trim(),
    summary: draft.summary.trim(),
    problem: draft.summary.trim(),
    solution: "Detaylar dosya ve ekip değerlendirmesiyle netleştirilecek.",
    type: draft.category,
    company: company.name,
    companyId: company.id,
    department: context === "announcements" ? "Kurumsal İletişim" : context === "dashboard" ? "Veri&Bilgi" : "Borsa",
    location: company.campuses[0] || "Genel",
    city: company.cities[0] || "İstanbul",
    authorId: currentUser().id,
    authorLabel: currentUser().name,
    anonymity: "İsmimle paylaş",
    visibility: draft.scope,
    status: "new",
    estimatedImpact: draft.category === "Proje" ? "Yüksek" : "Orta",
    estimatedCost: "Bilinmiyor",
    implementationTime: "1 ay",
    successMetric: "Borsa talebi, yorum sayısı ve yönetici inceleme hızı",
    riskNotes: "Demo kayıt; dosya ve kapsam incelemesi sonrası netleşir.",
    communityScore: baseScore - 12,
    strategicScore: baseScore,
    aiScore: baseScore + 4,
    credits: 0,
    supporters: 0,
    comments: [
      { user: "Borsa Bot", body: `${draft.category} kategorisinde piyasaya açıldı.`, manager: true }
    ],
    tags: [draft.category, company.shortName, draft.scope, "Borsa"],
    createdAt: new Date().toISOString().slice(0, 10),
    marketCategory: draft.category,
    marketTicker: `NIE-${String(state.ideas.length + 1).padStart(2, "0")}`,
    marketPrice: draft.category === "Proje" ? 210 : draft.category === "Araştırma" ? 168 : draft.category === "Şikayet" ? 148 : 132,
    marketChange: draft.category === "Proje" ? 9.2 : draft.category === "Şikayet" ? 4.1 : 5.4,
    marketVolume: 640,
    marketShares: 1000,
    marketSpark: [26, 34, 39, 48, 55, 62, 68, 78],
    files: draft.files?.length ? draft.files : defaultBundleFiles(`NIE-${String(state.ideas.length + 1).padStart(2, "0")}`, draft.category),
    sourceContext: context
  };
}

async function analyzeIdea() {
  state.aiLoading = true;
  render();
  try {
    const response = await fetch("/api/ai/analyze-idea", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state.wizard)
    });
    state.aiAnalysis = await response.json();
  } catch (error) {
    state.aiAnalysis = {
      score: 82,
      suggestedTitle: state.wizard.title,
      summary: "AI analiz servisine ulaşılamadı. Demo yedek analizi gösteriliyor.",
      strengths: ["Problem net", "Pilotlanabilir"],
      missingPoints: ["Başlangıç verisi eklenmeli"],
      risks: ["Servis bağlantısı tekrar denenmeli"],
      pilotSuggestion: state.wizard.pilot,
      executiveSummary: ["Fikir değerlendirme kuyruğuna alınabilir."]
    };
  } finally {
    state.aiLoading = false;
    render();
  }
}

let quickFlowPointer = null;

document.addEventListener("click", event => {
  const pageButton = event.target.closest("[data-page]");
  if (pageButton) {
    const targetPage = pageButton.dataset.page;
    if (targetPage === "aiAssistantMenu") {
      state.aiAssistantOpen = true;
      state.mobileOpen = false;
      render();
      return;
    }
    const item = navItems.find(entry => entry.id === targetPage);
    if (!item || canAccess(item)) {
      state.previousPage = state.page;
      state.page = targetPage;
      state.mobileOpen = false;
      state.complaintBoxFeedback = "";
      state.suggestionsFeedback = "";
      state.suggestionsFeedbackError = "";
      render();
      resetScroll();
    }
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;

  const action = actionButton.dataset.action;

  // Yeniden Yapılandırma ve Polaj Aksiyonları
  if (action === "apply-to-idea") {
    const id = actionButton.dataset.id;
    state.selectedIdeaApplicationId = id;
    state.page = "applyPage";
    render();
    resetScroll();
    return;
  }

  if (action === "cancel-application") {
    state.selectedIdeaId = state.selectedIdeaApplicationId;
    state.page = "detail";
    render();
    resetScroll();
    return;
  }

  if (action === "create-challenge") {
    alert("Yarışma oluşturma yetkisi İnovasyon Ofisi yöneticilerindedir. Taleplerinizi info@fikirkovani.com adresine iletebilirsiniz.");
    return;
  }

  if (action === "search-cluster") {
    const query = actionButton.dataset.query;
    state.marketSearch = query;
    state.page = "quickFlow";
    state.ideaView = "cards";
    render();
    resetScroll();
    return;
  }

  if (action === "admin-add-user") {
    alert("Yeni kullanıcı ekleme talebi insan kaynakları senkronizasyonu ile otomatik yönetilir. Manuel ekleme yetkiniz bulunmamaktadır.");
    return;
  }

  if (action === "admin-inspect-moderation") {
    alert("Bu öğe yapay zeka tarafından moderasyon kuyruğuna alınmıştır. Hukuk ve Uyum Ofisi onayı bekleniyor.");
    return;
  }

  if (action === "quickEval-show-comments") {
    state.quickEvalShowComments = !state.quickEvalShowComments;
    render();
    return;
  }

  if (action === "submit-application-form") {
    const ideaId = state.selectedIdeaApplicationId;
    const idea = state.ideas.find(i => i.id === ideaId);
    if (!idea) {
      alert("Proje bulunamadı.");
      return;
    }

    const roleVal = document.getElementById("app-role")?.value || "";
    const timeCommitmentVal = document.getElementById("app-time")?.value || "";
    const budgetRequestVal = document.getElementById("app-budget")?.value || "";
    const motivationVal = document.getElementById("app-motivation")?.value || "";
    const contributionVal = document.getElementById("app-contribution")?.value || "";

    if (!motivationVal.trim() || !contributionVal.trim()) {
      alert("Lütfen katılım motivasyonunuzu ve katkı sunacağınız alanları belirtin.");
      return;
    }

    const user = currentUser();
    const app = {
      id: `app-${Date.now()}`,
      userId: user.id,
      userName: user.name,
      userRole: user.role || "Departman Yöneticisi",
      userPhoto: user.photo || profilePhotos[user.id] || "https://randomuser.me/api/portraits/men/75.jpg",
      motivation: motivationVal,
      contribution: contributionVal,
      role: roleVal,
      timeCommitment: timeCommitmentVal,
      body: motivationVal, // support older bindings if any
      budgetRequest: budgetRequestVal,
      status: "pending",
      date: new Date().toISOString().slice(0, 10)
    };

    if (!idea.applications) idea.applications = [];
    idea.applications.push(app);

    // Notify the owner of the idea
    state.notifications.unshift({
      id: `n-${Date.now()}`,
      type: "Fikir",
      title: "Yeni Başvuru Alındı",
      body: `${user.name}, '${idea.title}' projenize katılmak için başvurdu.`,
      unread: true
    });

    // Send direct chat message to the owner of the idea
    const ownerId = idea.authorId;
    if (ownerId && ownerId !== user.id) {
      const dmMsg = {
        userId: user.id,
        user: user.name,
        body: `Merhaba! '${idea.title}' projenize katılmak için yeni bir başvuru gönderdim. Profilimi ve detayları inceleyip görüşebiliriz.`,
        time: new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })
      };
      if (!state.directThreads[ownerId]) state.directThreads[ownerId] = [];
      state.directThreads[ownerId].push(dmMsg);
    }

    alert("Başvurunuz başarıyla iletildi!");
    state.selectedIdeaId = ideaId;
    state.page = "detail";
    render();
    resetScroll();
    return;
  }

  if (action === "accept-app") {
    const ideaId = actionButton.dataset.ideaId;
    const appId = actionButton.dataset.appId;
    const idea = state.ideas.find(i => i.id === ideaId);
    if (idea && idea.applications) {
      const app = idea.applications.find(a => a.id === appId);
      if (app) {
        app.status = "accepted";
        
        // Notify the applicant
        state.notifications.unshift({
          id: `n-${Date.now()}`,
          type: "Fikir",
          title: "Başvurunuz Kabul Edildi!",
          body: `'${idea.title}' projenize yaptığınız katılım başvurusu kabul edildi.`,
          unread: true
        });

        // Send direct message
        const owner = currentUser();
        const msg = {
          userId: owner.id,
          user: owner.name,
          body: `Merhaba! '${idea.title}' projesine yaptığınız katılım başvurusunu memnuniyetle kabul ettim. En kısa sürede detayları görüşmek üzere planlama yapalım.`,
          time: new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })
        };
        if (!state.directThreads[app.userId]) state.directThreads[app.userId] = [];
        state.directThreads[app.userId].push(msg);
        
        render();
      }
    }
    return;
  }

  if (action === "reject-app") {
    const ideaId = actionButton.dataset.ideaId;
    const appId = actionButton.dataset.appId;
    const idea = state.ideas.find(i => i.id === ideaId);
    if (idea && idea.applications) {
      const app = idea.applications.find(a => a.id === appId);
      if (app) {
        app.status = "rejected";
        
        // Notify the applicant
        state.notifications.unshift({
          id: `n-${Date.now()}`,
          type: "Fikir",
          title: "Başvuru Sonucu",
          body: `'${idea.title}' projesine yaptığınız katılım başvurusu olumsuz sonuçlandı.`,
          unread: true
        });
        
        render();
      }
    }
    return;
  }

  if (action === "submit-new-idea-form") {
    const titleVal = document.getElementById("wizard-title")?.value || "";
    const oneSentenceVal = document.getElementById("wizard-oneSentence")?.value || "";
    const marketCategoryVal = document.getElementById("wizard-marketCategory")?.value || "Fikir";
    const areaVal = document.getElementById("wizard-area")?.value || "Diğer";
    const problemVal = document.getElementById("wizard-problem")?.value || "";
    const solutionVal = document.getElementById("wizard-solution")?.value || "";
    const companyVal = document.getElementById("wizard-company")?.value || "Bağımsız";
    const departmentVal = document.getElementById("wizard-department")?.value || "";
    const impactVal = document.getElementById("wizard-impact")?.value || "Orta";
    const costVal = document.getElementById("wizard-cost")?.value || "Orta";
    const implementationTimeVal = document.getElementById("wizard-implementationTime")?.value || "3 ay";
    const successMetricVal = document.getElementById("wizard-successMetric")?.value || "";
    const visibilityVal = document.getElementById("wizard-visibility")?.value || "Holding geneli";
    const anonymityVal = document.getElementById("wizard-anonymity")?.value || "İsmimle paylaş";

    if (!titleVal.trim() || !oneSentenceVal.trim()) {
      alert("Lütfen en azından Başlık ve Kısa Açıklama alanlarını doldurun.");
      return;
    }

    const user = currentUser();
    const id = `idea-${Date.now()}`;
    
    let aiScoreBase = 70;
    if (impactVal === "Yüksek") aiScoreBase += 15;
    if (impactVal === "Orta") aiScoreBase += 5;
    if (costVal === "Düşük") aiScoreBase += 10;
    if (costVal === "Orta") aiScoreBase += 5;
    
    const mockAiScore = Math.min(98, Math.max(50, aiScoreBase + Math.floor(Math.random() * 5)));
    
    const newIdea = {
      id,
      title: titleVal,
      summary: oneSentenceVal,
      problem: problemVal,
      solution: solutionVal,
      type: marketCategoryVal,
      company: companyVal,
      department: departmentVal,
      location: user.location || "İstanbul Genel Müdürlük",
      city: user.city || "İstanbul",
      authorId: user.id,
      authorLabel: anonymityVal === "İsmimle paylaş" ? user.name : anonymityVal === "Tam anonim" ? "Anonim Çalışan" : `Anonim ${user.role || 'Çalışan'}`,
      anonymity: anonymityVal,
      visibility: visibilityVal,
      status: "new",
      estimatedImpact: impactVal,
      estimatedCost: costVal,
      implementationTime: implementationTimeVal,
      successMetric: successMetricVal,
      riskNotes: "Hızlı geliştirme ve erken pilotlama önerilir.",
      communityScore: 50,
      strategicScore: mockAiScore - 10,
      aiScore: mockAiScore,
      credits: 0,
      supporters: 0,
      comments: [],
      tags: [departmentVal || "İnovasyon", marketCategoryVal, impactVal + " Etki", costVal + " Maliyet"],
      createdAt: new Date().toISOString().slice(0, 10),
      companyId: companyVal === "Bağımsız" ? "independent" : (affiliationCompanies.find(c => c.name === companyVal)?.id || "is-new"),
      marketCategory: marketCategoryVal,
      marketTicker: `NIE-${String(state.ideas.length + 1).padStart(2, "0")}`,
      marketPrice: Math.round(mockAiScore * 2.2),
      marketChange: 0.0,
      marketVolume: 0,
      marketShares: 1000,
      marketSpark: [mockAiScore, mockAiScore, mockAiScore, mockAiScore],
      files: defaultBundleFiles(`NIE-${String(state.ideas.length + 1).padStart(2, "0")}`, marketCategoryVal),
      applications: []
    };

    state.ideas.unshift(newIdea);
    state.selectedIdeaId = id;
    state.page = "detail";
    rewardMarketBudget(250, "Yeni Fikir Girişi Ödülü");
    render();
    resetScroll();
    return;
  }

  if (action === "toggle-announcement-composer") {
    state.showAnnouncementComposer = !state.showAnnouncementComposer;
    render();
    return;
  }

  if (action === "toggle-data-composer") {
    state.showDataComposer = !state.showDataComposer;
    render();
    return;
  }

  if (action === "view-report") {
    state.selectedIdeaReportId = actionButton.dataset.id;
    state.reportType = actionButton.dataset.type;
    render();
    return;
  }

  if (action === "close-report-modal") {
    state.selectedIdeaReportId = null;
    render();
    return;
  }

  if (action === "buy-market-qty" || action === "sell-market-qty") {
    const ideaId = actionButton.dataset.id;
    const qtyInput = document.querySelector(`[data-trade-qty="${ideaId}"]`);
    const quantity = qtyInput ? Math.max(1, parseInt(qtyInput.value) || 1) : 1;
    const idea = state.ideas.find(item => item.id === ideaId);
    if (idea) {
      if (idea.status === "rejected") { alert("Bu proje elendiği için işlem yapılamaz!"); return; }
      const price = marketPrice(idea);
      const totalPrice = price * quantity;
      if (action === "buy-market-qty") {
        if (state.marketBudget >= totalPrice) {
          state.marketBudget -= totalPrice;
          state.marketHoldings[idea.id] = (state.marketHoldings[idea.id] || 0) + quantity;
          idea.marketChange = Number(idea.marketChange || 0) + 0.7 * quantity;
          idea.marketVolume = Number(idea.marketVolume || 0) + 120 * quantity;
          state.marketSelectedId = idea.id;
          
          if (!state.investmentLedger) state.investmentLedger = [];
          state.investmentLedger.push({
            userId: currentUser().id,
            userName: currentUser().name,
            ideaId: idea.id,
            ideaTitle: idea.title,
            amount: totalPrice,
            quantity: quantity,
            date: new Date().toLocaleDateString("tr-TR")
          });
          if (!state.marketInvestedAmount) state.marketInvestedAmount = {};
          state.marketInvestedAmount[idea.id] = (state.marketInvestedAmount[idea.id] || 0) + totalPrice;

          state.quickFlowFeedback = `${quantity} birim ${idea.marketTicker} alındı. Bütçe ${formatCurrency(state.marketBudget)}.`;
        } else {
          alert("Yetersiz bütçe!");
        }
      } else {
        const owned = state.marketHoldings[idea.id] || 0;
        if (owned >= quantity) {
          const ownedBefore = owned;
          state.marketHoldings[idea.id] -= quantity;
          state.marketBudget += price * quantity;
          idea.marketChange = Number(idea.marketChange || 0) - 0.3 * quantity;
          idea.marketVolume = Number(idea.marketVolume || 0) + 80 * quantity;
          state.marketSelectedId = idea.id;

          if (!state.marketInvestedAmount) state.marketInvestedAmount = {};
          const fraction = quantity / (ownedBefore || 1);
          state.marketInvestedAmount[idea.id] = Math.max(0, (state.marketInvestedAmount[idea.id] || 0) * (1 - fraction));

          state.quickFlowFeedback = `${quantity} birim ${idea.marketTicker} satıldı. Bütçe ${formatCurrency(state.marketBudget)}.`;
        } else {
          alert("Yetersiz destek birimi!");
        }
      }
      render();
    }
    return;
  }

  if (action === "toggle-card-comments") {
    state.expandedComments = state.expandedComments || {};
    state.expandedComments[actionButton.dataset.id] = !state.expandedComments[actionButton.dataset.id];
    render();
    return;
  }

  if (action === "submit-card-comment") {
    const id = actionButton.dataset.id;
    const type = actionButton.dataset.type;
    const input = document.querySelector(`[data-comment-input="${id}"]`);
    if (input && input.value.trim()) {
      const text = input.value.trim();
      const commentObj = { user: currentUser().name, body: text, manager: currentUser().isManager, date: "Az önce" };
      
      if (type === "announcement") {
        const item = state.announcements.find(a => a.id === id);
        if (item) { if (!item.comments) item.comments = []; item.comments.push(commentObj); }
      } else if (type === "dataset") {
        const item = state.dataSets.find(d => d.id === id);
        if (item) { if (!item.comments) item.comments = []; item.comments.push(commentObj); }
      } else if (type === "idea") {
        const item = state.ideas.find(i => i.id === id);
        if (item) { if (!item.comments) item.comments = []; item.comments.push(commentObj); }
      } else if (type === "social") {
        const item = state.socialPosts.find(s => s.id === id);
        if (item) {
          if (!item.comments) item.comments = [];
          item.comments.push({
            id: `sc-${Date.now()}`,
            userName: currentUser().name,
            userAvatar: currentUser().photo || "",
            body: text,
            date: "Az önce"
          });
        }
      }
      render();
    }
    return;
  }

  if (action === "submit-dataset") {
    const title = document.getElementById("data-composer-title")?.value;
    const type = document.getElementById("data-composer-type")?.value;
    const companyId = document.getElementById("data-composer-company")?.value;
    const area = document.getElementById("data-composer-area")?.value;
    const importance = parseInt(document.getElementById("data-composer-importance")?.value) || 3;
    const summary = document.getElementById("data-composer-summary")?.value;
    
    if (title && summary) {
      state.dataSets = state.dataSets || [];
      state.dataSets.unshift({
        id: `ds-${Date.now()}`,
        title: title.trim(),
        summary: summary.trim(),
        sharedBy: currentUser().name,
        companyId,
        type,
        area,
        importanceScore: importance,
        date: new Date().toISOString().split("T")[0],
        comments: [],
        likes: 0,
        downloads: 0
      });
      state.showDataComposer = false;
      rewardMarketBudget(300, "Yeni veri seti paylaşım ödülü");
      render();
    } else {
      alert("Lütfen başlık ve açıklama alanlarını doldurun.");
    }
    return;
  }

  if (action === "submit-announcement") {
    const title = document.getElementById("ann-composer-title")?.value;
    const type = document.getElementById("ann-composer-type")?.value;
    const companyId = document.getElementById("ann-composer-company")?.value;
    const area = document.getElementById("ann-composer-area")?.value;
    const importance = parseInt(document.getElementById("ann-composer-importance")?.value) || 3;
    const body = document.getElementById("ann-composer-body")?.value;
    
    if (title && body) {
      state.announcements = state.announcements || [];
      state.announcements.unshift({
        id: `ann-${Date.now()}`,
        title: title.trim(),
        body: body.trim(),
        authorId: currentUser().id,
        companyId,
        type,
        area,
        importanceScore: importance,
        date: new Date().toISOString().split("T")[0],
        comments: [],
        likes: 0
      });
      state.showAnnouncementComposer = false;
      rewardMarketBudget(400, "Yeni duyuru yayınlama ödülü");
      render();
    } else {
      alert("Lütfen başlık ve duyuru metnini doldurun.");
    }
    return;
  }

  if (action === "like-announcement") {
    const item = state.announcements.find(a => a.id === actionButton.dataset.id);
    if (item) {
      item.likes = (item.likes || 0) + 1;
      render();
    }
    return;
  }

  if (action === "like-dataset") {
    const item = state.dataSets.find(d => d.id === actionButton.dataset.id);
    if (item) {
      item.likes = (item.likes || 0) + 1;
      render();
    }
    return;
  }

  if (action === "download-dataset") {
    const item = state.dataSets.find(d => d.id === actionButton.dataset.id);
    if (item) {
      item.downloads = (item.downloads || 0) + 1;
      alert(`"${item.title}" veri seti başarıyla indirildi (Simülasyon).`);
      render();
    }
    return;
  }

  if (action === "like-social-post") {
    const post = state.socialPosts.find(p => p.id === actionButton.dataset.id);
    if (post) {
      post.likedByMe = !post.likedByMe;
      post.likes = (post.likes || 0) + (post.likedByMe ? 1 : -1);
      render();
    }
    return;
  }

  if (action === "vote-rich-poll") {
    const context = actionButton.dataset.context;
    const optionIndex = Number(actionButton.dataset.option || 0);
    const target = context === "message"
      ? findRichMessageById(actionButton.dataset.id)
      : state.socialPosts.find(p => p.id === actionButton.dataset.id);
    const option = target?.poll?.options?.[optionIndex];
    if (option) {
      option.votes = Number(option.votes || 0) + 1;
      render();
    }
    return;
  }

  if (action === "submit-social-post") {
    const textarea = document.getElementById("social-composer-textarea");
    const attachedPhoto = state.socialPhotoDraft;
    if ((textarea && textarea.value.trim()) || attachedPhoto) {
      const text = textarea?.value?.trim() || "";
      const me = currentUser();
      state.socialPosts = state.socialPosts || [];
      state.socialPosts.unshift({
        id: `sp-${Date.now()}`,
        userId: me.id,
        userName: me.name,
        userAvatar: me.photo || "",
        userBio: me.title || "Platform Üyesi",
        body: text || "Fotoğraf notu paylaşıldı.",
        date: "Şimdi",
        likes: 0,
        likedByMe: false,
        comments: [],
        ...(attachedPhoto ? {
          imageUrl: attachedPhoto.objectUrl,
          imageCaption: attachedPhoto.name
        } : {})
      });
      if (textarea) textarea.value = "";
      state.socialPhotoDraft = null;
      rewardMarketBudget(200, "Sosyal paylaşım ödülü");
      render();
    }
    return;
  }

  if (action === "submit-social-rich-post") {
    const textarea = document.getElementById("social-composer-textarea");
    const text = textarea?.value?.trim() || "";
    state.socialPosts = state.socialPosts || [];
    state.socialPosts.unshift(createRichSocialPost(actionButton.dataset.kind || "poll", text, state.socialPhotoDraft));
    if (textarea) textarea.value = "";
    state.socialPhotoDraft = null;
    rewardMarketBudget(200, "Sosyal paylaşım ödülü");
    render();
    return;
  }

  if (action === "clear-social-photo") {
    state.socialPhotoDraft = null;
    render();
    return;
  }

  if (action === "connect-user") {
    const id = actionButton.dataset.id;
    if (id && !state.connectedUserIds.includes(id)) {
      state.connectedUserIds.push(id);
      render();
    }
    return;
  }

  if (action === "view-profile") {
    state.profileUserId = actionButton.dataset.userId;
    state.page = "profile";
    render();
    resetScroll();
    return;
  }

  if (action === "view-profile-name") {
    const name = actionButton.dataset.name;
    const person = peopleDirectory.find(p => p.name === name);
    if (person) {
      state.profileUserId = person.id;
      state.page = "profile";
      render();
      resetScroll();
    }
    return;
  }

  if (action === "set-profile-tab") {
    state.profileTab = actionButton.dataset.tab;
    render();
    return;
  }

  if (action === "start-chat-from-profile" || action === "start-direct-chat-from-social") {
    state.selectedDirectPersonId = actionButton.dataset.userId;
    state.page = "messages";
    render();
    resetScroll();
    return;
  }

  if (action === "save-profile-settings") {
    const name = document.getElementById("settings-name")?.value;
    const photo = document.getElementById("settings-photo")?.value;
    const bio = document.getElementById("settings-bio")?.value;
    const cv = document.getElementById("settings-cv")?.value;
    const companyId = document.getElementById("settings-company")?.value;
    
    const user = currentUser();
    if (user && name) {
      user.name = name.trim();
      user.photo = photo.trim();
      user.bio = bio.trim();
      user.cv = cv.trim();
      user.companyId = companyId;
      
      const dirEntry = peopleDirectory.find(p => p.id === user.id);
      if (dirEntry) {
        dirEntry.name = user.name;
        dirEntry.photo = user.photo;
        dirEntry.bio = user.bio;
        dirEntry.cv = user.cv;
        dirEntry.companyId = user.companyId;
      }
      
      alert("Profil bilgileriniz başarıyla güncellendi.");
      render();
    }
    return;
  }

  if (action === "set-teams-tab") {
    state.teamsTab = actionButton.dataset.tab;
    render(); resetScroll(); return;
  }

  if (action === "start-create-team") {
    state.teamsView = "create";
    state.teamCreateStep = 0;
    state.teamDraft = { name: "", description: "", area: borsaAreas[0], ideaId: "", roles: [
      { id: "new-r1", title: "Ürün Yöneticisi", icon: "briefcase", filled: false, userId: null, skills: [] },
      { id: "new-r2", title: "Mühendis", icon: "code-2", filled: false, userId: null, skills: [] }
    ]};
    render(); resetScroll(); return;
  }

  if (action === "open-team") {
    state.selectedTeamId = actionButton.dataset.id;
    state.teamsView = "detail";
    state.teamFillRoleId = null;
    render(); resetScroll(); return;
  }

  if (action === "back-to-teams") {
    state.teamsView = "list";
    state.teamFillRoleId = null;
    render(); resetScroll(); return;
  }

  if (action === "team-create-next") {
    state.teamCreateStep = Math.min(state.teamCreateStep + 1, 2);
    render(); return;
  }

  if (action === "team-create-back") {
    state.teamCreateStep = Math.max(state.teamCreateStep - 1, 0);
    render(); return;
  }

  if (action === "team-create-submit") {
    const draft = state.teamDraft;
    const newTeam = {
      id: `team-${Date.now()}`,
      name: draft.name || "Yeni Ekip",
      description: draft.description || "",
      area: draft.area,
      ideaId: draft.ideaId || null,
      createdBy: currentUser().id,
      status: draft.roles.some(r => !r.filled) ? "forming" : "active",
      createdAt: new Date().toISOString().split("T")[0],
      roles: draft.roles.map((r, i) => ({ ...r, id: `nr-${Date.now()}-${i}`, filled: !!r.userId })),
      messages: [{ own: true, body: `${draft.name} ekibini kurdum! Herkese hoş geldiniz.`, time: "Az önce" }],
      tags: [draft.area.split(" ")[0]]
    };
    state.teams.unshift(newTeam);
    state.selectedTeamId = newTeam.id;
    state.teamsView = "detail";
    state.teamCreateStep = 0;
    render(); resetScroll(); return;
  }

  if (action === "use-team-template") {
    const tmpl = teamRoleTemplates.find(t => t.id === actionButton.dataset.template);
    if (tmpl) {
      state.teamDraft.roles = tmpl.roles.map((r, i) => ({
        id: `new-r${Date.now()}-${i}`, title: r.title, icon: r.icon, filled: false, userId: null, skills: r.skills || []
      }));
      render();
    }
    return;
  }

  if (action === "add-draft-role") {
    state.teamDraft.roles.push({ id: `new-r${Date.now()}`, title: "Yeni Rol", icon: "user", filled: false, userId: null, skills: [] });
    render(); return;
  }

  if (action === "remove-draft-role") {
    const idx = parseInt(actionButton.dataset.idx, 10);
    state.teamDraft.roles.splice(idx, 1);
    render(); return;
  }

  if (action === "unassign-draft-role") {
    const idx = parseInt(actionButton.dataset.idx, 10);
    if (state.teamDraft.roles[idx]) { state.teamDraft.roles[idx].userId = null; state.teamDraft.roles[idx].filled = false; }
    render(); return;
  }

  if (action === "send-team-message") {
    const teamId = actionButton.dataset.id;
    const input = document.querySelector("[data-team-chat-draft]");
    const body = (input ? input.value : state.teamChatDraft).trim();
    if (!body) return;
    const team = state.teams.find(t => t.id === teamId);
    if (team) {
      team.messages.push({ own: true, body, time: "Az önce" });
      state.teamChatDraft = "";
      render();
      requestAnimationFrame(() => {
        const thread = document.getElementById("team-chat-thread");
        if (thread) thread.scrollTop = thread.scrollHeight;
      });
    }
    return;
  }

  if (action === "fill-team-role") {
    state.teamFillRoleId = state.teamFillRoleId === actionButton.dataset.roleId ? null : actionButton.dataset.roleId;
    render(); return;
  }

  if (action === "close-person-picker") {
    state.teamFillRoleId = null;
    render(); return;
  }

  if (action === "assign-person-to-role") {
    const team = state.teams.find(t => t.id === actionButton.dataset.teamId);
    if (team) {
      const role = team.roles.find(r => r.id === actionButton.dataset.roleId);
      if (role) { role.userId = actionButton.dataset.userId; role.filled = true; }
      state.teamFillRoleId = null;
      render();
    }
    return;
  }

  if (action === "remove-role-member") {
    const team = state.teams.find(t => t.id === actionButton.dataset.teamId);
    if (team) {
      const role = team.roles.find(r => r.id === actionButton.dataset.roleId);
      if (role) { role.userId = null; role.filled = false; }
      render();
    }
    return;
  }

  if (action === "add-quick-role") {
    const team = state.teams.find(t => t.id === actionButton.dataset.teamId);
    if (team) {
      const title = prompt("Yeni rol adı:");
      if (title) {
        team.roles.push({ id: `qr-${Date.now()}`, title, icon: "user", filled: false, userId: null, skills: [] });
        render();
      }
    }
    return;
  }

  if (action === "join-team-request") {
    const team = state.teams.find(t => t.id === actionButton.dataset.id);
    if (team) {
      alert(`"${team.name}" ekibine katılım isteğin gönderildi! Ekip kurucusu onaylamasını bekleyin.`);
    }
    return;
  }

  if (action === "user-logout") {
    state.loggedIn = false;
    state.page = "quickFlow";
    render();
    resetScroll();
    return;
  }

  if (action === "toggle-ai-assistant") {
    state.aiAssistantOpen = !state.aiAssistantOpen;
    render();
    return;
  }

  if (action === "submit-ai-chat") {
    const input = document.getElementById("ai-chat-input");
    if (input && input.value.trim()) {
      const text = input.value.trim();
      input.value = "";
      handleAIChatResponse(text);
    }
    return;
  }

  if (action === "ai-suggest") {
    const prompt = actionButton.dataset.prompt;
    if (prompt) {
      handleAIChatResponse(prompt);
    }
    return;
  }

  if (action === "mark-all-read") {
    state.notifications.forEach(n => n.unread = false);
    render();
    return;
  }

  if (action === "read-notification") {
    const notif = state.notifications.find(n => n.id === actionButton.dataset.id);
    if (notif) {
      notif.unread = false;
      render();
    }
    return;
  }

  if (action === "quickEval-like") {
    const ideaId = actionButton.dataset.id;
    const cardEl = document.getElementById("tinder-active-card");
    if (cardEl) {
      const likeOverlay = cardEl.querySelector(".like-overlay");
      if (likeOverlay) {
        likeOverlay.style.transition = "opacity 0.2s ease-out, transform 0.2s ease-out";
        likeOverlay.style.opacity = 1;
        likeOverlay.style.transform = "rotate(-12deg) scale(1.2)";
      }
      cardEl.style.transition = "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s";
      cardEl.style.transform = "translate(220%, 30px) rotate(45deg) scale(1.05)";
      cardEl.style.opacity = "0";
      
      const bgCard1 = document.querySelector(".card-bg-1");
      const bgCard2 = document.querySelector(".card-bg-2");
      if (bgCard1) {
        bgCard1.style.transition = "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)";
        bgCard1.style.transform = "translateY(0px) scale(1)";
      }
      if (bgCard2) {
        bgCard2.style.transition = "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)";
        bgCard2.style.transform = "translateY(12px) scale(0.96)";
      }
      
      setTimeout(() => {
        handleQuickEvalSwipe(ideaId, "like");
      }, 350);
    } else {
      handleQuickEvalSwipe(ideaId, "like");
    }
    return;
  }

  if (action === "quickEval-dislike") {
    const ideaId = actionButton.dataset.id;
    const cardEl = document.getElementById("tinder-active-card");
    if (cardEl) {
      const passOverlay = cardEl.querySelector(".pass-overlay");
      if (passOverlay) {
        passOverlay.style.transition = "opacity 0.2s ease-out, transform 0.2s ease-out";
        passOverlay.style.opacity = 1;
        passOverlay.style.transform = "rotate(12deg) scale(1.2)";
      }
      cardEl.style.transition = "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s";
      cardEl.style.transform = "translate(-220%, 30px) rotate(-45deg) scale(1.05)";
      cardEl.style.opacity = "0";
      
      const bgCard1 = document.querySelector(".card-bg-1");
      const bgCard2 = document.querySelector(".card-bg-2");
      if (bgCard1) {
        bgCard1.style.transition = "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)";
        bgCard1.style.transform = "translateY(0px) scale(1)";
      }
      if (bgCard2) {
        bgCard2.style.transition = "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)";
        bgCard2.style.transform = "translateY(12px) scale(0.96)";
      }
      
      setTimeout(() => {
        handleQuickEvalSwipe(ideaId, "dislike");
      }, 350);
    } else {
      handleQuickEvalSwipe(ideaId, "dislike");
    }
    return;
  }

  if (action === "quickEval-comment-submit") {
    const ideaId = actionButton.dataset.id;
    if (state.quickEvalCommentDraft && state.quickEvalCommentDraft.trim()) {
      const idea = state.ideas.find(item => item.id === ideaId);
      if (idea) {
        if (!idea.comments) idea.comments = [];
        idea.comments.push({
          user: currentUser().name,
          body: state.quickEvalCommentDraft.trim(),
          manager: currentUser().isManager
        });
      }
      state.quickEvalCommentDraft = "";
      render();
    }
    return;
  }

  if (action === "quickEval-restart") {
    state.quickEvalLikes = {};
    render();
    return;
  }

  if (action === "open-bundle-file") {
    state.fileInspector = {
      ideaId: actionButton.dataset.id,
      fileName: actionButton.dataset.file
    };
    render();
    return;
  }

  if (action === "open-file-inspector") {
    state.fileInspector = {
      ideaId: state.marketSelectedId || state.ideas[0]?.id,
      fileName: actionButton.dataset.fileName || actionButton.dataset.file
    };
    render();
    return;
  }

  if (action === "close-file-inspector") {
    state.fileInspector = null;
    render();
    return;
  }

  if (action === "onboarding-next") {
    state.onboardingStep = Math.min(2, state.onboardingStep + 1);
    state.loginError = "";
    render();
    return;
  }

  if (action === "onboarding-prev") {
    state.onboardingStep = Math.max(0, state.onboardingStep - 1);
    state.loginError = "";
    render();
    return;
  }

  if (action === "copy-demo-key") {
    state.accessKeyInput = demoAccessKey;
    navigator.clipboard?.writeText(demoAccessKey).catch(() => {});
    state.loginError = "";
    render();
    return;
  }

  if (action === "validate-key") {
    if (state.accessKeyInput.trim().toLocaleUpperCase("tr-TR") === demoAccessKey) {
      state.accessKeyAccepted = true;
      state.onboardingStep = 2;
      state.loginError = "";
    } else {
      state.loginError = "Erişim kodunu aşağıdaki satırdan doldurabilirsin.";
    }
    render();
    return;
  }

  if (action === "select-login-user") {
    state.selectedLoginUserId = actionButton.dataset.id;
    render();
    return;
  }

  if (action === "login") {
    if (!state.accessKeyAccepted && state.accessKeyInput.trim().toLocaleUpperCase("tr-TR") !== demoAccessKey) {
      state.onboardingStep = 1;
      state.loginError = "Exchange'e girmek için demo key gerekiyor.";
      render();
      return;
    }

    state.accessKeyAccepted = true;
    state.currentUserId = state.selectedLoginUserId;
    state.loggedIn = true;
    render();
    resetScroll();
  }

  if (action === "toggle-menu") {
    state.mobileOpen = !state.mobileOpen;
    render();
  }

  if (action === "close-menu") {
    state.mobileOpen = false;
    render();
  }

  if (action === "toggle-theme") {
    state.theme = state.theme === "light" ? "dark" : "light";
    render();
  }

  if (action === "set-view") {
    state.ideaView = actionButton.dataset.view;
    render();
  }

  if (action === "set-borsa-layout") {
    state.ideaView = actionButton.dataset.layout;
    render();
  }

  if (action === "set-market-panel") {
    state.marketPanel = actionButton.dataset.panel || "home";
    if (state.marketPanel === "watchlist") state.quickFlowFeedback = "Watchlist ve filtreler açıldı.";
    if (state.marketPanel === "discover") state.quickFlowFeedback = "AI News ve revaçta haberler açıldı.";
    if (state.marketPanel === "wallet") state.quickFlowFeedback = "Seviye paraları görüntüleniyor.";
    render();
    return;
  }

  if (action === "select-market-asset") {
    state.marketSelectedId = actionButton.dataset.id || state.marketSelectedId;
    state.marketPanel = "home";
    state.quickFlowFeedback = `${state.ideas.find(item => item.id === state.marketSelectedId)?.marketTicker || "Varlık"} grafiği açıldı.`;
    render();
    return;
  }

  if (action === "set-market-range") {
    state.marketRange = actionButton.dataset.range || "1D";
    state.quickFlowFeedback = `${state.marketRange} zaman aralığına geçildi.`;
    render();
    return;
  }

  if (action === "set-market-indicator") {
    state.marketIndicator = actionButton.dataset.indicator || "MACD";
    state.quickFlowFeedback = `${state.marketIndicator} indikatörü aktif.`;
    render();
    return;
  }

  if (action === "adjust-order-size") {
    state.marketOrderSize = Math.max(1, Math.min(25, state.marketOrderSize + Number(actionButton.dataset.delta || 0)));
    render();
    return;
  }

  if (action === "set-market-category") {
    state.marketCategoryFilter = actionButton.dataset.category || "Tümü";
    state.marketPanel = "watchlist";
    render();
  }

  if (action === "open-market-composer") {
    state.marketComposerContext = actionButton.dataset.context || state.page || "quickFlow";
    resetMarketDraft(state.marketComposerContext);
    render();
    return;
  }

  if (action === "close-market-composer") {
    state.marketComposerContext = "";
    resetMarketDraft();
    render();
    return;
  }

  if (action === "submit-market-listing") {
    if (state.marketDraft.title.trim() && state.marketDraft.summary.trim()) {
      const listing = createMarketListing(actionButton.dataset.context || state.marketComposerContext || "quickFlow");
      state.ideas.unshift(listing);
      state.marketCategoryFilter = listing.marketCategory;
      state.affiliationFilter = listing.companyId;
      state.marketComposerContext = "";
      resetMarketDraft();
      rewardMarketBudget(marketRewardByCategory[listing.marketCategory] || 500, `Yeni ${listing.marketCategory} ödülü`);
      state.page = actionButton.dataset.context === "announcements" ? "announcements" : actionButton.dataset.context === "profile" ? "profile" : "quickFlow";
      render();
      resetScroll();
    }
    return;
  }

  if (action === "buy-market" || action === "sell-market") {
    const idea = state.ideas.find(item => item.id === actionButton.dataset.id);
    if (idea) {
      if (idea.status === "rejected") { alert("Bu proje elendiği için işlem yapılamaz!"); return; }
      const price = marketPrice(idea);
      const quantity = Math.max(1, Number(actionButton.dataset.quantity || 1));
      const totalPrice = price * quantity;
      if (action === "buy-market" && state.marketBudget >= totalPrice) {
        state.marketBudget -= totalPrice;
        state.marketHoldings[idea.id] = (state.marketHoldings[idea.id] || 0) + quantity;
        idea.marketChange = Number(idea.marketChange || 0) + 0.7 * quantity;
        idea.marketVolume = Number(idea.marketVolume || 0) + 120 * quantity;
        state.marketSelectedId = idea.id;
        
        if (!state.investmentLedger) state.investmentLedger = [];
        state.investmentLedger.push({
          userId: currentUser().id,
          userName: currentUser().name,
          ideaId: idea.id,
          ideaTitle: idea.title,
          amount: totalPrice,
          quantity: quantity,
          date: new Date().toLocaleDateString("tr-TR")
        });
        if (!state.marketInvestedAmount) state.marketInvestedAmount = {};
        state.marketInvestedAmount[idea.id] = (state.marketInvestedAmount[idea.id] || 0) + totalPrice;

        state.quickFlowFeedback = `${quantity} birim ${idea.marketTicker} alındı. Bütçe ${formatCurrency(state.marketBudget)}.`;
      }
      if (action === "sell-market" && (state.marketHoldings[idea.id] || 0) > 0) {
        const sellQuantity = Math.min(quantity, state.marketHoldings[idea.id] || 0);
        const ownedBefore = state.marketHoldings[idea.id] || 0;
        state.marketHoldings[idea.id] -= sellQuantity;
        state.marketBudget += price * sellQuantity;
        idea.marketChange = Number(idea.marketChange || 0) - 0.3 * sellQuantity;
        idea.marketVolume = Number(idea.marketVolume || 0) + 80 * sellQuantity;
        state.marketSelectedId = idea.id;

        if (!state.marketInvestedAmount) state.marketInvestedAmount = {};
        const fraction = sellQuantity / (ownedBefore || 1);
        state.marketInvestedAmount[idea.id] = Math.max(0, (state.marketInvestedAmount[idea.id] || 0) * (1 - fraction));

        state.quickFlowFeedback = `${sellQuantity} birim ${idea.marketTicker} satıldı. Bütçe ${formatCurrency(state.marketBudget)}.`;
      }
      render();
    }
    return;
  }

  if (action === "reset-filters") {
    Object.assign(state.filters, {
      search: "",
      company: "Tümü",
      department: "Tümü",
      status: "Tümü",
      type: "Tümü",
      scope: "Tümü",
      sort: "En yeni"
    });
    render();
  }

  if (action === "clear-borsa-filters") {
    state.marketSearch = "";
    state.filters.company = "Tümü";
    state.filters.league = "Tümü";
    state.filters.area = "Tümü";
    state.marketSort = "En yeni";
    render();
    return;
  }

  if (action === "clear-data-filters") {
    state.filters.dataSearch = "";
    state.filters.dataTab = "Tümü";
    state.filters.dataCompany = "Tümü";
    state.filters.dataArea = "Tümü";
    state.filters.dataSort = "En yeni";
    render();
    return;
  }

  if (action === "clear-announcement-filters") {
    state.filters.announcementSearch = "";
    state.filters.announcementTab = "Tümü";
    state.filters.announcementCompany = "Tümü";
    state.filters.announcementArea = "Tümü";
    state.filters.announcementSort = "En yeni";
    render();
    return;
  }

  if (action === "clear-challenge-filters") {
    state.filters.challengeSearch = "";
    state.filters.challengeSector = "Tümü";
    state.filters.challengeStatus = "Tümü";
    state.filters.challengeReward = "Tümü";
    render();
    return;
  }

  if (action === "clear-agenda-filters") {
    state.filters.agendaSearch = "";
    state.filters.agendaCategory = "Tümü";
    state.filters.agendaTag = "Tümü";
    render();
    return;
  }

  if (action === "submit-agenda-item") {
    if (!currentUser().isManager && !currentUser().isAdmin) return;
    const draft = state.agendaDraft;
    const title = draft.title.trim();
    const body = draft.body.trim();
    if (!title || !body) {
      alert("Gündem için başlık ve açıklama gerekli.");
      return;
    }

    const agendaItem = {
      id: state.agendaEditId || `ag-${Date.now()}`,
      title,
      body,
      category: draft.category || "Strateji",
      date: draft.date || new Date().toISOString().slice(0, 10),
      tags: String(draft.tags || "")
        .split(",")
        .map(tag => tag.trim())
        .filter(Boolean),
      author: currentUser().name
    };

    if (state.agendaEditId) {
      const index = state.agendaItems.findIndex(item => item.id === state.agendaEditId);
      if (index >= 0) state.agendaItems[index] = agendaItem;
    } else {
      state.agendaItems.unshift(agendaItem);
    }

    state.agendaEditId = null;
    state.agendaDraft = {
      title: "",
      body: "",
      category: "Strateji",
      tags: "pilot, operasyon",
      date: new Date().toISOString().slice(0, 10)
    };
    render();
    return;
  }

  if (action === "edit-agenda-item") {
    if (!currentUser().isManager && !currentUser().isAdmin) return;
    const item = state.agendaItems.find(agenda => agenda.id === actionButton.dataset.id);
    if (item) {
      state.agendaEditId = item.id;
      state.agendaDraft = {
        title: item.title,
        body: item.body,
        category: item.category,
        tags: (item.tags || []).join(", "),
        date: item.date
      };
      render();
      resetScroll();
    }
    return;
  }

  if (action === "cancel-agenda-edit") {
    state.agendaEditId = null;
    state.agendaDraft = {
      title: "",
      body: "",
      category: "Strateji",
      tags: "pilot, operasyon",
      date: new Date().toISOString().slice(0, 10)
    };
    render();
    return;
  }

  if (action === "add-admin-storage-item") {
    if (!currentUser().isManager && !currentUser().isAdmin) return;
    const draft = state.adminStorageDraft;
    const title = draft.title.trim();
    const description = draft.description.trim();
    if (!title || !description) {
      alert("Depolama kaydı için başlık ve açıklama gerekli.");
      return;
    }

    state.adminStorageItems.unshift({
      id: `store-${Date.now()}`,
      title,
      description,
      category: draft.category || "Yönetim notu",
      date: new Date().toISOString().slice(0, 10),
      source: draft.source.trim() || "Manuel not",
      files: (draft.files || []).map(file => typeof file === "string" ? file : file.name)
    });
    state.adminStorageDraft = {
      title: "",
      description: "",
      category: "Yönetim notu",
      source: "",
      files: []
    };
    render();
    return;
  }

  if (action === "follow-challenge") {
    const id = actionButton.dataset.id;
    state.followedChallenges = state.followedChallenges || [];
    if (state.followedChallenges.includes(id)) {
      state.followedChallenges = state.followedChallenges.filter(item => item !== id);
    } else {
      state.followedChallenges.push(id);
    }
    render();
    return;
  }

  if (action === "join-challenge") {
    const challenge = challenges.find(item => item.id === actionButton.dataset.id);
    if (challenge) {
      state.entryMode = "idea";
      state.wizard.title = `${challenge.title} için çözüm önerisi`;
      state.wizard.oneSentence = challenge.brief;
      state.wizard.ideaType = "Yarışma başvurusu";
      state.wizard.marketCategory = "Fikir";
      state.wizard.area = challenge.sector;
      state.page = "newIdea";
      render();
      resetScroll();
    }
    return;
  }

  if (action === "set-data-section") {
    state.dataActiveSection = actionButton.dataset.section;
    state.suggestionsFeedback = "";
    state.suggestionsFeedbackError = "";
    render();
    return;
  }

  if (action === "set-social-tab") {
    state.socialActiveTab = actionButton.dataset.tab;
    render();
    return;
  }

  if (action === "set-social-leaderboard-mode") {
    state.socialLeaderboardMode = actionButton.dataset.mode || "total";
    render();
    return;
  }

  if (action === "submit-suggestion") {
    const titleVal = document.getElementById("sug-title")?.value.trim();
    const categoryVal = document.getElementById("sug-category")?.value;
    const descVal = document.getElementById("sug-desc")?.value.trim();
    const companyVal = document.getElementById("sug-company")?.value;

    if (!titleVal || !descVal) {
      state.suggestionsFeedbackError = "Lütfen tüm alanları doldurun.";
      state.suggestionsFeedback = "";
      render();
      return;
    }

    state.suggestionsPool = state.suggestionsPool || [];
    state.suggestionsPool.unshift({
      id: "sug-" + Date.now(),
      title: titleVal,
      category: categoryVal,
      description: descVal,
      companyId: companyVal,
      author: currentUser().name,
      date: new Date().toISOString().split("T")[0],
      status: "İletildi"
    });

    state.suggestionsFeedback = "Sorununuz veya öneriniz başarıyla havuzuna eklendi ve iletildi!";
    state.suggestionsFeedbackError = "";
    render();
    return;
  }

  if (action === "submit-complaint-box") {
    const subjectVal = document.getElementById("cb-subject")?.value;
    const targetVal = document.getElementById("cb-target")?.value.trim();
    const descVal = document.getElementById("cb-description")?.value.trim();

    if (!descVal) {
      alert("Lütfen açıklama alanını doldurun.");
      return;
    }

    state.complaintBoxFeedback = "Şikayetiniz veya geri bildiriminiz başarıyla iletildi.";
    render();
    return;
  }

  if (action === "set-entry-mode") {
    state.entryMode = actionButton.dataset.mode || "idea";
    state.aiAnalysis = null;
    render();
    return;
  }

  if (action === "support-idea") {
    supportIdea(actionButton.dataset.id);
    render();
  }

  if (action === "quick-like") {
    supportIdea(actionButton.dataset.id);
    moveQuickFlow(1, "Destek kredisi verildi. Sıradaki fikir açıldı.");
    render();
  }

  if (action === "quick-pass") {
    moveQuickFlow(1, "Fikir pas geçildi. Akış devam ediyor.");
    render();
  }

  if (action === "quick-next") {
    moveQuickFlow(1);
    render();
  }

  if (action === "quick-prev") {
    moveQuickFlow(-1);
    render();
  }

  if (action === "quick-comment") {
    const idea = state.ideas.find(item => item.id === actionButton.dataset.id);
    if (idea && state.fastCommentDraft.trim()) {
      idea.comments.push({ user: currentUser().name, body: state.fastCommentDraft.trim(), manager: currentUser().isManager });
      state.fastCommentDraft = "";
      state.quickFlowFeedback = "Yorum eklendi. Fikir tartışması güçlendi.";
      render();
    }
  }

  if (action === "open-idea") {
    state.selectedIdeaId = actionButton.dataset.id;
    state.previousPage = state.page;
    state.page = "detail";
    render();
    resetScroll();
  }

  if (action === "wizard-next") {
    state.wizardStep = Math.min(wizardSteps.length - 1, state.wizardStep + 1);
    render();
  }

  if (action === "wizard-prev") {
    state.wizardStep = Math.max(0, state.wizardStep - 1);
    render();
  }

  if (action === "wizard-step") {
    state.wizardStep = Number(actionButton.dataset.step);
    render();
  }

  if (action === "ai-analyze" && !state.aiLoading) {
    analyzeIdea();
  }

  if (action === "publish-idea") {
    const idea = createIdeaFromWizard();
    state.ideas.unshift(idea);
    state.selectedIdeaId = idea.id;
    state.page = "detail";
    state.wizardStep = 0;
    state.wizard = structuredClone(initialWizard);
    state.aiAnalysis = null;
    rewardMarketBudget(marketRewardByCategory.Fikir, "Yeni fikir ödülü");
    render();
    resetScroll();
  }

  if (action === "publish-complaint") {
    const complaint = createComplaintFromEntry();
    state.ideas.unshift(complaint);
    state.selectedIdeaId = complaint.id;
    state.page = "detail";
    state.previousPage = "newIdea";
    state.complaint = structuredClone(initialComplaint);
    state.entryMode = "idea";
    rewardMarketBudget(marketRewardByCategory["Şikayet"], "Yeni şikayet sinyali ödülü");
    render();
    resetScroll();
  }

  if (action === "add-comment") {
    const idea = state.ideas.find(item => item.id === actionButton.dataset.id);
    if (idea && state.commentDraft.trim()) {
      idea.comments.push({ user: currentUser().name, body: state.commentDraft.trim(), manager: currentUser().isManager });
      state.commentDraft = "";
      render();
    }
  }

  if (action === "select-channel") {
    state.selectedChannelId = actionButton.dataset.id;
    state.chatDraft = "";
    render();
  }

  if (action === "send-chat") {
    const channel = channels.find(item => item.id === state.selectedChannelId);
    if (channel && state.chatDraft.trim()) {
      channel.messages.push({ user: currentUser().name, body: state.chatDraft.trim(), own: true, time: new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }) });
      state.chatDraft = "";
      render();
    }
  }

  if (action === "set-affiliation") {
    state.affiliationFilter = actionButton.dataset.id || "all";
    state.selectedDirectPersonId = "";
    const scopedSpaces = spacesInScope();
    if (scopedSpaces.length) state.selectedMessageSpaceId = scopedSpaces[0].id;
    render();
  }

  if (action === "publish-announcement") {
    const draft = state.announcementDraft;
    if (draft.title.trim() && draft.body.trim()) {
      const author = peopleDirectory.find(person => person.companyId === draft.companyId) || peopleDirectory[0];
      state.announcements.unshift({
        id: `ann-${Date.now()}`,
        title: draft.title.trim(),
        body: draft.body.trim(),
        scope: draft.scope,
        companyId: draft.companyId,
        country: draft.country,
        city: draft.city,
        campus: draft.campus,
        department: draft.department,
        authorId: author.id,
        time: new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }),
        priority: draft.scope
      });
      state.announcementDraft.title = "";
      state.announcementDraft.body = "";
      rewardMarketBudget(500, "Yeni duyuru ödülü");
      state.announcementScopeFilter = "Tümü";
      render();
    }
  }

  if (action === "select-message-space") {
    state.selectedMessageSpaceId = actionButton.dataset.id;
    state.selectedDirectPersonId = "";
    state.messageDraft = "";
    render();
  }

  if (action === "start-direct-message") {
    state.selectedDirectPersonId = actionButton.dataset.id;
    state.messageDraft = "";
    render();
  }

  if (action === "send-message") {
    const body = state.messageDraft.trim();
    if (body) {
      const message = {
        user: currentUser().name,
        body,
        own: true,
        time: new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })
      };
      if (state.selectedDirectPersonId) {
        if (!state.directThreads[state.selectedDirectPersonId]) state.directThreads[state.selectedDirectPersonId] = [];
        state.directThreads[state.selectedDirectPersonId].push(message);
      } else {
        const space = state.messageSpaces.find(item => item.id === state.selectedMessageSpaceId);
        if (space) space.messages.push(message);
      }
      state.messageDraft = "";
      render();
    }
  }

  if (action === "send-rich-message") {
    pushMessageToCurrentThread(createRichMessage(actionButton.dataset.kind || "poll"));
    state.messageDraft = "";
    render();
    return;
  }

  if (action === "notification-tab") {
    state.notificationTab = actionButton.dataset.tab;
    render();
  }

  if (action === "manager-status") {
    const idea = state.ideas.find(item => item.id === actionButton.dataset.id);
    if (idea) {
      idea.status = actionButton.dataset.status;
      if (idea.status === "done") {
        idea.communityScore = Math.min(100, idea.communityScore + 4);
        const investedAmount = (state.marketInvestedAmount && state.marketInvestedAmount[idea.id]) || 0;
        if (investedAmount > 0) {
          const reward = investedAmount * 41;
          state.marketBudget += reward;
          state.marketInvestedAmount[idea.id] = 0;
          setTimeout(() => {
            alert(`Tebrikler! "${idea.title}" projesi başarıyla hayata geçirildi.\nYaptığınız ${formatCurrency(investedAmount)} değerindeki yatırımın 41 katı olan ${formatCurrency(reward)} oylama kredisi hesabınıza aktarıldı!`);
          }, 100);
        }
      }
      render();
    }
  }

  if (action === "admin-tab") {
    state.adminTab = actionButton.dataset.tab;
    render();
  }

  if (action === "system-details-tab") {
    state.systemDetailsTab = actionButton.dataset.tab;
    render();
  }

  if (action === "save-brand") {
    state.brandName = state.brandDraft.trim() || "NEW IDEA EXCHANGE";
    render();
  }
});

document.addEventListener("input", event => {
  if (event.target.matches("[data-market-filter='search']")) {
    state.marketSearch = event.target.value;
    render();
    return;
  }
  if (event.target.matches("[data-data-filter='search']")) {
    state.filters.dataSearch = event.target.value;
    render();
    return;
  }
  if (event.target.matches("[data-announcement-filter='search']")) {
    state.filters.announcementSearch = event.target.value;
    render();
    return;
  }
  if (event.target.matches("[data-social-filter='search']")) {
    state.filters.socialSearch = event.target.value;
    render();
    return;
  }
  if (event.target.matches("[data-challenge-filter='search']")) {
    state.filters.challengeSearch = event.target.value;
    render();
    return;
  }
  if (event.target.matches("[data-agenda-filter='search']")) {
    state.filters.agendaSearch = event.target.value;
    render();
    return;
  }
  if (event.target.matches("[data-studio-filter='search']")) {
    state.filters.studioSearch = event.target.value;
    render();
    return;
  }
  if (event.target.matches("[data-team-filter='search']")) {
    state.filters.teamSearch = event.target.value;
    render();
    return;
  }
  if (event.target.matches("[data-product-filter='search']")) {
    state.filters.productSearch = event.target.value;
    render();
    return;
  }

  const filter = event.target.closest("[data-idea-filter]");
  if (filter) {
    state.filters[filter.dataset.ideaFilter] = filter.value;
    render();
    return;
  }

  const agendaDraftField = event.target.closest("[data-agenda-draft]");
  if (agendaDraftField) {
    state.agendaDraft[agendaDraftField.dataset.agendaDraft] = agendaDraftField.value;
    return;
  }

  const adminStorageDraftField = event.target.closest("[data-admin-storage-draft]");
  if (adminStorageDraftField) {
    state.adminStorageDraft[adminStorageDraftField.dataset.adminStorageDraft] = adminStorageDraftField.value;
    return;
  }

  if (event.target.matches("[data-chat-draft]")) {
    state.chatDraft = event.target.value;
  }

  if (event.target.matches("[data-announcement-title]")) {
    state.announcementDraft.title = event.target.value;
  }

  if (event.target.matches("[data-announcement-body]")) {
    state.announcementDraft.body = event.target.value;
  }

  if (event.target.matches("[data-message-draft]")) {
    state.messageDraft = event.target.value;
  }

  const marketDraftField = event.target.closest("[data-market-draft]");
  if (marketDraftField) {
    state.marketDraft[marketDraftField.dataset.marketDraft] = marketDraftField.value;
  }

  if (event.target.matches("[data-market-search]")) {
    state.marketSearch = event.target.value;
    state.marketPanel = "watchlist";
    render();
    return;
  }

  if (event.target.matches("[data-access-key]")) {
    state.accessKeyInput = event.target.value;
    state.loginError = "";
  }

  if (event.target.matches("[data-comment-draft]")) {
    state.commentDraft = event.target.value;
  }

  if (event.target.matches("[data-fast-comment-draft]")) {
    state.fastCommentDraft = event.target.value;
  }

  if (event.target.matches("[data-quick-comment-input]")) {
    state.quickEvalCommentDraft = event.target.value;
  }

  const complaintField = event.target.closest("[data-complaint-field]");
  if (complaintField) {
    state.complaint[complaintField.dataset.complaintField] = complaintField.value;
  }

  if (event.target.matches("[data-brand-input]")) {
    state.brandDraft = event.target.value;
  }
});

let quickEvalPointer = null;

document.addEventListener("pointerdown", event => {
  if (state.page === "quickFlow") {
    if (event.target.closest("button, input, textarea, select, a")) return;
    const card = event.target.closest("[data-quick-card]");
    if (!card) return;
    quickFlowPointer = {
      id: card.dataset.id,
      card,
      x: event.clientX,
      y: event.clientY
    };
  } else if (state.page === "quickEval") {
    if (event.target.closest("button, input, textarea, select, a")) return;
    const card = event.target.closest("[data-eval-card]");
    if (!card) return;
    quickEvalPointer = {
      id: card.dataset.id,
      card,
      x: event.clientX,
      y: event.clientY
    };
  }
});

document.addEventListener("pointermove", event => {
  if (quickFlowPointer && state.page === "quickFlow") {
    const deltaX = event.clientX - quickFlowPointer.x;
    const deltaY = event.clientY - quickFlowPointer.y;
    const rotation = Math.max(-14, Math.min(14, deltaX / 14));
    quickFlowPointer.card.style.transform = `translate(${deltaX}px, ${deltaY * 0.18}px) rotate(${rotation}deg)`;
    quickFlowPointer.card.dataset.swipe = deltaX > 36 ? "like" : deltaX < -36 ? "pass" : "";
  } else if (quickEvalPointer && state.page === "quickEval") {
    const deltaX = event.clientX - quickEvalPointer.x;
    const deltaY = event.clientY - quickEvalPointer.y;
    const rotation = Math.max(-20, Math.min(20, deltaX / 8));
    const scale = 1 + Math.min(0.04, Math.abs(deltaX) / 1000);
    quickEvalPointer.card.style.transition = "none";
    quickEvalPointer.card.style.transform = `translate(${deltaX}px, ${deltaY * 0.4}px) rotate(${rotation}deg) scale(${scale})`;
    
    // Smooth glow based on drag progress
    const intensity = Math.min(0.3, Math.abs(deltaX) / 300);
    if (deltaX > 0) {
      quickEvalPointer.card.style.boxShadow = `0 25px 50px -12px rgba(0, 0, 0, 0.45), 0 0 40px rgba(59, 130, 246, ${intensity})`;
      quickEvalPointer.card.style.borderColor = `rgba(59, 130, 246, ${intensity * 1.5})`;
    } else {
      quickEvalPointer.card.style.boxShadow = `0 25px 50px -12px rgba(0, 0, 0, 0.45), 0 0 40px rgba(148, 163, 184, ${intensity})`;
      quickEvalPointer.card.style.borderColor = `rgba(148, 163, 184, ${intensity * 1.5})`;
    }

    // Dynamic overlay indicator opacities
    const likeOverlay = quickEvalPointer.card.querySelector(".like-overlay");
    const passOverlay = quickEvalPointer.card.querySelector(".pass-overlay");
    if (likeOverlay && passOverlay) {
      likeOverlay.style.transition = "none";
      passOverlay.style.transition = "none";
      if (deltaX > 10) {
        const op = Math.min(1, (deltaX - 10) / 80);
        likeOverlay.style.opacity = op;
        likeOverlay.style.transform = `rotate(-12deg) scale(${0.8 + op * 0.4})`;
        passOverlay.style.opacity = 0;
      } else if (deltaX < -10) {
        const op = Math.min(1, (-deltaX - 10) / 80);
        passOverlay.style.opacity = op;
        passOverlay.style.transform = `rotate(12deg) scale(${0.8 + op * 0.4})`;
        likeOverlay.style.opacity = 0;
      } else {
        likeOverlay.style.opacity = 0;
        likeOverlay.style.transform = "rotate(-12deg) scale(0.8)";
        passOverlay.style.opacity = 0;
        passOverlay.style.transform = "rotate(12deg) scale(0.8)";
      }
    }

    // Dynamically scale/raise the background cards
    const bgCard1 = document.querySelector(".card-bg-1");
    const bgCard2 = document.querySelector(".card-bg-2");
    const progress = Math.min(1, Math.abs(deltaX) / 150);
    if (bgCard1) {
      bgCard1.style.transition = "none";
      bgCard1.style.transform = `translateY(${12 - progress * 12}px) scale(${0.96 + progress * 0.04})`;
    }
    if (bgCard2) {
      bgCard2.style.transition = "none";
      bgCard2.style.transform = `translateY(${24 - progress * 12}px) scale(${0.92 + progress * 0.04})`;
    }
  }
});

document.addEventListener("pointerup", event => {
  if (quickFlowPointer && state.page === "quickFlow") {
    const deltaX = event.clientX - quickFlowPointer.x;
    const deltaY = event.clientY - quickFlowPointer.y;
    const horizontalIntent = Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 80;
    const ideaId = quickFlowPointer.id;
    const card = quickFlowPointer.card;
    quickFlowPointer = null;
    if (!horizontalIntent) {
      card.style.transform = "";
      card.dataset.swipe = "";
      return;
    }

    if (deltaX > 0) {
      supportIdea(ideaId);
      moveQuickFlow(1, "Sağa kaydırıldı: destek kredisi verildi.");
    } else {
      moveQuickFlow(1, "Sola kaydırıldı: fikir pas geçildi.");
    }
    render();
  } else if (quickEvalPointer && state.page === "quickEval") {
    const deltaX = event.clientX - quickEvalPointer.x;
    const deltaY = event.clientY - quickEvalPointer.y;
    const horizontalIntent = Math.abs(deltaX) > 80;
    const ideaId = quickEvalPointer.id;
    const card = quickEvalPointer.card;
    quickEvalPointer = null;
    
    // Get overlays
    const likeOverlay = card.querySelector(".like-overlay");
    const passOverlay = card.querySelector(".pass-overlay");
    const bgCard1 = document.querySelector(".card-bg-1");
    const bgCard2 = document.querySelector(".card-bg-2");

    if (!horizontalIntent) {
      // Smooth snap back
      card.style.transition = "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s, border-color 0.3s";
      card.style.transform = "";
      card.style.boxShadow = "";
      card.style.borderColor = "";
      
      if (likeOverlay) {
        likeOverlay.style.transition = "opacity 0.3s, transform 0.3s";
        likeOverlay.style.opacity = 0;
        likeOverlay.style.transform = "rotate(-12deg) scale(0.8)";
      }
      if (passOverlay) {
        passOverlay.style.transition = "opacity 0.3s, transform 0.3s";
        passOverlay.style.opacity = 0;
        passOverlay.style.transform = "rotate(12deg) scale(0.8)";
      }
      if (bgCard1) {
        bgCard1.style.transition = "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        bgCard1.style.transform = "";
      }
      if (bgCard2) {
        bgCard2.style.transition = "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        bgCard2.style.transform = "";
      }
      return;
    }
    
    // Fly out animation
    card.style.transition = "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s";
    if (likeOverlay) {
      likeOverlay.style.transition = "opacity 0.2s, transform 0.2s";
      likeOverlay.style.opacity = 1;
      likeOverlay.style.transform = "rotate(-12deg) scale(1.2)";
    }
    if (passOverlay) {
      passOverlay.style.transition = "opacity 0.2s, transform 0.2s";
      passOverlay.style.opacity = 1;
      passOverlay.style.transform = "rotate(12deg) scale(1.2)";
    }

    if (bgCard1) {
      bgCard1.style.transition = "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)";
      bgCard1.style.transform = "translateY(0px) scale(1)";
    }
    if (bgCard2) {
      bgCard2.style.transition = "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)";
      bgCard2.style.transform = "translateY(12px) scale(0.96)";
    }

    if (deltaX > 0) {
      card.style.transform = `translate(220%, ${deltaY * 0.5}px) rotate(45deg) scale(1.05)`;
      card.style.opacity = "0";
      setTimeout(() => {
        handleQuickEvalSwipe(ideaId, "like");
      }, 350);
    } else {
      card.style.transform = `translate(-220%, ${deltaY * 0.5}px) rotate(-45deg) scale(1.05)`;
      card.style.opacity = "0";
      setTimeout(() => {
        handleQuickEvalSwipe(ideaId, "dislike");
      }, 350);
    }
  } else {
    quickFlowPointer = null;
    quickEvalPointer = null;
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Enter" && event.target.id === "ai-chat-input") {
    const text = event.target.value.trim();
    if (text) {
      event.target.value = "";
      handleAIChatResponse(text);
    }
    return;
  }

  if (event.key === "Enter" && event.target.closest("[data-quick-comment-input]")) {
    const activeIdea = state.ideas.filter(idea => !state.quickEvalLikes || !state.quickEvalLikes[idea.id])[0];
    if (activeIdea && state.quickEvalCommentDraft && state.quickEvalCommentDraft.trim()) {
      if (!activeIdea.comments) activeIdea.comments = [];
      activeIdea.comments.push({
        user: currentUser().name,
        body: state.quickEvalCommentDraft.trim(),
        manager: currentUser().isManager
      });
      state.quickEvalCommentDraft = "";
      render();
    }
    return;
  }

  if (event.key === "Escape" && state.fileInspector) {
    state.fileInspector = null;
    render();
    return;
  }

  if (state.page !== "quickFlow") return;
  if (document.querySelector(".market-board, .stock-terminal-page")) return;
  if (event.target.closest("input, textarea, select")) return;

  const currentIdea = quickFlowIdeas()[state.quickFlowIndex];
  if (event.key === "ArrowRight" && currentIdea) {
    supportIdea(currentIdea.id);
    moveQuickFlow(1, "Sağ ok: destek kredisi verildi.");
    render();
  }
  if (event.key === "ArrowLeft") {
    moveQuickFlow(1, "Sol ok: fikir pas geçildi.");
    render();
  }
});

document.addEventListener("change", event => {
  const actionEl = event.target.closest("[data-action]");
  if (actionEl) {
    const action = actionEl.dataset.action;
    if (action === "filter-ledger-user") {
      state.ledgerUserFilter = event.target.value;
      render();
      return;
    }
    if (action === "filter-ledger-project") {
      state.ledgerProjectFilter = event.target.value;
      render();
      return;
    }
  }

  const marketFilter = event.target.closest("[data-market-filter]");
  if (marketFilter) {
    const filterName = marketFilter.dataset.marketFilter;
    if (filterName === "company") {
      state.filters.company = event.target.value;
    } else if (filterName === "league") {
      state.filters.league = event.target.value;
    } else if (filterName === "area") {
      state.filters.area = event.target.value;
    } else if (filterName === "sort") {
      state.marketSort = event.target.value;
    }
    render();
    return;
  }

  const dataFilter = event.target.closest("[data-data-filter]");
  if (dataFilter) {
    const filterName = dataFilter.dataset.dataFilter;
    if (filterName === "tab") {
      state.filters.dataTab = event.target.value;
    } else if (filterName === "sort") {
      state.filters.dataSort = event.target.value;
    } else if (filterName === "company") {
      state.filters.dataCompany = event.target.value;
    } else if (filterName === "area") {
      state.filters.dataArea = event.target.value;
    }
    render();
    return;
  }

  const annFilter = event.target.closest("[data-announcement-filter]");
  if (annFilter) {
    const filterName = annFilter.dataset.announcementFilter;
    if (filterName === "tab") {
      state.filters.announcementTab = event.target.value;
    } else if (filterName === "company") {
      state.filters.announcementCompany = event.target.value;
    } else if (filterName === "area") {
      state.filters.announcementArea = event.target.value;
    } else if (filterName === "sort") {
      state.filters.announcementSort = event.target.value;
    }
    render();
    return;
  }

  const challengeFilter = event.target.closest("[data-challenge-filter]");
  if (challengeFilter) {
    const filterName = challengeFilter.dataset.challengeFilter;
    if (filterName === "sector") {
      state.filters.challengeSector = event.target.value;
    } else if (filterName === "status") {
      state.filters.challengeStatus = event.target.value;
    } else if (filterName === "reward") {
      state.filters.challengeReward = event.target.value;
    }
    render();
    return;
  }

  const agendaFilter = event.target.closest("[data-agenda-filter]");
  if (agendaFilter) {
    const filterName = agendaFilter.dataset.agendaFilter;
    if (filterName === "category") state.filters.agendaCategory = event.target.value;
    if (filterName === "tag") state.filters.agendaTag = event.target.value;
    render();
    return;
  }

  const studioFilter = event.target.closest("[data-studio-filter]");
  if (studioFilter) {
    const filterName = studioFilter.dataset.studioFilter;
    if (filterName === "category") state.filters.studioCategory = event.target.value;
    if (filterName === "status") state.filters.studioStatus = event.target.value;
    if (filterName === "sort") state.filters.studioSort = event.target.value;
    render();
    return;
  }

  const teamFilter = event.target.closest("[data-team-filter]");
  if (teamFilter) {
    const filterName = teamFilter.dataset.teamFilter;
    if (filterName === "area") state.filters.teamArea = event.target.value;
    if (filterName === "status") state.filters.teamStatus = event.target.value;
    render();
    return;
  }

  const productFilter = event.target.closest("[data-product-filter]");
  if (productFilter) {
    const filterName = productFilter.dataset.productFilter;
    if (filterName === "stage") state.filters.productStage = event.target.value;
    if (filterName === "category") state.filters.productCategory = event.target.value;
    render();
    return;
  }

  const changedWizardField = event.target.closest("[data-wizard-field]");
  if (changedWizardField) {
    state.wizard[changedWizardField.dataset.wizardField] = changedWizardField.value;
  }

  const changedComplaintField = event.target.closest("[data-complaint-field]");
  if (changedComplaintField) {
    state.complaint[changedComplaintField.dataset.complaintField] = changedComplaintField.value;
  }

  const changedFilter = event.target.closest("[data-idea-filter]");
  if (changedFilter) {
    state.filters[changedFilter.dataset.ideaFilter] = changedFilter.value;
    render();
    return;
  }

  if (event.target.matches("[data-affiliation-filter]")) {
    state.affiliationFilter = event.target.value;
    state.selectedDirectPersonId = "";
    const scopedSpaces = spacesInScope();
    if (scopedSpaces.length) state.selectedMessageSpaceId = scopedSpaces[0].id;
    render();
    return;
  }

  if (event.target.matches("[data-announcement-scope-filter]")) {
    state.announcementScopeFilter = event.target.value;
    render();
    return;
  }

  if (event.target.matches("[data-market-sort]")) {
    state.marketSort = event.target.value;
    render();
    return;
  }

  const changedMarketDraft = event.target.closest("[data-market-draft]");
  if (changedMarketDraft) {
    state.marketDraft[changedMarketDraft.dataset.marketDraft] = changedMarketDraft.value;
    render();
    return;
  }

  if (event.target.matches("[data-market-files]")) {
    selectedFileRecords(event.target).then(files => {
      state.marketDraft.files = files;
      render();
    });
    return;
  }

  if (event.target.matches("[data-complaint-files]")) {
    selectedFileRecords(event.target).then(files => {
      state.complaint.files = files;
      render();
    });
    return;
  }

  if (event.target.matches("[data-wizard-files]")) {
    selectedFileRecords(event.target).then(files => {
      state.wizard.files = files;
      render();
    });
    return;
  }

  if (event.target.matches("[data-admin-storage-files]")) {
    selectedFileRecords(event.target).then(files => {
      state.adminStorageDraft.files = files;
      render();
    });
    return;
  }

  const changedAgendaDraft = event.target.closest("[data-agenda-draft]");
  if (changedAgendaDraft) {
    state.agendaDraft[changedAgendaDraft.dataset.agendaDraft] = changedAgendaDraft.value;
    render();
    return;
  }

  const changedAdminStorageDraft = event.target.closest("[data-admin-storage-draft]");
  if (changedAdminStorageDraft) {
    state.adminStorageDraft[changedAdminStorageDraft.dataset.adminStorageDraft] = changedAdminStorageDraft.value;
    render();
    return;
  }

  if (event.target.matches("[data-social-photo]")) {
    selectedFileRecords(event.target, 1).then(files => {
      state.socialPhotoDraft = files[0] || null;
      render();
    });
    return;
  }

  if (event.target.matches("[data-announcement-scope]")) {
    state.announcementDraft.scope = event.target.value;
    render();
    return;
  }

  if (event.target.matches("[data-announcement-company]")) {
    syncAnnouncementDraftCompany(event.target.value);
    render();
    return;
  }

  if (event.target.matches("[data-announcement-city]")) {
    state.announcementDraft.city = event.target.value;
    return;
  }

  if (event.target.matches("[data-announcement-campus]")) {
    state.announcementDraft.campus = event.target.value;
    return;
  }

  if (event.target.matches("[data-announcement-department]")) {
    state.announcementDraft.department = event.target.value;
    return;
  }

  if (event.target.matches("[data-team-chat-draft]")) {
    state.teamChatDraft = event.target.value;
    return;
  }

  if (event.target.matches("[data-team-draft-name]")) {
    state.teamDraft.name = event.target.value;
    const btn = document.querySelector("[data-action='team-create-next']");
    if (btn) btn.disabled = !state.teamDraft.name.trim() || !state.teamDraft.description.trim();
    return;
  }

  if (event.target.matches("[data-team-draft-desc]")) {
    state.teamDraft.description = event.target.value;
    return;
  }

  if (event.target.matches("[data-team-draft-area]")) {
    state.teamDraft.area = event.target.value;
    return;
  }

  if (event.target.matches("[data-team-draft-idea]")) {
    state.teamDraft.ideaId = event.target.value;
    return;
  }

  if (event.target.matches("[data-draft-role-title]")) {
    const idx = parseInt(event.target.dataset.draftRoleTitle, 10);
    if (state.teamDraft.roles[idx]) state.teamDraft.roles[idx].title = event.target.value;
    return;
  }

  if (event.target.matches("[data-assign-role]")) {
    const idx = parseInt(event.target.dataset.assignRole, 10);
    if (state.teamDraft.roles[idx]) {
      state.teamDraft.roles[idx].userId = event.target.value || null;
      state.teamDraft.roles[idx].filled = !!event.target.value;
      render();
    }
    return;
  }

  if (event.target.matches("[data-login-user]")) {
    state.selectedLoginUserId = event.target.value;
    render();
  }

  if (event.target.matches("[data-role-switch]")) {
    state.currentUserId = event.target.value;
    const targetItem = navItems.find(item => item.id === state.page);
    if (targetItem && !canAccess(targetItem)) state.page = "dashboard";
    render();
    resetScroll();
  }

  if (event.target.matches("[data-brand-preset]")) {
    state.brandDraft = event.target.value;
    state.brandName = event.target.value;
    render();
  }

  if (event.target.matches("[data-primary-color]")) {
    state.primaryColor = event.target.value;
    document.documentElement.style.setProperty("--primary", state.primaryColor);
  }
});

function supportIdea(id) {
  const idea = state.ideas.find(item => item.id === id);
  const user = currentUser();
  if (!idea || user.voteCreditBalance <= 0) return;
  idea.credits += 1;
  idea.supporters += 1;
  idea.communityScore = Math.min(100, idea.communityScore + 1);
  user.voteCreditBalance -= 1;
}

function handleQuickEvalSwipe(ideaId, action) {
  if (!state.quickEvalLikes) state.quickEvalLikes = {};
  state.quickEvalLikes[ideaId] = action;
  if (action === "like") {
    supportIdea(ideaId);
  }
  state.quickEvalCommentDraft = "";
  render();
}

function renderQuickEval() {
  const swipableIdeas = state.ideas.filter(idea => !state.quickEvalLikes || !state.quickEvalLikes[idea.id]);
  const swipedCount = state.quickEvalLikes ? Object.keys(state.quickEvalLikes).length : 0;
  const likedCount = state.quickEvalLikes ? Object.values(state.quickEvalLikes).filter(v => v === "like").length : 0;
  
  if (swipableIdeas.length === 0) {
    return `
      <div class="view-stack speedy-eval-page empty-deck-state">
        <div class="empty-card-container">
          <div class="empty-icon-wrapper">
            ${icon("check-circle-2")}
          </div>
          <h2>Tüm İncelemeler Tamamlandı!</h2>
          <p>Şu anlık bütün fikirler bitti. İnceleme süreciniz başarıyla tamamlandı. Yeni fikirler borsa onayına sunulduğunda burada görünecektir.</p>
          
          <div class="eval-stats">
            <div class="stat-pill">
              <strong>${likedCount}</strong>
              <span>Beğenilen</span>
            </div>
            <div class="stat-pill">
              <strong>${swipedCount - likedCount}</strong>
              <span>Pas Geçilen</span>
            </div>
          </div>
          
          <button class="btn primary btn-restart" data-action="quickEval-restart">
            ${icon("rotate-ccw")} İnceleme Geçmişini Sıfırla
          </button>
        </div>
      </div>
    `;
  }

  const idea = swipableIdeas[0];
  const company = marketCompanyForIdea(idea);
  const price = marketPrice(idea);
  const change = Number(idea.marketChange || 0);
  const up = change >= 0;
  const comments = idea.comments || [];
  const remainingCount = swipableIdeas.length;

  const hasNext1 = swipableIdeas.length > 1;
  const hasNext2 = swipableIdeas.length > 2;

  return `
    <div class="view-stack speedy-eval-page">
      <div class="speedy-header">
        <span class="speedy-kicker">${icon("flame")} HIZLI DEĞERLENDİR</span>
        <div class="speedy-badge-row">
          <span class="speedy-count-badge">${remainingCount} fikir kaldı</span>
        </div>
        <p class="speedy-subtitle">Sağa Kaydır: Beğendim · Sola Kaydır: Pas Geç</p>
      </div>

      <div class="speedy-main">
        <div class="card-stack-container">
          
          ${hasNext2 ? `
            <div class="tinder-card-bg card-bg-2" aria-hidden="true"></div>
          ` : ""}
          
          ${hasNext1 ? `
            <div class="tinder-card-bg card-bg-1" aria-hidden="true"></div>
          ` : ""}

          <!-- Active Swipable Card -->
          <article class="tinder-card-active" id="tinder-active-card" data-eval-card data-id="${esc(idea.id)}">
            
            <div class="card-top-accent"></div>
            
            <header class="card-eval-header">
              <span class="category-badge">${esc(idea.type || "Fikir")}</span>
              <div class="idea-author-info">
                ${avatar(idea.authorLabel || "Anonim", "tiny")}
                <span>${esc(idea.authorLabel || "Anonim")}</span>
              </div>
            </header>

            <div class="card-eval-body">
              <h3 class="idea-eval-title">${esc(idea.title)}</h3>
              <p class="idea-eval-summary">${esc(idea.summary)}</p>
              
              <div class="idea-eval-specs">
                <div class="spec-item">
                  <span class="spec-label">Tahmini Etki:</span>
                  <span class="spec-val text-glow-green">${esc(idea.estimatedImpact || "Orta")}</span>
                </div>
                <div class="spec-item">
                  <span class="spec-label">Tahmini Maliyet:</span>
                  <span class="spec-val text-glow-orange">${esc(idea.estimatedCost || "Orta")}</span>
                </div>
                <div class="spec-item">
                  <span class="spec-label">Süre:</span>
                  <span class="spec-val">${esc(idea.implementationTime || "1 Ay")}</span>
                </div>
              </div>
            </div>

            <!-- Price and Trend Section at bottom of card -->
            <footer class="card-eval-footer">
              <div class="card-price-section">
                <span class="price-label">FİKİR HİSSE FİYATI</span>
                <div class="price-row">
                  <strong class="price-val">${formatCurrency(price)}</strong>
                  <span class="card-trend-badge ${up ? "up" : "down"}">
                    ${up ? `
                      <svg class="trend-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    ` : `
                      <svg class="trend-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="7" y1="7" x2="17" y2="17"></line>
                        <polyline points="17 7 17 17 7 17"></polyline>
                      </svg>
                    `}
                    <span>${up ? "+" : ""}${change.toFixed(2)}%</span>
                  </span>
                </div>
              </div>
              <div class="card-company-pill">
                ${companyLogo(company, "tiny")}
                <span>${esc(company.shortName)}</span>
              </div>
            </footer>

            <!-- Swiping Indicators Overlay -->
            <div class="swipe-overlay like-overlay">BEĞENDİM</div>
            <div class="swipe-overlay pass-overlay">PAS</div>
          </article>
        </div>

        <!-- Action Control Buttons under stack -->
        <div class="tinder-controls">
          <button class="tinder-btn dislike-btn" data-action="quickEval-dislike" data-id="${esc(idea.id)}" title="Beğenmedim (Sola Kaydır)">
            ${icon("thumbs-down")}
          </button>
          
          <button class="tinder-btn comment-btn" data-action="quickEval-show-comments" data-id="${esc(idea.id)}" title="Yorumlar">
            ${icon("message-square-text")}
            ${comments.length ? `<span class="comments-badge">${comments.length}</span>` : ""}
          </button>
          
          <button class="tinder-btn like-btn" data-action="quickEval-like" data-id="${esc(idea.id)}" title="Beğendim (Sağa Kaydır)">
            ${icon("thumbs-up")}
          </button>
        </div>

        <!-- Comment Box & Section -->
        <div class="speedy-comments-panel">
          <div class="comments-list-inline">
            ${comments.length === 0 ? `
              <p class="no-comments-yet">Bu fikir hakkında henüz yorum yapılmamış. İlk yorumu sen yap!</p>
            ` : `
              <h4>Son Yorumlar</h4>
              <div class="inline-comment-items">
                ${comments.slice(-2).map(c => `
                  <div class="inline-comment">
                    <span class="comment-user">
                      ${avatar(c.user, "tiny")}
                      <strong>${esc(c.user)}</strong>
                      ${c.manager ? `<span class="manager-pill">Yönetici</span>` : ""}
                    </span>
                    <p class="comment-body">${esc(c.body)}</p>
                  </div>
                `).join("")}
              </div>
            `}
          </div>

          <div class="speedy-comment-form">
            <input type="text" class="input quick-comment-input" data-quick-comment-input placeholder="Fikre bir yorum yaz ve enter'a bas..." value="${esc(state.quickEvalCommentDraft || '')}">
            <button class="btn primary inline-comment-btn" data-action="quickEval-comment-submit" data-id="${esc(idea.id)}">
              Gönder
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==========================================
// PORTAL V2 IMPLEMENTATION & HELPER FUNCTIONS
// ==========================================

function filteredBorsaIdeas() {
  let list = [...state.ideas];
  
  if (state.marketSearch && state.marketSearch.trim()) {
    const q = state.marketSearch.toLowerCase();
    list = list.filter(idea => 
      (idea.title && idea.title.toLowerCase().includes(q)) ||
      (idea.summary && idea.summary.toLowerCase().includes(q)) ||
      (idea.type && idea.type.toLowerCase().includes(q)) ||
      (idea.area && idea.area.toLowerCase().includes(q)) ||
      (idea.marketTicker && idea.marketTicker.toLowerCase().includes(q)) ||
      (idea.tags && idea.tags.some(t => t.toLowerCase().includes(q)))
    );
  }

  // Company Filter: Tümü, Şirketler, Bağımsız, specific company
  if (state.filters.company && state.filters.company !== "Tümü") {
    if (state.filters.company === "Şirketler") {
      list = list.filter(idea => idea.companyId && idea.companyId !== "independent");
    } else if (state.filters.company === "Bağımsız") {
      list = list.filter(idea => !idea.companyId || idea.companyId === "independent");
    } else {
      list = list.filter(idea => idea.companyId === state.filters.company);
    }
  }

  // League Filter: Tümü, Proje, Fikir, Araştırma
  if (state.filters.league && state.filters.league !== "Tümü") {
    list = list.filter(idea => idea.marketCategory === state.filters.league);
  }

  // Area Filter
  if (state.filters.area && state.filters.area !== "Tümü") {
    list = list.filter(idea => idea.area === state.filters.area);
  }

  // Sorting
  const sortType = state.marketSort || "En yeni";
  if (sortType === "En yeni") {
    list.sort((a, b) => new Date(b.createdAt || b.date || 0) - new Date(a.createdAt || a.date || 0));
  } else if (sortType === "En önemli" || sortType === "Revaç") {
    list.sort((a, b) => {
      const scoreB = (b.aiScore || 0) + (b.communityScore || 0) + (b.strategicScore || 0);
      const scoreA = (a.aiScore || 0) + (a.communityScore || 0) + (a.strategicScore || 0);
      return scoreB - scoreA;
    });
  } else if (sortType === "En çok etkileşim alan") {
    list.sort((a, b) => (b.supporters || 0) - (a.supporters || 0));
  } else if (sortType === "En çok yorumlanan") {
    list.sort((a, b) => ((b.comments || []).length) - ((a.comments || []).length));
  } else if (sortType === "Fiyat") {
    list.sort((a, b) => marketPrice(b) - marketPrice(a));
  }

  return list;
}

function renderBorsaCard(idea) {
  const company = companyById(idea.companyId);
  const author = personById(idea.authorId) || peopleDirectory[0];
  const comments = idea.comments || [];
  const isExpanded = state.expandedComments && state.expandedComments[idea.id];
  const price = marketPrice(idea);
  const change = Number(idea.marketChange || 0);
  const up = change >= 0;
  const owned = state.marketHoldings[idea.id] || 0;
  
  return `
    <article class="borsa-card" style="display: flex; flex-direction: column; background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 20px; position: relative; gap: 12px; transition: transform 0.2s, box-shadow 0.2s;">
      <div class="borsa-card-header" style="display: flex; justify-content: space-between; align-items: start; gap: 12px;">
        <span class="borsa-league-badge" style="font-size: 11px; font-weight: 600; text-transform: uppercase; background: var(--primary-light); color: var(--primary); padding: 4px 8px; border-radius: 20px;">
          ${esc(idea.marketCategory || "Fikir")}
        </span>
        <div style="display: flex; align-items: center; gap: 6px;">
          ${company ? companyLogo(company, "mini") : `<span class="independent-pill" style="font-size: 11px; background: var(--line-soft); color: var(--ink-soft); padding: 4px 8px; border-radius: 4px; font-weight: 500;">Bağımsız</span>`}
        </div>
      </div>

      <div style="flex: 1;">
        <h3 class="borsa-card-title" style="font-size: 18px; font-weight: 600; margin: 4px 0 8px 0; color: var(--ink); line-height: 1.4;">${esc(idea.title)}</h3>
        <p class="borsa-card-summary" style="font-size: 13.5px; color: var(--ink-soft); line-height: 1.5; margin-bottom: 12px;">${esc(idea.summary)}</p>
        
        <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px;">
          <span style="font-size: 12px; background: rgba(var(--primary-rgb), 0.05); color: var(--ink-soft); padding: 3px 8px; border-radius: 6px;">
            ${icon("tag", "12")} ${esc(idea.area || "Diğer")}
          </span>
          ${(idea.tags || []).slice(0, 2).map(tag => `
            <span style="font-size: 11px; background: var(--bg); color: var(--muted); padding: 3px 8px; border-radius: 6px;">#${esc(tag)}</span>
          `).join("")}
        </div>
      </div>

      <!-- Author -->
      <div class="borsa-card-author" style="display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--ink-soft); border-top: 1px solid var(--line-soft); padding-top: 10px;">
        <span style="font-weight: 500;">Yapan:</span>
        <span class="author-line" style="display: flex; align-items: center; gap: 6px; cursor: pointer; color: var(--primary);" data-action="view-profile" data-user-id="${author.id}">
          ${avatar(author.name, "tiny", author.photo)} 
          <strong>${esc(author.name)}</strong>
        </span>
      </div>

      <!-- Raporlar -->
      <div class="borsa-reports-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 4px;">
        <button class="btn ghost btn-sm" data-action="view-report" data-type="ai" data-id="${idea.id}" style="font-size: 12px; padding: 6px; display: flex; align-items: center; justify-content: center; gap: 4px;">
          ${icon("cpu")} AI Raporu
        </button>
        <button class="btn ghost btn-sm" data-action="view-report" data-type="project" data-id="${idea.id}" style="font-size: 12px; padding: 6px; display: flex; align-items: center; justify-content: center; gap: 4px;">
          ${icon("file-text")} Proje Raporu
        </button>
      </div>

      <!-- Fikre Başvuru At veya Red Bildirimi -->
      ${idea.status === "rejected" ? `
        <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: 8px; padding: 8px; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 12.5px; color: var(--negative); font-weight: 600; margin-bottom: 2px;">
          ${icon("alert-triangle")} PROJE ELENDİ / REDDEDİLDİ (Yapay Zeka)
        </div>
      ` : `
        <button class="btn primary btn-sm" data-action="apply-to-idea" data-id="${idea.id}" style="font-size: 12.5px; padding: 7px 10px; display: flex; align-items: center; justify-content: center; gap: 6px; font-weight: 600; width: 100%; background: linear-gradient(135deg, var(--primary), var(--indigo)); border: none; color: #fff; border-radius: 6px; cursor: pointer; margin-top: 2px;">
          ${icon("briefcase", "13")} Fikre Başvuru At
        </button>
      `}

      <!-- Lot Buy/Sell Trading Panel veya Red Bildirimi -->
      ${idea.status === "rejected" ? `
        <div style="background: var(--bg); padding: 10px; border-radius: 10px; text-align: center; font-size: 12px; color: var(--muted); border: 1px dashed var(--line-soft); margin-top: 4px;">
          Tüzük ihlali veya düşük AI skoru (&lt;70) nedeniyle işlem tahtasına kapatılmıştır.
        </div>
      ` : `
        <div class="borsa-trading-panel" style="background: var(--bg); border-radius: 10px; padding: 12px; border: 1px solid var(--line-soft); margin-top: 4px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <div>
              <span style="font-size: 11px; color: var(--muted); display: block;">Destek Değeri / Değişim</span>
              <div style="display: flex; align-items: center; gap: 6px;">
                <strong style="font-size: 15px; color: var(--ink);">${formatCurrency(price)}</strong>
                <span class="trend-badge ${up ? 'up' : 'down'}" style="font-size: 11px; font-weight: 600; color: ${up ? 'var(--positive)' : 'var(--negative)'}; display: flex; align-items: center; gap: 2px;">
                  ${up ? icon("trending-up", "12") : icon("trending-down", "12")} ${up ? "+" : ""}${change.toFixed(1)}%
                </span>
              </div>
            </div>
            <div style="text-align: right;">
              <span style="font-size: 11px; color: var(--muted); display: block;">Yatırımım</span>
              <strong style="font-size: 13px; color: var(--ink);">${owned} Birim</strong>
            </div>
          </div>

          <div style="display: flex; gap: 6px; align-items: center;">
            <input type="number" class="input slim-input" value="1" min="1" max="100" data-trade-qty="${idea.id}" style="width: 55px; text-align: center; padding: 6px; font-size: 13px;" />
            <button class="btn btn-sm success" data-action="buy-market-qty" data-id="${idea.id}" style="flex: 1; padding: 6px; font-size: 13px; font-weight: 600; background: var(--positive); color: #fff; border: none; border-radius: 6px; cursor: pointer;">Al</button>
            <button class="btn btn-sm danger" data-action="sell-market-qty" data-id="${idea.id}" style="flex: 1; padding: 6px; font-size: 13px; font-weight: 600; background: var(--negative); color: #fff; border: none; border-radius: 6px; cursor: pointer;">Sat</button>
          </div>
        </div>
      `}

      <!-- Ekip İhtiyacı -->
      ${(() => {
        const openRoles = productOpenRoles(idea);
        if (!openRoles.length) return "";
        const team = productLinkedTeam(idea.id);
        return `
          <div class="borsa-hiring-strip">
            ${icon("user-plus")} <strong>Ekip Arıyor:</strong>
            ${openRoles.slice(0,2).map(r => `<span class="borsa-open-role">${esc(r.title)}</span>`).join("")}
            ${openRoles.length > 2 ? `<span class="borsa-open-role muted">+${openRoles.length-2}</span>` : ""}
            ${team ? `<button class="btn ghost slim-btn" data-action="open-team" data-id="${esc(team.id)}" style="font-size:11px;padding:3px 8px;margin-left:auto;">Ekibi Gör</button>` : ""}
          </div>
        `;
      })()}

      <!-- Yorum/Forum Toggle -->
      <div style="display: flex; justify-content: space-between; align-items: center; font-size: 12px; margin-top: 4px;">
        <button class="btn-comment-interaction" data-action="toggle-card-comments" data-id="${idea.id}" style="background: none; border: none; color: var(--primary); font-weight: 600; display: flex; align-items: center; gap: 4px; cursor: pointer; padding: 0;">
          ${icon("message-square", "14")} <span>${comments.length} Yorum / Tartışma</span>
        </button>
        <span style="color: var(--muted);">${idea.createdAt || idea.date || "2026-06-01"}</span>
      </div>

      <!-- Comments Area -->
      ${isExpanded ? `
        <div class="card-comments-section" style="margin-top: 8px; padding-top: 10px; border-top: 1px solid var(--line-soft);">
          <div class="comments-list" style="max-height: 150px; overflow-y: auto; margin-bottom: 8px;">
            ${comments.length === 0 ? `
              <p style="font-size: 12px; color: var(--muted); text-align: center; margin: 8px 0;">Henüz tartışma başlatılmamış. Soru sor veya geri bildirim ver!</p>
            ` : comments.map(c => `
              <div class="comment-item" style="margin-bottom: 6px; font-size: 12.5px; line-height: 1.4;">
                <div style="display: flex; align-items: center; gap: 4px; font-weight: 600;">
                  <span>${esc(c.user)}</span>
                  ${c.manager ? `<span class="manager-pill" style="font-size: 9px; background: var(--primary-light); color: var(--primary); padding: 0px 3px; border-radius: 3px;">Kurul</span>` : ""}
                </div>
                <div style="color: var(--ink-soft);">${esc(c.body)}</div>
              </div>
            `).join("")}
          </div>
          <div class="comment-composer" style="display: flex; gap: 6px;">
            <input class="input slim-input" placeholder="Soru sor veya fikir belirt..." data-comment-input="${idea.id}" style="flex: 1; font-size: 12.5px; padding: 5px 8px;" />
            <button class="btn primary slim-btn" data-action="submit-card-comment" data-type="idea" data-id="${idea.id}" style="padding: 5px 10px; font-size: 12px;">Gönder</button>
          </div>
        </div>
      ` : ""}
    </article>
  `;
}

function renderReportModal() {
  if (!state.selectedIdeaReportId) return "";
  const idea = state.ideas.find(item => item.id === state.selectedIdeaReportId);
  if (!idea) return "";
  const isAi = state.reportType === "ai";
  
  const content = isAi ? `
    <div style="font-size: 14px; line-height: 1.6; color: var(--ink-soft);">
      <h4 style="color: var(--ink); font-weight: 600; margin-bottom: 8px; font-size: 16px;">Yapay Zekâ Analiz ve Fizibilite Raporu</h4>
      <p style="margin-bottom: 12px;">Bu rapor, projenin stratejik uyumu, tahmini bütçesi, teknik fizibilitesi ve pazar potansiyelini değerlendirmek üzere otomatik olarak üretilmiştir.</p>
      
      <div style="background: var(--bg); padding: 12px; border-radius: 8px; border-left: 4px solid var(--primary); margin-bottom: 12px;">
        <strong>Yapay Zekâ Skoru: %${idea.aiScore || 85}</strong>
        <p style="font-size: 12px; margin-top: 4px; color: var(--muted);">İçerik tutarlılığı, yenilikçilik ve uygulanabilirlik kriterlerine göre ağırlıklandırılmıştır.</p>
      </div>

      <h5 style="color: var(--ink); font-weight: 600; margin: 12px 0 6px 0;">Stratejik Etki ve Analiz</h5>
      <ul style="padding-left: 20px; margin-bottom: 12px; list-style-type: disc;">
        <li><strong>Stratejik Hizalama:</strong> Grubun 2026 dijitalleşme ve verimlilik hedefleriyle tam uyumlu (%${idea.strategicScore || 80} puan).</li>
        <li><strong>Operasyonel Verimlilik:</strong> Süreç adımlarında tahmini %20-30 hız artışı ve insan hatası azaltımı öngörülmektedir.</li>
        <li><strong>Teknoloji Altyapısı:</strong> Mevcut bulut ve veri ambarı sistemleriyle entegrasyonu kolaydır.</li>
      </ul>

      <h5 style="color: var(--ink); font-weight: 600; margin: 12px 0 6px 0;">Önerilen Pilot Adımları</h5>
      <ol style="padding-left: 20px; margin-bottom: 12px; list-style-type: decimal;">
        <li>Öncelikle sınırlı bir şubede/ekipte verilerin doğrulanması (2 hafta).</li>
        <li>Kullanıcı geri bildirimlerine göre model optimizasyonu (3 hafta).</li>
        <li>Grup genelinde kademeli dağıtım.</li>
      </ol>
    </div>
  ` : `
    <div style="font-size: 14px; line-height: 1.6; color: var(--ink-soft);">
      <h4 style="color: var(--ink); font-weight: 600; margin-bottom: 8px; font-size: 16px;">Detaylı Proje Raporu</h4>
      <p style="margin-bottom: 12px;">Yazar tarafından sunulan resmi proje detayları ve fizibilite parametreleri aşağıda yer almaktadır.</p>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
        <div style="background: var(--bg); padding: 10px; border-radius: 6px;">
          <span style="font-size: 11px; color: var(--muted); display: block;">Etki Seviyesi</span>
          <strong style="color: var(--ink);">${esc(idea.estimatedImpact || "Yüksek")}</strong>
        </div>
        <div style="background: var(--bg); padding: 10px; border-radius: 6px;">
          <span style="font-size: 11px; color: var(--muted); display: block;">Geliştirme Maliyeti</span>
          <strong style="color: var(--ink);">${esc(idea.estimatedCost || "Düşük")}</strong>
        </div>
        <div style="background: var(--bg); padding: 10px; border-radius: 6px;">
          <span style="font-size: 11px; color: var(--muted); display: block;">Uygulama Süresi</span>
          <strong style="color: var(--ink);">${esc(idea.implementationTime || "1-2 ay")}</strong>
        </div>
        <div style="background: var(--bg); padding: 10px; border-radius: 6px;">
          <span style="font-size: 11px; color: var(--muted); display: block;">Başarı Metriği</span>
          <strong style="color: var(--ink);">${esc(idea.successMetric || "Müşteri memnuniyeti")}</strong>
        </div>
      </div>

      <h5 style="color: var(--ink); font-weight: 600; margin: 12px 0 6px 0;">Problem Tanımı</h5>
      <p style="background: var(--bg); padding: 8px; border-radius: 6px; font-size: 13px; margin-bottom: 12px;">${esc(idea.problem || "Belirtilmemiş.")}</p>

      <h5 style="color: var(--ink); font-weight: 600; margin: 12px 0 6px 0;">Çözüm Teklifi</h5>
      <p style="background: var(--bg); padding: 8px; border-radius: 6px; font-size: 13px; margin-bottom: 12px;">${esc(idea.solution || "Belirtilmemiş.")}</p>
      
      ${idea.riskNotes ? `
        <h5 style="color: var(--ink); font-weight: 600; margin: 12px 0 6px 0;">Risk Analizi & Kısıtlar</h5>
        <p style="background: var(--bg); padding: 8px; border-radius: 6px; font-size: 13px; color: #b54708;">${esc(idea.riskNotes)}</p>
      ` : ""}
    </div>
  `;

  return `
    <div class="file-inspector-backdrop" style="position: fixed; inset: 0; background: rgba(0, 0, 0, 0.65); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; z-index: 1000;">
      <div class="file-inspector" style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; width: 90%; max-width: 560px; max-height: 85vh; display: flex; flex-direction: column; overflow: hidden; box-shadow: var(--shadow-deep);">
        <header style="display: flex; justify-content: space-between; align-items: center; padding: 16px; border-bottom: 1px solid var(--line-soft); background: var(--bg);">
          <div style="display: flex; flex-direction: column;">
            <strong style="font-size: 16px; color: var(--ink);">${esc(idea.title)}</strong>
            <small style="font-size: 12px; color: var(--muted); margin-top: 2px;">Ticker: ${esc(idea.marketTicker || "IDEA")}</small>
          </div>
          <button class="icon-button" data-action="close-report-modal" style="background: none; border: none; font-size: 20px; cursor: pointer; color: var(--ink-soft);">&times;</button>
        </header>
        <div style="flex: 1; padding: 20px; overflow-y: auto;">
          ${content}
        </div>
        <footer style="padding: 12px; border-top: 1px solid var(--line-soft); text-align: right; background: var(--bg);">
          <button class="btn primary btn-sm" data-action="close-report-modal" style="padding: 8px 16px;">Kapat</button>
        </footer>
      </div>
    </div>
  `;
}

function renderDataPage() {
  state.dataActiveSection = state.dataActiveSection || "datasets";
  const visible = filteredDataSets();
  
  return `
    <div class="view-stack data-page">
      <section class="apple-hero" style="padding: 24px; border-radius: 20px; background: var(--surface); border: 1px solid var(--line-soft); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
        <div>
          <span class="panel-kicker">Hammaddeler & Açık Veri</span>
          <h2>Veri&Bilgi</h2>
          <p>Yeni projeler, fikirler ve araştırmalar geliştirebilmek için gerekli sektörel veri setleri ve sorun havuzları.</p>
        </div>
        ${state.dataActiveSection === 'datasets' ? `
          <button class="btn primary" data-action="toggle-data-composer">${icon("database")} Veri Paylaş</button>
        ` : ""}
      </section>

      <!-- Segmented Section Switcher -->
      <div class="segmented" style="width: auto; max-width: 420px; margin-top: 16px;">
        <button class="btn ${state.dataActiveSection === 'datasets' ? 'active' : ''}" data-action="set-data-section" data-section="datasets" style="font-size: 13px; font-weight: 600;">
          ${icon("database")} Veri Setleri
        </button>
        <button class="btn ${state.dataActiveSection === 'suggestions' ? 'active' : ''}" data-action="set-data-section" data-section="suggestions" style="font-size: 13px; font-weight: 600;">
          ${icon("message-square-plus")} Sorun & Öneri Havuzu
        </button>
      </div>

      ${state.dataActiveSection === 'datasets' ? renderDatasetsSection(visible) : renderSuggestionsSection()}
    </div>
  `;
}

function renderDatasetsSection(visible) {
  return `
    ${state.showDataComposer ? renderDataComposer() : ""}

    <!-- Filters & Search Toolbar -->
    <section class="content-panel apple-toolbar-panel" style="padding: 16px; border-radius: 16px; margin-top: 10px;">
      <div class="toolbar" style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <label class="search-box" style="flex: 1; min-width: 200px;">
          ${icon("search")}
          <input class="input" placeholder="Veri setlerinde ara..." data-data-filter="search" value="${esc(state.filters.dataSearch || '')}" />
        </label>
        
        <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
          <select class="select" data-data-filter="tab" aria-label="Veri Filtresi">
            <option value="Tümü" ${state.filters.dataTab === 'Tümü' ? 'selected' : ''}>Kategori: Tümü</option>
            <option value="Kurumsal" ${state.filters.dataTab === 'Kurumsal' ? 'selected' : ''}>Kurumsal</option>
            <option value="Topluluk" ${state.filters.dataTab === 'Topluluk' ? 'selected' : ''}>Topluluk</option>
          </select>

          <select class="select" data-data-filter="company" aria-label="Şirket Filtresi">
            <option value="Tümü" ${state.filters.dataCompany === 'Tümü' ? 'selected' : ''}>Şirket: Tümü</option>
            <option value="Şirketler" ${state.filters.dataCompany === 'Şirketler' ? 'selected' : ''}>Şirketler</option>
            <option value="Bağımsız" ${state.filters.dataCompany === 'Bağımsız' ? 'selected' : ''}>Bağımsız / Topluluk</option>
            ${affiliationCompanies.map(c => `
              <option value="${c.id}" ${state.filters.dataCompany === c.id ? 'selected' : ''}>${esc(c.shortName)}</option>
            `).join("")}
          </select>

          <select class="select" data-data-filter="area" aria-label="Alan Filtresi">
            <option value="Tümü" ${state.filters.dataArea === 'Tümü' ? 'selected' : ''}>Alan: Tümü</option>
            ${borsaAreas.map(area => `
              <option value="${esc(area)}" ${state.filters.dataArea === area ? 'selected' : ''}>${esc(area)}</option>
            `).join("")}
          </select>

          <select class="select" data-data-filter="sort" aria-label="Sıralama">
            <option value="En yeni" ${state.filters.dataSort === 'En yeni' ? 'selected' : ''}>En yeni</option>
            <option value="En önemli" ${state.filters.dataSort === 'En önemli' ? 'selected' : ''}>En önemli</option>
            <option value="En çok etkileşim alan" ${state.filters.dataSort === 'En çok etkileşim alan' ? 'selected' : ''}>En çok etkileşim alan</option>
            <option value="En çok yorumlanan" ${state.filters.dataSort === 'En çok yorumlanan' ? 'selected' : ''}>En çok yorumlanan</option>
          </select>

          <button class="btn ghost slim-btn" data-action="clear-data-filters" style="padding: 6px 12px; font-size: 13px;">
            ${icon("rotate-ccw")} Temizle
          </button>
        </div>
      </div>
    </section>

    <!-- Data Card Grid -->
    <section class="data-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 20px; margin-top: 10px;">
      ${visible.map(dataset => renderDataCard(dataset)).join("") || `<div class="trading-empty">Bu filtrelere uygun veri seti bulunamadı.</div>`}
    </section>
  `;
}

function renderSuggestionsSection() {
  state.suggestionsPool = state.suggestionsPool || [
    {
      id: "sug-1",
      title: "Moka Ödeme API Dokümantasyonu Güncellemesi",
      category: "Veri Seti İsteği",
      description: "Moka API'lerinin güncel test ortamı verileri eksik. Entegrasyon geliştirmesi yapabilmemiz için güncel sandbox logları gerekiyor.",
      companyId: "moka",
      author: "Can Koç",
      date: "2026-06-08",
      status: "İnceleniyor"
    },
    {
      id: "sug-2",
      title: "İş-Net Portalında Mobil Giriş Hatası",
      category: "Uygulama Hataları",
      description: "iOS 16+ sürümlerinde İş-Net iç portalına giriş yaparken şifre doğrulama ekranı donuyor.",
      companyId: "is-net",
      author: "Defne Arman",
      date: "2026-06-06",
      status: "İletildi"
    },
    {
      id: "sug-3",
      title: "Karbon Ayak İzi Hesaplama Formülü Standartlaşması",
      category: "Genel Öneri",
      description: "Şişecam ve TİBAŞ karbon emisyon verilerini toplarken standart bir formül kullanılmalı, veriler karşılaştırılabilir olmalı.",
      companyId: "sisecam",
      author: "Selin Eryılmaz",
      date: "2026-06-05",
      status: "Çözüldü"
    },
    {
      id: "sug-leasing-1",
      title: "Leasing Ödeme Planı Simülasyon Veri Seti Talebi",
      category: "Veri Seti İsteği",
      description: "Tarım ve inşaat sektöründeki müşteriler için geliştirilecek esnek ödeme planı (balon ödemeli, sezonluk ödemeli vb.) algoritmalarını test etmek için anonimleştirilmiş geçmiş ödeme performansı veri setine ihtiyacımız var.",
      companyId: "is-leasing",
      author: "Nazlı Durukan",
      date: "2026-06-09",
      status: "İnceleniyor"
    },
    {
      id: "sug-leasing-2",
      title: "İkinci El İş Makinesi Değerleme Entegrasyonu",
      category: "Genel Öneri",
      description: "İş Leasing portalı üzerinden ikinci el iş makinesi işlemlerinde, piyasa fiyatı analizini otomatik yapabilmek için makine model ve çalışma saati bazlı API entegrasyonu öneriyoruz.",
      companyId: "is-leasing",
      author: "Aras Kılınç",
      date: "2026-06-08",
      status: "İletildi"
    },
    {
      id: "sug-leasing-3",
      title: "Leasing Sözleşmesi E-İmza Sürecindeki Gecikmeler",
      category: "Uygulama Hataları",
      description: "Mobil imza doğrulama adımlarında bazen SMS şifrelerinin gelmemesi veya gecikmesi nedeniyle sözleşme onay süreleri uzuyor. Servis sağlayıcı entegrasyonunun kontrol edilmeli.",
      companyId: "is-leasing",
      author: "Nazlı Durukan",
      date: "2026-06-07",
      status: "Çözüldü"
    }
  ];

  return `
    <div style="display: grid; grid-template-columns: 1fr 340px; gap: 24px; margin-top: 16px; align-items: start;">
      
      <!-- Left Panel: Existing suggestions/issues list -->
      <section style="display: flex; flex-direction: column; gap: 16px;">
        <h3 style="font-size: 16px; font-weight: 600; color: var(--ink); display: flex; align-items: center; gap: 8px; margin: 0;">
          ${icon("list-todo")} Havuzdaki Sorunlar & Öneriler (${state.suggestionsPool.length})
        </h3>
        
        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${state.suggestionsPool.map(item => {
            const comp = companyById(item.companyId);
            const statusColors = {
              "İletildi": { bg: "rgba(59, 130, 246, 0.1)", fg: "rgb(59, 130, 246)" },
              "İnceleniyor": { bg: "rgba(245, 158, 11, 0.1)", fg: "rgb(245, 158, 11)" },
              "Çözüldü": { bg: "rgba(16, 185, 129, 0.1)", fg: "rgb(16, 185, 129)" }
            };
            const sColor = statusColors[item.status] || { bg: "var(--bg)", fg: "var(--ink-soft)" };
            
            return `
              <article class="suggestion-item-card" style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 10px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
                  <div>
                    <h4 style="font-size: 14.5px; font-weight: 600; color: var(--ink); margin: 0 0 4px 0;">${esc(item.title)}</h4>
                    <span style="font-size: 11px; color: var(--muted);">${esc(item.author)} · ${esc(item.date)}</span>
                  </div>
                  <span style="font-size: 11px; font-weight: 600; padding: 4px 8px; border-radius: 20px; background: ${sColor.bg}; color: ${sColor.fg}; white-space: nowrap;">
                    ${esc(item.status)}
                  </span>
                </div>
                
                <p style="font-size: 13px; color: var(--ink-soft); line-height: 1.45; margin: 0;">${esc(item.description)}</p>
                
                <div style="display: flex; gap: 8px; align-items: center; border-top: 1px solid var(--line-soft); padding-top: 10px; font-size: 12px;">
                  <span style="background: var(--bg); border: 1px solid var(--line-soft); border-radius: 4px; padding: 2px 6px; color: var(--ink-soft); font-weight: 500;">
                    ${esc(item.category)}
                  </span>
                  ${comp ? `
                    <span style="display: inline-flex; align-items: center; gap: 4px; color: var(--ink-soft);">
                      ${companyLogo(comp, "tiny")} ${esc(comp.shortName)}
                    </span>
                  ` : ""}
                </div>
              </article>
            `;
          }).join("") || `<div class="trading-empty">Henüz sorun veya öneri bildirilmedi. İlk siz bildirin!</div>`}
        </div>
      </section>

      <!-- Right Panel: New suggestion form -->
      <aside class="suggestion-form-panel" style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 16px;">
        <h3 style="font-size: 15px; font-weight: 600; color: var(--ink); border-bottom: 1px solid var(--line-soft); padding-bottom: 8px; margin: 0;">
          ${icon("message-square-plus")} Yeni Bildirim Gönder
        </h3>
        
        ${state.suggestionsFeedback ? `
          <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgb(16, 185, 129); color: rgb(16, 185, 129); padding: 12px; border-radius: 8px; font-size: 12.5px; font-weight: 500; line-height: 1.4;">
            ${esc(state.suggestionsFeedback)}
          </div>
        ` : ""}
        
        ${state.suggestionsFeedbackError ? `
          <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgb(239, 68, 68); color: rgb(239, 68, 68); padding: 12px; border-radius: 8px; font-size: 12.5px; font-weight: 500; line-height: 1.4;">
            ${esc(state.suggestionsFeedbackError)}
          </div>
        ` : ""}

        <div style="display: flex; flex-direction: column; gap: 12px;">
          <label class="field" style="gap: 4px;">
            <span style="font-size: 12px; font-weight: 600;">Başlık / Konu</span>
            <input class="input slim-input" id="sug-title" placeholder="Kısa ve öz bir başlık yazın..." style="padding: 8px; font-size: 13px;" />
          </label>

          <label class="field" style="gap: 4px;">
            <span style="font-size: 12px; font-weight: 600;">Kategori</span>
            <select class="select slim-select" id="sug-category" style="padding: 8px; font-size: 13px;">
              <option value="Uygulama Hataları">Uygulama Hataları</option>
              <option value="Şirket Süreçleri">Şirket Süreçleri</option>
              <option value="Veri Seti İsteği">Veri Seti İsteği</option>
              <option value="Genel Öneri">Genel Öneri</option>
            </select>
          </label>

          <label class="field" style="gap: 4px;">
            <span style="font-size: 12px; font-weight: 600;">İlişkili Şirket</span>
            <select class="select slim-select" id="sug-company" style="padding: 8px; font-size: 13px;">
              <option value="independent">Bağımsız / Topluluk</option>
              ${affiliationCompanies.map(c => `<option value="${c.id}">${esc(c.name)}</option>`).join("")}
            </select>
          </label>

          <label class="field" style="gap: 4px;">
            <span style="font-size: 12px; font-weight: 600;">Açıklama</span>
            <textarea class="textarea" id="sug-desc" rows="4" placeholder="Sorunu veya önerinizi detaylandırın..." style="padding: 8px; font-size: 13px; resize: none;"></textarea>
          </label>

          <button class="btn primary slim-btn block" data-action="submit-suggestion" style="padding: 8px 12px; font-size: 13px; font-weight: 600; margin-top: 4px;">
            ${icon("send")} Gönder
          </button>
        </div>
      </aside>
    </div>
  `;
}

function filteredDataSets() {
  let list = [...(state.dataSets || [])];
  
  if (state.filters.dataSearch && state.filters.dataSearch.trim()) {
    const q = state.filters.dataSearch.toLowerCase();
    list = list.filter(d => 
      (d.title && d.title.toLowerCase().includes(q)) ||
      (d.summary && d.summary.toLowerCase().includes(q)) ||
      (d.sharedBy && d.sharedBy.toLowerCase().includes(q)) ||
      (d.area && d.area.toLowerCase().includes(q))
    );
  }

  if (state.filters.dataTab && state.filters.dataTab !== "Tümü") {
    list = list.filter(d => d.type === state.filters.dataTab);
  }

  if (state.filters.dataCompany && state.filters.dataCompany !== "Tümü") {
    if (state.filters.dataCompany === "Şirketler") {
      list = list.filter(d => d.companyId && d.companyId !== "independent");
    } else if (state.filters.dataCompany === "Bağımsız") {
      list = list.filter(d => !d.companyId || d.companyId === "independent");
    } else {
      list = list.filter(d => d.companyId === state.filters.dataCompany);
    }
  }

  if (state.filters.dataArea && state.filters.dataArea !== "Tümü") {
    list = list.filter(d => d.area === state.filters.dataArea);
  }

  const sortType = state.filters.dataSort || "En yeni";
  if (sortType === "En yeni") {
    list.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  } else if (sortType === "En önemli") {
    list.sort((a, b) => (b.importanceScore || 0) - (a.importanceScore || 0));
  } else if (sortType === "En çok etkileşim alan") {
    list.sort((a, b) => (b.likes || 0) - (a.likes || 0));
  } else if (sortType === "En çok yorumlanan") {
    list.sort((a, b) => ((b.comments || []).length) - ((a.comments || []).length));
  }

  return list;
}

function renderStars(score) {
  let starsHtml = "";
  for (let i = 1; i <= 5; i++) {
    const active = i <= score;
    starsHtml += `<span style="color: ${active ? '#F3A218' : 'var(--line-soft)'}; font-size: 14px; margin-right: 2px;">★</span>`;
  }
  return starsHtml;
}

function renderDataCard(dataset) {
  const company = companyById(dataset.companyId);
  const comments = dataset.comments || [];
  const stars = renderStars(dataset.importanceScore);
  const isExpanded = state.expandedComments && state.expandedComments[dataset.id];
  
  return `
    <article class="announcement-card" style="border-left: 4px solid ${dataset.type === 'Kurumsal' ? 'var(--primary)' : 'var(--indigo)'};">
      <div class="announcement-card-head" style="display: flex; justify-content: space-between; align-items: start;">
        <div class="announcement-brand">
          ${company ? companyLogo(company, "mini") : `<span class="independent-badge">Topluluk</span>`}
          <span>
            <strong>${company ? esc(company.shortName) : "Topluluk"}</strong>
            <small>${esc(dataset.type)} · ${esc(dataset.area)}</small>
          </span>
        </div>
        <div class="importance-badge" title="Önem Skoru: ${dataset.importanceScore}/5">
          ${stars}
        </div>
      </div>
      
      <h3 style="margin: 12px 0 6px 0; font-size: 17px; font-weight: 600; color: var(--ink);">${esc(dataset.title)}</h3>
      <p style="font-size: 13.5px; color: var(--ink-soft); line-height: 1.5; margin-bottom: 12px;">${esc(dataset.summary)}</p>
      
      <footer style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--line-soft); padding-top: 10px; font-size: 12px; color: var(--muted);">
        <span style="font-weight: 500;">Paylaşan: ${esc(dataset.sharedBy)}</span>
        <span>${esc(dataset.date)}</span>
      </footer>

      <!-- Interaction Bar -->
      <div class="card-interaction-bar" style="display: flex; gap: 16px; margin-top: 12px; padding-top: 8px; border-top: 1px dashed var(--line-soft); font-size: 13px;">
        <button class="btn-like-interaction" data-action="like-dataset" data-id="${dataset.id}" style="background: none; border: none; color: var(--ink-soft); display: flex; align-items: center; gap: 4px; cursor: pointer;">
          ${icon("thumbs-up")} <span>${dataset.likes || 0}</span>
        </button>
        <button class="btn-download-interaction" data-action="download-dataset" data-id="${dataset.id}" style="background: none; border: none; color: var(--ink-soft); display: flex; align-items: center; gap: 4px; cursor: pointer;">
          ${icon("download")} <span>${dataset.downloads || 0} İndirme</span>
        </button>
        <button class="btn-comment-interaction" data-action="toggle-card-comments" data-id="${dataset.id}" style="background: none; border: none; color: var(--ink-soft); display: flex; align-items: center; gap: 4px; cursor: pointer;">
          ${icon("message-square")} <span>${comments.length} Yorum</span>
        </button>
      </div>

      <!-- Comments Area -->
      ${isExpanded ? `
        <div class="card-comments-section" style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--line-soft);">
          <div class="comments-list" style="max-height: 150px; overflow-y: auto; margin-bottom: 8px;">
            ${comments.length === 0 ? `
              <p style="font-size: 12px; color: var(--muted); text-align: center;">Bu veri seti hakkında tartışma başlat. Sorularını yaz!</p>
            ` : comments.map(c => `
              <div class="comment-item" style="margin-bottom: 6px; font-size: 12.5px; line-height: 1.4;">
                <div style="font-weight: 600;">${esc(c.user)}</div>
                <div style="color: var(--ink-soft);">${esc(c.body)}</div>
              </div>
            `).join("")}
          </div>
          <div class="comment-composer" style="display: flex; gap: 6px;">
            <input class="input slim-input" placeholder="Bir şeyler yaz..." data-comment-input="${dataset.id}" style="flex: 1; font-size: 12.5px; padding: 6px 10px;" />
            <button class="btn primary slim-btn" data-action="submit-card-comment" data-type="dataset" data-id="${dataset.id}" style="padding: 6px 12px; font-size: 13px;">Gönder</button>
          </div>
        </div>
      ` : ""}
    </article>
  `;
}

function renderDataComposer() {
  return `
    <article class="announcement-composer" style="background: var(--surface); border: 1px solid var(--line-soft); padding: 20px; border-radius: 16px; margin-top: 12px; box-shadow: var(--shadow-soft);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <h3>Yeni Veri Paylaşımı</h3>
        <button class="icon-button" data-action="toggle-data-composer" style="background: none; border: none; font-size: 18px; cursor: pointer; color: var(--muted);">&times;</button>
      </div>
      
      <div class="composer-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 12px;">
        <label class="field">
          <span>Veri Başlığı</span>
          <input class="input" id="data-composer-title" placeholder="Bulgu, anket veya veri seti adı" />
        </label>
        
        <label class="field">
          <span>Kategori</span>
          <select class="select" id="data-composer-type">
            <option value="Kurumsal">Kurumsal Veri</option>
            <option value="Topluluk">Topluluk Verisi</option>
          </select>
        </label>

        <label class="field">
          <span>Şirket / Topluluk</span>
          <select class="select" id="data-composer-company">
            <option value="independent">Bağımsız / Topluluk</option>
            ${affiliationCompanies.map(c => `<option value="${c.id}">${esc(c.name)}</option>`).join("")}
          </select>
        </label>

        <label class="field">
          <span>Alan Kategorisi</span>
          <select class="select" id="data-composer-area">
            ${borsaAreas.map(area => `<option value="${esc(area)}">${esc(area)}</option>`).join("")}
          </select>
        </label>

        <label class="field">
          <span>Önem Derecesi (1-5 Yıldız)</span>
          <select class="select" id="data-composer-importance">
            <option value="5">★★★★★ (Çok Yüksek)</option>
            <option value="4">★★★★☆ (Yüksek)</option>
            <option value="3">★★★☆☆ (Orta)</option>
            <option value="2">★★☆☆☆ (Düşük)</option>
            <option value="1">★☆☆☆☆ (Çok Düşük)</option>
          </select>
        </label>
      </div>

      <label class="field" style="margin-bottom: 16px;">
        <span>Açıklama & Paylaşım Amacı</span>
        <textarea class="textarea" id="data-composer-summary" rows="3" placeholder="İnsanların bu veriyi hammadde olarak nasıl kullanabileceğini açıklayın..."></textarea>
      </label>

      <div style="display: flex; justify-content: flex-end; gap: 8px;">
        <button class="btn ghost" data-action="toggle-data-composer">Vazgeç</button>
        <button class="btn primary" data-action="submit-dataset">Veriyi Yayınla</button>
      </div>
    </article>
  `;
}

function filteredAnnouncements() {
  let list = [...(state.announcements || [])];
  
  if (state.filters.announcementSearch && state.filters.announcementSearch.trim()) {
    const q = state.filters.announcementSearch.toLowerCase();
    list = list.filter(item => 
      (item.title && item.title.toLowerCase().includes(q)) ||
      (item.body && item.body.toLowerCase().includes(q)) ||
      (item.area && item.area.toLowerCase().includes(q))
    );
  }

  // Kaynak: Tümü, Kurumsal, Topluluk
  if (state.filters.announcementTab && state.filters.announcementTab !== "Tümü") {
    list = list.filter(item => item.type === state.filters.announcementTab);
  }

  // Şirket Filtresi: Tümü, Şirketler, Bağımsız / Topluluk, specific company
  if (state.filters.announcementCompany && state.filters.announcementCompany !== "Tümü") {
    if (state.filters.announcementCompany === "Şirketler") {
      list = list.filter(item => item.companyId && item.companyId !== "independent");
    } else if (state.filters.announcementCompany === "Bağımsız / Topluluk") {
      list = list.filter(item => !item.companyId || item.companyId === "independent");
    } else {
      list = list.filter(item => item.companyId === state.filters.announcementCompany);
    }
  }

  // Alan Filtresi
  if (state.filters.announcementArea && state.filters.announcementArea !== "Tümü") {
    list = list.filter(item => item.area === state.filters.announcementArea);
  }

  const sortType = state.filters.announcementSort || "En yeni";
  if (sortType === "En yeni") {
    list.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  } else if (sortType === "En önemli") {
    list.sort((a, b) => (b.importanceScore || 0) - (a.importanceScore || 0));
  } else if (sortType === "En çok etkileşim alan") {
    list.sort((a, b) => (b.likes || 0) - (a.likes || 0));
  } else if (sortType === "En çok yorumlanan") {
    list.sort((a, b) => ((b.comments || []).length) - ((a.comments || []).length));
  }

  return list;
}

function renderAnnComposer() {
  return `
    <article class="announcement-composer" style="background: var(--surface); border: 1px solid var(--line-soft); padding: 20px; border-radius: 16px; margin-top: 12px; box-shadow: var(--shadow-soft);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <h3>Yeni Duyuru Yayınla</h3>
        <button class="icon-button" data-action="toggle-announcement-composer" style="background: none; border: none; font-size: 18px; cursor: pointer; color: var(--muted);">&times;</button>
      </div>

      <div class="composer-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 12px;">
        <label class="field">
          <span>Duyuru Başlığı</span>
          <input class="input" id="ann-composer-title" placeholder="Kısa ve net duyuru başlığı" />
        </label>
        
        <label class="field">
          <span>Kaynak</span>
          <select class="select" id="ann-composer-type">
            <option value="Kurumsal">Kurumsal</option>
            <option value="Topluluk">Topluluk</option>
          </select>
        </label>

        <label class="field">
          <span>Şirket / Topluluk</span>
          <select class="select" id="ann-composer-company">
            <option value="independent">Bağımsız / Topluluk</option>
            ${affiliationCompanies.map(c => `<option value="${c.id}">${esc(c.name)}</option>`).join("")}
          </select>
        </label>

        <label class="field">
          <span>Alan Kategorisi</span>
          <select class="select" id="ann-composer-area">
            <option value="Etkinlikler">Etkinlikler</option>
            <option value="Eğitimler">Eğitimler</option>
            <option value="Dereceler">Dereceler</option>
            <option value="Şirket Haberleri">Şirket Haberleri</option>
            <option value="Diğer">Diğer</option>
          </select>
        </label>

        <label class="field">
          <span>Önem Puanı</span>
          <select class="select" id="ann-composer-importance">
            <option value="5">★★★★★ (Kritik)</option>
            <option value="4">★★★★☆ (Yüksek)</option>
            <option value="3">★★★☆☆ (Orta)</option>
            <option value="2">★★☆☆☆ (Düşük)</option>
            <option value="1">★☆☆☆☆ (Çok Düşük)</option>
          </select>
        </label>
      </div>

      <label class="field" style="margin-bottom: 16px;">
        <span>İçerik</span>
        <textarea class="textarea" id="ann-composer-body" rows="3" placeholder="Duyuru detaylarını yazın..."></textarea>
      </label>

      <div style="display: flex; justify-content: flex-end; gap: 8px;">
        <button class="btn ghost" data-action="toggle-announcement-composer">Vazgeç</button>
        <button class="btn primary" data-action="submit-announcement">Yayınla</button>
      </div>
    </article>
  `;
}

function renderSocial() {
  const user = currentUser();
  const recommendedPeople = peopleDirectory.filter(p => p.id !== user.id && !state.connectedUserIds.includes(p.id)).slice(0, 4);
  
  state.socialActiveTab = state.socialActiveTab || "all";
  let feedList = [...(state.socialPosts || [])];
  
  if (state.socialActiveTab === "network") {
    feedList = feedList.filter(post => post.userId === user.id || state.connectedUserIds.includes(post.userId));
  }

  if (state.filters.socialSearch && state.filters.socialSearch.trim()) {
    const q = state.filters.socialSearch.toLowerCase();
    feedList = feedList.filter(post => 
      (post.userName && post.userName.toLowerCase().includes(q)) ||
      (post.body && post.body.toLowerCase().includes(q))
    );
  }

  return `
    <div class="view-stack social-page" style="max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 280px 1fr 280px; gap: 24px; align-items: start;">
      
      <!-- Left Profile Column -->
      <aside class="social-profile-card" style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 20px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 12px;">
        <div style="cursor: pointer;" data-action="view-profile" data-user-id="${user.id}">
          ${avatar(user.name, "large", user.photo || "")}
        </div>
        <div style="margin-top: 4px;">
          <h3 style="font-size: 16px; font-weight: 600; color: var(--ink); margin-bottom: 2px; cursor: pointer;" data-action="view-profile" data-user-id="${user.id}">${esc(user.name)}</h3>
          <span style="font-size: 12px; color: var(--muted); line-height: 1.3; display: block;">${esc(user.title || "Platform Üyesi")}</span>
        </div>
        <div style="display: flex; gap: 16px; width: 100%; border-top: 1px solid var(--line-soft); padding-top: 12px; margin-top: 4px; justify-content: center; font-size: 13px;">
          <div>
            <strong style="display: block; color: var(--ink); font-size: 15px;">${state.connectedUserIds.length}</strong>
            <span style="color: var(--muted); font-size: 11px;">Bağlantı</span>
          </div>
          <div>
            <strong style="display: block; color: var(--ink); font-size: 15px;">${state.ideas.filter(i => i.authorId === user.id).length}</strong>
            <span style="color: var(--muted); font-size: 11px;">Proje</span>
          </div>
        </div>
      </aside>

      <!-- Middle Feed Column -->
      <main class="social-feed-flow" style="display: flex; flex-direction: column; gap: 16px;">
        
        <!-- Segmented Tab Switcher -->
        <div class="segmented social-tab-switcher" style="width: 100%;">
          <button class="btn ${state.socialActiveTab === 'network' ? 'active' : ''}" data-action="set-social-tab" data-tab="network" style="font-size: 13px; font-weight: 600;">
            ${icon("users-round")} Ağım
          </button>
          <button class="btn ${state.socialActiveTab === 'all' ? 'active' : ''}" data-action="set-social-tab" data-tab="all" style="font-size: 13px; font-weight: 600;">
            ${icon("globe")} Tümü
          </button>
          <button class="btn ${state.socialActiveTab === 'leaderboard' ? 'active' : ''}" data-action="set-social-tab" data-tab="leaderboard" style="font-size: 13px; font-weight: 600;">
            ${icon("trophy")} Lider Tablosu
          </button>
        </div>

        ${state.socialActiveTab === "leaderboard" ? renderSocialLeaderboard() : `
          <!-- Post Composer -->
          <article class="social-post-composer" style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 16px; display: flex; flex-direction: column; gap: 12px;">
            <div style="display: flex; gap: 10px; align-items: center;">
              ${avatar(user.name, "medium", user.photo || "")}
              <textarea class="textarea" id="social-composer-textarea" rows="2" placeholder="Bugün inovasyon adına ne paylaşıyorsun?" style="flex: 1; resize: none; border-radius: 12px; padding: 10px; font-size: 14px; border-color: var(--line-soft);"></textarea>
            </div>
            <div class="social-composer-actions">
              <label class="search-box" style="width: 220px; font-size: 12px;">
                ${icon("search")}
                <input class="input" placeholder="Akışta ara..." data-social-filter="search" value="${esc(state.filters.socialSearch || '')}" style="padding: 4px 8px 4px 28px; font-size: 12.5px;" />
              </label>
              <div class="social-composer-tools">
                <button class="btn ghost" data-action="submit-social-rich-post" data-kind="poll">${icon("list-checks")} Anket</button>
                <label class="btn ghost social-photo-upload">
                  ${icon("image-plus")} Fotoğraf
                  <input type="file" accept=".png,.jpg,.jpeg,.webp,.gif" data-social-photo />
                </label>
                <button class="btn ghost" data-action="submit-social-rich-post" data-kind="image">${icon("image")} Görsel paylaş</button>
                <button class="btn ghost" data-action="submit-social-rich-post" data-kind="link">${icon("link")} Link</button>
              </div>
              <button class="btn primary" data-action="submit-social-post" style="padding: 6px 16px; font-size: 13px;">Paylaş</button>
            </div>
            ${state.socialPhotoDraft ? `
              <div class="social-photo-preview">
                <img src="${esc(state.socialPhotoDraft.objectUrl)}" alt="Seçilen fotoğraf" />
                <span>
                  <strong>${esc(state.socialPhotoDraft.name)}</strong>
                  <small>Paylaşınca gönderiye fotoğraf olarak eklenecek.</small>
                </span>
                <button class="btn ghost" data-action="clear-social-photo">${icon("x")} Kaldır</button>
              </div>
            ` : ""}
          </article>

          <!-- Feed List -->
          <div style="display: flex; flex-direction: column; gap: 16px;">
            ${feedList.map(post => renderSocialPostCard(post)).join("") || `
              <div style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 40px; text-align: center; color: var(--muted);">
                ${icon("globe", "32")}
                <p style="margin-top: 10px;">Aramanıza uygun gönderi bulunamadı.</p>
              </div>
            `}
          </div>
        `}
      </main>

      <!-- Right Column: Connections & Team Recruitment -->
      <div style="display: flex; flex-direction: column; gap: 20px;">
        
        <!-- Connections Widget -->
        <aside class="social-connections-widget" style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 16px;">
          <h3 style="font-size: 15px; font-weight: 600; color: var(--ink); border-bottom: 1px solid var(--line-soft); padding-bottom: 8px; margin: 0;">Bağlantı Önerileri</h3>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${recommendedPeople.map(person => `
              <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px;">
                <div style="display: flex; gap: 8px; align-items: center; cursor: pointer;" data-action="view-profile" data-user-id="${person.id}">
                  ${avatar(person.name, "medium", person.photo || "")}
                  <div style="line-height: 1.2;">
                    <strong style="font-size: 13px; color: var(--ink); display: block;">${esc(person.name)}</strong>
                    <small style="font-size: 11px; color: var(--muted); display: block; max-width: 140px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${esc(person.title || "Platform Üyesi")}</small>
                  </div>
                </div>
                <button class="btn primary btn-sm" data-action="connect-user" data-id="${person.id}" style="padding: 4px 8px; font-size: 11px; font-weight: 600;">Ekle</button>
              </div>
            `).join("") || `<p style="font-size: 12px; color: var(--muted); text-align: center;">Öneri kalmadı.</p>`}
          </div>
        </aside>

        <!-- Ekip İlanları Yönlendirme -->
        ${(() => {
          const listings = (state.announcements || []).filter(a => a.missingRoles && a.missingRoles.length > 0);
          if (!listings.length) return "";
          return `
            <aside style="background: linear-gradient(135deg, rgba(var(--primary-rgb),0.07), rgba(var(--primary-rgb),0.02)); border: 1px solid rgba(var(--primary-rgb),0.2); border-radius: 16px; padding: 18px; display: flex; flex-direction: column; gap: 12px;">
              <div style="display:flex;align-items:center;gap:8px;">
                ${icon("users-round")}
                <strong style="font-size:14px;color:var(--ink);">Ekip Arıyor</strong>
                <span style="font-size:11px;color:var(--muted);margin-left:auto;">${listings.length} aktif ilan</span>
              </div>
              <p style="font-size:12.5px;color:var(--muted);margin:0;line-height:1.5;">Takım arkadaşı arayan projeler var. Tüm detayları Ekipler sayfasında gör.</p>
              <button class="btn primary" data-page="teams" style="font-size:13px;padding:8px 14px;">
                ${icon("arrow-right")} Ekip İlanlarını Gör
              </button>
            </aside>
          `;
        })()}

      </div>

    </div>
  `;
}

function renderSocialPostCard(post) {
  const comments = post.comments || [];
  const likedByMe = post.likedByMe;
  const isExpanded = state.expandedComments && state.expandedComments[post.id];
  
  return `
    <article class="social-post-card" style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 12px; position: relative;">
      
      <!-- Author Info Header -->
      <div style="display: flex; justify-content: space-between; align-items: start;">
        <div style="display: flex; gap: 10px; align-items: center; cursor: pointer;" data-action="view-profile" data-user-id="${post.userId}">
          ${avatar(post.userName, "medium", post.userAvatar || "")}
          <div style="line-height: 1.3;">
            <strong style="font-size: 14.5px; color: var(--ink); display: block;">${esc(post.userName)}</strong>
            <small style="font-size: 11.5px; color: var(--muted); display: block;">${esc(post.userBio || "")}</small>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 6px;">
          <small style="font-size: 11px; color: var(--muted);">${esc(post.date)}</small>
          <button class="btn ghost btn-sm" data-action="start-direct-chat-from-social" data-user-id="${post.userId}" style="padding: 4px 6px;" title="Sohbet Et">${icon("message-square-text")}</button>
        </div>
      </div>

      <!-- Post Body -->
      <p style="font-size: 14px; color: var(--ink-soft); line-height: 1.5; white-space: pre-wrap; margin: 4px 0;">${esc(post.body)}</p>
      ${renderSocialPostRichContent(post)}

      <!-- Interaction Actions -->
      <div style="display: flex; gap: 16px; border-top: 1px solid var(--line-soft); padding-top: 10px; margin-top: 4px; font-size: 13px;">
        <button data-action="like-social-post" data-id="${post.id}" style="background: none; border: none; color: ${likedByMe ? 'var(--primary)' : 'var(--ink-soft)'}; display: flex; align-items: center; gap: 4px; cursor: pointer; font-weight: ${likedByMe ? '600' : 'normal'};">
          ${icon("thumbs-up")} <span>${post.likes || 0}</span>
        </button>
        <button data-action="toggle-card-comments" data-id="${post.id}" style="background: none; border: none; color: var(--ink-soft); display: flex; align-items: center; gap: 4px; cursor: pointer;">
          ${icon("message-square")} <span>${comments.length} Yorum</span>
        </button>
      </div>

      <!-- Comments List Area -->
      ${isExpanded ? `
        <div class="card-comments-section" style="margin-top: 8px; padding-top: 12px; border-top: 1px solid var(--line-soft);">
          <div class="comments-list" style="max-height: 180px; overflow-y: auto; margin-bottom: 8px; display: flex; flex-direction: column; gap: 8px;">
            ${comments.length === 0 ? `
              <p style="font-size: 12px; color: var(--muted); text-align: center; margin: 8px 0;">Henüz yorum yapılmamış. İlk yorumu sen yap!</p>
            ` : comments.map(c => `
              <div style="display: flex; gap: 8px; align-items: start; font-size: 12.5px;">
                ${avatar(c.userName, "tiny", c.userAvatar || "")}
                <div style="background: var(--bg); padding: 8px 12px; border-radius: 12px; flex: 1;">
                  <strong style="color: var(--ink); cursor: pointer;" data-action="view-profile-name" data-name="${esc(c.userName)}">${esc(c.userName)}</strong>
                  <p style="color: var(--ink-soft); margin-top: 2px;">${esc(c.body)}</p>
                  <small style="font-size: 10px; color: var(--muted); margin-top: 4px; display: block;">${esc(c.date || "10dk önce")}</small>
                </div>
              </div>
            `).join("")}
          </div>
          <div class="comment-composer" style="display: flex; gap: 6px;">
            <input class="input slim-input" placeholder="Yorum yaz..." data-comment-input="${post.id}" style="flex: 1; font-size: 12.5px; padding: 6px 10px;" />
            <button class="btn primary slim-btn" data-action="submit-card-comment" data-type="social" data-id="${post.id}" style="padding: 6px 12px; font-size: 13px;">Gönder</button>
          </div>
        </div>
      ` : ""}

    </article>
  `;
}

function renderSocialLeaderboard() {
  const mode = state.socialLeaderboardMode || "total";
  const modes = [
    { id: "idea", label: "Girişimci", icon: "lightbulb" },
    { id: "trade", label: "Borsacı", icon: "trending-up" },
    { id: "total", label: "Tümü", icon: "trophy" }
  ];
  const rows = socialLeaderboardRows()
    .map(row => ({ ...row, totalMoney: row.ideaMoney + row.tradeMoney }))
    .sort((a, b) => leaderboardValue(b, mode) - leaderboardValue(a, mode));

  return `
    <article class="social-leaderboard-card">
      <div class="social-leaderboard-head">
        <div>
          <span class="panel-kicker">Sosyal</span>
          <h3>Lider Tablosu</h3>
          <p>Demo puanlama: girişimcilik katkısı, borsa getirisi ve toplam kazanç.</p>
        </div>
        <strong>${formatCurrency(leaderboardValue(rows[0], mode))}</strong>
      </div>
      <div class="social-leaderboard-tabs">
        ${modes.map(item => `
          <button class="btn ${mode === item.id ? "active" : ""}" data-action="set-social-leaderboard-mode" data-mode="${item.id}">
            ${icon(item.icon)} ${esc(item.label)}
          </button>
        `).join("")}
      </div>
      <div class="social-leaderboard-list">
        ${rows.map((row, index) => `
          <div class="social-leaderboard-row">
            <em>${index + 1}</em>
            ${avatar(row.name, "medium", row.photo)}
            <span>
              <strong>${esc(row.name)}</strong>
              <small>${esc(row.role)} · ${esc(row.company)}</small>
            </span>
            <div>
              <strong>${formatCurrency(leaderboardValue(row, mode))}</strong>
              <small>Girişimci ${formatCurrency(row.ideaMoney)} · Borsacı ${formatCurrency(row.tradeMoney)}</small>
            </div>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}

function socialLeaderboardRows() {
  const rows = [
    { userId: "p02", ideaMoney: 38400, tradeMoney: 19650 },
    { userId: "p05", ideaMoney: 31200, tradeMoney: 22480 },
    { userId: "p03", ideaMoney: 27600, tradeMoney: 18820 },
    { userId: "p15", ideaMoney: 21850, tradeMoney: 25740 },
    { userId: "u3", ideaMoney: 17400, tradeMoney: 30120 },
    { userId: "p09", ideaMoney: 24600, tradeMoney: 14980 },
    { userId: "p17", ideaMoney: 19800, tradeMoney: 21300 }
  ];
  return rows.map(row => {
    const person = personById(row.userId) || {};
    const company = companyById(person.companyId || "tibas-holding");
    return {
      ...row,
      name: person.name || "NEW IDEA EXCHANGE Üyesi",
      role: person.role || person.title || "Katılımcı",
      company: company.shortName || company.name,
      photo: person.photo || ""
    };
  });
}

function leaderboardValue(row, mode) {
  if (!row) return 0;
  if (mode === "idea") return row.ideaMoney || 0;
  if (mode === "trade") return row.tradeMoney || 0;
  return row.totalMoney || (row.ideaMoney || 0) + (row.tradeMoney || 0);
}

function renderSocialPostRichContent(post) {
  return [
    post.poll ? renderPollOptions(post.poll, "social", post.id) : "",
    post.imageUrl ? `
      <figure class="social-rich-media">
        <img src="${esc(post.imageUrl)}" alt="${esc(post.imageAlt || "Sosyal görsel")}" loading="lazy" />
        ${post.imageCaption ? `<figcaption>${esc(post.imageCaption)}</figcaption>` : ""}
      </figure>
    ` : "",
    post.link ? `
      <a class="rich-link-preview" href="${esc(post.link.url)}" target="_blank" rel="noreferrer">
        <strong>${esc(post.link.title)}</strong>
        <span>${esc(post.link.description || post.link.url)}</span>
      </a>
    ` : ""
  ].join("");
}

function renderPollOptions(poll, context, id) {
  const options = poll.options || [];
  const total = options.reduce((sum, option) => sum + Number(option.votes || 0), 0) || 1;
  return `
    <div class="rich-poll">
      <strong>${esc(poll.question || "Anket")}</strong>
      ${options.map((option, index) => {
        const votes = Number(option.votes || 0);
        const pct = Math.round((votes / total) * 100);
        return `
          <button data-action="vote-rich-poll" data-context="${esc(context)}" data-id="${esc(id)}" data-option="${index}">
            <span>${esc(option.label)}</span>
            <small>${pct}%</small>
            <i style="width:${pct}%"></i>
          </button>
        `;
      }).join("")}
      <em>${total} oy</em>
    </div>
  `;
}

function createRichSocialPost(kind, bodyText, photoFile = null) {
  const me = currentUser();
  const profile = personById(me.id) || me;
  const base = {
    id: `sp-${Date.now()}`,
    userId: me.id,
    userName: me.name,
    userAvatar: profile.photo || me.photo || "",
    userBio: me.title || me.role || "Platform Üyesi",
    body: bodyText || (kind === "poll" ? "Bu pilotu hangi ekipten başlatalım?" : kind === "image" ? "Bugünkü saha ekranından kısa bir görsel not bırakıyorum." : "Bu kaynak ekip için faydalı olabilir."),
    date: "Şimdi",
    likes: 0,
    likedByMe: false,
    comments: []
  };
  if (kind === "poll") {
    base.poll = {
      question: "Bir sonraki sprint odağı ne olsun?",
      options: [
        { label: "Şube operasyonu", votes: 18 },
        { label: "AI analiz", votes: 26 },
        { label: "Müşteri deneyimi", votes: 21 }
      ]
    };
  } else if (kind === "image") {
    base.imageUrl = photoFile?.objectUrl || remoteImages.ideaVisuals[2];
    base.imageCaption = photoFile?.name || "Pilot ekran notu · ekip değerlendirmesi";
  } else if (kind === "link") {
    base.link = {
      title: "Fikir doğrulama notları",
      description: "Kısa problem tanımı, veri ihtiyacı ve beklenen etki özeti.",
      url: "https://www.isbank.com.tr/"
    };
  }
  return base;
}

function createRichMessage(kind) {
  const message = {
    id: `msg-${Date.now()}`,
    user: currentUser().name,
    own: true,
    time: new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })
  };
  if (kind === "poll") {
    return {
      ...message,
      body: "Hızlı karar için mini anket bıraktım.",
      poll: {
        question: "Pilot kapsamını nereden başlatalım?",
        options: [
          { label: "Holding geneli", votes: 12 },
          { label: "İstanbul kampüsleri", votes: 19 },
          { label: "Tek iştirak", votes: 8 }
        ]
      }
    };
  }
  if (kind === "image") {
    return {
      ...message,
      body: "Ekran akışını görsel olarak paylaşıyorum.",
      imageUrl: remoteImages.ideaVisuals[4],
      imageCaption: "Demo saha akışı"
    };
  }
  if (kind === "link") {
    return {
      ...message,
      body: "Kaynak linki burada, yorumlarınızı bekliyorum.",
      link: {
        title: "İşBank dijital kanallar notu",
        description: "Süreç iyileştirme için referans bağlantı.",
        url: "https://www.isbank.com.tr/"
      }
    };
  }
  return {
    ...message,
    body: "Dosya ekini bıraktım, uygun olanlar inceleyebilir.",
    file: { name: "pilot-kapsam-notu.pdf", size: "1.8 MB" }
  };
}

function pushMessageToCurrentThread(message) {
  if (state.selectedDirectPersonId) {
    if (!state.directThreads[state.selectedDirectPersonId]) state.directThreads[state.selectedDirectPersonId] = [];
    state.directThreads[state.selectedDirectPersonId].push(message);
    return;
  }
  const space = state.messageSpaces.find(item => item.id === state.selectedMessageSpaceId);
  if (space) space.messages.push(message);
}

function findRichMessageById(id) {
  for (const space of state.messageSpaces || []) {
    const found = (space.messages || []).find(message => message.id === id);
    if (found) return found;
  }
  for (const thread of Object.values(state.directThreads || {})) {
    const found = (thread || []).find(message => message.id === id);
    if (found) return found;
  }
  return null;
}

function renderProfileV2() {
  const userId = state.profileUserId || state.currentUserId;
  const user = personById(userId) || peopleDirectory.find(p => p.id === userId) || peopleDirectory[0];
  
  state.profileTab = state.profileTab || "ideas";
  
  const company = companyById(user.companyId);
  const isMe = userId === state.currentUserId;

  return `
    <div class="view-stack profile-page" style="max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px;">
      
      <!-- Top Card -->
      <section style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 24px; position: relative;">
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          ${avatar(user.name, "large", user.photo || "")}
          <div style="flex: 1; line-height: 1.4;">
            <h2 style="font-size: 22px; font-weight: 700; color: var(--ink); margin-bottom: 4px;">${esc(user.name)}</h2>
            <strong style="font-size: 14.5px; color: var(--primary); display: block; margin-bottom: 4px;">${esc(user.role || user.title || "Kullanıcı")}</strong>
            <span style="font-size: 13.5px; color: var(--ink-soft); display: flex; align-items: center; gap: 6px; margin-bottom: 2px;">
              ${icon("building", "14")} ${company ? esc(company.name) : "Bağımsız / Topluluk"}
            </span>
            <span style="font-size: 13px; color: var(--muted); display: flex; align-items: center; gap: 6px;">
              ${icon("mail", "14")} ${esc(user.email || (user.name.toLowerCase().replace(/\s+/g, '') + "@is-new.com"))}
            </span>
          </div>
          
          <div style="display: flex; gap: 10px; align-items: center;">
            ${isMe ? `
              <button class="btn secondary" data-page="settings">${icon("settings")} Profili Düzenle</button>
            ` : `
              <button class="btn primary" data-action="start-chat-from-profile" data-user-id="${user.id}">${icon("message-square-text")} Mesaj Gönder</button>
            `}
          </div>
        </div>

        <!-- Bio & CV section -->
        <div style="margin-top: 20px; border-top: 1px solid var(--line-soft); padding-top: 16px;">
          <h4 style="font-size: 14px; font-weight: 600; color: var(--ink); margin-bottom: 6px;">Hakkında</h4>
          <p style="font-size: 13.5px; color: var(--ink-soft); line-height: 1.5; margin-bottom: 12px;">${esc(user.bio || "Henüz biyografi eklenmemiş.")}</p>
          
          <h4 style="font-size: 14px; font-weight: 600; color: var(--ink); margin-bottom: 6px;">Özgeçmiş / CV Bilgisi</h4>
          <p style="font-size: 13.5px; color: var(--ink-soft); line-height: 1.5; background: var(--bg); padding: 12px; border-radius: 8px; border-left: 3px solid var(--primary); margin-bottom: 16px;">${esc(user.cv || "Henüz özgeçmiş bilgisi eklenmemiş.")}</p>
          
          <h4 style="font-size: 14px; font-weight: 600; color: var(--ink); margin-bottom: 8px;">Kazanılan Rozetler</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${(user.badges && user.badges.length > 0) ? user.badges.map(badge => `
              <span class="badge-pill" style="display: inline-flex; align-items: center; gap: 6px; font-size: 12.5px; background: rgba(var(--primary-rgb), 0.08); color: var(--primary); padding: 6px 12px; border-radius: 20px; border: 1px solid rgba(var(--primary-rgb), 0.15); font-weight: 600;">
                ${badge.includes("Fikir") || badge.includes("Köprü") ? "💡" : badge.includes("Aktif") || badge.includes("Katılımcı") ? "🔥" : badge.includes("Müşteri") || badge.includes("Deneyimi") ? "👥" : badge.includes("Pilot") || badge.includes("Sprint") ? "🚀" : badge.includes("Maliyet") || badge.includes("Analiz") ? "📊" : "🏅"} ${esc(badge)}
              </span>
            `).join("") : `<span style="font-size: 12.5px; color: var(--muted);">Henüz rozet kazanılmamış.</span>`}
          </div>
        </div>
      </section>

      <!-- Contributions Navigation Tabs -->
      <section style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; overflow: hidden; display: flex; flex-direction: column;">
        <nav style="display: flex; border-bottom: 1px solid var(--line-soft); background: var(--bg); flex-wrap: wrap;">
          <button class="btn" style="flex: 1; border-radius: 0; background: ${state.profileTab === 'ideas' ? 'var(--surface)' : 'transparent'}; border: none; border-bottom: 2px solid ${state.profileTab === 'ideas' ? 'var(--primary)' : 'transparent'}; font-weight: 600;" data-action="set-profile-tab" data-tab="ideas">
            Projeler (${state.ideas.filter(i => i.authorId === user.id).length})
          </button>
          <button class="btn" style="flex: 1; border-radius: 0; background: ${state.profileTab === 'data' ? 'var(--surface)' : 'transparent'}; border: none; border-bottom: 2px solid ${state.profileTab === 'data' ? 'var(--primary)' : 'transparent'}; font-weight: 600;" data-action="set-profile-tab" data-tab="data">
            Veri&Bilgi (${(state.dataSets || []).filter(d => d.sharedBy === user.name).length})
          </button>
          <button class="btn" style="flex: 1; border-radius: 0; background: ${state.profileTab === 'announcements' ? 'var(--surface)' : 'transparent'}; border: none; border-bottom: 2px solid ${state.profileTab === 'announcements' ? 'var(--primary)' : 'transparent'}; font-weight: 600;" data-action="set-profile-tab" data-tab="announcements">
            Duyurular (${(state.announcements || []).filter(a => a.authorId === user.id).length})
          </button>
          <button class="btn" style="flex: 1; border-radius: 0; background: ${state.profileTab === 'social' ? 'var(--surface)' : 'transparent'}; border: none; border-bottom: 2px solid ${state.profileTab === 'social' ? 'var(--primary)' : 'transparent'}; font-weight: 600;" data-action="set-profile-tab" data-tab="social">
            Gönderiler (${(state.socialPosts || []).filter(s => s.userId === user.id).length})
          </button>
          ${isMe ? `
            <button class="btn" style="flex: 1; border-radius: 0; background: ${state.profileTab === 'applications' ? 'var(--surface)' : 'transparent'}; border: none; border-bottom: 2px solid ${state.profileTab === 'applications' ? 'var(--primary)' : 'transparent'}; font-weight: 600;" data-action="set-profile-tab" data-tab="applications">
              Başvurularım (${state.ideas.filter(i => i.applications && i.applications.some(a => a.userId === user.id)).length})
            </button>
          ` : ""}
        </nav>

        <div style="padding: 20px;">
          ${renderProfileTabContent(user, state.profileTab)}
        </div>
      </section>

    </div>
  `;
}

function renderProfileTabContent(user, tab) {
  if (tab === "ideas") {
    const list = state.ideas.filter(i => i.authorId === user.id);
    if (list.length === 0) return `<p style="color: var(--muted); font-size: 13.5px; text-align: center;">Yayınlanan herhangi bir borsa projesi bulunmamaktadır.</p>`;
    return `<div style="display: grid; grid-template-columns: 1fr; gap: 12px;">
      ${list.map(i => `
        <div style="background: var(--bg); border: 1px solid var(--line-soft); border-radius: 12px; padding: 16px; cursor: pointer;" data-action="open-idea" data-id="${i.id}">
          <h4 style="font-weight: 600; font-size: 15px; margin-bottom: 4px; color: var(--ink);">${esc(i.title)}</h4>
          <p style="font-size: 13px; color: var(--ink-soft); line-height: 1.4;">${esc(i.summary)}</p>
          <div style="display: flex; gap: 8px; margin-top: 8px; font-size: 11.5px; color: var(--muted);">
            <span>Lig: ${esc(i.marketCategory || "Fikir")}</span>
            <span>·</span>
            <span>Alan: ${esc(i.area || "Diğer")}</span>
          </div>
        </div>
      `).join("")}
    </div>`;
  }

  if (tab === "data") {
    const list = (state.dataSets || []).filter(d => d.sharedBy === user.name);
    if (list.length === 0) return `<p style="color: var(--muted); font-size: 13.5px; text-align: center;">Yayınlanan herhangi bir veri seti bulunmamaktadır.</p>`;
    return `<div style="display: grid; grid-template-columns: 1fr; gap: 12px;">
      ${list.map(d => `
        <div style="background: var(--bg); border: 1px solid var(--line-soft); border-radius: 12px; padding: 16px;">
          <h4 style="font-weight: 600; font-size: 15px; margin-bottom: 4px; color: var(--ink);">${esc(d.title)}</h4>
          <p style="font-size: 13px; color: var(--ink-soft); line-height: 1.4;">${esc(d.summary)}</p>
          <div style="display: flex; gap: 8px; margin-top: 8px; font-size: 11.5px; color: var(--muted);">
            <span>Kategori: ${esc(d.type)}</span>
            <span>·</span>
            <span>Önem: ${renderStars(d.importanceScore)}</span>
          </div>
        </div>
      `).join("")}
    </div>`;
  }

  if (tab === "announcements") {
    const list = (state.announcements || []).filter(a => a.authorId === user.id);
    if (list.length === 0) return `<p style="color: var(--muted); font-size: 13.5px; text-align: center;">Yayınlanan herhangi bir duyuru bulunmamaktadır.</p>`;
    return `<div style="display: grid; grid-template-columns: 1fr; gap: 12px;">
      ${list.map(a => `
        <div style="background: var(--bg); border: 1px solid var(--line-soft); border-radius: 12px; padding: 16px;">
          <h4 style="font-weight: 600; font-size: 15px; margin-bottom: 4px; color: var(--ink);">${esc(a.title)}</h4>
          <p style="font-size: 13px; color: var(--ink-soft); line-height: 1.4;">${esc(a.body)}</p>
          <div style="display: flex; gap: 8px; margin-top: 8px; font-size: 11.5px; color: var(--muted);">
            <span>Kategori: ${esc(a.area)}</span>
            <span>·</span>
            <span>Tarih: ${esc(a.date)}</span>
          </div>
        </div>
      `).join("")}
    </div>`;
  }

  if (tab === "social") {
    const list = (state.socialPosts || []).filter(s => s.userId === user.id);
    if (list.length === 0) return `<p style="color: var(--muted); font-size: 13.5px; text-align: center;">Yayınlanan herhangi bir sosyal gönderi bulunmamaktadır.</p>`;
    return `<div style="display: grid; grid-template-columns: 1fr; gap: 12px;">
      ${list.map(s => `
        <div style="background: var(--bg); border: 1px solid var(--line-soft); border-radius: 12px; padding: 16px;">
          <p style="font-size: 13px; color: var(--ink-soft); line-height: 1.5; white-space: pre-wrap;">${esc(s.body)}</p>
          <div style="display: flex; gap: 8px; margin-top: 8px; font-size: 11.5px; color: var(--muted);">
            <span>${s.likes || 0} Beğeni</span>
            <span>·</span>
            <span>${(s.comments || []).length} Yorum</span>
          </div>
        </div>
      `).join("")}
    </div>`;
  }

  if (tab === "applications") {
    const list = [];
    state.ideas.forEach(i => {
      if (i.applications) {
        i.applications.forEach(a => {
          if (a.userId === user.id) {
            list.push({ idea: i, application: a });
          }
        });
      }
    });
    if (list.length === 0) return `<p style="color: var(--muted); font-size: 13.5px; text-align: center;">Yaptığınız herhangi bir proje başvurusu bulunmamaktadır.</p>`;
    return `<div style="display: grid; grid-template-columns: 1fr; gap: 12px;">
      ${list.map(item => `
        <div style="background: var(--bg); border: 1px solid var(--line-soft); border-radius: 12px; padding: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: start; gap: 10px;">
            <h4 style="font-weight: 600; font-size: 15px; margin-bottom: 4px; color: var(--ink); cursor: pointer;" data-action="open-idea" data-id="${item.idea.id}">${esc(item.idea.title)}</h4>
            <span style="font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 4px; 
                         background: ${item.application.status === 'accepted' ? 'rgba(40, 167, 69, 0.1)' : item.application.status === 'rejected' ? 'rgba(220, 53, 69, 0.1)' : 'var(--line-soft)'};
                         color: ${item.application.status === 'accepted' ? 'var(--positive)' : item.application.status === 'rejected' ? 'var(--negative)' : 'var(--ink-soft)'};">
              ${item.application.status === 'accepted' ? 'Kabul Edildi' : item.application.status === 'rejected' ? 'Reddedildi' : 'Beklemede'}
            </span>
          </div>
          <p style="font-size: 13px; color: var(--ink-soft); line-height: 1.4; margin-top: 6px;"><strong>Motivasyonum:</strong> ${esc(item.application.motivation)}</p>
          <div style="display: flex; gap: 8px; margin-top: 8px; font-size: 11.5px; color: var(--muted);">
            <span>Tercih Rol: ${esc(item.application.role)}</span>
            <span>·</span>
            <span>Tarih: ${esc(item.application.date)}</span>
          </div>
        </div>
      `).join("")}
    </div>`;
  }

  return "";
}

function renderSystemDetails() {
  const tabs = ["Çalışma Prensibi", "Teknik Altyapı", "Kullanım Kılavuzu"];
  
  let contentHtml = "";
  
  if (state.systemDetailsTab === "Çalışma Prensibi") {
    contentHtml = `
      <section class="content-panel" style="padding: 24px; border-radius: 16px; background: var(--surface); border: 1px solid var(--line-soft); display: flex; flex-direction: column; gap: 20px;">
        <h3 style="color: var(--ink); font-weight: 600; font-size: 18px; margin-top: 0; display: flex; align-items: center; gap: 8px;">
          ${icon("help-circle")} 1. İnovasyon Hunisi Nedir?
        </h3>
        <p style="color: var(--ink-soft); line-height: 1.6; margin: 0;">
          İş NEW platformu, iştirak ve departmanlarımızdan gelen tüm yenilikçi fikirleri ve süreç iyileştirmelerini objektif bir şekilde değerlendirmek, geliştirmek ve hayata geçirmek için tasarlanmış uçtan uca bir inovasyon hunisidir.
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-top: 8px;">
          <div style="background: rgba(59, 130, 246, 0.04); border: 1px solid var(--line-soft); padding: 16px; border-radius: 12px;">
            <strong style="color: var(--ink); display: block; margin-bottom: 6px;">1. Fikir Girişi</strong>
            <span style="font-size: 13px; color: var(--ink-soft); line-height: 1.4; display: block;">Çalışanlar fikirlerini AI Sihirbazı ile girer. AI, anlık analiz ve puanlama yapar.</span>
          </div>
          <div style="background: rgba(59, 130, 246, 0.04); border: 1px solid var(--line-soft); padding: 16px; border-radius: 12px;">
            <strong style="color: var(--ink); display: block; margin-bottom: 6px;">2. Değerlendirme</strong>
            <span style="font-size: 13px; color: var(--ink-soft); line-height: 1.4; display: block;">Fikirler borsa tahtasında listelenir, oylanır ve Karar Kurulu tarafından incelenir.</span>
          </div>
          <div style="background: rgba(59, 130, 246, 0.04); border: 1px solid var(--line-soft); padding: 16px; border-radius: 12px;">
            <strong style="color: var(--ink); display: block; margin-bottom: 6px;">3. Pilot & Uygulama</strong>
            <span style="font-size: 13px; color: var(--ink-soft); line-height: 1.4; display: block;">Kurul onaylı fikirler pilot uygulamaya alınır, başarıyla tamamlanınca hayata geçer.</span>
          </div>
        </div>

        <div style="border-top: 1px solid var(--line-soft); padding-top: 20px; margin-top: 8px;">
          <h3 style="color: var(--ink); font-weight: 600; font-size: 18px; margin-top: 0; display: flex; align-items: center; gap: 8px;">
            ${icon("chart-candlestick")} 2. Fikir Borsası Nasıl Çalışır?
          </h3>
          <p style="color: var(--ink-soft); line-height: 1.6; margin: 0 0 12px 0;">
            Platformda yayınlanan her onaylı proje, borsada kendi ticker sembolü ile listelenir. Kayıtlı tüm kullanıcılara platforma giriş yaptıklarında sanal bakiye/kredi tahsis edilir.
          </p>
          <ul style="margin: 0; padding-left: 20px; color: var(--ink-soft); line-height: 1.6; display: flex; flex-direction: column; gap: 6px;">
            <li><strong>Dinamik Fiyatlama:</strong> Hisse fiyatları tamamen arz ve talep dengesine göre dinamik olarak hesaplanır. Alım talepleri fiyatı yükseltirken, satış talepleri fiyatı düşürür.</li>
            <li><strong>Portföy Yönetimi:</strong> Kullanıcılar potansiyeli yüksek gördükleri fikirlere yatırım yapar, hisse değer kazandığında satarak bakiye karlarını realize ederler.</li>
          </ul>
        </div>

        <div style="border-top: 1px solid var(--line-soft); padding-top: 20px; margin-top: 8px;">
          <h3 style="color: var(--ink); font-weight: 600; font-size: 18px; margin-top: 0; display: flex; align-items: center; gap: 8px;">
            ${icon("gavel")} 3. Borsa Tüzüğü & Kurallar
          </h3>
          <p style="color: var(--ink-soft); line-height: 1.6; margin: 0 0 12px 0;">
            Fikir borsasının adil ve tüzüğe uygun ilerlemesi için iki temel kural uygulanmaktadır:
          </p>
          <ul style="margin: 0; padding-left: 20px; color: var(--ink-soft); line-height: 1.6; display: flex; flex-direction: column; gap: 6px;">
            <li><strong>AI Değerlendirme Barajı (70 Puan):</strong> AI analiz puanı 70'in altında olan ya da yasal mevzuata/tüzüğe (KVKK, ticari sır vb.) aykırı bulunan fikirler sistem tarafından otomatik olarak elenerek **RED** statüsüne geçer ve alım-satım işlemleri kilitlenir.</li>
            <li><strong>Hayata Geçirilme Ödülü:</strong> Bir proje başarıyla hayata geçirildiğinde (Done statüsü), o projeye zamanında inanıp hissesini elinde tutan ortaklara (hissedarlara) yaptıkları yatırım büyüklüğüne göre sanal bakiye/ekstra kredi (ödül) dağıtılır.</li>
          </ul>
        </div>
      </section>
    `;
  } else if (state.systemDetailsTab === "Teknik Altyapı") {
    contentHtml = `
      <section class="content-panel" style="padding: 24px; border-radius: 16px; background: var(--surface); border: 1px solid var(--line-soft); display: flex; flex-direction: column; gap: 20px;">
        <h3 style="color: var(--ink); font-weight: 600; font-size: 18px; margin-top: 0; display: flex; align-items: center; gap: 8px;">
          ${icon("cpu")} 1. Teknik Mimari
        </h3>
        <p style="color: var(--ink-soft); line-height: 1.6; margin: 0;">
          İş NEW, yüksek performanslı ve akıcı bir kullanıcı deneyimi sunabilmek için modern **Single Page Application (SPA)** mimarisiyle inşa edilmiştir. Tüm sayfalar, grafikler ve portföy durumları sayfa yenilenmeden anlık olarak güncellenir.
        </p>
        <div style="background: rgba(59, 130, 246, 0.04); border: 1px solid var(--line-soft); padding: 16px; border-radius: 12px;">
          <strong style="color: var(--ink); display: block; margin-bottom: 6px;">Client-Side State Engine</strong>
          <span style="font-size: 13px; color: var(--ink-soft); line-height: 1.5; display: block;">
            Uygulamanın durum yönetimi (State Engine) tek bir kaynaktan yönetilir. Kullanıcının gerçekleştirdiği alım-satım işlemleri, bakiye hareketleri, portföy ağırlıkları ve chat mesajları anlık olarak bu yerel veri motorunda işlenir ve arayüze anında yansıtılır.
          </span>
        </div>

        <div style="border-top: 1px solid var(--line-soft); padding-top: 20px; margin-top: 8px;">
          <h3 style="color: var(--ink); font-weight: 600; font-size: 18px; margin-top: 0; display: flex; align-items: center; gap: 8px;">
            ${icon("bot")} 2. Yapay Zeka & NLP Analiz Motoru
          </h3>
          <p style="color: var(--ink-soft); line-height: 1.6; margin: 0 0 12px 0;">
            Platforma eklenen her fikir, arka planda gelişmiş bir yapay zeka analiz katmanından geçer:
          </p>
          <ul style="margin: 0; padding-left: 20px; color: var(--ink-soft); line-height: 1.6; display: flex; flex-direction: column; gap: 6px;">
            <li><strong>Çok Kriterli Skorlama:</strong> AI motoru fikri; inovasyon derecesi, fizibilite, etki gücü, maliyet ve riskler gibi 5 farklı boyutta analiz ederek objektif bir skor (0-100) üretir.</li>
            <li><strong>Tüzük & KVKK Denetimi:</strong> Doğal dil işleme (NLP) filtreleri, yasal mevzuata aykırı, illegal süreçler barındıran veya kişisel verilerin korunması kanununa (KVKK) aykırı ibareleri anında tespit ederek projeyi bloklar.</li>
          </ul>
        </div>

        <div style="border-top: 1px solid var(--line-soft); padding-top: 20px; margin-top: 8px;">
          <h3 style="color: var(--ink); font-weight: 600; font-size: 18px; margin-top: 0; display: flex; align-items: center; gap: 8px;">
            ${icon("database")} 3. Canlı Borsa Simülasyon Motoru
          </h3>
          <p style="color: var(--ink-soft); line-height: 1.6; margin: 0;">
            Fiyat hareketleri, borsa simülasyon motoru tarafından milisaniyeler bazında hesaplanır. Arz-talep değişimleri, işlem hacmi (volume), portföy büyüklüğü ve oylama trendleri gibi sinyaller dinamik borsa grafiklerini besler.
          </p>
        </div>
      </section>
    `;
  } else if (state.systemDetailsTab === "Kullanım Kılavuzu") {
    contentHtml = `
      <section class="content-panel" style="padding: 24px; border-radius: 16px; background: var(--surface); border: 1px solid var(--line-soft); display: flex; flex-direction: column; gap: 20px;">
        <h3 style="color: var(--ink); font-weight: 600; font-size: 18px; margin-top: 0; display: flex; align-items: center; gap: 8px;">
          ${icon("lightbulb")} 1. Nasıl Yeni Fikir Eklerim?
        </h3>
        <p style="color: var(--ink-soft); line-height: 1.6; margin: 0 0 12px 0;">
          Yeni bir fikir veya iyileştirme projesi eklemek oldukça kolaydır:
        </p>
        <ol style="margin: 0; padding-left: 20px; color: var(--ink-soft); line-height: 1.6; display: flex; flex-direction: column; gap: 6px;">
          <li>Üst menüdeki veya sol paneldeki <strong>"Başvuru"</strong> veya <strong>"Proje Ekle"</strong> butonuna tıklayın.</li>
          <li>Açılan **AI Sihirbazı** adımlarını izleyerek projenizin Temel Bilgilerini, Problem Tanımını, Çözüm Önerisini ve Etki Kapsamını doldurun.</li>
          <li>Son adımda yapay zekanın anlık analizini ve ürettiği skoru inceleyin. Puanınız 70'in üzerindeyse ve tüzüğe uygunsa **"Yayınla"** butonuna basarak borsa tahtasında listelenmesini sağlayın.</li>
        </ol>

        <div style="border-top: 1px solid var(--line-soft); padding-top: 20px; margin-top: 8px;">
          <h3 style="color: var(--ink); font-weight: 600; font-size: 18px; margin-top: 0; display: flex; align-items: center; gap: 8px;">
            ${icon("wallet")} 2. Borsada Nasıl İşlem Yaparım?
          </h3>
          <p style="color: var(--ink-soft); line-height: 1.6; margin: 0 0 12px 0;">
            Platformda yatırımlarınızı yöneterek sanal bakiyenizi büyütmek için:
          </p>
          <ul style="margin: 0; padding-left: 20px; color: var(--ink-soft); line-height: 1.6; display: flex; flex-direction: column; gap: 6px;">
            <li><strong>Borsa Ekranı:</strong> Borsa sayfasındaki listelerden veya Canlı Terminal arayüzünden potansiyelini beğendiğiniz bir projeyi seçin.</li>
            <li><strong>Alış / Satış:</strong> Fikir detayında yer alan panelden lot miktarını veya yatırmak istediğiniz kredi miktarını girerek "Al" butonuna basın.</li>
            <li><strong>Portföy Takibi:</strong> Sahip olduğunuz varlıkları "Profil" veya "Portföyüm" alanlarından izleyin. Değer kazanan hisseleri satarak kar elde edin.</li>
          </ul>
        </div>

        <div style="border-top: 1px solid var(--line-soft); padding-top: 20px; margin-top: 8px;">
          <h3 style="color: var(--ink); font-weight: 600; font-size: 18px; margin-top: 0; display: flex; align-items: center; gap: 8px;">
            ${icon("coins")} 3. Kredi ve Bakiye Nasıl Kazanılır?
          </h3>
          <p style="color: var(--ink-soft); line-height: 1.6; margin: 0 0 12px 0;">
            Platformda oylama yapabilmek veya yatırım gerçekleştirebilmek için krediye ihtiyacınız vardır:
          </p>
          <ul style="margin: 0; padding-left: 20px; color: var(--ink-soft); line-height: 1.6; display: flex; flex-direction: column; gap: 6px;">
            <li><strong>Fikir Ödülü:</strong> Yeni bir fikir yayınladığınızda sistem size bakiye ödülü verir.</li>
            <li><strong>Yarışmalar (Challenges):</strong> Aktif yarışmalara katılarak ve derece elde ederek yüksek miktarlarda oylama kredisi kazanabilirsiniz.</li>
            <li><strong>Ortaklık Ödülü:</strong> Yatırım yaptığınız projenin hayata geçirilmesi (Done statüsü) durumunda ekstra bakiye/kredi alırsınız.</li>
          </ul>
        </div>
      </section>
    `;
  }

  return `
    <div class="view-stack system-details-page" style="max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px;">
      <section class="apple-hero" style="padding: 24px; border-radius: 20px; background: var(--surface); border: 1px solid var(--line-soft);">
        <span class="panel-kicker">PLATFORM KILAVUZU & TEKNİK REHBER</span>
        <h2>Sistem Detayları</h2>
        <p>İş NEW platformunun çalışma mekanizması, arkasındaki teknoloji ve kullanım rehberi.</p>
      </section>

      <div class="admin-layout" style="display: grid; grid-template-columns: 240px minmax(0, 1fr); gap: 20px; align-items: start;">
        <aside class="admin-tabs" style="height: fit-content; display: flex; flex-direction: column; gap: 6px; padding: 8px; background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px;">
          ${tabs.map(tab => {
            let iconName = "help-circle";
            if (tab === "Teknik Altyapı") iconName = "cpu";
            if (tab === "Kullanım Kılavuzu") iconName = "book-open";
            return `
              <button class="admin-tab ${state.systemDetailsTab === tab ? "active" : ""}" data-action="system-details-tab" data-tab="${esc(tab)}" style="display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 10px; border: none; background: transparent; cursor: pointer; text-align: left; font-size: 14px; font-weight: 600; color: ${state.systemDetailsTab === tab ? "var(--primary-strong)" : "var(--ink-soft)"};">
                ${icon(iconName)}
                <span>${esc(tab)}</span>
              </button>
            `;
          }).join("")}
        </aside>
        <div class="admin-content-panel" style="display: flex; flex-direction: column; gap: 20px;">
          ${contentHtml}
        </div>
      </div>
    </div>
  `;
}

function renderSettings() {
  const user = currentUser();
  
  return `
    <div class="view-stack settings-page" style="max-width: 680px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px;">
      
      <section style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 24px;">
        <h3 style="font-size: 18px; font-weight: 600; color: var(--ink); border-bottom: 1px solid var(--line-soft); padding-bottom: 12px; margin-bottom: 16px;">
          Profil Düzenleme
        </h3>
        
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <label class="field">
            <span>Profil Fotoğrafı URL'si</span>
            <input class="input" id="settings-photo" value="${esc(user.photo || '')}" placeholder="Görsel bağlantı adresi" />
          </label>

          <label class="field">
            <span>İsim Soyisim</span>
            <input class="input" id="settings-name" value="${esc(user.name)}" />
          </label>

          <label class="field">
            <span>Biyografi</span>
            <input class="input" id="settings-bio" value="${esc(user.bio || '')}" placeholder="Kendinizi kısaca tanıtın" />
          </label>

          <label class="field">
            <span>Özgeçmiş / CV Detayları</span>
            <textarea class="textarea" id="settings-cv" rows="4" placeholder="Eğitim, deneyim ve yetenekleriniz...">${esc(user.cv || '')}</textarea>
          </label>

          <label class="field">
            <span>Bağlı Şirket / Topluluk</span>
            <select class="select" id="settings-company">
              <option value="independent" ${user.companyId === 'independent' ? 'selected' : ''}>Bağımsız / Topluluk</option>
              ${affiliationCompanies.map(c => `<option value="${c.id}" ${user.companyId === c.id ? 'selected' : ''}>${esc(c.name)}</option>`).join("")}
            </select>
          </label>

          <div style="text-align: right; margin-top: 8px;">
            <button class="btn primary" data-action="save-profile-settings">Değişiklikleri Kaydet</button>
          </div>
        </div>
      </section>

      <!-- App Appearance Settings -->
      <section style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 24px;">
        <h3 style="font-size: 18px; font-weight: 600; color: var(--ink); border-bottom: 1px solid var(--line-soft); padding-bottom: 12px; margin-bottom: 16px;">
          Sistem ve Görünüm
        </h3>
        
        <div style="display: flex; flex-direction: column; gap: 16px; font-size: 14px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <strong>Tema / Görünüm Ayarları</strong>
              <p style="font-size: 12px; color: var(--muted); margin-top: 2px;">Açık veya koyu mod tercihini değiştirin.</p>
            </div>
            <button class="btn ghost btn-sm" data-action="toggle-theme" style="display: flex; align-items: center; gap: 6px;">
              ${icon(state.theme === 'dark' ? 'sun' : 'moon')} ${state.theme === 'dark' ? 'Açık Tema' : 'Koyu Tema'}
            </button>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--line-soft); padding-top: 12px;">
            <div>
              <strong>Bildirim Ayarları</strong>
              <p style="font-size: 12px; color: var(--muted); margin-top: 2px;">Yeni projeler ve yorumlarda anlık e-posta veya push uyarıları alın.</p>
            </div>
            <input type="checkbox" checked style="width: 20px; height: 20px;" aria-label="Bildirim Ayarları" />
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--line-soft); padding-top: 12px;">
            <div>
              <strong>Gizlilik Ayarları</strong>
              <p style="font-size: 12px; color: var(--muted); margin-top: 2px;">Profilinizi diğer iştiraklere ve bağımsız üyelerimize açık tutun.</p>
            </div>
            <input type="checkbox" checked style="width: 20px; height: 20px;" aria-label="Gizlilik Ayarları" />
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--line-soft); padding-top: 12px;">
            <div>
              <strong>Dil Ayarları</strong>
              <p style="font-size: 12px; color: var(--muted); margin-top: 2px;">Sistem dilini belirleyin.</p>
            </div>
            <select class="select slim-select" style="width: 100px;">
              <option value="tr">Türkçe</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </section>

      <!-- Technical Report -->
      <section style="background: linear-gradient(135deg, #0a1628, #0d2050); border-radius: 16px; padding: 22px 24px; display:flex; justify-content:space-between; align-items:center; gap:16px; flex-wrap:wrap;">
        <div>
          <div style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:6px;">Platform Dökümantasyonu</div>
          <h3 style="font-size:16px;font-weight:750;color:#fff;margin:0 0 4px;letter-spacing:-0.01em;">Teknik Mimari Raporu</h3>
          <p style="font-size:12.5px;color:rgba(255,255,255,0.5);margin:0;">SpacetimeDB, Next.js 15, AI yığını, maliyet analizi ve tüm altyapı detayları.</p>
        </div>
        <a href="/technical-report.html" target="_blank" style="display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.12);color:#fff;border:1px solid rgba(255,255,255,0.2);border-radius:10px;padding:10px 18px;font-size:13px;font-weight:700;text-decoration:none;white-space:nowrap;transition:background 0.15s;" onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.12)'">
          ${icon("file-text")} Raporu Aç / PDF
        </a>
      </section>

      <!-- Logout Block -->
      <section style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 20px; text-align: center;">
        <button class="btn danger" data-action="user-logout" style="width: 100%; font-weight: 600;">
          ${icon("log-out")} Çıkış Yap
        </button>
      </section>

    </div>
  `;
}

function formatAIMessage(text) {
  // Convert **bold** to <strong>bold</strong>
  let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Convert *italic* to <em>italic</em>
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  return html;
}

function renderAIAssistantWidget() {
  state.aiAssistantOpen = !!state.aiAssistantOpen;
  state.aiAssistantMessages = state.aiAssistantMessages || [
    { role: 'assistant', text: 'Merhaba. Ben İş NEW AI Host; yalnızca platform içindeki fikirler, gündem, duyurular, gelişmiş ürünler ve yönetici kaynaklarından özet çıkarırım. Demo kapsamında internette arama yapmam veya dış haber çekmem.' },
    { role: 'user', text: 'Şu an platform içinde hype hangi alana kayıyor?' },
    { role: 'assistant', text: '**Platform içi trend okuması:**\n\nBorsa hareketleri, gündem başlıkları ve ürünleşen fikirler birlikte bakıldığında operasyon verimliliği, AI destekli özetleme ve yeşil finans başlıkları öne çıkıyor. Bu yorum yalnızca demo içindeki kayıtlar üzerinden üretilmiştir.' }
  ];

  if (!state.aiAssistantOpen) {
    return `
      <div class="ai-assistant-bubble" data-action="toggle-ai-assistant">
        ${icon("bot")}
      </div>
    `;
  }

  let panelStyle = `position: fixed; z-index: 999; display: flex; flex-direction: column; overflow: hidden; width: 360px; height: 480px; border-radius: 16px; background: var(--surface); border: 1px solid var(--line-soft); box-shadow: var(--shadow-deep);`;
  
  if (state.aiBubblePos) {
    let left = state.aiBubblePos.x - 300; 
    let top = state.aiBubblePos.y - 490; 
    
    if (left < 10) left = state.aiBubblePos.x + 70; 
    if (left + 360 > window.innerWidth) left = window.innerWidth - 370;
    if (top < 10) top = state.aiBubblePos.y + 70; 
    if (top + 480 > window.innerHeight) top = window.innerHeight - 490;
    
    panelStyle += ` left: ${left}px; top: ${top}px; bottom: auto; right: auto;`;
  } else {
    panelStyle += ` bottom: 90px; right: 24px;`;
  }

  return `
    <div class="ai-assistant-chat-panel" style="${panelStyle}">
      
      <!-- Header -->
      <header style="background: var(--primary); color: #fff; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; align-items: center; gap: 8px;">
          ${icon("bot")}
          <span style="font-weight: 600; font-size: 14.5px;">İş NEW AI Asistanı</span>
        </div>
        <button data-action="toggle-ai-assistant" style="background: none; border: none; color: #fff; font-size: 18px; cursor: pointer; padding: 0;">&times;</button>
      </header>

      <!-- Message History -->
      <div class="ai-messages-box" style="flex: 1; padding: 12px; overflow-y: auto; display: flex; flex-direction: column; gap: 8px; background: var(--bg);">
        ${state.aiAssistantMessages.map(msg => `
          <div style="display: flex; flex-direction: column; align-items: ${msg.role === 'user' ? 'flex-end' : 'flex-start'};">
            <div style="max-width: 85%; padding: 8px 12px; border-radius: 12px; font-size: 13px; line-height: 1.4; 
                        background: ${msg.role === 'user' ? 'var(--primary)' : 'var(--surface)'}; 
                        color: ${msg.role === 'user' ? '#fff' : 'var(--ink)'}; 
                        border: ${msg.role === 'user' ? 'none' : '1px solid var(--line-soft)'};
                        white-space: pre-wrap;">
              ${formatAIMessage(msg.text)}
            </div>
          </div>
        `).join("")}
      </div>

      <!-- Quick Prompt Suggestions -->
      <div style="padding: 8px 12px; display: flex; gap: 6px; overflow-x: auto; background: var(--surface); border-top: 1px solid var(--line-soft); white-space: nowrap;">
        <button class="suggestion-chip" data-action="ai-suggest" data-prompt="Yeni bir FinTech fikir öner" style="font-size: 11px; background: var(--bg); border: 1px solid var(--line-soft); padding: 4px 8px; border-radius: 20px; cursor: pointer; color: var(--ink-soft);">FinTech Fikri Öner</button>
        <button class="suggestion-chip" data-action="ai-suggest" data-prompt="İş Leasing kiralama fikri öner" style="font-size: 11px; background: var(--bg); border: 1px solid var(--line-soft); padding: 4px 8px; border-radius: 20px; cursor: pointer; color: var(--ink-soft);">İş Leasing Önerisi Al</button>
        <button class="suggestion-chip" data-action="ai-suggest" data-prompt="Borsadaki en önemli projeleri listele" style="font-size: 11px; background: var(--bg); border: 1px solid var(--line-soft); padding: 4px 8px; border-radius: 20px; cursor: pointer; color: var(--ink-soft);">Borsayı Özetle</button>
        <button class="suggestion-chip" data-action="ai-suggest" data-prompt="Kurumsal veri setlerini özetle" style="font-size: 11px; background: var(--bg); border: 1px solid var(--line-soft); padding: 4px 8px; border-radius: 20px; cursor: pointer; color: var(--ink-soft);">Veri&Bilgi Listele</button>
      </div>

      <!-- Input box -->
      <div style="padding: 10px; border-top: 1px solid var(--line-soft); display: flex; gap: 6px; background: var(--surface);">
        <input class="input slim-input" id="ai-chat-input" placeholder="Sorunuzu buraya yazın..." style="flex: 1; font-size: 13px; padding: 6px 10px;" />
        <button class="btn primary slim-btn" data-action="submit-ai-chat" style="padding: 6px 12px; font-size: 13px;">Gönder</button>
      </div>

    </div>
  `;
}

function handleAIChatResponse(msgText) {
  state.aiAssistantMessages = state.aiAssistantMessages || [];
  state.aiAssistantMessages.push({ role: 'user', text: esc(msgText) });
  
  const query = msgText.toLocaleLowerCase("tr-TR");
  let replyText = "Bunu anladım. Demo kapsamım platform içi veriyle sınırlı: fikir borsası, gündem, duyurular, gelişmiş ürünler, veri setleri ve yönetici kaynaklarından özet çıkarabilirim; internette arama yapmam.";
  
  if (query.includes("gündem") || query.includes("gundem") || query.includes("agenda")) {
    const list = (state.agendaItems || []).slice(0, 3);
    replyText = `**Platform içi gündem özeti:**
    
    ${list.map(item => `- **${item.title}** (${item.category}, ${item.date})`).join("\n")}
    
    Bu özet yöneticilerin manuel girdiği gündem kayıtlarından üretildi; web/haber araması yapılmadı.`;
  } else if (query.includes("hype") || query.includes("trend") || query.includes("revaç") || query.includes("revac")) {
    const topIdeas = [...(state.ideas || [])].sort((a, b) => Number(b.marketVolume || 0) - Number(a.marketVolume || 0)).slice(0, 3);
    const topAgenda = (state.agendaItems || [])[0];
    replyText = `**Platform içi hype / trend yönelimi:**
    
    ${topIdeas.map(i => `- **${i.title}**: ${i.marketCategory || "Fikir"} liginde ${Number(i.marketVolume || 0).toLocaleString("tr-TR")} hacim, ${formatCurrency(marketPrice(i))} fiyat.`).join("\n")}
    
    ${topAgenda ? `Gündem tarafında öne çıkan başlık: **${topAgenda.title}**.` : ""}
    
    Bu sinyal sadece İş NEW içindeki borsa, gündem ve ürün kayıtlarından hesaplanan demo yorumudur.`;
  } else if (query.includes("ürün") || query.includes("urun") || query.includes("geliştirilmiş") || query.includes("gelistirilmis")) {
    const products = [...(state.ideas || [])].sort((a, b) => productProgress(b) - productProgress(a)).slice(0, 4);
    replyText = `**Geliştirilmiş ürün görünümü:**
    
    ${products.map(i => `- **${i.title}**: ${productStage(i)}, seviye ${productProgress(i)}%, ${i.supporters || i.credits || 0} oy.`).join("\n")}
    
    Ürünleşme görünümü platformdaki fikir/ekip/destek kayıtlarından oluşturuldu.`;
  } else if (query.includes("depolama") || query.includes("kaynak") || query.includes("not")) {
    const resources = (state.adminStorageItems || []).slice(0, 3);
    replyText = `**Yönetici kaynak özeti:**
    
    ${resources.map(item => `- **${item.title}** (${item.category}): ${item.description}`).join("\n")}
    
    Bu kayıtlar adminlerin demo içindeki Yönetici Depolama alanına eklediği kaynaklardan gelir.`;
  } else if (query.includes("leasing") || query.includes("kiralama") || query.includes("iş leasing") || query.includes("isleasing")) {
    replyText = `**Yapay Zekâ Fikir Önerisi (İş Leasing):**
    
    *Öneri:* **Güneş Enerjisi Santralleri (GES) için Dijital Leasing Paketi**
    *Açıklama:* KOBİ'lerin çatı tipi GES ve yeşil enerji yatırımlarını hızlandırmak için, fizibilite verilerinden otomatik teminat oranı ve vade yapısı çıkaran, tamamen kağıtsız bir başvuru/onay modülü.
    
    Bunu İş Finansal Kiralama (İş Leasing) bünyesinde borsa projesi olarak yayınlamak için **Borsa** sekmesini ziyaret edebilir ve fikirleri inceleyebilirsin.`;
  } else if (query.includes("fintech") || query.includes("ödeme") || query.includes("bankacılık") || query.includes("fikir")) {
    replyText = `**Yapay Zekâ Fikir Önerisi (FinTech):**
    
    *Öneri:* **Akıllı Harcama ve Karbon Nötrleme Kart Entegrasyonu**
    *Açıklama:* Kart harcamalarındaki POS kodlarına göre otomatik karbon ayak izi hesaplayıp, topluluk verilerindeki yeşil enerji projelerine mikro bağış aktaran bir mobil bankacılık modülü.
    
    Bu öneri dış web verisiyle değil, mevcut platform temaları ve demo verileriyle üretilmiştir.`;
  } else if (query.includes("borsa") || query.includes("proje") || query.includes("popüler") || query.includes("özetle")) {
    const list = state.ideas.slice(0, 3);
    replyText = `**Fikir Borsası Popüler Projeler Özeti:**
    
    ${list.map(i => `- **${i.title}** (${i.marketCategory || 'Fikir'}, Hisse: ${formatCurrency(marketPrice(i))})`).join("\n")}
    
    Daha fazla projeyi incelemek ve lot alım satımı yapmak için sol menüden **Borsa** sekmesine geçebilirsiniz.`;
  } else if (query.includes("veri") || query.includes("hammadde") || query.includes("dataset") || query.includes("bilgi")) {
    const list = (state.dataSets || []).slice(0, 2);
    replyText = `**Platformdaki Bazı Veri Setleri:**
    
    ${list.map(d => `- **${d.title}** (${d.type}, Paylaşan: ${d.sharedBy})`).join("\n")}
    
    Proje geliştirme sürecinizde bu verileri kullanmak için sol menüden **Veri&Bilgi** sekmesini inceleyebilirsiniz.`;
  } else if (query.includes("duyuru") || query.includes("etkinlik") || query.includes("haber")) {
    const list = (state.announcements || []).slice(0, 2);
    replyText = `**Platform içi duyuru özeti:**
    
    ${list.map(a => `- **${a.title}** (Kategori: ${a.area}, Tarih: ${a.date})`).join("\n")}
    
    Bunlar kurum içi duyuru kayıtlarıdır; dış haber veya internet akışı değildir.`;
  } else if (query.includes("yardım") || query.includes("asistan") || query.includes("neler yapabilirsin")) {
    replyText = `Ben platform içinde çalışan demo AI Host'um. 
    
    1. **Platform İçi Özet:** Borsa, gündem, duyuru, veri ve ürün kayıtlarını özetlerim.
    2. **Trend Yorumu:** Hype/trend yönelimlerini yalnızca mevcut demo verilerinden çıkarırım.
    3. **Fikir Desteği:** Fikir veya ürün açıklaması taslağı hazırlayabilirim.
    
    İnternette arama yapmam, otomatik haber çekmem.`;
  }

  state.aiAssistantMessages.push({ role: 'assistant', text: replyText });
  render();
}

function renderRulesPage() {
  return `
    <div class="view-stack rules-page" style="max-width: 800px; margin: 0 auto;">
      <section class="apple-hero" style="padding: 24px; border-radius: 20px; background: var(--surface); border: 1px solid var(--line-soft); margin-bottom: 20px;">
        <span class="panel-kicker">KURALLAR & REHBER</span>
        <h2>Topluluk Kuralları</h2>
        <p>İş NEW İnovasyon Platformu'nda daha yapıcı ve verimli çalışabilmek için uymamız gereken kurallar.</p>
      </section>

      <section class="content-panel" style="padding: 24px; border-radius: 16px; background: var(--surface); border: 1px solid var(--line-soft); display: flex; flex-direction: column; gap: 20px; line-height: 1.6; color: var(--ink-soft);">
        <div>
          <h3 style="color: var(--ink); font-weight: 600; margin-bottom: 8px; font-size: 16px; display: flex; align-items: center; gap: 8px; margin-top: 0;">
            ${icon("shield-check")} 1. Yapıcı ve Saygılı İletişim
          </h3>
          <p>Tüm fikir paylaşımlarında, yorumlarda ve mesajlarda saygılı bir dil kullanılmalıdır. Eleştiriler kişileri değil, fikirleri hedef almalı ve mutlaka yapıcı çözüm önerileri içermelidir.</p>
        </div>

        <div style="border-top: 1px solid var(--line-soft); padding-top: 16px;">
          <h3 style="color: var(--ink); font-weight: 600; margin-bottom: 8px; font-size: 16px; display: flex; align-items: center; gap: 8px; margin-top: 0;">
            ${icon("bookmark")} 2. Fikri Mülkiyet ve Özgünlük
          </h3>
          <p>Paylaşılan fikirlerin, verilerin ve projelerin özgün olması beklenir. Alıntı yapılan veya başka çalışmalardan ilham alınan kısımlar açıkça belirtilmelidir. Diğer üyelerin fikirleri izinsiz kopyalanamaz veya sahiplenilemez.</p>
        </div>

        <div style="border-top: 1px solid var(--line-soft); padding-top: 16px;">
          <h3 style="color: var(--ink); font-weight: 600; margin-bottom: 8px; font-size: 16px; display: flex; align-items: center; gap: 8px; margin-top: 0;">
            ${icon("eye-off")} 3. Bilgi Güvenliği ve Gizlilik
          </h3>
          <p>İş Bankası iştiraklerine ait ticari sırlar, müşteri verileri ve kişisel veriler kesinlikle açık şekilde paylaşılmamalıdır. Veri paylaşırken maskelenmiş veya anonimleştirilmiş veri setleri tercih edilmelidir.</p>
        </div>

        <div style="border-top: 1px solid var(--line-soft); padding-top: 16px;">
          <h3 style="color: var(--ink); font-weight: 600; margin-bottom: 8px; font-size: 16px; display: flex; align-items: center; gap: 8px; margin-top: 0;">
            ${icon("award")} 4. Adil Değerlendirme ve Katılım
          </h3>
          <p>Yarışmalarda ve borsa işlemlerinde haksız kazanç elde etmeye veya manipülasyona yönelik işlemler kesinlikle yasaktır. Her üye eşit haklara sahiptir ve adil rekabet kurallarına uymak zorundadır.</p>
        </div>

        <div style="border-top: 1px solid var(--line-soft); padding-top: 16px;">
          <h3 style="color: var(--ink); font-weight: 600; margin-bottom: 8px; font-size: 16px; display: flex; align-items: center; gap: 8px; margin-top: 0;">
            ${icon("alert-circle")} 5. İhlal Bildirimleri
          </h3>
          <p>Yukarıdaki kurallara uymayan paylaşımları ve davranışları sol menüdeki <strong>Şikayet Kutusu</strong> bölümünden Karar Kurulu'na bildirebilirsiniz. Kurul, gerekli incelemeleri yaparak uygun aksiyonları alacaktır.</p>
        </div>

        <div style="border-top: 1px solid var(--line-soft); padding-top: 16px;">
          <h3 style="color: var(--ink); font-weight: 600; margin-bottom: 8px; font-size: 16px; display: flex; align-items: center; gap: 8px; margin-top: 0;">
            ${icon("gavel")} 6. Borsa Değerlendirme ve Hayata Geçirilme Tüzüğü
          </h3>
          <p>
            • <strong>AI Barajı (70 Puan):</strong> Projelerin borsada kalabilmesi için Yapay Zeka (AI) değerlendirmesinden en az 70 puan alması gerekir. 70 puanın altındaki projeler doğrudan elenir.<br/>
            • <strong>Tüzük Denetimi:</strong> Yapay zeka denetimi sırasında kurum ilkelerine veya tüzüğe aykırı bulunan fikirler otomatik olarak reddedilir.<br/>
            • <strong>Hayata Geçirilme Ödülü (41 Kat Kredi):</strong> Desteklediğiniz proje başarıyla hayata geçirildiğinde (pivotlaşma sonrası destek), o projeye yaptığınız yatırım miktarının <strong>41 katı</strong> kadar kredi hesabınıza ödül olarak anında yatırılır.
          </p>
        </div>
      </section>
    </div>
  `;
}

function renderComplaintBoxPage() {
  return `
    <div class="view-stack complaint-box-page" style="max-width: 600px; margin: 0 auto;">
      <section class="apple-hero" style="padding: 24px; border-radius: 20px; background: var(--surface); border: 1px solid var(--line-soft); margin-bottom: 20px;">
        <span class="panel-kicker">GERİ BİLDİRİM & ŞİKAYET</span>
        <h2>Şikayet Kutusu</h2>
        <p>İş NEW platformu, içerikler, teknik hatalar veya diğer kullanıcılar hakkında geri bildirim veya şikayet gönderin.</p>
      </section>

      ${state.complaintBoxFeedback ? `
        <div class="feedback-banner success" style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgb(16, 185, 129); color: rgb(16, 185, 129); padding: 16px; border-radius: 12px; margin-bottom: 20px; font-weight: 500; display: flex; align-items: center; gap: 8px;">
          ${icon("circle-check")} <span>${esc(state.complaintBoxFeedback)}</span>
        </div>
      ` : ""}

      <section class="content-panel" style="padding: 24px; border-radius: 16px; background: var(--surface); border: 1px solid var(--line-soft); display: flex; flex-direction: column; gap: 16px;">
        <label class="field">
          <span>Şikayet/Geri Bildirim Konusu</span>
          <select class="select" id="cb-subject" style="padding: 10px; font-size: 14px;">
            <option value="Kullanıcı Şikayeti">Kullanıcı Şikayeti</option>
            <option value="Teknik Sorun">Teknik Sorun</option>
            <option value="Yanlış Bilgi">Yanlış Bilgi</option>
            <option value="Uygulama Hatası">Uygulama Hatası</option>
            <option value="Diğer">Diğer</option>
          </select>
        </label>

        <label class="field">
          <span>İlgili Kişi veya Proje Adı (İsteğe Bağlı)</span>
          <input class="input" id="cb-target" placeholder="Örn: Ahmet Yılmaz, Proje Adı..." style="padding: 10px; font-size: 14px;" />
        </label>

        <label class="field">
          <span>Detaylı Açıklama</span>
          <textarea class="textarea" id="cb-description" rows="5" placeholder="Lütfen şikayetinizi veya geri bildiriminizi detaylıca açıklayın..." style="padding: 10px; font-size: 14px; resize: none;"></textarea>
        </label>

        <button class="btn primary block" data-action="submit-complaint-box" style="margin-top: 10px; padding: 12px; font-weight: 600;">
          ${icon("send")} Şikayeti/Bildirimi Gönder
        </button>
      </section>
    </div>
  `;
}

function initAIBubbleDraggability() {
  const bubble = document.querySelector(".ai-assistant-bubble");
  if (!bubble) return;

  // Restore position from state if set
  if (state.aiBubblePos) {
    bubble.style.right = 'auto';
    bubble.style.bottom = 'auto';
    bubble.style.left = state.aiBubblePos.x + 'px';
    bubble.style.top = state.aiBubblePos.y + 'px';
  }

  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let dragX = state.aiBubblePos ? state.aiBubblePos.x : 0;
  let dragY = state.aiBubblePos ? state.aiBubblePos.y : 0;
  let hasMoved = false;

  const onMouseDown = (e) => {
    isDragging = true;
    const rect = bubble.getBoundingClientRect();
    const clientX = e.clientX !== undefined ? e.clientX : e.touches[0].clientX;
    const clientY = e.clientY !== undefined ? e.clientY : e.touches[0].clientY;
    startX = clientX - rect.left;
    startY = clientY - rect.top;
    hasMoved = false;

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchmove", onMouseMove, { passive: false });
    document.addEventListener("touchend", onMouseUp);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX !== undefined ? e.clientX : e.touches[0].clientX;
    const clientY = e.clientY !== undefined ? e.clientY : e.touches[0].clientY;
    
    let newX = clientX - startX;
    let newY = clientY - startY;
    
    const bubbleW = bubble.offsetWidth || 56;
    const bubbleH = bubble.offsetHeight || 56;
    const maxW = window.innerWidth - bubbleW;
    const maxH = window.innerHeight - bubbleH;
    
    newX = Math.max(0, Math.min(newX, maxW));
    newY = Math.max(0, Math.min(newY, maxH));
    
    dragX = newX;
    dragY = newY;
    
    bubble.style.right = 'auto';
    bubble.style.bottom = 'auto';
    bubble.style.left = dragX + 'px';
    bubble.style.top = dragY + 'px';
    hasMoved = true;
    
    if (e.cancelable) e.preventDefault();
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    isDragging = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("touchmove", onMouseMove);
    document.removeEventListener("touchend", onMouseUp);
    
    if (hasMoved) {
      state.aiBubblePos = { x: dragX, y: dragY };
    }
  };

  bubble.addEventListener("mousedown", onMouseDown);
  bubble.addEventListener("touchstart", onMouseDown, { passive: true });
  
  bubble.addEventListener("click", (e) => {
    if (hasMoved) {
      e.preventDefault();
      e.stopPropagation();
    }
  });
}

function ensureSocialEnhancements() {
  if (state.socialEnhancementsReady) return;
  state.socialEnhancementsReady = true;

  const postById = id => (state.socialPosts || []).find(post => post.id === id);
  const onboardingPost = postById("sp-1");
  if (onboardingPost && !onboardingPost.poll) {
    onboardingPost.poll = {
      question: "Onboarding asistanı ilk nerede pilotlansın?",
      options: [
        { label: "Yeni işe başlayanlar", votes: 42 },
        { label: "Şube rotasyonu", votes: 27 },
        { label: "Staj programı", votes: 19 }
      ]
    };
  }

  const dataPost = postById("sp-2");
  if (dataPost && !dataPost.link) {
    dataPost.link = {
      title: "Yeşil finans veri notu",
      description: "ESG veri alanları, örnek KPI seti ve proje kullanım senaryoları.",
      url: "https://www.isbank.com.tr/"
    };
  }

  const sensorPost = postById("sp-4");
  if (sensorPost && !sensorPost.imageUrl) {
    sensorPost.imageUrl = remoteImages.ideaVisuals[3];
    sensorPost.imageCaption = "Tuzla sensör panosu · pilot gözlem";
  }

  const richPosts = [
    createSeedSocialPost("sp-rich-1", "p17", "Kule 3 yönlendirme ekranı için 2 farklı akış denedik. Görseli ekliyorum; kısa yorumlarınız karar toplantısından önce çok iş görür.", "36 dk önce", 18, {
      imageUrl: remoteImages.ideaVisuals[5],
      imageCaption: "Yönlendirme ekranı deneme akışı"
    }),
    createSeedSocialPost("sp-rich-2", "p09", "BES başvuru ekranı sadeleştirme pilotu için hızlı bir anket açtım. Hangi metrikle takip edelim?", "1 saat önce", 21, {
      poll: {
        question: "Başarı metriği hangisi olsun?",
        options: [
          { label: "Tamamlama oranı", votes: 31 },
          { label: "İlk yanıt süresi", votes: 14 },
          { label: "Destek talebi düşüşü", votes: 22 }
        ]
      }
    }),
    createSeedSocialPost("sp-rich-3", "p15", "Moka API dokümantasyon akışı için kısa referans linki bırakıyorum. Ürün ve operasyon ekibi aynı sayfadan ilerlesin.", "Bugün", 16, {
      link: {
        title: "API akış kontrol listesi",
        description: "Onay, test, hata izleme ve canlıya geçiş adımları.",
        url: "https://www.isbank.com.tr/"
      }
    })
  ];

  richPosts.forEach(post => {
    if (!postById(post.id)) state.socialPosts.push(post);
  });

  const holding = state.messageSpaces.find(space => space.id === "msg-holding");
  if (holding && !(holding.messages || []).some(message => message.id === "msg-rich-holding-poll")) {
    holding.messages.splice(2, 0,
      {
        id: "msg-rich-holding-poll",
        userId: "p05",
        body: "Haftalık kurul öncesi hangi başlığı öne alalım?",
        time: "10:02",
        poll: {
          question: "Kurul önceliği",
          options: [
            { label: "Yeşil finans", votes: 18 },
            { label: "Operasyon AI", votes: 24 },
            { label: "Müşteri deneyimi", votes: 15 }
          ]
        }
      },
      {
        id: "msg-rich-holding-link",
        userId: "p02",
        body: "Karar notu taslağını da ekliyorum, hızlıca bakabilirsiniz.",
        time: "10:08",
        link: {
          title: "Haftalık karar notu",
          description: "Fikir üretimi, al/sat hareketi ve bekleyen pilotlar.",
          url: "https://www.isbank.com.tr/"
        }
      },
      {
        id: "msg-rich-holding-image",
        userId: "p15",
        body: "Yeni akışın ekran görüntüsünü de bırakıyorum.",
        time: "10:16",
        imageUrl: remoteImages.ideaVisuals[1],
        imageCaption: "Demo işlem akışı"
      }
    );
  }

  const digital = state.messageSpaces.find(space => space.id === "msg-digital");
  if (digital && !(digital.messages || []).some(message => message.id === "msg-rich-digital-image")) {
    digital.messages.splice(1, 0, {
      id: "msg-rich-digital-image",
      userId: "p15",
      body: "Yeni onboarding kontrol ekranından görüntü paylaşıyorum.",
      time: "13:18",
      imageUrl: remoteImages.ideaVisuals[1],
      imageCaption: "Moka onboarding kontrol akışı"
    });
  }
}

function createSeedSocialPost(id, userId, body, date, likes, extras = {}) {
  const person = personById(userId) || {};
  const company = companyById(person.companyId || "tibas-holding");
  return {
    id,
    userId,
    userName: person.name || "NEW IDEA EXCHANGE Üyesi",
    userAvatar: person.photo || "",
    userBio: `${person.role || "Platform Üyesi"} · ${company.shortName}`,
    body,
    date,
    likes,
    likedByMe: false,
    comments: [
      { id: `${id}-c1`, userName: "Can Koç", userAvatar: personById("u3")?.photo || "", body: "Bunu karar notuna da ekleyelim.", date: "Az önce" }
    ],
    ...extras
  };
}

ensureSocialEnhancements();
render();
