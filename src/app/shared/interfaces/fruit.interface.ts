export interface Fruit {
  name: string;
  img: string;
  description: string;
  genus: string;
  stars: number;
  reviews: Array<{ name: string; text: string }>;
}
