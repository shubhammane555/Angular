import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  public num1:number=0;
 public num2:number=0;
 public choice:number=0;
 public result:number=0;

  calculate(){
    let num1=this.num1;
    let num2=this.num2;
    let operation=this.choice;

    switch(operation){
      case 1:
        this.result=num1 + num2;
        break;
        case 2:
        this.result=num1 - num2;
        break;
        case 3:
        this.result=num1*num2;
        break;
        case 4:
        this.result=num1/num2;
        break;
        case 5:
        this.result=num1%num2;
        break;
        case 6:
    alert("good bye");
    break;
    default:
      alert("Invalid choice");
        break;
    }


  }
}