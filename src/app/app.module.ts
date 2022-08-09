import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';

import { SearchUserComponent } from './Component/search-user/search-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './Component/menu/menu.component';
import { OneUserComponent } from './Component/one-user/one-user.component';
import { SearchBarComponent } from './Component/search-bar/search-bar.component';
import { ScanComponent } from './Component/scan/scan.component';
import { PayContactComponent } from './Component/pay-contact/pay-contact.component';
import { ContactListComponent } from './Component/contact-list/contact-list.component';
import { PhonePayComponent } from './Component/phone-pay/phone-pay.component';
import { BankTrasferComponent } from './Component/bank-trasfer/bank-trasfer.component';
import { PayUpiComponent } from './Component/pay-upi/pay-upi.component';
import { PayOnUPIComponent } from './Component/pay-on-upi/pay-on-upi.component';
import { SelfTransferComponent } from './Component/self-transfer/self-transfer.component';
import { PayBillComponent } from './Component/pay-bill/pay-bill.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchUserComponent,
    MenuComponent,
    OneUserComponent,
    SearchBarComponent,
    ScanComponent,
    PayContactComponent,
    ContactListComponent,
    PhonePayComponent,
    BankTrasferComponent,
    PayUpiComponent,
    PayOnUPIComponent,
    SelfTransferComponent,
    PayBillComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
