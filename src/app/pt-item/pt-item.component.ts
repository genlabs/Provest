import { Component, OnInit, Input } from '@angular/core';
import { Mortgage } from '../mortgage';
@Component({
  selector: 'pt-item',
  templateUrl: './pt-item.component.html',
  styleUrls: ['./pt-item.component.css']
})
export class PtItemComponent implements OnInit {

  private _mortgage:Mortgage = null;
  private _dayleft = 0;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set mortgage(p:Mortgage) {
      this._mortgage = p;
      let start = new Date().getTime();
      let end = new Date(this._mortgage.listingDate.endDate).getTime();
      this._dayleft = (end - start)/(24*60*60*1000);
  }

  get mortgage() {
      return this._mortgage;
  }

}
