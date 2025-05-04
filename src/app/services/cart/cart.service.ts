import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart, CartItem } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject<Cart>({
    items: [],
    userId: 'placeholder',
    subtotal: 0,
    shippingCost: 0,
    total: 0,
  });
  private cart$: Observable<Cart> = this.cartSubject.asObservable();
  constructor() {}

  getCartObservable(): Observable<Cart> {
    return this.cart$;
  }
  addToCart(item: CartItem): void {
    const currentCart = this.cartSubject.value;
    const existingItemIndex = currentCart.items.findIndex(
      (existingItem) => existingItem.product.id === item.product.id
    );

    if (existingItemIndex > -1) {
      currentCart.items[existingItemIndex].quantity += 1;
    } else {
      currentCart.items.push(item);
    }

    this.recalculateCart();
  }

  removeFromCart(item: CartItem, removeEntirely: boolean = false): void {
    if (removeEntirely) {
      const currentCart = this.cartSubject.value;
      const existingItemIndex = currentCart.items.findIndex(
        (existingItem) => existingItem.product.id === item.product.id
      );
      if (existingItemIndex > -1) {
        currentCart.items.splice(existingItemIndex, 1);
      }
      this.recalculateCart();
      return;
    }
    const currentCart = this.cartSubject.value;
    const existingItemIndex = currentCart.items.findIndex(
      (existingItem) => existingItem.product.id === item.product.id
    );

    if (currentCart.items[existingItemIndex].quantity <= 1) {
      currentCart.items.splice(existingItemIndex, 1);
      this.recalculateCart();
      return;
    }
    if (existingItemIndex > -1 && currentCart.items[existingItemIndex].quantity > 1) {
      currentCart.items[existingItemIndex].quantity -= 1;
    }
    this.recalculateCart();
  }

  recalculateCart(): void {
    const currentCart = this.cartSubject.value;
    const subtotal = currentCart.items.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
    const shippingCost = subtotal > 2000 ? 0 : 0.1 * subtotal; // Example shipping cost logic
    const total = subtotal + shippingCost;

    this.cartSubject.next({
      ...currentCart,
      subtotal,
      shippingCost,
      total,
    });
  }
}
