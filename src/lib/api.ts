import { DEFAULT_CATEGORY } from "@/constants/product";
import { IProduct, IProductDetail } from "@/types/product/productResponse";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getProducts = async (category?: string): Promise<IProduct[]> => {
  const url =
    category && category !== DEFAULT_CATEGORY
      ? `${BASE_URL}/products/category/${encodeURIComponent(category)}`
      : `${BASE_URL}/products`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

export const getProductById = async (id: number): Promise<IProductDetail> => {
  const res = await fetch(`${BASE_URL}/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  const product = await res.json();
  const relatedProductsRes = await getProducts(product.category);
  const relatedProduct = relatedProductsRes.filter(
    (item) => item.id !== product.id
  );

  return {
    ...product,
    related: relatedProduct,
  };
};
