import { Component } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  status: any = {
    Pending: false,
    Pick: false,
    Completed: false,
    Cancelled: false
  }
  selectedStatus: any = 'Pending';
  orders: any
  constructor(private api: HttpService) {
    this.getOrders()
  }
  statusChange() {
    let selectedStatus;
    for (let stat in this.status) {
      if (this.status[stat]) {
        selectedStatus = stat;
        this.status[stat] = false
      }

    }
    this.selectedStatus = selectedStatus
    console.log(selectedStatus);
    this.getOrders()
  }

  getOrders() {
    let data = {
      userId: localStorage.getItem('userId'),
      status: this.selectedStatus
    }
    this.api.getOrdersCustomer(data).subscribe((res: any) => {
      this.orders = res
      console.log(this.orders);
    })
  }

  cancel(id: string) {
    let data: any = {
      status: 'Cancelled'
    }
    this.api.updateOrderFarmer(data, id).subscribe((res: any) => {
      console.log(res);
      Swal.fire('Order Cancelled', '', 'success')
    })
  }
  confirm(id: string) {
    let data: any = {
      status: 'Processing'
    }
    this.api.updateOrderFarmer(data, id).subscribe((res: any) => {
      console.log(res);
      Swal.fire('Order Confirmed', '', 'success')
    })
  }
}
