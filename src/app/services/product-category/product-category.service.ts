import { Injectable } from '@angular/core';
import { ProductCategory } from '../../types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  productCategories: ProductCategory[] = [];

  constructor(private http: HttpClient) {
    
  }

  loadProductCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(`${environment.apiUrl}/categories`);
  }

  
}
