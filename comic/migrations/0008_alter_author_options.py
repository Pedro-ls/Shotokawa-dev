# Generated by Django 4.2.3 on 2023-10-19 23:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('comic', '0007_author_functions'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='author',
            options={'ordering': ['name', 'description', 'photo', 'functions']},
        ),
    ]
