import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: any;
  filter: any = {
    // categories: [],
    // price: '',
    // weight: [
    //   10,
    //   25
    // ],
    // farmerId: ''
  }

  categories: any = {
    Fruit: false,
    Vegetables: false,
    Grains: false,
    Spices: false,
    Other: false
  }


  constructor(private api: HttpService) {
    this.getProducts()
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
    this.filter.category = selectedCategories
    this.getProducts()
  }

}
