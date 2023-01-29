import { Component } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  total = 0;
  constructor(public api: HttpService) {
    this.calculate()
    console.log(this.api.cart.value);
  }

  async placeOrder() {
    let data: any = await { products: [...this.api.cart.value] }
    data.userId = localStorage.getItem('userId')
    console.log(data);
    this.api.createOrder(data).subscribe((res: any) => {
      console.log(res);
    })
  }

  calculate() {
    this.total = this.api.cart.value.reduce((acc: any, product: any) => acc + (product.price * product.quantity), 0)
  }
}
