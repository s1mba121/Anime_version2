# Generated by Django 4.1.7 on 2023-06-15 13:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0017_rename_sorting_list_sorting_anime'),
    ]

    operations = [
        migrations.AddField(
            model_name='list',
            name='necessarily',
            field=models.BooleanField(default=True),
        ),
    ]
