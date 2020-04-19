from django.contrib import admin
from .models import Mensaje

@admin.register(Mensaje)
class AdminMensaje(admin.ModelAdmin):
    pass 