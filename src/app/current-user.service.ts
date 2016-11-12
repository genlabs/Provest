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
	            "monthlyPayment" : 157,
	            "performance" : "img/performance1.jpg"
	        },
	        {
	            "mId" : 8,
	            "investedAmount" : 12500,
	            "percentageOwned" : 0.5, 
	            "monthlyPayment" : 63,
	            "performance" : "img/performance2.jpg"          
	        },
	        {
	            "mId" : 9,
	            "investedAmount" : 24000,
	            "percentageOwned" : 0.8, 
	            "monthlyPayment" : 34,
	            "performance" : "img/performance3.jpg"  
	        }
	    ]
	}
  }

}
