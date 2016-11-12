import { Component, OnInit } from '@angular/core';
import {PendingMortgagesService} from '../pending-mortgages.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {

  constructor(private pendingMortgagesService:PendingMortgagesService) { }

  ngOnInit() {

  	this.pendingMortgagesService.postMortgage(1);

  	console.log(this.pendingMortgagesService.getPendingMortgages());

  }

}
