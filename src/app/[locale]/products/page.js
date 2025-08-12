import React from "react";
import ProductsList from "./_components/ProductsList";
export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    title: locale === "ar" ? "منتجات" : "Products",
  };
}
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
