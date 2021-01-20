from rest_framework import routers
from .api import TweetViewset
from django.urls import path

router = routers.DefaultRouter()
router.register('', TweetViewset, 'tweets')
urlpatterns = router.urls
