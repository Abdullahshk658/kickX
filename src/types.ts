export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: "Sneakers" | "Apparel" | "Accessories";
  description: string;
  sizes?: string[];
  colors?: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}
