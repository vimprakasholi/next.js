async function getProductById(productId) {
  const product = await fetch(
    `https://node-20250302.vercel.app/api/products/${productId}`
  )
    .then((res) => res?.json())
    .catch((error) => {
      throw new Error(`Product not found`);
    });

  return product;
}

export const generateMetadata = async ({ params }) => {
  const productId = (await params).productId;
  const product = await getProductById(productId);
  return {
    title: product.name,
    keywords: `${product?.name}, ${product?.brand}, ${product?.category}`,
  };
};
const ProductDetails = async ({ params }) => {
  const productId = (await params).productId;

  const product = await getProductById(productId);

  return (
    <div>
      <h1>Product Details</h1>
      <ul>
        <li>Name: {product.name}</li>
        <li>Brand: {product.brand}</li>
        <li>Category: {product.category}</li>
        <li>Price: {product.price}</li>
        <li>Description: {product.description}</li>
      </ul>
    </div>
  );
};

export default ProductDetails;
