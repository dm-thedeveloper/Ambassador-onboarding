import { Button } from "@/components/ui/Button";
import { AmbassadorLinkCard } from "./AmbassadorLinkCard";
import { ShareYourLink } from "./ShareYourLink";
import { ambassadorProfile } from "@/lib/landing-data";

export function YouAreInSection() {
  return (
    <section className="flex w-full flex-col overflow-hidden lg:min-h-screen">
      <div className="flex flex-1 flex-col items-center px-4 pb-12 pt-14 sm:px-6 sm:pt-16 lg:px-12 lg:pb-16 lg:pt-24 xl:pt-28">
        <div className="w-full max-w-md lg:max-w-lg">
          <div className="text-center">
            <h2 className="font-sans text-[clamp(2.75rem,4.5vw,3.25rem)] font-[var(--font-weight-bold)] leading-[1.05] text-black">
              You&apos;re In.
            </h2>
            <p className="mt-8 font-display text-[clamp(1.5rem,2.4vw,2rem)] font-[var(--font-weight-bold)] leading-tight text-black lg:mt-10">
              {ambassadorProfile.school}
            </p>
            <p className="mt-3.5 text-[clamp(0.875rem,2.5vw,1.25rem)] font-[var(--font-weight-regular)] uppercase tracking-[0.14em] text-[#a67233] sm:tracking-[0.16em]">
              Ambassador
            </p>
            <p className="mt-2.5 font-sans text-[clamp(0.9375rem,2.2vw,1.125rem)] leading-normal text-[var(--hero-subtext-color)]">
              Welcome to the waitlist experience.
            </p>
          </div>

          <div className="mt-14">
            <AmbassadorLinkCard link={ambassadorProfile.link} />
          </div>

          <div className="mt-6 w-full">
            <Button className="btn-cta-full">Open Dashboard</Button>
          </div>

          <div className="mt-10">
            <ShareYourLink />
          </div>
        </div>
      </div>
    </section>
  );
}
