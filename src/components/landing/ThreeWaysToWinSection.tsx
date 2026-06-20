import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { OnboardingHeader } from "./OnboardingHeader";
import { WinWayCard } from "./WinWayCard";
import { winWays } from "@/lib/landing-data";
import { landingAssets } from "@/lib/landing-assets";
import { getOnboardingStepPath } from "@/lib/onboarding-routes";

type ThreeWaysToWinSectionProps = {
  activeStep?: number;
};

export function ThreeWaysToWinSection({ activeStep = 3 }: ThreeWaysToWinSectionProps) {
  return (
    <section className="step-screen">
      <OnboardingHeader activeStep={activeStep} />

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden lg:flex-row lg:items-stretch">
        <div className="flex min-h-0 flex-1 flex-col justify-center overflow-hidden px-4 py-4 sm:px-6 lg:w-[45%] lg:shrink-0 lg:flex-[0_0_45%] lg:justify-start lg:overflow-y-auto lg:px-12 lg:py-6 xl:px-16">
          <div className="step-enter w-full lg:max-w-lg xl:max-w-xl">
            <p className="text-[var(--text-body-sm)] font-[var(--font-weight-bold)] uppercase tracking-[0.12em] text-[var(--accent-gold)]">
              Step 3 of 6
            </p>
            <h2 className="step-heading mt-2">
              <span className="block lg:hidden">Three ways to win</span>
              <span className="hidden lg:block">Three ways to</span>
              <span className="hidden lg:block">win</span>
            </h2>
            <p className="step-lead mt-3 max-w-[28rem] lg:max-w-none">
              The competition period will last for one week. Winners will be determined by app
              downloads upon launch.
            </p>

            <div className="step-enter-stagger mt-5 flex flex-col gap-3.5">
              {winWays.map((way) => (
                <WinWayCard key={way.id} way={way} />
              ))}
            </div>

            <div className="step-enter step-enter--continue mt-5 w-full">
              <Button showArrow className="btn-cta-full" href={getOnboardingStepPath(4)}>
                Continue
              </Button>
            </div>
          </div>
        </div>

        <div className="step-enter-media hidden h-auto w-full shrink-0 place-items-center bg-[var(--background)] px-6 py-4 lg:grid lg:min-h-0 lg:flex-1 lg:basis-[55%] lg:shrink-0 lg:px-10 lg:py-6">
          <Image
            src={landingAssets.threeWaysIllustration}
            alt="Illustrated path from campus level to market level to national level"
            width={900}
            height={1024}
            className="h-auto max-h-full w-full max-w-[20rem] object-contain object-center sm:max-w-[24rem] lg:max-h-[88%] lg:max-w-[30rem] xl:max-w-[36rem] 2xl:max-w-[42rem]"
            sizes="(max-width: 1024px) 90vw, 55vw"
          />
        </div>
      </div>
    </section>
  );
}
