from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from .views import APIHealthCheck


urlpatterns = [
    path('user/', include('user_control.urls')),
    path('tweet/', include('tweet_controller.urls')),
    path('api-health-check', APIHealthCheck.as_view(), name='api_health_check')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
