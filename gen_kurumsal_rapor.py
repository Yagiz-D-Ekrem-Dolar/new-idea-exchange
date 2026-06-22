from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, HRFlowable, ListFlowable, ListItem
)
from reportlab.lib.colors import HexColor, white
import os

OUTPUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "public", "NIE-Kurumsal-Teknik-Rapor-2026.pdf")
OUTPUT2 = os.path.join(os.path.dirname(os.path.abspath(__file__)), "public", "NIE-Kurumsal-Urun-Raporu.pdf")

NAVY = HexColor("#0a1628")
GREEN = HexColor("#004E2B")
GREEN_MID = HexColor("#00873E")
GREEN_SOFT = HexColor("#e6f3ec")
AMBER = HexColor("#b45309")
AMBER_SOFT = HexColor("#fef3c7")
PURPLE = HexColor("#7c3aed")
PURP_SOFT = HexColor("#ede9fe")
RED_SOFT = HexColor("#fee2e2")
INK = HexColor("#0f172a")
MUTED = HexColor("#64748b")
LINE = HexColor("#e2e8f0")
BG = HexColor("#f8fafc")
WHITE = white
DARK_ROW = HexColor("#f1f5f9")

W, H = A4

doc = SimpleDocTemplate(
    OUTPUT,
    pagesize=A4,
    leftMargin=20 * mm, rightMargin=20 * mm,
    topMargin=22 * mm, bottomMargin=22 * mm,
    title="Heidelberg Materials NIE Teknik Mimari Raporu",
    author="Heidelberg Materials NIE Platform Muhendislik Ekibi",
    subject="Heidelberg Materials Innovation Exchange (NIE) - Technical Architecture Report v2.6.0"
)

base = getSampleStyleSheet()


def S(name, parent="Normal", **kw):
    return ParagraphStyle(name, parent=base[parent], **kw)


COVER_TITLE = S("CoverTitle", fontSize=30, leading=36, textColor=WHITE,
                 fontName="Helvetica-Bold", spaceAfter=8, alignment=TA_LEFT)
COVER_SUB = S("CoverSub", fontSize=12, leading=17, textColor=HexColor("#94a3b8"),
              fontName="Helvetica", spaceAfter=0)
COVER_META = S("CoverMeta", fontSize=9.5, textColor=HexColor("#94a3b8"),
               fontName="Helvetica", spaceAfter=4)

SEC_TITLE = S("SecTitle", fontSize=16, fontName="Helvetica-Bold", textColor=INK,
              leading=20, spaceAfter=4, spaceBefore=14)
SEC_DESC = S("SecDesc", fontSize=10, fontName="Helvetica", textColor=MUTED, spaceAfter=10)
SUB_TITLE = S("SubTitle", fontSize=12, fontName="Helvetica-Bold", textColor=GREEN, spaceAfter=6, spaceBefore=8)

BODY = S("Body", fontSize=10, leading=15, textColor=INK, fontName="Helvetica", spaceAfter=6)
BULLET = S("Bullet", fontSize=10, leading=15, textColor=INK, fontName="Helvetica", leftIndent=12, spaceAfter=3)
CODE = S("Code", fontSize=8.3, leading=12, textColor=HexColor("#e2e8f0"), fontName="Courier")
TH = S("TH", fontSize=8.7, fontName="Helvetica-Bold", textColor=MUTED, alignment=TA_LEFT)
TD = S("TD", fontSize=8.7, fontName="Helvetica", textColor=INK, leading=12.5)
FOOTER_TXT = S("Footer", fontSize=8, textColor=MUTED, fontName="Helvetica")

story = []

# ── COVER ──
cover_inner = [
    [Paragraph("HEIDELBERG MATERIALS &middot; NEW IDEA EXCHANGE", S("CE", fontSize=10, fontName="Helvetica-Bold",
               textColor=HexColor("#94a3b8")))],
    [Spacer(1, 8 * mm)],
    [Paragraph("Teknik Mimari<br/>Raporu", COVER_TITLE)],
    [Spacer(1, 3 * mm)],
    [Paragraph("Heidelberg Materials AG ve istiraklerinin (Hanson, Italcementi, Indocement, CBR Belgium, "
               "Akcansa ve digerleri) 9 ulke portalinda kullandigi platform mimarisi, mevcut durum incelemesi, "
               "teknik borc envanteri ve onerilen yol haritasi.", COVER_SUB)],
    [Spacer(1, 12 * mm)],
    [Table(
        [[Paragraph("v2.6.0", COVER_META), Paragraph("Haziran 2026", COVER_META),
          Paragraph("Heidelberg Materials", COVER_META), Paragraph("Gizli", COVER_META)]],
        colWidths=[38 * mm] * 4,
        style=TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP")])
    )],
]
cover_tbl = Table([[c] for c in cover_inner], colWidths=[W - 40 * mm],
    style=TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), NAVY),
        ("TOPPADDING", (0, 0), (-1, -1), 6), ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("LEFTPADDING", (0, 0), (-1, -1), 16 * mm), ("RIGHTPADDING", (0, 0), (-1, -1), 10 * mm),
        ("ROUNDEDCORNERS", [8]),
    ]))
full_cover = Table([[cover_tbl]], colWidths=[W - 40 * mm], rowHeights=[200 * mm],
    style=TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), NAVY), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ("ROUNDEDCORNERS", [12]),
    ]))
story.append(full_cover)
story.append(PageBreak())


def section(title, desc=""):
    story.append(Paragraph(title, SEC_TITLE))
    story.append(HRFlowable(width="100%", thickness=1.2, color=GREEN_MID, spaceAfter=8))
    if desc:
        story.append(Paragraph(desc, SEC_DESC))


def sub(title):
    story.append(Paragraph(title, SUB_TITLE))


def para(text):
    story.append(Paragraph(text, BODY))


def bullets(items):
    story.append(ListFlowable(
        [ListItem(Paragraph(i, BULLET), bulletColor=GREEN_MID) for i in items],
        bulletType="bullet", start="circle", leftIndent=10
    ))
    story.append(Spacer(1, 4))


def code_block(text):
    rows = [[Paragraph(line.replace(" ", "&nbsp;"), CODE)] for line in text.strip("\n").split("\n")]
    t = Table(rows, colWidths=[W - 40 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), NAVY),
        ("LEFTPADDING", (0, 0), (-1, -1), 10), ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, 0), 8), ("BOTTOMPADDING", (-1, -1), (-1, -1), 8),
        ("ROUNDEDCORNERS", [6]),
    ]))
    story.append(t)
    story.append(Spacer(1, 8))


def simple_table(header, rows, widths=None):
    data = [[Paragraph(h, TH) for h in header]] + [[Paragraph(c, TD) for c in r] for r in rows]
    t = Table(data, colWidths=widths or [(W - 40 * mm) / len(header)] * len(header))
    style = [
        ("BACKGROUND", (0, 0), (-1, 0), DARK_ROW),
        ("LINEBELOW", (0, 0), (-1, 0), 1, LINE),
        ("LINEBELOW", (0, 1), (-1, -2), 0.5, HexColor("#f1f5f9")),
        ("TOPPADDING", (0, 0), (-1, -1), 6), ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("LEFTPADDING", (0, 0), (-1, -1), 8), ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]
    t.setStyle(TableStyle(style))
    story.append(t)
    story.append(Spacer(1, 10))


# 1. Yonetici Ozeti
section("1. Yonetici Ozeti", "Mevcut kod tabaninin mimari ve urun durumu")
para("Bu rapor, NEW IDEA EXCHANGE uygulamasinin mevcut kod tabanina gore bastan hazirlanmistir. "
     "Inceleme; proje yapisi, frontend mimarisi, state yonetimi, mock veri modeli, AI analiz endpoint'i, "
     "Vercel deployment yapisi, kullanici akislari, borsa mantigi, yonetici modulleri, dosya goruntuleme "
     "katmani ve teknik borc alanlarini kapsar.")
para("Uygulama, backend'i sinirli olan fakat urun demosu acisindan genis kapsamli bir vanilla JavaScript "
     "single page application olarak calisir. Ana kullanici deneyimi public/app.js icinde tutulur; "
     "Heidelberg Materials istirakleri, kullanicilar, fikirler, ekipler, duyurular, gundem, yarismalar ve "
     "kulup verileri public/mockData.js icinde modellenir. Sunucu tarafinda iki gorev vardir: statik dosya "
     "servis etmek ve fikir analizi icin /api/ai/analyze-idea endpoint'ini calistirmak.")
para("Urunun en guclu tarafi, klasik oneri kutusu yerine fikirleri bir portfoy varligi gibi ele almasidir. "
     "Fikirler fiyat, hacim, degisim, lot, destekci, AI skoru, ekip baglantisi, dosya bundle'i ve "
     "urunlesme seviyesiyle temsil edilir.")
sub("Ana Teknik Riskler")
bullets([
    "public/app.js cok buyuk ve monolitiktir; render, state, event handling, veri donusumu ve is kurallari ayni dosyada birlesmistir.",
    "State icinde tekrar eden alanlar vardir; ornegin investmentLedger, ledgerUserFilter, affiliationFilter birden fazla kez tanimlanir.",
    "Hizli degerlendirme ekrani gorsel olarak Al/Alma dilini kullanir; ancak tam borsa Al/Sat defteriyle birebir ayni transaction modeline bagli degildir.",
    "Gercek persistence yoktur; cogu akis tarayici belleginde calisan demo state ile sinirlidir.",
    "Otomatik test altyapisi yoktur; mevcut guvence node --check ve manuel browser smoke test ile sinirlidir.",
])
para("Bu risklere ragmen uygulama demo/MVP gosterimi icin guclu bir hikaye sunar. Canli urunlesme icin "
     "onerilen ilk hamle, kodun modulerlestirilmesi, shared data/service katmani kurulmasi, state modelinin "
     "sadelestirilmesi ve API mantiginin tek kaynakli hale getirilmesidir.")

# 2. Inceleme Kapsami
section("2. Inceleme Kapsami", "Incelenen ana dosyalar")
simple_table(["Dosya", "Rol"], [
    ["package.json", "Proje metadata'si ve node server.js baslangic script'i."],
    ["server.js", "Local Node HTTP server, statik dosya servisi, Groq destekli AI analiz endpoint'i."],
    ["api/ai/analyze-idea.js", "Vercel serverless function karsiligi."],
    ["vercel.json", "API rewrite ve SPA fallback routing."],
    ["public/index.html", "SPA shell, fontlar, Lucide, mock data ve app script yukleme sirasi."],
    ["public/mockData.js", "Sirketler, kullanicilar, fikirler, ekipler, yarismalar, nav ve baslangic veri modeli."],
    ["public/app.js", "Uygulamanin ana state, render, event, islem ve UI mantigi."],
    ["public/styles.css", "Tema, responsive grid, borsa, sosyal, studio, ekip ve dosya goruntuleme stilleri."],
    ["public/assets/*", "Heidelberg Materials/istirak logolari, ulke bayraklari ve gorsel varliklar."],
], widths=[42 * mm, (W - 40 * mm) - 42 * mm])
para("Bu rapor kodu degistirmeyi degil, kodun gercek halini aciklamayi amaclar. Rapor icinde belirtilen "
     "eksikler, uygulamayi kiran zorunlu hatalar degil; urunlesme ve bakim kalitesi acisindan dikkate "
     "alinmasi gereken teknik borclardir.")
story.append(PageBreak())

# 3. Urun Tanimi
section("3. Uygulamanin Urun Tanimi")
para("NEW IDEA EXCHANGE, kurum ici fikir, proje, arastirma, sikayet, veri, duyuru, ekip ve urunlesme "
     "sureclerini tek bir etkilesim alaninda toplar. Uygulama Heidelberg Materials ekosistemine gore "
     "markalanmistir; istirakler, ulkeler, sehirler ve kampusler mock veriyle temsil edilir. Urunun ana "
     "fikri sudur: Fikir -&gt; Borsa Varligi -&gt; Ekip/Studyo -&gt; Urunlesme -&gt; Yonetici Karari")
bullets([
    "Baslik, ozet, problem, cozum ve KPI bilgisi",
    "Sirket/ulke/kampus baglantisi",
    "AI skoru ve stratejik skor",
    "Piyasa fiyati, degisim, hacim ve lot bilgisi",
    "Yorumlar ve destekci sayisi",
    "Dosya bundle'i",
    "Ekip/studyo baglantisi",
    "Urunlesme asamasi",
])

# 4. Genel Mimari
section("4. Genel Mimari")
sub("Calisma Modeli")
bullets([
    "Local runtime: node server.js ile port 4173 uzerinde statik sunum ve AI endpoint.",
    "Vercel runtime: Statik dosyalar + api/ai/analyze-idea.js serverless function + vercel.json rewrite.",
])
code_block(
    "Browser -> /index.html -> /mockData.js -> /app.js -> render(state)\n"
    "  -> user action -> mutate state -> render(state)\n\n"
    "AI analiz akisi:\n"
    "Browser -> POST /api/ai/analyze-idea -> Groq API varsa model yaniti\n"
    "  -> Groq yoksa deterministic demo fallback -> JSON analysis response"
)
simple_table(["Katman", "Mevcut Sorumluluk", "Degerlendirme"], [
    ["HTML shell", "Root container, fontlar, Lucide, script yukleme.", "Basit ve yeterli."],
    ["CSS", "Tema, layout, responsive davranis, kartlar, borsa UI, dosya modallari.", "Genis fakat parcali; CSS modulleri onerilir."],
    ["Mock data", "Sirket master data, kullanicilar, fikirler, ekipler, yarismalar.", "Demo icin guclu; production icin API/DB gerekir."],
    ["App JS", "State, render, event delegation, is kurallari, filtreler.", "MVP icin hizli; surdurulebilirlik icin bolunmeli."],
    ["Node server", "Static serving + AI endpoint.", "Lokal demo icin yeterli."],
    ["Vercel API", "AI endpoint'in serverless kopyasi.", "Mantik server.js ile tekrarli."],
], widths=[30 * mm, 75 * mm, (W - 40 * mm) - 105 * mm])
story.append(PageBreak())

# 5. Frontend
section("5. Frontend Mimari Analizi")
sub("SPA Yaklasimi")
para("Uygulama framework kullanmadan tek sayfa uygulama olarak yazilmistir. Tum sayfalar string template "
     "ureten render* fonksiyonlariyla olusturulur. Kullanici etkilesimleri document seviyesinde event "
     "delegation ile yakalanir.")
code_block(
    "function render() {\n"
    "  document.body.dataset.theme = state.theme;\n"
    "  translateAllInState();\n"
    "  app.innerHTML = state.loggedIn ? renderShell() : renderLogin();\n"
    "  if (window.lucide) window.lucide.createIcons();\n"
    "  initAIBubbleDraggability();\n"
    "}"
)
para("Bu yaklasim hizli demo uretir; ancak tum DOM her render'da yeniden yazildigi icin buyuk veri "
     "setlerinde performans ve focus kaybi riski olusturur.")
sub("State Yonetimi")
para("State global state nesnesiyle tutulur. Bu nesne login, piyasa, portfoy, filtreler, ekipler, "
     "kulupler, gundem, depolama, AI asistan, dosya goruntuleme ve kullanici tercihlerini kapsar.")
bullets([
    "Avantaj: Debug etmek kolaydir, demo davranislari hizlica eklenir.",
    "Avantaj: Backend olmadan cok sayida ekran tutarli gosterilebilir.",
    "Risk: State semasi buyudukce tutarlilik kontrolu zorlasir.",
    "Risk: Ayni alanlarin birden fazla tanimlanmasi son degerin onceki degeri ezmesine neden olur.",
    "Risk: Browser refresh sonrasi kullanici islemleri kalici degildir.",
])

# 6. Veri Modeli
section("6. Veri Modeli")
sub("Sirket ve Cografya Modeli")
para("public/mockData.js icinde affiliationCompanies listesi Heidelberg Materials AG ve istiraklerini "
     "temsil eder. Her sirket; logo, kisa ad, ulke, sehir, kampus ve departman alanlariyla modellenir.")
bullets(["Ulke portali", "Istirak filtresi", "Sehir/kampus bazli duyuru", "Ekip ve kisi eslestirme", "Sirket logosu gosterimi"])
sub("Fikir Modeli")
simple_table(["Alan", "Anlam"], [
    ["title, summary", "Kullaniciya gorunen fikir icerigi."],
    ["problem, solution", "Karar ve AI analiz baglami."],
    ["companyId, country", "Portal ve istirak filtresi."],
    ["aiScore, strategicScore", "Onceliklendirme sinyali."],
    ["marketPrice / marketChange / marketVolume", "Borsa fiyatlama ve hacim gostergeleri."],
    ["files", "PDF, PPTX, XLSX, CSV gibi bundle dosyalari."],
    ["translations", "Cok dilli baslik/ozet/problem/cozum."],
], widths=[55 * mm, (W - 40 * mm) - 55 * mm])
story.append(PageBreak())

# 7. Borsa
section("7. Borsa ve Fiyatlama Mantigi")
code_block(
    "function marketPrice(idea) {\n"
    "  const base = Number(idea.marketPrice || 100);\n"
    "  const change = Number(idea.marketChange || 0);\n"
    "  return Math.max(20, Math.round(base * (1 + change / 100)));\n"
    "}"
)
para("Borsa ekraninda alim ve satim islemleri marketBudget, marketHoldings ve investmentLedger uzerinde "
     "calisir. Mevcut model gercek emir defteri degildir; limit emir, esleme motoru, karsi taraf, "
     "komisyon ve settlement mantigi demo seviyesinde temsil edilmez.")
simple_table(["Akis", "Mevcut Etki", "Uretim Onerisi"], [
    ["Borsa Al/Sat", "Butce, holding ve ledger guncellenir.", "Transaction-safe ledger."],
    ["Hizli Degerlendir - Al", "Destek/oy sinyali uretir.", "Istenirse dogrudan kucuk lot alimiyla baslanmali."],
    ["Hizli Degerlendir - Alma", "Karti gecer; negatif islem defteri uretmez.", "Negatif sinyal veya watchlist olarak modellenmeli."],
], widths=[42 * mm, 60 * mm, (W - 40 * mm) - 102 * mm])

# 8-13 condensed
section("8. Modul Incelemesi")
bullets([
    "Giris ve Yetki: demo exchange key ile baslar; canAccess() ile manager/admin gorunurlugu kontrol edilir.",
    "Dashboard: portfoy, borsa, hizli aksiyonlar ve genel platform sinyallerini birlestirir.",
    "Borsa: fikir listesi, fiyat, degisim, hacim, portfoy, liderler, grafik ve sirket filtresi icerir.",
    "Veri ve Bilgi: veri setleri, kaynaklar ve oneri/sikayet bildirimlerini kapsar.",
    "Gundem: manuel kurumsal gundem akisidir; AI internete cikmaz.",
    "Duyurular: istirak, ulke, sehir, kampus ve departman olcekli duyuru yayinlamayi destekler.",
    "Sosyal: post, gorsel, anket, tahmin ve leaderboard etkilesimini icerir.",
    "Studio ve Ekipler: urunler/studyolar tab yapisiyla calisir; ekipler ayri sayfa olarak korunur.",
    "Yonetici Dashboardu: toplam oy/lot, en guclu fikir, kategori performansi ve yatirim defterini gosterir.",
    "AI Asistan: platform ici veriyle rule-based cevap uretir; gercek LLM degildir.",
])

section("9. Dosya ve Bundle Yonetimi")
para("Fikir kartlarina ve yonetici depolamaya dosya ilistirme mantigi vardir. Dosya turleri PDF, CSV, "
     "XLSX, PPTX, DOC ve gorsel onizleme bilesenleriyle temsil edilir. Bu fonksiyonlar gercek dosya parse "
     "etmez; demo seviyesinde sabit ornek veriden anlamli onizleme uretir. Uretimde dosya yukleme, "
     "storage, virus tarama, DLP ve erisim kontrolu gerekir.")
story.append(PageBreak())

section("10. Backend ve AI Endpoint")
sub("Local Server")
para("server.js Node built-in http, fs ve path modulleriyle yazilmistir. Express kullanilmaz. Request "
     "body limiti 1 MB olarak kontrol edilir; path traversal'a karsi sanitizePath ile public root disina "
     "cikis engellenir.")
sub("Vercel Serverless Function")
para("api/ai/analyze-idea.js, local server'daki AI analiz mantiginin serverless karsiligidir. Groq API "
     "key varsa canli model cagirisi yapar; yoksa demo-simulation doner. Desteklenen environment "
     "degiskenleri: GROQ_API_KEY, GROK_API_KEY, GROQ_MODEL (varsayilan: llama-3.3-70b-versatile).")

section("11. Vercel Yapilandirmasi")
code_block(
    '{ "source": "/api/ai/analyze-idea", "destination": "/api/ai/analyze-idea.js" },\n'
    '{ "source": "/(.*)", "destination": "/index.html" }'
)
para("Bu yapi SPA fallback icin uygundur. Teknik not: server.js icindeki mimeTypes haritasinda .pdf "
     "tanimi eklenmistir; PDF asset'leri application/pdf header'i ile servis edilir.")

section("12. Guvenlik ve Yetkilendirme Degerlendirmesi")
sub("Mevcut Koruma Alanlari")
bullets([
    "AI API key frontend'e yazilmaz.",
    "Local server request body buyuklugunu sinirlar.",
    "Static path normalize edilir ve public root disina cikis engellenir.",
    "Manager/admin menuleri frontend rol kontroluyle gizlenir.",
])
sub("Uretim Icin Eksik Kontroller")
bullets([
    "Backend tarafinda gercek auth enforcement yoktur.",
    "Admin/yonetici state'i client tarafinda degistirilebilir.",
    "Dosya yukleme gercek storage ve malware scan uzerinden gecmez.",
    "Rate limit, abuse prevention ve CSRF/session stratejisi yoktur.",
])
story.append(PageBreak())

section("13. Performans Degerlendirmesi")
para("public/app.js yaklasik 15k satirdir. Her render'da app.innerHTML komple yenilenir. Bu yaklasim "
     "demo olcekte kabul edilebilir; fakat genis veri seti, uzun listeler ve aktif chat modalinda "
     "performans sorunlari dogurabilir.")
bullets([
    "Global render tum DOM'u yeniden uretir.",
    "translateAllInState() her render'da cagirilir.",
    "Buyuk mock veri listeleri filtreleme sirasinda tekrar tekrar dolasilir.",
])

section("14. Teknik Borc ve Eksik Listesi")
simple_table(["Alan", "Bulgu", "Oneri"], [
    ["State semasi", "investmentLedger, ledgerUserFilter gibi alanlar birden fazla kez tanimlaniyor.", "Tek initialState semasi ve migration helper."],
    ["Hizli degerlendirme", "UI Al/Alma; kod supportIdea ve quickEvalLikes ile oy/destek mantigi calistiriyor.", "Borsa transaction ile ya birlestirilmeli ya da adi netlestirilmeli."],
    ["API tekrarlari", "server.js ve api/ai/analyze-idea.js benzer analiz mantigini ayri tasiyor.", "Shared service modulu."],
    ["Test", "Otomatik test suite yok.", "Smoke, unit ve basit Playwright akisi."],
    ["Persistence", "Veri tarayici belleginde kaliyor.", "DB + API + optimistic UI."],
    ["Dosya yukleme", "Dosyalar gercek saklama alanina gitmiyor.", "Object storage + signed URL + DLP."],
], widths=[32 * mm, 78 * mm, (W - 40 * mm) - 110 * mm])
story.append(PageBreak())

section("15. Onerilen Refactor Plani")
sub("Faz 1: Kod Ayristirma")
code_block(
    "public/\n"
    "  app.js\n"
    "  state/initialState.js, selectors.js\n"
    "  modules/market.js, agenda.js, teams.js, social.js, admin.js, aiAssistant.js\n"
    "  services/analysisClient.js, fileBundle.js\n"
    "  ui/icons.js, renderUtils.js"
)
sub("Faz 2: State ve Islem Defteri")
code_block(
    "executeTrade({ ideaId, side, quantity, source }) {\n"
    "  validateBalance(); validateHolding();\n"
    "  mutateCash(); mutateHolding();\n"
    "  appendLedger(); updateMarketSignals();\n"
    "}"
)
sub("Faz 3: Backend Siniri")
simple_table(["Endpoint", "Method", "Amac"], [
    ["/api/session", "GET", "Kullanici, rol ve sirket kapsami."],
    ["/api/ideas", "GET/POST", "Fikir listeleme ve basvuru."],
    ["/api/trades", "POST", "Al/Sat transaction."],
    ["/api/agenda", "GET/POST/PATCH", "Manuel gundem yonetimi."],
    ["/api/files", "POST", "Signed upload veya metadata kaydi."],
    ["/api/ai/analyze-idea", "POST", "AI analiz."],
    ["/api/admin/analytics", "GET", "Yonetici dashboard metrikleri."],
], widths=[45 * mm, 35 * mm, (W - 40 * mm) - 80 * mm])
story.append(PageBreak())

section("16. Veritabani Taslak Modeli")
simple_table(["Tablo", "Aciklama"], [
    ["companies", "Holding, istirak, ulke, sehir, kampus master data."],
    ["users", "Kullanici profili, rol, sirket ve departman."],
    ["ideas", "Fikir/proje/arastirma/sikayet ana kaydi."],
    ["idea_scores", "AI, stratejik, topluluk ve risk skorlari."],
    ["market_assets", "Ticker, baz fiyat, degisim, hacim, arz."],
    ["trade_ledger", "Kullanici, fikir, side, quantity, price, timestamp."],
    ["holdings", "Kullanici bazli portfoy."],
    ["teams / studios", "Urun ekipleri, roller ve inovasyon studyolari."],
    ["agenda_items / announcements", "Manuel kurumsal gundem ve olcekli duyurular."],
    ["file_assets", "Dosya adi, tur, storage key, sahiplik ve sinif."],
], widths=[45 * mm, (W - 40 * mm) - 45 * mm])

section("17. Test Stratejisi")
bullets([
    "node --check public/app.js / public/mockData.js / server.js",
    "Local smoke: login, borsa, al/sat, gundem, ekip, sosyal, admin storage.",
    "API smoke: POST /api/ai/analyze-idea.",
    "Vercel smoke: production URL 200, API endpoint 200/400 kontrollu davranis.",
])
sub("Onerilen Playwright Senaryolari")
bullets([
    "Demo key ile giris yap.",
    "Borsa ekraninda bir fikir al ve portfoy tutarini dogrula.",
    "Ayni fikri sat ve holding azalmasini dogrula.",
    "Global aramada Hanson ara ve fikir/ekip sonuclarini gor.",
    "Yonetici kullanicisiyla dashboard ve depolama alanina eris.",
    "Normal kullaniciyla yonetici sayfasina erisemedigini dogrula.",
])
story.append(PageBreak())

section("18. Deployment Notlari")
para("Uygulama son durumda GitHub heidelberg branch'inde tutulmaktadir. Vercel production deploy icin "
     "mevcut komut akisi:")
code_block(
    "$env:VERCEL_ORG_ID='...'\n"
    "$env:VERCEL_PROJECT_ID='...'\n"
    "npx.cmd vercel deploy --prod --yes"
)
para("Guvenlik notu: Tokenlar komut satirina veya repo dosyalarina yazilmamalidir. Vercel token, Groq "
     "key ve benzeri bilgiler environment variable veya secret store uzerinden yonetilmelidir.")

section("19. Onceliklendirilmis Aksiyon Plani")
simple_table(["Oncelik", "Aksiyon", "Gerekce"], [
    ["P0", "State tekrarlarini temizle", "Ayni anahtarlarin ezilmesi beklenmeyen davranis uretebilir."],
    ["P1", "Hizli degerlendirme ile trade engine'i birlestir", "Al/Sat dili veri davranisiyla uyumlu olmali."],
    ["P1", "Shared AI service", "Local ve Vercel endpoint'leri ayni mantigi tek kaynaktan kullanmali."],
    ["P2", "Module split", "15k satirlik app.js bakim maliyetini dusurmek icin ayristirilmali."],
    ["P2", "Test altyapisi", "Deploy oncesi temel akislari otomatik dogrulamak gerekir."],
    ["P3", "Backend persistence", "Demo state uretim verisine donusturulmeli."],
], widths=[25 * mm, 65 * mm, (W - 40 * mm) - 90 * mm])

section("20. Sonuc")
para("NEW IDEA EXCHANGE mevcut haliyle guclu bir demo urunudur. Heidelberg Materials markasina "
     "uyarlanmis istirak verisi, cok ulkeli kullanici seti, fikir borsasi, portfoy, studio, ekip, sosyal, "
     "yarisma, egitim, etkinlik, yonetici dashboardu ve AI destekli fikir analizi gibi genis bir urun "
     "hikayesi sunar.")
para("Teknik acidan en onemli gercek sudur: uygulama urun fikrini cok iyi gosterir; fakat kod "
     "organizasyonu ve veri kaliciligi henuz uretim standardinda degildir. Raporun onerdigi refactor "
     "plani uygulandiginda, mevcut demo dogrudan olceklenebilir bir kurumsal urun iskeletine "
     "donusebilir.")

story.append(Spacer(1, 10 * mm))
story.append(HRFlowable(width="100%", thickness=1, color=LINE, spaceAfter=6))
footer_row = Table(
    [[Paragraph("<b>HEIDELBERG MATERIALS &middot; NEW IDEA EXCHANGE</b> - Teknik Mimari Raporu v2.6.0", FOOTER_TXT),
      Paragraph("Heidelberg Materials NIE Platform Muhendislik Ekibi - Haziran 2026 - Gizli",
                S("FR", fontSize=8, textColor=MUTED, fontName="Helvetica", alignment=TA_RIGHT))]],
    colWidths=[(W - 40 * mm) / 2] * 2,
)
story.append(footer_row)

doc.build(story)
print("PDF olusturuldu:", OUTPUT)

import shutil
shutil.copyfile(OUTPUT, OUTPUT2)
print("Kopyalandi:", OUTPUT2)
