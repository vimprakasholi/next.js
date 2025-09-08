"use client";

import { PRODUCTS_CART_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";

const CartButton = () => {
  const router = useRouter();
  const { products } = useSelector((state) => state.cart);

  return (
    <button
      onClick={() => router.push(PRODUCTS_CART_ROUTE)}
      className="text-sm cursor-pointer relative px-1"
    >
      <span className="absolute -top-2 -right-2 text-[.75rem] h-4 w-4 text-white bg-red-600 rounded-full">
        {products.length}
      </span>
      <MdOutlineAddShoppingCart />
    </button>
  );
};

export default CartButton;
