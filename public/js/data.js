var state = {
  visibleIdeasCount: 12,
  visibleBorsaIdeasCount: 12,
  clubs: structuredClone(initialClubs),
  teamsTab: "projectTeams",
  appLanguage: "",
  userTokens: 24,
  leaderboardScope: "country",
  currentCountry: "TR",
  loginCountrySelected: false,
  activeCountry: "TR",
  affiliationFilter: "all",
  announcementScopeFilter: "Tümü",
  loggedIn: false,
  onboardingStep: 1,
  accessKeyInput: "",
  accessKeyAccepted: false,
  loginError: "",
  currentUserId: "u3",
  selectedLoginUserId: "u3",
  externalApplications: [
    {
      id: "ext-1",
      name: "Ahmet Yılmaz",
      email: "ahmet.yilmaz@novasolutions.io",
      startupName: "Nova Solutions",
      ideaTitle: "Yapay Zeka Destekli Portföy Yönetim Asistanı",
      summary: "BBVA ve Sabancı müşterilerinin yatırım tercihlerine göre otomatik portföy optimizasyonu yapan ve anlık piyasa analizleri sunan akıllı bir SaaS çözümü.",
      portal: "BBVA",
      status: "new",
      date: "22.06.2026"
    },
    {
      id: "ext-2",
      name: "Selin Kaya",
      email: "selin@solarpower.co",
      startupName: "SolarPower IoT",
      ideaTitle: "Güneş Panelleri İçin Akıllı Verimlilik Takip Cihazı",
      summary: "Sabancı iştiraklerindeki çatı tipi güneş panellerinin kirlilik ve hasar durumunu IoT sensörleri ile tespit eden bulut izleme yazılımı.",
      portal: "Sabancı",
      status: "new",
      date: "21.06.2026"
    }
  ],
  externalDraft: {
    name: "",
    email: "",
    startupName: "",
    ideaTitle: "",
    summary: "",
    portal: "Sabancı"
  },
  loginView: "default",
  externalSubmitSuccess: false,
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
  ideas: structuredClone(initialIdeas).map((idea, idx) => {
    const equities = [15, 20, 25, 30, 35, 40];
    idea.openEquity = idea.openEquity || equities[idx % equities.length];
    idea.marketTicker = idea.marketTicker || `NIE-${String(idx + 1).padStart(2, "0")}`;
    return idea;
  }),
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
    files: [],
    country: "TR"
  },
  fileInspector: null,
  portalDropdownOpen: false,
  selectedBranchId: null,
  quickFlowIndex: 0,
  quickFlowFeedback: "",
  fastCommentDraft: "",
  quickEvalLikes: {},
  pinnedIdeaIds: [],
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
    country: "Aktif Portal",
    
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
    socialRole: "Tüm Roller",
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
  theme: "light",
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
    companyId: "bbva-group",
    country: "Türkiye",
    city: "İstanbul",
    campus: "Ciudad BBVA",
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
      { userId: "p03", body: "Can Bey, BBVA CIB US Mersin fabrikasındaki sensör verisi paylaşımını tamamladık. Onayınızı bekliyor.", time: "Dün 16:02" },
      { own: true, body: "Eline sağlık Selin, verileri inceledim. Oldukça temiz görünüyor. Hemen onay verdim.", time: "Dün 16:45" },
      { userId: "p03", body: "Çok teşekkürler! Bu veriyle yeni bir hammadde optimizasyon projesi geliştirmeye başlayacağız.", time: "Dün 16:50" }
    ],
    "p05": [
      { userId: "p05", body: "Sürdürülebilir finans sprinti için borsa bütçesini kullanabilir miyiz? Sponsor arıyoruz.", time: "Bugün 10:12" },
      { own: true, body: "Evet Ece, bütçe limitleri dahilinde sponsorluğu onaylayabilirim. Detaylı talebi gönderir misin?", time: "Bugün 10:45" }
    ],
    "p06": [
      { userId: "p06", body: "Hi Can, I've updated the UK wind farm grid connection proposal. We need to reserve 1200 BBVA tokens to launch it.", time: "Yesterday 09:15" },
      { own: true, body: "Hello John, sounds good. I will check the budget allocation today and let you know if we can fund it directly.", time: "Yesterday 10:00" },
      { userId: "p06", body: "Thank you. The engineering team is eager to start prototyping.", time: "Yesterday 10:12" }
    ],
    "p07": [
      { userId: "p07", body: "Hi Can, the UK cement logistics portal is showing great active user counts. Can we get extra AI analysis on the traffic?", time: "Yesterday 11:22" },
      { own: true, body: "Sure Sarah, I will request Garanti BBVA Teknoloji AI lead to run a query for UK portal statistics.", time: "Yesterday 11:45" }
    ],
    "p10": [
      { userId: "p10", body: "Hello Can, Austin solar battery testing is going well. We need to align our pricing algorithm with the UK team.", time: "Yesterday 14:10" },
      { own: true, body: "Hi Michael, good progress. Let's arrange a joint call with John Sterling tomorrow.", time: "Yesterday 14:30" }
    ],
    "p11": [
      { userId: "p11", body: "Can, we started testing the packing automation in Houston. It has reduced dust emissions significantly.", time: "Yesterday 15:40" },
      { own: true, body: "That is fantastic news Emily! Let's submit this as a case study to the sustainability board.", time: "Yesterday 16:00" }
    ],
    "p12": [
      { userId: "p12", body: "Hello Can, Chattanooga composite tests are finalized. The graphene nylon yarn performance is excellent.", time: "2 days ago" },
      { own: true, body: "Thanks Robert. I saw the stress reports. We will feature this in the BBVA Colombia global showcase.", time: "2 days ago" }
    ],
    "p13": [
      { userId: "p13", body: "Hallo Can, der neue Bulk-Silo-Entwurf für Hamburg Terminal ist fertig. Können wir das Budget freigeben?", time: "Dün 10:12" },
      { own: true, body: "Hallo Hans, ich werde das Budget prüfen. Wir müssen sicherstellen, dass die EU-Normen eingehalten werden.", time: "Dün 10:45" },
      { userId: "p13", body: "Perfekt, danke. Die Dokumentation ist bereits im System hinterlegt.", time: "Dün 11:00" }
    ],
    "p14": [
      { userId: "p14", body: "Hallo Can, die Teststrecke für den Wasserstoffbus in Buenos Aires ist betriebsbereit. Die Sensoren laufen.", time: "Dün 13:00" },
      { own: true, body: "Klasse Dieter! Bitte teile die ersten Telemetriedaten mit der Adana Software-Gruppe.", time: "Dün 13:20" }
    ],
    "p15": [
      { userId: "p15", body: "Hola Can, hemos completado el diseño del microgrid solar para Buñol. ¿Podemos subirlo al portal de España?", time: "Bugün 09:30" },
      { own: true, body: "Hola Carlos, excelente. Por favor, súbelo usando el Borsa Composer seleccionando España como país objetivo.", time: "Bugün 09:45" },
      { userId: "p15", body: "Entendido, ya está publicado. Gracias por el soporte.", time: "Bugün 10:00" }
    ],
    "p16": [
      { userId: "p16", body: "Can, I uploaded the carbon metrics for BBVA CIB US Spain alternative fuels. It's ready for strategic score review.", time: "Dün 15:00" },
      { own: true, body: "Thanks Maria, I will trigger the AI host analysis on it right away.", time: "Dün 15:30" }
    ],
    "u1": [
      { userId: "u1", body: "Can Bey, BBVA Spark México mağaza içi kiosk projemize 100 BBVA bütçe ayırdık. Pilot mağaza kurulumunu onaylar mısınız?", time: "Bugün 11:00" },
      { own: true, body: "Onayladım Ayşe. Kioskların mobil ödeme entegrasyonu tamamlandı mı?", time: "Bugün 11:15" }
    ],
    "u2": [
      { userId: "u2", body: "Can Bey, BBVA Seguros Colombia taze gıda takip projesinin pilot aşaması için malzeme listesini hazırladık.", time: "Dün 16:30" },
      { own: true, body: "Eline sağlık Mehmet, lojistik ekibiyle koordine edip bütçe onayını veriyorum.", time: "Dün 17:00" }
    ],
    "u4": [
      { userId: "u4", body: "Can, Altın Yaka inovasyon ödülleri için bütçe onayını imzaladım. Sistemde duyurulabilir.", time: "Bugün 08:30" },
      { own: true, body: "Çok teşekkürler Kerem Bey, duyuruyu hemen holding portalında yayınladım.", time: "Bugün 09:00" }
    ]
  },
  messageDraft: "",
  commentDraft: "",
  teams: structuredClone(initialTeams),
  teamsView: "list",
  teamsTab: "teams",
  selectedTeamId: "team-001",
  teamChatDraft: "",
  selectedClubId: null,
  clubChatDraft: "",
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
  socialScopeFilter: "Yerel",
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
      author: "İş NEW",
      isAiGenerated: true
    },
    {
      id: "ag-3",
      title: "Ürünler için ekip ihtiyacı görünürlüğe açıldı",
      body: "Ürün aşamasına geçen fikirlerde açık roller ve geliştirme seviyesi artık stüdyo panosundan izlenebilecek.",
      category: "Ürün",
      date: "2026-06-13",
      tags: ["ürün", "ekip", "stüdyo"],
      author: "İnovasyon Ofisi"
    },
    {
      id: "ag-4",
      title: "Diğer departmanlar için yenilikçi süreç anketi yayında",
      body: "Belirli bir kategoriye sığmayan operasyonel dışı tüm süreç iyileştirme fikirleriniz için anket sonuçları toplanmaya başlandı.",
      category: "Diğer",
      date: "2026-06-12",
      tags: ["anket", "iştirakler", "geri bildirim"],
      author: "İnovasyon Ofisi"
    },
    {
      id: "ag-ai-weekly",
      title: "AI Raporu: Haftalık İnovasyon Analitiği Özeti",
      body: "Platformdaki son fikirlerin değerlendirmesi: Dijitalleşme ve yeşil finans temalı projelerde AI puan ortalaması 82.5/100 barajını aştı.",
      category: "AI Host",
      date: "2026-06-16",
      tags: ["ai-raporu", "analiz", "haftalık-ozet"],
      author: "AI Denetçi",
      isAiGenerated: true
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
    { id: "studio-digital", name: "Dijital Ürün Stüdyosu", category: "FinTech", status: "Aktif", popularity: 81, createdAt: "2026-05-28", description: "Garanti BBVA Mobil, ödeme ve dijital onboarding akışlarını ürünleştiren ekip alanı.", linkedTeams: [], linkedIdeas: ["idea-2", "idea-4"] }
  ],
  predictions: [
    {
      id: "pred-1",
      userId: "u1",
      userName: "Ayşe Yılmaz",
      userAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
      ideaId: "idea-1",
      ideaTitle: "Yoğun saatlerde kasa bekleme süresini azaltacak dinamik vardiya sistemi",
      predictionText: "Bu projenin pilot mağazalarda bekleme süresini en az %20 azaltacağını tahmin ediyorum. Çünkü geçmiş veriler çok tutarlı.",
      probability: 85,
      date: "2026-06-16",
      likes: 14,
      comments: [
        { userName: "Can Koç", body: "Katılıyorum, veriye dayalı planlama her zaman kazandırır.", date: "2026-06-16" }
      ]
    },
    {
      id: "pred-2",
      userId: "u2",
      userName: "Mehmet Demir",
      userAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      ideaId: "idea-3",
      ideaTitle: "Müşteri şikayetlerinin otomatik sınıflandırılması",
      predictionText: "Otomatik sınıflandırma sayesinde çağrı merkezinde yanlış departmana yönlendirilen şikayet oranı %15 azalacaktır.",
      probability: 78,
      date: "2026-06-15",
      likes: 9,
      comments: []
    }
  ],
  educationItems: [
    {
      id: "edu-1",
      title: "Sıfırdan İleri Seviyeye Yalın Girişim Metodolojisi",
      category: "Girişimcilik Eğitimi",
      description: "Girişim fikirlerinizi nasıl doğrularsınız, MVP (Minimum Uygulanabilir Ürün) nasıl kurgulanır ve müşteri görüşmeleri nasıl yürütülür sorularına pratik yanıtlar.",
      link: "https://www.youtube.com/watch?v=fEvKo90qBns",
      date: "Her Çarşamba, 14:00",
      organizer: "Sabancı İnovasyon Ofisi"
    },
    {
      id: "edu-2",
      title: "FinTech Girişimleri için Hukuk ve Uyum Webinarı",
      category: "Seminer",
      description: "KVKK, BDDK lisanslama süreçleri, açık bankacılık regülasyonları ve ödeme kuruluşları mevzuatları hakkında bilgilendirici oturum.",
      link: "https://zoom.us/j/demo-fintech",
      date: "24 Haziran 2026, 11:00",
      organizer: "Garanti BBVA Mobil Hukuk & Uyum Departmanı"
    },
    {
      id: "edu-3",
      title: "B2B SaaS Girişimlerinde Fiyatlandırma ve Büyüme Stratejileri",
      category: "Atölye",
      description: "Kullanıcı başına lisanslama, kullanım tabanlı fiyatlandırma modelleri ve kurumsal SaaS satış kanallarını optimize etme üzerine atölye çalışması.",
      link: "https://www.youtube.com/watch?v=0H73Z1tCeeM",
      date: "Kayıttan İzle (1.5 Saat)",
      organizer: "Garanti BBVA Teknoloji Bulut Bilişim Grubu"
    }
  ],
  mentors: [
    {
      id: "mentor-1",
      name: "Elif Şahin",
      title: "FinTech & Ürün Yönetimi Müdürü (Garanti BBVA)",
      specialties: ["Ürün Yönetimi", "FinTech", "İş Modeli Geliştirme"],
      bio: "12+ yıllık ürün yönetim deneyimi. Garanti BBVA Mobil dijital bankacılık ürünlerinde ödeme sistemleri ve kullanıcı deneyimi süreçlerini yönetti.",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
      email: "elif.sahin@sabanci.example"
    },
    {
      id: "mentor-2",
      name: "Emir Arslan",
      title: "Yapay Zekâ Çözüm Mimarı (Garanti BBVA Teknoloji)",
      specialties: ["Yapay Zekâ", "Makine Öğrenmesi", "Teknik Altyapı"],
      bio: "Büyük dil modelleri (LLM), veri analitiği ve akıllı tahminleme altyapıları üzerine uzmanlaşmıştır. Fikirlerin teknik fizibilitesini değerlendirmede destek sağlar.",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      email: "emir.arslan@sabanci.example"
    },
    {
      id: "mentor-3",
      name: "Zeynep Kaya",
      title: "Sürdürülebilirlik & ESG Koordinatörü (BBVA Securities España)",
      specialties: ["Yeşil Finans", "ESG Uyum", "Karbon Takip"],
      bio: "Girişimlerin yeşil finansman imkanlarına erişimi, ESG raporlama standartları ve karbon nötrleme projelerinin kurgulanması konularında mentörlük sunuyor.",
      avatar: "https://randomuser.me/api/portraits/women/51.jpg",
      email: "zeynep.kaya@sabanci.example"
    }
  ],
  mentorApplications: [],
  events: [
    {
      id: "event-1",
      title: "Kurumsal Girişimcilik Demo Günü 2026",
      topic: "Proje Sunumları",
      date: "28 Haziran 2026, 14:00 - 17:00",
      description: "İştirak stüdyolarında kuluçkaya alınan en iyi 5 projenin üst yönetim ve jüri karşısında sunum yapacağı, demo ve soru-cevap oturumlarının düzenleneceği büyük final.",
      link: "https://zoom.us/j/demo-day-2026",
      organizer: "Sabancı İnovasyon Ofisi"
    },
    {
      id: "event-2",
      title: "FinTech & Yapay Zekâ Fikir Maratonu (Hackathon)",
      topic: "Yarışmalar",
      date: "10-12 Temmuz 2026",
      description: "BBVA Group iştirak çalışanlarının katılımına açık, 48 saat sürecek yoğun ürün geliştirme ve kodlama yarışması. Toplam ödül 50,000 NIE Kredisi.",
      link: "https://fikirkovani.com/hackathon-kayit",
      organizer: "Garanti BBVA Teknoloji"
    },
    {
      id: "event-3",
      title: "Yeşil Enerji Proje Eşleşme Buluşması",
      topic: "Toplantı & Buluşmalar",
      date: "02 Temmuz 2026, 15:30",
      description: "Sürdürülebilirlik alanında fikri olan çalışanlar ile bu fikirlere katkı sağlamak isteyen yazılımcı, tasarımcı ve iş geliştiricileri bir araya getiren sinerji toplantısı.",
      link: "https://teams.microsoft.com/l/meetup-green",
      organizer: "Yeşil Finans Stüdyosu"
    }
  ],
  educationActiveTab: "programs",
  mentorApplyModalId: null,
  educationDraft: {
    title: "",
    description: "",
    category: "Girişimcilik Eğitimi",
    link: "",
    date: ""
  },
  eventDraft: {
    title: "",
    topic: "Seminerler",
    date: "",
    description: "",
    link: ""
  },
  
  // Initial Datasets (Veriler)
    dataSets: [
    {
      id: "ds-1",
      title: "2026 Yapay Zeka Sektör Raporu",
      summary: "Garanti BBVA Teknoloji tarafından derlenmiş genel bulut verileri, sektörel büyüme oranları ve güvenlik gereksinimleri.",
      sharedBy: "Mert Alkan",
      companyId: "garanti-bbva-teknoloji",
      type: "Kurumsal",
      area: "Yapay Zekâ & Derin Teknoloji",
      importanceScore: 5,
      date: "2026-06-05",
      comments: [
        { user: "Can Koç", body: "SaaS entegrasyonu projemiz için harika bir hammadde kaynağı.", manager: false }
      ],
      likes: 18,
      downloads: 42,
      country: "TR"
    },
    {
      id: "ds-2",
      title: "Garanti BBVA QR ve Biyometrik Ödeme Kullanım Analizi",
      summary: "QR ve biyometrik ödeme entegrasyonları için pazar payı, işlem hızları ve müşteri kullanım oranları.",
      sharedBy: "Can Koç",
      companyId: "garanti-bbva",
      type: "Kurumsal",
      area: "FinTech & Dijital Bankacılık",
      importanceScore: 4,
      date: "2026-06-03",
      comments: [],
      likes: 12,
      downloads: 29,
      country: "TR"
    },
    {
      id: "ds-3",
      title: "Texas Grid Peak Hours Pricing Datetime Set",
      summary: "Historical grid pricing data for Texas solar farm battery storage management.",
      sharedBy: "Michael Vance",
      companyId: "bbva-mexico",
      type: "Kurumsal",
      area: "Sürdürülebilirlik & Yeşil Enerji",
      importanceScore: 5,
      date: "2026-06-12",
      comments: [],
      likes: 24,
      downloads: 58,
      country: "US"
    }
  ],
  
  announcements: [
    {
      id: "ann-rec-1",
      title: "🚀 Garanti BBVA Mobil AI Yatırım Projesine UX Designer Arıyoruz!",
      author: "Can Koç",
      authorId: "u3",
      companyId: "garanti-bbva",
      type: "Topluluk",
      area: "Takım Arkadaşı Aranıyor",
      importanceScore: 5,
      body: "Merhabalar! Garanti BBVA Mobil AI Yatırım projemiz için prototip ekranlarımızı tasarlayacak ve bizimle ortak bütçeden pay alacak bir UX Designer takım arkadaşı arıyoruz. Katılmak için aşağıdaki 'Başvur' butonunu kullanarak başvurunuzu iletebilirsiniz!",
      date: "2026-06-08",
      comments: [],
      likes: 42,
      ideaId: "idea-1",
      missingRoles: ["UX Designer"],
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
      country: "TR"
    },
    {
      id: "ann-rec-2",
      title: "🚀 Texas Solar Battery Storage System Project (US) - Seeking MLOps Engineer!",
      author: "Michael Vance",
      authorId: "u10",
      companyId: "bbva-mexico",
      type: "Topluluk",
      area: "Takım Arkadaşı Aranıyor",
      importanceScore: 5,
      body: "Hello! We are looking for an MLOps Engineer to deploy predictive grid models at the Texas solar farm project site. Remote/Austin. Apply below!",
      date: "2026-06-10",
      comments: [],
      likes: 20,
      ideaId: "idea-6",
      missingRoles: ["MLOps Engineer"],
      imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80",
      country: "US"
    },
    ...structuredClone(initialAnnouncements)
  ],

  socialPosts: [
    {
      id: "sp-1",
      userId: "p02",
      userName: "Mert Alkan",
      userAvatar: "https://randomuser.me/api/portraits/men/12.jpg",
      userBio: "İnovasyon Lideri · Garanti BBVA Teknoloji",
      body: "Garanti BBVA Mobil AI Yatırım projemiz Fikir Borsasında listelendi! Desteklerinizi ve geri bildirimlerinizi bekliyoruz.",
      date: "2 saat önce",
      likes: 12,
      likedByMe: false,
      comments: [
        { id: "sc-1", userName: "Ece Uslu", userAvatar: "https://randomuser.me/api/portraits/women/45.jpg", body: "Harika bir proje olmuş, onboarding süremizi çok kısaltır!", date: "1 saat önce" }
      ],
      country: "TR"
    },
    {
      id: "sp-2",
      userId: "u10",
      userName: "Michael Vance",
      userAvatar: "https://randomuser.me/api/portraits/men/22.jpg",
      userBio: "Energy Storage Director · Sabancı Climate US",
      body: "Texas utility battery dispatch optimization dataset is uploaded under Data section. Open for model research.",
      date: "3 hours ago",
      likes: 15,
      likedByMe: false,
      comments: [],
      country: "US"
    }
  ]
};

// ─── TEAMS ────────────────────────────────────────────────────────────────────

var teamRoleTemplates = [

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

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────

// ─── END PRODUCTS ──────────────────────────────────────────────────────────────

// ─── END TEAMS ────────────────────────────────────────────────────────────────

var quickFlowPointer = null;

var quickEvalPointer = null;

// ==========================================

// PORTAL V2 IMPLEMENTATION & HELPER FUNCTIONS

// ==========================================

var countryNames = {
  TR: [
    "Ahmet Yılmaz", "Ayşe Kaya", "Mehmet Demir", "Fatma Şahin", "Mustafa Çelik",
    "Emine Yıldız", "Ali Öztürk", "Hatice Arslan", "Hüseyin Polat", "Zeynep Koç",
    "Hasan Aydın", "Selin Karaca", "Burak Bulut", "Merve Tekin", "Murat Şen",
    "Büşra Kılıç", "İbrahim Özkan", "Elif Yalçın", "Fatih Doğan", "Gamze Yavuz",
    "Kemal Aslan", "Derya Avcı", "Serkan Aksoy", "Seda Çetin", "Gökhan Sarı",
    "Esra Özdemir", "Volkan Kaplan", "Yasemin Köse", "Caner Ateş", "Hale Güler",
    "Ömer Yiğit", "Demet Yaman", "Metin Yıldırım", "Arzu Can", "Bülent Şimşek",
    "Kübra Şahin", "Ender Ünal", "Tuğba Kartal", "Hakan Koç", "Nihan Güneş",
    "Süleyman Ural", "Melis Erol", "Yusuf Aktaş", "Ece Akın", "Turgut Soylu",
    "Pınar Çakır", "Sinan Aksoy", "Belgin Yılmaz", "Kerem Bulut", "Ebru Aslan"
  ],
  US: [
    "James Smith", "Mary Johnson", "John Williams", "Patricia Brown", "Robert Jones",
    "Jennifer Miller", "Michael Davis", "Elizabeth Garcia", "William Rodriguez", "Linda Wilson",
    "David Martinez", "Barbara Anderson", "Richard Taylor", "Susan Thomas", "Joseph Hernandez",
    "Jessica Moore", "Thomas Martin", "Sarah Jackson", "Charles Martin", "Karen Lee",
    "Christopher Perez", "Nancy Thompson", "Daniel White", "Lisa Harris", "Matthew Sanchez",
    "Betty Clark", "Anthony Ramirez", "Margaret Lewis", "Mark Robinson", "Sandra Walker",
    "Donald Young", "Ashley Allen", "Steven King", "Kimberly Wright", "Paul Scott",
    "Emily Torres", "Andrew Nguyen", "Donna Hill", "Joshua Adams", "Michelle Flores",
    "Kenneth Green", "Dorothy Nelson", "Kevin Baker", "Carol Hall", "Brian Rivera",
    "Amanda Campbell", "George Mitchell", "Melissa Carter", "Edward Roberts", "Deborah Gomez"
  ],
  GB: [
    "Oliver Smith", "Olivia Jones", "George Taylor", "Amelia Williams", "Noah Brown",
    "Isla Davies", "Harry Evans", "Ava Thomas", "Leo John", "Mia Roberts",
    "Arthur Wilson", "Isabella Carter", "Muhammad Mason", "Sophia Wright", "Oscar Knight",
    "Grace Hughes", "Charley Green", "Freya Lewis", "Thomas Hill", "Ella Hall",
    "Henry Shaw", "Emily Wood", "William Turner", "Hazel Ward", "Alfie Watson",
    "Florence Adams", "Archie White", "Ivy Clarke", "Joshua Cooper", "Sienna Harrison",
    "Jacob Ward", "Tilly Martin", "James Webb", "Phoebe Davis", "Edward Bailey",
    "Daisy Palmer", "Lucas Holmes", "Evie Mason", "Alexander Dixon", "Ruby Hunt",
    "Daniel Rogers", "Lily Miller", "Logan Morris", "Sophie Bell", "Max Palmer",
    "Lola Shaw", "Rory Marshall", "Alice Hill", "Toby Barnes", "Chloe Knight"
  ],
  DE: [
    "Thomas Müller", "Sabine Schmidt", "Michael Schneider", "Petra Fischer", "Andreas Weber",
    "Monika Meyer", "Stefan Wagner", "Birgit Becker", "Christian Schulz", "Renate Hoffmann",
    "Martin Schäfer", "Ursula Koch", "Frank Bauer", "Ingrid Richter", "Jürgen Klein",
    "Karin Wolf", "Ralf Schröder", "Angelika Neumann", "Dieter Schwarz", "Gabriele Zimmermann",
    "Manfred Braun", "Helga Krüger", "Uwe Hofmann", "Gisela Hartmann", "Hans Lange",
    "Christa Schmitt", "Walter Werner", "Jutta Schmitz", "Wolfgang Krause", "Elke Meier",
    "Klaus Lehmann", "Brigitte Schmid", "Günter Hergert", "Erika Maier", "Herbert Mayer",
    "Marianne Herrmann", "Werner Walter", "Karin Köhler", "Horst Kaiser", "Christel Huber",
    "Peter Peters", "Anneliese Fuchs", "Bernd Scholz", "Gertrud Möller", "Karl Weiss",
    "Margarete Jung", "Heinz Hahn", "Hannelore Schubert", "Gerhard Vogel", "Hildegard Friedrich"
  ],
  ES: [
    "Antonio García", "María Rodríguez", "Manuel González", "Ana Fernández", "José López",
    "Isabel Martínez", "Francisco Sánchez", "Laura Pérez", "David Gómez", "Juana Martín",
    "Juan Jiménez", "Cristina Ruiz", "José Antonio Hernández", "Marta Diaz", "Javier Moreno",
    "Carmen Muñoz", "Daniel Álvarez", "Josefa Romero", "Jose Manuel Alonso", "Sofía Gutiérrez",
    "Pedro Navarro", "Francisca Torres", "Alejandro Domínguez", "Lucia Vázquez", "Miguel Ramos",
    "María Pilar Gil", "Ángel Ramírez", "María Dolores Serrano", "Carlos Blanco", "María Teresa Molina",
    "Jesús Morales", "Raquel Suárez", "Pablo Ortega", "Sara Delgado", "José Luis Castro",
    "Elena Ortiz", "Ramón Rubio", "Nerea Marin", "Luis Sanz", "Silvia Núñez",
    "Alberto Iglesias", "María José Medina", "Juan Carlos Garrido", "Patricia Cortés", "Rafael Castillo",
    "Andrea Santos", "Francisco Javier Lozano", "Beatriz Guerrero", "Jorge Cano", "Inmaculada Prieto"
  ]
};