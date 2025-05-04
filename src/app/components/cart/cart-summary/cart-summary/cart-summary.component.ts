import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Cart } from '../../../../types';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart-summary',
  imports: [RouterModule],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent {
  @Input() cart!: Cart;
  @Input() hideCheckoutButton: boolean = false;

}
