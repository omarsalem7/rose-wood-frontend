"use client";
import AOSWrapper from "@/components/AOSWrapper";

const WoodStepsWithAnimations = ({ children }) => {
  return (
    <AOSWrapper>
      <div>
        <div data-aos="fade-down" data-aos-duration="600">
          {children[0]} {/* WoodHero */}
        </div>

        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
          {children[1]} {/* WoodStepsList */}
        </div>
      </div>
    </AOSWrapper>
  );
};

export default WoodStepsWithAnimations;
