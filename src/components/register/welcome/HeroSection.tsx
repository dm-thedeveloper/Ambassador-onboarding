import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FeaturedPrizeCard } from "./FeaturedPrizeCard";
import { OnboardingHeader } from "@/components/onboarding/OnboardingHeader";
import { landingAssets } from "@/lib/landing-assets";
import { getOnboardingStepPath } from "@/lib/onboarding-routes";

type HeroSectionProps = {
  activeStep?: number;
};

export function HeroSection({ activeStep = 1 }: HeroSectionProps) {
  return (
    <section className="w-full overflow-hidden">
      <div className="grid min-h-screen lg:grid-cols-[minmax(0,34%)_minmax(0,66%)]">
        <div className="step-enter-media relative hidden min-h-[22rem] overflow-hidden lg:block lg:min-h-screen">
          <Image
            src={landingAssets.heroStudents}
            alt="Students laughing together on campus steps"
            fill
            priority
            className="object-cover object-left-top -translate-x-[2px]"
            sizes="(max-width: 1024px) 100vw, 34vw"
          />
        </div>

        <div className="flex min-w-0 flex-col">
          <OnboardingHeader activeStep={activeStep} />

          <div className="flex flex-1 flex-col px-4 pb-10 sm:px-6 lg:px-12 lg:pb-0 xl:px-14">
            <div className="flex flex-1 items-center py-8 sm:py-10 lg:py-12">
              <div className="grid w-full items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-8 xl:gap-14 2xl:gap-20">
                <div className="step-enter mx-auto min-w-0 max-w-xl text-center lg:mx-0 lg:text-left">
                  <h1 className="step-heading">
                    <span className="block">Welcome to</span>
                    <span className="block">Campus launch</span>
                  </h1>
                  <p className="step-lead mx-auto mt-5 max-w-[22rem] sm:mt-7 sm:max-w-[24rem] lg:mx-0 lg:max-w-[26rem]">
                    A little friendly competition to help launch bea on your campus.
                  </p>
                  <div className="mt-7 flex justify-center sm:mt-9 lg:justify-start">
                    <Button showArrow href={getOnboardingStepPath(2)}>
                      Start your journey
                    </Button>
                  </div>
                </div>

                <div className="step-enter-media step-enter-media--late hidden shrink-0 justify-self-end lg:block">
                  <FeaturedPrizeCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="step-enter-media px-4 pb-10 sm:px-6 lg:hidden">
        <FeaturedPrizeCard className="w-full" />
      </div>
    </section>
  );
}
