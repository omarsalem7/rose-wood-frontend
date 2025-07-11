import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import WhyChooseRosewoodSection from "@/components/WhyChooseRosewoodSection";
import ProductCarouselSection from "@/components/ProductCarouselSection";
import VideoSection from "@/components/VideoSection";
import ArticlesSection from "@/components/ArticlesSection";
import ContactSection from "@/components/ContactSection";
import BulkOrderSection from "@/components/BulkOrderSection";
import ProductsSection from "@/components/ProductsSection";
import { fetchAllHomePageData } from "@/lib/cms/api";
import { generateMetadata } from "@/lib/metadata";

export { generateMetadata };

export default async function Home() {
  const { hero, about, features } = await fetchAllHomePageData();
  // const heroy = await fetchHeroData();
  // const { title, description, images, list, buttons } =
  //   await fetchAboutSection();
  // const featureSection = await fetchFeatureSection();
  return (
    <div>
      <HeroSection {...hero} />
      <AboutSection {...about} />
      <FeatureSection {...features} />
      <ProductsSection />
      <BulkOrderSection />
      <ProductCarouselSection />
      <VideoSection />
      <WhyChooseRosewoodSection />
      <ArticlesSection />
      <ContactSection />
      {/* <KitchenHeroSection /> */}
    </div>
  );
}
