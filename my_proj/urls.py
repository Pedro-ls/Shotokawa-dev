from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    # path('auth/', include('authentication.urls')),
    # path('comics/', include('comic.urls')),
    path('dashboard/', include('dashboard.urls')),
    # path('read/', include('reader.urls')),
    path("v1/", include("rest.urls"))

]

urlpatterns += static(
    settings.MEDIA_URL,
    document_root=settings.MEDIA_ROOT
)

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
