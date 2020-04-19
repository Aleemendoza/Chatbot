
from django.urls import path
from .views import Chatviews

urlpatterns = [

    path('', Chatviews.as_view()),

]