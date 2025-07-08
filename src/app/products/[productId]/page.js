import React from "react";
import ProductDetails from "./_components/ProductDetails";
import ProductMeta from "./_components/ProductMeta";
import OtherCategory from "./_components/OtherCategory";
import RelatedProducts from "./_components/RelatedProducts";
import MakeOrder from "./_components/MakeOrder";

const Product = () => {
  return (
  <>
    <ProductDetails />
    <MakeOrder />
    <ProductMeta />
    <OtherCategory />
    <RelatedProducts />
  </>
  );
};

export default Product;
