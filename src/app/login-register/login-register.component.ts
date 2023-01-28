import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
  isLogin = true;
  loginData: any = {
    isFarmer: true,
    mobile: '',
    password: ''
  }

  registerData: any = {
    name: '',
    organization: '',
    isFarmer: true,
    mobile: '',
    password: '',
    cpassword: ''
  }

  constructor(private api: HttpService, private router: Router) {

  }

  login() {
    this.api.login(this.loginData).subscribe((res: any) => {
      if (res.status == 200) {
        localStorage.setItem('mobile', this.loginData.mobile)
        localStorage.setItem('token', res.token)
        localStorage.setItem('userId', res.userId)
        Swal.fire('Login', 'Successfully Logged In', 'success')
        console.log(this.loginData.isFarmer);
        if (this.loginData.isFarmer === 'false') {
          this.loginData.isFarmer = false
        }
        if (this.loginData.isFarmer) {
          localStorage.setItem('isFarmer', 'true')
          this.router.navigate(['dashboard'])
        } else {
          console.log(this.loginData);
          localStorage.setItem('isFarmer', 'false')
          this.router.navigate([''])
        }
        setTimeout(() => {
          Swal.close()
        }, 1000)
      }
    }, err => {
      console.log(err);
      Swal.fire('Error', err.error.message, 'error')
    })
  }

  register() {
    delete this.registerData.cpassword
    this.api.register(this.registerData).subscribe((res: any) => {
      console.log(res);
    })
    console.log(this.registerData);
  }

  registerFarmerToggle() {
    if (this.registerData.isFarmer === 'true') {
      this.registerData.isFarmer = true
    } else {
      this.registerData.isFarmer = false
    }
  }
}
