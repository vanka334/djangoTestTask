from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response
# считаю что ViewSet здесь более чем достаточно поскольку не нужен какой-то уникальный функционал,
# но я также мог бы и реализовать на APIView, но это заняло бы больше времени написания
from .models import Product
from .serializer import ProductSerializer
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer



