"use client";
import AOSWrapper from "@/components/AOSWrapper";

const HomeWithAnimations = ({ children }) => {
  return (
    <AOSWrapper>
      <div>
        <div data-aos="fade-down" data-aos-duration="600">
          {children[0]} {/* HeroSection */}
        </div>

        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
          {children[1]} {/* AboutSection */}
        </div>

        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
          {children[2]} {/* FeatureSection */}
        </div>

        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
          {children[3]} {/* ProductsSection */}
        </div>

        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
          {children[4]} {/* BulkOrderSection */}
        </div>

        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
          {children[5]} {/* ProductCarouselSection */}
        </div>

        <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="200">
          {children[6]} {/* VideoSection */}
        </div>

        <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="200">
          {children[7]} {/* WhyChooseRosewoodSection */}
        </div>

        <div data-aos="fade-up" data-aos-duration="600">
          {children[8]} {/* ArticlesSection */}
        </div>

        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
          {children[9]} {/* ContactSection */}
        </div>
      </div>
    </AOSWrapper>
  );
};

export default HomeWithAnimations;
