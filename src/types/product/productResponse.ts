export interface IProductRating {
  rate: number;
  count: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: string;
  description: number;
  category: string;
  image: string;
  rating: IProductRating;
}

export interface IProductDetail extends IProduct {
  related: IProduct[];
}
