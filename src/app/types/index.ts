export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  rating: number;
};

export type ProductCategory = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
  userId: string;
  subtotal: number;
  shippingCost: number;
  total: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  cart: Cart;
};

export type Order = {
  userId: string;
  cart: Cart;
  totalAmount: number;
  orderDate: Date;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
};

export type OrderDetails = {
    order: Order;
    shippingAddress: string;
    paymentMethod: 'Credit Card' | 'PayPal' | 'Bank Transfer';
    trackingNumber?: string;
    deliveryDate?: Date;
};
