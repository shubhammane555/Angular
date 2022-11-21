import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticalComponent } from './artical/artical.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'artical',component:ArticalComponent},
  {path:'news',component:NewsComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
