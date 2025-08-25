const OurMessage = ({ title, subTitle, endDescription, cards }) => {
  const features = cards || [
    {
      title: "الجودة العالية",
      description: "",
      bgColor: "bg-orange-50",
    },
    {
      title: "السلامة الغذائية",
      description: "",
      bgColor: "bg-blue-50",
    },
    {
      title: "التصميم العصري",
      description: "",
      bgColor: "bg-green-50",
    },
    {
      title: "والأسعار التنافسية",
      description: "",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="py-14 ">
      <div className="max-w-7xl mx-auto px-6 2xl:px-0">
        <div className="text-center mb-8">
          <h2
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-[24px] font-medium text-gray-800 mb-4"
          >
            {title || "رسالتنا"}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            className="text-[18px] text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            {subTitle || "نسعى لتوفير أدوات مطبخ خشبية تجمع بين"}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-8 gap-4">
          {features.map((feature, index) => {
            return (
              <div
                key={feature.id || index}
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay={index * 150}
                className="text-center group p-4 md:p-8 rounded-2xl bg-[#FFF8F6] transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <div
                  className="mx-auto mb-4 md:w-20 md:h-20 w-14 h-14  rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "radial-gradient(50% 50% at 50% 50%, rgba(203, 151, 79, 0) 0%, #e59a334f 100%)",
                  }}
                ></div>
                <h3 className="text-[16px] md:text-xl font-medium  text-[#804524]">
                  {feature.text || feature.title}
                </h3>
              </div>
            );
          })}
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
          className="text-center mt-8"
        >
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            {endDescription ||
              "لكل من يقدر التفاصيل الدقيقة في أدواته اليومية، سواء كان مطبخ منزل أو مطعم محترف."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMessage;
