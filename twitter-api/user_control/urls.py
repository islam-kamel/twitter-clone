
from django.urls import path
from . import views


urlpatterns = [
    path('register', views.RegisterView.as_view()),
    path('profile/<str:username>', views.UserProfileView.as_view()),
    path('current-user', views.UserIdentityView.as_view()),
    path('is_auth', views.ValidToken.as_view()),
    path('follow/<str:username>', views.FollowOrUnFollowView.as_view()),
    path('suggestion-followings', views.SuggestionFollowings.as_view()),
    path('all', views.AllUserView.as_view()),
    path('statstic/<str:from_date>/<str:to>', views.UsersByDate.as_view())
]
