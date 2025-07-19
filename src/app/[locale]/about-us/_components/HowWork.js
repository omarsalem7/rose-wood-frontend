import Image from "next/image";
import StyledText from "@/components/ui/styledText";
const HowWork = ({ title, subTitle, list, images, buttons }) => {
  return (
    <section className="py-16 container mx-auto px-6">
      <div className="">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl  font-semibold text-gray-900 mb-4">
            {title || "كيف نعمل"}
          </h2>
          <p className="text-lg text-gray-600">
            {subTitle || "نتبع كل خطوة من خطوات الإنتاج"}
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 conatin">
        <div className="">
          {/* Features List */}
          <div className="space-y-8 mb-8 text-xl">
            {list.map((feature, idx) => (
              <div
                key={feature.id || idx}
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
          <div className="flex gap-4 mt-8">
            {buttons && buttons.length > 0 ? (
              buttons.map((btn, idx) => (
                <button
                  key={btn.id || idx}
                  className={
                    idx === 0
                      ? "bg-[#5F361F] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-amber-900 transition-colors duration-200"
                      : "border border-gray-300 text-gray-700 px-12 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
                  }
                >
                  {btn.text}
                </button>
              ))
            ) : (
              <>
                <button className="bg-[#5F361F] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-amber-900 transition-colors duration-200">
                  عرض كل المنتجات
                </button>
                <button className="border border-gray-300 text-gray-700 px-12 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200">
                  اطلب عينة
                </button>
              </>
            )}
          </div>
        </div>
        <div className="grid grid-cols-5 gap-8 max-sm:order-first">
          <Image
            src={images && images[0] ? images[0].img : "/assets/spoons.png"}
            width={200}
            height={200}
            alt="spoons"
            className="col-span-3 w-full h-full"
          />
          <Image
            src={images && images[1] ? images[1].img : "/assets/kitchen.png"}
            width={150}
            height={150}
            alt="kitchen"
            className="col-span-2 w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HowWork;
