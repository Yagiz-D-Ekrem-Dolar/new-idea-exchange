const state = {
  visibleIdeasCount: 12,
  visibleBorsaIdeasCount: 12,
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
      { userId: "p03", body: "Can Bey, Çimsa Mersin fabrikasındaki sensör verisi paylaşımını tamamladık. Onayınızı bekliyor.", time: "Dün 16:02" },
      { own: true, body: "Eline sağlık Selin, verileri inceledim. Oldukça temiz görünüyor. Hemen onay verdim.", time: "Dün 16:45" },
      { userId: "p03", body: "Çok teşekkürler! Bu veriyle yeni bir hammadde optimizasyon projesi geliştirmeye başlayacağız.", time: "Dün 16:50" }
    ],
    "p05": [
      { userId: "p05", body: "Sürdürülebilir finans sprinti için borsa bütçesini kullanabilir miyiz? Sponsor arıyoruz.", time: "Bugün 10:12" },
      { own: true, body: "Evet Ece, bütçe limitleri dahilinde sponsorluğu onaylayabilirim. Detaylı talebi gönderir misin?", time: "Bugün 10:45" }
    ],
    "p06": [
      { userId: "p06", body: "Hi Can, I've updated the UK wind farm grid connection proposal. We need to reserve 1200 SA tokens to launch it.", time: "Yesterday 09:15" },
      { own: true, body: "Hello John, sounds good. I will check the budget allocation today and let you know if we can fund it directly.", time: "Yesterday 10:00" },
      { userId: "p06", body: "Thank you. The engineering team is eager to start prototyping.", time: "Yesterday 10:12" }
    ],
    "p07": [
      { userId: "p07", body: "Hi Can, the UK cement logistics portal is showing great active user counts. Can we get extra AI analysis on the traffic?", time: "Yesterday 11:22" },
      { own: true, body: "Sure Sarah, I will request SabancıDx AI lead to run a query for UK portal statistics.", time: "Yesterday 11:45" }
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
      { own: true, body: "Thanks Robert. I saw the stress reports. We will feature this in the Kordsa global showcase.", time: "2 days ago" }
    ],
    "p13": [
      { userId: "p13", body: "Hallo Can, der neue Bulk-Silo-Entwurf für Hamburg Terminal ist fertig. Können wir das Budget freigeben?", time: "Dün 10:12" },
      { own: true, body: "Hallo Hans, ich werde das Budget prüfen. Wir müssen sicherstellen, dass die EU-Normen eingehalten werden.", time: "Dün 10:45" },
      { userId: "p13", body: "Perfekt, danke. Die Dokumentation ist bereits im System hinterlegt.", time: "Dün 11:00" }
    ],
    "p14": [
      { userId: "p14", body: "Hallo Can, die Teststrecke für den Wasserstoffbus in München ist betriebsbereit. Die Sensoren laufen.", time: "Dün 13:00" },
      { own: true, body: "Klasse Dieter! Bitte teile die ersten Telemetriedaten mit der Adana Software-Gruppe.", time: "Dün 13:20" }
    ],
    "p15": [
      { userId: "p15", body: "Hola Can, hemos completado el diseño del microgrid solar para Buñol. ¿Podemos subirlo al portal de España?", time: "Bugün 09:30" },
      { own: true, body: "Hola Carlos, excelente. Por favor, súbelo usando el Borsa Composer seleccionando España como país objetivo.", time: "Bugün 09:45" },
      { userId: "p15", body: "Entendido, ya está publicado. Gracias por el soporte.", time: "Bugün 10:00" }
    ],
    "p16": [
      { userId: "p16", body: "Can, I uploaded the carbon metrics for Çimsa Spain alternative fuels. It's ready for strategic score review.", time: "Dün 15:00" },
      { own: true, body: "Thanks Maria, I will trigger the AI host analysis on it right away.", time: "Dün 15:30" }
    ],
    "u1": [
      { userId: "u1", body: "Can Bey, Teknosa mağaza içi kiosk projemize 100 SA bütçe ayırdık. Pilot mağaza kurulumunu onaylar mısınız?", time: "Bugün 11:00" },
      { own: true, body: "Onayladım Ayşe. Kioskların mobil ödeme entegrasyonu tamamlandı mı?", time: "Bugün 11:15" }
    ],
    "u2": [
      { userId: "u2", body: "Can Bey, CarrefourSA taze gıda takip projesinin pilot aşaması için malzeme listesini hazırladık.", time: "Dün 16:30" },
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
    { id: "studio-digital", name: "Dijital Ürün Stüdyosu", category: "FinTech", status: "Aktif", popularity: 81, createdAt: "2026-05-28", description: "Moka, ödeme ve dijital onboarding akışlarını ürünleştiren ekip alanı.", linkedTeams: [], linkedIdeas: ["idea-2", "idea-4"] }
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
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      date: "Her Çarşamba, 14:00",
      organizer: "İş New İnovasyon Ofisi"
    },
    {
      id: "edu-2",
      title: "FinTech Girişimleri için Hukuk ve Uyum Webinarı",
      category: "Seminer",
      description: "KVKK, BDDK lisanslama süreçleri, açık bankacılık regülasyonları ve ödeme kuruluşları mevzuatları hakkında bilgilendirici oturum.",
      link: "https://zoom.us/j/demo-fintech",
      date: "24 Haziran 2026, 11:00",
      organizer: "Moka Hukuk & Uyum Departmanı"
    },
    {
      id: "edu-3",
      title: "B2B SaaS Girişimlerinde Fiyatlandırma ve Büyüme Stratejileri",
      category: "Atölye",
      description: "Kullanıcı başına lisanslama, kullanım tabanlı fiyatlandırma modelleri ve kurumsal SaaS satış kanallarını optimize etme üzerine atölye çalışması.",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      date: "Kayıttan İzle (1.5 Saat)",
      organizer: "İş-Net Bulut Bilişim Grubu"
    }
  ],
  mentors: [
    {
      id: "mentor-1",
      name: "Elif Şahin",
      title: "FinTech & Ürün Yönetimi Müdürü (İş New)",
      specialties: ["Ürün Yönetimi", "FinTech", "İş Modeli Geliştirme"],
      bio: "12+ yıllık ürün yönetim deneyimi. Moka ve İşBank dijital bankacılık ürünlerinde ödeme sistemleri ve kullanıcı deneyimi süreçlerini yönetti.",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
      email: "elif.sahin@sabanci.example"
    },
    {
      id: "mentor-2",
      name: "Emir Arslan",
      title: "Yapay Zekâ Çözüm Mimarı (İşBank Teknoloji)",
      specialties: ["Yapay Zekâ", "Makine Öğrenmesi", "Teknik Altyapı"],
      bio: "Büyük dil modelleri (LLM), veri analitiği ve akıllı tahminleme altyapıları üzerine uzmanlaşmıştır. Fikirlerin teknik fizibilitesini değerlendirmede destek sağlar.",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      email: "emir.arslan@sabanci.example"
    },
    {
      id: "mentor-3",
      name: "Zeynep Kaya",
      title: "Sürdürülebilirlik & ESG Koordinatörü (TSKB)",
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
      organizer: "İş New İnovasyon Ofisi"
    },
    {
      id: "event-2",
      title: "FinTech & Yapay Zekâ Fikir Maratonu (Hackathon)",
      topic: "Yarışmalar",
      date: "10-12 Temmuz 2026",
      description: "TİBAŞ Holding iştirak çalışanlarının katılımına açık, 48 saat sürecek yoğun ürün geliştirme ve kodlama yarışması. Toplam ödül 50,000 NIE Kredisi.",
      link: "https://fikirkovani.com/hackathon-kayit",
      organizer: "İşBank Teknoloji"
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
      summary: "SabancıDx tarafından derlenmiş genel bulut verileri, sektörel büyüme oranları ve güvenlik gereksinimleri.",
      sharedBy: "Mert Alkan",
      companyId: "sabancidx",
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
      title: "Akbank QR ve Biyometrik Ödeme Kullanım Analizi",
      summary: "QR ve biyometrik ödeme entegrasyonları için pazar payı, işlem hızları ve müşteri kullanım oranları.",
      sharedBy: "Can Koç",
      companyId: "akbank",
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
      companyId: "sabanci-climate-us",
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
      title: "🚀 Akbank Mobil AI Yatırım Projesine UX Designer Arıyoruz!",
      author: "Can Koç",
      authorId: "u3",
      companyId: "akbank",
      type: "Topluluk",
      area: "Takım Arkadaşı Aranıyor",
      importanceScore: 5,
      body: "Merhabalar! Akbank Mobil AI Yatırım projemiz için prototip ekranlarımızı tasarlayacak ve bizimle ortak bütçeden pay alacak bir UX Designer takım arkadaşı arıyoruz. Katılmak için aşağıdaki 'Başvur' butonunu kullanarak başvurunuzu iletebilirsiniz!",
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
      companyId: "sabanci-climate-us",
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
    }
  ],
  
  socialPosts: [
    {
      id: "sp-1",
      userId: "p02",
      userName: "Mert Alkan",
      userAvatar: "https://randomuser.me/api/portraits/men/12.jpg",
      userBio: "İnovasyon Lideri · SabancıDx",
      body: "Akbank Mobil AI Yatırım projemiz Fikir Borsasında listelendi! Desteklerinizi ve geri bildirimlerinizi bekliyoruz.",
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



function currentUser() {
  const baseUser = {
    id: "u3",
    name: "Can Koç",
    email: "can.koc@sabanci.example",
    employeeId: "SA-22018",
    roleKey: "manager",
    seniority: "Yönetici",
    isManager: true,
    isAdmin: false,
    voteCreditBalance: 24,
    monthlyVoteCredit: 40,
    badges: ["Ekipler Arası Köprü", "Pilot Proje Katılımcısı"],
    supportedIdeas: ["idea-1", "idea-2", "idea-3"],
    photo: "https://randomuser.me/api/portraits/men/32.jpg"
  };

  const c = state.activeCountry || state.currentCountry || "TR";
  const adapted = { ...baseUser, country: c };
  Object.defineProperty(adapted, "voteCreditBalance", {
    get: function() { return state.userTokens; },
    set: function(val) { state.userTokens = val; },
    enumerable: true
  });

  switch (c) {
    case "TR":
      adapted.company = "Akbank T.A.Ş.";
      adapted.companyId = "akbank";
      adapted.department = "Dijital Bankacılık";
      adapted.location = "Akbank Genel Müdürlük";
      adapted.city = "İstanbul";
      adapted.region = "Marmara";
      adapted.role = "İnovasyon Yöneticisi";
      break;
    case "UK":
      adapted.company = "Çimsa UK";
      adapted.companyId = "cimsa-uk";
      adapted.department = "Strategy";
      adapted.location = "London Office";
      adapted.city = "London";
      adapted.region = "England";
      adapted.role = "Strategy Manager";
      break;
    case "US":
      adapted.company = "Kordsa Inc.";
      adapted.companyId = "kordsa-us";
      adapted.department = "Operations";
      adapted.location = "Chattanooga Plant";
      adapted.city = "Chattanooga";
      adapted.region = "TN";
      adapted.role = "Operations Director";
      break;
    case "DE":
      adapted.company = "Akbank AG";
      adapted.companyId = "akbank-de";
      adapted.department = "Corporate Banking";
      adapted.location = "Frankfurt HQ";
      adapted.city = "Frankfurt";
      adapted.region = "Hesse";
      adapted.role = "Corporate Manager";
      break;
    case "ES":
      adapted.company = "Çimsa Spain";
      adapted.companyId = "cimsa-spain";
      adapted.department = "Sales";
      adapted.location = "Madrid Office";
      adapted.city = "Madrid";
      adapted.region = "Madrid";
      adapted.role = "Sales Director";
      break;
    default:
      adapted.company = "Hacı Ömer Sabancı Holding A.Ş.";
      adapted.companyId = "sabanci-holding";
      adapted.department = "Strateji";
      adapted.location = "Sabancı Center";
      adapted.city = "İstanbul";
      adapted.region = "Marmara";
      adapted.role = "Yönetici";
  }
  return adapted;
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

function icon(name, extraAttrs = "") {
  if (name === "coins") {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="sa-coin-icon" style="width: 1.2em; height: 1.2em; vertical-align: text-bottom; display: inline-block; filter: drop-shadow(0 2px 4px rgba(241,196,15,0.4));" ${extraAttrs}>
      <circle cx="50" cy="50" r="45" fill="url(#goldGrad)" stroke="#b8860b" stroke-width="3"/>
      <circle cx="50" cy="50" r="38" fill="none" stroke="#daa520" stroke-width="1" stroke-dasharray="2 2"/>
      <g transform="translate(22.22, 34.8) scale(0.6)">
        <path d="M0,25.34A25.34,25.34,0,0,1,49.41,17.4a25.35,25.35,0,1,1,0,15.87A25.34,25.34,0,0,1,0,25.34Z" fill="#8b6508"/>
        <path d="M41.16,30.15c0-2.63-.53-4.53-1.55-5.67-1.18-1.36-2.74-1.82-6.54-2-2.05-.08-3.57-.12-4-.12H21.86a13.1,13.1,0,0,1-3-.15,1.94,1.94,0,0,1-1.7-2c0-1.4.68-1.94,2.58-2.09,1.18-.07,4.6-.19,7-.19,5.21,0,5.93.31,5.93,2.51H40.1c0-4.37-.84-6.12-3.38-7.07-1.94-.72-3.95-.87-11.36-.87a65.08,65.08,0,0,0-9.5.42c-4.71.6-6.34,2.66-6.34,7.71,0,4,1.06,5.93,3.72,6.84,1.29.45,3.5.64,7.18.64h7a35.85,35.85,0,0,1,3.8.08c1.56.15,2.32.87,2.32,2.16,0,2.25-1,2.47-10,2.47a35,35,0,0,1-4.83-.26c-1.14-.27-1.4-.72-1.48-2.62H9.63c0,.57,0,1.21,0,1.48,0,3.61,1.22,5.43,4.07,6.15,1.86.5,4.44.65,10.18.65a95.44,95.44,0,0,0,10.64-.38C39.34,37.32,41.16,35.24,41.16,30.15Z" fill="url(#goldGrad)"/>
        <path d="M79,28.21,73.49,18.1l-5.4,10.11ZM92.6,38H84.16l-2.5-4.52H65.32L62.89,38H54.15L68.4,12.67H78.73Z" fill="url(#goldGrad)"/>
      </g>
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffe066" />
          <stop offset="50%" stop-color="#f1c40f" />
          <stop offset="100%" stop-color="#d4ac0d" />
        </linearGradient>
      </defs>
    </svg>`;
  }
  return `<i data-lucide="${name}" aria-hidden="true" ${extraAttrs}></i>`;
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
  if (id === state.currentUserId || id === "u3") {
    const cUser = currentUser();
    return {
      id: cUser.id,
      name: cUser.name,
      companyId: cUser.companyId,
      role: cUser.role,
      team: cUser.department,
      city: cUser.city,
      campus: cUser.location,
      photo: cUser.photo,
      status: "Aktif",
      bio: cUser.bio || "İnovasyon ve verimlilik odaklı çalışıyorum.",
      cv: cUser.cv || "Eğitim: Sabancı Üniversitesi. Deneyim: 8 yıl süreç geliştirme ve operasyon yönetimi.",
      email: cUser.email,
      badges: cUser.badges || [],
      country: cUser.country
    };
  }
  if (id.startsWith("u")) {
    const du = demoUsers.find(user => user.id === id);
    if (du) {
      return {
        id: du.id,
        name: du.name,
        companyId: du.companyId || "sabanci-holding",
        role: du.role,
        team: du.department,
        city: du.city || "İstanbul",
        campus: du.location || "Sabancı Center",
        photo: du.photo || du.avatarUrl || profilePhotos[du.id] || "https://randomuser.me/api/portraits/men/75.jpg",
        status: "Aktif",
        bio: du.bio || "İnovasyon ve verimlilik odaklı çalışıyorum.",
        cv: du.cv || "Eğitim: Sabancı Üniversitesi. Deneyim: 8 yıl süreç geliştirme ve operasyon yönetimi.",
        email: du.email,
        badges: du.badges || [],
        country: du.country || "TR"
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
  if (state.filters.country === "Aktif Portal") {
    ideas = ideas.filter(idea => idea.country === state.activeCountry);
  } else if (state.filters.country !== "Tüm Ülkeler") {
    ideas = ideas.filter(idea => idea.country === state.filters.country);
  }
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
  return `${Math.round(value).toLocaleString("tr-TR")} SA`;
}

function formatCurrencyHTML(value, size = "normal") {
  return `<span class="sa-coin-inline" style="display: inline-flex; align-items: center; gap: 4px; font-weight: 600; vertical-align: middle;">${saCoinIcon(size)} <span>${Math.round(value).toLocaleString("tr-TR")}</span> <span style="font-weight: 800; font-size: 0.85em; color: var(--primary);">SA</span></span>`;
}

function saCoinIcon(size = "normal") {
  const sizePx = size === "large" ? "20" : size === "small" ? "13" : "16";
  return `
    <svg class="sa-coin-svg" width="${sizePx}" height="${sizePx}" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; display: inline-block; filter: drop-shadow(0px 1px 1.5px rgba(0,0,0,0.15));">
      <circle cx="18" cy="18" r="16" fill="url(#goldGrad)" stroke="#B8860B" stroke-width="1.5"/>
      <circle cx="18" cy="18" r="13" fill="none" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="2 1" opacity="0.6"/>
      <g transform="translate(7.35, 12.17) scale(0.23)">
        <path d="M0,25.34A25.34,25.34,0,0,1,49.41,17.4a25.35,25.35,0,1,1,0,15.87A25.34,25.34,0,0,1,0,25.34Z" fill="#5C4033"/>
        <path d="M41.16,30.15c0-2.63-.53-4.53-1.55-5.67-1.18-1.36-2.74-1.82-6.54-2-2.05-.08-3.57-.12-4-.12H21.86a13.1,13.1,0,0,1-3-.15,1.94,1.94,0,0,1-1.7-2c0-1.4.68-1.94,2.58-2.09,1.18-.07,4.6-.19,7-.19,5.21,0,5.93.31,5.93,2.51H40.1c0-4.37-.84-6.12-3.38-7.07-1.94-.72-3.95-.87-11.36-.87a65.08,65.08,0,0,0-9.5.42c-4.71.6-6.34,2.66-6.34,7.71,0,4,1.06,5.93,3.72,6.84,1.29.45,3.5.64,7.18.64h7a35.85,35.85,0,0,1,3.8.08c1.56.15,2.32.87,2.32,2.16,0,2.25-1,2.47-10,2.47a35,35,0,0,1-4.83-.26c-1.14-.27-1.4-.72-1.48-2.62H9.63c0,.57,0,1.21,0,1.48,0,3.61,1.22,5.43,4.07,6.15,1.86.5,4.44.65,10.18.65a95.44,95.44,0,0,0,10.64-.38C39.34,37.32,41.16,35.24,41.16,30.15Z" fill="url(#goldGrad)"/>
        <path d="M79,28.21,73.49,18.1l-5.4,10.11ZM92.6,38H84.16l-2.5-4.52H65.32L62.89,38H54.15L68.4,12.67H78.73Z" fill="url(#goldGrad)"/>
      </g>
      <defs>
        <linearGradient id="goldGrad" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#FFE07D"/>
          <stop offset="30%" stop-color="#F1C40F"/>
          <stop offset="70%" stop-color="#D4AC0D"/>
          <stop offset="100%" stop-color="#9A7D0A"/>
        </linearGradient>
      </defs>
    </svg>
  `;
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
    files: [],
    country: state.activeCountry || "TR"
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
    <span class="sabanci-lockup ${compact ? "compact" : ""}" aria-label="Türkiye Sabancı Holding - NEW IDEA EXCHANGE">
      <img class="sabanci-logo-image" src="${esc(brandLogoSrc)}" alt="Türkiye Sabancı Holding" />
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
    dashboard: "Kurum içi veri, duyuru, öneri ve piyasa sinyalleri genel paneli",
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
    adminStorage: "Yönetici depolama alanı, dosyaları ve kaynak arşivi",
    studio: "İştirak inovasyon stüdyoları, proje geliştirme ekipleri ve kuluçkadaki ürünler",
    products: "Ürünleşen fikirler ve gelişim seviyeleri",
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
  translateIdeasInState();
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
  if (!state.accessKeyAccepted) {
    return `
      <main class="login-page apple-login">
        <section class="apple-access-card">
          <div class="apple-access-brand">
            ${brandLockup()}
          </div>
          <div class="apple-login-copy">
            <h1 style="font-family: 'Space Grotesk', sans-serif;">Sabancı Innovation Exchange</h1>
            <p>Sabancı Holding iç inovasyon alanına giriş için exchange key'ini gir.</p>
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
          <p class="security-note">Demo key altta görünür. Gerçek ortamda erişim şirket içi kimlikle doğrulanır.</p>
        </section>
      </main>
    `;
  }

  // Key is accepted! Now select country portal
  if (!state.loginCountrySelected) {
    return `
      <main class="login-page apple-login">
        <section class="apple-access-card" style="max-width: 500px; width: 90%;">
          <div class="apple-access-brand">
            ${brandLockup()}
          </div>
          <div class="apple-login-copy" style="margin-bottom: 24px;">
            <h1 style="font-family: 'Space Grotesk', sans-serif; font-size: 20px;">Ülke Portalı Seçimi</h1>
            <p>Giriş yapmak istediğiniz ülke inovasyon portalını seçin:</p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${countriesList.map(c => `
              <button class="btn secondary block justify-start" style="padding: 16px; display: flex; align-items: center; gap: 12px; height: auto; text-align: left;" data-action="select-login-country" data-code="${c.code}">
                <img src="/assets/flags/${c.code.toLowerCase()}.svg" alt="${c.name}" style="width: 28px; height: 18px; object-fit: cover; border-radius: 3px; box-shadow: 0 1px 3px rgba(0,0,0,0.2);" />
                <div style="display: flex; flex-direction: column; flex: 1;">
                  <strong style="font-size: 14.5px; color: var(--ink);">${c.name}</strong>
                  <small style="font-size: 11.5px; color: var(--muted);">${c.label}</small>
                </div>
                ${icon("chevron-right")}
              </button>
            `).join("")}
          </div>
        </section>
      </main>
    `;
  }

  // Country is selected! Now select user from this country
  const countryUsers = demoUsers.filter(u => u.country === state.currentCountry);
  const selected = countryUsers.find(user => user.id === state.selectedLoginUserId) || countryUsers[0] || demoUsers[0];
  
  return `
    <main class="login-page apple-login">
      <section class="apple-access-card" style="max-width: 450px; width: 90%;">
        <div class="apple-access-brand">
          ${brandLockup()}
        </div>
        <div class="apple-login-copy" style="margin-bottom: 20px;">
          <h1 style="font-family: 'Space Grotesk', sans-serif; font-size: 20px;">Kullanıcı Profili Seçin</h1>
          <p>${state.currentCountry === "TR" ? "Türkiye" : state.currentCountry} portalı için aktif çalışma profilinizi seçin:</p>
        </div>

        <div style="margin-bottom: 20px; display: flex; flex-direction: column; gap: 8px; max-height: 220px; overflow-y: auto; padding: 4px; border: 1px solid var(--line-soft); border-radius: 12px;">
          ${countryUsers.map(user => `
            <div class="user-select-row ${user.id === selected.id ? 'active' : ''}" style="display: flex; align-items: center; gap: 12px; padding: 10px; border-radius: 8px; cursor: pointer; border: 1px solid ${user.id === selected.id ? 'var(--primary)' : 'transparent'}; background: ${user.id === selected.id ? 'rgba(var(--primary-rgb), 0.05)' : 'transparent'};" data-action="select-login-user" data-id="${user.id}">
              ${avatar(user.name, "medium", user.avatarUrl)}
              <div style="flex: 1; text-align: left; line-height: 1.3;">
                <strong style="font-size: 13.5px; color: var(--ink); display: block;">${esc(user.name)}</strong>
                <small style="font-size: 11.5px; color: var(--muted);">${esc(user.company.split(" ")[0])} · ${esc(user.role)}</small>
              </div>
              ${user.id === selected.id ? `<span style="color: var(--primary);">${icon("check-circle-2")}</span>` : ""}
            </div>
          `).join("")}
        </div>

        <div class="apple-found-user" style="margin-bottom: 20px; border-top: 1px solid var(--line-soft); padding-top: 16px;">
          ${avatar(selected.name, "medium", selected.avatarUrl)}
          <span>
            <small>Doğrulanan Profil</small>
            <strong>Hoş geldin, ${esc(selected.name.split(" ")[0])}.</strong>
            <em>${esc(selected.company.split(" ")[0])} · ${esc(selected.role)}</em>
          </span>
        </div>

        <div style="display: flex; gap: 10px;">
          <button class="btn secondary" style="flex: 1;" data-action="back-to-countries">${icon("arrow-left")} Geri</button>
          <button class="btn primary" style="flex: 1;" data-action="login">${icon("arrow-right")} Giriş yap</button>
        </div>
      </section>
    </main>
  `;
}

function renderGlobalSearchPanel() {
  if (!state.globalSearchQuery || !state.globalSearchQuery.trim()) return "";
  
  const q = state.globalSearchQuery.trim().toLocaleLowerCase("tr-TR");
  
  // 1. Projeler (Ideas with status other than "done" and in "Fikir Aşaması")
  const matchingProjects = (state.ideas || []).filter(idea => 
    productStage(idea) === "Fikir Aşaması" && (
      idea.title.toLocaleLowerCase("tr-TR").includes(q) ||
      idea.summary.toLocaleLowerCase("tr-TR").includes(q) ||
      (idea.marketTicker && idea.marketTicker.toLocaleLowerCase("tr-TR").includes(q))
    )
  ).slice(0, 3);

  // 2. Ürünler (Ideas that have active development teams)
  const matchingProducts = (state.ideas || []).filter(idea => 
    productStage(idea) !== "Fikir Aşaması" && (
      idea.title.toLocaleLowerCase("tr-TR").includes(q) ||
      idea.summary.toLocaleLowerCase("tr-TR").includes(q) ||
      (idea.marketTicker && idea.marketTicker.toLocaleLowerCase("tr-TR").includes(q))
    )
  ).slice(0, 3);
  
  // 3. Ekipler (Girişim Takımları)
  const matchingTeams = (state.teams || []).filter(team => 
    team.name.toLocaleLowerCase("tr-TR").includes(q) ||
    team.description.toLocaleLowerCase("tr-TR").includes(q) ||
    team.area.toLocaleLowerCase("tr-TR").includes(q)
  ).slice(0, 3);

  // 4. Gündem
  const matchingAgenda = (state.agendaItems || []).filter(item => 
    item.title.toLocaleLowerCase("tr-TR").includes(q) ||
    item.body.toLocaleLowerCase("tr-TR").includes(q)
  ).slice(0, 3);

  // 5. Tahminler
  const matchingPredictions = (state.predictions || []).filter(pred => 
    pred.predictionText.toLocaleLowerCase("tr-TR").includes(q) ||
    pred.ideaTitle.toLocaleLowerCase("tr-TR").includes(q)
  ).slice(0, 3);

  // 6. Etkinlikler
  const matchingEvents = (state.events || []).filter(ev => 
    ev.title.toLocaleLowerCase("tr-TR").includes(q) ||
    ev.description.toLocaleLowerCase("tr-TR").includes(q) ||
    ev.topic.toLocaleLowerCase("tr-TR").includes(q)
  ).slice(0, 3);

  // 7. Duyurular & Veri Setleri (Diğer)
  const matchingAnnouncements = (state.announcements || []).filter(ann => 
    ann.title.toLocaleLowerCase("tr-TR").includes(q) ||
    ann.body.toLocaleLowerCase("tr-TR").includes(q)
  ).slice(0, 2);
  
  const matchingDataSets = (state.dataSets || []).filter(ds => 
    ds.title.toLocaleLowerCase("tr-TR").includes(q) ||
    ds.summary.toLocaleLowerCase("tr-TR").includes(q)
  ).slice(0, 2);

  const totalResults = matchingProjects.length + matchingProducts.length + matchingTeams.length + matchingAgenda.length + matchingPredictions.length + matchingEvents.length + matchingAnnouncements.length + matchingDataSets.length;

  if (totalResults === 0) {
    return `
      <div class="global-search-panel" style="margin-top: 10px; margin-right: 28px;">
        <div class="global-search-empty">
          ${icon("info")}
          <span>"${esc(state.globalSearchQuery)}" için arama sonucu bulunamadı.</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="global-search-panel" style="margin-top: 10px; margin-right: 28px; max-height: 480px; overflow-y: auto;">
      <div class="global-search-head">
        <span>${icon("search")} Arama Sonuçları: <strong>${totalResults} eşleşme</strong></span>
        <button class="btn ghost slim-btn" data-action="close-global-search" style="font-size: 11px; padding: 4px 8px;">${icon("x")} Kapat</button>
      </div>
      
      ${matchingProjects.length ? `
        <div class="global-search-group">
          <span class="panel-kicker" style="font-size: 10px; margin-bottom: 2px;">Projeler & Fikirler</span>
          ${matchingProjects.map(idea => `
            <button class="global-search-result" data-action="go-to-search-result" data-type="idea" data-id="${esc(idea.id)}">
              <i>${icon("chart-candlestick")}</i>
              <div>
                <strong>${esc(idea.title)}</strong>
                <small>${esc(idea.summary)}</small>
              </div>
              <em>${esc(idea.marketTicker || "NIE")}</em>
            </button>
          `).join("")}
        </div>
      ` : ""}

      ${matchingProducts.length ? `
        <div class="global-search-group">
          <span class="panel-kicker" style="font-size: 10px; margin-bottom: 2px;">Ürünleşen Girişimler</span>
          ${matchingProducts.map(idea => `
            <button class="global-search-result" data-action="go-to-search-result" data-type="product" data-id="${esc(idea.id)}">
              <i>${icon("package-check")}</i>
              <div>
                <strong>${esc(idea.title)}</strong>
                <small>${esc(idea.summary)}</small>
              </div>
              <em>${esc(idea.marketTicker || "NIE")}</em>
            </button>
          `).join("")}
        </div>
      ` : ""}

      ${matchingTeams.length ? `
        <div class="global-search-group">
          <span class="panel-kicker" style="font-size: 10px; margin-bottom: 2px;">Ekipler</span>
          ${matchingTeams.map(team => `
            <button class="global-search-result" data-action="go-to-search-result" data-type="team" data-id="${esc(team.id)}">
              <i>${icon("users-round")}</i>
              <div>
                <strong>${esc(team.name)}</strong>
                <small>${esc(team.description)}</small>
              </div>
              <em>${esc(team.area)}</em>
            </button>
          `).join("")}
        </div>
      ` : ""}

      ${matchingAgenda.length ? `
        <div class="global-search-group">
          <span class="panel-kicker" style="font-size: 10px; margin-bottom: 2px;">Gündem ve Duyurular</span>
          ${matchingAgenda.map(item => `
            <button class="global-search-result" data-action="go-to-search-result" data-type="agenda" data-id="${esc(item.id)}">
              <i>${icon("newspaper")}</i>
              <div>
                <strong>${esc(item.title)}</strong>
                <small>${esc(item.body)}</small>
              </div>
              <em>${esc(item.category)}</em>
            </button>
          `).join("")}
        </div>
      ` : ""}

      ${matchingPredictions.length ? `
        <div class="global-search-group">
          <span class="panel-kicker" style="font-size: 10px; margin-bottom: 2px;">Tahmin ve Öngörüler</span>
          ${matchingPredictions.map(pred => `
            <button class="global-search-result" data-action="go-to-search-result" data-type="prediction" data-id="${esc(pred.id)}">
              <i>${icon("trending-up")}</i>
              <div>
                <strong>${esc(pred.ideaTitle)}</strong>
                <small>${esc(pred.predictionText)}</small>
              </div>
              <em>%${pred.probability} İhtimal</em>
            </button>
          `).join("")}
        </div>
      ` : ""}

      ${matchingEvents.length ? `
        <div class="global-search-group">
          <span class="panel-kicker" style="font-size: 10px; margin-bottom: 2px;">Seminer ve Etkinlikler</span>
          ${matchingEvents.map(ev => `
            <button class="global-search-result" data-action="go-to-search-result" data-type="event" data-id="${esc(ev.id)}">
              <i>${icon("calendar")}</i>
              <div>
                <strong>${esc(ev.title)}</strong>
                <small>${esc(ev.description)}</small>
              </div>
              <em>${esc(ev.topic)}</em>
            </button>
          `).join("")}
        </div>
      ` : ""}

      ${matchingAnnouncements.length || matchingDataSets.length ? `
        <div class="global-search-group">
          <span class="panel-kicker" style="font-size: 10px; margin-bottom: 2px;">Diğer İçerikler</span>
          ${matchingAnnouncements.map(ann => `
            <button class="global-search-result" data-action="go-to-search-result" data-type="announcement" data-id="${esc(ann.id)}">
              <i>${icon("megaphone")}</i>
              <div>
                <strong>${esc(ann.title)}</strong>
                <small>${esc(ann.body)}</small>
              </div>
              <em>Duyuru</em>
            </button>
          `).join("")}
          ${matchingDataSets.map(ds => `
            <button class="global-search-result" data-action="go-to-search-result" data-type="dataset" data-id="${esc(ds.id)}">
              <i>${icon("database")}</i>
              <div>
                <strong>${esc(ds.title)}</strong>
                <small>${esc(ds.summary)}</small>
              </div>
              <em>Veri Seti</em>
            </button>
          `).join("")}
        </div>
      ` : ""}
    </div>
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
            <input class="input" data-global-search placeholder="Ara" value="${esc(state.globalSearchQuery || '')}" />
          </label>
          <div class="top-actions">
            <div class="portal-dropdown-container">
              ${(() => {
                const activeC = countriesList.find(c => c.code === state.activeCountry) || countriesList[0];
                return `
                  <button class="btn ghost" data-action="toggle-portal-dropdown" style="display: inline-flex; align-items: center; gap: 8px; background: rgba(var(--primary-rgb), 0.04); border: 1px solid var(--line-soft); padding: 6px 14px; border-radius: 99px; font-size: 13px; font-weight: 600; color: var(--text); transition: background 0.2s, transform 0.2s; cursor: pointer; height: auto;" aria-label="Portal değiştir">
                    <img src="/assets/flags/${activeC.code.toLowerCase()}.svg" style="width: 18px; height: 12px; object-fit: cover; border-radius: 2px; box-shadow: 0 1px 2px rgba(0,0,0,0.1);" alt="" />
                    <span>${esc(activeC.name)}</span>
                    ${icon("chevron-down", "style='width: 14px; height: 14px; color: var(--muted); margin-left: 2px;'")}
                  </button>
                `;
              })()}
              ${state.portalDropdownOpen ? `
                <div class="portal-dropdown">
                  <div style="padding: 6px 10px; font-size: 11px; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: 0.5px;">Ülke Portalları</div>
                  ${countriesList.map(c => {
                    const isActive = c.code === state.activeCountry;
                    
                    const countryNameMap = {
                      "TR": "Türkiye",
                      "GB": "Birleşik Krallık",
                      "US": "Amerika Birleşik Devletleri",
                      "DE": "Almanya",
                      "ES": "İspanya"
                    };
                    const searchCountry = countryNameMap[c.code] || c.name;
                    const subCount = affiliationCompanies.filter(comp => comp.countries && comp.countries.includes(searchCountry)).length;
                    
                    return `
                      <button class="portal-dropdown-item ${isActive ? "active" : ""}" data-action="change-active-portal" data-code="${esc(c.code)}">
                        <span style="display: flex; align-items: center; gap: 8px;">
                          <img src="/assets/flags/${c.code.toLowerCase()}.svg" style="width: 20px; height: 13px; object-fit: cover; border-radius: 2px; box-shadow: 0 1px 2px rgba(0,0,0,0.1);" alt="" />
                          <span>${esc(c.name)}</span>
                        </span>
                        <span style="font-size: 11px; color: var(--muted); background: rgba(var(--primary-rgb), 0.05); padding: 2px 6px; border-radius: 6px;">${subCount} İştirak</span>
                      </button>
                    `;
                  }).join("")}
                </div>
              ` : ""}
            </div>
            <span class="credit-pill">${icon("coins")} ${user.voteCreditBalance}</span>
            <button class="icon-button" data-action="toggle-theme" aria-label="Tema değiştir">${icon(state.theme === "dark" ? "sun" : "moon")}</button>
            <button class="icon-button position-relative" data-page="notifications" aria-label="Bildirimler">
              ${icon("bell")}
              ${state.notifications.filter(n => n.unread).length ? `<span class="bell-badge">${state.notifications.filter(n => n.unread).length}</span>` : ""}
            </button>
            <button class="btn primary" data-page="newIdea">${icon("plus")} Başvuru</button>
          </div>
        </header>
        ${renderGlobalSearchPanel()}
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
  const ids = ["dashboard", "quickFlow", "agenda", "studio", "profile"];
  const mobileLabels = {
    dashboard: "Genel",
    announcements: "Duyuru",
    challenges: "Yarışma",
    messages: "Mesaj",
    data: "Veri&Bilgi",
    agenda: "Gündem",
    studio: "Stüdyo",
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
  if (state.page === "teams") {
    state.page = "studio";
    state.studioTab = "teams";
  }
  if (state.page === "products") {
    state.page = "studio";
    state.studioTab = "products";
  }

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
    case "education":
      return renderEducationPage();
    case "events":
      return renderEventsPage();
    default:
      return renderQuickFlow();
  }
}

function getSubsidiariesByCountry(code) {
  const mapping = {
    TR: ["Türkiye"],
    GB: ["Birleşik Krallık", "United Kingdom"],
    US: ["Amerika Birleşik Devletleri", "United States"],
    DE: ["Almanya", "Germany"],
    ES: ["İspanya", "Spain"]
  };
  const names = mapping[code] || [];
  return affiliationCompanies.filter(comp => {
    return comp.countries.some(cName => names.includes(cName));
  });
}

function renderSubsidiaryBranchingPanel() {
  const activeC = countriesList.find(c => c.code === state.activeCountry) || countriesList[0];
  const subsidiaries = getSubsidiariesByCountry(state.activeCountry);
  
  // Calculate stats
  const allCities = new Set();
  const allCampuses = new Set();
  const allTypes = new Set();
  subsidiaries.forEach(sub => {
    if (sub.cities) sub.cities.forEach(c => allCities.add(c));
    if (sub.campuses) sub.campuses.forEach(camp => allCampuses.add(camp));
    if (sub.type) allTypes.add(sub.type);
  });
  
  // Find selected subsidiary for detail view (state.selectedBranchId)
  if (!state.selectedBranchId && subsidiaries.length > 0) {
    state.selectedBranchId = subsidiaries[0].id;
  }
  
  const activeBranchExists = subsidiaries.some(sub => sub.id === state.selectedBranchId);
  if (!activeBranchExists && subsidiaries.length > 0) {
    state.selectedBranchId = subsidiaries[0].id;
  }

  const activeBranch = subsidiaries.find(sub => sub.id === state.selectedBranchId) || subsidiaries[0];

  return `
    <section class="content-panel" style="margin-top: 24px; padding: 24px; border-radius: 20px; background: var(--surface); border: 1px solid var(--line-soft); position: relative; overflow: hidden; box-shadow: var(--shadow-soft);">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; margin-bottom: 20px;">
        <div>
          <span class="panel-kicker" style="display: flex; align-items: center; gap: 6px; font-weight: 700; color: var(--accent);">
            <img src="/assets/flags/${activeC.code.toLowerCase()}.svg" style="width: 18px; height: 12px; object-fit: cover; border-radius: 2px;" alt="" />
            SABANCI ${activeC.name.toUpperCase()} EKOSİSTEMİ
          </span>
          <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 20px; font-weight: 700; margin-top: 4px; color: var(--ink);">Şubeleşme, İştirakler ve Yerleşke Yapısı</h3>
          <p style="color: var(--muted); font-size: 13px; margin-top: 2px;">Aktif portala bağlı iştiraklerin coğrafi yerleşke, departman ve inovasyon ağacı.</p>
        </div>
        
        <!-- Stats Row -->
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <div style="background: rgba(var(--primary-rgb), 0.03); border: 1px solid var(--line-soft); padding: 8px 16px; border-radius: 12px; text-align: center; min-width: 90px; box-shadow: inset 0 1px 2px rgba(0,0,0,0.02);">
            <small style="color: var(--muted); display: block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">İştirak</small>
            <strong style="font-size: 18px; font-family: 'Space Grotesk', sans-serif; color: var(--text);">${subsidiaries.length}</strong>
          </div>
          <div style="background: rgba(var(--primary-rgb), 0.03); border: 1px solid var(--line-soft); padding: 8px 16px; border-radius: 12px; text-align: center; min-width: 90px; box-shadow: inset 0 1px 2px rgba(0,0,0,0.02);">
            <small style="color: var(--muted); display: block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Şehir</small>
            <strong style="font-size: 18px; font-family: 'Space Grotesk', sans-serif; color: var(--text);">${allCities.size}</strong>
          </div>
          <div style="background: rgba(var(--primary-rgb), 0.03); border: 1px solid var(--line-soft); padding: 8px 16px; border-radius: 12px; text-align: center; min-width: 90px; box-shadow: inset 0 1px 2px rgba(0,0,0,0.02);">
            <small style="color: var(--muted); display: block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Yerleşke</small>
            <strong style="font-size: 18px; font-family: 'Space Grotesk', sans-serif; color: var(--text);">${allCampuses.size}</strong>
          </div>
        </div>
      </div>

      <!-- Main Visual Branching Grid -->
      <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 24px; margin-top: 20px;" class="subsidiary-grid">
        
        <!-- Left Side: Interactive Branch Tree & Org Map -->
        <div style="display: flex; flex-direction: column; gap: 16px; background: rgba(var(--primary-rgb), 0.015); border: 1px solid var(--line-soft); border-radius: 16px; padding: 24px; min-height: 380px; justify-content: center; position: relative; overflow: hidden;">
          
          <!-- Root Parent Node: Sabancı Holding -->
          <div style="display: flex; justify-content: center; margin-bottom: 28px; position: relative; z-index: 2;">
            <div style="display: flex; align-items: center; gap: 12px; background: var(--surface); border: 2px solid var(--accent); padding: 10px 24px; border-radius: 14px; box-shadow: 0 8px 24px rgba(0, 93, 170, 0.12); text-align: left;">
              <img src="/assets/company-logos/sabanci-holding.svg" style="height: 22px; width: auto;" alt="" />
              <span>
                <strong style="display: block; font-size: 13.5px; font-weight: 700; color: var(--ink);">H.Ö. Sabancı Holding</strong>
                <small style="color: var(--muted); font-size: 11px; font-weight: 500;">Holding Merkez Çatısı</small>
              </span>
            </div>
          </div>
          
          <!-- Branches Horizontal / Grid layout -->
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(135px, 1fr)); gap: 12px; position: relative; z-index: 2;">
            ${subsidiaries.map(sub => {
              const isSelected = activeBranch && sub.id === activeBranch.id;
              return `
                <button class="branch-node-btn ${isSelected ? "active" : ""}" data-action="select-branch" data-id="${esc(sub.id)}" style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  gap: 8px;
                  background: ${isSelected ? "rgba(0, 93, 170, 0.06)" : "var(--surface)"};
                  border: 1px solid ${isSelected ? "var(--accent)" : "var(--line-soft)"};
                  border-radius: 12px;
                  padding: 14px 8px;
                  cursor: pointer;
                  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
                  box-shadow: ${isSelected ? "0 8px 20px rgba(0, 93, 170, 0.1)" : "0 2px 4px rgba(0,0,0,0.02)"};
                  width: 100%;
                  text-align: center;
                  outline: none;
                ">
                  <div style="width: 44px; height: 44px; border-radius: 10px; background: #fff; border: 1px solid var(--line-soft); display: flex; align-items: center; justify-content: center; padding: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); transition: transform 0.2s;">
                    <img src="${esc(sub.logo)}" style="max-width: 100%; max-height: 100%; object-fit: contain;" alt="" />
                  </div>
                  <div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
                    <strong style="font-size: 12.5px; font-weight: 600; color: var(--text); display: block; max-width: 115px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${esc(sub.shortName)}</strong>
                    <small style="color: var(--muted); font-size: 10.5px; margin-top: 2px; font-weight: 500;">${esc(sub.type)}</small>
                  </div>
                </button>
              `;
            }).join("")}
          </div>
        </div>

        <!-- Right Side: Branch Information Panel (Deep Details Card) -->
        <div style="background: rgba(var(--primary-rgb), 0.015); border: 1px solid var(--line-soft); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; justify-content: space-between; min-height: 380px;">
          ${activeBranch ? `
            <div>
              <div style="display: flex; align-items: center; gap: 14px; border-bottom: 1px solid var(--line-soft); padding-bottom: 16px; margin-bottom: 16px;">
                <div style="width: 56px; height: 56px; border-radius: 12px; background: #fff; border: 1px solid var(--line-soft); display: flex; align-items: center; justify-content: center; padding: 6px; box-shadow: 0 4px 10px rgba(0,0,0,0.06);">
                  <img src="${esc(activeBranch.logo)}" style="max-width: 100%; max-height: 100%; object-fit: contain;" alt="" />
                </div>
                <div>
                  <h4 style="font-family: 'Space Grotesk', sans-serif; font-size: 16px; font-weight: 700; color: var(--text); line-height: 1.25;">${esc(activeBranch.name)}</h4>
                  <a href="https://${esc(activeBranch.domain)}" target="_blank" rel="noopener noreferrer" style="color: var(--accent); font-size: 12.5px; font-weight: 600; display: inline-flex; align-items: center; gap: 4px; margin-top: 4px; text-decoration: none;">
                    ${icon("globe", "style='width: 12px; height: 12px;'")} ${esc(activeBranch.domain)}
                  </a>
                </div>
              </div>

              <!-- Locations and Campuses list -->
              <div style="display: flex; flex-direction: column; gap: 14px;">
                <div>
                  <span style="font-size: 11px; font-weight: 700; color: var(--muted); text-transform: uppercase; display: flex; align-items: center; gap: 4px; letter-spacing: 0.5px;">
                    ${icon("map-pin", "style='width: 12px; height: 12px; color: var(--accent);'")} AKTİF ŞEHİRLER & ŞUBELER
                  </span>
                  <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px;">
                    ${activeBranch.cities.map(city => `
                      <span style="font-size: 11.5px; background: var(--surface); border: 1px solid var(--line-soft); padding: 4px 12px; border-radius: 20px; font-weight: 600; color: var(--text); box-shadow: 0 1px 2px rgba(0,0,0,0.02);">${esc(city)}</span>
                    `).join("")}
                  </div>
                </div>

                <div>
                  <span style="font-size: 11px; font-weight: 700; color: var(--muted); text-transform: uppercase; display: flex; align-items: center; gap: 4px; letter-spacing: 0.5px; margin-top: 4px;">
                    ${icon("building-2", "style='width: 12px; height: 12px; color: var(--accent);'")} YERLEŞKE & TESİSLER
                  </span>
                  <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 8px;">
                    ${activeBranch.campuses.map(camp => `
                      <div style="font-size: 12px; display: flex; align-items: center; gap: 8px; color: var(--text); background: var(--surface); padding: 8px 12px; border-radius: 8px; border: 1px solid var(--line-soft); box-shadow: 0 1px 2px rgba(0,0,0,0.02);">
                        <div style="width: 6px; height: 6px; border-radius: 50%; background: var(--accent);"></div>
                        <span style="font-weight: 500;">${esc(camp)}</span>
                      </div>
                    `).join("")}
                  </div>
                </div>

                <div>
                  <span style="font-size: 11px; font-weight: 700; color: var(--muted); text-transform: uppercase; display: flex; align-items: center; gap: 4px; letter-spacing: 0.5px; margin-top: 4px;">
                    ${icon("users", "style='width: 12px; height: 12px; color: var(--accent);'")} İNOVASYON & AR-GE ODAKLARI
                  </span>
                  <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px;">
                    ${activeBranch.departments.map(dept => `
                      <span style="font-size: 11px; background: rgba(0, 93, 170, 0.08); border: 1px solid rgba(0, 93, 170, 0.15); padding: 4px 10px; border-radius: 6px; font-weight: 600; color: var(--accent);">${esc(dept)}</span>
                    `).join("")}
                  </div>
                </div>
              </div>
            </div>
            
            <!-- AI Synergy Analysis Footer -->
            <div style="margin-top: 18px; padding: 12px; background: rgba(0, 93, 170, 0.04); border: 1px solid rgba(0, 93, 170, 0.08); border-radius: 12px; font-size: 12px; line-height: 1.45; color: var(--ink-soft);">
              <strong>${icon("sparkles", "style='width: 12px; height: 12px; color: var(--accent); margin-right: 4px;'")} İnovasyon Sinerji Analizi:</strong>
              ${activeBranch.shortName} iştirakinin ${activeC.name} genelindeki operasyonları, yeşil dönüşüm, dijitalleşme ve verimlilik odaklı inovasyon hedeflerini yerel yerleşkelerindeki Ar-Ge ve mühendislik faaliyetleriyle doğrudan desteklemektedir.
            </div>
          ` : `
            <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--muted); font-size: 13px;">
              İştirak detaylarını görmek için soldan seçim yapın.
            </div>
          `}
        </div>

      </div>
    </section>
  `;
}

function renderDashboard() {
  const user = currentUser();
  const countryIdeas = state.ideas.filter(idea => idea.country === state.activeCountry);
  const departmentIdeas = countryIdeas.filter(idea => idea.department === user.department || idea.company === user.company);
  const implemented = countryIdeas.filter(idea => idea.status === "done");
  const highAi = countryIdeas.filter(idea => idea.aiScore >= 88);
  const highlights = [...countryIdeas].sort((a, b) => b.aiScore + b.communityScore - (a.aiScore + a.communityScore)).slice(0, 3);
  const focusIdea = highlights[0] || countryIdeas[0] || state.ideas[0];
  
  const countMultiplier = state.activeCountry === "TR" ? 12 : state.activeCountry === "US" ? 6 : state.activeCountry === "GB" ? 4 : 2;
  const queueCount = countryIdeas.filter(idea => ["new", "review", "pilot"].includes(idea.status)).length;
  const reviewCount = countryIdeas.filter(idea => idea.status === "review").length + countMultiplier * 2;
  const pilotCount = countryIdeas.filter(idea => idea.status === "pilot").length + countMultiplier;
  const totalPortfolio = countryIdeas.length + countMultiplier * 15;

  return `
    <div class="view-stack apple-page">
      <section class="apple-hero" style="position: relative; overflow: hidden; padding-bottom: 30px;">
        <div class="apple-hero-copy">
          <span class="panel-kicker">Genel Bilgi Alanı</span>
          <h2>Kurumsal İnovasyon ve Gelişmeler</h2>
          <p>Öneri, araştırma, proje ve duyuruları tek bilgi katmanında izle; revaçta olan başlıkları Borsa hareketiyle gör.</p>
          
          <!-- Prominent Global Search Motor -->
          <div class="hero-global-search-container" style="margin-top: 20px; width: 100%; max-width: 540px;">
            <label class="search-box" style="background: rgba(255,255,255,0.14); border: 1px solid rgba(255,255,255,0.22); border-radius: 99px; display: flex; align-items: center; padding: 10px 18px; width: 100%; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
              ${icon("search", "style='color: #ffffff; opacity: 0.9; margin-right: 8px;'")}
              <input class="input" placeholder="Platform genelinde ara (Proje, Ürün, Ekip, Gündem, Tahmin...)" data-global-search style="background: transparent; border: none; color: #ffffff; outline: none; width: 100%; font-size: 14.5px;" value="${esc(state.globalSearchQuery || '')}" />
            </label>
          </div>
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

        <article class="content-panel apple-panel">
          <div class="section-title">
            <div>
              <h2>En Çok Beğenilen Projeler</h2>
              <p>Topluluk tarafından en fazla desteklenen fikirler.</p>
            </div>
          </div>
          <div class="apple-idea-list">
            ${[...countryIdeas].sort((a, b) => (b.likes || b.supporters || 0) - (a.likes || a.supporters || 0)).slice(0, 3).map(idea => simpleIdeaRow(idea)).join("")}
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

      ${renderSubsidiaryBranchingPanel()}
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
  const limit = state.visibleIdeasCount || 12;
  const sliced = ideas.slice(0, limit);
  const hasMore = ideas.length > limit;
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
          ${filterSelect("country", [])}
          ${filterSelect("department", uniqueFromIdeas("department"))}
          ${filterSelect("status", ["Tümü", ...Object.values(statusMeta).map(meta => meta.label)])}
          ${filterSelect("type", ["Tümü", ...ideaTypes])}
          <button class="btn ghost" data-action="reset-filters">${icon("rotate-ccw")} Temizle</button>
        </div>
      </section>

      ${ideas.length ? `
        ${state.ideaView === "cards" ? `
          <section class="idea-list grid">
            ${sliced.map(idea => renderIdeaCard(idea)).join("")}
          </section>
        ` : renderIdeaTable(sliced)}
        ${hasMore ? `
          <div style="display: flex; justify-content: center; margin-top: 30px; margin-bottom: 20px; width: 100%;">
            <button class="btn secondary" data-action="load-more-ideas" style="padding: 10px 24px; font-weight: 600; border-radius: 10px; cursor: pointer; border: 1px solid var(--line-soft); background: var(--surface); color: var(--accent);">
              Daha Fazla Fikir Yükle (${ideas.length - limit} Kaldı)
            </button>
          </div>
        ` : ""}
      ` : renderEmpty("search-x", "Bu filtrelere uygun fikir bulunamadı.", "Aramayı genişlet veya farklı bir departman seç.")}
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

function renderStockTicker() {
  const list = state.ideas.filter(idea => idea.marketTicker);
  if (!list.length) return "";
  
  // Duplicate list to make scrolling infinite and smooth
  const items = [...list, ...list, ...list];
  
  return `
    <div class="ticker-wrap">
      <div class="ticker">
        <div class="ticker__move">
          ${items.map(idea => {
            const price = marketPrice(idea);
            const change = Number(idea.marketChange || 0);
            const isUp = change >= 0;
            return `
              <span class="ticker__item">
                <span style="color: var(--muted); margin-right: 4px;">$</span>
                <strong>${esc(idea.marketTicker)}</strong>
                <span style="margin-left: 6px; font-weight: 500;">${price} SA</span>
                <span class="ticker-change ${isUp ? "up" : "down"}">
                  ${isUp ? "▲" : "▼"} ${Math.abs(change).toFixed(1)}%
                </span>
              </span>
            `;
          }).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderQuickFlow() {
  if (state.ideaView === "table") {
    return renderTradingExchange();
  }

  const ideas = filteredBorsaIdeas();
  const limit = state.visibleBorsaIdeasCount || 12;
  const sliced = ideas.slice(0, limit);
  const hasMore = ideas.length > limit;
  const portfolioValue = marketPortfolioValue();

  return `
    <div class="view-stack borsa-page">
      <section class="apple-hero" style="padding: 24px; border-radius: 20px; background: var(--surface); border: 1px solid var(--line-soft); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
        <div>
          <span class="panel-kicker">NEW IDEA EXCHANGE</span>
          <h2>Fikir Borsası</h2>
          <p>Proje, fikir ve araştırmalar burada listelenir. Al, sat ve raporları incele.</p>
          
          <!-- Prominent Global Search Motor -->
          <div class="hero-global-search-container" style="margin-top: 14px; width: 100%; max-width: 460px;">
            <label class="search-box" style="background: var(--bg-soft); border: 1px solid var(--line-soft); border-radius: 99px; display: flex; align-items: center; padding: 8px 16px; width: 100%;">
              ${icon("search", "style='color: var(--muted); margin-right: 8px;'")}
              <input class="input" placeholder="Platform genelinde ara (Proje, Ürün, Ekip, Gündem, Tahmin...)" data-global-search style="background: transparent; border: none; color: var(--ink); outline: none; width: 100%; font-size: 13.5px;" value="${esc(state.globalSearchQuery || '')}" />
            </label>
          </div>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <div class="market-wallet" style="text-align: right;">
            <span>Bütçe</span>
            <strong style="display: block; font-size: 22px; color: var(--ink);">${formatCurrencyHTML(state.marketBudget, "large")}</strong>
            <small style="color: var(--muted);">Portföy ${formatCurrencyHTML(portfolioValue, "small")}</small>
          </div>
          <button class="btn primary" data-action="open-market-composer" data-context="quickFlow">${icon("plus")} Proje Ekle</button>
        </div>
      </section>

      ${renderStockTicker()}

      <!-- AI & Yatırım Politikası Bilgi Bandı -->
      <section class="info-banner" style="background: rgba(59, 130, 246, 0.08); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 16px; padding: 16px; margin: 16px 0 8px 0; display: flex; flex-direction: column; gap: 8px; font-size: 13.5px; line-height: 1.5;">
        <div style="display: flex; align-items: center; gap: 8px; font-weight: 600; color: var(--primary);">
          ${icon("info")} Kurumsal İnovasyon Yatırım ve Teşvik Politikası
        </div>
        <ul style="margin: 0; padding-left: 20px; color: var(--ink-soft); display: flex; flex-direction: column; gap: 4px;">
          <li><strong>Yapay Zeka Barajı:</strong> AI değerlendirme skoru <strong>70'in altında</strong> kalan projeler doğrudan reddedilir.</li>
          <li><strong>Tüzük Uyumluluğu:</strong> Yapay zeka analizi sonucunda tüzüğe veya kurum politikalarına aykırı bulunan fikirler sistem tarafından otomatik olarak elenir.</li>
          <li><strong>Hayata Geçirilme Ödülü (10 Kat Kredi):</strong> Desteklediğiniz proje başarıyla hayata geçirildiğinde (Done / pivotlaşma sonrası destek), projeye yaptığınız yatırım miktarının <strong>10 katı</strong> kadar kredi hesabınıza ödül olarak anında tanımlanır.</li>
          <li><strong>Girişimci-Yatırımcı Paylaşımı:</strong> Bir fikir/proje hayata geçirildiğinde, girişimciye verilen ödülün %10’u yatırımcıları arasında paylaştırılacaktır.</li>
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
            ${filterSelect("country", [])}
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
              ${optionList(["En yeni", "En Pahalılar", "En Yüksek AI Skoru", "En Çok Beğenilenler", "En çok etkileşim alan", "En çok yorumlanan"], state.marketSort)}
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
        ${sliced.map(idea => renderBorsaCard(idea)).join("") || `<div class="trading-empty">Bu filtrelere uygun proje bulunamadı.</div>`}
      </section>
      
      ${hasMore ? `
        <div style="display: flex; justify-content: center; margin-top: 30px; margin-bottom: 20px; width: 100%;">
          <button class="btn secondary" data-action="load-more-borsa" style="padding: 10px 24px; font-weight: 600; border-radius: 10px; cursor: pointer; border: 1px solid var(--line-soft); background: var(--surface); color: var(--accent);">
            Daha Fazla Proje Yükle (${ideas.length - limit} Kaldı)
          </button>
        </div>
      ` : ""}
      
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
        <span class="market-price">${formatCurrencyHTML(marketPrice(idea))}</span>
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
      <span class="market-price">${formatCurrencyHTML(marketPrice(idea))}</span>
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
          <span><small>Son</small><strong>${formatCurrencyHTML(quote.last, "large")}</strong></span>
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
          <strong>${formatCurrencyHTML(wallet.total, "large")}</strong>
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
          <span class="bid" style="--w:${Math.min(100, row.bidVol / baseVolume * 100)}%">${formatCurrencyHTML(row.bid)}</span>
          <small>${row.bidVol.toLocaleString("tr-TR")}</small>
          <small>${row.askVol.toLocaleString("tr-TR")}</small>
          <span class="ask" style="--w:${Math.min(100, row.askVol / baseVolume * 100)}%">${formatCurrencyHTML(row.ask)}</span>
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
        <em>${formatCurrencyHTML(wallet.total)}</em>
      </div>
      <div class="level-wallet-grid">
        ${levelWallets.map(level => `
          <article>
            <small>${esc(level.scope)}</small>
            <strong>${esc(level.label)}</strong>
            <span>${formatCurrencyHTML(level.balance)}</span>
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
              <strong class="market-board-last">${formatCurrencyHTML(quote.last, "large")}</strong>
              <span class="market-board-spread">
                <em>${formatCurrencyHTML(quote.bid)}</em>
                <em>${formatCurrencyHTML(quote.ask)}</em>
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
          <article><small>Yatırımlarım</small><strong>${formatCurrencyHTML(wallet.portfolio)}</strong><span>${holdings.length || 0} aktif destek</span></article>
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
        <small>${quantity} lot · maliyet ${formatCurrencyHTML(quantity * marketPrice(idea))}</small>
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

      ${renderStockTicker()}
      ${renderMarketTickerTape(rows, wallet, stats)}

      <!-- AI & Yatırım Politikası Bilgi Bandı -->
      <section class="info-banner" style="background: rgba(59, 130, 246, 0.06); border: 1px solid var(--line-soft); border-radius: 12px; padding: 12px 16px; margin: 10px 0; display: flex; flex-direction: column; gap: 6px; font-size: 12px; line-height: 1.4;">
        <div style="display: flex; align-items: center; gap: 6px; font-weight: 600; color: var(--primary);">
          ${icon("info")} Kurumsal İnovasyon Yatırım ve Teşvik Politikası:
        </div>
        <div style="color: var(--ink-soft); display: flex; flex-direction: column; gap: 2px; padding-left: 4px;">
          <span>• AI Değerlendirme skoru <strong>70'in altında</strong> olan veya tüzüğe aykırı görülen projeler doğrudan REDDEDİLİR.</span>
          <span>• Proje hayata geçirildiğinde (pivotlaştığında), yatırım sahiplerine yaptıkları yatırımın <strong>10 katı</strong> oylama kredisi (ödül) aktarılır.</span>
          <span>• Fikir hayata geçirildiğinde, girişimciye verilen ödülün %10'u yatırımcıları arasında paylaştırılır.</span>
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
            <strong>${formatCurrencyHTML(wallet.total, "large")}</strong>
            <small class="${marketDeltaClass(wallet.weightedChange)}">${wallet.weightedChange >= 0 ? "+" : ""}${formatCurrency(Math.abs(wallet.weightedChange))} bugün · Nakit ${formatCurrencyHTML(state.marketBudget, "large")}</small>
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
              <em>${formatCurrencyHTML(wallet.portfolio)}</em>
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
              <strong>${formatCurrencyHTML(marketPrice(selected), "large")}</strong>
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
            <strong>${formatCurrencyHTML(wallet.total, "large")}</strong>
            <small>${selectedOwned} ${esc(selected.marketTicker)} lot · Nakit ${formatCurrencyHTML(state.marketBudget, "large")}</small>
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
                <strong>${formatCurrencyHTML(level.balance)}</strong>
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
          <article><span>Toplam</span><strong>${formatCurrencyHTML(wallet.total, "large")}</strong></article>
          <article><span>Portföy</span><strong>${formatCurrencyHTML(wallet.portfolio)}</strong></article>
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
          ${levelWallets.map(level => `<article><span>${esc(level.scope)}</span><strong>${formatCurrencyHTML(level.balance)}</strong><em>${esc(level.label)}</em></article>`).join("")}
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
  if (key === "country") {
    const options = [
      { value: "Aktif Portal", label: "Portal: Aktif" },
      { value: "Tüm Ülkeler", label: "Tüm Ülkeler (Global)" },
      ...countriesList.map(c => ({ value: c.code, label: `${c.flag} ${c.name}` }))
    ];
    return `
      <select class="select" data-idea-filter="country" aria-label="Ülke Filtresi" style="width: auto; min-width: 160px;">
        ${options.map(opt => `<option value="${esc(opt.value)}" ${opt.value === state.filters.country ? "selected" : ""}>${esc(opt.label)}</option>`).join("")}
      </select>
    `;
  }
  return `
    <select class="select" data-idea-filter="${esc(key)}" aria-label="${esc(key)}" style="width: auto; min-width: 160px;">
      ${optionList(values, state.filters[key])}
    </select>
  `;
}

function filteredIdeas() {
  let ideas = [...state.ideas];
  if (state.filters.country === "Aktif Portal") {
    ideas = ideas.filter(idea => idea.country === state.activeCountry);
  } else if (state.filters.country !== "Tüm Ülkeler") {
    ideas = ideas.filter(idea => idea.country === state.filters.country);
  }
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
          ${renderTranslationButton(idea)}
        </div>
        <div class="apple-chip-row">
          <span>${esc(idea.type)}</span>
          <span>${idea.supporters} destek</span>
          <span>AI ${idea.aiScore}</span>
        </div>
        <div class="idea-footer">
          <button class="btn ghost" data-action="open-idea" data-id="${esc(idea.id)}">${icon("arrow-up-right")} Aç</button>
          ${(() => {
            const u = currentUser();
            const hasSupported = u.supportedIdeas && u.supportedIdeas.includes(idea.id);
            return `<button class="btn ${hasSupported ? 'success' : 'primary'}" data-action="support-idea" data-id="${esc(idea.id)}" style="${hasSupported ? 'background: #2ecc71; border-color: #2ecc71; color: white;' : ''}">${icon(hasSupported ? "heart-off" : "heart")} ${hasSupported ? 'Desteklendi' : 'Destekle'}</button>`;
          })()}
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
                <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Hedef Ülke Portalı</span>
                <select class="select" id="wizard-country" style="padding: 10px; font-size: 14px;">
                  ${countriesList.map(c => `<option value="${c.code}" ${w.country === c.code || (!w.country && c.code === state.activeCountry) ? 'selected' : ''}>${c.flag} ${c.name}</option>`).join("")}
                </select>
              </label>

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
          <div style="display: flex; gap: 8px; align-items: center;">
            <span style="font-size: 12px; background: rgba(16, 185, 129, 0.1); color: var(--emerald); padding: 4px 8px; border-radius: 20px; font-weight: 600; display: inline-flex; align-items: center; gap: 4px;">
              ${icon("percent", "12")} Açık Hisse Oranı: %${idea.openEquity || 0}
            </span>
            <span style="font-size: 12.5px; color: var(--muted);">${esc(idea.createdAt)}</span>
          </div>
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
            <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Deneyimleriniz & Teknik Yetkinlikleriniz</span>
            <textarea class="textarea" id="app-experience" rows="3" placeholder="Daha önce çalıştığınız benzer projeleri veya teknik becerilerinizi (yazılım dilleri, araçlar vb.) kısaca yazın..." style="padding: 10px; font-size: 14px;"></textarea>
          </label>

          <label class="field full" style="grid-column: 1 / -1; display: flex; flex-direction: column; gap: 6px;">
            <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Projeye Nasıl Katkı Sağlayacaksınız?</span>
            <textarea class="textarea" id="app-contribution" rows="3" placeholder="Hangi teknik yetkinlikler veya iş deneyimiyle projeyi ileri taşıyacaksınız?" style="padding: 10px; font-size: 14px;"></textarea>
          </label>

          <label class="field" style="display: flex; flex-direction: column; gap: 6px;">
            <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Talep Edilen Ortaklık Hissesi (%)</span>
            <input type="number" class="input" id="app-requested-equity" min="1" max="${idea.openEquity || 100}" value="5" style="padding: 10px; font-size: 14px;" />
            <small style="color: var(--muted); font-size: 11px;">Maksimum %${idea.openEquity || 0} talep edebilirsiniz.</small>
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
          ${renderTranslationButton(idea)}
        </div>
        <div class="field-row" style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="btn ghost" data-page="ideas">${icon("arrow-left")} Fikirlere dön</button>
          ${(() => {
            const u = currentUser();
            const hasSupported = u.supportedIdeas && u.supportedIdeas.includes(idea.id);
            return `<button class="btn ${hasSupported ? 'success' : 'soft'}" data-action="support-idea" data-id="${esc(idea.id)}" style="${hasSupported ? 'background: #2ecc71; border-color: #2ecc71; color: white;' : ''}">${icon(hasSupported ? "heart-off" : "heart")} ${hasSupported ? 'Bu fikri destekledin' : 'Bu fikri destekle'}</button>`;
          })()}
          <button class="btn soft" data-action="toggle-pin-idea" data-id="${esc(idea.id)}" style="color: ${state.pinnedIdeaIds && state.pinnedIdeaIds.includes(idea.id) ? 'var(--primary)' : 'var(--muted)'};">
            ${icon(state.pinnedIdeaIds && state.pinnedIdeaIds.includes(idea.id) ? "pin-off" : "pin")} ${state.pinnedIdeaIds && state.pinnedIdeaIds.includes(idea.id) ? "Sabitlemeyi Kaldır" : "Sabitle"}
          </button>
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
                        <div style="margin-top: 6px;"><strong>Deneyim & Yetkinlikler:</strong> ${esc(app.experience || "Belirtilmemiş")}</div>
                        <div style="margin-top: 6px;"><strong>Katkı Sunabileceği Alanlar:</strong> ${esc(app.contribution)}</div>
                        <div style="margin-top: 6px; display: flex; gap: 16px; font-size: 11.5px; color: var(--muted); flex-wrap: wrap;">
                          <span>${icon("clock", "12")} ${esc(app.timeCommitment)} / Hafta</span>
                          <span>${icon("wallet", "12")} ${esc(app.budgetRequest)}</span>
                          <span>${icon("percent", "12")} Talep Edilen Hisse: %${esc(app.requestedEquity || "0")}</span>
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
      
      ${item.imageUrl ? `
        <div class="announcement-image-container" style="width: 100%; border-radius: 12px; overflow: hidden; margin-bottom: 12px; max-height: 320px; border: 1px solid var(--line-soft);">
          <img src="${esc(item.imageUrl)}" alt="${esc(item.title)}" style="width: 100%; height: 100%; object-fit: cover; display: block;" loading="lazy" />
        </div>
      ` : ""}
      
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
  const categories = ["Tümü", "Strateji", "Operasyon", "AI Host", "Ürün", "Etkinlik", "Risk", "Diğer"];
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
        ${userCanEdit ? `<button class="btn primary slim-btn" data-action="ai-auto-post-agenda" style="background: linear-gradient(135deg, #a855f7, #6366f1); border: none; color: #fff; display: flex; align-items: center; gap: 6px; font-weight: 600; margin-left: auto;">${icon("bot")} AI Gündem Paylaş</button>` : ""}
      </section>
      ${userCanEdit ? renderAgendaComposer() : ""}
      <section class="agenda-list">
        ${list.map(item => `
          <article class="agenda-card">
            <div class="agenda-card-date"><strong>${esc(item.date.slice(8, 10) || item.date)}</strong><span>${esc(item.date.slice(5, 7) || "")}</span></div>
            <div>
              <span class="panel-kicker" style="display: inline-flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                ${esc(item.category)} · ${esc(item.author)}
                ${item.isAiGenerated ? `<span class="badge ai-badge" style="background: rgba(147, 51, 234, 0.1); color: #a855f7; padding: 2px 6px; border-radius: 6px; font-size: 10px; font-weight: 600; border: 1px solid rgba(147, 51, 234, 0.2); display: inline-flex; align-items: center; gap: 4px; vertical-align: middle; line-height: 1.2;">${icon("bot", "style='width:12px;height:12px;'")} AI Generated</span>` : ""}
              </span>
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
        <label class="field"><span>Kategori</span><select class="select" data-agenda-draft="category">${optionList(["Strateji", "Operasyon", "AI Host", "Ürün", "Etkinlik", "Risk", "Diğer"], d.category)}</select></label>
        <label class="field"><span>Tarih</span><input class="input" type="date" data-agenda-draft="date" value="${esc(d.date)}" /></label>
        <label class="field"><span>Etiketler</span><input class="input" data-agenda-draft="tags" value="${esc(d.tags)}" placeholder="virgülle ayır" /></label>
        <label class="field full"><span>Açıklama</span><textarea class="textarea" rows="3" data-agenda-draft="body">${esc(d.body)}</textarea></label>
      </div>
      <div class="field-row" style="display: flex; gap: 8px;">
        <button class="btn primary" data-action="submit-agenda-item">${icon("send")} ${state.agendaEditId ? "Güncelle" : "Yayınla"}</button>
        <button class="btn ghost" data-action="generate-agenda-ai" style="display: inline-flex; align-items: center; gap: 6px;">${icon("bot")} AI Gündem Öner</button>
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
  state.studioTab = state.studioTab || "products";
  const tab = state.studioTab;
  const studiosCount = state.studios.length;
  const productsCount = state.ideas.length;
  const teamsCount = state.teams.length;

  return `
    <div class="view-stack studio-hub-page">
      <section class="studio-hero" style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
        <div class="studio-hero-left" style="flex: 1; min-width: 280px;">
          <span class="panel-kicker" style="color: var(--primary); font-weight: 700;">Stüdyolar</span>
          <h2 style="font-size: 24px; font-weight: 700; color: var(--ink); margin: 6px 0 8px 0; font-family: 'Space Grotesk', sans-serif;">Fikirlerin Girişime ve Ürüne Dönüştüğü Merkez</h2>
          <p style="color: var(--ink-soft); font-size: 13.5px; margin: 0; line-height: 1.5;">İştiraklerimizin iş modellerini olgunlaştırdığı, nitelikli sinerji takımları kurduğu ve yenilikçi çözümleri ölçeklediği kurumsal girişimcilik ekosistemi.</p>
        </div>
        <div class="studio-hero-right" style="display: flex; gap: 16px; align-items: center;">
          <div class="studio-stat" style="text-align: center; background: var(--bg-soft); padding: 12px 18px; border-radius: 12px; min-width: 90px;">
            <strong style="display: block; font-size: 20px; color: var(--ink);">${productsCount}</strong>
            <span style="font-size: 11px; color: var(--muted);">Aktif Ürün</span>
          </div>
          <div class="studio-stat" style="text-align: center; background: var(--bg-soft); padding: 12px 18px; border-radius: 12px; min-width: 90px;">
            <strong style="display: block; font-size: 20px; color: var(--ink);">${studiosCount}</strong>
            <span style="font-size: 11px; color: var(--muted);">Stüdyo</span>
          </div>
          <div class="studio-stat" style="text-align: center; background: var(--bg-soft); padding: 12px 18px; border-radius: 12px; min-width: 90px;">
            <strong style="display: block; font-size: 20px; color: var(--ink);">${teamsCount}</strong>
            <span style="font-size: 11px; color: var(--muted);">Ekip</span>
          </div>
        </div>
      </section>

      <div class="segmented studio-main-switcher" style="width: 100%; margin: 16px 0; display: flex; background: var(--bg-soft); border-radius: 12px; padding: 4px; border: 1px solid var(--line-soft);">
        <button class="btn ${tab === 'products' ? 'active' : ''}" data-action="set-studio-main-tab" data-tab="products" style="font-size: 13.5px; font-weight: 600; flex: 1; border: none; padding: 10px; border-radius: 8px; cursor: pointer; transition: all 0.2s; background: ${tab === 'products' ? 'var(--surface)' : 'transparent'}; color: ${tab === 'products' ? 'var(--ink)' : 'var(--muted)'}; box-shadow: ${tab === 'products' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'};">
          ${icon("package-check")} Ürünler
        </button>
        <button class="btn ${tab === 'studios' ? 'active' : ''}" data-action="set-studio-main-tab" data-tab="studios" style="font-size: 13.5px; font-weight: 600; flex: 1; border: none; padding: 10px; border-radius: 8px; cursor: pointer; transition: all 0.2s; background: ${tab === 'studios' ? 'var(--surface)' : 'transparent'}; color: ${tab === 'studios' ? 'var(--ink)' : 'var(--muted)'}; box-shadow: ${tab === 'studios' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'};">
          ${icon("layers")} Stüdyolar
        </button>
        <button class="btn ${tab === 'teams' ? 'active' : ''}" data-action="set-studio-main-tab" data-tab="teams" style="font-size: 13.5px; font-weight: 600; flex: 1; border: none; padding: 10px; border-radius: 8px; cursor: pointer; transition: all 0.2s; background: ${tab === 'teams' ? 'var(--surface)' : 'transparent'}; color: ${tab === 'teams' ? 'var(--ink)' : 'var(--muted)'}; box-shadow: ${tab === 'teams' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'};">
          ${icon("users-round")} Ekipler
        </button>
      </div>

      <div class="studio-tab-content">
        ${tab === "products" ? renderUnifiedProductsTab() : tab === "studios" ? renderUnifiedStudiosTab() : renderUnifiedTeamsTab()}
      </div>
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
  const linkedIdeas = studio.linkedIdeas
    .map(ideaId => state.ideas.find(i => i.id === ideaId))
    .filter(idea => idea && idea.country === state.activeCountry);

  const linkedTeams = studio.linkedTeams
    .map(teamId => state.teams.find(t => t.id === teamId))
    .filter(team => {
      if (!team) return false;
      const linkedIdea = state.ideas.find(i => i.id === team.ideaId);
      return linkedIdea && linkedIdea.country === state.activeCountry;
    });

  return `
    <article class="studio-card-v2" style="display:flex; flex-direction:column; justify-content:space-between; height: 100%;">
      <div>
        <div class="studio-card-top">
          <span class="challenge-prize-icon">${icon("layers")}</span>
          <span class="status-badge ${studio.status === "Aktif" ? "new" : "review"}">${esc(studio.status)}</span>
        </div>
        <h3 style="margin-top: 10px;">${esc(studio.name)}</h3>
        <p style="font-size:12.5px; color:var(--ink-soft); line-height:1.5; margin:6px 0 12px 0;">${esc(studio.description)}</p>
        <div class="challenge-chip-row" style="margin-bottom:12px;">
          <span>${esc(studio.category)}</span>
          <span>${linkedIdeas.length} Fikir</span>
          <span>${linkedTeams.length} Ekip</span>
        </div>
        
        <!-- Entegre Ürün Listesi ve Yönetimi -->
        <div class="studio-linked-products" style="margin-top: 12px; border-top: 1px dashed var(--line-soft); padding-top: 8px; margin-bottom: 12px;">
          <span class="panel-kicker" style="font-size: 10px; margin-bottom: 6px; color: var(--primary); font-weight:700; display:block;">Bağlı Ürünler & Durum</span>
          ${linkedIdeas.map(idea => {
            const stage = productStage(idea);
            const progress = productProgress(idea);
            return `
              <div style="display: flex; justify-content: space-between; align-items: center; font-size: 12px; margin-bottom: 6px; padding: 6px 8px; background: var(--bg-soft); border-radius: 8px; border: 1px solid var(--line-soft);">
                <div style="min-width:0; flex:1; margin-right:8px;">
                  <strong style="color: var(--ink); display:block; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size: 12.5px;" title="${esc(idea.title)}">${esc(idea.title)}</strong>
                  <span style="font-size:10px; color:var(--muted);">${progress}% tamamlandı</span>
                </div>
                <div style="display: flex; gap: 4px; align-items: center;">
                  <span class="product-stage-badge" style="--stage-color:${productStageColor(stage)}; font-size: 9px; padding: 2px 5px; border-radius: 4px;">${esc(stage)}</span>
                  <button class="btn ghost slim-btn" style="padding: 2px 4px; font-size: 10px;" data-action="open-idea" data-id="${esc(idea.id)}" title="Ürün Detayları">${icon("external-link", "style='width:11px;height:11px;'")}</button>
                </div>
              </div>
            `;
          }).join("") || `<span style="font-size: 11px; color: var(--muted); display:block; text-align:center; padding: 6px;">Bağlı ürün bulunamadı.</span>`}
        </div>
      </div>
      
      <div class="challenge-footer" style="margin-top: auto; border-top: 1px solid var(--line-soft); padding-top: 12px; display:flex; justify-content:space-between; align-items:center;">
        <small>${esc(studio.createdAt)}</small>
        <button class="btn ghost slim-btn" data-action="set-studio-main-tab" data-tab="teams" style="font-weight:600;">${icon("arrow-right")} Ekipler</button>
      </div>
    </article>
  `;
}

function renderUnifiedProductsTab() {
  const ideas = filteredAdvancedProducts();
  const userCanManage = currentUser().isManager || currentUser().isAdmin;
  return `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <section class="challenge-filterbar" style="margin-bottom: 0;">
        <label class="search-box">${icon("search")}<input class="input" data-product-filter="search" value="${esc(state.filters.productSearch || "")}" placeholder="Ürün ara..." /></label>
        <select class="select" data-product-filter="stage">${["Tümü", "Geliştiriliyor", "Kuruluyor", "Fikir Aşaması"].map(v => `<option value="${esc(v)}" ${state.filters.productStage === v ? "selected" : ""}>Seviye: ${esc(v)}</option>`).join("")}</select>
        <select class="select" data-product-filter="category">${["Tümü", ...Array.from(new Set(state.ideas.map(i => i.marketCategory || "Fikir")))].map(v => `<option value="${esc(v)}" ${state.filters.productCategory === v ? "selected" : ""}>Kategori: ${esc(v)}</option>`).join("")}</select>
      </section>
      <section class="enhanced-product-list">
        ${ideas.map(idea => renderEnhancedProductRow(idea, userCanManage)).join("") || `
          <div style="background: var(--surface); padding: 40px; text-align: center; color: var(--muted); border-radius: 12px; border: 1px solid var(--line-soft);">
            ${icon("package-open", "36")}
            <p style="margin-top: 10px; font-size: 14px;">Eşleşen ürün bulunamadı.</p>
          </div>
        `}
      </section>
    </div>
  `;
}

function renderUnifiedStudiosTab() {
  const studios = filteredStudios();
  return `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <section class="challenge-filterbar" style="margin-bottom: 0;">
        <label class="search-box">${icon("search")}<input class="input" data-studio-filter="search" value="${esc(state.filters.studioSearch || "")}" placeholder="Stüdyo ara..." /></label>
        <select class="select" data-studio-filter="category">${["Tümü", ...Array.from(new Set(state.studios.map(s => s.category)))].map(v => `<option value="${esc(v)}" ${state.filters.studioCategory === v ? "selected" : ""}>Kategori: ${esc(v)}</option>`).join("")}</select>
        <select class="select" data-studio-filter="status">${["Tümü", "Aktif", "Kuruluyor"].map(v => `<option value="${esc(v)}" ${state.filters.studioStatus === v ? "selected" : ""}>Durum: ${esc(v)}</option>`).join("")}</select>
        <select class="select" data-studio-filter="sort">${["Popülerlik", "Tarih", "Ad"].map(v => `<option value="${esc(v)}" ${state.filters.studioSort === v ? "selected" : ""}>Sırala: ${esc(v)}</option>`).join("")}</select>
      </section>
      <section class="studio-card-grid">
        ${studios.map(renderStudioCard).join("") || `
          <div style="background: var(--surface); padding: 40px; text-align: center; color: var(--muted); border-radius: 12px; border: 1px solid var(--line-soft);">
            ${icon("layers", "36")}
            <p style="margin-top: 10px; font-size: 14px;">Eşleşen stüdyo bulunamadı.</p>
          </div>
        `}
      </section>
    </div>
  `;
}

function renderUnifiedTeamsTab() {
  if (state.teamsView === "detail") return renderTeamDetail();
  if (state.teamsView === "create") return renderCreateTeam();
  const list = filteredTeams();
  return `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <h3 style="font-size: 15px; font-weight: 700; color: var(--ink); margin: 0;">Ekipler</h3>
        <button class="btn primary slim-btn" data-action="start-create-team">${icon("plus")} Yeni Ekip Kur</button>
      </div>
      <section class="challenge-filterbar" style="margin-bottom: 0;">
        <label class="search-box">${icon("search")}<input class="input" data-team-filter="search" value="${esc(state.filters.teamSearch || "")}" placeholder="Ekip ara..." /></label>
        <select class="select" data-team-filter="area">${["Tümü", ...Array.from(new Set(state.teams.map(t => t.area)))].map(v => `<option value="${esc(v)}" ${state.filters.teamArea === v ? "selected" : ""}>Alan: ${esc(v)}</option>`).join("")}</select>
        <select class="select" data-team-filter="status">${["Tümü", "active", "forming", "disbanded"].map(v => `<option value="${esc(v)}" ${state.filters.teamStatus === v ? "selected" : ""}>Durum: ${esc(teamStatusLabel(v))}</option>`).join("")}</select>
      </section>
      <section class="teams-grid">
        ${list.map(team => renderTeamCard(team, isMyTeam(team))).join("") || `
          <div style="background: var(--surface); padding: 40px; text-align: center; color: var(--muted); border-radius: 12px; border: 1px solid var(--line-soft); grid-column: span 3;">
            ${icon("users-round", "36")}
            <p style="margin-top: 10px; font-size: 14px;">Eşleşen ekip bulunamadı.</p>
          </div>
        `}
      </section>
    </div>
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
    const linkedIdea = state.ideas.find(i => i.id === team.ideaId);
    if (linkedIdea && linkedIdea.country !== state.activeCountry) return false;
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
        <div class="products-hero-text"><span class="panel-kicker">Ürünler</span><h2>Ürünleşen fikirler.</h2><p>Durum, oy sayısı, kategori ve geliştirme seviyesi ayrı listelenir.</p></div>
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
    if (idea.country !== state.activeCountry) return false;
    const stage = productStage(idea);
    const text = [idea.title, idea.summary, idea.marketCategory, idea.area, stage].join(" ").toLocaleLowerCase("tr-TR");
    return (!q || text.includes(q))
      && (state.filters.productStage === "Tümü" || stage === state.filters.productStage)
      && (state.filters.productCategory === "Tümü" || (idea.marketCategory || "Fikir") === state.filters.productCategory);
  }).slice(0, 18);
}

function renderEducationPage() {
  const user = currentUser();
  const isManager = user.isManager || user.isAdmin;
  state.educationActiveTab = state.educationActiveTab || "programs";
  
  const trainings = state.educationItems || [];
  const mentorsList = state.mentors || [];

  return `
    <div class="view-stack education-page" style="max-width: 1000px; margin: 0 auto; display: flex; flex-direction: column; gap: 24px;">
      <section class="apple-page-head" style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px;">
        <div>
          <span class="panel-kicker">Gelişim & Sinerji</span>
          <h2>Eğitim & Mentörlük Akademisi</h2>
          <p>Girişimcilik eğitimleri, uzman webinarları ve kurum içi mentörlük eşleştirme platformu.</p>
        </div>
        ${(isManager && state.educationActiveTab === "programs") ? `
          <button class="btn primary" data-action="toggle-education-composer" style="display: flex; align-items: center; gap: 6px; font-weight: 600;">
            ${icon("plus")} Yeni Program Ekle
          </button>
        ` : ""}
      </section>

      <div class="segmented" style="width: 100%; max-width: 400px; margin-bottom: 8px;">
        <button class="btn ${state.educationActiveTab === 'programs' ? 'active' : ''}" data-action="set-education-tab" data-tab="programs" style="font-size: 13.5px; font-weight: 600; flex: 1;">
          ${icon("graduation-cap")} Eğitimler & Programlar
        </button>
        <button class="btn ${state.educationActiveTab === 'mentors' ? 'active' : ''}" data-action="set-education-tab" data-tab="mentors" style="font-size: 13.5px; font-weight: 600; flex: 1;">
          ${icon("users-round")} Mentörlük Alanı
        </button>
      </div>

      ${(isManager && state.educationComposerOpen && state.educationActiveTab === "programs") ? `
        <article class="manager-panel" style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 16px; box-shadow: var(--shadow-soft);">
          <div style="border-bottom: 1px solid var(--line-soft); padding-bottom: 10px;">
            <strong style="font-size: 15px; color: var(--ink);">Yeni Eğitim Programı Tanımla</strong>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
            <label class="field">
              <span>Program Başlığı</span>
              <input class="input" id="edu-composer-title" placeholder="Örn: Yalın Girişim Metodolojisi" />
            </label>
            <label class="field">
              <span>Kategori</span>
              <select class="select" id="edu-composer-category">
                <option value="Girişimcilik Eğitimi">Girişimcilik Eğitimi</option>
                <option value="Seminer">Seminer</option>
                <option value="Atölye">Atölye</option>
                <option value="Diğer">Diğer</option>
              </select>
            </label>
            <label class="field">
              <span>Tarih & Zaman</span>
              <input class="input" id="edu-composer-date" placeholder="Örn: 24 Haziran 2026, 14:00 veya Kayıttan İzle" />
            </label>
            <label class="field">
              <span>Düzenleyen Birim</span>
              <input class="input" id="edu-composer-organizer" placeholder="Örn: Moka İnovasyon Ekibi" />
            </label>
            <label class="field full" style="grid-column: 1 / -1;">
              <span>Katılım veya Yayın Linki (Zoom, YouTube vb.)</span>
              <input class="input" id="edu-composer-link" placeholder="https://zoom.us/j/... veya YouTube video linki" />
            </label>
            <label class="field full" style="grid-column: 1 / -1;">
              <span>Program Detayı / Açıklama</span>
              <textarea class="textarea" id="edu-composer-desc" rows="3" placeholder="Eğitimin içeriği, kimler katılmalı, neler öğrenilecek..."></textarea>
            </label>
          </div>
          <div style="display: flex; justify-content: flex-end; gap: 10px; border-top: 1px solid var(--line-soft); padding-top: 14px;">
            <button class="btn ghost" data-action="toggle-education-composer">Vazgeç</button>
            <button class="btn primary" data-action="submit-education-item" style="font-weight: 600;">Eğitimi Yayınla</button>
          </div>
        </article>
      ` : ""}

      ${state.educationActiveTab === "programs" ? `
        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${trainings.map(item => `
            <article style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 20px; display: grid; grid-template-columns: 1fr auto; gap: 20px; align-items: center; transition: box-shadow 0.2s;">
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span class="borsa-league-badge" style="font-size: 11px; font-weight: 600; text-transform: uppercase; background: rgba(var(--primary-rgb), 0.08); color: var(--primary); padding: 4px 8px; border-radius: 20px;">
                    ${esc(item.category)}
                  </span>
                  <span style="font-size: 12.5px; color: var(--muted); display: flex; align-items: center; gap: 4px;">
                    ${icon("calendar", "14")} ${esc(item.date)}
                  </span>
                </div>
                <h3 style="font-size: 16.5px; font-weight: 600; color: var(--ink); margin: 4px 0 0 0;">${esc(item.title)}</h3>
                <p style="font-size: 13.5px; color: var(--ink-soft); line-height: 1.5; margin: 0;">${esc(item.description)}</p>
                <span style="font-size: 12.5px; color: var(--muted); font-weight: 500; margin-top: 2px;">
                  <strong>Düzenleyen:</strong> ${esc(item.organizer)}
                </span>
              </div>
              <div>
                <a href="${esc(item.link)}" target="_blank" class="btn primary" style="text-decoration: none; display: inline-flex; align-items: center; gap: 6px; font-weight: 600; font-size: 13px; padding: 10px 18px; border-radius: 8px;">
                  ${item.link.includes("youtube.com") || item.link.includes("youtu.be") ? icon("play-circle") : icon("external-link")}
                  <span>${item.link.includes("youtube.com") || item.link.includes("youtu.be") ? "Kayıttan İzle" : "Katıl / İzle"}</span>
                </a>
              </div>
            </article>
          `).join("") || `
            <div style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 40px; text-align: center; color: var(--muted);">
              ${icon("graduation-cap", "32")}
              <p style="margin-top: 10px;">Henüz aktif eğitim programı bulunmuyor.</p>
            </div>
          `}
        </div>
      ` : `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 20px;">
          ${mentorsList.map(mentor => `
            <article style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 14px; position: relative; transition: transform 0.2s, box-shadow 0.2s;">
              <div style="display: flex; gap: 12px; align-items: center;">
                ${avatar(mentor.name, "large", mentor.avatar || "")}
                <div style="line-height: 1.3;">
                  <h3 style="font-size: 15px; font-weight: 700; color: var(--ink); margin: 0;">${esc(mentor.name)}</h3>
                  <span style="font-size: 12px; color: var(--muted); display: block;">${esc(mentor.title)}</span>
                </div>
              </div>
              
              <p style="font-size: 12.5px; color: var(--ink-soft); line-height: 1.5; margin: 0; flex: 1;">${esc(mentor.bio)}</p>
              
              <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                ${mentor.specialties.map(spec => `
                  <span style="font-size: 11px; background: rgba(var(--primary-rgb), 0.05); color: var(--primary); padding: 3px 8px; border-radius: 6px; font-weight: 500;">
                    ${esc(spec)}
                  </span>
                `).join("")}
              </div>
              
              <div style="border-top: 1px solid var(--line-soft); padding-top: 12px; display: flex; justify-content: space-between; align-items: center; margin-top: 4px;">
                <span style="font-size: 11px; color: var(--muted);">${esc(mentor.email)}</span>
                <button class="btn primary btn-sm" data-action="open-mentor-request-modal" data-mentor-id="${esc(mentor.id)}" style="font-size: 11.5px; font-weight: 600; padding: 6px 12px; border-radius: 6px;">
                  Danışma Talebi
                </button>
              </div>
            </article>
          `).join("")}
        </div>
      `}

      ${state.mentorApplyModalId ? renderMentorApplyModal() : ""}
    </div>
  `;
}

function renderMentorApplyModal() {
  const mentorId = state.mentorApplyModalId;
  const mentor = state.mentors.find(m => m.id === mentorId);
  const myIdeas = state.ideas.filter(idea => idea.authorId === state.currentUserId);
  
  return `
    <div class="dialog-overlay" style="position: fixed; inset: 0; background: rgba(0,0,0,0.45); display: flex; align-items: center; justify-content: center; z-index: 1000; backdrop-filter: blur(4px);">
      <article class="dialog-content" style="background: var(--surface); border-radius: 16px; max-width: 500px; width: 90%; padding: 24px; display: flex; flex-direction: column; gap: 18px; box-shadow: var(--shadow-strong); border: 1px solid var(--line-soft);">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--line-soft); padding-bottom: 12px;">
          <h3 style="margin: 0; font-size: 16.5px; font-weight: 700; color: var(--ink); display: flex; align-items: center; gap: 8px;">
            ${icon("users-round")} Mentör Görüşme Talebi
          </h3>
          <button class="btn ghost btn-sm" data-action="close-mentor-modal" style="padding: 4px;">${icon("x")}</button>
        </div>

        <div style="display: flex; gap: 10px; align-items: center; background: var(--bg-soft); padding: 10px; border-radius: 10px; border: 1px solid var(--line-soft);">
          ${avatar(mentor?.name || '', "medium", mentor?.avatar || "")}
          <div style="line-height: 1.3;">
            <strong style="font-size: 13.5px; color: var(--ink); display: block;">${esc(mentor?.name || '')}</strong>
            <small style="font-size: 11.5px; color: var(--muted);">${esc(mentor?.title || '')}</small>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 14px;">
          <label class="field" style="display: flex; flex-direction: column; gap: 4px;">
            <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Görüşmek İstediğiniz Proje</span>
            <select class="select" id="mentor-app-idea" style="padding: 8px; font-size: 13.5px; border-radius: 8px; width: 100%;">
              <option value="">Projesiz / Genel Fikir Danışma</option>
              ${myIdeas.map(idea => `<option value="${esc(idea.id)}">${esc(idea.title)}</option>`).join("")}
            </select>
          </label>

          <label class="field" style="display: flex; flex-direction: column; gap: 4px;">
            <span style="font-size: 13px; font-weight: 500; color: var(--ink);">Danışmak İstediğiniz Konu ve Mesajınız</span>
            <textarea class="textarea" id="mentor-app-message" rows="4" placeholder="Hangi konuda rehberliğe ihtiyaç duyduğunuzu ve mentöre iletmek istediğiniz detayları buraya yazın..." style="padding: 10px; font-size: 13.5px; border-radius: 8px; resize: none;"></textarea>
          </label>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 10px; border-top: 1px solid var(--line-soft); padding-top: 14px;">
          <button class="btn ghost" data-action="close-mentor-modal">İptal</button>
          <button class="btn primary" data-action="submit-mentor-application" data-mentor-id="${esc(mentorId)}" style="font-weight: 600; padding: 10px 20px;">
            Talep Gönder
          </button>
        </div>
      </article>
    </div>
  `;
}

function renderEventsPage() {
  const user = currentUser();
  const isManager = user.isManager || user.isAdmin;
  const events = state.events || [];

  return `
    <div class="view-stack events-page" style="max-width: 1000px; margin: 0 auto; display: flex; flex-direction: column; gap: 24px;">
      <section class="apple-page-head" style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px;">
        <div>
          <span class="panel-kicker">Etkinlik Takvimi</span>
          <h2>Kurumsal İnovasyon Etkinlikleri</h2>
          <p>Hackathonlar, Demo Günü sunumları, sinerji buluşmaları ve uzman paylaşım seminerleri.</p>
        </div>
        <button class="btn primary" data-action="toggle-event-composer" style="display: flex; align-items: center; gap: 6px; font-weight: 600;">
          ${icon("plus")} Etkinlik Öner / Ekle
        </button>
      </section>

      ${state.eventComposerOpen ? `
        <article class="manager-panel" style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 16px; box-shadow: var(--shadow-soft);">
          <div style="border-bottom: 1px solid var(--line-soft); padding-bottom: 10px;">
            <strong style="font-size: 15px; color: var(--ink);">Yeni Etkinlik Kaydı</strong>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
            <label class="field">
              <span>Etkinlik Başlığı</span>
              <input class="input" id="evt-title" placeholder="Örn: FinTech Hackathon 2026" />
            </label>
            <label class="field">
              <span>Kategori</span>
              <select class="select" id="evt-topic">
                <option value="Seminerler">Seminerler</option>
                <option value="Hackathon & Maraton">Hackathon & Maraton</option>
                <option value="Sunum & Demo Günü">Sunum & Demo Günü</option>
                <option value="Toplantı & Buluşmalar">Toplantı & Buluşmalar</option>
                <option value="Diğer">Diğer</option>
              </select>
            </label>
            <label class="field">
              <span>Tarih & Saat</span>
              <input class="input" id="evt-date" placeholder="Örn: 12 Temmuz 2026, 10:00" />
            </label>
            <label class="field">
              <span>Düzenleyen / Organizatör</span>
              <input class="input" id="evt-organizer" placeholder="Örn: İşBank Teknoloji" />
            </label>
            <label class="field full" style="grid-column: 1 / -1;">
              <span>Katılım veya Yayın Linki (Zoom, Teams, Kayıt formu vb.)</span>
              <input class="input" id="evt-link" placeholder="https://zoom.us/j/... veya web kayıt linki" />
            </label>
            <label class="field full" style="grid-column: 1 / -1;">
              <span>Etkinlik Detayları / Açıklama</span>
              <textarea class="textarea" id="evt-desc" rows="3" placeholder="Etkinliğin amacı, katılım koşulları, verilecek ödüller vb..."></textarea>
            </label>
          </div>
          <div style="display: flex; justify-content: flex-end; gap: 10px; border-top: 1px solid var(--line-soft); padding-top: 14px;">
            <button class="btn ghost" data-action="toggle-event-composer">Vazgeç</button>
            <button class="btn primary" data-action="submit-event-item" style="font-weight: 600;">Etkinliği Ekle</button>
          </div>
        </article>
      ` : ""}

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: 20px;">
        ${events.map(event => {
          let topicColor = 'var(--primary)';
          let topicBg = 'rgba(59, 130, 246, 0.08)';
          if (event.topic.includes("Hackathon") || event.topic.includes("Maraton")) {
            topicColor = 'var(--rose)';
            topicBg = 'rgba(244, 63, 94, 0.08)';
          } else if (event.topic.includes("Demo") || event.topic.includes("Sunum")) {
            topicColor = 'var(--amber)';
            topicBg = 'rgba(245, 158, 11, 0.08)';
          } else if (event.topic.includes("Buluşma") || event.topic.includes("Toplantı")) {
            topicColor = 'var(--emerald)';
            topicBg = 'rgba(16, 185, 129, 0.08)';
          }
          
          return `
            <article style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 12px; position: relative; transition: transform 0.2s, box-shadow 0.2s;">
              <div style="display: flex; justify-content: space-between; align-items: start; gap: 8px;">
                <span class="borsa-league-badge" style="font-size: 11px; font-weight: 600; text-transform: uppercase; background: ${topicBg}; color: ${topicColor}; padding: 4px 8px; border-radius: 20px;">
                  ${esc(event.topic)}
                </span>
                <span style="font-size: 11.5px; color: var(--muted); font-weight: 500;">
                  Org: ${esc(event.organizer)}
                </span>
              </div>
              
              <div style="flex: 1; min-height: 80px;">
                <h3 style="font-size: 15.5px; font-weight: 700; color: var(--ink); margin: 4px 0 6px 0; line-height: 1.3;">${esc(event.title)}</h3>
                <p style="font-size: 12.5px; color: var(--ink-soft); line-height: 1.5; margin: 0;">${esc(event.description)}</p>
              </div>

              <div style="display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--muted); border-top: 1px solid var(--line-soft); padding-top: 10px; margin-top: 4px;">
                ${icon("calendar", "14")}
                <span><strong>Zaman:</strong> ${esc(event.date)}</span>
              </div>
              
              <div style="margin-top: 4px;">
                <a href="${esc(event.link)}" target="_blank" class="btn primary btn-sm" style="text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 6px; font-weight: 600; font-size: 12.5px; padding: 8px; width: 100%; border-radius: 6px;">
                  ${icon("external-link", "14")}
                  <span>Katılım Linki</span>
                </a>
              </div>
            </article>
          `;
        }).join("") || `
          <div style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 40px; text-align: center; color: var(--muted); grid-column: 1 / -1;">
            ${icon("calendar", "32")}
            <p style="margin-top: 10px;">Henüz aktif etkinlik planlanmamış.</p>
          </div>
        `}
      </div>
    </div>
  `;
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
        <div class="team-linked-idea" style="display: flex; justify-content: space-between; align-items: center;">
          <span style="display: flex; align-items: center; gap: 4px;">
            ${icon("link-2")} Borsada: <strong>${esc(linkedIdea.marketTicker || linkedIdea.title.slice(0,20))}</strong>
          </span>
          <span style="font-size: 11px; background: rgba(16, 185, 129, 0.1); color: var(--emerald); padding: 2px 6px; border-radius: 4px; font-weight: 600;">
            Açık Hisse: %${linkedIdea.openEquity || 0}
          </span>
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
              <div class="team-panel-head" style="margin-bottom:8px; display: flex; justify-content: space-between; align-items: center;">
                <span style="display: flex; align-items: center; gap: 6px;">
                  ${icon("trending-up")} <strong>Borsa Bağlantısı</strong>
                </span>
                <span style="font-size: 11px; background: rgba(16, 185, 129, 0.1); color: var(--emerald); padding: 2px 6px; border-radius: 4px; font-weight: 600;">
                  Açık Hisse: %${linkedIdea.openEquity || 0}
                </span>
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
    if (item.country !== state.activeCountry) return false;
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
          <strong>${formatCurrencyHTML(state.marketBudget, "large")}</strong>
          <small>Portföy ${formatCurrencyHTML(portfolioValue, "small")}</small>
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
            <span><strong>${formatCurrencyHTML(focusIdea.marketPrice || marketPrice(focusIdea), "large")}</strong> hisse fiyatı</span>
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
        <span>Fiyat: ${formatCurrencyHTML(marketPrice(idea))}</span>
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
    sourceContext: context,
    country: draft.country || state.activeCountry || "TR"
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
  if (state.portalDropdownOpen && !event.target.closest(".portal-dropdown-container")) {
    state.portalDropdownOpen = false;
    render();
  }

  const triggerGlobalSearch = event.target.closest("[data-trigger-global-search]");
  if (triggerGlobalSearch) {
    state.globalSearchQuery = " ";
    render();
    setTimeout(() => {
      const topbarSearch = document.querySelector(".topbar [data-global-search]");
      if (topbarSearch) {
        topbarSearch.focus();
        topbarSearch.select();
      }
    }, 80);
    return;
  }

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

  if (action === "toggle-portal-dropdown") {
    state.portalDropdownOpen = !state.portalDropdownOpen;
    render();
    return;
  }

  if (action === "change-active-portal") {
    const code = actionButton.dataset.code;
    state.activeCountry = code;
    state.translatedIdeaIds = {};
    state.globalTranslateAll = false;
    state.portalDropdownOpen = false;
    state.visibleIdeasCount = 12;
    state.visibleBorsaIdeasCount = 12;
    render();
    return;
  }

  if (action === "toggle-global-translation") {
    state.globalTranslateAll = !state.globalTranslateAll;
    state.translatedIdeaIds = state.translatedIdeaIds || {};
    state.ideas.forEach(idea => {
      state.translatedIdeaIds[idea.id] = !!state.globalTranslateAll;
    });
    render();
    return;
  }

  if (action === "load-more-ideas") {
    state.visibleIdeasCount = (state.visibleIdeasCount || 12) + 12;
    render();
    return;
  }

  if (action === "load-more-borsa") {
    state.visibleBorsaIdeasCount = (state.visibleBorsaIdeasCount || 12) + 12;
    render();
    return;
  }

  if (action === "select-branch") {
    state.selectedBranchId = actionButton.dataset.id;
    render();
    return;
  }

  if (action === "toggle-idea-translation") {
    const id = actionButton.dataset.id;
    state.translatedIdeaIds = state.translatedIdeaIds || {};
    state.translatedIdeaIds[id] = !state.translatedIdeaIds[id];
    render();
    return;
  }

  if (action === "close-global-search") {
    state.globalSearchQuery = "";
    const inputs = document.querySelectorAll("[data-global-search]");
    inputs.forEach(input => input.value = "");
    render();
    return;
  }

  if (action === "go-to-search-result") {
    const type = actionButton.dataset.type;
    const id = actionButton.dataset.id;
    state.globalSearchQuery = "";
    const inputs = document.querySelectorAll("[data-global-search]");
    inputs.forEach(input => input.value = "");
    
    if (type === "idea") {
      state.page = "detail";
      state.selectedIdeaId = id;
    } else if (type === "product") {
      state.page = "studio";
      state.studioTab = "products";
      state.filters.productSearch = state.ideas.find(i => i.id === id)?.title || "";
    } else if (type === "announcement") {
      state.page = "announcements";
    } else if (type === "dataset") {
      state.page = "data";
      state.dataActiveSection = "datasets";
    } else if (type === "team") {
      state.page = "studio";
      state.studioTab = "teams";
      state.selectedTeamId = id;
      state.teamsView = "detail";
    } else if (type === "agenda") {
      state.page = "agenda";
    } else if (type === "prediction") {
      state.page = "social";
      state.socialActiveTab = "tahminler";
    } else if (type === "event") {
      state.page = "events";
    }
    render();
    resetScroll();
    return;
  }

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

  if (action === "toggle-pin-idea") {
    const id = actionButton.dataset.id;
    if (!state.pinnedIdeaIds) state.pinnedIdeaIds = [];
    const idx = state.pinnedIdeaIds.indexOf(id);
    if (idx > -1) {
      state.pinnedIdeaIds.splice(idx, 1);
    } else {
      state.pinnedIdeaIds.push(id);
    }
    render();
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
    const experienceVal = document.getElementById("app-experience")?.value || "";
    const requestedEquityVal = parseInt(document.getElementById("app-requested-equity")?.value || "0");

    if (!motivationVal.trim() || !contributionVal.trim() || !experienceVal.trim()) {
      alert("Lütfen motivasyonunuzu, katkı sunacağınız alanları ve teknik deneyimlerinizi belirtin.");
      return;
    }

    if (requestedEquityVal <= 0 || requestedEquityVal > (idea.openEquity || 100)) {
      alert(`Lütfen 1 ile ${idea.openEquity || 100} arasında geçerli bir ortaklık hissesi talep edin.`);
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
      experience: experienceVal,
      requestedEquity: requestedEquityVal,
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

  // ==========================================
  // PREDICTION SYSTEM ACTIONS
  // ==========================================
  if (action === "submit-prediction") {
    const ideaId = document.getElementById("prediction-idea-id")?.value;
    const probability = parseInt(document.getElementById("prediction-probability")?.value || "50");
    const text = document.getElementById("prediction-text")?.value.trim();
    
    if (!ideaId) {
      alert("Lütfen bir proje seçin.");
      return;
    }
    if (!text) {
      alert("Lütfen tahmin gerekçenizi yazın.");
      return;
    }
    
    const idea = state.ideas.find(i => i.id === ideaId);
    const me = currentUser();
    state.predictions = state.predictions || [];
    state.predictions.unshift({
      id: `pred-${Date.now()}`,
      userId: me.id,
      userName: me.name,
      userAvatar: me.photo || "https://randomuser.me/api/portraits/men/32.jpg",
      ideaId: ideaId,
      ideaTitle: idea ? idea.title : "Bilinmeyen Proje",
      predictionText: text,
      probability: probability,
      date: new Date().toISOString().slice(0, 10),
      likes: 0,
      comments: []
    });
    
    rewardMarketBudget(250, "Fikir tahmin paylaşım ödülü");
    render();
    return;
  }

  if (action === "support-prediction") {
    const predId = actionButton.dataset.id;
    state.likedPredictions = state.likedPredictions || [];
    const predIndex = state.likedPredictions.indexOf(predId);
    const pred = (state.predictions || []).find(p => p.id === predId);
    if (pred) {
      if (predIndex > -1) {
        state.likedPredictions.splice(predIndex, 1);
        pred.likes = Math.max(0, (pred.likes || 0) - 1);
      } else {
        state.likedPredictions.push(predId);
        pred.likes = (pred.likes || 0) + 1;
      }
      render();
    }
    return;
  }

  if (action === "toggle-prediction-comments") {
    const predId = actionButton.dataset.id;
    state.predictionCommentsExpanded = state.predictionCommentsExpanded || {};
    state.predictionCommentsExpanded[predId] = !state.predictionCommentsExpanded[predId];
    render();
    return;
  }

  if (action === "add-prediction-comment") {
    const predId = actionButton.dataset.id;
    const input = document.getElementById(`prediction-comment-input-${predId}`);
    const bodyText = input?.value?.trim();
    if (!bodyText) {
      alert("Lütfen yorum yazın.");
      return;
    }
    const pred = (state.predictions || []).find(p => p.id === predId);
    if (pred) {
      const me = currentUser();
      pred.comments = pred.comments || [];
      pred.comments.push({
        userName: me.name,
        body: bodyText,
        date: new Date().toISOString().slice(0, 10)
      });
      if (input) input.value = "";
      render();
    }
    return;
  }

  // ==========================================
  // EDUCATION & MENTORSHIP ACTIONS
  // ==========================================
  if (action === "set-education-tab") {
    state.educationActiveTab = actionButton.dataset.tab;
    render();
    return;
  }

  if (action === "toggle-education-composer") {
    state.educationComposerOpen = !state.educationComposerOpen;
    render();
    return;
  }

  if (action === "submit-education-item") {
    const title = document.getElementById("edu-composer-title")?.value.trim();
    const category = document.getElementById("edu-composer-category")?.value;
    const date = document.getElementById("edu-composer-date")?.value.trim();
    const organizer = document.getElementById("edu-composer-organizer")?.value.trim() || "İnovasyon Ofisi";
    const desc = document.getElementById("edu-composer-desc")?.value.trim();
    const link = document.getElementById("edu-composer-link")?.value.trim() || "#";
    
    if (!title || !desc || !date) {
      alert("Lütfen başlık, tarih ve açıklama alanlarını doldurun.");
      return;
    }
    
    state.educationItems = state.educationItems || [];
    state.educationItems.unshift({
      id: `edu-${Date.now()}`,
      title,
      category,
      date,
      organizer,
      description: desc,
      link
    });
    
    state.educationComposerOpen = false;
    alert("Yeni eğitim programı başarıyla eklendi.");
    render();
    return;
  }

  if (action === "open-mentor-request-modal") {
    state.mentorApplyModalId = actionButton.dataset.mentorId;
    render();
    return;
  }

  if (action === "close-mentor-modal") {
    state.mentorApplyModalId = null;
    render();
    return;
  }

  if (action === "submit-mentor-application") {
    const mentorId = actionButton.dataset.mentorId;
    const ideaId = document.getElementById("mentor-app-idea")?.value;
    const message = document.getElementById("mentor-app-message")?.value.trim();
    
    if (!message) {
      alert("Lütfen mentörünüze iletmek istediğiniz mesajı yazın.");
      return;
    }
    
    const mentor = state.mentors.find(m => m.id === mentorId);
    state.mentorApplications = state.mentorApplications || [];
    state.mentorApplications.push({
      id: `ma-${Date.now()}`,
      mentorId,
      mentorName: mentor ? mentor.name : "Mentör",
      ideaId,
      message,
      status: "pending",
      date: new Date().toISOString().slice(0, 10)
    });
    
    state.notifications.unshift({
      id: `n-${Date.now()}`,
      type: "Mentörlük",
      title: "Mentörlük Talebi Gönderildi",
      body: `${mentor ? mentor.name : 'Mentör'} isimli mentöre danışma talebiniz başarıyla iletildi.`,
      unread: true
    });
    
    state.mentorApplyModalId = null;
    alert("Mentörlük talebiniz başarıyla gönderildi! Mentörünüz en kısa sürede sizinle iletişime geçecektir.");
    render();
    return;
  }

  // ==========================================
  // EVENTS ACTIONS
  // ==========================================
  if (action === "toggle-event-composer") {
    state.eventComposerOpen = !state.eventComposerOpen;
    render();
    return;
  }

  if (action === "submit-event-item") {
    const title = document.getElementById("evt-title")?.value.trim();
    const topic = document.getElementById("evt-topic")?.value;
    const date = document.getElementById("evt-date")?.value.trim();
    const desc = document.getElementById("evt-desc")?.value.trim();
    const link = document.getElementById("evt-link")?.value.trim() || "#";
    const organizer = document.getElementById("evt-organizer")?.value.trim() || currentUser().name;
    
    if (!title || !date || !desc) {
      alert("Lütfen başlık, tarih ve açıklama alanlarını doldurun.");
      return;
    }
    
    state.events = state.events || [];
    state.events.unshift({
      id: `event-${Date.now()}`,
      title,
      topic,
      date,
      description: desc,
      link,
      organizer
    });
    
    state.eventComposerOpen = false;
    alert("Yeni etkinlik başarıyla eklendi.");
    render();
    return;
  }

  if (action === "ai-auto-post-agenda") {
    const aiAgendaItems = [
      {
        title: "AI & NLP Tabanlı Mevzuat Analizi Yayında",
        body: "Hukuk ve Uyum Ofisi'nin desteğiyle geliştirilen yeni NLP motoru, platforma eklenen projeleri KVKK ve BDDK düzenlemelerine göre otomatik taramaya başladı. Uyum oranı %98 olan projeler doğrudan borsa listelenmesine aktarılıyor.",
        category: "AI Host",
        tags: ["Mevzuat", "NLP", "Otomasyon"]
      },
      {
        title: "Yeşil Enerji Projeleri Yatırım Trendleri",
        body: "Stüdyolarımızda kuluçkalanan Yeşil Enerji ve Karbon Takip projelerine olan bireysel yatırım hacmi son iki haftada %40 arttı. ESG raporlama standartlarına uyum sağlayan girişimler öncelikli destek alıyor.",
        category: "Strateji",
        tags: ["YeşilFinans", "ESG", "Yatırım"]
      },
      {
        title: "Borsa Simülasyonu Hacim Rekoru Kırdı",
        body: "İş NEW platformundaki günlük sanal işlem hacmi 150,000 NIE Kredisini aşarak rekor tazeledi. En çok hacim oluşturan projeler dinamik vardiya planlaması ve müşteri şikayet analiz sistemleri oldu.",
        category: "Operasyon",
        tags: ["Borsa", "Hacim", "Hype"]
      }
    ];
    
    const selected = aiAgendaItems[Math.floor(Math.random() * aiAgendaItems.length)];
    
    state.agendaItems = state.agendaItems || [];
    state.agendaItems.unshift({
      id: `agenda-${Date.now()}`,
      title: selected.title,
      body: selected.body,
      category: selected.category,
      date: new Date().toISOString().slice(0, 10),
      author: "AI İnovasyon Analisti",
      tags: selected.tags,
      isAiGenerated: true
    });
    
    alert("Yapay Zeka tarafından analiz edilen yeni gündem maddesi otomatik olarak paylaşıldı!");
    render();
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
    const countryVal = document.getElementById("wizard-country")?.value || state.activeCountry;

    if (!titleVal.trim() || !oneSentenceVal.trim()) {
      alert("Lütfen en azından Başlık ve Kısa Açıklama alanlarını doldurun.");
      return;
    }

    let fee = 0;
    let challengeObj = null;
    if (state.wizard.ideaType === "Yarışma başvurusu" && state.wizard.challengeId) {
      challengeObj = challenges.find(c => c.id === state.wizard.challengeId);
      if (challengeObj) {
        fee = challengeObj.entryFee || 1000;
      }
    } else if (marketCategoryVal === "Proje") {
      fee = 100;
    }

    if (state.marketBudget < fee) {
      alert(`Bu işlemi gerçekleştirmek için yeterli bakiyeniz yok! Gerekli: ${fee} SA (Mevcut: ${state.marketBudget} SA)`);
      return;
    }

    state.marketBudget -= fee;
    if (challengeObj) {
      challengeObj.participants = (challengeObj.participants || 0) + 1;
      challengeObj.ideas = (challengeObj.ideas || 0) + 1;
      state.followedChallenges = state.followedChallenges || [];
      if (!state.followedChallenges.includes(challengeObj.id)) {
        state.followedChallenges.push(challengeObj.id);
      }
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
      location: user.location || "Sabancı Center",
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
      companyId: companyVal === "Bağımsız" ? "independent" : (affiliationCompanies.find(c => c.name === companyVal)?.id || "sabanci-holding"),
      marketCategory: marketCategoryVal,
      marketTicker: `NIE-${String(state.ideas.length + 1).padStart(2, "0")}`,
      marketPrice: Math.round(mockAiScore * 2.2),
      marketChange: 0.0,
      marketVolume: 0,
      marketShares: 1000,
      marketSpark: [mockAiScore, mockAiScore, mockAiScore, mockAiScore],
      files: defaultBundleFiles(`NIE-${String(state.ideas.length + 1).padStart(2, "0")}`, marketCategoryVal),
      applications: [],
      country: countryVal
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
        const currentOwned = state.marketHoldings[idea.id] || 0;
        const maxLimit = Math.round((idea.marketShares || 1000) * 0.10); // 10% = 100 Lots
        if (currentOwned + quantity > maxLimit) {
          alert(`Bir hisse senedinin maksimum %10'una (%10 = ${maxLimit} Birim) sahip olabilirsiniz! (Şu anki varlığınız: ${currentOwned} Birim, Almak istediğiniz: ${quantity} Birim)`);
          return;
        }

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

          state.quickFlowFeedback = `${quantity} birim ${idea.marketTicker} alındı. Bütçe ${formatCurrencyHTML(state.marketBudget, "large")}.`;
          
          const royalty = Math.round(totalPrice * 0.05);
          if (royalty > 0) {
            if (idea.authorId === currentUser().id) {
              state.marketBudget += royalty;
              state.quickFlowFeedback += ` Kendi projeniz olduğu için %5 Girişimci Telifi (+${royalty} SA) cüzdanınıza eklendi!`;
            } else {
              const authorUser = demoUsers.find(u => u.id === idea.authorId);
              if (authorUser) {
                authorUser.voteCreditBalance = (authorUser.voteCreditBalance || 0) + royalty;
                state.quickFlowFeedback += ` Girişimciye (${authorUser.name}) %5 (%5 = ${royalty} SA) telif ödendi.`;
              }
            }
          }
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

          state.quickFlowFeedback = `${quantity} birim ${idea.marketTicker} satıldı. Bütçe ${formatCurrencyHTML(state.marketBudget, "large")}.`;
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

  if (action === "set-studio-main-tab") {
    state.studioTab = actionButton.dataset.tab;
    render(); resetScroll(); return;
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

    if (action === "select-login-country") {
    state.currentCountry = actionButton.dataset.code;
    state.activeCountry = actionButton.dataset.code;
    state.loginCountrySelected = true;
    state.currentUserId = "u3"; // Always Can Koç
    state.loggedIn = true; // Auto login
    render();
    resetScroll();
    return;
  }

  if (action === "back-to-countries") {
    state.loginCountrySelected = false;
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
      const isProject = state.marketDraft.category === "Proje";
      const fee = isProject ? 100 : 0;
      if (state.marketBudget < fee) {
        alert(`Yeni Proje eklemek için cüzdanınızda en az ${fee} SA olmalıdır! (Mevcut: ${state.marketBudget} SA)`);
        return;
      }
      state.marketBudget -= fee;
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
      if (action === "buy-market") {
        const currentOwned = state.marketHoldings[idea.id] || 0;
        const maxLimit = Math.round((idea.marketShares || 1000) * 0.10); // 10% = 100 Lots
        if (currentOwned + quantity > maxLimit) {
          alert(`Bir hisse senedinin maksimum %10'una (%10 = ${maxLimit} Birim) sahip olabilirsiniz! (Şu anki varlığınız: ${currentOwned} Birim, Almak istediğiniz: ${quantity} Birim)`);
          return;
        }

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

          state.quickFlowFeedback = `${quantity} birim ${idea.marketTicker} alındı. Bütçe ${formatCurrencyHTML(state.marketBudget, "large")}.`;
          
          const royalty = Math.round(totalPrice * 0.05);
          if (royalty > 0) {
            if (idea.authorId === currentUser().id) {
              state.marketBudget += royalty;
              state.quickFlowFeedback += ` Kendi projeniz olduğu için %5 Girişimci Telifi (+${royalty} SA) cüzdanınıza eklendi!`;
            } else {
              const authorUser = demoUsers.find(u => u.id === idea.authorId);
              if (authorUser) {
                authorUser.voteCreditBalance = (authorUser.voteCreditBalance || 0) + royalty;
                state.quickFlowFeedback += ` Girişimciye (${authorUser.name}) %5 (%5 = ${royalty} SA) telif ödendi.`;
              }
            }
          }
        } else {
          alert("Yetersiz bütçe!");
        }
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

        state.quickFlowFeedback = `${sellQuantity} birim ${idea.marketTicker} satıldı. Bütçe ${formatCurrencyHTML(state.marketBudget, "large")}.`;
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
      sort: "En yeni",
      country: "Aktif Portal"
    });
    render();
  }

  if (action === "clear-borsa-filters") {
    state.marketSearch = "";
    state.filters.company = "Tümü";
    state.filters.league = "Tümü";
    state.filters.area = "Tümü";
    state.marketSort = "En yeni";
    state.filters.country = "Aktif Portal";
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

  if (action === "generate-agenda-ai") {
    const randomTopic = [
      {
        title: "Borsa projelerinde sürdürülebilirlik rüzgarı",
        body: "Son eklenen projeler arasında yeşil finansman, enerji verimliliği ve karbon nötrleme temaları öne çıkıyor. AI Denetçi puanları ortalama 85 barajını aştı.",
        category: "AI Host",
        tags: "sürdürülebilirlik, trend, ai-analiz"
      },
      {
        title: "Yapay Zeka değerlendirmelerinde tüzük uyumluluğu artıyor",
        body: "AI Değerlendirme skoru 70 altında kalan fikirlerin sayısı bu hafta %15 azaldı. Çalışanlarımızın tüzük kurallarına hakimiyeti ve fikir kalitesi yükseliyor.",
        category: "AI Host",
        tags: "tüzük, kalite, ai-denetçi"
      },
      {
        title: "Platform içi oylama ve kredi sirkülasyonu rekor seviyede",
        body: "NIE-06 ve NIE-01 projelerinin gördüğü yüksek ilgi, oylama kredilerinin iştirakler arası yayılım hızını %40 oranında artırdı.",
        category: "AI Host",
        tags: "piyasa, kredi, sirkülasyon"
      }
    ][Math.floor(Math.random() * 3)];
    
    state.agendaDraft.title = randomTopic.title;
    state.agendaDraft.category = randomTopic.category;
    state.agendaDraft.tags = randomTopic.tags;
    state.agendaDraft.body = randomTopic.body;
    state.agendaDraft.date = new Date().toISOString().slice(0, 10);
    state.agendaDraft.isAiGenerated = true;
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
      author: draft.isAiGenerated ? "AI Host" : currentUser().name,
      isAiGenerated: !!draft.isAiGenerated
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

  if (action === "set-leaderboard-scope") {
    state.leaderboardScope = actionButton.dataset.scope;
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
      
      // Trigger status-change notification
      if (!state.notifications) state.notifications = [];
      const statusLabel = (statusMeta[idea.status] && statusMeta[idea.status].label) || idea.status;
      state.notifications.unshift({
        id: "n-status-" + Date.now(),
        type: "Fikir",
        title: `Proje Durumu Güncellendi`,
        body: `"${idea.title}" projesinin yeni durumu: "${statusLabel}" olarak güncellendi.`,
        unread: true
      });

      if (idea.status === "done") {
        idea.communityScore = Math.min(100, idea.communityScore + 4);
        const investedAmount = (state.marketInvestedAmount && state.marketInvestedAmount[idea.id]) || 0;
        if (investedAmount > 0) {
          const reward = investedAmount * 10;
          state.marketBudget += reward;
          state.marketInvestedAmount[idea.id] = 0;
          setTimeout(() => {
            alert(`Tebrikler! "${idea.title}" projesi başarıyla hayata geçirildi.\nYaptığınız ${formatCurrency(investedAmount)} değerindeki yatırımın 10 katı olan ${formatCurrency(reward)} oylama kredisi hesabınıza aktarıldı!\n\nYatırım Politikası Gereği: Girişimci ödülünün %10'u da yatırımcılar arasında paylaştırılmıştır.`);
          }, 100);
        }
        // Auto-push AI agenda post for completion
        if (!state.agendaItems) state.agendaItems = [];
        state.agendaItems.unshift({
          id: "ag-ai-" + Date.now(),
          title: `AI Analizi: "${idea.title}" Başarıyla Hayata Geçirildi!`,
          body: `İş NEW Yapay Zeka Denetçisi Bildirimi: ${idea.marketTicker} projesi pilot aşamasını başarıyla tamamlayıp hayata geçirildi. Yatırımcılara 10 katı kadar oylama kredisi dağıtıldı. Girişimciye verilen ödülün %10'u yatırımcıları arasında paylaştırıldı.`,
          category: "AI Host",
          date: new Date().toISOString().slice(0, 10),
          tags: ["ai-analizi", "ürünleşme", idea.marketTicker.toLowerCase()],
          author: "AI Denetçi"
        });
      } else if (idea.status === "rejected") {
        // Auto-push AI agenda post for rejection
        if (!state.agendaItems) state.agendaItems = [];
        state.agendaItems.unshift({
          id: "ag-ai-" + Date.now(),
          title: `AI Analizi: "${idea.title}" Reddedildi`,
          body: `İş NEW Yapay Zeka Denetçisi Bildirimi: ${idea.marketTicker} projesi yapılan detaylı denetim sonrasında tüzüğe aykırılık veya 70 puan altı AI barajı nedeniyle reddedilmiştir.`,
          category: "AI Host",
          date: new Date().toISOString().slice(0, 10),
          tags: ["ai-denetimi", "red", idea.marketTicker.toLowerCase()],
          author: "AI Denetçi"
        });
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
  if (event.target.matches("[data-global-search]")) {
    state.globalSearchQuery = event.target.value;
    const inputs = document.querySelectorAll("[data-global-search]");
    inputs.forEach(input => {
      if (input !== event.target) input.value = event.target.value;
    });
    state.visibleIdeasCount = 12;
    state.visibleBorsaIdeasCount = 12;
    render();
    return;
  }

  if (event.target.matches("[data-market-filter='search']")) {
    state.marketSearch = event.target.value;
    state.visibleBorsaIdeasCount = 12;
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
    state.visibleIdeasCount = 12;
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
      quickEvalPointer.card.style.boxShadow = `0 25px 50px -12px rgba(0, 0, 0, 0.45), 0 0 40px rgba(16, 185, 129, ${intensity})`;
      quickEvalPointer.card.style.borderColor = `rgba(16, 185, 129, ${intensity * 1.5})`;
    } else {
      quickEvalPointer.card.style.boxShadow = `0 25px 50px -12px rgba(0, 0, 0, 0.45), 0 0 40px rgba(239, 68, 68, ${intensity})`;
      quickEvalPointer.card.style.borderColor = `rgba(239, 68, 68, ${intensity * 1.5})`;
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
    if (action === "change-active-country") {
      state.activeCountry = event.target.value;
      state.translatedIdeaIds = {};
      state.globalTranslateAll = false;
      state.visibleIdeasCount = 12;
      state.visibleBorsaIdeasCount = 12;
      render();
      return;
    }

    if (action === "change-app-language") {
      state.appLanguage = event.target.value;
      state.translatedIdeaIds = {};
      state.globalTranslateAll = false;
      render();
      return;
    }

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
    state.visibleBorsaIdeasCount = 12;
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

  const socialFilter = event.target.closest("[data-social-filter]");
  if (socialFilter) {
    const filterName = socialFilter.dataset.socialFilter;
    if (filterName === "role") {
      state.filters.socialRole = event.target.value;
      render();
      return;
    }
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
    state.visibleIdeasCount = 12;
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
  if (!idea) return;
  
  if (!user.supportedIdeas) {
    user.supportedIdeas = [];
  }
  
  if (user.supportedIdeas.includes(id)) {
    // Already supported, toggle off
    user.supportedIdeas = user.supportedIdeas.filter(x => x !== id);
    idea.credits = Math.max(0, (idea.credits || 0) - 1);
    idea.supporters = Math.max(0, (idea.supporters || 0) - 1);
    idea.communityScore = Math.max(0, (idea.communityScore || 0) - 1);
    user.voteCreditBalance = (user.voteCreditBalance || 0) + 1;
    return;
  }
  
  if (user.voteCreditBalance <= 0) {
    alert("Yeterli oylama krediniz bulunmamaktadır!");
    return;
  }
  
  user.supportedIdeas.push(id);
  idea.credits = (idea.credits || 0) + 1;
  idea.supporters = (idea.supporters || 0) + 1;
  idea.communityScore = Math.min(100, (idea.communityScore || 0) + 1);
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
              <span>Alınan</span>
            </div>
            <div class="stat-pill">
              <strong>${swipedCount - likedCount}</strong>
              <span>Alınmayan</span>
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
        <p class="speedy-subtitle">Sağa Kaydır: Al · Sola Kaydır: Alma</p>
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
            <div class="swipe-overlay like-overlay" style="color: #10b981; border-color: #10b981;">AL</div>
            <div class="swipe-overlay pass-overlay" style="color: #ef4444; border-color: #ef4444;">ALMA</div>
          </article>
        </div>

        <!-- Action Control Buttons under stack -->
        <div class="tinder-controls">
          <button class="tinder-btn dislike-btn" data-action="quickEval-dislike" data-id="${esc(idea.id)}" title="Alma (Sola Kaydır)" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: auto; padding: 12px; gap: 4px;">
            ${icon("x-circle")}
            <span style="font-size: 11px; font-weight: 600; color: var(--negative);">Alma</span>
          </button>
          
          <button class="tinder-btn comment-btn" data-action="quickEval-show-comments" data-id="${esc(idea.id)}" title="Yorumlar" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: auto; padding: 12px; gap: 4px;">
            ${icon("message-square-text")}
            <span style="font-size: 11px; font-weight: 600; color: var(--muted);">${comments.length || 0} Yorum</span>
          </button>
          
          <button class="tinder-btn like-btn" data-action="quickEval-like" data-id="${esc(idea.id)}" title="Al (Sağa Kaydır)" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: auto; padding: 12px; gap: 4px;">
            ${icon("check-circle-2")}
            <span style="font-size: 11px; font-weight: 600; color: var(--emerald);">Al</span>
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

function getIdeaPredictionProbability(ideaId) {
  const preds = (state.predictions || []).filter(p => p.ideaId === ideaId);
  if (preds.length > 0) {
    const sum = preds.reduce((acc, curr) => acc + (curr.probability || 50), 0);
    return sum / preds.length;
  }
  const idea = state.ideas.find(i => i.id === ideaId);
  return idea ? idea.aiScore || 50 : 50;
}

function filteredBorsaIdeas() {
  let list = [...state.ideas];
  if (state.filters.country === "Aktif Portal") {
    list = list.filter(idea => idea.country === state.activeCountry);
  } else if (state.filters.country !== "Tüm Ülkeler") {
    list = list.filter(idea => idea.country === state.filters.country);
  }
  
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
  } else if (sortType === "En Pahalılar" || sortType === "Fiyat") {
    list.sort((a, b) => marketPrice(b) - marketPrice(a));
  } else if (sortType === "En Yüksek AI Skoru") {
    list.sort((a, b) => (b.aiScore || 0) - (a.aiScore || 0));
  } else if (sortType === "En Çok Beğenilenler") {
    list.sort((a, b) => (b.likes || b.supporters || 0) - (a.likes || a.supporters || 0));
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
        <div style="display: flex; align-items: center; gap: 8px;">
          <button class="btn ghost slim-btn" data-action="toggle-pin-idea" data-id="${idea.id}" style="padding: 2px 4px; border: none; background: transparent; color: ${state.pinnedIdeaIds && state.pinnedIdeaIds.includes(idea.id) ? 'var(--primary)' : 'var(--muted)'}; cursor: pointer;" title="${state.pinnedIdeaIds && state.pinnedIdeaIds.includes(idea.id) ? 'Sabitlemeyi Kaldır' : 'Sabitle'}">
            ${icon(state.pinnedIdeaIds && state.pinnedIdeaIds.includes(idea.id) ? "pin-off" : "pin")}
          </button>
          ${company ? companyLogo(company, "mini") : `<span class="independent-pill" style="font-size: 11px; background: var(--line-soft); color: var(--ink-soft); padding: 4px 8px; border-radius: 4px; font-weight: 500;">Bağımsız</span>`}
        </div>
      </div>

      <div style="flex: 1;">
        <h3 class="borsa-card-title" style="font-size: 18px; font-weight: 600; margin: 4px 0 8px 0; color: var(--ink); line-height: 1.4;">${esc(idea.title)}</h3>
        <p class="borsa-card-summary" style="font-size: 13.5px; color: var(--ink-soft); line-height: 1.5; margin-bottom: 12px;">${esc(idea.summary)}</p>
        ${renderTranslationButton(idea)}
        
        <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px;">
          <span style="font-size: 12px; background: rgba(var(--primary-rgb), 0.05); color: var(--ink-soft); padding: 3px 8px; border-radius: 6px;">
            ${icon("tag", "12")} ${esc(idea.area || "Diğer")}
          </span>
          <span style="font-size: 12px; background: rgba(16, 185, 129, 0.08); color: var(--emerald); padding: 3px 8px; border-radius: 6px; font-weight: 500; display: inline-flex; align-items: center; gap: 4px;">
            ${icon("percent", "12")} Açık Hisse: %${idea.openEquity || 0}
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
  list = list.filter(d => d.country === state.activeCountry);
  
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
  list = list.filter(ann => ann.country === state.activeCountry);
  
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

  if (state.filters.socialRole && state.filters.socialRole !== "Tüm Roller") {
    feedList = feedList.filter(post => {
      const person = personById(post.userId);
      const role = person?.role || (post.userBio ? post.userBio.split("·")[0].trim() : "");
      return role === state.filters.socialRole;
    });
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
          <button class="btn ${state.socialActiveTab === 'tahminler' ? 'active' : ''}" data-action="set-social-tab" data-tab="tahminler" style="font-size: 13px; font-weight: 600;">
            ${icon("trending-up")} Tahminler
          </button>
          <button class="btn ${state.socialActiveTab === 'leaderboard' ? 'active' : ''}" data-action="set-social-tab" data-tab="leaderboard" style="font-size: 13px; font-weight: 600;">
            ${icon("trophy")} Lider Tablosu
          </button>
        </div>

        ${state.socialActiveTab === "leaderboard" ? renderSocialLeaderboard() : 
          state.socialActiveTab === "tahminler" ? renderSocialPredictions() : `
          <!-- Post Composer -->
          <article class="social-post-composer" style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 16px; display: flex; flex-direction: column; gap: 12px;">
            <div style="display: flex; gap: 10px; align-items: center;">
              ${avatar(user.name, "medium", user.photo || "")}
              <textarea class="textarea" id="social-composer-textarea" rows="2" placeholder="Bugün inovasyon adına ne paylaşıyorsun?" style="flex: 1; resize: none; border-radius: 12px; padding: 10px; font-size: 14px; border-color: var(--line-soft);"></textarea>
            </div>
            <div class="social-composer-actions" style="gap: 8px; flex-wrap: wrap;">
              <label class="search-box" style="width: 200px; font-size: 12px;">
                ${icon("search")}
                <input class="input" placeholder="Akışta ara..." data-social-filter="search" value="${esc(state.filters.socialSearch || '')}" style="padding: 4px 8px 4px 28px; font-size: 12.5px;" />
              </label>
              
              <select class="select" data-social-filter="role" style="width: 160px; font-size: 12.5px; padding: 4px 8px; border-radius: 8px; border: 1px solid var(--line-soft); background: var(--surface); color: var(--ink);">
                <option value="Tüm Roller" ${state.filters.socialRole === "Tüm Roller" ? "selected" : ""}>Rol: Tüm Roller</option>
                ${Array.from(new Set(state.socialPosts.map(post => {
                  const person = personById(post.userId);
                  if (person && person.role) return person.role;
                  if (post.userBio) return post.userBio.split("·")[0].trim();
                  return "";
                }).filter(Boolean))).map(role => `
                  <option value="${esc(role)}" ${state.filters.socialRole === role ? "selected" : ""}>Rol: ${esc(role)}</option>
                `).join("")}
              </select>

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
        ${state.socialActiveTab === "tahminler" ? renderAIPredictionRankingsWidget() : `
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
        `}
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

function renderSocialPredictions() {
  const user = currentUser();
  const ideas = state.ideas || [];
  const predictions = [...(state.predictions || [])].sort((a, b) => new Date(b.date) - new Date(a.date));

  return `
    <article class="social-post-composer" style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; align-items: center; gap: 10px; border-bottom: 1px solid var(--line-soft); padding-bottom: 12px;">
        ${icon("trending-up", "20", "style='color: var(--primary);'")}
        <h3 style="margin: 0; font-size: 16px; font-weight: 600; color: var(--ink);">Yeni Başarı Tahmini Paylaş</h3>
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <label class="field">
          <span style="font-weight: 500; font-size: 13px; color: var(--ink);">Proje / Fikir Seçin</span>
          <select class="select" id="prediction-idea-id" style="width: 100%; margin-top: 4px; padding: 8px; border-radius: 8px;">
            <option value="">-- Tahmin etmek istediğiniz projeyi seçin --</option>
            ${ideas.map(idea => `<option value="${esc(idea.id)}">${esc(idea.title)} (${esc(idea.marketTicker || '')})</option>`).join("")}
          </select>
        </label>
        
        <div style="display: grid; grid-template-columns: 1fr 120px; gap: 16px; align-items: center;">
          <label class="field">
            <span style="font-weight: 500; font-size: 13px; color: var(--ink);">Başarı Olasılığı Hedefi: <strong id="prediction-prob-label" style="color: var(--primary);">50%</strong></span>
            <input type="range" class="range" id="prediction-probability" min="10" max="100" value="50" style="width: 100%; margin-top: 6px; accent-color: var(--primary);" oninput="document.getElementById('prediction-prob-label').innerText = this.value + '%'" />
          </label>
          <div style="background: rgba(var(--primary-rgb), 0.05); border: 1px dashed rgba(var(--primary-rgb), 0.3); border-radius: 8px; padding: 8px; text-align: center; font-size: 12px; color: var(--muted); height: fit-content; margin-top: 18px;">
            AI Skoru ile karşılaştırılır
          </div>
        </div>
        
        <label class="field">
          <span style="font-weight: 500; font-size: 13px; color: var(--ink);">Tahmin Analizi & Gerekçelendirme</span>
          <textarea class="textarea" id="prediction-text" rows="3" placeholder="Bu projenin neden başarılı olacağını veya hedefe ulaşacağını düşünüyorsunuz? Veri ve analizlerinizi paylaşın..." style="margin-top: 4px; border-radius: 8px; resize: none;"></textarea>
        </label>
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 8px; border-top: 1px solid var(--line-soft); padding-top: 12px;">
        <button class="btn primary" data-action="submit-prediction" style="padding: 8px 20px; font-size: 13px; font-weight: 600;">Tahmini Yayınla</button>
      </div>
    </article>

    <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 8px;">
      ${predictions.map(pred => {
        const idea = ideas.find(i => i.id === pred.ideaId);
        const hasLiked = state.likedPredictions && state.likedPredictions.includes(pred.id);
        const showComments = state.predictionCommentsExpanded && state.predictionCommentsExpanded[pred.id];
        const comments = pred.comments || [];
        
        return `
          <article class="social-post-card" style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: start;">
              <div style="display: flex; gap: 10px; align-items: center;">
                ${avatar(pred.userName, "medium", pred.userAvatar || "")}
                <div style="line-height: 1.3;">
                  <strong style="font-size: 14px; color: var(--ink); display: block;">${esc(pred.userName)}</strong>
                  <span style="font-size: 11px; color: var(--muted);">${esc(pred.date)} tarihinde tahmin paylaştı</span>
                </div>
              </div>
              <span class="product-stage-badge" style="--stage-color: ${pred.probability >= 70 ? 'var(--emerald)' : pred.probability >= 40 ? 'var(--amber)' : 'var(--rose)'}; padding: 6px 12px; font-weight: 600; font-size: 12px; border-radius: 20px;">
                %${pred.probability} Başarı Tahmini
              </span>
            </div>
            
            <div style="background: var(--bg-soft); border-left: 3px solid var(--primary); padding: 12px; border-radius: 0 8px 8px 0; cursor: pointer;" data-action="go-to-search-result" data-type="idea" data-id="${esc(pred.ideaId)}">
              <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: var(--primary); font-weight: 700; display: block; margin-bottom: 2px;">Hedeflenen Proje</span>
              <strong style="font-size: 13.5px; color: var(--ink); display: flex; align-items: center; gap: 6px;">
                ${esc(pred.ideaTitle || idea?.title || 'Bilinmeyen Proje')} 
                ${idea?.marketTicker ? `<span style="font-size: 11px; color: var(--muted); background: var(--line-soft); padding: 2px 6px; border-radius: 4px;">${esc(idea.marketTicker)}</span>` : ''}
              </strong>
            </div>

            <p style="color: var(--ink-soft); font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${esc(pred.predictionText)}</p>

            <div style="display: flex; gap: 16px; border-top: 1px solid var(--line-soft); padding-top: 12px; font-size: 13px;">
              <button class="btn ghost btn-sm ${hasLiked ? 'active' : ''}" data-action="support-prediction" data-id="${esc(pred.id)}" style="color: ${hasLiked ? 'var(--primary)' : 'var(--muted)'}; font-weight: 500; display: flex; align-items: center; gap: 6px; padding: 4px 8px;">
                ${icon(hasLiked ? "heart" : "heart", "16")}
                <span>${pred.likes || 0} Beğeni</span>
              </button>
              <button class="btn ghost btn-sm" data-action="toggle-prediction-comments" data-id="${esc(pred.id)}" style="color: var(--muted); font-weight: 500; display: flex; align-items: center; gap: 6px; padding: 4px 8px;">
                ${icon("message-square", "16")}
                <span>${comments.length} Yorum</span>
              </button>
            </div>

            ${showComments ? `
              <div class="prediction-comments-area" style="background: var(--bg-soft); border-radius: 12px; padding: 14px; display: flex; flex-direction: column; gap: 12px; margin-top: 4px; border: 1px solid var(--line-soft);">
                ${comments.length > 0 ? `
                  <div style="display: flex; flex-direction: column; gap: 10px; max-height: 200px; overflow-y: auto;">
                    ${comments.map(c => `
                      <div style="display: flex; gap: 8px; align-items: start; font-size: 12.5px; line-height: 1.4;">
                        ${avatar(c.userName, "small", "")}
                        <div style="background: var(--surface); padding: 8px 12px; border-radius: 12px; flex: 1; border: 1px solid var(--line-soft);">
                          <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
                            <strong style="color: var(--ink); font-weight: 600;">${esc(c.userName)}</strong>
                            <small style="color: var(--muted); font-size: 10px;">${esc(c.date || '')}</small>
                          </div>
                          <p style="color: var(--ink-soft); margin: 0; white-space: pre-wrap;">${esc(c.body)}</p>
                        </div>
                      </div>
                    `).join("")}
                  </div>
                ` : `
                  <p style="text-align: center; color: var(--muted); font-size: 12px; margin: 0; padding: 8px 0;">Henüz yorum yapılmamış. İlk yorumu siz yazın!</p>
                `}

                <div style="display: flex; gap: 8px; align-items: center; border-top: 1px solid var(--line-soft); padding-top: 10px; margin-top: 4px;">
                  <input type="text" class="input" id="prediction-comment-input-${esc(pred.id)}" placeholder="Yorumunuzu yazın..." style="flex: 1; font-size: 13px; padding: 8px 12px; border-radius: 8px;" />
                  <button class="btn primary btn-sm" data-action="add-prediction-comment" data-id="${esc(pred.id)}" style="padding: 8px 16px; font-size: 12.5px;">Gönder</button>
                </div>
              </div>
            ` : ""}
          </article>
        `;
      }).join("") || `
        <div style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 40px; text-align: center; color: var(--muted);">
          ${icon("trending-up", "32")}
          <p style="margin-top: 10px;">Henüz tahmin paylaşılmamış.</p>
        </div>
      `}
    </div>
  `;
}

function renderAIPredictionRankingsWidget() {
  const ideas = [...(state.ideas || [])];
  const rankedIdeas = ideas.map(idea => {
    const probability = getIdeaPredictionProbability(idea.id);
    return {
      ...idea,
      probability
    };
  }).sort((a, b) => b.probability - a.probability).slice(0, 5);

  return `
    <aside class="social-connections-widget" style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; align-items: center; gap: 8px; border-bottom: 1px solid var(--line-soft); padding-bottom: 10px; margin: 0;">
        ${icon("bot", "18", "style='color: var(--primary);'")}
        <h3 style="font-size: 14.5px; font-weight: 700; color: var(--ink); margin: 0;">AI Başarı Olasılığı Sıralaması</h3>
      </div>
      
      <p style="font-size: 12px; color: var(--muted); margin: 0; line-height: 1.4;">
        Topluluk tahminleri ve yapay zeka analiz skoru harmanlanarak en yüksek başarı olasılığına sahip projeler listelenmiştir.
      </p>

      <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 4px;">
        ${rankedIdeas.map((idea, index) => {
          const colorStyle = idea.probability >= 75 
            ? { text: 'var(--emerald)', bg: 'rgba(16, 185, 129, 0.1)' } 
            : idea.probability >= 50 
              ? { text: 'var(--amber)', bg: 'rgba(245, 158, 11, 0.1)' } 
              : { text: 'var(--rose)', bg: 'rgba(244, 63, 94, 0.1)' };
              
          return `
            <div style="display: flex; align-items: center; gap: 10px; background: var(--bg-soft); padding: 8px 12px; border-radius: 10px; border: 1px solid var(--line-soft); cursor: pointer;" data-action="go-to-search-result" data-type="idea" data-id="${esc(idea.id)}">
              <span style="font-size: 14px; font-weight: 800; color: var(--muted); width: 16px; text-align: center;">${index + 1}</span>
              
              <div style="flex: 1; min-width: 0; line-height: 1.2;">
                <strong style="font-size: 12.5px; color: var(--ink); display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${esc(idea.title)}</strong>
                <span style="font-size: 11px; color: var(--muted);">${esc(idea.marketTicker || 'TICKER')} | ${esc(idea.marketCategory || 'Fikir')}</span>
              </div>
              
              <span style="font-size: 12px; font-weight: 700; color: ${colorStyle.text}; background: ${colorStyle.bg}; padding: 4px 8px; border-radius: 6px;">
                %${Math.round(idea.probability)}
              </span>
            </div>
          `;
        }).join("")}
      </div>
    </aside>
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
      <div class="social-leaderboard-scope-tabs" style="display: flex; gap: 8px; margin-bottom: 12px; background: var(--surface); padding: 4px; border-radius: 8px; border: 1px solid var(--line-soft);">
        <button class="btn ${state.leaderboardScope !== 'global' ? 'active' : 'ghost'}" data-action="set-leaderboard-scope" data-scope="country" style="flex: 1; justify-content: center; height: 32px; font-size: 13px;">Ülke Tablosu</button>
        <button class="btn ${state.leaderboardScope === 'global' ? 'active' : 'ghost'}" data-action="set-leaderboard-scope" data-scope="global" style="flex: 1; justify-content: center; height: 32px; font-size: 13px;">Global Tablo</button>
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
    const company = companyById(person.companyId || "sabanci-holding");
    return {
      ...row,
      name: person.name || "NEW IDEA EXCHANGE Üyesi",
      role: person.role || person.title || "Katılımcı",
      company: company.shortName || company.name,
      photo: person.photo || "",
      country: person.country || "TR"
    };
  }).filter(row => {
    if (state.leaderboardScope === "global") return true;
    return row.country === state.activeCountry;
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
      url: "https://www.sabanci.com/"
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
        url: "https://www.sabanci.com/"
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
            <div style="margin-top: 10px; display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 13.5px; color: var(--ink-soft); font-weight: 600;">Aktif Portal:</span>
              <img src="/assets/flags/${state.activeCountry.toLowerCase()}.svg" style="width: 20px; height: 13px; object-fit: cover; border-radius: 2px; box-shadow: 0 1px 3px rgba(0,0,0,0.15);" alt="" />
              <select class="select" style="padding: 4px 8px; font-size: 13px; font-weight: 600; border-radius: 8px; border: 1px solid var(--line-soft); background: var(--surface);" data-action="change-active-country">
                ${countriesList.map(c => `<option value="${c.code}" ${c.code === state.activeCountry ? 'selected' : ''}>${c.flag} ${c.name}</option>`).join("")}
              </select>
            </div>
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
            ${(() => {
              const quickEvalLikedIds = Object.entries(state.quickEvalLikes || {}).filter(([, val]) => val === "like").map(([id]) => id);
              const userSupportedIds = user.supportedIdeas || [];
              const totalLikedCount = new Set([...quickEvalLikedIds, ...userSupportedIds]).size;
              return `
                <button class="btn" style="flex: 1; border-radius: 0; background: ${state.profileTab === 'liked' ? 'var(--surface)' : 'transparent'}; border: none; border-bottom: 2px solid ${state.profileTab === 'liked' ? 'var(--primary)' : 'transparent'}; font-weight: 600;" data-action="set-profile-tab" data-tab="liked">
                  Beğenilen Fikirler (${totalLikedCount})
                </button>
              `;
            })()}
            <button class="btn" style="flex: 1; border-radius: 0; background: ${state.profileTab === 'pinned' ? 'var(--surface)' : 'transparent'}; border: none; border-bottom: 2px solid ${state.profileTab === 'pinned' ? 'var(--primary)' : 'transparent'}; font-weight: 600;" data-action="set-profile-tab" data-tab="pinned">
              Sabitli Fikirler (${(state.pinnedIdeaIds || []).length})
            </button>
            <button class="btn" style="flex: 1; border-radius: 0; background: ${state.profileTab === 'portfolio' ? 'var(--surface)' : 'transparent'}; border: none; border-bottom: 2px solid ${state.profileTab === 'portfolio' ? 'var(--primary)' : 'transparent'}; font-weight: 600;" data-action="set-profile-tab" data-tab="portfolio">
              Portföyüm (${Object.values(state.marketHoldings || {}).filter(q => q > 0).length})
            </button>
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

  if (tab === "liked") {
    const quickEvalLikedIds = Object.entries(state.quickEvalLikes || {})
      .filter(([, val]) => val === "like")
      .map(([id]) => id);
    const userSupportedIds = user.supportedIdeas || [];
    const combinedIds = Array.from(new Set([...quickEvalLikedIds, ...userSupportedIds]));
    const list = state.ideas.filter(i => combinedIds.includes(i.id));
    if (list.length === 0) return `<p style="color: var(--muted); font-size: 13.5px; text-align: center;">Henüz beğendiğiniz veya desteklediğiniz bir fikir bulunmamaktadır.</p>`;
    return `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 15px;">
      ${list.map(i => {
        const authorUser = demoUsers.find(u => u.id === i.authorId);
        const isAnonymous = String(i.authorLabel || "").toLocaleLowerCase("tr-TR").startsWith("anonim");
        const authorName = isAnonymous ? "Anonim" : (i.authorLabel || authorUser?.name || "Çalışan");
        return `
          <div style="background: var(--bg); border: 1px solid var(--line-soft); border-radius: 12px; padding: 16px; cursor: pointer; display: flex; flex-direction: column; justify-content: space-between; gap: 12px; transition: transform 0.2s;" data-action="open-idea" data-id="${i.id}" class="table-hover-row">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="background: rgba(var(--primary-rgb, 99, 102, 241), 0.15); color: var(--primary); padding: 2px 6px; border-radius: 4px; font-size: 11px; font-weight: 600;">${esc(i.marketCategory || 'Fikir')}</span>
                <span style="font-size: 11px; color: var(--muted); font-family: monospace;">${esc(i.marketTicker)}</span>
              </div>
              <h4 style="font-weight: 600; font-size: 14.5px; margin: 0 0 6px 0; color: var(--ink); line-height: 1.4;">${esc(i.title)}</h4>
              <p style="font-size: 12.5px; color: var(--ink-soft); line-height: 1.5; margin: 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${esc(i.summary)}</p>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.04); padding-top: 10px; margin-top: 4px;">
              <span style="display: flex; align-items: center; gap: 6px; font-size: 11.5px; color: var(--ink-soft);">
                ${avatar(authorName, "micro", isAnonymous ? "" : authorUser?.avatarUrl)}
                ${esc(authorName)}
              </span>
              <span style="display: inline-flex; align-items: center; gap: 4px; font-size: 12px; color: #ffd700; font-weight: 600;">
                ${icon("heart")} <span>${i.supporters || 0}</span>
              </span>
            </div>
          </div>
        `;
      }).join("")}
    </div>`;
  }

  if (tab === "pinned") {
    const list = state.ideas.filter(i => (state.pinnedIdeaIds || []).includes(i.id));
    if (list.length === 0) return `<p style="color: var(--muted); font-size: 13.5px; text-align: center;">Henüz sabitlediğiniz bir fikir bulunmamaktadır.</p>`;
    return `<div style="display: grid; grid-template-columns: 1fr; gap: 12px;">
      ${list.map(i => `
        <div style="background: var(--bg); border: 1px solid var(--line-soft); border-radius: 12px; padding: 16px; cursor: pointer; display: flex; justify-content: space-between; align-items: center;" data-action="open-idea" data-id="${i.id}">
          <div style="flex: 1; min-width: 0; margin-right: 12px;">
            <h4 style="font-weight: 600; font-size: 15px; margin-bottom: 4px; color: var(--ink);">${esc(i.title)}</h4>
            <p style="font-size: 13px; color: var(--ink-soft); line-height: 1.4; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${esc(i.summary)}</p>
          </div>
          <span class="status-badge" style="font-size: 11px; background: rgba(var(--primary-rgb), 0.1); color: var(--primary); font-weight: 600; border: 1px solid rgba(var(--primary-rgb), 0.2);">Sabitli</span>
        </div>
      `).join("")}
    </div>`;
  }

  if (tab === "portfolio") {
    const holdings = Object.entries(state.marketHoldings || {})
      .filter(([, qty]) => qty > 0)
      .map(([id, qty]) => ({ idea: state.ideas.find(item => item.id === id), qty }))
      .filter(item => item.idea);
    if (holdings.length === 0) return `<p style="color: var(--muted); font-size: 13.5px; text-align: center;">Henüz portföyünüzde hisse bulunmamaktadır. Borsa sekmesinden projelere yatırım yapabilirsiniz.</p>`;
    
    return `
      <div style="overflow-x: auto; background: var(--bg); border: 1px solid var(--line-soft); border-radius: 12px; padding: 12px;">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13.5px; min-width: 700px;">
          <thead>
            <tr style="border-bottom: 2px solid rgba(255,255,255,0.08); color: var(--muted); font-weight: 600;">
              <th style="padding: 12px 8px;">Proje / Kod</th>
              <th style="padding: 12px 8px; text-align: right;">Miktar (Lot)</th>
              <th style="padding: 12px 8px; text-align: right;">Ort. Maliyet</th>
              <th style="padding: 12px 8px; text-align: right;">Güncel Fiyat</th>
              <th style="padding: 12px 8px; text-align: right;">Yatırım</th>
              <th style="padding: 12px 8px; text-align: right;">Güncel Değer</th>
              <th style="padding: 12px 8px; text-align: right;">Kâr / Zarar</th>
            </tr>
          </thead>
          <tbody>
            ${holdings.map(({ idea, qty }) => {
              const currentPrice = marketPrice(idea);
              const totalValue = qty * currentPrice;
              const invested = (state.marketInvestedAmount && state.marketInvestedAmount[idea.id]) || 0;
              const avgCost = qty > 0 ? (invested / qty) : 0;
              const profitLoss = totalValue - invested;
              const profitLossPercent = invested > 0 ? (profitLoss / invested) * 100 : 0;
              const isProfit = profitLoss >= 0;
              
              return `
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); cursor: pointer;" data-action="open-idea" data-id="${idea.id}" class="table-hover-row">
                  <td style="padding: 12px 8px; display: flex; align-items: center; gap: 8px;">
                    <span style="background: rgba(255,215,0,0.1); color: #ffd700; padding: 4px 8px; border-radius: 4px; font-weight: 700; font-family: monospace;">${esc(idea.marketTicker)}</span>
                    <div>
                      <span style="font-weight: 600; display: block; color: var(--text);">${esc(idea.title)}</span>
                      <span style="font-size: 11px; color: var(--muted);">${esc(idea.department)}</span>
                    </div>
                  </td>
                  <td style="padding: 12px 8px; text-align: right; font-weight: 600; color: var(--text);">${qty}</td>
                  <td style="padding: 12px 8px; text-align: right; color: var(--text-secondary);">${formatCurrency(avgCost)} SA</td>
                  <td style="padding: 12px 8px; text-align: right; font-weight: 600; color: var(--text);">${formatCurrency(currentPrice)} SA</td>
                  <td style="padding: 12px 8px; text-align: right; color: var(--text-secondary);">${formatCurrency(invested)} SA</td>
                  <td style="padding: 12px 8px; text-align: right; font-weight: 700; color: #ffd700;">${formatCurrency(totalValue)} SA</td>
                  <td style="padding: 12px 8px; text-align: right; font-weight: 700; color: ${isProfit ? '#2ecc71' : '#e74c3c'};">
                    <span style="display: inline-flex; align-items: center; gap: 4px; background: ${isProfit ? 'rgba(46,204,113,0.1)' : 'rgba(231,76,60,0.1)'}; padding: 4px 8px; border-radius: 4px;">
                      ${isProfit ? '▲ +' : '▼ '}${formatCurrency(profitLoss)} (${isProfit ? '+' : ''}${profitLossPercent.toFixed(1)}%)
                    </span>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;
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
            <select class="select slim-select" style="width: 130px;" data-action="change-app-language">
              <option value="" ${!state.appLanguage ? "selected" : ""}>Portal Dili</option>
              <option value="tr" ${state.appLanguage === "tr" ? "selected" : ""}>Türkçe</option>
              <option value="en" ${state.appLanguage === "en" ? "selected" : ""}>English</option>
              <option value="de" ${state.appLanguage === "de" ? "selected" : ""}>Deutsch</option>
              <option value="es" ${state.appLanguage === "es" ? "selected" : ""}>Español</option>
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
    { role: 'assistant', text: 'Merhaba. Ben Sabancı AI Asistanı; yalnızca platform içindeki fikirler, gündem, duyurular, gelişmiş ürünler ve yönetici kaynaklarından özet çıkarırım. Demo kapsamında internette arama yapmam veya dış haber çekmem.' },
    { role: 'user', text: 'Şu an platform içinde hype hangi alana kayıyor?' },
    { role: 'assistant', text: '**Platform içi trend okuması:**\n\nBorsa hareketleri, gündem başlıkları ve ürünleşen fikirler birlikte bakıldığında operasyon verimliliği, AI destekli özetleme ve yeşil finans başlıkları öne çıkıyor. Bu yorum yalnızca demo içindeki kayıtlar üzerinden üretilmiştir.' }
  ];

  if (!state.aiAssistantOpen) {
    const isGlobalTranslated = !!state.globalTranslateAll;
    const tooltipText = isGlobalTranslated ? "Orijinal Dile Dön" : "Tüm Fikirleri Çevir";
    let translateStyle = `position: fixed; z-index: 999; width: 44px; height: 44px; border-radius: 50%; background: ${isGlobalTranslated ? 'var(--primary)' : 'var(--surface)'} !important; border: 1px solid var(--line-soft); color: ${isGlobalTranslated ? 'white' : 'var(--primary)'}; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12); transition: transform 0.2s, background-color 0.2s;`;
    let aiStyle = ``;

    if (state.aiBubblePos) {
      translateStyle += ` left: ${state.aiBubblePos.x + 6}px; top: ${state.aiBubblePos.y - 56}px; right: auto; bottom: auto;`;
      aiStyle += ` left: ${state.aiBubblePos.x}px; top: ${state.aiBubblePos.y}px; right: auto; bottom: auto;`;
    } else {
      translateStyle += ` bottom: 92px; right: 30px;`;
    }

    return `
      <div class="global-translate-bubble" data-action="toggle-global-translation" style="${translateStyle}" title="${tooltipText}" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'">
        ${icon("languages", `style="width: 20px; height: 20px; color: ${isGlobalTranslated ? 'white' : 'var(--primary)'};"`)}
      </div>
      <div class="ai-assistant-bubble ai-chat-bubble-trigger" data-action="toggle-ai-assistant" style="${aiStyle}">
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
    <div class="ai-assistant-chat-panel ai-chat-box" style="${panelStyle}">
      
      <!-- Header -->
      <header style="background: linear-gradient(135deg, #005daa 0%, #3730a3 100%); color: #fff; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; align-items: center; gap: 8px;">
          ${icon("bot")}
          <span style="font-weight: 600; font-size: 14.5px;">Sabancı AI Asistanı</span>
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
        <button class="suggestion-chip" data-action="ai-suggest" data-prompt="Çimsa karbon emisyonu azaltım fikri öner" style="font-size: 11px; background: var(--bg); border: 1px solid var(--line-soft); padding: 4px 8px; border-radius: 20px; cursor: pointer; color: var(--ink-soft);">Çimsa Önerisi Al</button>
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
    replyText = `**Ürünler görünümü:**
    
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
          <p>Sabancı Holding iştiraklerine ait ticari sırlar, müşteri verileri ve kişisel veriler kesinlikle açık şekilde paylaşılmamalıdır. Veri paylaşırken maskelenmiş veya anonimleştirilmiş veri setleri tercih edilmelidir.</p>
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
            ${icon("gavel")} 6. Kurumsal İnovasyon Yatırım ve Teşvik Politikası Tüzüğü
          </h3>
          <p>
            • <strong>AI Barajı (70 Puan):</strong> Projelerin borsada kalabilmesi için Yapay Zeka (AI) değerlendirmesinden en az 70 puan alması gerekir. 70 puanın altındaki projeler doğrudan elenir.<br/>
            • <strong>Tüzük Denetimi:</strong> Yapay zeka denetimi sırasında kurum ilkelerine veya tüzüğe aykırı bulunan fikirler otomatik olarak reddedilir.<br/>
            • <strong>Hayata Geçirilme Ödülü (10 Kat Kredi):</strong> Desteklediğiniz proje başarıyla hayata geçirildiğinde (pivotlaşma sonrası destek), o projeye yaptığınız yatırım miktarının <strong>10 katı</strong> kadar kredi hesabınıza ödül olarak anında yatırılır.<br/>
            • <strong>Girişimci-Yatırımcı Paylaşımı:</strong> Bir fikir/proje hayata geçirildiğinde, girişimciye verilen ödülün %10’u yatırımcıları arasında paylaştırılacaktır.
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

    const transBubble = document.querySelector(".global-translate-bubble");
    if (transBubble) {
      transBubble.style.right = 'auto';
      transBubble.style.bottom = 'auto';
      transBubble.style.left = (dragX + 6) + 'px';
      transBubble.style.top = (dragY - 56) + 'px';
    }

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
      url: "https://www.sabanci.com/"
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
        url: "https://www.sabanci.com/"
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
          url: "https://www.sabanci.com/"
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

function getActiveLanguage() {
  if (state.appLanguage) return state.appLanguage;
  const activeC = countriesList.find(c => c.code === state.activeCountry) || countriesList[0];
  return activeC.lang || "tr";
}

function getTranslatedField(idea, field) {
  if (!idea) return "";
  const activeLang = getActiveLanguage();
  const originalLang = idea.country === "TR" ? "tr" : (idea.country === "DE" ? "de" : (idea.country === "ES" ? "es" : "en"));
  
  const showOriginal = state.showOriginalIdeas && state.showOriginalIdeas[idea.id];
  if (showOriginal || activeLang === originalLang) {
    return idea[field] || "";
  }
  
  if (idea.translations && idea.translations[activeLang] && idea.translations[activeLang][field]) {
    return idea.translations[activeLang][field];
  }
  
  return idea[field] || "";
}

function renderTranslationButton(idea) {
  if (!idea) return "";
  const activeLang = getActiveLanguage();
  const originalLang = idea.country === "TR" ? "tr" : (idea.country === "DE" ? "de" : (idea.country === "ES" ? "es" : "en"));
  
  if (activeLang === originalLang) return "";
  
  state.translatedIdeaIds = state.translatedIdeaIds || {};
  const isTranslated = state.translatedIdeaIds[idea.id];
  
  const labels = {
    tr: { translate: "Otomatik Çevir", original: "Orijinal Dile Dön" },
    en: { translate: "Auto Translate", original: "Show Original" },
    de: { translate: "Automatisch übersetzen", original: "Original anzeigen" },
    es: { translate: "Traducir automáticamente", original: "Ver original" }
  };
  const activeLabels = labels[activeLang] || labels.tr;
  const buttonText = isTranslated ? activeLabels.original : activeLabels.translate;
  
  return `
    <button class="btn tiny ghost translate-toggle-btn" data-action="toggle-idea-translation" data-id="${esc(idea.id)}" style="padding: 4px 10px; font-size: 11px; border-radius: 8px; display: inline-flex; align-items: center; gap: 4px; border: 1px solid var(--line-soft); background: var(--surface); color: var(--accent); cursor: pointer; outline: none; margin-top: 6px;" title="Çeviri seçeneği">
      ${icon("languages", "style='width: 12px; height: 12px;'")}
      <span>${buttonText}</span>
    </button>
  `;
}

function translateIdeasInState() {
  const activeLang = getActiveLanguage();
  state.translatedIdeaIds = state.translatedIdeaIds || {};
  
  state.ideas.forEach(idea => {
    if (idea.originalTitle === undefined) {
      idea.originalTitle = idea.title || "";
      idea.originalSummary = idea.summary || "";
      idea.originalProblem = idea.problem || "";
      idea.originalSolution = idea.solution || "";
    }
    
    const originalLang = idea.country === "TR" ? "tr" : (idea.country === "DE" ? "de" : (idea.country === "ES" ? "es" : "en"));
    const showTranslated = state.translatedIdeaIds[idea.id] && (activeLang !== originalLang);
    
    if (showTranslated) {
      if (idea.translations && idea.translations[activeLang]) {
        const trans = idea.translations[activeLang];
        idea.title = trans.title || idea.originalTitle;
        idea.summary = trans.summary || idea.originalSummary;
        idea.problem = trans.problem || idea.originalProblem;
        idea.solution = trans.solution || idea.originalSolution;
      } else {
        idea.title = idea.originalTitle;
        idea.summary = idea.originalSummary;
        idea.problem = idea.originalProblem;
        idea.solution = idea.originalSolution;
      }
    } else {
      idea.title = idea.originalTitle;
      idea.summary = idea.originalSummary;
      idea.problem = idea.originalProblem;
      idea.solution = idea.originalSolution;
    }
  });
}

function scaleMockDataset() {
  // 1. Add new iştirakler (subsidiaries) dynamically
  const newSubs = [
    {
      id: "ak-yatirim",
      name: "Ak Yatırım Menkul Değerler A.Ş.",
      shortName: "Ak Yatırım",
      logo: "./assets/company-logos/ak-yatirim.svg",
      domain: "akyatirim.com.tr",
      type: "Yatırım & Finans",
      countries: ["Türkiye"],
      cities: ["İstanbul", "Ankara", "İzmir"],
      campuses: ["Ak Yatırım Genel Müdürlük", "Akatlar Ofis"],
      departments: ["Araştırma", "Portföy Yönetimi", "Kurumsal Finansman", "Hisse Senedi Piyasaları"]
    },
    {
      id: "ak-portfoy",
      name: "Ak Portföy Yönetimi A.Ş.",
      shortName: "Ak Portföy",
      logo: "./assets/company-logos/ak-portfoy.svg",
      domain: "akportfoy.com.tr",
      type: "Varlık Yönetimi",
      countries: ["Türkiye"],
      cities: ["İstanbul"],
      campuses: ["Ak Portföy HQ"],
      departments: ["Yatırım Komitesi", "Risk Yönetimi", "Fon Yönetimi"]
    },
    {
      id: "akcansa",
      name: "Akçansa Çimento Sanayi ve Ticaret A.Ş.",
      shortName: "Akçansa",
      logo: "./assets/company-logos/akcansa.svg",
      domain: "akcansa.com.tr",
      type: "Yapı Malzemeleri",
      countries: ["Türkiye"],
      cities: ["İstanbul", "Çanakkale", "Samsun"],
      campuses: ["Çanakkale Fabrika", "Büyükçekmece Fabrika", "Ambarlı Liman Terminali"],
      departments: ["Sürdürülebilirlik", "Üretim", "Lojistik", "Ar-Ge"]
    },
    {
      id: "aklease",
      name: "Ak Finansal Kiralama A.Ş.",
      shortName: "Aklease",
      logo: "./assets/company-logos/aklease.svg",
      domain: "aklease.com",
      type: "Finansal Kiralama",
      countries: ["Türkiye"],
      cities: ["İstanbul"],
      campuses: ["Aklease HQ"],
      departments: ["Kredi Tahsis", "Satış", "Finans"]
    },
    {
      id: "enerjisa-uretim",
      name: "Enerjisa Üretim Santralleri A.Ş.",
      shortName: "Enerjisa Üretim",
      logo: "./assets/company-logos/enerjisa-uretim.svg",
      domain: "enerjisauretim.com.tr",
      type: "Enerji Üretimi",
      countries: ["Türkiye"],
      cities: ["Adana", "Çanakkale", "Aydın", "Balıkesir"],
      campuses: ["Tufanbeyli Termik Santrali", "Bandırma Doğalgaz Santrali", "Çanakkale Rüzgar Santrali"],
      departments: ["Yeşil Enerji Operasyonları", "Santral Yönetimi", "Ar-Ge"]
    },
    {
      id: "sabanci-univ",
      name: "Sabancı Üniversitesi",
      shortName: "Sabancı Üni.",
      logo: "./assets/company-logos/sabanci-univ.svg",
      domain: "sabanciuniv.edu",
      type: "Eğitim & Akademi",
      countries: ["Türkiye"],
      cities: ["İstanbul"],
      campuses: ["Tuzla Kampüsü", "Karaköy İletişim Merkezi"],
      departments: ["Mühendislik ve Doğa Bilimleri", "Yönetim Bilimleri", "Araştırma ve Geliştirme (TÜMER)"]
    },
    {
      id: "sabanci-vakfi",
      name: "Hacı Ömer Sabancı Vakfı",
      shortName: "Sabancı Vakfı",
      logo: "./assets/company-logos/sabanci-vakfi.svg",
      domain: "sabancivakfi.org",
      type: "Sosyal Sorumluluk",
      countries: ["Türkiye"],
      cities: ["İstanbul", "Ankara"],
      campuses: ["Sabancı Vakfı Merkez"],
      departments: ["Sosyal Programlar", "Hibe Programları", "Ortaklıklar"]
    },
    {
      id: "akbank-uk",
      name: "Akbank AG London Branch",
      shortName: "Akbank UK",
      logo: "./assets/company-logos/akbank.svg",
      domain: "akbank.co.uk",
      type: "Banka",
      countries: ["Birleşik Krallık"],
      cities: ["Londra"],
      campuses: ["London City Office"],
      departments: ["International Trade Finance", "Treasury", "Compliance"]
    },
    {
      id: "akcansa-uk",
      name: "Akcansa UK Cement Trading Ltd.",
      shortName: "Akçansa UK",
      logo: "./assets/company-logos/akcansa.svg",
      domain: "akcansa.co.uk",
      type: "Yapı Malzemeleri",
      countries: ["Birleşik Krallık"],
      cities: ["Londra", "Bristol"],
      campuses: ["Bristol Port Terminal"],
      departments: ["Logistics", "Wholesale Sales"]
    },
    {
      id: "akbank-us",
      name: "Akbank US Representative Office",
      shortName: "Akbank US",
      logo: "./assets/company-logos/akbank.svg",
      domain: "akbank.com",
      type: "Banka",
      countries: ["Amerika Birleşik Devletleri"],
      cities: ["New York"],
      campuses: ["Manhattan Office"],
      departments: ["Investor Relations", "Corporate Banking Linkage"]
    },
    {
      id: "temsa-us",
      name: "Temsa North America Inc.",
      shortName: "Temsa US",
      logo: "./assets/company-logos/temsa.svg",
      domain: "temsa.com",
      type: "Otomotiv",
      countries: ["Amerika Birleşik Devletleri"],
      cities: ["Orlando", "Houston"],
      campuses: ["Orlando Distribution Center"],
      departments: ["Electric Bus Sales", "Spare Parts Logistics", "Customer Support"]
    },
    {
      id: "akbank-de",
      name: "Akbank AG (Frankfurt)",
      shortName: "Akbank DE",
      logo: "./assets/company-logos/akbank.svg",
      domain: "akbank.de",
      type: "Banka",
      countries: ["Almanya"],
      cities: ["Frankfurt", "Münih"],
      campuses: ["Frankfurt HQ"],
      departments: ["Retail Banking", "Risk Management", "Operations"]
    },
    {
      id: "kordsa-de",
      name: "Kordsa Germany GmbH",
      shortName: "Kordsa DE",
      logo: "./assets/company-logos/kordsa.svg",
      domain: "kordsa.com",
      type: "Sanayi",
      countries: ["Almanya"],
      cities: ["Münih"],
      campuses: ["Munich Composite Research Lab"],
      departments: ["Composite Engineering", "Quality Control"]
    },
    {
      id: "akbank-es",
      name: "Akbank Representative Office Spain",
      shortName: "Akbank ES",
      logo: "./assets/company-logos/akbank.svg",
      domain: "akbank.com",
      type: "Banka",
      countries: ["İspanya"],
      cities: ["Madrid"],
      campuses: ["Madrid Financial District Office"],
      departments: ["Corporate Relations", "Compliance"]
    },
    {
      id: "temsa-es",
      name: "Temsa España S.L.",
      shortName: "Temsa ES",
      logo: "./assets/company-logos/temsa.svg",
      domain: "temsa.es",
      type: "Otomotiv",
      countries: ["İspanya"],
      cities: ["Madrid", "Barcelona"],
      campuses: ["Madrid Hub"],
      departments: ["Mobility Sales", "Technical Service Operations"]
    }
  ];

  newSubs.forEach(sub => {
    if (!affiliationCompanies.some(c => c.id === sub.id)) {
      affiliationCompanies.push(sub);
    }
  });

  // 2. Generate 100+ unique users across countries
  const extraFirstNames = ["Ahmet", "Mehmet", "Ali", "Can", "Burak", "Eser", "Murat", "Selim", "Volkan", "Deniz", "Ayşe", "Zeynep", "Merve", "Fatma", "Selin", "Gizem", "Büşra", "Elif", "Derya", "Seda", "John", "Sarah", "David", "Robert", "Emily", "Michael", "Hans", "Dieter", "Carlos", "Maria", "Laura", "Pedro", "Emma", "Thomas", "Paul", "Sofia"];
  const extraLastNames = ["Yılmaz", "Demir", "Koç", "Yıldız", "Aydın", "Öztürk", "Kaya", "Şahin", "Çelik", "Arslan", "Smith", "Miller", "Vance", "Ruiz", "Ortega", "Müller", "Schmidt", "Weber", "García", "López", "Rodriguez"];
  
  const companyList = affiliationCompanies;
  const currentCount = demoUsers.length;
  const targetUserCount = 120;
  
  for (let i = currentCount; i < targetUserCount; i++) {
    const fn = extraFirstNames[i % extraFirstNames.length];
    const ln = extraLastNames[(i + 3) % extraLastNames.length];
    const fullName = `${fn} ${ln}`;
    const randCompany = companyList[i % companyList.length];
    const randCountry = randCompany.countries[0] || "Türkiye";
    const countryCode = randCountry === "Türkiye" ? "TR" : (randCountry === "Birleşik Krallık" || randCountry === "United Kingdom" ? "GB" : (randCountry === "Amerika Birleşik Devletleri" || randCountry === "United States" ? "US" : (randCountry === "Almanya" || randCountry === "Germany" ? "DE" : "ES")));
    
    const userRole = randCompany.type === "Banka" ? "Müşteri İlişkileri Yöneticisi" : (randCompany.type === "Sanayi" ? "Mühendis" : "Uzman");
    const dept = randCompany.departments[i % randCompany.departments.length];
    const avatarPhoto = `https://randomuser.me/api/portraits/${(i % 2 === 0) ? 'men' : 'women'}/${20 + (i % 60)}.jpg`;
    
    const u = {
      id: `u-${i}`,
      name: fullName,
      email: `${fn.toLowerCase()}.${ln.toLowerCase()}@${randCompany.domain}`,
      employeeId: `SA-${15000 + i}`,
      company: randCompany.name,
      companyId: randCompany.id,
      department: dept,
      location: randCompany.campuses[0] || "Ofis",
      city: randCompany.cities[0] || "İstanbul",
      region: "Marmara",
      role: userRole,
      roleKey: "employee",
      seniority: "Uzman",
      isManager: false,
      isAdmin: false,
      voteCreditBalance: Math.floor(Math.random() * 40) + 10,
      monthlyVoteCredit: 30,
      badges: ["Aktif Katılımcı"],
      country: countryCode,
      avatarUrl: avatarPhoto
    };
    
    demoUsers.push(u);
    namedAvatarPhotos[fullName] = avatarPhoto;
  }

  // 3. Generate 150+ ideas (10x original scale)
  const industryTrends = [
    {
      area: "FinTech & Dijital Bankacılık",
      tr: {
        title: "Açık Bankacılık ile KOBİ Alacak Sigortası",
        summary: "KOBİ bankacılığı işlemlerinde açık bankacılık verileriyle alacak riskini saniyeler içinde hesaplayıp poliçe kesen modül.",
        problem: "KOBİ'ler ticari alacak risklerini sigortalamak için çok fazla evrak ve uzun bekleme süreleriyle karşılaşıyor.",
        solution: "Akbank API'leri üzerinden KOBİ finansal verilerini analiz ederek anında kredi ve alacak sigortası sunan sistem."
      },
      en: {
        title: "SME Receivables Insurance with Open Banking",
        summary: "A module that calculates receivables risk in seconds using open banking data in SME banking transactions and issues policies.",
        problem: "SMEs face a lot of paperwork and long waiting times to insure commercial receivables risk.",
        solution: "A system that offers instant credit and receivables insurance by analyzing SME financial data through Akbank APIs."
      },
      de: {
        title: "KMU-Forderungsversicherung mit Open Banking",
        summary: "Ein Modul, das das Forderungsrisiko im KMU-Geschäft mithilfe von Open-Banking-Daten in Sekundenschnelle berechnet und Policen ausstellt.",
        problem: "KMU sind mit viel Papierkram und langen Wartezeiten konfrontiert, um das gewerbliche Forderungsrisiko abzusichern.",
        solution: "Ein System, das durch Analyse der KMU-Finanzdaten über Akbank-APIs sofortige Kredite und Forderungsversicherungen anbietet."
      },
      es: {
        title: "Seguro de Cuentas por Cobrar para Pymes con Banca Abierta",
        summary: "Un módulo que calcula el riesgo de cuentas por cobrar en segundos utilizando datos de banca abierta en transacciones de pymes.",
        problem: "Las pymes enfrentan mucho papeleo y largos tiempos de espera para asegurar el riesgo de cuentas por cobrar comerciales.",
        solution: "Un sistema que ofrece crédito y seguro de cuentas por cobrar al instante analizando datos financieros de pymes a través de APIs de Akbank."
      }
    },
    {
      area: "Sürdürülebilirlik & Yeşil Enerji",
      tr: {
        title: "Fabrika Bacaları İçin Akıllı Karbon İzleme Ağı",
        summary: "Çimsa ve Kordsa üretim tesislerindeki karbon emisyonunu anlık IoT sensörleriyle ölçüp bulutta raporlayan yeşil teknoloji.",
        problem: "Karbon salınımı beyanları periyodik ve manuel yapıldığı için hata payı yüksek ve optimizasyon gecikiyor.",
        solution: "Fabrika bacalarına takılan IoT sensörleriyle emisyonu saniyelik kaydeden ve sınır aşımında uyaran akıllı yazılım."
      },
      en: {
        title: "Smart Carbon Monitoring Network for Factory Chimneys",
        summary: "Green technology that measures carbon emissions in Cimsa and Kordsa production facilities with instant IoT sensors and reports to the cloud.",
        problem: "Since carbon emission statements are periodic and manual, the margin of error is high and optimization is delayed.",
        solution: "Smart software that records emissions in seconds with IoT sensors attached to factory chimneys and warns in case of limit violations."
      },
      de: {
        title: "Intelligentes Kohlenstoff-Überwachungsnetzwerk für Schornsteine",
        summary: "Grüne Technologie, die Kohlenstoffemissionen in Cimsa- und Kordsa-Produktionsstätten mit IoT-Sensoren misst und in der Cloud meldet.",
        problem: "Da CO2-Meldungen periodisch und manuell erfolgen, ist die Fehlerquote hoch und die Optimierung verzögert sich.",
        solution: "Intelligente Software, die Emissionen im Sekundentakt mit an Schornsteinen angebrachten IoT-Sensoren erfasst und bei Überschreitungen warnt."
      },
      es: {
        title: "Red de Monitoreo de Carbono Inteligente para Chimeneas",
        summary: "Tecnología verde que mide las emisiones de carbono en las plantas de Cimsa y Kordsa con sensores IoT instantáneos y reporta a la nube.",
        problem: "Dado que las declaraciones de emisión de carbono son periódicas and manuales, el margen de error es alto y la optimización se retrasa.",
        solution: "Software inteligente que registra las emisiones en segundos con sensores IoT conectados a las chimeneas y advierte en caso de infracciones."
      }
    },
    {
      area: "Yapay Zekâ & Derin Teknoloji",
      tr: {
        title: "AI Destekli Lojistik Rota Optimizasyonu",
        summary: "CarrefourSA sevkiyat kamyonları için trafik, hava durumu ve sipariş yoğunluğunu işleyen dinamik rota planlama algoritması.",
        problem: "Statik rotalar nedeniyle teslimat süreleri uzuyor ve yakıt tüketimi artıyor.",
        solution: "Her sabah siparişleri ve yol durumunu analiz ederek en verimli teslimat haritasını çıkaran yapay zeka motoru."
      },
      en: {
        title: "AI-Powered Logistics Route Optimization",
        summary: "Dynamic route planning algorithm processing traffic, weather, and order density for CarrefourSA delivery trucks.",
        problem: "Delivery times are prolonged and fuel consumption increases due to static routes.",
        solution: "An AI engine that analyzes orders and road conditions every morning to create the most efficient delivery map."
      },
      de: {
        title: "KI-gestützte Logistik-Routenoptimierung",
        summary: "Dynamischer Routenplanungsalgorithmus, der Verkehr, Wetter und Auftragsdichte für CarrefourSA-Lieferwagen verarbeitet.",
        problem: "Statische Routen verlängern die Lieferzeiten und erhöhen den Kraftstoffverbrauch.",
        solution: "Eine KI-Engine, die jeden Morgen Bestellungen und Straßenverhältnisse analysiert, um die effizienteste Lieferkarte zu erstellen."
      },
      es: {
        title: "Optimización de Rutas Logísticas con IA",
        summary: "Algoritmo dinámico de planificación de rutas que procesa el tráfico, el clima y la densidad de pedidos para camiones de CarrefourSA.",
        problem: "Los tiempos de entrega se prolongan y el consumo de combustible aumenta debido a rutas estáticas.",
        solution: "Un motor de IA que analiza los pedidos y las condiciones de la carretera cada mañana para generar el mapa de entrega más eficiente."
      }
    },
    {
      area: "PropTech & Akıllı Şehirler",
      tr: {
        title: "Akıllı Binalar İçin Dinamik HVAC Kontrolü",
        summary: "Sabancı Center ve iştirak plazalarında sensör verileriyle ısıtma ve soğutmayı otomatik ayarlayan derin öğrenme modeli.",
        problem: "Binalar boş olduğunda bile HVAC sistemleri çalışıyor ve yüksek enerji israfına yol açıyor.",
        solution: "Kat doluluk oranları ve dış ortam sıcaklık tahminlerini işleyerek iklimlendirmeyi optimize eden AI entegrasyonu."
      },
      en: {
        title: "Dynamic HVAC Control for Smart Buildings",
        summary: "Deep learning model that automatically adjusts heating and cooling with sensor data in Sabanci Center and affiliate plazas.",
        problem: "HVAC systems run even when buildings are empty, leading to high energy waste.",
        solution: "AI integration that optimizes climatization by processing floor occupancy rates and outdoor temperature forecasts."
      },
      de: {
        title: "Dynamische HVAC-Steuerung für intelligente Gebäude",
        summary: "Deep-Learning-Modell, das die Heizung und Kühlung im Sabanci Center und in Partner-Plazas mit Sensordaten automatisch anpasst.",
        problem: "Klimaanlagen laufen auch bei leeren Gebäuden, was zu einer hohen Energieverschwendung führt.",
        solution: "KI-Integration, die die Klimatisierung durch Verarbeitung der Belegungsraten und Außentemperaturprognosen optimiert."
      },
      es: {
        title: "Control Dinámico de HVAC para Edificios Inteligentes",
        summary: "Modelo de aprendizaje profundo que ajusta automáticamente la calefacción y refrigeración con datos de sensores en Sabanci Center.",
        problem: "Los sistemas de HVAC funcionan incluso cuando los edificios están vacíos, lo que genera un gran desperdicio de energía.",
        solution: "Integración de IA que optimiza la climatización procesando las tasas de ocupación de pisos y los pronósticos de temperatura exterior."
      }
    }
  ];

  const currentIdeaCount = initialIdeas.length;
  const targetIdeaCount = 800;
  
  for (let i = currentIdeaCount; i < targetIdeaCount; i++) {
    const trend = industryTrends[i % industryTrends.length];
    const randCompany = companyList[i % companyList.length];
    const randCountry = randCompany.countries[0] || "Türkiye";
    const countryCode = randCountry === "Türkiye" ? "TR" : (randCountry === "Birleşik Krallık" || randCountry === "United Kingdom" ? "GB" : (randCountry === "Amerika Birleşik Devletleri" || randCountry === "United States" ? "US" : (randCountry === "Almanya" || randCountry === "Germany" ? "DE" : "ES")));
    
    const randomUser = demoUsers[Math.floor(Math.random() * demoUsers.length)];
    const id = `idea-gen-${i}`;
    const ticker = `NIE-${100 + i}`;
    
    const originalLang = countryCode === "TR" ? "tr" : (countryCode === "DE" ? "de" : (countryCode === "ES" ? "es" : "en"));
    const title = trend[originalLang].title + ` (${randCompany.shortName})`;
    const summary = trend[originalLang].summary;
    const problem = trend[originalLang].problem;
    const solution = trend[originalLang].solution;
    
    const translations = {
      tr: { title: trend.tr.title + ` (${randCompany.shortName})`, summary: trend.tr.summary, problem: trend.tr.problem, solution: trend.tr.solution },
      en: { title: trend.en.title + ` (${randCompany.shortName})`, summary: trend.en.summary, problem: trend.en.problem, solution: trend.en.solution },
      de: { title: trend.de.title + ` (${randCompany.shortName})`, summary: trend.de.summary, problem: trend.de.problem, solution: trend.de.solution },
      es: { title: trend.es.title + ` (${randCompany.shortName})`, summary: trend.es.summary, problem: trend.es.problem, solution: trend.es.solution }
    };

    initialIdeas.push({
      id: id,
      title: title,
      summary: summary,
      problem: problem,
      solution: solution,
      type: i % 2 === 0 ? "Yeni ürün / hizmet" : "Süreç otomasyonu",
      company: randCompany.name,
      companyId: randCompany.id,
      department: randCompany.departments[0] || "İnovasyon",
      location: randCompany.campuses[0] || "Yerleşke",
      city: randCompany.cities[0] || "İstanbul",
      authorId: randomUser.id,
      authorLabel: randomUser.name,
      anonymity: "İsmimle paylaş",
      visibility: "Holding geneli",
      status: i % 3 === 0 ? "done" : (i % 3 === 1 ? "pilot" : "review"),
      estimatedImpact: "Yüksek",
      estimatedCost: i % 2 === 0 ? "Orta" : "Düşük",
      implementationTime: "3 ay",
      successMetric: "Performans ve verimlilik artışı",
      riskNotes: "Süreç entegrasyonu gecikmeleri.",
      communityScore: 70 + (i % 25),
      strategicScore: 75 + (i % 20),
      aiScore: 72 + (i % 23),
      credits: 100 + (i % 200),
      supporters: 10 + (i % 40),
      country: countryCode,
      comments: [
        { user: "Can Koç", body: "Sinerji analizi çok tutarlı görünüyor.", manager: true }
      ],
      tags: [trend.area.split(" ")[0], randCompany.shortName],
      createdAt: `2026-06-${10 + (i % 8)}`,
      marketTicker: ticker,
      marketShares: 1000,
      marketVolume: 1200 + (i * 15),
      marketChange: (i % 2 === 0 ? 1 : -1) * (1.5 + (i % 12)),
      translations: translations
    });
  }

  // 4. Generate 35+ teams (10x original scale)
  const currentTeamCount = initialTeams.length;
  const targetTeamCount = 35;
  for (let i = currentTeamCount; i < targetTeamCount; i++) {
    const randCompany = companyList[i % companyList.length];
    const randIdea = initialIdeas[i % initialIdeas.length];
    const creatorUser = demoUsers[Math.floor(Math.random() * demoUsers.length)];
    
    initialTeams.push({
      id: `team-gen-${i}`,
      name: `${randCompany.shortName} İnovasyon Takımı ${i}`,
      description: `${randCompany.shortName} bünyesinde ${randIdea.title} projesinin hayata geçirilmesi için kurulan teknik ekip.`,
      area: randIdea.tags[0] || "Teknoloji",
      ideaId: randIdea.id,
      createdBy: creatorUser.id,
      status: "active",
      createdAt: `2026-05-${10 + (i % 15)}`,
      roles: [
        { id: `tr-gen-${i}-1`, title: "Ürün Lideri", icon: "briefcase", filled: true, userId: creatorUser.id, skills: ["Yönetim", "İnovasyon"] },
        { id: `tr-gen-${i}-2`, title: "Geliştirici", icon: "brain", filled: false, userId: null, skills: ["Python", "JS"] }
      ],
      messages: [
        { userId: creatorUser.id, body: "Takım çalışmalarına başladık. Katkılarınızı bekliyoruz.", time: "10:30" }
      ],
      tags: [randCompany.shortName, "İnovasyon"]
    });
  }

  // 5. Generate Announcements
  const aiImages = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1531297172867-11b2413e1de2?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80"
  ];

  for (let i = 0; i < 400; i++) {
    const randCompany = companyList[i % companyList.length];
    const randCountry = randCompany.countries[0] || "Türkiye";
    const countryCode = randCountry === "Türkiye" ? "TR" : (randCountry === "Birleşik Krallık" || randCountry === "United Kingdom" ? "GB" : (randCountry === "Amerika Birleşik Devletleri" || randCountry === "United States" ? "US" : (randCountry === "Almanya" || randCountry === "Germany" ? "DE" : "ES")));
    const randomUser = demoUsers[Math.floor(Math.random() * demoUsers.length)];
    
    state.announcements.push({
      id: `ann-gen-${i}`,
      title: `Yeni Proje Lansmanı: ${randCompany.shortName} AI İnisiyatifi`,
      author: randomUser.name,
      authorId: randomUser.id,
      companyId: randCompany.id,
      type: "Topluluk",
      area: "Yenilikçi Fikirler",
      importanceScore: 4,
      body: `Merhaba ${randCompany.shortName} ekibi, verimliliği artıracak yeni nesil araçlarımızı kullanıma sunuyoruz. Proje #${i+10} kapsamında yeni denemeler yapılıyor! Desteklerinizi bekliyoruz.`,
      date: `2026-06-${(10 + (i % 15)).toString().padStart(2, '0')}`,
      comments: [],
      likes: 15 + i * 2,
      imageUrl: i % 2 === 0 ? aiImages[i % aiImages.length] : "",
      country: countryCode
    });
  }

  // 6. Generate AI Agenda Items
  for (let i = 0; i < 300; i++) {
    const randCompany = companyList[i % companyList.length];
    state.agendaItems.push({
      id: `ag-gen-ai-${i}`,
      title: `AI Analizi: ${randCompany.shortName} Sürdürülebilirlik Trendleri`,
      body: `${randCompany.shortName} bünyesinde sunulan son ${10 + i} fikrin analizi sonucunda yenilikçi projelerde %30 artış tespit edildi. Stratejik hedef uyumu 85/100 seviyesindedir.`,
      category: "AI Host",
      date: `2026-06-${(10 + (i % 15)).toString().padStart(2, '0')}`,
      tags: ["ai-raporu", "trend", randCompany.shortName.toLowerCase().replace(/\s+/g, '')],
      author: "AI Denetçi",
      isAiGenerated: true
    });
  }

  // Assign ideas and teams directly to the active state so they populate
  const equities = [15, 20, 25, 30, 35, 40];
  state.ideas = initialIdeas.map((idea, idx) => {
    idea.openEquity = idea.openEquity || equities[idx % equities.length];
    return idea;
  });
  state.teams = initialTeams;

  // Initialize the 12 studios
  state.studios = [
    { id: "studio-ops", name: "Operasyon Çözüm Stüdyosu", category: "Operasyon", status: "Aktif", popularity: 94, createdAt: "2026-06-01", description: "Şube, onay ve çağrı merkezi problemlerini hızlı pilotlara çeviren çalışma alanı.", linkedTeams: [], linkedIdeas: [] },
    { id: "studio-ai", name: "AI Deney Laboratuvarı", category: "Yapay Zekâ", status: "Aktif", popularity: 88, createdAt: "2026-05-18", description: "Platform içi veriyle analiz, özetleme ve karar destek prototipleri geliştiren stüdyo.", linkedTeams: [], linkedIdeas: [] },
    { id: "studio-green", name: "Yeşil Finans Stüdyosu", category: "Sürdürülebilirlik", status: "Kuruluyor", popularity: 76, createdAt: "2026-06-05", description: "ESG, karbon takip ve yeşil finans ürünlerini iş birliğiyle olgunlaştırır.", linkedTeams: [], linkedIdeas: [] },
    { id: "studio-digital", name: "Dijital Ürün Stüdyosu", category: "FinTech", status: "Aktif", popularity: 81, createdAt: "2026-05-28", description: "Moka, ödeme ve dijital onboarding akışlarını ürünleştiren ekip alanı.", linkedTeams: [], linkedIdeas: [] },
    { id: "studio-industry", name: "Sanayi & Malzeme İnovasyon Stüdyosu", category: "Sanayi", status: "Aktif", popularity: 85, createdAt: "2026-05-20", description: "Kordsa ve Çimsa bünyesindeki kompozit malzeme ve çimento Ar-Ge projeleri stüdyosu.", linkedTeams: [], linkedIdeas: [] },
    { id: "studio-energy", name: "Enerji Teknolojileri Stüdyosu", category: "Yeşil Enerji", status: "Aktif", popularity: 90, createdAt: "2026-06-02", description: "Enerjisa Üretim yenilenebilir enerji, rüzgar ve hidrojen depolama teknolojileri stüdyosu.", linkedTeams: [], linkedIdeas: [] },
    { id: "studio-mobility", name: "Mobilite & Otomotiv Stüdyosu", category: "Mobilite", status: "Aktif", popularity: 83, createdAt: "2026-05-15", description: "Temsa elektrikli ve otonom otobüs yazılım/donanım entegrasyonu stüdyosu.", linkedTeams: [], linkedIdeas: [] },
    { id: "studio-retail", name: "Perakende & E-Ticaret Stüdyosu", category: "Perakende", status: "Aktif", popularity: 79, createdAt: "2026-06-03", description: "Teknosa ve CarrefourSA müşteri deneyimi, akıllı raf ve lojistik projeleri stüdyosu.", linkedTeams: [], linkedIdeas: [] },
    { id: "studio-sme", name: "KOBİ Destek ve Çözüm Stüdyosu", category: "KOBİ", status: "Kuruluyor", popularity: 72, createdAt: "2026-06-04", description: "KOBİ bankacılığı, sigortacılık ve finansman çözümleri stüdyosu.", linkedTeams: [], linkedIdeas: [] },
    { id: "studio-proptech", name: "Akıllı Şehirler & PropTech Stüdyosu", category: "PropTech", status: "Aktif", popularity: 80, createdAt: "2026-05-22", description: "Akıllı bina yönetim sistemleri, HVAC ve plaza iklimlendirme projeleri stüdyosu.", linkedTeams: [], linkedIdeas: [] },
    { id: "studio-marketing", name: "Müşteri Deneyimi & Pazarlama Stüdyosu", category: "Pazarlama", status: "Aktif", popularity: 86, createdAt: "2026-05-25", description: "Agesa ve Aksigorta müşteri edinimi, poliçe pazarlama ve UX tasarım stüdyosu.", linkedTeams: [], linkedIdeas: [] },
    { id: "studio-cloud", name: "Derin Teknoloji & Bulut Girişim Stüdyosu", category: "Derin Teknoloji", status: "Aktif", popularity: 89, createdAt: "2026-05-30", description: "Büyük veri analitiği, siber güvenlik ve kurumsal bulut çözümleri Ar-Ge stüdyosu.", linkedTeams: [], linkedIdeas: [] }
  ];

  // Link a subset of ideas and teams to studios to avoid cluttering but show rich data
  state.ideas.forEach(idea => {
    let matchedStudio = state.studios.find(s => idea.tags && idea.tags.some(tag => s.category.toLowerCase().includes(tag.toLowerCase())));
    if (!matchedStudio) {
      matchedStudio = state.studios.find(s => s.category.toLowerCase().includes(idea.type.toLowerCase()));
    }
    if (!matchedStudio) {
      matchedStudio = state.studios[Math.floor(Math.random() * state.studios.length)];
    }
    if (matchedStudio && matchedStudio.linkedIdeas.length < 5 && !matchedStudio.linkedIdeas.includes(idea.id)) {
      matchedStudio.linkedIdeas.push(idea.id);
    }
  });

  state.teams.forEach(team => {
    const idea = state.ideas.find(i => i.id === team.ideaId);
    let matchedStudio;
    if (idea) {
      matchedStudio = state.studios.find(s => s.linkedIdeas.includes(idea.id));
    }
    if (!matchedStudio) {
      matchedStudio = state.studios.find(s => s.category.toLowerCase() === team.area.toLowerCase());
    }
    if (!matchedStudio) {
      matchedStudio = state.studios[Math.floor(Math.random() * state.studios.length)];
    }
    if (matchedStudio && matchedStudio.linkedTeams.length < 4 && !matchedStudio.linkedTeams.includes(team.id)) {
      matchedStudio.linkedTeams.push(team.id);
    }
  });

  // 7. Generate datasets for Veri&Bilgi (dataSets)
  state.dataSets = [];
  const datasetTrends = [
    {
      area: "FinTech & Dijital Bankacılık",
      tr: { title: "Açık Bankacılık API Kullanım Metrikleri", summary: "Akbank API geçiş süreleri, yük testleri ve aylık çağrı loglarının istatistiksel dağılımı." },
      en: { title: "Open Banking API Usage Metrics", summary: "Statistical distribution of Akbank API transition times, load tests, and monthly call logs." },
      de: { title: "Open Banking API-Nutzungsmetriken", summary: "Statistische Verteilung von Akbank-API-Übergangszeiten, Lasttests und monatlichen Anrufprotokollen." },
      es: { title: "Métricas de Uso de API de Banca Abierta", summary: "Distribución estadística de los tiempos de transición de la API de Akbank, pruebas de carga y registros de llamadas mensuales." }
    },
    {
      area: "Sürdürülebilirlik & Yeşil Enerji",
      tr: { title: "Rüzgar Enerjisi Üretim Verimliliği Raporu", summary: "Enerjisa Üretim Çanakkale santralinin rüzgar hızı ve anlık megavat üretim ilişkisi ham verisi." },
      en: { title: "Wind Energy Generation Efficiency Report", summary: "Raw data of wind speed and instantaneous megawatt generation relationship of Enerjisa Uretim Canakkale power plant." },
      de: { title: "Effizienzbericht für Windkraftanlagen", summary: "Rohdaten zum Verhältnis von Windgeschwindigkeit und momentaner Megawatt-Erzeugung des Kraftwerks Enerjisa Uretim Canakkale." },
      es: { title: "Informe de Eficiencia de Generación de Energía Eólica", summary: "Datos brutos de la velocidad del viento y la relación de generación de megavatios instantáneos de la planta de energía Enerjisa Uretim Canakkale." }
    },
    {
      area: "Yapay Zekâ & Derin Teknoloji",
      tr: { title: "SaaS LLM Entegrasyonu Güvenlik Logları", summary: "Kurumsal yapay zeka asistanı isteklerinin anonimleştirilmiş güvenlik audit ve token harcama dökümü." },
      en: { title: "SaaS LLM Integration Security Logs", summary: "Anonymized security audit and token expenditure breakdown of corporate AI assistant requests." },
      de: { title: "SaaS LLM-Integration Sicherheitslogs", summary: "Anonymisiertes Sicherheitsaudit und Token-Ausgabenaufschlüsselung der Anfragen des KI-Assistenten." },
      es: { title: "Registros de Seguridad de Integración SaaS LLM", summary: "Auditoría de seguridad anonimizada y desglose de gastos de tokens de solicitudes del asistente de IA corporativo." }
    },
    {
      area: "PropTech & Akıllı Şehirler",
      tr: { title: "Sabancı Center Doluluk Oranları Zaman Serisi", summary: "Kat doluluk sensörlerinin 6 aylık periyotta çalışma saatleri ve hafta sonu bazında ürettiği doluluk ham verileri." },
      en: { title: "Sabanci Center Occupancy Time Series", summary: "Raw occupancy data generated by floor occupancy sensors over a 6-month period on working hours and weekends." },
      de: { title: "Sabanci Center Belegungs-Zeitreihen", summary: "Rohdaten zur Belegung, die von Etagensensoren über einen Zeitraum von 6 Monaten während der Arbeitszeit und an Wochenenden erfasst wurden." },
      es: { title: "Serie Temporal de Ocupación de Sabanci Center", summary: "Datos brutos de ocupación generados por sensores de ocupación de piso durante un período de 6 meses en horas laborables y fines de semana." }
    },
    {
      area: "Akıllı Lojistik & Dağıtım",
      tr: { title: "CarrefourSA Gebze Depo Çıkış Zamanlama Seti", summary: "Sipariş hazırlama süreleri, sevkiyat kuyruk uzunluğu ve dağıtım araçlarının yükleme optimizasyon parametreleri." },
      en: { title: "CarrefourSA Gebze Warehouse Dispatch Timing Set", summary: "Order preparation times, dispatch queue length, and loading optimization parameters of distribution vehicles." },
      de: { title: "CarrefourSA Gebze Lager-Versandzeitplan", summary: "Auftragsbereitstellungszeiten, Warteschlangenlänge im Versand und Parameter zur Ladeoptimierung der Verteilerfahrzeuge." },
      es: { title: "Conjunto de Tiempos de Despacho de Almacén CarrefourSA Gebze", summary: "Tiempos de preparación de pedidos, longitud de la cola de despacho y parámetros de optimización de carga de vehículos de distribución." }
    },
    {
      area: "Operasyon",
      tr: { title: "Müşteri İlişkileri Yanıt Süresi Dağılımı", summary: "Çağrı merkezi ve e-posta taleplerinin öncelik derecelerine göre çözümlenme süreleri ham verisi." },
      en: { title: "Customer Relations Response Time Distribution", summary: "Raw data of resolution times of call center and email requests according to priority levels." },
      de: { title: "Verteilung der Antwortzeiten im Kundenservice", summary: "Rohdaten der Bearbeitungszeiten von Callcenter- und E-Mail-Anfragen nach Prioritätsstufen." },
      es: { title: "Distribución del Tiempo de Respuesta de Relaciones con Clientes", summary: "Datos brutos de los tiempos de resolución de llamadas del centro de contacto y solicitudes de correo electrónico según niveles de prioridad." }
    },
    {
      area: "Borsa",
      tr: { title: "İştirak Hisse Dalgalanması ve Hacim Geçmişi", summary: "Borsa İstanbul'da işlem gören grup şirketlerinin son 1 yıllık hacim, volatility ve hareketli ortalama veri tabanı." },
      en: { title: "Affiliate Share Volatility and Volume History", summary: "Volume, volatility, and moving average database of group companies traded on Borsa Istanbul for the last 1 year." },
      de: { title: "Volatilität und Volumenhistorie von Beteiligungen", summary: "Volumen-, Volatilitäts- und gleitende Durchschnittsdatenbank der an der Borsa Istanbul gehandelten Gruppenunternehmen für das letzte Jahr." },
      es: { title: "Historial de Volatilidad y Volumen de Acciones de Afiliadas", summary: "Base de datos de volumen, volatilidad y promedio móvil de las empresas del grupo que cotizan en Borsa Istanbul durante el último año." }
    },
    {
      area: "Diğer",
      tr: { title: "Grup İçi İnovasyon Yarışması Başvuru İstatistikleri", summary: "Yıllara göre sunulan fikir sayıları, iştirak bazlı katılım yüzdeleri ve ödül alan projelerin kategorik dağılımı." },
      en: { title: "In-Group Innovation Challenge Application Statistics", summary: "Number of ideas submitted by year, participation percentages based on affiliates, and categorical distribution of award-winning projects." },
      de: { title: "Bewerbungsstatistiken für den konzerneigenen Innovationspreis", summary: "Anzahl der eingereichten Ideen nach Jahren, Beteiligungsquoten nach Tochtergesellschaften und Verteilung der prämierten Projekte." },
      es: { title: "Estadísticas de Solicitud de Desafío de Innovación Interno del Grupo", summary: "Número de ideas enviadas por año, porcentajes de participación según afiliadas y distribución categórica de proyectos galardonados." }
    }
  ];

  const countries = ["TR", "US", "GB", "DE", "ES"];
  let datasetIdCount = 0;
  countries.forEach(country => {
    const lang = country === "TR" ? "tr" : (country === "DE" ? "de" : (country === "ES" ? "es" : "en"));
    for (let i = 0; i < 12; i++) {
      const trend = datasetTrends[i % datasetTrends.length];
      const randCompany = companyList[i % companyList.length];
      const randomUser = demoUsers[Math.floor(Math.random() * demoUsers.length)];
      
      state.dataSets.push({
        id: `ds-gen-${datasetIdCount++}`,
        title: trend[lang].title + ` (${randCompany.shortName})`,
        summary: trend[lang].summary,
        sharedBy: randomUser.name,
        companyId: randCompany.id,
        type: i % 2 === 0 ? "Kurumsal" : "Topluluk",
        area: trend.area,
        importanceScore: 3 + (i % 3),
        date: `2026-06-${(10 + (i % 10)).toString().padStart(2, '0')}`,
        comments: [],
        likes: 10 + i * 3,
        downloads: 20 + i * 5,
        country: country
      });
    }
  });
}

scaleMockDataset();
ensureSocialEnhancements();
render();

