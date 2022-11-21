import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trial-meal',
  templateUrl: './trial-meal.component.html',
  styleUrls: ['./trial-meal.component.css']
})
export class TrialMealComponent implements OnInit {
public showdinner:boolean=true;
public showlunch:boolean=false;
imageSrc:string = "assets/tc.jpg";
  imageSrc1:string = "assets/tc1.jpg";
  imageSrc2:string = "assets/tc2.jpg";
  imageSrc3:string = "assets/tc3.jpg";
  constructor() { }

  ngOnInit(): void {
  }
dinner(){
this.showdinner=true;
this.showlunch=false;
}
lunch(){
  console.log("working");
  this.showdinner=false;
  this.showlunch=true;
  }

}
