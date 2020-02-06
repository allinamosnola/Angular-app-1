import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private http: HttpClient
  ) { }
  items = [];
  shippingPrices

  addToCart(product){
    console.log('addToCart: ', product)
    this.items.push(product);
  }

  getItems(){
    console.log('getItems: ', this.items)
    return this.items;
  }
  clearCart(){
    this.items = [];
    return this.items;
  }
  async getShippingPrices(){

    return this.shippingPrices = await this.http.get('assets/shipping.json')
      .map((data) => {
        return data
      }).toPromise() //get Observable

  }
  
}