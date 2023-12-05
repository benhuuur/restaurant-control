import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  backend = 'http://localhost:5166/';

  constructor(private http: HttpClient) {}

  post(url: string, obj: any) {
    return this.http.post(this.backend + url, obj);
  }

  get(url: string) {
    return this.http.get(this.backend + url)
  }

  put(url: string, data: any) {
    return this.http.put(this.backend + url, data)
  }
}
