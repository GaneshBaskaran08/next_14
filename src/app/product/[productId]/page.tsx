import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    productId: string;
  };
};

//dynamic metadata
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `product ${params.productId}`,
  };
};

const ProductID = ({ params }: Props) => {
  if (parseInt(params.productId) > 100) {
    notFound();
  }
  return <div>ProductID</div>;
};

export default ProductID;
