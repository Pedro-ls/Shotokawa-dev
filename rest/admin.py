from django.contrib import admin

from rest.models import Account, Client

# Register your models here.

admin.site.register(Client)
admin.site.register(Account)
