function getActiveLanguage() {
  if (state.appLanguage) return state.appLanguage;
  const activeC = countriesList.find(c => c.code === state.activeCountry) || countriesList[0];
  return activeC.lang || "tr";
}

function renderTranslationButton(idea) {
  if (!idea) return "";
  const activeLang = state.globalTranslateAll ? "tr" : getActiveLanguage();
  const originalLang = idea.country === "TR" ? "tr" : (idea.country === "DE" ? "de" : (idea.country === "ES" ? "es" : "en"));
  
  if (activeLang === originalLang) return "";
  
  state.translatedIdeaIds = state.translatedIdeaIds || {};
  const showOriginal = !!state.translatedIdeaIds[idea.id];
  
  const labels = {
    tr: { showOriginal: "Orijinal Dilde Göster", showTranslation: "Türkçe Çeviriyi Göster" },
    en: { showOriginal: "Show Original", showTranslation: "Show English" },
    de: { showOriginal: "Original anzeigen", showTranslation: "Auf Deutsch anzeigen" },
    es: { showOriginal: "Ver en original", showTranslation: "Ver en español" }
  };
  const activeLabels = labels[activeLang] || labels.tr;
  const buttonText = showOriginal ? activeLabels.showTranslation : activeLabels.showOriginal;
  
  return `
    <button class="btn tiny ghost translate-toggle-btn" data-action="toggle-idea-translation" data-id="${esc(idea.id)}" style="padding: 4px 10px; font-size: 11px; border-radius: 8px; display: inline-flex; align-items: center; gap: 4px; border: 1px solid var(--line-soft); background: var(--surface); color: var(--accent); cursor: pointer; outline: none; margin-top: 6px;" title="Çeviri seçeneği">
      ${icon("languages", "style='width: 12px; height: 12px;'")}
      <span>${buttonText}</span>
    </button>
  `;
}


// ─── NEW TRANSLATION ENGINE & FALLBACK SYSTEM ──────────────────────────────────
function escapeRegExp(string) {
  return string.replace(/[.*+?\$\^{}()|[\]\\\/]/g, '\\$&');
}

function getShowOriginalFlag(id, fields) {
  if (id.startsWith("idea") || fields.includes("solution")) {
    return state.showOriginalIdeas && state.showOriginalIdeas[id];
  }
  if (id.startsWith("ann") || fields.includes("body")) {
    return state.showOriginalAnnouncements && state.showOriginalAnnouncements[id];
  }
  if (id.startsWith("ds") || fields.includes("summary")) {
    return state.showOriginalDataSets && state.showOriginalDataSets[id];
  }
  if (id.startsWith("challenge") || fields.includes("brief")) {
    return state.showOriginalChallenges && state.showOriginalChallenges[id];
  }
  if (id.startsWith("msg") || id.startsWith("m-") || id.startsWith("msg-")) {
    return state.showOriginalMessages && state.showOriginalMessages[id];
  }
  return false;
}

function translateItem(item, lang, fields) {
  if (!item) return;
  
  if (!item._originals) {
    item._originals = {};
    fields.forEach(f => {
      item._originals[f] = item[f] || "";
    });
  }
  
  const showOriginal = getShowOriginalFlag(item.id, fields);
  if (showOriginal || lang === "tr") {
    fields.forEach(f => {
      item[f] = item._originals[f];
    });
    return;
  }

  if (item.translations && item.translations[lang]) {
    fields.forEach(f => {
      if (item.translations[lang][f]) {
        item[f] = item.translations[lang][f];
      }
    });
    return;
  }

  fields.forEach(f => {
    const origText = item._originals[f];
    if (!origText) return;
    
    if (translationDictionary[lang] && translationDictionary[lang][origText]) {
      item[f] = translationDictionary[lang][origText];
      return;
    }
    
    let translated = origText;
    const dict = translationDictionary[lang] || {};
    const keys = Object.keys(dict).sort((a, b) => b.length - a.length);
    keys.forEach(k => {
      if (k.length > 3) {
        const regex = new RegExp(escapeRegExp(k), "gi");
        translated = translated.replace(regex, dict[k]);
      }
    });
    item[f] = translated;
  });
}

function translateAllDataInState() {
  const activeLang = state.activeLanguage || "tr";

  if (state.ideas) {
    state.ideas.forEach(item => {
      if (!item.translations && staticIdeaTranslations[item.id]) {
        item.translations = staticIdeaTranslations[item.id];
      }
      translateItem(item, activeLang, ["title", "summary", "problem", "solution"]);
      
      if (item.comments) {
        item.comments.forEach((comment, cIdx) => {
          const commentId = `${item.id}-comment-${cIdx}`;
          const commentItem = {
            id: commentId,
            body: comment.body,
            _originals: comment._originals || { body: comment.body }
          };
          if (!comment._originals) comment._originals = commentItem._originals;
          
          const showOriginal = state.showOriginalMessages && state.showOriginalMessages[commentId];
          if (showOriginal || activeLang === "tr") {
            comment.body = comment._originals.body;
          } else {
            const trans = commentTranslations[comment._originals.body];
            if (trans && trans[activeLang]) {
              comment.body = trans[activeLang];
            } else {
              comment.body = translateTextWithDict(comment._originals.body, activeLang);
            }
          }
        });
      }
    });
  }

  if (state.announcements) {
    state.announcements.forEach(item => {
      translateItem(item, activeLang, ["title", "body"]);
    });
  }

  if (state.dataSets) {
    state.dataSets.forEach(item => {
      translateItem(item, activeLang, ["title", "summary"]);
    });
  }

  if (typeof challenges !== "undefined" && challenges) {
    challenges.forEach(item => {
      translateItem(item, activeLang, ["title", "brief"]);
    });
  }

  if (typeof channels !== "undefined" && channels) {
    channels.forEach(channel => {
      if (channel.messages) {
        channel.messages.forEach(msg => {
          translateItem(msg, activeLang, ["body"]);
        });
      }
    });
  }
}

function renderTranslationButtonGeneric(id, originalLang, showOriginal, actionName) {
  const activeLang = state.activeLanguage || "tr";
  if (activeLang === originalLang) return "";
  
  const text = showOriginal ? "Çeviriyi Göster" : "Orijinalini Göster";
  return `
    <button class="btn ghost btn-sm translation-toggle-btn" 
            data-action="${esc(actionName)}" 
            data-id="${esc(id)}" 
            style="padding: 4px 10px; font-size: 11px; display: inline-flex; align-items: center; gap: 4px; margin-top: 6px; border: 1px solid var(--line-soft); background: var(--surface); color: var(--accent); border-radius: 8px; cursor: pointer; outline: none;">
      ${icon("globe", "style='width: 12px; height: 12px;'")} ${esc(text)}
    </button>
  `;
}

function translateTextWithDict(origText, lang) {
  if (!origText) return "";
  if (lang === "tr") return origText;
  if (typeof translationDictionary !== "undefined" && translationDictionary[lang] && translationDictionary[lang][origText]) {
    return translationDictionary[lang][origText];
  }
  let translated = origText;
  const dict = (typeof translationDictionary !== "undefined" && translationDictionary[lang]) || {};
  const keys = Object.keys(dict).sort((a, b) => b.length - a.length);
  keys.forEach(k => {
    if (k.length > 3) {
      const regex = new RegExp(escapeRegExp(k), "gi");
      translated = translated.replace(regex, dict[k]);
    }
  });
  return translated;
}

