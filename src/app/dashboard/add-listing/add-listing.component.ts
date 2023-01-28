import { Component } from '@angular/core';
import { Product } from './product';
import { ProductListItem } from './product';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent {
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
  addListing() {
    console.log(this.product);

  }
}
