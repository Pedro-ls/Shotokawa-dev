# Generated by Django 4.2.3 on 2023-10-04 18:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comic', '0003_alter_mylist_user_alter_readcomics_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='comic',
            name='image_title',
            field=models.ImageField(null=True, upload_to='image_titles'),
        ),
    ]
