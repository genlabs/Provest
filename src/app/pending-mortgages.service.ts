import { Injectable } from '@angular/core';
import {MortgagesService} from './mortgages.service';
import {UtilService} from './util.service';
import {Subject} from 'rxjs/Subject';
import { PendingMortgages } from './pending-mortgages';




@Injectable()
export class PendingMortgagesService {

  private pendingMortgages:PendingMortgages[] = [];
	private postAnnouncement = new Subject<number>();
	postAnnounce = this.postAnnouncement.asObservable();
  constructor(private mortgagesService:MortgagesService, private utilService:UtilService) { }
   
   	getPendingMortgages() {
   	   return this.pendingMortgages;
  	}

  	postMortgage(id:number, investedAmount:number){

      this.mortgagesService.getMortgageById(id).then(
        mortgage =>  {
          var pendingMortgage:PendingMortgages = <PendingMortgages> mortgage;
          pendingMortgage.status = 'pending';
          pendingMortgage.investedAmount = investedAmount;
          pendingMortgage.percentageOwned = (investedAmount/pendingMortgage.pledge)*100;
          pendingMortgage.monthlyPayment = this.utilService.monthlyPayment(
          pendingMortgage.interestRate, pendingMortgage.duration,
          pendingMortgage.pledge);
          this.pendingMortgages.push(pendingMortgage);
        }

      )
  		

  	}

  	announcePostMortgage(id:number) {
  		this.postAnnouncement.next(id);
  	}

    isMortgagePending(id:number) {
      for (var i=0; i < this.pendingMortgages.length; i++) {
        if (this.pendingMortgages[i].mId == id) {
          return true;
        }
      }
      return false;
    }

}
