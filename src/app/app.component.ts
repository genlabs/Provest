import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from './current-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Provest!';
  logo = 'hackathon/img/logo.jpeg';

  private _user = null;

  constructor(private userService:CurrentUserService) { }

  
  ngOnInit() {
		this._user = this.userService.getCurrentUser();
  }
}


