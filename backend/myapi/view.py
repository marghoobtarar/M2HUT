from django.http import HttpResponse
# from django.views.generic import View
from rest_framework.views import APIView
import numpy as np
import math

from myapi.utils import render_to_pdf  # created in step 4
from datetime import datetime
from UserAuth.models import User
from UserAuth.serializer import UserCreateSerializer

from adminside.models import (WorkLogsModel,
                             WorkLogsDetailsModel)
from adminside.serializer import (WorkLogDetailsSerilizer,
                                  WorkLogSerilizer)
from easy_pdf.views import PDFTemplateView
from user.views import getUser
import pandas as pd
from django.utils.timezone import datetime #important if using timezones


class GeneratePDF(PDFTemplateView):
    def get(self, request, pk):
        today = datetime.today()
        date = datetime.strptime(pk ,'%Y-%m-%d') 

        admin = getUser(request)
        userId = User.objects.values('id').filter(admin_id = admin)
        user_data = User.objects.values('id', 'first_name', 'last_name',
                                        'passport','cell').filter(admin_id = admin).order_by('id')
                                        
        df = pd.DataFrame(userId)
        userId = df.values
        userId = np.concatenate((userId),axis=0)
        work_log_details = WorkLogsModel.objects.values('created_at','user_id').filter(created_at__year=date.year,
                                created_at__month=date.month,
                                created_at__day=date.day,
                                user_id__in = userId
                                       
                                ).order_by('user_id') 
        i = 0
        data=[]
        for dat in work_log_details:
            
            if(work_log_details[i]['user_id'] == user_data[i]['id']):
                work_log_details[i]['tid'] = i + 1
                concat = work_log_details[i].copy()
                concat.update(user_data[i]) 
                data.append(concat)
                i+=1
            
        # print(data)
        pdf = render_to_pdf('other/pdf/hello.html',{
                    'data':data,
                    'time':datetime.time(today),
                    'date_period':
                        datetime.today().strftime('%Y/%m/%d')+' - '+datetime.today().strftime('%Y/%m/%d')} )

        template_name = 'other/pdf/hello.html'
        return HttpResponse(pdf, content_type='application/pdf')



class GeneratePDFMonth(PDFTemplateView):
    def get(self, request, pk):
        today = datetime.today()
        date = datetime.strptime(pk ,'%Y-%m-%d') 

        admin = getUser(request)
        userId = User.objects.values('id').filter(admin_id = admin)
        user_data = User.objects.values('id', 'first_name', 'last_name',
                                        'passport','cell').filter(admin_id = admin).order_by('id')
        # print('***********user data', user_data)
        df = pd.DataFrame(userId)
        userId = df.values
        userId = np.concatenate((userId),axis=0)
        work_log_details = WorkLogsModel.objects.values('created_at','user_id').filter(created_at__year=date.year,
                                created_at__month=date.month,
                                user_id__in = userId
                                       
                                ).order_by('user_id') 
        # print('***********work log data', work_log_details)

        
        data=[]
        i = 0
        for dat in user_data:
            for work_details in  work_log_details:          
                if(work_details['user_id'] == dat['id']):
                    work_details['tid'] = i + 1
                    concat = work_details.copy()
                    concat.update(dat) 
                    data.append(concat)
                    i += 1
                    
            
        # print(data)
        pdf = render_to_pdf('other/pdf/hello.html',{
                                'data':data,
                                'time':datetime.time(today),
                                'date_period':str(date.month) +'/'+ str(date.year)
                               } )

        template_name = 'other/pdf/hello.html'
        return HttpResponse(pdf, content_type='application/pdf')


