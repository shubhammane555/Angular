import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-Task';
  fname:string="shuabham";
  lname:string="mane";


  oneWayBinding(){
    alert("hii its me one way binding");
  }
}
