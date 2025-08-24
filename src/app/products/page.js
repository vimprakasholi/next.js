import ProductCard from "./_components/Card";

const Products = async ({ searchParams }) => {
  const query = await searchParams;
  console.log(query);

  const products = await fetch(
    `https://node-20250302.vercel.app/api/products`
  ).then((res) => res?.json());

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
