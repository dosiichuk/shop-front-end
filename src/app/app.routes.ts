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
      }
];
