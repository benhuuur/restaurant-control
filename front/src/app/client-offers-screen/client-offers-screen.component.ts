import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientScreenComponent } from '../client-screen/client-screen.component';

@Component({
  selector: 'app-client-offers-screen',
  standalone: true,
  imports: [CommonModule, ClientScreenComponent],
  templateUrl: './client-offers-screen.component.html',
  styleUrl: './client-offers-screen.component.css'
})
export class ClientOffersScreenComponent {

}
