# Generated by Django 4.2.3 on 2023-11-07 15:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comic', '0017_remove_favorite_react_react'),
    ]

    operations = [
        migrations.AddField(
            model_name='comic',
            name='tag',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]
