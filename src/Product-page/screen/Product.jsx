import React from "react";
import ProductDtl from "../product-dtl/product-dtl";
import { useParams } from "react-router-dom";
import CustomerReviews from "../customer-reviews/customer-reviews";

export default function Product() {
  const { id } = useParams();

  return (
    <div>
      <ProductDtl productId={id} />
      <CustomerReviews productId={id} />
    </div>
  );
}