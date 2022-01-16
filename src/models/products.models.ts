export type Category = 'drinks' | 'food' | 'snacks'

export interface Product {
  id: number;
  name: string;
  price: number;
  imageURL: string;
  category?: Category;
  amount?: number;
}