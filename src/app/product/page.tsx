"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { Typography } from "@/components/ui/typography";
import { Checkbox } from "@/components/ui/checkbox";
import {
  PRODUCT_PER_PAGE,
  PRODUCTS_CATEGORIES,
  PRODUCTS_SORT_OPTIONS,
} from "@/constants/product";
import ProductCard from "@/components/Product/ProductCard";
import { useCategoryStore } from "@/store/useCategoryStore";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/api";
import { CategoryMap } from "@/data/product";
import ProductNavPath from "@/components/Product/ProductNavPath";
import ProductListSkeleton from "@/components/Product/ProductListSkelton";
import { useProductStore } from "@/store/useProductStore";
import { SortKey, SortOrder } from "@/types/product/productResponse";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sortProduct } from "@/lib/prodUtils";
import { ProductPagination } from "@/components/Product/ProductPagination";

const ProductList = () => {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { selectedCategory, setSelectedCategory } = useCategoryStore(
    (state) => state
  );
  const { sortKey, sortOrder, setSortKey, setSortOrder } = useProductStore(
    (state) => state
  );

  const { data: allProducts, isLoading } = useQuery({
    queryKey: ["products", selectedCategory],
    queryFn: () =>
      getProducts(selectedCategory ? CategoryMap[selectedCategory] : undefined),
    select: (data) => sortProduct(sortKey, sortOrder, data),
  });
  const itemsPerPage = 10;
  const paginatedProducts = allProducts?.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleProductClick = () => {
    router.push("/product/1");
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setPage(1);
  };

  const handleSortChange = (value: string) => {
    const [key, order] = value.split("-");
    setSortKey(key as SortKey);
    setSortOrder(order as SortOrder);
  };

  if (isLoading) {
    return <ProductListSkeleton />;
  }

  return (
    <div className="px-30 py-32">
      <div className="flex flex-row gap-2.5 mb-16 items-center">
        <ProductNavPath label={"Home"} href="/" />
        <ChevronRight
          className="text-muted-foreground"
          width={15}
          height={15}
        />
        <ProductNavPath label={"Shop"} />
      </div>
      <div className="flex flex-row justify-between items-center pb-16 border-b mb-16">
        <Typography variant="h2">Product List</Typography>
        <div>
          <Select
            value={`${sortKey}-${sortOrder}`}
            onValueChange={handleSortChange}
          >
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {PRODUCTS_SORT_OPTIONS.map((option) => (
                <SelectItem key={option.key} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-row gap-6 grid grid-cols-4">
        <div className="flex flex-col">
          <Typography color="primary" className="mb-6" variant={"base"}>
            Category
          </Typography>
          <div className="flex flex-col gap-2">
            {PRODUCTS_CATEGORIES.map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-center gap-2 p-1.5"
              >
                <Checkbox
                  checked={item === selectedCategory}
                  onCheckedChange={() => handleCategorySelect(item)}
                />
                <Typography
                  key={index}
                  className="text-muted-foreground"
                  lineHeight={"none"}
                  variant={"small"}
                >
                  {item}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <div className="gap-6 grid grid-cols-3 col-span-3">
          {paginatedProducts?.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <ProductCard onClick={handleProductClick} productData={product} />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-32">
        <ProductPagination
          currentPage={page}
          totalPages={Math.ceil(
            allProducts ? allProducts.length / PRODUCT_PER_PAGE : 1
          )}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default ProductList;
