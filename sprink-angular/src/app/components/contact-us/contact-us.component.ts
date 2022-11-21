import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
public name:string="";
public  phone:number= +91;
public email:string="";
public subject:string="";
public msg:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
