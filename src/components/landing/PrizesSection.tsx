import { prizeTiers } from "@/lib/landing-data";
import { PrizeCard } from "./PrizeCard";

export function PrizesSection() {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-sans text-[clamp(1.875rem,2.8vw,2.75rem)] font-[var(--font-weight-regular)] leading-[1.15] tracking-normal text-black">
            Represent. Grow. Win.
          </h2>
          <p className="mt-5 font-sans text-[clamp(1.0625rem,1.25vw,1.25rem)] font-[var(--font-weight-regular)] leading-normal text-[var(--prizes-subtext-color)]">
            Prizes at the campus, market, and national level.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {prizeTiers.map((prize) => (
            <PrizeCard key={prize.id} prize={prize} />
          ))}
        </div>
      </div>
    </section>
  );
}
