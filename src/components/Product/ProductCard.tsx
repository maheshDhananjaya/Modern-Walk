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
        <Typography variant="base" className="text-semiBold line-clamp-1" lineHeight={"none"}>
          {productdata?.title}
        </Typography>
        <div className="flex flex-row justify-between items-center">
          <Typography variant="base" lineHeight={"none"}>
            {`$${productdata?.price}`}
          </Typography>
          <ProductRating
            rating={productdata?.rating.rate}
            color="text-muted-foreground"
          />
        </div>
        <Typography
          variant="small"
          className="text-muted-foreground line-clamp-2"
          lineHeight={"none"}
        >
          {productdata?.description}
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
