import Image from "next/image";
import imagePlaceholder from "@/assets/images/products/placeholder.png";

const LoadingCard = () => {
  return (
    <div className="bg-white border border-gray-100 shadow-md rounded-lg animate-pulse duration-100 ease-in-out">
      <Image
        className="w-full h-48 object-cover rounded-t-lg"
        src={imagePlaceholder}
        alt="Product Image"
        height={150}
        width={250}
      />
      <div className="px-4 py-3">
        <div className="w-full h-8 bg-gray-700"></div>
        <div className="w-1/3 h-4 bg-yellow-400 my-2"></div>
        <div className="flex items-end gap-2 text-sm">
          <span className="bg-primary/80 w-1/2 h-6 text-green-600 px-3"></span>
          <span className="bg-gray-400  w-1/3 h-5 text-blue-600 px-3"></span>
        </div>
      </div>
    </div>
  );
};
const ProductsLoader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </div>
  );
};

export default ProductsLoader;
