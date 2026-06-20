"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { onboardingSteps } from "@/lib/landing-data";
import { getOnboardingStepPath } from "@/lib/onboarding-routes";

const STEP_TRANSITION_KEY = "onboarding-step-transition";

export function saveOnboardingStepForTransition(stepId: number) {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(STEP_TRANSITION_KEY, String(stepId));
  }
}

type MobileOnboardingNavProps = {
  activeStep: number;
};

function StepNavControl({
  stepId,
  direction,
  activeStep,
}: {
  stepId: number | null;
  direction: "prev" | "next";
  activeStep: number;
}) {
  const step = stepId ? onboardingSteps.find((item) => item.id === stepId) : null;
  const Icon = direction === "prev" ? FiChevronLeft : FiChevronRight;

  if (!step) {
    return (
      <span className="mobile-header-step-btn mobile-header-step-btn--disabled" aria-hidden="true">
        <Icon className="mobile-header-step-btn-icon" />
      </span>
    );
  }

  return (
    <Link
      href={getOnboardingStepPath(step.id)}
      className="mobile-header-step-btn interactive-press"
      aria-label={`Go to step ${step.id}: ${step.label}`}
      onClick={() => saveOnboardingStepForTransition(activeStep)}
    >
      <Icon className="mobile-header-step-btn-icon" aria-hidden="true" />
    </Link>
  );
}

export function MobileOnboardingNav({ activeStep }: MobileOnboardingNavProps) {
  const prevStepId = activeStep > 1 ? activeStep - 1 : null;
  const nextStepId = activeStep < onboardingSteps.length ? activeStep + 1 : null;
  const currentStep = onboardingSteps.find((step) => step.id === activeStep);
  const [dotsReady, setDotsReady] = useState(false);

  useEffect(() => {
    const storedStep = sessionStorage.getItem(STEP_TRANSITION_KEY);
    const shouldAnimate = storedStep !== null && Number(storedStep) !== activeStep;

    setDotsReady(!shouldAnimate);
    sessionStorage.setItem(STEP_TRANSITION_KEY, String(activeStep));

    if (!shouldAnimate) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setDotsReady(true));
    });

    return () => cancelAnimationFrame(frame);
  }, [activeStep]);

  return (
    <>
      <div className="mobile-onboarding-header-nav" aria-label="Onboarding progress">
        <StepNavControl stepId={prevStepId} direction="prev" activeStep={activeStep} />

        <div className="mobile-onboarding-header-current" aria-current="step">
          <span className="mobile-onboarding-header-current-label">
            {currentStep?.label ?? "Welcome"}
          </span>
        </div>

        <StepNavControl stepId={nextStepId} direction="next" activeStep={activeStep} />
      </div>

      <div className="mobile-onboarding-header-dots" aria-hidden="true">
        <div className="mobile-onboarding-header-dots-track">
          {onboardingSteps.map((step) => {
            const isActive = step.id === activeStep;
            const isComplete = step.id < activeStep;

            return (
              <Link
                key={step.id}
                href={getOnboardingStepPath(step.id)}
                className={`mobile-onboarding-header-dot interactive-press ${isActive && dotsReady ? "mobile-onboarding-header-dot--active" : ""} ${isComplete ? "mobile-onboarding-header-dot--complete" : ""}`}
                aria-label={`Step ${step.id}: ${step.label}`}
                aria-current={isActive ? "step" : undefined}
                onClick={() => saveOnboardingStepForTransition(activeStep)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
