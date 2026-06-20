import { notFound } from "next/navigation";
import { OnboardingStepPage } from "@/components/onboarding/OnboardingStepPage";
import {
  onboardingStepSlugs,
  parseOnboardingStepSlug,
} from "@/lib/onboarding-routes";

type RegisterStepPageProps = {
  params: Promise<{ step: string }>;
};

export function generateStaticParams() {
  return onboardingStepSlugs.map((step) => ({ step }));
}

export default async function RegisterStepPage({ params }: RegisterStepPageProps) {
  const { step } = await params;
  const stepId = parseOnboardingStepSlug(step);

  if (!stepId) {
    notFound();
  }

  return <OnboardingStepPage stepId={stepId} />;
}
