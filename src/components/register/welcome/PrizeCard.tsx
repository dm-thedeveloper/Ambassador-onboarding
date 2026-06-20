import Image from "next/image";
import type { PrizeTier } from "@/lib/landing-data";

type PrizeCardProps = {
  prize: PrizeTier;
};

export function PrizeCard({ prize }: PrizeCardProps) {
  return (
    <article className="relative flex h-full min-h-[19.5rem] flex-col overflow-hidden rounded-2xl border-[1.5px] border-[var(--prize-card-border)] bg-[var(--background)] px-3 pb-5 pt-11 sm:min-h-[24rem] sm:px-5 sm:pb-7 sm:pt-14">
      <span
        className={`absolute right-3 top-3 z-10 rounded-full border border-[var(--prizes-subtext-color)] px-3 py-1.5 text-[0.6875rem] font-[var(--font-weight-regular)] uppercase tracking-[0.06em] text-[var(--prizes-subtext-color)] sm:right-4 sm:top-4 sm:px-5 sm:py-2.5 sm:text-sm ${prize.badgeClassName}`}
      >
        {prize.badge}
      </span>

      <div className="flex flex-1 items-end justify-center overflow-hidden px-1 pb-2">
        <Image
          src={prize.illustration}
          alt=""
          width={403}
          height={403}
          sizes="(max-width: 640px) 70vw, (max-width: 1280px) 40vw, 19rem"
          className="h-auto max-h-[10.5rem] w-full max-w-[16rem] origin-bottom scale-[1.12] object-contain object-bottom invert sm:max-h-[13.5rem] sm:max-w-[19.2rem] sm:scale-[1.2]"
          aria-hidden
        />
      </div>

      <div className="shrink-0 pt-2 text-center sm:pt-3">
        <h3 className="font-display text-[1.125rem] font-semibold leading-tight text-[var(--text-primary)] sm:text-[1.375rem]">
          {prize.title}
        </h3>
        <p className="mt-1 font-sans text-[0.9375rem] font-[var(--font-weight-regular)] leading-snug text-[var(--prizes-subtext-color)] sm:mt-1.5 sm:text-[1.075rem]">
          {prize.description}
        </p>
      </div>
    </article>
  );
}
