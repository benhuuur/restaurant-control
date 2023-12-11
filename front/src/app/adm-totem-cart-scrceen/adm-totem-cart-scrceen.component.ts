import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmTotemScreenComponent } from '../adm-totem-screen/adm-totem-screen.component';
import { ProductData } from '../../dto/product-data';
import { CartData } from '../../dto/cart-data';

@Component({
  selector: 'app-adm-totem-cart-scrceen',
  standalone: true,
  imports: [CommonModule, AdmTotemScreenComponent],
  templateUrl: './adm-totem-cart-scrceen.component.html',
  styleUrl: './adm-totem-cart-scrceen.component.css',
})
export class AdmTotemCartScrceenComponent {
  cart: CartData[] = [];
  total: number = 0;
  ngOnInit() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      var parsedCart = JSON.parse(storedCart);
      if (parsedCart != null) {
        this.cart = parsedCart;
      }
    }
    this.setTotal();
  }

  setTotal() {
    for (let i = 0; i < this.cart.length; i++) {
      this.total += this.cart[i].total;
    }
  }

  round(num: number) {
    return num.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }
}
