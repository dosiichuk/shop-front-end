import { Pipe, PipeTransform } from '@angular/core';
import { ProductCategoryService } from '../../../services/product-category/product-category.service';

@Pipe({
  name: 'categoryImage',
  standalone: true
})
export class CategoryImagePipe implements PipeTransform {

  constructor(private categoryService: ProductCategoryService) { }

  transform(categoryName: string): string {
    const category = this.categoryService.getCategoryByName(categoryName);
    return category ? category.imageUrl : 'assets/images/default-category.png'; 
  }

}
