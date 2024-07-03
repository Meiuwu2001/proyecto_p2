import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailSaleService {
  private productList: Product[] = []
  private products: BehaviorSubject<Product[]>
  constructor() {
    this.products = new BehaviorSubject(this.productList)
  }

  getProductSale() {
    return this.products.asObservable()

  }

  addProductSale(product: Product) {
    product.amount = 1
    this.productList.push(product)
    this.products.next(this.productList)
    }

  deleteProductSale(id: String) {
    let index = this.productList.findIndex(item => item._id === id)
    this.productList.splice(index, 1)
    this.products.next(this.productList)
  }
}
