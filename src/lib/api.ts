import { IProduct } from "@/types/product/productResponse";

export const getProducts = async (category?: string): Promise<IProduct[]> => {
  const url =
    category && category !== "all"
      ? `https://fakestoreapi.com/products/category/${encodeURIComponent(
          category
        )}`
      : "https://fakestoreapi.com/products";
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};
