import Image from "next/image";

const HeroSection = ({ title, subTitle, imageUrl }) => {
  return (
    <div className="relative h-[calc(100vh-102px)] bg-gray-100 font-alexandria">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageUrl || "/assets/hero-bg.png"})`,
        }}
      />

      {/* Hero Content - Updated text color to black */}
      <div className="relative z-10 flex items-center justify-center min-h-[70vh] px-6">
        <div className="text-center max-w-6xl">
          <h1 className="text-3xl md:text-6xl font-semibold md:font-bold mb-6 leading-tight text-black">
            {title || "جودة طبيعية... لأدوات مطبخ صحية"}
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-black max-w-3xl mx-auto leading-relaxed">
            {subTitle || (
              <>
                مرحباً بكم في <span className="font-bold">روز وود</span> حيث
                نعيد تعريف أدوات المطبخ من خلال منتجات خشبية طبيعية وصحية، تجمع
                بين الجودة العالية والتصميم العصر
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
