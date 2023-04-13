from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from tweet_controller.models import Tweet
from tweet_controller.serializers import TweetSerializer, CreateTweetSerializer, MediaSerializer


class TweetView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]


    def get(self, request):
        tweets = Tweet.objects.all()
        serializer = TweetSerializer(tweets, many=True)

        return Response(serializer.data)


class CreateTweetView(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]


    def post(self, request):
        # Create new tweet
        serializer = CreateTweetSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        # Upload tweet Media
        for key, value in request.FILES.items():
            data = {
                'file': value,
                'tweet': serializer.data.get('id')
            }
            media_serializer = MediaSerializer(data=data)
            media_serializer.is_valid(raise_exception=True)
            media_serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class DeleteTweetView(APIView):
    permission_classes = [IsAuthenticated]


    def delete(self, request, tweet_id):
        try:
            tweet = Tweet.objects.get(id=tweet_id)
            tweet.delete()
            return Response({'data': 'Ok'}, status=status.HTTP_204_NO_CONTENT)
        except Tweet.DoesNotExist:
            return Response({'data': 'not found'}, status=status.HTTP_404_NOT_FOUND)
            pass
