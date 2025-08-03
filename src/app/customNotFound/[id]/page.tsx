import React from "react";
import {notFound} from "next/navigation";

interface CustomPageProps {
  params: { id: string };
}

const CustomPage: React.FC<CustomPageProps> = async ({ params} : CustomPageProps) => {
  const { id } = await params
  if(parseInt(id) >= 100) notFound()
  return (
    <h1>Custom page with id {id}</h1>
  )
}

export default CustomPage;
