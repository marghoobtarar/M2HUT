# Generated by Django 2.2 on 2021-03-01 11:36

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.db.models.manager
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0011_update_proxy_permissions'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('email', models.EmailField(max_length=254, null=True, unique=True)),
                ('is_staff', models.BooleanField(default=False, null=True)),
                ('first_name', models.CharField(blank=True, max_length=30, null=True)),
                ('last_name', models.CharField(blank=True, max_length=30, null=True)),
                ('passport', models.CharField(blank=True, max_length=30, null=True)),
                ('dob', models.CharField(blank=True, max_length=30, null=True)),
                ('phone', models.CharField(blank=True, max_length=30, null=True)),
                ('cell', models.CharField(blank=True, max_length=30, null=True)),
                ('address', models.CharField(blank=True, max_length=360, null=True)),
                ('zip_code', models.CharField(blank=True, max_length=30, null=True)),
                ('country', models.CharField(blank=True, max_length=30, null=True)),
                ('trainingInstitute', models.CharField(blank=True, max_length=30, null=True)),
                ('institutePhone', models.CharField(blank=True, max_length=30, null=True)),
                ('facilitatorName', models.CharField(blank=True, max_length=30, null=True)),
                ('institutionAccount', models.CharField(blank=True, max_length=30, null=True)),
                ('instituteAddress', models.CharField(blank=True, max_length=30, null=True)),
                ('instituteCity', models.CharField(blank=True, max_length=30, null=True)),
                ('instituteZip', models.CharField(blank=True, max_length=30, null=True)),
                ('instituteCountry', models.CharField(blank=True, max_length=30, null=True)),
                ('registerName', models.CharField(blank=True, max_length=30, null=True)),
                ('companyName', models.CharField(blank=True, max_length=30, null=True)),
                ('accountStatus', models.BooleanField(default=False)),
                ('gender', models.CharField(blank=True, choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')], default='Male', help_text='gender', max_length=2)),
                ('email_verified_at', models.DateTimeField(blank=True, default=django.utils.timezone.now)),
                ('created_at', models.DateTimeField(blank=True, default=django.utils.timezone.now)),
                ('updated_at', models.DateTimeField(blank=True, default=django.utils.timezone.now)),
                ('city', models.CharField(blank=True, max_length=30, null=True)),
                ('image', models.ImageField(null=True, upload_to='user_image')),
                ('username', models.CharField(max_length=150, null=True, unique=True)),
                ('is_active', models.BooleanField(default=True)),
                ('admin_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='User', to=settings.AUTH_USER_MODEL)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
            managers=[
                ('object', django.db.models.manager.Manager()),
            ],
        ),
    ]
