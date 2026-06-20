import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { OnboardingHeader } from "./OnboardingHeader";
import { SchoolInfoCard } from "./SchoolInfoCard";
import { featuredSchool } from "@/lib/landing-data";
import { landingAssets } from "@/lib/landing-assets";

export function SchoolAndMarketSection() {
  return (
    <section className="flex w-full flex-col overflow-hidden lg:min-h-screen">
      <OnboardingHeader activeStep={2} />

      <div className="flex flex-col lg:min-h-0 lg:flex-1 lg:flex-row">
        <div className="flex w-full min-w-0 flex-col lg:w-[45%] lg:shrink-0 lg:flex-[0_0_45%]">
          <div className="flex flex-1 flex-col justify-center px-6 py-10 pb-10 lg:px-12 lg:py-12 xl:px-16">
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <p className="text-[var(--text-body-sm)] font-[var(--font-weight-bold)] uppercase tracking-[0.12em] text-[var(--accent-gold)]">
                Step 2 of 6
              </p>
              <h2 className="mt-4 font-display text-[clamp(2.25rem,3.5vw,3.75rem)] font-[var(--font-weight-medium)] leading-[1.15] tracking-normal text-black">
                Your school &amp; market
              </h2>
              <p className="mt-6 max-w-[28rem] font-sans text-[clamp(1.0625rem,1.25vw,1.125rem)] font-[var(--font-weight-regular)] leading-[1.55] text-[var(--hero-subtext-color)]">
                Help represent Bea with your peers. Our interactive waitlist experience stems from
                your invites.
              </p>

              <div className="mt-8">
                <SchoolInfoCard school={featuredSchool} />
              </div>

              <p className="mt-4 text-[var(--text-body-sm)] text-[var(--text-secondary)]">
                {featuredSchool.marketContext}
              </p>

              <div className="mt-8">
                <Button showArrow className="w-full max-w-none">
                  Claim my spot
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative min-h-[22rem] w-full overflow-hidden lg:min-h-screen lg:w-[55%] lg:shrink-0 lg:flex-[0_0_55%]">
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
