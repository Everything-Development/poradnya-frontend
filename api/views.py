from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import NewsSerializer, ConsultingCenterSerializer
from .models import News, Consulting_Center
from datetime import datetime
from rest_framework import status
from django.http import Http404


# consulting_centers = Consulting_Center.objects.all()
# for item in consulting_centers:
# 	if "Україна" in item.region:
# 		item.region = "Україна"
# 	if "Луцьк" in item.region:
# 		item.region = "Волинська область"
# 	if "Львів" in item.region:
# 		item.region = "Львівська область"
# 	if item.region == ' область':
# 		item.region = "Україна"
# 	item.save()
# 	print(item.region)


	# if not "область" in item.region:
	# 	item.region = item.region + " область"
	# 	item.save()
	# 	print(item.region)
	# else:
	# 	print(item.region)


class NewsList(APIView):
	def get(self, request, format=None):
		news = News.objects.all()
		serializer = NewsSerializer(news, many=True)
		return Response(serializer.data)

	def post(self, request, format=None):
		serializer = NewsSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data,  status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
		
		
class NewsDetail(APIView):
	def get(self, request, format=None):
		news = News.objects.get(pk=request.data['id'])
		serializer = NewsSerializer(news, many = False)
		return Response(serializer.data)
	def delete(self, request, format=None):
		try:
			news = News.objects.get(pk=request.data['id'])
			news.delete()
			return Response(status=status.HTTP_202_Accepted)
		except:
			return Response(status=status.HTTP_204_NO_CONTENT)
	def put(self, request, format=None):
		news = News.objects.get(pk=request.data.get('id'))
		serializer = NewsSerializer(news, data=request.data, partial=True)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ConsultingCenterList(APIView):
	def get(self, request, format=None):
		centers = Consulting_Center.objects.order_by('-creation_time')
		serializer = ConsultingCenterSerializer(centers, many=True)
		return Response(serializer.data)
	def post(self,request, format=None):
		serializer = ConsultingCenterSerializer(data=request.data, partial=True)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data,  status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ConsultingCenterDetail(APIView):
	def post(self, request, format=None):
		centers = Consulting_Center.objects.filter(region = request.data['region']).filter(tags__tag_name = request.data['problem'])
		serializer = ConsultingCenterSerializer(centers, many=True)
		return Response(serializer.data)
	def delete(self, request, format=None):
		try:
			news = Consulting_Center.objects.get(pk=request.data['id'])
			news.delete()
			return Response(status=status.HTTP_202_Accepted)
		except:
			return Response(status=status.HTTP_204_NO_CONTENT)
	def put(self, request, format=None):
		center = Consulting_Center.objects.get(pk=request.data.get('id'))
		serializer = ConsultingCenterSerializer(center, data=request.data, partial=True)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class NewsContains(APIView):
	def get(self, request, format=None):
		news = News.objects.filter(title__contains = request.data['title__icontains'])
		serializer = NewsSerializer(news, many=True)
		return Response(serializer.data)

class ConsultingCenterContains(APIView):
	def get(self, request, format=None):
		centers = Consulting_Center.objects.filter(title__contains = request.data['title__icontains'])
		serializer = ConsultingCenterSerializer(centers, many=True)
		return Response(serializer.data)