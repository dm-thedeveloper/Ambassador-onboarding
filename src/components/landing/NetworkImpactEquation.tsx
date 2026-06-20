import Image from "next/image";
import type { ImpactEquationStep } from "@/lib/landing-data";

type NetworkImpactEquationProps = {
  steps: ImpactEquationStep[];
};

function EquationItem({ step }: { step: ImpactEquationStep }) {
  return (
    <div className="flex min-w-[3.25rem] flex-col items-center gap-2 sm:min-w-[4.5rem] sm:gap-2.5">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white lg:h-[3.25rem] lg:w-[3.25rem]">
        <Image
          src={step.icon}
          alt=""
          width={22}
          height={22}
          className="h-[1.375rem] w-[1.375rem] object-contain"
        />
      </div>
      <p className="text-center font-sans text-[0.6875rem] leading-tight text-black lg:text-[0.75rem]">
        {step.label}
      </p>
    </div>
  );
}

export function NetworkImpactEquation({ steps }: NetworkImpactEquationProps) {
  const [yourInvites, theirInvites, peopleReached] = steps;

  return (
    <div className="rounded-2xl bg-[var(--background-cream-light)] px-3 py-5 sm:px-4 sm:py-6 lg:px-6 lg:py-7">
      <div className="flex items-start justify-center gap-1.5 sm:justify-between sm:gap-4">
        <EquationItem step={yourInvites} />
        <span
          className="pt-3 font-sans text-[1.125rem] font-[var(--font-weight-regular)] text-black lg:text-[1.25rem]"
          aria-hidden="true"
        >
          +
        </span>
        <EquationItem step={theirInvites} />
        <span
          className="pt-3 font-sans text-[1.125rem] font-[var(--font-weight-regular)] text-black lg:text-[1.25rem]"
          aria-hidden="true"
        >
          =
        </span>
        <EquationItem step={peopleReached} />
      </div>
    </div>
  );
}
