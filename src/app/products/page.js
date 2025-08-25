import { getProducts } from "@/api/products";
import ProductCard from "./_components/Card";

export const metadata = {
  title: "Products",
};

const Products = async ({ searchParams }) => {
  const response = await getProducts();

  const products = response.data;

  return (
    <>
      <h1 className="text-3xl py-5 font-medium">Popular Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
