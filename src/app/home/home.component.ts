import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: any;
  filter = {
    // categories: [],
    // price: 500,
    // weight: [
    //   10,
    //   25
    // ],
    // farmerId: ''
  }

  constructor(private api: HttpService) {
    this.getProducts()
  }

  getProducts() {
    this.api.getProductsbyFilter(this.filter).subscribe((res: any) => {
      this.products = res
    })
  }

}
