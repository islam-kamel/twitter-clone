from django.db import models

from user_control.models import CustomUser


class Tweet(models.Model):
    user = models.ForeignKey(CustomUser, related_name="tweets", on_delete=models.CASCADE)
    content = models.TextField(blank=True, null=True)
    create_at = models.DateTimeField(auto_now_add=True)
    comment = models.ForeignKey('self', null=True, related_name='tweet_comments', blank=True, on_delete=models.CASCADE)
    replay = models.ForeignKey('self', null=True, related_name='tweet_replay', blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user} - {self.content}"

    class Meta:
        verbose_name = "Tweet"
        verbose_name_plural = "Tweets"
        ordering = ['-create_at']


class Like(models.Model):
    tweet = models.ForeignKey(Tweet, related_name='tweet_likes', on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, related_name='user_like', on_delete=models.CASCADE)
    like = models.BooleanField(default=False)


    def __str__(self):
        return f"{self.user} {'liked' if self.like else 'disliked'} {self.tweet}"

    class Meta:
        verbose_name = "Like"
        verbose_name_plural = "Likes"


class Media(models.Model):
    tweet = models.ForeignKey(Tweet, related_name="media", on_delete=models.CASCADE)
    file = models.FileField(upload_to="tweet_media/")


    def __str__(self):
        return f"{self.tweet} - {self.file}"


class Comment(models.Model):
    tweet = models.ForeignKey(Tweet, related_name='comments', on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, related_name='user_comments', on_delete=models.CASCADE)
    content = models.TextField()
    create_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f"{self.user} commented on {self.tweet}"

    class Meta:
        verbose_name = "Comment"
        verbose_name_plural = "Comments"
        ordering = ['-create_at']


class CommentMedia(models.Model):
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE, related_name='media')
    file = models.FileField(upload_to='comment_media/')


class LikeComment(models.Model):
    comment = models.ForeignKey(Comment, related_name='comment_likes', on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, related_name='user_comment_like', on_delete=models.CASCADE)
    like = models.BooleanField(default=False)


    def __str__(self):
        return f"{self.user} {'liked' if self.like else 'disliked'} {self.comment}"

    class Meta:
        verbose_name = "Comment Like"
        verbose_name_plural = "Comments Likes"


class Reply(models.Model):
    tweet = models.ForeignKey(Tweet, related_name='tweet_replies', on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, related_name='replies', on_delete=models.CASCADE)
    content = models.TextField(blank=True, null=True)
    create_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f"{self.user} replied to {self.tweet}"

    class Meta:
        verbose_name = "Reply"
        verbose_name_plural = "Replies"
        ordering = ['-create_at']


class LikeReply(models.Model):
    replay = models.ForeignKey(Reply, related_name='replay_likes', on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, related_name='user_like_replay', on_delete=models.CASCADE)
    like = models.BooleanField(default=False)


    def __str__(self):
        return f"{self.user} {'liked' if self.like else 'disliked'} {self.replay}"

    class Meta:
        verbose_name = "Like Replay"
        verbose_name_plural = "Likes Replies"


class CommentReplay(models.Model):
    replay = models.ForeignKey(Comment, related_name='replies_comments', on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, related_name='user_comments_replies', on_delete=models.CASCADE)
    content = models.TextField()
    create_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f"{self.user} commented on {self.replay}"

    class Meta:
        verbose_name = "Comment Replay"
        verbose_name_plural = "Comments Replies"
        ordering = ['-create_at']
