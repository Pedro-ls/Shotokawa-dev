# Generated by Django 4.2.3 on 2023-11-02 20:00

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('episode', '0016_alter_episode_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='episode',
            name='created_at',
            field=models.DateTimeField(auto_created=True, default=datetime.datetime(2023, 11, 2, 20, 0, 38, 887753, tzinfo=datetime.timezone.utc)),
        ),
    ]
