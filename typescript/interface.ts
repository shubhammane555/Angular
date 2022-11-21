export interface User{

    name:string;
    age?:number;
    id:number;
    email:string;

}
let user:User={name:"shubham",age:2,id:5,email:""}


interface Employees extends User{
    salary:number;

}
let employeess:Employees={name:"xxx",id:3,email:"",salary:1000};

export interface Login{
    Login():User;

}