import { Component, OnInit, Input } from '@angular/core';
import { Mortgage } from '../mortgage';
@Component({
  selector: 'pt-item',
  templateUrl: './pt-item.component.html',
  styleUrls: ['./pt-item.component.css']
})
export class PtItemComponent implements OnInit {

  private _mortgage:Mortgage = null;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set mortgage(p:Mortgage) {
    console.log(p.property);
      this._mortgage = p;
  }

  get mortgage() {
      return this._mortgage;
  }

}
