import django
import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "kss_projekt.settings")
django.setup()

from wizualizacja.models import Measurement

def delete_all_in_DB():
    Measurement.objects.all().delete()

delete_all_in_DB()