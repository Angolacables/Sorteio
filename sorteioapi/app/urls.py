from django.urls import path,include
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register(r'UserViewSet', UserViewSet, basename='user')
router.register(r'usercount', UserCountViewSet, basename='usercount')



urlpatterns = [

    path('', include(router.urls)),

]