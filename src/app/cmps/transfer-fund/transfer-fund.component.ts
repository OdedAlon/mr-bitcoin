import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  @Input() contact: Contact
  @Input() maxCoins: any
  @Output() onTransferCoins = new EventEmitter<number>()
  amount: number
  constructor() { }

  ngOnInit(): void {
  }

  // onAmount(amount: number) {
  //   this.onTransferCoins.emit(this.contact, amount)
  // })
}
