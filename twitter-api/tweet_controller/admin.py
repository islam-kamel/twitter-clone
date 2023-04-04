from django.contrib import admin
from .models import *

admin.site.register(Tweet)
admin.site.register(Comment)
admin.site.register(Replay)
admin.site.register(CommentMedia)
admin.site.register(Media)
