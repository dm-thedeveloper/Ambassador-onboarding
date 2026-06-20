import { Button } from "@/components/ui/Button";
import { NetworkImpactEquation } from "./NetworkImpactEquation";
import { OnboardingHeader } from "./OnboardingHeader";
import { impactEquationSteps } from "@/lib/landing-data";
import { getOnboardingStepPath } from "@/lib/onboarding-routes";

type EveryoneCountsSectionProps = {
  activeStep?: number;
};

export function EveryoneCountsSection({ activeStep = 5 }: EveryoneCountsSectionProps) {
  return (
    <section className="step-screen">
      <OnboardingHeader activeStep={activeStep} />

      <div className="flex min-h-0 flex-1 flex-col justify-center overflow-hidden px-4 py-4 sm:px-6 lg:px-12 lg:py-6 xl:px-16">
        <div className="step-enter w-full lg:w-1/2 lg:max-w-[50%]">
          <p className="text-[var(--text-body-sm)] font-[var(--font-weight-bold)] uppercase tracking-[0.12em] text-[var(--accent-gold)]">
            Step 5 of 6
          </p>
          <h2 className="step-heading mt-2">
            <span className="block">Everyone counts.</span>
            <span className="block">Your network creates</span>
            <span className="block">your impact</span>
          </h2>
          <p className="step-lead mt-4">
            <span className="block">The people you invite count.</span>
            <span className="block">The people they invite count too.</span>
            <span className="block">Grow the largest network and climb the leaderboard.</span>
          </p>

          <div className="mt-5">
            <NetworkImpactEquation steps={impactEquationSteps} />
          </div>

          <div className="mt-5 w-full">
            <Button showArrow className="btn-cta-full" href={getOnboardingStepPath(6)}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
