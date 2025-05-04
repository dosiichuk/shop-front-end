import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  imports: [],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent {
  subtotal: number = 0;
  shippingCost: number = 0;
  total: number = 0;

}
