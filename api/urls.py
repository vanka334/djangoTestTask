from django.urls import path
from rest_framework.routers import DefaultRouter

from api.api import ProductViewSet


router = DefaultRouter()
router.register(r'products', ProductViewSet)
urlpatterns = router.urls