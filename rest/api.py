from rest.util.api import createApi

from rest.routes import middlewares

from rest.routes import comics
from rest.routes import auth
from rest.routes import mylist
        
root_api = createApi(title="Documentação Shotokawa")

root_api.add_router("/accounts", auth.router, tags=["Conta do Cliente"])
root_api.add_router('/comics', comics.router, tags=["Mangas"], auth=middlewares.jwtMiddleware())
root_api.add_router('/mylist', mylist.router, tags=["Minha Lista"], auth=middlewares.jwtMiddleware())
