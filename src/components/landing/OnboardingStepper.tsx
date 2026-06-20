import { onboardingSteps } from "@/lib/landing-data";

type OnboardingStepperProps = {
  activeStep?: number;
  align?: "start" | "end";
};

export function OnboardingStepper({ activeStep = 1, align = "start" }: OnboardingStepperProps) {
  return (
    <nav
      aria-label="Onboarding progress"
      className={`w-full min-w-0 max-w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
        align === "end" ? "flex justify-end" : "flex justify-start"
      }`}
    >
      <ol className="flex w-max items-center gap-4 lg:gap-5 xl:gap-7">
        {onboardingSteps.map((step) => {
          const isActive = step.id === activeStep;

          return (
            <li key={step.id} className="flex items-center gap-2">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[var(--text-body-sm)] font-[var(--font-weight-regular)] ${
                  isActive
                    ? "bg-[var(--step-active)] text-[var(--text-inverse)]"
                    : "border border-[var(--step-inactive)] bg-transparent text-[var(--step-number-inactive)]"
                }`}
              >
                {step.id}
              </span>
              <span
                className={`whitespace-nowrap text-[var(--text-body-sm)] text-[var(--text-primary)] ${
                  isActive ? "font-[var(--font-weight-bold)]" : "font-[var(--font-weight-regular)]"
                }`}
              >
                {step.label}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
