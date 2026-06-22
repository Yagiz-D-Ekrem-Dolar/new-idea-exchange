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


const countriesList = [
  { code: "ES", name: "Spain", flag: "🇪🇸", lang: "es", label: "Spain Portal" },
  { code: "MX", name: "Mexico", flag: "🇲🇽", lang: "es", label: "Mexico Portal" },
  { code: "TR", name: "Garanti BBVA", flag: "🇹🇷", lang: "tr", label: "Turkey Portal" },
  { code: "AR", name: "Argentina", flag: "🇦🇷", lang: "es", label: "Argentina Portal" },
  { code: "CO", name: "Colombia", flag: "🇨🇴", lang: "es", label: "Colombia Portal" },
  { code: "US", name: "United States", flag: "🇺🇸", lang: "en", label: "USA Portal" }
];

// affiliationCompanies[].countries uses Turkish display names (e.g. "İspanya"), while
// countriesList[].name uses English (e.g. "Spain") for UI display. This maps a country
// code to the Turkish name so company/country matching works for every portal, not just TR.
const countryNameTR = {
  ES: "İspanya",
  MX: "Meksika",
  TR: "Türkiye",
  AR: "Arjantin",
  CO: "Kolombiya",
  US: "Amerika Birleşik Devletleri"
};

const brandLogoSrc = "/assets/company-logos/bbva-group.svg";

const profilePhotos = {
  u1: "https://randomuser.me/api/portraits/women/44.jpg",
  u2: "https://randomuser.me/api/portraits/men/32.jpg",
  u3: "https://randomuser.me/api/portraits/men/75.jpg",
  u4: "https://randomuser.me/api/portraits/men/65.jpg",
  u5: "https://randomuser.me/api/portraits/women/68.jpg",
  u6: "https://randomuser.me/api/portraits/women/51.jpg",
  u7: "https://randomuser.me/api/portraits/men/41.jpg",
  u8: "https://randomuser.me/api/portraits/men/52.jpg",
  u9: "https://randomuser.me/api/portraits/women/36.jpg",
  u10: "https://randomuser.me/api/portraits/men/22.jpg",
  u11: "https://randomuser.me/api/portraits/women/76.jpg",
  u12: "https://randomuser.me/api/portraits/men/86.jpg",
  u13: "https://randomuser.me/api/portraits/men/72.jpg",
  u14: "https://randomuser.me/api/portraits/men/61.jpg",
  u15: "https://randomuser.me/api/portraits/women/29.jpg"
};

const namedAvatarPhotos = {
  "Ayşe Yılmaz": "https://randomuser.me/api/portraits/women/44.jpg",
  "Mehmet Demir": "https://randomuser.me/api/portraits/men/32.jpg",
  "Can Koç": "https://randomuser.me/api/portraits/men/75.jpg",
  "Kerem Yıldız": "https://randomuser.me/api/portraits/men/65.jpg",
  "Merve Aydın": "https://randomuser.me/api/portraits/women/68.jpg",
  "John Sterling": "https://randomuser.me/api/portraits/men/41.jpg",
  "Sarah Jenkins": "https://randomuser.me/api/portraits/women/51.jpg",
  "Emily Rose": "https://randomuser.me/api/portraits/women/36.jpg",
  "Michael Vance": "https://randomuser.me/api/portraits/men/22.jpg",
  "Carlos Ruiz": "https://randomuser.me/api/portraits/men/61.jpg",
  "Maria Ortega": "https://randomuser.me/api/portraits/women/29.jpg"
};

const affiliationCompanies = [
  {
    id: "bbva-group",
    name: "Banco Bilbao Vizcaya Argentaria S.A.",
    shortName: "BBVA Group",
    logo: "./assets/company-logos/bbva-group.svg",
    domain: "bbva.com",
    type: "Holding",
    countries: ["İspanya", "Meksika", "Türkiye", "Arjantin", "Kolombiya", "Amerika Birleşik Devletleri"],
    cities: ["Madrid", "Mexico City", "İstanbul", "Buenos Aires", "Bogota", "New York"],
    campuses: ["Ciudad BBVA", "Torre BBVA México", "Garanti BBVA HQ", "Torre BBVA Argentina", "Torre BBVA Colombia", "New York HQ"],
    departments: ["Global Strategy", "Innovation", "Finance", "Talent & Culture", "Sustainability"]
  },
  // Spain
  {
    id: "bbva-espana",
    name: "BBVA España",
    shortName: "BBVA España",
    logo: "./assets/company-logos/bbva-group.svg",
    domain: "bbva.es",
    type: "Banka",
    countries: ["İspanya"],
    cities: ["Madrid", "Barcelona", "Valencia"],
    campuses: ["Ciudad BBVA Madrid", "Barcelona Hub"],
    departments: ["Digital Banking", "Retail Banking", "Sustainability", "Innovation Lab"]
  },
  {
    id: "bbva-spark-es",
    name: "BBVA Spark España",
    shortName: "BBVA Spark ES",
    logo: "./assets/company-logos/bbva-group.svg",
    domain: "bbvaspark.com",
    type: "Teknoloji",
    countries: ["İspanya"],
    cities: ["Madrid", "Barcelona"],
    campuses: ["Ciudad BBVA"],
    departments: ["Venture Debt", "Startup Accelerator", "Fintech Growth"]
  },
  {
    id: "bbva-securities-es",
    name: "BBVA Securities España",
    shortName: "BBVA Securities ES",
    logo: "./assets/company-logos/bbva-group.svg",
    domain: "bbva.es",
    type: "Finans",
    countries: ["İspanya"],
    cities: ["Madrid"],
    campuses: ["Ciudad BBVA"],
    departments: ["Corporate Finance", "Market Analysis", "Investment"]
  },
  // Mexico
  {
    id: "bbva-mexico",
    name: "BBVA México S.A.",
    shortName: "BBVA México",
    logo: "./assets/company-logos/bbva-group.svg",
    domain: "bbva.mx",
    type: "Banka",
    countries: ["Meksika"],
    cities: ["Mexico City", "Guadalajara", "Monterrey"],
    campuses: ["Torre BBVA México", "Polanco Center"],
    departments: ["Banca Digital", "Sostenibilidad", "Operaciones", "Innovación"]
  },
  {
    id: "bbva-spark-mx",
    name: "BBVA Spark México",
    shortName: "BBVA Spark MX",
    logo: "./assets/company-logos/bbva-group.svg",
    domain: "bbvaspark.com",
    type: "Teknoloji",
    countries: ["Meksika"],
    cities: ["Mexico City"],
    campuses: ["Torre BBVA México"],
    departments: ["Fintech Ventures", "Growth Equity", "Digital Onboarding"]
  },
  {
    id: "bbva-seguros-mx",
    name: "BBVA Seguros México",
    shortName: "BBVA Seguros MX",
    logo: "./assets/company-logos/bbva-group.svg",
    domain: "bbvaseguros.mx",
    type: "Sigorta",
    countries: ["Meksika"],
    cities: ["Mexico City"],
    campuses: ["Torre BBVA México"],
    departments: ["Risk Management", "Actuarial", "Claims", "Customer Experience"]
  },
  // Turkey
  {
    id: "garanti-bbva",
    name: "Garanti Bankası A.Ş. (Garanti BBVA)",
    shortName: "Garanti BBVA",
    logo: "./assets/company-logos/garanti-bbva.svg",
    domain: "garantibbva.com.tr",
    type: "Banka",
    countries: ["Türkiye"],
    cities: ["İstanbul", "Ankara", "İzmir"],
    campuses: ["Garanti BBVA Genel Müdürlük", "Zincirlikuyu HQ"],
    departments: ["Dijital Bankacılık", "Kobi Bankacılığı", "Hazine", "İnovasyon Ofisi"]
  },
  {
    id: "garanti-bbva-teknoloji",
    name: "Garanti BBVA Teknoloji A.Ş.",
    shortName: "Garanti BBVA Teknoloji",
    logo: "./assets/company-logos/garanti-bbva.svg",
    domain: "garantibbvateknoloji.com.tr",
    type: "Teknoloji",
    countries: ["Türkiye"],
    cities: ["İstanbul"],
    campuses: ["Pendik Teknoloji Kampüsü"],
    departments: ["Yapay Zekâ", "Siber Güvenlik", "Bulut Teknolojileri", "Mobil Bankacılık Ürünleri"]
  },
  {
    id: "garanti-bbva-emeklilik",
    name: "Garanti BBVA Emeklilik ve Hayat A.Ş.",
    shortName: "Garanti BBVA Emeklilik",
    logo: "./assets/company-logos/garanti-bbva.svg",
    domain: "garantibbvaemeklilik.com.tr",
    type: "Sigorta",
    countries: ["Türkiye"],
    cities: ["İstanbul"],
    campuses: ["Zincirlikuyu HQ"],
    departments: ["Bireysel Emeklilik", "Müşteri Deneyimi", "Hasar Yönetimi"]
  },
  // Argentina
  {
    id: "bbva-argentina",
    name: "BBVA Argentina S.A.",
    shortName: "BBVA Argentina",
    logo: "./assets/company-logos/bbva-group.svg",
    domain: "bbva.com.ar",
    type: "Banka",
    countries: ["Arjantin"],
    cities: ["Buenos Aires", "Cordoba", "Rosario"],
    campuses: ["Torre BBVA Argentina"],
    departments: ["Banca Retail", "Fintech Labs", "Riesgos"]
  },
  {
    id: "bbva-asset-mgmt-ar",
    name: "BBVA Asset Management Argentina",
    shortName: "BBVA AM Argentina",
    logo: "./assets/company-logos/bbva-group.svg",
    domain: "bbva.com.ar",
    type: "Finans",
    countries: ["Arjantin"],
    cities: ["Buenos Aires"],
    campuses: ["Torre BBVA Argentina"],
    departments: ["Portfolio Management", "ESG Investment", "Sales"]
  },
  // Colombia
  {
    id: "bbva-colombia",
    name: "BBVA Colombia S.A.",
    shortName: "BBVA Colombia",
    logo: "./assets/company-logos/bbva-group.svg",
    domain: "bbva.com.co",
    type: "Banka",
    countries: ["Kolombiya"],
    cities: ["Bogota", "Medellin", "Cali"],
    campuses: ["Torre BBVA Colombia"],
    departments: ["Banca de Empresas", "Sostenibilidad", "Transformación Digital"]
  },
  {
    id: "bbva-seguros-co",
    name: "BBVA Seguros Colombia",
    shortName: "BBVA Seguros CO",
    logo: "./assets/company-logos/bbva-group.svg",
    domain: "bbva.com.co",
    type: "Sigorta",
    countries: ["Kolombiya"],
    cities: ["Bogota"],
    campuses: ["Torre BBVA Colombia"],
    departments: ["Risk & Underwriting", "Operations", "Life Insurance"]
  },
  // USA
  {
    id: "bbva-cib-us",
    name: "BBVA Corporate & Investment Banking US",
    shortName: "BBVA CIB US",
    logo: "./assets/company-logos/bbva-group.svg",
    domain: "bbvacib.com",
    type: "Banka",
    countries: ["Amerika Birleşik Devletleri"],
    cities: ["New York", "Houston"],
    campuses: ["New York HQ", "Houston Office"],
    departments: ["Structured Finance", "Energy Transition", "Global Markets"]
  },
  {
    id: "bbva-securities-us",
    name: "BBVA Securities US Inc.",
    shortName: "BBVA Securities US",
    logo: "./assets/company-logos/bbva-group.svg",
    domain: "bbvacib.com",
    type: "Finans",
    countries: ["Amerika Birleşik Devletleri"],
    cities: ["New York"],
    campuses: ["New York HQ"],
    departments: ["Broker Dealer", "Fixed Income", "Compliance"]
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
  // Turkey (TR)
  { id: "p01", name: "Defne Arman", companyId: "bbva-group", role: "Strateji Direktörü", team: "Holding Strateji", city: "İstanbul", campus: "Ciudad BBVA", photo: "https://randomuser.me/api/portraits/women/12.jpg", status: "Aktif", country: "TR" },
  { id: "p02", name: "Mert Alkan", companyId: "garanti-bbva-teknoloji", role: "İnovasyon Lideri", team: "Yapay Zekâ Ofisi", city: "İstanbul", campus: "Pendik Teknoloji Kampüsü", photo: "https://randomuser.me/api/portraits/men/12.jpg", status: "Toplantıda", country: "TR" },
  { id: "p03", name: "Selin Eryılmaz", companyId: "bbva-cib-us", role: "Ar-Ge Lideri", team: "Mersin Fabrika Ar-Ge", city: "Mersin", campus: "Mersin Fabrika", photo: "https://randomuser.me/api/portraits/women/32.jpg", status: "Aktif", country: "TR" },
  { id: "p04", name: "Baran İleri", companyId: "bbva-spark-es", role: "Üretim Müdürü", team: "Adana Fabrika", city: "Adana", campus: "Adana Fabrika", photo: "https://randomuser.me/api/portraits/men/27.jpg", status: "Sahada", country: "TR" },
  { id: "p05", name: "Ece Uslu", companyId: "garanti-bbva", role: "Sürdürülebilir Finans Yöneticisi", team: "İnovasyon Lab", city: "İstanbul", campus: "Garanti BBVA Genel Müdürlük", photo: "https://randomuser.me/api/portraits/women/45.jpg", status: "Aktif", country: "TR" },
  
  // United States (GB)
  { id: "p06", name: "John Sterling", companyId: "bbva-cib-us", role: "Clean Energy Director", team: "Investment", city: "New York", campus: "New York HQ", photo: "https://randomuser.me/api/portraits/men/44.jpg", status: "Aktif", country: "GB" },
  { id: "p07", name: "Sarah Jenkins", companyId: "bbva-cib-us-uk", role: "UK Sales Lead", team: "Sales", city: "New York", campus: "New York HQ", photo: "https://randomuser.me/api/portraits/women/64.jpg", status: "Aktif", country: "GB" },
  { id: "p08", name: "David Miller", companyId: "bbva-colombia-uk", role: "Composite Lead Scientist", team: "R&D", city: "New York", campus: "New York HQ", photo: "https://randomuser.me/api/portraits/men/53.jpg", status: "Aktif", country: "GB" },
  { id: "p09", name: "Oliver Watson", companyId: "bbva-group", role: "International Strategist", team: "Strategy", city: "New York", campus: "New York HQ", photo: "https://randomuser.me/api/portraits/men/86.jpg", status: "Aktif", country: "GB" },
  { id: "p17", name: "George Taylor", companyId: "bbva-colombia-uk", role: "Aerospace Composites Engineer", team: "R&D", city: "New York", campus: "New York HQ", photo: "https://randomuser.me/api/portraits/men/41.jpg", status: "Toplantıda", country: "GB" },
  { id: "p18", name: "Amelia Williams", companyId: "bbva-cib-us-uk", role: "B2B Portal Product Owner", team: "Sales", city: "New York", campus: "New York HQ", photo: "https://randomuser.me/api/portraits/women/52.jpg", status: "Aktif", country: "GB" },

  // United States (US)
  { id: "p10", name: "Michael Vance", companyId: "bbva-mexico", role: "VP of Energy Storage", team: "Energy Storage", city: "Austin", campus: "Austin HQ", photo: "https://randomuser.me/api/portraits/men/22.jpg", status: "Aktif", country: "US" },
  { id: "p11", name: "Emily Rose", companyId: "bbva-cib-us-americas", role: "Houston Terminal Manager", team: "Operations", city: "Houston", campus: "Houston Terminal", photo: "https://randomuser.me/api/portraits/women/36.jpg", status: "Sahada", country: "US" },
  { id: "p12", name: "Robert Chen", companyId: "bbva-colombia-usa", role: "Material Lead Scientist", team: "Technical Services", city: "Chattanooga", campus: "Chattanooga Facility", photo: "https://randomuser.me/api/portraits/men/61.jpg", status: "Aktif", country: "US" },
  { id: "p19", name: "Jennifer Miller", companyId: "bbva-mexico", role: "Grid Services Manager", team: "Energy Storage", city: "Austin", campus: "Texas Solar Farm Office", photo: "https://randomuser.me/api/portraits/women/58.jpg", status: "Aktif", country: "US" },
  { id: "p20", name: "Thomas Martin", companyId: "bbva-colombia-usa", role: "Graphene Composites Researcher", team: "Technical Services", city: "Chattanooga", campus: "Laurel R&D center", photo: "https://randomuser.me/api/portraits/men/19.jpg", status: "Sahada", country: "US" },

  // Argentina (DE)
  { id: "p13", name: "Hans Müller", companyId: "bbva-cib-us-germany", role: "Logistics Coordinator", team: "Logistics", city: "Hamburg", campus: "Hamburg Terminal", photo: "https://randomuser.me/api/portraits/men/72.jpg", status: "Aktif", country: "DE" },
  { id: "p14", name: "Dieter Schmidt", companyId: "bbva-spark-es-germany", role: "Mobility Operations Mgr", team: "Mobility Lab", city: "Buenos Aires", campus: "Buenos Aires Mobility Lab", photo: "https://randomuser.me/api/portraits/men/95.jpg", status: "Aktif", country: "DE" },
  { id: "p21", name: "Sabine Schmidt", companyId: "bbva-cib-us-germany", role: "Buenos Aires Satış Sorumlusu", team: "Sales", city: "Buenos Aires", campus: "Buenos Aires Sales Hub", photo: "https://randomuser.me/api/portraits/women/63.jpg", status: "Aktif", country: "DE" },
  { id: "p22", name: "Andreas Weber", companyId: "bbva-spark-es-germany", role: "Telemetri Mühendisi", team: "Mobility Lab", city: "Buenos Aires", campus: "Buenos Aires Mobility Lab", photo: "https://randomuser.me/api/portraits/men/77.jpg", status: "Toplantıda", country: "DE" },

  // Spain (ES)
  { id: "p15", name: "Carlos Ruiz", companyId: "bbva-cib-us-spain", role: "Buñol Plant Manager", team: "Production", city: "Buñol", campus: "Buñol Plant", photo: "https://randomuser.me/api/portraits/men/38.jpg", status: "Aktif", country: "ES" },
  { id: "p16", name: "Maria Ortega", companyId: "bbva-cib-us-spain", role: "Sustainability Lead Analyst", team: "R&D", city: "Buñol", campus: "Buñol Plant", photo: "https://randomuser.me/api/portraits/women/29.jpg", status: "Aktif", country: "ES" },
  { id: "p23", name: "Antonio García", companyId: "bbva-cib-us-spain", role: "Valencia Satış Sorumlusu", team: "Sales", city: "Valencia", campus: "Valencia Sales Hub", photo: "https://randomuser.me/api/portraits/men/49.jpg", status: "Aktif", country: "ES" },
  { id: "p24", name: "Isabel Martínez", companyId: "bbva-cib-us-spain", role: "Kalite Kontrol Mühendisi", team: "Production", city: "Buñol", campus: "Buñol Plant", photo: "https://randomuser.me/api/portraits/women/71.jpg", status: "Sahada", country: "ES" }
];

const initialAnnouncements = [
  // Turkey (TR)
  {
    id: "ann-1",
    title: "BBVA Group Haziran Fikir Kampanyası başladı",
    body: "Tüm grup şirketlerindeki verimlilik ve enerji tasarrufu fikirleri bu ay aynı havuzda toplanacaktır. Garanti BBVA, BBVA Spark México, BBVA CIB US ve BBVA Securities España ekiplerine duyurulur.",
    scope: "Holding geneli",
    companyId: "bbva-group",
    country: "TR",
    city: "İstanbul",
    campus: "Ciudad BBVA",
    department: "Tüm ekipler",
    authorId: "p01",
    time: "Bugün 09:10",
    priority: "Yönetici duyurusu"
  },
  {
    id: "ann-2",
    title: "Garanti BBVA Akademi inovasyon eğitimleri açıldı",
    body: "Bankacılık süreçlerinde otomasyon ve API teknolojileri geliştirmek isteyen çalışma arkadaşları için başvurular başladı.",
    scope: "İştirak",
    companyId: "garanti-bbva",
    country: "TR",
    city: "İstanbul",
    campus: "Garanti BBVA Akademi",
    department: "Tüm Ekipler",
    authorId: "p05",
    time: "Dün 14:20",
    priority: "İştirak"
  },
  {
    id: "ann-7",
    title: "BBVA Spark México Yapay Zeka Destekli Talep Tahminleme Çalışması",
    body: "E-ticaret ve fiziksel mağaza stok seviyelerini optimize eden, mevsimsel geçişleri tahminleyen algoritmalar aranıyor. Kategori ekibine duyurulur.",
    scope: "İştirak",
    companyId: "bbva-spark-mx",
    country: "TR",
    city: "İstanbul",
    campus: "Torre BBVA México",
    department: "Kategori Yönetimi",
    authorId: "p02",
    time: "Dün 16:40",
    priority: "İştirak"
  },
  {
    id: "ann-8",
    title: "BBVA Seguros Colombia Taze Gıda Tedarik Zinciri Takibi",
    body: "Tarladan rafa taze gıda fire oranlarını %50 azaltacak akıllı lojistik ve soğuk zincir IoT sensör entegrasyonu fikir havuzu açıldı.",
    scope: "İştirak",
    companyId: "bbva-seguros-co",
    country: "TR",
    city: "İstanbul",
    campus: "Torre BBVA Colombia",
    department: "Tedarik Zinciri",
    authorId: "u2",
    time: "Bugün 10:00",
    priority: "İştirak"
  },
  {
    id: "ann-9",
    title: "BBVA Securities España Akıllı Şebeke Yük Dağıtımı Projesi",
    body: "Dağıtım şebekesindeki anlık pik yükleri dengeleyecek ve kesintileri minimize edecek akıllı algoritmaların test aşaması başlıyor.",
    scope: "İştirak",
    companyId: "bbva-securities-es",
    country: "TR",
    city: "Ankara",
    campus: "Dağıtım Kontrol Merkezi",
    department: "Şebeke Operasyonları",
    authorId: "p05",
    time: "2 gün önce",
    priority: "İştirak"
  },
  {
    id: "ann-10",
    title: "BBVA Argentina İzmit Fabrikası Lastik Sensör Testleri",
    body: "Binek ve ticari araçlar için geliştirilen akıllı lastik sensör verilerinin bulut sistemlerine aktarım hızı optimize ediliyor.",
    scope: "İştirak",
    companyId: "bbva-argentina",
    country: "TR",
    city: "Kocaeli",
    campus: "İzmit Fabrika",
    department: "Ar-Ge",
    authorId: "u4",
    time: "Bugün 11:15",
    priority: "İştirak"
  },
  {
    id: "ann-11",
    title: "BBVA Colombia Grafen Katkılı Kompozit Geliştirme Çalışmaları",
    body: "Havacılık ve otomotiv endüstrisi için aşırı hafif ve dayanıklı yeni nesil karbon fiber takviyeli kompozit formülleri test edilecek.",
    scope: "İştirak",
    companyId: "bbva-colombia",
    country: "TR",
    city: "Kocaeli",
    campus: "İzmit HQ",
    department: "Kompozit Teknolojileri",
    authorId: "p03",
    time: "Dün 10:30",
    priority: "İştirak"
  },
  {
    id: "ann-12",
    title: "BBVA CIB US Mersin Fabrikası Alternatif Yakıt Kullanımı",
    body: "Kalsinasyon fırınlarında fosil yakıt yerine endüstriyel atık çamuru ve atık lastik kullanım oranını %65'e çıkarma teknik tasarımı.",
    scope: "İştirak",
    companyId: "bbva-cib-us",
    country: "TR",
    city: "Mersin",
    campus: "Mersin Fabrika",
    department: "Sürdürülebilirlik",
    authorId: "p03",
    time: "Bugün 13:00",
    priority: "İştirak"
  },
  {
    id: "ann-13",
    title: "BBVA Spark España Batarya Yönetim Sistemi (BMS) Yazılım Sprinti",
    body: "Elektrikli otobüslerin şehir içi dur-kalk çevrimlerinde hücre ömrünü %15 uzatan rejeneratif frenleme algoritması entegre ediliyor.",
    scope: "İştirak",
    companyId: "bbva-spark-es",
    country: "TR",
    city: "Adana",
    campus: "Adana Fabrika",
    department: "Elektrikli Araçlar Ar-Ge",
    authorId: "p04",
    time: "Dün 15:45",
    priority: "İştirak"
  },
  {
    id: "ann-14",
    title: "Garanti BBVA Teknoloji GenAI Asistanı Entegrasyonu",
    body: "Platform içi tüm veri katmanlarını (fikirler, borsa, tahminler) özetleyen yapay zeka asistanı model güncellemeleri tamamlandı.",
    scope: "İştirak",
    companyId: "garanti-bbva-teknoloji",
    country: "TR",
    city: "İstanbul",
    campus: "Pendik Teknoloji Kampüsü",
    department: "Yapay Zekâ",
    authorId: "p02",
    time: "Bugün 09:00",
    priority: "İştirak"
  },
  {
    id: "ann-15",
    title: "BBVA Seguros México Yapay Zeka Destekli Hasar Analizi",
    body: "Oto kazalarında çekilen fotoğraflardan hasar boyutunu ve tahmini maliyeti 5 saniyede çıkaran derin öğrenme modeli devreye alındı.",
    scope: "İştirak",
    companyId: "bbva-seguros-mx",
    country: "TR",
    city: "İstanbul",
    campus: "BBVA Seguros México Genel Müdürlük",
    department: "Hasar Yönetimi",
    authorId: "p05",
    time: "Dün 09:25",
    priority: "İştirak"
  },
  {
    id: "ann-16",
    title: "Garanti BBVA Emeklilik Dijital Bireysel Emeklilik Asistanı",
    body: "Genç kitlelerin BES tasarruflarını otomatik fon dağılımıyla yönetmesini sağlayan akıllı mobil arayüz prototipi test ediliyor.",
    scope: "İştirak",
    companyId: "garanti-bbva-emeklilik",
    country: "TR",
    city: "İstanbul",
    campus: "Garanti BBVA Emeklilik Genel Müdürlük",
    department: "Dijital Kanallar",
    authorId: "u5",
    time: "3 gün önce",
    priority: "İştirak"
  },
  {
    id: "ann-23",
    title: "Ciudad BBVA Genç Yetenek İnovasyon Programı",
    body: "Tüm iştiraklerdeki genç mühendis ve uzmanlar için yalın girişim metotları eğitimi ve proje hızlandırıcı başvuruları açıldı.",
    scope: "Holding geneli",
    companyId: "bbva-group",
    country: "TR",
    city: "İstanbul",
    campus: "Ciudad BBVA",
    department: "İnsan Kaynakları",
    authorId: "p01",
    time: "4 gün önce",
    priority: "Yönetici duyurusu"
  },
  {
    id: "ann-24",
    title: "Garanti BBVA Açık Bankacılık API Entegrasyon Kampanyası",
    body: "Garanti BBVA API altyapısı üzerinden üçüncü parti finansal uygulamalar geliştirecek dış geliştirici fikirleri borsa havuzuna alınıyor.",
    scope: "İştirak",
    companyId: "garanti-bbva",
    country: "TR",
    city: "İstanbul",
    campus: "Garanti BBVA Genel Müdürlük",
    department: "Dijital Bankacılık",
    authorId: "u3",
    time: "Dün 16:00",
    priority: "İştirak"
  },
  {
    id: "ann-25",
    title: "BBVA Spark México Mağaza İçi Akıllı Kiosk Pilot Uygulaması",
    body: "Müşterilerin kuyruk beklemeden ürün barkodu okutup mobil ödemeyle çıkış yapabileceği otonom kioskların tasarımı onaylandı.",
    scope: "İştirak",
    companyId: "bbva-spark-mx",
    country: "TR",
    city: "İstanbul",
    campus: "Torre BBVA México",
    department: "Müşteri Deneyimi",
    authorId: "u1",
    time: "Bugün 10:30",
    priority: "İştirak"
  },
  {
    id: "ann-26",
    title: "BBVA Seguros Colombia Atık Gıda Azaltımı & Kompost Projesi",
    body: "Son tüketim tarihi yaklaşan gıdaların akıllı fiyatlandırma motoruyla anlık indirimlenmesi projesi Maltepe pilot mağazasında başlıyor.",
    scope: "İştirak",
    companyId: "bbva-seguros-co",
    country: "TR",
    city: "İstanbul",
    campus: "Torre BBVA Colombia",
    department: "Mağaza Operasyonları",
    authorId: "u2",
    time: "Dün 11:00",
    priority: "İştirak"
  },
  {
    id: "ann-27",
    title: "BBVA Securities España Çatı Üstü Güneş Enerjisi (GES) Çözümleri",
    body: "Sanayi sitelerinde atıl duran çatı alanlarının BBVA Securities España finansmanıyla güneş paneli tarlalarına dönüştürülmesi modeli.",
    scope: "İştirak",
    companyId: "bbva-securities-es",
    country: "TR",
    city: "İstanbul",
    campus: "Ciudad BBVA",
    department: "Yeşil Enerji",
    authorId: "p05",
    time: "Bugün 08:30",
    priority: "İştirak"
  },
  {
    id: "ann-28",
    title: "BBVA Argentina Aksaray Fabrikası Otonom Taşıma Robotları (AGV)",
    body: "Hammadde taşıma bandındaki otonom yönlendirmeli araçların rota verimliliği AI simülasyonuyla %20 artırıldı.",
    scope: "İştirak",
    companyId: "bbva-argentina",
    country: "TR",
    city: "Aksaray",
    campus: "Aksaray Akıllı Fabrika",
    department: "Üretim",
    authorId: "u4",
    time: "2 gün önce",
    priority: "İştirak"
  },
  {
    id: "ann-29",
    title: "BBVA Colombia Sürdürülebilir Naylon İplik Geliştirme",
    body: "Geri dönüştürülmüş plastik hammaddelerden lastik kord bezi üretiminde kullanılacak yüksek mukavemetli naylon iplik prototipi hazır.",
    scope: "İştirak",
    companyId: "bbva-colombia",
    country: "TR",
    city: "Kocaeli",
    campus: "İzmit HQ",
    department: "Ar-Ge",
    authorId: "p03",
    time: "Dün 14:10",
    priority: "İştirak"
  },
  {
    id: "ann-30",
    title: "BBVA CIB US Düşük Karbonlu Kalsine Kil Geliştirme",
    body: "Çimento klinker ikamesi olarak kalsine kil kullanarak beton üretimindeki CO2 ayak izini %30 azaltan yeşil beton formülü.",
    scope: "İştirak",
    companyId: "bbva-cib-us",
    country: "TR",
    city: "Mersin",
    campus: "Mersin Fabrika",
    department: "Ar-Ge",
    authorId: "p03",
    time: "5 gün önce",
    priority: "İştirak"
  },
  {
    id: "ann-31",
    title: "BBVA Spark España Hidrojen Yakıt Hücreli Otobüs Tanıtımı",
    body: "Geliştirilen hidrojen prototip otobüsün sürüş menzili ve tank güvenlik sensörleri saha simülasyonlarıyla onaylanmıştır.",
    scope: "İştirak",
    companyId: "bbva-spark-es",
    country: "TR",
    city: "Adana",
    campus: "Adana Fabrika",
    department: "Elektrikli Araçlar Ar-Ge",
    authorId: "p04",
    time: "Dün 10:15",
    priority: "İştirak"
  },
  {
    id: "ann-32",
    title: "Garanti BBVA Teknoloji Siber Güvenlik Tehdit Algılama",
    body: "Holding ve tüm iştiraklerin bulut ağlarındaki anormal giriş denemelerini tespit eden yapay zeka siber kalkanı kuruldu.",
    scope: "İştirak",
    companyId: "garanti-bbva-teknoloji",
    country: "TR",
    city: "İstanbul",
    campus: "Pendik Teknoloji Kampüsü",
    department: "Siber Güvenlik",
    authorId: "p02",
    time: "Bugün 12:45",
    priority: "İştirak"
  },
  {
    id: "ann-33",
    title: "BBVA Seguros México Mobil Hasar Tespit Uygulaması",
    body: "Saha eksperlerinin mobil tabletler üzerinden hızlıca hasar dosyası açmasını sağlayan bulut veri tabanı senkronizasyonu tamamlandı.",
    scope: "İştirak",
    companyId: "bbva-seguros-mx",
    country: "TR",
    city: "İstanbul",
    campus: "BBVA Seguros México Genel Müdürlük",
    department: "Hasar Yönetimi",
    authorId: "p05",
    time: "Bugün 14:00",
    priority: "İştirak"
  },
  {
    id: "ann-34",
    title: "Garanti BBVA Emeklilik Müşteri Kaybı (Churn) Tahminleme Modeli",
    body: "Yapay zeka modelleriyle BES iptal eğiliminde olan müşterileri 3 ay önceden belirleyen proaktif arama robotu.",
    scope: "İştirak",
    companyId: "garanti-bbva-emeklilik",
    country: "TR",
    city: "İstanbul",
    campus: "Garanti BBVA Emeklilik Genel Müdürlük",
    department: "Dijital Kanallar",
    authorId: "u5",
    time: "Dün 17:30",
    priority: "İştirak"
  },
  {
    id: "ann-44",
    title: "Sabancı Altın Yaka İnovasyon Ödülleri Açıklandı",
    body: "Bu yılki Altın Yaka inovasyon kategorilerinde dereceye giren fikir sahiplerine toplamda 500.000 BBVA ödül dağıtılacaktır.",
    scope: "Holding geneli",
    companyId: "bbva-group",
    country: "TR",
    city: "İstanbul",
    campus: "Ciudad BBVA",
    department: "İnovasyon",
    authorId: "p01",
    time: "Bugün 09:30",
    priority: "Yönetici duyurusu"
  },
  {
    id: "ann-45",
    title: "Garanti BBVA Yeşil Finansman Kredi Paketleri",
    body: "Sürdürülebilirlik skoru yüksek olan grup şirketlerine özel fonlama ve yeşil tahvil ihracı borsa tahtasına eklenmiştir.",
    scope: "İştirak",
    companyId: "garanti-bbva",
    country: "TR",
    city: "İstanbul",
    campus: "Garanti BBVA Genel Müdürlük",
    department: "Kurumsal Bankacılık",
    authorId: "u3",
    time: "Dün 10:00",
    priority: "İştirak"
  },
  {
    id: "ann-46",
    title: "BBVA Spark México TeknoGaranti Otomasyonu",
    body: "Kullanıcıların satın aldığı elektronik cihazların garanti ve servis takibini tamamen dijitalleştiren altyapı devreye girdi.",
    scope: "İştirak",
    companyId: "bbva-spark-mx",
    country: "TR",
    city: "İstanbul",
    campus: "Torre BBVA México",
    department: "Müşteri Deneyimi",
    authorId: "u1",
    time: "3 gün önce",
    priority: "İştirak"
  },
  {
    id: "ann-47",
    title: "BBVA Seguros Colombia Kart Mobil Kampanya Önerileri",
    body: "Müşterinin geçmiş satın alma alışkanlıklarına göre markette yürürken anlık bildirimle kupon sunan AI motoru.",
    scope: "İştirak",
    companyId: "bbva-seguros-co",
    country: "TR",
    city: "İstanbul",
    campus: "Torre BBVA Colombia",
    department: "Kategori Yönetimi",
    authorId: "u2",
    time: "Dün 15:00",
    priority: "İştirak"
  },
  {
    id: "ann-48",
    title: "BBVA Securities España Eşarj İstasyon Ağı Genişlemesi",
    body: "Türkiye genelindeki otoban ve AVM otoparklarına kurulacak yeni DC yüksek hızlı şarj istasyon yerleşim optimizasyon fikirleri.",
    scope: "İştirak",
    companyId: "bbva-securities-es",
    country: "TR",
    city: "İstanbul",
    campus: "Ciudad BBVA",
    department: "Yeşil Enerji",
    authorId: "p05",
    time: "Bugün 11:00",
    priority: "İştirak"
  },
  {
    id: "ann-49",
    title: "BBVA Argentina İzmit Fabrikası IoT Bulut Entegrasyonu",
    body: "Üretim hattındaki pres makinelerinin titreşim sensör verileri Azure bulut ortamına anlık olarak aktarılmaya başlandı.",
    scope: "İştirak",
    companyId: "bbva-argentina",
    country: "TR",
    city: "Kocaeli",
    campus: "İzmit Fabrika",
    department: "Üretim",
    authorId: "u4",
    time: "Bugün 12:00",
    priority: "İştirak"
  },
  {
    id: "ann-50",
    title: "BBVA Colombia Havacılık İçin Hafif Prepreg Malzemeler",
    body: "Boeing ve Airbus parça standartlarına tam uyumlu, epoksi reçineli karbon elyaf kompozitlerin seri üretimi onaylandı.",
    scope: "İştirak",
    companyId: "bbva-colombia",
    country: "TR",
    city: "Kocaeli",
    campus: "İzmit HQ",
    department: "Kompozit Teknolojileri",
    authorId: "p03",
    time: "Dün 13:00",
    priority: "İştirak"
  },
  {
    id: "ann-51",
    title: "BBVA CIB US Enerji Verimli Öğütme Teknolojisi",
    body: "Mersin fabrikasındaki dikey çimento değirmenlerinin tahrik motorlarında yapılan modifikasyonla elektrik tüketimi %12 azaltıldı.",
    scope: "İştirak",
    companyId: "bbva-cib-us",
    country: "TR",
    city: "Mersin",
    campus: "Mersin Fabrika",
    department: "Üretim",
    authorId: "p03",
    time: "Bugün 10:45",
    priority: "İştirak"
  },
  {
    id: "ann-52",
    title: "BBVA Spark España Fabrika İçi Dijital İkiz (Digital Twin)",
    body: "Adana otobüs montaj hattının tüm fiziksel süreçleri 3D dijital ikiz simülasyonuna aktarılarak darboğazlar tespit edildi.",
    scope: "İştirak",
    companyId: "bbva-spark-es",
    country: "TR",
    city: "Adana",
    campus: "Adana Fabrika",
    department: "Üretim",
    authorId: "p04",
    time: "Dün 14:30",
    priority: "İştirak"
  },
  {
    id: "ann-53",
    title: "Garanti BBVA Teknoloji Blokzincir Tabanlı Akıllı Tedarik",
    body: "İştirakler arası malzeme tedarik sözleşmelerinin akıllı kontratlarla otomatik onaylanmasını sağlayan blokzincir altyapısı.",
    scope: "İştirak",
    companyId: "garanti-bbva-teknoloji",
    country: "TR",
    city: "İstanbul",
    campus: "Pendik Teknoloji Kampüsü",
    department: "Bulut Teknolojileri",
    authorId: "p02",
    time: "Bugün 13:30",
    priority: "İştirak"
  },
  {
    id: "ann-54",
    title: "BBVA Seguros México Evcil Hayvan Sigortası Yenilikçi Ekranlar",
    body: "Mobil uygulama üzerinden pati fotoğraflarıyla evcil hayvan kimlik tespiti ve hızlı sigorta poliçesi oluşturma modülü.",
    scope: "İştirak",
    companyId: "bbva-seguros-mx",
    country: "TR",
    city: "İstanbul",
    campus: "BBVA Seguros México Genel Müdürlük",
    department: "Müşteri Deneyimi",
    authorId: "p05",
    time: "Bugün 15:30",
    priority: "İştirak"
  },
  {
    id: "ann-55",
    title: "Garanti BBVA Emeklilik Robotik Süreç Otomasyonu (RPA)",
    body: "İşe alım, bordrolama ve çalışan kartı basım gibi standart İK süreçleri robot yazılımlarla saniyeler içinde tamamlanıyor.",
    scope: "İştirak",
    companyId: "garanti-bbva-emeklilik",
    country: "TR",
    city: "İstanbul",
    campus: "Garanti BBVA Emeklilik Genel Müdürlük",
    department: "İnsan Kaynakları",
    authorId: "u5",
    time: "Dün 11:30",
    priority: "İştirak"
  },

  // United States (GB)
  {
    id: "ann-3",
    title: "Sabancı Renewables Wind Grid Connection Update",
    body: "The UK wind grid integration project will collect and evaluate smart distribution ideas. Open to all operations and grid team members.",
    scope: "Holding geneli",
    companyId: "bbva-cib-us",
    country: "GB",
    city: "New York",
    campus: "New York HQ",
    department: "Operations",
    authorId: "p06",
    time: "Dün 10:45",
    priority: "Yönetici duyurusu"
  },
  {
    id: "ann-17",
    title: "BBVA CIB US UK Sales Portal Goes Live",
    body: "Distributors across the UK can now order high-strength white cement via our integrated B2B online sales platform.",
    scope: "İştirak",
    companyId: "bbva-cib-us-uk",
    country: "GB",
    city: "New York",
    campus: "New York White Cement HQ",
    department: "Sales",
    authorId: "p07",
    time: "Bugün 10:00",
    priority: "İştirak"
  },
  {
    id: "ann-18",
    title: "BBVA Colombia UK Aerospace Composites Collaboration",
    body: "Partnering with UK aerospace engineering hubs to prototype ultra-thin epoxy prepregs for next-gen commercial jet wings.",
    scope: "İştirak",
    companyId: "bbva-colombia-uk",
    country: "GB",
    city: "New York",
    campus: "New York HQ",
    department: "R&D",
    authorId: "p08",
    time: "Dün 14:00",
    priority: "İştirak"
  },
  {
    id: "ann-35",
    title: "Sabancı Renewables UK Wind Farm Expansion Study",
    body: "Conducting feasibility checks for offshore wind farm grid connections in the North Sea. Submit storage optimization plans.",
    scope: "Holding geneli",
    companyId: "bbva-cib-us",
    country: "GB",
    city: "New York",
    campus: "New York HQ",
    department: "Investment",
    authorId: "p06",
    time: "Dün 16:30",
    priority: "Yönetici duyurusu"
  },
  {
    id: "ann-36",
    title: "BBVA CIB US UK Carbon Emission Ledger Integration",
    body: "Import logistics fleet fuel optimization will be tracked using blockchain data. Submit routing suggestions.",
    scope: "İştirak",
    companyId: "bbva-cib-us-uk",
    country: "GB",
    city: "New York",
    campus: "New York White Cement HQ",
    department: "Logistics",
    authorId: "p07",
    time: "2 gün önce",
    priority: "İştirak"
  },

  // United States (US)
  {
    id: "ann-4",
    title: "Houston White Cement Packing Automation Trial",
    body: "BBVA CIB US Americas is starting a trial for high-speed bagging line automation. Submit your suggestions to reduce dust emissions.",
    scope: "İştirak",
    companyId: "bbva-cib-us-americas",
    country: "US",
    city: "Houston",
    campus: "Houston Terminal",
    department: "Operations",
    authorId: "p11",
    time: "Bugün 08:00",
    priority: "İştirak"
  },
  {
    id: "ann-19",
    title: "Sabancı Climate US Energy Storage Investment Campaign",
    body: "Inviting proposals for software logic to manage utility-scale battery dispatch operations in Austin solar farms.",
    scope: "Holding geneli",
    companyId: "bbva-mexico",
    country: "US",
    city: "Austin",
    campus: "Austin HQ",
    department: "Energy Storage",
    authorId: "p10",
    time: "Bugün 09:15",
    priority: "Yönetici duyurusu"
  },
  {
    id: "ann-20",
    title: "BBVA Colombia USA Cord Fabric Capacity Boost",
    body: "Chattanooga facility is expanding high-tenacity nylon yarn dipping lines to meet surging EV tire market demand.",
    scope: "İştirak",
    companyId: "bbva-colombia-usa",
    country: "US",
    city: "Chattanooga",
    campus: "Chattanooga Facility",
    department: "Technical Services",
    authorId: "p12",
    time: "Dün 13:00",
    priority: "İştirak"
  },
  {
    id: "ann-37",
    title: "Sabancı Climate US Solar Battery Storage Pilot",
    body: "Testing modular battery containers in our Texas facility. Submit predictive thermal cooling algorithm ideas.",
    scope: "Holding geneli",
    companyId: "bbva-mexico",
    country: "US",
    city: "Austin",
    campus: "Austin HQ",
    department: "Energy Storage",
    authorId: "p10",
    time: "3 gün önce",
    priority: "Yönetici duyurusu"
  },
  {
    id: "ann-38",
    title: "BBVA CIB US Americas Houston Order Tracking App",
    body: "Customer portal launch allows dry bulk trucks to register pickup times, cutting waiting queues in terminal by 40%.",
    scope: "İştirak",
    companyId: "bbva-cib-us-americas",
    country: "US",
    city: "Houston",
    campus: "Houston Terminal",
    department: "Operations",
    authorId: "p11",
    time: "Bugün 10:20",
    priority: "İştirak"
  },
  {
    id: "ann-39",
    title: "BBVA Colombia USA Industry 4.0 IoT Enabler Project",
    body: "Vibration sensors installed on yarn twisting spindles detect early mechanical failures, boosting runtime safety.",
    scope: "İştirak",
    companyId: "bbva-colombia-usa",
    country: "US",
    city: "Chattanooga",
    campus: "Chattanooga Facility",
    department: "Technical Services",
    authorId: "p12",
    time: "Dün 15:40",
    priority: "İştirak"
  },

  // Argentina (DE)
  {
    id: "ann-5",
    title: "Buenos Aires Mobility Lab Hydrogen bus test trials",
    body: "BBVA Spark España Argentina is launching hydrogen-powered bus suburban test routes. Please register route optimization ideas.",
    scope: "İştirak",
    companyId: "bbva-spark-es-germany",
    country: "DE",
    city: "Buenos Aires",
    campus: "Buenos Aires Mobility Lab",
    department: "Mobility Lab",
    authorId: "p14",
    time: "2 gün önce",
    priority: "İştirak"
  },
  {
    id: "ann-21",
    title: "BBVA CIB US Argentina Hamburg Terminal Capacity Expansion",
    body: "New bulk silo installations are complete. Looking for high-throughput dry packaging system vendor recommendations.",
    scope: "İştirak",
    companyId: "bbva-cib-us-germany",
    country: "DE",
    city: "Hamburg",
    campus: "Hamburg Terminal",
    department: "Logistics",
    authorId: "p13",
    time: "Bugün 11:30",
    priority: "İştirak"
  },
  {
    id: "ann-40",
    title: "BBVA CIB US Argentina Digital Logistics System Upgrade",
    body: "Integrating SAP logistics module with Hamburg port terminal scheduler to automate customs clearance documentation.",
    scope: "İştirak",
    companyId: "bbva-cib-us-germany",
    country: "DE",
    city: "Hamburg",
    campus: "Hamburg Terminal",
    department: "Logistics",
    authorId: "p13",
    time: "Dün 16:15",
    priority: "İştirak"
  },
  {
    id: "ann-41",
    title: "BBVA Spark España Argentina Autonomous Suburban Shuttle Track",
    body: "Testing level-4 self-driving buses on designated Buenos Aires lab courses. Submit sensor fusion algorithm ideas.",
    scope: "İştirak",
    companyId: "bbva-spark-es-germany",
    country: "DE",
    city: "Buenos Aires",
    campus: "Buenos Aires Mobility Lab",
    department: "Mobility Lab",
    authorId: "p14",
    time: "Dün 10:00",
    priority: "İştirak"
  },

  // Spain (ES)
  {
    id: "ann-6",
    title: "Buñol plant solar micro-grid integration",
    body: "BBVA CIB US Spain is collecting technical designs for integration of solar arrays to feed white cement rotary kilns.",
    scope: "İştirak",
    companyId: "bbva-cib-us-spain",
    country: "ES",
    city: "Buñol",
    campus: "Buñol Plant",
    department: "Production",
    authorId: "p15",
    time: "Bugün 11:30",
    priority: "İştirak"
  },
  {
    id: "ann-22",
    title: "Madrid Hub Sustainable Cement Workshop",
    body: "Join our R&D meeting next week regarding alternative fuel feeds. Registration is open to all Spanish regional teams.",
    scope: "İştirak",
    companyId: "bbva-cib-us-spain",
    country: "ES",
    city: "Madrid",
    campus: "Madrid Hub",
    department: "R&D",
    authorId: "p16",
    time: "Dün 14:00",
    priority: "İştirak"
  },
  {
    id: "ann-42",
    title: "BBVA CIB US Spain Buñol Alternative Fuel Licensing",
    body: "Approved by local government to substitute 50% of kiln fuel with non-hazardous waste wood. Submit feed logic plans.",
    scope: "İştirak",
    companyId: "bbva-cib-us-spain",
    country: "ES",
    city: "Buñol",
    campus: "Buñol Plant",
    department: "Production",
    authorId: "p15",
    time: "Bugün 14:15",
    priority: "İştirak"
  },
  {
    id: "ann-43",
    title: "BBVA CIB US Spain Digital White Cement Catalog",
    body: "Launching our interactive digital spec sheets for architects and contractors across Western Europe. Feedbacks are welcome.",
    scope: "İştirak",
    companyId: "bbva-cib-us-spain",
    country: "ES",
    city: "Madrid",
    campus: "Madrid Hub",
    department: "R&D",
    authorId: "p16",
    time: "Dün 15:30",
    priority: "İştirak"
  }
];

const initialMessageSpaces = [
  {
    id: "msg-holding",
    name: "Sabancı Global Flow",
    description: "Tüm grup şirketleri inovasyon temsilcileri akışı.",
    companyId: "bbva-group",
    scope: "Holding geneli",
    members: ["p01", "p02", "p05", "p06", "p10", "p15"],
    messages: [
      { userId: "p02", body: "Bu hafta Garanti BBVA Teknoloji olarak yapay zeka analiz motorunu çoklu dil desteğine uyarladık. Almanca ve İspanyolca fikirler de artık otomatik puanlanabiliyor.", time: "09:22" },
      { userId: "p01", body: "Harika! Garanti BBVA sürdürülebilirlik fonlama fikrini de borsa tahtasına aldık, BBVA Coin bakiyelerinizi kontrol edin.", time: "09:27" },
      { userId: "p10", body: "Texas solar farm energy storage designs are uploaded. Ready for group strategy review.", time: "10:14" },
      { userId: "p15", body: "We started carbon capture trials in Buñol. Cement clinker performance remains excellent.", time: "11:35" }
    ]
  },
  {
    id: "msg-garanti-bbva",
    name: "Garanti BBVA FinTech Room",
    description: "Garanti BBVA açık bankacılık ve finansal teknolojiler grubu.",
    companyId: "garanti-bbva",
    scope: "İştirak",
    members: ["p02", "p05", "u3", "u4", "u5"],
    messages: [
      { userId: "u3", body: "KOBİ'ler için geliştirdiğimiz yeşil finansman API'leri test ortamında stabil çalışıyor. Fikirlerinizi bekliyoruz.", time: "10:05" },
      { userId: "p05", body: "Can Bey, sürdürülebilirlik puan kartı servisini de bu API ile bağlayabiliriz. Entegrasyon dokümanını inceledim.", time: "10:14" },
      { userId: "p02", body: "Yapay zeka analiz modelimiz de KOBİ işlem geçmişini tarayıp karbon emisyon katsayısı üretebiliyor. Garanti BBVA veritabanıyla entegre edebiliriz.", time: "10:30" },
      { userId: "u5", body: "BES tarafındaki tasarruf verilerini de buraya akıtıp bireysel kullanıcılara çevre rozeti dağıtabiliriz.", time: "11:15" }
    ]
  },
  {
    id: "msg-bbva-cib-us",
    name: "BBVA CIB US Green Tech",
    description: "BBVA CIB US sürdürülebilirlik, alternatif yakıt ve karbon emisyonu azaltma grubu.",
    companyId: "bbva-cib-us",
    scope: "İştirak",
    members: ["p03", "p07", "p11", "p13", "p15", "p16"],
    messages: [
      { userId: "p15", body: "We are preparing tests for hydrogen injection in Buñol plant. I hope we can reduce CO2 emissions by another 8%.", time: "11:12" },
      { userId: "p16", body: "Carlos, I uploaded the chemical analysis of the clinker from the preliminary test. The mineral properties remain solid.", time: "11:25" },
      { userId: "p03", body: "Mersin fabrikasından selamlar! Biz de döner fırınlarda atık çamur yakma otomasyon projesinin verilerini sisteme yükledik.", time: "12:00" },
      { userId: "p13", body: "Hamburg terminal stands ready to receive the low-carbon white cement batches from Spain. German clients are asking for ESG metrics.", time: "12:45" },
      { userId: "p11", body: "Houston packing automation will also reduce dust emissions. Ready to trial this month.", time: "13:10" }
    ]
  },
  {
    id: "msg-bbva-colombia",
    name: "BBVA Colombia Material Lab",
    description: "BBVA Colombia kompozit malzemeler ve yeni nesil tekstil geliştirme grubu.",
    companyId: "bbva-colombia",
    scope: "İştirak",
    members: ["p03", "p08", "p12", "u9", "u10"],
    messages: [
      { userId: "p12", body: "We have finalized testing the graphene-infused nylon yarn in Chattanooga. Tensile strength increased by 18%.", time: "14:20" },
      { userId: "p08", body: "Excellent Robert! New York Tech team is interested in testing these fibers for aviation grade composites. Send us the raw data.", time: "14:45" },
      { userId: "p03", body: "İzmit Fabrika Ar-Ge ekibi olarak, geri dönüştürülmüş PET hammaddeli kord bezlerimizin yorulma test sonuçlarını sisteme kaydettik.", time: "15:15" }
    ]
  },
  {
    id: "msg-bbva-spark-es",
    name: "BBVA Spark España Smart Mobility",
    description: "BBVA Spark España elektrikli ve hidrojen otobüs prototip analizleri.",
    companyId: "bbva-spark-es",
    scope: "İştirak",
    members: ["p04", "p14", "u13"],
    messages: [
      { userId: "p14", body: "The hydrogen suburban bus trials in Buenos Aires are starting next Monday. We need to verify tank pressure telemetries.", time: "09:30" },
      { userId: "p04", body: "Dieter, Adana ekibi olarak otobüsün BMS (Batarya Yönetim) yazılımındaki rejeneratif frenleme güncellemesini pushladık. Uzaktan güncelleyebilirsiniz.", time: "10:15" },
      { userId: "u13", body: "Telemetry system is online. We can monitor everything from the Buenos Aires lab console. Let's run the first battery cycle.", time: "10:45" }
    ]
  },
  {
    id: "msg-bbva-spark-mx",
    name: "BBVA Spark México Retail Circle",
    description: "BBVA Spark México mağaza içi deneyim ve omni-channel perakende teknolojileri.",
    companyId: "bbva-spark-mx",
    scope: "İştirak",
    members: ["u1", "u2", "p02"],
    messages: [
      { userId: "u1", body: "Mağaza içi otonom ödeme kiosklarımızın tasarımı tamamlandı. Kadıköy pilot mağazamızda kuruluma başlıyoruz.", time: "13:10" },
      { userId: "u2", body: "BBVA Seguros Colombia olarak biz de kasasız mağaza konseptini inceliyoruz. Lojistik ve etiket entegrasyonunda ortak çalışabiliriz.", time: "13:30" },
      { userId: "p02", body: "Yapay zeka ekibimiz kiosk ekranlarına kişiye özel ürün öneri motoru entegre edebilir. API bağlantılarını hazırladık.", time: "14:05" }
    ]
  },
  {
    id: "msg-dx",
    name: "Garanti BBVA Teknoloji AI & Analytics Hub",
    description: "Garanti BBVA Teknoloji yapay zekâ, GenAI ve büyük veri analitiği hub'ı.",
    companyId: "garanti-bbva-teknoloji",
    scope: "İştirak",
    members: ["p02", "p05", "u3", "u4"],
    messages: [
      { userId: "p02", body: "Borsa verilerindeki dalgalanmaları ve AI sinyal skorlarını tahminleyen yeni bir GenAI asistan modeli üzerinde çalışıyoruz.", time: "15:12" },
      { userId: "u4", body: "Harika Mert. Bu modeli holding genel kurulunda strateji sunumuna dahil edelim. Canlı demo yapabilir miyiz?", time: "15:30" },
      { userId: "p02", body: "Tabii Kerem Bey, arayüze özel bir widget ekledik. Canlı veri özetleme fonksiyonu şu an aktif.", time: "15:45" }
    ]
  },
  {
    id: "msg-renewables",
    name: "Renewables Clean Energy",
    description: "Sabancı Renewables temiz enerji ve batarya optimizasyonu grubu.",
    companyId: "bbva-cib-us",
    scope: "Holding geneli",
    members: ["p06", "p10", "u7", "u8"],
    messages: [
      { userId: "p10", body: "We are installing utility-scale battery dispatch logic in our Austin solar farm. This will trade power during peak hours.", time: "16:22" },
      { userId: "p06", body: "Michael, UK wind grids are also implementing similar battery storage dispatch. We should share the pricing models.", time: "16:45" },
      { userId: "u8", body: "Agreed. I am compiling the regulatory framework for energy trading in both markets to build a unified algorithm.", time: "17:15" }
    ]
  },
  {
    id: "msg-insurance",
    name: "InsurTech Circle",
    description: "BBVA Seguros México ve Garanti BBVA Emeklilik yeni nesil dijital sigortacılık fikir odası.",
    companyId: "bbva-seguros-mx",
    scope: "İştirak",
    members: ["p05", "u5", "u11"],
    messages: [
      { userId: "p05", body: "Yapay zeka tabanlı oto hasar tespiti pilot projemiz hasar ödeme sürelerini %80 kısalttı.", time: "11:20" },
      { userId: "u5", body: "Bu teknolojiyi Garanti BBVA Emeklilik'nın hayat sigortası sağlık beyanı doğrulama süreçlerine de uyarlayabilir miyiz?", time: "11:45" },
      { userId: "u11", body: "US insurtech trends show image based claim validation is rising fast. We should coordinate a joint workshop.", time: "12:15" }
    ]
  },
  {
    id: "msg-holding-hr",
    name: "Sabancı Global HR & Talent",
    description: "Holding geneli çalışan deneyimi ve yetenek yönetimi grubu.",
    companyId: "bbva-group",
    scope: "Holding geneli",
    members: ["p01", "p09", "u5"],
    messages: [
      { userId: "p01", body: "Altın Yaka inovasyon ödüllerinin kapsamını genişlettik. Tüm ülkelerdeki çalışanlar katılabilecek.", time: "09:30" },
      { userId: "u5", body: "Merve Hanım İK süreç otomasyon raporunu ekledi. Evrak yükü %60 azaldı, ekipler inovasyona daha çok vakit ayırabiliyor.", time: "09:45" },
      { userId: "p01", body: "Harika. Genç yetenek programına gelen çoklu dil başvurularını değerlendirmeye başlıyoruz.", time: "10:12" }
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
  // TR Users
  {
    id: "u1",
    name: "Ayşe Yılmaz",
    email: "ayse.yilmaz@bbva-spark-mx.example",
    employeeId: "SA-10452",
    company: "BBVA Spark México S.A.",
    companyId: "bbva-spark-mx",
    department: "Müşteri Deneyimi",
    location: "Torre BBVA México",
    city: "İstanbul",
    region: "Marmara",
    role: "Kategori Uzmanı",
    roleKey: "employee",
    seniority: "Uzman",
    isManager: false,
    isAdmin: false,
    voteCreditBalance: 17,
    monthlyVoteCredit: 30,
    badges: ["İlk Fikir", "Aktif Katılımcı", "AI ile Güçlendirilmiş Fikir"],
    country: "TR"
  },
  {
    id: "u2",
    name: "Mehmet Demir",
    email: "mehmet.demir@bbva-seguros-co.example",
    employeeId: "SA-88312",
    company: "BBVA Seguros Colombia S.A.",
    companyId: "bbva-seguros-co",
    department: "Mağaza Operasyonları",
    location: "Maltepe Depo",
    city: "İstanbul",
    region: "Marmara",
    role: "Lojistik Saha Görevlisi",
    roleKey: "field",
    seniority: "Saha çalışanı",
    isManager: false,
    isAdmin: false,
    voteCreditBalance: 21,
    monthlyVoteCredit: 30,
    badges: ["İlk Fikir", "Müşteri Deneyimi Katkısı"],
    country: "TR"
  },
  {
    id: "u3",
    name: "Can Koç",
    email: "can.koc@garanti-bbva.example",
    employeeId: "SA-22018",
    company: "Garanti Bankası A.Ş. (Garanti BBVA)",
    companyId: "garanti-bbva",
    department: "Dijital Bankacılık",
    location: "Garanti BBVA Genel Müdürlük",
    city: "İstanbul",
    region: "Marmara",
    role: "İnovasyon Yöneticisi",
    roleKey: "manager",
    seniority: "Yönetici",
    isManager: true,
    isAdmin: false,
    voteCreditBalance: 24,
    monthlyVoteCredit: 40,
    badges: ["Ekipler Arası Köprü", "Pilot Proje Katılımcısı"],
    country: "TR",
    supportedIdeas: ["idea-1", "idea-2", "idea-3"]
  },
  {
    id: "u4",
    name: "Kerem Yıldız",
    email: "kerem.yildiz@sabanci.example",
    employeeId: "SA-01004",
    company: "Banco Bilbao Vizcaya Argentaria S.A.",
    companyId: "bbva-group",
    department: "Strateji",
    location: "Ciudad BBVA",
    city: "İstanbul",
    region: "Marmara",
    role: "Holding Yöneticisi",
    roleKey: "executive",
    seniority: "C-level",
    isManager: true,
    isAdmin: true,
    voteCreditBalance: 38,
    monthlyVoteCredit: 50,
    badges: ["İnovasyon Sprinti Kazananı", "Maliyet Azaltma Katkısı", "En Faydalı Yorumcu"],
    country: "TR"
  },
  {
    id: "u5",
    name: "Merve Aydın",
    email: "merve.aydin@garanti-bbva-emeklilik.example",
    employeeId: "SA-55102",
    company: "Garanti BBVA Emeklilik ve Hayat A.Ş.",
    companyId: "garanti-bbva-emeklilik",
    department: "İnsan Kaynakları",
    location: "Garanti BBVA Emeklilik Genel Müdürlük",
    city: "İstanbul",
    region: "Marmara",
    role: "İK Yöneticisi",
    roleKey: "hr",
    seniority: "Kıdemli uzman",
    isManager: true,
    isAdmin: false,
    voteCreditBalance: 29,
    monthlyVoteCredit: 35,
    badges: ["Çalışan Deneyimi Katkısı", "Aktif Katılımcı"],
    country: "TR"
  },
  // GB Users
  {
    id: "u6",
    name: "Sarah Jenkins",
    email: "sarah.jenkins@bbva-cib-us.example",
    employeeId: "SA-UK-021",
    company: "BBVA CIB US UK Ltd.",
    companyId: "bbva-cib-us-uk",
    department: "Sales",
    location: "New York HQ",
    city: "New York",
    region: "New York",
    role: "Sales Executive",
    roleKey: "employee",
    seniority: "Expert",
    isManager: false,
    isAdmin: false,
    voteCreditBalance: 20,
    monthlyVoteCredit: 30,
    badges: ["UK Pioneer"],
    country: "GB"
  },
  {
    id: "u7",
    name: "John Sterling",
    email: "john.sterling@sabanci.example",
    employeeId: "SA-UK-001",
    company: "Sabancı Renewables UK Ltd.",
    companyId: "bbva-cib-us",
    department: "Operations",
    location: "New York HQ",
    city: "New York",
    region: "New York",
    role: "Clean Energy Mgr",
    roleKey: "manager",
    seniority: "Manager",
    isManager: true,
    isAdmin: false,
    voteCreditBalance: 30,
    monthlyVoteCredit: 40,
    badges: ["Green Pioneer"],
    country: "GB"
  },
  {
    id: "u8",
    name: "Oliver Watson",
    email: "oliver.watson@sabanci.example",
    employeeId: "SA-UK-002",
    company: "Banco Bilbao Vizcaya Argentaria S.A.",
    companyId: "bbva-group",
    department: "Strategy",
    location: "New York HQ",
    city: "New York",
    region: "New York",
    role: "Global Strategist",
    roleKey: "executive",
    seniority: "C-level",
    isManager: true,
    isAdmin: true,
    voteCreditBalance: 45,
    monthlyVoteCredit: 50,
    badges: ["Global Advisor"],
    country: "GB"
  },
  // US Users
  {
    id: "u9",
    name: "Emily Rose",
    email: "emily.rose@bbva-cib-us.example",
    employeeId: "SA-US-015",
    company: "BBVA CIB US Americas Inc.",
    companyId: "bbva-cib-us-americas",
    department: "Operations",
    location: "Houston Terminal",
    city: "Houston",
    region: "Texas",
    role: "Terminal Supervisor",
    roleKey: "field",
    seniority: "Lead",
    isManager: false,
    isAdmin: false,
    voteCreditBalance: 18,
    monthlyVoteCredit: 30,
    badges: ["US Pioneer"],
    country: "US"
  },
  {
    id: "u10",
    name: "Michael Vance",
    email: "michael.vance@sabanci.example",
    employeeId: "SA-US-001",
    company: "Sabancı Climate Technologies Inc.",
    companyId: "bbva-mexico",
    department: "Energy Storage",
    location: "Austin HQ",
    city: "Austin",
    region: "Texas",
    role: "Storage Director",
    roleKey: "manager",
    seniority: "Director",
    isManager: true,
    isAdmin: false,
    voteCreditBalance: 35,
    monthlyVoteCredit: 40,
    badges: ["Storage Pioneer"],
    country: "US"
  },
  {
    id: "u11",
    name: "Jessica Taylor",
    email: "jessica.taylor@sabanci.example",
    employeeId: "SA-US-002",
    company: "Banco Bilbao Vizcaya Argentaria S.A.",
    companyId: "bbva-group",
    department: "Strategy",
    location: "New York Office",
    city: "New York",
    region: "New York",
    role: "US Market Executive",
    roleKey: "executive",
    seniority: "C-level",
    isManager: true,
    isAdmin: true,
    voteCreditBalance: 40,
    monthlyVoteCredit: 50,
    badges: ["US Strategist"],
    country: "US"
  },
  // DE Users
  {
    id: "u12",
    name: "Hans Müller",
    email: "hans.mueller@bbva-cib-us.example",
    employeeId: "SA-DE-012",
    company: "BBVA CIB US Argentina GmbH",
    companyId: "bbva-cib-us-germany",
    department: "Logistics",
    location: "Hamburg Terminal",
    city: "Hamburg",
    region: "Hamburg",
    role: "Logistics Coordinator",
    roleKey: "employee",
    seniority: "Senior Expert",
    isManager: false,
    isAdmin: false,
    voteCreditBalance: 22,
    monthlyVoteCredit: 30,
    badges: ["DE Log-Expert"],
    country: "DE"
  },
  {
    id: "u13",
    name: "Dieter Schmidt",
    email: "dieter.schmidt@bbva-spark-es.example",
    employeeId: "SA-DE-001",
    company: "BBVA Spark España Argentina GmbH",
    companyId: "bbva-spark-es-germany",
    department: "Mobility Lab",
    location: "Buenos Aires Mobility Lab",
    city: "Buenos Aires",
    region: "Bayern",
    role: "Operations Manager",
    roleKey: "manager",
    seniority: "Manager",
    isManager: true,
    isAdmin: false,
    voteCreditBalance: 28,
    monthlyVoteCredit: 40,
    badges: ["Mobility Pioneer"],
    country: "DE"
  },
  // ES Users
  {
    id: "u14",
    name: "Carlos Ruiz",
    email: "carlos.ruiz@bbva-cib-us.example",
    employeeId: "SA-ES-001",
    company: "BBVA CIB US Buñol Cementos S.L.U.",
    companyId: "bbva-cib-us-spain",
    department: "Production",
    location: "Buñol Plant",
    city: "Buñol",
    region: "Valencia",
    role: "Buñol Plant Manager",
    roleKey: "manager",
    seniority: "Manager",
    isManager: true,
    isAdmin: false,
    voteCreditBalance: 32,
    monthlyVoteCredit: 40,
    badges: ["Cement Pioneer"],
    country: "ES"
  },
  {
    id: "u15",
    name: "Maria Ortega",
    email: "maria.ortega@bbva-cib-us.example",
    employeeId: "SA-ES-010",
    company: "BBVA CIB US Buñol Cementos S.L.U.",
    companyId: "bbva-cib-us-spain",
    department: "R&D",
    location: "Buñol Plant",
    city: "Buñol",
    region: "Valencia",
    role: "Sustainability Lead Analyst",
    roleKey: "employee",
    seniority: "Senior Analyst",
    isManager: false,
    isAdmin: false,
    voteCreditBalance: 20,
    monthlyVoteCredit: 30,
    badges: ["ESG Expert"],
    country: "ES"
  }
];

demoUsers.forEach(user => {
  user.avatarUrl = profilePhotos[user.id];
});

const initialIdeas = [
  // TR Ideas (Turkish)
  {
    id: "idea-1",
    title: "Garanti BBVA Mobil kullanıcıları için AI destekli yatırım danışmanı",
    summary: "Müşterilerin harcama alışkanlıkları ve risk eğilimlerine göre fon ve hisse sepeti öneren yapay zeka entegrasyonu.",
    problem: "Bireysel yatırımcılar karmaşık piyasa verileri yüzünden yatırım kararı almakta zorlanıyor.",
    solution: "Mobil şubeye entegre, portföy dağılımını otomatik yapıp öneriler sunan bir AI asistan modülü.",
    type: "Yeni ürün / hizmet",
    company: "Garanti Bankası A.Ş. (Garanti BBVA)",
    companyId: "garanti-bbva",
    department: "Dijital Bankacılık",
    location: "Garanti BBVA Genel Müdürlük",
    city: "İstanbul",
    authorId: "u3",
    authorLabel: "Can Koç",
    anonymity: "İsmimle paylaş",
    visibility: "Holding geneli",
    status: "pilot",
    estimatedImpact: "Yüksek",
    estimatedCost: "Orta",
    implementationTime: "3 ay",
    successMetric: "Aktif yatırımcı sayısı ve ortalama bakiye artışı",
    riskNotes: "Finansal regülasyonlar ve yatırım tavsiyesi sınırları net çizilmeli.",
    communityScore: 89,
    strategicScore: 92,
    aiScore: 94,
    credits: 250,
    supporters: 45,
    marketChange: 5.2,
    country: "TR",
    comments: [
      { user: "Kerem Yıldız", body: "Çok değerli bir çalışma, Garanti BBVA Lab ekibiyle test etmeye başlayalım.", manager: true },
      { user: "Ayşe Yılmaz", body: "Kullanıcı deneyimi akışını basitleştirmek kritik olacaktır.", manager: false }
    ],
    tags: ["FinTech", "AI", "Garanti BBVA", "Yatırım"],
    createdAt: "2026-06-10",
    translations: {
          "tr": {
                "title": "Garanti BBVA Mobil kullanıcıları için AI destekli yatırım danışmanı",
                "summary": "Müşterilerin harcama alışkanlıkları ve risk eğilimlerine göre fon ve hisse sepeti öneren yapay zeka entegrasyonu.",
                "problem": "Bireysel yatırımcılar karmaşık piyasa verileri yüzünden yatırım kararı almakta zorlanıyor.",
                "solution": "Mobil şubeye entegre, portföy dağılımını otomatik yapıp öneriler sunan bir AI asistan modülü."
          },
          "en": {
                "title": "AI-powered investment advisor for Garanti BBVA Mobile users",
                "summary": "Artificial intelligence integration that suggests fund and stock portfolios based on customers' spending habits and risk tendencies.",
                "problem": "Retail investors struggle to make investment decisions due to complex market data.",
                "solution": "An AI assistant module integrated into the mobile branch, automating portfolio allocation and providing recommendations."
          },
          "de": {
                "title": "KI-gestützter Anlageberater für Garanti BBVA Mobil-Nutzer",
                "summary": "KI-Integration, die Fonds- und Aktienportfolios basierend auf den Ausgabegewohnheiten und Risikoneigungen der Kunden vorschlägt.",
                "problem": "Kleinanleger tun sich aufgrund komplexer Marktdaten schwer, Anlageentscheidungen zu treffen.",
                "solution": "Ein in die mobile Filiale integriertes KI-Assistentenmodul, das die Portfolioallokation automatisiert und Empfehlungen bereitstellt."
          },
          "es": {
                "title": "Asesor de inversión impulsado por IA para usuarios de Garanti BBVA Móvil",
                "summary": "Integración de inteligencia artificial que sugiere carteras de fondos y acciones según los hábitos de gasto y las tendencias de riesgo de los clientes.",
                "problem": "Los inversores minoristas tienen dificultades para tomar decisiones de inversión debido a la complejidad de los datos del mercado.",
                "solution": "Un módulo asistente de IA integrado en la sucursal móvil, que automatiza la asignación de carteras y ofrece recomendaciones."
          }
    }
  },
  {
    id: "idea-2",
    title: "BBVA Spark México mağazalarında akıllı tedarik ve dinamik raf ataması",
    summary: "Gebze lojistik merkezi verileriyle mağaza stoklarını anlık eşleyip en çok satan ürünleri öne çıkaran akıllı raf sistemi.",
    problem: "Bazı ürünler rafta uzun süre kalırken popüler teknolojik ürünlerin stoku hızlı bitiyor ve satış kaçıyor.",
    solution: "Satış hızı ve lojistik transit sürelerini tahminleyen yapay zeka destekli bir mağaza stok paneli.",
    type: "Süreç otomasyonu",
    company: "BBVA Spark México S.A.",
    companyId: "bbva-spark-mx",
    department: "Tedarik Zinciri",
    location: "Torre BBVA México",
    city: "İstanbul",
    authorId: "u1",
    authorLabel: "Ayşe Yılmaz",
    anonymity: "İsmimle paylaş",
    visibility: "İştirak içi",
    status: "review",
    estimatedImpact: "Yüksek",
    estimatedCost: "Düşük",
    implementationTime: "2 ay",
    successMetric: "Stoksuz kalma oranı ve ciro artışı",
    riskNotes: "ERP entegrasyonu gecikebilir.",
    communityScore: 78,
    strategicScore: 82,
    aiScore: 86,
    credits: 110,
    supporters: 28,
    marketChange: 3.8,
    country: "TR",
    comments: [
      { user: "Can Koç", body: "Gebze deposundaki otomasyon sistemleri ile entegre edilirse harika olur.", manager: true }
    ],
    tags: ["Perakende", "Tedarik", "BBVA Spark México", "Akıllı Raf"],
    createdAt: "2026-06-12",
    translations: {
          "tr": {
                "title": "BBVA Spark México mağazalarında akıllı tedarik ve dinamik raf ataması",
                "summary": "Gebze lojistik merkezi verileriyle mağaza stoklarını anlık eşleyip en çok satan ürünleri öne çıkaran akıllı raf sistemi.",
                "problem": "Bazı ürünler rafta uzun süre kalırken popüler teknolojik ürünlerin stoku hızlı bitiyor ve satış kaçıyor.",
                "solution": "Satış hızı ve lojistik transit sürelerini tahminleyen yapay zeka destekli bir mağaza stok paneli."
          },
          "en": {
                "title": "Smart procurement and dynamic shelf allocation in BBVA Spark México stores",
                "summary": "Smart shelf system that instantly matches store stocks with Gebze logistics center data and highlights the best-selling products.",
                "problem": "Some products stay on the shelf for a long time while popular technology products run out of stock quickly, causing lost sales.",
                "solution": "An AI-powered store stock panel that predicts sales speed and logistics transit times."
          },
          "de": {
                "title": "Intelligente Beschaffung und dynamische Regalzuweisung in BBVA Spark México-Filialen",
                "summary": "Intelligentes Regalsystem, das die Filialbestände sofort mit den Daten des Logistikzentrums Gebze abgleicht und Bestseller hervorhebt.",
                "problem": "Einige Produkte bleiben lange im Regal, während beliebte Technologieprodukte schnell ausverkauft sind, was zu Umsatzeinbußen führt.",
                "solution": "Ein KI-gestütztes Filialbestands-Panel, das Verkaufsgeschwindigkeiten und Logistiklaufzeiten vorhersagt."
          },
          "es": {
                "title": "Abastecimiento inteligente y asignación dinámica de estanterías en tiendas BBVA Spark México",
                "summary": "Sistema de estanterías inteligentes que sincroniza al instante el stock de la tienda con el centro logístico de Gebze y destaca los más vendidos.",
                "problem": "Algunos productos permanecen en el estante mucho tiempo, mientras que los tecnológicos populares se agotan rápido, perdiendo ventas.",
                "solution": "Un panel de control de stock impulsado por IA que predice la velocidad de venta y los tiempos de tránsito logístico."
          }
    }
  },
  {
    id: "idea-3",
    title: "BBVA Argentina EV-Lastik: Elektrikli araçlar için optimize edilmiş akıllı lastik sensörü",
    summary: "Ağır batarya yükü taşıyan elektrikli araç lastiklerinin aşınmasını ve hava basıncını anlık izleyen IoT modülü.",
    problem: "Elektrikli araçlarda batarya ağırlığı yüzünden lastikler %30 daha hızlı aşınıyor ve sürüş riski oluşuyor.",
    solution: "Lastik diş derinliğini ve sıcaklığını kablosuz olarak ölçüp araç ekranına ve telefona uyarı gönderen sensör.",
    type: "Yeni ürün / hizmet",
    company: "BBVA Argentina S.A.",
    companyId: "bbva-argentina",
    department: "Ar-Ge",
    location: "İzmit Fabrika",
    city: "Kocaeli",
    authorId: "u2",
    authorLabel: "Mehmet Demir",
    anonymity: "Anonim Mağaza Çalışanı",
    visibility: "Holding geneli",
    status: "new",
    estimatedImpact: "Yüksek",
    estimatedCost: "Yüksek",
    implementationTime: "6 ay",
    successMetric: "Lastik kullanım ömrü artışı, müşteri memnuniyeti",
    riskNotes: "Sensör maliyetleri yüksek olabilir, pazar testi yapılmalı.",
    communityScore: 84,
    strategicScore: 88,
    aiScore: 91,
    credits: 135,
    supporters: 31,
    marketChange: -1.4,
    country: "TR",
    comments: [],
    tags: ["Sanayi", "IoT", "Elektrikli Araç", "BBVA Argentina"],
    createdAt: "2026-06-14",
    translations: {
          "tr": {
                "title": "BBVA Argentina EV-Lastik: Elektrikli araçlar için optimize edilmiş akıllı lastik sensörü",
                "summary": "Ağır batarya yükü taşıyan elektrikli araç lastiklerinin aşınmasını ve hava basıncını anlık izleyen IoT modülü.",
                "problem": "Elektrikli araçlarda batarya ağırlığı yüzünden lastikler %30 daha hızlı aşınıyor ve sürüş riski oluşuyor.",
                "solution": "Lastik diş derinliğini ve sıcaklığını kablosuz olarak ölçüp araç ekranına ve telefona uyarı gönderen sensör."
          },
          "en": {
                "title": "BBVA Argentina EV-Tyre: Optimized smart tyre sensor for electric vehicles",
                "summary": "An IoT module that instantly monitors wear and air pressure of electric vehicle tyres carrying heavy battery loads.",
                "problem": "Electric vehicle tyres wear out 30% faster due to battery weight, causing driving risks.",
                "solution": "A wireless sensor that measures tyre tread depth and temperature, sending alerts to vehicle screen and phone."
          },
          "de": {
                "title": "BBVA Argentina EV-Reifen: Optimierter smarter Reifensensor für Elektrofahrzeuge",
                "summary": "Ein IoT-Modul, das den Verschleiß und den Luftdruck von E-Fahrzeugreifen unter schwerer Batterielast sofort überwacht.",
                "problem": "Reifen von Elektrofahrzeugen nutzen sich aufgrund des Batteriegewichts 30 % schneller ab, was zu Fahrrisiken führt.",
                "solution": "Ein kabelloser Sensor, der Profiltiefe und Temperatur der Reifen misst und Warnungen an den Fahrzeugbildschirm und das Telefon sendet."
          },
          "es": {
                "title": "BBVA Argentina EV-Neumático: Sensor inteligente de neumáticos optimizado para vehículos eléctricos",
                "summary": "Un módulo IoT que monitorea al instante el desgaste y la presión de aire de neumáticos en vehículos eléctricos con pesadas baterías.",
                "problem": "Los neumáticos de vehículos eléctricos se desgastan un 30% más rápido por el peso de la batería, generando riesgos.",
                "solution": "Un sensor inalámbrico que mide la profundidad de rodadura y la temperatura, enviando alertas a la pantalla del auto y al móvil."
          }
    }
  },
  
  // GB Ideas (English)
  {
    id: "idea-4",
    title: "Off-shore wind forecasting using predictive AI models",
    summary: "Using historical weather and wind turbine telemetry to predict energy output with 95% accuracy for UK grid matching.",
    problem: "Wind variability causes power fluctuation, leading to inefficiencies in matching the UK grid demand.",
    solution: "Implement an AI-based forecast panel in New York HQ to feed real-time generation forecasts.",
    type: "Teknik geliştirme",
    company: "Sabancı Renewables UK Ltd.",
    companyId: "bbva-cib-us",
    department: "Operations",
    location: "New York HQ",
    city: "New York",
    authorId: "u7",
    authorLabel: "John Sterling",
    anonymity: "İsmimle paylaş",
    visibility: "Holding geneli",
    status: "review",
    estimatedImpact: "Yüksek",
    estimatedCost: "Orta",
    implementationTime: "3 months",
    successMetric: "Forecasting accuracy increase and grid penalty reduction",
    riskNotes: "Weather model APIs must be integrated securely.",
    communityScore: 85,
    strategicScore: 90,
    aiScore: 92,
    credits: 180,
    supporters: 42,
    marketChange: 8.1,
    country: "GB",
    comments: [
      { user: "Oliver Watson", body: "Excellent model. Fits our renewable expansion roadmap in the UK.", manager: true }
    ],
    tags: ["Energy", "AI", "Renewables", "Wind Grid"],
    createdAt: "2026-06-11",
    translations: {
          "tr": {
                "title": "Tahminleyici AI modelleri ile deniz üstü rüzgar tahmini",
                "summary": "Amerika Birleşik Devletleri şebeke eşleşmesi için enerji üretimini %95 doğrulukla tahmin etmek amacıyla geçmiş hava durumu ve rüzgar türbini telemetrisini kullanmak.",
                "problem": "Rüzgar değişkenliği güç dalgalanmasına yol açarak Amerika Birleşik Devletleri şebeke talebini karşılamada verimsizlik yaratıyor.",
                "solution": "Gerçek zamanlı üretim tahminlerini beslemek için New York Teknoloji Merkezi'nde yapay zeka tabanlı bir tahmin paneli uygulamak."
          },
          "en": {
                "title": "Off-shore wind forecasting using predictive AI models",
                "summary": "Using historical weather and wind turbine telemetry to predict energy output with 95% accuracy for UK grid matching.",
                "problem": "Wind variability causes power fluctuation, leading to inefficiencies in matching the UK grid demand.",
                "solution": "Implement an AI-based forecast panel in New York HQ to feed real-time generation forecasts."
          },
          "de": {
                "title": "Offshore-Windvorhersage mit prädiktiven KI-Modellen",
                "summary": "Nutzung historischer Wetter- und Windkraftanlagen-Telemetriedaten zur Vorhersage der Energieerzeugung mit 95 % Genauigkeit für den britischen Netzabgleich.",
                "problem": "Windvariabilität führt zu Leistungsschwankungen und damit zu Ineffizienzen bei der Deckung des britischen Netzbedarfs.",
                "solution": "Implementierung eines KI-basierten Vorhersage-Panels im New York HQ zur Bereitstellung von Echtzeit-Erzeugungsprognosen."
          },
          "es": {
                "title": "Predicción de viento marino mediante modelos predictivos de IA",
                "summary": "Uso de datos históricos del clima y telemetría de turbinas para predecir la producción de energía con un 95% de precisión para la red del Reino Unido.",
                "problem": "La variabilidad del viento causa fluctuaciones de energía, dificultando el ajuste a la demanda eléctrica del Reino Unido.",
                "solution": "Implementar un panel de pronóstico basado en IA en el New York HQ para enviar previsiones de generación en tiempo real."
          }
    }
  },
  {
    id: "idea-5",
    title: "New York white cement port bagging speedup through OCR barcode scan",
    summary: "Implement high-speed OCR cameras at New York docks to automatically register incoming BBVA CIB US white cement shipments.",
    problem: "Manual manifest entries at port warehouse cause logistic bottlenecks and delay deliveries to UK clients.",
    solution: "Deploy a small OCR camera rig on the crane pathway to scan shipping manifest barcodes automatically.",
    type: "Süreç otomasyonu",
    company: "BBVA CIB US UK Ltd.",
    companyId: "bbva-cib-us-uk",
    department: "Logistics",
    location: "New York White Cement HQ",
    city: "New York",
    authorId: "u6",
    authorLabel: "Sarah Jenkins",
    anonymity: "İsmimle paylaş",
    visibility: "İştirak içi",
    status: "pilot",
    estimatedImpact: "Yüksek",
    estimatedCost: "Düşük",
    implementationTime: "1 month",
    successMetric: "Unloading duration reduction by 25%",
    riskNotes: "Camera hardware must withstand severe UK weather.",
    communityScore: 82,
    strategicScore: 85,
    aiScore: 88,
    credits: 145,
    supporters: 35,
    marketChange: 2.6,
    country: "GB",
    comments: [],
    tags: ["Logistics", "Automation", "Cement", "OCR"],
    createdAt: "2026-06-13",
    translations: {
          "tr": {
                "title": "OCR barkod tarama ile New York beyaz çimento limanı torbalama hızlandırması",
                "summary": "Gelen BBVA CIB US beyaz çimento sevkiyatlarını otomatik olarak kaydetmek için New York limanlarında yüksek hızlı OCR kameraları uygulamak.",
                "problem": "Liman deposundaki manuel manifesto girişleri lojistik darboğazlara neden oluyor ve Amerika Birleşik Devletleri müşterilerine teslimatları geciktiriyor.",
                "solution": "Sevkiyat manifestosu barkodlarını otomatik taramak için vinç yolu üzerine küçük bir OCR kamera sistemi yerleştirmek."
          },
          "en": {
                "title": "New York white cement port bagging speedup through OCR barcode scan",
                "summary": "Implement high-speed OCR cameras at New York docks to automatically register incoming BBVA CIB US white cement shipments.",
                "problem": "Manual manifest entries at port warehouse cause logistic bottlenecks and delay deliveries to UK clients.",
                "solution": "Deploy a small OCR camera rig on the crane pathway to scan shipping manifest barcodes automatically."
          },
          "de": {
                "title": "Beschleunigung der Absackung im New Yorker Weißzementhafen durch OCR-Barcodescan",
                "summary": "Implementierung von Hochgeschwindigkeits-OCR-Kameras in den New Yorker Docks zur automatischen Erfassung eingehender BBVA CIB US-Weißzementlieferungen.",
                "problem": "Manuelle Manifesteinträge im Hafenschuppen führen zu logistischen Engpässen und verzögern Lieferungen an Kunden in UK.",
                "solution": "Einsatz eines kleinen OCR-Kamerasystems auf dem Kranweg zum automatischen Scannen von Frachtbrief-Barcodes."
          },
          "es": {
                "title": "Aceleración del ensacado de cemento blanco en el puerto de Londres mediante OCR",
                "summary": "Implementar cámaras OCR de alta velocidad en los muelles de Londres para registrar automáticamente los envíos de cemento blanco de BBVA CIB US.",
                "problem": "Los registros manuales de manifiestos en el almacén portuario causan cuellos de botella y demoras a clientes del Reino Unido.",
                "solution": "Instalar un pequeño soporte de cámara OCR en la vía de la grúa para escanear manifiestos de embarque automáticamente."
          }
    }
  },

  // US Ideas (English)
  {
    id: "idea-6",
    title: "Texas solar farm utility-scale battery management system (BMS)",
    summary: "A smart software layer to dynamically charge and discharge lithium iron phosphate battery packs during peak pricing.",
    problem: "Solar energy generated during midday is sold at low rates, while evening demand pricing spikes.",
    solution: "Install an AI battery dispatch controller that automatically releases stored energy during grid peak hours.",
    type: "Süreç otomasyonu",
    company: "Sabancı Climate Technologies Inc.",
    companyId: "bbva-mexico",
    department: "Energy Storage",
    location: "Texas Solar Farm Office",
    city: "Houston",
    authorId: "u10",
    authorLabel: "Michael Vance",
    anonymity: "İsmimle paylaş",
    visibility: "Holding geneli",
    status: "pilot",
    estimatedImpact: "Yüksek",
    estimatedCost: "Yüksek",
    implementationTime: "4 months",
    successMetric: "Revenue optimization per megawatt-hour",
    riskNotes: "Battery wear cycle must be balanced with price arbitrage profit.",
    communityScore: 91,
    strategicScore: 95,
    aiScore: 93,
    credits: 310,
    supporters: 55,
    marketChange: -2.9,
    country: "US",
    comments: [
      { user: "Jessica Taylor", body: "This will solidify Sabanci Renewables position in Texas.", manager: true }
    ],
    tags: ["Solar", "BMS", "Climate", "Battery"],
    createdAt: "2026-06-14",
    translations: {
          "tr": {
                "title": "Texas güneş enerjisi çiftliği şebeke ölçeğinde batarya yönetim sistemi (BMS)",
                "summary": "Fiyat zirvelerinde lityum demir fosfat batarya paketlerini dinamik olarak dolduran ve boşaltan akıllı bir yazılım katmanı.",
                "problem": "Gün ortasında üretilen güneş enerjisi düşük fiyatlardan satılırken, akşam saatlerinde talep fiyatları zirveye çıkıyor.",
                "solution": "Şebeke zirve saatlerinde depolanan enerjiyi otomatik olarak salan AI batarya sevk kontrolörü kurmak."
          },
          "en": {
                "title": "Texas solar farm utility-scale battery management system (BMS)",
                "summary": "A smart software layer to dynamically charge and discharge lithium iron phosphate battery packs during peak pricing.",
                "problem": "Solar energy generated during midday is sold at low rates, while evening demand pricing spikes.",
                "solution": "Install an AI battery dispatch controller that automatically releases stored energy during grid peak hours."
          },
          "de": {
                "title": "Großbatteriespeicher-Managementsystem (BMS) für Solarparks in Texas",
                "summary": "Eine intelligente Softwareebene zur dynamischen Ladung und Entladung von Lithium-Eisenphosphat-Batteriepacks bei Spitzenpreisen.",
                "problem": "Mittags erzeugter Solarstrom wird zu niedrigen Preisen verkauft, während die Preise abends bei Nachfragespitzen in die Höhe schnellen.",
                "solution": "Installation einer KI-gestützten Batterie-Dispatch-Steuerung, die gespeicherte Energie in Spitzenzeiten automatisch freigibt."
          },
          "es": {
                "title": "Sistema de gestión de baterías (BMS) a gran escala para parque solar de Texas",
                "summary": "Una capa de software inteligente para cargar y descargar dinámicamente paquetes de baterías de fosfato de hierro y litio en horas pico.",
                "problem": "La energía solar generada al mediodía se vende a tarifas bajas, mientras que el precio de la demanda nocturna se dispara.",
                "solution": "Instalar un controlador de distribución de baterías con IA que libere energía almacenada durante horas pico de red."
          }
    }
  },
  {
    id: "idea-7",
    title: "Houston terminal automated dry mortar packing line",
    summary: "Add a high-speed automatic bagging line at Houston dock warehouse to repack bulk BBVA CIB US cement into US standard bags.",
    problem: "Bulk cement shipping limits distribution to small US contractors who demand standard palletized bags.",
    solution: "Deploy an automated bagging machine with robotic pallet arms at the Houston terminal site.",
    type: "Operasyonel iyileştirme",
    company: "BBVA CIB US Americas Inc.",
    companyId: "bbva-cib-us-americas",
    department: "Operations",
    location: "Houston Terminal",
    city: "Houston",
    authorId: "u9",
    authorLabel: "Emily Rose",
    anonymity: "İsmimle paylaş",
    visibility: "İştirak içi",
    status: "new",
    estimatedImpact: "Yüksek",
    estimatedCost: "Yüksek",
    implementationTime: "5 months",
    successMetric: "Palletized bagging throughput per hour",
    riskNotes: "Mechanical hardware requires local parts supplier agreements.",
    communityScore: 79,
    strategicScore: 84,
    aiScore: 81,
    credits: 95,
    supporters: 22,
    marketChange: 6.3,
    country: "US",
    comments: [],
    tags: ["Cement", "Houston", "Automation", "Logistics"],
    createdAt: "2026-06-15",
    translations: {
          "tr": {
                "title": "Houston terminali otomatik kuru harç paketleme hattı",
                "summary": "Dökme BBVA CIB US çimentosunu ABD standart torbalarına yeniden paketlemek için Houston liman deposuna yüksek hızlı otomatik torbalama hattı eklemek.",
                "problem": "Dökme çimento nakliyesi, paletli standart torbalar talep eden küçük ABD müteahhitlerine dağıtımı sınırlandırıyor.",
                "solution": "Houston terminal sahasına robotik palet kollarına sahip otomatik bir torbalama makinesi kurmak."
          },
          "en": {
                "title": "Houston terminal automated dry mortar packing line",
                "summary": "Add a high-speed automatic bagging line at Houston dock warehouse to repack bulk BBVA CIB US cement into US standard bags.",
                "problem": "Bulk cement shipping limits distribution to small US contractors who demand standard palletized bags.",
                "solution": "Deploy an automated bagging machine with robotic pallet arms at the Houston terminal site."
          },
          "de": {
                "title": "Automatische Trockenmörtel-Verpackungslinie im Houston-Terminal",
                "summary": "Ergänzung einer automatischen Hochgeschwindigkeits-Absacklinie im Lagerhaus der Houstoner Docks zur Umverpackung von BBVA CIB US-Zement.",
                "problem": "Schüttgut-Zementlieferungen schränken den Vertrieb an kleinere US-Bauunternehmen ein, die genormte Palettenware fordern.",
                "solution": "Einsatz einer automatischen Absackmaschine mit Roboterpalettierarmen am Terminalstandort in Houston."
          },
          "es": {
                "title": "Línea automática de envasado de mortero seco en terminal de Houston",
                "summary": "Agregar una línea de ensacado automático de alta velocidad en el almacén de Houston para reenvasar cemento BBVA CIB US a sacos estándar.",
                "problem": "El envío de cemento a granel limita la distribución a contratistas pequeños de EE. UU. que exigen sacos paletizados estándar.",
                "solution": "Desplegar una máquina ensacadora automática con brazos robóticos de paletizado en la terminal de Houston."
          }
    }
  },

  // DE Ideas (English/German)
  {
    id: "idea-8",
    title: "Automatisiertes vertikales Klinkerlager in Buenos Aires",
    summary: "Optimierung des Buenos Aireser Klinkerlagerplatzes durch Installation eines vertikalen automatisierten Lager- und Bereitstellungssystems (ASRS).",
    problem: "Die begrenzte Lagerfläche im Logistikzentrum Buenos Aires schränkt die Weißzementmenge ein, die wir lagern können.",
    solution: "Nutzung der vertikalen Höhe mit einem intelligenten robotischen Liftsystem, das Paletten automatisch stapelt und auslagert.",
    type: "Maliyet azaltma",
    company: "BBVA CIB US Argentina GmbH",
    companyId: "bbva-cib-us-germany",
    department: "Logistics",
    location: "Buenos Aires Sales Hub",
    city: "Buenos Aires",
    authorId: "u12",
    authorLabel: "Hans Müller",
    anonymity: "İsmimle paylaş",
    visibility: "Holding geneli",
    status: "review",
    estimatedImpact: "Yüksek",
    estimatedCost: "Orta",
    implementationTime: "4 months",
    successMetric: "Warehouse storage capacity increase per square meter",
    riskNotes: "Requires building permit from Buenos Aires city council.",
    communityScore: 80,
    strategicScore: 83,
    aiScore: 85,
    credits: 120,
    supporters: 29,
    marketChange: 1.1,
    country: "DE",
    comments: [
      { user: "Dieter Schmidt", body: "Excellent layout. Can serve as a template for other European cities.", manager: true }
    ],
    tags: ["Logistics", "ASRS", "Buenos Aires", "Warehouse"],
    createdAt: "2026-06-12",
    translations: {
          "tr": {
                "title": "Buenos Aires klinker otomatik dikey depolama tesisi",
                "summary": "Dikey otomatik depolama ve boşaltma sistemi (ASRS) kurarak Buenos Aires klinker deposu alanını optimize etmek.",
                "problem": "Buenos Aires lojistik merkezindeki sınırlı depo alanı, tutabileceğimiz beyaz çimento stok hacmini kısıtlıyor.",
                "solution": "Paletleri otomatik olarak üst üste yığan ve geri getiren akıllı bir robotik asansör sistemi ile dikey yüksekliği kullanmak."
          },
          "en": {
                "title": "Buenos Aires clinker automated vertical storage facility",
                "summary": "Optimize Buenos Aires clinker depot space by installing a vertical automated storage and retrieval system (ASRS).",
                "problem": "Limited warehouse footprint in Buenos Aires logistics center limits the white cement stock volume we can hold.",
                "solution": "Utilize vertical height with a smart robotic lift system that stacks and retrieves pallets automatically."
          },
          "de": {
                "title": "Automatisiertes vertikales Klinkerlager in Buenos Aires",
                "summary": "Optimierung des Buenos Aireser Klinkerlagerplatzes durch Installation eines vertikalen automatisierten Lager- und Bereitstellungssystems (ASRS).",
                "problem": "Die begrenzte Lagerfläche im Logistikzentrum Buenos Aires schränkt die Weißzementmenge ein, die wir lagern können.",
                "solution": "Nutzung der vertikalen Höhe mit einem intelligenten robotischen Liftsystem, das Paletten automatisch stapelt und auslagert."
          },
          "es": {
                "title": "Instalación de almacenamiento vertical automatizado de clínker en Múnich",
                "summary": "Optimizar el espacio del depósito de clínker de Múnich instalando un sistema automatizado de almacenamiento y recuperación vertical (ASRS).",
                "problem": "El espacio limitado en el centro logístico de Múnich restringe el volumen de stock de cemento blanco que podemos almacenar.",
                "solution": "Utilizar la altura vertical con un sistema inteligente de elevación robótica que apila y recupera palets automáticamente."
          }
    }
  },

  // ES Ideas (Spanish/English)
  {
    id: "idea-9",
    title: "Piloto de captura y almacenamiento de carbono (CCS) en planta de cemento blanco de Buñol",
    summary: "Integrar un circuito piloto compacto de lavado de aminas de carbono para capturar CO2 directo de las chimeneas de Buñol.",
    problem: "La fabricación de clínker genera una huella de carbono significativa, arriesgando futuras multas ESG de la UE.",
    solution: "Un circuito piloto que captura hasta 10 toneladas de CO2 al día, comprimido para su uso industrial local.",
    type: "Sürdürülebilirlik",
    company: "BBVA CIB US Buñol Cementos S.L.U.",
    companyId: "bbva-cib-us-spain",
    department: "Production",
    location: "Buñol Plant",
    city: "Buñol",
    authorId: "u14",
    authorLabel: "Carlos Ruiz",
    anonymity: "İsmimle paylaş",
    visibility: "Holding geneli",
    status: "pilot",
    estimatedImpact: "Yüksek",
    estimatedCost: "Yüksek",
    implementationTime: "8 months",
    successMetric: "Captured CO2 volume daily and ESG rating improvements",
    riskNotes: "Extremely high initial investment. Government subsidy support is required.",
    communityScore: 93,
    strategicScore: 96,
    aiScore: 95,
    credits: 280,
    supporters: 48,
    marketChange: 4.7,
    country: "ES",
    comments: [
      { user: "Maria Ortega", body: "This will make Buñol the cleanest white cement plant in Spain.", manager: false }
    ],
    tags: ["Carbon Capture", "ESG", "Spain", "Cement", "Sustainability"],
    createdAt: "2026-06-14",
    translations: {
          "tr": {
                "title": "Buñol beyaz çimento fabrikası karbon yakalama ve depolama (CCS) pilotu",
                "summary": "Buñol'daki döner klinker fırını bacalarından doğrudan CO2 yakalamak için kompakt bir karbon amin yıkama pilot döngüsü entegre etmek.",
                "problem": "Klinker üretimi önemli miktarda karbon ayak izi üreterek gelecekte AB ESG cezaları riskini doğuruyor.",
                "solution": "Yerel endüstriyel kullanım için sıkıştırılmış, günlük 10 tona kadar CO2 yakalayan küçük bir amin arıtma pilot döngüsü."
          },
          "en": {
                "title": "Buñol white cement plant carbon capture and storage (CCS) pilot",
                "summary": "Integrate a compact carbon amine scrubbing pilot loop to capture CO2 directly from clinker rotary kiln stacks in Buñol.",
                "problem": "Clinker manufacturing generates significant carbon footprint, risking future EU ESG penalties.",
                "solution": "A small amine scrubbing pilot loop capturing up to 10 tons of CO2 daily, compressed for local industrial use."
          },
          "de": {
                "title": "Pilotprojekt zur CO2-Abscheidung und -Speicherung (CCS) im Weißzementwerk Buñol",
                "summary": "Integration eines kompakten Aminwäsche-Pilotkreislaufs zur CO2-Abscheidung direkt aus den Klinker-Drehrohrofen-Schornsteinen in Buñol.",
                "problem": "Die Klinkerherstellung verursacht erhebliche Treibhausgase, was künftige EU-ESG-Strafen nach sich ziehen kann.",
                "solution": "Ein kleiner Aminwäsche-Pilotkreislauf, der täglich bis zu 10 Tonnen CO2 abscheidet und für die lokale Industrie komprimiert."
          },
          "es": {
                "title": "Piloto de captura y almacenamiento de carbono (CCS) en planta de cemento blanco de Buñol",
                "summary": "Integrar un circuito piloto compacto de lavado de aminas de carbono para capturar CO2 directo de las chimeneas de Buñol.",
                "problem": "La fabricación de clínker genera una huella de carbono significativa, arriesgando futuras multas ESG de la UE.",
                "solution": "Un circuito piloto que captura hasta 10 toneladas de CO2 al día, comprimido para su uso industrial local."
          }
    }
  }
];

const challenges = [
  // TR Challenges
  {
    id: "challenge-ops-wait",
    title: "Garanti BBVA Açık Bankacılık Hackathonu",
    theme: "Müşteri deneyimi",
    sector: "Finans",
    brief: "Kullanıcıların günlük harcamalarını analiz ederek tasarruf önerileri sunan fintech çözümleri.",
    date: "1 Haz - 30 Haz",
    deadline: "12 gün kaldı",
    reward: "75.000 BBVA + Hızlı Inovasyon Bütçesi",
    rewardType: "Terfi + Para",
    sponsor: "Garanti BBVA İnovasyon Lab",
    status: "Aktif",
    ideas: 32,
    participants: 120,
    prizeIcon: "badge-dollar-sign",
    accent: "blue",
    shortlist: ["Pilot bütçesi", "Yönetim sunumu", "Garanti BBVA Lab desteği"],
    country: "TR",
    translations: {
      tr: { title: "Garanti BBVA Açık Bankacılık Hackathonu", brief: "Kullanıcıların günlük harcamalarını analiz ederek tasarruf önerileri sunan fintech çözümleri." },
      en: { title: "Garanti BBVA Open Banking Hackathon", brief: "Fintech solutions that analyze users' daily spending and offer savings suggestions." },
      de: { title: "Garanti BBVA Open-Banking-Hackathon", brief: "Fintech-Lösungen, die die täglichen Ausgaben der Nutzer analysieren und Sparvorschläge liefern." },
      es: { title: "Hackathon de Banca Abierta de Garanti BBVA", brief: "Soluciones fintech que analizan el gasto diario de los usuarios y ofrecen sugerencias de ahorro." }
    }
  },
  {
    id: "challenge-ai-docs",
    title: "BBVA Spark México Çok Kanallı Lojistik Yarışması",
    theme: "Süreç otomasyonu",
    sector: "Perakende",
    brief: "Online siparişlerin mağaza stoklarıyla anlık eşlenip teslimat süresini yarıya indiren lojistik akışları.",
    date: "5 Haz - 5 Tem",
    deadline: "18 gün kaldı",
    reward: "50.000 BBVA + Gebze Lojistik Pilotu",
    rewardType: "Teknoloji Hediye",
    sponsor: "BBVA Spark México Tedarik Zinciri",
    status: "Aktif",
    ideas: 24,
    participants: 90,
    prizeIcon: "laptop",
    accent: "orange",
    shortlist: ["MacBook", "BBVA Spark México Pilot", "Tedarik rozeti"],
    country: "TR",
    translations: {
      tr: { title: "BBVA Spark México Çok Kanallı Lojistik Yarışması", brief: "Online siparişlerin mağaza stoklarıyla anlık eşlenip teslimat süresini yarıya indiren lojistik akışları." },
      en: { title: "BBVA Spark México Omnichannel Logistics Contest", brief: "Logistics flows that match online orders with store stock in real time, cutting delivery time in half." },
      de: { title: "BBVA Spark México Omnichannel-Logistikwettbewerb", brief: "Logistikabläufe, die Online-Bestellungen in Echtzeit mit dem Filiallager abgleichen und die Lieferzeit halbieren." },
      es: { title: "Concurso de Logística Omnicanal de BBVA Spark México", brief: "Flujos logísticos que emparejan pedidos en línea con el stock de tienda en tiempo real, reduciendo el tiempo de entrega a la mitad." }
    }
  },
  // US Challenges
  {
    id: "challenge-green-finance",
    title: "Texas utility battery dispatch optimization",
    theme: "Sürdürülebilirlik",
    sector: "Enerji",
    brief: "Algorithms to optimize charge/discharge schedules of Texas solar batteries based on peak grid prices.",
    date: "10 Jun - 15 Jul",
    deadline: "27 days left",
    reward: "100.000 BBVA + Austin lab pilot project",
    rewardType: "Para",
    sponsor: "Sabancı Climate US",
    status: "Aktif",
    ideas: 15,
    participants: 45,
    prizeIcon: "leaf",
    accent: "emerald",
    shortlist: ["BMS Pilot Fund", "Committee presentation", "ESG Badge"],
    country: "US",
    translations: {
      tr: { title: "Texas elektrik bataryası dağıtım optimizasyonu", brief: "Texas güneş bataryalarının şarj/deşarj planlamasını en yüksek şebeke fiyatlarına göre optimize eden algoritmalar." },
      en: { title: "Texas utility battery dispatch optimization", brief: "Algorithms to optimize charge/discharge schedules of Texas solar batteries based on peak grid prices." },
      de: { title: "Optimierung der Batterieverteilung in Texas", brief: "Algorithmen zur Optimierung der Lade-/Entladepläne von Solarbatterien in Texas basierend auf Spitzenpreisen im Netz." },
      es: { title: "Optimización del despacho de baterías en Texas", brief: "Algoritmos para optimizar los horarios de carga/descarga de las baterías solares de Texas según los precios pico de la red." }
    }
  },
  // GB Challenges
  {
    id: "challenge-renewables-wind",
    title: "UK Wind Output Prediction Contest",
    theme: "Yapay zekâ",
    sector: "Enerji",
    brief: "AI algorithms to predict next-day wind speed and turbine generation outputs in New York grid connections.",
    date: "15 Jun - 25 Jul",
    deadline: "35 days left",
    reward: "60.000 BBVA + New York Tech team support",
    rewardType: "Para + Sertifika",
    sponsor: "Sabancı Renewables UK",
    status: "Aktif",
    ideas: 11,
    participants: 30,
    prizeIcon: "shield-check",
    accent: "blue",
    shortlist: ["API Access", "Predictive Certificate", "UK Pilot"],
    country: "GB",
    translations: {
      tr: { title: "UK Rüzgar Üretim Tahmin Yarışması", brief: "New York şebeke bağlantılarında ertesi gün rüzgar hızını ve türbin üretimini tahmin eden yapay zeka algoritmaları." },
      en: { title: "UK Wind Output Prediction Contest", brief: "AI algorithms to predict next-day wind speed and turbine generation outputs in New York grid connections." },
      de: { title: "UK-Windertrag-Vorhersagewettbewerb", brief: "KI-Algorithmen zur Vorhersage der Windgeschwindigkeit und Turbinenleistung des Folgetages in New Yorker Netzanschlüssen." },
      es: { title: "Concurso de Predicción de Producción Eólica del Reino Unido", brief: "Algoritmos de IA para predecir la velocidad del viento del día siguiente y la producción de turbinas en las conexiones de red de Londres." }
    }
  },
  // DE Challenges
  {
    id: "challenge-de-hydrogen-bus",
    title: "BBVA Spark España Buenos Aires Wasserstoffbus-Reichweiten-Challenge",
    theme: "Sürdürülebilirlik",
    sector: "Otomotiv",
    brief: "Algorithmen zur Vorhersage und Verlängerung der Reichweite von Wasserstoffbussen unter realen Münchner Streckenbedingungen.",
    date: "12 Jun - 20 Jul",
    deadline: "30 days left",
    reward: "80.000 BBVA + Buenos Aires Pilot-Flotte",
    rewardType: "Para + Sertifika",
    sponsor: "BBVA Spark España Mobility DE",
    status: "Aktif",
    ideas: 9,
    participants: 28,
    prizeIcon: "battery-charging",
    accent: "emerald",
    shortlist: ["Pilot-Flotte", "Buenos Aires Lab-Demo", "Mobility Badge"],
    country: "DE",
    translations: {
      tr: { title: "BBVA Spark España Buenos Aires Hidrojen Otobüs Menzil Yarışması", brief: "Buenos Aires'teki gerçek güzergah koşullarında hidrojenli otobüslerin menzilini tahmin eden ve uzatan algoritmalar." },
      en: { title: "BBVA Spark España Buenos Aires Hydrogen Bus Range Challenge", brief: "Algorithms to predict and extend the range of hydrogen buses under real Buenos Aires route conditions." },
      de: { title: "BBVA Spark España Buenos Aires Wasserstoffbus-Reichweiten-Challenge", brief: "Algorithmen zur Vorhersage und Verlängerung der Reichweite von Wasserstoffbussen unter realen Münchner Streckenbedingungen." },
      es: { title: "Desafío de Autonomía de Autobuses de Hidrógeno de BBVA Spark España Múnich", brief: "Algoritmos para predecir y extender la autonomía de los autobuses de hidrógeno en condiciones reales de ruta en Múnich." }
    }
  },
  // ES Challenges
  {
    id: "challenge-es-co2",
    title: "Buñol plant Carbon Neutral Cement Challenge",
    theme: "Sürdürülebilirlik",
    sector: "Sanayi",
    brief: "Innovative methods to capture carbon or use hydrogen inside cement rotary kilns in Buñol plant.",
    date: "20 Jun - 20 Aug",
    deadline: "60 days left",
    reward: "150.000 BBVA + Carbon Capture Pilot",
    rewardType: "Para",
    sponsor: "BBVA CIB US Spain",
    status: "Yakında",
    ideas: 8,
    participants: 25,
    prizeIcon: "flame",
    accent: "purple",
    shortlist: ["Pilot funding", "Valencia HQ demo", "ESG board award"],
    country: "ES",
    translations: {
      tr: { title: "Buñol Tesisi Karbon Nötr Çimento Yarışması", brief: "Buñol tesisindeki döner çimento fırınlarında karbon yakalamak veya hidrojen kullanmak için yenilikçi yöntemler." },
      en: { title: "Buñol plant Carbon Neutral Cement Challenge", brief: "Innovative methods to capture carbon or use hydrogen inside cement rotary kilns in Buñol plant." },
      de: { title: "Kohlenstoffneutrale Zement-Challenge im Werk Buñol", brief: "Innovative Methoden zur Kohlenstoffabscheidung oder Wasserstoffnutzung in Zement-Drehrohröfen im Werk Buñol." },
      es: { title: "Desafío de Cemento Neutro en Carbono de la Planta de Buñol", brief: "Métodos innovadores para capturar carbono o usar hidrógeno dentro de los hornos rotatorios de cemento en la planta de Buñol." }
    }
  }
];

const initialNotificationsList = [
  { id: "n1", type: "Fikir", title: "Fikrine 5 yeni destek kredisi geldi", body: "AI destekli yatırım danışmanı fikri yükseliyor.", unread: true },
  { id: "n2", type: "Yönetici", title: "Bir fikir yönetici incelemesine alındı", body: "Lojistik dinamik raf sistemi operasyon kuyruğuna taşındı.", unread: true },
  { id: "n3", type: "AI", title: "AI analizi tamamlandı", body: "Texas solar farm BMS fikri için pilot önerisi oluşturuldu.", unread: false }
];

const navItems = [
  { id: "dashboard", label: "Genel", icon: "layout-dashboard" },
  { id: "quickFlow", label: "Borsa", icon: "chart-candlestick" },
  { id: "data", label: "Veri&Bilgi", icon: "database" },
  { id: "agenda", label: "Gündem", icon: "newspaper" },
  { id: "announcements", label: "Duyurular", icon: "megaphone" },
  { id: "social", label: "Sosyal", icon: "globe" },
  { id: "challenges", label: "Yarışmalar", icon: "trophy" },
  { id: "education", label: "Eğitim & Mentörlük", icon: "graduation-cap" },
  { id: "events", label: "Etkinlikler", icon: "calendar" },
  { id: "studio", label: "Stüdyo", icon: "layers" },
  { id: "teams", label: "Ekipler", icon: "users-round" },
  { id: "profile", label: "Profil", icon: "user-round" },
  { id: "messages", label: "Mesajlar", icon: "message-square-text" },
  { id: "managerDashboard", label: "Yönetici Dashboardu", icon: "chart-no-axes-combined", managerOnly: true },
  { id: "adminStorage", label: "Yönetici Depolama Alanı", icon: "folder-kanban", managerOnly: true },
  { id: "manager", label: "Karar Kurulu", icon: "clipboard-check", managerOnly: true },
  { id: "analytics", label: "Karar Analitiği", icon: "chart-no-axes-combined" },
  { id: "quickEval", label: "Hızlı Değerlendir", icon: "flame" },
  { id: "rules", label: "Kurallar", icon: "scroll" },
  { id: "complaintBox", label: "Şikayet Kutusu", icon: "shield-alert" },
  { id: "aiAssistantMenu", label: "AI Asistan", icon: "bot" },
  { id: "systemDetails", label: "Sistem Detayları", icon: "info" },
  { id: "settings", label: "Ayarlar", icon: "settings" }
];

const cleanNavIds = ["dashboard", "quickFlow", "data", "agenda", "announcements", "social", "challenges", "education", "events", "studio", "teams", "products", "profile", "messages", "managerDashboard", "adminStorage", "manager", "analytics", "quickEval", "rules", "complaintBox", "aiAssistantMenu", "systemDetails", "settings"];

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
  title: "Garanti BBVA Mobil kullanıcıları için AI destekli yatırım danışmanı",
  oneSentence: "Kullanıcıların harcama alışkanlıkları ve risk eğilimlerine göre fon ve hisse sepeti öneren yapay zeka entegrasyonu.",
  ideaType: "Yeni ürün / hizmet",
  visibility: "Şirket içi",
  anonymity: "İsim gizli, rol görünür",
  company: "Garanti Bankası A.Ş. (Garanti BBVA)",
  department: "Dijital Bankacılık",
  subDepartment: "Yatırım Operasyonları",
  location: "Garanti BBVA Genel Müdürlük",
  cityRegion: "İstanbul / Marmara",
  userGroup: "Mobil şube kullanıcıları",
  otherDepartments: "Müşteri Deneyimi, Veri Analitiği",
  contributionTeams: "Yatırım planlama, veri analitiği",
  problem: "Bireysel yatırımcılar karmaşık piyasa verileri yüzünden yatırım kararı almakta zorlanıyor.",
  currentExperience: "Müşteriler manuel seçimlerde yanlış risk grubu seçebiliyor ve kayıp yaşayabiliyor.",
  frequency: "Haftada birkaç kez",
  affected: "Müşteriler, yatırım danışmanları",
  customerImpact: "Bakiye verimi düşüyor ve şikayet sayısı artıyor.",
  employeeImpact: "Yatırım danışmanlarının operasyonel yükü artıyor.",
  operationalImpact: "Çağrı merkezi yatırım sorularıyla kilitleniyor.",
  financialImpact: "Hacim kaybı ve müşteri terk riski oluşuyor.",
  ifNotSolved: "Diğer bankaların robo-danışman sistemlerine karşı rekabet gücü zayıflar.",
  solution: "Garanti BBVA Mobil içinde risk grubuna göre otomatik bakiye dağılımı yapan robo-danışman modülü.",
  howItWorks: "AI risk analizi çıkarır, öneri sepet sunar, müşteri tek tıkla onaylayıp alım yapar.",
  resources: "Risk modelleri, harcama verisi, portföy getirileri",
  technicalNeed: "Evet, entegre robo-danışman API'si gerekiyor",
  educationNeed: "Kısa tanıtım videosu yeterli",
  processNeed: "Satış onay sürecinde küçük güncelleme",
  teams: "Veri analitiği, Garanti BBVA Lab, IT",
  pilot: "İlk pilot işlem hacmi yüksek 1000 kullanıcıda 4 hafta denenebilir.",
  impact: "Yüksek",
  cost: "Orta",
  implementationTime: "3 ay",
  successMetric: "Aktif robo-danışman kullanan müşteri sayısı, memnuniyet oranı",
  kpi: "Robo-yatırım hacmi",
  risks: "Regülasyon uyumsuzluğu, yanlış tahminleme riski",
  strategicGoal: "Bireysel bankacılıkta teknoloji liderliğini korumak",
  files: ["garanti-bbva-robo-danisman-pilot.pdf"]
};

const initialComplaint = {
  title: "Tedarik zinciri onay adımları yüzünden ürün girişinin gecikmesi",
  category: "Süreç verimsizliği",
  body: "Kategori yöneticisi ve bölge depo onayları paralel çalışmıyor. Bu yüzden basit stok girişleri bile günlerce bekliyor ve BBVA Spark México mağazalarında yok satma yaşanıyor.",
  department: "Tedarik Zinciri",
  location: "Torre BBVA México",
  frequency: "Haftada birkaç kez",
  impact: "Orta",
  anonymity: "İsim gizli, departman görünür",
  expectation: "Onay adımlarının sıralı değil paralel yapılması ve gecikmelerin otomatik alarm üretmesi.",
  files: []
};

const initialTeams = [
  {
    id: "team-001",
    name: "Garanti BBVA Robo-Yatırım Hızlanma",
    description: "Garanti BBVA Mobil içinde robo-danışman algoritmasını ve UX akışlarını kuracak cross-functional ekip.",
    area: "FinTech & Dijital Bankacılık",
    ideaId: "idea-1",
    createdBy: "p05",
    status: "active",
    createdAt: "2026-05-15",
    roles: [
      { id: "tr-1", title: "Ürün Yöneticisi", icon: "briefcase", filled: true, userId: "p05", skills: ["Roadmap", "OKR", "Banking"] },
      { id: "tr-2", title: "Yapay Zeka Mühendisi", icon: "brain", filled: true, userId: "p02", skills: ["Python", "TensorFlow", "ML"] },
      { id: "tr-3", title: "UX Designer", icon: "pen-tool", filled: false, userId: null, skills: ["Figma", "User Research"] }
    ],
    messages: [
      { userId: "p05", body: "Ekibimiz kuruldu! MVP testlerine başlıyoruz.", time: "2026-05-15 10:00" },
      { userId: "p02", body: "Risk analiz motorunun ilk iterasyonu tamam, AUC 0.88.", time: "2026-05-20 09:30" }
    ],
    tags: ["Robo-Yatırım", "FinTech", "MVP"]
  },
  {
    id: "team-002",
    name: "BBVA Spark México Akıllı Tedarik Grubu",
    description: "Akıllı raf ataması ve anlık tedarik zinciri tahminleme modellerini kuran ekip.",
    area: "Perakende",
    ideaId: "idea-2",
    createdBy: "u1",
    status: "active",
    createdAt: "2026-06-12",
    roles: [
      { id: "t2-1", title: "Tedarik Uzmanı", icon: "briefcase", filled: true, userId: "u1", skills: ["Supply Chain", "ERP"] },
      { id: "t2-2", title: "Veri Bilimci", icon: "brain", filled: true, userId: "p03", skills: ["R", "Python", "Predictive ML"] }
    ],
    messages: [
      { userId: "u1", body: "Tedarik zinciri veri akışlarını bağladık.", time: "2026-06-13 11:00" }
    ],
    tags: ["Tedarik", "Perakende", "Otomasyon"]
  },
  {
    id: "team-003",
    name: "BBVA Argentina EV-Lastik Ar-Ge Ekibi",
    description: "Elektrikli araçlar için özel lastik aşınma takip IoT sensör prototipini geliştiren sanayi ekibi.",
    area: "Sanayi",
    ideaId: "idea-3",
    createdBy: "u2",
    status: "active",
    createdAt: "2026-06-14",
    roles: [
      { id: "t3-1", title: "Donanım Mühendisi", icon: "cpu", filled: true, userId: "u2", skills: ["IoT", "Sensors", "CAD"] },
      { id: "t3-2", title: "Malzeme Araştırmacısı", icon: "layers", filled: false, userId: null, skills: ["Rubber Chemistry", "Composites"] }
    ],
    messages: [],
    tags: ["BBVA Argentina", "IoT", "Elektrikli Araç"]
  },
  {
    id: "team-004",
    name: "Wind Forecasting AI Team",
    description: "Predictive wind turbine telemetry models to optimize UK grid energy output matching.",
    area: "Yeşil Enerji",
    ideaId: "idea-4",
    createdBy: "u7",
    status: "active",
    createdAt: "2026-06-11",
    roles: [
      { id: "t4-1", title: "Wind Data Analyst", icon: "wind", filled: true, userId: "u7", skills: ["Meteorology", "Time Series"] },
      { id: "t4-2", title: "ML Specialist", icon: "brain", filled: true, userId: "p02", skills: ["Python", "LSTM", "Grid Tech"] }
    ],
    messages: [
      { userId: "u7", body: "Offshore wind farm telemetry data is ready.", time: "2026-06-12 14:00" }
    ],
    tags: ["Wind Energy", "UK", "AI Models"]
  },
  {
    id: "team-005",
    name: "BBVA CIB US UK Port OCR Automation",
    description: "New York white cement dock scanner crane pathway OCR camera system development group.",
    area: "Logistics",
    ideaId: "idea-5",
    createdBy: "u6",
    status: "active",
    createdAt: "2026-06-13",
    roles: [
      { id: "t5-1", title: "Logistics Manager", icon: "briefcase", filled: true, userId: "u6", skills: ["Port Ops", "Logistics"] },
      { id: "t5-2", title: "Computer Vision Engineer", icon: "camera", filled: false, userId: null, skills: ["OpenCV", "YOLO", "OCR"] }
    ],
    messages: [],
    tags: ["OCR", "Port Logistics", "UK"]
  },
  {
    id: "team-006",
    name: "Texas BMS Optimizers",
    description: "Lithium iron phosphate battery pack management and grid dispatch pricing AI layer.",
    area: "Yeşil Enerji",
    ideaId: "idea-6",
    createdBy: "u10",
    status: "active",
    createdAt: "2026-06-14",
    roles: [
      { id: "t6-1", title: "Grid Arbitrage Expert", icon: "trending-up", filled: true, userId: "u10", skills: ["Texas ERCOT", "Arbitrage"] },
      { id: "t6-2", title: "Software Engineer", icon: "code", filled: true, userId: "p04", skills: ["Go", "NodeJS", "BMS APIs"] }
    ],
    messages: [],
    tags: ["Texas", "BMS", "Grid Arbitrage"]
  },
  {
    id: "team-007",
    name: "Houston Packing Automation Group",
    description: "Houston terminal automated robotic dry mortar bagging integration team.",
    area: "Logistics",
    ideaId: "idea-7",
    createdBy: "u9",
    status: "active",
    createdAt: "2026-06-15",
    roles: [
      { id: "t7-1", title: "Mechanical Supervisor", icon: "settings", filled: true, userId: "u9", skills: ["Robotics", "PLCs"] },
      { id: "t7-2", title: "Operations Lead", icon: "briefcase", filled: false, userId: null, skills: ["Houston Port", "Packaging"] }
    ],
    messages: [],
    tags: ["Robotics", "Packaging", "Houston"]
  },
  {
    id: "team-008",
    name: "Buenos Aires vertical storage team",
    description: "Automated vertical storage and retrieval system (ASRS) mechanical layout and software group.",
    area: "Logistics",
    ideaId: "idea-8",
    createdBy: "u12",
    status: "active",
    createdAt: "2026-06-12",
    roles: [
      { id: "t8-1", title: "ASRS Specialist", icon: "layers", filled: true, userId: "u12", skills: ["ASRS", "Warehouse Automation"] },
      { id: "t8-2", title: "Structural Designer", icon: "pen-tool", filled: false, userId: null, skills: ["Argentina Building Codes", "CAD"] }
    ],
    messages: [],
    tags: ["ASRS", "Buenos Aires", "Robotic Lifts"]
  },
  {
    id: "team-009",
    name: "Buñol CCS Team",
    description: "Carbon amine scrubbing pilot loop capturing daily CO2 at Buñol clinker rotary kiln.",
    area: "Sürdürülebilirlik",
    ideaId: "idea-9",
    createdBy: "u14",
    status: "active",
    createdAt: "2026-06-12",
    roles: [
      { id: "t9-1", title: "Chemical Engineer", icon: "flask", filled: true, userId: "u14", skills: ["Amine Scrubbing", "CCS"] },
      { id: "t9-2", title: "ESG Compliance Lead", icon: "shield", filled: false, userId: null, skills: ["EU ESG", "Carbon Credits"] }
    ],
    messages: [],
    tags: ["CCS", "Carbon Capture", "Spain"]
  }
];

const initialClubs = [
  {
    id: "club-001",
    name: "Garanti BBVA Tenis Kulübü",
    description: "Tenis severlerin buluştuğu, antrenman ve turnuva organizasyonları düzenleyen sosyal kulüp.",
    category: "Spor",
    country: "TR",
    createdBy: "u3",
    createdAt: "2026-05-10",
    members: ["u3", "p01", "p05"],
    memberCount: 3,
    tags: ["Tenis", "Spor", "Sosyal"],
    messages: [
      { userId: "p01", body: "Bu cumartesi Ciudad BBVA kortlarında turnuva var, kayıtlar açıldı!", time: "09:10" },
      { userId: "p05", body: "Harika, ben de eşleşme listesine yazıldım. Saat kaçta başlıyoruz?", time: "09:14" },
      { userId: "u3", body: "10:00'da ısınma, 10:30'da ilk maçlar. Raketlerinizi unutmayın.", time: "09:20" }
    ]
  },
  {
    id: "club-002",
    name: "Sabancı Kitap Kulübü",
    description: "Her ay belirlenen bir kitabı okuyup tartıştığımız, edebiyat severler kulübü.",
    category: "Kültür & Sanat",
    country: "TR",
    createdBy: "u1",
    createdAt: "2026-05-15",
    members: ["u1", "p03", "p05"],
    memberCount: 3,
    tags: ["Kitap", "Edebiyat", "Kültür"],
    messages: [
      { userId: "u1", body: "Bu ayki kitabımız belli oldu, cuma günü ilk 100 sayfayı konuşalım mı?", time: "13:02" },
      { userId: "p03", body: "Bana uyar, Mersin'den bağlanırım toplantıya.", time: "13:08" }
    ]
  },
  {
    id: "club-003",
    name: "BBVA Securities España Koşu Grubu",
    description: "Hafta sonları maratonlara hazırlanan ve sabah koşuları organize eden spor topluluğu.",
    category: "Spor",
    country: "TR",
    createdBy: "u2",
    createdAt: "2026-06-01",
    members: ["u2", "p02"],
    memberCount: 2,
    tags: ["Koşu", "Sağlık", "Spor"],
    messages: [
      { userId: "u2", body: "Pazar sabahı 07:00'de Caddebostan sahilinde buluşuyoruz, 10K koşacağız.", time: "18:40" }
    ]
  },
  {
    id: "club-004",
    name: "Sabancı Tech Club",
    description: "A community for technology enthusiasts exploring AI, robotics, and emerging software development.",
    category: "Teknoloji",
    country: "GB",
    createdBy: "u7",
    createdAt: "2026-05-20",
    members: ["u7", "p02"],
    memberCount: 2,
    tags: ["Tech", "AI", "UK"],
    messages: [
      { userId: "u7", body: "We're hosting a small AI demo night next week at the New York HQ, who's in?", time: "11:05" },
      { userId: "p02", body: "Count me in, I'll bring the latest model benchmarks.", time: "11:12" }
    ]
  },
  {
    id: "club-005",
    name: "Texas Solar Volunteers",
    description: "Sabanci Climate volunteers working on local environmental cleanups and renewable workshops.",
    category: "Sosyal Sorumluluk",
    country: "US",
    createdBy: "u10",
    createdAt: "2026-06-02",
    members: ["u10", "p04"],
    memberCount: 2,
    tags: ["Environment", "Volunteering", "Texas"],
    messages: [
      { userId: "u10", body: "Cleanup day at the Austin solar farm site is confirmed for Saturday morning.", time: "08:30" }
    ]
  },
  {
    id: "club-006",
    name: "BBVA Spark España Buenos Aires Wanderclub",
    description: "Wochenendwanderungen und Outdoor-Aktivitäten für Kolleginnen und Kollegen in Buenos Aires.",
    category: "Spor",
    country: "DE",
    createdBy: "p14",
    createdAt: "2026-06-08",
    members: ["p14", "p21"],
    memberCount: 2,
    tags: ["Wandern", "Outdoor", "Buenos Aires"],
    messages: [
      { userId: "p14", body: "Diesen Samstag wandern wir zum Starnberger See, Treffpunkt ist um 8 Uhr.", time: "09:00" }
    ]
  },
  {
    id: "club-007",
    name: "BBVA CIB US Buñol Club de Lectura",
    description: "Club de lectura mensual para empleados de la planta de Buñol y la oficina de Valencia.",
    category: "Kültür & Sanat",
    country: "ES",
    createdBy: "p16",
    createdAt: "2026-06-10",
    members: ["p16", "p23"],
    memberCount: 2,
    tags: ["Lectura", "Cultura", "Buñol"],
    messages: [
      { userId: "p16", body: "Este mes leemos un libro sobre sostenibilidad industrial, ¿les parece bien el jueves?", time: "12:15" }
    ]
  },
  {
    id: "club-008",
    name: "3D Ürün Geliştirme ve Prototipleme Kulübü",
    description: "Katmanlı imalat, 3D CAD tasarımı ve endüstriyel prototipleme teknolojileri üzerine çalışan teknik topluluk.",
    category: "Teknoloji",
    country: "TR",
    createdBy: "u3",
    createdAt: "2026-06-18",
    members: ["u3", "p01", "p05"],
    memberCount: 3,
    tags: ["3D Baskı", "Tasarım", "Prototipleme"],
    messages: [
      { userId: "p01", body: "3D yazıcı kalibrasyon rehberi hazırladım, genel klasörde bulabilirsiniz.", time: "10:15" },
      { userId: "u3", body: "Harika eline sağlık, yeni ürün kalıbını bu hafta basıp test edelim.", time: "10:20" }
    ]
  },
  {
    id: "club-009",
    name: "Finansal Okuryazarlık ve Yatırım Kulübü",
    description: "Bireysel finans yönetimi, borsa yatırım stratejileri ve finansal okuryazarlık üzerine seminerler ve paylaşımlar.",
    category: "Finans",
    country: "TR",
    createdBy: "u1",
    createdAt: "2026-06-19",
    members: ["u1", "p03", "p02"],
    memberCount: 3,
    tags: ["Finans", "Borsa", "Yatırım"],
    messages: [
      { userId: "u1", body: "Bu haftaki hisse senedi analizi toplantımız yarın saat 15:00'te.", time: "11:30" }
    ]
  },
  {
    id: "club-010",
    name: "Yapay Zeka ve Büyük Veri Topluluğu",
    description: "Derin öğrenme modelleri, veri analitiği ve iş zekası üzerine teknik araştırmalar ve projeler.",
    category: "Teknoloji",
    country: "TR",
    createdBy: "u2",
    createdAt: "2026-06-19",
    members: ["u2", "p04"],
    memberCount: 2,
    tags: ["AI", "Büyük Veri", "Python"],
    messages: [
      { userId: "u2", body: "Yeni dil modelini sunucuya kurduk, test etmek isteyenler API anahtarı talep edebilir.", time: "16:45" }
    ]
  },
  {
    id: "club-011",
    name: "3D Product Development & CAD Modeling Club",
    description: "A technical club for sharing 3D design practices, rapid prototyping, and CAD modeling optimization.",
    category: "Teknoloji",
    country: "GB",
    createdBy: "u7",
    createdAt: "2026-06-18",
    members: ["u7", "p02"],
    memberCount: 2,
    tags: ["3D Design", "CAD", "Engineering"],
    messages: [
      { userId: "u7", body: "Let's review the new nozzle designs on Tuesday. Bring your CAD files.", time: "14:00" }
    ]
  },
  {
    id: "club-012",
    name: "Financial Literacy & FinTech Forum",
    description: "Exploring financial planning, market analysis, personal investment, and fintech developments.",
    category: "Finans",
    country: "US",
    createdBy: "u10",
    createdAt: "2026-06-18",
    members: ["u10", "p04"],
    memberCount: 2,
    tags: ["Finance", "FinTech", "Markets"],
    messages: [
      { userId: "u10", body: "Great discussion on global inflation trends yesterday, slides are uploaded.", time: "09:12" }
    ]
  },
  {
    id: "club-013",
    name: "3D-Produktentwicklung & CAD-Design",
    description: "Gemeinschaft für 3D-Druck, additive Fertigung und computergestütztes Design im industriellen Umfeld.",
    category: "Teknoloji",
    country: "DE",
    createdBy: "p14",
    createdAt: "2026-06-19",
    members: ["p14", "p21"],
    memberCount: 2,
    tags: ["3D-Druck", "CAD", "Technik"],
    messages: [
      { userId: "p14", body: "Hat jemand Erfahrung mit dem Druck von Kohlefasermaterialien?", time: "11:20" }
    ]
  },
  {
    id: "club-014",
    name: "Finanzielle Allgemeinbildung und Investitionen",
    description: "Erfahrungsaustausch über Aktien, persönliche Finanzen und Anlagestrategien für Mitarbeiter.",
    category: "Finans",
    country: "DE",
    createdBy: "p14",
    createdAt: "2026-06-19",
    members: ["p14", "p21"],
    memberCount: 2,
    tags: ["Finanzen", "Investition", "Aktien"],
    messages: [
      { userId: "p21", body: "Nächste Woche sprechen wir über ETFs und langfristige Altersvorsorge.", time: "15:40" }
    ]
  },
  {
    id: "club-015",
    name: "Club de Modelado CAD y Desarrollo de Producto 3D",
    description: "Espacio técnico dedicado a la impresión 3D, el diseño asistido por ordenador y el prototipado rápido.",
    category: "Teknoloji",
    country: "ES",
    createdBy: "p16",
    createdAt: "2026-06-18",
    members: ["p16", "p23"],
    memberCount: 2,
    tags: ["Diseño 3D", "Impresión 3D", "Ingeniería"],
    messages: [
      { userId: "p16", body: "Hemos configurado la nueva impresora de filamento continuo en el lab de Buñol.", time: "10:00" }
    ]
  },
  {
    id: "club-016",
    name: "Educación Financiera y Gestión del Patrimonio",
    description: "Grupo enfocado en la mejora de la cultura financiera personal, análisis de mercados y ahorro inteligente.",
    category: "Finans",
    country: "ES",
    createdBy: "p16",
    createdAt: "2026-06-19",
    members: ["p16", "p23"],
    memberCount: 2,
    tags: ["Finanzas", "Ahorro", "Bolsa"],
    messages: [
      { userId: "p23", body: "Recomiendo el artículo sobre interés compuesto que he compartido en la red.", time: "17:15" }
    ]
  }
];


