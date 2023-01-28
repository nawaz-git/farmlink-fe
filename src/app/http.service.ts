import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from './dashboard/add-listing/product';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  reqHeaders: any = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'token': `${localStorage.getItem('token')}`
  });


  imgbbheaders: any = new HttpHeaders({
    'Content-Type': 'multipart/form-data',
  });

  API = environment.API_URL;
  KEY = environment.IMGBBKEY;
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

  uploadImage(image: File) {
    const formData = new FormData();
    formData.append('image', image);

    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    });

    return this.http.post(`https://api.imgbb.com/1/upload?key=${this.KEY}`, formData, this.imgbbheaders);
  }

  addProduct(product: Product) {
    return this.http.post(`${this.API}/products`, product)
  }

  editProduct(product: any) {
    return this.http.put(`${this.API}/products/${product._id}`, product)
  }

  getProducts(id: string) {
    return this.http.get(`${this.API}/products/farmer/${id}`)
  }

  getProductsbyFilter(filter: any) {
    return this.http.post(`${this.API}/products/filter`, filter)
  }
}
