from django.db import models
from datetime import datetime
# Create your models here.
class Specialist(models.Model):
	photo         = models.CharField("image", max_length=200,null = True, blank=True)
	name          = models.CharField("name", max_length=100)
	description   = models.CharField("description",max_length = 600,null = True, blank=True )
	def __str__(self):
		return self.name

class Tag(models.Model):
	tag_name      = models.CharField("tag_name", max_length=50)
	def __str__(self):
		return self.tag_name

class Consulting_Center(models.Model):
	photo         = models.CharField("image",max_length=200, null = True, blank=True)
	title         = models.CharField("title", max_length=400, null = True, blank=True)
	address       = models.CharField("address", max_length=200, null = True, blank=True)
	is_online     = models.BooleanField("online_status", default=False)
	website       = models.CharField("website", max_length=500, blank=True)
	phone         = models.CharField("phone", max_length=50, blank=True)
	email         = models.CharField("email", max_length=250, null = True, blank=True)
	tags          = models.ManyToManyField(Tag)
	creation_time = models.DateTimeField(default=datetime.now, blank=True)
	region        = models.CharField("region", max_length=200, blank=True)
	def __str__(self):
		return self.title

##### function to create special date in db
def special_date():
	now = datetime.now()
	date = str(now.strftime("%-d"))
	s = now
	month = s.strftime("%B")
	if month == "January":
		month = "Січня"
	if month == "February":
		month = "Лютого"
	if month == "March":
		month = "Березня"
	if month == "April":
		month = "Квітня"
	if month == "May":
		month = "Травня"
	if month == "June":
		month = "Червня"
	if month == "July":
		month = "Липня"	
	if month == "August":
		month = "Серпня"
	if month == "September":
		month = "Вересня"
	if month == "October":
		month = "Жовтня"
	if month == "November":
		month = "Листопада"
	if month == "December":
		month = "Грудня"		
	date = date + ' ' + month + ' ' + s.strftime("%Y")
	return date

class News(models.Model):
	title         = models.CharField("title", max_length=200,blank=True)
	text          = models.TextField("text",max_length=1000,blank=True)
	photo         = models.CharField("image",max_length=200,null = True, blank=True)
	creation_time = models.DateTimeField(default=datetime.now, blank=True)
	date_posted = models.CharField("date_posted",default = special_date, max_length = 100,blank=True)

	def __str__(self):
		return self.title