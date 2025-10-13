export enum ProductCategory {
  All = "all",
  Men = "men's clothing",
  Women = "women's clothing",
  Unisex = "electronics",
  Accessories = "jewelery",
}

export interface IProductRating {
  rate: number;
  count: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: string;
  description: number;
  category: ProductCategory;
  image: string;
  rating: IProductRating;
}

export interface IProductDetail extends IProduct {
  related: IProduct[];
}
