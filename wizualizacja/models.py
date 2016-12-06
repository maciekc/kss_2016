from __future__ import unicode_literals

from django.db import models
from datetime import datetime
# Create your models here.

class Measurement(models.Model):
    date = models.IntegerField('data pomiaru', primary_key=True ,default = 0)

    Tzm = models.FloatField(default = 0)  # temp wody z elektrocieplowni
    Tpm = models.FloatField(default = 0)  # temp wody powrotnej
    Tzco = models.FloatField(default = 0) # temp wody wyplywajacej z wymiennika do budynkow
    To = models.FloatField(default = 0)   # Temperatura na zewnatrz
    Fzm = models.FloatField(default = 0) # strumien wody wyplywajacej z glownego zaworu
    Tpco = models.FloatField(default = 0) # temp wody po powrocie z budynkow
    #------------------------------------------------
    #budynek nr 1
    Tpco1 = models.FloatField(default = 0)   # Temperatura kaloryferow
    Tr1 = models.FloatField(default = 0)   # Temperatura budynku
    #----------------------------------------------------
    #budynek nr 2
    Tpco2 = models.FloatField(default = 0)   # Temperatura kaloryferow
    Tr2 = models.FloatField(default = 0)   # Temperatura budynku
    #----------------------------------------------------
    #budynek nr 3
    Tpco3 = models.FloatField(default = 0)   # Temperatura kaloryferow
    Tr3 = models.FloatField(default = 0)   # Temperatura budynku