import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bank';

  imageSrc:string = "assets/images/bank1.png";

  public showfund:boolean=false;
  

  fundpage(){
    this.showfund=true;
  }
}
