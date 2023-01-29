import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatIconModule } from '@angular/material/icon'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatRadioModule } from '@angular/material/radio'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { LoginRegisterComponent } from './login-register/login-register.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AddListingComponent } from './dashboard/add-listing/add-listing.component';
import { ManageOrdersComponent } from './dashboard/manage-orders/manage-orders.component';
import { AllProductsComponent } from './dashboard/all-products/all-products.component';
import { EditProductComponent } from './dashboard/edit-product/edit-product.component';
import { CartComponent } from './home/cart/cart.component';
import { ProductsComponent } from './home/products/products.component';
import { OrdersComponent } from './home/orders/orders.component';
import { DialogComponent } from './dashboard/dialog/dialog.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    DashboardComponent,
    HomeComponent,
    AddListingComponent,
    ManageOrdersComponent,
    AllProductsComponent,
    EditProductComponent,
    CartComponent,
    ProductsComponent,
    OrdersComponent,
    DialogComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    MatIconModule,
    MatExpansionModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
