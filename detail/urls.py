from django.urls import path
from . import views

urlpatterns = [
    path('<str:title>/<str:seria>/' , views.detail , name="detail"),
    path('comment/make/<str:title>/' , views.comment , name="comment"),
]
