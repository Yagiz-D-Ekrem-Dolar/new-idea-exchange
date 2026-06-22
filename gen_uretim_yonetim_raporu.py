from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak,
    HRFlowable, ListFlowable, ListItem
)
from reportlab.lib.colors import HexColor, white
import os

# ─────────────────────────────────────────────────────────────────────────────
# BRAND CONFIG -- only this block changes between branches
# ─────────────────────────────────────────────────────────────────────────────
BRAND = "Heidelberg Materials"
BRAND_FILE = "Heidelberg-Materials"
NAVY = HexColor("#004E2B")
GREEN_MID = HexColor("#00873E")

EXEC_SUMMARY = ("Cimento, agrega, hazir beton, lojistik, enerji verimliligi ve karbon azaltimi "
                 "ekiplerinde saha fikirlerini gorunur hale getiren, uretim odakli inovasyon "
                 "yonetim platformu.")
USER_SCALE = "38.000 kullanici / 10 ulke portali"
ADMIN_LOAD_OLD = "24-36 saat/hafta normal hafta kapasitesi"
ADMIN_MODEL = "9-12 sorumlu, ulke ve is birimi temsilcilerine dagitilmis sorumluluk"
LANG_SCOPE = "Almanca, Ingilizce, Turkce, Fransizca"

SCOPE_INTRO = (f"Bu calisma, {BRAND} icin kurgulanan ID Exchange platformunun ilk uretim "
               "surumunu planlamak amaciyla hazirlanmistir. Saatler canliya alinmis nihai "
               "kurumsal sistem degil, gosterilebilir ve yonetilebilir ilk urun surumu icin "
               "hesaplanmistir.")
SCOPE_FLOWS = [
    "Almanya merkezli holding yapisi, bolgesel uretim tesisleri ve ulke operasyonlari icin ayrilmis portal mantigi.",
    "Saha calisani onerileri, uretim hatti iyilestirmeleri, karbon azaltimi, lojistik optimizasyonu ve bakim fikirleri.",
    "Tesis, ulke ve global merkez kiriliminda gorunurluk ve raporlama.",
    "Is guvenligi ve operasyonel risk bildirimlerinin admin tarafindan hizlica eskale edilmesi.",
]

ADMIN_TASKS = [
    ("Saha ve uretim uygunlugu", "6-9 saat", "Is guvenligi, tesis etkisi ve uygulanabilirlik acisindan gelen fikirlerin ilk kontrolu"),
    ("Adil kullanim ve borsa denetimi", "5-7 saat", "Ayni ekiplerin birbirini yapay sekilde yukari tasidigi hareketlerin izlenmesi"),
    ("Sikayet ve risk bildirimi", "5-7 saat", "Tesis kaynakli risk, is guvenligi bildirimi veya uygunsuz iceriklerin yonlendirilmesi"),
    ("Ulke/tesis koordinasyonu", "4-6 saat", "Fikirlerin dogru ulke, tesis ve operasyon sorumlusuna aktarilmasi"),
    ("Haftalik yonetim ozeti", "4-7 saat", "Verimlilik, karbon azaltimi ve guvenlik basliklarinda kisa raporlama"),
]

COUNTRY_TABLE = [
    ("Almanya", "7.500", "Merkez, Ar-Ge, uretim tesisleri", "Almanca/Ingilizce"),
    ("ABD", "5.000", "Uretim ve lojistik operasyonlari", "Ingilizce"),
    ("Birlesik Krallik", "4.200", "Cimento ve agrega ekipleri", "Ingilizce"),
    ("Fransa", "3.800", "Beton ve saha operasyonlari", "Fransizca"),
    ("Italya", "3.400", "Uretim tesisleri", "Italyanca/Ingilizce"),
    ("Ispanya", "3.200", "Lojistik ve hazir beton", "Ispanyolca"),
    ("Polonya", "3.200", "Tesis ve bakim ekipleri", "Lehce/Ingilizce"),
    ("Turkiye", "3.000", "Cimento ve hazir beton ekipleri (Akcansa)", "Turkce"),
    ("Kanada", "2.700", "Agrega ve lojistik", "Ingilizce/Fransizca"),
    ("Isvec", "2.000", "Surdurulebilir uretim ekipleri", "Ingilizce"),
]
ADMIN_BREAKDOWN_NOTE = ("9-12 sorumlu ifadesi tam zamanli admin anlamina gelmez. Bu modelde "
                         "holding merkezi, ulke temsilcileri ve bazi is birimi sahipleri "
                         "platformu haftalik kontrollu saatlerle yonetir. Normal kullanimda "
                         "24-36 saat/hafta araligi yeterli gorulur; yalnizca buyuk kampanya, "
                         "odul donemi veya dis basvuru cagrisi doneminde gecici ek destek "
                         "gerekebilir.")
CONTROL_POINTS = [
    "Is guvenligi ile ilgili bildirimler standart fikir akisindan daha hizli eskalasyon kuralina baglanmalidir.",
    "Tesis verisi, uretim kapasitesi ve enerji tuketimi gibi hassas bilgiler icin erisim seviyesi ayristirilmalidir.",
    "Karbon azaltimi veya enerji verimliligi iddialari gercek saha verisiyle dogrulanmadan basari hikayesi olarak yayinlanmamalidir.",
    "DeepSeek tabanli AI gundem onerileri otomatik yayinlanmaz; yonetici onayindan gecmeden Gundem sayfasinda kesinlesmez.",
]
CLOSING = (f"{BRAND} ID Exchange, 324 saatlik uretim eforuyla pilotlanabilir ve kisa surede "
           "deger gosterebilir bir platformdur. Ilk canli pilotun 2-3 ulke ve 3-5 is birimiyle "
           "baslatilmasi, 4 hafta sonunda kullanici aktivitesi, admin yuku ve karar hizi "
           "olculerek ikinci fazin belirlenmesi onerilir.")

# ─────────────────────────────────────────────────────────────────────────────
# SHARED TEMPLATE -- identical structure/logic for every brand
# ─────────────────────────────────────────────────────────────────────────────
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
INK = HexColor("#0f172a")
MUTED = HexColor("#64748b")
LINE = HexColor("#e2e8f0")
DARK_ROW = HexColor("#f1f5f9")
WHITE = white
W, H = A4

DEEPSEEK_HOURS = 24
TOTAL_HOURS = 300 + DEEPSEEK_HOURS  # 324

EFFORT_ROWS = [
    ("Urun kapsami ve planlama", 20, "Rol, ulke, sirket, fikir akisi ve onay kapsaminin netlestirilmesi"),
    ("UX/UI ve bilgi mimarisi", 42, "Giris, ana panel, fikir detaylari, admin ekranlari ve sade kullanici yolculugu"),
    ("Frontend gelistirme", 78, "Responsive arayuz, filtreler, kartlar, tablolar, kullanici rolleri ve durum ekranlari"),
    ("Backend/API ve veri modeli", 50, "Fikir, kullanici, ulke, sirket, yorum, oylama ve bildirim servislerinin kurulmasi"),
    ("AI destekli analiz akisi", 32, "Fikir ozetleme, oncelik skoru, risk/gelistirme onerisi ve yonetici gorunumu"),
    ("AI Gundem Asistani (DeepSeek Entegrasyonu)", DEEPSEEK_HOURS,
     "DeepSeek dil modeliyle borsa/duyuru/yarisma/veri sayfalarinin taranmasi, otomatik gundem "
     "onerisi uretimi ve haftalik yonetici ozet raporunun panel + e-posta uzerinden sunulmasi"),
    ("Guvenlik ve erisim modeli", 28, "Rol bazli yetki, audit mantigi, demo erisim anahtari ve temel kotuye kullanim kontrolleri"),
    ("Test, hata duzeltme ve kalite", 30, "Ekran testleri, rol senaryolari, veri tutarliligi ve son kullanici akisi kontrolleri"),
    ("Yayin hazirligi ve dokumantasyon", 20, "Kurulum notlari, yonetici kullanim notlari, teslim paketi ve kisa egitim icerigi"),
]

base = getSampleStyleSheet()


def S(name, **kw):
    return ParagraphStyle(name, parent=base["Normal"], **kw)


COVER_TITLE = S("CoverTitle", fontSize=26, leading=32, textColor=WHITE, fontName="Helvetica-Bold", spaceAfter=8)
COVER_SUB = S("CoverSub", fontSize=11.5, leading=16, textColor=HexColor("#cbd5e1"), fontName="Helvetica")
SEC_TITLE = S("SecTitle", fontSize=15, fontName="Helvetica-Bold", textColor=INK, spaceAfter=4, spaceBefore=14)
SEC_DESC = S("SecDesc", fontSize=9.5, fontName="Helvetica", textColor=MUTED, spaceAfter=8, leading=14)
SUB_TITLE = S("SubTitle", fontSize=11.5, fontName="Helvetica-Bold", textColor=NAVY, spaceAfter=5, spaceBefore=8)
BODY = S("Body", fontSize=10, fontName="Helvetica", textColor=INK, leading=14.5, spaceAfter=6)
BULLET = S("Bullet", fontSize=9.7, fontName="Helvetica", textColor=INK, leading=14, leftIndent=12, spaceAfter=3)
TH = S("TH", fontSize=8.5, fontName="Helvetica-Bold", textColor=MUTED)
TD = S("TD", fontSize=8.7, fontName="Helvetica", textColor=INK, leading=12.5)
TD_HOURS = S("TDH", fontSize=9.5, fontName="Helvetica-Bold", textColor=GREEN_MID)
FOOTER_TXT = S("Footer", fontSize=8, textColor=MUTED, fontName="Helvetica")

story = []

cover_inner = [
    [Paragraph(f"{BRAND.upper()} &middot; ID EXCHANGE", S("CE", fontSize=9.5, fontName="Helvetica-Bold", textColor=HexColor("#94a3b8")))],
    [Spacer(1, 6 * mm)],
    [Paragraph("Uretim ve Yonetim<br/>Sureci Raporu", COVER_TITLE)],
    [Spacer(1, 3 * mm)],
    [Paragraph(EXEC_SUMMARY, COVER_SUB)],
]
cover_tbl = Table([[c] for c in cover_inner], colWidths=[W - 40 * mm],
    style=TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), NAVY),
        ("TOPPADDING", (0, 0), (-1, -1), 6), ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("LEFTPADDING", (0, 0), (-1, -1), 14 * mm), ("RIGHTPADDING", (0, 0), (-1, -1), 10 * mm),
        ("ROUNDEDCORNERS", [8]),
    ]))
full_cover = Table([[cover_tbl]], colWidths=[W - 40 * mm], rowHeights=[90 * mm],
    style=TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), NAVY), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ("ROUNDEDCORNERS", [12]),
    ]))
story.append(full_cover)
story.append(Spacer(1, 6 * mm))

summary_rows = [
    ["Toplam uretim eforu", f"{TOTAL_HOURS} saat"],
    ["Kapsam", "Urun, frontend, backend, guvenlik, AI destekli analiz (DeepSeek gundem katmani dahil), test ve teslim dokumantasyonu"],
    ["Kullanici olcegi", USER_SCALE],
    ["Yonetim yuku", ADMIN_LOAD_OLD],
    ["Admin modeli", ADMIN_MODEL],
    ["Dil kapsami", LANG_SCOPE],
]
story.append(Table([[Paragraph(f"<b>{a}</b>", TD), Paragraph(b, TD)] for a, b in summary_rows],
    colWidths=[42 * mm, (W - 40 * mm) - 42 * mm],
    style=TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), DARK_ROW),
        ("LINEBELOW", (0, 0), (-1, -2), 0.5, LINE),
        ("TOPPADDING", (0, 0), (-1, -1), 6), ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("LEFTPADDING", (0, 0), (-1, -1), 8), ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ROUNDEDCORNERS", [6]),
    ])))
story.append(Spacer(1, 8))
story.append(Paragraph(
    f"Urun gelistirme tahmini toplam {TOTAL_HOURS} saat olarak planlanmistir (300 saatlik temel "
    "kapsama, DeepSeek tabanli AI Gundem Asistani icin 24 saatlik ayri bir is paketi eklenmistir). "
    "Bu tahmin, senyor urun/yazilim ekiplerinin yapay zeka destekli gelistirme araclariyla "
    "calistigi hizli uretim modeline gore hazirlanmistir.", BODY))
story.append(Paragraph(
    f"{USER_SCALE.split('/')[0].strip()} olceginde haftalik admin yuku {ADMIN_LOAD_OLD.split(' ')[0]} "
    "araliginda yonetilebilir; ihtiyac ulke temsilcilerine paylastirilir.", BODY))
story.append(Paragraph(
    "Bu rapor teknik mimari dokumani degildir; uretim eforu, ekip planlamasi ve operasyonel "
    "yonetim ihtiyacini sade sekilde ozetler.", SEC_DESC))
story.append(PageBreak())


def section(title):
    story.append(Paragraph(title, SEC_TITLE))
    story.append(HRFlowable(width="100%", thickness=1.2, color=GREEN_MID, spaceAfter=8))


def sub(title):
    story.append(Paragraph(title, SUB_TITLE))


def para(text):
    story.append(Paragraph(text, BODY))


def bullets(items):
    story.append(ListFlowable(
        [ListItem(Paragraph(i, BULLET), bulletColor=GREEN_MID) for i in items],
        bulletType="bullet", start="circle", leftIndent=10))
    story.append(Spacer(1, 4))


def simple_table(header, rows, widths=None):
    data = [[Paragraph(h, TH) for h in header]] + [[Paragraph(c, TD) for c in r] for r in rows]
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


section("1. Urun Kapsami ve Varsayim")
para(SCOPE_INTRO)
sub("Kapsama Giren Ana Akislar")
bullets(SCOPE_FLOWS)
sub("Uretim Saatlerinin Yorumu")
para(f"Toplam {TOTAL_HOURS} saatlik tahmin; senyor urun yoneticisi, senyor frontend gelistirici, "
     "backend gelistirici, tasarimci ve QA desteginin yapay zeka araclariyla hizlandirilmis "
     "calistigi varsayima dayanir. Bu efor, kurum ici demo ve pilot seviyesinde guclu bir urun "
     "cikarir; canli kurum entegrasyonlari, SSO, ileri veri ambari baglantilari, DeepSeek API "
     "uretim anlasmasi ve hukuk/uyum onaylari ayrica planlanmalidir.")
story.append(PageBreak())

section(f"2. Uretim Efor Dagilimi - Toplam {TOTAL_HOURS} Saat")
simple_table(["Is paketi", "Saat", "Aciklama"],
    [[name, str(h), desc] for name, h, desc in EFFORT_ROWS],
    widths=[48 * mm, 16 * mm, (W - 40 * mm) - 64 * mm])
sub("Bu Dagilim Ne Anlama Gelir?")
para("Bu dagilimda en buyuk pay frontend ve kullanici deneyimindedir; cunku urunun degerini "
     "gosteren kisim fikir kartlari, borsa ekrani, admin paneli, yonetici karar ekrani ve sade "
     "akislardir. AI destekli analiz akisi iki kademelidir: temel oncelik/risk skorlama (32 saat) "
     "ve ayri bir is paketi olarak planlanan DeepSeek tabanli Gundem Asistani (24 saat) -- bu "
     "ikincisi fikirleri degil, platform genelindeki aktiviteyi tarayip yoneticiye gundem ve ozet "
     "rapor sinyali uretir.")
story.append(PageBreak())

section("3. Ekip ve Takvim Senaryolari")
para(f"Asagidaki hesaplamalar {TOTAL_HOURS} saatlik toplam uretim eforuna gore hazirlanmistir "
     "(DeepSeek Gundem Asistani dahil). Her senaryoda ekip uyelerinin gunde ortalama 6 saat net "
     "uretim yaptigi varsayilmistir.")
import math
scenarios = []
for people in [2, 4, 6, 10]:
    daily = people * 6
    days = math.ceil(TOTAL_HOURS / daily)
    weeks = round(days / 5, 1)
    scenarios.append((f"{people} kisi x 6 saat/gun", f"{daily} saat/gun", f"{days} is gunu", f"Yaklasik {weeks} hafta"))
simple_table(["Ekip duzeni", "Gunluk kapasite", "Tamamlama", "Yorum"], scenarios)
sub("Onerilen Uretim Ekibi")
bullets([
    "1 urun sahibi / proje yoneticisi: kapsam, teslim takibi ve kurum ici kararlar.",
    "1 UX/UI tasarimci: giris, ana panel, borsa, admin ve yonetici ekranlarinin sadelestirilmesi.",
    "1-2 frontend gelistirici: responsive arayuz, filtreler, tablo/kart yapilari ve etkilesimler.",
    "1 backend gelistirici: API, veri modeli, guvenlik, AI analiz ve DeepSeek gundem servisi baglantisi.",
    "1 QA/operasyon destegi: test, hata kaydi, senaryo kontrolu ve teslim notlari.",
])
para("Oneri: Pilot icin 4-6 kisilik cekirdek ekip dengelidir. 10 kisilik ekip sureyi azaltir "
     "fakat koordinasyon yukunu artirir; bu nedenle cok kisa teslim baskisi yoksa 4-6 kisilik "
     "ekip daha saglikli ilerler.")
story.append(PageBreak())

section("4. Yonetim ve Admin Operasyon Modeli")
para("Admin ihtiyaci urun gelistirme eforundan ayri dusunulmelidir. Adminler yazilim gelistirme "
     "yapmaz; platformun adil, guvenli, duzenli ve kurumsal amaca uygun kullanilmasini saglar.")
simple_table(["Gorev alani", "Haftalik efor", "Aciklama"],
    [[name, hrs, desc] for name, hrs, desc in ADMIN_TASKS],
    widths=[42 * mm, 22 * mm, (W - 40 * mm) - 64 * mm])
sub("Admin Ne Zaman Gerekir?")
bullets([
    "Fikir borsasinda ayni grubun birbirini surekli destekleyerek suni fiyat/puan artisi olusturmasi ihtimalinde.",
    "Disaridan gelen girisimci, ogrenci veya is ortagi basvurularinin dogru kisiye yonlendirilmesi gerektiginde.",
    "Uygunsuz, kisisel veri iceren, yaniltici veya kurum kulturune aykiri icerik gorulduguinde.",
    "DeepSeek Gundem Asistani'nin onerdigi gundem maddelerinin onaylanmasi veya elenmesi gerektiginde.",
    "Ulke ya da sirket yoneticileri haftalik ozet, karar bekleyen fikirler ve riskli baslikiar istediginde.",
])
para("Admin yuku dusuk tutulur: Moderasyon kuyrugu, DeepSeek destekli on isaretleme, ulke "
     "filtreleri ve haftalik rapor sablonlari sayesinde admin ihtiyaci yuzlerce saate cikmaz; is "
     "yuku duzenli ve olculebilir kalir.")
story.append(PageBreak())

section("5. Ulke, Kullanici ve Dil Kirilimi")
para("Asagidaki sayilar planlama senaryosudur. Gercek canliya gecsiste kurumun aktif calisan "
     "sayisi, ulke onceligi, istirak kapsami ve pilot stratejisine gore guncellenebilir.")
simple_table(["Ulke", "Kullanici", "Kapsam", "Dil"], COUNTRY_TABLE,
    widths=[28 * mm, 22 * mm, (W - 40 * mm) - 28 * mm - 22 * mm - 32 * mm, 32 * mm])
sub("Admin Sayisi Nasil Yorumlanmali?")
para(ADMIN_BREAKDOWN_NOTE)
sub("Kontrol Noktalari ve Sonuc")
bullets(CONTROL_POINTS)
para(CLOSING)

story.append(Spacer(1, 8 * mm))
story.append(HRFlowable(width="100%", thickness=1, color=LINE, spaceAfter=6))
story.append(Paragraph(f"{BRAND} - ID Exchange Uretim ve Yonetim Sureci Degerlendirme Dokumani", FOOTER_TXT))

doc = SimpleDocTemplate(
    os.path.join(BASE_DIR, "public", f"{BRAND_FILE}-ID-Exchange-Uretim-Yonetim-Raporu.pdf"),
    pagesize=A4, leftMargin=20 * mm, rightMargin=20 * mm, topMargin=20 * mm, bottomMargin=20 * mm,
    title=f"{BRAND} ID Exchange Uretim ve Yonetim Sureci Raporu",
    author=f"{BRAND} NIE Platform Ekibi",
    subject=f"{BRAND} ID Exchange production and management process report"
)
doc.build(story)
print("Olusturuldu:", f"{BRAND_FILE}-ID-Exchange-Uretim-Yonetim-Raporu.pdf")
