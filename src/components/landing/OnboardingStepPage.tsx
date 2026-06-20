import type { ComponentType } from "react";
import { notFound } from "next/navigation";
import { CreateAccountSection } from "./CreateAccountSection";
import { EveryoneCountsSection } from "./EveryoneCountsSection";
import { HeroSection } from "./HeroSection";
import { PrizesSection } from "./PrizesSection";
import { SchoolAndMarketSection } from "./SchoolAndMarketSection";
import { SectionDivider } from "./SectionDivider";
import { ThreeWaysToWinSection } from "./ThreeWaysToWinSection";
import { YouAreInSection } from "./YouAreInSection";

const stepSections: Record<number, ComponentType<{ activeStep: number }>> = {
  2: SchoolAndMarketSection,
  3: ThreeWaysToWinSection,
  4: CreateAccountSection,
  5: EveryoneCountsSection,
  6: YouAreInSection,
};

type OnboardingStepPageProps = {
  stepId: number;
};

function WelcomeStepPage() {
  return (
    <>
      <HeroSection activeStep={1} />
      <SectionDivider />
      <PrizesSection />
    </>
  );
}

export function OnboardingStepPage({ stepId }: OnboardingStepPageProps) {
  if (stepId === 1) {
    return (
      <div className="min-h-full overflow-x-hidden bg-[var(--background)]">
        <WelcomeStepPage />
      </div>
    );
  }

  const Section = stepSections[stepId];

  if (!Section) {
    notFound();
  }

  return (
    <div className="h-screen overflow-hidden bg-[var(--background)]">
      <Section activeStep={stepId} />
    </div>
  );
}
