import Image from "next/image";

const FeaturesSection = () => {
  const features = [
    {
      icon: "/icons/feature-icon.svg",
      title: "أسعار جملة منافسة",
      bgColor: "bg-amber-50",
    },
    {
      icon: "/icons/feature-icon.svg",
      title: "تشطيب صحي وآمن للطعام",
      bgColor: "bg-amber-50",
    },
    {
      icon: "/icons/feature-icon.svg",
      title: "خشب طبيعي مجفف",
      bgColor: "bg-amber-50",
    },
    {
      icon: "/icons/feature-icon.svg",
      title: "استجابة سريعة خلال 24 ساعة",
      bgColor: "bg-amber-50",
    },
    {
      icon: "/icons/feature-icon.svg",
      title: "تصنيع وتغليف حسب الطلب",
      bgColor: "bg-amber-50",
    },
    {
      icon: "/icons/feature-icon.svg",
      title: "تصدير دولي بمعايير عالمية",
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white font-alexandria">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl  font-semibold text-black mb-4">
            مزايا روز وود التنافسية
          </h3>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center bg-[#FFF8F6] py-8 px-4 rounded-lg  transition-transform transform hover:scale-105"
            >
              {/* Icon Circle */}
              <div
                style={{
                  background:
                    "radial-gradient(50% 50% at 50% 50%, rgb(112 85 48 / 0%) 0%, #f5e9d8 100%)",
                }}
                className={`w-25 h-25 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm`}
              >
                <div
                  style={{
                    background:
                      "radial-gradient(50% 50% at 50% 50%, rgba(203, 151, 79, 0) 0%, #f1e0ca 100%)",
                  }}
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-sm"
                >
                  <Image
                    width={32}
                    height={32}
                    src={feature.icon}
                    alt={feature.title}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
