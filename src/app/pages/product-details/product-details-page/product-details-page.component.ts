import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../services/product-service/product.service';
import { Product } from '../../../types';
import { CartService } from '../../../services/cart/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details-page',
  imports: [RouterModule, CommonModule],
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.css',
})
export class ProductDetailsPageComponent {
  product!: Product;
  stars: number[] = [];
  remainingStart: number = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.route.params.subscribe((params) => {
      const productId = params['id'];
      this.productService.loadProduct(productId).subscribe((product) => {
        this.product = product;
      });
    });
  }

  addToCart() {
    this.cartService.addToCart({
      product: this.product,
      quantity: 1,
    });
  }
}
