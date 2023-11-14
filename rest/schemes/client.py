from ninja.schema import Schema


class LoginClientSchema(Schema):
    email: str = "xxxx@xxx.com"
    password: str = "kneojfnjewonfjinf"


class RegisterClientSchema(Schema):
    name:str = "xxx"
    email: str = "xxxx@xxx.com"
    password: str = "kneojfnjewonfjinf"
    confirm_password:str = "kneojfnjewonfjinf"

class BasicClientSchema(Schema):
    name:str = "xxx"
    email: str = "xxxx@xxx.com"
    photo: str
    payment: bool = False

class ResultTokenClient(Schema):
    token:str = "tokenqualquer"
    user:BasicClientSchema