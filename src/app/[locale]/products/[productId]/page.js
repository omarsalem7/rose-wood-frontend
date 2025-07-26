import ProductDetails from "./_components/ProductDetails";
import OtherCategory from "./_components/OtherCategory";
import RelatedProducts from "./_components/RelatedProducts";
import MakeOrder from "./_components/MakeOrder";
import ProductInfo from "./_components/ProductInfo";
import HowWork from "../../about-us/_components/HowWork";
import { getProductById } from "@/lib/api/products";

const Product = async ({ params }) => {
  const resolvedParams = await params;
  const { locale, productId } = resolvedParams;
  const product = await getProductById(productId);
  return (
    <>
      <ProductDetails locale={locale} product={product} />
      <MakeOrder locale={locale} />
      <ProductInfo locale={locale} product={product} />
      <HowWork isButtonshow={false} />
      <OtherCategory currentCategoryId={product.category.id} locale={locale} />
      {product?.category?.documentId && (
        <RelatedProducts
          productId={productId}
          categoryId={product?.category?.documentId}
        />
      )}
    </>
  );
};

export default Product;
