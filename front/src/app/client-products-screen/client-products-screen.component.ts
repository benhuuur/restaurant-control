import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientScreenComponent } from '../client-screen/client-screen.component';

@Component({
  selector: 'app-client-products-screen',
  standalone: true,
  imports: [CommonModule, ClientScreenComponent],
  templateUrl: './client-products-screen.component.html',
  styleUrl: './client-products-screen.component.css'
})
export class ClientProductsScreenComponent {

}
