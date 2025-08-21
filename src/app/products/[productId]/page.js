const ProductDetails = async ({ params }) => {
  const productId = (await params).productId;

  const product = await fetch(
    `https://node-20250302.vercel.app/api/products/${productId}`
  )
    .then((res) => res?.json())
    .catch((error) => {
      throw new Error("Product not found");
    });

  return (
    <div>
      <h1>Product Details: {productId}</h1>
      <ul>
        <li>Name: {product.name}</li>
        <li>Brand: {product.brand}</li>
        <li>Category: {product.category}</li>
        <li>Price: {product.price}</li>
      </ul>
    </div>
  );
};

export default ProductDetails;
