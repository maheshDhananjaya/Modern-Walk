import React from "react";
import { Badge } from "../ui/badge";
import { Handbag } from "lucide-react";

interface CartCountProps {
  count?: number;
}

const CartCount = ({ count = 0 }: CartCountProps) => {
  return (
    <div className="relative flex items-center justify-center">
      <Handbag className="w-6 h-6" />
      {count > 0 && (
        <Badge className="absolute -top-1 -right-1 h-4 min-w-4 px-1 rounded-full text-[10px] font-bold flex items-center justify-center bg-red-500 text-white">
          {count}
        </Badge>
      )}
    </div>
  );
};

export default CartCount;
