"use strict";
// different way to write functions -1) regular 
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
// 2) using arrow function
const sub = (num1, num2) => num1 - num2;
console.log(sub(2, 3));
//3)
const mul = function (num1, num2) {
    return num1 * num2;
};
// optional parameter- (?)
function optionalpara(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log("optional parameter");
console.log(add(2, 3));
console.log(add(2, 3, 5));
//required parameter
const req = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log("required  parameter");
console.log(req(2, 3));
console.log(req(2, 3, 5));
// rest parameter
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
console.log("rest  parameter");
// let numbers=[1,2,3,4,5];
console.log(add2(2, 3, 4, 5, 6, 7));
console.log(add2(2, 3, ...[4, 5, 6, 7]));
// genric function
function getItem(items) {
    return new Array().concat(items);
}
let concatnumber = getItem([1, 2, 3, 4, 5]);
let concatString = getItem(["a", "b", "c", "d"]);
console.log("genric function");
console.log(concatnumber);
console.log(concatString);
