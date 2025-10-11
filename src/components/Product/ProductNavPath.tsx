import React from "react";

interface ProductNavPathProps {
  label: string;
  isSelected?: boolean;
}

const ProductNavPath = ({ label, isSelected }: ProductNavPathProps) => {
  return (
    <p
      className={`text-sm leading-normal font-normal ${
        isSelected ? "text-primary" : "text-muted-foreground"
      }`}
    >
      {label}
    </p>
  );
};

export default ProductNavPath;
