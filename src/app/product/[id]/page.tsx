import { ChevronRight, Star } from "lucide-react";
import React from "react";
import Image from "next/image";

import ProductNavPath from "@/components/Product/ProductNavPath";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/Product/ProductCard";
import ProductCountr from "@/components/Product/ProductCount";
import ProductRating from "@/components/Product/ProductRating";

const ProductDetailPage = () => {
  return (
    <div className="flex min-h-screen flex-col px-30 py-32">
      <div className="flex flex-row gap-2.5 mb-16 items-center">
        <ProductNavPath label={"Home"} />
        <ChevronRight
          className="text-muted-foreground"
          width={15}
          height={15}
        />
        <ProductNavPath label={"Shop"} />
        <ChevronRight
          className="text-muted-foreground"
          width={15}
          height={15}
        />
        <ProductNavPath label={"Product category"} />
        <ChevronRight
          className="text-muted-foreground"
          width={15}
          height={15}
        />
        <ProductNavPath label={"Product Name"} isSelected />
      </div>
      <div className="flex flex-row gap-6 col-span-3 mb-32 items-center">
        <div className="flex flex-col gap-2">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="min-w-45 h-42.5 border rounded-xl">
              <Image
                src="/assets/pdp.jpg"
                alt="Product Image"
                width={148}
                height={148}
                className="object-fit w-full h-full p-4"
              />
            </div>
          ))}
        </div>
        <div className="flex min-w-120 h-131 border rounded-xl">
          <Image
            src="/assets/pdp.jpg"
            alt="Product Image"
            width={454}
            height={524}
            className="object-fit w-full h-full p-4"
          />
        </div>
        <div className="flex flex-col py-16">
          <div className="flex flex-col gap-4 pb-8 ">
            <h1 className="text-2xl font-bold">Product Name</h1>
            <p className="text-lg text-gray-600">$99.99</p>
            <ProductRating rating={4.5} />
            <p className="text-gray-700">
              A timeless layering essential made from durable yet lightweight
              cotton. This jacket offers a clean, structured fit with just the
              right amount of stretch for all-day comfort.
            </p>
          </div>
          <div className="flex flex-col gap-2 py-8 border-y">
            <p>Select Size</p>
            <div className="flex flex-row gap-3">
              {["Small", "Medium", "Large"].map((size) => (
                <div
                  key={size}
                  className="border rounded-md px-3 py-1.5 cursor-pointer hover:bg-gray-200"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center py-8">
            <ProductCountr />
            <Button className="flex-1 px-8 py-3">Add to Cart</Button>
          </div>
        </div>
      </div>
      <div>
        <p className="text-3xl text-primary font-bold mb-8">Product Details</p>
        <p className="text-gray-700">
          This jacket is crafted from high-quality cotton, ensuring durability
          and comfort. The structured fit provides a sleek silhouette, while the
          lightweight fabric makes it perfect for layering in any season. With
          its versatile design, this jacket can easily transition from casual to
          more formal occasions.
        </p>
      </div>
      <div className="mt-32">
        <p className="text-3xl text-primary leading-none font-bold mb-4">
          Related Products
        </p>
        <div className="mt-8 gap-6 grid grid-cols-4">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="mb-4">
              <ProductCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
