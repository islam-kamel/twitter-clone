from django.urls import path

from .views import (
    TweetView,
    CreateTweetView,
    DeleteTweetView,
    TweetByUsernameView,
    RepliesListView,
    TweetLikeView,
    RepliesCreateOrDeleteView,
    ReplyLikeView,
    CommentView,
    CreateCommentView,
    TweetByDate,
)

app_name = 'tweet'

urlpatterns = [
    path('', TweetView.as_view(), name="tweet-list"),
    path('comment', CreateCommentView.as_view(), name='comment-view'),
    path('comment/<str:tweet_id>', CommentView.as_view(), name='comment-view'),
    path('create', CreateTweetView.as_view(), name="crate-tweet"),
    path('replies/<str:username>', RepliesListView.as_view(), name='replies-filter-by-username'),
    path('retweet/like/<str:retweet_id>', ReplyLikeView.as_view()),
    path('retweet/<str:tweet_id>', RepliesCreateOrDeleteView.as_view()),
    path('remove/<str:tweet_id>', DeleteTweetView.as_view(), name="delete-tweet"),
    path('like/<str:tweet_id>', TweetLikeView.as_view()),
    path('<str:username>', TweetByUsernameView.as_view(), name="tweet-filter-by-username"),
    path('statstic/<str:from_date>/<str:to>', TweetByDate.as_view())
]
