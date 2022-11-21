import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-20';

  public group:string="";
  public artifact:string="";
 public  dec:string="";
  public package:string="";

  updateData(){
    this.artifact=this.package.substring(12);
  }

  jsonData(){
    if(this.artifact.length<=0)
    {
      alert("enter the artifact field **** ");
    }
    else{
      console.log( `{
      \n "Group":"${this.group}"\n
        "Artifact":"${this.artifact}"\n
       " Description:"${this.dec}"\n
        "package":"com.example.${this.artifact}" \n  }`
      );
      
    }
  }
}
