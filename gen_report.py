from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, HRFlowable, KeepTogether
)
from reportlab.platypus.flowables import HRFlowable
from reportlab.lib.colors import HexColor, white, black
import os

OUTPUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "public", "NIE-Technical-Report.pdf")

# ── Colors ────────────────────────────────────────────────────────────────────
NAVY      = HexColor("#0a1628")
BLUE      = HexColor("#0057cc")
BLUE_MID  = HexColor("#1e6fe8")
BLUE_SOFT = HexColor("#dbeafe")
GREEN     = HexColor("#16a34a")
GREEN_SOFT= HexColor("#dcfce7")
AMBER     = HexColor("#b45309")
AMBER_SOFT= HexColor("#fef3c7")
PURPLE    = HexColor("#7c3aed")
PURP_SOFT = HexColor("#ede9fe")
RED_SOFT  = HexColor("#fee2e2")
INK       = HexColor("#0f172a")
MUTED     = HexColor("#64748b")
LINE      = HexColor("#e2e8f0")
BG        = HexColor("#f8fafc")
WHITE     = white
DARK_ROW  = HexColor("#f1f5f9")

W, H = A4  # 595.27 x 841.89

# ── Doc ───────────────────────────────────────────────────────────────────────
doc = SimpleDocTemplate(
    OUTPUT,
    pagesize=A4,
    leftMargin=20*mm, rightMargin=20*mm,
    topMargin=22*mm, bottomMargin=22*mm,
    title="BBVA Group NIE Teknik Mimari Raporu",
    author="BBVA Group NIE Platform Mühendislik Ekibi",
    subject="BBVA Innovation Exchange (NIE) — Technical Architecture Report v2.5.0"
)

# ── Styles ────────────────────────────────────────────────────────────────────
base = getSampleStyleSheet()

def S(name, parent="Normal", **kw):
    s = ParagraphStyle(name, parent=base[parent], **kw)
    return s

COVER_TITLE = S("CoverTitle", fontSize=32, leading=38, textColor=WHITE,
                fontName="Helvetica-Bold", spaceAfter=8, alignment=TA_LEFT)
COVER_SUB   = S("CoverSub",   fontSize=13, leading=18, textColor=HexColor("#94a3b8"),
                fontName="Helvetica", spaceAfter=0)
COVER_META  = S("CoverMeta",  fontSize=10, textColor=HexColor("#94a3b8"),
                fontName="Helvetica", spaceAfter=4)

SEC_NUM     = S("SecNum",  fontSize=11, fontName="Helvetica-Bold", textColor=WHITE,
                alignment=TA_CENTER)
SEC_TITLE   = S("SecTitle", fontSize=16, fontName="Helvetica-Bold", textColor=INK,
                leading=20, spaceAfter=4)
SEC_DESC    = S("SecDesc", fontSize=10, fontName="Helvetica", textColor=MUTED,
                spaceAfter=14)

BODY        = S("Body",   fontSize=10, leading=15, textColor=INK,
                fontName="Helvetica", spaceAfter=6)
BODY_MUTED  = S("BodyM",  fontSize=9.5, leading=14, textColor=MUTED,
                fontName="Helvetica", spaceAfter=4)
CALLOUT     = S("Callout", fontSize=10, leading=15, textColor=HexColor("#1e3a6e"),
                fontName="Helvetica", leftIndent=10, spaceAfter=6)
BULLET      = S("Bullet",  fontSize=10, leading=15, textColor=INK,
                fontName="Helvetica", leftIndent=14, spaceAfter=3,
                bulletIndent=4)
TH          = S("TH", fontSize=9, fontName="Helvetica-Bold", textColor=MUTED,
                alignment=TA_LEFT)
TD          = S("TD", fontSize=9, fontName="Helvetica", textColor=INK,
                leading=13)
TD_MONO     = S("TDM", fontSize=8.5, fontName="Courier-Bold", textColor=BLUE)
TD_GREEN    = S("TDG", fontSize=9, fontName="Helvetica-Bold", textColor=GREEN)
TD_TOTAL    = S("TDT", fontSize=10, fontName="Helvetica-Bold", textColor=INK)
FOOTER_TXT  = S("Footer", fontSize=8, textColor=MUTED, fontName="Helvetica")

# ── Story ─────────────────────────────────────────────────────────────────────
story = []

# ─────────────────────────────────────────────────────────────────────────────
# COVER PAGE  (drawn as big coloured table = no canvas hack needed)
# ─────────────────────────────────────────────────────────────────────────────
cover_inner = [
    [Paragraph("BBVA GROUP · NEW IDEA EXCHANGE", S("CE", fontSize=10, fontName="Helvetica-Bold",
               textColor=HexColor("#94a3b8"), letterSpacing=2))],
    [Spacer(1, 8*mm)],
    [Paragraph("Teknik Mimari<br/>Raporu", COVER_TITLE)],
    [Spacer(1, 3*mm)],
    [Paragraph("BBVA Group ve istiraklerinin (BBVA, Garanti BBVA, BBVA Mexico, BBVA Technology ve digerleri) "
               "5 ulke portalinda kullandigi platform altyapisi, teknoloji yigini, olceklenebilirlik plani ve<br/>"
               "aylik altyapi maliyet analizi.", COVER_SUB)],
    [Spacer(1, 12*mm)],
    [Table(
        [[Paragraph("v2.5.0",     COVER_META), Paragraph("Haziran 2026", COVER_META),
          Paragraph("BBVA Group",COVER_META), Paragraph("Gizli",       COVER_META)]],
        colWidths=[38*mm,38*mm,38*mm,38*mm],
        style=TableStyle([("VALIGN", (0,0), (-1,-1), "TOP")])
    )],
]
cover_tbl = Table([[c] for c in cover_inner],
    colWidths=[W - 40*mm],
    style=TableStyle([
        ("BACKGROUND",(0,0),(-1,-1), NAVY),
        ("TOPPADDING",(0,0),(-1,-1),6),
        ("BOTTOMPADDING",(0,0),(-1,-1),6),
        ("LEFTPADDING",(0,0),(-1,-1),16*mm),
        ("RIGHTPADDING",(0,0),(-1,-1),10*mm),
        ("ROUNDEDCORNERS",[8]),
    ])
)
# wrap cover in a full-page-width table with navy bg
full_cover = Table(
    [[cover_tbl]],
    colWidths=[W - 40*mm],
    rowHeights=[210*mm],
    style=TableStyle([
        ("BACKGROUND",(0,0),(-1,-1), NAVY),
        ("VALIGN",(0,0),(-1,-1),"MIDDLE"),
        ("LEFTPADDING",(0,0),(-1,-1),0),
        ("RIGHTPADDING",(0,0),(-1,-1),0),
        ("TOPPADDING",(0,0),(-1,-1),0),
        ("BOTTOMPADDING",(0,0),(-1,-1),0),
        ("ROUNDEDCORNERS",[12]),
    ])
)
story.append(full_cover)
story.append(Spacer(1, 8*mm))

# Meta pills row
meta_data = [
    ("99.95%", "Uptime SLA"),
    ("<120ms",  "P95 Latency"),
    ("50K+",    "Kullanici Hedefi"),
    ("SOC 2",   "Sertifikasyon"),
    ("KVKK",    "Uyumluluk"),
]
def metric_cell(val, lbl):
    return [Paragraph(f"<b>{val}</b>",
                      S("MV", fontSize=15, fontName="Helvetica-Bold",
                        textColor=BLUE, alignment=TA_CENTER)),
            Paragraph(lbl,
                      S("ML", fontSize=8, textColor=MUTED,
                        alignment=TA_CENTER, fontName="Helvetica"))]

metric_rows = [[metric_cell(v,l) for v,l in meta_data]]
flat_cells  = [[c for pair in metric_rows[0] for c in [pair]]]  # list of cell-content

metric_inner = []
for val, lbl in meta_data:
    metric_inner.append(
        Table([[Paragraph(f"<b>{val}</b>",
                          S("MV2", fontSize=15, fontName="Helvetica-Bold",
                            textColor=BLUE, alignment=TA_CENTER)),],
               [Paragraph(lbl, S("ML2", fontSize=8, textColor=MUTED,
                                 alignment=TA_CENTER, fontName="Helvetica"))]],
              colWidths=[28*mm],
              style=TableStyle([
                  ("BACKGROUND",(0,0),(-1,-1), WHITE),
                  ("BOX",(0,0),(-1,-1),0.5,LINE),
                  ("ROUNDEDCORNERS",[6]),
                  ("TOPPADDING",(0,0),(-1,-1),6),
                  ("BOTTOMPADDING",(0,0),(-1,-1),6),
              ]))
    )

metric_tbl = Table([metric_inner], colWidths=[31*mm]*5,
    style=TableStyle([("VALIGN",(0,0),(-1,-1),"TOP"),
                      ("LEFTPADDING",(0,0),(-1,-1),1.5*mm),
                      ("RIGHTPADDING",(0,0),(-1,-1),1.5*mm)]))
story.append(metric_tbl)
story.append(PageBreak())

# ─────────────────────────────────────────────────────────────────────────────
# Helper: section header
# ─────────────────────────────────────────────────────────────────────────────
def section(num, title, desc=""):
    num_box = Table([[Paragraph(str(num), SEC_NUM)]],
        colWidths=[7*mm], rowHeights=[7*mm],
        style=TableStyle([
            ("BACKGROUND",(0,0),(-1,-1), BLUE),
            ("ROUNDEDCORNERS",[4]),
            ("VALIGN",(0,0),(-1,-1),"MIDDLE"),
            ("TOPPADDING",(0,0),(-1,-1),0),
            ("BOTTOMPADDING",(0,0),(-1,-1),0),
        ])
    )
    title_cell = [Paragraph(title, SEC_TITLE)]
    if desc:
        title_cell.append(Paragraph(desc, SEC_DESC))
    row = Table([[num_box, title_cell]],
        colWidths=[10*mm, W - 50*mm],
        style=TableStyle([
            ("VALIGN",(0,0),(-1,-1),"TOP"),
            ("LEFTPADDING",(0,1),(-1,-1), 8),
            ("TOPPADDING",(0,0),(-1,-1),0),
            ("BOTTOMPADDING",(0,0),(-1,-1),6),
        ])
    )
    items = [row, HRFlowable(width="100%", thickness=1.5, color=LINE, spaceAfter=10)]
    return KeepTogether(items)

# Helper: callout box
def callout(text, bg=BLUE_SOFT, border=BLUE):
    return Table(
        [[Paragraph(text, CALLOUT)]],
        colWidths=[W - 40*mm],
        style=TableStyle([
            ("BACKGROUND",(0,0),(-1,-1), bg),
            ("LINEAFTER",(0,0),(-1,-1), 3, border),   # left border trick via right of prev col
            ("LINEBEFORE",(0,0),(-1,-1), 3, border),
            ("ROUNDEDCORNERS",[4]),
            ("TOPPADDING",(0,0),(-1,-1),8),
            ("BOTTOMPADDING",(0,0),(-1,-1),8),
            ("LEFTPADDING",(0,0),(-1,-1),12),
            ("RIGHTPADDING",(0,0),(-1,-1),12),
        ])
    )

# Helper: standard data table
def data_table(headers, rows, col_widths, alt=True):
    th_row = [Paragraph(h, TH) for h in headers]
    data = [th_row]
    for r in rows:
        data.append([Paragraph(str(c), TD) for c in r])
    ts = [
        ("BACKGROUND",(0,0),(-1,0), HexColor("#f1f5f9")),
        ("FONTNAME",(0,0),(-1,0),"Helvetica-Bold"),
        ("FONTSIZE",(0,0),(-1,0),8.5),
        ("TEXTCOLOR",(0,0),(-1,0), MUTED),
        ("GRID",(0,0),(-1,-1),0.35, LINE),
        ("ROWBACKGROUNDS",(0,1),(-1,-1),[WHITE, HexColor("#f8fafc")] if alt else [WHITE]),
        ("VALIGN",(0,0),(-1,-1),"TOP"),
        ("TOPPADDING",(0,0),(-1,-1),5),
        ("BOTTOMPADDING",(0,0),(-1,-1),5),
        ("LEFTPADDING",(0,0),(-1,-1),7),
        ("RIGHTPADDING",(0,0),(-1,-1),7),
        ("ROUNDEDCORNERS",[4]),
    ]
    return Table(data, colWidths=col_widths, style=TableStyle(ts), repeatRows=1)

# ─────────────────────────────────────────────────────────────────────────────
# 1. YÖNETİCİ ÖZETİ
# ─────────────────────────────────────────────────────────────────────────────
story.append(section(1, "Yönetici Özeti",
    "Platformun teknik vizyonu ve temel metrikler"))

story.append(callout(
    "<b>BBVA Innovation Exchange (NIE)</b>, BBVA Group ve istiraklerinin "
    "(BBVA, Garanti BBVA, BBVA Mexico, BBVA Colombia, BBVA Peru, BBVA Technology, BBVA Seguros ve digerleri) "
    "Ispanya, Meksika, Turkiye, Kolombiya ve Peru portallarinda calisanlarin fikir "
    "uretmesini, ekip ve kulup kurmasini, kararlarini Karar Kurulu'na tasimasini ve "
    "inovasyon projelerini hayata gecirmesini saglayan cok dilli kurumsal inovasyon "
    "platformudur. Sistem; fikir borsasi, ekip ve kulup yonetimi (kendi sohbet alanlariyla), "
    "gercek zamanli mesajlasma, AI destekli degerlendirme ve analitik modullerinden olusur.<br/><br/>"
    "Bu rapor, platformun uretim ortamina alinmasi icin ongorulen <b>enterprise-grade "
    "teknoloji yiginini</b>, mimari kararlari, guvenlik gereksinimlerini ve aylik "
    "operasyon maliyetlerini kapsar."
))
story.append(Spacer(1, 4*mm))

# ─────────────────────────────────────────────────────────────────────────────
# 2. FRONTEND
# ─────────────────────────────────────────────────────────────────────────────
story.append(section(2, "Frontend Teknoloji Yigini",
    "UI framework, state yonetimi ve performans katmani"))

fe_rows = [
    ("Next.js",           "15.3.2",   "App Router, Server Components, Streaming SSR, ISR, edge-optimized rendering"),
    ("React",             "19.1.0",   "Concurrent rendering, Server Actions, Suspense, use() hook"),
    ("TypeScript",        "5.5",      "Strict mode, Zod runtime validation, end-to-end tip guvenligi (tRPC)"),
    ("Tailwind CSS",      "4.0",      "Lightning CSS compiler, design token sistemi, dark mode, responsive grid"),
    ("Framer Motion",     "11.x",     "Layout animations, spring physics, GPU-accelerated mikro-animasyonlar"),
    ("shadcn/ui + Radix", "headless", "WCAG 2.1 AA uyumlu erisilebilir bilesen primitifleri"),
    ("Zustand + Jotai",   "v4 / v2",  "Global state (Zustand), atomic state (Jotai), devtools, persist middleware"),
    ("TanStack Query",    "v5",       "Stale-while-revalidate, optimistic updates, infinite scroll, background sync"),
    ("Recharts + D3",     "v2 / v7",  "Borsa grafikleri, sinerji radar, analitik panelleri — SVG tabanli"),
]
story.append(data_table(
    ["Teknoloji", "Versiyon", "Aciklama"],
    fe_rows,
    [35*mm, 22*mm, W - 40*mm - 57*mm]
))
story.append(Spacer(1, 5*mm))

# ─────────────────────────────────────────────────────────────────────────────
# 3. BACKEND
# ─────────────────────────────────────────────────────────────────────────────
story.append(section(3, "Backend & API Katmani",
    "Sunucu mimarisi, API tasarimi ve job queue sistemi"))

story.append(callout(
    "<b>Mikro-servis hazirlik:</b> Monolith olarak baslayan backend, bounded context "
    "prensibiyle modullere ayrilmistir: Fikir Servisi, Borsa Servisi, Ekip Servisi, "
    "Mesajlasma Servisi, AI Servisi. Olcege gore ayri konteyner olarak deploy edilebilir.",
    bg=GREEN_SOFT, border=GREEN
))
story.append(Spacer(1, 4*mm))

be_rows = [
    ("Bun Runtime",    "1.1.x",    "Node.js'e kiyasla 3x daha hizli cold start. Native TypeScript, built-in bundler ve test runner."),
    ("Hono.js",        "4.x",      "Edge-native, ultra lightweight REST API. Middleware zinciri, zod validation, JWT auth dahili."),
    ("Apollo Server",  "4.x",      "Schema-first GraphQL, DataLoader batching, persisted queries, subscription (realtime)."),
    ("tRPC",           "v11",      "End-to-end type safety. Istemci-sunucu sozlesmesi, Next.js ile tam entegrasyon."),
    ("BullMQ",         "v5 + Redis","AI analiz, e-posta bildirimleri, borsa fiyat guncellemeleri icin asenkron is kuyrugu."),
    ("Drizzle ORM",    "v0.30+",   "SQL-first, sifir overhead ORM. TypeScript sema tanimlari, otomatik migration."),
]
story.append(data_table(
    ["Teknoloji", "Versiyon", "Aciklama"],
    be_rows,
    [32*mm, 24*mm, W - 40*mm - 56*mm]
))
story.append(Spacer(1, 5*mm))
story.append(PageBreak())

# ─────────────────────────────────────────────────────────────────────────────
# 4. VERİTABANI
# ─────────────────────────────────────────────────────────────────────────────
story.append(section(4, "Veritabani & Depolama",
    "Cok katmanli veri mimarisi"))

db_rows = [
    ("SpacetimeDB",           "Realtime DB",    "Borsa fiyat tick'leri, canli ekip state'i, anlik mesajlar. Sub-millisecond latency. Uygulama state'ini DB icinde barindirir."),
    ("Supabase (PostgreSQL 16)","Primary DB",   "Ana iliskisel veri: kullanicilar, fikirler, ekipler, yorumlar, denetim kaydi. Row-Level Security, 500GB+."),
    ("Upstash Redis",          "Cache / Queue", "Session cache, rate limiting, BullMQ backing store, SSE broadcast. Global edge, <1ms."),
    ("Pinecone",               "Vector DB",     "Fikir semantik arama ve AI onerisi icin embedding vektorleri. 100M+ vektor kapasitesi."),
    ("Cloudflare R2",          "Object Storage","Kullanici dosyalari, ekler, raporlar, sirket logolari. S3 uyumlu, ucretsiz egress. 10TB+."),
    ("Turso (libSQL)",         "Edge DB",       "Edge-close per-tenant SQLite. Dusuk gecikme gerektiren okuma agirlikli sorgular. 500+ lokasyon."),
]
story.append(data_table(
    ["Teknoloji", "Katman", "Kullanim Amaci"],
    db_rows,
    [40*mm, 26*mm, W - 40*mm - 66*mm]
))
story.append(Spacer(1, 4*mm))
story.append(callout(
    "<b>SpacetimeDB Neden?</b> Geleneksel WebSocket + Redis Pub/Sub mimarisinin otesine "
    "gece SpacetimeDB, uygulama state'ini veritabani icinde barindirir. Borsa islemlerinde "
    "sub-millisecond latency saglar ve istemci-sunucu senkronizasyonunu otomatiklestirir.",
    bg=PURP_SOFT, border=PURPLE
))
story.append(Spacer(1, 5*mm))

# ─────────────────────────────────────────────────────────────────────────────
# 5. YAPAY ZEKA
# ─────────────────────────────────────────────────────────────────────────────
story.append(section(5, "Yapay Zeka & Makine Ogrenimi",
    "AI modulleri, RAG pipeline ve embedding sistemi"))

ai_rows = [
    ("Anthropic Claude 4 Sonnet", "claude-sonnet-4-5", "Fikir degerlendirmesi, AI raporu, sohbet asistani. 200K token context."),
    ("OpenAI text-embedding-3",   "3072 dim",          "Fikir benzerlik analizi, semantik arama ve oneri motoru icin vektor uretimi."),
    ("LangChain.js",              "v0.3.x",            "Retrieval-Augmented Generation: platform dokumantasyonu ve gecmis fikirlerden bagiam cekme."),
    ("Vercel AI SDK",             "v4.x",              "Streaming responses, tool use, multi-step AI flows. Model provider abstraction."),
]
story.append(data_table(
    ["Teknoloji", "Versiyon", "Aciklama"],
    ai_rows,
    [45*mm, 22*mm, W - 40*mm - 67*mm]
))
story.append(Spacer(1, 4*mm))

ai_features = [
    "Fikir Otomatik Skorlama (0-100)",
    "AI Destekli Proje Raporu",
    "Sinerji Hesaplama (Ekip Uyumu)",
    "Semantik Fikir Arama",
    "Kisisellestirilmis Oneri Motoru",
    "Otomatik Kategori Siniflandirma",
    "Dogal Dil Sohbet Asistani",
    "Borsa Trend Tahminleme",
]
# 2-column feature grid
feat_pairs = [(ai_features[i], ai_features[i+1] if i+1 < len(ai_features) else "")
              for i in range(0, len(ai_features), 2)]
feat_rows = [[Paragraph(f"✓  {a}", BODY), Paragraph(f"✓  {b}", BODY) if b else Paragraph("", BODY)]
             for a,b in feat_pairs]
feat_tbl = Table(feat_rows, colWidths=[(W-40*mm)/2]*2,
    style=TableStyle([
        ("BACKGROUND",(0,0),(-1,-1), BG),
        ("BOX",(0,0),(-1,-1),0.5, LINE),
        ("GRID",(0,0),(-1,-1),0.3, LINE),
        ("TOPPADDING",(0,0),(-1,-1),5),
        ("BOTTOMPADDING",(0,0),(-1,-1),5),
        ("LEFTPADDING",(0,0),(-1,-1),10),
        ("ROUNDEDCORNERS",[4]),
    ]))
story.append(feat_tbl)
story.append(Spacer(1, 5*mm))
story.append(PageBreak())

# ─────────────────────────────────────────────────────────────────────────────
# 6. GÜVENLİK
# ─────────────────────────────────────────────────────────────────────────────
story.append(section(6, "Guvenlik & Uyumluluk",
    "Kimlik dogrulama, yetkilendirme ve veri koruma"))

sec_rows = [
    ("Kimlik Dogrulama", "Auth.js v5 + SAML 2.0", "Kurumsal SSO (Active Directory / SAML 2.0), MFA zorunlulugu, session rotation"),
    ("Yetkilendirme",    "RBAC + RLS",             "Rol tabanli erisim; Supabase Row-Level Security ile veri izolasyonu"),
    ("API Guvenligi",    "JWT + mTLS",             "Short-lived JWT (15 dk), servisler arasi mTLS, API key rotation"),
    ("Sifreleme",        "AES-256 / TLS 1.3",      "Dinlenme halinde ve transit sirasinda tam sifreleme"),
    ("Rate Limiting",    "CF Workers + Redis",      "IP ve kullanici bazli; sliding window algoritmasi"),
    ("Uyumluluk",        "KVKK / GDPR",            "Veri silme talepleri, consent yonetimi, denetim logu"),
    ("Sertifikasyon",    "SOC 2 Type II",           "Yillik bagimsiz denetim (hedef: Q4 2026)"),
    ("Secret Yonetimi",  "Doppler / Vault",         "Environment variable merkezi yonetimi, otomatik rotation"),
]
story.append(data_table(
    ["Katman", "Teknoloji", "Aciklama"],
    sec_rows,
    [36*mm, 36*mm, W - 40*mm - 72*mm]
))
story.append(Spacer(1, 5*mm))

# ─────────────────────────────────────────────────────────────────────────────
# 7. DEVOPS
# ─────────────────────────────────────────────────────────────────────────────
story.append(section(7, "DevOps & CI/CD Pipeline",
    "Gelistirme, test ve deployment akisi"))

devops = [
    ("GitHub Actions",       "PR uzerine otomatik lint, test, build, Vercel preview deploy. Main'e merge = production."),
    ("Vitest + Playwright",  "Unit/integration: Vitest. E2E: Playwright (multi-browser, mobil emulasyon). Coverage %80+."),
    ("Datadog + Sentry",     "APM, distributed tracing, error tracking, uptime monitoring, alerting (PagerDuty)."),
    ("Docker + Kubernetes",  "Backend servisleri icin Dockerfile. Prod ortaminda K8s (EKS) ile horizontal auto-scaling."),
    ("GrowthBook",           "A/B testing, gradual rollout, dark launches, kullanici segmentasyon — OSS self-hosted."),
    ("Turborepo",            "Monorepo yonetimi, build cache optimizasyonu, parallel task execution."),
]
story.append(data_table(
    ["Arac", "Aciklama"],
    devops,
    [42*mm, W - 40*mm - 42*mm]
))
story.append(Spacer(1, 5*mm))

# ─────────────────────────────────────────────────────────────────────────────
# 8. PERFORMANS
# ─────────────────────────────────────────────────────────────────────────────
story.append(section(8, "Performans & Olceklenebilirlik",
    "Hedef metrikler"))

perf = [
    ("Core Web Vitals LCP",        "< 1.2s"),
    ("Core Web Vitals CLS",        "< 0.05"),
    ("API P50 Latency",            "< 45ms"),
    ("API P95 Latency",            "< 120ms"),
    ("WebSocket Message Delay",    "< 50ms"),
    ("DB Query P99",               "< 200ms"),
    ("SpacetimeDB Tick Rate",      "60 Hz"),
    ("Esz. Kullanici (baslangic)", "5,000"),
    ("Esz. Kullanici (hedef)",     "50,000"),
    ("Uptime SLA",                 "99.95%"),
]
perf_data = [["Metrik", "Hedef"]]
for m, t in perf:
    perf_data.append([Paragraph(m, TD), Paragraph(f"<b>{t}</b>",
        S("PV", fontSize=9, fontName="Helvetica-Bold", textColor=GREEN))])
perf_tbl = Table(perf_data, colWidths=[90*mm, 40*mm],
    style=TableStyle([
        ("BACKGROUND",(0,0),(-1,0), DARK_ROW),
        ("FONTNAME",(0,0),(-1,0),"Helvetica-Bold"),
        ("FONTSIZE",(0,0),(-1,0),8.5),
        ("TEXTCOLOR",(0,0),(-1,0), MUTED),
        ("GRID",(0,0),(-1,-1),0.35, LINE),
        ("ROWBACKGROUNDS",(0,1),(-1,-1),[WHITE, HexColor("#f8fafc")]),
        ("VALIGN",(0,0),(-1,-1),"MIDDLE"),
        ("TOPPADDING",(0,0),(-1,-1),5),
        ("BOTTOMPADDING",(0,0),(-1,-1),5),
        ("LEFTPADDING",(0,0),(-1,-1),7),
        ("ROUNDEDCORNERS",[4]),
    ]), repeatRows=1)
story.append(perf_tbl)
story.append(Spacer(1, 5*mm))
story.append(PageBreak())

# ─────────────────────────────────────────────────────────────────────────────
# 9. GİRİŞİMCİLİK EKOSİSTEMİ & GENİŞLETİLMİŞ ÖZELLİKLER
# ─────────────────────────────────────────────────────────────────────────────
story.append(section(9, "Girisimcilik Ekosistemi & Genisletilmis Ozellikler",
    "Sosyal tahmin, mentorluk, hisse paylasim ve AI gundem modulleri"))

eco_data = [
    ("Sosyal Tahmin", "Basari Tahmin & AI Siralama", "Borsa projelerinin basari olasiliklarini tahmin eden topluluk analiz araci. AI ve topluluk tahminlerinin harmanlanmasiyla dinamik basari siralamasi."),
    ("Mentorluk", "Matchmaking & Mentor Dizini", "Holding ici uzmanlarin yetkinlik ve tecrubelerine gore listelendigi mentor dizini ve akilli eslestirme modulu."),
    ("Ekip & Hisse", "Paylasimli Ortaklik & %10 Odul Paylasimi", "Projelerin acik hisse orani (openEquity) takibi. Proje hayata gectiginde yatirimci ve girisimci %10 paylasim kurallari."),
    ("Otomasyon", "AI Gundem Analiz Motoru", "NLP tabanli AI analisti ile trendlerin, borsa hacminin ve tamamlanan projelerin otomatik gundem postu olarak paylasilmasi."),
    ("Ekipler (v2.5)", "Bagimsiz Ust Seviye Sayfa", "Ekipler, Studyo hub'indan ayrilarak kendi navigasyon sekmesine tasindi. Proje ekipleri ve sosyal kulupler tek sayfada, ayri sekmelerde yonetilir."),
    ("Kulupler (v2.5)", "Uyelik & Kulup Profili", "Calisanlar ilgi alanlarina gore kulup kurabilir veya mevcut kulube katilabilir. Her kulubun kategori, uye listesi ve kurucu bilgisi vardir."),
    ("Kulup Sohbeti (v2.5)", "Gercek Zamanli Kulup Chat", "Her kulubun kendine ait sohbet akisi vardir; sadece o kulubun uyeleri mesajlasir. Mesaj gonderimi ucretsizdir, herhangi bir coin maliyeti yoktur."),
    ("Hisse Politikasi (v2.5)", "%10 Maksimum Sahiplik Kurali", "Bir kullanici tek bir projenin/hissenin toplam arzinin en fazla %10'una sahip olabilir. Limit asan alim emirleri sistem tarafindan otomatik reddedilir."),
    ("Baslangic Degerlemesi (v2.5)", "Standart 100 SA Acilis Fiyati", "Borsaya listelenen her yeni proje/fikir, kaynagina (sihirbaz, sikayet kutusu, hizli giris) bakilmaksizin 100 SA sabit acilis degerlemesiyle baslar."),
    ("Karar Kurulu Coin Sistemi (v2.5)", "5.000 SA Karsiliginda Dogrudan Tasima", "Proje sahibi, kendi fikrini/projesini veya onemli bir karar onerisini 5.000 SA odeyerek dogrudan Karar Kurulu inceleme listesine tasiyabilir. Bakiye yetersizse islem engellenir; kesinti yalnizca kullanici onayindan sonra gerceklesir.")
]

eco_rows = [["Modul", "Teknoloji / Yapi", "Detay / Islev"]]
for m, t, d in eco_data:
    eco_rows.append([Paragraph(m, TD), Paragraph(t, TD_MONO), Paragraph(d, S("ED", fontSize=8.5, textColor=MUTED, fontName="Helvetica"))])

eco_tbl = Table(eco_rows, colWidths=[35*mm, 45*mm, 60*mm],
    style=TableStyle([
        ("BACKGROUND",(0,0),(-1,0), DARK_ROW),
        ("FONTNAME",(0,0),(-1,0),"Helvetica-Bold"),
        ("FONTSIZE",(0,0),(-1,0),8.5),
        ("TEXTCOLOR",(0,0),(-1,0), MUTED),
        ("GRID",(0,0),(-1,-1),0.35, LINE),
        ("ROWBACKGROUNDS",(0,1),(-1,-1),[WHITE, HexColor("#f8fafc")]),
        ("VALIGN",(0,0),(-1,-1),"TOP"),
        ("TOPPADDING",(0,0),(-1,-1),5),
        ("BOTTOMPADDING",(0,0),(-1,-1),5),
        ("LEFTPADDING",(0,0),(-1,-1),7),
        ("RIGHTPADDING",(0,0),(-1,-1),7),
        ("ROUNDEDCORNERS",[4]),
    ]), repeatRows=1)

story.append(eco_tbl)
story.append(Spacer(1, 5*mm))
story.append(PageBreak())

# ─────────────────────────────────────────────────────────────────────────────
# 10. MALİYET ANALİZİ
# ─────────────────────────────────────────────────────────────────────────────
story.append(section(10, "Aylik Altyapi Maliyet Analizi",
    "5.000 Aktif Kullanici Varsayimiyla Uretim Ortami"))

story.append(callout(
    "Asagidaki maliyetler <b>5.000 aylik aktif kullanici</b> icin tahmin edilmistir. "
    "Kullanici sayisi 50.000'e ulastiginda aylik toplam ~$3.800 bandina cikmasi ongörulmektedir.",
    bg=AMBER_SOFT, border=AMBER
))
story.append(Spacer(1, 4*mm))

cost_rows = [
    ("Frontend Hosting",  "Vercel Pro",           "100GB bandwidth, 1000 deploy",    "$20"),
    ("Ana Veritabani",    "Supabase Pro",          "8GB DB, 250GB bandwidth",          "$25"),
    ("Realtime State DB", "SpacetimeDB Cloud",     "10M requests/mo, 5GB storage",     "$49"),
    ("Redis Cache/Queue", "Upstash",               "10M commands/mo, global edge",     "$20"),
    ("Vector Database",   "Pinecone Starter+",     "5M vectors, 1 index",              "$70"),
    ("CDN & Security",    "Cloudflare Pro",        "DDoS, WAF, Workers 10M req",       "$20"),
    ("Object Storage",    "Cloudflare R2",         "10GB, 10M Class A ops",            "$15"),
    ("AI — Claude API",   "Anthropic",             "~500K tokens/mo",                  "$40"),
    ("AI — Embeddings",   "OpenAI",                "~5M tokens/mo",                    "$10"),
    ("Backend Compute",   "Fly.io / Railway",      "2 vCPU, 2GB RAM, always-on",       "$30"),
    ("Realtime Collab",   "Partykit",              "1M connections, 10GB transfer",    "$25"),
    ("Email Bildirim",    "Resend",                "50K emails/mo",                    "$20"),
    ("Error Tracking",    "Sentry",                "100K errors, 5 users",             "$26"),
    ("Monitoring & APM",  "Datadog",               "5 hosts, APM + logs",              "$30"),
    ("Feature Flags",     "GrowthBook",            "OSS self-hosted",                  "$0"),
    ("Domain & SSL",      "Cloudflare Registrar",  "nieplatform.com + wildcard SSL",   "$1.5"),
]

cost_data = [["Servis", "Provider", "Plan / Limit", "Aylik USD"]]
for s, p, pl, c in cost_rows:
    cost_data.append([
        Paragraph(s, TD),
        Paragraph(p, TD_MONO),
        Paragraph(pl, S("PL", fontSize=8.5, textColor=MUTED, fontName="Helvetica")),
        Paragraph(f"<b>{c}</b>", S("CV", fontSize=9, fontName="Helvetica-Bold",
                                    textColor=GREEN, alignment=TA_RIGHT))
    ])
# Total row
cost_data.append([
    Paragraph("<b>TOPLAM</b>", TD_TOTAL),
    Paragraph("5K kullanici/ay", S("TT2", fontSize=9, textColor=MUTED, fontName="Helvetica")),
    Paragraph("", TD),
    Paragraph("<b>$401.5</b>", S("TV", fontSize=12, fontName="Helvetica-Bold",
                                  textColor=GREEN, alignment=TA_RIGHT))
])
cost_data.append([
    Paragraph("Kullanici basina", S("KT", fontSize=9, textColor=MUTED, fontName="Helvetica")),
    Paragraph("5K kullanici", S("KT2", fontSize=9, textColor=MUTED, fontName="Helvetica")),
    Paragraph("", TD),
    Paragraph("~$0.08", S("KV", fontSize=9, fontName="Helvetica-Bold",
                            textColor=MUTED, alignment=TA_RIGHT))
])

cw = [W - 40*mm - 108*mm, 36*mm, 50*mm, 22*mm]
cost_tbl = Table(cost_data, colWidths=cw,
    style=TableStyle([
        ("BACKGROUND",(0,0),(-1,0), DARK_ROW),
        ("FONTNAME",(0,0),(-1,0),"Helvetica-Bold"),
        ("FONTSIZE",(0,0),(-1,0),8.5),
        ("TEXTCOLOR",(0,0),(-1,0), MUTED),
        ("GRID",(0,0),(-1,-1),0.35, LINE),
        ("ROWBACKGROUNDS",(0,1),(-1,-3),[WHITE, HexColor("#f8fafc")]),
        ("BACKGROUND",(0,-2),(-1,-1), GREEN_SOFT),
        ("LINEABOVE",(0,-2),(-1,-2),1.5, GREEN),
        ("VALIGN",(0,0),(-1,-1),"MIDDLE"),
        ("TOPPADDING",(0,0),(-1,-1),5),
        ("BOTTOMPADDING",(0,0),(-1,-1),5),
        ("LEFTPADDING",(0,0),(-1,-1),7),
        ("RIGHTPADDING",(0,0),(-1,-1),7),
        ("ROUNDEDCORNERS",[4]),
    ]), repeatRows=1)
story.append(cost_tbl)
story.append(Spacer(1, 6*mm))

# Scale estimates
scale_data = [
    ("5K kullanici/ay",  "$401",   "Mevcut MVP hedefi"),
    ("10K kullanici/ay", "$680",   "Erken buyume asamasi"),
    ("20K kullanici/ay", "$1,200", "Buyume asamasi"),
    ("50K kullanici/ay", "$3,800", "Olcekli uretim"),
]
scale_inner = []
for u, c, l in scale_data:
    scale_inner.append(
        Table([[Paragraph(f"<b>{c}</b>", S("SC", fontSize=14, fontName="Helvetica-Bold",
                                            textColor=BLUE, alignment=TA_CENTER))],
               [Paragraph(u, S("SU", fontSize=8, textColor=MUTED,
                               alignment=TA_CENTER, fontName="Helvetica"))],
               [Paragraph(l, S("SL", fontSize=8, textColor=MUTED,
                               alignment=TA_CENTER, fontName="Helvetica"))]],
              colWidths=[35*mm],
              style=TableStyle([
                  ("BACKGROUND",(0,0),(-1,-1), WHITE),
                  ("BOX",(0,0),(-1,-1),0.5, LINE),
                  ("TOPPADDING",(0,0),(-1,-1),7),
                  ("BOTTOMPADDING",(0,0),(-1,-1),7),
                  ("ROUNDEDCORNERS",[6]),
              ]))
    )
story.append(Table([scale_inner], colWidths=[38*mm]*4,
    style=TableStyle([("VALIGN",(0,0),(-1,-1),"TOP"),
                      ("LEFTPADDING",(0,0),(-1,-1),1.5*mm),
                      ("RIGHTPADDING",(0,0),(-1,-1),1.5*mm)])))

story.append(Spacer(1, 12*mm))

# ── FOOTER LINE ───────────────────────────────────────────────────────────────
story.append(HRFlowable(width="100%", thickness=1, color=LINE, spaceAfter=6))
footer_row = Table(
    [[Paragraph("<b>BBVA GROUP · NEW IDEA EXCHANGE</b> · Teknik Mimari Raporu v2.5.0", FOOTER_TXT),
      Paragraph("BBVA Group NIE Platform Muhendislik Ekibi · Haziran 2026 · Gizli",
                S("FR", fontSize=8, textColor=MUTED, fontName="Helvetica",
                  alignment=TA_RIGHT))]],
    colWidths=[(W-40*mm)/2]*2,
    style=TableStyle([("VALIGN",(0,0),(-1,-1),"MIDDLE")])
)
story.append(footer_row)

# ─────────────────────────────────────────────────────────────────────────────
# BUILD
# ─────────────────────────────────────────────────────────────────────────────
os.makedirs(os.path.dirname(OUTPUT), exist_ok=True)
doc.build(story)
print(f"PDF olusturuldu: {OUTPUT}")
