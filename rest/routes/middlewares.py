from django.conf import settings
import jwt
from ninja.security import HttpBearer

from rest.models import Client


# Proccess System Auth
class __GlobalAuth(HttpBearer):
    def authenticate(self, request, token):
        return token
        

class __JwtAuth(HttpBearer):
    def authenticate(self, request, token):
        try:
            #JWT secret key is set up in settings.py
        
            JWT_SIGNING_KEY = getattr(settings, "JWT_SIGNING_KEY", None)
            
            payload = jwt.decode(token, JWT_SIGNING_KEY, algorithms=["HS256"])
            
            sub: str = payload.get("sub")

            if sub is None:
                return None
            
            client = Client.objects.filter(email = sub["email"]).first()

            request.client = client
            
            return True
        except jwt.PyJWTError as e:
            return None
        

# Functions Auths
def globalMiddleware():
    return __GlobalAuth()

def jwtMiddleware():
    return __JwtAuth()
