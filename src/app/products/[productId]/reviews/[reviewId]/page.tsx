import React from "react";
import {notFound} from "next/navigation";

interface ProductReviewProps {
  params: {
    productId: string
    reviewId: string
  };
}

const ProductReview: React.FC<ProductReviewProps> = async ({ params} : ProductReviewProps) => {
  const { productId, reviewId } = await params
  if(parseInt(reviewId) >= 1000 ) notFound()
  return (
    <h1>Details for the product {productId} with the review {reviewId}</h1>
  )
}

export default ProductReview;
