import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  url = 'http://localhost:5000/api/product'; //backend

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, { product });
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(this.url + '/' + id);
  }
}
