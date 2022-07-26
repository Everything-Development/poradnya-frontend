from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(Specialist)
admin.site.register(Tag)
admin.site.register(Consulting_Center)
admin.site.register(News)