from django.contrib import admin

# Register your models here.
from .models import User, Server

admin.site.register(User)
admin.site.register(Server)