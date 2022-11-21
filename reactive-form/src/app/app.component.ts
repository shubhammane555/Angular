import { Component,OnInit } from '@angular/core';
import {FormGroup ,FormControl,FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form';

  loginForm:FormGroup;
  submitted:boolean=false;
  buttonClicked : boolean = false;

  constructor(private formBuilder:FormBuilder){
    this.loginForm=new FormGroup({
      name:new FormControl(),
      email:new FormControl(),
      password:new FormControl(),
    })
  }

  saveData(){
    console.log(this.loginForm.value);
  }

  populateData(){
this.loginForm.setValue({
  name:'shubham mane',email:'shubhammane555@gmail.com',password:'xxx@555',
});
  }

  clear(){
    this.loginForm.setValue({
      name:null,email:null,password:null,
    });
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name:['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}$")]]
    })
  
}
}