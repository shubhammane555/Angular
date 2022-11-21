import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import {MatButtonModule} from '@angular/material/button';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import { ContactsService } from './contacts.service';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { NgModel } from '@angular/forms';
import {FormsModule} from  '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ContactDetailComponent,
    EditdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,

    
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
