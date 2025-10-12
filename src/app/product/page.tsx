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

const ProductList = () => {
  const router = useRouter();
  const selectedCategory = useCategoryStore((state) => state.selectedCategory);

  const { data, isLoading } = useQuery({
    queryKey: ["products", selectedCategory],
    queryFn: () =>
      getProducts(selectedCategory ? CategoryMap[selectedCategory] : undefined),
  });

  const handleProductClick = () => {
    router.push("/product/1");
  };
  return (
    <div className="px-30 py-32">
      <div className="flex flex-row gap-2.5 mb-16 items-center">
        <Typography
          variant="small"
          className="text-muted-foreground"
          lineHeight={"none"}
        >
          Home
        </Typography>
        <ChevronRight />
        <Typography
          variant="small"
          className="text-muted-foreground"
          lineHeight={"none"}
        >
          Shop
        </Typography>
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
                <Checkbox />
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
          {data?.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <ProductCard onClick={handleProductClick} productdata={product} />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-row mt-32 gap-1.5 justify-center items-center">
        <div className="flex flex-row items-center gap-2 px-4 py-2 cursor-pointer">
          <ChevronLeft />
          <p className="text small leading-normal font-medium">Previous</p>
        </div>
        <div>
          <Button variant="outline" className="">
            1
          </Button>
        </div>
        <div className="flex flex-row items-center gap-2 px-4 py-2 cursor-pointer">
          <p className="text small leading-normal font-medium">Next</p>
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
