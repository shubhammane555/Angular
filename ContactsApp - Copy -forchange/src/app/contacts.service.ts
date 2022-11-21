import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './Contact';
import { CONTACT_DATA } from './Contact-Data';
import { Observable } from 'rxjs';
interface ContactResponse{item: Contact}
interface ContactsResponse{items:Contact[]}
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
public contact!:Contact;

private API_ENDPOINT :string='http://localhost:3000'

  constructor(private http:HttpClient) { }

  // getContacts(){          /// static data
  //   return CONTACT_DATA;
  // }

  getContacts():Observable<Array<Contact>>{          /// json server data request
      return this.http.get<Contact[]>(`${this.API_ENDPOINT}/contact}`)
    }
    getContact(id:any):Observable<Contact>{
    
      return this.http
      .get<Contact>(`${this.API_ENDPOINT}/contacts/${id}`)
    }

//   getContact(id:number){
//     return this.getContacts().find(contact=>contact.id===id);
  
// }

contactTodisplay(contact:Contact){
this.contact=contact;
console.log("contact"+contact);

console.log("service"+this.contact.id);
}



}