from django.contrib import admin
from .models import *

admin.site.register(Tweet)
admin.site.register(Comment)
admin.site.register(Reply)
admin.site.register(CommentMedia)
admin.site.register(Media)
admin.site.register(Like)
admin.site.register(CommentReplay)
admin.site.register(LikeReply)
