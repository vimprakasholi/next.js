import Image from "next/image";
import Link from "next/link";
import imagePlaceholder from "@/assets/images/products/placeholder.png";

import { FaStar } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { PRODUCTS_ROUTE } from "@/constants/routes";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="rounded-t-lg relative overflow-hidden">
        <Link href={`${PRODUCTS_ROUTE}/${product._id}`}>
          <Image
            className="w-full h-48 object-cover hover:scale-105 transition-all duration-500"
            src={product.imageUrls[0] ?? imagePlaceholder}
            alt="Product Image"
            height={300}
            width={500}
          />
        </Link>
        <span className="absolute top-2 left-2 bg-red-500 text-white rounded-full text-xs h-10 w-10 flex items-center justify-center">
          -20%
        </span>
      </div>
      <div className="p-4">
        <Link href={`${PRODUCTS_ROUTE}/${product._id}`}>
          <h3 className="font-semibold text-xl hover:text-secondary">
            {product.name}
          </h3>
        </Link>
        <div className="text-yellow-500 flex items-center gap-0.5 text-xs py-2">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span className="text-gray-500">(265)</span>
        </div>
        <div className="flex justify-between">
          <div>
            <span className="text-primary text-lg font-bold mr-1">
              Rs. {product.price}
            </span>
            <span className="line-through text-gray-500 text-sm">
              Rs. {product.price * 1.2}
            </span>
          </div>
          <button className="text-primary">
            <FaCartPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
