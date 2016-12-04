import django
import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "kss_projekt.settings")
django.setup()

from wizualizacja.models import Measurement
from datetime import timedelta
import random
from django.utils import timezone
import time
#from kss_projekt import settings


def send_data_to_DB():
#    os.environ['DJANGO_SETTINGS_MODULE'] = 'kss_projekt.settings'

    
    for i in range(10000):
        
        a = random.randint(-5,5)
        b = random.randint(-5,5)
        c = random.randint(-5,5)
#         h_r = random.randint(1,20)
#         d_r = random.randint(1,20)
        hours = timedelta(hours = 1)
#         days = timedelta(days = d_r)
        
        q = Measurement(Fzm = 100 - c,Tzm = 50 + a ,Tpm = 35 + b,Tzco = 45 +a,Tpco = 35 + c,Tpco1 = 50 + b, Tr1 = 24 + c,Tpco2 = 50 - b, Tr2 = 24 - c, Tpco3 = 50 + c - b, Tr3 = 24 - c + b,To=20+c,date = i)#date = timezone.now() +i*hours, To = 20 + c)
        
        q.save()
        time.sleep(1)
        

send_data_to_DB()
    