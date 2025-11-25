import { getProducts } from "@/api/products";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";

const Card = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="relative">
        {product.imageUrls.length > 0 ? (
          <Image
            className="rounded-t-lg w-full h-48 object-cover"
            src={product?.imageUrls[0]}
            alt={`${product.name}`}
            height={300}
            width={600}
          />
        ) : (
          <div className="flex items-center justify-center rounded-t-lg w-full h-48 bg-gray-200">
            <FaImage className="text-6xl text-gray-500" />
          </div>
        )}
        <span className="absolute top-2 left-2 bg-red-500 text-white rounded-full text-xs px-3 py-1">
          Bestseller
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold tex-lg">{product.name}</h3>
        <p className="text-sm text-gray-500 py-2">
          One of the best selling products.
        </p>
        <div className="flex justify-between">
          <div className="mb-2">
            <span className="text-primary text-lg font-bold mr-1">
              Rs.{(product.price * 0.2).toFixed(2)}
            </span>
          </div>
          <button className="bg-primary flex items-center gap-2 text-white rounded px-2 text-sm">
            <span>Add to Cart</span>
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

const PopularProducts = async () => {
  const response = await getProducts({ category: "Laptops" });
  const products = response.data;

  return (
    <section id="popularProducts" className="py-12 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-4">
            Popular Products
          </h2>
          <p className="text-gray-600 text-center">
            Check out the latest and the best products available in the market.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products?.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
