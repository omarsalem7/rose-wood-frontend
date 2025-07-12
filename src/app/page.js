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
import {
  fetchBlogs,
  fetchCategories,
  fetchProductsBHomePage,
} from "@/lib/collections";
import { generateMetadata } from "@/lib/metadata";

export { generateMetadata };

export default async function Home() {
  const {
    hero,
    about,
    features,
    bulkOrder,
    title,
    videoSection,
    whyChooseTitle,
  } = await fetchAllHomePageData();
  const products = await fetchProductsBHomePage();
  const categories = await fetchCategories();
  const blogs = await fetchBlogs();

  return (
    <div>
      <HeroSection {...hero} />
      <AboutSection {...about} />
      <FeatureSection {...features} />
      <ProductsSection products={products} myCategories={categories} />
      <BulkOrderSection {...bulkOrder} />
      <ProductCarouselSection title={title} products={products} />
      <VideoSection videoData={videoSection} />
      <WhyChooseRosewoodSection title={whyChooseTitle} />
      <ArticlesSection blogs={blogs} />
      <ContactSection />
      {/* <KitchenHeroSection /> */}
    </div>
  );
}
