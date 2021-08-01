import { Component } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public products;
  public title = '';

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

  public addToList() {
    if (!this.title) return;
    var last_id = 0,
        image = '';
    this.products.products.forEach(pr => {
      const current_id = parseInt(pr.id.substring(1));
      if (current_id > last_id) last_id = current_id;
      if (this.title == pr.title) image = pr.imageURL;
    });
    this.products.products.push({
      id: 'a' + last_id++,
      title: this.title,
      imageURL: image
    });
    this.title = '';
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(res => this.products = res);
  }
}
