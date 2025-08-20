const HeroSection = ({ title, subTitle, imageUrl, mobileImg }) => {
  return (
    <div className="relative h-[calc(100vh-78px)] bg-gray-100 font-alexandria">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${mobileImg})`,
        }}
      />

      {/* Desktop Background Image - Hidden on mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      {/* Hero Content - Updated text color to black */}
      <div className="relative z-10 flex items-center justify-center min-h-[70vh] px-6">
        <div className="text-center max-w-6xl">
          <h1
            className="text-3xl md:text-6xl font-semibold md:font-bold mb-6 leading-tight text-black"
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            {title || "جودة طبيعية... لأدوات مطبخ صحية"}
          </h1>
          <p
            className="text-lg md:text-2xl mb-8 text-[#586675] max-w-3xl mx-auto leading-relaxed"
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
