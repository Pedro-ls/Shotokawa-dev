import datetime
from django.conf import settings
import jwt
from ninja.router import Router
from rest.models import Account, Client

from rest.routes import middlewares
from rest.schemes.client import LoginClientSchema, RegisterClientSchema, ResultTokenClient

router = Router()


@router.get("/token")
def get_the_bearer_client_token(request):
    return {"token": request.auth}


@router.post("/login", response=ResultTokenClient)
def do_login_client(request, payload: LoginClientSchema):

    client_by_email = Client.objects.filter(email=payload.email).first()

    if client_by_email.password != payload.password:
        return {"message": "Cliente não encontrado"}, 404

    JWT_SIGNING_KEY = getattr(settings, "JWT_SIGNING_KEY", None)
    
    # Hours Expired
    #  :-) 
    # second = (1000 * 60)
    # minute = second * 60
    # hour = minute * 60

    two_hours = datetime.datetime.now(tz=datetime.timezone.utc) + datetime.timedelta(hours=2) # 2 hours

    
    encoded_jwt = jwt.encode({
        "sub": {
            "name": client_by_email.name,
            "email": client_by_email.email
        },
        "exp": two_hours
    }, JWT_SIGNING_KEY, algorithm="HS256")

    if client_by_email.photo:
        photo = str(client_by_email.photo.url)
    else:
        photo = ""


    print("----------------------------------------------------------------------------HELLOW-----------------------------")
    account = Account.objects.filter(client_account = client_by_email).first()

    return {
            "token": encoded_jwt,
            "user": {
                "name": client_by_email.name,
                "email": client_by_email.email,
                "photo": photo,
                "payment": bool(account.isPayment)
            }
    }


@router.get("/user", auth=middlewares.jwtMiddleware())
def get_client(request):

    print(request.client.name)
    return {"user": request.auth}


@router.post("/register")
def register_new_user_client(request, payload: RegisterClientSchema):
    exist_client = Client.objects.filter(email=payload.email).exists()

    if exist_client:
        return {"message": "Cliente já existe"}

    if payload.password != payload.confirm_password:
        return {"message": "senhas não coencidem"}

    new_client = Client()
    new_client.name = payload.name
    new_client.email = payload.email
    new_client.password = payload.password

    account = Account()

    account.client_account = new_client
    
    new_client.save()
    account.save()
    
    return {"message": "Cliente salvo com sucesso"}


@router.post("/buy")
def buy_for_mounth(request):
    return {"buy": request.auth}


@router.patch("/update")
def alter_user_client(request):
    return {"update": request.auth}


@router.delete("/delete")
def delete_user_client(request):
    return {"delete": request.auth}
