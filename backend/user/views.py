from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status, generics
from django.db.models import Sum, Count, Avg
from django.http import HttpResponse
from django.conf import settings
from operator import itemgetter
import os
from django.utils.timezone import datetime #important if using timezones
import datetime as dt
import math
# from datetime import datetime, date

from django.core.exceptions import ValidationError
from django.db.models import Q
from django.utils import timezone
import pandas as pd
import time
# jwt decoder
from rest_framework_jwt.utils import jwt_decode_handler
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework_jwt.serializers import VerifyJSONWebTokenSerializer
# custom decorators
# from .decorators import authors_only, MyDecorator

# import serilizers
from adminside.serializer import CustomTokenObtainPairSerializer
# import models
from UserAuth.models import User
from adminside.models import (WorkLogsModel, 
                             WorkLogsDetailsModel,
                             WorkLogsBreakModel,
                             NoticesModel)

from adminside.serializer import (WorkLogSerilizer, 
                                 WorkLogDetailsSerilizer,
                                 WorkLogsBreakSerilizer,
                                 NoticesSerializer)

class CustomTokenObtainPairView(TokenObtainPairView):
    # Replace the serializer with your custom
    serializer_class = CustomTokenObtainPairSerializer

# ******************************* Work logs***********************#
class WorkLogs(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        try:
            today = datetime.today()

            return Response({'messag':'Work Log list retrieved successfully.',
                            'work_logs':
                            [ WorkLogSerilizer(dat).data for dat in 
                                WorkLogsModel.objects.filter(user_id= getUser(request)) ]},
                                status=status.HTTP_200_OK)
        except ValidationError as v:
            return Response ({'message':'This is an error is fetching logs',
                                'error':v},
                               status=status.HTTP_400_BAD_REQUEST )
    def post(self, request):
        payload = request.data
        today = datetime.today()
        data={}
        try:
            _mutable = payload._mutable
            payload._mutable = True
            payload['user_id'] = getUser(request)
            isExist = [WorkLogSerilizer(dat).data for dat in WorkLogsModel.objects.filter(created_at__year=today.year,
                                       created_at__month=today.month,
                                       created_at__day=today.day, user_id = payload['user_id'])]
            if not isExist:

                payload._mutable = _mutable
                serilizer = WorkLogSerilizer(data = payload)
                if(serilizer.is_valid()):
                    
                    serilizer.save()
                    worklog_id = serilizer.data['id']
                    _mutable = payload._mutable
                    payload._mutable = True
                    payload['worklog_id'] = serilizer.data['id']
                    payload['work_log_break_id'] = None

                    payload._mutable = _mutable
                    detail = WorkLogDetailsSerilizer(data = payload)
                    if(detail.is_valid()):
                        
                        detail.save()

                    # print(serilizer.data)
                    return Response(
                        {'message':"Work log created successfully",
                        'work_log':serilizer.data,
                        'work_log_details':detail.data},
                        status = status.HTTP_201_CREATED )
                else:
                    
                    # if()
                    return Response(
                            {'message':"Data is not serilized form"},
                            status = status.HTTP_400_BAD_REQUEST
                            )
            else:
                if(int( payload['worklog_type'])== 2):

                    # print('break id', isExist[0]['work_log_break_id'])

                    # payload['end_time'] = datetime.today()
                    # detail_worklog = WorkLogsDetailsModel.objects.get(
                    #                                 worklog_id = isExist[0]['id'])
                    # current_data_worklog_details = WorkLogDetailsSerilizer(detail_worklog).data
                    if(WorkLogsDetailsModel.objects.filter(created_at__year=today.year,
                                       created_at__month=today.month,
                                       created_at__day=today.day,
                                       worklog_id =isExist[0]['id'],
                                       worklog_type = 2).exists()):
                         return Response(
                                    {
                                        'error':"you have already clocked out",
                                    },
                                    status = status.HTTP_400_BAD_REQUEST )
                    else:
                        
                        created_at = isExist[0]['created_at']
                        payload['worklog_id'] = isExist[0]['id']
                        payload['work_log_break_id'] = None

                        payload['total_works_hours']= str(datetime.today() - getHours(created_at))
                        payload._mutable = _mutable
                        update_worklog = WorkLogSerilizer( WorkLogsModel.objects.get(id = isExist[0]['id']),data = payload)

                        if(update_worklog.is_valid()):
                            update_worklog.save()
                            serializer = WorkLogDetailsSerilizer( data = payload )

                            if serializer.is_valid():
                                serializer.save()
                                return Response(
                                    {'message':"Work log break out successfully",
                                    'work_log':update_worklog.data,
                                    'work_log_details': serializer.data},
                                    status = status.HTTP_201_CREATED )
                        else:
                            return Response(
                                {'message':"Data is not serilized form"},
                                status = status.HTTP_400_BAD_REQUEST
                                )
                    
                elif(int( payload['worklog_type'])== 3 ):
                    
                    if(WorkLogsDetailsModel.objects.filter(created_at__year=today.year,
                                       created_at__month=today.month,
                                       created_at__day=today.day,
                                       worklog_id =isExist[0]['id'],
                                       worklog_type = 2).exists()):
                         return Response(
                                    {
                                        'error':"you have already clocked out",
                                    },
                                    status = status.HTTP_400_BAD_REQUEST )
                    else:
                        payload['worklog_id'] = isExist[0]['id']
                        payload._mutable = _mutable
                        serializer = WorkLogDetailsSerilizer( data = payload )
                        if serializer.is_valid():
                            serializer.save()
                            return Response(
                                {'message':"Work log break in successfully",
                                'work_log':isExist[0],
                                'work_log_details': serializer.data},
                                status = status.HTTP_201_CREATED )

                            
                        else:
                            return Response(
                                {'message':"Data is not serilized form"},
                                status = status.HTTP_400_BAD_REQUEST
                                )
                elif(int( payload['worklog_type'])== 4):
                    if_pre_obj = WorkLogDetailsSerilizer(
                                        WorkLogsDetailsModel.objects.filter(created_at__year=today.year,
                                       created_at__month=today.month,
                                       created_at__day=today.day,
                                       worklog_id =isExist[0]['id'],
                                       
                                       ).order_by('-created_at').first() ).data
                    print(if_pre_obj)
                    if(not if_pre_obj):
                        return Response(
                                    {
                                        'error':"you did not break in yet. ",
                                    },
                                    status = status.HTTP_400_BAD_REQUEST )
                    elif(if_pre_obj and if_pre_obj['worklog_type'] == 4 ):
                        return Response(
                                    {
                                        'error':"you have already break out ",
                                    },
                                    status = status.HTTP_400_BAD_REQUEST )
                    elif (not WorkLogsDetailsModel.objects.filter(created_at__year=today.year,
                                       created_at__month=today.month,
                                       created_at__day=today.day,
                                       worklog_id =isExist[0]['id'],
                                       worklog_type = 3).exists()):
                        return Response(
                                    {
                                        'error':"you have did not break in.",
                                    },
                                    status = status.HTTP_400_BAD_REQUEST )

                    elif(if_pre_obj['worklog_type'] == 3):
                        recent_break_in = WorkLogDetailsSerilizer( WorkLogsDetailsModel.objects.filter(
                                                        worklog_id = isExist[0]['id'],
                                                        work_log_break_id__isnull = False
                                                        ).order_by('-created_at').first()).data
                        previous_break_time = isExist[0]['total_break_time']
                        print('***************', recent_break_in, previous_break_time)
                        total_break_time = datetime.today() - getHours(str(recent_break_in['created_at']))
                        print('***************', total_break_time)

                        total_break_time = datetime.strptime(str(total_break_time),'%H:%M:%S.%f') 
                        total_break_time = math.ceil( math.ceil(total_break_time.second) + 
                                            total_break_time.minute*60 + 
                                            total_break_time.hour*3600)
                       
                        if previous_break_time:
                            # print('previous break time')
                            previous_break_time = datetime.strptime(str(previous_break_time),'%H:%M:%S')

                            previous_break_time = math.ceil( previous_break_time.second + 
                                                    previous_break_time.minute*60 +
                                                    previous_break_time.hour*3600)
                            total_break_time = total_break_time + previous_break_time


                            
                        payload['total_break_time'] = str(datetime.time( 
                                                           datetime.strptime(str(dt.timedelta(seconds = total_break_time)) ,'%H:%M:%S') ))
                        payload['end_at'] = datetime.today()
                        # print(recent_break_in)
                        # break_time = recent_break_in['created_at']
                        # print('**************** break time', break_time)
                        payload['worklog_id'] = isExist[0]['id']

                        payload._mutable = _mutable
                        update_worklog = WorkLogSerilizer( WorkLogsModel.objects.get(id = isExist[0]['id']),data = payload)
                        # print(update_worklog)
                        if(update_worklog.is_valid()):
                            update_worklog.save()
                            serializer = WorkLogDetailsSerilizer( data = payload )

                            if serializer.is_valid():
                                serializer.save()
                                return Response(
                                    {'message':"Work log break out successfully",
                                    'work_log':update_worklog.data,
                                    'work_log_details': serializer.data},
                                    status = status.HTTP_201_CREATED )
            
                        else:
                            return Response(
                                {'message':"Data is not serilized form"},
                                status = status.HTTP_400_BAD_REQUEST
                                )
                    
                else:
                    return Response({'message':'Today data is already exist'},
                                    status=status.HTTP_409_CONFLICT)

        except ValidationError as v:
            print("validation error", v)


class ManageWorkLogs(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request):
        try:
            data_worklogs = WorkLogsModel.objects.get(id=pk)
        except (KeyError, WorkLogsModel.DoesNotExist):
            return Response('Data not found', status=status.HTTP_404_NOT_FOUND)
        else:
            serializer = WorkLogSerilizer(data_worklogs)
            return Response({'message':'get the work log',
                             'work_logs' : serializer.data}, 
                                status=status.HTTP_200_OK)

    def put(self, request, pk):

        payload = request.data

        try:
            home = PitStopModel.objects.get(id=pk)
        except (KeyError, PitStopModel.DoesNotExist):

            serializer = PitStopSerializer(data=payload)

            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        else:

            serializer = PitStopSerializer(home, data=payload)

            if serializer.is_valid():
                serializer.save()

                parser_classes = (MultiPartParser, FormParser)

                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # def delete(self, request, pk):

    #     try:
    #         home = PitStopModel.objects.get(id=pk)
    #     except (KeyError, PitStopModel.DoesNotExist):
    #         return Response('Data not found', status=status.HTTP_404_NOT_FOUND)
    #     else:
    #         home.delete()
    #         deleteLocation(pk)
    #         return Response('Data deleted', status=status.HTTP_200_OK)
    #     # return Response('Data deleted', status=status.HTTP_200_OK)

class WorkLogsStatus(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        try:
            today = datetime.today()
            user_id = getUser(request)

            worklogs = [WorkLogSerilizer(dat).data for dat in WorkLogsModel.objects.filter(
                                       created_at__year=today.year,
                                       created_at__month=today.month,
                                       created_at__day=today.day, user_id = user_id)]
            print(worklogs)
            if worklogs:
                print('today worklog enabled')
                worklog_type = WorkLogDetailsSerilizer( WorkLogsDetailsModel.objects.filter(
                                                    worklog_id = worklogs[0]['id'] ).
                                                    order_by('-created_at').first()).data
                print(worklog_type)
                print(worklog_type['worklog_type'])
                if(worklog_type['worklog_type']==1):
                    new_status = 3
                elif(worklog_type['worklog_type']==3):
                    new_status = 4
                elif(worklog_type['worklog_type']==4):
                    new_status = 2
                else:
                    new_status = 1
                
                return Response({'messag':'Work Log status retrieved successfully.',
                                'status':new_status},
                                    status=status.HTTP_200_OK)
            else:
                return Response({'messag':'Work Log status retrieved successfully.',
                                'status':1},
                                    status=status.HTTP_200_OK)

        except ValidationError as v:
            return Response ({'message':'This is an error is fetching logs',
                                'error':v},
                               status=status.HTTP_400_BAD_REQUEST )








# ******************************* Break logs***********************#







class Notices(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        try:
            getAdmin = User.objects.values('admin_id__id').get(id=getUser(request))
            print('the admin is here',getAdmin['admin_id__id'])
            notices =  [ NoticesSerializer(dat).data for dat in 
                                NoticesModel.objects.filter(admin_id = getAdmin['admin_id__id']) ]
            return Response({'messag':'Notices retrieved successfully.',
                            'notices': notices
                            },
                                status=status.HTTP_200_OK)
        except ValidationError as v:
            return Response ({'message':'This is an error is fetching notices',
                                'error':v},
                               status=status.HTTP_400_BAD_REQUEST )


class WorkLogsBreakType(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        user = getUser(request)
        admin_id = User.objects.values('admin_id__id').get(id = user)
        try:

            return Response({'messag':'Break type retieve successfully.',
                            'notices':
                            [ WorkLogsBreakSerilizer(dat).data for dat in 
                                WorkLogsBreakModel.objects.filter(admin_id = admin_id['admin_id__id']) ]},
                                status=status.HTTP_200_OK)
        except ValidationError as v:
            return Response ({'message':'This is an error is fetching break',
                                'error':v},
                               status=status.HTTP_400_BAD_REQUEST )



# ****************** get the user from the token**************
def getUser(request):
    token = request.headers.get('Authorization', " ").split(' ')[1]
    decoded_payload = jwt_decode_handler(token)

    return decoded_payload['user_id']

# ************************ formated the date*************
def getHours(hours):
    date = [hours]
    df = pd.DataFrame(date, columns = ['Date']) 
    df['Date'] = pd.to_datetime(df['Date']).dt.strftime('%m/%d/%Y %H:%M:%S.%f')
    date = datetime.strptime(df['Date'][0],'%m/%d/%Y %H:%M:%S.%f')
    return date
                   
