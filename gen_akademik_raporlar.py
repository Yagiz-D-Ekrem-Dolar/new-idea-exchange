import re
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, HRFlowable
)
from reportlab.lib.colors import HexColor, white

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
NAVY = HexColor("#0a1628")
GREEN = HexColor("#004E2B")
GREEN_MID = HexColor("#00873E")
INK = HexColor("#0f172a")
MUTED = HexColor("#64748b")
LINE = HexColor("#e2e8f0")
WHITE = white
W, H = A4

# Word-level fix-up dictionary. The source PDFs' embedded font drops the dotted/
# dotless Turkish glyphs (s-cedilla, g-breve, dotless-i and their capitals)
# entirely from the extractable text layer. ReportLab's base14 Helvetica font
# only supports WinAnsiEncoding, which has no glyphs for s/g/dotless-i either,
# so the fix targets ASCII-safe Turkish (consistent with gen_report.py /
# gen_pitch_deck.py elsewhere in this repo) rather than real Unicode diacritics
# -- u-umlaut/o-umlaut/c-cedilla are already correct and untouched.
WORD_FIXES = {
    "irket": "sirket", "irketin": "sirketin", "irketler": "sirketler", "irketlerin": "sirketlerin",
    "irketleri": "sirketleri",
    "nasil": "nasil", "kanitlar": "kanitlar", "kanitlayan": "kanitlayan",
    "akademk": "akademik",
    "giriimcilik": "girisimcilik", "giriimciliin": "girisimciligin", "giriimci": "girisimci",
    "giriimciler": "girisimciler", "giriimcilerin": "girisimcilerin", "giriimcilere": "girisimcilere",
    "çi": "ici", "çinde": "icinde",
    "çalianlarin": "calisanlarin", "çalianlarina": "calisanlarina", "çalianlar": "calisanlar",
    "çalianlara": "calisanlara", "çalian": "calisan", "çaliani": "calisani", "çalianlardan": "calisanlardan",
    "çalima": "calisma", "çalimadir": "calismadir", "çalimalari": "calismalari", "çalimalardir": "calismalardir",
    "çaliir": "calisir", "çaliirken": "calisirken", "çaliilan": "calisilan",
    "odakli": "odakli", "açik": "acik", "açiklar": "aciklar", "açiklayan": "aciklayan",
    "kapsamli": "kapsamli", "yapilar": "yapilar", "yapilarin": "yapilarin", "yapilara": "yapilara",
    "yapilarda": "yapilarda",
    "anlik": "anlik", "anlamli": "anlamli", "balica": "baslica",
    "hantallii": "hantalligi", "hantallik": "hantallik", "hantalliktan": "hantaliktan",
    "gerektiini": "gerektigini", "gerektii": "gerektigi",
    "doru": "dogru", "dorudan": "dogrudan", "doruluğu": "dogrulugu", "doruluk": "dogruluk",
    "salayan": "saglayan", "salar": "saglar", "salama": "saglama", "salamak": "saglamak",
    "olduunu": "oldugunu", "olduu": "oldugu",
    "artirdiini": "artirdigini", "artirir": "artirir", "artiran": "artiran", "artirmasi": "artirmasi",
    "gelitirme": "gelistirme", "gelitirmesini": "gelistirmesini", "gelitiren": "gelistiren", "gelitirdii": "gelistirdigi",
    "yaratiidini": "yarattigini",
    "rekabeti": "rekabetci", "agresiflii": "agresifligi",
    "balantisi": "baglantisi", "balayan": "baslayan", "balatan": "baslatan",
    "balilik": "baglilik", "balilii": "bagliligi",
    "asagidan": "asagidan", "yukariya": "yukariya", "yukaridan": "yukaridan",
    "ekillendirdiini": "sekillendirdigini", "ekillendiren": "sekillendiren",
    "rol�n�": "rolunu", "rolu": "rolu",
    "konumlandirilabileceini": "konumlandirilabilecegini", "konumlandirilmasi": "konumlandirilmasi",
    "artiriyor": "artiriyor", "artirici": "artirici",
    "salikli": "sagliki", "saliklayan": "saglayan",
    "kaslarini": "kaslarini", "kaslarinda": "kaslarinda",
    "kontrol�": "kontrolu", "kontrolu": "kontrolu",
    "tasarimlarin": "tasarimlarin", "tasarimi": "tasarimi",
    "tanimasi": "tanimasi", "tanimlayan": "tanimlayan", "tanimlanmasi": "tanimlanmasi",
    "araliinda": "araliginda", "araliklarla": "araliklarla",
    "kazandirarak": "kazandirarak", "kazandirir": "kazandirir",
    "kiyasla": "kiyasla", "kiyaslayarak": "kiyaslayarak",
    "yaisindaki": "yasindaki", "yaam": "yasam", "yaayan": "yasayan", "yaadii": "yasadigi",
    "iyiletirme": "iyilestirme", "iyiletiren": "iyilestiren",
    "deitirerek": "degistirerek", "deitirdiini": "degistirdigini", "deien": "degisen", "deiim": "degisim",
    "deimez": "degismez", "deiiklik": "degisiklik",
    "alikanliklarini": "aliskanliklarini", "alikanlik": "aliskanlik",
    "egilimleri": "egilimleri", "egitim": "egitim",
    "kazaniminin": "kazaniminin", "kazanim": "kazanim",
}


def fix_text(t):
    # Branding substitutions (must run before word fixes since they share tokens)
    t = t.replace("SABANCI NEW", "HEIDELBERG NEW")
    t = t.replace("Sabanci New", "Heidelberg New")
    t = t.replace("SABANCI HOLDNG", "HEIDELBERG MATERIALS")
    t = t.replace("Sabanci Holding", "Heidelberg Materials")
    t = t.replace("SABANCI", "HEIDELBERG MATERIALS")
    t = t.replace("Sabanci", "Heidelberg Materials")
    # Strip running header / page-number artifacts left over from page-by-page extraction
    t = re.sub(r"HEIDELBERG MATERIALS NEW:?\s*Akademik Literat.r ve Kanitlar Raporu", "", t)
    t = re.sub(r"HEIDELBERG MATERIALS NEW HEIDELBERG MATERIALS HOLDNG Pitch Deck", "Heidelberg New pitch deck", t)
    for bad, good in WORD_FIXES.items():
        t = re.sub(r"\b" + re.escape(bad) + r"\b", good, t, flags=re.IGNORECASE)
    # Final safety net: ReportLab's base14 Helvetica only supports WinAnsiEncoding,
    # which mis-renders several Turkish letters in practice -- transliterate
    # everything to plain ASCII rather than risk corrupted glyphs in the PDF.
    translit = str.maketrans({
        "ş": "s", "Ş": "S", "ğ": "g", "Ğ": "G", "ı": "i", "İ": "I",
        "ü": "u", "Ü": "U", "ö": "o", "Ö": "O", "ç": "c", "Ç": "C",
        "â": "a", "Â": "A", "î": "i", "Î": "I", "û": "u", "Û": "U",
    })
    t = t.translate(translit)
    t = t.replace("�", "u")
    return t.strip()


base = getSampleStyleSheet()


def S(name, **kw):
    return ParagraphStyle(name, parent=base["Normal"], **kw)


COVER_TITLE = S("CoverTitle", fontSize=22, leading=27, textColor=WHITE, fontName="Helvetica-Bold",
                 spaceAfter=8, alignment=TA_LEFT)
COVER_SUB = S("CoverSub", fontSize=11, leading=16, textColor=HexColor("#94a3b8"), fontName="Helvetica")
SEC_TITLE = S("SecTitle", fontSize=14, fontName="Helvetica-Bold", textColor=GREEN, spaceAfter=4, spaceBefore=12)
SEC_DESC = S("SecDesc", fontSize=9.5, fontName="Helvetica-Oblique", textColor=MUTED, spaceAfter=8, leading=13)
SUB_TITLE = S("SubTitle2", fontSize=11.5, fontName="Helvetica-Bold", textColor=GREEN, spaceAfter=5, spaceBefore=10)
CITE_NUM = S("CiteNum", fontSize=9, fontName="Helvetica-Bold", textColor=GREEN_MID)
CITE_TITLE = S("CiteTitle", fontSize=9.3, fontName="Helvetica-Bold", textColor=INK, leading=12.5, spaceAfter=1)
CITE_BODY = S("CiteBody", fontSize=8.8, fontName="Helvetica", textColor=MUTED, leading=12, spaceAfter=7)
REF_LINE = S("RefLine", fontSize=8.5, fontName="Helvetica", textColor=INK, leading=12.5, spaceAfter=5)
FOOTER_TXT = S("Footer", fontSize=8, textColor=MUTED, fontName="Helvetica")


def cover(title, subtitle):
    inner = [
        [Paragraph("HEIDELBERG MATERIALS &middot; NEW IDEA EXCHANGE",
                   S("CE", fontSize=9.5, fontName="Helvetica-Bold", textColor=HexColor("#94a3b8")))],
        [Spacer(1, 8 * mm)],
        [Paragraph(title, COVER_TITLE)],
        [Spacer(1, 3 * mm)],
        [Paragraph(subtitle, COVER_SUB)],
    ]
    cover_tbl = Table([[c] for c in inner], colWidths=[W - 40 * mm],
        style=TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), NAVY),
            ("TOPPADDING", (0, 0), (-1, -1), 6), ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ("LEFTPADDING", (0, 0), (-1, -1), 16 * mm), ("RIGHTPADDING", (0, 0), (-1, -1), 10 * mm),
            ("ROUNDEDCORNERS", [8]),
        ]))
    full_cover = Table([[cover_tbl]], colWidths=[W - 40 * mm], rowHeights=[110 * mm],
        style=TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), NAVY), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ("ROUNDEDCORNERS", [12]),
        ]))
    return [full_cover, PageBreak()]


def footer():
    return [
        Spacer(1, 6 * mm),
        HRFlowable(width="100%", thickness=1, color=LINE, spaceAfter=4),
        Paragraph("Heidelberg Materials New Idea Exchange - Akademik Destek Dokumani - Haziran 2026", FOOTER_TXT),
    ]


# ─────────────────────────────────────────────────────────────────────────────
# DOC 1: Literatur ve Kanitlar Raporu
# ─────────────────────────────────────────────────────────────────────────────

with open(os.path.join(BASE_DIR, "_akad-literatur.txt"), encoding="latin-1") as f:
    raw = f.read()

raw = re.sub(r"^HEIDELBERG MATERIALS NEW\nAKADEMK LTERAT.R VE KANITLAR RAPORU\n", "", raw) if False else raw
lines = [l for l in raw.split("\n")]

# Drop running headers and lone page-number lines
clean_lines = []
for l in lines:
    s = l.strip()
    if not s:
        clean_lines.append("")
        continue
    if re.match(r"^SABANCI NEW:?\s*Akademik", s, re.I):
        continue
    if re.match(r"^\d{1,3}$", s):
        continue
    if s == "SABANCI NEW" or s.startswith("AKADEMK LTERAT"):
        continue
    clean_lines.append(s)

text = "\n".join(clean_lines)
text = fix_text(text)

# Split into sections by "BOLUM N:" markers
section_re = re.compile(r"(B.L.M \d+: [^\n]+)")
parts = section_re.split(text)

sections = []
if parts and not parts[0].strip().upper().startswith("B"):
    intro = parts[0]
else:
    intro = ""
i = 1
while i < len(parts) - 1:
    sections.append((parts[i].strip(), parts[i + 1]))
    i += 2

# Split off the APA reference list (last section's body contains it)
ref_marker = "RESM KAYNAK"
ref_block = ""
if sections:
    last_title, last_body = sections[-1]
    if ref_marker in last_body:
        idx = last_body.index(ref_marker)
        sections[-1] = (last_title, last_body[:idx])
        ref_block = last_body[idx:]

CITE_RE = re.compile(r"^(\d{1,2})\s+([A-ZÇĞİÖŞÜ][^\(]+\(\d{4}[a-z]?\)\s*-\s*\"[^\"]+\")\s*(.*)$")


def render_citations(body):
    blocks = []
    # Citation entries are concatenated without reliable newlines in the extraction,
    # so split on the leading "N Author (year) -" pattern instead of literal lines.
    chunks = re.split(r"(?=\b\d{1,2}\s+[A-ZÇĞİÖŞÜ][a-zA-Zçğıöşü&\.,\s]+\(\d{4}[a-z]?\)\s*-\s*\")", body)
    for chunk in chunks:
        chunk = chunk.strip()
        if not chunk:
            continue
        m = re.match(r"^(\d{1,2})\s+(.+?\(\d{4}[a-z]?\)\s*-\s*\"[^\"]+\")\s*(.*)$", chunk, re.S)
        if m:
            num, head, desc = m.groups()
            blocks.append(Paragraph(f"<b>{num}.</b> {head}", CITE_TITLE))
            if desc.strip():
                blocks.append(Paragraph(desc.strip(), CITE_BODY))
        else:
            if len(chunk) > 3:
                blocks.append(Paragraph(chunk, CITE_BODY))
    return blocks


story = []
story += cover(
    "Heidelberg New<br/>Akademik Literatur<br/>ve Kanitlar Raporu",
    "Kurum ici girisimcilik, acik inovasyon, sandbox metodolojisi, moduler organizasyon "
    "ve fikir borsasi yaklasimini destekleyen 100 akademik kaynagin derlemesi."
)

if intro.strip():
    story.append(Paragraph(fix_text(intro), CITE_BODY))

for title, body in sections:
    title = re.sub(r"^B.L.M (\d+): ", r"Bolum \1: ", title)
    story.append(Paragraph(title, SEC_TITLE))
    story.append(HRFlowable(width="100%", thickness=1, color=GREEN_MID, spaceAfter=6))
    # First sentence of body (before first numbered citation) is the section blurb
    blurb_m = re.match(r"^(.*?)(?=\d{1,2}\s+[A-ZÇĞİÖŞÜ])", body, re.S)
    blurb = blurb_m.group(1).strip() if blurb_m else ""
    rest = body[len(blurb_m.group(1)):] if blurb_m else body
    if blurb:
        story.append(Paragraph(fix_text(blurb), SEC_DESC))
    story += render_citations(rest)
    story.append(Spacer(1, 4))

if ref_block:
    story.append(PageBreak())
    story.append(Paragraph("Resmi Kaynakca (APA 7 Formatinda)", SEC_TITLE))
    story.append(HRFlowable(width="100%", thickness=1, color=GREEN_MID, spaceAfter=6))
    ref_lines = [l.strip() for l in ref_block.split("\n") if l.strip() and "RESM KAYNAK" not in l.upper()]
    for rl in ref_lines:
        story.append(Paragraph(rl, REF_LINE))

story += footer()

doc1 = SimpleDocTemplate(
    os.path.join(BASE_DIR, "public", "Heidelberg-New-Akademik-Literatur-ve-Kanitlar-Raporu.pdf"),
    pagesize=A4, leftMargin=20 * mm, rightMargin=20 * mm, topMargin=20 * mm, bottomMargin=20 * mm,
    title="Heidelberg New Akademik Literatur ve Kanitlar Raporu",
    author="Heidelberg Materials NIE Platform Ekibi",
    subject="Academic literature supporting the Heidelberg New innovation exchange model"
)
doc1.build(story)
print("Olusturuldu: Heidelberg-New-Akademik-Literatur-ve-Kanitlar-Raporu.pdf")


# ─────────────────────────────────────────────────────────────────────────────
# DOC 2: Akademik ve Entegrasyon Raporu
# ─────────────────────────────────────────────────────────────────────────────

MATRIX_ROWS = [
    ("Toyota (TPS)", "Kaizen / Surekli Iyilestirme ve Sifir Atik",
     "Gercek is problemlerine hizli cozum: operasyonel israflari ve surec hantalliklarini calisan fikirleriyle cozme kasi.",
     "Maliyetsiz fikir uretimiyle isletme sermayesi optimizasyonu saglar."),
    ("GE (FastWorks)", "Yalin Girisim Metodolojisi ve Hizli Validasyon",
     "Hiz ve kisa surede cikti: fikirlerin kurumsal burokrasiye takilmadan hizla elenmesi veya dogrulanmasi.",
     "Hatali projelere erken asamada harcanacak butceleri (Sunk Cost) onler."),
    ("Siemens (LAT)", "Yerel Uyum ve Moduler Bolgesel Inovasyon",
     "Surekli Adaptif Modulerlik: ekosistem yetkinliklerinin pazarin anlik ihtiyacina gore hizlica yapilanmasi.",
     "Heidelberg Materials istiraklerinin yeni pazar firsatlarina gecikme maliyeti odemesini engeller."),
    ("Bosch (POL)", "Surec Optimizasyonu ve Burokrasi Azaltimi",
     "Moduler ag yapisi: fikirlerin dikey hiyerarsilere takilmadan yatay duzlemde hizla akabilmesi.",
     "Geleneksel onay mekanizmalarindaki zaman ve is gucu kaybini minimize eder."),
    ("Ford (FGL)", "Kuresel Liderlik ve Kolektif Akil",
     "Genc kitle gucu entegrasyonu: lise ve universite dinamizmini kurumsal tecrubeyle birlestirme.",
     "Dis kaynak (outsourcing) Ar-Ge maliyetlerini tabana yayarak dusurur."),
    ("Airbus (CC) / Volkswagen (FCE) / Schneider (SEE)", "Radikal Inovasyon, Teknolojik Donusum ve Surdurulebilir Ciro",
     "Gelecek projeleri: projelerin Heidelberg Materials vizyonu ve surdurulebilirlik kriterlerine gore borsa ve laboratuvar ortaminda oylanip fonlanmasi.",
     "Yuksek riskli yatirimlari ana govdeye zarar vermeden fonlar, CapEx verimliligi saglar, pazar regulasyon uyum maliyetini dusurur."),
    ("DBS (DTG)", "Dijital Bankacilik ve Cevik Kultur",
     "Yuksek motivasyon ekosistemi: calisanlarin savunmaci uretkenlikten cikip inovasyona katilmasi.",
     "Yetenek kaybi (turnover) ikame maliyetlerini asagi ceker."),
    ("Intuit (D4D)", "Tasarim Odakli Dusunce (Design for Delight)",
     "Veri Odakli Sandbox: fikirlerin kullanici ve pazar verileriyle guvenli alanda analitik testi.",
     "Urun-pazar uyumsuzlugu (Product-Market Fit) kaynakli zarar riskini sifirlar."),
]

story2 = []
story2 += cover(
    "Heidelberg New<br/>Akademik ve Entegrasyon<br/>Raporu",
    "Stratejist / Yazar: Aras Kilinc &mdash; Heidelberg New ekosisteminin Toyota TPS, GE FastWorks, "
    "Siemens LAT ve benzeri kuresel kurumsal inovasyon programlariyla teorik, operasyonel ve "
    "finansal baglantisini kuran entegrasyon raporu."
)

story2.append(Paragraph("Giris ve Mesruiyet Temeli", SEC_TITLE))
story2.append(HRFlowable(width="100%", thickness=1, color=GREEN_MID, spaceAfter=6))
story2.append(Paragraph(
    "Bu rapor, Heidelberg New pitch deck'inin referans programlari (Toyota TPS, GE FastWorks, Siemens "
    "LAT vb.) ile Heidelberg New ekosisteminin teorik, operasyonel ve finansal baglantilarini ve "
    "akademik altyapisini kurmak amaciyla hazirlanmistir. Geleneksel sirket hantalligini ve fikirlerin "
    "havada kalmasi problemini cozmeyi hedefleyen Heidelberg New, bu kuresel devlerin rustunu ispatlamis "
    "metodolojilerini kendi govdesine entegre ederek Heidelberg Materials yonetimi nezdindeki finansal "
    "ve stratejik en buyuk kanitini sunmaktadir.", CITE_BODY))
story2.append(Spacer(1, 6))

story2.append(Paragraph("Kuresel Programlarin Heidelberg New Stratejisi ile Dogrudan Baglanti Matrisi", SUB_TITLE))
for prog, focus, karsilik, finans in MATRIX_ROWS:
    story2.append(Paragraph(f"<b>{prog}</b> &mdash; {focus}", CITE_TITLE))
    story2.append(Paragraph(f"<i>Heidelberg New sistemindeki dogrudan karsiligi:</i> {karsilik}", CITE_BODY))
    story2.append(Paragraph(f"<i>Finansal kaldirac ve baglanti:</i> {finans}", CITE_BODY))
story2.append(Spacer(1, 6))

story2.append(Paragraph("Heidelberg New Sistemik Entegrasyon Gucu ve Finansal Projeksiyon", SUB_TITLE))
story2.append(Paragraph(
    "Surekli Adaptif Modulerlik (Siemens &amp; Bosch Modeli): kurumsal tecrube ile genc girisimci "
    "dinamizmini birlestirerek, Heidelberg Materials yapisini pazar ihtiyaclarina gore anlik "
    "guncellenen, yasayan bir organizmaya donusturur.", CITE_BODY))
story2.append(Paragraph(
    "Veri Odakli Sandbox (Intuit &amp; GE Modeli): fikirlerin havada kalmasini engellemek icin, "
    "uretilen projeleri tamamen analitik disiplinle test eder ve dogrulanmis olanlari Heidelberg "
    "Materials istiraklerine hazir is modeli olarak sunar.", CITE_BODY))
story2.append(Paragraph(
    "Bu kuresel programlarin Heidelberg New yapisi ile olan baglantisi, Heidelberg Materials'a "
    "dogrudan bir Firsat Maliyeti (Opportunity Cost) kazanci yazar. Heidelberg New bunyesindeki Fikir "
    "Borsasi ve Sandbox mimarisi sayesinde, Heidelberg Materials istirakleri kendi gercek is "
    "problemlerine (case) disaridan pahali danismanliklar almak yerine, Heidelberg New laboratuvarindan "
    "gelen, kuresel standartlarda dogrulanmis, maliyetsiz ve yuksek basari oranli inovatif projelerle "
    "cozum bulur. Sonuc olarak bu referanslar, Heidelberg New sisteminin Heidelberg Materials icin "
    "gecici bir heves degil; kuresel devler tarafindan onaylanmis, en yuksek yatirim getirisine (ROI) "
    "sahip stratejik ve finansal bir donusum hamlesi oldugunu kanitlamaktadir.", CITE_BODY))

story2.append(PageBreak())
story2.append(Paragraph("Ek: Akademik Literatur ve Kanitlar Ozeti", SEC_TITLE))
story2.append(HRFlowable(width="100%", thickness=1, color=GREEN_MID, spaceAfter=6))
story2.append(Paragraph(
    "Asagidaki 100 kaynaklik akademik literatur derlemesi, bu entegrasyon raporunun teorik altyapisini "
    "olusturur. Tam atif listesi ve APA kaynakcasi icin Heidelberg New Akademik Literatur ve Kanitlar "
    "Raporu'na bakiniz.", SEC_DESC))

for title, body in sections:
    title = re.sub(r"^B.L.M (\d+): ", r"Bolum \1: ", title)
    story2.append(Paragraph(title, SUB_TITLE))
    blurb_m = re.match(r"^(.*?)(?=\d{1,2}\s+[A-ZÇĞİÖŞÜ])", body, re.S)
    blurb = blurb_m.group(1).strip() if blurb_m else ""
    if blurb:
        story2.append(Paragraph(fix_text(blurb), SEC_DESC))

story2 += footer()

doc2 = SimpleDocTemplate(
    os.path.join(BASE_DIR, "public", "Heidelberg-New-Akademik-ve-Entegrasyon-Raporu.pdf"),
    pagesize=A4, leftMargin=20 * mm, rightMargin=20 * mm, topMargin=20 * mm, bottomMargin=20 * mm,
    title="Heidelberg New Akademik ve Entegrasyon Raporu",
    author="Heidelberg Materials NIE Platform Ekibi",
    subject="Integration report linking Heidelberg New with global corporate innovation programs"
)
doc2.build(story2)
print("Olusturuldu: Heidelberg-New-Akademik-ve-Entegrasyon-Raporu.pdf")


# ─────────────────────────────────────────────────────────────────────────────
# DOC 3: Aras Kilinc - Fikirlerin Verimliligi Makalesi
# ─────────────────────────────────────────────────────────────────────────────

ART_TITLE = S("ArtTitle", fontSize=20, fontName="Helvetica-Bold", textColor=GREEN, spaceAfter=4, leading=24)
ART_SUB = S("ArtSub", fontSize=12, fontName="Helvetica-Oblique", textColor=MUTED, spaceAfter=12)
ART_BYLINE = S("ArtByline", fontSize=9.5, fontName="Helvetica-Bold", textColor=GREEN_MID, spaceAfter=14)
ART_H2 = S("ArtH2", fontSize=13, fontName="Helvetica-Bold", textColor=INK, spaceAfter=6, spaceBefore=14)
ART_BODY = S("ArtBody", fontSize=10, fontName="Helvetica", textColor=INK, leading=15, spaceAfter=8)
ART_BULLET = S("ArtBullet", fontSize=10, fontName="Helvetica", textColor=INK, leading=15, leftIndent=12, spaceAfter=3)

story3 = []
story3.append(Paragraph("Fikirlerin Verimliligi", ART_TITLE))
story3.append(Paragraph("Girisimci Zihinleri Kisitlamanin Gorunmez Maliyeti", ART_SUB))
story3.append(Paragraph("YAZAR: ARAS KILINC &nbsp;&middot;&nbsp; Heidelberg New Platformu - Makaleler", ART_BYLINE))
story3.append(HRFlowable(width="100%", thickness=1, color=GREEN_MID, spaceAfter=10))

story3.append(Paragraph(
    "Bu makale, Heidelberg New platformunun \"Makaleler\" bolumunde yayinlanan, kurum ici inovasyon "
    "kulturunu ve fikir uretim sureclerini ele alan bir dusunce yazisidir. Heidelberg Materials ve "
    "istiraklerindeki ekiplerin fikir borsasi ve sandbox surecleriyle nasil iliskilendigine dair "
    "baglam saglar.", SEC_DESC))

story3.append(Paragraph("Modern Sirketlerin En Buyuk Kor Noktasi", ART_H2))
story3.append(Paragraph(
    "Bugun bircok sirket inovasyon istedigini soyluyor. Ancak ayni sirketlerin onemli bir bolumu, "
    "inovasyonun ortaya cikmasini saglayan davranislari sistematik bicimde baskiliyor. Kurumlar "
    "calisanlarindan ayni anda hem yaratici, hem hizli, hem hatasiz, hem de tamamen ongorulebilir "
    "olmalarini bekliyor. Fakat bu beklentiler birbirleriyle tam uyumlu degil. Cunku gercek inovasyon; "
    "belirsizlik, deney yapma ve basarisiz olma ihtimali icerir. Buna karsilik modern performans "
    "sistemleri giderek daha fazla olculebilirlik, kisa vadeli cikti ve operasyonel guvenlik uzerine "
    "kuruluyor.", ART_BODY))
story3.append(Paragraph(
    "Ortaya cikan sonuc sudur: sirketler cogu zaman fikir eksikligi yasamiyor. Asil problem, "
    "insanlarin fikir uretmek yerine kendilerini korumayi ogrendigi organizasyonlar yaratmalaridir.", ART_BODY))
story3.append(Paragraph(
    "Bu durum ozellikle bilgi ekonomisinde kritik hale geldi. Cunku fiziksel sermayenin aksine "
    "bilissel sermaye, baski altinda dogrusal bicimde buyumez. Yonetim literaturunde uzun suredir "
    "inovasyonun onundeki engeller tartisiliyor. Ancak bircok organizasyon hala yanlis soruya "
    "odaklaniyor: \"Insanlarimiz neden daha yaratici degil?\" Oysa daha dogru soru sudur: "
    "\"Sistemimiz insanlari yaratici olmaktan neden vazgeciriyor?\"", ART_BODY))

story3.append(Paragraph("Sessizligin Yeni Formu: Savunmaci Verimlilik Kulturu", ART_H2))
story3.append(Paragraph(
    "Organizasyonel sessizlik kavrami uzun suredir biliniyor. Morrison ve Milliken'in calismalari, "
    "calisanlarin cogu zaman fikirlerini paylasmadigini; cunku bunun kariyer riski yaratabilecegini "
    "dusundugunu gosterdi. Fakat bugun ortaya cikan problem daha sofistike bir yapiya sahip. Modern "
    "sirketlerde insanlar artik tamamen sessiz kalmiyor; toplantilara katiliyorlar, rapor "
    "hazirliyorlar, KPI'lari takip ediyorlar, sureclere uyum sagliyorlar. Disaridan bakildiginda "
    "sistem son derece uretken gorunuyor.", ART_BODY))
story3.append(Paragraph("Ancak organizasyonlarin onemli bir kisminda calisanlar giderek su davranis modeline yoneliyor:", ART_BODY))
for b in ["Dusuk riskli fikir uretmek", "Mevcut sistemi zorlamamak",
          "Olculebilir ciktilara oncelik vermek", "Basarisiz olma ihtimali tasiyan deneylerden kacinmak"]:
    story3.append(Paragraph("&bull; " + b, ART_BULLET))
story3.append(Paragraph(
    "Bu durumu \"savunmaci verimlilik kulturu\" olarak tanimlayabiliriz. Bu kulturde insanlar "
    "calismayi birakmaz; aksine yogun bicimde calisirlar. Ancak bilissel enerjilerini kesif yerine "
    "oz-koruma davranisina yonlendirirler. Bu nedenle organizasyon kisa vadede duzenli gorunurken, "
    "uzun vadede adaptasyon kapasitesini kaybetmeye baslar.", ART_BODY))

story3.append(Paragraph("Psikolojik Guvenlik Neden Yanlis Anlasiliyor?", ART_H2))
story3.append(Paragraph(
    "Psikolojik guvenlik kavrami son yillarda yonetim dunyasinda oldukca populer hale geldi. Ancak "
    "cogu organizasyon bu kavrami yanlis yorumluyor. Psikolojik guvenlik, insanlarin elestirilmedigi "
    "konforlu ortamlar yaratmak degildir. Asil anlami sudur: insanlarin sosyal cezalandirma korkusu "
    "yasamadan bilissel risk alabilmesi.", ART_BODY))
story3.append(Paragraph(
    "Google'in Project Aristotle arastirmasinin en onemli bulgularindan biri buydu: yuksek "
    "performansli ekipleri ayiran temel degisken bireysel yetenek yogunlugu degil, insanlarin "
    "fikirlerini rahatca ortaya koyabilmesiydi. Asiri guvenli ama dusuk standartli kulturler zamanla "
    "karar hizini kaybedebilir; bu nedenle yuksek performansli inovasyon kulturleri iki ozelligi ayni "
    "anda tasir: insanlar fikir uretmekten korkmaz ve fikirler yogun bicimde test edilir. Pixar'in "
    "\"Braintrust\" sistemi bunun guclu orneklerinden biridir.", ART_BODY))

story3.append(Paragraph("Sirketler Neden Kendi Inovasyonlarini Olduruyor?", ART_H2))
story3.append(Paragraph(
    "Clayton Christensen'in gosterdigi gibi basarili sirketler zamanla operasyonel mukemmellik "
    "uzerine optimize olur. Bu baslangicta buyuk avantaj saglar; ancak ayni sistem zamanla yeni "
    "fikirler icin dusmanca hale gelebilir, cunku radikal fikirler ilk asamada neredeyse her zaman "
    "yavas, pahali, belirsiz, olcumsuz ve verimsiz gorunur. Boylece organizasyonlar paradoksal bir "
    "noktaya gelir: gecmis basarilarini yaratan disiplin, gelecekteki adaptasyonlarini engellemeye "
    "baslar. Gercekte inovasyon buyuk olcude bir sistem tasarimi problemidir.", ART_BODY))

story3.append(Paragraph("En Basarili Sirketler Aslinda Ne Yapiyor?", ART_H2))
story3.append(Paragraph(
    "Yuksek inovasyon kapasitesine sahip sirketler incelendiginde ortak bir model goruluyor. Amazon, "
    "Netflix, SpaceX, Pixar ve Heidelberg Materials gibi olgun endustrilerde bile inovasyon programi "
    "kuran organizasyonlarin ortak noktasi sinirsiz rahatlik degil; yuksek standartlarla yuksek "
    "ozerkligi ayni anda yonetebilmeleridir. Basarili inovasyon kulturleri dusuk disiplinli degil, "
    "dusuk surtunmelidir. Dusuk surtunme; hizli karar alma, dusuk burokrasi, acik iletisim, hizli geri "
    "bildirim ve deney yapabilme kapasitesi yaratir. Inovasyonun temel ihtiyaci kaos degil, ogrenme "
    "hizidir.", ART_BODY))

story3.append(Paragraph("Pre-Inkubasyon Sistemlerinin Temel Hatasi", ART_H2))
story3.append(Paragraph(
    "Bu problem girisimcilik ekosistemlerinde daha gorunur hale geliyor. Bircok hizlandirma ve on "
    "kuluckaprogrami teoride risk alan girisimciler ariyor; pratikte ise erken asama ekipleri "
    "kurumsal raporlama mantigina zorluyor. Etkili pre-inkubasyon sistemleri -- Heidelberg New "
    "icindeki Veri Odakli Sandbox yaklasimi gibi -- girisimciyi bosmayan, ama tamamen yalniz "
    "birakmayan, esnek ama hesap verebilir, yuksek ozerklikli ama stratejik yonu net yapilar "
    "kurabilmelidir.", ART_BODY))

story3.append(Paragraph("Gelecegin Sirketleri Ne Uzerine Kurulacak?", ART_H2))
story3.append(Paragraph(
    "Uzun yillar sirketler rekabet avantajini surec optimizasyonuyla kazandi. Bugun ise yapay zeka, "
    "otomasyon ve bilgi erisiminin yayginlasmasiyla birlikte surec avantajlari giderek daha hizli "
    "kopyalanabiliyor. Bu nedenle gelecegin en guclu organizasyonlari yalnizca operasyonel olarak "
    "verimli olanlar olmayacak; asil avantaji su soruya daha iyi cevap verenler kazanacak: "
    "insanlarin dusunme kapasitesi nasil olceklenir? Gercek cevap; insanlarin bilissel cesaret "
    "gosterebildigi, ogrenmenin cezalandirilmadigi, yuksek standartlarla psikolojik guvenligin "
    "birlikte var olabildigi, ozgurluk ile koordinasyon arasinda denge kurabilen organizasyonlar "
    "insa edebilmektir.", ART_BODY))
story3.append(Paragraph(
    "Cunku modern ekonomide en buyuk gorunmez maliyet cogu zaman kotu fikirler degildir. "
    "Hic soylenmemis fikirlerdir.", ART_BODY))

story3 += footer()

doc3 = SimpleDocTemplate(
    os.path.join(BASE_DIR, "public", "Aras-Kilinc-Fikirlerin-Verimliligi-Makalesi.pdf"),
    pagesize=A4, leftMargin=22 * mm, rightMargin=22 * mm, topMargin=24 * mm, bottomMargin=22 * mm,
    title="Fikirlerin Verimliligi - Aras Kilinc",
    author="Aras Kilinc",
    subject="Heidelberg New platformu makale: kurum ici inovasyon kulturu uzerine"
)
doc3.build(story3)
print("Olusturuldu: Aras-Kilinc-Fikirlerin-Verimliligi-Makalesi.pdf")
