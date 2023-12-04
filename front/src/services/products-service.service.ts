import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: ApiService) {}
  getProducts(callback: any, type: string = '') {
    this.http.get('products'+type).subscribe((response: any) => callback(response));
  }
}
