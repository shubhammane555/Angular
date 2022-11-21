import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bank1';
  
  imageSrc:string = "assets/images/bank1.png";

  public showfund:boolean=false;
  public showuser:boolean=false;
  public showpayment:boolean=false

  fundpage(){
    this.showfund=true;
    this.showpayment=false;
    this.showpayment=false;
  }

  userpage(){
    this.showuser=true;
    this.showfund=false;
    this.showpayment=false;
  }

  payment(){
    this.showuser=false;
    this.showfund=false;
    this.showpayment=true;
  }

}
