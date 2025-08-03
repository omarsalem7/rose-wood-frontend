import { Button } from "@/components/ui/button";
import React from "react";
import en from "@/../public/locales/en/en.json";
import ar from "@/../public/locales/ar/ar.json";
import Link from "next/link";
const MakeOrder = ({ locale }) => {
  const t = locale === "ar" ? ar : en;
  return (
    <>
      <div className="bg-[#FFF8F6]">
        <div className="py-16 max-w-7xl mx-auto px-6 2xl:px-0 flex flex-col gap-5 md:flex-row items-center justify-between">
          <div className="">
            <span className="text-sm font-bold text-[#5F361F]">
              {t.didYouLikeProduct}
            </span>
            <p className="text-[#586675] text-lg">{t.useDriedNaturalWood}</p>
          </div>
          <div className="flex gap-6">
            <Link
              href={`/${locale}/order/request-sample`}
              className="w-[150px] md:w-[294px] border border-[#5F361F] text-[#5F361F] rounded-lg text-center py-2"
            >
              {t.sampleRequest}
            </Link>
            <Link
              href={`/${locale}/order/price-quote`}
              className="w-[150px] md:w-[294px] text-white bg-[#5F361F] rounded-lg text-center py-2"
            >
              {t.requestSpecialQuote}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeOrder;
