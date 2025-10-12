import Image from "next/image";

import ProductCountr from "../Product/ProductCount";

const CartProductCard = () => {
  return (
    <div className="flex flex-row p-6 border rounded-xl items-center justify-between">
      <div>
        <Image
          src="/assets/cart-item.jpg"
          alt="Product Image"
          width={148}
          height={132}
          className="object-fit w-full h-full p-4"
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-bsse font-semibold text-primary">
          Men’s Cotton Jacket
        </p>
        <div className="flex flex-row gap-1">
          <p className="text-xs leading-normal text-muted-foreground">Size</p>
          <p className="text-xs leading-normal text-primary">Medium</p>
        </div>
        <p className="text-base leading-6">$99.99</p>
      </div>
      <div>
        <ProductCountr />
      </div>
    </div>
  );
};

export default CartProductCard;
