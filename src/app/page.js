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
import { fetchHeroData } from "@/lib/api";

export async function generateMetadata() {
  const hero = await fetchHeroData();
  return {
    title: hero.title || "Rosewood Kitchenware",
    description: hero.subTitle,
    openGraph: {
      title: hero.title,
      description: hero.subTitle,
      images: hero.imageUrl ? [hero.imageUrl] : [],
    },
  };
}

export default async function Home() {
  const hero = await fetchHeroData();
  return (
    <div>
      <HeroSection
        title={hero.title}
        subTitle={hero.subTitle}
        imageUrl={hero.imageUrl}
      />
      <AboutSection />
      <FeatureSection />
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
