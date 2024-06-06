import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  item: any;

  constructor(private productService: ProductoService) {}

  ngOnInit(): void {
    this.productListMethod();
  }

  productListMethod() {
    try {
      this.productService
        .getProducts()
        .subscribe((item) => (this.productList = item));
    } catch (error) {
      console.log(error);
    }
  }
}
