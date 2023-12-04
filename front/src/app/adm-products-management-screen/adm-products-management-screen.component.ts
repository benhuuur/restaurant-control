import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductData } from '../../dto/product-data';

@Component({
  selector: 'app-adm-products-management-screen',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adm-products-management-screen.component.html',
  styleUrl: './adm-products-management-screen.component.css'
})
export class AdmProductsManagementScreenComponent {
  newProduct : ProductData = {
    name: '',
    description: '',
    type: '',
    price: 0,
    offersPrice: 0,
    isOffers: false,
    picture: 0
  }

  create(){
    
  }
}
