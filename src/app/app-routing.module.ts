import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddListingComponent } from './dashboard/add-listing/add-listing.component';
import { AllProductsComponent } from './dashboard/all-products/all-products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProductComponent } from './dashboard/edit-product/edit-product.component';
import { ManageOrdersComponent } from './dashboard/manage-orders/manage-orders.component';
import { HomeComponent } from './home/home.component';
import { LoginRegisterComponent } from './login-register/login-register.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'dashboard',
    children: [
      { path: '', component: AllProductsComponent },
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
