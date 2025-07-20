import React from 'react'
import WoodHero from './_components/WoodHero'
import WoodStepsList from './_components/WoodStepsList';
import { fetchWoodStepsPageData } from '@/lib/cms';

const WoodSteps = async () => {
  const woodStepsData = await fetchWoodStepsPageData();

  return (
    <>
      <WoodHero heroData={woodStepsData.hero} />
      <WoodStepsList stepsData={woodStepsData.steps} />
    </>
  );
}

export default WoodSteps
