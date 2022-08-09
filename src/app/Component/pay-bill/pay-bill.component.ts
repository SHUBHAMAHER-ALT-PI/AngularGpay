import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-bill',
  templateUrl: './pay-bill.component.html',
  styleUrls: ['./pay-bill.component.css']
})
export class PayBillComponent implements OnInit {
  ReachareUser=[{name:"Shubbhma"}];
  constructor() { }

  ngOnInit(): void {
  }

}
