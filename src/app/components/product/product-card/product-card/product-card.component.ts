import { Component, Input } from '@angular/core';
import { Product } from '../../../../types';
import { CommonModule } from '@angular/common';
import { EventEmitter, Output } from '@angular/core';
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
  @Output() productAdded = new EventEmitter<Product>();
  productBeingAdded: boolean = false;

  constructor(private cartService: CartService, private categoryService: ProductCategoryService) {
    
  }

  addToCart(event: MouseEvent): void {
    event.stopPropagation();
    this.cartService.addToCart({
      product: this.product,
      quantity: 1
    });
    this.productAdded.emit(this.product);
    this.productBeingAdded = true;
    setTimeout(() => {
      this.productBeingAdded = false;
    }
    , 2000);
  }


}
