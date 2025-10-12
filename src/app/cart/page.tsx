import CartProductCard from "@/components/cart/CartProductCard";
import SummaryRow from "@/components/cart/SummaryRow";
import ProductCard from "@/components/Product/ProductCard";
import ProductNavPath from "@/components/Product/ProductNavPath";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React from "react";

const CartPage = () => {
  return (
    <div className="px-30 py-32">
      <div className="flex flex-row pb-16 gap-2.5 items-center">
        <ProductNavPath label="Home" href="/" />
        <ChevronRight
          className="text-muted-foreground"
          width={15}
          height={15}
        />
        <ProductNavPath label="Cart" isSelected={true} />
      </div>
      <div className="pb-16 border-b mb-16">
        <p className="text-3xl leading-none text-bold">Shopping Cart</p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 flex flex-col gap-4">
          {[1, 2, 3].map((item, index) => (
            <CartProductCard key={index} />
          ))}
        </div>
        <div className="cal-span-1 flex flex-col p-8 border rounded-xl h-min bg-muted">
          <p className="text-2xl font-bold">Order Summary</p>
          <div className="my-9">
            <SummaryRow label="Subtotal" value="$255.00" />
            <SummaryRow label="Shipping" value="$5.00" />
            <SummaryRow label="Tax (10%)" value="$26.00" />
            <SummaryRow label="Grand Total" value="$286.00" isTotal />
          </div>
          <Button className="bg-primary text-white py-3 px-6 rounded-lg mt-4 hover:bg-primary/90 transition">
            Proceed to Checkout
          </Button>
        </div>
      </div>
      <div className="mt-32">
        <p className="text-3xl leading-none font-bold">You May Also Like</p>
        <div className="mt-8 grid grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index}>
              {" "}
              <ProductCard />{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
