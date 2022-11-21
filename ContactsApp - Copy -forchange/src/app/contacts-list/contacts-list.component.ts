import { Component, OnInit } from '@angular/core';
import { Contact } from '../Contact';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
//   index !: Number ; 
// contact!:Contact;
//   contacts!:Array<Contact>; //for lab4

contacts:Observable<Array<Contact>>=this.contactsService.getContacts()

  constructor(private contactsService:ContactsService, private router: Router){}

  ngOnInit(): void {
//  this.contacts=this.contactsService.getContacts();
  }

  // contactClicked(contact:Contact){
  // console.log("clicked");

  // this.contactsService.contactTodisplay(contact);

  // this.router.navigate([
  //   "/contact-detail"
  // ])

  }





  // trackByContactId(index: any,contact: { id: any; }){
  //   return contact.id;
  // }

