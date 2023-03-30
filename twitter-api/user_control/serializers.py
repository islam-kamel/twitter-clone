from rest_framework import serializers

from .models import CustomUser


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'date_of_birth', 'password']

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class UserInfoSerializer(serializers.ModelSerializer):
    """
    username,
    image,
    """

    class Meta:
        model = CustomUser
        fields = ['username']



class UserLoginClaimsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username']


class UserInfoSerailzer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'full_name', 'username', 'email', 'date_of_birth', 'bio']
