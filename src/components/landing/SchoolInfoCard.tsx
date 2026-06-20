import type { SchoolInfo } from "@/lib/landing-data";

type SchoolInfoCardProps = {
  school: SchoolInfo;
};

export function SchoolInfoCard({ school }: SchoolInfoCardProps) {
  return (
    <div className="rounded-2xl bg-white px-6 py-8 lg:px-7 lg:py-9">
      <p className="text-[var(--text-body-sm)] font-[var(--font-weight-bold)] uppercase tracking-[0.12em] text-[var(--accent-gold)]">
        Your school
      </p>
      <p className="mt-3 font-display text-[clamp(1.5rem,2.2vw,2rem)] font-[var(--font-weight-medium)] leading-tight text-black">
        {school.name}
      </p>
      <div className="mt-6 flex items-center gap-2.5" aria-hidden="true">
        {Array.from({ length: school.totalSpots }, (_, index) => {
          const isClaimed = index < school.claimedSpots;

          return (
            <span
              key={index}
              className={`h-5 w-5 rounded-full ${
                isClaimed
                  ? "bg-[var(--step-active)]"
                  : "border border-[var(--step-inactive)] bg-transparent"
              }`}
            />
          );
        })}
      </div>
      <p className="mt-3 text-[var(--text-body-sm)] text-[var(--text-secondary)]">
        {school.claimedSpots} of {school.totalSpots} spots claimed
      </p>
    </div>
  );
}
