import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../../components/product/product-card/product-card/product-card.component';
import { ProductService } from '../../services/product-service/product.service';
import { Product } from '../../types';
import { CommonModule } from '@angular/common';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-product-list-page',
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './product-list-page.component.html',
  styleUrl: './product-list-page.component.css',
  providers: [],
})
export class ProductListPageComponent {
  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.loadProducts();
  }

  provideUIFeedbackToProductBeingAdded(product: Product) {
    this.launchConfetti();
  }

  launchConfetti(): void {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }
}
