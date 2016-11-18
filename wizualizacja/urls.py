from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'wiz/(?P<buildingNo>[0-9]+)/(?P<timeUnit>\w+)/$', views.update_data, name='up_data'),
    url(r'(?P<buildingNo>[0-9]+)/(?P<timeUnit>\w+)/$', views.update_building, name='build_data'),
    url(r'raport/(?P<timeUnit>\w+)/$', views.generate_PDF, name='raport_PDF'),
]