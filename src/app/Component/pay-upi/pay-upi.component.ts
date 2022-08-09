import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-upi',
  templateUrl: './pay-upi.component.html',
  styleUrls: ['./pay-upi.component.css']
})
export class PayUpiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  copied(){
    
    // e.ArrowBackIcon();
    // window.select("12123");
    console.log("pressd");
    navigator.clipboard.writeText("123456@");
    alert("UPI ID Is Copied");
  
}

}
