import Hero from "./_components/hero";
import HowWork from "./_components/HowWork";
import OurMessage from "./_components/ourMessage";
import Vision from "./_components/vision";
import SectorSection from "./_components/sectorSection";
import WhyChooseRosewoodSection from "@/components/WhyChooseRosewoodSection";
import { fetchAllAboutPageData } from "@/lib/api/cms";

export default async function About() {
  const data = await fetchAllAboutPageData();

  return (
    <>
      <Hero {...data.hero} />
      <HowWork isButtonshow={true} />
      <OurMessage {...data.ourMessage} />
      <Vision {...data.ourVision} />
      <SectorSection {...data.sectorSection} />
      <WhyChooseRosewoodSection title="لماذا تختار روز وود" />
    </>
  );
}
