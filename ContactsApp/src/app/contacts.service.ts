import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './Contact';
import { CONTACT_DATA } from './Contact-Data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
 contact!:Contact;



  constructor(private http:HttpClient) { }

  getContacts(){
    return this.http.get<any>("http://localhost:3000/Contact");
  }

  UpdateContact(contact:Contact){
    console.log(contact);
    const url=`http://localhost:3000/contact/$(this.contact.id)`
    return this.http.patch<Contact>(url,contact);
  }




  // getContacts(){          /// static data
  //   return CONTACT_DATA;
  // }




//   getContact(id:number){
//     return this.getContacts().find(contact=>contact.id===id);
  
// }

contactTodisplay(contact:Contact){
this.contact=contact;
console.log("contact"+contact);

console.log("service"+this.contact.id);
}



}