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
import KitchenHeroSection from "@/components/KitchenHeroSection";
import BulkOrderSection from "@/components/BulkOrderSection";

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
      <BulkOrderSection />
      <ProductCarouselSection />
      <VideoSection />
      <WhyChooseRosewoodSection />
      <ArticlesSection />
      <ContactSection />
      <KitchenHeroSection />
      <Footer />
    </div>
  );
}
