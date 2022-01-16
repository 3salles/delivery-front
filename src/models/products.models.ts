export type Category = 'drinks' | 'food' | 'snacks'
export interface Product {
  id: number;
  name: string;
  price: number;
  imageURL: string;
  amount?: number;
}

export interface Address {
  address: string;
  complement: string;
  neighborhood: string;
  cep: string;
  city: string;
  state: string;
}