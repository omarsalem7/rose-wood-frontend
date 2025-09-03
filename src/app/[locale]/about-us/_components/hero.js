import Image from "next/image";
const Hero = ({ title, description, imageUrl }) => {
  return (
    <div className=" bg-gray-50">
      {/* Header Section with Manufacturing Facility */}
      <section className="relative bg-white py-14">
        <div className="max-w-7xl mx-auto px-6 2xl:px-0">
          {/* Title and Description */}
          <div className="flex flex-col items-center justify-center mb-12 max-w-4xl mx-auto">
            <h1
              data-aos="fade-down"
              data-aos-duration="800"
              className="text-[20px] md:text-[40px] leading-[45px] md:leading-[75px] text-center font-semibold text-gray-900 mb-4"
            >
              {title ||
                "روز وود هو مصنع مصري متخصص في صناعة 🏭 أدوات المطبخ 🍴 الخشبية الصحية والآمنة."}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="text-lg text-gray-600 text-center  leading-relaxed"
            >
              {description ||
                "نستخدم أخشاب طبيعية مجففة، ونشطها بزيوت ونموذج آمنة للطعام، مع خطوط إنتاج حديثة وتصاميم تجمع بين الأناقة والوظيفة."}
            </p>
          </div>

          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
            <Image
              width={1200}
              height={500}
              src={imageUrl || "/assets/about-hero.png"}
              alt="مصنع روز وود - خط الإنتاج الأول"
              className="w-full h-[200px] md:h-[600px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
