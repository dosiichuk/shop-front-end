import { Component, Input } from '@angular/core';
import { Product } from '../../../../types';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryImagePipe } from '../../../pipes/category-image-pipe/category-image.pipe';
import { CartService } from '../../../../services/cart/cart.service';
import { ProductCategoryService } from '../../../../services/product-category/product-category.service';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, CategoryImagePipe, RouterModule],
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService, private categoryService: ProductCategoryService) {
    
  }

  addToCart(event: MouseEvent): void {
    event.stopPropagation();
    this.cartService.addToCart({
      product: this.product,
      quantity: 1
    });
  }


}
