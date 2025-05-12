import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../services/cart/cart.service';
import { CartItemComponent } from '../../../components/cart/cart-item/cart-item/cart-item.component';
import { CartSummaryComponent } from '../../../components/cart/cart-summary/cart-summary/cart-summary.component';
import { Cart } from '../../../types';

@Component({
  selector: 'app-cart-page',
  imports: [CommonModule, CartItemComponent, CartSummaryComponent, RouterModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService
      .getCartObservable()
      .subscribe((cart: Cart) => {
        this.cart = cart;
      });
  }
}
