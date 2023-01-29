import { Component } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(public api: HttpService) {
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
}
