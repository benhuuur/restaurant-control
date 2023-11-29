import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/client-service.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-screen',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-screen.component.html',
  styleUrl: './register-screen.component.css'
})
export class RegisterScreenComponent {
  constructor(private client: ClientService, private router: Router){}

  validatePassword = 'Good'
  validateCpf = 'Good'

  name: string = ''
  email: string = ''
  cpf: string = ''
  password: string = ''
  repeatPassword: string = ''

  create()
  {
    if(this.password != this.repeatPassword || this.password == ''){
      this.validatePassword = 'Bad'
      return;
    }
    this.validatePassword = 'Good'

    if(this.cpf.replace('.','').replace('.','').replace('-','').length != 11){
      this.validateCpf = 'Bad'
      return;
    }
    this.validateCpf = 'Good'


    this.client.register({
      name: this.name,
      email : this.email,
      password : this.password,
      cpf : this.cpf
    }, (response:any) =>
    {
      if(response.message){
        this.router.navigate(['/'])
      }
    })

  }
}
