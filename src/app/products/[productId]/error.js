"use client";
const ProductError = ({ error }) => {
  return <div className="text-center text-red-600">{error.message}</div>;
};

export default ProductError;
