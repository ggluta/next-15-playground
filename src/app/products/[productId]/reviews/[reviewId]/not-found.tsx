'use client'

import React from "react";
import {usePathname} from "next/navigation";

const CustomNotFoundPage: React.FC =  ( ) => {
  const pathname = usePathname();
  const productId = pathname.split("/")[2]
  const reviewId = pathname.split("/")[4]
  return (
    <h1>Review with id {reviewId} cannot be found for product with id {productId}</h1>
  )
}

export default CustomNotFoundPage;
