from django.urls import path
from .views import Register, player_status  # Импортируйте новое представление player_status

urlpatterns = [
    path('register/', Register.as_view(), name='register'),
    path('player_status/', player_status, name='player_status'),  # Добавьте этот URL-маршрут
]
