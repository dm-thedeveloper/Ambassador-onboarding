import type { SchoolInfo } from "@/lib/landing-data";

type SchoolInfoCardProps = {
  school: SchoolInfo;
};

export function SchoolInfoCard({ school }: SchoolInfoCardProps) {
  return (
    <div className="rounded-xl bg-white px-4 py-3.5">
      <p className="text-[0.6875rem] font-[var(--font-weight-bold)] uppercase tracking-[0.12em] text-[var(--accent-gold)] lg:text-[var(--text-body-sm)]">
        Your school
      </p>
      <p className="mt-2 font-display text-[1.125rem] font-[var(--font-weight-medium)] leading-tight text-black">
        {school.name}
      </p>
      <div className="mt-3 flex items-center gap-2" aria-hidden="true">
        {Array.from({ length: school.totalSpots }, (_, index) => {
          const isClaimed = index < school.claimedSpots;

          return (
            <span
              key={index}
              className={`h-4 w-4 rounded-full ${
                isClaimed
                  ? "bg-[var(--step-active)]"
                  : "border border-[var(--step-inactive)] bg-transparent"
              }`}
            />
          );
        })}
      </div>
      <p className="mt-2 text-[0.6875rem] text-[var(--text-secondary)] lg:text-[var(--text-body-sm)]">
        {school.claimedSpots} of {school.totalSpots} spots claimed
      </p>
    </div>
  );
}
