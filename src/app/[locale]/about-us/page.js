import Hero from "./_components/hero";
import HowWork from "./_components/HowWork";
import OurMessage from "./_components/ourMessage";
import Vision from "./_components/vision";
import SectorSection from "./_components/sectorSection";
import WhyChooseRosewoodSection from "@/components/WhyChooseRosewoodSection";
import AboutWithAnimations from "./_components/AboutWithAnimations";
import { fetchAllAboutPageData } from "@/lib/api/cms";

export default async function About({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const data = await fetchAllAboutPageData();

  return (
    <AboutWithAnimations>
      <Hero {...data.hero} />
      <HowWork isButtonshow={true} locale={locale} />
      <OurMessage {...data.ourMessage} />
      <Vision {...data.ourVision} />
      <SectorSection {...data.sectorSection} />
      <WhyChooseRosewoodSection title="لماذا تختار روز وود" />
    </AboutWithAnimations>
  );
}
