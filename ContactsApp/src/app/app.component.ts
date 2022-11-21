import { Component, OnInit } from '@angular/core';
import { Contact } from './Contact';
import { CONTACT_DATA } from './Contact-Data';
import { ContactsService } from './contacts.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // contacts!:Array<Contact>; //for lab4

  contacts:any=[];// for lab 7

  constructor(private contactsService:ContactsService){}

  ngOnInit(): void {
// this.contactsService.getContacts().subscribe((data)=>{
//   this.contacts=data;
//   console.log(this.contacts)
// });
  }





  title = 'ContactsApp';
  imageSrc:string = "assets/img.jpg"; //for lab2
  
  // contact:Contact[]=[
  //   {
  //     id: 6,
  //     name: 'Diana Ellis',
  //     email: '',
  //     phone: '',
  //     birthday: '',
  //     website: '',
  //     image: 'assets/images/6.jpg',
  //     address: {
  //       street: '6554 park lane',
  //       zip: '43378',
  //       city: 'Rush',
  //       country: 'United States'
  //     }
  //   }
  // ];

  // contacts:Array<Contact>=CONTACT_DATA;//for lab 3


}
