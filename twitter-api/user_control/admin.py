from django.contrib import admin

from .models import CustomUser, Profile, Follow

admin.site.register(CustomUser)
admin.site.register(Profile)
admin.site.register(Follow)
