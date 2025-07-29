import React from "react";
import WoodHero from "./_components/WoodHero";
import WoodStepsList from "./_components/WoodStepsList";
import { fetchWoodStepsPageData } from "@/lib/api/cms";

const WoodSteps = async ({ params }) => {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const woodStepsData = await fetchWoodStepsPageData();

  return (
    <>
      <WoodHero heroData={woodStepsData.hero} />
      <WoodStepsList stepsData={woodStepsData.steps} locale={locale} />
    </>
  );
};

export default WoodSteps;
