import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'moves-list-home',
  templateUrl: './moves-list-home.component.html',
  styleUrls: ['./moves-list-home.component.scss']
})
export class MovesListHomeComponent implements OnInit {
  @Input() loggedinUser: User
  @Input() contact: Content

  constructor() { }

  ngOnInit(): void {
  }

}
