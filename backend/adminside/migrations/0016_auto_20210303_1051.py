# Generated by Django 2.2 on 2021-03-03 10:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminside', '0015_auto_20210302_1528'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='worklogsmodel',
            name='total_break_time',
        ),
        migrations.AddField(
            model_name='worklogsdetailsmodel',
            name='total_break_time',
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
    ]
