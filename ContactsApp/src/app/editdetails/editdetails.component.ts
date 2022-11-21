import { Component, OnInit } from '@angular/core';
import { Contact } from '../Contact';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { HttpClientModule } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css']
})
export class EditdetailsComponent implements OnInit {

  contact !: Contact;
  constructor(private contactService : ContactsService , private http : HttpClientModule, private route : Router) { }

  ngOnInit(): void {
    this.contact = this.contactService.contact;
  }

  save(formDetails : NgForm){
    
    this.contactService.UpdateContact(formDetails.form.value).subscribe((data:Contact) => this.contact = <Contact>data );
    this.route.navigate(["contact-detail"])
}
}
