import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import WhyChooseRosewoodSection from "@/components/WhyChooseRosewoodSection";
import ProductCarouselSection from "@/components/ProductCarouselSection";
import VideoSection from "@/components/VideoSection";
import ArticlesSection from "@/components/ArticlesSection";
import { Contact } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
      <WhyChooseRosewoodSection />
      <ProductCarouselSection />
      <VideoSection />
      <ArticlesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
