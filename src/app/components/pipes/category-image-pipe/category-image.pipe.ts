import { Pipe, PipeTransform } from '@angular/core';
import { ProductCategoryService } from '../../../services/product-category/product-category.service';
import { ProductCategory } from '../../../types';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Pipe({
  name: 'categoryImage',
  standalone: true,
})
export class CategoryImagePipe implements PipeTransform {
  constructor(private categoryService: ProductCategoryService) {}

  transform(categoryName: string): Observable<string> {
    if (!categoryName) {
      return of('assets/images/default-category.png'); // Return default URL as an Observable
    }

    return this.categoryService.loadProductCategories().pipe(
      map((categories: ProductCategory[]) => {
        const category = categories.find((cat) => cat.name === categoryName);
        return category?.imageUrl || 'assets/images/default-category.png';
      })
    );
  }
}