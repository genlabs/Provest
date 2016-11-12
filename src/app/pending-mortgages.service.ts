import { Injectable } from '@angular/core';
import {MortgagesService} from './mortgages.service';
import {UtilService} from './util.service';
import {Subject} from 'rxjs/Subject';
import { PendingMortgages } from './pending-mortgages';

var pendingMortgages = [];

@Injectable()
export class PendingMortgagesService {

	private postAnnouncement = new Subject<number>();
	postAnnounce = this.postAnnouncement.asObservable();
  constructor(private mortgagesService:MortgagesService, private utilService:UtilService) { }
   
   	getPendingMortgages() {
   	   return pendingMortgages;
  	}

  	postMortgage(id:number, investedAmount:number){
  		var pendingMortgage:PendingMortgages = <PendingMortgages> this.mortgagesService.getMortgageById(id);
      pendingMortgage.status = 'pending';
  		pendingMortgage.investedAmount = investedAmount;
  		pendingMortgage.percentageOwned = (investedAmount/pendingMortgage.pledge)*100;
        pendingMortgage.monthlyPayment = this.utilService.monthlyPayment(
        	pendingMortgage.interestRate, pendingMortgage.duration,
        	pendingMortgage.pledge);
        pendingMortgages.push(pendingMortgage);

  	}

  	announcePostMortgage(id:number) {
  		this.postAnnouncement.next(id);
  	}

}
