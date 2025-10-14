"use client";
import { useRouter } from "next/navigation";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import ProductCard from "@/components/Product/ProductCard";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useCategoryStore } from "@/store/useCategoryStore";
import { useQuery } from "@tanstack/react-query";
import { DEFAULT_CATEGORY } from "@/constants/product";
import { getProducts } from "@/lib/api";
import {
  getFlashSaleProducts,
  getLatestProducts,
  getPopularProduct,
} from "@/lib/prodUtils";
import LandingPageSkeleton from "@/components/Product/LandingPageSkelton";

export default function Home() {
  const router = useRouter();
  const { data: productData, isLoading } = useQuery({
    queryKey: ["product", DEFAULT_CATEGORY],
    queryFn: () => getProducts(DEFAULT_CATEGORY),
  });
  const setSelectedCategory = useCategoryStore(
    (state) => state.setSelectedCategory
  );
  const handleAllCategoriesClick = (category?: string) => {
    setSelectedCategory(category ?? "all");
    router.push("/product");
  };

  const handleShopNow = () => {
    router.push("/product");
  };

  const flashSaleProducts = useMemo(
    () => getFlashSaleProducts(productData),
    [productData]
  );

  const mostPopularProduct = useMemo(
    () => getPopularProduct(productData),
    [productData]
  );

  const latestProduct = useMemo(
    () => getLatestProducts(productData),
    [productData]
  );

  if (isLoading) {
    return <LandingPageSkeleton />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="grid grid-cols-2 items-center bg-muted">
        <div className="flex pl-30 pr-15 flex-col">
          <div className="flex flex-col gap-4">
            <p className="text-4xl leading-normal font-bold text-primary">
              Redefining Fashion with Modern Walk
            </p>
            <p className="text-base leading-normal text-muted-foreground">
              Step into timeless fashion made for today’s lifestyle.
            </p>
            <div>
              <Button
                className="px-8 py-1.5 cursor-pointer"
                onClick={handleShopNow}
              >
                Shop Now
              </Button>
            </div>
          </div>
          <div className="flex flex-row mt-16">
            <div className="flex flex-col gap-1">
              <p className="text-3xl leading-none font-bold">200+</p>
              <p className="text-base leading-normal text-muted-foreground">
                International Brands
              </p>
            </div>
            <div className="w-px bg-border mx-6" />
            <div className="flex flex-col gap-1">
              <p className="text-3xl leading-none font-bold">2,000+</p>
              <p className="text-base leading-noraml text-muted-foreground">
                High-Quality Products
              </p>
            </div>
            <div className="w-px bg-border mx-6" />
            <div className="flex flex-col gap-1">
              <p className="text-3xl leading-none font-bold">30,000+</p>
              <p className="text-base leading-noraml text-muted-foreground">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/assets/sample.jpg"}
            height={646}
            width={708}
            className="rounded-bl-xl object-fill w-full"
            alt="home page image"
          />
        </div>
      </div>
      <div className="px-30 py-32">
        <div className="flex flex-row justify-between items-center">
          <p className="text-3xl leading-none font-bold text-primary">
            Shop By Category
          </p>
          <Button
            variant="link"
            className="text-primary cursor-pointer"
            onClick={() => handleAllCategoriesClick()}
          >
            Browse All Categories
            <ArrowRight />
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="relative bg-black h-125 rounded-xl p-8 flex flex-col justify-end">
            <div>
              <Typography variant="h3" className="text-white mb-3">
                New Arrivals
              </Typography>
              <div className="flex items-center gap-2 text-white cursor-pointer hover:underline">
                <span
                  className="text-sm font-medium"
                  onClick={() => handleAllCategoriesClick("New Arrivals")}
                >
                  Shop Now
                </span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative bg-black h-59 rounded-xl p-8 flex flex-col justify-end">
              <div>
                <Typography variant="h3" className="text-white mb-3">
                  Women’s Clothing
                </Typography>
                <div className="flex items-center gap-2 text-white cursor-pointer hover:underline">
                  <span
                    className="text-sm font-medium"
                    onClick={() => handleAllCategoriesClick("Women")}
                  >
                    Shop Now
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="relative bg-black h-59 rounded-xl p-8 flex flex-col justify-end">
              <div>
                <Typography variant="h3" className="text-white mb-3">
                  Men’s Clothing
                </Typography>
                <div className="flex items-center gap-2 text-white cursor-pointer hover:underline">
                  <span
                    className="text-sm font-medium"
                    onClick={() => handleAllCategoriesClick("Men")}
                  >
                    Shop Now
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-30 pb-32">
        <p className="text-3xl font-bold leading-none">Flash Sale</p>
        <div className="mt-8 gap-6 grid grid-cols-4">
          {flashSaleProducts.map((product) => (
            <div key={product.id}>
              <Link href={`/product/${product.id}`}>
                <ProductCard productData={product} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="px-30 pb-32">
        <p className="text-3xl font-bold leading-none">Most Popular</p>
        <div className="mt-8 gap-6 grid grid-cols-4">
          {mostPopularProduct?.map((product) => (
            <div key={product.id}>
              <Link href={`/product/${product.id}`}>
                <ProductCard productData={product} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="px-30 pb-32 h-80">
        <div className="flex flex-col justify-between bg-muted px-16 py-8 rounded-xl">
          <div>
            <Typography variant="h3" className="">
              Autumn Sale
            </Typography>
            <Typography className="text-muted-foreground">
              Limited time only. Don’t miss out!
            </Typography>
            <Typography variant={"h1"} className="mt-2">
              40% Off
            </Typography>
          </div>
          <div></div>
        </div>
      </div>
      <div className="px-30 pb-32">
        <div className="flex flex-row justify-between items-center">
          <p className="text-3xl font-bold leading-none">Latest Products</p>
          <Button
            variant="link"
            className="text-primary"
            onClick={() => handleAllCategoriesClick()}
          >
            Browse All Categories
            <ArrowRight />
          </Button>
        </div>
        <div className="mt-8 gap-6 grid grid-cols-4">
          {latestProduct?.map((product) => (
            <div key={product.id}>
              <Link href={`/product/${product.id}`}>
                <ProductCard productData={product} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="px-30 mb-32 h-40">
        <div className="flex flex-row justify-between bg-black px-16 py-8 rounded-xl">
          <div>
            <Typography
              variant="h1"
              className="text-white max-w-sm"
              lineHeight={"none"}
            >
              Subscribe to Our Newsletter
            </Typography>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center border rounded-md bg-muted min-w-100 py-2.5 px-3">
              <Mail className="mx-2 w-4 h-4" />
              <Typography
                className="text-muted-foreground"
                lineHeight={"none"}
                variant={"base"}
              >
                Enter your email
              </Typography>
            </div>
            <Button className="bg-white text-black min-w-100">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
