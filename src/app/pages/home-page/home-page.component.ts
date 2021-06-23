import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { BitcoinService } from 'src/app/services/bitcoin.service';
// import { Bitcoin } from 'src/app/models/bitcoin';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(private userService: UserService,
    private bitcoinService: BitcoinService) { }

  user: User
  bitcoinRate$: any
  loggedinUser: any

  async ngOnInit(): Promise<void> {
    this.loggedinUser = this.userService.getLoggedinUser()
    // if (!this.loggedinUser) window.location.assign('signup');
    this.user = await this.userService.getUserById('u101').toPromise()
    this.bitcoinRate$ = this.bitcoinService.getRate()
  }
}
