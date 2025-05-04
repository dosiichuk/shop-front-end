import { Component, Input } from '@angular/core';
import { Product } from '../../../../types';
import { CommonModule } from '@angular/common';
import { CategoryImagePipe } from '../../../pipes/category-image-pipe/category-image.pipe';
import { CartService } from '../../../../services/cart/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, CategoryImagePipe],
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart({
      product: this.product,
      quantity: 1
    });
  }


}
