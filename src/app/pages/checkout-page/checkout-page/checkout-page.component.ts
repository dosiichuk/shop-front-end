import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

import { CartSummaryComponent } from '../../../components/cart/cart-summary/cart-summary/cart-summary.component';
import { CartService } from '../../../services/cart/cart.service';
import { Cart } from '../../../types/index';
import { CommonModule } from '@angular/common';
import { Form, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout-page',
  imports: [CartSummaryComponent, CommonModule, FormsModule, RouterModule],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent implements OnInit {

  cart: Cart = {
    userId: "0",
    items: [],
    subtotal: 0,
    shippingCost: 0,
    total: 0,
  };
  userDetails = {
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
  };

  constructor(private cartService: CartService, private router: Router) {
    
  }

  ngOnInit() {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    }
  );}

  onSubmit(checkoutForm: Form) {
    this.cartService.clearCart();
    this.router.navigate(['/success']);
  }

  onFullNameChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.userDetails.fullName = input.value;
  }

  onAddressChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.userDetails.address = input.value;
  }

  onCityChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.userDetails.city = input.value;
  }

  onPostalCodeChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.userDetails.postalCode = input.value;
  }
}
