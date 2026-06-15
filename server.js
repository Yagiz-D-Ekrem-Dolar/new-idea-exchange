const http = require("http");
const fs = require("fs");
const path = require("path");

const publicRoot = path.join(__dirname, "public");
const startPort = Number(process.env.PORT || 4173);
const groqApiKey = process.env.GROQ_API_KEY || process.env.GROK_API_KEY || "";
const groqModel = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml; charset=utf-8",
  ".ico": "image/x-icon"
};

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => {
      body += chunk;
      if (body.length > 1_000_000) {
        req.destroy();
        reject(new Error("Request body too large"));
      }
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

function sendJson(res, status, payload) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(JSON.stringify(payload));
}

function normalizeInput(value, fallback) {
  if (typeof value !== "string") return fallback;
  const trimmed = value.trim();
  return trimmed || fallback;
}

function buildIdeaAnalysis(payload) {
  const title = normalizeInput(payload.title, "Yeni kurum içi iyileştirme fikri");
  const summary = normalizeInput(payload.oneSentence, payload.summary || "Fikir, sahadan gelen bir problemi daha ölçülebilir bir sürece dönüştürmeyi hedefliyor.");
  const problem = normalizeInput(payload.problem, "Problem henüz ayrıntılandırılmamış.");
  const solution = normalizeInput(payload.solution, "Çözüm önerisi pilotlanabilir bir akış olarak kurgulanmalı.");
  const impact = normalizeInput(payload.impact, "yüksek");
  const cost = normalizeInput(payload.cost, "orta");
  const implementationTime = normalizeInput(payload.implementationTime, "3 ay");
  const scoreBase = impact.toLocaleLowerCase("tr-TR").includes("yüksek") ? 91 : 84;
  const costPenalty = cost.toLocaleLowerCase("tr-TR").includes("yüksek") ? 6 : 0;
  const feasibility = Math.max(68, scoreBase - costPenalty);

  return {
    provider: groqApiKey ? "groq-fallback" : "demo-simulation",
    generatedAt: new Date().toISOString(),
    suggestedTitle: title.length > 18 ? title : `${title}: ölçülebilir pilot önerisi`,
    score: feasibility,
    impactScore: Math.min(96, feasibility + 4),
    riskScore: Math.max(18, 100 - feasibility + 8),
    feasibilityScore: feasibility,
    summary: `${summary} Ana değer önerisi, problemi görünür hale getirip ilgili ekiplerin küçük ölçekli bir pilotla sonucu ölçebilmesi.`,
    strengths: [
      "Sahadan gelen gerçek bir ihtiyacı görünür kılıyor.",
      "Departmanlar arası iş birliğiyle hızlı öğrenme üretmeye uygun.",
      "Pilot kapsamı netleştirilirse düşük riskle denenebilir.",
      "Başarı metriği tanımlandığında yönetici kararı kolaylaşır."
    ],
    missingPoints: [
      "Mevcut durum verisi ve başlangıç metriği netleştirilmeli.",
      "Pilot lokasyon veya hedef kullanıcı grubu seçilmeli.",
      "Süreç sahibi ve destek verecek ekipler belirtilmeli."
    ],
    weaknesses: [
      "Kaynak ihtiyacı ve operasyonel sahiplik henüz tam görünmüyor.",
      "Benzer yürüyen projelerle çakışma kontrolü yapılmalı."
    ],
    risks: [
      "Yanlış kapsam seçimi pilot sonucunu yanıltabilir.",
      "Mevcut süreç sahipleri dahil edilmezse uygulama direnci oluşabilir.",
      "KVKK ve kurum içi veri erişimi gereksinimleri erken kontrol edilmeli."
    ],
    costComment: `Tahmini maliyet ${cost}; uygulama süresi ${implementationTime}. İlk aşamada mevcut araçlarla ölçüm ve sınırlı pilot önerilir.`,
    pilotSuggestion: "İlk pilot 2-3 lokasyon veya tek bir departman akışıyla 4 hafta yürütülebilir. Öncesi/sonrası KPI karşılaştırması ve kısa çalışan geri bildirimiyle karar verilebilir.",
    executiveSummary: [
      `${title} başlıklı fikir, kurum içinde ölçülebilir bir iyileştirme fırsatı sunuyor.`,
      `Problem: ${problem.slice(0, 160)}${problem.length > 160 ? "..." : ""}`,
      `Önerilen çözüm: ${solution.slice(0, 160)}${solution.length > 160 ? "..." : ""}`,
      "Pilot için sınırlı kapsam, net KPI ve süreç sahibi belirlenmesi önerilir.",
      `AI potansiyel skoru: ${feasibility}/100.`
    ],
    similarIdeas: [
      "Çağrı merkezi yoğunluk tahmini paneli",
      "Şube içi sıra yönetimi için mobil bildirim sistemi",
      "Mağaza yöneticileri için günlük operasyon kontrol listesi"
    ],
    improvements: [
      "Başarı kriterini sayısal KPI ile yaz.",
      "Pilot lokasyonları ve süreyi netleştir.",
      "Operasyon, veri ve uyum ekiplerinden beklenen katkıyı belirt."
    ]
  };
}

function groqPrompt(payload) {
  return [
    "Kurumsal inovasyon platformu için fikir analizi yap.",
    "Yanıtı sadece geçerli JSON olarak ver. Markdown, açıklama veya kod bloğu kullanma.",
    "Ton destekleyici, rafine ve kurumsal olsun; fikri kesin reddetme, geliştirme öner.",
    "JSON alanları: suggestedTitle string, score number, impactScore number, riskScore number, feasibilityScore number, summary string, strengths string[], missingPoints string[], weaknesses string[], risks string[], costComment string, pilotSuggestion string, executiveSummary string[], similarIdeas string[], improvements string[].",
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
            content: "Sen büyük kurumlar için çalışan, Türkçe yanıt veren, deneyimli bir inovasyon portföy analistisin."
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

function sanitizePath(urlPath) {
  const decodedPath = decodeURIComponent(urlPath.split("?")[0]);
  const requested = decodedPath === "/" ? "/index.html" : decodedPath;
  const fullPath = path.normalize(path.join(publicRoot, requested));
  if (!fullPath.startsWith(publicRoot)) return null;
  return fullPath;
}

async function handleRequest(req, res) {
  if (req.method === "POST" && req.url.startsWith("/api/ai/analyze-idea")) {
    try {
      const rawBody = await readBody(req);
      const payload = rawBody ? JSON.parse(rawBody) : {};
      return sendJson(res, 200, await analyzeIdea(payload));
    } catch (error) {
      return sendJson(res, 400, {
        error: "AI analizi oluşturulamadı.",
        detail: error.message
      });
    }
  }

  if (req.method !== "GET" && req.method !== "HEAD") {
    return sendJson(res, 405, { error: "Method not allowed" });
  }

  const fullPath = sanitizePath(req.url);
  if (!fullPath) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  fs.stat(fullPath, (statError, stats) => {
    const filePath = !statError && stats.isFile() ? fullPath : path.join(publicRoot, "index.html");
    fs.readFile(filePath, (readError, contents) => {
      if (readError) {
        res.writeHead(500);
        return res.end("Unable to read file");
      }

      const ext = path.extname(filePath);
      res.writeHead(200, {
        "Content-Type": mimeTypes[ext] || "application/octet-stream",
        "Cache-Control": "no-store"
      });
      if (req.method === "HEAD") return res.end();
      return res.end(contents);
    });
  });
}

function listenWithFallback(port, attemptsLeft = 20) {
  const server = http.createServer(handleRequest);

  server.on("error", error => {
    if (error.code === "EADDRINUSE" && attemptsLeft > 0) {
      listenWithFallback(port + 1, attemptsLeft - 1);
      return;
    }

    console.error(error);
    process.exit(1);
  });

  server.listen(port, () => {
    console.log(`NEW IDEA EXCHANGE demo hazır: http://localhost:${port}`);
  });
}

listenWithFallback(startPort);
