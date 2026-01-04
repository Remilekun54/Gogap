"""
URL configuration for gogap_web project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""


from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from website import views

urlpatterns = [
    path('admin/', admin.site.urls),

    # Navigation Links
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('sermons/', views.sermons, name='sermons'),
    path('store/', views.store, name='store'),
    path('contact/', views.contact, name='contact'),
    
    # Action Links
    path('offering/', views.offering, name='offering'),
    path('events/', views.events, name='events'),
    

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


# Add this to serve static and media files during development
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

    
   