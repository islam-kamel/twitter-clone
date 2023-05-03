from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser, FileUploadParser
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from tweet_controller.models import Tweet, Like, LikeReply
from tweet_controller.serializers import TweetSerializer, CreateTweetSerializer, MediaSerializer, LikeSerializer, LikeReplySerializer, ReplySerializer


class TweetView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]


    def get(self, request):
        tweets = Tweet.objects.filter(comment=None, replay=None).all()
        serializer = TweetSerializer(tweets, many=True)

        return Response(serializer.data)


class TweetByUsernameView(APIView):
    permission_classes = [IsAuthenticated]


    def get(self, request, username):
        tweets = Tweet.objects.filter(comment=None, replay=None,user__username=username)
        serializer = TweetSerializer(tweets, many=True)
        return Response(serializer.data)


class CreateTweetView(APIView):
    permission_classes = [AllowAny]
    parser_classes = [MultiPartParser, FormParser, FileUploadParser]


    def post(self, request):
        # Create new tweet
        serializer = CreateTweetSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        print(request.FILES)
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


class TweetLikeView(APIView):
    permission_classes = [AllowAny]


    def put(self, request, tweet_id):
        # user = request.user.id
        user = 1
        try:
            like_state = Like.objects.filter(user_id=user, tweet_id=tweet_id).exists()
            if like_state:
                obj = Like.objects.filter(tweet_id=tweet_id, user_id=user)
                obj.delete()
                return Response({'state': 'dislike'})
            serializer = LikeSerializer(data={'like': True, 'tweet': tweet_id, 'user': user})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response({'state': 'like'})
        except Like.DoesNotExist:
            return Response({'state': 'not found'})


class RepliesListView(APIView):
    permission_classes = [AllowAny]


    def get(self, request, username):
        replies = Tweet.objects.filter(replay__user__username=username)
        serializer = ReplySerializer(replies, many=True)

        return Response(serializer.data)


class RepliesCreateOrDeleteView(APIView):
    permission_classes = [AllowAny]


    def put(self, request, tweet_id):
        user_id = request.user.id
        try:
            tweet = Tweet.objects.get(id=tweet_id)
            obj = Tweet.objects.create(content=request.data.get('content'), user_id=user_id, replay=tweet)
            serializer = TweetSerializer(obj)
            return Response(serializer.data)

        except Tweet.DoesNotExist:
            return Response({'error': 'Tweet not found'}, status=status.HTTP_404_NOT_FOUND)


    def delete(self, request, tweet_id):
        try:
            obj = Tweet.objects.get(replay=tweet_id)
            print(obj.content)
            obj.delete()
            return Response({"state": "Deleted"})
        except Tweet.DoesNotExist:
            return Response({"error": "Not Found"})


class ReplyLikeView(APIView):
    permission_classes = [AllowAny]


    def put(self, request, retweet_id):
        # user = request.user.id
        user = 1
        try:
            like_state = Like.objects.filter(tweet_id=retweet_id, user_id=user).exists()
            if like_state:
                obj = Like.objects.filter(tweet_id=retweet_id, user_id=user)
                obj.delete()
                return Response({'state': 'dislike'})

            serializer = LikeSerializer(data={'like': True, 'tweet': retweet_id, 'user': user})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response({'state': 'like'})

        except Like.DoesNotExist:
            return Response({'state': 'not found'})


class CommentView(APIView):
    permission_classes = [AllowAny]


    def get(self, request, tweet_id):
        obj = Tweet.objects.filter(comment_id=tweet_id).all()
        serializer = TweetSerializer(obj, many=True)

        return Response(serializer.data)


class CreateCommentView(CreateTweetView):
    def post(self, request):
        is_valid = request.data.get('comment', None)
        if not is_valid:
            return Response({"comment": "is required field"}, status=status.HTTP_400_BAD_REQUEST)
        return super().post(request)


class TweetByDate(APIView):
    permission_classes = [AllowAny]

    def get(self, request, from_date, to):
        obj = Tweet.objects.filter(create_at__range=(from_date, to)).count()
        return Response({"count": obj, 'from': from_date, 'to':to})


