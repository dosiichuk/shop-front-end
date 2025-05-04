import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product/product-card/product-card/product-card.component';
import { ProductService } from '../../services/product-service/product.service';
import { Product } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list-page',
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './product-list-page.component.html',
  styleUrl: './product-list-page.component.css'
})
export class ProductListPageComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}
