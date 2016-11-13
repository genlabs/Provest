import { Component, OnInit } from '@angular/core';
import { MortgagesService } from '../mortgages.service';
import { Mortgage } from '../mortgage';
@Component({
  selector: 'pt-list',
  templateUrl: './pt-list.component.html',
  styleUrls: ['./pt-list.component.css']
})
export class PtListComponent implements OnInit {
  private mortgages:Mortgage[] = [];
  constructor(private mortgagesService:MortgagesService) { }

  ngOnInit() {
      this.mortgagesService.getMortgages().then(
          mortgages => {
              this.mortgages = mortgages;
          } 
       )
  }    

}
