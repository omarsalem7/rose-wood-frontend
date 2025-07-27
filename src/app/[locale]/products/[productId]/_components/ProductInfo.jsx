"use client";
import Image from "next/image";
import en from "@/../public/locales/en/en.json";
import ar from "@/../public/locales/ar/ar.json";

const ProductInfo = ({ locale, product }) => {
  const t = locale === "ar" ? ar : en;
  return (
    <section className="py-16 max-w-7xl mx-auto px-6 2xl:px-0">
      <div className="">
        <div className="text-center mb-2">
          <h2 className="text-2xl font-semibold mb-1">{t.productDetails}</h2>
          {/* <div className="text-[#7B8B8E] text-base">{product.subtitle}</div> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 items-center">
          {/* Right: Product Details */}
          <div className="w-full ">
            <ul className="space-y-4">
              <li className="grid grid-cols-2 gap-2 pb-2 items-center">
                <div className="flex items-center gap-2">
                  <Image src="/icons/box.svg" alt="" width={22} height={22} />
                  <span className="text-[#7B8B8E] text-base">
                    {t.quantityPerCarton}
                  </span>
                </div>
                <span className="font-semibold text-[#223132] text-base text-left md:text-right">
                  {product.quantityPerCarton}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-2 pb-2 items-center">
                <div className="flex items-center gap-2">
                  <Image src="/icons/unit.svg" alt="" width={22} height={22} />
                  <span className="text-[#7B8B8E] text-base">
                    {t.packagingPerUnit}
                  </span>
                </div>
                <span className="font-semibold text-[#223132] text-base text-left md:text-right">
                  {product.packagingPerUnit}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-2 pb-2 items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/master-carton.svg"
                    alt=""
                    width={22}
                    height={22}
                  />
                  <span className="text-[#7B8B8E] text-base">
                    {t.outerPackaging}
                  </span>
                </div>
                <span className="font-semibold text-[#223132] text-base text-left md:text-right">
                  {product.outerPackaging}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-2 pb-2 items-center">
                <div className="flex items-center gap-2">
                  <Image src="/icons/size.svg" alt="" width={22} height={22} />
                  <span className="text-[#7B8B8E] text-base">
                    {t.cartonDimensions}
                  </span>
                </div>
                <span className="font-semibold text-[#223132] text-base text-left md:text-right">
                  {product.cartonDimensions}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-2 pb-2 items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/weight.svg"
                    alt=""
                    width={22}
                    height={22}
                  />
                  <span className="text-[#7B8B8E] text-base">
                    {t.netWeight}
                  </span>
                </div>
                <span className="font-semibold text-[#223132] text-base text-left md:text-right">
                  {product.netProductWeight}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-2 pb-2 items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/package-weight.svg"
                    alt=""
                    width={22}
                    height={22}
                  />
                  <span className="text-[#7B8B8E] text-base">
                    {t.cartonNetWeight}
                  </span>
                </div>
                <span className="font-semibold text-[#223132] text-base text-left md:text-right">
                  {product.netCartonWeight}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-2 pb-2 items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/package-weight-total.svg"
                    alt=""
                    width={22}
                    height={22}
                  />
                  <span className="text-[#7B8B8E] text-base">
                    {t.cartonTotalWeight}
                  </span>
                </div>
                <span className="font-semibold text-[#223132] text-base text-left md:text-right">
                  {product.totalCartonWeight}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-2 pb-2 items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/volume.svg"
                    alt=""
                    width={22}
                    height={22}
                  />
                  <span className="text-[#7B8B8E] text-base">
                    {t.cartonVolume}
                  </span>
                </div>
                <span className="font-semibold text-[#223132] text-base text-left md:text-right">
                  {product.cartonVolume}
                </span>
              </li>
            </ul>
          </div>
          {/* Left: Product Image */}
          <div className="w-full flex items-center justify-center ">
            <div className="w-full ">
              <Image
                src={
                  product.productDetailsImage ||
                  "/assets/blog-details-hero(1).png"
                }
                alt="product-image"
                width={1000}
                height={600}
                className="w-full  object-contain rounded-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
