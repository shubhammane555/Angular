import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../Contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  // contact:Contact=this.conatactsService.getContact(this.route.snapshot.paramMap.get('id'));



  // constructor(public data:ContactsService ,private route:ActivatedRoute){}

  // ngOnInit(): void {
  // }
  
  contact!:Contact;

  constructor(private route:ActivatedRoute,
    private contactsService:ContactsService) { }

  ngOnInit() {
   this.contactsService
   .getContact(this.route.snapshot.paramMap.get('id'))
   .subscribe(contact=>this.contact = contact);
  }

}
