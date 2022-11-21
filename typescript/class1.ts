// classes- (#-private,protected,getter,setter,static mathod,regular method)
import {User,Login} from './interface';





interface Address{
    street :string;
    city:string;
    state:string;
    pin:string;
}



class Employee1 implements Login{
    #id:number; // properties
    protected name:string;
    address:Address;

    static getEmpCount():number{
return 50;
    }



    get empid():number{ //getter
        return this.#id;
    }
    set empid(id:number){ //setter
        this.#id=id;
    }


constructor(id:number,name:string,address:Address){
    this.#id=id;
    this.address=address;
  
    this.name=name;
}

Login():User{
    return{name:"shubham",age:2,id:7,email:""}; 
}


getNameWithAddress():string{
    return `${this.name} stay at ${this.address}`;//by using string literal -$
}

}
let john1=new Employee1(1,"sss",
{street:"bdcolony",city:"kop",state:"maharastra",pin:"xcv"});
console.log(john1);
console.log(john1.getNameWithAddress());

 john1.empid=100; //setter
 console.log(john1.empid); //getter

 let z=Employee1.getEmpCount();// (without creating instence we can call method)
 //by using class name we can call method only if we are using static 
console.log(z);
 // in this extended class we can use all properties of employee1 class
class Manager extends Employee1{
    constructor(id:number,name:string,address:Address){
        super(id,name,address)
    }
}
    let x=john1.getNameWithAddress();
    console.log(x);
    let y=new Manager(3,"abc","rrr");  //if we want to get that interface properties then we have to chnafe
    // this address im not doing this becaz of previous example
    console.log(y.getNameWithAddress());

