from django.db import models
from django.contrib.auth.base_user import BaseUserManager, AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.db.models.deletion import CASCADE
from UserAuth.models import User
import datetime
from django.utils import timezone
# from django import forms



class WorkLogsBreakModel(models.Model):
    name = models.CharField(max_length = 300,
                            null=True,
                            help_text = 'this is types of break defined by the admin'
                            )
    created_at = models.DateTimeField(default=timezone.now,
                                        blank=True)
    
    updated_at = models.DateTimeField(default=timezone.now,
                                        blank=True)                                                           
    admin_id = models.ForeignKey(User, 
                                null=True,
                                on_delete=models.CASCADE, 
                                related_name='User.id+',
                                help_text='model for the work logs'
                                )

class WorkLogsModel(models.Model):
    user_id = models.ForeignKey(User, 
                                null=True,
                                on_delete=models.CASCADE, 
                                related_name='User.id+',
                                help_text='model for the work logs'
                                )
    created_at = models.DateTimeField(default=timezone.now,
                                        blank=True)
    end_at = models.DateTimeField(default=timezone.now,
                                        blank=True)
    
    total_works_hours = models.CharField(null=True,
                                        max_length=300,
                                        blank=True)
    total_break_time = models.CharField(
                                        max_length=300,
                                        null=True,
                                        blank=True)
    

class WorkLogsDetailsModel(models.Model):

    worklog_id = models.ForeignKey(WorkLogsModel,
                                null=True,
                                on_delete=models.CASCADE, 
                                related_name='WorkLogsModel.id+',
                                help_text='model for the work logs'
                                )

    captured_image = models.ImageField(upload_to = 'work_log_images',  null=True)
    address = models.CharField(max_length = 300,
                                null = True,
                                help_text = 'this is current address of work log'
                                )
    longitude = models.FloatField(null=True,
                                help_text = 'this is current latitude of work log'
                                )
    latitude = models.FloatField(null=True,
                                help_text = 'this is current longitute of work log'
                                )


    work_log_break_id =  models.ForeignKey(WorkLogsBreakModel, 
                                            null=True,
                                            on_delete = models.CASCADE, 
                                            related_name = 'WorkLogsBreakModel.id+',
                                            help_text = 'model for the work logs break'
                                            )  
    worklog = (
            ( 1 ,'CLOCK_IN'),
            ( 2 ,'CLOCK_OUT'),
            ( 3 ,'BREAK_IN'),
            ( 4 ,'BREAK_OUT')

          
        )
    worklog_type= models.CharField( max_length=20,  
                                    choices=worklog, 
                 
                                    blank=True, 
                                    default=1,
                
                                    help_text='clock in type' )
    created_at = models.DateTimeField(default=timezone.now,
                                        blank=True)
 
class NoticesModel(models.Model):
    admin_id = models.ForeignKey(User,
                                null=True,
                                on_delete=models.CASCADE, 
                                related_name='User.id+',
                                help_text= 'admin id will be displayed'
                                )
    # date = models.DateTimeField(default=timezone.now,
    #                                     blank=True)
    author = models.CharField(
                                        max_length=300,
                                        null=True,
                                        blank=True)
    image = models.ImageField(upload_to = 'noticesimage',  null=True)
    draft = models.BooleanField(default=False, null= True) 
    publish = models.BooleanField(default=False, null= True) 
    heading = models.CharField(
                                        max_length=300,
                                        null=True,
                                        blank=True)
    description = models.CharField(
                                        max_length=300,
                                        null=True,
                                        blank=True)
    created_at = models.DateTimeField(default=timezone.now,
                                        blank=True)
    updated_at = models.DateTimeField(default=timezone.now,
                                        blank=True)

