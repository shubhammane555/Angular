import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hospital';
  somevalue:string="";

 
    count=0;
    Increment(){
      this.count++;
    }
    Decrement(){
      this.count--;
    }
  
}
