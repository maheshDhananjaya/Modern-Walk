import React from "react";

interface ProductNavPathProps {
  label: string;
  isSelected?: boolean;
  href?: string;
}

const ProductNavPath = ({ label, isSelected, href }: ProductNavPathProps) => {
  return (
    <a
      href={href ?? "#"}
      role="link"
      className={`text-sm leading-normal font-normal ${
        isSelected ? "text-primary" : "text-muted-foreground"
      }`}
    >
      {label}
    </a>
  );
};

export default ProductNavPath;
