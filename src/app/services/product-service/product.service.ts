import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../types';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private HttpClient: HttpClient) {
  }

  loadProducts(): Observable<Product[]> {
    return this.HttpClient.get<Product[]>(environment.apiUrl + '/products');
  }
}
