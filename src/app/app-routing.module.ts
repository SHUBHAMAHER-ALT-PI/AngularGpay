import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankTrasferComponent } from './Component/bank-trasfer/bank-trasfer.component';

import { HomeComponent } from './Component/home/home.component';
import { PayContactComponent } from './Component/pay-contact/pay-contact.component';
import { PayOnUPIComponent } from './Component/pay-on-upi/pay-on-upi.component';
import { PayUpiComponent } from './Component/pay-upi/pay-upi.component';
import { PhonePayComponent } from './Component/phone-pay/phone-pay.component';
import { ScanComponent } from './Component/scan/scan.component';
import { SelfTransferComponent } from './Component/self-transfer/self-transfer.component';

const routes: Routes = [
  { path: 'AngularGpay', component: HomeComponent },
  { path: 'scan', component: ScanComponent },
  { path: 'contact', component: PayContactComponent },
  {path:'phonePay', component: PhonePayComponent},
  { path: 'BankTrasfer', component: BankTrasferComponent},
  { path: 'payUPI',component:PayOnUPIComponent},
  {path: 'UPI', component: PayUpiComponent},
  { path:"selfTransfer",component:SelfTransferComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
