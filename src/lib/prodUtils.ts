import {
  IProduct,
  ProductCategory,
  SortKey,
  SortOrder,
} from "@/types/product/productResponse";

export const getPopularProduct = (products?: IProduct[]) => {
  if (!products || products.length === 0) return [];
  return products?.filter((product) => product.rating.rate > 4.5);
};

export const getLatestProducts = (products?: IProduct[]) => {
  if (!products || products.length === 0) return [];
  return products.slice(0, 4);
};

export const getFlashSaleProducts = (products?: IProduct[]) => {
  if (!products || products.length === 0) return [];
  const menProducts = products?.filter(
    (product) => product.category === ProductCategory.Men
  );
  const womenProducts = products?.filter(
    (product) => product.category === ProductCategory.Women
  );
  const flashSaleProducts = [];
  const maxLength = Math.max(menProducts.length, womenProducts.length);
  for (let i = 0; i < maxLength; i++) {
    if (menProducts[i]) flashSaleProducts.push(menProducts[i]);
    if (womenProducts[i]) flashSaleProducts.push(womenProducts[i]);
  }
  return flashSaleProducts;
};

export const sortProduct = (
  sortKey: SortKey,
  sortOrder: SortOrder,
  products?: IProduct[]
) => {
  if (!products || products.length === 0) return [];
  return [...products].sort((a, b) => {
    let aValue: number, bValue: number;
    switch (sortKey) {
      case "price":
        aValue = a.price;
        bValue = b.price;
        break;
      case "rating":
        aValue = a.rating.rate;
        bValue = b.rating.rate;
        break;
      case "popular":
        aValue = a.rating.count;
        bValue = b.rating.count;
        break;
      default:
        aValue = 0;
        bValue = 0;
    }
    return sortOrder === SortOrder.ASC ? aValue - bValue : bValue - aValue;
  });
};
