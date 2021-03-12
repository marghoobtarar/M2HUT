# Generated by Django 2.2 on 2021-03-12 14:59

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('adminside', '0008_auto_20210312_1200'),
    ]

    operations = [
        migrations.CreateModel(
            name='SuspensionEmailModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('heading', models.CharField(max_length=300, null=True)),
                ('description', models.CharField(max_length=2000, null=True)),
                ('created_at', models.DateTimeField(blank=True, default=django.utils.timezone.now)),
                ('updated_at', models.DateTimeField(blank=True, null=True)),
                ('admin_id', models.ForeignKey(help_text='model for the work logs', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='User.id+', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='RegisterEmailModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('heading', models.CharField(max_length=300, null=True)),
                ('description', models.CharField(max_length=2000, null=True)),
                ('created_at', models.DateTimeField(blank=True, default=django.utils.timezone.now)),
                ('updated_at', models.DateTimeField(blank=True, null=True)),
                ('admin_id', models.ForeignKey(help_text='model for the work logs', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='User.id+', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
