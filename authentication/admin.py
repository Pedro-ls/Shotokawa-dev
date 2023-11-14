from django.contrib import admin
from .models import User
from .forms import UserChangeForm, UserCreationForm
from django.contrib.auth import admin as admin_auth_django

# Register your models here.
@admin.register(User)
class UserAdmin(admin_auth_django.UserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm
    model = User
    fieldsets = admin_auth_django.UserAdmin.fieldsets + (
        ("Information Profile", {"fields": ("profile_image","active_profile")}),)
    
