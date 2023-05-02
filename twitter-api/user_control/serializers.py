from rest_framework import serializers

from .models import CustomUser, Profile, Follow


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'fullname', 'username', 'email', 'birthdate', 'password']

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'
        extra_kwargs = {
            'user': {'read_only': True},
        }

class UserFollowersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follow
        fields = '__all__'

    def to_representation(self, value):
        follower_image, followee_image = None, None
        try:
            follower_image = Profile.objects.get(user_id=value.user_id.id).image.url
            followee_image = Profile.objects.get(user_id=value.following.id).image.url
        except Exception:
            pass

        return {
            "id": value.id,
            "follower": {
                "username": value.user_id.username,
                "fullname": value.user_id.fullname,
                "image": follower_image,
            },
            "following": {
                "username": value.following.username,
                "fullname": value.following.fullname,
                "image": followee_image
            },
        }


class UserInfoWithProfileSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer()
    followers = UserFollowersSerializer(read_only=True, many=True)
    following = UserFollowersSerializer(read_only=True, many=True)

    class Meta:
        model = CustomUser
        fields = '__all__'
        extra_kwargs = {
            'password': {'write_only': True, 'required': False},
            'username': {'read_only': True},
            'email': {'required': False},
            'fullname': {'required': False}
        }

    def get_profile(self, obj):
        try:
            obj = Profile.objects.get(user=obj)
            serializer = UserProfileSerializer(obj)

            if not serializer.data.get('image'):
                return {**serializer.data, 'image': '/media/default_profile_image.png'}
            return serializer.data

        except Profile.DoesNotExist:
            return {'image': '/media/default_profile_image.png'}



    def update(self, instance, validated_data):
        profile_data = validated_data.pop('profile', {})
        profile_instance = instance.pop('profile')

        for key, value in profile_data.items():
            setattr(profile_instance, key, value)
        profile_instance.save()

        user_instance = instance.pop('user', {})
        user_instance.fullname = validated_data.get('fullname', user_instance.fullname)
        user_instance.email = validated_data.get('email', user_instance.email)
        user_instance.birthdate = validated_data.get('birthdate', user_instance.birthdate)

        user_instance.save()
        return user_instance


class UserIdentitySerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'fullname', 'is_verify', 'image']

    def get_image(self, obj):
        try:
            profile = Profile.objects.get(user=obj)
            if profile.image:
                return profile.image.url
            else:
                return '/media/default_profile_image.png'
        except Profile.DoesNotExist:
            return '/media/default_profile_image.png'
