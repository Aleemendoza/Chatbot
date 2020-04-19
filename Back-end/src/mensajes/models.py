from django.db import models

class Mensaje(models.Model):

    de = models.CharField(max_length = 32)
    para = models.CharField(max_length=32)
    contenido = models.CharField(max_length=500)    
    fecha = models.DateField(auto_now_add= True)