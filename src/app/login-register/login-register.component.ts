import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
  isLogin = true;
  loginData: any = {
    flag: 'customer',
    mobile: '',
    password: ''
  }
  registerData: any = {
    flag: '',
    mobile: '',
    password: '',
    cpassword: ''
  }

  constructor() {

  }

  login() {
    Swal.fire('Login', 'Done with Login', 'success')
    console.log(this.loginData);
  }

  register() {
    console.log(this.registerData);
  }
}
