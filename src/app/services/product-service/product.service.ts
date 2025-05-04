import { Injectable } from '@angular/core';
import { Product } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  constructor() { 
    this.products = [
      {
        id: 1,
        name: 'Wireless Headphones',
        price: 120,
        description: 'High-quality wireless headphones with noise cancellation.',
        imageUrl: 'https://images.unsplash.com/photo-1512499617640-c2f99901822c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        category: 'Electronics',
        rating: 4.6
      },
      {
        id: 2,
        name: 'Gaming Laptop',
        price: 1500,
        description: 'Powerful gaming laptop with high-end graphics and performance.',
        imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        category: 'Computers',
        rating: 4.8
      },
      {
        id: 3,
        name: 'Smartphone',
        price: 800,
        description: 'Latest smartphone with cutting-edge features and sleek design.',
        imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        category: 'Mobile Phones',
        rating: 4.7
      },
      {
        id: 4,
        name: 'Running Shoes',
        price: 100,
        description: 'Comfortable and durable running shoes for all terrains.',
        imageUrl: 'https://images.unsplash.com/photo-1528701800489-20f1e6a817dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        category: 'Sportswear',
        rating: 4.5
      },
      {
        id: 5,
        name: 'Smartwatch',
        price: 250,
        description: 'Stylish smartwatch with fitness tracking and notifications.',
        imageUrl: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        category: 'Wearables',
        rating: 4.4
      },
      {
        id: 6,
        name: 'Electric Guitar',
        price: 700,
        description: 'Premium electric guitar with excellent sound quality.',
        imageUrl: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        category: 'Musical Instruments',
        rating: 4.9
      },
      {
        id: 7,
        name: 'Office Chair',
        price: 180,
        description: 'Ergonomic office chair with lumbar support and adjustable height.',
        imageUrl: 'https://images.unsplash.com/photo-1578898884382-e7d6a6b4a6f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        category: 'Furniture',
        rating: 4.3
      },
      {
        id: 8,
        name: 'Coffee Maker',
        price: 90,
        description: 'Automatic coffee maker with programmable settings.',
        imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        category: 'Appliances',
        rating: 4.6
      },
      {
        id: 9,
        name: 'Backpack',
        price: 60,
        description: 'Durable and spacious backpack for travel and daily use.',
        imageUrl: 'https://images.unsplash.com/photo-1571847146907-3c8f539b6a4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        category: 'Accessories',
        rating: 4.5
      },
      {
        id: 10,
        name: 'Mountain Bike',
        price: 1200,
        description: 'High-performance mountain bike for off-road adventures.',
        imageUrl: 'https://images.unsplash.com/photo-1506224477009-22fe48d1a7dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        category: 'Outdoor',
        rating: 4.8
      }
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }
  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
