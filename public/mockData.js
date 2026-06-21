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
  { code: "DE", name: "Germany", flag: "🇩🇪", lang: "de", label: "Germany Portal" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", lang: "en", label: "UK Portal" },
  { code: "US", name: "United States", flag: "🇺🇸", lang: "en", label: "USA Portal" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩", lang: "en", label: "Indonesia Portal" },
  { code: "IT", name: "Italy", flag: "🇮🇹", lang: "en", label: "Italy Portal" },
  { code: "BE", name: "Belgium", flag: "🇧🇪", lang: "en", label: "Belgium Portal" },
  { code: "IN", name: "India", flag: "🇮🇳", lang: "en", label: "India Portal" },
  { code: "EG", name: "Egypt", flag: "🇪🇬", lang: "en", label: "Egypt Portal" },
  { code: "TR", name: "Türkiye", flag: "🇹🇷", lang: "tr", label: "Türkiye Portal" }
];

// affiliationCompanies[].countries uses Turkish display names (e.g. "İspanya"), while
// countriesList[].name uses English (e.g. "Spain") for UI display. This maps a country
// code to the Turkish name so company/country matching works for every portal, not just TR.
const countryNameTR = {
  DE: "Almanya",
  GB: "Birleşik Krallık",
  US: "Amerika Birleşik Devletleri",
  ID: "Endonezya",
  IT: "İtalya",
  BE: "Belçika",
  IN: "Hindistan",
  EG: "Mısır",
  TR: "Türkiye"
};

const brandLogoSrc = "/assets/company-logos/heidelberg-materials-group.svg";

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
  "Lena Fischer": "https://randomuser.me/api/portraits/men/75.jpg",
  "Markus Bauer": "https://randomuser.me/api/portraits/men/65.jpg",
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
    id: "heidelberg-materials",
    name: "Heidelberg Materials AG",
    shortName: "Heidelberg Materials",
    logo: "./assets/company-logos/heidelberg-materials-group.svg",
    domain: "heidelbergmaterials.com",
    type: "Holding",
    countries: ["Almanya", "Birleşik Krallık", "Amerika Birleşik Devletleri", "Endonezya", "İtalya", "Belçika", "Hindistan", "Mısır"],
    cities: ["Heidelberg", "Londra", "Dallas", "Jakarta", "Bergamo", "Brüksel", "Mumbai", "Kahire"],
    campuses: ["Heidelberg Materials Hauptmerkez – Kreuzfahrtschiff (Berliner Straße 6)", "London HQ", "Dallas Office", "Jakarta Hub", "Bergamo Hub", "Brussels Hub", "Mumbai Hub", "Cairo Hub"],
    departments: ["Strateji", "İnovasyon", "Finans", "İnsan Kaynakları", "Sürdürülebilirlik"]
  },
  {
    id: "heidelberg-materials-de",
    name: "Heidelberg Materials AG",
    shortName: "Heidelberg Materials",
    logo: "./assets/company-logos/heidelberg-materials-group.svg",
    domain: "heidelbergmaterials.com",
    type: "Çimento/Yapı Malzemeleri",
    countries: ["Almanya"],
    cities: ["Heidelberg", "Berlin", "Hamburg"],
    campuses: ["Heidelberg Materials Hauptmerkez – Kreuzfahrtschiff (Berliner Straße 6)", "Heidelberg Materials Akademi", "Heidelberg Materials Hauptmerkez – Kreuzfahrtschiff (Berliner Straße 6)"],
    departments: ["Dijital Üretim", "Kurumsal Satış", "Hazine", "İnovasyon Lab"]
  },
  {
    id: "hanson-uk",
    name: "Hanson UK Ltd.",
    shortName: "Hanson UK",
    logo: "./assets/company-logos/hanson.svg",
    domain: "hanson.com",
    type: "Agrega/Hazır Beton/Asfalt",
    countries: ["Birleşik Krallık"],
    cities: ["Londra", "Manchester", "Birmingham"],
    campuses: ["Hanson UK HQ", "Manchester Lojistik Merkezi"],
    departments: ["Kategori Yönetimi", "Lojistik", "Tedarik Zinciri", "Müşteri Deneyimi"]
  },
  {
    id: "heidelberg-materials-na",
    name: "Heidelberg Materials North America LLC",
    shortName: "Heidelberg Materials North America",
    logo: "./assets/company-logos/heidelberg-materials-group.svg",
    domain: "heidelbergmaterials.com",
    type: "Çimento/Agrega",
    countries: ["Amerika Birleşik Devletleri"],
    cities: ["Dallas", "Chicago", "Irving"],
    campuses: ["Heidelberg Materials NA Plaza", "Irving Depo"],
    departments: ["Kategori Yönetimi", "Tedarik Zinciri", "Tesis Operasyonları", "E-Ticaret"]
  },
  {
    id: "indocement",
    name: "PT Indocement Tunggal Prakarsa Tbk",
    shortName: "Indocement",
    logo: "./assets/company-logos/indocement.svg",
    domain: "indocement.co.id",
    type: "Çimento",
    countries: ["Endonezya"],
    cities: ["Jakarta", "Bogor", "Cirebon"],
    campuses: ["Indocement HQ", "Cirebon Fabrika"],
    departments: ["Şebeke Operasyonları", "Müşteri Hizmetleri", "Yeşil Enerji", "BT"]
  },
  {
    id: "italcementi",
    name: "Italcementi S.p.A.",
    shortName: "Italcementi",
    logo: "./assets/company-logos/italcementi.svg",
    domain: "italcementi.it",
    type: "Çimento",
    countries: ["İtalya"],
    cities: ["Bergamo", "Milano", "Calusco"],
    campuses: ["Bergamo Fabrika", "Calusco Akıllı Fabrika"],
    departments: ["Üretim", "Ar-Ge", "Tedarik Zinciri", "Pazarlama"]
  },
  {
    id: "cbr-belgium",
    name: "CBR S.A./N.V.",
    shortName: "CBR Belgium",
    logo: "./assets/company-logos/cbr-belgium.svg",
    domain: "cbr.be",
    type: "Çimento",
    countries: ["Belçika"],
    cities: ["Brüksel", "Antwerp", "Lixhe"],
    campuses: ["Lixhe Fabrika"],
    departments: ["Ar-Ge", "Üretim", "Kompozit Teknolojileri", "Kalite"]
  },
  {
    id: "heidelberg-materials-india",
    name: "Heidelberg Materials India Ltd.",
    shortName: "Heidelberg Materials India",
    logo: "./assets/company-logos/heidelberg-materials-group.svg",
    domain: "heidelbergmaterials.in",
    type: "Çimento",
    countries: ["Hindistan"],
    cities: ["Mumbai", "Bangalore", "Hyderabad"],
    campuses: ["Mumbai Fabrika"],
    departments: ["Üretim", "Sürdürülebilirlik", "Lojistik", "Ar-Ge"]
  },
  {
    id: "heidelberg-materials-egypt",
    name: "Heidelberg Materials Egypt S.A.E.",
    shortName: "Heidelberg Materials Egypt",
    logo: "./assets/company-logos/heidelberg-materials-group.svg",
    domain: "heidelbergmaterials.com.eg",
    type: "Çimento",
    countries: ["Mısır"],
    cities: ["Kahire", "Süveyş", "Helvan"],
    campuses: ["Helvan Fabrika"],
    departments: ["Üretim", "Elektrikli Araçlar Ar-Ge", "Kalite Kontrol", "Satış"]
  },
  {
    id: "heidelberg-materials-france",
    name: "Heidelberg Materials France S.A.S.",
    shortName: "Heidelberg Materials France",
    logo: "./assets/company-logos/heidelberg-materials-france.svg",
    domain: "heidelbergmaterials.fr",
    type: "Çimento/Granülat/Beton",
    countries: ["Almanya"],
    cities: ["Paris", "Lyon", "Marsilya"],
    campuses: ["Paris Ofisi"],
    departments: ["Yapay Zekâ", "Siber Güvenlik", "Bulut Teknolojileri", "Ürün Yönetimi"]
  },
  {
    id: "heidelberg-materials-htc",
    name: "Heidelberg Materials Technology Center GmbH",
    shortName: "Heidelberg Materials Technology Center",
    logo: "./assets/company-logos/heidelberg-materials-htc.svg",
    domain: "heidelbergmaterials.com",
    type: "Ar-Ge/İnovasyon",
    countries: ["Almanya"],
    cities: ["Leimen"],
    campuses: ["Heidelberg Materials Technology Center Leimen"],
    departments: ["Yapay Zekâ", "Süreç Teknolojisi", "Sürdürülebilirlik Ar-Ge", "Ürün Yönetimi"]
  },
  {
    id: "heidelberg-materials-poland",
    name: "Heidelberg Materials Polska Sp. z o.o.",
    shortName: "Heidelberg Materials Poland",
    logo: "./assets/company-logos/heidelberg-materials-poland.svg",
    domain: "heidelbergmaterials.pl",
    type: "Çimento",
    countries: ["Almanya"],
    cities: ["Opole", "Varşova", "Krakow"],
    campuses: ["Opole Fabrika"],
    departments: ["Risk Yönetimi", "Aktüerya", "Müşteri Deneyimi", "Hasar Yönetimi"]
  },
  {
    id: "heidelberg-materials-northern-europe",
    name: "Heidelberg Materials Northern Europe AS",
    shortName: "Heidelberg Materials Northern Europe",
    logo: "./assets/company-logos/heidelberg-materials-northern-europe.svg",
    domain: "heidelbergmaterials.no",
    type: "Çimento/Agrega (Scancem mirası)",
    countries: ["Birleşik Krallık"],
    cities: ["Oslo", "Stockholm", "Brevik"],
    campuses: ["Brevik Fabrika"],
    departments: ["Bireysel Emeklilik", "Müşteri Deneyimi", "Dijital Kanallar", "Satış"]
  },
  // International Subsidiaries
  {
    id: "heidelberg-materials-trading",
    name: "Heidelberg Materials Trading FZE",
    shortName: "Heidelberg Materials Trading",
    logo: "./assets/company-logos/heidelberg-materials-trading.svg",
    domain: "heidelbergmaterials.com",
    type: "Toptan Ticaret/Lojistik",
    countries: ["Birleşik Arap Emirlikleri"],
    cities: ["Dubai"],
    campuses: ["Dubai Trading Hub"],
    departments: ["Operations", "Trading", "Investment"]
  },
  {
    id: "hanson-australia",
    name: "Hanson Australia Pty Ltd.",
    shortName: "Hanson Australia",
    logo: "./assets/company-logos/hanson.svg",
    domain: "hanson.com.au",
    type: "Agrega/Hazır Beton",
    countries: ["Avustralya"],
    cities: ["Sydney", "Melbourne", "Brisbane"],
    campuses: ["Sydney HQ"],
    departments: ["Logistics", "Sales", "Supply Chain"]
  },
  {
    id: "heidelberg-materials-spain",
    name: "Heidelberg Materials España S.A.",
    shortName: "Heidelberg Materials Spain",
    logo: "./assets/company-logos/heidelberg-materials-spain.svg",
    domain: "heidelbergmaterials.es",
    type: "Çimento",
    countries: ["İspanya"],
    cities: ["Madrid", "Barcelona"],
    campuses: ["Madrid Hub"],
    departments: ["Sustainabilty", "Production", "R&D", "Logistics"]
  },
  {
    id: "akcansa",
    name: "Akçansa Çimento Sanayi ve Ticaret A.Ş.",
    shortName: "Akçansa",
    logo: "./assets/company-logos/akcansa.svg",
    domain: "akcansa.com.tr",
    type: "Çimento",
    countries: ["Türkiye"],
    cities: ["İstanbul", "Çanakkale", "Samsun"],
    campuses: ["Büyükçekmece Fabrikası", "Çanakkale Fabrikası", "Ladik Fabrikası"],
    departments: ["Üretim", "Sürdürülebilirlik", "Liman Operasyonları", "Satış"]
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
  { id: "country", label: "Ülke", balance: 12200, delta: 1.4, scope: "Almanya" },
  { id: "city", label: "Şehir", balance: 7600, delta: -0.6, scope: "Heidelberg" },
  { id: "campus", label: "Bina", balance: 4100, delta: 3.2, scope: "Yerleşke" }
];

function defaultBundleFiles(ticker = "NIE", category = "Fikir") {
  const slug = String(ticker).toLowerCase();
  const base = category === "Şikayet" ? "sinyal" : category === "Araştırma" ? "arastirma" : category === "Proje" ? "proje" : "fikir";
  return [`${slug}-${base}.pdf`, `${slug}-veri.xlsx`, `${slug}-sunum.pptx`, `${slug}-ham-veri.csv`];
}

const peopleDirectory = [
  // Germany (DE)
  { id: "p01", name: "Defne Arman", companyId: "heidelberg-materials", role: "Strateji Direktörü", team: "Holding Strateji", city: "Heidelberg", campus: "Heidelberg Materials Hauptmerkez", photo: "https://randomuser.me/api/portraits/women/12.jpg", status: "Aktif", country: "DE" },
  { id: "p02", name: "Mert Alkan", companyId: "heidelberg-materials-htc", role: "İnovasyon Lideri", team: "Yapay Zekâ Ofisi", city: "Leimen", campus: "Heidelberg Materials Technology Center Leimen", photo: "https://randomuser.me/api/portraits/men/12.jpg", status: "Toplantıda", country: "DE" },
  { id: "p03", name: "Selin Eryılmaz", companyId: "heidelberg-materials-de", role: "Ar-Ge Lideri", team: "Berlin Ofisi Ar-Ge", city: "Berlin", campus: "Berlin Ofisi", photo: "https://randomuser.me/api/portraits/women/32.jpg", status: "Aktif", country: "DE" },
  { id: "p04", name: "Baran İleri", companyId: "heidelberg-materials-de", role: "Üretim Müdürü", team: "Hamburg Ofisi", city: "Hamburg", campus: "Hamburg Ofisi", photo: "https://randomuser.me/api/portraits/men/27.jpg", status: "Sahada", country: "DE" },
  { id: "p05", name: "Ece Uslu", companyId: "heidelberg-materials", role: "Sürdürülebilir Finans Yöneticisi", team: "İnovasyon Lab", city: "Heidelberg", campus: "Heidelberg Materials Hauptmerkez", photo: "https://randomuser.me/api/portraits/women/45.jpg", status: "Aktif", country: "DE" },

  // United Kingdom (GB)
  { id: "p06", name: "John Sterling", companyId: "hanson-uk", role: "Sales Director", team: "Sales", city: "Londra", campus: "London HQ", photo: "https://randomuser.me/api/portraits/men/44.jpg", status: "Aktif", country: "GB" },
  { id: "p07", name: "Sarah Jenkins", companyId: "hanson-uk", role: "UK Sales Lead", team: "Sales", city: "Manchester", campus: "Manchester Ofisi", photo: "https://randomuser.me/api/portraits/women/64.jpg", status: "Aktif", country: "GB" },
  { id: "p08", name: "David Miller", companyId: "hanson-uk", role: "Aggregates Lead Engineer", team: "Operations", city: "Birmingham", campus: "Birmingham Ofisi", photo: "https://randomuser.me/api/portraits/men/53.jpg", status: "Aktif", country: "GB" },
  { id: "p09", name: "Oliver Watson", companyId: "heidelberg-materials", role: "International Strategist", team: "Strategy", city: "Londra", campus: "London HQ", photo: "https://randomuser.me/api/portraits/men/86.jpg", status: "Aktif", country: "GB" },
  { id: "p17", name: "George Taylor", companyId: "hanson-uk", role: "Asphalt Operations Engineer", team: "Operations", city: "Londra", campus: "London HQ", photo: "https://randomuser.me/api/portraits/men/41.jpg", status: "Toplantıda", country: "GB" },
  { id: "p18", name: "Amelia Williams", companyId: "hanson-uk", role: "B2B Portal Product Owner", team: "Sales", city: "Manchester", campus: "Manchester Ofisi", photo: "https://randomuser.me/api/portraits/women/52.jpg", status: "Aktif", country: "GB" },

  // United States (US)
  { id: "p10", name: "Michael Vance", companyId: "heidelberg-materials-na", role: "VP of Operations", team: "Operations", city: "Dallas", campus: "Dallas Office", photo: "https://randomuser.me/api/portraits/men/22.jpg", status: "Aktif", country: "US" },
  { id: "p11", name: "Emily Rose", companyId: "heidelberg-materials-na", role: "Chicago Office Manager", team: "Operations", city: "Chicago", campus: "Chicago Ofisi", photo: "https://randomuser.me/api/portraits/women/36.jpg", status: "Sahada", country: "US" },
  { id: "p12", name: "Robert Chen", companyId: "heidelberg-materials-na", role: "Material Lead Scientist", team: "Technical Services", city: "Irving", campus: "Irving Ofisi", photo: "https://randomuser.me/api/portraits/men/61.jpg", status: "Aktif", country: "US" },
  { id: "p19", name: "Jennifer Miller", companyId: "heidelberg-materials-na", role: "Supply Chain Manager", team: "Operations", city: "Dallas", campus: "Dallas Office", photo: "https://randomuser.me/api/portraits/women/58.jpg", status: "Aktif", country: "US" },
  { id: "p20", name: "Thomas Martin", companyId: "heidelberg-materials-na", role: "Aggregates Researcher", team: "Technical Services", city: "Chicago", campus: "Chicago Ofisi", photo: "https://randomuser.me/api/portraits/men/19.jpg", status: "Sahada", country: "US" },

  // Italy (IT)
  { id: "p13", name: "Hans Müller", companyId: "italcementi", role: "Logistics Coordinator", team: "Logistics", city: "Bergamo", campus: "Bergamo HQ", photo: "https://randomuser.me/api/portraits/men/72.jpg", status: "Aktif", country: "IT" },
  { id: "p14", name: "Dieter Schmidt", companyId: "italcementi", role: "Operations Manager", team: "Production", city: "Milano", campus: "Milano Ofisi", photo: "https://randomuser.me/api/portraits/men/95.jpg", status: "Aktif", country: "IT" },
  { id: "p21", name: "Sabine Schmidt", companyId: "italcementi", role: "Calusco Satış Sorumlusu", team: "Sales", city: "Calusco", campus: "Calusco Fabrikası", photo: "https://randomuser.me/api/portraits/women/63.jpg", status: "Aktif", country: "IT" },
  { id: "p22", name: "Andreas Weber", companyId: "italcementi", role: "Süreç Mühendisi", team: "Production", city: "Bergamo", campus: "Bergamo HQ", photo: "https://randomuser.me/api/portraits/men/77.jpg", status: "Toplantıda", country: "IT" },

  // Belgium (BE)
  { id: "p15", name: "Carlos Ruiz", companyId: "cbr-belgium", role: "Plant Manager", team: "Production", city: "Brüksel", campus: "Brüksel HQ", photo: "https://randomuser.me/api/portraits/men/38.jpg", status: "Aktif", country: "BE" },
  { id: "p16", name: "Maria Ortega", companyId: "cbr-belgium", role: "Sustainability Lead Analyst", team: "R&D", city: "Antwerp", campus: "Antwerp Ofisi", photo: "https://randomuser.me/api/portraits/women/29.jpg", status: "Aktif", country: "BE" },
  { id: "p23", name: "Antonio García", companyId: "cbr-belgium", role: "Lixhe Satış Sorumlusu", team: "Sales", city: "Lixhe", campus: "Lixhe Fabrikası", photo: "https://randomuser.me/api/portraits/men/49.jpg", status: "Aktif", country: "BE" },
  { id: "p24", name: "Isabel Martínez", companyId: "cbr-belgium", role: "Kalite Kontrol Mühendisi", team: "Production", city: "Brüksel", campus: "Brüksel HQ", photo: "https://randomuser.me/api/portraits/women/71.jpg", status: "Sahada", country: "BE" },

  // Indonesia (ID)
  { id: "p25", name: "Siti Wulandari", companyId: "indocement", role: "Operasyon Müdürü", team: "Production", city: "Jakarta", campus: "Jakarta HQ", photo: "https://randomuser.me/api/portraits/women/83.jpg", status: "Aktif", country: "ID" },
  { id: "p26", name: "Budi Santoso", companyId: "indocement", role: "Satış Sorumlusu", team: "Sales", city: "Bogor", campus: "Bogor Fabrikası", photo: "https://randomuser.me/api/portraits/men/84.jpg", status: "Sahada", country: "ID" },

  // India (IN)
  { id: "p27", name: "Priya Sharma", companyId: "heidelberg-materials-india", role: "Bölge Satış Müdürü", team: "Sales", city: "Mumbai", campus: "Mumbai Ofisi", photo: "https://randomuser.me/api/portraits/women/81.jpg", status: "Aktif", country: "IN" },
  { id: "p28", name: "Arjun Mehta", companyId: "heidelberg-materials-india", role: "Üretim Mühendisi", team: "Production", city: "Bangalore", campus: "Bangalore Ofisi", photo: "https://randomuser.me/api/portraits/men/82.jpg", status: "Toplantıda", country: "IN" },

  // Egypt (EG)
  { id: "p29", name: "Mona Farouk", companyId: "heidelberg-materials-egypt", role: "Operasyon Müdürü", team: "Production", city: "Kahire", campus: "Kahire Ofisi", photo: "https://randomuser.me/api/portraits/women/86.jpg", status: "Aktif", country: "EG" },
  { id: "p30", name: "Tarek Hassan", companyId: "heidelberg-materials-egypt", role: "Liman Operasyonları Sorumlusu", team: "Logistics", city: "Süveyş", campus: "Süveyş Fabrikası", photo: "https://randomuser.me/api/portraits/men/88.jpg", status: "Sahada", country: "EG" },

  // Türkiye (TR)
  { id: "p31", name: "Ahmet Yıldız", companyId: "akcansa", role: "Fabrika Müdürü", team: "Üretim", city: "İstanbul", campus: "Büyükçekmece Fabrikası", photo: "https://randomuser.me/api/portraits/men/90.jpg", status: "Aktif", country: "TR" },
  { id: "p32", name: "Zeynep Kaya", companyId: "akcansa", role: "Sürdürülebilirlik Uzmanı", team: "Sürdürülebilirlik", city: "Çanakkale", campus: "Çanakkale Fabrikası", photo: "https://randomuser.me/api/portraits/women/90.jpg", status: "Aktif", country: "TR" }
];

const initialAnnouncements = [
  // Germany (DE)
  {
    id: "ann-1",
    title: "Heidelberg Materials Haziran Fikir Kampanyası başladı",
    body: "Tüm grup şirketlerindeki verimlilik ve enerji tasarrufu fikirleri bu ay aynı havuzda toplanacaktır. Heidelberg Materials, Hanson UK, Heidelberg Materials ve Indocement ekiplerine duyurulur.",
    scope: "Holding geneli",
    companyId: "heidelberg-materials",
    country: "DE",
    city: "Heidelberg",
    campus: "Heidelberg Materials Hauptmerkez",
    department: "Tüm ekipler",
    authorId: "p01",
    time: "Bugün 09:10",
    priority: "Yönetici duyurusu"
  },
  {
    id: "ann-2",
    title: "Heidelberg Materials Akademi inovasyon eğitimleri açıldı",
    body: "Bankacılık süreçlerinde otomasyon ve API teknolojileri geliştirmek isteyen çalışma arkadaşları için başvurular başladı.",
    scope: "İştirak",
    companyId: "heidelberg-materials-de",
    country: "DE",
    city: "Heidelberg",
    campus: "Heidelberg Materials Akademi",
    department: "Tüm Ekipler",
    authorId: "p05",
    time: "Dün 14:20",
    priority: "İştirak"
  },
  {
    id: "ann-7",
    title: "Hanson UK Yapay Zeka Destekli Talep Tahminleme Çalışması",
    body: "E-ticaret ve fiziksel mağaza stok seviyelerini optimize eden, mevsimsel geçişleri tahminleyen algoritmalar aranıyor. Kategori ekibine duyurulur.",
    scope: "İştirak",
    companyId: "hanson-uk",
    country: "DE",
    city: "Heidelberg",
    campus: "Hanson UK HQ",
    department: "Kategori Yönetimi",
    authorId: "p02",
    time: "Dün 16:40",
    priority: "İştirak"
  },
  {
    id: "ann-8",
    title: "Heidelberg Materials NA Tedarik Zinciri Takibi",
    body: "Tarladan rafa taze gıda fire oranlarını %50 azaltacak akıllı lojistik ve soğuk zincir IoT sensör entegrasyonu fikir havuzu açıldı.",
    scope: "İştirak",
    companyId: "heidelberg-materials-na",
    country: "DE",
    city: "Heidelberg",
    campus: "Heidelberg Materials NA Plaza",
    department: "Tedarik Zinciri",
    authorId: "u2",
    time: "Bugün 10:00",
    priority: "İştirak"
  },
  {
    id: "ann-9",
    title: "Indocement Akıllı Şebeke Yük Dağıtımı Projesi",
    body: "Dağıtım şebekesindeki anlık pik yükleri dengeleyecek ve kesintileri minimize edecek akıllı algoritmaların test aşaması başlıyor.",
    scope: "İştirak",
    companyId: "indocement",
    country: "DE",
    city: "Ankara",
    campus: "Dağıtım Kontrol Merkezi",
    department: "Şebeke Operasyonları",
    authorId: "p05",
    time: "2 gün önce",
    priority: "İştirak"
  },
  {
    id: "ann-10",
    title: "CBR Lixhe Fabrikası Sensör Testleri",
    body: "Binek ve ticari araçlar için geliştirilen akıllı lastik sensör verilerinin bulut sistemlerine aktarım hızı optimize ediliyor.",
    scope: "İştirak",
    companyId: "cbr-belgium",
    country: "DE",
    city: "Lixhe",
    campus: "Lixhe Fabrika",
    department: "Ar-Ge",
    authorId: "u4",
    time: "Bugün 11:15",
    priority: "İştirak"
  },
  {
    id: "ann-11",
    title: "Heidelberg Materials India Grafen Katkılı Kompozit Geliştirme Çalışmaları",
    body: "Havacılık ve otomotiv endüstrisi için aşırı hafif ve dayanıklı yeni nesil karbon fiber takviyeli kompozit formülleri test edilecek.",
    scope: "İştirak",
    companyId: "heidelberg-materials-india",
    country: "DE",
    city: "Mumbai",
    campus: "Mumbai Fabrika",
    department: "Kompozit Teknolojileri",
    authorId: "p03",
    time: "Dün 10:30",
    priority: "İştirak"
  },
  {
    id: "ann-12",
    title: "Heidelberg Materials Helvan Fabrikası Alternatif Yakıt Kullanımı",
    body: "Kalsinasyon fırınlarında fosil yakıt yerine endüstriyel atık çamuru ve atık lastik kullanım oranını %65'e çıkarma teknik tasarımı.",
    scope: "İştirak",
    companyId: "heidelberg-materials-egypt",
    country: "DE",
    city: "Helvan",
    campus: "Helvan Fabrika",
    department: "Sürdürülebilirlik",
    authorId: "p03",
    time: "Bugün 13:00",
    priority: "İştirak"
  },
  {
    id: "ann-13",
    title: "Heidelberg Materials France Batarya Yönetim Sistemi (BMS) Yazılım Sprinti",
    body: "Elektrikli otobüslerin şehir içi dur-kalk çevrimlerinde hücre ömrünü %15 uzatan rejeneratif frenleme algoritması entegre ediliyor.",
    scope: "İştirak",
    companyId: "heidelberg-materials-france",
    country: "DE",
    city: "Marsilya",
    campus: "Marsilya Fabrika",
    department: "Elektrikli Araçlar Ar-Ge",
    authorId: "p04",
    time: "Dün 15:45",
    priority: "İştirak"
  },
  {
    id: "ann-14",
    title: "Heidelberg Materials Technology Center GenAI Asistanı Entegrasyonu",
    body: "Platform içi tüm veri katmanlarını (fikirler, borsa, tahminler) özetleyen yapay zeka asistanı model güncellemeleri tamamlandı.",
    scope: "İştirak",
    companyId: "heidelberg-materials-htc",
    country: "DE",
    city: "Leimen",
    campus: "Heidelberg Materials Technology Center Leimen",
    department: "Yapay Zekâ",
    authorId: "p02",
    time: "Bugün 09:00",
    priority: "İştirak"
  },
  {
    id: "ann-15",
    title: "Heidelberg Materials Poland Yapay Zeka Destekli Kalite Analizi",
    body: "Oto kazalarında çekilen fotoğraflardan hasar boyutunu ve tahmini maliyeti 5 saniyede çıkaran derin öğrenme modeli devreye alındı.",
    scope: "İştirak",
    companyId: "heidelberg-materials-poland",
    country: "DE",
    city: "Heidelberg",
    campus: "Opole Fabrika",
    department: "Hasar Yönetimi",
    authorId: "p05",
    time: "Dün 09:25",
    priority: "İştirak"
  },
  {
    id: "ann-16",
    title: "Heidelberg Materials Northern Europe Dijital Müşteri Asistanı",
    body: "Genç kitlelerin BES tasarruflarını otomatik fon dağılımıyla yönetmesini sağlayan akıllı mobil arayüz prototipi test ediliyor.",
    scope: "İştirak",
    companyId: "heidelberg-materials-northern-europe",
    country: "DE",
    city: "Heidelberg",
    campus: "Brevik Fabrika",
    department: "Dijital Kanallar",
    authorId: "u5",
    time: "3 gün önce",
    priority: "İştirak"
  },
  {
    id: "ann-23",
    title: "Heidelberg Materials Hauptmerkez Genç Yetenek İnovasyon Programı",
    body: "Tüm iştiraklerdeki genç mühendis ve uzmanlar için yalın girişim metotları eğitimi ve proje hızlandırıcı başvuruları açıldı.",
    scope: "Holding geneli",
    companyId: "heidelberg-materials",
    country: "DE",
    city: "Heidelberg",
    campus: "Heidelberg Materials Hauptmerkez",
    department: "İnsan Kaynakları",
    authorId: "p01",
    time: "4 gün önce",
    priority: "Yönetici duyurusu"
  },
  {
    id: "ann-24",
    title: "Heidelberg Materials API Entegrasyon Kampanyası",
    body: "Heidelberg Materials API altyapısı üzerinden üçüncü parti finansal uygulamalar geliştirecek dış geliştirici fikirleri borsa havuzuna alınıyor.",
    scope: "İştirak",
    companyId: "heidelberg-materials-de",
    country: "DE",
    city: "Heidelberg",
    campus: "Heidelberg Materials Hauptmerkez",
    department: "Dijital Bankacılık",
    authorId: "u3",
    time: "Dün 16:00",
    priority: "İştirak"
  },
  {
    id: "ann-25",
    title: "Hanson UK Mağaza İçi Akıllı Kiosk Pilot Uygulaması",
    body: "Müşterilerin kuyruk beklemeden ürün barkodu okutup mobil ödemeyle çıkış yapabileceği otonom kioskların tasarımı onaylandı.",
    scope: "İştirak",
    companyId: "hanson-uk",
    country: "DE",
    city: "Heidelberg",
    campus: "Hanson UK HQ",
    department: "Müşteri Deneyimi",
    authorId: "u1",
    time: "Bugün 10:30",
    priority: "İştirak"
  },
  {
    id: "ann-26",
    title: "Heidelberg Materials NA Atık Azaltımı & Kompost Projesi",
    body: "Son tüketim tarihi yaklaşan gıdaların akıllı fiyatlandırma motoruyla anlık indirimlenmesi projesi Maltepe pilot mağazasında başlıyor.",
    scope: "İştirak",
    companyId: "heidelberg-materials-na",
    country: "DE",
    city: "Heidelberg",
    campus: "Heidelberg Materials NA Plaza",
    department: "Mağaza Operasyonları",
    authorId: "u2",
    time: "Dün 11:00",
    priority: "İştirak"
  },
  {
    id: "ann-27",
    title: "Indocement Çatı Üstü Güneş Enerjisi Çözümleri",
    body: "Sanayi sitelerinde atıl duran çatı alanlarının Indocement finansmanıyla güneş paneli tarlalarına dönüştürülmesi modeli.",
    scope: "İştirak",
    companyId: "indocement",
    country: "DE",
    city: "Heidelberg",
    campus: "Indocement HQ",
    department: "Yeşil Enerji",
    authorId: "p05",
    time: "Bugün 08:30",
    priority: "İştirak"
  },
  {
    id: "ann-28",
    title: "CBR Lixhe Fabrikası Otonom Taşıma Robotları (AGV)",
    body: "Hammadde taşıma bandındaki otonom yönlendirmeli araçların rota verimliliği AI simülasyonuyla %20 artırıldı.",
    scope: "İştirak",
    companyId: "cbr-belgium",
    country: "DE",
    city: "Lixhe",
    campus: "Lixhe Akıllı Fabrika",
    department: "Üretim",
    authorId: "u4",
    time: "2 gün önce",
    priority: "İştirak"
  },
  {
    id: "ann-29",
    title: "Heidelberg Materials India Sürdürülebilir Naylon İplik Geliştirme",
    body: "Geri dönüştürülmüş plastik hammaddelerden lastik kord bezi üretiminde kullanılacak yüksek mukavemetli naylon iplik prototipi hazır.",
    scope: "İştirak",
    companyId: "heidelberg-materials-india",
    country: "DE",
    city: "Mumbai",
    campus: "Mumbai Fabrika",
    department: "Ar-Ge",
    authorId: "p03",
    time: "Dün 14:10",
    priority: "İştirak"
  },
  {
    id: "ann-30",
    title: "Heidelberg Materials Düşük Karbonlu Kalsine Kil Geliştirme",
    body: "Çimento klinker ikamesi olarak kalsine kil kullanarak beton üretimindeki CO2 ayak izini %30 azaltan yeşil beton formülü.",
    scope: "İştirak",
    companyId: "heidelberg-materials-egypt",
    country: "DE",
    city: "Helvan",
    campus: "Helvan Fabrika",
    department: "Ar-Ge",
    authorId: "p03",
    time: "5 gün önce",
    priority: "İştirak"
  },
  {
    id: "ann-31",
    title: "Heidelberg Materials France Hidrojen Yakıt Hücreli Otobüs Tanıtımı",
    body: "Geliştirilen hidrojen prototip otobüsün sürüş menzili ve tank güvenlik sensörleri saha simülasyonlarıyla onaylanmıştır.",
    scope: "İştirak",
    companyId: "heidelberg-materials-france",
    country: "DE",
    city: "Marsilya",
    campus: "Marsilya Fabrika",
    department: "Elektrikli Araçlar Ar-Ge",
    authorId: "p04",
    time: "Dün 10:15",
    priority: "İştirak"
  },
  {
    id: "ann-32",
    title: "Heidelberg Materials Technology Center Süreç Teknolojisi Tehdit Algılama",
    body: "Holding ve tüm iştiraklerin bulut ağlarındaki anormal giriş denemelerini tespit eden yapay zeka siber kalkanı kuruldu.",
    scope: "İştirak",
    companyId: "heidelberg-materials-htc",
    country: "DE",
    city: "Leimen",
    campus: "Heidelberg Materials Technology Center Leimen",
    department: "Siber Güvenlik",
    authorId: "p02",
    time: "Bugün 12:45",
    priority: "İştirak"
  },
  {
    id: "ann-33",
    title: "Heidelberg Materials Poland Mobil Kalite Tespit Uygulaması",
    body: "Saha eksperlerinin mobil tabletler üzerinden hızlıca hasar dosyası açmasını sağlayan bulut veri tabanı senkronizasyonu tamamlandı.",
    scope: "İştirak",
    companyId: "heidelberg-materials-poland",
    country: "DE",
    city: "Heidelberg",
    campus: "Opole Fabrika",
    department: "Hasar Yönetimi",
    authorId: "p05",
    time: "Bugün 14:00",
    priority: "İştirak"
  },
  {
    id: "ann-34",
    title: "Heidelberg Materials Northern Europe Müşteri Kaybı (Churn) Tahminleme Modeli",
    body: "Yapay zeka modelleriyle BES iptal eğiliminde olan müşterileri 3 ay önceden belirleyen proaktif arama robotu.",
    scope: "İştirak",
    companyId: "heidelberg-materials-northern-europe",
    country: "DE",
    city: "Heidelberg",
    campus: "Brevik Fabrika",
    department: "Dijital Kanallar",
    authorId: "u5",
    time: "Dün 17:30",
    priority: "İştirak"
  },
  {
    id: "ann-44",
    title: "Heidelberg Materials Altın Yaka İnovasyon Ödülleri Açıklandı",
    body: "Bu yılki Altın Yaka inovasyon kategorilerinde dereceye giren fikir sahiplerine toplamda 500.000 HM ödül dağıtılacaktır.",
    scope: "Holding geneli",
    companyId: "heidelberg-materials",
    country: "DE",
    city: "Heidelberg",
    campus: "Heidelberg Materials Hauptmerkez",
    department: "İnovasyon",
    authorId: "p01",
    time: "Bugün 09:30",
    priority: "Yönetici duyurusu"
  },
  {
    id: "ann-45",
    title: "Heidelberg Materials Yeşil Üretim Paketleri",
    body: "Sürdürülebilirlik skoru yüksek olan grup şirketlerine özel fonlama ve yeşil tahvil ihracı borsa tahtasına eklenmiştir.",
    scope: "İştirak",
    companyId: "heidelberg-materials-de",
    country: "DE",
    city: "Heidelberg",
    campus: "Heidelberg Materials Hauptmerkez",
    department: "Kurumsal Bankacılık",
    authorId: "u3",
    time: "Dün 10:00",
    priority: "İştirak"
  },
  {
    id: "ann-46",
    title: "Hanson UK Garanti Otomasyonu",
    body: "Kullanıcıların satın aldığı elektronik cihazların garanti ve servis takibini tamamen dijitalleştiren altyapı devreye girdi.",
    scope: "İştirak",
    companyId: "hanson-uk",
    country: "DE",
    city: "Heidelberg",
    campus: "Hanson UK HQ",
    department: "Müşteri Deneyimi",
    authorId: "u1",
    time: "3 gün önce",
    priority: "İştirak"
  },
  {
    id: "ann-47",
    title: "Heidelberg Materials NA Mobil Kampanya Önerileri",
    body: "Müşterinin geçmiş satın alma alışkanlıklarına göre markette yürürken anlık bildirimle kupon sunan AI motoru.",
    scope: "İştirak",
    companyId: "heidelberg-materials-na",
    country: "DE",
    city: "Heidelberg",
    campus: "Heidelberg Materials NA Plaza",
    department: "Kategori Yönetimi",
    authorId: "u2",
    time: "Dün 15:00",
    priority: "İştirak"
  },
  {
    id: "ann-48",
    title: "Indocement Şarj İstasyon Ağı Genişlemesi",
    body: "Almanya genelindeki otoban ve AVM otoparklarına kurulacak yeni DC yüksek hızlı şarj istasyon yerleşim optimizasyon fikirleri.",
    scope: "İştirak",
    companyId: "indocement",
    country: "DE",
    city: "Heidelberg",
    campus: "Indocement HQ",
    department: "Yeşil Enerji",
    authorId: "p05",
    time: "Bugün 11:00",
    priority: "İştirak"
  },
  {
    id: "ann-49",
    title: "CBR Lixhe Fabrikası IoT Bulut Entegrasyonu",
    body: "Üretim hattındaki pres makinelerinin titreşim sensör verileri Azure bulut ortamına anlık olarak aktarılmaya başlandı.",
    scope: "İştirak",
    companyId: "cbr-belgium",
    country: "DE",
    city: "Lixhe",
    campus: "Lixhe Fabrika",
    department: "Üretim",
    authorId: "u4",
    time: "Bugün 12:00",
    priority: "İştirak"
  },
  {
    id: "ann-50",
    title: "Heidelberg Materials India Havacılık İçin Hafif Prepreg Malzemeler",
    body: "Boeing ve Airbus parça standartlarına tam uyumlu, epoksi reçineli karbon elyaf kompozitlerin seri üretimi onaylandı.",
    scope: "İştirak",
    companyId: "heidelberg-materials-india",
    country: "DE",
    city: "Mumbai",
    campus: "Mumbai Fabrika",
    department: "Kompozit Teknolojileri",
    authorId: "p03",
    time: "Dün 13:00",
    priority: "İştirak"
  },
  {
    id: "ann-51",
    title: "Heidelberg Materials Enerji Verimli Öğütme Teknolojisi",
    body: "Helvan fabrikasındaki dikey çimento değirmenlerinin tahrik motorlarında yapılan modifikasyonla elektrik tüketimi %12 azaltıldı.",
    scope: "İştirak",
    companyId: "heidelberg-materials-egypt",
    country: "DE",
    city: "Helvan",
    campus: "Helvan Fabrika",
    department: "Üretim",
    authorId: "p03",
    time: "Bugün 10:45",
    priority: "İştirak"
  },
  {
    id: "ann-52",
    title: "Heidelberg Materials France Fabrika İçi Dijital İkiz (Digital Twin)",
    body: "Marsilya otobüs montaj hattının tüm fiziksel süreçleri 3D dijital ikiz simülasyonuna aktarılarak darboğazlar tespit edildi.",
    scope: "İştirak",
    companyId: "heidelberg-materials-france",
    country: "DE",
    city: "Marsilya",
    campus: "Marsilya Fabrika",
    department: "Üretim",
    authorId: "p04",
    time: "Dün 14:30",
    priority: "İştirak"
  },
  {
    id: "ann-53",
    title: "Heidelberg Materials Technology Center Blokzincir Tabanlı Akıllı Tedarik",
    body: "İştirakler arası malzeme tedarik sözleşmelerinin akıllı kontratlarla otomatik onaylanmasını sağlayan blokzincir altyapısı.",
    scope: "İştirak",
    companyId: "heidelberg-materials-htc",
    country: "DE",
    city: "Leimen",
    campus: "Heidelberg Materials Technology Center Leimen",
    department: "Bulut Teknolojileri",
    authorId: "p02",
    time: "Bugün 13:30",
    priority: "İştirak"
  },
  {
    id: "ann-54",
    title: "Heidelberg Materials Poland Yenilikçi Müşteri Ekranları",
    body: "Mobil uygulama üzerinden pati fotoğraflarıyla evcil hayvan kimlik tespiti ve hızlı sigorta poliçesi oluşturma modülü.",
    scope: "İştirak",
    companyId: "heidelberg-materials-poland",
    country: "DE",
    city: "Heidelberg",
    campus: "Opole Fabrika",
    department: "Müşteri Deneyimi",
    authorId: "p05",
    time: "Bugün 15:30",
    priority: "İştirak"
  },
  {
    id: "ann-55",
    title: "Heidelberg Materials Northern Europe Robotik Süreç Otomasyonu (RPA)",
    body: "İşe alım, bordrolama ve çalışan kartı basım gibi standart İK süreçleri robot yazılımlarla saniyeler içinde tamamlanıyor.",
    scope: "İştirak",
    companyId: "heidelberg-materials-northern-europe",
    country: "DE",
    city: "Heidelberg",
    campus: "Brevik Fabrika",
    department: "İnsan Kaynakları",
    authorId: "u5",
    time: "Dün 11:30",
    priority: "İştirak"
  },

  // United Kingdom (GB)
  {
    id: "ann-3",
    title: "Heidelberg Materials Trading Wind Grid Connection Update",
    body: "The UK wind grid integration project will collect and evaluate smart distribution ideas. Open to all operations and grid team members.",
    scope: "Holding geneli",
    companyId: "heidelberg-materials-trading",
    country: "GB",
    city: "Londra",
    campus: "Dubai Trading Hub",
    department: "Operations",
    authorId: "p06",
    time: "Dün 10:45",
    priority: "Yönetici duyurusu"
  },
  {
    id: "ann-17",
    title: "Hanson UK Sales Portal Goes Live",
    body: "Distributors across the UK can now order high-strength white cement via our integrated B2B online sales platform.",
    scope: "İştirak",
    companyId: "hanson-uk",
    country: "GB",
    city: "Londra",
    campus: "Hanson UK HQ",
    department: "Sales",
    authorId: "p07",
    time: "Bugün 10:00",
    priority: "İştirak"
  },
  {
    id: "ann-18",
    title: "CBR Belgium Aerospace Composites Collaboration",
    body: "Partnering with UK aerospace engineering hubs to prototype ultra-thin epoxy prepregs for next-gen commercial jet wings.",
    scope: "İştirak",
    companyId: "cbr-belgium",
    country: "GB",
    city: "Londra",
    campus: "Dubai Trading Hub",
    department: "R&D",
    authorId: "p08",
    time: "Dün 14:00",
    priority: "İştirak"
  },
  {
    id: "ann-35",
    title: "Heidelberg Materials Trading Wind Farm Expansion Study",
    body: "Conducting feasibility checks for offshore wind farm grid connections in the North Sea. Submit storage optimization plans.",
    scope: "Holding geneli",
    companyId: "heidelberg-materials-trading",
    country: "GB",
    city: "Londra",
    campus: "Dubai Trading Hub",
    department: "Investment",
    authorId: "p06",
    time: "Dün 16:30",
    priority: "Yönetici duyurusu"
  },
  {
    id: "ann-36",
    title: "Hanson UK Carbon Emission Ledger Integration",
    body: "Import logistics fleet fuel optimization will be tracked using blockchain data. Submit routing suggestions.",
    scope: "İştirak",
    companyId: "hanson-uk",
    country: "GB",
    city: "Londra",
    campus: "Hanson UK HQ",
    department: "Logistics",
    authorId: "p07",
    time: "2 gün önce",
    priority: "İştirak"
  },

  // United States (US)
  {
    id: "ann-4",
    title: "Houston White Cement Packing Automation Trial",
    body: "Heidelberg Materials North America is starting a trial for high-speed bagging line automation. Submit your suggestions to reduce dust emissions.",
    scope: "İştirak",
    companyId: "heidelberg-materials-na",
    country: "US",
    city: "Houston",
    campus: "Dallas Office",
    department: "Operations",
    authorId: "p11",
    time: "Bugün 08:00",
    priority: "İştirak"
  },
  {
    id: "ann-19",
    title: "Hanson Australia Aggregates Investment Campaign",
    body: "Inviting proposals for software logic to manage utility-scale battery dispatch operations in Melbourne sites.",
    scope: "Holding geneli",
    companyId: "hanson-australia",
    country: "US",
    city: "Austin",
    campus: "Sydney HQ",
    department: "Energy Storage",
    authorId: "p10",
    time: "Bugün 09:15",
    priority: "Yönetici duyurusu"
  },
  {
    id: "ann-20",
    title: "Heidelberg Materials India Capacity Boost",
    body: "Chattanooga facility is expanding high-tenacity nylon yarn dipping lines to meet surging EV tire market demand.",
    scope: "İştirak",
    companyId: "heidelberg-materials-india",
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
    title: "Hanson Australia Quarry Battery Storage Pilot",
    body: "Testing modular battery containers in our Texas facility. Submit predictive thermal cooling algorithm ideas.",
    scope: "Holding geneli",
    companyId: "hanson-australia",
    country: "US",
    city: "Austin",
    campus: "Sydney HQ",
    department: "Energy Storage",
    authorId: "p10",
    time: "3 gün önce",
    priority: "Yönetici duyurusu"
  },
  {
    id: "ann-38",
    title: "Heidelberg Materials North America Dallas Order Tracking App",
    body: "Customer portal launch allows dry bulk trucks to register pickup times, cutting waiting queues in terminal by 40%.",
    scope: "İştirak",
    companyId: "heidelberg-materials-na",
    country: "US",
    city: "Houston",
    campus: "Dallas Office",
    department: "Operations",
    authorId: "p11",
    time: "Bugün 10:20",
    priority: "İştirak"
  },
  {
    id: "ann-39",
    title: "Heidelberg Materials India Industry 4.0 IoT Enabler Project",
    body: "Vibration sensors installed on yarn twisting spindles detect early mechanical failures, boosting runtime safety.",
    scope: "İştirak",
    companyId: "heidelberg-materials-india",
    country: "US",
    city: "Chattanooga",
    campus: "Chattanooga Facility",
    department: "Technical Services",
    authorId: "p12",
    time: "Dün 15:40",
    priority: "İştirak"
  },

  // Italy (IT)
  {
    id: "ann-5",
    title: "Opole Mobility Lab Hydrogen bus test trials",
    body: "Heidelberg Materials Poland is launching hydrogen-powered bus suburban test routes. Please register route optimization ideas.",
    scope: "İştirak",
    companyId: "heidelberg-materials-poland",
    country: "IT",
    city: "Opole",
    campus: "Opole Mobility Lab",
    department: "Mobility Lab",
    authorId: "p14",
    time: "2 gün önce",
    priority: "İştirak"
  },
  {
    id: "ann-21",
    title: "Heidelberg Materials France Lyon Depo Capacity Expansion",
    body: "New bulk silo installations are complete. Looking for high-throughput dry packaging system vendor recommendations.",
    scope: "İştirak",
    companyId: "heidelberg-materials-france",
    country: "IT",
    city: "Hamburg",
    campus: "Lyon Depo",
    department: "Logistics",
    authorId: "p13",
    time: "Bugün 11:30",
    priority: "İştirak"
  },
  {
    id: "ann-40",
    title: "Heidelberg Materials France Digital Logistics System Upgrade",
    body: "Integrating SAP logistics module with Lyon port terminal scheduler to automate customs clearance documentation.",
    scope: "İştirak",
    companyId: "heidelberg-materials-france",
    country: "IT",
    city: "Hamburg",
    campus: "Lyon Depo",
    department: "Logistics",
    authorId: "p13",
    time: "Dün 16:15",
    priority: "İştirak"
  },
  {
    id: "ann-41",
    title: "Heidelberg Materials Poland Autonomous Suburban Shuttle Track",
    body: "Testing level-4 self-driving buses on designated Opole lab courses. Submit sensor fusion algorithm ideas.",
    scope: "İştirak",
    companyId: "heidelberg-materials-poland",
    country: "IT",
    city: "Opole",
    campus: "Opole Mobility Lab",
    department: "Mobility Lab",
    authorId: "p14",
    time: "Dün 10:00",
    priority: "İştirak"
  },

  // Belgium (BE)
  {
    id: "ann-6",
    title: "Helvan plant solar micro-grid integration",
    body: "Heidelberg Materials Spain is collecting technical designs for integration of solar arrays to feed white cement rotary kilns.",
    scope: "İştirak",
    companyId: "heidelberg-materials-spain",
    country: "BE",
    city: "Helvan",
    campus: "Helvan Plant",
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
    companyId: "heidelberg-materials-spain",
    country: "BE",
    city: "Madrid",
    campus: "Madrid Hub",
    department: "R&D",
    authorId: "p16",
    time: "Dün 14:00",
    priority: "İştirak"
  },
  {
    id: "ann-42",
    title: "Heidelberg Materials Spain Helvan Alternative Fuel Licensing",
    body: "Approved by local government to substitute 50% of kiln fuel with non-hazardous waste wood. Submit feed logic plans.",
    scope: "İştirak",
    companyId: "heidelberg-materials-spain",
    country: "BE",
    city: "Helvan",
    campus: "Helvan Plant",
    department: "Production",
    authorId: "p15",
    time: "Bugün 14:15",
    priority: "İştirak"
  },
  {
    id: "ann-43",
    title: "Heidelberg Materials Spain Digital White Cement Catalog",
    body: "Launching our interactive digital spec sheets for architects and contractors across Western Europe. Feedbacks are welcome.",
    scope: "İştirak",
    companyId: "heidelberg-materials-spain",
    country: "BE",
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
    name: "Heidelberg Materials Global Flow",
    description: "Tüm grup şirketleri inovasyon temsilcileri akışı.",
    companyId: "heidelberg-materials",
    scope: "Holding geneli",
    members: ["p01", "p02", "p05", "p06", "p10", "p15"],
    messages: [
      { userId: "p02", body: "Bu hafta Heidelberg Materials Technology Center olarak yapay zeka analiz motorunu çoklu dil desteğine uyarladık. Almanca ve İspanyolca fikirler de artık otomatik puanlanabiliyor.", time: "09:22" },
      { userId: "p01", body: "Harika! Heidelberg Materials sürdürülebilirlik fonlama fikrini de borsa tahtasına aldık, Heidelberg Materials Coin bakiyelerinizi kontrol edin.", time: "09:27" },
      { userId: "p10", body: "Texas solar farm energy storage designs are uploaded. Ready for group strategy review.", time: "10:14" },
      { userId: "p15", body: "We started carbon capture trials in Helvan. Cement clinker performance remains excellent.", time: "11:35" }
    ]
  },
  {
    id: "msg-heidelberg-materials-de",
    name: "Heidelberg Materials Innovation Room",
    description: "Heidelberg Materials dijital üretim ve süreç teknolojileri grubu.",
    companyId: "heidelberg-materials-de",
    scope: "İştirak",
    members: ["p02", "p05", "u3", "u4", "u5"],
    messages: [
      { userId: "u3", body: "KOBİ'ler için geliştirdiğimiz yeşil üretim API'leri test ortamında stabil çalışıyor. Fikirlerinizi bekliyoruz.", time: "10:05" },
      { userId: "p05", body: "Lena Hanım, sürdürülebilirlik puan kartı servisini de bu API ile bağlayabiliriz. Entegrasyon dokümanını inceledim.", time: "10:14" },
      { userId: "p02", body: "Yapay zeka analiz modelimiz de KOBİ işlem geçmişini tarayıp karbon emisyon katsayısı üretebiliyor. Heidelberg Materials veritabanıyla entegre edebiliriz.", time: "10:30" },
      { userId: "u5", body: "BES tarafındaki tasarruf verilerini de buraya akıtıp bireysel kullanıcılara çevre rozeti dağıtabiliriz.", time: "11:15" }
    ]
  },
  {
    id: "msg-heidelberg-materials-egypt",
    name: "Heidelberg Materials Green Tech",
    description: "Heidelberg Materials sürdürülebilirlik, alternatif yakıt ve karbon emisyonu azaltma grubu.",
    companyId: "heidelberg-materials-egypt",
    scope: "İştirak",
    members: ["p03", "p07", "p11", "p13", "p15", "p16"],
    messages: [
      { userId: "p15", body: "We are preparing tests for hydrogen injection in Helvan plant. I hope we can reduce CO2 emissions by another 8%.", time: "11:12" },
      { userId: "p16", body: "Carlos, I uploaded the chemical analysis of the clinker from the preliminary test. The mineral properties remain solid.", time: "11:25" },
      { userId: "p03", body: "Helvan fabrikasından selamlar! Biz de döner fırınlarda atık çamur yakma otomasyon projesinin verilerini sisteme yükledik.", time: "12:00" },
      { userId: "p13", body: "Lyon depo stands ready to receive the low-carbon white cement batches from Spain. German clients are asking for ESG metrics.", time: "12:45" },
      { userId: "p11", body: "Houston packing automation will also reduce dust emissions. Ready to trial this month.", time: "13:10" }
    ]
  },
  {
    id: "msg-heidelberg-materials-india",
    name: "Heidelberg Materials India Material Lab",
    description: "Heidelberg Materials India kompozit malzemeler ve yeni nesil tekstil geliştirme grubu.",
    companyId: "heidelberg-materials-india",
    scope: "İştirak",
    members: ["p03", "p08", "p12", "u9", "u10"],
    messages: [
      { userId: "p12", body: "We have finalized testing the graphene-infused nylon yarn in Chattanooga. Tensile strength increased by 18%.", time: "14:20" },
      { userId: "p08", body: "Excellent Robert! London Tech team is interested in testing these fibers for aviation grade composites. Send us the raw data.", time: "14:45" },
      { userId: "p03", body: "Lixhe Fabrika Ar-Ge ekibi olarak, geri dönüştürülmüş PET hammaddeli kord bezlerimizin yorulma test sonuçlarını sisteme kaydettik.", time: "15:15" }
    ]
  },
  {
    id: "msg-heidelberg-materials-france",
    name: "Heidelberg Materials Poland Smart Mobility",
    description: "Heidelberg Materials France elektrikli ve hidrojen otobüs prototip analizleri.",
    companyId: "heidelberg-materials-france",
    scope: "İştirak",
    members: ["p04", "p14", "u13"],
    messages: [
      { userId: "p14", body: "The hydrogen suburban bus trials in Opole are starting next Monday. We need to verify tank pressure telemetries.", time: "09:30" },
      { userId: "p04", body: "Dieter, Marsilya ekibi olarak otobüsün BMS (Batarya Yönetim) yazılımındaki rejeneratif frenleme güncellemesini pushladık. Uzaktan güncelleyebilirsiniz.", time: "10:15" },
      { userId: "u13", body: "Telemetry system is online. We can monitor everything from the Opole lab console. Let's run the first battery cycle.", time: "10:45" }
    ]
  },
  {
    id: "msg-hanson-uk",
    name: "Hanson UK Retail Circle",
    description: "Hanson UK mağaza içi deneyim ve omni-channel perakende teknolojileri.",
    companyId: "hanson-uk",
    scope: "İştirak",
    members: ["u1", "u2", "p02"],
    messages: [
      { userId: "u1", body: "Mağaza içi otonom ödeme kiosklarımızın tasarımı tamamlandı. Kadıköy pilot mağazamızda kuruluma başlıyoruz.", time: "13:10" },
      { userId: "u2", body: "Heidelberg Materials NA olarak biz de kasasız mağaza konseptini inceliyoruz. Lojistik ve etiket entegrasyonunda ortak çalışabiliriz.", time: "13:30" },
      { userId: "p02", body: "Yapay zeka ekibimiz kiosk ekranlarına kişiye özel ürün öneri motoru entegre edebilir. API bağlantılarını hazırladık.", time: "14:05" }
    ]
  },
  {
    id: "msg-dx",
    name: "Heidelberg Materials Technology Center AI & Analytics Hub",
    description: "Heidelberg Materials Technology Center yapay zekâ, GenAI ve büyük veri analitiği hub'ı.",
    companyId: "heidelberg-materials-htc",
    scope: "İştirak",
    members: ["p02", "p05", "u3", "u4"],
    messages: [
      { userId: "p02", body: "Borsa verilerindeki dalgalanmaları ve AI sinyal skorlarını tahminleyen yeni bir GenAI asistan modeli üzerinde çalışıyoruz.", time: "15:12" },
      { userId: "u4", body: "Harika Mert. Bu modeli holding genel kurulunda strateji sunumuna dahil edelim. Canlı demo yapabilir miyiz?", time: "15:30" },
      { userId: "p02", body: "Tabii Markus Bey, arayüze özel bir widget ekledik. Canlı veri özetleme fonksiyonu şu an aktif.", time: "15:45" }
    ]
  },
  {
    id: "msg-renewables",
    name: "Renewables Clean Energy",
    description: "Heidelberg Materials Trading temiz enerji ve batarya optimizasyonu grubu.",
    companyId: "heidelberg-materials-trading",
    scope: "Holding geneli",
    members: ["p06", "p10", "u7", "u8"],
    messages: [
      { userId: "p10", body: "We are installing utility-scale battery dispatch logic in our Melbourne site. This will trade power during peak hours.", time: "16:22" },
      { userId: "p06", body: "Michael, UK wind grids are also implementing similar battery storage dispatch. We should share the pricing models.", time: "16:45" },
      { userId: "u8", body: "Agreed. I am compiling the regulatory framework for energy trading in both markets to build a unified algorithm.", time: "17:15" }
    ]
  },
  {
    id: "msg-insurance",
    name: "InsurTech Circle",
    description: "Heidelberg Materials Poland ve Heidelberg Materials Northern Europe yeni nesil dijital sigortacılık fikir odası.",
    companyId: "heidelberg-materials-poland",
    scope: "İştirak",
    members: ["p05", "u5", "u11"],
    messages: [
      { userId: "p05", body: "Yapay zeka tabanlı oto hasar tespiti pilot projemiz hasar ödeme sürelerini %80 kısalttı.", time: "11:20" },
      { userId: "u5", body: "Bu teknolojiyi Heidelberg Materials Northern Europe'un üretim sağlık beyanı doğrulama süreçlerine de uyarlayabilir miyiz?", time: "11:45" },
      { userId: "u11", body: "US insurtech trends show image based claim validation is rising fast. We should coordinate a joint workshop.", time: "12:15" }
    ]
  },
  {
    id: "msg-holding-hr",
    name: "Heidelberg Materials Global HR & Talent",
    description: "Holding geneli çalışan deneyimi ve yetenek yönetimi grubu.",
    companyId: "heidelberg-materials",
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
  // DE Users
  {
    id: "u1",
    name: "Ayşe Yılmaz",
    email: "ayse.yilmaz@heidelbergmaterials.example",
    employeeId: "HM-10452",
    company: "Hanson UK Ltd.",
    companyId: "hanson-uk",
    department: "Müşteri Deneyimi",
    location: "Hanson UK HQ",
    city: "Heidelberg",
    region: "Baden-Württemberg",
    role: "Kategori Uzmanı",
    roleKey: "employee",
    seniority: "Uzman",
    isManager: false,
    isAdmin: false,
    voteCreditBalance: 17,
    monthlyVoteCredit: 30,
    badges: ["İlk Fikir", "Aktif Katılımcı", "AI ile Güçlendirilmiş Fikir"],
    country: "DE"
  },
  {
    id: "u2",
    name: "Mehmet Demir",
    email: "mehmet.demir@heidelbergmaterials.example",
    employeeId: "HM-88312",
    company: "Heidelberg Materials North America LLC",
    companyId: "heidelberg-materials-na",
    department: "Mağaza Operasyonları",
    location: "Maltepe Depo",
    city: "Heidelberg",
    region: "Baden-Württemberg",
    role: "Lojistik Saha Görevlisi",
    roleKey: "field",
    seniority: "Saha çalışanı",
    isManager: false,
    isAdmin: false,
    voteCreditBalance: 21,
    monthlyVoteCredit: 30,
    badges: ["İlk Fikir", "Müşteri Deneyimi Katkısı"],
    country: "DE"
  },
  {
    id: "u3",
    name: "Lena Fischer",
    email: "can.koc@heidelbergmaterials.example",
    employeeId: "HM-22018",
    company: "Heidelberg Materials AG",
    companyId: "heidelberg-materials-de",
    department: "Dijital Bankacılık",
    location: "Heidelberg Materials Hauptmerkez",
    city: "Heidelberg",
    region: "Baden-Württemberg",
    role: "İnovasyon Yöneticisi",
    roleKey: "manager",
    seniority: "Yönetici",
    isManager: true,
    isAdmin: false,
    voteCreditBalance: 24,
    monthlyVoteCredit: 40,
    badges: ["Ekipler Arası Köprü", "Pilot Proje Katılımcısı"],
    country: "DE",
    supportedIdeas: ["idea-1", "idea-2", "idea-3"]
  },
  {
    id: "u4",
    name: "Markus Bauer",
    email: "markus.bauer@heidelbergmaterials.example",
    employeeId: "HM-01004",
    company: "Heidelberg Materials AG",
    companyId: "heidelberg-materials",
    department: "Strateji",
    location: "Heidelberg Materials Hauptmerkez",
    city: "Heidelberg",
    region: "Baden-Württemberg",
    role: "Holding Yöneticisi",
    roleKey: "executive",
    seniority: "C-level",
    isManager: true,
    isAdmin: true,
    voteCreditBalance: 38,
    monthlyVoteCredit: 50,
    badges: ["İnovasyon Sprinti Kazananı", "Maliyet Azaltma Katkısı", "En Faydalı Yorumcu"],
    country: "DE"
  },
  {
    id: "u5",
    name: "Merve Aydın",
    email: "merve.aydin@heidelbergmaterials.example",
    employeeId: "HM-55102",
    company: "Heidelberg Materials Northern Europe AS",
    companyId: "heidelberg-materials-northern-europe",
    department: "İnsan Kaynakları",
    location: "Brevik Fabrika",
    city: "Heidelberg",
    region: "Baden-Württemberg",
    role: "İK Yöneticisi",
    roleKey: "hr",
    seniority: "Kıdemli uzman",
    isManager: true,
    isAdmin: false,
    voteCreditBalance: 29,
    monthlyVoteCredit: 35,
    badges: ["Çalışan Deneyimi Katkısı", "Aktif Katılımcı"],
    country: "DE"
  },
  // GB Users
  {
    id: "u6",
    name: "Sarah Jenkins",
    email: "sarah.jenkins@heidelbergmaterials.example",
    employeeId: "HM-UK-021",
    company: "Hanson UK Ltd.",
    companyId: "hanson-uk",
    department: "Sales",
    location: "London HQ",
    city: "Londra",
    region: "London",
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
    email: "john.sterling@heidelbergmaterials.example",
    employeeId: "HM-UK-001",
    company: "Heidelberg Materials Trading FZE",
    companyId: "heidelberg-materials-trading",
    department: "Operations",
    location: "Dubai Trading Hub",
    city: "Londra",
    region: "London",
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
    email: "oliver.watson@heidelbergmaterials.example",
    employeeId: "HM-UK-002",
    company: "Heidelberg Materials AG",
    companyId: "heidelberg-materials",
    department: "Strategy",
    location: "London HQ",
    city: "Londra",
    region: "London",
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
    email: "emily.rose@heidelbergmaterials.example",
    employeeId: "HM-US-015",
    company: "Heidelberg Materials North America LLC",
    companyId: "heidelberg-materials-na",
    department: "Operations",
    location: "Dallas Office",
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
    email: "michael.vance@heidelbergmaterials.example",
    employeeId: "HM-US-001",
    company: "Hanson Australia Pty Ltd.",
    companyId: "hanson-australia",
    department: "Energy Storage",
    location: "Sydney HQ",
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
    email: "jessica.taylor@heidelbergmaterials.example",
    employeeId: "HM-US-002",
    company: "Heidelberg Materials AG",
    companyId: "heidelberg-materials",
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
  // IT Users
  {
    id: "u12",
    name: "Hans Müller",
    email: "hans.mueller@heidelbergmaterials.example",
    employeeId: "HM-IT-012",
    company: "Heidelberg Materials France S.A.S.",
    companyId: "heidelberg-materials-france",
    department: "Logistics",
    location: "Lyon Depo",
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
    country: "IT"
  },
  {
    id: "u13",
    name: "Dieter Schmidt",
    email: "dieter.schmidt@heidelbergmaterials.example",
    employeeId: "HM-IT-001",
    company: "Heidelberg Materials Polska Sp. z o.o.",
    companyId: "heidelberg-materials-poland",
    department: "Mobility Lab",
    location: "Opole Mobility Lab",
    city: "Opole",
    region: "Bayern",
    role: "Operations Manager",
    roleKey: "manager",
    seniority: "Manager",
    isManager: true,
    isAdmin: false,
    voteCreditBalance: 28,
    monthlyVoteCredit: 40,
    badges: ["Mobility Pioneer"],
    country: "IT"
  },
  // BE Users
  {
    id: "u14",
    name: "Carlos Ruiz",
    email: "carlos.ruiz@heidelbergmaterials.example",
    employeeId: "HM-BE-001",
    company: "Heidelberg Materials España S.A.",
    companyId: "heidelberg-materials-spain",
    department: "Production",
    location: "Helvan Plant",
    city: "Helvan",
    region: "Valencia",
    role: "Helvan Plant Manager",
    roleKey: "manager",
    seniority: "Manager",
    isManager: true,
    isAdmin: false,
    voteCreditBalance: 32,
    monthlyVoteCredit: 40,
    badges: ["Cement Pioneer"],
    country: "BE"
  },
  {
    id: "u15",
    name: "Maria Ortega",
    email: "maria.ortega@heidelbergmaterials.example",
    employeeId: "HM-BE-010",
    company: "Heidelberg Materials España S.A.",
    companyId: "heidelberg-materials-spain",
    department: "R&D",
    location: "Helvan Plant",
    city: "Helvan",
    region: "Valencia",
    role: "Sustainability Lead Analyst",
    roleKey: "employee",
    seniority: "Senior Analyst",
    isManager: false,
    isAdmin: false,
    voteCreditBalance: 20,
    monthlyVoteCredit: 30,
    badges: ["ESG Expert"],
    country: "BE"
  }
];

demoUsers.forEach(user => {
  user.avatarUrl = profilePhotos[user.id];
});

const initialIdeas = [
  // DE Ideas (German)
  {
    id: "idea-1",
    title: "Heidelberg Materials Mobil kullanıcıları için AI destekli yatırım danışmanı",
    summary: "Müşterilerin harcama alışkanlıkları ve risk eğilimlerine göre fon ve hisse sepeti öneren yapay zeka entegrasyonu.",
    problem: "Bireysel yatırımcılar karmaşık piyasa verileri yüzünden yatırım kararı almakta zorlanıyor.",
    solution: "Mobil şubeye entegre, portföy dağılımını otomatik yapıp öneriler sunan bir AI asistan modülü.",
    type: "Yeni ürün / hizmet",
    company: "Heidelberg Materials AG",
    companyId: "heidelberg-materials-de",
    department: "Dijital Bankacılık",
    location: "Heidelberg Materials Hauptmerkez",
    city: "Heidelberg",
    authorId: "u3",
    authorLabel: "Lena Fischer",
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
    country: "DE",
    comments: [
      { user: "Markus Bauer", body: "Çok değerli bir çalışma, Heidelberg Materials Lab ekibiyle test etmeye başlayalım.", manager: true },
      { user: "Ayşe Yılmaz", body: "Kullanıcı deneyimi akışını basitleştirmek kritik olacaktır.", manager: false }
    ],
    tags: ["FinTech", "AI", "Heidelberg Materials", "Yatırım"],
    createdAt: "2026-06-10",
    translations: {
          "tr": {
                "title": "Heidelberg Materials Mobil kullanıcıları için AI destekli yatırım danışmanı",
                "summary": "Müşterilerin harcama alışkanlıkları ve risk eğilimlerine göre fon ve hisse sepeti öneren yapay zeka entegrasyonu.",
                "problem": "Bireysel yatırımcılar karmaşık piyasa verileri yüzünden yatırım kararı almakta zorlanıyor.",
                "solution": "Mobil şubeye entegre, portföy dağılımını otomatik yapıp öneriler sunan bir AI asistan modülü."
          },
          "en": {
                "title": "AI-powered investment advisor for Heidelberg Materials Mobile users",
                "summary": "Artificial intelligence integration that suggests fund and stock portfolios based on customers' spending habits and risk tendencies.",
                "problem": "Retail investors struggle to make investment decisions due to complex market data.",
                "solution": "An AI assistant module integrated into the mobile branch, automating portfolio allocation and providing recommendations."
          },
          "de": {
                "title": "KI-gestützter Anlageberater für Heidelberg Materials Mobil-Nutzer",
                "summary": "KI-Integration, die Fonds- und Aktienportfolios basierend auf den Ausgabegewohnheiten und Risikoneigungen der Kunden vorschlägt.",
                "problem": "Kleinanleger tun sich aufgrund komplexer Marktdaten schwer, Anlageentscheidungen zu treffen.",
                "solution": "Ein in die mobile Filiale integriertes KI-Assistentenmodul, das die Portfolioallokation automatisiert und Empfehlungen bereitstellt."
          },
          "es": {
                "title": "Asesor de inversión impulsado por IA para usuarios de Heidelberg Materials Móvil",
                "summary": "Integración de inteligencia artificial que sugiere carteras de fondos y acciones según los hábitos de gasto y las tendencias de riesgo de los clientes.",
                "problem": "Los inversores minoristas tienen dificultades para tomar decisiones de inversión debido a la complejidad de los datos del mercado.",
                "solution": "Un módulo asistente de IA integrado en la sucursal móvil, que automatiza la asignación de carteras y ofrece recomendaciones."
          }
    }
  },
  {
    id: "idea-2",
    title: "Hanson UK mağazalarında akıllı tedarik ve dinamik raf ataması",
    summary: "Manchester lojistik merkezi verileriyle mağaza stoklarını anlık eşleyip en çok satan ürünleri öne çıkaran akıllı raf sistemi.",
    problem: "Bazı ürünler rafta uzun süre kalırken popüler teknolojik ürünlerin stoku hızlı bitiyor ve satış kaçıyor.",
    solution: "Satış hızı ve lojistik transit sürelerini tahminleyen yapay zeka destekli bir mağaza stok paneli.",
    type: "Süreç otomasyonu",
    company: "Hanson UK Ltd.",
    companyId: "hanson-uk",
    department: "Tedarik Zinciri",
    location: "Hanson UK HQ",
    city: "Heidelberg",
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
    country: "DE",
    comments: [
      { user: "Lena Fischer", body: "Manchester deposundaki otomasyon sistemleri ile entegre edilirse harika olur.", manager: true }
    ],
    tags: ["Perakende", "Tedarik", "Hanson UK", "Akıllı Raf"],
    createdAt: "2026-06-12",
    translations: {
          "tr": {
                "title": "Hanson UK mağazalarında akıllı tedarik ve dinamik raf ataması",
                "summary": "Manchester lojistik merkezi verileriyle mağaza stoklarını anlık eşleyip en çok satan ürünleri öne çıkaran akıllı raf sistemi.",
                "problem": "Bazı ürünler rafta uzun süre kalırken popüler teknolojik ürünlerin stoku hızlı bitiyor ve satış kaçıyor.",
                "solution": "Satış hızı ve lojistik transit sürelerini tahminleyen yapay zeka destekli bir mağaza stok paneli."
          },
          "en": {
                "title": "Smart procurement and dynamic shelf allocation in Hanson UK stores",
                "summary": "Smart shelf system that instantly matches store stocks with Manchester logistics center data and highlights the best-selling products.",
                "problem": "Some products stay on the shelf for a long time while popular technology products run out of stock quickly, causing lost sales.",
                "solution": "An AI-powered store stock panel that predicts sales speed and logistics transit times."
          },
          "de": {
                "title": "Intelligente Beschaffung und dynamische Regalzuweisung in Hanson UK-Filialen",
                "summary": "Intelligentes Regalsystem, das die Filialbestände sofort mit den Daten des Logistikzentrums Manchester abgleicht und Bestseller hervorhebt.",
                "problem": "Einige Produkte bleiben lange im Regal, während beliebte Technologieprodukte schnell ausverkauft sind, was zu Umsatzeinbußen führt.",
                "solution": "Ein KI-gestütztes Filialbestands-Panel, das Verkaufsgeschwindigkeiten und Logistiklaufzeiten vorhersagt."
          },
          "es": {
                "title": "Abastecimiento inteligente y asignación dinámica de estanterías en tiendas Hanson UK",
                "summary": "Sistema de estanterías inteligentes que sincroniza al instante el stock de la tienda con el centro logístico de Manchester y destaca los más vendidos.",
                "problem": "Algunos productos permanecen en el estante mucho tiempo, mientras que los tecnológicos populares se agotan rápido, perdiendo ventas.",
                "solution": "Un panel de control de stock impulsado por IA que predice la velocidad de venta y los tiempos de tránsito logístico."
          }
    }
  },
  {
    id: "idea-3",
    title: "CBR EV-Tire: Elektrikli araçlar için optimize edilmiş akıllı sensör",
    summary: "Ağır batarya yükü taşıyan elektrikli araç lastiklerinin aşınmasını ve hava basıncını anlık izleyen IoT modülü.",
    problem: "Elektrikli araçlarda batarya ağırlığı yüzünden lastikler %30 daha hızlı aşınıyor ve sürüş riski oluşuyor.",
    solution: "Lastik diş derinliğini ve sıcaklığını kablosuz olarak ölçüp araç ekranına ve telefona uyarı gönderen sensör.",
    type: "Yeni ürün / hizmet",
    company: "CBR S.A./N.V.",
    companyId: "cbr-belgium",
    department: "Ar-Ge",
    location: "Lixhe Fabrika",
    city: "Lixhe",
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
    country: "DE",
    comments: [],
    tags: ["Sanayi", "IoT", "Elektrikli Araç", "CBR"],
    createdAt: "2026-06-14",
    translations: {
          "tr": {
                "title": "CBR EV-Tire: Elektrikli araçlar için optimize edilmiş akıllı sensör",
                "summary": "Ağır batarya yükü taşıyan elektrikli araç lastiklerinin aşınmasını ve hava basıncını anlık izleyen IoT modülü.",
                "problem": "Elektrikli araçlarda batarya ağırlığı yüzünden lastikler %30 daha hızlı aşınıyor ve sürüş riski oluşuyor.",
                "solution": "Lastik diş derinliğini ve sıcaklığını kablosuz olarak ölçüp araç ekranına ve telefona uyarı gönderen sensör."
          },
          "en": {
                "title": "CBR EV-Tire: Optimized smart sensor for electric vehicles",
                "summary": "An IoT module that instantly monitors wear and air pressure of electric vehicle tyres carrying heavy battery loads.",
                "problem": "Electric vehicle tyres wear out 30% faster due to battery weight, causing driving risks.",
                "solution": "A wireless sensor that measures tyre tread depth and temperature, sending alerts to vehicle screen and phone."
          },
          "de": {
                "title": "CBR EV-Reifen: Optimierter smarter Sensor für Elektrofahrzeuge",
                "summary": "Ein IoT-Modul, das den Verschleiß und den Luftdruck von E-Fahrzeugreifen unter schwerer Batterielast sofort überwacht.",
                "problem": "Reifen von Elektrofahrzeugen nutzen sich aufgrund des Batteriegewichts 30 % schneller ab, was zu Fahrrisiken führt.",
                "solution": "Ein kabelloser Sensor, der Profiltiefe und Temperatur der Reifen misst und Warnungen an den Fahrzeugbildschirm und das Telefon sendet."
          },
          "es": {
                "title": "CBR EV-Neumático: Sensor inteligente optimizado para vehículos eléctricos",
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
    solution: "Implement an AI-based forecast panel in Dubai Trading Hub to feed real-time generation forecasts.",
    type: "Teknik geliştirme",
    company: "Heidelberg Materials Trading FZE",
    companyId: "heidelberg-materials-trading",
    department: "Operations",
    location: "Dubai Trading Hub",
    city: "Londra",
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
                "summary": "Birleşik Krallık şebeke eşleşmesi için enerji üretimini %95 doğrulukla tahmin etmek amacıyla geçmiş hava durumu ve rüzgar türbini telemetrisini kullanmak.",
                "problem": "Rüzgar değişkenliği güç dalgalanmasına yol açarak Birleşik Krallık şebeke talebini karşılamada verimsizlik yaratıyor.",
                "solution": "Gerçek zamanlı üretim tahminlerini beslemek için Londra Teknoloji Merkezi'nde yapay zeka tabanlı bir tahmin paneli uygulamak."
          },
          "en": {
                "title": "Off-shore wind forecasting using predictive AI models",
                "summary": "Using historical weather and wind turbine telemetry to predict energy output with 95% accuracy for UK grid matching.",
                "problem": "Wind variability causes power fluctuation, leading to inefficiencies in matching the UK grid demand.",
                "solution": "Implement an AI-based forecast panel in Dubai Trading Hub to feed real-time generation forecasts."
          },
          "de": {
                "title": "Offshore-Windvorhersage mit prädiktiven KI-Modellen",
                "summary": "Nutzung historischer Wetter- und Windkraftanlagen-Telemetriedaten zur Vorhersage der Energieerzeugung mit 95 % Genauigkeit für den britischen Netzabgleich.",
                "problem": "Windvariabilität führt zu Leistungsschwankungen und damit zu Ineffizienzen bei der Deckung des britischen Netzbedarfs.",
                "solution": "Implementierung eines KI-basierten Vorhersage-Panels im Dubai Trading Hub zur Bereitstellung von Echtzeit-Erzeugungsprognosen."
          },
          "es": {
                "title": "Predicción de viento marino mediante modelos predictivos de IA",
                "summary": "Uso de datos históricos del clima y telemetría de turbinas para predecir la producción de energía con un 95% de precisión para la red del Reino Unido.",
                "problem": "La variabilidad del viento causa fluctuaciones de energía, dificultando el ajuste a la demanda eléctrica del Reino Unido.",
                "solution": "Implementar un panel de pronóstico basado en IA en el Dubai Trading Hub para enviar previsiones de generación en tiempo real."
          }
    }
  },
  {
    id: "idea-5",
    title: "Dubai trading port bagging speedup through OCR barcode scan",
    summary: "Implement high-speed OCR cameras at London docks to automatically register incoming Heidelberg Materials white cement shipments.",
    problem: "Manual manifest entries at port warehouse cause logistic bottlenecks and delay deliveries to UK clients.",
    solution: "Deploy a small OCR camera rig on the crane pathway to scan shipping manifest barcodes automatically.",
    type: "Süreç otomasyonu",
    company: "Hanson UK Ltd.",
    companyId: "hanson-uk",
    department: "Logistics",
    location: "Hanson UK HQ",
    city: "Londra",
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
                "title": "OCR barkod tarama ile Dubai ticaret limanı torbalama hızlandırması",
                "summary": "Gelen Heidelberg Materials beyaz çimento sevkiyatlarını otomatik olarak kaydetmek için Londra limanlarında yüksek hızlı OCR kameraları uygulamak.",
                "problem": "Liman deposundaki manuel manifesto girişleri lojistik darboğazlara neden oluyor ve Birleşik Krallık müşterilerine teslimatları geciktiriyor.",
                "solution": "Sevkiyat manifestosu barkodlarını otomatik taramak için vinç yolu üzerine küçük bir OCR kamera sistemi yerleştirmek."
          },
          "en": {
                "title": "Dubai trading port bagging speedup through OCR barcode scan",
                "summary": "Implement high-speed OCR cameras at London docks to automatically register incoming Heidelberg Materials white cement shipments.",
                "problem": "Manual manifest entries at port warehouse cause logistic bottlenecks and delay deliveries to UK clients.",
                "solution": "Deploy a small OCR camera rig on the crane pathway to scan shipping manifest barcodes automatically."
          },
          "de": {
                "title": "Beschleunigung der Verpackung im Dubai-Handelshafen durch OCR-Barcodescan",
                "summary": "Implementierung von Hochgeschwindigkeits-OCR-Kameras in den Londoner Docks zur automatischen Erfassung eingehender Heidelberg Materials-Weißzementlieferungen.",
                "problem": "Manuelle Manifesteinträge im Hafenschuppen führen zu logistischen Engpässen und verzögern Lieferungen an Kunden in UK.",
                "solution": "Einsatz eines kleinen OCR-Kamerasystems auf dem Kranweg zum automatischen Scannen von Frachtbrief-Barcodes."
          },
          "es": {
                "title": "Aceleración del empaquetado en el puerto de comercio de Dubái mediante OCR",
                "summary": "Implementar cámaras OCR de alta velocidad en los muelles de Londres para registrar automáticamente los envíos de cemento blanco de Heidelberg Materials.",
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
    company: "Hanson Australia Pty Ltd.",
    companyId: "hanson-australia",
    department: "Energy Storage",
    location: "Melbourne Office",
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
      { user: "Jessica Taylor", body: "This will solidify Heidelberg Materials Trading position in the region.", manager: true }
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
    title: "Dallas office automated dry mortar packing line",
    summary: "Add a high-speed automatic bagging line at Dallas site warehouse to repack bulk Heidelberg Materials cement into US standard bags.",
    problem: "Bulk cement shipping limits distribution to small US contractors who demand standard palletized bags.",
    solution: "Deploy an automated bagging machine with robotic pallet arms at the Dallas office site.",
    type: "Operasyonel iyileştirme",
    company: "Heidelberg Materials North America LLC",
    companyId: "heidelberg-materials-na",
    department: "Operations",
    location: "Dallas Office",
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
                "title": "Dallas officei otomatik kuru harç paketleme hattı",
                "summary": "Dökme Heidelberg Materials çimentosunu ABD standart torbalarına yeniden paketlemek için Houston liman deposuna yüksek hızlı otomatik torbalama hattı eklemek.",
                "problem": "Dökme çimento nakliyesi, paletli standart torbalar talep eden küçük ABD müteahhitlerine dağıtımı sınırlandırıyor.",
                "solution": "Dallas office sahasına robotik palet kollarına sahip otomatik bir torbalama makinesi kurmak."
          },
          "en": {
                "title": "Dallas office automated dry mortar packing line",
                "summary": "Add a high-speed automatic bagging line at Dallas site warehouse to repack bulk Heidelberg Materials cement into US standard bags.",
                "problem": "Bulk cement shipping limits distribution to small US contractors who demand standard palletized bags.",
                "solution": "Deploy an automated bagging machine with robotic pallet arms at the Dallas office site."
          },
          "de": {
                "title": "Automatische Trockenmörtel-Verpackungslinie im Houston-Terminal",
                "summary": "Ergänzung einer automatischen Hochgeschwindigkeits-Absacklinie im Lagerhaus der Houstoner Docks zur Umverpackung von Heidelberg Materials-Zement.",
                "problem": "Schüttgut-Zementlieferungen schränken den Vertrieb an kleinere US-Bauunternehmen ein, die genormte Palettenware fordern.",
                "solution": "Einsatz einer automatischen Absackmaschine mit Roboterpalettierarmen am Terminalstandort in Houston."
          },
          "es": {
                "title": "Línea automática de envasado de mortero seco en terminal de Houston",
                "summary": "Agregar una línea de ensacado automático de alta velocidad en el almacén de Houston para reenvasar cemento Heidelberg Materials a sacos estándar.",
                "problem": "El envío de cemento a granel limita la distribución a contratistas pequeños de EE. UU. que exigen sacos paletizados estándar.",
                "solution": "Desplegar una máquina ensacadora automática con brazos robóticos de paletizado en la terminal de Houston."
          }
    }
  },

  // IT Ideas (English/Italian)
  {
    id: "idea-8",
    title: "Automatisiertes vertikales Klinkerlager in Opole",
    summary: "Optimierung des Opoleer Klinkerlagerplatzes durch Installation eines vertikalen automatisierten Lager- und Bereitstellungssystems (ASRS).",
    problem: "Die begrenzte Lagerfläche im Logistikzentrum Opole schränkt die Weißzementmenge ein, die wir lagern können.",
    solution: "Nutzung der vertikalen Höhe mit einem intelligenten robotischen Liftsystem, das Paletten automatisch stapelt und auslagert.",
    type: "Maliyet azaltma",
    company: "Heidelberg Materials France S.A.S.",
    companyId: "heidelberg-materials-france",
    department: "Logistics",
    location: "Paris Ofisi",
    city: "Opole",
    authorId: "u12",
    authorLabel: "Hans Müller",
    anonymity: "İsmimle paylaş",
    visibility: "Holding geneli",
    status: "review",
    estimatedImpact: "Yüksek",
    estimatedCost: "Orta",
    implementationTime: "4 months",
    successMetric: "Warehouse storage capacity increase per square meter",
    riskNotes: "Requires building permit from Opole city council.",
    communityScore: 80,
    strategicScore: 83,
    aiScore: 85,
    credits: 120,
    supporters: 29,
    marketChange: 1.1,
    country: "IT",
    comments: [
      { user: "Dieter Schmidt", body: "Excellent layout. Can serve as a template for other European cities.", manager: true }
    ],
    tags: ["Logistics", "ASRS", "Opole", "Warehouse"],
    createdAt: "2026-06-12",
    translations: {
          "tr": {
                "title": "Opole klinker otomatik dikey depolama tesisi",
                "summary": "Dikey otomatik depolama ve boşaltma sistemi (ASRS) kurarak Opole klinker deposu alanını optimize etmek.",
                "problem": "Opole lojistik merkezindeki sınırlı depo alanı, tutabileceğimiz beyaz çimento stok hacmini kısıtlıyor.",
                "solution": "Paletleri otomatik olarak üst üste yığan ve geri getiren akıllı bir robotik asansör sistemi ile dikey yüksekliği kullanmak."
          },
          "en": {
                "title": "Opole clinker automated vertical storage facility",
                "summary": "Optimize Opole clinker depot space by installing a vertical automated storage and retrieval system (ASRS).",
                "problem": "Limited warehouse footprint in Opole logistics center limits the white cement stock volume we can hold.",
                "solution": "Utilize vertical height with a smart robotic lift system that stacks and retrieves pallets automatically."
          },
          "de": {
                "title": "Automatisiertes vertikales Klinkerlager in Opole",
                "summary": "Optimierung des Opoleer Klinkerlagerplatzes durch Installation eines vertikalen automatisierten Lager- und Bereitstellungssystems (ASRS).",
                "problem": "Die begrenzte Lagerfläche im Logistikzentrum Opole schränkt die Weißzementmenge ein, die wir lagern können.",
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

  // BE Ideas (French/English)
  {
    id: "idea-9",
    title: "Piloto de captura y almacenamiento de carbono (CCS) en planta de cemento blanco de Helvan",
    summary: "Integrar un circuito piloto compacto de lavado de aminas de carbono para capturar CO2 directo de las chimeneas de Helvan.",
    problem: "La fabricación de clínker genera una huella de carbono significativa, arriesgando futuras multas ESG de la UE.",
    solution: "Un circuito piloto que captura hasta 10 toneladas de CO2 al día, comprimido para su uso industrial local.",
    type: "Sürdürülebilirlik",
    company: "Heidelberg Materials España S.A.",
    companyId: "heidelberg-materials-spain",
    department: "Production",
    location: "Helvan Plant",
    city: "Helvan",
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
    country: "BE",
    comments: [
      { user: "Maria Ortega", body: "This will make Helvan the cleanest white cement plant in Spain.", manager: false }
    ],
    tags: ["Carbon Capture", "ESG", "Spain", "Cement", "Sustainability"],
    createdAt: "2026-06-14",
    translations: {
          "tr": {
                "title": "Helvan beyaz çimento fabrikası karbon yakalama ve depolama (CCS) pilotu",
                "summary": "Helvan'daki döner klinker fırını bacalarından doğrudan CO2 yakalamak için kompakt bir karbon amin yıkama pilot döngüsü entegre etmek.",
                "problem": "Klinker üretimi önemli miktarda karbon ayak izi üreterek gelecekte AB ESG cezaları riskini doğuruyor.",
                "solution": "Yerel endüstriyel kullanım için sıkıştırılmış, günlük 10 tona kadar CO2 yakalayan küçük bir amin arıtma pilot döngüsü."
          },
          "en": {
                "title": "Helvan white cement plant carbon capture and storage (CCS) pilot",
                "summary": "Integrate a compact carbon amine scrubbing pilot loop to capture CO2 directly from clinker rotary kiln stacks in Helvan.",
                "problem": "Clinker manufacturing generates significant carbon footprint, risking future EU ESG penalties.",
                "solution": "A small amine scrubbing pilot loop capturing up to 10 tons of CO2 daily, compressed for local industrial use."
          },
          "de": {
                "title": "Pilotprojekt zur CO2-Abscheidung und -Speicherung (CCS) im Weißzementwerk Helvan",
                "summary": "Integration eines kompakten Aminwäsche-Pilotkreislaufs zur CO2-Abscheidung direkt aus den Klinker-Drehrohrofen-Schornsteinen in Helvan.",
                "problem": "Die Klinkerherstellung verursacht erhebliche Treibhausgase, was künftige EU-ESG-Strafen nach sich ziehen kann.",
                "solution": "Ein kleiner Aminwäsche-Pilotkreislauf, der täglich bis zu 10 Tonnen CO2 abscheidet und für die lokale Industrie komprimiert."
          },
          "es": {
                "title": "Piloto de captura y almacenamiento de carbono (CCS) en planta de cemento blanco de Helvan",
                "summary": "Integrar un circuito piloto compacto de lavado de aminas de carbono para capturar CO2 directo de las chimeneas de Helvan.",
                "problem": "La fabricación de clínker genera una huella de carbono significativa, arriesgando futuras multas ESG de la UE.",
                "solution": "Un circuito piloto que captura hasta 10 toneladas de CO2 al día, comprimido para su uso industrial local."
          }
    }
  }
];

const challenges = [
  // DE Challenges
  {
    id: "challenge-ops-wait",
    title: "Heidelberg Materials Dijital Üretim Hackathonu",
    theme: "Müşteri deneyimi",
    sector: "Finans",
    brief: "Kullanıcıların günlük harcamalarını analiz ederek tasarruf önerileri sunan fintech çözümleri.",
    date: "1 Haz - 30 Haz",
    deadline: "12 gün kaldı",
    reward: "75.000 HM + Hızlı Inovasyon Bütçesi",
    rewardType: "Terfi + Para",
    sponsor: "Heidelberg Materials İnovasyon Lab",
    status: "Aktif",
    ideas: 32,
    participants: 120,
    prizeIcon: "badge-dollar-sign",
    accent: "blue",
    shortlist: ["Pilot bütçesi", "Yönetim sunumu", "Heidelberg Materials Lab desteği"],
    country: "DE",
    translations: {
      tr: { title: "Heidelberg Materials Dijital Üretim Hackathonu", brief: "Kullanıcıların günlük harcamalarını analiz ederek tasarruf önerileri sunan fintech çözümleri." },
      en: { title: "Heidelberg Materials Open Innovation Hackathon", brief: "Fintech solutions that analyze users' daily spending and offer savings suggestions." },
      de: { title: "Heidelberg Materials Open-Innovation-Hackathon", brief: "Fintech-Lösungen, die die täglichen Ausgaben der Nutzer analysieren und Sparvorschläge liefern." },
      es: { title: "Hackathon de Innovación Abierta de Heidelberg Materials", brief: "Soluciones fintech que analizan el gasto diario de los usuarios y ofrecen sugerencias de ahorro." }
    }
  },
  {
    id: "challenge-ai-docs",
    title: "Hanson UK Çok Kanallı Lojistik Yarışması",
    theme: "Süreç otomasyonu",
    sector: "Perakende",
    brief: "Online siparişlerin mağaza stoklarıyla anlık eşlenip teslimat süresini yarıya indiren lojistik akışları.",
    date: "5 Haz - 5 Tem",
    deadline: "18 gün kaldı",
    reward: "50.000 HM + Manchester Lojistik Pilotu",
    rewardType: "Teknoloji Hediye",
    sponsor: "Hanson UK Tedarik Zinciri",
    status: "Aktif",
    ideas: 24,
    participants: 90,
    prizeIcon: "laptop",
    accent: "orange",
    shortlist: ["MacBook", "Hanson UK Pilot", "Tedarik rozeti"],
    country: "DE",
    translations: {
      tr: { title: "Hanson UK Çok Kanallı Lojistik Yarışması", brief: "Online siparişlerin mağaza stoklarıyla anlık eşlenip teslimat süresini yarıya indiren lojistik akışları." },
      en: { title: "Hanson UK Omnichannel Logistics Contest", brief: "Logistics flows that match online orders with store stock in real time, cutting delivery time in half." },
      de: { title: "Hanson UK Omnichannel-Logistikwettbewerb", brief: "Logistikabläufe, die Online-Bestellungen in Echtzeit mit dem Filiallager abgleichen und die Lieferzeit halbieren." },
      es: { title: "Concurso de Logística Omnicanal de Hanson UK", brief: "Flujos logísticos que emparejan pedidos en línea con el stock de tienda en tiempo real, reduciendo el tiempo de entrega a la mitad." }
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
    reward: "100.000 HM + Sydney lab pilot project",
    rewardType: "Para",
    sponsor: "Hanson Australia",
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
    brief: "AI algorithms to predict next-day wind speed and turbine generation outputs in London grid connections.",
    date: "15 Jun - 25 Jul",
    deadline: "35 days left",
    reward: "60.000 HM + London Tech team support",
    rewardType: "Para + Sertifika",
    sponsor: "Heidelberg Materials Trading",
    status: "Aktif",
    ideas: 11,
    participants: 30,
    prizeIcon: "shield-check",
    accent: "blue",
    shortlist: ["API Access", "Predictive Certificate", "UK Pilot"],
    country: "GB",
    translations: {
      tr: { title: "UK Rüzgar Üretim Tahmin Yarışması", brief: "Londra şebeke bağlantılarında ertesi gün rüzgar hızını ve türbin üretimini tahmin eden yapay zeka algoritmaları." },
      en: { title: "UK Wind Output Prediction Contest", brief: "AI algorithms to predict next-day wind speed and turbine generation outputs in London grid connections." },
      de: { title: "UK-Windertrag-Vorhersagewettbewerb", brief: "KI-Algorithmen zur Vorhersage der Windgeschwindigkeit und Turbinenleistung des Folgetages in Londoner Netzanschlüssen." },
      es: { title: "Concurso de Predicción de Producción Eólica del Reino Unido", brief: "Algoritmos de IA para predecir la velocidad del viento del día siguiente y la producción de turbinas en las conexiones de red de Londres." }
    }
  },
  // IT Challenges
  {
    id: "challenge-de-hydrogen-bus",
    title: "Heidelberg Materials Opole Wasserstoffbus-Reichweiten-Challenge",
    theme: "Sürdürülebilirlik",
    sector: "Otomotiv",
    brief: "Algorithmen zur Vorhersage und Verlängerung der Reichweite von Wasserstoffbussen unter realen Münchner Streckenbedingungen.",
    date: "12 Jun - 20 Jul",
    deadline: "30 days left",
    reward: "80.000 HM + Opole Pilot-Flotte",
    rewardType: "Para + Sertifika",
    sponsor: "Heidelberg Materials Poland Mobility",
    status: "Aktif",
    ideas: 9,
    participants: 28,
    prizeIcon: "battery-charging",
    accent: "emerald",
    shortlist: ["Pilot-Flotte", "Opole Lab-Demo", "Mobility Badge"],
    country: "IT",
    translations: {
      tr: { title: "Heidelberg Materials Opole Hidrojen Otobüs Menzil Yarışması", brief: "Opole'teki gerçek güzergah koşullarında hidrojenli otobüslerin menzilini tahmin eden ve uzatan algoritmalar." },
      en: { title: "Heidelberg Materials Opole Hydrogen Bus Range Challenge", brief: "Algorithms to predict and extend the range of hydrogen buses under real Opole route conditions." },
      de: { title: "Heidelberg Materials Opole Wasserstoffbus-Reichweiten-Challenge", brief: "Algorithmen zur Vorhersage und Verlängerung der Reichweite von Wasserstoffbussen unter realen Münchner Streckenbedingungen." },
      es: { title: "Desafío de Autonomía de Autobuses de Hidrógeno de Heidelberg Materials Opole", brief: "Algoritmos para predecir y extender la autonomía de los autobuses de hidrógeno en condiciones reales de ruta en Múnich." }
    }
  },
  // BE Challenges
  {
    id: "challenge-es-co2",
    title: "Helvan plant Carbon Neutral Cement Challenge",
    theme: "Sürdürülebilirlik",
    sector: "Sanayi",
    brief: "Innovative methods to capture carbon or use hydrogen inside cement rotary kilns in Helvan plant.",
    date: "20 Jun - 20 Aug",
    deadline: "60 days left",
    reward: "150.000 HM + Carbon Capture Pilot",
    rewardType: "Para",
    sponsor: "Heidelberg Materials Spain",
    status: "Yakında",
    ideas: 8,
    participants: 25,
    prizeIcon: "flame",
    accent: "purple",
    shortlist: ["Pilot funding", "Valencia HQ demo", "ESG board award"],
    country: "BE",
    translations: {
      tr: { title: "Helvan Tesisi Karbon Nötr Çimento Yarışması", brief: "Helvan tesisindeki döner çimento fırınlarında karbon yakalamak veya hidrojen kullanmak için yenilikçi yöntemler." },
      en: { title: "Helvan plant Carbon Neutral Cement Challenge", brief: "Innovative methods to capture carbon or use hydrogen inside cement rotary kilns in Helvan plant." },
      de: { title: "Kohlenstoffneutrale Zement-Challenge im Werk Helvan", brief: "Innovative Methoden zur Kohlenstoffabscheidung oder Wasserstoffnutzung in Zement-Drehrohröfen im Werk Helvan." },
      es: { title: "Desafío de Cemento Neutro en Carbono de la Planta de Helvan", brief: "Métodos innovadores para capturar carbono o usar hidrógeno dentro de los hornos rotatorios de cemento en la planta de Helvan." }
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
  title: "Heidelberg Materials Mobil kullanıcıları için AI destekli yatırım danışmanı",
  oneSentence: "Kullanıcıların harcama alışkanlıkları ve risk eğilimlerine göre fon ve hisse sepeti öneren yapay zeka entegrasyonu.",
  ideaType: "Yeni ürün / hizmet",
  visibility: "Şirket içi",
  anonymity: "İsim gizli, rol görünür",
  company: "Heidelberg Materials AG",
  department: "Dijital Bankacılık",
  subDepartment: "Yatırım Operasyonları",
  location: "Heidelberg Materials Hauptmerkez",
  cityRegion: "Heidelberg / Baden-Württemberg",
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
  solution: "Heidelberg Materials Mobil içinde risk grubuna göre otomatik bakiye dağılımı yapan robo-danışman modülü.",
  howItWorks: "AI risk analizi çıkarır, öneri sepet sunar, müşteri tek tıkla onaylayıp alım yapar.",
  resources: "Risk modelleri, harcama verisi, portföy getirileri",
  technicalNeed: "Evet, entegre robo-danışman API'si gerekiyor",
  educationNeed: "Kısa tanıtım videosu yeterli",
  processNeed: "Satış onay sürecinde küçük güncelleme",
  teams: "Veri analitiği, Heidelberg Materials Lab, IT",
  pilot: "İlk pilot işlem hacmi yüksek 1000 kullanıcıda 4 hafta denenebilir.",
  impact: "Yüksek",
  cost: "Orta",
  implementationTime: "3 ay",
  successMetric: "Aktif robo-danışman kullanan müşteri sayısı, memnuniyet oranı",
  kpi: "Robo-yatırım hacmi",
  risks: "Regülasyon uyumsuzluğu, yanlış tahminleme riski",
  strategicGoal: "Bireysel bankacılıkta teknoloji liderliğini korumak",
  files: ["heidelberg-materials-de-robo-danisman-pilot.pdf"]
};

const initialComplaint = {
  title: "Tedarik zinciri onay adımları yüzünden ürün girişinin gecikmesi",
  category: "Süreç verimsizliği",
  body: "Kategori yöneticisi ve bölge depo onayları paralel çalışmıyor. Bu yüzden basit stok girişleri bile günlerce bekliyor ve Hanson UK mağazalarında yok satma yaşanıyor.",
  department: "Tedarik Zinciri",
  location: "Hanson UK HQ",
  frequency: "Haftada birkaç kez",
  impact: "Orta",
  anonymity: "İsim gizli, departman görünür",
  expectation: "Onay adımlarının sıralı değil paralel yapılması ve gecikmelerin otomatik alarm üretmesi.",
  files: []
};

const initialTeams = [
  {
    id: "team-001",
    name: "Heidelberg Materials Dijital Üretim Hızlanma",
    description: "Heidelberg Materials Mobil içinde robo-danışman algoritmasını ve UX akışlarını kuracak cross-functional ekip.",
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
    name: "Hanson UK Akıllı Tedarik Grubu",
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
    name: "CBR EV-Tire R&D Ekibi",
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
    tags: ["CBR", "IoT", "Elektrikli Araç"]
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
    name: "Hanson UK Port OCR Automation",
    description: "London white cement dock scanner crane pathway OCR camera system development group.",
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
    description: "Dallas office automated robotic dry mortar bagging integration team.",
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
    name: "Opole vertical storage team",
    description: "Automated vertical storage and retrieval system (ASRS) mechanical layout and software group.",
    area: "Logistics",
    ideaId: "idea-8",
    createdBy: "u12",
    status: "active",
    createdAt: "2026-06-12",
    roles: [
      { id: "t8-1", title: "ASRS Specialist", icon: "layers", filled: true, userId: "u12", skills: ["ASRS", "Warehouse Automation"] },
      { id: "t8-2", title: "Structural Designer", icon: "pen-tool", filled: false, userId: null, skills: ["Germany Building Codes", "CAD"] }
    ],
    messages: [],
    tags: ["ASRS", "Opole", "Robotic Lifts"]
  },
  {
    id: "team-009",
    name: "Helvan CCS Team",
    description: "Carbon amine scrubbing pilot loop capturing daily CO2 at Helvan clinker rotary kiln.",
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
    name: "Heidelberg Materials Tenis Kulübü",
    description: "Tenis severlerin buluştuğu, antrenman ve turnuva organizasyonları düzenleyen sosyal kulüp.",
    category: "Spor",
    country: "DE",
    createdBy: "u3",
    createdAt: "2026-05-10",
    members: ["u3", "p01", "p05"],
    memberCount: 3,
    tags: ["Tenis", "Spor", "Sosyal"],
    messages: [
      { userId: "p01", body: "Bu cumartesi Heidelberg Materials Hauptmerkez kortlarında turnuva var, kayıtlar açıldı!", time: "09:10" },
      { userId: "p05", body: "Harika, ben de eşleşme listesine yazıldım. Saat kaçta başlıyoruz?", time: "09:14" },
      { userId: "u3", body: "10:00'da ısınma, 10:30'da ilk maçlar. Raketlerinizi unutmayın.", time: "09:20" }
    ]
  },
  {
    id: "club-002",
    name: "Heidelberg Materials Kitap Kulübü",
    description: "Her ay belirlenen bir kitabı okuyup tartıştığımız, edebiyat severler kulübü.",
    category: "Kültür & Sanat",
    country: "DE",
    createdBy: "u1",
    createdAt: "2026-05-15",
    members: ["u1", "p03", "p05"],
    memberCount: 3,
    tags: ["Kitap", "Edebiyat", "Kültür"],
    messages: [
      { userId: "u1", body: "Bu ayki kitabımız belli oldu, cuma günü ilk 100 sayfayı konuşalım mı?", time: "13:02" },
      { userId: "p03", body: "Bana uyar, Helvan'dan bağlanırım toplantıya.", time: "13:08" }
    ]
  },
  {
    id: "club-003",
    name: "Indocement Koşu Grubu",
    description: "Hafta sonları maratonlara hazırlanan ve sabah koşuları organize eden spor topluluğu.",
    category: "Spor",
    country: "DE",
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
    name: "Heidelberg Materials Tech Club",
    description: "A community for technology enthusiasts exploring AI, robotics, and emerging software development.",
    category: "Teknoloji",
    country: "GB",
    createdBy: "u7",
    createdAt: "2026-05-20",
    members: ["u7", "p02"],
    memberCount: 2,
    tags: ["Tech", "AI", "UK"],
    messages: [
      { userId: "u7", body: "We're hosting a small AI demo night next week at the Dubai Trading Hub, who's in?", time: "11:05" },
      { userId: "p02", body: "Count me in, I'll bring the latest model benchmarks.", time: "11:12" }
    ]
  },
  {
    id: "club-005",
    name: "Texas Solar Volunteers",
    description: "Hanson Australia volunteers working on local environmental cleanups and sustainability workshops.",
    category: "Sosyal Sorumluluk",
    country: "US",
    createdBy: "u10",
    createdAt: "2026-06-02",
    members: ["u10", "p04"],
    memberCount: 2,
    tags: ["Environment", "Volunteering", "Texas"],
    messages: [
      { userId: "u10", body: "Cleanup day at the Melbourne site site is confirmed for Saturday morning.", time: "08:30" }
    ]
  },
  {
    id: "club-006",
    name: "Heidelberg Materials Opole Wanderclub",
    description: "Wochenendwanderungen und Outdoor-Aktivitäten für Kolleginnen und Kollegen in Opole.",
    category: "Spor",
    country: "IT",
    createdBy: "p14",
    createdAt: "2026-06-08",
    members: ["p14", "p21"],
    memberCount: 2,
    tags: ["Wandern", "Outdoor", "Opole"],
    messages: [
      { userId: "p14", body: "Diesen Samstag wandern wir zum Starnberger See, Treffpunkt ist um 8 Uhr.", time: "09:00" }
    ]
  },
  {
    id: "club-007",
    name: "Heidelberg Materials Helvan Club de Lectura",
    description: "Club de lectura mensual para empleados de la planta de Helvan y la oficina de Valencia.",
    category: "Kültür & Sanat",
    country: "BE",
    createdBy: "p16",
    createdAt: "2026-06-10",
    members: ["p16", "p23"],
    memberCount: 2,
    tags: ["Lectura", "Cultura", "Helvan"],
    messages: [
      { userId: "p16", body: "Este mes leemos un libro sobre sostenibilidad industrial, ¿les parece bien el jueves?", time: "12:15" }
    ]
  },
  {
    id: "club-008",
    name: "3D Ürün Geliştirme ve Prototipleme Kulübü",
    description: "Katmanlı imalat, 3D CAD tasarımı ve endüstriyel prototipleme teknolojileri üzerine çalışan teknik topluluk.",
    category: "Teknoloji",
    country: "DE",
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
    country: "DE",
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
    country: "DE",
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
    country: "IT",
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
    country: "IT",
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
    country: "BE",
    createdBy: "p16",
    createdAt: "2026-06-18",
    members: ["p16", "p23"],
    memberCount: 2,
    tags: ["Diseño 3D", "Impresión 3D", "Ingeniería"],
    messages: [
      { userId: "p16", body: "Hemos configurado la nueva impresora de filamento continuo en el lab de Helvan.", time: "10:00" }
    ]
  },
  {
    id: "club-016",
    name: "Educación Financiera y Gestión del Patrimonio",
    description: "Grupo enfocado en la mejora de la cultura financiera personal, análisis de mercados y ahorro inteligente.",
    category: "Finans",
    country: "BE",
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


