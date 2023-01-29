import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: any;
  filter: any
    = {
      // categories: [],
      // price: '',
      // weight: [
      //   10,
      //   25
      // ],
      // farmerId: ''
    }

  brandNames: any;


  categories: any = {
    Fruit: false,
    Vegetables: false,
    Grains: false,
    Spices: false,
    Other: false
  }


  constructor(private api: HttpService) {
    this.getProducts()
    this.getBrandNames()
  }

  getProducts() {
    if (this.filter.categories && this.filter.categories.length == 0) {
      delete this.filter.categories
    }
    this.api.getProductsbyFilter(this.filter).subscribe((res: any) => {
      this.products = res
    })
  }

  filterChanged() {
    this.getProducts()
  }

  categoryChange(value?: any) {
    let selectedCategories = [];
    for (let category in this.categories) {
      if (this.categories[category]) {
        selectedCategories.push(category);
      }
    }
    this.filter.categories = selectedCategories
    if (this.filter.categories && this.filter.categories.length == 0) {
      delete this.filter.categories
    }
    this.getProducts()
  }


  brandChange() {
    let selectedBrands: any = [];
    for (let brand in this.brandNames) {
      if (this.brandNames[brand].value) {
        selectedBrands.push(this.brandNames[brand]._id)
      }
    }
    this.filter.farmerId = selectedBrands
    if (this.filter.farmerId && this.filter.farmerId.length == 0) {
      delete this.filter.farmerId
    }
    console.log(this.filter);
    this.getProducts()
  }

  getBrandNames() {
    this.api.getBrandNames().subscribe((res: any) => {
      this.brandNames = res
      console.log(this.brandNames);
    })
  }
}
