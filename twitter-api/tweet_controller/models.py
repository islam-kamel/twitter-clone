from django.db import models

from user_control.models import CustomUser


class Tweet(models.Model):
    user = models.ForeignKey(CustomUser, related_name="user_tweet", on_delete=models.CASCADE)
    content = models.TextField(help_text="Tweet Content", null=False, blank=False)
    create_at = models.DateTimeField(auto_now_add=True)
    like = models.BooleanField(default=False, blank=True)


    def __str__(self):
        return f'{self.user}  -  {self.content}'


class Replay(models.Model):
    user = models.ForeignKey(CustomUser, related_name="user_replay", on_delete=models.CASCADE)
    tweet = models.ForeignKey(Tweet, related_name="tweet_replay", on_delete=models.CASCADE)
    content = models.TextField(help_text="Tweet Content", null=False, blank=False)
    create_at = models.DateTimeField(auto_now_add=True)
    like = models.BooleanField(default=False, blank=True)


    def __str__(self):
        return f'{self.user}  -  {self.content}'


class Comment(models.Model):
    user = models.ForeignKey(CustomUser, related_name="user_comment", on_delete=models.CASCADE)
    tweet = models.ForeignKey(Tweet, related_name="comment_for_tweet", on_delete=models.CASCADE, null=True, blank=True)
    replay = models.ForeignKey(Tweet, related_name="comment_for_replay", on_delete=models.CASCADE, null=True, blank=True)
    content = models.TextField(help_text="Tweet Content", null=False, blank=False)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user}  -  {self.content}'


class Media(models.Model):
    tweet = models.ForeignKey(Tweet, related_name="media_for_tweet", on_delete=models.CASCADE, null=True, blank=True)
    replay = models.ForeignKey(Tweet, related_name="media_for_replay", on_delete=models.CASCADE, null=True, blank=True)
    media = models.ImageField(upload_to='tweet_media/', blank=True, null=True)
    video = models.FileField(upload_to='tweet_media/', blank=True, null=True)


class CommentMedia(models.Model):
    comment = models.ForeignKey(Tweet, related_name="media_for_comment", on_delete=models.CASCADE, null=True, blank=True)
    media = models.ImageField(upload_to='comment_media/')

