import React from "react";

interface SummaryRowProps {
  label: string;
  value: string;
  isTotal?: boolean;
}

const SummaryRow = ({ label, value, isTotal }: SummaryRowProps) => {
  return (
    <div className="flex flex-row justify-between border-b py-4">
      <p
        className={`text-base ${
          isTotal ? "text-primary" : "text-muted-foreground"
        }`}
      >
        {label}
      </p>
      <p
        className={`text-base ${
          isTotal ? "text-primary" : "text-muted-foreground"
        }`}
      >
        {value}
      </p>
    </div>
  );
};

export default SummaryRow;
