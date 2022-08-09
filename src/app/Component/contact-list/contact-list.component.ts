import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  Contact=[{name:"artel", img:"https://cdn-icons-png.flaticon.com/512/21/21104.png",contact:"734395"},{name:"jio", img:"https://cdn-icons-png.flaticon.com/512/21/21104.png" , contact:"734395874"},{name:"artel", img:"https://cdn-icons-png.flaticon.com/512/21/21104.png",contact:"734395"},{name:"jio", img:"https://cdn-icons-png.flaticon.com/512/21/21104.png" , contact:"734395874"},
  {name:"artel", img:"https://cdn-icons-png.flaticon.com/512/21/21104.png",contact:"734395"},{name:"jio", img:"https://cdn-icons-png.flaticon.com/512/21/21104.png" , contact:"734395874"},
  {name:"artel", img:"https://cdn-icons-png.flaticon.com/512/21/21104.png",contact:"734395"},{name:"jio", img:"https://cdn-icons-png.flaticon.com/512/21/21104.png" , contact:"734395874"},
  {name:"artel", img:"https://cdn-icons-png.flaticon.com/512/21/21104.png",contact:"734395"},{name:"jio", img:"https://cdn-icons-png.flaticon.com/512/21/21104.png" , contact:"734395874"},
  {name:"artel", img:"https://cdn-icons-png.flaticon.com/512/21/21104.png",contact:"734395"},{name:"jio", img:"https://cdn-icons-png.flaticon.com/512/21/21104.png" , contact:"734395874"}
  
]

  constructor() { }

  ngOnInit(): void {
  }

}
