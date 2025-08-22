import Link from "next/link";
import en from "@/../public/locales/en/en.json";
import ar from "@/../public/locales/ar/ar.json";
const MakeOrder = ({ locale }) => {
  const t = locale === "ar" ? ar : en;
  return (
    <>
      <div className="bg-[#FFF8F6]">
        <div className="py-8 max-w-7xl mx-auto px-6 2xl:px-0 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div className="">
            <span className="text-sm font-bold text-[#5F361F]">
              {t.didYouLikeProduct}
            </span>
            <p className="text-[#586675] text-lg">{t.useDriedNaturalWood}</p>
          </div>
          <div className="flex gap-3 md:gap-6">
            <Link
              href={`/${locale}/order/request-sample`}
              className="w-full border border-[#5F361F] text-[#5F361F] transition-all duration-300 hover:bg-[#fbefe89a] rounded-lg text-center py-2"
            >
              {t.sampleRequest}
            </Link>
            <Link
              href={`/${locale}/order/price-quote`}
              className="w-full  text-white bg-[#5F361F] hover:bg-[#5F361F]/95 transition-all duration-300 rounded-lg text-center py-2"
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
