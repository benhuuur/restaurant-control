import { Injectable } from '@angular/core';
import { UserCreateData } from '../dto/user-login-data';
import { ApiClientService } from './api-client.service';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http : ApiClientService) {}

  register(data: UserCreateData) 
  {
    this.http.post('user', data)
    .subscribe(response => console.log(response))
  }
}

// 44:40