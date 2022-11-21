import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SigninComponent } from './components/signin/signin.component';
import { TrialMealComponent } from './components/trial-meal/trial-meal.component';
import { ViewMenuComponent } from './components/view-menu/view-menu.component';

const routes: Routes = [
  {path:'about-us',component:AboutUsComponent },
  {path:'view-Menu',component:ViewMenuComponent },
  {path:'trial-meal',component:TrialMealComponent },
  {path:'signin',component:SigninComponent },
  {path:'header',component:HeaderComponent },
  {path:'contact-us',component:ContactUsComponent },
  {path:'**',component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
