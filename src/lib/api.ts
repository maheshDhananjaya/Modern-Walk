import { IProduct, IProductDetail } from "@/types/product/productResponse";

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

export const getProductById = async (id: number): Promise<IProductDetail> => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

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
