from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, HRFlowable
)
from reportlab.lib.colors import HexColor, white
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT = os.path.join(BASE_DIR, "public", "NIE-Kurumsal-Teknik-Rapor-2026.pdf")
OUTPUT2 = os.path.join(BASE_DIR, "public", "NIE-Kurumsal-Urun-Raporu.pdf")

NAVY = HexColor("#0a1628")
BLUE = HexColor("#12805c")
GREEN = HexColor("#16a34a")
GREEN_SOFT = HexColor("#dcfce7")
AMBER = HexColor("#b45309")
AMBER_SOFT = HexColor("#fef3c7")
PURPLE = HexColor("#7c3aed")
INK = HexColor("#0f172a")
MUTED = HexColor("#64748b")
LINE = HexColor("#e2e8f0")
WHITE = white
DARK_ROW = HexColor("#f1f5f9")
W, H = A4

doc = SimpleDocTemplate(
    OUTPUT, pagesize=A4,
    leftMargin=20 * mm, rightMargin=20 * mm, topMargin=22 * mm, bottomMargin=22 * mm,
    title="Sabanci Holding NIE Teknik Mimari Raporu",
    author="Sabanci Holding NIE Platform Muhendislik Ekibi",
    subject="Sabanci Innovation Exchange (NIE) - Technical Architecture Report v2.6.0"
)

base = getSampleStyleSheet()


def S(name, **kw):
    return ParagraphStyle(name, parent=base["Normal"], **kw)


COVER_TITLE = S("CoverTitle", fontSize=30, leading=36, textColor=WHITE, fontName="Helvetica-Bold", spaceAfter=8)
COVER_SUB = S("CoverSub", fontSize=12, leading=17, textColor=HexColor("#94a3b8"), fontName="Helvetica")
COVER_META = S("CoverMeta", fontSize=9.5, textColor=HexColor("#94a3b8"), fontName="Helvetica")
SEC_TITLE = S("SecTitle", fontSize=16, fontName="Helvetica-Bold", textColor=INK, spaceAfter=2, spaceBefore=14)
SEC_DESC = S("SecDesc", fontSize=9.5, fontName="Helvetica", textColor=MUTED, spaceAfter=10)
BODY = S("Body", fontSize=10, leading=15, textColor=INK, fontName="Helvetica", spaceAfter=6)
TH = S("TH", fontSize=8.5, fontName="Helvetica-Bold", textColor=MUTED)
TD = S("TD", fontSize=8.7, fontName="Helvetica", textColor=INK, leading=12.5)
TD_BOLD = S("TDB", fontSize=9, fontName="Helvetica-Bold", textColor=INK)
TD_GREEN = S("TDG", fontSize=9, fontName="Helvetica-Bold", textColor=GREEN)
TD_LINK = S("TDL", fontSize=8.7, fontName="Helvetica-Bold", textColor=BLUE)
FOOTER_TXT = S("Footer", fontSize=8, textColor=MUTED, fontName="Helvetica")

story = []

cover_inner = [
    [Paragraph("SABANCI HOLDING &middot; NEW IDEA EXCHANGE", S("CE", fontSize=10, fontName="Helvetica-Bold", textColor=HexColor("#94a3b8")))],
    [Spacer(1, 8 * mm)],
    [Paragraph("Teknik Mimari<br/>Raporu", COVER_TITLE)],
    [Spacer(1, 3 * mm)],
    [Paragraph("Sabanci Holding ve istiraklerinin (Akbank, Cimsa, Temsa, Kordsa, Enerjisa, Teknosa, "
               "CarrefourSA, SabanciDx ve digerleri) 5 ulke portalinda kullandigi platform altyapisi, "
               "teknoloji yigini, olceklenebilirlik plani ve aylik altyapi maliyet analizi.", COVER_SUB)],
    [Spacer(1, 12 * mm)],
    [Table([[Paragraph("v2.6.0", COVER_META), Paragraph("Haziran 2026", COVER_META),
             Paragraph("Sabanci Holding", COVER_META), Paragraph("Gizli", COVER_META)]],
           colWidths=[38 * mm] * 4, style=TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP")]))],
]
cover_tbl = Table([[c] for c in cover_inner], colWidths=[W - 40 * mm],
    style=TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), NAVY),
        ("TOPPADDING", (0, 0), (-1, -1), 6), ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("LEFTPADDING", (0, 0), (-1, -1), 16 * mm), ("RIGHTPADDING", (0, 0), (-1, -1), 10 * mm),
        ("ROUNDEDCORNERS", [8]),
    ]))
full_cover = Table([[cover_tbl]], colWidths=[W - 40 * mm], rowHeights=[150 * mm],
    style=TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), NAVY), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ("ROUNDEDCORNERS", [12]),
    ]))
story.append(full_cover)
story.append(Spacer(1, 8 * mm))

meta_data = [("99.95%", "Uptime SLA"), ("<120ms", "P95 Latency"), ("50K+", "Kullanici Hedefi"),
             ("SOC 2", "Sertifikasyon"), ("KVKK", "Uyumluluk")]
metric_inner = []
for val, lbl in meta_data:
    metric_inner.append(Table(
        [[Paragraph(f"<b>{val}</b>", S("MV2", fontSize=15, fontName="Helvetica-Bold", textColor=BLUE, alignment=TA_CENTER))],
         [Paragraph(lbl, S("ML2", fontSize=8, textColor=MUTED, alignment=TA_CENTER, fontName="Helvetica"))]],
        colWidths=[28 * mm],
        style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), WHITE), ("BOX", (0, 0), (-1, -1), 0.5, LINE),
                           ("ROUNDEDCORNERS", [6]), ("TOPPADDING", (0, 0), (-1, -1), 6), ("BOTTOMPADDING", (0, 0), (-1, -1), 6)])))
story.append(Table([metric_inner], colWidths=[31 * mm] * 5,
    style=TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 1.5 * mm), ("RIGHTPADDING", (0, 0), (-1, -1), 1.5 * mm)])))
story.append(PageBreak())


def section(num, title, desc=""):
    story.append(Paragraph(f"{num}&nbsp;&nbsp;{title}", SEC_TITLE))
    if desc:
        story.append(Paragraph(desc, SEC_DESC))


def para(text):
    story.append(Paragraph(text, BODY))


def simple_table(header, rows, widths=None, boldFirst=False):
    data = [[Paragraph(h, TH) for h in header]]
    for r in rows:
        row = []
        for i, c in enumerate(r):
            row.append(Paragraph(c, TD_LINK if (i == 0 and boldFirst) else TD))
        data.append(row)
    t = Table(data, colWidths=widths or [(W - 40 * mm) / len(header)] * len(header))
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), DARK_ROW),
        ("LINEBELOW", (0, 0), (-1, 0), 1, LINE),
        ("LINEBELOW", (0, 1), (-1, -2), 0.5, HexColor("#f1f5f9")),
        ("TOPPADDING", (0, 0), (-1, -1), 6), ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("LEFTPADDING", (0, 0), (-1, -1), 8), ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    story.append(t)
    story.append(Spacer(1, 10))


def callout(text, color=HexColor("#e8f0ff"), border=BLUE):
    t = Table([[Paragraph(text, BODY)]], colWidths=[W - 40 * mm],
        style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), color), ("BOX", (0, 0), (-1, -1), 1, border),
                           ("LEFTPADDING", (0, 0), (-1, -1), 12), ("TOPPADDING", (0, 0), (-1, -1), 10),
                           ("BOTTOMPADDING", (0, 0), (-1, -1), 10), ("ROUNDEDCORNERS", [8])]))
    story.append(t)
    story.append(Spacer(1, 10))


section("1", "Yonetici Ozeti", "Platformun teknik vizyonu ve temel metrikler")
callout(
    "<b>Sabanci Innovation Exchange (NIE)</b>, Sabanci Holding ve istiraklerinin (Akbank, Cimsa, "
    "Temsa, Kordsa, Enerjisa, Teknosa, CarrefourSA, SabanciDx ve "
    "digerleri) Turkiye, Birlesik Krallik, ABD, Almanya ve Ispanya portallarinda calisanlarin fikir "
    "uretmesini, ekip ve kulup kurmasini, kararlarini Karar Kurulu'na tasimasini ve inovasyon "
    "projelerini hayata gecirmesini saglayan cok dilli kurumsal inovasyon platformudur. Sistem; fikir "
    "borsasi, ekip ve kulup yonetimi (kendi sohbet alanlariyla), gercek zamanli mesajlasma, AI destekli "
    "degerlendirme ve analitik modullerinden olusur.<br/><br/>"
    "Bu rapor, platformun uretim ortamina alinmasi icin ongorulen <b>enterprise-grade teknoloji "
    "yiginini</b>, mimari kararlari, guvenlik gereksinimlerini ve aylik operasyon maliyetlerini kapsar.")

section("2", "Frontend Teknoloji Yigini", "UI framework, state yonetimi ve performans katmani")
simple_table(["Teknoloji", "Versiyon", "Aciklama"], [
    ["Next.js", "15.3.2", "App Router, Server Components, Streaming SSR, ISR, edge-optimized rendering"],
    ["React", "19.1.0", "Concurrent rendering, Server Actions, Suspense, use() hook"],
    ["TypeScript", "5.5", "Strict mode, Zod runtime validation, end-to-end tip guvenligi (tRPC)"],
    ["Tailwind CSS", "4.0", "Lightning CSS compiler, design token sistemi, dark mode, responsive grid"],
    ["Framer Motion", "11.x", "Layout animations, spring physics, GPU-accelerated mikro-animasyonlar"],
    ["shadcn/ui + Radix", "headless", "WCAG 2.1 AA uyumlu erisilebilir bilesen primitifleri"],
    ["Zustand + Jotai", "v4 / v2", "Global state (Zustand), atomic state (Jotai), devtools, persist middleware"],
    ["TanStack Query", "v5", "Stale-while-revalidate, optimistic updates, infinite scroll, background sync"],
    ["Recharts + D3", "v2 / v7", "Borsa grafikleri, sinerji radar, analitik panelleri - SVG tabanli"],
], widths=[34 * mm, 22 * mm, (W - 40 * mm) - 56 * mm], boldFirst=True)

section("3", "Backend & API Katmani", "Sunucu mimarisi, API tasarimi ve job queue sistemi")
callout(
    "<b>Mikro-servis hazirlik:</b> Monolith olarak baslayan backend, bounded context prensibiyle "
    "modullere ayrilmistir: Fikir Servisi, Borsa Servisi, Ekip Servisi, Mesajlasma Servisi, AI Servisi, "
    "<b>AI Gundem Servisi</b>. Olcege gore ayri konteyner olarak deploy edilebilir.",
    color=GREEN_SOFT, border=GREEN)
simple_table(["Teknoloji", "Versiyon", "Aciklama"], [
    ["Bun Runtime", "1.1.x", "Node.js'e kiyasla 3x daha hizli cold start. Native TypeScript, built-in bundler ve test runner."],
    ["Hono.js", "4.x", "Edge-native, ultra lightweight REST API. Middleware zinciri, zod validation, JWT auth dahili."],
    ["Apollo Server", "4.x", "Schema-first GraphQL, DataLoader batching, persisted queries, subscription (realtime)."],
    ["tRPC", "v11", "End-to-end type safety. Istemci-sunucu sozlesmesi, Next.js ile tam entegrasyon."],
    ["BullMQ", "v5 + Redis", "AI analiz, AI gundem taramasi, e-posta bildirimleri, borsa fiyat guncellemeleri icin asenkron is kuyrugu."],
    ["Drizzle ORM", "v0.30+", "SQL-first, sifir overhead ORM. TypeScript sema tanimlari, otomatik migration."],
], widths=[30 * mm, 22 * mm, (W - 40 * mm) - 52 * mm], boldFirst=True)
story.append(PageBreak())

section("4", "Veritabani & Depolama", "Cok katmanli veri mimarisi")
simple_table(["Teknoloji", "Katman", "Kullanim Amaci"], [
    ["SpacetimeDB", "Realtime DB", "Borsa fiyat tick'leri, canli ekip state'i, anlik mesajlar. Sub-millisecond latency."],
    ["Supabase (PostgreSQL 16)", "Primary DB", "Ana iliskisel veri: kullanicilar, fikirler, ekipler, yorumlar, denetim kaydi. Row-Level Security, 500GB+."],
    ["Upstash Redis", "Cache / Queue", "Session cache, rate limiting, BullMQ backing store, SSE broadcast. Global edge, <1ms."],
    ["Pinecone", "Vector DB", "Fikir semantik arama ve AI onerisi icin embedding vektorleri. 100M+ vektor kapasitesi."],
    ["Cloudflare R2", "Object Storage", "Kullanici dosyalari, ekler, raporlar, sirket logolari. S3 uyumlu, ucretsiz egress. 10TB+."],
    ["Turso (libSQL)", "Edge DB", "Edge-close per-tenant SQLite. Dusuk gecikme gerektiren okuma agirlikli sorgular. 500+ lokasyon."],
], widths=[42 * mm, 26 * mm, (W - 40 * mm) - 68 * mm], boldFirst=True)

section("5", "Yapay Zeka & Makine Ogrenimi", "AI modulleri, RAG pipeline ve embedding sistemi")
simple_table(["Teknoloji", "Versiyon", "Aciklama"], [
    ["Anthropic Claude 4 Sonnet", "claude-sonnet-4-5", "Fikir degerlendirmesi, AI raporu, sohbet asistani. 200K token context."],
    ["DeepSeek (Gundem Asistani)", "deepseek-chat", "AI Gundem Analiz Motoru: borsa, duyuru, yarisma ve veri sayfalari aktivitesinin taranmasi, oncelikli gundem maddesi uretimi ve haftalik yonetici ozet raporu."],
    ["OpenAI text-embedding-3", "3072 dim", "Fikir benzerlik analizi, semantik arama ve oneri motoru icin vektor uretimi."],
    ["LangChain.js", "v0.3.x", "Retrieval-Augmented Generation: platform dokumantasyonu ve gecmis fikirlerden baglam cekme."],
    ["Vercel AI SDK", "v4.x", "Streaming responses, tool use, multi-step AI flows. Model provider abstraction."],
], widths=[44 * mm, 30 * mm, (W - 40 * mm) - 74 * mm], boldFirst=True)
checks = [
    "Fikir Otomatik Skorlama (0-100)", "AI Destekli Proje Raporu",
    "Sinerji Hesaplama (Ekip Uyumu)", "Semantik Fikir Arama",
    "Kisisellestirilmis Oneri Motoru", "Otomatik Kategori Siniflandirma",
    "Dogal Dil Sohbet Asistani", "Borsa Trend Tahminleme",
    "DeepSeek AI Gundem Onerisi", "DeepSeek Haftalik Yonetici Raporu",
]
rows = [[f"&#10003; {checks[i]}", f"&#10003; {checks[i+1]}"] for i in range(0, len(checks), 2)]
story.append(Table([[Paragraph(a, TD), Paragraph(b, TD)] for a, b in rows], colWidths=[(W - 40 * mm) / 2] * 2,
    style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), DARK_ROW), ("BOX", (0, 0), (-1, -1), 0.5, LINE),
                       ("LINEBELOW", (0, 0), (-1, -2), 0.5, WHITE),
                       ("TOPPADDING", (0, 0), (-1, -1), 6), ("BOTTOMPADDING", (0, 0), (-1, -1), 6), ("LEFTPADDING", (0, 0), (-1, -1), 10)])))
story.append(PageBreak())

section("6", "Guvenlik & Uyumluluk", "Kimlik dogrulama, yetkilendirme ve veri koruma")
simple_table(["Katman", "Teknoloji", "Aciklama"], [
    ["Kimlik Dogrulama", "Auth.js v5 + SAML 2.0", "Kurumsal SSO (Active Directory / SAML 2.0), MFA zorunlulugu, session rotation"],
    ["Yetkilendirme", "RBAC + RLS", "Rol tabanli erisim; Supabase Row-Level Security ile veri izolasyonu"],
    ["API Guvenligi", "JWT + mTLS", "Short-lived JWT (15 dk), servisler arasi mTLS, API key rotation"],
    ["Sifreleme", "AES-256 / TLS 1.3", "Dinlenme halinde ve transit sirasinda tam sifreleme"],
    ["Rate Limiting", "CF Workers + Redis", "IP ve kullanici bazli; sliding window algoritmasi"],
    ["Uyumluluk", "KVKK / GDPR", "Veri silme talepleri, consent yonetimi, denetim logu"],
    ["Sertifikasyon", "SOC 2 Type II", "Yillik bagimsiz denetim (hedef: Q4 2026)"],
    ["Secret Yonetimi", "Doppler / Vault", "Environment variable merkezi yonetimi, otomatik rotation -- DeepSeek/Claude API anahtarlari dahil"],
], widths=[32 * mm, 36 * mm, (W - 40 * mm) - 68 * mm], boldFirst=True)

section("7", "DevOps & CI/CD Pipeline", "Gelistirme, test ve deployment akisi")
simple_table(["Arac", "Aciklama"], [
    ["GitHub Actions", "PR uzerine otomatik lint, test, build, Vercel preview deploy. Main'e merge = production."],
    ["Vitest + Playwright", "Unit/integration: Vitest. E2E: Playwright (multi-browser, mobil emulasyon). Coverage %80+."],
    ["Datadog + Sentry", "APM, distributed tracing, error tracking, uptime monitoring, alerting (PagerDuty)."],
    ["Docker + Kubernetes", "Backend servisleri icin Dockerfile. Prod ortaminda K8s (EKS) ile horizontal auto-scaling."],
    ["GrowthBook", "A/B testing, gradual rollout, dark launches, kullanici segmentasyon - OSS self-hosted."],
    ["Turborepo", "Monorepo yonetimi, build cache optimizasyonu, parallel task execution."],
], widths=[40 * mm, (W - 40 * mm) - 40 * mm], boldFirst=True)

section("8", "Performans & Olceklenebilirlik", "Hedef metrikler")
simple_table(["Metrik", "Hedef"], [
    ["Core Web Vitals LCP", "< 1.2s"], ["Core Web Vitals CLS", "< 0.05"],
    ["API P50 Latency", "< 45ms"], ["API P95 Latency", "< 120ms"],
    ["WebSocket Message Delay", "< 50ms"], ["DB Query P99", "< 200ms"],
    ["SpacetimeDB Tick Rate", "60 Hz"], ["DeepSeek Gundem Tarama Periyodu", "6 saat"],
    ["Esz. Kullanici (baslangic)", "5,000"], ["Esz. Kullanici (hedef)", "50,000"],
    ["Uptime SLA", "99.95%"],
], widths=[(W - 40 * mm) * 0.6, (W - 40 * mm) * 0.4])
story.append(PageBreak())

section("9", "Girisimcilik Ekosistemi & Genisletilmis Ozellikler", "Sosyal tahmin, mentorluk, hisse paylasim ve AI gundem modulleri")
simple_table(["Modul", "Teknoloji / Yapi", "Detay / Islev"], [
    ["Sosyal Tahmin", "Basari Tahmin & AI Siralama", "Borsa projelerinin basari olasiliklarini tahmin eden topluluk analiz araci. AI ve topluluk tahminlerinin harmanlanmasiyla dinamik basari siralamasi."],
    ["Mentorluk", "Matchmaking & Mentor Dizini", "Grup ici uzmanlarin yetkinlik ve tecrubelerine gore listelendigi mentor dizini ve akilli eslestirme modulu."],
    ["Ekip & Hisse", "Paylasimli Ortaklik & %10 Odul Paylasimi", "Projelerin acik hisse orani (openEquity) takibi. Proje hayata gectiginde yatirimci ve girisimci %10 paylasim kurallari."],
    ["AI Gundem Asistani (DeepSeek)", "DeepSeek Tabanli Gundem Analiz Motoru", "DeepSeek modeli ile fikir borsasi, duyuru, yarisma ve veri sayfalarindaki aktivitenin periyodik taranmasi; oncelikli/riskli basliklarin otomatik gundem maddesi olarak isaretlenmesi (yonetici onayina acik) ve haftalik ozet raporun Yonetici Dashboardu'na + e-postaya sunulmasi."],
    ["Ekipler (v2.5)", "Bagimsiz Ust Seviye Sayfa", "Ekipler, Studyo hub'indan ayrilarak kendi navigasyon sekmesine tasindi. Proje ekipleri ve sosyal kulupler tek sayfada, ayri sekmelerde yonetilir."],
    ["Kulupler (v2.5)", "Uyelik & Kulup Profili", "Calisanlar ilgi alanlarina gore kulup kurabilir veya mevcut kulube katilabilir. Her kulubun kategori, uye listesi ve kurucu bilgisi vardir."],
    ["Kulup Sohbeti (v2.5)", "Gercek Zamanli Kulup Chat", "Her kulubun kendine ait sohbet akisi vardir; sadece o kulubun uyeleri mesajlasir. Mesaj gonderimi ucretsizdir, herhangi bir coin maliyeti yoktur."],
    ["Hisse Politikasi (v2.5)", "%10 Maksimum Sahiplik Kurali", "Bir kullanici tek bir projenin/hissenin toplam arzinin en fazla %10'una sahip olabilir. Limit asan alim emirleri sistem tarafindan otomatik reddedilir."],
    ["Baslangic Degerlemesi (v2.5)", "Standart 100 SA Acilis Fiyati", "Borsaya listelenen her yeni proje/fikir, kaynagina (sihirbaz, sikayet kutusu, hizli giris) bakilmaksizin 100 SA sabit acilis degerlemesiyle baslar."],
    ["Karar Kurulu Coin Sistemi (v2.5)", "10.000 SA Karsiliginda Dogrudan Tasima", "Proje sahibi, kendi fikrini/projesini veya onemli bir karar onerisini 10.000 SA odeyerek dogrudan Karar Kurulu inceleme listesine tasiyabilir. Bakiye yetersizse islem engellenir; kesinti yalnizca kullanici onayindan sonra gerceklesir."],
], widths=[34 * mm, 38 * mm, (W - 40 * mm) - 72 * mm], boldFirst=True)
story.append(PageBreak())

section("10", "Aylik Altyapi Maliyet Analizi", "5.000 Aktif Kullanici Varsayimiyla Uretim Ortami")
callout(
    "Asagidaki maliyetler <b>5.000 aylik aktif kullanici</b> icin AWS/GCP kurumsal bulut altyapisi "
    "temel alinarak tahmin edilmistir. Maliyet hesaplamalarina %20 risk payi eklenmistir. Kullanici "
    "sayisi 50.000'e ulastiginda aylik toplam ~$15.150 bandina cikmasi ongorulmektedir.",
    color=AMBER_SOFT, border=AMBER)

cost_rows = [
    ["Frontend Hosting", "AWS CloudFront & S3", "Enterprise bandwidth & CDN", "$150"],
    ["Ana Veritabani", "AWS RDS Postgres", "Multi-AZ, 100GB Storage", "$280"],
    ["Realtime State DB", "AWS ECS / SpacetimeDB", "Managed Cluster", "$190"],
    ["Redis Cache/Queue", "AWS ElastiCache Redis", "High Availability Cluster", "$110"],
    ["Vector Database", "AWS OpenSearch", "Managed Search Cluster", "$240"],
    ["CDN & Security", "AWS WAF & Shield", "Enterprise DDoS & WAF", "$200"],
    ["Object Storage", "AWS S3", "Multi-region replica, 100GB", "$60"],
    ["AI - Claude API", "AWS Bedrock (Claude)", "Enterprise API capacity", "$180"],
    ["AI - DeepSeek Gundem", "DeepSeek API", "Gundem/oneri motoru, haftalik yonetici raporu", "$40"],
    ["AI - Embeddings", "AWS Bedrock / OpenAI", "High-volume embeddings", "$60"],
    ["Backend Compute", "AWS ECS Fargate", "Multi-container scale, always-on", "$240"],
    ["Realtime Collab", "AWS API Gateway WS", "Managed connections", "$90"],
    ["Email Bildirim", "AWS SES / SendGrid", "Enterprise transactional sending", "$40"],
    ["Error Tracking", "Sentry Enterprise", "Dedicated workspace", "$80"],
    ["Monitoring & APM", "Datadog Enterprise", "APM + logs + cloud watch", "$150"],
    ["Feature Flags", "AWS AppConfig", "Managed feature flags", "$30"],
    ["Domain & SSL", "AWS Route 53 & ACM", "Hosted zone & wildcard SSL", "$10"],
]
data = [[Paragraph(h, TH) for h in ["Servis", "Provider", "Plan / Limit", "Aylik USD"]]]
for r in cost_rows:
    data.append([Paragraph(r[0], TD), Paragraph(r[1], TD_LINK), Paragraph(r[2], TD), Paragraph(r[3], TD_GREEN)])
total_base = 2110 + 40
risk = round(total_base * 0.2)
grand = total_base + risk
per_user = round(grand / 5000, 2)
data.append([Paragraph("Base Toplam", TD_BOLD), Paragraph("5K kullanici/ay", TD), Paragraph("", TD), Paragraph(f"${total_base:,.1f}", TD_BOLD)])
data.append([Paragraph("Risk Payi (20%)", TD_BOLD), Paragraph("Belirsizlik & Olcek", TD), Paragraph("", TD), Paragraph(f"+${risk:,.1f}", TD_BOLD)])
data.append([Paragraph("GENEL TOPLAM", S("GT", fontSize=10, fontName="Helvetica-Bold", textColor=INK)),
             Paragraph("Risk payi dahil", TD), Paragraph("", TD),
             Paragraph(f"${grand:,.1f}", S("GTV", fontSize=10, fontName="Helvetica-Bold", textColor=GREEN))])
data.append([Paragraph("Kullanici basina", TD), Paragraph("5K kullanici", TD), Paragraph("", TD), Paragraph(f"~${per_user}", TD_GREEN)])
t = Table(data, colWidths=[34 * mm, 36 * mm, (W - 40 * mm) - 34 * mm - 36 * mm - 22 * mm, 22 * mm])
t.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, 0), DARK_ROW),
    ("LINEBELOW", (0, 0), (-1, 0), 1, LINE),
    ("LINEBELOW", (0, 1), (-1, -5), 0.5, HexColor("#f1f5f9")),
    ("BACKGROUND", (0, -3), (-1, -1), GREEN_SOFT),
    ("TOPPADDING", (0, 0), (-1, -1), 6), ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ("LEFTPADDING", (0, 0), (-1, -1), 8), ("VALIGN", (0, 0), (-1, -1), "TOP"),
]))
story.append(t)
story.append(Spacer(1, 12))

scale_cards = [(f"${grand:,.0f}", "5K kullanici/ay", "Mevcut MVP hedefi"),
               ("$4,240", "10K kullanici/ay", "Erken buyume asamasi"),
               ("$6,540", "20K kullanici/ay", "Buyume asamasi"),
               ("$15,150", "50K kullanici/ay", "Olcekli uretim")]
scale_inner = []
for val, lbl, sub in scale_cards:
    scale_inner.append(Table(
        [[Paragraph(f"<b>{val}</b>", S("SV", fontSize=15, fontName="Helvetica-Bold", textColor=BLUE, alignment=TA_CENTER))],
         [Paragraph(lbl, S("SL", fontSize=8.5, textColor=MUTED, alignment=TA_CENTER, fontName="Helvetica"))],
         [Paragraph(sub, S("SS", fontSize=8, textColor=MUTED, alignment=TA_CENTER, fontName="Helvetica"))]],
        colWidths=[38 * mm],
        style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), WHITE), ("BOX", (0, 0), (-1, -1), 0.5, LINE),
                           ("ROUNDEDCORNERS", [6]), ("TOPPADDING", (0, 0), (-1, -1), 8), ("BOTTOMPADDING", (0, 0), (-1, -1), 8)])))
story.append(Table([scale_inner], colWidths=[(W - 40 * mm) / 4] * 4,
    style=TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 2), ("RIGHTPADDING", (0, 0), (-1, -1), 2)])))

story.append(Spacer(1, 10 * mm))
story.append(HRFlowable(width="100%", thickness=1, color=LINE, spaceAfter=6))
footer_row = Table(
    [[Paragraph("<b>SABANCI HOLDING &middot; NEW IDEA EXCHANGE</b> - Teknik Mimari Raporu v2.6.0", FOOTER_TXT),
      Paragraph("Sabanci Holding NIE Platform Muhendislik Ekibi - Haziran 2026 - Gizli",
                S("FR", fontSize=8, textColor=MUTED, fontName="Helvetica", alignment=TA_CENTER))]],
    colWidths=[(W - 40 * mm) / 2] * 2,
)
story.append(footer_row)

doc.build(story)
print("PDF olusturuldu:", OUTPUT)

import shutil
shutil.copyfile(OUTPUT, OUTPUT2)
print("Kopyalandi:", OUTPUT2)
