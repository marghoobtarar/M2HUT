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
from django.core.exceptions import ValidationError
from django.db.models import Q
from django.utils import timezone
import pandas as pd
# jwt decoder
from rest_framework_jwt.utils import jwt_decode_handler
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework_jwt.serializers import VerifyJSONWebTokenSerializer

# import serilizers
from .serializer import CustomTokenObtainPairSerializer
# import models
from UserAuth.models import User
from .models import (WorkLogsModel, 
                             WorkLogsDetailsModel,
                             WorkLogsBreakModel,
                             NoticesModel)

from .serializer import (WorkLogSerilizer, 
                                 WorkLogDetailsSerilizer,
                                 WorkLogsBreakSerilizer,
                                 NoticesSerializer)

from user.views import getUser

class FrontendAppView(APIView):
    """
    Serves the compiled frontend entry point (only works if you have run `yarn
    run build`).
    """

    def get(self, request):
        try:
            with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            logging.exception('Production build of app not found')
            return HttpResponse(
                """
                    This URL is only used when you have built the production
                    version of the app. Visit http://localhost:3000/ instead, or
                    run `yarn run build` to test the production version.
                    """,
                status=501,
            )


class Notices(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        try:

            return Response({'messag':'Work Log list retrieved successfully.',
                            'notices':
                            [ NoticesSerializer(dat).data for dat in 
                                NoticesModel.objects.filter(admin_id = getUser(request)) ]},
                                status=status.HTTP_200_OK)
        except ValidationError as v:
            return Response ({'message':'This is an error is fetching notices',
                                'error':v},
                               status=status.HTTP_400_BAD_REQUEST )
    def post(self, request):
        payload = request.data
        try:
            _mutable = payload._mutable
            payload._mutable = True
            payload['admin_id'] = getUser(request)
            
            payload._mutable = _mutable
            searilizer = NoticesSerializer(data = payload)
            if searilizer.is_valid():
                searilizer.save()
                print(searilizer.data)
            
            return Response({'message':'Notice has been added', 
                              'data':searilizer.data},
                                status=status.HTTP_201_CREATED)

        except ValidationError as v:
            print("validation error", v)

class WorkLogsBreakType(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        try:

            return Response({'messag':'Break type retieve successfully.',
                            'notices':
                            [ WorkLogsBreakSerilizer(dat).data for dat in 
                                WorkLogsBreakModel.objects.filter(admin_id = getUser(request)) ]},
                                status=status.HTTP_200_OK)
        except ValidationError as v:
            return Response ({'message':'This is an error is fetching break',
                                'error':v},
                               status=status.HTTP_400_BAD_REQUEST )
    def post(self, request):
        payload = request.data
        try:
            _mutable = payload._mutable
            payload._mutable = True
            payload['admin_id'] = getUser(request)
            
            payload._mutable = _mutable
            searilizer = WorkLogsBreakSerilizer(data = payload)
            if searilizer.is_valid():
                searilizer.save()
                print(searilizer.data)
            
            return Response({'message':'Break has been added', 
                              'data':searilizer.data},
                                status=status.HTTP_201_CREATED)

        except ValidationError as v:
            print("validation error", v)

class ManageWorkLogsBreakType(generics.UpdateAPIView):
    permission_classes = (IsAuthenticated,)

    queryset = WorkLogsBreakModel.objects.all()

    serializer_class = WorkLogsBreakSerilizer

