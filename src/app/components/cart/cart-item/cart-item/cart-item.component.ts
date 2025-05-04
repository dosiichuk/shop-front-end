import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CartItem } from '../../../../types/index';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../../services/cart/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() cartItem?: CartItem;

  constructor(private cartService: CartService) {}

  increaseQuantity() {
    if (!this.cartItem) return;
    this.cartService.addToCart(this.cartItem);
  }

  decreaseQuantity() {
    if (!this.cartItem) return;
    this.cartService.removeFromCart(this.cartItem!);
  }

  removeItem() {
    if (!this.cartItem) return;
    this.cartService.removeFromCart(this.cartItem!, true);
  }

}
