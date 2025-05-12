import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../../services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  cartCount: number = 0;
  isAnimating: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cartCount = cart.items.reduce((acc, item) => acc + item.quantity, 0);
      if (this.cartCount > 0) {
        this.triggerCartAnimation();
      }
    });
  }

  onCartClick() {
    console.log('Cart clicked!');
  }

  triggerCartAnimation(): void {
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
    }, 500);
  }
}
