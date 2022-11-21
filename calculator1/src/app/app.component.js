"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
const core_1 = require("@angular/core");
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'calculator';
        this.num1 = 0;
        this.num2 = 0;
        this.choice = 0;
        this.result = 0;
    }
    calculate() {
        let num1 = this.num1;
        let num2 = this.num2;
        let operation = this.choice;
        switch (operation) {
            case 1:
                this.result = num1 + num2;
                break;
            case 2:
                this.result = num1 - num2;
                break;
            case 3:
                this.result = num1 * num2;
                break;
            case 4:
                this.result = num1 / num2;
                break;
            case 5:
                this.result = num1 % num2;
                break;
            case 6:
                alert("good bye");
                break;
            default:
                alert("Invalid choice");
                break;
        }
    }
};
AppComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
