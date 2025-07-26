import ProductDetails from "./_components/ProductDetails";
import ProductMeta from "./_components/ProductMeta";
import OtherCategory from "./_components/OtherCategory";
import RelatedProducts from "./_components/RelatedProducts";
import MakeOrder from "./_components/MakeOrder";
import ProductInfo from "./_components/ProductInfo";
import HowWork from "../../about-us/_components/HowWork";

const Product = async ({ params }) => {
  const resolvedParams = await params;
  console.log(resolvedParams);
  const { locale } = resolvedParams;
  return (
    <>
      <ProductDetails locale={locale} />
      <MakeOrder locale={locale} />
      <ProductInfo locale={locale} />
      <HowWork isButtonshow={false} />
      <OtherCategory />
      {/* <RelatedProducts /> */}
    </>
  );
};

export default Product;
