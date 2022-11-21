import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

const routes: Routes = [
  {path:'contacts-list',component:ContactsListComponent },
  {path:'contact-detail',component:ContactDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
