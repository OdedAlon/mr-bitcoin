import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss'],
})
export class MovesListComponent implements OnInit {
  @Input() loggedinUser: User
  @Input() contact: Contact

  constructor() { }
  
  ngOnInit() {
  }
}
