"use client";
import { PRODUCT_SIZE } from "@/constants/product";
import React, { useState } from "react";
import ProductCountr from "./ProductCount";
import { Button } from "../ui/button";

const ProductSizeSelect = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [count, setCount] = useState(0);
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Select size befor add to cart");
      return;
    }
    setCount((count) => count + 1);
  };
  return (
    <>
      <div className="flex flex-col gap-2 py-8 border-y">
        <p>Select Size</p>
        <div className="flex flex-row gap-3">
          {PRODUCT_SIZE.map((size) => (
            <div
              key={size}
              className={`border rounded-md px-3 py-1.5 cursor-pointer transition-colors ${
                selectedSize === size
                  ? "bg-primary text-white border-primary"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleSizeSelect(size)}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-3 items-center py-8">
        <ProductCountr productCount={count} setCount={setCount} />
        <Button
          className="flex flex-1 px-8 py-5 cursor-pointer"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </div>
    </>
  );
};

export default ProductSizeSelect;
