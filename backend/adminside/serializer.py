from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from rest_framework.serializers import ModelSerializer, ReadOnlyField
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# user model
from django.contrib.auth.models import User

# other models
from .models import WorkLogsModel, WorkLogsDetailsModel, WorkLogsBreakModel, NoticesModel

# from .models import

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        
        data = super(CustomTokenObtainPairSerializer, self).validate(attrs)
        # Custom data you want to include
        data['message']="user authenticated successfully"
        data['access_token'] = data['access']
        data.pop('refresh')
        data.pop('access')
        data['user']= {}
        data['user']['id']=self.user.id
        data['user']['admin_id']=self.user.admin_id_id
        data['user']['email']=self.user.email
        data['user']['first_name']=self.user.first_name
        data['user']['last_name']=self.user.last_name
        data['user']['companyName']=self.user.companyName
        data['user']['registerName']=self.user.registerName

        if self.user.image:
            data['user']['image']=self.user.image
        else:
            data['user']['image']=None

        return data

# work log serilizer

class WorkLogSerilizer(serializers.ModelSerializer):
    class Meta:
        model = WorkLogsModel
        fields = ('id', 'user_id',
                   'created_at',
                   'end_at',
                   'total_works_hours',
                   'total_break_time'
                   )
    
    def create( self, validated_data):
        worklog = WorkLogsModel.objects.create(**validated_data)
        return worklog
    
    def update(self, instance, validated_data):
        for k, v in validated_data.items():
            setattr(instance, k, v)
            instance.save()
        return instance
class WorkLogDetailsSerilizer(serializers.ModelSerializer):
    class Meta:
        model = WorkLogsDetailsModel
        fields = ('id', 'worklog_id',
                   'address','captured_image',
                   'latitude','longitude',
                   'work_log_break_id',
                   'worklog_type',
                   'created_at'
                   )
    
    def create( self, validated_data):
        worklog = WorkLogsDetailsModel.objects.create(**validated_data)
        return worklog
    
    def update(self, instance, validated_data):
        for k, v in validated_data.items():
            setattr(instance, k, v)
            instance.save()
        return instance

class WorkLogsBreakSerilizer(serializers.ModelSerializer):
    class Meta:
        model = WorkLogsBreakModel
        fields = '__all__'
    
    def create(self, validated_data):
        breakLogs = WorkLogsBreakModel.objects.create(**validated_data)
        return breakLogs
    
    def update(self, instance, validated_data):
        for k, v in validated_data.items():
            setattr(instance, k, v)
            instance.save()
        return instance

class NoticesSerializer(serializers.ModelSerializer):
    class Meta:
        model = NoticesModel
        fields = ('id', 'created_at',
                   'updated_at',
                   'description',
                   'heading',
                   'publish',
                   'draft',
                   'image',
                   'author',
                   'admin_id'

                   )
    
    def create( self, validated_data):
        notices = NoticesModel.objects.create(**validated_data)
        return notices
    
    def update(self, instance, validated_data):
        for k, v in validated_data.items():
            setattr(instance, k, v)
            instance.save()
        return instance