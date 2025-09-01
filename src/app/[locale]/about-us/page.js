import Hero from "./_components/hero";
import HowWork from "./_components/HowWork";
import OurMessage from "./_components/ourMessage";
import Vision from "./_components/vision";
import SectorSection from "./_components/sectorSection";
import WhyChooseRosewoodSection from "@/components/WhyChooseRosewoodSection";
import AboutWithAnimations from "./_components/AboutWithAnimations";
import { fetchAllAboutPageData } from "@/lib/api/cms";
import ProductsAbout from "./_components/products";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    title: locale === "ar" ? "تواصل معنا" : "Contact Us",
    description: "Get in touch with Rose Wood for inquiries and support",
  };
}
export default async function About({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const data = await fetchAllAboutPageData();

  return (
    <div className="h-full w-full overflow-hidden ">
      <AboutWithAnimations>
        <Hero {...data.hero} />
        <HowWork isButtonshow={true} locale={locale} />
        <OurMessage {...data.ourMessage} />
        <div className="max-sm:mx-5">
          <Vision {...data.ourVision} />
        </div>

        <ProductsAbout locale={locale} />
        <SectorSection {...data.sectorSection} locale={locale} />
        <WhyChooseRosewoodSection title="لماذا تختار روز وود" />
      </AboutWithAnimations>
    </div>
  );
}
