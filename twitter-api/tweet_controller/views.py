from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser, FileUploadParser
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from tweet_controller.models import Tweet, Reply, Like, LikeReply, Comment
from tweet_controller.serializers import TweetSerializer, CreateTweetSerializer, CommentMediaSerializer, MediaSerializer, ReplySerializer, LikeSerializer, LikeReplySerializer, CommentSerializer, CreateCommentSerializer


class TweetView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]


    def get(self, request):
        tweets = Tweet.objects.all()
        serializer = TweetSerializer(tweets, many=True)

        return Response(serializer.data)


class TweetByUsernameView(APIView):
    permission_classes = [IsAuthenticated]


    def get(self, request, username):
        tweets = Tweet.objects.filter(user__username=username)
        serializer = TweetSerializer(tweets, many=True)
        return Response(serializer.data)


class CreateTweetView(APIView):
    permission_classes = [IsAuthenticated]
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
    permission_classes = [IsAuthenticated]


    def put(self, request, tweet_id):
        try:
            like_state = Like.objects.filter(user_id=request.user.id, tweet_id=tweet_id).exists()
            if like_state:
                obj = Like.objects.filter(tweet_id=tweet_id, user_id=request.user.id)
                obj.delete()
                return Response({'state': 'dislike'})
            serializer = LikeSerializer(data={'like': True, 'tweet': tweet_id, 'user': request.user.id})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response({'state': 'like'})
        except Like.DoesNotExist:
            return Response({'state': 'not found'})


class RepliesListView(APIView):
    permission_classes = [AllowAny]


    def get(self, request, username):
        replies = Reply.objects.filter(user__username=username)
        serializer = ReplySerializer(replies, many=True)
        return Response(serializer.data)


class RepliesCreateOrDeleteView(APIView):
    permission_classes = [AllowAny]


    def put(self, request, tweet_id):
        try:
            replay_state = Reply.objects.filter(user_id=request.user.id, tweet_id=tweet_id).exists()
            if replay_state:
                obj = Reply.objects.filter(tweet_id=tweet_id, user_id=request.user.id)
                obj.delete()
                return Response({'state': 'undo retweet'})
            tweet = Tweet.objects.get(id=tweet_id)
            print(dir(request.data))
            obj = Reply.objects.create(content=request.data.get('content'), user_id=request.user.id, tweet=tweet)
            serializer = ReplySerializer(obj)
            return Response(serializer.data)

        except Tweet.DoesNotExist:
            return Response({'error': 'Tweet not found'}, status=status.HTTP_404_NOT_FOUND)


class ReplyLikeView(APIView):
    permission_classes = [AllowAny]


    def put(self, request, retweet_id):
        try:
            like_state = LikeReply.objects.filter(replay_id=retweet_id, user_id=request.user.id).exists()
            if like_state:
                obj = LikeReply.objects.filter(replay_id=retweet_id, user_id=request.user.id)
                obj.delete()
                return Response({'state': 'dislike'})

            serializer = LikeReplySerializer(data={'like': True, 'replay': retweet_id, 'user': request.user.id})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response({'state': 'like'})
        except Like.DoesNotExist:
            return Response({'state': 'not found'})


class CommentView(APIView):
    permission_classes = [AllowAny]


    def get(self, request, tweet_id):
        obj = Comment.objects.filter(tweet_id=tweet_id).all()
        serializer = CommentSerializer(obj, many=True)

        return Response(serializer.data)


class CreateCommentView(CreateTweetView):
    pass
    # permission_classes = [AllowAny]
    # parser_classes = [MultiPartParser, FormParser]


    # def post(self, request, tweet_id=None):
    #     # Create new comment
    #     serializer = CreateCommentSerializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save()
    #
    #     print(request.FILES)
    #     # Upload Comment Media
    #     for key, value in request.FILES.items():
    #         data = {
    #             'file': value,
    #             'comment': serializer.data.get('id')
    #         }
    #         media_serializer = CommentMediaSerializer(data=data)
    #         media_serializer.is_valid(raise_exception=True)
    #         media_serializer.save()
    #
    #     obj = Comment.objects.get(id=serializer.data.get('id'));
    #     final = CommentSerializer(obj)
    #     return Response(final.data, status=status.HTTP_201_CREATED)
