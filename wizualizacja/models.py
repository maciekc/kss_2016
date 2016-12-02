from __future__ import unicode_literals

from django.db import models
from datetime import datetime
# Create your models here.

class Measurement(models.Model):
    Tzm = models.IntegerField(default = 0)  # temp wody z elektrocieplowni
    Tpm = models.IntegerField(default = 0)  # temp wody powrotnej
    Tzco = models.IntegerField(default = 0) # temp wody wyplywajacej z wymiennika do budynkow
    Tpco = models.IntegerField(default = 0) # temp wody po powrocie z budynkow
    #------------------------------------------------
    #budynek nr 1
    Th1 = models.IntegerField(default = 0)   # Temperatura kaloryferow
    Tr1 = models.IntegerField(default = 0)   # Temperatura budynku
    #----------------------------------------------------
    #budynek nr 2
    Th2 = models.IntegerField(default = 0)   # Temperatura kaloryferow
    Tr2 = models.IntegerField(default = 0)   # Temperatura budynku
    #----------------------------------------------------
    #budynek nr 3
    Th3 = models.IntegerField(default = 0)   # Temperatura kaloryferow
    Tr3 = models.IntegerField(default = 0)   # Temperatura budynku
    
    To = models.IntegerField(default = 0)   # Temperatura na zewnatrz
    date = models.DateTimeField('data pomiaru',default = datetime.now())
