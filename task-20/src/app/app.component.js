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
        this.title = 'task-20';
        this.group = "";
        this.artifact = "";
        this.dec = "";
        this.package = "";
    }
    updateData() {
        this.artifact = this.package.substring(12);
    }
    jsonData() {
        if (this.artifact.length <= 0) {
            alert("enter the artifact field **** ");
        }
        else {
            console.log(`{
      \n "Group":"${this.group}"\n
        "Artifact":"${this.artifact}"\n
       " Description:"${this.dec}"\n
        "package":"com.example.${this.artifact}" \n  }`);
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
