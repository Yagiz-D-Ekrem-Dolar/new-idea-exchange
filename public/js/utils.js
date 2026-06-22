function currentUser() {
  const c = state.activeCountry || state.currentCountry || "TR";
  const userConfigs = {
    TR: { id: "u3", name: "Can Koç", email: "can.koc@sabanci.example", photo: "https://randomuser.me/api/portraits/men/75.jpg" },
    GB: { id: "u3", name: "Can Koç", email: "can.koc.uk@sabanci.example", photo: "https://randomuser.me/api/portraits/men/75.jpg" },
    US: { id: "u3", name: "Can Koç", email: "can.koc.us@sabanci.example", photo: "https://randomuser.me/api/portraits/men/75.jpg" },
    DE: { id: "u3", name: "Can Koç", email: "can.koc.de@sabanci.example", photo: "https://randomuser.me/api/portraits/men/75.jpg" },
    ES: { id: "u3", name: "Can Koç", email: "can.koc.es@sabanci.example", photo: "https://randomuser.me/api/portraits/men/75.jpg" }
  };
  const config = userConfigs[c] || userConfigs.TR;

  const baseUser = {
    id: config.id,
    name: config.name,
    email: config.email,
    employeeId: "SA-22018",
    roleKey: "manager",
    seniority: "Yönetici",
    isManager: true,
    isAdmin: false,
    voteCreditBalance: 24,
    monthlyVoteCredit: 40,
    badges: ["Ekipler Arası Köprü", "Pilot Proje Katılımcısı"],
    supportedIdeas: ["idea-1", "idea-2", "idea-3"],
    photo: config.photo
  };

  const adapted = { ...baseUser, country: c };
  Object.defineProperty(adapted, "voteCreditBalance", {
    get: function() { return state.marketBudget; },
    set: function(val) { state.marketBudget = val; },
    enumerable: true
  });

  switch (c) {
    case "TR":
      adapted.company = "Garanti Bankası A.Ş. (Garanti BBVA)";
      adapted.companyId = "garanti-bbva";
      adapted.department = "Dijital Bankacılık";
      adapted.location = "Garanti BBVA Genel Müdürlük";
      adapted.city = "İstanbul";
      adapted.region = "Marmara";
      adapted.role = "İnovasyon Yöneticisi";
      break;
    case "UK":
    case "GB":
      adapted.company = "BBVA CIB US UK";
      adapted.companyId = "bbva-cib-us-uk";
      adapted.department = "Strategy";
      adapted.location = "New York Office";
      adapted.city = "New York";
      adapted.region = "England";
      adapted.role = "Strategy Manager";
      break;
    case "US":
      adapted.company = "BBVA Colombia Inc.";
      adapted.companyId = "bbva-colombia-us";
      adapted.department = "Operations";
      adapted.location = "Chattanooga Plant";
      adapted.city = "Chattanooga";
      adapted.region = "TN";
      adapted.role = "Operations Director";
      break;
    case "DE":
      adapted.company = "Garanti BBVA AG";
      adapted.companyId = "garanti-bbva-de";
      adapted.department = "Corporate Banking";
      adapted.location = "Frankfurt HQ";
      adapted.city = "Frankfurt";
      adapted.region = "Hesse";
      adapted.role = "Corporate Manager";
      break;
    case "ES":
      adapted.company = "BBVA CIB US Spain";
      adapted.companyId = "bbva-cib-us-spain";
      adapted.department = "Sales";
      adapted.location = "Madrid Office";
      adapted.city = "Madrid";
      adapted.region = "Madrid";
      adapted.role = "Sales Director";
      break;
    default:
      adapted.company = "Banco Bilbao Vizcaya Argentaria S.A.";
      adapted.companyId = "bbva-group";
      adapted.department = "Strateji";
      adapted.location = "Ciudad BBVA";
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
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="bbva-coin-icon" style="width: 1.2em; height: 1.2em; vertical-align: text-bottom; display: inline-block; filter: drop-shadow(0 2px 4px rgba(0,130,201,0.4));" ${extraAttrs}>
      <circle cx="50" cy="50" r="45" fill="url(#bbvaGrad)" stroke="#004481" stroke-width="3"/>
      <circle cx="50" cy="50" r="38" fill="none" stroke="#ffffff" stroke-width="1" stroke-dasharray="2 2" opacity="0.6"/>
      <text x="50" y="62" font-family="'Space Grotesk', Inter, sans-serif" font-size="34" font-weight="900" fill="#FFFFFF" text-anchor="middle">B</text>
      <defs>
        <linearGradient id="bbvaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#48aeef" />
          <stop offset="50%" stop-color="#0082c9" />
          <stop offset="100%" stop-color="#004481" />
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
      cv: cUser.cv || "Eğitim: BBVA University. Deneyim: 8 yıl süreç geliştirme ve operasyon yönetimi.",
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
        companyId: du.companyId || "bbva-group",
        role: du.role,
        team: du.department,
        city: du.city || "İstanbul",
        campus: du.location || "Ciudad BBVA",
        photo: du.photo || du.avatarUrl || profilePhotos[du.id] || "https://randomuser.me/api/portraits/men/75.jpg",
        status: "Aktif",
        bio: du.bio || "İnovasyon ve verimlilik odaklı çalışıyorum.",
        cv: du.cv || "Eğitim: BBVA University. Deneyim: 8 yıl süreç geliştirme ve operasyon yönetimi.",
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
  const activeC = countriesList.find(c => c.code === state.activeCountry) || countriesList[0];
  const countryCompanies = affiliationCompanies.filter(comp => comp.countries && comp.countries.includes(countryNameTR[activeC.code] || activeC.name));
  if (state.affiliationFilter === "all") return countryCompanies.map(company => company.id);
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
  return state.messageSpaces.filter(space => ids.includes(space.companyId) || space.companyId === "bbva-group");
}

function syncAnnouncementDraftCompany(companyId) {
  const company = companyById(companyId);
  state.announcementDraft.companyId = company.id;
  state.announcementDraft.country = company.countries[0] || "";
  state.announcementDraft.city = company.cities[0] || "";
  state.announcementDraft.campus = company.campuses[0] || "";
  state.announcementDraft.department = company.departments[0] || "Tüm ekipler";
}

function marketCompanyForIdea(idea) {
  return companyById(idea.companyId || "is-new");
}

function marketPrice(idea) {
  // Every idea starts from the same 100 BBVA base valuation; marketChange (driven by
  // buy/sell activity and per-idea performance drift) is applied on top so prices
  // actually move with trading instead of staying frozen at the base forever.
  const base = Number(idea.marketPrice || 100);
  const change = Number(idea.marketChange || 0);
  return Math.max(20, Math.round(base * (1 + change / 100)));
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
  return `${Math.round(value).toLocaleString("tr-TR")} BBVA`;
}

function formatCurrencyHTML(value, size = "normal") {
  return `<span class="bbva-coin-inline" style="display: inline-flex; align-items: center; gap: 4px; font-weight: 600; vertical-align: middle;">${saCoinIcon(size)} <span>${Math.round(value).toLocaleString("tr-TR")}</span> <span style="font-weight: 800; font-size: 0.85em; color: var(--primary);">SA</span></span>`;
}

function saCoinIcon(size = "normal") {
  const sizePx = size === "large" ? "20" : size === "small" ? "13" : "16";
  return `
    <svg class="sa-coin-svg" width="${sizePx}" height="${sizePx}" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; display: inline-block; filter: drop-shadow(0px 1px 1.5px rgba(0,0,0,0.15));">
      <circle cx="18" cy="18" r="16" fill="url(#bbvaGrad)" stroke="#004481" stroke-width="1.5"/>
      <circle cx="18" cy="18" r="13" fill="none" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="2 1" opacity="0.6"/>
      <text x="18" y="23" font-family="'Space Grotesk', Inter, sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF" text-anchor="middle">B</text>
      <defs>
        <linearGradient id="bbvaGrad" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#48aeef"/>
          <stop offset="30%" stop-color="#0082c9"/>
          <stop offset="70%" stop-color="#004481"/>
          <stop offset="100%" stop-color="#072146"/>
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
  const activeC = countriesList.find(c => c.code === state.activeCountry) || countriesList[0];
  const countryName = activeC ? activeC.name : "Global";
  return `
    <span class="bbva-lockup ${compact ? "compact" : ""}" aria-label="${esc(countryName)} BBVA Group - NEW IDEA EXCHANGE">
      <img class="bbva-logo-image" src="${esc(brandLogoSrc)}" alt="${esc(countryName)} BBVA Group" />
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

function getSubsidiariesByCountry(code) {
  const mapping = {
    TR: ["Türkiye"],
    GB: ["Amerika Birleşik Devletleri", "United States"],
    US: ["Amerika Birleşik Devletleri", "United States"],
    DE: ["Arjantin", "Argentina"],
    ES: ["İspanya", "Spain"]
  };
  const names = mapping[code] || [];
  return affiliationCompanies.filter(comp => {
    return comp.countries.some(cName => names.includes(cName));
  });
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

function quickFlowIdeas() {
  return [...state.ideas].sort((a, b) => {
    const bScore = b.aiScore + b.communityScore + b.strategicScore + b.supporters;
    const aScore = a.aiScore + a.communityScore + a.strategicScore + a.supporters;
    return bScore - aScore;
  });
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

function fileForInspector(idea, fileName) {
  return marketBundleFiles(idea).find(file => bundleFileName(file) === fileName) || fileName;
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

function scorePill(label, value) {
  return `
    <div class="score-pill">
      <span>${esc(label)}</span>
      <strong>${esc(value)}</strong>
    </div>
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

function analysisCard(title, content) {
  const body = Array.isArray(content)
    ? `<ul>${content.map(item => `<li>${esc(item)}</li>`).join("")}</ul>`
    : `<p>${esc(content)}</p>`;
  return `
    <div class="analysis-card">
      <h4>${esc(title)}</h4>
      ${body}
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

function timelineItem(iconName, title, meta) {
  return `
    <div class="timeline-item">
      <span class="timeline-dot">${icon(iconName)}</span>
      <span><strong>${esc(title)}</strong><br /><span class="muted">${esc(meta)}</span></span>
    </div>
  `;
}

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

function managerVoteEvents() {
  const base = state.investmentLedger || [];
  const seeded = [
    { userId: "p02", userName: "Mert Alkan", ideaId: "idea-5", ideaTitle: state.ideas.find(i => i.id === "idea-5")?.title || "AI kredi skoru", amount: 1840, quantity: 14, date: "13.06.2026" },
    { userId: "p05", userName: "Ece Uslu", ideaId: "idea-1", ideaTitle: state.ideas.find(i => i.id === "idea-1")?.title || "Yeşil finans", amount: 1620, quantity: 12, date: "14.06.2026" },
    { userId: "p15", userName: "Aslı Ergin", ideaId: "idea-2", ideaTitle: state.ideas.find(i => i.id === "idea-2")?.title || "Onboarding", amount: 1380, quantity: 9, date: "14.06.2026" },
    { userId: "p03", userName: "Selin Eryılmaz", ideaId: "idea-3", ideaTitle: state.ideas.find(i => i.id === "idea-3")?.title || "Akıllı bina", amount: 980, quantity: 7, date: "15.06.2026" },
    { userId: "u3", userName: "Can Koç", ideaId: "idea-1", ideaTitle: state.ideas.find(i => i.id === "idea-1")?.title || "Operasyon", amount: 2200, quantity: 16, date: "15.06.2026" }
  ];
  return [...base, ...seeded].filter(tx => {
    const idea = state.ideas.find(i => i.id === tx.ideaId);
    return idea && idea.country === state.activeCountry;
  });
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

function filteredAgendaItems() {
  const q = (state.filters.agendaSearch || "").trim().toLocaleLowerCase("tr-TR");
  const countryName = countryNameTR[state.activeCountry] || "Türkiye";
  return [...state.agendaItems].filter(item => {
    if (item.companyId) {
      const comp = affiliationCompanies.find(c => c.id === item.companyId);
      if (comp && comp.countries && !comp.countries.includes(countryName)) return false;
    }
    const text = [item.title, item.body, item.category, ...(item.tags || [])].join(" ").toLocaleLowerCase("tr-TR");
    const searchMatch = !q || text.includes(q);
    const categoryMatch = state.filters.agendaCategory === "Tümü" || item.category === state.filters.agendaCategory;
    const tagMatch = state.filters.agendaTag === "Tümü" || (item.tags || []).includes(state.filters.agendaTag);
    return searchMatch && categoryMatch && tagMatch;
  }).sort((a, b) => String(b.date).localeCompare(String(a.date)));
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

function filteredClubs() {
  const q = (state.filters.clubSearch || "").trim().toLocaleLowerCase("tr-TR");
  const category = state.filters.clubCategory || "Tümü";
  return state.clubs.filter(club => {
    if (club.country !== state.activeCountry) return false;
    const text = [club.name, club.description, club.category].join(" ").toLocaleLowerCase("tr-TR");
    const searchMatch = !q || text.includes(q);
    const catMatch = category === "Tümü" || club.category === category;
    return searchMatch && catMatch;
  });
}

function filteredTeams() {
  const q = (state.filters.teamSearch || "").trim().toLocaleLowerCase("tr-TR");
  return state.teams.filter(team => {
    const linkedIdea = state.ideas.find(i => i.id === team.ideaId);
    if (linkedIdea) {
      if (linkedIdea.country !== state.activeCountry) return false;
    } else {
      const creator = peopleDirectory.find(p => p.id === team.createdBy);
      if (creator && creator.country !== state.activeCountry) return false;
    }
    const text = [team.name, team.description, team.area, ...(team.tags || [])].join(" ").toLocaleLowerCase("tr-TR");
    return (!q || text.includes(q))
      && (state.filters.teamArea === "Tümü" || team.area === state.filters.teamArea)
      && (state.filters.teamStatus === "Tümü" || team.status === state.filters.teamStatus);
  });
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

function fieldStatic(label, value) {
  return `<label class="field"><span>${esc(label)}</span><input class="input" value="${esc(value)}" /></label>`;
}

function selectFieldStatic(label, values, selected) {
  return `<label class="field"><span>${esc(label)}</span><select class="select">${optionList(values, selected)}</select></label>`;
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
    marketPrice: 100,
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
    marketPrice: 100,
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
    marketPrice: 100,
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
    user.voteCreditBalance = (user.voteCreditBalance || 0) + 100;
    return;
  }
  
  if (user.voteCreditBalance < 100) {
    alert("Yeterli bakiyeniz bulunmamaktadır! Desteklemek için en az 100 BBVA gereklidir.");
    return;
  }
  
  user.supportedIdeas.push(id);
  idea.credits = (idea.credits || 0) + 1;
  idea.supporters = (idea.supporters || 0) + 1;
  idea.communityScore = Math.min(100, (idea.communityScore || 0) + 1);
  user.voteCreditBalance -= 100;
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
    const company = companyById(person.companyId || "bbva-group");
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
    comments: [],
    country: state.activeCountry
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
        title: "Sabancı dijital kanallar notu",
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

function formatAIMessage(text) {
  // Convert **bold** to <strong>bold</strong>
  let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Convert *italic* to <em>italic</em>
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  return html;
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
  } else if (query.includes("leasing") || query.includes("kiralama") || query.includes("aklease")) {
    replyText = `**Yapay Zekâ Fikir Önerisi (Aklease):**

    *Öneri:* **Güneş Enerjisi Santralleri (GES) için Dijital Leasing Paketi**
    *Açıklama:* KOBİ'lerin çatı tipi GES ve yeşil enerji yatırımlarını hızlandırmak için, fizibilite verilerinden otomatik teminat oranı ve vade yapısı çıkaran, tamamen kağıtsız bir başvuru/onay modülü.

    Bunu Ak Finansal Kiralama (Aklease) bünyesinde borsa projesi olarak yayınlamak için **Borsa** sekmesini ziyaret edebilir ve fikirleri inceleyebilirsin.`;
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

function createSeedSocialPost(id, userId, body, date, likes, extras = {}) {
  const person = personById(userId) || {};
  const company = companyById(person.companyId || "bbva-group");
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
    country: person.country || "TR",
    comments: [
      { id: `${id}-c1`, userName: "Can Koç", userAvatar: personById("u3")?.photo || "", body: "Bunu karar notuna da ekleyelim.", date: "Az önce" }
    ],
    ...extras
  };
}

function getTranslatedText(item, field) {
  if (!item) return "";
  const activeLang = state.globalTranslateAll ? "tr" : getActiveLanguage();
  const originalLang = item.country === "TR" ? "tr" : (item.country === "DE" ? "de" : (item.country === "ES" ? "es" : "en"));
  
  if (activeLang === originalLang) {
    return item[field] || "";
  }
  
  if (item.translations && item.translations[activeLang]) {
    const val = item.translations[activeLang];
    if (typeof val === "object") {
      return val[field] || item[field] || "";
    } else if (typeof val === "string" && (field === "body" || field === "text")) {
      return val;
    }
  }
  return item[field] || "";
}

function translateAllInState() {
  const activeLang = state.globalTranslateAll ? "tr" : getActiveLanguage();

  // 1. Translate Ideas
  state.ideas.forEach(idea => {
    if (idea.originalTitle === undefined) {
      idea.originalTitle = idea.title || "";
      idea.originalSummary = idea.summary || "";
      idea.originalProblem = idea.problem || "";
      idea.originalSolution = idea.solution || "";
    }
    const originalLang = idea.country === "TR" ? "tr" : (idea.country === "DE" ? "de" : (idea.country === "ES" ? "es" : "en"));
    const showOriginal = !!(state.translatedIdeaIds && state.translatedIdeaIds[idea.id]);
    
    if (showOriginal || activeLang === originalLang) {
      idea.title = idea.originalTitle;
      idea.summary = idea.originalSummary;
      idea.problem = idea.originalProblem;
      idea.solution = idea.originalSolution;
    } else {
      const trans = idea.translations && idea.translations[activeLang];
      if (trans) {
        idea.title = trans.title || idea.originalTitle;
        idea.summary = trans.summary || idea.originalSummary;
        idea.problem = trans.problem || idea.originalProblem;
        idea.solution = trans.solution || idea.originalSolution;
      }
    }
  });

  // 2. Translate Announcements
  state.announcements.forEach(ann => {
    if (ann.originalTitle === undefined) {
      ann.originalTitle = ann.title || "";
      ann.originalBody = ann.body || "";
    }
    const originalLang = ann.country === "TR" ? "tr" : (ann.country === "DE" ? "de" : (ann.country === "ES" ? "es" : "en"));
    if (activeLang === originalLang) {
      ann.title = ann.originalTitle;
      ann.body = ann.originalBody;
    } else {
      const trans = ann.translations && ann.translations[activeLang];
      if (trans) {
        ann.title = trans.title || ann.originalTitle;
        ann.body = trans.body || ann.originalBody;
      }
    }
  });

  // 3. Translate Social Posts & Comments
  state.socialPosts.forEach(post => {
    if (post.originalBody === undefined) {
      post.originalBody = post.body || "";
    }
    const originalLang = post.country === "TR" ? "tr" : (post.country === "DE" ? "de" : (post.country === "ES" ? "es" : "en"));
    if (activeLang === originalLang) {
      post.body = post.originalBody;
    } else {
      const trans = post.translations && post.translations[activeLang];
      if (trans) {
        post.body = typeof trans === "string" ? trans : (trans.body || post.originalBody);
      }
    }

    if (post.comments) {
      post.comments.forEach(c => {
        if (c.originalBody === undefined) {
          c.originalBody = c.body || "";
        }
        if (activeLang === originalLang) {
          c.body = c.originalBody;
        } else {
          const trans = c.translations && c.translations[activeLang];
          if (trans) {
            c.body = typeof trans === "string" ? trans : (trans.body || c.originalBody);
          }
        }
      });
    }
  });

  // 4. Translate Chat Messages
  state.messageSpaces.forEach(space => {
    const originalLang = space.country === "TR" ? "tr" : (space.country === "DE" ? "de" : (space.country === "ES" ? "es" : "en"));
    if (space.messages) {
      space.messages.forEach(msg => {
        if (msg.originalBody === undefined) {
          msg.originalBody = msg.body || "";
        }
        if (activeLang === originalLang) {
          msg.body = msg.originalBody;
        } else {
          const trans = msg.translations && msg.translations[activeLang];
          if (trans) {
            msg.body = typeof trans === "string" ? trans : (trans.body || msg.originalBody);
          }
        }
      });
    }
  });

  // 5. Translate Data Sets
  (state.dataSets || []).forEach(ds => {
    if (ds.originalTitle === undefined) {
      ds.originalTitle = ds.title || "";
      ds.originalSummary = ds.summary || "";
    }
    const originalLang = ds.country === "TR" ? "tr" : (ds.country === "DE" ? "de" : (ds.country === "ES" ? "es" : "en"));
    if (activeLang === originalLang) {
      ds.title = ds.originalTitle;
      ds.summary = ds.originalSummary;
    } else {
      const trans = ds.translations && ds.translations[activeLang];
      if (trans) {
        ds.title = trans.title || ds.originalTitle;
        ds.summary = trans.summary || ds.originalSummary;
      }
    }
  });

  // 6. Translate Challenges (Yarışmalar)
  (typeof challenges !== "undefined" ? challenges : []).forEach(ch => {
    if (ch.originalTitle === undefined) {
      ch.originalTitle = ch.title || "";
      ch.originalBrief = ch.brief || "";
    }
    const originalLang = ch.country === "TR" ? "tr" : (ch.country === "DE" ? "de" : (ch.country === "ES" ? "es" : "en"));
    if (activeLang === originalLang) {
      ch.title = ch.originalTitle;
      ch.brief = ch.originalBrief;
    } else {
      const trans = ch.translations && ch.translations[activeLang];
      if (trans) {
        ch.title = trans.title || ch.originalTitle;
        ch.brief = trans.brief || ch.originalBrief;
      }
    }
  });
}