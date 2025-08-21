import React from "react";

const ProductsLayout = ({ children }) => {
  return (
    <div>
      <h1 className="text-4xl py-2">Products</h1>
      {children}
    </div>
  );
};

export default ProductsLayout;
