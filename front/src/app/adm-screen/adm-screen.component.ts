import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/client-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adm-screen.component.html',
  styleUrl: './adm-screen.component.css',
})
export class AdmScreenComponent implements OnInit {
  constructor(
    private client: ClientService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.client.validateAdm(
      { data: sessionStorage.getItem('jwt') },
      (response: any) => {},
      (error: any) => {
        this.router.navigate(['']);
      }
    );
  }
}
