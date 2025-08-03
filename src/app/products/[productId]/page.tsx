import React from "react";

interface ProductPageProps {
  params: { productId: string };
}

const ProductDetails: React.FC<ProductPageProps> = async ({ params} : ProductPageProps) => {
  const { productId } = await params
  return (
    <h1>Details for the product {productId}</h1>
  )
}

export default ProductDetails;
