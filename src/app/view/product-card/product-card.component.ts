import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { Product } from '../../model/product';
import { CartService } from '../../service/cart.service';
import { DetailSaleService } from '../../service/detail-sale.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {
  productList: Product[] = [];

  productListMethod() {
    this.productService.getProducts().subscribe(
      (products: Product[]) => this.productList = products,
      (error) => console.log(error)
    );
  }
  ngOnInit(): void {
    this.productListMethod();
  }

  constructor(private productService: ProductoService,
    private cartService: CartService,
    private card: DetailSaleService
  ) { }

  addToCart(product: Product) {
    this.card.addProductSale(product);
    console.log('Producto añadido al carrito:', product);
    
  }
}
