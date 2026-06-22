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
            BBVA ${activeC.name.toUpperCase()} EKOSİSTEMİ
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
          
          <!-- Root Parent Node: BBVA Group -->
          <div style="display: flex; justify-content: center; margin-bottom: 28px; position: relative; z-index: 2;">
            <div style="display: flex; align-items: center; gap: 12px; background: var(--surface); border: 2px solid var(--accent); padding: 10px 24px; border-radius: 14px; box-shadow: 0 8px 24px rgba(0, 93, 170, 0.12); text-align: left;">
              <img src="/assets/company-logos/bbva-group.svg" style="height: 22px; width: auto;" alt="" />
              <span>
                <strong style="display: block; font-size: 13.5px; font-weight: 700; color: var(--ink);">H.Ö. BBVA Group</strong>
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

function renderStockTicker() {
  const list = state.ideas.filter(idea => idea.marketTicker && idea.country === state.activeCountry).slice(0, 20);
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
                <span style="margin-left: 6px; font-weight: 500;">${price} BBVA</span>
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
          ${true || idea.authorId === currentUser().id ? (
            idea.escalatedToBoard ? `
              <span class="btn soft" style="background: rgba(241, 196, 15, 0.1); color: #F1C40F; border: 1px solid rgba(241, 196, 15, 0.2); cursor: default;">
                ${icon("gavel")} Karar Kurulu'nda İnceleniyor
              </span>
            ` : `
              <button class="btn soft" data-action="escalate-to-board" data-id="${esc(idea.id)}" style="background: rgba(241, 196, 15, 0.1); color: #F1C40F; border: 1px solid rgba(241, 196, 15, 0.2);" title="5000 BBVA karşılığında bu fikri/projeyi Karar Kurulu'nun inceleme listesine taşı">
                ${icon("gavel")} Karar Kurulu'na Taşı (5000 BBVA)
              </button>
            `
          ) : ""}
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

function renderAffiliationFilter() {
  const activeC = countriesList.find(c => c.code === state.activeCountry) || countriesList[0];
  const countryCompanies = affiliationCompanies.filter(comp => comp.countries && comp.countries.includes(countryNameTR[activeC.code] || activeC.name));

  return `
    <section class="corp-filter-panel">
      <div class="corp-filter-head">
        <div>
          <span class="panel-kicker">BBVA GROUP VE İŞTİRAK FİLTRESİ</span>
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
          ${companyLogo(companyById("bbva-group"), "mini")}
          <span>Tümü</span>
        </button>
        ${countryCompanies.map(company => `
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
  const allVisible = filteredAnnouncements();
  const annLimit = state.visibleAnnouncementsCount || 18;
  const visible = allVisible.slice(0, annLimit);
  const annHasMore = allVisible.length > annLimit;

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
      ${annHasMore ? `
        <div style="display: flex; justify-content: center; margin-top: 30px; margin-bottom: 20px; width: 100%;">
          <button class="btn secondary" data-action="load-more-announcements" style="padding: 10px 24px; font-weight: 600; border-radius: 10px; cursor: pointer; border: 1px solid var(--line-soft); background: var(--surface); color: var(--accent);">
            Daha Fazla Duyuru Yükle (${allVisible.length - annLimit} Kaldı)
          </button>
        </div>
      ` : ""}
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
        <button class="btn ghost slim-btn" data-page="teams" style="font-weight:600;">${icon("arrow-right")} Ekipler</button>
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

function renderClubCard(club) {
  const user = currentUser();
  const isMember = club.members && club.members.includes(user.id);
  const categoriesMap = {
    "Spor": "var(--positive)",
    "Kültür & Sanat": "var(--primary)",
    "Teknoloji": "var(--accent)",
    "Sosyal Sorumluluk": "var(--warning)"
  };
  const color = categoriesMap[club.category] || "var(--primary)";

  return `
    <article class="studio-card-v2" style="display:flex; flex-direction:column; justify-content:space-between; height: 100%; min-height: 200px;">
      <button data-action="open-club" data-id="${esc(club.id)}" style="all:unset; cursor:pointer; display:block;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          <span style="font-size:10px; font-weight:700; color:${color}; text-transform:uppercase; letter-spacing:0.05em; background:rgba(255,255,255,0.05); padding:4px 8px; border-radius:4px;">
            ${esc(club.category)}
          </span>
          <span style="font-size:11px; color:var(--muted);">${esc(club.createdAt)}</span>
        </div>
        <h3 style="font-size:16px; font-weight:700; color:var(--ink); margin:12px 0 6px 0;">${esc(club.name)}</h3>
        <p style="font-size:12.5px; color:var(--ink-soft); line-height:1.5; margin:6px 0 12px 0;">${esc(club.description)}</p>
      </button>
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; border-top: 1px solid var(--line-soft); padding-top: 12px; margin-top: 12px;">
          <div style="display:flex; align-items:center; gap:6px;">
            ${renderAvatarStack(club.members, 3)}
            <span style="font-size:12px; color:var(--muted); font-weight:500;">${club.members.length} Üye</span>
          </div>
          <div style="display:flex; gap:6px;">
            <button class="btn ghost slim-btn" data-action="open-club" data-id="${esc(club.id)}" title="Kulübe git">
              ${icon("message-circle")}
            </button>
            <button class="btn ${isMember ? "secondary" : "primary"} slim-btn" data-action="toggle-club-join" data-id="${club.id}">
              ${isMember ? icon("check") + " Üyesiniz" : icon("plus") + " Katıl"}
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderClubMessage(msg) {
  const user = currentUser();
  const isOwn = msg.own || msg.userId === user.id;
  const sender = isOwn ? user : personById(msg.userId);
  const name = sender?.name || "Kulüp Üyesi";
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

function renderClubDetail() {
  const club = state.clubs.find(c => c.id === state.selectedClubId);
  if (!club) return renderTeamsList ? renderTeamsList() : "";
  const user = currentUser();
  const isMember = club.members && club.members.includes(user.id);
  const members = (club.members || []).map(id => id === user.id ? user : personById(id)).filter(Boolean);
  const creator = personById(club.createdBy);

  return `
    <div class="view-stack team-detail-page">
      <div class="team-detail-back">
        <button class="btn ghost" data-action="back-to-teams" style="display:flex;align-items:center;gap:6px;">
          ${icon("arrow-left")} Kulüplere Dön
        </button>
        <span class="team-status-badge" style="margin-left:12px;">${esc(club.category)}</span>
        ${isMember ? `<span class="team-mine-badge" style="margin-left:6px;">${icon("user-check")} Üyesiniz</span>` : ""}
      </div>

      <section class="team-detail-header">
        <div class="team-detail-title">
          <h2>${esc(club.name)}</h2>
          <p>${esc(club.description)}</p>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;">
            ${(club.tags || []).map(tag => `<span class="tag-pill">#${esc(tag)}</span>`).join("")}
          </div>
        </div>
        <div style="display:flex;gap:16px;align-items:start;">
          <button class="btn ${isMember ? "secondary" : "primary"}" data-action="toggle-club-join" data-id="${esc(club.id)}">
            ${isMember ? icon("check") + " Üyesiniz" : icon("plus") + " Kulübe Katıl"}
          </button>
        </div>
      </section>

      <div class="team-detail-layout">
        <aside class="team-roster-panel">
          <div class="team-panel-head">
            ${icon("users-round")} <strong>Üyeler</strong>
            <span style="margin-left:auto;font-size:12px;color:var(--muted);">${members.length}</span>
          </div>
          <div class="team-roles-list">
            ${members.map(person => `
              <div class="team-role-row filled">
                <div class="role-row-body">
                  <span class="role-member-line">
                    ${avatar(person.name, "tiny", person.photo || person.avatarUrl)}
                    <span>${esc(person.name)}</span>
                    ${person.id === club.createdBy ? `<small style="color:var(--muted);">· ${icon("crown")} Kurucu</small>` : ""}
                  </span>
                </div>
              </div>
            `).join("")}
          </div>

          <div class="team-meta-card">
            <div class="team-panel-head" style="margin-bottom:8px;">${icon("info")} <strong>Kulüp Bilgisi</strong></div>
            <div style="font-size:12.5px;color:var(--ink-soft);display:flex;flex-direction:column;gap:6px;">
              <span>${icon("calendar")} Kuruldu: ${esc(club.createdAt)}</span>
              ${creator ? `<span>${icon("crown")} Kurucu: <strong>${esc(creator.name)}</strong></span>` : ""}
            </div>
          </div>
        </aside>

        <main class="team-chat-main">
          <div class="team-panel-head">
            ${icon("message-circle")} <strong>Kulüp Sohbeti</strong>
            <span style="margin-left:auto;font-size:12px;color:var(--muted);">${(club.messages || []).length} mesaj</span>
          </div>
          <div class="team-chat-thread" id="club-chat-thread">
            ${(club.messages || []).length ? club.messages.map(m => renderClubMessage(m)).join("") : `
              <div class="team-chat-empty">
                ${icon("message-circle")}
                <strong>Henüz sohbet yok.</strong>
                <span>İlk mesajı sen at, kulübü harekete geçir!</span>
              </div>
            `}
          </div>
          <div class="team-chat-composer">
            <input class="input" placeholder="Kulübe mesaj yaz..." data-club-chat-draft value="${esc(state.clubChatDraft || "")}" />
            <button class="btn primary" data-action="send-club-message" data-id="${esc(club.id)}">
              ${icon("send")} Gönder
            </button>
          </div>
        </main>
      </div>
    </div>
  `;
}

function renderCreateClub() {
  state.clubDraft = state.clubDraft || { name: "", description: "", category: "Spor" };
  const draft = state.clubDraft;
  const categories = ["Spor", "Kültür & Sanat", "Teknoloji", "Sosyal Sorumluluk"];

  return `
    <div class="view-stack create-team-page">
      <button class="btn ghost" data-action="back-to-teams" style="display:flex;align-items:center;gap:6px;margin-bottom:12px;">
        ${icon("arrow-left")} Geri Dön
      </button>

      <section class="create-team-card" style="max-width: 600px; margin: 0 auto; background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; padding: 24px;">
        <div class="create-team-header" style="margin-bottom: 20px;">
          <span class="panel-kicker">YENİ KULÜP</span>
          <h2>Kulüp Kur</h2>
          <p>Çalışanları bir araya getirecek, sosyal veya teknik odağı olan bir topluluk oluşturun.</p>
        </div>

        <div class="create-step-body" style="display: flex; flex-direction: column; gap: 16px;">
          <label class="field">
            <span>Kulüp Adı *</span>
            <input class="input" placeholder="Örn: Garanti BBVA Fotoğrafçılık Kulübü" data-club-draft-name value="${esc(draft.name)}" />
          </label>
          <label class="field">
            <span>Kulüp Açıklaması / Amacı *</span>
            <textarea class="input" rows="3" placeholder="Kulübün faaliyetleri, kimlerin katılabileceği ve hedefleri..." data-club-draft-desc>${esc(draft.description)}</textarea>
          </label>
          <label class="field">
            <span>Kategori</span>
            <select class="select" data-club-draft-category>
              ${categories.map(c => `<option value="${esc(c)}" ${draft.category === c ? "selected" : ""}>${esc(c)}</option>`).join("")}
            </select>
          </label>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 24px; border-top: 1px solid var(--line-soft); padding-top: 16px;">
          <button class="btn ghost" data-action="back-to-teams">İptal</button>
          <button class="btn primary" data-action="club-create-submit" ${!draft.name.trim() || !draft.description.trim() ? "disabled" : ""}>
            Kulübü Oluştur
          </button>
        </div>
      </section>
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

function renderProductProgressBar(pct, color) {
  return `
    <div class="product-progress-track">
      <div class="product-progress-fill" style="width:${pct}%;background:${color};"></div>
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
                <td>${Math.round(user.voteCreditBalance).toLocaleString("tr-TR")} / ${Math.round(user.monthlyVoteCredit || 3000).toLocaleString("tr-TR")} SA</td>
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
      <div class="borsa-reports-row" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-top: 4px;">
        <button class="btn ghost btn-sm" data-action="view-report" data-type="ai" data-id="${idea.id}" style="font-size: 12px; padding: 6px; display: flex; align-items: center; justify-content: center; gap: 4px;">
          ${icon("cpu")} AI Raporu
        </button>
        <button class="btn ghost btn-sm" data-action="view-report" data-type="project" data-id="${idea.id}" style="font-size: 12px; padding: 6px; display: flex; align-items: center; justify-content: center; gap: 4px;">
          ${icon("file-text")} Proje Raporu
        </button>
        <button class="btn ghost btn-sm" data-action="view-report" data-type="presentation" data-id="${idea.id}" style="font-size: 12px; padding: 6px; display: flex; align-items: center; justify-content: center; gap: 4px;">
          ${icon("presentation")} Sunum
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
  const isPresentation = state.reportType === "presentation";

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
  ` : isPresentation ? `
    <div style="font-size: 14px; line-height: 1.6; color: var(--ink-soft);">
      <h4 style="color: var(--ink); font-weight: 600; margin-bottom: 4px; font-size: 16px;">${esc(idea.marketTicker || "NIE")}-sunum.pptx</h4>
      <p style="margin-bottom: 14px; font-size: 12px; color: var(--muted);">Proje sunum slaytlarının özet akışı.</p>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div style="background: var(--bg); border-left: 4px solid var(--primary); padding: 10px 12px; border-radius: 6px;">
          <strong style="display:block; font-size: 11px; color: var(--muted);">SLAYT 1 · Başlık</strong>
          <span style="color: var(--ink); font-weight: 600;">${esc(idea.title)}</span>
          <span style="display:block; font-size: 12px; margin-top: 2px;">${esc(idea.authorLabel || "—")} · ${esc(idea.company || "")}</span>
        </div>
        <div style="background: var(--bg); border-left: 4px solid var(--primary); padding: 10px 12px; border-radius: 6px;">
          <strong style="display:block; font-size: 11px; color: var(--muted);">SLAYT 2 · Problem</strong>
          <span>${esc(idea.problem || "Belirtilmemiş.")}</span>
        </div>
        <div style="background: var(--bg); border-left: 4px solid var(--primary); padding: 10px 12px; border-radius: 6px;">
          <strong style="display:block; font-size: 11px; color: var(--muted);">SLAYT 3 · Çözüm</strong>
          <span>${esc(idea.solution || "Belirtilmemiş.")}</span>
        </div>
        <div style="background: var(--bg); border-left: 4px solid var(--primary); padding: 10px 12px; border-radius: 6px;">
          <strong style="display:block; font-size: 11px; color: var(--muted);">SLAYT 4 · Etki & Maliyet</strong>
          <span>${esc(idea.estimatedImpact || "Yüksek")} etki · ${esc(idea.estimatedCost || "Düşük")} maliyet · ${esc(idea.implementationTime || "1-2 ay")}</span>
        </div>
        <div style="background: var(--bg); border-left: 4px solid var(--primary); padding: 10px 12px; border-radius: 6px;">
          <strong style="display:block; font-size: 11px; color: var(--muted);">SLAYT 5 · Borsa Özeti</strong>
          <span>${esc(idea.marketTicker || "NIE")} · ${formatCurrencyHTML(marketPrice(idea))} · ${idea.supporters || 0} destekçi · AI ${idea.aiScore || 70}/100</span>
        </div>
      </div>
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
      title: "Garanti BBVA Mobil Ödeme API Dokümantasyonu Güncellemesi",
      category: "Veri Seti İsteği",
      description: "Garanti BBVA Mobil API'lerinin güncel test ortamı verileri eksik. Entegrasyon geliştirmesi yapabilmemiz için güncel sandbox logları gerekiyor.",
      companyId: "garanti-bbva",
      author: "Can Koç",
      date: "2026-06-08",
      status: "İnceleniyor"
    },
    {
      id: "sug-2",
      title: "Garanti BBVA Teknoloji Portalında Mobil Giriş Hatası",
      category: "Uygulama Hataları",
      description: "iOS 16+ sürümlerinde Garanti BBVA Teknoloji iç portalına giriş yaparken şifre doğrulama ekranı donuyor.",
      companyId: "garanti-bbva-teknoloji",
      author: "Defne Arman",
      date: "2026-06-06",
      status: "İletildi"
    },
    {
      id: "sug-3",
      title: "Karbon Ayak İzi Hesaplama Formülü Standartlaşması",
      category: "Genel Öneri",
      description: "BBVA CIB US ve BBVA Securities España karbon emisyon verilerini toplarken standart bir formül kullanılmalı, veriler karşılaştırılabilir olmalı.",
      companyId: "bbva-cib-us",
      author: "Selin Eryılmaz",
      date: "2026-06-05",
      status: "Çözüldü"
    },
    {
      id: "sug-leasing-1",
      title: "Leasing Ödeme Planı Simülasyon Veri Seti Talebi",
      category: "Veri Seti İsteği",
      description: "Tarım ve inşaat sektöründeki müşteriler için geliştirilecek esnek ödeme planı (balon ödemeli, sezonluk ödemeli vb.) algoritmalarını test etmek için anonimleştirilmiş geçmiş ödeme performansı veri setine ihtiyacımız var.",
      companyId: "aklease",
      author: "Nazlı Durukan",
      date: "2026-06-09",
      status: "İnceleniyor"
    },
    {
      id: "sug-leasing-2",
      title: "İkinci El İş Makinesi Değerleme Entegrasyonu",
      category: "Genel Öneri",
      description: "Aklease portalı üzerinden ikinci el iş makinesi işlemlerinde, piyasa fiyatı analizini otomatik yapabilmek için makine model ve çalışma saati bazlı API entegrasyonu öneriyoruz.",
      companyId: "aklease",
      author: "Mert Alkan",
      date: "2026-06-08",
      status: "İletildi"
    },
    {
      id: "sug-leasing-3",
      title: "Leasing Sözleşmesi E-İmza Sürecindeki Gecikmeler",
      category: "Uygulama Hataları",
      description: "Mobil imza doğrulama adımlarında bazen SMS şifrelerinin gelmemesi veya gecikmesi nedeniyle sözleşme onay süreleri uzuyor. Servis sağlayıcı entegrasyonunun kontrol edilmeli.",
      companyId: "aklease",
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

function renderSystemDetails() {
  const tabs = ["Çalışma Prensibi", "Teknik Altyapı", "Kullanım Kılavuzu", "Belgeler"];

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
  } else if (state.systemDetailsTab === "Belgeler") {
    const currentReportHref = "/NIE-Kurumsal-Teknik-Rapor-2026.pdf";
    const sabanciNewHref = "/Sabanci-New.pdf";
    const academicIntegrationHref = "/Sabanci-New-Akademik-ve-Entegrasyon-Raporu.pdf";
    const academicEvidenceHref = "/Sabanci-New-Akademik-Literatur-ve-Kanitlar-Raporu.pdf";
    const docCard = (iconName, title, desc, links) => `
      <div style="background: rgba(59, 130, 246, 0.04); border: 1px solid var(--line-soft); padding: 18px; border-radius: 12px; display: flex; flex-direction: column; gap: 10px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="width: 36px; height: 36px; border-radius: 10px; background: var(--primary); color: white; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">${icon(iconName)}</span>
          <strong style="color: var(--ink); font-size: 15px;">${esc(title)}</strong>
        </div>
        <span style="font-size: 13px; color: var(--ink-soft); line-height: 1.5;">${esc(desc)}</span>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 4px;">
          ${links.map(l => l.page
            ? `<button data-page="${esc(l.page)}" class="btn ghost slim-btn" style="display: inline-flex; align-items: center; gap: 6px;">${icon("arrow-right", "style='width:13px;height:13px;'")} ${esc(l.label)}</button>`
            : `<a href="${esc(l.href)}" ${l.download ? "download" : `target="_blank" rel="noopener"`} class="btn ghost slim-btn" style="text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">${icon(l.download ? "download" : "external-link", "style='width:13px;height:13px;'")} ${esc(l.label)}</a>`
          ).join("")}
        </div>
      </div>
    `;
    contentHtml = `
      <section class="content-panel" style="padding: 24px; border-radius: 16px; background: var(--surface); border: 1px solid var(--line-soft); display: flex; flex-direction: column; gap: 20px;">
        <h3 style="color: var(--ink); font-weight: 600; font-size: 18px; margin-top: 0; display: flex; align-items: center; gap: 8px;">
          ${icon("folder-open")} Platform Belgeleri
        </h3>
        <p style="color: var(--ink-soft); line-height: 1.6; margin: 0;">
          BBVA Group New Idea Exchange platformuna ait teknik raporlar, akademik kanıt dokümanları, entegrasyon raporları ve ürün belgeleri bu sayfada toplanmıştır.
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
          ${docCard("file-text", "Güncel Teknik Rapor", "20 Haziran 2026 tarihli mimari inceleme, ürün mantığı, borsa fiyatlama modeli, AI kapsamı, teknik borçlar ve önerilen yol haritasını içeren güncel PDF raporu.", [
            { href: currentReportHref, label: "PDF Görüntüle" },
            { href: currentReportHref, label: "PDF İndir", download: true },
            { href: "/technical-report.html", label: "HTML Rapor" }
          ])}
          ${docCard("presentation", "Sabancı New", "Platformun ürün vizyonu, akışları ve anlatım kurgusunu içeren güncel Sabancı New PDF dokümanı.", [
            { href: sabanciNewHref, label: "PDF Görüntüle" },
            { href: sabanciNewHref, label: "PDF İndir", download: true }
          ])}
          ${docCard("book-open", "Akademik ve Entegrasyon Raporu", "Akademik arka plan, kurumsal entegrasyon yaklaşımı, sistemin uygulanabilirliği ve ölçeklenme gerekçelerini açıklayan rapor.", [
            { href: academicIntegrationHref, label: "PDF Görüntüle" },
            { href: academicIntegrationHref, label: "PDF İndir", download: true }
          ])}
          ${docCard("library", "Literatür ve Kanıtlar Raporu", "İnovasyon borsası yaklaşımını destekleyen akademik literatür, referanslar ve kanıt çerçevesini içeren rapor.", [
            { href: academicEvidenceHref, label: "PDF Görüntüle" },
            { href: academicEvidenceHref, label: "PDF İndir", download: true }
          ])}
          ${docCard("database", "Sistem Raporları", "Borsa mantığı, sanal para/ödül kuralları, veri modeli, stüdyo/ekip/ürün modeli ve operasyonel akışları kapsayan kapsamlı kurumsal ürün raporu.", [
            { href: "/NIE-Kurumsal-Urun-Raporu.pdf", label: "PDF Görüntüle" },
            { href: "/NIE-Kurumsal-Urun-Raporu.pdf", label: "PDF İndir", download: true }
          ])}
          ${docCard("file-stack", "Proje Dokümanları", "Her projenin kendi AI raporu, proje raporu, sunumu ve dosya bundle'ı ilgili fikrin detay sayfasından indirilebilir. Kapsamlı ürün dokümantasyonu için Sistem Raporları kartına bakın.", [
            { page: "ideas", label: "Fikir Havuzuna Git" }
          ])}
          ${docCard("newspaper", "Makaleler", "Platform vizyonuna katkı sağlayan düşünce yazıları ve araştırma notları.", [
            { href: "/Aras-Kilinc-Fikirlerin-Verimliligi-Makalesi.pdf", label: "Fikirlerin Verimliliği — Aras Kılınç (PDF)" }
          ])}
        </div>
        <section class="report-viewer-panel" aria-label="Güncel teknik rapor PDF görüntüleyici">
          <div class="report-viewer-head">
            <div>
              <span class="panel-kicker">PDF RAPOR</span>
              <h4>Güncel Teknik ve Ürün Raporu</h4>
              <p>Raporu uygulama içinde inceleyebilir, tam ekranda açabilir veya PDF olarak indirebilirsiniz.</p>
            </div>
            <div class="report-viewer-actions">
              <a href="${currentReportHref}" target="_blank" rel="noopener" class="btn ghost slim-btn">${icon("external-link")} Tam Ekran</a>
              <a href="${currentReportHref}" download class="btn primary slim-btn">${icon("download")} PDF İndir</a>
            </div>
          </div>
          <object class="report-pdf-frame" data="${currentReportHref}#toolbar=1&navpanes=0" type="application/pdf">
            <div class="report-fallback">
              <strong>PDF önizleyici bu tarayıcıda açılamadı.</strong>
              <a href="${currentReportHref}" target="_blank" rel="noopener">Raporu yeni sekmede aç</a>
            </div>
          </object>
        </section>
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
            if (tab === "Belgeler") iconName = "folder-open";
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

function renderAIAssistantWidget() {
  state.aiAssistantOpen = !!state.aiAssistantOpen;
  state.aiAssistantMessages = state.aiAssistantMessages || [
    { role: 'assistant', text: 'Merhaba. Ben Sabancı AI Asistanı; yalnızca platform içindeki fikirler, gündem, duyurular, gelişmiş ürünler ve yönetici kaynaklarından özet çıkarırım. Demo kapsamında internette arama yapmam veya dış haber çekmem.' },
    { role: 'user', text: 'Şu an platform içinde hype hangi alana kayıyor?' },
    { role: 'assistant', text: '**Platform içi trend okuması:**\n\nBorsa hareketleri, gündem başlıkları ve ürünleşen fikirler birlikte bakıldığında operasyon verimliliği, AI destekli özetleme ve yeşil finans başlıkları öne çıkıyor. Bu yorum yalnızca demo içindeki kayıtlar üzerinden üretilmiştir.' }
  ];

  if (!state.aiAssistantOpen) {
    const isGlobalOriginal = !!state.globalTranslateAll;
    const tooltipText = isGlobalOriginal ? "Türkçe Çevirilere Dön" : "Tümünü Orijinal Dilde Göster";
    let translateStyle = `position: fixed; z-index: 999; width: 44px; height: 44px; border-radius: 50%; background: ${isGlobalOriginal ? 'var(--primary)' : 'var(--surface)'} !important; border: 1px solid var(--line-soft); color: ${isGlobalOriginal ? 'white' : 'var(--primary)'}; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12); transition: transform 0.2s, background-color 0.2s;`;
    let aiStyle = ``;

    if (state.aiBubblePos) {
      translateStyle += ` left: ${state.aiBubblePos.x + 6}px; top: ${state.aiBubblePos.y - 56}px; right: auto; bottom: auto;`;
      aiStyle += ` left: ${state.aiBubblePos.x}px; top: ${state.aiBubblePos.y}px; right: auto; bottom: auto;`;
    } else {
      translateStyle += ` bottom: 92px; right: 30px;`;
    }

    return `
      <div class="global-translate-bubble" data-action="toggle-global-translation" style="${translateStyle}" title="${tooltipText}" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'">
        ${icon("languages", `style="width: 20px; height: 20px; color: ${isGlobalOriginal ? 'white' : 'var(--primary)'};"`)}
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
        <button class="suggestion-chip" data-action="ai-suggest" data-prompt="BBVA CIB US karbon emisyonu azaltım fikri öner" style="font-size: 11px; background: var(--bg); border: 1px solid var(--line-soft); padding: 4px 8px; border-radius: 20px; cursor: pointer; color: var(--ink-soft);">BBVA CIB US Önerisi Al</button>
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


// ─── NEW FLOATING LANGUAGE WIDGET ──────────────────────────────────────────────
function renderFloatingLangWidget() {
  const currentLang = state.activeLanguage || "tr";
  const currentCountry = state.activeCountry || "TR";
  const countryObj = countriesList.find(c => c.code === currentCountry) || countriesList[0];
  const isOpen = state.floatingLangDropdownOpen;

  return `
    <div class="floating-lang-container" style="position: fixed; bottom: 85px; right: 24px; z-index: 10000; font-family: inherit;">
      <!-- Main Trigger Bubble -->
      <button class="floating-lang-bubble" data-action="toggle-floating-lang-dropdown" 
              style="width: 48px; height: 48px; border-radius: 50%; background: var(--surface); border: 1px solid var(--line-soft); box-shadow: var(--shadow-lg); display: flex; align-items: center; justify-content: center; font-size: 20px; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); backdrop-filter: blur(12px);">
        ${countryObj.flag}
      </button>

      <!-- Dropdown Panel -->
      ${isOpen ? `
        <div class="floating-lang-dropdown" 
             style="position: absolute; bottom: 60px; right: 0; width: 280px; background: var(--surface); border: 1px solid var(--line-soft); border-radius: 16px; box-shadow: var(--shadow-xl); padding: 16px; display: flex; flex-direction: column; gap: 12px; backdrop-filter: blur(20px); animation: slideUp 0.2s ease-out;">
          <h4 style="margin: 0; font-size: 14px; font-weight: 600; color: var(--ink); display: flex; align-items: center; gap: 6px;">
            ${icon("globe")} Portal & Dil Seçimi
          </h4>
          
          <!-- Portal Selection -->
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <label style="font-size: 11px; color: var(--muted); font-weight: 500;">Aktif Ülke Portalı</label>
            <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px;">
              ${countriesList.map(c => {
                const isActive = state.activeCountry === c.code;
                return `
                  <button class="portal-btn ${isActive ? 'active' : ''}" 
                          data-action="change-active-portal" 
                          data-code="${esc(c.code)}" 
                          title="${esc(c.name)}"
                          style="height: 36px; border-radius: 8px; border: 1px solid ${isActive ? 'var(--primary)' : 'var(--line-soft)'}; background: ${isActive ? 'var(--primary-light)' : 'var(--surface-under)'}; font-size: 18px; cursor: pointer; transition: all 0.2s;">
                    ${c.flag}
                  </button>
                `;
              }).join("")}
            </div>
          </div>

          <!-- Language Selection -->
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <label style="font-size: 11px; color: var(--muted); font-weight: 500;">Sistem Arayüz Dili</label>
            <select class="select slim-select" data-action="update-startup-lang" style="width: 100%; height: 36px; font-size: 13px;">
              <option value="tr" ${currentLang === 'tr' ? 'selected' : ''}>🇹🇷 Türkçe</option>
              <option value="en" ${currentLang === 'en' ? 'selected' : ''}>🇺🇸 English</option>
              <option value="de" ${currentLang === 'de' ? 'selected' : ''}>🇩🇪 Deutsch</option>
              <option value="es" ${currentLang === 'es' ? 'selected' : ''}>🇪🇸 Español</option>
            </select>
          </div>

          <!-- Quick Save Startup Preferences -->
          <div style="border-top: 1px solid var(--line-soft); padding-top: 10px; margin-top: 4px; display: flex; flex-direction: column; gap: 8px;">
            <div style="font-size: 11px; color: var(--muted); line-height: 1.3;">
              Tercihlerinizi varsayılan başlangıç ayarı olarak kaydedin.
            </div>
            
            <input type="hidden" id="floating-start-portal" value="${currentCountry}" />
            <input type="hidden" id="floating-start-lang" value="${currentLang}" />

            <button class="btn primary btn-sm" data-action="save-startup-settings" style="width: 100%; font-size: 12px; height: 32px; justify-content: center;">
              Başlangıç Ayarı Yap
            </button>
          </div>
        </div>
      ` : ""}
    </div>
  `;
}
