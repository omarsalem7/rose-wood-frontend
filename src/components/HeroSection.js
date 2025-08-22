import Image from "next/image";

const HeroSection = ({ title, subTitle, imageUrl, mobileImg }) => {
  return (
    <div className="relative h-[calc(100vh-78px)] bg-gray-100 font-alexandria overflow-hidden">
      {/* Mobile Background Image */}
      <div className="md:hidden absolute inset-0">
        <Image
          src={mobileImg || "/assets/hero-bg.png"}
          alt="Hero background mobile"
          fill
          priority
          quality={85}
          sizes="(max-width: 768px) 100vw"
          className="object-cover"
          style={{ objectPosition: "center" }}
        />
      </div>

      {/* Desktop Background Image */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src={imageUrl || "/assets/hero-bg.png"}
          alt="Hero background desktop"
          fill
          priority
          quality={85}
          sizes="(min-width: 768px) 100vw"
          className="object-cover"
          style={{ objectPosition: "center" }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[70vh] px-6">
        <div className="text-center max-w-6xl">
          <h1
            className="text-[32px] leading-[45px] md:text-[48px] font-medium mb-6 md:!leading-[100%] text-black"
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            {title || "جودة طبيعية... لأدوات مطبخ صحية"}
          </h1>
          <p
            className="text-[14px] md:text-[24px] mb-8 md:!leading-[40px] text-[#586675] max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="600"
          >
            {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
