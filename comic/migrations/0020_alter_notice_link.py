# Generated by Django 4.2.3 on 2023-11-07 17:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comic', '0019_notice_link'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notice',
            name='link',
            field=models.URLField(blank=True, null=True),
        ),
    ]