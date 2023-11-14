from django.contrib import admin
from episode.models import Episode, PageImage
# Register your models here.


@admin.register(Episode)
class Episode(admin.ModelAdmin):
    pass


admin.site.register(PageImage)
