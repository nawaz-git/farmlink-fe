import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddListingComponent } from './dashboard/add-listing/add-listing.component';
import { AllProductsComponent } from './dashboard/all-products/all-products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProductComponent } from './dashboard/edit-product/edit-product.component';
import { ManageOrdersComponent } from './dashboard/manage-orders/manage-orders.component';
import { CartComponent } from './home/cart/cart.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './home/orders/orders.component';
import { ProductsComponent } from './home/products/products.component';
import { LoginRegisterComponent } from './login-register/login-register.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProductsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'orders', component: OrdersComponent }
    ],
    component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    children: [
      { path: '', component: AllProductsComponent, pathMatch: 'full', canActivate: [AuthGuard] },
      { path: 'product/add', component: AddListingComponent },
      { path: 'product/edit/:product', component: EditProductComponent },
      { path: 'manage/order', component: ManageOrdersComponent }
    ],
    component: DashboardComponent, canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginRegisterComponent },
  { path: 'register', component: LoginRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
