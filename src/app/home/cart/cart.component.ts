import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { HttpService } from 'src/app/http.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  total = 0;
  constructor(public api: HttpService, private router: Router) {
    this.calculate()
    console.log(this.api.cart.value);
  }

  async placeOrder() {
    let data: any = await { products: [...this.api.cart.value] }
    data.userId = localStorage.getItem('userId')
    console.log(data);
    this.api.createOrder(data).subscribe((res: any) => {
      console.log(res);
      Swal.fire('Order Placed', '', 'success')
      setTimeout(() => {
        Swal.close()
        this.router.navigate(['/orders'])
      }, 1000)
    })
  }

  calculate() {
    this.total = this.api.cart.value.reduce((acc: any, product: any) => acc + (product.price * product.quantity), 0)
  }
}
