from django.contrib import admin
from .models import Comic, Author, Editor, Favorite, MyList, Category, Notice, PreviewComics, React, SubCategory
# Register your models here.

# Author e Editor do comic
admin.site.register(Author)
admin.site.register(Editor)

# Noticias dos Comics
admin.site.register(Notice)
# Tipo, categoria e subcategoria

admin.site.register(Category)
admin.site.register(SubCategory)

# favorites
admin.site.register(Favorite)
admin.site.register(React)

# Comic

admin.site.register(Comic)
admin.site.register(PreviewComics)

# Lista de cada usuario
admin.site.register(MyList)
