# Generated by Django 4.2.3 on 2023-09-21 16:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Episode',
            fields=[
                ('id', models.BigAutoField(auto_created=True,
                 primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
                ('description', models.TextField()),
                ('num_pages', models.IntegerField()),
                ('qt_by_page', models.IntegerField()),
                ('slug', models.SlugField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='PageImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True,
                 primary_key=True, serialize=False, verbose_name='ID')),
                ('num_page', models.IntegerField()),
                ('photo', models.FileField(upload_to='Pages/')),
                ('pages', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE,
                 related_name='pages', to='episode.episode')),
            ],
        ),
    ]
