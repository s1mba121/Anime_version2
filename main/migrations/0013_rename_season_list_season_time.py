# Generated by Django 4.1.7 on 2023-06-14 11:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0012_list_season'),
    ]

    operations = [
        migrations.RenameField(
            model_name='list',
            old_name='season',
            new_name='season_time',
        ),
    ]