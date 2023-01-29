import { Component } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  status: any = {
    Pending: false,
    Pick: false,
    Completed: false
  }
  selectedStatus: any;
  orders: any
  constructor(private api: HttpService) {

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
}
