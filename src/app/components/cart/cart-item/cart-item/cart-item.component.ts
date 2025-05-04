import { Component } from '@angular/core';
import { CartItem } from '../../../../types/index';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  cartItem: CartItem = {
    product: {
      id: 1,
      name: 'Sample Product',
      price: 100,
      category: 'Sample Category',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'Sample product description',
      rating: 4.5,
    },
    quantity: 1
  }

  increaseQuantity() {
    this.cartItem.quantity++;
  }

  decreaseQuantity() {
    if (this.cartItem.quantity > 1) {
      this.cartItem.quantity--;
    }
  }

  removeItem() {
    console.log('Item removed from cart:', this.cartItem.product.name);
  }

}
