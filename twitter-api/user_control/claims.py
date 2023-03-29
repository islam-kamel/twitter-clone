from .models import CustomUser
from .serializers import UserLoginClaimsSerializer


def get_claims(username):
    try:
        obj = CustomUser.objects.get(username=username)
        return UserLoginClaimsSerializer(obj).data
    except Exception as e:
        return None
