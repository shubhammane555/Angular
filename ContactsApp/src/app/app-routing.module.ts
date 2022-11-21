import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';

const routes: Routes = [
  {path:'contact-list',component:ContactsListComponent },
  {path:'contact-detail',component:ContactDetailComponent },
  {path:'editdetails/:id',component:EditdetailsComponent },
  {path:'**' , component:ContactsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
