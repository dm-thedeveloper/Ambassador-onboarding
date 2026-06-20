import { onboardingSteps } from "./landing-data";

export const REGISTER_BASE_PATH = "/register";

export function getOnboardingStepPath(stepId: number) {
  const step = onboardingSteps.find((item) => item.id === stepId);

  if (!step) {
    return REGISTER_BASE_PATH;
  }

  return `${REGISTER_BASE_PATH}/${step.slug}`;
}

export function parseOnboardingStepSlug(slug: string): number | null {
  const step = onboardingSteps.find((item) => item.slug === slug);

  return step?.id ?? null;
}

export const onboardingStepSlugs = onboardingSteps.map((step) => step.slug);
