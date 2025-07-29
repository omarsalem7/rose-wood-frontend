"use client";
import AOSWrapper from "@/components/AOSWrapper";

const AboutWithAnimations = ({ children }) => {
  return (
    <AOSWrapper>
      <div>
        <div data-aos="fade-down" data-aos-duration="600">
          {children[0]} {/* Hero */}
        </div>

        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
          {children[1]} {/* HowWork */}
        </div>

        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
          {children[2]} {/* OurMessage */}
        </div>

        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
          {children[3]} {/* Vision */}
        </div>

        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
          {children[4]} {/* SectorSection */}
        </div>

        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
          {children[5]} {/* WhyChooseRosewoodSection */}
        </div>
      </div>
    </AOSWrapper>
  );
};

export default AboutWithAnimations;
