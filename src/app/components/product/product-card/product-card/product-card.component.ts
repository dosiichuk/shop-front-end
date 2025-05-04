import { Component, Input } from '@angular/core';
import { Product } from '../../../../types';
import { CommonModule } from '@angular/common';
import { CategoryImagePipe } from '../../../pipes/category-image-pipe/category-image.pipe';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, CategoryImagePipe],
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;


}
