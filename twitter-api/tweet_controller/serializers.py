from rest_framework import serializers

from tweet_controller.models import Tweet, Media, Like, Comment, Reply, LikeReply, CommentMedia
from user_control.models import Profile, CustomUser


class UserSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = CustomUser
        fields = ['id', 'fullname', 'username', 'image', 'is_verify']

    def get_image(self, obj):
        try:
            profile = Profile.objects.get(user=obj)
            if profile.image:
                return profile.image.url
            else:
                return 'default_image_url'
        except Profile.DoesNotExist:
            return "None"


    def get_id(self, obj):
        return obj.id


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = '__all__'


class LikeReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = LikeReply
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    media = serializers.SerializerMethodField()
    user = UserSerializer()
    likes = serializers.SerializerMethodField()
    comments = serializers.SerializerMethodField()
    replies = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = ['id', 'user', 'create_at', 'content', 'comments', 'tweet', 'media', 'replies', 'likes']

    def get_media(self, obj):
        obj = CommentMedia.objects.filter(comment=obj).all()
        serializer = CommentMediaSerializer(obj, many=True)
        return serializer.data


    def get_likes(self, obj):
        likes = obj.comment_likes.all()
        return {
            'count': likes.count(),
            'users_list': likes.values_list('user_id', flat=True)
        }


    def get_comments(self, obj):
        return {
            'count': 0,
            'users_list': []
        }


    def get_replies(self, obj):
        replies = obj.replies_comments.all()
        return {
            'count': replies.count(),
            'users_list': replies.values_list('user_id', flat=True)
        }


class CreateCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'user', 'create_at', 'content', 'tweet']


class MediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media
        fields = ["id", "file", "tweet"]


class CommentMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommentMedia
        fields = ['id', 'file', 'comment']


class TweetSerializer(serializers.ModelSerializer):
    media = MediaSerializer(many=True, read_only=True)
    user = UserSerializer()
    likes = serializers.SerializerMethodField()
    comments = serializers.SerializerMethodField()
    replies = serializers.SerializerMethodField()

    class Meta:
        model = Tweet
        fields = ["id", "content", "likes", "comments", "replies", "create_at", "media", "user"]

    def get_likes(self, obj):
        likes = obj.tweet_likes.all()
        return {
            'count': likes.count(),
            'users_list': likes.values_list('user_id', flat=True)
        }


    def get_comments(self, obj):
        comments = obj.tweet_comments.all()
        return {
            'count': comments.count(),
            'users_list': comments.values_list('user_id', flat=True)
        }


    def get_replies(self, obj):
        replies = obj.tweet_replay.all()
        return {
            'count': replies.count(),
            'users_list': replies.values_list('user_id', flat=True)
        }


class CreateTweetSerializer(serializers.ModelSerializer):
    # user_id = serializers.PrimaryKeyRelatedField(required=True, queryset=CustomUser.objects.all(), pk_field=True)

    class Meta:
        model = Tweet
        fields = '__all__'


class ReplySerializer(serializers.ModelSerializer):
    tweet = serializers.SerializerMethodField()
    comments = serializers.SerializerMethodField()
    user = serializers.SerializerMethodField()
    likes = serializers.SerializerMethodField()

    class Meta:
        model = Reply
        fields = ['id', 'content', 'create_at', 'tweet', 'user', 'comments', 'likes']

    def get_tweet(self, obj):
        return TweetSerializer(obj.replay).data


    def get_user(self, obj):
        return UserSerializer(obj.user).data


    def get_likes(self, obj):
        likes = obj.tweet_likes.all()
        return {
            'count': likes.count(),
            'users_list': likes.values_list('user_id', flat=True)
        }


    def get_comments(self, obj):
        comments = obj.tweet_comments.all()
        return {
            'count': comments.count(),
            'users_list': comments.values_list('user_id', flat=True)
        }
