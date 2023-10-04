from django.contrib import admin
from django.urls import path , include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('' , include('main.urls')),
    path('watch/' , include('detail.urls')),
    path('catalog/' , include('catalog.urls')),
    path('accounts/' , include('django.contrib.auth.urls')),
    path('profile/' , include('prof.urls')),
    path('accounts/register/' , include("register.urls"))
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)