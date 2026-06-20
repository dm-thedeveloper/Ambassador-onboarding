import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FeaturedPrizeCard } from "./FeaturedPrizeCard";
import { OnboardingHeader } from "./OnboardingHeader";
import { landingAssets } from "@/lib/landing-assets";

export function HeroSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="grid min-h-screen lg:grid-cols-[minmax(0,34%)_minmax(0,66%)]">
        <div className="relative min-h-[22rem] overflow-hidden lg:min-h-screen">
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
          <OnboardingHeader activeStep={1} />

          <div className="flex flex-1 flex-col px-6 pb-10 lg:px-12 lg:pb-0 xl:px-14">
            <div className="flex flex-1 items-center py-10 lg:py-12">
              <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-8 xl:gap-14 2xl:gap-20">
                <div className="min-w-0 max-w-xl">
                  <h1 className="font-sans text-[clamp(2.25rem,4vw,var(--hero-title-size))] font-[450] leading-[var(--hero-title-leading)] tracking-normal text-black">
                    <span className="block">Welcome to</span>
                    <span className="block">Campus launch</span>
                  </h1>
                  <p className="mt-7 max-w-[24rem] font-sans text-[clamp(1.125rem,1.5vw,var(--hero-subtext-size))] font-[var(--font-weight-regular)] leading-[var(--hero-subtext-leading)] text-[var(--hero-subtext-color)] lg:max-w-[26rem]">
                    A little friendly competition to help launch bea on your campus.
                  </p>
                  <div className="mt-9">
                    <Button showArrow>Start your journey</Button>
                  </div>
                </div>

                <div className="hidden shrink-0 justify-self-end lg:block">
                  <FeaturedPrizeCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-6 pb-10 lg:hidden">
        <FeaturedPrizeCard />
      </div>
    </section>
  );
}
