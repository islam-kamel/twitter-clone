from rest_framework import serializers

from .models import CustomUser, Profile


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


class UserLoginClaimsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username']


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'
        extra_kwargs = {
            'user': {'read_only': True},
        }


class UserInfoSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer(instance=serializers.CurrentUserDefault, required=False)

    class Meta:
        model = CustomUser
        fields = '__all__'
        extra_kwargs = {
            'password': {'write_only': True, 'required': False},
            'username': {'read_only': True},
            'email': {'required': False},
            'fullname': {'required': False}
        }

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
