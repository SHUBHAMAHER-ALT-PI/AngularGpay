import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-self-transfer',
  templateUrl: './self-transfer.component.html',
  styleUrls: ['./self-transfer.component.css']
})
export class SelfTransferComponent implements OnInit {
  banks=[{name:"Central Bank Of india",img:"/", acno:"2023",accountType:"savings Account"}]
  constructor() { }

  ngOnInit(): void {
  }

}
