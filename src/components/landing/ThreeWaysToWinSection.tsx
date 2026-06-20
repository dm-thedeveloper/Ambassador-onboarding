import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { OnboardingHeader } from "./OnboardingHeader";
import { WinWayCard } from "./WinWayCard";
import { winWays } from "@/lib/landing-data";
import { landingAssets } from "@/lib/landing-assets";

export function ThreeWaysToWinSection() {
  return (
    <section className="flex w-full flex-col overflow-hidden lg:min-h-screen">
      <OnboardingHeader activeStep={3} />

      <div className="flex flex-col lg:min-h-0 lg:flex-1 lg:flex-row lg:items-stretch">
        <div className="flex w-full min-w-0 flex-col lg:w-[45%] lg:shrink-0 lg:flex-[0_0_45%]">
          <div className="flex flex-1 flex-col justify-center px-6 py-10 pb-10 lg:px-12 lg:py-12 xl:px-16">
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <p className="text-[var(--text-body-sm)] font-[var(--font-weight-bold)] uppercase tracking-[0.12em] text-[var(--accent-gold)]">
                Step 3 of 6
              </p>
              <h2 className="mt-3 font-sans text-[clamp(2.25rem,4vw,3.75rem)] font-[450] leading-[1.08] tracking-normal text-black">
                <span className="block">Three ways to</span>
                <span className="block">win</span>
              </h2>
              <p className="mt-7 max-w-[22rem] font-sans text-[clamp(1.0625rem,1.2vw,1.125rem)] font-[var(--font-weight-regular)] leading-[1.5] text-[var(--hero-subtext-color)]">
                <span className="block">The competition period will last for one week.</span>
                <span className="block">Winners will be determined by app downloads upon launch.</span>
              </p>

              <div className="mt-8 flex flex-col gap-3.5">
                {winWays.map((way) => (
                  <WinWayCard key={way.id} way={way} />
                ))}
              </div>

              <div className="mt-8">
                <Button showArrow className="w-full max-w-none">
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex min-h-[22rem] w-full flex-1 items-center justify-center self-stretch bg-[var(--background)] px-4 py-10 lg:w-[55%] lg:shrink-0 lg:flex-[0_0_55%] lg:py-12">
          <Image
            src={landingAssets.threeWaysIllustration}
            alt="Illustrated path from campus level to market level to national level"
            width={900}
            height={1024}
            className="mx-auto block h-auto w-full max-w-[26rem] translate-y-4 object-contain object-center sm:max-w-[30rem] lg:max-w-[36rem] lg:translate-y-6 xl:max-w-[42rem] 2xl:max-w-[48rem]"
            sizes="(max-width: 1024px) 95vw, 55vw"
          />
        </div>
      </div>
    </section>
  );
}
