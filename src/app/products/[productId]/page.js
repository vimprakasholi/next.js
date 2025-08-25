import { getProductById } from "@/api/products";

export const generateMetadata = async ({ params }) => {
  const productId = (await params).productId;
  const response = await getProductById(productId);
  const product = response.data;

  return {
    title: product.name,
    keywords: `${product?.name}, ${product?.brand}, ${product?.category}`,
  };
};
const ProductDetails = async ({ params }) => {
  const productId = (await params).productId;
  const response = await getProductById(productId);
  const product = response.data;

  return (
    <div>
      <h1 className="text-3xl">Product Details</h1>
      <ul>
        <li>Name: {product?.name}</li>
        <li>Brand: {product?.brand}</li>
        <li>Category: {product?.category}</li>
        <li>Price: {product?.price}</li>
        <li>Description: {product?.description}</li>
      </ul>
    </div>
  );
};

export default ProductDetails;
