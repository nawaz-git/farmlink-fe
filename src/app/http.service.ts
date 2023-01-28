import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  reqHeaders: any = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'token': `${localStorage.getItem('token')}`
  });

  API = environment.API_URL;
  constructor(private http: HttpClient) { }

  register(data: {
    name: string,
    mobile: string,
    organization: string,
    isFarmer: boolean,
    password: string
  }) {
    return this.http.post(`${this.API}/users`, data)
  }


  login(data: {
    mobile: string,
    password: string,
    isFarmer: boolean
  }) {
    return this.http.post(`${this.API}/users/userlogin`, data)
  }
}
