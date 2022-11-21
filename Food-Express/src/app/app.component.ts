import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Food-Express';

  public showregi:boolean=false;
  public showlogin:boolean=false;
  public loginsucess:boolean=false;
  public regisucess:boolean=false;
  public passwordfail:boolean=false;
  public forgetpassword:boolean=false;
  public homepage:boolean=false;
  public email1:string="";
  public password:string="";
  imageSrc:string = "assets/tc.jpg";
  imageSrc1:string = "assets/tc1.jpg";
  imageSrc2:string = "assets/tc2.jpg";
  imageSrc3:string = "assets/tc3.jpg";

  register(){
    this.showregi=true;
    this.showlogin=false;
    this.loginsucess=false;
    this.regisucess=false;
    this.passwordfail=false;
    this.forgetpassword=false;
    this.homepage=false;
  }

  registration(){
    this.showregi=false;
    this.showlogin=false;
    this.loginsucess=false;
    this.regisucess=true; 
    this.passwordfail=false;
    this.forgetpassword=false;
    this.homepage=false;
  }


  login(){
    this.showregi=false;
    this.showlogin=true;
    this.loginsucess=false;
    this.regisucess=false;
    this.passwordfail=false;
    this.forgetpassword=false;
    this.homepage=false;
  }

  loged(){
    this.showregi=false;
    this.showlogin=false;
    this.forgetpassword=false;
    this.regisucess=false;
   
    if(this.email1==="shubham@gmail.com" && this.password==="12345678")
    {
      this.loginsucess=true;
      this.homepage=true;
      this.passwordfail=false;
    }
    else{
      this.passwordfail=true;
    }
  }

  forget(){
    this.forgetpassword=true;
    this.showregi=false;
    this.showlogin=false;
    this.loginsucess=false;
    this.regisucess=false;
    this.passwordfail=false;
    this.homepage=false;
   
  }

}
