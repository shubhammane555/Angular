import { Component, OnInit } from '@angular/core';
import { Contact } from '../Contact';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {


contact!:Contact;
//   contacts!:Array<Contact>; //for lab4
contacts:any=[];

  constructor(private contactsService:ContactsService, private router: Router){
    this.contactsService.getContacts().subscribe((data)=>{
      this.contacts=data;
      
    });

  }

  contactClicked(contact:Contact) {
    console.log("clicked");
    console.log(contact);
    
    this.contactsService.contact=contact;
  
    // this.contactsService.contactTodisplay(contact);
  
    this.router.navigate([
      "contact-detail"
    ])
  
    }
  ngOnInit(): void {
   
 





}
  
}
