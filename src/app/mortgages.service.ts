import { Injectable } from '@angular/core';

var mortgages = [{
            "mId" : 1,
            "pledge" : 1000000,
            "status" : "listing", //change to onhold when submitted deposit
            "created_time": "2016-08-02T21:27:44+0000",
            "updated_time": "2016-08-02T21:27:44+0000",
            "appraisalValue" : 50000000,
            "interestRate" : 4,
            "duration" : 5,
            "listingDate" : {
                 "startDate": "2016-11-1",
                 "endDate": "2016-12-12"
             },
            "accumulatedFund" : {
                 "amount": 540000,
                 "numOfParticipants": 12,
                 "waitingList": 0
             },
            "paymentType" : "Lump Sum or Monthly Payment",
            "property" : {
                "name" : "Ka On Building",
                "images" : [
                    "/hackathon/img/kaon1.jpg",
                    "/hackathon/img/kaon2.jpg",
                    "/hackathon/img/kaon3.jpg",
                    "/hackathon/img/kaon4.jpg"
                ], 
                "type" : "Office Building",
                "geoLocation" : {
                    "latitude": 22.28,
                    "longitude": 114.15
                },
                "address" : {
                    "streetAddress": "5 Connaught Road West, Sheung Wan",
                    "city": "Hong Kong",
                    "country": "Hong Kong",
                    "postalCode": ""
                }, 
                "estimatedValue" : 5000000,
                "landlord" : {
                    "name" : "Eric Thon",
                    "financialDocument" : "files/fdfda.pdf",
                    "address":
                         {
                             "streetAddress": "21 2nd Street",
                             "city": "New York",
                             "state": "NY",
                             "postalCode": "10021"
                         },
                    "profileImageURL" : "/hackathon/img/eric.png",
                    "email" : "eric@gmail.com"
                }
            }
        },
        {
            "mId" : 2,
            "pledge" : 50000,
            "status" : "listing", //change to onhold when submitted deposit
            "created_time": "2016-08-02T21:27:44+0000",
            "updated_time": "2016-08-02T21:27:44+0000",
            "appraisalValue" : 50000000,
            "interestRate" : 3.5,
            "duration" : 4,
            "listingDate" : {
                 "startDate": "2016-11-1",
                 "endDate": "2016-12-12"
             },
            "accumulatedFund" : {
                 "amount": 10000,
                 "numOfParticipants": 4,
                 "waitingList": 0
             },
            "paymentType" : "Lump Sum or Monthly Payment",
            "property" : {
                "name" : "Cheung Kong Building",
                "images" : [
                    "/hackathon/img/ck1.jpg",
                    "/hackathon/img/ck2.jpg"
                ], 
                "type" : "Shopping Mall",
                "geoLocation" : {
                    "latitude": 22.28,
                    "longitude": 114.15
                },
                "address" : {
                    "streetAddress": "Toronto Street 45",
                    "city": "Toronto",
                    "country": "Canada",
                    "postalCode": ""
                }, 
                "estimatedValue" : 5000000,
                "landlord" : {
                    "name" : "Li Ka Shing",
                    "financialDocument" : "files/fdfda.pdf",
                    "address":
                         {
                             "streetAddress": "21 2nd Street",
                             "city": "New York",
                             "state": "NY",
                             "postalCode": "10021"
                         },
                    "profileImageURL" : "/hackathon/img/kashing.png",
                    "email" : "kashing@gmail.com"
                }
            }
        },
        {
            "mId" : 3,
            "pledge" : 3224340,
            "status" : "listing", //change to onhold when submitted deposit
            "created_time": "2016-08-02T21:27:44+0000",
            "updated_time": "2016-08-02T21:27:44+0000",
            "appraisalValue" : 50000000,
            "interestRate" : 5.2,
            "duration" : 8,
            "listingDate" : {
                 "startDate": "2016-11-1",
                 "endDate": "2016-12-12"
             },
            "accumulatedFund" : {
                 "amount": 1224340,
                 "numOfParticipants": 20,
                 "waitingList": 0
             },
            "paymentType" : "Lump Sum or Monthly Payment",
            "property" : {
                "name" : "Hotel Koko",
                "images" : [
                    "/hackathon/img/koko1.jpg",
                    "/hackathon/img/koko2.jpg"
                ], 
                "type" : "Hotel",
                "geoLocation" : {
                    "latitude": 22.28,
                    "longitude": 114.15
                },
                "address" : {
                    "streetAddress": "5 Shanghai Street",
                    "city": "Shanghai",
                    "country": "China",
                    "postalCode": ""
                }, 
                "estimatedValue" : 5000000,
                "landlord" : {
                    "name" : "Eric Thon",
                    "financialDocument" : "files/fdfda.pdf",
                    "address":
                         {
                             "streetAddress": "21 2nd Street",
                             "city": "New York",
                             "state": "NY",
                             "postalCode": "10021"
                         },
                    "profileImageURL" : "/hackathon/img/drump.png",
                    "email" : "drump@gmail.com"
                }
            }
        },
        {
            "mId" : 4,
            "pledge" : 340000,
            "status" : "listing", //change to onhold when submitted deposit
            "created_time": "2016-08-02T21:27:44+0000",
            "updated_time": "2016-08-02T21:27:44+0000",
            "appraisalValue" : 50000000,
            "interestRate" : 3,
            "duration" : 2,
            "listingDate" : {
                 "startDate": "2016-11-1",
                 "endDate": "2016-12-12"
             },
            "accumulatedFund" : {
                 "amount": 40000,
                 "numOfParticipants": 8,
                 "waitingList": 0
             },
            "paymentType" : "Lump Sum or Monthly Payment",
            "property" : {
                "name" : "Meng's house",
                "images" : [
                    "/hackathon/img/meng1.jpg",
                    "/hackathon/img/meng2.jpg"
                ], 
                "type" : "Residential House",
                "geoLocation" : {
                    "latitude": 22.28,
                    "longitude": 114.15
                },
                "address" : {
                    "streetAddress": "3 Cyberport, Cyberport",
                    "city": "Hong Kong",
                    "country": "Hong Kong",
                    "postalCode": ""
                }, 
                "estimatedValue" : 5000000,
                "landlord" : {
                    "name" : "John Liu",
                    "financialDocument" : "files/fdfda.pdf",
                    "address":
                         {
                             "streetAddress": "21 2nd Street",
                             "city": "New York",
                             "state": "NY",
                             "postalCode": "10021"
                         },
                    "profileImageURL" : "/hackathon/img/john.png",
                    "email" : "john@gmail.com"
                }
            }
        },
        {
            "mId" : 5,
            "pledge" : 224390,
            "status" : "listing", //change to onhold when submitted deposit
            "created_time": "2016-08-02T21:27:44+0000",
            "updated_time": "2016-08-02T21:27:44+0000",
            "appraisalValue" : 5000000,
            "interestRate" : 4.3,
            "duration" : 4,
            "listingDate" : {
                 "startDate": "2016-11-1",
                 "endDate": "2016-12-12"
             },
            "accumulatedFund" : {
                 "amount": 220000,
                 "numOfParticipants": 15,
                 "waitingList": 0
             },
            "paymentType" : "Lump Sum or Monthly Payment",
            "property" : {
                "name" : "ICC",
                "images" : [
                    "/hackathon/img/icc1.jpg",
                    "/hackathon/img/icc2.jpg",
                    "/hackathon/img/icc3.jpg"
                ], 
                "type" : "Office Building",
                "geoLocation" : {
                    "latitude": 22.28,
                    "longitude": 114.15
                },
                "address" : {
                    "streetAddress": "5 Connaught Road West, Liverpool",
                    "city": "Liverpool",
                    "country": "United Kingdom",
                    "postalCode": ""
                }, 
                "estimatedValue" : 5000000,
                "landlord" : {
                    "name" : "Jordan Yew",
                    "financialDocument" : "files/fdfda.pdf",
                    "address":
                         {
                             "streetAddress": "21 2nd Street",
                             "city": "New York",
                             "state": "NY",
                             "postalCode": "10021"
                         },
                    "profileImageURL" : "/hackathon/img/jordan.png",
                    "email" : "jordan@gmail.com"
                }
            }
        },
        {
            "mId" : 6,
            "pledge" : 1580000,
            "status" : "listing", //change to onhold when submitted deposit
            "created_time": "2016-08-02T21:27:44+0000",
            "updated_time": "2016-08-02T21:27:44+0000",
            "appraisalValue" : 50000000,
            "interestRate" : 6,
            "duration" : 10,
            "listingDate" : {
                 "startDate": "2016-11-1",
                 "endDate": "2016-12-12"
             },
            "accumulatedFund" : {
                 "amount": 540000,
                 "numOfParticipants": 12,
                 "waitingList": 0
             },
            "paymentType" : "Lump Sum or Monthly Payment",
            "property" : {
                "name" : "Festival Walk",
                "images" : [
                    "/hackathon/img/fes1.jpg",
                    "/hackathon/img/fes2.jpg"
                ], 
                "type" : "Shopping Mall",
                "geoLocation" : {
                    "latitude": 22.28,
                    "longitude": 114.15
                },
                "address" : {
                    "streetAddress": "5 Connaught Road West, Shatin",
                    "city": "Chicago",
                    "country": "United States",
                    "postalCode": ""
                }, 
                "estimatedValue" : 5000000,
                "landlord" : {
                    "name" : "Tim Ng",
                    "financialDocument" : "files/fdfda.pdf",
                    "address":
                         {
                             "streetAddress": "21 2nd Street",
                             "city": "New York",
                             "state": "NY",
                             "postalCode": "10021"
                         },
                    "profileImageURL" : "/hackathon/img/tim.png",
                    "email" : "tim@gmail.com"
                }
            }
        },
        {
            "mId" : 7,
            "pledge" : 500000,
            "status" : "funded", //change to onhold when submitted deposit
            "created_time": "2016-08-02T21:27:44+0000",
            "updated_time": "2016-08-02T21:27:44+0000",
            "appraisalValue" : 1500000,
            "interestRate" : 4,
            "duration" : 5,
            "listingDate" : {
                 "startDate": "2016-11-1",
                 "endDate": "2016-12-12"
             },
            "accumulatedFund" : {
                 "amount": 500000,
                 "numOfParticipants": 12,
                 "waitingList": 0
             },
            "paymentType" : "Lump Sum or Monthly Payment",
            "property" : {
                "name" : "Mid Level Garden",
                "images" : [
                    "/hackathon/img/mid1.jpg",
                    "/hackathon/img/mid2.jpg"
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
                    "profileImageURL" : "/hackathon/img/maxim.png",
                    "email" : "maxim@gmail.com"
                }
            }
        },
        {
            "mId" : 8,
            "pledge" : 840000,
            "status" : "funded", //change to onhold when submitted deposit
            "created_time": "2016-08-02T21:27:44+0000",
            "updated_time": "2016-08-02T21:27:44+0000",
            "appraisalValue" : 50000000,
            "interestRate" : 4,
            "duration" : 5,
            "listingDate" : {
                 "startDate": "2016-11-1",
                 "endDate": "2016-12-12"
             },
            "accumulatedFund" : {
                 "amount": 840000,
                 "numOfParticipants": 12,
                 "waitingList": 0
             },
            "paymentType" : "Lump Sum or Monthly Payment",
            "property" : {
                "name" : "Ang Mo Building",
                "images" : [
                    "/hackathon/img/angmo1.jpg",
                    "/hackathon/img/angmo2.jpg"
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
                    "profileImageURL" : "/hackathon/img/sunny.png",
                    "email" : "sunny@gmail.com"
                }
            }
        },
        {
            "mId" : 9,
            "pledge" : 200000,
            "status" : "funded", //change to onhold when submitted deposit
            "created_time": "2016-08-02T21:27:44+0000",
            "updated_time": "2016-08-02T21:27:44+0000",
            "appraisalValue" : 50000000,
            "interestRate" : 4,
            "duration" : 5,
            "listingDate" : {
                 "startDate": "2016-11-1",
                 "endDate": "2016-12-12"
             },
            "accumulatedFund" : {
                 "amount": 200000,
                 "numOfParticipants": 12,
                 "waitingList": 0
             },
            "paymentType" : "Lump Sum or Monthly Payment",
            "property" : {
                "name" : "Cheung Heng Building",
                "images" : [
                    "/hackathon/img/CheungHeng1.jpg",
                    "/hackathon/img/CheungHeng2.jpg"
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
                    "profileImageURL" : "/hackathon/img/pui.png",
                    "email" : "pui@gmail.com"
                }
            }
        }];

@Injectable()
export class MortgagesService {

  constructor() { }


  getMortgages() {
      return mortgages;
  }

  getMortgageById(id:number) {
      return mortgages.filter( mortgage => {
          return mortgage.mId == id;
      })[0];
  }
}
