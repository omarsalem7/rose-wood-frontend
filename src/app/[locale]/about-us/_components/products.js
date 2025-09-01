import { getCategoriesInAboutPage } from "@/lib/api/categories";
import Image from "next/image";
import en from "@/../public/locales/en/en.json";
import ar from "@/../public/locales/ar/ar.json";
import Link from "next/link";

const ProductsAbout = async ({ locale }) => {
  const t = locale === "ar" ? ar : en;
  const categories = await getCategoriesInAboutPage();
  return (
    <div className="max-w-7xl mx-auto px-6 2xl:px-0 text-center py-4 md:py-8">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-[18px] md:text-[24px] font-medium text-gray-900 mb-4">
          {t.productsAbout}
        </h2>
        <p className="text-lg text-gray-600">
          {t.productsAboutSubtitle || "نقدم أكثر من 120 منتج تشمل"}
        </p>
      </div>

      {/* Product Cards Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12">
        {categories.map((category) => (
          <Link
            href={`/${locale}/products?categoryId=${category.id}`}
            key={category.id}
            className="flex py-4 flex-col items-center border border-[#E5E5E5] rounded-lg"
          >
            <div className="w-28 h-28 mb-4 flex items-center justify-center">
              <Image
                src={category.mainImageUrl}
                alt={category.name}
                width={96}
                height={96}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="text-[12px] md:text-[18px] font-medium text-gray-900">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>

      {/* Footer Text Section */}
      <div className="text-center">
        <p className="text-base text-gray-700 mb-3 leading-relaxed">
          {t.productsAboutDescription ||
            "كل منتج متاح بمقاسات وأشكال مختلفة، ويمكن تخصيصه حسب الحاجة (مقاس - لون - شعار - تغليف)."}
        </p>
        <p className="text-base font-medium text-primary-900 hover:text-primary-800">
          {t.productsAboutCTA || "تجهيزات خشبية حسب الطلب"}
        </p>
      </div>
    </div>
  );
};

export default ProductsAbout;
