import React from "react";
import ProductsList from "./_components/ProductsList";

const Products = async ({ params }) => {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  return (
    <>
      <ProductsList locale={locale} />
    </>
  );
};

export default Products;
