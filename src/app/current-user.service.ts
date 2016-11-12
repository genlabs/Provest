import { Injectable } from '@angular/core';

@Injectable()
export class CurrentUserService {

  constructor() { }

  getCurrentUser(){
  	return {
	    "_id" : 1,
	    "name" : {
	        "first" : "Stephen",
	        "last" : "Curry"
	    },
	    "birth" : "2010-08-02T21:27:44+0000",
	    "created_time": "2016-08-02T21:27:44+0000",
	    "updated_time": "2016-08-02T21:27:44+0000",
	    "email" : "eatCurry@gmail.com",
	    "password" : "curry",
	    "profileImageURL" : "img/curry.png",
	    "address":
	     {
	         "streetAddress": "21 2nd Street",
	         "city": "New York",
	         "state": "NY",
	         "postalCode": "10021"
	     },
	     "phoneNumber":
	     [
	         {
	           "type": "home",
	           "number": "212 555-1234"
	         },
	         {
	           "type": "mobile",
	           "number": "646 555-4567"
	         }
	    ],
	    "securityQuestion" : [
	        {
	            "question" : "What is your mum's favourite dish? ",
	            "answer" : "Chicken curry"
	        },
	        {
	            "question" : "What is your favourite soccer team? ",
	            "answer" : "Chelsea"
	        }
	    ],
	    "files" : {
	        "taxDocument" : "files/taxDocument.pdf"
	    },
	    "myPortfolio" : [
	        {
	            "mId" : 7,
	            "investedAmount" : 150000,
	            "percentageOwned" : 7, 
	            "owningPeriod" : 5,
	            "monthlyPayment" : 157,
	            "interestRate" : 4,
	            "performance" : "img/performance1.jpg",
	            "property" : {
	                "name" : "Mid Level Garden",
	                "images" : [
	                    "hackathon/img/mid1.jpg",
	                    "img/mid2.jpg"
	                ], 
	                "type" : "Residential House",
	                "geoLocation" : {
	                    "latitude": 22.28,
	                    "longitude": 114.15
	                },
	                "address" : {
	                    "streetAddress": "33A Mid Levels, Central",
	                    "city": "Hong Kong",
	                    "country": "Hong Kong",
	                    "postalCode": ""
	                }, 
	                "estimatedValue" : 5000000,
	                "landlord" : {
	                    "name" : "Maxim",
	                    "financialDocument" : "files/fdfda.pdf",
	                    "address":
	                         {
	                             "streetAddress": "21 2nd Street",
	                             "city": "New York",
	                             "state": "NY",
	                             "postalCode": "10021"
	                         },
	                    "profileImageURL" : "img/maxim.png",
	                    "email" : "maxim@gmail.com"
	                }
            	}
	        },
	        {
	            "mId" : 8,
	            "investedAmount" : 12500,
	            "percentageOwned" : 0.5, 
	            "owningPeriod" : 24,
	            "monthlyPayment" : 63,
	            "interestRate" : 5,
	            "performance" : "img/performance2.jpg",
	            "property" : {
	                "name" : "Ang Mo Building",
	                "images" : [
	                    "img/angmo1.jpg",
	                    "img/angmo2.jpg"
	                ], 
	                "type" : "Office Building",
	                "geoLocation" : {
	                    "latitude": 22.28,
	                    "longitude": 114.15
	                },
	                "address" : {
	                    "streetAddress": "09 Ang Mo Kio, Bugis",
	                    "city": "Singapore",
	                    "country": "Singapore",
	                    "postalCode": ""
	                }, 
	                "estimatedValue" : 5000000,
	                "landlord" : {
	                    "name" : "Sunny Lo",
	                    "financialDocument" : "files/fdfda.pdf",
	                    "address":
	                         {
	                             "streetAddress": "21 2nd Street",
	                             "city": "New York",
	                             "state": "NY",
	                             "postalCode": "10021"
	                         },
	                    "profileImageURL" : "img/sunny.png",
	                    "email" : "sunny@gmail.com"
	                }
            	}          
	        },
	        {
	            "mId" : 9,
	            "investedAmount" : 24000,
	            "percentageOwned" : 0.8, 
	            "owningPeriod" : 12,
	            "monthlyPayment" : 34,
	            "interestRate" : 6,
	            "performance" : "img/performance3.jpg",
	            "property" : {
	                "name" : "Cheung Heng Build.",
	                "images" : [
	                    "img/CheungHeng1.jpg",
	                    "img/CheungHeng2.jpg"
	                ], 
	                "type" : "Shopping Mall",
	                "geoLocation" : {
	                    "latitude": 22.28,
	                    "longitude": 114.15
	                },
	                "address" : {
	                    "streetAddress": "4 Beijing Street, Tsim Sha Tsui",
	                    "city": "Hong Kong",
	                    "country": "Hong Kong",
	                    "postalCode": ""
	                }, 
	                "estimatedValue" : 5000000,
	                "landlord" : {
	                    "name" : "Puiman",
	                    "financialDocument" : "files/fdfda.pdf",
	                    "address":
	                         {
	                             "streetAddress": "21 2nd Street",
	                             "city": "New York",
	                             "state": "NY",
	                             "postalCode": "10021"
	                         },
	                    "profileImageURL" : "img/pui.png",
	                    "email" : "pui@gmail.com"
	                }
	            }
	        }
	    ]
	}
  }

}
