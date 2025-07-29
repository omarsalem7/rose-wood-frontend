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
import HomeWithAnimations from "./_components/HomeWithAnimations";
import { fetchAllHomePageData } from "@/lib/api/cms";
import {
  fetchBlogsHomePage,
  fetchProductsBHomePage,
} from "@/lib/api/collections";
import { generateMetadata } from "@/lib/metadata";
import { fetchVisualFeedingsHomePage } from "@/lib/api/categories";

export { generateMetadata };

export default async function Home({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const { hero, about, features, bulkOrder, title, videoSection, blogsTitle } =
    await fetchAllHomePageData();
  const products = await fetchProductsBHomePage();
  const categories = await fetchVisualFeedingsHomePage();
  const blogs = await fetchBlogsHomePage();

  return (
    <HomeWithAnimations>
      <HeroSection {...hero} />
      <AboutSection {...about} locale={locale} />
      <FeatureSection {...features} />
      <ProductsSection products={products} locale={locale} />
      <BulkOrderSection {...bulkOrder} locale={locale} />
      <ProductCarouselSection
        title={title}
        categories={categories}
        locale={locale}
      />
      <VideoSection videoData={videoSection} />
      <WhyChooseRosewoodSection />
      <ArticlesSection blogs={blogs} title={blogsTitle} locale={locale} />
      <ContactSection locale={locale} />
    </HomeWithAnimations>
  );
}
