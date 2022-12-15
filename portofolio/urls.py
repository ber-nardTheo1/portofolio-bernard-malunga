"""portofolio URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
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
from mywebsite import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.urls import path, include, re_path
from mywebsite.views import AccomplishmentListView, PostListView, PostDetailView
from django.conf import settings
from django.conf.urls.static import static 


urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', views.homepage, name="home"),
    path('about/', views.aboutpage, name="career"),
    path('black_jack/', views.blackJack, name="Black_Jack"),
    path('accomplishment/', AccomplishmentListView.as_view(), name="Accomplishment"),
    path('post/', PostListView.as_view(), name='post'),
    path('post/<int:pk>/', PostDetailView.as_view(), name="post_detail"),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    
]


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
