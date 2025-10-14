"use client";
import Image from "next/image";

import ProductCounter from "../Product/ProductCount";
import { useState } from "react";
import { ICartProductDetail } from "@/types/product/productResponse";

interface CartProductCardProps {
  productData?: ICartProductDetail;
}

const CartProductCard = ({ productData }: CartProductCardProps) => {
  const [count, setCount] = useState(productData?.qty ?? 1);
  return (
    <div className="flex flex-row p-6 border rounded-xl items-center justify-between hover:border-primary">
      <div className="h-41">
        <Image
          src={productData?.image || "/assets/sample.jpg"}
          alt="Product Image"
          width={148}
          height={132}
          className="object-cover w-full h-full p-4"
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-base font-semibold text-primary">
          {productData?.title}
        </p>
        <div className="flex flex-row gap-1">
          <p className="text-xs leading-normal text-muted-foreground">Size</p>
          <p className="text-xs leading-normal text-primary">
            {productData?.size}
          </p>
        </div>
        <p className="text-base leading-6">{`$${productData?.price}`}</p>
      </div>
      <div>
        <ProductCounter productCount={count} setCount={setCount} />
      </div>
    </div>
  );
};

export default CartProductCard;
