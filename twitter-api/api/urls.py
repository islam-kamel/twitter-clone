from django.urls import path, include
from .views import APIHealthCheck


urlpatterns = [
    path('user/', include('user_control.urls')),
    path('api-health-check', APIHealthCheck.as_view(), name='api_health_check')
]
