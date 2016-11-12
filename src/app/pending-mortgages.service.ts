import { Injectable } from '@angular/core';
import {MortgagesService} from './mortgages.service';
import {UtilService} from './util.service';


var pendingMortgages = [];

@Injectable()
export class PendingMortgagesService {

  constructor(private mortgagesService:MortgagesService, private utilService:UtilService) { }

   	getPendingMortgages() {
   	   return pendingMortgages;
  	}

  	postMortgage(id:number, investedAmount:number){
  		// var pendingMortgage = this.mortgagesService.getMortgageById(id);
  		// pendingMortgage.status = 'pending';
  		// pendingMortgage.investedAmount = investedAmount;
  		// pendingMortgage.percentageOwned = (investedAmount/pendingMortgage.pledge)*100;
    //     pendingMortgage.monthlyPayment = this.utilService.monthlyPayment(
    //     	pendingMortgage.interestRate, pendingMortgage.duration,
    //     	pendingMortgage.pledge);
    //     pendingMortgages.push(pendingMortgage);
  	}

}
