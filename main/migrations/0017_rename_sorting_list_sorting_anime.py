# Generated by Django 4.1.7 on 2023-06-15 13:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0016_alter_list_sorting'),
    ]

    operations = [
        migrations.RenameField(
            model_name='list',
            old_name='sorting',
            new_name='sorting_anime',
        ),
    ]
