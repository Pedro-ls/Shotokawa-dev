import datetime
from django.conf import settings
import jwt
from ninja import File
from ninja.files import UploadedFile
from ninja.router import Router
from rest.models import Account, Client

from rest.routes import middlewares
from rest.schemes.client import ChangeClientSchema, LoginClientSchema, RegisterClientSchema, ResultTokenClient

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

    two_hours = datetime.datetime.now(
        tz=datetime.timezone.utc) + datetime.timedelta(hours=2)  # 2 hours

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
    account = Account.objects.filter(client_account=client_by_email).first()

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

    print(request.client)
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


# class AbstractFile(File):
#     ...


# class HandlerFile(UploadedFile):
#     def uploadedFile(self):
#         return None


@router.post("/update", auth=middlewares.jwtMiddleware(), response=None)
def alter_user_client(request, payload: ChangeClientSchema, file: UploadedFile):

    print("File")

    return None
    exist_client = Client.objects.filter(id=request.client.id).exists()

    if exist_client == False:
        return {"message": "Cliente não existe"}

    client = Client.objects.filter(id=request.client.id).first()

    if payload.name:
        client.name = payload.name
    if payload.email:
        client.email = payload.email

    if payload.new_password and payload.old_password and payload.confirm_password:
        if payload.new_password != payload.confirm_password:
            return {"message": "senhas não coencidem"}

        if payload.old_password != client.password:
            return {"message": "Credencial errada"}

        if payload.old_password == payload.new_password:
            return {"message": "sua senha antiga é igual a nova"}
        password = payload.new_password
    else:
        password = client.password

    client.password = password

    client.save()

    return {"message": "Atualização feita com sucesso"}


@router.delete("/delete")
def delete_user_client(request):
    return {"delete": request.auth}
