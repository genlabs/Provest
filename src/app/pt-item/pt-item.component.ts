import { Component, OnInit, Input } from '@angular/core';
import { Mortgage } from '../mortgage';
@Component({
  selector: 'app-pt-item',
  templateUrl: './pt-item.component.html',
  styleUrls: ['./pt-item.component.css']
})
export class PtItemComponent implements OnInit {

  private _mortgage:Mortgage = null;

  constructor() { }

  ngOnInit() {
     this._mortgage = {
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
            "img/kaon1.jpg",
            "img/kaon2.jpg",
            "img/kaon3.jpg",
            "img/kaon4.jpg"
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
            "profileImageURL" : "img/eric.png",
            "email" : "eric@gmail.com"
        }
    }
}
  }

  @Input()
  set mortgage(p:Mortgage) {
      this._mortgage = p;
  }

  get mortgage() {
      return this._mortgage;
  }

}
