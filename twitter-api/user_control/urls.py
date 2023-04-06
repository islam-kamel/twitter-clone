
from django.urls import path
from . import views


urlpatterns = [
    path('register', views.RegisterView.as_view()),
    path('profile/<str:username>', views.UserProfileView.as_view()),
    path('current-user', views.UserIdentityView.as_view()),
    path('is_auth', views.ValidToken.as_view())
]
