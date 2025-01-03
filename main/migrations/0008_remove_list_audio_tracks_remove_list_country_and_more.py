# Generated by Django 4.1.7 on 2023-06-09 08:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_remove_list_bg_remove_list_description_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='list',
            name='audio_tracks',
        ),
        migrations.RemoveField(
            model_name='list',
            name='country',
        ),
        migrations.RemoveField(
            model_name='list',
            name='director',
        ),
        migrations.RemoveField(
            model_name='list',
            name='premiere',
        ),
        migrations.RemoveField(
            model_name='list',
            name='subtitles',
        ),
        migrations.AddField(
            model_name='list',
            name='bg',
            field=models.ImageField(default='Ошибка', upload_to='bg/'),
        ),
        migrations.AddField(
            model_name='list',
            name='description',
            field=models.TextField(default='Пусто'),
        ),
        migrations.AlterField(
            model_name='list',
            name='image',
            field=models.ImageField(upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='list',
            name='title',
            field=models.CharField(default='Ошибка', max_length=40),
        ),
    ]
