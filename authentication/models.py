import re

from datetime import datetime
from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):

    active_profile = models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.')
    profile_image = models.ImageField(upload_to="profiles", null=True)