from django.contrib import admin
from django.utils.html import format_html

from .models import Post


class PostAdmin(admin.ModelAdmin):
    list_display = ['id', 'author', 'letter_paper', 'photo_tag']

    def photo_tag(self, obj):
        return format_html('<img src="{}" width="50px;"/>'.format(obj.photo.url))
    photo_tag.short_description = '사진'


admin.site.register(Post, PostAdmin)
