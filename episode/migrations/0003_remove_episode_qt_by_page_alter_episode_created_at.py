# Generated by Django 4.2.3 on 2023-10-31 14:46

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('episode', '0002_episode_created_at'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='episode',
            name='qt_by_page',
        ),
        migrations.AlterField(
            model_name='episode',
            name='created_at',
            field=models.DateTimeField(auto_created=True, default=datetime.datetime(2023, 10, 31, 14, 46, 5, 689991, tzinfo=datetime.timezone.utc)),
        ),
    ]
