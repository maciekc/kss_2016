# coding: utf-8

from xml.dom import minidom

# dane = minidom.parse('dane.xml')
# print dane.childNodes
# #print dane.firstChild.toxml()
# dane = dane.getElementsByTagName('object')
# print dane[0].toxml()

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph, Table, TableStyle, SimpleDocTemplate, Spacer
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet

def generateReport(data_DB):
    
    #plik = canvas.Canvas('raport.pdf', pagesize = A4)
    plik = SimpleDocTemplate('raport.pdf', pagesize = A4)
    data = []
    e= []
    styles=getSampleStyleSheet()
    styleN = styles["Normal"]
    text = '<font size=15>Raport z działania systemu ogrzewania budynków</font>'
    e.append(Paragraph(text, styleN))
    e.append(Spacer(5, 12))
#     e.append(Paragraph('Raport z działania systemu ogrzewania budynków'),styleN)
#     e.append(Paragraph('Tzm - temperatura wody z elektrociepłowni'),styleN)
#     e.append(Paragraph('Tpm - tempetatura wody oddawanej do elektrociepłowni'),styleN)
#     e.append(Paragraph('Tzco - temperatura wody wypływającej z wymiennika do budynków'),styleN)
#     e.append(Paragraph('Tpco - temperatura wody powracającej z budynków'),styleN)
#     e.append(Paragraph('Tri - temperatura budynku nr i'),styleN)
#     e.append(Paragraph('Thi - temperatura kaloryferów w budynku nr i'),styleN)
#     e.append(Paragraph('To - temperatura otoczenia'),styleN)
#     
    data2 = []
    data2.append(["Data", "Tzm", "Tpm", "Tzco", "Tpco", "Tr1", "Th1", "Tr2", "Th2", "To"])
    s = len(data_DB)
    for i in range(s):
        temp = data_DB[i]
        row = []
        row.append(str(((temp['date']).strftime('%Y-%m-%d %H:%M:%S'))))
        row.append(str(temp['Tzm']))
        row.append(str(temp['Tpm']))
        row.append(str(temp['Tzco']))
        row.append(str(temp['Tpco']))
        row.append(str(temp['Tr1']))
        row.append(str(temp['Th1']))
        row.append(str(temp['Tr2']))
        row.append(str(temp['Th2']))
        row.append(str(temp['To']))
        data2.append(row)
        
    t = Table(data2,[40*mm, 15*mm, 15*mm, 15*mm, 15*mm, 15*mm, 15*mm, 15*mm,15*mm, 15*mm],repeatRows=1)
    w,h = A4
#     a,b = t.wrapOn(plik, w,h)
#     data.drawOn(plik,15, h-10)
#     t.drawOn(plik,(w-a)/2, h-b-150)
#     plik.showPage()
#     plik.save()
    
    e.append(t)
    plik.build(e)
    
    