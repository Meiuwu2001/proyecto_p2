import { Component, Inject, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../model/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ProductListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private formBuilder: FormBuilder,
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    if (!this.data) {
      this.formGroup = this.formBuilder.group({
        name: ["", Validators.required],
        code: ["", Validators.required],
        category: ["", Validators.required],
        description: ["", Validators.required],
        price: ["", Validators.required],
        amount: ["", Validators.required],
      })
    } else {
      this.formGroup = this.formBuilder.group({
        name: [this.data.name || "", Validators.required],
        code: [this.data.code || "", Validators.required],
        category: [this.data.category || "", Validators.required],
        description: [this.data.description || "", Validators.required],
        price: [this.data.price || "", Validators.required],
        amount: [this.data.amount || "", Validators.required],
      })
    }
  }
  onSubmit() {
    if (this.formGroup.valid) {
      const product: Product = this.formGroup.value;

      // Ensure price is a number
      if (!this.data) {
        this.productoService.addProduct(product).subscribe(
          () => {
            console.log('Successfully added');
            this.dialogRef.close(true);
          },
          (error) => {
            console.log('Error adding product', error);
          }
        );
      } else {
        // this.productoService.updateProduct(this.data.id, this.formGroup.value).subscribe(
        //   () => {
        //     console.log('Successfully updated');
        //     this.dialogRef.close(true);
        //   },
        //   (error) => {
        //     console.log('Error updating product', error);
        //   }
        // );
      }
    }
  }
}
