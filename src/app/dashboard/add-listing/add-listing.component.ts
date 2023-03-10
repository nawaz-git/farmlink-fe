import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { Product } from './product';
import { ProductListItem } from './product';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent {
  selectedFile: any;
  product: Product = {
    name: '',
    category: '',
    description: '',
    farmerId: '',
    images: [''],
    productList: [
      {
        price: 0,
        quantity: 0,
        unit: '',
        weight: 0
      }
    ]
  };

  constructor(private api: HttpService, private router: Router) {

  }
  addProductListItem() {
    let productList: ProductListItem = {
      price: 0,
      quantity: 0,
      unit: '',
      weight: 0
    }
    this.product.productList.push(productList);
  }

  deleteProductListItem(index: any) {
    console.log(index);
    this.product.productList.splice(index, 1);
  }

  async addListing() {
    this.product.farmerId = localStorage.getItem('userId')
    if (this.selectedFile) {
      await this.upload()
    } else {
      this.api.addProduct(this.product).subscribe((res: any) => {
        Swal.fire('Added', 'Product Added Successfully', 'success')
      }, err => {
        Swal.fire('Error', 'Something went Wrong', 'error')
      })
    }

  }

  allProducts() {
    this.router.navigate(['dashboard'])
  }

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  upload(): any {
    this.api.uploadImage(this.selectedFile)
      .subscribe((response: any) => {
        this.product.images[0] = response.data.display_url
        this.api.addProduct(this.product).subscribe((res: any) => {
          Swal.fire('Added', 'Product Added Successfully', 'success')
        }, err => {
          Swal.fire('Error', 'Something went Wrong', 'error')
        })
        console.log(this.product);
      });
  }
}
