from django.urls import path
from . import views 
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
  path('get_all_news/', views.NewsList.as_view()),
  path('get_news_by_id/', views.NewsDetail.as_view(), name='get_news_by_id'),
  path('get_all_consulting_centers/', views.ConsultingCenterList.as_view(), name='get_all_consulting_centers'),
  path('filtered_centers/', views.ConsultingCenterDetail.as_view(), name='filtered_centers'),
  path('news_contains/', views.NewsContains.as_view(), name='news_contains'),
  path('centers_contains/', views.ConsultingCenterContains.as_view(), name='centers_contains'),
]

urlpatterns = format_suffix_patterns(urlpatterns)