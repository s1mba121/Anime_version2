# Generated by Django 4.1.7 on 2023-05-26 12:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_list_date_list_title'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='list',
            name='date',
        ),
    ]
