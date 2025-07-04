import Image from "next/image";
const Hero = () => {
  return (
    <div className=" bg-gray-50">
      {/* Header Section with Manufacturing Facility */}
      <section className="relative bg-white py-16">
        <div className="container mx-auto px-6">
          {/* Title and Description */}
          <div className="flex flex-col items-center justify-center mb-12">
            <h1 className="text-3xl leading-16 text-center font-semibold max-w-4xl text-gray-900 mb-6">
              روز وود هو مصنع مصري متخصص في صناعة 🏭 أدوات المطبخ 🍴 الخشبية
              الصحية والآمنة.
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              نستخدم أخشاب طبيعية مجففة، ونشطها بزيوت ونموذج آمنة للطعام، مع
              خطوط إنتاج حديثة وتصاميم تجمع بين الأناقة والوظيفة.
            </p>
          </div>

          <div className="rounded-2xl ">
            <Image
              width={1200}
              height={600}
              src="/assets/about-hero.png"
              alt="مصنع روز وود - خط الإنتاج الأول"
              className="w-full  object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
