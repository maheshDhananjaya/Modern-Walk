import React from "react";
import { Button } from "../ui/button";

const ProductCountr = () => {
  return (
    <div className="flex flex-row p-1 bg-muted items-center border rounded-md">
      <Button variant={"outline"}>-</Button>
      <div className="flex flex-row items-center">
        <input
          type="string"
          className="w-12 text-center bg-muted outline-none"
          defaultValue={1}
          min={1}
        />
      </div>
      <Button variant={"outline"}>+</Button>
    </div>
  );
};

export default ProductCountr;
