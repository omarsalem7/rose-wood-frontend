import Image from "next/image";
import StyledText from "@/components/ui/styledText";
const HowWork = () => {
  const features = [
    {
      id: 1,
      value: "اختيار الخشب: نستخدم خشب طبيعي عالي الجودة",
    },
    {
      id: 2,
      value: "التشطيب: باستخدام زيوت طبيعية وشمع آمن للطعام",
    },
    {
      id: 3,
      value: "تخصيص المقاسات: الألوان، النقائش والشعارات حسب الطلب",
    },
    {
      id: 4,
      value: "تخصيص المقاسات: الألوان، النقائش والشعارات حسب الطلب",
    },
  ];
  return (
    <section className="py-16 container mx-auto px-6">
      <div className="">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl  font-semibold text-gray-900 mb-4">
            كيف نعمل
          </h2>
          <p className="text-lg text-gray-600">نتبع كل خطوة من خطوات الإنتاج</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 conatin">
        <div className="">
          {" "}
          {/* Features List */}
          <div className="space-y-8 mb-8 text-xl">
            {features.map((feature) => (
              <div
                key={feature.id}
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
                  <StyledText text={feature.value} />
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-8 ">
            <button className="bg-[#5F361F] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-amber-900 transition-colors duration-200">
              عرض كل المنتجات
            </button>
            <button className="border border-gray-300 text-gray-700 px-12 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200">
              اطلب عينة
            </button>
          </div>
        </div>
        <div className="flex gap-8">
          <Image
            src="/assets/spoons.png"
            width={300}
            height={150}
            alt="spoons"
          />
          <Image
            src="/assets/kitchen.png"
            width={500}
            height={150}
            alt="kitchen"
          />
        </div>
      </div>
    </section>
  );
};

export default HowWork;
