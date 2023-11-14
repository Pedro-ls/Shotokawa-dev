from django.urls import path
from . import views

urlpatterns = [
    path("", views.index_modules, name="index_modules"),
    path('register_comic/', views.register_comic, name="register_comic"),
    path('list_comic/', views.list_comic, name="list_comic"),
    path('register_episode/<slug:slug>',
         views.register_episode, name="register_episode"),
    path('list_episode/<slug:slug>', views.list_episode, name="list_episode"),

    path("register_author", views.register_author, name="register_author"),
    path("register_editor", views.register_editor, name="register_editor"),
    path("register_category", views.register_category, name="register_category"),
    path("register_subcategory", views.register_subcategory,
         name="register_subcategory")
]
