import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  constructor(private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }
  contact: Contact
  subscription: Subscription

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data.contact || this.contactService.getEmptyContact()
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onBack() {
    this.location.back()
  }

  async onSaveContact() {
    await this.contactService.saveContact(this.contact).toPromise()
    this.router.navigateByUrl(this.contact._id ? `/contact/${this.contact._id}` : '/contact')
  }

  async onDeleteContact() {
    await this.contactService.removeContact(this.contact._id).toPromise()
    this.router.navigateByUrl('/')
  }
}
