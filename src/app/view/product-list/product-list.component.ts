import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductoService } from '../../service/producto.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  editDialog(_t77: any) {
    throw new Error('Method not implemented.');
  }
  openDialog() {
    throw new Error('Method not implemented.');
  }
  productList!: MatTableDataSource<Product>;
  columnsHeader = ['date', 'name', 'price', 'amount', 'status', 'opciones'];

  constructor(
    private productService: ProductoService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productListMethod();
  }

  productListMethod() {
    try {
      this.productService
        .getProducts()
        .subscribe(
          (item: Product[] | undefined) =>
            (this.productList = new MatTableDataSource(item))
        );
    } catch (error) {
      console.log(error);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.productList.filter = filterValue.trim();
  }
}
