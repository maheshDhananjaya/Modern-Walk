import Image from "next/image";
import { PlusIcon } from "lucide-react";

import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import ProductRating from "./ProductRating";
import { IProduct } from "@/types/product/productResponse";

interface ProductCardProps {
  onClick?: () => void;
  productdata?: IProduct;
}

const ProductCard = ({ onClick, productdata }: ProductCardProps) => {
  return (
    <div
      className="border solid rounded-xl max-w-70 cursor-pointer"
      onClick={onClick}
    >
      <div className="h-56">
        <Image
          width={250}
          height={224}
          src={productdata?.image || "/assets/sample.jpg"}
          alt="product Image"
          className="object-scale-down w-full h-full p-4"
        />
      </div>

      <div className="p-4 pt-0 flex flex-col gap-2">
        <p className="text-base font-semibold line-clamp-1 leading-none">
          {productdata?.title}
        </p>
        <div className="flex flex-row justify-between items-center">
          <p className="text-base leading-none text-primary">
            {`$${productdata?.price}`}
          </p>
          <ProductRating
            rating={productdata?.rating.rate}
            color="text-muted-foreground"
          />
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2">
          {productdata?.description}
        </p>
        <div>
          <Button className="w-full mt-9 px-8 py-1.5 bg-secondary text-primary hover:bg-primary hover:text-white">
            <PlusIcon />
            <p className="text-sm font-medium">Add to Cart</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
