import { Component } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Product, ProductListItem } from '../add-listing/product';
import Swal from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  selectedFile: any;
  product: any = {
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

  constructor(private api: HttpService, private router: Router, private route: ActivatedRoute) {
    this.product = this.route.snapshot.paramMap.get('product')
    this.product = JSON.parse(this.product)
    console.log(this.product);
  }
  async addListing() {
    this.product.farmerId = localStorage.getItem('userId')
    if (this.selectedFile) {
      await this.upload()
    } else {
      this.api.editProduct(this.product).subscribe((res: any) => {
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
        this.api.editProduct(this.product).subscribe((res: any) => {
          Swal.fire('Added', 'Product Added Successfully', 'success')
        }, err => {
          Swal.fire('Error', 'Something went Wrong', 'error')
        })
        console.log(this.product);
      });
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
}
