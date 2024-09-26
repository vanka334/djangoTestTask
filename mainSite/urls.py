from django.urls import path

from mainSite import views

urlpatterns = [
    path('', views.IndexView.as_view(), name='products')
]