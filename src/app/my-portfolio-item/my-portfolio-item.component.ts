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

  constructor(private userService:CurrentUserService) { }

  ngOnInit() {

  	     this._myPortfolio = this.userService.getCurrentUser().myPortfolio;
  }

  @Input()
  get myPortfolio() {
      return this._myPortfolio;
  }

}
