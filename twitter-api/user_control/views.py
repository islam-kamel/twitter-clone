from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import CustomUser, Profile
from .serializers import RegisterSerializer, UserInfoSerializer


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


class UserInfoView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]


    def get(self, request, username):
        try:
            user = CustomUser.objects.get(username=username)
            serializer = UserInfoSerializer(user)
            return Response(serializer.data)

        except CustomUser.DoesNotExist:
            return Response({'error': 'NotFound User 404'}, status=status.HTTP_404_NOT_FOUND)


    def put(self, request, username):

        if not bool(request.data):
            return Response({'message': 'Not Found any Data!'}, status=status.HTTP_400_BAD_REQUEST)

        user = CustomUser.objects.get(username=username)
        profile = Profile.objects.get(user__username=username)

        serializer = UserInfoSerializer(instance={'user': user, 'profile': profile}, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
