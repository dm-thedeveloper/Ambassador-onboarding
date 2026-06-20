import { prizeTiers } from "@/lib/landing-data";
import { PrizeCard } from "./PrizeCard";

export function PrizesSection() {
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="step-enter step-enter--delayed mx-auto max-w-2xl px-1 text-center">
          <h2 className="step-heading">
            Represent. Grow. Win.
          </h2>
          <p className="step-lead mx-auto mt-4 max-w-[20rem] sm:mt-5 sm:max-w-none">
            Prizes at the campus, market, and national level.
          </p>
        </div>

        <div className="step-enter-stagger step-enter-stagger--delayed mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {prizeTiers.map((prize) => (
            <PrizeCard key={prize.id} prize={prize} />
          ))}
        </div>
      </div>
    </section>
  );
}
