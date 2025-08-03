import React from "react";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: { someId: string };
}

const PageDetails: React.FC<ProductPageProps> = async ({ params} : ProductPageProps) => {
  const { someId } = await params
  if(parseInt(someId) >= 1000) notFound()
  return (
    <h1>Page with ID {someId}</h1>
  )
}

export default PageDetails;
