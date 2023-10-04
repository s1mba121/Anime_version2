from django.urls import path
from . import views

urlpatterns = [
    path('catalog?season=<str:season>&sorting=<str:sorting>&genre=<str:genre>&studio=<str:studio>/' , views.catalog , name="catalog"),
    path('' , views.catalog_none , name="catalog_none"),
    path('filters/' , views.filter , name="filters"),
]
