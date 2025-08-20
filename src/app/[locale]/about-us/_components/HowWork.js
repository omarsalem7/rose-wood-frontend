import Image from "next/image";
import StyledText from "@/components/ui/styledText";

import { fetchHowWorkSection } from "@/lib/api/cms";
import Link from "next/link";

const HowWork = async ({ isButtonshow, locale }) => {
  const { title, subTitle, images, buttons, list } =
    await fetchHowWorkSection();

  return (
    <section className="py-16 max-w-7xl mx-auto px-6 2xl:px-0">
      <div className="">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-3xl  font-semibold text-gray-900 mb-4"
          >
            {title || "كيف نعمل"}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            className="text-lg text-gray-600"
          >
            {subTitle || "نتبع كل خطوة من خطوات الإنتاج"}
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 conatin">
        <div>
          {/* Features List */}
          <div className="space-y-8 mb-8 text-xl">
            {list.map((feature, idx) => (
              <div
                key={feature.id || idx}
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay={idx * 100}
                className="flex items-center gap-3 text-gray-700"
              >
                <div className="bg-[#E5FFE9] rounded-full p-1">
                  <Image
                    width={16}
                    height={16}
                    src="/icons/check.svg"
                    alt="check icon"
                    className="text-white"
                  />
                </div>
                <span>
                  <StyledText text={feature.text} />
                </span>
              </div>
            ))}
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
            className="flex gap-4 mt-8"
          >
            {isButtonshow && buttons && buttons.length > 0 ? (
              buttons.map((btn, idx) => (
                <Link
                  key={btn.id || idx}
                  href={
                    idx === 0
                      ? `/${locale}/products`
                      : `/${locale}/order/request-sample`
                  }
                  className={
                    idx === 0
                      ? "bg-[#5F361F] text-white max-sm:w-full px-2 md:px-8 py-3 rounded-lg text-sm font-medium hover:bg-amber-900 transition-colors duration-200"
                      : "border border-gray-300 text-gray-700 max-sm:w-full px-2 md:px-12 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
                  }
                >
                  {btn.text}
                </Link>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="300"
          className="grid grid-cols-5 gap-4"
        >
          <Image
            src={images && images[0] ? images[0].img : "/assets/spoons.png"}
            alt="product-meta2"
            width={294}
            height={120}
            className="col-span-2 h-full"
          />
          <Image
            src={images && images[0] ? images[1].img : "/product-meta1.png"}
            alt="product-meta1"
            width={400}
            className=" col-span-3 h-full"
            height={120}
          />
        </div>
      </div>
    </section>
  );
};

export default HowWork;
