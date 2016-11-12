import { Injectable } from '@angular/core';
import {MortgagesService} from './mortgages.service';

var pendingMortgages = [];

@Injectable()
export class PendingMortgagesService {

  constructor(private mortgagesService:MortgagesService) { }

   	getPendingMortgages() {
   	   return pendingMortgages;
  	}

  	postMortgage(id:number, investedAmount:number){
  		var pendingMortgage = this.mortgagesService.getMortgageById(id);
  		pendingMortgage.status = 'pending';
  		pendingMortgage.investedAmount = investedAmount;
  		pendingMortgage.percentageOwned = (investedAmount/pendingMortgage.pledge)*100;
  		pendingMortgages.push(pendingMortgage);
        //pendingMortgage.monthlyPayment = interestRate/100
  	}

}
