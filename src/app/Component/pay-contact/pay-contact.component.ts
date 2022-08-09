import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-contact',
  templateUrl: './pay-contact.component.html',
  styleUrls: ['./pay-contact.component.css']
})
export class PayContactComponent implements OnInit {
  contact=[{name:"artel", img:"img"},{name:"jio", img:"img"}, {name:"home Bill", img:"img"},{name:"TV Bill", img:"img"},
  {name:"Electricity", img:"img"},{name:"shubhm", img:"img"}
  ,{name:"shubhm", img:"img"},{name:"shubhm", img:"img"},
  {name:"shubhm", img:"img"},{name:"shubhm", img:"img"}
]

  constructor() { }

  ngOnInit(): void {
  }

}
