import { Component, OnInit } from '@angular/core';
import { PendingMortgagesService} from '../pending-mortgages.service';
import { PendingMortgages} from '../pending-mortgages';
import { Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'pending-item',
  templateUrl: './pending-item.component.html',
  styleUrls: ['./pending-item.component.css']
})
export class PendingItemComponent implements OnInit {

	private _pendingPortfolio= [];
	//private hasNewPost:boolean;
	subscription:Subscription;
  private daysleft:number[] = [];

  constructor(private pendingService:PendingMortgagesService) { }

  ngOnInit() {

  	   	console.log(this.pendingService.getPendingMortgages());
  	  	//this.pendingService.postMortgage(1,1000);
  	   	this._pendingPortfolio = this.pendingService.getPendingMortgages();
        
        var one_day=1000*60*60*24;

        for(var i=0; i< this._pendingPortfolio.length; i++){
          var date1 = this._pendingPortfolio[i].listingDate.startDate.getTime();
          var date2 = this._pendingPortfolio[i].listingDate.endDate.getTime();

          this.daysleft.push(Math.round(date2 - date1/one_day));

        }
          

        
  }



}
