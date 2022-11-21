import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public email:string="";
  public password:string="";
  public email1:string="";
  public showlogin:boolean=true;
  public forgetpassword:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  forget(){
    this.showlogin=false;
    this.forgetpassword=true; 
  console.log(this.showlogin);
  console.log(this.forgetpassword);
  }


}
