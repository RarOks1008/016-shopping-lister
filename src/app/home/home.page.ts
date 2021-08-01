import { Component } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public products;

  constructor(private productService: ShoppingListService) {}

  public delete() {
    if (!this.products) return;
    if (!this.products.products) return;
    for (var i = 0; i < this.products.products.length; i++) {
      if (this.products.products[i].isChecked) {
        this.products.products.splice(i, 1);
        i--;
      }
    }
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(res => this.products = res);
  }
}
