import Image from "next/image";

const HeroSection = ({ title, subTitle, imageUrl, mobileImg }) => {
  // Helper function to check if URL is a video
  const isVideo = (url) => {
    if (!url) return false;
    const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".avi"];
    return videoExtensions.some((ext) => url.toLowerCase().includes(ext));
  };

  // Helper function to check if URL is an image
  const isImage = (url) => {
    if (!url) return false;
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
    return imageExtensions.some((ext) => url.toLowerCase().includes(ext));
  };

  // Render media element based on file type
  const renderMedia = (src, alt, className, sizes, priority = false) => {
    if (isVideo(src)) {
      return (
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`${className} w-full h-full absolute inset-0`}
          style={{ objectPosition: "center", objectFit: "cover" }}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else if (isImage(src)) {
      return (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={85}
          sizes={sizes}
          className={className}
          style={{ objectPosition: "center" }}
        />
      );
    }
    // Fallback to image if extension is not recognized
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={85}
        sizes={sizes}
        className={className}
        style={{ objectPosition: "center" }}
      />
    );
  };

  return (
    <div className="relative h-[calc(100vh-78px)] bg-gray-100 font-alexandria overflow-hidden">
      {/* Mobile Background Media */}
      <div className="md:hidden absolute inset-0">
        {renderMedia(
          mobileImg || "/assets/hero-bg.png",
          "Hero background mobile",
          "object-cover",
          "(max-width: 768px) 100vw",
          true
        )}
      </div>

      {/* Desktop Background Media */}
      <div className="hidden md:block absolute inset-0">
        {renderMedia(
          imageUrl || "/assets/hero-bg.png",
          "Hero background desktop",
          "object-cover",
          "(min-width: 768px) 100vw",
          true
        )}
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
