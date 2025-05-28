import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";

export const metadata = {
  title: "Rosewood Kitchenware",
  description: "hello rose wood",
};
export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <FeatureSection />
    </div>
  );
}
