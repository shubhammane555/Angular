import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ViewMenuComponent } from './components/view-menu/view-menu.component';
import { TrialMealComponent } from './components/trial-meal/trial-meal.component';
import { SigninComponent } from './components/signin/signin.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
  
    HeaderComponent,
    AboutUsComponent,
    ViewMenuComponent,
    TrialMealComponent,
    SigninComponent,
    ContactUsComponent,
    FooterComponent,
    HomepageComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
