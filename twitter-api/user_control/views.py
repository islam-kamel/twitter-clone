from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser

from .models import CustomUser, Profile
from .serializers import RegisterSerializer, UserInfoWithProfileSerializer, UserIdentitySerializer, UserProfileSerializer


class RegisterView(APIView):
    permission_classes = [AllowAny]


    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class ValidToken(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"message": "status Ok 👍 {}".format(request.user)})


class UserProfileView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    parser_classes = [FormParser, MultiPartParser]

    def get(self, request, username):
        try:
            user = CustomUser.objects.get(username=username)
            serializer = UserInfoWithProfileSerializer(user)
            return Response(serializer.data)

        except CustomUser.DoesNotExist:
            return Response({'error': 'NotFound User 404'}, status=status.HTTP_404_NOT_FOUND)


    def put(self, request, username):
        if not bool(request.data):
            return Response({'message': 'Not Found any Data!'}, status=status.HTTP_400_BAD_REQUEST)

        user = CustomUser.objects.get(username=username)
        profile = Profile.objects.get_or_create(user__username=username, defaults={'user': user})[0]
        serializer = UserInfoWithProfileSerializer(instance={'user': user, 'profile': profile}, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserIdentityView(APIView):
    permission_classes = [IsAuthenticated]

    @staticmethod
    def get(reqeust):
        try:
            user = CustomUser.objects.get(username=reqeust.user.username)
            serializer = UserInfoWithProfileSerializer(user)
            return Response(serializer.data)

        except CustomUser.DoesNotExist:
            return Response({'error': 'NotFound User 404'}, status=status.HTTP_404_NOT_FOUND)


class AllUserView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        try:
            user = CustomUser.objects.all()
            serializer = UserInfoWithProfileSerializer(user, many=True)
            return Response(serializer.data)
        except CustomUser.DoesNotExist:
            return Response({'error': 'NotFound User 404'}, status=status.HTTP_404_NOT_FOUND)