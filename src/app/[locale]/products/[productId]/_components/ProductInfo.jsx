"use client";
import Image from "next/image";
import en from "@/../public/locales/en/en.json";
import ar from "@/../public/locales/ar/ar.json";

const ProductInfo = ({ locale }) => {
  const t = locale === "ar" ? ar : en;
  return (
    <section className="py-16 container mx-auto px-6">
      <div className="">
        <div className="text-center mb-2">
          <h2 className="text-2xl font-semibold mb-1">{t.productDetails}</h2>
          {/* <div className="text-[#7B8B8E] text-base">{product.subtitle}</div> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 items-center">
          {/* Left: Product Image */}
          <div className="w-full flex items-center justify-center">
            <div className="w-full ">
              <Image
                src="/assets/blog-details-hero(1).png"
                alt="product-image"
                width={1000}
                height={600}
                className="w-full  object-contain rounded-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          {/* Right: Product Details */}
          <div className="w-full">
            <ul className="space-y-4">
              <li className="grid grid-cols-2 gap-2 pb-2 items-center">
                <div className="flex items-center gap-2">
                  <Image src="/icons/box.svg" alt="" width={22} height={22} />
                  <span className="text-[#7B8B8E] text-base">
                    {t.quantityPerCarton}
                  </span>
                </div>
                <span className="font-semibold text-[#223132] text-base text-left md:text-right">
                  12 قطعة
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
                  بلاستيكي (Blister)
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
                  كرتون رئيسي (Master Carton)
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
                  41 × 25 × 41 سم
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
                  0.550 كجم
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
                  1.200 كجم
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
                  7.80 كجم
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
                  0.0420 م³
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
