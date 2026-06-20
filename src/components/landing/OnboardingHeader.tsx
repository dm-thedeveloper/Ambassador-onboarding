import Link from "next/link";
import { OnboardingStepper } from "./OnboardingStepper";

type OnboardingHeaderProps = {
  activeStep?: number;
};

export function OnboardingHeader({ activeStep = 1 }: OnboardingHeaderProps) {
  return (
    <header className="w-full shrink-0 px-6 pt-5 lg:px-10 lg:pt-6">
      <div className="flex flex-col items-end gap-4 lg:gap-5">
        <p className="text-[var(--text-body-sm)] text-[var(--text-secondary)]">
          Already an ambassador?{" "}
          <Link
            href="/login"
            className="font-[var(--font-weight-bold)] text-[var(--text-primary)] underline-offset-4 hover:underline"
          >
            Log In
          </Link>
        </p>
        <div className="w-full min-w-0 overflow-hidden">
          <OnboardingStepper activeStep={activeStep} align="end" />
        </div>
      </div>
    </header>
  );
}
