import { Injectable } from '@angular/core';
import { UserCreateData } from '../dto/user-create-data';
import { ApiService } from './api.service';
import { UserLoginData } from '../dto/user-login-data';
import { JwtData } from '../dto/jwt-data';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: ApiService) {}

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

  validateClient(data: JwtData, callback: any, callbackError: any = null) {
    this.http.post('user/client', data)
    .subscribe({
      next: (response) => callback(response),
      error: (error) => callbackError(error)
    })
  }
  validateAdm(data: JwtData, callback: any, callbackError: any = null) {
    this.http.post('user/client', data)
    .subscribe({
      next: (response) => callback(response),
      error: (error) => callbackError(error)
    })
  }
}
