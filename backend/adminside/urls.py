from django.urls import path
from adminside import views

urlpatterns = [
    path('notices/',views.Notices.as_view(),
        name = "it will create notices and get them"),
    path('work-logs-break/',views.WorkLogsBreakType.as_view(),
        name = "it will create the break of logs"),
    
]
