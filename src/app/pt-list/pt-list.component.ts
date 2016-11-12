import { Component, OnInit } from '@angular/core';
import { MortgagesService } from '../mortgages.service';

@Component({
  selector: 'app-pt-list',
  templateUrl: './pt-list.component.html',
  styleUrls: ['./pt-list.component.css']
})
export class PtListComponent implements OnInit {

  constructor(private mortgatesService:MortgagesService) { }

  ngOnInit() {
      
  }

}
