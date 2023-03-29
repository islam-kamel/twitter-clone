from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers import RegisterSerializer, UserInfoSerailzer
from .models import CustomUser
from rest_framework import status


class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class UserInfoView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request):
        try:
        
            user = CustomUser.objects.get(username=request.data.username)
            serializer = UserInfoSerailzer(user)
            return Response(serializer.data)
        
        except CustomUser.DoesNotExist:
            return Response({'error': 'NotFound User 404'}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request):
        try:
        
            user = CustomUser.objects.get(username=request.data.username)
            serializer = UserInfoSerailzer(instance=user, data=request.data)
        
            if serializer.is_valid():
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        except CustomUser.DoesNotExist:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)