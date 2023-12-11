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
  types: String[] = ['Todos', 'Salgados', 'Doces', 'Bebidas'];
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
    var localStorageProducts = localStorage.getItem('type');
    if (
      localStorageProducts == null ||
      JSON.parse(localStorageProducts)[0] == 'Todos'
    )
      this.product.getProducts('', (response: any) => {
        this.products = response.products;
      });
    else {
      this.types = JSON.parse(localStorageProducts);
      this.product.getProducts('/' + this.types[0], (response: any) => {
        this.products = response.products;
      });
    }

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
        localStorage.setItem(
          'type',
          JSON.stringify(['Salgados', 'Todos', 'Doces', 'Bebidas'])
        );
        this.product.getProducts('/salgados', (response: any) => {
          this.products = response.products;
        });
        break;

      case 'Doces':
        localStorage.setItem(
          'type',
          JSON.stringify(['Doces', 'Todos', 'Salgados', 'Bebidas'])
        );
        this.product.getProducts('/doces', (response: any) => {
          this.products = response.products;
        });
        break;

      case 'Bebidas':
        localStorage.setItem(
          'type',
          JSON.stringify(['Bebidas', 'Todos', 'Salgados', 'Doces'])
        );
        this.product.getProducts('/bebidas', (response: any) => {
          this.products = response.products;
        });
        break;

      default:
        localStorage.setItem(
          'type',
          JSON.stringify(['Todos', 'Salgados', 'Doces', 'Bebidas'])
        );
        this.product.getProducts('', (response: any) => {
          this.products = response.products;
        });
        break;
    }
    window.location.reload();
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

  round(num: number){
    return num.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }
}
