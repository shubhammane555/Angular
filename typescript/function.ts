// different way to write functions -1) regular 
function add(num1:number,num2:number):number{
    return num1+num2;
}
console.log(add(2,3));


// 2) using arrow function
const sub=(num1:number,num2:number):number => num1-num2;
console.log(sub(2,3));

//3)
const mul=function(num1:number,num2:number):number{
    return num1*num2;
};

// optional parameter- (?)
function optionalpara(num1:number,num2:number,num3?:number):number{
    return num3 ? num1 + num2 + num3: num1 + num2;
}
console.log("optional parameter");
console.log(add(2,3));
console.log(add(2,3,5));


//required parameter

const req=(num1:number,num2:number,num3=10):number=>num1-num2-num3;
console.log("required  parameter");
console.log(req(2,3));
console.log(req(2,3,5));


// rest parameter

function add2(num1:number,num2:number,...num3:number[]):number{
    return num1+num2+num3.reduce((a,b)=>a+b,0);
}
console.log("rest  parameter");
// let numbers=[1,2,3,4,5];
console.log(add2(2,3,4,5,6,7));
console.log(add2(2,3,...[4,5,6,7]));

// genric function

function getItem<Type>(items:Type[]):Type[]{
    return  new Array<Type>().concat(items);
}
let concatnumber=getItem<number>([1,2,3,4,5]);
let concatString=getItem<string>(["a","b","c","d"]);

console.log("genric function");
console.log(concatnumber);
console.log(concatString);
