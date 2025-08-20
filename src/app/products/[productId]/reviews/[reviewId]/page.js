const ProductReview = async ({ params }) => {
  const productId = (await params).productId;

  const reviewId = (await params).reviewId;
  return (
    <div>
      <h1>Product Id: {productId}</h1>
      <p>Review Id: {reviewId}</p>
    </div>
  );
};

export default ProductReview;
