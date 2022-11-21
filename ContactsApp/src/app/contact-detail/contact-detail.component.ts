import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../Contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  // contact:Contact=this.conatactsService.getContact(this.route.snapshot.paramMap.get('id'));

contact!:Contact;

  constructor(public data:ContactsService ,private route:Router){
    
  }

  ngOnInit(): void {
    this.contact=this.data.contact;
  }

navigate(){
  this.route.navigate(["editdetails",this.contact.id])
}


}
