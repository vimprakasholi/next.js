import Spinner from "@/components/Spinner";
import React from "react";

const ProductLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Spinner className="w-16 h-16 fill-primary" />
    </div>
  );
};

export default ProductLoader;
