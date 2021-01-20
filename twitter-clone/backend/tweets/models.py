from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from django.conf import settings


# Tweet Model
class TweetModel(models.Model):
    text = models.TextField(max_length=150, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    likes = models.IntegerField(default=0)
