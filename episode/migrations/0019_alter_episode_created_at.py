# Generated by Django 4.2.3 on 2023-11-07 15:54

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('episode', '0018_alter_episode_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='episode',
            name='created_at',
            field=models.DateTimeField(auto_created=True, default=datetime.datetime(2023, 11, 7, 15, 54, 51, 630597, tzinfo=datetime.timezone.utc)),
        ),
    ]
