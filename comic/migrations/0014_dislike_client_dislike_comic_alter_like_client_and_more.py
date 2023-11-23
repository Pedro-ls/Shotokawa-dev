# Generated by Django 4.2.3 on 2023-11-01 21:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rest', '0003_client_photo'),
        ('comic', '0013_like_client_like_comic'),
    ]

    operations = [
        migrations.AddField(
            model_name='dislike',
            name='client',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='rest.client'),
        ),
        migrations.AddField(
            model_name='dislike',
            name='comic',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='comic.comic'),
        ),
        migrations.AlterField(
            model_name='like',
            name='client',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='rest.client'),
        ),
        migrations.AlterField(
            model_name='like',
            name='comic',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='comic.comic'),
        ),
    ]