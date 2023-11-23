from django.conf import settings
from django.http import HttpRequest, HttpResponse, JsonResponse
from django.core.exceptions import RequestAborted
import jwt

from rest.models import Account, Client


class JWTMediaStorage:
    def __init__(self, get_response):
        self.get_response = get_response
    
    
    def get_origin(self, request):
        if request.GET.get("origin"):
            origin = request.GET.get("origin")
        elif(request.headers.get("origin")):
            origin = request.headers.get("origin")
        else:        
            return None
        
        return origin.replace(
            "http://", ""
        ).replace(
            "https://", ""
        ).replace(
            "127.0.0.1", "localhost"
        )
    
    def is_route_media(self, request):
        full_path = request.path
        port = ":" + request.get_port()
        host = request.get_host()
        url_route = full_path.replace(host, "").replace(port, "")
        return url_route.startswith("/media/")

    

    def __call__(self, request: HttpRequest):
        response:HttpResponse = self.get_response(request)

        if(request.user.is_authenticated):

            return response
        
        
        
        if self.is_route_media(request):
            origin = self.get_origin(request)
           
            if origin:
                media_private_access = getattr(settings, "MEDIA_ACCESS_PRIVATE", None)
                
                if(origin == media_private_access):
                    
                    token = request.GET.get("token")
                    if token:
                        
                        try:
                            JWT_SIGNING_KEY = getattr(settings, "JWT_SIGNING_KEY", None)

                            payload = jwt.decode(token, JWT_SIGNING_KEY, algorithms=["HS256"])

                            sub: str = payload.get("sub")

                            if sub is None:
                                return HttpResponse("not content")
                        
                            client = Client.objects.filter(email = sub["email"]).first()
                            account = Account.objects.filter(client_account = client).first()
                            
                            print("teste")

                            if account.isPayment == False:
                                json_response = JsonResponse({"message": "You don't have permission for Access the image"})
                                json_response.status_code = 401
                                return json_response
                        except:
                            json_response = JsonResponse({"message": "You don't have permission for Access the image"})   
                            json_response.status_code = 401
                            return json_response   
                    else:
                        json_response = JsonResponse({"message": "You don't have permission for Access the image"})   
                        json_response.status_code = 401
                        return json_response
                    return response
                else:
                    json_response = JsonResponse({"message": "You don't have permission for Access the image"})   
                    json_response.status_code = 401
                    return json_response
            else:
                json_response = HttpResponse("You don't have permission for Access the image")   
                json_response.status_code = 401
                return json_response
        else:
            return response
 
