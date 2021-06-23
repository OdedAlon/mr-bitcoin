import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  loggedinUser: any

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  this.loggedinUser = this.userService.getLoggedinUser()
  // if (!this.loggedinUser) this.loggedinUser = {name: ''}
  }

}
