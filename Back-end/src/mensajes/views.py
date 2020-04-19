from django.http import HttpResponse
from django.views import View
from .models import Mensaje
from django.core import serializers

class Chatviews(View):
    def get(self, request):
        mensajes = Mensaje.objects.all()
        mensajeJason = serializers.serialize('json', mensajes )
        return HttpResponse(mensajeJason)
