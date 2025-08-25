import Image from "next/image";

const FeaturesSection = ({ cards, title }) => {
  return (
    <section className="py-16 px-6 bg-white font-alexandria">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-4 md:mb-8"
          data-aos="fade-down"
          data-aos-duration="600"
        >
          <h3 className="text-[18px] md:text-[32px] font-medium">{title}</h3>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {cards.map((feature, index) => (
            <div
              key={index}
              className="text-center bg-[#FFF8F6] py-8 px-4 rounded-lg  transition-transform transform hover:scale-105"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={200 + index * 100}
            >
              {/* Icon Circle */}
              <div
                style={{
                  background:
                    "radial-gradient(50% 50% at 50% 50%, rgb(112 85 48 / 0%) 0%, #f5e9d8 100%)",
                }}
                className={`w-20 h-16 md:w-24 md:h-24 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm`}
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay={400 + index * 100}
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
                    src={feature.image}
                    alt={feature.text}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-[20px] font-medium">
                {feature.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
