# Generated by Django 4.2.3 on 2023-11-01 21:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rest', '0003_client_photo'),
        ('comic', '0012_dislike_like_alter_comic_episodes_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='like',
            name='client',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='client', to='rest.client'),
        ),
        migrations.AddField(
            model_name='like',
            name='comic',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='comic', to='comic.comic'),
        ),
    ]
