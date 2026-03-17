from django.urls import path
from .views import inicio, login, estudio, quiz

urlpatterns = [
    path('', inicio, name='inicio'),
    path('login/', login, name='login'),
    path('estudio/', estudio, name='estudio'),
    path('quiz/', quiz, name='quiz'),
]