import { Routes } from '@angular/router';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';

export const routes: Routes = [
    {
        path: 'shop',
        component: ProductListPageComponent,
      },
      {
        path: 'cart',
        loadComponent: () => import('./pages/cart/cart-page/cart-page.component').then(m => m.CartPageComponent),
      },
      {
        path: 'signup',
        loadComponent: () => import('./pages/signup/signup-page/signup-page.component').then(m => m.SignupPageComponent),
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login-page/login-page.component').then(m => m.LoginPageComponent),
      },
      {
        path: 'checkout',
        loadComponent: () => import('./pages/checkout-page/checkout-page/checkout-page.component').then(m => m.CheckoutPageComponent),
      },
      {
        path: '**',
        redirectTo: 'shop',
      }
];
