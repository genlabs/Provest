import { Component, OnInit, Input} from '@angular/core';
import {CurrentUserService} from '../current-user.service';
import {MyPortfolio} from '../my-portfolio';

@Component({
  selector: 'my-portfolio-item',
  templateUrl: './my-portfolio-item.component.html',
  styleUrls: ['./my-portfolio-item.component.css']
})
export class MyPortfolioItemComponent implements OnInit {

	private _myPortfolio:MyPortfolio[]= [];
  private totalInvestmentAmount = 0;
  private totalMoneyEarnedFromEachPlan:number[] = [];
  private totalMoneyInvestedForEachPlan:number[] = [];
  private totalCollectedAmount= 0;
  private propertyName:string[] = [];

  constructor(private userService:CurrentUserService) { }

  ngOnInit() {

  	     this._myPortfolio = this.userService.getCurrentUser().myPortfolio;
         this.totalMoneyEarnedFromEachPlan = [];
         this.totalMoneyInvestedForEachPlan = [];
         this.propertyName = [];
         var moneyEarned = 0;

         for (var i = 0; i < this._myPortfolio.length; i++) { 
            this.totalInvestmentAmount += this._myPortfolio[i].investedAmount;
            moneyEarned = this._myPortfolio[i].owningPeriod * this._myPortfolio[i].monthlyPayment;
            this.totalMoneyEarnedFromEachPlan.push(moneyEarned);
            this.totalCollectedAmount += moneyEarned;
            this.propertyName.push(this._myPortfolio[i].property.name);
            this.totalMoneyInvestedForEachPlan.push(this._myPortfolio[i].investedAmount);
         }

  }

  @Input()
  get myPortfolio() {
      return this._myPortfolio;
  }

}
