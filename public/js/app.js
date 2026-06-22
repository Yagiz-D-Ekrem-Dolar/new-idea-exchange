function render() {
  document.body.dataset.theme = state.theme;
  // "products" stays merged into the Studio hub. Normalize state.page here (before
  // header/title/body all read it) so the header doesn't show a stale/wrong label
  // while the body shows Studio content. "teams" is its own standalone page.
  if (state.page === "products") {
    state.page = "studio";
    state.studioTab = "products";
  }
  translateAllInState();
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

  if (action === "set-teams-tab") {
    state.teamsTab = actionButton.dataset.tab;
    render();
    return;
  }

  if (action === "start-create-club") {
    state.teamsView = "createClub";
    state.clubDraft = { name: "", description: "", category: "Spor" };
    render();
    return;
  }

  if (action === "toggle-club-join") {
    const clubId = actionButton.dataset.id;
    const club = state.clubs.find(c => c.id === clubId);
    if (club) {
      const userId = currentUser().id;
      club.members = club.members || [];
      if (club.members.includes(userId)) {
        club.members = club.members.filter(uid => uid !== userId);
      } else {
        club.members.push(userId);
      }
      render();
    }
    return;
  }

  if (action === "club-create-submit") {
    const draft = state.clubDraft || {};
    if (draft.name && draft.name.trim() && draft.description && draft.description.trim()) {
      const newClub = {
        id: "club-" + Date.now(),
        name: draft.name.trim(),
        description: draft.description.trim(),
        category: draft.category || "Spor",
        country: state.activeCountry,
        createdAt: new Date().toLocaleDateString("tr-TR"),
        createdBy: currentUser().id,
        members: [currentUser().id],
        tags: [],
        messages: []
      };
      state.clubs = state.clubs || [];
      state.clubs.push(newClub);
      state.teamsView = null;
      state.clubDraft = null;
      render();
    }
    return;
  }

  if (action === "open-club") {
    state.selectedClubId = actionButton.dataset.id;
    state.teamsView = "clubDetail";
    render();
    resetScroll();
    return;
  }

  if (action === "send-club-message") {
    const clubId = actionButton.dataset.id;
    const input = document.querySelector("[data-club-chat-draft]");
    const body = (input ? input.value : state.clubChatDraft || "").trim();
    if (!body) return;
    const club = state.clubs.find(c => c.id === clubId);
    if (club) {
      club.messages = club.messages || [];
      club.messages.push({ own: true, body, time: "Az önce" });
      state.clubChatDraft = "";
      render();
      requestAnimationFrame(() => {
        const thread = document.getElementById("club-chat-thread");
        if (thread) thread.scrollTop = thread.scrollHeight;
      });
    }
    return;
  }

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

    // Reset filters
    state.filters.search = "";
    state.filters.company = "Tümü";
    state.filters.department = "Tümü";
    state.filters.status = "Tümü";
    state.filters.type = "Tümü";
    state.filters.scope = "Tümü";

    state.visibleIdeasCount = 12;
    state.visibleBorsaIdeasCount = 12;
    state.visibleAnnouncementsCount = 18;

    // Reset messaging
    state.selectedDirectPersonId = null;
    const countrySpaces = spacesInScope();
    if (countrySpaces && countrySpaces.length > 0) {
      state.selectedMessageSpaceId = countrySpaces[0].id;
    }

    render();
    return;
  }

  if (action === "toggle-global-translation") {
    state.globalTranslateAll = !state.globalTranslateAll;
    state.translatedIdeaIds = {};
    render();
    return;
  }

  if (action === "load-more-ideas") {
    state.visibleIdeasCount = (state.visibleIdeasCount || 12) + 12;
    render();
    return;
  }

  if (action === "load-more-announcements") {
    state.visibleAnnouncementsCount = (state.visibleAnnouncementsCount || 18) + 18;
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
      state.page = "teams";
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

  if (action === "toggle-mentor-composer") {
    state.mentorComposerOpen = !state.mentorComposerOpen;
    render();
    return;
  }

  if (action === "submit-mentor-item") {
    const name = document.getElementById("mentor-composer-name")?.value.trim();
    const title = document.getElementById("mentor-composer-title")?.value.trim();
    const specialtiesStr = document.getElementById("mentor-composer-specialties")?.value.trim();
    const bio = document.getElementById("mentor-composer-bio")?.value.trim();
    const email = document.getElementById("mentor-composer-email")?.value.trim() || "mentor@sabanci.example";
    
    if (!name || !title || !specialtiesStr || !bio) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }
    
    const specialties = specialtiesStr.split(",").map(s => s.trim()).filter(Boolean);
    
    state.mentors = state.mentors || [];
    state.mentors.unshift({
      id: `mentor-${Date.now()}`,
      name,
      title,
      specialties,
      bio,
      avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 90) + 10}.jpg`,
      email
    });
    
    state.mentorComposerOpen = false;
    alert("Mentörlük profiliniz/ilanınız başarıyla eklendi.");
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
      alert(`Bu işlemi gerçekleştirmek için yeterli bakiyeniz yok! Gerekli: ${fee} BBVA (Mevcut: ${state.marketBudget} BBVA)`);
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
      location: user.location || "Ciudad BBVA",
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
      companyId: companyVal === "Bağımsız" ? "independent" : (affiliationCompanies.find(c => c.name === companyVal)?.id || "bbva-group"),
      marketCategory: marketCategoryVal,
      marketTicker: `NIE-${String(state.ideas.length + 1).padStart(2, "0")}`,
      marketPrice: 100,
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

          state.quickFlowFeedback = `${quantity} birim ${idea.marketTicker} alındı. Bütçe ${formatCurrency(state.marketBudget)}.`;
          
          const royalty = Math.round(totalPrice * 0.05);
          if (royalty > 0) {
            if (idea.authorId === currentUser().id) {
              state.marketBudget += royalty;
              state.quickFlowFeedback += ` Kendi projeniz olduğu için %5 Girişimci Telifi (+${royalty} BBVA) cüzdanınıza eklendi!`;
            } else {
              const authorUser = demoUsers.find(u => u.id === idea.authorId);
              if (authorUser) {
                authorUser.voteCreditBalance = (authorUser.voteCreditBalance || 0) + royalty;
                state.quickFlowFeedback += ` Girişimciye (${authorUser.name}) %5 (%5 = ${royalty} BBVA) telif ödendi.`;
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
        country: state.activeCountry,
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

  if (action === "toggle-external-signup") {
    state.loginView = "external-signup";
    state.loginError = "";
    state.externalSubmitSuccess = false;
    render();
    return;
  }

  if (action === "toggle-login-default") {
    state.loginView = "default";
    state.loginError = "";
    state.externalSubmitSuccess = false;
    render();
    return;
  }

  if (action === "submit-external-application") {
    const draft = state.externalDraft || {};
    if (!draft.name || !draft.name.trim() ||
        !draft.email || !draft.email.trim() ||
        !draft.startupName || !draft.startupName.trim() ||
        !draft.ideaTitle || !draft.ideaTitle.trim() ||
        !draft.summary || !draft.summary.trim()) {
      state.loginError = "Lütfen tüm alanları doldurun.";
      render();
      return;
    }

    const newApp = {
      id: "ext-" + Date.now(),
      name: draft.name.trim(),
      email: draft.email.trim(),
      startupName: draft.startupName.trim(),
      ideaTitle: draft.ideaTitle.trim(),
      summary: draft.summary.trim(),
      portal: draft.portal || "Sabancı",
      status: "new",
      date: new Date().toLocaleDateString("tr-TR")
    };

    state.externalApplications = state.externalApplications || [];
    state.externalApplications.push(newApp);
    state.externalDraft = { name: "", email: "", startupName: "", ideaTitle: "", summary: "", portal: "Sabancı" };
    state.externalSubmitSuccess = true;
    state.loginError = "";
    render();
    return;
  }

  if (action === "accept-external-app") {
    const appId = actionButton.dataset.id;
    const app = state.externalApplications.find(a => a.id === appId);
    if (app) {
      app.status = "accepted";
      
      const id = `idea-ext-${Date.now()}`;
      const newIdea = {
        id,
        title: app.ideaTitle,
        summary: app.summary,
        problem: "Dış girişimci tarafından iletilen iş birliği veya yatırım başvurusudur.",
        solution: "Teknoloji veya süreç entegrasyonu ile pilot çalışma başlatılması.",
        type: "Girişimci Fikri",
        company: app.startupName + " (Girişim)",
        department: "Dış Girişimcilik",
        location: "Dış Hızlandırıcı",
        city: "İstanbul",
        authorId: "ext-user-" + app.id,
        authorLabel: app.name,
        anonymity: "İsmimle paylaş",
        visibility: "Kurum içi",
        status: "new",
        estimatedImpact: "Yüksek",
        estimatedCost: "Orta",
        implementationTime: "3 Ay",
        successMetric: "Entegrasyon başarısı",
        riskNotes: "Süreç ve KVKK uyumu kontrol edilmelidir.",
        communityScore: 65,
        strategicScore: 78,
        aiScore: 82,
        credits: 0,
        supporters: 0,
        comments: [],
        tags: ["Dış Girişimci", app.portal],
        createdAt: new Date().toISOString().slice(0, 10),
        companyId: app.portal === "Sabancı" ? "sabanci-holding" : "bbva-group",
        marketCategory: "Girişimci Fikri",
        marketTicker: `EXT-${String(state.ideas.length + 1).padStart(2, "0")}`,
        marketPrice: 100,
        marketChange: 0.0,
        marketVolume: 0,
        marketShares: 1000,
        marketSpark: [80, 81, 82, 82],
        files: [],
        applications: [],
        country: "TR"
      };
      
      state.ideas.unshift(newIdea);
    }
    render();
    return;
  }

  if (action === "reject-external-app") {
    const appId = actionButton.dataset.id;
    const app = state.externalApplications.find(a => a.id === appId);
    if (app) {
      app.status = "rejected";
    }
    render();
    return;
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
    state.theme = "light";
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
        alert(`Yeni Proje eklemek için cüzdanınızda en az ${fee} BBVA olmalıdır! (Mevcut: ${state.marketBudget} BBVA)`);
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

          state.quickFlowFeedback = `${quantity} birim ${idea.marketTicker} alındı. Bütçe ${formatCurrency(state.marketBudget)}.`;
          
          const royalty = Math.round(totalPrice * 0.05);
          if (royalty > 0) {
            if (idea.authorId === currentUser().id) {
              state.marketBudget += royalty;
              state.quickFlowFeedback += ` Kendi projeniz olduğu için %5 Girişimci Telifi (+${royalty} BBVA) cüzdanınıza eklendi!`;
            } else {
              const authorUser = demoUsers.find(u => u.id === idea.authorId);
              if (authorUser) {
                authorUser.voteCreditBalance = (authorUser.voteCreditBalance || 0) + royalty;
                state.quickFlowFeedback += ` Girişimciye (${authorUser.name}) %5 (%5 = ${royalty} BBVA) telif ödendi.`;
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
    state.visibleAnnouncementsCount = 18;
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

  if (action === "escalate-to-board") {
    const ESCALATION_COST = 5000;
    const idea = state.ideas.find(item => item.id === actionButton.dataset.id);
    if (idea && !idea.escalatedToBoard) {
      if (state.marketBudget < ESCALATION_COST) {
        alert(`Karar Kurulu'na taşımak için yeterli bakiyeniz yok! Gerekli: ${ESCALATION_COST} BBVA (Mevcut: ${Math.round(state.marketBudget)} BBVA)`);
        return;
      }
      const confirmed = confirm(`"${idea.title}" fikrini ${ESCALATION_COST} BBVA karşılığında Karar Kurulu'nun inceleme listesine taşımak istiyor musunuz? Tutar onayladığınızda hesabınızdan düşülecek.`);
      if (!confirmed) return;
      state.marketBudget -= ESCALATION_COST;
      idea.escalatedToBoard = true;
      idea.boardEscalatedAt = new Date().toLocaleDateString("tr-TR");
      idea.boardEscalatedBy = currentUser().name;
      render();
    }
    return;
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
  if (event.target.matches("[data-ext-draft]")) {
    const field = event.target.dataset.extDraft;
    state.externalDraft = state.externalDraft || { name: "", email: "", startupName: "", ideaTitle: "", summary: "", portal: "Sabancı" };
    state.externalDraft[field] = event.target.value;
    return;
  }

  if (event.target.matches("[data-global-search]")) {
    state.globalSearchQuery = event.target.value;
    const inputs = document.querySelectorAll("[data-global-search]");
    inputs.forEach(input => {
      if (input !== event.target) input.value = event.target.value;
    });
    state.visibleIdeasCount = 12;
    state.visibleBorsaIdeasCount = 12;
    state.visibleAnnouncementsCount = 18;
    render();
    return;
  }

  if (event.target.matches("[data-market-filter='search']")) {
    state.marketSearch = event.target.value;
    state.visibleBorsaIdeasCount = 12;
    state.visibleAnnouncementsCount = 18;
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
    state.visibleAnnouncementsCount = 18;
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
  if (event.target.matches("[data-club-filter='search']")) {
    state.filters.clubSearch = event.target.value;
    render();
    return;
  }
  if (event.target.matches("[data-club-draft-name]")) {
    state.clubDraft = state.clubDraft || { name: "", description: "", category: "Spor" };
    state.clubDraft.name = event.target.value;
    const submitBtn = document.querySelector("[data-action='club-create-submit']");
    if (submitBtn) {
      submitBtn.disabled = !state.clubDraft.name.trim() || !state.clubDraft.description.trim();
    }
  }
  if (event.target.matches("[data-club-draft-desc]")) {
    state.clubDraft = state.clubDraft || { name: "", description: "", category: "Spor" };
    state.clubDraft.description = event.target.value;
    const submitBtn = document.querySelector("[data-action='club-create-submit']");
    if (submitBtn) {
      submitBtn.disabled = !state.clubDraft.name.trim() || !state.clubDraft.description.trim();
    }
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
  if (event.target.matches("[data-ext-draft]")) {
    const field = event.target.dataset.extDraft;
    state.externalDraft = state.externalDraft || { name: "", email: "", startupName: "", ideaTitle: "", summary: "", portal: "Sabancı" };
    state.externalDraft[field] = event.target.value;
    return;
  }

  const actionEl = event.target.closest("[data-action]");
  if (actionEl) {
    const action = actionEl.dataset.action;
    if (action === "change-active-country") {
      state.activeCountry = event.target.value;
      state.translatedIdeaIds = {};
      state.globalTranslateAll = false;

      // Reset filters
      state.filters.search = "";
      state.filters.company = "Tümü";
      state.filters.department = "Tümü";
      state.filters.status = "Tümü";
      state.filters.type = "Tümü";
      state.filters.scope = "Tümü";

      state.visibleIdeasCount = 12;
      state.visibleBorsaIdeasCount = 12;
    state.visibleAnnouncementsCount = 18;

      // Reset messaging
      state.selectedDirectPersonId = null;
      const countrySpaces = spacesInScope();
      if (countrySpaces && countrySpaces.length > 0) {
        state.selectedMessageSpaceId = countrySpaces[0].id;
      }

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
    state.visibleAnnouncementsCount = 18;
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
    state.visibleAnnouncementsCount = 18;
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

  const clubFilter = event.target.closest("[data-club-filter]");
  if (clubFilter) {
    const filterName = clubFilter.dataset.clubFilter;
    if (filterName === "category") state.filters.clubCategory = event.target.value;
    render();
    return;
  }

  if (event.target.matches("[data-club-draft-category]")) {
    state.clubDraft = state.clubDraft || { name: "", description: "", category: "Spor" };
    state.clubDraft.category = event.target.value;
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

  if (event.target.matches("[data-club-chat-draft]")) {
    state.clubChatDraft = event.target.value;
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
    createSeedSocialPost("sp-rich-3", "p15", "Garanti BBVA Mobil API dokümantasyon akışı için kısa referans linki bırakıyorum. Ürün ve operasyon ekibi aynı sayfadan ilerlesin.", "Bugün", 16, {
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
      imageCaption: "Garanti BBVA Mobil onboarding kontrol akışı"
    });
  }
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
      id: "bbva-securities-es-uretim",
      name: "BBVA Securities España Üretim Santralleri A.Ş.",
      shortName: "BBVA Securities España Üretim",
      logo: "./assets/company-logos/bbva-securities-es-uretim.svg",
      domain: "bbva-securities-esuretim.com.tr",
      type: "Enerji Üretimi",
      countries: ["Türkiye"],
      cities: ["Adana", "Çanakkale", "Aydın", "Balıkesir"],
      campuses: ["Tufanbeyli Termik Santrali", "Bandırma Doğalgaz Santrali", "Çanakkale Rüzgar Santrali"],
      departments: ["Yeşil Enerji Operasyonları", "Santral Yönetimi", "Ar-Ge"]
    },
    {
      id: "sabanci-univ",
      name: "BBVA University",
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
      name: "Hacı Ömer BBVA Foundation",
      shortName: "BBVA Foundation",
      logo: "./assets/company-logos/sabanci-vakfi.svg",
      domain: "sabancivakfi.org",
      type: "Sosyal Sorumluluk",
      countries: ["Türkiye"],
      cities: ["İstanbul", "Ankara"],
      campuses: ["BBVA Foundation Merkez"],
      departments: ["Sosyal Programlar", "Hibe Programları", "Ortaklıklar"]
    },
    {
      id: "garanti-bbva-uk",
      name: "Garanti BBVA AG New York Branch",
      shortName: "Garanti BBVA UK",
      logo: "./assets/company-logos/garanti-bbva.svg",
      domain: "garanti-bbva.co.uk",
      type: "Banka",
      countries: ["Amerika Birleşik Devletleri"],
      cities: ["New York"],
      campuses: ["New York City Office"],
      departments: ["International Trade Finance", "Treasury", "Compliance"]
    },
    {
      id: "akcansa-uk",
      name: "Akcansa UK Cement Trading Ltd.",
      shortName: "Akçansa UK",
      logo: "./assets/company-logos/akcansa.svg",
      domain: "akcansa.co.uk",
      type: "Yapı Malzemeleri",
      countries: ["Amerika Birleşik Devletleri"],
      cities: ["New York", "Bristol"],
      campuses: ["Bristol Port Terminal"],
      departments: ["Logistics", "Wholesale Sales"]
    },
    {
      id: "garanti-bbva-us",
      name: "Garanti BBVA US Representative Office",
      shortName: "Garanti BBVA US",
      logo: "./assets/company-logos/garanti-bbva.svg",
      domain: "garanti-bbva.com",
      type: "Banka",
      countries: ["Amerika Birleşik Devletleri"],
      cities: ["New York"],
      campuses: ["Manhattan Office"],
      departments: ["Investor Relations", "Corporate Banking Linkage"]
    },
    {
      id: "bbva-spark-es-us",
      name: "BBVA Spark España North America Inc.",
      shortName: "BBVA Spark España US",
      logo: "./assets/company-logos/bbva-spark-es.svg",
      domain: "bbva-spark-es.com",
      type: "Otomotiv",
      countries: ["Amerika Birleşik Devletleri"],
      cities: ["Orlando", "Houston"],
      campuses: ["Orlando Distribution Center"],
      departments: ["Electric Bus Sales", "Spare Parts Logistics", "Customer Support"]
    },
    {
      id: "garanti-bbva-de",
      name: "Garanti BBVA AG (Frankfurt)",
      shortName: "Garanti BBVA DE",
      logo: "./assets/company-logos/garanti-bbva.svg",
      domain: "garanti-bbva.de",
      type: "Banka",
      countries: ["Arjantin"],
      cities: ["Frankfurt", "Buenos Aires"],
      campuses: ["Frankfurt HQ"],
      departments: ["Retail Banking", "Risk Management", "Operations"]
    },
    {
      id: "bbva-colombia-de",
      name: "BBVA Colombia Argentina GmbH",
      shortName: "BBVA Colombia DE",
      logo: "./assets/company-logos/bbva-colombia.svg",
      domain: "bbva-colombia.com",
      type: "Sanayi",
      countries: ["Arjantin"],
      cities: ["Buenos Aires"],
      campuses: ["Buenos Aires Composite Research Lab"],
      departments: ["Composite Engineering", "Quality Control"]
    },
    {
      id: "garanti-bbva-es",
      name: "Garanti BBVA Representative Office Spain",
      shortName: "Garanti BBVA ES",
      logo: "./assets/company-logos/garanti-bbva.svg",
      domain: "garanti-bbva.com",
      type: "Banka",
      countries: ["İspanya"],
      cities: ["Madrid"],
      campuses: ["Madrid Financial District Office"],
      departments: ["Corporate Relations", "Compliance"]
    },
    {
      id: "bbva-spark-es-es",
      name: "BBVA Spark España España S.L.",
      shortName: "BBVA Spark España ES",
      logo: "./assets/company-logos/bbva-spark-es.svg",
      domain: "bbva-spark-es.es",
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
    const countryCode = randCountry === "Türkiye" ? "TR" : (randCountry === "Amerika Birleşik Devletleri" || randCountry === "United States" ? "GB" : (randCountry === "Amerika Birleşik Devletleri" || randCountry === "United States" ? "US" : (randCountry === "Arjantin" || randCountry === "Argentina" ? "DE" : "ES")));
    
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

  // Re-map authentic names to demoUsers based on their country (must run before
  // ideas/teams/announcements pick authors, since authorLabel snapshots u.name by value)
  demoUsers.forEach((u, index) => {
    if (u.id === "u3") {
      u.name = "Can Koç";
      u.email = "can.koc@sabanci.example";
      u.photo = "https://randomuser.me/api/portraits/men/75.jpg";
      u.avatarUrl = "https://randomuser.me/api/portraits/men/75.jpg";
      return;
    }
    const names = countryNames[u.country] || countryNames.US;
    const nameIndex = index % names.length;
    u.name = names[nameIndex];
    const randCompany = companyList[index % companyList.length] || companyList[0];
    u.email = u.name.toLowerCase().replace(/\s+/g, ".") + `@${randCompany.domain}`;
    const isMale = (index % 2 === 0);
    const photoId = (index % 70) + 1;
    u.photo = `https://randomuser.me/api/portraits/${isMale ? 'men' : 'women'}/${photoId}.jpg`;
    u.avatarUrl = u.photo;
  });

  Object.keys(profilePhotos).forEach(k => {
    const found = demoUsers.find(u => u.id === k);
    if (found) {
      profilePhotos[k] = found.photo;
    }
  });
  demoUsers.forEach(u => {
    namedAvatarPhotos[u.name] = u.photo;
  });

  // 3. Generate 150+ ideas (10x original scale)
  const industryTrends = [
    {
      area: "FinTech & Dijital Bankacılık",
      tr: {
        title: "Açık Bankacılık ile KOBİ Alacak Sigortası",
        summary: "KOBİ bankacılığı işlemlerinde açık bankacılık verileriyle alacak riskini saniyeler içinde hesaplayıp poliçe kesen modül.",
        problem: "KOBİ'ler ticari alacak risklerini sigortalamak için çok fazla evrak ve uzun bekleme süreleriyle karşılaşıyor.",
        solution: "Garanti BBVA API'leri üzerinden KOBİ finansal verilerini analiz ederek anında kredi ve alacak sigortası sunan sistem."
      },
      en: {
        title: "SME Receivables Insurance with Open Banking",
        summary: "A module that calculates receivables risk in seconds using open banking data in SME banking transactions and issues policies.",
        problem: "SMEs face a lot of paperwork and long waiting times to insure commercial receivables risk.",
        solution: "A system that offers instant credit and receivables insurance by analyzing SME financial data through Garanti BBVA APIs."
      },
      de: {
        title: "KMU-Forderungsversicherung mit Open Banking",
        summary: "Ein Modul, das das Forderungsrisiko im KMU-Geschäft mithilfe von Open-Banking-Daten in Sekundenschnelle berechnet und Policen ausstellt.",
        problem: "KMU sind mit viel Papierkram und langen Wartezeiten konfrontiert, um das gewerbliche Forderungsrisiko abzusichern.",
        solution: "Ein System, das durch Analyse der KMU-Finanzdaten über Garanti BBVA-APIs sofortige Kredite und Forderungsversicherungen anbietet."
      },
      es: {
        title: "Seguro de Cuentas por Cobrar para Pymes con Banca Abierta",
        summary: "Un módulo que calcula el riesgo de cuentas por cobrar en segundos utilizando datos de banca abierta en transacciones de pymes.",
        problem: "Las pymes enfrentan mucho papeleo y largos tiempos de espera para asegurar el riesgo de cuentas por cobrar comerciales.",
        solution: "Un sistema que ofrece crédito y seguro de cuentas por cobrar al instante analizando datos financieros de pymes a través de APIs de Garanti BBVA."
      }
    },
    {
      area: "Sürdürülebilirlik & Yeşil Enerji",
      tr: {
        title: "Fabrika Bacaları İçin Akıllı Karbon İzleme Ağı",
        summary: "BBVA CIB US ve BBVA Colombia üretim tesislerindeki karbon emisyonunu anlık IoT sensörleriyle ölçüp bulutta raporlayan yeşil teknoloji.",
        problem: "Karbon salınımı beyanları periyodik ve manuel yapıldığı için hata payı yüksek ve optimizasyon gecikiyor.",
        solution: "Fabrika bacalarına takılan IoT sensörleriyle emisyonu saniyelik kaydeden ve sınır aşımında uyaran akıllı yazılım."
      },
      en: {
        title: "Smart Carbon Monitoring Network for Factory Chimneys",
        summary: "Green technology that measures carbon emissions in BBVA CIB US and BBVA Colombia production facilities with instant IoT sensors and reports to the cloud.",
        problem: "Since carbon emission statements are periodic and manual, the margin of error is high and optimization is delayed.",
        solution: "Smart software that records emissions in seconds with IoT sensors attached to factory chimneys and warns in case of limit violations."
      },
      de: {
        title: "Intelligentes Kohlenstoff-Überwachungsnetzwerk für Schornsteine",
        summary: "Grüne Technologie, die Kohlenstoffemissionen in BBVA CIB US- und BBVA Colombia-Produktionsstätten mit IoT-Sensoren misst und in der Cloud meldet.",
        problem: "Da CO2-Meldungen periodisch und manuell erfolgen, ist die Fehlerquote hoch und die Optimierung verzögert sich.",
        solution: "Intelligente Software, die Emissionen im Sekundentakt mit an Schornsteinen angebrachten IoT-Sensoren erfasst und bei Überschreitungen warnt."
      },
      es: {
        title: "Red de Monitoreo de Carbono Inteligente para Chimeneas",
        summary: "Tecnología verde que mide las emisiones de carbono en las plantas de BBVA CIB US y BBVA Colombia con sensores IoT instantáneos y reporta a la nube.",
        problem: "Dado que las declaraciones de emisión de carbono son periódicas and manuales, el margen de error es alto y la optimización se retrasa.",
        solution: "Software inteligente que registra las emisiones en segundos con sensores IoT conectados a las chimeneas y advierte en caso de infracciones."
      }
    },
    {
      area: "Yapay Zekâ & Derin Teknoloji",
      tr: {
        title: "AI Destekli Lojistik Rota Optimizasyonu",
        summary: "BBVA Seguros Colombia sevkiyat kamyonları için trafik, hava durumu ve sipariş yoğunluğunu işleyen dinamik rota planlama algoritması.",
        problem: "Statik rotalar nedeniyle teslimat süreleri uzuyor ve yakıt tüketimi artıyor.",
        solution: "Her sabah siparişleri ve yol durumunu analiz ederek en verimli teslimat haritasını çıkaran yapay zeka motoru."
      },
      en: {
        title: "AI-Powered Logistics Route Optimization",
        summary: "Dynamic route planning algorithm processing traffic, weather, and order density for BBVA Seguros Colombia delivery trucks.",
        problem: "Delivery times are prolonged and fuel consumption increases due to static routes.",
        solution: "An AI engine that analyzes orders and road conditions every morning to create the most efficient delivery map."
      },
      de: {
        title: "KI-gestützte Logistik-Routenoptimierung",
        summary: "Dynamischer Routenplanungsalgorithmus, der Verkehr, Wetter und Auftragsdichte für BBVA Seguros Colombia-Lieferwagen verarbeitet.",
        problem: "Statische Routen verlängern die Lieferzeiten und erhöhen den Kraftstoffverbrauch.",
        solution: "Eine KI-Engine, die jeden Morgen Bestellungen und Straßenverhältnisse analysiert, um die effizienteste Lieferkarte zu erstellen."
      },
      es: {
        title: "Optimización de Rutas Logísticas con IA",
        summary: "Algoritmo dinámico de planificación de rutas que procesa el tráfico, el clima y la densidad de pedidos para camiones de BBVA Seguros Colombia.",
        problem: "Los tiempos de entrega se prolongan y el consumo de combustible aumenta debido a rutas estáticas.",
        solution: "Un motor de IA que analiza los pedidos y las condiciones de la carretera cada mañana para generar el mapa de entrega más eficiente."
      }
    },
    {
      area: "PropTech & Akıllı Şehirler",
      tr: {
        title: "Akıllı Binalar İçin Dinamik HVAC Kontrolü",
        summary: "Ciudad BBVA ve iştirak plazalarında sensör verileriyle ısıtma ve soğutmayı otomatik ayarlayan derin öğrenme modeli.",
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
  const countryCycle = ["TR", "US", "GB", "DE", "ES"];
  const companiesByCountryCode = {};
  countryCycle.forEach(code => {
    companiesByCountryCode[code] = companyList.filter(c => c.countries && c.countries.includes(countryNameTR[code]));
  });

  for (let i = currentIdeaCount; i < targetIdeaCount; i++) {
    const trend = industryTrends[i % industryTrends.length];
    const countryCode = countryCycle[i % countryCycle.length];
    const countryCompanyPool = companiesByCountryCode[countryCode];
    const randCompany = countryCompanyPool.length ? countryCompanyPool[Math.floor(Math.random() * countryCompanyPool.length)] : companyList[i % companyList.length];

    const countryUserPool = demoUsers.filter(u => u.country === countryCode);
    const randomUser = countryUserPool.length ? countryUserPool[Math.floor(Math.random() * countryUserPool.length)] : demoUsers[Math.floor(Math.random() * demoUsers.length)];
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
    const teamCountry = randCompany.countries[0] || "Türkiye";
    const teamCountryCode = teamCountry === "Türkiye" ? "TR" : (teamCountry === "Amerika Birleşik Devletleri" || teamCountry === "United States" ? "GB" : (teamCountry === "Amerika Birleşik Devletleri" || teamCountry === "United States" ? "US" : (teamCountry === "Arjantin" || teamCountry === "Argentina" ? "DE" : "ES")));
    const teamUserPool = demoUsers.filter(u => u.country === teamCountryCode);
    const creatorUser = teamUserPool.length ? teamUserPool[Math.floor(Math.random() * teamUserPool.length)] : demoUsers[Math.floor(Math.random() * demoUsers.length)];

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

  const annPhrases = {
    tr: { title: (c, n) => `🚀 Yeni Proje Lansmanı: ${c} AI İnisiyatifi #${n}`, body: (c, n) => `Merhaba ${c} ekibi, verimliliği artıracak yeni nesil araçlarımızı kullanıma sunuyoruz. Proje #${n} kapsamında yeni denemeler yapılıyor! Desteklerinizi bekliyoruz.` },
    en: { title: (c, n) => `🚀 New Project Launch: ${c} AI Initiative #${n}`, body: (c, n) => `Hello ${c} team, we are rolling out next-generation tools to boost efficiency. New trials are underway as part of Project #${n}! We look forward to your support.` },
    de: { title: (c, n) => `🚀 Neuer Projektstart: ${c} KI-Initiative #${n}`, body: (c, n) => `Hallo ${c}-Team, wir führen Tools der nächsten Generation ein, um die Effizienz zu steigern. Im Rahmen von Projekt #${n} laufen neue Tests! Wir freuen uns auf Ihre Unterstützung.` },
    es: { title: (c, n) => `🚀 Lanzamiento de Nuevo Proyecto: Iniciativa de IA de ${c} #${n}`, body: (c, n) => `Hola equipo de ${c}, estamos lanzando herramientas de próxima generación para mejorar la eficiencia. ¡Se están realizando nuevas pruebas como parte del Proyecto #${n}! Esperamos su apoyo.` }
  };

  for (let i = 0; i < 400; i++) {
    const countryCode = countryCycle[i % countryCycle.length];
    const countryCompanyPool = companiesByCountryCode[countryCode];
    const randCompany = countryCompanyPool.length ? countryCompanyPool[Math.floor(Math.random() * countryCompanyPool.length)] : companyList[i % companyList.length];
    const annUserPool = demoUsers.filter(u => u.country === countryCode);
    const randomUser = annUserPool.length ? annUserPool[Math.floor(Math.random() * annUserPool.length)] : demoUsers[Math.floor(Math.random() * demoUsers.length)];
    const originalLang = countryCode === "TR" ? "tr" : (countryCode === "DE" ? "de" : (countryCode === "ES" ? "es" : "en"));
    const projectNum = i + 10;

    state.announcements.push({
      id: `ann-gen-${i}`,
      title: annPhrases[originalLang].title(randCompany.shortName, projectNum),
      author: randomUser.name,
      authorId: randomUser.id,
      companyId: randCompany.id,
      type: "Topluluk",
      area: "Yenilikçi Fikirler",
      importanceScore: 4,
      body: annPhrases[originalLang].body(randCompany.shortName, projectNum),
      date: `2026-06-${(10 + (i % 15)).toString().padStart(2, '0')}`,
      comments: [],
      likes: 15 + i * 2,
      imageUrl: i % 2 === 0 ? aiImages[i % aiImages.length] : "",
      country: countryCode,
      translations: {
        tr: { title: annPhrases.tr.title(randCompany.shortName, projectNum), body: annPhrases.tr.body(randCompany.shortName, projectNum) },
        en: { title: annPhrases.en.title(randCompany.shortName, projectNum), body: annPhrases.en.body(randCompany.shortName, projectNum) },
        de: { title: annPhrases.de.title(randCompany.shortName, projectNum), body: annPhrases.de.body(randCompany.shortName, projectNum) },
        es: { title: annPhrases.es.title(randCompany.shortName, projectNum), body: annPhrases.es.body(randCompany.shortName, projectNum) }
      }
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
      isAiGenerated: true,
      companyId: randCompany.id
    });
  }

  // Assign ideas and teams directly to the active state so they populate
  const equities = [15, 20, 25, 30, 35, 40];
  state.ideas = initialIdeas.map((idea, idx) => {
    idea.openEquity = idea.openEquity || equities[idx % equities.length];
    idea.marketTicker = idea.marketTicker || `NIE-${String(idx + 1).padStart(2, "0")}`;
    return idea;
  });
  state.teams = initialTeams;

  // Initialize the 12 studios
  state.studios = [
    { id: "studio-ops", name: "Operasyon Çözüm Stüdyosu", category: "Operasyon", status: "Aktif", popularity: 94, createdAt: "2026-06-01", description: "Şube, onay ve çağrı merkezi problemlerini hızlı pilotlara çeviren çalışma alanı.", linkedTeams: [], linkedIdeas: [] },
    { id: "studio-ai", name: "AI Deney Laboratuvarı", category: "Yapay Zekâ", status: "Aktif", popularity: 88, createdAt: "2026-05-18", description: "Platform içi veriyle analiz, özetleme ve karar destek prototipleri geliştiren stüdyo.", linkedTeams: [], linkedIdeas: [] },
    { id: "studio-green", name: "Yeşil Finans Stüdyosu", category: "Sürdürülebilirlik", status: "Kuruluyor", popularity: 76, createdAt: "2026-06-05", description: "ESG, karbon takip ve yeşil finans ürünlerini iş birliğiyle olgunlaştırır.", linkedTeams: [], linkedIdeas: [] },
    { id: "studio-digital", name: "Dijital Ürün Stüdyosu", category: "FinTech", status: "Aktif", popularity: 81, createdAt: "2026-05-28", description: "Garanti BBVA Mobil, ödeme ve dijital onboarding akışlarını ürünleştiren ekip alanı.", linkedTeams: [], linkedIdeas: [] },
    { id: "studio-industry", name: "Sanayi & Malzeme İnovasyon Stüdyosu", category: "Sanayi", status: "Aktif", popularity: 85, createdAt: "2026-05-20", description: "BBVA Colombia ve BBVA CIB US bünyesindeki kompozit malzeme ve çimento Ar-Ge projeleri stüdyosu.", linkedTeams: [], linkedIdeas: [] },
    { id: "studio-energy", name: "Enerji Teknolojileri Stüdyosu", category: "Yeşil Enerji", status: "Aktif", popularity: 90, createdAt: "2026-06-02", description: "BBVA Securities España Üretim yenilenebilir enerji, rüzgar ve hidrojen depolama teknolojileri stüdyosu.", linkedTeams: [], linkedIdeas: [] },
    { id: "studio-mobility", name: "Mobilite & Otomotiv Stüdyosu", category: "Mobilite", status: "Aktif", popularity: 83, createdAt: "2026-05-15", description: "BBVA Spark España elektrikli ve otonom otobüs yazılım/donanım entegrasyonu stüdyosu.", linkedTeams: [], linkedIdeas: [] },
    { id: "studio-retail", name: "Perakende & E-Ticaret Stüdyosu", category: "Perakende", status: "Aktif", popularity: 79, createdAt: "2026-06-03", description: "BBVA Spark México ve BBVA Seguros Colombia müşteri deneyimi, akıllı raf ve lojistik projeleri stüdyosu.", linkedTeams: [], linkedIdeas: [] },
    { id: "studio-sme", name: "KOBİ Destek ve Çözüm Stüdyosu", category: "KOBİ", status: "Kuruluyor", popularity: 72, createdAt: "2026-06-04", description: "KOBİ bankacılığı, sigortacılık ve finansman çözümleri stüdyosu.", linkedTeams: [], linkedIdeas: [] },
    { id: "studio-proptech", name: "Akıllı Şehirler & PropTech Stüdyosu", category: "PropTech", status: "Aktif", popularity: 80, createdAt: "2026-05-22", description: "Akıllı bina yönetim sistemleri, HVAC ve plaza iklimlendirme projeleri stüdyosu.", linkedTeams: [], linkedIdeas: [] },
    { id: "studio-marketing", name: "Müşteri Deneyimi & Pazarlama Stüdyosu", category: "Pazarlama", status: "Aktif", popularity: 86, createdAt: "2026-05-25", description: "Garanti BBVA Emeklilik ve BBVA Seguros México müşteri edinimi, poliçe pazarlama ve UX tasarım stüdyosu.", linkedTeams: [], linkedIdeas: [] },
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
      tr: { title: "Açık Bankacılık API Kullanım Metrikleri", summary: "Garanti BBVA API geçiş süreleri, yük testleri ve aylık çağrı loglarının istatistiksel dağılımı." },
      en: { title: "Open Banking API Usage Metrics", summary: "Statistical distribution of Garanti BBVA API transition times, load tests, and monthly call logs." },
      de: { title: "Open Banking API-Nutzungsmetriken", summary: "Statistische Verteilung von Garanti BBVA-API-Übergangszeiten, Lasttests und monatlichen Anrufprotokollen." },
      es: { title: "Métricas de Uso de API de Banca Abierta", summary: "Distribución estadística de los tiempos de transición de la API de Garanti BBVA, pruebas de carga y registros de llamadas mensuales." }
    },
    {
      area: "Sürdürülebilirlik & Yeşil Enerji",
      tr: { title: "Rüzgar Enerjisi Üretim Verimliliği Raporu", summary: "BBVA Securities España Üretim Çanakkale santralinin rüzgar hızı ve anlık megavat üretim ilişkisi ham verisi." },
      en: { title: "Wind Energy Generation Efficiency Report", summary: "Raw data of wind speed and instantaneous megawatt generation relationship of BBVA Securities España Uretim Canakkale power plant." },
      de: { title: "Effizienzbericht für Windkraftanlagen", summary: "Rohdaten zum Verhältnis von Windgeschwindigkeit und momentaner Megawatt-Erzeugung des Kraftwerks BBVA Securities España Uretim Canakkale." },
      es: { title: "Informe de Eficiencia de Generación de Energía Eólica", summary: "Datos brutos de la velocidad del viento y la relación de generación de megavatios instantáneos de la planta de energía BBVA Securities España Uretim Canakkale." }
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
      tr: { title: "Ciudad BBVA Doluluk Oranları Zaman Serisi", summary: "Kat doluluk sensörlerinin 6 aylık periyotta çalışma saatleri ve hafta sonu bazında ürettiği doluluk ham verileri." },
      en: { title: "Sabanci Center Occupancy Time Series", summary: "Raw occupancy data generated by floor occupancy sensors over a 6-month period on working hours and weekends." },
      de: { title: "Sabanci Center Belegungs-Zeitreihen", summary: "Rohdaten zur Belegung, die von Etagensensoren über einen Zeitraum von 6 Monaten während der Arbeitszeit und an Wochenenden erfasst wurden." },
      es: { title: "Serie Temporal de Ocupación de Sabanci Center", summary: "Datos brutos de ocupación generados por sensores de ocupación de piso durante un período de 6 meses en horas laborables y fines de semana." }
    },
    {
      area: "Akıllı Lojistik & Dağıtım",
      tr: { title: "BBVA Seguros Colombia Gebze Depo Çıkış Zamanlama Seti", summary: "Sipariş hazırlama süreleri, sevkiyat kuyruk uzunluğu ve dağıtım araçlarının yükleme optimizasyon parametreleri." },
      en: { title: "BBVA Seguros Colombia Gebze Warehouse Dispatch Timing Set", summary: "Order preparation times, dispatch queue length, and loading optimization parameters of distribution vehicles." },
      de: { title: "BBVA Seguros Colombia Gebze Lager-Versandzeitplan", summary: "Auftragsbereitstellungszeiten, Warteschlangenlänge im Versand und Parameter zur Ladeoptimierung der Verteilerfahrzeuge." },
      es: { title: "Conjunto de Tiempos de Despacho de Almacén BBVA Seguros Colombia Gebze", summary: "Tiempos de preparación de pedidos, longitud de la cola de despacho y parámetros de optimización de carga de vehículos de distribución." }
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
    const dsCompanyPool = companiesByCountryCode[country];
    for (let i = 0; i < 12; i++) {
      const trend = datasetTrends[i % datasetTrends.length];
      const randCompany = dsCompanyPool.length ? dsCompanyPool[i % dsCompanyPool.length] : companyList[i % companyList.length];
      const dsUserPool = demoUsers.filter(u => u.country === country);
      const randomUser = dsUserPool.length ? dsUserPool[Math.floor(Math.random() * dsUserPool.length)] : demoUsers[Math.floor(Math.random() * demoUsers.length)];

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
        country: country,
        translations: {
          tr: { title: trend.tr.title + ` (${randCompany.shortName})`, summary: trend.tr.summary },
          en: { title: trend.en.title + ` (${randCompany.shortName})`, summary: trend.en.summary },
          de: { title: trend.de.title + ` (${randCompany.shortName})`, summary: trend.de.summary },
          es: { title: trend.es.title + ` (${randCompany.shortName})`, summary: trend.es.summary }
        }
      });
    }
  });

  // Add curated, fully-translated social posts on top of the hand-authored sp-1/sp-2
  // (do NOT reset state.socialPosts here - ensureSocialEnhancements() attaches polls/links
  // to sp-1/sp-2 by id afterwards, and wiping the array would silently break that).
  const socialTemplates = {
    TR: [
      {
        body: "Garanti BBVA Mobil AI Yatırım projemiz Fikir Borsasında listelendi! Desteklerinizi bekliyoruz.",
        translations: {
          tr: "Garanti BBVA Mobil AI Yatırım projemiz Fikir Borsasında listelendi! Desteklerinizi bekliyoruz.",
          en: "Our Garanti BBVA Mobile AI Investment project is listed on the Idea Exchange! We look forward to your support.",
          de: "Unser Garanti BBVA Mobile AI Investment-Projekt ist an der Ideen-Börse gelistet! Wir freuen uns auf Ihre Unterstützung.",
          es: "¡Nuestro proyecto de inversión de IA móvil de Garanti BBVA está listado en la bolsa de ideas! Esperamos su apoyo."
        }
      },
      {
        body: "Garanti BBVA Teknoloji olarak geliştirdiğimiz çoklu dil destekli yapay zeka altyapısı yayında.",
        translations: {
          tr: "Garanti BBVA Teknoloji olarak geliştirdiğimiz çoklu dil destekli yapay zeka altyapısı yayında.",
          en: "The multi-language supported artificial intelligence infrastructure we developed as Garanti BBVA Teknoloji is live.",
          de: "Die von uns als Garanti BBVA Teknoloji entwickelte mehrsprachig unterstützte KI-Infrastruktur ist online.",
          es: "La infraestructura de inteligencia artificial con soporte multilingüe que desarrollamos como Garanti BBVA Teknoloji está en vivo."
        }
      },
      {
        body: "BBVA Spark México mağazalarında otonom ödeme kiosku pilotu müşteri memnuniyetini %18 artırdı.",
        translations: {
          tr: "BBVA Spark México mağazalarında otonom ödeme kiosku pilotu müşteri memnuniyetini %18 artırdı.",
          en: "The autonomous payment kiosk pilot in BBVA Spark México stores increased customer satisfaction by 18%.",
          de: "Das Pilotprojekt für autonome Zahlungskioske in BBVA Spark México-Filialen steigerte die Kundenzufriedenheit um 18%.",
          es: "El piloto de quioscos de pago autónomos en las tiendas BBVA Spark México aumentó la satisfacción del cliente en un 18%."
        }
      }
    ],
    US: [
      {
        body: "Austin utility battery dispatch optimization dataset is uploaded under Data section. Open for model research.",
        translations: {
          tr: "Austin elektrik bataryası dağıtım optimizasyonu veri kümesi Veri bölümüne yüklendi. Model araştırmalarına açık.",
          en: "Austin utility battery dispatch optimization dataset is uploaded under Data section. Open for model research.",
          de: "Der Datensatz zur Optimierung der Austin-Batterieverteilung wurde im Datenbereich hochgeladen. Offen für Modellforschung.",
          es: "El conjunto de datos de optimización del despacho de baterías de Austin está cargado en la sección Datos. Abierto para la investigación de modelos."
        }
      },
      {
        body: "Chattanooga composite lab successfully completed graphene-infused tire cord tests.",
        translations: {
          tr: "Chattanooga kompozit laboratuvarı grafen katkılı lastik kord testlerini başarıyla tamamladı.",
          en: "Chattanooga composite lab successfully completed graphene-infused tire cord tests.",
          de: "Das Chattanooga Komposit-Labor hat die Tests für mit Graphen versetzte Reifen-Cords erfolgreich abgeschlossen.",
          es: "El laboratorio de compuestos de Chattanooga completó con éxito las pruebas de cables de neumáticos infundidos con grafeno."
        }
      },
      {
        body: "Sabancı Climate Texas closed a new grid services agreement with a major utility this week.",
        translations: {
          tr: "Sabancı Climate Texas bu hafta büyük bir elektrik dağıtım şirketiyle yeni bir şebeke hizmetleri anlaşması imzaladı.",
          en: "Sabancı Climate Texas closed a new grid services agreement with a major utility this week.",
          de: "Sabancı Climate Texas hat diese Woche eine neue Vereinbarung über Netzdienstleistungen mit einem großen Energieversorger abgeschlossen.",
          es: "Sabancı Climate Texas firmó esta semana un nuevo acuerdo de servicios de red con una importante empresa de servicios públicos."
        }
      }
    ],
    GB: [
      {
        body: "Sabancı Ventures New York office is hosting a demo day for green energy startups this Friday.",
        translations: {
          tr: "Sabancı Ventures New York ofisi bu Cuma yeşil enerji girişimleri için bir demo günü düzenliyor.",
          en: "Sabancı Ventures New York office is hosting a demo day for green energy startups this Friday.",
          de: "Das New Yorker Büro von Sabancı Ventures veranstaltet diesen Freitag einen Demo-Tag für Start-ups im Bereich grüne Energie.",
          es: "La oficina de Sabancı Ventures en Londres organizará una jornada de demostración para startups de energía verde este viernes."
        }
      },
      {
        body: "BBVA CIB US UK's new B2B sales portal processed its first 100 orders within 48 hours of launch.",
        translations: {
          tr: "BBVA CIB US UK'nin yeni B2B satış portalı, lansmandan sonraki 48 saat içinde ilk 100 siparişi işledi.",
          en: "BBVA CIB US UK's new B2B sales portal processed its first 100 orders within 48 hours of launch.",
          de: "Das neue B2B-Verkaufsportal von BBVA CIB US UK hat innerhalb von 48 Stunden nach dem Start die ersten 100 Bestellungen bearbeitet.",
          es: "El nuevo portal de ventas B2B de BBVA CIB US UK procesó sus primeros 100 pedidos en las 48 horas posteriores al lanzamiento."
        }
      },
      {
        body: "BBVA Colombia New York HQ begins aerospace-grade prepreg trials with a new aviation partner.",
        translations: {
          tr: "BBVA Colombia New York Teknoloji Merkezi, yeni bir havacılık ortağıyla havacılık sınıfı prepreg denemelerine başlıyor.",
          en: "BBVA Colombia New York HQ begins aerospace-grade prepreg trials with a new aviation partner.",
          de: "Das BBVA Colombia New York HQ beginnt mit Prepreg-Tests in Luftfahrtqualität mit einem neuen Luftfahrtpartner.",
          es: "El Centro Tecnológico de BBVA Colombia en Londres inicia ensayos de preimpregnados de grado aeroespacial con un nuevo socio de aviación."
        }
      }
    ],
    DE: [
      {
        body: "Wir testen die neuen Lithium-Ionen-Zellen für die BBVA Spark España-Elektrobusse in Buenos Aires.",
        translations: {
          tr: "Buenos Aires'teki BBVA Spark España elektrikli otobüsleri için yeni lityum iyon hücrelerini test ediyoruz.",
          en: "We are testing the new lithium-ion cells for BBVA Spark España electric buses in Buenos Aires.",
          de: "Wir testen die neuen Lithium-Ionen-Zellen für die BBVA Spark España-Elektrobusse in Buenos Aires.",
          es: "Estamos probando nuevas celdas de iones de litio para los autobuses eléctricos BBVA Spark España en Múnich."
        }
      },
      {
        body: "Die Effizienz im BBVA CIB US-Terminal Hamburg wurde durch neue automatisierte Logistiksoftware gesteigert.",
        translations: {
          tr: "BBVA CIB US Hamburg terminalinde yeni otomatik lojistik yazılımı sayesinde verimlilik artırıldı.",
          en: "Efficiency at the BBVA CIB US Hamburg terminal has been increased with new automated logistics software.",
          de: "Die Effizienz im BBVA CIB US-Terminal Hamburg wurde durch neue automatisierte Logistiksoftware gesteigert.",
          es: "La eficiencia en la terminal de BBVA CIB US en Hamburgo se ha incrementado con el nuevo software de logística automatizado."
        }
      },
      {
        body: "BBVA Spark España Buenos Aires Labor hat die erste Testfahrt des Wasserstoffbus-Prototyps erfolgreich abgeschlossen.",
        translations: {
          tr: "BBVA Spark España Buenos Aires Laboratuvarı, hidrojenli otobüs prototipinin ilk test sürüşünü başarıyla tamamladı.",
          en: "BBVA Spark España Buenos Aires Lab has successfully completed the first test drive of the hydrogen bus prototype.",
          de: "BBVA Spark España Buenos Aires Labor hat die erste Testfahrt des Wasserstoffbus-Prototyps erfolgreich abgeschlossen.",
          es: "El laboratorio de BBVA Spark España en Múnich completó con éxito la primera prueba de conducción del prototipo de autobús de hidrógeno."
        }
      }
    ],
    ES: [
      {
        body: "Excelente avance en la planta de BBVA CIB US en Buñol. Hemos reducido el consumo de energía un 12%.",
        translations: {
          tr: "BBVA CIB US Buñol tesisinde mükemmel ilerleme. Enerji tüketimini %12 azalttık.",
          en: "Excellent progress at the BBVA CIB US plant in Buñol. We have reduced energy consumption by 12%.",
          de: "Hervorragende Fortschritte im BBVA CIB US-Werk in Buñol. Wir haben den Energieverbrauch um 12% gesenkt.",
          es: "Excelente avance en la planta de BBVA CIB US en Buñol. Hemos reducido el consumo de energía un 12%."
        }
      },
      {
        body: "Presentamos el nuevo hormigón ecológico de ultra alto rendimiento en el congreso de Barcelona.",
        translations: {
          tr: "Barselona'daki kongrede yeni çevre dostu ultra yüksek performanslı betonu tanıtıyoruz.",
          en: "We are presenting the new eco-friendly ultra-high performance concrete at the Barcelona congress.",
          de: "Wir präsentieren den neuen umweltfreundlichen ultrahochfesten Beton auf dem Kongress in Barcelona.",
          es: "Presentamos el nuevo hormigón ecológico de ultra alto rendimiento en el congreso de Barcelona."
        }
      },
      {
        body: "El equipo de Buñol logró certificar el nuevo cemento blanco bajo en carbono para exportación a la UE.",
        translations: {
          tr: "Buñol ekibi, düşük karbonlu yeni beyaz çimentoyu AB'ye ihracat için sertifikalandırmayı başardı.",
          en: "The Buñol team successfully certified the new low-carbon white cement for export to the EU.",
          de: "Das Buñol-Team hat erfolgreich den neuen kohlenstoffarmen Weißzement für den Export in die EU zertifiziert.",
          es: "El equipo de Buñol logró certificar el nuevo cemento blanco bajo en carbono para exportación a la UE."
        }
      }
    ]
  };

  let postCount = 0;
  countries.forEach(country => {
    const templates = socialTemplates[country] || [];
    const countryUsers = demoUsers.filter(u => u.country === country);
    
    templates.forEach((t, i) => {
      const user = countryUsers[i % countryUsers.length] || demoUsers[0];
      const commentUser = countryUsers[(i + 1) % countryUsers.length] || demoUsers[1];
      
      const commentTemplates = {
        TR: { body: "Harika bir çalışma, tebrikler!", tr: "Harika bir çalışma, tebrikler!", en: "Great work, congratulations!", de: "Tolle Arbeit, Glückwunsch!", es: "¡Gran trabajo, felicitaciones!" },
        US: { body: "This will be very useful for model training.", tr: "Bu model eğitimi için çok yararlı olacak.", en: "This will be very useful for model training.", de: "Dies wird für das Modelltraining sehr nützlich sein.", es: "Esto será muy útil para el entrenamiento del modelo." },
        GB: { body: "Looking forward to attending the session.", tr: "Oturuma katılmayı sabırsızlıkla bekliyorum.", en: "Looking forward to attending the session.", de: "Ich freue mich darauf, an der Sitzung teilzunehmen.", es: "Espero con ansias asistir a la sesión." },
        DE: { body: "Sehr interessantes Projekt für unsere Bus-Flotte.", tr: "Otobüs filomuz için çok ilginç bir proje.", en: "Very interesting project for our bus fleet.", de: "Sehr interessantes Projekt für unsere Bus-Flotte.", es: "Proyecto muy interesante para nuestra flota de autobuses." },
        ES: { body: "¡Excelente noticia para la sostenibilidad del grupo!", tr: "Grup sürdürülebilirliği için mükemmel haber!", en: "Excellent news for group sustainability!", de: "Hervorragende Neuigkeiten für die Nachhaltigkeit der Gruppe!", es: "¡Excelente noticia para la sostenibilidad del grupo!" }
      };
      
      const cTemplate = commentTemplates[country] || commentTemplates.TR;

      state.socialPosts.push({
        id: `sp-gen-${postCount++}`,
        userId: user.id,
        userName: user.name,
        userAvatar: user.photo,
        userBio: `${user.role} · ${user.company}`,
        body: t.body,
        date: "2 saat önce",
        likes: 12 + i * 5,
        likedByMe: false,
        country: country,
        comments: [
          {
            id: `sc-gen-${postCount}-c1`,
            userName: commentUser.name,
            userAvatar: commentUser.photo,
            body: cTemplate.body,
            date: "1 saat önce",
            translations: {
              tr: cTemplate.tr,
              en: cTemplate.en,
              de: cTemplate.de,
              es: cTemplate.es
            }
          }
        ],
        translations: t.translations
      });
    });
  });

  // Add curated, fully-translated "looking for teammate" announcements on top of the
  // 400 auto-generated ones above (do NOT reset state.announcements - that would wipe
  // the bulk generated content and leave only 1 announcement per country).
  const announcementTemplates = {
    TR: [
      {
        title: "🚀 Garanti BBVA Mobil AI Yatırım Projesine UX Designer Arıyoruz!",
        body: "Merhabalar! Garanti BBVA Mobil AI Yatırım projemiz için prototip ekranlarimizi tasarlayacak ve bizimle ortak bütçeden pay alacak bir UX Designer takım arkadaşı arıyoruz. Katılmak için aşağıdaki 'Başvur' butonunu kullanarak başvurunuzu iletebilirsiniz!",
        translations: {
          tr: {
            title: "🚀 Garanti BBVA Mobil AI Yatırım Projesine UX Designer Arıyoruz!",
            body: "Merhabalar! Garanti BBVA Mobil AI Yatırım projemiz için prototip ekranlarimizi tasarlayacak ve bizimle ortak bütçeden pay alacak bir UX Designer takım arkadaşı arıyoruz. Katılmak için aşağıdaki 'Başvur' butonunu kullanarak başvurunuzu iletebilirsiniz!"
          },
          en: {
            title: "🚀 Seeking UX Designer for Garanti BBVA Mobile AI Investment Project!",
            body: "Hello! We are looking for a UX Designer team member who will design our prototype screens for the Garanti BBVA Mobile AI Investment project and share a budget with us. Apply using the 'Apply' button below!"
          },
          de: {
            title: "🚀 UX Designer für Garanti BBVA Mobile AI Investment Projekt gesucht!",
            body: "Hallo! Wir suchen ein UX Designer-Teammitglied, das unsere Prototyp-Bildschirme für das Garanti BBVA Mobile AI Investment-Projekt entwirft und ein gemeinsames Budget mit uns teilt. Bewerben Sie sich unten!"
          },
          es: {
            title: "🚀 ¡Buscamos un Diseñador de UX para el proyecto de inversión móvil de Garanti BBVA!",
            body: "¡Hola! Buscamos un diseñador UX para diseñar pantallas de prototipos para nuestro proyecto de IA y compartir presupuesto con nosotros. ¡Postula usando el botón de abajo!"
          }
        }
      }
    ],
    US: [
      {
        title: "🚀 Chattanooga Composite Lab - Seeking Senior Research Scientist!",
        body: "Hello! We are looking for a Senior Research Scientist to lead graphene-infused carbon fiber composite trials in Chattanooga, TN. Apply below!",
        translations: {
          tr: {
            title: "🚀 Chattanooga Kompozit Laboratuvarı - Kıdemli Araştırma Bilim İnsanı Aranıyor!",
            body: "Merhaba! Chattanooga, TN'de grafen katkılı karbon fiber kompozit denemelerine liderlik edecek Kıdemli Araştırma Bilim İnsanı arıyoruz. Aşağıdan başvurun!"
          },
          en: {
            title: "🚀 Chattanooga Composite Lab - Seeking Senior Research Scientist!",
            body: "Hello! We are looking for a Senior Research Scientist to lead graphene-infused carbon fiber composite trials in Chattanooga, TN. Apply below!"
          },
          de: {
            title: "🚀 Chattanooga Komposit-Labor - Leitender Forscher gesucht!",
            body: "Hallo! Wir suchen einen leitenden Forscher, der die Versuche mit graphenversetzten Carbonfasern in Chattanooga, TN, leitet. Bewerben Sie sich unten!"
          },
          es: {
            title: "🚀 Laboratorio Chattanooga - ¡Buscamos Científico de Investigación Senior!",
            body: "¡Hola! Buscamos un Científico de Investigación Senior para liderar los ensayos de compuestos de fibra de carbono infundidos con grafeno en Chattanooga, TN."
          }
        }
      }
    ],
    GB: [
      {
        title: "🚀 Strategic Investment Program for Green Startups",
        body: "Sabancı Ventures UK launches a new strategic investment track focusing on renewable energy and climate tech startups in the UK.",
        translations: {
          tr: {
            title: "🚀 Yeşil Girişimler için Stratejik Yatırım Programı",
            body: "Sabancı Ventures UK, Amerika Birleşik Devletleri'taki yenilenebilir enerji ve iklim teknolojisi girişimlerine odaklanan yeni bir stratejik yatırım yolunu başlatıyor."
          },
          en: {
            title: "🚀 Strategic Investment Program for Green Startups",
            body: "Sabancı Ventures UK launches a new strategic investment track focusing on renewable energy and climate tech startups in the UK."
          },
          de: {
            title: "🚀 Strategisches Investitionsprogramm für grüne Start-ups",
            body: "Sabancı Ventures UK startet ein neues strategisches Investitionsprogramm mit Fokus auf erneuerbare Energien und Climate-Tech-Start-ups in Großbritannien."
          },
          es: {
            title: "🚀 Programa de Inversión Estratégica para Startups Ecológicas",
            body: "Sabancı Ventures UK lanza una nueva vía de inversión estratégica centrada en startups de energía renovable y tecnología climática en el Reino Unido."
          }
        }
      }
    ],
    DE: [
      {
        title: "🚀 BBVA Spark España Buenos Aires - MLOps-Ingenieur gesucht!",
        body: "Hallo! BBVA Spark España Buenos Aires sucht einen MLOps-Ingenieur zur Überwachung der Telemetrie- und Batterie-Entladungs-Modelle für das neue EV-Modell in Argentina.",
        translations: {
          tr: {
            title: "🚀 BBVA Spark España Buenos Aires - MLOps Mühendisi Aranıyor!",
            body: "Merhaba! BBVA Spark España Buenos Aires, Arjantin'daki yeni elektrikli araç modeli için telemetri ve pil deşarj modellerini izleyecek bir MLOps mühendisi arıyor."
          },
          en: {
            title: "🚀 BBVA Spark España Buenos Aires - MLOps Engineer Wanted!",
            body: "Hello! BBVA Spark España Buenos Aires is looking for an MLOps Engineer to monitor telemetry and battery discharge models for the new EV model in Argentina."
          },
          de: {
            title: "🚀 BBVA Spark España Buenos Aires - MLOps-Ingenieur gesucht!",
            body: "Hallo! BBVA Spark España Buenos Aires sucht einen MLOps-Ingenieur zur Überwachung der Telemetrie- und Batterie-Entladungs-Modelle für das neue EV-Modell in Argentina."
          },
          es: {
            title: "🚀 BBVA Spark España Múnich - ¡Se busca Ingeniero MLOps!",
            body: "¡Hola! BBVA Spark España Múnich busca un ingeniero MLOps para monitorear la telemetría y los modelos de descarga de baterías para el nuevo modelo eléctrico en Alemania."
          }
        }
      }
    ],
    ES: [
      {
        title: "🚀 ¡Buscamos un Ingeniero Químico para la planta de Buñol!",
        body: "Hola! BBVA CIB US España busca un ingeniero químico para supervisar los ensayos de combustión alternativa y reciclaje en nuestra planta de Buñol.",
        translations: {
          tr: {
            title: "🚀 Buñol Tesisi için Kimya Mühendisi Arıyoruz!",
            body: "Merhaba! BBVA CIB US İspanya, Buñol tesisimizdeki alternatif yakma ve geri dönüşüm denemelerini denetlemek üzere bir kimya mühendisi arıyor."
          },
          en: {
            title: "🚀 Seeking Chemical Engineer for Buñol Plant!",
            body: "Hello! BBVA CIB US Spain is looking for a chemical engineer to supervise alternative combustion and recycling trials at our Buñol plant."
          },
          de: {
            title: "🚀 Chemieingenieur für das Werk Buñol gesucht!",
            body: "Hallo! BBVA CIB US Spanien sucht einen Chemieingenieur zur Überwachung der alternativen Verbrennungs- und Recyclingversuche im Werk Buñol."
          },
          es: {
            title: "🚀 ¡Buscamos un Ingeniero Químico para la planta de Buñol!",
            body: "Hola! BBVA CIB US España busca un ingeniero químico para supervisar los ensayos de combustión alternativa y reciclaje en nuestra planta de Buñol."
          }
        }
      }
    ]
  };

  let annCount = 0;
  countries.forEach(country => {
    const templates = announcementTemplates[country] || [];
    const countryUsers = demoUsers.filter(u => u.country === country);
    
    templates.forEach((t, i) => {
      const user = countryUsers[i % countryUsers.length] || demoUsers[0];
      
      state.announcements.push({
        id: `ann-curated-${annCount++}`,
        title: t.title,
        author: user.name,
        authorId: user.id,
        companyId: user.companyId || "bbva-group",
        type: "Topluluk",
        area: "Takım Arkadaşı Aranıyor",
        importanceScore: 5,
        body: t.body,
        date: "2026-06-15",
        comments: [],
        likes: 24 + i * 2,
        imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
        country: country,
        translations: t.translations
      });
    });
  });

  // Add curated, localized per-country message spaces on top of the holding-wide
  // channels already loaded from initialMessageSpaces (do NOT reset - several other
  // channels like msg-holding/msg-garanti-bbva are referenced elsewhere by id).
  const spaceTemplates = {
    TR: [
      { id: "msg-tr-1", name: "Garanti BBVA FinTech", desc: "Açık bankacılık ve yenilikçi finans teknolojileri odası.", companyId: "garanti-bbva" },
      { id: "msg-tr-2", name: "Garanti BBVA Teknoloji Hub", desc: "Çoklu dil ve bulut entegrasyonu yazılım grubu.", companyId: "garanti-bbva-teknoloji" }
    ],
    US: [
      { id: "msg-us-1", name: "Sabancı Climate Solar", desc: "Texas utility battery dispatch optimization discussion.", companyId: "bbva-mexico" },
      { id: "msg-us-2", name: "BBVA Colombia Chattanooga R&D", desc: "Graphene-infused composite material trials.", companyId: "bbva-colombia-usa" }
    ],
    GB: [
      { id: "msg-gb-1", name: "Sabancı Ventures UK", desc: "Renewable energy and green tech investment pipelines.", companyId: "bbva-cib-us" },
      { id: "msg-gb-2", name: "BBVA CIB US UK Sales", desc: "White cement B2B distribution and client accounts.", companyId: "bbva-cib-us-uk" }
    ],
    DE: [
      { id: "msg-de-1", name: "BBVA Spark España Mobility DE", desc: "Telemetrie- und Batterie-Entladungs-Modelle für EV Busse.", companyId: "bbva-spark-es-germany" },
      { id: "msg-de-2", name: "BBVA CIB US Hamburg Logistik", desc: "Terminalbetrieb und automatisierte Versandprozesse.", companyId: "bbva-cib-us-germany" }
    ],
    ES: [
      { id: "msg-es-1", name: "BBVA CIB US Buñol", desc: "Discusión sobre combustibles alternativos y reducción de CO2.", companyId: "bbva-cib-us-spain" },
      { id: "msg-es-2", name: "BBVA CIB US Buñol Sostenibilidad", desc: "Certificación ESG y reducción de huella de carbono.", companyId: "bbva-cib-us-spain" }
    ]
  };

  const messageTemplates = {
    TR: [
      { body: "KOBİ'ler için yeşil finansman API'leri test ortamında stabil çalışıyor.", tr: "KOBİ'ler için yeşil finansman API'leri test ortamında stabil çalışıyor.", en: "Green financing APIs for SMEs are working stably in the test environment.", de: "Grüne Finanzierungs-APIs für KMU laufen stabil in der Testumgebung.", es: "Las APIs de financiamiento verde para pymes funcionan de manera estable en el entorno de prueba." },
      { body: "Mükemmel, entegrasyon dokümanını paylaşıyorum.", tr: "Mükemmel, entegrasyon dokümanını paylaşıyorum.", en: "Excellent, sharing the integration document.", de: "Ausgezeichnet, ich teile das Integrationsdokument.", es: "Excelente, comparto el documento de integración." }
    ],
    US: [
      { body: "Please check the new solar dataset parameters in the shared workspace.", tr: "Lütfen paylaşılan çalışma alanındaki yeni güneş enerjisi veri kümesi parametrelerini kontrol edin.", en: "Please check the new solar dataset parameters in the shared workspace.", de: "Bitte überprüfen Sie die Parameter des neuen Solardatensatzes im gemeinsamen Arbeitsbereich.", es: "Verifique los parámetros del nuevo conjunto de datos solar en el espacio de trabajo compartido." },
      { body: "Acknowledged, checking the volume history now.", tr: "Anlaşıldı, hacim geçmişini şimdi kontrol ediyorum.", en: "Acknowledged, checking the volume history now.", de: "Bestätigt, ich überprüfe jetzt den Volumenverlauf.", es: "Entendido, comprobando el historial de volumen ahora." }
    ],
    GB: [
      { body: "We are reviewing three new startups from Manchester today.", tr: "Bugün Manchester'dan üç yeni girişimi inceliyoruz.", en: "We are reviewing three new startups from Manchester today.", de: "Wir prüfen heute drei neue Start-ups aus Manchester.", es: "Hoy estamos revisando tres nuevas startups de Manchester." },
      { body: "Send over their slide decks, please.", tr: "Sunum dosyalarını gönderin lütfen.", en: "Send over their slide decks, please.", de: "Bitte senden Sie uns deren Präsentationen.", es: "Por favor, envíe sus presentaciones." }
    ],
    DE: [
      { body: "Der Prototyp des Wasserstoffbusses ist jetzt bereit für die ersten Straßentests.", tr: "Hidrojenli otobüs prototipi ilk yol testlerine hazır.", en: "The prototype of the hydrogen bus is now ready for the first road tests.", de: "Der Prototyp des Wasserstoffbusses ist jetzt bereit für die ersten Straßentests.", es: "El prototipo del autobús de hidrógeno ya está listo para las primeras pruebas en carretera." },
      { body: "Sehr gut, ich werde die Telemetriedaten überwachen.", tr: "Çok iyi, telemetri verilerini izleyeceğim.", en: "Very good, I will monitor the telemetry data.", de: "Sehr gut, ich werde die Telemetriedaten überwachen.", es: "Muy bien, vigilaré los datos de telemetría." }
    ],
    ES: [
      { body: "Los ingenieros ya terminaron la calibración de los sensores térmicos en el horno.", tr: "Mühendisler fırındaki termal sensörlerin kalibrasyonunu tamamladı.", en: "Engineers have finished calibrating the thermal sensors in the kiln.", de: "Die Ingenieure haben die Kalibrierung der Thermosensoren im Ofen abgeschlossen.", es: "Los ingenieros ya terminaron la calibración de los sensores térmicos en el horno." },
      { body: "Excelente, iniciemos el precalentamiento del sistema.", tr: "Mükemmel, sistemin ön ısıtmasını başlatalım.", en: "Excellent, let's start the system preheating.", de: "Ausgezeichnet, starten wir die Systemvorheizung.", es: "Excelente, iniciemos el precalentamiento del sistema." }
    ]
  };

  countries.forEach(country => {
    const spaces = spaceTemplates[country] || [];
    const messagesList = messageTemplates[country] || messageTemplates.TR;
    const countryUsers = demoUsers.filter(u => u.country === country);

    spaces.forEach(s => {
      const chatMessages = [];
      messagesList.forEach((m, idx) => {
        const user = countryUsers[idx % countryUsers.length] || demoUsers[0];
        chatMessages.push({
          userId: user.id,
          body: m.body,
          time: `10:${30 + idx * 5}`,
          translations: {
            tr: m.tr,
            en: m.en,
            de: m.de,
            es: m.es
          }
        });
      });

      state.messageSpaces.push({
        id: s.id,
        name: s.name,
        description: s.desc,
        companyId: s.companyId || "bbva-group",
        scope: "İştirak",
        members: countryUsers.slice(0, 5).map(u => u.id),
        messages: chatMessages,
        country: country
      });
    });
  });

  // Scale demo user credits to BBVA Coins scale
  demoUsers.forEach(u => {
    if (u.voteCreditBalance < 100) u.voteCreditBalance = (u.voteCreditBalance || 0) * 100;
    if (u.monthlyVoteCredit < 100) u.monthlyVoteCredit = (u.monthlyVoteCredit || 0) * 100;
  });
}

scaleMockDataset();

ensureSocialEnhancements();

render();