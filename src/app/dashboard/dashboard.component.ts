import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) {

  }

  allProducts() {
    this.router.navigate(['dashboard'])
  }

  manageOrders() {
    this.router.navigate(['dashboard/manage/order'])
  }
}
