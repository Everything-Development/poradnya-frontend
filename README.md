# Poradnia Rest Api

Using this **api** based on **Django Rest Framework** you can use 

 - Add
 - Delete
 - Edit
 "methods" for news and consulting centers.

In addition to this you can also get consulting center using filters.

# Routes
	

## Add news item

`POST /api/get_all_news/`

	REQUEST:
		headers => {
			'Content-Type: application/json'
		}
	    data =>{ 
		    "title": "your_title",
		    "text": "your_text",    
		    "photo": null    
	    }
	    
	RESPONSE:	
	    data => {
		    "id": 6,
		   	"title": "your_title",	    
		    "text": "your_text",	    
		    "photo": null,	    
		    "creation_time": "2022-05-28T20:33:47.151343+03:00",	    
		    "date_posted": "28 Травня 2022"    
	    }

 ## Get all news items

`GET /api/get_all_news/` 

    RESPONSE:
	    data => {
		    {			
				"id": 2,
				"title": "sdfsdfsfds",
				"text": "sfdfdsffsdff",
				"photo": null,
				"creation_time": "2022-05-03T14:41:58+03:00",
				"date_posted": "3 Травня 2022"
			},
			{
				"id": 3,
				"title": "",
				"text": "",
				"photo": null,
				"creation_time": "2022-05-28T16:06:21.204520+03:00",
				"date_posted": "28 Травня 2022"
			},
			{
				"id": 4,
				"title": "ubububububububub",
				"text": "text",
				"photo": null,
				"creation_time": "2022-05-28T16:06:21.204520+03:00",
				"date_posted": "tyytytyt"
			}
	    }

 ## Get certain news item

`GET /api/get_news_by_id/`  

	REQUEST:
		headers => {
			'Content-Type: application/json'
		}		
	    data => { 
		    "id": 5   
	    }
	    
	RESPONSE:
	    data => {
		    "id": 5,	    
		    "title": "",	    
		    "text": "",	    
		    "photo": null,	    
		    "creation_time": "2022-05-28T16:06:21.204520+03:00",	    
		    "date_posted": "28 Травня 2022"  
	    }

## Delete news item
`DELETE /api/get_news_by_id/`

	REQUEST:
		headers => {
			'Content-Type: application/json'
		}	
		data => { 
		    "id": 5   
	    }

## Edit news item
`PUT /api/get_news_by_id/`

 
	REQUEST:
		headers => {
			'Content-Type: application/json'
		}	
		data => {
			"id": 2,
			"title": "your_title",
			"text": "your_text",
			"photo": null
		}
			
	RESPONSE:
		data => {			
			"id": 4,
			"title": "your_title",
			"text": "your_text",
			"photo": null,
			"creation_time": "2022-05-28T16:06:21.204520+03:00",
			"date_posted": "tyytytyt"
		}
		

## Get news items, which contain certain string in title
`GET /api/news_contains/`

	REQUEST:
		headers => {
			'Content-Type: application/json'
		}	
		data => {
			"title__icontains": "sdfs"
		}
	
	RESPONSE:
		data => {
			{
				"id": 2,
				"title": "sdfsdfsfds",
				"text": "sfdfdsffsdff",
				"photo": null,
				"creation_time": "2022-05-03T14:41:58+03:00",
				"date_posted": "3 Травня 2022"
			},
			{
				"id": 7,
				"title": "sdfs",
				"text": "uuuuuuuuuuuuuuuuuuuuuuuuuuuuuu",
				"photo": null,
				"creation_time": "2022-05-28T21:19:22.246962+03:00",
				"date_posted": "28 Травня 2022"
			}
		}



## Get all consulting center items

`GET /api/get_all_consulting_centers/`
		
	RESPONSE:
		data => {
			"id": 9,
			"photo": "default",
			"title": "Шпиталь Шептицького",
			"address": "вулиця Озаркевича, 4, Львів",
			"is_online": false,
			"website": "http://spital.org.ua/likari",
			"phone": "+38 (032) 235 22 66, +38 (032) 235 22 69",
			"email": null,
			"creation_time": "2022-05-04T03:17:45+03:00",
			"region": "Львівська область",						                         			
			"tags": [3,2,1,4,5,6,7,8]
		},				
		{
			"id": 8,
			"photo": "default",
			"title": "Психологічна студія СЕНС",
			"address": null,
			"is_online": true,
			"website": "https://www.sens.lviv.ua/",
			"phone": "+38 (067) 48 48 466",
			"email": "centr.sens@gmail.com",
			"creation_time": "2022-05-04T03:15:28+03:00",
			"region": "Львівська область",
			"tags": [5]
		},
		{
			"id": 7,
			"photo": "default",
			"title": "Кризова Порадня УКУ",
			"address": null,
			"is_online": true,
			"website": "https://www.facebook.com/consultingcenterucu",
			"phone": "+ 380500732903, + 380965814896",
			"email": null,
			"creation_time": "2022-05-03T23:49:01+03:00",
			"region": "Львівська область",
			"tags": [5]
		},
		{
			"id": 6,
			"photo": "default",
			"title": "Червоноградський міський центр соціальних служб",
			"address": null,
			"is_online": false,
			"website": "",
			"phone": "067 491 4823",
			"email": null,
			"creation_time": "2022-05-03T23:48:13+03:00",
			"region": "Миколаївська область",
			"tags": [3,2,1,4,5,6,7,8]
		}
			 

## Add consulting center item

`POST /api/get_all_consulting_centers/`

	REQUEST:
		headers => {
			'Content-Type: application/json'
		}  
	    data => {
			"photo": "default",
			"title": "Шпиталь Шептицького",
			"address": "вулиця Озаркевича, 4, Львів",
			"is_online": false,
			"website": "http://spital.org.ua/likari",
			"phone": "+38 (032) 235 22 66, +38 (032) 235 22 69",
			"email": null,
			"creation_time": "2022-05-04T03:17:45+03:00",
			"region": "Львівська область",
			"tags": [3,2,1,4,5,6,7,8]
		}
	
	RESPONSE:
		data => {
			"id": 13,
			"photo": "default",
			"title": "Шпиталь Шептицького",
			"address": "вулиця Озаркевича, 4, Львів",
			"is_online": false,
			"website": "http://spital.org.ua/likari",
			"phone": "+38 (032) 235 22 66, +38 (032) 235 22 69",
			"email": null,
			"creation_time": "2022-05-04T03:17:45+03:00",
			"region": "Львівська область",
			"tags": [1,2,3,4,5,6,7,8]
		}

## Delete consulting center item
`DELETE /api/filtered_centers/` 



	REQUEST:
		headers => {
			'Content-Type: application/json'
		}  
	    data => { 
		    "id": 5   
	    }

## Edit consulting center item
`PUT /api/filtered_centers/` 


	 REQUEST:
		headers => {
			'Content-Type: application/json'
		}  
	    data => {
			"id": 1,
			"photo": "default",
			"title": "title",
			"address": "вулиця Озаркевича, 4, Львів",
			"is_online": false,
			"website": "link",
			"phone": "number1, number2",
			"email": null,
			"region": "Львівська область",
			"tags": [3,	2, 1, 4, 5,	6, 7, 8]
		} 

## Get consulting center items, which contain certain string in title
`GET /api/centers_contains/`

	REQUEST:
		headers => {
			'Content-Type: application/json'
		}	
		data => {
			"title__icontains": "Шпиталь"
		}

	RESPONSE:
		data => {
			{
				"id": 9,
				"photo": "default",
				"title": "Шпиталь Шептицького",
				"address": "вулиця Озаркевича, 4, Львів",
				"is_online": false,
				"website": "http://spital.org.ua/likari",
				"phone": "+38 (032) 235 22 66, +38 (032) 235 22 69",
				"email": null,
				"creation_time": "2022-05-04T03:17:45+03:00",
				"region": "Львівська область",
				"tags": [3,2,1,4,5,6,7,8]
			},
			{
				"id": 13,
				"photo": "default",
				"title": "Шпиталь Шептицького",
				"address": "вулиця Озаркевича, 4, Львів",
				"is_online": false,
				"website": "http://spital.org.ua/likari",
				"phone": "+38 (032) 235 22 66, +38 (032) 235 22 69",
				"email": null,
				"creation_time": "2022-05-04T03:17:45+03:00",
				"region": "Львівська область",
				"tags": [1,2,3,4,5,6,7,8]
			}
		}
