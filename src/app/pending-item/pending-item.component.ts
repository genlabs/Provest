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

  constructor(private pendingService:PendingMortgagesService) { }

  ngOnInit() {

  	   	console.log(this.pendingService.getPendingMortgages());
  	  	//this.pendingService.postMortgage(1,1000);
  	   	this._pendingPortfolio = this.pendingService.getPendingMortgages();
  	// this.subscription = this.pendingService.postAnnounce.subscribe(
  	// 	id => {

  	// 	})
  }



}
