# Generated by Django 4.1.7 on 2023-06-15 13:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0013_rename_season_list_season_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='list',
            name='genre',
            field=models.CharField(default='all', max_length=20),
        ),
        migrations.AddField(
            model_name='list',
            name='studio',
            field=models.CharField(default='all', max_length=30),
        ),
        migrations.AlterField(
            model_name='list',
            name='season_time',
            field=models.CharField(default='all', max_length=8),
        ),
    ]
