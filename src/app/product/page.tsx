"use client";
import { useRouter } from "next/navigation";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { PRODUCTS_CATEGORIES } from "@/constants/product";
import ProductCard from "@/components/Product/ProductCard";
import { useCategoryStore } from "@/store/useCategoryStore";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/api";
import { CategoryMap } from "@/data/product";
import ProductNavPath from "@/components/Product/ProductNavPath";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import ProductListSkeleton from "@/components/Product/ProductListSkelton";

const ProductList = () => {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { selectedCategory, setSelectedCategory } = useCategoryStore(
    (state) => state
  );

  const { data: allProducts, isLoading } = useQuery({
    queryKey: ["products", selectedCategory],
    queryFn: () =>
      getProducts(selectedCategory ? CategoryMap[selectedCategory] : undefined),
  });
  const itemsPerPage = 10;
  const paginatedProducts = allProducts?.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const numberOfPages = allProducts?.length ? allProducts.length / 10 : 1;

  const handleProductClick = () => {
    router.push("/product/1");
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setPage(1);
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
        <Button variant="outline" className="">
          Sort <ChevronDown />
        </Button>
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
              <ProductCard onClick={handleProductClick} productdata={product} />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-32">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage((p) => Math.max(p - 1, 1));
                }}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                {page}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage((p) => p + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default ProductList;
