"use strict";
// data type- 1)string
let fname = "shubham";
let newfname = fname.toUpperCase();
console.log(newfname);
//2) number
let age = 40;
console.log(age);
let dob = "20";
let result = parseInt(dob);
console.log(result);
// 3)boolean -when u defining the boolean u have to give default value
let isvalid = false;
console.log(isvalid);
//4) Array 
let emplist;
emplist = ["shubham", "suraj"];
let numlist;
numlist = [1, 2, 3, 4, 5];
//filter & find & reduce
let result1 = numlist.filter((num) => num > 2);
console.log(result1);
let result2 = numlist.find((num) => num === 2);
console.log(result2);
let sum = numlist.reduce((acc, num) => acc + num);
console.log(sum);
let c = 1 /* Color.blue */;
//6) tuple 
let swapnumbs;
function swapnumbers(num1, num2) {
    return [num1, num2];
}
swapnumbs = swapnumbers(10, 20);
swapnumbs[0];
swapnumbs[1];
//7) any
let department;
department = "it";
department = 10;
console.log(department);
