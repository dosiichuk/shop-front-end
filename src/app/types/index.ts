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
