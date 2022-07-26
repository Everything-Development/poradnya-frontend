from rest_framework import serializers
from .models import News, Consulting_Center

class NewsSerializer(serializers.ModelSerializer):
	class Meta:
		model = News
		fields = '__all__'

class ConsultingCenterSerializer(serializers.ModelSerializer):
	class Meta:
		model = Consulting_Center
		fields = '__all__' 