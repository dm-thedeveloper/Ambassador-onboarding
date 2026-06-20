import { Button } from "@/components/ui/Button";
import { AmbassadorLinkCard } from "./AmbassadorLinkCard";
import { OnboardingHeader } from "@/components/onboarding/OnboardingHeader";
import { ShareYourLink } from "./ShareYourLink";
import { ambassadorProfile } from "@/lib/landing-data";
import { getOnboardingStepPath } from "@/lib/onboarding-routes";

type YouAreInSectionProps = {
  activeStep?: number;
};

export function YouAreInSection({ activeStep = 6 }: YouAreInSectionProps) {
  return (
    <section className="step-screen">
      <OnboardingHeader activeStep={activeStep} />

      <div className="flex min-h-0 flex-1 flex-col justify-center overflow-hidden px-4 py-4 sm:px-6 lg:px-12 lg:py-6">
        <div className="step-enter mx-auto w-full max-w-md lg:max-w-lg">
          <div className="text-center">
            <h2 className="step-heading">You&apos;re In.</h2>
            <p className="mt-3 font-display text-[1.125rem] font-[var(--font-weight-bold)] leading-tight text-black lg:text-[1.375rem]">
              {ambassadorProfile.school}
            </p>
            <p className="mt-1.5 text-[0.75rem] font-[var(--font-weight-regular)] uppercase tracking-[0.14em] text-[#a67233]">
              Ambassador
            </p>
            <p className="step-lead mt-2">Welcome to the waitlist experience.</p>
          </div>

          <div className="mt-5">
            <AmbassadorLinkCard link={ambassadorProfile.link} />
          </div>

          <div className="mt-4 w-full">
            <Button className="btn-cta-full" href={getOnboardingStepPath(1)}>
              Open Dashboard
            </Button>
          </div>

          <div className="mt-4">
            <ShareYourLink />
          </div>
        </div>
      </div>
    </section>
  );
}
