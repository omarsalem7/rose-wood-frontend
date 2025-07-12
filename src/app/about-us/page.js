import Hero from "./_components/hero";
import HowWork from "./_components/howWork";
import OurMessage from "./_components/ourMessage";
import Vision from "./_components/vision";
import SectorSection from "./_components/sectorSection";
import WhyChooseRosewoodSection from "@/components/WhyChooseRosewoodSection";

export default function About() {
  return (
    <>
      <Hero />
      <HowWork />
      <OurMessage />
      <Vision />
      <SectorSection />
      <WhyChooseRosewoodSection title="لماذا تختار روز وود" />
    </>
  );
}
