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
import AOSWrapper from "@/components/AOSWrapper";
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
    <AOSWrapper>
      <div>
        <div data-aos="fade-down" data-aos-duration="600">
          <HeroSection {...hero} />
        </div>

        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
          <AboutSection {...about} locale={locale} />
        </div>

        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
          <FeatureSection {...features} />
        </div>

        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
          <ProductsSection products={products} locale={locale} />
        </div>

        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
          <BulkOrderSection {...bulkOrder} />
        </div>

        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
          <ProductCarouselSection
            title={title}
            categories={categories}
            locale={locale}
          />
        </div>

        <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="200">
          <VideoSection videoData={videoSection} />
        </div>

        <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="200">
          <WhyChooseRosewoodSection />
        </div>

        <div data-aos="fade-up" data-aos-duration="600">
          <ArticlesSection blogs={blogs} title={blogsTitle} locale={locale} />
        </div>

        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
          <ContactSection locale={locale} />
        </div>
      </div>
    </AOSWrapper>
  );
}
