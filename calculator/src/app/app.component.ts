import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
public data : string = "";
  public num1:number=0;
 public num2:number=0;
 public cd:number=0;
 public result:number=0;

  calculate(fd:string ,sd:string,cd:string){
    this.num1=Number(fd);
    this.num2=Number(sd);
    this.cd=Number(cd);

    switch(cd){
      case "1":
        this.result=this.num1 + this.num2;
        break;
        case "2":
        this.result=this.num1 -this. num2;
        break;
        case "3":
        this.result=this.num1*this.num2;
        break;
        case "4":
        this.result=this.num1/this.num2;
        break;
       
        case "5":
    alert("good bye");
    break;
    default:
      alert("Invalid choice");
        break;
    }


  }
}
