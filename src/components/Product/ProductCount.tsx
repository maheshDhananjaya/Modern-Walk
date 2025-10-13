"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

interface ProductCounterProps {
  productCount?: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const ProductCountr = ({ productCount, setCount }: ProductCounterProps) => {
  console.log("productCount", productCount);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };
  const handleDesctiment = () => {
    setCount((count) => Math.max(count - 1, 0));
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setCount(value);
    }
  };
  return (
    <div className="flex flex-row p-1 bg-muted items-center border rounded-md">
      <Button variant={"outline"} onClick={handleDesctiment}>
        -
      </Button>
      <div className="flex flex-row items-center">
        <input
          type="string"
          className="w-12 text-center bg-muted outline-none"
          min={1}
          value={productCount}
          onChange={handleInput}
        />
      </div>
      <Button variant={"outline"} onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
};

export default ProductCountr;
