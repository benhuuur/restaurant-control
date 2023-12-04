import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCreateData } from '../../dto/product-create-data';
import { ProductsService } from '../../services/products-service.service';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client-service.service';
import { ProductData } from '../../dto/product-data';
@Component({
  selector: 'app-adm-products-management-screen',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adm-products-management-screen.component.html',
  styleUrl: './adm-products-management-screen.component.css',
})
export class AdmProductsManagementScreenComponent {
  constructor(
    private product: ProductsService,
    private router: Router,
    private client: ClientService
  ) {}

  products: ProductData[] = [];

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
  }

  newProduct: ProductCreateData = {
    name: '',
    description: '',
    type: '',
    price: 0,
    // picture: 0
  };

  create() {
    this.product.create(this.newProduct, (response: any) =>
      console.log(response)
    );
  }
}
