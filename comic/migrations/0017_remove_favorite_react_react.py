# Generated by Django 4.2.3 on 2023-11-02 22:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rest', '0003_client_photo'),
        ('comic', '0016_favorite_remove_like_client_remove_like_comic_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='favorite',
            name='react',
        ),
        migrations.CreateModel(
            name='React',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('react', models.CharField(max_length=7)),
                ('client', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='rest.client')),
                ('comic', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='comic.comic')),
            ],
        ),
    ]
