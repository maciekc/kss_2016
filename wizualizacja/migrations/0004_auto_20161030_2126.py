# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-10-30 20:26
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wizualizacja', '0003_auto_20161029_1640'),
    ]

    operations = [
        migrations.AddField(
            model_name='measurement',
            name='Th',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='measurement',
            name='Tr',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='measurement',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2016, 10, 30, 21, 26, 14, 985000), verbose_name='data pomiaru'),
        ),
    ]
