import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  products: any = [];
  constructor(private api: HttpService, private router: Router) {
    this.getAllProducts()
  }

  getAllProducts() {
    let farmerId: any = localStorage.getItem('userId')
    this.api.getProducts(farmerId).subscribe((res: any) => {
      this.products = res
    })
  }

  addProduct() {
    this.router.navigate(['dashboard/product/add'])
  }
}

