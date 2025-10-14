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
  price: number;
  description: number;
  category: ProductCategory;
  image: string;
  rating: IProductRating;
}

export interface IProductDetail extends IProduct {
  related: IProduct[];
}

export interface ICartProductDetail extends IProduct {
  size?: string;
  qty: number;
}

export enum SortKey {
  PRICE = "price",
  RATING = "rating",
  POPULAR = "popular",
}

export enum SortOrder {
  ASC = "asc",
  DESC = "desc",
}
