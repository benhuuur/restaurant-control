import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/client-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-screen.component.html',
  styleUrl: './client-screen.component.css',
})
export class ClientScreenComponent {
}
