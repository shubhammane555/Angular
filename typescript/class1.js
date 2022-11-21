"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee1_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee1 {
    constructor(id, name, address) {
        _Employee1_id.set(this, void 0); // properties
        __classPrivateFieldSet(this, _Employee1_id, id, "f");
        this.address = address;
        this.name = name;
    }
    static getEmpCount() {
        return 50;
    }
    get empid() {
        return __classPrivateFieldGet(this, _Employee1_id, "f");
    }
    set empid(id) {
        __classPrivateFieldSet(this, _Employee1_id, id, "f");
    }
    Login() {
        return { name: "shubham", age: 2, id: 7, email: "" };
    }
    getNameWithAddress() {
        return `${this.name} stay at ${this.address}`; //by using string literal -$
    }
}
_Employee1_id = new WeakMap();
let john1 = new Employee1(1, "sss", { street: "bdcolony", city: "kop", state: "maharastra", pin: "xcv" });
console.log(john1);
console.log(john1.getNameWithAddress());
john1.empid = 100; //setter
console.log(john1.empid); //getter
let z = Employee1.getEmpCount(); // (without creating instence we can call method)
//by using class name we can call method only if we are using static 
console.log(z);
// in this extended class we can use all properties of employee1 class
class Manager extends Employee1 {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
let x = john1.getNameWithAddress();
console.log(x);
let y = new Manager(3, "abc", "rrr"); //if we want to get that interface properties then we have to chnafe
// this address im not doing this becaz of previous example
console.log(y.getNameWithAddress());
