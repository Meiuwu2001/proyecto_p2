import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Product } from '../../model/product';
import { DetailSaleService } from '../../service/detail-sale.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  totalSum = 0
  ProductDetail: Product[] = []
  constructor(private cartService: CartService,
    private card: DetailSaleService
  ) { }

  ngOnInit(): void {
    this.card.getProductSale().subscribe(item => {
      console.log(item);
      this.ProductDetail = item
    })
    this.total()
  }

  // clearCart() {
  //   this.items = this.cartService.clearCart();
  // }
  delete(product: Product) {
    this.card.deleteProductSale(product._id)
  }
  total() {
    this.card.getProductSale().pipe(map(product => {
      return product.reduce((suma, variable) => suma + variable.price, 0)
    })).subscribe(valor => this.totalSum = valor)
  }
}
