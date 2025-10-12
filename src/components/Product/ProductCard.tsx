import Image from "next/image";
import React from "react";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";
import ProductRating from "./ProductRating";

interface ProductCardProps {
  onClick?: () => void;
}

const ProductCard = ({ onClick }: ProductCardProps) => {
  return (
    <div
      className="border solid rounded-xl max-w-70 cursor-pointer"
      onClick={onClick}
    >
      <Image
        width={280}
        height={1}
        src="/assets/sample.jpg"
        alt="product Image"
        className="p-4"
        objectFit="contain"
      />

      <div className="p-4 pt-0 flex flex-col gap-2">
        <Typography variant="base" className="text-semiBold">
          Men’s Cotton Jacket
        </Typography>
        <div className="flex flex-row justify-between items-center">
          <Typography variant="base" lineHeight={"none"}>
            $95.00
          </Typography>
          <ProductRating rating={4.5} color="text-muted-foreground"/>
        </div>
        <Typography variant="small" className="text-muted-foreground">
          A timeless layering essential made from durable yet lightweight
          cotton. This...
        </Typography>
        <Button className="w-full  mt-9">
          <PlusIcon />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
