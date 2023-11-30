import { Injectable } from '@angular/core';
import { UserCreateData } from '../dto/user-create-data';
import { ApiClientService } from './api-client.service';
import { UserLoginData } from '../dto/user-login-data';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: ApiClientService) {}

  register(data: UserCreateData, callback: any) {
    this.http
      .post('user/register', data)
      .subscribe((response) => callback(response));
  }

  login(data: UserLoginData, callback: any) {
    this.http
      .post('user/login', data)
      .subscribe((response) => callback(response));
  }
}
