
from django.urls import path
from .api import root_api

urlpatterns = [
    path("api/", root_api.urls),
]
