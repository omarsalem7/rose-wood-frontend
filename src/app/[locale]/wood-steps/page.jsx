import React from "react";
import WoodHero from "./_components/WoodHero";
import WoodStepsList from "./_components/WoodStepsList";
import WoodStepsWithAnimations from "./_components/WoodStepsWithAnimations";
import { fetchWoodStepsPageData } from "@/lib/api/cms";
export async function generateMetadata({ params }) {
  const { locale } =await params;
  return {
    title: locale === "ar" ? "خطوات التصنيع" : "Wood Steps",
    description: "حكاية تبدأ من الخشب... وتنتهي بتحفة",
  };
}
const WoodSteps = async ({ params }) => {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const woodStepsData = await fetchWoodStepsPageData();

  return (
    <WoodStepsWithAnimations>
      <WoodHero heroData={woodStepsData.hero} />
      <WoodStepsList stepsData={woodStepsData.steps} locale={locale} />
    </WoodStepsWithAnimations>
  );
};

export default WoodSteps;
