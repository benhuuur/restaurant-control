import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmTotemScreenComponent } from '../adm-totem-screen/adm-totem-screen.component';
import { ProductData } from '../../dto/product-data';
import { ProductsService } from '../../services/products-service.service';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client-service.service';
import { ImageService } from '../../services/image-service.service';
import { CartData } from '../../dto/cart-data';

@Component({
  selector: 'app-adm-totem-products-scrceen',
  standalone: true,
  imports: [CommonModule, AdmTotemScreenComponent],
  templateUrl: './adm-totem-products-scrceen.component.html',
  styleUrl: './adm-totem-products-scrceen.component.css',
})
export class AdmTotemProductsScrceenComponent {
  constructor(
    private product: ProductsService,
    private router: Router,
    private client: ClientService,
    private image: ImageService
  ) {}

  products: ProductData[] = [];
  cart: CartData[] = [];
  ngOnInit(): void {
    this.client.validateAdm(
      { data: sessionStorage.getItem('jwt') },
      (response: any) => {},
      (error: any) => {
        this.router.navigate(['']);
      }
    );
    this.product.getProducts('', (response: any) => {
      this.products = response.products;
    });
    var localStoragecart = localStorage.getItem('cart');
    if (localStoragecart == null) {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    } else {
      if (localStoragecart != null) {
        this.cart = JSON.parse(localStoragecart);
      }
    }
  }

  getType(event: any) {
    var value = event.target.value;
    switch (value) {
      case 'Salgados':
        this.product.getProducts('/salgados', (response: any) => {
          this.products = response.products;
        });
        break;

      case 'Doces':
        this.product.getProducts('/doces', (response: any) => {
          this.products = response.products;
        });
        break;

      case 'Doces':
        this.product.getProducts('/bebidas', (response: any) => {
          this.products = response.products;
        });
        break;

      default:
        this.product.getProducts('', (response: any) => {
          this.products = response.products;
        });
        break;
    }
  }

  addToCart(product: ProductData) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].product.id == product.id) {
        this.cart[i].quantity++;
        this.cart[i].total += product.price;
        localStorage.setItem('cart', JSON.stringify(this.cart));
        return;
      }
    }
    this.cart.push({ product: product, quantity: 1, total: product.price });
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
