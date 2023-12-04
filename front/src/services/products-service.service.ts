import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ProductCreateData } from '../dto/product-create-data';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: ApiService) {}
  getProducts(type: string = '', callback: any) {
    this.http
      .get('products' + type)
      .subscribe((response: any) => callback(response));
  }
  create(data: ProductCreateData, callback: any) {
    this.http
      .post('products/register', data)
      .subscribe((response: any) => callback(response));
  }
}
