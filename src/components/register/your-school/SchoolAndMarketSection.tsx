import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { OnboardingHeader } from "@/components/onboarding/OnboardingHeader";
import { SchoolInfoCard } from "./SchoolInfoCard";
import { featuredSchool } from "@/lib/landing-data";
import { landingAssets } from "@/lib/landing-assets";
import { getOnboardingStepPath } from "@/lib/onboarding-routes";

type SchoolAndMarketSectionProps = {
  activeStep?: number;
};

export function SchoolAndMarketSection({ activeStep = 2 }: SchoolAndMarketSectionProps) {
  return (
    <section className="step-screen">
      <OnboardingHeader activeStep={activeStep} />

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden lg:flex-row lg:items-stretch">
        <div className="flex min-h-0 flex-1 flex-col justify-center overflow-hidden px-4 py-4 sm:px-6 lg:w-[45%] lg:shrink-0 lg:flex-[0_0_45%] lg:px-12 lg:py-6 xl:px-16">
          <div className="step-enter w-full lg:max-w-lg xl:max-w-xl">
            <p className="text-[var(--text-body-sm)] font-[var(--font-weight-bold)] uppercase tracking-[0.12em] text-[var(--accent-gold)]">
              Step 2 of 6
            </p>
            <h2 className="step-heading mt-4">
              Your school &amp; market
            </h2>
            <p className="step-lead mt-6 max-w-[28rem] lg:max-w-none">
              Help represent Bea with your peers. Our interactive waitlist experience stems from
              your invites.
            </p>

            <div className="mt-5">
              <SchoolInfoCard school={featuredSchool} />
            </div>

            <p className="mt-2 text-[0.6875rem] leading-snug text-[var(--text-secondary)] lg:text-[var(--text-body-sm)]">
              {featuredSchool.marketContext}
            </p>

            <div className="mt-5 w-full">
              <Button showArrow className="btn-cta-full" href={getOnboardingStepPath(3)}>
                Claim my spot
              </Button>
            </div>
          </div>
        </div>

        <div className="step-enter-media relative hidden min-h-0 overflow-hidden lg:block lg:w-[55%] lg:flex-[0_0_55%]">
          <Image
            src={landingAssets.schoolAndMarketHero}
            alt="University campus building with clock tower surrounded by autumn trees"
            fill
            priority
            className="origin-right scale-[1.35] object-cover object-right lg:scale-[1.45]"
            sizes="55vw"
          />
        </div>
      </div>
    </section>
  );
}
