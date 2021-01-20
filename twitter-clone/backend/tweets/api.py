from .serializers import TweetSerializer
from .models import TweetModel
from rest_framework import viewsets, permissions


# TweetViewset
class TweetViewset(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = TweetSerializer

    def get_queryset(self):
        return TweetModel.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
