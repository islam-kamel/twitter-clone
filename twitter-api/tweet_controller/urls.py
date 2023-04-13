from django.urls import path

from .views import TweetView, CreateTweetView, DeleteTweetView

app_name = 'tweet'

urlpatterns = [
    path('', TweetView.as_view(), name="tweet-list"),
    path('create', CreateTweetView.as_view(), name="crate-tweet"),
    path('remove/<str:tweet_id>', DeleteTweetView.as_view(), name="delete-tweet"),
]
