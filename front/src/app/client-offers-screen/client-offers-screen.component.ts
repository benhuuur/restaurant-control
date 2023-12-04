import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientScreenComponent } from '../client-screen/client-screen.component';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client-service.service';
import { ProductsService } from '../../services/products-service.service';
import { ProductData } from '../../dto/product-data';

@Component({
  selector: 'app-client-offers-screen',
  standalone: true,
  imports: [CommonModule, ClientScreenComponent],
  templateUrl: './client-offers-screen.component.html',
  styleUrl: './client-offers-screen.component.css',
})
export class ClientOffersScreenComponent implements OnInit {
  constructor(
    private service: ProductsService,
    private client: ClientService,
    private router: Router
  ) {}

  products: ProductData[] = [];

  ngOnInit(): void {
    this.client.validateClient(
      { data: sessionStorage.getItem('jwt') },
      (response: any) => {},
      (error: any) => {
        this.router.navigate(['']);
      }
    );
    this.service.getProducts((response: any) => {
      this.products = response.products;
    });
  }
}
