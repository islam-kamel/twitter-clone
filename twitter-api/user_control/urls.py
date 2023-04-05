
from django.urls import path
from . import views


urlpatterns = [
    path('register', views.RegisterView.as_view()),
    path('info/<str:username>', views.UserInfoView.as_view()),
    path('is_auth', views.ValidToken.as_view())
]
