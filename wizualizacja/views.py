from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from models import Measurement
import json
from django.template.defaultfilters import last
from datetime import timedelta, datetime, date, time
from django.core import serializers
from generate_Report import generateReport

dateOfBeginning = date(2017,04,03)

# Create your views here.
def index(request):
    return render(request,'index.html', {})

def update_data(request, buildingNo, timeUnit):
    request.session.set_expiry(0)
    if request.method == "GET":
        pres_number = Measurement.objects.count() #aktualna liczba pomiarow w bazie
        
        Tzm = []
        Tpm = []
        Tzco = []
        Tpco = []
        Tr = []
        Th = []
        To = []
        Fzm = []
        date = []
        ToWithDelay = []
            
            
        if 'prev_number' not in update_data.__dict__:
            update_data.prev_number = 0 
            update_data.building_no = 1
            update_data.data_to_plot = {} # dane do prezentacji
            
            
        diff = pres_number - update_data.prev_number
        update_data.prev_number = pres_number
        if diff > 0 or update_data.building_no != buildingNo:
            update_data.building_no = buildingNo
            temp_Tr = 'Tr' + str(buildingNo)
            temp_Th = 'Tpco' + str(buildingNo)
            date_last = Measurement.objects.last().date
            # if timeUnit =='day':
            #     time = timedelta(days = 1)
            # elif timeUnit == 'week':
            #     time = timedelta(days = 7)
            # elif timeUnit == 'month':
            #     time = timedelta(days =30)
            tm = 1
            if timeUnit =='day':
                tm = 86400
            elif timeUnit == 'week':
                tm = 7*86400
            elif timeUnit == 'month':
                tm = 30*86400

            new_date = date_last - tm
            if Measurement.objects.first().date <= new_date: 
                dataTemp = Measurement.objects.filter(date__range = (new_date,date_last)).values()
            else:
                dataTemp = Measurement.objects.all().values()

            size = len(dataTemp)
            index = max(0,size - 9601)

            divider = 1
            if timeUnit =='day':
                divider = 1 #96
            elif timeUnit == 'week':
                divider = 7 #672
            elif timeUnit == 'month':
                divider = 30 #2880

            data = []
            for i in range(0,size-1,divider):
                dataTemp[i]['date'] = datetime.combine(dateOfBeginning, time()) + timedelta(seconds = dataTemp[i]['date'])
                data.append(dataTemp[i])

            (ToWithDelay).append(int(dataTemp[index]['To']))

            size = len(data)

            for i in range(size):
                temp = data[i]
                (Tzm).append(int(temp['Tzm']))
                (Tpm).append(int(temp['Tpm']))
                (Tzco).append(int(temp['Tzco']))
                (Tpco).append(int(temp['Tpco']))
                (Tr).append(int(temp[temp_Tr]))
                (Th).append(int(temp[temp_Th]))
                (Fzm).append(int(temp['Fzm']))
                (To).append(int(temp['To']))
                (date).append((temp['date']).strftime('%Y-%m-%d %H:%M:%S'))

            update_data.data_to_plot = {'ToWithDelay':ToWithDelay, 'Fzm':Fzm,'Tzm':Tzm,'Tpm':Tpm,'Tzco':Tzco,'Tpco':Tpco, 'Th':Th, 'Tr':Tr, 'To':To, 'date':date}

        return JsonResponse(update_data.data_to_plot)

def update_building(request, buildingNo, timeUnit):
    return render(request,'index.html', {})
 
 
def generate_PDF(request, timeUnit):
    if request.method == 'GET':
        # if timeUnit =='day':
        #     time = timedelta(days = 1)
        # elif timeUnit == 'week':
        #     time = timedelta(days = 7)
        # elif timeUnit == 'month':
        #     time = timedelta(days =30)
        date_last = Measurement.objects.last().date
        if timeUnit =='all':
            data = Measurement.objects.all()
        else:
            tm = 1
            if timeUnit == 'day':
                tm = 2880
            elif timeUnit == 'week':
                tm = 7*2880
            elif timeUnit == 'month':
                tm = 30*2880
            new_date = date_last - tm
            data = Measurement.objects.filter(date__range = (new_date,date_last))

        size = len(data)

        generateReport(data.values(), dateOfBeginning)
        with open('dane.xml', 'w') as out:
            serializers.serialize("xml", data, stream = out)
        
        return HttpResponse("dane zapisane do pliku")
    return HttpResponse("blad !!!")
 
    
# def generate_PDF(request):
#     if request.method == 'GET':
#         okres = request.GET['okres']
#         date_last = Measurement.objects.last().date
#         if okres == 'tydzien':
#             #week = timedelta(days = 7)
#             week = timedelta(hours = 10)
#             new_date = date_last - week
#             y = new_date.year
#             m = new_date.month
#             d = new_date.day
#             data = Measurement.objects.filter(date__range = (new_date,date_last))
#             #data = Measurement.objects.all()
#         with open('dane.xml', 'w') as out:
#             serializers.serialize("xml", data, stream = out)
#         
#         return HttpResponse("dane zapisane do pliku")
#     return HttpResponse("blad !!!")
            
            
        
        
    