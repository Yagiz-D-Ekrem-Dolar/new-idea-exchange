from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
)
from reportlab.lib.colors import HexColor, white
import os

OUTPUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "public", "BBVA-New.pdf")

NAVY = HexColor("#072146")
BLUE = HexColor("#14549c")
BLUE_SOFT = HexColor("#e7f1fb")
GOLD = HexColor("#d4ac0d")
INK = HexColor("#0f172a")
MUTED = HexColor("#64748b")
LINE = HexColor("#e2e8f0")
WHITE = white

W, H = A4

doc = SimpleDocTemplate(
    OUTPUT,
    pagesize=A4,
    leftMargin=20 * mm, rightMargin=20 * mm,
    topMargin=22 * mm, bottomMargin=22 * mm,
    title="BBVA New Pitch Deck",
    author="Aras Kilinc",
    subject="BBVA New - Kurumsal Inovasyon Ekosistemi Pitch Deck"
)

base = getSampleStyleSheet()


def S(name, **kw):
    return ParagraphStyle(name, parent=base["Normal"], **kw)


COVER_EYEBROW = S("CoverEyebrow", fontSize=10, fontName="Helvetica-Bold",
                   textColor=HexColor("#94a3b8"), alignment=TA_CENTER)
COVER_TITLE = S("CoverTitle", fontSize=30, fontName="Helvetica-Bold",
                 textColor=WHITE, alignment=TA_CENTER, leading=36)
COVER_SUB = S("CoverSub", fontSize=11, fontName="Helvetica",
              textColor=HexColor("#cbd5e1"), alignment=TA_CENTER, leading=16)
COVER_META = S("CoverMeta", fontSize=9, fontName="Helvetica",
               textColor=HexColor("#94a3b8"), alignment=TA_CENTER)

SEC_TITLE = S("SecTitle", fontSize=18, fontName="Helvetica-Bold", textColor=NAVY, spaceAfter=10)
SEC_SUB = S("SecSub", fontSize=12, fontName="Helvetica-Bold", textColor=BLUE, spaceAfter=6, spaceBefore=10)
BODY = S("Body", fontSize=10.5, fontName="Helvetica", textColor=INK, leading=15, spaceAfter=8)
QUOTE = S("Quote", fontSize=12, fontName="Helvetica-Oblique", textColor=NAVY, leading=17, alignment=TA_CENTER)
CONTACT = S("Contact", fontSize=9.5, fontName="Helvetica", textColor=MUTED, alignment=TA_CENTER)

story = []

# ---- Cover ----
cover_inner = [
    [Paragraph("BBVA GROUP &middot; NEW IDEA EXCHANGE", COVER_EYEBROW)],
    [Spacer(1, 10 * mm)],
    [Paragraph("BBVA New<br/>Pitch Deck", COVER_TITLE)],
    [Spacer(1, 4 * mm)],
    [Paragraph("Kurumsal inovasyon ekosistemi: fikir borsasi, girisimci enerjisi ve "
               "surdurulebilir buyume modeli.", COVER_SUB)],
    [Spacer(1, 14 * mm)],
    [Paragraph("Aras Kilinc &nbsp;&middot;&nbsp; +90 552 854 28 11 &nbsp;&middot;&nbsp; arsklnc.2011@gmail.com", COVER_META)],
]
cover_table = Table(cover_inner, colWidths=[W - 40 * mm])
cover_table.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, -1), NAVY),
    ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ("TOPPADDING", (0, 0), (-1, -1), 0),
    ("LEFTPADDING", (0, 0), (-1, -1), 14 * mm),
    ("RIGHTPADDING", (0, 0), (-1, -1), 14 * mm),
]))
cover_wrap = Table([[cover_table]], colWidths=[W - 40 * mm], rowHeights=[H - 60 * mm])
cover_wrap.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, -1), NAVY),
    ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
]))
story.append(cover_wrap)
story.append(PageBreak())


def slide(title, paragraphs, quote=None):
    story.append(Paragraph(title, SEC_TITLE))
    story.append(Table([[""]], colWidths=[W - 40 * mm], rowHeights=[1.4],
                        style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), GOLD)])))
    story.append(Spacer(1, 8 * mm))
    if quote:
        story.append(Paragraph(quote, QUOTE))
        story.append(Spacer(1, 8 * mm))
    for sub, body in paragraphs:
        if sub:
            story.append(Paragraph(sub, SEC_SUB))
        story.append(Paragraph(body, BODY))
    story.append(PageBreak())


slide("Problem", [
    (None, "Sirketlerin yenilikci fikir uretmekte zorlanmasi, uretilen fikirlerin ise "
           "havada kalmasi; girisimcilerden, genclerden ve yenilikci calisanlardan tam "
           "verim alinamamasina yol acmaktadir. Bu sorunlarin temel nedeni, yenilikci "
           "fikirlerin ozgurce uretilebilecegi ve dile getirilebilecegi uygun bir ortamin "
           "bulunmamasi, dolayisiyla kurumlarin bu insan kaynagindan alabilecekleri en "
           "yuksek verimi alamamalaridir."),
    ("Temel Sorunlar", "Girisimcilerden, genclerden ve yenilikci calisanlardan tam verim "
                        "alinamamasi; yenilikci fikirlerin uretilme zorlugu ve havada kalmasi."),
])

slide("Startup Tanitimi", [
    (None, "BBVA New, BBVA Group, girisimciler, gencler ve fark yaratmak isteyen "
           "calisanlarin duzenli olarak yeni fikirler, arastirmalar ve projeler urettigi, "
           "aktif ve yenilikci bir laboratuvar sistemidir; bunyesindeki fikir borsasi "
           "sayesinde buradaki insanlar projeleri degerlendirmekte ve kendi gelecek "
           "projelerini (future projects) netlestirmektedir. Bu sistem, sagladigi yuksek "
           "motivasyonla cok sayida insani bir araya getirerek, onlari BBVA Group ve "
           "istiraklerine hizmet eden devasa bir inovasyon makinesinin uretken birer "
           "parcasina donusturur."),
    (None, "BBVA New, BBVA Group ve istiraklerinin kisa ve uzun vadeli buyume hedefleri "
           "ile modernlesme sureclerini destekleyen, dusuk maliyetli ve cok yonlu "
           "avantajlara sahip yenilikci bir lab sistemidir."),
])

slide("Vizyon ve Misyon", [
    (None, "BBVA New, girisimci ve yenilikci beyinlerden maksimum verim alarak canli bir "
           "laboratuvar olusturmayi misyon edinirken; bu gucle BBVA Group ve istiraklerini "
           "global rekabette oncu ve surdurulebilir bir guce donusturmeyi vizyonlar."),
    ("Vizyonumuz", "New'in vizyonu, yenilikci fikirleri dusuk maliyetli bir ekosistemde "
                    "birlestirerek, BBVA Group ve istiraklerini global rekabette oncu, "
                    "modern ve surdurulebilir bir guce donusturmektir."),
    ("Misyonumuz", "New'in misyonu; girisimci, genc ve yenilikci calisanlarin yeni "
                    "projelere imza atmasini saglamak, onlardan maksimum verimi alarak "
                    "BBVA Group ve istirakleri icin canli bir laboratuvar ekosistemi "
                    "olusturmaktir."),
])

slide("Hizmetimiz", [
    ("Yenilikci Fikirler ve Inovasyon", "Surekli dinamik bir surecte; yeni fikirler, "
                                        "kapsamli arastirmalar ve yenilikci cozumler "
                                        "odaginda projeler uretilir."),
    ("Yeni Nesil Kitle Gucu", "Girisimcilerden, genclerden ve fark yaratmak isteyen "
                              "calisanlardan maksimum verim saglanir. Bu yaklasim, kisa "
                              "ve uzun vadede baglilik yaratarak grubun dinamizmini "
                              "artirir ve genclesmesini saglar."),
    ("Ekosistem Destegi", "BBVA New ekosistemi; BBVA Group'a dusuk maliyetli, aktif bir "
                          "laboratuvar sistemi, genclesmis bir kurumsal kultur ve yeni "
                          "nesil kitle gucu kazandirarak, grup ve istiraklerine "
                          "surdurulebilir bir buyume enerjisi saglar."),
])

slide("Hedef Kitle", [
    (None, "New; BBVA Group'un kurumsal yapisini sistematik bir laboratuvar disipliniyle "
           "optimize ederken, ayni zamanda genc girisimcilere projelerini "
           "olceklendirebilecekleri inovatif bir alan sunan, yenilikci profesyonellerin "
           "ise fikirlerini somut degerlere donusturmelerini saglayan butuncul bir "
           "gelisim ekosistemidir."),
    ("BBVA Group ve Istirakleri", "New'in hedef kitlesi BBVA Group olup, temel amaci "
                                  "grup bunyesindeki yapilari sistematik bir laboratuvar "
                                  "modeliyle optimize ederek kurumsal gelisimi "
                                  "surdurulebilir kilmaktir."),
    ("Girisimciler ve Gencler", "New; genclerin ve girisimcilerin fikirlerini bir "
                                "laboratuvar hassasiyetiyle isler. Hedefimiz, inovasyonu "
                                "bir yasam bicimi haline getiren bu kitleye, projelerini "
                                "olceklendirebilecekleri sistematik bir buyume alani "
                                "sunmaktir."),
    ("Yenilikci Calisanlar", "New; inovasyonu bir gorev degil, bir tutku olarak goren "
                             "yenilikci calisanlar icin tasarlandi. Hedefimiz; kurumsal "
                             "yapilar icerisinde kendi degerini yaratan profesyonellere, "
                             "projelerini test edip olceklendirebilecekleri profesyonel "
                             "bir laboratuvar platformu sunmaktir."),
])

slide("Ekosistem Degisimi", [
    (None, "New; kurumsal tecrubeyi, girisimci dinamizmi ve profesyonel vizyonu tek bir "
           "ekosistemde birlestirerek, daginik inovasyon sureclerini surdurulebilir bir "
           "buyume modeline donusturur."),
    ("Veri Odakli Sandbox", "Veri Odakli Sandbox; fikirleri guvenli bir test "
                            "ekosisteminde gercek zamanli verilerle sinayarak, "
                            "belirsizligi analitik bir disipline ve hatalari stratejik "
                            "birer ogrenme verisine donusturur."),
    ("Surekli Adaptif Modulerlik", "Surekli Adaptif Modulerlik; kurumsal yapiyi moduler "
                                   "bir aga donusturerek, ekosistemdeki yetkinliklerin "
                                   "pazarin o anki ihtiyacina gore anlik olarak yeniden "
                                   "yapilandirilmasini ve kurumun surekli guncel "
                                   "kalmasini saglar."),
])

slide("Ilham ve Referans", [
    (None, "Ilhamini lise girisimcilik kamplarinin dinamizminden alan modelimiz, "
           "sirketlerin gercek is problemlerine (case) hizla yenilikci cozumler "
           "uretiyor. Boylece kurumlar, geleneksel sureclerin aksine, cok kisa surede "
           "ve maliyetsiz sekilde yuksek basari oranina sahip inovatif projelere "
           "ulasiyor."),
    ("Kuresel Referans Modeller", "Toyota TPS, GE FastWorks, Siemens LAT, Bosch POL, "
                                  "Ford FGL, Airbus CC, Volkswagen FCE, Schneider SEE, "
                                  "DBS DTG ve Intuit D4D gibi programlar; hiz ve "
                                  "operasyonel mukemmeliyet odaklidir. Kuresel capta "
                                  "uygulanan bu modeller, kurum ici hantaligi onleyerek "
                                  "verimlilik ve karliligi ciddi oranda artirir."),
])

# ---- Thank you ----
story.append(Spacer(1, 60 * mm))
story.append(Paragraph("Thank You", S("ThankYou", fontSize=26, fontName="Helvetica-Bold",
                                       textColor=NAVY, alignment=TA_CENTER)))
story.append(Spacer(1, 8 * mm))
story.append(Paragraph("Aras Kilinc &nbsp;&middot;&nbsp; +90 552 854 28 11 &nbsp;&middot;&nbsp; arsklnc.2011@gmail.com", CONTACT))

doc.build(story)
print("PDF olusturuldu:", OUTPUT)
