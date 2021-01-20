from django.db import models
from django.contrib.auth.models import User


# Tweet Model
class TweetModel(models.Model):
    text = models.TextField(max_length=150, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, related_name='account', on_delete=models.CASCADE)
