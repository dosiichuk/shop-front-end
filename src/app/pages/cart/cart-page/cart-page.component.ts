import { Component } from '@angular/core';
import { CartItemComponent } from '../../../components/cart/cart-item/cart-item/cart-item.component';
import { CartSummaryComponent } from '../../../components/cart/cart-summary/cart-summary/cart-summary.component';

@Component({
  selector: 'app-cart-page',
  imports: [CartItemComponent, CartSummaryComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {

}
