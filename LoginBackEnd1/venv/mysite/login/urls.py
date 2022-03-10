from django.urls import include, path
from rest_framework import routers
from . import views


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('servers/', views.ServerViews.as_view()),
    #path('servers/delete/<int:server_id>/', views.DeleteServer.as_view()),
    #path('servers/delete/<int:server_id>/users/<int:server_id>/', views.DeleteUser.as_view()),
    path('servers/<int:server_id>/', views.UserViews.as_view()),
    path('servers/<int:server_id>/users', views.UserViews.as_view()),
    path('servers/<int:server_id>/users/<int:user_id>', views.UserViews.as_view()),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]