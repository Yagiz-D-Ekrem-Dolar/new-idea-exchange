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
  { code: "TR", name: "Türkiye", flag: "🇹🇷", lang: "tr", label: "Türkiye Portal" },
  { code: "CO", name: "Colombia", flag: "🇨🇴", lang: "es", label: "Colombia Portal" },
  { code: "PE", name: "Peru", flag: "🇵🇪", lang: "es", label: "Peru Portal" }
];

// affiliationCompanies[].countries uses Turkish display names (e.g. "İspanya"), while
// countriesList[].name uses English (e.g. "Spain") for UI display. This maps a country
// code to the Turkish name so company/country matching works for every portal, not just TR.
const countryNameTR = {
  ES: "İspanya",
  MX: "Meksika",
  TR: "Türkiye",
  CO: "Kolombiya",
  PE: "Peru"
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
  "Lucía Herrera": "https://randomuser.me/api/portraits/men/75.jpg",
  "Mateo Aguirre": "https://randomuser.me/api/portraits/men/65.jpg",
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
    name: "Banco Bilbao Vizcaya Argentaria, S.A.",
    shortName: "BBVA Group",
    logo: "./assets/company-logos/bbva-group.svg",
    domain: "bbva.com",
    type: "Holding",
    countries: ["İspanya", "Meksika", "Türkiye", "Kolombiya", "Peru"],
    cities: ["Madrid", "Mexico City", "İstanbul", "Bogotá", "Lima"],
    campuses: ["Ciudad BBVA – La Vela Kulesi", "Mexico City Ofisi", "İstanbul Ofisi", "Bogotá Ofisi", "Lima Ofisi"],
    departments: ["Strateji", "İnovasyon", "Finans", "İnsan Kaynakları", "Sürdürülebilirlik"]
  },
  {
    id: "bbva-es",
    name: "BBVA, S.A.",
    shortName: "BBVA",
    logo: "./assets/company-logos/bbva-group.svg",
    domain: "bbva.com",
    type: "Banka",
    countries: ["İspanya"],
    cities: ["Madrid", "Bilbao", "Barcelona"],
    campuses: ["Ciudad BBVA – La Vela Kulesi", "BBVA Bilbao Akademi", "Ciudad BBVA – La Vela Kulesi"],
    departments: ["Dijital Bankacılık", "Kurumsal Bankacılık", "Hazine", "İnovasyon Lab"]
  },
  {
    id: "bbva-mexico",
    name: "BBVA México, S.A.",
    shortName: "BBVA México",
    logo: "./assets/company-logos/bbva-mexico.svg",
    domain: "bbva.mx",
    type: "Banka",
    countries: ["Meksika"],
    cities: ["Mexico City", "Monterrey", "Guadalajara"],
    campuses: ["BBVA México HQ", "Monterrey Lojistik Merkezi"],
    departments: ["Kategori Yönetimi", "E-Ticaret", "Tedarik Zinciri", "Müşteri Deneyimi"]
  },
  {
    id: "bbva-colombia",
    name: "BBVA Colombia S.A.",
    shortName: "BBVA Colombia",
    logo: "./assets/company-logos/bbva-colombia.svg",
    domain: "bbva.com.co",
    type: "Banka",
    countries: ["Kolombiya"],
    cities: ["Bogotá", "Medellín", "Cali"],
    campuses: ["BBVA Colombia Plaza", "Medellín Depo"],
    departments: ["Kategori Yönetimi", "Tedarik Zinciri", "Mağaza Operasyonları", "E-Ticaret"]
  },
  {
    id: "bbva-peru",
    name: "BBVA Perú S.A.",
    shortName: "BBVA Perú",
    logo: "./assets/company-logos/bbva-peru.svg",
    domain: "bbva.pe",
    type: "Banka",
    countries: ["Peru"],
    cities: ["Lima", "Arequipa", "Trujillo"],
    campuses: ["BBVA Perú HQ", "Lima Operasyon Merkezi"],
    departments: ["Şebeke Operasyonları", "Müşteri Hizmetleri", "Yeşil Enerji", "BT"]
  },
  {
    id: "bbva-argentina",
    name: "BBVA Argentina S.A.",
    shortName: "BBVA Argentina",
    logo: "./assets/company-logos/bbva-argentina.svg",
    domain: "bbva.com.ar",
    type: "Banka",
    countries: ["Arjantin"],
    cities: ["Buenos Aires", "Córdoba", "Rosario"],
    campuses: ["BBVA Argentina HQ", "Córdoba Ofisi"],
    departments: ["Üretim", "Ar-Ge", "Tedarik Zinciri", "Pazarlama"]
  },
  {
    id: "garanti-bbva",
    name: "Garanti BBVA A.Ş.",
    shortName: "Garanti BBVA",
    logo: "./assets/company-logos/garanti-bbva.svg",
    domain: "garantibbva.com.tr",
    type: "Banka",
    countries: ["Türkiye"],
    cities: ["İstanbul", "Ankara", "İzmir"],
    campuses: ["Levent Ofisi", "Ankara Ofisi"],
    departments: ["Ar-Ge", "Üretim", "Kompozit Teknolojileri", "Kalite"]
  },
  {
    id: "garanti-bbva-yatirim",
    name: "Garanti BBVA Yatırım Menkul Kıymetler A.Ş.",
    shortName: "Garanti BBVA Yatırım",
    logo: "./assets/company-logos/garanti-bbva-yatirim.svg",
    domain: "garantibbvayatirim.com.tr",
    type: "Yatırım/Aracı Kurum",
    countries: ["Türkiye"],
    cities: ["İstanbul"],
    campuses: ["Levent Ofisi"],
    departments: ["Üretim", "Sürdürülebilirlik", "Lojistik", "Ar-Ge"]
  },
  {
    id: "garanti-bbva-portfoy",
    name: "Garanti BBVA Portföy Yönetimi A.Ş.",
    shortName: "Garanti BBVA Portföy",
    logo: "./assets/company-logos/garanti-bbva-portfoy.svg",
    domain: "garantibbvaportfoy.com.tr",
    type: "Portföy Yönetimi",
    countries: ["Türkiye"],
    cities: ["İstanbul"],
    campuses: ["Levent Ofisi"],
    departments: ["Üretim", "Elektrikli Araçlar Ar-Ge", "Kalite Kontrol", "Satış"]
  },
  {
    id: "garanti-bbva-leasing",
    name: "Garanti BBVA Finansal Kiralama A.Ş.",
    shortName: "Garanti BBVA Leasing",
    logo: "./assets/company-logos/garanti-bbva-leasing.svg",
    domain: "garantibbvaleasing.com.tr",
    type: "Finansal Kiralama",
    countries: ["Türkiye"],
    cities: ["İstanbul"],
    campuses: ["Levent Ofisi"],
    departments: ["Yapay Zekâ", "Siber Güvenlik", "Bulut Teknolojileri", "Ürün Yönetimi"]
  },
  {
    id: "bbva-technology",
    name: "BBVA Technology, S.A.",
    shortName: "BBVA Technology",
    logo: "./assets/company-logos/bbva-technology.svg",
    domain: "bbva-technology.com",
    type: "Dijital/Teknoloji",
    countries: ["İspanya"],
    cities: ["Madrid"],
    campuses: ["BBVA Technology Dijital Kampüs"],
    departments: ["Yapay Zekâ", "Siber Güvenlik", "Bulut Teknolojileri", "Ürün Yönetimi"]
  },
  {
    id: "bbva-seguros",
    name: "BBVA Seguros, S.A.",
    shortName: "BBVA Seguros",
    logo: "./assets/company-logos/bbva-seguros.svg",
    domain: "bbvaseguros.com",
    type: "Sigorta",
    countries: ["İspanya"],
    cities: ["Madrid"],
    campuses: ["BBVA Seguros Genel Müdürlük"],
    departments: ["Risk Yönetimi", "Aktüerya", "Müşteri Deneyimi", "Hasar Yönetimi"]
  },
  {
    id: "garanti-bbva-emeklilik",
    name: "Garanti BBVA Emeklilik ve Hayat A.Ş.",
    shortName: "Garanti BBVA Emeklilik ve Hayat",
    logo: "./assets/company-logos/garanti-bbva-emeklilik.svg",
    domain: "garantibbvaemeklilik.com.tr",
    type: "Hayat Sigortası/Emeklilik",
    countries: ["Türkiye"],
    cities: ["İstanbul"],
    campuses: ["Garanti BBVA Emeklilik Genel Müdürlük"],
    departments: ["Bireysel Emeklilik", "Müşteri Deneyimi", "Dijital Kanallar", "Satış"]
  },
  {
    id: "bbva-provincial",
    name: "BBVA Provincial, S.A.",
    shortName: "BBVA Provincial",
    logo: "./assets/company-logos/bbva-provincial.svg",
    domain: "bbvaprovincial.com",
    type: "Banka",
    countries: ["Venezuela"],
    cities: ["Caracas"],
    campuses: ["BBVA Provincial HQ"],
    departments: ["Dijital Bankacılık", "Kurumsal Bankacılık", "Müşteri Deneyimi"]
  },
  {
    id: "bbva-research",
    name: "BBVA Research, S.A.",
    shortName: "BBVA Research",
    logo: "./assets/company-logos/bbva-research.svg",
    domain: "bbvaresearch.com",
    type: "Ekonomik Araştırma",
    countries: ["İspanya"],
    cities: ["Madrid"],
    campuses: ["BBVA Research Ofisi"],
    departments: ["Makroekonomi", "Veri Bilimi", "Yayın ve Raporlama"]
  },
  {
    id: "bbva-am",
    name: "BBVA Asset Management, S.A.",
    shortName: "BBVA Asset Management",
    logo: "./assets/company-logos/bbva-am.svg",
    domain: "bbvaam.com",
    type: "Varlık Yönetimi",
    countries: ["İspanya"],
    cities: ["Madrid"],
    campuses: ["BBVA Asset Management Ofisi"],
    departments: ["Portföy Yönetimi", "Risk Analitiği", "Müşteri İlişkileri"]
  },
  {
    id: "bbva-switzerland",
    name: "BBVA Switzerland S.A.",
    shortName: "BBVA Switzerland",
    logo: "./assets/company-logos/bbva-switzerland.svg",
    domain: "bbva.ch",
    type: "Özel Bankacılık",
    countries: ["İsviçre"],
    cities: ["Zürih"],
    campuses: ["BBVA Switzerland Ofisi"],
    departments: ["Özel Bankacılık", "Varlık Yönetimi", "Uyum"]
  },
  {
    id: "garanti-bbva-faktoring",
    name: "Garanti BBVA Faktoring A.Ş.",
    shortName: "Garanti BBVA Faktoring",
    logo: "./assets/company-logos/garanti-bbva-faktoring.svg",
    domain: "garantibbvafaktoring.com.tr",
    type: "Faktoring",
    countries: ["Türkiye"],
    cities: ["İstanbul"],
    campuses: ["Levent Ofisi"],
    departments: ["Operasyon", "Satış", "Risk Yönetimi"]
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
  // Türkiye (TR) - Garanti BBVA and TR sub-brands
  { id: "p01", name: "Defne Arman", companyId: "bbva-group", role: "Strateji Direktörü", team: "Holding Strateji", city: "İstanbul", campus: "İstanbul Ofisi", photo: "https://randomuser.me/api/portraits/women/12.jpg", status: "Aktif", country: "TR" },
  { id: "p02", name: "Mert Alkan", companyId: "garanti-bbva-leasing", role: "İnovasyon Lideri", team: "Yapay Zekâ Ofisi", city: "İstanbul", campus: "Levent Ofisi", photo: "https://randomuser.me/api/portraits/men/12.jpg", status: "Toplantıda", country: "TR" },
  { id: "p03", name: "Selin Eryılmaz", companyId: "garanti-bbva-portfoy", role: "Ar-Ge Lideri", team: "Levent Ofisi Ar-Ge", city: "İstanbul", campus: "Levent Ofisi", photo: "https://randomuser.me/api/portraits/women/32.jpg", status: "Aktif", country: "TR" },
  { id: "p04", name: "Baran İleri", companyId: "garanti-bbva-emeklilik", role: "Operasyon Müdürü", team: "Garanti BBVA Emeklilik Genel Müdürlük", city: "İstanbul", campus: "Garanti BBVA Emeklilik Genel Müdürlük", photo: "https://randomuser.me/api/portraits/men/27.jpg", status: "Sahada", country: "TR" },
  { id: "p05", name: "Ece Uslu", companyId: "garanti-bbva", role: "Sürdürülebilir Finans Yöneticisi", team: "İnovasyon Lab", city: "İstanbul", campus: "Levent Ofisi", photo: "https://randomuser.me/api/portraits/women/45.jpg", status: "Aktif", country: "TR" },

  // España (ES) - BBVA Technology / BBVA Seguros / BBVA Research / BBVA AM / BBVA, S.A.
  { id: "p06", name: "John Sterling", companyId: "bbva-research", role: "Director de Investigación", team: "Makroekonomi", city: "Madrid", campus: "BBVA Research Ofisi", photo: "https://randomuser.me/api/portraits/men/44.jpg", status: "Aktif", country: "ES" },
  { id: "p07", name: "Sarah Jenkins", companyId: "bbva-seguros", role: "Sales Lead", team: "Müşteri Deneyimi", city: "Madrid", campus: "BBVA Seguros Genel Müdürlük", photo: "https://randomuser.me/api/portraits/women/64.jpg", status: "Aktif", country: "ES" },
  { id: "p08", name: "David Miller", companyId: "bbva-technology", role: "Lead Engineer", team: "Bulut Teknolojileri", city: "Madrid", campus: "BBVA Technology Dijital Kampüs", photo: "https://randomuser.me/api/portraits/men/53.jpg", status: "Aktif", country: "ES" },
  { id: "p09", name: "Oliver Watson", companyId: "bbva-group", role: "International Strategist", team: "Strategy", city: "Madrid", campus: "Ciudad BBVA – La Vela Kulesi", photo: "https://randomuser.me/api/portraits/men/86.jpg", status: "Aktif", country: "ES" },
  { id: "p17", name: "George Taylor", companyId: "bbva-technology", role: "Yapay Zekâ Mühendisi", team: "Yapay Zekâ", city: "Madrid", campus: "BBVA Technology Dijital Kampüs", photo: "https://randomuser.me/api/portraits/men/41.jpg", status: "Toplantıda", country: "ES" },
  { id: "p18", name: "Amelia Williams", companyId: "bbva-am", role: "Portföy Ürün Sorumlusu", team: "Portföy Yönetimi", city: "Madrid", campus: "BBVA Asset Management Ofisi", photo: "https://randomuser.me/api/portraits/women/52.jpg", status: "Aktif", country: "ES" },
  { id: "p15", name: "Carlos Ruiz", companyId: "bbva-es", role: "Bilbao Şube Müdürü", team: "Kurumsal Bankacılık", city: "Bilbao", campus: "BBVA Bilbao Akademi", photo: "https://randomuser.me/api/portraits/men/38.jpg", status: "Aktif", country: "ES" },
  { id: "p16", name: "Maria Ortega", companyId: "bbva-es", role: "Sürdürülebilirlik Analisti", team: "Hazine", city: "Madrid", campus: "Ciudad BBVA – La Vela Kulesi", photo: "https://randomuser.me/api/portraits/women/29.jpg", status: "Aktif", country: "ES" },
  { id: "p23", name: "Antonio García", companyId: "bbva-es", role: "Barcelona Satış Sorumlusu", team: "Dijital Bankacılık", city: "Barcelona", campus: "Ciudad BBVA – La Vela Kulesi", photo: "https://randomuser.me/api/portraits/men/49.jpg", status: "Aktif", country: "ES" },
  { id: "p24", name: "Isabel Martínez", companyId: "bbva-switzerland", role: "Özel Bankacılık Uzmanı", team: "Özel Bankacılık", city: "Zürih", campus: "BBVA Switzerland Ofisi", photo: "https://randomuser.me/api/portraits/women/71.jpg", status: "Sahada", country: "ES" },

  // México (MX) - BBVA México
  { id: "p10", name: "Michael Vance", companyId: "bbva-mexico", role: "VP de Banca Digital", team: "Dijital Bankacılık", city: "Mexico City", campus: "BBVA México HQ", photo: "https://randomuser.me/api/portraits/men/22.jpg", status: "Aktif", country: "MX" },
  { id: "p11", name: "Emily Rose", companyId: "bbva-mexico", role: "Monterrey Operasyon Müdürü", team: "Tedarik Zinciri", city: "Monterrey", campus: "Monterrey Lojistik Merkezi", photo: "https://randomuser.me/api/portraits/women/36.jpg", status: "Sahada", country: "MX" },
  { id: "p12", name: "Robert Chen", companyId: "bbva-mexico", role: "Guadalajara Müşteri Deneyimi Lideri", team: "Müşteri Deneyimi", city: "Guadalajara", campus: "BBVA México HQ", photo: "https://randomuser.me/api/portraits/men/61.jpg", status: "Aktif", country: "MX" },

  // Colombia (CO) - BBVA Colombia
  { id: "p13", name: "Hans Müller", companyId: "bbva-colombia", role: "Lojistik Koordinatörü", team: "Tedarik Zinciri", city: "Medellín", campus: "Medellín Depo", photo: "https://randomuser.me/api/portraits/men/72.jpg", status: "Aktif", country: "CO" },
  { id: "p21", name: "Sabine Schmidt", companyId: "bbva-colombia", role: "Cali Satış Sorumlusu", team: "Mağaza Operasyonları", city: "Cali", campus: "BBVA Colombia Plaza", photo: "https://randomuser.me/api/portraits/women/63.jpg", status: "Aktif", country: "CO" },

  // Perú (PE) - BBVA Perú
  { id: "p14", name: "Dieter Schmidt", companyId: "bbva-peru", role: "Operasyon Müdürü", team: "Şebeke Operasyonları", city: "Lima", campus: "BBVA Perú HQ", photo: "https://randomuser.me/api/portraits/men/95.jpg", status: "Aktif", country: "PE" },
  { id: "p22", name: "Andreas Weber", companyId: "bbva-peru", role: "Arequipa Müşteri Hizmetleri Uzmanı", team: "Müşteri Hizmetleri", city: "Arequipa", campus: "Lima Operasyon Merkezi", photo: "https://randomuser.me/api/portraits/men/77.jpg", status: "Toplantıda", country: "PE" },
  { id: "p19", name: "Jennifer Miller", companyId: "bbva-peru", role: "BT Servis Yöneticisi", team: "BT", city: "Trujillo", campus: "BBVA Perú HQ", photo: "https://randomuser.me/api/portraits/women/58.jpg", status: "Aktif", country: "PE" },
  { id: "p20", name: "Thomas Martin", companyId: "bbva-colombia", role: "E-Ticaret Araştırmacısı", team: "E-Ticaret", city: "Bogotá", campus: "BBVA Colombia Plaza", photo: "https://randomuser.me/api/portraits/men/19.jpg", status: "Sahada", country: "CO" }
];

const initialAnnouncements = [
  // Turkey (TR)
  {
    id: "ann-1",
    title: "BBVA Group Haziran Fikir Kampanyası başladı",
    body: "Tüm grup şirketlerindeki verimlilik ve enerji tasarrufu fikirleri bu ay aynı havuzda toplanacaktır. BBVA, BBVA México, Garanti BBVA Portföy ve BBVA Perú ekiplerine duyurulur.",
    scope: "Holding geneli",
    companyId: "bbva-group",
    country: "TR",
    city: "İstanbul",
    campus: "Ciudad BBVA – La Vela Kulesi",
    department: "Tüm ekipler",
    authorId: "p01",
    time: "Bugün 09:10",
    priority: "Yönetici duyurusu"
  },
  {
    id: "ann-2",
    title: "BBVA Bilbao Akademi inovasyon eğitimleri açıldı",
    body: "Bankacılık süreçlerinde otomasyon ve API teknolojileri geliştirmek isteyen çalışma arkadaşları için başvurular başladı.",
    scope: "İştirak",
    companyId: "bbva-es",
    country: "TR",
    city: "İstanbul",
    campus: "BBVA Bilbao Akademi",
    department: "Tüm Ekipler",
    authorId: "p05",
    time: "Dün 14:20",
    priority: "İştirak"
  },
  {
    id: "ann-7",
    title: "BBVA México Yapay Zeka Destekli Talep Tahminleme Çalışması",
    body: "E-ticaret ve fiziksel mağaza stok seviyelerini optimize eden, mevsimsel geçişleri tahminleyen algoritmalar aranıyor. Kategori ekibine duyurulur.",
    scope: "İştirak",
    companyId: "bbva-mexico",
    country: "TR",
    city: "İstanbul",
    campus: "BBVA México HQ",
    department: "Kategori Yönetimi",
    authorId: "p02",
    time: "Dün 16:40",
    priority: "İştirak"
  },
  {
    id: "ann-8",
    title: "BBVA Colombia Tedarik Zinciri Takibi",
    body: "Tarladan rafa taze gıda fire oranlarını %50 azaltacak akıllı lojistik ve soğuk zincir IoT sensör entegrasyonu fikir havuzu açıldı.",
    scope: "İştirak",
    companyId: "bbva-colombia",
    country: "TR",
    city: "İstanbul",
    campus: "BBVA Colombia Plaza",
    department: "Tedarik Zinciri",
    authorId: "u2",
    time: "Bugün 10:00",
    priority: "İştirak"
  },
  {
    id: "ann-9",
    title: "BBVA Perú Akıllı Şebeke Yük Dağıtımı Projesi",
    body: "Dağıtım şebekesindeki anlık pik yükleri dengeleyecek ve kesintileri minimize edecek akıllı algoritmaların test aşaması başlıyor.",
    scope: "İştirak",
    companyId: "bbva-peru",
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
    title: "Garanti BBVA Levent Ofisisı Lastik Sensör Testleri",
    body: "Binek ve ticari araçlar için geliştirilen akıllı lastik sensör verilerinin bulut sistemlerine aktarım hızı optimize ediliyor.",
    scope: "İştirak",
    companyId: "garanti-bbva",
    country: "TR",
    city: "İstanbul",
    campus: "Levent Ofisi",
    department: "Ar-Ge",
    authorId: "u4",
    time: "Bugün 11:15",
    priority: "İştirak"
  },
  {
    id: "ann-11",
    title: "Garanti BBVA Yatırım Algoritmik İşlem Geliştirme Çalışmaları",
    body: "Havacılık ve otomotiv endüstrisi için aşırı hafif ve dayanıklı yeni nesil karbon fiber takviyeli kompozit formülleri test edilecek.",
    scope: "İştirak",
    companyId: "garanti-bbva-yatirim",
    country: "TR",
    city: "İstanbul",
    campus: "Levent Ofisi",
    department: "Kompozit Teknolojileri",
    authorId: "p03",
    time: "Dün 10:30",
    priority: "İştirak"
  },
  {
    id: "ann-12",
    title: "Garanti BBVA Portföy Levent Ofisisı Alternatif Yakıt Kullanımı",
    body: "Kalsinasyon fırınlarında fosil yakıt yerine endüstriyel atık çamuru ve atık lastik kullanım oranını %65'e çıkarma teknik tasarımı.",
    scope: "İştirak",
    companyId: "garanti-bbva-portfoy",
    country: "TR",
    city: "İstanbul",
    campus: "Levent Ofisi",
    department: "Sürdürülebilirlik",
    authorId: "p03",
    time: "Bugün 13:00",
    priority: "İştirak"
  },
  {
    id: "ann-13",
    title: "Garanti BBVA Leasing Risk Yönetim Sistemi Yazılım Sprinti",
    body: "Elektrikli otobüslerin şehir içi dur-kalk çevrimlerinde hücre ömrünü %15 uzatan rejeneratif frenleme algoritması entegre ediliyor.",
    scope: "İştirak",
    companyId: "garanti-bbva-leasing",
    country: "TR",
    city: "İstanbul",
    campus: "Levent Ofisi",
    department: "Elektrikli Araçlar Ar-Ge",
    authorId: "p04",
    time: "Dün 15:45",
    priority: "İştirak"
  },
  {
    id: "ann-14",
    title: "BBVA Technology GenAI Asistanı Entegrasyonu",
    body: "Platform içi tüm veri katmanlarını (fikirler, borsa, tahminler) özetleyen yapay zeka asistanı model güncellemeleri tamamlandı.",
    scope: "İştirak",
    companyId: "bbva-technology",
    country: "TR",
    city: "İstanbul",
    campus: "BBVA Technology Dijital Kampüs",
    department: "Yapay Zekâ",
    authorId: "p02",
    time: "Bugün 09:00",
    priority: "İştirak"
  },
  {
    id: "ann-15",
    title: "BBVA Seguros Yapay Zeka Destekli Hasar Analizi",
    body: "Oto kazalarında çekilen fotoğraflardan hasar boyutunu ve tahmini maliyeti 5 saniyede çıkaran derin öğrenme modeli devreye alındı.",
    scope: "İştirak",
    companyId: "bbva-seguros",
    country: "TR",
    city: "İstanbul",
    campus: "BBVA Seguros Genel Müdürlük",
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
    title: "Ciudad BBVA – La Vela Kulesi Genç Yetenek İnovasyon Programı",
    body: "Tüm iştiraklerdeki genç mühendis ve uzmanlar için yalın girişim metotları eğitimi ve proje hızlandırıcı başvuruları açıldı.",
    scope: "Holding geneli",
    companyId: "bbva-group",
    country: "TR",
    city: "İstanbul",
    campus: "Ciudad BBVA – La Vela Kulesi",
    department: "İnsan Kaynakları",
    authorId: "p01",
    time: "4 gün önce",
    priority: "Yönetici duyurusu"
  },
  {
    id: "ann-24",
    title: "BBVA Açık Bankacılık API Entegrasyon Kampanyası",
    body: "BBVA API altyapısı üzerinden üçüncü parti finansal uygulamalar geliştirecek dış geliştirici fikirleri borsa havuzuna alınıyor.",
    scope: "İştirak",
    companyId: "bbva-es",
    country: "TR",
    city: "İstanbul",
    campus: "Levent Ofisi",
    department: "Dijital Bankacılık",
    authorId: "u3",
    time: "Dün 16:00",
    priority: "İştirak"
  },
  {
    id: "ann-25",
    title: "BBVA México Şube İçi Akıllı Kiosk Pilot Uygulaması",
    body: "Müşterilerin kuyruk beklemeden ürün barkodu okutup mobil ödemeyle çıkış yapabileceği otonom kioskların tasarımı onaylandı.",
    scope: "İştirak",
    companyId: "bbva-mexico",
    country: "TR",
    city: "İstanbul",
    campus: "BBVA México HQ",
    department: "Müşteri Deneyimi",
    authorId: "u1",
    time: "Bugün 10:30",
    priority: "İştirak"
  },
  {
    id: "ann-26",
    title: "BBVA Colombia Operasyonel Verimlilik Projesi",
    body: "Son tüketim tarihi yaklaşan gıdaların akıllı fiyatlandırma motoruyla anlık indirimlenmesi projesi Maltepe pilot mağazasında başlıyor.",
    scope: "İştirak",
    companyId: "bbva-colombia",
    country: "TR",
    city: "İstanbul",
    campus: "BBVA Colombia Plaza",
    department: "Mağaza Operasyonları",
    authorId: "u2",
    time: "Dün 11:00",
    priority: "İştirak"
  },
  {
    id: "ann-27",
    title: "BBVA Perú Sürdürülebilir Finansman Çözümleri",
    body: "Sanayi sitelerinde atıl duran çatı alanlarının BBVA Perú finansmanıyla güneş paneli tarlalarına dönüştürülmesi modeli.",
    scope: "İştirak",
    companyId: "bbva-peru",
    country: "TR",
    city: "İstanbul",
    campus: "BBVA Perú HQ",
    department: "Yeşil Enerji",
    authorId: "p05",
    time: "Bugün 08:30",
    priority: "İştirak"
  },
  {
    id: "ann-28",
    title: "Garanti BBVA Ankara Ofisi Süreç Otomasyonu (RPA)",
    body: "Hammadde taşıma bandındaki otonom yönlendirmeli araçların rota verimliliği AI simülasyonuyla %20 artırıldı.",
    scope: "İştirak",
    companyId: "garanti-bbva",
    country: "TR",
    city: "Aksaray",
    campus: "Ankara Ofisi",
    department: "Üretim",
    authorId: "u4",
    time: "2 gün önce",
    priority: "İştirak"
  },
  {
    id: "ann-29",
    title: "Garanti BBVA Yatırım Sürdürülebilir Yatırım Ürünleri Geliştirme",
    body: "Geri dönüştürülmüş plastik hammaddelerden lastik kord bezi üretiminde kullanılacak yüksek mukavemetli naylon iplik prototipi hazır.",
    scope: "İştirak",
    companyId: "garanti-bbva-yatirim",
    country: "TR",
    city: "İstanbul",
    campus: "Levent Ofisi",
    department: "Ar-Ge",
    authorId: "p03",
    time: "Dün 14:10",
    priority: "İştirak"
  },
  {
    id: "ann-30",
    title: "Garanti BBVA Portföy Düşük Karbonlu Yatırım Fonu Geliştirme",
    body: "Çimento klinker ikamesi olarak kalsine kil kullanarak beton üretimindeki CO2 ayak izini %30 azaltan yeşil beton formülü.",
    scope: "İştirak",
    companyId: "garanti-bbva-portfoy",
    country: "TR",
    city: "İstanbul",
    campus: "Levent Ofisi",
    department: "Ar-Ge",
    authorId: "p03",
    time: "5 gün önce",
    priority: "İştirak"
  },
  {
    id: "ann-31",
    title: "Garanti BBVA Leasing Yeşil Filo Kiralama Tanıtımı",
    body: "Geliştirilen hidrojen prototip otobüsün sürüş menzili ve tank güvenlik sensörleri saha simülasyonlarıyla onaylanmıştır.",
    scope: "İştirak",
    companyId: "garanti-bbva-leasing",
    country: "TR",
    city: "İstanbul",
    campus: "Levent Ofisi",
    department: "Elektrikli Araçlar Ar-Ge",
    authorId: "p04",
    time: "Dün 10:15",
    priority: "İştirak"
  },
  {
    id: "ann-32",
    title: "BBVA Technology Siber Güvenlik Tehdit Algılama",
    body: "Holding ve tüm iştiraklerin bulut ağlarındaki anormal giriş denemelerini tespit eden yapay zeka siber kalkanı kuruldu.",
    scope: "İştirak",
    companyId: "bbva-technology",
    country: "TR",
    city: "İstanbul",
    campus: "BBVA Technology Dijital Kampüs",
    department: "Siber Güvenlik",
    authorId: "p02",
    time: "Bugün 12:45",
    priority: "İştirak"
  },
  {
    id: "ann-33",
    title: "BBVA Seguros Mobil Hasar Tespit Uygulaması",
    body: "Saha eksperlerinin mobil tabletler üzerinden hızlıca hasar dosyası açmasını sağlayan bulut veri tabanı senkronizasyonu tamamlandı.",
    scope: "İştirak",
    companyId: "bbva-seguros",
    country: "TR",
    city: "İstanbul",
    campus: "BBVA Seguros Genel Müdürlük",
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
    title: "BBVA İnovasyon Ödülleri Açıklandı",
    body: "Bu yılki Altın Yaka inovasyon kategorilerinde dereceye giren fikir sahiplerine toplamda 500.000 SA ödül dağıtılacaktır.",
    scope: "Holding geneli",
    companyId: "bbva-group",
    country: "TR",
    city: "İstanbul",
    campus: "Ciudad BBVA – La Vela Kulesi",
    department: "İnovasyon",
    authorId: "p01",
    time: "Bugün 09:30",
    priority: "Yönetici duyurusu"
  },
  {
    id: "ann-45",
    title: "BBVA Yeşil Finansman Kredi Paketleri",
    body: "Sürdürülebilirlik skoru yüksek olan grup şirketlerine özel fonlama ve yeşil tahvil ihracı borsa tahtasına eklenmiştir.",
    scope: "İştirak",
    companyId: "bbva-es",
    country: "TR",
    city: "İstanbul",
    campus: "Levent Ofisi",
    department: "Kurumsal Bankacılık",
    authorId: "u3",
    time: "Dün 10:00",
    priority: "İştirak"
  },
  {
    id: "ann-46",
    title: "BBVA México Dijital Garanti Otomasyonu",
    body: "Kullanıcıların satın aldığı elektronik cihazların garanti ve servis takibini tamamen dijitalleştiren altyapı devreye girdi.",
    scope: "İştirak",
    companyId: "bbva-mexico",
    country: "TR",
    city: "İstanbul",
    campus: "BBVA México HQ",
    department: "Müşteri Deneyimi",
    authorId: "u1",
    time: "3 gün önce",
    priority: "İştirak"
  },
  {
    id: "ann-47",
    title: "BBVA Colombia Kart Mobil Kampanya Önerileri",
    body: "Müşterinin geçmiş satın alma alışkanlıklarına göre markette yürürken anlık bildirimle kupon sunan AI motoru.",
    scope: "İştirak",
    companyId: "bbva-colombia",
    country: "TR",
    city: "İstanbul",
    campus: "BBVA Colombia Plaza",
    department: "Kategori Yönetimi",
    authorId: "u2",
    time: "Dün 15:00",
    priority: "İştirak"
  },
  {
    id: "ann-48",
    title: "BBVA Perú Dijital Şube Ağı Genişlemesi",
    body: "Türkiye genelindeki otoban ve AVM otoparklarına kurulacak yeni DC yüksek hızlı şarj istasyon yerleşim optimizasyon fikirleri.",
    scope: "İştirak",
    companyId: "bbva-peru",
    country: "TR",
    city: "İstanbul",
    campus: "BBVA Perú HQ",
    department: "Yeşil Enerji",
    authorId: "p05",
    time: "Bugün 11:00",
    priority: "İştirak"
  },
  {
    id: "ann-49",
    title: "Garanti BBVA Levent Ofisisı IoT Bulut Entegrasyonu",
    body: "Üretim hattındaki pres makinelerinin titreşim sensör verileri Azure bulut ortamına anlık olarak aktarılmaya başlandı.",
    scope: "İştirak",
    companyId: "garanti-bbva",
    country: "TR",
    city: "İstanbul",
    campus: "Levent Ofisi",
    department: "Üretim",
    authorId: "u4",
    time: "Bugün 12:00",
    priority: "İştirak"
  },
  {
    id: "ann-50",
    title: "Garanti BBVA Yatırım Kurumsal Müşteriler İçin Yeni Nesil Araçlar",
    body: "Boeing ve Airbus parça standartlarına tam uyumlu, epoksi reçineli karbon elyaf kompozitlerin seri üretimi onaylandı.",
    scope: "İştirak",
    companyId: "garanti-bbva-yatirim",
    country: "TR",
    city: "İstanbul",
    campus: "Levent Ofisi",
    department: "Kompozit Teknolojileri",
    authorId: "p03",
    time: "Dün 13:00",
    priority: "İştirak"
  },
  {
    id: "ann-51",
    title: "Garanti BBVA Portföy Enerji Verimli Veri İşleme Teknolojisi",
    body: "Levent Ofisi veri merkezindeki sunucu soğutma sistemlerinde yapılan modifikasyonla elektrik tüketimi %12 azaltıldı.",
    scope: "İştirak",
    companyId: "garanti-bbva-portfoy",
    country: "TR",
    city: "İstanbul",
    campus: "Levent Ofisi",
    department: "Üretim",
    authorId: "p03",
    time: "Bugün 10:45",
    priority: "İştirak"
  },
  {
    id: "ann-52",
    title: "Garanti BBVA Leasing Dijital İkiz (Digital Twin) Simülasyonu",
    body: "Levent Ofisi operasyon sürecindeki tüm fiziksel adımlar 3D dijital ikiz simülasyonuna aktarılarak darboğazlar tespit edildi.",
    scope: "İştirak",
    companyId: "garanti-bbva-leasing",
    country: "TR",
    city: "İstanbul",
    campus: "Levent Ofisi",
    department: "Üretim",
    authorId: "p04",
    time: "Dün 14:30",
    priority: "İştirak"
  },
  {
    id: "ann-53",
    title: "BBVA Technology Blokzincir Tabanlı Akıllı Tedarik",
    body: "İştirakler arası malzeme tedarik sözleşmelerinin akıllı kontratlarla otomatik onaylanmasını sağlayan blokzincir altyapısı.",
    scope: "İştirak",
    companyId: "bbva-technology",
    country: "TR",
    city: "İstanbul",
    campus: "BBVA Technology Dijital Kampüs",
    department: "Bulut Teknolojileri",
    authorId: "p02",
    time: "Bugün 13:30",
    priority: "İştirak"
  },
  {
    id: "ann-54",
    title: "BBVA Seguros Evcil Hayvan Sigortası Yenilikçi Ekranlar",
    body: "Mobil uygulama üzerinden pati fotoğraflarıyla evcil hayvan kimlik tespiti ve hızlı sigorta poliçesi oluşturma modülü.",
    scope: "İştirak",
    companyId: "bbva-seguros",
    country: "TR",
    city: "İstanbul",
    campus: "BBVA Seguros Genel Müdürlük",
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
];

const initialMessageSpaces = [
  {
    id: "msg-holding",
    name: "BBVA Global Flow",
    description: "Tüm grup şirketleri inovasyon temsilcileri akışı.",
    companyId: "bbva-group",
    scope: "Holding geneli",
    members: ["p01", "p02", "p05", "p06", "p10", "p15"],
    messages: [
      { userId: "p02", body: "Bu hafta BBVA Technology olarak yapay zeka analiz motorunu çoklu dil desteğine uyarladık. İspanyolca ve Portekizce fikirler de artık otomatik puanlanabiliyor.", time: "09:22" },
      { userId: "p01", body: "Harika! BBVA, S.A. sürdürülebilirlik fonlama fikrini de borsa tahtasına aldık, SA Coin bakiyelerinizi kontrol edin.", time: "09:27" },
      { userId: "p10", body: "BBVA México banking app energy storage designs are uploaded. Ready for group strategy review.", time: "10:14" },
      { userId: "p15", body: "We started a new carbon offset financing pilot in Madrid. Early portfolio performance remains excellent.", time: "11:35" }
    ]
  },
  {
    id: "msg-bbva-es",
    name: "BBVA FinTech Room",
    description: "BBVA, S.A. açık bankacılık ve finansal teknolojiler grubu.",
    companyId: "bbva-es",
    scope: "İştirak",
    members: ["p02", "p05", "u3", "u4", "u5"],
    messages: [
      { userId: "u3", body: "KOBİ'ler için geliştirdiğimiz yeşil finansman API'leri test ortamında stabil çalışıyor. Fikirlerinizi bekliyoruz.", time: "10:05" },
      { userId: "p05", body: "Lucía Hanım, sürdürülebilirlik puan kartı servisini de bu API ile bağlayabiliriz. Entegrasyon dokümanını inceledim.", time: "10:14" },
      { userId: "p02", body: "Yapay zeka analiz modelimiz de KOBİ işlem geçmişini tarayıp karbon emisyon katsayısı üretebiliyor. BBVA, S.A. veritabanıyla entegre edebiliriz.", time: "10:30" },
      { userId: "u5", body: "Emeklilik tarafındaki tasarruf verilerini de buraya akıtıp bireysel kullanıcılara çevre rozeti dağıtabiliriz.", time: "11:15" }
    ]
  },
  {
    id: "msg-research",
    name: "BBVA Research Green Tech",
    description: "BBVA Research sürdürülebilirlik, yeşil finans ve karbon emisyonu azaltma araştırma grubu.",
    companyId: "bbva-research",
    scope: "İştirak",
    members: ["p03", "p07", "p11", "p13", "p15", "p16"],
    messages: [
      { userId: "p15", body: "We are preparing a new ESG scoring model for our Madrid portfolio. I hope we can reduce carbon-intensive exposure by another 8%.", time: "11:12" },
      { userId: "p16", body: "Carlos, I uploaded the macroeconomic analysis from the preliminary study. The forecast remains solid.", time: "11:25" },
      { userId: "p03", body: "Levent Ofisi Ar-Ge ekibi olarak, biz de sürdürülebilir kredi skorlama otomasyon projesinin verilerini sisteme yükledik.", time: "12:00" },
      { userId: "p13", body: "Bogotá team stands ready to receive the low-carbon financing data from Madrid. Colombian clients are asking for ESG metrics.", time: "12:45" },
      { userId: "p11", body: "Mexico City onboarding automation will also reduce processing time. Ready to trial this month.", time: "13:10" }
    ]
  },
  {
    id: "msg-am",
    name: "BBVA Asset Management Lab",
    description: "BBVA Asset Management portföy yönetimi ve yeni nesil yatırım ürünleri geliştirme grubu.",
    companyId: "bbva-am",
    scope: "İştirak",
    members: ["p03", "p08", "p12", "u9", "u10"],
    messages: [
      { userId: "p12", body: "We have finalized testing the new ESG-weighted portfolio model in Mexico City. Risk-adjusted return increased by 18%.", time: "14:20" },
      { userId: "p08", body: "Excellent Robert! Madrid team is interested in testing this model for institutional grade portfolios. Send us the raw data.", time: "14:45" },
      { userId: "p03", body: "Levent Ofisi Ar-Ge ekibi olarak, geri dönüştürülmüş veri setlerimizin doğrulama test sonuçlarını sisteme kaydettik.", time: "15:15" }
    ]
  },
  {
    id: "msg-switzerland",
    name: "BBVA Switzerland Private Banking",
    description: "BBVA Switzerland özel bankacılık ve varlıklı müşteri deneyimi analizleri.",
    companyId: "bbva-switzerland",
    scope: "İştirak",
    members: ["p04", "p14", "u13"],
    messages: [
      { userId: "p14", body: "The new private banking onboarding trials in Zürih are starting next Monday. We need to verify compliance checks.", time: "09:30" },
      { userId: "p04", body: "Dieter, Lima ekibi olarak portföy yönetim panelindeki risk skorlama güncellemesini pushladık. Uzaktan güncelleyebilirsiniz.", time: "10:15" },
      { userId: "u13", body: "Compliance system is online. We can monitor everything from the Zürih console. Let's run the first onboarding cycle.", time: "10:45" }
    ]
  },
  {
    id: "msg-mexico",
    name: "BBVA México Retail Circle",
    description: "BBVA México şube içi deneyim ve omni-channel bankacılık teknolojileri.",
    companyId: "bbva-mexico",
    scope: "İştirak",
    members: ["u1", "u2", "p02"],
    messages: [
      { userId: "u1", body: "Şube içi otonom işlem kiosklarımızın tasarımı tamamlandı. Mexico City pilot şubemizde kuruluma başlıyoruz.", time: "13:10" },
      { userId: "u2", body: "BBVA Colombia olarak biz de kasasız şube konseptini inceliyoruz. Lojistik ve kart entegrasyonunda ortak çalışabiliriz.", time: "13:30" },
      { userId: "p02", body: "Yapay zeka ekibimiz kiosk ekranlarına kişiye özel ürün öneri motoru entegre edebilir. API bağlantılarını hazırladık.", time: "14:05" }
    ]
  },
  {
    id: "msg-dx",
    name: "BBVA Technology AI & Analytics Hub",
    description: "BBVA Technology yapay zekâ, GenAI ve büyük veri analitiği hub'ı.",
    companyId: "bbva-technology",
    scope: "İştirak",
    members: ["p02", "p05", "u3", "u4"],
    messages: [
      { userId: "p02", body: "Borsa verilerindeki dalgalanmaları ve AI sinyal skorlarını tahminleyen yeni bir GenAI asistan modeli üzerinde çalışıyoruz.", time: "15:12" },
      { userId: "u4", body: "Harika Mert. Bu modeli holding genel kurulunda strateji sunumuna dahil edelim. Canlı demo yapabilir miyiz?", time: "15:30" },
      { userId: "p02", body: "Tabii Mateo Bey, arayüze özel bir widget ekledik. Canlı veri özetleme fonksiyonu şu an aktif.", time: "15:45" }
    ]
  },
  {
    id: "msg-garanti",
    name: "Garanti BBVA Clean Energy Finance",
    description: "Garanti BBVA sürdürülebilir finansman ve yeşil kredi optimizasyonu grubu.",
    companyId: "garanti-bbva",
    scope: "Holding geneli",
    members: ["p06", "p10", "u7", "u8"],
    messages: [
      { userId: "p10", body: "BBVA México tarafında yeşil mevduat ürünü için fiyatlama modelini güncelledik. Bu modeli Türkiye'deki yeşil kredi ürünlerine de uyarlayabiliriz.", time: "16:22" },
      { userId: "p06", body: "Mateo, Madrid ekibi de benzer bir sürdürülebilir finansman fiyatlama modeli üzerinde çalışıyor. Fiyatlama modellerini paylaşalım.", time: "16:45" },
      { userId: "u8", body: "Anlaştık. Her iki pazardaki düzenleyici çerçeveyi derleyip ortak bir algoritma oluşturuyorum.", time: "17:15" }
    ]
  },
  {
    id: "msg-insurance",
    name: "InsurTech Circle",
    description: "BBVA Seguros ve Garanti BBVA Emeklilik yeni nesil dijital sigortacılık fikir odası.",
    companyId: "bbva-seguros",
    scope: "İştirak",
    members: ["p05", "u5", "u11"],
    messages: [
      { userId: "p05", body: "Yapay zeka tabanlı oto hasar tespiti pilot projemiz hasar ödeme sürelerini %80 kısalttı.", time: "11:20" },
      { userId: "u5", body: "Bu teknolojiyi Garanti BBVA Emeklilik'in hayat sigortası sağlık beyanı doğrulama süreçlerine de uyarlayabilir miyiz?", time: "11:45" },
      { userId: "u11", body: "Latin America insurtech trends show image based claim validation is rising fast. We should coordinate a joint workshop.", time: "12:15" }
    ]
  },
  {
    id: "msg-holding-hr",
    name: "BBVA Global HR & Talent",
    description: "Holding geneli çalışan deneyimi ve yetenek yönetimi grubu.",
    companyId: "bbva-group",
    scope: "Holding geneli",
    members: ["p01", "p09", "u5"],
    messages: [
      { userId: "p01", body: "İnovasyon ödüllerinin kapsamını genişlettik. Tüm ülkelerdeki çalışanlar katılabilecek.", time: "09:30" },
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
    email: "ayse.yilmaz@bbva.example",
    employeeId: "SA-10452",
    company: "Garanti BBVA A.Ş.",
    companyId: "garanti-bbva",
    department: "Müşteri Deneyimi",
    location: "Levent Ofisi",
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
    email: "mehmet.demir@bbva.example",
    employeeId: "SA-88312",
    company: "Garanti BBVA Faktoring A.Ş.",
    companyId: "garanti-bbva-faktoring",
    department: "Operasyon",
    location: "Levent Ofisi",
    city: "İstanbul",
    region: "Marmara",
    role: "Operasyon Uzmanı",
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
    name: "Lucía Herrera",
    email: "lucia.herrera@bbva.example",
    employeeId: "SA-22018",
    company: "Garanti BBVA A.Ş.",
    companyId: "garanti-bbva",
    department: "Dijital Bankacılık",
    location: "Levent Ofisi",
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
    name: "Mateo Aguirre",
    email: "mateo.aguirre@bbva.example",
    employeeId: "SA-01004",
    company: "Banco Bilbao Vizcaya Argentaria, S.A.",
    companyId: "bbva-group",
    department: "Strateji",
    location: "İstanbul Ofisi",
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
    email: "merve.aydin@bbva.example",
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
  // ES Users
  {
    id: "u6",
    name: "Sarah Jenkins",
    email: "sarah.jenkins@bbva.example",
    employeeId: "SA-ES-021",
    company: "BBVA Seguros, S.A.",
    companyId: "bbva-seguros",
    department: "Sales",
    location: "BBVA Seguros Genel Müdürlük",
    city: "Madrid",
    region: "Madrid",
    role: "Sales Executive",
    roleKey: "employee",
    seniority: "Expert",
    isManager: false,
    isAdmin: false,
    voteCreditBalance: 20,
    monthlyVoteCredit: 30,
    badges: ["ES Pioneer"],
    country: "ES"
  },
  {
    id: "u7",
    name: "John Sterling",
    email: "john.sterling@bbva.example",
    employeeId: "SA-ES-001",
    company: "BBVA Research, S.A.",
    companyId: "bbva-research",
    department: "Makroekonomi",
    location: "BBVA Research Ofisi",
    city: "Madrid",
    region: "Madrid",
    role: "Research Mgr",
    roleKey: "manager",
    seniority: "Manager",
    isManager: true,
    isAdmin: false,
    voteCreditBalance: 30,
    monthlyVoteCredit: 40,
    badges: ["Green Pioneer"],
    country: "ES"
  },
  {
    id: "u8",
    name: "Oliver Watson",
    email: "oliver.watson@bbva.example",
    employeeId: "SA-ES-002",
    company: "Banco Bilbao Vizcaya Argentaria, S.A.",
    companyId: "bbva-group",
    department: "Strategy",
    location: "Ciudad BBVA – La Vela Kulesi",
    city: "Madrid",
    region: "Madrid",
    role: "Global Strategist",
    roleKey: "executive",
    seniority: "C-level",
    isManager: true,
    isAdmin: true,
    voteCreditBalance: 45,
    monthlyVoteCredit: 50,
    badges: ["Global Advisor"],
    country: "ES"
  },
  // MX Users
  {
    id: "u9",
    name: "Emily Rose",
    email: "emily.rose@bbva.example",
    employeeId: "SA-MX-015",
    company: "BBVA México, S.A.",
    companyId: "bbva-mexico",
    department: "Tedarik Zinciri",
    location: "Monterrey Lojistik Merkezi",
    city: "Monterrey",
    region: "Nuevo León",
    role: "Terminal Supervisor",
    roleKey: "field",
    seniority: "Lead",
    isManager: false,
    isAdmin: false,
    voteCreditBalance: 18,
    monthlyVoteCredit: 30,
    badges: ["MX Pioneer"],
    country: "MX"
  },
  {
    id: "u10",
    name: "Michael Vance",
    email: "michael.vance@bbva.example",
    employeeId: "SA-MX-001",
    company: "BBVA México, S.A.",
    companyId: "bbva-mexico",
    department: "Dijital Bankacılık",
    location: "BBVA México HQ",
    city: "Mexico City",
    region: "CDMX",
    role: "Storage Director",
    roleKey: "manager",
    seniority: "Director",
    isManager: true,
    isAdmin: false,
    voteCreditBalance: 35,
    monthlyVoteCredit: 40,
    badges: ["Storage Pioneer"],
    country: "MX"
  },
  {
    id: "u11",
    name: "Jessica Taylor",
    email: "jessica.taylor@bbva.example",
    employeeId: "SA-MX-002",
    company: "Banco Bilbao Vizcaya Argentaria, S.A.",
    companyId: "bbva-group",
    department: "Strategy",
    location: "Mexico City Ofisi",
    city: "Mexico City",
    region: "CDMX",
    role: "MX Market Executive",
    roleKey: "executive",
    seniority: "C-level",
    isManager: true,
    isAdmin: true,
    voteCreditBalance: 40,
    monthlyVoteCredit: 50,
    badges: ["MX Strategist"],
    country: "MX"
  },
  // CO Users
  {
    id: "u12",
    name: "Hans Müller",
    email: "hans.mueller@bbva.example",
    employeeId: "SA-CO-012",
    company: "BBVA Colombia S.A.",
    companyId: "bbva-colombia",
    department: "Tedarik Zinciri",
    location: "Medellín Depo",
    city: "Medellín",
    region: "Antioquia",
    role: "Logistics Coordinator",
    roleKey: "employee",
    seniority: "Senior Expert",
    isManager: false,
    isAdmin: false,
    voteCreditBalance: 22,
    monthlyVoteCredit: 30,
    badges: ["CO Log-Expert"],
    country: "CO"
  },
  {
    id: "u13",
    name: "Dieter Schmidt",
    email: "dieter.schmidt@bbva.example",
    employeeId: "SA-PE-001",
    company: "BBVA Perú S.A.",
    companyId: "bbva-peru",
    department: "Şebeke Operasyonları",
    location: "BBVA Perú HQ",
    city: "Lima",
    region: "Lima",
    role: "Operations Manager",
    roleKey: "manager",
    seniority: "Manager",
    isManager: true,
    isAdmin: false,
    voteCreditBalance: 28,
    monthlyVoteCredit: 40,
    badges: ["Mobility Pioneer"],
    country: "PE"
  },
  // ES Users
  {
    id: "u14",
    name: "Carlos Ruiz",
    email: "carlos.ruiz@bbva.example",
    employeeId: "SA-ES-001",
    company: "BBVA, S.A.",
    companyId: "bbva-es",
    department: "Kurumsal Bankacılık",
    location: "BBVA Bilbao Akademi",
    city: "Bilbao",
    region: "País Vasco",
    role: "Bilbao Şube Müdürü",
    roleKey: "manager",
    seniority: "Manager",
    isManager: true,
    isAdmin: false,
    voteCreditBalance: 32,
    monthlyVoteCredit: 40,
    badges: ["Banking Pioneer"],
    country: "ES"
  },
  {
    id: "u15",
    name: "Maria Ortega",
    email: "maria.ortega@bbva.example",
    employeeId: "SA-ES-010",
    company: "BBVA, S.A.",
    companyId: "bbva-es",
    department: "Hazine",
    location: "Ciudad BBVA – La Vela Kulesi",
    city: "Madrid",
    region: "Madrid",
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
    title: "BBVA Mobile kullanıcıları için AI destekli yatırım danışmanı",
    summary: "Müşterilerin harcama alışkanlıkları ve risk eğilimlerine göre fon ve hisse sepeti öneren yapay zeka entegrasyonu.",
    problem: "Bireysel yatırımcılar karmaşık piyasa verileri yüzünden yatırım kararı almakta zorlanıyor.",
    solution: "Mobil şubeye entegre, portföy dağılımını otomatik yapıp öneriler sunan bir AI asistan modülü.",
    type: "Yeni ürün / hizmet",
    company: "BBVA, S.A.",
    companyId: "bbva-es",
    department: "Dijital Bankacılık",
    location: "Levent Ofisi",
    city: "İstanbul",
    authorId: "u3",
    authorLabel: "Lucía Herrera",
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
      { user: "Mateo Aguirre", body: "Çok değerli bir çalışma, BBVA Innovation Lab ekibiyle test etmeye başlayalım.", manager: true },
      { user: "Ayşe Yılmaz", body: "Kullanıcı deneyimi akışını basitleştirmek kritik olacaktır.", manager: false }
    ],
    tags: ["FinTech", "AI", "BBVA", "Yatırım"],
    createdAt: "2026-06-10",
    translations: {
          "tr": {
                "title": "BBVA Mobile kullanıcıları için AI destekli yatırım danışmanı",
                "summary": "Müşterilerin harcama alışkanlıkları ve risk eğilimlerine göre fon ve hisse sepeti öneren yapay zeka entegrasyonu.",
                "problem": "Bireysel yatırımcılar karmaşık piyasa verileri yüzünden yatırım kararı almakta zorlanıyor.",
                "solution": "Mobil şubeye entegre, portföy dağılımını otomatik yapıp öneriler sunan bir AI asistan modülü."
          },
          "en": {
                "title": "AI-powered investment advisor for BBVA Mobilee users",
                "summary": "Artificial intelligence integration that suggests fund and stock portfolios based on customers' spending habits and risk tendencies.",
                "problem": "Retail investors struggle to make investment decisions due to complex market data.",
                "solution": "An AI assistant module integrated into the mobile branch, automating portfolio allocation and providing recommendations."
          },
          "de": {
                "title": "KI-gestützter Anlageberater für BBVA Mobile-Nutzer",
                "summary": "KI-Integration, die Fonds- und Aktienportfolios basierend auf den Ausgabegewohnheiten und Risikoneigungen der Kunden vorschlägt.",
                "problem": "Kleinanleger tun sich aufgrund komplexer Marktdaten schwer, Anlageentscheidungen zu treffen.",
                "solution": "Ein in die mobile Filiale integriertes KI-Assistentenmodul, das die Portfolioallokation automatisiert und Empfehlungen bereitstellt."
          },
          "es": {
                "title": "Asesor de inversión impulsado por IA para usuarios de BBVA Móvil",
                "summary": "Integración de inteligencia artificial que sugiere carteras de fondos y acciones según los hábitos de gasto y las tendencias de riesgo de los clientes.",
                "problem": "Los inversores minoristas tienen dificultades para tomar decisiones de inversión debido a la complejidad de los datos del mercado.",
                "solution": "Un módulo asistente de IA integrado en la sucursal móvil, que automatiza la asignación de carteras y ofrece recomendaciones."
          }
    }
  },
  {
    id: "idea-2",
    title: "BBVA México şubelerinde akıllı tedarik ve dinamik kaynak ataması",
    summary: "Gebze lojistik merkezi verileriyle mağaza stoklarını anlık eşleyip en çok satan ürünleri öne çıkaran akıllı raf sistemi.",
    problem: "Bazı ürünler rafta uzun süre kalırken popüler teknolojik ürünlerin stoku hızlı bitiyor ve satış kaçıyor.",
    solution: "Satış hızı ve lojistik transit sürelerini tahminleyen yapay zeka destekli bir mağaza stok paneli.",
    type: "Süreç otomasyonu",
    company: "BBVA México, S.A.",
    companyId: "bbva-mexico",
    department: "Tedarik Zinciri",
    location: "BBVA México HQ",
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
      { user: "Lucía Herrera", body: "Gebze deposundaki otomasyon sistemleri ile entegre edilirse harika olur.", manager: true }
    ],
    tags: ["Perakende", "Tedarik", "BBVA México", "Akıllı Raf"],
    createdAt: "2026-06-12",
    translations: {
          "tr": {
                "title": "BBVA México şubelerinde akıllı tedarik ve dinamik kaynak ataması",
                "summary": "Gebze lojistik merkezi verileriyle mağaza stoklarını anlık eşleyip en çok satan ürünleri öne çıkaran akıllı raf sistemi.",
                "problem": "Bazı ürünler rafta uzun süre kalırken popüler teknolojik ürünlerin stoku hızlı bitiyor ve satış kaçıyor.",
                "solution": "Satış hızı ve lojistik transit sürelerini tahminleyen yapay zeka destekli bir mağaza stok paneli."
          },
          "en": {
                "title": "Smart procurement and dynamic resource allocation in BBVA México branches",
                "summary": "Smart shelf system that instantly matches store stocks with Gebze logistics center data and highlights the best-selling products.",
                "problem": "Some products stay on the shelf for a long time while popular technology products run out of stock quickly, causing lost sales.",
                "solution": "An AI-powered store stock panel that predicts sales speed and logistics transit times."
          },
          "de": {
                "title": "Intelligente Beschaffung und dynamische Ressourcenzuweisung in BBVA-México-Filialen",
                "summary": "Intelligentes Regalsystem, das die Filialbestände sofort mit den Daten des Logistikzentrums Gebze abgleicht und Bestseller hervorhebt.",
                "problem": "Einige Produkte bleiben lange im Regal, während beliebte Technologieprodukte schnell ausverkauft sind, was zu Umsatzeinbußen führt.",
                "solution": "Ein KI-gestütztes Filialbestands-Panel, das Verkaufsgeschwindigkeiten und Logistiklaufzeiten vorhersagt."
          },
          "es": {
                "title": "Abastecimiento inteligente y asignación dinámica de recursos en sucursales BBVA México",
                "summary": "Sistema de estanterías inteligentes que sincroniza al instante el stock de la tienda con el centro logístico de Gebze y destaca los más vendidos.",
                "problem": "Algunos productos permanecen en el estante mucho tiempo, mientras que los tecnológicos populares se agotan rápido, perdiendo ventas.",
                "solution": "Un panel de control de stock impulsado por IA que predice la velocidad de venta y los tiempos de tránsito logístico."
          }
    }
  },
  {
    id: "idea-3",
    title: "Garanti BBVA Yeşil Kredi: Elektrikli araçlar için optimize edilmiş finansman modeli",
    summary: "Elektrikli araç kredisi kullanan müşterilerin ödeme planlarını ve risk skorlarını anlık izleyen IoT destekli modül.",
    problem: "Elektrikli araç finansmanında batarya değer kaybı yüzünden teminat riski %30 daha hızlı artıyor.",
    solution: "Araç değer kaybını ve risk skorunu kablosuz olarak ölçüp şube ekranına ve telefona uyarı gönderen modül.",
    type: "Yeni ürün / hizmet",
    company: "Garanti BBVA A.Ş.",
    companyId: "garanti-bbva",
    department: "Ar-Ge",
    location: "Levent Ofisi",
    city: "İstanbul",
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
    tags: ["Sanayi", "IoT", "Elektrikli Araç", "Garanti BBVA"],
    createdAt: "2026-06-14",
    translations: {
          "tr": {
                "title": "Garanti BBVA Yeşil Kredi: Elektrikli araçlar için optimize edilmiş finansman modeli",
                "summary": "Elektrikli araç kredisi kullanan müşterilerin ödeme planlarını ve risk skorlarını anlık izleyen IoT destekli modül.",
                "problem": "Elektrikli araç finansmanında batarya değer kaybı yüzünden teminat riski %30 daha hızlı artıyor.",
                "solution": "Araç değer kaybını ve risk skorunu kablosuz olarak ölçüp şube ekranına ve telefona uyarı gönderen modül."
          },
          "en": {
                "title": "Garanti BBVA Green Loan: Optimized smart financing model for electric vehicles",
                "summary": "An IoT-assisted module that instantly monitors payment plans and risk scores of electric vehicle loan customers.",
                "problem": "Collateral risk in electric vehicle financing increases 30% faster due to battery depreciation.",
                "solution": "A module that wirelessly measures vehicle depreciation and risk score, sending alerts to branch screen and phone."
          },
          "de": {
                "title": "Garanti BBVA Green Loan: Optimiertes intelligentes Finanzierungsmodell für Elektrofahrzeuge",
                "summary": "Ein IoT-gestütztes Modul, das Zahlungspläne und Risikobewertungen von E-Fahrzeug-Kreditkunden sofort überwacht.",
                "problem": "Das Sicherheitenrisiko bei der Finanzierung von Elektrofahrzeugen steigt aufgrund der Batterieabwertung 30 % schneller.",
                "solution": "Ein Modul, das drahtlos Fahrzeugabwertung und Risikobewertung misst und Warnungen an den Filialbildschirm und das Telefon sendet."
          },
          "es": {
                "title": "Garanti BBVA Préstamo Verde: Modelo de financiamiento inteligente optimizado para vehículos eléctricos",
                "summary": "Un módulo asistido por IoT que monitorea al instante los planes de pago y puntajes de riesgo de clientes con préstamos de vehículos eléctricos.",
                "problem": "El riesgo de garantía en el financiamiento de vehículos eléctricos aumenta un 30% más rápido por la depreciación de la batería.",
                "solution": "Un módulo que mide de forma inalámbrica la depreciación del vehículo y el puntaje de riesgo, enviando alertas a la pantalla de la sucursal y al móvil."
          }
    }
  },
  
  // ES Ideas (English)
  {
    id: "idea-4",
    title: "Predictive AI models for retail credit risk forecasting",
    summary: "Using historical transaction and macroeconomic telemetry to predict default risk with 95% accuracy for Spanish portfolio matching.",
    problem: "Risk variability causes capital fluctuation, leading to inefficiencies in matching Banco de España capital requirements.",
    solution: "Implement an AI-based forecast panel at BBVA Research to feed real-time risk forecasts.",
    type: "Teknik geliştirme",
    company: "BBVA Research, S.A.",
    companyId: "bbva-research",
    department: "Makroekonomi",
    location: "BBVA Research Ofisi",
    city: "Madrid",
    authorId: "u7",
    authorLabel: "John Sterling",
    anonymity: "İsmimle paylaş",
    visibility: "Holding geneli",
    status: "review",
    estimatedImpact: "Yüksek",
    estimatedCost: "Orta",
    implementationTime: "3 months",
    successMetric: "Forecasting accuracy increase and capital buffer reduction",
    riskNotes: "Macroeconomic model APIs must be integrated securely.",
    communityScore: 85,
    strategicScore: 90,
    aiScore: 92,
    credits: 180,
    supporters: 42,
    marketChange: 8.1,
    country: "ES",
    comments: [
      { user: "Oliver Watson", body: "Excellent model. Fits our risk management roadmap in Spain.", manager: true }
    ],
    tags: ["Banking", "AI", "Risk", "Credit"],
    createdAt: "2026-06-11",
    translations: {
          "tr": {
                "title": "Perakende kredi riski tahmini için tahminleyici AI modelleri",
                "summary": "İspanya portföy eşleşmesi için temerrüt riskini %95 doğrulukla tahmin etmek amacıyla geçmiş işlem ve makroekonomik telemetriyi kullanmak.",
                "problem": "Risk değişkenliği sermaye dalgalanmasına yol açarak Banco de España sermaye gerekliliklerini karşılamada verimsizlik yaratıyor.",
                "solution": "Gerçek zamanlı risk tahminlerini beslemek için BBVA Research'te yapay zeka tabanlı bir tahmin paneli uygulamak."
          },
          "en": {
                "title": "Predictive AI models for retail credit risk forecasting",
                "summary": "Using historical transaction and macroeconomic telemetry to predict default risk with 95% accuracy for Spanish portfolio matching.",
                "problem": "Risk variability causes capital fluctuation, leading to inefficiencies in matching Banco de España capital requirements.",
                "solution": "Implement an AI-based forecast panel at BBVA Research to feed real-time risk forecasts."
          },
          "de": {
                "title": "Prädiktive KI-Modelle für die Prognose von Kreditrisiken im Privatkundengeschäft",
                "summary": "Nutzung historischer Transaktions- und Makrodaten zur Vorhersage des Ausfallrisikos mit 95 % Genauigkeit für das spanische Portfolio.",
                "problem": "Risikovariabilität führt zu Kapitalschwankungen und damit zu Ineffizienzen bei der Einhaltung der Kapitalanforderungen der Banco de España.",
                "solution": "Implementierung eines KI-basierten Vorhersage-Panels bei BBVA Research zur Bereitstellung von Echtzeit-Risikoprognosen."
          },
          "es": {
                "title": "Modelos predictivos de IA para la previsión del riesgo crediticio minorista",
                "summary": "Uso de datos históricos de transacciones y macroeconómicos para predecir el riesgo de impago con un 95% de precisión para la cartera española.",
                "problem": "La variabilidad del riesgo causa fluctuaciones de capital, dificultando el cumplimiento de los requisitos del Banco de España.",
                "solution": "Implementar un panel de pronóstico basado en IA en BBVA Research para enviar previsiones de riesgo en tiempo real."
          }
    }
  },
  {
    id: "idea-5",
    title: "Madrid branch onboarding speedup through OCR document scan",
    summary: "Implement high-speed OCR cameras at Madrid branches to automatically register incoming BBVA Seguros policy documents.",
    problem: "Manual document entries at branch back office cause logistic bottlenecks and delay onboarding for Spanish clients.",
    solution: "Deploy a small OCR camera rig on the document intake desk to scan policy document barcodes automatically.",
    type: "Süreç otomasyonu",
    company: "BBVA Seguros, S.A.",
    companyId: "bbva-seguros",
    department: "Müşteri Deneyimi",
    location: "BBVA Seguros Genel Müdürlük",
    city: "Madrid",
    authorId: "u6",
    authorLabel: "Sarah Jenkins",
    anonymity: "İsmimle paylaş",
    visibility: "İştirak içi",
    status: "pilot",
    estimatedImpact: "Yüksek",
    estimatedCost: "Düşük",
    implementationTime: "1 month",
    successMetric: "Onboarding duration reduction by 25%",
    riskNotes: "Camera hardware must meet strict data protection requirements.",
    communityScore: 82,
    strategicScore: 85,
    aiScore: 88,
    credits: 145,
    supporters: 35,
    marketChange: 2.6,
    country: "ES",
    comments: [],
    tags: ["Insurance", "Automation", "Madrid", "OCR"],
    createdAt: "2026-06-13",
    translations: {
          "tr": {
                "title": "OCR belge tarama ile Madrid şube onboarding hızlandırması",
                "summary": "Gelen BBVA Seguros poliçe belgelerini otomatik olarak kaydetmek için Madrid şubelerinde yüksek hızlı OCR kameraları uygulamak.",
                "problem": "Şube ofisindeki manuel belge girişleri lojistik darboğazlara neden oluyor ve İspanyol müşterilere onboarding süreçlerini geciktiriyor.",
                "solution": "Poliçe belge barkodlarını otomatik taramak için belge kabul masasına küçük bir OCR kamera sistemi yerleştirmek."
          },
          "en": {
                "title": "Madrid branch onboarding speedup through OCR document scan",
                "summary": "Implement high-speed OCR cameras at Madrid branches to automatically register incoming BBVA Seguros policy documents.",
                "problem": "Manual document entries at branch back office cause logistic bottlenecks and delay onboarding for Spanish clients.",
                "solution": "Deploy a small OCR camera rig on the document intake desk to scan policy document barcodes automatically."
          },
          "de": {
                "title": "Beschleunigung des Onboardings in der Madrider Filiale durch OCR-Dokumentenscan",
                "summary": "Implementierung von Hochgeschwindigkeits-OCR-Kameras in Madrider Filialen zur automatischen Erfassung eingehender BBVA-Seguros-Policendokumente.",
                "problem": "Manuelle Dokumenteneinträge im Filialbüro führen zu logistischen Engpässen und verzögern das Onboarding spanischer Kunden.",
                "solution": "Einsatz eines kleinen OCR-Kamerasystems am Dokumentenannahmeschalter zum automatischen Scannen von Policendokumenten."
          },
          "es": {
                "title": "Aceleración del alta de clientes en la oficina de Madrid mediante OCR",
                "summary": "Implementar cámaras OCR de alta velocidad en oficinas de Madrid para registrar automáticamente los documentos de pólizas de BBVA Seguros.",
                "problem": "Los registros manuales de documentos en la oficina trasera causan cuellos de botella y demoras a clientes españoles.",
                "solution": "Instalar un pequeño soporte de cámara OCR en el mostrador de recepción de documentos para escanear pólizas automáticamente."
          }
    }
  },

  // MX Ideas (English)
  {
    id: "idea-6",
    title: "Mexico City utility-scale digital savings management system",
    summary: "A smart software layer to dynamically allocate customer savings into investment funds during peak market windows.",
    problem: "Idle customer balances during midday earn low yields, while evening market volatility creates missed opportunities.",
    solution: "Install an AI savings dispatch controller that automatically reallocates idle balances during favorable market hours.",
    type: "Süreç otomasyonu",
    company: "BBVA México, S.A.",
    companyId: "bbva-mexico",
    department: "Dijital Bankacılık",
    location: "BBVA México HQ",
    city: "Mexico City",
    authorId: "u10",
    authorLabel: "Michael Vance",
    anonymity: "İsmimle paylaş",
    visibility: "Holding geneli",
    status: "pilot",
    estimatedImpact: "Yüksek",
    estimatedCost: "Yüksek",
    implementationTime: "4 months",
    successMetric: "Revenue optimization per customer portfolio",
    riskNotes: "Reallocation cycle must be balanced with regulatory limits.",
    communityScore: 91,
    strategicScore: 95,
    aiScore: 93,
    credits: 310,
    supporters: 55,
    marketChange: -2.9,
    country: "MX",
    comments: [
      { user: "Jessica Taylor", body: "This will solidify BBVA México position in digital savings.", manager: true }
    ],
    tags: ["Digital Banking", "AI", "Savings", "Mexico"],
    createdAt: "2026-06-14",
    translations: {
          "tr": {
                "title": "Mexico City ölçeğinde dijital tasarruf yönetim sistemi",
                "summary": "Fiyat zirvelerinde müşteri tasarruflarını dinamik olarak yatırım fonlarına dağıtan akıllı bir yazılım katmanı.",
                "problem": "Gün ortasında atıl müşteri bakiyeleri düşük getiri sağlarken, akşam saatlerindeki piyasa oynaklığı fırsat kaybına yol açıyor.",
                "solution": "Elverişli piyasa saatlerinde atıl bakiyeleri otomatik olarak yeniden dağıtan AI tasarruf sevk kontrolörü kurmak."
          },
          "en": {
                "title": "Mexico City utility-scale digital savings management system",
                "summary": "A smart software layer to dynamically allocate customer savings into investment funds during peak market windows.",
                "problem": "Idle customer balances during midday earn low yields, while evening market volatility creates missed opportunities.",
                "solution": "Install an AI savings dispatch controller that automatically reallocates idle balances during favorable market hours."
          },
          "de": {
                "title": "Digitales Sparmanagementsystem für Mexiko-Stadt",
                "summary": "Eine intelligente Softwareebene zur dynamischen Zuweisung von Kundenersparnissen in Investmentfonds bei günstigen Marktfenstern.",
                "problem": "Inaktive Kundensalden erzielen mittags geringe Renditen, während abendliche Marktvolatilität verpasste Chancen schafft.",
                "solution": "Installation einer KI-gestützten Spar-Dispatch-Steuerung, die inaktive Salden während günstiger Marktstunden automatisch umverteilt."
          },
          "es": {
                "title": "Sistema de gestión de ahorro digital a gran escala para Ciudad de México",
                "summary": "Una capa de software inteligente para asignar dinámicamente los ahorros de los clientes a fondos de inversión en ventanas de mercado favorables.",
                "problem": "Los saldos inactivos generan bajos rendimientos al mediodía, mientras que la volatilidad nocturna crea oportunidades perdidas.",
                "solution": "Instalar un controlador de distribución de ahorro con IA que reasigne saldos inactivos durante horas de mercado favorables."
          }
    }
  },
  {
    id: "idea-7",
    title: "Monterrey hub automated document processing line",
    summary: "Add a high-speed automatic document processing line at the Monterrey logistics hub to digitize incoming BBVA México loan paperwork.",
    problem: "Paper-based loan processing limits service capacity for small Mexican business clients who demand fast turnaround.",
    solution: "Deploy an automated document scanning system with robotic sorting arms at the Monterrey hub site.",
    type: "Operasyonel iyileştirme",
    company: "BBVA México, S.A.",
    companyId: "bbva-mexico",
    department: "Tedarik Zinciri",
    location: "Monterrey Lojistik Merkezi",
    city: "Monterrey",
    authorId: "u9",
    authorLabel: "Emily Rose",
    anonymity: "İsmimle paylaş",
    visibility: "İştirak içi",
    status: "new",
    estimatedImpact: "Yüksek",
    estimatedCost: "Yüksek",
    implementationTime: "5 months",
    successMetric: "Document processing throughput per hour",
    riskNotes: "Mechanical hardware requires local parts supplier agreements.",
    communityScore: 79,
    strategicScore: 84,
    aiScore: 81,
    credits: 95,
    supporters: 22,
    marketChange: 6.3,
    country: "MX",
    comments: [],
    tags: ["Banking", "Monterrey", "Automation", "Logistics"],
    createdAt: "2026-06-15",
    translations: {
          "tr": {
                "title": "Monterrey merkezi otomatik belge işleme hattı",
                "summary": "Gelen BBVA México kredi evraklarını dijitalleştirmek için Monterrey lojistik merkezine yüksek hızlı otomatik belge işleme hattı eklemek.",
                "problem": "Kağıt tabanlı kredi süreci, hızlı dönüş talep eden küçük Meksikalı işletme müşterilerine hizmet kapasitesini sınırlandırıyor.",
                "solution": "Monterrey merkez sahasına robotik sıralama kollarına sahip otomatik bir belge tarama sistemi kurmak."
          },
          "en": {
                "title": "Monterrey hub automated document processing line",
                "summary": "Add a high-speed automatic document processing line at the Monterrey logistics hub to digitize incoming BBVA México loan paperwork.",
                "problem": "Paper-based loan processing limits service capacity for small Mexican business clients who demand fast turnaround.",
                "solution": "Deploy an automated document scanning system with robotic sorting arms at the Monterrey hub site."
          },
          "de": {
                "title": "Automatisierte Dokumentenverarbeitungslinie im Monterrey-Hub",
                "summary": "Ergänzung einer automatischen Hochgeschwindigkeits-Dokumentenverarbeitungslinie im Logistikzentrum Monterrey zur Digitalisierung von BBVA-México-Kreditunterlagen.",
                "problem": "Papierbasierte Kreditbearbeitung schränkt die Servicekapazität für kleine mexikanische Geschäftskunden ein, die schnelle Bearbeitung fordern.",
                "solution": "Einsatz eines automatischen Dokumentenscansystems mit Robotersortierarmen am Standort Monterrey."
          },
          "es": {
                "title": "Línea automática de procesamiento de documentos en el centro de Monterrey",
                "summary": "Agregar una línea de procesamiento automático de alta velocidad en el centro de Monterrey para digitalizar la documentación de préstamos de BBVA México.",
                "problem": "El procesamiento de préstamos en papel limita la capacidad de servicio a pequeños clientes empresariales mexicanos que exigen rapidez.",
                "solution": "Desplegar un sistema de escaneo automático con brazos robóticos de clasificación en el centro de Monterrey."
          }
    }
  },

  // CO Ideas (English/Spanish)
  {
    id: "idea-8",
    title: "Sistema automatizado de archivo vertical de documentos en Medellín",
    summary: "Optimización del espacio del depósito de Medellín mediante la instalación de un sistema automatizado de almacenamiento y recuperación vertical (ASRS).",
    problem: "El espacio limitado en el centro logístico de Medellín restringe el volumen de documentación que podemos almacenar.",
    solution: "Utilizar la altura vertical con un sistema inteligente de elevación robótica que apila y recupera archivos automáticamente.",
    type: "Maliyet azaltma",
    company: "BBVA Colombia S.A.",
    companyId: "bbva-colombia",
    department: "Tedarik Zinciri",
    location: "Medellín Depo",
    city: "Medellín",
    authorId: "u12",
    authorLabel: "Hans Müller",
    anonymity: "İsmimle paylaş",
    visibility: "Holding geneli",
    status: "review",
    estimatedImpact: "Yüksek",
    estimatedCost: "Orta",
    implementationTime: "4 months",
    successMetric: "Warehouse storage capacity increase per square meter",
    riskNotes: "Requires building permit from Medellín city council.",
    communityScore: 80,
    strategicScore: 83,
    aiScore: 85,
    credits: 120,
    supporters: 29,
    marketChange: 1.1,
    country: "CO",
    comments: [
      { user: "Dieter Schmidt", body: "Excellent layout. Can serve as a template for other Latin American cities.", manager: true }
    ],
    tags: ["Logistics", "ASRS", "Medellín", "Warehouse"],
    createdAt: "2026-06-12",
    translations: {
          "tr": {
                "title": "Medellín otomatik dikey belge arşivleme tesisi",
                "summary": "Dikey otomatik depolama ve geri getirme sistemi (ASRS) kurarak Medellín deposu alanını optimize etmek.",
                "problem": "Medellín lojistik merkezindeki sınırlı depo alanı, saklayabileceğimiz belge hacmini kısıtlıyor.",
                "solution": "Dosyaları otomatik olarak üst üste yığan ve geri getiren akıllı bir robotik asansör sistemi ile dikey yüksekliği kullanmak."
          },
          "en": {
                "title": "Medellín automated vertical document archive facility",
                "summary": "Optimize Medellín depot space by installing a vertical automated storage and retrieval system (ASRS).",
                "problem": "Limited warehouse footprint in Medellín logistics center limits the documentation volume we can hold.",
                "solution": "Utilize vertical height with a smart robotic lift system that stacks and retrieves files automatically."
          },
          "de": {
                "title": "Automatisiertes vertikales Dokumentenarchiv in Medellín",
                "summary": "Optimierung des Lagerplatzes in Medellín durch Installation eines vertikalen automatisierten Lager- und Bereitstellungssystems (ASRS).",
                "problem": "Die begrenzte Lagerfläche im Logistikzentrum Medellín schränkt das Dokumentenvolumen ein, das wir lagern können.",
                "solution": "Nutzung der vertikalen Höhe mit einem intelligenten robotischen Liftsystem, das Akten automatisch stapelt und auslagert."
          },
          "es": {
                "title": "Sistema automatizado de archivo vertical de documentos en Medellín",
                "summary": "Optimización del espacio del depósito de Medellín mediante la instalación de un sistema automatizado de almacenamiento y recuperación vertical (ASRS).",
                "problem": "El espacio limitado en el centro logístico de Medellín restringe el volumen de documentación que podemos almacenar.",
                "solution": "Utilizar la altura vertical con un sistema inteligente de elevación robótica que apila y recupera archivos automáticamente."
          }
    }
  },

  // PE Ideas (Spanish/English)
  {
    id: "idea-9",
    title: "Piloto de financiamiento verde (ESG) en BBVA Perú",
    summary: "Integrar un circuito piloto compacto de evaluación ESG para canalizar financiamiento directo a proyectos sostenibles en Lima.",
    problem: "El financiamiento tradicional genera una huella de carbono significativa, arriesgando futuras exigencias ESG regionales.",
    solution: "Un circuito piloto que canaliza hasta 10 millones de soles al mes en financiamiento verde, evaluado para impacto local.",
    type: "Sürdürülebilirlik",
    company: "BBVA Perú S.A.",
    companyId: "bbva-peru",
    department: "Şebeke Operasyonları",
    location: "BBVA Perú HQ",
    city: "Lima",
    authorId: "u14",
    authorLabel: "Carlos Ruiz",
    anonymity: "İsmimle paylaş",
    visibility: "Holding geneli",
    status: "pilot",
    estimatedImpact: "Yüksek",
    estimatedCost: "Yüksek",
    implementationTime: "8 months",
    successMetric: "Monthly green financing volume and ESG rating improvements",
    riskNotes: "Extremely high initial investment. Government incentive support is required.",
    communityScore: 93,
    strategicScore: 96,
    aiScore: 95,
    credits: 280,
    supporters: 48,
    marketChange: 4.7,
    country: "PE",
    comments: [
      { user: "Maria Ortega", body: "This will make BBVA Perú the leading green financing bank in the region.", manager: false }
    ],
    tags: ["Green Financing", "ESG", "Peru", "Banking", "Sustainability"],
    createdAt: "2026-06-14",
    translations: {
          "tr": {
                "title": "BBVA Perú yeşil finansman (ESG) pilotu",
                "summary": "Lima'daki sürdürülebilir projelere doğrudan finansman kanalize etmek için kompakt bir ESG değerlendirme pilot döngüsü entegre etmek.",
                "problem": "Geleneksel finansman önemli miktarda karbon ayak izi üreterek gelecekte bölgesel ESG taleplerinin riskini doğuruyor.",
                "solution": "Yerel etki için değerlendirilen, ayda 10 milyon sole kadar yeşil finansman kanalize eden küçük bir pilot döngü."
          },
          "en": {
                "title": "BBVA Perú green financing (ESG) pilot",
                "summary": "Integrate a compact ESG evaluation pilot loop to channel direct financing to sustainable projects in Lima.",
                "problem": "Traditional financing generates significant carbon footprint, risking future regional ESG requirements.",
                "solution": "A small pilot loop channeling up to 10 million soles monthly in green financing, evaluated for local impact."
          },
          "de": {
                "title": "Pilotprojekt für grüne Finanzierung (ESG) bei BBVA Perú",
                "summary": "Integration eines kompakten ESG-Bewertungs-Pilotkreislaufs zur direkten Finanzierung nachhaltiger Projekte in Lima.",
                "problem": "Traditionelle Finanzierung verursacht einen erheblichen CO2-Fußabdruck, was künftige regionale ESG-Anforderungen riskiert.",
                "solution": "Ein kleiner Pilotkreislauf, der monatlich bis zu 10 Millionen Soles an grüner Finanzierung kanalisiert, bewertet nach lokaler Wirkung."
          },
          "es": {
                "title": "Piloto de financiamiento verde (ESG) en BBVA Perú",
                "summary": "Integrar un circuito piloto compacto de evaluación ESG para canalizar financiamiento directo a proyectos sostenibles en Lima.",
                "problem": "El financiamiento tradicional genera una huella de carbono significativa, arriesgando futuras exigencias ESG regionales.",
                "solution": "Un circuito piloto que canaliza hasta 10 millones de soles al mes en financiamiento verde, evaluado para impacto local."
          }
    }
  }
];

const challenges = [
  // TR Challenges
  {
    id: "challenge-ops-wait",
    title: "BBVA Açık Bankacılık Hackathonu",
    theme: "Müşteri deneyimi",
    sector: "Finans",
    brief: "Kullanıcıların günlük harcamalarını analiz ederek tasarruf önerileri sunan fintech çözümleri.",
    date: "1 Haz - 30 Haz",
    deadline: "12 gün kaldı",
    reward: "75.000 SA + Hızlı Inovasyon Bütçesi",
    rewardType: "Terfi + Para",
    sponsor: "BBVA İnovasyon Lab",
    status: "Aktif",
    ideas: 32,
    participants: 120,
    prizeIcon: "badge-dollar-sign",
    accent: "blue",
    shortlist: ["Pilot bütçesi", "Yönetim sunumu", "BBVA Innovation Lab desteği"],
    country: "TR",
    translations: {
      tr: { title: "BBVA Açık Bankacılık Hackathonu", brief: "Kullanıcıların günlük harcamalarını analiz ederek tasarruf önerileri sunan fintech çözümleri." },
      en: { title: "BBVA Open Banking Hackathon", brief: "Fintech solutions that analyze users' daily spending and offer savings suggestions." },
      de: { title: "BBVA Open-Banking-Hackathon", brief: "Fintech-Lösungen, die die täglichen Ausgaben der Nutzer analysieren und Sparvorschläge liefern." },
      es: { title: "Hackathon de Banca Abierta de BBVA", brief: "Soluciones fintech que analizan el gasto diario de los usuarios y ofrecen sugerencias de ahorro." }
    }
  },
  {
    id: "challenge-ai-docs",
    title: "BBVA México Çok Kanallı Lojistik Yarışması",
    theme: "Süreç otomasyonu",
    sector: "Perakende",
    brief: "Online siparişlerin mağaza stoklarıyla anlık eşlenip teslimat süresini yarıya indiren lojistik akışları.",
    date: "5 Haz - 5 Tem",
    deadline: "18 gün kaldı",
    reward: "50.000 SA + Gebze Lojistik Pilotu",
    rewardType: "Teknoloji Hediye",
    sponsor: "BBVA México Tedarik Zinciri",
    status: "Aktif",
    ideas: 24,
    participants: 90,
    prizeIcon: "laptop",
    accent: "orange",
    shortlist: ["MacBook", "BBVA México Pilot", "Tedarik rozeti"],
    country: "TR",
    translations: {
      tr: { title: "BBVA México Çok Kanallı Lojistik Yarışması", brief: "Online siparişlerin mağaza stoklarıyla anlık eşlenip teslimat süresini yarıya indiren lojistik akışları." },
      en: { title: "BBVA México Omnichannel Logistics Contest", brief: "Logistics flows that match online orders with store stock in real time, cutting delivery time in half." },
      de: { title: "BBVA México Omnichannel-Logistikwettbewerb", brief: "Logistikabläufe, die Online-Bestellungen in Echtzeit mit dem Filiallager abgleichen und die Lieferzeit halbieren." },
      es: { title: "Concurso de Logística Omnicanal de BBVA México", brief: "Flujos logísticos que emparejan pedidos en línea con el stock de tienda en tiempo real, reduciendo el tiempo de entrega a la mitad." }
    }
  },
  // MX Challenges
  {
    id: "challenge-green-finance",
    title: "Mexico City digital savings dispatch optimization",
    theme: "Sürdürülebilirlik",
    sector: "Finans",
    brief: "Algorithms to optimize allocation/reallocation schedules of Mexico City customer savings based on peak market prices.",
    date: "10 Jun - 15 Jul",
    deadline: "27 days left",
    reward: "100.000 SA + Mexico City lab pilot project",
    rewardType: "Para",
    sponsor: "BBVA México",
    status: "Aktif",
    ideas: 15,
    participants: 45,
    prizeIcon: "leaf",
    accent: "emerald",
    shortlist: ["Savings Pilot Fund", "Committee presentation", "ESG Badge"],
    country: "MX",
    translations: {
      tr: { title: "Mexico City dijital tasarruf dağıtım optimizasyonu", brief: "Mexico City müşteri tasarruflarının dağıtım/yeniden dağıtım planlamasını en yüksek piyasa fiyatlarına göre optimize eden algoritmalar." },
      en: { title: "Mexico City digital savings dispatch optimization", brief: "Algorithms to optimize allocation/reallocation schedules of Mexico City customer savings based on peak market prices." },
      de: { title: "Optimierung der Sparverteilung in Mexiko-Stadt", brief: "Algorithmen zur Optimierung der Zuweisungs-/Umverteilungspläne von Kundenersparnissen in Mexiko-Stadt basierend auf Spitzenmarktpreisen." },
      es: { title: "Optimización de la asignación de ahorros en Ciudad de México", brief: "Algoritmos para optimizar los horarios de asignación/reasignación de los ahorros de clientes en Ciudad de México según los precios pico del mercado." }
    }
  },
  // CO Challenges
  {
    id: "challenge-renewables-wind",
    title: "Colombia Credit Risk Prediction Contest",
    theme: "Yapay zekâ",
    sector: "Finans",
    brief: "AI algorithms to predict next-quarter credit demand and risk outputs in Bogotá branch connections.",
    date: "15 Jun - 25 Jul",
    deadline: "35 days left",
    reward: "60.000 SA + Bogotá tech team support",
    rewardType: "Para + Sertifika",
    sponsor: "BBVA Colombia",
    status: "Aktif",
    ideas: 11,
    participants: 30,
    prizeIcon: "shield-check",
    accent: "blue",
    shortlist: ["API Access", "Predictive Certificate", "Colombia Pilot"],
    country: "CO",
    translations: {
      tr: { title: "Kolombiya Kredi Riski Tahmin Yarışması", brief: "Bogotá şube bağlantılarında bir sonraki çeyrek kredi talebini ve risk çıktılarını tahmin eden yapay zeka algoritmaları." },
      en: { title: "Colombia Credit Risk Prediction Contest", brief: "AI algorithms to predict next-quarter credit demand and risk outputs in Bogotá branch connections." },
      de: { title: "Kolumbien-Kreditrisiko-Vorhersagewettbewerb", brief: "KI-Algorithmen zur Vorhersage der Kreditnachfrage und Risikoergebnisse des nächsten Quartals in Bogotáer Filialverbindungen." },
      es: { title: "Concurso de Predicción de Riesgo Crediticio de Colombia", brief: "Algoritmos de IA para predecir la demanda crediticia del próximo trimestre y los resultados de riesgo en las conexiones de sucursales de Bogotá." }
    }
  },
  // PE Challenges
  {
    id: "challenge-de-hydrogen-bus",
    title: "BBVA Perú Préstamo Verde Range Challenge",
    theme: "Sürdürülebilirlik",
    sector: "Finans",
    brief: "Algoritmos para predecir y extender el alcance de financiamiento verde bajo condiciones reales de mercado en Lima.",
    date: "12 Jun - 20 Jul",
    deadline: "30 days left",
    reward: "80.000 SA + Lima Pilot-Flotte",
    rewardType: "Para + Sertifika",
    sponsor: "BBVA Perú Sürdürülebilirlik",
    status: "Aktif",
    ideas: 9,
    participants: 28,
    prizeIcon: "battery-charging",
    accent: "emerald",
    shortlist: ["Pilot Fonu", "Lima Lab Demo", "Sürdürülebilirlik Rozeti"],
    country: "PE",
    translations: {
      tr: { title: "BBVA Perú Yeşil Finansman Menzil Yarışması", brief: "Lima'daki gerçek piyasa koşullarında yeşil finansmanın kapsamını tahmin eden ve uzatan algoritmalar." },
      en: { title: "BBVA Perú Green Loan Range Challenge", brief: "Algorithms to predict and extend the reach of green financing under real Lima market conditions." },
      de: { title: "BBVA-Perú-Grünfinanzierungs-Reichweiten-Challenge", brief: "Algorithmen zur Vorhersage und Erweiterung der Reichweite grüner Finanzierung unter realen Marktbedingungen in Lima." },
      es: { title: "Desafío de Alcance de Préstamo Verde de BBVA Perú", brief: "Algoritmos para predecir y extender el alcance de financiamiento verde bajo condiciones reales de mercado en Lima." }
    }
  },
  // ES Challenges
  {
    id: "challenge-es-co2",
    title: "BBVA Research Madrid Carbon Neutral Finance Challenge",
    theme: "Sürdürülebilirlik",
    sector: "Finans",
    brief: "Innovative methods to channel carbon-neutral financing and ESG scoring inside BBVA Research's Madrid models.",
    date: "20 Jun - 20 Aug",
    deadline: "60 days left",
    reward: "150.000 SA + Green Finance Pilot",
    rewardType: "Para",
    sponsor: "BBVA Research",
    status: "Yakında",
    ideas: 8,
    participants: 25,
    prizeIcon: "flame",
    accent: "purple",
    shortlist: ["Pilot funding", "Madrid HQ demo", "ESG board award"],
    country: "ES",
    translations: {
      tr: { title: "BBVA Research Madrid Karbon Nötr Finans Yarışması", brief: "BBVA Research'in Madrid modellerinde karbon nötr finansman ve ESG skorlamasını kanalize etmek için yenilikçi yöntemler." },
      en: { title: "BBVA Research Madrid Carbon Neutral Finance Challenge", brief: "Innovative methods to channel carbon-neutral financing and ESG scoring inside BBVA Research's Madrid models." },
      de: { title: "Kohlenstoffneutrale Finanz-Challenge bei BBVA Research Madrid", brief: "Innovative Methoden zur Kanalisierung kohlenstoffneutraler Finanzierung und ESG-Bewertung in den Madrider Modellen von BBVA Research." },
      es: { title: "Desafío de Financiamiento Neutro en Carbono de BBVA Research Madrid", brief: "Métodos innovadores para canalizar financiamiento neutro en carbono y puntuación ESG dentro de los modelos de Madrid de BBVA Research." }
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
  title: "BBVA Mobile kullanıcıları için AI destekli yatırım danışmanı",
  oneSentence: "Kullanıcıların harcama alışkanlıkları ve risk eğilimlerine göre fon ve hisse sepeti öneren yapay zeka entegrasyonu.",
  ideaType: "Yeni ürün / hizmet",
  visibility: "Şirket içi",
  anonymity: "İsim gizli, rol görünür",
  company: "BBVA, S.A.",
  department: "Dijital Bankacılık",
  subDepartment: "Yatırım Operasyonları",
  location: "Levent Ofisi",
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
  solution: "BBVA Mobile içinde risk grubuna göre otomatik bakiye dağılımı yapan robo-danışman modülü.",
  howItWorks: "AI risk analizi çıkarır, öneri sepet sunar, müşteri tek tıkla onaylayıp alım yapar.",
  resources: "Risk modelleri, harcama verisi, portföy getirileri",
  technicalNeed: "Evet, entegre robo-danışman API'si gerekiyor",
  educationNeed: "Kısa tanıtım videosu yeterli",
  processNeed: "Satış onay sürecinde küçük güncelleme",
  teams: "Veri analitiği, BBVA Innovation Lab, IT",
  pilot: "İlk pilot işlem hacmi yüksek 1000 kullanıcıda 4 hafta denenebilir.",
  impact: "Yüksek",
  cost: "Orta",
  implementationTime: "3 ay",
  successMetric: "Aktif robo-danışman kullanan müşteri sayısı, memnuniyet oranı",
  kpi: "Robo-yatırım hacmi",
  risks: "Regülasyon uyumsuzluğu, yanlış tahminleme riski",
  strategicGoal: "Bireysel bankacılıkta teknoloji liderliğini korumak",
  files: ["bbva-robo-danisman-pilot.pdf"]
};

const initialComplaint = {
  title: "Tedarik zinciri onay adımları yüzünden ürün girişinin gecikmesi",
  category: "Süreç verimsizliği",
  body: "Kategori yöneticisi ve bölge depo onayları paralel çalışmıyor. Bu yüzden basit stok girişleri bile günlerce bekliyor ve BBVA México mağazalarında yok satma yaşanıyor.",
  department: "Tedarik Zinciri",
  location: "BBVA México HQ",
  frequency: "Haftada birkaç kez",
  impact: "Orta",
  anonymity: "İsim gizli, departman görünür",
  expectation: "Onay adımlarının sıralı değil paralel yapılması ve gecikmelerin otomatik alarm üretmesi.",
  files: []
};

const initialTeams = [
  {
    id: "team-001",
    name: "BBVA Robo-Yatırım Hızlanma",
    description: "BBVA Mobile içinde robo-danışman algoritmasını ve UX akışlarını kuracak cross-functional ekip.",
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
    name: "BBVA México Akıllı Tedarik Grubu",
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
    name: "Garanti BBVA EV-Lastik Ar-Ge Ekibi",
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
    tags: ["Garanti BBVA", "IoT", "Elektrikli Araç"]
  },
  {
    id: "team-004",
    name: "Credit Risk Forecasting AI Team",
    description: "Predictive macroeconomic telemetry models to optimize Spanish portfolio risk matching.",
    area: "Yeşil Enerji",
    ideaId: "idea-4",
    createdBy: "u7",
    status: "active",
    createdAt: "2026-06-11",
    roles: [
      { id: "t4-1", title: "Risk Data Analyst", icon: "wind", filled: true, userId: "u7", skills: ["Macroeconomics", "Time Series"] },
      { id: "t4-2", title: "ML Specialist", icon: "brain", filled: true, userId: "p02", skills: ["Python", "LSTM", "Risk Tech"] }
    ],
    messages: [
      { userId: "u7", body: "Madrid portfolio telemetry data is ready.", time: "2026-06-12 14:00" }
    ],
    tags: ["Risk", "Spain", "AI Models"]
  },
  {
    id: "team-005",
    name: "BBVA Seguros Madrid Document OCR Automation",
    description: "Madrid branch document scanner intake desk OCR camera system development group.",
    area: "Logistics",
    ideaId: "idea-5",
    createdBy: "u6",
    status: "active",
    createdAt: "2026-06-13",
    roles: [
      { id: "t5-1", title: "Operations Manager", icon: "briefcase", filled: true, userId: "u6", skills: ["Branch Ops", "Logistics"] },
      { id: "t5-2", title: "Computer Vision Engineer", icon: "camera", filled: false, userId: null, skills: ["OpenCV", "YOLO", "OCR"] }
    ],
    messages: [],
    tags: ["OCR", "Branch Logistics", "Spain"]
  },
  {
    id: "team-006",
    name: "Mexico City Savings Optimizers",
    description: "Customer savings allocation management and market dispatch pricing AI layer.",
    area: "Yeşil Enerji",
    ideaId: "idea-6",
    createdBy: "u10",
    status: "active",
    createdAt: "2026-06-14",
    roles: [
      { id: "t6-1", title: "Market Arbitrage Expert", icon: "trending-up", filled: true, userId: "u10", skills: ["Mexico Markets", "Arbitrage"] },
      { id: "t6-2", title: "Software Engineer", icon: "code", filled: true, userId: "p04", skills: ["Go", "NodeJS", "Banking APIs"] }
    ],
    messages: [],
    tags: ["Mexico", "Savings", "Market Arbitrage"]
  },
  {
    id: "team-007",
    name: "Monterrey Document Automation Group",
    description: "Monterrey hub automated robotic document processing integration team.",
    area: "Logistics",
    ideaId: "idea-7",
    createdBy: "u9",
    status: "active",
    createdAt: "2026-06-15",
    roles: [
      { id: "t7-1", title: "Process Supervisor", icon: "settings", filled: true, userId: "u9", skills: ["Robotics", "PLCs"] },
      { id: "t7-2", title: "Operations Lead", icon: "briefcase", filled: false, userId: null, skills: ["Monterrey Hub", "Document Processing"] }
    ],
    messages: [],
    tags: ["Robotics", "Document Processing", "Monterrey"]
  },
  {
    id: "team-008",
    name: "Medellín vertical archive team",
    description: "Automated vertical storage and retrieval system (ASRS) mechanical layout and software group.",
    area: "Logistics",
    ideaId: "idea-8",
    createdBy: "u12",
    status: "active",
    createdAt: "2026-06-12",
    roles: [
      { id: "t8-1", title: "ASRS Specialist", icon: "layers", filled: true, userId: "u12", skills: ["ASRS", "Warehouse Automation"] },
      { id: "t8-2", title: "Structural Designer", icon: "pen-tool", filled: false, userId: null, skills: ["Colombia Building Codes", "CAD"] }
    ],
    messages: [],
    tags: ["ASRS", "Medellín", "Robotic Lifts"]
  },
  {
    id: "team-009",
    name: "BBVA Perú Green Financing Team",
    description: "ESG evaluation pilot loop channeling green financing to sustainable projects in Lima.",
    area: "Sürdürülebilirlik",
    ideaId: "idea-9",
    createdBy: "u14",
    status: "active",
    createdAt: "2026-06-12",
    roles: [
      { id: "t9-1", title: "Sustainability Analyst", icon: "flask", filled: true, userId: "u14", skills: ["ESG Evaluation", "Green Finance"] },
      { id: "t9-2", title: "ESG Compliance Lead", icon: "shield", filled: false, userId: null, skills: ["Regional ESG", "Carbon Credits"] }
    ],
    messages: [],
    tags: ["ESG", "Green Finance", "Peru"]
  }
];

const initialClubs = [
  {
    id: "club-001",
    name: "BBVA Tenis Kulübü",
    description: "Tenis severlerin buluştuğu, antrenman ve turnuva organizasyonları düzenleyen sosyal kulüp.",
    category: "Spor",
    country: "TR",
    createdBy: "u3",
    createdAt: "2026-05-10",
    members: ["u3", "p01", "p05"],
    memberCount: 3,
    tags: ["Tenis", "Spor", "Sosyal"],
    messages: [
      { userId: "p01", body: "Bu cumartesi Ciudad BBVA – La Vela Kulesi kortlarında turnuva var, kayıtlar açıldı!", time: "09:10" },
      { userId: "p05", body: "Harika, ben de eşleşme listesine yazıldım. Saat kaçta başlıyoruz?", time: "09:14" },
      { userId: "u3", body: "10:00'da ısınma, 10:30'da ilk maçlar. Raketlerinizi unutmayın.", time: "09:20" }
    ]
  },
  {
    id: "club-002",
    name: "BBVA Kitap Kulübü",
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
      { userId: "p03", body: "Bana uyar, İstanbul'dan bağlanırım toplantıya.", time: "13:08" }
    ]
  },
  {
    id: "club-003",
    name: "BBVA Perú Koşu Grubu",
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
    name: "BBVA Tech Club",
    description: "A community for technology enthusiasts exploring AI, robotics, and emerging software development.",
    category: "Teknoloji",
    country: "ES",
    createdBy: "u7",
    createdAt: "2026-05-20",
    members: ["u7", "p02"],
    memberCount: 2,
    tags: ["Tech", "AI", "Spain"],
    messages: [
      { userId: "u7", body: "We're hosting a small AI demo night next week at BBVA Research, who's in?", time: "11:05" },
      { userId: "p02", body: "Count me in, I'll bring the latest model benchmarks.", time: "11:12" }
    ]
  },
  {
    id: "club-005",
    name: "Mexico City Volunteers",
    description: "BBVA México volunteers working on local community outreach and financial literacy workshops.",
    category: "Sosyal Sorumluluk",
    country: "MX",
    createdBy: "u10",
    createdAt: "2026-06-02",
    members: ["u10", "p04"],
    memberCount: 2,
    tags: ["Community", "Volunteering", "Mexico City"],
    messages: [
      { userId: "u10", body: "Financial literacy workshop day at the Mexico City branch is confirmed for Saturday morning.", time: "08:30" }
    ]
  },
  {
    id: "club-006",
    name: "BBVA Colombia Club de Senderismo",
    description: "Caminatas de fin de semana y actividades al aire libre para colegas en Medellín.",
    category: "Spor",
    country: "CO",
    createdBy: "p14",
    createdAt: "2026-06-08",
    members: ["p14", "p21"],
    memberCount: 2,
    tags: ["Senderismo", "Outdoor", "Medellín"],
    messages: [
      { userId: "p14", body: "Este sábado caminamos hacia el Cerro El Volador, nos vemos a las 8.", time: "09:00" }
    ]
  },
  {
    id: "club-007",
    name: "BBVA Research Madrid Club de Lectura",
    description: "Club de lectura mensual para empleados de BBVA Research y la oficina de Madrid.",
    category: "Kültür & Sanat",
    country: "ES",
    createdBy: "p16",
    createdAt: "2026-06-10",
    members: ["p16", "p23"],
    memberCount: 2,
    tags: ["Lectura", "Cultura", "Madrid"],
    messages: [
      { userId: "p16", body: "Este mes leemos un libro sobre sostenibilidad financiera, ¿les parece bien el jueves?", time: "12:15" }
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
    country: "ES",
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
    country: "MX",
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
    country: "PE",
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
    country: "PE",
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
      { userId: "p16", body: "Hemos configurado la nueva impresora de filamento continuo en el lab de Madrid.", time: "10:00" }
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


