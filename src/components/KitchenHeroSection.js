import { Button } from "@/components/ui/button";
import Image from "next/image";

const KitchenHeroSection = () => {
  return (
    <section
      className="relative min-h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(/lovable-uploads/cdead82f-785e-45b4-9366-a2dc6818c380.png)",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-[#0a0a0ab5]"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <div className="mb-4">
            <Image
              src="/lovable-uploads/2c379c90-3310-45a8-966a-20888683a80a.png"
              alt="Rosewood Kitchen Collections Logo"
              className="mx-auto"
              width={200}
              height={100}
            />
          </div>
        </div>

        {/* Main Arabic Text */}
        <h1 className="text-2xl md:text-4xl md:font-semibold mb-12 leading-9 md:leading-tight">
          اشترِ طبيك الدن معنا واطلب كميتك
        </h1>

        {/* Call to Action Button */}
        <Button
          className="bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white px-12 py-6 text-base font-medium border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          style={{ borderRadius: "12px" }}
        >
          عرض سعر مخصص
        </Button>
      </div>
    </section>
  );
};

export default KitchenHeroSection;
