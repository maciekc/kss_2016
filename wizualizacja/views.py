from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from models import Measurement
import json
from django.template.defaultfilters import last
from datetime import timedelta, datetime, date
from django.core import serializers

# Create your views here.
def index(request):
    return HttpResponse("to ja maciek\n")

def update_data(request):
    request.session.set_expiry(0)
    if request.method == "GET":
        pres_number = Measurement.objects.count() #aktualna liczba pomairow w bazie
        if pres_number == 0:
            update_data.Tzm = []
            update_data.Tpm = []
            update_data.Tzco = []
            update_data.Tpco = []
            update_data.Tr = []
            update_data.Th = []
            
            update_data.date = []
            update_data.data_to_plot = {}
            
            
        if 'prev_number' not in update_data.__dict__:
            update_data.prev_number = 0 
            update_data.id = 0
            update_data.Tzm = []
            update_data.Tpm = []
            update_data.Tzco = []
            update_data.Tpco = []
            update_data.Tr = []
            update_data.Th = []
            update_data.date = []
            
            update_data.data_to_plot = {} # dane do prezentacji
            
        diff = pres_number - update_data.prev_number
        update_data.prev_number = pres_number
        if diff > 0:
            if update_data.id != 0:
                new_data2 = Measurement.objects.filter(id__range=(update_data.id + 1,update_data.id + diff)).values().order_by('date')
                update_data.id = update_data.id + diff
            else: 
                new_data = Measurement.objects.all().values()
                if len(new_data) > 0:
                    last = new_data[len(new_data)-1]['id']
                else:
                    last = 0     
                new_data2 = Measurement.objects.filter(id__range=(last-diff,last)).values().order_by('date')
                update_data.id = last
            for i in range(diff):
                temp = new_data2[i]
                
                # maksymalna liczba punktow na wykresie
                max_size = 50
                q = len(update_data.Tzm) + diff - max_size
                if q > 0: 
                    del(update_data.Tzm[:q])
                    del(update_data.Tpm[:q]) 
                    del(update_data.Tzco[:q])
                    del(update_data.Tpco[:q])
                    del(update_data.Tr[:q])
                    del(update_data.Th[:q])
                    
                    del(update_data.date[:q])
                
                (update_data.Tzm).append(int(temp['Tzm']))
                (update_data.Tpm).append(int(temp['Tpm']))
                (update_data.Tzco).append(int(temp['Tzco']))
                (update_data.Tpco).append(int(temp['Tpco']))
                (update_data.Tr).append(int(temp['Tr']))
                (update_data.Th).append(int(temp['Th']))
                (update_data.date).append((temp['date']).strftime('%Y-%m-%d %H:%M:%S'))    

                
#                 date_encoded = json.dumps(update_data.date)
                update_data.data_to_plot = {'Tzm':update_data.Tzm,'Tpm':update_data.Tpm,'Tzco':update_data.Tzco,'Tpco':update_data.Tpco, 'Th':update_data.Th, 'Tr':update_data.Tr, 'date':update_data.date}                                                        
                    
            #return render(request,'index.html', data_to_plot)
            #return HttpResponse(str(update_data.Tzm) + str(update_data.Tpm) + str(update_data.Tzco) + str(update_data.Tpco))
        #else:
            #return HttpResponse("nic nowego\n")
        #return render(request,'index.html', (update_data.data_to_plot))
        return JsonResponse(update_data.data_to_plot)
    
    
def generate_PDF(request):
    if request.method == 'GET':
        okres = request.GET['okres']
        date_last = Measurement.objects.last().date
        if okres == 'tydzien':
            #week = timedelta(days = 7)
            week = timedelta(hours = 10)
            new_date = date_last - week
            y = new_date.year
            m = new_date.month
            d = new_date.day
            data = Measurement.objects.filter(date__range = (new_date,date_last))
            #data = Measurement.objects.all()
        with open('dane.xml', 'w') as out:
            serializers.serialize("xml", data, stream = out)
        
        return HttpResponse("dane zapisane do pliku")
    return HttpResponse("blad !!!")
            
            
        
        
    