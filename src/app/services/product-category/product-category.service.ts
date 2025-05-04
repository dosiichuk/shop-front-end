import { Injectable } from '@angular/core';
import { ProductCategory } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  productCategories: ProductCategory[];

  constructor() {
    this.productCategories = [
      {
        id: 1,
        name: 'Electronics',
        description: 'Devices and gadgets for everyday use.',
        imageUrl: 'https://images.unsplash.com/photo-1510552776732-03e61cf4b144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
      },
      {
        id: 2,
        name: 'Clothing',
        description: 'Stylish apparel and accessories.',
        imageUrl: 'https://images.unsplash.com/photo-1521334884684-d80222895322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
      },
      {
        id: 3,
        name: 'Home & Kitchen',
        description: 'Household items and appliances.',
        imageUrl: 'https://images.unsplash.com/photo-1560185127-6a8c6e14b7b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
      },
      {
        id: 4,
        name: 'Sports & Outdoors',
        description: 'Gear and equipment for outdoor activities.',
        imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
      },
      {
        id: 5,
        name: 'Books',
        description: 'A wide range of books and literature.',
        imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
      },
      {
        id: 6,
        name: 'Toys & Games',
        description: 'Fun and educational toys for all ages.',
        imageUrl: 'https://images.unsplash.com/photo-1601758123927-2f31c9c1a6fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
      },
      {
        id: 7,
        name: 'Beauty & Personal Care',
        description: 'Products for self-care and grooming.',
        imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
      },
      {
        id: 8,
        name: 'Automotive',
        description: 'Accessories and tools for vehicles.',
        imageUrl: 'https://images.unsplash.com/photo-1515922070646-1c3b6462b6f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
      },
      {
        id: 9,
        name: 'Health & Wellness',
        description: 'Products for a healthy lifestyle.',
        imageUrl: 'https://images.unsplash.com/photo-1556228724-4b97c5f0b7f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
      },
      {
        id: 10,
        name: 'Furniture',
        description: 'Modern and stylish furniture for your home.',
        imageUrl: 'https://images.unsplash.com/photo-1598300051517-45e0b5a1a1d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
      }
    ];
  }

  getProductCategories(): ProductCategory[] {
    return this.productCategories;
  }
  getProductCategoryById(id: number): ProductCategory | undefined {
    return this.productCategories.find(category => category.id === id);
  }

  getCategoryByName(name: string): ProductCategory | undefined {
    return this.productCategories.find(category => category.name.toLowerCase() === name.toLowerCase());
  }
}
