import time

from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView


class APIHealthCheck(APIView):
    permission_classes = [AllowAny]


    @staticmethod
    def get(request):
        time.sleep(1)
        return Response({"state": "Ok 👌"})
