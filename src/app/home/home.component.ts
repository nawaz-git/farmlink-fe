import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public api: HttpService, private router: Router) {
  }

  cart() {
    if (this.api.cart.value.length !== 0) {
      this.router.navigate(['/cart'])
    }
  }

  myaccount() {
    this.router.navigate(['/orders'])
  }

  home() {
    this.router.navigate([''])
  }
  logout() {
    localStorage.clear()
    window.location.reload()
    // setTimeout(() => {
    //   this.router.navigate([''])
    // }, 1000)
  }
}
