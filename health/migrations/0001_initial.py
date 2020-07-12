# Generated by Django 3.0.8 on 2020-07-11 17:01

import django.core.validators
from django.db import migrations, models
import health.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_activity', models.DateTimeField(auto_now=True, verbose_name='Activity')),
                ('uuid', models.UUIDField(default=health.models.generateUUID, editable=False, unique=True)),
                ('unit', models.TextField(help_text='Enterprise', max_length=10, verbose_name='Enterprise')),
                ('name', models.TextField(help_text='name', max_length=150, verbose_name='Name')),
                ('cc', models.PositiveIntegerField(default=0, help_text='identificacion', validators=[django.core.validators.MinValueValidator(0)], verbose_name='cc')),
                ('city', models.TextField(help_text='name', max_length=150, verbose_name='Name')),
                ('department', models.TextField(help_text='name', max_length=150, verbose_name='Name')),
                ('job_name', models.TextField(help_text='name', max_length=350, verbose_name='Name')),
                ('state', models.TextField(help_text='name', max_length=100, verbose_name='Name')),
            ],
            options={
                'ordering': ['name'],
            },
        ),
    ]