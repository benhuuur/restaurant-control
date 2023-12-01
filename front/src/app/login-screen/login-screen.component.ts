import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.css',
})
export class LoginScreenComponent {
  constructor(private client: ClientService, private router: Router) {}

  username: string = '';
  password: string = '';

  login() {
    this.client.login(
      {
        login: this.username,
        password: this.password,
      },
      async (response: any) => {
        await sessionStorage.setItem('jwt', response.jwt);
        var obj = response.jwt.split('.')[1];
        if (obj == null) return;
        obj = atob(obj);
        var isAdm = JSON.parse(obj).isAdm;
        if (isAdm) {
          this.router.navigate(['adm']);
          return;
        }
        this.router.navigate(['client']);
      }
    );
  }
}
