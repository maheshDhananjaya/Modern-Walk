"use client";
import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

import CartProductCard from "@/components/cart/CartProductCard";
import SummaryRow from "@/components/cart/SummaryRow";
import ProductCard from "@/components/Product/ProductCard";
import ProductNavPath from "@/components/Product/ProductNavPath";
import { Button } from "@/components/ui/button";
import { mockCartData } from "@/data/cart";
import { useQuery } from "@tanstack/react-query";
import { DEFAULT_CATEGORY } from "@/constants/product";
import { getProducts } from "@/lib/api";
import Link from "next/link";
import { CartPageSkeleton } from "@/components/Product/CartPageSkelton";
import {
  getLocalStorage,
  LOCAL_STORAGE_KEYS,
  setLocalStorage,
} from "@/lib/storage";

const CartPage = () => {
  const [cartData, setCartData] = useState<any>(null);
  const { data: ProductData, isLoading } = useQuery({
    queryKey: ["product", DEFAULT_CATEGORY],
    queryFn: () => getProducts(),
    select: (data) => data.slice(0, 4),
  });
  useEffect(() => {
    const existingCartData = getLocalStorage(LOCAL_STORAGE_KEYS.CART_DATA);
    if (existingCartData) {
      setCartData(JSON.parse(existingCartData));
    } else {
      setLocalStorage(LOCAL_STORAGE_KEYS.CART_DATA, mockCartData);
      setCartData(mockCartData);
    }
  }, []);

  if (!cartData || isLoading) return <CartPageSkeleton />;

  const { summary, products } = cartData;

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
        <p className="text-3xl leading-none font-bold">Shopping Cart</p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 flex flex-col gap-4 h-120 overflow-scroll overflow-x-hidden scrollbar-hide">
          {products.map((product: any) => (
            <CartProductCard key={product.id} productData={product} />
          ))}
        </div>
        <div className="cal-span-1 flex flex-col p-8 border rounded-xl h-min bg-muted">
          <p className="text-2xl font-bold">Order Summary</p>
          <div className="my-9">
            <SummaryRow label="Subtotal" value={summary.subtotal} />
            <SummaryRow label="Shipping" value={summary.shipping} />
            <SummaryRow label="Tax (10%)" value={summary.tax} />
            <SummaryRow label="Grand Total" value={summary.total} isTotal />
          </div>
          <Button className="bg-primary text-white py-3 px-6 rounded-lg mt-4 hover:bg-primary/90 transition">
            Proceed to Checkout
          </Button>
        </div>
      </div>
      <div className="mt-32">
        <p className="text-3xl leading-none font-bold">You May Also Like</p>
        <div className="mt-8 grid grid-cols-4 gap-6">
          {ProductData?.map((product) => (
            <div key={product.id}>
              <Link href={`/product/${product.id}`}>
                <ProductCard productData={product} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
