import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientScreenComponent } from '../client-screen/client-screen.component';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client-service.service';
import { ProductsService } from '../../services/products-service.service';

@Component({
  selector: 'app-client-products-screen',
  standalone: true,
  imports: [CommonModule, ClientScreenComponent],
  templateUrl: './client-products-screen.component.html',
  styleUrl: './client-products-screen.component.css',
})
export class ClientProductsScreenComponent implements OnInit {
  constructor(private service: ProductsService, private client: ClientService, private router: Router) {}
  ngOnInit(): void {
    this.client.validateClient(
      { data: sessionStorage.getItem('jwt') },
      (response: any) => {
      },
    (error: any) => {
      this.router.navigate(['']);
    }
    );
    this.service.getProducts((response:any) => {
      console.log(typeof(response.products))
    })
  }
}
