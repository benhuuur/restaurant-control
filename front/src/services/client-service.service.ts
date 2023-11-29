import { Injectable } from '@angular/core';
import { UserCreateData } from '../dto/user-login-data';
import { ApiClientService } from './api-client.service';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http : ApiClientService) {}

  register(data: UserCreateData, callback: any) 
  {
    this.http.post('user', data)
    .subscribe(response => callback(response))
  }
}

// 44:40