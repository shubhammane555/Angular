import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { AcctransferComponent } from './acctransfer/acctransfer.component';

@NgModule({
  declarations: [
    AppComponent,
    FundtransferComponent,
    AcctransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
