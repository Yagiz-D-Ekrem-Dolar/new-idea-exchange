function renderExternalSignup() {
  const draft = state.externalDraft || { name: "", email: "", startupName: "", ideaTitle: "", summary: "", portal: "Sabancı" };
  const successMessage = state.externalSubmitSuccess ? `
    <div class="alert alert-success" style="background: rgba(46, 204, 113, 0.1); border: 1px solid rgba(46, 204, 113, 0.3); color: #2ecc71; padding: 16px; border-radius: 12px; margin-bottom: 20px; font-size: 14px; line-height: 1.5; display: flex; align-items: flex-start; gap: 10px; text-align: left;">
      ${icon("check-circle-2", "20")}
      <div>
        <strong style="display: block; margin-bottom: 4px;">Başvurunuz Alındı!</strong>
        Dış girişimci katılım başvurunuz sisteme kaydedildi. Karar kurulu değerlendirmesinden sonra tarafınıza e-posta ile dönüş yapılacaktır.
      </div>
    </div>
  ` : "";

  return `
    <main class="login-page apple-login">
      <section class="apple-access-card" style="max-width: 500px; width: 90%; padding: 32px;">
        <div class="apple-access-brand">
          ${brandLockup()}
        </div>
        <div class="apple-login-copy" style="margin-bottom: 24px; text-align: center;">
          <h1 style="font-family: 'Space Grotesk', sans-serif; font-size: 20px; margin-bottom: 8px;">Dış Girişimci Başvuru Formu</h1>
          <p style="font-size: 13px; color: var(--muted); line-height: 1.4;">Şirket dışı bir girişimci veya ekip olarak platformumuza katılmak ve projenizi sunmak için bilgilerinizi doldurun.</p>
        </div>

        ${successMessage}

        ${!state.externalSubmitSuccess ? `
          <div style="display: flex; flex-direction: column; gap: 16px; text-align: left;">
            <label class="field">
              <span style="font-size: 12px; font-weight: 600; color: var(--muted); margin-bottom: 6px; display: block;">Ad Soyad</span>
              <input class="input" data-ext-draft="name" value="${esc(draft.name)}" placeholder="Örn. Burak Yılmaz" required autocomplete="off" style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid var(--line);" />
            </label>

            <label class="field">
              <span style="font-size: 12px; font-weight: 600; color: var(--muted); margin-bottom: 6px; display: block;">E-posta Adresi</span>
              <input class="input" type="email" data-ext-draft="email" value="${esc(draft.email)}" placeholder="Örn. burak@startup.com" required autocomplete="off" style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid var(--line);" />
            </label>

            <label class="field">
              <span style="font-size: 12px; font-weight: 600; color: var(--muted); margin-bottom: 6px; display: block;">Girişim Adı</span>
              <input class="input" data-ext-draft="startupName" value="${esc(draft.startupName)}" placeholder="Örn. NovaTech AI" required autocomplete="off" style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid var(--line);" />
            </label>

            <label class="field">
              <span style="font-size: 12px; font-weight: 600; color: var(--muted); margin-bottom: 6px; display: block;">Fikir / Proje Başlığı</span>
              <input class="input" data-ext-draft="ideaTitle" value="${esc(draft.ideaTitle)}" placeholder="Örn. Akıllı Portföy Asistanı" required autocomplete="off" style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid var(--line);" />
            </label>

            <label class="field">
              <span style="font-size: 12px; font-weight: 600; color: var(--muted); margin-bottom: 6px; display: block;">Fikir / Girişim Özeti</span>
              <textarea class="textarea" data-ext-draft="summary" rows="3" placeholder="Girişiminizin sunduğu değer önerisi nedir?" required style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid var(--line); font-family: inherit;">${esc(draft.summary)}</textarea>
            </label>

            <label class="field">
              <span style="font-size: 12px; font-weight: 600; color: var(--muted); margin-bottom: 6px; display: block;">Başvurulan İnovasyon Kanalı</span>
              <select class="select" data-ext-draft="portal" style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid var(--line); background: var(--surface);">
                <option value="Sabancı" ${draft.portal === "Sabancı" ? "selected" : ""}>Sabancı Holding Inovasyon Portalı</option>
                <option value="BBVA" ${draft.portal === "BBVA" ? "selected" : ""}>BBVA Group Inovasyon Portalı</option>
              </select>
            </label>

            ${state.loginError ? `<small class="form-error" style="color: #e74c3c; font-weight: 600; font-size: 12px;">${esc(state.loginError)}</small>` : ""}

            <div style="display: flex; gap: 12px; margin-top: 8px;">
              <button class="btn secondary" style="flex: 1; padding: 12px;" data-action="toggle-login-default">${icon("arrow-left")} Geri Dön</button>
              <button class="btn primary" style="flex: 1; padding: 12px;" data-action="submit-external-application">${icon("send")} Başvuruyu Gönder</button>
            </div>
          </div>
        ` : `
          <button class="btn primary block" data-action="toggle-login-default" style="margin-top: 12px; width: 100%; padding: 12px;">${icon("arrow-left")} Giriş Ekranına Dön</button>
        `}
      </section>
    </main>
  `;
}

function renderLogin() {
  if (!state.accessKeyAccepted) {
    if (state.loginView === "external-signup") {
      return renderExternalSignup();
    }
    return `
      <main class="login-page apple-login">
        <section class="apple-access-card">
          <div class="apple-access-brand">
            ${brandLockup()}
          </div>
          <div class="apple-login-copy">
            <h1 style="font-family: 'Space Grotesk', sans-serif;">Sabancı Innovation Exchange</h1>
            <p>BBVA Group iç inovasyon alanına giriş için exchange key'ini gir.</p>
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
          <div style="margin-top: 16px; border-top: 1px solid var(--line-soft); padding-top: 16px; text-align: center;">
            <button class="btn secondary block" data-action="toggle-external-signup" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; height: 38px; font-weight: 600;">
              ${icon("user-plus")} Şirket Dışı Girişimci Girişi / Başvurusu
            </button>
          </div>
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
                    
                    const searchCountry = countryNameTR[c.code] || c.name;
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
            <span class="credit-pill" style="display: inline-flex; align-items: center; gap: 6px; font-weight: 700; background: rgba(241, 196, 15, 0.1); color: #F1C40F; border: 1px solid rgba(241, 196, 15, 0.2); padding: 6px 12px; border-radius: 99px;">
              ${bbvaCoinIcon("normal")}
              <span>${Math.round(state.marketBudget).toLocaleString("tr-TR")}</span>
            </span>
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
    case "education":
      return renderEducationPage();
    case "events":
      return renderEventsPage();
    default:
      return renderQuickFlow();
  }
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

function renderMessages() {
  const spaces = spacesInScope();
  const selectedSpace = state.selectedDirectPersonId ? null : spaces.find(space => space.id === state.selectedMessageSpaceId) || spaces[0] || state.messageSpaces[0];
  const selectedPerson = state.selectedDirectPersonId ? personById(state.selectedDirectPersonId) : null;
  const scopedPeople = peopleInScope(14);
  const messages = selectedPerson
    ? (state.directThreads[selectedPerson.id] || [])
    : (selectedSpace?.messages || []);
  const headerCompany = selectedPerson ? companyById(selectedPerson.companyId) : companyById(selectedSpace?.companyId || "bbva-group");

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

function renderStudioPage() {
  state.studioTab = (state.studioTab === "teams" ? "products" : state.studioTab) || "products";
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
          <button class="studio-stat" data-page="teams" style="text-align: center; background: var(--bg-soft); padding: 12px 18px; border-radius: 12px; min-width: 90px; border: 1px solid var(--line-soft); cursor: pointer;" title="Ekipler sayfasına git">
            <strong style="display: block; font-size: 20px; color: var(--ink);">${teamsCount}</strong>
            <span style="font-size: 11px; color: var(--muted); display: flex; align-items: center; gap: 4px; justify-content: center;">Ekip ${icon("arrow-right")}</span>
          </button>
        </div>
      </section>

      <div style="display: flex; gap: 12px; margin: 16px 0; align-items: stretch; flex-wrap: wrap;">
        <div class="segmented studio-main-switcher" style="flex: 1; min-width: 240px; display: flex; background: var(--bg-soft); border-radius: 12px; padding: 4px; border: 1px solid var(--line-soft);">
          <button class="btn ${tab === 'products' ? 'active' : ''}" data-action="set-studio-main-tab" data-tab="products" style="font-size: 13.5px; font-weight: 600; flex: 1; border: none; padding: 10px; border-radius: 8px; cursor: pointer; transition: all 0.2s; background: ${tab === 'products' ? 'var(--surface)' : 'transparent'}; color: ${tab === 'products' ? 'var(--ink)' : 'var(--muted)'}; box-shadow: ${tab === 'products' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'};">
            ${icon("package-check")} Ürünler
          </button>
          <button class="btn ${tab === 'studios' ? 'active' : ''}" data-action="set-studio-main-tab" data-tab="studios" style="font-size: 13.5px; font-weight: 600; flex: 1; border: none; padding: 10px; border-radius: 8px; cursor: pointer; transition: all 0.2s; background: ${tab === 'studios' ? 'var(--surface)' : 'transparent'}; color: ${tab === 'studios' ? 'var(--ink)' : 'var(--muted)'}; box-shadow: ${tab === 'studios' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'};">
            ${icon("layers")} Stüdyolar
          </button>
        </div>
        <button class="btn secondary" data-page="teams" style="font-size: 13.5px; font-weight: 600; padding: 10px 18px; border-radius: 12px; display: flex; align-items: center; gap: 8px;">
          ${icon("users-round")} Ekipler & Kulüpler
        </button>
      </div>

      <div class="studio-tab-content">
        ${tab === "studios" ? renderUnifiedStudiosTab() : renderUnifiedProductsTab()}
      </div>
    </div>
  `;
}

function renderTeamsDirectory() {
  if (state.teamsView === "detail") return renderTeamDetail();
  if (state.teamsView === "create") return renderCreateTeam();
  if (state.teamsView === "createClub") return renderCreateClub();
  if (state.teamsView === "clubDetail") return renderClubDetail();

  state.teamsTab = state.teamsTab || "projectTeams";
  state.filters.clubSearch = state.filters.clubSearch || "";
  state.filters.clubCategory = state.filters.clubCategory || "Tümü";

  const isTeams = state.teamsTab === "projectTeams";
  const teamList = filteredTeams();
  const clubList = filteredClubs();

  return `
    <div class="view-stack teams-page">
      <section class="apple-page-head">
        <div>
          <span class="panel-kicker">EKİPLER & KULÜPLER</span>
          <h2>Ortak çalışma ve sosyal topluluklar.</h2>
          <p>İştirak genelinde proje ekiplerine katıl veya ilgi alanlarına özel kulüplere üye ol.</p>
        </div>
        ${isTeams ? `
          <button class="btn primary" data-action="start-create-team">${icon("plus")} Yeni Ekip Kur</button>
        ` : `
          <button class="btn primary" data-action="start-create-club">${icon("plus")} Yeni Kulüp Kur</button>
        `}
      </section>

      <!-- Segmented Tab Switcher -->
      <div class="segmented" style="margin-bottom: 20px; width: 100%; max-width: 400px; display: flex;">
        <button class="btn ${isTeams ? "active" : ""}" data-action="set-teams-tab" data-tab="projectTeams" style="flex: 1; font-size: 13.5px; font-weight: 600;">
          ${icon("users")} Proje Ekipleri
        </button>
        <button class="btn ${!isTeams ? "active" : ""}" data-action="set-teams-tab" data-tab="clubs" style="flex: 1; font-size: 13.5px; font-weight: 600;">
          ${icon("shapes")} Kulüpler
        </button>
      </div>

      ${isTeams ? `
        <!-- Project Teams Filters -->
        <section class="challenge-filterbar">
          <label class="search-box">
            ${icon("search")}
            <input class="input" data-team-filter="search" value="${esc(state.filters.teamSearch || "")}" placeholder="Ekip ara..." />
          </label>
          <select class="select" data-team-filter="area">
            ${["Tümü", ...Array.from(new Set(state.teams.map(t => t.area)))].map(v => `
              <option value="${esc(v)}" ${state.filters.teamArea === v ? "selected" : ""}>Alan: ${esc(v)}</option>
            `).join("")}
          </select>
          <select class="select" data-team-filter="status">
            ${["Tümü", "active", "forming", "disbanded"].map(v => `
              <option value="${esc(v)}" ${state.filters.teamStatus === v ? "selected" : ""}>Durum: ${esc(teamStatusLabel(v))}</option>
            `).join("")}
          </select>
        </section>

        <!-- Project Teams Grid -->
        <section>
          <div class="teams-section-head">
            <span class="panel-kicker">Liste</span>
            <strong>${teamList.length} ekip</strong>
          </div>
          <div class="teams-grid">
            ${teamList.map(team => renderTeamCard(team, isMyTeam(team))).join("")}
          </div>
        </section>
      ` : `
        <!-- Clubs Filters -->
        <section class="challenge-filterbar">
          <label class="search-box">
            ${icon("search")}
            <input class="input" data-club-filter="search" value="${esc(state.filters.clubSearch)}" placeholder="Kulüp ara..." />
          </label>
          <select class="select" data-club-filter="category">
            <option value="Tümü" ${state.filters.clubCategory === "Tümü" ? "selected" : ""}>Kategori: Tümü</option>
            ${["Spor", "Kültür & Sanat", "Teknoloji", "Sosyal Sorumluluk"].map(v => `
              <option value="${esc(v)}" ${state.filters.clubCategory === v ? "selected" : ""}>Kategori: ${esc(v)}</option>
            `).join("")}
          </select>
        </section>

        <!-- Clubs Grid -->
        <section>
          <div class="teams-section-head">
            <span class="panel-kicker">Liste</span>
            <strong>${clubList.length} kulüp</strong>
          </div>
          <div class="teams-grid">
            ${clubList.map(club => renderClubCard(club)).join("") || `
              <div style="background: var(--surface); padding: 40px; text-align: center; color: var(--muted); border-radius: 12px; border: 1px solid var(--line-soft); grid-column: span 3;">
                ${icon("shapes", "36")}
                <p style="margin-top: 10px; font-size: 14px;">Eşleşen kulüp bulunamadı.</p>
              </div>
            `}
          </div>
        </section>
      `}
    </div>
  `;
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
        ${(state.educationActiveTab === "programs") ? `
          <button class="btn primary" data-action="toggle-education-composer" style="display: flex; align-items: center; gap: 6px; font-weight: 600;">
            ${icon("plus")} Yeni Program Ekle
          </button>
        ` : `
          <button class="btn primary" data-action="toggle-mentor-composer" style="display: flex; align-items: center; gap: 6px; font-weight: 600;">
            ${icon("plus")} Mentör İlanı Aç / Mentör Ol
          </button>
        `}
      </section>

      <div class="segmented" style="width: 100%; max-width: 400px; margin-bottom: 8px;">
        <button class="btn ${state.educationActiveTab === 'programs' ? 'active' : ''}" data-action="set-education-tab" data-tab="programs" style="font-size: 13.5px; font-weight: 600; flex: 1;">
          ${icon("graduation-cap")} Eğitimler & Programlar
        </button>
        <button class="btn ${state.educationActiveTab === 'mentors' ? 'active' : ''}" data-action="set-education-tab" data-tab="mentors" style="font-size: 13.5px; font-weight: 600; flex: 1;">
          ${icon("users-round")} Mentörlük Alanı
        </button>
      </div>

      ${(state.educationComposerOpen && state.educationActiveTab === "programs") ? `
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
              <input class="input" id="edu-composer-organizer" placeholder="Örn: Garanti BBVA Mobil İnovasyon Ekibi" />
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
        \${state.mentorComposerOpen ? \`
          <article class="manager-panel" style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 16px; box-shadow: var(--shadow-soft); margin-bottom: 20px; width: 100%; grid-column: 1 / -1;">
            <div style="border-bottom: 1px solid var(--line-soft); padding-bottom: 10px;">
              <strong style="font-size: 15px; color: var(--ink);">Mentörlük İlanı Aç / Profil Oluştur</strong>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
              <label class="field">
                <span>Ad Soyad</span>
                <input class="input" id="mentor-composer-name" value="\${esc(user.name)}" placeholder="Adınız Soyadınız" />
              </label>
              <label class="field">
                <span>Unvan / Şirket</span>
                <input class="input" id="mentor-composer-title" placeholder="Örn: FinTech & Ürün Yönetimi Müdürü (Garanti BBVA)" />
              </label>
              <label class="field" style="grid-column: 1 / -1;">
                <span>Uzmanlık Alanları (Virgülle ayırın)</span>
                <input class="input" id="mentor-composer-specialties" placeholder="Örn: Ürün Yönetimi, FinTech, İş Geliştirme" />
              </label>
              <label class="field">
                <span>E-posta</span>
                <input class="input" id="mentor-composer-email" value="\${esc(user.email || 'mentor@sabanci.example')}" placeholder="E-posta adresiniz" />
              </label>
              <label class="field full" style="grid-column: 1 / -1;">
                <span>Hakkımda / Mentörlük Kapsamı</span>
                <textarea class="textarea" id="mentor-composer-bio" rows="3" placeholder="Kendinizden, uzmanlığınızdan ve mentörlükte nasıl destek olabileceğinizden bahsedin..."></textarea>
              </label>
            </div>
            <div style="display: flex; justify-content: flex-end; gap: 10px; border-top: 1px solid var(--line-soft); padding-top: 14px;">
              <button class="btn ghost" data-action="toggle-mentor-composer">Vazgeç</button>
              <button class="btn primary" data-action="submit-mentor-item" style="font-weight: 600;">İlanı Yayınla</button>
            </div>
          </article>
        \` : ""}
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
              <input class="input" id="evt-organizer" placeholder="Örn: Garanti BBVA Teknoloji" />
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
        ${metricCard("coins", "Kalan Bakiye", `${Math.round(state.marketBudget).toLocaleString("tr-TR")} BBVA`, "Portal genelinde kullanabileceğiniz bakiye.", "+0", "green")}
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
  const escalated = state.ideas.filter(idea => idea.escalatedToBoard);
  return `
    <div class="view-stack">
      <section class="hero-band">
        <div>
          <h2>Yönetici Paneli</h2>
          <p>Fikirleri incelemeye al, pilot seç, ek bilgi iste veya sonuçlarını paylaş.</p>
        </div>
        <span class="status-badge review">${queue.length} fikir karar kuyruğunda</span>
      </section>
      ${escalated.length ? `
      <section class="content-panel" style="border: 1px solid rgba(241, 196, 15, 0.3); background: rgba(241, 196, 15, 0.04);">
        <div class="section-title">
          <div>
            <h2>${icon("gavel")} 5000 BBVA ile Taşınan Talepler</h2>
            <p>Sahipleri tarafından 5000 BBVA ödenerek doğrudan Karar Kurulu'na taşınan fikir ve kararlar.</p>
          </div>
          <span class="status-badge review">${escalated.length} talep</span>
        </div>
        <div class="table-wrap" style="margin-top: 14px;">
          <table class="data-table">
            <thead><tr><th>Fikir</th><th>Taşıyan</th><th>Tarih</th><th>Durum</th><th>Aksiyon</th></tr></thead>
            <tbody>
              ${escalated.map(idea => `
                <tr>
                  <td><strong>${esc(idea.title)}</strong><br /><span class="muted">${esc(idea.department)} · ${esc(idea.location)}</span></td>
                  <td>${esc(idea.boardEscalatedBy || idea.authorLabel)}</td>
                  <td>${esc(idea.boardEscalatedAt || "—")}</td>
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
      </section>
      ` : ""}
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

function renderManagerV2() {
  if (!currentUser().isManager && !currentUser().isAdmin) return renderNoAccess();
  const queue = state.ideas
    .filter(idea => ["review", "new", "pilot"].includes(idea.status))
    .sort((a, b) => ((b.aiScore + b.strategicScore + b.communityScore) - (a.aiScore + a.strategicScore + a.communityScore)));
  const escalated = state.ideas.filter(idea => idea.escalatedToBoard);
  const focusIdea = queue[0] || state.ideas[0];
  const quickWins = state.ideas
    .filter(idea => idea.estimatedCost === "Düşük" || idea.implementationTime.includes("1 ay"))
    .slice(0, 4);
  const lanes = [
    { title: "Yeni sinyal", status: "new", icon: "sparkles" },
    { title: "İnceleme", status: "review", icon: "clipboard-check" },
    { title: "Pilot", status: "pilot", icon: "rocket" }
  ];
  
  const extApps = state.externalApplications || [];
  const extPending = extApps.filter(app => app.status === "new");

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

      ${escalated.length ? `
      <section class="content-panel" style="border: 1px solid rgba(241, 196, 15, 0.3); background: rgba(241, 196, 15, 0.04);">
        <div class="panel-head">
          <div>
            <span class="panel-kicker">5000 BBVA ile taşınan talepler</span>
            <h3>${icon("gavel")} Doğrudan Karar Kurulu'na Taşınanlar</h3>
          </div>
          <span class="status-badge review">${escalated.length} talep</span>
        </div>
        <div class="lane-stack" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px; margin-top: 12px;">
          ${escalated.map(idea => `
            <div style="position: relative;">
              ${managerDecisionCardV2(idea)}
              <small style="display:block; margin-top: 6px; color: var(--muted); font-size: 11px;">${icon("user")} ${esc(idea.boardEscalatedBy || idea.authorLabel)} · ${esc(idea.boardEscalatedAt || "")}</small>
            </div>
          `).join("")}
        </div>
      </section>
      ` : ""}

      <section class="content-panel external-applications-panel" style="margin-top: 24px; border: 1px solid rgba(var(--primary-rgb), 0.25); background: rgba(var(--primary-rgb), 0.01);">
        <div class="panel-head" style="margin-bottom: 16px;">
          <div>
            <span class="panel-kicker">Açık İnovasyon & Girişimcilik</span>
            <h3>${icon("users")} Dış Girişimci Başvuruları</h3>
          </div>
          <span class="status-badge new">${extPending.length} bekleyen başvuru</span>
        </div>
        
        ${extApps.length === 0 ? `
          <p class="muted" style="text-align: center; padding: 24px 0;">Henüz dış girişimci başvurusu bulunmamaktadır.</p>
        ` : `
          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${extApps.map(app => `
              <div class="external-app-card" style="background: var(--surface); border: 1px solid var(--line-soft); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 12px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; flex-wrap: wrap;">
                  <div>
                    <h4 style="margin: 0 0 4px 0; font-size: 15px; color: var(--ink); text-align: left;">${esc(app.ideaTitle)}</h4>
                    <p style="margin: 0; font-size: 13px; color: var(--muted); text-align: left; line-height: 1.4;">${esc(app.summary)}</p>
                  </div>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <span class="status-badge" style="background: rgba(0,102,255,0.1); color: #0066ff; font-size: 11px; font-weight: bold; padding: 4px 8px; border-radius: 6px;">
                      ${esc(app.portal)} Portalı
                    </span>
                    ${app.status === 'new' ? `
                      <span class="status-badge review">Bekliyor</span>
                    ` : app.status === 'accepted' ? `
                      <span class="status-badge done">Kabul Edildi</span>
                    ` : `
                      <span class="status-badge rejected">Reddedildi</span>
                    `}
                  </div>
                </div>

                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px dashed var(--line-soft); padding-top: 12px; font-size: 12.5px; flex-wrap: wrap; gap: 12px;">
                  <div style="color: var(--muted);">
                    <span><strong>Girişim:</strong> ${esc(app.startupName)}</span>
                    <span style="margin: 0 8px;">•</span>
                    <span><strong>Kurucu:</strong> ${esc(app.name)} (${esc(app.email)})</span>
                    <span style="margin: 0 8px;">•</span>
                    <span><strong>Tarih:</strong> ${esc(app.date)}</span>
                  </div>
                  
                  ${app.status === 'new' ? `
                    <div style="display: flex; gap: 8px;">
                      <button class="btn ghost btn-sm text-rejected" data-action="reject-external-app" data-id="${esc(app.id)}" style="padding: 6px 12px; height: auto; border: 1px solid rgba(231,76,60,0.2); color: #e74c3c; cursor: pointer; font-size: 12px; border-radius: 6px; display: flex; align-items: center; gap: 4px;">
                        ${icon("x", "14")} Reddet
                      </button>
                      <button class="btn primary btn-sm" data-action="accept-external-app" data-id="${esc(app.id)}" style="padding: 6px 12px; height: auto; cursor: pointer; font-size: 12px; border-radius: 6px; display: flex; align-items: center; gap: 4px;">
                        ${icon("check", "14")} Kabul Et ve Fikirlere Ekle
                      </button>
                    </div>
                  ` : ""}
                </div>
              </div>
            `).join("")}
          </div>
        `}
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

function renderSocial() {
  const user = currentUser();
  const recommendedPeople = peopleDirectory.filter(p => p.id !== user.id && p.country === state.activeCountry && !state.connectedUserIds.includes(p.id)).slice(0, 4);
  
  state.socialActiveTab = state.socialActiveTab || "all";
  let feedList = [...(state.socialPosts || [])].filter(post => post.country === state.activeCountry);
  
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
          <p>BBVA Group iştiraklerine ait ticari sırlar, müşteri verileri ve kişisel veriler kesinlikle açık şekilde paylaşılmamalıdır. Veri paylaşırken maskelenmiş veya anonimleştirilmiş veri setleri tercih edilmelidir.</p>
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