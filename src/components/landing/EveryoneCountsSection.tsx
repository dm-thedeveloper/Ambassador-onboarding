import { Button } from "@/components/ui/Button";
import { NetworkImpactEquation } from "./NetworkImpactEquation";
import { OnboardingHeader } from "./OnboardingHeader";
import { impactEquationSteps } from "@/lib/landing-data";

export function EveryoneCountsSection() {
  return (
    <section className="flex w-full flex-col overflow-hidden lg:min-h-screen">
      <OnboardingHeader activeStep={5} />

      <div className="flex flex-1 flex-col px-4 py-10 pb-12 sm:px-6 lg:px-12 lg:py-12 xl:px-16">
        <div className="w-full lg:w-1/2 lg:max-w-[50%]">
          <p className="text-[var(--text-body-sm)] font-[var(--font-weight-bold)] uppercase tracking-[0.12em] text-[var(--accent-gold)]">
            Step 5 of 6
          </p>
          <h2 className="mt-3 font-sans text-[clamp(2.25rem,4vw,3.75rem)] font-[450] leading-[1.08] tracking-normal text-black">
            <span className="block">Everyone counts.</span>
            <span className="block">Your network creates</span>
            <span className="block">your impact</span>
          </h2>
          <p className="mt-7 font-sans text-[clamp(1.0625rem,1.2vw,1.125rem)] font-[var(--font-weight-regular)] leading-[1.5] text-[var(--hero-subtext-color)]">
            <span className="block">The people you invite count.</span>
            <span className="block">The people they invite count too.</span>
            <span className="block">Grow the largest network and</span>
            <span className="block">climb the leaderboard.</span>
          </p>

          <div className="mt-8">
            <NetworkImpactEquation steps={impactEquationSteps} />
          </div>

          <div className="mt-8 w-full">
            <Button showArrow className="btn-cta-full">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
