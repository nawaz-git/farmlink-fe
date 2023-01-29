import { Component } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent {
  orders: any;
  constructor(private api: HttpService, public dialog: MatDialog) {
    this.getOrders()
  }

  getOrders() {
    let userId: any = localStorage.getItem('userId')

    this.api.getOrdersFarmer(userId).subscribe((res: any) => {
      this.orders = res
      console.log(this.orders);
    })
  }

  schedule() {
    this.dialog.open(DialogComponent, {
      data: '',
      width: '300px'
    })
  }

  cancel(id: string) {
    let data = {
      status: "Cancelled"
    }
    this.api.updateOrderFarmer(data, id).subscribe((res: any) => {
      Swal.fire('Order Cancelled', 'Thankyou for using our service.', 'success')
      this.getOrders()
    })
  }
}
