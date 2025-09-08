"use client";

import { addToCart } from "@/redux/cart/cartSlice";
import { FaCartPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();

  function addProductToCart() {
    delete product.description;

    dispatch(addToCart(product));
  }

  return (
    <button
      onClick={addProductToCart}
      className="text-primary dark:text-secondary cursor-pointer"
    >
      <FaCartPlus />
    </button>
  );
};

export default AddToCart;
