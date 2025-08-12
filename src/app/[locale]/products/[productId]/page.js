import ProductDetails from "./_components/ProductDetails";
import OtherCategory from "./_components/OtherCategory";
import RelatedProducts from "./_components/RelatedProducts";
import MakeOrder from "./_components/MakeOrder";
import ProductInfo from "./_components/ProductInfo";
import HowWork from "../../about-us/_components/HowWork";
import { getProductById, getProductMetadata } from "@/lib/api/products";

export async function generateMetadata({ params }) {
  const { productId } = await params;
  const { name, description, mainImageUrl } = await getProductMetadata(
    productId
  );

  return {
    title: name,
    description: description,
    openGraph: {
      title: name,
      description: description,
      type: "website",
      images: [
        {
          url: mainImageUrl,
          width: 1200,
          height: 630,
          alt: name,
        },
      ],
    },
    twitter: {
      title: name,
      description: description,
      card: "summary_large_image",
      images: [mainImageUrl],
    },
  };
}

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

      <OtherCategory
        currentCategoryId={product?.category?.id}
        locale={locale}
      />

      {product?.category?.documentId && (
        <RelatedProducts
          productId={productId}
          locale={locale}
          categoryId={product?.category?.documentId}
        />
      )}
    </>
  );
};

export default Product;
