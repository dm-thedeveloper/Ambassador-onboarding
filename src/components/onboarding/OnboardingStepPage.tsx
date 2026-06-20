import type { ComponentType } from "react";
import { notFound } from "next/navigation";
import { CreateAccountSection } from "@/components/register/account/CreateAccountSection";
import { EveryoneCountsSection } from "@/components/register/invites/EveryoneCountsSection";
import { ThreeWaysToWinSection } from "@/components/register/prizes/ThreeWaysToWinSection";
import { HeroSection } from "@/components/register/welcome/HeroSection";
import { PrizesSection } from "@/components/register/welcome/PrizesSection";
import { SchoolAndMarketSection } from "@/components/register/your-school/SchoolAndMarketSection";
import { YouAreInSection } from "@/components/register/youre-in/YouAreInSection";
import { SectionDivider } from "./SectionDivider";

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
