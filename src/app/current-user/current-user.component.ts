import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../current-user.service';

@Component({
  selector: 'current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit {

	private currentUser = null;
  constructor(private currentUserService: CurrentUserService) { }

  ngOnInit() {

		this.currentUser = this.currentUserService.getCurrentUser();
		console.log(this.currentUser);
  }

}
