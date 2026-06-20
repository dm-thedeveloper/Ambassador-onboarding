import Image from "next/image";
import type { PrizeTier } from "@/lib/landing-data";

type PrizeCardProps = {
  prize: PrizeTier;
};

export function PrizeCard({ prize }: PrizeCardProps) {
  return (
    <article className="relative grid h-[26rem] grid-rows-[1fr_auto] overflow-hidden rounded-2xl border-[1.5px] border-[var(--prize-card-border)] bg-[var(--background)] px-5 pb-7 pt-14">
      <span
        className={`absolute right-4 top-4 z-10 rounded-full border border-[var(--prizes-subtext-color)] px-5 py-2.5 text-sm font-[var(--font-weight-regular)] uppercase tracking-[0.06em] text-[var(--prizes-subtext-color)] ${prize.badgeClassName}`}
      >
        {prize.badge}
      </span>

      <div className="flex min-h-0 items-end justify-center overflow-hidden px-1">
        <Image
          src={prize.illustration}
          alt=""
          width={403}
          height={403}
          className="h-auto max-h-[14.75rem] w-full max-w-[19.2rem] origin-bottom scale-[1.2] object-contain object-bottom invert"
          aria-hidden
        />
      </div>

      <div className="shrink-0 pt-3 text-center">
        <h3 className="font-display text-[1.375rem] font-semibold leading-tight text-[var(--text-primary)]">
          {prize.title}
        </h3>
        <p className="mt-1.5 font-sans text-[1.075rem] font-[var(--font-weight-regular)] leading-snug text-[var(--prizes-subtext-color)]">
          {prize.description}
        </p>
      </div>
    </article>
  );
}
