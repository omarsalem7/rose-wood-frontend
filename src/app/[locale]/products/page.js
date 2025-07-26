import React from "react";
import ProductsList from "./_components/ProductsList";

const Products = ({ params }) => {
  const { locale } = params;
  return (
    <>
      <ProductsList locale={locale} />
    </>
  );
};

export default Products;
