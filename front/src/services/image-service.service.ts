import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: ApiService) {}
  add(data: FormData, callback: any) {
    this.http.put('image', data).subscribe((response) => callback(response));
  }
}
