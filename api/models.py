from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=20, verbose_name='Название' )
    price = models.DecimalField(max_digits=20, decimal_places=2, verbose_name='Цена')
    description = models.TextField(max_length=50,verbose_name='Описание')
    def __str__(self):
        return self.name
    class Meta:
        verbose_name = "Продукт"
        verbose_name_plural = "Продукты"
