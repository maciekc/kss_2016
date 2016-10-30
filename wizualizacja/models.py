from __future__ import unicode_literals

from django.db import models
from datetime import datetime
# Create your models here.

class Measurement(models.Model):
    Tzm = models.IntegerField(default = 0)  # temp wody z elektrocieplowni
    Tpm = models.IntegerField(default = 0)  # temp wody powrotnej
    Tzco = models.IntegerField(default = 0) # temp wody wyplywajacej z wymiennika do budynkow
    Tpco = models.IntegerField(default = 0) # temp wody po powrocie z budynkow
    Th = models.IntegerField(default = 0)   # Temperatura kaloryferow
    Tr = models.IntegerField(default = 0)   # Temperatura budynku
    date = models.DateTimeField('data pomiaru',default = datetime.now())
