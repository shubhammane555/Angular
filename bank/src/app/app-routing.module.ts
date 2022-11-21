import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcctransferComponent } from './acctransfer/acctransfer.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';

const routes: Routes = [

  {path:'fundtransfer',component:FundtransferComponent},
  
  {path:'acctransfer',component:AcctransferComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
