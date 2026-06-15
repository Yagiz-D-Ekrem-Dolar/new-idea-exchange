const groqApiKey = process.env.GROQ_API_KEY || process.env.GROK_API_KEY || "";
const groqModel = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

function normalizeInput(value, fallback) {
  if (typeof value !== "string") return fallback;
  const trimmed = value.trim();
  return trimmed || fallback;
}

function buildIdeaAnalysis(payload) {
  const title = normalizeInput(payload.title, "Yeni kurum ici iyilestirme fikri");
  const summary = normalizeInput(payload.oneSentence, payload.summary || "Fikir, sahadan gelen bir problemi daha olculebilir bir surece donusturmeyi hedefliyor.");
  const problem = normalizeInput(payload.problem, "Problem henuz ayrintilandirilmamis.");
  const solution = normalizeInput(payload.solution, "Cozum onerisi pilotlanabilir bir akis olarak kurgulanmali.");
  const impact = normalizeInput(payload.impact, "yuksek");
  const cost = normalizeInput(payload.cost, "orta");
  const implementationTime = normalizeInput(payload.implementationTime, "3 ay");
  const scoreBase = impact.toLocaleLowerCase("tr-TR").includes("yuksek") ? 91 : 84;
  const costPenalty = cost.toLocaleLowerCase("tr-TR").includes("yuksek") ? 6 : 0;
  const feasibility = Math.max(68, scoreBase - costPenalty);

  return {
    provider: groqApiKey ? "groq-fallback" : "demo-simulation",
    generatedAt: new Date().toISOString(),
    suggestedTitle: title.length > 18 ? title : `${title}: olculebilir pilot onerisi`,
    score: feasibility,
    impactScore: Math.min(96, feasibility + 4),
    riskScore: Math.max(18, 100 - feasibility + 8),
    feasibilityScore: feasibility,
    summary: `${summary} Ana deger onerisi, problemi gorunur hale getirip ilgili ekiplerin kucuk olcekli bir pilotla sonucu olcebilmesi.`,
    strengths: [
      "Sahadan gelen gercek bir ihtiyaci gorunur kiliyor.",
      "Departmanlar arasi is birligiyle hizli ogrenme uretmeye uygun.",
      "Pilot kapsami netlestirilirse dusuk riskle denenebilir.",
      "Basari metrigi tanimlandiginda yonetici karari kolaylasir."
    ],
    missingPoints: [
      "Mevcut durum verisi ve baslangic metrigi netlestirilmeli.",
      "Pilot lokasyon veya hedef kullanici grubu secilmeli.",
      "Surec sahibi ve destek verecek ekipler belirtilmeli."
    ],
    weaknesses: [
      "Kaynak ihtiyaci ve operasyonel sahiplik henuz tam gorunmuyor.",
      "Benzer yuruyen projelerle cakisma kontrolu yapilmali."
    ],
    risks: [
      "Yanlis kapsam secimi pilot sonucunu yaniltabilir.",
      "Mevcut surec sahipleri dahil edilmezse uygulama direnci olusabilir.",
      "KVKK ve kurum ici veri erisimi gereksinimleri erken kontrol edilmeli."
    ],
    costComment: `Tahmini maliyet ${cost}; uygulama suresi ${implementationTime}. Ilk asamada mevcut araclarla olcum ve sinirli pilot onerilir.`,
    pilotSuggestion: "Ilk pilot 2-3 lokasyon veya tek bir departman akisiyla 4 hafta yurutulebilir. Oncesi/sonrasi KPI karsilastirmasi ve kisa calisan geri bildirimiyle karar verilebilir.",
    executiveSummary: [
      `${title} baslikli fikir, kurum icinde olculebilir bir iyilestirme firsati sunuyor.`,
      `Problem: ${problem.slice(0, 160)}${problem.length > 160 ? "..." : ""}`,
      `Onerilen cozum: ${solution.slice(0, 160)}${solution.length > 160 ? "..." : ""}`,
      "Pilot icin sinirli kapsam, net KPI ve surec sahibi belirlenmesi onerilir.",
      `AI potansiyel skoru: ${feasibility}/100.`
    ],
    similarIdeas: [
      "Cagri merkezi yogunluk tahmini paneli",
      "Sube ici sira yonetimi icin mobil bildirim sistemi",
      "Magaza yoneticileri icin gunluk operasyon kontrol listesi"
    ],
    improvements: [
      "Basari kriterini sayisal KPI ile yaz.",
      "Pilot lokasyonlari ve sureyi netlestir.",
      "Operasyon, veri ve uyum ekiplerinden beklenen katkisi belirt."
    ]
  };
}

function groqPrompt(payload) {
  return [
    "Kurumsal inovasyon platformu icin fikir analizi yap.",
    "Yaniti sadece gecerli JSON olarak ver. Markdown, aciklama veya kod blogu kullanma.",
    "Ton destekleyici, rafine ve kurumsal olsun; fikri kesin reddetme, gelistirme oner.",
    "JSON alanlari: suggestedTitle string, score number, impactScore number, riskScore number, feasibilityScore number, summary string, strengths string[], missingPoints string[], weaknesses string[], risks string[], costComment string, pilotSuggestion string, executiveSummary string[], similarIdeas string[], improvements string[].",
    `Fikir verisi: ${JSON.stringify(payload)}`
  ].join("\n");
}

function asStringArray(value, fallback) {
  if (Array.isArray(value)) return value.map(item => String(item)).filter(Boolean).slice(0, 8);
  if (typeof value === "string" && value.trim()) return [value.trim()];
  return fallback;
}

function asNumber(value, fallback) {
  const numberValue = Number(value);
  if (Number.isFinite(numberValue)) {
    const normalized = numberValue > 0 && numberValue <= 10 ? numberValue * 10 : numberValue;
    return Math.max(0, Math.min(100, Math.round(normalized)));
  }
  return fallback;
}

function normalizeGroqAnalysis(payload, content) {
  const fallback = buildIdeaAnalysis(payload);
  let parsed;

  try {
    parsed = JSON.parse(content);
  } catch {
    const match = String(content).match(/\{[\s\S]*\}/);
    parsed = match ? JSON.parse(match[0]) : {};
  }

  return {
    ...fallback,
    provider: "groq",
    model: groqModel,
    suggestedTitle: normalizeInput(parsed.suggestedTitle, fallback.suggestedTitle),
    score: asNumber(parsed.score, fallback.score),
    impactScore: asNumber(parsed.impactScore, fallback.impactScore),
    riskScore: asNumber(parsed.riskScore, fallback.riskScore),
    feasibilityScore: asNumber(parsed.feasibilityScore, fallback.feasibilityScore),
    summary: normalizeInput(parsed.summary, fallback.summary),
    strengths: asStringArray(parsed.strengths, fallback.strengths),
    missingPoints: asStringArray(parsed.missingPoints, fallback.missingPoints),
    weaknesses: asStringArray(parsed.weaknesses, fallback.weaknesses),
    risks: asStringArray(parsed.risks, fallback.risks),
    costComment: normalizeInput(parsed.costComment, fallback.costComment),
    pilotSuggestion: normalizeInput(parsed.pilotSuggestion, fallback.pilotSuggestion),
    executiveSummary: asStringArray(parsed.executiveSummary, fallback.executiveSummary),
    similarIdeas: asStringArray(parsed.similarIdeas, fallback.similarIdeas),
    improvements: asStringArray(parsed.improvements, fallback.improvements)
  };
}

async function analyzeIdea(payload) {
  if (!groqApiKey) return buildIdeaAnalysis(payload);

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${groqApiKey}`
      },
      body: JSON.stringify({
        model: groqModel,
        temperature: 0.35,
        max_tokens: 1700,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content: "Sen buyuk kurumlar icin calisan, Turkce yanit veren, deneyimli bir inovasyon portfoy analistisin."
          },
          {
            role: "user",
            content: groqPrompt(payload)
          }
        ]
      })
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Groq ${response.status}: ${errorBody.slice(0, 180)}`);
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content || "";
    if (!content) throw new Error("Groq returned an empty message.");
    return normalizeGroqAnalysis(payload, content);
  } catch (error) {
    return {
      ...buildIdeaAnalysis(payload),
      provider: "groq-fallback",
      fallbackReason: error.message
    };
  }
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const payload = typeof req.body === "object" && req.body !== null ? req.body : JSON.parse(req.body || "{}");
    return res.status(200).json(await analyzeIdea(payload));
  } catch (error) {
    return res.status(400).json({
      error: "AI analizi olusturulamadi.",
      detail: error.message
    });
  }
};
