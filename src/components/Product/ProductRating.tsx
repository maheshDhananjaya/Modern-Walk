import { Star } from "lucide-react";
import React from "react";

interface ProductRatingProps {
    rating?: number;
    color?: string;
}

const ProductRating = ({ rating,color }: ProductRatingProps) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <Star className="text-yellow-500 fill-yellow-500 w-4 h-4" />
      <p className={`text-base leading-none ${color}`}>{`${rating ?? 0}/5`}</p>
    </div>
  );
};

export default ProductRating;
