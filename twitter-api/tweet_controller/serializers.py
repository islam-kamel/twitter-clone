from rest_framework import serializers

from tweet_controller.models import Tweet, Media
from user_control.models import Profile, CustomUser


class MediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media
        fields = ["id", "file", "tweet"]


class UserSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = CustomUser
        fields = ['id', 'fullname', 'username', 'image']

    def get_image(self, obj):
        profile = Profile.objects.get(user=obj)
        if profile.image:
            return profile.image.url
        else:
            return 'default_image_url'


class TweetSerializer(serializers.ModelSerializer):
    media = MediaSerializer(many=True, read_only=True)
    user = UserSerializer()

    class Meta:
        model = Tweet
        fields = ["id", "user", "content", "create_at", "media"]


class CreateTweetSerializer(serializers.ModelSerializer):
    # user_id = serializers.PrimaryKeyRelatedField(required=True, queryset=CustomUser.objects.all(), pk_field=True)

    class Meta:
        model = Tweet
        fields = '__all__'
