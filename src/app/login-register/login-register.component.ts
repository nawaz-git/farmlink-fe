import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpService } from '../http.service';
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

  constructor(private api: HttpService) {

  }

  login() {

    Swal.fire('Login', 'Done with Login', 'success')
    console.log(this.loginData);
  }

  register() {
    delete this.registerData.cpassword
    this.api.register(this.registerData).subscribe((res: any) => {
      console.log(res);
    })
    console.log(this.registerData);
  }
}
