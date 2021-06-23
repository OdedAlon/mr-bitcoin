// import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  constructor(private contactService: ContactService,
    private userService: UserService,
    private route: ActivatedRoute,
  ) { }
  
  contact: Contact
  subscription: Subscription
  loggedinUser: User

  async ngOnInit(): Promise<void> {
    this.loggedinUser = this.userService.getLoggedinUser()
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data.contact
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onTransferCoins(amount: number) {
    this.userService.addMove(this.contact, amount)  }
}
