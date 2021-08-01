import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(private httpService: HttpClient) { }

  public getProducts() {
    return this.httpService.get('../../assets/data/products.json');
  }
}
