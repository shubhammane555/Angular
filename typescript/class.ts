// classes- ( creating class and defining constructor at a time only 1 constructor will define
//either default or regular)(! it is to remove error when we use default constructor)



class Employee{
    id:number; // properties
    name:string;
    address!:string;


constructor(id:number,name:string,address:string){
    this.id=id;
    this.address=address;
  
    this.name=name;
}
}
const john=new Employee(1,"sss","xxx");
console.log(john);
