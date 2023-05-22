from django.urls import path
from knox import views as knox_views
from .views import  RegisterAPI,LoginAPI,UserAPI,ChangePasswordView
from rest_framework_simplejwt import views as jwt_views
from django.contrib import admin

app_name = 'users'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('account/register/', RegisterAPI.as_view(), name='register'),
    path('account/login/', LoginAPI.as_view(), name='login'),
    path('account/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('account/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
    path('account/user/', UserAPI.as_view(), name='user'),
    path('account/change-password/', ChangePasswordView.as_view(), name='change-password'),
]